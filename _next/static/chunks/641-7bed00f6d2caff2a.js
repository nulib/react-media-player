(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{7921:function(e,t,r){"use strict";r.d(t,{bw:function(){return j},__:function(){return f},SF:function(){return M},i1:function(){return V},bT:function(){return F},QZ:function(){return H},ER:function(){return K},pl:function(){return N}});var n=r(1527),a=r(959);let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";if(!e)return null;if("string"==typeof e)return[e];if(!e[t]){let t=Object.getOwnPropertyNames(e);if(t.length>0)return e[t[0]]}return e[t]&&Array.isArray(e[t])?e[t]:null},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:", ",n=l(e,t);return Array.isArray(n)?n.join("".concat(r)):n};var o=r(5646),s=r.n(o);function u(e,t){let r=Object.keys(e).filter(e=>t.includes(e)?null:e),n={};return r.forEach(t=>{n[t]=e[t]}),n}var c=r(5086);let d=(0,c.zo)("span",{});var f=e=>{let{as:t,label:r}=e,a=u(e,["as","label"]);return(0,n.jsx)(d,{as:t,...a,children:i(r,a.lang)})},m=r(2089);let h=function(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"200,",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";Array.isArray(e)&&(e=e[0]);let{id:a,service:l}=e;if(!l)return a;if(Array.isArray(e.service)&&e.service.length>0&&(t=l[0]),t){if(t["@id"])return"".concat(t["@id"],"/").concat(n,"/").concat(r,"/0/default.jpg");if(t.id)return"".concat(t.id,"/").concat(n,"/").concat(r,"/0/default.jpg")}},p=(0,c.zo)("img",{objectFit:"cover"});var g=e=>{let t;let r=(0,a.useRef)(null),{contentResource:l,altAsLabel:o,region:s="full"}=e;o&&(t=i(o));let c=u(e,["contentResource","altAsLabel"]),{type:d,id:f,width:g=200,height:v=200,duration:j}=l;(0,a.useEffect)(()=>{if(!f&&!r.current||["Image"].includes(d)||!f.includes("m3u8"))return;let e=new m.ZP;return r.current&&(e.attachMedia(r.current),e.on(m.ZP.Events.MEDIA_ATTACHED,function(){e.loadSource(f)})),e.on(m.ZP.Events.ERROR,function(t,r){if(r.fatal)switch(r.type){case m.ZP.ErrorTypes.NETWORK_ERROR:console.error("fatal ".concat(t," network error encountered, try to recover")),e.startLoad();break;case m.ZP.ErrorTypes.MEDIA_ERROR:console.error("fatal ".concat(t," media error encountered, try to recover")),e.recoverMediaError();break;default:e.destroy()}}),()=>{e&&(e.detachMedia(),e.destroy())}},[f,d]);let x=(0,a.useCallback)(()=>{if(!r.current)return;let e=0,t=30;if(j&&(t=j),!f.split("#t=")&&j&&(e=.1*j),f.split("#t=").pop()){let t=f.split("#t=").pop();t&&(e=parseInt(t.split(",")[0]))}let n=r.current;n.autoplay=!0,n.currentTime=e,setTimeout(()=>x(),1e3*t)},[j,f]);(0,a.useEffect)(()=>x(),[x]);let b=h(l,"".concat(g,",").concat(v),s);switch(d){case"Image":return(0,n.jsx)(p,{as:"img",alt:t,css:{width:g,height:v},src:b,...c},f);case"Video":return(0,n.jsx)(p,{as:"video",css:{width:g,height:v},disablePictureInPicture:!0,loop:!0,muted:!0,onPause:x,ref:r,src:f},f);default:return console.warn("Resource type: ".concat(d," is not valid or not yet supported in Primitives.")),(0,n.jsx)(n.Fragment,{})}};let v=(0,c.zo)("a",{});var j=e=>{let{children:t,homepage:r}=e,a=u(e,["children","homepage"]);return(0,n.jsx)(n.Fragment,{children:r&&r.map(e=>{let r=i(e.label,a.lang);return(0,n.jsx)(v,{"aria-label":t?r:void 0,href:e.id,...a,children:t||r},e.id)})})};let x={delimiter:", "},b=(0,a.createContext)(void 0),y=()=>{let e=(0,a.useContext)(b);if(void 0===e)throw Error("usePrimitivesContext must be used with a PrimitivesProvider");return e},A=e=>{let{children:t,initialState:r=x}=e,a=w(r,"delimiter");return(0,n.jsx)(b.Provider,{value:{delimiter:a},children:t})},w=(e,t)=>Object.hasOwn(e,t)?e[t].toString():void 0,E=(0,c.zo)("span",{}),R=e=>{var t;let{as:r,markup:a}=e,{delimiter:l}=y();if(!a)return(0,n.jsx)(n.Fragment,{});let o=u(e,["as","markup"]),c={__html:(t=i(a,o.lang,l),s()(t,{allowedAttributes:{a:["href"],img:["alt","src","height","width"]},allowedSchemes:["http","https","mailto"],allowedTags:["a","b","br","i","img","p","small","span","sub","sup"]}))};return(0,n.jsx)(E,{as:r,...o,dangerouslySetInnerHTML:c})};var S=e=>a.useContext(b)?(0,n.jsx)(R,{...e}):(0,n.jsx)(A,{children:(0,n.jsx)(R,{...e})}),P=e=>{let{as:t="dd",lang:r,value:a}=e;return(0,n.jsx)(S,{markup:a,as:t,lang:r})};let O=(0,c.zo)("span",{});var k=e=>{var t;let{as:r="dd",customValueContent:i,lang:o,value:s}=e,{delimiter:u}=y(),c=null===(t=l(s,o))||void 0===t?void 0:t.map(e=>(0,a.cloneElement)(i,{value:e}));return(0,n.jsx)(O,{as:r,lang:o,children:null==c?void 0:c.map((e,t)=>[t>0&&"".concat(u),(0,n.jsx)(a.Fragment,{children:e},t)])})},C=e=>{var t;let{item:r,lang:a,customValueContent:l}=e,{label:o,value:s}=r,u=null===(t=i(o))||void 0===t?void 0:t.replace(" ","-").toLowerCase();return(0,n.jsxs)("div",{role:"group","data-label":u,children:[(0,n.jsx)(f,{as:"dt",label:o,lang:a}),l?(0,n.jsx)(k,{as:"dd",customValueContent:l,value:s,lang:a}):(0,n.jsx)(P,{as:"dd",value:s,lang:a})]})},T=r(9857);let I=(0,c.zo)("dl",{});var M=e=>{let{as:t,customValueContent:r,metadata:a}=e;if(!Array.isArray(a))return(0,n.jsx)(n.Fragment,{});let l=(0,T.KT)(e,"customValueDelimiter"),o=u(e,["as","customValueContent","customValueDelimiter","metadata"]);return(0,n.jsx)(A,{..."string"==typeof l?{initialState:{delimiter:l}}:void 0,children:a.length>0&&(0,n.jsx)(I,{as:t,...o,children:a.map((e,t)=>{let a=r?function(e,t){let r=t.filter(t=>{let{matchingLabel:r}=t,n=Object.keys(t.matchingLabel)[0],a=i(r,n);if(i(e,n)===a)return!0}).map(e=>e.Content);if(Array.isArray(r))return r[0]}(e.label,r):void 0;return(0,n.jsx)(C,{customValueContent:a,item:e,lang:null==o?void 0:o.lang},t)})})})};let z=(0,c.zo)("li",{}),_=(0,c.zo)("ul",{});var V=e=>{let{as:t,partOf:r}=e,a=u(e,["as","partOf"]);return(0,n.jsx)(_,{as:t,children:r&&r.map(e=>{let t=e.label?i(e.label,a.lang):void 0;return(0,n.jsx)(z,{children:(0,n.jsx)("a",{href:e.id,...a,children:t||e.id})},e.id)})})};let D=(0,c.zo)("dl",{});var F=e=>{let{as:t,requiredStatement:r}=e;if(!r)return(0,n.jsx)(n.Fragment,{});let a=(0,T.KT)(e,"customValueDelimiter"),l=u(e,["as","customValueDelimiter","requiredStatement"]);return(0,n.jsx)(A,{..."string"==typeof a?{initialState:{delimiter:a}}:void 0,children:(0,n.jsx)(D,{as:t,...l,children:(0,n.jsx)(C,{item:r,lang:l.lang})})})};let L=(0,c.zo)("li",{}),Z=(0,c.zo)("ul",{});var H=e=>{let{as:t,seeAlso:r}=e,a=u(e,["as","seeAlso"]);return(0,n.jsx)(Z,{as:t,children:r&&r.map(e=>{let t=i(e.label,a.lang);return(0,n.jsx)(L,{children:(0,n.jsx)("a",{href:e.id,...a,children:t||e.id})},e.id)})})},K=e=>{let{as:t,summary:r}=e,a=u(e,["as","customValueDelimiter","summary"]);return(0,n.jsx)(S,{as:t,markup:r,...a})},N=e=>{let{thumbnail:t,region:r}=e,a=u(e,["thumbnail"]);return(0,n.jsx)(n.Fragment,{children:t&&t.map(e=>(0,n.jsx)(g,{contentResource:e,region:r,...a},e.id))})};let q=()=>(console.log("Use dot notation to access Primitives.*, ex: Primitives.Label"),null);q.ContentResource=g,q.Homepage=j,q.Label=f,q.Markup=S,q.Metadata=M,q.MetadataItem=C,q.PartOf=V,q.RequiredStatement=F,q.SeeAlso=H,q.Summary=K,q.Thumbnail=N,q.Value=P},9857:function(e,t,r){"use strict";r.d(t,{KT:function(){return i},RH:function(){return l},rJ:function(){return a}});let n=e=>{let t=e.toString().split(":"),r=Math.ceil(parseInt(t[0])),n=Math.ceil(parseInt(t[1])),a=o(Math.ceil(parseInt(t[2])),2),l=0!==r&&n<10?(n+"").padStart(2,"0"):n,i="".concat(l,":").concat(a);return 0!==r&&(i="".concat(r,":").concat(i)),i},a=e=>n(new Date(1e3*e).toISOString().substr(11,8)),l=(e,t)=>{if("object"!=typeof e||null===e)return t;for(let r in t)"object"!=typeof t[r]||null===t[r]||Array.isArray(t[r])?e[r]=t[r]:(e[r]||(e[r]={}),e[r]=l(e[r],t[r]));return e},i=(e,t)=>Object.hasOwn(e,t)?e[t].toString():void 0,o=(e,t)=>String(e).padStart(t,"0")},8083:function(){},9906:function(){},9352:function(){},6408:function(){}}]);