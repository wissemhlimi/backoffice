(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[279],{1056:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var r=n(421).a.h1(c());t.a=r},1062:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1063:function(e,t,n){"use strict";var a=n(17),c=n(1101),r=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(c.a,{children:e.items.map((function(e){return Object(a.jsx)(c.a.Item,{children:t(e)?Object(a.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function c(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c());t.a=r},1077:function(e,t,n){"use strict";var a=n(17),c=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(420);function c(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(421).a.div(c()),s={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1482:function(e,t,n){"use strict";var a=n(4),c={selectLoading:Object(a.a)([function(e){return e.statsDashboard.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},1483:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(50),s=n(142),i=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.statsDashboardRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.statsDashboardEdit)})),b=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.statsDashboardCreate)})),j=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.statsDashboardImport)})),l={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:b,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.statsDashboardDestroy)})),selectPermissionToImport:j};t.a=l},1990:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(1176),r=n(1177),s=n(6),i=n(39),o=n(41),b=n(2),j=n(535),l=n(4),d=function(e){return e.statsDashboard.view},u=Object(l.a)([d],(function(e){return e.record})),O={selectLoading:Object(l.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},m=n(0),h=n(1077),f=n(1175),p=n(1951),x=n(1455),g=n.n(x),v=n(1248),y=v.a.TabPane,w=function(e){var t=e.record,n=function(e){return{__html:g.a.sanitize(e)}};return e.loading||!t?Object(a.jsx)(h.a,{}):Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(a.jsx)(y,{tab:Object(b.c)("common.informations"),children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("legend",{children:["\xa0 \xa0",Object(b.c)("common.informations")]}),Object(a.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.statsDashboard.fields.show"),children:t.show?Object(b.c)("common.yes"):Object(b.c)("common.no")})),Boolean(t.titleAR)&&Object(a.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.publication.fields.titleAR"),children:t.titleAR})),Boolean(t.titleFR)&&Object(a.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.publication.fields.titleFR"),children:t.titleFR})),Boolean(t.descriptionAR)&&Object(a.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.statsDashboard.fields.description"),children:Object(a.jsx)("div",{className:"preview",dangerouslySetInnerHTML:n(t.descriptionAR)})}))]})},"1"),Object(a.jsx)(y,{tab:Object(b.c)("common.informationsFR"),children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("legend",{children:["\xa0 \xa0",Object(b.c)("common.informationsFR")]}),Boolean(t.descriptionFR)&&Object(a.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.statsDashboard.fields.description"),children:Object(a.jsx)("div",{className:"preview",dangerouslySetInnerHTML:n(t.descriptionFR)})}))]})},"2")]})})},C=n(1047),D=n(450),R=n(447),T=n(1093),I=n(201),F=n(228),P=n(1483),A=n(411),B=n(1482),L=n(1065),U=function(e){var t=Object(i.d)(),n=Object(o.h)(),c=Object(i.e)(F.a.selectPermissionToRead),r=Object(i.e)(P.a.selectPermissionToEdit),s=Object(i.e)(P.a.selectPermissionToDestroy),j=Object(i.e)(B.a.selectLoading),l=n.params.id;return Object(a.jsxs)(L.a,{children:[r&&Object(a.jsx)(I.a,{to:"/statsDashboard/".concat(l,"/edit"),children:Object(a.jsx)(D.a,{title:Object(b.c)("common.edit"),children:Object(a.jsx)(R.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&Object(a.jsx)(T.a,{title:Object(b.c)("common.areYouSure"),onConfirm:function(){t(A.a.doDestroy(l))},okText:Object(b.c)("common.yes"),cancelText:Object(b.c)("common.no"),children:Object(a.jsx)(D.a,{title:Object(b.c)("common.destroy"),children:Object(a.jsx)(R.a,{type:"primary",disabled:j,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),c&&Object(a.jsx)(I.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(a.jsx)(D.a,{title:Object(b.c)("auditLog.menu"),children:Object(a.jsx)(R.a,{icon:Object(a.jsx)(C.a,{})})})})]})},k=n(1062),E=n(1063),N=n(1056);t.default=function(e){var t=Object(i.d)(),n=Object(o.h)(),l=Object(i.e)(O.selectLoading),d=Object(i.e)(O.selectRecord);return Object(s.useEffect)((function(){t(j.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E.a,{items:[[Object(b.c)("dashboard.menu"),"/"],[Object(b.c)("entities.statsDashboard.menu"),"/statsDashboard"],[Object(b.c)("entities.statsDashboard.view.title")]]}),Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(r.a,{span:16,children:Object(a.jsx)(N.a,{children:Object(b.c)("entities.statsDashboard.view.title")})}),Object(a.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(U,{match:n})})]}),Object(a.jsx)(w,{loading:l,record:d})]})]})}}}]);