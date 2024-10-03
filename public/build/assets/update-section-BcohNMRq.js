import{r as n,u as h,j as a,s as g}from"./app-BKxzFGBx.js";import{u as T,g as k}from"./student-thunk-C82AdGxd.js";import{S as D,A as F}from"./Snackbar-Cs15jELz.js";import{B as v}from"./Modal-Ds47GXu0.js";import{E as B}from"./Edit-DBhnu-hv.js";import{D as I}from"./Drawer-BBwhfQuz.js";import{B as z}from"./Box-OGsKWREe.js";import{T as r}from"./TextField-CbzqqnJl.js";import{F as j,I as b,S as C}from"./Select-BQcN9112.js";import{M as w}from"./MenuItem-C_j8r1d2.js";import{C as A}from"./CircularProgress-sbhAYwQn.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useSlot-C_GmNxEW.js";import"./resolveComponentProps-TLKj9-Es.js";import"./ButtonBase-ZZHDPnUv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DNHAV2hH.js";import"./Paper-CF4dgFF6.js";import"./useTheme-DJv7-wFq.js";import"./IconButton-CAGCXe_x.js";import"./useSlotProps-9HqtNA5l.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CaVqfK8Z.js";import"./utils-DyhK9jud.js";import"./index-Rw4S4E8l.js";import"./Slide-CgOVApEN.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CK8_dlsf.js";import"./useId-COYo1B_Z.js";import"./InputBase-4hWtwl0Z.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C0tahnqc.js";import"./Popover-CP8qj5SC.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BII1iCiW.js";import"./listItemTextClasses-BcLjaIrk.js";function ve({data:o}){const[y,m]=n.useState(!1),[s,l]=n.useState({}),[t,u]=n.useState({}),[S,p]=n.useState(!1),[c,d]=n.useState(!1),{departments:_}=h(e=>e.department),{courses:E}=h(e=>e.courses);n.useEffect(()=>{l(o)},[]);const f=e=>()=>{m(e)};async function N(e){d(!0);const i=await g.dispatch(T(s));i.status==200?(await g.dispatch(k()),p(!0),u({}),d(!1)):(d(!1),u(i.response.data.errors))}const x=(e,i)=>{i!=="clickaway"&&(p(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(D,{open:S,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:x,children:a.jsx(F,{onClose:x,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),a.jsx(v,{size:"small",variant:"contained",onClick:f(!0),children:a.jsx(B,{})}),a.jsx(I,{anchor:"right",open:y,onClose:f(!1),children:a.jsx(z,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Edit student"}),a.jsx(r,{onChange:e=>l({...o,[e.target.name]:e.target.value}),value:s.user_id,error:!!(t!=null&&t.user_id),helperText:(t==null?void 0:t.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(r,{onChange:e=>l({...s,[e.target.name]:e.target.value}),value:s.fname,error:!!(t!=null&&t.fname),helperText:(t==null?void 0:t.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(r,{onChange:e=>l({...s,[e.target.name]:e.target.value}),value:s.lname,error:!!(t!=null&&t.lname),helperText:(t==null?void 0:t.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(r,{onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(t!=null&&t.password),helperText:(t==null?void 0:t.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(b,{id:"demo-simple-select-label",children:"Department"}),a.jsx(C,{id:"demo-simple-select",name:"department_id",label:"Department",value:s.department_id,onChange:e=>l({...o,[e.target.name]:e.target.value}),children:_.data.map((e,i)=>a.jsx(w,{value:e.id,children:e.name},i))})]}),a.jsxs(j,{fullWidth:!0,children:[a.jsx(b,{id:"demo-simple-select-label",children:"Course"}),a.jsx(C,{id:"demo-simple-select",name:"course",label:"Course",value:s.course_id,onChange:e=>l({...o,[e.target.name]:e.target.value}),children:E.data.map((e,i)=>a.jsx(w,{value:e.id,children:e.name},i))})]}),a.jsx(r,{value:s.dob,onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(t!=null&&t.dob),helperText:(t==null?void 0:t.dob)??"",name:"dob",type:"date",id:"outlined-basic",variant:"outlined"}),a.jsx(r,{value:s.address,onChange:e=>l({...s,[e.target.name]:e.target.value}),error:!!(t!=null&&t.address),helperText:(t==null?void 0:t.address)??"",name:"address",id:"outlined-basic",label:"Address",variant:"outlined"})]}),a.jsx(v,{onClick:N,disabled:c,variant:"contained",className:" w-full",children:c?a.jsx(A,{size:24,color:"inherit"}):"Update"})]})})})]})}export{ve as default};