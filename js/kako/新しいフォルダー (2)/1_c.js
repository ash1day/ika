console.log("1")

n_depth = 10;
n_day = 4;

///position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0]),yScale_3d(points[i_p].xyz[i_d][i_d2][i][1]),zScale_3d(points[i_p].xyz[i_d][i_d2][i][2]));//rotate scale



var minYaxis = 30;
var maxYaxis = 50;
var minXaxis = 130;
var maxXaxis = 150;
var rsize = 1;

var w = 300;
var h = 300;
var padding = 20;

var xScale = d3.scale.linear()
.domain([minXaxis,maxXaxis])
.range([padding,w-padding])
.nice();

var yScale = d3.scale.linear()
.domain([minYaxis,maxYaxis])
.range([padding,h-padding])
.nice();


var svg = d3.select("#myGraph").append("svg").attr({width:w, height:h});
var svg2 = d3.select("#myGraph").append("svg").attr({width:w, height:h});


var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

    svg.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 280)"
    })
    .call(xAxis);

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("right");

    svg.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 0)"
    })
    .call(yAxis);


//xyin = points[i_p].xyz[0][0][i][0]


console.log(points[1].xyz[0][0])
//xyin = points[1].xyz[0][0]

/*
var xyin =   xy_csv[0][0];
console.log(xyin)


*/


//var xyin = points[1].xyz[0][0]


/*
for (i_p = 1; i_p < points.length; i_p++){
    xyin = xyin.concat(points[i_p].xyz[0][0]);
}
*/

//draw_2dpathline(xyin)

/*
  for (i_p = 1; i_p < points.length; i_p++){
    if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
      for (i_d = 0; i_d < det_depth_3d; i_d++){
        for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
            for (i = 0; i < count_day_devide; i++){
*/

/*
function draw_2dpathline(xyin){
console.log(xyin)

svg.selectAll("circle")
.data(xyin)
.enter()
.append("circle")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: 0,
    fill: "rgb(255,0,0)"
})
.transition()
.delay(function(d,i){return i*100})
.duration(50)
.ease("in")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: rsize
});

}


var xyin = [];
xyin = xyin.concat(points[4].xyz[0][0]);
console.log(xyin[0])

*/

/*
var i_p = 0;
var xyin = [];
xyin = xyin.concat(points[i_p].xyz[0][0]);


var p_pathline = [];
var update = [];
var enter = [];
var exit = [];



p_pathline[i_p] = svg.selectAll("circle");
update[i_p] = p_pathline[i_p].data(xyin);
enter[i_p] = update[i_p].enter();
exit[i_p] = update[i_p].exit();

*/
/*

var p_pathline = svg.selectAll("circle");
var update = p_pathline.data(xyin);
var enter = update.enter();
var exit = update.exit();



    outputData(i_p);   // 生成
   // removeData(i_p);   // 削除
  //  updateData(i_p);   // 更新
*/
var i_p = 0;
var update = [];
var enter = [];
var exit = [];

var p = svg.selectAll("circle");


for (i_p = 1; i_p < points.length; i_p++){
    var xyin = [];
    xyin = xyin.concat(points[i_p].xyz[0][0]);
    update[i_p] = p.data(xyin);
    enter[i_p] = update[i_p].enter();
    exit[i_p] = update[i_p].exit();
    updateData(i_p);   // 更新
    outputData(i_p);   // 生成
    removeData(i_p);   // 削除
}


console.log(update[0])
console.log(update[1])







/*



console.log(update[0])
 console.log(enter)
  console.log(exit)


var i_p = 1;

var xyin = [];
xyin = xyin.concat(points[5].xyz[0][0]);
console.log(xyin[0])
   // var p2 = svg.selectAll("circle");
     update[1] = p.data(xyin);
     enter[1] = update[1].enter();
     exit[1] = update[1].exit();
   updateData(i_p);   // 更新
    outputData(i_p);   // 生成
   removeData(i_p);   // 削除


console.log(update[1])
 console.log(enter[1])
  console.log(exit[1])


*/



function outputData(i_p){
    enter[i_p].append("circle")
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: 0,
        fill: function(d,i){return get_color_target_2d (i_p,i);}
    })
    .transition()
    .delay(function(d,i){return i*100})
    .duration(100)
    .ease("in")
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_S_pathline_2d (i_p,i);}
    });
}

    function removeData(i_p){
exit[i_p]
    .transition()
    .duration(300)
    .attr({
    cx: 0,
    cy: 0,
    r: 0
})
    .remove();

    }

    function updateData(i_p){
        update[i_p]
        .attr({
            cx: function(d,i){return xScale(d[0]) - padding;},
            cy: function(d,i){return yScale(d[1]) - padding;},
            r: 0,
            fill: function(d,i){return get_color_target_2d (i_p,i);}
        })
        .transition()
        .delay(function(d,i){return i*100})
        .duration(100)
        .ease("in")
        .attr({
            cx: function(d,i){return xScale(d[0]) - padding;},
            cy: function(d,i){return yScale(d[1]) - padding;},
            r: function(d,i){return get_R_S_pathline_2d (i_p,i);}
});
    }



function get_color_target_2d (i_p, i){
    var r = 0;
    var g = 0;
    var b = 222;  

    if( (i == 0) ) {
        r = 255;
        g = 0;
        b = 0;
            }
    /*
    if( i_d == Number(depth_target) ) {
          g = 255;
            }
    if( i_d2 == Number(devi_day_target) ) {
          b = 255;
            }
    if( (i == 0) && (i_d2 == 0) ) {
      r = 255;
      g = 0;
      b = 0;
            }
            */

    return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
  }


function get_R_S_pathline_2d (i_p, i){
  var R_S_2d = 1.0/2;
  /*
    if( i_d == Number(depth_target) ) {
      if( i_d2 == Number(devi_day_target) ) {
            R_S_2d = 1;
              }
            }*/

    if( (i == 0) ) {
        R_S_2d = 1;
            }

  return R_S_2d ;
}









function day (depth, day){
    console.log("day change")

    xyin = xy_csv[depth][day];
    console.log(xyin)
    //var data = [1,2,3,4];
    //var p =  d3.select("#myGraph").selectAll("circle");
    var p =  svg.selectAll("circle");
    var update = p.data(xyin);
    var enter = update.enter();
    var exit = update.exit();

    outputData();   // 生成
    removeData();   // 削除
    updateData();   // 更新

}

