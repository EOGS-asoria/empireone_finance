import{r as n,u,j as e,s as g}from"./app-KY_J2S1T.js";import{u as E,a as k}from"./enrollment-thunk-BVji9Ljj.js";import{a as I}from"./academic-year-DKG8U2Xb.js";import{S as N,A as D}from"./Snackbar-B_JLqJSn.js";import{B as b}from"./Modal-CJNVzZn3.js";import{E as F}from"./Edit-BWl7aL4r.js";import{D as W}from"./Drawer-C9ySabLO.js";import{B as A}from"./Box-Cxxgg5hp.js";import{T as B}from"./TextField-NrtsZ8kx.js";import{F as o,I as m,S as d}from"./Select-l9sjUdbN.js";import{M as r}from"./MenuItem-LGT_EfPx.js";import{C as z}from"./CircularProgress-DAWrJGs1.js";import"./DefaultPropsProvider-CkYtVWBm.js";import"./useSlot-dkIVSJ5N.js";import"./resolveComponentProps-nJGqZzgZ.js";import"./ButtonBase-CG8OWyyi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Dc1iF4_V.js";import"./Paper-Bj2IcImK.js";import"./useTheme-1LoZ7RaH.js";import"./IconButton-DN8uriWX.js";import"./useSlotProps-BPdkfdDI.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-1FcspkrT.js";import"./utils-Bhp3NLhm.js";import"./index-DUMpTjYk.js";import"./Slide-w45kI640.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CoYFXK1a.js";import"./useId-DrQPGvMd.js";import"./InputBase-DFPvVTqN.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CY2mY79V.js";import"./Popover-BqEDZHud.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-C49uWil5.js";import"./listItemTextClasses-oPq9TVEy.js";function be({data:S}){const[C,p]=n.useState(!1),[s,l]=n.useState({}),[i,h]=n.useState({}),[y,x]=n.useState(!1),[f,c]=n.useState(!1);u(t=>t.department);const{courses:_}=u(t=>t.courses),{sections:w}=u(t=>t.sections);n.useEffect(()=>{l(S)},[]);const j=t=>()=>{p(t)};async function Y(t){c(!0);const a=await g.dispatch(E(s));a.status==200?(await g.dispatch(k()),x(!0),h({}),c(!1)):(c(!1),h(a.response.data.errors))}const v=(t,a)=>{a!=="clickaway"&&(x(!1),p(!1))};return e.jsxs("div",{children:[e.jsx(N,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:v,children:e.jsx(D,{onClose:v,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),e.jsx(b,{size:"small",variant:"contained",onClick:j(!0),children:e.jsx(F,{})}),e.jsx(W,{anchor:"right",open:C,onClose:j(!1),children:e.jsx(A,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Edit enrollments"}),e.jsx(B,{onChange:t=>l({...s,[t.target.name]:t.target.value}),value:s.user_id,error:!!(i!=null&&i.user_id),helperText:(i==null?void 0:i.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.academic_year??"",name:"academic_year",label:"Academic Year",onChange:t=>l({...s,[t.target.name]:t.target.value}),children:I().map((t,a)=>e.jsx(r,{value:t,children:t},a))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Course"}),e.jsx(d,{id:"demo-simple-select",name:"course",label:"Course",value:s.course_id,onChange:t=>l({...s,[t.target.name]:t.target.value}),children:_.data.map((t,a)=>e.jsx(r,{value:t.id,children:t.name},a))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(d,{id:"demo-simple-select",name:"year",label:"year",value:(s==null?void 0:s.year)??"",onChange:t=>l({...s,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Year",children:"1st Year"}),e.jsx(r,{value:"2nd Year",children:"2nd Year"}),e.jsx(r,{value:"3rd Year",children:"3rd Year"}),e.jsx(r,{value:"4th Year",children:"4th Year"})]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Section"}),e.jsx(d,{id:"demo-simple-select",name:"section_id",label:"Section",value:s.section_id,onChange:t=>l({...s,[t.target.name]:t.target.value}),children:w.data.map((t,a)=>e.jsx(r,{value:t.id,children:t.name},a))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s.semester,name:"semester",label:"Semester",onChange:t=>l({...s,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Semester",children:"1st Semester"}),e.jsx(r,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(r,{value:"Summer",children:"Summer"})]})]})]}),e.jsx(b,{onClick:Y,disabled:f,variant:"contained",className:" w-full",children:f?e.jsx(z,{size:24,color:"inherit"}):"Update"})]})})})]})}export{be as default};