console.log("p_jsdap")

var color_suikai_fix = 0;//固定の水塊の色


var day_target_ocean = 1;
var month_target_ocean = Number(month_target)-1   ;/////0が1月
var year_target_ocean = 2006;

var z_lev_2dfiz = 0;

var day_target_ocean2 = day_target_ocean;
var month_target_ocean2 = month_target_ocean;
var year_target_ocean2 = year_target_ocean;

var date_jsdap = new Date(year_target_ocean, month_target_ocean, day_target_ocean);
var baseDate_jsdap = new Date(1970, 0, 1);
var i_date_jsdap = Math.floor((date_jsdap.getTime() - baseDate_jsdap.getTime()) / 86400000) + 719164;
 //console.log(" day_target_ocean2 =  " + day_target_ocean2)
//732344   2006 0101
 //console.log(i_date_jsdap);

//jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?S["+ (i_date_jsdap - 732313) + "][0][0][0] ", {withCredentials: true})
 //.then(function(s) {
  // console.log(s);
 //});










function det_date(day){
	date_jsdap = new Date(year_target_ocean, month_target_ocean, day);
	baseDate_jsdap = new Date(1970, 0, 1);
	i_date_jsdap = Math.floor((date_jsdap.getTime() - baseDate_jsdap.getTime()) / 86400000) + 719164;
}


var svg_ocean = d3.select("#mainocean25555")
                .append("svg")
                .attr({width:w, height:h})
                 .call(zoom);



var g_ocean = svg_ocean.append("g")


/*
    svg_ocean.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, "+ (h-padding) +" )"
    })
    .call(xAxis);

    svg_ocean.append("g")
    .attr({
        class: "axis",
        transform: "translate(" + padding + ", 0)"
    })
    .call(yAxis);
*/




//var svg = d3.select("body")
//    .call(zoom);


//d3.select(".xAxis")
 // .append("text")
  //.text("ラベル（単位）")


//[54]
var scale_z_lev = [0.5, 1.5, 4.0, 7.0, 12.0, 18.0, 26.0, 38.0, 50.0, 66.0, 82.0, 100.0, 118.0, 138.0, 158.0, 178.0, 200.0, 222.0, 246.0, 270.0, 300.0, 330.0, 360.0, 400.0, 440.0, 480.0, 540.0, 600.0, 670.0, 740.0, 820.0, 900.0, 1000.0, 1100.0, 1200.0, 1350.0, 1500.0, 1650.0, 1800.0, 2000.0, 2250.0, 2500.0, 2750.0, 3000.0, 3250.0, 3500.0, 3750.0, 4000.0, 4250.0, 4500.0, 4750.0, 5000.0, 5400.0, 6000.0];
//[442]
var scale_y_lat = [14.8, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9, 16.0, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8, 16.9, 17.0, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.9, 18.0, 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8, 18.9, 19.0, 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8, 19.9, 20.0, 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21.0, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0, 22.1, 22.2, 22.3, 22.4, 22.5, 22.6, 22.7, 22.8, 22.9, 23.0, 23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 24.0, 24.1, 24.2, 24.3, 24.4, 24.5, 24.6, 24.7, 24.8, 24.9, 25.0, 25.1, 25.2, 25.3, 25.4, 25.5, 25.6, 25.7, 25.8, 25.9, 26.0, 26.1, 26.2, 26.3, 26.4, 26.5, 26.6, 26.7, 26.8, 26.9, 27.0, 27.1, 27.2, 27.3, 27.4, 27.5, 27.6, 27.7, 27.8, 27.9, 28.0, 28.1, 28.2, 28.3, 28.4, 28.5, 28.6, 28.7, 28.8, 28.9, 29.0, 29.1, 29.2, 29.3, 29.4, 29.5, 29.6, 29.7, 29.8, 29.9, 30.0, 30.1, 30.2, 30.3, 30.4, 30.5, 30.6, 30.7, 30.8, 30.9, 31.0, 31.1, 31.2, 31.3, 31.4, 31.5, 31.6, 31.7, 31.8, 31.9, 32.0, 32.1, 32.2, 32.3, 32.4, 32.5, 32.6, 32.7, 32.8, 32.9, 33.0, 33.1, 33.2, 33.3, 33.4, 33.5, 33.6, 33.7, 33.8, 33.9, 34.0, 34.1, 34.2, 34.3, 34.4, 34.5, 34.6, 34.7, 34.8, 34.9, 35.0, 35.1, 35.2, 35.3, 35.4, 35.5, 35.6, 35.7, 35.8, 35.9, 36.0, 36.1, 36.2, 36.3, 36.4, 36.5, 36.6, 36.7, 36.8, 36.9, 37.0, 37.1, 37.2, 37.3, 37.4, 37.5, 37.6, 37.7, 37.8, 37.9, 38.0, 38.1, 38.2, 38.3, 38.4, 38.5, 38.6, 38.7, 38.8, 38.9, 39.0, 39.1, 39.2, 39.3, 39.4, 39.5, 39.6, 39.7, 39.8, 39.9, 40.0, 40.1, 40.2, 40.3, 40.4, 40.5, 40.6, 40.7, 40.8, 40.9, 41.0, 41.1, 41.2, 41.3, 41.4, 41.5, 41.6, 41.7, 41.8, 41.9, 42.0, 42.1, 42.2, 42.3, 42.4, 42.5, 42.6, 42.7, 42.8, 42.9, 43.0, 43.1, 43.2, 43.3, 43.4, 43.5, 43.6, 43.7, 43.8, 43.9, 44.0, 44.1, 44.2, 44.3, 44.4, 44.5, 44.6, 44.7, 44.8, 44.9, 45.0, 45.1, 45.2, 45.3, 45.4, 45.5, 45.6, 45.7, 45.8, 45.9, 46.0, 46.1, 46.2, 46.3, 46.4, 46.5, 46.6, 46.7, 46.8, 46.9, 47.0, 47.1, 47.2, 47.3, 47.4, 47.5, 47.6, 47.7, 47.8, 47.9, 48.0, 48.1, 48.2, 48.3, 48.4, 48.5, 48.6, 48.7, 48.8, 48.9, 49.0, 49.1, 49.2, 49.3, 49.4, 49.5, 49.6, 49.7, 49.833, 50.0, 50.167, 50.333, 50.5, 50.667, 50.833, 51.0, 51.167, 51.333, 51.5, 51.667, 51.833, 52.0, 52.167, 52.333, 52.5, 52.667, 52.833, 53.0, 53.167, 53.333, 53.5, 53.667, 53.833, 54.0, 54.167, 54.333, 54.5, 54.667, 54.833, 55.0, 55.167, 55.333, 55.5, 55.667, 55.833, 56.0, 56.167, 56.333, 56.5, 56.667, 56.833, 57.0, 57.167, 57.333, 57.5, 57.667, 57.833, 58.0, 58.167, 58.333, 58.5, 58.667, 58.833, 59.0, 59.167, 59.333, 59.5, 59.667, 59.833, 60.0, 60.167, 60.333, 60.5, 60.667, 60.833, 61.0, 61.167, 61.333, 61.5, 61.667, 61.833, 62.0, 62.167, 62.333, 62.5, 62.667, 62.833, 63.0, 63.167, 63.333, 63.5, 63.667, 63.833, 64.0, 64.167, 64.333, 64.5, 64.667, 64.833, 65.0];
//[673]
var scale_x_lon = [116.8, 116.9, 117.0, 117.1, 117.2, 117.3, 117.4, 117.5, 117.6, 117.7, 117.8, 117.9, 118.0, 118.1, 118.2, 118.3, 118.4, 118.5, 118.6, 118.7, 118.8, 118.9, 119.0, 119.1, 119.2, 119.3, 119.4, 119.5, 119.6, 119.7, 119.8, 119.9, 120.0, 120.1, 120.2, 120.3, 120.4, 120.5, 120.6, 120.7, 120.8, 120.9, 121.0, 121.1, 121.2, 121.3, 121.4, 121.5, 121.6, 121.7, 121.8, 121.9, 122.0, 122.1, 122.2, 122.3, 122.4, 122.5, 122.6, 122.7, 122.8, 122.9, 123.0, 123.1, 123.2, 123.3, 123.4, 123.5, 123.6, 123.7, 123.8, 123.9, 124.0, 124.1, 124.2, 124.3, 124.4, 124.5, 124.6, 124.7, 124.8, 124.9, 125.0, 125.1, 125.2, 125.3, 125.4, 125.5, 125.6, 125.7, 125.8, 125.9, 126.0, 126.1, 126.2, 126.3, 126.4, 126.5, 126.6, 126.7, 126.8, 126.9, 127.0, 127.1, 127.2, 127.3, 127.4, 127.5, 127.6, 127.7, 127.8, 127.9, 128.0, 128.1, 128.2, 128.3, 128.4, 128.5, 128.6, 128.7, 128.8, 128.9, 129.0, 129.1, 129.2, 129.3, 129.4, 129.5, 129.6, 129.7, 129.8, 129.9, 130.0, 130.1, 130.2, 130.3, 130.4, 130.5, 130.6, 130.7, 130.8, 130.9, 131.0, 131.1, 131.2, 131.3, 131.4, 131.5, 131.6, 131.7, 131.8, 131.9, 132.0, 132.1, 132.2, 132.3, 132.4, 132.5, 132.6, 132.7, 132.8, 132.9, 133.0, 133.1, 133.2, 133.3, 133.4, 133.5, 133.6, 133.7, 133.8, 133.9, 134.0, 134.1, 134.2, 134.3, 134.4, 134.5, 134.6, 134.7, 134.8, 134.9, 135.0, 135.1, 135.2, 135.3, 135.4, 135.5, 135.6, 135.7, 135.8, 135.9, 136.0, 136.1, 136.2, 136.3, 136.4, 136.5, 136.6, 136.7, 136.8, 136.9, 137.0, 137.1, 137.2, 137.3, 137.4, 137.5, 137.6, 137.7, 137.8, 137.9, 138.0, 138.1, 138.2, 138.3, 138.4, 138.5, 138.6, 138.7, 138.8, 138.9, 139.0, 139.1, 139.2, 139.3, 139.4, 139.5, 139.6, 139.7, 139.8, 139.9, 140.0, 140.1, 140.2, 140.3, 140.4, 140.5, 140.6, 140.7, 140.8, 140.9, 141.0, 141.1, 141.2, 141.3, 141.4, 141.5, 141.6, 141.7, 141.8, 141.9, 142.0, 142.1, 142.2, 142.3, 142.4, 142.5, 142.6, 142.7, 142.8, 142.9, 143.0, 143.1, 143.2, 143.3, 143.4, 143.5, 143.6, 143.7, 143.8, 143.9, 144.0, 144.1, 144.2, 144.3, 144.4, 144.5, 144.6, 144.7, 144.8, 144.9, 145.0, 145.1, 145.2, 145.3, 145.4, 145.5, 145.6, 145.7, 145.8, 145.9, 146.0, 146.1, 146.2, 146.3, 146.4, 146.5, 146.6, 146.7, 146.8, 146.9, 147.0, 147.1, 147.2, 147.3, 147.4, 147.5, 147.6, 147.7, 147.8, 147.9, 148.0, 148.1, 148.2, 148.3, 148.4, 148.5, 148.6, 148.7, 148.8, 148.9, 149.0, 149.1, 149.2, 149.3, 149.4, 149.5, 149.6, 149.7, 149.8, 149.9, 150.0, 150.1, 150.2, 150.3, 150.4, 150.5, 150.6, 150.7, 150.8, 150.9, 151.0, 151.1, 151.2, 151.3, 151.4, 151.5, 151.6, 151.7, 151.8, 151.9, 152.0, 152.1, 152.2, 152.3, 152.4, 152.5, 152.6, 152.7, 152.8, 152.9, 153.0, 153.1, 153.2, 153.3, 153.4, 153.5, 153.6, 153.7, 153.8, 153.9, 154.0, 154.1, 154.2, 154.3, 154.4, 154.5, 154.6, 154.7, 154.8, 154.9, 155.0, 155.1, 155.2, 155.3, 155.4, 155.5, 155.6, 155.7, 155.8, 155.9, 156.0, 156.1, 156.2, 156.3, 156.4, 156.5, 156.6, 156.7, 156.8, 156.9, 157.0, 157.1, 157.2, 157.3, 157.4, 157.5, 157.6, 157.7, 157.8, 157.9, 158.0, 158.1, 158.2, 158.3, 158.4, 158.5, 158.6, 158.7, 158.8, 158.9, 159.0, 159.1, 159.2, 159.3, 159.4, 159.5, 159.6, 159.7, 159.833, 160.0, 160.167, 160.333, 160.5, 160.667, 160.833, 161.0, 161.167, 161.333, 161.5, 161.667, 161.833, 162.0, 162.167, 162.333, 162.5, 162.667, 162.833, 163.0, 163.167, 163.333, 163.5, 163.667, 163.833, 164.0, 164.167, 164.333, 164.5, 164.667, 164.833, 165.0, 165.167, 165.333, 165.5, 165.667, 165.833, 166.0, 166.167, 166.333, 166.5, 166.667, 166.833, 167.0, 167.167, 167.333, 167.5, 167.667, 167.833, 168.0, 168.167, 168.333, 168.5, 168.667, 168.833, 169.0, 169.167, 169.333, 169.5, 169.667, 169.833, 170.0, 170.167, 170.333, 170.5, 170.667, 170.833, 171.0, 171.167, 171.333, 171.5, 171.667, 171.833, 172.0, 172.167, 172.333, 172.5, 172.667, 172.833, 173.0, 173.167, 173.333, 173.5, 173.667, 173.833, 174.0, 174.167, 174.333, 174.5, 174.667, 174.833, 175.0, 175.167, 175.333, 175.5, 175.667, 175.833, 176.0, 176.167, 176.333, 176.5, 176.667, 176.833, 177.0, 177.167, 177.333, 177.5, 177.667, 177.833, 178.0, 178.167, 178.333, 178.5, 178.667, 178.833, 179.0, 179.167, 179.333, 179.5, 179.667, 179.833, 180.0, 180.167, 180.333, 180.5, 180.667, 180.833, 181.0, 181.167, 181.333, 181.5, 181.667, 181.833, 182.0, 182.167, 182.333, 182.5, 182.667, 182.833, 183.0, 183.167, 183.333, 183.5, 183.667, 183.833, 184.0, 184.167, 184.333, 184.5, 184.667, 184.833, 185.0, 185.167, 185.333, 185.5, 185.667, 185.833, 186.0, 186.167, 186.333, 186.5, 186.667, 186.833, 187.0, 187.167, 187.333, 187.5, 187.667, 187.833, 188.0, 188.167, 188.333, 188.5, 188.667, 188.833, 189.0, 189.167, 189.333, 189.5, 189.667, 189.833, 190.0, 190.167, 190.333, 190.5, 190.667, 190.833, 191.0, 191.167, 191.333, 191.5, 191.667, 191.833, 192.0, 192.167, 192.333, 192.5, 192.667, 192.833, 193.0, 193.167, 193.333, 193.5, 193.667, 193.833, 194.0, 194.167, 194.333, 194.5, 194.667, 194.833, 195.0, 195.167, 195.333, 195.5, 195.667, 195.833, 196.0, 196.167, 196.333, 196.5, 196.667, 196.833, 197.0, 197.167, 197.333, 197.5, 197.667, 197.833, 198.0, 198.167, 198.333, 198.5, 198.667, 198.833, 199.0, 199.167, 199.333, 199.5, 199.667, 199.833, 200.0, 200.167];




var s_w_x = S_masterX_2dmap;///緯度経度の値　ウィンドウ幅
var e_w_x = E_masterX_2dmap;
var s_w_y = S_masterY_2dmap;
var e_w_y = E_masterY_2dmap;
var s_w_z = 0;//mの深さ1スライスのみ取り出してる
var e_w_z = 1;
var start_scale_x_lon;
var end_scale_x_lon;
var start_scale_y_lat;
var end_scale_y_lat;
var start_scale_z_lev;
var end_scale_z_lev;
var variable = "S";
var count_jsd = 0;


            for (i = 0; i < scale_x_lon.length; i++){
            	if ((s_w_x<scale_x_lon[i]) && (count_jsd == 0)) {//
            		start_scale_x_lon = i;
            		count_jsd  = 1;
                }
                else if ((scale_x_lon[i]>e_w_x) && (count_jsd == 1) ){//
            		end_scale_x_lon = i-1;
            		count_jsd = 0;
            		break
                }
            }
            for (i = 0; i < scale_y_lat.length; i++){
            	if ((s_w_y<scale_y_lat[i]) && (count_jsd == 0)) {//
            		start_scale_y_lat = i;
            		count_jsd  = 1;
                }
                else if ((scale_y_lat[i]>e_w_y) && (count_jsd == 1) ){//
            		end_scale_y_lat = i-1;
            		count_jsd = 0;
            		break
                }
            }
            for (i = 0; i < scale_z_lev.length; i++){
            	if ((s_w_z<scale_z_lev[i]) && (count_jsd == 0)) {//
            		start_scale_z_lev = i;///////////////////////////zのみ違う
            		count_jsd  = 1;
                }
                else if ((scale_z_lev[i]>e_w_z) && (count_jsd == 1) ){//
            		end_scale_z_lev = i-1;
            		count_jsd = 0;
            		break
                }
            }


var num_totalindex_width = end_scale_x_lon - start_scale_x_lon + 1;
var num_totalindex_height = end_scale_y_lat - start_scale_y_lat + 1;
//console.log(num_totalindex_width)
//console.log(num_totalindex_height)
//console.log(num_totalindex_height * num_totalindex_width)


    	var p_ocean = g_ocean.selectAll("circle");
        var update_ocean;
        var enter_ocean;
        var exit_ocean;

        var p_pathline_text = g_ocean.selectAll("text");
        var update_pathline_text;
        var enter_pathline_text;
        var exit_pathline_text;




    function outputData_ocean(){
    enter_ocean.append("circle")
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_2d_ocean (d[3]);},
        fill: function(d,i){return get_color_target_2d_ocean (d[3]);}
        });
    }

    function removeData_ocean(){
	    exit_ocean
	    .remove();

    }

    function updateData_ocean(){
        update_ocean
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_2d_ocean (d[3]);},
        fill: function(d,i){return get_color_target_2d_ocean (d[3]);}
    	});

    }







var minYaxis = 30;
var maxYaxis = 50;

var min_val_S = 32;///使ってない尾と思
var max_val_S = 35;
var min_val_T = -5;
var max_val_T = 30;

var thre_island_val_S = 0;

//var min_val = min_val_S;
//var max_val = max_val_S;
var thre_island_val = thre_island_val_S;


var thre_island_S = 0;
var thre_island_T = 0;

var min_T_average = 0;
var max_T_average = 25;
var min_S_average = 32;
var max_S_average = 34.5;
var min_dence_average = 22;
var max_dence_average = 30;


var min_T_OW = min_T_average;//OW
var max_T_OW = 7;
var min_S_OW = 33.0;
var max_S_OW = 33.7;
var min_dence_OW = min_dence_average;
var max_dence_OW = 26.7;
var min_T_KW = min_T_average;//KW
var max_T_KW = max_T_average;
var min_S_KW = 34.2;
var max_S_KW = max_S_average;
var min_dence_KW = 24.0;
var max_dence_KW = 26.7;
var min_T_TW = 5;///TW
var max_T_TW = max_T_average;
var min_S_TW = 33.7;
var max_S_TW = 34.2;
var min_dence_TW = 24.0;
var max_dence_TW = max_dence_average;
var min_T_SOW = 7;//SOW
var max_T_SOW = max_T_average;
var min_S_SOW = 33.0;
var max_S_SOW = 33.7;
var min_dence_SOW = min_dence_average;
var max_dence_SOW = max_dence_average;
var min_T_CO = min_T_average;//COW
var max_T_CO = 2;
var min_S_CO = min_S_average;
var max_S_CO = 33;
var min_dence_CO = min_dence_average;
var max_dence_CO = max_dence_average;
var min_T_CL = min_T_average;//CLW
var max_T_CL = max_T_average;
var min_S_CL = min_S_average;
var max_S_CL = max_S_average;
var min_dence_CL = 26.7;
var max_dence_CL = max_dence_average;
var min_T_SCO = 2;//COW
var max_T_SCO = max_T_average;
var min_S_SCO = min_S_average;
var max_S_SCO = 33;
var min_dence_SCO = min_dence_average;
var max_dence_SCO = max_dence_average;








var minT_suikai = min_T_OW;
var maxT_suikai = max_T_OW;
var minS_suikai = min_S_OW;
var maxS_suikai = max_S_OW;
var mindence_suikai = min_dence_OW;
var maxdence_suikai = max_dence_OW;


var minT = minT_suikai;
var maxT = maxT_suikai;
var minS = minS_suikai;
var maxS = maxS_suikai;
var mindence = mindence_suikai;
var maxdence = maxdence_suikai;



var v_minS = 0;
var v_maxS = 255;

var Scale_S_color;
get_Scale_S_color (minS,maxS)


var v_minT = 0;
var v_maxT = 255;


var Scale_T_color;
get_Scale_T_color (minT,maxT)


function get_Scale_S_color (minS,maxS){

Scale_S_color = d3.scale.linear()
.domain([minS,maxS])
.range([v_minS,v_maxS])
.nice();

}



function get_Scale_T_color (minT,maxT){

Scale_T_color = d3.scale.linear()
.domain([minT,maxT])
.range([v_minT,v_maxT])
.nice();

}





function get_R_2d_ocean (val){
  var R_S_2d = 1.7;
  /*
        if( val < 10 ) {
            R_S_2d = 1.7;
            }
        else if( (10 < val) && (val < minS) ) {
            R_S_2d = 1.7;
            }
        else if(( minS < val)) {
            R_S_2d = 1.7;
            }
  */

  return R_S_2d ;
}





function get_color_target_2d_ocean (val){
    var r = 0;
    var g = 0;
    var b = 0;

//console.log(val )
//console.log(typeof(val) )
    if( val < 30 ) {
    	g = 255;
    	}

    else if( val < minS ) {
    	b = 200;
    	}
    else {
    	r = parseInt(Scale_S_color(val));
    	//r = Scale_S_color(val);
    //	 console.log(val )
 //console.log(r )
    	}


    return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
  }



function draw_points_2d_ocean(){//////海書くだけ

det_date(day_target_ocean2)
console.log(z_lev_2dfiz)
console.log(i_date_jsdap)
        jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+variable+"["+ (i_date_jsdap - 732313) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
         .then(function(data_jsdap) {
        var xyzvar = [];
            for (var z_js = start_scale_z_lev; z_js <= end_scale_z_lev; z_js++){
                for (var y_js = start_scale_y_lat; y_js <= end_scale_y_lat; y_js++){
                    for (var x_js = start_scale_x_lon; x_js <= end_scale_x_lon; x_js++){
                        xyzvar.push( [scale_x_lon[x_js], scale_y_lat[y_js], scale_z_lev[z_js],data_jsdap[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon]] );//x,y,z,var
                    }
                }
            }
         p_ocean = g_ocean.selectAll("circle");
         update_ocean = p_ocean.data(xyzvar);
         enter_ocean = update_ocean.enter();
         exit_ocean = update_ocean.exit();

        outputData_ocean()
        removeData_ocean()
        updateData_ocean()

         });
}

var length_d_ocean;


function draw_points_2d_ocean_pathline(det_day_3d){////1つの変数の描画　とパスライン
console.log("draw_points_2d_ocean_pathline")
console.log("day_target_ocean2"  +  day_target_ocean2)
det_date(day_target_ocean2)


console.log(det_day_3d)
console.log(z_lev_2dfiz)
console.log(i_date_jsdap)






        jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+variable+"["+ (i_date_jsdap - 732313) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
         .then(function(data_jsdap) {
        var xyzvar = [];
            for (var z_js = start_scale_z_lev; z_js <= end_scale_z_lev; z_js++){
                for (var y_js = start_scale_y_lat; y_js <= end_scale_y_lat; y_js++){
                    for (var x_js = start_scale_x_lon; x_js <= end_scale_x_lon; x_js++){
                        xyzvar.push( [scale_x_lon[x_js], scale_y_lat[y_js], scale_z_lev[z_js],data_jsdap[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon]] );//x,y,z,var
                    }
                }
            }

        var xyin = [];
            for (i_p = 1; i_p < points.length; i_p++){
                for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
                    if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                        xyin = xyin.concat(points[i_p].xyz[depth_target][i_d2]);
                        }
                    }
                }
       // console.log(xyzvar)
       // console.log(xyin)
        //console.log(xyzvar);
        length_d_ocean = xyzvar.length;
        xyzvar = xyzvar.concat(xyin);
       // console.log(xyzvar)
       if (variable == "S") {
            minS = min_val_S ;
            maxS = max_val_S ;
            get_Scale_S_color (minS,maxS)
       }
       else if (variable == "T") {
            minT = min_val_T ;
            maxT = max_val_T ;
            get_Scale_T_color (minT,maxT)
       };


         p_ocean = g_ocean.selectAll("circle");
         update_ocean = p_ocean.data(xyzvar);
         enter_ocean = update_ocean.enter();
         exit_ocean = update_ocean.exit();

        outputData_ocean2()
        removeData_ocean2()
        updateData_ocean2()


g_ocean.selectAll("text")
    .data(xyzvar)
    .enter()
    .append("text");

g_ocean.selectAll("text")
    .data(xyzvar)
    .text(function(d,i){
        return get_text_pathline (i);})
    .attr("x", function(d) {
        return xScale(d[0]) ;
    })
    .attr("y", function(d) {
        return yScale(d[1]) ;
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", "black");





         });
}
        var svg_pathline_2d = d3.select("#pathline")/////////////////////////////////////
            .append("svg")
            .attr({width:w, height:h})
            .call(zoom);

        var svg_pathline_2d_g = svg_pathline_2d.append("g")

        var p_svg_pathline_2d_g = svg_pathline_2d_g.selectAll("circle");
        var update_pathline_circle;
        var enter_pathline_circle;
        var exit_pathline_circle;
 var line;
var path ;
var fishingpointscpue_gloval = [];


//draw_points_2d_ocean_pathline_suikai(1)

    svg_pathline_2d.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, "+ (h-padding) +" )"
    })
    .call(xAxis);

    svg_pathline_2d.append("g")
    .attr({
        class: "axis",
        transform: "translate(" + padding + ", 0)"
    })
    .call(yAxis);





        var svg_pathline_2d_zoom = d3.select("#zoomocean_pathline")/////////////////////////////////////
            .append("svg")
            .attr({width:w_zoom, height:h_zoom})
            .call(zoom);

        var svg_pathline_2d_g_zoom = svg_pathline_2d_zoom.append("g")

        var p_svg_pathline_2d_g_zoom = svg_pathline_2d_g_zoom.selectAll("circle");
        var update_pathline_circle_zoom;
        var enter_pathline_circle_zoom;
        var exit_pathline_circle_zoom;
 var line_zoom;
var path_zoom ;
var fishingpointscpue_gloval = [];


//draw_points_2d_ocean_pathline_suikai(1)

    svg_pathline_2d_zoom.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, "+ (h_zoom-padding_zoom) +" )"
    })
    .call(xAxis_zoom);

    svg_pathline_2d_zoom.append("g")
    .attr({
        class: "axis",
        transform: "translate(" + padding_zoom + ", 0)"
    })
    .call(yAxis_zoom);












function draw_onlyland(xyzvar){////
    console.log("landdddddddd")
                    p_ocean = g_ocean.selectAll("circle");
                    update_ocean = p_ocean.data(xyzvar);
                    enter_ocean = update_ocean.enter();
                    exit_ocean = update_ocean.exit();

                    outputData_ocean2_suikai()
                    removeData_ocean2_suikai()
                    updateData_ocean2_suikai()

}




function draw_points_2d_ocean_pathline_suikai(det_day_3d){////水塊と　パスラインと　海　リク

console.log("day_target_ocean2"  +  day_target_ocean2)
det_date(day_target_ocean2)

console.log(day_target_ocean2)
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

                  // var xyin = [];
                    //    for (i_p = 1; i_p < points.length; i_p++){
                     //       for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
                                   //   console.log( "i_p = " + i_p + "  points.length = " + points.length)
                                   ///    console.log( "i_d2 = " + i_d2 + "  det_day_3d = " + det_day_3d)
                                   // console.log("points[i_p].year = " + points[i_p].year)

                     //           if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                     //               xyin = xyin.concat(points[i_p].xyz[depth_target][i_d2]);
                                   // console.log("ff")
                     //               }
                     //           }
                     //       }

                   // console.log(xyin)
                    //console.log(xyzvar);
                    length_d_ocean = xyzvar.length;
                 //   xyzvar = xyzvar.concat(xyin);
                 //   console.log(xyzvar)
draw_pathline(det_day_3d);







                    p_ocean = g_ocean.selectAll("circle");
                    update_ocean = p_ocean.data(xyzvar);
                    enter_ocean = update_ocean.enter();
                    exit_ocean = update_ocean.exit();

                    outputData_ocean2_suikai()
                    removeData_ocean2_suikai()
                    updateData_ocean2_suikai()


                    g_ocean.selectAll("text")
                        .data(xyzvar)
                        .enter()
                        .append("text");

                    g_ocean.selectAll("text")
                        .data(xyzvar)
                        .text(function(d,i){
                            return get_text_pathline (i);})
                        .attr("x", function(d) {
                            return xScale(d[0]) ;
                        })
                        .attr("y", function(d) {
                            return yScale(d[1]) ;
                        })
                        .attr("font-family", "sans-serif")
                       .attr("font-size", "12px")
                       .attr("fill", "black")
                       //.attr("stroke", "white")
                       ;





                 });
        });
}



var n_c_point_gloval;//1日当たりの漁獲座標の数を把握


function draw_pathline(devi_day_target){
    console.log("draw_pathlinedraw_pathlinedraw_pathlinedraw_pathlinedraw_pathline");
    console.log(devi_day_target);
                   var temp_xyin;
                   var temp_xyin2;
                   var xyin = [];
                   var xyin_fishingpoints = [];
                   var temp_xyin_everyoneday;
                   var xyin_everyoneday = [];
                   var c_point = 0;
                   console.log("draw_pathline")

                   draw_pathline_daydev_remove();///////////////////////ここにパスライン消す用のおく
                   if (draw3dcode == 1) {
                      remove_pathlinefor3dtube ();
                   };

                        for (i_p = 1; i_p < points.length; i_p++){
                            if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                                  xyin.push([]);
                                  for (i_d2 = 0; i_d2 < devi_day_target; i_d2++){
                                  //  xyin[c_point].push(points[i_p].xyz[depth_target][i_d2]);
                                  if (i_d2 == 0) {///1点しかない初日用
                                    temp_xyin2 = [];
                                    temp_xyin2 = temp_xyin2.concat(points[i_p].xyz[depth_target][i_d2]);
                                    temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2],points[i_p].T[depth_target][i_d2]);
                                    xyin[c_point] = xyin[c_point].concat(temp_xyin2);


                                    }
                                  else if (i_d2 > 0) {///
                                  //  console.log("dd")
                                    temp_xyin2 = [];
                                    temp_xyin2 = temp_xyin2.concat(points[i_p].xyz[depth_target][i_d2]);
                                  //  temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2-1]);//最初のは前の日やカラ
                                   // temp_xyin2[n_devi_day-1] = temp_xyin2[n_devi_day-1].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2]);// さいごのがta-rgetdayやから
                                    temp_xyin2[0] = temp_xyin2[0].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2],points[i_p].T[depth_target][i_d2],(temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]),temp_xyin2[n_devi_day-1][2]);//最初でしか色付けられないからここに色付ける要素いれる
                                    xyin[c_point] = xyin[c_point].concat(temp_xyin2);
                                    draw_pathline_daydev(temp_xyin2);////これ流跡線   テｍｐ　の方でやってる
                                    if (draw3dcode == 1) {
                                    draw_pathlinefor3dtube(temp_xyin2,i_p,i_d2);
                                        };



                                   // console.log((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]))
                                   /*
                                    if ( Math.abs((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2])) > Math.abs(max_updown)) {
                                        console.log("高低差上げしい！！！")
                                        console.log((temp_xyin2[n_devi_day-1][2] - temp_xyin2[0][2]))
                                    };*/
                                   // console.log(temp_xyin2)
                                  // xyin[c_point] = xyin[c_point].concat(points[i_p].xyz[depth_target][i_d2]);
                                //    temp_xyin_everyoneday = [];///一日前毎の座標のデータいれる　漁獲日のはなしで
                                 //   temp_xyin_everyoneday = temp_xyin_everyoneday.concat(points[i_p].xyz[depth_target][i_d2][n_devi_day-1]);
                                 //   console.log(temp_xyin_everyoneday);
                                   // temp_xyin_everyoneday[n_devi_day-1] = temp_xyin_everyoneday[n_devi_day-1].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2]);// さいごのがta-rgetdayやから
                                   // console.log(temp_xyin_everyoneday);
                                 //   xyin_everyoneday[c_point] = xyin_everyoneday[c_point].concat(temp_xyin_everyoneday);
 //console.log(c_point);
 //console.log(xyin);
  //console.log(xyin[c_point]);
                                    temp_xyin_everyoneday = [];
                                    temp_xyin_everyoneday = temp_xyin_everyoneday.concat(points[i_p].xyz[depth_target][i_d2][n_devi_day-1],points[i_p].cpue,points[i_p].S[depth_target][i_d2],points[i_p].T[depth_target][i_d2],(points[i_p].xyz[depth_target][i_d2][n_devi_day-1][2] - points[i_p].xyz[depth_target][i_d2][0][2]),points[i_p].xyz[depth_target][i_d2][n_devi_day-1][2]);
                                  //  temp_xyin_everyoneday[0] = temp_xyin_everyoneday[0].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2-1]);//最初のは前の日やカラ
                                   // temp_xyin_everyoneday[n_devi_day-1] = temp_xyin_everyoneday[n_devi_day-1].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2]);// さいごのがta-rgetdayやから
                                     //console.log(temp_xyin_everyoneday);
                                  //  temp_xyin_everyoneday = temp_xyin_everyoneday.concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2],points[i_p].T[depth_target][i_d2]);//最初でしか色付けられないからここに色付ける要素いれる  z は密度計算用
                                  //  console.log(temp_xyin_everyoneday);
                                    xyin_everyoneday = xyin_everyoneday.concat([temp_xyin_everyoneday]);  //●書くときは全部並べて格納
 //console.log(xyin_everyoneday);
                                    }




                                   if (i_d2 == 0) {///circleで漁獲店書くためのもの
                             //       console.log("depth_target = " + depth_target)
                                    //                                    console.log( points[i_p].xyz[depth_target])
                                    temp_xyin = [];
                                    temp_xyin = temp_xyin.concat(points[i_p].xyz[depth_target][i_d2]);
                                    temp_xyin[0] = temp_xyin[0].concat(points[i_p].cpue,points[i_p].S[depth_target][i_d2],points[i_p].T[depth_target][i_d2]);
                                    xyin_fishingpoints = xyin_fishingpoints.concat(temp_xyin);
                                   };
                                    }

                                c_point = c_point + 1;//漁獲店用
                                }
                            }


                            n_c_point_gloval = c_point;
                            fishingpointscpue_gloval = xyin_fishingpoints;
                     //   console.log(xyin_everyoneday)
                                //                console.log(xyin[0])
                        xyin_fishingpoints = xyin_fishingpoints.concat(xyin_everyoneday);   //////ここで連結してるから　xyin_fishingpoints　これを使えばいい
                      // console.log(xyin_fishingpoints)

                        if (draw3dcode == 1) {
                         draw_pathlinefor3d_sphere (xyin_fishingpoints)////for3d
                        };

//mainocean_pathline(xyin,xyin_fishingpoints);
//function mainocean_pathline(xyin,xyin_fishingpoints){
    /*
                        svg_pathline_2d.selectAll("path")
                             .remove()

                        for (i_everypath = 0; i_everypath < xyin.length; i_everypath++){
                           line = d3.svg.line()
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale(d[0]) - 0;})
                          .y(function(d) {return yScale(d[1]) - 0;});

                           path = svg_pathline_2d.append('path')
                          .attr({
                            'd': line(xyin[i_everypath]),
                            'stroke': (function(d,i) {
                               // console.log("fdsgts i_everypath = " + i_everypath)
                               // console.log( xyin[i_everypath])
                               // console.log("fdsgts i = " + i)
                                return get_strokecolor_pathline(i,xyin[i_everypath][0][3]) ;}),
                            'stroke-width': (function(d,i) {return get_strokewidth_pathline(i,xyin[i_everypath][0][3]);}),
                            'fill': 'none',
                          });
                        }
*/




                          function draw_pathline_daydev_remove(temp_xyin2){
                                svg_pathline_2d.selectAll("path")
                               .remove()
                                  svg_pathline_2d_zoom.selectAll("path")
                                .remove()
                          }

                          function draw_pathline_daydev(temp_xyin2){


                                                       line = d3.svg.line()
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale(d[0]) - 0;})
                          .y(function(d) {return yScale(d[1]) - 0;});

                           path = svg_pathline_2d.append('path')
                       /*     .on("click", function(d,i) {
                               // change_heat2d ( d[0],d[1] )
                               console.log("rrr")
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
                                })*/
                          .attr({
                            'd': line(temp_xyin2),
                            'stroke': (function(d,i) {
                               // console.log("fdsgts i_everypath = " + i_everypath)
                               // console.log( xyin[i_everypath])
                               // console.log("fdsgts i = " + i)
                                return get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) ;}),
                            'stroke-width': (function(d,i) {return get_strokewidth_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5]);}),
                            'fill': 'none',
                          });


                           line = d3.svg.line()
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale_zoom(d[0]) - 0;})
                          .y(function(d) {return yScale_zoom(d[1]) - 0;});


                           path = svg_pathline_2d_zoom.append('path')
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
                            'd': line(temp_xyin2),
                            'stroke': (function(d,i) {
                                return get_strokecolor_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5],temp_xyin2[0][6],temp_xyin2[0][7]) ;}),
                            'stroke-width': (function(d,i) {return get_strokewidth_pathline(i,temp_xyin2[0][3],temp_xyin2[0][4],temp_xyin2[0][5]);}),
                            'fill': 'none',
                          });


                          }

//console.log(xyin_fishingpoints)


                    p_svg_pathline_2d_g = svg_pathline_2d_g.selectAll("circle");
                   // svg222 = svg22.selectAll("circle");
                    update_pathline_circle = p_svg_pathline_2d_g.data(xyin_fishingpoints);
                    enter_pathline_circle = update_pathline_circle.enter();
                    exit_pathline_circle = update_pathline_circle.exit();
                    outputData_pathline_circle()
                    removeData_pathline_circle()
                    updateData_pathline_circle()


                           //     svg_pathline_2d.selectAll("path")
                           //    .remove()



//}
/*
//function mainocean_pathline(xyin,xyin_fishingpoints){/////ズーム画面用
                        svg_pathline_2d_zoom.selectAll("path")
                             .remove()

                        for (i_everypath = 0; i_everypath < xyin.length; i_everypath++){
                           line = d3.svg.line()
                          // interpolate指定で点のつなぎ方を指定する。
                          .interpolate('basis')
                          .x(function(d) {return xScale_zoom(d[0]) - 0;})
                          .y(function(d) {return yScale_zoom(d[1]) - 0;});

                           path = svg_pathline_2d_zoom.append('path')
                          .attr({
                            'd': line(xyin[i_everypath]),
                            'stroke': (function(d,i) { return get_strokecolor_pathline(i,xyin[i_everypath][0][3]) ;}),
                            'stroke-width': (function(d,i) {return get_strokewidth_pathline_zoom(i,xyin[i_everypath][0][3]);}),
                            'fill': 'none',
                          });
                        }
                        */
                    p_svg_pathline_2d_g_zoom = svg_pathline_2d_g_zoom.selectAll("circle");
                   // svg222 = svg22.selectAll("circle");
                    update_pathline_circle_zoom = p_svg_pathline_2d_g_zoom.data(xyin_fishingpoints);
                    enter_pathline_circle_zoom = update_pathline_circle_zoom.enter();
                    exit_pathline_circle_zoom = update_pathline_circle_zoom.exit();
                    outputData_pathline_circle_zoom()
                    removeData_pathline_circle_zoom()
                    updateData_pathline_circle_zoom()
//}

}

















    function get_text_pathline(i){

/*
    if(  i % (1 + (n_devi_day*Number(devi_day_target)) )  == 0 ) {
        return year_target +","+ month_target +","+ day_target;
            }
*/

    if(  i  == 0 ) {
       // console.log(day_target)
       // return year_target +"/"+ month_target +"/"+ (day_target-devi_day_target)+".."+devi_day_target+"日前"+".."+"depth = "+depth_target+"[m]";
      // return "Ocean: ''"+ month_target +"/"+ (day_target-devi_day_target)+"'', "+"Date Back: ''"+ devi_day_target +" days'', "+"Depth: ''"+scale_z_lev[depth_target]+" m''";
     //   return  "Fishing day: ''" + month_target +"/"+ day_target + "''" + "Ocean of ''"+ month_target +"/"+ (day_target-devi_day_target)+"'', ''"+ devi_day_target +"'' days back, "+" ''"+scale_z_lev[depth_target]+"'' m of depth ";

            }

    else if( i == length_d_ocean){
       // console.log(i)
    // return year_target +"/"+ month_target +"/"+ day_target;
     // return "Fishing day: ''" + month_target +"/"+ day_target + "''";
    }



    }



    function outputData_ocean2(){
    enter_ocean.append("circle")

    }
    function removeData_ocean2(){
        exit_ocean
        .remove();

    }

    function updateData_ocean2(){
        update_ocean
    .attr({
        cx: function(d,i){return xScale(d[0]) - 0;},
        cy: function(d,i){return yScale(d[1]) - 0;},
        r: function(d,i){return get_R_2d_ocean2 (d[3],i);},
        fill: function(d,i){return get_color_target_2d_ocean2 (d[3],i);}
        });

    }



    function outputData_pathline_text(){

    enter_pathline_text.append("text")
    .text(function(d,i){
        return get_text_pathline (i);})
    .attr("x", function(d) {
        return xScale(d[0]) ;
    })
    .attr("y", function(d) {
        return yScale(d[1]) ;
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "22px")
   .attr("fill", "black");



    }
    function removeData_pathline_text(){
        exit_pathline_text
        .remove();

    }

    function updateData_pathline_text(){
    update_pathline_text.append("text")
    .text(function(d,i){
        return get_text_pathline (i);})
    .attr("x", function(d) {
        return xScale(d[0]) ;
    })
    .attr("y", function(d) {
        return yScale(d[1]) ;
    })
    .attr("font-family", "sans-serif")
   .attr("font-size", "22px")
   .attr("fill", "black");

    }


function get_R_2d_ocean2 (val,i){
  //var R_S_2d = 1.7;

    if( i < length_d_ocean ) {
        return 1.7;
    }
    else if( length_d_ocean <= i){
     return get_R_S_pathline_2d(i-length_d_ocean);
    };
}



function get_color_target_2d_ocean2 (val,i){
    var r = 0;
    var g = 0;
    var b = 0;

//console.log(val )
//console.log(typeof(val) )

        //r = Scale_S_color(val);
    //   console.log(val )
 //console.log(r )

    if( i < length_d_ocean ) {
        if( val < 0 ) {
            g = 255;
            }
        else if( val < minS ) {
            b = 200;
            }
        else {
            r = parseInt(Scale_S_color(val));
            }

        return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
    }
    else if( length_d_ocean <= i){
     return get_color_target_2d(i-length_d_ocean);
    }

  }



   function outputData_ocean2_suikai(){
    enter_ocean.append("circle")

    }
    function removeData_ocean2_suikai(){
        exit_ocean
        .remove();

    }

    function updateData_ocean2_suikai(){
        update_ocean
    .attr({
        cx: function(d,i){return xScale(d[0]) - 0;},
        cy: function(d,i){return yScale(d[1]) - 0;},
        r: function(d,i){return get_R_2d_ocean2_suikai (i,d[3],d[4],d[5]);},
        fill: function(d,i){return get_color_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);},
        stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });

    }






function get_R_2d_ocean2_suikai (i,salinity,tempereture,dence){
  var R_2d_suikai = 0;
  var average_R = 1.7;//3.6

    if( i < length_d_ocean ) {
        if( salinity < thre_island_S ) {//大陸
            R_2d_suikai = average_R;
            }
        else if( (minT < tempereture) && (tempereture < maxT)
                 && (minS < salinity) && (salinity < maxS)
                 && (mindence < dence) && (dence < maxdence ) ) {
            R_2d_suikai = average_R;
            }
        else  {
            R_2d_suikai = average_R;
            };
        return R_2d_suikai;

    }
    else if( length_d_ocean <= i){
     return get_R_S_pathline_2d(i-length_d_ocean);
    };


}


function get_color_target_2d_ocean2_suikai (i,salinity,tempereture,dence){
    var code;

    if( i < length_d_ocean ) {
        if( salinity < thre_island_S ) {//大陸
            code = "#006400";
            }
        else if( (min_T_OW < tempereture) && (tempereture < max_T_OW) //OW
                 && (min_S_OW < salinity) && (salinity < max_S_OW)
                 && (min_dence_OW < dence) && (dence < max_dence_OW ) ) {
                    code = "#6495ED";
            }

        else if( (min_T_KW < tempereture) && (tempereture < max_T_KW) //KW
                 && (min_S_KW < salinity) && (salinity < max_S_KW)
                 && (min_dence_KW < dence) && (dence < max_dence_KW ) ) {
                    code = "#FFA07A";
            }


        else  {
            //r = parseInt(Scale_S_color(val));
            code = "#F0F8FF";
            };


        return code ;
    }
    else if( length_d_ocean <= i){
     return get_color_target_2d(i-length_d_ocean);
    }

  }

function get_color_target_2d_ocean2_suikai2 (i,salinity,tempereture,dence){
    var code;

    if( i < length_d_ocean ) {
        if( salinity < thre_island_S ) {//大陸
            code = "#006400";
            }
        else if( (minT < tempereture) && (tempereture < maxT)
                 && (minS < salinity) && (salinity < maxS)
                 && (mindence < dence) && (dence < maxdence ) ) {

                if( color_suikai_fix == 0 ) {//OW
                    code = "#000080";
                }
                else if( color_suikai_fix == 1 ) {//KW
                    code = "#FFA07A";
                };


            //r = 200;
            }
        else  {
            //r = parseInt(Scale_S_color(val));
            code = "#87CEEB";
            };


        return code ;
    }
    else if( length_d_ocean <= i){
     return get_color_target_2d(i-length_d_ocean);
    }

  }








function get_color_target_2d_ocean2_suikai2 (i,salinity,tempereture,dence){
    var r = 0;
    var g = 0;
    var b = 0;

    if( i < length_d_ocean ) {
        if( salinity < thre_island_S ) {//大陸
            g = 255;
            }
        else if( (minT < tempereture) && (tempereture < maxT)
                 && (minS < salinity) && (salinity < maxS)
                 && (mindence < dence) && (dence < maxdence ) ) {
            r = parseInt(Scale_S_color(salinity));
            //r = 200;
            }
        else  {
            //r = parseInt(Scale_S_color(val));
            b = 255;
            };


        return "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")" ;
    }
    else if( length_d_ocean <= i){
     return get_color_target_2d(i-length_d_ocean);
    }

  }




function get_strokcolor_target_2d_ocean2_suikai (i,salinity,tempereture,dence){


    if( i < length_d_ocean ) {

    }
    else if( length_d_ocean <= i){
     //return "#7FFFD4";
     return;
    }

  }



















//////////////////////////////


function draw_points_2d_ocean_pathline_suikai_T(det_day_3d){////水塊と　パスラインと　海　リク

console.log("day_target_ocean2"  +  day_target_ocean2)
det_date(day_target_ocean2)

console.log(day_target_ocean2)


                jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+"T"+"["+ (i_date_jsdap - 732313) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
                 .then(function(data_jsdap_T) {

                    var xyzvar = [];
                    for (var z_js = start_scale_z_lev; z_js <= end_scale_z_lev; z_js++){
                        for (var y_js = start_scale_y_lat; y_js <= end_scale_y_lat; y_js++){
                            for (var x_js = start_scale_x_lon; x_js <= end_scale_x_lon; x_js++){
                             //   xyzvar.push( [scale_x_lon[x_js], scale_y_lat[y_js], scale_z_lev[z_js], data_jsdap_T[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon]);//x,y,z,var
                                xyzvar.push( [scale_x_lon[x_js], scale_y_lat[y_js], scale_z_lev[z_js], data_jsdap_T[0][0][0][z_js-start_scale_z_lev][y_js-start_scale_y_lat][x_js-start_scale_x_lon] ] );//x,y,z,var
                            }//get_v_dence(z[m],salinity,tempereture)
                        }
                    }

                   var xyin = [];
                        for (i_p = 1; i_p < points.length; i_p++){
                            for (i_d2 = 0; i_d2 < det_day_3d; i_d2++){
                                   //   console.log( "i_p = " + i_p + "  points.length = " + points.length)
                                   ///    console.log( "i_d2 = " + i_d2 + "  det_day_3d = " + det_day_3d)
                                   // console.log("points[i_p].year = " + points[i_p].year)

                                if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                                    xyin = xyin.concat(points[i_p].xyz[depth_target][i_d2]);
                                   // console.log("ff")
                                    }
                                }
                            }

                    //console.log(xyin)
                    console.log(xyzvar);
                    length_d_ocean = xyzvar.length;
                    xyzvar = xyzvar.concat(xyin);
                    console.log(z_lev_2dfiz)





                    p_ocean = g_ocean.selectAll("circle");
                    update_ocean = p_ocean.data(xyzvar);
                    enter_ocean = update_ocean.enter();
                    exit_ocean = update_ocean.exit();

                    outputData_ocean2_suikai_T()
                    removeData_ocean2_suikai_T()
                    updateData_ocean2_suikai_T()


                    g_ocean.selectAll("text")
                        .data(xyzvar)
                        .enter()
                        .append("text");

                    g_ocean.selectAll("text")
                        .data(xyzvar)
                        .text(function(d,i){
                            return get_text_pathline (i);})
                        .attr("x", function(d) {
                            return xScale(d[0]) ;
                        })
                        .attr("y", function(d) {
                            return yScale(d[1]) ;
                        })
                        .attr("font-family", "sans-serif")
                       .attr("font-size", "12px")
                       .attr("fill", "black")
                       //.attr("stroke", "white")
                       ;





                 });

}


   function outputData_ocean2_suikai_T(){
    enter_ocean.append("circle")

    }
    function removeData_ocean2_suikai_T(){
        exit_ocean
        .remove();

    }

    function updateData_ocean2_suikai_T(){
        update_ocean
    .attr({
        cx: function(d,i){return xScale(d[0]) - 0;},
        cy: function(d,i){return yScale(d[1]) - 0;},
        r: function(d,i){return get_R_2d_ocean2_suikai_T (i,d[3]);},
        fill: function(d,i){return get_color_target_2d_ocean2_suikai_T (i,d[3]);},
        stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai_T (i,d[3]);}
        });

    }





function get_R_2d_ocean2_suikai_T (i,tempereture){
  var R_2d_suikai = 0;
  var average_R = 3.6;

    if( i < length_d_ocean ) {
      //  if( salinity < thre_island_S ) {//大陸
         //   R_2d_suikai = average_R;
        //    }
        if( (tempereture <= 5) ) {
            R_2d_suikai = average_R;
            }
       // else  {
       //     R_2d_suikai = average_R;
       //     };
        return R_2d_suikai;

    }
    else if( length_d_ocean <= i){
     return get_R_S_pathline_2d(i-length_d_ocean);
    };


}


function get_color_target_2d_ocean2_suikai_T (i,tempereture){
    var code;

    if( i < length_d_ocean ) {

        if( (0 <= tempereture ) && (tempereture <= 5) ) {
                    code = "#0000CD";
            }
        else if(  (tempereture <= 0) ) {
                    code = "#228B22";
            }
        return code ;
    }
    else if( length_d_ocean <= i){
     return get_color_target_2d(i-length_d_ocean);
    }

  }

function get_strokcolor_target_2d_ocean2_suikai_T (i,tempereture){


    if( i < length_d_ocean ) {

    }
    else if( length_d_ocean <= i){
     //return "#7FFFD4";
     return;
    }

  }



//////////////////////////////////////////


   function outputData_pathline_circle(){
    enter_pathline_circle
    .append("circle")

    }
    function removeData_pathline_circle(){
        exit_pathline_circle
        .remove();

    }

    function updateData_pathline_circle(){
        update_pathline_circle
             .on("click", function(d,i) {
                               // change_heat2d ( d[0],d[1] )
                               console.log("rrr")
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
        cx: function(d,i){return xScale(d[0]) - 0;},
        cy: function(d,i){return yScale(d[1]) - 0;},
        r: function(d,i){return get_R_2d_pathline_first (i,d[3],d[4],d[5],d[6],d[7]);},///3:cpue,4:S,5:T,6:updawn,7:z
        fill: function(d,i){return get_pathline_circle_color (i,d[3],d[4],d[5],d[6],d[7]);},///3:cpue,4:S,5:T,6:updawn,7:z
        stroke:function(d,i){return get_strokcolor_pathline_circle (i,d[3]);}
     //   stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });
    }


   function outputData_pathline_circle_zoom(){
    enter_pathline_circle_zoom
    .append("circle")

    }
    function removeData_pathline_circle_zoom(){
        exit_pathline_circle_zoom
        .remove();

    }

    function updateData_pathline_circle_zoom(){
        update_pathline_circle_zoom
            .on("click", function(d,i) {
                               // change_heat2d ( d[0],d[1] )
                              // console.log("rrr  " +  d + "ff" + i)
                                   var x_mouse = d3.mouse(this)[0];
                                   var y_mouse = d3.mouse(this)[1];
                               console.log("y_mouse  " + x_mouse + "ff" + y_mouse)
                                 var mousePos = d3.mouse(this);
                               console.log("mousePos  " + mousePos)
//console.log("get_x_text_2dheat (20,9,2) = " + get_x_text_2dheat (20,9,2))

//total_pathlineinfo_create(d[3]);
  //console.log("get_x_text_2dheat (20,9,2) = " + get_x_text_2dheat (20,9,2))
total_pathlineinfo_create(d[3]);
 write_fishingpointinfo_pathline (d[3]);//d[3]:cpue
                // day( i%3 )
                      //svg_pathline_2d.selectAll("text")
                      //  .data(xyzvar)
                      //  .enter()
                      //  .append("text");

               //     svg_pathline_2d.selectAll("text")
                //        .data(xyzvar)
                //        .text(function(d,i){
                //            return get_text_pathline (i);})
                //        .attr("x", function(d) {
                 //           return xScale(d[0]) ;
                 //       })
                 //       .attr("y", function(d) {
                 //           return yScale(d[1]) ;
                 //       })
                  //      .attr("font-family", "sans-serif")
                  //     .attr("font-size", "12px")
                  //     .attr("fill", "black")
                       //.attr("stroke", "white")
                  //     ;
                                ;})
            .on("mouseover", function(d,i){// マウスがバーに重なったら色を青色に変える
                                    d3.select(this) // マウスに重なった要素を選択
                                          .style("opacity", 0.5);
                                        //.attr("style", "fill:rgb(0,0,255)")
                                       // .attr("stroke", "blue");
                                    info_mouseover_pathline_everyoneday (i,d[3],d[4],d[5],d[6],d[7]);
                                    total_pathlineinfo_create(d[3]);
                                    write_fishingpointinfo_pathline (d[3]);//d[3]:cpue

                                })
            .on("mouseout", function(){// マウスがバーから離れたら色を赤色に戻す
                                    d3.select(this) // マウスに重なっていた要素を選択
                                          .style("opacity", 1.0);
          })
    .attr({
        cx: function(d,i){return xScale_zoom(d[0]) - 0;},
        cy: function(d,i){return yScale_zoom(d[1]) - 0;},
        r: function(d,i){return get_R_2d_pathline_first_zoom (i,d[3],d[4],d[5],d[6],d[7]);},///3:cpue,4:S,5:T,6:updawn,7:z
        fill: function(d,i){return get_pathline_circle_color (i,d[3],d[4],d[5],d[6],d[7]);},///3:cpue,4:S,5:T,6:updawn,7:z
        stroke:function(d,i){return get_strokcolor_pathline_circle (i,d[3]);}
     //   stroke: function(d,i){return get_strokcolor_target_2d_ocean2_suikai (i,d[3],d[4],d[5]);}
        });
    }








function get_R_2d_pathline_first (i,cpue,S,T,updown,z){
//console.log(n_c_point_gloval);
  if (i<n_c_point_gloval) {
  return Scale_cpue(cpue);
}
else if (n_c_point_gloval<=i) {
return 2;
}

}

function get_R_2d_pathline_first_zoom (i,cpue,S,T,updown,z){
  if (i<n_c_point_gloval) {
  return Scale_cpue_zoom(cpue);
}
else if (n_c_point_gloval<=i) {
return 2;
}

}



function get_pathline_circle_color (i,cpue,S,T,updown,z){

  if (i<n_c_point_gloval) {
 return HSVtoColorCode(Scale_cpue_HSV_H(cpue),1,1);
}
else if (n_c_point_gloval<=i) {
return get_strokecolor_pathline_total(i,cpue,S,T,updown,z);
};




      // return "#FF0000";
}


function get_strokcolor_pathline_circle (i,cpue){
   // if ( Scale_color_cpue(cpue) > 0.6 ) {

   //    return HSVtoColorCode(Scale_cpue_HSV_H(cpue),1,1);
   //   // return "#FF0000";
   // }
   // else {
       // return "#FFFF00";
   // };
  return "white";

}

function get_strokecolor_pathline (i,cpue,S,T,updown,z){
//console.log("i = " + i + " cpue = " +cpue)

return get_strokecolor_pathline_total(i,cpue,S,T,updown,z);
}





function info_mouseover_pathline_everyoneday (i,cpue,S,T,updown,z){
    //var num_sort_info;

//console.log("ff")
get_strokecolor_pathline_total (i,cpue,S,T,updown,z);
console.log(num_sort_info);
update_sort_info (num_sort_info);
}

var ww = 12.55555;
console.log("fgwe" + ww.toFixed(2))

    var num_sort_info;

function get_strokecolor_pathline_total (i,cpue,S,T,updown,z){


if (pathlinecolormode == 0) {//CPUE
         unit_sort_info = "cpue";
             num_sort_info = cpue;
return HSVtoColorCode(Scale_cpue_HSV_H(cpue),1,1);
}
else if (pathlinecolormode == 1) {//CPUE
         unit_sort_info = "S";
             num_sort_info = S;
return HSVtoColorCode(Scale_S_HSV_H(S),1,1);
}
else if (pathlinecolormode == 2) {//CPUE
         unit_sort_info = "T";
         num_sort_info = T;
return HSVtoColorCode(Scale_T_HSV_H(T),1,1);
}
else if (pathlinecolormode == 3) {//CPUE
         unit_sort_info = "updown";
   // console.log(updown)
      num_sort_info = updown;
return HSVtoColorCode(Scale_updown_HSV_H(updown),1,1);
}
else if (pathlinecolormode == 4) {//CPUE
     unit_sort_info = "Current";
   //  get_v_dence (z,salinity,tempereture){
  //console.log()
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
                    suikai_kari = 359;   console.log("KW")
            }
        else  {
         suikai_kari = 300;
        };
 num_sort_info = suikai_kari;
return HSVtoColorCode(suikai_kari,1,1);
};
}




function get_strokewidth_pathline (i,cpue){
  return Scale_cpue_pathline_width( cpue);
}
function get_strokewidth_pathline_zoom (i,cpue){
  return Scale_cpue_pathline_width_zoom( cpue);
}



var min_cpue = 0;
var max_cpue = 35;

Scale_cpue = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([1.5,3.0])
.nice();

Scale_cpue_zoom = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([2,4.0])
.nice();



Scale_cpue_pathline_width = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([0.5,1])
.nice();

Scale_cpue_pathline_width_zoom = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([2,4])
.nice();



Scale_color_cpue = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([0,1])
.nice();

Scale_cpue_HSV_H = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([240,359])
.nice();


Scale_cpue_HSV_S = d3.scale.linear()
.domain([min_cpue,max_cpue])
.range([0,1])
.nice();




var min_S = 32.5;
var max_S = 34.5;

Scale_S_HSV_H = d3.scale.linear()
.domain([min_S,max_S])
.range([240,359])
.nice();









var min_T = 0;
var max_T = 25;

Scale_T_HSV_H = d3.scale.linear()
.domain([min_T,max_T])
.range([240,359])
.nice();


var min_updown = -0.2;
var max_updown = 0.2;

Scale_updown_HSV_H = d3.scale.linear()
.domain([min_updown,max_updown])
.range([240,359])
.nice();




function HSVtoColorCode(H,S,V){
var R;
var G;
var B;

var colorCode;

HSVtoRGB(H,S,V);
RGBtoColorCode(R,G,B);

function HSVtoRGB(H,S,V){
var Hi= Math.floor(H/60.0) % 6;
var f = (H/60.0) - Hi;
var p = V*(1-S);
var q = V*(1-f*S);
var t = V*(1-(1-f)*S);
if(Hi==0){
R=V;
G=t;
B=p;
} else if(Hi==1){
R=q;
G=V;
B=p;
} else if(Hi==2){
R=p;
G=V;
B=t;
} else if(Hi==3){
R=p;
G=q;
B=V;
} else if(Hi==4){
R=t;
G=p;
B=V;
} else if(Hi==5){
R=V;
G=p;
B=q;
}
}

function RGBtoColorCode(R,G,B){
var Rn = Math.floor(R*255);
var Gn = Math.floor(G*255);
var Bn = Math.floor(B*255);

var Rc = get2letters16(Rn);
var Gc = get2letters16(Gn);
var Bc = get2letters16(Bn);

colorCode = "#"+Rc+Gc+Bc;
}

function get2letters16(n){
if(n>16){
var code = n.toString(16);
} else {
var code = "0" + n.toString(16);
}
return code;
}

return colorCode;
}


function HLStoRGB(h, l, s) {
  var r, g, b; // 0..255

  while (h < 0) {
    h += 360;
  }
  h = h % 360;

  // 特別な場合 saturation = 0
  if (s == 0) {
    // → RGB は V に等しい
    l = Math.round(l * 255);
    return {'r': l, 'g': l, 'b': l, 'type': 'RGB'};
  }

  var m2 = (l < 0.5) ? l * (1 + s) : l + s - l * s,
      m1 = l * 2 - m2,
      tmp;

  tmp = h + 120;
  if (tmp > 360) {
    tmp = tmp - 360
  }

  if (tmp < 60) {
    r = (m1 + (m2 - m1) * tmp / 60);
  } else if (tmp < 180) {
    r = m2;
  } else if (tmp < 240) {
    r = m1 + (m2 - m1) * (240 - tmp) / 60;
  } else {
    r = m1;
  }

  tmp = h;
  if (tmp < 60) {
    g = m1 + (m2 - m1) * tmp / 60;
  } else if (tmp < 180) {
    g = m2;
  } else if (tmp < 240) {
    g = m1 + (m2 - m1) * (240 - tmp) / 60;
  } else {
    g = m1;
  }

  tmp = h - 120;
  if (tmp < 0) {
    tmp = tmp + 360
  }
  if (tmp < 60) {
    b = m1 + (m2 - m1) * tmp / 60;
  } else if (tmp < 180) {
    b = m2;
  } else if (tmp < 240) {
    b = m1 + (m2 - m1) * (240 - tmp) / 60;
  } else {
    b = m1;
  }

  return {'r': Math.round(r * 255), 'g': Math.round(g * 255), 'b': Math.round(b * 255), 'type': 'RGB'};
}














///////////////////// sort color code





var svg2_pathlinesort = d3.select("#Sortlabel_total").append("svg").attr({width:100, height:100});
color = [0,0];

colorcode_sort_info ()

/*
  gradient = svg2_pathlinesort.append("svg:defs")
    .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("x3", "0%")
      .attr("y3", "0%")
      .attr("x4", "0%")
      .attr("y4", "0%")

  gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", HSVtoColorCode(Scale_cpue_HSV_H(0),1,1))
    .attr("stop-opacity", 1)

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1)
*/
  //gradient.append("svg:stop")
   // .attr("offset", "100%")
   // .attr("stop-color", "blue")
  //  .attr("stop-opacity", 1)

  //gradient.append("svg:stop")
 //   .attr("offset", "100%")
 //   .attr("stop-color", "green")
   // .attr("stop-opacity", 1)

create_colorcode_sort_info ()






console.log( "wwww " + get_strokecolor_pathline_total (0,min_cpue,min_S,min_T,min_updown,0) );




function colorcode_sort_info_remove (){
    console.log("colorcode_sort_info_remove")
   var  p_svg2_pathlinesort = svg2_pathlinesort.selectAll("rect");
   p_svg2_pathlinesort.remove()
}



function colorcode_sort_info (){

//get_strokecolor_pathline_total (0,min_cpue,min_S,min_T,min_updown,0)
//get_strokecolor_pathline_total (0,max_cpue,max_S,max_T,max_updown,0)
console.log("colorcode_sort_info")
  gradient = svg2_pathlinesort.append("svg:defs")
    .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("x3", "0%")
      .attr("y3", "0%")
      .attr("x4", "0%")
      .attr("y4", "0%")

  gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", get_strokecolor_pathline_total (0,max_cpue,max_S,max_T,max_updown,0))
    .attr("stop-opacity", 1)

console.log(get_strokecolor_pathline_total (0,max_cpue,max_S,max_T,max_updown,0))
console.log(get_strokecolor_pathline_total (0,min_cpue,min_S,min_T,min_updown,0))
  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", get_strokecolor_pathline_total (0,min_cpue,min_S,min_T,min_updown,0))
    .attr("stop-opacity", 1)

}


function create_colorcode_sort_info (){
    console.log("create_colorcode_sort_info")
svg2_pathlinesort.selectAll("rect")
.data(color)
.enter()
.append("rect")
.attr({
    x: function(d,i){return 10 ;},
    y: function(d,i){return 10 ;},
    width: 20,
    height: 60,
    fill: function(d,i){return "url(#gradient)";},
   // stroke: "white",
    //opacity: 0.5,
});

}



