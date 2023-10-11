"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8511],{96671:function(e,n,t){var i=t(76747),r=t(86495),a=t(26319),s=t(71945),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.mediaRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.mediaEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.mediaCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.mediaImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.mediaDestroy)})),selectPermissionToImport:u};n.Z=d},91995:function(e,n,t){var i=t(76747),r=t(86495),a=t(26319),s=t(71945),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.typeMediaRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.typeMediaEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.typeMediaCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.typeMediaImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.typeMediaDestroy)})),selectPermissionToImport:u};n.Z=d},62053:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(1413),r=t(45987),a=t(93433),s=t(29439),l=t(47313),o=t(42363),c=t(74165),u=t(15861),d=t(48216),m=t(10499),Z=t(56207),f=t(33512),h=t(46417),p=function(e){var n=(0,l.useState)(!1),t=(0,s.Z)(n,2),i=t[0],r=t[1],a=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t,i){var a,s,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,o.Z.create(i);case 4:return a=n.sent,s=a.id,n.next=8,o.Z.find(s);case 8:l=n.sent,e.onSuccess(l),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),f.Z.handle(n.t0);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return e.visible?(0,h.jsx)(d.Z,{style:{top:24},title:(0,m.ag)("entities.media.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,h.jsx)(Z.Z,{saveLoading:i,onSubmit:a,onCancel:e.onCancel,modal:!0})}):null},v=t(51552),x=t(45788),j=t(96671),y=t(43270),g=["form"],b=function(e){var n=(0,l.useState)(!1),t=(0,s.Z)(n,2),c=t[0],u=t[1],d=(0,y.Gc)(),m=d.setValue,Z=d.getValues,f=(0,x.v9)(j.Z.selectPermissionToCreate),b=function(){u(!1)},C=(e.form,(0,r.Z)(e,g));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,(0,i.Z)((0,i.Z)({},C),{},{fetchFn:function(e,n){return o.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return(e.nameFR||e.nameAR)&&(t="".concat(e.nameFR," / ").concat(e.nameAR)),{key:n,label:t}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){u(!0)},inMemoryFilter:!0,hasPermissionToCreate:f})),(0,h.jsx)(p,{visible:c,onCancel:b,onSuccess:function(n){var t=e.name,i=e.mode;m(t,i&&"multiple"===i?[].concat((0,a.Z)(Z()[t]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),b()}})]})}},56207:function(e,n,t){var i=t(1413),r=t(29439),a=t(92350),s=t(12196),l=t(11829),o=t(73591),c=t(68197),u=t(59624),d=t(59420),m=t(96995),Z=t(59491),f=t(43270),h=t(47313),p=t(10499),v=t(68160),x=t(6473),j=t(89994),y=t(67357),g=t(56148),b=t(43657),C=t(75352),R=t(46417),T=o.Z.TabPane,P=x.Ry().shape({nameFR:j.Z.string((0,p.ag)("entities.media.fields.nameFR"),{}),nameEN:j.Z.string((0,p.ag)("entities.media.fields.nameEN"),{}),nameAR:j.Z.string((0,p.ag)("entities.media.fields.nameAR"),{required:!0}),type:j.Z.relationToOne((0,p.ag)("entities.media.fields.type"),{})});n.Z=function(e){var n=(0,h.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR,type:n.type}})),t=(0,r.Z)(n,1)[0],x=(0,f.cI)({resolver:(0,y.X)(P),mode:"all",defaultValues:t}),j=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},A=e.saveLoading;return(0,R.jsx)(v.ZP,{children:(0,R.jsx)(f.RV,(0,i.Z)((0,i.Z)({},x),{},{children:(0,R.jsxs)("form",{onSubmit:x.handleSubmit(j),children:[(0,R.jsxs)(c.Z,{gutter:24,children:[(0,R.jsx)(u.Z,{span:16,children:(0,R.jsx)(C.Z,{children:e.title})}),(0,R.jsx)(u.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,R.jsxs)(d.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},v.YT),{},{children:[(0,R.jsx)(m.Z,{title:(0,p.ag)("common.save"),children:(0,R.jsx)(Z.Z,{loading:A,type:"primary",onClick:x.handleSubmit(j),icon:(0,R.jsx)(a.Z,{rev:void 0})})}),(0,R.jsx)(m.Z,{title:(0,p.ag)("common.reset"),children:(0,R.jsx)(Z.Z,{disabled:A,onClick:function(){Object.keys(t).forEach((function(e){x.setValue(e,t[e])}))},icon:(0,R.jsx)(s.Z,{rev:void 0})})}),e.onCancel&&(0,R.jsx)(m.Z,{title:(0,p.ag)("common.cancel"),children:(0,R.jsx)(Z.Z,{disabled:A,onClick:function(){return e.onCancel()},icon:(0,R.jsx)(l.Z,{rev:void 0})})})]}))})]}),(0,R.jsx)(c.Z,{gutter:24,children:(0,R.jsx)(u.Z,{span:24,children:(0,R.jsxs)(o.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,R.jsx)(T,{tab:(0,p.ag)("common.informationsAR"),children:(0,R.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,R.jsx)(g.Z,{name:"nameAR",label:(0,p.ag)("entities.intervention.fields.nameAR"),required:!0,layout:v.I4}),(0,R.jsx)(b.Z,{name:"type",label:(0,p.ag)("entities.media.fields.type"),required:!1,showCreate:!e.modal,layout:v.I4})]})},"1"),(0,R.jsx)(T,{tab:(0,p.ag)("common.informationsFR"),children:(0,R.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,R.jsx)(g.Z,{name:"nameFR",label:(0,p.ag)("entities.intervention.fields.nameFR"),required:!1,layout:v.I4})})},"2"),(0,R.jsx)(T,{tab:(0,p.ag)("common.informationsEN"),children:(0,R.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,R.jsx)(g.Z,{name:"nameEN",label:(0,p.ag)("entities.intervention.fields.nameEN"),required:!1,layout:v.I4})})},"3")]})})})]})}))})}},43657:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(1413),r=t(45987),a=t(93433),s=t(29439),l=t(47313),o=t(5732),c=t(74165),u=t(15861),d=t(48216),m=t(10499),Z=t(80459),f=t(33512),h=t(46417),p=function(e){var n=(0,l.useState)(!1),t=(0,s.Z)(n,2),i=t[0],r=t[1],a=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t,i){var a,s,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,o.Z.create(i);case 4:return a=n.sent,s=a.id,n.next=8,o.Z.find(s);case 8:l=n.sent,e.onSuccess(l),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),f.Z.handle(n.t0);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return e.visible?(0,h.jsx)(d.Z,{style:{top:24},title:(0,m.ag)("entities.typeMedia.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,h.jsx)(Z.Z,{saveLoading:i,onSubmit:a,onCancel:e.onCancel,modal:!0})}):null},v=t(51552),x=t(45788),j=t(91995),y=t(43270),g=["form"],b=function(e){var n=(0,l.useState)(!1),t=(0,s.Z)(n,2),c=t[0],u=t[1],d=(0,y.Gc)(),m=d.setValue,Z=d.getValues,f=(0,x.v9)(j.Z.selectPermissionToCreate),b=function(){u(!1)},C=(e.form,(0,r.Z)(e,g));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,(0,i.Z)((0,i.Z)({},C),{},{fetchFn:function(e,n){return o.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return(e.nameFR||e.nameAR)&&(t="".concat(e.nameFR," / ").concat(e.nameAR)),{key:n,label:t}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){u(!0)},inMemoryFilter:!0,hasPermissionToCreate:f})),(0,h.jsx)(p,{visible:c,onCancel:b,onSuccess:function(n){var t=e.name,i=e.mode;m(t,i&&"multiple"===i?[].concat((0,a.Z)(Z()[t]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),b()}})]})}},80459:function(e,n,t){var i=t(1413),r=t(29439),a=t(92350),s=t(12196),l=t(11829),o=t(68197),c=t(59624),u=t(59420),d=t(96995),m=t(59491),Z=t(43270),f=t(47313),h=t(10499),p=t(68160),v=t(6473),x=t(89994),j=t(67357),y=t(56148),g=t(62053),b=t(75352),C=t(46417),R=v.Ry().shape({nameFR:x.Z.string((0,h.ag)("entities.typeMedia.fields.nameFR"),{}),nameEN:x.Z.string((0,h.ag)("entities.typeMedia.fields.nameEN"),{}),nameAR:x.Z.string((0,h.ag)("entities.typeMedia.fields.nameAR"),{required:!0}),media:x.Z.relationToMany((0,h.ag)("entities.typeMedia.fields.media"),{})});n.Z=function(e){var n=(0,f.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR,media:n.media||[]}})),t=(0,r.Z)(n,1)[0],v=(0,Z.cI)({resolver:(0,j.X)(R),mode:"all",defaultValues:t}),x=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},T=e.saveLoading;return(0,C.jsx)(p.ZP,{children:(0,C.jsx)(Z.RV,(0,i.Z)((0,i.Z)({},v),{},{children:(0,C.jsxs)("form",{onSubmit:v.handleSubmit(x),children:[(0,C.jsxs)(o.Z,{gutter:24,children:[(0,C.jsx)(c.Z,{span:16,children:(0,C.jsx)(b.Z,{children:e.title})}),(0,C.jsx)(c.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,C.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},p.YT),{},{children:[(0,C.jsx)(d.Z,{title:(0,h.ag)("common.save"),children:(0,C.jsx)(m.Z,{loading:T,type:"primary",onClick:v.handleSubmit(x),icon:(0,C.jsx)(a.Z,{rev:void 0})})}),(0,C.jsx)(d.Z,{title:(0,h.ag)("common.reset"),children:(0,C.jsx)(m.Z,{disabled:T,onClick:function(){Object.keys(t).forEach((function(e){v.setValue(e,t[e])}))},icon:(0,C.jsx)(s.Z,{rev:void 0})})}),e.onCancel&&(0,C.jsx)(d.Z,{title:(0,h.ag)("common.cancel"),children:(0,C.jsx)(m.Z,{disabled:T,onClick:function(){return e.onCancel()},icon:(0,C.jsx)(l.Z,{rev:void 0})})})]}))})]}),(0,C.jsx)(o.Z,{gutter:24,children:(0,C.jsx)(c.Z,{span:24,children:(0,C.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,C.jsx)("legend",{children:(0,h.ag)("common.informations")}),(0,C.jsx)(y.Z,{name:"nameAR",label:(0,h.ag)("entities.typeMedia.fields.nameAR"),required:!0,layout:p.I4}),(0,C.jsx)(y.Z,{name:"nameFR",label:(0,h.ag)("entities.typeMedia.fields.nameFR"),required:!1,layout:p.I4,autoFocus:!0}),(0,C.jsx)(y.Z,{name:"nameEN",label:(0,h.ag)("entities.typeMedia.fields.nameEN"),required:!1,layout:p.I4}),(0,C.jsx)(g.Z,{name:"media",label:(0,h.ag)("entities.typeMedia.fields.media"),required:!1,showCreate:!e.modal,layout:p.I4,mode:"multiple"})]})})})]})}))})}}}]);