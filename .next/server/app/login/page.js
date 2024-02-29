(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8850:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=t(482),a=t(9108),n=t(2563),o=t.n(n),l=t(8300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);t.d(s,i);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1613)),"/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1342)),"/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/login/page.tsx"],u="/login/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6338:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},1315:(e,s,t)=>{Promise.resolve().then(t.bind(t,7007))},2707:(e,s,t)=>{Promise.resolve().then(t.bind(t,9682))},5927:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var r=t(5344),a=t(8428),n=t(6506),o=t(6561),l=t(6967),i=t(3729),d=t(5739);function c(){let e=(0,a.useRouter)(),s=(0,o.Zl)(l.K),{isLogged:t,cart:c,userRole:u,userId:p}=(0,o.sJ)(l.K),m=c.reduce((e,s)=>e+Number(s.price),0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("userToken"),t=localStorage.getItem("userRole"),r=localStorage.getItem("userId");e&&t&&r&&s(e=>({...e,isLogged:!0,userId:r,userRole:t}))},[c,s]),(0,r.jsxs)("div",{className:"navbar bg-base-100",children:[r.jsx("div",{className:"flex-1",children:r.jsx(n.default,{href:"/",className:"btn btn-ghost text-xl",children:r.jsx(d.xng,{})})}),(0,r.jsxs)("div",{className:"flex-none gap-4",children:[(0,r.jsxs)("div",{className:"dropdown dropdown-end",children:[r.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle",children:(0,r.jsxs)("div",{className:"indicator",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),r.jsx("span",{className:"badge badge-primary",children:c.length})]})}),r.jsx("div",{tabIndex:0,className:"mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("span",{className:"font-bold text-lg",children:[c.length," ",c.length>1?"produits":"produit"]}),(0,r.jsxs)("span",{className:"text-info",children:["Sous total: ",m,"€"]}),r.jsx("div",{className:"card-actions",children:r.jsx("button",{className:"btn btn-primary btn-block",children:"Acheter"})})]})})]}),t?(0,r.jsxs)("div",{className:"dropdown dropdown-end",children:[r.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle avatar",children:r.jsx("div",{className:"w-10 rounded-full",children:r.jsx("img",{alt:"Tailwind CSS Navbar component",src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"})})}),(0,r.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:["user"===u&&r.jsx("li",{children:r.jsx(n.default,{href:`/${p}/product`,children:"Mes produits"})}),"admin"===u&&r.jsx("li",{children:r.jsx(n.default,{href:"/dashboard",children:"Dashboard"})}),r.jsx("li",{onClick:()=>{localStorage.removeItem("userToken"),localStorage.removeItem("userRole"),localStorage.removeItem("userId"),s({isLogged:!1,userRole:"",userId:"",userToken:"",cart:[]}),e.push("/")},children:r.jsx("a",{children:"D\xe9connexion"})})]})]}):r.jsx("div",{className:"flex-none",children:r.jsx("ul",{className:"menu menu-horizontal px-1",children:r.jsx("li",{children:r.jsx(n.default,{href:"/login",children:"Se connecter"})})})})]})]})}},7007:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(5344),a=t(3410),n=t.n(a);t(3824);var o=t(6561);function l({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:r.jsx(o.Wh,{children:e})})})}},9682:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(5344);t(3729);var a=t(2658),n=t(3608),o=t(8428),l=t(6561),i=t(6967),d=t(5927);let c=()=>{let e=(0,o.useRouter)(),s=(0,l.Zl)(i.K),t=async t=>{try{let r=await n.Z.post("http://localhost:3000/api/auth/login",t);console.log("Server response:",r.data);let{userRole:a,userId:o,token:l}=r.data;console.log(r.data),localStorage.setItem("userToken",l),localStorage.setItem("userRole",a),localStorage.setItem("userId",o),s({isLogged:!!l,userRole:a,userId:o,userToken:l,cart:[]}),"admin"===a?e.push("/dashboard/products"):e.push("/")}catch(e){console.error("Error during login:",e.response?e.response.data:e.message)}};return(0,r.jsxs)(l.Wh,{children:[r.jsx(d.Z,{}),r.jsx("div",{className:" flex justify-center align-center",children:r.jsx("div",{className:"card w-96 bg-base-100 shadow-xl",children:r.jsx("div",{className:"card-body",children:r.jsx(a.l0,{onSubmit:t,validate:e=>{let s={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(s.email="Invalid email address"):s.email="Required",e.password||(s.password="Required"),s},render:({handleSubmit:e,submitting:s,pristine:t,hasValidationErrors:n})=>(0,r.jsxs)("form",{onSubmit:e,className:"form-control w-full max-w-xs",children:[(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2 mb-2",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:[r.jsx("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"}),r.jsx("path",{d:"M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"})]}),r.jsx(a.gN,{name:"email",component:"input",type:"email",className:"grow",placeholder:"Email"})]}),(0,r.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4 opacity-70",children:r.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),r.jsx(a.gN,{name:"password",component:"input",type:"password",className:"grow",placeholder:"Mot de passe"})]}),r.jsx("button",{type:"submit",disabled:s||t||n,className:"btn btn-primary w-full mt-4",children:"Log In"})]})})})})})]})}},6967:(e,s,t)=>{"use strict";t.d(s,{K:()=>r});let r=(0,t(6561).cn)({key:"userState",default:{isLogged:!1,userRole:"",userToken:"",userId:"",cart:[]}})},1342:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});let r=(0,t(6843).createProxy)(String.raw`/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/layout.tsx`),{__esModule:a,$$typeof:n}=r,o=r.default},1613:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});let r=(0,t(6843).createProxy)(String.raw`/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/login/page.tsx`),{__esModule:a,$$typeof:n}=r,o=r.default},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3824:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,859,337,608,321,98,739],()=>t(8850));module.exports=r})();