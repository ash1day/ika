console.log("1 2d")


//n_depth = 10;
//n_day = 4;

///position.set(xScale_3d(points[i_p].xyz[i_d][i_d2][i][0]),yScale_3d(points[i_p].xyz[i_d][i_d2][i][1]),zScale_3d(points[i_p].xyz[i_d][i_d2][i][2]));//rotate scale



var minXaxis = S_masterX_2dmap;
var maxXaxis = E_masterX_2dmap;
var minYaxis = S_masterY_2dmap;
var maxYaxis = E_masterY_2dmap;
var rsize = 1;

var w = 500;
var h = w*((maxXaxis-minXaxis)/(maxYaxis-minYaxis));
var padding = 20;

var xScale = d3.scale.linear()
.domain([minXaxis,maxXaxis])
.range([padding,w-padding])
.nice();

var yScale = d3.scale.linear()
.domain([maxYaxis,minYaxis])
.range([padding,h-padding])
.nice();


var svg = d3.select("#myGraph").append("svg").attr({width:w, height:h});
//var svg2 = d3.select("#myGraph").append("svg").attr({width:w, height:h});

var g = svg.append("g")

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");



    svg.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 480)"
    })
    .call(xAxis);


    svg.append("g")
    .attr({
        class: "axis",
        transform: "translate(20, 0)"
    })
    .call(yAxis);





    var p = svg.selectAll("circle");
    var xyin = [];
            for (i_p = 1; i_p < points.length; i_p++){
                if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                    xyin = xyin.concat(points[i_p].xyz[0][0]);       
                }
            }
                var update = p.data(xyin);
                var enter = update.enter();
                var exit = update.exit();

                outputData();   // 生成
                removeData();   // 削除
                updateData();   // 更新





    function draw_points_2d (){
            var p = svg.selectAll("circle");
             var xyin = [];
            for (i_p = 1; i_p < points.length; i_p++){
                if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                    xyin = xyin.concat(points[i_p].xyz[0][i_d2]);       
                }
            }
                 update = p.data(xyin);
                 enter = update.enter();
                 exit = update.exit();

                outputData();   // 生成
                removeData();   // 削除
                updateData();   // 更新
        }


    function draw_points_2d2 (det_day_3d){
            var p = svg.selectAll("circle");
             var xyin = [];

            for (i_p = 1; i_p < points.length; i_p++){
                for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
                    if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                        xyin = xyin.concat(points[i_p].xyz[depth_target][i_d2]);    
                        }   
                    }
                }
                 update = p.data(xyin);
                 enter = update.enter();
                 exit = update.exit();

                outputData();   // 生成
                removeData();   // 削除
                updateData();   // 更新
        }



var t_delay_2d_cir = 100;
var t_dulation_2d_cir = 50;



function outputData(){
    enter.append("circle")
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: 0,
        //fill: function(d,i){return get_color_target_2d (,i);}
        fill: function(d,i){return get_color_target_2d (i);}
    })
    .transition()
    .delay(function(d,i){return get_t_delay_2d_cir (i); })
    .duration(100)
    .ease("in")
    .attr({
        cx: function(d,i){return (xScale(d[0]) - padding);},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_S_pathline_2d (i);}
    });
}

    function removeData(){
        
    exit
    .transition()
    .duration(100)
    .attr({
    cx: function(d,i){return xScale(d[0]) - padding;},
    cy: function(d,i){return yScale(d[1]) - padding;},
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
            fill: function(d,i){return get_color_target_2d (i);}
        })#87CEEB
        .transition()
        .delay(function(d,i){return get_t_delay_2d_cir (i); })  
        .duration(100)
        .ease("in")
        .attr({
            cx: function(d,i){return xScale(d[0]) - padding;},
            cy: function(d,i){return yScale(d[1]) - padding;},
            r: function(d,i){return get_R_S_pathline_2d (i);}
});

    }



function get_color_target_2d (i){
    var r = 0;
    var g = 0;
    var b = 111;  

   //console.log(i) 
   //console.log(n_devi_day) 
  // console.log(Number(devi_day_target)+1)

    if( (i  == 0) ) {
        r = 255;
        g = 0;
        b = 0;
            } 
  //  else if( (( i % (n_devi_day*(Number(devi_day_target)+1) ) ) == 0) ) {
     else if(  i % (n_devi_day*(Number(devi_day_target)+1)  ) == 0 ) {
        r = 255;
        g = 0;
        b = 0;
            }

    else if( (((i-1)%n_devi_day) == 0) ) {
        r = 0;
        g = 255;
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


function get_R_S_pathline_2d (i){
  var R_S_2d = 1.0/1;
  /*
    if( i_d == Number(depth_target) ) {
      if( i_d2 == Number(devi_day_target) ) {
            R_S_2d = 1;
              }
            }*/

    if( ((i%n_devi_day) == 0) ) {
        R_S_2d = 1.5;
            }

  return R_S_2d ;
}

function get_t_delay_2d_cir (i){
 
      return  (i % (n_devi_day*(Number(devi_day_target)+1) ) ) * 30 ;
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



/*


var p = svg.selectAll("circle");


            var xyin = [];
            xyin = xyin.concat(points[1].xyz[0][0]);
            var update = p.data(xyin);
            var enter = update.enter();
            var exit = update.exit();

            outputData(1);   // 生成
            removeData(1);   // 削除
            updateData(1);   // 更新

            var xyin = [];
            xyin = xyin.concat(points[5].xyz[0][0]);
             update = p.data(xyin);
             enter = update.enter();
             exit = update.exit();

            outputData(5);   // 生成
            removeData(5);   // 削除
            updateData(5);   // 更新


            var xyin = [];
            xyin = xyin.concat(points[4].xyz[0][0]);
             update = p.data(xyin);
             enter = update.enter();
             exit = update.exit();

            outputData(5);   // 生成
            removeData(5);   // 削除
            updateData(5);   // 更新
console.log(update)
console.log(enter)
console.log(exit)

*/




   /*
var p = svg.selectAll("circle");

            var xyin = [];
            xyin = xyin.concat(points[2].xyz[0][0]);
             update = p.data(xyin);
             enter = update.enter();
             exit = update.exit();
             console.log(update)
             console.log(enter)
             console.log(exit)
            outputData(5);   // 生成
            removeData(5);   // 削除
            updateData(5);   // 更新
            var xyin = [];
            xyin = xyin.concat(points[3].xyz[0][0]);
             update = p.data(xyin);
             enter = update.enter();
             exit = update.exit();
             console.log(update)
                console.log(enter)
   console.log(exit)
            outputData(5);   // 生成
            removeData(5);   // 削除
            updateData(5);   // 更新
*/



/*
var p = svg.selectAll("circle");

var update = [];
var enter = [];
var exit = [];
            var xyin = [];
            xyin = xyin.concat(points[1].xyz[0][0]);
            update[1] = p.data(xyin);
            enter[1] = update[1].enter();
            exit[1] = update[1].exit();
            updateData(1);   // 更新
            outputData(1);   // 生成
            removeData(1);   // 削除


            var xyin = [];
            xyin = xyin.concat(points[5].xyz[0][0]);
            update[5] = p.data(xyin);
            enter[5] = update[5].enter();
            exit[5] = update[5].exit();
            updateData(5);   // 更新
            outputData(5);   // 生成
            removeData(5);   // 削除


console.log(update[1])

*/








        /*
var update = [];
var enter = [];
var exit = [];

var p2 = svg.selectAll("circle");
 

            var xyin = [];
            xyin = xyin.concat(points[3].xyz[0][0]);
            update[3] = p2.data(xyin);
            enter[3] = update[3].enter();
            exit[3] = update[3].exit();

            updateData(3);   // 更新
            outputData(3);   // 生成
            removeData(3);   // 削除




            var xyin = [];
            xyin = xyin.concat(points[2].xyz[0][0]);
            update[2] = p.data(xyin);
            enter[2] = update[2].enter();
            exit[2] = update[2].exit();
            updateData(2);   // 更新
            outputData(2);   // 生成
            removeData(2);   // 削除



*/



/*



console.log(update[0])
 console.log(enter)
  console.log(exit)


var  = 1;

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



