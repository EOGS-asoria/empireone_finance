import{u as r,j as s}from"./app-BKxzFGBx.js";import{T as m,a as h,b as x,c,d as l,e as j}from"./TableRow-3jhCZGB0.js";import{P as o}from"./Paper-CF4dgFF6.js";import"./DefaultPropsProvider-BdS6nueG.js";import"./useTheme-DJv7-wFq.js";function S(){const{handleds:a}=r(e=>e.subjects);return console.log("handleds",a),s.jsx(m,{component:o,children:s.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[s.jsx(x,{children:s.jsxs(c,{children:[s.jsx(l,{children:"Name of Instructor"}),s.jsx(l,{children:"Email"}),s.jsx(l,{children:"Number of Student"})]})}),s.jsx(j,{children:a==null?void 0:a.map((e,d)=>{var n,t,i;return s.jsxs(c,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsxs(l,{component:"th",scope:"row",children:[(n=e==null?void 0:e.user)==null?void 0:n.fname," ",(t=e==null?void 0:e.user)==null?void 0:t.lname]}),s.jsx(l,{children:(i=e==null?void 0:e.user)==null?void 0:i.email}),s.jsx(l,{children:e.grades.length})]},d)})})]})})}export{S as default};
