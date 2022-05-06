---
title: The Linux Filesystem 
subtitle: Where do i find X in Linux? Where should i place temporary data?
description: The Linux Filesystem has many Folders you will bump into a lot, so it's good to know what each of them is meant for and what they are used for. This Knowledge will help you during the analysis of any Unix system.
published: true
datePublished: 1651853089380
author: lwlx
authorTwitter: "0x0000005"
authorPhoto: /profile
tags:
  - ctf
  - filesystem
  - linux
  - etc
  - cheatsheet
  - hacking
thumbnailPhoto: /default.jpg
bannerPhoto: /default
canonicalUrl:
---

# The Linux Filesystem 

---

The Linux Filesystem has many Folders you will bump into a lot, so it's good to know what each of them is meant for and what they are used for. This Knowledge will help you during the analysis of any Unix system.

---

# Linux folders explained

- **/bin/**: basic programs
- **/boot/**: Linux kernel and other files required for its early boot process
- **/dev/**: device files
- **/etc/**: configuration files
- **/home/**: user's personal files
- **/lib/**: basic libraries
- **/media/**: mount points for removable devices (CD/DVD-ROM, USB keys, and so on)
- **/mnt/** or **/mount/**: temporary mount point
- **/opt/**: extra applications provided by third parties
- **/root/**: administrator's (root's) personal files
- **/run/**: volatile runtime data that does not persist across reboots (not yet included in the FHS)
- **/sbin/**: system programs
- **/srv/**: data used by servers hosted on this system
- **/tmp/**: temporary files (this directory is often emptied at boot)
- **/usr/**: applications (this directory is further subdivided into **bin**, **sbin**, **lib** according to the same logic as the root directory). Furthermore, **/usr/share/** contains architecture-independent data. The **/usr/local/** directory is meant to be used by the administrator for installing applications manually without overwriting files handled by the packaging system (dpkg).
- **/var/**: variable data handled by services. This includes log files, queues, spools, and caches.
- **/proc/** and **/sys/** are specific to the Linux kernel (and not part of the FHS). The kernel uses them for exporting data to userspace.