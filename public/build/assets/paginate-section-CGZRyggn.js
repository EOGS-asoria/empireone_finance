import{u as p,j as a,y as c}from"./app-BZXu2kkj.js";import{S as m}from"./Stack-BoFRlb4Q.js";import{P as u}from"./Pagination-C7r4iodU.js";import"./DefaultPropsProvider-DHU_4z81.js";import"./useThemeProps-Bq3zbUhs.js";import"./useTheme-DkxBl6Ou.js";import"./extendSxProp-B1AFf2W0.js";import"./createSimplePaletteValueFilter-DJTqrogc.js";import"./createSvgIcon-BlP5tmDN.js";import"./useSlot-BTMXH2pL.js";function v(){const{loan_records:t}=p(e=>e.loan_records),r=window.location.href,s=new URL(r),o=s.searchParams.get("page"),i=s.searchParams.get("status");return a.jsx("div",{className:"py-5 flex items-center justify-end",children:a.jsx(m,{spacing:2,children:a.jsx(u,{defaultPage:parseInt(o),onChange:(e,n)=>c.visit("?page="+n+"&status="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{v as default};