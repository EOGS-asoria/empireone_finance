import{r as R,j as z}from"./app-BKxzFGBx.js";import{g as C,a as B,s as x,c as t,m as u,e as g,u as I,b as $,d as S}from"./DefaultPropsProvider-BdS6nueG.js";import{c as f}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as k}from"./ButtonBase-ZZHDPnUv.js";function O(o){return B("MuiIconButton",o)}const j=C("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),M=o=>{const{classes:e,disabled:a,color:s,edge:r,size:n}=o,i={root:["root",a&&"disabled",s!=="default"&&`color${t(s)}`,r&&`edge${t(r)}`,`size${t(n)}`]};return S(i,O,e)},E=x(k,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.color!=="default"&&e[`color${t(a.color)}`],a.edge&&e[`edge${t(a.edge)}`],e[`size${t(a.size)}`]]}})(u(({theme:o})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:g(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),u(({theme:o})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(o.palette).filter(f()).map(([e])=>({props:{color:e},style:{color:(o.vars||o).palette[e].main}})),...Object.entries(o.palette).filter(f()).map(([e])=>({props:{color:e,disableRipple:!1},style:{"&:hover":{backgroundColor:o.vars?`rgba(${(o.vars||o).palette[e].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:g((o.vars||o).palette[e].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}})),{props:{size:"small"},style:{padding:5,fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:o.typography.pxToRem(28)}}],[`&.${j.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}}))),P=R.forwardRef(function(e,a){const s=I({props:e,name:"MuiIconButton"}),{edge:r=!1,children:n,className:i,color:v="default",disabled:l=!1,disableFocusRipple:p=!1,disableRipple:c=!1,size:y="medium",...b}=s,d={...s,edge:r,color:v,disabled:l,disableFocusRipple:p,disableRipple:c,size:y},m=M(d);return z.jsx(E,{className:$(m.root,i),centerRipple:!0,focusRipple:!p,disabled:l,disableRipple:c,ref:a,...b,ownerState:d,children:n})});export{P as I};
