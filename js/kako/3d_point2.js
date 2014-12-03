console.log("3d")


var det_depth_3d = 5;/////////////////////
var det_day_3d = 6;



  // ここにあなたのコードを書いていきます
var scene = new THREE.Scene();

  var width  = 600*1;//render
  var height = 400*1;

console.log(points[1].xyz[det_depth_3d][0][0])

  var padding_3d = 0;
  var minXaxis_3d = 130;
  var maxXaxis_3d = 150;
  var minYaxis_3d = 30;
  var maxYaxis_3d = 50;
  var minZaxis_3d = 0;
  var maxZaxis_3d = points[1].xyz[det_depth_3d][0][0];


  var width_scale  = 300;//render
  var height_scale = width_scale*((maxXaxis_3d-minXaxis_3d)/(maxYaxis_3d-minYaxis_3d));;  
  var depth_scale = 200; // width_scale*( points[1].z[det_depth_3d][0][0]/((round_earth/360)*(maxXaxis_3d-minXaxis_3d)) )
  var x_ren_cen = -width_scale/2;
  var y_ren_cen = -height_scale/2;
  var z_ren_cen = -depth_scale/2;

 // var fov    = 60;
  var aspect = width / height;
  //var near   = 1;
  //var far    = 1000;
  S_pathline = [],
  R_S_pathline = 1.0/3,
  count_day_devide = points[0].xyz[0][0].length;
//  cubeSize;





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



//console.log(zScale_3d(points[1].xyz[0][0][0][2]))
//console.log(zScale_3d(points[1].xyz[10][0][0][2]))
//console.log(zScale_3d(points[1].xyz[20][0][0][2]))








/*

for (i_p = 1; i_p < points.length; i_p++){
  if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
    for (i_d = 0; i_d < det_depth_3d; i_d++){
      for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
          for (i = 0; i < count_day_devide; i++){
          var geometry_s_p = new THREE.SphereGeometry(R_S_pathline);
          var material_s_p = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
          S_pathline[i] = new THREE.Mesh(geometry_s_p, material_s_p);
          S_pathline[i].castShadow = true;
          S_pathline[i].position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0]),yScale_3d(points[i_p].xyz[i_d][i_d2][i][1]),zScale_3d(points[i_p].xyz[i_d][i_d2][i][2]));//rotate scale
          scene.add(S_pathline[i]);
          }
      }
    }
  }
}
*/
//xyz[i_d][i_d2][i][0]//depth,day,daydev,axis

draw_allpoints()


function draw_allpoints (){      
  console.log("draw point")
  for (i_p = 1; i_p < points.length; i_p++){
    if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
      for (i_d = 0; i_d < det_depth_3d; i_d++){
        for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
            for (i = 0; i < count_day_devide; i++){
              var geometry_s_p = new THREE.SphereGeometry(get_R_S_pathline(i_d,i_d2,i));
              var material_s_p = new THREE.MeshLambertMaterial({
                color: get_color_target (i_d,i_d2,i),
                transparent: true,
                opacity: get_opecity_target(i_d,i_d2,i)
              });
              points[i_p].S_pathlines[i_d][i_d2][i] = new THREE.Mesh(geometry_s_p, material_s_p);
              points[i_p].S_pathlines[i_d][i_d2][i].castShadow = true;
              points[i_p].S_pathlines[i_d][i_d2][i].position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0]),yScale_3d(points[i_p].xyz[i_d][i_d2][i][1]),zScale_3d(points[i_p].xyz[i_d][i_d2][i][2]));//rotate scale
              scene.add(points[i_p].S_pathlines[i_d][i_d2][i]);
            }
          }
        }
      }
    }
  }

function remove_delete_allpoints (){
    for (i_p = 1; i_p < points.length; i_p++){
      for (i_d = 0; i_d < det_depth_3d; i_d++){
        for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
            for (i = 0; i < count_day_devide; i++){
              scene.remove(points[i_p].S_pathlines[i_d][i_d2][i]);
              delete points[i_p].S_pathlines[i_d][i_d2][i]
            }
          }
        }
      }
    }

function get_color_target (i_d,i_d2,i){
    var r = 0;
    var g = 0;
    var b = 255;  
    if( i_d == Number(depth_target) ) {
          if( i_d2 == Number(devi_day_target) ) {
            r = 0;
            g = 200;
            b = 0;
            }
          }

    if( (i == 0) && (i_d2 == 0) ) {
      r = 255;
      g = 0;
      b = 0;
            }

    return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
  }

function get_opecity_target (i_d,i_d2,i){
 var v_opecity_3d = 0.2;


    if( i_d == Number(depth_target) ) {
      if( i_d2 == Number(devi_day_target) ) {
            v_opecity_3d = 1;
        }
        else if (i == 0){
            v_opecity_3d = 1;
        }
      else{
            v_opecity_3d = 0.5;
        }
            }

/*    if( (i == 0) && (i_d2 == 0) ) {
            v_opecity_3d = 1;
            }*/

  return v_opecity_3d;
}



console.log();

function get_R_S_pathline (i_d,i_d2,i){
  var R_S = R_S_pathline;

    if( i_d == Number(depth_target) ) {
      R_S = 0.5;
      if( i_d2 == Number(devi_day_target) ) {
            R_S = 0.8;
              }
            }
    if( (i == 0) && (i_d2 == 0) ) {
      R_S = 0.8;
      if ( i_d == Number(depth_target) )  {
        R_S = 1;
        }
      }
  return R_S ;
}



    function day_3d (depth, day){

      for (i = 0; i < count_day_devide; i++){
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
    var v_opacity = 0.03;

    var geometry_p = new THREE.PlaneGeometry(width_scale,height_scale);
    var material_p = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: v_opacity, 
      side: THREE.DoubleSide});
/*
    var plane_upper = new THREE.Mesh(geometry_p, material_p);
    plane_upper.receiveShadow = true;
    plane_upper.position.set(width_scale/2,height_scale/2,0);//rotate scale width_scale height_scale
   // plane_upper.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_upper);
*/
    var plane_bottom = new THREE.Mesh(geometry_p, material_p);
    plane_bottom.receiveShadow = true;
    plane_bottom.position.set(width_scale/2,height_scale/2,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom);

    var width_pole = 2;

    var geometry_p_p = new THREE.PlaneGeometry(width_scale,width_pole);
    var material_p_p = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});

    var plane_upper_pole = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole.receiveShadow = true;
    plane_upper_pole.position.set(width_scale/2,height_scale/1,0);//rotate scale width_scale height_scale
   // plane_upper_pole.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole);
    var plane_upper_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole2.receiveShadow = true;
    plane_upper_pole2.position.set(width_scale/2,0,0);//rotate scale width_scale height_scale
   // plane_upper_pole2.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole2);
    var plane_bottom_pole = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole.receiveShadow = true;
    plane_bottom_pole.position.set(width_scale/2,height_scale/1,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole);
    var plane_bottom_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole2.receiveShadow = true;
    plane_bottom_pole2.position.set(width_scale/2,0,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole2.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole2);

    var plane_upper_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side.receiveShadow = true;
    plane_upper_pole_side.position.set(0,height_scale/2,0);//rotate scale width_scale height_scale
    plane_upper_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side);
    var plane_upper_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side2.receiveShadow = true;
    plane_upper_pole_side2.position.set(width_scale/1,height_scale/2,0);//rotate scale width_scale height_scale
    plane_upper_pole_side2.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side2);
    var plane_bottom_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side.receiveShadow = true;
    plane_bottom_pole_side.position.set(0,height_scale/2,depth_scale);//rotate scale width_scale height_scale
    plane_bottom_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole_side);
    var plane_bottom_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side2.receiveShadow = true;
    plane_bottom_pole_side2.position.set(width_scale/1,height_scale/2,depth_scale);//rotate scale width_scale height_scale
    plane_bottom_pole_side2.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole_side2);



    var geometry_p_p_d = new THREE.PlaneGeometry(depth_scale,width_pole);
    var material_p_p_d = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});

    var plane_upper_pole_side_d = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d.receiveShadow = true;
    plane_upper_pole_side_d.position.set(0,0,depth_scale/2);//rotate scale width_scale height_scale
    plane_upper_pole_side_d.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d);
   var plane_upper_pole_side_d2 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d2.receiveShadow = true;
    plane_upper_pole_side_d2.position.set(width_scale,0,depth_scale/2);//rotate scale width_scale height_scale
    plane_upper_pole_side_d2.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d2);
    var plane_upper_pole_side_d3 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d3.receiveShadow = true;
    plane_upper_pole_side_d3.position.set(0,height_scale,depth_scale/2);//rotate scale width_scale height_scale
    plane_upper_pole_side_d3.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d3);
    var plane_upper_pole_side_d4 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d4.receiveShadow = true;
    plane_upper_pole_side_d4.position.set(width_scale,height_scale,depth_scale/2);//rotate scale width_scale height_scale
    plane_upper_pole_side_d4.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d4);


    /*

    var plane_bottom_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side.receiveShadow = true;
    plane_bottom_pole_side.position.set(width_scale/2,height_scale/1,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole_side.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole_side);
    var plane_bottom_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side2.receiveShadow = true;
    plane_bottom_pole_side2.position.set(width_scale/2,0,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole_side2.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole_side2);

*/


     //light
    var light = new THREE.DirectionalLight(0xffffff,1);
    light.position.set(0,100,30);
    light.castShadow = true;
    scene.add(light);
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
       //camera
    var camera = new THREE.PerspectiveCamera(45,width/height, 1,1000);

    camera.position.set(400,300,500);
    camera.lookAt({x:width_scale/2,y:height_scale/2,z:depth_scale/2});
    //camera.lookAt({x:0, y:0, z:0 }); 
    //camera.lookAt(cube.position);

    //helper
    var axis = new THREE.AxisHelper(500);
    axis.position.set(x_ren_cen,y_ren_cen,z_ren_cen);
    scene.add(axis);



     //render
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.shadowMapEnabled = true;
    document.getElementById("3d_ocean").appendChild(renderer.domElement);

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
    for (i = 0; i < count_day_devide; i++){
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



