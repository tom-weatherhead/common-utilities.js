module.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)e.d(r,u,function(t){return n[t]}.bind(null,u));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=3)}([function(n,t){n.exports=require("url")},function(n,t){n.exports=require("http")},function(n,t){n.exports=require("https")},function(n,t,e){"use strict";e.r(t);const r=n=>n,u=n=>!n;function o(n){return n.reduce((n,t)=>e=>t(n(e)),r)}function i(n,t=[]){return e=>(t.push(e),t.length>=n.length?n(...t):i(n,t))}function c(n){return Object.prototype.toString.call(n)}function s(n){return t=>c(t)===`[object ${n}]`}const f=o([s("Undefined"),u]),l=s("Array"),a=s("Date"),d=s("Function"),g=s("Number"),p=n=>g(n)&&!Number.isNaN(n),h=s("Object"),m=s("RegExp"),y=s("String"),b=n=>l(n)&&n.every(p);function S(n){return JSON.parse(JSON.stringify(n))}function T(n,t,e={}){return n.forEach(n=>{f(t[n])&&(e[n]=t[n])}),e}function O(...n){let t={};return n.forEach(n=>{Object.keys(n).forEach(e=>{t[e]=n[e]})}),t}function v(n={}){return Object.getOwnPropertyNames(n)}function E(n,t,e){const r=t.split(".");for(let t=0;t<r.length;++t){if(!f(n))return e;n=n[r[t]]}return n}const x=(n,t)=>n+t,M=0,N=(n,t)=>n*t,$=1;function A(n){return p(n)?n>0?1:n<0?-1:0:void 0}function P(n,t){let e=[];for(;n<=t;)e.push(n),n++;return e}function j(n){return P(1,n)}function w(n,t){return j(t).reduce(t=>t+n,"")}function D(n,t){return(w("0",t)+n).slice(-t)}function J(n,t){let e=n.toString(),r=e.indexOf(".");return r<0&&(r=e.length,e+="."),e+w("0",r+1+t-e.length)}function L(n){if(l(n))return n.filter(p).reduce(x,M)}function H(n){if(l(n))return n.filter(p).reduce(N,$)}function I(n){if(b(n)&&!(n.length<=0))return L(n)/n.length}function C(n){if(!b(n)||n.length<=0)return;const t=S(n).sort();return t[Math.floor(t.length/2)]}function q(n){if(l(n))return n.reduce((n,t)=>(n[t]=(n[t]||0)+1,n),{})}function F(n){const t=q(n);return Object.keys(t).reduce((n,e)=>(t[e]>n.count&&(n={element:e,count:t[e]}),n),{element:void 0,count:0})}function R(n,t){return H(X(n,t))}function U(n){return R(10,n)}function k(n){const t=U(n);return n=>Math.round(n*t)/t}function B(n){return parseInt(n,10)===n}function _(n,t){return parseInt(n/t,10)}function z(n){if(l(n))return n.slice(0)}function X(n,t=1,e=[]){return t<=0?e:X(n,t-1,[n,...e])}function G(n){return d(n)&&2===n.length?n:(n,t)=>n<t}function Y(n,t){t=G(t);let e=!0;for(let r=(n=z(n)).length-1;r>0&&e;r--){e=!1;for(let u=0;u<r;u++){const r=n[u],o=n[u+1];t(r,o)||(n[u]=o,n[u+1]=r,e=!0)}}return n}function V(n,t){if(!n.length)return;const e=n[0],r=n.pop();if(!n.length)return e;n[0]=r,t=G(t);let u=0;for(;u<n.length;){const e=2*u+1,r=e+1;let o;if(e>=n.length)break;o=r>=n.length?e:t(n[e],n[r])?r:e;const i=n[u],c=n[o];if(t(c,i))break;n[u]=c,n[o]=i,u=o}return e}function K(n,t){t=G(t);let e=n.reduce((n,e)=>(function(n,t,e){n.push(t);let r=n.length-1;for(e=G(e);r;){const t=Math.trunc((r-1)/2),u=n[r],o=n[t];if(!e(o,u))break;n[r]=o,n[t]=u,r=t}return n})(n,e,t),[]),r=[];for(;e.length;)r.push(V(e,t));return r.reverse()}function Q(n,t,e){e=G(e);let r=t.findIndex(t=>!e(t,n));r<0&&(r=t.length);let u=S(t);return u.splice(r,0,n),u}function W(n,t){return t=G(t),n.reduce((n,e)=>Q(e,n,t),[])}function Z(n=[],t=[],e){let r=0,u=0,o=[];for(e=G(e);r<n.length&&u<t.length;){const i=n[r],c=t[u];e(i,c)?(o.push(i),r++):(o.push(c),u++)}return r<n.length?o.concat(n.slice(r)):u<t.length?o.concat(t.slice(u)):o}function nn(n,t){if(n.length<=1)return n;t=G(t);const e=Math.trunc(n.length/2),r=n.slice(0,e),u=n.slice(e);return Z(nn(r,t),nn(u,t),t)}function tn(n,t){if(n.length<=1)return n;const e=n.shift();let r=[],u=[];return t=G(t),n.forEach(n=>{t(n,e)?r.push(n):u.push(n)}),tn(r,t).concat([e]).concat(tn(u,t))}function en(n,t,e=!0){if(l(n)){if(n.length<=1)return e;for(let e=0;e<n.length-1;e++)if(!t(n[e],n[e+1]))return!1;return!0}}function rn(n){return en(n,(n,t)=>n<t,!0)}function un(n){return en(n,(n,t)=>n<=t,!0)}function on(n){return en(n,(n,t)=>n>t,!0)}function cn(n){return en(n,(n,t)=>n>=t,!0)}function sn(n,t){if(l(n)&&n.length)return n.slice(1).reduce(t,n[0])}function fn(n){return sn(n,(n,t)=>n>t?n:t)}function ln(n){return sn(n,(n,t)=>n<t?n:t)}function an(n){return n.reduce((n,t)=>n.includes(t)?n:[...n,t],[])}function dn(n,t=[]){return n.reduce((n,t)=>l(t)?n.concat(t):(n.push(t),n),t)}function gn(n,t=[]){return n.reduce((n,t)=>(l(t)?gn(t,n):n.push(t),n),t)}function pn(n){if(l(n)&&n.length)return n[Math.floor(Math.random()*n.length)]}function hn(n,t){if(!l(n))return;const e=an(n.map(n=>t(n)));return e.sort(),e.reduce((e,r)=>(e[r]=n.filter(n=>t(n)===r),e),{})}function mn(n,t){return hn(n,n=>n[t])}function yn(...n){let t=[];return n.forEach(n=>{n.forEach(n=>{t.includes(n)||t.push(n)})}),t}function bn(n){if(l(n)&&n.length)return n.slice(-1)[0]}function Sn(n){if(!l(n))return;let t=[],e=n.map(n=>({minimum:n,maximum:n}));for(t.unshift(e);e.length>1;){let n=[];for(let t=0;t<e.length;t+=2){const r=e[t];let u;if(t+1<e.length){const n=e[t+1];u={minimum:Math.min(r.minimum,n.minimum),maximum:Math.max(r.maximum,n.maximum)}}else u={minimum:r.minimum,maximum:r.maximum};n.push(u)}e=n,t.unshift(e)}return t}async function Tn(n,t){for(let e=0;e<n.length;e++)await t(n[e],e,n)}async function On(n,t){let e=[];for(let r=0;r<n.length;r++)e.push(await t(n[r],r,n));return e}function vn(n){return n&&a(n)||(n=new Date),`${n.getFullYear()}-${D(n.getMonth()+1,2)}-${D(n.getDate(),2)}`}function En(n){return n&&a(n)||(n=new Date),`${vn(n)} ${D(n.getHours(),2)}:${D(n.getMinutes(),2)}:${D(n.getSeconds(),2)}`}function xn(n){return n&&a(n)||(n=new Date),`${n.getUTCFullYear()}-${D(n.getUTCMonth()+1,2)}-${D(n.getUTCDate(),2)}`}function Mn(n){return n&&a(n)||(n=new Date),`${xn(n)} ${D(n.getUTCHours(),2)}:${D(n.getUTCMinutes(),2)}:${D(n.getUTCSeconds(),2)}`}function Nn(n,t){const e=t.valueOf()-n.valueOf();let r=Math.floor(e/1e3);const u=Math.floor(r/3600);r-=3600*u;const o=Math.floor(r/60);return{hours:u,minutes:o,seconds:r-=60*o}}function $n(n,t){const e=Nn(n,t);return`${D(e.hours,2)}h ${D(e.minutes,2)}m ${D(e.seconds,2)}s`}function An(n,t,e=null,r=!1){return console.log(`verbose is ${r}`),new Promise((r,u)=>{const o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open(n,t,!0),e&&o.setRequestHeader("Content-Type","application/json"),o.addEventListener("load",()=>{const n={status:o.status,statusText:o.statusText,responseText:o.responseText};if(200===o.status){try{n.responseJson=JSON.parse(o.responseText)}catch(t){console.error("JSON.parse error:",t),n.jsonParseError=t}r(n)}else u(n)}),o.addEventListener("abort",n=>{console.error("Abort. event:",n),u(new Error("Abort"))}),o.addEventListener("error",n=>{console.error("Error. event:",n),u(new Error("Error"))}),o.addEventListener("timeout",n=>{console.error("Timeout. event:",n),u(new Error("Timeout"))}),e?o.send(JSON.stringify(e)):o.send(null)})}function Pn(n,t,r=null,u=!1){const o=e(0);return new Promise((i,c)=>{const s=o.parse(t),f={protocol:s.protocol,hostname:s.hostname,port:s.port,path:s.path,method:n};let l;"http:"===f.protocol?l=e(1):"https:"===f.protocol?l=e(2):c(`Unsupported protocol: ${f.protocol}`);const a=l.request(f,n=>{let t="";u&&(console.log(`HTTP response status: ${n.statusCode} ${n.statusMessage}`),console.log(`HTTP response headers: ${JSON.stringify(n.headers)}`)),n.setEncoding("utf8"),n.on("data",n=>{u&&console.log(`HTTP response body chunk: ${n}`),t+=n}),n.on("end",()=>{let e={status:n.statusCode,statusText:n.statusMessage,responseText:t};u&&console.log("No more data in the response.");try{e.responseJson=JSON.parse(t),u&&console.log("JSON parse succeeded.")}catch(n){e.jsonParseError=n,u&&console.log("JSON parse failed. Error:",n)}u&&(console.log("Sending result:",e.status,e.statusText),console.log("rawResponseBody",e.responseText),console.log("jsonResponseBody",e.responseJson)),i(e)})});if(a.on("error",n=>{console.error(`HTTP request error: ${n.message||n}`),c(n)}),null!==r){let n=JSON.stringify(r);a.setHeader("Content-Type","application/json"),a.setHeader("Content-Length",Buffer.byteLength(n)),a.write(n)}return a.end(),()=>{u&&console.log("sendHttpRequest_serverSideVersion() : The End.")}})}function jn(n,t=!1){return"undefined"!=typeof XMLHttpRequest?An("GET",n,null,t):Pn("GET",n,null,t)}function wn(n,t,e=!1){return"undefined"!=typeof XMLHttpRequest?An("POST",n,t,e):Pn("POST",n,t,e)}function Dn(n,t){try{return JSON.parse(n)}catch(n){if(!f(t))throw n;return t}}function Jn(n,t){return n.push(t),n}function Ln(n,...t){const e=z(t),r=t.shift();return()=>[r,Ln(n,...Jn(t,n(...e)))]}function Hn(n,t,e){let r=[];if(function n(t,e,r,u){r>=e.length?t.push(S(u)):(n(t,e,r+1,u),u.push(e[r]),n(t,e,r+1,u),u.pop())}(r,n,0,[]),t){const n=(n,t)=>{const e=n.length-t.length;if(e)return e;for(let e=0;e<n.length;++e){const r=n[e]-t[e];if(r)return r}return 0};r.sort(e||n)}return r}function In(n,t,e){return n.every(n=>f(t.find(t=>e(n,t))))}function Cn(n,t,e){return d(e)||(e=((n,t)=>n===t)),l(n)&&l(t)&&In(n,t,e)&&In(t,n,e)}function qn(){const n=()=>(65536*(Math.random()+1)|0).toString(16).substring(1);return n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+[8,9,"a","b"][Math.floor(4*Math.random())]+n().substr(0,3)+"-"+n()+n()+n()}e.d(t,"uuid",function(){return qn}),e.d(t,"bubbleSort",function(){return Y}),e.d(t,"categorizeArrayElementsByFunction",function(){return hn}),e.d(t,"categorizeArrayElementsByProperty",function(){return mn}),e.d(t,"cloneArray",function(){return z}),e.d(t,"createArrayFromElement",function(){return X}),e.d(t,"findSuperlativeElement",function(){return sn}),e.d(t,"flattenAllLevels",function(){return gn}),e.d(t,"flattenOneLevel",function(){return dn}),e.d(t,"generateHierarchyOfLocalMaximaAndMinima",function(){return Sn}),e.d(t,"getLastElementOfArray",function(){return bn}),e.d(t,"getRandomArrayElement",function(){return pn}),e.d(t,"heapSort",function(){return K}),e.d(t,"insertionSort",function(){return W}),e.d(t,"insertNumberIntoArray",function(){return Q}),e.d(t,"isArrayInDecreasingOrder",function(){return on}),e.d(t,"isArrayInIncreasingOrder",function(){return rn}),e.d(t,"isArrayInNonDecreasingOrder",function(){return un}),e.d(t,"isArrayInNonIncreasingOrder",function(){return cn}),e.d(t,"max",function(){return fn}),e.d(t,"mergeSort",function(){return nn}),e.d(t,"mergeTwoSortedArrays",function(){return Z}),e.d(t,"min",function(){return ln}),e.d(t,"quickSort",function(){return tn}),e.d(t,"removeDuplicatesFromArray",function(){return an}),e.d(t,"union",function(){return yn}),e.d(t,"asyncForEach",function(){return Tn}),e.d(t,"asyncMap",function(){return On}),e.d(t,"getDateString",function(){return vn}),e.d(t,"getDateUTCString",function(){return xn}),e.d(t,"getDateTimeString",function(){return En}),e.d(t,"getDateTimeUTCString",function(){return Mn}),e.d(t,"getDifferenceBetweenDatesAsObject",function(){return Nn}),e.d(t,"getDifferenceBetweenDatesAsString",function(){return $n}),e.d(t,"booleanInvertFunction",function(){return u}),e.d(t,"compositeFunctions",function(){return o}),e.d(t,"curry",function(){return i}),e.d(t,"identityFunction",function(){return r}),e.d(t,"getJson",function(){return jn}),e.d(t,"postJson",function(){return wn}),e.d(t,"safeJsonParse",function(){return Dn}),e.d(t,"makeLazyList",function(){return Ln}),e.d(t,"histogram",function(){return q}),e.d(t,"mean",function(){return I}),e.d(t,"median",function(){return C}),e.d(t,"mode",function(){return F}),e.d(t,"sum",function(){return L}),e.d(t,"additiveIdentity",function(){return M}),e.d(t,"aToThePowerOfB",function(){return R}),e.d(t,"factory_fnRoundToNDigits",function(){return k}),e.d(t,"fnAddition",function(){return x}),e.d(t,"fnMultiplication",function(){return N}),e.d(t,"generateFirstNNaturalNumbers",function(){return j}),e.d(t,"generateRange",function(){return P}),e.d(t,"getSign",function(){return A}),e.d(t,"integerDivision",function(){return _}),e.d(t,"isInteger",function(){return B}),e.d(t,"multiplicativeIdentity",function(){return $}),e.d(t,"product",function(){return H}),e.d(t,"replicateString",function(){return w}),e.d(t,"tenToThePowerOfN",function(){return U}),e.d(t,"zeroExtendNumber",function(){return J}),e.d(t,"zeroPadNumber",function(){return D}),e.d(t,"clone",function(){return S}),e.d(t,"combineObjects",function(){return O}),e.d(t,"copySpecifiedObjectProperties",function(){return T}),e.d(t,"getOwnProperties",function(){return v}),e.d(t,"getProperty",function(){return E}),e.d(t,"areSetsEqual",function(){return Cn}),e.d(t,"getAllSubsets",function(){return Hn}),e.d(t,"isSubset",function(){return In}),e.d(t,"getTypeString",function(){return c}),e.d(t,"isArray",function(){return l}),e.d(t,"isArrayOfNumbers",function(){return b}),e.d(t,"isDate",function(){return a}),e.d(t,"isDefined",function(){return f}),e.d(t,"isFunction",function(){return d}),e.d(t,"isNumber",function(){return p}),e.d(t,"isObject",function(){return h}),e.d(t,"isRegularExpression",function(){return m}),e.d(t,"isString",function(){return y})}]);
//# sourceMappingURL=common-utilities-commonjs2.js.map