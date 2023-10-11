"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6040],{76215:function(e,n,t){var r=t(76747),a=t(86495),i=t(26319),o=t(71945),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.acteurActionRead)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.acteurActionEdit)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.acteurActionCreate)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.acteurActionImport)})),d={selectPermissionToRead:u,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.acteurActionDestroy)})),selectPermissionToImport:c};n.Z=d},89994:function(e,n,t){var r=t(93433),a=t(6473),i=t(10499),o=t(70816),u=t.n(o),l={generic:function(e){return a.nK().label(e)},string:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.IX().compact().ensure().of(a.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,r.Z)(n.options||[])));return n.required&&(t=t.required((0,i.ag)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return e?u()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).test("is-date",(0,i.ag)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.Z=l},73634:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(1413),a=t(45987),i=t(93433),o=t(29439),u=t(47313),l=t(62241),s=t(74165),c=t(15861),d=t(48216),m=t(10499),f=t(44947),p=t(33512),v=t(46417),h=function(e){var n=(0,u.useState)(!1),t=(0,o.Z)(n,2),r=t[0],a=t[1],i=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(t,r){var i,o,u;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,l.Z.create(r);case 4:return i=n.sent,o=i.id,n.next=8,l.Z.find(o);case 8:u=n.sent,e.onSuccess(u),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),p.Z.handle(n.t0);case 15:return n.prev=15,a(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return e.visible?(0,v.jsx)(d.Z,{style:{top:24},title:(0,m.ag)("entities.acteurAction.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,v.jsx)(f.Z,{saveLoading:r,onSubmit:i,onCancel:e.onCancel,modal:!0})}):null},Z=t(51552),b=t(45788),x=t(76215),g=t(43270),y=["form"],j=function(e){var n=(0,u.useState)(!1),t=(0,o.Z)(n,2),s=t[0],c=t[1],d=(0,g.Gc)(),m=d.setValue,f=d.getValues,p=(0,b.v9)(x.Z.selectPermissionToCreate),j=function(){c(!1)},C=(e.form,(0,a.Z)(e,y));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.Z,(0,r.Z)((0,r.Z)({},C),{},{fetchFn:function(e,n){return l.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return(e.nameFR||e.nameAR)&&(t="".concat(e.nameFR," / ").concat(e.nameAR)),{key:n,label:t}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){c(!0)},inMemoryFilter:!0,hasPermissionToCreate:p})),(0,v.jsx)(h,{visible:s,onCancel:j,onSuccess:function(n){var t=e.name,r=e.mode;m(t,r&&"multiple"===r?[].concat((0,i.Z)(f()[t]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),j()}})]})}},44947:function(e,n,t){var r=t(1413),a=t(29439),i=t(92350),o=t(12196),u=t(11829),l=t(73591),s=t(68197),c=t(59624),d=t(59420),m=t(96995),f=t(59491),p=t(43270),v=t(47313),h=t(10499),Z=t(68160),b=t(6473),x=t(89994),g=t(67357),y=t(56148),j=t(73634),C=t(75352),A=t(46417),q=l.Z.TabPane,w=b.Ry().shape({nameFR:x.Z.string((0,h.ag)("entities.acteurAction.fields.nameFR")),nameEN:x.Z.string((0,h.ag)("entities.acteurAction.fields.nameEN"),{}),nameAR:x.Z.string((0,h.ag)("entities.acteurAction.fields.nameAR"),{required:!0}),abbrevFR:x.Z.string((0,h.ag)("entities.acteurAction.fields.abbrevFR"),{}),abbrevEN:x.Z.string((0,h.ag)("entities.acteurAction.fields.abbrevEN"),{}),abbrevAR:x.Z.string((0,h.ag)("entities.acteurAction.fields.abbrevAR"),{}),parent:x.Z.relationToOne((0,h.ag)("entities.acteurAction.fields.parent"),{})});n.Z=function(e){var n=(0,v.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR,abbrevFR:n.abbrevFR,abbrevEN:n.abbrevEN,abbrevAR:n.abbrevAR,parent:n.parent}})),t=(0,a.Z)(n,1)[0],b=(0,p.cI)({resolver:(0,g.X)(w),mode:"all",defaultValues:t}),x=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},R=e.saveLoading;return(0,A.jsx)(Z.ZP,{children:(0,A.jsx)(p.RV,(0,r.Z)((0,r.Z)({},b),{},{children:(0,A.jsxs)("form",{onSubmit:b.handleSubmit(x),children:[(0,A.jsxs)(s.Z,{gutter:24,children:[(0,A.jsx)(c.Z,{span:16,children:(0,A.jsx)(C.Z,{children:e.title})}),(0,A.jsx)(c.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,A.jsxs)(d.Z.Item,(0,r.Z)((0,r.Z)({className:"form-buttons"},Z.YT),{},{children:[(0,A.jsx)(m.Z,{title:(0,h.ag)("common.save"),children:(0,A.jsx)(f.Z,{loading:R,type:"primary",onClick:b.handleSubmit(x),icon:(0,A.jsx)(i.Z,{rev:void 0})})}),(0,A.jsx)(m.Z,{title:(0,h.ag)("common.reset"),children:(0,A.jsx)(f.Z,{disabled:R,onClick:function(){Object.keys(t).forEach((function(e){b.setValue(e,t[e])}))},icon:(0,A.jsx)(o.Z,{rev:void 0})})}),e.onCancel&&(0,A.jsx)(m.Z,{title:(0,h.ag)("common.cancel"),children:(0,A.jsx)(f.Z,{disabled:R,onClick:function(){return e.onCancel()},icon:(0,A.jsx)(u.Z,{rev:void 0})})})]}))})]}),(0,A.jsx)(s.Z,{gutter:24,children:(0,A.jsx)(c.Z,{span:24,children:(0,A.jsxs)(l.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,A.jsx)(q,{tab:(0,h.ag)("common.informationsAR"),children:(0,A.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,A.jsx)(y.Z,{name:"nameAR",label:(0,h.ag)("entities.acteurAction.fields.nameAR"),required:!0,layout:Z.I4}),(0,A.jsx)(y.Z,{name:"abbrevAR",label:(0,h.ag)("entities.acteurAction.fields.abbrevAR"),required:!1,layout:Z.I4}),(0,A.jsx)(j.Z,{name:"parent",label:(0,h.ag)("entities.acteurAction.fields.parent"),required:!1,showCreate:!e.modal,layout:Z.I4})]})},"1"),(0,A.jsx)(q,{tab:(0,h.ag)("common.informationsFR"),children:(0,A.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,A.jsx)(y.Z,{name:"nameFR",label:(0,h.ag)("entities.acteurAction.fields.nameFR"),required:!1,layout:Z.I4,autoFocus:!0}),(0,A.jsx)(y.Z,{name:"abbrevFR",label:(0,h.ag)("entities.acteurAction.fields.abbrevFR"),required:!1,layout:Z.I4})]})},"2"),(0,A.jsx)(q,{tab:(0,h.ag)("common.informationsEN"),children:(0,A.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,A.jsx)(y.Z,{name:"nameEN",label:(0,h.ag)("entities.acteurAction.fields.nameEN"),required:!1,layout:Z.I4}),(0,A.jsx)(y.Z,{name:"abbrevEN",label:(0,h.ag)("entities.acteurAction.fields.abbrevEN"),required:!1,layout:Z.I4})]})},"3")]})})})]})}))})}},76040:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(29439),a=t(47313),i=t(45788),o=t(63830),u=t(10499),l=t(97287),s=t(76747),c=function(e){return e.acteurAction.form},d=(0,s.P1)([c],(function(e){return e.record})),m={selectInitLoading:(0,s.P1)([c],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,s.P1)([c],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:c},f=t(37670),p=t(44947),v=t(27829),h=t(53852),Z=t(61567),b=t(46417),x=function(e){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),s=t[0],c=t[1],d=(0,i.I0)(),x=(0,o.$B)(),g=(0,i.v9)(m.selectInitLoading),y=(0,i.v9)(m.selectSaveLoading),j=(0,i.v9)(m.selectRecord),C=Boolean(x.params.id),A=C?(0,u.ag)("entities.acteurAction.edit.title"):(0,u.ag)("entities.acteurAction.new.title");(0,a.useEffect)((function(){d(l.Z.doInit(x.params.id)),c(!0)}),[d,x.params.id]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{items:[[(0,u.ag)("dashboard.menu"),"/"],[(0,u.ag)("entities.acteurAction.menu"),"/acteur-action"],[A]]}),(0,b.jsxs)(v.Z,{children:[g&&(0,b.jsx)(Z.Z,{}),s&&!g&&(0,b.jsx)(p.Z,{title:A,saveLoading:y,record:j,isEditing:C,onSubmit:function(e,n){d(C?l.Z.doUpdate(e,n):l.Z.doCreate(n))},onCancel:function(){return(0,f.s1)().push("/acteur-action")}})]})]})}},27829:function(e,n,t){var r,a=t(30168),i=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=i},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),i=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,i.jsx)(r.Z,{children:e.items.map((function(e){return(0,i.jsx)(r.Z.Item,{children:n(e)?(0,i.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var r=t(72652),a=(t(47313),t(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(r.Z,{})})}},49384:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(15671),a=t(43144),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},51552:function(e,n,t){var r=t(1413),a=t(74165),i=t(15861),o=t(29439),u=t(82138),l=t(61143),s=t(59420),c=t(59491),d=t(65375),m=t.n(d),f=t(47313),p=t(10499),v=t(49384),h=t(65237),Z=t(43270),b=t(46417),x=function(e){var n=(0,Z.Gc)(),t=n.errors,d=n.watch,x=n.setValue,g=n.register,y=n.formState,j=y.touched,C=y.isSubmitted,A=e.label,q=e.name,w=e.hint,R=e.layout,F=e.size,S=e.placeholder,k=e.autoFocus,I=e.externalErrorMessage,E=e.defaultActiveFirstOption,T=e.allowClear,P=e.mode,M=e.required,V=e.fetchFn,L=e.mapper,N=d(q);(0,f.useEffect)((function(){g({name:q})}),[g,q]);var D=(0,f.useState)([]),Y=(0,o.Z)(D,2),B=Y[0],O=Y[1],U=(0,f.useState)([]),_=(0,o.Z)(U,2),X=_[0],z=_[1],K=(0,f.useState)([]),G=(0,o.Z)(K,2),W=G[0],H=G[1],$=(0,f.useState)(!1),J=(0,o.Z)($,2),Q=J[0],ee=J[1],ne=(0,f.useRef)("NOT_INITIALIZED");(0,f.useEffect)((function(){te()}),[N]),(0,f.useEffect)((function(){le("")}),[]);var te=function(){if(N){var e=("multiple"===P?N:[N])||[];e=e.filter(Boolean).map(L.toAutocomplete).map((function(e){return{id:e.key,label:e.label}})),z((function(n){return m()(n,e,"id")})),O((function(n){return m()(n,e,"id")}))}},re=e.inMemoryFilter?X:B,ae=function(e){return(re||[]).find((function(n){return n.id===e.key}))||e},ie="multiple"===P?N?N.map((function(e){return L.toAutocomplete(ae(e))})):[]:function(){if(N)return L.toAutocomplete(ae(N))}(),oe=function(n){if(!n)return x(q,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return L.toValue(e)}));x(q,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},ue=function(n){if(!n)return x(q,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=L.toValue(n);x(q,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},le=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.inMemoryFilter){n.next=2;break}return n.abrupt("return",se(t));case 2:return n.abrupt("return",de(t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),se=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=W)&&t.length){e.next=5;break}return e.next=4,ce();case 4:t=e.sent;case 5:z(t.filter((function(e){return String(e.label||"").toLowerCase().includes(String(n||"").toLowerCase())}))),ee(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(!0),e.prev=1,e.next=4,V();case 4:return n=e.sent,H(n),ee(!1),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),H([]),ee(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==ne.current){e.next=2;break}return e.abrupt("return");case 2:return ne.current=n,ee(!0),e.prev=4,e.next=7,V(n,100);case 7:t=e.sent,ne.current===n&&(ee(!1),O(t)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),ne.current===n&&(ee(!1),O([]));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}(),me=(0,h.Z)(le,300);(0,f.useEffect)((function(){return function(){me.flush()}}),[me]);var fe=re.filter((function(e){return Boolean(e.id)})).map((function(e){return(0,b.jsx)(l.Z.Option,{value:e.id,children:e.label},e.id)})),pe=v.Z.errorMessage(q,t,j,C,I);return(0,b.jsx)(s.Z.Item,(0,r.Z)((0,r.Z)({},R),{},{label:A,required:M,validateStatus:pe?"error":"success",help:Q?(0,p.ag)("autocomplete.loading"):pe||w,children:(0,b.jsxs)("div",{style:{display:"flex"},children:[(0,b.jsx)(l.Z,{id:q,showSearch:!0,mode:P,labelInValue:!0,showArrow:!1,filterOption:!1,notFoundContent:null,onChange:function(e){return"multiple"===P?oe(e):ue(e)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:ie,onSearch:me.callback,placeholder:S||void 0,size:F||void 0,autoFocus:k||!1,defaultActiveFirstOption:E,allowClear:T,children:fe}),e.showCreate&&e.hasPermissionToCreate?(0,b.jsx)(c.Z,{style:{marginLeft:"16px",flexShrink:0},type:"primary",icon:(0,b.jsx)(u.Z,{rev:void 0}),onClick:e.onOpenModal,htmlType:"button"}):null]})}))};x.defaultProps={layout:null,defaultActiveFirstOption:!0,allowClear:!0,mode:"default",required:!1,inMemoryFilter:!1},n.Z=x},56148:function(e,n,t){var r=t(1413),a=t(59420),i=t(46937),o=t(43270),u=t(47313),l=t(49384),s=t(46417),c=function(e){var n=e.label,t=e.name,c=e.hint,d=e.layout,m=e.size,f=e.type,p=e.placeholder,v=e.autoFocus,h=e.autoComplete,Z=e.prefix,b=e.externalErrorMessage,x=e.required,g=e.addonAfter,y=e.maxLength,j=(0,o.Gc)(),C=j.setValue,A=j.watch,q=j.register,w=j.errors,R=j.formState,F=R.touched,S=R.isSubmitted;(0,u.useEffect)((function(){q({name:t})}),[q,t]);var k=l.Z.errorMessage(t,w,F,S,b);return(0,s.jsx)(a.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:n,required:x,validateStatus:k?"error":"success",help:k||c,children:(0,s.jsx)(i.Z,{maxLength:y,id:t,name:t,type:f,value:A(t),onChange:function(n){C(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:p||void 0,autoFocus:v||!1,autoComplete:h||void 0,prefix:Z||void 0,addonAfter:g||void 0,style:{width:"100%"}})}))};c.defaultProps={layout:null,type:"text",required:!1},n.Z=c},68160:function(e,n,t){t.d(n,{I4:function(){return o},YT:function(){return u}});var r,a=t(30168),i=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},u={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.ZP=i},75352:function(e,n,t){var r,a=t(30168),i=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=i}}]);