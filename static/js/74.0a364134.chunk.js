(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[74],{1056:function(e,n,t){"use strict";var r=t(420);function i(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var a=t(421).a.h1(i());n.a=a},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c}));var r=t(420);function i(){var e=Object(r.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return i=function(){return e},e}var a=t(421).a.div(i()),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=a},1058:function(e,n,t){"use strict";var r=t(0),i=t(17),a=t(2120),o=t(1195),c=t(1054),u=t(6),l=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,x=e.prefix,O=e.externalErrorMessage,h=e.required,v=e.addonAfter,g=e.maxLength,q=Object(c.d)(),y=q.setValue,C=q.watch,w=q.register,S=q.errors,L=q.formState,M=L.touched,Y=L.isSubmitted;Object(u.useEffect)((function(){w({name:t})}),[w,t]);var k=l.a.errorMessage(t,S,M,Y,O);return Object(i.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:h,validateStatus:k?"error":"success",help:k||s,children:Object(i.jsx)(o.a,{maxLength:g,id:t,name:t,type:b,value:C(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:x||void 0,addonAfter:v||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(14),i=t(15),a=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},1060:function(e,n,t){"use strict";var r=t(56),i=t(48),a=t(2),o=t(30),c=t.n(o),u={generic:function(e){return i.c().label(e)},string:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return i.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=i.a().compact().ensure().of(i.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=i.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(a.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).test("is-date",Object(a.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=u},1061:function(e,n,t){"use strict";var r=t(420);function i(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var a=t(421).a.div(i());n.a=a},1063:function(e,n,t){"use strict";var r=t(17),i=t(1107),a=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(i.a,{children:e.items.map((function(e){return Object(r.jsx)(i.a.Item,{children:n(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1080:function(e,n,t){"use strict";var r=t(17),i=t(1189);t(6);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(i.a,{})})}},1103:function(e,n,t){"use strict";var r=t(0),i=t(17),a=t(2120),o=t(1195),c=t(1054),u=t(6),l=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.placeholder,b=e.autoFocus,f=e.autoComplete,j=e.prefix,p=e.required,x=e.rows,O=e.externalErrorMessage,h=e.maxLength,v=Object(c.d)(),g=v.register,q=v.errors,y=v.formState,C=y.touched,w=y.isSubmitted,S=v.setValue,L=v.watch,M=l.a.errorMessage(t,q,C,w,O),Y=L(t);return Object(u.useEffect)((function(){g({name:t})}),[g,t]),Object(i.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:p,validateStatus:M?"error":"success",help:M||s,children:Object(i.jsx)(o.a.TextArea,{id:t,onChange:function(n){S(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},maxLength:h,value:Y,placeholder:m||void 0,autoFocus:b||!1,autoComplete:f||void 0,prefix:j||void 0,rows:x,style:{width:"100%"}})}))};s.defaultProps={layout:null,required:!1,rows:4},n.a=s},1583:function(e,n,t){"use strict";var r=t(0),i=t(433),a=t(17),o=t(1111),c=t(1165),u=t(1208),l=t(1187),s=t(1188),d=t(2120),m=t(450),b=t(447),f=t(1054),j=t(6),p=t(2),x=t(1057),O=t(48),h=t(1060),v=t(1062),g=t(1058),q=t(1103),y=t(1056),C=O.e().shape({title:h.a.string(Object(p.c)("entities.domaine.fields.title"),{required:!0}),description:h.a.string(Object(p.c)("entities.domaine.fields.description"),{required:!0})});n.a=function(e){var n=Object(j.useState)((function(){var n=e.record||{};return{title:n.title,description:n.description}})),t=Object(i.a)(n,1)[0],O=Object(f.c)({resolver:Object(v.yupResolver)(C),mode:"all",defaultValues:t}),h=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},w=e.saveLoading;return Object(a.jsx)(x.a,{children:Object(a.jsx)(f.a,Object(r.a)(Object(r.a)({},O),{},{children:Object(a.jsxs)("form",{onSubmit:O.handleSubmit(h),children:[Object(a.jsxs)(l.a,{gutter:24,children:[Object(a.jsx)(s.a,{span:16,children:Object(a.jsx)(y.a,{children:e.title})}),Object(a.jsx)(s.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(a.jsxs)(d.a.Item,Object(r.a)(Object(r.a)({className:"form-buttons"},x.c),{},{children:[Object(a.jsx)(m.a,{title:Object(p.c)("common.save"),children:Object(a.jsx)(b.a,{loading:w,type:"primary",onClick:O.handleSubmit(h),icon:Object(a.jsx)(o.a,{})})}),Object(a.jsx)(m.a,{title:Object(p.c)("common.reset"),children:Object(a.jsx)(b.a,{disabled:w,onClick:function(){Object.keys(t).forEach((function(e){O.setValue(e,t[e])}))},icon:Object(a.jsx)(c.a,{})})}),e.onCancel&&Object(a.jsx)(m.a,{title:Object(p.c)("common.cancel"),children:Object(a.jsx)(b.a,{disabled:w,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(u.a,{})})})]}))})]}),Object(a.jsx)(l.a,{gutter:24,children:Object(a.jsx)(s.a,{span:24,children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:Object(p.c)("common.informations")}),Object(a.jsx)(g.a,{name:"title",label:Object(p.c)("entities.domaine.fields.title"),required:!0,layout:x.b}),Object(a.jsx)(q.a,{name:"description",label:Object(p.c)("entities.domaine.fields.description"),required:!0,layout:x.b})]})})})]})}))})}},2270:function(e,n,t){"use strict";t.r(n);var r=t(433),i=t(17),a=t(6),o=t(39),c=t(41),u=t(2),l=t(244),s=t(4),d=function(e){return e.domaine.form},m=Object(s.a)([d],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:d},f=t(7),j=t(1583),p=t(1061),x=t(1063),O=t(1080);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),s=t[0],d=t[1],m=Object(o.d)(),h=Object(c.h)(),v=Object(o.e)(b.selectInitLoading),g=Object(o.e)(b.selectSaveLoading),q=Object(o.e)(b.selectRecord),y=Boolean(h.params.id),C=y?Object(u.c)("entities.domaine.edit.title"):Object(u.c)("entities.domaine.new.title");Object(a.useEffect)((function(){m(l.a.doInit(h.params.id)),d(!0)}),[m,h.params.id]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x.a,{items:[[Object(u.c)("dashboard.menu"),"/"],[Object(u.c)("entities.domaine.menu"),"/domaine"],[C]]}),Object(i.jsxs)(p.a,{children:[v&&Object(i.jsx)(O.a,{}),s&&!v&&Object(i.jsx)(j.a,{title:C,saveLoading:g,record:q,isEditing:y,onSubmit:function(e,n){m(y?l.a.doUpdate(e,n):l.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/domaine")}})]})]})}}}]);