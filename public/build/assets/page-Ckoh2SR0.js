import{a as i,d as m,r as a,s as p,j as r}from"./app-BQ3qUyPU.js";import s from"./layout-DiLx5JYs.js";import e from"./dashboard-card-section-Bc9GTood.js";import"./dashboard-line-graph-C4_s_D27.js";import n from"./dashboard-bar-graph-BoGrrRm1.js";import"./index-CjWAx5SF.js";import"./app-thunk-BBM-wjwE.js";import"./createSvgIcon-D_rqtzAi.js";import"./DefaultPropsProvider-C_DMwbwV.js";import"./Paper-BK4qS0JK.js";import"./useTheme-Cjl9AGst.js";import"./useThemeProps-COM4Chhy.js";import"./ListItem-DUUhwtSQ.js";import"./createSimplePaletteValueFilter-CVjiaD3x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CYpwmatT.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-Bd5N1r9K.js";import"./utils-CMXufnfG.js";import"./Grow-Dut8PiJH.js";import"./isHostComponent-DVu5iVWx.js";import"./Popover-CCVLWlP_.js";import"./debounce-Be36O1Ab.js";import"./IconButton-8NDlTvkq.js";import"./Toolbar-B-mVvb4U.js";import"./Box-9NTv6wwm.js";import"./extendSxProp-LMD2tYuT.js";import"./index-Co5LVBgP.js";import"./Close-c5eGF_cF.js";import"./notification-section-Cnd8Tg3J.js";import"./Button-GDBeewgZ.js";import"./Typography-uu7RhyHe.js";import"./listItemTextClasses-Dv8am-xX.js";import"./Stack-DvnPXmTV.js";import"./logout-section-DgT-N9W6.js";import"./Dialog-DjMbQ3o7.js";import"./DialogContent-Ceq6Ez8N.js";import"./DialogActions-DOz2hOOR.js";import"./Collapse-Xsg_pw-z.js";import"./index-BAdNXOpK.js";async function c(){try{return await i.get("/api/dashboard")}catch(t){return t}}function d(){return async function(t,h){const o=await c();t(m.actions.setDashboards(o.data))}}function $(){return a.useEffect(()=>{p.dispatch(d())},[]),r.jsxs(s,{children:[r.jsx(e,{}),r.jsx("div",{className:"flex w-full items-center justify-center",children:r.jsx("div",{className:"w-5/6",children:r.jsx(n,{})})})]})}export{$ as default};