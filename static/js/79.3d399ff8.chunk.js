(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[79],{1056:function(e,n,t){"use strict";var i=t(420);function r(){var e=Object(i.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=t(421).a.h1(r());n.a=a},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c}));var i=t(420);function r(){var e=Object(i.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return r=function(){return e},e}var a=t(421).a.div(r()),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=a},1058:function(e,n,t){"use strict";var i=t(0),r=t(17),a=t(1951),o=t(1184),c=t(1054),l=t(6),u=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,x=e.prefix,O=e.externalErrorMessage,v=e.required,g=e.addonAfter,h=e.maxLength,y=Object(c.d)(),q=y.setValue,R=y.watch,C=y.register,w=y.errors,S=y.formState,Y=S.touched,k=S.isSubmitted;Object(l.useEffect)((function(){C({name:t})}),[C,t]);var E=u.a.errorMessage(t,w,Y,k,O);return Object(r.jsx)(a.a.Item,Object(i.a)(Object(i.a)({},d),{},{label:n,required:v,validateStatus:E?"error":"success",help:E||s,children:Object(r.jsx)(o.a,{maxLength:h,id:t,name:t,type:b,value:R(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:x||void 0,addonAfter:g||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t(14),r=t(15),a=function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,null,[{key:"errorMessage",value:function(e,n,t,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!i&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(r=o[0])||void 0===r?void 0:r.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},1060:function(e,n,t){"use strict";var i=t(56),r=t(48),a=t(2),o=t(30),c=t.n(o),l={generic:function(e){return r.c().label(e)},string:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return r.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=r.a().compact().ensure().of(r.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=r.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=r.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=r.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=r.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(i.a)(n.options||[])));return n.required&&(t=t.required(Object(a.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=r.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).test("is-date",Object(a.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},1062:function(e,n,t){"use strict";var i=t(420);function r(){var e=Object(i.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=t(421).a.div(r());n.a=a},1063:function(e,n,t){"use strict";var i=t(17),r=t(1101),a=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1077:function(e,n,t){"use strict";var i=t(17),r=t(1178);t(6);n.a=function(e){return Object(i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(i.jsx)(r.a,{})})}},1390:function(e,n,t){"use strict";var i=t(0),r=t(433),a=t(17),o=t(1103),c=t(1155),l=t(1192),u=t(1176),s=t(1177),d=t(1951),m=t(450),b=t(447),f=t(1054),j=t(6),p=t(2),x=t(1057),O=t(48),v=t(1060),g=t(1061),h=t(1058),y=t(1056),q=O.e().shape({nameFR:v.a.string(Object(p.c)("entities.typologieRevendication.fields.nameFR"),{}),nameEN:v.a.string(Object(p.c)("entities.typologieRevendication.fields.nameEN"),{}),nameAR:v.a.string(Object(p.c)("entities.typologieRevendication.fields.nameAR"),{required:!0})});n.a=function(e){var n=Object(j.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR}})),t=Object(r.a)(n,1)[0],O=Object(f.c)({resolver:Object(g.yupResolver)(q),mode:"all",defaultValues:t}),v=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},R=e.saveLoading;return Object(a.jsx)(x.a,{children:Object(a.jsx)(f.a,Object(i.a)(Object(i.a)({},O),{},{children:Object(a.jsxs)("form",{onSubmit:O.handleSubmit(v),children:[Object(a.jsxs)(u.a,{gutter:24,children:[Object(a.jsx)(s.a,{span:16,children:Object(a.jsx)(y.a,{children:e.title})}),Object(a.jsx)(s.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(a.jsxs)(d.a.Item,Object(i.a)(Object(i.a)({className:"form-buttons"},x.c),{},{children:[Object(a.jsx)(m.a,{title:Object(p.c)("common.save"),children:Object(a.jsx)(b.a,{loading:R,type:"primary",onClick:O.handleSubmit(v),icon:Object(a.jsx)(o.a,{})})}),Object(a.jsx)(m.a,{title:Object(p.c)("common.reset"),children:Object(a.jsx)(b.a,{disabled:R,onClick:function(){Object.keys(t).forEach((function(e){O.setValue(e,t[e])}))},icon:Object(a.jsx)(c.a,{})})}),e.onCancel&&Object(a.jsx)(m.a,{title:Object(p.c)("common.cancel"),children:Object(a.jsx)(b.a,{disabled:R,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(l.a,{})})})]}))})]}),Object(a.jsx)(u.a,{gutter:24,children:Object(a.jsx)(s.a,{span:24,children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(a.jsx)("legend",{children:Object(p.c)("common.informations")}),Object(a.jsx)(h.a,{name:"nameAR",label:Object(p.c)("entities.typologieRevendication.fields.nameAR"),required:!0,layout:x.b}),Object(a.jsx)(h.a,{name:"nameFR",label:Object(p.c)("entities.typologieRevendication.fields.nameFR"),required:!1,layout:x.b,autoFocus:!0}),Object(a.jsx)(h.a,{name:"nameEN",label:Object(p.c)("entities.typologieRevendication.fields.nameEN"),required:!1,layout:x.b})]})})})]})}))})}},2125:function(e,n,t){"use strict";t.r(n);var i=t(433),r=t(17),a=t(6),o=t(39),c=t(41),l=t(2),u=t(272),s=t(4),d=function(e){return e.typologieRevendication.form},m=Object(s.a)([d],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:d},f=t(7),j=t(1390),p=t(1062),x=t(1063),O=t(1077);n.default=function(e){var n=Object(a.useState)(!1),t=Object(i.a)(n,2),s=t[0],d=t[1],m=Object(o.d)(),v=Object(c.h)(),g=Object(o.e)(b.selectInitLoading),h=Object(o.e)(b.selectSaveLoading),y=Object(o.e)(b.selectRecord),q=Boolean(v.params.id),R=q?Object(l.c)("entities.typologieRevendication.edit.title"):Object(l.c)("entities.typologieRevendication.new.title");Object(a.useEffect)((function(){m(u.a.doInit(v.params.id)),d(!0)}),[m,v.params.id]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.typologieRevendication.menu"),"/typologie-revendication"],[R]]}),Object(r.jsxs)(p.a,{children:[g&&Object(r.jsx)(O.a,{}),s&&!g&&Object(r.jsx)(j.a,{title:R,saveLoading:h,record:y,isEditing:q,onSubmit:function(e,n){m(q?u.a.doUpdate(e,n):u.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/typologie-revendication")}})]})]})}}}]);