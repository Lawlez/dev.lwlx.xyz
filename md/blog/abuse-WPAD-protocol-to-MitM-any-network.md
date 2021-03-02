---
title: "MitM using WPAD Proxy Protocol:"
subtitle: Getting a reverse shell on windows client
description: When a decision made 25+ years ago makes your computer vulnerable to the stupidest attack you've heard of.
published: true
datePublished: 1605802028864
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - MitM
  - WPAD
  - aPAColypse
  - PAC
  - exploit
  - security
thumbnailPhoto: /wpad-responder-exploit/wpad_thumb.jpg
bannerPhoto: /wpad-responder-exploit/wpad_post_img
---

## What is WPAD? `[WIP]`

Sometime in the early days of the Internet - the web 1.0 era - a couple of devs at Netscape decided that JavaScript was an acceptable language to write configuration files in. The result was Proxy Auto-Config (PAC) - a configuration file format that works as follows: The browser connects to a pre-configured server, downloads the PAC file, and executes a particular Javascript function to determine proper proxy configuration. Why not? It is more expressive and less tedious than XML and seems reasonable to provide configurations to many clients.

PAC itself works with a protocol called Web Proxy Auto-Discovery (WPAD) WPAD removes the need for the browser or the user to have a pre-configured server to connect to. Instead, WPAD allows the computer to query the local network to discover the server to load the PAC file from.

## WPAD always follows this schema:

1. Determine if the system should use WPAD, either by looking at browser settings or asking the host OS if the browser is set to match the OS setting.
2. Ensure a network connection is available.
3. If WPAD is to be used, issue a DHCPINFORM query to ask for the URL of the PAC script.
4. If the DHCPINFORM query fails and does not return a URL, perform a DNS lookup for the hostname `wpad`.
5. If the DNS lookup succeeds, then the PAC URL is `http://wpad/wpad.dat`.
6. Establish an HTTP(S) connection to the discovered URL's server, thus downloading the PAC script.
7. If the PAC script has downloaded successfully, parse it, and optionally compile it.
8. For each network request, call the `FindProxyForURL()` function in the PAC script and use the proxy settings returned from this function.

> WPAD is practically asking the network "Hey there! would you like to send me a **payload** i can **execute**?"

You can clearly see how a bad actor can abuse this.

Windows is certainly not the only piece of software that implements WPAD. Other operating systems (OS X, Linux) and applications do as well. For example, Google Chrome also has a WPAD implementation, but in Chrome's case, the JavaScript code from the PAC is evaluated inside of a sandbox. Other operating systems that support WPAD don't enable it by default anymore. That is why Windows is currently the most attractive target for this sort of attack.

## Exploit basis

When a device has these protocols enabled, if the local network DNS cannot resolve the name, the machine will ask the whole network to get a host. So, any host of the network, who knows its IP, can reply. Even if a host replies with incorrect information, it will still be regarded as a legitimate response.

# Exploitable scenario

1. victim and host are in the same network
2. The victim opens the browser, which is configured with the option `automatically detect settings` in `Local Area Network (LAN) Settings`.
3. The name resolution, which is performed with the steps we mentioned earlier, will be questioned on the victim's computer first.
4. In step 3, because the DNS Server does not have a corresponding record, the system's name is sent as LLMNR or NetBIOS-NS query.
5. The attacker listens to network traffic, catches name resolution query. It tells to the victim that he has the wpad.dat the victim is look for.

According to the flow above, if an attacker wants to make sure that the attack will be successful, he must perform the following attacks:

- DHCP poisoning attack
- DNS poisoning attack
- WPAD poisoning attack

<!--
# proof of concept

## install Responder

## configure config
-->

## start analyzing first

using the `-A` option enables analyze only mode
**macOS:**

```shell
./Responder.py -i <your ip address> -A
```

**Linux:**

```shell
./Responder.py -I <your net interface> -A
```

## create payload adn custom FindProxyForURL()

## run the attack:

- `-w`: starts WPAD service
- `-f`: fingerprints victims
- `-v`: verbose output
- `-F`: force auth to WPAD service

```shell
 ./Responder.py -i 192.168.1.215 -w -f -v -F
```

force basic auth to try and gain user & pass

- `-b`: force Basic HTTP authentication

```shell
 ./Responder.py -i 192.168.1.215 -w -f -v -b -F
```

![Succsessfull WPAD attack](/wpad-responder-exploit/responder-intercepted.png "Succsessfull WPAD attack, planting a reverse shell on the victim.")

# Mitigation

- Create a DNS entry called "WPAD" that points to the real proxy server.
- Disabling automatic proxy discovery in browsers and operating systems.
- Configure firewalls and proxies to block and log outbound requests for wpad.dat files.

> ## `[WIP]` This article is a work in progress and will be updated with a proof of concept soon.

<!--
## Read more about this topic:

[https://googleprojectzero.blogspot.com/2017/12/apacolypse-now-exploiting-windows-10-in_18.html](https://googleprojectzero.blogspot.com/2017/12/apacolypse-now-exploiting-windows-10-in_18.html)
-->
