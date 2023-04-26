(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[225],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var i=n(421).a.h1(r());t.a=i},1062:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var i=n(421).a.div(r());t.a=i},1063:function(e,t,n){"use strict";var a=n(17),r=n(1101),i=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=n(421).a.div(r());t.a=i},1071:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1103))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1077:function(e,t,n){"use strict";var a=n(17),r=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1080:function(e,t,n){var a=n(436),r=n(1082),i=n(846),c=Math.max,o=Math.min;e.exports=function(e,t,n){var s,l,u,d,m,p,f=0,b=!1,v=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=s,a=l;return s=l=void 0,f=t,d=e.apply(a,n)}function O(e){return f=e,m=setTimeout(y,t),b?g(e):d}function h(e){var n=e-p;return void 0===p||n>=t||n<0||v&&e-f>=u}function y(){var e=r();if(h(e))return x(e);m=setTimeout(y,function(e){var n=t-(e-p);return v?o(n,u-(e-f)):n}(e))}function x(e){return m=void 0,j&&s?g(e):(s=l=void 0,d)}function C(){var e=r(),n=h(e);if(s=arguments,l=this,p=e,n){if(void 0===m)return O(p);if(v)return clearTimeout(m),m=setTimeout(y,t),g(p)}return void 0===m&&(m=setTimeout(y,t)),d}return t=i(t)||0,a(n)&&(b=!!n.leading,u=(v="maxWait"in n)?c(i(n.maxWait)||0,t):u,j="trailing"in n?!!n.trailing:j),C.cancel=function(){void 0!==m&&clearTimeout(m),f=0,s=p=l=m=void 0},C.flush=function(){return void 0===m?d:x(r())},C}},1082:function(e,t,n){var a=n(298);e.exports=function(){return a.Date.now()}},1093:function(e,t,n){"use strict";var a=n(21),r=n.n(a),i=n(42),c=n.n(i),o=n(6),s=n(22),l=n.n(s),u=n(572),d=n.n(u),m=n(203),p=n(450),f=n(447),b=n(571),v=n(449),j=n(434),g=n(307),O=n(540),h=n(43),y=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=c()(n,2),i=a[0],s=a[1];o.useEffect((function(){"visible"in e&&s(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&s(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||s(t),e.onVisibleChange&&e.onVisibleChange(t,n)},d=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(y,t)},C=function(t){u(!1,t),e.onCancel&&e.onCancel.call(y,t)},E=o.useContext(g.b).getPrefixCls,N=e.prefixCls,w=e.placement,T=e.children,P=e.overlayClassName,R=x(e,["prefixCls","placement","children","overlayClassName"]),S=E("popover",N),k=E("popconfirm",N),M=l()(k,P),_=o.createElement(v.a,{componentName:"Popconfirm",defaultLocale:j.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,i=e.cancelButtonProps,c=e.title,s=e.cancelText,l=e.okText,u=e.okType,m=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},m,o.createElement("div",{className:"".concat(t,"-message-title")},Object(O.a)(c))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(f.a,r()({onClick:C,size:"small"},i),s||n.cancelText),o.createElement(f.a,r()({onClick:d},Object(b.a)(u),{size:"small"},a),l||n.okText)))}(S,t)}));return o.createElement(p.a,r()({},R,{prefixCls:S,placement:w,onVisibleChange:function(t){e.disabled||u(t)},visible:i,overlay:_,overlayClassName:M,ref:t}),Object(h.a)(T,{onKeyDown:function(e){var t,n;o.isValidElement(T)&&(null===(n=null===T||void 0===T?void 0:(t=T.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===m.a.ESC&&i&&u(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},t.a=C},1101:function(e,t,n){"use strict";var a=n(21),r=n.n(a),i=n(23),c=n.n(i),o=n(568),s=n.n(o),l=n(6),u=n(22),d=n.n(u),m=n(146),p=n(1071),f=n.n(p),b=n(578),v=n(307),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e){var t,n,a=e.prefixCls,i=e.separator,c=void 0===i?"/":i,o=e.children,s=e.overlay,u=e.dropdownProps,d=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,l.useContext(v.b).getPrefixCls)("breadcrumb",a);return t="href"in d?l.createElement("a",r()({className:"".concat(m,"-link")},d),o):l.createElement("span",r()({className:"".concat(m,"-link")},d),o),n=t,t=s?l.createElement(b.a,r()({overlay:s,placement:"bottomCenter"},u),l.createElement("span",{className:"".concat(m,"-overlay-link")},n,l.createElement(f.a,null))):n,o?l.createElement("span",null,t,c&&""!==c&&l.createElement("span",{className:"".concat(m,"-separator")},c)):null};g.__ANT_BREADCRUMB_ITEM=!0;var O=g,h=function(e){var t=e.children,n=(0,l.useContext(v.b).getPrefixCls)("breadcrumb");return l.createElement("span",{className:"".concat(n,"-separator")},t||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var y=h,x=n(1030),C=n(144),E=n(43),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function w(e,t,n,a){var r=n.indexOf(e)===n.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?l.createElement("span",null,i):l.createElement("a",{href:"#/".concat(a.join("/"))},i)}var T=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},P=function(e){var t,n=e.prefixCls,a=e.separator,i=void 0===a?"/":a,o=e.style,u=e.className,p=e.routes,f=e.children,b=e.itemRender,j=void 0===b?w:b,g=e.params,h=void 0===g?{}:g,y=N(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=l.useContext(v.b),R=P.getPrefixCls,S=P.direction,k=R("breadcrumb",n);if(p&&p.length>0){var M=[];t=p.map((function(e){var t,n=T(e.path,h);return n&&M.push(n),e.children&&e.children.length&&(t=l.createElement(x.a,null,e.children.map((function(e){return l.createElement(x.a.Item,{key:e.path||e.breadcrumbName},j(e,h,p,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=s()(e),r=T(t,n);return r&&a.push(r),a}(M,e.path,h)))})))),l.createElement(O,{overlay:t,separator:i,key:n||e.breadcrumbName},j(e,h,p,M))}))}else f&&(t=Object(m.a)(f).map((function(e,t){return e?(Object(C.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(E.a)(e,{separator:i,key:t})):e})));var _=d()(k,c()({},"".concat(k,"-rtl"),"rtl"===S),u);return l.createElement("div",r()({className:_,style:o},y),t)};P.Item=O,P.Separator=y;var R=P;t.a=R},1103:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(117)),c=a(n(6)),o=r(n(1104)),s=r(n(143)),l=function(e,t){return c.createElement(s.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:o.default}))};l.displayName="DownOutlined";var u=c.forwardRef(l);t.default=u},1104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=n(421).a.div(r()),c={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},1176:function(e,t,n){"use strict";var a=n(1548);t.a=a.a},1177:function(e,t,n){"use strict";var a=n(1477);t.a=a.a},1178:function(e,t,n){"use strict";var a=n(21),r=n.n(a),i=n(23),c=n.n(i),o=n(123),s=n.n(o),l=n(194),u=n.n(l),d=n(195),m=n.n(d),p=n(196),f=n.n(p),b=n(6),v=n(22),j=n.n(v),g=n(202),O=n(1080),h=n.n(O),y=n(307),x=n(296),C=n(43),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=(Object(x.a)("small","default","large"),null);var w=function(e){m()(n,e);var t=f()(n);function n(e){var a;s()(this,n),(a=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||a.props).delay;t&&(a.cancelExistingSpin(),a.updateSpinning=h()(a.originalUpdateSpinning,t))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var t,n=e.getPrefixCls,i=e.direction,o=a.props,s=o.prefixCls,l=o.className,u=o.size,d=o.tip,m=o.wrapperClassName,p=o.style,f=E(o,["prefixCls","className","size","tip","wrapperClassName","style"]),v=a.state.spinning,O=n("spin",s),h=j()(O,(t={},c()(t,"".concat(O,"-sm"),"small"===u),c()(t,"".concat(O,"-lg"),"large"===u),c()(t,"".concat(O,"-spinning"),v),c()(t,"".concat(O,"-show-text"),!!d),c()(t,"".concat(O,"-rtl"),"rtl"===i),t),l),y=Object(g.default)(f,["spinning","delay","indicator"]),x=b.createElement("div",r()({},y,{style:p,className:h}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(C.b)(n)?Object(C.a)(n,{className:j()(n.props.className,a)}):Object(C.b)(N)?Object(C.a)(N,{className:j()(N.props.className,a)}):b.createElement("span",{className:j()(a,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(O,a.props),d?b.createElement("div",{className:"".concat(O,"-text")},d):null);if(a.isNestedPattern()){var w=j()("".concat(O,"-container"),c()({},"".concat(O,"-blur"),v));return b.createElement("div",r()({},y,{className:j()("".concat(O,"-nested-loading"),m)}),v&&b.createElement("div",{key:"loading"},x),b.createElement("div",{className:w,key:"container"},a.props.children))}return x};var i=e.spinning,o=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(i,e.delay);return a.state={spinning:i&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(y.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){N=e}}]),n}(b.Component);w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=w},1364:function(e,t,n){"use strict";var a=n(4),r=n(29),i=n(50),c=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.migrationRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.migrationEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.migrationCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.migrationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.migrationDestroy)})),selectPermissionToImport:u};t.a=d},1365:function(e,t,n){"use strict";var a=n(4),r=n(29),i=n(50),c=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.gouvernoratMigrationRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.gouvernoratMigrationEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.gouvernoratMigrationCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.gouvernoratMigrationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.gouvernoratMigrationDestroy)})),selectPermissionToImport:u};t.a=d},1540:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.gouvernoratMigration.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1583:function(e,t,n){"use strict";var a=n(17),r=(n(6),n(201)),i=n(39),c=n(1364);t.a=function(e){var t=Object(i.e)(c.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{to:"/migration/".concat(n.id),children:n.date})},n.id):Object(a.jsx)("div",{children:n.date},n.id);var n}))}):null}},2066:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1176),i=n(1177),c=n(6),o=n(39),s=n(41),l=n(2),u=n(529),d=n(4),m=function(e){return e.gouvernoratMigration.view},p=Object(d.a)([m],(function(e){return e.record})),f={selectLoading:Object(d.a)([m],(function(e){return Boolean(e.loading)})),selectRecord:p,selectRaw:m},b=n(0),v=n(1077),j=n(1175),g=n(1951),O=n(1583),h=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(v.a,{}):Object(a.jsxs)(j.a,{children:[Boolean(t.nameAR)&&Object(a.jsx)(g.a.Item,Object(b.a)(Object(b.a)({},j.b),{},{label:Object(l.c)("entities.gouvernoratMigration.fields.nameAR"),children:t.nameAR})),Boolean(t.nameFR)&&Object(a.jsx)(g.a.Item,Object(b.a)(Object(b.a)({},j.b),{},{label:Object(l.c)("entities.gouvernoratMigration.fields.nameFR"),children:t.nameFR})),Boolean(t.nameEN)&&Object(a.jsx)(g.a.Item,Object(b.a)(Object(b.a)({},j.b),{},{label:Object(l.c)("entities.gouvernoratMigration.fields.nameEN"),children:t.nameEN})),Boolean(t.migrations)&&Boolean(t.migrations.length)&&Object(a.jsx)(g.a.Item,Object(b.a)(Object(b.a)({},j.b),{},{label:Object(l.c)("entities.gouvernoratMigration.fields.migrations"),children:Object(a.jsx)(O.a,{value:t.migrations})}))]})},y=n(1047),x=n(450),C=n(447),E=n(1093),N=n(201),w=n(228),T=n(1365),P=n(405),R=n(1540),S=n(1065),k=function(e){var t=Object(o.d)(),n=Object(s.h)(),r=Object(o.e)(w.a.selectPermissionToRead),i=Object(o.e)(T.a.selectPermissionToEdit),c=Object(o.e)(T.a.selectPermissionToDestroy),u=Object(o.e)(R.a.selectLoading),d=n.params.id;return Object(a.jsxs)(S.a,{children:[i&&Object(a.jsx)(N.a,{to:"/gouvernorat-migration/".concat(d,"/edit"),children:Object(a.jsx)(x.a,{title:Object(l.c)("common.edit"),children:Object(a.jsx)(C.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),c&&Object(a.jsx)(E.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(d))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(a.jsx)(x.a,{title:Object(l.c)("common.destroy"),children:Object(a.jsx)(C.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(N.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(x.a,{title:Object(l.c)("auditLog.menu"),children:Object(a.jsx)(C.a,{icon:Object(a.jsx)(y.a,{})})})})]})},M=n(1062),_=n(1063),B=n(1056);t.default=function(e){var t=Object(o.d)(),n=Object(s.h)(),d=Object(o.e)(f.selectLoading),m=Object(o.e)(f.selectRecord);return Object(c.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.gouvernoratMigration.menu"),"/gouvernorat-migration"],[Object(l.c)("entities.gouvernoratMigration.view.title")]]}),Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(i.a,{span:16,children:Object(a.jsx)(B.a,{children:Object(l.c)("entities.gouvernoratMigration.view.title")})}),Object(a.jsx)(i.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(k,{match:n})})]}),Object(a.jsx)(h,{loading:d,record:m})]})]})}}}]);