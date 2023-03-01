(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[272],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=n(421).a.h1(a());t.a=i},1061:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),i=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},1421:function(e,t,n){"use strict";var c=n(4),a=n(29),i=n(50),r=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.espaceSuicideRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.espaceSuicideEdit)})),d=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.espaceSuicideCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.espaceSuicideImport)})),u={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:d,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.espaceSuicideDestroy)})),selectPermissionToImport:j};t.a=u},1519:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.espaceSuicide.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2040:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(1176),i=n(1177),r=n(6),s=n(39),o=n(41),d=n(2),j=n(509),u=n(4),l=function(e){return e.espaceSuicide.view},b=Object(u.a)([l],(function(e){return e.record})),m={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:l},O=n(0),p=n(1077),f=n(1175),x=n(1249),h=n(1952),g=x.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(p.a,{}):Object(c.jsx)(f.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(d.c)("common.informationsAR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameAR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(d.c)("entities.espaceSuicide.fields.nameAR"),children:t.nameAR}))})},"1"),Object(c.jsx)(g,{tab:Object(d.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(d.c)("entities.espaceSuicide.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(g,{tab:Object(d.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},f.b),{},{label:Object(d.c)("entities.espaceSuicide.fields.nameEN"),children:t.nameEN}))})},"3")]})})},y=n(1047),T=n(450),C=n(447),w=n(1093),R=n(201),S=n(228),I=n(1421),P=n(387),E=n(1519),A=n(1065),B=function(e){var t=Object(s.d)(),n=Object(o.h)(),a=Object(s.e)(S.a.selectPermissionToRead),i=Object(s.e)(I.a.selectPermissionToEdit),r=Object(s.e)(I.a.selectPermissionToDestroy),j=Object(s.e)(E.a.selectLoading),u=n.params.id;return Object(c.jsxs)(A.a,{children:[i&&Object(c.jsx)(R.a,{to:"/espace-suicide/".concat(u,"/edit"),children:Object(c.jsx)(T.a,{title:Object(d.c)("common.edit"),children:Object(c.jsx)(C.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),r&&Object(c.jsx)(w.a,{title:Object(d.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(u))},okText:Object(d.c)("common.yes"),cancelText:Object(d.c)("common.no"),children:Object(c.jsx)(T.a,{title:Object(d.c)("common.destroy"),children:Object(c.jsx)(C.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(R.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(c.jsx)(T.a,{title:Object(d.c)("auditLog.menu"),children:Object(c.jsx)(C.a,{icon:Object(c.jsx)(y.a,{})})})})]})},F=n(1061),N=n(1063),U=n(1056);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),u=Object(s.e)(m.selectLoading),l=Object(s.e)(m.selectRecord);return Object(r.useEffect)((function(){t(j.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N.a,{items:[[Object(d.c)("dashboard.menu"),"/"],[Object(d.c)("entities.espaceSuicide.menu"),"/espace-suicide"],[Object(d.c)("entities.espaceSuicide.view.title")]]}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)(i.a,{span:16,children:Object(c.jsx)(U.a,{children:Object(d.c)("entities.espaceSuicide.view.title")})}),Object(c.jsx)(i.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(B,{match:n})})]}),Object(c.jsx)(v,{loading:u,record:l})]})]})}}}]);