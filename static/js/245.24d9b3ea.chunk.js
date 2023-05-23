(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[245],{1031:function(e,t,n){"use strict";var c=n(405);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=n(406).a.h1(a());t.a=r},1037:function(e,t,n){"use strict";var c=n(405);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=n(406).a.div(a());t.a=r},1038:function(e,t,n){"use strict";var c=n(17),a=n(1075),r=(n(6),n(195));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1040:function(e,t,n){"use strict";var c=n(405);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(406).a.div(a());t.a=r},1052:function(e,t,n){"use strict";var c=n(17),a=n(1157);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},1150:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(405);function a(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(406).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},1265:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(50),i=n(139),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.espaceActionRead)})),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.espaceActionEdit)})),b=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.espaceActionCreate)})),j=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.espaceActionImport)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:b,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.espaceActionDestroy)})),selectPermissionToImport:j};t.a=l},1483:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.espaceAction.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},1537:function(e,t,n){"use strict";var c=n(17),a=(n(6),n(195)),r=n(39),i=n(1265);t.a=function(e){var t=Object(r.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsx)(c.Fragment,{children:n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{to:"/espace-action/".concat(n.id),children:n.nameAR})},n.id):Object(c.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},2003:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(1153),r=n(1154),i=n(6),s=n(39),o=n(41),b=n(2),j=n(499),l=n(4),d=function(e){return e.espaceAction.view},u=Object(l.a)([d],(function(e){return e.record})),O={selectLoading:Object(l.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:d},m=n(0),p=n(1052),f=n(1150),x=n(1230),h=n(1908),v=n(1537),g=x.a.TabPane,A=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(p.a,{}):Object(c.jsx)(f.a,{children:Object(c.jsxs)(x.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(c.jsx)(g,{tab:Object(b.c)("common.informationsAR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.nameAR"),children:t.nameAR})),Boolean(t.abbrevAR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.abbrevAR"),children:t.abbrevAR})),Boolean(t.parent)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.parent"),children:Object(c.jsx)(v.a,{value:t.parent})}))]})},"1"),Object(c.jsx)(g,{tab:Object(b.c)("common.informationsFR"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.nameFR"),children:t.nameFR})),Boolean(t.abbrevFR)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.abbrevFR"),children:t.abbrevFR}))]})},"2"),Object(c.jsx)(g,{tab:Object(b.c)("common.informationsEN"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.nameEN"),children:t.nameEN})),Boolean(t.abbrevEN)&&Object(c.jsx)(h.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(b.c)("entities.espaceAction.fields.abbrevEN"),children:t.abbrevEN}))]})},"3")]})})},R=n(1022),y=n(435),T=n(432),C=n(1068),w=n(195),I=n(222),E=n(1265),B=n(379),F=n(1483),P=n(1040),N=function(e){var t=Object(s.d)(),n=Object(o.h)(),a=Object(s.e)(I.a.selectPermissionToRead),r=Object(s.e)(E.a.selectPermissionToEdit),i=Object(s.e)(E.a.selectPermissionToDestroy),j=Object(s.e)(F.a.selectLoading),l=n.params.id;return Object(c.jsxs)(P.a,{children:[r&&Object(c.jsx)(w.a,{to:"/espace-action/".concat(l,"/edit"),children:Object(c.jsx)(y.a,{title:Object(b.c)("common.edit"),children:Object(c.jsx)(T.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(c.jsx)(C.a,{title:Object(b.c)("common.areYouSure"),onConfirm:function(){t(B.a.doDestroy(l))},okText:Object(b.c)("common.yes"),cancelText:Object(b.c)("common.no"),children:Object(c.jsx)(y.a,{title:Object(b.c)("common.destroy"),children:Object(c.jsx)(T.a,{type:"primary",disabled:j,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(c.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsx)(y.a,{title:Object(b.c)("auditLog.menu"),children:Object(c.jsx)(T.a,{icon:Object(c.jsx)(R.a,{})})})})]})},U=n(1037),L=n(1038),k=n(1031);t.default=function(e){var t=Object(s.d)(),n=Object(o.h)(),l=Object(s.e)(O.selectLoading),d=Object(s.e)(O.selectRecord);return Object(i.useEffect)((function(){t(j.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L.a,{items:[[Object(b.c)("dashboard.menu"),"/"],[Object(b.c)("entities.espaceAction.menu"),"/espace-action"],[Object(b.c)("entities.espaceAction.view.title")]]}),Object(c.jsxs)(U.a,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)(r.a,{span:16,children:Object(c.jsx)(k.a,{children:Object(b.c)("entities.espaceAction.view.title")})}),Object(c.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(N,{match:n})})]}),Object(c.jsx)(A,{loading:l,record:d})]})]})}}}]);