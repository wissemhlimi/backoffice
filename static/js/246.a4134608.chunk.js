(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[246],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(421).a.h1(a());t.a=r},1062:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1239:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.thematiqueRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.thematiqueEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.thematiqueCreate)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.thematiqueImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.thematiqueDestroy)})),selectPermissionToImport:u};t.a=j},1282:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryForumRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryForumEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryForumCreate)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryForumImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryForumDestroy)})),selectPermissionToImport:u};t.a=j},1296:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.forumRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.forumEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.forumCreate)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.forumImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.forumDestroy)})),selectPermissionToImport:u};t.a=j},1452:function(e,t,n){"use strict";var c=n(17),a=(n(6),n(201)),r=n(39),i=n(1239);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{to:"/thematique/".concat(n.id),children:n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN})},n.id):Object(c.jsxs)("div",{children:[" ",n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN]},n.id);var n}))}):null}},1488:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.forum.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},1972:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(1176),r=n(1177),i=n(6),s=n(39),o=n(41),l=n(2),u=n(478),j=n(4),b=function(e){return e.forum.view},m=Object(j.a)([b],(function(e){return e.record})),d={selectLoading:Object(j.a)([b],(function(e){return Boolean(e.loading)})),selectRecord:m,selectRaw:b},O=n(0),f=n(1077),h=n(1175),x=n(1249),v=n(1952),p=n(1452),g=n(201),C=n(1282),R=function(e){var t=Object(s.e)(C.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{to:"/category-forum/".concat(n.id),children:n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN})},n.id):Object(c.jsxs)("div",{children:[" ",n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN]},n.id);var n}))}):null},T=x.a.TabPane,y=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(f.a,{}):Object(c.jsx)(h.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(T,{tab:Object(l.c)("common.informations"),children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("legend",{children:["\xa0\xa0",Object(l.c)("common.informations")]}),Boolean(t.thematique)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.thematique"),children:Object(c.jsx)(p.a,{value:t.thematique})})),Boolean(t.category)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.categorie"),children:Object(c.jsx)(R,{value:t.category})})),Boolean(t.visibilite)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.visibilite"),children:Object(l.c)("entities.forum.enumerators.visibilite.".concat(t.visibilite))})),Boolean(t.statut)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.statut"),children:Object(l.c)("entities.forum.enumerators.statut.".concat(t.statut))}))]})},"1"),Object(c.jsx)(T,{tab:Object(l.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informationsFR")]}),Boolean(t.titleFR)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.title"),children:t.titleFR})),Boolean(t.sujetFR)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.sujet"),children:t.sujetFR})),Boolean(t.titleAR)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.title"),children:t.titleAR})),Boolean(t.sujetAR)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.sujet"),children:t.sujetAR}))]})},"2"),Object(c.jsx)(T,{tab:Object(l.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informationsEN")]}),Boolean(t.titleEN)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.title"),children:t.titleEN})),Boolean(t.sujetEN)&&Object(c.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.forum.fields.sujet"),children:t.sujetEN}))]})},"4")]})})},w=n(1047),F=n(450),P=n(447),I=n(1093),A=n(228),E=n(1296),U=n(357),B=n(1488),N=n(1065),q=function(e){var t=Object(s.d)(),n=Object(o.h)(),a=Object(s.e)(A.a.selectPermissionToRead),r=Object(s.e)(E.a.selectPermissionToEdit),i=Object(s.e)(E.a.selectPermissionToDestroy),u=Object(s.e)(B.a.selectLoading),j=n.params.id;return Object(c.jsxs)(N.a,{children:[r&&Object(c.jsx)(g.a,{to:"/forum/".concat(j,"/edit"),children:Object(c.jsx)(F.a,{title:Object(l.c)("common.edit"),children:Object(c.jsx)(P.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(c.jsx)(I.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(U.a.doDestroy(j))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(c.jsx)(F.a,{title:Object(l.c)("common.destroy"),children:Object(c.jsx)(P.a,{type:"primary",disabled:u,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(g.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(c.jsx)(F.a,{title:Object(l.c)("auditLog.menu"),children:Object(c.jsx)(P.a,{icon:Object(c.jsx)(w.a,{})})})})]})},D=n(1062),L=n(1063),k=n(1056);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),j=Object(s.e)(d.selectLoading),b=Object(s.e)(d.selectRecord);return Object(i.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.forum.menu"),"/forum"],[Object(l.c)("entities.forum.view.title")]]}),Object(c.jsxs)(D.a,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)(r.a,{span:16,children:Object(c.jsx)(k.a,{children:Object(l.c)("entities.forum.view.title")})}),Object(c.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(q,{match:n})})]}),Object(c.jsx)(y,{loading:j,record:b})]})]})}}}]);