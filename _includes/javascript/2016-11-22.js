(function() {

		var camera, scene, renderer;
		var mesh;

		var magic = {

			init: function() {
				// camera
				camera = new THREE.PerspectiveCamera(
					// field of view
					70,
					// aspect ratio
					// window.innerWidth / window.innerHeight,
					640 / 480,
					// frustum near plane
					1,
					// frustum far plane
					1000
				);
				camera.position.z = 400;

				// making a cube
				var geometry = new THREE.BoxBufferGeometry( 512, 512, 512 );
				// making a new texture from the image
				var texture = new THREE.TextureLoader()
				  .load( '/blog-assets/textures/red-squares-on-green.gif' );
				// adding texture to the shape
				var material = new THREE.MeshBasicMaterial( { map: texture } );
				// creating a mesh from the cube and textured material
				mesh = new THREE.Mesh( geometry, material );

				// creating the scene and adding the shape
				scene = new THREE.Scene();
				scene.add( mesh );

				// renderer
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( 640, 480 );
				// renderer.render( scene, camera );
				document.getElementsByTagName('article')[0].appendChild( renderer.domElement );
				window.addEventListener( 'resize', this.onWindowResize, false );
			},

			onWindowResize: function() {
				// camera.aspect = window.innerWidth / window.innerHeight;
				// camera.updateProjectionMatrix();
				// var rendererWidth;
				// renderer.setSize( window.innerWidth, window.innerHeight );
			},

			animate: function() {
				var repeatedAction = function() {
					mesh.rotation.x += 0.005;
					mesh.rotation.y += 0.01;
					renderer.render( scene, camera );
					requestAnimationFrame( repeatedAction );
				}
				requestAnimationFrame( repeatedAction );
			}

		};

		magic.init();
		magic.animate();

})();
