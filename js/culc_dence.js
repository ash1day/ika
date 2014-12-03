console.log("culc_dence")





var T = 5;
var P = 10000;
var S = 35;
var p = P / 10;


var ρw  =   999.842594 + (6.793952* Math.pow(10,-2))*Math.pow(T,1) + ((- 9.095290)* Math.pow(10,-3))*Math.pow(T,2)
       + (1.001685* Math.pow(10,-4))*Math.pow(T,3) - (1.120083* Math.pow(10,-6))*Math.pow(T,4) + (6.536332* Math.pow(10,-9))*Math.pow(T,5);


var ρ_0  =  ρw + Math.pow(S,1)*(0.824493 + ((-4.0899)* Math.pow(10,-3))*T + (7.6438* Math.pow(10,-5))*Math.pow(T,2) + ((-8.2467)* Math.pow(10,-7))*Math.pow(T,3) + (5.3875* Math.pow(10,-9))*Math.pow(T,4) )
                 + Math.pow(S,1.5)*(-5.72466* Math.pow(10,-3) + (1.0227* Math.pow(10,-4))*T + (-1.6546* Math.pow(10,-6))*Math.pow(T,2))
                 + Math.pow(S,2)*(4.8314* Math.pow(10,-4));

var Kw  =   19652.21 + 148.4206*Math.pow(T,1) + (-2.327105)*Math.pow(T,2) + (1.360477* Math.pow(10,-2))*Math.pow(T,3) + (-5.155288* Math.pow(10,-5))*Math.pow(T,4);
    
var K_0    =   Kw + Math.pow(S,1)*(54.6746-0.603459*Math.pow(T,1) + (1.09987* Math.pow(10,-2))*Math.pow(T,2) + (-6.1670* Math.pow(10,-5))*Math.pow(T,3))
      + Math.pow(S,1.5)*(7.944* Math.pow(10,-2) + (1.6483* Math.pow(10,-2))*T + (-5.3009* Math.pow(10,-4))*Math.pow(T,2));

var K  =  K_0
       + Math.pow(p,1)*(3.239908 + (1.43713* Math.pow(10,-3))*Math.pow(T,1) + (1.16092* Math.pow(10,-4))*Math.pow(T,2) + (-5.77905* Math.pow(10,-7))*Math.pow(T,3))
       + Math.pow(p,1)*Math.pow(S,1)*((2.2838* Math.pow(10,-3)) + (-1.0981* Math.pow(10,-5))*Math.pow(T,1) + (-1.6078* Math.pow(10,-6))*Math.pow(T,2))
       + Math.pow(p,1)*Math.pow(S,1.5)*(1.91075* Math.pow(10,-4))
       +Math.pow(p,2)*((8.50935* Math.pow(10,-5)) + (-6.12293* Math.pow(10,-6))*Math.pow(T,1) + (5.2787* Math.pow(10,-8))*Math.pow(T,2))
       +Math.pow(p,2)*Math.pow(S,1)*((-9.9348* Math.pow(10,-7)) +(2.0816* Math.pow(10,-8))*Math.pow(T,1) + (9.1697* Math.pow(10,-10))*Math.pow(T,2));

var ρ  =  ρ_0/ ( 1 - (p / K));
console.log(ρ)
console.log(K)




function get_v_dence (z,salinity,tempereture){

 P = z;
 S = salinity;
 T = tempereture;
 p = P / 10;



 ρw  =   999.842594 + (6.793952* Math.pow(10,-2))*Math.pow(T,1) + ((- 9.095290)* Math.pow(10,-3))*Math.pow(T,2)
       + (1.001685* Math.pow(10,-4))*Math.pow(T,3) - (1.120083* Math.pow(10,-6))*Math.pow(T,4) + (6.536332* Math.pow(10,-9))*Math.pow(T,5);


 ρ_0  =  ρw + Math.pow(S,1)*(0.824493 + ((-4.0899)* Math.pow(10,-3))*T + (7.6438* Math.pow(10,-5))*Math.pow(T,2) + ((-8.2467)* Math.pow(10,-7))*Math.pow(T,3) + (5.3875* Math.pow(10,-9))*Math.pow(T,4) )
                 + Math.pow(S,1.5)*(-5.72466* Math.pow(10,-3) + (1.0227* Math.pow(10,-4))*T + (-1.6546* Math.pow(10,-6))*Math.pow(T,2))
                 + Math.pow(S,2)*(4.8314* Math.pow(10,-4));

 Kw  =   19652.21 + 148.4206*Math.pow(T,1) + (-2.327105)*Math.pow(T,2) + (1.360477* Math.pow(10,-2))*Math.pow(T,3) + (-5.155288* Math.pow(10,-5))*Math.pow(T,4);
    
 K_0    =   Kw + Math.pow(S,1)*(54.6746-0.603459*Math.pow(T,1) + (1.09987* Math.pow(10,-2))*Math.pow(T,2) + (-6.1670* Math.pow(10,-5))*Math.pow(T,3))
      + Math.pow(S,1.5)*(7.944* Math.pow(10,-2) + (1.6483* Math.pow(10,-2))*T + (-5.3009* Math.pow(10,-4))*Math.pow(T,2));

 K  =  K_0
       + Math.pow(p,1)*(3.239908 + (1.43713* Math.pow(10,-3))*Math.pow(T,1) + (1.16092* Math.pow(10,-4))*Math.pow(T,2) + (-5.77905* Math.pow(10,-7))*Math.pow(T,3))
       + Math.pow(p,1)*Math.pow(S,1)*((2.2838* Math.pow(10,-3)) + (-1.0981* Math.pow(10,-5))*Math.pow(T,1) + (-1.6078* Math.pow(10,-6))*Math.pow(T,2))
       + Math.pow(p,1)*Math.pow(S,1.5)*(1.91075* Math.pow(10,-4))
       +Math.pow(p,2)*((8.50935* Math.pow(10,-5)) + (-6.12293* Math.pow(10,-6))*Math.pow(T,1) + (5.2787* Math.pow(10,-8))*Math.pow(T,2))
       +Math.pow(p,2)*Math.pow(S,1)*((-9.9348* Math.pow(10,-7)) +(2.0816* Math.pow(10,-8))*Math.pow(T,1) + (9.1697* Math.pow(10,-10))*Math.pow(T,2));

 ρ  =  ρ_0/ ( 1 - (p / K));

return ρ - 1000;
}














/*


var T = 15;
var P = 10000;
var S = 35;

///var t = T * 1.00024;
var t = 5;

var p = P / 10;

var a0 = 999.842594 ;
var a1 = 6.793952 * Math.pow(10,-2) ;
var a2 = -9.095290 * Math.pow(10,-3);
var a3 = 1.001685 * Math.pow(10,-4);
var a4 = -1.120083 * Math.pow(10,-6) ;
var a5 = 6.536332 * Math.pow(10,-9);
var b0 = 8.24493 * Math.pow(10,-1);
var b1 = -4.0899 * Math.pow(10,-3);
var b2 = 7.6438 * Math.pow(10,-5);
var b3 = -8.2467 * Math.pow(10,-7);
var b4 = 5.3875 * Math.pow(10,-9);
var c0 = -5.72466 * Math.pow(10,-3);
var c1 = 1.0227 * Math.pow(10,-4);
var c2 = -1.6546 * Math.pow(10,-6);
var d0 = 4.8314 * Math.pow(10,-4);
var e0 = 19652.21 ;
var e1 = 148.4206 ;
var e2 = -2.327105 ;
var e3 = 1.360477 * Math.pow(10,-2);
var e4 = -5.155288 * Math.pow(10,-5);
var f0 = 54.6746 ;
var f1 = -0.603459 ;
var f2 = 1.09987 * Math.pow(10,-2) ;
var f3 = -6.1670 * Math.pow(10,-5);
var g0 = 7.944 * Math.pow(10,-2);
var g1 = 1.6483 * Math.pow(10,-2);
var g2 = -5.3009 * Math.pow(10,-4);
var h0 = 3.239908 ;
var h1 = 1.43713 * Math.pow(10,-3);
var h2 = 1.16092 * Math.pow(10,-4) ;
var h3 = -5.77905 * Math.pow(10,-7);
var i0 = 2.2838 * Math.pow(10,-3);
var i1 = -1.0981 * Math.pow(10,-5);
var i2 = -1.6078 * Math.pow(10,-6);
var j0 = 1.91075 * Math.pow(10,-4);
var k0 = 8.50935 * Math.pow(10,-5) ;
var k1 = -6.12293 * Math.pow(10,-6) ;
var k2 = 5.2787 * Math.pow(10,-8);
var m0 = -9.9348 * Math.pow(10,-7) ;
var m1 = 2.0816 * Math.pow(10,-8) ;
var m2 = 9.1697 * Math.pow(10,-2);


var Aw = h0 + h1*Math.pow(t,1) + h2*Math.pow(t,2) + h3*Math.pow(t,3);
var Bw = k0 + k1*Math.pow(t,1) + k2*Math.pow(t,2);

var A = Aw +(i0 + i1*Math.pow(t,1) + i2*Math.pow(t,2))*Math.pow(S,1) + j0*Math.pow(S,(1.5));
var B = Bw +(m0 + m1*Math.pow(t,1) + m2*Math.pow(t,2))*Math.pow(S,1);
var Kw = e0 + e1*Math.pow(t,1) + e2*Math.pow(t,2) + e3*Math.pow(t,3) + e4*Math.pow(t,4);

var K_0 = Kw +(f0 + f1*Math.pow(t,1) + f2*Math.pow(t,2) + f3*Math.pow(t,3))*Math.pow(S,1) +(g0 + g1*Math.pow(t,1) + g2*Math.pow(t,2))*Math.pow(S,(1.5));
var K = K_0 + A*p + B*Math.pow(p,2);
var ρw = a0 + a1*Math.pow(t,1) + a2*Math.pow(t,2) + a3*Math.pow(t,3) + a4*Math.pow(t,4) + a5*Math.pow(t,5);
var ρ_dence_0 = ρw + (b0 + b1*Math.pow(t,1) + b2*Math.pow(t,2) + b3*Math.pow(t,3) + b4*Math.pow(t,4))*Math.pow(S,1) +(c0 + c1*Math.pow(t,1) + c2*Math.pow(t,2))*Math.pow(S,(1.5))+ d0*Math.pow(S,2);
var ρ_dence = ρ_dence_0/( 1 - (p/K) );
var dence = ρ_dence-1000;




function ρ_dence (S,t,p){
    return ρ_dence_0(S,t)/(1 - (p/K(S, t, p))) ;
}
function ρ_dence_0 (S,t){
    return ρw + (b0 + b1*Math.pow(t,1) + b2*Math.pow(t,2) + b3*Math.pow(t,3) + b4*Math.pow(t,4))*Math.pow(S,1) +(c0 + c1*Math.pow(t,1) + c2*Math.pow(t,2))*Math.pow(S,(1.5))+ d0*Math.pow(S,2) ;
}
function K (S,t,p){
    return K_0(S,t) + A*p + B*Math.pow(p,2) ;
}
function K_0 (S,t){
    return Kw +(f0 + f1*Math.pow(t,1) + f2*Math.pow(t,2) + f3*Math.pow(t,3))*Math.pow(S,1) +(g0 + g1*Math.pow(t,1) + g2*Math.pow(t,2))*Math.pow(S,(1.5)) ;
}

*/




///////////////////////////////////////////////////////////////////////////////////////////////











































