import{u as j,j as t,h as d,y as u}from"./app-HHd-x-YV.js";import b from"./update-section-SmJ3nBop.js";import f from"./delete-section-7n7LY6y8.js";import{T,a as S,b as y,c as s,d as o,e as Y}from"./TableRow-DOevIPf7.js";import{P as C}from"./Paper-CaH9oHFm.js";import{B as D}from"./Modal-CGyGWQY4.js";import{V as v}from"./Visibility-BnyVbUpT.js";import"./enrollment-thunk-BWIdSDEM.js";import"./academic-year-f074eGWp.js";import"./Snackbar-C32YN27t.js";import"./DefaultPropsProvider-CHdgsG8Y.js";import"./useSlot-Cm12o5Gd.js";import"./resolveComponentProps-BJ7FQ9kl.js";import"./ButtonBase-vij8kgUG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B9l97ECT.js";import"./IconButton-M7DjU19i.js";import"./useTheme-cE19eQD4.js";import"./useSlotProps-J3G2aTDr.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-fZ670os_.js";import"./utils-DL-NOZG8.js";import"./Edit-DBLSKFti.js";import"./Drawer-CfVH8F68.js";import"./index-CciWo9gC.js";import"./Slide-qi1mNOkX.js";import"./debounce-Be36O1Ab.js";import"./Box-Bc6bgHzK.js";import"./extendSxProp-7_0RiXul.js";import"./TextField-DI8YW4qu.js";import"./Select-CKUcnHJX.js";import"./InputBase-lfO_99AM.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DInlM-cS.js";import"./Popover-CeW5yCwS.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BJFskI7X.js";import"./useId-BeqvwIPO.js";import"./MenuItem-B5qWMQvz.js";import"./listItemTextClasses-C7jzXjbd.js";import"./CircularProgress-BE0C8Ycp.js";import"./Delete-CN3QKfXG.js";import"./Typography-DicOH9MN.js";function ji(){const{enrollments:m}=j(i=>i.enrollments);return t.jsx(T,{component:C,children:t.jsxs(S,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(y,{children:t.jsxs(s,{children:[t.jsx(o,{children:"Student ID"}),t.jsx(o,{children:"Firstname"}),t.jsx(o,{children:"Lastname"}),t.jsx(o,{children:"Semester"}),t.jsx(o,{children:"Section"}),t.jsx(o,{children:"Course"}),t.jsx(o,{children:"Year"}),t.jsx(o,{children:"Action"})]})}),t.jsx(Y,{children:m==null?void 0:m.data.map((i,x)=>{var n,r,a,l,p,c;const h=d((n=i==null?void 0:i.user)==null?void 0:n.dob,"YYYY-MM-DD");return d().diff(h,"years"),console.log("res",i),t.jsxs(s,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{component:"th",scope:"row",children:(r=i==null?void 0:i.user)==null?void 0:r.user_id}),t.jsx(o,{children:(a=i==null?void 0:i.user)==null?void 0:a.fname}),t.jsx(o,{children:(l=i==null?void 0:i.user)==null?void 0:l.lname}),t.jsx(o,{children:i==null?void 0:i.semester}),t.jsx(o,{children:((p=i==null?void 0:i.section)==null?void 0:p.name)??""}),t.jsx(o,{children:((c=i==null?void 0:i.course)==null?void 0:c.name)??""}),t.jsx(o,{children:(i==null?void 0:i.year)??""}),t.jsx(o,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(b,{data:i}),t.jsx(f,{data:i}),t.jsx(D,{onClick:()=>{var e;return u.visit(`/administrator/students/enrollment/${(e=i==null?void 0:i.user)==null?void 0:e.user_id}`)},size:"small",variant:"contained",color:"success",children:t.jsx(v,{})})]})})]},x)})})]})})}export{ji as default};
