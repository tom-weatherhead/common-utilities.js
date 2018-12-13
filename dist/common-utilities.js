/**
 * thaw-common-utilities.js
 *
 * @copyright 2018 Tom Weatherhead <null@2hrd4u.org> (https://httpbin.org/status/418)
 * @license MIT
 * @version 0.0.8
 */
if (typeof module !== 'undefined') {

module.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";function e(n){return Object.prototype.toString.call(n)}function u(n){return t=>e(t)===`[object ${n}]`}function o(n){return void 0!==n}r.r(t);var i=u("Array"),c=u("Date"),f=u("Function"),d=u("Number"),a=u("Object"),s=u("RegExp"),l=u("String");function g(n){return i(n)&&n.every(n=>d(n))}function p(n){return JSON.parse(JSON.stringify(n))}function b(n,t,r={}){return n.forEach(n=>{o(t[n])&&(r[n]=t[n])}),r}function v(n={}){return Object.getOwnPropertyNames(n)}function y(n,t=1,r=[]){return t<=0?r:y(n,t-1,[n,...r])}function m(n,t){var r=t.findIndex(t=>t>=n);r<0&&(r=t.length);var e=p(t);return e.splice(r,0,n),e}function h(n){return n.reduce((n,t)=>m(t,n),[])}function O(n){return n.reduce((n,t)=>n.includes(t)?n:[...n,t],[])}function S(n,t=[]){return n.reduce((n,t)=>i(t)?n.concat(t):(n.push(t),n),t)}function j(n,t=[]){return n.reduce((n,t)=>(i(t)?j(t,n):n.push(t),n),t)}var N=(n,t)=>n+t,M=0,P=(n,t)=>n*t,x=1;function A(n,t){for(var r=[];n<=t;)r.push(n),n++;return r}function T(n){return A(1,n)}function D(n,t){return T(t).reduce(t=>t+n,"")}function w(n,t){return(D("0",t)+n).slice(-t)}function $(n){if(g(n))return n.reduce(N,M)}function _(n){if(g(n))return n.reduce(P,x)}function F(n){if(g(n)&&!(n.length<=0))return $(n)/n.length}function E(n){if(g(n)&&!(n.length<=0)){var t=p(n).sort();return t[Math.floor(t.length/2)]}}function I(n){if(i(n))return n.reduce((n,t)=>(n[t]=(n[t]||0)+1,n),{})}function J(n){var t=I(n);return Object.keys(t).reduce((n,r)=>(t[r]>n.count&&(n={element:r,count:t[r]}),n),{element:void 0,count:0})}function R(n,t){return _(y(n,t))}function L(n){return R(10,n)}function k(n){var t=L(n);return n=>Math.round(n*t)/t}function q(n){return n&&c(n)||(n=new Date),`${n.getFullYear()}-${w(n.getMonth()+1,2)}-${w(n.getDate(),2)} ${w(n.getHours(),2)}:${w(n.getMinutes(),2)}:${w(n.getSeconds(),2)}`}function z(n,t){try{return JSON.parse(n)}catch(n){if(!o(t))throw n;return t}}function B(n,t,r){var e=[];if(function n(t,r,e,u){e>=r.length?t.push(p(u)):(n(t,r,e+1,u),u.push(r[e]),n(t,r,e+1,u),u.pop())}(e,n,0,[]),t){e.sort(r||((n,t)=>{var r=n.length-t.length;if(r)return r;for(var e=0;e<n.length;++e){var u=n[e]-t[e];if(u)return u}return 0}))}return e}function H(n,t,r){return n.every(n=>o(t.find(t=>r(n,t))))}function Y(n,t,r){return f(r)||(r=((n,t)=>n===t)),i(n)&&i(t)&&H(n,t,r)&&H(t,n,r)}function C(){var n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}r.d(t,"uuid",function(){return C}),r.d(t,"createArrayFromElement",function(){return y}),r.d(t,"flattenAllLevels",function(){return j}),r.d(t,"flattenOneLevel",function(){return S}),r.d(t,"insertionSort",function(){return h}),r.d(t,"insertNumberIntoArray",function(){return m}),r.d(t,"removeDuplicatesFromArray",function(){return O}),r.d(t,"getDateTimeString",function(){return q}),r.d(t,"safeJsonParse",function(){return z}),r.d(t,"histogram",function(){return I}),r.d(t,"mean",function(){return F}),r.d(t,"median",function(){return E}),r.d(t,"mode",function(){return J}),r.d(t,"sum",function(){return $}),r.d(t,"additiveIdentity",function(){return M}),r.d(t,"aToThePowerOfB",function(){return R}),r.d(t,"factory_fnRoundToNDigits",function(){return k}),r.d(t,"fnAddition",function(){return N}),r.d(t,"fnMultiplication",function(){return P}),r.d(t,"generateFirstNNaturalNumbers",function(){return T}),r.d(t,"generateRange",function(){return A}),r.d(t,"multiplicativeIdentity",function(){return x}),r.d(t,"product",function(){return _}),r.d(t,"replicateString",function(){return D}),r.d(t,"tenToThePowerOfN",function(){return L}),r.d(t,"zeroPadNumber",function(){return w}),r.d(t,"clone",function(){return p}),r.d(t,"copySpecifiedObjectProperties",function(){return b}),r.d(t,"getOwnProperties",function(){return v}),r.d(t,"areSetsEqual",function(){return Y}),r.d(t,"getAllSubsets",function(){return B}),r.d(t,"isSubset",function(){return H}),r.d(t,"getTypeString",function(){return e}),r.d(t,"isArray",function(){return i}),r.d(t,"isArrayOfNumbers",function(){return g}),r.d(t,"isDate",function(){return c}),r.d(t,"isDefined",function(){return o}),r.d(t,"isFunction",function(){return f}),r.d(t,"isNumber",function(){return d}),r.d(t,"isObject",function(){return a}),r.d(t,"isRegularExpression",function(){return s}),r.d(t,"isString",function(){return l})}]);
//# sourceMappingURL=common-utilities-webpack-production-commonjs2.js.map
} else {

window["common-utilities"]=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){"use strict";function e(n){return Object.prototype.toString.call(n)}function u(n){return t=>e(t)===`[object ${n}]`}function i(n){return void 0!==n}r.r(t);var o=u("Array"),c=u("Date"),f=u("Function"),d=u("Number"),a=u("Object"),s=u("RegExp"),l=u("String");function g(n){return o(n)&&n.every(n=>d(n))}function p(n){return JSON.parse(JSON.stringify(n))}function b(n,t,r={}){return n.forEach(n=>{i(t[n])&&(r[n]=t[n])}),r}function m(n={}){return Object.getOwnPropertyNames(n)}function v(n,t=1,r=[]){return t<=0?r:v(n,t-1,[n,...r])}function y(n,t){var r=t.findIndex(t=>t>=n);r<0&&(r=t.length);var e=p(t);return e.splice(r,0,n),e}function h(n){return n.reduce((n,t)=>y(t,n),[])}function O(n){return n.reduce((n,t)=>n.includes(t)?n:[...n,t],[])}function S(n,t=[]){return n.reduce((n,t)=>o(t)?n.concat(t):(n.push(t),n),t)}function j(n,t=[]){return n.reduce((n,t)=>(o(t)?j(t,n):n.push(t),n),t)}var N=(n,t)=>n+t,M=0,P=(n,t)=>n*t,w=1;function A(n,t){for(var r=[];n<=t;)r.push(n),n++;return r}function T(n){return A(1,n)}function x(n,t){return T(t).reduce(t=>t+n,"")}function D(n,t){return(x("0",t)+n).slice(-t)}function $(n){if(g(n))return n.reduce(N,M)}function _(n){if(g(n))return n.reduce(P,w)}function F(n){if(g(n)&&!(n.length<=0))return $(n)/n.length}function E(n){if(g(n)&&!(n.length<=0)){var t=p(n).sort();return t[Math.floor(t.length/2)]}}function I(n){if(o(n))return n.reduce((n,t)=>(n[t]=(n[t]||0)+1,n),{})}function J(n){var t=I(n);return Object.keys(t).reduce((n,r)=>(t[r]>n.count&&(n={element:r,count:t[r]}),n),{element:void 0,count:0})}function R(n,t){return _(v(n,t))}function L(n){return R(10,n)}function k(n){var t=L(n);return n=>Math.round(n*t)/t}function q(n){return n&&c(n)||(n=new Date),`${n.getFullYear()}-${D(n.getMonth()+1,2)}-${D(n.getDate(),2)} ${D(n.getHours(),2)}:${D(n.getMinutes(),2)}:${D(n.getSeconds(),2)}`}function z(n,t){try{return JSON.parse(n)}catch(n){if(!i(t))throw n;return t}}function B(n,t,r){var e=[];if(function n(t,r,e,u){e>=r.length?t.push(p(u)):(n(t,r,e+1,u),u.push(r[e]),n(t,r,e+1,u),u.pop())}(e,n,0,[]),t){e.sort(r||((n,t)=>{var r=n.length-t.length;if(r)return r;for(var e=0;e<n.length;++e){var u=n[e]-t[e];if(u)return u}return 0}))}return e}function H(n,t,r){return n.every(n=>i(t.find(t=>r(n,t))))}function Y(n,t,r){return f(r)||(r=((n,t)=>n===t)),o(n)&&o(t)&&H(n,t,r)&&H(t,n,r)}function C(){var n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}r.d(t,"uuid",function(){return C}),r.d(t,"createArrayFromElement",function(){return v}),r.d(t,"flattenAllLevels",function(){return j}),r.d(t,"flattenOneLevel",function(){return S}),r.d(t,"insertionSort",function(){return h}),r.d(t,"insertNumberIntoArray",function(){return y}),r.d(t,"removeDuplicatesFromArray",function(){return O}),r.d(t,"getDateTimeString",function(){return q}),r.d(t,"safeJsonParse",function(){return z}),r.d(t,"histogram",function(){return I}),r.d(t,"mean",function(){return F}),r.d(t,"median",function(){return E}),r.d(t,"mode",function(){return J}),r.d(t,"sum",function(){return $}),r.d(t,"additiveIdentity",function(){return M}),r.d(t,"aToThePowerOfB",function(){return R}),r.d(t,"factory_fnRoundToNDigits",function(){return k}),r.d(t,"fnAddition",function(){return N}),r.d(t,"fnMultiplication",function(){return P}),r.d(t,"generateFirstNNaturalNumbers",function(){return T}),r.d(t,"generateRange",function(){return A}),r.d(t,"multiplicativeIdentity",function(){return w}),r.d(t,"product",function(){return _}),r.d(t,"replicateString",function(){return x}),r.d(t,"tenToThePowerOfN",function(){return L}),r.d(t,"zeroPadNumber",function(){return D}),r.d(t,"clone",function(){return p}),r.d(t,"copySpecifiedObjectProperties",function(){return b}),r.d(t,"getOwnProperties",function(){return m}),r.d(t,"areSetsEqual",function(){return Y}),r.d(t,"getAllSubsets",function(){return B}),r.d(t,"isSubset",function(){return H}),r.d(t,"getTypeString",function(){return e}),r.d(t,"isArray",function(){return o}),r.d(t,"isArrayOfNumbers",function(){return g}),r.d(t,"isDate",function(){return c}),r.d(t,"isDefined",function(){return i}),r.d(t,"isFunction",function(){return f}),r.d(t,"isNumber",function(){return d}),r.d(t,"isObject",function(){return a}),r.d(t,"isRegularExpression",function(){return s}),r.d(t,"isString",function(){return l})}]);
//# sourceMappingURL=common-utilities-webpack-production-global.js.map
}
