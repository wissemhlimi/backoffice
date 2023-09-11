(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[265],{1040:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var a=n(411).a.h1(i());t.a=a},1045:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var a=n(411).a.div(i());t.a=a},1046:function(e,t,n){"use strict";var c=n(17),i=n(1084),a=(n(6),n(197));t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(i.a,{children:e.items.map((function(e){return Object(c.jsx)(i.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1049:function(e,t,n){"use strict";var c=n(410);function i(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return i=function(){return e},e}var a=n(411).a.div(i());t.a=a},1061:function(e,t,n){"use strict";var c=n(17),i=n(1164);n(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(i.a,{})})}},1138:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var c=n(410);function i(){var e=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return i=function(){return e},e}var a=n(411).a.div(i()),r={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},1340:function(e,t,n){"use strict";var c=n(4),i=n(29),a=n(50),r=n(141),o=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.revendicationRead)})),s=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.revendicationEdit)})),j=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.revendicationCreate)})),b=Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.revendicationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:j,selectPermissionToDestroy:Object(c.a)([i.a.selectCurrentTenant,i.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(r.a.values.revendicationDestroy)})),selectPermissionToImport:b};t.a=d},1498:function(e,t,n){"use strict";var c=n(4),i={selectLoading:Object(c.a)([function(e){return e.revendication.destroy}],(function(e){return Boolean(e.loading)}))};t.a=i},2011:function(e,t,n){"use strict";n.r(t);var c=n(17),i=n(6),a=n(39),r=n(41),o=n(2),s=n(504),j=n(4),b=function(e){return e.revendication.view},d=Object(j.a)([b],(function(e){return e.record})),l={selectLoading:Object(j.a)([b],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:b},u=n(0),O=n(1061),m=n(1138),f=n(1239),v=n(1916),p=f.a.TabPane,x=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(O.a,{}):Object(c.jsx)(m.a,{children:Object(c.jsxs)(f.a,{defaultActiveKey:"0",onChange:function(e){},children:[Object(c.jsx)(p,{tab:Object(o.c)("common.informations"),children:Object(c.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.accordsNonApplique"),children:t.accordsNonApplique?Object(o.c)("common.yes"):Object(o.c)("common.no")})),Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.promessesNonRetenues"),children:t.promessesNonRetenues?Object(o.c)("common.yes"):Object(o.c)("common.no")})),Boolean(t.cible)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.cible"),children:Object(o.c)("entities.revendication.enumerators.cible.".concat(t.cible))})),Boolean(t.typologie)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.typologie"),children:Object(o.c)("entities.revendication.enumerators.typologie.".concat(t.typologie))})),Boolean(t.secteur)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.secteur"),children:Object(o.c)("entities.revendication.enumerators.secteur.".concat(t.secteur))})),Boolean(t.revendicationAR)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.revendication"),children:t.revendicationAR}))]})},"0"),Object(c.jsx)(p,{tab:Object(o.c)("common.informationsFR"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.revendicationFR)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.revendication"),children:t.revendicationFR}))})},"2"),Object(c.jsx)(p,{tab:Object(o.c)("common.informationsEN"),children:Object(c.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.revendicationEN)&&Object(c.jsx)(v.a.Item,Object(u.a)(Object(u.a)({},m.b),{},{label:Object(o.c)("entities.revendication.fields.revendication"),children:t.revendicationEN}))})},"3")]})})},h=n(1031),g=n(440),y=n(437),T=n(1077),C=n(197),w=n(224),I=n(1340),R=n(383),B=n(1498),N=n(1049),P=function(e){var t=Object(a.d)(),n=Object(r.h)(),i=Object(a.e)(w.a.selectPermissionToRead),s=Object(a.e)(I.a.selectPermissionToEdit),j=Object(a.e)(I.a.selectPermissionToDestroy),b=Object(a.e)(B.a.selectLoading),d=n.params.id;return Object(c.jsxs)(N.a,{children:[s&&Object(c.jsx)(C.a,{to:"/revendication/".concat(d,"/edit"),children:Object(c.jsx)(g.a,{title:Object(o.c)("common.edit"),children:Object(c.jsx)(y.a,{type:"primary",children:Object(c.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),j&&Object(c.jsx)(T.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(d))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(c.jsx)(g.a,{title:Object(o.c)("common.destroy"),children:Object(c.jsx)(y.a,{type:"primary",disabled:b,children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),i&&Object(c.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(c.jsx)(g.a,{title:Object(o.c)("auditLog.menu"),children:Object(c.jsx)(y.a,{icon:Object(c.jsx)(h.a,{})})})})]})},E=n(1045),A=n(1046),U=n(1040),F=n(1162),L=n(1163);t.default=function(e){var t=Object(a.d)(),n=Object(r.h)(),j=Object(a.e)(l.selectLoading),b=Object(a.e)(l.selectRecord);return Object(i.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.revendication.menu"),"/revendication"],[Object(o.c)("entities.revendication.view.title")]]}),Object(c.jsxs)(E.a,{children:[Object(c.jsxs)(F.a,{children:[Object(c.jsx)(L.a,{span:16,children:Object(c.jsx)(U.a,{children:Object(o.c)("entities.revendication.view.title")})}),Object(c.jsx)(L.a,{span:8,style:{textAlign:"end"},children:Object(c.jsx)(P,{match:n})})]}),Object(c.jsx)(x,{loading:j,record:b})]})]})}}}]);