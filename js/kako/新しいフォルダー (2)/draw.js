//var list = [[120,210], [230, 40], [200, 130], [15, 225], [182, 75], [50, 20], [160, 140], [160, 90], [310, 10]];
        <div id="myGraph"></div>
        <script src="js/draw.js"></script>

  console.log("draw")
var x = [143.32,143.2741599,143.2334576,143.19866,143.1699038];
var y = [37.25,37.18156634,37.09960291,37.00837645,36.90944641];
var xy = new Array();
for (i = 0; i < x.length; i++) {
        xy[i] = new Array( x[i], y[i] );
}



var x = [[[1,2,3],[40,50,60],[70,80,90]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]] ];//[depth][day]
var y = [[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]] ];
var xy = [];
        for (i = 0; i < 3; i++) {//depth
            xy.push( [] );
            for (j = 0; j < 3; j++) {//day
                xy[i].push( [] );
            }
        }

        for (i = 0; i < 3; i++) {//depth
            for (j = 0; j < 3; j++) {//day
                for (k = 0; k < x[i][j].length; k++) {//day
                xy[i][j].push( [x[i][j][k], y[i][j][k]] );/////代入
                }
            }
        }


console.log(xy)

var xyin = xy[0][1];
  

var svgWidth = 320; // SVG領域の横幅
var svgHeight = 240;    // SVG領域の縦幅
// SVGの表示領域を生成
var svg = d3.select("#myGraph")
	.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
// 散布図を描画
svg.selectAll("path")
    .data(xyin)
    .enter()
    .append("circle")   // 円を生成する
    .attr("cx", function(d,i){
        return d[0];    // 描画するX座標を計算
    })
    .attr("cy", function(d){
        return svgHeight-d[1];  // 描画するX座標を計算
    })
    .attr("r", 2)
    .attr("stroke", "black")    // 円の区切り線を黒色にする
    .attr("stroke-width", "1px")    // 円の線幅を指定する
    .attr("fill", "red");   // 円の塗りつぶしを黄色にする





function chs (){

    
xyin = xy[0][2];

    outputData();   // 生成
    removeData();   // 削除
    updateData();   // 更新

    function outputData(){
    svg.selectAll("path")
        .data(xyin)
        .enter()
        .append("circle")   // 円を生成する
        .attr("cx", function(d,i){
            return d[0];    // 描画するX座標を計算
        })
        .attr("cy", function(d){
            return svgHeight-d[1];  // 描画するX座標を計算
        })
        .attr("r", 1)
        .attr("stroke", "black")    // 円の区切り線を黒色にする
        .attr("stroke-width", "2px")    // 円の線幅を指定する
        .attr("fill", "red");   // 円の塗りつぶしを黄色にする
}

    function removeData(){
        svg.selectAll("path")    // tr要素を削除対象にする
            .data(xyin) // 対象になるデータ
            .exit() // 要素数がリスト数より多い場合は以下の処理を実行
            .remove();  // 要素を削除する
    }

    function updateData(){
    svg.selectAll("path")
        .data(xyin)
        .append("circle")   // 円を生成する
        .attr("cx", function(d,i){
            return d[0];    // 描画するX座標を計算
        })
        .attr("cy", function(d){
            return svgHeight-d[1];  // 描画するX座標を計算
        })
        .attr("r", 1)
        .attr("stroke", "black")    // 円の区切り線を黒色にする
        .attr("stroke-width", "2px")    // 円の線幅を指定する
        .attr("fill", "red");   // 円の塗りつぶしを黄色にする
    }





}






