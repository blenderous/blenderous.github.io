---
layout: post
title: "Using Fetch API to fetch a static file in a React app"
description: "Using Fetch API to fetch a static file in a React app so that it's contents can be obtained asynchronously"
date: 2021-02-26
category: development
comments: true
---
While building a React application, it is possible that we need a huge static file to be fetched asynchronously.

So instead of using `import pokeDex from './pokedex.json'`, we can fetch the `pokedex.json` file using the `Fetch API` and onced it its dowloaded, we can incorporate it in our code.

Let's see how this can be done.

Suppose we have a `class` component in `React` named `PokeList`.
We want to fetch the `pokedex.json` file inside this component.
So, in the `componentDidMount` life-cycle method, we can add the following:
```javascript
componentDidMount() {
    fetch('https://blenderous.github.io/blog-assets/json/pokedex.json')
    .then( response => {
        if (response.ok) {
            return response.json()
        }
        throw response
    }).then (data => {
        this.setState({pokeDex: data})
    }).catch (error => {
        console.error("An error occurred: ", error)
    }).finally(() => {
        this.setState({loading: false})
    })
}
```
The URL `https://blenderous.github.io/blog-assets/json/pokedex.json` could be changed to wherever you have hosted your `pokedex.json` file.

So the `React` app can now get the data from the file and add it to the `state` of the component.

And when everything is finished, the `loading` `state` can be set to `false` so that in the UI we can show the data instead of a loading text or spinner.



