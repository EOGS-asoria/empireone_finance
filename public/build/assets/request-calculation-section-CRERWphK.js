import{j as s}from"./app-BQ3qUyPU.js";import{C as c}from"./Close-c5eGF_cF.js";import{T as d,a,b as l,c as e,d as h}from"./TableRow-BiB-9AIi.js";import{I as x}from"./IconButton-8NDlTvkq.js";import"./createSvgIcon-D_rqtzAi.js";import"./DefaultPropsProvider-C_DMwbwV.js";import"./createSimplePaletteValueFilter-CVjiaD3x.js";function f({form:t,setForm:m,handleClose:n,user:o}){var i;const r=parseFloat((i=o==null?void 0:o.salary)==null?void 0:i.budgetCost)*.8;return s.jsxs(d,{"aria-label":"simple table",children:[s.jsx(a,{children:s.jsxs(l,{children:[s.jsx(e,{children:s.jsx("div",{className:"font-black",children:"Loan Information"})}),s.jsx(e,{align:"right",children:s.jsx(x,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:s.jsx(c,{})})})]})}),s.jsxs(h,{children:[s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Fullname"}),s.jsxs(e,{children:[o.employee_fname," ",o.employee_lname]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Desired Amount"}),s.jsxs(e,{children:["₱ ",t.desired_amount??0]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Maximum loan amount.(amount 80% of basic salary)."}),s.jsxs(e,{children:["₱ ",r??9600]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Term"}),s.jsxs(e,{children:[t.term," months"]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Interest"}),s.jsxs(e,{children:["₱ ",t.interest]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Net"}),s.jsxs(e,{children:["₱ ",t.net]})]}),s.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(e,{component:"th",scope:"row",children:"Bi-Monthly Amortization"}),s.jsxs(e,{children:["₱ ",t.bi_amortization.toFixed(2)]})]})]})]})}export{f as default};