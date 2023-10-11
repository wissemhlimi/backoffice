"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8022],{12271:function(e,t,n){var r=n(76747),i=n(86495),a=n(26319),o=n(71945),l=(0,r.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,t){return new a.Z(e,t).match(o.Z.values.sourceRead)})),u=(0,r.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,t){return new a.Z(e,t).match(o.Z.values.sourceEdit)})),s=(0,r.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,t){return new a.Z(e,t).match(o.Z.values.sourceCreate)})),c=(0,r.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,t){return new a.Z(e,t).match(o.Z.values.sourceImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:u,selectPermissionToCreate:s,selectPermissionToDestroy:(0,r.P1)([i.Z.selectCurrentTenant,i.Z.selectCurrentUser],(function(e,t){return new a.Z(e,t).match(o.Z.values.sourceDestroy)})),selectPermissionToImport:c};t.Z=d},71896:function(e,t,n){var r=n(1413),i=n(59420),a=n(27083),o=n(47313),l=n(49384),u=n(43270),s=n(46417),c=function(e){var t=e.label,n=e.name,c=e.hint,d=e.layout,f=e.autoFocus,h=e.showTime,m=e.required,Z=e.placeholder,p=e.externalErrorMessage,v=(0,u.Gc)(),x=v.register,g=v.errors,b=v.formState,C=b.touched,y=b.isSubmitted,j=v.setValue,w=v.watch,k=l.Z.errorMessage(n,g,C,y,p);return(0,o.useEffect)((function(){x({name:n})}),[x,n]),(0,s.jsx)(i.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:t,required:m,validateStatus:k?"error":"success",help:k||c,children:(0,s.jsx)(a.Z,{onChange:function(t){j(n,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},value:w(n),onBlur:function(t){e.onBlur&&e.onBlur(t)},autoFocus:f||!1,style:{width:"100%"},showTime:h?{format:"HH:mm"}:void 0,format:h?"YYYY-MM-DD HH:mm":void 0,placeholder:Z})}))};c.defaultProps={layout:null,showTime:!1,required:!1},t.Z=c},5544:function(e,t,n){var r=n(1413),i=n(59420),a=n(61143),o=n(47313),l=n(49384),u=n(43270),s=n(46417),c=function(e){var t=e.label,n=e.name,c=e.hint,d=e.layout,f=e.size,h=e.placeholder,m=e.options,Z=e.mode,p=e.autoFocus,v=e.required,x=e.externalErrorMessage,g=e.optionFilterProp,b=(0,u.Gc)(),C=b.register,y=b.errors,j=b.formState,w=j.touched,k=j.isSubmitted,T=b.setValue,S=b.watch,V=l.Z.errorMessage(n,y,w,k,x),F=S(n);return(0,o.useEffect)((function(){C({name:n})}),[C,n]),(0,s.jsx)(i.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:t,validateStatus:V?"error":"success",required:v,help:V||c,children:(0,s.jsx)(a.Z,{id:n,onChange:function(t){T(n,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:F,size:f||void 0,placeholder:h||void 0,autoFocus:p||!1,mode:Z||void 0,optionFilterProp:g||"children",allowClear:!0,style:{width:"100%"},children:m.map((function(e){return(0,s.jsx)(a.Z.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};c.defaultProps={layout:null,required:!1},t.Z=c},89146:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(1413),i=n(45987),a=n(93433),o=n(29439),l=n(47313),u=n(59132),s=n(74165),c=n(15861),d=n(48216),f=n(10499),h=n(34960),m=n(33512),Z=n(46417),p=function(e){var t=(0,l.useState)(!1),n=(0,o.Z)(t,2),r=n[0],i=n[1],a=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(n,r){var a,o,l;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(!0),t.next=4,u.Z.create(r);case 4:return a=t.sent,o=a.id,t.next=8,u.Z.find(o);case 8:l=t.sent,e.onSuccess(l),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),m.Z.handle(t.t0);case 15:return t.prev=15,i(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return e.visible?(0,Z.jsx)(d.Z,{style:{top:24},title:(0,f.ag)("entities.source.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,Z.jsx)(h.Z,{saveLoading:r,onSubmit:a,onCancel:e.onCancel,modal:!0})}):null},v=n(82138),x=n(61143),g=n(59420),b=n(59491),C=n(65375),y=n.n(C),j=n(49384),w=n(65237),k=n(43270),T=function(e){var t=(0,k.Gc)(),n=t.errors,i=t.watch,a=t.setValue,u=t.register,d=t.formState,h=d.touched,m=d.isSubmitted,p=e.label,C=e.name,T=e.hint,S=e.layout,V=e.size,F=e.placeholder,P=e.autoFocus,I=e.externalErrorMessage,M=e.defaultActiveFirstOption,D=e.allowClear,q=e.mode,E=e.required,A=e.fetchFn,B=e.mapper,O=i(C);(0,l.useEffect)((function(){u({name:C})}),[u,C]);var Y=(0,l.useState)([]),L=(0,o.Z)(Y,2),R=L[0],U=L[1],z=(0,l.useState)([]),G=(0,o.Z)(z,2),H=G[0],N=G[1],_=(0,l.useState)([]),W=(0,o.Z)(_,2),X=W[0],J=W[1],K=(0,l.useState)(!1),Q=(0,o.Z)(K,2),$=Q[0],ee=Q[1],te=(0,l.useRef)("NOT_INITIALIZED");(0,l.useEffect)((function(){ne()}),[O]),(0,l.useEffect)((function(){ue("")}),[]);var ne=function(){if(O){var e=("multiple"===q?O:[O])||[];e=e.filter(Boolean).map(B.toAutocomplete).map((function(e){return{id:e.key,label:e.label}})),N((function(t){return y()(t,e,"id")})),U((function(t){return y()(t,e,"id")}))}},re=e.inMemoryFilter?H:R,ie=function(e){return(re||[]).find((function(t){return t.id===e.key}))||e},ae="multiple"===q?O?O.map((function(e){return B.toAutocomplete(ie(e))})):[]:function(){if(O)return B.toAutocomplete(ie(O))}(),oe=function(t){if(!t)return a(C,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var n=t.map((function(e){return B.toValue(e)}));a(C,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},le=function(t){if(!t)return a(C,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var n=B.toValue(t);a(C,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},ue=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.inMemoryFilter){t.next=2;break}return t.abrupt("return",se(n));case 2:return t.abrupt("return",de(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),se=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=X)&&n.length){e.next=5;break}return e.next=4,ce();case 4:n=e.sent;case 5:N(n.filter((function(e){return String(e.label||"").toLowerCase().includes(String(t||"").toLowerCase())}))),ee(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(!0),e.prev=1,e.next=4,A();case 4:return t=e.sent,J(t),ee(!1),e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),J([]),ee(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==te.current){e.next=2;break}return e.abrupt("return");case 2:return te.current=t,ee(!0),e.prev=4,e.next=7,A(t,100);case 7:n=e.sent,te.current===t&&(ee(!1),U(n)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),te.current===t&&(ee(!1),U([]));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),fe=(0,w.Z)(ue,300);(0,l.useEffect)((function(){return function(){fe.flush()}}),[fe]);re.filter((function(e){return Boolean(e.id)})).map((function(e){return(0,Z.jsx)(x.Z.Option,{value:e.id,children:e.label},e.id)}));var he=j.Z.errorMessage(C,n,h,m,I);return(0,Z.jsx)(g.Z.Item,(0,r.Z)((0,r.Z)({},S),{},{label:p,required:E,validateStatus:he?"error":"success",help:$?(0,f.ag)("autocomplete.loading"):he||T,children:(0,Z.jsxs)("div",{style:{display:"flex"},children:[(0,Z.jsx)(x.Z,{id:C,showSearch:!0,mode:q,labelInValue:!0,showArrow:!1,filterOption:!1,notFoundContent:null,onChange:function(e){return"multiple"===q?oe(e):le(e)},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:ae,onSearch:fe.callback,placeholder:F||void 0,size:V||void 0,autoFocus:P||!1,defaultActiveFirstOption:M,allowClear:D}),e.showCreate&&e.hasPermissionToCreate?(0,Z.jsx)(b.Z,{style:{marginLeft:"16px",flexShrink:0},type:"primary",icon:(0,Z.jsx)(v.Z,{rev:void 0}),onClick:e.onOpenModal,htmlType:"button"}):null]})}))};T.defaultProps={layout:null,defaultActiveFirstOption:!0,allowClear:!0,mode:"default",required:!1,inMemoryFilter:!1};var S=T,V=n(45788),F=n(12271),P=["form"],I=function(e){var t=(0,l.useState)(!1),n=(0,o.Z)(t,2),s=n[0],c=n[1],d=(0,k.Gc)(),f=d.setValue,h=d.getValues,m=(0,V.v9)(F.Z.selectPermissionToCreate),v=function(){c(!1)},x=(e.form,(0,i.Z)(e,P));return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S,(0,r.Z)((0,r.Z)({},x),{},{fetchFn:function(e,t){return u.Z.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return e.mediaTitle&&(n=e.mediaTitle),{key:t,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){c(!0)},inMemoryFilter:!0,hasPermissionToCreate:m})),(0,Z.jsx)(p,{visible:s,onCancel:v,onSuccess:function(t){var n=e.name,r=e.mode;f(n,r&&"multiple"===r?[].concat((0,a.Z)(h()[n]||[]),[t]):t,{shouldValidate:!0,shouldDirty:!0}),v()}})]})}},34960:function(e,t,n){var r=n(1413),i=n(29439),a=n(92350),o=n(12196),l=n(11829),u=n(68197),s=n(59624),c=n(59420),d=n(96995),f=n(59491),h=n(43270),m=n(47313),Z=n(10499),p=n(68160),v=n(6473),x=n(89994),g=n(67357),b=n(56148),C=n(70816),y=n.n(C),j=n(71896),w=n(62053),k=n(75352),T=n(46417),S=v.Ry().shape({date:x.Z.date((0,Z.ag)("entities.source.fields.date"),{}),media:x.Z.relationToOne((0,Z.ag)("entities.source.fields.media"),{}),link:x.Z.string((0,Z.ag)("entities.source.fields.link"),{}),mediaTitle:x.Z.string((0,Z.ag)("entities.source.fields.link"),{})});t.Z=function(e){var t=(0,m.useState)((function(){var t=e.record||{};return{date:t.date?y()(t.date,"YYYY-MM-DD"):null,media:t.media,link:t.link,mediaTitle:t.mediaTitle}})),n=(0,i.Z)(t,1)[0],v=(0,h.cI)({resolver:(0,g.X)(S),mode:"all",defaultValues:n}),x=function(t){var n,i=(0,r.Z)((0,r.Z)({},t),{},{mediaTitle:v.getValues().media.label});e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,i,v.getValues().media.label)},C=e.saveLoading;return(0,T.jsx)(p.ZP,{children:(0,T.jsx)(h.RV,(0,r.Z)((0,r.Z)({},v),{},{children:(0,T.jsxs)("form",{onSubmit:v.handleSubmit(x),children:[(0,T.jsxs)(u.Z,{gutter:24,children:[(0,T.jsx)(s.Z,{span:16,children:(0,T.jsx)(k.Z,{children:e.title})}),(0,T.jsx)(s.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,T.jsxs)(c.Z.Item,(0,r.Z)((0,r.Z)({className:"form-buttons"},p.YT),{},{children:[(0,T.jsx)(d.Z,{title:(0,Z.ag)("common.save"),children:(0,T.jsx)(f.Z,{loading:C,type:"primary",onClick:v.handleSubmit(x),icon:(0,T.jsx)(a.Z,{rev:void 0})})}),(0,T.jsx)(d.Z,{title:(0,Z.ag)("common.reset"),children:(0,T.jsx)(f.Z,{disabled:C,onClick:function(){Object.keys(n).forEach((function(e){v.setValue(e,n[e])}))},icon:(0,T.jsx)(o.Z,{rev:void 0})})}),e.onCancel&&(0,T.jsx)(d.Z,{title:(0,Z.ag)("common.cancel"),children:(0,T.jsx)(f.Z,{disabled:C,onClick:function(){return e.onCancel()},icon:(0,T.jsx)(l.Z,{rev:void 0})})})]}))})]}),(0,T.jsx)(u.Z,{gutter:24,children:(0,T.jsx)(s.Z,{span:24,children:(0,T.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,T.jsx)("legend",{children:(0,Z.ag)("common.informations")}),(0,T.jsx)(j.Z,{name:"date",label:(0,Z.ag)("entities.source.fields.date"),required:!1,layout:p.I4}),(0,T.jsx)(w.Z,{name:"media",label:(0,Z.ag)("entities.source.fields.media"),required:!1,showCreate:!e.modal,layout:p.I4}),(0,T.jsx)(b.Z,{name:"link",label:(0,Z.ag)("entities.source.fields.link"),required:!1,layout:p.I4}),(0,T.jsx)("div",{style:{display:"none"},children:(0,T.jsx)(b.Z,{name:"mediaTitle",label:(0,Z.ag)("entities.source.fields.link"),required:!1,layout:p.I4})})]})})})]})}))})}}}]);