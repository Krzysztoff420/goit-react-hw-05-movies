"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{454:function(e,n,r){r.d(n,{l:function(){return t},q:function(){return i}});var t="https://api.themoviedb.org/3/",i="5cf0dee0ec7204706502781114ed57ea"},740:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t,i,s,o,c=r(861),a=r(439),l=r(757),d=r.n(l),p=r(87),h=r(689),u=r(791),x=r(168),f=r(444),v=f.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n"]))),j=f.ZP.div(i||(i=(0,x.Z)(["\n  margin-left: 30px;\n"]))),m=f.ZP.div(s||(s=(0,x.Z)(["\n  padding: 10px 0;\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n  margin-top: 5px;\n"]))),g=r(128),b=r(184),w=(0,f.ZP)(p.rU)(o||(o=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: #b00b69;\n  }\n"]))),k=function(e){var n=e.to,r=e.children;return(0,b.jsxs)(w,{to:n,children:[(0,b.jsx)(g.jTe,{size:"15"}),r]})},Z=r(454),_=function(){var e,n,r=(0,h.UO)().movieId,t=null!==(e=null===(n=(0,h.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",i=(0,u.useState)({}),s=(0,a.Z)(i,2),o=s[0],l=s[1],x=(0,u.useState)(""),f=(0,a.Z)(x,2),g=f[0],w=f[1];(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)(d().mark((function e(){var n,t,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Z.l,"movie/").concat(r,"?api_key=").concat(Z.q));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,l(t),i=t.genres.map((function(e){return e.name})).join(" "),w(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[r]);var _=Math.ceil(10*o.vote_average);return(0,b.jsxs)("main",{children:[(0,b.jsx)(k,{to:t,children:"Go back"}),(0,b.jsxs)(v,{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(o.poster_path),alt:"".concat(o.original_title," movie poster")}),(0,b.jsxs)(j,{children:[(0,b.jsx)("h2",{children:o.original_title}),(0,b.jsxs)("p",{children:["User score: ",_,"%"]}),(0,b.jsx)("h4",{children:"Overview"}),(0,b.jsx)("p",{children:o.overview}),(0,b.jsx)("h5",{children:"Genres"}),(0,b.jsx)("p",{children:g})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(u.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading subpage..."}),children:(0,b.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=740.2139f600.chunk.js.map