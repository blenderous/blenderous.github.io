---
layout: post
title: "Deploying a Vite React Project to Github Pages"
description: "A step by step guide to deploying your react project created using vite onto github pages."
date: 2024-02-09
category: development
comments: false
---

## Deploying a Vite React Project to Github Pages

So you must be having a lot of fun creating React applications using the `vite` tool (spelled veet) which helps in creates a local dev server and offers hot module replacement.

You must be already familiar with the command `npm create vite@latest` in order to create a new project with the boilerplate code to get started with a new React application.

Say you have already created an application using the command and you have built your react application that is now running fine in your localhost development server when you run `npm run dev`.

Now, I will tell you the steps that need to be followed in order to deploy your React project into Github Pages.

### 1. Create a repository on Github for your project

Create a new repository on Github and add your project to it. If you don't know how to do this, you can check this [StackOverflow answer](https://stackoverflow.com/a/33666085/417588).

### 2. Install the gh-pages package

This package will help you deploy your React app to GitHub Pages. Run the following command to install it:

```bash
npm install gh-pages --save-dev
```

### 3. Add a homepage property to the package.json file

Open the package.json file in your project directory and add the following property at the top level:

```javascript
"homepage": "https://{username}.github.io/{repo-name}",
```

Replace {username} with your GitHub username and {repo-name} with the name of your GitHub repository.

### 4. Add deployment scripts to the package.json file

```javascript
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

The predeploy script will bundle your React app, and the deploy script will deploy the bundled file to GitHub Pages.

### 5. Set the correct base in vite.config.js

If you are deploying to `https://{username}.github.io/{repo-name}` (eg. your repository is at `https://github.com/{username}/{repo-name}`), then set `base` to `/{repo-name}/` in `vite.config.js`, like so:

```javascript
base: '/{repo-name}/'
```

### 6. Commit your code and push it to the repository

Push the code updates to the GitHub repository by using the following command:

```bash
git push origin main
```

### 7. Deploy the application

Run the following command to deploy your React app to GitHub Pages:

```bash
npm run deploy
```

Once the deployment is complete, you can view your deployed app at the URL `https://{username}.github.io/{repo-name}`

And that's how you can deploy your React app created using Vite onto Github Pages.

Hope you enjoyed reading this post and found it helpful.