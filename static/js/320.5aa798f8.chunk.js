(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[320],{1347:function(e,t,c){"use strict";var n=c(4),a=c(29),s=c(50),r=c(142),i=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(r.a.values.sourceRead)})),o=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(r.a.values.sourceEdit)})),j=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(r.a.values.sourceCreate)})),l=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(r.a.values.sourceImport)})),b={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:j,selectPermissionToDestroy:Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(r.a.values.sourceDestroy)})),selectPermissionToImport:l};t.a=b},1692:function(e,t,c){"use strict";var n=c(4),a={selectLoading:Object(n.a)([function(e){return e.source.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},2232:function(e,t,c){"use strict";c.r(t);var n=c(17),a=c(6),s=c(39),r=c(41),i=c(2),o=c(525),j=c(4),l=function(e){return e.source.view},b=Object(j.a)([l],(function(e){return e.record})),u={selectLoading:Object(j.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:l},d=c(0),O=c(1080),m=c(1185),h=c(1187),x=c(1188),f=c(2120),p=c(1758),g=function(e){var t=e.record;return e.loading||!t?Object(n.jsx)(O.a,{}):Object(n.jsx)(m.a,{children:Object(n.jsx)(h.a,{gutter:24,children:Object(n.jsx)(x.a,{span:24,children:Object(n.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(n.jsx)("legend",{children:Object(i.c)("common.informations")}),Boolean(t.date)&&Object(n.jsx)(f.a.Item,Object(d.a)(Object(d.a)({},m.b),{},{label:Object(i.c)("entities.source.fields.date"),children:t.date})),Boolean(t.media)&&Object(n.jsx)(f.a.Item,Object(d.a)(Object(d.a)({},m.b),{},{label:Object(i.c)("entities.source.fields.media"),children:Object(n.jsx)(p.a,{value:t.media})})),Boolean(t.link)&&Object(n.jsx)(f.a.Item,Object(d.a)(Object(d.a)({},m.b),{},{label:Object(i.c)("entities.source.fields.link"),children:t.link}))]})})})})},T=c(1047),v=c(450),y=c(447),C=c(1099),w=c(201),P=c(228),I=c(1347),R=c(402),k=c(1692),U=c(1067),B=function(e){var t=Object(s.d)(),c=Object(r.h)(),a=Object(s.e)(P.a.selectPermissionToRead),o=Object(s.e)(I.a.selectPermissionToEdit),j=Object(s.e)(I.a.selectPermissionToDestroy),l=Object(s.e)(k.a.selectLoading),b=c.params.id;return Object(n.jsxs)(U.a,{children:[o&&Object(n.jsx)(w.a,{to:"/source/".concat(b,"/edit"),children:Object(n.jsx)(v.a,{title:Object(i.c)("common.edit"),children:Object(n.jsx)(y.a,{type:"primary",children:Object(n.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),j&&Object(n.jsx)(C.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(b))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(n.jsx)(v.a,{title:Object(i.c)("common.destroy"),children:Object(n.jsx)(y.a,{type:"primary",disabled:l,children:Object(n.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(n.jsx)(w.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(b)),children:Object(n.jsx)(v.a,{title:Object(i.c)("auditLog.menu"),children:Object(n.jsx)(y.a,{icon:Object(n.jsx)(T.a,{})})})})]})},L=c(1061),D=c(1063),E=c(1056);t.default=function(e){var t=Object(s.d)(),c=Object(r.h)(),j=Object(s.e)(u.selectLoading),l=Object(s.e)(u.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(c.params.id))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(D.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.source.menu"),"/source"],[Object(i.c)("entities.source.view.title")]]}),Object(n.jsxs)(L.a,{children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(x.a,{span:16,children:Object(n.jsx)(E.a,{children:Object(i.c)("entities.source.view.title")})}),Object(n.jsx)(x.a,{span:8,style:{textAlign:"end"},children:Object(n.jsx)(B,{match:c})})]}),Object(n.jsx)(g,{loading:j,record:l})]})]})}}}]);