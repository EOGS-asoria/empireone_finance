import{u as s,j as t,h as e}from"./app-3jIamv-p.js";import l from"./update-section-4wRxzkRH.js";import n from"./delete-section-CXgFqdwq.js";import{T as d,a as c,b as x,c as m,d as r,e as h}from"./TableRow-DNZ-Wp2p.js";import{P as j}from"./Paper-DjWi0n4F.js";import"./department-thunk-D9VYy8Tb.js";import"./Snackbar-p25xzclL.js";import"./DefaultPropsProvider-CultUzqc.js";import"./useSlot-BKIjwuaw.js";import"./resolveComponentProps-Dg1vdYOb.js";import"./ButtonBase-BA2Tf-Fk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B9j9XIUT.js";import"./IconButton-DlAJrdyf.js";import"./useTheme-DnrImtw5.js";import"./useSlotProps-TVY9aIfw.js";import"./Modal-Dskmuu2J.js";import"./ownerWindow-6z4QwRpV.js";import"./utils-CTa3tEFy.js";import"./Grow-B-3SlRXu.js";import"./Edit-BNcdNAda.js";import"./Drawer-Dyx424Zs.js";import"./index-NOo54Jk5.js";import"./Slide-CW16OOjC.js";import"./debounce-Be36O1Ab.js";import"./Box-wCWSmHga.js";import"./extendSxProp-CsOHeTh9.js";import"./TextField-B_NI4FUE.js";import"./Select-DuyLuBAu.js";import"./InputBase-C0hKGzX-.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Ckn9eBTd.js";import"./Popover-Oj-A0Q0r.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-D4rmjPZw.js";import"./useId-ZX7LdyS1.js";import"./CircularProgress-D4XMWrNT.js";import"./Delete-B69RiE5r.js";import"./Typography-Bao2IW_j.js";function ot(){const{departments:i}=s(o=>o.department);return console.log("departments",i),t.jsx(d,{component:j,children:t.jsxs(c,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(x,{children:t.jsxs(m,{children:[t.jsx(r,{children:"Employee ID"}),t.jsx(r,{children:"Created At"}),t.jsx(r,{children:"Action"})]})}),t.jsx(h,{children:i==null?void 0:i.data.map((o,p)=>{const a=e(o.dob,"YYYY-MM-DD");return e().diff(a,"years"),t.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(r,{component:"th",scope:"row",children:o.name}),t.jsx(r,{children:o.created_at}),t.jsx(r,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(l,{data:o}),t.jsx(n,{data:o})]})})]},p)})})]})})}export{ot as default};