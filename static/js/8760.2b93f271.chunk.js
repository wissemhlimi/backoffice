"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8760],{89994:function(e,n,t){var i=t(93433),r=t(6473),a=t(10499),l=t(70816),o=t.n(l),u={generic:function(e){return r.nK().label(e)},string:function(e,n){n=n||{};var t=r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return r.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=r.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=r.IX().compact().ensure().of(r.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=r.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=r.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=r.IX().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=r.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=r.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,i.Z)(n.options||[])));return n.required&&(t=t.required((0,a.ag)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=r.nK().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.Z=u},27829:function(e,n,t){var i,r=t(30168),a=t(44781).ZP.div(i||(i=(0,r.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=a},53852:function(e,n,t){var i=t(28709),r=(t(47313),t(28303)),a=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,a.jsx)(i.Z,{children:e.items.map((function(e){return(0,a.jsx)(i.Z.Item,{children:n(e)?(0,a.jsx)(r.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var i=t(72652),r=(t(47313),t(46417));n.Z=function(e){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)(i.Z,{})})}},49384:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(15671),r=t(43144),a=function(){function e(){(0,i.Z)(this,e)}return(0,r.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!i&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(r=l[0])||void 0===r?void 0:r.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},56148:function(e,n,t){var i=t(1413),r=t(59420),a=t(46937),l=t(43270),o=t(47313),u=t(49384),d=t(46417),s=function(e){var n=e.label,t=e.name,s=e.hint,c=e.layout,m=e.size,f=e.type,g=e.placeholder,p=e.autoFocus,b=e.autoComplete,x=e.prefix,h=e.externalErrorMessage,Z=e.required,v=e.addonAfter,j=e.maxLength,y=(0,l.Gc)(),q=y.setValue,R=y.watch,B=y.register,k=y.errors,I=y.formState,E=I.touched,C=I.isSubmitted;(0,o.useEffect)((function(){B({name:t})}),[B,t]);var A=u.Z.errorMessage(t,k,E,C,h);return(0,d.jsx)(r.Z.Item,(0,i.Z)((0,i.Z)({},c),{},{label:n,required:Z,validateStatus:A?"error":"success",help:A||s,children:(0,d.jsx)(a.Z,{maxLength:j,id:t,name:t,type:f,value:R(t),onChange:function(n){q(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:g||void 0,autoFocus:p||!1,autoComplete:b||void 0,prefix:x||void 0,addonAfter:v||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.Z=s},59961:function(e,n,t){var i=t(1413),r=t(59420),a=t(3920),l=t(47313),o=t(49384),u=t(43270),d=t(46417),s=function(e){var n=e.label,t=e.name,s=e.hint,c=e.layout,m=e.options,f=e.externalErrorMessage,g=e.required,p=(0,u.Gc)(),b=p.register,x=p.errors,h=p.formState,Z=h.touched,v=h.isSubmitted,j=p.setValue,y=p.watch;(0,l.useEffect)((function(){b({name:t})}),[b,t]);var q=o.Z.errorMessage(t,x,Z,v,f),R=q||s;return(0,d.jsx)(r.Z.Item,(0,i.Z)((0,i.Z)({},c),{},{label:n,validateStatus:q?"error":"success",required:g,help:R,children:(0,d.jsx)(a.Z,{id:t,onChange:function(n){j(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},options:m,value:y(t)||""})}))};s.defaultProps={layout:null,required:!1},n.Z=s},48895:function(e,n,t){var i=t(1413),r=t(59420),a=t(86345),l=t(47313),o=t(49384),u=t(43270),d=t(46417),s=function(e){var n=e.label,t=e.name,s=e.hint,c=e.layout,m=e.size,f=e.externalErrorMessage,g=(0,u.Gc)(),p=g.register,b=g.errors,x=g.formState,h=x.touched,Z=x.isSubmitted,v=g.setValue,j=g.watch;(0,l.useEffect)((function(){p({name:t})}),[p,t]);var y=o.Z.errorMessage(t,b,h,Z,f),q=y||s;return(0,d.jsx)(r.Z.Item,(0,i.Z)((0,i.Z)({},c),{},{label:n,validateStatus:y?"error":"success",help:q,children:(0,d.jsx)(a.Z,{onChange:function(n){v(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},checked:j(t)||!1,size:m||void 0})}))};s.defaultProps={layout:null},n.Z=s},68160:function(e,n,t){t.d(n,{I4:function(){return l},YT:function(){return o}});var i,r=t(30168),a=t(44781).ZP.div(i||(i=(0,r.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.ZP=a},75352:function(e,n,t){var i,r=t(30168),a=t(44781).ZP.h1(i||(i=(0,r.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=a},38760:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(29439),r=t(47313),a=t(45788),l=t(63830),o=t(10499),u=t(86319),d=t(76747),s=function(e){return e.tableaudeBoard.form},c=(0,d.P1)([s],(function(e){return e.record})),m={selectInitLoading:(0,d.P1)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,d.P1)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:c,selectRaw:s},f=t(37670),g=t(1413),p=t(92350),b=t(12196),x=t(11829),h=t(68197),Z=t(59624),v=t(59420),j=t(96995),y=t(59491),q=t(43270),R=t(68160),B=t(6473),k=t(89994),I=t(67357),E=t(56148),C={type:["daily","monthly"]},A=t(59961),F=t(48895),S=t(75352),N=t(46417),w=B.Ry().shape({titleFR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.titleFR"),{required:!0}),titleAR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.titleAR"),{required:!0}),titleEN:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.titleEN"),{required:!0}),linkFR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.linkFR"),{required:!0}),linkAR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.linkAR"),{required:!0}),linkEN:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.linkEN"),{required:!0}),descriptionFR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.descriptionFR"),{}),descriptionAR:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.descriptionAR"),{}),descriptionEN:k.Z.string((0,o.ag)("entities.tableaudeBoard.fields.descriptionEN"),{}),type:k.Z.enumerator((0,o.ag)("entities.tableaudeBoard.fields.type"),{options:C.type}),home:k.Z.boolean((0,o.ag)("entities.tableaudeBoard.fields.home"),{}),dashboard:k.Z.boolean((0,o.ag)("entities.tableaudeBoard.fields.dashboard"),{})}),M=function(e){var n=(0,r.useState)((function(){var n=e.record||{};return{titleFR:n.titleFR,titleAR:n.titleAR,titleEN:n.titleEN,linkFR:n.linkFR,linkAR:n.linkAR,linkEN:n.linkEN,descriptionFR:n.descriptionFR,descriptionAR:n.descriptionAR,descriptionEN:n.descriptionEN,type:n.type,home:n.home,dashboard:n.dashboard}})),t=(0,i.Z)(n,1)[0],a=(0,q.cI)({resolver:(0,I.X)(w),mode:"all",defaultValues:t}),l=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},u=e.saveLoading;return(0,N.jsx)(R.ZP,{children:(0,N.jsx)(q.RV,(0,g.Z)((0,g.Z)({},a),{},{children:(0,N.jsxs)("form",{onSubmit:a.handleSubmit(l),children:[(0,N.jsxs)(h.Z,{gutter:24,children:[(0,N.jsx)(Z.Z,{span:16,children:(0,N.jsx)(S.Z,{children:e.title})}),(0,N.jsx)(Z.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,N.jsxs)(v.Z.Item,(0,g.Z)((0,g.Z)({className:"form-buttons"},R.YT),{},{children:[(0,N.jsx)(j.Z,{title:(0,o.ag)("common.save"),children:(0,N.jsx)(y.Z,{loading:u,type:"primary",onClick:a.handleSubmit(l),icon:(0,N.jsx)(p.Z,{rev:void 0})})}),(0,N.jsx)(j.Z,{title:(0,o.ag)("common.reset"),children:(0,N.jsx)(y.Z,{disabled:u,onClick:function(){Object.keys(t).forEach((function(e){a.setValue(e,t[e])}))},icon:(0,N.jsx)(b.Z,{rev:void 0})})}),e.onCancel&&(0,N.jsx)(j.Z,{title:(0,o.ag)("common.cancel"),children:(0,N.jsx)(y.Z,{disabled:u,onClick:function(){return e.onCancel()},icon:(0,N.jsx)(x.Z,{rev:void 0})})})]}))})]}),(0,N.jsx)(h.Z,{gutter:24,children:(0,N.jsxs)(Z.Z,{span:24,children:[(0,N.jsx)(A.Z,{name:"type",label:(0,o.ag)("entities.tableaudeBoard.fields.type"),options:C.type.map((function(e){return{value:e,label:(0,o.ag)("entities.tableaudeBoard.enumerators.type.".concat(e))}})),required:!1,layout:R.I4}),(0,N.jsxs)(h.Z,{gutter:24,children:[(0,N.jsx)(Z.Z,{span:12,children:(0,N.jsx)(F.Z,{name:"home",label:(0,o.ag)("entities.tableaudeBoard.fields.home"),layout:R.I4})}),(0,N.jsx)(Z.Z,{span:12,children:(0,N.jsx)(F.Z,{name:"dashboard",label:(0,o.ag)("entities.tableaudeBoard.fields.dashboard"),layout:R.I4})})]}),(0,N.jsx)(E.Z,{name:"titleFR",label:(0,o.ag)("entities.tableaudeBoard.fields.titleFR"),required:!0,layout:R.I4,autoFocus:!0}),(0,N.jsx)(E.Z,{name:"titleAR",label:(0,o.ag)("entities.tableaudeBoard.fields.titleAR"),required:!0,layout:R.I4}),(0,N.jsx)(E.Z,{name:"titleEN",label:(0,o.ag)("entities.tableaudeBoard.fields.titleEN"),required:!0,layout:R.I4}),(0,N.jsx)(E.Z,{name:"linkFR",label:(0,o.ag)("entities.tableaudeBoard.fields.linkFR"),required:!0,layout:R.I4}),(0,N.jsx)(E.Z,{name:"linkAR",label:(0,o.ag)("entities.tableaudeBoard.fields.linkAR"),required:!0,layout:R.I4}),(0,N.jsx)(E.Z,{name:"linkEN",label:(0,o.ag)("entities.tableaudeBoard.fields.linkEN"),required:!0,layout:R.I4}),(0,N.jsx)(E.Z,{name:"descriptionFR",label:(0,o.ag)("entities.tableaudeBoard.fields.descriptionFR"),required:!1,layout:R.I4}),(0,N.jsx)(E.Z,{name:"descriptionAR",label:(0,o.ag)("entities.tableaudeBoard.fields.descriptionAR"),required:!1,layout:R.I4}),(0,N.jsx)(E.Z,{name:"descriptionEN",label:(0,o.ag)("entities.tableaudeBoard.fields.descriptionEN"),required:!1,layout:R.I4})]})})]})}))})},Y=t(27829),L=t(53852),P=t(61567),V=function(e){var n=(0,r.useState)(!1),t=(0,i.Z)(n,2),d=t[0],s=t[1],c=(0,a.I0)(),g=(0,l.$B)(),p=(0,a.v9)(m.selectInitLoading),b=(0,a.v9)(m.selectSaveLoading),x=(0,a.v9)(m.selectRecord),h=Boolean(g.params.id),Z=h?(0,o.ag)("entities.tableaudeBoard.edit.title"):(0,o.ag)("entities.tableaudeBoard.new.title");(0,r.useEffect)((function(){c(u.Z.doInit(g.params.id)),s(!0)}),[c,g.params.id]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.tableaudeBoard.menu"),"/tableaude-board"],[Z]]}),(0,N.jsxs)(Y.Z,{children:[p&&(0,N.jsx)(P.Z,{}),d&&!p&&(0,N.jsx)(M,{saveLoading:b,title:Z,record:x,isEditing:h,onSubmit:function(e,n){c(h?u.Z.doUpdate(e,n):u.Z.doCreate(n))},onCancel:function(){return(0,f.s1)().push("/tableaude-board")}})]})]})}}}]);