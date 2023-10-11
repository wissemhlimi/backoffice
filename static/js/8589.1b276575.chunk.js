"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8589],{79223:function(e,n,t){var r=t(76747),s=t(86495),i=t(26319),a=t(71945),l=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(a.Z.values.demandeAlerteRead)})),o=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(a.Z.values.demandeAlerteEdit)})),d=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(a.Z.values.demandeAlerteCreate)})),c=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(a.Z.values.demandeAlerteImport)})),u={selectPermissionToRead:l,selectPermissionToEdit:o,selectPermissionToCreate:d,selectPermissionToDestroy:(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(a.Z.values.demandeAlerteDestroy)})),selectPermissionToImport:c};n.Z=u},62617:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.demandeAlerte.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},28589:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(68197),s=t(59624),i=t(47313),a=t(45788),l=t(63830),o=t(10499),d=t(65952),c=t(76747),u=function(e){return e.demandeAlerte.view},m=(0,c.P1)([u],(function(e){return e.record})),Z={selectLoading:(0,c.P1)([u],(function(e){return Boolean(e.loading)})),selectRecord:m,selectRaw:u},f=t(1413),h=t(61567),j=t(25969),x=t(59420),g=t(22984),v=t(46417),p=function(e){var n=e.record;return e.loading||!n?(0,v.jsx)(h.Z,{}):(0,v.jsx)(j.Z,{children:(0,v.jsxs)("fieldset",{children:[(0,v.jsxs)("legend",{children:["\xa0 \xa0",(0,o.ag)("common.informations")]}),Boolean(n.sujet)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.sujet"),children:n.sujet})),Boolean(n.description)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.description"),children:n.description})),Boolean(n.files)&&Boolean(n.files.length)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.files"),children:(0,v.jsx)(g.Z,{value:n.files})})),Boolean(n.media)&&Boolean(n.media.length)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.media"),children:(0,v.jsx)(g.Z,{value:n.media})})),Boolean(n.audio)&&Boolean(n.audio.length)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.audio"),children:(0,v.jsx)(g.Z,{value:n.audio})})),Boolean(n.contact)&&(0,v.jsx)(x.Z.Item,(0,f.Z)((0,f.Z)({},j.D),{},{label:(0,o.ag)("entities.demandeAlerte.fields.contact"),children:n.contact}))]})})},A=t(17551),C=t(96995),P=t(59491),T=t(4927),y=t(28303),B=t(23516),I=t(79223),w=t(17213),b=t(62617),D=t(10419),U=function(e){var n=(0,a.I0)(),t=(0,l.$B)(),r=(0,a.v9)(B.Z.selectPermissionToRead),s=(0,a.v9)(I.Z.selectPermissionToEdit),i=(0,a.v9)(I.Z.selectPermissionToDestroy),d=(0,a.v9)(b.Z.selectLoading),c=t.params.id;return(0,v.jsxs)(D.Z,{children:[s&&(0,v.jsx)(y.rU,{to:"/demande-alerte/".concat(c,"/edit"),children:(0,v.jsx)(C.Z,{title:(0,o.ag)("common.edit"),children:(0,v.jsx)(P.Z,{type:"primary",children:(0,v.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&(0,v.jsx)(T.Z,{title:(0,o.ag)("common.areYouSure"),onConfirm:function(){n(w.Z.doDestroy(c))},okText:(0,o.ag)("common.yes"),cancelText:(0,o.ag)("common.no"),children:(0,v.jsx)(C.Z,{title:(0,o.ag)("common.destroy"),children:(0,v.jsx)(P.Z,{type:"primary",disabled:d,children:(0,v.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&(0,v.jsx)(y.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(c)),children:(0,v.jsx)(C.Z,{title:(0,o.ag)("auditLog.menu"),children:(0,v.jsx)(P.Z,{icon:(0,v.jsx)(A.Z,{rev:void 0})})})})]})},R=t(27829),k=t(53852),L=t(75352),E=function(e){var n=(0,a.I0)(),t=(0,l.$B)(),c=(0,a.v9)(Z.selectLoading),u=(0,a.v9)(Z.selectRecord);return(0,i.useEffect)((function(){n(d.Z.doFind(t.params.id))}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.demandeAlerte.menu"),"/demande-alerte"],[(0,o.ag)("entities.demandeAlerte.view.title")]]}),(0,v.jsxs)(R.Z,{children:[(0,v.jsxs)(r.Z,{children:[(0,v.jsx)(s.Z,{span:16,children:(0,v.jsx)(L.Z,{children:(0,o.ag)("entities.demandeAlerte.view.title")})}),(0,v.jsxs)(s.Z,{span:8,style:{textAlign:"end"},children:[" ",(0,v.jsx)(U,{match:t})]})]}),(0,v.jsx)(p,{loading:c,record:u})]})]})}},59624:function(e,n,t){var r=t(26297);n.Z=r.Z},68197:function(e,n,t){var r=t(84268);n.Z=r.Z}}]);