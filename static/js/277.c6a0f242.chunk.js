(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[277],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(421).a.h1(a());t.a=r},1062:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1416:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.objectViolenceRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.objectViolenceEdit)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.objectViolenceCreate)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.objectViolenceImport)})),b={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:j,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.objectViolenceDestroy)})),selectPermissionToImport:l};t.a=b},1505:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.objectViolence.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2016:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(6),r=n(39),i=n(41),o=n(2),s=n(494),j=n(4),l=function(e){return e.objectViolence.view},b=Object(j.a)([l],(function(e){return e.record})),d={selectLoading:Object(j.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:l},u=n(0),m=n(1077),O=n(1175),f=n(1249),x=n(1952),h=f.a.TabPane,p=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(m.a,{}):Object(c.jsx)(O.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(h,{tab:Object(o.c)("common.informationsAR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameAR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},O.b),{},{label:Object(o.c)("entities.objectViolence.fields.nameAR"),children:t.nameAR}))})},"1"),Object(c.jsx)(h,{tab:Object(o.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},O.b),{},{label:Object(o.c)("entities.objectViolence.fields.nameFR"),children:t.nameFR}))})},"2"),Object(c.jsx)(h,{tab:Object(o.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(c.jsx)(x.a.Item,Object(u.a)(Object(u.a)({},O.b),{},{label:Object(o.c)("entities.objectViolence.fields.nameEN"),children:t.nameEN}))})},"3")]})})},v=n(1047),g=n(450),y=n(447),T=n(1093),C=n(201),w=n(228),R=n(1416),V=n(373),I=n(1505),P=n(1065),E=function(e){var t=Object(r.d)(),n=Object(i.h)(),a=Object(r.e)(w.a.selectPermissionToRead),s=Object(r.e)(R.a.selectPermissionToEdit),j=Object(r.e)(R.a.selectPermissionToDestroy),l=Object(r.e)(I.a.selectLoading),b=n.params.id;return Object(c.jsxs)(P.a,{children:[s&&Object(c.jsx)(C.a,{to:"/object-violence/".concat(b,"/edit"),children:Object(c.jsx)(g.a,{title:Object(o.c)("common.edit"),children:Object(c.jsx)(y.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),j&&Object(c.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(V.a.doDestroy(b))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(g.a,{title:Object(o.c)("common.destroy"),children:Object(c.jsx)(y.a,{type:"primary",disabled:l,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(c.jsx)(g.a,{title:Object(o.c)("auditLog.menu"),children:Object(c.jsx)(y.a,{icon:Object(c.jsx)(v.a,{})})})})]})},A=n(1062),B=n(1063),F=n(1056),N=n(1176),U=n(1177);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),j=Object(r.e)(d.selectLoading),l=Object(r.e)(d.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.objectViolence.menu"),"/object-violence"],[Object(o.c)("entities.objectViolence.view.title")]]}),Object(c.jsxs)(A.a,{children:[Object(c.jsxs)(N.a,{children:[Object(c.jsx)(U.a,{span:16,children:Object(c.jsx)(F.a,{children:Object(o.c)("entities.objectViolence.view.title")})}),Object(c.jsx)(U.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(E,{match:n})})]}),Object(c.jsx)(p,{loading:j,record:l})]})]})}}}]);