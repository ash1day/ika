console.log("2")

var S_val = [ 0.206858469 ,0.213264241 ,0.223484896 ,0.21302058 ,0.22759516,  0.254618129, 0.237107855, 0.162251158, 0.245025671, 0
,0.207810093,0.21340578,0.22355765,0.212973306,0.227292932,0.258193949,0.237580666,0.163036451,0.243573255, 0
,0.207616056,0.21340076,0.223699428,0.213255916,0.227349608,0.257369371,0.238890445,0.175555763,0.261097786, 0
,0.207724507,0.213548187,0.223252683,0.213193943,0.226165756,0.246847546,0.235046566,0.161675031,0.237034255, 0
,0.207916035,0.213632375,0.223199264,0.215032769,0.225293868,0.268090694,0.254749103,0.189581842,0.265567203, 0
,0.208534606,0.214594392,0.222087758,0.217077235,0.22369205,0.265381541,0.258341811,0.194993593,0.263225153, 0
,0.208986147,0.215260469,0.222244913,0.220851435,0.224222732,0.250472287,0.249965253,0.193348422,0.267390487, 0
,0.208120642,0.216877321,0.223299151,0.231452919,0.225652396,0.255042364,0.249239067,0.174107319,0.203052053, 0
,0.207857514,0.217510514,0.225923049,0.248648715,0.236857464,0.264497285,0.245294821,0.171016338,0.166041114, 0
,0.207856721,0.213727323,0.22886264,0.262897668,0.265001197,0.263742719,0.208989639,0.139705416,0.138524056, 0
,0.206026395,0.203441982,0.224829439,0.259700727,0.25443736,0.228726859,0.169195889,0.129310791,0.135390479, 0
,0.212019897,0.193184411,0.219894404,0.245138236,0.221663146,0.207758587,0.165561081,0.134955627,0.160924351, 0
,0.226131392,0.198779742,0.215652432,0.231947825,0.203661533,0.198993807,0.158925304,0.134747782,0.169009955, 0
,0.233774976,0.209791038,0.21769201,0.226410305,0.203545563,0.192039848,0.170335831,0.146729899,0.172339853, 0
,0.248048051,0.221483019,0.220827433,0.219425995,0.195922714,0.171187736,0.145516524,0.136202749,0.139198634, 0
,0.2672482,0.239384405,0.222300365,0.213942109,0.182638762,0.158102502,0.144395876,0.136449391,0.138406097, 0
,0.285798778,0.254524199,0.230813368,0.214804104,0.189071542,0.162581403,0.129049221,0.125621847,0.129349728, 0
,0.283290366,0.251258578,0.233204106,0.216387767,0.199790209,0.167320998,0.142496524,0.127047991,0.123778329, 0
,0.277687824,0.245427405,0.236089111,0.225147397,0.213910786,0.182264504,0.163208838,0.154639162,0.147597405, 0
,0.254526687,0.231596912,0.236511487,0.235656524,0.217917203,0.210667799,0.179621786,0.158043031,0.142623532, 0
,0.200956625,0.19475591,0.229034112,0.223510595,0.200532118,0.219451294,0.199018025,0.162931933,0.146733716, 0
,0.144698059,0.172162668,0.180117942,0.19670627,0.183006399,0.191407981,0.185848954,0.151861424,0.121037862, 0
,0.05536925,0.072968027,0.097308028,0.115088636,0.11443691,0.121134301,0.124698793,0.114731602,0.07153659, 0
,0.068755928,0.113816111,0.123725795,0.091276874,0.083479318,0.065606434,0.110495228,0.120795984,0.12633962, 0
,0.104968275,0.155726419,0.149226511,0.131678432,0.115830534,0.108165842,0.139439152,0.152976511,0.154937534, 0
,0.131071913,0.175021135,0.150320143,0.140868049,0.142914552,0.138484359,0.104121461,0.13346518,0.158555856, 0
,0.169839107,0.184066225,0.142083227,0.102798549,0.12176065,0.114463093,0.136247679,0.109467066,0.144820768, 0
,0.246076238,0.259526411,0.248065238,0.204262155,0.156413442,0.157968924,0.159208885,0.110616281,0.105035488, 0
,0.304728825,0.313909392,0.250668156,0.160360768,0.124784463,0.165053264,0.171505378,0.215248416,0.183979028, 0
,0.287141147,0.262214722,0.183184022,0.119447866,0.105396759,0.100750334,0.138095434,0.150150808,0.16177466, 0
,0.104722907,0.22211191,0.222921161,0.100519753,0.113069297,0.121503558,0.122118126,0.12537373, 0.137493979, 0 ]


var T_val = [0.44436091,0.433270021,0.441435,0.393496289,0.410977358,0.416659399,0.456450384,0.425246431,0.482980515,0
,0.444298075,0.433235778,0.441533674,0.392761914,0.410701392,0.416386785,0.452923125,0.423524444,0.482963624,0
,0.444282999,0.433227244,0.441711236,0.391071845,0.40965924,0.415256334,0.448137291,0.405862091,0.464664153,0
,0.444302855,0.433208325,0.441576574,0.388894233,0.408359438,0.429094946,0.452449303,0.410659575,0.473632798,0
,0.444328569,0.432870841,0.440741482,0.384767227,0.407181832,0.409402081,0.437976839,0.37336002,0.447341114,0
,0.444234756,0.432373373,0.43949642,0.388112046,0.408773249,0.403460818,0.431299589,0.351236149,0.453531421,0
,0.444380753,0.431546293,0.435370789,0.396609157,0.407254675,0.414370144,0.431966399,0.352411325,0.433887104,0
,0.444975015,0.432429626,0.421742244,0.392930085,0.390604095,0.406368292,0.474001569,0.422658457,0.438084001,0
,0.444636857,0.439187471,0.443386011,0.393927256,0.382615055,0.433874002,0.472708399,0.443613505,0.4373103,0
,0.441956862,0.451493468,0.451155274,0.413913388,0.402610099,0.461936996,0.46437383,0.452844646,0.375977671,0
,0.439000066,0.456819677,0.461964346,0.408812956,0.445596952,0.450467256,0.445502016,0.476605007,0.425047775,0
,0.458578872,0.463434888,0.465556806,0.428510762,0.454187297,0.434974588,0.439060851,0.499079298,0.423184898,0
,0.469567972,0.471473769,0.468137292,0.423209173,0.458901233,0.414966791,0.385421896,0.515117308,0.452569923,0
,0.425101938,0.48857147,0.471278385,0.400159197,0.455233733,0.40661837,0.364179877,0.461965121,0.443346461,0
,0.432899736,0.483069524,0.45865225,0.419245319,0.451661726,0.381748927,0.390890628,0.357832381,0.457879323,0
,0.434494593,0.473707448,0.423828961,0.423291539,0.436020265,0.351085843,0.350527244,0.386164536,0.356321328,0
,0.433555735,0.462172118,0.40899304,0.433360667,0.405164618,0.34984783,0.356930289,0.358119035,0.349453117,0
,0.422162134,0.425808077,0.411131388,0.377855932,0.362661913,0.356355349,0.357831246,0.380139085,0.36589259,0
,0.39763463,0.389461417,0.444701392,0.402170227,0.355200863,0.349001685,0.346495709,0.365247699,0.312209392,0
,0.38073682,0.38327838,0.472178801,0.408822944,0.373795986,0.380410131,0.345217055,0.328684349,0.386310236,0
,0.386986937,0.386313093,0.453789177,0.398254233,0.397243806,0.387133597,0.390445654,0.386225204,0.370949786,0
,0.360114319,0.38403456,0.425671743,0.406331972,0.407320198,0.387850473,0.414614753,0.406938494,0.409683025,0
,0.369027887,0.36803152,0.420228468,0.408852623,0.376156477,0.409953811,0.40309982,0.370496222,0.387334767,0
,0.310696589,0.306176786,0.383686317,0.371956551,0.363569457,0.383610495,0.371512551,0.362286959,0.30292766,0
,0.218935149,0.229212384,0.332707715,0.32823786,0.301906135,0.311172247,0.283355166,0.261831104,0.244743512,0
,0.153639643,0.19956037,0.253222817,0.263718915,0.247859561,0.229427315,0.211434792,0.153973815,0.208491971,0
,0.185063282,0.180039887,0.248912708,0.259198733,0.228557296,0.174546348,0.176847586,0.111008428,0.148588076,0
,0.18680317,0.144201872,0.146791341,0.187705155,0.197309313,0.156951906,0.127144557,0.150131571,0.135856194,0
,0.101211972,0.093203933,0.112019278,0.117303147,0.127376673,0.11884025,0.113610281,0.139004097,0.189082664,0
,0.050218568,0.060546012,0.100875257,0.11897993,0.120986855,0.115791891,0.104367054,0.100688101,0.121297461,0
,0.157469702,0.156948552,0.163549466,0.17782383,0.149661686,0.128791245,0.109624391,0.097419889,0.15182981,0


]





//console.log(S_val[1].toFixed(2))
//var,cccc = 0;
var x2_2dheat = [];
var y2_2dheat = [];
var value_2dheat = [];

count_heat_val = 0;


        for (i = 0; i < depth_csv; i++) {//depth
            for (j = 0; j < day_csv; j++) {//depth
                x2_2dheat.push(j);
                y2_2dheat.push(i);
                value_2dheat.push(T_val[count_heat_val].toFixed(2));////ここで
                
                count_heat_val = count_heat_val + 1;
            }
        }



 
var xy2_2dheat = [];
        for (i = 0; i < depth_csv*day_csv; i++) {//depth
            xy2_2dheat.push( [x2_2dheat[i], y2_2dheat[i], value_2dheat[i]] );
        }
         ///   for (i_row = 0; i_row < 3; i_row++) {//depth
          //    for (i = 0; i < day_csv; i++) {//depth
           //     //console.log(Math.floor((i+i_row*day_csv)/10))
           //       xy2_2dheat.push( [(i+i_row*day_csv)%10, Math.floor((i+i_row*day_csv)/10),value_2dheat[(i+i_row*day_csv)] ] );
          //    }
           // }



var xy2_2dheat_text = xy2_2dheat.concat(xy2_2dheat);

var x_y_pathlineinfo;


var day_csv_for_pathtrans = day_csv_pathline;//day_csv
create_data_pathlineinfo_tekitou_hazime ();
var first_cpue_draw_pathlineinfo;
function create_data_pathlineinfo_tekitou_hazime (){
   //console.log(x2_2dheat)
 x_y_pathlineinfo = [];//////////////// for pathline info
number_fishingpoint = 1;
     for (i_p = 1; i_p < points.length; i_p++){
            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画  
      //  if (points[i_p].cpue == cpue) {
         // console.log("efwefwf")
            for (i_row = 0; i_row < 3; i_row++) {//depth
              for (i = 0; i < day_csv_for_pathtrans; i++) {//depth
                //console.log(Math.floor((i+i_row*day_csv_for_pathtrans)/day_csv_for_pathtrans))
                  x_y_pathlineinfo.push( [(i+i_row*day_csv_for_pathtrans)%day_csv_for_pathtrans, Math.floor((i+i_row*day_csv_for_pathtrans)/day_csv_for_pathtrans), points[i_p].xyz[depth_target][i][0][0],points[i_p].xyz[depth_target][i][0][1],points[i_p].xyz[depth_target][i][0][2],points[i_p].cpue, points[i_p].S[depth_target][i][0], points[i_p].T[depth_target][i][0]
                    ] );
              }
            }
            // console.log(x_y_pathlineinfo)
            first_cpue_draw_pathlineinfo = points[i_p].cpue;
             
              break;
        //};  
        number_fishingpoint = number_fishingpoint + 1;
      }
     }
}

function create_data_pathlineinfo (cpue){/////cpueで漁獲位置を識別
 x_y_pathlineinfo = [];//////////////// for pathline info
 console.log("create_data_pathlineinfo")
number_fishingpoint = 1;
     for (i_p = 1; i_p < points.length; i_p++){
            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画  
        if (points[i_p].cpue == cpue) {
         // console.log("efwefwf")
            for (i_row = 0; i_row < 3; i_row++) {//depth
              for (i = 0; i < day_csv_for_pathtrans; i++) {//depth
                //console.log(Math.floor((i+i_row*day_csv_for_pathtrans)/day_csv_for_pathtrans))
                  x_y_pathlineinfo.push( [(i+i_row*day_csv_for_pathtrans)%day_csv_for_pathtrans, Math.floor((i+i_row*day_csv_for_pathtrans)/day_csv_for_pathtrans), points[i_p].xyz[depth_target][i][0][0],points[i_p].xyz[depth_target][i][0][1],points[i_p].xyz[depth_target][i][0][2],points[i_p].cpue, points[i_p].S[depth_target][i][0], points[i_p].T[depth_target][i][0]
                    ] );
              }
            }
            // console.log(x_y_pathlineinfo)
              break;
        };  
        number_fishingpoint = number_fishingpoint + 1;
      }
     }
}

//x_y_pathlineinfo = x_y_pathlineinfo.concat(x_y_pathlineinfo);
//console.log(x_y_pathlineinfo)
//value = [6,1,2,3,4,5,6,7,8]
//x2 = [1,2,3,1,2,3,1,2,3]
//y2 = [1,1,1,2,2,2,3,3,3]
//var xy2 = [];
 //       for (i = 0; i < 9; i++) {//depth
 //           xy2.push( [x2[i], y2[i], value[i]] );
  //      }
//console.log(xy2)



var w2 = 400;
var h2 = 500;
var padding2 = 40;
var width_rect = 36;
var height_rect = 14;




var svg2dheat = d3.select("#subheat").append("svg").attr({width:w2, height:h2});
var w_svg_pathlineinfo_depthtransition = 800;//これが　パスラインの深さスケールのでかさ決定
var h_svg_pathlineinfo_depthtransition = 140;
var svg_pathlineinfo = d3.select("#pathline_info").append("svg").attr({width:w_svg_pathlineinfo_depthtransition, height:h_svg_pathlineinfo_depthtransition});///////////for pathlineiunfo
var svg_pathlineinfo_depthtransition = d3.select("#pathline_info_depthtransition").append("svg").attr({width:w_svg_pathlineinfo_depthtransition, height:h_svg_pathlineinfo_depthtransition});///////////for pathlineiunfo
var svg_pathlineinfo_depthtransition_plusdistancetransition = d3.select("#pathline_info_depthtransition_plusdistancetransition").append("svg").attr({width:w_svg_pathlineinfo_depthtransition, height:h_svg_pathlineinfo_depthtransition});///////////for pathlineiunfo


var x_padd_depthtransition = 20;
var y_padd_depthtransition = 0;
var pp_yAxis_depthtransition ;
var pp_yAxis_depthtransition_plusdistancetransition;/////depth distance transitionようのスケールを貼り付ける
var pp_xAxis_depthtransition_plusdistancetransition;
var xScale2 = d3.scale.linear()
.domain([0,d3.max(x2_2dheat)])
.range([padding2,w2-padding2])
.nice();
console.log(x2_2dheat)
console.log(xScale2(9))

var yScale2 = d3.scale.linear()
.domain([0,d3.max(y2_2dheat)])
.range([padding2,h2-padding2])
.nice();

/*
var xAxis2 = d3.svg.axis()
    .scale(xScale2)
    .orient("top");

    svg2dheat.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 20)"
    })
    .call(xAxis2);



var yAxis2 = d3.svg.axis()
    .scale(yScale2)
    .orient("left");

    svg2dheat.append("g")
    .attr({
        class: "axis",
        transform: "translate(20, 0)"
    })
    .call(yAxis2);
*/



var colorScale2 = d3.scale.linear()
.domain([0, d3.max(value_2dheat)])
.range(["#FFF0F5", "#DC143C"]); //カラースケールを作成



svg2dheat.selectAll("rect")
.data(xy2_2dheat)
.enter()
.append("rect")
.on("click", function(d,i) {
    change_heat2d ( d[0],d[1] )
   // day( i%3 )
    ;})
.on("mouseover", function(){// マウスがバーに重なったら色を青色に変える
        d3.select(this) // マウスに重なった要素を選択
              .style("opacity", 0.5);
            //.attr("style", "fill:rgb(0,0,255)")
           // .attr("stroke", "blue");
    })
.on("mouseout", function(){// マウスがバーから離れたら色を赤色に戻す
        d3.select(this) // マウスに重なっていた要素を選択
              .style("opacity", 1.0);
    })
.attr({
    x: function(d,i){return xScale2(d[0]) ;},
    y: function(d,i){return yScale2(d[1]) - padding2/4;},
    width: width_rect,
    height: height_rect,
    fill: function(d,i){return colorScale2(d[2]);},
   // stroke: "white",
    //opacity: 0.5,
    })
 // .attr("stroke", function(d,i){return get_strok_color(d[0],d[1]);}) // 青色にする
 // .attr("stroke-width", function(d,i){return get_strok_width(d[0],d[1]);});   // 線幅を指定
  .attr("stroke", "white") // 青色にする
  .attr("stroke-width", 1);   // 線幅を指定









function get_strok_color(backday,depth){
  if ((backday == devi_day_target) && (depth == depth_target)) {
    return "orangered";
  }
  else if ((backday == devi_day_target) || (depth == depth_target)) {
    return "pink";
  }
   return "white";
}

function get_strok_width(backday,depth){
  if ((backday == devi_day_target) && (depth == depth_target)) {
    return 2;
  }
  else if ((backday == devi_day_target) || (depth == depth_target)) {
    return 1;
  }
   return 1;
}







//var g_svg2dheat_coloecode = svg2dheat_coloecode.append("g")




/*

var svg2t = d3.select("#myGraph2").append("svg").attr({width:w2, height:h2});

svg2t.selectAll("text")
   .data(xy2_2dheat)
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


*/




var g_svg2dheat = svg2dheat.append("g")
g_svg2dheat.selectAll("text")
    .data(xy2_2dheat_text)
    .enter()
    .append("text")
    .on("click", function(d,i) {
    change_heat2d ( d[0],d[1] )
   // day( i%3 )
    ;})
    .on("mouseover", function(){// マウスがバーに重なったら色を青色に変える
            d3.select(this) // マウスに重なった要素を選択
                  .style("opacity", 0.5);
                //.attr("style", "fill:rgb(0,0,255)")
               // .attr("stroke", "blue");
        })
    .on("mouseout", function(){// マウスがバーから離れたら色を赤色に戻す
            d3.select(this) // マウスに重なっていた要素を選択
                  .style("opacity", 1.0);
        });

g_svg2dheat.selectAll("text")
    .data(xy2_2dheat_text)
    .text(function(d,i){

     return get_text_2dheat (i,d[0],d[1],d[2]);
    })
    //return "e";})
    .attr("x", function(d,i) { 

        return get_x_text_2dheat (i,d[0],d[1]);
    })
    .attr("y", function(d,i) { 

        return get_y_text_2dheat (i,d[0],d[1]);
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", "black");

/*
g_svg2dheat.selectAll("text")
    .data(xy2_2dheat)
    .text(function(d,i){
     return get_text_2dheat (i,d[2]);})
    //return "e";})
    .attr("x", function(d) { 
        return xScale2(d[0])- padding2/8 ;
    })
    .attr("y", function(d) { 
        return yScale2(d[1]) ;
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", "black");

*/
//console.log(xy2_2dheat.length)
//console.log(xy2_2dheat_text)
//console.log(xy2_2dheat_text.length)



//////////////////////////////////////////////////////////

 var xScale2_depthtransition = d3.scale.linear()
.domain([0,day_csv_for_pathtrans])
.range([padding2,w_svg_pathlineinfo_depthtransition-padding2])///////////////////ここでパスライン情報のｘスケール
.nice();
 width_rect = 25;
 height_rect = 14;


rect_text_create_pathline_info ();
  
  

function total_pathlineinfo_create(cpue){
  create_data_pathlineinfo (cpue);
  rect_text_remove_pathline_info ();
  rect_text_create_pathline_info ();
}


function rect_text_remove_pathline_info (){
svg_pathlineinfo.selectAll("rect")
.remove()
svg_pathlineinfo.selectAll("text")
.remove()
svg_pathlineinfo_depthtransition.selectAll("circle")
.remove()
//svg_pathlineinfo_depthtransition//////これで全部消えるよ
//.remove()
pp_yAxis_depthtransition
.remove()
svg_pathlineinfo_depthtransition.selectAll("path")
.remove()    

svg_pathlineinfo_depthtransition_plusdistancetransition.selectAll("circle")
.remove()
//svg_pathlineinfo_depthtransition_plusdistancetransition//////これで全部消えるよ
//.remove()
pp_yAxis_depthtransition_plusdistancetransition
.remove()
pp_xAxis_depthtransition_plusdistancetransition
.remove()
svg_pathlineinfo_depthtransition_plusdistancetransition.selectAll("path")
.remove()    


 } 




function rect_text_create_pathline_info (){
  console.log("rect_text_create_pathline_info")
svg_pathlineinfo.selectAll("rect")
.data(x_y_pathlineinfo)
.enter()
.append("rect")
.on("click", function(d,i) {
    change_heat2d ( d[0],d[1] )
   // day( i%3 )
    ;})
.on("mouseover", function(){// マウスがバーに重なったら色を青色に変える
        d3.select(this) // マウスに重なった要素を選択
              .style("opacity", 0.5);
            //.attr("style", "fill:rgb(0,0,255)")
           // .attr("stroke", "blue");
    })
.on("mouseout", function(){// マウスがバーから離れたら色を赤色に戻す
        d3.select(this) // マウスに重なっていた要素を選択
              .style("opacity", 1.0);
    })
.attr({
    x: function(d,i){return xScale2_depthtransition(d[0]) ;},
    y: function(d,i){return yScale2(d[1]) - padding2/4;},
    width: width_rect,
    height: height_rect,
    fill: function(d,i){return get_color_pathline_info (i,d[0],d[1],d[5],d[6],d[7],d[4]);},// colorScale2(d[2])
   // stroke: "white",
    //opacity: 0.5,
    })
 // .attr("stroke", function(d,i){return get_strok_color(d[0],d[1]);}) // 青色にする
 // .attr("stroke-width", function(d,i){return get_strok_width(d[0],d[1]);});   // 線幅を指定
  .attr("stroke", "white") // 青色にする
  .attr("stroke-width", 1);   // 線幅を指定


var g_svg_pathlineinfo = svg_pathlineinfo.append("g")////////////////////////////////text
g_svg_pathlineinfo.selectAll("text")
    .data(x_y_pathlineinfo)
    .enter()
    .append("text")
    .on("click", function(d,i) {
    change_heat2d ( d[0],d[1] )
   // day( i%3 )
    ;})
    .on("mouseover", function(){// マウスがバーに重なったら色を青色に変える
            d3.select(this) // マウスに重なった要素を選択
                  .style("opacity", 0.5);
                //.attr("style", "fill:rgb(0,0,255)")
               // .attr("stroke", "blue");
        })
    .on("mouseout", function(){// マウスがバーから離れたら色を赤色に戻す
            d3.select(this) // マウスに重なっていた要素を選択
                  .style("opacity", 1.0);
        });

g_svg_pathlineinfo.selectAll("text")
    .data(x_y_pathlineinfo)
    .text(function(d,i){
     return get_text_pathline_info (i,d[0],d[1],d[5],d[6],d[7],d[4]);//get_text_2dheat (i,d[0],d[1],d[2])   d[5].toFixed(1) 
    })
    //return "e";})
    .attr("x", function(d,i) { 
          //  console.log(i)
                     // console.log("X = " + i + "  ::::  "+ get_x_text_2dheat2 (i,d[0],d[1]))
                       // console.log("Y = "  + i + "  ::::  "+ get_y_text_2dheat (i,d[0],d[1])) 
                       //  console.log("x " + d[0] + " ;y   " + d[1])
                       //  console.log("get_x_text_2dheat (20,9,2) = " + get_x_text_2dheat (20,9,2))
        return xScale2_depthtransition (d[0]) + 3; //get_x_text_pathlineinfo (i,d[0],d[1])
    })
    .attr("y", function(d,i) { 
     // console.log("d[0] = " + d[0] + "  d[1] =" + d[1])
        return get_y_text_pathlineinfo (i,d[0],d[1]);
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "6px")
   .attr("fill", "white");


var x_y_pathlineinfo_fordepthtransition = [];
var depth_formakescale = [];
var distance_formakedistancescale = [];
  for (i = 0; i < day_csv_for_pathtrans; i++) {//depth
   // x_y_pathlineinfo_fordepthtransition[i] = x_y_pathlineinfo[i];
     if (i ==0) {
      distance_formakedistancescale[i]  = 0;
     }  
  //  else  if (i == 1) {
   //     distance_formakedistancescale[i] = (1/1000)* Math.sqrt(Math.pow((round_earth/360)*(x_y_pathlineinfo[i+1][2]-x_y_pathlineinfo[i][2]),2) + Math.pow((round_earth/360)*(x_y_pathlineinfo[i+1][3]-x_y_pathlineinfo[i][3]),2)) ;
   // }
    else{
        distance_formakedistancescale[i] = distance_formakedistancescale[i-1] + (1/1000)* Math.sqrt(Math.pow((round_earth/360)*(x_y_pathlineinfo[i][2]-x_y_pathlineinfo[i-1][2]),2) + Math.pow((round_earth/360)*(x_y_pathlineinfo[i][3]-x_y_pathlineinfo[i-1][3]),2)) ;   
   // console.log((x_y_pathlineinfo[i+1][2]-x_y_pathlineinfo[i][2]) + " dfvs " + (x_y_pathlineinfo[i+1][3]-x_y_pathlineinfo[i][3]))
     //   console.log("ido keido " + (x_y_pathlineinfo[i+1][2]-x_y_pathlineinfo[i][2]) + " dfvs " + (x_y_pathlineinfo[i+1][3]-x_y_pathlineinfo[i][3]))
    };
    x_y_pathlineinfo_fordepthtransition.push(x_y_pathlineinfo[i]);
    x_y_pathlineinfo_fordepthtransition[i].push(distance_formakedistancescale[i]);
    depth_formakescale[i]  = x_y_pathlineinfo[i][4];
  }



var yScale_depthtransition = d3.scale.linear()
.domain([d3.min(depth_formakescale),d3.max(depth_formakescale)])
.range([padding2,h_svg_pathlineinfo_depthtransition-padding2])
.nice();

var xScale2_depthtransition_plusdistancetransition = d3.scale.linear()/////////ここで定義しておく  distance 動的に変えるスケール
.domain([0,d3.max(distance_formakedistancescale)])//ここを漁獲位置に応じて動的に変える
.range([padding2,w_svg_pathlineinfo_depthtransition-padding2])///////////////////////この850　手で合わせた
.nice();

//console.log(x_y_pathlineinfo_fordepthtransition)
//console.log(distance_formakedistancescale)
//console.log(Math.sqrt(9) + "dvs " + w2 + "dvs " +  xScale2_depthtransition_plusdistancetransition(distance_formakedistancescale[23]))
//console.log(d3.max(distance_formakedistancescale) + "dvs " + distance_formakedistancescale[24] + "dvs " +  xScale2_depthtransition_plusdistancetransition(distance_formakedistancescale[24]))
//console.log("sfvwd  " + xScale2_depthtransition_plusdistancetransition(x_y_pathlineinfo_fordepthtransition[24][8]))
//console.log(d3.max(depth_formakescale))
//console.log(depth_formakescale)

//var xAxis_depthtransition = d3.svg.axis()
 //   .scale(xScale)
  //  .orient("bottom")
  //  .ticks(10);  // 大雑把に目盛りの個数を設定

    
var yAxis_depthtransition = d3.svg.axis()
    .scale(yScale_depthtransition)
    .orient("left")
    .ticks(5)
    //.tickSize(6, -height) // 棒の長さと方向。
   // .tickFormat(function(d){ return d+"年"; }); // 数字に年をつけている。
    ;  // 大雑把に目盛りの個数を設定

 //    var formatAsPercentage = d3.format(".2");
 //   yAxis_depthtransition.tickFormat(formatAsPercentage);

   // svg_pathlineinfo_depthtransition.append("g")
  //  .attr({
   //     class: "axis",
   //     transform: "translate(0, "+ (h_zoom-padding_zoom) +" )"
   // })
   // .call(xAxis_zoom);


   pp_yAxis_depthtransition = svg_pathlineinfo_depthtransition.append("g")///////////////////////////////ここからtransitions
    .attr({
        class: "axis",
        transform: "translate(" + 35 + ", 0)"
    })
    .call(yAxis_depthtransition)
      //  .append("text")
    //  .attr("y", 1)
    //  .attr("x",10)
    //  .style("text-anchor", "end")
     // .text("GDP(兆円)")
      ; 


//d3.select('pathline_info_depthtransition').on('click', function(){
 // scale.domain([0, d3.max(dataSet, function(d){ return d.val2 })]);
  //pp_yAxis_depthtransition.transition().call(yAxis_depthtransition); //目盛り表示更新時にアニメーションさせる


   pp_yAxis_depthtransition_plusdistancetransition = svg_pathlineinfo_depthtransition_plusdistancetransition.append("g")
    .attr({
        class: "axis",
        transform: "translate(" + 35 + ", 0)"
    })
    .call(yAxis_depthtransition);

 xAxis_depthtransition_plusdistancetransition = d3.svg.axis()
    .scale(xScale2_depthtransition_plusdistancetransition)
    .orient("bottom")
    .ticks(20)
    ;

    pp_xAxis_depthtransition_plusdistancetransition = svg_pathlineinfo_depthtransition_plusdistancetransition.append("g")
    .attr({
        class: "axis",
        transform: "translate("+ 20 +", 102)" //h_svg_pathlineinfo_depthtransition = 160   xScale2_depthtransition(0)
    })
    .call(xAxis_depthtransition_plusdistancetransition);





svg_pathlineinfo_depthtransition.selectAll("circle")////////////////////////
.data(x_y_pathlineinfo_fordepthtransition)
.enter()
.append("circle")
    .attr({
        cx: function(d,i){return xScale2_depthtransition(d[0])  + x_padd_depthtransition;},//xはこれでいいけど　ｙはdepthのスケールで
        cy: function(d,i){return yScale_depthtransition(d[4]) + y_padd_depthtransition;},
        r: function(d,i){return 4;},///3:cpue,4:S,5:T,6:updawn,7:z
        fill: function(d,i){return "red";},///3:cpue,4:S,5:T,6:updawn,7:z
        stroke:function(d,i){return get_strokcolor_pathline_circle (i,d[3]);}
     //   stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });





svg_pathlineinfo_depthtransition_plusdistancetransition.selectAll("circle")
.data(x_y_pathlineinfo_fordepthtransition)
.enter()
.append("circle")
    .attr({
        cx: function(d,i){return xScale2_depthtransition_plusdistancetransition(d[8])  + x_padd_depthtransition;},//xはこれでいいけど　ｙはdepthのスケールで
        cy: function(d,i){return yScale_depthtransition(d[4]) + y_padd_depthtransition;},
        r: function(d,i){return 4;},///3:cpue,4:S,5:T,6:updawn,7:z
        fill: function(d,i){return "red";},///3:cpue,4:S,5:T,6:updawn,7:z
        stroke:function(d,i){return get_strokcolor_pathline_circle (i,d[3]);}
     //   stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });




                        line = d3.svg.line()
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale2_depthtransition(d[0])  + x_padd_depthtransition;})
                          .y(function(d) {return yScale_depthtransition(d[4])  + y_padd_depthtransition;});


                           path = svg_pathlineinfo_depthtransition.append('path')
                         /*   .on("click", function(d,i) {
                               // change_heat2d ( d[0],d[1] )
                               console.log("rrr " + i + "ddd " + this)
                               // day( i%3 )
                                ;})
                            .on("mouseover", function(d,i){// マウスがバーに重なったら色を青色に変える
                                    d3.select(this) // マウスに重なった要素を選択
                                          .style("opacity", 0.3);
                                          //pathline_information_backday ( d[0],d[1] )
                                          console.log("dd " + d[0])
                                        //.attr("style", "fill:rgb(0,0,255)")
                                       // .attr("stroke", "blue");
                                })
                            .on("mouseout", function(d,i){// マウスがバーから離れたら色を赤色に戻す
                                    d3.select(this) // マウスに重なっていた要素を選択
                                          .style("opacity", 1.0);
                                })*/
                          .attr({
                            'd': line(x_y_pathlineinfo_fordepthtransition),
                            'stroke': (function(d,i) { 
                                //return get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) 
                                return "blue" ;}),
                            'stroke-width': (function(d,i) {
                            //  return get_strokewidth_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5]);
                             return 1;
                            }),
                            'fill': 'none',
                          });

                        line = d3.svg.line()/////xScale2_depthtransition_plusdistancetransition
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale2_depthtransition_plusdistancetransition(d[8])  + x_padd_depthtransition;})
                          .y(function(d) {return yScale_depthtransition(d[4])  + y_padd_depthtransition;});


                           path = svg_pathlineinfo_depthtransition_plusdistancetransition.append('path')
                         /*   .on("click", function(d,i) {
                               // change_heat2d ( d[0],d[1] )
                               console.log("rrr " + i + "ddd " + this)
                               // day( i%3 )
                                ;})
                            .on("mouseover", function(d,i){// マウスがバーに重なったら色を青色に変える
                                    d3.select(this) // マウスに重なった要素を選択
                                          .style("opacity", 0.3);
                                          //pathline_information_backday ( d[0],d[1] )
                                          console.log("dd " + d[0])
                                        //.attr("style", "fill:rgb(0,0,255)")
                                       // .attr("stroke", "blue");
                                })
                            .on("mouseout", function(d,i){// マウスがバーから離れたら色を赤色に戻す
                                    d3.select(this) // マウスに重なっていた要素を選択
                                          .style("opacity", 1.0);
                                })*/
                          .attr({
                            'd': line(x_y_pathlineinfo_fordepthtransition),
                            'stroke': (function(d,i) { 
                                //return get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) 
                                return "blue" ;}),
                            'stroke-width': (function(d,i) {
                            //  return get_strokewidth_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5]);
                             return 1;
                            }),
                            'fill': 'none',
                          });






var data_for_depthtrans_waku = [[ x_y_pathlineinfo_fordepthtransition[0][0] ,d3.max(depth_formakescale)],
         [ x_y_pathlineinfo_fordepthtransition[day_csv_for_pathtrans-1][0]+1, d3.max(depth_formakescale)],  
         [ x_y_pathlineinfo_fordepthtransition[day_csv_for_pathtrans-1][0]+1, d3.min(depth_formakescale)] ];
         console.log(data_for_depthtrans_waku)
  var line = d3.svg.line()
      .x(function(d) {return  xScale2(d[0]);})
      .y(function(d) {return yScale_depthtransition(d[1]) +3;});

  // path要素を作成
  var path = svg_pathlineinfo_depthtransition.append('path')
      .attr({
        'd': line(data_for_depthtrans_waku),
        'stroke': 'black',
        'fill': 'none',
        'stroke-width': 1,
      });

  var path = svg_pathlineinfo_depthtransition_plusdistancetransition.append('path')
      .attr({
        'd': line(data_for_depthtrans_waku),
        'stroke': 'black',
        'fill': 'none',
        'stroke-width': 1,
      });

}


function get_text_pathline_info (i,x_panel,y_panel,cpue,S,T,z){
//console.log("i ===" + i)
if (i < day_csv_for_pathtrans) {//CPUE
return Number(S).toFixed(2) ;
}
else if (i < day_csv_for_pathtrans*2) {//CPUE
return T.toFixed(2);
}
else if (i < day_csv_for_pathtrans*3) {//CPUE
   var suikai_kari;
        if( (min_T_OW < T) && (T < max_T_OW) //OW
                 && (min_S_OW < S) && (S < max_S_OW) 
                 && (min_dence_OW < get_v_dence(z,S,T)) && (get_v_dence(z,S,T) < max_dence_OW ) ) {
                    suikai_kari = "OW";
             //   console.log("OW")
             //   console.log(min_T_OW + "< " + T + " < " + max_T_OW)
              //  console.log(min_S_OW + "< " + S + " < " + max_S_OW)
             //   console.log(min_dence_OW + "< " + get_v_dence(z,S,T) + " < " + max_dence_OW)    
             //   console.log("z = " + z)                        
            }

        else if( (min_T_KW < T) && (T < max_T_KW) //KW
                 && (min_S_KW < S) && (S < max_S_KW) 
                 && (min_dence_KW < get_v_dence(z,S,T)) && (get_v_dence(z,S,T) < max_dence_KW ) ) {
                    suikai_kari = "KW";   //console.log("KW")
            }
        else  {
         suikai_kari = "mid";
        };
return suikai_kari;

}
else if (i < day_csv_for_pathtrans*4) {//CPUE
return HSVtoColorCode(Scale_updown_HSV_H(updown),1,1);
}
else if (i < day_csv_for_pathtrans*5) {//CPUE
 return cpue.toFixed(2);
};

}


function get_color_pathline_info (i,x_panel,y_panel,cpue,S,T,z){

if (i < day_csv_for_pathtrans) {//CPUE
return HSVtoColorCode(Scale_S_HSV_H(S),1,1);
}
else if (i < day_csv_for_pathtrans*2) {//CPUE
return HSVtoColorCode(Scale_T_HSV_H(T),1,1);
}
else if (i < day_csv_for_pathtrans*3) {//CPUE
  var suikai_kari;
        if( (min_T_OW < T) && (T < max_T_OW) //OW
                 && (min_S_OW < S) && (S < max_S_OW) 
                 && (min_dence_OW < get_v_dence(z,S,T)) && (get_v_dence(z,S,T) < max_dence_OW ) ) {
                    suikai_kari = 240;
             //   console.log("OW")
             //   console.log(min_T_OW + "< " + T + " < " + max_T_OW)
              //  console.log(min_S_OW + "< " + S + " < " + max_S_OW)
             //   console.log(min_dence_OW + "< " + get_v_dence(z,S,T) + " < " + max_dence_OW)    
             //   console.log("z = " + z)                        
            }

        else if( (min_T_KW < T) && (T < max_T_KW) //KW
                 && (min_S_KW < S) && (S < max_S_KW) 
                 && (min_dence_KW < get_v_dence(z,S,T)) && (get_v_dence(z,S,T) < max_dence_KW ) ) {
                    suikai_kari = 359;   //console.log("KW")
            }
        else  {
         suikai_kari = 300;
        };
 num_sort_info = suikai_kari;
return HSVtoColorCode(suikai_kari,1,1);
}
else if (i < day_csv_for_pathtrans*4) {//CPUE
return HSVtoColorCode(Scale_updown_HSV_H(updown),1,1);
}
else if (i < day_csv_for_pathtrans*5) {//CPUE
return HSVtoColorCode(Scale_cpue_HSV_H(cpue),1,1);
};

}


function get_x_text_2dheat (i,x,y){
   // console.log(i)
  if (i < xy2_2dheat.length) {
    //console.log(i)
    return xScale2(x) + 10;
    }
  else if (i >= xy2_2dheat.length) {
    //console.log(i)
          if (y == 0) {

            return xScale2(x) + 3;
          }
          else if (x == 0) {
            return xScale2(x) - padding2;
          };
    };
}



function get_y_text_2dheat (i,x,y){
  if (i < xy2_2dheat.length) {
    return yScale2(y) ;
    }
  else if (i >= xy2_2dheat.length) {
          if (y == 0) {
            return  yScale2(y) - padding2/2;
          }
          else if (x == 0) {
            return yScale2(y)  ;
          };
    };
}


//console.log("xy2_2dheat.length = " + xy2_2dheat.length)
function get_x_text_pathlineinfo (i,x,y){
//console.log("xy2_2dheat.length = " + xy2_2dheat.length)
  if (i < x_y_pathlineinfo.length) {
  //  console.log("  i < x_y_pathlineinfo  " + i)
    return xScale2(x) + 6;
    }
  /*else if (i >= x_y_pathlineinfo.length) {
    console.log("  i >>> xy2_2dheat  " + i)
          if (y == 0) {
            // console.log(" y == 0:::  " + xScale2(x))

            return xScale2(x) + 3;
          }
          else if (x == 0) {
          //               console.log("(x == 0):::  " + xScale2(x))
            return xScale2(x) - padding2;
          };
    };*/
}


function get_y_text_pathlineinfo  (i,x,y){
  if (i < x_y_pathlineinfo.length) {
    return yScale2(y) ;
    }
  else if (i >= xy2_2dheat.length) {
          if (y == 0) {
            return  yScale2(y) - padding2/2;
          }
          else if (x == 0) {
            return yScale2(y)  ;
          };
    };
}

function get_text_2dheat (i,x,y,v_correlation){
  if (i < xy2_2dheat.length) {
    return v_correlation ;
    }
  else if (i >= xy2_2dheat.length) {
          if (y == 0) {
           // return x + "日前";
          };
          if (x == 0) {
       //     console.log(cccc)
       //     console.log(y)
        //    cccc= cccc +1;
          //  return scale_z_lev[y] + "[m]" ;
          };
    };



}


function change_heat2d (i_backday,i_depth){
    devi_day_target = String( i_backday );//date change pathline
    depth_target = String( i_depth );//date depth pathline
    day_target_ocean2 = String( Number(day_target) - i_backday  );//date change ocean
    z_lev_2dfiz = String( i_depth);//date depth ocean


    console.log(i_backday);
    console.log(devi_day_target);
    console.log(day_target_ocean2);
    write1_2d ()
//draw_points_2d2 (1 + Number(devi_day_target))
   draw()
   console.log("FF")

}
 

function a_day (a_day){
    devi_day_target = String( Number(devi_day_target) - a_day);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))    }
function b_day (b_day){
    devi_day_target = String( Number(devi_day_target) + b_day);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))    }

function depth_p (depth_p){
    depth_target = String( Number(depth_target) + depth_p);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))    }

function depth_m (depth_m){
    depth_target = String( Number(depth_target) - depth_m);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))    }

///////////////////////////////////////////////////////////////////////////////////////////////////
/*

createsvg();

function createsvg () {
  var svg = d3.select("#myGraph2").append("svg")
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
  var svg = d3.select("#myGraph2").append("svg")
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




var xScale2_colorcode = d3.scale.linear()
.domain([0,40])
.range([padding2,40-padding2])
.nice();

var yScale2_colorcode = d3.scale.linear()
.domain([0,20])
.range([padding2,20-padding2])
.nice();



var svg2dheat_coloecode = d3.select("#heatcolorcode").append("svg").attr({width:w2, height:h2});
color = [0,0];

  gradient = svg2dheat_coloecode.append("svg:defs")
    .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .attr("x3", "100%")
      .attr("y3", "0%")
      .attr("x4", "100%")
      .attr("y4", "0%")

  gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FF0000")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1)


svg2dheat_coloecode.selectAll("rect")
.data(color)
.enter()
.append("rect")
.attr({
    x: function(d,i){return 0 ;},
    y: function(d,i){return 0 ;},
    width: 40,
    height: 20,
    fill: function(d,i){return "url(#gradient)";},
   // stroke: "white",
    //opacity: 0.5,
});













//var svg2dheat_colorcode_text_min = d3.select("#heatcode_text").append("svg").attr({width:20, height:20});

var svg2dheat_colorcode_text_min = d3.select("#heatcode_text").selectAll("text");

s = [1,1,1];
svg2dheat_colorcode_text_min    
    .data(s)
    .text(function(d,i){

      return d3.min(T_val).toFixed(2);
    })
   // .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("font-weight", "bold")
   .attr("fill", "black");


var svg2dheat_colorcode_text_max = d3.select("#heatcode_text_max").selectAll("text");

svg2dheat_colorcode_text_max    
    .data(s)
    .text(function(d,i){

      return d3.max(T_val).toFixed(2);
    })
   // .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("font-weight", "bold")
   .attr("fill", "black");





 
/////////////depth label make


var v_l_depth = [0.5, 1.5, 4.0, 7.0, 12.0, 18.0, 26.0, 38.0, 50.0, 66.0, 82.0, 100.0, 118.0, 138.0, 158.0, 178.0, 200.0, 222.0, 246.0, 270.0, 300.0, 330.0, 360.0, 400.0, 440.0, 480.0, 540.0, 600.0, 670.0, 740.0, 820.0];

var x2_2dheat = [];
var y2_2dheat = [];
var value_2dheat = [];

count_heat_val = 0;
       for (i = 0; i < depth_csv; i++) {//depth
                x2_2dheat.push(0);
                y2_2dheat.push(i);     
       };

var xy2_2dheat = [];
        for (i = 0; i < depth_csv; i++) {//depth
            xy2_2dheat.push( [x2_2dheat[i], y2_2dheat[i], v_l_depth[i]] );
        }




//Create the SVG Viewport
var svg_l_depth = d3.select("#l_depth").append("svg")
                                     .attr("width",25)
                                     .attr("height",500);

var text = svg_l_depth.selectAll("text")
                        .data(xy2_2dheat)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text////////////////////////////////////////////////////深さの食べるかbakkudayのラベルモメモリfg
                 .attr("x", function(d) { return 20; })
                 .attr("y", function(d) {  return  yScale2(d[1]); })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return d[2]; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");





var x2_2dheat = [];
var y2_2dheat = [];
var value_2dheat = [];

count_heat_val = 0;

      for (j = 0; j < day_csv; j++) {//depth
                x2_2dheat.push(j);
                y2_2dheat.push(0);        
        }

//console.log(xy2_2dheat);
var xy2_2dheat = [];
      for (j = 0; j < day_csv; j++) {//depth
            xy2_2dheat.push( [x2_2dheat[j], y2_2dheat[j], value_2dheat[j]] );
        }

var svg_l_backday = d3.select("#l_backday").append("svg")
                                     .attr("width",400)
                                     .attr("height",20);

var text = svg_l_backday.selectAll("text")
                        .data(xy2_2dheat)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text
                 .attr("x", function(d) { return xScale2(d[0]); })
                 .attr("y", function(d) {  return  10; })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return d[0]; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");


var heatlabel = [1,1];

var svg_heatlabel1 = d3.select("#heatlabel1").append("svg")
                                     .attr("width",60)
                                     .attr("height",20);

var text = svg_heatlabel1.selectAll("text")
                        .data(heatlabel)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text
                 .attr("x", function(d) { return 50; })
                 .attr("y", function(d) {  return  15; })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return "Depth[m]"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");

var svg_heatlabel1 = d3.select("#heatlabel2").append("svg")
                                     .attr("width",100)
                                     .attr("height",20);

var text = svg_heatlabel1.selectAll("text")
                        .data(heatlabel)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text
                 .attr("x", function(d) { return 90; })
                 .attr("y", function(d) {  return  15; })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return "Day Back[day]"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");


var svg_heatlabel1 = d3.select("#heatlabel_cor").append("svg")
                                     .attr("width",400)
                                     .attr("height",40);

var text = svg_heatlabel1.selectAll("text")
                        .data(heatlabel)
                        .enter()
                        .append("text");

console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text
                 .attr("x", function(d) { return 80; })
                 .attr("y", function(d) {  return  25; })
                 .attr("text-anchor", "center") // テキストの位置を中央揃えに。
                 .text( function (d) { return "Correlation with Temperature"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");








/*
var svg_heatlabel1 = d3.select("#heatlabel1").selectAll("text");

s = [1,1,1];
svg_heatlabel1    
    .data(s)
    .text(function(d,i){

      return d3.min(T_val).toFixed(2);
    })
   // .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("font-weight", "bold")
   .attr("fill", "black");

*/

      //  return scale_z_lev[y] + "[m]" ;




//////////////////////////////////////////



var xScale2_colorcode = d3.scale.linear()
.domain([0,40])
.range([padding2,40-padding2])
.nice();

var yScale2_colorcode = d3.scale.linear()
.domain([0,20])
.range([padding2,20-padding2])
.nice();


/*
var svg2dheat_coloecode = d3.select("#heatcolorcode_cpue").append("svg").attr({width:w2, height:h2});
color = [0,0];

  gradient = svg2dheat_coloecode.append("svg:defs")
    .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .attr("x3", "100%")
      .attr("y3", "0%")
      .attr("x4", "100%")
      .attr("y4", "0%")

  gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FF0000")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1)


svg2dheat_coloecode.selectAll("rect")
.data(color)
.enter()
.append("rect")
.attr({
    x: function(d,i){return 0 ;},
    y: function(d,i){return 0 ;},
    width: 40,
    height: 20,
    fill: function(d,i){return "url(#gradient)";},
   // stroke: "white",
    //opacity: 0.5,
});



*/




var sort_info = d3.select("body").selectAll("#Sortlabel_var_info_number");
sort_info.text( devi_day_target + " s");

function update_sort_info (num_sort_info){
  console.log("update_sort_info " + num_sort_info)
sort_info = d3.select("body").selectAll("#Sortlabel_var_info_number");
sort_info.text( num_sort_info + " " +unit_sort_info);
}







//////////////////////////////////////////////////pathline info rabel

//////////////variavle ravel
var valinfo_pathline = ["S","T","水塊"];//,"渦"

var v_l_depth = [0.5, 1.5, 4.0, 7.0, 12.0, 18.0, 26.0, 38.0, 50.0, 66.0, 82.0, 100.0, 118.0, 138.0, 158.0, 178.0, 200.0, 222.0, 246.0, 270.0, 300.0, 330.0, 360.0, 400.0, 440.0, 480.0, 540.0, 600.0, 670.0, 740.0, 820.0];

var x2_2dheat = [];
var y2_2dheat = [];
var value_2dheat = [];

count_heat_val = 0;
       for (i = 0; i < depth_csv; i++) {//depth
                x2_2dheat.push(0);
                y2_2dheat.push(i);     
       };

var xy2_2dheat = [];
        for (i = 0; i < valinfo_pathline.length; i++) {//depth
            xy2_2dheat.push( [x2_2dheat[i], y2_2dheat[i], valinfo_pathline[i]] );
        }




//Create the SVG Viewport
var svg_l_depth = d3.select("#pathline_info_variablelabel").append("svg")
                                     .attr("width",25)
                                     .attr("height",500);

var text = svg_l_depth.selectAll("text")
                        .data(xy2_2dheat)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text////////////////////////////////////////////////////
                 .attr("x", function(d) { return 20; })
                 .attr("y", function(d) {  return  yScale2(d[1]); })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return d[2]; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");



var x2_2dheat = [];////////////////////////////////////////////////////////////////////// bacak day
var y2_2dheat = [];
var value_2dheat = [];

count_heat_val = 0;

      for (j = 0; j < day_csv_for_pathtrans; j++) {//depth
                x2_2dheat.push(j);
                y2_2dheat.push(0);        
        }

//console.log(xy2_2dheat);
var xy2_2dheat = [];
      for (j = 0; j < day_csv_for_pathtrans; j++) {//depth
            xy2_2dheat.push( [x2_2dheat[j], y2_2dheat[j], value_2dheat[j]] );
        }

var svg_l_backday = d3.select("#pathline_info_backdaylabel").append("svg")
                                     .attr("width",w_svg_pathlineinfo_depthtransition)
                                     .attr("height",20);

var text = svg_l_backday.selectAll("text")
                        .data(xy2_2dheat)
                        .enter()
                        .append("text");

//console.log(xy2_2dheat);
//Add the text attributes
var textLabels = text
                 .attr("x", function(d) { return xScale2_depthtransition(d[0]); })
                 .attr("y", function(d) {  return  10; })
                 .attr("text-anchor", "end") // テキストの位置を中央揃えに。
                 .text( function (d) { return d[0]; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("font-weight", "bold")
                 .attr("fill", "black");

