"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{6165:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3366),r=n(7294),l=n(6010),c=n(5227),i=n(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",g=n(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var b=n(8013);var h=function(e){var t=e.sidebar,n=e.toc,i=e.children,s=(0,a.Z)(e,["sidebar","toc","children"]),o=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},i),n&&r.createElement("div",{className:"col col--2"},r.createElement(b.Z,{toc:n})))))}},94:function(e,t,n){n.r(t);var a=n(7294),r=n(6742),l=n(6165),c=n(4973),i=n(3018);t.default=function(e){var t=e.tags,n=e.sidebar,s=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var m=Object.entries(o).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){var n=e[0],l=e[1];return a.createElement("article",{key:n},a.createElement("h2",null,n),l.map((function(e){return a.createElement(r.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),a.createElement("hr",null))})).filter((function(e){return null!=e}));return a.createElement(l.Z,{title:s,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,s),a.createElement("section",{className:"margin-vert--lg"},m))}},3082:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=(n(3935),n(412),n(6010)),l="container_2KlB",c="tagline_byts",i=["backgroundBlue_1cxH","backgroundGreen_2wsK","backgroundOrange_1kWu","backgroundPurple_1gnS","backgroundRed_mWnz"],s=a.memo((function(){var e=i[Math.floor(Math.random()*i.length)];return a.createElement("a",{className:(0,r.Z)(l,e),href:"https://www.moonchaser.io/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar",target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","moonchaser.click")}},a.createElement("p",{className:c},a.createElement("strong",null,"Get paid more.")," Receive risk-free salary negotiation help from Moonchaser. You pay nothing unless your offer is increased."))}))},8013:function(e,t,n){n.d(t,{r:function(){return o},Z:function(){return m}});var a=n(7294),r=n(6010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],c=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,i=!1,s=document.getElementsByClassName(e);r<s.length&&!i;){var o=s[r],m=o.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(l&&l.classList.remove(t),o.classList.add(t),c(o),i=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c="tableOfContents_rbnR",i=n(3082),s="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar")},a.createElement("div",{className:"margin--md"},a.createElement(i.Z,null)),a.createElement(o,{toc:t}))}}}]);