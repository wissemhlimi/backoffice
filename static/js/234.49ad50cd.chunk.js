(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[234],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(421).a.h1(r());t.a=c},1061:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1063:function(e,t,n){"use strict";var a=n(17),r=n(1107),c=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1067:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1074:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1112))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1080:function(e,t,n){"use strict";var a=n(17),r=n(1189);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1083:function(e,t,n){var a=n(436),r=n(1089),c=n(846),i=Math.max,o=Math.min;e.exports=function(e,t,n){var l,s,u,d,p,m,f=0,b=!1,v=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(t){var n=l,a=s;return l=s=void 0,f=t,d=e.apply(a,n)}function y(e){return f=e,p=setTimeout(h,t),b?O(e):d}function g(e){var n=e-m;return void 0===m||n>=t||n<0||v&&e-f>=u}function h(){var e=r();if(g(e))return x(e);p=setTimeout(h,function(e){var n=t-(e-m);return v?o(n,u-(e-f)):n}(e))}function x(e){return p=void 0,j&&l?O(e):(l=s=void 0,d)}function E(){var e=r(),n=g(e);if(l=arguments,s=this,m=e,n){if(void 0===p)return y(m);if(v)return clearTimeout(p),p=setTimeout(h,t),O(m)}return void 0===p&&(p=setTimeout(h,t)),d}return t=c(t)||0,a(n)&&(b=!!n.leading,u=(v="maxWait"in n)?i(c(n.maxWait)||0,t):u,j="trailing"in n?!!n.trailing:j),E.cancel=function(){void 0!==p&&clearTimeout(p),f=0,l=m=s=p=void 0},E.flush=function(){return void 0===p?d:x(r())},E}},1089:function(e,t,n){var a=n(298);e.exports=function(){return a.Date.now()}},1099:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(42),i=n.n(c),o=n(6),l=n(22),s=n.n(l),u=n(572),d=n.n(u),p=n(203),m=n(450),f=n(447),b=n(571),v=n(449),j=n(434),O=n(307),y=n(540),g=n(43),h=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=i()(n,2),c=a[0],l=a[1];o.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},d=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(h,t)},E=function(t){u(!1,t),e.onCancel&&e.onCancel.call(h,t)},C=o.useContext(O.b).getPrefixCls,N=e.prefixCls,w=e.placement,R=e.children,P=e.overlayClassName,T=x(e,["prefixCls","placement","children","overlayClassName"]),S=C("popover",N),k=C("popconfirm",N),_=s()(k,P),B=o.createElement(v.a,{componentName:"Popconfirm",defaultLocale:j.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,i=e.title,l=e.cancelText,s=e.okText,u=e.okType,p=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},p,o.createElement("div",{className:"".concat(t,"-message-title")},Object(y.a)(i))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(f.a,r()({onClick:E,size:"small"},c),l||n.cancelText),o.createElement(f.a,r()({onClick:d},Object(b.a)(u),{size:"small"},a),s||n.okText)))}(S,t)}));return o.createElement(m.a,r()({},T,{prefixCls:S,placement:w,onVisibleChange:function(t){e.disabled||u(t)},visible:c,overlay:B,overlayClassName:_,ref:t}),Object(g.a)(R,{onKeyDown:function(e){var t,n;o.isValidElement(R)&&(null===(n=null===R||void 0===R?void 0:(t=R.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===p.a.ESC&&c&&u(!1,e)}(e)}}))}));E.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},t.a=E},1107:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(23),i=n.n(c),o=n(568),l=n.n(o),s=n(6),u=n(22),d=n.n(u),p=n(146),m=n(1074),f=n.n(m),b=n(578),v=n(307),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e){var t,n,a=e.prefixCls,c=e.separator,i=void 0===c?"/":c,o=e.children,l=e.overlay,u=e.dropdownProps,d=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,s.useContext(v.b).getPrefixCls)("breadcrumb",a);return t="href"in d?s.createElement("a",r()({className:"".concat(p,"-link")},d),o):s.createElement("span",r()({className:"".concat(p,"-link")},d),o),n=t,t=l?s.createElement(b.a,r()({overlay:l,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(p,"-overlay-link")},n,s.createElement(f.a,null))):n,o?s.createElement("span",null,t,i&&""!==i&&s.createElement("span",{className:"".concat(p,"-separator")},i)):null};O.__ANT_BREADCRUMB_ITEM=!0;var y=O,g=function(e){var t=e.children,n=(0,s.useContext(v.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var h=g,x=n(1030),E=n(144),C=n(43),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function w(e,t,n,a){var r=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?s.createElement("span",null,c):s.createElement("a",{href:"#/".concat(a.join("/"))},c)}var R=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},P=function(e){var t,n=e.prefixCls,a=e.separator,c=void 0===a?"/":a,o=e.style,u=e.className,m=e.routes,f=e.children,b=e.itemRender,j=void 0===b?w:b,O=e.params,g=void 0===O?{}:O,h=N(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=s.useContext(v.b),T=P.getPrefixCls,S=P.direction,k=T("breadcrumb",n);if(m&&m.length>0){var _=[];t=m.map((function(e){var t,n=R(e.path,g);return n&&_.push(n),e.children&&e.children.length&&(t=s.createElement(x.a,null,e.children.map((function(e){return s.createElement(x.a.Item,{key:e.path||e.breadcrumbName},j(e,g,m,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=l()(e),r=R(t,n);return r&&a.push(r),a}(_,e.path,g)))})))),s.createElement(y,{overlay:t,separator:c,key:n||e.breadcrumbName},j(e,g,m,_))}))}else f&&(t=Object(p.a)(f).map((function(e,t){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(C.a)(e,{separator:c,key:t})):e})));var B=d()(k,i()({},"".concat(k,"-rtl"),"rtl"===S),u);return s.createElement("div",r()({className:B,style:o},h),t)};P.Item=y,P.Separator=h;var T=P;t.a=T},1112:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(117)),i=a(n(6)),o=r(n(1113)),l=r(n(143)),s=function(e,t){return i.createElement(l.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};s.displayName="DownOutlined";var u=i.forwardRef(s);t.default=u},1113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1185:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1187:function(e,t,n){"use strict";var a=n(1706);t.a=a.a},1188:function(e,t,n){"use strict";var a=n(1636);t.a=a.a},1189:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(23),i=n.n(c),o=n(123),l=n.n(o),s=n(194),u=n.n(s),d=n(195),p=n.n(d),m=n(196),f=n.n(m),b=n(6),v=n(22),j=n.n(v),O=n(202),y=n(1083),g=n.n(y),h=n(307),x=n(296),E=n(43),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=(Object(x.a)("small","default","large"),null);var w=function(e){p()(n,e);var t=f()(n);function n(e){var a;l()(this,n),(a=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||a.props).delay;t&&(a.cancelExistingSpin(),a.updateSpinning=g()(a.originalUpdateSpinning,t))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var t,n=e.getPrefixCls,c=e.direction,o=a.props,l=o.prefixCls,s=o.className,u=o.size,d=o.tip,p=o.wrapperClassName,m=o.style,f=C(o,["prefixCls","className","size","tip","wrapperClassName","style"]),v=a.state.spinning,y=n("spin",l),g=j()(y,(t={},i()(t,"".concat(y,"-sm"),"small"===u),i()(t,"".concat(y,"-lg"),"large"===u),i()(t,"".concat(y,"-spinning"),v),i()(t,"".concat(y,"-show-text"),!!d),i()(t,"".concat(y,"-rtl"),"rtl"===c),t),s),h=Object(O.default)(f,["spinning","delay","indicator"]),x=b.createElement("div",r()({},h,{style:m,className:g}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(E.b)(n)?Object(E.a)(n,{className:j()(n.props.className,a)}):Object(E.b)(N)?Object(E.a)(N,{className:j()(N.props.className,a)}):b.createElement("span",{className:j()(a,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(y,a.props),d?b.createElement("div",{className:"".concat(y,"-text")},d):null);if(a.isNestedPattern()){var w=j()("".concat(y,"-container"),i()({},"".concat(y,"-blur"),v));return b.createElement("div",r()({},h,{className:j()("".concat(y,"-nested-loading"),p)}),v&&b.createElement("div",{key:"loading"},x),b.createElement("div",{className:w,key:"container"},a.props.children))}return x};var c=e.spinning,o=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return a.state={spinning:c&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(h.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){N=e}}]),n}(b.Component);w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=w},1499:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.typologieRevendicationRead)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.typologieRevendicationEdit)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.typologieRevendicationCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.typologieRevendicationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.typologieRevendicationDestroy)})),selectPermissionToImport:u};t.a=d},1681:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.typologieRevendication.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},2216:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(6),c=n(39),i=n(41),o=n(2),l=n(514),s=n(4),u=function(e){return e.typologieRevendication.view},d=Object(s.a)([u],(function(e){return e.record})),p={selectLoading:Object(s.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:u},m=n(0),f=n(1080),b=n(1185),v=n(1187),j=n(1188),O=n(2120),y=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(f.a,{}):Object(a.jsx)(b.a,{children:Object(a.jsx)(v.a,{gutter:24,children:Object(a.jsx)(j.a,{span:24,children:Object(a.jsxs)("fieldset",{style:{borderTopWidth:0},children:[Object(a.jsx)("legend",{children:Object(o.c)("common.informations")}),Boolean(t.nameAR)&&Object(a.jsx)(O.a.Item,Object(m.a)(Object(m.a)({},b.b),{},{label:Object(o.c)("entities.typologieRevendication.fields.nameAR"),children:t.nameAR})),Boolean(t.nameFR)&&Object(a.jsx)(O.a.Item,Object(m.a)(Object(m.a)({},b.b),{},{label:Object(o.c)("entities.typologieRevendication.fields.nameFR"),children:t.nameFR})),Boolean(t.nameEN)&&Object(a.jsx)(O.a.Item,Object(m.a)(Object(m.a)({},b.b),{},{label:Object(o.c)("entities.typologieRevendication.fields.nameEN"),children:t.nameEN}))]})})})})},g=n(1047),h=n(450),x=n(447),E=n(1099),C=n(201),N=n(228),w=n(1499),R=n(391),P=n(1681),T=n(1067),S=function(e){var t=Object(c.d)(),n=Object(i.h)(),r=Object(c.e)(N.a.selectPermissionToRead),l=Object(c.e)(w.a.selectPermissionToEdit),s=Object(c.e)(w.a.selectPermissionToDestroy),u=Object(c.e)(P.a.selectLoading),d=n.params.id;return Object(a.jsxs)(T.a,{children:[l&&Object(a.jsx)(C.a,{to:"/typologie-revendication/".concat(d,"/edit"),children:Object(a.jsx)(h.a,{title:Object(o.c)("common.edit"),children:Object(a.jsx)(x.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&Object(a.jsx)(E.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(d))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(a.jsx)(h.a,{title:Object(o.c)("common.destroy"),children:Object(a.jsx)(x.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(C.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(h.a,{title:Object(o.c)("auditLog.menu"),children:Object(a.jsx)(x.a,{icon:Object(a.jsx)(g.a,{})})})})]})},k=n(1061),_=n(1063),B=n(1056);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),s=Object(c.e)(p.selectLoading),u=Object(c.e)(p.selectRecord);return Object(r.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.typologieRevendication.menu"),"/typologie-revendication"],[Object(o.c)("entities.typologieRevendication.view.title")]]}),Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(v.a,{children:[Object(a.jsx)(j.a,{span:16,children:Object(a.jsx)(B.a,{children:Object(o.c)("entities.typologieRevendication.view.title")})}),Object(a.jsx)(j.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(S,{match:n})})]}),Object(a.jsx)(y,{loading:s,record:u})]})]})}}}]);