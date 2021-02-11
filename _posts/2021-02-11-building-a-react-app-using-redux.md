---
layout: post
title: "Building a React Redux app and publishing it to a codesandbox"
description: "General information on how to create a `React Redux` app and publishing it to a codesandbox"
date: 2021-02-11
category: development
comments: true
---
## Building a `React Redux` app and publishing it to a *codesandbox*
There is a simple template of a `React Redux` app available on the `Redux` documentation website.

It can be installed using the following command:
`npx create-react-app my-app --template redux`

In order to start the development version of the application you are building, just run:
`npm start`

There is a counter app included with this default package.

You can create your own app referring to this default counter app. Or you can follow the awesome tutorial given in the `Redux` website [https://redux.js.org/](https://redux.js.org/)

Make sure you use `git add -A` and `git commit -m "your commit message here"` every now and then to save snapshots of your code wherever required.

After you have done developing your app, you can apply the following steps to publish your code into a code sandbox.

### Step 1: Create a new repository

Create a new repository on your github profile like so:

![Screenshot of creating a new repository](/blog-assets/images/create-new-git-repository.png)

### Step 2: Add remote origin (in this case, GitHub)

Locally, you need to commit whatever code you have and then run the following:

`git remote add origin git@github.com:blenderous/your-repository-name.git`

(Make sure you write your username in place of *blenderous*)

### Step 3: Push to the remote origin

`git push -u origin master`

The `-u` flag sets the remote origin as the default. This lets you later easily just do git push and git pull without having to specifying an origin since we always want GitHub in this case.

### Step 4: Create an account in codesandbox.io

After creating the account, click on the button *Create Sandbox* in the top right corner.

A window will open which will have an option to *Import Project* clicking on which you will see the following:

![Screenshot of Import Project in the create sandbox window](/blog-assets/images/codesandbox-import-repository.png)

Enter the URL of the GitHub repository that you had created in the input box and then click on *Import and Fork*.

And voila! your project will be published as a *codesandbox* which you can share or play around with as you like.
