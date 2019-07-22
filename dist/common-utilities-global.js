window["common-utilities"]=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";r.r(t);var e=n=>n,u=n=>!n;function i(n){return n.reduce((n,t)=>r=>t(n(r)),e)}function o(n,t=[]){return r=>(t.push(r),t.length>=n.length?n(...t):o(n,t))}function c(n){return Object.prototype.toString.call(n)}function f(n){return t=>c(t)==="[object ".concat(n,"]")}var a=i([f("Undefined"),u]),s=f("Array"),d=f("Date"),l=f("Function"),g=f("Number"),h=n=>g(n)&&!Number.isNaN(n),m=f("Object"),v=f("RegExp"),p=f("String"),y=n=>((n,t)=>s(n)&&n.every(t))(n,h);function b(n){return JSON.parse(JSON.stringify(n))}function O(n,t,r={}){return n.filter(n=>a(t[n])).forEach(n=>{r[n]=t[n]}),r}function S(...n){var t={};return n.forEach(n=>{Object.keys(n).forEach(r=>{t[r]=n[r]})}),t}function N(n={}){return Object.getOwnPropertyNames(n)}function E(n,t,r){for(var e=t.split("."),u=0;u<e.length;++u){if(!a(n))return r;n=n[e[u]]}return n}function T(n){return Object.keys(n).filter(t=>void 0===n[t]).forEach(t=>{delete n[t]}),n}function M(n,t){if(h(t)){for(var r="";t>0;)r+="".concat(n),--t;return r}}var x=(n,t)=>n+t,A=0,D=(n,t)=>n*t,j=1;function w(n){return h(n)?n>0?1:n<0?-1:0:void 0}function P(n,t){for(var r=[];n<=t;)r.push(n),n++;return r}function I(n){return P(1,n)}function F(n,t){return(M("0",t)+n).slice(-t)}function L(n,t){var r=n.toString(),e=r.indexOf(".");return e<0&&(e=r.length,r+="."),r+M("0",e+1+t-r.length)}function C(n){if(s(n))return n.filter(h).reduce(x,A)}function J(n){if(s(n))return n.filter(h).reduce(D,j)}function U(n){if(y(n)&&!(n.length<=0))return C(n)/n.length}function k(n){if(y(n)&&!(n.length<=0)){var t=b(n).sort();return t[Math.floor(t.length/2)]}}function R(n){if(s(n))return n.reduce((n,t)=>(n[t]=(n[t]||0)+1,n),{})}function _(n){var t=R(n);return Object.keys(t).reduce((n,r)=>(t[r]>n.count&&(n={element:r,count:t[r]}),n),{element:void 0,count:0})}function q(n){if(y(n)&&!(n.length<=1)){var t=U(n);return Math.sqrt(C(n.map(n=>(n=>n*n)(n-t)))/(n.length-1))}}function z(n,t){return J(tn(n,t))}function B(n){return z(10,n)}function H(n){var t=B(n);return n=>Math.round(n*t)/t}function Y(n){return parseInt(n,10)===n}function G(n){return Y(n)&&n>=0}function V(n){return Y(n)&&n>0}function X(n){return h(n)&&n>=0}function K(n){return h(n)&&n>0}function Q(n,t){return parseInt(n/t,10)}function W(n,t){if(y(n)&&y(t)&&n.length===t.length&&!(n.length<=1)){var r=U(n),e=U(t);return C(n.map((n,u)=>(n-r)*(t[u]-e)))/(n.length-1)}}function Z(n,t){if(y(n)&&y(t)&&n.length===t.length&&!(n.length<=1)){var r=W(n,t),e=q(n)*q(t);return 0===e?r?Number.NaN:0:r/e}}var $=(n,t)=>n<t;function nn(n){if(s(n))return n.slice(0)}function tn(n,t=1,r=[]){return t<=0?r:tn(n,t-1,[n,...r])}function rn(n){return l(n)&&2===n.length?n:$}function en(n,t){t=rn(t);for(var r=!0,e=(n=nn(n)).length-1;e>0&&r;e--){r=!1;for(var u=0;u<e;u++){var i=n[u],o=n[u+1];t(i,o)||(n[u]=o,n[u+1]=i,r=!0)}}return n}function un(n,t){if(n.length){var r=n[0],e=n.pop();if(!n.length)return r;n[0]=e,t=rn(t);for(var u=0;u<n.length;){var i=2*u+1,o=i+1,c=void 0;if(i>=n.length)break;c=o>=n.length?i:t(n[i],n[o])?o:i;var f=n[u],a=n[c];if(t(a,f))break;n[u]=a,n[c]=f,u=c}return r}}function on(n,t){for(var r=n.reduce((n,r)=>(function(n,t,r){n.push(t);var e=n.length-1;for(r=rn(r);e;){var u=Math.trunc((e-1)/2),i=n[e],o=n[u];if(!r(o,i))break;n[e]=o,n[u]=i,e=u}return n})(n,r,t),[]),e=[];r.length;)e.push(un(r,t));return e.reverse()}function cn(n,t,r){r=rn(r);var e=t.findIndex(t=>!r(t,n));e<0&&(e=t.length);var u=b(t);return u.splice(e,0,n),u}function fn(n,t){return n.reduce((n,r)=>cn(r,n,t),[])}function an(n=[],t=[],r){var e=0,u=0,i=[];for(r=rn(r);e<n.length&&u<t.length;){var o=n[e],c=t[u];r(o,c)?(i.push(o),e++):(i.push(c),u++)}return e<n.length?i.concat(n.slice(e)):u<t.length?i.concat(t.slice(u)):i}function sn(n,t){if(n.length<=1)return n;var r=Math.trunc(n.length/2),e=n.slice(0,r),u=n.slice(r);return an(sn(e,t),sn(u,t),t)}function dn(n,t){if(n.length<=1)return n;var r=n[0],e=[],u=[];return t=rn(t),n.slice(1).forEach(n=>{t(n,r)?e.push(n):u.push(n)}),dn(e,t).concat([r]).concat(dn(u,t))}function ln(n,t,r=!0){if(s(n)){if(n.length<=1)return r;for(var e=0;e<n.length-1;e++)if(!t(n[e],n[e+1]))return!1;return!0}}function gn(n){return ln(n,(n,t)=>n<t,!0)}function hn(n){return ln(n,(n,t)=>n<=t,!0)}function mn(n){return ln(n,(n,t)=>n>t,!0)}function vn(n){return ln(n,(n,t)=>n>=t,!0)}function pn(n,t){if(s(n)&&n.length)return n.slice(1).reduce(t,n[0])}function yn(n){return pn(n,(n,t)=>n>t?n:t)}function bn(n){return pn(n,(n,t)=>n<t?n:t)}function On(n){return n.reduce((n,t)=>n.includes(t)?n:[...n,t],[])}function Sn(n,t=[]){return n.reduce((n,t)=>s(t)?n.concat(t):(n.push(t),n),t)}function Nn(n,t=[]){return n.reduce((n,t)=>(s(t)?Nn(t,n):n.push(t),n),t)}function En(n){if(s(n)&&n.length)return n[Math.floor(Math.random()*n.length)]}function Tn(n,t){if(s(n)){var r=On(n.map(n=>t(n)));return r.sort(),r.reduce((r,e)=>(r[e]=n.filter(n=>t(n)===e),r),{})}}function Mn(n,t){return Tn(n,n=>n[t])}function xn(n){if(s(n)&&n.length)return n.slice(-1)[0]}function An(n){if(s(n)){var t=[],r=n.map(n=>({minimum:n,maximum:n}));for(t.unshift(r);r.length>1;){for(var e=[],u=0;u<r.length;u+=2){var i=r[u],o=void 0;if(u+1<r.length){var c=r[u+1];o={minimum:Math.min(i.minimum,c.minimum),maximum:Math.max(i.maximum,c.maximum)}}else o={minimum:i.minimum,maximum:i.maximum};e.push(o)}r=e,t.unshift(r)}return t}}function Dn(n,t,r,e,u,i,o){try{var c=n[i](o),f=c.value}catch(n){return void r(n)}c.done?t(f):Promise.resolve(f).then(e,u)}function jn(n){return function(){var t=this,r=arguments;return new Promise(function(e,u){var i=n.apply(t,r);function o(n){Dn(i,e,u,o,c,"next",n)}function c(n){Dn(i,e,u,o,c,"throw",n)}o(void 0)})}}function wn(n,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=jn(function*(n,t){for(var r=0;r<n.length;r++)yield t(n[r],r,n)})).apply(this,arguments)}function In(n,t){return Fn.apply(this,arguments)}function Fn(){return(Fn=jn(function*(n,t){for(var r=[],e=0;e<n.length;e++)r.push(yield t(n[e],e,n));return r})).apply(this,arguments)}function Ln(n){return n&&d(n)||(n=new Date),"".concat(n.getFullYear(),"-").concat(F(n.getMonth()+1,2),"-").concat(F(n.getDate(),2))}function Cn(n){return n&&d(n)||(n=new Date),"".concat(Ln(n)," ").concat(F(n.getHours(),2),":").concat(F(n.getMinutes(),2),":").concat(F(n.getSeconds(),2))}function Jn(n){return n&&d(n)||(n=new Date),"".concat(n.getUTCFullYear(),"-").concat(F(n.getUTCMonth()+1,2),"-").concat(F(n.getUTCDate(),2))}function Un(n){return n&&d(n)||(n=new Date),"".concat(Jn(n)," ").concat(F(n.getUTCHours(),2),":").concat(F(n.getUTCMinutes(),2),":").concat(F(n.getUTCSeconds(),2))}function kn(n,t){var r=t.valueOf()-n.valueOf(),e=Math.floor(r/1e3),u=Math.floor(e/3600);e-=3600*u;var i=Math.floor(e/60);return{hours:u,minutes:i,seconds:e-=60*i}}function Rn(n,t){var r=kn(n,t);return"".concat(F(r.hours,2),"h ").concat(F(r.minutes,2),"m ").concat(F(r.seconds,2),"s")}function _n(n,t,r=null,e=!1){return console.log("verbose is ".concat(e)),new Promise((e,u)=>{var i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open(n,t,!0),r&&i.setRequestHeader("Content-Type","application/json"),i.addEventListener("load",()=>{var n={status:i.status,statusText:i.statusText,responseText:i.responseText};if(200===i.status){try{n.responseJson=JSON.parse(i.responseText)}catch(t){console.error("JSON.parse error:",t),n.jsonParseError=t}e(n)}else u(n)}),i.addEventListener("abort",n=>{console.error("Abort. event:",n),u(new Error("Abort"))}),i.addEventListener("error",n=>{console.error("Error. event:",n),u(new Error("Error"))}),i.addEventListener("timeout",n=>{console.error("Timeout. event:",n),u(new Error("Timeout"))}),r?i.send(JSON.stringify(r)):i.send(null)})}function qn(n,t=!1){return _n("GET",n,null,t)}function zn(n,t,r=!1){return _n("POST",n,t,r)}function Bn(n,t){try{return JSON.parse(n)}catch(n){if(!a(t))throw n;return t}}function Hn(n,t){return n.push(t),n}function Yn(n,...t){var r=nn(t),e=t.shift();return()=>[e,Yn(n,...Hn(t,n(...r)))]}function Gn(n,t,r){var e=[];if(function n(t,r,e,u){e>=r.length?t.push(b(u)):(n(t,r,e+1,u),u.push(r[e]),n(t,r,e+1,u),u.pop())}(e,n,0,[]),t){e.sort(r||((n,t)=>{var r=n.length-t.length;if(r)return r;for(var e=0;e<n.length;++e){var u=n[e]-t[e];if(u)return u}return 0}))}return e}function Vn(n,t,r){return n.every(n=>a(t.find(t=>r(n,t))))}function Xn(n,t,r){return l(r)||(r=(n,t)=>n===t),s(n)&&s(t)&&Vn(n,t,r)&&Vn(t,n,r)}function Kn(...n){var t=b(n[0]);return n.slice(1).forEach(n=>{t=t.filter(t=>n.includes(t))}),t}function Qn(...n){var t=[];return n.forEach(n=>{n.forEach(n=>{t.includes(n)||t.push(n)})}),t}function Wn(){var n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}r.d(t,"uuid",function(){return Wn}),r.d(t,"bubbleSort",function(){return en}),r.d(t,"categorizeArrayElementsByFunction",function(){return Tn}),r.d(t,"categorizeArrayElementsByProperty",function(){return Mn}),r.d(t,"cloneArray",function(){return nn}),r.d(t,"createArrayFromElement",function(){return tn}),r.d(t,"findSuperlativeElement",function(){return pn}),r.d(t,"flattenAllLevels",function(){return Nn}),r.d(t,"flattenOneLevel",function(){return Sn}),r.d(t,"generateHierarchyOfLocalMaximaAndMinima",function(){return An}),r.d(t,"getLastElementOfArray",function(){return xn}),r.d(t,"getRandomArrayElement",function(){return En}),r.d(t,"heapSort",function(){return on}),r.d(t,"insertionSort",function(){return fn}),r.d(t,"insertNumberIntoArray",function(){return cn}),r.d(t,"isArrayInDecreasingOrder",function(){return mn}),r.d(t,"isArrayInIncreasingOrder",function(){return gn}),r.d(t,"isArrayInNonDecreasingOrder",function(){return hn}),r.d(t,"isArrayInNonIncreasingOrder",function(){return vn}),r.d(t,"max",function(){return yn}),r.d(t,"mergeSort",function(){return sn}),r.d(t,"mergeTwoSortedArrays",function(){return an}),r.d(t,"min",function(){return bn}),r.d(t,"quickSort",function(){return dn}),r.d(t,"removeDuplicatesFromArray",function(){return On}),r.d(t,"asyncForEach",function(){return wn}),r.d(t,"asyncMap",function(){return In}),r.d(t,"getDateString",function(){return Ln}),r.d(t,"getDateUTCString",function(){return Jn}),r.d(t,"getDateTimeString",function(){return Cn}),r.d(t,"getDateTimeUTCString",function(){return Un}),r.d(t,"getDifferenceBetweenDatesAsObject",function(){return kn}),r.d(t,"getDifferenceBetweenDatesAsString",function(){return Rn}),r.d(t,"booleanInvertFunction",function(){return u}),r.d(t,"compositeFunctions",function(){return i}),r.d(t,"curry",function(){return o}),r.d(t,"identityFunction",function(){return e}),r.d(t,"getJson",function(){return qn}),r.d(t,"postJson",function(){return zn}),r.d(t,"safeJsonParse",function(){return Bn}),r.d(t,"makeLazyList",function(){return Yn}),r.d(t,"histogram",function(){return R}),r.d(t,"mean",function(){return U}),r.d(t,"median",function(){return k}),r.d(t,"mode",function(){return _}),r.d(t,"sum",function(){return C}),r.d(t,"additiveIdentity",function(){return A}),r.d(t,"aToThePowerOfB",function(){return z}),r.d(t,"correlationCoefficient",function(){return Z}),r.d(t,"covariance",function(){return W}),r.d(t,"factory_fnRoundToNDigits",function(){return H}),r.d(t,"fnAddition",function(){return x}),r.d(t,"fnMultiplication",function(){return D}),r.d(t,"generateFirstNNaturalNumbers",function(){return I}),r.d(t,"generateRange",function(){return P}),r.d(t,"getSign",function(){return w}),r.d(t,"integerDivision",function(){return Q}),r.d(t,"isInteger",function(){return Y}),r.d(t,"isNonNegativeInteger",function(){return G}),r.d(t,"isNonNegativeNumber",function(){return X}),r.d(t,"isPositiveInteger",function(){return V}),r.d(t,"isPositiveNumber",function(){return K}),r.d(t,"multiplicativeIdentity",function(){return j}),r.d(t,"product",function(){return J}),r.d(t,"standardDeviation",function(){return q}),r.d(t,"tenToThePowerOfN",function(){return B}),r.d(t,"zeroExtendNumber",function(){return L}),r.d(t,"zeroPadNumber",function(){return F}),r.d(t,"clone",function(){return b}),r.d(t,"combineObjects",function(){return S}),r.d(t,"copySpecifiedObjectProperties",function(){return O}),r.d(t,"deleteUndefinedValuesFromObject",function(){return T}),r.d(t,"getOwnProperties",function(){return N}),r.d(t,"getProperty",function(){return E}),r.d(t,"areSetsEqual",function(){return Xn}),r.d(t,"getAllSubsets",function(){return Gn}),r.d(t,"intersection",function(){return Kn}),r.d(t,"isSubset",function(){return Vn}),r.d(t,"union",function(){return Qn}),r.d(t,"replicateString",function(){return M}),r.d(t,"getTypeString",function(){return c}),r.d(t,"isArray",function(){return s}),r.d(t,"isArrayOfNumbers",function(){return y}),r.d(t,"isDate",function(){return d}),r.d(t,"isDefined",function(){return a}),r.d(t,"isFunction",function(){return l}),r.d(t,"isNumber",function(){return h}),r.d(t,"isObject",function(){return m}),r.d(t,"isRegularExpression",function(){return v}),r.d(t,"isString",function(){return p})}]);