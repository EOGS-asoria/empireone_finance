import{r as y,j as x}from"./app-BKxzFGBx.js";import{a as I,g as C,s as R,c as z,m as w,u as b,b as j,d as M}from"./DefaultPropsProvider-BdS6nueG.js";function N(o){return I("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $=o=>{const{color:t,fontSize:e,classes:i}=o,r={root:["root",t!=="inherit"&&`color${z(t)}`,`fontSize${z(e)}`]};return M(r,N,i)},A=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="inherit"&&t[`color${z(e.color)}`],t[`fontSize${z(e.fontSize)}`]]}})(w(({theme:o})=>{var t,e,i,r,l,d,n,u,c,f,a,S,v,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(r=(t=o.transitions)==null?void 0:t.create)==null?void 0:r.call(t,"fill",{duration:(i=(e=(o.vars??o).transitions)==null?void 0:e.duration)==null?void 0:i.shorter}),variants:[{props:s=>!s.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((d=(l=o.typography)==null?void 0:l.pxToRem)==null?void 0:d.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((u=(n=o.typography)==null?void 0:n.pxToRem)==null?void 0:u.call(n,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((f=(c=o.typography)==null?void 0:c.pxToRem)==null?void 0:f.call(c,35))||"2.1875rem"}},...Object.entries((o.vars??o).palette).filter(([,s])=>s&&s.main).map(([s])=>{var m,g;return{props:{color:s},style:{color:(g=(m=(o.vars??o).palette)==null?void 0:m[s])==null?void 0:g.main}}}),{props:{color:"action"},style:{color:(S=(a=(o.vars??o).palette)==null?void 0:a.action)==null?void 0:S.active}},{props:{color:"disabled"},style:{color:(p=(v=(o.vars??o).palette)==null?void 0:v.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),h=y.forwardRef(function(t,e){const i=b({props:t,name:"MuiSvgIcon"}),{children:r,className:l,color:d="inherit",component:n="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:f=!1,titleAccess:a,viewBox:S="0 0 24 24",...v}=i,p=y.isValidElement(r)&&r.type==="svg",s={...i,color:d,component:n,fontSize:u,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:S,hasSvgAsChild:p},m={};f||(m.viewBox=S);const g=$(s);return x.jsxs(A,{as:n,className:j(g.root,l),focusable:"false",color:c,"aria-hidden":a?void 0:!0,role:a?"img":void 0,ref:e,...m,...v,...p&&r.props,ownerState:s,children:[p?r.props.children:r,a?x.jsx("title",{children:a}):null]})});h&&(h.muiName="SvgIcon");function U(o,t){function e(i,r){return x.jsx(h,{"data-testid":`${t}Icon`,ref:r,...i,children:o})}return e.muiName=h.muiName,y.memo(y.forwardRef(e))}export{U as c};
