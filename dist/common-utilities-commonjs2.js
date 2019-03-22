module.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=3)}([function(n,t){n.exports=require("url")},function(n,t){n.exports=require("http")},function(n,t){n.exports=require("https")},function(n,t,e){"use strict";e.r(t);const r=n=>n,o=n=>!n;function u(n){return n.reduce((n,t)=>e=>t(n(e)),r)}function i(n){return Object.prototype.toString.call(n)}function s(n){return t=>i(t)===`[object ${n}]`}const c=u([s("Undefined"),o]),f=s("Array"),a=s("Date"),d=s("Function"),l=s("Number"),p=n=>l(n)&&!Number.isNaN(n),g=s("Object"),h=s("RegExp"),y=s("String"),m=n=>f(n)&&n.every(p);function T(n){return JSON.parse(JSON.stringify(n))}function b(n,t,e={}){return n.forEach(n=>{c(t[n])&&(e[n]=t[n])}),e}function S(n={}){return Object.getOwnPropertyNames(n)}function O(n,t,e){const r=t.split(".");for(let t=0;t<r.length;++t){if(!c(n))return e;n=n[r[t]]}return n}const v=(n,t)=>n+t,N=0,E=(n,t)=>n*t,M=1;function $(n,t){let e=[];for(;n<=t;)e.push(n),n++;return e}function P(n){return $(1,n)}function x(n,t){return P(t).reduce(t=>t+n,"")}function w(n,t){return(x("0",t)+n).slice(-t)}function j(n,t){let e=n.toString(),r=e.indexOf(".");return r<0&&(r=e.length,e+="."),e+x("0",r+1+t-e.length)}function D(n){if(f(n))return n.filter(p).reduce(v,N)}function A(n){if(f(n))return n.filter(p).reduce(E,M)}function J(n){if(m(n)&&!(n.length<=0))return D(n)/n.length}function C(n){if(!m(n)||n.length<=0)return;const t=T(n).sort();return t[Math.floor(t.length/2)]}function H(n){if(f(n))return n.reduce((n,t)=>(n[t]=(n[t]||0)+1,n),{})}function L(n){const t=H(n);return Object.keys(t).reduce((n,e)=>(t[e]>n.count&&(n={element:e,count:t[e]}),n),{element:void 0,count:0})}function F(n,t){return A(_(n,t))}function R(n){return F(10,n)}function q(n){const t=R(n);return n=>Math.round(n*t)/t}function U(n){return parseInt(n,10)===n}function B(n,t){return parseInt(n/t,10)}function I(n){if(f(n))return n.slice(0)}function _(n,t=1,e=[]){return t<=0?e:_(n,t-1,[n,...e])}function z(n,t){let e=t.findIndex(t=>t>=n);e<0&&(e=t.length);let r=T(t);return r.splice(e,0,n),r}function k(n){return n.reduce((n,t)=>z(t,n),[])}function X(n){return n.reduce((n,t)=>n.includes(t)?n:[...n,t],[])}function G(n,t=[]){return n.reduce((n,t)=>f(t)?n.concat(t):(n.push(t),n),t)}function Y(n,t=[]){return n.reduce((n,t)=>(f(t)?Y(t,n):n.push(t),n),t)}function V(n){if(f(n)&&n.length)return n[Math.floor(Math.random()*n.length)]}function K(n,t){if(!f(n))return;const e=X(n.map(n=>t(n)));return e.sort(),e.reduce((e,r)=>(e[r]=n.filter(n=>t(n)===r),e),{})}function Q(n,t){return K(n,n=>n[t])}async function W(n,t){for(let e=0;e<n.length;e++)await t(n[e],e,n)}async function Z(n,t){let e=[];for(let r=0;r<n.length;r++)e.push(await t(n[r],r,n));return e}function nn(n){return n&&a(n)||(n=new Date),`${n.getFullYear()}-${w(n.getMonth()+1,2)}-${w(n.getDate(),2)}`}function tn(n){return n&&a(n)||(n=new Date),`${nn(n)} ${w(n.getHours(),2)}:${w(n.getMinutes(),2)}:${w(n.getSeconds(),2)}`}function en(n){return n&&a(n)||(n=new Date),`${n.getUTCFullYear()}-${w(n.getUTCMonth()+1,2)}-${w(n.getUTCDate(),2)}`}function rn(n){return n&&a(n)||(n=new Date),`${en(n)} ${w(n.getUTCHours(),2)}:${w(n.getUTCMinutes(),2)}:${w(n.getUTCSeconds(),2)}`}function on(n,t){const e=t.valueOf()-n.valueOf();let r=Math.floor(e/1e3);const o=Math.floor(r/3600);r-=3600*o;const u=Math.floor(r/60);return{hours:o,minutes:u,seconds:r-=60*u}}function un(n,t){const e=on(n,t);return`${w(e.hours,2)}h ${w(e.minutes,2)}m ${w(e.seconds,2)}s`}function sn(n,t,e=null,r=!1){return console.log(`verbose is ${r}`),new Promise((r,o)=>{const u=new XMLHttpRequest;u.overrideMimeType("application/json"),u.open(n,t,!0),e&&u.setRequestHeader("Content-Type","application/json"),u.addEventListener("load",()=>{const n={status:u.status,statusText:u.statusText,responseText:u.responseText};if(200===u.status){try{n.responseJson=JSON.parse(u.responseText)}catch(t){console.error("JSON.parse error:",t),n.jsonParseError=t}r(n)}else o(n)}),u.addEventListener("abort",n=>{console.error("Abort. event:",n),o(new Error("Abort"))}),u.addEventListener("error",n=>{console.error("Error. event:",n),o(new Error("Error"))}),u.addEventListener("timeout",n=>{console.error("Timeout. event:",n),o(new Error("Timeout"))}),e?u.send(JSON.stringify(e)):u.send(null)})}function cn(n,t,r=null,o=!1){const u=e(0);return new Promise((i,s)=>{const c=u.parse(t),f={protocol:c.protocol,hostname:c.hostname,port:c.port,path:c.path,method:n};let a;"http:"===f.protocol?a=e(1):"https:"===f.protocol?a=e(2):s(`Unsupported protocol: ${f.protocol}`);const d=a.request(f,n=>{let t="";o&&(console.log(`HTTP response status: ${n.statusCode} ${n.statusMessage}`),console.log(`HTTP response headers: ${JSON.stringify(n.headers)}`)),n.setEncoding("utf8"),n.on("data",n=>{o&&console.log(`HTTP response body chunk: ${n}`),t+=n}),n.on("end",()=>{let e={status:n.statusCode,statusText:n.statusMessage,responseText:t};o&&console.log("No more data in the response.");try{e.responseJson=JSON.parse(t),o&&console.log("JSON parse succeeded.")}catch(n){e.jsonParseError=n,o&&console.log("JSON parse failed. Error:",n)}o&&(console.log("Sending result:",e.status,e.statusText),console.log("rawResponseBody",e.responseText),console.log("jsonResponseBody",e.responseJson)),i(e)})});if(d.on("error",n=>{console.error(`HTTP request error: ${n.message||n}`),s(n)}),null!==r){let n=JSON.stringify(r);d.setHeader("Content-Type","application/json"),d.setHeader("Content-Length",Buffer.byteLength(n)),d.write(n)}return d.end(),()=>{o&&console.log("sendHttpRequest_serverSideVersion() : The End.")}})}function fn(n,t=!1){return"undefined"!=typeof XMLHttpRequest?sn("GET",n,null,t):cn("GET",n,null,t)}function an(n,t,e=!1){return"undefined"!=typeof XMLHttpRequest?sn("POST",n,t,e):cn("POST",n,t,e)}function dn(n,t){try{return JSON.parse(n)}catch(n){if(!c(t))throw n;return t}}function ln(n,t){return n.push(t),n}function pn(n,...t){const e=I(t),r=t.shift();return()=>[r,pn(n,...ln(t,n(...e)))]}function gn(n,t,e){let r=[];if(function n(t,e,r,o){r>=e.length?t.push(T(o)):(n(t,e,r+1,o),o.push(e[r]),n(t,e,r+1,o),o.pop())}(r,n,0,[]),t){const n=(n,t)=>{const e=n.length-t.length;if(e)return e;for(let e=0;e<n.length;++e){const r=n[e]-t[e];if(r)return r}return 0};r.sort(e||n)}return r}function hn(n,t,e){return n.every(n=>c(t.find(t=>e(n,t))))}function yn(n,t,e){return d(e)||(e=((n,t)=>n===t)),f(n)&&f(t)&&hn(n,t,e)&&hn(t,n,e)}function mn(){const n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}e.d(t,"uuid",function(){return mn}),e.d(t,"categorizeArrayElementsByFunction",function(){return K}),e.d(t,"categorizeArrayElementsByProperty",function(){return Q}),e.d(t,"cloneArray",function(){return I}),e.d(t,"createArrayFromElement",function(){return _}),e.d(t,"flattenAllLevels",function(){return Y}),e.d(t,"flattenOneLevel",function(){return G}),e.d(t,"getRandomArrayElement",function(){return V}),e.d(t,"insertionSort",function(){return k}),e.d(t,"insertNumberIntoArray",function(){return z}),e.d(t,"removeDuplicatesFromArray",function(){return X}),e.d(t,"asyncForEach",function(){return W}),e.d(t,"asyncMap",function(){return Z}),e.d(t,"getDateString",function(){return nn}),e.d(t,"getDateUTCString",function(){return en}),e.d(t,"getDateTimeString",function(){return tn}),e.d(t,"getDateTimeUTCString",function(){return rn}),e.d(t,"getDifferenceBetweenDatesAsObject",function(){return on}),e.d(t,"getDifferenceBetweenDatesAsString",function(){return un}),e.d(t,"booleanInvertFunction",function(){return o}),e.d(t,"compositeFunctions",function(){return u}),e.d(t,"identityFunction",function(){return r}),e.d(t,"getJson",function(){return fn}),e.d(t,"postJson",function(){return an}),e.d(t,"safeJsonParse",function(){return dn}),e.d(t,"makeLazyList",function(){return pn}),e.d(t,"histogram",function(){return H}),e.d(t,"mean",function(){return J}),e.d(t,"median",function(){return C}),e.d(t,"mode",function(){return L}),e.d(t,"sum",function(){return D}),e.d(t,"additiveIdentity",function(){return N}),e.d(t,"aToThePowerOfB",function(){return F}),e.d(t,"factory_fnRoundToNDigits",function(){return q}),e.d(t,"fnAddition",function(){return v}),e.d(t,"fnMultiplication",function(){return E}),e.d(t,"generateFirstNNaturalNumbers",function(){return P}),e.d(t,"generateRange",function(){return $}),e.d(t,"integerDivision",function(){return B}),e.d(t,"isInteger",function(){return U}),e.d(t,"multiplicativeIdentity",function(){return M}),e.d(t,"product",function(){return A}),e.d(t,"replicateString",function(){return x}),e.d(t,"tenToThePowerOfN",function(){return R}),e.d(t,"zeroExtendNumber",function(){return j}),e.d(t,"zeroPadNumber",function(){return w}),e.d(t,"clone",function(){return T}),e.d(t,"copySpecifiedObjectProperties",function(){return b}),e.d(t,"getOwnProperties",function(){return S}),e.d(t,"getProperty",function(){return O}),e.d(t,"areSetsEqual",function(){return yn}),e.d(t,"getAllSubsets",function(){return gn}),e.d(t,"isSubset",function(){return hn}),e.d(t,"getTypeString",function(){return i}),e.d(t,"isArray",function(){return f}),e.d(t,"isArrayOfNumbers",function(){return m}),e.d(t,"isDate",function(){return a}),e.d(t,"isDefined",function(){return c}),e.d(t,"isFunction",function(){return d}),e.d(t,"isNumber",function(){return p}),e.d(t,"isObject",function(){return g}),e.d(t,"isRegularExpression",function(){return h}),e.d(t,"isString",function(){return y})}]);
//# sourceMappingURL=common-utilities-commonjs2.js.map