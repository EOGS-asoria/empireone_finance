import{a as i,d as m,r as p,s as a,j as r}from"./app-Sh-hAmbv.js";import s from"./layout-BEtwUo7-.js";import e from"./dashboard-card-section-BpNNPq-d.js";import"./dashboard-line-graph-Dd_-fvHS.js";import n from"./dashboard-bar-graph-CUZKzP_n.js";import"./index-B4OOlFtn.js";import"./app-thunk-BVMxqRwq.js";import"./createSvgIcon-DxBRSgJK.js";import"./DefaultPropsProvider-BaSAp7G-.js";import"./Paper-DJ20X4jm.js";import"./useTheme-D25useIl.js";import"./index-Bw3EBkBU.js";import"./ListItem-BYNPKLWs.js";import"./useThemeProps-BMIfz57D.js";import"./createSimplePaletteValueFilter-BAchQbJy.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-BHKpXjng.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BanrXmrs.js";import"./utils-DtzvcPR6.js";import"./useSlotProps-ClVemLjF.js";import"./isHostComponent-DVu5iVWx.js";import"./Popover-DRZcyKFj.js";import"./debounce-Be36O1Ab.js";import"./Grow-C3dxvyKM.js";import"./IconButton-Bc8oRR-l.js";import"./Toolbar-B0anWzUa.js";import"./Box-aZAYn40s.js";import"./extendSxProp-BxLsc5mA.js";import"./index-BcrmnTLk.js";import"./Close-BYp5KUfi.js";import"./react-is.production.min-DUDD-a5e.js";import"./notification-section-BDUAgrDP.js";import"./Button-D1ktSQl5.js";import"./Typography-Ba0-YfuE.js";import"./listItemTextClasses-Czl1hqsD.js";import"./Stack-C7EJD1bw.js";import"./logout-section-CcdiLjEv.js";import"./Dialog-Ch_lkYME.js";import"./DialogContent-Cjm_VIHF.js";import"./DialogActions-Kh3JFHZr.js";import"./Collapse-DVmfsSt6.js";import"./index-BKbuqcI9.js";async function c(){try{return await i.get("/api/dashboard")}catch(t){return t}}function d(){return async function(t,h){const o=await c();t(m.actions.setDashboards(o.data))}}function or(){return p.useEffect(()=>{a.dispatch(d())},[]),r.jsxs(s,{children:[r.jsx(e,{}),r.jsx("div",{className:"flex w-full items-center justify-center",children:r.jsx("div",{className:"w-5/6",children:r.jsx(n,{})})})]})}export{or as default};