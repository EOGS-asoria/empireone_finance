import{a as i,d as a,r as m,s,j as r}from"./app-BZXu2kkj.js";import p from"./layout-CO4hLr4f.js";import e from"./dashboard-card-section-BB3K2uDr.js";import"./dashboard-line-graph-D4fNhpEf.js";import n from"./dashboard-bar-graph-Bp-VefN2.js";import"./ListItem-B_NKWqsv.js";import"./useTheme-DkxBl6Ou.js";import"./DefaultPropsProvider-DHU_4z81.js";import"./useThemeProps-Bq3zbUhs.js";import"./createSimplePaletteValueFilter-DJTqrogc.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DZfgMvjK.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BTMXH2pL.js";import"./Paper-q6jCntew.js";import"./utils-DwO_k2f6.js";import"./Grow-BaXdvlKm.js";import"./isHostComponent-DVu5iVWx.js";import"./Popover-A5Smtlc6.js";import"./debounce-Be36O1Ab.js";import"./app-thunk-CY7vx57T.js";import"./createSvgIcon-BlP5tmDN.js";import"./IconButton-DGsn4zcQ.js";import"./Toolbar-BRiwl13t.js";import"./extendSxProp-B1AFf2W0.js";import"./index-u2RTrjdo.js";import"./Close-C6gCYRPx.js";import"./Snackbar-yiM8HH9x.js";import"./Button-Bcb6Q1HP.js";import"./Typography-B32WHFV2.js";import"./Stack-BoFRlb4Q.js";import"./logout-section-99vowCMj.js";import"./Dialog-DH39hhWh.js";import"./DialogContent-CrzXRWI1.js";import"./DialogActions-BpXnqigw.js";import"./notification-section-DHp9Z_Yj.js";import"./index-BiMTxQU4.js";async function c(){try{return await i.get("/api/dashboard")}catch(t){return t}}function d(){return async function(t,h){const o=await c();t(a.actions.setDashboards(o.data))}}function X(){return m.useEffect(()=>{s.dispatch(d())},[]),r.jsxs(p,{children:[r.jsx(e,{}),r.jsx("div",{className:"flex w-full items-center justify-center",children:r.jsx("div",{className:"w-5/6",children:r.jsx(n,{})})})]})}export{X as default};