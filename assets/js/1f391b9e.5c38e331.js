"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3085],{87529:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var t=n(67294),l=n(86010),c=n(32600),i=n(47459),s=n(51575),m=n(5979),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,d=n.description,v=n.frontMatter,u=v.wrapperClassName,f=v.hide_table_of_contents;return t.createElement(m.FG,{className:(0,l.Z)(null!=u?u:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},t.createElement(m.d,{title:o,description:d}),t.createElement(c.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",r)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(i.Z,null,t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},51575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(87462),l=n(63366),c=n(67294),i=n(86010),s=n(25002),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,r);return c.createElement("div",{className:(0,i.Z)(m,"thin-scrollbar",a)},c.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(87462),l=n(63366),c=n(67294),i=n(5979),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?c.createElement("ul",{className:l?void 0:n},a.map((function(e){return c.createElement("li",{key:e.id},c.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),c.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,s),_=(0,i.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=N?N:_.tableOfContents.maxHeadingLevel,E=(0,i.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,c.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,i.Si)(h),c.createElement(m,(0,t.Z)({toc:E,className:r,linkClassName:d},g))}}}]);