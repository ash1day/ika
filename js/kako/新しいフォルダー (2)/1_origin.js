console.log("1")

n_depth = 3;
n_day = 3;



var datax = [11,22,33,40,45];
var datay = [11,22,33,40,60];
var x = [[[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038]],[[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038]],[[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038],[143.32,143.2741599,143.2334576,143.19866,143.1699038]]];
var y = [[[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641]],[[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641]],[[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641],[37.25,37.18156634,37.09960291,37.00837645,36.90944641]]];

var x = [[[1,2,3],[4,5,6],[7,8,9]],[[4,5,6],[7,8,9],[1,2,3]],[[1,2,3],[7,8,9],[4,5,6]] ];//[depth][day]
var y = [[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[7,8,9],[4,5,6]],[[1,2,3],[4,5,6],[7,8,9]] ];


var xy = [];
        for (i = 0; i < n_depth; i++) {//depth
            xy.push( [] );
            for (j = 0; j < n_day; j++) {//day
                xy[i].push( [] );
            }
        }


        for (i = 0; i < n_depth; i++) {//depth
            for (j = 0; j < n_day; j++) {//day
                for (k = 0; k < x[i][j].length; k++) {//day
                xy[i][j].push( [x[i][j][k], y[i][j][k]] );/////代入
                }
            }
        }
         console.log(x[0])
          console.log(x[0][0])
 console.log(xy)
   


var xyin = xy[0][0];
var maxYaxis = 10;
var maxXaxis = 10;
var rsize = 10;

var w = 300;
var h = 300;
var padding = 20;

var xScale = d3.scale.linear()
.domain([0,maxXaxis])
.range([padding,w-padding])
.nice();

var yScale = d3.scale.linear()
.domain([0,maxYaxis])
.range([padding,h-padding])
.nice();


var svg = d3.select("#myGraph").append("svg").attr({width:w, height:h});

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



svg.selectAll("circle")
.data(xyin)
.enter()
.append("circle")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: 0,
    fill: "red"
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













function day (depth, day){
console.log("day change")

xyin = xy[depth][day];
console.log(xyin)


//var data = [1,2,3,4];
//var p =  d3.select("#myGraph").selectAll("circle");
var p =  svg.selectAll("circle");
var update = p.data(xyin);
var enter = update.enter();
var exit = update.exit();


     function outputData(){
        enter.append("circle")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: 0,
    fill: "red"
})
.transition()
.delay(function(d,i){return i*100})
.duration(100)
.ease("in")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: rsize
});
}

    function removeData(){
exit
    .transition()
    .duration(300)
    .attr({
    cx: 0,
    cy: 0,
    r: 0
})
    .remove();

    }

    function updateData(){
        update
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: 0,
    fill: "red"
})
.transition()
.delay(function(d,i){return i*100})
.duration(100)
.ease("in")
.attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
    r: rsize
});
    }


    outputData();   // 生成
    removeData();   // 削除
    updateData();   // 更新






}







