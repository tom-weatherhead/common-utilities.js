/**
 * thaw-common-utilities.js
 *
 * @copyright 2018 Tom Weatherhead <null@2hrd4u.org> (https://httpbin.org/status/418)
 * @license MIT
 * @version 0.0.7
 */
if (typeof window !== 'undefined') {

window["common-utilities"]=function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";function e(n){return JSON.parse(JSON.stringify(n))}function u(n,r,t={}){return n.forEach(n=>{(function(n){return void 0!==n})(r[n])&&(t[n]=r[n])}),t}function o(n={}){return Object.getOwnPropertyNames(n)}function i(n){return Object.prototype.toString.call(n)}function c(n){return r=>i(r)===`[object ${n}]`}function f(n){return void 0!==n}t.r(r);var a=c("Array"),d=c("Date"),s=c("Function"),l=c("Number"),g=c("Object"),p=c("RegExp"),b=c("String");function m(n){return a(n)&&n.every(n=>l(n))}function v(n,r){var t=r.findIndex(r=>r>=n);t<0&&(t=r.length);var u=e(r);return u.splice(t,0,n),u}function y(n){return n.reduce((n,r)=>v(r,n),[])}function h(n){return n.reduce((n,r)=>n.includes(r)?n:[...n,r],[])}var S=(n,r)=>n+r,O=0;function j(n,r){for(var t=[];n<=r;)t.push(n),n++;return t}function N(n){return j(1,n)}function M(n,r){return N(r).reduce(r=>r+n,"")}function P(n,r){return(M("0",r)+n).slice(-r)}function x(n){if(m(n))return n.reduce(S,O)}function w(n){if(m(n)&&!(n.length<=0))return x(n)/n.length}function D(n){if(m(n)&&!(n.length<=0)){var r=e(n).sort();return r[Math.floor(r.length/2)]}}function $(n){if(a(n)){var r={};return n.forEach(n=>{r[n]=(r[n]||0)+1}),r}}function A(n){var r=$(n);return Object.keys(r).reduce((n,t)=>(r[t]>n.count&&(n={element:t,count:r[t]}),n),{element:void 0,count:0})}function _(n){return n&&d(n)||(n=new Date),`${n.getFullYear()}-${P(n.getMonth()+1,2)}-${P(n.getDate(),2)} ${P(n.getHours(),2)}:${P(n.getMinutes(),2)}:${P(n.getSeconds(),2)}`}function E(n,r){try{return JSON.parse(n)}catch(n){if(!f(r))throw n;return r}}function F(n,r,t){var u=[];if(function n(r,t,u,o){u>=t.length?r.push(e(o)):(n(r,t,u+1,o),o.push(t[u]),n(r,t,u+1,o),o.pop())}(u,n,0,[]),r){u.sort(t||((n,r)=>{var t=n.length-r.length;if(t)return t;for(var e=0;e<n.length;++e){var u=n[e]-r[e];if(u)return u}return 0}))}return u}function J(n,r,t){return n.every(n=>f(r.find(r=>t(n,r))))}function T(n,r,t){return s(t)||(t=((n,r)=>n===r)),a(n)&&a(r)&&J(n,r,t)&&J(r,n,t)}function R(){var n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}t.d(r,"uuid",function(){return R}),t.d(r,"insertionSort",function(){return y}),t.d(r,"insertNumberIntoArray",function(){return v}),t.d(r,"removeDuplicatesFromArray",function(){return h}),t.d(r,"getDateTimeString",function(){return _}),t.d(r,"safeJsonParse",function(){return E}),t.d(r,"histogram",function(){return $}),t.d(r,"mean",function(){return w}),t.d(r,"median",function(){return D}),t.d(r,"mode",function(){return A}),t.d(r,"sum",function(){return x}),t.d(r,"generateFirstNNaturalNumbers",function(){return N}),t.d(r,"generateRange",function(){return j}),t.d(r,"replicateString",function(){return M}),t.d(r,"zeroPadNumber",function(){return P}),t.d(r,"clone",function(){return e}),t.d(r,"copySpecifiedObjectProperties",function(){return u}),t.d(r,"getOwnProperties",function(){return o}),t.d(r,"areSetsEqual",function(){return T}),t.d(r,"getAllSubsets",function(){return F}),t.d(r,"getTypeString",function(){return i}),t.d(r,"isArray",function(){return a}),t.d(r,"isArrayOfNumbers",function(){return m}),t.d(r,"isDate",function(){return d}),t.d(r,"isDefined",function(){return f}),t.d(r,"isFunction",function(){return s}),t.d(r,"isNumber",function(){return l}),t.d(r,"isObject",function(){return g}),t.d(r,"isRegularExpression",function(){return p}),t.d(r,"isString",function(){return b})}]);
//# sourceMappingURL=common-utilities-webpack-production-window.js.map
} else {

module.exports=function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";function e(n){return JSON.parse(JSON.stringify(n))}function u(n,r,t={}){return n.forEach(n=>{(function(n){return void 0!==n})(r[n])&&(t[n]=r[n])}),t}function o(n={}){return Object.getOwnPropertyNames(n)}function i(n){return Object.prototype.toString.call(n)}function c(n){return r=>i(r)===`[object ${n}]`}function f(n){return void 0!==n}t.r(r);var a=c("Array"),d=c("Date"),s=c("Function"),l=c("Number"),g=c("Object"),p=c("RegExp"),b=c("String");function v(n){return a(n)&&n.every(n=>l(n))}function m(n,r){var t=r.findIndex(r=>r>=n);t<0&&(t=r.length);var u=e(r);return u.splice(t,0,n),u}function y(n){return n.reduce((n,r)=>m(r,n),[])}function h(n){return n.reduce((n,r)=>n.includes(r)?n:[...n,r],[])}var S=(n,r)=>n+r,O=0;function j(n,r){for(var t=[];n<=r;)t.push(n),n++;return t}function N(n){return j(1,n)}function M(n,r){return N(r).reduce(r=>r+n,"")}function P(n,r){return(M("0",r)+n).slice(-r)}function x(n){if(v(n))return n.reduce(S,O)}function D(n){if(v(n)&&!(n.length<=0))return x(n)/n.length}function $(n){if(v(n)&&!(n.length<=0)){var r=e(n).sort();return r[Math.floor(r.length/2)]}}function A(n){if(a(n)){var r={};return n.forEach(n=>{r[n]=(r[n]||0)+1}),r}}function _(n){var r=A(n);return Object.keys(r).reduce((n,t)=>(r[t]>n.count&&(n={element:t,count:r[t]}),n),{element:void 0,count:0})}function w(n){return n&&d(n)||(n=new Date),`${n.getFullYear()}-${P(n.getMonth()+1,2)}-${P(n.getDate(),2)} ${P(n.getHours(),2)}:${P(n.getMinutes(),2)}:${P(n.getSeconds(),2)}`}function E(n,r){try{return JSON.parse(n)}catch(n){if(!f(r))throw n;return r}}function F(n,r,t){var u=[];if(function n(r,t,u,o){u>=t.length?r.push(e(o)):(n(r,t,u+1,o),o.push(t[u]),n(r,t,u+1,o),o.pop())}(u,n,0,[]),r){u.sort(t||((n,r)=>{var t=n.length-r.length;if(t)return t;for(var e=0;e<n.length;++e){var u=n[e]-r[e];if(u)return u}return 0}))}return u}function J(n,r,t){return n.every(n=>f(r.find(r=>t(n,r))))}function T(n,r,t){return s(t)||(t=((n,r)=>n===r)),a(n)&&a(r)&&J(n,r,t)&&J(r,n,t)}function R(){var n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}t.d(r,"uuid",function(){return R}),t.d(r,"insertionSort",function(){return y}),t.d(r,"insertNumberIntoArray",function(){return m}),t.d(r,"removeDuplicatesFromArray",function(){return h}),t.d(r,"getDateTimeString",function(){return w}),t.d(r,"safeJsonParse",function(){return E}),t.d(r,"histogram",function(){return A}),t.d(r,"mean",function(){return D}),t.d(r,"median",function(){return $}),t.d(r,"mode",function(){return _}),t.d(r,"sum",function(){return x}),t.d(r,"generateFirstNNaturalNumbers",function(){return N}),t.d(r,"generateRange",function(){return j}),t.d(r,"replicateString",function(){return M}),t.d(r,"zeroPadNumber",function(){return P}),t.d(r,"clone",function(){return e}),t.d(r,"copySpecifiedObjectProperties",function(){return u}),t.d(r,"getOwnProperties",function(){return o}),t.d(r,"areSetsEqual",function(){return T}),t.d(r,"getAllSubsets",function(){return F}),t.d(r,"getTypeString",function(){return i}),t.d(r,"isArray",function(){return a}),t.d(r,"isArrayOfNumbers",function(){return v}),t.d(r,"isDate",function(){return d}),t.d(r,"isDefined",function(){return f}),t.d(r,"isFunction",function(){return s}),t.d(r,"isNumber",function(){return l}),t.d(r,"isObject",function(){return g}),t.d(r,"isRegularExpression",function(){return p}),t.d(r,"isString",function(){return b})}]);
//# sourceMappingURL=common-utilities-webpack-production-commonjs2.js.map
}
