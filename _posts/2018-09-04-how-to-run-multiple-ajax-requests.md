---
layout: post
title: "How to run multiple AJAX requests (from Alexander Beletsky's development blog)"
description: "Fetching a url using AJAX can help preloading the resource. But what if one has to run AJAX requests for multiple files?"
date: 2018-09-04
category: development
comments: false

---

Suppose you have a list of resources that you would like to retrieve by means of AJAX. `$.ajax()` or it’s short variants like `$.get()` or `$.post()` is usual way of making AJAX calls, it works great than you need to fetch one.
