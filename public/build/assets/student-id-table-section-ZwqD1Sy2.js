import{u as b,j as e,r as f}from"./app-CcFxKgAD.js";import{K as y,a as T}from"./KeyboardArrowUp-B7RcVaCa.js";import{T as k,a as m,b as p,c as t,d as s,e as u}from"./TableRow-nvd5l806.js";import{P as w}from"./Paper-CNqsZyLv.js";import{I as N}from"./IconButton-BiEa_APH.js";import{C}from"./Collapse-COE6-5hc.js";import{B as v}from"./Box-cMi0Rkwc.js";import{T as S}from"./Typography-DHBjKxG2.js";import"./createSvgIcon-Hk2aX3dH.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./useTheme-BAygJoIP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DSh1E41x.js";import"./utils-B0SWmCla.js";import"./extendSxProp-BQ60it6R.js";import"./index-C7QlkSNc.js";function h({categoryName:d,grades:n}){var o,x,j;return e.jsxs(v,{className:"py-6 w-full",sx:{margin:1},children:[e.jsx(S,{variant:"h6",gutterBottom:!0,component:"div",children:e.jsx("div",{className:"font-black",children:d})}),e.jsx("div",{className:"font-bold text-lg",children:"Prelim"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(u,{children:(o=n.prelim)==null?void 0:o.map((r,c)=>e.jsxs(t,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},c))})]}),e.jsx("div",{className:"font-bold text-lg",children:"Midterm"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(u,{children:(x=n.midterm)==null?void 0:x.map((r,c)=>e.jsxs(t,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},c))})]}),e.jsx("div",{className:"font-bold text-lg",children:"Final"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(u,{children:(j=n.final)==null?void 0:j.map((r,c)=>e.jsxs(t,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},c))})]})]})}function z(d){const{row:n}=d,[o,x]=f.useState(!1),j=n.examination.reduce((l,a)=>{const i=a.assessment.toLowerCase();return l[i]||(l[i]=[]),l[i].push(a),l},{}),r=n.quiz.reduce((l,a)=>{const i=a.assessment.toLowerCase();return l[i]||(l[i]=[]),l[i].push(a),l},{}),c=n.project.reduce((l,a)=>{const i=a.assessment.toLowerCase();return l[i]||(l[i]=[]),l[i].push(a),l},{}),g=n.class_participation.reduce((l,a)=>{const i=a.assessment.toLowerCase();return l[i]||(l[i]=[]),l[i].push(a),l},{});return e.jsxs(f.Fragment,{children:[e.jsx(t,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"},onClick:()=>x(!o),children:e.jsxs(s,{className:"bg-blue-400 w-full",children:[e.jsx(N,{"aria-label":"expand row",size:"small",children:o?e.jsx(y,{}):e.jsx(T,{})}),n==null?void 0:n.subject_code," (",n.academic_year,")"]})}),e.jsx(t,{children:e.jsx(s,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsxs(C,{in:o,timeout:"auto",unmountOnExit:!0,children:[e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(h,{categoryName:"Examination",grades:j??[]}),e.jsx(h,{categoryName:"Quizzes",grades:r??[]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(h,{categoryName:"Projects / Assignments",grades:c??[]}),e.jsx(h,{categoryName:"Class Participation",grades:g??[]})]})]})})})]})}function Q(){const{userGrades:d}=b(n=>n.grades);return console.log("userGrades",d),e.jsx(k,{component:w,children:e.jsxs(m,{"aria-label":"collapsible table",children:[e.jsx(p,{children:e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("div",{className:"font-black",children:"School Year"})}),e.jsx(s,{})]})}),e.jsx(u,{children:d.map((n,o)=>e.jsx(z,{row:n},o))})]})})}export{Q as default};
