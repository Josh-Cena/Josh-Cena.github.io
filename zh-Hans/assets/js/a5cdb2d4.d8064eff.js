"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[1743],{7856:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(8646);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9358:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8646),a=n(2398),o=n(6413);function c(e){let{frontMatter:t}=e;const{date:n,link:c}=t;return n||c?r.createElement("div",{className:"alert alert--info margin-bottom--md",role:"contentinfo"},n&&r.createElement(o.Z,{id:"docMetadataBanner.firstPublished",values:{date:r.createElement("b",null,n.toLocaleDateString("zh-Hans"))}},"First published on {date}. "),c&&r.createElement(a.default,{to:c},r.createElement(o.Z,{id:"docMetadataBanner.sourceLink"},"Source link"))):null}},5289:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(8646);function a(e){let{children:t,src:n}=e;return r.createElement("figure",{style:{textAlign:"center"}},r.createElement("img",{src:n}),r.createElement("figcaption",{style:{color:"gray",fontSize:"small"}},t))}},7804:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,assets:()=>p,toc:()=>u,default:()=>m});var r=n(1246),a=(n(8646),n(7856)),o=(n(5289),n(9358));const c={id:"about",title:"\u5173\u4e8e\u8fd9\u4e9b\u6587\u7ae0"},i=void 0,l={unversionedId:"about",id:"about",title:"\u5173\u4e8e\u8fd9\u4e9b\u6587\u7ae0",description:"\u5f53\u6211\u5f00\u59cb\u5efa\u9020\u8fd9\u4e2a\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6211\u9700\u8981\u4f5c\u51fa\u4e0d\u5c11\u6289\u62e9\u3002\u6700\u91cd\u8981\u7684\u662f\u5173\u4e8e\u7f51\u7ad9\u7684\u5b9a\u4f4d\u2014\u2014\u6211\u5e94\u8be5\u53d1\u4e9b\u4ec0\u4e48\uff1f\u6211\u7684\u76ee\u6807\u7fa4\u4f53\u662f\u8c01\uff1f\u6211\u5e94\u8be5\u7ed9\u81ea\u5df1\u7acb\u4ec0\u4e48\u4eba\u8bbe\uff1f\u6211\u5e94\u8be5\u591a\u8ba4\u771f\u5730\u5bf9\u5f85\u5b83\uff1f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/About.mdx",sourceDirName:".",slug:"/about",permalink:"/old-website/zh-Hans/docs/about",tags:[],version:"current",frontMatter:{id:"about",title:"\u5173\u4e8e\u8fd9\u4e9b\u6587\u7ae0"},sidebar:"docs",next:{title:"\u5e73\u9762\u51e0\u4f55\u5927\u5b9d\u9274\uff1a\u7956\u6685\u539f\u7406\u7684\u5e73\u9762\u51e0\u4f55\u8fd0\u7528",permalink:"/old-website/zh-Hans/docs/Science/cavalieri"}},p={},u=[],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{frontMatter:c,mdxType:"DocMetadataBanner"}),(0,a.kt)("p",null,"\u5f53\u6211\u5f00\u59cb\u5efa\u9020\u8fd9\u4e2a\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6211\u9700\u8981\u4f5c\u51fa\u4e0d\u5c11\u6289\u62e9\u3002\u6700\u91cd\u8981\u7684\u662f\u5173\u4e8e\u7f51\u7ad9\u7684\u5b9a\u4f4d\u2014\u2014\u6211\u5e94\u8be5\u53d1\u4e9b\u4ec0\u4e48\uff1f\u6211\u7684\u76ee\u6807\u7fa4\u4f53\u662f\u8c01\uff1f\u6211\u5e94\u8be5\u7ed9\u81ea\u5df1\u7acb\u4ec0\u4e48\u4eba\u8bbe\uff1f\u6211\u5e94\u8be5\u591a\u8ba4\u771f\u5730\u5bf9\u5f85\u5b83\uff1f"),(0,a.kt)("p",null,"\u6211\u5df2\u7ecf\u5199\u4e86\u4e0d\u5c11\u4e1c\u897f\u4e86\uff0c\u6709\u4e9b\u7528\u4e2d\u6587\uff0c\u6709\u4e9b\u7528\u82f1\u6587\uff0c\u6563\u5e03\u5728\u7f51\u7edc\u7684\u5404\u4e2a\u89d2\u843d\u3002\u5217\u4e3e\u51e0\u4e2a\u6765\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMzI0ODk0NA==&scene=124#wechat_redirect"},"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMzI0ODk0NA==&scene=124#wechat_redirect")),(0,a.kt)("li",{parentName:"ul"},"\u77e5\u4e4e\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.zhihu.com/people/joshcena"},"https://www.zhihu.com/people/joshcena"))),(0,a.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u8fd9\u4e2a\u6e05\u5355\u73b0\u5728\u4e3b\u8981\u662f\u56fd\u5185\u7684\u5e73\u53f0\u3002\u6211\u4e0d\u4e86\u89e3\u591a\u5c11\u5916\u56fd\u7684\u5e73\u53f0\uff0c\u4e0d\u77e5\u9053\u54ea\u4e9b\u6b22\u8fce\u5199\u624b\u4eec\u6765\u5199\u957f\u6587\u2014\u2014\u770b\u8d77\u6765\uff0c\u5927\u5bb6\u6700\u666e\u904d\u7684\u505a\u6cd5\u662f\u8bbe\u7acb\u4e00\u4e2a\u4e2a\u4eba\u7f51\u7ad9\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u73b0\u5728\u4f60\u770b\u5230\u7684\u5c31\u662f\u6211\u7684\u4e2a\u4eba\u7f51\u7ad9\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"\u6587\u7ae0"),"\u90e8\u5206\uff0c\u6587\u7ae0\u90fd\u662f",(0,a.kt)("em",{parentName:"p"},"\u53ef\u590d\u7528\u7684"),"\uff1a\u5b83\u4eec\u53ea\u4f20\u8fbe\u4fe1\u606f\uff1b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"\u535a\u5ba2"),"\u90e8\u5206\u7684\u6587\u7ae0\u5c31\u66f4\u52a0",(0,a.kt)("em",{parentName:"p"},"\u4e00\u6b21\u6027"),"\uff1a\u5b83\u4eec\u8bb0\u5f55\u4e86\u6211\u7684\u7ecf\u5386\u3002\u5982\u679c\u4f60\u60f3\u770b\u6211\u662f\u5982\u4f55\u5b66\u4e60\u4f7f\u7528 TypeScript \u6216\u8005 Apache \u8fd9\u6837\u7684\u5de5\u5177\u7684\uff0c\u4f60\u53ef\u4ee5\u53bb\u535a\u5ba2\uff1b\u5982\u679c\u4f60\u60f3\u8981\u5b66\u70b9\u4e1c\u897f\uff08\u6570\u5b66\u3001\u7ecf\u6d4e\u3001\u751f\u7269\uff0c\u4ec0\u4e48\u90fd\u884c\uff09\uff0c\u4f60\u66f4\u5e94\u8be5\u770b\u6587\u7ae0\u3002"),(0,a.kt)("p",null,"\u6211\u5e0c\u671b\u4f60\u80fd\u5b66\u5230\u70b9\u4ec0\u4e48\uff0c\u6216\u8005\u4e86\u89e3\u66f4\u591a\u6211\u6240\u8fbe\u6210\u7684\u3002"))}m.isMDXComponent=!0}}]);