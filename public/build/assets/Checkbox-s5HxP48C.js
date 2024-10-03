import{r as g,j as n}from"./app-BKxzFGBx.js";import{a as U,g as H,s as w,r as L,b as N,c as f,d as V,m as X,e as M,u as Y}from"./DefaultPropsProvider-BdS6nueG.js";import{u as Z}from"./InputBase-4hWtwl0Z.js";import{B as _}from"./ButtonBase-ZZHDPnUv.js";import{u as ee}from"./useControlled-BII1iCiW.js";import{c as R}from"./createSvgIcon-DNHAV2hH.js";import{c as E}from"./createSimplePaletteValueFilter-bm0fmN_7.js";function oe(e){return U("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=e=>{const{classes:o,checked:t,disabled:c,edge:s}=e,i={root:["root",t&&"checked",c&&"disabled",s&&`edge${f(s)}`],input:["input"]};return V(i,oe,o)},se=w(_)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:o})=>e==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:o})=>e==="end"&&o.size!=="small",style:{marginRight:-12}}]}),ae=w("input",{shouldForwardProp:L})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ne=g.forwardRef(function(o,t){const{autoFocus:c,checked:s,checkedIcon:i,className:d,defaultChecked:l,disabled:k,disableFocusRipple:b=!1,edge:p=!1,icon:y,id:B,inputProps:z,inputRef:C,name:x,onBlur:u,onChange:h,onFocus:P,readOnly:q,required:D=!1,tabIndex:T,type:v,value:F,...A}=o,[j,G]=ee({controlled:s,default:!!l,name:"SwitchBase",state:"checked"}),r=Z(),J=a=>{P&&P(a),r&&r.onFocus&&r.onFocus(a)},K=a=>{u&&u(a),r&&r.onBlur&&r.onBlur(a)},Q=a=>{if(a.nativeEvent.defaultPrevented)return;const O=a.target.checked;G(O),h&&h(a,O)};let m=k;r&&typeof m>"u"&&(m=r.disabled);const W=v==="checkbox"||v==="radio",S={...o,checked:j,disabled:m,disableFocusRipple:b,edge:p},$=te(S);return n.jsxs(se,{component:"span",className:N($.root,d),centerRipple:!0,focusRipple:!b,disabled:m,tabIndex:null,role:void 0,onFocus:J,onBlur:K,ownerState:S,ref:t,...A,children:[n.jsx(ae,{autoFocus:c,checked:s,defaultChecked:l,className:$.input,disabled:m,id:W?B:void 0,name:x,onChange:Q,readOnly:q,ref:C,required:D,ownerState:S,tabIndex:T,type:v,...v==="checkbox"&&F===void 0?{}:{value:F},...z}),j?i:y]})}),ce=R(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),re=R(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ie=R(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function le(e){return U("MuiCheckbox",e)}const I=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),de=e=>{const{classes:o,indeterminate:t,color:c,size:s}=e,i={root:["root",t&&"indeterminate",`color${f(c)}`,`size${f(s)}`]},d=V(i,le,o);return{...o,...d}},pe=w(ne,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${f(t.size)}`],t.color!=="default"&&o[`color${f(t.color)}`]]}})(X(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:M(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(E()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:M(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(E()).map(([o])=>({props:{color:o},style:{[`&.${I.checked}, &.${I.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${I.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),ue=n.jsx(re,{}),he=n.jsx(ce,{}),me=n.jsx(ie,{}),ye=g.forwardRef(function(o,t){const c=Y({props:o,name:"MuiCheckbox"}),{checkedIcon:s=ue,color:i="primary",icon:d=he,indeterminate:l=!1,indeterminateIcon:k=me,inputProps:b,size:p="medium",disableRipple:y=!1,className:B,...z}=c,C=l?k:d,x=l?k:s,u={...c,disableRipple:y,color:i,indeterminate:l,size:p},h=de(u);return n.jsx(pe,{type:"checkbox",inputProps:{"data-indeterminate":l,...b},icon:g.cloneElement(C,{fontSize:C.props.fontSize??p}),checkedIcon:g.cloneElement(x,{fontSize:x.props.fontSize??p}),ownerState:u,ref:t,className:N(h.root,B),...z,classes:h})});export{ye as C};
