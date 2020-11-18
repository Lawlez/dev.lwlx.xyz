---
title: "MitM using WPAD Proxy Protocol: Getting a reverse shell on windows client"
published: true
datePublished: 1605702028862
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile.jpg
tags:
  - MitM
  - WPAD
  - aPAColypse
  - PAC
  - exploit
thumbnailPhoto: /crypto_thumb.jpg
bannerPhoto: /crypto.jpg
canonicalUrl: https://dev.lwlx.xyz/
---

## Requirements

# What is WPAD?

At some point in the very early days of the Internet - prior to 1996 - engineers at Netscape decided that JavaScript was a good language to write configuration files in. The result was Proxy Auto-Config (PAC) - a configuration file format that works as follows: The browser connects to a pre-configured server, downloads the PAC file, and executes a particular Javascript function to determine proper proxy configuration. Why not? It certainly is more expressive and less verbose than (let’s say) XML, and seems a reasonable way to provide configurations to many clients.

PAC itself is coupled with a protocol called Web Proxy Auto-Discovery (WPAD) - a protocol that makes it unnecessary for the browser to have a pre-configured server to connect to. Instead, WPAD allows the computer to query the local network to determine the server from which to load the PAC file.

## WPAD always follows this schema:

1. Determine whether WPAD should be used, either by looking at browser settings or asking the host operating system if the browser is configured to match the OS setting.
2. Ensure the network is ready.
3. If WPAD is to be used, issue a DHCPINFORM query to ask for the URL of the PAC script to use.
4. If the DHCPINFORM query fails to return a URL, perform a DNS lookup for the unqualified hostname wpad.
5. If the DNS lookup succeeds, then the PAC URL shall be http://wpad/wpad.dat.
6. Establish a HTTP(S) connection to discovered URL’s server and download the PAC script.
7. If the PAC script downloads successfully, parse and optionally compile it.
8. For each network request, call FindProxyForURL() in the PAC script and use the proxy settings returned from the function.

You can clearly see how this can be abused by a bad actor.

Windows is certainly not the only piece of software that implements WPAD. Other operating systems (OS X, Linux) and applications do as well. For example Google Chrome also has a WPAD implementation, but in Chrome’s case, evaluating the JavaScript code from the PAC file happens inside a sandbox. Other operating systems that support WPAD don’t enable it by default. This is why Windows is currently the most interesting target for this sort of attack.

## Exploit basis

When a machine has these protocols enabled, if the local network DNS is not able to resolve the name, the machine will ask to all hosts of the network. So, any host of the network, who knows its IP, can reply. Even if a host replies with an incorrect information, it will be still regarded as legitimate.

# Exploitable scenario

1. victim and host are in same network
2. The victim will open the browser which is configured with the option “automatically detect settings” in “Local Area Network (LAN) Settings”.
3. The name resolution, which will be performed with the steps we mentioned earlier, will be questioned on the victim’s computer first.
4. In step 3, because of the DNS Server does not have a corresponding record, the name of the system is sent as LLMNR or NetBIOS-NS query.
5. The attacker listens to network traffic, catches name resolution query. It tells to the victim that he has the wpad.dat the victim is look for.

According to the sequence above, if an attacker wants to be sure that the attack is successful, he must do:

- DHCP poisoning attack
- DNS poisoning attack
- WPAD poisoning attack

# proof of concept

## install Responder

## configure config

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
sh-3.2# ./Responder.py -i 192.168.1.215 -w -f -v -F
```

force basic auth to try and gain user & pass

- `-b`: force Basic HTTP authentication

```shell
sh-3.2# ./Responder.py -i 192.168.1.215 -w -f -v -b -F
```

# Mitigation

- create DNS entry with “WPAD” that points to the corporate proxy server. So the attacker won’t be able to manipulate the traffic.
- Consider disabling automatic proxy discovery/configuration in browsers and operating systems.
- Configure firewalls and proxies to log and block outbound requests for wpad.dat files.

## Read more about this topic:

[https://googleprojectzero.blogspot.com/2017/12/apacolypse-now-exploiting-windows-10-in_18.html](https://googleprojectzero.blogspot.com/2017/12/apacolypse-now-exploiting-windows-10-in_18.html)
