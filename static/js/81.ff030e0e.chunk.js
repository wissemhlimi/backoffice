(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[81],{1056:function(e,n,t){"use strict";var i=t(420);function r(){var e=Object(i.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=t(421).a.h1(r());n.a=a},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c}));var i=t(420);function r(){var e=Object(i.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return r=function(){return e},e}var a=t(421).a.div(r()),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=a},1058:function(e,n,t){"use strict";var i=t(0),r=t(17),a=t(1951),l=t(1184),c=t(1054),u=t(6),o=t(1059),d=function(e){var n=e.label,t=e.name,d=e.hint,s=e.layout,b=e.size,m=e.type,f=e.placeholder,j=e.autoFocus,p=e.autoComplete,O=e.prefix,x=e.externalErrorMessage,v=e.required,g=e.addonAfter,h=e.maxLength,q=Object(c.d)(),R=q.setValue,k=q.watch,y=q.register,B=q.errors,E=q.formState,F=E.touched,A=E.isSubmitted;Object(u.useEffect)((function(){y({name:t})}),[y,t]);var N=o.a.errorMessage(t,B,F,A,x);return Object(r.jsx)(a.a.Item,Object(i.a)(Object(i.a)({},s),{},{label:n,required:v,validateStatus:N?"error":"success",help:N||d,children:Object(r.jsx)(l.a,{maxLength:h,id:t,name:t,type:m,value:k(t),onChange:function(n){R(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:b||void 0,placeholder:f||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:O||void 0,addonAfter:g||void 0,style:{width:"100%"}})}))};d.defaultProps={layout:null,type:"text",required:!1},n.a=d},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t(14),r=t(15),a=function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,null,[{key:"errorMessage",value:function(e,n,t,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!i&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(r=l[0])||void 0===r?void 0:r.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},1060:function(e,n,t){"use strict";var i=t(56),r=t(48),a=t(2),l=t(30),c=t.n(l),u={generic:function(e){return r.c().label(e)},string:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return r.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=r.a().compact().ensure().of(r.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=r.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=r.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=r.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=r.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(i.a)(n.options||[])));return n.required&&(t=t.required(Object(a.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=r.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=r.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=r.c().nullable(!0).label(e).test("is-date",Object(a.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=u},1062:function(e,n,t){"use strict";var i=t(420);function r(){var e=Object(i.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=t(421).a.div(r());n.a=a},1063:function(e,n,t){"use strict";var i=t(17),r=t(1101),a=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1077:function(e,n,t){"use strict";var i=t(17),r=t(1178);t(6);n.a=function(e){return Object(i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(i.jsx)(r.a,{})})}},2077:function(e,n,t){"use strict";t.r(n);var i=t(433),r=t(17),a=t(6),l=t(39),c=t(41),u=t(2),o=t(292),d=t(4),s=function(e){return e.tableaudeBoard.form},b=Object(d.a)([s],(function(e){return e.record})),m={selectInitLoading:Object(d.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(d.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:b,selectRaw:s},f=t(7),j=t(0),p=t(1105),O=t(1155),x=t(1192),v=t(1951),g=t(447),h=t(1054),q=t(1057),R=t(48),k=t(1060),y=t(1061),B=t(1058),E=R.e().shape({titleFR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.titleFR"),{required:!0}),titleAR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.titleAR"),{required:!0}),titleEN:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.titleEN"),{required:!0}),linkFR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.linkFR"),{required:!0}),linkAR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.linkAR"),{required:!0}),linkEN:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.linkEN"),{required:!0}),descriptionFR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.descriptionFR"),{}),descriptionAR:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.descriptionAR"),{}),descriptionEN:k.a.string(Object(u.c)("entities.tableaudeBoard.fields.descriptionEN"),{})}),F=function(e){var n=Object(a.useState)((function(){var n=e.record||{};return{titleFR:n.titleFR,titleAR:n.titleAR,titleEN:n.titleEN,linkFR:n.linkFR,linkAR:n.linkAR,linkEN:n.linkEN,descriptionFR:n.descriptionFR,descriptionAR:n.descriptionAR,descriptionEN:n.descriptionEN}})),t=Object(i.a)(n,1)[0],l=Object(h.c)({resolver:Object(y.yupResolver)(E),mode:"all",defaultValues:t}),c=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},o=e.saveLoading;return Object(r.jsx)(q.a,{children:Object(r.jsx)(h.a,Object(j.a)(Object(j.a)({},l),{},{children:Object(r.jsxs)("form",{onSubmit:l.handleSubmit(c),children:[Object(r.jsx)(B.a,{name:"titleFR",label:Object(u.c)("entities.tableaudeBoard.fields.titleFR"),required:!0,layout:q.b,autoFocus:!0}),Object(r.jsx)(B.a,{name:"titleAR",label:Object(u.c)("entities.tableaudeBoard.fields.titleAR"),required:!0,layout:q.b}),Object(r.jsx)(B.a,{name:"titleEN",label:Object(u.c)("entities.tableaudeBoard.fields.titleEN"),required:!0,layout:q.b}),Object(r.jsx)(B.a,{name:"linkFR",label:Object(u.c)("entities.tableaudeBoard.fields.linkFR"),required:!0,layout:q.b}),Object(r.jsx)(B.a,{name:"linkAR",label:Object(u.c)("entities.tableaudeBoard.fields.linkAR"),required:!0,layout:q.b}),Object(r.jsx)(B.a,{name:"linkEN",label:Object(u.c)("entities.tableaudeBoard.fields.linkEN"),required:!0,layout:q.b}),Object(r.jsx)(B.a,{name:"descriptionFR",label:Object(u.c)("entities.tableaudeBoard.fields.descriptionFR"),required:!1,layout:q.b}),Object(r.jsx)(B.a,{name:"descriptionAR",label:Object(u.c)("entities.tableaudeBoard.fields.descriptionAR"),required:!1,layout:q.b}),Object(r.jsx)(B.a,{name:"descriptionEN",label:Object(u.c)("entities.tableaudeBoard.fields.descriptionEN"),required:!1,layout:q.b}),Object(r.jsxs)(v.a.Item,Object(j.a)(Object(j.a)({className:"form-buttons"},q.c),{},{children:[Object(r.jsx)(g.a,{loading:o,type:"primary",onClick:l.handleSubmit(c),icon:Object(r.jsx)(p.a,{}),children:Object(u.c)("common.save")}),Object(r.jsx)(g.a,{disabled:o,onClick:function(){Object.keys(t).forEach((function(e){l.setValue(e,t[e])}))},icon:Object(r.jsx)(O.a,{}),children:Object(u.c)("common.reset")}),e.onCancel&&Object(r.jsx)(g.a,{disabled:o,onClick:function(){return e.onCancel()},icon:Object(r.jsx)(x.a,{}),children:Object(u.c)("common.cancel")})]}))]})}))})},A=t(1062),N=t(1063),C=t(1077),w=t(1056);n.default=function(e){var n=Object(a.useState)(!1),t=Object(i.a)(n,2),d=t[0],s=t[1],b=Object(l.d)(),j=Object(c.h)(),p=Object(l.e)(m.selectInitLoading),O=Object(l.e)(m.selectSaveLoading),x=Object(l.e)(m.selectRecord),v=Boolean(j.params.id),g=v?Object(u.c)("entities.tableaudeBoard.edit.title"):Object(u.c)("entities.tableaudeBoard.new.title");Object(a.useEffect)((function(){b(o.a.doInit(j.params.id)),s(!0)}),[b,j.params.id]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N.a,{items:[[Object(u.c)("dashboard.menu"),"/"],[Object(u.c)("entities.tableaudeBoard.menu"),"/tableaude-board"],[g]]}),Object(r.jsxs)(A.a,{children:[Object(r.jsx)(w.a,{children:g}),p&&Object(r.jsx)(C.a,{}),d&&!p&&Object(r.jsx)(F,{saveLoading:O,record:x,isEditing:v,onSubmit:function(e,n){b(v?o.a.doUpdate(e,n):o.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/tableaude-board")}})]})]})}}}]);