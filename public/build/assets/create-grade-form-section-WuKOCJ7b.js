import{r as d,u as S,i as R,j as s,s as I,h as q,z as w}from"./app-CcFxKgAD.js";import{s as M}from"./grade-thunk-DYBQIqcu.js";import{F as T,I as _,S as C}from"./Select-1tlIs-Yj.js";import{M as i}from"./MenuItem-DLxh1JzN.js";import{F as E,T as N}from"./TextField-C5btmMzU.js";import{T as k,a as Q,b as W,c as F,d as u,e as G}from"./TableRow-nvd5l806.js";import{P as H}from"./Paper-CNqsZyLv.js";import{B as D}from"./Button-DebYElXm.js";import{S as V}from"./Save-B2nSVnnd.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./InputBase-kwyMu21R.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C7QlkSNc.js";import"./useTheme-BAygJoIP.js";import"./ButtonBase-DSh1E41x.js";import"./extendSxProp-BQ60it6R.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Popover-rJp2u0B9.js";import"./useSlot-BkWWeJSN.js";import"./resolveComponentProps-DWerkNmX.js";import"./Modal-CSdbskgH.js";import"./utils-B0SWmCla.js";import"./Grow-R3vvtVcN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-4kJsEyVd.js";import"./useSlotProps-nnbFR5-n.js";import"./useControlled-CX5DjXqW.js";import"./useId-K_MTrqA2.js";import"./createSvgIcon-Hk2aX3dH.js";import"./listItemTextClasses-C8sEiXa3.js";function Ce(){const[p,x]=d.useState([]),[l,j]=d.useState({}),[f,h]=d.useState(!1),[o,b]=d.useState({}),{students:n,search:g}=S(e=>e.instructors),{user:P}=S(e=>e.app),y=R();d.useEffect(()=>{if(n.length>0){const e=n.map(t=>{var r;return{...t,user_id:(r=t.user)==null?void 0:r.user_id,score:""}});x(e)}},[n.length]);const z=(e,t)=>{const r=e.target.value;x(c=>c.map(a=>a.user_id===t?{...a,score:r}:a)),r!==""&&b(c=>{const{[t]:a,...m}=c;return m})},L=()=>{let e=!0,t={};return l.lecture||(t.lecture="Lecture is required",e=!1),l.assessment||(t.assessment="Assessment is required",e=!1),p.forEach(r=>{r.score===""&&(t[r.user_id]="Score is required",e=!1)}),b(t),e},A=async()=>{if(console.log("records",p.map(e=>e==null?void 0:e.score)),!!L()){h(!0);try{const e=await I.dispatch(M({...l,user_id:P.user_id,subject_code:g.subject_code,search:g,records:p,date:q().format("LL")}));y(w([])),h(!1)}catch(e){console.error("Submission error:",e),h(!1)}}};return s.jsxs("div",{className:"flex flex-col gap-5",children:[n.length!==0&&s.jsxs("div",{className:"flex gap-5",children:[s.jsxs(T,{fullWidth:!0,error:!!o.lecture,children:[s.jsx(_,{id:"demo-simple-select-label",children:"Lecture"}),s.jsxs(C,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"lecture",label:"Lecture",onChange:e=>j({...l,[e.target.name]:e.target.value}),value:l.lecture??"",children:[s.jsx(i,{value:"Examination",children:"Examination (30%)"}),s.jsx(i,{value:"Quizzes",children:"Quizzes (30%)"}),s.jsx(i,{value:"Projects/Assignment",children:"Projects/Assignment (20%)"}),s.jsx(i,{value:"Class Participation",children:"Class Participation (20%)"})]}),s.jsx(E,{children:o.lecture??""})]}),s.jsxs(T,{fullWidth:!0,error:!!o.assessment,children:[s.jsx(_,{id:"demo-simple-select-label",children:"Assessment"}),s.jsxs(C,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"assessment",label:"Assessment",onChange:e=>j({...l,[e.target.name]:e.target.value}),children:[s.jsx(i,{value:"Prelim",children:"Prelim"}),s.jsx(i,{value:"Midterm",children:"Midterm"}),s.jsx(i,{value:"Final",children:"Final"})]}),s.jsx(E,{children:o.assessment??""})]})]}),s.jsx(k,{component:H,children:s.jsxs(Q,{sx:{minWidth:650},"aria-label":"a dense table",children:[s.jsx(W,{children:s.jsxs(F,{children:[s.jsx(u,{children:"Students"}),s.jsx(u,{children:"Grades"})]})}),s.jsx(G,{children:n.map((e,t)=>{var r,c,a,m;return s.jsxs(F,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsxs(u,{component:"th",scope:"row",children:[(r=e==null?void 0:e.user)==null?void 0:r.fname," ",(c=e==null?void 0:e.user)==null?void 0:c.lname]}),s.jsx(u,{children:s.jsx(N,{type:"number",value:e==null?void 0:e.score,onChange:B=>{var v;return z(B,(v=e==null?void 0:e.user)==null?void 0:v.user_id,e==null?void 0:e.user)},label:"Score",variant:"outlined",error:!!o[(a=e==null?void 0:e.user)==null?void 0:a.user_id],helperText:o[(m=e==null?void 0:e.user)==null?void 0:m.user_id]??""})})]},t)})})]})}),n.length!==0&&s.jsx("div",{className:"flex w-full items-end justify-end",children:s.jsxs(D,{onClick:A,variant:"contained",className:"flex gap-2",disabled:f,children:[s.jsx(V,{}),s.jsx("div",{children:f?"Submitting...":"Add Records"})]})})]})}export{Ce as default};
