!function(){"use strict";var e,t,n,r,o,c,u,i,f,a={},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}},r=!0;try{a[e].call(n.exports,n,n.exports,d),r=!1}finally{r&&delete s[e]}return n.exports}d.m=a,e=[],d.O=function(t,n,r,o){if(n){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o];return}for(var u=1/0,c=0;c<e.length;c++){for(var n=e[c][0],r=e[c][1],o=e[c][2],i=!0,f=0;f<n.length;f++)u>=o&&Object.keys(d.O).every(function(e){return d.O[e](n[f])})?n.splice(f--,1):(i=!1,o<u&&(u=o));if(i){e.splice(c--,1);var a=r();void 0!==a&&(t=a)}}return t},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var o=Object.create(null);d.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach(function(t){c[t]=function(){return e[t]}});return c.default=function(){return e},d.d(o,c),o},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,n){return d.f[n](e,t),t},[]))},d.u=function(e){return 585===e?"static/chunks/714ca43d-40ddc96b87831ed0.js":965===e?"static/chunks/965-ea656555f5a37a4f.js":580===e?"static/chunks/580-c5e48d606c23213a.js":367===e?"static/chunks/367-4fdbbcab0ecb544b.js":542===e?"static/chunks/542-d9ec244ae8135746.js":256===e?"static/chunks/256-0be517c299ee8a50.js":966===e?"static/chunks/966-0d9184b7d935a49f.js":"static/chunks/"+(668===e?"338a7a71":e)+"."+({282:"54abe3394f25f076",338:"7cacf46b26fdec08",404:"fca7fcbcf0e1c223",641:"953bdc1e75f33fd9",668:"51fc5d6f275b95de",683:"f8beb7314ee3ee86",938:"e7c70315d9af7954",991:"fa4a71c8557d85e1",992:"157e6798e51324d1"})[e]+".js"},d.miniCssF=function(e){},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="_N_E:",d.l=function(e,t,n,c){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var u,i,f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var s=f[a];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){u=s;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.setAttribute("data-webpack",o+n),u.src=d.tu(e)),r[e]=[t];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(n)}),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),i&&document.head.appendChild(u)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.tt=function(){return void 0===c&&(c={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(c=trustedTypes.createPolicy("nextjs#bundler",c))),c},d.tu=function(e){return d.tt().createScriptURL(e)},d.p="/clover-iiif/_next/",u={272:0},d.f.j=function(e,t){var n=d.o(u,e)?u[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(272!=e){var r=new Promise(function(t,r){n=u[e]=[t,r]});t.push(n[2]=r);var o=d.p+d.u(e),c=Error();d.l(o,function(t){if(d.o(u,e)&&(0!==(n=u[e])&&(u[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}},"chunk-"+e,e)}else u[e]=0}},d.O.j=function(e){return 0===u[e]},i=function(e,t){var n,r,o=t[0],c=t[1],i=t[2],f=0;if(o.some(function(e){return 0!==u[e]})){for(n in c)d.o(c,n)&&(d.m[n]=c[n]);if(i)var a=i(d)}for(e&&e(t);f<o.length;f++)r=o[f],d.o(u,r)&&u[r]&&u[r][0](),u[r]=0;return d.O(a)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(i.bind(null,0)),f.push=i.bind(null,f.push.bind(f)),d.nc=void 0}();