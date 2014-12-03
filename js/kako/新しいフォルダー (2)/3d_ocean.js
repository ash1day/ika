


var scene = new THREE.Scene();

  var width  = w;//render
  var height = h;



var main = function () {
  var scene = new THREE.Scene();
 
  var width  = 600;
  var height = 400;
  var fov    = 60;
  var aspect = width / height;
  var near   = 1;
  var far    = 1000;






  var geometry = new THREE.CubeGeometry( 30, 30, 30 );
  var material = new THREE.MeshBasicMaterial( { color: "red" } );
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,0,0);
  scene.add( mesh );

  var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 200, 100, 500 );
    camera.lookAt(mesh.position)


  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
 // renderer.setClearColor(0xeeeeee, 1);
 // renderer.shadowMapEnabled = true;
  document.getElementById("stage").appendChild(renderer.domElement);

 
  renderer.render( scene, camera );






























































































