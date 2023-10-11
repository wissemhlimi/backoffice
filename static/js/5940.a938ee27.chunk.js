"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5940],{89994:function(n,e,t){var r=t(93433),i=t(6473),a=t(10499),o=t(70816),u=t.n(o),l={generic:function(n){return i.nK().label(n)},string:function(n,e){e=e||{};var t=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(t=t.required()),(e.min||0===e.min)&&(t=t.min(e.min)),e.max&&(t=t.max(e.max)),e.matches&&(t=t.matches(e.matches)),t},boolean:function(n,e){return i.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var t=i.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(t=t.required()),t},stringArray:function(n,e){e=e||{};var t=i.IX().compact().ensure().of(i.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return e.required&&(t=t.required()),e.min||0===e.min?t=t.min(e.min):e.required&&(t=t.min(1)),e.max&&(t=t.max(e.max)),t},relationToMany:function(n,e){e=e||{};var t=i.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return e.required&&(t=t.required()),e.min||0===e.min?t=t.min(e.min):e.required&&(t=t.min(1)),e.max&&(t=t.max(e.max)),t},integer:function(n,e){e=e||{};var t=i.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(t=t.required()),(e.min||0===e.min)&&(t=t.min(e.min)),e.max&&(t=t.max(e.max)),t},images:function(n,e){e=e||{};var t=i.IX().nullable(!0).label(n);return(e.required||e.min)&&(t=t.required()),e.min||0===e.min?t=t.min(e.min):e.required&&(t=t.min(1)),e.max&&(t=t.max(e.max)),t},files:function(n,e){e=e||{};var t=i.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(t=t.required()),e.min||0===e.min?t=t.min(e.min):e.required&&(t=t.min(1)),e.max&&(t=t.max(e.max)),t},enumerator:function(n,e){e=e||{};var t=i.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,r.Z)(e.options||[])));return e.required&&(t=t.required((0,a.ag)("validation.string.selected"))),t},email:function(n,e){e=e||{};var t=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(t=t.required()),(e.min||0===e.min)&&(t=t.min(e.min)),e.max&&(t=t.max(e.max)),e.matches&&(t=t.matches(e.matches)),t},decimal:function(n,e){e=e||{};var t=i.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(t=t.required()),(e.min||0===e.min)&&(t=t.min(e.min)),e.max&&(t=t.max(e.max)),t},datetime:function(n,e){e=e||{};var t=i.nK().nullable(!0).label(n).transform((function(n,e){return n?u()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(t=t.required()),t},date:function(n,e){e=e||{};var t=i.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||u()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?u()(n).format("YYYY-MM-DD"):null}));return e.required&&(t=t.required()),t}};e.Z=l},14007:function(n,e,t){var r=t(1413),i=t(29439),a=t(92350),o=t(12196),u=t(11829),l=t(73591),s=t(68197),c=t(59624),d=t(59420),m=t(96995),f=t(59491),p=t(43270),h=t(47313),v=t(10499),x=t(68160),g=t(6473),Z=t(89994),b=t(67357),y=t(56148),j=t(860),q=t(61356),C=t(75352),w=t(46417),k=l.Z.TabPane,I=g.Ry().shape({nameFR:Z.Z.string((0,v.ag)("entities.intervention.fields.nameFR"),{}),nameEN:Z.Z.string((0,v.ag)("entities.intervention.fields.nameEN"),{}),nameAR:Z.Z.string((0,v.ag)("entities.intervention.fields.nameAR"),{required:!0}),type:Z.Z.relationToOne((0,v.ag)("entities.intervention.fields.type"),{}),reaction:Z.Z.relationToOne((0,v.ag)("entities.intervention.fields.reaction"),{})});e.Z=function(n){var e=(0,h.useState)((function(){var e=n.record||{};return{nameFR:e.nameFR,nameEN:e.nameEN,nameAR:e.nameAR,type:e.type,reaction:e.reaction}})),t=(0,i.Z)(e,1)[0],g=(0,p.cI)({resolver:(0,b.X)(I),mode:"all",defaultValues:t}),Z=function(e){var t;n.onSubmit(null===n||void 0===n||null===(t=n.record)||void 0===t?void 0:t.id,e)},S=n.saveLoading;return(0,w.jsx)(x.ZP,{children:(0,w.jsx)(p.RV,(0,r.Z)((0,r.Z)({},g),{},{children:(0,w.jsxs)("form",{onSubmit:g.handleSubmit(Z),children:[(0,w.jsxs)(s.Z,{gutter:24,children:[(0,w.jsx)(c.Z,{span:16,children:(0,w.jsx)(C.Z,{children:n.title})}),(0,w.jsx)(c.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,w.jsxs)(d.Z.Item,(0,r.Z)((0,r.Z)({className:"form-buttons"},x.YT),{},{children:[(0,w.jsx)(m.Z,{title:(0,v.ag)("common.save"),children:(0,w.jsx)(f.Z,{loading:S,type:"primary",onClick:g.handleSubmit(Z),icon:(0,w.jsx)(a.Z,{rev:void 0})})}),(0,w.jsx)(m.Z,{title:(0,v.ag)("common.reset"),children:(0,w.jsx)(f.Z,{disabled:S,onClick:function(){Object.keys(t).forEach((function(n){g.setValue(n,t[n])}))},icon:(0,w.jsx)(o.Z,{rev:void 0})})}),n.onCancel&&(0,w.jsx)(m.Z,{title:(0,v.ag)("common.cancel"),children:(0,w.jsx)(f.Z,{disabled:S,onClick:function(){return n.onCancel()},icon:(0,w.jsx)(u.Z,{rev:void 0})})})]}))})]}),(0,w.jsx)(s.Z,{gutter:24,children:(0,w.jsx)(c.Z,{span:24,children:(0,w.jsxs)(l.Z,{defaultActiveKey:"0",onChange:function(n){},children:[(0,w.jsx)(k,{tab:(0,v.ag)("common.informations"),children:(0,w.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,w.jsx)(j.Z,{name:"type",label:(0,v.ag)("entities.intervention.fields.type"),required:!1,showCreate:!n.modal,layout:x.I4}),(0,w.jsx)(q.Z,{name:"reaction",label:(0,v.ag)("entities.intervention.fields.reaction"),required:!1,showCreate:!n.modal,layout:x.I4})]})},"0"),(0,w.jsx)(k,{tab:(0,v.ag)("common.informationsAR"),children:(0,w.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,w.jsx)(y.Z,{name:"nameAR",label:(0,v.ag)("entities.intervention.fields.nameAR"),required:!0,layout:x.I4})})},"1"),(0,w.jsx)(k,{tab:(0,v.ag)("common.informationsFR"),children:(0,w.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,w.jsx)(y.Z,{name:"nameFR",label:(0,v.ag)("entities.intervention.fields.nameFR"),required:!1,layout:x.I4})})},"2"),(0,w.jsx)(k,{tab:(0,v.ag)("common.informationsEN"),children:(0,w.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,w.jsx)(y.Z,{name:"nameEN",label:(0,v.ag)("entities.intervention.fields.nameEN"),required:!1,layout:x.I4})})},"3")]})})})]})}))})}},54364:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r=t(29439),i=t(47313),a=t(45788),o=t(63830),u=t(10499),l=t(37188),s=t(76747),c=function(n){return n.intervention.form},d=(0,s.P1)([c],(function(n){return n.record})),m={selectInitLoading:(0,s.P1)([c],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,s.P1)([c],(function(n){return Boolean(n.saveLoading)})),selectRecord:d,selectRaw:c},f=t(37670),p=t(14007),h=t(27829),v=t(53852),x=t(61567),g=t(46417),Z=function(n){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),s=t[0],c=t[1],d=(0,a.I0)(),Z=(0,o.$B)(),b=(0,a.v9)(m.selectInitLoading),y=(0,a.v9)(m.selectSaveLoading),j=(0,a.v9)(m.selectRecord),q=Boolean(Z.params.id),C=q?(0,u.ag)("entities.intervention.edit.title"):(0,u.ag)("entities.intervention.new.title");(0,i.useEffect)((function(){d(l.Z.doInit(Z.params.id)),c(!0)}),[d,Z.params.id]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{items:[[(0,u.ag)("dashboard.menu"),"/"],[(0,u.ag)("entities.intervention.menu"),"/intervention"],[C]]}),(0,g.jsxs)(h.Z,{children:[b&&(0,g.jsx)(x.Z,{}),s&&!b&&(0,g.jsx)(p.Z,{title:C,saveLoading:y,record:j,isEditing:q,onSubmit:function(n,e){d(q?l.Z.doUpdate(n,e):l.Z.doCreate(e))},onCancel:function(){return(0,f.s1)().push("/intervention")}})]})]})}},27829:function(n,e,t){var r,i=t(30168),a=t(44781).ZP.div(r||(r=(0,i.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));e.Z=a},53852:function(n,e,t){var r=t(28709),i=(t(47313),t(28303)),a=t(46417);e.Z=function(n){var e=function(n){return n.length>1};return(0,a.jsx)(r.Z,{children:n.items.map((function(n){return(0,a.jsx)(r.Z.Item,{children:e(n)?(0,a.jsx)(i.rU,{to:n[1],children:n[0]}):n[0]},n[0])}))})}},61567:function(n,e,t){var r=t(72652),i=(t(47313),t(46417));e.Z=function(n){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)(r.Z,{})})}},49384:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(15671),i=t(43144),a=function(){function n(){(0,r.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,e,t,r){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!r&&!t[n])return null;var o=e[n];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),n}()},51552:function(n,e,t){var r=t(1413),i=t(74165),a=t(15861),o=t(29439),u=t(82138),l=t(61143),s=t(59420),c=t(59491),d=t(65375),m=t.n(d),f=t(47313),p=t(10499),h=t(49384),v=t(65237),x=t(43270),g=t(46417),Z=function(n){var e=(0,x.Gc)(),t=e.errors,d=e.watch,Z=e.setValue,b=e.register,y=e.formState,j=y.touched,q=y.isSubmitted,C=n.label,w=n.name,k=n.hint,I=n.layout,S=n.size,R=n.placeholder,A=n.autoFocus,F=n.externalErrorMessage,E=n.defaultActiveFirstOption,M=n.allowClear,T=n.mode,L=n.required,V=n.fetchFn,Y=n.mapper,B=d(w);(0,f.useEffect)((function(){b({name:w})}),[b,w]);var O=(0,f.useState)([]),D=(0,o.Z)(O,2),P=D[0],N=D[1],_=(0,f.useState)([]),X=(0,o.Z)(_,2),z=X[0],K=X[1],W=(0,f.useState)([]),G=(0,o.Z)(W,2),H=G[0],U=G[1],$=(0,f.useState)(!1),J=(0,o.Z)($,2),Q=J[0],nn=J[1],en=(0,f.useRef)("NOT_INITIALIZED");(0,f.useEffect)((function(){tn()}),[B]),(0,f.useEffect)((function(){sn("")}),[]);var tn=function(){if(B){var n=("multiple"===T?B:[B])||[];n=n.filter(Boolean).map(Y.toAutocomplete).map((function(n){return{id:n.key,label:n.label}})),K((function(e){return m()(e,n,"id")})),N((function(e){return m()(e,n,"id")}))}},rn=n.inMemoryFilter?z:P,an=function(n){return(rn||[]).find((function(e){return e.id===n.key}))||n},on="multiple"===T?B?B.map((function(n){return Y.toAutocomplete(an(n))})):[]:function(){if(B)return Y.toAutocomplete(an(B))}(),un=function(e){if(!e)return Z(w,[],{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange([]));var t=e.map((function(n){return Y.toValue(n)}));Z(w,t,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(t)},ln=function(e){if(!e)return Z(w,null,{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange(null));var t=Y.toValue(e);Z(w,t,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(t)},sn=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.inMemoryFilter){e.next=2;break}return e.abrupt("return",cn(t));case 2:return e.abrupt("return",mn(t));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),cn=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((t=H)&&t.length){n.next=5;break}return n.next=4,dn();case 4:t=n.sent;case 5:K(t.filter((function(n){return String(n.label||"").toLowerCase().includes(String(e||"").toLowerCase())}))),nn(!1);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),dn=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return nn(!0),n.prev=1,n.next=4,V();case 4:return e=n.sent,U(e),nn(!1),n.abrupt("return",e);case 10:return n.prev=10,n.t0=n.catch(1),console.error(n.t0),U([]),nn(!1),n.abrupt("return",[]);case 16:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}(),mn=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==en.current){n.next=2;break}return n.abrupt("return");case 2:return en.current=e,nn(!0),n.prev=4,n.next=7,V(e,100);case 7:t=n.sent,en.current===e&&(nn(!1),N(t)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(4),console.error(n.t0),en.current===e&&(nn(!1),N([]));case 15:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}(),fn=(0,v.Z)(sn,300);(0,f.useEffect)((function(){return function(){fn.flush()}}),[fn]);var pn=rn.filter((function(n){return Boolean(n.id)})).map((function(n){return(0,g.jsx)(l.Z.Option,{value:n.id,children:n.label},n.id)})),hn=h.Z.errorMessage(w,t,j,q,F);return(0,g.jsx)(s.Z.Item,(0,r.Z)((0,r.Z)({},I),{},{label:C,required:L,validateStatus:hn?"error":"success",help:Q?(0,p.ag)("autocomplete.loading"):hn||k,children:(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)(l.Z,{id:w,showSearch:!0,mode:T,labelInValue:!0,showArrow:!1,filterOption:!1,notFoundContent:null,onChange:function(n){return"multiple"===T?un(n):ln(n)},onBlur:function(e){n.onBlur&&n.onBlur(e)},value:on,onSearch:fn.callback,placeholder:R||void 0,size:S||void 0,autoFocus:A||!1,defaultActiveFirstOption:E,allowClear:M,children:pn}),n.showCreate&&n.hasPermissionToCreate?(0,g.jsx)(c.Z,{style:{marginLeft:"16px",flexShrink:0},type:"primary",icon:(0,g.jsx)(u.Z,{rev:void 0}),onClick:n.onOpenModal,htmlType:"button"}):null]})}))};Z.defaultProps={layout:null,defaultActiveFirstOption:!0,allowClear:!0,mode:"default",required:!1,inMemoryFilter:!1},e.Z=Z},56148:function(n,e,t){var r=t(1413),i=t(59420),a=t(46937),o=t(43270),u=t(47313),l=t(49384),s=t(46417),c=function(n){var e=n.label,t=n.name,c=n.hint,d=n.layout,m=n.size,f=n.type,p=n.placeholder,h=n.autoFocus,v=n.autoComplete,x=n.prefix,g=n.externalErrorMessage,Z=n.required,b=n.addonAfter,y=n.maxLength,j=(0,o.Gc)(),q=j.setValue,C=j.watch,w=j.register,k=j.errors,I=j.formState,S=I.touched,R=I.isSubmitted;(0,u.useEffect)((function(){w({name:t})}),[w,t]);var A=l.Z.errorMessage(t,k,S,R,g);return(0,s.jsx)(i.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:e,required:Z,validateStatus:A?"error":"success",help:A||c,children:(0,s.jsx)(a.Z,{maxLength:y,id:t,name:t,type:f,value:C(t),onChange:function(e){q(t,e.target.value,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},size:m||void 0,placeholder:p||void 0,autoFocus:h||!1,autoComplete:v||void 0,prefix:x||void 0,addonAfter:b||void 0,style:{width:"100%"}})}))};c.defaultProps={layout:null,type:"text",required:!1},e.Z=c},68160:function(n,e,t){t.d(e,{I4:function(){return o},YT:function(){return u}});var r,i=t(30168),a=t(44781).ZP.div(r||(r=(0,i.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},u={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};e.ZP=a},75352:function(n,e,t){var r,i=t(30168),a=t(44781).ZP.h1(r||(r=(0,i.Z)(["\n  margin-bottom: 36px;\n"])));e.Z=a}}]);