(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[76],{1056:function(e,n,t){"use strict";var r=t(420);function i(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var a=t(421).a.h1(i());n.a=a},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return l}));var r=t(420);function i(){var e=Object(r.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return i=function(){return e},e}var a=t(421).a.div(i()),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},l={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=a},1058:function(e,n,t){"use strict";var r=t(0),i=t(17),a=t(2120),c=t(1199),l=t(1054),o=t(6),u=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,x=e.prefix,O=e.externalErrorMessage,v=e.required,h=e.addonAfter,g=Object(l.d)(),q=g.setValue,y=g.watch,C=g.register,R=g.errors,V=g.formState,w=V.touched,S=V.isSubmitted;Object(o.useEffect)((function(){C({name:t})}),[C,t]);var Y=u.a.errorMessage(t,R,w,S,O);return Object(i.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:v,validateStatus:Y?"error":"success",help:Y||s,children:Object(i.jsx)(c.a,{id:t,name:t,type:b,value:y(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:x||void 0,addonAfter:h||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(14),i=t(15),a=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(i=c[0])||void 0===i?void 0:i.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},1060:function(e,n,t){"use strict";var r=t(56),i=t(48),a=t(2),c=t(30),l=t.n(c),o={generic:function(e){return i.c().label(e)},string:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return i.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=i.a().compact().ensure().of(i.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=i.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(a.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).test("is-date",Object(a.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},1061:function(e,n,t){"use strict";var r=t(420);function i(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var a=t(421).a.div(i());n.a=a},1064:function(e,n,t){"use strict";var r=t(17),i=t(1109),a=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(i.a,{children:e.items.map((function(e){return Object(r.jsx)(i.a.Item,{children:n(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1080:function(e,n,t){"use strict";var r=t(17),i=t(1193);t(6);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(i.a,{})})}},1627:function(e,n,t){"use strict";var r=t(0),i=t(433),a=t(17),c=t(1112),l=t(1166),o=t(1208),u=t(1191),s=t(1192),d=t(2120),m=t(450),b=t(447),f=t(1054),j=t(6),p=t(2),x=t(1057),O=t(48),v=t(1060),h=t(1063),g=t(1058),q=t(1056),y=O.e().shape({nameFR:v.a.string(Object(p.c)("entities.traitementViolence.fields.nameFR"),{}),nameEN:v.a.string(Object(p.c)("entities.traitementViolence.fields.nameEN"),{}),nameAR:v.a.string(Object(p.c)("entities.traitementViolence.fields.nameAR"),{required:!0})});n.a=function(e){var n=Object(j.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR}})),t=Object(i.a)(n,1)[0],O=Object(f.c)({resolver:Object(h.yupResolver)(y),mode:"all",defaultValues:t}),v=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},C=e.saveLoading;return Object(a.jsx)(x.a,{children:Object(a.jsx)(f.a,Object(r.a)(Object(r.a)({},O),{},{children:Object(a.jsxs)("form",{onSubmit:O.handleSubmit(v),children:[Object(a.jsxs)(u.a,{gutter:24,children:[Object(a.jsx)(s.a,{span:16,children:Object(a.jsx)(q.a,{children:e.title})}),Object(a.jsx)(s.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(a.jsxs)(d.a.Item,Object(r.a)(Object(r.a)({className:"form-buttons"},x.c),{},{children:[Object(a.jsx)(m.a,{title:Object(p.c)("common.save"),children:Object(a.jsx)(b.a,{loading:C,type:"primary",onClick:O.handleSubmit(v),icon:Object(a.jsx)(c.a,{})})}),Object(a.jsx)(m.a,{title:Object(p.c)("common.reset"),children:Object(a.jsx)(b.a,{disabled:C,onClick:function(){Object.keys(t).forEach((function(e){O.setValue(e,t[e])}))},icon:Object(a.jsx)(l.a,{})})}),e.onCancel&&Object(a.jsx)(m.a,{title:Object(p.c)("common.cancel"),children:Object(a.jsx)(b.a,{disabled:C,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(o.a,{})})})]}))})]}),Object(a.jsx)(u.a,{gutter:24,children:Object(a.jsx)(s.a,{span:24,children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(a.jsx)("legend",{children:Object(p.c)("common.informations")}),Object(a.jsx)(g.a,{name:"nameAR",label:Object(p.c)("entities.traitementViolence.fields.nameAR"),required:!0,layout:x.b}),Object(a.jsx)(g.a,{name:"nameFR",label:Object(p.c)("entities.traitementViolence.fields.nameFR"),required:!1,layout:x.b,autoFocus:!0}),Object(a.jsx)(g.a,{name:"nameEN",label:Object(p.c)("entities.traitementViolence.fields.nameEN"),required:!1,layout:x.b})]})})})]})}))})}},2275:function(e,n,t){"use strict";t.r(n);var r=t(433),i=t(17),a=t(6),c=t(39),l=t(41),o=t(2),u=t(253),s=t(4),d=function(e){return e.traitementViolence.form},m=Object(s.a)([d],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:d},f=t(7),j=t(1627),p=t(1061),x=t(1064),O=t(1080);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),s=t[0],d=t[1],m=Object(c.d)(),v=Object(l.h)(),h=Object(c.e)(b.selectInitLoading),g=Object(c.e)(b.selectSaveLoading),q=Object(c.e)(b.selectRecord),y=Boolean(v.params.id),C=y?Object(o.c)("entities.traitementViolence.edit.title"):Object(o.c)("entities.traitementViolence.new.title");Object(a.useEffect)((function(){m(u.a.doInit(v.params.id)),d(!0)}),[m,v.params.id]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.traitementViolence.menu"),"/traitement-violence"],[C]]}),Object(i.jsxs)(p.a,{children:[h&&Object(i.jsx)(O.a,{}),s&&!h&&Object(i.jsx)(j.a,{title:C,saveLoading:g,record:q,isEditing:y,onSubmit:function(e,n){m(y?u.a.doUpdate(e,n):u.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/traitement-violence")}})]})]})}}}]);