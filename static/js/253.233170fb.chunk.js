(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[253],{1056:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=n(421).a.h1(r());t.a=a},1062:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=n(421).a.div(r());t.a=a},1063:function(e,t,n){"use strict";var c=n(17),r=n(1101),a=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(421).a.div(r());t.a=a},1077:function(e,t,n){"use strict";var c=n(17),r=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function r(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},1290:function(e,t,n){"use strict";var c=n(4),r=n(29),a=n(50),i=n(142),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.typeViolenceRead)})),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.typeViolenceEdit)})),l=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.typeViolenceCreate)})),u=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.typeViolenceImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.typeViolenceDestroy)})),selectPermissionToImport:u};t.a=j},1356:function(e,t,n){"use strict";var c=n(4),r=n(29),a=n(50),i=n(142),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.secteurViolenceRead)})),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.secteurViolenceEdit)})),l=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.secteurViolenceCreate)})),u=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.secteurViolenceImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.secteurViolenceDestroy)})),selectPermissionToImport:u};t.a=j},1508:function(e,t,n){"use strict";var c=n(4),r={selectLoading:Object(c.a)([function(e){return e.secteurViolence.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1568:function(e,t,n){"use strict";var c=n(17),r=(n(6),n(201)),a=n(39),i=n(1290);t.a=function(e){var t=Object(a.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(r.a,{to:"/type-violence/".concat(n.id),children:n.nameAR})},n.id):Object(c.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},2021:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(6),a=n(39),i=n(41),s=n(2),o=n(497),l=n(4),u=function(e){return e.secteurViolence.view},j=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:u},d=n(0),m=n(1077),O=n(1175),f=n(1249),p=n(1952),h=n(1568),x=f.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(m.a,{}):Object(c.jsx)(O.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(x,{tab:Object(s.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(c.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.secteurViolence.fields.nameAR"),children:t.nameAR})),Boolean(t.type)&&Boolean(t.type.length)&&Object(c.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.secteurViolence.fields.type"),children:Object(c.jsx)(h.a,{value:t.type})}))]})},"1"),Object(c.jsx)(x,{tab:Object(s.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.secteurViolence.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(x,{tab:Object(s.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(p.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(s.c)("entities.secteurViolence.fields.nameEN"),children:t.nameEN}))})},"3")]})})},g=n(1047),y=n(450),C=n(447),T=n(1093),w=n(201),R=n(228),V=n(1356),P=n(376),I=n(1508),U=n(1065),A=function(e){var t=Object(a.d)(),n=Object(i.h)(),r=Object(a.e)(R.a.selectPermissionToRead),o=Object(a.e)(V.a.selectPermissionToEdit),l=Object(a.e)(V.a.selectPermissionToDestroy),u=Object(a.e)(I.a.selectLoading),j=n.params.id;return Object(c.jsxs)(U.a,{children:[o&&Object(c.jsx)(w.a,{to:"/secteur-violence/".concat(j,"/edit"),children:Object(c.jsx)(y.a,{title:Object(s.c)("common.edit"),children:Object(c.jsx)(C.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),l&&Object(c.jsx)(T.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(j))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(c.jsx)(y.a,{title:Object(s.c)("common.destroy"),children:Object(c.jsx)(C.a,{type:"primary",disabled:u,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(c.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(c.jsx)(y.a,{title:Object(s.c)("auditLog.menu"),children:Object(c.jsx)(C.a,{icon:Object(c.jsx)(g.a,{})})})})]})},E=n(1062),B=n(1063),F=n(1056),D=n(1176),N=n(1177);t.default=function(e){var t=Object(a.d)(),n=Object(i.h)(),l=Object(a.e)(b.selectLoading),u=Object(a.e)(b.selectRecord);return Object(r.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.secteurViolence.menu"),"/secteur-violence"],[Object(s.c)("entities.secteurViolence.view.title")]]}),Object(c.jsxs)(E.a,{children:[Object(c.jsxs)(D.a,{children:[Object(c.jsx)(N.a,{span:16,children:Object(c.jsx)(F.a,{children:Object(s.c)("entities.secteurViolence.view.title")})}),Object(c.jsx)(N.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(A,{match:n})})]}),Object(c.jsx)(v,{loading:l,record:u})]})]})}}}]);