"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{3850:function(e,t,r){function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{oT:function(){return Q},gN:function(){return J},__:function(){return K},fC:function(){return G},k4:function(){return W}});var l=r(5271),i=r.t(l,2);function a(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function u(...e){return(0,l.useCallback)(o(...e),e)}let d=(null==globalThis?void 0:globalThis.document)?l.useLayoutEffect:()=>{},s=i["useId".toString()]||(()=>void 0),c=0;function f(e){let[t,r]=l.useState(s());return d(()=>{e||r(e=>null!=e?e:String(c++))},[e]),e||(t?`radix-${t}`:"")}r(967);let m=(0,l.forwardRef)((e,t)=>{let{children:r,...i}=e,a=l.Children.toArray(r),o=a.find(p);if(o){let e=o.props.children,r=a.map(t=>t!==o?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(v,n({},i,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(v,n({},i,{ref:t}),r)});m.displayName="Slot";let v=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],i=t[n];/^on[A-Z]/.test(n)?l&&i?r[n]=(...e)=>{i(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...i}:"className"===n&&(r[n]=[l,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?o(t,r.ref):r.ref}):l.Children.count(r)>1?l.Children.only(null):null});v.displayName="SlotClone";let h=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function p(e){return(0,l.isValidElement)(e)&&e.type===h}let E=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,l.forwardRef)((e,r)=>{let{asChild:i,...a}=e,o=i?m:t;return(0,l.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,l.createElement)(o,n({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),g=(0,l.forwardRef)((e,t)=>(0,l.createElement)(E.label,n({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),[C,F]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,l.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,l.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let i=(0,l.createContext)(n),a=r.length;function o(t){let{scope:r,children:n,...o}=t,u=(null==r?void 0:r[e][a])||i,d=(0,l.useMemo)(()=>o,Object.values(o));return(0,l.createElement)(u.Provider,{value:d},n)}return r=[...r,n],o.displayName=t+"Provider",[o,function(r,o){let u=(null==o?void 0:o[e][a])||i,d=(0,l.useContext)(u);if(d)return d;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let l=r(e)[`__scope${n}`];return{...t,...l}},{});return(0,l.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}("Form"),y="Form",[b,_]=C(y),[w,M]=C(y),k=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,onClearServerErrors:i=()=>{},...o}=e,d=u(t,(0,l.useRef)(null)),[s,c]=(0,l.useState)({}),f=(0,l.useCallback)(e=>s[e],[s]),m=(0,l.useCallback)((e,t)=>c(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}}),[]),v=(0,l.useCallback)(e=>{c(t=>({...t,[e]:void 0})),_(t=>({...t,[e]:{}}))},[]),[h,p]=(0,l.useState)({}),g=(0,l.useCallback)(e=>{var t;return null!==(t=h[e])&&void 0!==t?t:[]},[h]),C=(0,l.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:[...null!==(n=r[e])&&void 0!==n?n:[],t]}})},[]),F=(0,l.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:(null!==(n=r[e])&&void 0!==n?n:[]).filter(e=>e.id!==t)}})},[]),[y,_]=(0,l.useState)({}),M=(0,l.useCallback)(e=>{var t;return null!==(t=y[e])&&void 0!==t?t:{}},[y]),k=(0,l.useCallback)((e,t)=>{_(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}})},[]),[I,R]=(0,l.useState)({}),S=(0,l.useCallback)((e,t)=>{R(r=>{let n=new Set(r[e]).add(t);return{...r,[e]:n}})},[]),V=(0,l.useCallback)((e,t)=>{R(r=>{let n=new Set(r[e]);return n.delete(t),{...r,[e]:n}})},[]),N=(0,l.useCallback)(e=>{var t;return Array.from(null!==(t=I[e])&&void 0!==t?t:[]).join(" ")||void 0},[I]);return(0,l.createElement)(b,{scope:r,getFieldValidity:f,onFieldValidityChange:m,getFieldCustomMatcherEntries:g,onFieldCustomMatcherEntryAdd:C,onFieldCustomMatcherEntryRemove:F,getFieldCustomErrors:M,onFieldCustomErrorsChange:k,onFieldValiditionClear:v},(0,l.createElement)(w,{scope:r,onFieldMessageIdAdd:S,onFieldMessageIdRemove:V,getFieldDescription:N},(0,l.createElement)(E.form,n({},o,{ref:d,onInvalid:a(e.onInvalid,e=>{let t=H(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:a(e.onSubmit,i,{checkForDefaultPrevented:!1}),onReset:a(e.onReset,i)}))))}),I="FormField",[R,S]=C(I),V=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,name:i,serverInvalid:a=!1,...o}=e,u=_(I,r).getFieldValidity(i),d=f();return(0,l.createElement)(R,{scope:r,id:d,name:i,serverInvalid:a},(0,l.createElement)(E.div,n({"data-valid":Z(u,a),"data-invalid":z(u,a)},o,{ref:t})))}),N="FormLabel",T=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...i}=e,a=_(N,r),o=S(N,r),u=i.htmlFor||o.id,d=a.getFieldValidity(o.name);return(0,l.createElement)(g,n({"data-valid":Z(d,o.serverInvalid),"data-invalid":z(d,o.serverInvalid)},i,{ref:t,htmlFor:u}))}),A="FormControl",D=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...i}=e,o=_(A,r),d=S(A,r),s=M(A,r),c=(0,l.useRef)(null),f=u(t,c),m=i.name||d.name,v=i.id||d.id,h=o.getFieldCustomMatcherEntries(m),{onFieldValidityChange:p,onFieldCustomErrorsChange:g,onFieldValiditionClear:C}=o,F=(0,l.useCallback)(async e=>{if(U(e.validity)){p(m,x(e.validity));return}let t=e.form?new FormData(e.form):new FormData,r=[e.value,t],n=[],l=[];h.forEach(e=>{"AsyncFunction"===e.match.constructor.name||(0,e.match)(...r) instanceof Promise?l.push(e):"Function"===e.match.constructor.name&&n.push(e)});let i=Object.fromEntries(n.map(({id:e,match:t})=>[e,t(...r)])),a=Object.values(i).some(Boolean);if(e.setCustomValidity(a?P:""),p(m,x(e.validity)),g(m,i),!a&&l.length>0){let t=l.map(({id:e,match:t})=>t(...r).then(t=>[e,t])),n=Object.fromEntries(await Promise.all(t)),i=Object.values(n).some(Boolean);e.setCustomValidity(i?P:""),p(m,x(e.validity)),g(m,n)}},[h,m,g,p]);(0,l.useEffect)(()=>{let e=c.current;if(e){let t=()=>F(e);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}},[F]);let y=(0,l.useCallback)(()=>{let e=c.current;e&&(e.setCustomValidity(""),C(m))},[m,C]);(0,l.useEffect)(()=>{var e;let t=null===(e=c.current)||void 0===e?void 0:e.form;if(t)return t.addEventListener("reset",y),()=>t.removeEventListener("reset",y)},[y]),(0,l.useEffect)(()=>{let e=c.current,t=null==e?void 0:e.closest("form");if(t&&d.serverInvalid){let r=H(t);r===e&&r.focus()}},[d.serverInvalid]);let b=o.getFieldValidity(m);return(0,l.createElement)(E.input,n({"data-valid":Z(b,d.serverInvalid),"data-invalid":z(b,d.serverInvalid),"aria-invalid":!!d.serverInvalid||void 0,"aria-describedby":s.getFieldDescription(m),title:""},i,{ref:f,id:v,name:m,onInvalid:a(e.onInvalid,e=>{F(e.currentTarget)}),onChange:a(e.onChange,e=>{y()})}))}),P="This value is not valid",j={badInput:P,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},O="FormMessage",L=((e,t)=>{let{match:r,forceMatch:i=!1,name:a,children:o,...u}=e,d=_(O,u.__scopeForm).getFieldValidity(a);return i||(null==d?void 0:d[r])?(0,l.createElement)(L,n({ref:t},u,{name:a}),null!=o?o:j[r]):null},(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,id:i,name:a,...o}=e,u=M(O,r),d=f(),s=null!=i?i:d,{onFieldMessageIdAdd:c,onFieldMessageIdRemove:m}=u;return(0,l.useEffect)(()=>(c(a,s),()=>m(a,s)),[a,s,c,m]),(0,l.createElement)(E.span,n({id:s},o,{ref:t}))})),$=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...i}=e;return(0,l.createElement)(E.button,n({type:"submit"},i,{ref:t}))});function x(e){let t={};for(let r in e)t[r]=e[r];return t}function q(e){return e instanceof HTMLElement}function B(e){return"validity"in e&&(!1===e.validity.valid||"true"===e.getAttribute("aria-invalid"))}function H(e){let[t]=Array.from(e.elements).filter(q).filter(B);return t}function U(e){let t=!1;for(let r in e)if("valid"!==r&&"customError"!==r&&e[r]){t=!0;break}return t}function Z(e,t){if((null==e?void 0:e.valid)===!0&&!t)return!0}function z(e,t){if((null==e?void 0:e.valid)===!1||t)return!0}let G=k,J=V,K=T,Q=D,W=$}}]);