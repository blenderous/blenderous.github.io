---
layout: post
title: "Possible Front-end workflow"
description: "Possible technologies and tools of trade that could be used to create interfaces for the web"
date: 2016-10-20
comments: true
---

# Possible workflow

## Dev version
 - sass compilation (using `libSass`)
 - watch and inject css (separate file for each scss file)
 - watch and include HTML partials (preferably using a templating language)
 - include bower components (angular, modernizr)
 - Commands to create folder for page. Assuming tasks are carried out using `gulp`, the commands could be like: `gulp folder --page="homepage"`, `gulp folder --layout="blog"`) and section for page `gulp folder --section="section1" --for="homepage"`
 - live reload
 - Rendering of site in multiple languages  implemented from back-end

## Build version
 - minify and uglify JS, css
 - create javascript files that could be loaded asynchronously in the pages
 - compress images and load them asynchronously
 - serve compressed pages

## Nice to haves
 - Move lazy load to app.js
 - Add ng-app to the html instead of body

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
