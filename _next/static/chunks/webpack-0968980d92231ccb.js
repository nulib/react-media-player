!function(){"use strict";var e,t,n,r,o,c,u,i,f,a={},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}},r=!0;try{a[e].call(n.exports,n,n.exports,d),r=!1}finally{r&&delete s[e]}return n.exports}d.m=a,e=[],d.O=function(t,n,r,o){if(n){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o];return}for(var u=1/0,c=0;c<e.length;c++){for(var n=e[c][0],r=e[c][1],o=e[c][2],i=!0,f=0;f<n.length;f++)u>=o&&Object.keys(d.O).every(function(e){return d.O[e](n[f])})?n.splice(f--,1):(i=!1,o<u&&(u=o));if(i){e.splice(c--,1);var a=r();void 0!==a&&(t=a)}}return t},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var o=Object.create(null);d.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach(function(t){c[t]=function(){return e[t]}});return c.default=function(){return e},d.d(o,c),o},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,n){return d.f[n](e,t),t},[]))},d.u=function(e){return 45===e?"static/chunks/5758d6de-6355d793a77b8bb5.js":25===e?"static/chunks/25-fe039cfe417a2a22.js":939===e?"static/chunks/939-7ab50b54fd13ce07.js":500===e?"static/chunks/500-118438b1629cf494.js":936===e?"static/chunks/936-bfdeb1c610493d68.js":850===e?"static/chunks/850-470de1bd4839194b.js":"static/chunks/"+(668===e?"338a7a71":e)+"."+({46:"cc1ce43576589cbf",211:"552f8fe95e557b4b",413:"05e921757131d76c",486:"5655a469630e6c39",496:"beddaef05f88a0cd",668:"51fc5d6f275b95de",780:"c3d8d1e6307ca245",897:"582c8ac079cf7763"})[e]+".js"},d.miniCssF=function(e){},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="_N_E:",d.l=function(e,t,n,c){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var u,i,f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var s=f[a];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){u=s;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.setAttribute("data-webpack",o+n),u.src=d.tu(e)),r[e]=[t];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(n)}),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),i&&document.head.appendChild(u)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.tt=function(){return void 0===c&&(c={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(c=trustedTypes.createPolicy("nextjs#bundler",c))),c},d.tu=function(e){return d.tt().createScriptURL(e)},d.p="/clover-iiif/_next/",u={272:0},d.f.j=function(e,t){var n=d.o(u,e)?u[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(272!=e){var r=new Promise(function(t,r){n=u[e]=[t,r]});t.push(n[2]=r);var o=d.p+d.u(e),c=Error();d.l(o,function(t){if(d.o(u,e)&&(0!==(n=u[e])&&(u[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}},"chunk-"+e,e)}else u[e]=0}},d.O.j=function(e){return 0===u[e]},i=function(e,t){var n,r,o=t[0],c=t[1],i=t[2],f=0;if(o.some(function(e){return 0!==u[e]})){for(n in c)d.o(c,n)&&(d.m[n]=c[n]);if(i)var a=i(d)}for(e&&e(t);f<o.length;f++)r=o[f],d.o(u,r)&&u[r]&&u[r][0](),u[r]=0;return d.O(a)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(i.bind(null,0)),f.push=i.bind(null,f.push.bind(f)),d.nc=void 0}();