---
layout: post
title: "Front End Workflow"
description: "Possible technologies and tools of trade that could be used to create interfaces for the web"
date: 2016-10-20
comments: true
---

# Front End Workflow

Front end development is a chaos. There are so many tools out there to make web applications and how they work and contribute to the workflow of a developer is overwhelming.

Now, for this article I am assuming that you already know about (even if you haven't used) certain front end tools.



## Dev version
 - sass compilation (using `libSass`)
 - watch and inject `CSS` (separate file for each scss file)
 - watch and include `HTML` partials (preferably using a templating language)
 - include bower components (like `angular`, `modernizr`)
 - Commands to create folder for page. Assuming tasks are carried out using `gulp`, the commands could be like: `gulp folder --page="homepage"`, `gulp folder --layout="blog"`) and section for page `gulp folder --section="section1" --for="homepage"`
 - live reload
 - Rendering of site in multiple languages  implemented from back-end

## Build version
 - minify and uglify `JS`, `CSS`
 - create javascript files that could be loaded asynchronously in the pages
 - compress images and load them asynchronously
 - serve compressed pages

## Nice to haves
 - Lazy load for all javascript modules in the `app.js`
 - Preprocessing the js files

## Example folder structure

    /public
    --assets
    ----images
    ----fonts
    --css
    --js
    --html

    /front-code
    --theme
    ----colors.scss
    ----fonts.scss
    ----vars.scss
    ----mixins.scss
    ----helper.scss
    --library
    ----components
    ------slider
    --------.html
    --------.scss
    ------bargraph
    --------.html
    --------.scss
    ----helpers
    ------centerImages
    --------.html
    --------.scss
    --project
    ----partials
    ------footer
    --------.html
    --------.scss
    --------.js
    ------weirdCardLadder
    --------.html
    --------.scss
    --------.js
    ----pages
    ------homepage
    --------slider
    ----------.html
    ----------.js
    --------section1
    ----------.html
    ----------.scss
    --------section2
    ----------.html
    ----------.scss
    ------accessibility
    --------.html
    --------.scss

    /dist
