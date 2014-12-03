console.log("initial 2d")


var S_masterX_2dmap = 130;////////////////////これで描画画面操作
var E_masterX_2dmap = 150;
var S_masterY_2dmap = 30;
var E_masterY_2dmap = 50;
var minXaxis = S_masterX_2dmap;
var maxXaxis = E_masterX_2dmap;
var minYaxis = S_masterY_2dmap;
var maxYaxis = E_masterY_2dmap;

var rsize = 1;

var w = 500;
var h = w*((maxYaxis-minYaxis)/(maxXaxis-minXaxis));
console.log(h)
var padding = 25;

var xScale = d3.scale.linear()
.domain([minXaxis,maxXaxis])
.range([padding,w-padding])
.nice();

var yScale = d3.scale.linear()
.domain([maxYaxis,minYaxis])
.range([padding,h-padding])
.nice();

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(10);  // 大雑把に目盛りの個数を設定

    
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(10);  // 大雑把に目盛りの個数を設定

/*
var formatAsPercentage = d3.format(".1%");
xAxis.tickFormat(formatAsPercentage);
*/



var t_delay_2d_cir = 100;
var t_dulation_2d_cir = 50;






function get_color_target_2d (i){
    var r = 0;
    var g = 0;
    var b = 111;  
    var code = "#1E90FF";
    //console.log("fff")
  ///console.log("i") 
 //  console.log(i) 
  // console.log(n_devi_day) 
 //  console.log(Number(devi_day_target))
 // console.log(n_devi_day*Number(devi_day_target))
 // console.log(1 + (n_devi_day*Number(devi_day_target)))

    if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 0 ) {
       // r = 255;
      //  g = 0;
      //  b = 0;
        code = "#FF0000";
            }
    else if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 1 ) {
      //  r = 255;
      //  g = 0;
     //   b = 0;
        code = "#FF0000";
            }
    else if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 1 ) {
        code = "#FF0000";
            }
            

 //   else if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 1 ) {
   //     r = 255;
   //     g = 0;
   //     b = 0;
    //        }

  //  else if( ((i%n_devi_day) == 0) ) {
    //    r = 0;
     //   g = 255;
     //   b = 0;
        //    }

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
    return code ;
   // return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
  }


function get_R_S_pathline_2d (i){
  var R_S_2d = 2;

    if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 0 ) {
        R_S_2d = 3;
            }
    else if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 1 ) {
        R_S_2d = 2;
            }
    else if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 1 ) {
        R_S_2d = 1;
            }


  return R_S_2d ;
}

function get_t_delay_2d_cir (i){
 
      return  (i % (n_devi_day*(Number(devi_day_target)+1) ) ) * 30 ;
}







///////////////////////////////////////////////////zoooom



var S_masterX_2dmap_zoom = 141;////////////////////これで描画画面操作
var E_masterX_2dmap_zoom = 146;
var S_masterY_2dmap_zoom = 35;
var E_masterY_2dmap_zoom = 40;
var minXaxis_zoom = S_masterX_2dmap_zoom;
var maxXaxis_zoom = E_masterX_2dmap_zoom;
var minYaxis_zoom = S_masterY_2dmap_zoom;
var maxYaxis_zoom = E_masterY_2dmap_zoom;

var rsize_zoom = 1;

var w_zoom = 400;
var h_zoom = w_zoom*((maxYaxis_zoom-minYaxis_zoom)/(maxXaxis_zoom-minXaxis_zoom));
console.log(h_zoom)
var padding_zoom = 25;

var xScale_zoom = d3.scale.linear()
.domain([minXaxis_zoom,maxXaxis_zoom])
.range([padding_zoom,w_zoom-padding_zoom])
.nice();

var yScale_zoom = d3.scale.linear()
.domain([maxYaxis_zoom,minYaxis_zoom])////////////////  max min の順番
.range([padding_zoom,h_zoom-padding_zoom])
.nice();

var xAxis_zoom = d3.svg.axis()
    .scale(xScale_zoom)
    .orient("bottom")
    .ticks(10);  // 大雑把に目盛りの個数を設定

    
var yAxis_zoom = d3.svg.axis()
    .scale(yScale_zoom)
    .orient("left")
    .ticks(10);  // 大雑把に目盛りの個数を設定













