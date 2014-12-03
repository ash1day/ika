console.log("cuecle")

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

var xyin = xy[0][1];

var svg = d3.select('body').append('svg').attr({
    width : 200,
    height : 300
});
svgHeight = 300


svg.selectAll('circle')
.data(xyin)
.enter()
.append('circle')
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






function chss (){

    var svg = d3.select('body').append('svg').attr({
    width : 200,
    height : 300
});
xyin = xy[0][1];
console.log(xyin);
    outputData();   // 生成
    removeData();   // 削除
    updateData();   // 更新

    function outputData(){
            svg.selectAll("circle")    // tr要素を__data__保存の対象にする
            .data(xyin) // 対象になるデータ
            .enter()    // データの数だけ以下の続く要素を追加
            .append("circle")   // tr要素を追加
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
            svg.selectAll("circle")    // tr要素を削除対象にする
            .data(xyin) // 対象になるデータ
            .exit() // 要素数がリスト数より多い場合は以下の処理を実行
            .remove();  // 要素を削除する
        }

    function updateData(){
        svg.selectAll("circle")
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

