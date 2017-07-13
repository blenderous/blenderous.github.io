---
layout: post
title: "Installing heroku on ubuntu (should work for Ubuntu 14+)"
description: "Simple steps to install heroku using the terminal"
date: 2017-07-13
category: ubuntu
comments: true
---

## Installing heroku on ubuntu

Run the following to add the apt repository and install the CLI:

	`$ sudo add-apt-repository "deb https://cli-assets.heroku.com/branches/stable/apt ./"`
	`$ curl -L https://cli-assets.heroku.com/apt/release.key | sudo apt-key add -`
	`$ sudo apt-get update`
	`$ sudo apt-get install heroku`

That's it! Isn't it a breeze!