(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[801],{801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(861),o=n(439),i=n(757),c=n.n(i),a=n(87),s=n(689),u=n(184),p=function(e){var t=e.movies,n=(0,s.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(e.id),state:{from:n},children:e.original_title},e.id)},e.id)}))})},f=n(791),l=n(7),h=function(){var e,t=(0,f.useState)([]),n=(0,o.Z)(t,2),i=n[0],s=n[1],l=(0,a.lr)(),h=(0,o.Z)(l,2),v=h[0],d=h[1],y=null!==(e=v.get("query"))&&void 0!==e?e:"",m=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("93dad7f5c3f08e509beef896c33679a7","&").concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("main",{children:[(0,u.jsx)("input",{type:"text",value:y,onChange:function(e){var t=e.target.value;d(""!==t?{query:t}:{})}}),(0,u.jsx)("button",{onClick:m,children:"Search"}),(0,u.jsx)(p,{movies:i})]})};p.propTypes={movies:n.n(l)().array.isRequired}},888:function(e,t,n){"use strict";var r=n(47);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,s,"next",e)}function s(e){r(c,o,i,a,s,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=801.85e1e6d8.chunk.js.map