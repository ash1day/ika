console.log("csv3")

var name = [];
var dd = "dd";
for (k = 0; k < 4; k++){

name = String(k) + dd;
console.log(name)
}


function csv2Array(filePath) { //csvﾌｧｲﾙﾉ相対ﾊﾟｽor絶対ﾊﾟｽ
    var csvData = new Array();
    var data = new XMLHttpRequest();    
    data.open("GET", filePath, false); //true:非同期,false:同期
    data.send(null);
 
    var LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
    var lines = data.responseText.split(LF);
    for (var i = 0; i < lines.length;++i) {
        var cells = lines[i].split(",");
        if( cells.length != 1 ) {
            csvData.push(cells);
        }
    }
    return csvData;
}

var alldata = csv2Array("data/0929_CPUE+point(XYZ).csv");
console.log(alldata)

   var x_csv = [];
   var y_csv = [];
   var z_csv = [];
   var xy_csv = [];

    var depth_csv = 31;
    var day_csv = 7;

        for (i = 0; i < depth_csv; i++) {//depth
            x_csv.push([]);
            y_csv.push([]);
            z_csv.push([]);
            xy_csv.push([]);
            for (j = 0; j < day_csv; j++) {//day
                x_csv[i].push([]);
                y_csv[i].push([]);
                z_csv[i].push([]);
                xy_csv[i].push([]);
            }
        }

var row = 2;











for (i = 0; i < alldata[0].length; i++) {
    if (alldata[0][i][0] == "X") {
        if (alldata[0][i].slice(3,5) == "00") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        x_csv[0][0].push(alldata[row][i]);
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        x_csv[0][1].push(alldata[row][i]);
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        x_csv[0][2].push(alldata[row][i]);
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        x_csv[0][3].push(alldata[row][i]);
                    }
            }
        else if (alldata[0][i].slice(3,5) == "01") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        x_csv[1][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        x_csv[1][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        x_csv[1][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        x_csv[1][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "02") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        x_csv[2][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        x_csv[2][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        x_csv[2][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        x_csv[2][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "03") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        x_csv[3][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        x_csv[3][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        x_csv[3][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        x_csv[3][3].push(alldata[row][i])
                    }
            }
    }
}//for x

   console.log(x_csv[0][0])//[depth][day]

for (i = 0; i < alldata[0].length; i++) {
    if (alldata[0][i][0] == "Y") {
        if (alldata[0][i].slice(3,5) == "00") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        y_csv[0][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        y_csv[0][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        y_csv[0][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        y_csv[0][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "01") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        y_csv[1][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        y_csv[1][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        y_csv[1][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        y_csv[1][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "02") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        y_csv[2][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        y_csv[2][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        y_csv[2][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        y_csv[2][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "03") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        y_csv[3][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        y_csv[3][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        y_csv[3][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        y_csv[3][3].push(alldata[row][i])
                    }
            }
    }
}//for y_csv
console.log(y_csv[0][0])//[depth][day]
console.log(z_csv[0][0])//[depth][day]
for (i = 0; i < alldata[0].length; i++) {
    if (alldata[0][i][0] == "Z") {
        if (alldata[0][i].slice(3,5) == "00") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        z_csv[0][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        z_csv[0][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        z_csv[0][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        z_csv[0][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "01") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        z_csv[1][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        z_csv[1][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        z_csv[1][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        z_csv[1][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "02") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        z_csv[2][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        z_csv[2][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        z_csv[2][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        z_csv[2][3].push(alldata[row][i])
                    }
            }
        else if (alldata[0][i].slice(3,5) == "03") {//samedepth
                     if  (alldata[0][i].slice(1,3) == "00") {//samedepth
                        z_csv[3][0].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "01") {//samedepth
                        z_csv[3][1].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "02") {//samedepth
                        z_csv[3][2].push(alldata[row][i])
                    }
                else if (alldata[0][i].slice(1,3) == "03") {//samedepth
                        z_csv[3][3].push(alldata[row][i])
                    }
            }
    }
}//for y_csv










   console.log(y_csv[0][0])//[depth][day]

        for (i = 0; i < depth_csv; i++) {//depth
            for (j = 0; j < day_csv; j++) {//day
                for (k = 0; k < x_csv[i][j].length; k++) {//day
                xy_csv[i][j].push( [x_csv[i][j][k], y_csv[i][j][k], z_csv[i][j][k]] );
                }
            }
        }
    console.log(xy_csv[0][0])//[depth][day] 






