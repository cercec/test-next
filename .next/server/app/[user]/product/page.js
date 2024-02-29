(()=>{var e={};e.id=349,e.ids=[349],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6124:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>l});var s=r(482),a=r(9108),n=r(2563),o=r.n(n),i=r(8300),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["[user]",{children:["product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2904)),"/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/[user]/product/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/[user]/product/page.tsx"],u="/[user]/product/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[user]/product/page",pathname:"/[user]/product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6015:(e,t,r)=>{Promise.resolve().then(r.bind(r,6714))},6714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5344),a=r(3729),n=r(3608),o=r(6561),i=r(5927),c=r(5083),l=r(4488);function d({params:e}){let[t,r]=(0,a.useState)([]),d=(0,a.useCallback)(async()=>{try{let t=await n.Z.get(`https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/products/user/${e.user}/`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("userToken")}`}});r(t.data)}catch(e){console.error("Error fetching data:",e)}},[e.user]);return(0,a.useEffect)(()=>{d()},[d]),(0,s.jsxs)(o.Wh,{children:[s.jsx(i.Z,{}),s.jsx(c.default,{dataType:l.g.Products,showFilter:!1})]})}},5927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(5344),a=r(8428),n=r(6506),o=r(6561),i=r(6967),c=r(3729),l=r(5739);function d(){let e=(0,a.useRouter)(),t=(0,o.Zl)(i.K),{isLogged:r,cart:d,userRole:u,userId:p}=(0,o.sJ)(i.K),x=d.reduce((e,t)=>e+Number(t.price),0);return(0,c.useEffect)(()=>{let e=localStorage.getItem("userToken"),r=localStorage.getItem("userRole"),s=localStorage.getItem("userId");e&&r&&s&&t(e=>({...e,isLogged:!0,userId:s,userRole:r}))},[d,t]),(0,s.jsxs)("div",{className:"navbar bg-base-100",children:[s.jsx("div",{className:"flex-1",children:s.jsx(n.default,{href:"/",className:"btn btn-ghost text-xl",children:s.jsx(l.xng,{})})}),(0,s.jsxs)("div",{className:"flex-none gap-4",children:[(0,s.jsxs)("div",{className:"dropdown dropdown-end",children:[s.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle",children:(0,s.jsxs)("div",{className:"indicator",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),s.jsx("span",{className:"badge badge-primary",children:d.length})]})}),s.jsx("div",{tabIndex:0,className:"mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("span",{className:"font-bold text-lg",children:[d.length," ",d.length>1?"produits":"produit"]}),(0,s.jsxs)("span",{className:"text-info",children:["Sous total: ",x,"€"]}),s.jsx("div",{className:"card-actions",children:s.jsx("button",{className:"btn btn-primary btn-block",children:"Acheter"})})]})})]}),r?(0,s.jsxs)("div",{className:"dropdown dropdown-end",children:[s.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar",children:s.jsx("div",{className:"w-10 rounded-full",children:s.jsx("img",{alt:"Tailwind CSS Navbar component",src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"})})}),(0,s.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:["user"===u&&s.jsx("li",{children:s.jsx(n.default,{href:`/${p}/product`,children:"Mes produits"})}),"admin"===u&&s.jsx("li",{children:s.jsx(n.default,{href:"/dashboard",children:"Dashboard"})}),s.jsx("li",{onClick:()=>{localStorage.removeItem("userToken"),localStorage.removeItem("userRole"),localStorage.removeItem("userId"),t({isLogged:!1,userRole:"",userId:"",userToken:"",cart:[]}),e.push("/")},children:s.jsx("a",{children:"D\xe9connexion"})})]})]}):s.jsx("div",{className:"flex-none",children:s.jsx("ul",{className:"menu menu-horizontal px-1",children:s.jsx("li",{children:s.jsx(n.default,{href:"/login",children:"Se connecter"})})})})]})]})}},2904:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});let s=(0,r(6843).createProxy)(String.raw`/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/[user]/product/page.tsx`),{__esModule:a,$$typeof:n}=s,o=s.default}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,859,337,608,321,98,739,768],()=>r(6124));module.exports=s})();