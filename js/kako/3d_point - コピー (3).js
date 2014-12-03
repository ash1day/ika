console.log("3d")


var det_depth_3d = 1;/////////////////////
var det_day_3d = 6;



  // ここにあなたのコードを書いていきます
var scene = new THREE.Scene();

  var width  = w;//render
  var height = h;



  var padding_3d = 0;
  var minXaxis_3d = 130;
  var maxXaxis_3d = 150;
  var minYaxis_3d = 30;
  var maxYaxis_3d = 50;
  var minZaxis_3d = 0;
  var maxZaxis_3d = z_csv[det_depth_3d][0][0];
  //var maxZaxis_3d = points[1].z[det_depth_3d][0][0];


 // var width_scale  = 300;//render
 // var height_scale = width_scale*((maxXaxis_3d-minXaxis_3d)/(maxYaxis_3d-minYaxis_3d));;  
  var width_scale  = w;//render
  var height_scale = h;
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
  console.log("draw 3d point")
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
              points[i_p].S_pathlines[i_d][i_d2][i].position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0])+x_ren_cen,yScale_3d(points[i_p].xyz[i_d][i_d2][i][1])+y_ren_cen,zScale_3d(points[i_p].xyz[i_d][i_d2][i][2])+z_ren_cen);//rotate scale
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
    S_pathline[i].position.set(xScale_3d(xy_csv[depth][day][i][0])+x_ren_cen,yScale_3d(xy_csv[depth][day][i][1])+y_ren_cen,zScale_3d(xy_csv[depth][day][i][2])+z_ren_cen);//rotate scale
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
/*
  var geometry = new THREE.CubeGeometry( 30, 30, 30 );
  var material = new THREE.MeshBasicMaterial( { color: "red" } );
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,0,0);
  scene.add( mesh );
*/


//geometry.vertices[0] = new THREE.Vector3(0,0,0);
//geometry.vertices[1] = new THREE.Vector3(10,0,0);
//geometry.vertices[2] = new THREE.Vector3(10,10,0);
//geometry.faces[0] = new THREE.Face3(0,1,2);
//var material =  new THREE.MeshBasicMaterial({ color: 0x0000ff });
//var Triangle =  new THREE.Mesh(geometry,material);
//シーンオブジェクトに追加 
////scene.add(Triangle);   
 // Triangle.position.set(35,-20,0);











/*
var geom = new THREE.Geometry();

var xi = [0, 10, 10];
var yi = [0, 0, 10];
var zi = [0, 0, 0];
var si = [2, 4, 6];

 for (var i = 0; i < 3; i++) {
      geom.vertices.push(new THREE.Vector3(xi[i], yi[i], zi[i]));
    }

geom.faces.push(new THREE.Face3(0, 1, 2));


for (var i = 0; i < 3; i++) {
        color = new THREE.Color(0xffffff);
       // color.setHSL(Math.random()*0.5, 1, 0.5);
        color.setHSL(si[i]/Math.max(si[0],si[1],si[2]), 1, 0.5);        
        geom.colors.push( color );
        }
  */










        jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+"T"+"["+ (i_date_jsdap - 732313) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
         .then(function(data_jsdap_T) {

                jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+"S"+"["+ (i_date_jsdap - 732313) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
                 .then(function(data_jsdap_S) {
                    var xyzvar = [];
                    for (var z_js = start_scale_z_lev; z_js <= end_scale_z_lev; z_js++){
                        for (var y_js = start_scale_y_lat; y_js <= end_scale_y_lat; y_js++){
                            for (var x_js = start_scale_x_lon; x_js <= end_scale_x_lon; x_js++){
                                xyzvar.push( [scale_x_lon[x_js], scale_y_lat[y_js], scale_z_lev[z_js],
                                data_jsdap_S[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon],
                                data_jsdap_T[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon],
                                get_v_dence(scale_z_lev[z_js],data_jsdap_S[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon],data_jsdap_T[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon])] );//x,y,z,var
                            }//get_v_dence(z[m],salinity,tempereture)
                        }
                    }  
                    console.log(xyzvar)


var xi = [-10, 10, 10, -10, -10, 10, 10, -10];
var yi = [-10, -10, 10, 10, -10, -10, 10, 10];
var zi = [0, 0, 0, 0, 10, 10, 10, 10];
var si = [2, 4, 6, 8, 1, 3, 4, 7];

//////////////6面の中点6点の座標
var x1234canter = (xi[0]+xi[1])/2;
var y1234canter = (yi[0]+yi[3])/2;
var z1234canter = zi[0];
var s1234canter = (si[0]+si[1]+si[2]+si[3])/4;

var x4567canter = (xi[0]+xi[1])/2;
var y4567canter = (yi[0]+yi[3])/2;
var z4567canter = zi[4];//@
var s4567canter = (si[4]+si[5]+si[6]+si[7])/4;

var x3=[];
var y3=[];
var z3=[];
var s3=[];
var geom1234 = new THREE.Geometry();
var smax = Math.max(si[0],si[1],si[2],si[3]);
var count = 0;////4つかどのうち２つのローテーション用
var cnt = 0;////faceの3つの値決めるよう

 for (var i = count; i < count + 1; i++) {///３つの頂点に平面と中点の3点をわりあてる　中点＋4点のうち２つを　ローテーションで回す
       x3 = [x1234canter, xi[i], xi[i+1]];
       y3 = [y1234canter, yi[i], yi[i+1]];
       z3 = [z1234canter, zi[i], zi[i+1]];
       s3 = [s1234canter, si[i], si[i+1]];
    }
console.log(x3[2]);//チェック用
 count++;
// for (var i = 0; i < 3; i++) {/////頂点３つをけってい作る
      geom1234.vertices.push(new THREE.Vector3(x3[0], y3[0], z3[0]));
      geom1234.vertices.push(new THREE.Vector3(x3[1], y3[1], z3[1]));
      geom1234.vertices.push(new THREE.Vector3(x3[2], y3[2], z3[2]));
  //  }
var vNum = 3 * cnt;
/////頂点３つをけってい作る
    //geom1234.faces.push(new THREE.Face3(0, 1, 2));
    geom1234.faces.push(new THREE.Face3(vNum, vNum + 1, vNum + 2));
console.log(vNum);//チェック用
  i_c = [0.33,0.1,0.66];
  // cnt++;

for (var i = 0; i < 3; i++) {
        color = new THREE.Color(0xffffff);
        color.setHSL(i_c[i], 1, 0.5);        
        geom1234.faces[0].vertexColors.push( color );
        }

//////メッシュかぶせるよう

var trimaterialMesh3 = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
var tri1Mesh3 =  new THREE.Mesh(geom1234,trimaterialMesh3);
  scene.add(tri1Mesh3);
  tri1Mesh3.position.set(0,0,0);


 geom1234 = new THREE.Geometry();
var smax = Math.max(si[0],si[1],si[2],si[3]);
var count = 0;////4つかどのうち２つのローテーション用
var cnt = 0;////faceの3つの値決めるよう

 for (var i = count; i < count + 1; i++) {///３つの頂点に平面と中点の3点をわりあてる　中点＋4点のうち２つを　ローテーションで回す
       x3 = [x1234canter, xi[i], xi[i+1]];
       y3 = [y1234canter, yi[i], yi[i+1]];
       z3 = [z1234canter, zi[i], zi[i+1]];
       s3 = [s1234canter, si[i], si[i+1]];
    }
console.log(x3[2]);//チェック用
 count++;
// for (var i = 0; i < 3; i++) {/////頂点３つをけってい作る
      geom1234.vertices.push(new THREE.Vector3(x3[0], y3[0], z3[0]));
      geom1234.vertices.push(new THREE.Vector3(x3[1], y3[1], z3[1]));
      geom1234.vertices.push(new THREE.Vector3(x3[2], y3[2], z3[2]));
  //  }
var vNum = 3 * cnt;
/////頂点３つをけってい作る
    //geom1234.faces.push(new THREE.Face3(0, 1, 2));
    geom1234.faces.push(new THREE.Face3(vNum, vNum + 1, vNum + 2));
console.log(vNum);//チェック用
  i_c = [0.33,0.33,0.33];
  // cnt++;

for (var i = 0; i < 3; i++) {
        color = new THREE.Color(0xffffff);
        color.setHSL(i_c[i], 1, 0.5);        
        geom1234.faces[0].vertexColors.push( color );
        }

//////メッシュかぶせるよう

 trimaterialMesh3 = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
 tri1Mesh3 =  new THREE.Mesh(geom1234,trimaterialMesh3);
  scene.add(tri1Mesh3);
  tri1Mesh3.position.set(50,0,0);




var Xposition_ocean = -width_scale/2;
var Yposition_ocean = -height_scale/2;

var geometry;//////////////////////////////////////////////////////////
    //  geometry.vertices.push(new THREE.Vector3(0,0,0));
   //   geometry.vertices.push(new THREE.Vector3(0,10,0));
   //   geometry.vertices.push(new THREE.Vector3(10,10,0));
   var i_1 = 0;
   var i_2 = 0;
var trimaterial3Mesh;
var Triangle;

for (var i_2 = 0; i_2 < 30; i_2++) {
for (var i_1 = 0; i_1 < num_totalindex_width; i_1++) { //num_totalindex_width

 geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+(num_totalindex_width*i_2)][0]), yScale(xyzvar[i_1+(num_totalindex_width*i_2)][1]), 0));
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+1+(num_totalindex_width*i_2)][0]), yScale(xyzvar[i_1+1+(num_totalindex_width*i_2)][1]), 0));
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][0]),yScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][1]), 0));


    geometry.faces.push(new THREE.Face3(0, 1, 2));
  for (var i = 0; i < 3; i++) {
        color = new THREE.Color(0xffffff);
        color.setHSL(0.2*i, 1, 0.5);        
        geometry.faces[0].vertexColors.push( color );
        }

 trimaterial3Mesh = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
 Triangle =  new THREE.Mesh(geometry,trimaterial3Mesh);
  scene.add(Triangle);
  Triangle.position.set(Xposition_ocean,Yposition_ocean,0);
 // Triangle.position.set(xScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][0])-0,yScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][1])-1000,0);


 geometry = new THREE.Geometry();

    //  geometry.vertices.push(new THREE.Vector3(0,0,0));
     // geometry.vertices.push(new THREE.Vector3(10,0,0));
    //  geometry.vertices.push(new THREE.Vector3(10,10,0));
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][0]), yScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][1]), 0));
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][0]), yScale(xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][1]), 0));
      geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+(num_totalindex_width*i_2)][0]), yScale(xyzvar[i_1+(num_totalindex_width*i_2)][1]), 0));
//console.log("xsssss")
//console.log(xScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][0]))
//console.log(xScale(xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][0]))

    geometry.faces.push(new THREE.Face3(0, 1, 2));
  for (var i = 0; i < 3; i++) {
        color = new THREE.Color(0xffffff);
        color.setHSL(0.6, 1, 0.5);        
        geometry.faces[0].vertexColors.push( "red" );
        }

 trimaterial3Mesh = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
 Triangle =  new THREE.Mesh(geometry,trimaterial3Mesh);
  scene.add(Triangle);
  //Triangle.position.set(35,-20,0);
//////////////////////////////////////////////////////////////
  Triangle.position.set(Xposition_ocean,Yposition_ocean,0);
 // Triangle.position.set(xScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][0])-0,yScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][1])-1000,0);
//console.log("xScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][0])")
//console.log(xScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][0]))
//console.log(yScale(xyzvar[0+i_1+(num_totalindex_width*i_2)][1]))






}
}




  //Triangle.position.set(xScale(xyzvar[num_totalindex_width+1+i_1+(num_totalindex_width*i_2)][0])-0,yScale(xyzvar[num_totalindex_width+1+i_1+(num_totalindex_width*i_2)][1])-950,0);






console.log(xScale(xyzvar[0][0]))
console.log(yScale(xyzvar[0][1]))
//console.log(xyzvar[0][1])
//console.log(xyzvar[num_totalindex_width][0])
//console.log(xyzvar[num_totalindex_width][1])
console.log(num_totalindex_width)
//console.log(num_totalindex_height)





                    });
            });



    var plane_bottom = new THREE.Mesh(geometry_p, material_p);
    plane_bottom.receiveShadow = true;
    plane_bottom.position.set(width_scale/2+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
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
    plane_upper_pole.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole);
    var plane_upper_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole2.receiveShadow = true;
    plane_upper_pole2.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
   // plane_upper_pole2.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole2);
    var plane_bottom_pole = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole.receiveShadow = true;
    plane_bottom_pole.position.set(width_scale/2+x_ren_cen,height_scale/1+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole);
    var plane_bottom_pole2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole2.receiveShadow = true;
    plane_bottom_pole2.position.set(width_scale/2+x_ren_cen,0+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
   // plane_bottom_pole2.rotation.x = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole2);

    var plane_upper_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side.receiveShadow = true;
    plane_upper_pole_side.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side);
    var plane_upper_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_upper_pole_side2.receiveShadow = true;
    plane_upper_pole_side2.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,0+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side2.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side2);
    var plane_bottom_pole_side = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side.receiveShadow = true;
    plane_bottom_pole_side.position.set(0+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
    plane_bottom_pole_side.rotation.z = 90 * Math.PI / 180; 
    scene.add(plane_bottom_pole_side);
    var plane_bottom_pole_side2 = new THREE.Mesh(geometry_p_p, material_p_p);
    plane_bottom_pole_side2.receiveShadow = true;
    plane_bottom_pole_side2.position.set(width_scale/1+x_ren_cen,height_scale/2+y_ren_cen,depth_scale+z_ren_cen);//rotate scale width_scale height_scale
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
    plane_upper_pole_side_d.position.set(0+x_ren_cen,0+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d);
   var plane_upper_pole_side_d2 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d2.receiveShadow = true;
    plane_upper_pole_side_d2.position.set(width_scale+x_ren_cen,0+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d2.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d2);
    var plane_upper_pole_side_d3 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d3.receiveShadow = true;
    plane_upper_pole_side_d3.position.set(0+x_ren_cen,height_scale+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
    plane_upper_pole_side_d3.rotation.y = 90 * Math.PI / 180; 
    scene.add(plane_upper_pole_side_d3);
    var plane_upper_pole_side_d4 = new THREE.Mesh(geometry_p_p_d, material_p_p_d);
    plane_upper_pole_side_d4.receiveShadow = true;
    plane_upper_pole_side_d4.position.set(width_scale+x_ren_cen,height_scale+y_ren_cen,depth_scale/2+z_ren_cen);//rotate scale width_scale height_scale
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
   // camera.lookAt({x:width_scale/2,y:height_scale/2,z:depth_scale/2});
    camera.lookAt({x:0, y:0, z:0 }); 
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



