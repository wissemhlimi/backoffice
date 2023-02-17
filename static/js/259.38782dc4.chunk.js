(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[259],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(421).a.h1(a());t.a=r},1061:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1063:function(e,t,n){"use strict";var c=n(17),a=n(1107),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1067:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1080:function(e,t,n){"use strict";var c=n(17),a=n(1189);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1185:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1335:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonActionRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonActionEdit)})),b=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonActionCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonActionImport)})),l={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:b,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.raisonActionDestroy)})),selectPermissionToImport:j};t.a=l},1633:function(e,t,n){"use strict";var c=n(17),a=(n(6),n(201)),r=n(39),i=n(1335);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{to:"/raison-action/".concat(n.id),children:n.nameAR})},n.id):Object(c.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},1686:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.raisonAction.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2224:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(6),r=n(39),i=n(41),o=n(2),s=n(519),b=n(4),j=function(e){return e.raisonAction.view},l=Object(b.a)([j],(function(e){return e.record})),d={selectLoading:Object(b.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:j},u=n(0),O=n(1080),m=n(1185),f=n(1276),x=n(2120),h=n(1633),p=f.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(O.a,{}):Object(c.jsx)(m.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(p,{tab:Object(o.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.nameAR"),children:t.nameAR})),Boolean(t.abbrevAR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.abbrevAR"),children:t.abbrevAR})),Boolean(t.parent)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.parent"),children:Object(c.jsx)(h.a,{value:t.parent})}))]})},"1"),Object(c.jsx)(p,{tab:Object(o.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameFR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.nameFR"),children:t.nameFR})),Boolean(t.abbrevFR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.abbrevFR"),children:t.abbrevFR}))]})},"2"),Object(c.jsx)(p,{tab:Object(o.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameEN)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.nameEN"),children:t.nameEN})),Boolean(t.abbrevEN)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.raisonAction.fields.abbrevEN"),children:t.abbrevEN}))]})},"3")]})})},g=n(1047),A=n(450),R=n(447),y=n(1099),T=n(201),C=n(228),w=n(1335),I=n(396),E=n(1686),B=n(1067),F=function(e){var t=Object(r.d)(),n=Object(i.h)(),a=Object(r.e)(C.a.selectPermissionToRead),s=Object(r.e)(w.a.selectPermissionToEdit),b=Object(r.e)(w.a.selectPermissionToDestroy),j=Object(r.e)(E.a.selectLoading),l=n.params.id;return Object(c.jsxs)(B.a,{children:[s&&Object(c.jsx)(T.a,{to:"/raison-action/".concat(l,"/edit"),children:Object(c.jsx)(A.a,{title:Object(o.c)("common.edit"),children:Object(c.jsx)(R.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),b&&Object(c.jsx)(y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(l))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(A.a,{title:Object(o.c)("common.destroy"),children:Object(c.jsx)(R.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(T.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsx)(A.a,{title:Object(o.c)("auditLog.menu"),children:Object(c.jsx)(R.a,{icon:Object(c.jsx)(g.a,{})})})})]})},P=n(1061),N=n(1063),U=n(1056),L=n(1187),k=n(1188);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),b=Object(r.e)(d.selectLoading),j=Object(r.e)(d.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.raisonAction.menu"),"/raison-action"],[Object(o.c)("entities.raisonAction.view.title")]]}),Object(c.jsxs)(P.a,{children:[Object(c.jsxs)(L.a,{children:[Object(c.jsx)(k.a,{span:16,children:Object(c.jsx)(U.a,{children:Object(o.c)("entities.raisonAction.view.title")})}),Object(c.jsx)(k.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(F,{match:n})})]}),Object(c.jsx)(v,{loading:b,record:j})]})]})}}}]);