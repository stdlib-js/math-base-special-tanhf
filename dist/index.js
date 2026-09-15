"use strict";var f=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var s=f(function(I,n){
var i=require('@stdlib/number-float64-base-to-float32/dist');function p(r){return r===0?-.333332819422:i(-.333332819422+i(r*i(.133314422036+i(r*i(-.0537397155531+i(r*i(.0206390887954+i(r*-.00570498872745))))))))}n.exports=p
});var l=f(function(h,q){
var c=require('@stdlib/math-base-special-absf/dist'),E=require('@stdlib/math-base-special-abs2f/dist'),O=require('@stdlib/math-base-special-expf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/constants-float32-max-ln/dist'),T=s(),v=e(0),u=e(1),o=e(2),b=e(.625);function y(r){var a,t;return r=e(r),t=c(r),t>e(.5*F)?r<v?-u:u:t>=b?(a=O(e(o*t)),t=e(u-e(o/e(a+u))),r<v&&(t=-t),t):r===v?r:(a=E(r),e(r+e(e(r*a)*T(a))))}q.exports=y
});var G=l();module.exports=G;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
