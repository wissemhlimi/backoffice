(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[76],{1056:function(e,n,t){"use strict";var r=t(420);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(421).a.h1(a());n.a=i},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return l}));var r=t(420);function a(){var e=Object(r.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return a=function(){return e},e}var i=t(421).a.div(a()),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},l={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},1058:function(e,n,t){"use strict";var r=t(0),a=t(17),i=t(2120),c=t(1195),l=t(1054),o=t(6),u=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,b=e.type,f=e.placeholder,j=e.autoFocus,x=e.autoComplete,p=e.prefix,O=e.externalErrorMessage,v=e.required,h=e.addonAfter,g=e.maxLength,q=Object(l.d)(),y=q.setValue,C=q.watch,R=q.register,V=q.errors,w=q.formState,S=w.touched,Y=w.isSubmitted;Object(o.useEffect)((function(){R({name:t})}),[R,t]);var k=u.a.errorMessage(t,V,S,Y,O);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,required:v,validateStatus:k?"error":"success",help:k||s,children:Object(a.jsx)(c.a,{maxLength:g,id:t,name:t,type:b,value:C(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:x||void 0,prefix:p||void 0,addonAfter:h||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},1060:function(e,n,t){"use strict";var r=t(56),a=t(48),i=t(2),c=t(30),l=t.n(c),o={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},1061:function(e,n,t){"use strict";var r=t(420);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(421).a.div(a());n.a=i},1063:function(e,n,t){"use strict";var r=t(17),a=t(1107),i=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1080:function(e,n,t){"use strict";var r=t(17),a=t(1189);t(6);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},1627:function(e,n,t){"use strict";var r=t(0),a=t(433),i=t(17),c=t(1111),l=t(1165),o=t(1208),u=t(1187),s=t(1188),m=t(2120),d=t(450),b=t(447),f=t(1054),j=t(6),x=t(2),p=t(1057),O=t(48),v=t(1060),h=t(1062),g=t(1058),q=t(1056),y=O.e().shape({nameFR:v.a.string(Object(x.c)("entities.traitementViolence.fields.nameFR"),{}),nameEN:v.a.string(Object(x.c)("entities.traitementViolence.fields.nameEN"),{}),nameAR:v.a.string(Object(x.c)("entities.traitementViolence.fields.nameAR"),{required:!0})});n.a=function(e){var n=Object(j.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR}})),t=Object(a.a)(n,1)[0],O=Object(f.c)({resolver:Object(h.yupResolver)(y),mode:"all",defaultValues:t}),v=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},C=e.saveLoading;return Object(i.jsx)(p.a,{children:Object(i.jsx)(f.a,Object(r.a)(Object(r.a)({},O),{},{children:Object(i.jsxs)("form",{onSubmit:O.handleSubmit(v),children:[Object(i.jsxs)(u.a,{gutter:24,children:[Object(i.jsx)(s.a,{span:16,children:Object(i.jsx)(q.a,{children:e.title})}),Object(i.jsx)(s.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(i.jsxs)(m.a.Item,Object(r.a)(Object(r.a)({className:"form-buttons"},p.c),{},{children:[Object(i.jsx)(d.a,{title:Object(x.c)("common.save"),children:Object(i.jsx)(b.a,{loading:C,type:"primary",onClick:O.handleSubmit(v),icon:Object(i.jsx)(c.a,{})})}),Object(i.jsx)(d.a,{title:Object(x.c)("common.reset"),children:Object(i.jsx)(b.a,{disabled:C,onClick:function(){Object.keys(t).forEach((function(e){O.setValue(e,t[e])}))},icon:Object(i.jsx)(l.a,{})})}),e.onCancel&&Object(i.jsx)(d.a,{title:Object(x.c)("common.cancel"),children:Object(i.jsx)(b.a,{disabled:C,onClick:function(){return e.onCancel()},icon:Object(i.jsx)(o.a,{})})})]}))})]}),Object(i.jsx)(u.a,{gutter:24,children:Object(i.jsx)(s.a,{span:24,children:Object(i.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(i.jsx)("legend",{children:Object(x.c)("common.informations")}),Object(i.jsx)(g.a,{name:"nameAR",label:Object(x.c)("entities.traitementViolence.fields.nameAR"),required:!0,layout:p.b}),Object(i.jsx)(g.a,{name:"nameFR",label:Object(x.c)("entities.traitementViolence.fields.nameFR"),required:!1,layout:p.b,autoFocus:!0}),Object(i.jsx)(g.a,{name:"nameEN",label:Object(x.c)("entities.traitementViolence.fields.nameEN"),required:!1,layout:p.b})]})})})]})}))})}},2275:function(e,n,t){"use strict";t.r(n);var r=t(433),a=t(17),i=t(6),c=t(39),l=t(41),o=t(2),u=t(253),s=t(4),m=function(e){return e.traitementViolence.form},d=Object(s.a)([m],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([m],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([m],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:m},f=t(7),j=t(1627),x=t(1061),p=t(1063),O=t(1080);n.default=function(e){var n=Object(i.useState)(!1),t=Object(r.a)(n,2),s=t[0],m=t[1],d=Object(c.d)(),v=Object(l.h)(),h=Object(c.e)(b.selectInitLoading),g=Object(c.e)(b.selectSaveLoading),q=Object(c.e)(b.selectRecord),y=Boolean(v.params.id),C=y?Object(o.c)("entities.traitementViolence.edit.title"):Object(o.c)("entities.traitementViolence.new.title");Object(i.useEffect)((function(){d(u.a.doInit(v.params.id)),m(!0)}),[d,v.params.id]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.traitementViolence.menu"),"/traitement-violence"],[C]]}),Object(a.jsxs)(x.a,{children:[h&&Object(a.jsx)(O.a,{}),s&&!h&&Object(a.jsx)(j.a,{title:C,saveLoading:g,record:q,isEditing:y,onSubmit:function(e,n){d(y?u.a.doUpdate(e,n):u.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/traitement-violence")}})]})]})}}}]);