"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1,tags:["git","standard"]},o="\u89c4\u8303",c={unversionedId:"git/standard",id:"git/standard",title:"\u89c4\u8303",description:"\u5206\u652f\u89c4\u8303",source:"@site/docs/git/standard.md",sourceDirName:"git",slug:"/git/standard",permalink:"/wiki/docs/git/standard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/standard.md",tags:[{label:"git",permalink:"/wiki/docs/tags/git"},{label:"standard",permalink:"/wiki/docs/tags/standard"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["git","standard"]},sidebar:"wikiSidebar",previous:{title:"Wiki - Git",permalink:"/wiki/docs/category/wiki---git"},next:{title:"Wiki - CSS",permalink:"/wiki/docs/category/wiki---css"}},s={},l=[{value:"\u5206\u652f\u89c4\u8303",id:"\u5206\u652f\u89c4\u8303",level:2},{value:"\u547d\u540d\u89c4\u5219",id:"\u547d\u540d\u89c4\u5219",level:2},{value:"\u63d0\u4ea4\u89c4\u8303",id:"\u63d0\u4ea4\u89c4\u8303",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,i.kt)("h2",{id:"\u5206\u652f\u89c4\u8303"},"\u5206\u652f\u89c4\u8303"),(0,i.kt)("h2",{id:"\u547d\u540d\u89c4\u5219"},"\u547d\u540d\u89c4\u5219"),(0,i.kt)("h2",{id:"\u63d0\u4ea4\u89c4\u8303"},"\u63d0\u4ea4\u89c4\u8303"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"feat\uff1a\u65b0\u529f\u80fd\uff08feature\uff09\nfix\uff1a\u4fee\u8865bug\ndocs\uff1a\u6587\u6863\uff08documentation\uff09\nstyle\uff1a \u683c\u5f0f\uff08\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8\uff09\nrefactor\uff1a\u91cd\u6784\uff08\u5373\u4e0d\u662f\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u6539bug\u7684\u4ee3\u7801\u53d8\u52a8\uff09\ntest\uff1a\u589e\u52a0\u6d4b\u8bd5\nchore\uff1a\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8\n")))}u.isMDXComponent=!0}}]);