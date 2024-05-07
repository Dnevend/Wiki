"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=l,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={slug:"debug-mobile-web",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",authors:["Dnevend"],tags:["tech"]},a="\u79fb\u52a8\u7aef\u8c03\u8bd5",i={permalink:"/blog/debug-mobile-web",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/debug-mobile-web/index.md",source:"@site/blog/debug-mobile-web/index.md",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",date:"2024-05-07T01:31:43.000Z",formattedDate:"2024\u5e745\u67087\u65e5",tags:[{label:"tech",permalink:"/blog/tags/tech"}],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"\u5c0f\u5b66\u540e\u751f",title:"Full Stack Developer",url:"https://dnevend.github.io",imageURL:"https://github.com/Dnevend.png",key:"Dnevend"}],frontMatter:{slug:"debug-mobile-web",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",authors:["Dnevend"],tags:["tech"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528 <a href='chrome://inspect'>chrome://inspect</a> \u8c03\u8bd5",id:"\u4f7f\u7528-chromeinspect-\u8c03\u8bd5",level:2},{value:"\u5f00\u542f USB \u8c03\u8bd5",id:"\u5f00\u542f-usb-\u8c03\u8bd5",level:3},{value:"\u542f\u7528\u8c03\u8bd5",id:"\u542f\u7528\u8c03\u8bd5",level:3},{value:"\u4f7f\u7528 whistle \u8c03\u8bd5",id:"\u4f7f\u7528-whistle-\u8c03\u8bd5",level:2},{value:"\u5b98\u65b9\u4ecb\u7ecd",id:"\u5b98\u65b9\u4ecb\u7ecd",level:3},{value:"\u5b89\u88c5&amp;\u542f\u52a8",id:"\u5b89\u88c5\u542f\u52a8",level:3},{value:"\u4ee3\u7406&amp;\u8bc1\u4e66\u914d\u7f6e",id:"\u4ee3\u7406\u8bc1\u4e66\u914d\u7f6e",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u539f\u7406&amp;\u6d41\u7a0b",id:"\u539f\u7406\u6d41\u7a0b",level:3},{value:"\u5e38\u7528\u89c4\u5219",id:"\u5e38\u7528\u89c4\u5219",level:3},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,l.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5f53\u79fb\u52a8\u7aef web \u9879\u76ee\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883, \u51fa\u73b0 Android/ios \u7279\u5b9a\u8bbe\u5907\u4e0b\u7684\u6837\u5f0f\u517c\u5bb9\u95ee\u9898, \u6216\u60f3\u8981\u6a21\u62df\u8bf7\u6c42\u4e0e\u54cd\u5e94\u6570\u636e, \u4ee5\u53ca\u67e5\u770b Debug \u7684\u6570\u636e\u5185\u5bb9\u65f6, \u8be5\u5982\u4f55\u8fdb\u884c\u8c03\u8bd5?"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u573a\u666f,\u4f60\u53ef\u4ee5\u901a\u8fc7 Chrome \u6d4f\u89c8\u5668\u81ea\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," \u529f\u80fd, \u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u8bbe\u5907, \u8fdb\u884c\u771f\u673a\u8c03\u8bd5."),(0,l.kt)("p",null,"\u4f46\u5f53\u9047\u5230\u9700\u8981\u6a21\u62df\u7279\u5b9a\u8bf7\u6c42\u6216\u54cd\u5e94\u5185\u5bb9\u3001\u6ce8\u5165\u811a\u672c\u3001\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u5934\u7684\u573a\u666f\u65f6, Chrome \u81ea\u5e26\u7684\u8c03\u8bd5\u5de5\u5177\u5c31\u96be\u4ee5\u5e94\u5bf9\u4e86. \u53c8\u6216\u8005, \u4f60\u7684\u9879\u76ee\u4f5c\u4e3a web-view \u9875\u9762\u5d4c\u5165\u5728\u5176\u4ed6\u7684\u5e94\u7528\u7a0b\u5e8f\u5185, \u5728\u8fd9\u51e0\u79cd\u573a\u666f\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"whistle")," \u5de5\u5177\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u53d1\u6325\u4e86."),(0,l.kt)("h2",{id:"\u4f7f\u7528-chromeinspect-\u8c03\u8bd5"},"\u4f7f\u7528 ",(0,l.kt)("a",{href:"chrome://inspect"},"chrome://inspect")," \u8c03\u8bd5"),(0,l.kt)("h3",{id:"\u5f00\u542f-usb-\u8c03\u8bd5"},"\u5f00\u542f USB \u8c03\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/debug/dev-options?hl=zh-cn#Enable-debugging"},"Android"))),(0,l.kt)("h3",{id:"\u542f\u7528\u8c03\u8bd5"},"\u542f\u7528\u8c03\u8bd5"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"inspect page",src:n(1448).Z,width:"1240",height:"720"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dev-tools",src:n(7391).Z,width:"1269",height:"812"})),(0,l.kt)("h2",{id:"\u4f7f\u7528-whistle-\u8c03\u8bd5"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"h2",href:"https://wproxy.org/whistle/"},"whistle")," \u8c03\u8bd5"),(0,l.kt)("h3",{id:"\u5b98\u65b9\u4ecb\u7ecd"},"\u5b98\u65b9\u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"whistle(\u8bfb\u97f3","[\u02c8w\u026as\u0259l]","\uff0c\u62fc\u97f3","[w\u0113is\u01d2u]",") \u57fa\u4e8e Node \u5b9e\u73b0\u7684\u8de8\u5e73\u53f0 web \u8c03\u8bd5\u4ee3\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u7684\u5de5\u5177\u6709 Windows \u5e73\u53f0\u4e0a\u7684 Fiddler\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u770b\u3001\u4fee\u6539 HTTP\u3001HTTPS\u3001Websocket \u7684\u8bf7\u6c42\u3001\u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668\u4f7f\u7528\uff0c\u4e0d\u540c\u4e8e Fiddler \u901a\u8fc7\u65ad\u70b9\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u7684\u65b9\u5f0f\uff0cwhistle \u91c7\u7528\u7684\u662f\u7c7b\u4f3c\u914d\u7f6e\u7cfb\u7edf hosts \u7684\u65b9\u5f0f\uff0c\u4e00\u5207\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5b9e\u73b0\uff0c\u652f\u6301\u57df\u540d\u3001\u8def\u5f84\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001\u901a\u914d\u7b26\u3001\u901a\u914d\u8def\u5f84\u7b49\u591a\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u4e14\u53ef\u4ee5\u901a\u8fc7 Node \u6a21\u5757\u6269\u5c55\u529f\u80fd")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u542f\u52a8"},"\u5b89\u88c5&\u542f\u52a8"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b65\u9aa4: \u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"Node")," > \u5b89\u88c5 whistle > \u542f\u52a8 whistle > \u914d\u7f6e\u4ee3\u7406 > \u5b89\u88c5\u6839\u8bc1\u4e66")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5b89\u88c5\nnpm install -g whistle\n\n# \u68c0\u67e5: \u6267\u884c\u4e0b\u65b9\u547d\u4ee4\u540e\u5982\u679c\u6b63\u5e38\u8f93\u51fawhistle\u5e2e\u52a9\u4fe1\u606f, \u4ee3\u8868\u5b89\u88c5\u6210\u529f\nw2 help\n\n# \u542f\u52a8: \u8fd0\u884c\u540e\u9ed8\u8ba4\u8bbf\u95ee\u5730\u5740\u4e3a http://127.0.0.1:8899/\nw2 start\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u547d\u4ee4\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/options.html"},"\u5b98\u65b9\u6587\u6863"))),(0,l.kt)("h3",{id:"\u4ee3\u7406\u8bc1\u4e66\u914d\u7f6e"},"\u4ee3\u7406&\u8bc1\u4e66\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"qrcode",src:n(2787).Z,width:"3094",height:"1790"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"network",src:n(5817).Z,width:"3096",height:"1960"})),(0,l.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u539f\u7406\u6d41\u7a0b"},"\u539f\u7406&\u6d41\u7a0b"),(0,l.kt)("h3",{id:"\u5e38\u7528\u89c4\u5219"},"\u5e38\u7528\u89c4\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u4fee\u6539\u8bf7\u6c42\u5217\u8868\u663e\u793aStyle\n    style://color=@fff&fontStyle=italic&bgColor=red\n# \u4fee\u6539UserAgent\n    ua://{ua}\n# \u4fee\u6539\u72b6\u6001\u7801\n    statusCode://[statusCode]\n# \u4fee\u6539\u8bf7\u6c42\u5934/\u54cd\u5e94\u5934\n    reqHeaders://{value}  resHeaders://{value}\n# \u4fee\u6539\u8bf7\u6c42\u5185\u5bb9\n    reqBody://{request.json}\n# \u4fee\u6539\u54cd\u5e94\u5185\u5bb9\n    resBody://{response.json}\n# \u6a21\u62df\u5ef6\u65f6\n    reqDelay://[delayTime]\n# \u5904\u7406\u8de8\u57df\n    resCors://*\n# \u4fee\u6539Host\u914d\u7f6e\n    [originHost] [targetHost]\n\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u53c2\u8003"},"\u5f15\u7528\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://wproxy.org/whistle/"},"Whistle")))}u.isMDXComponent=!0},7391:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dev-tools-b7f236d61bd1ad56a38b9c4798b102f0.png"},1448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/inspect-a4dc829510429801149bb8cc24922abb.png"},5817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network-bcd00679be3e7589e23688f543d7eb2f.png"},2787:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/qrcode-6d77d5a78638f74bb6784cc8891e495d.png"}}]);