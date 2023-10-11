"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6646],{48230:function(e,n,t){var i=t(76747),r=t(86495),s=t(26319),a=t(71945),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(a.Z.values.secteurViolenceRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(a.Z.values.secteurViolenceEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(a.Z.values.secteurViolenceCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(a.Z.values.secteurViolenceImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(a.Z.values.secteurViolenceDestroy)})),selectPermissionToImport:u};n.Z=d},59836:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(1413),r=t(45987),s=t(93433),a=t(29439),l=t(47313),o=t(49797),c=t(74165),u=t(15861),d=t(48216),m=t(10499),Z=t(66452),f=t(33512),h=t(46417),p=function(e){var n=(0,l.useState)(!1),t=(0,a.Z)(n,2),i=t[0],r=t[1],s=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t,i){var s,a,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,o.Z.create(i);case 4:return s=n.sent,a=s.id,n.next=8,o.Z.find(a);case 8:l=n.sent,e.onSuccess(l),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),f.Z.handle(n.t0);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return e.visible?(0,h.jsx)(d.Z,{style:{top:24},title:(0,m.ag)("entities.secteurViolence.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,h.jsx)(Z.Z,{saveLoading:i,onSubmit:s,onCancel:e.onCancel,modal:!0})}):null},x=t(51552),v=t(45788),j=t(48230),g=t(43270),b=["form"],y=function(e){var n=(0,l.useState)(!1),t=(0,a.Z)(n,2),c=t[0],u=t[1],d=(0,g.Gc)(),m=d.setValue,Z=d.getValues,f=(0,v.v9)(j.Z.selectPermissionToCreate),y=function(){u(!1)},R=(e.form,(0,r.Z)(e,b));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,(0,i.Z)((0,i.Z)({},R),{},{fetchFn:function(e,n){return o.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return(e.nameFR||e.nameAR)&&(t="".concat(e.nameFR," / ").concat(e.nameAR)),{key:n,label:t}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){u(!0)},inMemoryFilter:!0,hasPermissionToCreate:f})),(0,h.jsx)(p,{visible:c,onCancel:y,onSuccess:function(n){var t=e.name,i=e.mode;m(t,i&&"multiple"===i?[].concat((0,s.Z)(Z()[t]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),y()}})]})}},66452:function(e,n,t){var i=t(1413),r=t(29439),s=t(92350),a=t(12196),l=t(11829),o=t(73591),c=t(68197),u=t(59624),d=t(59420),m=t(96995),Z=t(59491),f=t(43270),h=t(47313),p=t(10499),x=t(68160),v=t(6473),j=t(89994),g=t(67357),b=t(56148),y=t(40847),R=t(75352),C=t(46417),V=o.Z.TabPane,F=v.Ry().shape({nameFR:j.Z.string((0,p.ag)("entities.secteurViolence.fields.nameFR"),{}),nameEN:j.Z.string((0,p.ag)("entities.secteurViolence.fields.nameEN"),{}),nameAR:j.Z.string((0,p.ag)("entities.secteurViolence.fields.nameAR"),{required:!0}),type:j.Z.relationToMany((0,p.ag)("entities.secteurViolence.fields.type"),{})});n.Z=function(e){var n=(0,h.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR,type:n.type||[]}})),t=(0,r.Z)(n,1)[0],v=(0,f.cI)({resolver:(0,g.X)(F),mode:"all",defaultValues:t}),j=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},A=e.saveLoading;return(0,C.jsx)(x.ZP,{children:(0,C.jsx)(f.RV,(0,i.Z)((0,i.Z)({},v),{},{children:(0,C.jsxs)("form",{onSubmit:v.handleSubmit(j),children:[(0,C.jsxs)(c.Z,{gutter:24,children:[(0,C.jsx)(u.Z,{span:16,children:(0,C.jsx)(R.Z,{children:e.title})}),(0,C.jsx)(u.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,C.jsxs)(d.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},x.YT),{},{children:[(0,C.jsx)(m.Z,{title:(0,p.ag)("common.save"),children:(0,C.jsx)(Z.Z,{loading:A,type:"primary",onClick:v.handleSubmit(j),icon:(0,C.jsx)(s.Z,{rev:void 0})})}),(0,C.jsx)(m.Z,{title:(0,p.ag)("common.reset"),children:(0,C.jsx)(Z.Z,{disabled:A,onClick:function(){Object.keys(t).forEach((function(e){v.setValue(e,t[e])}))},icon:(0,C.jsx)(a.Z,{rev:void 0})})}),e.onCancel&&(0,C.jsx)(m.Z,{title:(0,p.ag)("common.cancel"),children:(0,C.jsx)(Z.Z,{disabled:A,onClick:function(){return e.onCancel()},icon:(0,C.jsx)(l.Z,{rev:void 0})})})]}))})]}),(0,C.jsx)(c.Z,{gutter:24,children:(0,C.jsx)(u.Z,{span:24,children:(0,C.jsxs)(o.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,C.jsx)(V,{tab:(0,p.ag)("common.informationsAR"),children:(0,C.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,C.jsx)(b.Z,{name:"nameAR",label:(0,p.ag)("entities.secteurViolence.fields.nameAR"),required:!0,layout:x.I4}),(0,C.jsx)(y.Z,{name:"type",label:(0,p.ag)("entities.secteurViolence.fields.type"),required:!1,showCreate:!e.modal,layout:x.I4,mode:"multiple"})]})},"1"),(0,C.jsx)(V,{tab:(0,p.ag)("common.informationsFR"),children:(0,C.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,C.jsx)(b.Z,{name:"nameFR",label:(0,p.ag)("entities.secteurViolence.fields.nameFR"),required:!1,layout:x.I4,autoFocus:!0})})},"2"),(0,C.jsx)(V,{tab:(0,p.ag)("common.informationsEN"),children:(0,C.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,C.jsx)(b.Z,{name:"nameEN",label:(0,p.ag)("entities.secteurViolence.fields.nameEN"),required:!1,layout:x.I4})})},"3")]})})})]})}))})}},40847:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(1413),r=t(45987),s=t(93433),a=t(29439),l=t(47313),o=t(39316),c=t(74165),u=t(15861),d=t(48216),m=t(10499),Z=t(42613),f=t(33512),h=t(46417),p=function(e){var n=(0,l.useState)(!1),t=(0,a.Z)(n,2),i=t[0],r=t[1],s=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t,i){var s,a,l;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,o.Z.create(i);case 4:return s=n.sent,a=s.id,n.next=8,o.Z.find(a);case 8:l=n.sent,e.onSuccess(l),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),f.Z.handle(n.t0);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return e.visible?(0,h.jsx)(d.Z,{style:{top:24},title:(0,m.ag)("entities.typeViolence.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,h.jsx)(Z.Z,{saveLoading:i,onSubmit:s,onCancel:e.onCancel,modal:!0})}):null},x=t(51552),v=t(45788),j=t(59637),g=t(43270),b=["form"],y=function(e){var n=(0,l.useState)(!1),t=(0,a.Z)(n,2),c=t[0],u=t[1],d=(0,g.Gc)(),m=d.setValue,Z=d.getValues,f=(0,v.v9)(j.Z.selectPermissionToCreate),y=function(){u(!1)},R=(e.form,(0,r.Z)(e,b));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,(0,i.Z)((0,i.Z)({},R),{},{fetchFn:function(e,n){return o.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return(e.nameFR||e.nameAR)&&(t="".concat(e.nameFR," / ").concat(e.nameAR)),{key:n,label:t}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){u(!0)},inMemoryFilter:!0,hasPermissionToCreate:f})),(0,h.jsx)(p,{visible:c,onCancel:y,onSuccess:function(n){var t=e.name,i=e.mode;m(t,i&&"multiple"===i?[].concat((0,s.Z)(Z()[t]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),y()}})]})}},42613:function(e,n,t){var i=t(1413),r=t(29439),s=t(92350),a=t(12196),l=t(11829),o=t(68197),c=t(59624),u=t(59420),d=t(96995),m=t(59491),Z=t(43270),f=t(47313),h=t(10499),p=t(68160),x=t(6473),v=t(89994),j=t(67357),g=t(56148),b=t(59836),y=t(75352),R=t(46417),C=x.Ry().shape({nameFR:v.Z.string((0,h.ag)("entities.typeViolence.fields.nameFR"),{}),nameEN:v.Z.string((0,h.ag)("entities.typeViolence.fields.nameEN"),{}),nameAR:v.Z.string((0,h.ag)("entities.typeViolence.fields.nameAR"),{required:!0}),secteur:v.Z.relationToOne((0,h.ag)("entities.typeViolence.fields.secteur"),{})});n.Z=function(e){var n=(0,f.useState)((function(){var n=e.record||{};return{nameFR:n.nameFR,nameEN:n.nameEN,nameAR:n.nameAR,secteur:n.secteur}})),t=(0,r.Z)(n,1)[0],x=(0,Z.cI)({resolver:(0,j.X)(C),mode:"all",defaultValues:t}),v=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},V=e.saveLoading;return(0,R.jsx)(p.ZP,{children:(0,R.jsx)(Z.RV,(0,i.Z)((0,i.Z)({},x),{},{children:(0,R.jsxs)("form",{onSubmit:x.handleSubmit(v),children:[(0,R.jsxs)(o.Z,{gutter:24,children:[(0,R.jsx)(c.Z,{span:16,children:(0,R.jsx)(y.Z,{children:e.title})}),(0,R.jsx)(c.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,R.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},p.YT),{},{children:[(0,R.jsx)(d.Z,{title:(0,h.ag)("common.save"),children:(0,R.jsx)(m.Z,{loading:V,type:"primary",onClick:x.handleSubmit(v),icon:(0,R.jsx)(s.Z,{rev:void 0})})}),(0,R.jsx)(d.Z,{title:(0,h.ag)("common.reset"),children:(0,R.jsx)(m.Z,{disabled:V,onClick:function(){Object.keys(t).forEach((function(e){x.setValue(e,t[e])}))},icon:(0,R.jsx)(a.Z,{rev:void 0})})}),e.onCancel&&(0,R.jsx)(d.Z,{title:(0,h.ag)("common.cancel"),children:(0,R.jsx)(m.Z,{disabled:V,onClick:function(){return e.onCancel()},icon:(0,R.jsx)(l.Z,{rev:void 0})})})]}))})]}),(0,R.jsx)(o.Z,{gutter:24,children:(0,R.jsx)(c.Z,{span:24,children:(0,R.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,R.jsx)("legend",{children:(0,h.ag)("common.informations")}),(0,R.jsx)(g.Z,{name:"nameAR",label:(0,h.ag)("entities.typeViolence.fields.nameAR"),required:!0,layout:p.I4}),(0,R.jsx)(g.Z,{name:"nameFR",label:(0,h.ag)("entities.typeViolence.fields.nameFR"),required:!1,layout:p.I4,autoFocus:!0}),(0,R.jsx)(g.Z,{name:"nameEN",label:(0,h.ag)("entities.typeViolence.fields.nameEN"),required:!1,layout:p.I4}),(0,R.jsx)(b.Z,{name:"secteur",label:(0,h.ag)("entities.typeViolence.fields.secteur"),required:!1,showCreate:!e.modal,layout:p.I4})]})})})]})}))})}}}]);