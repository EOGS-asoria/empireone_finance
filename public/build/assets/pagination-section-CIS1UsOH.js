import{u as m,j as s,y as u}from"./app-B3J6A2bz.js";import{P as l}from"./Pagination-DvA6ThFA.js";import"./DefaultPropsProvider-BX1005hP.js";import"./useControlled-DDItz7Pi.js";import"./index-DSju0_vi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CvLawMmC.js";import"./useSlot-CEBz0DtX.js";import"./resolveComponentProps-CWO7ZH95.js";import"./ButtonBase-RZeBdZmg.js";function Q(){const{instructors:a}=m(t=>t.instructors);console.log("instructors",a);const o=window.location.pathname,i=o+window.location.search,e=((t,r)=>new URLSearchParams(t.split("?")[1]).get(r))(i,"page"),c=e?parseInt(e,10):1;function p(t,r){const n=o+"?page="+r;u.visit(n)}return s.jsx("div",{className:"flex w-full items-center justify-end",children:s.jsx(l,{onChange:p,count:a.last_page,defaultPage:c,color:"primary",shape:"rounded"})})}export{Q as default};
