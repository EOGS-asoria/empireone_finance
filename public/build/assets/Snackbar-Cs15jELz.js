import{j as s,r as g}from"./app-BKxzFGBx.js";import{g as H,a as B,s as E,c as R,m as N,H as U,G,u as W,b as Q,d as D,I as ut}from"./DefaultPropsProvider-BdS6nueG.js";import{u as V}from"./useSlot-C_GmNxEW.js";import{c as z}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as A}from"./createSvgIcon-DNHAV2hH.js";import{P as _}from"./Paper-CF4dgFF6.js";import{I as dt}from"./IconButton-CAGCXe_x.js";import{u as pt,b as $,d as ft}from"./ButtonBase-ZZHDPnUv.js";import{e as X}from"./resolveComponentProps-TLKj9-Es.js";import{u as gt}from"./useTheme-DJv7-wFq.js";import{u as mt}from"./useSlotProps-9HqtNA5l.js";import{g as vt}from"./Modal-Ds47GXu0.js";import{o as T}from"./ownerWindow-6z4QwRpV.js";import{G as ht}from"./Grow-CaVqfK8Z.js";function xt(t){return B("MuiAlert",t)}const K=H("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ct=A(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),bt=A(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),St=A(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),yt=A(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),kt=A(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Et=t=>{const{variant:e,color:n,severity:o,classes:l}=t,u={root:["root",`color${R(n||o)}`,`${e}${R(n||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return D(u,xt,l)},Rt=E(_,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${R(n.color||n.severity)}`]]}})(N(({theme:t})=>{const e=t.palette.mode==="light"?U:G,n=t.palette.mode==="light"?G:U;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(z(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:n(t.palette[o].light,.9),[`& .${K.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(z(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${K.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(z(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)}}}))]}})),At=E("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Mt=E("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Z=E("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),q={success:s.jsx(Ct,{fontSize:"inherit"}),warning:s.jsx(bt,{fontSize:"inherit"}),error:s.jsx(St,{fontSize:"inherit"}),info:s.jsx(yt,{fontSize:"inherit"})},_t=g.forwardRef(function(e,n){const o=W({props:e,name:"MuiAlert"}),{action:l,children:u,className:x,closeText:p="Close",color:m,components:v={},componentsProps:h={},icon:f,iconMapping:y=q,onClose:b,role:i="alert",severity:c="success",slotProps:C={},slots:r={},variant:a="standard",...d}=o,S={...o,color:m,severity:c,variant:a,colorSeverity:m||c},k=Et(S),I={slots:{closeButton:v.CloseButton,closeIcon:v.CloseIcon,...r},slotProps:{...h,...C}},[M,w]=V("closeButton",{elementType:dt,externalForwardedProps:I,ownerState:S}),[L,j]=V("closeIcon",{elementType:kt,externalForwardedProps:I,ownerState:S});return s.jsxs(Rt,{role:i,elevation:0,ownerState:S,className:Q(k.root,x),ref:n,...d,children:[f!==!1?s.jsx(At,{ownerState:S,className:k.icon,children:f||y[c]||q[c]}):null,s.jsx(Mt,{ownerState:S,className:k.message,children:u}),l!=null?s.jsx(Z,{ownerState:S,className:k.action,children:l}):null,l==null&&b?s.jsx(Z,{ownerState:S,className:k.action,children:s.jsx(M,{size:"small","aria-label":p,title:p,color:"inherit",onClick:b,...w,children:s.jsx(L,{fontSize:"small",...j})})}):null]})});function Y(t){return t.substring(2).toLowerCase()}function wt(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}function Lt(t){const{children:e,disableReactTree:n=!1,mouseEvent:o="onClick",onClickAway:l,touchEvent:u="onTouchEnd"}=t,x=g.useRef(!1),p=g.useRef(null),m=g.useRef(!1),v=g.useRef(!1);g.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const h=pt(vt(e),p),f=$(i=>{const c=v.current;v.current=!1;const C=T(p.current);if(!m.current||!p.current||"clientX"in i&&wt(i,C))return;if(x.current){x.current=!1;return}let r;i.composedPath?r=i.composedPath().indexOf(p.current)>-1:r=!C.documentElement.contains(i.target)||p.current.contains(i.target),!r&&(n||!c)&&l(i)}),y=i=>c=>{v.current=!0;const C=e.props[i];C&&C(c)},b={ref:h};return u!==!1&&(b[u]=y(u)),g.useEffect(()=>{if(u!==!1){const i=Y(u),c=T(p.current),C=()=>{x.current=!0};return c.addEventListener(i,f),c.addEventListener("touchmove",C),()=>{c.removeEventListener(i,f),c.removeEventListener("touchmove",C)}}},[f,u]),o!==!1&&(b[o]=y(o)),g.useEffect(()=>{if(o!==!1){const i=Y(o),c=T(p.current);return c.addEventListener(i,f),()=>{c.removeEventListener(i,f)}}},[f,o]),s.jsx(g.Fragment,{children:g.cloneElement(e,b)})}function jt(t={}){const{autoHideDuration:e=null,disableWindowBlurListener:n=!1,onClose:o,open:l,resumeHideDuration:u}=t,x=ft();g.useEffect(()=>{if(!l)return;function r(a){a.defaultPrevented||a.key==="Escape"&&(o==null||o(a,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[l,o]);const p=$((r,a)=>{o==null||o(r,a)}),m=$(r=>{!o||r==null||x.start(r,()=>{p(null,"timeout")})});g.useEffect(()=>(l&&m(e),x.clear),[l,e,m,x]);const v=r=>{o==null||o(r,"clickaway")},h=x.clear,f=g.useCallback(()=>{e!=null&&m(u??e*.5)},[e,u,m]),y=r=>a=>{const d=r.onBlur;d==null||d(a),f()},b=r=>a=>{const d=r.onFocus;d==null||d(a),h()},i=r=>a=>{const d=r.onMouseEnter;d==null||d(a),h()},c=r=>a=>{const d=r.onMouseLeave;d==null||d(a),f()};return g.useEffect(()=>{if(!n&&l)return window.addEventListener("focus",f),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",h)}},[n,l,f,h]),{getRootProps:(r={})=>{const a={...X(t),...X(r)};return{role:"presentation",...r,...a,onBlur:y(a),onFocus:b(a),onMouseEnter:i(a),onMouseLeave:c(a)}},onClickAway:v}}function It(t){return B("MuiSnackbarContent",t)}H("MuiSnackbarContent",["root","message","action"]);const Ot=t=>{const{classes:e}=t;return D({root:["root"],action:["action"],message:["message"]},It,e)},Pt=E(_,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,e)=>e.root})(N(({theme:t})=>{const e=t.palette.mode==="light"?.8:.98,n=ut(t.palette.background.default,e);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(n),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),zt=E("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0"}),Tt=E("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),$t=g.forwardRef(function(e,n){const o=W({props:e,name:"MuiSnackbarContent"}),{action:l,className:u,message:x,role:p="alert",...m}=o,v=o,h=Ot(v);return s.jsxs(Pt,{role:p,square:!0,elevation:6,className:Q(h.root,u),ownerState:v,ref:n,...m,children:[s.jsx(zt,{className:h.message,ownerState:v,children:x}),l?s.jsx(Tt,{className:h.action,ownerState:v,children:l}):null]})});function Ht(t){return B("MuiSnackbar",t)}H("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Bt=t=>{const{classes:e,anchorOrigin:n}=t,o={root:["root",`anchorOrigin${R(n.vertical)}${R(n.horizontal)}`]};return D(o,Ht,e)},J=E("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`anchorOrigin${R(n.anchorOrigin.vertical)}${R(n.anchorOrigin.horizontal)}`]]}})(N(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:e})=>e.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:e})=>e.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),te=g.forwardRef(function(e,n){const o=W({props:e,name:"MuiSnackbar"}),l=gt(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:x,anchorOrigin:{vertical:p,horizontal:m}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:h,className:f,ClickAwayListenerProps:y,ContentProps:b,disableWindowBlurListener:i=!1,message:c,onBlur:C,onClose:r,onFocus:a,onMouseEnter:d,onMouseLeave:S,open:k,resumeHideDuration:I,TransitionComponent:M=ht,transitionDuration:w=u,TransitionProps:{onEnter:L,onExited:j,...tt}={},...et}=o,O={...o,anchorOrigin:{vertical:p,horizontal:m},autoHideDuration:v,disableWindowBlurListener:i,TransitionComponent:M,transitionDuration:w},ot=Bt(O),{getRootProps:nt,onClickAway:rt}=jt({...O}),[st,F]=g.useState(!0),at=mt({elementType:J,getSlotProps:nt,externalForwardedProps:et,ownerState:O,additionalProps:{ref:n},className:[ot.root,f]}),it=P=>{F(!0),j&&j(P)},lt=(P,ct)=>{F(!1),L&&L(P,ct)};return!k&&st?null:s.jsx(Lt,{onClickAway:rt,...y,children:s.jsx(J,{...at,children:s.jsx(M,{appear:!0,in:k,timeout:w,direction:p==="top"?"down":"up",onEnter:lt,onExited:it,...tt,children:h||s.jsx($t,{message:c,action:x,...b})})})})});export{_t as A,te as S,$t as a};
