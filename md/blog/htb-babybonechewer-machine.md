---
title: HTB write up for the baby BoneChewerCon[EASY] machine
subtitle: proper server configs would be nice!
description: write up for the baby BoneChewerCon[Easy] machine
published: true
datePublished: 1651855631809
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - ctf
  - writeup
  - hackthebox
  - BoneChewerCon
  - htb
  - baby
thumbnailPhoto: /htb/babybonechewer/babybonechewerevent.png
bannerPhoto: /
canonicalUrl:
---

# baby BoneChewerCon

This is my Write Up for the "baby BoneChewerCon" machine from Hack The Box.


## Enumeration
We are given an URL. This leads us to a website calling for the registration to its upcoming event. We see we have a few graphics and most noteably and input field. So naturally we want to go ahead and try to XSS this.
![excel-file-report](/htb/babybonechewer/babybonechewerevent.png)

Funily enough, actually just entering ANYTHING like ‘lol’ into the field yields us the flag from the debugger..

![excel-file-report](/htb/babybonechewer/babybonechewerflag.png)
It seems the webservers configuration or the service run by the server is not correctly configured as a production server, thus still showing debug info. Be sure to always turn off any debugging info in Production environments.