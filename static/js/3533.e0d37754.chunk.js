"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3533],{14763:function(e,n,r){var t={selectLoading:(0,r(76747).P1)([function(e){return e.raisonSuicide.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=t},98429:function(e,n,r){var t=r(76747),a=r(86495),i=r(26319),o=r(71945),c=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.raisonSuicideRead)})),s=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.raisonSuicideEdit)})),l=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.raisonSuicideCreate)})),u=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.raisonSuicideImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.raisonSuicideDestroy)})),selectPermissionToImport:u};n.Z=d},27829:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=i},34310:function(e,n,r){r(47313);var t=r(28303),a=r(45788),i=r(98429),o=r(46417);n.Z=function(e){var n=(0,a.v9)(i.Z.selectPermissionToRead),r=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return r().length?(0,o.jsx)(o.Fragment,{children:r().map((function(e){return r=e,n?(0,o.jsx)("div",{children:(0,o.jsx)(t.rU,{to:"/raison-suicide/".concat(r.id),children:r.nameAR})},r.id):(0,o.jsx)("div",{children:r.nameAR},r.id);var r}))}):null}},49869:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t=r(47313),a=r(45788),i=r(63830),o=r(10499),c=r(49808),s=r(76747),l=function(e){return e.raisonSuicide.view},u=(0,s.P1)([l],(function(e){return e.record})),d={selectLoading:(0,s.P1)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},m=r(1413),f=r(61567),p=r(25969),Z=r(73591),v=r(59420),h=r(34310),x=r(46417),g=Z.Z.TabPane,y=function(e){var n=e.record;return e.loading||!n?(0,x.jsx)(f.Z,{}):(0,x.jsx)(p.Z,{children:(0,x.jsxs)(Z.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,x.jsx)(g,{tab:(0,o.ag)("common.informationsAR"),children:(0,x.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.nameAR)&&(0,x.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,o.ag)("entities.raisonAction.fields.nameAR"),children:n.nameAR})),Boolean(n.parent)&&(0,x.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,o.ag)("entities.raisonSuicide.fields.parent"),children:(0,x.jsx)(h.Z,{value:n.parent})}))]})},"1"),(0,x.jsx)(g,{tab:(0,o.ag)("common.informationsFR"),children:(0,x.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(n.nameFR)&&(0,x.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,o.ag)("entities.raisonAction.fields.nameFR"),children:n.nameFR}))})},"2"),(0,x.jsx)(g,{tab:(0,o.ag)("common.informationsEN"),children:(0,x.jsx)("fieldset",{style:{borderTopWidth:0},children:Boolean(n.nameEN)&&(0,x.jsx)(v.Z.Item,(0,m.Z)((0,m.Z)({},p.D),{},{label:(0,o.ag)("entities.raisonAction.fields.nameEN"),children:n.nameEN}))})},"3")]})})},b=r(17551),j=r(96995),C=r(59491),E=r(4927),P=r(28303),R=r(23516),T=r(98429),w=r(94167),A=r(14763),O=r(10419),N=function(e){var n=(0,a.I0)(),r=(0,i.$B)(),t=(0,a.v9)(R.Z.selectPermissionToRead),c=(0,a.v9)(T.Z.selectPermissionToEdit),s=(0,a.v9)(T.Z.selectPermissionToDestroy),l=(0,a.v9)(A.Z.selectLoading),u=r.params.id;return(0,x.jsxs)(O.Z,{children:[c&&(0,x.jsx)(P.rU,{to:"/raison-suicide/".concat(u,"/edit"),children:(0,x.jsx)(j.Z,{title:(0,o.ag)("common.edit"),children:(0,x.jsx)(C.Z,{type:"primary",children:(0,x.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&(0,x.jsx)(E.Z,{title:(0,o.ag)("common.areYouSure"),onConfirm:function(){n(w.Z.doDestroy(u))},okText:(0,o.ag)("common.yes"),cancelText:(0,o.ag)("common.no"),children:(0,x.jsx)(j.Z,{title:(0,o.ag)("common.destroy"),children:(0,x.jsx)(C.Z,{type:"primary",disabled:l,children:(0,x.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),t&&(0,x.jsx)(P.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,x.jsx)(j.Z,{title:(0,o.ag)("auditLog.menu"),children:(0,x.jsx)(C.Z,{icon:(0,x.jsx)(b.Z,{rev:void 0})})})})]})},S=r(27829),_=r(53852),B=r(75352),I=r(68197),k=r(59624),U=function(e){var n=(0,a.I0)(),r=(0,i.$B)(),s=(0,a.v9)(d.selectLoading),l=(0,a.v9)(d.selectRecord);return(0,t.useEffect)((function(){n(c.Z.doFind(r.params.id))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.raisonSuicide.menu"),"/raison-suicide"],[(0,o.ag)("entities.raisonSuicide.view.title")]]}),(0,x.jsxs)(S.Z,{children:[(0,x.jsxs)(I.Z,{children:[(0,x.jsx)(k.Z,{span:16,children:(0,x.jsx)(B.Z,{children:(0,o.ag)("entities.raisonSuicide.view.title")})}),(0,x.jsx)(k.Z,{span:8,style:{textAlign:"end"},children:(0,x.jsx)(N,{match:r})})]}),(0,x.jsx)(y,{loading:s,record:l})]})]})}},53852:function(e,n,r){var t=r(28709),a=(r(47313),r(28303)),i=r(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,i.jsx)(t.Z,{children:e.items.map((function(e){return(0,i.jsx)(t.Z.Item,{children:n(e)?(0,i.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,r){var t=r(72652),a=(r(47313),r(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(t.Z,{})})}},75352:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.h1(t||(t=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=i},10419:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=i},25969:function(e,n,r){r.d(n,{D:function(){return o}});var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=i},28709:function(e,n,r){r.d(n,{Z:function(){return R}});var t=r(87462),a=r(4942),i=r(93433),o=r(47313),c=r(46123),s=r.n(c),l=r(14903),u=r(67669),d=r.n(u),m=r(37142),f=r(91964),p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r},Z=function(e){var n,r,a=e.prefixCls,i=e.separator,c=void 0===i?"/":i,s=e.children,l=e.overlay,u=e.dropdownProps,Z=p(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,o.useContext(f.E_).getPrefixCls)("breadcrumb",a);return n="href"in Z?o.createElement("a",(0,t.Z)({className:"".concat(v,"-link")},Z),s):o.createElement("span",(0,t.Z)({className:"".concat(v,"-link")},Z),s),r=n,n=l?o.createElement(m.Z,(0,t.Z)({overlay:l,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(v,"-overlay-link")},r,o.createElement(d(),null))):r,s?o.createElement("span",null,n,c&&""!==c&&o.createElement("span",{className:"".concat(v,"-separator")},c)):null};Z.__ANT_BREADCRUMB_ITEM=!0;var v=Z,h=function(e){var n=e.children,r=(0,o.useContext(f.E_).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(r,"-separator")},n||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var x=h,g=r(9368),y=r(39178),b=r(48138),j=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};function C(e,n,r,t){var a=r.indexOf(e)===r.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var r=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return n[r]||e}))}(e,n);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(t.join("/"))},i)}var E=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(r){e=e.replace(":".concat(r),n[r])})),e},P=function(e){var n,r=e.prefixCls,c=e.separator,u=void 0===c?"/":c,d=e.style,m=e.className,p=e.routes,Z=e.children,h=e.itemRender,x=void 0===h?C:h,P=e.params,R=void 0===P?{}:P,T=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),w=o.useContext(f.E_),A=w.getPrefixCls,O=w.direction,N=A("breadcrumb",r);if(p&&p.length>0){var S=[];n=p.map((function(e){var n,r=E(e.path,R);return r&&S.push(r),e.children&&e.children.length&&(n=o.createElement(g.Z,null,e.children.map((function(e){return o.createElement(g.Z.Item,{key:e.path||e.breadcrumbName},x(e,R,p,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,t=(0,i.Z)(e),a=E(n,r);return a&&t.push(a),t}(S,e.path,R)))})))),o.createElement(v,{overlay:n,separator:u,key:r||e.breadcrumbName},x(e,R,p,S))}))}else Z&&(n=(0,l.Z)(Z).map((function(e,n){return e?((0,y.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,b.Tm)(e,{separator:u,key:n})):e})));var _=s()(N,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===O),m);return o.createElement("div",(0,t.Z)({className:_,style:d},T),n)};P.Item=v,P.Separator=x;var R=P},29978:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(47313);function a(e){var n=t.useRef();n.current=e;var r=t.useCallback((function(){for(var e,r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(t))}),[]);return r}},10288:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(29439),a=r(29978),i=r(72846),o=r(51114);function c(e){return void 0!==e}function s(e,n){var r=n||{},s=r.defaultValue,l=r.value,u=r.onChange,d=r.postState,m=(0,o.Z)((function(){return c(l)?l:c(s)?"function"===typeof s?s():s:"function"===typeof e?e():e})),f=(0,t.Z)(m,2),p=f[0],Z=f[1],v=void 0!==l?l:p,h=d?d(v):v,x=(0,a.Z)(u),g=(0,o.Z)([v]),y=(0,t.Z)(g,2),b=y[0],j=y[1];return(0,i.o)((function(){var e=b[0];p!==e&&x(p,e)}),[b]),(0,i.o)((function(){c(l)||Z(l)}),[l]),[h,(0,a.Z)((function(e,n){Z(e,n),j([v],n)}))]}}}]);