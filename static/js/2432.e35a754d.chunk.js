"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2432],{86983:function(e,i,n){var t=n(1413),s=n(29439),r=n(92350),a=n(12196),o=n(11829),l=n(73591),c=n(68197),d=n(59624),u=n(59420),g=n(96995),m=n(59491),f=n(43270),Z=n(47313),p=n(10499),v=n(68160),x=n(6473),j=n(89994),b=n(67357),y=n(56148),h=n(5544),A=n(54054),q=n(75352),I=n(46417),R=l.Z.TabPane,C=x.Ry().shape({nameFR:j.Z.string((0,p.ag)("entities.espaceViolence.fields.nameFR"),{}),nameEN:j.Z.string((0,p.ag)("entities.espaceViolence.fields.nameEN"),{}),nameAR:j.Z.string((0,p.ag)("entities.espaceViolence.fields.nameAR"),{required:!0}),type:j.Z.enumerator((0,p.ag)("entities.espaceViolence.fields.type"),{options:A.Z.type})});i.Z=function(e){var i=(0,Z.useState)((function(){var i=e.record||{};return{nameFR:i.nameFR,nameEN:i.nameEN,nameAR:i.nameAR,type:i.type}})),n=(0,s.Z)(i,1)[0],x=(0,f.cI)({resolver:(0,b.X)(C),mode:"all",defaultValues:n}),j=function(i){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,i)},V=e.saveLoading;return(0,I.jsx)(v.ZP,{children:(0,I.jsx)(f.RV,(0,t.Z)((0,t.Z)({},x),{},{children:(0,I.jsxs)("form",{onSubmit:x.handleSubmit(j),children:[(0,I.jsxs)(c.Z,{gutter:24,children:[(0,I.jsx)(d.Z,{span:16,children:(0,I.jsx)(q.Z,{children:e.title})}),(0,I.jsx)(d.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,I.jsxs)(u.Z.Item,(0,t.Z)((0,t.Z)({className:"form-buttons"},v.YT),{},{children:[(0,I.jsx)(g.Z,{title:(0,p.ag)("common.save"),children:(0,I.jsx)(m.Z,{loading:V,type:"primary",onClick:x.handleSubmit(j),icon:(0,I.jsx)(r.Z,{rev:void 0})})}),(0,I.jsx)(g.Z,{title:(0,p.ag)("common.reset"),children:(0,I.jsx)(m.Z,{disabled:V,onClick:function(){Object.keys(n).forEach((function(e){x.setValue(e,n[e])}))},icon:(0,I.jsx)(a.Z,{rev:void 0})})}),e.onCancel&&(0,I.jsx)(g.Z,{title:(0,p.ag)("common.cancel"),children:(0,I.jsx)(m.Z,{disabled:V,onClick:function(){return e.onCancel()},icon:(0,I.jsx)(o.Z,{rev:void 0})})})]}))})]}),(0,I.jsx)(c.Z,{gutter:24,children:(0,I.jsx)(d.Z,{span:24,children:(0,I.jsxs)(l.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,I.jsx)(R,{tab:(0,p.ag)("common.informationsAR"),children:(0,I.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,I.jsx)(y.Z,{name:"nameAR",label:(0,p.ag)("entities.espaceViolence.fields.nameAR"),required:!0,layout:v.I4}),(0,I.jsx)(h.Z,{name:"type",label:(0,p.ag)("entities.espaceViolence.fields.type"),options:A.Z.type.map((function(e){return{value:e,label:(0,p.ag)("entities.espaceViolence.enumerators.type.".concat(e))}})),required:!1,layout:v.I4})]})},"1"),(0,I.jsx)(R,{tab:(0,p.ag)("common.informationsFR"),children:(0,I.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,I.jsx)(y.Z,{name:"nameFR",label:(0,p.ag)("entities.espaceViolence.fields.nameFR"),required:!1,layout:v.I4})})},"2"),(0,I.jsx)(R,{tab:(0,p.ag)("common.informationsEN"),children:(0,I.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,I.jsx)(y.Z,{name:"nameEN",label:(0,p.ag)("entities.espaceViolence.fields.nameEN"),required:!1,layout:v.I4})})},"3")]})})})]})}))})}},61567:function(e,i,n){var t=n(72652),s=(n(47313),n(46417));i.Z=function(e){return(0,s.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,s.jsx)(t.Z,{})})}},12432:function(e,i,n){n.r(i),n.d(i,{default:function(){return de}});var t=n(29439),s=n(47313),r=n(45788),a=n(63830),o=n(10499),l=n(30670),c=n(76747),d=function(e){return e.violence.form},u=(0,c.P1)([d],(function(e){return e.record})),g={selectInitLoading:(0,c.P1)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,c.P1)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:u,selectRaw:d},m=n(37670),f=n(1413),Z=n(92350),p=n(12196),v=n(11829),x=n(73591),j=n(68197),b=n(59624),y=n(59420),h=n(96995),A=n(59491),q=n(43270),I=n(68160),R=n(6473),C=n(89994),V=n(67357),S=n(56148),T=n(30513),F=n(21538),k=n(5544),w=n(76017),E=n(70816),N=n.n(E),L=n(71896),P=n(88962),M=n(45987),O=n(93433),Y=n(33238),B=n(74165),W=n(15861),D=n(48216),K=n(86983),X=n(33512),_=n(46417),G=function(e){var i=(0,s.useState)(!1),n=(0,t.Z)(i,2),r=n[0],a=n[1],l=function(){var i=(0,W.Z)((0,B.Z)().mark((function i(n,t){var s,r,o;return(0,B.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,a(!0),i.next=4,Y.Z.create(t);case 4:return s=i.sent,r=s.id,i.next=8,Y.Z.find(r);case 8:o=i.sent,e.onSuccess(o),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(0),X.Z.handle(i.t0);case 15:return i.prev=15,a(!1),i.finish(15);case 18:case"end":return i.stop()}}),i,null,[[0,12,15,18]])})));return function(e,n){return i.apply(this,arguments)}}();return e.visible?(0,_.jsx)(D.Z,{style:{top:24},title:(0,o.ag)("entities.espaceViolence.new.title"),visible:e.visible,onCancel:function(){return e.onCancel()},footer:!1,width:"80%",children:(0,_.jsx)(K.Z,{saveLoading:r,onSubmit:l,onCancel:e.onCancel,modal:!0})}):null},U=n(51552),$=n(27421),z=["form"],H=function(e){var i=(0,s.useState)(!1),n=(0,t.Z)(i,2),a=n[0],o=n[1],l=(0,q.Gc)(),c=l.setValue,d=l.getValues,u=(0,r.v9)($.Z.selectPermissionToCreate),g=function(){o(!1)},m=(e.form,(0,M.Z)(e,z));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(U.Z,(0,f.Z)((0,f.Z)({},m),{},{fetchFn:function(e,i){return Y.Z.listAutocomplete(e,i)},mapper:{toAutocomplete:function(e){if(!e)return null;var i=e.id,n=e.label;return(e.nameFR||e.nameAR)&&(n="".concat(e.nameFR," / ").concat(e.nameAR)),{key:i,label:n}},toValue:function(e){return e?{id:e.key,label:e.label}:null}},onOpenModal:function(){o(!0)},inMemoryFilter:!0,hasPermissionToCreate:u})),(0,_.jsx)(G,{visible:a,onCancel:g,onSuccess:function(i){var n=e.name,t=e.mode;c(n,t&&"multiple"===t?[].concat((0,O.Z)(d()[n]||[]),[i]):i,{shouldValidate:!0,shouldDirty:!0}),g()}})]})},J=n(40847),Q=n(57757),ee=n(93330),ie=n(40496),ne=n(59836),te=n(75352),se=x.Z.TabPane,re=R.Ry().shape({date:C.Z.date((0,o.ag)("entities.violence.fields.date"),{required:!0}),lieu:C.Z.relationToOne((0,o.ag)("entities.violence.fields.lieu"),{required:!0}),ordre:C.Z.enumerator((0,o.ag)("entities.violence.fields.ordre"),{options:w.Z.ordre,required:!0}),classe:C.Z.enumerator((0,o.ag)("entities.violence.fields.classe"),{options:w.Z.classe,required:!0}),cadre:C.Z.enumerator((0,o.ag)("entities.violence.fields.cadre"),{options:w.Z.cadre,required:!0}),espace:C.Z.relationToMany((0,o.ag)("entities.violence.fields.espace"),{required:!0}),degres:C.Z.enumerator((0,o.ag)("entities.violence.fields.degres"),{options:w.Z.degres,required:!0}),organisation:C.Z.enumerator((0,o.ag)("entities.violence.fields.organisation"),{options:w.Z.organisation,required:!0}),type:C.Z.relationToMany((0,o.ag)("entities.violence.fields.type"),{required:!0}),traitement:C.Z.relationToOne((0,o.ag)("entities.violence.fields.traitement"),{required:!0}),secteur:C.Z.relationToMany((0,o.ag)("entities.violence.fields.secteur"),{required:!0}),commentairesFR:C.Z.string((0,o.ag)("entities.violence.fields.commentaires"),{}),commentairesAR:C.Z.string((0,o.ag)("entities.violence.fields.commentaires"),{required:!0}),commentairesEN:C.Z.string((0,o.ag)("entities.violence.fields.commentaires"),{}),objectif:C.Z.relationToOne((0,o.ag)("entities.violence.fields.objectif"),{required:!0}),outil:C.Z.string((0,o.ag)("entities.violence.fields.outil"),{}),typeAgrsseur:C.Z.enumerator((0,o.ag)("entities.violence.fields.typeAgrsseur"),{options:w.Z.typeAgrsseur,required:!0}),idAgresseur:C.Z.string((0,o.ag)("entities.violence.fields.idAgresseur"),{}),nbreAgresseur:C.Z.integer((0,o.ag)("entities.violence.fields.nbreAgresseur"),{}),genreAgresseur:C.Z.enumerator((0,o.ag)("entities.violence.fields.genreAgresseur"),{options:w.Z.genreAgresseur,required:!0}),age:C.Z.integer((0,o.ag)("entities.violence.fields.age"),{}),typeAgresse:C.Z.enumerator((0,o.ag)("entities.violence.fields.typeAgresse"),{options:w.Z.typeAgresse,required:!0}),idAgresse:C.Z.string((0,o.ag)("entities.violence.fields.idAgresse"),{}),nbreAgresse:C.Z.integer((0,o.ag)("entities.violence.fields.nbreAgresse"),{}),genreAgresse:C.Z.enumerator((0,o.ag)("entities.violence.fields.genreAgresse"),{options:w.Z.genreAgresse,required:!0}),ageAgresse:C.Z.integer((0,o.ag)("entities.violence.fields.ageAgresse"),{}),action:C.Z.relationToOne((0,o.ag)("entities.violence.fields.action"),{}),statut:C.Z.enumerator((0,o.ag)("entities.action.fields.statut"),{options:w.Z.statut})}),ae=function(e){var i=(0,s.useState)((function(){var i=e.record||{};return{date:i.date?N()(i.date,"YYYY-MM-DD"):null,lieu:i.lieu,ordre:i.ordre,classe:i.classe,cadre:i.cadre,espace:i.espace||[],degres:i.degres,organisation:i.organisation,type:i.type||[],traitement:i.traitement,secteur:i.secteur||[],commentairesEN:i.commentairesEN,commentairesFR:i.commentairesFR,commentairesAR:i.commentairesAR,objectif:i.objectif,outil:i.outil,typeAgrsseur:i.typeAgrsseur?i.typeAgrsseur:"physique",idAgresseur:i.idAgresseur,nbreAgresseur:i.nbreAgresseur,genreAgresseur:i.genreAgresseur,age:i.age,typeAgresse:i.typeAgresse?i.typeAgresse:"physique",idAgresse:i.idAgresse,nbreAgresse:i.nbreAgresse,genreAgresse:i.genreAgresse,ageAgresse:i.ageAgresse,action:i.action,statut:i.statut,coefficient:1}})),n=(0,t.Z)(i,1)[0],r=(0,q.cI)({resolver:(0,V.X)(re),mode:"all",defaultValues:n}),a=function(i){var n;e.onSubmit(null===e||void 0===e||null===(n=e.record)||void 0===n?void 0:n.id,i)},l=e.saveLoading;return(0,_.jsx)(I.ZP,{children:(0,_.jsx)(q.RV,(0,f.Z)((0,f.Z)({},r),{},{children:(0,_.jsxs)("form",{onSubmit:r.handleSubmit(a),children:[(0,_.jsxs)(j.Z,{gutter:24,children:[(0,_.jsx)(b.Z,{span:16,children:(0,_.jsx)(te.Z,{children:e.title})}),(0,_.jsx)(b.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,_.jsxs)(y.Z.Item,(0,f.Z)((0,f.Z)({className:"form-buttons"},I.YT),{},{children:[(0,_.jsx)(h.Z,{title:(0,o.ag)("common.save"),children:(0,_.jsx)(A.Z,{loading:l,type:"primary",onClick:r.handleSubmit(a),icon:(0,_.jsx)(Z.Z,{rev:void 0})})}),(0,_.jsx)(h.Z,{title:(0,o.ag)("common.reset"),children:(0,_.jsx)(A.Z,{disabled:l,onClick:function(){Object.keys(n).forEach((function(e){r.setValue(e,n[e])}))},icon:(0,_.jsx)(p.Z,{rev:void 0})})}),e.onCancel&&(0,_.jsx)(h.Z,{title:(0,o.ag)("common.cancel"),children:(0,_.jsx)(A.Z,{disabled:l,onClick:function(){return e.onCancel()},icon:(0,_.jsx)(v.Z,{rev:void 0})})})]}))})]}),(0,_.jsx)(j.Z,{gutter:24,children:(0,_.jsx)(b.Z,{span:24,children:(0,_.jsxs)(x.Z,{defaultActiveKey:"0",onChange:function(e){},children:[(0,_.jsxs)(se,{tab:(0,o.ag)("common.informations"),children:[(0,_.jsx)(j.Z,{gutter:24,children:(0,_.jsx)(b.Z,{span:24,children:(0,_.jsxs)("fieldset",{children:[(0,_.jsxs)("legend",{children:["\xa0 \xa0",(0,o.ag)("common.informations")]}),(0,_.jsx)(L.Z,{name:"date",label:(0,o.ag)("entities.violence.fields.date"),required:!0,layout:I.I4}),(0,_.jsx)(P.Z,{name:"lieu",label:(0,o.ag)("entities.violence.fields.lieu"),required:!0,showCreate:!e.modal,layout:I.I4}),(0,_.jsx)(k.Z,{name:"ordre",label:(0,o.ag)("entities.violence.fields.ordre"),options:w.Z.ordre.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.ordre.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(k.Z,{name:"classe",label:(0,o.ag)("entities.violence.fields.classe"),options:w.Z.classe.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.classe.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(k.Z,{name:"cadre",label:(0,o.ag)("entities.violence.fields.cadre"),options:w.Z.cadre.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.cadre.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(H,{name:"espace",label:(0,o.ag)("entities.violence.fields.espace"),required:!0,showCreate:!e.modal,layout:I.I4,mode:"multiple"}),(0,_.jsx)(k.Z,{name:"degres",label:(0,o.ag)("entities.violence.fields.degres"),options:w.Z.degres.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.degres.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(k.Z,{name:"organisation",label:(0,o.ag)("entities.violence.fields.organisation"),options:w.Z.organisation.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.organisation.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(J.Z,{name:"type",label:(0,o.ag)("entities.violence.fields.type"),required:!0,showCreate:!e.modal,layout:I.I4,mode:"multiple"}),(0,_.jsx)(Q.Z,{name:"traitement",label:(0,o.ag)("entities.violence.fields.traitement"),required:!0,showCreate:!e.modal,layout:I.I4}),(0,_.jsx)(ne.Z,{name:"secteur",label:(0,o.ag)("entities.violence.fields.secteur"),required:!0,showCreate:!e.modal,layout:I.I4,mode:"multiple"}),(0,_.jsx)(ee.Z,{name:"objectif",label:(0,o.ag)("entities.violence.fields.objectif"),required:!0,showCreate:!e.modal,layout:I.I4}),(0,_.jsx)(k.Z,{name:"statut",label:(0,o.ag)("entities.mouvement.fields.statut"),options:w.Z.statut.map((function(e){return{value:e,label:(0,o.ag)("entities.action.enumerators.statut.".concat(e))}})),required:!1,layout:I.I4}),(0,_.jsx)(S.Z,{name:"outil",label:(0,o.ag)("entities.violence.fields.outil"),required:!1,layout:I.I4}),(0,_.jsx)(T.Z,{name:"commentairesAR",label:(0,o.ag)("entities.violence.fields.commentaires"),required:!0,layout:I.I4}),e.action?null:(0,_.jsx)(ie.Z,{name:"action",label:(0,o.ag)("entities.violence.fields.action"),required:!1,showCreate:!e.modal,layout:I.I4})]})})}),(0,_.jsxs)(j.Z,{gutter:24,children:[(0,_.jsx)(b.Z,{span:12,children:(0,_.jsxs)("fieldset",{children:[(0,_.jsxs)("legend",{children:["\xa0 \xa0"," ",(0,o.ag)("entities.violence.fields.idAgresseur")]}),(0,_.jsx)(k.Z,{name:"typeAgrsseur",label:(0,o.ag)("entities.violence.fields.typeAgrsseur"),options:w.Z.typeAgrsseur.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.typeAgrsseur.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(S.Z,{name:"idAgresseur",label:(0,o.ag)("entities.violence.fields.idAgresseur"),required:!1,layout:I.I4}),(0,_.jsx)(F.Z,{name:"nbreAgresseur",label:(0,o.ag)("entities.violence.fields.nbreAgresseur"),required:!1,layout:I.I4}),(0,_.jsx)(k.Z,{name:"genreAgresseur",label:(0,o.ag)("entities.violence.fields.genreAgresseur"),options:w.Z.genreAgresseur.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.genreAgresseur.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(F.Z,{name:"age",label:(0,o.ag)("entities.violence.fields.age"),required:!1,layout:I.I4})]})}),(0,_.jsx)(b.Z,{span:12,children:(0,_.jsxs)("fieldset",{children:[(0,_.jsxs)("legend",{children:["\xa0 \xa0"," ",(0,o.ag)("entities.violence.fields.idAgresse")]}),(0,_.jsx)(k.Z,{name:"typeAgresse",label:(0,o.ag)("entities.violence.fields.typeAgresse"),options:w.Z.typeAgresse.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.typeAgresse.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(S.Z,{name:"idAgresse",label:(0,o.ag)("entities.violence.fields.idAgresse"),required:!1,layout:I.I4}),(0,_.jsx)(F.Z,{name:"nbreAgresse",label:(0,o.ag)("entities.violence.fields.nbreAgresse"),required:!1,layout:I.I4}),(0,_.jsx)(k.Z,{name:"genreAgresse",label:(0,o.ag)("entities.violence.fields.genreAgresse"),options:w.Z.genreAgresse.map((function(e){return{value:e,label:(0,o.ag)("entities.violence.enumerators.genreAgresse.".concat(e))}})),required:!0,layout:I.I4}),(0,_.jsx)(F.Z,{name:"ageAgresse",label:(0,o.ag)("entities.violence.fields.ageAgresse"),required:!1,layout:I.I4})]})})]})]},"0"),(0,_.jsx)(se,{tab:(0,o.ag)("common.informationsFR"),children:(0,_.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,_.jsx)(T.Z,{name:"commentairesFR",label:(0,o.ag)("entities.violence.fields.commentaires"),required:!1,layout:I.I4})})},"2"),(0,_.jsx)(se,{tab:(0,o.ag)("common.informationsEN"),children:(0,_.jsx)("fieldset",{style:{borderTopWidth:0},children:(0,_.jsx)(T.Z,{name:"commentairesEN",label:(0,o.ag)("entities.violence.fields.commentaires"),required:!1,layout:I.I4})})},"3")]})})})]})}))})},oe=n(27829),le=n(53852),ce=n(61567),de=function(e){var i=(0,s.useState)(!1),n=(0,t.Z)(i,2),c=n[0],d=n[1],u=(0,r.I0)(),f=(0,a.$B)(),Z=(0,r.v9)(g.selectInitLoading),p=(0,r.v9)(g.selectSaveLoading),v=(0,r.v9)(g.selectRecord),x=Boolean(f.params.id),j=x?(0,o.ag)("entities.violence.edit.title"):(0,o.ag)("entities.violence.new.title");(0,s.useEffect)((function(){u(l.Z.doInit(f.params.id)),d(!0)}),[u,f.params.id]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(le.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.violence.menu"),"/violence"],[j]]}),(0,_.jsxs)(oe.Z,{children:[Z&&(0,_.jsx)(ce.Z,{}),c&&!Z&&(0,_.jsx)(ae,{action:e.location.action,title:j,saveLoading:p,record:v,isEditing:x,onSubmit:function(i,n){n.coefficient=1,e.location.action&&(n.action=e.location.action),u(x?l.Z.doUpdate(i,n):l.Z.doCreate(n))},onCancel:function(){return(0,m.s1)().push("/violence")}})]})]})}}}]);