(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[237],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(421).a.h1(r());t.a=c},1061:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1063:function(e,t,n){"use strict";var a=n(17),r=n(1107),c=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1067:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1074:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1112))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1080:function(e,t,n){"use strict";var a=n(17),r=n(1189);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1083:function(e,t,n){var a=n(436),r=n(1089),c=n(846),i=Math.max,o=Math.min;e.exports=function(e,t,n){var l,s,u,p,d,b,f=0,m=!1,j=!1,O=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=l,a=s;return l=s=void 0,f=t,p=e.apply(a,n)}function y(e){return f=e,d=setTimeout(h,t),m?v(e):p}function g(e){var n=e-b;return void 0===b||n>=t||n<0||j&&e-f>=u}function h(){var e=r();if(g(e))return x(e);d=setTimeout(h,function(e){var n=t-(e-b);return j?o(n,u-(e-f)):n}(e))}function x(e){return d=void 0,O&&l?v(e):(l=s=void 0,p)}function E(){var e=r(),n=g(e);if(l=arguments,s=this,b=e,n){if(void 0===d)return y(b);if(j)return clearTimeout(d),d=setTimeout(h,t),v(b)}return void 0===d&&(d=setTimeout(h,t)),p}return t=c(t)||0,a(n)&&(m=!!n.leading,u=(j="maxWait"in n)?i(c(n.maxWait)||0,t):u,O="trailing"in n?!!n.trailing:O),E.cancel=function(){void 0!==d&&clearTimeout(d),f=0,l=b=s=d=void 0},E.flush=function(){return void 0===d?p:x(r())},E}},1089:function(e,t,n){var a=n(298);e.exports=function(){return a.Date.now()}},1099:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(42),i=n.n(c),o=n(6),l=n(22),s=n.n(l),u=n(572),p=n.n(u),d=n(203),b=n(450),f=n(447),m=n(571),j=n(449),O=n(434),v=n(307),y=n(540),g=n(43),h=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=i()(n,2),c=a[0],l=a[1];o.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},p=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(h,t)},E=function(t){u(!1,t),e.onCancel&&e.onCancel.call(h,t)},N=o.useContext(v.b).getPrefixCls,C=e.prefixCls,w=e.placement,P=e.children,S=e.overlayClassName,k=x(e,["prefixCls","placement","children","overlayClassName"]),D=N("popover",C),B=N("popconfirm",C),T=s()(B,S),I=o.createElement(j.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,i=e.title,l=e.cancelText,s=e.okText,u=e.okType,d=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},d,o.createElement("div",{className:"".concat(t,"-message-title")},Object(y.a)(i))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(f.a,r()({onClick:E,size:"small"},c),l||n.cancelText),o.createElement(f.a,r()({onClick:p},Object(m.a)(u),{size:"small"},a),s||n.okText)))}(D,t)}));return o.createElement(b.a,r()({},k,{prefixCls:D,placement:w,onVisibleChange:function(t){e.disabled||u(t)},visible:c,overlay:I,overlayClassName:T,ref:t}),Object(g.a)(P,{onKeyDown:function(e){var t,n;o.isValidElement(P)&&(null===(n=null===P||void 0===P?void 0:(t=P.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===d.a.ESC&&c&&u(!1,e)}(e)}}))}));E.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(p.a,null),disabled:!1},t.a=E},1107:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(23),i=n.n(c),o=n(568),l=n.n(o),s=n(6),u=n(22),p=n.n(u),d=n(146),b=n(1074),f=n.n(b),m=n(578),j=n(307),O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){var t,n,a=e.prefixCls,c=e.separator,i=void 0===c?"/":c,o=e.children,l=e.overlay,u=e.dropdownProps,p=O(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,s.useContext(j.b).getPrefixCls)("breadcrumb",a);return t="href"in p?s.createElement("a",r()({className:"".concat(d,"-link")},p),o):s.createElement("span",r()({className:"".concat(d,"-link")},p),o),n=t,t=l?s.createElement(m.a,r()({overlay:l,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(d,"-overlay-link")},n,s.createElement(f.a,null))):n,o?s.createElement("span",null,t,i&&""!==i&&s.createElement("span",{className:"".concat(d,"-separator")},i)):null};v.__ANT_BREADCRUMB_ITEM=!0;var y=v,g=function(e){var t=e.children,n=(0,s.useContext(j.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var h=g,x=n(1030),E=n(144),N=n(43),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function w(e,t,n,a){var r=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?s.createElement("span",null,c):s.createElement("a",{href:"#/".concat(a.join("/"))},c)}var P=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},S=function(e){var t,n=e.prefixCls,a=e.separator,c=void 0===a?"/":a,o=e.style,u=e.className,b=e.routes,f=e.children,m=e.itemRender,O=void 0===m?w:m,v=e.params,g=void 0===v?{}:v,h=C(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),S=s.useContext(j.b),k=S.getPrefixCls,D=S.direction,B=k("breadcrumb",n);if(b&&b.length>0){var T=[];t=b.map((function(e){var t,n=P(e.path,g);return n&&T.push(n),e.children&&e.children.length&&(t=s.createElement(x.a,null,e.children.map((function(e){return s.createElement(x.a.Item,{key:e.path||e.breadcrumbName},O(e,g,b,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=l()(e),r=P(t,n);return r&&a.push(r),a}(T,e.path,g)))})))),s.createElement(y,{overlay:t,separator:c,key:n||e.breadcrumbName},O(e,g,b,T))}))}else f&&(t=Object(d.a)(f).map((function(e,t){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:c,key:t})):e})));var I=p()(B,i()({},"".concat(B,"-rtl"),"rtl"===D),u);return s.createElement("div",r()({className:I,style:o},h),t)};S.Item=y,S.Separator=h;var k=S;t.a=k},1112:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(117)),i=a(n(6)),o=r(n(1113)),l=r(n(143)),s=function(e,t){return i.createElement(l.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};s.displayName="DownOutlined";var u=i.forwardRef(s);t.default=u},1113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1185:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1189:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(23),i=n.n(c),o=n(123),l=n.n(o),s=n(194),u=n.n(s),p=n(195),d=n.n(p),b=n(196),f=n.n(b),m=n(6),j=n(22),O=n.n(j),v=n(202),y=n(1083),g=n.n(y),h=n(307),x=n(296),E=n(43),N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=(Object(x.a)("small","default","large"),null);var w=function(e){d()(n,e);var t=f()(n);function n(e){var a;l()(this,n),(a=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||a.props).delay;t&&(a.cancelExistingSpin(),a.updateSpinning=g()(a.originalUpdateSpinning,t))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var t,n=e.getPrefixCls,c=e.direction,o=a.props,l=o.prefixCls,s=o.className,u=o.size,p=o.tip,d=o.wrapperClassName,b=o.style,f=N(o,["prefixCls","className","size","tip","wrapperClassName","style"]),j=a.state.spinning,y=n("spin",l),g=O()(y,(t={},i()(t,"".concat(y,"-sm"),"small"===u),i()(t,"".concat(y,"-lg"),"large"===u),i()(t,"".concat(y,"-spinning"),j),i()(t,"".concat(y,"-show-text"),!!p),i()(t,"".concat(y,"-rtl"),"rtl"===c),t),s),h=Object(v.default)(f,["spinning","delay","indicator"]),x=m.createElement("div",r()({},h,{style:b,className:g}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(E.b)(n)?Object(E.a)(n,{className:O()(n.props.className,a)}):Object(E.b)(C)?Object(E.a)(C,{className:O()(C.props.className,a)}):m.createElement("span",{className:O()(a,"".concat(e,"-dot-spin"))},m.createElement("i",{className:"".concat(e,"-dot-item")}),m.createElement("i",{className:"".concat(e,"-dot-item")}),m.createElement("i",{className:"".concat(e,"-dot-item")}),m.createElement("i",{className:"".concat(e,"-dot-item")}))}(y,a.props),p?m.createElement("div",{className:"".concat(y,"-text")},p):null);if(a.isNestedPattern()){var w=O()("".concat(y,"-container"),i()({},"".concat(y,"-blur"),j));return m.createElement("div",r()({},h,{className:O()("".concat(y,"-nested-loading"),d)}),j&&m.createElement("div",{key:"loading"},x),m.createElement("div",{className:w,key:"container"},a.props.children))}return x};var c=e.spinning,o=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return a.state={spinning:c&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return m.createElement(h.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){C=e}}]),n}(m.Component);w.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=w},1660:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.apropos.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},2180:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(6),c=n(39),i=n(41),o=n(2),l=n(491),s=n(4),u=function(e){return e.apropos.view},p=Object(s.a)([u],(function(e){return e.record})),d={selectLoading:Object(s.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:p,selectRaw:u},b=n(0),f=n(1080),m=n(1185),j=n(2120),O=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(f.a,{}):Object(a.jsxs)(m.a,{children:[Boolean(t.about)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.about"),children:t.about})),Boolean(t.objectifs)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.objectifs"),children:t.objectifs})),Boolean(t.services)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.services"),children:t.services})),Boolean(t.contacts)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.contacts"),children:t.contacts})),Boolean(t.tutorial)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.tutorial"),children:t.tutorial})),Boolean(t.publicationDesc)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.publicationDesc"),children:t.publicationDesc})),Boolean(t.appelDesc)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.appelDesc"),children:t.appelDesc})),Boolean(t.forumDesc)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.forumDesc"),children:t.forumDesc})),Boolean(t.mouvementDesc)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.mouvementDesc"),children:t.mouvementDesc})),Boolean(t.mediatequeDesc)&&Object(a.jsx)(j.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.apropos.fields.mediatequeDesc"),children:t.mediatequeDesc}))]})},v=n(1047),y=n(450),g=n(447),h=n(1099),x=n(201),E=n(228),N=n(604),C=n(370),w=n(1660),P=n(1067),S=function(e){var t=Object(c.d)(),n=Object(i.h)(),r=Object(c.e)(E.a.selectPermissionToRead),l=Object(c.e)(N.a.selectPermissionToEdit),s=Object(c.e)(N.a.selectPermissionToDestroy),u=Object(c.e)(w.a.selectLoading),p=n.params.id;return Object(a.jsxs)(P.a,{children:[l&&Object(a.jsx)(x.a,{to:"/apropos/".concat(p,"/edit"),children:Object(a.jsx)(y.a,{title:Object(o.c)("common.edit"),children:Object(a.jsx)(g.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),s&&Object(a.jsx)(h.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(C.a.doDestroy(p))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(a.jsx)(y.a,{title:Object(o.c)("common.destroy"),children:Object(a.jsx)(g.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(x.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(p)),children:Object(a.jsx)(y.a,{title:Object(o.c)("auditLog.menu"),children:Object(a.jsx)(g.a,{icon:Object(a.jsx)(v.a,{})})})})]})},k=n(1061),D=n(1063),B=n(1056);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),s=Object(c.e)(d.selectLoading),u=Object(c.e)(d.selectRecord);return Object(r.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.apropos.view.title")]]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(B.a,{children:Object(o.c)("entities.apropos.view.title")}),Object(a.jsx)(S,{match:n}),Object(a.jsx)(O,{loading:s,record:u})]})]})}}}]);