
var scene,
	renderer,
	camera,
	sphereMesh,
	pointLight

init();
render();

function init()
{
	//initialize the scene, camera and renderer
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	
	//add the renderer canvas to the html page
	document.body.appendChild(renderer.domElement);

	//make a sphere with 50 radius, and a lambert mesh with a color
	sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(2,32,32),new THREE.MeshLambertMaterial({color: 0xAEEDC7}))
	scene.add(sphereMesh);

	var light = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( light );

	var geometry = new THREE.PlaneGeometry( 3000, 3000 );
	var material = new THREE.MeshLambertMaterial( {color: 0xffff00} );
	var plane = new THREE.Mesh( geometry, material)
	scene.add( plane );

	pointLight = new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = sphereMesh.position.x;
	pointLight.position.y = sphereMesh.position.y+200;
	pointLight.position.z = sphereMesh.position.z;

	// add to the scene
	scene.add(pointLight);

	camera.position.z = 300;
}

function render()
{
	pointLight.position.x = sphereMesh.position.x;
	pointLight.position.y = sphereMesh.position.y+200;
	pointLight.position.z = sphereMesh.position.z;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

window.onkeydown = function(e)
{
	var key = e.keyCode;

	if(key==87)
		camera.rotation.x+=10;

	if(key==83)
		camera.rotation.x-=10;
}

window.onmousemove = function(e)
{
	interval = camera.position.z/window.innerWidth
	sphereMesh.position.z=interval*e.clientX
}
