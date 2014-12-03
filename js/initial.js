console.log("initial")
var R_earth = 6378137*100;//m
var round_earth = 2*3.14*R_earth;//m

var year_target = "2006";
var month_target = "2";
var day_target = "1";

var devi_day_target = "0";
var depth_target = "0";
var n_devi_day = points[0].xyz[0][1].length;

var N_mode = 1;

var pathlinecolormode = 0;//0:cpue, 1:T, 2 :S
var draw3dcode = 1;