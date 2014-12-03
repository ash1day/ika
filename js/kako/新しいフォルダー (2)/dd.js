    <-- <div id="shiritori_list"></div>
        <script src="js/dd.js"></script>
-->
@@



var svg = d3.select('body').append('svg')
             .attr('height', '300')
             .attr('width', '500');
var g = svg.append('g');


var shiritori = ['りんご', 'ゴリラ', 'ラッパ'];


// ul#shiritori_list を選択




function update_shiritori() {
  var s = d3.select('ul#shiritori_list')
    .selectAll('li')
    .data(shiritori);

  // 作成
  s.enter().append('li');

  // 削除
  s.exit().remove();

  // 更新
  s.text(function(d, i) { return (i + 1) + '番目は' + d; });
  console.log(s)
}
