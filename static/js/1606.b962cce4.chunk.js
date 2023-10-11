"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1606],{6891:function(n,e,r){r.d(e,{Z:function(){return v}});var t=r(29439),i=r(74165),a=r(15861),u=r(15671),o=r(43144),l=r(99811),s=r.n(l),c=r(10499),d=r(63922),m=r(95162),f=r(81384),g=r(31881),p=r.n(g),v=function(){function n(){(0,u.Z)(this,n)}return(0,o.Z)(n,null,[{key:"validate",value:function(n,e){if(e){if(e.image&&!n.type.startsWith("image"))throw new Error((0,c.ag)("fileUploader.image"));if(e.storage.maxSizeInBytes&&n.size>e.storage.maxSizeInBytes)throw new Error((0,c.ag)("fileUploader.size",s()(e.storage.maxSizeInBytes)));var r=x(n.name);if(e.formats&&!e.formats.includes(r))throw new Error((0,c.ag)("fileUploader.formats",e.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r,t,a){var u,o,l,s=this;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e.file,r),n.next=9;break;case 4:return n.prev=4,n.t0=n.catch(0),e.onError(n.t0),a(n.t0),n.abrupt("return");case 9:u=x(e.file.name),o=(0,m.Z)(),l="".concat(o,".").concat(u),this.fetchFileCredentials(l,r).then((function(n){var r=n.uploadCredentials,i=n.downloadUrl,a=n.privateUrl;return s.uploadToServer(e.file,r).then((function(){e.onSuccess(),t({id:o,name:e.file.name,sizeInBytes:e.file.size,publicUrl:r&&r.publicUrl?r.publicUrl:null,privateUrl:a,downloadUrl:i,new:!0})}))})).catch((function(n){e.onError(n),a(n)}));case 13:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,r,t,i){return n.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r){var t,a,u;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=f.Z.get(),n.next=3,d.Z.get("/tenant/".concat(t,"/file/credentials"),{params:{filename:e,storageId:r.storage.id}});case 3:return a=n.sent,u=a.data,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r){var a,u,o,l,s,c,d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a=r.url,u=new FormData,r.fields)for(o=0,l=Object.entries(r.fields||{});o<l.length;o++)s=(0,t.Z)(l[o],2),c=s[0],d=s[1],u.append(c,d);return u.append("file",e),n.abrupt("return",p().post(a,u,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}()}]),n}();function x(n){if(!n)return null;var e=/(?:\.([^.]+))?$/.exec(n);return e?e[1]:null}},89994:function(n,e,r){var t=r(93433),i=r(6473),a=r(10499),u=r(70816),o=r.n(u),l={generic:function(n){return i.nK().label(n)},string:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return i.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=i.IX().compact().ensure().of(i.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return e.required&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return e.required&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=i.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,t.Z)(e.options||[])));return e.required&&(r=r.required((0,a.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return n?o()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||o()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?o()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=l},27829:function(n,e,r){var t,i=r(30168),a=r(44781).ZP.div(t||(t=(0,i.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));e.Z=a},71606:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t=r(47313),i=r(10499),a=r(37670),u=r(27829),o=r(1413),l=r(29439),s=r(43270),c=r(45788),d=r(25976),m=r(76747),f=function(n){return n.settings},g=(0,m.P1)([f],(function(n){return n.settings})),p={selectInitLoading:(0,m.P1)([f],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,m.P1)([f],(function(n){return Boolean(n.saveLoading)})),selectSettings:g,selectRaw:f},v=r(68160),x=r(6473),h=r(89994),Z=r(59945),b=r(96111),j=r(67357),y=r(46417),q=x.Ry().shape({logos:h.Z.files((0,i.ag)("settings.fields.logos"),{max:1}),backgroundImages:h.Z.files((0,i.ag)("settings.fields.backgroundImages"),{max:1})}),w=function(n){var e=(0,c.I0)(),r=((0,c.v9)(p.selectSaveLoading),(0,t.useState)((function(){return n.settings||{}}))),a=(0,l.Z)(r,1)[0],u=(0,s.cI)({resolver:(0,j.X)(q),mode:"all",defaultValues:a});return(0,y.jsx)(v.ZP,{children:(0,y.jsx)(s.RV,(0,o.Z)((0,o.Z)({},u),{},{children:(0,y.jsxs)("form",{onSubmit:u.handleSubmit((function(n){e(d.Z.doSave(n))})),children:[(0,y.jsx)(Z.Z,{name:"logos",label:(0,i.ag)("settings.fields.logos"),storage:b.Z.values.settingsLogos,max:1,layout:v.I4}),(0,y.jsx)(Z.Z,{name:"backgroundImages",label:(0,i.ag)("settings.fields.backgroundImages"),storage:b.Z.values.settingsBackgroundImages,max:1,layout:v.I4})]})}))})},I=r(17551),k=r(96995),S=r(59491),C=r(28303),U=r(23516),P=r(10419),Y=function(n){var e=(0,c.v9)(U.Z.selectPermissionToRead);return(0,y.jsx)(P.Z,{children:e&&(0,y.jsx)(C.rU,{to:"/audit-logs?entityNames=settings",children:(0,y.jsx)(k.Z,{title:(0,i.ag)("auditLog.menu"),children:(0,y.jsx)(S.Z,{icon:(0,y.jsx)(I.Z,{rev:void 0})})})})})},z=r(53852),M=r(75352),L=r(61567),R=function(n){var e=(0,c.I0)(),r=(0,c.v9)(p.selectInitLoading),o=(0,c.v9)(p.selectSettings);return(0,t.useEffect)((function(){e(d.Z.doInit())}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(z.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("settings.title")]]}),(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(M.Z,{children:(0,i.ag)("settings.title")}),(0,y.jsx)(Y,{}),r&&(0,y.jsx)(L.Z,{}),!r&&o&&(0,y.jsx)(w,{settings:o,onCancel:function(){return(0,a.s1)().push("/")}})]})]})}},53852:function(n,e,r){var t=r(28709),i=(r(47313),r(28303)),a=r(46417);e.Z=function(n){var e=function(n){return n.length>1};return(0,a.jsx)(t.Z,{children:n.items.map((function(n){return(0,a.jsx)(t.Z.Item,{children:e(n)?(0,a.jsx)(i.rU,{to:n[1],children:n[0]}):n[0]},n[0])}))})}},61567:function(n,e,r){var t=r(72652),i=(r(47313),r(46417));e.Z=function(n){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)(t.Z,{})})}},49384:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(15671),i=r(43144),a=function(){function n(){(0,t.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,t){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!t&&!r[n])return null;var u=e[n];return(null===u||void 0===u||null===(i=u[0])||void 0===i?void 0:i.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),n}()},59945:function(n,e,r){r.d(e,{Z:function(){return q}});var t,i=r(1413),a=r(59420),u=r(43270),o=r(47313),l=r(49384),s=r(93433),c=r(29439),d=r(26041),m=r(48216),f=r(6891),g=r(33512),p=r(30168),v=r(44781).ZP.div(t||(t=(0,p.Z)(["\n  .ant-upload-select-picture-card i {\n    font-size: 32px;\n    color: #999;\n  }\n\n  .ant-upload-select-picture-card .ant-upload-text {\n    margin-top: 8px;\n    color: #666;\n  }\n\n  .ant-upload-list-item-info > span {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ant-upload-list-item-thumbnail > img {\n    object-fit: cover;\n  }\n"]))),x=r(10499),h=r(82508),Z=r(82138),b=r(46417),j=function(n){var e=(0,o.useState)(!1),r=(0,c.Z)(e,2),t=r[0],i=r[1],a=(0,o.useState)(!1),u=(0,c.Z)(a,2),l=u[0],p=u[1],j=(0,o.useState)(""),y=(0,c.Z)(j,2),q=y[0],w=y[1],I=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]},k=function(){return I().map((function(n){return{uid:n.id||void 0,name:n.name,status:"done",url:n.downloadUrl,size:n.size,type:n.type}}))},S=function(n){i(!1),g.Z.showMessage(n)},C=n.max,U=(0,b.jsxs)("div",{children:[t?(0,b.jsx)(h.Z,{rev:void 0}):(0,b.jsx)(Z.Z,{rev:void 0}),(0,b.jsx)("div",{className:"ant-upload-text",children:(0,x.ag)("fileUploader.upload")})]});return(0,b.jsxs)(v,{children:[(0,b.jsx)(d.Z,{accept:"image/*",fileList:k(),listType:"picture-card",customRequest:function(e){f.Z.uploadFromRequest(e,{storage:n.storage,image:!0},(function(e){!function(e){i(!1),n.onChange([].concat((0,s.Z)(I()),[e]))}(e)}),(function(n){S(n)}))},onChange:function(e){var r;e&&e.file&&e.file.status&&("removed"===e.file.status?(r=e.file.uid,n.onChange(I().filter((function(n){return n.id!==r})))):i(!0))},onPreview:function(n){w(n.url),p(!0)},beforeUpload:function(e){try{return f.Z.validate(e,{storage:n.storage,image:!0}),!0}catch(r){return S(r),!1}},children:C&&k().length>=C?null:U}),(0,b.jsx)(m.Z,{visible:l,footer:null,onCancel:function(){p(!1)},children:(0,b.jsx)("img",{alt:q,style:{width:"100%"},src:q})})]})},y=function(n){var e=n.label,r=n.name,t=n.hint,s=n.layout,c=n.storage,d=n.max,m=n.required,f=n.externalErrorMessage,g=(0,u.Gc)(),p=g.errors,v=g.formState,x=v.touched,h=v.isSubmitted,Z=g.setValue,y=g.watch,q=g.register;(0,o.useEffect)((function(){q({name:r})}),[q,r]);var w=l.Z.errorMessage(r,p,x,h,f),I=w||t;return(0,b.jsx)(a.Z.Item,(0,i.Z)((0,i.Z)({},s),{},{label:e,required:m,validateStatus:w?"error":"success",help:I,children:(0,b.jsx)(j,{storage:c,value:y(r),onChange:function(e){Z(r,e,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e)},max:d})}))};y.defaultProps={layout:null,max:void 0,required:!1};var q=y},68160:function(n,e,r){r.d(e,{I4:function(){return u},YT:function(){return o}});var t,i=r(30168),a=r(44781).ZP.div(t||(t=(0,i.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};e.ZP=a},75352:function(n,e,r){var t,i=r(30168),a=r(44781).ZP.h1(t||(t=(0,i.Z)(["\n  margin-bottom: 36px;\n"])));e.Z=a},10419:function(n,e,r){var t,i=r(30168),a=r(44781).ZP.div(t||(t=(0,i.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));e.Z=a}}]);