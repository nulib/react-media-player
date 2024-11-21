(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{6344:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/scroll",function(){return i(7574)}])},7574:function(e,s,i){"use strict";i.r(s),i.d(s,{__toc:function(){return h}});var t=i(2676),n=i(5384),r=i(826),l=i(7104);i(1952);var o=i(7532),a=i(1418),c=i(1973),d=i(3860);let h=[{depth:2,value:"Features",id:"features"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Usage",id:"usage"},{depth:3,value:"React",id:"react"},{depth:3,value:"Next.js",id:"nextjs"},{depth:2,value:"API Reference",id:"api-reference"},{depth:3,value:"Offset",id:"offset"},{depth:3,value:"Figure",id:"figure"}];function x(e){let s=Object.assign({h1:"h1",p:"p",code:"code",hr:"hr",h2:"h2",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",span:"span",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Scroll"}),"\n",(0,t.jsxs)(s.p,{children:["A UI component rendering a vertical scrolling articles that output individual Canvases, basic descriptive properties, and Annotations with ",(0,t.jsx)(s.code,{children:"commenting"})," motivations with support for ",(0,t.jsx)(s.code,{children:"transcribing"})," and ",(0,t.jsx)(s.code,{children:"translating"})," motivations."]}),"\n",(0,t.jsx)(c.Z,{href:"https://iiif.io/api/presentation/3.0/#21-defined-types",text:["Manifest"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a.Z,{iiifContent:"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390",options:{offset:90}}),"\n",(0,t.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.p,{children:["Provide a ",(0,t.jsx)(s.a,{href:"https://iiif.io/api/presentation/3.0/",children:"IIIF Presentation API"})," Manifest and the component:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Renders the Canvases of a IIIF Manifest as HTML5 ",(0,t.jsx)(s.code,{children:"article"})," elements"]}),"\n",(0,t.jsxs)(s.li,{children:["Outputs ",(0,t.jsx)(s.code,{children:"Annotation"})," textual content along with ",(0,t.jsx)(s.code,{children:"OpenSeadragon"})," for images"]}),"\n",(0,t.jsxs)(s.li,{children:["Supports vertical scrolling and textual discovery with a fixed ",(0,t.jsx)(s.strong,{children:"Search..."})," input"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(d.mQ,{items:["npm","yarn","pnpm"],children:[(0,t.jsx)(d.OK,{children:(0,t.jsx)(s.pre,{"data-language":"shell","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"shell","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@samvera/clover-iiif"})]})})})}),(0,t.jsx)(d.OK,{children:(0,t.jsx)(s.pre,{"data-language":"shell","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"shell","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@samvera/clover-iiif"})]})})})}),(0,t.jsx)(d.OK,{children:(0,t.jsx)(s.pre,{"data-language":"shell","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"shell","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@samvera/clover-iiif"})]})})})})]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.h3,{id:"react",children:"React"}),"\n",(0,t.jsxs)(s.p,{children:["Add the ",(0,t.jsx)(s.code,{children:"Scroll"})," component to your ",(0,t.jsx)(s.code,{children:"jsx"})," or ",(0,t.jsx)(s.code,{children:"tsx"})," code."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"jsx","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Viewer "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@samvera/clover-iiif/scroll"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,t.jsxs)(s.p,{children:["Render ",(0,t.jsx)(s.code,{children:"Scroll"})," with a IIIF Manifest URI. The only required prop is the ",(0,t.jsx)(s.code,{children:"iiifContent"}),", which is the URI of the IIIF Manifest."]}),"\n",(0,t.jsxs)(d.mQ,{items:["Code","Preview"],children:[(0,t.jsx)(d.OK,{children:(0,t.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"jsx","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Scroll"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"iiifContent"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),(0,t.jsx)(d.OK,{children:(0,t.jsx)(a.Z,{iiifContent:"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390"})})]}),"\n",(0,t.jsx)(s.h3,{id:"nextjs",children:"Next.js"}),"\n",(0,t.jsxs)(s.p,{children:["Implementation with Next.js requires a ",(0,t.jsx)(s.a,{href:"https://nextjs.org/docs/advanced-features/dynamic-import",children:"dynamic import"})," utilizing ",(0,t.jsx)(s.code,{children:"next/dynamic"}),". This is due to Next's node compilation method creating issue with an ",(0,t.jsx)(s.code,{children:"OpenSeadragon"})," (a dependency of Clover IIIF) assumption of a browser ",(0,t.jsx)(s.code,{children:"document"})," object."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" dynamic "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next/dynamic"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Scroll"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"dynamic"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  () "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@samvera/clover-iiif"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((Clover) "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Clover"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".Scroll)"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ssr"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyCustomScroll"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"iiifContent"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Scroll"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"iiifContent"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{iiifContent} />;"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,t.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Scroll"})," can configured through an ",(0,t.jsx)(s.code,{children:"options"})," prop, which will serve as a object for common options."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Prop"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"iiifContent"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options.offset"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"number"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"0"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options.figure"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#figure",children:"See Figure"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"offset",children:"Offset"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"options.offset"})," refers to the number of pixels to offset the fixed ",(0,t.jsx)(s.strong,{children:"Search..."})," input when scrolling vertically. This is useful when the ",(0,t.jsx)(s.code,{children:"Scroll"})," is rendered within a page with a fixed header."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Scroll"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"iiifContent"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390"'})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"options"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{ offset"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"90"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }}"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})}),"\n",(0,t.jsx)(s.h3,{id:"figure",children:"Figure"}),"\n",(0,t.jsxs)(s.p,{children:["The Scroll component renders a ",(0,t.jsx)(s.code,{children:"figure"})," element for each Canvas. The ",(0,t.jsx)(s.code,{children:"options.figure"})," object allows for customization of the ",(0,t.jsx)(s.code,{children:"figure"})," width, aspect ratio, and display. This can be useful for customizing the Scroll component to fit within a specific layout alongside other image viewers."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Prop"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options.figure.aspectRatio"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"number"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"1.618"})," ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Golden_ratio",children:"Golden Ratio"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options.figure.display"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"thumbnail"}),", ",(0,t.jsx)(s.code,{children:"image-viewer"})]}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"image-viewer"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options.figure.width"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"string"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/width",children:"CSS"})]}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"38.2%"})})]})]})]}),"\n",(0,t.jsx)(s.pre,{"data-language":"jsx","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"jsx","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Scroll"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"iiifContent"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://digital.lib.utk.edu/assemble/manifest/civilwar/5390"'})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"options"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    figure"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      aspectRatio"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      display"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"thumbnail"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      width"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"200px"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }}"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)},pageOpts:{filePath:"pages/docs/scroll.mdx",route:"/docs/scroll",frontMatter:{title:"Scroll"},timestamp:1732209133e3,pageMap:[{kind:"Meta",data:{index:{type:"page",title:"Clover IIIF",display:"hidden",theme:{layout:"raw"}},docs:{title:"Documentation",type:"page"},contact:{title:"IIIF Presentation API ↗",type:"page",href:"https://iiif.io/api/presentation",newWindow:!0}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Overview",composing:"Composing","--components":{type:"separator",title:"IIIF Components"},image:"Image",scroll:{title:"Scroll",type:"doc"},slider:"Slider",viewer:"Viewer","--primitives":{type:"separator",title:"IIIF Primitives"},homepage:"Homepage",label:"Label",metadata:"Metadata",partOf:"PartOf",rendering:"Rendering",requiredStatement:"RequiredStatement",seeAlso:"SeeAlso",summary:"Summary",thumbnail:"Thumbnail","--contribute":{type:"separator",title:"Contribute"},i18n:"i18n"}},{kind:"MdxPage",name:"composing",route:"/docs/composing",frontMatter:{title:"Getting Started"}},{kind:"MdxPage",name:"homepage",route:"/docs/homepage",frontMatter:{title:"Homepage"}},{kind:"MdxPage",name:"i18n",route:"/docs/i18n",frontMatter:{title:"i18n"}},{kind:"MdxPage",name:"image",route:"/docs/image",frontMatter:{title:"Image"}},{kind:"MdxPage",name:"index",route:"/docs",frontMatter:{title:"Docs"}},{kind:"MdxPage",name:"label",route:"/docs/label",frontMatter:{title:"Label"}},{kind:"MdxPage",name:"metadata",route:"/docs/metadata",frontMatter:{title:"Metadata"}},{kind:"MdxPage",name:"partOf",route:"/docs/partOf",frontMatter:{title:"PartOf"}},{kind:"MdxPage",name:"rendering",route:"/docs/rendering",frontMatter:{title:"Rendering"}},{kind:"MdxPage",name:"requiredStatement",route:"/docs/requiredStatement",frontMatter:{title:"RequiredStatement"}},{kind:"Folder",name:"scroll",route:"/docs/scroll",children:[{kind:"Meta",data:{demo:{title:"Demo",theme:{sidebar:!1,layout:"full"}}}},{kind:"MdxPage",name:"demo",route:"/docs/scroll/demo"}]},{kind:"MdxPage",name:"scroll",route:"/docs/scroll",frontMatter:{title:"Scroll"}},{kind:"MdxPage",name:"seeAlso",route:"/docs/seeAlso",frontMatter:{title:"SeeAlso"}},{kind:"Folder",name:"slider",route:"/docs/slider",children:[{kind:"Meta",data:{demo:{title:"Demo",theme:{sidebar:!1,layout:"full"}}}},{kind:"MdxPage",name:"demo",route:"/docs/slider/demo"}]},{kind:"MdxPage",name:"slider",route:"/docs/slider",frontMatter:{title:"Slider"}},{kind:"MdxPage",name:"summary",route:"/docs/summary",frontMatter:{title:"Summary"}},{kind:"MdxPage",name:"thumbnail",route:"/docs/thumbnail",frontMatter:{title:"Thumbnail"}},{kind:"Folder",name:"viewer",route:"/docs/viewer",children:[{kind:"Meta",data:{demo:{theme:{layout:"full",sidebar:!1},title:"Demo"},contentsearch:{display:"hidden",title:"Content Search",theme:{sidebar:!1,layout:"full"}}}},{kind:"MdxPage",name:"contentsearch",route:"/docs/viewer/contentsearch"},{kind:"MdxPage",name:"demo",route:"/docs/viewer/demo"}]},{kind:"MdxPage",name:"viewer",route:"/docs/viewer",frontMatter:{title:"Viewer"}}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Scroll",headings:h},pageNextRoute:"/docs/scroll",nextraLayout:r.ZP,themeConfig:l.Z};s.default=(0,n.j)(p)},1418:function(e,s,i){"use strict";var t=i(2676),n=i(5271),r=i(6147),l=i.n(r),o=i(9205);let a=l()(()=>Promise.all([i.e(585),i.e(668),i.e(965),i.e(580),i.e(367),i.e(938),i.e(289),i.e(542),i.e(338),i.e(436)]).then(i.bind(i,2436)),{loadableGenerated:{webpack:()=>[2436]},ssr:!1});s.Z=e=>{let{iiifContent:s="http://localhost:3000/manifest/annotations/commenting.json",options:i}=e,[r,l]=(0,n.useState)(),{"iiif-content":c}=(0,o.useRouter)().query;return((0,n.useEffect)(()=>{r?l(c):l(s)},[c]),r)?(0,t.jsx)(a,{iiifContent:r,options:i}):null}},1973:function(e,s,i){"use strict";var t=i(2676),n=i(5318),r=i.n(n);i(5271);var l=i(8158);let o=()=>{let e="#ed1d33",s="#2873ab";return(0,t.jsxs)("svg",{viewBox:"0 0 493.35999 441.33334",id:"iiif-logo",version:"1.1",style:{height:"1rem"},children:[(0,t.jsx)("title",{children:"IIIF Logo"}),(0,t.jsx)("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,441.33333)",children:(0,t.jsxs)("g",{transform:"scale(0.1)",children:[(0,t.jsx)("path",{style:{fill:s},d:"M 65.2422,2178.75 775.242,1915 773.992,15 65.2422,276.25 v 1902.5"}),(0,t.jsx)("path",{style:{fill:s},d:"m 804.145,2640.09 c 81.441,-240.91 -26.473,-436.2 -241.04,-436.2 -214.558,0 -454.511,195.29 -535.9527,436.2 -81.4335,240.89 26.4805,436.18 241.0387,436.18 214.567,0 454.512,-195.29 535.954,-436.18"}),(0,t.jsx)("path",{style:{fill:e},d:"M 1678.58,2178.75 968.578,1915 969.828,15 1678.58,276.25 v 1902.5"}),(0,t.jsx)("path",{style:{fill:e},d:"m 935.082,2640.09 c -81.437,-240.91 26.477,-436.2 241.038,-436.2 214.56,0 454.51,195.29 535.96,436.2 81.43,240.89 -26.48,436.18 -241.04,436.18 -214.57,0 -454.52,-195.29 -535.958,-436.18"}),(0,t.jsx)("path",{style:{fill:s},d:"m 1860.24,2178.75 710,-263.75 -1.25,-1900 -708.75,261.25 v 1902.5"}),(0,t.jsx)("path",{style:{fill:s},d:"m 2603.74,2640.09 c 81.45,-240.91 -26.47,-436.2 -241.03,-436.2 -214.58,0 -454.52,195.29 -535.96,436.2 -81.44,240.89 26.48,436.18 241.03,436.18 214.57,0 454.51,-195.29 535.96,-436.18"}),(0,t.jsx)("path",{style:{fill:e},d:"m 3700.24,3310 v -652.5 c 0,0 -230,90 -257.5,-142.5 -2.5,-247.5 0,-336.25 0,-336.25 l 257.5,83.75 V 1690 l -258.61,-92.5 V 262.5 L 2735.24,0 v 2360 c 0,0 -15,850 965,950"})]})})]})},a=(0,l.zo)(r(),{display:"inline-flex",flexDirection:"column",textDecoration:"none",alignItems:"center",padding:"0.5rem 0"}),c=(0,l.zo)("span",{display:"inline-flex",alignItems:"center",justifyContent:"center"});s.Z=e=>{let{children:s,href:i,text:n=["Presentation API"]}=e;return(0,t.jsx)(a,{href:i,target:"_blank",className:"nx-flex-col",children:(0,t.jsxs)(c,{className:"nx-gap-2 nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-sm nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",children:[(0,t.jsx)(o,{})," ",n.join(" or ")," ↗"]})})}},8158:function(e,s,i){"use strict";i.d(s,{BC:function(){return n},F4:function(){return o},zo:function(){return r}});var t=i(1028);let n={xxs:"(max-width: 349px)",xs:"(max-width: 575px)",sm:"(max-width: 767px)",md:"(max-width: 991px)",lg:"(max-width: 90rem)",xl:"(min-width: calc(90rem + 1px))"},{styled:r,css:l,keyframes:o,createTheme:a}=(0,t.Th)({theme:{colors:{primary:"#1a1d1e",primaryMuted:"#26292b",primaryAlt:"#151718",accent:"hsl(".concat(209," 100% 38.2%)"),accentMuted:"hsl(".concat(209," 80% 61.8%)"),accentAlt:"hsl(".concat(209," 80% 30%)"),secondary:"#FFFFFF",secondaryMuted:"#e6e8eb",secondaryAlt:"#c1c8cd"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},lineHeights:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},transitions:{all:"all 300ms cubic-bezier(0.16, 1, 0.3, 1)"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},media:n})},7104:function(e,s,i){"use strict";i.d(s,{Z:function(){return j}});var t=i(2676),n=i(2936),r=i.n(n),l=i(5271);let o={position:"relative",top:"-1px",right:"0",backgroundColor:"hsl(var(--nextra-primary-hue), var(--nextra-primary-saturation), 32%)",color:"white",borderRadius:"6px",padding:"2px 4px",fontSize:"0.7222rem",fontWeight:"700",marginLeft:"10px"},a=["Scroll"];var c=e=>{let{title:s}=e;return a.includes(s)?(0,t.jsxs)("span",{children:[s,(0,t.jsx)("span",{style:o,children:"Beta"})]}):(0,t.jsx)("span",{children:s})},d=i(826),h=i(9205);let x="Clover IIIF",p="Showcase IIIF Manifests as interoperable web content.";var j={darkMode:!0,nextThemes:{defaultTheme:"system"},docsRepositoryBase:"https://github.com/samvera-labs/clover-iiif",footer:{text:"Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source."},useNextSeoProps(){let e=(0,d.ZR)(),s=e.frontMatter.title?"".concat(e.frontMatter.title," – ").concat(x):"".concat(x," – ").concat(p),i=e.frontMatter.description?e.frontMatter.description:p,{route:t}=(0,h.useRouter)(),n=(0,l.useMemo)(()=>new URL(t.endsWith("/")?t:"".concat(t,"/"),"https://samvera-labs.github.io/clover-iiif/").href,[t]);return{defaultTitle:"".concat(x," - ").concat(p),title:s,description:i,canonical:n,openGraph:{url:n,title:s,siteName:"".concat(x," - ").concat(p),images:[{url:"",type:"image/png",width:1200,height:675}]},twitter:{cardType:"summary_large_image"}}},logo:(0,t.jsx)(()=>(0,t.jsxs)("span",{className:"jsx-64174b446b45575f",children:[(0,t.jsxs)("svg",{id:"clover-iiif-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 45.11 8.15",fill:"none",className:"jsx-64174b446b45575f",children:[(0,t.jsx)("path",{fill:"currentColor",d:"m5.66,6.02c-.21.11-.43.21-.65.3s-.51.13-.83.13c-.63,0-1.13-.18-1.48-.55-.36-.37-.53-.9-.53-1.61,0-.46.07-.85.22-1.17.15-.32.36-.57.65-.74.28-.17.63-.26,1.04-.26.31,0,.59.05.83.14.24.1.46.21.66.35.14-.09.26-.21.36-.37.1-.16.16-.33.16-.53,0-.25-.09-.47-.28-.66s-.45-.34-.79-.46c-.34-.11-.76-.17-1.25-.17-.69,0-1.32.15-1.89.45-.57.3-1.03.74-1.36,1.31-.34.57-.5,1.27-.5,2.11,0,.89.17,1.62.52,2.18.35.57.82.99,1.4,1.26.59.27,1.24.41,1.96.41.38,0,.7-.03.96-.1.26-.06.47-.13.61-.19.23-.1.4-.23.49-.38.1-.15.14-.32.14-.5,0-.21-.04-.39-.11-.55-.08-.16-.18-.29-.32-.4Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m7.55,0c-.19,0-.37.01-.53.04s-.29.05-.38.07v6.96c0,.37.09.62.27.76.18.14.47.2.86.2.19,0,.37-.01.53-.04.16-.02.29-.05.38-.07V.96c0-.38-.09-.63-.26-.76-.18-.13-.46-.2-.86-.2Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m13.93,2.3c-.47-.26-1.02-.38-1.65-.38s-1.17.13-1.64.38c-.47.25-.84.61-1.1,1.07-.26.46-.4,1.01-.4,1.64s.13,1.2.39,1.67c.26.46.63.82,1.1,1.07.47.25,1.02.37,1.66.37s1.19-.13,1.66-.38c.47-.25.83-.61,1.09-1.07.26-.46.39-1.02.39-1.66s-.13-1.17-.4-1.63c-.26-.46-.63-.82-1.1-1.08Zm-.87,3.83c-.18.26-.44.39-.78.39s-.6-.13-.78-.38c-.18-.26-.28-.63-.28-1.13s.09-.85.28-1.11c.19-.26.45-.39.77-.39s.59.13.77.4.28.63.28,1.1-.09.86-.28,1.12Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m20.29,1.98c-.35,0-.67.08-.96.23-.14.69-.29,1.39-.46,2.12s-.33,1.38-.48,1.97h-.06c-.02-.11-.06-.25-.1-.42-.04-.17-.09-.36-.15-.57s-.12-.43-.18-.67l-.47-1.84c-.08-.32-.21-.54-.4-.65-.18-.12-.42-.17-.7-.17-.22,0-.43.04-.62.13s-.34.18-.45.29c.06.29.15.62.27,1.01.12.38.24.78.38,1.19.14.41.27.81.41,1.2.14.39.27.73.4,1.04.12.3.23.54.32.71.09.18.25.3.47.38.23.08.5.12.81.12.27,0,.52-.03.74-.09.22-.06.38-.13.49-.21.12-.22.26-.5.41-.85.15-.35.31-.73.46-1.15.16-.41.3-.82.43-1.21s.23-.75.31-1.06.12-.54.12-.7c0-.3-.1-.5-.29-.62s-.43-.18-.71-.18Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m25.91,2.25c-.42-.22-.92-.33-1.49-.33-.38,0-.74.06-1.1.17-.36.12-.68.29-.97.53-.29.24-.52.55-.69.94-.17.38-.26.84-.26,1.37,0,.71.15,1.3.44,1.78.29.47.69.83,1.19,1.06.5.24,1.06.35,1.69.35.45,0,.84-.04,1.19-.12.34-.08.61-.21.81-.38.2-.17.29-.39.29-.65,0-.16-.04-.31-.13-.46-.09-.14-.2-.26-.32-.34-.18.1-.43.2-.73.29-.3.09-.62.13-.96.13s-.67-.07-.95-.22c-.23-.11-.37-.32-.47-.58l2.96-.44c.27-.04.48-.13.64-.28.15-.14.23-.35.23-.62,0-.5-.12-.93-.36-1.31-.24-.38-.57-.68-1-.9Zm-2.59,2.21c.04-.31.13-.56.31-.74.21-.21.48-.31.8-.31s.53.08.67.24c.14.16.22.32.24.48l-2.02.33Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m30.59,1.93c-.4,0-.79.04-1.16.13-.38.09-.7.22-.98.38-.2.13-.36.28-.49.45-.12.17-.19.37-.19.61v3.56c0,.37.09.62.27.76.18.14.47.2.86.2.19,0,.37-.01.53-.04.16-.02.29-.05.38-.07V3.82c.17-.1.36-.17.59-.22.22-.05.44-.07.64-.07.14,0,.26,0,.37.01.11,0,.21.02.29.04.06-.09.1-.19.14-.32s.06-.26.06-.4c0-.62-.44-.92-1.31-.92Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m33.91.56c-.12,0-.24.01-.35.03-.11.02-.2.04-.25.05v6.76c0,.22.06.37.17.46.11.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47-.11-.09-.28-.13-.52-.13Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m36.24.56c-.12,0-.24.01-.35.03-.11.02-.2.04-.25.05v6.76c0,.22.06.37.17.46.11.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47-.11-.09-.28-.13-.52-.13Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m38.57.56c-.12,0-.24.01-.35.03s-.2.04-.25.05v6.76c0,.22.06.37.17.46s.29.14.53.14c.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47s-.28-.13-.52-.13Z",className:"jsx-64174b446b45575f"}),(0,t.jsx)("path",{fill:"currentColor",d:"m44.63,1.7c.15,0,.27-.05.35-.14.08-.1.13-.23.13-.41,0-.1-.02-.2-.05-.29-.03-.09-.06-.16-.1-.21h-3.98c-.21,0-.38.06-.5.19-.13.12-.19.29-.19.5v6.08c0,.21.06.36.17.45.12.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.05v-2.98h2.64c.15,0,.27-.05.35-.14.08-.1.12-.23.12-.41,0-.1-.01-.2-.04-.29-.03-.09-.06-.16-.09-.22h-2.98s-.01-.01-.01-.01V1.7h3.06Z",className:"jsx-64174b446b45575f"})]}),(0,t.jsx)(r(),{id:"64174b446b45575f",children:"svg.jsx-64174b446b45575f{height:1rem}span.jsx-64174b446b45575f{padding:.5rem .5rem .5rem 0;-webkit-mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-moz-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-o-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:linear-gradient(60deg,black 25%,rgba(0,0,0,.2)50%,black 75%);-webkit-mask-size:400%;mask-size:400%;-webkit-mask-position:0%;mask-position:0%}span.jsx-64174b446b45575f:hover{-webkit-mask-position:100%;mask-position:100%;-webkit-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-moz-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-o-transition:mask-position 1s ease,-webkit-mask-position 1s ease;transition:mask-position 1s ease,-webkit-mask-position 1s ease}"})]}),{}),project:{link:"https://github.com/samvera-labs/clover-iiif"},primaryHue:209,sidebar:{autoCollapse:!0,defaultMenuCollapseLevel:1,titleComponent:e=>(0,t.jsx)(c,{...e}),toggleButton:!0}}},5184:function(){}},function(e){e.O(0,[546,514,888,774,179],function(){return e(e.s=6344)}),_N_E=e.O()}]);