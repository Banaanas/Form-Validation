(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function s(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},a=[],i=0;i<t.length;i++){var o=t[i],l=e.base?o[0]+e.base:o[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),v={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(v)):r.push({identifier:d,updater:m(v,e),references:1}),a.push(d)}return a}function c(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function v(t,e,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function f(t,e,n){var a=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var h=null,y=0;function m(t,e){var n,a,i;if(e.singleton){var o=y++;n=h||(h=c(e)),a=v.bind(null,n,o,!1),i=v.bind(null,n,o,!0)}else n=c(e),a=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<n.length;a++){var i=s(n[a]);r[i].references--}for(var o=l(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=o}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var i=(r=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var r,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);a&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);n(4),n(6);const a=document.querySelectorAll("input"),i=document.querySelector("#last-name"),o=document.querySelector("#first-name"),r=document.querySelector("#country"),s=document.querySelector("#zip-code"),l=document.querySelector("#e-mail"),c=document.querySelector("#password"),d=document.querySelector("#confirm-password"),u=document.querySelector("#errors-div"),v=document.querySelector("form");function f(){"block"!==u.style.display&&(u.style.display="block")}v.noValidate=!0,a.forEach(t=>{t.addEventListener("input",t=>{const e=t.target.id;if(f(),"password"===e&&!c.validity.tooShort){if(d.value!==c.value)return void(u.textContent="Passwords don't match.");if(d.value===c.value)return void(u.textContent="Passwords match.")}if("confirm-password"===e&&!d.validity.tooShort){if(d.value!==c.value)return void(u.textContent="Passwords don't match.");if(d.value===c.value)return void(u.textContent="Passwords match.")}i.validity.valid&&o.validity.valid&&r.validity.valid&&s.validity.valid&&l.validity.valid&&c.validity.valid&&d.validity.valid&&d.value===c.value?(u.innerHTML="",u.textContent="You can submit your form."):function(t){"last-name"===t&&(i.validity.valueMissing?u.textContent="You need to enter your Last Name.":i.validity.patternMismatch?u.textContent="Only alphabetic characters are allowed.":i.validity.tooShort?u.textContent=`Last Name should be at least ${i.minLength} characters.`:i.validity.valid&&(u.textContent="Last Name is alright.")),"first-name"===t&&(o.validity.valueMissing?u.textContent="You need to enter your First Name.":o.validity.patternMismatch?u.textContent="Only alphabetic characters are allowed.":o.validity.tooShort?u.textContent=`First Name should be at least ${o.minLength} characters.`:o.validity.valid&&(u.textContent="First Name is alright.")),"country"===t&&(r.validity.valueMissing?u.textContent="You need to enter your Country.":r.validity.patternMismatch?u.textContent="Only alphabetic characters are allowed.":r.validity.tooShort?u.textContent=`Country's Name should be at least ${r.minLength} characters.`:r.validity.valid&&(u.textContent="Country's Name is alright.")),"zip-code"===t&&(s.validity.valueMissing?u.textContent="You need to enter your Zip Code.":s.validity.rangeUnderflow||s.validity.rangeOverflow?u.textContent="Zip-Code must be 5 numbers long.":s.validity.valid&&(u.textContent="Zip-Code is alright.")),"e-mail"===t&&(l.validity.valueMissing?u.textContent="You need to enter your E-Mail address.":l.validity.typeMismatch?u.textContent="Entered value needs to be an E-Mail address.":l.validity.tooShort?u.textContent=`E-Mail should be at least ${l.minLength} characters.`:l.validity.valid&&(u.textContent="E-Mail is alright.")),"password"===t&&(c.validity.tooShort?u.textContent=`Password should be at least ${c.minLength} characters. You entered ${c.value.length} yet.`:c.validity.valid&&(u.textContent="Password is alright.")),"confirm-password"===t&&(d.validity.tooShort?u.textContent=`Confirmed Password should be at least ${d.minLength} characters; you entered ${d.value.length}.`:d.validity.valid&&(u.textContent="Confirmed Password is alright."))}(e)})}),a.forEach(t=>{t.addEventListener("click",t=>{const e=t.target.value;let n=t.target.id;if(!e){switch(n){case"last-name":n="Last Name";break;case"first-name":n="First Name";break;case"country":n="Country";break;case"zip-code":n="Zip Code";break;case"e-mail":n="E-Mail";break;case"password":n="Password";break;case"confirm-password":n="Password Confirmation"}u.innerHTML="",u.textContent=`Please, enter your ${n}.`,f()}})}),a.forEach(t=>{t.addEventListener("keyup",()=>{i.validity.valid&&o.validity.valid&&r.validity.valid&&s.validity.valid&&l.validity.valid&&c.validity.valid&&d.validity.valid&&d.value===c.value&&(u.innerHTML="",u.textContent="You can submit your form.")})}),v.addEventListener("submit",t=>{t.preventDefault(),f(),v.checkValidity()&&d.value===c.value?u.innerHTML=" &#128526; You are the best ! &#128540;":v.checkValidity()||d.value===c.value?v.checkValidity()||(u.innerHTML="Please fill all the field with correct values."):u.innerHTML="Passwords don't match"})},function(t,e,n){var a=n(0),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},function(t,e,n){(e=n(1)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.css"}]),t.exports=e},function(t,e,n){var a=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);t.exports=i.locals||{}},function(t,e,n){(e=n(1)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"normalize.css"}]),t.exports=e}],[[2,1]]]);