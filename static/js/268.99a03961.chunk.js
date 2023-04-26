(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[268],{1056:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var a=n(421).a.h1(r());t.a=a},1062:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var a=n(421).a.div(r());t.a=a},1063:function(e,t,n){"use strict";var c=n(17),r=n(1101),a=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var c=n(420);function r(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(421).a.div(r());t.a=a},1077:function(e,t,n){"use strict";var c=n(17),r=n(1178);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(420);function r(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var a=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},1282:function(e,t,n){"use strict";var c=n(4),r=n(29),a=n(50),i=n(142),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.categoryForumRead)})),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.categoryForumEdit)})),l=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.categoryForumCreate)})),j=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.categoryForumImport)})),b={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.categoryForumDestroy)})),selectPermissionToImport:j};t.a=b},1489:function(e,t,n){"use strict";var c=n(4),r={selectLoading:Object(c.a)([function(e){return e.categoryForum.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1995:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(1176),a=n(1177),i=n(6),o=n(39),s=n(41),l=n(2),j=n(479),b=n(4),d=function(e){return e.categoryForum.view},u=Object(b.a)([d],(function(e){return e.record})),m={selectLoading:Object(b.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},O=n(0),f=n(1077),p=n(1175),x=n(1248),h=n(1951),g=x.a.TabPane,y=function(e){var t=e.record;if(e.loading||!t)return Object(c.jsx)(f.a,{});return Object(c.jsx)(p.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(l.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleAR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.title"),children:t.titleAR})),Boolean(t.descriptionAR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.description"),children:t.descriptionAR}))]})},"1"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleFR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.title"),children:t.titleFR})),Boolean(t.descriptionFR)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.description"),children:t.descriptionFR}))]})},"2"),Object(c.jsx)(g,{tab:Object(l.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.titleEN)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.title"),children:t.titleEN})),Boolean(t.descriptionEN)&&Object(c.jsx)(h.a.Item,Object(O.a)(Object(O.a)({},p.b),{},{label:Object(l.c)("entities.categoryForum.fields.description"),children:t.descriptionEN}))]})},"3")]})})},v=n(1047),F=n(450),T=n(447),C=n(1093),R=n(201),w=n(228),I=n(1282),B=n(358),E=n(1489),P=n(1065),A=function(e){var t=Object(o.d)(),n=Object(s.h)(),r=Object(o.e)(w.a.selectPermissionToRead),a=Object(o.e)(I.a.selectPermissionToEdit),i=Object(o.e)(I.a.selectPermissionToDestroy),j=Object(o.e)(E.a.selectLoading),b=n.params.id;return Object(c.jsxs)(P.a,{children:[a&&Object(c.jsx)(R.a,{to:"/category-forum/".concat(b,"/edit"),children:Object(c.jsx)(F.a,{title:Object(l.c)("common.edit"),children:Object(c.jsx)(T.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(c.jsx)(C.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(B.a.doDestroy(b))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(c.jsx)(F.a,{title:Object(l.c)("common.destroy"),children:Object(c.jsx)(T.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(c.jsx)(R.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(c.jsx)(F.a,{title:Object(l.c)("auditLog.menu"),children:Object(c.jsx)(T.a,{icon:Object(c.jsx)(v.a,{})})})})]})},N=n(1062),U=n(1063),L=n(1056);t.default=function(e){var t=Object(o.d)(),n=Object(s.h)(),b=Object(o.e)(m.selectLoading),d=Object(o.e)(m.selectRecord);return Object(i.useEffect)((function(){t(j.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.categoryForum.menu"),"/category-forum"],[Object(l.c)("entities.categoryForum.view.title")]]}),Object(c.jsxs)(N.a,{children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)(a.a,{span:16,children:Object(c.jsx)(L.a,{children:Object(l.c)("entities.categoryForum.view.title")})}),Object(c.jsx)(a.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(A,{match:n})})]}),Object(c.jsx)(y,{loading:b,record:d})]})]})}}}]);