(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[269],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(421).a.h1(a());t.a=r},1062:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a());t.a=r},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(421).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1285:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(142),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryGlossaireRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryGlossaireEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryGlossaireCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryGlossaireImport)})),b={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categoryGlossaireDestroy)})),selectPermissionToImport:j};t.a=b},1503:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.categoryGlossaire.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2014:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(1176),r=n(1177),i=n(6),s=n(39),o=n(41),l=n(2),j=n(493),b=n(4),d=function(e){return e.categoryGlossaire.view},u=Object(b.a)([d],(function(e){return e.record})),O={selectLoading:Object(b.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},m=n(0),f=n(1077),p=n(1175),x=n(1248),h=n(1951),g=x.a.TabPane,y=function(e){var t=e.record;if(e.loading||!t)return Object(c.jsx)(f.a,{});return Object(c.jsx)(p.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(l.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.title"),children:t.titleAR})),Boolean(t.descriptionAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.description"),children:t.descriptionAR}))]})},"1"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.title"),children:t.titleFR})),Boolean(t.descriptionFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.description"),children:t.descriptionFR}))]})},"2"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.title"),children:t.titleEN})),Boolean(t.descriptionEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryGlossaire.fields.description"),children:t.descriptionEN}))]})},"3")]})})},v=n(1047),T=n(450),C=n(447),R=n(1093),w=n(201),G=n(228),I=n(1285),B=n(372),E=n(1503),P=n(1065),A=function(e){var t=Object(s.d)(),n=Object(o.h)(),a=Object(s.e)(G.a.selectPermissionToRead),r=Object(s.e)(I.a.selectPermissionToEdit),i=Object(s.e)(I.a.selectPermissionToDestroy),j=Object(s.e)(E.a.selectLoading),b=n.params.id;return Object(c.jsxs)(P.a,{children:[r&&Object(c.jsx)(w.a,{to:"/category-glossaire/".concat(b,"/edit"),children:Object(c.jsx)(T.a,{title:Object(l.c)("common.edit"),children:Object(c.jsx)(C.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(c.jsx)(R.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(B.a.doDestroy(b))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(c.jsx)(T.a,{title:Object(l.c)("common.destroy"),children:Object(c.jsx)(C.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(c.jsx)(T.a,{title:Object(l.c)("auditLog.menu"),children:Object(c.jsx)(C.a,{icon:Object(c.jsx)(v.a,{})})})})]})},F=n(1062),N=n(1063),U=n(1056);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),b=Object(s.e)(O.selectLoading),d=Object(s.e)(O.selectRecord);return Object(i.useEffect)((function(){t(j.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.categoryGlossaire.menu"),"/category-glossaire"],[Object(l.c)("entities.categoryGlossaire.view.title")]]}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)(r.a,{span:16,children:Object(c.jsx)(U.a,{children:Object(l.c)("entities.categoryGlossaire.view.title")})}),Object(c.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(A,{match:n})})]}),Object(c.jsx)(y,{loading:b,record:d})]})]})}}}]);