---
layout: post
title: "THREE js fun"
description: "Having fun with including a cube with a sassy texture and smooth rotating animation"
date: 2016-11-22
category: development
comments: false
jslib:
- https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js
jsarray:
- javascript/2016-11-22.js
---

## Animating a cube with texture in 3D space

The Three JS library is an extensive library to make all sorts of 3D magic in the browser.
It uses the 3D context of HTML5 canvas to render 3D stuff during runtime.

In this example, I am using a simple cube with a nice image texture to show off some rad graphics using some raw javascript.

How? Read on to find out.

### 1. Adding a camera

``` javascript
camera = new THREE.PerspectiveCamera(
  // field of view
  70,
  // aspect ratio
  640 / 480,
  // frustum near plane
  1,
  // frustum far plane
  1000
);
// set the camera position
camera.position.z = 400;
```

### 2. Creating a shape

Create a mesh with texture

``` javascript
// making a cube
var geometry = new THREE.BoxBufferGeometry( 512, 512, 512 );
// making a new texture from the image
var texture = new THREE.TextureLoader()
  .load( '/blog-assets/textures/red-squares-on-green.gif' );
// adding texture to the shape
var material = new THREE.MeshBasicMaterial( { map: texture } );
// creating a mesh from the cube and textured material
mesh = new THREE.Mesh( geometry, material );
```
The texture that looks like this:

![texture](/blog-assets/textures/red-squares-on-green.gif)

### 3. The scene
``` javascript
// creating the scene
scene = new THREE.Scene();
// add the mesh
scene.add( mesh );
renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 640, 480 );
// renderer.render( scene, camera );
document.getElementsByTagName('article')[0].appendChild( renderer.domElement );
```

### 4. Animation of the cube
``` javascript
var repeatedAction = function() {
  // rotate the mesh about the x and y axes
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  // render the updated scene
  renderer.render( scene, camera );
  // carry out the repeatedAction for every animation frame from the browser
  requestAnimationFrame( repeatedAction );
}
// carry out the repeatedAction for every animation frame from the browser
requestAnimationFrame( repeatedAction );
```

The following is a demo of the above code:
