---
title: the cURL cheat sheet
description: you need.
published: false
datePublished: 1609416432536
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile.jpg
tags:
  - cheatsheet
  - commandline
  - curl
  - security
thumbnailPhoto: /default.png
bannerPhoto: /default.png
canonicalUrl:
---

# cURL What is it?

cURL describes itself as:

> command line tool and library for transferring data with URLs

cURL is a multipurpose networking tool which has lots of useful usecases.

# cheat sheet

<table>
<thead>
<tr>
<th><strong>Command</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>curl http://lwlx.xyz</code></td>
<td>GET request with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl http://lwlx.xyz -v</code></td>
<td>Verbose GET request with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl http://admin:password@lwlx.xyz/ -vvv</code></td>
<td><code>cURL</code> Basic Auth login</td>
</tr>
<tr>
<td><code>curl -u admin:password http://lwlx.xyz/ -vvv</code></td>
<td>Alternate <code>cURL</code> Basic Auth login</td>
</tr>
<tr>
<td><code>curl -u admin:password -L http://lwlx.xyz/</code></td>
<td><code>cURL</code> Basic Auth login, follow redirection</td>
</tr>
<tr>
<td><code>curl -u admin:password 'http://lwlx.xyz/search.php?port_code=us'</code></td>
<td><code>cURL</code> GET request with parameter</td>
</tr>
<tr>
<td><code>curl -d 'username=user&amp;password=pass' -L http://lwlx.xyz/login.php</code></td>
<td>POST request with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl -d 'username=user&amp;password=pass' -L http://lwlx.xyz/login.php -v</code></td>
<td>Debugging with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl -d 'username=user&amp;password=pass' -L --cookie-jar /dev/null http://lwlx.xyz/login.php -v</code></td>
<td>Cookie usage with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl -d 'username=user&amp;password=pass' -L --cookie-jar cookies.txt http://lwlx.xyz/login.php</code></td>
<td><code>cURL</code> with cookie file</td>
</tr>
<tr>
<td><code>curl -H 'Content-Type: application/json' -d '{ "username" : "user", "password" : "pass" }'</code></td>
<td><code>cURL</code> specify content type</td>
</tr>
<tr>
<td><code>curl -X OPTIONS http://lwlx.xyz/ -vv</code></td>
<td><code>cURL</code> OPTIONS request</td>
</tr>
<tr>
<td><code>curl -X PUT -d @test.txt http://lwlx.xyz/test.txt -vv</code></td>
<td>File upload with <code>cURL</code></td>
</tr>
<tr>
<td><code>curl -X DELETE http://lwlx.xyz/test.txt -vv</code></td>
<td>DELETE method with <code>cURL</code></td>
</tr>
</tbody>
</table>
