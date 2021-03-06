
		<script>

			var container, stats;
			var camera, scene, renderer;
			var group;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 500;

				scene = new THREE.Scene();
				
				scene.background = new THREE.TextureLoader().load( 'textures/tri_pattern.jpg' );

				group = new THREE.Group();
				scene.add( group );

				// earth frente

				var loader = new THREE.TextureLoader();
				loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {

					var geometry = new THREE.SphereGeometry( 50, 20, 20 );

					var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.y = -50;
					mesh.position.x = 0;
					mesh.position.z = 300;
					group.add( mesh );

				} );

				// earth2 fundo

				var loader = new THREE.TextureLoader();
				loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {

					var geometry = new THREE.SphereGeometry( 50, 20, 20 );

					var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.y = 100;
					mesh.position.x = 0;
					mesh.position.z = 0;
					group.add( mesh );

				} );

				// earth3 esquerda

				var loader = new THREE.TextureLoader();
				loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {

					var geometry = new THREE.SphereGeometry( 50, 20, 20 );

					var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.y = 0;
					mesh.position.x = -300;
					mesh.position.z = 0;
					group.add( mesh );

				} );

				// earth4 direita 

				var loader = new THREE.TextureLoader();
				loader.load( 'textures/land_ocean_ice_cloud_2048.jpg', function ( texture ) {

					var geometry = new THREE.SphereGeometry( 50, 20, 20 );

					var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.y = 0;
					mesh.position.x = 300;
					mesh.position.z = 0
					group.add( mesh );

				} );

				// shadow

				var canvas = document.createElement( 'canvas' );
				canvas.width = 128;
				canvas.height = 128;

				var context = canvas.getContext( '2d' );
				var gradient = context.createRadialGradient(
					canvas.width / 2,
					canvas.height / 2,
					0,
					canvas.width / 2,
					canvas.height / 2,
					canvas.width / 2
				);
				gradient.addColorStop( 0.1, 'rgba(210,210,210,1)' );
				gradient.addColorStop( 1, 'rgba(255,255,255,1)' );

				context.fillStyle = gradient;
				context.fillRect( 0, 0, canvas.width, canvas.height );

				var texture = new THREE.CanvasTexture( canvas );

				var geometry = new THREE.PlaneBufferGeometry( 300, 300, 3, 3 );
				var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

				var mesh = new THREE.Mesh( geometry, material );
				mesh.position.y = - 250;
				mesh.rotation.x = - Math.PI / 2;
				group.add( mesh );

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				//stats = new Stats();
				//container.appendChild( stats.dom );

				//document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );
				
			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt( scene.position );

				//group.rotation.y -= 0.005;

				renderer.render( scene, camera );

			}


		</script>