---
layout: post
title: "Creating a virtual host in ubuntu (14.04, 16.04)"
description: "Creating virtual hosts in ubuntu for local development"
date: 2016-10-10
comments: true
---

## Creating a virtual host in ubuntu (14.04, 16.04)

The following are the steps to create a virtualhost for locally developing web application in ubuntu

### Getting started

#### 1. Copy existing default configuration

`sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/dev.local.conf`

#### 2. Edit this configuration

`sudo nano /etc/apache2/sites-available/example.com.conf`

The following is an example virtual host configuration.

```
<VirtualHost *:80>
	ServerAdmin admin@example.com
	ServerName dev.local
	DocumentRoot /var/www/dev.local/public_html
	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

#### 3. Enable this virtualhost and reload apache

`sudo a2ensite example.com.conf`

`sudo service apache2 reload`

### Checking apache log for errors

`tail -f /var/log/apache2/error.log`

### Changing permissions and ownership

In case you are using a backend framework like laravel, you might have to change ownership of certain folders and grant the user group read, write and execute permissions.

`sudo chgrp -R www-data storage bootstrap/cache`

`sudo chmod -R ug+rwx storage bootstrap/cache`
