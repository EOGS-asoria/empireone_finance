import{r as a,u as B,j as e,s as f}from"./app-Sh-hAmbv.js";import{h}from"./moment-C5S46NFB.js";import F from"./request-calculation-section-BTR_t1BN.js";import{s as M,a as N}from"./loan-record-thunk-BA8ZQen8.js";import{B as _}from"./Button-D1ktSQl5.js";import{D as w}from"./Dialog-Ch_lkYME.js";import{T as u}from"./Toolbar-B0anWzUa.js";import{T as x}from"./TextField-CrbT4RVF.js";import{T as j}from"./Typography-Ba0-YfuE.js";import"./Close-BYp5KUfi.js";import"./createSvgIcon-DxBRSgJK.js";import"./DefaultPropsProvider-BaSAp7G-.js";import"./TableRow-B52p-YeU.js";import"./IconButton-Bc8oRR-l.js";import"./createSimplePaletteValueFilter-BAchQbJy.js";import"./Paper-DJ20X4jm.js";import"./useTheme-D25useIl.js";import"./Modal-BHKpXjng.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BanrXmrs.js";import"./utils-DtzvcPR6.js";import"./InputBase-DlkzrSQO.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BcrmnTLk.js";import"./extendSxProp-BxLsc5mA.js";import"./debounce-Be36O1Ab.js";import"./Popover-DRZcyKFj.js";import"./Grow-C3dxvyKM.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-Bw3EBkBU.js";import"./useSlotProps-ClVemLjF.js";import"./useThemeProps-BMIfz57D.js";function ft(){const[g,l]=a.useState(!1),[t,i]=a.useState({term:3,desired_amount:null,interest:0,net:0,bi_amortization:0,interest_rate:.05,schedule:[]});a.useState([]);const[r,b]=a.useState({}),[y,n]=a.useState(!1),{user:d}=B(o=>o.app);function S(o,s,E,D){const z=h().date(10),c=[];for(let m=0;m<D;m++){const k=z.clone().add(Math.floor(m/2),"months").date(m%2===0?10:25);c.push({date:k.format("LL"),payment:s.toFixed(2)})}return c}a.useEffect(()=>{const o=S(t.net,t.bi_amortization,t.term,6);i({...t,interest:(t.desired_amount??0)*(t.interest_rate??0)*(t.term??0),net:(t.desired_amount??0)-(t.desired_amount??0)*(t.interest_rate??0)*(t.term??0),bi_amortization:(t.desired_amount??0)/(t.term??1)/2,schedule:o,...d})},[(t==null?void 0:t.desired_amount)??""]),console.log("form",t);const v=()=>l(!0),p=()=>l(!1);function C(o){i({...t,[o.target.name]:Number(o.target.value)})}async function T(o){try{n(!0);const s=await f.dispatch(M({...t,loan_record_id:h().format("MMDDYYYYHHmmss"),status:"Pending"}));s.status==200?(f.dispatch(N(d.employee_id)),n(!1),l(!1),i({term:3,desired_amount:0,interest:0,net:0,bi_amortization:0,interest_rate:.05,schedule:[]})):(n(!1),b(s.response.data.errors))}catch{n(!1)}}return e.jsxs(a.Fragment,{children:[e.jsx(_,{variant:"outlined",onClick:v,children:"Create Loan Request"}),e.jsxs(w,{fullWidth:!0,open:g,onClose:p,children:[e.jsx(F,{handleClose:p,user:d,form:t,setForm:i}),e.jsxs(u,{className:"flex-col gap-3 flex",children:[e.jsx(x,{onChange:o=>i({...t,[o.target.name]:o.target.value}),error:!!(r!=null&&r.purpose),helperText:(r==null?void 0:r.purpose)??"",name:"purpose",type:"text",label:"Purpose of Borrowing",variant:"outlined",fullWidth:!0}),e.jsx(x,{onChange:C,error:!!(r!=null&&r.desired_amount),helperText:(r==null?void 0:r.desired_amount)??"",name:"desired_amount",type:"number",label:"Desired Amount",variant:"outlined",fullWidth:!0})]}),e.jsxs(u,{className:"flex-col",children:[e.jsx(j,{variant:"h6",gutterBottom:!0,children:"Amortization Schedule"}),t.schedule.map((o,s)=>e.jsx(j,{children:e.jsxs("div",{className:"flex items-center justify-between w-96",children:[e.jsxs("div",{children:["Date: ",o.date]}),e.jsxs("div",{children:["Payment: ",t.bi_amortization.toFixed(2)]})]})},s))]}),e.jsx(u,{className:"flex items-end justify-end",children:e.jsx(_,{disabled:y,variant:"contained",onClick:T,children:"SUBMIT"})})]})]})}export{ft as default};