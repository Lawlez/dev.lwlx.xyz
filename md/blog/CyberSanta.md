---
title: HTB write up for Cyber Santa[CTF] challenges
description: Cyber Santa is Coming to Town! 
published: true
datePublished: 1638891629934
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - cybersanta
  - htb
  - CTF
  - security
  - web
  - crypto
thumbnailPhoto: /htb/cybersanta.png
bannerPhoto: /htb/cybersanta
canonicalUrl:
---

# Cyber Santa Hack The Box 2021 _[EASY]_

`rm  /var/www/html/sites/default/files/.ht.sqlite && echo SFRCezBrX24wd18zdjNyeTBuM19oNHNfdDBfZHIwcF8wZmZfdGgzaXJfbDN0dDNyc180dF90aDNfcDBzdF8wZmYxYzNfNGc0MW59 > /dev/null 2>&1 && ls -al  /var/www/html/sites/default/files`


## lets start easy witht he first forensic challenge named baby apt
![baby-apt](/htb/baby-apt.png "ok")
> This is the most wonderful time of the year, but not for Santa's incident response team. Since Santa went digital, everyone can write a letter to him using his brand new website. Apparently an APT group hacked their way in to Santa's server and destroyed his present list. Could you investigate what happened?

we get a .pcap file, lets analyze it with wireshark. we can quickly filter through this small capture and notice some interesting http traffic, taking a closer look we find a special payload. Lets try and make it readable.

find the solution below:

> <a href="https://cyberchef.cybertap.ch/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true)&input=IFNGUkNlekJyWDI0d2QxOHpkak55ZVRCdU0xOW9OSE5mZERCZlpISXdjRjh3Wm1aZmRHZ3phWEpmYkROMGRETnljMTgwZEY5MGFETmZjREJ6ZEY4d1ptWXhZek5mTkdjME1XNTk">https://cyberchef.cybertap.ch/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true)&input=IFNGUkNlekJyWDI0d2QxOHpkak55ZVRCdU0xOW9OSE5mZERCZlpISXdjRjh3Wm1aZmRHZ3phWEpmYkROMGRETnljMTgwZEY5MGFETmZjREJ6ZEY4d1ptWXhZek5mTkdjME1XNTk</a>
 yay!


okay now lets do some cryptography, the `common mistake` challenge looks interesting. 
![common-mistake](/htb/commonMistake.png "ok")
> Elves are trying very hard to communicate in perfect secrecy in order to keep Santa's warehouse. Unfortunately, their lack of knowledge about cryptography leads them to common mistakes.


{'n': '0xa96e6f96f6aedd5f9f6a169229f11b6fab589bf6361c5268f8217b7fad96708cfbee7857573ac606d7569b44b02afcfcfdd93c21838af933366de22a6116a2a3dee1c0015457c4935991d97014804d3d3e0d2be03ad42f675f20f41ea2afbb70c0e2a79b49789131c2f28fe8214b4506db353a9a8093dc7779ec847c2bea690e653d388e2faff459e24738cd3659d9ede795e0d1f8821fd5b49224cb47ae66f9ae3c58fa66db5ea9f73d7b741939048a242e91224f98daf0641e8a8ff19b58fb8c49b1a5abb059f44249dfd611515115a144cc7c2ca29357af46a9dc1800ae9330778ff1b7a8e45321147453cf17ef3a2111ad33bfeba2b62a047fa6a7af0eef', 

'e': '0x10001', == `65537 `

 'ct': '0x55cfe232610aa54dffcfb346117f0a38c77a33a2c67addf7a0368c93ec5c3e1baec9d3fe35a123960edc2cbdc238f332507b044d5dee1110f49311efc55a2efd3cf041bfb27130c2266e8dc61e5b99f275665823f584bc6139be4c153cdcf153bf4247fb3f57283a53e8733f982d790a74e99a5b10429012bc865296f0d4f408f65ee02cf41879543460ffc79e84615cc2515ce9ba20fe5992b427e0bbec6681911a9e6c6bbc3ca36c9eb8923ef333fb7e02e82c7bfb65b80710d78372a55432a1442d75cad5b562209bed4f85245f0157a09ce10718bbcef2b294dffb3f00a5a804ed7ba4fb680eea86e366e4f0b0a6d804e61a3b9d57afb92ecb147a769874'}

{'n': '0xa96e6f96f6aedd5f9f6a169229f11b6fab589bf6361c5268f8217b7fad96708cfbee7857573ac606d7569b44b02afcfcfdd93c21838af933366de22a6116a2a3dee1c0015457c4935991d97014804d3d3e0d2be03ad42f675f20f41ea2afbb70c0e2a79b49789131c2f28fe8214b4506db353a9a8093dc7779ec847c2bea690e653d388e2faff459e24738cd3659d9ede795e0d1f8821fd5b49224cb47ae66f9ae3c58fa66db5ea9f73d7b741939048a242e91224f98daf0641e8a8ff19b58fb8c49b1a5abb059f44249dfd611515115a144cc7c2ca29357af46a9dc1800ae9330778ff1b7a8e45321147453cf17ef3a2111ad33bfeba2b62a047fa6a7af0eef', 'e': '0x23', 'ct': '0x79834ce329453d3c4af06789e9dd654e43c16a85d8ba0dfa443aefe1ab4912a12a43b44f58f0b617662a459915e0c92a2429868a6b1d7aaaba500254c7eceba0a2df7144863f1889fab44122c9f355b74e3f357d17f0e693f261c0b9cefd07ca3d1b36563a8a8c985e211f9954ce07d4f75db40ce96feb6c91211a9ff9c0a21cad6c5090acf48bfd88042ad3c243850ad3afd6c33dd343c793c0fa2f98b4eabea399409c1966013a884368fc92310ebcb3be81d3702b936e7e883eeb94c2ebb0f9e5e6d3978c1f1f9c5a10e23a9d3252daac87f9bb748c961d3d361cc7dacb9da38ab8f2a1595d7a2eba5dce5abee659ad91a15b553d6e32d8118d1123859208'}

```bash
python3 RsaCtfTool.py --createpub -n 169110111150246174221951591062214641241271111718815524654288210424833123127173150112140251238120878758198621586155681764225225225321760331311382495154109226429722162163222225192184871961478914521711220128776162134322458212471039532244301621751871121922261671557312014549194242143232337569621953581541281472201191212361321244323410514101615614247175244892267156205548921723723114922420924813031213180146362037117410224917460882501022199416924761123116255741383646145347915221824010030138143241155882511407317716517117689244667322321417818121161682041244416214787175701692202401741474811914324118316822883332011683207232395833171735119123516218242412716616717514239 -e `65537`
```

use RsaCtfTool for this

-----BEGIN PUBLIC KEY-----  
MIIBNTANBgkqhkiG9w0BAQEFAAOCASIAMIIBHQKCARQA6qYyB5IDi3DjVvi7kCB+  
eHhYPqF1LFwRwcVCs1PH4edCy30ocO67QLVRC7CbiGhijMCR/aXRODY3srLU7VwF  
7JHZd5lC/6QHSh80PgFdz1KxqXeuo0zzI8HuqhgiI/cZvvmBuiOiJsq+dQFxIsJy  
eQceaiucmtewc8v50kN2n3KbPjeXAv79JF2BVAEdnsbzEdl8rZYx6KYjsFuYv032  
ZNdKgxyzoQZhzJme5mmXpGa2sVDUNYBEfeUVcfQRt+QjvSzjpT6xXYkogBaRe5Jg  
/6R8Gdujc2M3yuvQDxqngQ3Oiz4wxsN9GuXVwadYVZ0ne2CUAQcDeHnUVqKW7HLl  
Ohu9MDTY9+OTEuAoWIMb7REhNf8CAwEAAQ==  
-----END PUBLIC KEY-----
```bash
    python3 RsaCtfTool.py -n 169110111150246174221951591062214641241271111718815524654288210424833123127173150112140251238120878758198621586155681764225225225321760331311382495154109226429722162163222225192184871961478914521711220128776162134322458212471039532244301621751871121922261671557312014549194242143232337569621953581541281472201191212361321244323410514101615614247175244892267156205548921723723114922420924813031213180146362037117410224917460882501022199416924761123116255741383646145347915221824010030138143241155882511407317716517117689244667322321417818121161682041244416214787175701692202401741474811914324118316822883332011683207232395833171735119123516218242412716616717514239 -e 65537 --uncipher 85207226509710165772552071797017127105619912251162198122221247160541401472369262271742012112545316135150142204418919456243508012347793238171624414717239197904625360240651911781134819438110141198309115324211710288352451321889757190762160220241831916671251638740588323211563152451211011623315491166614418188134821502402122448246942244424424121845296255199158132979219481922331863225489146180392241872361021291452615810810718860163108158184146622435125112622324412325110118471621513111416584501616845117202213181983215523779133369518716015622572418720624217814822325163016516842371231642511041423413422710222824017616621642302659157871751854620320122118152116 --private
````

nice we got a private key

    -----BEGIN RSA PRIVATE KEY-----
    MIIFgQIBAAKCARQA6qYyB5IDi3DjVvi7kCB+eHhYPqF1LFwRwcVCs1PH4edCy30o
    cO67QLVRC7CbiGhijMCR/aXRODY3srLU7VwF7JHZd5lC/6QHSh80PgFdz1KxqXeu
    o0zzI8HuqhgiI/cZvvmBuiOiJsq+dQFxIsJyeQceaiucmtewc8v50kN2n3KbPjeX
    Av79JF2BVAEdnsbzEdl8rZYx6KYjsFuYv032ZNdKgxyzoQZhzJme5mmXpGa2sVDU
    NYBEfeUVcfQRt+QjvSzjpT6xXYkogBaRe5Jg/6R8Gdujc2M3yuvQDxqngQ3Oiz4w
    xsN9GuXVwadYVZ0ne2CUAQcDeHnUVqKW7HLlOhu9MDTY9+OTEuAoWIMb7REhNf8C
    AwEAAQKCARNrpzia+oPU6XwvfT7YZX7L3azXB2Kl0h/KKXYYH5zaejpvbOkzqlYk
    5eBJLQRnaI38TUCCCAI+cE4vPPVCm50JLOXe5K1/bxT6U9UafW1xVzTtYn/Pprmz
    SnvNGvcwLHxCKtQMvarcw0gc6Y/R/eAYcq6h32wf4FhAN5gURVpmSgfEhXMBoOqy
    MeQ2AZtAIWz4hYPIZPuxKV3McLZtcrKtG32Q07f7INW7NGN0QZ83VvW7x9aA+x/l
    kNSbWS7BEkTpILJ3iStCK7VIOJn52mA8b+kqvUgzikWJ5YHQibXtgRIRJS1i6XAR
    rfm6xofnjDNqDpFWpj5RHOI4Ei+EaT64Mv/LkD53t4eviROhm/QjoLgRaQKCARIz
    TFcED05iQVeFWZMIjcWDfcemgU1tmwOp0J3+io4TN5XtFlVbXfJITF3L5sX26EFE
    l2hHMSYWWF5gWBDRS22Co34GeIPTUtylvO3oY/zl1i1l+j8Z3MqwJuYhQBV0g9kH
    3VnKsB/zfk3tazf+2rbd5uKT0nFgKChTB6V0JJw6d+84O1/BsYOjYuzVXuemiX+v
    9BUiq3AhXyDxblAtUfkXI3rBgAtJder4CtkQfIW3Ed0sOsU84ouVureEQLnDM2fJ
    KmMspry++CoVcZYTlPXxfj9rvzXg0pNNX36XhieuB9P1V0UIsWelsGMy3KjYWJLM
    DT5OfUUviziyF71OJOxfxxpGcI3gDsXdNnhQkBeYK/hlAgIEkwKCARIMFhN2aGjO
    a5jEWWt0G3sK1QrCJzrn9Rry2q0u+NQqoPEZECcCROs9r4h17yR7XRNrpsSx6VmQ
    8DckOfuUZFIj8oNR4PkmRCKqhg4Dr/M477J4kXJmlIfI4xFbii7D6gCrgrKSN9b/
    VqXjp1xlFoD5XVnK/E0sG6oMjgOkjq+kcveQ5yRTjZB3YWpth1PLACBug3KrXXso
    0bIAUD5hvyuSERDuIE4Ie9jloiCsarpSfMoAjsRD6Rh8KabtaRabcDQmyG7faVWV
    JQE9VirG6FTeFiG5MC7wjoyYMUSxTLFypnOBHZOtTace+aUVqbm6Z3wGyaQBeDBh
    2Ep+Y2t9yuNKWa3OJNy4iqKB0UCdsqVsfAelAgIBnQKCARIdyfQBe6l5HIsk/gR+
    hJvLz31WaiEoQYgjpmXNvtw7QUop7C0xxw9tGVOLLJiPYQzCnJFgprTVOoexR3ia
    xGUx2LWd4dtOxhbBv0FakfJkrHfuQ+2NKPxea9ld21Iym7QHML5OyYcToJKwyG14
    OsyReS04U7pLg4jg248U4QKekGmvaRd4ISAQLTQM2OM2g+BWb5HZGzEntdH7eY4Y
    IZw7yIY+9VA6ZiRR83+UZSrjbBhfpDRy7q1QK7dNdIG75sJ/v2s3cTh7I3TpsTxC
    dmtnSffLI5z92rDrkG49UZ7Nju4Tm2UVAcyxin//zb713wxyHt0hjgvBieelSXfE
    cUKmPPb91jz2ahTlBZ2IMnHT4nEz
    -----END RSA PRIVATE KEY-----

and deciphered text:

    Unciphered data :
    HEX : 0x93ce7f9abec56ab02c7b6f2442eb54ea85c25452c6649791198f921b8895b37c2e91e3c215f8a18f222933334d4228f1f35679a83a3aaa27c6f717ecb5a0989e81bf10ed89e8997289baad9498be74229161fe3d6b9f20af2923751b9edd92dd99e270c14f9ab6aa47c70e67594d9de12b2f4a5cb6c14961aed6b6c95537fec58f78e656cdc5a6e3a8df63a1a1abacea2ea9e42ea3916f6d54e4ab6638d004305b208697bdfc9ead998a356b53b26d2a5543241ab94dd7e3875a599319fbd49d2a2f3af0a163e79ddea69b832eadff4a443bc5d1aa448021b4601eedbb67fa39838a91f8071c6c1864aac3efc7eaf0ba872ee1f9d0c24bbb8179cc2fcea345a2896d3cb5532fa2c03be84465f1e3aaffaaae0e
    INT (big endian) : 106523253901300334604683207833379234922023036276037014961974913713745025012872031053388146786272447030652944950843391449373541880474936028335701738255122664883682995745267770467681591960324156535024693894389120282282113351291033391141230044475747692019455788082806824699685172718995193358681983722833424620108342223698953641772575884832595512290859496693137456587970330022789088463481451423248003110893524195235929033825563416068579453588708071918671865447288455011963418404923938575049626081964274020342119025903786836276109132375192598117351059800672120889746578293877266424496358847494653436053080172097177436703486733259158493837620393486013927765796562054670
    INT (little endian) : 10581433148091013279960381394938329144519670438976771265601529239725737680102410485583778694667876301614088688991055195434262010454916755671757088905403912897346553714085759869640657492073275582479180603159364159240301280082198266519595822746590071128056609154184027928287671847272319284001366503724334119380196691311108459277979297346923030882970983616921068437680765237482794875612016523395502485364745322268883603551572582102105572408952268648036113411991627619429396018951874769852958821593993826876857661031011443315743893359693637845937022684255566894404363285097252860791136497697873836891090918708466825942837949053991800663688177870287844261703333170835
    STR : b'\x93\xce\x7f\x9a\xbe\xc5j\xb0,{o$B\xebT\xea\x85\xc2TR\xc6d\x97\x91\x19\x8f\x92\x1b\x88\x95\xb3|.\x91\xe3\xc2\x15\xf8\xa1\x8f")33MB(\xf1\xf3Vy\xa8::\xaa\'\xc6\xf7\x17\xec\xb5\xa0\x98\x9e\x81\xbf\x10\xed\x89\xe8\x99r\x89\xba\xad\x94\x98\xbet"\x91a\xfe=k\x9f \xaf)#u\x1b\x9e\xdd\x92\xdd\x99\xe2p\xc1O\x9a\xb6\xaaG\xc7\x0egYM\x9d\xe1+/J\\\xb6\xc1Ia\xae\xd6\xb6\xc9U7\xfe\xc5\x8fx\xe6V\xcd\xc5\xa6\xe3\xa8\xdfc\xa1\xa1\xab\xac\xea.\xa9\xe4.\xa3\x91omT\xe4\xabf8\xd0\x040[ \x86\x97\xbd\xfc\x9e\xad\x99\x8a5kS\xb2m*UC$\x1a\xb9M\xd7\xe3\x87ZY\x93\x19\xfb\xd4\x9d*/:\xf0\xa1c\xe7\x9d\xde\xa6\x9b\x83.\xad\xffJD;\xc5\xd1\xaaD\x80!\xb4`\x1e\xed\xbbg\xfa9\x83\x8a\x91\xf8\x07\x1cl\x18d\xaa\xc3\xef\xc7\xea\xf0\xba\x87.\xe1\xf9\xd0\xc2K\xbb\x81y\xcc/\xce\xa3E\xa2\x89m<\xb5S/\xa2\xc0;\xe8De\xf1\xe3\xaa\xff\xaa\xae\x0e'

lets see the other one
```bash
    python3 ./RsaCtfTool/RsaCtfTool.py -n 4812097575410154102575410254971011001005310257102549749545750505710249499854102979853565798102545154499953505456102565049559855102971005754554856991029810110155565355535551979954485410055535457985252984850971029910299102100100575199504956515697102575151515454100101505097544949549750975110010110149994848495352535599525751535757491005755484952564852100511005110148100509810148519710052501025455531025048102524910197509710298985548994810150975557985257555657495149995010250561021015650495298525348541009851535197579756485751100995555555710199565255995098101975457481015453511005156561015010297102102525357101505255515699100515453571005710110010155575310148100491025656504910210053985257505052999852559710154541025797101519953561029754541009853101975710255511005598555249575157485256975052501015749505052102575610097102485452491015697561021024957985356102985699525798499753979898485357102525250525710010210054494953495349495397495252999955995099975057515355971025254975710099495648489710157515148555556102102499855975610152535150494952555253519910249551011025197504949499710051519810210198975098545097485255102975497559710248101101102 -e 481205051 --uncipher 4812055575651529910151505752535110051995297102485455565710157100100545352101525199495497565310056989748100102975252519710110210149979852574950974950975251985252102535610248985449555454509752535757495310148995750975052505756545697549849100559797979897534848505352995510199101989748975010010255495252565451102495656571029798525249505099571025153539855521015110251535510049551024810154575110250544999489857991011021004855999751100499851545354519756975699575653101504949102575753529910148551005210255531009852489910157541021019854995749504949975710210257994897504999971005499534857489799102525698102100565648525097100519950525156534897100519710210054995151100100515251995557519948102975010257569852101979810197515757524857994957545448495197565652515456102995750514948101989998519810156491005155485098575154101551015656511011019857529950101989848102571015310154100515755569949102491025799539749481015051975710051505350100979799565510257989855525699575449100511005154499999551009799985710097515697985610250974953575310055975010198975310099101539798101101545357971005749974953985353511005410151501005649495610049495051565357504856 --private
````

our other key:
```
    -----BEGIN RSA PRIVATE KEY-----
    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
    -----END RSA PRIVATE KEY-----
```

```bash
echo 0x55cfe232610aa54dffcfb346117f0a38c77a33a2c67addf7a0368c93ec5c3e1baec9d3fe35a123960edc2cbdc238f332507b044d5dee1110f49311efc55a2efd3cf041bfb27130c2266e8dc61e5b99f275665823f584bc6139be4c153cdcf153bf4247fb3f57283a53e8733f982d790a74e99a5b10429012bc865296f0d4f408f65ee02cf41879543460ffc79e84615cc2515ce9ba20fe5992b427e0bbec6681911a9e6c6bbc3ca36c9eb8923ef333fb7e02e82c7bfb65b80710d78372a55432a1442d75cad5b562209bed4f85245f0157a09ce10718bbcef2b294dffb3f00a5a804ed7ba4fb680eea86e366e4f0b0a6d804e61a3b9d57afb92ecb147a769874 > flag.enc
````

```bash
echo 85207226509710165772552071797017127105619912251162198122221247160541401472369262271742012112545316135150142204418919456243508012347793238171624414717239197904625360240651911781134819438110141198309115324211710288352451321889757190762160220241831916671251638740588323211563152451211011623315491166614418188134821502402122448246942244424424121845296255199158132979219481922331863225489146180392241872361021291452615810810718860163108158184146622435125112622324412325110118471621513111416584501616845117202213181983215523779133369518716015622572418720624217814822325163016516842371231642511041423413422710222824017616621642302659157871751854620320122118152116 > flag0.enc
```

ok lets dry ant decrypt:
```bash
 openssl rsautl -decrypt -inkey key.key -in flag.enc -out flag.txt
```