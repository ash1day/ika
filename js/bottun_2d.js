console.log("bottun2")



 var p ;
 write1_2d ()
  var number_fishingpoint = 1;
write_fishingpointinfo_pathline (first_cpue_draw_pathlineinfo);


function write_fishingpointinfo_pathline (cpue){////描画時に書く　CPUE情報がそこで決まるからv

 p = d3.select("body").selectAll("#number_fishingpint");
p.text( "Fishing point: " + number_fishingpoint + ",  CPUE: " + cpue );


     p = d3.select("body").selectAll("#date_only");//////////////////////////////このパスライン情報のラベルは　漁獲位置選択後に変化
p.text("Fishing date: " + year_target +"/"+ month_target +"/"+ day_target + ",  Depth: " + scale_z_lev[depth_target] + "[m]");
// p = d3.select("body").selectAll("#dapth_only");
//p.text( ", Depth: " + scale_z_lev[depth_target] + "[m]"  );

}





function write1_2d (){
     p = d3.select("body").selectAll("#date");
   // p.text("Target day = " + year_target +"/"+ month_target +"/"+ day_target +", targe depth = "+ depth_target +", targe day = "+ devi_day_target  );
  p.text("Fishing date: ''" + year_target +"/"+ month_target +"/"+ day_target+"'', Depth: ''"+ scale_z_lev[depth_target] +"'', ''"+ devi_day_target +"'' days back" );
  p = d3.select("body").selectAll("#label_fishingday_change");
p.text( year_target +"/"+ month_target +"/"+ day_target );

 p = d3.select("body").selectAll("#label_fishingday_depth_change");
p.text( scale_z_lev[depth_target] + "[m]" );

 p = d3.select("body").selectAll("#label_fishingday_backday_change");
p.text( devi_day_target + "[day]");

if (draw3dcode == 1) {///// draw 1depth   onの時のみ呼び出して描画b_f_day_2d_ocean
 write_draw3d ()
 };
    }

write_draw3d ()
function write_draw3d (){
  p = d3.select("body").selectAll("#label_fishingday_change_draw3d");
p.text( year_target +"/"+ month_target +"/"+ day_target );

 p = d3.select("body").selectAll("#label_fishingday_depth_change_draw3d");
p.text( scale_z_lev[depth_target] + "[m]" );

 p = d3.select("body").selectAll("#label_fishingday_backday_change_draw3d");
p.text( devi_day_target + "[day]");

    }

write_draw3d_fulldepth ()

function write_draw3d_fulldepth (){
  p = d3.select("body").selectAll("#label_fishingday_change_draw3d_fulldepth");
p.text( year_target +"/"+ month_target +"/"+ day_target );
}



function n_f_day_2d (n_day){

    
    day_target = String( Number(day_target) + n_day);//date change

    write1_2d ()
  //  remove_delete_allpoints()
draw_points_2d2 (1 + Number(devi_day_target))
    }
    
function b_f_day_2d (n_day){
 
    day_target = String( Number(day_target) - n_day);//date change

    write1_2d ()
   // remove_delete_allpoints()
draw_points_2d2 (1 + Number(devi_day_target))
    }

function a_day_2d (a_day){
    devi_day_target = String( Number(devi_day_target) - a_day);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))

    }
function b_day_2d (b_day){
    devi_day_target = String( Number(devi_day_target) + b_day);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))

    }

function depth_p_2d (depth_p){
    depth_target = String( Number(depth_target) + depth_p);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))
    }

function depth_m_2d (depth_m){
    depth_target = String( Number(depth_target) - depth_m);//date change
    write1_2d ()
draw_points_2d2 (1 + Number(devi_day_target))
    }






    function n_f_day_2d_ocean2 (n_day){

    
    day_target_ocean2 = String( Number(day_target_ocean2) + n_day);//date change


draw_points_2d_ocean()
    }
    
function b_f_day_2d_ocean2 (n_day){
 
    day_target_ocean2 = String( Number(day_target_ocean2) - n_day);//date change

draw_points_2d_ocean()
    }


    function depth_p_2d_ocean2 (depth_p){
    z_lev_2dfiz = String( Number(z_lev_2dfiz) + depth_p);//date change
draw_points_2d_ocean()
    }

function depth_m_2d_ocean2 (depth_m){
    z_lev_2dfiz = String( Number(z_lev_2dfiz) - depth_m);//date change
draw_points_2d_ocean()
    }

/////////////////////////////////////////////////////////






function n_f_day_2d_ocean (n_day){
    day_target = String( Number(day_target) + n_day);//date change
    day_target_ocean2 = String( Number(day_target_ocean2) + n_day);//date change
    write1_2d ()
  //  remove_delete_allpoints()
  draw()
//draw_points_2d2 (1 + Number(devi_day_target))
    }
    
function b_f_day_2d_ocean (n_day){
    day_target = String( Number(day_target) - n_day);//date change
        day_target_ocean2 = String( Number(day_target_ocean2) - n_day);//date change
    write1_2d ()
   // remove_delete_allpoints()
   draw()
//draw_points_2d2 (1 + Number(devi_day_target))
    }



function a_day_2d_ocean (a_day){
    devi_day_target = String( Number(devi_day_target) - a_day);//date change
    day_target_ocean2 = String( Number(day_target_ocean2) + a_day);//date change
    write1_2d ()
//draw_points_2d2 (1 + Number(devi_day_target))
draw()
    }

function b_day_2d_ocean (b_day){

    devi_day_target = String( Number(devi_day_target) + b_day);//date change
    day_target_ocean2 = String( Number(day_target_ocean2) - b_day);//date change
    write1_2d ()
//draw_points_2d2 (1 + Number(devi_day_target))
draw()
    }

function depth_p_2d_ocean (depth_p){
    z_lev_2dfiz = String( Number(z_lev_2dfiz) + depth_p);//date change
    depth_target = String( Number(depth_target) + depth_p);//date change
    write1_2d ()
//draw_points_2d2 (1 + Number(devi_day_target))
draw()
    }

function depth_m_2d_ocean (depth_m){
    z_lev_2dfiz = String( Number(z_lev_2dfiz) - depth_m);//date change
    depth_target = String( Number(depth_target) - depth_m);//date change
    write1_2d ()
//draw_points_2d2 (1 + Number(devi_day_target))
draw()

    }



//////////////////////////////////////////////////////////////////


function OW_2d(){
console.log("OW")
minT_suikai = min_T_OW;
maxT_suikai = max_T_OW;
minS_suikai = min_S_OW;
maxS_suikai = max_S_OW;
mindence_suikai = min_dence_OW;
maxdence_suikai = max_dence_OW;

                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;
color_suikai_fix = 0;
                
draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }

function KW_2d(){
console.log("kww")
 
minT_suikai = min_T_KW;
maxT_suikai = max_T_KW;
minS_suikai = min_S_KW;
maxS_suikai = max_S_KW;
mindence_suikai = min_dence_KW;
maxdence_suikai = max_dence_KW;

                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;
color_suikai_fix = 1;
draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }


function TW_2d(){
 
minT_suikai = min_T_TW;
maxT_suikai = max_T_TW;
minS_suikai = min_S_TW;
maxS_suikai = max_S_TW;
mindence_suikai = min_dence_TW;
maxdence_suikai = max_dence_TW;

                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;

draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }


function CO_2d(){
 
minT_suikai = min_T_CO;
maxT_suikai = max_T_CO;
minS_suikai = min_S_CO;
maxS_suikai = max_S_CO;
mindence_suikai = min_dence_CO;
maxdence_suikai = max_dence_CO;


                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;

draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }

function SOW_2d(){
 
minT_suikai = min_T_SOW;
maxT_suikai = max_T_SOW;
minS_suikai = min_S_SOW;
maxS_suikai = max_S_SOW;
mindence_suikai = min_dence_SOW;
maxdence_suikai = max_dence_SOW;


                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;

draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }


function CL_2d(){
 
minT_suikai = min_T_CL;
maxT_suikai = max_T_CL;
minS_suikai = min_S_CL;
maxS_suikai = max_S_CL;
mindence_suikai = min_dence_CL;
maxdence_suikai = max_dence_CL;


                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;

draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }
function SCO_2d(){
 
minT_suikai = min_T_SCO;
maxT_suikai = max_T_SCO;
minS_suikai = min_S_SCO;
maxS_suikai = max_S_SCO;
mindence_suikai = min_dence_SCO;
maxdence_suikai = max_dence_SCO;


                minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;

draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
    }










function mode_2d(mode){
 N_mode = mode;
                 minS = minS_suikai ;
                maxS = maxS_suikai ;   
                get_Scale_S_color (minS,maxS)
                minT = minT_suikai ;
                maxT = maxT_suikai ; 
                get_Scale_T_color (minT,maxT)
                mindence = mindence_suikai;
                maxdence = maxdence_suikai;
draw()
    }




function draw(){
    console.log(N_mode)
   
    if (N_mode == 0) {draw_ocean_tri
   // draw_points_2d_ocean_pathline(1 + Number(devi_day_target))
        draw_ocean_tri(1 + Number(devi_day_target))
    }
    else if (N_mode == 1) {
  //  draw_points_2d_ocean_pathline_suikai(1 + Number(devi_day_target))
        draw_ocean_tri(1 + Number(devi_day_target))
    };
    }


//////////////////////////////



function OW_T_2d(){
 

draw_points_2d_ocean_pathline_suikai_T(1 + Number(devi_day_target))
    }



//////////////////////////////////////////////流跡線ソート系
  var unit_sort_info = "cpue";
function pathline_color(code_pathline_color){
console.log(1 + Number(devi_day_target))
 pathlinecolormode = code_pathline_color;//0:cpue, 1:T, 2 :S
 draw_pathline(1 + Number(devi_day_target));
 /*
 if (pathlinecolormode == 0) {
     unit_sort_info = "cpue";
 }
 else if (pathlinecolormode == 1) {
     unit_sort_info = "S";
 }
 else if (pathlinecolormode == 2) {
     unit_sort_info = "T";
 }
 else if (pathlinecolormode == 3) {
     unit_sort_info = "updown";
 }
 else if (pathlinecolormode == 4) {
     unit_sort_info = "Current";
 }*/
 get_strokecolor_pathline_total();
console.log("EE")
 colorcode_sort_info_remove ()//消す
 colorcode_sort_info ()//色決める
create_colorcode_sort_info ()//つくる




}

function draw3dcode_change(input_draw3dcode){
 draw3dcode = input_draw3dcode;
if (input_draw3dcode == 1) {///// draw 1depth   onの時のみ呼び出して描画b_f_day_2d_ocean
   draw()

   };
    write1_2d ()
}

var draw_3d_once_code = 0;
function draw_3d_once(input_draw3dcode){
    draw_3d_once_code = 1;
   
 draw3dcode = input_draw3dcode;
 console.log(draw3dcode)
  draw()
   write1_2d ()
//draw3dcode = 0;//元に戻す 
 //console.log(draw3dcode)
 //draw_3d_once_return()
//if (input_draw3dcode == 1) {///// draw 1depth   onの時のみ呼び出して描画b_f_day_2d_ocean
  
   //};
}


function draw_3d_once_return(){
    if (draw_3d_once_code == 1) {
        draw3dcode = 0;//元に戻す 
    };
}



function draw3d_fulldepth(){
draw_pathline_fullpath(backday_fullpath)
write_draw3d_fulldepth ()
}






