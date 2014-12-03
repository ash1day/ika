console.log("3d")






  // ここにあなたのコードを書いていきます
var scene = new THREE.Scene();

  var width  = 600*1;//render
  var height = 400*1;

  var width_scale  = 300;//render
  var height_scale = 300;  
  var depth_scale = 100;
  var fov    = 60;
  var aspect = width / height;
  var near   = 1;
  var far    = 1000;
  S_pathline = [],
  R_S_pathline = 1,
  count = xy_csv[0][0].length;
//  cubeSize;

var padding_3d = 0;
var minXaxis_3d = 135;
var maxXaxis_3d = 150;
var minYaxis_3d = 30;
var maxYaxis_3d = 50;
var minZaxis_3d = 0;
var maxZaxis_3d = 50;

var det_depth_3d = 2;
var det_day_3d = 4;

var xScale_3d = d3.scale.linear()
.domain([minXaxis_3d,maxXaxis_3d])
.range([padding_3d,width_scale-padding_3d])
.nice();

var yScale_3d = d3.scale.linear()
.domain([minYaxis_3d,maxYaxis_3d])
.range([padding_3d,height_scale-padding_3d])
.nice();

var zScale_3d = d3.scale.linear()
.domain([minZaxis_3d,maxZaxis_3d])
.range([padding_3d,depth_scale-padding_3d])
.nice();






for (k = 0; k < det_depth_3d; k++){
for (j = 0; j < det_day_3d; j++){
    for (i = 0; i < count; i++){
    var geometry_s_p = new THREE.SphereGeometry(R_S_pathline);
    var material_s_p = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
    S_pathline[i] = new THREE.Mesh(geometry_s_p, material_s_p);
    S_pathline[i].castShadow = true;
    S_pathline[i].position.set(xScale_3d(xy_csv[k][j][i][0]),yScale_3d(xy_csv[k][j][i][1]),zScale_3d(xy_csv[k][j][i][2]));//rotate scale
  //  console.log(xScale_3d(xy_csv[0][0][i][0]));
  //  console.log(yScale_3d(xy_csv[0][0][i][1]));
  //  console.log(zScale_3d(xy_csv[0][0][i][2]));
    scene.add(S_pathline[i]);
    }
}
}






    function day_3d (depth, day){

      for (i = 0; i < count; i++){
    var geometry_s_p = new THREE.SphereGeometry(R_S_pathline);
    var material_s_p = new THREE.MeshLambertMaterial({color: "rgb(0,0,255)"});
    S_pathline[i] = new THREE.Mesh(geometry_s_p, material_s_p);
    S_pathline[i].castShadow = true;
    S_pathline[i].position.set(xScale_3d(xy_csv[depth][day][i][0]),yScale_3d(xy_csv[depth][day][i][1]),zScale_3d(xy_csv[depth][day][i][2]));//rotate scale
    scene.add(S_pathline[i]);

    }


    }


/*

     cubeSize = r(50);
    var geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    //var material = new THREE.MeshBasicMaterial({color: "rgb(255,0,0)"});
    var material = new THREE.MeshLambertMaterial({color: "rgb("+r(255)+","+r(255)+","+r(255)+")"});
    cube[i] = new THREE.Mesh(geometry, material);
    cube[i].castShadow = true;
    cube[i].position.set(0,0+r(200),0);//rotate scale
    scene.add(cube[i]);  






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
    var geometry_p = new THREE.PlaneGeometry(width_scale,height_scale);
    var material_p = new THREE.MeshLambertMaterial({color: "rgb(0,0,255)", side: THREE.DoubleSide});
    var plane = new THREE.Mesh(geometry_p, material_p);
    plane.receiveShadow = true;
    plane.position.set(width_scale/2,0,height_scale/2);//rotate scale
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
/*
    for (i = 0; i < count; i++){
        S_pathline[i].rotation.x += i * Math.PI/180;
        S_pathline[i].rotation.y += i * Math.PI/180;
       // S_pathline[i].position.x =  i *10;
      // cube[i].position.z = Math.cos(new Data().getTime() / (200+i)) *100;
        }
*/

    renderer.render( scene, camera );
   controls.update();
  } 



function r (n){
    return Math.floor(Math.random()* (n + 1));
}



