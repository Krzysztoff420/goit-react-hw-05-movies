"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{454:function(n,t,e){e.d(t,{l:function(){return r},q:function(){return c}});var r="https://api.themoviedb.org/3/",c="5cf0dee0ec7204706502781114ed57ea"},910:function(n,t,e){e.r(t);var r=e(861),c=e(439),a=e(757),o=e.n(a),i=e(791),u=e(689),s=e(454),f=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1],h=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s.l,"/movie/").concat(h,"/credits?api_key=").concat(s.q));case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,a(e.cast);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[h]),(0,f.jsx)("section",{children:(0,f.jsx)("ul",{children:e.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w45/".concat(n.profile_path),alt:"".concat(n.name)}),(0,f.jsx)("p",{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},861:function(n,t,e){function r(n,t,e,r,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function i(n){r(o,c,a,i,u,"next",n)}function u(n){r(o,c,a,i,u,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=910.0cca214b.chunk.js.map