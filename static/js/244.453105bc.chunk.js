(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[244],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(421).a.h1(r());t.a=c},1062:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1063:function(e,t,n){"use strict";var a=n(17),r=n(1101),c=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1077:function(e,t,n){"use strict";var a=n(17),r=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1218:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratDestroy)})),selectPermissionToImport:u};t.a=j},1240:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.delegationRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.delegationEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.delegationCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.delegationImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.delegationDestroy)})),selectPermissionToImport:u};t.a=j},1267:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.imadaRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.imadaEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.imadaCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.imadaImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.imadaDestroy)})),selectPermissionToImport:u};t.a=j},1406:function(e,t,n){"use strict";var a=n(17),r=(n(6),n(201)),c=n(39),i=n(1218);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{to:"/gouvernorat/".concat(n.id),children:n.nameAR})},n.id):Object(a.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},1512:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.delegation.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1571:function(e,t,n){"use strict";var a=n(17),r=(n(6),n(201)),c=n(39),i=n(1267);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{to:"/imada/".concat(n.id),children:n.nameAR})},n.id):Object(a.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},2026:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1176),c=n(1177),i=n(6),s=n(39),o=n(41),l=n(2),u=n(501),j=n(4),d=function(e){return e.delegation.view},b=Object(j.a)([d],(function(e){return e.record})),m={selectLoading:Object(j.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:d},O=n(0),f=n(1077),h=n(1175),g=n(1248),v=n(1951),x=n(1406),p=n(1571),C=g.a.TabPane,T=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(f.a,{}):Object(a.jsx)(h.a,{children:Object(a.jsxs)(g.a,{defaultActiveKey:"0",onChange:function(e){},children:[Object(a.jsx)(C,{tab:Object(l.c)("common.informations"),children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nameAR"),children:t.nameAR})),Boolean(t.gouvernorat)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.gouvernorat"),children:Object(a.jsx)(x.a,{value:t.gouvernorat})})),Boolean(t.imadas)&&Boolean(t.imadas.length)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.imadas"),children:Object(a.jsx)(p.a,{value:t.imadas})})),Boolean(t.nbreEcoles)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nbreEcoles"),children:t.nbreEcoles})),Boolean(t.nbreColleges)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nbreColleges"),children:t.nbreColleges})),Boolean(t.nbreLycees)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nbreLycees"),children:t.nbreLycees}))]})},"0"),Object(a.jsx)(C,{tab:Object(l.c)("common.informationsFR"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nameFR"),children:t.nameFR}))})},"2"),Object(a.jsx)(C,{tab:Object(l.c)("common.informationsEN"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(a.jsx)(v.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.delegation.fields.nameEN"),children:t.nameEN}))})},"3")]})})},y=n(1047),w=n(450),R=n(447),P=n(1093),I=n(201),U=n(228),E=n(1240),A=n(380),B=n(1512),D=n(1065),F=function(e){var t=Object(s.d)(),n=Object(o.h)(),r=Object(s.e)(U.a.selectPermissionToRead),c=Object(s.e)(E.a.selectPermissionToEdit),i=Object(s.e)(E.a.selectPermissionToDestroy),u=Object(s.e)(B.a.selectLoading),j=n.params.id;return Object(a.jsxs)(D.a,{children:[c&&Object(a.jsx)(I.a,{to:"/delegation/".concat(j,"/edit"),children:Object(a.jsx)(w.a,{title:Object(l.c)("common.edit"),children:Object(a.jsx)(R.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(a.jsx)(P.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(A.a.doDestroy(j))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(a.jsx)(w.a,{title:Object(l.c)("common.destroy"),children:Object(a.jsx)(R.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(I.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(a.jsx)(w.a,{title:Object(l.c)("auditLog.menu"),children:Object(a.jsx)(R.a,{icon:Object(a.jsx)(y.a,{})})})})]})},L=n(1062),N=n(1063),k=n(1056);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),j=Object(s.e)(m.selectLoading),d=Object(s.e)(m.selectRecord);return Object(i.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.delegation.menu"),"/delegation"],[Object(l.c)("entities.delegation.view.title")]]}),Object(a.jsxs)(L.a,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.a,{span:16,children:Object(a.jsx)(k.a,{children:Object(l.c)("entities.delegation.view.title")})}),Object(a.jsx)(c.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(F,{match:n})})]}),Object(a.jsx)(T,{loading:j,record:d})]})]})}}}]);