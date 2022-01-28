---
title: HTB write up for the Not Art[HARD] challenge
subtitle: stegonagraphy is easy?
description: write up for the Not Art[HARD] challenge
published: true
datePublished: 1643383870315
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - ctf
  - writeup
  - hackthebox
  - NotArt
  - htb
  - stego
thumbnailPhoto: /htb/notart/htb-not-art-thumb.jpg
bannerPhoto: /htb/notart/htb-not-art
canonicalUrl:
---

This is my Write Up for the "Not Art" Stego challenge from Hack The Box.
# Not Art

We Recvied a PNG file called not_art.png

![not_art.png](/htb/notart/not_art.png)

We already know there is something hidden in this image so lets start with basic stego tools to analyze if we have hidden content.

steghide & foremost:

```bash
steghide info not_art.png 
steghide: the file format of the file "not_art.png" is not supported.
                                                                                                                                            
└─$ foremost -i not_art.png                                                                                                             1 ⨯
Processing: not_art.png
```

nothing so lets check further:

```bash
└─$ strings not_art.png      
IHDR
JIDATx
O2~tt
kNB(
B([W
3"qV
!.'!
Bf-#
eG=1w
&=1{Rl4
-Tg~
+,:
k22s
(;-A
3fM!
Ljb&
=bNB(
B([O}-;
>;m];
9eNB(
IEND
```

```bash
└─$ exiftool not_art.png                                                                                                              127 ⨯
ExifTool Version Number         : 12.39
File Name                       : not_art.png
Directory                       : .
File Size                       : 2.1 KiB
File Modification Date/Time     : 2018:06:20 19:04:12+02:00
File Access Date/Time           : 2022:01:25 14:00:23+01:00
File Inode Change Date/Time     : 2022:01:25 14:00:21+01:00
File Permissions                : -rw-rw-r--
File Type                       : PNG
File Type Extension             : png
MIME Type                       : image/png
Image Width                     : 300
Image Height                    : 300
Bit Depth                       : 8
Color Type                      : RGB
Compression                     : Deflate/Inflate
Filter                          : Adaptive
Interlace                       : Noninterlaced
Image Size                      : 300x300
Megapixels                      : 0.090
```

```bash
zsteg -a not_art.png  
b1,r,lsb,xy         .. file: , OEM-ID "\003\377", Bytes/sector 3840, sectors/cluster 252, sectors 65280 (volumes <=32 MB), Media descriptor 0xff, sectors/FAT 240, sectors/track 0, FAT (12 bit by descriptor)                                                                          
b2,b,lsb,xy         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b2,b,msb,xy         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b6,r,lsb,xy         .. file: AIX core file fulldump
b1,rgb,lsb,xy,prime .. text: "lHR&I\"Z$"
b1,rgb,msb,xy,prime .. text: "D&IlIK\"i\"I)6"
b3,r,lsb,xy,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b4,g,lsb,xy,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,g,msb,xy,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b5,g,lsb,xy,prime   .. file: AIX core file
b8,b,lsb,xy,prime   .. file: Matlab v4 mat-file (little endian) \300\300\377\377\377\300\300\300\300, numeric, rows 3233857728, columns 3233808384, imaginary                                                                                                                           
b1,g,msb,yx         .. file: dBase III DBT, next free block index 1072693248, block length 64512, 1st item "\001"
b2,b,lsb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\360, numeric, rows 251658240, columns 65535, imaginary
b2,b,msb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\017, numeric, rows 4026531840, columns 65535, imaginary
b5,b,lsb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 0, columns 0
b5,b,msb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 0, columns 0
b6,r,lsb,yx         .. file: AIX core file fulldump
b6,g,lsb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\360, numeric, rows 0, columns 0, imaginary
b6,g,msb,yx         .. file: Matlab v4 mat-file (little endian) \377\377\017, numeric, rows 0, columns 0, imaginary
b7,b,lsb,yx         .. file: Matlab v4 mat-file (little endian) @\201\002\004\010\020?\377\377\377\377\377\377\377\377, numeric, rows 0, columns 0                                                                                                                                      
b8,b,lsb,yx         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b1,rgb,msb,yx,prime .. file: TeX font metric data
b2,r,msb,yx,prime   .. file: DOS 2.0-3.2 backed up file \017\003
b3,r,lsb,yx,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b4,r,msb,yx,prime   .. file: , Bytes/sector 3840, root entries 15, Media descriptor 0xff, sectors/FAT 255, sectors/track 0, heads 15, FAT (12 bit by descriptor)                                                                                                                        
b8,b,lsb,yx,prime   .. file: Matlab v4 mat-file (little endian) \300\300\377\377, numeric, rows 0, columns 4294951104, imaginary
b3,r,lsb,XY         .. file: AIX core file
b3,g,lsb,XY         .. file: AIX core file
b4,r,lsb,XY         .. file: Matlab v4 mat-file (little endian) , numeric, rows 4294967040, columns 65535
b6,b,lsb,XY         .. file: AIX core file fulldump
b3,b,lsb,XY,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz, stereo + center
b4,r,lsb,XY,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,r,msb,XY,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,g,lsb,XY,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,g,msb,XY,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b8,g,lsb,XY,prime   .. file: Matlab v4 mat-file (little endian) \300\300\377\377, numeric, rows 4294967295, columns 0, imaginary
b3,r,lsb,YX         .. file: AIX core file
b6,g,lsb,YX         .. file: Matlab v4 mat-file (little endian) \377\377\360, numeric, rows 0, columns 0, imaginary
b6,g,msb,YX         .. file: Matlab v4 mat-file (little endian) \377\377\017, numeric, rows 0, columns 0, imaginary
b6,b,lsb,YX         .. file: AIX core file fulldump
b7,g,lsb,YX         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377\377\340@\201\002\004\010\020 @\377\377\377\377\377\377\377\377\376\004\010\020 @\201\002\004, numeric, rows 0, columns 0                                                                           
b7,g,msb,YX         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377\377\007\002\201@ \020\010\004\002\377\377\377\377\377\377\377\377\177 \020\010\004\002\201@ , numeric, rows 0, columns 0                                                                           
b8,g,lsb,YX         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b8,g,msb,YX         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b1,rgb,msb,YX,prime .. text: "-!%&6l2\t%"
b3,b,lsb,YX,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b4,r,lsb,YX,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,r,msb,YX,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b6,g,lsb,YX,prime   .. file: Matlab v4 mat-file (little endian) \377\374\017\300, numeric, rows 4043243520, columns 3238002432
b6,g,msb,YX,prime   .. file: Matlab v4 mat-file (little endian) \377?\360\003, numeric, rows 268369920, columns 67108608
b2,r,lsb,Xy         .. file: AIX core file
b4,bgr,msb,Xy       .. file: MPEG ADTS, AAC, v4 Main, 48 kHz, surround + side
b6,g,lsb,Xy         .. file: AIX core file fulldump
b6,b,lsb,Xy         .. file: AIX core file fulldump
b6,bgr,lsb,Xy       .. file: MPEG ADTS, AAC, v4 Main, surround + side
b7,bgr,lsb,Xy       .. file: MPEG ADTS, layer II, v1, 48 kHz, Monaural
b1,bgr,lsb,Xy,prime .. text: "I\"Ki$q%)"
b3,g,lsb,Xy,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b3,b,lsb,Xy,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b4,r,lsb,Xy,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,r,msb,Xy,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,g,lsb,Xy,prime   .. file: , Bytes/sector 3840, sectors/cluster 255, reserved sectors 4095, FATs 255, root entries 240, sectors 61455 (volumes <=32 MB), Media descriptor 0xff, sectors/FAT 65535, sectors/track 65535, hidden sectors 4042326015, sectors 4278255360 (volumes > 32 MB), dos < 4.0 BootSector (0), FAT (12 bit by descriptor)                                                                                     
b4,bgr,msb,Xy,prime .. file: MPEG ADTS, AAC, v4 Main, 48 kHz, surround + side
b6,r,lsb,Xy,prime   .. file: AIX core file
b6,bgr,lsb,Xy,prime .. file: MPEG ADTS, AAC, v4 Main, surround + side
b7,bgr,lsb,Xy,prime .. file: MPEG ADTS, layer II, v1, 48 kHz, Monaural
b4,bgr,msb,yX       .. file: MPEG ADTS, AAC, v4 Main, 48 kHz, surround + side
b5,r,lsb,yX         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 0, columns 0
b5,r,msb,yX         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 0, columns 0
b6,g,lsb,yX         .. file: AIX core file fulldump
b6,b,lsb,yX         .. file: AIX core file fulldump
b6,bgr,lsb,yX       .. file: MPEG ADTS, AAC, v4 Main, surround + side
b7,r,lsb,yX         .. file: Matlab v4 mat-file (little endian) @\201\002\004\010\020?\377\377\377\377\377\377\377\377, numeric, rows 0, columns 0                                                                                                                                      
b7,bgr,lsb,yX       .. file: MPEG ADTS, layer II, v1, 48 kHz, Monaural
b8,r,lsb,yX         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b1,bgr,lsb,yX,prime .. <wbStego size=24795, data="\x99\"II$-\xB7\x01&%"..., even=false, enc="wbStego 2.x/3.x", mix=true, controlbyte="\xD8">
b3,g,lsb,yX,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz, stereo + center
b3,b,lsb,yX,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz, stereo + center
b4,g,lsb,yX,prime   .. file: , Bytes/sector 3840, sectors/cluster 255, reserved sectors 240, root entries 61455, sectors 61455 (volumes <=32 MB), Media descriptor 0xff, sectors/FAT 255, sectors/track 0, heads 15, hidden sectors 4026593295, sectors 4278190080 (volumes > 32 MB), physical drive 0xf0, dos < 4.0 BootSector (0), FAT (12 bit by descriptor)                                                                     
b4,bgr,msb,yX,prime .. file: MPEG ADTS, AAC, v4 Main, 48 kHz, surround + side
b5,r,lsb,yX,prime   .. file: Matlab v4 mat-file (little endian) \377\300, numeric, rows 4030660608, columns 0, imaginary
b5,r,msb,yX,prime   .. file: Matlab v4 mat-file (little endian) \377\003, numeric, rows 268173312, columns 0, imaginary
b6,r,lsb,yX,prime   .. file: Matlab v4 mat-file (little endian) \377\374, numeric, rows 251658240, columns 255
b6,r,msb,yX,prime   .. file: Matlab v4 mat-file (little endian) \377?, numeric, rows 4026531840, columns 255
b6,bgr,lsb,yX,prime .. file: MPEG ADTS, AAC, v4 Main, surround + side
b7,bgr,lsb,yX,prime .. file: MPEG ADTS, layer II, v1, 48 kHz, Monaural
b2,g,lsb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 4294967040, columns 65535, imaginary
b2,g,msb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377, numeric, rows 4294967040, columns 65535, imaginary
b3,r,lsb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\360, numeric, rows 0, columns 0
b3,r,msb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\017, numeric, rows 0, columns 0
b3,b,lsb,xY         .. file: AIX core file fulldump
b6,g,lsb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377\377\377\377\377\377, numeric, rows 0, columns 0, imaginary                                                                                                                                         
b6,g,msb,xY         .. file: Matlab v4 mat-file (little endian) \377\377\377\377\377\377\377\377\377\377, numeric, rows 0, columns 0, imaginary                                                                                                                                         
b7,r,lsb,xY         .. file: Matlab v4 mat-file (little endian) @\201\002\004\010\020, numeric, rows 0, columns 0
b8,r,lsb,xY         .. file: Matlab v4 mat-file (little endian) , numeric, rows 0, columns 0
b1,r,lsb,xY,prime   .. file: raw G3 (Group 3) FAX, byte-padded
b6,r,lsb,xY,prime   .. file: Matlab v4 mat-file (little endian) \377\374, numeric, rows 0, columns 1056964608, imaginary
b6,r,msb,xY,prime   .. file: Matlab v4 mat-file (little endian) \377?, numeric, rows 0, columns 4227858432, imaginary
b2,r,lsb,Yx         .. file: AIX core file
b6,g,lsb,Yx         .. file: Matlab v4 mat-file (little endian) \377\377\360, numeric, rows 0, columns 0, imaginary
b6,g,msb,Yx         .. file: Matlab v4 mat-file (little endian) \377\377\017, numeric, rows 0, columns 0, imaginary
b6,b,lsb,Yx         .. file: AIX core file fulldump
b3,b,lsb,Yx,prime   .. file: MPEG ADTS, AAC, v4 Main, 96 kHz
b4,r,lsb,Yx,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,r,msb,Yx,prime   .. file: Common Data Format (Version 2.5 or earlier) data
b4,g,lsb,Yx,prime   .. file: Matlab v4 mat-file (little endian) \360\377\377\017\377, numeric, rows 255, columns 16715520, imaginary
b6,r,lsb,Yx,prime   .. file: AIX core file
[!] possible image block size is 10x10, downscaling may be necessary
```

so except for zsteg nothing seems to have found anything of interest. having a closer look at zsteg also reveals there seems to be nothing of use.

## hidden in plain sight

So we have a very special image here, its a spiral of blocks of colors, they also seem to be repeating, maybe there is some conversion going on from rgb → ascii, lets check that.

extracting the color codes yields us a pattern:

```bash
[(255, 192, 0), (0, 255, 192), (192, 255, 0), (255, 255, 192), (255, 0, 0), ... ]
```

it seems there are only three possible options per color: 192, 255 or 0. so really we are looking at a base3 encoded data.

if we convert the first few bytes to base3 we get a series of numbers, if we convert those to ascii we get the following: 

**Substitute 0, 192, 255 to 0, 1, 2**

**Concatenate the values to get a 3-digits number (BASE 3)**

**Convert the 3 digits number into base 10 number**

```bash
21 = u
7 = g
15 = o
25 = y
18 = r
```

if you have played a few CTF’s you might be able to tell that “ugo” is “HTB” in ROT13, so lets see what happens if we apply a ROT 13 to the whole text after base3 conversion.

```bash
21 h
7 t
15 b
25 l
18 e
19 f
7 t
16 c
8 u
5 r
25 l
12 y
15 b
5 r
14 a
16 c
```

Well this seems to be it! here we got our plaintext flag, now we just need to convert it, i guess.

htbleftcurlybracketuppercaseiunderscorelowercasetuppercaseolowercaseluppercasedunderscorelowercaseyuppercaseolowercaseuunderscoreuppercasetlowerc.....owercaseruppercasetunderscorelowercasenuppercaseolowercaserunderscoreuppercaseplowercaseiuppercaseelowercasetexclamationmarkexclamationmarkrightcurlybracketeof

`HTB{SORRY I DONT PUBLISH FLAGS}`

yay got em!