(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.NumberFlip=e():t.NumberFlip=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){window,t.exports=function(){return r={},t.m=e=[function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"==typeof t}Object.defineProperty(e,"__esModule",{value:!0}),e.g=void 0,e.g=function(t,e){var r=0<arguments.length&&void 0!==t?t:"",o=1<arguments.length&&void 0!==e?e:{};return function(){var t=i(o)?{_click:o}:o,e=r.match(/^\w[\w\d-_]*/),a=e?e[0]:"div",s=document.createElement(a),u=r.match(/#\w[\w\d-_]*/),c=r.match(/\.\w[\w\d-_]*/g);u&&(t.id=u[0].slice(1)),c&&(t.class=c.map((function(t){return t.slice(1)})).join(" ")),Object.keys(t).forEach((function(e){var r,i=t[e];i&&(/^_/.test(e)?s.addEventListener(e.slice(1),i):"style"===e&&null!==(r=i)&&"object"===n(r)?s.setAttribute("style",Object.keys(i).map((function(t){return"".concat(t.replace(/([A-Z])/g,"-$1").toLowerCase(),":").concat(i[t])})).join(";")):s.setAttribute(e,i))}));for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];return l.forEach((function(t){var e,r;(r=t)instanceof HTMLElement&&1===r.nodeType?s.appendChild(t):void 0===t||!1===t||i(t)||("img"===(e=a.toLowerCase())?s.setAttribute("src",t):"input"===e?s.value=t:s.insertAdjacentHTML("beforeend",t))})),s}}}],t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(t){return e[t]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=0);function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e,r}()},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e),r.d(e,"Flip",(function(){return u}));var n=r(0);function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(t,e){return function(t){return t.split("").map(Number)}(function t(e,r){return e.length<r?t("0"+e,r):e}(t.toString(),e)).reverse()},u=function(){function t(e){var r,n,i=this,o=e.node,a=e.from,s=void 0===a?0:a,u=e.to,c=e.duration,f=void 0===c?.5:c,l=e.delay,d=e.easeFn,h=void 0===d?function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}:d,p=e.systemArr,y=void 0===p?[0,1,2,3,4,5,6,7,8,9]:p,v=e.direct,b=void 0===v||v,m=e.separator,g=e.seperateOnly,A=void 0===g?0:g,j=e.separateEvery,w=void 0===j?3:j;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.beforeArr=[],this.afterArr=[],this.ctnrArr=[],this.duration=1e3*f,this.systemArr=y,this.easeFn=h,this.from=s,this.to=u||0,this.node=o,this.direct=b,this.separator=m,this.seperateOnly=A,this.separateEvery=A?0:w,this._initHTML((r=this.from,n=this.to,(r>n?r:n).toString().length)),this.setSelect(this.from),void 0!==u&&(l?setTimeout((function(){return i.flipTo({to:i.to})}),1e3*l):this.flipTo({to:this.to}))}var e,r,o;return e=t,(r=[{key:"_initHTML",value:function(t){var e,r=this;this.node.classList.add("number-flip"),this.node.style.position="relative",this.node.style.overflow="hidden";for(var o=0;o<t;o+=1){var a=Object(n.g)(".ctnr.ctnr".concat(o),{style:{position:"relative",display:"inline-block",verticalAlign:"top"}}).apply(void 0,i(this.systemArr.map((function(t){return Object(n.g)(".digit")(t)}))).concat([Object(n.g)(".digit")(this.systemArr[0])]));if(this.ctnrArr.unshift(a),this.node.appendChild(a),this.beforeArr.push(0),this.separator&&(this.separateEvery||this.seperateOnly)&&o!==t-1&&((t-o)%this.separateEvery==1||t-o-this.seperateOnly==1)){var s=(e=this.separator,"[object String]"===Object.prototype.toString.call(e)?this.separator:this.separator.shift()),u=Object(n.g)(".sprtr",{style:{display:"inline-block"}})(s);this.node.appendChild(u)}}var c=function(){if(r.height=r.ctnrArr[0].clientHeight/(r.systemArr.length+1),r.node.style.height=r.height+"px",r.afterArr.length)r.frame(1);else for(var t=0,e=r.ctnrArr.length;t<e;t+=1)r._draw({digit:t,per:1,alter:~~(r.from/Math.pow(10,t))})};c(),window.addEventListener("resize",c)}},{key:"_draw",value:function(t){var e=t.per,r=t.alter,n=t.digit,i=this.ctnrArr[0].clientHeight/(this.systemArr.length+1);i&&this.height!==i&&(this.height=i);var o=this.beforeArr[n],a="translateY(".concat(-((e*r+o)%10+10)%10*this.height,"px)");this.ctnrArr[n].style.webkitTransform=a,this.ctnrArr[n].style.transform=a}},{key:"frame",value:function(t){for(var e=0,r=this.ctnrArr.length-1;r>=0;r-=1){var n=this.afterArr[r]-this.beforeArr[r];e+=n,this._draw({digit:r,per:this.easeFn(t),alter:this.direct?n:e}),e*=10}}},{key:"flipTo",value:function(t){var e=this,r=t.to,n=t.duration,i=t.easeFn,o=t.direct;i&&(this.easeFn=i),void 0!==o&&(this.direct=o),this.setSelect(r);var a=this.ctnrArr.length;this.beforeArr=s(this.from,a),this.afterArr=s(r,a);var u=Date.now(),c=1e3*n||this.duration;requestAnimationFrame((function t(){var n=Date.now()-u;e.frame(n/c),n<c?requestAnimationFrame(t):(e.from=r,e.frame(1))}))}},{key:"setSelect",value:function(t){var e=this,r=this.ctnrArr.length;s(t,r).forEach((function(t,r){for(var n=0;n<e.ctnrArr[r].childNodes.length;n+=1)e.ctnrArr[r].childNodes[n].style.userSelect=n===t?"auto":"none"}))}}])&&a(e.prototype,r),o&&a(e,o),t}()}])}));
},{}],2:[function(require,module,exports){
(function (global){(function (){
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):e.numberToWords=M}();
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleCase = titleCase;
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;

function titleCase(input) {
  var result = "";
  var m; // tslint:disable-next-line

  while ((m = TOKENS.exec(input)) !== null) {
    var token = m[0],
        index = m.index;

    if ( // Ignore already capitalized words.
    !IS_MANUAL_CASE.test(token) && ( // Ignore small words except at beginning or end.
    !SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) && ( // Ignore URLs.
    input.charAt(index + token.length) !== ":" || WHITESPACE.test(input.charAt(index + token.length + 1)))) {
      // Find and uppercase first word character, skips over *modifiers*.
      result += token.replace(ALPHANUMERIC_PATTERN, function (m) {
        return m.toUpperCase();
      });
      continue;
    }

    result += token;
  }

  return result;
}

},{}],4:[function(require,module,exports){
"use strict";

var _titleCase = require("title-case");

var _numberFlip = require("number-flip");

var converter = require('number-to-words');

async function readTextFile(file) {
  let resp = await fetch(file);
  return await resp.text();
}

(async () => {
  const result = await readTextFile("debt.txt");
  var resultMinusNum = result.replace(/\D/g, '');
  var debt = Number(resultMinusNum);
  var debtCounterNum = document.getElementById("debtCounterNum");
  var debtCounterText = document.getElementById("debtCounterText");
  new _numberFlip.Flip({
    node: debtCounterNum,
    from: 0,
    to: debt,
    separator: ',',
    duration: 2 // second

  });
  debtCounterText.innerHTML = (0, _titleCase.titleCase)(converter.toWords(debt)).replace(/, and/g, ',<br>');
})();

},{"number-flip":1,"number-to-words":2,"title-case":3}]},{},[4]);
