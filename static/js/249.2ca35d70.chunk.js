(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[249],{1056:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var r=n(421).a.h1(c());t.a=r},1061:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1063:function(e,t,n){"use strict";var a=n(17),c=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(c.a,{children:e.items.map((function(e){return Object(a.jsx)(c.a.Item,{children:t(e)?Object(a.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1077:function(e,t,n){"use strict";var a=n(17),c=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function c(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1237:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.imadaRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.imadaEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.imadaCreate)})),d=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.imadaImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.imadaDestroy)})),selectPermissionToImport:d};t.a=j},1241:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.delegationRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.delegationEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.delegationCreate)})),d=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.delegationImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.delegationDestroy)})),selectPermissionToImport:d};t.a=j},1470:function(e,t,n){"use strict";var a=n(17),c=(n(6),n(201)),r=n(39),i=n(1241);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{to:"/delegation/".concat(n.id),children:n.nameAR})},n.id):Object(a.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},1513:function(e,t,n){"use strict";var a=n(4),c={selectLoading:Object(a.a)([function(e){return e.imada.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},2029:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(1176),r=n(1177),i=n(6),s=n(39),o=n(41),l=n(2),d=n(502),j=n(4),u=function(e){return e.imada.view},b=Object(j.a)([u],(function(e){return e.record})),m={selectLoading:Object(j.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:u},O=n(0),f=n(1077),h=n(1175),x=n(1249),p=n(1952),v=n(1470),g=x.a.TabPane,C=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(f.a,{}):Object(a.jsx)(h.a,{children:Object(a.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(a.jsx)(g,{tab:Object(l.c)("common.informationsAR"),children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(a.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.imada.fields.nameAR"),children:t.nameAR})),Boolean(t.delegation)&&Object(a.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.imada.fields.delegation"),children:Object(a.jsx)(v.a,{value:t.delegation})}))]})},"1"),Object(a.jsx)(g,{tab:Object(l.c)("common.informationsFR"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(a.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.imada.fields.nameFR"),children:t.nameFR}))})},"2"),Object(a.jsx)(g,{tab:Object(l.c)("common.informationsEN"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(a.jsx)(p.a.Item,Object(O.a)(Object(O.a)({},h.b),{},{label:Object(l.c)("entities.imada.fields.nameEN"),children:t.nameEN}))})},"3")]})})},T=n(1047),y=n(450),w=n(447),R=n(1093),P=n(201),I=n(228),U=n(1237),A=n(381),E=n(1513),B=n(1065),F=function(e){var t=Object(s.d)(),n=Object(o.h)(),c=Object(s.e)(I.a.selectPermissionToRead),r=Object(s.e)(U.a.selectPermissionToEdit),i=Object(s.e)(U.a.selectPermissionToDestroy),d=Object(s.e)(E.a.selectLoading),j=n.params.id;return Object(a.jsxs)(B.a,{children:[r&&Object(a.jsx)(P.a,{to:"/imada/".concat(j,"/edit"),children:Object(a.jsx)(y.a,{title:Object(l.c)("common.edit"),children:Object(a.jsx)(w.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(a.jsx)(R.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(A.a.doDestroy(j))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(a.jsx)(y.a,{title:Object(l.c)("common.destroy"),children:Object(a.jsx)(w.a,{type:"primary",disabled:d,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),c&&Object(a.jsx)(P.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(a.jsx)(y.a,{title:Object(l.c)("auditLog.menu"),children:Object(a.jsx)(w.a,{icon:Object(a.jsx)(T.a,{})})})})]})},D=n(1061),N=n(1063),L=n(1056);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),j=Object(s.e)(m.selectLoading),u=Object(s.e)(m.selectRecord);return Object(i.useEffect)((function(){t(d.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.imada.menu"),"/imada"],[Object(l.c)("entities.imada.view.title")]]}),Object(a.jsxs)(D.a,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(r.a,{span:16,children:Object(a.jsx)(L.a,{children:Object(l.c)("entities.imada.view.title")})}),Object(a.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(F,{match:n})})]}),Object(a.jsx)(C,{loading:j,record:u})]})]})}}}]);