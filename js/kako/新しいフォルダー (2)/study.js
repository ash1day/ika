console.log("study")


createsvg();

function createsvg () {
  var svg = d3.select("#example").append("svg")
      .attr({
        width: 640,
        height: 480
      });

  var c1 = [100, 90, 30];
  var c2 = [200, 120, 20];
  var carray = [c1, c2];

  var color = d3.scale.category10();

  var g = svg.selectAll('g')
    .data(carray).enter().append('g')
    .attr({
      // 座標設定を動的に行う
      transform: function(d) {
        return "translate(" + d[0] + "," + d[1] + ")";
      },
    });

  // g.appendでデータ毎に要素を追加できる
  g.append('rect')
     .attr({
        width: 50,
        height: 50,
        fill: function(d,i){return color(i);}
    });

/*  g.append('rect')
    .attr({
      'r': function(d) { return d[2]; },
      'fill': function(d,i) { return color(i); },
    });

*/

  g.append('text')
    .attr({
      // 真ん中若干下に配置されるように、文字色は白に。
      'text-anchor': "middle",
      'dy': ".50em",
      'fill': "white",
    })
    // iは0から始まるので、+1しておく
    .text(function(d,i) { return i+1; });
};












