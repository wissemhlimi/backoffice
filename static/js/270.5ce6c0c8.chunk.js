(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[270],{1056:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=n(421).a.h1(a());t.a=i},1062:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1063:function(e,t,n){"use strict";var c=n(17),a=n(1101),i=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a());t.a=i},1077:function(e,t,n){"use strict";var c=n(17),a=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(420);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=n(421).a.div(a()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},1286:function(e,t,n){"use strict";var c=n(4),a=n(29),i=n(50),r=n(142),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.categoryPublicationRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.categoryPublicationEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.categoryPublicationCreate)})),b=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.categoryPublicationImport)})),j={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(r.a.values.categoryPublicationDestroy)})),selectPermissionToImport:b};t.a=j},1487:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.categoryPublication.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},1993:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(1176),i=n(1177),r=n(6),o=n(39),s=n(41),l=n(2),b=n(489),j=n(4),d=function(e){return e.categoryPublication.view},u=Object(j.a)([d],(function(e){return e.record})),O={selectLoading:Object(j.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},m=n(0),f=n(1077),p=n(1175),x=n(1249),h=n(1952),g=x.a.TabPane,y=function(e){var t=e.record;if(e.loading||!t)return Object(c.jsx)(f.a,{});return Object(c.jsx)(p.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(l.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.title"),children:t.titleAR})),Boolean(t.descriptionAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.description"),children:t.descriptionAR}))]})},"1"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.title"),children:t.titleFR})),Boolean(t.descriptionFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.description"),children:t.descriptionFR}))]})},"2"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.title"),children:t.titleEN})),Boolean(t.descriptionEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},p.b),{},{label:Object(l.c)("entities.categoryPublication.fields.description"),children:t.descriptionEN}))]})},"3")]})})},v=n(1047),P=n(450),T=n(447),C=n(1093),R=n(201),w=n(228),I=n(1286),B=n(368),E=n(1487),A=n(1065),F=function(e){var t=Object(o.d)(),n=Object(s.h)(),a=Object(o.e)(w.a.selectPermissionToRead),i=Object(o.e)(I.a.selectPermissionToEdit),r=Object(o.e)(I.a.selectPermissionToDestroy),b=Object(o.e)(E.a.selectLoading),j=n.params.id;return Object(c.jsxs)(A.a,{children:[i&&Object(c.jsx)(R.a,{to:"/category-publication/".concat(j,"/edit"),children:Object(c.jsx)(P.a,{title:Object(l.c)("common.edit"),children:Object(c.jsx)(T.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),r&&Object(c.jsx)(C.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(B.a.doDestroy(j))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(c.jsx)(P.a,{title:Object(l.c)("common.destroy"),children:Object(c.jsx)(T.a,{type:"primary",disabled:b,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(R.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(c.jsx)(P.a,{title:Object(l.c)("auditLog.menu"),children:Object(c.jsx)(T.a,{icon:Object(c.jsx)(v.a,{})})})})]})},N=n(1062),U=n(1063),L=n(1056);t.default=function(e){var t=Object(o.d)(),n=Object(s.h)(),j=Object(o.e)(O.selectLoading),d=Object(o.e)(O.selectRecord);return Object(r.useEffect)((function(){t(b.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.categoryPublication.menu"),"/category-publication"],[Object(l.c)("entities.categoryPublication.view.title")]]}),Object(c.jsxs)(N.a,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsxs)(i.a,{span:16,children:[" ",Object(c.jsx)(L.a,{children:Object(l.c)("entities.categoryPublication.view.title")})]}),Object(c.jsx)(i.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(F,{match:n})})]}),Object(c.jsx)(y,{loading:j,record:d})]})]})}}}]);