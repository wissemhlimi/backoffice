"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[578],{12009:function(e,n,t){var r=t(76747),a=t(86495),i=t(26319),o=t(71945),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.delegationRead)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.delegationEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.delegationCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.delegationImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.delegationDestroy)})),selectPermissionToImport:u};n.Z=d},98083:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.imada.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},512:function(e,n,t){var r=t(76747),a=t(86495),i=t(26319),o=t(71945),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.imadaRead)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.imadaEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.imadaCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.imadaImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.imadaDestroy)})),selectPermissionToImport:u};n.Z=d},80990:function(e,n,t){t(47313);var r=t(28303),a=t(45788),i=t(12009),o=t(46417);n.Z=function(e){var n=(0,a.v9)(i.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,o.jsx)(o.Fragment,{children:t().map((function(e){return t=e,n?(0,o.jsx)("div",{children:(0,o.jsx)(r.rU,{to:"/delegation/".concat(t.id),children:t.nameAR})},t.id):(0,o.jsx)("div",{children:t.nameAR},t.id);var t}))}):null}},71335:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(68197),a=t(59624),i=t(47313),o=t(45788),c=t(63830),s=t(10499),l=t(93754),u=t(76747),d=function(e){return e.imada.view},m=(0,u.P1)([d],(function(e){return e.record})),f={selectLoading:(0,u.P1)([d],(function(e){return Boolean(e.loading)})),selectRecord:m,selectRaw:d},p=t(1413),Z=t(61567),v=t(25969),h=t(73591),g=t(59420),x=t(80990),y=t(46417),b=h.Z.TabPane,j=function(e){var n=e.record;return e.loading||!n?(0,y.jsx)(Z.Z,{}):(0,y.jsx)(v.Z,{children:(0,y.jsxs)(h.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,y.jsx)(b,{tab:(0,s.ag)("common.informationsAR"),children:(0,y.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.nameAR)&&(0,y.jsx)(g.Z.Item,(0,p.Z)((0,p.Z)({},v.D),{},{label:(0,s.ag)("entities.imada.fields.nameAR"),children:n.nameAR})),Boolean(n.delegation)&&(0,y.jsx)(g.Z.Item,(0,p.Z)((0,p.Z)({},v.D),{},{label:(0,s.ag)("entities.imada.fields.delegation"),children:(0,y.jsx)(x.Z,{value:n.delegation})}))]})},"1"),(0,y.jsx)(b,{tab:(0,s.ag)("common.informationsFR"),children:(0,y.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(n.nameFR)&&(0,y.jsx)(g.Z.Item,(0,p.Z)((0,p.Z)({},v.D),{},{label:(0,s.ag)("entities.imada.fields.nameFR"),children:n.nameFR}))})},"2"),(0,y.jsx)(b,{tab:(0,s.ag)("common.informationsEN"),children:(0,y.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(n.nameEN)&&(0,y.jsx)(g.Z.Item,(0,p.Z)((0,p.Z)({},v.D),{},{label:(0,s.ag)("entities.imada.fields.nameEN"),children:n.nameEN}))})},"3")]})})},C=t(17551),P=t(96995),T=t(59491),E=t(4927),R=t(28303),w=t(23516),O=t(512),A=t(4922),N=t(98083),I=t(10419),_=function(e){var n=(0,o.I0)(),t=(0,c.$B)(),r=(0,o.v9)(w.Z.selectPermissionToRead),a=(0,o.v9)(O.Z.selectPermissionToEdit),i=(0,o.v9)(O.Z.selectPermissionToDestroy),l=(0,o.v9)(N.Z.selectLoading),u=t.params.id;return(0,y.jsxs)(I.Z,{children:[a&&(0,y.jsx)(R.rU,{to:"/imada/".concat(u,"/edit"),children:(0,y.jsx)(P.Z,{title:(0,s.ag)("common.edit"),children:(0,y.jsx)(T.Z,{type:"primary",children:(0,y.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&(0,y.jsx)(E.Z,{title:(0,s.ag)("common.areYouSure"),onConfirm:function(){n(A.Z.doDestroy(u))},okText:(0,s.ag)("common.yes"),cancelText:(0,s.ag)("common.no"),children:(0,y.jsx)(P.Z,{title:(0,s.ag)("common.destroy"),children:(0,y.jsx)(T.Z,{type:"primary",disabled:l,children:(0,y.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&(0,y.jsx)(R.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,y.jsx)(P.Z,{title:(0,s.ag)("auditLog.menu"),children:(0,y.jsx)(T.Z,{icon:(0,y.jsx)(C.Z,{rev:void 0})})})})]})},B=t(27829),U=t(53852),k=t(75352),D=function(e){var n=(0,o.I0)(),t=(0,c.$B)(),u=(0,o.v9)(f.selectLoading),d=(0,o.v9)(f.selectRecord);return(0,i.useEffect)((function(){n(l.Z.doFind(t.params.id))}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(U.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.imada.menu"),"/imada"],[(0,s.ag)("entities.imada.view.title")]]}),(0,y.jsxs)(B.Z,{children:[(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(a.Z,{span:16,children:(0,y.jsx)(k.Z,{children:(0,s.ag)("entities.imada.view.title")})}),(0,y.jsx)(a.Z,{span:8,style:{textAlign:"end"},children:(0,y.jsx)(_,{match:t})})]}),(0,y.jsx)(j,{loading:u,record:d})]})]})}},27829:function(e,n,t){var r,a=t(30168),i=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=i},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),i=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,i.jsx)(r.Z,{children:e.items.map((function(e){return(0,i.jsx)(r.Z.Item,{children:n(e)?(0,i.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var r=t(72652),a=(t(47313),t(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(r.Z,{})})}},75352:function(e,n,t){var r,a=t(30168),i=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=i},10419:function(e,n,t){var r,a=t(30168),i=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=i},25969:function(e,n,t){t.d(n,{D:function(){return o}});var r,a=t(30168),i=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=i},28709:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(87462),a=t(4942),i=t(93433),o=t(47313),c=t(46123),s=t.n(c),l=t(14903),u=t(67669),d=t.n(u),m=t(37142),f=t(91964),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z=function(e){var n,t,a=e.prefixCls,i=e.separator,c=void 0===i?"/":i,s=e.children,l=e.overlay,u=e.dropdownProps,Z=p(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,o.useContext(f.E_).getPrefixCls)("breadcrumb",a);return n="href"in Z?o.createElement("a",(0,r.Z)({className:"".concat(v,"-link")},Z),s):o.createElement("span",(0,r.Z)({className:"".concat(v,"-link")},Z),s),t=n,n=l?o.createElement(m.Z,(0,r.Z)({overlay:l,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(v,"-overlay-link")},t,o.createElement(d(),null))):t,s?o.createElement("span",null,n,c&&""!==c&&o.createElement("span",{className:"".concat(v,"-separator")},c)):null};Z.__ANT_BREADCRUMB_ITEM=!0;var v=Z,h=function(e){var n=e.children,t=(0,o.useContext(f.E_).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(t,"-separator")},n||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var g=h,x=t(9368),y=t(39178),b=t(48138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function C(e,n,t,r){var a=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(r.join("/"))},i)}var P=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},T=function(e){var n,t=e.prefixCls,c=e.separator,u=void 0===c?"/":c,d=e.style,m=e.className,p=e.routes,Z=e.children,h=e.itemRender,g=void 0===h?C:h,T=e.params,E=void 0===T?{}:T,R=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),w=o.useContext(f.E_),O=w.getPrefixCls,A=w.direction,N=O("breadcrumb",t);if(p&&p.length>0){var I=[];n=p.map((function(e){var n,t=P(e.path,E);return t&&I.push(t),e.children&&e.children.length&&(n=o.createElement(x.Z,null,e.children.map((function(e){return o.createElement(x.Z.Item,{key:e.path||e.breadcrumbName},g(e,E,p,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,i.Z)(e),a=P(n,t);return a&&r.push(a),r}(I,e.path,E)))})))),o.createElement(v,{overlay:n,separator:u,key:t||e.breadcrumbName},g(e,E,p,I))}))}else Z&&(n=(0,l.Z)(Z).map((function(e,n){return e?((0,y.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,b.Tm)(e,{separator:u,key:n})):e})));var _=s()(N,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===A),m);return o.createElement("div",(0,r.Z)({className:_,style:d},R),n)};T.Item=v,T.Separator=g;var E=T},29978:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(47313);function a(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},10288:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(29439),a=t(29978),i=t(72846),o=t(51114);function c(e){return void 0!==e}function s(e,n){var t=n||{},s=t.defaultValue,l=t.value,u=t.onChange,d=t.postState,m=(0,o.Z)((function(){return c(l)?l:c(s)?"function"===typeof s?s():s:"function"===typeof e?e():e})),f=(0,r.Z)(m,2),p=f[0],Z=f[1],v=void 0!==l?l:p,h=d?d(v):v,g=(0,a.Z)(u),x=(0,o.Z)([v]),y=(0,r.Z)(x,2),b=y[0],j=y[1];return(0,i.o)((function(){var e=b[0];p!==e&&g(p,e)}),[b]),(0,i.o)((function(){c(l)||Z(l)}),[l]),[h,(0,a.Z)((function(e,n){Z(e,n),j([v],n)}))]}}}]);