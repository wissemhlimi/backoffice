"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[59],{40496:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(1413),a=n(45987),o=n(93433),r=n(29439),s=n(47313),l=n(14820),c=n(74165),d=n(15861),u=n(48216),m=n(10499),Z=n(8911),v=n(33512),f=n(46417),g=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),i=n[0],a=n[1],o=function(){var t=(0,d.Z)((0,c.Z)().mark((function t(n,i){var o,r,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,l.Z.create(i);case 4:return o=t.sent,r=o.id,t.next=8,l.Z.find(r);case 8:s=t.sent,e.onSuccess(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),v.Z.handle(t.t0);case 15:return t.prev=15,a(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return e.visible?(0,f.jsx)(u.Z,{style:{top:24},title:(0,m.ag)("entities.action.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,f.jsx)(Z.Z,{saveLoading:i,onSubmit:o,onCancel:e.onCancel,modal:!0})}):null},x=n(51552),p=n(45788),h=n(14485),j=n(43270),b=["form"],y=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),c=n[0],d=n[1],u=(0,j.Gc)(),m=u.setValue,Z=u.getValues,v=(0,p.v9)(h.Z.selectPermissionToCreate),y=function(){d(!1)},R=(e.form,(0,a.Z)(e,b));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,(0,i.Z)((0,i.Z)({},R),{},{fetchFn:function(e,t){return l.Z.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return e.type&&(n=e.type),{key:t,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){d(!0)},inMemoryFilter:!0,hasPermissionToCreate:v})),(0,f.jsx)(g,{visible:c,onCancel:y,onSuccess:function(t){var n=e.name,i=e.mode;m(n,i&&"multiple"===i?[].concat((0,o.Z)(Z()[n]||[]),[t]):t,{shouldValidate:!0,shouldDirty:!0}),y()}})]})}},8911:function(e,t,n){n.d(t,{Z:function(){return fe}});var i=n(1413),a=n(29439),o=n(92350),r=n(12196),s=n(11829),l=n(73591),c=n(68197),d=n(59624),u=n(59420),m=n(96995),Z=n(59491),v=n(43270),f=n(47313),g=n(10499),x=n(68160),p=n(6473),h=n(89994),j=n(67357),b=n(21538),y=n(48895),R=n(5544),C=n(78206),q=n(70816),A=n.n(q),F=n(71896),I=n(2178),T=n(90643),S=n(73634),w=n(89627),N=n(37425),E=n(45987),_=n(93433),k=n(27200),D=n(74165),V=n(15861),L=n(48216),M=n(14007),P=n(33512),Y=n(46417),O=function(e){var t=(0,f.useState)(!1),n=(0,a.Z)(t,2),i=n[0],o=n[1],r=function(){var t=(0,V.Z)((0,D.Z)().mark((function t(n,i){var a,r,s;return(0,D.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),t.next=4,k.Z.create(i);case 4:return a=t.sent,r=a.id,t.next=8,k.Z.find(r);case 8:s=t.sent,e.onSuccess(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),P.Z.handle(t.t0);case 15:return t.prev=15,o(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return e.visible?(0,Y.jsx)(L.Z,{style:{top:24},title:(0,g.ag)("entities.intervention.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,Y.jsx)(M.Z,{saveLoading:i,onSubmit:r,onCancel:e.onCancel,modal:!0})}):null},W=n(51552),H=n(45788),K=n(32348),U=["form"],z=function(e){var t=(0,f.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],s=(0,v.Gc)(),l=s.setValue,c=s.getValues,d=(0,H.v9)(K.Z.selectPermissionToCreate),u=function(){r(!1)},m=(e.form,(0,E.Z)(e,U));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(W.Z,(0,i.Z)((0,i.Z)({},m),{},{fetchFn:function(e,t){return k.Z.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return(e.nameFR||e.nameAR)&&(n="".concat(e.nameFR," / ").concat(e.nameAR)),{key:t,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){r(!0)},inMemoryFilter:!0,hasPermissionToCreate:d})),(0,Y.jsx)(O,{visible:o,onCancel:u,onSuccess:function(t){var n=e.name,i=e.mode;l(n,i&&"multiple"===i?[].concat((0,_.Z)(c()[n]||[]),[t]):t,{shouldValidate:!0,shouldDirty:!0}),u()}})]})},G=n(89146),B=n(75352),X=n(30513),J=n(32551),Q=n(90839),$=function(e){var t=(0,f.useState)(!1),n=(0,a.Z)(t,2),i=n[0],o=n[1],r=function(){var t=(0,V.Z)((0,D.Z)().mark((function t(n,i){var a,r,s;return(0,D.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),t.next=4,J.Z.create(i);case 4:return a=t.sent,r=a.id,t.next=8,J.Z.find(r);case 8:s=t.sent,e.onSuccess(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),P.Z.handle(t.t0);case 15:return t.prev=15,o(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return e.visible?(0,Y.jsx)(L.Z,{style:{top:24},title:(0,g.ag)("entities.mouvement.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,Y.jsx)(Q.Z,{saveLoading:i,onSubmit:r,onCancel:e.onCancel,modal:!0})}):null},ee=n(48184),te=["form"],ne=function(e){var t=(0,f.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],s=(0,v.Gc)(),l=s.setValue,c=s.getValues,d=(0,H.v9)(ee.Z.selectPermissionToCreate),u=function(){r(!1)},m=(e.form,(0,E.Z)(e,te));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(W.Z,(0,i.Z)((0,i.Z)({},m),{},{fetchFn:function(e,t){return J.Z.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return(e.titleFR||e.titleAR)&&(n="".concat(e.titleFR," / ").concat(e.titleAR)),{key:t,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){r(!0)},inMemoryFilter:!0,hasPermissionToCreate:d})),(0,Y.jsx)($,{visible:o,onCancel:u,onSuccess:function(t){var n=e.name,i=e.mode;l(n,i&&"multiple"===i?[].concat((0,_.Z)(c()[n]||[]),[t]):t,{shouldValidate:!0,shouldDirty:!0}),u()}})]})},ie=n(81986),ae=n(83337),oe=n(11763),re=n(46053),se=n(88962),le=n(55617),ce=n(162),de=n(86495),ue=n(26319),me=n(71945),Ze=l.Z.TabPane,ve=p.Ry().shape({dateDebut:h.Z.date((0,g.ag)("entities.action.fields.dateDebut"),{required:!0}),dateFin:h.Z.date((0,g.ag)("entities.action.fields.dateFin"),{}),gouvernorats:h.Z.relationToMany((0,g.ag)("entities.gouvernorat.menu"),{required:!0}),delegations:h.Z.relationToMany((0,g.ag)("entities.delegation.menu"),{required:!0}),municipalites:h.Z.relationToMany((0,g.ag)("entities.municipalite.menu"),{}),nbreLieux:h.Z.integer((0,g.ag)("entities.action.fields.nbreLieux"),{required:!0,default:1}),type:h.Z.enumerator((0,g.ag)("entities.action.fields.type"),{options:C.Z.type,required:!0}),genre:h.Z.enumerator((0,g.ag)("entities.action.fields.genre"),{options:C.Z.genre,required:!0}),nbreParticipants:h.Z.integer((0,g.ag)("entities.action.fields.nbreParticipants"),{}),planifie:h.Z.boolean((0,g.ag)("entities.action.fields.planifie"),{}),modeAction:h.Z.relationToOne((0,g.ag)("entities.action.fields.modeAction"),{required:!0}),raison:h.Z.relationToOne((0,g.ag)("entities.action.fields.raison"),{required:!0}),acteur:h.Z.relationToOne((0,g.ag)("entities.action.fields.acteur"),{required:!0}),espace:h.Z.relationToOne((0,g.ag)("entities.action.fields.espace"),{required:!0}),statut:h.Z.enumerator((0,g.ag)("entities.action.fields.statut"),{options:C.Z.statut}),etat:h.Z.enumerator((0,g.ag)("entities.action.fields.statut"),{options:C.Z.etat}),revendication:h.Z.relationToMany((0,g.ag)("entities.action.fields.revendication"),{}),intervention:h.Z.relationToMany((0,g.ag)("entities.action.fields.intervention"),{required:!1}),source:h.Z.relationToMany((0,g.ag)("entities.action.fields.source"),{required:!0}),suicide:h.Z.relationToMany((0,g.ag)("entities.action.fields.suicide"),{}),violence:h.Z.relationToMany((0,g.ag)("entities.action.fields.violence"),{}),observationFR:h.Z.string((0,g.ag)("entities.action.fields.observation"),{}),observationAR:h.Z.string((0,g.ag)("entities.action.fields.observation"),{}),observationEN:h.Z.string((0,g.ag)("entities.action.fields.observation"),{}),mouvement:h.Z.relationToOne((0,g.ag)("entities.action.fields.mouvement"),{required:!0}),coefficient:h.Z.integer((0,g.ag)("entities.action.fields.coefficient"),{})}),fe=function(e){console.table("props",e);var t=(0,f.useState)((function(){var t=e.record||{};return{dateDebut:t.dateDebut?A()(t.dateDebut,"YYYY-MM-DD"):null,dateFin:t.dateFin?A()(t.dateFin,"YYYY-MM-DD"):null,gouvernorats:t.gouvernorats||[],delegations:t.delegations||[],municipalites:t.municipalites||[],nbreLieux:t.nbreLieux?t.nbreLieux:1,type:t.type,statut:t.statut?t.statut:"en_attente",etat:t.etat,genre:t.genre,nbreParticipants:t.nbreParticipants,planifie:t.planifie,modeAction:t.modeAction,raison:t.raison,acteur:t.acteur,espace:t.espace,revendication:t.revendication||[],intervention:t.intervention||[],source:t.source||[],suicide:t.suicide||[],violence:t.violence||[],observationFR:t.observationFR,observationAR:t.observationAR,observationEN:t.observationEN,mouvement:t.mouvement}})),n=(0,a.Z)(t,1)[0],p=(0,H.v9)(de.Z.selectCurrentTenant),h=(0,H.v9)(de.Z.selectCurrentUser),q=new ue.Z(p,h).match(me.Z.values.mouvementDestroy),E=(0,v.cI)({resolver:(0,j.X)(ve),mode:"all",defaultValues:n}),_=function(t){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,t)},k=e.saveLoading;return(0,Y.jsx)(x.ZP,{children:(0,Y.jsx)(v.RV,(0,i.Z)((0,i.Z)({},E),{},{children:(0,Y.jsxs)("form",{onSubmit:E.handleSubmit(_),children:[(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:16,children:(0,Y.jsx)(B.Z,{children:e.title})}),(0,Y.jsx)(d.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,Y.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},x.YT),{},{children:[(0,Y.jsx)(m.Z,{title:(0,g.ag)("common.save"),children:(0,Y.jsx)(Z.Z,{loading:k,type:"primary",onClick:E.handleSubmit(_),icon:(0,Y.jsx)(o.Z,{rev:void 0})})}),(0,Y.jsx)(m.Z,{title:(0,g.ag)("common.reset"),children:(0,Y.jsx)(Z.Z,{disabled:k,onClick:function(){Object.keys(n).forEach((function(e){E.setValue(e,n[e])}))},icon:(0,Y.jsx)(r.Z,{rev:void 0})})}),e.onCancel&&(0,Y.jsx)(m.Z,{title:(0,g.ag)("common.cancel"),children:(0,Y.jsx)(Z.Z,{disabled:k,onClick:function(){return e.onCancel()},icon:(0,Y.jsx)(s.Z,{rev:void 0})})})]}))})]}),(0,Y.jsx)(c.Z,{gutter:24,children:(0,Y.jsx)(d.Z,{span:24,children:(0,Y.jsxs)(l.Z,{defaultActiveKey:"0",onChange:function(e){},children:[(0,Y.jsx)(Ze,{tab:(0,g.ag)("common.informations"),children:(0,Y.jsxs)("fieldset",{style:{borderTopWidth:0},children:[e.mouvement?(0,Y.jsx)("div",{style:{display:"none"},children:(0,Y.jsx)(ne,{name:"mouvement",label:(0,g.ag)("entities.action.fields.mouvement"),required:!0,showCreate:!e.modal,layout:x.I4})}):(0,Y.jsx)(ne,{name:"mouvement",label:(0,g.ag)("entities.action.fields.mouvement"),required:!0,showCreate:!e.modal,layout:x.I4}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(F.Z,{name:"dateDebut",label:(0,g.ag)("entities.action.fields.dateDebut"),required:!0,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(F.Z,{name:"dateFin",label:(0,g.ag)("entities.action.fields.dateFin"),required:!1,layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(se.Z,{name:"gouvernorats",label:(0,g.ag)("entities.gouvernorat.menu"),required:!0,layout:x.I4,mode:"multiple"})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(b.Z,{name:"nbreLieux",label:(0,g.ag)("entities.action.fields.nbreLieux"),required:!0,layout:x.I4,defaultValue:1})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(le.Z,{name:"delegations",label:(0,g.ag)("entities.delegation.menu"),required:!0,layout:x.I4,mode:"multiple"})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(ce.Z,{name:"municipalites",label:(0,g.ag)("entities.municipalite.menu"),required:!1,layout:x.I4,mode:"multiple"})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(R.Z,{name:"type",label:(0,g.ag)("entities.action.fields.type"),options:C.Z.type.map((function(e){return{value:e,label:(0,g.ag)("entities.action.enumerators.type.".concat(e))}})),required:!0,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(R.Z,{name:"genre",label:(0,g.ag)("entities.action.fields.genre"),options:C.Z.genre.map((function(e){return{value:e,label:(0,g.ag)("entities.action.enumerators.genre.".concat(e))}})),required:!0,layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(b.Z,{name:"nbreParticipants",label:(0,g.ag)("entities.action.fields.nbreParticipants"),required:!1,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(y.Z,{name:"planifie",label:(0,g.ag)("entities.action.fields.planifie"),layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(I.Z,{name:"modeAction",label:(0,g.ag)("entities.action.fields.modeAction"),required:!0,showCreate:!e.modal,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(T.Z,{name:"raison",label:(0,g.ag)("entities.action.fields.raison"),required:!0,showCreate:!e.modal,layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(S.Z,{name:"acteur",label:(0,g.ag)("entities.action.fields.acteur"),required:!0,showCreate:!e.modal,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(w.Z,{name:"espace",label:(0,g.ag)("entities.action.fields.espace"),required:!0,showCreate:!e.modal,layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(N.Z,{name:"revendication",label:(0,g.ag)("entities.action.fields.revendication"),required:!1,showCreate:!e.modal,layout:x.I4,mode:"multiple"})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(z,{name:"intervention",label:(0,g.ag)("entities.action.fields.intervention"),required:!1,showCreate:!e.modal,layout:x.I4,mode:"multiple"})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(G.Z,{name:"source",label:(0,g.ag)("entities.action.fields.source"),required:!0,showCreate:!e.modal,layout:x.I4,mode:"multiple"})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(R.Z,{name:"etat",label:(0,g.ag)("entities.action.fields.etat"),options:C.Z.etat.map((function(e){return{value:e,label:(0,g.ag)("entities.action.enumerators.etat.".concat(e))}})),required:!1,layout:x.I4})})]}),(0,Y.jsxs)(c.Z,{gutter:24,children:[(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)(X.Z,{name:"observationAR",label:(0,g.ag)("entities.action.fields.observation"),required:!1,layout:x.I4})}),(0,Y.jsx)(d.Z,{span:12,children:(0,Y.jsx)("div",{style:{display:q?"block":"none"},children:(0,Y.jsx)(R.Z,{name:"statut",label:(0,g.ag)("entities.mouvement.fields.statut"),options:C.Z.statut.map((function(e){return{value:e,label:(0,g.ag)("entities.action.enumerators.statut.".concat(e))}})),required:!1,layout:x.I4})})})]}),(0,Y.jsx)("div",{style:{display:"none"},children:(0,Y.jsx)(b.Z,{name:"coefficient",label:(0,g.ag)("entities.action.fields.coefficient"),required:!1,layout:x.I4})})]})},"0"),(0,Y.jsx)(Ze,{tab:(0,g.ag)("common.informationsFR"),children:(0,Y.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,Y.jsx)(X.Z,{name:"observationFR",label:(0,g.ag)("entities.action.fields.observation"),required:!1,layout:x.I4})})},"2"),(0,Y.jsx)(Ze,{tab:(0,g.ag)("common.informationsEN"),children:(0,Y.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,Y.jsx)(X.Z,{name:"observationEN",label:(0,g.ag)("entities.action.fields.observation"),required:!1,layout:x.I4})})},"3"),e.isEditing?(0,Y.jsxs)(Ze,{tab:(0,g.ag)("entities.suicide.menu"),children:[(0,Y.jsxs)(c.Z,{children:[(0,Y.jsx)(d.Z,{span:16}),(0,Y.jsx)(d.Z,{span:8,style:{textAlign:"end"},children:(0,Y.jsx)(ae.Z,{action:e.record.id})})]}),(0,Y.jsx)(ie.Z,{data:e.record.suicide})]},"4"):null,e.isEditing?(0,Y.jsxs)(Ze,{tab:(0,g.ag)("entities.violence.menu"),children:[(0,Y.jsxs)(c.Z,{children:[(0,Y.jsx)(d.Z,{span:16}),(0,Y.jsx)(d.Z,{span:8,style:{textAlign:"end"},children:(0,Y.jsx)(re.Z,{action:e.record.id})})]}),(0,Y.jsx)(oe.Z,{data:e.record.violence})]},"5"):null]})})})]})}))})}},14007:function(e,t,n){var i=n(1413),a=n(29439),o=n(92350),r=n(12196),s=n(11829),l=n(73591),c=n(68197),d=n(59624),u=n(59420),m=n(96995),Z=n(59491),v=n(43270),f=n(47313),g=n(10499),x=n(68160),p=n(6473),h=n(89994),j=n(67357),b=n(56148),y=n(860),R=n(61356),C=n(75352),q=n(46417),A=l.Z.TabPane,F=p.Ry().shape({nameFR:h.Z.string((0,g.ag)("entities.intervention.fields.nameFR"),{}),nameEN:h.Z.string((0,g.ag)("entities.intervention.fields.nameEN"),{}),nameAR:h.Z.string((0,g.ag)("entities.intervention.fields.nameAR"),{required:!0}),type:h.Z.relationToOne((0,g.ag)("entities.intervention.fields.type"),{}),reaction:h.Z.relationToOne((0,g.ag)("entities.intervention.fields.reaction"),{})});t.Z=function(e){var t=(0,f.useState)((function(){var t=e.record||{};return{nameFR:t.nameFR,nameEN:t.nameEN,nameAR:t.nameAR,type:t.type,reaction:t.reaction}})),n=(0,a.Z)(t,1)[0],p=(0,v.cI)({resolver:(0,j.X)(F),mode:"all",defaultValues:n}),h=function(t){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,t)},I=e.saveLoading;return(0,q.jsx)(x.ZP,{children:(0,q.jsx)(v.RV,(0,i.Z)((0,i.Z)({},p),{},{children:(0,q.jsxs)("form",{onSubmit:p.handleSubmit(h),children:[(0,q.jsxs)(c.Z,{gutter:24,children:[(0,q.jsx)(d.Z,{span:16,children:(0,q.jsx)(C.Z,{children:e.title})}),(0,q.jsx)(d.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,q.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},x.YT),{},{children:[(0,q.jsx)(m.Z,{title:(0,g.ag)("common.save"),children:(0,q.jsx)(Z.Z,{loading:I,type:"primary",onClick:p.handleSubmit(h),icon:(0,q.jsx)(o.Z,{rev:void 0})})}),(0,q.jsx)(m.Z,{title:(0,g.ag)("common.reset"),children:(0,q.jsx)(Z.Z,{disabled:I,onClick:function(){Object.keys(n).forEach((function(e){p.setValue(e,n[e])}))},icon:(0,q.jsx)(r.Z,{rev:void 0})})}),e.onCancel&&(0,q.jsx)(m.Z,{title:(0,g.ag)("common.cancel"),children:(0,q.jsx)(Z.Z,{disabled:I,onClick:function(){return e.onCancel()},icon:(0,q.jsx)(s.Z,{rev:void 0})})})]}))})]}),(0,q.jsx)(c.Z,{gutter:24,children:(0,q.jsx)(d.Z,{span:24,children:(0,q.jsxs)(l.Z,{defaultActiveKey:"0",onChange:function(e){},children:[(0,q.jsx)(A,{tab:(0,g.ag)("common.informations"),children:(0,q.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,q.jsx)(y.Z,{name:"type",label:(0,g.ag)("entities.intervention.fields.type"),required:!1,showCreate:!e.modal,layout:x.I4}),(0,q.jsx)(R.Z,{name:"reaction",label:(0,g.ag)("entities.intervention.fields.reaction"),required:!1,showCreate:!e.modal,layout:x.I4})]})},"0"),(0,q.jsx)(A,{tab:(0,g.ag)("common.informationsAR"),children:(0,q.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,q.jsx)(b.Z,{name:"nameAR",label:(0,g.ag)("entities.intervention.fields.nameAR"),required:!0,layout:x.I4})})},"1"),(0,q.jsx)(A,{tab:(0,g.ag)("common.informationsFR"),children:(0,q.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,q.jsx)(b.Z,{name:"nameFR",label:(0,g.ag)("entities.intervention.fields.nameFR"),required:!1,layout:x.I4})})},"2"),(0,q.jsx)(A,{tab:(0,g.ag)("common.informationsEN"),children:(0,q.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,q.jsx)(b.Z,{name:"nameEN",label:(0,g.ag)("entities.intervention.fields.nameEN"),required:!1,layout:x.I4})})},"3")]})})})]})}))})}},90839:function(e,t,n){var i=n(1413),a=n(29439),o=n(92350),r=n(12196),s=n(11829),l=n(73591),c=n(68197),d=n(59624),u=n(59420),m=n(96995),Z=n(59491),v=n(43270),f=n(47313),g=n(10499),x=n(68160),p=n(6473),h=n(89994),j=n(67357),b=n(56148),y=n(30513),R=n(5544),C=n(94726),q=n(70816),A=n.n(q),F=n(71896),I=n(90643),T=n(40496),S=n(75352),w=n(44195),N=n(16634),E=n(37425),_=n(21538),k=n(86495),D=n(26319),V=n(45788),L=n(71945),M=n(46417),P=l.Z.TabPane,Y=p.Ry().shape({dateDebut:h.Z.date((0,g.ag)("entities.mouvement.fields.dateDebut"),{}),dateFin:h.Z.date((0,g.ag)("entities.mouvement.fields.dateFin"),{}),statut:h.Z.enumerator((0,g.ag)("entities.mouvement.fields.statut"),{options:C.Z.statut}),etat:h.Z.enumerator((0,g.ag)("entities.action.fields.statut"),{options:C.Z.etat}),raison:h.Z.relationToOne((0,g.ag)("entities.mouvement.fields.raison"),{}),titleFR:h.Z.string((0,g.ag)("entities.mouvement.fields.titleFR"),{}),titleEN:h.Z.string((0,g.ag)("entities.mouvement.fields.titleEN"),{}),titleAR:h.Z.string((0,g.ag)("entities.mouvement.fields.titleAR"),{required:!0}),observationFR:h.Z.string((0,g.ag)("entities.mouvement.fields.observationFR"),{}),observationEN:h.Z.string((0,g.ag)("entities.mouvement.fields.observationEN"),{}),observationAR:h.Z.string((0,g.ag)("entities.mouvement.fields.observationAR"),{}),actions:h.Z.relationToMany((0,g.ag)("entities.mouvement.fields.actions"),{}),revendication:h.Z.relationToMany((0,g.ag)("entities.action.fields.revendication"),{}),coefficient:h.Z.integer((0,g.ag)("entities.action.fields.coefficient"),{})});t.Z=function(e){var t=(0,f.useState)((function(){var t=e.record||{};return{dateDebut:t.dateDebut?A()(t.dateDebut,"YYYY-MM-DD"):null,dateFin:t.dateFin?A()(t.dateFin,"YYYY-MM-DD"):null,statut:t.statut?t.statut:"en_attente",etat:t.etat,raison:t.raison,titleFR:t.titleFR,titleEN:t.titleEN,titleAR:t.titleAR,observationFR:t.observationFR,observationEN:t.observationEN,observationAR:t.observationAR,actions:t.actions||[],revendication:t.revendication||[]}})),n=(0,a.Z)(t,1)[0],p=(0,V.v9)(k.Z.selectCurrentTenant),h=(0,V.v9)(k.Z.selectCurrentUser),q=new D.Z(p,h).match(L.Z.values.mouvementDestroy),O=(0,v.cI)({resolver:(0,j.X)(Y),mode:"all",defaultValues:n}),W=function(t){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,t)},H=e.saveLoading;return(0,M.jsx)(x.ZP,{children:(0,M.jsx)(v.RV,(0,i.Z)((0,i.Z)({},O),{},{children:(0,M.jsxs)("form",{onSubmit:O.handleSubmit(W),children:[(0,M.jsxs)(c.Z,{gutter:24,children:[(0,M.jsx)(d.Z,{span:16,children:(0,M.jsx)(S.Z,{children:e.title})}),(0,M.jsx)(d.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,M.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},x.YT),{},{children:[(0,M.jsx)(m.Z,{title:(0,g.ag)("common.save"),children:(0,M.jsx)(Z.Z,{loading:H,type:"primary",onClick:O.handleSubmit(W),icon:(0,M.jsx)(o.Z,{rev:void 0})})}),(0,M.jsx)(m.Z,{title:(0,g.ag)("common.reset"),children:(0,M.jsx)(Z.Z,{disabled:H,onClick:function(){Object.keys(n).forEach((function(e){O.setValue(e,n[e])}))},icon:(0,M.jsx)(r.Z,{rev:void 0})})}),e.onCancel&&(0,M.jsx)(m.Z,{title:(0,g.ag)("common.cancel"),children:(0,M.jsx)(Z.Z,{disabled:H,onClick:function(){return e.onCancel()},icon:(0,M.jsx)(s.Z,{rev:void 0})})})]}))})]}),(0,M.jsx)(c.Z,{gutter:24,children:(0,M.jsx)(d.Z,{span:24,children:(0,M.jsxs)(l.Z,{defaultActiveKey:"0",onChange:function(e){},children:[(0,M.jsx)(P,{tab:(0,g.ag)("common.informations"),children:(0,M.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,M.jsx)(b.Z,{name:"titleAR",label:(0,g.ag)("entities.mouvement.fields.titleAR"),required:!0,layout:x.I4}),(0,M.jsx)(F.Z,{name:"dateDebut",label:(0,g.ag)("entities.mouvement.fields.dateDebut"),required:!1,layout:x.I4}),(0,M.jsx)(F.Z,{name:"dateFin",label:(0,g.ag)("entities.mouvement.fields.dateFin"),required:!1,layout:x.I4}),(0,M.jsx)("div",{style:{display:q?"block":"none"},children:(0,M.jsx)(R.Z,{name:"statut",label:(0,g.ag)("entities.mouvement.fields.statut"),options:C.Z.statut.map((function(e){return{value:e,label:(0,g.ag)("entities.mouvement.enumerators.statut.".concat(e))}})),required:!1,layout:x.I4})}),(0,M.jsx)(R.Z,{name:"etat",label:(0,g.ag)("entities.action.fields.etat"),options:C.Z.etat.map((function(e){return{value:e,label:(0,g.ag)("entities.action.enumerators.etat.".concat(e))}})),required:!1,layout:x.I4}),(0,M.jsx)(I.Z,{name:"raison",label:(0,g.ag)("entities.mouvement.fields.raison"),required:!1,showCreate:!e.modal,layout:x.I4}),(0,M.jsx)(E.Z,{name:"revendication",label:(0,g.ag)("entities.action.fields.revendication"),required:!1,showCreate:!e.modal,layout:x.I4,mode:"multiple"}),(0,M.jsx)("div",{style:{display:"none"},children:(0,M.jsx)(T.Z,{name:"actions",label:(0,g.ag)("entities.action.menu"),required:!1,showCreate:!e.modal,layout:x.I4,mode:"multiple"})}),(0,M.jsx)("div",{style:{display:"none"},children:(0,M.jsx)(_.Z,{name:"coefficient",label:(0,g.ag)("entities.action.fields.coefficient"),required:!1,layout:x.I4})}),(0,M.jsx)(y.Z,{name:"observationAR",label:(0,g.ag)("entities.mouvement.fields.observationAR"),required:!1,layout:x.I4})]})},"0"),(0,M.jsx)(P,{tab:(0,g.ag)("common.informationsFR"),children:(0,M.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,M.jsx)(b.Z,{name:"titleFR",label:(0,g.ag)("entities.mouvement.fields.titleFR"),required:!1,layout:x.I4}),(0,M.jsx)(y.Z,{name:"observationFR",label:(0,g.ag)("entities.mouvement.fields.observationFR"),required:!1,layout:x.I4})]})},"2"),(0,M.jsx)(P,{tab:(0,g.ag)("common.informationsEN"),children:(0,M.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,M.jsx)(b.Z,{name:"titleEN",label:(0,g.ag)("entities.mouvement.fields.titleEN"),required:!1,layout:x.I4}),(0,M.jsx)(y.Z,{name:"observationEN",label:(0,g.ag)("entities.mouvement.fields.observationEN"),required:!1,layout:x.I4})]})},"3"),e.isEditing?(0,M.jsxs)(P,{tab:(0,g.ag)("entities.action.menu"),children:[(0,M.jsxs)(c.Z,{children:[(0,M.jsx)(d.Z,{span:16,children:(0,M.jsx)(S.Z,{})}),(0,M.jsxs)(d.Z,{span:8,style:{textAlign:"end"},children:[" ",(0,M.jsx)(N.Z,{mouvement:e.record.id})]})]}),(0,M.jsx)(w.Z,{data:e.record.actions})]},"4"):null]})})})]})}))})}},37425:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(1413),a=n(45987),o=n(93433),r=n(29439),s=n(47313),l=n(62608),c=n(74165),d=n(15861),u=n(48216),m=n(10499),Z=n(83577),v=n(33512),f=n(46417),g=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),i=n[0],a=n[1],o=function(){var t=(0,d.Z)((0,c.Z)().mark((function t(n,i){var o,r,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,l.Z.create(i);case 4:return o=t.sent,r=o.id,t.next=8,l.Z.find(r);case 8:s=t.sent,e.onSuccess(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),v.Z.handle(t.t0);case 15:return t.prev=15,a(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return e.visible?(0,f.jsx)(u.Z,{style:{top:24},title:(0,m.ag)("entities.revendication.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,f.jsx)(Z.Z,{saveLoading:i,onSubmit:o,onCancel:e.onCancel,modal:!0})}):null},x=n(51552),p=n(45788),h=n(30252),j=n(43270),b=["form"],y=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),c=n[0],d=n[1],u=(0,j.Gc)(),m=u.setValue,Z=u.getValues,v=(0,p.v9)(h.Z.selectPermissionToCreate),y=function(){d(!1)},R=(e.form,(0,a.Z)(e,b));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,(0,i.Z)((0,i.Z)({},R),{},{fetchFn:function(e,t){return l.Z.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return e.revendicationAR&&(n=e.revendicationAR),(e.revendicationFR||e.revendicationAR)&&(n="".concat(e.revendicationFR," / ").concat(e.revendicationAR)),{key:t,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){d(!0)},inMemoryFilter:!0,hasPermissionToCreate:v})),(0,f.jsx)(g,{visible:c,onCancel:y,onSuccess:function(t){var n=e.name,i=e.mode;m(n,i&&"multiple"===i?[].concat((0,o.Z)(Z()[n]||[]),[t]):t,{shouldValidate:!0,shouldDirty:!0}),y()}})]})}},83577:function(e,t,n){n.d(t,{Z:function(){return T}});var i=n(1413),a=n(29439),o=n(92350),r=n(12196),s=n(11829),l=n(73591),c=n(68197),d=n(59624),u=n(59420),m=n(96995),Z=n(59491),v=n(43270),f=n(47313),g=n(10499),x=n(68160),p=n(6473),h=n(89994),j=n(67357),b=n(56148),y=n(48895),R=n(75352),C={cible:["government","central_authority","presidency_Republic","government_presidency","regional_authorities","employer","security_authorities","judicial_authorities","regional_director","governors","delegators","mayors","onas","private_rganizations","government_agencies","national_offices","steg","sonede","hospitals","municipal_services","educational_institutions","educational_institutions","parliament","ministry_of_education","regional_commission_for_youth_and_sports","ministry_ofagriculture_fisheries_and_water_resources","regional_transport_company","ministry_of_health","cpg","ministry_of_the_interior","Ministry_of_tourism_and_crafts","other"],secteur:["public_sector","private_sector","transport","agricultural","access_to_water","sport","religious","legal","security","health","environmental","educative"],typologie:["politics","private_institutional","administrative","infrastructural","economic","social"]},q=n(5544),A=n(46417),F=l.Z.TabPane,I=p.Ry().shape({accordsNonApplique:h.Z.boolean((0,g.ag)("entities.revendication.fields.accordsNonApplique"),{}),promessesNonRetenues:h.Z.boolean((0,g.ag)("entities.revendication.fields.promessesNonRetenues"),{}),cible:h.Z.enumerator((0,g.ag)("entities.revendication.fields.cible"),{options:C.cible}),typologie:h.Z.enumerator((0,g.ag)("entities.revendication.fields.typologie"),{options:C.typologie}),secteur:h.Z.enumerator((0,g.ag)("entities.revendication.fields.secteur"),{options:C.secteur}),revendicationAR:h.Z.string((0,g.ag)("entities.revendication.fields.revendication"),{required:!0}),revendicationFR:h.Z.string((0,g.ag)("entities.revendication.fields.revendication"),{}),revendicationEN:h.Z.string((0,g.ag)("entities.revendication.fields.revendication"),{})}),T=function(e){var t=(0,f.useState)((function(){var t=e.record||{};return{accordsNonApplique:t.accordsNonApplique,promessesNonRetenues:t.promessesNonRetenues,cible:t.cible,typologie:t.typologie,secteur:t.secteur,revendicationAR:t.revendicationAR,revendicationFR:t.revendicationFR,revendicationEN:t.revendicationEN}})),n=(0,a.Z)(t,1)[0],p=(0,v.cI)({resolver:(0,j.X)(I),mode:"all",defaultValues:n}),h=function(t){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,t)},T=e.saveLoading;return(0,A.jsx)(x.ZP,{children:(0,A.jsx)(v.RV,(0,i.Z)((0,i.Z)({},p),{},{children:(0,A.jsxs)("form",{onSubmit:p.handleSubmit(h),children:[(0,A.jsxs)(c.Z,{gutter:24,children:[(0,A.jsx)(d.Z,{span:16,children:(0,A.jsx)(R.Z,{children:e.title})}),(0,A.jsx)(d.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,A.jsxs)(u.Z.Item,(0,i.Z)((0,i.Z)({className:"form-buttons"},x.YT),{},{children:[(0,A.jsx)(m.Z,{title:(0,g.ag)("common.save"),children:(0,A.jsx)(Z.Z,{loading:T,type:"primary",onClick:p.handleSubmit(h),icon:(0,A.jsx)(o.Z,{rev:void 0})})}),(0,A.jsx)(m.Z,{title:(0,g.ag)("common.reset"),children:(0,A.jsx)(Z.Z,{disabled:T,onClick:function(){Object.keys(n).forEach((function(e){p.setValue(e,n[e])}))},icon:(0,A.jsx)(r.Z,{rev:void 0})})}),e.onCancel&&(0,A.jsx)(m.Z,{title:(0,g.ag)("common.cancel"),children:(0,A.jsx)(Z.Z,{disabled:T,onClick:function(){return e.onCancel()},icon:(0,A.jsx)(s.Z,{rev:void 0})})})]}))})]}),(0,A.jsx)(c.Z,{gutter:24,children:(0,A.jsx)(d.Z,{span:24,children:(0,A.jsxs)(l.Z,{defaultActiveKey:"0",onChange:function(e){},children:[(0,A.jsx)(F,{tab:(0,g.ag)("common.informations"),children:(0,A.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,A.jsx)(y.Z,{name:"accordsNonApplique",label:(0,g.ag)("entities.revendication.fields.accordsNonApplique"),layout:x.I4}),(0,A.jsx)(y.Z,{name:"promessesNonRetenues",label:(0,g.ag)("entities.revendication.fields.promessesNonRetenues"),layout:x.I4}),(0,A.jsx)(q.Z,{name:"cible",label:(0,g.ag)("entities.revendication.fields.cible"),options:C.cible.map((function(e){return{value:e,label:(0,g.ag)("entities.revendication.enumerators.cible.".concat(e))}})),required:!1,layout:x.I4}),(0,A.jsx)(q.Z,{name:"typologie",label:(0,g.ag)("entities.revendication.fields.typologie"),options:C.typologie.map((function(e){return{value:e,label:(0,g.ag)("entities.revendication.enumerators.typologie.".concat(e))}})),required:!1,layout:x.I4}),(0,A.jsx)(q.Z,{name:"secteur",label:(0,g.ag)("entities.revendication.fields.secteur"),options:C.secteur.map((function(e){return{value:e,label:(0,g.ag)("entities.revendication.enumerators.secteur.".concat(e))}})),required:!1,layout:x.I4}),(0,A.jsx)(b.Z,{name:"revendicationAR",label:(0,g.ag)("entities.revendication.fields.revendication"),required:!0,layout:x.I4})]})},"0"),(0,A.jsx)(F,{tab:(0,g.ag)("common.informationsFR"),children:(0,A.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,A.jsx)(b.Z,{name:"revendicationFR",label:(0,g.ag)("entities.revendication.fields.revendication"),required:!1,layout:x.I4})})},"2"),(0,A.jsx)(F,{tab:(0,g.ag)("common.informationsEN"),children:(0,A.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,A.jsx)(b.Z,{name:"revendicationEN",label:(0,g.ag)("entities.revendication.fields.revendication"),required:!1,layout:x.I4})})},"3")]})})})]})}))})}},30513:function(e,t,n){var i=n(1413),a=n(59420),o=n(46937),r=n(43270),s=n(47313),l=n(49384),c=n(46417),d=function(e){var t=e.label,n=e.name,d=e.hint,u=e.layout,m=e.placeholder,Z=e.autoFocus,v=e.autoComplete,f=e.prefix,g=e.required,x=e.rows,p=e.externalErrorMessage,h=e.maxLength,j=(0,r.Gc)(),b=j.register,y=j.errors,R=j.formState,C=R.touched,q=R.isSubmitted,A=j.setValue,F=j.watch,I=l.Z.errorMessage(n,y,C,q,p),T=F(n);return(0,s.useEffect)((function(){b({name:n})}),[b,n]),(0,c.jsx)(a.Z.Item,(0,i.Z)((0,i.Z)({},u),{},{label:t,required:g,validateStatus:I?"error":"success",help:I||d,children:(0,c.jsx)(o.Z.TextArea,{id:n,onChange:function(t){A(n,t.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},maxLength:h,value:T,placeholder:m||void 0,autoFocus:Z||!1,autoComplete:v||void 0,prefix:f||void 0,rows:x,style:{width:"100%"}})}))};d.defaultProps={layout:null,required:!1,rows:4},t.Z=d},83337:function(e,t,n){n(47313);var i=n(10419),a=n(46937),o=n(59491),r=n(96995),s=n(4927),l=n(45788),c=n(55471),d=n(73677),u=n(23516),m=n(84799),Z=n(79986),v=n(28303),f=n(10499),g=n(97731),x=n(24924),p=n(17551),h=n(46417),j=a.Z.Search;t.Z=function(e){var t=(0,l.I0)(),n=(0,l.v9)(d.Z.selectSelectedKeys),a=(0,l.v9)(d.Z.selectLoading),b=(0,l.v9)(g.Z.selectLoading),y=(0,l.v9)(d.Z.selectExportLoading),R=(0,l.v9)(d.Z.selectHasRows),C=(0,l.v9)(u.Z.selectPermissionToRead),q=(0,l.v9)(c.Z.selectPermissionToDestroy),A=(0,l.v9)(c.Z.selectPermissionToCreate),F=((0,l.v9)(c.Z.selectPermissionToImport),function(){t(m.Z.doExport())});return(0,h.jsxs)(i.Z,{children:[A&&(0,h.jsx)(v.rU,{to:{pathname:"/suicide/new",action:e.action},children:(0,h.jsx)(r.Z,{title:(0,f.ag)("common.new"),children:(0,h.jsx)(o.Z,{type:"primary",children:(0,h.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!q)return null;var e=!n.length||a,i=(0,h.jsx)(o.Z,{disabled:e,loading:b,type:"primary",children:(0,h.jsx)("i",{className:"fa-regular fa-trash-can"})}),l=(0,h.jsx)(s.Z,{title:(0,f.ag)("common.areYouSure"),onConfirm:function(){t(Z.Z.doDestroyAll(n))},okText:(0,f.ag)("common.yes"),cancelText:(0,f.ag)("common.no"),children:i});return e?(0,h.jsx)(r.Z,{title:(0,f.ag)("common.mustSelectARow"),children:i}):l}(),C&&(0,h.jsx)(v.rU,{to:"/audit-logs?entityNames=suicide",children:(0,h.jsx)(r.Z,{title:(0,f.ag)("auditLog.menu"),children:(0,h.jsx)(o.Z,{icon:(0,h.jsx)(p.Z,{rev:void 0})})})}),function(){var e=!R||a,t=(0,h.jsx)(o.Z,{disabled:e,icon:(0,h.jsx)(x.Z,{rev:void 0}),onClick:F,loading:y,children:(0,f.ag)("common.export")});return e?(0,h.jsx)(r.Z,{title:(0,f.ag)("common.noDataToExport"),children:t}):t}(),(0,h.jsx)(j,{placeholder:(0,f.ag)("common.search"),onSearch:function(e){t(m.Z.doSearch(e))},style:{width:"auto"}})]})}},46053:function(e,t,n){n(47313);var i=n(10419),a=n(46937),o=n(59491),r=n(96995),s=n(4927),l=n(45788),c=n(86593),d=n(49324),u=n(23516),m=n(13142),Z=n(27780),v=n(28303),f=n(10499),g=n(53872),x=n(24924),p=n(17551),h=n(46417),j=a.Z.Search;t.Z=function(e){var t=(0,l.I0)(),n=(0,l.v9)(d.Z.selectSelectedKeys),a=(0,l.v9)(d.Z.selectLoading),b=(0,l.v9)(g.Z.selectLoading),y=(0,l.v9)(d.Z.selectExportLoading),R=(0,l.v9)(d.Z.selectHasRows),C=(0,l.v9)(u.Z.selectPermissionToRead),q=(0,l.v9)(c.Z.selectPermissionToDestroy),A=(0,l.v9)(c.Z.selectPermissionToCreate),F=((0,l.v9)(c.Z.selectPermissionToImport),function(){t(m.Z.doExport())});return(0,h.jsxs)(i.Z,{children:[A&&(0,h.jsx)(v.rU,{to:{pathname:"/violence/new",action:e.action},children:(0,h.jsx)(r.Z,{title:(0,f.ag)("common.new"),children:(0,h.jsx)(o.Z,{type:"primary",children:(0,h.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!q)return null;var e=!n.length||a,i=(0,h.jsx)(o.Z,{disabled:e,loading:b,type:"primary",children:(0,h.jsx)("i",{className:"fa-regular fa-trash-can"})}),l=(0,h.jsx)(s.Z,{title:(0,f.ag)("common.areYouSure"),onConfirm:function(){t(Z.Z.doDestroyAll(n))},okText:(0,f.ag)("common.yes"),cancelText:(0,f.ag)("common.no"),children:i});return e?(0,h.jsx)(r.Z,{title:(0,f.ag)("common.mustSelectARow"),children:i}):l}(),C&&(0,h.jsx)(v.rU,{to:"/audit-logs?entityNames=violence",children:(0,h.jsx)(r.Z,{title:(0,f.ag)("auditLog.menu"),children:(0,h.jsx)(o.Z,{icon:(0,h.jsx)(p.Z,{rev:void 0})})})}),function(){var e=!R||a,t=(0,h.jsx)(o.Z,{disabled:e,icon:(0,h.jsx)(x.Z,{rev:void 0}),onClick:F,loading:y,children:(0,f.ag)("common.export")});return e?(0,h.jsx)(r.Z,{title:(0,f.ag)("common.noDataToExport"),children:t}):t}(),(0,h.jsx)(j,{placeholder:(0,f.ag)("common.search"),onSearch:function(e){t(m.Z.doSearch(e))},style:{width:"auto"}})]})}},24924:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0010.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 00-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"}}]},name:"file-excel",theme:"outlined"},r=n(73448),s=function(e,t){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:o}))};s.displayName="FileExcelOutlined";var l=a.forwardRef(s)}}]);