import{r as P,j as y}from"./app-BKxzFGBx.js";import{a as g,g as x,s as b,m as w,u as R,b as C,e as u,d as h,k as c}from"./DefaultPropsProvider-BdS6nueG.js";import{u as k}from"./useTheme-DJv7-wFq.js";function $(e){return g("MuiPaper",e)}x("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const q=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return h(n,$,t)},M=b("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(w(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),E=P.forwardRef(function(a,o){var d;const r=R({props:a,name:"MuiPaper"}),t=k(),{className:n,component:i="div",elevation:s=1,square:f=!1,variant:l="elevation",...v}=r,p={...r,component:i,elevation:s,square:f,variant:l},m=q(p);return y.jsx(M,{as:i,ownerState:p,className:C(m.root,n),ref:o,...v,style:{...l==="elevation"&&{"--Paper-shadow":(t.vars||t).shadows[s],...t.vars&&{"--Paper-overlay":(d=t.vars.overlays)==null?void 0:d[s]},...!t.vars&&t.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${u("#fff",c(s))}, ${u("#fff",c(s))})`}},...v.style}})});export{E as P};
