(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[259],{1056:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var r=n(421).a.h1(c());t.a=r},1062:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1063:function(e,t,n){"use strict";var a=n(17),c=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(c.a,{children:e.items.map((function(e){return Object(a.jsx)(c.a.Item,{children:t(e)?Object(a.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1077:function(e,t,n){"use strict";var a=n(17),c=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function c(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1269:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.mediaRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.mediaEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.mediaCreate)})),j=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.mediaImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.mediaDestroy)})),selectPermissionToImport:j};t.a=d},1280:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),i=n(142),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.typeMediaRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.typeMediaEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.typeMediaCreate)})),j=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.typeMediaImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.typeMediaDestroy)})),selectPermissionToImport:j};t.a=d},1532:function(e,t,n){"use strict";var a=n(4),c={selectLoading:Object(a.a)([function(e){return e.media.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},1984:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(6),r=n(39),i=n(41),s=n(2),o=n(523),l=n(4),j=function(e){return e.media.view},d=Object(l.a)([j],(function(e){return e.record})),u={selectLoading:Object(l.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:j},b=n(0),m=n(1077),O=n(1175),f=n(1249),p=n(1952),h=n(201),x=n(1280),v=function(e){var t=Object(r.e)(x.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(h.a,{to:"/type-media/".concat(n.id),children:n.nameAR})},n.id):Object(a.jsx)("div",{children:n.nameAR},n.id);var n}))}):null},g=f.a.TabPane,y=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(m.a,{}):Object(a.jsx)(O.a,{children:Object(a.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(a.jsx)(g,{tab:Object(s.c)("common.informationsAR"),children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(a.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(s.c)("entities.intervention.fields.nameAR"),children:t.nameAR})),Boolean(t.type)&&Object(a.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(s.c)("entities.media.fields.type"),children:Object(a.jsx)(v,{value:t.type})}))]})},"1"),Object(a.jsx)(g,{tab:Object(s.c)("common.informationsFR"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(a.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(s.c)("entities.intervention.fields.nameFR"),children:t.nameFR}))})},"2"),Object(a.jsx)(g,{tab:Object(s.c)("common.informationsEN"),children:Object(a.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(a.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(s.c)("entities.intervention.fields.nameEN"),children:t.nameEN}))})},"3")]})})},C=n(1047),T=n(450),w=n(447),R=n(1093),P=n(228),I=n(1269),U=n(400),A=n(1532),E=n(1065),B=function(e){var t=Object(r.d)(),n=Object(i.h)(),c=Object(r.e)(P.a.selectPermissionToRead),o=Object(r.e)(I.a.selectPermissionToEdit),l=Object(r.e)(I.a.selectPermissionToDestroy),j=Object(r.e)(A.a.selectLoading),d=n.params.id;return Object(a.jsxs)(E.a,{children:[o&&Object(a.jsx)(h.a,{to:"/media/".concat(d,"/edit"),children:Object(a.jsx)(T.a,{title:Object(s.c)("common.edit"),children:Object(a.jsx)(w.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),l&&Object(a.jsx)(R.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(U.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(a.jsx)(T.a,{title:Object(s.c)("common.destroy"),children:Object(a.jsx)(w.a,{type:"primary",disabled:j,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),c&&Object(a.jsx)(h.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(T.a,{title:Object(s.c)("auditLog.menu"),children:Object(a.jsx)(w.a,{icon:Object(a.jsx)(C.a,{})})})})]})},F=n(1062),D=n(1063),N=n(1056),L=n(1176),M=n(1177);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),l=Object(r.e)(u.selectLoading),j=Object(r.e)(u.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.media.menu"),"/media"],[Object(s.c)("entities.media.view.title")]]}),Object(a.jsxs)(F.a,{children:[Object(a.jsxs)(L.a,{children:[Object(a.jsx)(M.a,{span:16,children:Object(a.jsx)(N.a,{children:Object(s.c)("entities.media.view.title")})}),Object(a.jsx)(M.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(B,{match:n})})]}),Object(a.jsx)(y,{loading:l,record:j})]})]})}}}]);