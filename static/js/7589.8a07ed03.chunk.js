"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7589],{50576:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),i=t(71945),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.categoryAppelRead)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.categoryAppelEdit)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.categoryAppelCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.categoryAppelImport)})),d={selectPermissionToRead:c,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(i.Z.values.categoryAppelDestroy)})),selectPermissionToImport:u};n.Z=d},13718:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.categoryAppel.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},43560:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(68197),a=t(59624),o=t(47313),i=t(45788),c=t(63830),l=t(10499),s=t(49875),u=t(76747),d=function(e){return e.categoryAppel.view},p=(0,u.P1)([d],(function(e){return e.record})),m={selectLoading:(0,u.P1)([d],(function(e){return Boolean(e.loading)})),selectRecord:p,selectRaw:d},f=t(1413),Z=t(61567),g=t(25969),h=t(73591),v=t(59420),y=t(46417),x=h.Z.TabPane,b=function(e){var n=e.record;if(e.loading||!n)return(0,y.jsx)(Z.Z,{});return(0,y.jsx)(g.Z,{children:(0,y.jsxs)(h.Z,{defaultActiveKey:"1",onChange:function(e){},children:[(0,y.jsx)(x,{tab:(0,l.ag)("common.informationsAR"),children:(0,y.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.titleAR)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.title"),children:n.titleAR})),Boolean(n.descriptionAR)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.description"),children:n.descriptionAR}))]})},"1"),(0,y.jsx)(x,{tab:(0,l.ag)("common.informationsFR"),children:(0,y.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.titleFR)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.title"),children:n.titleFR})),Boolean(n.descriptionFR)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.description"),children:n.descriptionFR}))]})},"2"),(0,y.jsx)(x,{tab:(0,l.ag)("common.informationsEN"),children:(0,y.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Boolean(n.titleEN)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.title"),children:n.titleEN})),Boolean(n.descriptionEN)&&(0,y.jsx)(v.Z.Item,(0,f.Z)((0,f.Z)({},g.D),{},{label:(0,l.ag)("entities.categoryAppel.fields.description"),children:n.descriptionEN}))]})},"3")]})})},j=t(17551),C=t(96995),E=t(59491),A=t(4927),P=t(28303),R=t(23516),T=t(50576),w=t(42059),O=t(13718),N=t(10419),B=function(e){var n=(0,i.I0)(),t=(0,c.$B)(),r=(0,i.v9)(R.Z.selectPermissionToRead),a=(0,i.v9)(T.Z.selectPermissionToEdit),o=(0,i.v9)(T.Z.selectPermissionToDestroy),s=(0,i.v9)(O.Z.selectLoading),u=t.params.id;return(0,y.jsxs)(N.Z,{children:[a&&(0,y.jsx)(P.rU,{to:"/category-appel/".concat(u,"/edit"),children:(0,y.jsx)(C.Z,{title:(0,l.ag)("common.edit"),children:(0,y.jsx)(E.Z,{type:"primary",children:(0,y.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),o&&(0,y.jsx)(A.Z,{title:(0,l.ag)("common.areYouSure"),onConfirm:function(){n(w.Z.doDestroy(u))},okText:(0,l.ag)("common.yes"),cancelText:(0,l.ag)("common.no"),children:(0,y.jsx)(C.Z,{title:(0,l.ag)("common.destroy"),children:(0,y.jsx)(E.Z,{type:"primary",disabled:s,children:(0,y.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&(0,y.jsx)(P.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,y.jsx)(C.Z,{title:(0,l.ag)("auditLog.menu"),children:(0,y.jsx)(E.Z,{icon:(0,y.jsx)(j.Z,{rev:void 0})})})})]})},I=t(27829),_=t(53852),k=t(75352),D=function(e){var n=(0,i.I0)(),t=(0,c.$B)(),u=(0,i.v9)(m.selectLoading),d=(0,i.v9)(m.selectRecord);return(0,o.useEffect)((function(){n(s.Z.doFind(t.params.id))}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.categoryAppel.menu"),"/category-appel"],[(0,l.ag)("entities.categoryAppel.view.title")]]}),(0,y.jsxs)(I.Z,{children:[(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(a.Z,{span:16,children:(0,y.jsx)(k.Z,{children:(0,l.ag)("entities.categoryAppel.view.title")})}),(0,y.jsx)(a.Z,{span:8,style:{textAlign:"end"},children:(0,y.jsx)(B,{match:t})})]}),(0,y.jsx)(b,{loading:u,record:d})]})]})}},27829:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=o},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),o=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(r.Z,{children:e.items.map((function(e){return(0,o.jsx)(r.Z.Item,{children:n(e)?(0,o.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,t){var r=t(72652),a=(t(47313),t(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(r.Z,{})})}},75352:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=o},10419:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=o},25969:function(e,n,t){t.d(n,{D:function(){return i}});var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=o},28709:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(87462),a=t(4942),o=t(93433),i=t(47313),c=t(46123),l=t.n(c),s=t(14903),u=t(67669),d=t.n(u),p=t(37142),m=t(91964),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z=function(e){var n,t,a=e.prefixCls,o=e.separator,c=void 0===o?"/":o,l=e.children,s=e.overlay,u=e.dropdownProps,Z=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),g=(0,i.useContext(m.E_).getPrefixCls)("breadcrumb",a);return n="href"in Z?i.createElement("a",(0,r.Z)({className:"".concat(g,"-link")},Z),l):i.createElement("span",(0,r.Z)({className:"".concat(g,"-link")},Z),l),t=n,n=s?i.createElement(p.Z,(0,r.Z)({overlay:s,placement:"bottomCenter"},u),i.createElement("span",{className:"".concat(g,"-overlay-link")},t,i.createElement(d(),null))):t,l?i.createElement("span",null,n,c&&""!==c&&i.createElement("span",{className:"".concat(g,"-separator")},c)):null};Z.__ANT_BREADCRUMB_ITEM=!0;var g=Z,h=function(e){var n=e.children,t=(0,i.useContext(m.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(t,"-separator")},n||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var v=h,y=t(9368),x=t(39178),b=t(48138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function C(e,n,t,r){var a=t.indexOf(e)===t.length-1,o=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(r.join("/"))},o)}var E=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},A=function(e){var n,t=e.prefixCls,c=e.separator,u=void 0===c?"/":c,d=e.style,p=e.className,f=e.routes,Z=e.children,h=e.itemRender,v=void 0===h?C:h,A=e.params,P=void 0===A?{}:A,R=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),T=i.useContext(m.E_),w=T.getPrefixCls,O=T.direction,N=w("breadcrumb",t);if(f&&f.length>0){var B=[];n=f.map((function(e){var n,t=E(e.path,P);return t&&B.push(t),e.children&&e.children.length&&(n=i.createElement(y.Z,null,e.children.map((function(e){return i.createElement(y.Z.Item,{key:e.path||e.breadcrumbName},v(e,P,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,o.Z)(e),a=E(n,t);return a&&r.push(a),r}(B,e.path,P)))})))),i.createElement(g,{overlay:n,separator:u,key:t||e.breadcrumbName},v(e,P,f,B))}))}else Z&&(n=(0,s.Z)(Z).map((function(e,n){return e?((0,x.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,b.Tm)(e,{separator:u,key:n})):e})));var I=l()(N,(0,a.Z)({},"".concat(N,"-rtl"),"rtl"===O),p);return i.createElement("div",(0,r.Z)({className:I,style:d},R),n)};A.Item=g,A.Separator=v;var P=A},29978:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(47313);function a(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},10288:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(29439),a=t(29978),o=t(72846),i=t(51114);function c(e){return void 0!==e}function l(e,n){var t=n||{},l=t.defaultValue,s=t.value,u=t.onChange,d=t.postState,p=(0,i.Z)((function(){return c(s)?s:c(l)?"function"===typeof l?l():l:"function"===typeof e?e():e})),m=(0,r.Z)(p,2),f=m[0],Z=m[1],g=void 0!==s?s:f,h=d?d(g):g,v=(0,a.Z)(u),y=(0,i.Z)([g]),x=(0,r.Z)(y,2),b=x[0],j=x[1];return(0,o.o)((function(){var e=b[0];f!==e&&v(f,e)}),[b]),(0,o.o)((function(){c(s)||Z(s)}),[s]),[h,(0,a.Z)((function(e,n){Z(e,n),j([g],n)}))]}}}]);