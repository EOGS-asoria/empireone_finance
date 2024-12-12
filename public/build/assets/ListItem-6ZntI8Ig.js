import{r as C,j as U}from"./app-CEXPs3Os.js";import{a as Se}from"./useTheme-Gt_vocHm.js";import{g as Ce}from"./useThemeProps-ItaQkjJX.js";import{u as Lt,b as jt}from"./createSimplePaletteValueFilter-kch-HYNr.js";import{u as Le}from"./index-CEUXvagV.js";import{g as wt,a as Ot,b as Tt,s as Pt,u as $t,c as Mt,m as je}from"./DefaultPropsProvider-BXV5DCew.js";import{o as _t}from"./ownerDocument-DW-IO8s5.js";import{P as Me}from"./Modal-1qfjG5MS.js";import{u as De}from"./useSlotProps-DfCih-m1.js";import{i as te}from"./isHostComponent-DVu5iVWx.js";import{L as yt,i as Be}from"./Popover-CP6qqVld.js";function Ie(t,e,r,o,n){const[a,p]=C.useState(()=>n&&r?r(t).matches:o?o(t).matches:e);return Lt(()=>{if(!r)return;const i=r(t),s=()=>{p(i.matches)};return s(),i.addEventListener("change",s),()=>{i.removeEventListener("change",s)}},[t,r]),a}const le=C.useSyncExternalStore;function Te(t,e,r,o,n){const a=C.useCallback(()=>e,[e]),p=C.useMemo(()=>{if(n&&r)return()=>r(t).matches;if(o!==null){const{matches:c}=o(t);return()=>c}return a},[a,t,o,n,r]),[i,s]=C.useMemo(()=>{if(r===null)return[a,()=>()=>{}];const c=r(t);return[()=>c.matches,d=>(c.addEventListener("change",d),()=>{c.removeEventListener("change",d)})]},[a,r,t]);return le(s,i,p)}function go(t,e={}){const r=Se(),o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:n=!1,matchMedia:a=o?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:i=!1}=Ce({name:"MuiUseMediaQuery",props:e,theme:r});let s=typeof t=="function"?t(r):t;return s=s.replace(/^@media( ?)/m,""),(le!==void 0?Te:Ie)(s,n,a,p,i)}var T="top",W="bottom",H="right",$="left",kt="auto",ft=[T,W,H,$],tt="start",pt="end",$e="clippingParents",fe="viewport",at="popper",ke="reference",ee=ft.reduce(function(t,e){return t.concat([e+"-"+tt,e+"-"+pt])},[]),ue=[].concat(ft,[kt]).reduce(function(t,e){return t.concat([e,e+"-"+tt,e+"-"+pt])},[]),Ne="beforeRead",We="read",He="afterRead",Ue="beforeMain",Fe="main",Ve="afterMain",Ge="beforeWrite",Xe="write",Ye="afterWrite",ze=[Ne,We,He,Ue,Fe,Ve,Ge,Xe,Ye];function V(t){return t?(t.nodeName||"").toLowerCase():null}function k(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){var e=k(t).Element;return t instanceof e||t instanceof Element}function N(t){var e=k(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Nt(t){if(typeof ShadowRoot>"u")return!1;var e=k(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Qe(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!N(a)||!V(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(p){var i=n[p];i===!1?a.removeAttribute(p):a.setAttribute(p,i===!0?"":i)}))})}function qe(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},p=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),i=p.reduce(function(s,l){return s[l]="",s},{});!N(n)||!V(n)||(Object.assign(n.style,i),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}const Je={name:"applyStyles",enabled:!0,phase:"write",fn:Qe,effect:qe,requires:["computeStyles"]};function F(t){return t.split("-")[0]}var K=Math.max,xt=Math.min,et=Math.round;function Dt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function de(){return!/^((?!chrome|android).)*safari/i.test(Dt())}function rt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,a=1;e&&N(t)&&(n=t.offsetWidth>0&&et(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&et(o.height)/t.offsetHeight||1);var p=Z(t)?k(t):window,i=p.visualViewport,s=!de()&&r,l=(o.left+(s&&i?i.offsetLeft:0))/n,c=(o.top+(s&&i?i.offsetTop:0))/a,d=o.width/n,x=o.height/a;return{width:d,height:x,top:c,right:l+d,bottom:c+x,left:l,x:l,y:c}}function Wt(t){var e=rt(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function ve(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Nt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function G(t){return k(t).getComputedStyle(t)}function Ke(t){return["table","td","th"].indexOf(V(t))>=0}function z(t){return((Z(t)?t.ownerDocument:t.document)||window.document).documentElement}function Rt(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Nt(t)?t.host:null)||z(t)}function re(t){return!N(t)||G(t).position==="fixed"?null:t.offsetParent}function Ze(t){var e=/firefox/i.test(Dt()),r=/Trident/i.test(Dt());if(r&&N(t)){var o=G(t);if(o.position==="fixed")return null}var n=Rt(t);for(Nt(n)&&(n=n.host);N(n)&&["html","body"].indexOf(V(n))<0;){var a=G(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ut(t){for(var e=k(t),r=re(t);r&&Ke(r)&&G(r).position==="static";)r=re(r);return r&&(V(r)==="html"||V(r)==="body"&&G(r).position==="static")?e:r||Ze(t)||e}function Ht(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function st(t,e,r){return K(t,xt(e,r))}function _e(t,e,r){var o=st(t,e,r);return o>r?r:o}function me(){return{top:0,right:0,bottom:0,left:0}}function he(t){return Object.assign({},me(),t)}function ge(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var tr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,he(typeof e!="number"?e:ge(e,ft))};function er(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,i=F(r.placement),s=Ht(i),l=[$,H].indexOf(i)>=0,c=l?"height":"width";if(!(!a||!p)){var d=tr(n.padding,r),x=Wt(a),f=s==="y"?T:$,y=s==="y"?W:H,v=r.rects.reference[c]+r.rects.reference[s]-p[s]-r.rects.popper[c],m=p[s]-r.rects.reference[s],b=ut(a),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,w=v/2-m/2,u=d[f],g=O-x[c]-d[y],h=O/2-x[c]/2+w,P=st(u,h,g),A=s;r.modifiersData[o]=(e={},e[A]=P,e.centerOffset=P-h,e)}}function rr(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||ve(e.elements.popper,n)&&(e.elements.arrow=n))}const or={name:"arrow",enabled:!0,phase:"main",fn:er,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ir(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:et(r*n)/n||0,y:et(o*n)/n||0}}function oe(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,p=t.offsets,i=t.position,s=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,d=t.isFixed,x=p.x,f=x===void 0?0:x,y=p.y,v=y===void 0?0:y,m=typeof c=="function"?c({x:f,y:v}):{x:f,y:v};f=m.x,v=m.y;var b=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),w=$,u=T,g=window;if(l){var h=ut(r),P="clientHeight",A="clientWidth";if(h===k(r)&&(h=z(r),G(h).position!=="static"&&i==="absolute"&&(P="scrollHeight",A="scrollWidth")),h=h,n===T||(n===$||n===H)&&a===pt){u=W;var E=d&&h===g&&g.visualViewport?g.visualViewport.height:h[P];v-=E-o.height,v*=s?1:-1}if(n===$||(n===T||n===W)&&a===pt){w=H;var R=d&&h===g&&g.visualViewport?g.visualViewport.width:h[A];f-=R-o.width,f*=s?1:-1}}var j=Object.assign({position:i},l&&nr),M=c===!0?ir({x:f,y:v},k(r)):{x:f,y:v};if(f=M.x,v=M.y,s){var L;return Object.assign({},j,(L={},L[u]=O?"0":"",L[w]=b?"0":"",L.transform=(g.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",L))}return Object.assign({},j,(e={},e[u]=O?v+"px":"",e[w]=b?f+"px":"",e.transform="",e))}function ar(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,p=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,l={placement:F(e.placement),variation:ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,oe(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:p,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,oe(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const sr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}};var gt={passive:!0};function cr(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,p=o.resize,i=p===void 0?!0:p,s=k(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",r.update,gt)}),i&&s.addEventListener("resize",r.update,gt),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",r.update,gt)}),i&&s.removeEventListener("resize",r.update,gt)}}const pr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:cr,data:{}};var lr={left:"right",right:"left",bottom:"top",top:"bottom"};function bt(t){return t.replace(/left|right|bottom|top/g,function(e){return lr[e]})}var fr={start:"end",end:"start"};function ne(t){return t.replace(/start|end/g,function(e){return fr[e]})}function Ut(t){var e=k(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Ft(t){return rt(z(t)).left+Ut(t).scrollLeft}function ur(t,e){var r=k(t),o=z(t),n=r.visualViewport,a=o.clientWidth,p=o.clientHeight,i=0,s=0;if(n){a=n.width,p=n.height;var l=de();(l||!l&&e==="fixed")&&(i=n.offsetLeft,s=n.offsetTop)}return{width:a,height:p,x:i+Ft(t),y:s}}function dr(t){var e,r=z(t),o=Ut(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Ft(t),s=-o.scrollTop;return G(n||r).direction==="rtl"&&(i+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:p,x:i,y:s}}function Vt(t){var e=G(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ye(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:N(t)&&Vt(t)?t:ye(Rt(t))}function ct(t,e){var r;e===void 0&&(e=[]);var o=ye(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=k(o),p=n?[a].concat(a.visualViewport||[],Vt(o)?o:[]):o,i=e.concat(p);return n?i:i.concat(ct(Rt(p)))}function Bt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t,e){var r=rt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ie(t,e,r){return e===fe?Bt(ur(t,r)):Z(e)?vr(e,r):Bt(dr(z(t)))}function mr(t){var e=ct(Rt(t)),r=["absolute","fixed"].indexOf(G(t).position)>=0,o=r&&N(t)?ut(t):t;return Z(o)?e.filter(function(n){return Z(n)&&ve(n,o)&&V(n)!=="body"}):[]}function hr(t,e,r,o){var n=e==="clippingParents"?mr(t):[].concat(e),a=[].concat(n,[r]),p=a[0],i=a.reduce(function(s,l){var c=ie(t,l,o);return s.top=K(c.top,s.top),s.right=xt(c.right,s.right),s.bottom=xt(c.bottom,s.bottom),s.left=K(c.left,s.left),s},ie(t,p,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function be(t){var e=t.reference,r=t.element,o=t.placement,n=o?F(o):null,a=o?ot(o):null,p=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(n){case T:s={x:p,y:e.y-r.height};break;case W:s={x:p,y:e.y+e.height};break;case H:s={x:e.x+e.width,y:i};break;case $:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var l=n?Ht(n):null;if(l!=null){var c=l==="y"?"height":"width";switch(a){case tt:s[l]=s[l]-(e[c]/2-r[c]/2);break;case pt:s[l]=s[l]+(e[c]/2-r[c]/2);break}}return s}function lt(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.strategy,p=a===void 0?t.strategy:a,i=r.boundary,s=i===void 0?$e:i,l=r.rootBoundary,c=l===void 0?fe:l,d=r.elementContext,x=d===void 0?at:d,f=r.altBoundary,y=f===void 0?!1:f,v=r.padding,m=v===void 0?0:v,b=he(typeof m!="number"?m:ge(m,ft)),O=x===at?ke:at,w=t.rects.popper,u=t.elements[y?O:x],g=hr(Z(u)?u:u.contextElement||z(t.elements.popper),s,c,p),h=rt(t.elements.reference),P=be({reference:h,element:w,strategy:"absolute",placement:n}),A=Bt(Object.assign({},w,P)),E=x===at?A:h,R={top:g.top-E.top+b.top,bottom:E.bottom-g.bottom+b.bottom,left:g.left-E.left+b.left,right:E.right-g.right+b.right},j=t.modifiersData.offset;if(x===at&&j){var M=j[n];Object.keys(R).forEach(function(L){var D=[H,W].indexOf(L)>=0?1:-1,B=[T,W].indexOf(L)>=0?"y":"x";R[L]+=M[B]*D})}return R}function gr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,p=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,l=s===void 0?ue:s,c=ot(o),d=c?i?ee:ee.filter(function(y){return ot(y)===c}):ft,x=d.filter(function(y){return l.indexOf(y)>=0});x.length===0&&(x=d);var f=x.reduce(function(y,v){return y[v]=lt(t,{placement:v,boundary:n,rootBoundary:a,padding:p})[F(v)],y},{});return Object.keys(f).sort(function(y,v){return f[y]-f[v]})}function yr(t){if(F(t)===kt)return[];var e=bt(t);return[ne(t),e,ne(e)]}function br(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!0:p,s=r.fallbackPlacements,l=r.padding,c=r.boundary,d=r.rootBoundary,x=r.altBoundary,f=r.flipVariations,y=f===void 0?!0:f,v=r.allowedAutoPlacements,m=e.options.placement,b=F(m),O=b===m,w=s||(O||!y?[bt(m)]:yr(m)),u=[m].concat(w).reduce(function(_,Y){return _.concat(F(Y)===kt?gr(e,{placement:Y,boundary:c,rootBoundary:d,padding:l,flipVariations:y,allowedAutoPlacements:v}):Y)},[]),g=e.rects.reference,h=e.rects.popper,P=new Map,A=!0,E=u[0],R=0;R<u.length;R++){var j=u[R],M=F(j),L=ot(j)===tt,D=[T,W].indexOf(M)>=0,B=D?"width":"height",S=lt(e,{placement:j,boundary:c,rootBoundary:d,altBoundary:x,padding:l}),I=D?L?H:$:L?W:T;g[B]>h[B]&&(I=bt(I));var X=bt(I),Q=[];if(a&&Q.push(S[M]<=0),i&&Q.push(S[I]<=0,S[X]<=0),Q.every(function(_){return _})){E=j,A=!1;break}P.set(j,Q)}if(A)for(var dt=y?3:1,At=function(Y){var it=u.find(function(mt){var q=P.get(mt);if(q)return q.slice(0,Y).every(function(Et){return Et})});if(it)return E=it,"break"},nt=dt;nt>0;nt--){var vt=At(nt);if(vt==="break")break}e.placement!==E&&(e.modifiersData[o]._skip=!0,e.placement=E,e.reset=!0)}}const xr={name:"flip",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"],data:{_skip:!1}};function ae(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function se(t){return[T,H,W,$].some(function(e){return t[e]>=0})}function wr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,p=lt(e,{elementContext:"reference"}),i=lt(e,{altBoundary:!0}),s=ae(p,o),l=ae(i,n,a),c=se(s),d=se(l);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const Or={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:wr};function Pr(t,e,r){var o=F(t),n=[$,T].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,p=a[0],i=a[1];return p=p||0,i=(i||0)*n,[$,H].indexOf(o)>=0?{x:i,y:p}:{x:p,y:i}}function Rr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,p=ue.reduce(function(c,d){return c[d]=Pr(d,e.rects,a),c},{}),i=p[e.placement],s=i.x,l=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[o]=p}const Ar={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rr};function Er(t){var e=t.state,r=t.name;e.modifiersData[r]=be({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Sr={name:"popperOffsets",enabled:!0,phase:"read",fn:Er,data:{}};function Cr(t){return t==="x"?"y":"x"}function Lr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!1:p,s=r.boundary,l=r.rootBoundary,c=r.altBoundary,d=r.padding,x=r.tether,f=x===void 0?!0:x,y=r.tetherOffset,v=y===void 0?0:y,m=lt(e,{boundary:s,rootBoundary:l,padding:d,altBoundary:c}),b=F(e.placement),O=ot(e.placement),w=!O,u=Ht(b),g=Cr(u),h=e.modifiersData.popperOffsets,P=e.rects.reference,A=e.rects.popper,E=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,R=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(h){if(a){var L,D=u==="y"?T:$,B=u==="y"?W:H,S=u==="y"?"height":"width",I=h[u],X=I+m[D],Q=I-m[B],dt=f?-A[S]/2:0,At=O===tt?P[S]:A[S],nt=O===tt?-A[S]:-P[S],vt=e.elements.arrow,_=f&&vt?Wt(vt):{width:0,height:0},Y=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:me(),it=Y[D],mt=Y[B],q=st(0,P[S],_[S]),Et=w?P[S]/2-dt-q-it-R.mainAxis:At-q-it-R.mainAxis,we=w?-P[S]/2+dt+q+mt+R.mainAxis:nt+q+mt+R.mainAxis,St=e.elements.arrow&&ut(e.elements.arrow),Oe=St?u==="y"?St.clientTop||0:St.clientLeft||0:0,Gt=(L=j==null?void 0:j[u])!=null?L:0,Pe=I+Et-Gt-Oe,Re=I+we-Gt,Xt=st(f?xt(X,Pe):X,I,f?K(Q,Re):Q);h[u]=Xt,M[u]=Xt-I}if(i){var Yt,Ae=u==="x"?T:$,Ee=u==="x"?W:H,J=h[g],ht=g==="y"?"height":"width",zt=J+m[Ae],Qt=J-m[Ee],Ct=[T,$].indexOf(b)!==-1,qt=(Yt=j==null?void 0:j[g])!=null?Yt:0,Jt=Ct?zt:J-P[ht]-A[ht]-qt+R.altAxis,Kt=Ct?J+P[ht]+A[ht]-qt-R.altAxis:Qt,Zt=f&&Ct?_e(Jt,J,Kt):st(f?Jt:zt,J,f?Kt:Qt);h[g]=Zt,M[g]=Zt-J}e.modifiersData[o]=M}}const jr={name:"preventOverflow",enabled:!0,phase:"main",fn:Lr,requiresIfExists:["offset"]};function Mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Dr(t){return t===k(t)||!N(t)?Ut(t):Mr(t)}function Br(t){var e=t.getBoundingClientRect(),r=et(e.width)/t.offsetWidth||1,o=et(e.height)/t.offsetHeight||1;return r!==1||o!==1}function Ir(t,e,r){r===void 0&&(r=!1);var o=N(e),n=N(e)&&Br(e),a=z(e),p=rt(t,n,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((V(e)!=="body"||Vt(a))&&(i=Dr(e)),N(e)?(s=rt(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=Ft(a))),{x:p.left+i.scrollLeft-s.x,y:p.top+i.scrollTop-s.y,width:p.width,height:p.height}}function Tr(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&n(s)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function $r(t){var e=Tr(t);return ze.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function kr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Nr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function pe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Wr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?ce:n;return function(i,s,l){l===void 0&&(l=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},d=[],x=!1,f={state:c,setOptions:function(b){var O=typeof b=="function"?b(c.options):b;v(),c.options=Object.assign({},a,c.options,O),c.scrollParents={reference:Z(i)?ct(i):i.contextElement?ct(i.contextElement):[],popper:ct(s)};var w=$r(Nr([].concat(o,c.options.modifiers)));return c.orderedModifiers=w.filter(function(u){return u.enabled}),y(),f.update()},forceUpdate:function(){if(!x){var b=c.elements,O=b.reference,w=b.popper;if(pe(O,w)){c.rects={reference:Ir(O,ut(w),c.options.strategy==="fixed"),popper:Wt(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(R){return c.modifiersData[R.name]=Object.assign({},R.data)});for(var u=0;u<c.orderedModifiers.length;u++){if(c.reset===!0){c.reset=!1,u=-1;continue}var g=c.orderedModifiers[u],h=g.fn,P=g.options,A=P===void 0?{}:P,E=g.name;typeof h=="function"&&(c=h({state:c,options:A,name:E,instance:f})||c)}}}},update:kr(function(){return new Promise(function(m){f.forceUpdate(),m(c)})}),destroy:function(){v(),x=!0}};if(!pe(i,s))return f;f.setOptions(l).then(function(m){!x&&l.onFirstUpdate&&l.onFirstUpdate(m)});function y(){c.orderedModifiers.forEach(function(m){var b=m.name,O=m.options,w=O===void 0?{}:O,u=m.effect;if(typeof u=="function"){var g=u({state:c,name:b,instance:f,options:w}),h=function(){};d.push(g||h)}})}function v(){d.forEach(function(m){return m()}),d=[]}return f}}var Hr=[pr,Sr,sr,Je,Ar,xr,jr,or,Or],Ur=Wr({defaultModifiers:Hr});function Fr(t){return wt("MuiPopper",t)}Ot("MuiPopper",["root"]);function Vr(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function It(t){return typeof t=="function"?t():t}function Gr(t){return t.nodeType!==void 0}const Xr=t=>{const{classes:e}=t;return Tt({root:["root"]},Fr,e)},Yr={},zr=C.forwardRef(function(e,r){const{anchorEl:o,children:n,direction:a,disablePortal:p,modifiers:i,open:s,placement:l,popperOptions:c,popperRef:d,slotProps:x={},slots:f={},TransitionProps:y,ownerState:v,...m}=e,b=C.useRef(null),O=jt(b,r),w=C.useRef(null),u=jt(w,d),g=C.useRef(u);Lt(()=>{g.current=u},[u]),C.useImperativeHandle(d,()=>w.current,[]);const h=Vr(l,a),[P,A]=C.useState(h),[E,R]=C.useState(It(o));C.useEffect(()=>{w.current&&w.current.forceUpdate()}),C.useEffect(()=>{o&&R(It(o))},[o]),Lt(()=>{if(!E||!s)return;const B=X=>{A(X.placement)};let S=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:X})=>{B(X)}}];i!=null&&(S=S.concat(i)),c&&c.modifiers!=null&&(S=S.concat(c.modifiers));const I=Ur(E,b.current,{placement:h,...c,modifiers:S});return g.current(I),()=>{I.destroy(),g.current(null)}},[E,p,i,s,c,h]);const j={placement:P};y!==null&&(j.TransitionProps=y);const M=Xr(e),L=f.root??"div",D=De({elementType:L,externalSlotProps:x.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:M.root});return U.jsx(L,{...D,children:typeof n=="function"?n(j):n})}),Qr=C.forwardRef(function(e,r){const{anchorEl:o,children:n,container:a,direction:p="ltr",disablePortal:i=!1,keepMounted:s=!1,modifiers:l,open:c,placement:d="bottom",popperOptions:x=Yr,popperRef:f,style:y,transition:v=!1,slotProps:m={},slots:b={},...O}=e,[w,u]=C.useState(!0),g=()=>{u(!1)},h=()=>{u(!0)};if(!s&&!c&&(!v||w))return null;let P;if(a)P=a;else if(o){const R=It(o);P=R&&Gr(R)?_t(R).body:_t(null).body}const A=!c&&s&&(!v||w)?"none":void 0,E=v?{in:c,onEnter:g,onExited:h}:void 0;return U.jsx(Me,{disablePortal:i,container:P,children:U.jsx(zr,{anchorEl:o,direction:p,disablePortal:i,modifiers:l,ref:r,open:v?!w:c,placement:d,popperOptions:x,popperRef:f,slotProps:m,slots:b,...O,style:{position:"fixed",top:0,left:0,display:A,...y},TransitionProps:E,children:n})})}),qr=Pt(Qr,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),yo=C.forwardRef(function(e,r){const o=Le(),n=$t({props:e,name:"MuiPopper"}),{anchorEl:a,component:p,components:i,componentsProps:s,container:l,disablePortal:c,keepMounted:d,modifiers:x,open:f,placement:y,popperOptions:v,popperRef:m,transition:b,slots:O,slotProps:w,...u}=n,g=(O==null?void 0:O.root)??(i==null?void 0:i.Root),h={anchorEl:a,container:l,disablePortal:c,keepMounted:d,modifiers:x,open:f,placement:y,popperOptions:v,popperRef:m,transition:b,...u};return U.jsx(qr,{as:p,direction:o?"rtl":"ltr",slots:{root:g},slotProps:w??s,...h,ref:r})});function Jr(t){return wt("MuiListItem",t)}Ot("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function bo(t){return wt("MuiListItemButton",t)}const Kr=Ot("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function Zr(t){return wt("MuiListItemSecondaryAction",t)}Ot("MuiListItemSecondaryAction",["root","disableGutters"]);const _r=t=>{const{disableGutters:e,classes:r}=t;return Tt({root:["root",e&&"disableGutters"]},Zr,r)},to=Pt("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),xe=C.forwardRef(function(e,r){const o=$t({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...a}=o,p=C.useContext(yt),i={...o,disableGutters:p.disableGutters},s=_r(i);return U.jsx(to,{className:Mt(s.root,n),ownerState:i,ref:r,...a})});xe.muiName="ListItemSecondaryAction";const eo=(t,e)=>{const{ownerState:r}=t;return[e.root,r.dense&&e.dense,r.alignItems==="flex-start"&&e.alignItemsFlexStart,r.divider&&e.divider,!r.disableGutters&&e.gutters,!r.disablePadding&&e.padding,r.hasSecondaryAction&&e.secondaryAction]},ro=t=>{const{alignItems:e,classes:r,dense:o,disableGutters:n,disablePadding:a,divider:p,hasSecondaryAction:i}=t;return Tt({root:["root",o&&"dense",!n&&"gutters",!a&&"padding",p&&"divider",e==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},Jr,r)},oo=Pt("div",{name:"MuiListItem",slot:"Root",overridesResolver:eo})(je(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${Kr.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),no=Pt("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),xo=C.forwardRef(function(e,r){const o=$t({props:e,name:"MuiListItem"}),{alignItems:n="center",children:a,className:p,component:i,components:s={},componentsProps:l={},ContainerComponent:c="li",ContainerProps:{className:d,...x}={},dense:f=!1,disableGutters:y=!1,disablePadding:v=!1,divider:m=!1,secondaryAction:b,slotProps:O={},slots:w={},...u}=o,g=C.useContext(yt),h=C.useMemo(()=>({dense:f||g.dense||!1,alignItems:n,disableGutters:y}),[n,g.dense,f,y]),P=C.useRef(null),A=C.Children.toArray(a),E=A.length&&Be(A[A.length-1],["ListItemSecondaryAction"]),R={...o,alignItems:n,dense:h.dense,disableGutters:y,disablePadding:v,divider:m,hasSecondaryAction:E},j=ro(R),M=jt(P,r),L=w.root||s.Root||oo,D=O.root||l.root||{},B={className:Mt(j.root,D.className,p),...u};let S=i||"li";return E?(S=!B.component&&!i?"div":S,c==="li"&&(S==="li"?S="div":B.component==="li"&&(B.component="div")),U.jsx(yt.Provider,{value:h,children:U.jsxs(no,{as:c,className:Mt(j.container,d),ref:M,ownerState:R,...x,children:[U.jsx(L,{...D,...!te(L)&&{as:S,ownerState:{...R,...D.ownerState}},...B,children:A}),A.pop()]})})):U.jsx(yt.Provider,{value:h,children:U.jsxs(L,{...D,as:S,ref:M,...!te(L)&&{ownerState:{...R,...D.ownerState}},...B,children:[A,b&&U.jsx(xe,{children:b})]})})});export{xo as L,yo as P,bo as g,Kr as l,go as u};
