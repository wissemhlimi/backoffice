(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[79],{1046:function(e,n,t){"use strict";var r=t(415);function i(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var a=t(416).a.h1(i());n.a=a},1047:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return u}));var r=t(415);function i(){var e=Object(r.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return i=function(){return e},e}var a=t(416).a.div(i()),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},u={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=a},1048:function(e,n,t){"use strict";var r=t(0),i=t(17),a=t(2103),l=t(2106),u=t(1044),o=t(6),c=t(1049),d=function(e){var n=e.label,t=e.name,d=e.hint,s=e.layout,b=e.size,m=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,O=e.prefix,x=e.externalErrorMessage,v=e.required,g=e.addonAfter,h=Object(u.d)(),q=h.setValue,R=h.watch,y=h.register,k=h.errors,B=h.formState,F=B.touched,A=B.isSubmitted;Object(o.useEffect)((function(){y({name:t})}),[y,t]);var C=c.a.errorMessage(t,k,F,A,x);return Object(i.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},s),{},{label:n,required:v,validateStatus:C?"error":"success",help:C||d,children:Object(i.jsx)(l.a,{id:t,name:t,type:m,value:R(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:b||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:O||void 0,addonAfter:g||void 0,style:{width:"100%"}})}))};d.defaultProps={layout:null,type:"text",required:!1},n.a=d},1049:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(14),i=t(15),a=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!r&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(i=l[0])||void 0===i?void 0:i.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},1050:function(e,n,t){"use strict";var r=t(56),i=t(48),a=t(2),l=t(31),u=t.n(l),o={generic:function(e){return i.c().label(e)},string:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return i.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=i.a().compact().ensure().of(i.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=i.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=i.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(a.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=i.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=i.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).transform((function(e,n){return e?u()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=i.c().nullable(!0).label(e).test("is-date",Object(a.c)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},1051:function(e,n,t){"use strict";var r=t(415);function i(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var a=t(416).a.div(i());n.a=a},1052:function(e,n,t){"use strict";var r=t(17),i=t(1093),a=(t(6),t(199));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(i.a,{children:e.items.map((function(e){return Object(r.jsx)(i.a.Item,{children:n(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1072:function(e,n,t){"use strict";var r=t(17),i=t(1073);t(6);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(i.a,{})})}},2229:function(e,n,t){"use strict";t.r(n);var r=t(428),i=t(17),a=t(6),l=t(39),u=t(41),o=t(2),c=t(290),d=t(4),s=function(e){return e.tableaudeBoard.form},b=Object(d.a)([s],(function(e){return e.record})),m={selectInitLoading:Object(d.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(d.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:b,selectRaw:s},f=t(7),j=t(0),p=t(1102),O=t(1182),x=t(1220),v=t(2103),g=t(443),h=t(1044),q=t(1047),R=t(48),y=t(1050),k=t(1053),B=t(1048),F=R.e().shape({titleFR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.titleFR"),{required:!0}),titleAR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.titleAR"),{required:!0}),linkFR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.linkFR"),{required:!0}),linkAR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.linkAR"),{required:!0}),descriptionFR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.descriptionFR"),{}),descriptionAR:y.a.string(Object(o.c)("entities.tableaudeBoard.fields.descriptionAR"),{})}),A=function(e){var n=Object(a.useState)((function(){var n=e.record||{};return{titleFR:n.titleFR,titleAR:n.titleAR,linkFR:n.linkFR,linkAR:n.linkAR,descriptionFR:n.descriptionFR,descriptionAR:n.descriptionAR}})),t=Object(r.a)(n,1)[0],l=Object(h.c)({resolver:Object(k.yupResolver)(F),mode:"all",defaultValues:t}),u=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},c=e.saveLoading;return Object(i.jsx)(q.a,{children:Object(i.jsx)(h.a,Object(j.a)(Object(j.a)({},l),{},{children:Object(i.jsxs)("form",{onSubmit:l.handleSubmit(u),children:[Object(i.jsx)(B.a,{name:"titleFR",label:Object(o.c)("entities.tableaudeBoard.fields.titleFR"),required:!0,layout:q.b,autoFocus:!0}),Object(i.jsx)(B.a,{name:"titleAR",label:Object(o.c)("entities.tableaudeBoard.fields.titleAR"),required:!0,layout:q.b}),Object(i.jsx)(B.a,{name:"linkFR",label:Object(o.c)("entities.tableaudeBoard.fields.linkFR"),required:!0,layout:q.b}),Object(i.jsx)(B.a,{name:"linkAR",label:Object(o.c)("entities.tableaudeBoard.fields.linkAR"),required:!0,layout:q.b}),Object(i.jsx)(B.a,{name:"descriptionFR",label:Object(o.c)("entities.tableaudeBoard.fields.descriptionFR"),required:!1,layout:q.b}),Object(i.jsx)(B.a,{name:"descriptionAR",label:Object(o.c)("entities.tableaudeBoard.fields.descriptionAR"),required:!1,layout:q.b}),Object(i.jsxs)(v.a.Item,Object(j.a)(Object(j.a)({className:"form-buttons"},q.c),{},{children:[Object(i.jsx)(g.a,{loading:c,type:"primary",onClick:l.handleSubmit(u),icon:Object(i.jsx)(p.a,{}),children:Object(o.c)("common.save")}),Object(i.jsx)(g.a,{disabled:c,onClick:function(){Object.keys(t).forEach((function(e){l.setValue(e,t[e])}))},icon:Object(i.jsx)(O.a,{}),children:Object(o.c)("common.reset")}),e.onCancel&&Object(i.jsx)(g.a,{disabled:c,onClick:function(){return e.onCancel()},icon:Object(i.jsx)(x.a,{}),children:Object(o.c)("common.cancel")})]}))]})}))})},C=t(1051),w=t(1052),S=t(1072),Y=t(1046);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),d=t[0],s=t[1],b=Object(l.d)(),j=Object(u.h)(),p=Object(l.e)(m.selectInitLoading),O=Object(l.e)(m.selectSaveLoading),x=Object(l.e)(m.selectRecord),v=Boolean(j.params.id),g=v?Object(o.c)("entities.tableaudeBoard.edit.title"):Object(o.c)("entities.tableaudeBoard.new.title");Object(a.useEffect)((function(){b(c.a.doInit(j.params.id)),s(!0)}),[b,j.params.id]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.tableaudeBoard.menu"),"/tableaude-board"],[g]]}),Object(i.jsxs)(C.a,{children:[Object(i.jsx)(Y.a,{children:g}),p&&Object(i.jsx)(S.a,{}),d&&!p&&Object(i.jsx)(A,{saveLoading:O,record:x,isEditing:v,onSubmit:function(e,n){b(v?c.a.doUpdate(e,n):c.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/tableaude-board")}})]})]})}}}]);