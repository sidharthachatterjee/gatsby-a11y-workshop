(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),a=n("y3w9"),c=n("0/R4"),u=n("eeVq"),s=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,f=u((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),d=!u((function(){l((function(){}))}));r(r.S+r.F*(f||d),"Reflect",{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(d&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var u=n.prototype,p=o(c(u)?u:Object.prototype),h=Function.apply.call(e,p,t);return c(h)?h:p}})},LwmV:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),o=n.n(r),i=n("A2+M"),a=(n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("xfY5"),n("KKXr"),n("YwZP")),c=n("qKvR"),u=n("txSG"),s=n("Zyo0"),l=n("yDJ3"),f=n.n(l),d=n("2oH+"),p=n.n(d),h=(n("Z2Ku"),n("a6Uy")),b=n("FUM2"),y=n("Flpk"),v=39,m=37,O=38,g=40,j=32,w=80,T=79,x=71,S=27,A=33,E=34,_=function(e){return function(t){return t.mode===e?{mode:b.a.normal}:{mode:e}}},C=["input","select","textarea","a","button"],k=function(){var e=Object(h.a)();Object(r.useEffect)((function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var c=document.activeElement.tagName.toLowerCase();if(!C.includes(c))if(o)switch(t.keyCode){case j:Object(y.b)(e);break;case w:e.setState(_(b.a.print)),Object(a.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case w:e.setState(_(b.a.presenter));break;case T:e.setState(_(b.a.overview));break;case x:e.setState(_(b.a.grid))}else switch(t.keyCode){case v:case g:case E:case j:Object(y.a)(e);break;case m:case O:case A:Object(y.b)(e);break;case S:e.setState({mode:b.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},P="mdx-deck-slide",I="mdx-deck-step",L=function(){var e=Object(h.a)(),t=Object(r.useState)(!1),n=t[0],o=t[1],i=function(){return o(!0)},c=function(){return o(!1)},u=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case P:Object(a.navigate)([e.slug,n].join("/"));break;case I:e.setState({step:n})}};Object(r.useEffect)((function(){o(document.hasFocus())}),[]),Object(r.useEffect)((function(){return n||window.addEventListener("storage",u),window.addEventListener("focus",i),window.addEventListener("blur",c),function(){n||window.removeEventListener("storage",u),window.removeEventListener("focus",i),window.removeEventListener("blur",c)}}),[n]),Object(r.useEffect)((function(){n&&(localStorage.setItem(P,e.index),localStorage.setItem(I,e.step))}),[n,e.index,e.step])},R=n("/WHa");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=function(e){return o.a.createElement(r.Fragment,null,e.children)},N=function(e){var t=Object(r.useState)("100vh"),n=t[0],o=t[1],i=Object(h.a)(),a=i.mode,c=i.theme;Object(r.useEffect)((function(){o(window.innerHeight);var e=function(e){o(window.innerHeight)},t=function(e){a===b.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}}),[a]);var s=c.Provider,l=void 0===s?M:s;return Object(u.d)(l,null,Object(u.d)("div",F({},e,{sx:{width:"100vw",height:a!==b.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},D=n("34Gm"),H=n("1Is2"),q=n("+VME"),K=n("iRXn"),z=function(e){var t=Object(h.a)(),n=t.index,r=t.length;return Object(u.d)(o.a.Fragment,null,Object(u.d)("div",null,n," / ",r-1),Object(u.d)("div",{sx:{mx:4}},Object(u.d)("a",{href:a.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.d)("div",{sx:{mx:"auto"}}),Object(u.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.d)(K.a,null)),Object(u.d)("div",null,Object(u.d)(q.a,null)))},B=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),i=t[r.index+1],a=!!r.notes&&o.a.Children.toArray(r.notes);return Object(u.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.d)("div",{sx:{width:"75%",p:3}},Object(u.d)(H.a,{zoom:.75},n)),Object(u.d)("div",{sx:{width:"25%",p:3}},Object(u.d)(H.a,{ratio:4/3,zoom:.25},Object(u.d)(D.a,{slide:i,preview:!0})),a&&Object(u.d)("div",{sx:{my:3}},a))),Object(u.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.d)(z,null)))};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=function(){},W=function(e){var t=e.slides,n=void 0===t?[]:t,i=e.ratio,a=void 0===i?16/9:i,c=e.zoom,s=void 0===c?.25:c,l=e.onClick,f=void 0===l?Y:l,d=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slides","ratio","zoom","onClick"]),p=Object(h.a)().index,b=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=b.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()})),Object(u.d)(o.a.Fragment,null,n.map((function(e,t){return Object(u.d)("div",X({},d,{key:t,role:"link",ref:t===p?b:null,onClick:function(e){f(t)},style:p===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:p===t?"4px solid cyan":null}}),Object(u.d)(H.a,{zoom:s,ratio:a},Object(u.d)(D.a,{slide:e,preview:!0})))})))},G=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),o=r.slug,i=r.index,c=r.length;return Object(u.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.d)(W,{slides:t,zoom:1/6,onClick:function(e){Object(a.navigate)([o,e].join("/"))}})),Object(u.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.d)("div",{sx:{flex:"1 1 auto"}},Object(u.d)(H.a,{zoom:5/6},n)),Object(u.d)("div",{sx:{py:3}},i," / ",c-1)))},V=function(e){var t=e.slides,n=Object(h.a)(),r=n.slug,o=n.setState;return Object(u.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.d)(W,{slides:t,onClick:function(e){Object(a.navigate)([r,e].join("/")),o({mode:b.a.normal})},sx:{width:"25%",m:0}})))};function $(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function U(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){return k(),!1},te=function(){return L(),!1},ne=function(e){var t=e.slides,n=J({},Object(h.a)(),{mode:b.a.print});return Object(c.d)(R.a.Provider,{value:n},t.map((function(e,t){return Object(c.d)(D.a,{key:t,slide:e,preview:!0})})))},re=function(e){var t=e.theme;return!!t.googleFont&&Object(c.d)(s.Helmet,null,Object(c.d)("link",{rel:"stylesheet",href:t.googleFont}))},oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return"function"==typeof t?t(e):p()(e,t)}),{})},ie=function(e){var t=e.children;return Object(c.d)(o.a.Fragment,{children:t})},ae=function(e){var t,n,r=e.slides,i=void 0===r?[]:r,l=e.pageContext,d=l.title,p=l.slug,y=e.theme,v=void 0===y?{}:y,m=e.themes,O=void 0===m?[]:m,g=(U(e,["slides","pageContext","theme","themes"]),Object(h.a)()),j=(t=a.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),w=i.head.children,T=oe.apply(void 0,[v].concat($(O))),x=T.components,S=U(T,["components"]),A=J({},g,{slug:p,length:i.length,index:j,steps:f()(g,"metadata."+j+".steps"),notes:f()(g,"metadata."+j+".notes"),theme:S}),E=ie;switch(A.mode){case b.a.presenter:E=B;break;case b.a.overview:E=G;break;case b.a.grid:E=V}return Object(c.d)(o.a.Fragment,null,Object(c.d)(s.Helmet,null,Object(c.d)("title",null,d),w),Object(c.d)(re,{theme:S}),Object(c.d)(R.a.Provider,{value:A},Object(c.d)(u.b,{components:x,theme:S},Object(c.d)(c.a,{styles:{body:{margin:0,overflow:A.mode===b.a.normal?"hidden":null}}}),Object(c.d)(ee,null),Object(c.d)(te,null),Object(c.d)(N,null,Object(c.d)(E,{slides:i},Object(c.d)(a.Router,{basepath:p,style:{height:"100%"}},Object(c.d)(D.a,{index:0,path:"/",slide:i[0]}),i.map((function(e,t){return Object(c.d)(D.a,{key:t,index:t,path:t+"/*",slide:e})})),Object(c.d)(ne,{path:"/print",slides:i})))))))},ce=n("K1fZ");function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"pageQuery",(function(){return se}));var se="2133597988",le={wrapper:function(e){var t=Object(ce.a)(e);return Object(c.d)(ae,ue({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data"]);return Object(c.d)((function(e){return Object(c.d)(i.MDXRenderer,ue({},e,{children:n}))}),ue({},r,{components:le}))}},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var l=n("q1tI"),f=n("7ljp"),d=f.useMDXComponents,p=f.mdx,h=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),c=d(n),s=h(t),f=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:p},s),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,t]);return l.createElement(f,u({components:c},i))}},Zyo0:function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("KKXr"),n("pIFo"),n("/SS/"),n("91GP"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),Object.defineProperty(t,"__esModule",{value:!0});var o,i,a,c,u=r(n("17x9")),s=r(n("8+s/")),l=r(n("bmMU")),f=r(n("q1tI")),d=r(n("MgzW")),p="bodyAttributes",h="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),m="cssText",O="href",g="http-equiv",j="innerHTML",w="itemprop",T="name",x="property",S="rel",A="src",E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",C="defer",k="encodeSpecialCharacters",P="onChangeClientState",I="titleTemplate",L=Object.keys(E).reduce((function(e,t){return e[E[t]]=t,e}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=G(e,y.TITLE),n=G(e,I);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,_);return t||r||void 0},B=function(e){return G(e,P)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},Y=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},W=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&J("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===S&&"canonical"===e[n].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==j&&c!==m&&c!==w||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=d({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},V=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){V(e)}),0)}),$=function(e){return clearTimeout(e)},U="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:e.requestAnimationFrame||V,Z="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:e.cancelAnimationFrame||$,J=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Q=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(f,d);var p={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,a),noscriptTags:oe(y.NOSCRIPT,c),scriptTags:oe(y.SCRIPT,s),styleTags:oe(y.STYLE,l)},h={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),u(e,h,b)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[E[n]||n]=e[n],t}),t)},ce=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ae(n,r),[f.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case h:return{toComponent:function(){return ae(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=E[e]||e;if(n===j||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===m)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:ce(y.BASE,t,r),bodyAttributes:ce(p,n,r),htmlAttributes:ce(h,o,r),link:ce(y.LINK,i,r),meta:ce(y.META,a,r),noscript:ce(y.NOSCRIPT,c,r),script:ce(y.SCRIPT,u,r),style:ce(y.STYLE,s,r),title:ce(y.TITLE,{title:f,titleAttributes:d},r)}},se=s((function(e){return{baseTag:Y([O],e),bodyAttributes:X(p,e),defer:G(e,C),encode:G(e,k),htmlAttributes:X(h,e),linkTags:W(y.LINK,[S,O],e),metaTags:W(y.META,[T,v,g,x,w],e),noscriptTags:W(y.NOSCRIPT,[j],e),onChangeClientState:B(e),scriptTags:W(y.SCRIPT,[A,j],e),styleTags:W(y.STYLE,[m],e),title:z(e),titleAttributes:X(b,e)}}),(function(e){Q&&Z(Q),e.defer?Q=U((function(){ee(e,(function(){Q=null}))})):(ee(e),Q=null)}),ue)((function(){return null})),le=(i=se,c=a=function(e){function t(){return M(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!l(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TITLE:return D({},o,((t={})[r.type]=a,t.titleAttributes=D({},i),t));case y.BODY:return D({},o,{bodyAttributes:D({},i)});case y.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((n={})[r.type]=D({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},N(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),a.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);le.renderStatic=le.rewind,t.Helmet=le}).call(this,n("yLpj"))},yDJ3:function(e,t,n){(function(t){n("LK8F"),n("bWfx"),n("pIFo"),n("Oyvg"),n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("Btvt");var r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,i=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,u=/^\[object .+?Constructor\]$/,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=s||l||Function("return this")();var d,p=Array.prototype,h=Function.prototype,b=Object.prototype,y=f["__core-js_shared__"],v=(d=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"",m=h.toString,O=b.hasOwnProperty,g=b.toString,j=RegExp("^"+m.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=f.Symbol,T=p.splice,x=F(f,"Map"),S=F(Object,"create"),A=w?w.prototype:void 0,E=A?A.toString:void 0;function _(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function P(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function I(e,t){for(var n,i=0,a=(t=function(e,t){if(H(e))return!1;var n=typeof e;if("number"==n||"symbol"==n||"boolean"==n||null==e||K(e))return!0;return o.test(e)||!r.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:H(n=t)?n:M(n)).length;null!=e&&i<a;)e=e[N(t[i++])];return i&&i==a?e:void 0}function L(e){return!(!q(e)||(t=e,v&&v in t))&&(function(e){var t=q(e)?g.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?j:u).test(function(e){if(null!=e){try{return m.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function R(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function F(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return L(n)?n:void 0}_.prototype.clear=function(){this.__data__=S?S(null):{}},_.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},_.prototype.get=function(e){var t=this.__data__;if(S){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return O.call(t,e)?t[e]:void 0},_.prototype.has=function(e){var t=this.__data__;return S?void 0!==t[e]:O.call(t,e)},_.prototype.set=function(e,t){return this.__data__[e]=S&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,n=P(t,e);return!(n<0)&&(n==t.length-1?t.pop():T.call(t,n,1),!0)},C.prototype.get=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},C.prototype.has=function(e){return P(this.__data__,e)>-1},C.prototype.set=function(e,t){var n=this.__data__,r=P(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},k.prototype.clear=function(){this.__data__={hash:new _,map:new(x||C),string:new _}},k.prototype.delete=function(e){return R(this,e).delete(e)},k.prototype.get=function(e){return R(this,e).get(e)},k.prototype.has=function(e){return R(this,e).has(e)},k.prototype.set=function(e,t){return R(this,e).set(e,t),this};var M=D((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(K(e))return E?E.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var n=[];return i.test(e)&&n.push(""),e.replace(a,(function(e,t,r,o){n.push(r?o.replace(c,"$1"):t||e)})),n}));function N(e){if("string"==typeof e||K(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function D(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(D.Cache||k),n}D.Cache=k;var H=Array.isArray;function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function K(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:I(e,t);return void 0===r?n:r}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js-85e0edf616df3223cf9d.js.map