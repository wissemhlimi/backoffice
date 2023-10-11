"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8002],{37687:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.raisonAction.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},64674:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),i=t(71945),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.raisonActionRead)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.raisonActionEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.raisonActionCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.raisonActionImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.raisonActionDestroy)})),selectPermissionToImport:u};n.Z=d},27829:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=o},15868:function(e,n,t){t(47313);var r=t(28303),a=t(45788),o=t(64674),i=t(46417);n.Z=function(e){var n=(0,a.v9)(o.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,i.jsx)(i.Fragment,{children:t().map((function(e){return t=e,n?(0,i.jsx)("div",{children:(0,i.jsx)(r.rU,{to:"/raison-action/".concat(t.id),children:t.nameAR})},t.id):(0,i.jsx)("div",{children:t.nameAR},t.id);var t}))}):null}},69870:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(47313),a=t(45788),o=t(63830),i=t(10499),c=t(25987),s=t(76747),l=function(e){return e.raisonAction.view},u=(0,s.P1)([l],(function(e){return e.record})),d={selectLoading:(0,s.P1)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},m=t(1413),f=t(61567),p=t(25969),Z=t(73591),v=t(59420),h=t(15868),b=t(46417),x=Z.Z.TabPane,g=function(e){var n=e.record;return e.loading||!n?(0,b.jsx)(f.Z,{}):(0,b.jsx)(p.Z,{children:(0,b.jsxs)(Z.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,b.jsx)(x,{tab:(0,i.ag)("common.informationsAR"),children:(0,b.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.nameAR)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.nameAR"),children:n.nameAR})),Boolean(n.abbrevAR)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.abbrevAR"),children:n.abbrevAR})),Boolean(n.parent)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.parent"),children:(0,b.jsx)(h.Z,{value:n.parent})}))]})},"1"),(0,b.jsx)(x,{tab:(0,i.ag)("common.informationsFR"),children:(0,b.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.nameFR)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.nameFR"),children:n.nameFR})),Boolean(n.abbrevFR)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.abbrevFR"),children:n.abbrevFR}))]})},"2"),(0,b.jsx)(x,{tab:(0,i.ag)("common.informationsEN"),children:(0,b.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.nameEN)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.nameEN"),children:n.nameEN})),Boolean(n.abbrevEN)&&(0,b.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,i.ag)("entities.raisonAction.fields.abbrevEN"),children:n.abbrevEN}))]})},"3")]})})},y=t(17551),j=t(96995),A=t(59491),E=t(4927),R=t(28303),C=t(23516),P=t(64674),T=t(57722),w=t(37687),N=t(10419),O=function(e){var n=(0,a.I0)(),t=(0,o.$B)(),r=(0,a.v9)(C.Z.selectPermissionToRead),c=(0,a.v9)(P.Z.selectPermissionToEdit),s=(0,a.v9)(P.Z.selectPermissionToDestroy),l=(0,a.v9)(w.Z.selectLoading),u=t.params.id;return(0,b.jsxs)(N.Z,{children:[c&&(0,b.jsx)(R.rU,{to:"/raison-action/".concat(u,"/edit"),children:(0,b.jsx)(j.Z,{title:(0,i.ag)("common.edit"),children:(0,b.jsx)(A.Z,{type:"primary",children:(0,b.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&(0,b.jsx)(E.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){n(T.Z.doDestroy(u))},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:(0,b.jsx)(j.Z,{title:(0,i.ag)("common.destroy"),children:(0,b.jsx)(A.Z,{type:"primary",disabled:l,children:(0,b.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&(0,b.jsx)(R.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,b.jsx)(j.Z,{title:(0,i.ag)("auditLog.menu"),children:(0,b.jsx)(A.Z,{icon:(0,b.jsx)(y.Z,{rev:void 0})})})})]})},B=t(27829),I=t(53852),_=t(75352),D=t(68197),k=t(59624),U=function(e){var n=(0,a.I0)(),t=(0,o.$B)(),s=(0,a.v9)(d.selectLoading),l=(0,a.v9)(d.selectRecord);return(0,r.useEffect)((function(){n(c.Z.doFind(t.params.id))}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(I.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.raisonAction.menu"),"/raison-action"],[(0,i.ag)("entities.raisonAction.view.title")]]}),(0,b.jsxs)(B.Z,{children:[(0,b.jsxs)(D.Z,{children:[(0,b.jsx)(k.Z,{span:16,children:(0,b.jsx)(_.Z,{children:(0,i.ag)("entities.raisonAction.view.title")})}),(0,b.jsx)(k.Z,{span:8,style:{textAlign:"end"},children:(0,b.jsx)(O,{match:t})})]}),(0,b.jsx)(g,{loading:s,record:l})]})]})}},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),o=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(r.Z,{children:e.items.map((function(e){return(0,o.jsx)(r.Z.Item,{children:n(e)?(0,o.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var r=t(72652),a=(t(47313),t(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(r.Z,{})})}},75352:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=o},10419:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=o},25969:function(e,n,t){t.d(n,{D:function(){return i}});var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=o},28709:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(87462),a=t(4942),o=t(93433),i=t(47313),c=t(46123),s=t.n(c),l=t(14903),u=t(67669),d=t.n(u),m=t(37142),f=t(91964),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z=function(e){var n,t,a=e.prefixCls,o=e.separator,c=void 0===o?"/":o,s=e.children,l=e.overlay,u=e.dropdownProps,Z=p(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,i.useContext(f.E_).getPrefixCls)("breadcrumb",a);return n="href"in Z?i.createElement("a",(0,r.Z)({className:"".concat(v,"-link")},Z),s):i.createElement("span",(0,r.Z)({className:"".concat(v,"-link")},Z),s),t=n,n=l?i.createElement(m.Z,(0,r.Z)({overlay:l,placement:"bottomCenter"},u),i.createElement("span",{className:"".concat(v,"-overlay-link")},t,i.createElement(d(),null))):t,s?i.createElement("span",null,n,c&&""!==c&&i.createElement("span",{className:"".concat(v,"-separator")},c)):null};Z.__ANT_BREADCRUMB_ITEM=!0;var v=Z,h=function(e){var n=e.children,t=(0,i.useContext(f.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(t,"-separator")},n||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var b=h,x=t(9368),g=t(39178),y=t(48138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function A(e,n,t,r){var a=t.indexOf(e)===t.length-1,o=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(r.join("/"))},o)}var E=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},R=function(e){var n,t=e.prefixCls,c=e.separator,u=void 0===c?"/":c,d=e.style,m=e.className,p=e.routes,Z=e.children,h=e.itemRender,b=void 0===h?A:h,R=e.params,C=void 0===R?{}:R,P=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),T=i.useContext(f.E_),w=T.getPrefixCls,N=T.direction,O=w("breadcrumb",t);if(p&&p.length>0){var B=[];n=p.map((function(e){var n,t=E(e.path,C);return t&&B.push(t),e.children&&e.children.length&&(n=i.createElement(x.Z,null,e.children.map((function(e){return i.createElement(x.Z.Item,{key:e.path||e.breadcrumbName},b(e,C,p,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,o.Z)(e),a=E(n,t);return a&&r.push(a),r}(B,e.path,C)))})))),i.createElement(v,{overlay:n,separator:u,key:t||e.breadcrumbName},b(e,C,p,B))}))}else Z&&(n=(0,l.Z)(Z).map((function(e,n){return e?((0,g.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,y.Tm)(e,{separator:u,key:n})):e})));var I=s()(O,(0,a.Z)({},"".concat(O,"-rtl"),"rtl"===N),m);return i.createElement("div",(0,r.Z)({className:I,style:d},P),n)};R.Item=v,R.Separator=b;var C=R},29978:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(47313);function a(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},10288:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(29439),a=t(29978),o=t(72846),i=t(51114);function c(e){return void 0!==e}function s(e,n){var t=n||{},s=t.defaultValue,l=t.value,u=t.onChange,d=t.postState,m=(0,i.Z)((function(){return c(l)?l:c(s)?"function"===typeof s?s():s:"function"===typeof e?e():e})),f=(0,r.Z)(m,2),p=f[0],Z=f[1],v=void 0!==l?l:p,h=d?d(v):v,b=(0,a.Z)(u),x=(0,i.Z)([v]),g=(0,r.Z)(x,2),y=g[0],j=g[1];return(0,o.o)((function(){var e=y[0];p!==e&&b(p,e)}),[y]),(0,o.o)((function(){c(l)||Z(l)}),[l]),[h,(0,a.Z)((function(e,n){Z(e,n),j([v],n)}))]}}}]);