import{r as T,m as h,a as k}from"./resolveComponentProps-TLKj9-Es.js";import{u as E}from"./ButtonBase-ZZHDPnUv.js";function j(o,r){const{className:S,elementType:P,ownerState:n,externalForwardedProps:w,getSlotOwnerState:s,internalForwardedProps:p,...m}=r,{component:l,slots:t={[o]:void 0},slotProps:O={[o]:void 0},...x}=w,a=t[o]||P,e=T(O[o],n),{props:{component:c,...d},internalRef:y}=h({className:S,...m,externalForwardedProps:o==="root"?x:void 0,externalSlotProps:e}),F=E(y,e==null?void 0:e.ref,r.ref),f=s?s(d):{},g={...n,...f},i=o==="root"?c||l:c,u=k(a,{...o==="root"&&!l&&!t[o]&&p,...o!=="root"&&!t[o]&&p,...d,...i&&{as:i},ref:F},g);return Object.keys(f).forEach(C=>{delete u[C]}),[a,u]}export{j as u};
