console.log("bottun")
 
//var p = d3.select("body").selectAll("p");
//p.text("Target day = " + year_target +"/"+ month_target +"/"+ day_target+", targe depth = "+ depth_target +", targe day = "+ devi_day_target  );

function n_f_day (n_day){
    day_target = String( Number(day_target) + n_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }
    
function b_f_day (n_day){
    day_target = String( Number(day_target) - n_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }

function a_day (a_day){
    devi_day_target = String( Number(devi_day_target) - a_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }
function b_day (b_day){
    devi_day_target = String( Number(devi_day_target) + b_day);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()

    }

function depth_p (depth_p){
    depth_target = String( Number(depth_target) + depth_p);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }

function depth_m (depth_m){
    depth_target = String( Number(depth_target) - depth_m);//date change
    write1 ()
    remove_delete_allpoints()
    draw_allpoints()
    }



function write1 (){
    var p = d3.select("body").selectAll("#date");
    p.text("Target day = " + year_target +"/"+ month_target +"/"+ day_target +", targe depth = "+ depth_target +", targe day = "+ devi_day_target  );
    }




     