"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{3778:function(e,t,o){o.d(t,{c:function(){return n}});let n=(0,o(5020).zo)("button",{display:"flex",height:"2rem",width:"2rem",borderRadius:"2rem",padding:"0",margin:"0",fontFamily:"inherit",background:"none",backgroundColor:"$primary",border:"none",color:"white",cursor:"pointer",marginLeft:"0.618rem",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important","&:first-child":{marginLeft:"0"},"@xs":{marginBottom:"0.618rem",marginLeft:"0","&:last-child":{marginBottom:"0"}},svg:{height:"60%",width:"60%",padding:"20%",fill:"$secondary",stroke:"$secondary",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"inherit"},"&:hover, &:focus":{backgroundColor:"$accent"},"&[data-button=rotate-right]":{"&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=rotate-left]":{transform:"scaleX(-1)","&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=reset]":{"&:hover, &:focus":{svg:{rotate:"-15deg"}}}})},3247:function(e,t,o){o.r(t),o.d(t,{default:function(){return L}});var n=o(2676),r=o(2526),i=o(7467),a=o(3836),l=o(5020);let s=(0,l.zo)("div",{position:"absolute !important",zIndex:"1",top:"1rem",left:"1rem",width:"161.8px",height:"100px",backgroundColor:"#000D",boxShadow:"5px 5px 5px #0002",borderRadius:"3px",".displayregion":{border:" 3px solid $accent !important",boxShadow:"0 0 3px #0006"},"@sm":{width:"123px",height:"76px"},"@xs":{width:"100px",height:"61.8px"}}),c=(0,l.zo)("div",{position:"relative",width:"100%",height:"100%",zIndex:"0"}),d=(0,l.zo)("div",{width:"100%",height:"100%",maxHeight:"100vh",background:"transparent",backgroundSize:"contain",color:"white",position:"relative",zIndex:"0",overflow:"hidden",variants:{hasNavigator:{true:{["".concat(s)]:{display:"block"}},false:{["".concat(s)]:{display:"none"}}}}});var u=o(9212),h=o.n(u),g=o(5271),v=o(8729),f=o(3778),p=e=>{let{className:t,id:o,label:r,children:i}=e,a=r.toLowerCase().replace(/\s/g,"-");return(0,n.jsx)(f.c,{id:o,className:t,"data-testid":"openseadragon-button","data-button":a,children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"".concat(o,"-svg-title"),"data-testid":"openseadragon-button-svg",focusable:"false",viewBox:"0 0 512 512",role:"img",children:[(0,n.jsx)("title",{id:"".concat(o,"-svg-title"),children:r}),i]})})};let m=(0,l.zo)("div",{position:"absolute",zIndex:"1",top:"1rem",right:"1rem",display:"flex","@xs":{flexDirection:"column",zIndex:"2"},variants:{hasPlaceholder:{true:{right:"3.618rem","@xs":{top:"3.618rem",right:"1rem"}},false:{right:"1rem","@xs":{top:"1rem",right:"1rem"}}}}}),w=()=>(0,n.jsx)("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M256 112v288M400 256H112"}),x=()=>(0,n.jsx)("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 256H112"}),b=()=>(0,n.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"}),y=()=>(0,n.jsx)("path",{d:"M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z"}),S=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"}),(0,n.jsx)("path",{d:"M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"})]});var C=e=>{let{_cloverViewerHasPlaceholder:t,config:o}=e,{activeCanvas:r,plugins:i,vault:a}=(0,v.D1)(),l=a.get({id:r,type:"Canvas"});return(0,n.jsxs)(m,{"data-testid":"clover-iiif-image-openseadragon-controls",hasPlaceholder:t,children:[o.showZoomControl&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{id:o.zoomInButton,label:"zoom in",children:(0,n.jsx)(w,{})}),(0,n.jsx)(p,{id:o.zoomOutButton,label:"zoom out",children:(0,n.jsx)(x,{})})]}),o.showFullPageControl&&(0,n.jsx)(p,{id:o.fullPageButton,label:"full page",children:(0,n.jsx)(b,{})}),o.showRotationControl&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{id:o.rotateRightButton,label:"rotate right",children:(0,n.jsx)(S,{})}),(0,n.jsx)(p,{id:o.rotateLeftButton,label:"rotate left",children:(0,n.jsx)(S,{})})]}),o.showHomeControl&&(0,n.jsx)(p,{id:o.homeButton,label:"reset",children:(0,n.jsx)(y,{})}),i.filter(e=>{var t;return null===(t=e.imageViewer)||void 0===t?void 0:t.controls}).map((e,t)=>{var o,r,i,a;let s=null===(r=e.imageViewer)||void 0===r?void 0:null===(o=r.controls)||void 0===o?void 0:o.component;return(0,n.jsx)(s,{...null==e?void 0:null===(a=e.imageViewer)||void 0===a?void 0:null===(i=a.controls)||void 0===i?void 0:i.componentProps,canvas:l,useViewerDispatch:v.Cu,useViewerState:v.D1},t)})]})},j=o(2684),k=e=>{let{ariaLabel:t,config:o,uri:r,_cloverViewerHasPlaceholder:i,imageType:a,openSeadragonCallback:l}=e,[u,f]=(0,g.useState)(),[p,m]=(0,g.useState)(),w=(0,v.Cu)(),x=(0,g.useRef)(!1);return(0,g.useEffect)(()=>(x.current||(x.current=!0,p||m(h()(o))),()=>null==p?void 0:p.destroy()),[]),(0,g.useEffect)(()=>{p&&l&&l(p)},[p,l]),(0,g.useEffect)(()=>{p&&r!==u&&(null==p||p.forceRedraw(),f(r))},[p,u,r]),(0,g.useEffect)(()=>{if(u&&p)switch(a){case"simpleImage":null==p||p.addSimpleImage({url:u});break;case"tiledImage":(0,j.Er)(u).then(e=>{try{if(!e)throw Error("No tile source found for ".concat(u));null==p||p.addTiledImage({tileSource:e,success:()=>{"function"==typeof w&&w({type:"updateOSDImageLoaded",OSDImageLoaded:!0})}})}catch(e){console.error(e)}});break;default:null==p||p.close(),console.warn("Unable to render ".concat(u,' in OpenSeadragon as type: "').concat(a,'"'))}},[a,u]),(0,n.jsxs)(d,{className:"clover-iiif-image-openseadragon","data-testid":"clover-iiif-image-openseadragon","data-openseadragon-instance":o.id,hasNavigator:o.showNavigator,children:[(0,n.jsx)(C,{_cloverViewerHasPlaceholder:i,config:o}),o.showNavigator&&(0,n.jsx)(s,{id:o.navigatorId,"data-testid":"clover-iiif-image-openseadragon-navigator"}),(0,n.jsx)(c,{id:o.id,"data-testid":"clover-iiif-image-openseadragon-viewport",role:"img",...t&&{"aria-label":t}})]})},I=o(9949),_=o(2950),L=e=>{let{_cloverViewerHasPlaceholder:t=!1,body:o,instanceId:l,isTiledImage:s=!1,label:c,src:d="",openSeadragonCallback:u,openSeadragonConfig:h={}}=e,g=l||(0,_.Z)(),v="string"==typeof c?c:(0,I.M)(c),f={id:"openseadragon-".concat(g),navigatorId:"openseadragon-navigator-".concat(g),loadTilesWithAjax:!0,fullPageButton:"fullPage-".concat(g),homeButton:"reset-".concat(g),rotateLeftButton:"rotateLeft-".concat(g),rotateRightButton:"rotateRight-".concat(g),zoomInButton:"zoomIn-".concat(g),zoomOutButton:"zoomOut-".concat(g),showNavigator:!0,showFullPageControl:!0,showHomeControl:!0,showRotationControl:!0,showZoomControl:!0,navigatorBorderColor:"transparent",gestureSettingsMouse:{clickToZoom:!0,dblClickToZoom:!0,pinchToZoom:!0,scrollToZoom:!1},...h},{imageType:p,uri:m}=o?(0,r.z9)(o):(0,r.D1)(d,s);return m?(0,n.jsx)(i.SV,{FallbackComponent:a.Z,children:(0,n.jsx)(k,{_cloverViewerHasPlaceholder:t,ariaLabel:v,config:f,imageType:p,uri:m,openSeadragonCallback:u},g)}):null}},3836:function(e,t,o){o.d(t,{Z:function(){return s}});var n=o(2676),r=o(5020);let i=(0,r.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center"}),a=(0,r.zo)("p",{fontWeight:"bold",fontSize:"x-large"}),l=(0,r.zo)("span",{fontSize:"medium"});o(5271);var s=e=>{let{error:t}=e,{message:o}=t;return(0,n.jsxs)(i,{role:"alert",children:[(0,n.jsx)(a,{"data-testid":"headline",children:"Something went wrong"}),o&&(0,n.jsxs)(l,{children:["Error message: ".concat(o)," "]})]})}},8729:function(e,t,o){o.d(t,{Cu:function(){return b},D1:function(){return x},MY:function(){return w},W2:function(){return v},as:function(){return h}});var n,r,i,a=o(2676),l=o(5271),s=o(3857),c=o(8115),d=o(2950);let u={annotationOverlays:{backgroundColor:"#6666ff",borderColor:"#000099",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:2},background:"transparent",canvasBackgroundColor:"#6662",canvasHeight:"500px",contentSearch:{searchResultsLimit:20,overlays:{backgroundColor:"#ff6666",borderColor:"#990000",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:4}},ignoreCaptionLabels:[],informationPanel:{vtt:{autoScroll:{enabled:!0,settings:{behavior:"smooth",block:"center"}}},open:!0,renderAbout:!0,renderSupplementing:!0,renderToggle:!0,renderAnnotation:!0,renderContentSearch:!0},openSeadragon:{},requestHeaders:{"Content-Type":"application/json"},showDownload:!0,showIIIFBadge:!0,showTitle:!0,withCredentials:!1,localeText:{contentSearch:{tabLabel:"Search Results",formPlaceholder:"Enter search words",noSearchResults:"No search results",loading:"Loading...",moreResults:"more results"}}};function h(e){let t={...u.informationPanel.vtt.autoScroll};return"object"==typeof e&&(t="enabled"in e?e:{enabled:!0,settings:e}),!1===e&&(t.enabled=!1),function(e){let{behavior:t,block:o}=e,n=["auto","instant","smooth"],r=["center","end","nearest","start"];if(!n.includes(t))throw TypeError("'".concat(t,"' not in ").concat(n.join(" | ")));if(!r.includes(o))throw TypeError("'".concat(o,"' not in ").concat(r.join(" | ")))}(t.settings),t}let g=h(null==u?void 0:null===(r=u.informationPanel)||void 0===r?void 0:null===(n=r.vtt)||void 0===n?void 0:n.autoScroll),v={activeCanvas:"",activeManifest:"",OSDImageLoaded:!1,collection:{},configOptions:u,customDisplays:[],plugins:[],isAutoScrollEnabled:g.enabled,isAutoScrolling:!1,isInformationOpen:null==u?void 0:null===(i=u.informationPanel)||void 0===i?void 0:i.open,isLoaded:!1,isUserScrolling:void 0,vault:new s.j,contentSearchVault:new s.j,openSeadragonViewer:null,viewerId:(0,d.Z)()},f=l.createContext(v),p=l.createContext(v);function m(e,t){switch(t.type){case"updateActiveCanvas":return t.canvasId||(t.canvasId=""),{...e,activeCanvas:t.canvasId};case"updateActiveManifest":return{...e,activeManifest:t.manifestId};case"updateOSDImageLoaded":return{...e,OSDImageLoaded:t.OSDImageLoaded};case"updateAutoScrollAnnotationEnabled":return{...e,isAutoScrollEnabled:t.isAutoScrollEnabled};case"updateAutoScrolling":return{...e,isAutoScrolling:t.isAutoScrolling};case"updateCollection":return{...e,collection:t.collection};case"updateConfigOptions":return{...e,configOptions:(0,c.RH)(e.configOptions,t.configOptions)};case"updateInformationOpen":return{...e,isInformationOpen:t.isInformationOpen};case"updateIsLoaded":return{...e,isLoaded:t.isLoaded};case"updateUserScrolling":return{...e,isUserScrolling:t.isUserScrolling};case"updateOpenSeadragonViewer":return{...e,openSeadragonViewer:t.openSeadragonViewer};case"updateViewerId":return{...e,viewerId:t.viewerId};default:throw Error("Unhandled action type: ".concat(t.type))}}let w=e=>{let{initialState:t=v,children:o}=e,[n,r]=(0,l.useReducer)(m,t);return(0,a.jsx)(f.Provider,{value:n,children:(0,a.jsx)(p.Provider,{value:r,children:o})})};function x(){let e=l.useContext(f);if(void 0===e)throw Error("useViewerState must be used within a ViewerProvider");return e}function b(){let e=l.useContext(p);if(void 0===e)throw Error("useViewerDispatch must be used within a ViewerProvider");return e}},3096:function(e,t,o){o.d(t,{LV:function(){return r},j9:function(){return n},ki:function(){return i}});let n=e=>["ar","fa","ur","ps","dv","sd","ug","ku","he","yi","jrb","jpr","nqo"].includes(e.split("-")[0])?"RTL":"LTR",r=e=>{let t={id:"string"==typeof e?e:e.source};if("string"==typeof e){if(e.includes("#xywh=")){let o=e.split("#xywh=");if(o&&o[1]){let[e,n,r,i]=o[1].split(",").map(e=>Number(e));t={id:o[0],rect:{x:e,y:n,w:r,h:i}}}}else if(e.includes("#t=")){let o=e.split("#t=");o&&o[1]&&(t={id:o[0],t:o[1]})}}else if("object"==typeof e){var o,n,r,i,a;if((null===(o=e.selector)||void 0===o?void 0:o.type)==="PointSelector")t={id:e.source,point:{x:e.selector.x,y:e.selector.y}};else if((null===(n=e.selector)||void 0===n?void 0:n.type)==="SvgSelector")t={id:e.source,svg:e.selector.value};else if((null===(r=e.selector)||void 0===r?void 0:r.type)==="FragmentSelector"&&(null===(i=e.selector)||void 0===i?void 0:i.value.includes("xywh="))&&"Canvas"==e.source.type&&e.source.id){let o=null===(a=e.selector)||void 0===a?void 0:a.value.split("xywh=");if(o&&o[1]){let[n,r,i,a]=o[1].split(",").map(e=>Number(e));t={id:e.source.id,rect:{x:n,y:r,w:i,h:a}}}}}return t};function i(e){let t=new Set;return!function e(o){Array.isArray(o)?o.forEach(e):o&&"object"==typeof o&&(o.language&&t.add(o.language),Object.values(o).forEach(e))}(e),Array.from(t)}},2684:function(e,t,o){o.d(t,{AG:function(){return i},Er:function(){return r},FO:function(){return s},Mx:function(){return c},Vu:function(){return l}});var n=o(9772);let r=e=>fetch("".concat(e.replace(/\/$/,""),"/info.json")).then(e=>e.json()).then(e=>e).catch(t=>{console.error("The IIIF tilesource ".concat(e.replace(/\/$/,""),"/info.json failed to load: ").concat(t))}),i=e=>{let t,o;return Array.isArray(e)&&(t=e[0])&&(o="@id"in t?t["@id"]:t.id),o},a=e=>{let t,o;if(d(e))t=e,o={};else{let i=JSON.parse((0,n.o0)(e));switch(null==i?void 0:i.type){case"SpecificResource":case"Range":case"Annotation":o={manifest:t=null==i?void 0:i.target.partOf[0].id,canvas:null==i?void 0:i.target.id};break;case"Canvas":o={manifest:t=null==i?void 0:i.partOf[0].id,canvas:null==i?void 0:i.id};break;case"Manifest":var r;t=null==i?void 0:i.id,o={collection:null==i?void 0:null===(r=i.partOf[0])||void 0===r?void 0:r.id,manifest:null==i?void 0:i.id};break;case"Collection":o={collection:t=null==i?void 0:i.id}}}return{resourceId:t,active:o}},l=e=>{let{resourceId:t,active:o}=a(e);return o.collection||o.manifest||t},s=(e,t)=>{let o=t.items.map(e=>e.id),{active:n}=a(e),r=n.canvas;return o.includes(r)?r:o[0]},c=(e,t)=>{let{active:o}=a(e),n=o.manifest,r=t.items.filter(e=>"Manifest"===e.type).map(e=>e.id);return 0==r.length?null:r.includes(n)?n:r[0]},d=e=>{try{new URL(e)}catch(e){return!1}return!0}},2526:function(e,t,o){o.d(t,{LW:function(){return x},zG:function(){return g},$H:function(){return w},z9:function(){return f},D1:function(){return p},dH:function(){return m}});var n,r,i=o(9212),a=o.n(i);let l=window.OpenSeadragon;if(!l&&!(l=a()))throw Error("OpenSeadragon is missing.");let s="http://www.w3.org/2000/svg";l.Viewer&&(l.Viewer.prototype.svgOverlay=function(){return this._svgOverlayInfo||(this._svgOverlayInfo=new c(this)),this._svgOverlayInfo});let c=function(e){let t=this;this._viewer=e,this._containerWidth=0,this._containerHeight=0,this._svg=document.createElementNS(s,"svg"),this._svg.style.position="absolute",this._svg.style.left=0,this._svg.style.top=0,this._svg.style.width="100%",this._svg.style.height="100%",this._viewer.canvas.appendChild(this._svg),this._node=document.createElementNS(s,"g"),this._svg.appendChild(this._node),this._viewer.addHandler("animation",function(){t.resize()}),this._viewer.addHandler("open",function(){t.resize()}),this._viewer.addHandler("rotate",function(){t.resize()}),this._viewer.addHandler("flip",function(){t.resize()}),this._viewer.addHandler("resize",function(){t.resize()}),this.resize()};c.prototype={node:function(){return this._node},resize:function(){this._containerWidth!==this._viewer.container.clientWidth&&(this._containerWidth=this._viewer.container.clientWidth,this._svg.setAttribute("width",this._containerWidth)),this._containerHeight!==this._viewer.container.clientHeight&&(this._containerHeight=this._viewer.container.clientHeight,this._svg.setAttribute("height",this._containerHeight));let e=this._viewer.viewport.pixelFromPoint(new l.Point(0,0),!0),t=this._viewer.viewport.getZoom(!0),o=this._viewer.viewport.getRotation(),n=this._viewer.viewport.getFlip(),r=this._viewer.viewport._containerInnerSize.x,i=r*t,a=i;n&&(i=-i,e.x=-e.x+r),this._node.setAttribute("transform","translate("+e.x+","+e.y+") scale("+i+","+a+") rotate("+o+")")},onClick:function(e,t){new l.MouseTracker({element:e,clickHandler:t}).setTracking(!0)}};let d=e=>new c(e);var u=o(3096),h=o(2684);function g(e,t,o,n,r){if(!e)return;let i=1/t.width;n.forEach(t=>{if(!t.target)return;let{point:n,rect:l,svg:s}=(0,u.LV)(t.target);if(l){let{x:t,y:n,w:s,h:c}=l;!function(e,t,o,n,r,i,l){let s=new(a()).Rect(t,o,n,r),c=document.createElement("div");if(i){let{backgroundColor:e,opacity:t,borderType:o,borderColor:n,borderWidth:r}=i;c.style.backgroundColor=e,c.style.opacity=t,c.style.border="".concat(o," ").concat(r," ").concat(n),c.className=l}e.addOverlay(c,s)}(e,t*i,n*i,s*i,c*i,o,r)}if(n){let{x:t,y:a}=n;v(e,'\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="'.concat(t,'" cy="').concat(a,'" r="20" />\n        </svg>\n      '),o,i,r)}s&&v(e,s,o,i,r)})}function v(e,t,o,n,r){let i=function(e){if(!e)return null;let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.children[0]}(t);if(i)for(let t of i.children)!function e(t,o,n,r,i){var a;if("#text"===o.nodeName)!o.textContent||o.textContent.includes("\n")||console.log("nodeName:",o.nodeName,", textContent:",o.textContent,", childNodes.length",o.childNodes.length);else{let l=function(e,t,o){let n=!1,r=!1,i=!1,a=!1,l=document.createElementNS("http://www.w3.org/2000/svg",e.nodeName);if(e.attributes.length>0)for(let t=0;t<e.attributes.length;t++){let o=e.attributes[t];switch(o.name){case"fill":i=!0;break;case"stroke":n=!0;break;case"stroke-width":r=!0;break;case"fill-opacity":a=!0}l.setAttribute(o.name,o.textContent)}return n||(l.style.stroke=null==t?void 0:t.borderColor),r||(l.style.strokeWidth=null==t?void 0:t.borderWidth),i||(l.style.fill=null==t?void 0:t.backgroundColor),a||(l.style.fillOpacity=null==t?void 0:t.opacity),l.setAttribute("transform","scale(".concat(o,")")),l}(o,n,r),s=d(t);s.node().append(l),null===(a=s._svg)||void 0===a||a.setAttribute("class",i),o.childNodes.forEach(o=>{e(t,o,n,r,i)})}}(e,t,o,n,r)}(n=r||(r={})).TiledImage="tiledImage",n.SimpleImage="simpleImage";let f=e=>{let t=Array.isArray(null==e?void 0:e.service)&&(null==e?void 0:e.service.length)>0;return{uri:t?(0,h.AG)(null==e?void 0:e.service):null==e?void 0:e.id,imageType:t?r.TiledImage:r.SimpleImage}},p=(e,t)=>({uri:e,imageType:t?r.TiledImage:r.SimpleImage});function m(e,t){if(!e)return;t.startsWith(".")||(t="."+t);let o=document.querySelectorAll(t);o&&o.forEach(t=>e.removeOverlay(t))}function w(e,t,o,n){let r=(0,u.LV)(o),{point:i,rect:l,svg:s}=r;if(i||l||s){let o=function(e,t,o){let n,r,i=40,l=40;t.rect&&(n=t.rect.x,r=t.rect.y,i=t.rect.w,l=t.rect.h),t.point&&(n=t.point.x,r=t.point.y),u.LV.svg;let s=1/e.width;return new(a()).Rect(n*s-i*s/2*(o-1),r*s-l*s/2*(o-1),i*s*o,l*s*o)}(n,r,t);null==e||e.viewport.fitBounds(o)}}function x(e,t,o,n,r){var i;if(!(null==t?void 0:t.items)||(null==t?void 0:t.items.length)===0)return;let a=[];t.items.forEach(t=>{let o=e.get(t.id);"string"==typeof o.target&&o.target.startsWith(n.id)&&a.push(o)}),o&&(null===(i=r.contentSearch)||void 0===i?void 0:i.overlays)&&g(o,n,r.contentSearch.overlays,a,"content-search-overlay")}}}]);