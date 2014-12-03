console.log("3d")






  // ここにあなたのコードを書いていきます
var scene = new THREE.Scene();

  var width  = 600;
  var height = 400;
  var fov    = 60;
  var aspect = width / height;
  var near   = 1;
  var far    = 1000;
  cube = [],
  count = 10,
  i;
//  cubeSize;


    for (i = 0; i < count; i++){
        cubeSize = r(50);
    var geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    //var material = new THREE.MeshBasicMaterial({color: "rgb(255,0,0)"});
    var material = new THREE.MeshLambertMaterial({color: "rgb("+r(255)+","+r(255)+","+r(255)+")"});
    cube[i] = new THREE.Mesh(geometry, material);
    cube[i].castShadow = true;
    cube[i].position.set(0,0+r(200),0);//rotate scale
    scene.add(cube[i]);    
    }



/*
   var geometry = new THREE.BoxGeometry(50,50,50);
    //var material = new THREE.MeshBasicMaterial({color: "rgb(255,0,0)"});
    var material = new THREE.MeshLambertMaterial({color: "rgb(255,0,0)"});
    var cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.position.set(0,0,0);//rotate scale
    scene.add(cube);    

 var geometry = new THREE.BoxGeometry( 30, 30, 30 );
  var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
  var mesh = new THREE.Mesh( geometry, material );
      mesh.castShadow = true;
    mesh.position.set(0,110,0);//rotate scale
  scene.add( mesh );


    var geometry_s = new THREE.SphereGeometry(30);
    var material_s = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
    var sphere = new THREE.Mesh(geometry_s, material_s);
    cube.castShadow = true;
    sphere.position.set(100,100,100);//rotate scale
    scene.add(sphere);
*/
    var geometry_p = new THREE.PlaneGeometry(300,300);
    var material_p = new THREE.MeshLambertMaterial({color: "rgb(0,0,255)", side: THREE.DoubleSide});
    var plane = new THREE.Mesh(geometry_p, material_p);
    plane.receiveShadow = true;
    plane.position.set(0,0,0);//rotate scale
    plane.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane);


     //light
    var light = new THREE.DirectionalLight(0xffffff,1);
    light.position.set(0,100,30);
    light.castShadow = true;
    scene.add(light);
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
       //camera
    var camera = new THREE.PerspectiveCamera(45,width/height, 1,1000);

    camera.position.set(200,300,500);
  //  camera.lookAt(cube.position);

    //helper
    var axis = new THREE.AxisHelper(1000);
    axis.position.set(0,0,0);
    scene.add(axis);



     //render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.shadowMapEnabled = true;
    document.getElementById("stage").appendChild(renderer.domElement);

       //control
    var controls = new THREE.OrbitControls(camera, renderer.domElement)

// renderer.render( scene, camera );
  //   controls.update();


renderLoop()
   function renderLoop () {
    requestAnimationFrame( renderLoop );
/*
    cube.rotation.x += 1 * Math.PI/180;
    cube.rotation.y += 1 * Math.PI/180;

    mesh.rotation.set(
      0,
      mesh.rotation.y + .01,
      mesh.rotation.z + .01
    );
*/

    for (i = 0; i < count; i++){
        cube[i].rotation.x += i * Math.PI/180;
        cube[i].rotation.y += i * Math.PI/180;
        cube[i].position.x =  i *10;
      // cube[i].position.z = Math.cos(new Data().getTime() / (200+i)) *100;
        }


    renderer.render( scene, camera );
   controls.update();
  } 



function r (n){
    return Math.floor(Math.random()* (n + 1));
}



