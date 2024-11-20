import{r as d,j as e}from"./app-BZXu2kkj.js";import{C as u}from"./Close-C6gCYRPx.js";import f from"./mark-paid-section-BAOt1Pvw.js";import{B as w}from"./Button-Bcb6Q1HP.js";import{D as C}from"./Dialog-DH39hhWh.js";import{T as x,a as T,b as l,c as r,d as _}from"./TableRow-CjMRMzgo.js";import{I as D}from"./IconButton-DGsn4zcQ.js";import"./createSvgIcon-BlP5tmDN.js";import"./DefaultPropsProvider-DHU_4z81.js";import"./loan-record-thunk-CKBRNCiH.js";import"./createSimplePaletteValueFilter-DJTqrogc.js";import"./Paper-q6jCntew.js";import"./useTheme-DkxBl6Ou.js";import"./Modal-DZfgMvjK.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BTMXH2pL.js";import"./utils-DwO_k2f6.js";function z({data:s}){var h;const[m,n]=d.useState(!1),p=()=>{n(!0)},c=()=>{n(!1)};let t=[];return s!=null&&s.loan_records&&(t=[...s==null?void 0:s.loan_records].sort((o,i)=>{const j=new Date(o.due_date),b=new Date(i.due_date);return j-b})),e.jsxs(d.Fragment,{children:[e.jsx(w,{variant:"outlined",onClick:p,fullWidth:!0,children:"PAYMENT"}),e.jsxs(C,{fullWidth:!0,open:m,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(x,{"aria-label":"simple table",children:[e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(r,{children:e.jsx("div",{className:"font-black",children:"Loan Information (CHECK PAYMENT)"})}),e.jsx(r,{align:"right",children:e.jsx(D,{edge:"start",color:"inherit",onClick:c,"aria-label":"close",children:e.jsx(u,{})})})]})}),e.jsxs(_,{children:[e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Fullname"}),e.jsxs(r,{children:[s==null?void 0:s.user.employee_fname," ",s==null?void 0:s.user.employee_lname]})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Position"}),e.jsx(r,{children:((h=s==null?void 0:s.employee)==null?void 0:h.position)??"NA"})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Desired Amount"}),e.jsxs(r,{children:["₱ ",(s==null?void 0:s.desired_amount)??0]})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Term"}),e.jsxs(r,{children:[s==null?void 0:s.term," months"]})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Interest"}),e.jsxs(r,{children:["₱ ",s==null?void 0:s.interest]})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Net"}),e.jsxs(r,{children:["₱ ",s==null?void 0:s.net]})]}),e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Balance"}),e.jsxs(r,{children:["₱ ",s==null?void 0:s.balance.toFixed(2)]})]})]})]}),e.jsxs(x,{"aria-label":"simple table",children:[e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:"Due Date"}),e.jsx(r,{children:"Amount"}),e.jsx(r,{children:"Action"})]}),t.map((o,i)=>e.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:o.due_date}),e.jsxs(r,{children:["₱ ",s==null?void 0:s.bi_amortization.toFixed(2)]}),e.jsx(r,{children:e.jsx(f,{data:o})})]},i))]})]})]})}export{z as default};