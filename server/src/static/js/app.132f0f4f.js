(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6b77ae66":"e63eeea5","chunk-615e262c":"2d37dc6a","chunk-e801bb46":"3da226a5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6b77ae66":1,"chunk-615e262c":1,"chunk-e801bb46":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6b77ae66":"a040579e","chunk-615e262c":"57ff3d7b","chunk-e801bb46":"64910abe"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a98":function(e,t,n){"use strict";var r=n("c8f2"),a=n.n(r);a.a},"271e":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("7f7f");var r=n("2b0e"),a=n("8c4f");n("4360");r["a"].use(a["a"]);var o=new a["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-6b77ae66"),n.e("chunk-e801bb46")]).then(n.bind(null,"f5b8"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-6b77ae66"),n.e("chunk-615e262c")]).then(n.bind(null,"efcf"))}}]});o.beforeEach((function(e,t,n){var r=window.localStorage.getItem("token");"login"===e.name||r?n():(window.localStorage.removeItem("token"),n("/login"))})),t["a"]=o},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=(n("7f7f"),{name:function(e){return e.user.name},showNavigation:function(e){return e.app.showNavigation}}),i=o,s=n("c24f"),c={name:""},u={SET_NAME:function(e,t){e.name=t}},l={getUserInfo:function(e){var t=e.commit;Object(s["a"])().then((function(e){var n=e.data,r=n.name,a=n.token;window.localStorage.setItem("token",a),t("SET_NAME",r)})).catch((function(e){console.log(e)}))}},f={namespaced:!0,state:c,mutations:u,actions:l},d={showNavigation:!1},m={SET_SHOWNAVIGATION:function(e,t){e.showNavigation=t}},p={toggleNavigation:function(e){var t=e.commit,n=e.state;t("SET_SHOWNAVIGATION",!n.showNavigation)}},v={namespaced:!0,state:d,mutations:m,actions:p};r["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{user:f,app:v},getters:i})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout")},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app-main"}},[n("Drawer",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),"/login"!==e.$route.path?n("v-app-bar",{attrs:{id:"app-header",absolute:"",color:"#2E4571",dark:"","shrink-on-scroll":"",src:this.$global.img,"scroll-threshold":"200"}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Qiniu Manager")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-dots-vertical")])],1)],1):e._e(),n("v-content",[n("v-container",{attrs:{id:"app-container",fluid:""}},[n("router-view")],1)],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{id:"app-drawer",absolute:"",temporary:""},model:{value:e.drawerStatus,callback:function(t){e.drawerStatus=t},expression:"drawerStatus"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.username))])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-home-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("主页")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account-circle")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("个人中心")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:e.handleLogout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("退出登录")])],1)],1)],1)],1)},u=[],l=(n("7f7f"),{name:"Drawer",model:{prop:"drawer",event:"toggle"},data:function(){return{}},props:{drawer:{type:Boolean,required:!0}},computed:{drawerStatus:{get:function(){return this.drawer},set:function(e){this.$emit("toggle",e)}},username:function(){return this.$store.getters.name}},methods:{handleLogout:function(){window.localStorage.removeItem("token"),this.$router.push({name:"login"}),this.$message("登出成功")}}}),f=l,d=n("2877"),m=n("6544"),p=n.n(m),v=n("ce7e6"),h=n("132d"),g=n("adda"),b=n("8860"),w=n("da13"),y=n("8270"),k=n("5d23"),_=n("34c3"),O=n("f774"),j=Object(d["a"])(f,c,u,!1,null,"2a5474c6",null),S=j.exports;p()(j,{VDivider:v["a"],VIcon:h["a"],VImg:g["a"],VList:b["a"],VListItem:w["a"],VListItemAvatar:y["a"],VListItemContent:k["a"],VListItemIcon:_["a"],VListItemTitle:k["b"],VNavigationDrawer:O["a"]});var I={name:"Layout",components:{Drawer:S},data:function(){return{drawer:!1}}},E=I,$=(n("e36f"),n("7496")),C=n("40dc"),N=n("5bc1"),V=n("8336"),x=n("a523"),A=n("a75b"),L=n("2fa4"),T=n("2a7f"),P=Object(d["a"])(E,i,s,!1,null,"47511718",null),B=P.exports;p()(P,{VApp:$["a"],VAppBar:C["a"],VAppBarNavIcon:N["a"],VBtn:V["a"],VContainer:x["a"],VContent:A["a"],VIcon:h["a"],VSpacer:L["a"],VToolbarTitle:T["a"]});var D=r["a"].extend({name:"App",components:{Layout:B},mounted:function(){this.$store.dispatch("user/getUserInfo")}}),M=D,U=Object(d["a"])(M,a,o,!1,null,null,null),H=U.exports,q=n("41cb"),R=n("4360"),z=n("f309"),G=(n("5363"),n("ee75"));r["a"].use(z["a"]),r["a"].prototype.$message=G["a"];var J=new z["a"]({icons:{iconfont:"mdi"}}),W=n("db49");n("8e1f");r["a"].config.productionTip=!1,r["a"].prototype.$global=W["a"],new r["a"]({router:q["a"],store:R["a"],vuetify:J,render:function(e){return e(H)}}).$mount("#app")},"8e1f":function(e,t,n){},b775:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o=n("db49"),i=n("ee75"),s=n("41cb"),c=a.a.create({baseURL:o["a"].baseURL,timeout:1e4});c.interceptors.request.use((function(e){return e.headers.common["Authorization"]=window.localStorage.getItem("token"),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return t.success?t:(Object(i["a"])({type:"error",message:t.msg}),Promise.reject(t.msg))}),(function(e){e.response||Object(i["a"])({type:"error",message:e});var t=e.response,n=t.status,r=t.data;switch(n){case 401:"/login"!==s["a"].currentRoute.path&&(Object(i["a"])({type:"error",message:"登录信息已过期，请重新登录"}),s["a"].push("/login"));break;default:Object(i["a"])({type:"error",message:r.msg});break}return Promise.reject(r.msg)})),t["a"]=c},c24f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));n("7f7f");var r=n("b775");function a(e){var t=e.name,n=e.password;return Object(r["a"])({url:"/user/login",method:"post",data:{name:t,password:n}})}function o(e){var t=e.name,n=e.password;return Object(r["a"])({url:"/user/register",method:"post",data:{name:t,password:n}})}function i(){return Object(r["a"])({url:"/user/info",method:"get"})}},c8f2:function(e,t,n){},db49:function(e,t,n){"use strict";t["a"]={baseURL:"/api",img:"http://img.cdn.esunr.xyz/18-12-27/80121584.jpg"}},e36f:function(e,t,n){"use strict";var r=n("271e"),a=n.n(r);a.a},ee75:function(e,t,n){"use strict";var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-wrapper",style:e.positionStyle},[n("transition",{attrs:{name:"fade",appear:""},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.closed,expression:"!closed"}],staticClass:"message",class:[e.type]},[n("i",{staticClass:"mdi",class:{"mdi-close-circle":"error"===e.type,"mdi-check-circle":"success"===e.type,"mdi-alert-circle":"warning"===e.type,"mdi-information":"info"===e.type}}),n("span",{staticClass:"text"},[e._v(e._s(e.message))])])])],1)},i=[],s={data:function(){return{message:"",type:"success",verticalOffset:40,closed:!1,onClose:null,duration:3e3}},computed:{positionStyle:function(){return{bottom:"".concat(this.verticalOffset,"px")}}},methods:{close:function(){this.closed=!0,"function"===typeof this.onClose&&this.onClose(this)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout((function(){e.closed||e.close()}),this.duration))},handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)}},mounted:function(){this.startTimer()}},c=s,u=(n("1a98"),n("2877")),l=Object(u["a"])(c,o,i,!1,null,"3bfe8fee",null),f=l.exports,d=a["a"].extend(f),m=[],p=1,v=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"string"===typeof t&&(t={message:t});var n="message_"+p++;r=new d({data:t}),r.id=n,r.$mount(),document.body.appendChild(r.$el);var a=t.offset||20;m.forEach((function(e){a+=e.$el.offsetHeight+16})),r.verticalOffset=a;var o=t.onClose;return t.onClose=function(){e.close(n,o)},m.push(r),r};v.close=function(e,t){for(var n,r=m.length,a=-1,o=0;o<r;o++)if(e===m[o].id){n=m[o].$el.offsetHeight,a=o,"function"===typeof t&&t(m[o]),m.splice(o,1);break}if(!(r<=1||-1===a||a>m.length-1))for(var i=a;i<r-1;i++){var s=m[i].$el;s.style["bottom"]=parseInt(s.style["bottom"],10)-n-16+"px"}};t["a"]=v}});
//# sourceMappingURL=app.132f0f4f.js.map