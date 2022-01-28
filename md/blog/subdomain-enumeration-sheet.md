---
title: Subdomain enumeration cheatsheet for pentesters
subtitle: find everything *.target.tld has to offer
description: Subdomain enumeration cheatsheet for pentesters
published: true
datePublished: 1631383870315
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - ctf
  - subdomain
  - web
  - enumeration
  - cheatsheet
  - hacking
thumbnailPhoto: /default.jpg
bannerPhoto: /default
canonicalUrl:
---


# **Subdomains Enumeration**

## **Summary**

- Enumerate Subdomains
    - Subbrute
    - KnockPy
    - GoogleDorks
    - EyeWitness
    - Sublist3r
    - Subfinder
    - Findomain
    - Aquatone
    - AltDNS
    - MassDNS
    - Nmap

## **Enumerate all subdomains (scope is *.domain.tld)**

### **Using Subbrute**

`git clone https://github.com/TheRook/subbrute
python subbrute.py domain.example.com`

### **Using KnockPy with Daniel Miessler’s SecLists for subdomain "/Discover/DNS"**

`git clone https://github.com/guelfoweb/knock
git clone https://github.com/danielmiessler/SecLists.git
knockpy domain.com -w subdomains-top1mil-110000.txt`

Using EyeWitness and Nmap scans from the KnockPy and enumall scans

`git clone https://github.com/ChrisTruncer/EyeWitness.git
./setup/setup.sh
./EyeWitness.py -f filename -t optionaltimeout --open (Optional)
./EyeWitness -f urls.txt --web
./EyeWitness -x urls.xml -t 8 --headless
./EyeWitness -f rdp.txt --rdp`

### **Using Google Dorks and Google Transparency Report**

You need to include subdomains ;) [https://www.google.com/transparencyreport/https/ct/?hl=en-US#domain=[DOMAIN]g&incl_exp=true&incl_sub=true](https://www.google.com/transparencyreport/https/ct/?hl=en-US#domain=%5BDOMAIN%5Dg&incl_exp=true&incl_sub=true)

`site:*.domain.com -www
site:domain.com filetype:pdf
site:domain.com inurl:'&'
site:domain.com inurl:login,register,upload,logout,redirect,redir,goto,admin
site:domain.com ext:php,asp,aspx,jsp,jspa,txt,swf
site:*.*.domain.com`

### **Using Sublist3r**

`To enumerate subdomains of specific domain and show the results in realtime:
python sublist3r.py -v -d example.com

To enumerate subdomains and enable the bruteforce module:
python sublist3r.py -b -d example.com

To enumerate subdomains and use specific engines such Google, Yahoo and Virustotal engines
python sublist3r.py -e google,yahoo,virustotal -d example.com

python sublist3r.py -b -d example.com`

### **Using Subfinder**

`go get github.com/subfinder/subfinder
./Subfinder/subfinder --set-config PassivetotalUsername='USERNAME',PassivetotalKey='KEY'
./Subfinder/subfinder --set-config RiddlerEmail="EMAIL",RiddlerPassword="PASSWORD"
./Subfinder/subfinder --set-config CensysUsername="USERNAME",CensysSecret="SECRET"
./Subfinder/subfinder --set-config SecurityTrailsKey='KEY'
./Subfinder/subfinder -d example.com -o /tmp/results_subfinder.txt`

### **Using Findomain**

`$ wget https://github.com/Edu4rdSHL/findomain/releases/latest/download/findomain-linux
$ chmod +x findomain-linux
$ findomain_spyse_token="YourAccessToken"
$ findomain_virustotal_token="YourAccessToken" 
$ findomain_fb_token="YourAccessToken" 
$ ./findomain-linux -t example.com -o`

### **Using Aquatone Go**

`# Subfinder version
./Subfinder/subfinder -d $1 -r 8.8.8.8,1.1.1.1 -nW -o /tmp/subresult$1
cat /tmp/subresult$1 | ./Aquatone/aquatone -ports large -out /tmp/aquatone$1

# Amass version
./Amass/amass -active -brute -o /tmp/hosts.txt -d $1
cat /tmp/hosts.txt | ./Aquatone/aquatone -ports large -out /tmp/aquatone$1`

### **Using AltDNS**

It's recommended to use massdns in order to resolve the result of `AltDNS`

`WORDLIST_PERMUTATION="./Altdns/words.txt"
python2.7 ./Altdns/altdns.py -i /tmp/inputdomains.txt -o /tmp/out.txt -w $WORDLIST_PERMUTATION`

Alternatively you can use [goaltdns](https://github.com/subfinder/goaltdns)

### **Using MassDNS**

`DNS_RESOLVERS="./resolvers.txt"
cat /tmp/results_subfinder.txt | massdns -r $DNS_RESOLVERS -t A -o S -w /tmp/results_subfinder_resolved.txt`

### **Using Nmap**

`nmap -sn --script hostmap-crtsh host_to_scan.tld`
