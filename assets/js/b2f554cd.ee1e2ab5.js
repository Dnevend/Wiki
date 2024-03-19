"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"debug-mobile-web","metadata":{"permalink":"/blog/debug-mobile-web","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/debug-mobile-web/index.md","source":"@site/blog/debug-mobile-web/index.md","title":"\u79fb\u52a8\u7aef\u8c03\u8bd5","description":"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5","date":"2024-03-19T12:07:21.000Z","formattedDate":"2024\u5e743\u670819\u65e5","tags":[{"label":"tech","permalink":"/blog/tags/tech"}],"readingTime":2.725,"hasTruncateMarker":false,"authors":[{"name":"\u5c0f\u5b66\u540e\u751f","title":"Full Stack Developer","url":"https://dnevend.github.io","imageURL":"https://github.com/Dnevend.png","key":"Dnevend"}],"frontMatter":{"slug":"debug-mobile-web","title":"\u79fb\u52a8\u7aef\u8c03\u8bd5","description":"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5","authors":["Dnevend"],"tags":["tech"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## \u4ecb\u7ecd\\n\\n\u5f53\u79fb\u52a8\u7aef web \u9879\u76ee\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883, \u51fa\u73b0 Android/ios \u7279\u5b9a\u8bbe\u5907\u4e0b\u7684\u6837\u5f0f\u517c\u5bb9\u95ee\u9898, \u6216\u60f3\u8981\u6a21\u62df\u8bf7\u6c42\u4e0e\u54cd\u5e94\u6570\u636e, \u4ee5\u53ca\u67e5\u770b Debug \u7684\u6570\u636e\u5185\u5bb9\u65f6, \u8be5\u5982\u4f55\u8fdb\u884c\u8c03\u8bd5?\\n\\n\u5927\u591a\u6570\u573a\u666f,\u4f60\u53ef\u4ee5\u901a\u8fc7 Chrome \u6d4f\u89c8\u5668\u81ea\u5e26\u7684 `chrome://inspect` \u529f\u80fd, \u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u8bbe\u5907, \u8fdb\u884c\u771f\u673a\u8c03\u8bd5.\\n\\n\u4f46\u5f53\u9047\u5230\u9700\u8981\u6a21\u62df\u7279\u5b9a\u8bf7\u6c42\u6216\u54cd\u5e94\u5185\u5bb9\u3001\u6ce8\u5165\u811a\u672c\u3001\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u5934\u7684\u573a\u666f\u65f6, Chrome \u81ea\u5e26\u7684\u8c03\u8bd5\u5de5\u5177\u5c31\u96be\u4ee5\u5e94\u5bf9\u4e86. \u53c8\u6216\u8005, \u4f60\u7684\u9879\u76ee\u4f5c\u4e3a web-view \u9875\u9762\u5d4c\u5165\u5728\u5176\u4ed6\u7684\u5e94\u7528\u7a0b\u5e8f\u5185, \u5728\u8fd9\u51e0\u79cd\u573a\u666f\u4e0b `whistle` \u5de5\u5177\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u53d1\u6325\u4e86.\\n\\n## \u4f7f\u7528 <a href=\'chrome://inspect\'>chrome://inspect</a> \u8c03\u8bd5\\n\\n### \u5f00\u542f USB \u8c03\u8bd5\\n\\n- [Android](https://developer.android.com/studio/debug/dev-options?hl=zh-cn#Enable-debugging)\\n\\n### \u542f\u7528\u8c03\u8bd5\\n\\n![inspect page](./inspect.png)\\n\\n![dev-tools](./dev-tools.png)\\n\\n## \u4f7f\u7528 [whistle](https://wproxy.org/whistle/) \u8c03\u8bd5\\n\\n### \u5b98\u65b9\u4ecb\u7ecd\\n\\n> whistle(\u8bfb\u97f3[\u02c8w\u026as\u0259l]\uff0c\u62fc\u97f3[w\u0113is\u01d2u]) \u57fa\u4e8e Node \u5b9e\u73b0\u7684\u8de8\u5e73\u53f0 web \u8c03\u8bd5\u4ee3\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u7684\u5de5\u5177\u6709 Windows \u5e73\u53f0\u4e0a\u7684 Fiddler\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u770b\u3001\u4fee\u6539 HTTP\u3001HTTPS\u3001Websocket \u7684\u8bf7\u6c42\u3001\u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668\u4f7f\u7528\uff0c\u4e0d\u540c\u4e8e Fiddler \u901a\u8fc7\u65ad\u70b9\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u7684\u65b9\u5f0f\uff0cwhistle \u91c7\u7528\u7684\u662f\u7c7b\u4f3c\u914d\u7f6e\u7cfb\u7edf hosts \u7684\u65b9\u5f0f\uff0c\u4e00\u5207\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5b9e\u73b0\uff0c\u652f\u6301\u57df\u540d\u3001\u8def\u5f84\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001\u901a\u914d\u7b26\u3001\u901a\u914d\u8def\u5f84\u7b49\u591a\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u4e14\u53ef\u4ee5\u901a\u8fc7 Node \u6a21\u5757\u6269\u5c55\u529f\u80fd\\n\\n### \u5b89\u88c5&\u542f\u52a8\\n\\n> \u6b65\u9aa4: \u5b89\u88c5 [Node](https://nodejs.org/en) > \u5b89\u88c5 whistle > \u542f\u52a8 whistle > \u914d\u7f6e\u4ee3\u7406 > \u5b89\u88c5\u6839\u8bc1\u4e66\\n\\n```\\n# \u5b89\u88c5\\nnpm install -g whistle\\n\\n# \u68c0\u67e5: \u6267\u884c\u4e0b\u65b9\u547d\u4ee4\u540e\u5982\u679c\u6b63\u5e38\u8f93\u51fawhistle\u5e2e\u52a9\u4fe1\u606f, \u4ee3\u8868\u5b89\u88c5\u6210\u529f\\nw2 help\\n\\n# \u542f\u52a8: \u8fd0\u884c\u540e\u9ed8\u8ba4\u8bbf\u95ee\u5730\u5740\u4e3a http://127.0.0.1:8899/\\nw2 start\\n```\\n\\n> \u66f4\u591a\u547d\u4ee4\u89c1 [\u5b98\u65b9\u6587\u6863](https://wproxy.org/whistle/options.html)\\n\\n### \u4ee3\u7406&\u8bc1\u4e66\u914d\u7f6e\\n\\n![qrcode](./qrcode.png)\\n\\n![network](./network.png)\\n\\n### \u4f7f\u7528\\n\\n### \u539f\u7406&\u6d41\u7a0b\\n\\n### \u5e38\u7528\u89c4\u5219\\n\\n```\\n# \u4fee\u6539\u8bf7\u6c42\u5217\u8868\u663e\u793aStyle\\n    style://color=@fff&fontStyle=italic&bgColor=red\\n# \u4fee\u6539UserAgent\\n\\tua://{ua}\\n# \u4fee\u6539\u72b6\u6001\u7801\\n\\tstatusCode://[statusCode]\\n# \u4fee\u6539\u8bf7\u6c42\u5934/\u54cd\u5e94\u5934\\n\\treqHeaders://{value}  resHeaders://{value}\\n# \u4fee\u6539\u8bf7\u6c42\u5185\u5bb9\\n\\treqBody://{request.json}\\n# \u4fee\u6539\u54cd\u5e94\u5185\u5bb9\\n\\tresBody://{response.json}\\n# \u6a21\u62df\u5ef6\u65f6\\n\\treqDelay://[delayTime]\\n# \u5904\u7406\u8de8\u57df\\n\\tresCors://*\\n# \u4fee\u6539Host\u914d\u7f6e\\n\\t[originHost] [targetHost]\\n\\n```\\n\\n## \u5f15\u7528\u53c2\u8003\\n\\n[Whistle](https://wproxy.org/whistle/)"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"\u79fb\u52a8\u7aef\u8c03\u8bd5","permalink":"/blog/debug-mobile-web"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"2019\u5e745\u670829\u65e5","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);