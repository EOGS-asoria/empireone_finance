import{u as l,j as i,h as m,y as d}from"./app-KY_J2S1T.js";import c from"./update-section-iGqzs98t.js";import x from"./delete-section-B6W_DR_E.js";import{T as h,a as j,b,c as s,d as t,e as f}from"./TableRow-5CLy1kJz.js";import{P as u}from"./Paper-Bj2IcImK.js";import{B as T}from"./Modal-CJNVzZn3.js";import{V as y}from"./Visibility-BJfDX2Mn.js";import"./instructor-thunk-D5PadpGx.js";import"./user-service-BEGuEHuF.js";import"./Snackbar-B_JLqJSn.js";import"./DefaultPropsProvider-CkYtVWBm.js";import"./useSlot-dkIVSJ5N.js";import"./resolveComponentProps-nJGqZzgZ.js";import"./ButtonBase-CG8OWyyi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Dc1iF4_V.js";import"./IconButton-DN8uriWX.js";import"./useTheme-1LoZ7RaH.js";import"./useSlotProps-BPdkfdDI.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-1FcspkrT.js";import"./utils-Bhp3NLhm.js";import"./Edit-BWl7aL4r.js";import"./Drawer-C9ySabLO.js";import"./index-DUMpTjYk.js";import"./Slide-w45kI640.js";import"./debounce-Be36O1Ab.js";import"./Box-Cxxgg5hp.js";import"./extendSxProp-CoYFXK1a.js";import"./TextField-NrtsZ8kx.js";import"./Select-l9sjUdbN.js";import"./InputBase-DFPvVTqN.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CY2mY79V.js";import"./Popover-BqEDZHud.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-C49uWil5.js";import"./useId-DrQPGvMd.js";import"./MenuItem-LGT_EfPx.js";import"./listItemTextClasses-oPq9TVEy.js";import"./CircularProgress-DAWrJGs1.js";import"./Delete-BVrz2qA8.js";import"./Typography-D9lq05kP.js";function li(){const{instructors:o}=l(r=>r.instructors);return i.jsx(h,{component:u,children:i.jsxs(j,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(b,{children:i.jsxs(s,{children:[i.jsx(t,{children:"Employee ID"}),i.jsx(t,{children:"Firstname"}),i.jsx(t,{children:"Lastname"}),i.jsx(t,{children:"Email"}),i.jsx(t,{children:"Department"}),i.jsx(t,{children:"Age"}),i.jsx(t,{children:"Address"}),i.jsx(t,{children:"Action"})]})}),i.jsx(f,{children:o==null?void 0:o.data.map((r,a)=>{var e;const n=m(r.dob,"YYYY-MM-DD"),p=m().diff(n,"years");return i.jsxs(s,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(t,{component:"th",scope:"row",children:r.user_id}),i.jsx(t,{children:r.fname}),i.jsx(t,{children:r.lname}),i.jsx(t,{children:r.email}),i.jsx(t,{children:((e=r==null?void 0:r.department)==null?void 0:e.name)??""}),i.jsx(t,{children:p}),i.jsx(t,{children:r.address}),i.jsx(t,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(c,{data:r}),i.jsx(x,{data:r}),i.jsx(T,{onClick:()=>d.visit(`/administrator/instructor/${r.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(y,{})})]})})]},a)})})]})})}export{li as default};
