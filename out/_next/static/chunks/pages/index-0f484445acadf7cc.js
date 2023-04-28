(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(16439)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,i=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?i.loader=function(){return e}:"function"===typeof e?i.loader=e:"object"===typeof e&&(i=o({},i,e));if((i=o({},i,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");i.suspense&&(delete i.ssr,delete i.loading);i.loadableGenerated&&delete(i=o({},i,i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,u(n,i);delete i.ssr}return n(i)},t.noSSR=u;var o=n(6495).Z,i=n(92648).Z,a=(i(n(67294)),i(n(14302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,a=(0,n(92648).Z)(n(67294)),u=n(16319),s=n(61688).useSyncExternalStore,l=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function m(e){return function(e,t){var n=function(){if(!l){var t=new p(e,o);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var l=null;if(!d){var f=o.webpack?o.webpack():o.modules;f&&c.push((function(e){var t=!0,r=!1,o=void 0;try{for(var i,a=f[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,o=s}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var m=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,i({},e,{ref:t}))}:function(e,t){r();var n=s(l.subscribe,l.getCurrentValue,l.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:l.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:l.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return m.preload=function(){return n()},m.displayName="LoadableComponent",a.default.forwardRef(m)}(f,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){h(l).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};h(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var g=m;t.default=g},16439:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ee},default:function(){return te}});var r=n(85893),o=n(9008),i=n.n(o),a=n(5152),u=n.n(a),s=n(30733),l=n(36822);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var d=n(90948),f=n(71657);const p={xs:0,sm:600,md:900,lg:1200,xl:1536},m={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${p[e]}px)`};function h(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const e=r.breakpoints||m;return t.reduce(((r,o,i)=>(r[e.up(e.keys[i])]=n(t[i]),r)),{})}if("object"===typeof t){const e=r.breakpoints||m;return Object.keys(t).reduce(((r,o)=>{if(-1!==Object.keys(e.values||p).indexOf(o)){r[e.up(o)]=n(t[o],o)}else{const e=o;r[e]=t[e]}return r}),{})}return n(t)}function g({values:e,breakpoints:t,base:n}){const r=n||function(e,t){if("object"!==typeof e)return{};const n={},r=Object.keys(t);return Array.isArray(e)?r.forEach(((t,r)=>{r<e.length&&(n[t]=!0)})):r.forEach((t=>{null!=e[t]&&(n[t]=!0)})),n}(e,t),o=Object.keys(r);if(0===o.length)return e;let i;return o.reduce(((t,n,r)=>(Array.isArray(e)?(t[n]=null!=e[r]?e[r]:e[i],i=r):(t[n]=null!=e[n]?e[n]:e[i]||e,i=n),t)),{})}function y(e,t){return t&&"string"===typeof t?t.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e):null}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function v(e){return null!==e&&"object"===typeof e&&e.constructor===Object}function x(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return v(e)&&v(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(v(t[o])&&o in e&&v(e[o])?r[o]=x(e[o],t[o],n):r[o]=t[o])})),r}var _=function(e,t){return t?x(e,t,{clone:!1}):e};const w={m:"margin",p:"padding"},j={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},k={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},O=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!k[e])return[e];e=k[e]}const[t,n]=e.split(""),r=w[t],o=j[n]||"";return Array.isArray(o)?o.map((e=>r+e)):[r+o]})),S=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],E=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],M=[...S,...E];function C(e){return function(e,t,n,r){const o=y(e,t)||n;return"number"===typeof o?e=>"string"===typeof e?e:o*e:Array.isArray(o)?e=>"string"===typeof e?e:o[e]:"function"===typeof o?o:()=>{}}(e,"spacing",8)}function N(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function R(e,t,n,r){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=N(t,n),e)),{})}(O(n),r);return h(e,e[n],o)}function T(e,t){const n=C(e.theme);return Object.keys(e).map((r=>R(e,t,r,n))).reduce(_,{})}function P(e){return T(e,S)}function A(e){return T(e,E)}function z(e){return T(e,M)}P.propTypes={},P.filterProps=S,A.propTypes={},A.filterProps=E,z.propTypes={},z.filterProps=M;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function Z(e){return null!==e&&"object"===typeof e&&e.constructor===Object}function L(e,t,n={clone:!0}){const r=n.clone?D({},e):e;return Z(e)&&Z(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(Z(t[o])&&o in e&&Z(e[o])?r[o]=L(e[o],t[o],n):r[o]=t[o])})),r}var $=n(67294);function B(e,t){"function"===typeof e?e(t):e&&(e.current=t)}var I=n(86010);const H=e=>e;var V=(()=>{let e=H;return{configure(t){e=t},generate:t=>e(t),reset(){e=H}}})();const X={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function F(e,t){return X[t]||`${V.generate(e)}-${t}`}function G(e){return F("MuiMasonry",e)}!function(e,t){const n={};t.forEach((t=>{n[t]=F(e,t)}))}("MuiMasonry",["root"]);const Y=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],W=e=>Number(e.replace("px","")),q=e=>{const{classes:t}=e;return function(e,t,n){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e)),[]).join(" ")})),r}({root:["root"]},G,t)},J=(0,d.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const r={};if(e.isSSR){const o={},i=Number(t.spacing(e.defaultSpacing).replace("px",""));for(let t=1;t<=e.defaultColumns;t+=1)o[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return r.height=e.defaultHeight,r.margin=-i/2,r["& > *"]=c({},n["& > *"],o,{margin:i/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${i}px)`}),c({},n,r)}const o=g({values:e.spacing,breakpoints:t.breakpoints.values}),i=C(t);n=L(n,h({theme:t},o,(t=>{const n=Number(t),r=Number(N(i,n).replace("px",""));return c({margin:-r/2,"& > *":{margin:r/2}},e.maxColumnHeight&&{height:Math.ceil(e.maxColumnHeight+r)})})));const a=g({values:e.columns,breakpoints:t.breakpoints.values});return n=L(n,h({theme:t},a,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"object"!==typeof o?N(i,Number(o)):"0px"})`}})))),"object"===typeof o&&(n=L(n,h({theme:t},o,((e,t)=>{if(t){const n=Number(e),r=Object.keys(a).pop(),o=N(i,n);return{"& > *":{width:`calc(${`${(100/("object"===typeof a?a[t]||a[r]:a)).toFixed(2)}%`} - ${o})`}}}return null})))),n})),K=$.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiMasonry"}),{children:o,className:i,component:a="div",columns:u=4,spacing:s=1,defaultColumns:l,defaultHeight:d,defaultSpacing:p}=n,m=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,Y),h=$.useRef(),[g,y]=$.useState(),b=!g&&d&&void 0!==l&&void 0!==p,[v,x]=$.useState(b?l-1:0),_=c({},n,{spacing:s,columns:u,maxColumnHeight:g,defaultColumns:l,defaultHeight:d,defaultSpacing:p,isSSR:b}),w=q(_),j=$.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((e=>{if(!e)return;let t,n,r,o;var i,a,u,s,l,c;e[0].target.className.includes(w.root)?(t=e[0].target,r=e[0].contentRect.width,n=(null==(i=e[1])?void 0:i.target)||t.firstChild,o=(null==(a=n)||null==(u=a.contentRect)?void 0:u.width)||(null==(s=n)?void 0:s.clientWidth)||0):(n=e[0].target,o=e[0].contentRect.width,t=(null==(l=e[1])?void 0:l.target)||n.parentElement,r=(null==(c=t.contentRect)?void 0:c.width)||t.clientWidth);if(0===r||0===o||!t||!n)return;const d=window.getComputedStyle(n),f=W(d.marginLeft),p=W(d.marginRight),m=Math.round(r/(o+f+p)),h=new Array(m).fill(0);let g=!1;if(t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||g)return;const t=window.getComputedStyle(e),n=W(t.marginTop),r=W(t.marginBottom),o=W(t.height)?Math.ceil(W(t.height))+n+r:0;if(0!==o){for(let t=0;t<e.childNodes.length;t+=1){const n=e.childNodes[t];if("IMG"===n.tagName&&0===n.clientHeight){g=!0;break}}if(!g){const t=h.indexOf(Math.min(...h));h[t]+=o;const n=t+1;e.style.order=n}}else g=!0})),!g){y(Math.max(...h));x(m>0?m-1:0)}})));$.useEffect((()=>{const e=j.current;if(void 0===e)return;const t=h.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),()=>e?e.disconnect():{}}),[u,s,o]);const k=(O=t,S=h,$.useMemo((()=>null==O&&null==S?null:e=>{B(O,e),B(S,e)}),[O,S]));var O,S;const E={flexBasis:"100%",width:0,margin:0,padding:0},M=new Array(v).fill("").map(((e,t)=>(0,r.jsx)("span",{"data-class":"line-break",style:c({},E,{order:t+1})},t)));return(0,r.jsxs)(J,c({as:a,className:(0,I.Z)(w.root,i),ref:k,ownerState:_},m,{children:[o,M]}))}));var Q=K,U=u()(Promise.all([n.e(70),n.e(478)]).then(n.bind(n,5478)),{loadableGenerated:{webpack:function(){return[5478]}}}),ee=!0,te=function(e){return(0,r.jsxs)(l.Z,{width:"100%",children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"dev.lwlx.xyz | Cybersecurity & Developer blog"}),(0,r.jsx)("meta",{name:"description",content:"dev.lwlx.xyz publishes articles and research about Cybersecurity, DevOps, Development or just general IT nonsense. "}),(0,r.jsx)("meta",{property:"og:image",content:"https://dev.lwlx.xyz/lwlzcolors-lawlez-sm.jpg"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(l.Z,{width:"100%",padding:"100px 3vw",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)("h2",{style:{margin:"4px 0px",fontSize:"32pt"},children:"newest posts"}),(0,r.jsx)(l.Z,{sx:{width:"100%",left:24,position:"relative",marginTop:8},children:(0,r.jsx)(Q,{columns:{xs:1,sm:2,md:3,xl:4},spacing:6,children:e.posts.map((function(e,t){return e&&e.tags?t<=10?(0,r.jsx)(U,{post:e},t):void 0:"the post ".concat(e.title," has no tags defined")}))})})]}),(0,r.jsxs)(l.Z,{width:"100%",padding:"100px 3vw",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)("h2",{style:{margin:"4px 0px",fontSize:"32pt"},children:"All Posts"}),(0,r.jsx)(l.Z,{sx:{width:"100%",left:24,position:"relative",marginTop:8},children:(0,r.jsx)(Q,{columns:{xs:1,sm:2,md:3,xl:4},spacing:6,children:e.posts.map((function(e,t){return(0,r.jsx)(U,{post:e},t)}))})})]}),(0,r.jsxs)(l.Z,{width:"100%",padding:"32px 3vw",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)("h2",{style:{textAlign:"center",fontSize:"34pt"},children:"Open Source Security & Dev Blog"}),(0,r.jsx)("p",{style:{textAlign:"center",maxWidth:"960px",margin:"auto",lineHeight:1.7},children:"dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional code project."}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://twitter.com/0x0000005",style:{cursor:"pointer"},children:(0,r.jsx)("button",{style:{boxShadow:"9px 9px 12px rgb(4,4,4,0.6), -9px -9px 12px  rgba(68,68,68, 0.5)",padding:"10px 30px",backgroundColor:"#141414",color:s.l.secondaryColor,fontSize:"14pt",border:"none",borderRadius:"8px",cursor:"pointer",background:"linear-gradient(135deg, rgb(12,12,12,0.6), rgba(28,28,28, 0.5))"},children:"@0x0000005 on twitter"})})]})]})}},5152:function(e,t,n){e.exports=n(90638)},53250:function(e,t,n){"use strict";var r=n(67294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return u((function(){o.value=n,o.getSnapshot=t,l(o)&&c({inst:o})}),[e,n,t]),a((function(){return l(o)&&c({inst:o}),e((function(){l(o)&&c({inst:o})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},61688:function(e,t,n){"use strict";e.exports=n(53250)}},function(e){e.O(0,[774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);