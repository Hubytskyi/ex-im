"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_agency=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_agency||[]).push([[789],{2315:function(t,r,n){n.r(r),n.d(r,{default:function(){return k}});var e=n(808),a=(n(7378),n(1477)),i=n(3095),A=n(9835),o=n(8692),u=n(7296),l=n(8945),s=n(1115),c=n(2551),p=n(9784),x=n(9770),f=n(559),g={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},imgWrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 100%)"}]}},Z=function(t){var r=t.children;return(0,f.tZ)(l.X6,{variant:"h4",sx:g.subheader},r)},d=function(t){var r=t.name,n=t.photo,e=t.slug;return n?(0,f.tZ)(l.xu,{sx:g.imgWrapper},(0,f.tZ)(l.rU,{as:u.rU,to:"/"+e,"aria-label":r},(0,f.tZ)(x.Z,{icon:n,width:"150px",height:"150px",objectFit:"cover",borderRadius:"100%"}))):null},b=function(t){var r=t.name,n=t.slug;return(0,f.tZ)(l.xu,{sx:g.name},(0,f.tZ)(l.X6,{variant:"h3"},(0,f.tZ)(l.rU,{as:u.rU,to:n},r)))},v=function(t){var r=t.position,n=t.description;return(0,f.tZ)(l.xu,{sx:g.bio},(0,f.tZ)(Z,null,r),(0,f.tZ)(l.xv,null,n))},m=function(t){var r=t.expertise.split(",").map((function(t){return t.trim()}));return r?(0,f.tZ)(l.xu,{sx:g.innerBox},(0,f.tZ)(Z,null,"Expertise"),r.map((function(t){return(0,f.tZ)(l.xv,{key:"skill-"+t},t)}))):null},y=function(t){var r=t.website,n=t.instagram,e=t.twitter,a=[n,e,r];return r||n||e?(0,f.tZ)(l.xu,{sx:g.innerBox},(0,f.tZ)(Z,null,"Social Media"),(0,f.tZ)(p.Z,{variant:"vertical",items:(0,c.Z)(a),wrapperStyle:g.socialList})):null},h=function(t){var r=t.author,n=t.withLink;if(!r)return null;var e=r.expertise,a=r.website,i=r.instagram,A=r.twitter;return(0,f.tZ)(l.Zb,{variant:"paper",sx:g.card},(0,f.tZ)(l.kC,{sx:g.wrapper},(0,f.tZ)(l.xu,{sx:g.avatarColumn},(0,f.tZ)(d,r)),(0,f.tZ)(l.xu,{sx:g.infoColumn},(0,f.tZ)(b,r),(0,f.tZ)(l.kC,{sx:g.wrapper},(0,f.tZ)(l.xu,{sx:g.innerBox},(0,f.tZ)(v,r)),(e||a||i||A)&&(0,f.tZ)(l.xu,{sx:g.innerBox},(0,f.tZ)(l.kC,null,(0,f.tZ)(m,r),(0,f.tZ)(y,r)))))),n&&(0,f.tZ)(l.Ct,{variant:"tag",as:u.rU,to:r.slug,sx:g.link},"View Posts"),(0,f.tZ)(l.xu,{sx:g.gradient}),(0,f.tZ)(s.Z,{sx:g.pattern}))},z=n(5110),W=["data"],k=function(t){var r=t.data,n=r.posts,u=r.collectionInfo,l=(0,e.Z)(t,W);return(0,f.tZ)(a.Ar,l,(0,f.tZ)(o.Z,{title:u.name,description:u.description}),(0,f.tZ)(A.Z,null),(0,f.tZ)(a.Kq,{effectProps:{effect:"fadeInDown"}},(0,f.tZ)(i.Z,{header:"Published by Author",totalCount:n.totalCount})),(0,f.tZ)(A.Z,null),(0,f.tZ)(a.Kq,null,(0,f.tZ)(a.or,null,(0,f.tZ)(h,{author:u}),(0,f.tZ)(A.Z,null),n.nodes&&(0,f.tZ)(z.Z,n))),(0,f.tZ)(A.Z,null))}},1115:function(t,r,n){n.d(r,{Z:function(){return p}});var e=n(5773),a=n(4649),i=n(808),A=(n(7378),n(8945)),o=n(559),u=["sx"];function l(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function s(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,a.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var c={pattern:{size:"full",backgroundImage:"url(data:image/png;base64,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)",backgroundSize:"11rem",position:"absolute",opacity:.05,top:0,left:0}},p=function(t){var r=t.sx,n=void 0===r?{}:r,a=(0,i.Z)(t,u);return(0,o.tZ)(A.xu,(0,e.Z)({sx:s(s({},c.pattern),n)},a))}},9784:function(t,r,n){n.d(r,{Z:function(){return y}});var e=n(4649),a=n(5773),i=n(808),A=n(7378),o=n(7296),u=n(8945),l=n(5302),s=n(2923),c=n(559),p=["navKey","wrapperProps","items"],x=["items","variant","headingProps","wrapperStyle"];function f(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function g(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,e.Z)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var Z={divider:{mt:3}},d=function(t){var r=t.navKey,n=t.wrapperProps,e=t.items,A=(0,i.Z)(t,p);return e?(0,c.tZ)(u.kC,n,e.map((function(t,n){return(0,c.tZ)(v,(0,a.Z)({key:r+"-"+n},t,A))}))):null},b=function(t){return 0!==t.index&&(0,c.tZ)(u.iz,{sx:Z.divider})},v=function(t){var r=t.name,n=t.slug,e=t.url,i=t.Icon,A=t.color,l=t.variant,s=t.iconOnly,p={sx:{variant:s?"icon":l}};return e&&(p=g(g({},p),{},{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"})),n&&(p=g(g({},p),{},{as:o.rU,to:n})),s?(0,c.tZ)(u.hU,(0,a.Z)({},p,{title:r}),i&&(0,c.tZ)(i,{color:A})):(0,c.tZ)(u.OL,p,i&&(0,c.tZ)(i,{color:A}),r)},m=function(t){var r=t.items,n=t.variant,e=t.headingProps,o=t.wrapperStyle,p=(0,i.Z)(t,x);if(!r||!r.length)return null;var f=(0,s.Z)("lists.links",n),Z=(0,s.Z)("links",n),v=(0,l.Z)(r.map((function(t){return t.title||t.name})).join())+"-nav",m={sx:g({variant:f},o),key:v};return Array.isArray(r[0].items)?r.map((function(t,r){return(0,c.tZ)(A.Fragment,{key:"nav-menu-"+r},(0,c.tZ)(b,{index:r}),(0,c.tZ)(u.X6,e,t.title),(0,c.tZ)(d,(0,a.Z)({navKey:v,wrapperProps:m,items:t.items,variant:Z},p)))})):(0,c.tZ)(d,(0,a.Z)({navKey:v,wrapperProps:m,items:r,variant:Z},p))},y=m;m.defaultProps={variant:"horizontal"}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-author-gs-js-295af0a07341cdbe7d2e.js.map