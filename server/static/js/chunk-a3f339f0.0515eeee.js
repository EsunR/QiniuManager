(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3f339f0"],{"0d65":function(t,e,n){"use strict";var a=n("3941"),r=n.n(a);r.a},3941:function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("8e6e"),n("456d");var a=n("bd86"),r=(n("7514"),n("ac6a"),n("8615"),n("6762"),n("2fdb"),n("58df")),i=n("7e2b"),o=n("3206");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(r["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},bbdd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"key-manage"}},[n("v-card",{staticClass:"add-key-form",attrs:{elevation:"2",outlined:""}},[n("v-card-text",{staticClass:"header"},[n("h1",{staticClass:"display-1"},[t._v("添加七牛云密钥")])]),n("v-card-text",[n("QiniuKeyForm",{ref:"addForm"})],1),n("v-btn",{staticClass:"add-btn",attrs:{color:"primary",fab:"",dark:""},on:{click:t.handleAddQiniuKey}},[n("v-icon",[t._v("mdi-check")])],1)],1),n("v-row",[n("transition-group",{staticStyle:{width:"100%",display:"inherit","flex-wrap":"inherit"},attrs:{name:"slideBottomToTop"}},t._l(t.qiniuKeys,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",md:t.qiniuKeys.length>1?6:12}},[n("v-card",{staticClass:"list-card",attrs:{elevation:"2",outlined:""}},[n("v-card-title",[t._v(t._s(e.name))]),n("v-card-subtitle",[n("span",[t._v(t._s(t.getZone(e.zone)))]),t._v("\n            "+t._s(e.domain)+"\n          ")]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",{staticClass:"black--text"},[n("div",{staticClass:"key-info"},[n("strong",[t._v("Bucket:")]),t._v("\n              "+t._s(e.bucket)+"\n            ")]),n("div",{staticClass:"key-info"},[n("strong",[t._v("AK:")]),t._v("\n              "+t._s(e.publicKey)+"\n            ")]),n("div",{staticClass:"key-info"},[n("strong",[t._v("SK:")]),t._v("\n              "+t._s(e.privateKey)+"\n            ")])]),n("v-card-actions",{staticClass:"btn-wrapper"},[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(n){return t.handleUpdateClick(e)}}},[t._v("修改内容")]),n("v-btn",{attrs:{text:""},on:{click:function(n){return t.handleDelete(e.id)}}},[t._v("删除")])],1)],1)],1)})),1)],1),0===t.qiniuKeys.length?n("v-card",{staticClass:"placeholder-card",attrs:{elevation:"2",outlined:""}},[t._v("\n    这里什么都没有咩 (｀･ω･´) (´･ω･｀)\n  ")]):t._e(),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogVisiable,callback:function(e){t.dialogVisiable=e},expression:"dialogVisiable"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("修改信息")])]),n("v-card-text",[n("QiniuKeyForm",{ref:"updateForm",attrs:{defaultData:t.selectedItem}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialogVisiable=!1}}},[t._v("关闭")]),n("v-btn",{attrs:{loading:t.updateBtnLoading,color:"blue darken-1",text:""},on:{click:t.handleSubmitUpdate}},[t._v("保存修改")])],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",staticClass:"qiniu-key-form"},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"备注名",rules:[function(t){return!!t||"请输入"}]},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"域名",rules:[function(t){return!!t||"请输入"}]},model:{value:t.formData.domain,callback:function(e){t.$set(t.formData,"domain",e)},expression:"formData.domain"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"bucket",rules:[function(t){return!!t||"请输入"}]},model:{value:t.formData.bucket,callback:function(e){t.$set(t.formData,"bucket",e)},expression:"formData.bucket"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-select",{attrs:{items:t.zoneList,label:"Zone",rules:[function(t){return!!t||"请选择"}]},model:{value:t.formData.zone,callback:function(e){t.$set(t.formData,"zone",e)},expression:"formData.zone"}})],1)],1),n("v-text-field",{attrs:{label:"AK",rules:[function(t){return!!t||"请输入"}]},model:{value:t.formData.publicKey,callback:function(e){t.$set(t.formData,"publicKey",e)},expression:"formData.publicKey"}}),n("v-text-field",{attrs:{label:"SK",rules:[function(t){return!!t||"请输入"}],"append-icon":t.showSk?"mdi-eye":"mdi-eye-off",type:t.showSk?"text":"password"},on:{"click:append":function(e){t.showSk=!t.showSk}},model:{value:t.formData.privateKey,callback:function(e){t.$set(t.formData,"privateKey",e)},expression:"formData.privateKey"}})],1)},o=[],s=(n("456d"),n("ac6a"),n("7618"));function c(t){var e=[];function n(t){if("object"!==Object(s["a"])(t)||!t)return t;for(var a=0;a<e.length;a++)if(e[a].target===t)return e[a].copyTarget;var r={};return Array.isArray(t)&&(r=[]),e.push({target:t,copyTarget:r}),Object.keys(t).forEach((function(e){r[e]||(r[e]=n(t[e]))})),r}return n(t)}function u(t,e){var n=c(t),a={};return e.forEach((function(t){a[t]=n[t]})),a}var l={name:"QiniuKeyForm",data:function(){return{formData:{name:"",publicKey:"",privateKey:"",bucket:"",domain:"",zone:null},showSk:!1,zoneList:[{text:"华东",value:"z0"},{text:"华北",value:"z1"},{text:"华南",value:"z2"},{text:"北美",value:"na0"}]}},props:{defaultData:{type:Object,default:function(){return{}}}},watch:{defaultData:function(t){t.id&&(this.formData=c(this.defaultData))}},mounted:function(){this.defaultData.id&&(this.formData=c(this.defaultData))},methods:{handleSubmit:function(){this.$emit("onSubmit",this.formData)},validate:function(){return this.$refs.form.validate()},reset:function(){this.$refs.form.reset()}}},f=l,d=n("2877"),p=n("6544"),v=n.n(p),b=(n("8e6e"),n("f559"),n("6762"),n("2fdb"),n("bd86")),h=(n("5df3"),n("f400"),n("a481"),n("c5f6"),n("4b85"),n("2b0e")),m=n("d9f7"),y=n("80d2");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j=["sm","md","lg","xl"],w=function(){return j.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),k=function(){return j.reduce((function(t,e){return t["offset"+Object(y["u"])(e)]={type:[String,Number],default:null},t}),{})}(),D=function(){return j.reduce((function(t,e){return t["order"+Object(y["u"])(e)]={type:[String,Number],default:null},t}),{})}(),S={col:Object.keys(w),offset:Object.keys(k),order:Object.keys(D)};function _(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var x=new Map,C=h["a"].extend({name:"v-col",functional:!0,props:O({cols:{type:[Boolean,String,Number],default:!1}},w,{offset:{type:[String,Number],default:null}},k,{order:{type:[String,Number],default:null}},D,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,r=e.children,i=(e.parent,"");for(var o in n)i+=String(n[o]);var s=x.get(i);return s||function(){var t,e;for(e in s=[],S)S[e].forEach((function(t){var a=n[t],r=_(e,t,a);r&&s.push(r)}));var a=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!a||!n.cols},Object(b["a"])(t,"col-".concat(n.cols),n.cols),Object(b["a"])(t,"offset-".concat(n.offset),n.offset),Object(b["a"])(t,"order-".concat(n.order),n.order),Object(b["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),Object(b["a"])(t,"justify-self-".concat(n.justifySelf),n.justifySelf),t)),x.set(i,s)}(),t(n.tag,Object(m["a"])(a,{class:s}),r)}}),V=n("4bd4");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=["sm","md","lg","xl"],B=["start","end","center"];function E(t,e){return P.reduce((function(n,a){return n[t+Object(y["u"])(a)]=e(),n}),{})}var z=function(t){return[].concat(B,["baseline","stretch"]).includes(t)},F=E("align",(function(){return{type:String,default:null,validator:z}})),L=function(t){return[].concat(B,["space-between","space-around"]).includes(t)},Q=E("justify",(function(){return{type:String,default:null,validator:L}})),A=function(t){return[].concat(B,["space-between","space-around","stretch"]).includes(t)},I=E("alignContent",(function(){return{type:String,default:null,validator:A}})),N={align:Object.keys(F),justify:Object.keys(Q),alignContent:Object.keys(I)},T={align:"align",justify:"justify",alignContent:"align-content"};function q(t,e,n){var a=T[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var J=new Map,U=h["a"].extend({name:"v-row",functional:!0,props:$({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:z}},F,{justify:{type:String,default:null,validator:L}},Q,{alignContent:{type:String,default:null,validator:A}},I),render:function(t,e){var n=e.props,a=e.data,r=e.children,i="";for(var o in n)i+=String(n[o]);var s=J.get(i);return s||function(){var t,e;for(e in s=[],N)N[e].forEach((function(t){var a=n[t],r=q(e,t,a);r&&s.push(r)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(b["a"])(t,"align-".concat(n.align),n.align),Object(b["a"])(t,"justify-".concat(n.justify),n.justify),Object(b["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),J.set(i,s)}(),t(n.tag,Object(m["a"])(a,{staticClass:"row",class:s}),r)}}),M=n("b974"),Z=n("8654"),G=Object(d["a"])(f,i,o,!1,null,"646a6af2",null),R=G.exports;v()(G,{VCol:C,VForm:V["a"],VRow:U,VSelect:M["a"],VTextField:Z["a"]});var W={name:"keyManage",components:{QiniuKeyForm:R},data:function(){return{dialogVisiable:!1,selectedItem:{},updateBtnLoading:!1}},computed:{qiniuKeys:function(){return this.$store.getters.qiniuKeys}},methods:{getZone:function(t){switch(t){case"z0":return"华东";case"z1":return"华北";case"z2":return"华南";case"na0":return"北美";default:return"unknow"}},handleAddQiniuKey:function(){var t=this,e=this.$refs.addForm,n=e.formData;e.validate()?this.$store.dispatch("key/addQiniuKey",n).then((function(){t.$message("添加成功"),e.reset()})):this.$message({type:"error",message:"请输入完整表单内容"})},handleDelete:function(t){var e=this;this.$alert({title:"确认操作",content:"您确定要删除当前的 Key 吗？",callback:function(){e.$store.dispatch("key/delQiniuKey",t).then((function(){e.$message("删除成功")}))}})},handleUpdateClick:function(t){var e=u(t,["id","name","publicKey","privateKey","bucket","domain","zone"]);this.selectedItem=e,this.dialogVisiable=!0},handleSubmitUpdate:function(){var t=this,e=this.$refs.updateForm;console.log(e.formData),console.log(this.selectedItem),JSON.stringify(e.formData)===JSON.stringify(this.selectedItem)?(this.dialogVisiable=!1,this.$message("信息未修改"),this.updateBtnLoading=!1):this.$store.dispatch("key/updateQiniuKey",e.formData).then((function(){t.dialogVisiable=!1,t.$message("修改成功")})).finally((function(){t.updateBtnLoading=!1}))}}},H=W,X=(n("0d65"),n("8336")),Y=n("b0af"),tt=n("99d9"),et=n("169a"),nt=n("ce7e6"),at=n("132d"),rt=n("2fa4"),it=Object(d["a"])(H,a,r,!1,null,"77f54527",null);e["default"]=it.exports;v()(it,{VBtn:X["a"],VCard:Y["a"],VCardActions:tt["a"],VCardSubtitle:tt["b"],VCardText:tt["c"],VCardTitle:tt["d"],VCol:C,VDialog:et["a"],VDivider:nt["a"],VIcon:at["a"],VRow:U,VSpacer:rt["a"]})}}]);
//# sourceMappingURL=chunk-a3f339f0.0515eeee.js.map