(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[23],{1322:function(e,n,t){"use strict";t.r(n);var r=t(23),a=t(1),i=t(43),u=t(36),c=t(3),l=t(121),o=t(5),s=function(e){return e.family.form},m=Object(o.a)([s],(function(e){return e.record})),d={selectInitLoading:Object(o.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(o.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:s},f=t(7),b=t(0),j=t(767),p=t(698),O=t(768),x=t(1286),v=t(206),h=t(618),g=t(630),q=t(44),y=t(638),C=t(645),S=t(629),w=t(805),D=t(12),M=q.e().shape({famTitle:y.a.string(Object(c.c)("entities.family.fields.famTitle"),{required:!0}),famDescr:y.a.string(Object(c.c)("entities.family.fields.famDescr"),{})}),Y=function(e){var n=Object(a.useState)((function(){var n=e.record||{};return{famTitle:n.famTitle,famDescr:n.famDescr}})),t=Object(r.a)(n,1)[0],i=Object(h.c)({resolver:Object(C.yupResolver)(M),mode:"all",defaultValues:t}),u=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},l=e.saveLoading;return Object(D.jsx)(g.a,{children:Object(D.jsx)(h.a,Object(b.a)(Object(b.a)({},i),{},{children:Object(D.jsxs)("form",{onSubmit:i.handleSubmit(u),children:[Object(D.jsx)(S.a,{name:"famTitle",label:Object(c.c)("entities.family.fields.famTitle"),required:!0,layout:g.b,autoFocus:!0}),Object(D.jsx)(w.a,{name:"famDescr",label:Object(c.c)("entities.family.fields.famDescr"),required:!1,layout:g.b}),Object(D.jsxs)(x.a.Item,Object(b.a)(Object(b.a)({className:"form-buttons"},g.c),{},{children:[Object(D.jsx)(v.a,{loading:l,type:"primary",onClick:i.handleSubmit(u),icon:Object(D.jsx)(j.a,{}),children:Object(c.c)("common.save")}),Object(D.jsx)(v.a,{disabled:l,onClick:function(){Object.keys(t).forEach((function(e){i.setValue(e,t[e])}))},icon:Object(D.jsx)(p.a,{}),children:Object(c.c)("common.reset")}),e.onCancel&&Object(D.jsx)(v.a,{disabled:l,onClick:function(){return e.onCancel()},icon:Object(D.jsx)(O.a,{}),children:Object(c.c)("common.cancel")})]}))]})}))})},B=t(623),T=t(625),I=t(655),k=t(624);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),o=t[0],s=t[1],m=Object(i.d)(),b=Object(u.h)(),j=Object(i.e)(d.selectInitLoading),p=Object(i.e)(d.selectSaveLoading),O=Object(i.e)(d.selectRecord),x=Boolean(b.params.id),v=x?Object(c.c)("entities.family.edit.title"):Object(c.c)("entities.family.new.title");Object(a.useEffect)((function(){m(l.a.doInit(b.params.id)),s(!0)}),[m,b.params.id]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(T.a,{items:[[Object(c.c)("dashboard.menu"),"/"],[Object(c.c)("entities.family.menu"),"/family"],[v]]}),Object(D.jsxs)(B.a,{children:[Object(D.jsx)(k.a,{children:v}),j&&Object(D.jsx)(I.a,{}),o&&!j&&Object(D.jsx)(Y,{saveLoading:p,record:O,isEditing:x,onSubmit:function(e,n){m(x?l.a.doUpdate(e,n):l.a.doCreate(n))},onCancel:function(){return Object(f.b)().push("/family")}})]})]})}},622:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var u=n[e];return(null===u||void 0===u||null===(a=u[0])||void 0===a?void 0:a.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},623:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=i},624:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));n.a=i},625:function(e,n,t){"use strict";var r=t(669),a=(t(1),t(95)),i=t(12);n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},629:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(1289),u=t(618),c=t(1),l=t(622),o=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,f=e.type,b=e.placeholder,j=e.autoFocus,p=e.autoComplete,O=e.prefix,x=e.externalErrorMessage,v=e.required,h=e.addonAfter,g=Object(u.d)(),q=g.setValue,y=g.watch,C=g.register,S=g.errors,w=g.formState,D=w.touched,M=w.isSubmitted;Object(c.useEffect)((function(){C({name:t})}),[C,t]);var Y=l.a.errorMessage(t,S,D,M,x);return Object(o.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,required:v,validateStatus:Y?"error":"success",help:Y||s,children:Object(o.jsx)(i.a,{id:t,name:t,type:f,value:y(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:b||void 0,autoFocus:j||!1,autoComplete:p||void 0,prefix:O||void 0,addonAfter:h||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},630:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c}));var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},638:function(e,n,t){"use strict";var r=t(19),a=t(44),i=t(3),u=t(106),c=t.n(u),l={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},655:function(e,n,t){"use strict";var r=t(654),a=(t(1),t(12));n.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},805:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(1289),u=t(618),c=t(1),l=t(622),o=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.placeholder,f=e.autoFocus,b=e.autoComplete,j=e.prefix,p=e.required,O=e.rows,x=e.externalErrorMessage,v=Object(u.d)(),h=v.register,g=v.errors,q=v.formState,y=q.touched,C=q.isSubmitted,S=v.setValue,w=v.watch,D=l.a.errorMessage(t,g,y,C,x),M=w(t);return Object(c.useEffect)((function(){h({name:t})}),[h,t]),Object(o.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,required:p,validateStatus:D?"error":"success",help:D||s,children:Object(o.jsx)(i.a.TextArea,{id:t,onChange:function(n){S(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:M,placeholder:d||void 0,autoFocus:f||!1,autoComplete:b||void 0,prefix:j||void 0,rows:O})}))};s.defaultProps={layout:null,required:!1,rows:4},n.a=s}}]);