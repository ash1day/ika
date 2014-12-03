d3.csv("data/0929_CPUE+point(XYZ).csv", function(error, data){
	var text = "";
	for(var i=0; i<data.length; i++){
		text += data[i].CPUE + " = " + data[i].CPUE + "<br>";
	}
	//s = "CPUE"
	//console.log(error)
	//console.log(data)
	//console.log(data[0].CPUE)
	//console.log("d3 csv")
	//console.log(data[1].indexOf("1"))
	//console.log(data[0].s)
	d3.select("#result1").html(text);
});





