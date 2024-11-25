"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{3836:function(e,t,r){let n=r(815).parse,o=r(3647).compile,a=r(4604).segment,l=r(4425);e.exports={parse:n,compile:o,segment:a,hls:l}},3647:function(e){function t(e,t){this.message=e,this.error=t}function r(e){let t=n(Math.floor(e/60/60),2),r=n(Math.floor(e/60)%60,2),o=n(Math.floor(e%60),2),a=n(Math.floor(1e3*(e%1).toFixed(4)),3);return`${t}:${r}:${o}.${a}`}function n(e,t){let r=`${e}`;for(;r.length<t;)r=`0${r}`;return r}t.prototype=Object.create(Error.prototype),e.exports={CompilerError:t,compile:function(e){if(!e)throw new t("Input must be non-null");if("object"!=typeof e)throw new t("Input must be an object");if(Array.isArray(e))throw new t("Input cannot be array");if(!e.valid)throw new t("Input must be valid");let n="WEBVTT\n";if(e.meta){if("object"!=typeof e.meta||Array.isArray(e.meta))throw new t("Metadata must be an object");Object.entries(e.meta).forEach(e=>{if("string"!=typeof e[1])throw new t(`Metadata value for "${e[0]}" must be string`);n+=`${e[0]}: ${e[1]}
`})}let o=null;return e.cues.forEach((e,a)=>{if(o&&o>e.start)throw new t(`Cue number ${a} is not in chronological order`);o=e.start,n+="\n"+function(e){if("object"!=typeof e)throw new t("Cue malformed: not of type object");if("string"!=typeof e.identifier&&"number"!=typeof e.identifier&&null!==e.identifier)throw new t(`Cue malformed: identifier value is not a string.
    ${JSON.stringify(e)}`);if(isNaN(e.start))throw new t(`Cue malformed: null start value.
    ${JSON.stringify(e)}`);if(isNaN(e.end))throw new t(`Cue malformed: null end value.
    ${JSON.stringify(e)}`);if(e.start>=e.end)throw new t(`Cue malformed: start timestamp greater than end
    ${JSON.stringify(e)}`);if("string"!=typeof e.text)throw new t(`Cue malformed: null text value.
    ${JSON.stringify(e)}`);if("string"!=typeof e.styles)throw new t(`Cue malformed: null styles value.
    ${JSON.stringify(e)}`);let n="";e.identifier.length>0&&(n+=`${e.identifier}
`);let o=r(e.start),a=r(e.end);return n+(`${o} --> ${a}`+(e.styles?` ${e.styles}`:""))+`
${e.text}`}(e)+"\n"}),n}}},4425:function(e,t,r){let n=r(4604).segment;function o(e,t){let r="0".repeat(Math.max(0,t-e.toString().length));return`${r}${e}`}function a(e){let t=(e%1).toFixed(3),r=Math.floor((e=Math.round(e-t))/3600),n=Math.floor((e-3600*r)/60),a=e-3600*r-60*n,l=`${o(r,2)}:`;return`${l}${o(n,2)}:${o(a,2)}.${o(1e3*t,3)}`}e.exports={hlsSegment:function(e,t,r){void 0===r&&(r="900000");let o=n(e,t),l=[];return o.forEach((e,t)=>{let n=`WEBVTT
X-TIMESTAMP-MAP=MPEGTS:${r},LOCAL:00:00:00.000

${function(e){let t=[];return e.forEach(e=>{t.push(function(e){let t=[];e.identifier&&t.push(e.identifier);let r=a(e.start),n=a(e.end),o=e.styles?`${e.styles}`:"";return t.push(`${r} --> ${n} ${o}`),t.push(e.text),t.join("\n")}(e))}),t.join("\n\n")}(e.cues)}
`,o=`${t}.vtt`;l.push({filename:o,content:n})}),l},hlsSegmentPlaylist:function(e,t){let r;let o=n(e,t),a=function(e){let t=[];return e.forEach((e,r)=>{t.push(`#EXTINF:${e.duration.toFixed(5)},
${r}.vtt`)}),t.join("\n")}(o),l=Math.round((r=0,o.forEach(e=>{e.duration>r&&(r=e.duration)}),r));return`#EXTM3U
#EXT-X-TARGETDURATION:${l}
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
${a}
#EXT-X-ENDLIST
`}}},815:function(e){function t(e,t){this.message=e,this.error=t}t.prototype=Object.create(Error.prototype);let r=/([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;function n(e){let t=e.match(r);return 3600*parseFloat(t[1]||0)+(60*parseFloat(t[2])+parseFloat(t[3]))}e.exports={ParserError:t,parse:function(e,o){o||(o={});let{meta:a=!1,strict:l=!0}=o;if("string"!=typeof e)throw new t("Input must be a string");let i=(e=(e=(e=e.trim()).replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).split("\n\n"),s=i.shift();if(!s.startsWith("WEBVTT"))throw new t('Must start with "WEBVTT"');let u=s.split("\n"),c=u[0].replace("WEBVTT","");if(c.length>0&&" "!==c[0]&&"	"!==c[0])throw new t("Header comment must start with space or tab");if(0===i.length&&1===u.length)return{valid:!0,strict:l,cues:[],errors:[]};if(!a&&u.length>1&&""!==u[1])throw new t("Missing blank line after signature");let{cues:d,errors:f}=function(e,o){let a=[];return{cues:e.map((e,l)=>{try{return function(e,o,a){var l,i;let s="",u=0,c=.01,d="",f="",p=e.split("\n").filter(Boolean);if(p.length>0&&p[0].trim().startsWith("NOTE"))return null;if(1===p.length&&!p[0].includes("-->"))throw new t(`Cue identifier cannot be standalone (cue #${o})`);if(p.length>1&&!(p[0].includes("-->")||p[1].includes("-->")))throw new t(`Cue identifier needs to be followed by timestamp (cue #${o})`);p.length>1&&p[1].includes("-->")&&(s=p.shift());let h="string"==typeof p[0]&&p[0].split(" --> ");if(2!==h.length||(l=h[0],!r.test(l))||(i=h[1],!r.test(i)))throw new t(`Invalid cue timestamp (cue #${o})`);if(u=n(h[0]),c=n(h[1]),a){if(u>c)throw new t(`Start timestamp greater than end (cue #${o})`);if(c<=u)throw new t(`End must be greater than start (cue #${o})`)}if(!a&&c<u)throw new t(`End must be greater or equal to start when not strict (cue #${o})`);return f=h[1].replace(r,"").trim(),p.shift(),!!(d=p.join("\n"))&&{identifier:s,start:u,end:c,text:d,styles:f}}(e,l,o)}catch(e){return a.push(e),null}}).filter(Boolean),errors:a}}(i,l);if(l&&f.length>0)throw f[0];let p=a?function(e){let t={};return e.slice(1).forEach(e=>{let r=e.indexOf(":"),n=e.slice(0,r).trim(),o=e.slice(r+1).trim();t[n]=o}),Object.keys(t).length>0?t:null}(u):null,h={valid:0===f.length,strict:l,cues:d,errors:f};return a&&(h.meta=p),h}}},4604:function(e,t,r){let n=r(815).parse;e.exports={segment:function(e,t){t=t||10;let r=n(e),o=[],a=[],l=null,i=0,s=0;return r.cues.forEach((e,n)=>{let u=0===n,c=n===r.cues.length-1,d=e.start,f=e.end,p=c?1/0:r.cues[n+1].start,h=u?f:f-d,m=u?0:d-r.cues[n-1].end;i=i+h+m,o.length,l&&(a.push(l),i+=l.end-s,l=null),a.push(e);let v=p-f<t&&m<t&&i>t;if(function(e,t,r,n){return(n<=t||n+(t-n%t)+e<r)&&r-e>=t}(s,t,p,m)){var w,g,y,b;let e;let r=(w=t,g=i,y=s,e=w,g>w&&(e=(b=g-w)+(w-b%w)),e=c?parseFloat((f-y).toFixed(2)):Math.round(e));o.push({duration:r,cues:a}),s+=r,i=0,a=[]}else v=!1;v&&(l=e)}),o}}},4399:function(e,t,r){r.d(t,{VY:function(){return R},fC:function(){return E},xz:function(){return M}});var n=r(5271),o=r(5061),a=r(9407),l=r(9945),i=r(8722),s=r(1224),u=r(8141),c=r(2432),d=r(5065),f=r(2676),p="Collapsible",[h,m]=(0,a.b)(p),[v,w]=h(p),g=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:a,disabled:i,onOpenChange:s,...c}=e,[p=!1,h]=(0,l.T)({prop:o,defaultProp:a,onChange:s});return(0,f.jsx)(v,{scope:r,disabled:i,contentId:(0,d.M)(),open:p,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),children:(0,f.jsx)(u.WV.div,{"data-state":j(p),"data-disabled":i?"":void 0,...c,ref:t})})});g.displayName=p;var y="CollapsibleTrigger",b=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,a=w(y,r);return(0,f.jsx)(u.WV.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":j(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...n,ref:t,onClick:(0,o.M)(e.onClick,a.onOpenToggle)})});b.displayName=y;var x="CollapsibleContent",C=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=w(x,e.__scopeCollapsible);return(0,f.jsx)(c.z,{present:r||o.open,children:({present:e})=>(0,f.jsx)(S,{...n,ref:t,present:e})})});C.displayName=x;var S=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:a,...l}=e,c=w(x,r),[d,p]=n.useState(o),h=n.useRef(null),m=(0,s.e)(t,h),v=n.useRef(0),g=v.current,y=n.useRef(0),b=y.current,C=c.open||d,S=n.useRef(C),E=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,i.b)(()=>{let e=h.current;if(e){E.current=E.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,y.current=t.width,S.current||(e.style.transitionDuration=E.current.transitionDuration,e.style.animationName=E.current.animationName),p(o)}},[c.open,o]),(0,f.jsx)(u.WV.div,{"data-state":j(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!C,...l,ref:m,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":b?`${b}px`:void 0,...e.style},children:C&&a})});function j(e){return e?"open":"closed"}var E=g,M=b,R=C},5216:function(e,t,r){r.d(t,{B:function(){return s}});var n=r(5271),o=r(8468),a=r(1224),l=r(1557),i=r(2676);function s(e){let t=e+"CollectionProvider",[r,s]=(0,o.b)(t),[u,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,i.jsx)(u,{scope:t,itemMap:a,collectionRef:o,children:r})};d.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=c(f,r),s=(0,a.e)(t,o.collectionRef);return(0,i.jsx)(l.g7,{ref:s,children:n})});p.displayName=f;let h=e+"CollectionItemSlot",m="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:o,...s}=e,u=n.useRef(null),d=(0,a.e)(t,u),f=c(h,r);return n.useEffect(()=>(f.itemMap.set(u,{ref:u,...s}),()=>void f.itemMap.delete(u))),(0,i.jsx)(l.g7,{[m]:"",ref:d,children:o})});return v.displayName=h,[{Provider:d,Slot:p,ItemSlot:v},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},9721:function(e,t,r){r.d(t,{gm:function(){return a}});var n=r(5271);r(2676);var o=n.createContext(void 0);function a(e){let t=n.useContext(o);return e||t||"ltr"}},2014:function(e,t,r){r.d(t,{ck:function(){return W},fC:function(){return $}});var n=r(5271),o=r(5061),a=r(1224),l=r(9407),i=r(8141),s=r(9186),u=r(9945),c=r(9721),d=r(7017),f=r(5477),p=r(2432),h=r(2676),m="Radio",[v,w]=(0,l.b)(m),[g,y]=v(m),b=n.forwardRef((e,t)=>{let{__scopeRadio:r,name:l,checked:s=!1,required:u,disabled:c,value:d="on",onCheck:f,form:p,...m}=e,[v,w]=n.useState(null),y=(0,a.e)(t,e=>w(e)),b=n.useRef(!1),x=!v||p||!!v.closest("form");return(0,h.jsxs)(g,{scope:r,checked:s,disabled:c,children:[(0,h.jsx)(i.WV.button,{type:"button",role:"radio","aria-checked":s,"data-state":j(s),"data-disabled":c?"":void 0,disabled:c,value:d,...m,ref:y,onClick:(0,o.M)(e.onClick,e=>{s||f?.(),x&&(b.current=e.isPropagationStopped(),b.current||e.stopPropagation())})}),x&&(0,h.jsx)(S,{control:v,bubbles:!b.current,name:l,value:d,checked:s,required:u,disabled:c,form:p,style:{transform:"translateX(-100%)"}})]})});b.displayName=m;var x="RadioIndicator",C=n.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:n,...o}=e,a=y(x,r);return(0,h.jsx)(p.z,{present:n||a.checked,children:(0,h.jsx)(i.WV.span,{"data-state":j(a.checked),"data-disabled":a.disabled?"":void 0,...o,ref:t})})});C.displayName=x;var S=e=>{let{control:t,checked:r,bubbles:o=!0,...a}=e,l=n.useRef(null),i=(0,f.D)(r),s=(0,d.t)(t);return n.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[i,r,o]),(0,h.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:l,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return e?"checked":"unchecked"}var E=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],M="RadioGroup",[R,T]=(0,l.b)(M,[s.Pc,w]),k=(0,s.Pc)(),I=w(),[N,D]=R(M),P=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:n,defaultValue:o,value:a,required:l=!1,disabled:d=!1,orientation:f,dir:p,loop:m=!0,onValueChange:v,...w}=e,g=k(r),y=(0,c.gm)(p),[b,x]=(0,u.T)({prop:a,defaultProp:o,onChange:v});return(0,h.jsx)(N,{scope:r,name:n,required:l,disabled:d,value:b,onValueChange:x,children:(0,h.jsx)(s.fC,{asChild:!0,...g,orientation:f,dir:y,loop:m,children:(0,h.jsx)(i.WV.div,{role:"radiogroup","aria-required":l,"aria-orientation":f,"data-disabled":d?"":void 0,dir:y,...w,ref:t})})})});P.displayName=M;var V="RadioGroupItem",A=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:l,...i}=e,u=D(V,r),c=u.disabled||l,d=k(r),f=I(r),p=n.useRef(null),m=(0,a.e)(t,p),v=u.value===i.value,w=n.useRef(!1);return n.useEffect(()=>{let e=e=>{E.includes(e.key)&&(w.current=!0)},t=()=>w.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,h.jsx)(s.ck,{asChild:!0,...d,focusable:!c,active:v,children:(0,h.jsx)(b,{disabled:c,required:u.required,checked:v,...f,...i,name:u.name,ref:m,onCheck:()=>u.onValueChange(i.value),onKeyDown:(0,o.M)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,o.M)(i.onFocus,()=>{w.current&&p.current?.click()})})})});A.displayName=V,n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...n}=e,o=I(r);return(0,h.jsx)(C,{...o,...n,ref:t})}).displayName="RadioGroupIndicator";var $=P,W=A},9186:function(e,t,r){r.d(t,{Pc:function(){return x},ck:function(){return N},fC:function(){return I}});var n=r(5271),o=r(5061),a=r(5216),l=r(1224),i=r(8468),s=r(5065),u=r(8141),c=r(116),d=r(9945),f=r(9721),p=r(2676),h="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[w,g,y]=(0,a.B)(v),[b,x]=(0,i.b)(v,[y]),[C,S]=b(v),j=n.forwardRef((e,t)=>(0,p.jsx)(w.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(w.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(E,{...e,ref:t})})}));j.displayName=v;var E=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:i=!1,dir:s,currentTabStopId:v,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:y,onEntryFocus:b,preventScrollOnEntryFocus:x=!1,...S}=e,j=n.useRef(null),E=(0,l.e)(t,j),M=(0,f.gm)(s),[R=null,T]=(0,d.T)({prop:v,defaultProp:w,onChange:y}),[I,N]=n.useState(!1),D=(0,c.W)(b),P=g(r),V=n.useRef(!1),[A,$]=n.useState(0);return n.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(h,D),()=>e.removeEventListener(h,D)},[D]),(0,p.jsx)(C,{scope:r,orientation:a,dir:M,loop:i,currentTabStopId:R,onItemFocus:n.useCallback(e=>T(e),[T]),onItemShiftTab:n.useCallback(()=>N(!0),[]),onFocusableItemAdd:n.useCallback(()=>$(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>$(e=>e-1),[]),children:(0,p.jsx)(u.WV.div,{tabIndex:I||0===A?-1:0,"data-orientation":a,...S,ref:E,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{V.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!V.current;if(e.target===e.currentTarget&&t&&!I){let t=new CustomEvent(h,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=P().filter(e=>e.focusable);k([e.find(e=>e.active),e.find(e=>e.id===R),...e].filter(Boolean).map(e=>e.ref.current),x)}}V.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>N(!1))})})}),M="RovingFocusGroupItem",R=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:l=!1,tabStopId:i,...c}=e,d=(0,s.M)(),f=i||d,h=S(M,r),m=h.currentTabStopId===f,v=g(r),{onFocusableItemAdd:y,onFocusableItemRemove:b}=h;return n.useEffect(()=>{if(a)return y(),()=>b()},[a,y,b]),(0,p.jsx)(w.ItemSlot,{scope:r,id:f,focusable:a,active:l,children:(0,p.jsx)(u.WV.span,{tabIndex:m?0:-1,"data-orientation":h.orientation,...c,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?h.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>h.onItemFocus(f)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){h.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,h.orientation,h.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=h.loop?(r=o,n=a+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(a+1)}setTimeout(()=>k(o))}})})})});R.displayName=M;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var I=j,N=R},8807:function(e,t,r){r.d(t,{VY:function(){return eI},ck:function(){return eD},__:function(){return eN},fC:function(){return eT},DI:function(){return ei},GV:function(){return X},o6:function(){return ew},S_:function(){return em},ue:function(){return U},Jk:function(){return ex},Pn:function(){return ey},ki:function(){return K},Q_:function(){return en},xz:function(){return ek}});var n=r(5271),o=r(967);function a(e,[t,r]){return Math.min(r,Math.max(t,e))}var l=r(5061),i=r(5216),s=r(1224),u=r(9407),c=r(9721),d=r(7196),f=r(1077),p=r(4154),h=r(5065),m=r(1085),v=r(3249),w=r(8141),g=r(1557),y=r(116),b=r(9945),x=r(8722),C=r(5477),S=r(2676),j=n.forwardRef((e,t)=>(0,S.jsx)(w.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));j.displayName="VisuallyHidden";var E=r(9800),M=r(6393),R=[" ","Enter","ArrowUp","ArrowDown"],T=[" ","Enter"],k="Select",[I,N,D]=(0,i.B)(k),[P,V]=(0,u.b)(k,[D,m.D7]),A=(0,m.D7)(),[$,W]=P(k),[L,F]=P(k),O=e=>{let{__scopeSelect:t,children:r,open:o,defaultOpen:a,onOpenChange:l,value:i,defaultValue:s,onValueChange:u,dir:d,name:f,autoComplete:p,disabled:v,required:w,form:g}=e,y=A(t),[x,C]=n.useState(null),[j,E]=n.useState(null),[M,R]=n.useState(!1),T=(0,c.gm)(d),[k=!1,N]=(0,b.T)({prop:o,defaultProp:a,onChange:l}),[D,P]=(0,b.T)({prop:i,defaultProp:s,onChange:u}),V=n.useRef(null),W=!x||g||!!x.closest("form"),[F,O]=n.useState(new Set),_=Array.from(F).map(e=>e.props.value).join(";");return(0,S.jsx)(m.fC,{...y,children:(0,S.jsxs)($,{required:w,scope:t,trigger:x,onTriggerChange:C,valueNode:j,onValueNodeChange:E,valueNodeHasChildren:M,onValueNodeHasChildrenChange:R,contentId:(0,h.M)(),value:D,onValueChange:P,open:k,onOpenChange:N,dir:T,triggerPointerDownPosRef:V,disabled:v,children:[(0,S.jsx)(I.Provider,{scope:t,children:(0,S.jsx)(L,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{O(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{O(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),W?(0,S.jsxs)(eE,{"aria-hidden":!0,required:w,tabIndex:-1,name:f,autoComplete:p,value:D,onChange:e=>P(e.target.value),disabled:v,form:g,children:[void 0===D?(0,S.jsx)("option",{value:""}):null,Array.from(F)]},_):null]})})};O.displayName=k;var _="SelectTrigger",B=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:o=!1,...a}=e,i=A(r),u=W(_,r),c=u.disabled||o,d=(0,s.e)(t,u.onTriggerChange),f=N(r),p=n.useRef("touch"),[h,v,g]=eM(e=>{let t=f().filter(e=>!e.disabled),r=t.find(e=>e.value===u.value),n=eR(t,e,r);void 0!==n&&u.onValueChange(n.value)}),y=e=>{c||(u.onOpenChange(!0),g()),e&&(u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,S.jsx)(m.ee,{asChild:!0,...i,children:(0,S.jsx)(w.WV.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":ej(u.value)?"":void 0,...a,ref:d,onClick:(0,l.M)(a.onClick,e=>{e.currentTarget.focus(),"mouse"!==p.current&&y(e)}),onPointerDown:(0,l.M)(a.onPointerDown,e=>{p.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(y(e),e.preventDefault())}),onKeyDown:(0,l.M)(a.onKeyDown,e=>{let t=""!==h.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||v(e.key),(!t||" "!==e.key)&&R.includes(e.key)&&(y(),e.preventDefault())})})})});B.displayName=_;var H="SelectValue",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:o,children:a,placeholder:l="",...i}=e,u=W(H,r),{onValueNodeHasChildrenChange:c}=u,d=void 0!==a,f=(0,s.e)(t,u.onValueNodeChange);return(0,x.b)(()=>{c(d)},[c,d]),(0,S.jsx)(w.WV.span,{...i,ref:f,style:{pointerEvents:"none"},children:ej(u.value)?(0,S.jsx)(S.Fragment,{children:l}):a})});K.displayName=H;var X=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...o}=e;return(0,S.jsx)(w.WV.span,{"aria-hidden":!0,...o,ref:t,children:n||"▼"})});X.displayName="SelectIcon";var U=e=>(0,S.jsx)(v.h,{asChild:!0,...e});U.displayName="SelectPortal";var z="SelectContent",G=n.forwardRef((e,t)=>{let r=W(z,e.__scopeSelect),[a,l]=n.useState();return((0,x.b)(()=>{l(new DocumentFragment)},[]),r.open)?(0,S.jsx)(J,{...e,ref:t}):a?o.createPortal((0,S.jsx)(q,{scope:e.__scopeSelect,children:(0,S.jsx)(I.Slot,{scope:e.__scopeSelect,children:(0,S.jsx)("div",{children:e.children})})}),a):null});G.displayName=z;var[q,Y]=P(z),J=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:o="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:u,side:c,sideOffset:h,align:m,alignOffset:v,arrowPadding:w,collisionBoundary:y,collisionPadding:b,sticky:x,hideWhenDetached:C,avoidCollisions:j,...R}=e,T=W(z,r),[k,I]=n.useState(null),[D,P]=n.useState(null),V=(0,s.e)(t,e=>I(e)),[A,$]=n.useState(null),[L,F]=n.useState(null),O=N(r),[_,B]=n.useState(!1),H=n.useRef(!1);n.useEffect(()=>{if(k)return(0,E.Ry)(k)},[k]),(0,f.EW)();let K=n.useCallback(e=>{let[t,...r]=O().map(e=>e.ref.current),[n]=r.slice(-1),o=document.activeElement;for(let r of e)if(r===o||(r?.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),r?.focus(),document.activeElement!==o))return},[O,D]),X=n.useCallback(()=>K([A,k]),[K,A,k]);n.useEffect(()=>{_&&X()},[_,X]);let{onOpenChange:U,triggerPointerDownPosRef:G}=T;n.useEffect(()=>{if(k){let e={x:0,y:0},t=t=>{e={x:Math.abs(Math.round(t.pageX)-(G.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(G.current?.y??0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():k.contains(r.target)||U(!1),document.removeEventListener("pointermove",t),G.current=null};return null!==G.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[k,U,G]),n.useEffect(()=>{let e=()=>U(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[U]);let[Y,J]=eM(e=>{let t=O().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eR(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!H.current&&!r;(void 0!==T.value&&T.value===t||n)&&($(e),n&&(H.current=!0))},[T.value]),et=n.useCallback(()=>k?.focus(),[k]),er=n.useCallback((e,t,r)=>{let n=!H.current&&!r;(void 0!==T.value&&T.value===t||n)&&F(e)},[T.value]),en="popper"===o?Z:Q,eo=en===Z?{side:c,sideOffset:h,align:m,alignOffset:v,arrowPadding:w,collisionBoundary:y,collisionPadding:b,sticky:x,hideWhenDetached:C,avoidCollisions:j}:{};return(0,S.jsx)(q,{scope:r,content:k,viewport:D,onViewportChange:P,itemRefCallback:ee,selectedItem:A,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:X,selectedItemText:L,position:o,isPositioned:_,searchRef:Y,children:(0,S.jsx)(M.Z,{as:g.g7,allowPinchZoom:!0,children:(0,S.jsx)(p.M,{asChild:!0,trapped:T.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,l.M)(a,e=>{T.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,S.jsx)(d.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>T.onOpenChange(!1),children:(0,S.jsx)(en,{role:"listbox",id:T.contentId,"data-state":T.open?"open":"closed",dir:T.dir,onContextMenu:e=>e.preventDefault(),...R,...eo,onPlaced:()=>B(!0),ref:V,style:{display:"flex",flexDirection:"column",outline:"none",...R.style},onKeyDown:(0,l.M)(R.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=O().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>K(t)),e.preventDefault()}})})})})})})});J.displayName="SelectContentImpl";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:o,...l}=e,i=W(z,r),u=Y(z,r),[c,d]=n.useState(null),[f,p]=n.useState(null),h=(0,s.e)(t,e=>p(e)),m=N(r),v=n.useRef(!1),g=n.useRef(!0),{viewport:y,selectedItem:b,selectedItemText:C,focusSelectedItem:j}=u,E=n.useCallback(()=>{if(i.trigger&&i.valueNode&&c&&f&&y&&b&&C){let e=i.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=C.getBoundingClientRect();if("rtl"!==i.dir){let o=n.left-t.left,l=r.left-o,i=e.left-l,s=e.width+i,u=Math.max(s,t.width),d=a(l,[10,Math.max(10,window.innerWidth-10-u)]);c.style.minWidth=s+"px",c.style.left=d+"px"}else{let o=t.right-n.right,l=window.innerWidth-r.right-o,i=window.innerWidth-e.right-l,s=e.width+i,u=Math.max(s,t.width),d=a(l,[10,Math.max(10,window.innerWidth-10-u)]);c.style.minWidth=s+"px",c.style.right=d+"px"}let l=m(),s=window.innerHeight-20,u=y.scrollHeight,d=window.getComputedStyle(f),p=parseInt(d.borderTopWidth,10),h=parseInt(d.paddingTop,10),w=parseInt(d.borderBottomWidth,10),g=p+h+u+parseInt(d.paddingBottom,10)+w,x=Math.min(5*b.offsetHeight,g),S=window.getComputedStyle(y),j=parseInt(S.paddingTop,10),E=parseInt(S.paddingBottom,10),M=e.top+e.height/2-10,R=b.offsetHeight/2,T=p+h+(b.offsetTop+R);if(T<=M){let e=l.length>0&&b===l[l.length-1].ref.current;c.style.bottom="0px";let t=f.clientHeight-y.offsetTop-y.offsetHeight;c.style.height=T+Math.max(s-M,R+(e?E:0)+t+w)+"px"}else{let e=l.length>0&&b===l[0].ref.current;c.style.top="0px";let t=Math.max(M,p+y.offsetTop+(e?j:0)+R);c.style.height=t+(g-T)+"px",y.scrollTop=T-M+y.offsetTop}c.style.margin="10px 0",c.style.minHeight=x+"px",c.style.maxHeight=s+"px",o?.(),requestAnimationFrame(()=>v.current=!0)}},[m,i.trigger,i.valueNode,c,f,y,b,C,i.dir,o]);(0,x.b)(()=>E(),[E]);let[M,R]=n.useState();(0,x.b)(()=>{f&&R(window.getComputedStyle(f).zIndex)},[f]);let T=n.useCallback(e=>{e&&!0===g.current&&(E(),j?.(),g.current=!1)},[E,j]);return(0,S.jsx)(ee,{scope:r,contentWrapper:c,shouldExpandOnScrollRef:v,onScrollButtonChange:T,children:(0,S.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:M},children:(0,S.jsx)(w.WV.div,{...l,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});Q.displayName="SelectItemAlignedPosition";var Z=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:o=10,...a}=e,l=A(r);return(0,S.jsx)(m.VY,{...l,...a,ref:t,align:n,collisionPadding:o,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Z.displayName="SelectPopperPosition";var[ee,et]=P(z,{}),er="SelectViewport",en=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:o,...a}=e,i=Y(er,r),u=et(er,r),c=(0,s.e)(t,i.onViewportChange),d=n.useRef(0);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),(0,S.jsx)(I.Slot,{scope:r,children:(0,S.jsx)(w.WV.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:(0,l.M)(a.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=u;if(n?.current&&r){let e=Math.abs(d.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,o=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(o<n){let a=o+e,l=Math.min(n,a),i=a-l;r.style.height=l+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}d.current=t.scrollTop})})})]})});en.displayName=er;var eo="SelectGroup",[ea,el]=P(eo),ei=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,o=(0,h.M)();return(0,S.jsx)(ea,{scope:r,id:o,children:(0,S.jsx)(w.WV.div,{role:"group","aria-labelledby":o,...n,ref:t})})});ei.displayName=eo;var es="SelectLabel",eu=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,o=el(es,r);return(0,S.jsx)(w.WV.div,{id:o.id,...n,ref:t})});eu.displayName=es;var ec="SelectItem",[ed,ef]=P(ec),ep=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:o,disabled:a=!1,textValue:i,...u}=e,c=W(ec,r),d=Y(ec,r),f=c.value===o,[p,m]=n.useState(i??""),[v,g]=n.useState(!1),y=(0,s.e)(t,e=>d.itemRefCallback?.(e,o,a)),b=(0,h.M)(),x=n.useRef("touch"),C=()=>{a||(c.onValueChange(o),c.onOpenChange(!1))};if(""===o)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,S.jsx)(ed,{scope:r,value:o,disabled:a,textId:b,isSelected:f,onItemTextChange:n.useCallback(e=>{m(t=>t||(e?.textContent??"").trim())},[]),children:(0,S.jsx)(I.ItemSlot,{scope:r,value:o,disabled:a,textValue:p,children:(0,S.jsx)(w.WV.div,{role:"option","aria-labelledby":b,"data-highlighted":v?"":void 0,"aria-selected":f&&v,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...u,ref:y,onFocus:(0,l.M)(u.onFocus,()=>g(!0)),onBlur:(0,l.M)(u.onBlur,()=>g(!1)),onClick:(0,l.M)(u.onClick,()=>{"mouse"!==x.current&&C()}),onPointerUp:(0,l.M)(u.onPointerUp,()=>{"mouse"===x.current&&C()}),onPointerDown:(0,l.M)(u.onPointerDown,e=>{x.current=e.pointerType}),onPointerMove:(0,l.M)(u.onPointerMove,e=>{x.current=e.pointerType,a?d.onItemLeave?.():"mouse"===x.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,l.M)(u.onPointerLeave,e=>{e.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:(0,l.M)(u.onKeyDown,e=>{d.searchRef?.current!==""&&" "===e.key||(T.includes(e.key)&&C()," "===e.key&&e.preventDefault())})})})})});ep.displayName=ec;var eh="SelectItemText",em=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:a,style:l,...i}=e,u=W(eh,r),c=Y(eh,r),d=ef(eh,r),f=F(eh,r),[p,h]=n.useState(null),m=(0,s.e)(t,e=>h(e),d.onItemTextChange,e=>c.itemTextRefCallback?.(e,d.value,d.disabled)),v=p?.textContent,g=n.useMemo(()=>(0,S.jsx)("option",{value:d.value,disabled:d.disabled,children:v},d.value),[d.disabled,d.value,v]),{onNativeOptionAdd:y,onNativeOptionRemove:b}=f;return(0,x.b)(()=>(y(g),()=>b(g)),[y,b,g]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(w.WV.span,{id:d.textId,...i,ref:m}),d.isSelected&&u.valueNode&&!u.valueNodeHasChildren?o.createPortal(i.children,u.valueNode):null]})});em.displayName=eh;var ev="SelectItemIndicator",ew=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ef(ev,r).isSelected?(0,S.jsx)(w.WV.span,{"aria-hidden":!0,...n,ref:t}):null});ew.displayName=ev;var eg="SelectScrollUpButton",ey=n.forwardRef((e,t)=>{let r=Y(eg,e.__scopeSelect),o=et(eg,e.__scopeSelect),[a,l]=n.useState(!1),i=(0,s.e)(t,o.onScrollButtonChange);return(0,x.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){l(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),a?(0,S.jsx)(eC,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ey.displayName=eg;var eb="SelectScrollDownButton",ex=n.forwardRef((e,t)=>{let r=Y(eb,e.__scopeSelect),o=et(eb,e.__scopeSelect),[a,l]=n.useState(!1),i=(0,s.e)(t,o.onScrollButtonChange);return(0,x.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;l(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),a?(0,S.jsx)(eC,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ex.displayName=eb;var eC=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:o,...a}=e,i=Y("SelectScrollButton",r),s=n.useRef(null),u=N(r),c=n.useCallback(()=>{null!==s.current&&(window.clearInterval(s.current),s.current=null)},[]);return n.useEffect(()=>()=>c(),[c]),(0,x.b)(()=>{let e=u().find(e=>e.ref.current===document.activeElement);e?.ref.current?.scrollIntoView({block:"nearest"})},[u]),(0,S.jsx)(w.WV.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,l.M)(a.onPointerDown,()=>{null===s.current&&(s.current=window.setInterval(o,50))}),onPointerMove:(0,l.M)(a.onPointerMove,()=>{i.onItemLeave?.(),null===s.current&&(s.current=window.setInterval(o,50))}),onPointerLeave:(0,l.M)(a.onPointerLeave,()=>{c()})})});n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,S.jsx)(w.WV.div,{"aria-hidden":!0,...n,ref:t})}).displayName="SelectSeparator";var eS="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,o=A(r),a=W(eS,r),l=Y(eS,r);return a.open&&"popper"===l.position?(0,S.jsx)(m.Eh,{...o,...n,ref:t}):null}).displayName=eS;var eE=n.forwardRef((e,t)=>{let{value:r,...o}=e,a=n.useRef(null),l=(0,s.e)(t,a),i=(0,C.D)(r);return n.useEffect(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,S.jsx)(j,{asChild:!0,children:(0,S.jsx)("select",{...o,ref:l,defaultValue:r})})});function eM(e){let t=(0,y.W)(e),r=n.useRef(""),o=n.useRef(0),a=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(o.current),""!==t&&(o.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),l=n.useCallback(()=>{r.current="",window.clearTimeout(o.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),[r,a,l]}function eR(e,t,r){var n;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===o.length&&(a=a.filter(e=>e!==r));let l=a.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return l!==r?l:void 0}eE.displayName="BubbleSelect";var eT=O,ek=B,eI=G,eN=eu,eD=ep},4662:function(e,t,r){r.d(t,{bU:function(){return S},fC:function(){return C}});var n=r(5271),o=r(5061),a=r(1224),l=r(9407),i=r(9945),s=r(5477),u=r(7017),c=r(8141),d=r(2676),f="Switch",[p,h]=(0,l.b)(f),[m,v]=p(f),w=n.forwardRef((e,t)=>{let{__scopeSwitch:r,name:l,checked:s,defaultChecked:u,required:f,disabled:p,value:h="on",onCheckedChange:v,form:w,...g}=e,[y,C]=n.useState(null),S=(0,a.e)(t,e=>C(e)),j=n.useRef(!1),E=!y||w||!!y.closest("form"),[M=!1,R]=(0,i.T)({prop:s,defaultProp:u,onChange:v});return(0,d.jsxs)(m,{scope:r,checked:M,disabled:p,children:[(0,d.jsx)(c.WV.button,{type:"button",role:"switch","aria-checked":M,"aria-required":f,"data-state":x(M),"data-disabled":p?"":void 0,disabled:p,value:h,...g,ref:S,onClick:(0,o.M)(e.onClick,e=>{R(e=>!e),E&&(j.current=e.isPropagationStopped(),j.current||e.stopPropagation())})}),E&&(0,d.jsx)(b,{control:y,bubbles:!j.current,name:l,value:h,checked:M,required:f,disabled:p,form:w,style:{transform:"translateX(-100%)"}})]})});w.displayName=f;var g="SwitchThumb",y=n.forwardRef((e,t)=>{let{__scopeSwitch:r,...n}=e,o=v(g,r);return(0,d.jsx)(c.WV.span,{"data-state":x(o.checked),"data-disabled":o.disabled?"":void 0,...n,ref:t})});y.displayName=g;var b=e=>{let{control:t,checked:r,bubbles:o=!0,...a}=e,l=n.useRef(null),i=(0,s.D)(r),c=(0,u.t)(t);return n.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[i,r,o]),(0,d.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function x(e){return e?"checked":"unchecked"}var C=w,S=y},3517:function(e,t,r){r.d(t,{VY:function(){return N},aV:function(){return k},fC:function(){return T},xz:function(){return I}});var n=r(5271),o=r(5061),a=r(9407),l=r(9186),i=r(2432),s=r(8141),u=r(9721),c=r(9945),d=r(5065),f=r(2676),p="Tabs",[h,m]=(0,a.b)(p,[l.Pc]),v=(0,l.Pc)(),[w,g]=h(p),y=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:a,orientation:l="horizontal",dir:i,activationMode:p="automatic",...h}=e,m=(0,u.gm)(i),[v,g]=(0,c.T)({prop:n,onChange:o,defaultProp:a});return(0,f.jsx)(w,{scope:r,baseId:(0,d.M)(),value:v,onValueChange:g,orientation:l,dir:m,activationMode:p,children:(0,f.jsx)(s.WV.div,{dir:m,"data-orientation":l,...h,ref:t})})});y.displayName=p;var b="TabsList",x=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,a=g(b,r),i=v(r);return(0,f.jsx)(l.fC,{asChild:!0,...i,orientation:a.orientation,dir:a.dir,loop:n,children:(0,f.jsx)(s.WV.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:t})})});x.displayName=b;var C="TabsTrigger",S=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:a=!1,...i}=e,u=g(C,r),c=v(r),d=M(u.baseId,n),p=R(u.baseId,n),h=n===u.value;return(0,f.jsx)(l.ck,{asChild:!0,...c,focusable:!a,active:h,children:(0,f.jsx)(s.WV.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":p,"data-state":h?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:d,...i,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():u.onValueChange(n)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&u.onValueChange(n)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==u.activationMode;h||a||!e||u.onValueChange(n)})})})});S.displayName=C;var j="TabsContent",E=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:a,children:l,...u}=e,c=g(j,r),d=M(c.baseId,o),p=R(c.baseId,o),h=o===c.value,m=n.useRef(h);return n.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,f.jsx)(i.z,{present:a||h,children:({present:r})=>(0,f.jsx)(s.WV.div,{"data-state":h?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!r,id:p,tabIndex:0,...u,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:r&&l})})});function M(e,t){return`${e}-trigger-${t}`}function R(e,t){return`${e}-content-${t}`}E.displayName=j;var T=y,k=x,I=S,N=E}}]);