"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1340],{6891:function(n,e,r){r.d(e,{Z:function(){return h}});var t=r(29439),a=r(74165),i=r(15861),u=r(15671),o=r(43144),l=r(99811),s=r.n(l),f=r(10499),c=r(63922),m=r(95162),d=r(81384),p=r(31881),v=r.n(p),h=function(){function n(){(0,u.Z)(this,n)}return(0,o.Z)(n,null,[{key:"validate",value:function(n,e){if(e){if(e.image&&!n.type.startsWith("image"))throw new Error((0,f.ag)("fileUploader.image"));if(e.storage.maxSizeInBytes&&n.size>e.storage.maxSizeInBytes)throw new Error((0,f.ag)("fileUploader.size",s()(e.storage.maxSizeInBytes)));var r=g(n.name);if(e.formats&&!e.formats.includes(r))throw new Error((0,f.ag)("fileUploader.formats",e.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e,r,t,i){var u,o,l,s=this;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e.file,r),n.next=9;break;case 4:return n.prev=4,n.t0=n.catch(0),e.onError(n.t0),i(n.t0),n.abrupt("return");case 9:u=g(e.file.name),o=(0,m.Z)(),l="".concat(o,".").concat(u),this.fetchFileCredentials(l,r).then((function(n){var r=n.uploadCredentials,a=n.downloadUrl,i=n.privateUrl;return s.uploadToServer(e.file,r).then((function(){e.onSuccess(),t({id:o,name:e.file.name,sizeInBytes:e.file.size,publicUrl:r&&r.publicUrl?r.publicUrl:null,privateUrl:i,downloadUrl:a,new:!0})}))})).catch((function(n){e.onError(n),i(n)}));case 13:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,r,t,a){return n.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e,r){var t,i,u;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.Z.get(),n.next=3,c.Z.get("/tenant/".concat(t,"/file/credentials"),{params:{filename:e,storageId:r.storage.id}});case 3:return i=n.sent,u=i.data,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e,r){var i,u,o,l,s,f,c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,i=r.url,u=new FormData,r.fields)for(o=0,l=Object.entries(r.fields||{});o<l.length;o++)s=(0,t.Z)(l[o],2),f=s[0],c=s[1],u.append(f,c);return u.append("file",e),n.abrupt("return",v().post(i,u,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}()}]),n}();function g(n){if(!n)return null;var e=/(?:\.([^.]+))?$/.exec(n);return e?e[1]:null}},89994:function(n,e,r){var t=r(93433),a=r(6473),i=r(10499),u=r(70816),o=r.n(u),l={generic:function(n){return a.nK().label(n)},string:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return a.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=a.IX().compact().ensure().of(a.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return e.required&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=a.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return e.required&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=a.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=a.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=a.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,t.Z)(e.options||[])));return e.required&&(r=r.required((0,i.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=a.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).transform((function(n,e){return n?o()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).test("is-date",(0,i.ag)("validation.mixed.default"),(function(n){return!n||o()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?o()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=l},27829:function(n,e,r){var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));e.Z=i},53852:function(n,e,r){var t=r(28709),a=(r(47313),r(28303)),i=r(46417);e.Z=function(n){var e=function(n){return n.length>1};return(0,i.jsx)(t.Z,{children:n.items.map((function(n){return(0,i.jsx)(t.Z.Item,{children:e(n)?(0,i.jsx)(a.rU,{to:n[1],children:n[0]}):n[0]},n[0])}))})}},49384:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(15671),a=r(43144),i=function(){function n(){(0,t.Z)(this,n)}return(0,a.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,t){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!r[n])return null;var u=e[n];return(null===u||void 0===u||null===(a=u[0])||void 0===a?void 0:a.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),n}()},87347:function(n,e,r){var t=r(1413),a=r(59420),i=r(43270),u=r(47313),o=r(49384),l=r(10619),s=r(46417),f=function(n){var e=n.label,r=n.name,f=n.hint,c=n.layout,m=n.storage,d=n.formats,p=n.max,v=n.required,h=n.externalErrorMessage,g=(0,i.Gc)(),x=g.register,b=g.errors,Z=g.formState,q=Z.touched,y=Z.isSubmitted,w=g.setValue,C=g.watch;(0,u.useEffect)((function(){x({name:r})}),[x,r]);var k=o.Z.errorMessage(r,b,q,y,h),S=k||f;return(0,s.jsx)(a.Z.Item,(0,t.Z)((0,t.Z)({},c),{},{label:e,validateStatus:k?"error":"success",help:S,required:v,children:(0,s.jsx)(l.Z,{storage:m,formats:d,value:C(r),onChange:function(e){w(r,e,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e)},max:p})}))};f.defaultProps={layout:null,max:void 0,required:!1},e.Z=f},56148:function(n,e,r){var t=r(1413),a=r(59420),i=r(46937),u=r(43270),o=r(47313),l=r(49384),s=r(46417),f=function(n){var e=n.label,r=n.name,f=n.hint,c=n.layout,m=n.size,d=n.type,p=n.placeholder,v=n.autoFocus,h=n.autoComplete,g=n.prefix,x=n.externalErrorMessage,b=n.required,Z=n.addonAfter,q=n.maxLength,y=(0,u.Gc)(),w=y.setValue,C=y.watch,k=y.register,S=y.errors,j=y.formState,I=j.touched,U=j.isSubmitted;(0,o.useEffect)((function(){k({name:r})}),[k,r]);var M=l.Z.errorMessage(r,S,I,U,x);return(0,s.jsx)(a.Z.Item,(0,t.Z)((0,t.Z)({},c),{},{label:e,required:b,validateStatus:M?"error":"success",help:M||f,children:(0,s.jsx)(i.Z,{maxLength:q,id:r,name:r,type:d,value:C(r),onChange:function(e){w(r,e.target.value,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},size:m||void 0,placeholder:p||void 0,autoFocus:v||!1,autoComplete:h||void 0,prefix:g||void 0,addonAfter:Z||void 0,style:{width:"100%"}})}))};f.defaultProps={layout:null,type:"text",required:!1},e.Z=f},68160:function(n,e,r){r.d(e,{I4:function(){return u},YT:function(){return o}});var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};e.ZP=i},75352:function(n,e,r){var t,a=r(30168),i=r(44781).ZP.h1(t||(t=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));e.Z=i},10619:function(n,e,r){var t=r(93433),a=r(29439),i=r(47313),u=r(59491),o=r(26041),l=r(82508),s=r(82138),f=r(6891),c=r(33512),m=r(10499),d=r(46417);e.Z=function(n){var e=(0,i.useState)(!1),r=(0,a.Z)(e,2),p=r[0],v=r[1],h=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]},g=function(){return h().map((function(n){return{uid:n.id||void 0,name:n.name,status:"done",url:n.downloadUrl,type:n.type,size:n.size}}))},x=function(n){console.error(n),v(!1),c.Z.showMessage(n)},b=n.max,Z=n.readonly,q=(0,d.jsxs)(u.Z,{children:[p?(0,d.jsx)(l.Z,{rev:void 0}):(0,d.jsx)(s.Z,{rev:void 0}),(0,m.ag)("fileUploader.upload")]});return(0,d.jsx)(o.Z,{accept:function(){var e=n.schema;if(e&&e.formats)return e.formats.join(", ")}(),fileList:g(),disabled:Z,customRequest:function(e){f.Z.uploadFromRequest(e,{storage:n.storage,formats:n.formats},(function(e){!function(e){v(!1),n.onChange([].concat((0,t.Z)(h()),[e]))}(e)}),(function(n){x(n)}))},onChange:function(e){var r;e&&e.file&&e.file.status&&("removed"===e.file.status?(r=e.file.uid,n.onChange(h().filter((function(n){return n.id!==r})))):v(!0))},beforeUpload:function(e){try{return f.Z.validate(e,{storage:n.storage,formats:n.formats}),!0}catch(r){return x(r),!1}},children:Z||b&&g().length>=b?null:q})}}}]);