import{r as l,j as y}from"./app-BKxzFGBx.js";import{g as T,a as V,s as j,r as L,m as P,e as d,u as E,b as C,d as F}from"./DefaultPropsProvider-BdS6nueG.js";import{L as x}from"./Popover-CP8qj5SC.js";import{B as G,a as N,u as U}from"./ButtonBase-ZZHDPnUv.js";import{d as $,l as I,c as M}from"./listItemTextClasses-BcLjaIrk.js";function D(e){return V("MuiMenuItem",e)}const i=T("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=(e,a)=>{const{ownerState:t}=e;return[a.root,t.dense&&a.dense,t.divider&&a.divider,!t.disableGutters&&a.gutters]},z=e=>{const{disabled:a,dense:t,divider:s,disableGutters:n,selected:c,classes:o}=e,r=F({root:["root",t&&"dense",a&&"disabled",!n&&"gutters",s&&"divider",c&&"selected"]},D,o);return{...o,...r}},W=j(G,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:H})(P(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${I.root}`]:{marginTop:0,marginBottom:0},[`& .${I.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36},variants:[{props:({ownerState:a})=>!a.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:a})=>a.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:a})=>!a.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:a})=>a.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${M.root} svg`]:{fontSize:"1.25rem"}}}]}))),X=l.forwardRef(function(a,t){const s=E({props:a,name:"MuiMenuItem"}),{autoFocus:n=!1,component:c="li",dense:o=!1,divider:g=!1,disableGutters:r=!1,focusVisibleClassName:O,role:k="menuitem",tabIndex:f,className:R,...B}=s,v=l.useContext(x),b=l.useMemo(()=>({dense:o||v.dense||!1,disableGutters:r}),[v.dense,o,r]),p=l.useRef(null);N(()=>{n&&p.current&&p.current.focus()},[n]);const w={...s,dense:b.dense,divider:g,disableGutters:r},u=z(s),S=U(p,t);let m;return s.disabled||(m=f!==void 0?f:-1),y.jsx(x.Provider,{value:b,children:y.jsx(W,{ref:S,role:k,tabIndex:m,component:c,focusVisibleClassName:C(u.focusVisible,O),className:C(u.root,R),...B,ownerState:w,classes:u})})});export{X as M};
