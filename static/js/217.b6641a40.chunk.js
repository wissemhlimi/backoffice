(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[217],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(421).a.h1(r());t.a=c},1061:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1064:function(e,t,n){"use strict";var a=n(17),r=n(1109),c=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1067:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1070:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(25),r=n(6);function c(e){var t=r.useRef();return t.current=e,r.useCallback((function(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(a))}),[])}var i,o=n(297),s=Object(o.a)()?r.useLayoutEffect:r.useEffect,l=s;function u(e){return void 0!==e}function d(e,t){var n=t||{},o=n.defaultValue,d=n.value,p=n.onChange,f=n.postState,m=function(e){var t=r.useRef(!1),n=r.useState(e),c=Object(a.a)(n,2),i=c[0],o=c[1];return r.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[i,function(e,n){n&&t.current||o(e)}]}((function(){var t,n=void 0;return u(d)?(n=d,t=i.PROP):u(o)?(n="function"===typeof o?o():o,t=i.PROP):(n="function"===typeof e?e():e,t=i.INNER),[n,t,n]})),b=Object(a.a)(m,2),j=b[0],O=b[1],v=u(d)?d:j[0],h=f?f(v):v;!function(e,t){var n=r.useRef(!0);s((function(){if(!n.current)return e()}),t),s((function(){return n.current=!1,function(){n.current=!0}}),[])}((function(){O((function(e){var t=Object(a.a)(e,1)[0];return[d,i.PROP,t]}))}),[d]);var g=r.useRef(),y=c((function(e,t){O((function(t){var n=Object(a.a)(t,3),r=n[0],c=n[1],o=n[2],s="function"===typeof e?e(r):e;if(s===r)return t;var l=c===i.INNER&&g.current!==o?o:r;return[s,i.INNER,l]}),t)})),x=c(p);return l((function(){var e=Object(a.a)(j,3),t=e[0],n=e[1],r=e[2];t!==r&&n===i.INNER&&(x(t,r),g.current=r)}),[j]),[h,y]}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(i||(i={}))},1074:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1113))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1080:function(e,t,n){"use strict";var a=n(17),r=n(1193);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1083:function(e,t,n){var a=n(436),r=n(1092),c=n(846),i=Math.max,o=Math.min;e.exports=function(e,t,n){var s,l,u,d,p,f,m=0,b=!1,j=!1,O=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=s,a=l;return s=l=void 0,m=t,d=e.apply(a,n)}function h(e){return m=e,p=setTimeout(y,t),b?v(e):d}function g(e){var n=e-f;return void 0===f||n>=t||n<0||j&&e-m>=u}function y(){var e=r();if(g(e))return x(e);p=setTimeout(y,function(e){var n=t-(e-f);return j?o(n,u-(e-m)):n}(e))}function x(e){return p=void 0,O&&s?v(e):(s=l=void 0,d)}function C(){var e=r(),n=g(e);if(s=arguments,l=this,f=e,n){if(void 0===p)return h(f);if(j)return clearTimeout(p),p=setTimeout(y,t),v(f)}return void 0===p&&(p=setTimeout(y,t)),d}return t=c(t)||0,a(n)&&(b=!!n.leading,u=(j="maxWait"in n)?i(c(n.maxWait)||0,t):u,O="trailing"in n?!!n.trailing:O),C.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=f=l=p=void 0},C.flush=function(){return void 0===p?d:x(r())},C}},1092:function(e,t,n){var a=n(298);e.exports=function(){return a.Date.now()}},1099:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(42),i=n.n(c),o=n(6),s=n(22),l=n.n(s),u=n(572),d=n.n(u),p=n(203),f=n(450),m=n(447),b=n(571),j=n(449),O=n(434),v=n(307),h=n(540),g=n(43),y=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=i()(n,2),c=a[0],s=a[1];o.useEffect((function(){"visible"in e&&s(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&s(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||s(t),e.onVisibleChange&&e.onVisibleChange(t,n)},d=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(y,t)},C=function(t){u(!1,t),e.onCancel&&e.onCancel.call(y,t)},w=o.useContext(v.b).getPrefixCls,E=e.prefixCls,N=e.placement,P=e.children,T=e.overlayClassName,S=x(e,["prefixCls","placement","children","overlayClassName"]),A=w("popover",E),R=w("popconfirm",E),k=l()(R,T),I=o.createElement(j.a,{componentName:"Popconfirm",defaultLocale:O.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,i=e.title,s=e.cancelText,l=e.okText,u=e.okType,p=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},p,o.createElement("div",{className:"".concat(t,"-message-title")},Object(h.a)(i))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(m.a,r()({onClick:C,size:"small"},c),s||n.cancelText),o.createElement(m.a,r()({onClick:d},Object(b.a)(u),{size:"small"},a),l||n.okText)))}(A,t)}));return o.createElement(f.a,r()({},S,{prefixCls:A,placement:N,onVisibleChange:function(t){e.disabled||u(t)},visible:c,overlay:I,overlayClassName:k,ref:t}),Object(g.a)(P,{onKeyDown:function(e){var t,n;o.isValidElement(P)&&(null===(n=null===P||void 0===P?void 0:(t=P.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===p.a.ESC&&c&&u(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},t.a=C},1113:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(117)),i=a(n(6)),o=r(n(1114)),s=r(n(143)),l=function(e,t){return i.createElement(s.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};l.displayName="DownOutlined";var u=i.forwardRef(l);t.default=u},1114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1186:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1193:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(23),i=n.n(c),o=n(123),s=n.n(o),l=n(194),u=n.n(l),d=n(195),p=n.n(d),f=n(196),m=n.n(f),b=n(6),j=n(22),O=n.n(j),v=n(202),h=n(1083),g=n.n(h),y=n(307),x=n(296),C=n(43),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=(Object(x.a)("small","default","large"),null);var N=function(e){p()(n,e);var t=m()(n);function n(e){var a;s()(this,n),(a=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||a.props).delay;t&&(a.cancelExistingSpin(),a.updateSpinning=g()(a.originalUpdateSpinning,t))},a.updateSpinning=function(){var e=a.props.spinning;a.state.spinning!==e&&a.setState({spinning:e})},a.renderSpin=function(e){var t,n=e.getPrefixCls,c=e.direction,o=a.props,s=o.prefixCls,l=o.className,u=o.size,d=o.tip,p=o.wrapperClassName,f=o.style,m=w(o,["prefixCls","className","size","tip","wrapperClassName","style"]),j=a.state.spinning,h=n("spin",s),g=O()(h,(t={},i()(t,"".concat(h,"-sm"),"small"===u),i()(t,"".concat(h,"-lg"),"large"===u),i()(t,"".concat(h,"-spinning"),j),i()(t,"".concat(h,"-show-text"),!!d),i()(t,"".concat(h,"-rtl"),"rtl"===c),t),l),y=Object(v.default)(m,["spinning","delay","indicator"]),x=b.createElement("div",r()({},y,{style:f,className:g}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(C.b)(n)?Object(C.a)(n,{className:O()(n.props.className,a)}):Object(C.b)(E)?Object(C.a)(E,{className:O()(E.props.className,a)}):b.createElement("span",{className:O()(a,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(h,a.props),d?b.createElement("div",{className:"".concat(h,"-text")},d):null);if(a.isNestedPattern()){var N=O()("".concat(h,"-container"),i()({},"".concat(h,"-blur"),j));return b.createElement("div",r()({},y,{className:O()("".concat(h,"-nested-loading"),p)}),j&&b.createElement("div",{key:"loading"},x),b.createElement("div",{className:N,key:"container"},a.props.children))}return x};var c=e.spinning,o=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return a.state={spinning:c&&!o},a.originalUpdateSpinning=a.updateSpinning,a.debouncifyUpdateSpinning(e),a}return u()(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(y.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){E=e}}]),n}(b.Component);N.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=N},1207:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1511))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1217:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(433),r=n(1),c=n.n(r),i=n(3),o=n(14),s=n(15),l=n(1261),u=n.n(l),d=n(2),p=n(9),f=n(1485),m=n(8),b=n(595),j=n.n(b),O=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=v(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,r){var i,o,s,l=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t.file,n),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),t.onError(e.t0),r(e.t0),e.abrupt("return");case 9:i=v(t.file.name),o=Object(f.a)(),s="".concat(o,".").concat(i),this.fetchFileCredentials(s,n).then((function(e){var n=e.uploadCredentials,r=e.downloadUrl,c=e.privateUrl;return l.uploadToServer(t.file,n).then((function(){t.onSuccess(),a({id:o,name:t.file.name,sizeInBytes:t.file.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:c,downloadUrl:r,new:!0})}))})).catch((function(e){t.onError(e),r(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.get(),e.next=3,p.a.get("/tenant/".concat(a,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,s,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n.url,i=new FormData,n.fields)for(o=0,s=Object.entries(n.fields||{});o<s.length;o++)l=Object(a.a)(s[o],2),u=l[0],d=l[1],i.append(u,d);return i.append("file",t),e.abrupt("return",j.a.post(r,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function v(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},1250:function(e,t,n){"use strict";var a=n(56),r=n(433),c=n(17),i=n(6),o=n(447),s=n(1484),l=n(1486),u=n(1220),d=n(1217),p=n(5),f=n(2);t.a=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),m=n[0],b=n[1],j=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},O=function(){return j().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,type:e.type,size:e.size}}))},v=function(e){console.error(e),b(!1),p.a.showMessage(e)},h=e.max,g=e.readonly,y=Object(c.jsxs)(o.a,{children:[m?Object(c.jsx)(l.a,{}):Object(c.jsx)(u.a,{}),Object(f.c)("fileUploader.upload")]});return Object(c.jsx)(s.a,{accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.join(", ")}(),fileList:O(),disabled:g,customRequest:function(t){d.a.uploadFromRequest(t,{storage:e.storage,formats:e.formats},(function(t){!function(t){b(!1),e.onChange([].concat(Object(a.a)(j()),[t]))}(t)}),(function(e){v(e)}))},onChange:function(t){var n;t&&t.file&&t.file.status&&("removed"===t.file.status?(n=t.file.uid,e.onChange(j().filter((function(e){return e.id!==n})))):b(!0))},beforeUpload:function(t){try{return d.a.validate(t,{storage:e.storage,formats:e.formats}),!0}catch(n){return v(n),!1}},children:g||h&&O().length>=h?null:y})}},1343:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(13),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),c="aria-",i="data-";function o(e,t){return 0===e.indexOf(t)}function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:Object(a.a)({},n);var s={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||o(n,c))||t.data&&o(n,i)||t.attr&&r.includes(n))&&(s[n]=e[n])})),s}},1511:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(117)),i=a(n(6)),o=r(n(1512)),s=r(n(143)),l=function(e,t){return i.createElement(s.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};l.displayName="CheckOutlined";var u=i.forwardRef(l);t.default=u},1512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},1537:function(e,t,n){"use strict";var a=n(420),r=n(17),c=(n(6),n(1250));function i(){var e=Object(a.a)(["\n  .anticon-close {\n    display: none;\n  }\n"]);return i=function(){return e},e}var o=n(421).a.span(i());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(r.jsx)(o,{children:Object(r.jsx)(c.a,{readonly:!0,value:t()})}):null}},1563:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryAppelRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryAppelEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryAppelCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryAppelImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryAppelDestroy)})),selectPermissionToImport:u};t.a=d},1648:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.demandeAppui.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1649:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.demandeAppuiRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.demandeAppuiEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.demandeAppuiCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.demandeAppuiImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.demandeAppuiDestroy)})),selectPermissionToImport:u};t.a=d},2142:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1191),c=n(1192),i=n(6),o=n(39),s=n(41),l=n(2),u=n(480),d=n(4),p=function(e){return e.demandeAppui.view},f=Object(d.a)([p],(function(e){return e.record})),m={selectLoading:Object(d.a)([p],(function(e){return Boolean(e.loading)})),selectRecord:f,selectRaw:p},b=n(0),j=n(1080),O=n(1186),v=n(2120),h=n(1537),g=n(201),y=n(1563),x=function(e){var t=Object(o.e)(y.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(a.jsx)(a.Fragment,{children:n().map((function(e){return n=e,t?Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{to:"/category-appel/".concat(n.id),children:n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN})},n.id):Object(a.jsxs)("div",{children:[" ",n.titleFR?n.titleFR:n.titleAR?n.titleAR:n.titleEN]},n.id);var n}))}):null},C=n(1317),w=C.a.TabPane,E=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(j.a,{}):Object(a.jsx)(O.a,{children:Object(a.jsxs)(C.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(a.jsx)(w,{tab:Object(l.c)("common.informations"),children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informations")]}),Boolean(t.statut)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.publication.fields.statut"),children:Object(l.c)("entities.publication.enumerators.statut.".concat(t.statut))})),Boolean(t.type)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.type"),children:Object(l.c)("entities.demandeAppui.enumerators.type.".concat(t.type))})),Boolean(t.personne)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.personne"),children:Object(l.c)("entities.demandeAppui.enumerators.personne.".concat(t.personne))})),Boolean(t.etat)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.etat"),children:Object(l.c)("entities.demandeAppui.enumerators.etat.".concat(t.etat))})),Boolean(t.category)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.categorie"),children:Object(a.jsx)(x,{value:t.category})})),Boolean(t.gouvernorat)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.gouvernorat"),children:Object(l.c)("entities.demandeAppui.enumerators.gouvernorat.".concat(t.gouvernorat))})),Boolean(t.importance)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.importance"),children:Object(l.c)("entities.demandeAppui.enumerators.importance.".concat(t.importance))})),Boolean(t.email)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.email"),children:t.email})),Boolean(t.phoneNumber)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.phoneNumber"),children:t.phoneNumber})),Boolean(t.descriptionAR)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.description"),children:t.descriptionAR})),Boolean(t.supports)&&Boolean(t.supports.length)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.supports"),children:Object(a.jsx)(h.a,{value:t.supports})}))]})},"1"),Object(a.jsx)(w,{tab:Object(l.c)("common.informationsFR"),children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informationsFR")]}),Boolean(t.descriptionFR)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.description"),children:t.descriptionFR}))]})},"2"),Object(a.jsx)(w,{tab:Object(l.c)("common.informationsEN"),children:Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informationsEN")]}),Boolean(t.descriptionEN)&&Object(a.jsx)(v.a.Item,Object(b.a)(Object(b.a)({},O.b),{},{label:Object(l.c)("entities.demandeAppui.fields.description"),children:t.descriptionEN}))]})},"3")]})})},N=n(1047),P=n(450),T=n(447),S=n(1099),A=n(228),R=n(1649),k=n(359),I=n(1648),U=n(1067),D=function(e){var t=Object(o.d)(),n=Object(s.h)(),r=Object(o.e)(A.a.selectPermissionToRead),c=Object(o.e)(R.a.selectPermissionToEdit),i=Object(o.e)(R.a.selectPermissionToDestroy),u=Object(o.e)(I.a.selectLoading),d=n.params.id;return Object(a.jsxs)(U.a,{children:[c&&Object(a.jsx)(g.a,{to:"/demande-appui/".concat(d,"/edit"),children:Object(a.jsx)(P.a,{title:Object(l.c)("common.edit"),children:Object(a.jsx)(T.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(a.jsx)(S.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(k.a.doDestroy(d))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(a.jsx)(P.a,{title:Object(l.c)("common.destroy"),children:Object(a.jsx)(T.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(g.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(P.a,{title:Object(l.c)("auditLog.menu"),children:Object(a.jsx)(T.a,{icon:Object(a.jsx)(N.a,{})})})})]})},M=n(1061),B=n(1064),F=n(1056);t.default=function(e){var t=Object(o.d)(),n=Object(s.h)(),d=Object(o.e)(m.selectLoading),p=Object(o.e)(m.selectRecord);return Object(i.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.demandeAppui.menu"),"/demande-appui"],[Object(l.c)("entities.demandeAppui.view.title")]]}),Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.a,{span:16,children:Object(a.jsx)(F.a,{children:Object(l.c)("entities.demandeAppui.view.title")})}),Object(a.jsxs)(c.a,{span:8,style:{textAlign:"end"},children:["   ",Object(a.jsx)(D,{match:n})]})]}),Object(a.jsx)(E,{loading:d,record:p})]})]})}}}]);