(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[76],{1056:function(e,n,t){"use strict";var r=t(420);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(421).a.h1(a());n.a=i},1057:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o}));var r=t(420);function a(){var e=Object(r.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return a=function(){return e},e}var i=t(421).a.div(a()),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},1059:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},1060:function(e,n,t){"use strict";var r=t(56),a=t(48),i=t(2),c=t(30),o=t.n(c),u={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=u},1062:function(e,n,t){"use strict";var r=t(420);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(421).a.div(a());n.a=i},1063:function(e,n,t){"use strict";var r=t(17),a=t(1101),i=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1077:function(e,n,t){"use strict";var r=t(17),a=t(1178);t(6);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},1097:function(e,n,t){"use strict";var r=t(0),a=t(17),i=t(1952),c=t(1184),o=t(1054),u=t(6),l=t(1059),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,m=e.placeholder,b=e.autoFocus,f=e.autoComplete,j=e.prefix,p=e.required,x=e.rows,O=e.externalErrorMessage,h=e.maxLength,g=Object(o.d)(),v=g.register,q=g.errors,y=g.formState,C=y.touched,w=y.isSubmitted,S=g.setValue,M=g.watch,Y=l.a.errorMessage(t,q,C,w,O),k=M(t);return Object(u.useEffect)((function(){v({name:t})}),[v,t]),Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,required:p,validateStatus:Y?"error":"success",help:Y||s,children:Object(a.jsx)(c.a.TextArea,{id:t,onChange:function(n){S(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},maxLength:h,value:k,placeholder:m||void 0,autoFocus:b||!1,autoComplete:f||void 0,prefix:j||void 0,rows:x,style:{width:"100%"}})}))};s.defaultProps={layout:null,required:!1,rows:4},n.a=s},1556:function(e,n,t){"use strict";var r=t(0),a=t(17),i=t(1952),c=t(1557),o=t.n(c),u=t(6),l=t(1059),s=t(1054),d=function(e){var n=e.label,t=e.name,c=e.hint,d=e.layout,m=e.options,b=e.externalErrorMessage,f=e.required,j=Object(s.d)(),p=j.register,x=j.errors,O=j.formState,h=O.touched,g=O.isSubmitted,v=j.setValue,q=j.watch;Object(u.useEffect)((function(){p({name:t})}),[p,t]);var y=l.a.errorMessage(t,x,h,g,b),C=y||c;return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,validateStatus:y?"error":"success",required:f,help:C,children:Object(a.jsx)(o.a,{id:t,onChange:function(n){v(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},options:m,value:q(t)||""})}))};d.defaultProps={layout:null,required:!1},n.a=d},2085:function(e,n,t){"use strict";t.r(n);var r=t(433),a=t(17),i=t(6),c=t(39),o=t(41),u=t(2),l=t(291),s=t(4),d=function(e){return e.contact.form},m=Object(s.a)([d],(function(e){return e.record})),b={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:d},f=t(7),j=t(0),p=t(1103),x=t(1155),O=t(1192),h=t(1176),g=t(1177),v=t(1952),q=t(450),y=t(447),C=t(1054),w=t(1057),S=t(48),M=t(1060),Y=t(1061),k=t(1097),L=t(1556),I=t(610),D=t(1056),B=S.e().shape({type:M.a.enumerator(Object(u.c)("entities.contact.fields.type"),{options:I.a.type}),sender:M.a.enumerator(Object(u.c)("entities.contact.fields.sender"),{options:I.a.sender}),explication:M.a.string(Object(u.c)("entities.contact.fields.explication"),{required:!1})}),E=function(e){var n=Object(i.useState)((function(){var n=e.record||{};return{type:n.type,sender:n.sender,explication:n.explication}})),t=Object(r.a)(n,1)[0],c=Object(C.c)({resolver:Object(Y.yupResolver)(B),mode:"all",defaultValues:t}),o=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},l=e.saveLoading;return Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,Object(j.a)(Object(j.a)({},c),{},{children:Object(a.jsxs)("form",{onSubmit:c.handleSubmit(o),children:[Object(a.jsxs)(h.a,{gutter:24,children:[Object(a.jsx)(g.a,{span:16,children:Object(a.jsx)(D.a,{children:e.title})}),Object(a.jsx)(g.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(a.jsxs)(v.a.Item,Object(j.a)(Object(j.a)({className:"form-buttons"},w.c),{},{children:[Object(a.jsx)(q.a,{title:Object(u.c)("common.save"),children:Object(a.jsx)(y.a,{loading:l,type:"primary",onClick:c.handleSubmit(o),icon:Object(a.jsx)(p.a,{})})}),Object(a.jsx)(q.a,{title:Object(u.c)("common.reset"),children:Object(a.jsx)(y.a,{disabled:l,onClick:function(){Object.keys(t).forEach((function(e){c.setValue(e,t[e])}))},icon:Object(a.jsx)(x.a,{})})}),e.onCancel&&Object(a.jsx)(q.a,{title:Object(u.c)("common.cancel"),children:Object(a.jsx)(y.a,{disabled:l,onClick:function(){return e.onCancel()},icon:Object(a.jsx)(O.a,{})})})]}))})]}),Object(a.jsx)(h.a,{gutter:24,children:Object(a.jsx)(g.a,{span:24,children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("legend",{children:Object(u.c)("common.informations")}),Object(a.jsx)(L.a,{name:"sender",label:Object(u.c)("entities.contact.fields.sender"),options:I.a.sender.map((function(e){return{value:e,label:Object(u.c)("entities.contact.enumerators.sender.".concat(e))}})),required:!1,layout:w.b}),Object(a.jsx)(L.a,{name:"type",label:Object(u.c)("entities.contact.fields.type"),options:I.a.type.map((function(e){return{value:e,label:Object(u.c)("entities.contact.enumerators.type.".concat(e))}})),required:!1,layout:w.b}),Object(a.jsx)(k.a,{name:"explication",label:Object(u.c)("entities.contact.fields.explication"),required:!1,layout:w.b})]})})})]})}))})},V=t(1062),R=t(1063),T=t(1077);n.default=function(e){var n=Object(i.useState)(!1),t=Object(r.a)(n,2),s=t[0],d=t[1],m=Object(c.d)(),j=Object(o.h)(),p=Object(c.e)(b.selectInitLoading),x=Object(c.e)(b.selectSaveLoading),O=Object(c.e)(b.selectRecord),h=Boolean(j.params.id),g=h?Object(u.c)("entities.contact.edit.title"):Object(u.c)("entities.contact.new.title");Object(i.useEffect)((function(){m(l.a.doInit(j.params.id)),d(!0)}),[m,j.params.id]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R.a,{items:[[Object(u.c)("dashboard.menu"),"/"],[Object(u.c)("entities.contact.menu"),"/contact"],[g]]}),Object(a.jsxs)(V.a,{children:[p&&Object(a.jsx)(T.a,{}),s&&!p&&Object(a.jsx)(E,{title:g,saveLoading:x,record:O,isEditing:h,onSubmit:function(e,n){m(h?l.a.doUpdate(e,n):l.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/contact")}})]})]})}}}]);