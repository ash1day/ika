console.log("3d_point3_fulldepthpathline")



 //console.log("vdvd = " + ((Math.pow((2*3.14*(6378.137*1000)),2)/360)*(E_masterY_2dmap_zoom-S_masterY_2dmap_zoom)) /width_zoom * depth_scale )
 //m  6378.137*1000
//////////////////////////////////////////////////ここでZ軸のスケールは毎回決める
  var depth_scale_fullpath = 300; // width_scale*( points[1].z[det_depth_3d][0][0]/((round_earth/360)*(maxXaxis_3d-minXaxis_3d)) )
 //console.log("vdvd = " + ((Math.pow((2*3.14*(6378.137*1000)),2)/360)*(E_masterY_2dmap_zoom-S_masterY_2dmap_zoom)) /width_zoom * depth_scale )
 //m  6378.137*1000
//////////////////////////////////////////////////ここでZ軸のスケールは毎回決める
 minZaxis_3d = scale_z_lev[Number(0)];
  //var maxZaxis_3d = z_csv[det_depth_3d][0][0];
   maxZaxis_3d = scale_z_lev[Number(20)];////ここを動的に帰るべきよ
 //maxZaxis_3d = scale_z_lev[Number(depth_target)+1];////ここを動的に帰るべきよ
 //console.log(minZaxis_3d + "sdfws " + maxZaxis_3d)
 zScale_3d_fullpath = d3.scale.linear()
.domain([maxZaxis_3d,minZaxis_3d])////zも逆にする　minmax
.range([padding_3d,depth_scale_fullpath-padding_3d])
.nice();






 var geometry_p_for3d_fullpath = new THREE.PlaneGeometry(width_scale,height_scale);
    var material_p_for3d_fullpath = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: v_opacity, 
      side: THREE.DoubleSide});

  var plane_bottom = new THREE.Mesh(geometry_p_for3d_fullpath, material_p_for3d_fullpath);
    plane_bottom.receiveShadow = true;
    plane_bottom.position.set(width_scale/2+x_ren_cen,height_scale/2+y_ren_cen,depth_scale_fullpath+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_bottom);

   var width_pole = 2;
  
    var geometry_p_p = new THREE.PlaneGeometry(width_scale,width_pole);
    var material_p_p = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});
    var plane_upper_pole = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole.receiveShadow = true;
    plane_upper_pole.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole);
    var plane_upper_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole2.receiveShadow = true;
    plane_upper_pole2.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole2.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole2);
    var plane_bottom_pole = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole.receiveShadow = true;
    plane_bottom_pole.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,depth_scale_fullpath+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_bottom_pole);
    var plane_bottom_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole2.receiveShadow = true;
    plane_bottom_pole2.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,depth_scale_fullpath+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole2.rotation.x = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_bottom_pole2);
    var plane_upper_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side.receiveShadow = true;
    plane_upper_pole_side.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side);
    var plane_upper_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side2.receiveShadow = true;
    plane_upper_pole_side2.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side2.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side2);
    var plane_bottom_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side.receiveShadow = true;
    plane_bottom_pole_side.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,depth_scale_fullpath+z_ren_cen);//rotate scale width_scale height_scale
    plane_bottom_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_bottom_pole_side);
    var plane_bottom_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side2.receiveShadow = true;
    plane_bottom_pole_side2.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,depth_scale_fullpath+z_ren_cen);//rotate scale width_scale height_scale
    plane_bottom_pole_side2.rotation.z = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_bottom_pole_side2);

    var geometry_p_p_d_for3d = new THREE.PlaneGeometry(depth_scale_fullpath,width_pole);
    var material_p_p_d_for3d = new THREE.MeshLambertMaterial({
      color: "rgb(0,0,111)",
      transparent: true,
      opacity: 0.2, 
      side: THREE.DoubleSide});
    var plane_upper_pole_side_d = new THREE.Mesh(geometry_p_p_d_for3d, material_p_p_d_for3d);
    plane_upper_pole_side_d.receiveShadow = true;
    plane_upper_pole_side_d.position.set(0+x_ren_cen,0+y_ren_cen,depth_scale_fullpath/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side_d);
   var plane_upper_pole_side_d2 = new THREE.Mesh(geometry_p_p_d_for3d, material_p_p_d_for3d);
    plane_upper_pole_side_d2.receiveShadow = true;
    plane_upper_pole_side_d2.position.set(width_scale+x_ren_cen,0+y_ren_cen,depth_scale_fullpath/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d2.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side_d2);
    var plane_upper_pole_side_d3 = new THREE.Mesh(geometry_p_p_d_for3d, material_p_p_d_for3d);
    plane_upper_pole_side_d3.receiveShadow = true;
    plane_upper_pole_side_d3.position.set(0+x_ren_cen,height_scale+y_ren_cen,depth_scale_fullpath/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d3.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side_d3);
    var plane_upper_pole_side_d4 = new THREE.Mesh(geometry_p_p_d_for3d, material_p_p_d_for3d);
    plane_upper_pole_side_d4.receiveShadow = true;
    plane_upper_pole_side_d4.position.set(width_scale+x_ren_cen,height_scale+y_ren_cen,depth_scale_fullpath/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d4.rotation.y = 90 * Math.PI / 180; 
    scene_for3d_fullpath.add(plane_upper_pole_side_d4);


//////////////////////////////////////////////////////////////////////////////////////





var points_pathline_for3dtube_fullpath, geometry_for3dtube, material_for3dtube, i, mesh_for3d_pathlinetube_fullpath = [],count_mesh_for3d_pathlinetube_fullpath=0 , path_fullpath, size_fullpath, jabara_fullpath, danmen_fullpath, futa_fullpath;
//drawObject();


function draw_pathlinefor3dtube_fullpath(temp_xyin2,i_p,i_d2){
//console.log("draw_pathlinefor3dtube_fullpath")

//console.log(temp_xyin2)
points_pathline_for3dtube_fullpath = [];
mesh_for3d_pathlinetube_fullpath.push([]);

for (i_p_devday = 0; i_p_devday < temp_xyin2.length; i_p_devday++){
 // console.log("gg" + xScale_3d(temp_xyin2[i_p_devday][0]))
  //  console.log("gg" + zScale_3d_fullpath(temp_xyin2[i_p_devday][2]))
 // console.log(xScale_3d(temp_xyin2[i_p_devday][0] + " Dd " + yScale_3d(temp_xyin2[i_p_devday][1]) + " fde " + zScale_3d_fullpath(temp_xyin2[i_p_devday][2])+z_ren_cen))
 points_pathline_for3dtube_fullpath.push(new THREE.Vector3(xScale_3d(temp_xyin2[i_p_devday][0])+x_ren_cen, yScale_3d(temp_xyin2[i_p_devday][1])+y_ren_cen, zScale_3d_fullpath(temp_xyin2[i_p_devday][2])+z_ren_cen)); 
    size_fullpath = get_strokewidth_pathline(i_p_devday,temp_xyin2[i_p_devday][3],temp_xyin2[i_p_devday][4],temp_xyin2[i_p_devday][5]);
}

    path_fullpath = new THREE.SplineCurve3(points_pathline_for3dtube_fullpath);

    jabara_fullpath = points_pathline_for3dtube_fullpath.length * 10;  //チューブの滑らかさ
    danmen_fullpath = 8;  //筒の断面の滑らかさ
    futa_fullpath = false;
    debug = false;
    mesh_for3d_pathlinetube_fullpath[count_mesh_for3d_pathlinetube_fullpath] = new THREE.Mesh(
        new THREE.TubeGeometry(path_fullpath, jabara_fullpath, size_fullpath, danmen_fullpath, futa_fullpath),
        new THREE.MeshBasicMaterial( { color: get_strokecolor_pathline(0,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]), wireframe:true } )//get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) ;}),    get_strokecolor_pathline (i,cpue,S,T,updown,z){
    );
    scene_for3d_fullpath.add(mesh_for3d_pathlinetube_fullpath[count_mesh_for3d_pathlinetube_fullpath]);
    count_mesh_for3d_pathlinetube_fullpath = count_mesh_for3d_pathlinetube_fullpath + 1;
}

function remove_pathlinefor3dtube_fullpath (){
//console.log("remove_pathlinefor3dtube_fullpath")
  for (i_p = 0; i_p < mesh_for3d_pathlinetube_fullpath.length; i_p++){
    scene_for3d_fullpath.remove( mesh_for3d_pathlinetube_fullpath[i_p] );
  }
count_mesh_for3d_pathlinetube_fullpath = 0;
}

var temp_sphere_gloval_fullpath = [];////  gloval

function draw_pathlinefor3d_sphere_fullpath (xyin_fishingpoints){  
        //      var geometry_s_p_for3d_fullpath = new THREE.SphereGeometry(get_R_S_pathline(i_d,i_d2,i));
        remove_pathlinefor3d_sphere_fullpath ()
//console.log("draw_pathlinefor3d_sphere_fullpath")
//console.log(xyin_fishingpoints)
                    temp_sphere_gloval_fullpath = [];
  
               for (i_p = 0; i_p < xyin_fishingpoints.length; i_p++){
               var geometry_s_p_for3d_fullpath = new THREE.SphereGeometry(2);     //get_R_2d_pathline_first (i_p,xyin_fishingpoints[i_p][3],xyin_fishingpoints[i_p][4],xyin_fishingpoints[i_p][5],xyin_fishingpoints[i_p][6],xyin_fishingpoints[i_p][7])         
              var material_s_p_for3d_fullpath = new THREE.MeshLambertMaterial({
                color: get_pathline_circle_color (i_p,xyin_fishingpoints[i_p][3],xyin_fishingpoints[i_p][4],xyin_fishingpoints[i_p][5],xyin_fishingpoints[i_p][6],xyin_fishingpoints[i_p][7]),//get_color_target (i_d,i_d2,i)
                transparent: false,
               // opacity:  0.5  //get_opecity_target(i_d,i_d2,i)
              });
 
            temp_sphere_gloval_fullpath.push([]);
            temp_sphere_gloval_fullpath[i_p] = new THREE.Mesh(geometry_s_p_for3d_fullpath, material_s_p_for3d_fullpath);
            temp_sphere_gloval_fullpath[i_p].castShadow = true;
            temp_sphere_gloval_fullpath[i_p].position.set(xScale_3d(xyin_fishingpoints[i_p][0])+x_ren_cen,yScale_3d(xyin_fishingpoints[i_p][1])+y_ren_cen,zScale_3d_fullpath(xyin_fishingpoints[i_p][2])+z_ren_cen);
            scene_for3d_fullpath.add(temp_sphere_gloval_fullpath[i_p]);


           //   points[i_p].S_pathlines[i_d][i_d2][i] = new THREE.Mesh(geometry_s_p_for3d_fullpath, material_s_p_for3d_fullpath);
           //   points[i_p].S_pathlines[i_d][i_d2][i].castShadow = true;
             // points[i_p].S_pathlines[i_d][i_d2][i].position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0])+x_ren_cen,yScale_3d(points[i_p].xyz[i_d][i_d2][i][1])+y_ren_cen,zScale_3d_fullpath(points[i_p].xyz[i_d][i_d2][i][2])+z_ren_cen);//rotate scale
             // scene_for3d_fullpath.add(points[i_p].S_pathlines[i_d][i_d2][i]);
            }
}

function remove_pathlinefor3d_sphere_fullpath (){  
         for (i_p = 0; i_p < temp_sphere_gloval_fullpath.length; i_p++){
              scene_for3d_fullpath.remove(temp_sphere_gloval_fullpath[i_p]);
            }
}








var n_c_point_gloval_fullpath;//1日当たりの漁獲座標の数を把握
var depth_fullpath = 15;
var backday_fullpath = 5;

draw_pathline_fullpath(backday_fullpath)



function remove_3dfullpath (){  
  remove_pathlinefor3dtube_fullpath ()
remove_pathlinefor3d_sphere_fullpath ()
scene_for3d_fullpath.remove( Triangle_zoom_for3d_fullpath );///断面図消す
}



function draw_pathline_fullpath(devi_day_target){/// devi_day_target これが何日遡るか　これを　fullにするかここで選択する
   remove_3dfullpath ()/////


                   var temp_xyin;
                   var temp_xyin2;
                   var xyin = [];
                   var xyin_fishingpoints = [];
                   var temp_xyin_everyoneday;
                   var xyin_everyoneday = [];                   
                   var c_point_fullpath = 0;
                  // console.log("draw_pathline")
      draw_ocean_tri_fullpath()///////断面図
                 //  draw_pathline_daydev_remove();///////////////////////ここにパスライン消す用のおく
                   remove_pathlinefor3dtube_fullpath ();
                        for (i_p = 1; i_p < points.length; i_p++){
                            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画                        
                                  xyin.push([]);

                                for (i_d3 = 0; i_d3 < depth_fullpath; i_d3++){/////一つの漁獲店につき　depthとbackday全部やってから次行く
                             //     console.log(i_d3 + "  i_d3")
                                  for (i_d2 = 0; i_d2 < devi_day_target; i_d2++){                                                                                           
                                  //  xyin[c_point_fullpath].push(points[i_p].xyz[i_d3][i_d2]);
                                  if (i_d2 == 0) {///1点しかない初日用
                                    temp_xyin2 = [];  
                                    temp_xyin2 = temp_xyin2.concat(points[i_p].xyz[i_d3][i_d2]);   
                                    temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[i_d3][i_d2],points[i_p].T[i_d3][i_d2]);
                                    xyin[c_point_fullpath] = xyin[c_point_fullpath].concat(temp_xyin2);  
                                    }
                                  else if (i_d2 > 0) {///
                                  //  console.log("dd")
                                    temp_xyin2 = [];  
                                    temp_xyin2 = temp_xyin2.concat(points[i_p].xyz[i_d3][i_d2]);   
                                  //  temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[i_d3][i_d2-1]);//最初のは前の日やカラ
                                   // temp_xyin2[n_devi_day-1] = temp_xyin2[n_devi_day-1].concat(points[i_p].cpue,points[i_p].S[i_d3][i_d2]);// さいごのがta-rgetdayやから      
                                    temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[i_d3][i_d2],points[i_p].T[i_d3][i_d2],(temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]),temp_xyin2[n_devi_day-1][2]);//最初でしか色付けられないからここに色付ける要素いれる
                                    xyin[c_point_fullpath] = xyin[c_point_fullpath].concat(temp_xyin2);  
                                   // draw_pathline_daydev(temp_xyin2);////これ流跡線   テｍｐ　の方でやってる
                                    draw_pathlinefor3dtube_fullpath(temp_xyin2,i_p,i_d2);/////////////ここで書いている
                                   // console.log((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]))
                                  //  if ( Math.abs((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2])) > Math.abs(max_updown)) {
                                  //      console.log("高低差上げしい！！！")
                                  //      console.log((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]))
                                   // };

                                    temp_xyin_everyoneday = [];  
                                    temp_xyin_everyoneday = temp_xyin_everyoneday.concat(points[i_p].xyz[i_d3][i_d2][n_devi_day-1],points[i_p].cpue,points[i_p].S[i_d3][i_d2],points[i_p].T[i_d3][i_d2],(points[i_p].xyz[i_d3][i_d2][n_devi_day-1][2] - points[i_p].xyz[i_d3][i_d2][0][2]),points[i_p].xyz[i_d3][i_d2][n_devi_day-1][2]);                              
                                    xyin_everyoneday = xyin_everyoneday.concat([temp_xyin_everyoneday]);  //●書くときは全部並べて格納
 //console.log(xyin_everyoneday);
                                    }

                                   if (i_d2 == 0) {///circleで漁獲店書くためのもの
                                    temp_xyin = [];  
                                    temp_xyin = temp_xyin.concat(points[i_p].xyz[i_d3][i_d2]);   
                                    temp_xyin[0] = temp_xyin[0].concat(points[i_p].cpue,points[i_p].S[i_d3][i_d2],points[i_p].T[i_d3][i_d2]);   
                                    xyin_fishingpoints = xyin_fishingpoints.concat(temp_xyin);   
                                   };                                  
                                  }   
                                }


                                c_point_fullpath = c_point_fullpath + 1;//漁獲店用
                                }
                            }


                            n_c_point_gloval_fullpath = c_point_fullpath;
                 //           fishingpointscpue_gloval = xyin_fishingpoints;
             //           xyin_fishingpoints = xyin_fishingpoints.concat(xyin_everyoneday);   //////ここで連結してるから　xyin_fishingpoints　これを使えばいい                           
                      // console.log(xyin_fishingpoints)

                            fishingpointscpue_gloval = xyin_fishingpoints;
                     //   console.log(xyin_everyoneday)
                                //                console.log(xyin[0])
                        xyin_fishingpoints = xyin_fishingpoints.concat(xyin_everyoneday);   //////ここで連結してるから　xyin_fishingpoints　これを使えばいい                           
                      // console.log(xyin_fishingpoints)
                       draw_pathlinefor3d_sphere_fullpath (xyin_fishingpoints)////for3d




}








///////////////////////////////////////////////////////////////////////////







     //light
    var light_for3d_fullpath = new THREE.DirectionalLight(0xffffff,1);
    light_for3d_fullpath.position.set(0,100,30);
    light_for3d_fullpath.castShadow = true;
    scene_for3d_fullpath.add(light_for3d_fullpath);
    var ambient_fullpath = new THREE.AmbientLight(0x550000);
    scene_for3d_fullpath.add(ambient_fullpath);
       //camera_for3d_fullpath
    var camera_for3d_fullpath = new THREE.PerspectiveCamera(45,width/height, 1,1000);
    // var camera_for3d_fullpath = new THREE.OrthographicCamera( width/-2,width/2,height/2,height/-2,0.1 , 2000 );   //こっちやとスクロルズームできない

  //  camera_for3d_fullpath.position.set(400,300,500);
      camera_for3d_fullpath.position.set(0,0,500);
    camera_for3d_fullpath.lookAt({x:width_scale/2,y:height_scale/2,z:depth_scale_fullpath/2});



     //render
    var renderer_for3d_fullpath = new THREE.WebGLRenderer();
    renderer_for3d_fullpath.setSize(render_width_for3d, render_height_for3d);
    renderer_for3d_fullpath.setClearColor(0xeeeeee, 1);
    renderer_for3d_fullpath.shadowMapEnabled = true;
    document.getElementById("draw3d_fullpath").appendChild(renderer_for3d_fullpath.domElement);

       //control
    var controls_fullpath = new THREE.OrbitControls(camera_for3d_fullpath, renderer_for3d_fullpath.domElement)

// renderer_for3d_fullpath.render( scene_for3d_fullpath, camera_for3d_fullpath );
  //   controls_fullpath.update();


renderLoop_for3d_fullpath()
   function renderLoop_for3d_fullpath () {
    requestAnimationFrame( renderLoop_for3d_fullpath );


    renderer_for3d_fullpath.render( scene_for3d_fullpath, camera_for3d_fullpath );
   controls_fullpath.update();
  } 
