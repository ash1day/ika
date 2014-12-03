console.log("jsdap")


var date = new Date(2000, 0, 1);
var baseDate = new Date(1970, 0, 1);
var x = Math.floor((date.getTime() - baseDate.getTime()) / 86400000) + 719164;



console.log(x);







loadData("http://dias-tb2.tkl.iis.u-tokyo.ac.jp:10080/dods/secret/s.dods?s[0][0:10][0:10][0:10]", function(data) {
console.log(data);
})




