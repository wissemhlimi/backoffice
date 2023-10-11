"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[934],{34500:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.typeIntervention.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},60996:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),i=t(71945),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.typeInterventionRead)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.typeInterventionEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.typeInterventionCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.typeInterventionImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.typeInterventionDestroy)})),selectPermissionToImport:u};n.Z=d},27829:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=o},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),o=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(r.Z,{children:e.items.map((function(e){return(0,o.jsx)(r.Z.Item,{children:n(e)?(0,o.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var r=t(72652),a=(t(47313),t(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(r.Z,{})})}},75352:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=o},10419:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=o},25969:function(e,n,t){t.d(n,{D:function(){return i}});var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=o},30934:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(47313),a=t(45788),o=t(63830),i=t(10499),c=t(65395),s=t(76747),l=function(e){return e.typeIntervention.view},u=(0,s.P1)([l],(function(e){return e.record})),d={selectLoading:(0,s.P1)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},m=t(1413),p=t(61567),f=t(25969),Z=t(68197),v=t(59624),h=t(59420),x=t(46417),y=function(e){var n=e.record;return e.loading||!n?(0,x.jsx)(p.Z,{}):(0,x.jsx)(f.Z,{children:(0,x.jsx)(Z.Z,{gutter:24,children:(0,x.jsx)(v.Z,{span:24,children:(0,x.jsxs)("fieldset",{style:{borderTopWidth:0},children:[(0,x.jsx)("legend",{children:(0,i.ag)("common.informations")}),Boolean(n.nameAR)&&(0,x.jsx)(h.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,i.ag)("entities.typeIntervention.fields.nameAR"),children:n.nameAR})),Boolean(n.nameFR)&&(0,x.jsx)(h.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,i.ag)("entities.typeIntervention.fields.nameFR"),children:n.nameFR})),Boolean(n.nameEN)&&(0,x.jsx)(h.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,i.ag)("entities.typeIntervention.fields.nameEN"),children:n.nameEN}))]})})})})},g=t(17551),b=t(96995),j=t(59491),E=t(4927),C=t(28303),P=t(23516),I=t(60996),R=t(19660),T=t(34500),w=t(10419),O=function(e){var n=(0,a.I0)(),t=(0,o.$B)(),r=(0,a.v9)(P.Z.selectPermissionToRead),c=(0,a.v9)(I.Z.selectPermissionToEdit),s=(0,a.v9)(I.Z.selectPermissionToDestroy),l=(0,a.v9)(T.Z.selectLoading),u=t.params.id;return(0,x.jsxs)(w.Z,{children:[c&&(0,x.jsx)(C.rU,{to:"/type-intervention/".concat(u,"/edit"),children:(0,x.jsx)(b.Z,{title:(0,i.ag)("common.edit"),children:(0,x.jsx)(j.Z,{type:"primary",children:(0,x.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&(0,x.jsx)(E.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){n(R.Z.doDestroy(u))},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:(0,x.jsx)(b.Z,{title:(0,i.ag)("common.destroy"),children:(0,x.jsx)(j.Z,{type:"primary",disabled:l,children:(0,x.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&(0,x.jsx)(C.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,x.jsx)(b.Z,{title:(0,i.ag)("auditLog.menu"),children:(0,x.jsx)(j.Z,{icon:(0,x.jsx)(g.Z,{rev:void 0})})})})]})},N=t(27829),_=t(53852),B=t(75352),A=function(e){var n=(0,a.I0)(),t=(0,o.$B)(),s=(0,a.v9)(d.selectLoading),l=(0,a.v9)(d.selectRecord);return(0,r.useEffect)((function(){n(c.Z.doFind(t.params.id))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.typeIntervention.menu"),"/type-intervention"],[(0,i.ag)("entities.typeIntervention.view.title")]]}),(0,x.jsxs)(N.Z,{children:[(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)(v.Z,{span:16,children:(0,x.jsx)(B.Z,{children:(0,i.ag)("entities.typeIntervention.view.title")})}),(0,x.jsx)(v.Z,{span:8,style:{textAlign:"end"},children:(0,x.jsx)(O,{match:t})})]}),(0,x.jsx)(y,{loading:s,record:l})]})]})}},28709:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(87462),a=t(4942),o=t(93433),i=t(47313),c=t(46123),s=t.n(c),l=t(14903),u=t(67669),d=t.n(u),m=t(37142),p=t(91964),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z=function(e){var n,t,a=e.prefixCls,o=e.separator,c=void 0===o?"/":o,s=e.children,l=e.overlay,u=e.dropdownProps,Z=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,i.useContext(p.E_).getPrefixCls)("breadcrumb",a);return n="href"in Z?i.createElement("a",(0,r.Z)({className:"".concat(v,"-link")},Z),s):i.createElement("span",(0,r.Z)({className:"".concat(v,"-link")},Z),s),t=n,n=l?i.createElement(m.Z,(0,r.Z)({overlay:l,placement:"bottomCenter"},u),i.createElement("span",{className:"".concat(v,"-overlay-link")},t,i.createElement(d(),null))):t,s?i.createElement("span",null,n,c&&""!==c&&i.createElement("span",{className:"".concat(v,"-separator")},c)):null};Z.__ANT_BREADCRUMB_ITEM=!0;var v=Z,h=function(e){var n=e.children,t=(0,i.useContext(p.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(t,"-separator")},n||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var x=h,y=t(9368),g=t(39178),b=t(48138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function E(e,n,t,r){var a=t.indexOf(e)===t.length-1,o=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(r.join("/"))},o)}var C=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},P=function(e){var n,t=e.prefixCls,c=e.separator,u=void 0===c?"/":c,d=e.style,m=e.className,f=e.routes,Z=e.children,h=e.itemRender,x=void 0===h?E:h,P=e.params,I=void 0===P?{}:P,R=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),T=i.useContext(p.E_),w=T.getPrefixCls,O=T.direction,N=w("breadcrumb",t);if(f&&f.length>0){var _=[];n=f.map((function(e){var n,t=C(e.path,I);return t&&_.push(t),e.children&&e.children.length&&(n=i.createElement(y.Z,null,e.children.map((function(e){return i.createElement(y.Z.Item,{key:e.path||e.breadcrumbName},x(e,I,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,o.Z)(e),a=C(n,t);return a&&r.push(a),r}(_,e.path,I)))})))),i.createElement(v,{overlay:n,separator:u,key:t||e.breadcrumbName},x(e,I,f,_))}))}else Z&&(n=(0,l.Z)(Z).map((function(e,n){return e?((0,g.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,b.Tm)(e,{separator:u,key:n})):e})));var B=s()(N,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===O),m);return i.createElement("div",(0,r.Z)({className:B,style:d},R),n)};P.Item=v,P.Separator=x;var I=P},59624:function(e,n,t){var r=t(26297);n.Z=r.Z},68197:function(e,n,t){var r=t(84268);n.Z=r.Z}}]);