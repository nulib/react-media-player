"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{515:function(e,t,o){o.d(t,{c:function(){return i}});let i=(0,o(5455).zo)("button",{display:"flex",height:"2rem",width:"2rem",borderRadius:"2rem",padding:"0",margin:"0",fontFamily:"inherit",background:"none",backgroundColor:"$primary",border:"none",color:"white",cursor:"pointer",marginLeft:"0.618rem",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important","&:first-child":{marginLeft:"0"},"@xs":{marginBottom:"0.618rem",marginLeft:"0","&:last-child":{marginBottom:"0"}},svg:{height:"60%",width:"60%",padding:"20%",fill:"$secondary",stroke:"$secondary",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"inherit"},"&:hover, &:focus":{backgroundColor:"$accent"},"&[data-button=rotate-right]":{"&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=rotate-left]":{transform:"scaleX(-1)","&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=reset]":{"&:hover, &:focus":{svg:{rotate:"-15deg"}}}})},5129:function(e,t,o){o.r(t),o.d(t,{default:function(){return I}});var i=o(1527),n=o(6543),r=o(8448),a=o(2196),l=o(5455);let s=(0,l.zo)("div",{position:"absolute !important",zIndex:"1",top:"1rem",left:"1rem",width:"161.8px",height:"100px",backgroundColor:"#000D",boxShadow:"5px 5px 5px #0002",borderRadius:"3px",".displayregion":{border:" 3px solid $accent !important",boxShadow:"0 0 3px #0006"},"@sm":{width:"123px",height:"76px"},"@xs":{width:"100px",height:"61.8px"}}),c=(0,l.zo)("div",{position:"relative",width:"100%",height:"100%",zIndex:"0"}),d=(0,l.zo)("div",{width:"100%",height:"100%",maxHeight:"100vh",background:"transparent",backgroundSize:"contain",color:"white",position:"relative",zIndex:"0",overflow:"hidden",variants:{hasNavigator:{true:{["".concat(s)]:{display:"block"}},false:{["".concat(s)]:{display:"none"}}}}});var h=o(9212),u=o.n(h),g=o(959),v=o(515),f=e=>{let{className:t,id:o,label:n,children:r}=e,a=n.toLowerCase().replace(/\s/g,"-");return(0,i.jsx)(v.c,{id:o,className:t,"data-testid":"openseadragon-button","data-button":a,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"".concat(o,"-svg-title"),"data-testid":"openseadragon-button-svg",focusable:"false",viewBox:"0 0 512 512",role:"img",children:[(0,i.jsx)("title",{id:"".concat(o,"-svg-title"),children:n}),r]})})};let p=(0,l.zo)("div",{position:"absolute",zIndex:"1",top:"1rem",right:"1rem",display:"flex","@xs":{flexDirection:"column",zIndex:"2"},variants:{hasPlaceholder:{true:{right:"3.618rem","@xs":{top:"3.618rem",right:"1rem"}},false:{right:"1rem","@xs":{top:"1rem",right:"1rem"}}}}}),m=()=>(0,i.jsx)("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M256 112v288M400 256H112"}),w=()=>(0,i.jsx)("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 256H112"}),x=()=>(0,i.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"}),y=()=>(0,i.jsx)("path",{d:"M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z"}),b=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"}),(0,i.jsx)("path",{d:"M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"})]});var _=e=>{let{_cloverViewerHasPlaceholder:t,config:o}=e;return(0,i.jsxs)(p,{"data-testid":"clover-iiif-image-openseadragon-controls",hasPlaceholder:t,children:[o.showZoomControl&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{id:o.zoomInButton,label:"zoom in",children:(0,i.jsx)(m,{})}),(0,i.jsx)(f,{id:o.zoomOutButton,label:"zoom out",children:(0,i.jsx)(w,{})})]}),o.showFullPageControl&&(0,i.jsx)(f,{id:o.fullPageButton,label:"full page",children:(0,i.jsx)(x,{})}),o.showRotationControl&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{id:o.rotateRightButton,label:"rotate right",children:(0,i.jsx)(b,{})}),(0,i.jsx)(f,{id:o.rotateLeftButton,label:"rotate left",children:(0,i.jsx)(b,{})})]}),o.showHomeControl&&(0,i.jsx)(f,{id:o.homeButton,label:"reset",children:(0,i.jsx)(y,{})})]})},k=o(2103),j=e=>{let{ariaLabel:t,config:o,uri:n,_cloverViewerHasPlaceholder:r,imageType:a,openSeadragonCallback:l}=e,[h,v]=(0,g.useState)(),[f,p]=(0,g.useState)();return(0,g.useEffect)(()=>(f||p(u()(o)),()=>null==f?void 0:f.destroy()),[]),(0,g.useEffect)(()=>{f&&l&&l(f)},[f,l]),(0,g.useEffect)(()=>{f&&n!==h&&(f.forceRedraw(),v(n))},[f,h,n]),(0,g.useEffect)(()=>{if(h&&f)switch(a){case"simpleImage":f.addSimpleImage({url:h});break;case"tiledImage":(0,k.Er)(h).then(e=>{try{if(!e)throw Error("No tile source found for ".concat(h));f.addTiledImage({tileSource:e})}catch(e){console.error(e)}});break;default:f.close(),console.warn("Unable to render ".concat(h,' in OpenSeadragon as type: "').concat(a,'"'))}},[a,h,f]),(0,i.jsxs)(d,{className:"clover-iiif-image-openseadragon","data-testid":"clover-iiif-image-openseadragon","data-openseadragon-instance":o.id,hasNavigator:o.showNavigator,children:[(0,i.jsx)(_,{_cloverViewerHasPlaceholder:r,config:o}),o.showNavigator&&(0,i.jsx)(s,{id:o.navigatorId,"data-testid":"clover-iiif-image-openseadragon-navigator"}),(0,i.jsx)(c,{id:o.id,"data-testid":"clover-iiif-image-openseadragon-viewport",role:"img",...t&&{"aria-label":t}})]})},z=o(5593),C=o(2950),I=e=>{let{_cloverViewerHasPlaceholder:t=!1,body:o,instanceId:l,isTiledImage:s=!1,label:c,src:d="",openSeadragonCallback:h,openSeadragonConfig:u={}}=e,g=l||(0,C.Z)(),v="string"==typeof c?c:(0,z.M)(c),f={id:"openseadragon-".concat(g),navigatorId:"openseadragon-navigator-".concat(g),loadTilesWithAjax:!0,fullPageButton:"fullPage-".concat(g),homeButton:"reset-".concat(g),rotateLeftButton:"rotateLeft-".concat(g),rotateRightButton:"rotateRight-".concat(g),zoomInButton:"zoomIn-".concat(g),zoomOutButton:"zoomOut-".concat(g),showNavigator:!0,showFullPageControl:!0,showHomeControl:!0,showRotationControl:!0,showZoomControl:!0,navigatorBorderColor:"transparent",gestureSettingsMouse:{clickToZoom:!0,dblClickToZoom:!0,pinchToZoom:!0,scrollToZoom:!1},...u},{imageType:p,uri:m}=o?(0,n.z9)(o):(0,n.D1)(d,s);return m?(0,i.jsx)(r.SV,{FallbackComponent:a.Z,children:(0,i.jsx)(j,{_cloverViewerHasPlaceholder:t,ariaLabel:v,config:f,imageType:p,uri:m,openSeadragonCallback:h},g)}):null}},2196:function(e,t,o){o.d(t,{Z:function(){return s}});var i=o(1527),n=o(5455);let r=(0,n.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center"}),a=(0,n.zo)("p",{fontWeight:"bold",fontSize:"x-large"}),l=(0,n.zo)("span",{fontSize:"medium"});o(959);var s=e=>{let{error:t}=e,{message:o}=t;return(0,i.jsxs)(r,{role:"alert",children:[(0,i.jsx)(a,{"data-testid":"headline",children:"Something went wrong"}),o&&(0,i.jsxs)(l,{children:["Error message: ".concat(o)," "]})]})}},5500:function(e,t,o){o.d(t,{L:function(){return i}});let i=e=>{let t={id:"string"==typeof e?e:e.source};if("string"==typeof e){if(e.includes("#xywh=")){let o=e.split("#xywh=");if(o&&o[1]){let[e,i,n,r]=o[1].split(",").map(e=>Number(e));t={id:o[0],rect:{x:e,y:i,w:n,h:r}}}}else if(e.includes("#t=")){let o=e.split("#t=");o&&o[1]&&(t={id:o[0],t:o[1]})}}else if("object"==typeof e){var o,i;(null===(o=e.selector)||void 0===o?void 0:o.type)==="PointSelector"?t={id:e.source,point:{x:e.selector.x,y:e.selector.y}}:(null===(i=e.selector)||void 0===i?void 0:i.type)==="SvgSelector"&&(t={id:e.source,svg:e.selector.value})}return t}},2103:function(e,t,o){o.d(t,{AG:function(){return r},Er:function(){return n},FO:function(){return s},Mx:function(){return c},Vu:function(){return l}});var i=o(1921);let n=e=>fetch("".concat(e.replace(/\/$/,""),"/info.json")).then(e=>e.json()).then(e=>e).catch(t=>{console.error("The IIIF tilesource ".concat(e.replace(/\/$/,""),"/info.json failed to load: ").concat(t))}),r=e=>{let t,o;return Array.isArray(e)&&(t=e[0])&&(o="@id"in t?t["@id"]:t.id),o},a=e=>{let t,o;if(d(e))t=e,o={};else{let r=JSON.parse((0,i.o0)(e));switch(null==r?void 0:r.type){case"SpecificResource":case"Range":case"Annotation":o={manifest:t=null==r?void 0:r.target.partOf[0].id,canvas:null==r?void 0:r.target.id};break;case"Canvas":o={manifest:t=null==r?void 0:r.partOf[0].id,canvas:null==r?void 0:r.id};break;case"Manifest":var n;t=null==r?void 0:r.id,o={collection:null==r?void 0:null===(n=r.partOf[0])||void 0===n?void 0:n.id,manifest:null==r?void 0:r.id};break;case"Collection":o={collection:t=null==r?void 0:r.id}}}return{resourceId:t,active:o}},l=e=>{let{resourceId:t,active:o}=a(e);return o.collection||o.manifest||t},s=(e,t)=>{let o=t.items.map(e=>e.id),{active:i}=a(e),n=i.canvas;return o.includes(n)?n:o[0]},c=(e,t)=>{let{active:o}=a(e),i=o.manifest,n=t.items.filter(e=>"Manifest"===e.type).map(e=>e.id);return 0==n.length?null:n.includes(i)?i:n[0]},d=e=>{try{new URL(e)}catch(e){return!1}return!0}},6543:function(e,t,o){o.d(t,{zG:function(){return g},cW:function(){return v},z9:function(){return p},D1:function(){return m}});var i,n,r=o(9212),a=o.n(r);let l=window.OpenSeadragon;if(!l&&!(l=a()))throw Error("OpenSeadragon is missing.");let s="http://www.w3.org/2000/svg";l.Viewer&&(l.Viewer.prototype.svgOverlay=function(){return this._svgOverlayInfo||(this._svgOverlayInfo=new c(this)),this._svgOverlayInfo});let c=function(e){let t=this;this._viewer=e,this._containerWidth=0,this._containerHeight=0,this._svg=document.createElementNS(s,"svg"),this._svg.style.position="absolute",this._svg.style.left=0,this._svg.style.top=0,this._svg.style.width="100%",this._svg.style.height="100%",this._viewer.canvas.appendChild(this._svg),this._node=document.createElementNS(s,"g"),this._svg.appendChild(this._node),this._viewer.addHandler("animation",function(){t.resize()}),this._viewer.addHandler("open",function(){t.resize()}),this._viewer.addHandler("rotate",function(){t.resize()}),this._viewer.addHandler("flip",function(){t.resize()}),this._viewer.addHandler("resize",function(){t.resize()}),this.resize()};c.prototype={node:function(){return this._node},resize:function(){this._containerWidth!==this._viewer.container.clientWidth&&(this._containerWidth=this._viewer.container.clientWidth,this._svg.setAttribute("width",this._containerWidth)),this._containerHeight!==this._viewer.container.clientHeight&&(this._containerHeight=this._viewer.container.clientHeight,this._svg.setAttribute("height",this._containerHeight));let e=this._viewer.viewport.pixelFromPoint(new l.Point(0,0),!0),t=this._viewer.viewport.getZoom(!0),o=this._viewer.viewport.getRotation(),i=this._viewer.viewport.getFlip(),n=this._viewer.viewport._containerInnerSize.x,r=n*t,a=r;i&&(r=-r,e.x=-e.x+n),this._node.setAttribute("transform","translate("+e.x+","+e.y+") scale("+r+","+a+") rotate("+o+")")},onClick:function(e,t){new l.MouseTracker({element:e,clickHandler:t}).setTracking(!0)}};let d=e=>new c(e);var h=o(5500),u=o(2103);function g(e,t,o,i){if(!e)return;let n=1/t.width;i.forEach(t=>{if(!t.target)return;let{point:i,rect:r,svg:l}=(0,h.L)(t.target);if(r){let{x:t,y:i,w:l,h:s}=r;!function(e,t,o,i,n,r){let l=new(a()).Rect(t,o,i,n),s=document.createElement("div");if(r.annotationOverlays){let{backgroundColor:e,opacity:t,borderType:o,borderColor:i,borderWidth:n}=r.annotationOverlays;s.style.backgroundColor=e,s.style.opacity=t,s.style.border="".concat(o," ").concat(n," ").concat(i),s.className="annotation-overlay"}e.addOverlay(s,l)}(e,t*n,i*n,l*n,s*n,o)}if(i){let{x:t,y:r}=i;f(e,'\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="'.concat(t,'" cy="').concat(r,'" r="20" />\n        </svg>\n      '),o,n)}l&&f(e,l,o,n)})}function v(e,t,o){let i,n,r=40,l=40;t.rect&&(i=t.rect.x,n=t.rect.y,r=t.rect.w,l=t.rect.h),t.point&&(i=t.point.x,n=t.point.y),h.L.svg;let s=1/e.width;return new(a()).Rect(i*s-r*s/2*(o-1),n*s-l*s/2*(o-1),r*s*o,l*s*o)}function f(e,t,o,i){let n=function(e){if(!e)return null;let t=document.createElement("template");return t.innerHTML=e.trim(),t.content.children[0]}(t);if(n)for(let t of n.children)!function e(t,o,i,n){var r;if("#text"===o.nodeName)!o.textContent||o.textContent.includes("\n")||console.log("nodeName:",o.nodeName,", textContent:",o.textContent,", childNodes.length",o.childNodes.length);else{let a=function(e,t,o){var i,n,r,a;let l=!1,s=!1,c=!1,d=!1,h=document.createElementNS("http://www.w3.org/2000/svg",e.nodeName);if(e.attributes.length>0)for(let t=0;t<e.attributes.length;t++){let o=e.attributes[t];switch(o.name){case"fill":c=!0;break;case"stroke":l=!0;break;case"stroke-width":s=!0;break;case"fill-opacity":d=!0}h.setAttribute(o.name,o.textContent)}return l||(h.style.stroke=null===(i=t.annotationOverlays)||void 0===i?void 0:i.borderColor),s||(h.style.strokeWidth=null===(n=t.annotationOverlays)||void 0===n?void 0:n.borderWidth),c||(h.style.fill=null===(r=t.annotationOverlays)||void 0===r?void 0:r.backgroundColor),d||(h.style.fillOpacity=null===(a=t.annotationOverlays)||void 0===a?void 0:a.opacity),h.setAttribute("transform","scale(".concat(o,")")),h}(o,i,n),l=d(t);l.node().append(a),null===(r=l._svg)||void 0===r||r.setAttribute("class","annotation-overlay"),o.childNodes.forEach(o=>{e(t,o,i,n)})}}(e,t,o,i)}(i=n||(n={})).TiledImage="tiledImage",i.SimpleImage="simpleImage";let p=e=>{let t=Array.isArray(null==e?void 0:e.service)&&(null==e?void 0:e.service.length)>0;return{uri:t?(0,u.AG)(null==e?void 0:e.service):null==e?void 0:e.id,imageType:t?n.TiledImage:n.SimpleImage}},m=(e,t)=>({uri:e,imageType:t?n.TiledImage:n.SimpleImage})}}]);