(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[245],{1046:function(e,t,n){"use strict";var r=n(415);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(416).a.h1(a());t.a=c},1051:function(e,t,n){"use strict";var r=n(415);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(416).a.div(a());t.a=c},1052:function(e,t,n){"use strict";var r=n(17),a=n(1093),c=(n(6),n(199));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1057:function(e,t,n){"use strict";var r=n(415);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(416).a.div(a());t.a=c},1072:function(e,t,n){"use strict";var r=n(17),a=n(1073);n(6);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},1202:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(415);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(416).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1258:function(e,t,n){"use strict";var r=n(4),a=n(29),c=n(50),i=n(143),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratRead)})),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratImport)})),j={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.gouvernoratDestroy)})),selectPermissionToImport:u};t.a=j},1337:function(e,t,n){"use strict";var r=n(4),a=n(29),c=n(50),i=n(143),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.regionRead)})),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.regionEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.regionCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.regionImport)})),j={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.regionDestroy)})),selectPermissionToImport:u};t.a=j},1572:function(e,t,n){"use strict";var r=n(17),a=(n(6),n(199)),c=n(39),i=n(1258);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{to:"/gouvernorat/".concat(n.id),children:n.nameAR})},n.id):Object(r.jsx)("div",{children:n.nameAR},n.id);var n}))}):null}},1674:function(e,t,n){"use strict";var r=n(4),a={selectLoading:Object(r.a)([function(e){return e.region.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2176:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(6),c=n(39),i=n(41),o=n(2),s=n(494),l=n(4),u=function(e){return e.region.view},j=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:u},d=n(0),m=n(1072),O=n(1202),f=n(1252),h=n(2103),g=n(1572),x=f.a.TabPane,v=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(m.a,{}):Object(r.jsx)(O.a,{children:Object(r.jsxs)(f.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(r.jsx)(x,{tab:Object(o.c)("common.informationsAR"),children:Object(r.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(t.nameAR)&&Object(r.jsx)(h.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.region.fields.nameAR"),children:t.nameAR})),Boolean(t.gouvernorats)&&Boolean(t.gouvernorats.length)&&Object(r.jsx)(h.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.region.fields.gouvernorats"),children:Object(r.jsx)(g.a,{value:t.gouvernorats})}))]})},"1"),Object(r.jsx)(x,{tab:Object(o.c)("common.informationsFR"),children:Object(r.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameFR)&&Object(r.jsx)(h.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.region.fields.nameFR"),children:t.nameFR}))})},"2"),Object(r.jsx)(x,{tab:Object(o.c)("common.informationsEN"),children:Object(r.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(t.nameEN)&&Object(r.jsx)(h.a.Item,Object(d.a)(Object(d.a)({},O.b),{},{label:Object(o.c)("entities.region.fields.nameEN"),children:t.nameEN}))})},"3")]})})},p=n(1037),C=n(444),T=n(443),y=n(1092),w=n(199),R=n(226),P=n(1337),I=n(375),U=n(1674),A=n(1057),E=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(R.a.selectPermissionToRead),s=Object(c.e)(P.a.selectPermissionToEdit),l=Object(c.e)(P.a.selectPermissionToDestroy),u=Object(c.e)(U.a.selectLoading),j=n.params.id;return Object(r.jsxs)(A.a,{children:[s&&Object(r.jsx)(w.a,{to:"/region/".concat(j,"/edit"),children:Object(r.jsx)(C.a,{title:Object(o.c)("common.edit"),children:Object(r.jsx)(T.a,{type:"primary",children:Object(r.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),l&&Object(r.jsx)(y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(j))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(r.jsx)(C.a,{title:Object(o.c)("common.destroy"),children:Object(r.jsx)(T.a,{type:"primary",disabled:u,children:Object(r.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(r.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(r.jsx)(C.a,{title:Object(o.c)("auditLog.menu"),children:Object(r.jsx)(T.a,{icon:Object(r.jsx)(p.a,{})})})})]})},B=n(1051),F=n(1052),D=n(1046),N=n(1149),L=n(1150);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),l=Object(c.e)(b.selectLoading),u=Object(c.e)(b.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.region.menu"),"/region"],[Object(o.c)("entities.region.view.title")]]}),Object(r.jsxs)(B.a,{children:[Object(r.jsxs)(N.a,{children:[Object(r.jsx)(L.a,{span:16,children:Object(r.jsx)(D.a,{children:Object(o.c)("entities.region.view.title")})}),Object(r.jsx)(L.a,{span:8,style:{textAlign:"end"},children:Object(r.jsx)(E,{match:n})})]}),Object(r.jsx)(v,{loading:l,record:u})]})]})}}}]);