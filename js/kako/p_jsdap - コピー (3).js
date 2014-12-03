console.log("jsdap")

var day_target_ocean = 1;
var date_jsdap = new Date(2005, 0, day_target_ocean);
var baseDate_jsdap = new Date(1970, 0, 1);
var i_date_jsdap = Math.floor((date_jsdap.getTime() - baseDate_jsdap.getTime()) / 86400000) + 719164;



function det_date(){
	date_jsdap = new Date(2005, 0, day_target_ocean);
	baseDate_jsdap = new Date(1970, 0, 1);
	i_date_jsdap = Math.floor((date_jsdap.getTime() - baseDate_jsdap.getTime()) / 86400000) + 719164;
}


var svg_ocean = d3.select("#myGraph_ocean").append("svg").attr({width:w, height:h});

var g_ocean = svg_ocean.append("g")


    svg_ocean.append("g")
    .attr({
        class: "axis",
        transform: "translate(0, 480)"
    })
    .call(xAxis);

    svg_ocean.append("g")
    .attr({
        class: "axis",
        transform: "translate(20, 0)"
    })
    .call(yAxis);









jqdap.loadData('http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?S[0][0][0][0]', {withCredentials: true})
 .then(function(data_jsdap) {
   console.log(data_jsdap);
  //console.log(data_jsdap[0][0][0][0][0][0]);
 // console.log(data_jsdap[0][0][0][0][1][0]);
 });

//[54]
var scale_z_lev = [0.5, 1.5, 4.0, 7.0, 12.0, 18.0, 26.0, 38.0, 50.0, 66.0, 82.0, 100.0, 118.0, 138.0, 158.0, 178.0, 200.0, 222.0, 246.0, 270.0, 300.0, 330.0, 360.0, 400.0, 440.0, 480.0, 540.0, 600.0, 670.0, 740.0, 820.0, 900.0, 1000.0, 1100.0, 1200.0, 1350.0, 1500.0, 1650.0, 1800.0, 2000.0, 2250.0, 2500.0, 2750.0, 3000.0, 3250.0, 3500.0, 3750.0, 4000.0, 4250.0, 4500.0, 4750.0, 5000.0, 5400.0, 6000.0];
//[442]
var scale_y_lat = [14.8, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9, 16.0, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8, 16.9, 17.0, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.9, 18.0, 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8, 18.9, 19.0, 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8, 19.9, 20.0, 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21.0, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0, 22.1, 22.2, 22.3, 22.4, 22.5, 22.6, 22.7, 22.8, 22.9, 23.0, 23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7, 23.8, 23.9, 24.0, 24.1, 24.2, 24.3, 24.4, 24.5, 24.6, 24.7, 24.8, 24.9, 25.0, 25.1, 25.2, 25.3, 25.4, 25.5, 25.6, 25.7, 25.8, 25.9, 26.0, 26.1, 26.2, 26.3, 26.4, 26.5, 26.6, 26.7, 26.8, 26.9, 27.0, 27.1, 27.2, 27.3, 27.4, 27.5, 27.6, 27.7, 27.8, 27.9, 28.0, 28.1, 28.2, 28.3, 28.4, 28.5, 28.6, 28.7, 28.8, 28.9, 29.0, 29.1, 29.2, 29.3, 29.4, 29.5, 29.6, 29.7, 29.8, 29.9, 30.0, 30.1, 30.2, 30.3, 30.4, 30.5, 30.6, 30.7, 30.8, 30.9, 31.0, 31.1, 31.2, 31.3, 31.4, 31.5, 31.6, 31.7, 31.8, 31.9, 32.0, 32.1, 32.2, 32.3, 32.4, 32.5, 32.6, 32.7, 32.8, 32.9, 33.0, 33.1, 33.2, 33.3, 33.4, 33.5, 33.6, 33.7, 33.8, 33.9, 34.0, 34.1, 34.2, 34.3, 34.4, 34.5, 34.6, 34.7, 34.8, 34.9, 35.0, 35.1, 35.2, 35.3, 35.4, 35.5, 35.6, 35.7, 35.8, 35.9, 36.0, 36.1, 36.2, 36.3, 36.4, 36.5, 36.6, 36.7, 36.8, 36.9, 37.0, 37.1, 37.2, 37.3, 37.4, 37.5, 37.6, 37.7, 37.8, 37.9, 38.0, 38.1, 38.2, 38.3, 38.4, 38.5, 38.6, 38.7, 38.8, 38.9, 39.0, 39.1, 39.2, 39.3, 39.4, 39.5, 39.6, 39.7, 39.8, 39.9, 40.0, 40.1, 40.2, 40.3, 40.4, 40.5, 40.6, 40.7, 40.8, 40.9, 41.0, 41.1, 41.2, 41.3, 41.4, 41.5, 41.6, 41.7, 41.8, 41.9, 42.0, 42.1, 42.2, 42.3, 42.4, 42.5, 42.6, 42.7, 42.8, 42.9, 43.0, 43.1, 43.2, 43.3, 43.4, 43.5, 43.6, 43.7, 43.8, 43.9, 44.0, 44.1, 44.2, 44.3, 44.4, 44.5, 44.6, 44.7, 44.8, 44.9, 45.0, 45.1, 45.2, 45.3, 45.4, 45.5, 45.6, 45.7, 45.8, 45.9, 46.0, 46.1, 46.2, 46.3, 46.4, 46.5, 46.6, 46.7, 46.8, 46.9, 47.0, 47.1, 47.2, 47.3, 47.4, 47.5, 47.6, 47.7, 47.8, 47.9, 48.0, 48.1, 48.2, 48.3, 48.4, 48.5, 48.6, 48.7, 48.8, 48.9, 49.0, 49.1, 49.2, 49.3, 49.4, 49.5, 49.6, 49.7, 49.833, 50.0, 50.167, 50.333, 50.5, 50.667, 50.833, 51.0, 51.167, 51.333, 51.5, 51.667, 51.833, 52.0, 52.167, 52.333, 52.5, 52.667, 52.833, 53.0, 53.167, 53.333, 53.5, 53.667, 53.833, 54.0, 54.167, 54.333, 54.5, 54.667, 54.833, 55.0, 55.167, 55.333, 55.5, 55.667, 55.833, 56.0, 56.167, 56.333, 56.5, 56.667, 56.833, 57.0, 57.167, 57.333, 57.5, 57.667, 57.833, 58.0, 58.167, 58.333, 58.5, 58.667, 58.833, 59.0, 59.167, 59.333, 59.5, 59.667, 59.833, 60.0, 60.167, 60.333, 60.5, 60.667, 60.833, 61.0, 61.167, 61.333, 61.5, 61.667, 61.833, 62.0, 62.167, 62.333, 62.5, 62.667, 62.833, 63.0, 63.167, 63.333, 63.5, 63.667, 63.833, 64.0, 64.167, 64.333, 64.5, 64.667, 64.833, 65.0];
//[673]
var scale_x_lon = [116.8, 116.9, 117.0, 117.1, 117.2, 117.3, 117.4, 117.5, 117.6, 117.7, 117.8, 117.9, 118.0, 118.1, 118.2, 118.3, 118.4, 118.5, 118.6, 118.7, 118.8, 118.9, 119.0, 119.1, 119.2, 119.3, 119.4, 119.5, 119.6, 119.7, 119.8, 119.9, 120.0, 120.1, 120.2, 120.3, 120.4, 120.5, 120.6, 120.7, 120.8, 120.9, 121.0, 121.1, 121.2, 121.3, 121.4, 121.5, 121.6, 121.7, 121.8, 121.9, 122.0, 122.1, 122.2, 122.3, 122.4, 122.5, 122.6, 122.7, 122.8, 122.9, 123.0, 123.1, 123.2, 123.3, 123.4, 123.5, 123.6, 123.7, 123.8, 123.9, 124.0, 124.1, 124.2, 124.3, 124.4, 124.5, 124.6, 124.7, 124.8, 124.9, 125.0, 125.1, 125.2, 125.3, 125.4, 125.5, 125.6, 125.7, 125.8, 125.9, 126.0, 126.1, 126.2, 126.3, 126.4, 126.5, 126.6, 126.7, 126.8, 126.9, 127.0, 127.1, 127.2, 127.3, 127.4, 127.5, 127.6, 127.7, 127.8, 127.9, 128.0, 128.1, 128.2, 128.3, 128.4, 128.5, 128.6, 128.7, 128.8, 128.9, 129.0, 129.1, 129.2, 129.3, 129.4, 129.5, 129.6, 129.7, 129.8, 129.9, 130.0, 130.1, 130.2, 130.3, 130.4, 130.5, 130.6, 130.7, 130.8, 130.9, 131.0, 131.1, 131.2, 131.3, 131.4, 131.5, 131.6, 131.7, 131.8, 131.9, 132.0, 132.1, 132.2, 132.3, 132.4, 132.5, 132.6, 132.7, 132.8, 132.9, 133.0, 133.1, 133.2, 133.3, 133.4, 133.5, 133.6, 133.7, 133.8, 133.9, 134.0, 134.1, 134.2, 134.3, 134.4, 134.5, 134.6, 134.7, 134.8, 134.9, 135.0, 135.1, 135.2, 135.3, 135.4, 135.5, 135.6, 135.7, 135.8, 135.9, 136.0, 136.1, 136.2, 136.3, 136.4, 136.5, 136.6, 136.7, 136.8, 136.9, 137.0, 137.1, 137.2, 137.3, 137.4, 137.5, 137.6, 137.7, 137.8, 137.9, 138.0, 138.1, 138.2, 138.3, 138.4, 138.5, 138.6, 138.7, 138.8, 138.9, 139.0, 139.1, 139.2, 139.3, 139.4, 139.5, 139.6, 139.7, 139.8, 139.9, 140.0, 140.1, 140.2, 140.3, 140.4, 140.5, 140.6, 140.7, 140.8, 140.9, 141.0, 141.1, 141.2, 141.3, 141.4, 141.5, 141.6, 141.7, 141.8, 141.9, 142.0, 142.1, 142.2, 142.3, 142.4, 142.5, 142.6, 142.7, 142.8, 142.9, 143.0, 143.1, 143.2, 143.3, 143.4, 143.5, 143.6, 143.7, 143.8, 143.9, 144.0, 144.1, 144.2, 144.3, 144.4, 144.5, 144.6, 144.7, 144.8, 144.9, 145.0, 145.1, 145.2, 145.3, 145.4, 145.5, 145.6, 145.7, 145.8, 145.9, 146.0, 146.1, 146.2, 146.3, 146.4, 146.5, 146.6, 146.7, 146.8, 146.9, 147.0, 147.1, 147.2, 147.3, 147.4, 147.5, 147.6, 147.7, 147.8, 147.9, 148.0, 148.1, 148.2, 148.3, 148.4, 148.5, 148.6, 148.7, 148.8, 148.9, 149.0, 149.1, 149.2, 149.3, 149.4, 149.5, 149.6, 149.7, 149.8, 149.9, 150.0, 150.1, 150.2, 150.3, 150.4, 150.5, 150.6, 150.7, 150.8, 150.9, 151.0, 151.1, 151.2, 151.3, 151.4, 151.5, 151.6, 151.7, 151.8, 151.9, 152.0, 152.1, 152.2, 152.3, 152.4, 152.5, 152.6, 152.7, 152.8, 152.9, 153.0, 153.1, 153.2, 153.3, 153.4, 153.5, 153.6, 153.7, 153.8, 153.9, 154.0, 154.1, 154.2, 154.3, 154.4, 154.5, 154.6, 154.7, 154.8, 154.9, 155.0, 155.1, 155.2, 155.3, 155.4, 155.5, 155.6, 155.7, 155.8, 155.9, 156.0, 156.1, 156.2, 156.3, 156.4, 156.5, 156.6, 156.7, 156.8, 156.9, 157.0, 157.1, 157.2, 157.3, 157.4, 157.5, 157.6, 157.7, 157.8, 157.9, 158.0, 158.1, 158.2, 158.3, 158.4, 158.5, 158.6, 158.7, 158.8, 158.9, 159.0, 159.1, 159.2, 159.3, 159.4, 159.5, 159.6, 159.7, 159.833, 160.0, 160.167, 160.333, 160.5, 160.667, 160.833, 161.0, 161.167, 161.333, 161.5, 161.667, 161.833, 162.0, 162.167, 162.333, 162.5, 162.667, 162.833, 163.0, 163.167, 163.333, 163.5, 163.667, 163.833, 164.0, 164.167, 164.333, 164.5, 164.667, 164.833, 165.0, 165.167, 165.333, 165.5, 165.667, 165.833, 166.0, 166.167, 166.333, 166.5, 166.667, 166.833, 167.0, 167.167, 167.333, 167.5, 167.667, 167.833, 168.0, 168.167, 168.333, 168.5, 168.667, 168.833, 169.0, 169.167, 169.333, 169.5, 169.667, 169.833, 170.0, 170.167, 170.333, 170.5, 170.667, 170.833, 171.0, 171.167, 171.333, 171.5, 171.667, 171.833, 172.0, 172.167, 172.333, 172.5, 172.667, 172.833, 173.0, 173.167, 173.333, 173.5, 173.667, 173.833, 174.0, 174.167, 174.333, 174.5, 174.667, 174.833, 175.0, 175.167, 175.333, 175.5, 175.667, 175.833, 176.0, 176.167, 176.333, 176.5, 176.667, 176.833, 177.0, 177.167, 177.333, 177.5, 177.667, 177.833, 178.0, 178.167, 178.333, 178.5, 178.667, 178.833, 179.0, 179.167, 179.333, 179.5, 179.667, 179.833, 180.0, 180.167, 180.333, 180.5, 180.667, 180.833, 181.0, 181.167, 181.333, 181.5, 181.667, 181.833, 182.0, 182.167, 182.333, 182.5, 182.667, 182.833, 183.0, 183.167, 183.333, 183.5, 183.667, 183.833, 184.0, 184.167, 184.333, 184.5, 184.667, 184.833, 185.0, 185.167, 185.333, 185.5, 185.667, 185.833, 186.0, 186.167, 186.333, 186.5, 186.667, 186.833, 187.0, 187.167, 187.333, 187.5, 187.667, 187.833, 188.0, 188.167, 188.333, 188.5, 188.667, 188.833, 189.0, 189.167, 189.333, 189.5, 189.667, 189.833, 190.0, 190.167, 190.333, 190.5, 190.667, 190.833, 191.0, 191.167, 191.333, 191.5, 191.667, 191.833, 192.0, 192.167, 192.333, 192.5, 192.667, 192.833, 193.0, 193.167, 193.333, 193.5, 193.667, 193.833, 194.0, 194.167, 194.333, 194.5, 194.667, 194.833, 195.0, 195.167, 195.333, 195.5, 195.667, 195.833, 196.0, 196.167, 196.333, 196.5, 196.667, 196.833, 197.0, 197.167, 197.333, 197.5, 197.667, 197.833, 198.0, 198.167, 198.333, 198.5, 198.667, 198.833, 199.0, 199.167, 199.333, 199.5, 199.667, 199.833, 200.0, 200.167];

var s_w_x = 130;///緯度経度の値　ウィンドウ幅
var e_w_x = 150;
var s_w_y = 30;
var e_w_y = 50;
var s_w_z = 0;//mの深さ
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
            		start_scale_x_lon = (i);
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
            		start_scale_y_lat = (i);
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

    	var p_ocean = g_ocean.selectAll("circle");
        var update_ocean;
        var enter_ocean;
        var exit_ocean;

jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+variable+"["+ (i_date_jsdap - 731948) + "]["+start_scale_z_lev+":"+end_scale_z_lev+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
 .then(function(data_jsdap) {
   console.log("shoki");
 //  console.log(data_jsdap[0][0][0][0][0]);//z,y,x,value
 // console.log(data_jsdap[0][0][0][0][1][0]);

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
	    enter_ocean.append("circle")
	    .attr({
	        cx: function(d,i){return xScale(d[0]) - padding;},
	        cy: function(d,i){return yScale(d[1]) - padding;},
	        r: function(d,i){return get_R_2d_ocean (d[3]);},
	        fill: function(d,i){return get_color_target_2d_ocean (d[3]);}
	    	});
      
 });





var z_lev_2dfiz = 0;

function draw_points_2d_ocean(){

det_date()
console.log(z_lev_2dfiz)
		jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+variable+"["+ (i_date_jsdap - 731948) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
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
var minS = 33;
var maxS = 35;
var v_minS = 0;
var v_maxS = 255;

var Scale_S_color = d3.scale.linear()
.domain([minS,maxS])
.range([v_minS,v_maxS])
.nice();



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


function get_R_2d_ocean2 (val,i){
  var R_S_2d = 0;
  
    if( i < length_d_ocean ) {
        if( val < 10 ) {
            R_S_2d = 1.7;
            }  
        else if( (10 < val) && (val < minS) ) {
            R_S_2d = 0;
            } 
    }
    else if( length_d_ocean <= i){
        R_S_2d = get_R_S_pathline_2d(i-length_d_ocean);
    }

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



//var svg_s = d3.select("g_ocean").append("svg").attr({width:w, height:h});
//var svg2 = d3.select("#myGraph").append("svg").attr({width:w, height:h});

/*
g_ocean.append("circle")
  .attr("cx", 140).attr("cy", 40).attr("r", 20)
  .attr("fill", "red").attr("stroke", "red");
*/
var length_d_ocean;
draw_points_2d_ocean_pathline()

function draw_points_2d_ocean_pathline(){

det_date()
console.log(z_lev_2dfiz)
        jqdap.loadData("http://hyperinfo.viz.media.kyoto-u.ac.jp/~futami/dias/MOVE-RA2014.dods?"+variable+"["+ (i_date_jsdap - 731948) + "]["+z_lev_2dfiz+"]["+start_scale_y_lat+":"+end_scale_y_lat+"]["+start_scale_x_lon+":"+end_scale_x_lon+"]", {withCredentials: true})
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
                if ((points[i_p].year == year_target ) && ( points[i_p].month == month_target) && (points[i_p].day == day_target)) {//target date に合ってたら描画
                    xyin = xyin.concat(points[i_p].xyz[0][0]);       
                }
            }

       // console.log(xyzvar)  
       // console.log(xyin)
        //console.log(xyzvar);
        length_d_ocean = xyzvar.length;
        xyzvar = xyzvar.concat(xyin);
       // console.log(xyzvar)  

         p_ocean = g_ocean.selectAll("circle");
         update_ocean = p_ocean.data(xyzvar);
         enter_ocean = update_ocean.enter();
         exit_ocean = update_ocean.exit();

        outputData_ocean2()
        removeData_ocean2()
        updateData_ocean2()

         });
}



    function outputData_ocean2(){
    enter_ocean.append("circle")
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_2d_ocean2 (d[3],i);},
        fill: function(d,i){return get_color_target_2d_ocean2 (d[3],i);}
        });
    }
    function removeData_ocean2(){     
        exit_ocean
        .remove();

    }

    function updateData_ocean2(){
        update_ocean
    .attr({
        cx: function(d,i){return xScale(d[0]) - padding;},
        cy: function(d,i){return yScale(d[1]) - padding;},
        r: function(d,i){return get_R_2d_ocean2 (d[3],i);},
        fill: function(d,i){return get_color_target_2d_ocean2 (d[3],i);}
        });

    }


function get_R_2d_ocean2 (val,i){
  var R_S_2d = 1.7;
  /*
    if( i < length_d_ocean ) {
        if( val < 10 ) {
            R_S_2d = 1.7;
            }  
        else if( (10 < val) && (val < minS) ) {
            R_S_2d = 0;
            } 
    }
    else if( length_d_ocean <= i){
        R_S_2d = get_R_S_pathline_2d(i-length_d_ocean);
    }
*/
  return R_S_2d ;
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
        if( val < 30 ) {
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









/*

    var p = svg_s.selectAll("circle");
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


*/