"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{820:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(861),c=t(439),i=t(757),o=t.n(i),u=t(87),a=t(689),s=t(184),f=function(n){var e=n.movies,t=(0,a.TH)();return(0,s.jsx)("ul",{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(n.id),state:{from:t},children:n.original_title},n.id)},n.id)}))})},l=t(791),h=function(){var n,e=(0,l.useState)([]),t=(0,c.Z)(e,2),i=t[0],a=t[1],h=(0,u.lr)(),v=(0,c.Z)(h,2),d=v[0],p=v[1],m=null!==(n=d.get("query"))&&void 0!==n?n:"",x=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("93dad7f5c3f08e509beef896c33679a7","&").concat(d));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,a(t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,s.jsxs)("main",{children:[(0,s.jsx)("input",{type:"text",value:m,onChange:function(n){var e=n.target.value;p(""!==e?{query:e}:{})}}),(0,s.jsx)("button",{onClick:x,children:"Search"}),(0,s.jsx)(f,{movies:i})]})}},861:function(n,e,t){function r(n,e,t,r,c,i,o){try{var u=n[i](o),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var o=n.apply(e,t);function u(n){r(o,c,i,u,a,"next",n)}function a(n){r(o,c,i,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=820.3a68fdd8.chunk.js.map