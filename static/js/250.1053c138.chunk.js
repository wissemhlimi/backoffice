(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[250],{1056:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var r=n(421).a.h1(c());t.a=r},1062:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1063:function(e,t,n){"use strict";var a=n(17),c=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(c.a,{children:e.items.map((function(e){return Object(a.jsx)(c.a.Item,{children:t(e)?Object(a.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1077:function(e,t,n){"use strict";var a=n(17),c=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function c(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1218:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.gouvernoratRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.gouvernoratEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.gouvernoratCreate)})),u=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.gouvernoratImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.gouvernoratDestroy)})),selectPermissionToImport:u};t.a=j},1268:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.municipaliteRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.municipaliteEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.municipaliteCreate)})),u=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.municipaliteImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.municipaliteDestroy)})),selectPermissionToImport:u};t.a=j},1406:function(e,t,n){"use strict";var a=n(17),c=(n(6),n(201)),r=n(39),i=n(1218);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{to:"/gouvernorat/".concat(n.id),children:n.nameAR})},n.id):Object(a.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},1514:function(e,t,n){"use strict";var a=n(4),c={selectLoading:Object(a.a)([function(e){return e.municipalite.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},2030:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(6),r=n(39),i=n(41),s=n(2),o=n(503),l=n(4),u=function(e){return e.municipalite.view},j=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:u},d=n(0),m=n(1077),O=n(1175),f=n(1248),p=n(1951),h=n(1406),x=f.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(m.a,{}):Object(a.jsx)(O.a,{children:Object(a.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(a.jsx)(x,{tab:Object(s.c)("common.informationsAR"),children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(a.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.municipalite.fields.nameAR"),children:t.nameAR})),Boolean(t.gouvernorat)&&Object(a.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.municipalite.fields.gouvernorat"),children:Object(a.jsx)(h.a,{value:t.gouvernorat})}))]})},"1"),Object(a.jsx)(x,{tab:Object(s.c)("common.informationsFR"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(a.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.municipalite.fields.nameFR"),children:t.nameFR}))})},"2"),Object(a.jsx)(x,{tab:Object(s.c)("common.informationsEN"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(a.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.municipalite.fields.nameEN"),children:t.nameEN}))})},"3")]})})},g=n(1047),C=n(450),T=n(447),y=n(1093),w=n(201),R=n(228),P=n(1268),I=n(382),U=n(1514),A=n(1065),E=function(e){var t=Object(r.d)(),n=Object(i.h)(),c=Object(r.e)(R.a.selectPermissionToRead),o=Object(r.e)(P.a.selectPermissionToEdit),l=Object(r.e)(P.a.selectPermissionToDestroy),u=Object(r.e)(U.a.selectLoading),j=n.params.id;return Object(a.jsxs)(A.a,{children:[o&&Object(a.jsx)(w.a,{to:"/municipalite/".concat(j,"/edit"),children:Object(a.jsx)(C.a,{title:Object(s.c)("common.edit"),children:Object(a.jsx)(T.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),l&&Object(a.jsx)(y.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(j))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(a.jsx)(C.a,{title:Object(s.c)("common.destroy"),children:Object(a.jsx)(T.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),c&&Object(a.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(a.jsx)(C.a,{title:Object(s.c)("auditLog.menu"),children:Object(a.jsx)(T.a,{icon:Object(a.jsx)(g.a,{})})})})]})},B=n(1062),F=n(1063),D=n(1056),N=n(1176),L=n(1177);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),l=Object(r.e)(b.selectLoading),u=Object(r.e)(b.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.municipalite.menu"),"/municipalite"],[Object(s.c)("entities.municipalite.view.title")]]}),Object(a.jsxs)(B.a,{children:[Object(a.jsxs)(N.a,{children:[Object(a.jsx)(L.a,{span:16,children:Object(a.jsx)(D.a,{children:Object(s.c)("entities.municipalite.view.title")})}),Object(a.jsx)(L.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(E,{match:n})})]}),Object(a.jsx)(v,{loading:l,record:u})]})]})}}}]);