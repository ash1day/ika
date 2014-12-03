console.log("study")








                   var xyin = [];
                   var xyin_fishingpoints = [];
                   var c_point = 0;
                        for (i_p = 1; i_p < points.length; i_p++){
                            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画                        
                                  xyin.push([]);
                                  for (i_d2 = 0; i_d2 < 4; i_d2++){                                                                                           
                                  //  xyin[c_point].push(points[i_p].xyz[depth_target][i_d2]);
                                   xyin[c_point] = xyin[c_point].concat(points[i_p].xyz[depth_target][i_d2]);   
                                   if (i_d2 == 0) {
                                   xyin_fishingpoints = xyin_fishingpoints.concat(points[i_p].xyz[depth_target][i_d2]);   
                                   };                                  
                                    }   
                                c_point = c_point + 1;
                                }
                            }

console.log(xyin_fishingpoints)

  var svg2 = d3.select("#study").append("svg")
      .attr({
        width: w,
        height: h,
      });
 
 var svg22 = svg2.append("g")

        var svg222 = svg22.selectAll("circle");
        var update_ocean222;
        var enter_ocean222;
        var exit_ocean222;

                   // svg222 = svg22.selectAll("circle");
                    update_ocean222 = svg222.data(xyin_fishingpoints);
                    enter_ocean222 = update_ocean222.enter();
                    exit_ocean222 = update_ocean222.exit();

                    outputData_ocean2_suikai222()
                    removeData_ocean2_suikai222()
                    updateData_ocean2_suikai222()

   function outputData_ocean2_suikai222(){
    enter_ocean222
    .append("circle")
 
    }
    function removeData_ocean2_suikai222(){     
        exit_ocean222
        .remove();

    }

    function updateData_ocean2_suikai222(){
        update_ocean222
    .attr({
        cx: function(d,i){return xScale(d[0]) - 0;},
        cy: function(d,i){return yScale(d[1]) - 0;},
        r: function(d,i){return 4;},
        fill: function(d,i){return "red";},
     //   stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });

    }

    for (i = 0; i < xyin.length; i++){

      var line = d3.svg.line()
      // interpolate指定で点のつなぎ方を指定する。
      .interpolate('basis')
      .x(function(d) {return xScale(d[0]) - padding;})
      .y(function(d) {return yScale(d[1]) - padding;});

      var path = svg2.append('path')
      .attr({
        'd': line(xyin[i]),
        'stroke': 'blue',
        'stroke-width': 2,
        'fill': 'none',
      });
        
    }




createsvg();


function createsvg () {


                   var xyin = [];
                   var c_point = 0;
                        for (i_p = 1; i_p < points.length; i_p++){
                            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画                        
                                  xyin.push([]);
                                  for (i_d2 = 0; i_d2 < 2; i_d2++){                                                                                           
                                  //  xyin[c_point].push(points[i_p].xyz[depth_target][i_d2]);
                                   xyin[c_point] = xyin[c_point].concat(points[i_p].xyz[depth_target][i_d2]);                                     
                                    }   
                                c_point = c_point + 1;
                                }
                            }
               //      console.log(xyin)             
             //       console.log(xyin[0])
            //     console.log(c_point)





svg2.selectAll("path")
             .data(xyin[5])
             .remove()
 



    for (i = 0; i < xyin.length; i++){

       line = d3.svg.line()
      // interpolate指定で点のつなぎ方を指定する。
      .interpolate('basis')
      .x(function(d) {return xScale(d[0]) - padding;})
      .y(function(d) {return yScale(d[1]) - padding;});

       path = svg2.append('path')
      .attr({
        'd': line(xyin[i]),
        'stroke': 'blue',
        'stroke-width': 2,
        'fill': 'none',
      });
        
    }






};
//createsvg2();

function createsvg2 () {
 

                   var xyin = [];
                   var c_point = 0;
                        for (i_p = 1; i_p < points.length; i_p++){
                            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画                        
                                  xyin.push([]);
                                  for (i_d2 = 0; i_d2 < 2; i_d2++){                                                                                           
                                  //  xyin[c_point].push(points[i_p].xyz[depth_target][i_d2]);
                                   xyin[c_point] = xyin[c_point].concat(points[i_p].xyz[depth_target][i_d2]);                                     
                                    }   
                                c_point = c_point + 1;
                                }
                            }
               //      console.log(xyin)             
             //       console.log(xyin[0])
            //     console.log(c_point)



 
svg2.selectAll("path")
             .data(xyin[5])
             .remove()


  var line = d3.svg.line()
      // interpolate指定で点のつなぎ方を指定する。
      .interpolate('basis')
      .x(function(d) {return xScale(d[0]) - padding;})
      .y(function(d) {return yScale(d[1]) - padding;});

  var path = svg2.append('path')
      .attr({
        'd': line(xyin[5]),
        'stroke': 'blue',
        'stroke-width': 2,
        'fill': 'none',
      });



  var line = d3.svg.line()
      // interpolate指定で点のつなぎ方を指定する。
      .interpolate('basis')
      .x(function(d) {return xScale(d[0]) - padding;})
      .y(function(d) {return yScale(d[1]) - padding;});

  var path = svg2.append('path')
      .attr({
        'd': line(xyin[3]),
        'stroke': 'blue',
        'stroke-width': 2,
        'fill': 'none',
      });



};



  var c1 = [100, 90, 30];
  var c2 = [200, 120, 20];
  var c3 = [300, 100, 20];
  var carray = [c1, c2];























