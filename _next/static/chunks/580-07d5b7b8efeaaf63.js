(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580,933],{4264:function(e,t,r){"use strict";r.d(t,{bw:function(){return v},__:function(){return d},SF:function(){return T},i1:function(){return _},Oy:function(){return F},bT:function(){return Z},QZ:function(){return N},ER:function(){return q},pl:function(){return Y}});var n=r(2676),a=r(5271),l=r(9949),i=r(3567),o=r.n(i);function u(e,t){let r=Object.keys(e).filter(e=>t.includes(e)?null:e),n={};return r.forEach(t=>{n[t]=e[t]}),n}var s=r(5020);let c=(0,s.zo)("span",{});var d=e=>{let{as:t,label:r}=e,a=u(e,["as","label"]);return(0,n.jsx)(c,{as:t,...a,children:(0,l.M)(r,a.lang)})},f=r(1985);let m=function(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"200,",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";Array.isArray(e)&&(e=e[0]);let{id:a,service:l}=e;if(!l)return a;if(Array.isArray(e.service)&&e.service.length>0&&(t=l[0]),t){if(t["@id"])return"".concat(t["@id"],"/").concat(n,"/").concat(r,"/0/default.jpg");if(t.id)return"".concat(t.id,"/").concat(n,"/").concat(r,"/0/default.jpg")}},h=(0,s.zo)("img",{objectFit:"cover"});var p=e=>{let t;let r=(0,a.useRef)(null),{contentResource:i,altAsLabel:o,region:s="full"}=e;o&&(t=(0,l.M)(o));let c=u(e,["contentResource","altAsLabel"]),{type:d,id:p,width:g=200,height:v=200,duration:j}=i;(0,a.useEffect)(()=>{if(!p&&!r.current||["Image"].includes(d)||!p.includes("m3u8"))return;let e=new f.ZP;return r.current&&(e.attachMedia(r.current),e.on(f.ZP.Events.MEDIA_ATTACHED,function(){e.loadSource(p)})),e.on(f.ZP.Events.ERROR,function(t,r){if(r.fatal)switch(r.type){case f.ZP.ErrorTypes.NETWORK_ERROR:console.error("fatal ".concat(t," network error encountered, try to recover")),e.startLoad();break;case f.ZP.ErrorTypes.MEDIA_ERROR:console.error("fatal ".concat(t," media error encountered, try to recover")),e.recoverMediaError();break;default:e.destroy()}}),()=>{e&&(e.detachMedia(),e.destroy())}},[p,d]);let x=(0,a.useCallback)(()=>{if(!r.current)return;let e=0,t=30;if(j&&(t=j),!p.split("#t=")&&j&&(e=.1*j),p.split("#t=").pop()){let t=p.split("#t=").pop();t&&(e=parseInt(t.split(",")[0]))}let n=r.current;n.autoplay=!0,n.currentTime=e,setTimeout(()=>x(),1e3*t)},[j,p]);(0,a.useEffect)(()=>x(),[x]);let b=m(i,"".concat(g,",").concat(v),s);switch(d){case"Image":return(0,n.jsx)(h,{as:"img",alt:t,css:{width:g,height:v},src:b,...c},p);case"Video":return(0,n.jsx)(h,{as:"video",css:{width:g,height:v},disablePictureInPicture:!0,loop:!0,muted:!0,onPause:x,ref:r,src:p},p);default:return console.warn("Resource type: ".concat(d," is not valid or not yet supported in Primitives.")),(0,n.jsx)(n.Fragment,{})}};let g=(0,s.zo)("a",{});var v=e=>{let{children:t,homepage:r}=e,a=u(e,["children","homepage"]);return(0,n.jsx)(n.Fragment,{children:r&&r.map(e=>{let r=(0,l.M)(e.label,a.lang);return(0,n.jsx)(g,{"aria-label":t?r:void 0,href:e.id,...a,children:t||r},e.id)})})};let j={delimiter:", "},x=(0,a.createContext)(void 0),b=()=>{let e=(0,a.useContext)(x);if(void 0===e)throw Error("usePrimitivesContext must be used with a PrimitivesProvider");return e},y=e=>{let{children:t,initialState:r=j}=e,a=A(r,"delimiter");return(0,n.jsx)(x.Provider,{value:{delimiter:a},children:t})},A=(e,t)=>Object.hasOwn(e,t)?e[t].toString():void 0,M=(0,s.zo)("span",{}),w=e=>{var t;let{as:r,markup:a}=e,{delimiter:i}=b();if(!a)return(0,n.jsx)(n.Fragment,{});let s=u(e,["as","markup"]),c={__html:(t=(0,l.M)(a,s.lang,i),o()(t,{allowedAttributes:{a:["href"],img:["alt","src","height","width"]},allowedSchemes:["http","https","mailto"],allowedTags:["a","b","br","i","img","p","small","span","sub","sup"]}))};return(0,n.jsx)(M,{as:r,...s,dangerouslySetInnerHTML:c})};var E=e=>a.useContext(x)?(0,n.jsx)(w,{...e}):(0,n.jsx)(y,{children:(0,n.jsx)(w,{...e})}),R=e=>{let{as:t="dd",lang:r,value:a}=e;return(0,n.jsx)(E,{markup:a,as:t,lang:r})};let S=(0,s.zo)("span",{});var P=e=>{var t;let{as:r="dd",customValueContent:i,lang:o,value:u}=e,{delimiter:s}=b(),c=null===(t=(0,l.Y)(u,o))||void 0===t?void 0:t.map(e=>(0,a.cloneElement)(i,{value:e}));return(0,n.jsx)(S,{as:r,lang:o,children:null==c?void 0:c.map((e,t)=>[t>0&&"".concat(s),(0,n.jsx)(a.Fragment,{children:e},t)])})},O=e=>{var t;let{item:r,lang:a,customValueContent:i}=e,{label:o,value:u}=r,s=null===(t=(0,l.M)(o))||void 0===t?void 0:t.replace(" ","-").toLowerCase();return(0,n.jsxs)("div",{role:"group","data-label":s,children:[(0,n.jsx)(d,{as:"dt",label:o,lang:a}),i?(0,n.jsx)(P,{as:"dd",customValueContent:i,value:u,lang:a}):(0,n.jsx)(R,{as:"dd",value:u,lang:a})]})},k=r(8115);let C=(0,s.zo)("dl",{});var T=e=>{let{as:t,customValueContent:r,metadata:a}=e;if(!Array.isArray(a))return(0,n.jsx)(n.Fragment,{});let i=(0,k.KT)(e,"customValueDelimiter"),o=u(e,["as","customValueContent","customValueDelimiter","metadata"]);return(0,n.jsx)(y,{..."string"==typeof i?{initialState:{delimiter:i}}:void 0,children:a.length>0&&(0,n.jsx)(C,{as:t,...o,children:a.map((e,t)=>{let a=r?function(e,t){let r=t.filter(t=>{let{matchingLabel:r}=t,n=Object.keys(t.matchingLabel)[0],a=(0,l.M)(r,n);if((0,l.M)(e,n)===a)return!0}).map(e=>e.Content);if(Array.isArray(r))return r[0]}(e.label,r):void 0;return(0,n.jsx)(O,{customValueContent:a,item:e,lang:null==o?void 0:o.lang},t)})})})};let z=(0,s.zo)("li",{}),I=(0,s.zo)("ul",{});var _=e=>{let{as:t,partOf:r}=e,a=u(e,["as","partOf"]);return(0,n.jsx)(I,{as:t,children:r&&r.map(e=>{let t=e.label?(0,l.M)(e.label,a.lang):void 0;return(0,n.jsx)(z,{children:(0,n.jsx)("a",{href:e.id,...a,children:t||e.id})},e.id)})})};let V=(0,s.zo)("li",{}),D=(0,s.zo)("ul",{});var F=e=>{let{as:t,rendering:r}=e,a=u(e,["as","rendering"]);return(0,n.jsx)(D,{as:t,children:r&&r.map(e=>{let t=(0,l.M)(e.label,a.lang);return(0,n.jsx)(V,{children:(0,n.jsx)("a",{href:e.id,...a,target:"_blank",children:t||e.id})},e.id)})})};let L=(0,s.zo)("dl",{});var Z=e=>{let{as:t,requiredStatement:r}=e;if(!r)return(0,n.jsx)(n.Fragment,{});let a=(0,k.KT)(e,"customValueDelimiter"),l=u(e,["as","customValueDelimiter","requiredStatement"]);return(0,n.jsx)(y,{..."string"==typeof a?{initialState:{delimiter:a}}:void 0,children:(0,n.jsx)(L,{as:t,...l,children:(0,n.jsx)(O,{item:r,lang:l.lang})})})};let H=(0,s.zo)("li",{}),K=(0,s.zo)("ul",{});var N=e=>{let{as:t,seeAlso:r}=e,a=u(e,["as","seeAlso"]);return(0,n.jsx)(K,{as:t,children:r&&r.map(e=>{let t=(0,l.M)(e.label,a.lang);return(0,n.jsx)(H,{children:(0,n.jsx)("a",{href:e.id,...a,children:t||e.id})},e.id)})})},q=e=>{let{as:t,summary:r}=e,a=u(e,["as","customValueDelimiter","summary"]);return(0,n.jsx)(E,{as:t,markup:r,...a})},Y=e=>{let{thumbnail:t,region:r}=e,a=u(e,["thumbnail"]);return(0,n.jsx)(n.Fragment,{children:t&&t.map(e=>(0,n.jsx)(p,{contentResource:e,region:r,...a},e.id))})};let J=()=>(console.log("Use dot notation to access Primitives.*, ex: Primitives.Label"),null);J.ContentResource=p,J.Homepage=v,J.Label=d,J.Markup=E,J.Metadata=T,J.MetadataItem=O,J.PartOf=_,J.Rendering=F,J.RequiredStatement=Z,J.SeeAlso=N,J.Summary=q,J.Thumbnail=Y,J.Value=R},9949:function(e,t,r){"use strict";r.d(t,{M:function(){return a},Y:function(){return n}});let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";if(!e)return null;if("string"==typeof e)return[e];if(!e[t]){let t=Object.getOwnPropertyNames(e);if(t.length>0)return e[t[0]]}return e[t]&&Array.isArray(e[t])?e[t]:null},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:", ",a=n(e,t);return Array.isArray(a)?a.join("".concat(r)):a}},8115:function(e,t,r){"use strict";r.d(t,{KT:function(){return o},RH:function(){return l},rJ:function(){return a},un:function(){return i}});let n=e=>{let t=e.toString().split(":"),r=Math.ceil(parseInt(t[0])),n=Math.ceil(parseInt(t[1])),a=u(Math.ceil(parseInt(t[2])),2),l=0!==r&&n<10?(n+"").padStart(2,"0"):n,i="".concat(l,":").concat(a);return 0!==r&&(i="".concat(r,":").concat(i)),i},a=e=>n(new Date(1e3*e).toISOString().substr(11,8)),l=(e,t)=>{if("object"!=typeof e||null===e)return t;for(let r in t)"object"!=typeof t[r]||null===t[r]||Array.isArray(t[r])?e[r]=t[r]:(e[r]||(e[r]={}),e[r]=l(e[r],t[r]));return e},i=e=>e.split("").reduce(function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e},0),o=(e,t)=>Object.hasOwn(e,t)?e[t].toString():void 0,u=(e,t)=>String(e).padStart(t,"0")},5556:function(){},7004:function(){},4094:function(){},7370:function(){}}]);