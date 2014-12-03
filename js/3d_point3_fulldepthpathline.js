console.log("3d_point3_fulldepthpathline")


var det_depth_3d = 1;/////////////////////
var det_day_3d = 6;



  // ここにあなたのコードを書いていきます
//var scene_for3d_fulldepthpath = new THREE.Scene();////もう一個の方で定義する必要あり 

  var width  = 600*1;//render
  var height = 400*1;



  var padding_3d = padding_zoom;
  var minXaxis_3d = S_masterX_2dmap_zoom;
  var maxXaxis_3d = E_masterX_2dmap_zoom;
  var minYaxis_3d = S_masterY_2dmap_zoom;
  var maxYaxis_3d = E_masterY_2dmap_zoom;
  var minZaxis_3d = 0;
  //var maxZaxis_3d = z_csv[det_depth_3d][0][0];
    var maxZaxis_3d = 5;////ここを動的に帰るべきよ
  //var maxZaxis_3d = points[1].z[det_depth_3d][0][0];

 // var width_scale  = 300;//render
  // height_scale = width_scale*((maxXaxis_3d-minXaxis_3d)/(maxYaxis_3d-minYaxis_3d));
   var width_scale  = w_zoom;//render
  var height_scale = h_zoom;   
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
.domain([maxZaxis_3d,minZaxis_3d])////zも逆にする　minmax
.range([padding_3d,depth_scale-padding_3d])
.nice();



//console.log(zScale_3d(points[1].xyz[0][0][0][2]))
//console.log(zScale_3d(points[1].xyz[10][0][0][2]))
//console.log(zScale_3d(points[1].xyz[20][0][0][2]))






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



//console.log();

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
    var geometry_s_p_for3d = new THREE.SphereGeometry(R_S_pathline);
    var material_s_p_for3d = new THREE.MeshLambertMaterial({color: "rgb(0,0,255)"});
    S_pathline[i] = new THREE.Mesh(geometry_s_p_for3d, material_s_p_for3d);
    S_pathline[i].castShadow = true;
    S_pathline[i].position.set(xScale_3d(xy_csv[depth][day][i][0])+x_ren_cen,yScale_3d(xy_csv[depth][day][i][1])+y_ren_cen,zScale_3d(xy_csv[depth][day][i][2])+z_ren_cen);//rotate scale
    scene_for3d_fulldepthpath.add(S_pathline[i]);

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
    scene_for3d_fulldepthpath.add(cube[i]);  






   var geometry = new THREE.BoxGeometry(50,50,50);
    //var material = new THREE.MeshBasicMaterial({color: "rgb(255,0,0)"});
    var material = new THREE.MeshLambertMaterial({color: "rgb(255,0,0)"});
    var cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.position.set(0,0,0);//rotate scale
    scene_for3d_fulldepthpath.add(cube);    

 var geometry = new THREE.BoxGeometry( 30, 30, 30 );
  var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
  var mesh = new THREE.Mesh( geometry, material );
      mesh.castShadow = true;
    mesh.position.set(0,110,0);//rotate scale
  scene_for3d_fulldepthpath.add( mesh );


    var geometry_s = new THREE.SphereGeometry(30);
    var material_s = new THREE.MeshLambertMaterial({color: "rgb(0,255,0)"});
    var sphere = new THREE.Mesh(geometry_s, material_s);
    cube.castShadow = true;
    sphere.position.set(100,100,100);//rotate scale
    scene_for3d_fulldepthpath.add(sphere);
*/
    var v_opacity = 0.03;

    var geometry_p_for3d_fulldepthpath = new THREE.PlaneGeometry(width_scale,height_scale);
    var material_p_for3d_fulldepthpath = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: v_opacity, 
      side: THREE.DoubleSide});
/*
    var plane_upper = new THREE.Mesh(geometry_p_for3d_fulldepthpath, material_p_for3d_fulldepthpath);
    plane_upper.receiveShadow = true;
    plane_upper.position.set(width_scale/2,height_scale/2,0);//rotate scale width_scale height_scale
   // plane_upper.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper);
*/
    var plane_bottom_fulldepthpath = new THREE.Mesh(geometry_p_for3d_fulldepthpath, material_p_for3d_fulldepthpath);
    plane_bottom_fulldepthpath.receiveShadow = true;
    plane_bottom_fulldepthpath.position.set(width_scale/2+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_fulldepthpath.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_fulldepthpath);

    var width_pole = 2;

    var geometry_p_p_fulldepthpath = new THREE.PlaneGeometry(width_scale,width_pole);
    var material_p_p_fulldepthpath = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});

    var plane_upper_pole_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_upper_pole_fulldepthpath.receiveShadow = true;
    plane_upper_pole_fulldepthpath.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole_fulldepthpath.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_fulldepthpath);
    var plane_upper_pole2_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_upper_pole2_fulldepthpath.receiveShadow = true;
    plane_upper_pole2_fulldepthpath.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole2_fulldepthpath.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole2_fulldepthpath);
    var plane_bottom_pole_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_bottom_pole_fulldepthpath.receiveShadow = true;
    plane_bottom_pole_fulldepthpath.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole_fulldepthpath.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole_fulldepthpath);
    var plane_bottom_pole2_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_bottom_pole2_fulldepthpath.receiveShadow = true;
    plane_bottom_pole2_fulldepthpath.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole2_fulldepthpath.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole2_fulldepthpath);

    var plane_upper_pole_side_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_upper_pole_side_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side_fulldepthpath.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_fulldepthpath.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side_fulldepthpath);
    var plane_upper_pole_side2_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_upper_pole_side2_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side2_fulldepthpath.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side2_fulldepthpath.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side2_fulldepthpath);
    var plane_bottom_pole_side_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_bottom_pole_side_fulldepthpath.receiveShadow = true;
    plane_bottom_pole_side_fulldepthpath.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
    plane_bottom_pole_side_fulldepthpath.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole_side_fulldepthpath);
    var plane_bottom_pole_side2_fulldepthpath = new THREE.Mesh(geometry_p_p_fulldepthpath, material_p_p_fulldepthpath);
    plane_bottom_pole_side2_fulldepthpath.receiveShadow = true;
    plane_bottom_pole_side2_fulldepthpath.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
    plane_bottom_pole_side2_fulldepthpath.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole_side2_fulldepthpath);



    var geometry_p_p_d_for3d_fulldepthpath = new THREE.PlaneGeometry(depth_scale,width_pole);
    var material_p_p_d_for3d_fulldepthpath = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});

    var plane_upper_pole_side_d_fulldepthpath = new THREE.Mesh(geometry_p_p_d_for3d_fulldepthpath, material_p_p_d_for3d_fulldepthpath);
    plane_upper_pole_side_d_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side_d_fulldepthpath.position.set(0+x_ren_cen,0+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d_fulldepthpath.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side_d_fulldepthpath);
   var plane_upper_pole_side_d2_fulldepthpath = new THREE.Mesh(geometry_p_p_d_for3d_fulldepthpath, material_p_p_d_for3d_fulldepthpath);
    plane_upper_pole_side_d2_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side_d2_fulldepthpath.position.set(width_scale+x_ren_cen,0+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d2_fulldepthpath.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side_d2_fulldepthpath);
    var plane_upper_pole_side_d3_fulldepthpath = new THREE.Mesh(geometry_p_p_d_for3d_fulldepthpath, material_p_p_d_for3d_fulldepthpath);
    plane_upper_pole_side_d3_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side_d3_fulldepthpath.position.set(0+x_ren_cen,height_scale+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d3_fulldepthpath.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side_d3_fulldepthpath);
    var plane_upper_pole_side_d4_fulldepthpath = new THREE.Mesh(geometry_p_p_d_for3d_fulldepthpath, material_p_p_d_for3d_fulldepthpath);
    plane_upper_pole_side_d4_fulldepthpath.receiveShadow = true;
    plane_upper_pole_side_d4_fulldepthpath.position.set(width_scale+x_ren_cen,height_scale+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d4_fulldepthpath.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_upper_pole_side_d4_fulldepthpath);


    /*

    var plane_bottom_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side.receiveShadow = true;
    plane_bottom_pole_side.position.set(width_scale/2,height_scale/1,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole_side.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole_side);
    var plane_bottom_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side2.receiveShadow = true;
    plane_bottom_pole_side2.position.set(width_scale/2,0,depth_scale);//rotate scale width_scale height_scale
   // plane_bottom_pole_side2.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fulldepthpath.add(plane_bottom_pole_side2);

*/



function r (n){
    return Math.floor(Math.random()* (n + 1));
}

////////////////////////////////////////////////////////////////////////
 var points_pathline_for3dtube_fulldepthpath, geometry_for3dtube_fulldepthpath, material_for3dtube_fulldepthpath, i, mesh_for3d_pathlinetube_fulldepthpath = [],count_mesh_for3d_pathlinetube_fulldepthpath=0 ,mesh_for3dss, mesh_for3d22_fulldepthpath, path_fulldepthpath, size, jabara, danmen, futa;
//drawObject_fulldepthpath();


function draw_pathlinefor3dtube_fulldepthpath(temp_xyin2,i_p,i_d2){
//console.log("draw_pathlinefor3dtube_fulldepthpath")

//console.log(temp_xyin2)
points_pathline_for3dtube_fulldepthpath = [];
mesh_for3d_pathlinetube_fulldepthpath.push([]);

for (i_p_devday = 0; i_p_devday < temp_xyin2.length; i_p_devday++){
 // console.log("gg" + xScale_3d(temp_xyin2[i_p_devday][0]))
  //  console.log("gg" + zScale_3d(temp_xyin2[i_p_devday][2]))
 // console.log(xScale_3d(temp_xyin2[i_p_devday][0] + " Dd " + yScale_3d(temp_xyin2[i_p_devday][1]) + " fde " + zScale_3d(temp_xyin2[i_p_devday][2])+z_ren_cen))
 points_pathline_for3dtube_fulldepthpath.push(new THREE.Vector3(xScale_3d(temp_xyin2[i_p_devday][0])+x_ren_cen, yScale_3d(temp_xyin2[i_p_devday][1])+y_ren_cen, zScale_3d(temp_xyin2[i_p_devday][2])+z_ren_cen)); 
    size = get_strokewidth_pathline(i_p_devday,temp_xyin2[i_p_devday][3],temp_xyin2[i_p_devday][4],temp_xyin2[i_p_devday][5]);
}

    path_fulldepthpath = new THREE.SplineCurve3(points_pathline_for3dtube_fulldepthpath);

    jabara = points_pathline_for3dtube_fulldepthpath.length * 10;  //チューブの滑らかさ
    danmen = 8;  //筒の断面の滑らかさ
    futa = false;
    debug = false;
    mesh_for3d_pathlinetube_fulldepthpath[count_mesh_for3d_pathlinetube_fulldepthpath] = new THREE.Mesh(
        new THREE.TubeGeometry(path_fulldepthpath, jabara, size, danmen, futa),
        new THREE.MeshBasicMaterial( { color: get_strokecolor_pathline(0,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]), wireframe:true } )//get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) ;}),    get_strokecolor_pathline (i,cpue,S,T,updown,z){
    );
    scene_for3d_fulldepthpath_fulldepthpath.add(mesh_for3d_pathlinetube_fulldepthpath[count_mesh_for3d_pathlinetube_fulldepthpath]);
    count_mesh_for3d_pathlinetube_fulldepthpath = count_mesh_for3d_pathlinetube_fulldepthpath + 1;
}

function remove_pathlinefor3dtube_fulldepthpath (){
//console.log("remove_pathlinefor3dtube_fulldepthpath")
  for (i_p = 0; i_p < mesh_for3d_pathlinetube_fulldepthpath.length; i_p++){
    scene_for3d_fulldepthpath.remove( mesh_for3d_pathlinetube_fulldepthpath[i_p] );
  }
count_mesh_for3d_pathlinetube_fulldepthpath = 0;
}

var temp_sphere_gloval_fulldepthpath = [];////  gloval

function draw_pathlinefor3d_sphere_fulldepthpath (xyin_fishingpoints){  
        //      var geometry_s_p_for3d = new THREE.SphereGeometry(get_R_S_pathline(i_d,i_d2,i));
        remove_pathlinefor3d_sphere_fulldepthpath ()
//console.log("draw_pathlinefor3d_sphere_fulldepthpath")
//console.log(xyin_fishingpoints)
                    temp_sphere_gloval_fulldepthpath = [];
  
               for (i_p = 0; i_p < xyin_fishingpoints.length; i_p++){
               var geometry_s_p_for3d = new THREE.SphereGeometry(get_R_2d_pathline_first (i_p,xyin_fishingpoints[i_p][3],xyin_fishingpoints[i_p][4],xyin_fishingpoints[i_p][5],xyin_fishingpoints[i_p][6],xyin_fishingpoints[i_p][7]));              
              var material_s_p_for3d = new THREE.MeshLambertMaterial({
                color: get_pathline_circle_color (i_p,xyin_fishingpoints[i_p][3],xyin_fishingpoints[i_p][4],xyin_fishingpoints[i_p][5],xyin_fishingpoints[i_p][6],xyin_fishingpoints[i_p][7]),//get_color_target (i_d,i_d2,i)
                transparent: false,
               // opacity:  0.5  //get_opecity_target(i_d,i_d2,i)
              });
 
            temp_sphere_gloval_fulldepthpath.push([]);
            temp_sphere_gloval_fulldepthpath[i_p] = new THREE.Mesh(geometry_s_p_for3d, material_s_p_for3d);
            temp_sphere_gloval_fulldepthpath[i_p].castShadow = true;
            temp_sphere_gloval_fulldepthpath[i_p].position.set(xScale_3d(xyin_fishingpoints[i_p][0])+x_ren_cen,yScale_3d(xyin_fishingpoints[i_p][1])+y_ren_cen,zScale_3d(xyin_fishingpoints[i_p][2])+z_ren_cen);
            scene_for3d_fulldepthpath.add(temp_sphere_gloval_fulldepthpath[i_p]);


           //   points[i_p].S_pathlines[i_d][i_d2][i] = new THREE.Mesh(geometry_s_p_for3d, material_s_p_for3d);
           //   points[i_p].S_pathlines[i_d][i_d2][i].castShadow = true;
             // points[i_p].S_pathlines[i_d][i_d2][i].position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0])+x_ren_cen,yScale_3d(points[i_p].xyz[i_d][i_d2][i][1])+y_ren_cen,zScale_3d(points[i_p].xyz[i_d][i_d2][i][2])+z_ren_cen);//rotate scale
             // scene_for3d_fulldepthpath.add(points[i_p].S_pathlines[i_d][i_d2][i]);
            }
}

function remove_pathlinefor3d_sphere_fulldepthpath (){  
         for (i_p = 0; i_p < temp_sphere_gloval_fulldepthpath.length; i_p++){
              scene_for3d_fulldepthpath.remove(temp_sphere_gloval_fulldepthpath[i_p]);
            }
}











function drawObject_fulldepthpath(){
   
    points_pathline_for3dtube_fulldepthpath = [    new THREE.Vector3(    50,     50,    0),
                new THREE.Vector3(   50,   50,   100),
                new THREE.Vector3(   100,   50,   100),
                new THREE.Vector3(    xScale_3d(135)+x_ren_cen,  yScale_3d(40)+y_ren_cen,     zScale_3d(100)+z_ren_cen),
              //  new THREE.Vector3(    xScale_3d(135)+x_ren_cen,  yScale_3d(40)+y_ren_cen,  zScale_3d(10)+z_ren_cen),
              //  new THREE.Vector3(   xScale_3d(140)+x_ren_cen,  yScale_3d(40)+y_ren_cen,  zScale_3d(10)+z_ren_cen),
               // new THREE.Vector3(   xScale_3d(140)+x_ren_cen,    yScale_3d(35)+y_ren_cen,  zScale_3d(10)+z_ren_cen),
              //  new THREE.Vector3(    xScale_3d(135)+x_ren_cen,    yScale_3d(35)+y_ren_cen,  zScale_3d(10)+z_ren_cen)  
                ];
 
    //キューブ
    geometry_for3dtube_fulldepthpath = new THREE.BoxGeometry(100, 100, 100);
    material_for3dtube_fulldepthpath = new THREE.MeshLambertMaterial({ color: 0x0000ff, transparent:true, blending:THREE.NormalBlending, opacity:0.5 });
    mesh_for3d = new THREE.Mesh(geometry_for3dtube_fulldepthpath,material_for3dtube_fulldepthpath);
    mesh_for3d.position.set(100, 100,100);
    scene_for3d_fulldepthpath.add(mesh_for3d);
 
    //ぐねぐね
    path = new THREE.SplineCurve3(points_pathline_for3dtube_fulldepthpath);
    size = 1;
    jabara = points_pathline_for3dtube_fulldepthpath.length * 10;  //チューブの滑らかさ
    danmen = 8;  //筒の断面の滑らかさ
    futa = false;
    debug = false;
    mesh_for3d = new THREE.Mesh(
        new THREE.TubeGeometry(path, jabara, size, danmen, futa),
        new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } )
    );
    scene_for3d_fulldepthpath.add(mesh_for3d);
 
    //まっすぐ
    points_pathline_for3dtube_fulldepthpath = [    new THREE.Vector3(    100,   100,     0),
                new THREE.Vector3(      100,   100,     10)    
                ];
    path = new THREE.SplineCurve3(points_pathline_for3dtube_fulldepthpath);
    size = 3;
    jabara = points_pathline_for3dtube_fulldepthpath.length * 10;  //チューブの滑らかさ
    danmen = 8;  //筒の断面の滑らかさ
    futa = false;
    debug = false;
    mesh_for3d22_fulldepthpath = new THREE.Mesh(
        new THREE.TubeGeometry(path, jabara, size, danmen, futa),
        new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true } )
    );

    points_pathline_for3dtube_fulldepthpath = [    new THREE.Vector3(    200,   200,     0),
                new THREE.Vector3(      200,   200,     50)    
                ];
    path = new THREE.SplineCurve3(points_pathline_for3dtube_fulldepthpath);
    size = 3;
    jabara = points_pathline_for3dtube_fulldepthpath.length * 10;  //チューブの滑らかさ
    danmen = 8;  //筒の断面の滑らかさ
    futa = false;
    debug = false;
    mesh_for3d22_fulldepthpath = new THREE.Mesh(
        new THREE.TubeGeometry(path, jabara, size, danmen, futa),
        new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true } )
    );



    scene_for3d_fulldepthpath.add(mesh_for3d22_fulldepthpath);

}





//ss ();

function ss (){
//console.log("gfde")
scene_for3d_fulldepthpath.remove( mesh_for3d22_fulldepthpath );
}

/*


var projector = new THREE.Projector();
//マウスのグローバル変数
var mouse = { x: 0, y: 0 };  
//オブジェクト格納グローバル変数
var targetList = [];         

//マウスが押された時
 window.onmousedown = function (ev){
    if (ev.target == renderer.domElement) { 
    
        //マウス座標2D変換
        var rect = ev.target.getBoundingClientRect();    
        mouse.x =  ev.clientX - rect.left;
        mouse.y =  ev.clientY - rect.top;
        
        //マウス座標3D変換 width（横）やheight（縦）は画面サイズ
        mouse.x =  (mouse.x / width) * 2 - 1;           
        mouse.y = -(mouse.y / height) * 2 + 1;
        
        // マウスベクトル
        var vector = new THREE.Vector3( mouse.x, mouse.y ,1);

       // vector はスクリーン座標系なので, オブジェクトの座標系に変換
        projector.unprojectVector( vector, camera_for3d_fulldepthpath );

        // 始点, 向きベクトルを渡してレイを作成
        var ray = new THREE.Raycaster( camera_for3d_fulldepthpath.position, vector.sub( camera_for3d_fulldepthpath.position ).normalize() );
        
         // クリック判定
        var obj = ray.intersectObjects( targetList );
        
         // クリックしていたら、alertを表示  
        if ( obj.length > 0 ){                       
          console.log("fdvsa")
          alert("click!!")
          
       } 
 
    }
   };



//「立方体」の生成
 var cube = new THREE.Mesh(
     //立方体の大きさ(300,300,300)                                           
     new THREE.CubeGeometry(100,100,100),                          
     new THREE.MeshPhongMaterial({                                      
               color: 0x990000 //球の色
      }));
        
 //sceneにcubeを追加
      scene_for3d_fulldepthpath.add(cube);       
    cube.position.set(100, 100,100);
//targetListにcubeを入れる
      targetList.push(cube);




window.addEventListener("mousemove", onmousemove, false);
*/

/*
 * マウス移動
 */
var onmousemove = function(e) {
    var rect = e.target.getBoundingClientRect();
    // マウス位置(2D)
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    
    // マウス位置(3D)
    mouseX = (mouseX/SCREEN_WIDTH) *2 - 1;
    mouseY =-(mouseY/SCREEN_HEIGHT)*2 + 1;
    
    // マウスベクトル
    var pos = new THREE.Vector3(mouseX, mouseY, 1);
    // pos はスクリーン座標系なので, オブジェクトの座標系に変換
    projector.unprojectVector(pos, camera_for3d_fulldepthpath);
    
    // 始点, 向きベクトルを渡してレイを作成
    var ray = new THREE.Raycaster(camera_for3d_fulldepthpath.position, pos.subSelf(camera_for3d_fulldepthpath.position).normalize());
    // 交差判定
    var obj = ray.intersectObjects([mesh]);
    
    material.color.setRGB(1, 1, 1);
    if (obj.length > 0) {
        // 交差していたら色を変更する
        material.color.setRGB(1, 0, 0);
    }
};






































     //light
    var light_for3d = new THREE.DirectionalLight(0xffffff,1);
    light_for3d.position.set(0,100,30);
    light_for3d.castShadow = true;
    scene_for3d_fulldepthpath.add(light_for3d);
    var ambient = new THREE.AmbientLight(0x550000);
    scene_for3d_fulldepthpath.add(ambient);
       //camera_for3d_fulldepthpath
    var camera_for3d_fulldepthpath = new THREE.PerspectiveCamera(45,width/height, 1,1000);
    // var camera_for3d_fulldepthpath = new THREE.OrthographicCamera( width/-2,width/2,height/2,height/-2,0.1 , 2000 );   //こっちやとスクロルズームできない

  //  camera_for3d_fulldepthpath.position.set(400,300,500);
      camera_for3d_fulldepthpath.position.set(0,0,500);
    camera_for3d_fulldepthpath.lookAt({x:width_scale/2,y:height_scale/2,z:depth_scale/2});
      //  camera_for3d_fulldepthpath.lookAt({x:0, y:0, z:0 }); 
    //camera_for3d_fulldepthpath.lookAt({x:0, y:0, z:0 }); 
    //camera_for3d_fulldepthpath.lookAt(cube.position);

    //helper
   // var axis_for3d = new THREE.AxisHelper(500);
   // axis_for3d.position.set(x_ren_cen,y_ren_cen,z_ren_cen);
   // scene_for3d_fulldepthpath.add(axis_for3d);



     //render
    var renderer_for3d = new THREE.WebGLRenderer();
    renderer_for3d.setSize(width, height);
    renderer_for3d.setClearColor(0xeeeeee, 1);
    renderer_for3d.shadowMapEnabled = true;
    document.getElementById("3d_ocean_fulldepthpathline").appendChild(renderer_for3d.domElement);

       //control
    var controls = new THREE.OrbitControls(camera_for3d_fulldepthpath, renderer_for3d.domElement)

// renderer_for3d.render( scene_for3d_fulldepthpath, camera_for3d_fulldepthpath );
  //   controls.update();


renderLoop_for3d_fulldepthpath()
   function renderLoop_for3d_fulldepthpath () {
    requestAnimationFrame( renderLoop_for3d_fulldepthpath );
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

    renderer_for3d.render( scene_for3d_fulldepthpath, camera_for3d_fulldepthpath );
   controls.update();
  } 
