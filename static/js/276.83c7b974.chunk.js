(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[276],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=n(421).a.h1(a());t.a=i},1062:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),i=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},1353:function(e,t,n){"use strict";var c=n(4),a=n(29),i=n(50),r=n(142),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.modeSuicideRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.modeSuicideEdit)})),d=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.modeSuicideCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.modeSuicideImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:d,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.modeSuicideDestroy)})),selectPermissionToImport:j};t.a=u},1519:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.modeSuicide.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2041:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(6),i=n(39),r=n(41),o=n(2),s=n(510),d=n(4),j=function(e){return e.modeSuicide.view},u=Object(d.a)([j],(function(e){return e.record})),l={selectLoading:Object(d.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:j},b=n(0),m=n(1077),O=n(1175),f=n(1248),x=n(1951),h=f.a.TabPane,p=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(m.a,{}):Object(c.jsx)(O.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(h,{tab:Object(o.c)("common.informationsAR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameAR)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(o.c)("entities.modeSuicide.fields.nameAR"),children:t.nameAR}))})},"1"),Object(c.jsx)(h,{tab:Object(o.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(o.c)("entities.modeSuicide.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(h,{tab:Object(o.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(x.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(o.c)("entities.modeSuicide.fields.nameEN"),children:t.nameEN}))})},"3")]})})},g=n(1047),v=n(450),y=n(447),T=n(1093),C=n(201),w=n(228),R=n(1353),S=n(388),I=n(1519),P=n(1065),E=function(e){var t=Object(i.d)(),n=Object(r.h)(),a=Object(i.e)(w.a.selectPermissionToRead),s=Object(i.e)(R.a.selectPermissionToEdit),d=Object(i.e)(R.a.selectPermissionToDestroy),j=Object(i.e)(I.a.selectLoading),u=n.params.id;return Object(c.jsxs)(P.a,{children:[s&&Object(c.jsx)(C.a,{to:"/mode-suicide/".concat(u,"/edit"),children:Object(c.jsx)(v.a,{title:Object(o.c)("common.edit"),children:Object(c.jsx)(y.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),d&&Object(c.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(S.a.doDestroy(u))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(v.a,{title:Object(o.c)("common.destroy"),children:Object(c.jsx)(y.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(c.jsx)(v.a,{title:Object(o.c)("auditLog.menu"),children:Object(c.jsx)(y.a,{icon:Object(c.jsx)(g.a,{})})})})]})},A=n(1062),B=n(1063),F=n(1056),N=n(1176),U=n(1177);t.default=function(e){var t=Object(i.d)(),n=Object(r.h)(),d=Object(i.e)(l.selectLoading),j=Object(i.e)(l.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.modeSuicide.menu"),"/mode-suicide"],[Object(o.c)("entities.modeSuicide.view.title")]]}),Object(c.jsxs)(A.a,{children:[Object(c.jsxs)(N.a,{children:[Object(c.jsx)(U.a,{span:16,children:Object(c.jsx)(F.a,{children:Object(o.c)("entities.modeSuicide.view.title")})}),Object(c.jsx)(U.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(E,{match:n})})]}),Object(c.jsx)(p,{loading:d,record:j})]})]})}}}]);