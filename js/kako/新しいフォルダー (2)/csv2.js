function getCSVFile() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "data/0929_CPUE+point(XYZ).csv", true);
    xhr.send(null);
}
getCSVFile();
 

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 
function createArray(csvData) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
    csvArray[i] = tempArray[i].split(",");
    }
    console.log("csv2");
    //console.log(csvArray[0]);
    //console.log(csvArray[0].indexOf("X000000"));





   var x = [];
   var y = [];
   var z = [];
   var xy = [];

        for (i = 0; i < 31; i++) {//depth
            x.push([]);
            y.push([]);
            xy.push([]);
            for (j = 0; j < 7; j++) {//day
                x[i].push([]);
                y[i].push([]);
                xy[i].push([]);
            }
        }



    console.log("ww")
    console.log(x)
   var row = 2;

for (i = 0; i < csvArray[0].length; i++) {
    if (csvArray[0][i][0] == "X") {
        if (csvArray[0][i].slice(3,5) == "00") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        x[0][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        x[0][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        x[0][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        x[0][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "01") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        x[1][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        x[1][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        x[1][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        x[1][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "02") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        x[2][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        x[2][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        x[2][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        x[2][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "03") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        x[3][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        x[3][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        x[3][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        x[3][3].push(csvArray[row][i])
                    }
            }
    }
}//for x

   console.log(x[0][0])//[depth][day]

for (i = 0; i < csvArray[0].length; i++) {
    if (csvArray[0][i][0] == "Y") {
        if (csvArray[0][i].slice(3,5) == "00") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        y[0][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        y[0][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        y[0][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        y[0][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "01") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        y[1][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        y[1][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        y[1][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        y[1][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "02") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        y[2][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        y[2][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        y[2][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        y[2][3].push(csvArray[row][i])
                    }
            }
        else if (csvArray[0][i].slice(3,5) == "03") {//samedepth
                     if  (csvArray[0][i].slice(1,3) == "00") {//samedepth
                        y[3][0].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "01") {//samedepth
                        y[3][1].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "02") {//samedepth
                        y[3][2].push(csvArray[row][i])
                    }
                else if (csvArray[0][i].slice(1,3) == "03") {//samedepth
                        y[3][3].push(csvArray[row][i])
                    }
            }
    }
}//for y
   console.log(y[0][0])//[depth][day]




        for (i = 0; i < 31; i++) {//depth
            for (j = 0; j < 7; j++) {//day
                for (k = 0; k < x[i][j].length; k++) {//day
                xy[i][j].push( [x[i][j][k], y[i][j][k]] );
                }
            }
        }
    console.log(xy[0][0])//[depth][day] 



}

 
//day depth time X00 00 00 [samedepth[day[] [] [] []]  []  []]