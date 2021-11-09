"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[9514,5960],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),o=a(3905),l=a(6291),r=a(3938),i=a(6010),c=a(3773),s=a(3783),d=a(5537),m=a(3117),u=function(e){return n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=a(4973),h=a(102),b=a(6742),v=a(3919),f=a(8617),E="menuLinkText_1J2g",g=["items"],k=["item"],C=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],Z=function e(t,a){return"link"===t.type?(0,c.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},N=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,g);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(S,(0,m.Z)({key:t,item:e},a))})))}));function S(e){var t=e.item,a=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(I,(0,m.Z)({item:t},a)):n.createElement(M,(0,m.Z)({item:t},a))}function I(e){var t,a=e.item,o=e.onItemClick,l=e.activePath,r=e.level,s=(0,h.Z)(e,C),d=a.items,u=a.label,p=a.collapsible,b=a.className,v=Z(a,l),f=(0,c.uR)({initialState:function(){return!!p&&(!v&&a.collapsed)}}),g=f.collapsed,k=f.setCollapsed,_=f.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,o=e.setCollapsed,l=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:v,collapsed:g,setCollapsed:k}),n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},b)},n.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&v},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),_()}:void 0,href:p?"#":void 0},s),u),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.createElement(N,{items:d,tabIndex:g?-1:0,onItemClick:o,activePath:l,level:r+1})))}function M(e){var t=e.item,a=e.onItemClick,o=e.activePath,l=e.level,r=(0,h.Z)(e,_),s=t.href,d=t.label,u=t.className,p=Z(t,o);return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},n.createElement(b.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,v.Z)(s)&&{onClick:a},r),(0,v.Z)(s)?d:n.createElement("span",null,d,n.createElement(f.Z,null))))}var T="sidebar_15mo",w="sidebarWithHideableNavbar_267A",L="sidebarHidden_2kNb",A="sidebarLogo_3h0W",y="menu_Bmed",B="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",x),onClick:t},n.createElement(u,{className:F}))}function P(e){var t,a,o=e.path,l=e.sidebar,r=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,n.useState)(e),a=t[0],o=t[1];return(0,c.RF)((function(t){var a=t.scrollY;e&&o(0===a)}),[e]),e&&a}(),u=(0,c.LU)(),p=u.navbar.hideOnScroll,h=u.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(T,(t={},t[w]=p,t[L]=s,t))},p&&n.createElement(d.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",y,(a={},a[B]=m,a))},n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:l,activePath:o,level:1}))),h&&n.createElement(H,{onClick:r}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,o=e.path;return n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:a,activePath:o,onItemClick:function(){return t()},level:1}))};function D(e){return n.createElement(c.Cv,{component:R,props:e})}var W=n.memo(P),z=n.memo(D);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),o&&n.createElement(z,e))}var J=a(5842),V=a(4608),K="backToTopButton_35hR",U="backToTopButtonShow_18ls";function q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,n.useState)(!1),a=t[0],o=t[1],l=(0,n.useRef)(!1),r=q(),s=r.smoothScrollTop,d=r.cancelScrollToTop;return(0,c.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(l.current)l.current=!1;else{var r=a<n;if(r||d(),a<300)o(!1);else if(r){var i=document.documentElement.scrollHeight;a+window.innerHeight<i&&o(!0)}else o(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,o(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,K,(e={},e[U]=a,e)),type:"button",onClick:function(){return s()}})},O=a(5977),Q={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},X=a(9105);function j(e){var t,a,l,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,h=d.pluginId,b=d.version,v=s.sidebar,f=v?d.docsSidebars[v]:void 0,E=(0,n.useState)(!1),g=E[0],k=E[1],C=(0,n.useState)(!1),_=C[0],Z=C[1],N=(0,n.useCallback)((function(){_&&Z(!1),k((function(e){return!e}))}),[_]);return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,c.os)(h,b)}},n.createElement("div",{className:Q.docPage},n.createElement(G,null),f&&n.createElement("aside",{className:(0,i.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&Z(!0)}},n.createElement(Y,{key:v,sidebar:f,path:s.path,onCollapse:N,isHidden:_}),_&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(u,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=g||!f,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=g,l))},n.createElement(o.Zo,{components:J.Z},m)))))}var $=function(e){var t=e.route.routes,a=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,O.LX)(o.pathname,e)}));return r?n.createElement(n.Fragment,null,n.createElement(X.Z,null,n.createElement("html",{className:a.className})),n.createElement(j,{currentDocRoute:r,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(V.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),o=a(3938),l=a(4973);t.default=function(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2086:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(3117),o=a(102),l=a(7294),r=["width","height"];function i(e){var t=e.width,a=void 0===t?20:t,i=e.height,c=void 0===i?20:i,s=(0,o.Z)(e,r);return l.createElement("svg",(0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:a,height:c,viewBox:"0 0 24 24",fill:"#000000","aria-hidden":!0},s),l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}}}]);