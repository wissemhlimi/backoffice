"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1436],{89994:function(e,n,r){var t=r(93433),i=r(6473),a=r(10499),u=r(70816),o=r.n(u),l={generic:function(e){return i.nK().label(e)},string:function(e,n){n=n||{};var r=i.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},boolean:function(e,n){return i.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var r=i.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(r=r.required()),r},stringArray:function(e,n){n=n||{};var r=i.IX().compact().ensure().of(i.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},relationToMany:function(e,n){n=n||{};var r=i.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},integer:function(e,n){n=n||{};var r=i.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},images:function(e,n){n=n||{};var r=i.IX().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},files:function(e,n){n=n||{};var r=i.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},enumerator:function(e,n){n=n||{};var r=i.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,t.Z)(n.options||[])));return n.required&&(r=r.required((0,a.ag)("validation.string.selected"))),r},email:function(e,n){n=n||{};var r=i.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},decimal:function(e,n){n=n||{};var r=i.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},datetime:function(e,n){n=n||{};var r=i.nK().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(r=r.required()),r},date:function(e,n){n=n||{};var r=i.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(r=r.required()),r}};n.Z=l},59637:function(e,n,r){var t=r(76747),i=r(86495),a=r(26319),u=r(71945),o=(0,t.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(u.Z.values.typeViolenceRead)})),l=(0,t.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(u.Z.values.typeViolenceEdit)})),s=(0,t.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(u.Z.values.typeViolenceCreate)})),c=(0,t.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(u.Z.values.typeViolenceImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:(0,t.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(u.Z.values.typeViolenceDestroy)})),selectPermissionToImport:c};n.Z=d},27829:function(e,n,r){var t,i=r(30168),a=r(44781).ZP.div(t||(t=(0,i.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=a},53852:function(e,n,r){var t=r(28709),i=(r(47313),r(28303)),a=r(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,a.jsx)(t.Z,{children:e.items.map((function(e){return(0,a.jsx)(t.Z.Item,{children:n(e)?(0,a.jsx)(i.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,r){var t=r(72652),i=(r(47313),r(46417));n.Z=function(e){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)(t.Z,{})})}},49384:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(15671),i=r(43144),a=function(){function e(){(0,t.Z)(this,e)}return(0,i.Z)(e,null,[{key:"errorMessage",value:function(e,n,r,t){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!t&&!r[e])return null;var u=n[e];return(null===u||void 0===u||null===(i=u[0])||void 0===i?void 0:i.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},51552:function(e,n,r){var t=r(1413),i=r(74165),a=r(15861),u=r(29439),o=r(82138),l=r(61143),s=r(59420),c=r(59491),d=r(65375),f=r.n(d),m=r(47313),p=r(10499),v=r(49384),h=r(65237),x=r(43270),Z=r(46417),g=function(e){var n=(0,x.Gc)(),r=n.errors,d=n.watch,g=n.setValue,b=n.register,y=n.formState,C=y.touched,w=y.isSubmitted,q=e.label,k=e.name,I=e.hint,S=e.layout,P=e.size,V=e.placeholder,j=e.autoFocus,T=e.externalErrorMessage,M=e.defaultActiveFirstOption,D=e.allowClear,B=e.mode,F=e.required,L=e.fetchFn,Y=e.mapper,E=d(k);(0,m.useEffect)((function(){b({name:k})}),[b,k]);var A=(0,m.useState)([]),O=(0,u.Z)(A,2),R=O[0],U=O[1],_=(0,m.useState)([]),z=(0,u.Z)(_,2),X=z[0],K=z[1],G=(0,m.useState)([]),H=(0,u.Z)(G,2),N=H[0],$=H[1],J=(0,m.useState)(!1),Q=(0,u.Z)(J,2),W=Q[0],ee=Q[1],ne=(0,m.useRef)("NOT_INITIALIZED");(0,m.useEffect)((function(){re()}),[E]),(0,m.useEffect)((function(){le("")}),[]);var re=function(){if(E){var e=("multiple"===B?E:[E])||[];e=e.filter(Boolean).map(Y.toAutocomplete).map((function(e){return{id:e.key,label:e.label}})),K((function(n){return f()(n,e,"id")})),U((function(n){return f()(n,e,"id")}))}},te=e.inMemoryFilter?X:R,ie=function(e){return(te||[]).find((function(n){return n.id===e.key}))||e},ae="multiple"===B?E?E.map((function(e){return Y.toAutocomplete(ie(e))})):[]:function(){if(E)return Y.toAutocomplete(ie(E))}(),ue=function(n){if(!n)return g(k,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var r=n.map((function(e){return Y.toValue(e)}));g(k,r,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(r)},oe=function(n){if(!n)return g(k,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var r=Y.toValue(n);g(k,r,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(r)},le=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.inMemoryFilter){n.next=2;break}return n.abrupt("return",se(r));case 2:return n.abrupt("return",de(r));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),se=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=N)&&r.length){e.next=5;break}return e.next=4,ce();case 4:r=e.sent;case 5:K(r.filter((function(e){return String(e.label||"").toLowerCase().includes(String(n||"").toLowerCase())}))),ee(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(!0),e.prev=1,e.next=4,L();case 4:return n=e.sent,$(n),ee(!1),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),$([]),ee(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==ne.current){e.next=2;break}return e.abrupt("return");case 2:return ne.current=n,ee(!0),e.prev=4,e.next=7,L(n,100);case 7:r=e.sent,ne.current===n&&(ee(!1),U(r)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),ne.current===n&&(ee(!1),U([]));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}(),fe=(0,h.Z)(le,300);(0,m.useEffect)((function(){return function(){fe.flush()}}),[fe]);var me=te.filter((function(e){return Boolean(e.id)})).map((function(e){return(0,Z.jsx)(l.Z.Option,{value:e.id,children:e.label},e.id)})),pe=v.Z.errorMessage(k,r,C,w,T);return(0,Z.jsx)(s.Z.Item,(0,t.Z)((0,t.Z)({},S),{},{label:q,required:F,validateStatus:pe?"error":"success",help:W?(0,p.ag)("autocomplete.loading"):pe||I,children:(0,Z.jsxs)("div",{style:{display:"flex"},children:[(0,Z.jsx)(l.Z,{id:k,showSearch:!0,mode:B,labelInValue:!0,showArrow:!1,filterOption:!1,notFoundContent:null,onChange:function(e){return"multiple"===B?ue(e):oe(e)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:ae,onSearch:fe.callback,placeholder:V||void 0,size:P||void 0,autoFocus:j||!1,defaultActiveFirstOption:M,allowClear:D,children:me}),e.showCreate&&e.hasPermissionToCreate?(0,Z.jsx)(c.Z,{style:{marginLeft:"16px",flexShrink:0},type:"primary",icon:(0,Z.jsx)(o.Z,{rev:void 0}),onClick:e.onOpenModal,htmlType:"button"}):null]})}))};g.defaultProps={layout:null,defaultActiveFirstOption:!0,allowClear:!0,mode:"default",required:!1,inMemoryFilter:!1},n.Z=g},56148:function(e,n,r){var t=r(1413),i=r(59420),a=r(46937),u=r(43270),o=r(47313),l=r(49384),s=r(46417),c=function(e){var n=e.label,r=e.name,c=e.hint,d=e.layout,f=e.size,m=e.type,p=e.placeholder,v=e.autoFocus,h=e.autoComplete,x=e.prefix,Z=e.externalErrorMessage,g=e.required,b=e.addonAfter,y=e.maxLength,C=(0,u.Gc)(),w=C.setValue,q=C.watch,k=C.register,I=C.errors,S=C.formState,P=S.touched,V=S.isSubmitted;(0,o.useEffect)((function(){k({name:r})}),[k,r]);var j=l.Z.errorMessage(r,I,P,V,Z);return(0,s.jsx)(i.Z.Item,(0,t.Z)((0,t.Z)({},d),{},{label:n,required:g,validateStatus:j?"error":"success",help:j||c,children:(0,s.jsx)(a.Z,{maxLength:y,id:r,name:r,type:m,value:q(r),onChange:function(n){w(r,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:f||void 0,placeholder:p||void 0,autoFocus:v||!1,autoComplete:h||void 0,prefix:x||void 0,addonAfter:b||void 0,style:{width:"100%"}})}))};c.defaultProps={layout:null,type:"text",required:!1},n.Z=c},68160:function(e,n,r){r.d(n,{I4:function(){return u},YT:function(){return o}});var t,i=r(30168),a=r(44781).ZP.div(t||(t=(0,i.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),u={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.ZP=a},75352:function(e,n,r){var t,i=r(30168),a=r(44781).ZP.h1(t||(t=(0,i.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=a},30183:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(29439),i=r(47313),a=r(45788),u=r(63830),o=r(10499),l=r(45462),s=r(76747),c=function(e){return e.typeViolence.form},d=(0,s.P1)([c],(function(e){return e.record})),f={selectInitLoading:(0,s.P1)([c],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,s.P1)([c],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:c},m=r(37670),p=r(42613),v=r(27829),h=r(53852),x=r(61567),Z=r(46417),g=function(e){var n=(0,i.useState)(!1),r=(0,t.Z)(n,2),s=r[0],c=r[1],d=(0,a.I0)(),g=(0,u.$B)(),b=(0,a.v9)(f.selectInitLoading),y=(0,a.v9)(f.selectSaveLoading),C=(0,a.v9)(f.selectRecord),w=Boolean(g.params.id),q=w?(0,o.ag)("entities.typeViolence.edit.title"):(0,o.ag)("entities.typeViolence.new.title");(0,i.useEffect)((function(){d(l.Z.doInit(g.params.id)),c(!0)}),[d,g.params.id]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.typeViolence.menu"),"/type-violence"],[q]]}),(0,Z.jsxs)(v.Z,{children:[b&&(0,Z.jsx)(x.Z,{}),s&&!b&&(0,Z.jsx)(p.Z,{title:q,saveLoading:y,record:C,isEditing:w,onSubmit:function(e,n){d(w?l.Z.doUpdate(e,n):l.Z.doCreate(n))},onCancel:function(){return(0,m.s1)().push("/type-violence")}})]})]})}}}]);