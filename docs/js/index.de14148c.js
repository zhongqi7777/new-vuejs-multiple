(function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;a.push([0,0]),r()})({0:function(e,t,r){e.exports=r("d486")},"476a":function(e,t,r){},"71de":function(e,t,r){"use strict";r("476a")},d486:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=r("5c96"),a=r.n(o),u=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-card",{staticClass:"index-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(" My Codes ")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Plortinus/vue-multiple-pages",target:"_blank"}},[e._v(" Vue Multiple Pages ")])]),r("li",[r("a",{attrs:{href:"https://github.com/Plortinus/element-china-area-data",target:"_blank"}},[e._v(" Element China Area Data ")])])]),r("el-button",{attrs:{type:"primary"},on:{click:e.gogogo}},[e._v("To Customer Home Page")]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.tototo}},[e._v("To User Login Page")])],1)],1)}),i=[],c=r("a34a"),s=r.n(c),l=r("bc3a"),f=r.n(l),p=f.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_API,timeout:5e3});p.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),p.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(o["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var d=p;function g(){return d({url:"/menu",method:"get"})}function v(e,t,r,n,o,a,u){try{var i=e[a](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){v(a,n,o,u,i,"next",e)}function i(e){v(a,n,o,u,i,"throw",e)}u(void 0)}))}}var m={components:{},data:function(){return{msg:"Use Vue 2.0 Today!"}},methods:{gogogo:function(){return h(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,console.log("data",t);case 4:case"end":return e.stop()}}),e)})))()},tototo:function(){}}},b=m,y=(r("71de"),r("2877")),P=Object(y["a"])(b,u,i,!1,null,null,null),_=P.exports;n["default"].use(a.a),new n["default"]({el:"#app",render:function(e){return e(_)}})}});
//# sourceMappingURL=index.de14148c.js.map