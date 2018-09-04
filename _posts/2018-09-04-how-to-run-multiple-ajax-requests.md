---
layout: post
title: "How to run multiple AJAX requests (from Alexander Beletsky's development blog)"
description: "Fetching a url using AJAX can help preloading the resource. But what if one has to run AJAX requests for multiple files?"
date: 2018-09-04
category: development
comments: true

---

Suppose you have a list of resources that you would like to retrieve by means of AJAX. `$.ajax()` or it’s short variants like `$.get()` or `$.post()` is usual way of making AJAX calls, it works great than you need to fetch one.

```javascript
var url = '/api/resource/1';
$.get(url, function (r) {
    // use response
});
```

Even in case of several it might be still usable,

```javascript
var url1 = '/api/resource/1';
var url2 = '/api/resource/2'
$.get(url1, function (r) {
    // use response from url1

    $.get(url1, function (r) {
        // use response from url2
    });
});
```

 You can easily see, if you have more than 3 you are trapping into “callback hell”. Furthermore, if you have a list of url’s to fetch and the size of that list is dynamic, it’s not even possible to build structure like that.

Not long time a ago, I’ve been exactly into this situation. So, I have a list of resources to fetch, I need to issue them one-by-one and I want to have only one callback, that would pass all fetched resources in one object. Initially I thought it’s not even possible, at least with-out creation of some ugly code. But with great help of my colleagues the problem been solved.

jQuery [Deferred Object](http://api.jquery.com/category/deferred-object/ "The Deferred object") is something I’ve head about, but never got a change to play with. It turn’s out to be very nice and simple idea. Deferred allows you to build chainable constructions. Actually, `$.ajax()` always returns deferred object, so you can apply `.done()`, `.fail()` functions on it.

Here is the code, that you could be re-usable in the same situation;

```javascript
var pipedAjaxRequests = function (urls, callback) {
  var responses = {};

  var promise = $.Deferred().resolve();
  _.each(urls, function (url) {
    promise = promise.pipe(function () {
      return $.get(url);
    }).done(function (response) {
      responses[url] = response;
    });
  });

  promise.done(function () {
    callback(responses);
  }).fail(function (err) {
    callback(responses, err);
  });
};
```
It does create the pipe of `$.get()` calls and place the responses in one response object. At the time then all resources are fetched, the callback is called. In case of errors, second parameter of callback will have error info.

Thanks a lot to [@antsamar](http://twitter.com/antsamar) and [@alex_gonchar](http://twitter.com/alex_gonchar) for helping me out.
