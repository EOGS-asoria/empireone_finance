import{r as l,j as e}from"./app-BZXu2kkj.js";import{C as m}from"./Close-C6gCYRPx.js";import p from"./approve-button-section-DGf575Yv.js";import x from"./declined-button-section-KGU3MHrW.js";import{B as d}from"./Button-Bcb6Q1HP.js";import{D as j}from"./Dialog-DH39hhWh.js";import{T as b,a as u,b as r,c as o,d as f}from"./TableRow-CjMRMzgo.js";import{I as g}from"./IconButton-DGsn4zcQ.js";import{D as w}from"./DialogActions-BpXnqigw.js";import"./createSvgIcon-BlP5tmDN.js";import"./DefaultPropsProvider-DHU_4z81.js";import"./loan-record-thunk-CKBRNCiH.js";import"./createSimplePaletteValueFilter-DJTqrogc.js";import"./Paper-q6jCntew.js";import"./useTheme-DkxBl6Ou.js";import"./Modal-DZfgMvjK.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BTMXH2pL.js";import"./utils-DwO_k2f6.js";function H({data:s}){var t;const[c,i]=l.useState(!1);l.useState(!1),l.useState(!1);const h=()=>{i(!0)},n=()=>{i(!1)};return e.jsxs(l.Fragment,{children:[e.jsx(d,{variant:"outlined",onClick:h,children:"APPROVE"}),e.jsxs(j,{fullWidth:!0,open:c,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(b,{"aria-label":"simple table",children:[e.jsx(u,{children:e.jsxs(r,{children:[e.jsx(o,{children:e.jsx("div",{className:"font-black",children:"Loan Information (PENDING)"})}),e.jsx(o,{align:"right",children:e.jsx(g,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:e.jsx(m,{})})})]})}),e.jsxs(f,{children:[e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Fullname"}),e.jsxs(o,{children:[s==null?void 0:s.user.employee_fname," ",s==null?void 0:s.user.employee_lname]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Position"}),e.jsx(o,{children:((t=s==null?void 0:s.employee)==null?void 0:t.position)??"NA"})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Desired Amount"}),e.jsxs(o,{children:["₱ ",(s==null?void 0:s.desired_amount)??0]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Term"}),e.jsxs(o,{children:[s==null?void 0:s.term," months"]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Interest"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.interest]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Net"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.net]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Bi-Monthly Amortization"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.bi_amortization.toFixed(2)]})]})]})]}),e.jsxs(w,{children:[e.jsx(x,{setOpen:i,data:s}),e.jsx(p,{setOpen:i,data:s})]})]})]})}export{H as default};