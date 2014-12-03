console.log("ss")

        list = [1,2,4]
        d3.select("#result")    // table要素を選択
            .selectAll("tr")    // tr要素を__data__保存の対象にする
            .data(list) // 対象になるデータ
            .enter()    // データの数だけ以下の続く要素を追加
            .append("tr")   // tr要素を追加
            .append("td")   // td要素を追加
            .text(String);  // 内容をそのまま文字列で出力

function ch (){
    var list = [ ];
    // ランダムな個数でランダムなデータを生成
    var n = Math.floor(Math.random() * 10) + 1;
    for(var i=0; i<n; i++){
        list.push(Math.floor(Math.random() * 1000));
    }

var svg2 = d3.select("#result")



    outputData();   // 生成
    removeData();   // 削除
    updateData();   // 更新
    // 要素を出力する関数
    function outputData(){
        svg2.selectAll("tr")    // tr要素を__data__保存の対象にする
            .data(list) // 対象になるデータ
            .enter()    // データの数だけ以下の続く要素を追加
            .append("tr")   // tr要素を追加
            .append("td")   // td要素を追加
    }
    // 要素（とデータ）を削除する関数
    function removeData(){
        svg2.selectAll("tr")    // tr要素を削除対象にする
            .data(list) // 対象になるデータ
            .exit() // 要素数がリスト数より多い場合は以下の処理を実行
            .remove();  // 要素を削除する
    }
    // 要素の内容を更新する関数
    function updateData(){
        svg2.selectAll("td")    // データの出力先をtd要素を対象にする
            .data(list) // 対象になるデータ
            .text(String);  // 内容をそのまま文字列で出力
    }
}