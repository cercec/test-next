exports.id=768,exports.ids=[768],exports.modules={6338:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},1315:(e,t,s)=>{Promise.resolve().then(s.bind(s,7007))},5083:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var r=s(5344),l=s(3729),i=s(3608),a=s(4488);let n={tableTitle:"Liste des utilisateurs",columns:["Nom","Pr\xe9nom","Email","Role","Actions"],tableData:e=>[e.firstName,e.lastName,e.email,e.userRole,"Actions"],addNewButtonLabel:"Ajouter un utilisateur",modalDelete:{title:"Suppression d'un utilisateur",body:"Voulez-vous vraiment supprimer cet utilisateur ?",confirmLabel:"Supprimer",cancelLabel:"Annuler"}},o={tableTitle:"Liste des produits",columns:["Titre","Description","Prix","Owner","Cr\xe9ateur","Actions"],tableData:e=>[e.title,e.description,e.price,`${e.owner.firstName} ${e.owner.lastName}`,`${e.userId.firstName} ${e.userId.lastName}`,"Actions"],addNewButtonLabel:"Ajouter un produit",modalDelete:{title:"Suppression d'un produit",body:"Voulez-vous vraiment supprimer ce produit ?",confirmLabel:"Supprimer",cancelLabel:"Annuler"}},d=e=>{switch(e){case a.g.Users:return n;case a.g.Products:return o;default:throw Error("Invalid data type")}},c=({title:e,body:t,confirmFn:s,cancelFn:l,confirmLabel:i,children:a})=>r.jsx("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,r.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[r.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:r.jsx("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),r.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,r.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[r.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:r.jsx("div",{className:"sm:flex sm:items-start",children:(0,r.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[r.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline",children:e}),r.jsx("div",{className:"mt-2",children:r.jsx("p",{className:"text-sm text-gray-500",children:t})}),r.jsx("div",{className:"mt-2",children:r.jsx("p",{className:"text-sm text-gray-500",children:a})})]})})}),(0,r.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[r.jsx("button",{type:"button",onClick:()=>s(),className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",children:i}),r.jsx("button",{type:"button",onClick:()=>l(!1),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Annuler"})]})]})]})}),m=async(e,t)=>{try{return await i.Z.post(`https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/${"users"===e?"users":"products"}`,t,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("userToken")}`}})}catch(e){console.error("Error saving item:",e)}},u=async(e,t)=>{try{return await i.Z.put(`https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/${"users"===e?"users":"products"}/${t._id}`,t,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("userToken")}`}})}catch(e){console.error("Error saving item:",e)}},p=async(e,t)=>{try{return i.Z.delete(`https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/${"users"===e?"users":"products"}/${t._id}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("userToken")}`}})}catch(e){console.error("Error deleting item:",e)}};var x=s(2658),h=s(3345),f=s(9970),b=s(4227);let g=({title:e,handleSubmit:t,confirmText:s,handleClose:i,selectedItem:a})=>{let n=localStorage.getItem("userId"),o=localStorage.getItem("userRole"),[d,c]=(0,l.useState)([]),m=(0,l.useCallback)(async()=>{try{let e=await (0,b.AW)();c(e)}catch(e){console.error("Error fetching data:",e)}},[]);return(0,l.useEffect)(()=>{m()},[m]),r.jsx("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,r.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[r.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:r.jsx("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),r.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),r.jsx("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:r.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:r.jsx("div",{className:"sm:flex sm:items-start",children:(0,r.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[r.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-5",id:"modal-headline",children:e}),r.jsx(x.l0,{onSubmit:t,initialValues:a,validate:f.$,render:({handleSubmit:e,form:t,submitting:l,pristine:a,values:c})=>(0,r.jsxs)("form",{onSubmit:e,className:"space-y-4 w-full",children:[r.jsx(x.gN,{name:"userId",component:"input",type:"hidden",defaultValue:n}),r.jsx(x.gN,{name:"title",component:h.T,type:"text",placeholder:"Titre"}),r.jsx(x.gN,{name:"description",component:h.T,type:"text",placeholder:"Description"}),r.jsx(x.gN,{name:"price",component:h.T,type:"number",placeholder:"Prix"}),"admin"===o?(0,r.jsxs)(x.gN,{name:"owner",component:"select",className:"select select-bordered w-full",placeholder:"Assigner \xe0 l'utilisateur",children:[r.jsx("option",{value:"",children:"S\xe9lectionner un utilisateur"}),d.map(e=>(0,r.jsxs)("option",{value:e._id,children:[e.firstName," ",e.lastName]},e._id))]}):r.jsx(x.gN,{name:"owner",component:"input",type:"hidden",defaultValue:n}),(0,r.jsxs)("div",{className:"flex justify-end",children:[r.jsx("button",{type:"button",onClick:()=>i(!1),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Fermer"}),r.jsx("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",children:s})]})]})})]})})})})]})})},j=({title:e,handleSubmit:t,confirmText:s,handleClose:l,mode:i,selectedItem:a})=>r.jsx("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,r.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[r.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:r.jsx("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),r.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),r.jsx("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:r.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:r.jsx("div",{className:"sm:flex sm:items-start",children:(0,r.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[r.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-5",id:"modal-headline",children:e}),r.jsx(x.l0,{onSubmit:t,initialValues:a,validate:f.M,render:({handleSubmit:e})=>(0,r.jsxs)("form",{onSubmit:e,className:"space-y-4 w-full",children:[r.jsx(x.gN,{name:"firstName",component:h.T,type:"text",placeholder:"Pr\xe9nom"}),r.jsx(x.gN,{name:"lastName",component:h.T,type:"text",placeholder:"Nom"}),r.jsx(x.gN,{name:"email",component:h.T,type:"email",placeholder:"Email"}),"add"===i&&r.jsx(x.gN,{name:"password",component:h.T,type:"password",placeholder:"Mot de passe"}),(0,r.jsxs)(x.gN,{name:"userRole",component:"select",placeholder:"R\xf4le",className:"select select-bordered w-full mb-4",children:[r.jsx("option",{disabled:!0,value:"",children:"S\xe9lectionnez votre r\xf4le"}),r.jsx("option",{value:"user",children:"Utilisateur"}),r.jsx("option",{value:"admin",children:"Admin"})]}),(0,r.jsxs)("div",{className:"flex justify-end",children:[r.jsx("button",{type:"button",onClick:()=>l(!1),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Fermer"}),r.jsx("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",children:s})]})]})})]})})})})]})}),y=({dataType:e,showFilter:t})=>{let[s,n]=(0,l.useState)([]),[o,x]=(0,l.useState)([]),[h,f]=(0,l.useState)(""),[y,N]=(0,l.useState)(!1),[v,w]=(0,l.useState)(""),[k,S]=(0,l.useState)(null),T=d(e),A=e===a.g.Users&&1===s.length,C=h?s.filter(e=>e.owner._id===h):s,$=(e,t)=>{w(e),N(!0),S(t||null)},E=(0,l.useCallback)(async()=>{try{let e=await (0,b.AW)();x(e)}catch(e){console.error("Error fetching users:",e)}},[]),P=(0,l.useCallback)(async()=>{try{let t=e===a.g.Users?"users":"products";await i.Z.get(`https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("userToken")}`}}).then(t=>n(t.data[e]))}catch(e){console.error("Error fetching data:",e)}},[e]),R=(0,l.useCallback)(async t=>{try{await m(e,t),N(!1),P()}catch(e){console.error("Error post item:",e)}},[e,P]),I=(0,l.useCallback)(async t=>{try{await u(e,t),N(!1),P()}catch(e){console.error("Error editing item:",e)}},[e,P]),z=(0,l.useCallback)(async t=>{try{await p(e,t),N(!1),P()}catch(e){console.error("Error deleting item:",e)}},[e,P]);return(0,l.useEffect)(()=>{P(),E()},[P,E]),(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between pb-8",children:[r.jsx("h1",{className:"text-xl font-bold mb-4",children:T.tableTitle}),e===a.g.Products&&t&&(0,r.jsxs)("label",{className:"form-control w-full max-w-xs",children:[r.jsx("div",{className:"label flex justify-end",children:r.jsx("span",{className:"label-text",children:"Filtrer les produits qui appartienne \xe0 un utilisateur"})}),(0,r.jsxs)("select",{className:"select select-bordered",onChange:e=>{console.log(e.target.value),f(e.target.value)},children:[r.jsx("option",{value:"",children:"Tous les utilisateurs"}),o.map(e=>(0,r.jsxs)("option",{value:e._id,children:[e.firstName," ",e.lastName]},e._id))]})]})]}),(e===a.g.Products?C:s).length>0?(0,r.jsxs)("table",{className:"table-auto w-full",children:[r.jsx("thead",{children:r.jsx("tr",{children:T.columns.map(e=>r.jsx("th",{children:e},e))})}),r.jsx("tbody",{children:s.map(e=>{let t=T.tableData(e);return r.jsx("tr",{children:t.map((s,l)=>l===t.length-1?(0,r.jsxs)("td",{children:[r.jsx("button",{className:"btn btn-blue mr-2",onClick:()=>$("edit",e),children:"Editer"}),r.jsx("button",{className:"btn btn-red",disabled:A,onClick:()=>$("delete",e),children:"Supprimer"})]},l):r.jsx("td",{children:s},l))},e._id)})})]}):(0,r.jsxs)("div",{role:"alert",className:"alert",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsx("span",{children:e===a.g.Products&&"Aucun produit."})]}),r.jsx("div",{className:"w-full flex justify-end mt-7",children:r.jsx("button",{className:"btn bg-blue-600 hover:bg-blue-700 text-white",onClick:()=>$("add"),children:T.addNewButtonLabel})}),y&&"add"===v&&r.jsx("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:r.jsx("div",{className:"flex items-center justify-center min-h-screen",children:r.jsx("div",{className:"bg-white rounded-lg shadow-xl",children:r.jsx("div",{className:"p-4",children:e===a.g.Users?r.jsx(j,{mode:"add",handleSubmit:R,confirmText:"Ajouter",handleClose:()=>N(!1),title:"Ajouter un profil"}):r.jsx(g,{handleSubmit:R,confirmText:"Ajouter",handleClose:()=>N(!1),title:"Ajouter un produit"})})})})}),y&&"edit"===v&&k&&r.jsx("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:r.jsx("div",{className:"flex items-center justify-center min-h-screen",children:r.jsx("div",{className:"bg-white rounded-lg shadow-xl",children:r.jsx("div",{className:"p-4",children:e===a.g.Users?r.jsx(j,{mode:"edit",selectedItem:k,handleSubmit:I,confirmText:"Editer",handleClose:()=>N(!1),title:"Editer un profil"}):r.jsx(g,{selectedItem:k,handleSubmit:I,confirmText:"Editer",handleClose:()=>N(!1),title:"Editer un produit"})})})})}),y&&"delete"===v&&k&&r.jsx(c,{title:T.modalDelete.title,body:T.modalDelete.body,confirmLabel:T.modalDelete.confirmLabel,confirmFn:()=>z(k),cancelFn:N})]})}},3345:(e,t,s)=>{"use strict";s.d(t,{T:()=>l});var r=s(5344);s(3729);let l=({input:e,meta:t,placeholder:s,type:l})=>(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{...e,type:l,placeholder:s,className:`input input-bordered w-full ${t.error&&t.touched?"input-error":""}`}),t.error&&t.touched&&r.jsx("span",{className:"text-xs text-error",children:t.error})]})},7007:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5344),l=s(3410),i=s.n(l);s(3824);var a=s(6561);function n({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:i().className,children:r.jsx(a.Wh,{children:e})})})}},6967:(e,t,s)=>{"use strict";s.d(t,{K:()=>r});let r=(0,s(6561).cn)({key:"userState",default:{isLogged:!1,userRole:"",userToken:"",userId:"",cart:[]}})},4488:(e,t,s)=>{"use strict";var r;s.d(t,{g:()=>r}),function(e){e.Users="users",e.Products="products"}(r||(r={}))},4227:(e,t,s)=>{"use strict";s.d(t,{AW:()=>i,Dg:()=>l});var r=s(3608);let l=async()=>{try{return(await r.Z.get("https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/products")).data.products}catch(e){return console.error("Could not fetch products:",e),[]}},i=async()=>{try{return(await r.Z.get("https://app-7d961364-9019-41e1-906d-4eb58bdf89c4.cleverapps.io/api/users")).data.users}catch(e){return console.error("Could not fetch users:",e),[]}}},9970:(e,t,s)=>{"use strict";s.d(t,{$:()=>l,M:()=>r});let r=e=>{let t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Password must be at least 8 characters"):t.password="Required",e.firstName||(t.firstName="Required"),e.lastName||(t.lastName="Required"),e.userRole||(t.userRole="Required"),t},l=e=>{let t={};return e.title||(t.title="Required"),e.description||(t.description="Required"),null==e.price?t.price="Required":0>=Number(e.price)&&(t.price="Price must be greater than 0"),t}},1342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>l,default:()=>a});let r=(0,s(6843).createProxy)(String.raw`/Users/pierremeteye/Documents/workspace/fleex/test-next/src/app/layout.tsx`),{__esModule:l,$$typeof:i}=r,a=r.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(337);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3824:()=>{}};