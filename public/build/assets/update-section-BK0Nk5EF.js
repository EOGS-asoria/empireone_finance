import{r as l,u as C,j as a,s as h}from"./app-CmFQXMDA.js";import{u as S,g as y}from"./instructor-thunk-CyH1FJ5g.js";import{S as _,A as E}from"./Snackbar-C2NahZBo.js";import{B as g}from"./Button-Ca6_f5QD.js";import{E as N}from"./Edit-KuC4NvRY.js";import{D as k}from"./Drawer-DPSbidOb.js";import{B as D}from"./Box-Duu3fCG7.js";import{T as n}from"./TextField-977EFnZH.js";import{F,I as T,S as I}from"./Select-DLCvHkET.js";import{M as B}from"./MenuItem-B2s7s-bX.js";import{C as z}from"./CircularProgress-CNUxwePB.js";import"./user-service-BLnsr200.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./ButtonBase-eD_9SiZw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CK7OYcX0.js";import"./Paper-R8ptfk5O.js";import"./useTheme-BZLhdrJg.js";import"./IconButton-DgFuEDS4.js";import"./useSlotProps-D41p7Ys2.js";import"./Modal-Dchp1q7E.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-BiPubG9K.js";import"./Grow-Dl67VZfs.js";import"./index-BO1-Chu-.js";import"./Slide--mF259TZ.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-B0W4GVs0.js";import"./useId-Ca1dvIWf.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./Popover-WvAsdami.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BN9NxkgP.js";import"./listItemTextClasses-AuQXObol.js";function je({data:o}){const[v,p]=l.useState(!1),[s,i]=l.useState({}),[e,d]=l.useState({}),[j,u]=l.useState(!1),[c,m]=l.useState(!1),{departments:b}=C(t=>t.department);l.useEffect(()=>{i(o)},[]);const f=t=>()=>{p(t)};async function w(t){m(!0);const r=await h.dispatch(S(s));r.status==200?(await h.dispatch(y()),u(!0),d({}),m(!1)):(m(!1),d(r.response.data.errors))}const x=(t,r)=>{r!=="clickaway"&&(u(!1),p(!1))};return a.jsxs("div",{children:[a.jsx(_,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:x,children:a.jsx(E,{onClose:x,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),a.jsx(g,{size:"small",variant:"contained",onClick:f(!0),children:a.jsx(N,{})}),a.jsx(k,{anchor:"right",open:v,onClose:f(!1),children:a.jsx(D,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Edit Instructor"}),a.jsx(n,{onChange:t=>i({...o,[t.target.name]:t.target.value}),value:s.user_id,error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),value:s.fname,error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),value:s.lname,error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(F,{fullWidth:!0,children:[a.jsx(T,{id:"demo-simple-select-label",children:"Department"}),a.jsx(I,{id:"demo-simple-select",name:"department_id",label:"Department",value:s.department_id,onChange:t=>i({...o,[t.target.name]:t.target.value}),children:b.data.map((t,r)=>a.jsx(B,{value:t.id,children:t.name},r))})]})]}),a.jsx(g,{onClick:w,disabled:c,variant:"contained",className:" w-full",children:c?a.jsx(z,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{je as default};