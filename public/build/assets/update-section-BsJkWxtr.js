import{r,u as w,j as e,s as x}from"./app-KY_J2S1T.js";import{u as S,g as C}from"./sections-thunk-DP4Oh68m.js";import{S as b,A as y}from"./Snackbar-B_JLqJSn.js";import{B as h}from"./Modal-CJNVzZn3.js";import{E as k}from"./Edit-BWl7aL4r.js";import{D as N}from"./Drawer-C9ySabLO.js";import{B as E}from"./Box-Cxxgg5hp.js";import{T as B}from"./TextField-NrtsZ8kx.js";import{C as D}from"./CircularProgress-DAWrJGs1.js";import"./DefaultPropsProvider-CkYtVWBm.js";import"./useSlot-dkIVSJ5N.js";import"./resolveComponentProps-nJGqZzgZ.js";import"./ButtonBase-CG8OWyyi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Dc1iF4_V.js";import"./Paper-Bj2IcImK.js";import"./useTheme-1LoZ7RaH.js";import"./IconButton-DN8uriWX.js";import"./useSlotProps-BPdkfdDI.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-1FcspkrT.js";import"./utils-Bhp3NLhm.js";import"./index-DUMpTjYk.js";import"./Slide-w45kI640.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-CoYFXK1a.js";import"./Select-l9sjUdbN.js";import"./InputBase-DFPvVTqN.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CY2mY79V.js";import"./Popover-BqEDZHud.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-C49uWil5.js";import"./useId-DrQPGvMd.js";function ce({data:n}){const[j,l]=r.useState(!1),[o,m]=r.useState({}),[s,c]=r.useState({}),[g,p]=r.useState(!1),[u,a]=r.useState(!1);w(t=>t.instructors),r.useEffect(()=>{m(n)},[]);const f=t=>()=>{l(t)};async function v(t){a(!0);const i=await x.dispatch(S({id:o.id,code:o.code,name:o.name,semester:o.semester}));i.status==200?(await x.dispatch(C()),p(!0),c({}),a(!1)):(a(!1),c(i.response.data.errors))}const d=(t,i)=>{i!=="clickaway"&&(p(!1),l(!1))};return e.jsxs("div",{children:[e.jsx(b,{open:g,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:d,children:e.jsx(y,{onClose:d,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),e.jsx(h,{size:"small",variant:"contained",onClick:f(!0),children:e.jsx(k,{})}),e.jsx(N,{anchor:"right",open:j,onClose:f(!1),children:e.jsx(E,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Create sections"}),e.jsx(B,{value:o.name,onChange:t=>m({...n,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"name",id:"outlined-basic",label:"Name of sections",variant:"outlined"})]}),e.jsx(h,{onClick:v,disabled:u,variant:"contained",className:" w-full",children:u?e.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{ce as default};