import{r,u as f,j as e,s as d}from"./app-BKxzFGBx.js";import{s as w,g as S}from"./course-thunk-C1nTR0JO.js";import{a as b}from"./academic-year-kCMemgx5.js";import{S as y,A as k}from"./Snackbar-Cs15jELz.js";import{B as x}from"./Modal-Ds47GXu0.js";import{D as N}from"./Drawer-BBwhfQuz.js";import{B as _}from"./Box-OGsKWREe.js";import{T as D}from"./TextField-CbzqqnJl.js";import{C as B}from"./CircularProgress-sbhAYwQn.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useSlot-C_GmNxEW.js";import"./resolveComponentProps-TLKj9-Es.js";import"./ButtonBase-ZZHDPnUv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DNHAV2hH.js";import"./Paper-CF4dgFF6.js";import"./useTheme-DJv7-wFq.js";import"./IconButton-CAGCXe_x.js";import"./useSlotProps-9HqtNA5l.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-CaVqfK8Z.js";import"./utils-DyhK9jud.js";import"./index-Rw4S4E8l.js";import"./Slide-CgOVApEN.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CK8_dlsf.js";import"./Select-BQcN9112.js";import"./InputBase-4hWtwl0Z.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C0tahnqc.js";import"./Popover-CP8qj5SC.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BII1iCiW.js";import"./useId-COYo1B_Z.js";function me(){const[h,i]=r.useState(!1),[n,a]=r.useState(!1),[l,j]=r.useState({}),[s,c]=r.useState({}),[g,m]=r.useState(!1);f(t=>t.subjects);const{instructors:C}=f(t=>t.instructors),p=t=>()=>{i(t)};async function v(t){a(!0);const o=await d.dispatch(w(l));o.status==200?(await d.dispatch(S()),m(!0),c({}),a(!1)):(a(!1),c(o.response.data.errors))}const u=(t,o)=>{o!=="clickaway"&&(m(!1),i(!1))};return console.log("instructors",C),console.log("academic_year",b()),e.jsxs("div",{children:[e.jsx(y,{open:g,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:u,children:e.jsx(k,{onClose:u,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),e.jsx(x,{variant:"contained",onClick:p(!0),children:"Create course"}),e.jsx(N,{anchor:"right",open:h,onClose:p(!1),children:e.jsx(_,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Create course"}),e.jsx(D,{onChange:t=>j({...l,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"name",id:"outlined-basic",label:"Name of Course",variant:"outlined"})]}),e.jsx(x,{onClick:v,disabled:n,variant:"contained",className:" w-full",children:n?e.jsx(B,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{me as default};
