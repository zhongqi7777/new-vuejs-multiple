(function(e){function t(t){for(var n,u,c=t[0],i=t[1],s=t[2],p=0,f=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;a.push([0,0]),r()})({0:function(e,t,r){e.exports=r("d486")},"476a":function(e,t,r){},"71de":function(e,t,r){"use strict";r("476a")},d486:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=r("5c96"),a=r.n(o),u=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-card",{staticClass:"index-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(" My Codes ")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Plortinus/vue-multiple-pages",target:"_blank"}},[e._v(" Vue Multiple Pages ")])]),r("li",[r("a",{attrs:{href:"https://github.com/Plortinus/element-china-area-data",target:"_blank"}},[e._v(" Element China Area Data ")])])]),r("el-button",{attrs:{type:"primary"},on:{click:e.gogogo}},[e._v("To Customer Home Page")]),r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.tototo}},[e._v("To User Login Page")])],1)],1)}),c=[],i=r("bc3a"),s=r.n(i);var l=function(){var e="",t="index.html";return e=document.getElementsByTagName("base").length>0?document.getElementsByTagName("base")[0].href.replace(t,""):location.protocol+"//"+location.hostname+(location.port&&":"+location.port)+"/",e},p=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_API?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_API:l(),f=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_ROOT?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_ROOT:"";p+=f;var d=s.a.create({baseURL:p,timeout:5e3});d.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(o["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var g=d;function m(){return g({url:"/menu",method:"get"})}var b={components:{},data:function(){return{msg:"Use Vue 2.0 Today!"}},methods:{gogogo:function(){m()},tototo:function(){}}},h=b,_=(r("71de"),r("2877")),v=Object(_["a"])(h,u,c,!1,null,null,null),y=v.exports;n["default"].use(a.a),new n["default"]({el:"#app",render:function(e){return e(y)}})}});
//# sourceMappingURL=index.078ea8ec.js.map