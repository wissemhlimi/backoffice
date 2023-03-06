(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[71],{1056:function(e,n,t){"use strict";var a=t(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var i=t(421).a.h1(r());n.a=i},1062:function(e,n,t){"use strict";var a=t(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var i=t(421).a.div(r());n.a=i},1063:function(e,n,t){"use strict";var a=t(17),r=t(1101),i=(t(6),t(201));n.a=function(e){var n=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:n(e)?Object(a.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,n,t){"use strict";var a=t(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=t(421).a.div(r());n.a=i},1071:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=(a=t(1104))&&a.__esModule?a:{default:a};n.default=r,e.exports=r},1077:function(e,n,t){"use strict";var a=t(17),r=t(1178);t(6);n.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1080:function(e,n,t){var a=t(436),r=t(1086),i=t(846),c=Math.max,o=Math.min;e.exports=function(e,n,t){var l,s,u,p,f,d,m=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=l,a=s;return l=s=void 0,m=n,p=e.apply(a,t)}function h(e){return m=e,f=setTimeout(x,n),v?g(e):p}function O(e){var t=e-d;return void 0===d||t>=n||t<0||b&&e-m>=u}function x(){var e=r();if(O(e))return j(e);f=setTimeout(x,function(e){var t=n-(e-d);return b?o(t,u-(e-m)):t}(e))}function j(e){return f=void 0,y&&l?g(e):(l=s=void 0,p)}function E(){var e=r(),t=O(e);if(l=arguments,s=this,d=e,t){if(void 0===f)return h(d);if(b)return clearTimeout(f),f=setTimeout(x,n),g(d)}return void 0===f&&(f=setTimeout(x,n)),p}return n=i(n)||0,a(t)&&(v=!!t.leading,u=(b="maxWait"in t)?c(i(t.maxWait)||0,n):u,y="trailing"in t?!!t.trailing:y),E.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=d=s=f=void 0},E.flush=function(){return void 0===f?p:j(r())},E}},1086:function(e,n,t){var a=t(298);e.exports=function(){return a.Date.now()}},1093:function(e,n,t){"use strict";var a=t(21),r=t.n(a),i=t(42),c=t.n(i),o=t(6),l=t(22),s=t.n(l),u=t(572),p=t.n(u),f=t(203),d=t(450),m=t(447),v=t(571),b=t(449),y=t(434),g=t(307),h=t(540),O=t(43),x=void 0,j=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},E=o.forwardRef((function(e,n){var t=o.useState(e.visible),a=c()(t,2),i=a[0],l=a[1];o.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(n,t){"visible"in e||l(n),e.onVisibleChange&&e.onVisibleChange(n,t)},p=function(n){u(!1,n),e.onConfirm&&e.onConfirm.call(x,n)},E=function(n){u(!1,n),e.onCancel&&e.onCancel.call(x,n)},C=o.useContext(g.b).getPrefixCls,N=e.prefixCls,w=e.placement,P=e.children,T=e.overlayClassName,S=j(e,["prefixCls","placement","children","overlayClassName"]),k=C("popover",N),_=C("popconfirm",N),R=s()(_,T),A=o.createElement(b.a,{componentName:"Popconfirm",defaultLocale:y.a.Popconfirm},(function(n){return function(n,t){var a=e.okButtonProps,i=e.cancelButtonProps,c=e.title,l=e.cancelText,s=e.okText,u=e.okType,f=e.icon;return o.createElement("div",{className:"".concat(n,"-inner-content")},o.createElement("div",{className:"".concat(n,"-message")},f,o.createElement("div",{className:"".concat(n,"-message-title")},Object(h.a)(c))),o.createElement("div",{className:"".concat(n,"-buttons")},o.createElement(m.a,r()({onClick:E,size:"small"},i),l||t.cancelText),o.createElement(m.a,r()({onClick:p},Object(v.a)(u),{size:"small"},a),s||t.okText)))}(k,n)}));return o.createElement(d.a,r()({},S,{prefixCls:k,placement:w,onVisibleChange:function(n){e.disabled||u(n)},visible:i,overlay:A,overlayClassName:R,ref:n}),Object(O.a)(P,{onKeyDown:function(e){var n,t;o.isValidElement(P)&&(null===(t=null===P||void 0===P?void 0:(n=P.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===f.a.ESC&&i&&u(!1,e)}(e)}}))}));E.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(p.a,null),disabled:!1},n.a=E},1101:function(e,n,t){"use strict";var a=t(21),r=t.n(a),i=t(23),c=t.n(i),o=t(568),l=t.n(o),s=t(6),u=t(22),p=t.n(u),f=t(146),d=t(1071),m=t.n(d),v=t(578),b=t(307),y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=function(e){var n,t,a=e.prefixCls,i=e.separator,c=void 0===i?"/":i,o=e.children,l=e.overlay,u=e.dropdownProps,p=y(e,["prefixCls","separator","children","overlay","dropdownProps"]),f=(0,s.useContext(b.b).getPrefixCls)("breadcrumb",a);return n="href"in p?s.createElement("a",r()({className:"".concat(f,"-link")},p),o):s.createElement("span",r()({className:"".concat(f,"-link")},p),o),t=n,n=l?s.createElement(v.a,r()({overlay:l,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(f,"-overlay-link")},t,s.createElement(m.a,null))):t,o?s.createElement("span",null,n,c&&""!==c&&s.createElement("span",{className:"".concat(f,"-separator")},c)):null};g.__ANT_BREADCRUMB_ITEM=!0;var h=g,O=function(e){var n=e.children,t=(0,s.useContext(b.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(t,"-separator")},n||"/")};O.__ANT_BREADCRUMB_SEPARATOR=!0;var x=O,j=t(1030),E=t(144),C=t(43),N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};function w(e,n,t,a){var r=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return r?s.createElement("span",null,i):s.createElement("a",{href:"#/".concat(a.join("/"))},i)}var P=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},T=function(e){var n,t=e.prefixCls,a=e.separator,i=void 0===a?"/":a,o=e.style,u=e.className,d=e.routes,m=e.children,v=e.itemRender,y=void 0===v?w:v,g=e.params,O=void 0===g?{}:g,x=N(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),T=s.useContext(b.b),S=T.getPrefixCls,k=T.direction,_=S("breadcrumb",t);if(d&&d.length>0){var R=[];n=d.map((function(e){var n,t=P(e.path,O);return t&&R.push(t),e.children&&e.children.length&&(n=s.createElement(j.a,null,e.children.map((function(e){return s.createElement(j.a.Item,{key:e.path||e.breadcrumbName},y(e,O,d,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=l()(e),r=P(n,t);return r&&a.push(r),a}(R,e.path,O)))})))),s.createElement(h,{overlay:n,separator:i,key:t||e.breadcrumbName},y(e,O,d,R))}))}else m&&(n=Object(f.a)(m).map((function(e,n){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(C.a)(e,{separator:i,key:n})):e})));var A=p()(_,c()({},"".concat(_,"-rtl"),"rtl"===k),u);return s.createElement("div",r()({className:A,style:o},x),n)};T.Item=h,T.Separator=x;var S=T;n.a=S},1104:function(e,n,t){"use strict";var a=t(119),r=t(53);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(117)),c=a(t(6)),o=r(t(1105)),l=r(t(143)),s=function(e,n){return c.createElement(l.default,(0,i.default)((0,i.default)({},e),{},{ref:n,icon:o.default}))};s.displayName="DownOutlined";var u=c.forwardRef(s);n.default=u},1105:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1175:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var a=t(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=t(421).a.div(r()),c={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.a=i},1176:function(e,n,t){"use strict";var a=t(1548);n.a=a.a},1177:function(e,n,t){"use strict";var a=t(1478);n.a=a.a},1178:function(e,n,t){"use strict";var a=t(21),r=t.n(a),i=t(23),c=t.n(i),o=t(123),l=t.n(o),s=t(194),u=t.n(s),p=t(195),f=t.n(p),d=t(196),m=t.n(d),v=t(6),b=t(22),y=t.n(b),g=t(202),h=t(1080),O=t.n(h),x=t(307),j=t(296),E=t(43),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},N=(Object(j.a)("small","default","large"),null);var w=function(e){f()(t,e);var n=m()(t);function t(e){var a;l()(this,t),(a=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||a.props).delay;n&&(a.cancelExistingSpin(),a.updateSpinning=O()(a.originalUpdateSpinning,n))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var n,t=e.getPrefixCls,i=e.direction,o=a.props,l=o.prefixCls,s=o.className,u=o.size,p=o.tip,f=o.wrapperClassName,d=o.style,m=C(o,["prefixCls","className","size","tip","wrapperClassName","style"]),b=a.state.spinning,h=t("spin",l),O=y()(h,(n={},c()(n,"".concat(h,"-sm"),"small"===u),c()(n,"".concat(h,"-lg"),"large"===u),c()(n,"".concat(h,"-spinning"),b),c()(n,"".concat(h,"-show-text"),!!p),c()(n,"".concat(h,"-rtl"),"rtl"===i),n),s),x=Object(g.default)(m,["spinning","delay","indicator"]),j=v.createElement("div",r()({},x,{style:d,className:O}),function(e,n){var t=n.indicator,a="".concat(e,"-dot");return null===t?null:Object(E.b)(t)?Object(E.a)(t,{className:y()(t.props.className,a)}):Object(E.b)(N)?Object(E.a)(N,{className:y()(N.props.className,a)}):v.createElement("span",{className:y()(a,"".concat(e,"-dot-spin"))},v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}))}(h,a.props),p?v.createElement("div",{className:"".concat(h,"-text")},p):null);if(a.isNestedPattern()){var w=y()("".concat(h,"-container"),c()({},"".concat(h,"-blur"),b));return v.createElement("div",r()({},x,{className:y()("".concat(h,"-nested-loading"),f)}),b&&v.createElement("div",{key:"loading"},j),v.createElement("div",{className:w,key:"container"},a.props.children))}return j};var i=e.spinning,o=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(i,e.delay);return a.state={spinning:i&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return v.createElement(x.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){N=e}}]),t}(v.Component);w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},n.a=w},1269:function(e,n,t){"use strict";var a=t(4),r=t(29),i=t(50),c=t(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,n){return new i.a(e,n).match(c.a.values.mediaRead)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,n){return new i.a(e,n).match(c.a.values.mediaEdit)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,n){return new i.a(e,n).match(c.a.values.mediaCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,n){return new i.a(e,n).match(c.a.values.mediaImport)})),p={selectPermissionToRead:o,selectPermissionToEdit:l,selectPermissionToCreate:s,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,n){return new i.a(e,n).match(c.a.values.mediaDestroy)})),selectPermissionToImport:u};n.a=p},1600:function(e,n,t){"use strict";var a=t(17),r=(t(6),t(201)),i=t(39),c=t(1269);n.a=function(e){var n=Object(i.e)(c.a.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?Object(a.jsx)(a.Fragment,{children:t().map((function(e){return t=e,n?Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{to:"/media/".concat(t.id),children:t.nameAR})},t.id):Object(a.jsx)("div",{children:t.nameAR},t.id);var t}))}):null}}}]);