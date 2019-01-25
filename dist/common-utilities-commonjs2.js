module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("url")},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("https")},function(e,n,t){"use strict";function r(e){return Object.prototype.toString.call(e)}function o(e){return n=>r(n)===`[object ${e}]`}function u(e){return void 0!==e}t.r(n);var i=o("Array"),s=o("Date"),c=o("Function"),f=o("Number"),a=o("Object"),d=o("RegExp"),l=o("String");function p(e){return i(e)&&e.every(e=>f(e))}function g(e){return JSON.parse(JSON.stringify(e))}function h(e,n,t={}){return e.forEach(e=>{u(n[e])&&(t[e]=n[e])}),t}function v(e={}){return Object.getOwnPropertyNames(e)}function m(e,n,t){for(var r=n.split("."),o=0;o<r.length;++o){if(!u(e))return t;e=e[r[o]]}return e}function y(e,n=1,t=[]){return n<=0?t:y(e,n-1,[e,...t])}function T(e,n){var t=n.findIndex(n=>n>=e);t<0&&(t=n.length);var r=g(n);return r.splice(t,0,e),r}function b(e){return e.reduce((e,n)=>T(n,e),[])}function S(e){return e.reduce((e,n)=>e.includes(n)?e:[...e,n],[])}function O(e,n=[]){return e.reduce((e,n)=>i(n)?e.concat(n):(e.push(n),e),n)}function M(e,n=[]){return e.reduce((e,n)=>(i(n)?M(n,e):e.push(n),e),n)}function N(e){if(i(e)&&e.length)return e[Math.floor(Math.random()*e.length)]}var x=(e,n)=>e+n,E=0,P=(e,n)=>e*n,$=1;function j(e,n){for(var t=[];e<=n;)t.push(e),e++;return t}function w(e){return j(1,e)}function J(e,n){return w(n).reduce(n=>n+e,"")}function D(e,n){return(J("0",n)+e).slice(-n)}function A(e,n){var t=e.toString(),r=t.indexOf(".");return r<0&&(r=t.length,t+="."),t+J("0",r+1+n-t.length)}function H(e){if(i(e))return e.filter(f).reduce(x,E)}function C(e){if(i(e))return e.filter(f).reduce(P,$)}function R(e){if(p(e)&&!(e.length<=0))return H(e)/e.length}function q(e){if(p(e)&&!(e.length<=0)){var n=g(e).sort();return n[Math.floor(n.length/2)]}}function L(e){if(i(e))return e.reduce((e,n)=>(e[n]=(e[n]||0)+1,e),{})}function U(e){var n=L(e);return Object.keys(n).reduce((e,t)=>(n[t]>e.count&&(e={element:t,count:n[t]}),e),{element:void 0,count:0})}function _(e,n){return C(y(e,n))}function F(e){return _(10,e)}function I(e){var n=F(e);return e=>Math.round(e*n)/n}function B(e){return parseInt(e,10)===e}function X(e,n){return parseInt(e/n,10)}function k(e){return e&&s(e)||(e=new Date),`${e.getFullYear()}-${D(e.getMonth()+1,2)}-${D(e.getDate(),2)} ${D(e.getHours(),2)}:${D(e.getMinutes(),2)}:${D(e.getSeconds(),2)}`}function z(e){return e&&s(e)||(e=new Date),`${e.getUTCFullYear()}-${D(e.getUTCMonth()+1,2)}-${D(e.getUTCDate(),2)} ${D(e.getUTCHours(),2)}:${D(e.getUTCMinutes(),2)}:${D(e.getUTCSeconds(),2)}`}function G(e,n){var t=n.valueOf()-e.valueOf(),r=Math.floor(t/1e3),o=Math.floor(r/3600);r-=3600*o;var u=Math.floor(r/60);return{hours:o,minutes:u,seconds:r-=60*u}}function Y(e,n){var t=G(e,n);return`${D(t.hours,2)}h ${D(t.minutes,2)}m ${D(t.seconds,2)}s`}function V(e,n,t=null,r=!1){return console.log(`verbose is ${r}`),new Promise((r,o)=>{var u=new XMLHttpRequest;u.overrideMimeType("application/json"),u.open(e,n,!0),t&&u.setRequestHeader("Content-Type","application/json"),u.addEventListener("load",()=>{var e={status:u.status,statusText:u.statusText,responseText:u.responseText};if(200===u.status){try{e.responseJson=JSON.parse(u.responseText)}catch(n){console.error("JSON.parse error:",n),e.jsonParseError=n}r(e)}else o(e)}),u.addEventListener("abort",e=>{console.error("Abort. event:",e),o(new Error("Abort"))}),u.addEventListener("error",e=>{console.error("Error. event:",e),o(new Error("Error"))}),u.addEventListener("timeout",e=>{console.error("Timeout. event:",e),o(new Error("Timeout"))}),t?u.send(JSON.stringify(t)):u.send(null)})}function K(e,n,r=null,o=!1){var u=t(0);return new Promise((i,s)=>{var c,f=u.parse(n),a={protocol:f.protocol,hostname:f.hostname,port:f.port,path:f.path,method:e};"http:"===a.protocol?c=t(1):"https:"===a.protocol?c=t(2):s(`Unsupported protocol: ${a.protocol}`);var d=c.request(a,e=>{var n="";o&&(console.log(`HTTP response status: ${e.statusCode} ${e.statusMessage}`),console.log(`HTTP response headers: ${JSON.stringify(e.headers)}`)),e.setEncoding("utf8"),e.on("data",e=>{o&&console.log(`HTTP response body chunk: ${e}`),n+=e}),e.on("end",()=>{var t={status:e.statusCode,statusText:e.statusMessage,responseText:n};o&&console.log("No more data in the response.");try{t.responseJson=JSON.parse(n),o&&console.log("JSON parse succeeded.")}catch(e){t.jsonParseError=e,o&&console.log("JSON parse failed. Error:",e)}o&&(console.log("Sending result:",t.status,t.statusText),console.log("rawResponseBody",t.responseText),console.log("jsonResponseBody",t.responseJson)),i(t)})});if(d.on("error",e=>{console.error(`HTTP request error: ${e.message||e}`),s(e)}),null!==r){var l=JSON.stringify(r);d.setHeader("Content-Type","application/json"),d.setHeader("Content-Length",Buffer.byteLength(l)),d.write(l)}return d.end(),()=>{o&&console.log("sendHttpRequest_serverSideVersion() : The End.")}})}function Q(e,n=!1){return"undefined"!=typeof XMLHttpRequest?V("GET",e,null,n):K("GET",e,null,n)}function W(e,n,t=!1){return"undefined"!=typeof XMLHttpRequest?V("POST",e,n,t):K("POST",e,n,t)}function Z(e,n){try{return JSON.parse(e)}catch(e){if(!u(n))throw e;return n}}function ee(e,n,t){var r=[];if(function e(n,t,r,o){r>=t.length?n.push(g(o)):(e(n,t,r+1,o),o.push(t[r]),e(n,t,r+1,o),o.pop())}(r,e,0,[]),n){r.sort(t||((e,n)=>{var t=e.length-n.length;if(t)return t;for(var r=0;r<e.length;++r){var o=e[r]-n[r];if(o)return o}return 0}))}return r}function ne(e,n,t){return e.every(e=>u(n.find(n=>t(e,n))))}function te(e,n,t){return c(t)||(t=((e,n)=>e===n)),i(e)&&i(n)&&ne(e,n,t)&&ne(n,e,t)}function re(){var e=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+e().substr(0,3)+"-"+e()+e()+e()}t.d(n,"uuid",function(){return re}),t.d(n,"createArrayFromElement",function(){return y}),t.d(n,"flattenAllLevels",function(){return M}),t.d(n,"flattenOneLevel",function(){return O}),t.d(n,"getRandomArrayElement",function(){return N}),t.d(n,"insertionSort",function(){return b}),t.d(n,"insertNumberIntoArray",function(){return T}),t.d(n,"removeDuplicatesFromArray",function(){return S}),t.d(n,"getDateTimeString",function(){return k}),t.d(n,"getDateTimeUTCString",function(){return z}),t.d(n,"getDifferenceBetweenDatesAsObject",function(){return G}),t.d(n,"getDifferenceBetweenDatesAsString",function(){return Y}),t.d(n,"getJson",function(){return Q}),t.d(n,"postJson",function(){return W}),t.d(n,"safeJsonParse",function(){return Z}),t.d(n,"histogram",function(){return L}),t.d(n,"mean",function(){return R}),t.d(n,"median",function(){return q}),t.d(n,"mode",function(){return U}),t.d(n,"sum",function(){return H}),t.d(n,"additiveIdentity",function(){return E}),t.d(n,"aToThePowerOfB",function(){return _}),t.d(n,"factory_fnRoundToNDigits",function(){return I}),t.d(n,"fnAddition",function(){return x}),t.d(n,"fnMultiplication",function(){return P}),t.d(n,"generateFirstNNaturalNumbers",function(){return w}),t.d(n,"generateRange",function(){return j}),t.d(n,"integerDivision",function(){return X}),t.d(n,"isInteger",function(){return B}),t.d(n,"multiplicativeIdentity",function(){return $}),t.d(n,"product",function(){return C}),t.d(n,"replicateString",function(){return J}),t.d(n,"tenToThePowerOfN",function(){return F}),t.d(n,"zeroExtendNumber",function(){return A}),t.d(n,"zeroPadNumber",function(){return D}),t.d(n,"clone",function(){return g}),t.d(n,"copySpecifiedObjectProperties",function(){return h}),t.d(n,"getOwnProperties",function(){return v}),t.d(n,"getProperty",function(){return m}),t.d(n,"areSetsEqual",function(){return te}),t.d(n,"getAllSubsets",function(){return ee}),t.d(n,"isSubset",function(){return ne}),t.d(n,"getTypeString",function(){return r}),t.d(n,"isArray",function(){return i}),t.d(n,"isArrayOfNumbers",function(){return p}),t.d(n,"isDate",function(){return s}),t.d(n,"isDefined",function(){return u}),t.d(n,"isFunction",function(){return c}),t.d(n,"isNumber",function(){return f}),t.d(n,"isObject",function(){return a}),t.d(n,"isRegularExpression",function(){return d}),t.d(n,"isString",function(){return l})}]);
//# sourceMappingURL=common-utilities-commonjs2.js.map