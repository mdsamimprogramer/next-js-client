(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,r)=>{t.exports=e.r(76562)},35061,e=>{"use strict";let t,r;var o,i=e.i(43476),a=e.i(932),s=e.i(71645),n=e.i(18566),l=e.i(17255);let c={data:""},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=(e,t)=>{let r="",o="",i="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":o+="f"==a[1]?m(s,a):a+"{"+m(s,"k"==a[1]?"":t)+"}":"object"==typeof s?o+=m(s,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(a,s):a+":"+s+";")}return r+(t&&i?t+"{"+i+"}":i)+o},f={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e};function h(e){let t,r,o=this||{},i=e.call?e(o.p):e;return((e,t,r,o,i)=>{var a;let s=g(e),n=f[s]||(f[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!f[n]){let t=s!==e?e:(e=>{let t,r,o=[{}];for(;t=d.exec(e.replace(u,""));)t[4]?o.shift():t[3]?(r=t[3].replace(p," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(p," ").trim();return o[0]})(e);f[n]=m(i?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&f.g?f.g:null;return r&&(f.g=f[n]),a=f[n],l?t.data=t.data.replace(l,a):-1===t.data.indexOf(a)&&(t.data=o?a+t.data:t.data+a),n})(i.unshift?i.raw?(t=[].slice.call(arguments,1),r=o.p,i.reduce((e,o,i)=>{let a=t[i];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+o+(null==a?"":a)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(o.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||c})(o.target),o.g,o.o,o.k)}h.bind({g:1});let y,b,x,v=h.bind({k:1});function w(e,t){let r=this||{};return function(){let o=arguments;function i(a,s){let n=Object.assign({},a),l=n.className||i.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=h.apply(r,o)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),x&&c[0]&&x(n),y(c,n)}return t?t(i):i}}var j=(e,t)=>"function"==typeof e?e(t):e,D=(t=0,()=>(++t).toString()),N=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},E="default",C=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:o}=t;return C(e,{type:+!!e.toasts.find(e=>e.id===o.id),toast:o});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},k=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},$=(e,t=E)=>{O[t]=C(O[t]||S,e),k.forEach(([e,r])=>{e===t&&r(O[t])})},_=e=>Object.keys(O).forEach(t=>$(e,t)),P=(e=E)=>t=>{$(t,e)},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=e=>(t,r)=>{let o,i=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||D()}))(t,e,r);return P(i.toasterId||(o=i.id,Object.keys(O).find(e=>O[e].toasts.some(e=>e.id===o))))({type:2,toast:i}),i.id},T=(e,t)=>I("blank")(e,t);T.error=I("error"),T.success=I("success"),T.loading=I("loading"),T.custom=I("custom"),T.dismiss=(e,t)=>{let r={type:3,toastId:e};t?P(t)(r):_(r)},T.dismissAll=e=>T.dismiss(void 0,e),T.remove=(e,t)=>{let r={type:4,toastId:e};t?P(t)(r):_(r)},T.removeAll=e=>T.remove(void 0,e),T.promise=(e,t,r)=>{let o=T.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?j(t.success,e):void 0;return i?T.success(i,{id:o,...r,...null==r?void 0:r.success}):T.dismiss(o),e}).catch(e=>{let i=t.error?j(t.error,e):void 0;i?T.error(i,{id:o,...r,...null==r?void 0:r.error}):T.dismiss(o)}),e};var z=1e3,L=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,M=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,q=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=w("div")`
  position: absolute;
`,Y=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?s.createElement(G,null,t):t:"blank"===r?null:s.createElement(Y,null,s.createElement(U,{...o}),"loading"!==r&&s.createElement(J,null,"error"===r?s.createElement(M,{...o}):s.createElement(K,{...o})))},V=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=s.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[o,i]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${v(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},a=s.createElement(Q,{toast:e}),n=s.createElement(W,{...e.ariaProps},j(e.message,e));return s.createElement(V,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:a,message:n}):s.createElement(s.Fragment,null,a,n))});o=s.createElement,m.p=void 0,y=o,b=void 0,x=void 0;var ee=({id:e,className:t,style:r,onHeightUpdate:o,children:i})=>{let a=s.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return s.createElement("div",{ref:a,className:t,style:r},i)},et=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,toasterId:a,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=((e,t="default")=>{let{toasts:r,pausedAt:o}=((e={},t=E)=>{let[r,o]=(0,s.useState)(O[t]||S),i=(0,s.useRef)(O[t]);(0,s.useEffect)(()=>(i.current!==O[t]&&o(O[t]),k.push([t,o]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let a=r.toasts.map(t=>{var r,o,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...r,toasts:a}})(e,t),i=(0,s.useRef)(new Map).current,a=(0,s.useCallback)((e,t=z)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),n({type:4,toastId:e})},t);i.set(e,r)},[]);(0,s.useEffect)(()=>{if(o)return;let e=Date.now(),i=r.map(r=>{if(r.duration===1/0)return;let o=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(o<0){r.visible&&T.dismiss(r.id);return}return setTimeout(()=>T.dismiss(r.id,t),o)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[r,o,t]);let n=(0,s.useCallback)(P(t),[t]),l=(0,s.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,s.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,s.useCallback)(()=>{o&&n({type:6,time:Date.now()})},[o,n]),u=(0,s.useCallback)((e,t)=>{let{reverseOrder:o=!1,gutter:i=8,defaultPosition:a}=t||{},s=r.filter(t=>(t.position||a)===(e.position||a)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)a(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,a]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}})(r,a);return s.createElement("div",{"data-rht-toaster":a||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let a,n,l=r.position||t,c=d.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}),u=(a=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...n});return s.createElement(ee,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?et:"",style:u},"custom"===r.type?j(r.message,r):i?i(r):s.createElement(X,{toast:r,position:l}))}))};function eo(){let e,t,r,o,c,d,u,p,m,f,g,h,y,b,x,v,w,j=(0,a.c)(46),{status:D}=(0,l.useSession)(),N=(0,n.useRouter)();j[0]===Symbol.for("react.memo_cache_sentinel")?(e={title:"",shortDescription:"",fullDescription:"",price:"",date:new Date().toISOString().slice(0,10),priority:"",image:""},j[0]=e):e=j[0];let[E,C]=(0,s.useState)(e);j[1]!==N||j[2]!==D?(t=()=>{"unauthenticated"===D&&N.push("/auth/login")},r=[D,N],j[1]=N,j[2]=D,j[3]=t,j[4]=r):(t=j[3],r=j[4]),(0,s.useEffect)(t,r),j[5]!==E?(o=e=>{let{name:t,value:r}=e.target;C({...E,[t]:r})},j[5]=E,j[6]=o):o=j[6];let k=o;j[7]!==E||j[8]!==N?(c=async e=>{if(e.preventDefault(),!E.title||!E.price)return void T.error("Title and Price are required!");try{(await fetch("http://localhost:5000/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)})).ok?(T.success("Product added successfully!"),C({title:"",shortDescription:"",fullDescription:"",price:"",date:new Date().toISOString().slice(0,10),priority:"",image:""}),N.push("/items")):T.error("Failed to add product")}catch(e){console.error(e),T.error("Something went wrong!")}},j[7]=E,j[8]=N,j[9]=c):c=j[9];let S=c;if("loading"===D){let e;return j[10]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("p",{children:"Loading..."}),j[10]=e):e=j[10],e}return j[11]===Symbol.for("react.memo_cache_sentinel")?(d=(0,i.jsx)(er,{position:"top-right"}),j[11]=d):d=j[11],j[12]===Symbol.for("react.memo_cache_sentinel")?(u=(0,i.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-8 text-center text-green-800",children:"Add New Product"}),j[12]=u):u=j[12],j[13]!==E.title||j[14]!==k?(p=(0,i.jsx)("input",{type:"text",name:"title",placeholder:"Title *",value:E.title,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400",required:!0}),j[13]=E.title,j[14]=k,j[15]=p):p=j[15],j[16]!==E.shortDescription||j[17]!==k?(m=(0,i.jsx)("input",{type:"text",name:"shortDescription",placeholder:"Short Description",value:E.shortDescription,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"}),j[16]=E.shortDescription,j[17]=k,j[18]=m):m=j[18],j[19]!==E.price||j[20]!==k?(f=(0,i.jsx)("input",{type:"number",name:"price",placeholder:"Price *",value:E.price,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400",required:!0}),j[19]=E.price,j[20]=k,j[21]=f):f=j[21],j[22]!==E.priority||j[23]!==k?(g=(0,i.jsx)("input",{type:"number",name:"priority",placeholder:"Priority",value:E.priority,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"}),j[22]=E.priority,j[23]=k,j[24]=g):g=j[24],j[25]!==E.date||j[26]!==k?(h=(0,i.jsx)("input",{type:"date",name:"date",value:E.date,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"}),j[25]=E.date,j[26]=k,j[27]=h):h=j[27],j[28]!==E.image||j[29]!==k?(y=(0,i.jsx)("input",{type:"text",name:"image",placeholder:"Image URL (optional)",value:E.image,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"}),j[28]=E.image,j[29]=k,j[30]=y):y=j[30],j[31]!==g||j[32]!==h||j[33]!==y||j[34]!==p||j[35]!==m||j[36]!==f?(b=(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p,m,f,g,h,y]}),j[31]=g,j[32]=h,j[33]=y,j[34]=p,j[35]=m,j[36]=f,j[37]=b):b=j[37],j[38]!==E.fullDescription||j[39]!==k?(x=(0,i.jsx)("textarea",{name:"fullDescription",placeholder:"Full Description",value:E.fullDescription,onChange:k,className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400",rows:5}),j[38]=E.fullDescription,j[39]=k,j[40]=x):x=j[40],j[41]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsx)("button",{type:"submit",className:"w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition",children:"Submit"}),j[41]=v):v=j[41],j[42]!==S||j[43]!==b||j[44]!==x?(w=(0,i.jsxs)("div",{className:"min-h-screen bg-green-50 flex flex-col items-center py-12 px-4 md:px-0",children:[d,(0,i.jsxs)("div",{className:"w-full max-w-4xl",children:[u,(0,i.jsxs)("form",{onSubmit:S,className:"bg-white p-8 rounded-lg shadow-md space-y-6",children:[b,x,v]})]})]}),j[42]=S,j[43]=b,j[44]=x,j[45]=w):w=j[45],w}e.s(["default",()=>eo],35061)}]);