import{u as s,j as i,h as n}from"./app-CYvB9KHX.js";import c from"./update-section-BirC8KIo.js";import x from"./delete-section-yzyXaNRI.js";import h from"./add-enrollment-section-BTmrwYwF.js";import{T as j,a as b,b as f,c as p,d as o,e as u}from"./TableRow-BEjQEPRE.js";import{P as T}from"./Paper-kPnXvdkl.js";import"./student-thunk-BuZhxlNT.js";import"./Snackbar-xoCoLC9d.js";import"./DefaultPropsProvider-BQSM7bde.js";import"./useSlot-CBVqH0gz.js";import"./resolveComponentProps-DNYSFk_-.js";import"./ButtonBase-DMEbOfn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BByR1c-r.js";import"./IconButton-sFaK3y6q.js";import"./useTheme-BoA35Jdq.js";import"./useSlotProps-BJLs7v3x.js";import"./Modal-Dyc9rkP2.js";import"./ownerWindow-6z4QwRpV.js";import"./utils-BStmzzW8.js";import"./Grow-DpJbQMo9.js";import"./Edit-B5E450Do.js";import"./Drawer-DI0__K6r.js";import"./index-5DG52Zxz.js";import"./Slide-xMyk6jER.js";import"./debounce-Be36O1Ab.js";import"./Box-BFYYot9b.js";import"./extendSxProp-BOzDnUd8.js";import"./TextField-xpfA3Un_.js";import"./Select-D_9xkWuq.js";import"./InputBase-0MIDsGeX.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CHBW4HzE.js";import"./Popover-Cdg5eWZC.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CSjT4KqF.js";import"./useId-C914-jBg.js";import"./MenuItem-Bh7QkRnh.js";import"./listItemTextClasses-CQaXCe7J.js";import"./CircularProgress-CxONhyhd.js";import"./Delete-CIO1nDXN.js";import"./Typography-CCEFdJvR.js";import"./academic-year-Df3MVm4L.js";import"./enrollment-thunk-Bk95GYdw.js";import"./PersonAdd-8s_6DmJ3.js";function si(){const{students:r}=s(t=>t.students);return i.jsx(j,{component:T,children:i.jsxs(b,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(f,{children:i.jsxs(p,{children:[i.jsx(o,{children:"Student ID"}),i.jsx(o,{children:"Firstname"}),i.jsx(o,{children:"Lastname"}),i.jsx(o,{children:"Email"}),i.jsx(o,{children:"Department"}),i.jsx(o,{children:"Course"}),i.jsx(o,{children:"Age"}),i.jsx(o,{children:"Address"}),i.jsx(o,{children:"Action"})]})}),i.jsx(u,{children:r==null?void 0:r.data.map((t,a)=>{var m,e;const l=n(t.dob,"YYYY-MM-DD"),d=n().diff(l,"years");return i.jsxs(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(o,{component:"th",scope:"row",children:t.user_id}),i.jsx(o,{children:t.fname}),i.jsx(o,{children:t.lname}),i.jsx(o,{children:t.email}),i.jsx(o,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(o,{children:((e=t==null?void 0:t.course)==null?void 0:e.name)??""}),i.jsx(o,{children:d}),i.jsx(o,{children:t.address}),i.jsx(o,{children:i.jsxs("div",{className:"flex gap-2",children:[!t.enrollment&&i.jsx(h,{data:t}),i.jsx(c,{data:t}),i.jsx(x,{data:t})]})})]},a)})})]})})}export{si as default};
