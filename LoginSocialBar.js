(("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements=("undefined"!=typeof self?self:this).webpackJsonp_thunderbolt_elements||[]).push([[162],{434:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(147),o=n(511),l=n.n(o),i=n(530),u=n(538),c=n(151),s=n(513),f=n(958),m=n.n(f),d=function(e){return Array.from(e.querySelectorAll("[tabindex],[href]"))},v=r.forwardRef((function(e,t){var n,o=e.menuItems,u=e.logOutText,c=e.direction,f=e.currentPrimaryPageHref,v=e.open,p=e.onLogout,g=e.onClose,h=r.useRef(null),E=l()(m.a.root,((n={})[m.a.open]=v,n[m.a.rtl]="rtl"===c,n[m.a.ltr]="ltr"===c,n));r.useImperativeHandle(t,(function(){return{focusFirstMenuItem:function(){if(h.current){var e=d(h.current)[0];e&&e.focus()}}}}));return r.createElement("nav",{ref:h,className:E,"aria-live":"polite","data-testid":"custom-menu",onKeyDown:function(e){var t=e.keyCode,n=i.f.escape,a=i.f.arrowDown,r=i.f.arrowUp,o=i.f.tab,l=i.f.enter,u=[a,r,o];if(t===n)e.preventDefault(),g();else if(t===l){e.preventDefault(),e.target.click()}else if(u.includes(t)){if(e.preventDefault(),!h.current)return;var c=d(h.current),s=e.target,f=c.indexOf(s);if(-1===f)return;var m=f;t===r?--m<0&&(m=c.length-1):m=(m+1)%c.length,c[m].focus()}},onClick:g},r.createElement("ul",null,o.map((function(e,t){var n,o=e.label,i=e.link,u=e.displayCount;return r.createElement("li",{key:t},r.createElement(s.a,Object(a.a)({},i,{dataTestId:"link",className:l()(m.a.link,(n={},n[m.a.selected]=!!i.href&&i.href===f,n))}),r.createElement("span",{className:m.a.label},o),"number"==typeof u&&r.createElement("span",{className:m.a.displayCount},"(",u,")")))})),!!o.length&&r.createElement("li",{role:"separator"},r.createElement("hr",null)),r.createElement("li",null,r.createElement("div",{className:m.a.link,tabIndex:0,"data-testid":"link",onClick:p,onKeyDown:i.b},r.createElement("span",{className:m.a.label},u||"Log Out")))))})),p=n(957),g=n.n(p),h=function(e){var t=e.menuItems,n=e.logOutText,a=e.currentPrimaryPageHref,o=e.onLogout,l=e.navigateTo,i=r.useMemo((function(){var e=t.findIndex((function(e){var t=e.link;return t.href&&t.href===a}));return-1!==e?e:"choose"}),[a,t]);return r.createElement("select",{className:g.a.root,defaultValue:i,onChange:function(e){var n=e.target.value;if("choose"!==n)if("logout"!==n){var a=t[parseInt(n,10)].link;l(a)}else o()}},r.createElement("option",{value:"choose"},"Choose an option"),t.map((function(e,t){var n=e.label,a=e.displayCount;return r.createElement("option",{key:t,value:t},n,"number"==typeof a&&" ("+a+")")})),r.createElement("option",{value:"logout"},n||"Log Out"))},E=n(956),y=n.n(E),b=function(e,t){if(e)return"number"==typeof t?t+" "+e:e},k=function(e){var t,n=e.containerId,a=e.iconItems,o=e.direction,i=l()(y.a.root,((t={})[y.a.rtl]="rtl"===o,t[y.a.ltr]="ltr"===o,t));return r.createElement("nav",{className:i,"data-testid":"icons"},a.map((function(e,t){var a,o=e.iconSvgContent,l=e.link,i=e.label,u=e.displayCount;return r.createElement("div",{key:t,className:y.a.icon,"aria-label":b(i,u)},r.createElement(c.default,{id:n+"-icon",svgContent:o,link:l,shouldScaleStroke:!1,withShadow:!1}),"number"==typeof u&&r.createElement("span",{className:y.a.badge,"data-testid":"badge"},(a=u)>=1e3?Math.floor(a/1e3)+"k":a))})))},w=n(954),I=n.n(w);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=r.createElement("path",{d:"M1.707.293L.293 1.707l6 6a1 1 0 001.397.016l6-5.726L12.31.55 7.016 5.602 1.707.292z"});function N(e){return r.createElement("svg",_({width:14,height:8,viewBox:"0 0 14 8"},e),C)}t.default=function(e){var t,n=e.id,o=e.isLoggedIn,s=e.userName,f=e.loggedInText,m=e.loggedOutText,d=e.logOutText,p=e.direction,g=e.useNativeMenu,E=e.menuItems,y=e.iconItems,b=e.currentPrimaryPageHref,w=e.onLogin,_=e.onLogout,C=e.navigateTo,x=e.onMouseEnter,L=e.onMouseLeave,O=o?"Members bar":"Login or Sign up",S=function(e){var t=e.displayMode;return"avatarOnly"===t||"avatarAndText"===t}(e)&&function(e){var t=e.id,n=e.isLoggedIn,a=e.avatarUri,o=e.iconSize,l=e.defaultAvatarSvgContent;return r.createElement("div",{className:I.a.avatar},n&&a?r.createElement(u.a,{id:"customAvatar-"+t,containerId:t,width:o,height:o,displayMode:"fill",uri:a,name:"",alt:""}):r.createElement(c.default,{id:"defaultAvatar-"+t,className:I.a.avatarSvg,svgContent:l,shouldScaleStroke:!1,withShadow:!1}))}(e),M=r.useState(!1),D=M[0],T=M[1],A=r.useRef(null),P=r.useRef(null),j={menuItems:E,logOutText:d,currentPrimaryPageHref:b,onLogout:function(){return _()}},z=!!y.length,U=l()(I.a.root,((t={})[I.a.rtl]="rtl"===p,t[I.a.ltr]="ltr"===p,t[I.a.withIcons]=z,t));return r.createElement("div",{id:n,className:U,"aria-label":O,onBlur:o&&!g?function(e){var t=e.currentTarget,n=e.relatedTarget;n&&t.contains(n)||T(!1)}:void 0,onMouseEnter:x,onMouseLeave:L},o?r.createElement(r.Fragment,null,z&&r.createElement(k,{containerId:n,iconItems:y,direction:p}),r.createElement("button",{ref:A,className:I.a.user,"aria-label":s+" account menu",onClick:g?void 0:function(){return T(!D)},onKeyDown:function(e){var t=e.keyCode,n=i.f.enter,a=i.f.space,r=i.f.escape,o=i.f.arrowUp,l=i.f.arrowDown,u=[n,a,l];D?[n,a,r,o].includes(t)?(e.preventDefault(),T(!1)):t===l&&(e.preventDefault(),P.current&&P.current.focusFirstMenuItem()):u.includes(t)&&(e.preventDefault(),T(!0))}},S,function(e){var t=e.displayMode;return"textOnly"===t||"avatarAndText"===t}(e)&&r.createElement("div",{className:I.a.name},f," ",s),r.createElement("div",{className:I.a.arrow},r.createElement(N,null))),g?r.createElement(h,Object(a.a)({},j,{navigateTo:C})):r.createElement(v,Object(a.a)({},j,{ref:P,open:D,direction:p,onClose:function(){T(!1),A.current&&A.current.focus()}}))):r.createElement("button",{className:I.a.login,onClick:function(){return w()}},S,r.createElement("span",null,m||"Login | Sign up")))}},954:function(e,t,n){e.exports={root:"_155fl",avatar:"miEJi",avatarSvg:"rea7d",user:"_4UO7W",login:"eKtig",name:"_2UDqh",arrow:"_1vKS2",withIcons:"_2Mnzj",ltr:"_1yhXz",rtl:"_2ARS6"}},956:function(e,t,n){e.exports={root:"_1lo5D",icon:"_2rX7u",ltr:"_2xGCk",badge:"UBNvU",rtl:"_16zni"}},957:function(e,t,n){e.exports={root:"GvLy2"}},958:function(e,t,n){e.exports={root:"ntdAz",open:"_2cC5_",link:"_1pyjo",selected:"_13LNm",label:"V5DMD",displayCount:"_1nzqo",ltr:"_1EW5y",rtl:"o-c2_"}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/LoginSocialBar.3fefc256.chunk.min.js.map