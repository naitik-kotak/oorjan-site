(this["webpackJsonpblog-site"]=this["webpackJsonpblog-site"]||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(14),s=n.n(a),i=n(5),o=n.n(i),j=n(15),l=n(3),b=n.p+"static/media/logo.47b6c9a0.png";var u=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)("div",{className:"item",children:Object(r.jsx)("a",{href:"https://www.oorjan.com/home",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:"image",style:{width:"9.5rem",paddingTop:"2rem"},src:b,alt:"logo"})})})})};var d=function(e){var t=e.onTermSearch,n=Object(c.useState)(""),a=Object(l.a)(n,2),s=a[0],i=a[1],o=function(e){e.preventDefault(),t(s),i("")};return Object(r.jsxs)("form",{style:{marginBottom:"2rem"},className:"ui form",onSubmit:o,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Search here"}),Object(r.jsx)("input",{type:"text",value:s,placeholder:"Eg) Panel Cost, Solar Inverters",onChange:function(e){i(e.target.value)}})]}),Object(r.jsx)("div",{className:"ui-inverted-segment",children:Object(r.jsx)("button",{className:"ui  inverted green button",onClick:o,children:"Find Oorjan Solutions"})})]})};var h=function(e){var t=e.blog;return Object(r.jsx)("div",{className:"ui center aligned segment",children:Object(r.jsx)("a",{style:{textDecoration:"none",color:"#000"},href:t.url,target:"_blank",rel:"noreferrer",children:t.title})})};var O=function(e){var t=e.blogs;if(t!==[]){var n=t.map((function(e){return Object(r.jsx)(h,{blog:e},e.id)}));return Object(r.jsx)("div",{children:n})}};var m=function(){return Object(r.jsx)("div",{className:"ui active centered inline text loader ",children:"Getting your Blogs"})};var v=function(e){var t=e.searchTerm;return Object(r.jsxs)("div",{className:"ui center aligned segment negative message",children:[Object(r.jsxs)("h5",{children:["Sorry, nothing found with the term ",Object(r.jsx)("span",{}),Object(r.jsx)("span",{style:{fontSize:"25px",textDecoration:"underline"},children:t})]}),Object(r.jsx)("h4",{children:" Please Search Again !!"})]})},x=n(16),g=n.n(x);var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),b=i[0],h=i[1],x=Object(c.useState)(""),f=Object(l.a)(x,2),p=f[0],w=f[1],S=Object(c.useState)(!1),N=Object(l.a)(S,2),y=N[0],k=N[1],T=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"solar",e.next=3,g.a.get("https://www.oorjan.com/blog/wp-json/wp/v2/search?search=%27".concat(t,"%27&per_page=5"));case 3:n=e.sent,h(!1),0===n.data.length?k(!0):a(n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"ui container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{}),Object(r.jsx)("br",{}),Object(r.jsx)(d,{onTermSearch:function(e){k(!1),h(!0),w(e),T(e)}})]}),!0===y?Object(r.jsx)(v,{searchTerm:p}):Object(r.jsx)("div",{children:!0===b?Object(r.jsx)(m,{}):Object(r.jsx)(O,{blogs:n})})]})};s.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4912eb79.chunk.js.map