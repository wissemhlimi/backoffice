(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[72],{1302:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(43),c=n(36),i=n(3),s=n(245),o=n(5),u=function(e){return e.pRODUCTunit.view},l=Object(o.a)([u],(function(e){return e.record})),d={selectLoading:Object(o.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:u},j=n(0),b=n(655),O=n(752),m=n(1286),p=n(961),f=n(95),h=n(855),C=n(12),v=function(e){var t=Object(a.e)(h.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(C.jsx)(C.Fragment,{children:n().map((function(e){return n=e,t?Object(C.jsx)("div",{children:Object(C.jsx)(f.a,{to:"/produr/".concat(n.id),children:n.produrTitle})},n.id):Object(C.jsx)("div",{children:n.produrTitle},n.id);var n}))}):null},T=function(e){var t=e.record;return e.loading||!t?Object(C.jsx)(b.a,{}):Object(C.jsxs)(O.a,{children:[Boolean(t.prodId)&&Object(C.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.pRODUCTunit.fields.prodId"),children:Object(C.jsx)(p.a,{value:t.prodId})})),Boolean(t.produrId)&&Object(C.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.pRODUCTunit.fields.produrId"),children:Object(C.jsx)(v,{value:t.produrId})})),Boolean(t.pRODlineUQ)&&Object(C.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.pRODUCTunit.fields.pRODlineUQ"),children:t.pRODlineUQ}))]})},x=n(847),g=n(692),U=n(608),R=n(206),w=n(690),y=n(139),D=n(944),P=n(176),I=n(943),E=n(634),B=function(e){var t=Object(a.d)(),n=Object(c.h)(),r=Object(a.e)(y.a.selectPermissionToRead),s=Object(a.e)(D.a.selectPermissionToEdit),o=Object(a.e)(D.a.selectPermissionToDestroy),u=Object(a.e)(I.a.selectLoading),l=n.params.id;return Object(C.jsxs)(E.a,{children:[s&&Object(C.jsx)(f.a,{to:"/p-r-o-d-u-c-tunit/".concat(l,"/edit"),children:Object(C.jsx)(R.a,{type:"primary",icon:Object(C.jsx)(x.a,{}),children:Object(i.c)("common.edit")})}),o&&Object(C.jsx)(w.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(l))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(C.jsx)(R.a,{type:"primary",icon:Object(C.jsx)(g.a,{}),disabled:u,children:Object(i.c)("common.destroy")})}),r&&Object(C.jsx)(f.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(C.jsx)(R.a,{icon:Object(C.jsx)(U.a,{}),children:Object(i.c)("auditLog.menu")})})]})},L=n(623),k=n(625),A=n(624);t.default=function(e){var t=Object(a.d)(),n=Object(c.h)(),o=Object(a.e)(d.selectLoading),u=Object(a.e)(d.selectRecord);return Object(r.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.pRODUCTunit.menu"),"/p-r-o-d-u-c-tunit"],[Object(i.c)("entities.pRODUCTunit.view.title")]]}),Object(C.jsxs)(L.a,{children:[Object(C.jsx)(A.a,{children:Object(i.c)("entities.pRODUCTunit.view.title")}),Object(C.jsx)(B,{match:n}),Object(C.jsx)(T,{loading:o,record:u})]})]})}},623:function(e,t,n){"use strict";var r,a=n(183),c=n(184).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},624:function(e,t,n){"use strict";var r,a=n(183),c=n(184).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},625:function(e,t,n){"use strict";var r=n(669),a=(n(1),n(95)),c=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,t,n){"use strict";var r,a=n(183),c=n(184).a.div(r||(r=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=c},655:function(e,t,n){"use strict";var r=n(654),a=(n(1),n(12));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},752:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r,a=n(183),c=n(184).a.div(r||(r=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},807:function(e,t,n){"use strict";var r=n(5),a=n(40),c=n(77),i=n(185),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productDestroy)})),selectPermissionToImport:l};t.a=d},855:function(e,t,n){"use strict";var r=n(5),a=n(40),c=n(77),i=n(185),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrDestroy)})),selectPermissionToImport:l};t.a=d},943:function(e,t,n){"use strict";var r=n(5),a={selectLoading:Object(r.a)([function(e){return e.pRODUCTunit.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},944:function(e,t,n){"use strict";var r=n(5),a=n(40),c=n(77),i=n(185),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitDestroy)})),selectPermissionToImport:l};t.a=d},961:function(e,t,n){"use strict";n(1);var r=n(95),a=n(43),c=n(807),i=n(12);t.a=function(e){var t=Object(a.e)(c.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(i.jsx)(i.Fragment,{children:n().map((function(e){return n=e,t?Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{to:"/product/".concat(n.id),children:n.prodName})},n.id):Object(i.jsx)("div",{children:n.prodName},n.id);var n}))}):null}}}]);