"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1298],{59803:function(e,t,n){var i=n(76747),r=n(86495),s=n(26319),l=n(71945),a=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.categoryPublicationRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.categoryPublicationEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.categoryPublicationCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.categoryPublicationImport)})),d={selectPermissionToRead:a,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.categoryPublicationDestroy)})),selectPermissionToImport:u};t.Z=d},31983:function(e,t,n){var i={selectLoading:(0,n(76747).P1)([function(e){return e.publication.destroy}],(function(e){return Boolean(e.loading)}))};t.Z=i},90445:function(e,t,n){var i=n(76747),r=n(86495),s=n(26319),l=n(71945),a=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.publicationRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.publicationEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.publicationCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.publicationImport)})),d={selectPermissionToRead:a,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.publicationDestroy)})),selectPermissionToImport:u};t.Z=d},61666:function(e,t,n){var i=n(76747),r=n(86495),s=n(26319),l=n(71945),a=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.thematiqueRead)})),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.thematiqueEdit)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.thematiqueCreate)})),u=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.thematiqueImport)})),d={selectPermissionToRead:a,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(l.Z.values.thematiqueDestroy)})),selectPermissionToImport:u};t.Z=d},11298:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var i=n(47313),r=n(45788),s=n(63830),l=n(10499),a=n(95449),o=n(76747),c=function(e){return e.publication.view},u=(0,o.P1)([c],(function(e){return e.record})),d={selectLoading:(0,o.P1)([c],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:c},Z=n(1413),m=n(61567),p=n(25969),h=n(59420),f=n(22984),g=n(39395),x=n(28303),v=n(59803),j=n(46417),b=function(e){var t=(0,r.v9)(v.Z.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?(0,j.jsx)(j.Fragment,{children:n().map((function(e){return n=e,t?(0,j.jsx)("div",{children:(0,j.jsx)(x.rU,{to:"/category-publication/".concat(n.id),children:n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN})},n.id):(0,j.jsxs)("div",{children:[" ",n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN]},n.id);var n}))}):null},R=n(313),P=n.n(R),C=n(73591),T=n(89522),y=C.Z.TabPane,I=function(e){var t=e.record,n=function(e){return{__html:P().sanitize(e)}};return e.loading||!t?(0,j.jsx)(m.Z,{}):(0,j.jsx)(p.Z,{children:(0,j.jsxs)(C.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,j.jsx)(y,{tab:(0,l.ag)("common.informations"),children:(0,j.jsxs)("fieldset",{children:[Boolean(t.titleAR)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.titleAR"),children:t.titleAR})),Boolean(t.titleFR)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.titleFR"),children:t.titleFR})),Boolean(t.titleEN)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.titleEN"),children:t.titleEN})),Boolean(t.thematique)&&Boolean(t.thematique.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.thematique"),children:(0,j.jsx)(g.Z,{value:t.thematique})})),Boolean(t.category)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.categorie"),children:(0,j.jsx)(b,{value:t.category})})),Boolean(t.type)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.type"),children:(0,l.ag)("entities.publication.enumerators.type.".concat(t.type))})),Boolean(t.statut)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.statut"),children:(0,l.ag)("entities.publication.enumerators.statut.".concat(t.statut))})),Boolean(t.date)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.date"),children:t.date})),Boolean(t.photos)&&Boolean(t.photos.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.photos"),children:(0,j.jsx)(T.Z,{value:t.photos})})),Boolean(t.supports)&&Boolean(t.supports.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.supports"),children:(0,j.jsx)(f.Z,{value:t.supports})})),Boolean(t.descriptionFR)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.evenement.fields.description"),children:(0,j.jsx)("div",{className:"preview",dangerouslySetInnerHTML:n(t.descriptionFR)})}))]})},"1"),(0,j.jsx)(y,{tab:(0,l.ag)("common.informationsAR"),children:(0,j.jsxs)("fieldset",{children:[Boolean(t.descriptionAR)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.evenement.fields.description"),children:(0,j.jsx)("div",{className:"preview",dangerouslySetInnerHTML:n(t.descriptionAR)})})),Boolean(t.photosAR)&&Boolean(t.photosAR.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.photos"),children:(0,j.jsx)(T.Z,{value:t.photosAR})})),Boolean(t.supportsAR)&&Boolean(t.supportsAR.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.supports"),children:(0,j.jsx)(f.Z,{value:t.supportsAR})}))]})},"2"),(0,j.jsx)(y,{tab:(0,l.ag)("common.informationsEN"),children:(0,j.jsxs)("fieldset",{children:[Boolean(t.descriptionEN)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.evenement.fields.description"),children:(0,j.jsx)("div",{className:"preview",dangerouslySetInnerHTML:n(t.descriptionEN)})})),Boolean(t.photosEN)&&Boolean(t.photosEN.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.photos"),children:(0,j.jsx)(T.Z,{value:t.photosEN})})),Boolean(t.supportsEN)&&Boolean(t.supportsEN.length)&&(0,j.jsx)(h.Z.Item,(0,Z.Z)((0,Z.Z)({},p.D),{},{label:(0,l.ag)("entities.publication.fields.supports"),children:(0,j.jsx)(f.Z,{value:t.supportsEN})}))]})},"3")]})})},A=n(17551),B=n(96995),w=n(59491),D=n(4927),E=n(23516),N=n(90445),U=n(87311),F=n(31983),q=n(10419),L=function(e){var t=(0,r.I0)(),n=(0,s.$B)(),i=(0,r.v9)(E.Z.selectPermissionToRead),a=(0,r.v9)(N.Z.selectPermissionToEdit),o=(0,r.v9)(N.Z.selectPermissionToDestroy),c=(0,r.v9)(F.Z.selectLoading),u=n.params.id;return(0,j.jsxs)(q.Z,{children:[a&&(0,j.jsx)(x.rU,{to:"/publication/".concat(u,"/edit"),children:(0,j.jsx)(B.Z,{title:(0,l.ag)("common.edit"),children:(0,j.jsx)(w.Z,{type:"primary",children:(0,j.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),o&&(0,j.jsx)(D.Z,{title:(0,l.ag)("common.areYouSure"),onConfirm:function(){t(U.Z.doDestroy(u))},okText:(0,l.ag)("common.yes"),cancelText:(0,l.ag)("common.no"),children:(0,j.jsx)(B.Z,{title:(0,l.ag)("common.destroy"),children:(0,j.jsx)(w.Z,{type:"primary",disabled:c,children:(0,j.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),i&&(0,j.jsx)(x.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,j.jsx)(B.Z,{title:(0,l.ag)("auditLog.menu"),children:(0,j.jsx)(w.Z,{icon:(0,j.jsx)(A.Z,{rev:void 0})})})})]})},k=n(27829),S=n(53852),_=n(75352),H=n(68197),M=n(59624),$=function(e){var t=(0,r.I0)(),n=(0,s.$B)(),o=(0,r.v9)(d.selectLoading),c=(0,r.v9)(d.selectRecord);return(0,i.useEffect)((function(){t(a.Z.doFind(n.params.id))}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.publication.menu"),"/publication"],[(0,l.ag)("entities.publication.view.title")]]}),(0,j.jsxs)(k.Z,{children:[(0,j.jsxs)(H.Z,{children:[(0,j.jsx)(M.Z,{span:16,children:(0,j.jsx)(_.Z,{children:(0,l.ag)("entities.publication.view.title")})}),(0,j.jsx)(M.Z,{span:8,style:{textAlign:"end"},children:(0,j.jsx)(L,{match:n})})]}),(0,j.jsx)(I,{loading:o,record:c})]})]})}},89522:function(e,t,n){n.d(t,{Z:function(){return c}});var i,r=n(11894),s=(n(47313),n(10499)),l=n(30168),a=n(44781).ZP.div(i||(i=(0,l.Z)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]))),o=n(46417),c=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?(0,o.jsx)(a,{children:(0,o.jsx)(r.Z,{autoplay:!0,vertical:!0,effect:"fade",children:t().map((function(e){return(0,o.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):(0,o.jsx)("p",{children:(0,s.ag)("imagesViewer.noImage")})}},39395:function(e,t,n){n(47313);var i=n(28303),r=n(45788),s=n(61666),l=n(46417);t.Z=function(e){var t=(0,r.v9)(s.Z.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?(0,l.jsx)(l.Fragment,{children:n().map((function(e){return n=e,t?(0,l.jsx)("div",{children:(0,l.jsx)(i.rU,{to:"/thematique/".concat(n.id),children:n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN})},n.id):(0,l.jsxs)("div",{children:[" ",n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN]},n.id);var n}))}):null}}}]);