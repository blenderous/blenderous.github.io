---
layout: post
title: "Installing Apache 2.4 and PHP7 in windows"
description: "Detailed step by step description of how to get PHP7 working on an Apache 2.4 server in a windows environment"
date: 2016-07-09
category: ubuntu
comments: true
---
## Installing Apache 2.4 and PHP 7 on windows

### Installing Apache 2.4
Download Apache binary from one of these websites:
* [Apache Haus](http://www.apachehaus.com/cgi-bin/download.plx)
* [Apache Lounge](http://www.apachelounge.com/download/)

Unzip the contents of the archive to a folder such as `c:\Apache24`

Install Apache as a windows service.
* `cd "c:\Apache24\bin"`
* `httpd.exe -k install -n "Apache 2.4"`

Ask windows to start Apache on start-up, by running this command

  `sc config Apache2.4 start= demand`


### Installing PHP 7
Download the Thread Safe version of php archive from http://windows.php.net/download/ depending on the architecture of your computer (x86 if it's 32bit and x64 if it's 64bit).

Unzip the archive to a folder such as `c:\php7`

Make a copy of the `php.ini-development` and rename it to `php.ini`

Add the path `c:\php7` to your environment variables

### Configure your apache to work with PHP7
Open the configuration file for Apache 2.4 (`c:\Apache24\conf\httpd.conf`) and add the following lines (or just change them if they already exist):
1. Locate `ServerRoot` to `c:\Apache24`

    `ServerRoot "c:/Apache24"`

2. Configure port of Apache to `8080`

    `Listen 8080`

3. Locate the `DocumentRoot` to point to the location from where you will server your pages

    `DocumentRoot "c:/Apache24/htdocs"`

    `<Directory "c:/Apache24/htdocs">`

4. Add the following lines on top of the changes you made in the previous step

    `AddHandler application/x-httpd-php .php`

    `AddType application/x-httpd-php .php .html`

    `LoadModule php7_module "c:/php7/php7apache2_4.dll"`

    `PHPIniDir "c:/php7"`

5. Run the command `c:\Apache24\bin\httpd.exe -t` to make sure the syntax of the configuration file is good.
