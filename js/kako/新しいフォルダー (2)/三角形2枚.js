


var geometry;
var trimaterial3Mesh;
var Triangle;


//////////////////////////////////////////  1つ目の三角形
geometry = new THREE.Geometry();
  //　　三点の座標決める
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+(num_totalindex_width*i_2)][0]), yScale_reverse(xyzvar[i_1+(num_totalindex_width*i_2)][1]), 0));
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+1+(num_totalindex_width*i_2)][0]), yScale_reverse(xyzvar[i_1+1+(num_totalindex_width*i_2)][1]), 0));
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][0]),yScale_reverse(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][1]), 0));

geometry.faces.push(new THREE.Face3(0, 1, 2));


color = new THREE.Color(0xffffff);    //　　三点の色を決める
color.setHSL(get_color_ocean3d2d (xyzvar[i_1+(num_totalindex_width*i_2)][3],xyzvar[i_1+(num_totalindex_width*i_2)][4],xyzvar[i_1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );
color = new THREE.Color(0xffffff);    
color.setHSL(get_color_ocean3d2d (xyzvar[i_1+1+(num_totalindex_width*i_2)][3],xyzvar[i_1+1+(num_totalindex_width*i_2)][4],xyzvar[i_1+1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );
color = new THREE.Color(0xffffff);    
color.setHSL(get_color_ocean3d2d (xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][3],xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][4],xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );

trimaterial3Mesh = new THREE.MeshBasicMaterial({
                                              vertexColors: THREE.VertexColors,
                                              side: THREE.DoubleSide
                                            });
Triangle =  new THREE.Mesh(geometry,trimaterial3Mesh);
scene.add(Triangle);
Triangle.position.set(Xposition_ocean,Yposition_ocean,0);


//////////////////////////////////////////  2つ目の三角形
geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][0]), yScale_reverse(xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][1]), 0));
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][0]), yScale_reverse(xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][1]), 0));
  geometry.vertices.push(new THREE.Vector3(xScale(xyzvar[i_1+(num_totalindex_width*i_2)][0]), yScale_reverse(xyzvar[i_1+(num_totalindex_width*i_2)][1]), 0));

geometry.faces.push(new THREE.Face3(0, 1, 2));

color = new THREE.Color(0xffffff);    
color.setHSL(get_color_ocean3d2d (xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][3],xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][4],xyzvar[num_totalindex_width+i_1+1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );
color = new THREE.Color(0xffffff);    
color.setHSL(get_color_ocean3d2d (xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][3],xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][4],xyzvar[num_totalindex_width+i_1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );
color = new THREE.Color(0xffffff);    
color.setHSL(get_color_ocean3d2d (xyzvar[i_1+(num_totalindex_width*i_2)][3],xyzvar[i_1+(num_totalindex_width*i_2)][4],xyzvar[i_1+(num_totalindex_width*i_2)][5]), 1, 0.5); 
geometry.faces[0].vertexColors.push( color );

trimaterial3Mesh = new THREE.MeshBasicMaterial({
 vertexColors: THREE.VertexColors,
　side: THREE.DoubleSide
});

Triangle =  new THREE.Mesh(geometry,trimaterial3Mesh);
scene.add(Triangle);

Triangle.position.set(Xposition_ocean,Yposition_ocean,0);




//////////////////////



var geostudy = new THREE.Geometry();
var smax = Math.max(si[0],si[1],si[2],si[3]);
var count = 0;////4つかどのうち２つのローテーション用
var cnt = 0;////faceの3つの値決めるよう

 for (var i = count; i < count + 1; i++) {///３つの頂点に平面と中点の3点をわりあてる　中点＋4点のうち２つを　ローテーションで回す
       x3 = [x1234canter, xi[i], xi[i+1],xi[i+2]];
       y3 = [y1234canter, yi[i], yi[i+1],yi[i+2]];
       z3 = [z1234canter, zi[i], zi[i+1],zi[i+2]];
       s3 = [s1234canter, si[i], si[i+1],si[i+2]];
    }
console.log(x3[2]);//チェック用
 count++;
// for (var i = 0; i < 3; i++) {/////頂点３つをけってい作る
      geostudy.vertices.push(new THREE.Vector3(x3[0], y3[0], z3[0]));
      geostudy.vertices.push(new THREE.Vector3(x3[1], y3[1], z3[1]));
      geostudy.vertices.push(new THREE.Vector3(x3[2], y3[2], z3[2]));
      geostudy.vertices.push(new THREE.Vector3(x3[3], y3[3], z3[3]));

        var color0 = new THREE.Color(0xffffff);
            color0.setHSL(0.2, 1, 0.5);       
        var color1 = new THREE.Color(0xffffff);
            color1.setHSL(0.4, 1, 0.5);  
        var color2 = new THREE.Color(0xffffff);
            color2.setHSL(0.6, 1, 0.5);  
        var color3 = new THREE.Color(0xffffff);
            color3.setHSL(0.8, 1, 0.5);  
            var vertexIndex = 0;
        var face1 = new THREE.Face3(vertexIndex, vertexIndex + 1, vertexIndex + 2);
            face1.vertexColors[0] = color0;
            face1.vertexColors[1] = color1;
            face1.vertexColors[2] = color2;
            geostudy.faces.push(face1);
        var face2 = new THREE.Face3(vertexIndex, vertexIndex + 2, vertexIndex + 3);
            face2.vertexColors[0] = color0;
            face2.vertexColors[1] = color2;
            face2.vertexColors[2] = color3;
            geostudy.faces.push(face2);
            vertexIndex += 4;

var tristudy = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
  side: THREE.DoubleSide
});
var trystudycomp =  new THREE.Mesh(geostudy,tristudy);
  scene.add(trystudycomp);
  trystudycomp.position.set(0,0,0);



          var vertexIndex = 0;
for (var i = 0; i < 2; i++) {/////頂点３つをけってい作る
  //var i = 0;
      geostudy.vertices.push(new THREE.Vector3(xi[(i*4)+0], yi[(i*4)+0], zi[(i*4)+0]));
      geostudy.vertices.push(new THREE.Vector3(xi[(i*4)+1], yi[(i*4)+1], zi[(i*4)+1]));
      geostudy.vertices.push(new THREE.Vector3(xi[(i*4)+2], yi[(i*4)+2], zi[(i*4)+2]));
      geostudy.vertices.push(new THREE.Vector3(xi[(i*4)+3], yi[(i*4)+3], zi[(i*4)+3]));
console.log(xi[(i*4)+0])
        var color0 = new THREE.Color(0xffffff);
            color0.setHSL(0.2, 1, 0.5);       
        var color1 = new THREE.Color(0xffffff);
            color1.setHSL(0.4, 1, 0.5);  
        var color2 = new THREE.Color(0xffffff);
            color2.setHSL(0.6, 1, 0.5);  
        var color3 = new THREE.Color(0xffffff);
            color3.setHSL(0.8, 1, 0.5);  
   
    console.log(vertexIndex)        
        var face1 = new THREE.Face3(vertexIndex, vertexIndex + 1, vertexIndex + 2);
            face1.vertexColors[0] = color0;
            face1.vertexColors[1] = color1;
            face1.vertexColors[2] = color2;
            geostudy.faces.push(face1);
      //  var face2 = new THREE.Face3(vertexIndex, vertexIndex + 2, vertexIndex + 3);
        var face2 = new THREE.Face3(vertexIndex+2, vertexIndex + 3, vertexIndex);
       //     face2.vertexColors[0] = color0;
        //    face2.vertexColors[1] = color2;
        //    face2.vertexColors[2] = color3;
            face2.vertexColors[0] = color2;
            face2.vertexColors[1] = color3;
            face2.vertexColors[2] = color0;

            geostudy.faces.push(face2);
            vertexIndex += 4;

}