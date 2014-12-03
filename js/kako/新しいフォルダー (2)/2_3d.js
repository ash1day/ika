console.log("2_3d")



var x2_3dheat = [];
var y2_3dheat = [];
var value_3dheat = [];

        for (i = 0; i < depth_csv; i++) {//depth
            for (j = 0; j < day_csv; j++) {//depth
                x2_3dheat.push(j);
                y2_3dheat.push(i);
                value_3dheat.push(i+j);
            }
        }

 
var xy2_3dheat = [];
        for (i = 0; i < depth_csv*day_csv; i++) {//depth
            xy2_3dheat.push( [x2_3dheat[i], y2_3dheat[i], value_3dheat[i]] );
        }


//console.log(xy2_3dheat)

//value_3dheat = [6,1,2,3,4,5,6,7,8]
//x2_3dheat = [1,2,3,1,2,3,1,2,3]
//y2 = [1,1,1,2,2,2,3,3,3]
//var xy2_3dheat = [];
 //       for (i = 0; i < 9; i++) {//depth
 //           xy2_3dheat.push( [x2_3dheat[i], y2[i], value_3dheat[i]] );
  //      }
//console.log(xy2_3dheat)


var w2 = 400;
var h2 = 400;
var padding2 = 40;
var width_rect = 20;
var height_rect = 10;



var svg2 = d3.select("#myGraph2_3d").append("svg").attr({width:w2, height:h2});



var xScale2 = d3.scale.linear()
.domain([0,d3.max(x2_3dheat)])
.range([padding2,w2-padding2])
.nice();

var yScale2 = d3.scale.linear()
.domain([0,d3.max(y2_3dheat)])
.range([padding2,h2-padding2])
.nice();

var xAxis2 = d3.svg.axis()
    .scale(xScale2)
    .orient("top");

    svg2.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 20)"
    })
    .call(xAxis2);

var yAxis2 = d3.svg.axis()
    .scale(yScale2)
    .orient("left");

    svg2.append("g")
    .attr({
        class: "axis",
        transform: "translate(20, 0)"
    })
    .call(yAxis2);


var colorScale2 = d3.scale.linear()
.domain([0, d3.max(value_3dheat)])
.range(["#FFF0F5", "#DC143C"]); //カラースケールを作成



svg2.selectAll("rect")
.data(xy2_3dheat)
.enter()
.append("rect")
.on("click", function(d,i) {
    change_heat( d[0],d[1] )
   // day( i%3 )
    ;})
.on("mouseover", function(){
    })
.attr({
    x: function(d,i){return xScale2(d[0]) - padding2/4;},
    y: function(d,i){return yScale2(d[1]) - padding2/4;},
    width: width_rect,
    height: height_rect,
    fill: function(d,i){return colorScale2(d[2]);}
});






var svg2t = d3.select("#myGraph2_3d").append("svg").attr({width:w2, height:h2});

svg2t.selectAll("text")
   .data(xy2_3dheat)
   .enter()
   .append("text")
   .text(function(d,i) {
       return d[2];
   })
   .attr("x", function(d,i){return xScale2(d[0]) - padding2/4;})
   .attr("y", function(d,i){return yScale2(d[1]) - padding2/4;})
   .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", function(d,i){return colorScale2(d[2]);});



function change_heat (i_backday,i_depth){
    devi_day_target = String( i_backday );//date change
    depth_target = String( i_depth );//date change
 //   console.log(devi_day_target);
  //   console.log(depth_target);
     write1 ()
    remove_delete_allpoints()
    draw_allpoints()


}


function a_day (a_day){
    devi_day_target = String( Number(devi_day_target) - a_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }
function b_day (b_day){
    devi_day_target = String( Number(devi_day_target) + b_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }

function depth_p (depth_p){
    depth_target = String( Number(depth_target) + depth_p);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }

function depth_m (depth_m){
    depth_target = String( Number(depth_target) - depth_m);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }





/*

createsvg();

function createsvg () {
  var svg = d3.select("#myGraph2_3d").append("svg")
      .attr({
        width: 640,
        height: 480,
      });

  var c1 = [100, 90, 30];
  var c2 = [200, 120, 20];
  // 3つ目を追加
  var c3 = [300, 100, 20];
  var carray = [c1, c2,c3];

  var marker = svg.append("defs").append("marker")
      .attr({
        'id': "arrowhead",
        'refX': 0,
        'refY': 2,
        'markerWidth': 4,
        'markerHeight': 4,
        'orient': "auto"
      });

      marker.append("path")
      .attr({
        d: "M 0,0 V 4 L4,2 Z",
        fill: "steelblue"
      });
  // line関数を定義 (x,y)は配列の[0],[1]とする。
  var line = d3.svg.line()
  .interpolate('basis')
      .x(function(d) {return d[0];})
      .y(function(d) {return d[1];});

  // path要素を作成
  var path = svg.append('path')
        .attr({
        'd': line(carray),
        'stroke': 'lightgreen',
        'stroke-width': 3,
        'fill': 'none',
         'marker-end':"url(#arrowhead)",
      });
};





createsvgs();

function createsvgs () {
  var svg = d3.select("#myGraph2_3d").append("svg")
      .attr({
        width: 640,
        height: 480,
      });

  var r1 = 30;
  var r2 = 20;
  var ref1 = 8;
  var c1 = [10, 0, r1];
  var c2 = [200, 120, r2];
  var carray = [c1, c2];

  // 矢印定義
  var marker = svg.append("defs").append("marker")
      .attr({
        'id': "arrowhead",
        'refX': ref1,
        'refY': 2,
        'markerWidth': 4,
        'markerHeight': 4,
        'orient': "auto"
      });
  marker.append("path")
      .attr({
        d: "M 0,0 V 4 L4,2 Z",
        fill: "steelblue"
      });

  // 色定義
  var color = d3.scale.category10();

  // 丸と文字のグループ定義
  var g = svg.selectAll('g')
    .data(carray).enter().append('g')
    .attr({
      transform: function(d) {
    return "translate(" + d[0] + "," + d[1] + ")";
      },
    });

  // 丸定義
 /// g.append('circle')
 //   .attr({
  //    'r': function(d) { return d[2]; },
  //    'fill': function(d,i) { return color(i); },
  //  });

g.append("rect")
.attr({
    width: 50,
    height: 50,
    fill: function(d,i){return color(i);}
});
  // 文字定義
  g.append('text')
    .attr({
      'text-anchor': "middle",
      'dy': ".35em",
      'fill': 'red',
    })
    .text(function(d,i) { return i+1; });

  // 線関数定義
  var line = d3.svg.line()
      .interpolate('basis')
      .x(function(d) {return d[0];})
      .y(function(d) {return d[1];});

  // 線要素定義
  var path = svg.append('path')
      .attr({
        'd': line(carray),
        'stroke': 'lightgreen',
        'stroke-width': 5,
        'fill': 'none',
        'marker-end':"url(#arrowhead)",
      });
  var totalLength = path.node().getTotalLength();
  var t = totalLength - (r1+r2+ref1);
  path.attr({
    // 破線の指定を行います。
    'stroke-dasharray': "0 " + r1 + " " + t + " " + r2,
    // 破線の開始相対位置を指定します
    'stroke-dashoffset': 0,
  });

};

//.on("click", function(d) {
 //   var rs = d3.select(this).attr("x")
 //   console.log(rs)
 //   ;})


*/

