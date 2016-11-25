---
layout: post
title: "Front End Workflow"
description: "Possible technologies and tools of trade that could be used to create interfaces for the web"
date: 2016-10-20
comments: true
---

# Front End Workflow

Front end development is a chaos. There are so many tools out there to make web application, the workflow can become very complicated.

To have a build version with the bare minimum of the resources optimized for fast loading of page and a development version with the luxury of tools that one uses to create the website is the idea.



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
 - Segregation of javascript into different files depending on if they are used uniquely by a single page/view or across one/more/all pages of an application
 - Lazy load for all javascript modules included in the `app.js`
 - Pre-processing the js files after linting them or converting them from `ES6` and/or `coffeescript`.

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
