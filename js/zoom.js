console.log("zoom")



var zoom = d3.behavior.zoom()
    .scale(1)
    .scaleExtent([.1, 10])
    .on("zoom", zoomed);

var svg = d3.select("body")
    .call(zoom);

function zoomed() {
    var t = "translate(" + d3.event.translate[0] + 'px,' + d3.event.translate[1] +"px) " +
        "scale(" + d3.event.scale + ',' + d3.event.scale + ")";
    d3.select("#myGraph")
        .style("transform-origin", "0 0")
        .style("-moz-transform-origin", "0 0")
        .style("-webkit-transform-origin", "0 0")
        .style("-o-transform-origin", "0 0")
        .style("-ms-transform-origin", "0 0")
        .style("transform", t)
        .style("-moz-transform", t)
        .style("-webkit-transform", t)
        .style("-o-transform", t)
        .style("-ms-transform", t);
}































