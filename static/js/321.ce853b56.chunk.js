(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[321],{1334:function(e,t,c){"use strict";var a=c(4),n=c(29),i=c(50),s=c(142),r=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(s.a.values.typeMediaRead)})),j=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(s.a.values.typeMediaEdit)})),o=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(s.a.values.typeMediaCreate)})),l=Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(s.a.values.typeMediaImport)})),d={selectPermissionToRead:r,selectPermissionToEdit:j,selectPermissionToCreate:o,selectPermissionToDestroy:Object(a.a)([n.a.selectCurrentTenant,n.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(s.a.values.typeMediaDestroy)})),selectPermissionToImport:l};t.a=d},1691:function(e,t,c){"use strict";var a=c(4),n={selectLoading:Object(a.a)([function(e){return e.typeMedia.destroy}],(function(e){return Boolean(e.loading)}))};t.a=n},2230:function(e,t,c){"use strict";c.r(t);var a=c(17),n=c(6),i=c(39),s=c(41),r=c(2),j=c(524),o=c(4),l=function(e){return e.typeMedia.view},d=Object(o.a)([l],(function(e){return e.record})),b={selectLoading:Object(o.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},O=c(0),u=c(1080),m=c(1185),h=c(1187),p=c(1188),x=c(2120),f=c(1758),y=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(u.a,{}):Object(a.jsx)(m.a,{children:Object(a.jsx)(h.a,{gutter:24,children:Object(a.jsx)(p.a,{span:24,children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(a.jsx)("legend",{children:Object(r.c)("common.informations")}),Boolean(t.nameAR)&&Object(a.jsx)(x.a.Item,Object(O.a)(Object(O.a)({},m.b),{},{label:Object(r.c)("entities.typeMedia.fields.nameAR"),children:t.nameAR})),Boolean(t.nameFR)&&Object(a.jsx)(x.a.Item,Object(O.a)(Object(O.a)({},m.b),{},{label:Object(r.c)("entities.typeMedia.fields.nameFR"),children:t.nameFR})),Boolean(t.nameEN)&&Object(a.jsx)(x.a.Item,Object(O.a)(Object(O.a)({},m.b),{},{label:Object(r.c)("entities.typeMedia.fields.nameEN"),children:t.nameEN})),Boolean(t.media)&&Boolean(t.media.length)&&Object(a.jsx)(x.a.Item,Object(O.a)(Object(O.a)({},m.b),{},{label:Object(r.c)("entities.typeMedia.fields.media"),children:Object(a.jsx)(f.a,{value:t.media})}))]})})})})},g=c(1047),T=c(450),v=c(447),C=c(1099),M=c(201),R=c(228),w=c(1334),I=c(401),P=c(1691),B=c(1067),E=function(e){var t=Object(i.d)(),c=Object(s.h)(),n=Object(i.e)(R.a.selectPermissionToRead),j=Object(i.e)(w.a.selectPermissionToEdit),o=Object(i.e)(w.a.selectPermissionToDestroy),l=Object(i.e)(P.a.selectLoading),d=c.params.id;return Object(a.jsxs)(B.a,{children:[j&&Object(a.jsx)(M.a,{to:"/type-media/".concat(d,"/edit"),children:Object(a.jsx)(T.a,{title:Object(r.c)("common.edit"),children:Object(a.jsx)(v.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),o&&Object(a.jsx)(C.a,{title:Object(r.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(d))},okText:Object(r.c)("common.yes"),cancelText:Object(r.c)("common.no"),children:Object(a.jsx)(T.a,{title:Object(r.c)("common.destroy"),children:Object(a.jsx)(v.a,{type:"primary",disabled:l,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),n&&Object(a.jsx)(M.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(T.a,{title:Object(r.c)("auditLog.menu"),children:Object(a.jsx)(v.a,{icon:Object(a.jsx)(g.a,{})})})})]})},U=c(1061),F=c(1063),L=c(1056);t.default=function(e){var t=Object(i.d)(),c=Object(s.h)(),o=Object(i.e)(b.selectLoading),l=Object(i.e)(b.selectRecord);return Object(n.useEffect)((function(){t(j.a.doFind(c.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F.a,{items:[[Object(r.c)("dashboard.menu"),"/"],[Object(r.c)("entities.typeMedia.menu"),"/type-media"],[Object(r.c)("entities.typeMedia.view.title")]]}),Object(a.jsxs)(U.a,{children:[Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{span:16,children:Object(a.jsx)(L.a,{children:Object(r.c)("entities.typeMedia.view.title")})}),Object(a.jsx)(p.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(E,{match:c})})]}),Object(a.jsx)(y,{loading:o,record:l})]})]})}}}]);