(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{210:function(module,__unused_webpack_exports,__webpack_require__){module=__webpack_require__.nmd(module),function _f(self){"use strict";let Y;try{module&&(self=module)}catch(e){}function u(e){return void 0===e||e}function aa(e){let t=Array(e);for(let n=0;n<e;n++)t[n]=v();return t}function v(){return Object.create(null)}function ba(e,t){return t.length-e.length}function x(e){return"string"==typeof e}function C(e){return"object"==typeof e}function D(e){return"function"==typeof e}self._factory=_f;let ca=/[\u0300-\u036f]/g;function da(e,t){let n=Object.keys(e),i=n.length,r=[],o="",l=0;for(let s=0,a,h;s<i;s++)(h=e[a=n[s]])?(r[l++]=E(t?"(?!\\b)"+a+"(\\b|_)":a),r[l++]=h):o+=(o?"|":"")+a;return o&&(r[l++]=E(t?"(?!\\b)("+o+")(\\b|_)":"("+o+")"),r[l]=""),r}function F(e,t){for(let n=0,i=t.length;n<i&&(e=e.replace(t[n],t[n+1]));n+=2);return e}function E(e){return RegExp(e,"g")}function ea(e){let t="",n="";for(let i=0,r=e.length,o;i<r;i++)(o=e[i])!==n&&(t+=n=o);return t}var t,ha={encode:fa,D:!1,F:""};let ia=/[\W_]+/;function fa(e){return ja(this,e.toLowerCase(),!1,ia)}let ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,t){e[t+"Async"]=function(){let e;let n=this,i=arguments;var r=i[i.length-1];return D(r)&&(e=r,delete i[i.length-1]),r=new Promise(function(e){setTimeout(function(){n.async=!0;let r=n[t].apply(n,i);n.async=!1,e(r)})}),e?(r.then(e),this):r}}function ma(e,t,n,i){let r=e.length,o=[],l,s,a=0;i&&(i=[]);for(let h=r-1;0<=h;h--){let c=e[h],d=c.length,u=v(),f=!l;for(let e=0;e<d;e++){let d=c[e],p=d.length;if(p)for(let e=0,c,g;e<p;e++)if(g=d[e],l){if(l[g]){if(!h){if(n)n--;else if(o[a++]=g,a===t)return o}(h||i)&&(u[g]=1),f=!0}if(i&&(s[g]=(c=s[g])?++c:c=1,c<r)){let e=i[c-2]||(i[c-2]=[]);e[e.length]=g}}else u[g]=1}if(i)l||(s=u);else if(!f)return[];l=u}if(i)for(let e=i.length-1,r,s;0<=e;e--){s=(r=i[e]).length;for(let e=0,i;e<s;e++)if(!l[i=r[e]]){if(n)n--;else if(o[a++]=i,a===t)return o;l[i]=1}}return o}function na(e,t){let n=v(),i=v(),r=[];for(let t=0;t<e.length;t++)n[e[t]]=1;for(let e=0,o;e<t.length;e++){o=t[e];for(let e=0,t;e<o.length;e++)n[t=o[e]]&&!i[t]&&(i[t]=1,r[r.length]=t)}return r}function J(e){this.l=!0!==e&&e,this.cache=v(),this.h=[]}function oa(e,t,n){C(e)&&(e=e.query);let i=this.cache.get(e);return i||(i=this.search(e,t,n),this.cache.set(e,i)),i}J.prototype.set=function(e,t){if(!this.cache[e]){var n=this.h.length;for(n===this.l?delete this.cache[this.h[n-1]]:n++,--n;0<n;n--)this.h[n]=this.h[n-1];this.h[0]=e}this.cache[e]=t},J.prototype.get=function(e){let t=this.cache[e];if(this.l&&t&&(e=this.h.indexOf(e))){let t=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=t}return t};let qa={memory:{charset:"latin:extra",C:3,B:4,m:!1},performance:{C:3,B:3,s:!1,context:{depth:2,C:1}},match:{charset:"latin:extra",F:"reverse"},score:{charset:"latin:advanced",C:20,B:3,context:{depth:3,C:9}},default:{}};function ra(e,t,n,i,r,o){setTimeout(function(){let l=e(n,JSON.stringify(o));l&&l.then?l.then(function(){t.export(e,t,n,i,r+1)}):t.export(e,t,n,i,r+1)})}function K(e,t){if(!(this instanceof K))return new K(e);if(e){x(e)?e=qa[e]:(n=e.preset)&&(e=Object.assign({},n[n],e)),n=e.charset;var n,i=e.lang;x(n)&&(-1===n.indexOf(":")&&(n+=":default"),n=G[n]),x(i)&&(i=ka[i])}else e={};let r,o,l=e.context||{};if(this.encode=e.encode||n&&n.encode||fa,this.register=t||v(),this.C=r=e.resolution||9,this.F=t=n&&n.F||e.tokenize||"strict",this.depth="strict"===t&&l.depth,this.l=u(l.bidirectional),this.s=o=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.map=o?aa(r):v(),this.A=r=l.resolution||1,this.h=o?aa(r):v(),this.D=n&&n.D||e.rtl,this.H=(t=e.matcher||i&&i.H)&&da(t,!1),this.J=(t=e.stemmer||i&&i.J)&&da(t,!0),n=t=e.filter||i&&i.filter){n=t,i=v();for(let e=0,t=n.length;e<t;e++)i[n[e]]=1;n=i}this.filter=n,this.cache=(t=e.cache)&&new J(t)}function ja(e,t,n,i){if(t&&(n&&(t=F(t,n)),e.H&&(t=F(t,e.H)),e.J&&1<t.length&&(t=F(t,e.J)),i||""===i)){if(t=t.split(i),e.filter){e=e.filter,n=t.length,i=[];for(let r=0,o=0;r<n;r++){let n=t[r];n&&!e[n]&&(i[o++]=n)}e=i}else e=t;return e}return t}function L(e,t,n,i,r){return n&&1<e?t+(i||0)<=e?n+(r||0):(e-1)/(t+(i||0))*(n+(r||0))+1|0:0}function M(e,t,n,i,r,o,l){let s=l?e.h:e.map;(!t[n]||l&&!t[n][l])&&(e.s&&(s=s[i]),l?((t=t[n]||(t[n]=v()))[l]=1,s=s[l]||(s[l]=v())):t[n]=1,s=s[n]||(s[n]=[]),e.s||(s=s[i]||(s[i]=[])),o&&-1!==s.indexOf(r)||(s[s.length]=r,e.m&&((e=e.register[r]||(e.register[r]=[]))[e.length]=s)))}function sa(e,t,n,i,r,o,l,s){let a=[],h=s?e.h:e.map;if(e.s||(h=ua(h,l,s,e.l)),h){let n=0,c=Math.min(h.length,s?e.A:e.C);for(let t=0,d=0,u,f;t<c&&(!(u=h[t])||(e.s&&(u=ua(u,l,s,e.l)),r&&u&&o&&((f=u.length)<=r?(r-=f,u=null):(u=u.slice(r),r=0)),!u||(a[n++]=u,!o||!((d+=u.length)>=i))));t++);if(n)return o?ta(a,i,0):void(t[t.length]=a)}return!n&&a}function ta(e,t,n){return e=1===e.length?e[0]:[].concat.apply([],e),n||e.length>t?e.slice(n,n+t):e}function ua(e,t,n,i){return e=n?(e=e[(i=i&&t>n)?t:n])&&e[i?n:t]:e[t]}function N(e,t,n,i,r){let o=0;if(e.constructor===Array){if(r)-1!==(t=e.indexOf(t))?1<e.length&&(e.splice(t,1),o++):o++;else{r=Math.min(e.length,n);for(let l=0,s;l<r;l++)(s=e[l])&&(o=N(s,t,n,i,r),i||o||delete e[l])}}else for(let l in e)(o=N(e[l],t,n,i,r))||delete e[l];return o}function va(e){e=e.data;var t=self._index;let n=e.args;var i=e.task;"init"===i?(i=e.options||{},e=e.factory,t=i.encode,i.cache=!1,t&&0===t.indexOf("function")&&(i.encode=Function("return "+t)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(i),delete self.FlexSearch):self._index=new K(i)):(e=e.id,t=t[i].apply(t,n),postMessage("search"===i?{id:e,msg:t}:{id:e}))}t=K.prototype,t.append=function(e,t){return this.add(e,t,!0)},t.add=function(e,t,n,i){if(t&&(e||0===e)){if(!i&&!n&&this.register[e])return this.update(e,t);if(i=(t=this.encode(t)).length){let h=v(),c=v(),d=this.depth,u=this.C;for(let f=0;f<i;f++){let p=t[this.D?i-1-f:f];var r=p.length;if(p&&r>=this.B&&(d||!c[p])){var o=L(u,i,f),l="";switch(this.F){case"full":if(3<r){for(o=0;o<r;o++)for(var s=r;s>o;s--)if(s-o>=this.B){var a=L(u,i,f,r,o);M(this,c,l=p.substring(o,s),a,e,n)}break}case"reverse":if(2<r){for(s=r-1;0<s;s--)(l=p[s]+l).length>=this.B&&M(this,c,l,L(u,i,f,r,s),e,n);l=""}case"forward":if(1<r){for(s=0;s<r;s++)(l+=p[s]).length>=this.B&&M(this,c,l,o,e,n);break}default:if(M(this,c,p,o,e,n),d&&1<i&&f<i-1){for(r=v(),l=this.A,o=p,s=Math.min(d+1,i-f),r[o]=1,a=1;a<s;a++)if((p=t[this.D?i-1-f-a:f+a])&&p.length>=this.B&&!r[p]){r[p]=1;let t=this.l&&p>o;M(this,h,t?o:p,L(l+(i/2>l?0:1),i,f,s-1,a-1),e,n,t?p:o)}}}}}this.m||(this.register[e]=1)}}return this},t.search=function(e,t,n){let i,r,o;n||(!t&&C(e)?e=(n=e).query:C(t)&&(n=t));let l=[],s,a,h=0;if(n){t=n.limit,h=n.offset||0;var c=n.context;a=n.suggest}if(e&&1<(s=(e=this.encode(e)).length)){n=v();var d=[];for(let t=0,i=0,r;t<s;t++)if((r=e[t])&&r.length>=this.B&&!n[r]){if(!this.s&&!a&&!this.map[r])return l;d[i++]=r,n[r]=1}s=(e=d).length}if(!s)return l;for(t||(t=100),c=this.depth&&1<s&&!1!==c,n=0,c?(i=e[0],n=1):1<s&&e.sort(ba);n<s;n++){if(o=e[n],c?(r=sa(this,l,a,t,h,2===s,o,i),a&&!1===r&&l.length||(i=o)):r=sa(this,l,a,t,h,1===s,o),r)return r;if(a&&n===s-1){if(!(d=l.length)){if(c){c=0,n=-1;continue}return l}if(1===d)return ta(l[0],t,h)}}return ma(l,t,h,a)},t.contain=function(e){return!!this.register[e]},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e,t){let n=this.register[e];if(n){if(this.m)for(let t=0,i;t<n.length;t++)(i=n[t]).splice(i.indexOf(e),1);else N(this.map,e,this.C,this.s),this.depth&&N(this.h,e,this.A,this.s);if(t||delete this.register[e],this.cache){t=this.cache;for(let n=0,i;n<t.h.length;n++)i=t.h[n],-1!==t.cache[i].indexOf(e)&&(t.h.splice(n--,1),delete t.cache[i])}}return this},t.searchCache=oa,t.export=function(e,t,n,i,r){let o,l;switch(r||(r=0)){case 0:if(o="reg",this.m)for(let e in l=v(),this.register)l[e]=1;else l=this.register;break;case 1:o="cfg",l={doc:0,opt:this.s?1:0};break;case 2:o="map",l=this.map;break;case 3:o="ctx",l=this.h;break;default:return}return ra(e,t||this,n?n+"."+o:o,i,r,l),!0},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"cfg":this.s=!!t.opt;break;case"reg":this.m=!1,this.register=t;break;case"map":this.map=t;break;case"ctx":this.h=t}},la(K.prototype);let wa=0;function O(e){var t;if(!(this instanceof O))return new O(e);e?D(t=e.encode)&&(e.encode=t.toString()):e={},(t=(self||window)._factory)&&(t=t.toString());let n=self.exports,i=this;this.o=xa(t,n,e.worker),this.h=v(),this.o&&(n?this.o.on("message",function(e){i.h[e.id](e.msg),delete i.h[e.id]}):this.o.onmessage=function(e){e=e.data,i.h[e.id](e.msg),delete i.h[e.id]},this.o.postMessage({task:"init",factory:t,options:e}))}function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){let t;let n=this,i=[].slice.call(arguments);var r=i[i.length-1];return D(r)&&(t=r,i.splice(i.length-1,1)),r=new Promise(function(t){setTimeout(function(){n.h[++wa]=t,n.o.postMessage({task:e,id:wa,args:i})})}),t?(r.then(t),this):r}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var t,n=e.document||e.doc||e;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(t=n.key||n.id)&&S(t,this.A)||"id",this.m=u(e.fastupdate),this.G=(t=n.store)&&!0!==t&&[],this.store=t&&v(),this.I=(t=n.tag)&&S(t,this.A),this.l=t&&v(),this.cache=(t=e.cache)&&new J(t),e.cache=!1,this.o=e.worker,this.async=!1,t=v();let i=n.index||n.field||n;x(i)&&(i=[i]);for(let n=0,r,o;n<i.length;n++)x(r=i[n])||(o=r,r=r.field),o=C(o)?Object.assign({},e,o):e,this.o&&(t[r]=new O(o),t[r].o||(this.o=!1)),this.o||(t[r]=new K(o,this.register)),this.K[n]=S(r,this.A),this.h[n]=r;if(this.G)for(x(e=n.store)&&(e=[e]),n=0;n<e.length;n++)this.G[n]=S(e[n],this.A);this.index=t}function S(e,t){let n=e.split(":"),i=0;for(let r=0;r<n.length;r++)0<=(e=n[r]).indexOf("[]")&&(e=e.substring(0,e.length-2))&&(t[i]=!0),e&&(n[i++]=e);return i<n.length&&(n.length=i),1<i?n:n[0]}function T(e,t){if(x(t))e=e[t];else for(let n=0;e&&n<t.length;n++)e=e[t[n]];return e}function U(e,t,n,i,r){if(e=e[r],i===n.length-1)t[r]=e;else if(e){if(e.constructor===Array)for(t=t[r]=Array(e.length),r=0;r<e.length;r++)U(e,t,n,i,r);else t=t[r]||(t[r]=v()),r=n[++i],U(e,t,n,i,r)}}function V(e,t,n,i,r,o,l,s){if(e=e[l]){if(i===t.length-1){if(e.constructor===Array){if(n[i]){for(t=0;t<e.length;t++)r.add(o,e[t],!0,!0);return}e=e.join(" ")}r.add(o,e,s,!0)}else if(e.constructor===Array)for(l=0;l<e.length;l++)V(e,t,n,i,r,o,l,s);else l=t[++i],V(e,t,n,i,r,o,l,s)}}function ya(e,t,n,i){let r=this.l[e],o=r&&r.length-n;if(o&&0<o)return(o>t||n)&&(r=r.slice(n,n+t)),i&&(r=za.call(this,r)),{tag:e,result:r}}function za(e){let t=Array(e.length);for(let n=0,i;n<e.length;n++)i=e[n],t[n]={id:i,doc:this.store[i]};return t}P("add"),P("append"),P("search"),P("update"),P("remove"),t=Q.prototype,t.add=function(e,t,n){if(C(e)&&(e=T(t=e,this.key)),t&&(e||0===e)){if(!n&&this.register[e])return this.update(e,t);for(let i=0,r,o;i<this.h.length;i++)o=this.h[i],x(r=this.K[i])&&(r=[r]),V(t,r,this.A,0,this.index[o],e,r[0],n);if(this.I){let i=T(t,this.I),r=v();x(i)&&(i=[i]);for(let t=0,o,l;t<i.length;t++)if(!r[o=i[t]]&&(r[o]=1,l=this.l[o]||(this.l[o]=[]),!n||-1===l.indexOf(e))&&(l[l.length]=e,this.m)){let t=this.register[e]||(this.register[e]=[]);t[t.length]=l}}if(this.store&&(!n||!this.store[e])){let n;if(this.G){n=v();for(let e=0,i;e<this.G.length;e++)x(i=this.G[e])?n[i]=t[i]:U(t,n,i,0,i[0])}this.store[e]=n||t}}return this},t.append=function(e,t){return this.add(e,t,!0)},t.update=function(e,t){return this.remove(e).add(e,t)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var t=0;t<this.h.length&&(this.index[this.h[t]].remove(e,!this.o),!this.m);t++);if(this.I&&!this.m)for(let n in this.l){let i=(t=this.l[n]).indexOf(e);-1!==i&&(1<t.length?t.splice(i,1):delete this.l[n])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,t,n,i){n||(!t&&C(e)?e=(n=e).query:C(t)&&(n=t,t=0));let r=[],o=[],l,s,a,h,c,d,u=0;if(n){if(n.constructor===Array)a=n,n=null;else{if(a=(l=n.pluck)||n.index||n.field,h=n.tag,s=this.store&&n.enrich,c="and"===n.bool,t=n.limit||100,d=n.offset||0,h&&(x(h)&&(h=[h]),!e)){for(let e=0,n;e<h.length;e++)(n=ya.call(this,h[e],t,d,s))&&(r[r.length]=n,u++);return u?r:[]}x(a)&&(a=[a])}}a||(a=this.h),c=c&&(1<a.length||h&&1<h.length);let f=!i&&(this.o||this.async)&&[];for(let l=0,s,p,g;l<a.length;l++){let m;if(x(p=a[l])||(m=p,p=p.field),f)f[l]=this.index[p].searchAsync(e,t,m||n);else{if(g=(s=i?i[l]:this.index[p].search(e,t,m||n))&&s.length,h&&g){let e=[],n=0;c&&(e[0]=[s]);for(let t=0,i,r;t<h.length;t++)i=h[t],(g=(r=this.l[i])&&r.length)&&(n++,e[e.length]=c?[r]:r);n&&(g=(s=c?ma(e,t||100,d||0):na(s,e)).length)}if(g)o[u]=p,r[u++]=s;else if(c)return[]}}if(f){let i=this;return new Promise(function(r){Promise.all(f).then(function(o){r(i.search(e,t,n,o))})})}if(!u)return[];if(l&&(!s||!this.store))return r[0];for(let e=0,t;e<o.length;e++){if((t=r[e]).length&&s&&(t=za.call(this,t)),l)return t;r[e]={field:o[e],result:t}}return r},t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,t){return this.store[e]=t,this},t.searchCache=oa,t.export=function(e,t,n,i,r){if(r||(r=0),i||(i=0),i<this.h.length){let n=this.h[i],o=this.index[n];t=this,setTimeout(function(){o.export(e,t,r?n.replace(":","-"):"",i,r++)||(i++,r=1,t.export(e,t,n,i,r))})}else{let t;switch(r){case 1:n="tag",t=this.l;break;case 2:n="store",t=this.store;break;default:return}ra(e,this,n,i,r,t)}},t.import=function(e,t){if(t)switch(x(t)&&(t=JSON.parse(t)),e){case"tag":this.l=t;break;case"reg":this.m=!1,this.register=t;for(let e=0,n;e<this.h.length;e++)(n=this.index[this.h[e]]).register=t,n.m=!1;break;case"store":this.store=t;break;default:let n=(e=e.split("."))[0];e=e[1],n&&e&&this.index[n].import(e,t)}},la(Q.prototype);var Ba={encode:Aa,D:!1,F:""};let Ca=/[\W_]+/,Da=[E("[\xe0\xe1\xe2\xe3\xe4\xe5]"),"a",E("[\xe8\xe9\xea\xeb]"),"e",E("[\xec\xed\xee\xef]"),"i",E("[\xf2\xf3\xf4\xf5\xf6ő]"),"o",E("[\xf9\xfa\xfb\xfcű]"),"u",E("[\xfdŷ\xff]"),"y",E("\xf1"),"n",E("[\xe7c]"),"k",E("\xdf"),"s",E(" & ")," and "];function Aa(e){var t=e;return t.normalize&&(t=t.normalize("NFD").replace(ca,"")),ja(this,t.toLowerCase(),!e.normalize&&Da,Ca)}var Fa={encode:Ea,D:!1,F:"strict"};let Ga=/[^a-z0-9]+/,Ha={b:"p",v:"f",w:"f",z:"s",x:"s",ß:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Ea(e){e=Aa.call(this,e).join(" ");let t=[];if(e){let n=e.split(Ga),i=n.length;for(let r=0,o,l=0;r<i;r++)if((e=n[r])&&(!this.filter||!this.filter[e])){let n=Ha[o=e[0]]||o,i=n;for(let t=1;t<e.length;t++){let r=Ha[o=e[t]]||o;r&&r!==i&&(n+=r,i=r)}t[l++]=n}}return t}var Ja={encode:Ia,D:!1,F:""};let Ka=[E("ae"),"a",E("oe"),"o",E("sh"),"s",E("th"),"t",E("ph"),"f",E("pf"),"f",E("(?![aeo])h(?![aeo])"),"",E("(?!^[aeo])h(?!^[aeo])"),""];function Ia(e,t){return e&&(2<(e=Ea.call(this,e).join(" ")).length&&(e=F(e,Ka)),t||(1<e.length&&(e=ea(e)),e&&(e=e.split(" ")))),e}var Ma={encode:La,D:!1,F:""};let Na=E("(?!\\b)[aeo]");function La(e){return e&&(1<(e=Ia.call(this,e,!0)).length&&(e=e.replace(Na,"")),1<e.length&&(e=ea(e)),e&&(e=e.split(" "))),e}G["latin:default"]=ha,G["latin:simple"]=Ba,G["latin:balance"]=Fa,G["latin:advanced"]=Ja,G["latin:extra"]=Ma;let W=self,Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,t){G[e]=t},registerLanguage:function(e,t){ka[e]=t}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z}(this)},5985:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var i=n(1527),r=n(959);let o={annotations:[],manifest:void 0,searchString:void 0,options:{offset:0},vault:new(n(3832)).j};function l(e,t){switch(t.type){case"updateAnnotations":return{...e,annotations:t.payload};case"updateSearchString":return{...e,searchString:t.payload};default:return e}}let s=(0,r.createContext)({dispatch:()=>null,state:o}),a=e=>{let{children:t,manifest:n}=e,a={...o.options,...e.options},[h,c]=(0,r.useReducer)(l,o);return(0,i.jsx)(s.Provider,{value:{state:{...h,manifest:n,options:a},dispatch:c},children:t})};var h=n(9040),c=n(5455);let d=(0,c.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"space-between"}),u=(0,c.zo)("aside",{margin:"0",padding:"0",position:"relative",zIndex:2,flexGrow:"1",flexShrink:"0",["& ".concat(d)]:{position:"absolute",width:"50%",top:0},"&.anchor":{["& ".concat(d)]:{position:"fixed",width:"50%"}}}),f=(0,c.zo)("header",{display:"flex",justifyContent:"space-between",fontSize:"1",flexGrow:"1",flexShrink:"0",marginBottom:"1.618rem",strong:{fontWeight:"400",fontSize:"1.33rem"}}),p=(0,c.zo)("section",{margin:"0",gap:"1rem"});var g=e=>{let{label:t}=e;return(0,i.jsx)(f,{children:(0,i.jsx)("strong",{children:(0,i.jsx)(h.__,{label:t})})})};let m=(0,c.zo)("article",{transition:"all 0.382s ease-in-out",display:"flex",flexDirection:"row",flexWrap:"nowrap",gap:"2.618rem"}),x=(0,c.zo)("div",{transition:"$all",width:"50%",opacity:0,transform:"translateX(2.618rem)",zIndex:-1}),v=(0,c.zo)("div",{width:"50%",display:"flex",flexDirection:"column",justifyContent:"flex-start"}),y=(0,c.zo)("hr",{margin:"0",borderColor:"transparent",height:"1.618rem",position:"relative",zIndex:0,display:"flex",justifyContent:"flex-end",marginTop:"2.618rem","&::before":{content:"attr(aria-label)",position:"absolute",right:"1.618rem",bottom:"0",zIndex:1,display:"flex",fontSize:"0.7222rem",fontWeight:"400",lineHeight:"1rem",background:"inherit",opacity:.7},"&::after":{content:"",width:"100%",position:"absolute",zIndex:0,height:"1px",background:"#6662"}}),b=(0,c.zo)("div",{position:"relative",zIndex:"1",display:"flex",flexDirection:"column",gap:"2.618rem","&[data-figures-visible='true']":{["& ".concat(x)]:{opacity:1,zIndex:0,transform:"translateX(0)"}}});var w=e=>{let{canvas:t,canvasInfo:{current:n,total:r}}=e;return(0,i.jsxs)("figcaption",{children:[(0,i.jsxs)("em",{children:[n," / ",r]}),(null==t?void 0:t.label)&&(0,i.jsx)(h.__,{label:null==t?void 0:t.label}),(null==t?void 0:t.summary)&&(0,i.jsx)(h.ER,{summary:null==t?void 0:t.summary,as:"p"})]})},j=n(5129);let k=(0,c.zo)("div",{width:"100%",height:"400px",background:"#6662",backgroundSize:"contain",color:"white",position:"relative",zIndex:"1",overflow:"hidden"});var C=e=>{let{body:t,label:n}=e;return(0,i.jsx)(k,{"data-testid":"scroll-figure-image",children:(0,i.jsx)(j.default,{body:t,openSeadragonConfig:{showNavigator:!1,showHomeControl:!1},...n&&{label:n}})})};let z=(0,c.zo)("figure",{figcaption:{display:"flex",flexDirection:"column",margin:"1.618rem 0 0",opacity:.9,em:{fontSize:"0.9em",fontStyle:"normal",opacity:.7}}});var S=n(4707),E=e=>{let{canvas:t,canvasInfo:n}=e,{state:o}=(0,r.useContext)(s),{vault:l}=o,a=(0,S.G)(l,t.id);return a?(0,i.jsxs)(z,{children:[null==a?void 0:a.map(e=>(0,i.jsx)(C,{body:e,label:null==t?void 0:t.label},null==e?void 0:e.id)),(0,i.jsx)(w,{canvas:t,canvasInfo:n})]}):null};let I="255, 197, 32",A=(0,c.zo)("div",{paddingTop:"1.618rem","span.highlight":{position:"relative",fontWeight:"bold","&::before":{top:"0",position:"absolute",display:"inline",content:"",width:"calc(100% + 4px)",height:"calc(100% + 2px) ",marginLeft:"-2px",borderRadius:"3px",border:"1px solid rgba(".concat(I,", 0.2)"),borderBottom:"1px solid rgba(".concat(I,", 0.618)"),boxShadow:"1px 1px 1px #6661"},"&::after":{left:"0",top:"0",position:"absolute",display:"inline",content:"",width:"calc(100% + 4px)",height:"calc(100% + 2px) ",marginLeft:"-2px",marginTop:"-1px",borderRadius:"3px",backgroundColor:"rgba(".concat(I,", 0.2)"),zIndex:-1}}});var L=e=>{let{body:t}=e,[n,o]=(0,r.useState)(""),{state:l}=(0,r.useContext)(s),{searchString:a}=l;return((0,r.useEffect)(()=>{let e=null==t?void 0:t.value;if((null==t?void 0:t.format)==="text/plain"){let t=/\n/g,n="<br />";e=null==e?void 0:e.replace(t,n)}if(a){let t=RegExp(a,"gi");e=null==e?void 0:e.replace(t,e=>'<span class="highlight">'.concat(e,"</span>"))}o(e)},[t,a]),n)?(0,i.jsx)(A,{dangerouslySetInnerHTML:{__html:n},"data-body-id":t.id,"data-testid":"scroll-item-body",id:t.id}):null};let D=e=>{var t;let{hasItemBreak:n,isLastItem:o,item:l,itemCount:a,itemNumber:c}=e,{state:d}=r.useContext(s),{annotations:u,vault:f}=d,p=null==f?void 0:f.get(l),g=null==u?void 0:null===(t=u.filter(e=>e.target===l.id))||void 0===t?void 0:t.map(e=>{var t;return null==e?void 0:null===(t=e.body)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)(L,{body:e},t))}),b={current:c,total:a};return(0,i.jsxs)(m,{"data-page-break":n,"data-page-number":c,"data-last-item":o,children:[(0,i.jsx)(x,{children:p&&(0,i.jsx)(E,{canvas:p,canvasInfo:b})}),(0,i.jsxs)(v,{children:[(null==p?void 0:p.label)&&(0,i.jsxs)("strong",{children:[(0,i.jsx)(h.__,{label:null==p?void 0:p.label})," ","(".concat(b.current," / ").concat(b.total,")")]}),(0,i.jsx)("div",{children:g||(0,i.jsx)("p",{children:"[Blank]"})}),n&&(0,i.jsx)(y,{"aria-label":"Page Break"})]})]})};var B=r.memo(D),_=n(210);let F="255, 197, 32",P=(0,c.zo)("span",{fontWeight:"700"}),O=(0,c.zo)("div",{display:"flex",gap:"0.25rem"}),W=(0,c.zo)("div",{display:"flex",flexDirection:"column",gap:"0.5rem",button:{backgroundColor:"#6660",opacity:"0.7",transition:"$all",padding:"0.5rem 0.618rem",fontSize:"0.9rem",lineHeight:"1.1rem",textAlign:"left",borderRadius:"6px",border:"1px solid #6662",borderBottomWidth:"2px",display:"flex",flexDirection:"column",gap:"0.25rem","&:hover":{opacity:"1",boxShadow:"5px 5px 13px #6662"},"&[data-result=true]":{backgroundColor:"rgba(".concat(F,", 0.2)"),borderColor:"rgba(".concat(F,", 0.2)"),borderBottomColor:"rgba(".concat(F,", 0.382)"),opacity:"1","&:hover":{backgroundColor:"rgba(".concat(F,", 0.382)")}}}}),R=(0,c.zo)("input",{margin:"0",padding:"0 1rem 0 2rem",background:"none",zIndex:"2",height:"2rem",marginLeft:"1rem",marginTop:"1rem",justifyContent:"center",display:"flex",alignItems:"center",fontSize:"1rem",borderRadius:"2rem",fontFamily:"inherit",backgroundColor:"$primary",border:"none",color:"$secondary",cursor:"text",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important",flexGrow:"0",width:"100%","&:placeholder":{color:"inherit"}}),G=(0,c.zo)("span",{position:"absolute",zIndex:"3",width:"2rem",height:"2rem",padding:"8px",marginTop:"1rem",marginLeft:"1rem",color:"$secondary",fill:"$secondary",stroke:"$secondary",transition:"$all",cursor:"text"}),$=(0,c.zo)("button",{opacity:"1",display:"flex",alignItems:"center",borderRadius:"2rem",width:"2rem",height:"2rem",alignSelf:"center",marginTop:"1rem",gap:"0.35rem",backgroundColor:"$accent",fill:"$secondary",flexShrink:"0",svg:{padding:"6px",color:"inherit",fill:"inherit"},'&[aria-disabled="true"]':{opacity:"0",display:"none"}}),T=(0,c.zo)("form",{display:"flex",justifyContent:"space-between",gap:"1rem",width:"100%",variants:{isPanelExpanded:{true:{["".concat(G)]:{marginLeft:"0"},["& ".concat(R)]:{marginLeft:"0",backgroundColor:"$primary",width:"auto",flexGrow:"1"}},false:{}}}}),M=(0,c.zo)("div",{}),H={charset:"latin:extra, arabic:extra, cyrillic:extra, cjk:extra",optimize:!0,tokenize:"full",resolution:9,document:{id:"id",index:"content"}};var N=e=>{let{isPanelExpanded:t}=e,{state:n}=(0,r.useContext)(s),{annotations:o,searchString:l=""}=n,a=new _.Document(H),h=[];function c(e){return e.map(e=>null==o?void 0:o.filter(t=>t.body.find(t=>t.id===e)).map(t=>{let n=t.body.findIndex(t=>t.id===e);return{...t,body:t.body[n]}}).shift())}null==o||o.forEach(e=>{var t;null==e||null===(t=e.body)||void 0===t||t.forEach(e=>{var t;let n=null==e?void 0:null===(t=e.value)||void 0===t?void 0:t.replace(/\n/g,"");h.push(null==e?void 0:e.id),a.add({id:null==e?void 0:e.id,content:n})})});let d=null==a?void 0:a.search(l).reduce((e,t)=>[...new Set([...e,...t.result])],[]),u={found:c(d),notFound:c(h.filter(e=>!d.includes(e)))},f=e=>{var t,n;e&&(null===(n=document)||void 0===n||null===(t=n.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"}))};return(0,i.jsx)(M,{children:(0,i.jsxs)(W,{children:[u.found.map(e=>(0,i.jsxs)("button",{"data-result":"true",disabled:!t,onClick:()=>f(e.body.id),children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(P,{children:e.motivation}),(0,i.jsx)("span",{children:e.body.language})]}),(0,i.jsxs)("span",{children:[e.body.value.slice(0,150),"..."]})]},e.id)),u.notFound.map(e=>(0,i.jsxs)("button",{"data-result":"false",disabled:!t,onClick:()=>f(e.body.id),children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(P,{children:e.motivation}),(0,i.jsx)("span",{children:e.body.language})]}),(0,i.jsxs)("span",{children:[e.body.value.slice(0,150),"..."]})]},e.id))]})})};let J=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,i.jsx)("title",{children:"Search"}),(0,i.jsx)("path",{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"})]}),q=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,i.jsx)("title",{children:"Close"}),(0,i.jsx)("path",{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})]});var X=e=>{let{togglePanel:t,isPanelExpanded:n}=e,{dispatch:o,state:l}=(0,r.useContext)(s),{searchString:a}=l,h=(0,r.useRef)(null),c=()=>h.current===document.activeElement&&t(!0),d=()=>{var e;return null==h?void 0:null===(e=h.current)||void 0===e?void 0:e.focus()},u=()=>{var e;null===(e=h.current)||void 0===e||e.blur(),f(),t(!1),o({payload:"",type:"updateSearchString"})},f=()=>{h.current&&(h.current.value="")},p=e=>{e.preventDefault(),u()},g=e=>{"Escape"===e.key&&(e.preventDefault(),u())};(0,r.useEffect)(()=>{var e;return null===(e=document)||void 0===e||e.addEventListener("keydown",g),()=>{var e;null===(e=document)||void 0===e||e.removeEventListener("keydown",g)}},[]),(0,r.useEffect)(()=>{if(null==h?void 0:h.current)return h.current.addEventListener("focus",c),h.current.addEventListener("blur",c),()=>{h.current&&(h.current.removeEventListener("focus",c),h.current.removeEventListener("blur",c))}},[]);let m=e=>{var t;o({payload:null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value,type:"updateSearchString"})};return(0,i.jsxs)(T,{id:"scroll-search",autoComplete:"off",isPanelExpanded:n,children:[(0,i.jsx)(G,{onClick:d,children:(0,i.jsx)(J,{})}),(0,i.jsx)(R,{ref:h,name:"clover-search",type:"text",placeholder:"Search...",defaultValue:a,onChange:m}),(0,i.jsx)($,{"aria-disabled":!n,"aria-label":"Close search panel",onClick:p,disabled:!n,children:(0,i.jsx)(q,{})})]})};let K=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",flexShrink:"0",position:"relative",zIndex:"1",maxWidth:"100%",marginTop:"1rem",transition:"$all",variants:{isPanelExpanded:{true:{zIndex:1,opacity:1,transform:"translateX(0)"},false:{zIndex:-1,opacity:0,transform:"translateX(-2.618rem)",transitionDelay:"0",transition:"none"}}}}),V=e=>{let[t,n]=(0,r.useState)({top:0,left:0});return(0,r.useEffect)(()=>{let t=()=>{if(e.current){let t=e.current.getBoundingClientRect();n({top:t.top,left:t.left})}};return window.addEventListener("scroll",t),window.addEventListener("resize",t),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),t};var U=e=>{var t;let{isPanelExpanded:n,handlePanel:o}=e,l=(0,r.useRef)(null),{state:a}=(0,r.useContext)(s),{options:h}=a,{offset:c}=h,{top:f}=V(l),p=!!f&&f<c,g=null==l?void 0:null===(t=l.current)||void 0===t?void 0:t.offsetWidth,m=g?.5*g:g,x=m?m-315:180,v={top:p?c:0,width:"calc(".concat(m,"px - 1.318rem)"),maxWidth:n?"100%":"".concat(x,"px"),minWidth:"130px"};return(0,i.jsx)(u,{ref:l,className:p?"anchor":"","data-testid":"scroll-panel",children:(0,i.jsxs)(d,{style:v,children:[(0,i.jsx)(X,{togglePanel:o,isPanelExpanded:n}),(0,i.jsx)(K,{"data-testid":"scroll-panel-results","data-panel-expanded":n,isPanelExpanded:n,children:(0,i.jsx)(N,{isPanelExpanded:n})})]})})},Q=e=>{let{items:t}=e,[n,o]=(0,r.useState)(!1),l=e=>o(e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{isPanelExpanded:n,handlePanel:l}),(0,i.jsx)(b,{"data-figures-visible":!n,children:t.map((e,n)=>{let r=n+1,o=r===t.length;return(0,i.jsx)(B,{item:e,hasItemBreak:r<t.length,isLastItem:o,itemCount:t.length,itemNumber:r},e.id)})})]})},Y=(e,t)=>{let[n,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(!t)return;let n=[];null==e||e.forEach(e=>{var i;let r=t.get(e);null==r||null===(i=r.annotations)||void 0===i||i.forEach(e=>{var i;let r=t.get(e);null==r||null===(i=r.items)||void 0===i||i.forEach(e=>{let i=t.get(e);if(i){var r;n.push({...i,body:null==i?void 0:null===(r=i.body)||void 0===r?void 0:r.map(e=>t.get(e))})}})})}),i(n.reduce((e,t)=>(e.some(e=>e.id===t.id)||e.push(t),e),[]))},[e,t]),n};let Z=e=>{let{iiifContent:t}=e,[n,o]=(0,r.useState)(),{state:l,dispatch:a}=(0,r.useContext)(s),{vault:h}=l,c=Y(null==n?void 0:n.items,h);return((0,r.useEffect)(()=>{h&&h.load(t).then(e=>e&&o(e)).catch(e=>console.error("Manifest ".concat(t," failed to load: ").concat(e)))},[t,h]),(0,r.useEffect)(()=>{a({type:"updateAnnotations",payload:c})},[c,a]),n)?(0,i.jsxs)(p,{children:[n.label&&(0,i.jsx)(g,{label:n.label}),n.items&&(0,i.jsx)(Q,{items:n.items})]}):null};var ee=e=>{let{iiifContent:t,options:n}=e;return(0,i.jsx)(a,{options:n,children:(0,i.jsx)(Z,{iiifContent:t})})}},8640:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});let i=(e,t,n,i)=>{let r={canvas:void 0,accompanyingCanvas:void 0,annotationPage:void 0,annotations:[]},o=r=>{if(r){if(!r.body||!r.motivation){console.error("Invalid annotation after Hyperion parsing: missing either 'body' or 'motivation'",r);return}let o=r.body;Array.isArray(o)&&(o=o[0]);let l=e.get(o.id);if(l)switch(n){case"painting":return r.target===t.id&&r.motivation&&"painting"===r.motivation[0]&&i.includes(l.type)&&(r.body=l),!!r;case"supplementing":return;default:throw Error("Invalid annotation motivation.")}}};if(r.canvas=e.get(t),r.canvas){var l,s;r.annotationPage=e.get(r.canvas.items[0]),r.accompanyingCanvas=(null===(l=r.canvas)||void 0===l?void 0:l.accompanyingCanvas)?e.get(null===(s=r.canvas)||void 0===s?void 0:s.accompanyingCanvas):void 0}if(r.annotationPage){let t=e.get(r.annotationPage.items).map(t=>({body:e.get(t.body[0].id),motivation:t.motivation,type:"Annotation"})),n=[];t.forEach(t=>{"Choice"===t.body.type?t.body.items.forEach(i=>n.push({...t,id:i.id,body:e.get(i.id)})):n.push(t)}),r.annotations=n.filter(o)}return r}},4707:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var i=n(8640);let r=(e,t)=>{let n=(0,i.g)(e,{id:t,type:"Canvas"},"painting",["Image","Sound","Video"]);if(0!==n.annotations.length&&n.annotations&&n.annotations)return n.annotations.map(e=>null==e?void 0:e.body)}}}]);