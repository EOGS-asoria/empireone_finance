import{r,u as f,j as e,s as d}from"./app-3jIamv-p.js";import{s as w,g as S}from"./course-thunk--CYcmKdO.js";import{a as b}from"./academic-year-By9atIYz.js";import{S as y,A as k}from"./Snackbar-p25xzclL.js";import{B as x}from"./Modal-Dskmuu2J.js";import{D as N}from"./Drawer-Dyx424Zs.js";import{B as _}from"./Box-wCWSmHga.js";import{T as D}from"./TextField-B_NI4FUE.js";import{C as B}from"./CircularProgress-D4XMWrNT.js";import"./DefaultPropsProvider-CultUzqc.js";import"./useSlot-BKIjwuaw.js";import"./resolveComponentProps-Dg1vdYOb.js";import"./ButtonBase-BA2Tf-Fk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B9j9XIUT.js";import"./Paper-DjWi0n4F.js";import"./useTheme-DnrImtw5.js";import"./IconButton-DlAJrdyf.js";import"./useSlotProps-TVY9aIfw.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-B-3SlRXu.js";import"./utils-CTa3tEFy.js";import"./index-NOo54Jk5.js";import"./Slide-CW16OOjC.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CsOHeTh9.js";import"./Select-DuyLuBAu.js";import"./InputBase-C0hKGzX-.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Ckn9eBTd.js";import"./Popover-Oj-A0Q0r.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-D4rmjPZw.js";import"./useId-ZX7LdyS1.js";function me(){const[h,i]=r.useState(!1),[n,a]=r.useState(!1),[l,j]=r.useState({}),[s,c]=r.useState({}),[g,m]=r.useState(!1);f(t=>t.subjects);const{instructors:C}=f(t=>t.instructors),p=t=>()=>{i(t)};async function v(t){a(!0);const o=await d.dispatch(w(l));o.status==200?(await d.dispatch(S()),m(!0),c({}),a(!1)):(a(!1),c(o.response.data.errors))}const u=(t,o)=>{o!=="clickaway"&&(m(!1),i(!1))};return console.log("instructors",C),console.log("academic_year",b()),e.jsxs("div",{children:[e.jsx(y,{open:g,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:u,children:e.jsx(k,{onClose:u,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),e.jsx(x,{variant:"contained",onClick:p(!0),children:"Create course"}),e.jsx(N,{anchor:"right",open:h,onClose:p(!1),children:e.jsx(_,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Create course"}),e.jsx(D,{onChange:t=>j({...l,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"name",id:"outlined-basic",label:"Name of Course",variant:"outlined"})]}),e.jsx(x,{onClick:v,disabled:n,variant:"contained",className:" w-full",children:n?e.jsx(B,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{me as default};