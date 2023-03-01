/*! For license information please see 263.c7fb5992.chunk.js.LICENSE.txt */
(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[263,82,83,84,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311],{1067:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(25),a=n(6);function o(e){var t=a.useRef();return t.current=e,a.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[])}var i,c=n(297),l=Object(c.a)()?a.useLayoutEffect:a.useEffect,u=l;function s(e){return void 0!==e}function f(e,t){var n=t||{},c=n.defaultValue,f=n.value,p=n.onChange,m=n.postState,d=function(e){var t=a.useRef(!1),n=a.useState(e),o=Object(r.a)(n,2),i=o[0],c=o[1];return a.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[i,function(e,n){n&&t.current||c(e)}]}((function(){var t,n=void 0;return s(f)?(n=f,t=i.PROP):s(c)?(n="function"===typeof c?c():c,t=i.PROP):(n="function"===typeof e?e():e,t=i.INNER),[n,t,n]})),y=Object(r.a)(d,2),h=y[0],g=y[1],v=s(f)?f:h[0],b=m?m(v):v;!function(e,t){var n=a.useRef(!0);l((function(){if(!n.current)return e()}),t),l((function(){return n.current=!1,function(){n.current=!0}}),[])}((function(){g((function(e){var t=Object(r.a)(e,1)[0];return[f,i.PROP,t]}))}),[f]);var N=a.useRef(),E=o((function(e,t){g((function(t){var n=Object(r.a)(t,3),a=n[0],o=n[1],c=n[2],l="function"===typeof e?e(a):e;if(l===a)return t;var u=o===i.INNER&&N.current!==c?c:a;return[l,i.INNER,u]}),t)})),T=o(p);return u((function(){var e=Object(r.a)(h,3),t=e[0],n=e[1],a=e[2];t!==a&&n===i.INNER&&(T(t,a),N.current=a)}),[h]),[b,E]}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(i||(i={}))},1071:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(1104))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},1080:function(e,t,n){var r=n(436),a=n(1086),o=n(846),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,s,f,p,m,d=0,y=!1,h=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=l,r=u;return l=u=void 0,d=t,f=e.apply(r,n)}function b(e){return d=e,p=setTimeout(E,t),y?v(e):f}function N(e){var n=e-m;return void 0===m||n>=t||n<0||h&&e-d>=s}function E(){var e=a();if(N(e))return T(e);p=setTimeout(E,function(e){var n=t-(e-m);return h?c(n,s-(e-d)):n}(e))}function T(e){return p=void 0,g&&l?v(e):(l=u=void 0,f)}function O(){var e=a(),n=N(e);if(l=arguments,u=this,m=e,n){if(void 0===p)return b(m);if(h)return clearTimeout(p),p=setTimeout(E,t),v(m)}return void 0===p&&(p=setTimeout(E,t)),f}return t=o(t)||0,r(n)&&(y=!!n.leading,s=(h="maxWait"in n)?i(o(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==p&&clearTimeout(p),d=0,l=m=u=p=void 0},O.flush=function(){return void 0===p?f:T(a())},O}},1086:function(e,t,n){var r=n(298);e.exports=function(){return r.Date.now()}},1093:function(e,t,n){"use strict";var r=n(21),a=n.n(r),o=n(42),i=n.n(o),c=n(6),l=n(22),u=n.n(l),s=n(572),f=n.n(s),p=n(203),m=n(450),d=n(447),y=n(571),h=n(449),g=n(434),v=n(307),b=n(540),N=n(43),E=void 0,T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=c.forwardRef((function(e,t){var n=c.useState(e.visible),r=i()(n,2),o=r[0],l=r[1];c.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),c.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var s=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},f=function(t){s(!1,t),e.onConfirm&&e.onConfirm.call(E,t)},O=function(t){s(!1,t),e.onCancel&&e.onCancel.call(E,t)},x=c.useContext(v.b).getPrefixCls,w=e.prefixCls,S=e.placement,A=e.children,k=e.overlayClassName,C=T(e,["prefixCls","placement","children","overlayClassName"]),_=x("popover",w),R=x("popconfirm",w),D=u()(R,k),M=c.createElement(h.a,{componentName:"Popconfirm",defaultLocale:g.a.Popconfirm},(function(t){return function(t,n){var r=e.okButtonProps,o=e.cancelButtonProps,i=e.title,l=e.cancelText,u=e.okText,s=e.okType,p=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},p,c.createElement("div",{className:"".concat(t,"-message-title")},Object(b.a)(i))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(d.a,a()({onClick:O,size:"small"},o),l||n.cancelText),c.createElement(d.a,a()({onClick:f},Object(y.a)(s),{size:"small"},r),u||n.okText)))}(_,t)}));return c.createElement(m.a,a()({},C,{prefixCls:_,placement:S,onVisibleChange:function(t){e.disabled||s(t)},visible:o,overlay:M,overlayClassName:D,ref:t}),Object(N.a)(A,{onKeyDown:function(e){var t,n;c.isValidElement(A)&&(null===(n=null===A||void 0===A?void 0:(t=A.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===p.a.ESC&&o&&s(!1,e)}(e)}}))}));O.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:c.createElement(f.a,null),disabled:!1},t.a=O},1101:function(e,t,n){"use strict";var r=n(21),a=n.n(r),o=n(23),i=n.n(o),c=n(568),l=n.n(c),u=n(6),s=n(22),f=n.n(s),p=n(146),m=n(1071),d=n.n(m),y=n(578),h=n(307),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=function(e){var t,n,r=e.prefixCls,o=e.separator,i=void 0===o?"/":o,c=e.children,l=e.overlay,s=e.dropdownProps,f=g(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,u.useContext(h.b).getPrefixCls)("breadcrumb",r);return t="href"in f?u.createElement("a",a()({className:"".concat(p,"-link")},f),c):u.createElement("span",a()({className:"".concat(p,"-link")},f),c),n=t,t=l?u.createElement(y.a,a()({overlay:l,placement:"bottomCenter"},s),u.createElement("span",{className:"".concat(p,"-overlay-link")},n,u.createElement(d.a,null))):n,c?u.createElement("span",null,t,i&&""!==i&&u.createElement("span",{className:"".concat(p,"-separator")},i)):null};v.__ANT_BREADCRUMB_ITEM=!0;var b=v,N=function(e){var t=e.children,n=(0,u.useContext(h.b).getPrefixCls)("breadcrumb");return u.createElement("span",{className:"".concat(n,"-separator")},t||"/")};N.__ANT_BREADCRUMB_SEPARATOR=!0;var E=N,T=n(1030),O=n(144),x=n(43),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function S(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?u.createElement("span",null,o):u.createElement("a",{href:"#/".concat(r.join("/"))},o)}var A=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},k=function(e){var t,n=e.prefixCls,r=e.separator,o=void 0===r?"/":r,c=e.style,s=e.className,m=e.routes,d=e.children,y=e.itemRender,g=void 0===y?S:y,v=e.params,N=void 0===v?{}:v,E=w(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),k=u.useContext(h.b),C=k.getPrefixCls,_=k.direction,R=C("breadcrumb",n);if(m&&m.length>0){var D=[];t=m.map((function(e){var t,n=A(e.path,N);return n&&D.push(n),e.children&&e.children.length&&(t=u.createElement(T.a,null,e.children.map((function(e){return u.createElement(T.a.Item,{key:e.path||e.breadcrumbName},g(e,N,m,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=l()(e),a=A(t,n);return a&&r.push(a),r}(D,e.path,N)))})))),u.createElement(b,{overlay:t,separator:o,key:n||e.breadcrumbName},g(e,N,m,D))}))}else d&&(t=Object(p.a)(d).map((function(e,t){return e?(Object(O.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(x.a)(e,{separator:o,key:t})):e})));var M=f()(R,i()({},"".concat(R,"-rtl"),"rtl"===_),s);return u.createElement("div",a()({className:M,style:c},E),t)};k.Item=b,k.Separator=E;var C=k;t.a=C},1104:function(e,t,n){"use strict";var r=n(119),a=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(117)),i=r(n(6)),c=a(n(1105)),l=a(n(143)),u=function(e,t){return i.createElement(l.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:c.default}))};u.displayName="DownOutlined";var s=i.forwardRef(u);t.default=s},1105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},1178:function(e,t,n){"use strict";var r=n(21),a=n.n(r),o=n(23),i=n.n(o),c=n(123),l=n.n(c),u=n(194),s=n.n(u),f=n(195),p=n.n(f),m=n(196),d=n.n(m),y=n(6),h=n(22),g=n.n(h),v=n(202),b=n(1080),N=n.n(b),E=n(307),T=n(296),O=n(43),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},w=(Object(T.a)("small","default","large"),null);var S=function(e){p()(n,e);var t=d()(n);function n(e){var r;l()(this,n),(r=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||r.props).delay;t&&(r.cancelExistingSpin(),r.updateSpinning=N()(r.originalUpdateSpinning,t))},r.updateSpinning=function(){var e=r.props.spinning;r.state.spinning!==e&&r.setState({spinning:e})},r.renderSpin=function(e){var t,n=e.getPrefixCls,o=e.direction,c=r.props,l=c.prefixCls,u=c.className,s=c.size,f=c.tip,p=c.wrapperClassName,m=c.style,d=x(c,["prefixCls","className","size","tip","wrapperClassName","style"]),h=r.state.spinning,b=n("spin",l),N=g()(b,(t={},i()(t,"".concat(b,"-sm"),"small"===s),i()(t,"".concat(b,"-lg"),"large"===s),i()(t,"".concat(b,"-spinning"),h),i()(t,"".concat(b,"-show-text"),!!f),i()(t,"".concat(b,"-rtl"),"rtl"===o),t),u),E=Object(v.default)(d,["spinning","delay","indicator"]),T=y.createElement("div",a()({},E,{style:m,className:N}),function(e,t){var n=t.indicator,r="".concat(e,"-dot");return null===n?null:Object(O.b)(n)?Object(O.a)(n,{className:g()(n.props.className,r)}):Object(O.b)(w)?Object(O.a)(w,{className:g()(w.props.className,r)}):y.createElement("span",{className:g()(r,"".concat(e,"-dot-spin"))},y.createElement("i",{className:"".concat(e,"-dot-item")}),y.createElement("i",{className:"".concat(e,"-dot-item")}),y.createElement("i",{className:"".concat(e,"-dot-item")}),y.createElement("i",{className:"".concat(e,"-dot-item")}))}(b,r.props),f?y.createElement("div",{className:"".concat(b,"-text")},f):null);if(r.isNestedPattern()){var S=g()("".concat(b,"-container"),i()({},"".concat(b,"-blur"),h));return y.createElement("div",a()({},E,{className:g()("".concat(b,"-nested-loading"),p)}),h&&y.createElement("div",{key:"loading"},T),y.createElement("div",{className:S,key:"container"},r.props.children))}return T};var o=e.spinning,c=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(o,e.delay);return r.state={spinning:o&&!c},r.originalUpdateSpinning=r.updateSpinning,r.debouncifyUpdateSpinning(e),r}return s()(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return y.createElement(E.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){w=e}}]),n}(y.Component);S.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=S},1456:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,a,o){return(r=n()?Reflect.construct:function(e,n,r){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return r&&t(o,r.prototype),o}).apply(null,arguments)}function a(e){return o(e)||i(e)||c(e)||u()}function o(e){if(Array.isArray(e))return l(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,m=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,y=Object.freeze,h=Object.seal,g=Object.create,v="undefined"!==typeof Reflect&&Reflect,b=v.apply,N=v.construct;b||(b=function(e,t,n){return e.apply(t,n)}),y||(y=function(e){return e}),h||(h=function(e){return e}),N||(N=function(e,t){return r(e,a(t))});var E=R(Array.prototype.forEach),T=R(Array.prototype.pop),O=R(Array.prototype.push),x=R(String.prototype.toLowerCase),w=R(String.prototype.match),S=R(String.prototype.replace),A=R(String.prototype.indexOf),k=R(String.prototype.trim),C=R(RegExp.prototype.test),_=D(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return b(e,t,r)}}function D(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(e,n)}}function M(e,t,n){n=n||x,f&&f(e,null);for(var r=t.length;r--;){var a=t[r];if("string"===typeof a){var o=n(a);o!==a&&(p(t)||(t[r]=o),a=o)}e[a]=!0}return e}function L(e){var t,n=g(null);for(t in e)b(s,e,[t])&&(n[t]=e[t]);return n}function I(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return R(n.get);if("function"===typeof n.value)return R(n.value)}e=m(e)}function r(e){return console.warn("fallback value for",e),null}return r}var j=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),P=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=y(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),B=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=y(["#text"]),G=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),W=y(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),V=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),q=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Y=h(/<%[\w\W]*|[\w\W]*%>/gm),$=h(/^data-[\-\w.\u00B7-\uFFFF]/),J=h(/^aria-[\-\w]+$/),X=h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Z=h(/^(?:\w+script|data):/i),Q=h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=h(/^html$/i),te=function(){return"undefined"===typeof window?null:window},ne=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function re(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),n=function(e){return re(e)};if(n.version="2.3.10",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,c=t.HTMLTemplateElement,l=t.Node,u=t.Element,s=t.NodeFilter,f=t.NamedNodeMap,p=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,m=t.HTMLFormElement,d=t.DOMParser,h=t.trustedTypes,g=u.prototype,v=I(g,"cloneNode"),b=I(g,"nextSibling"),N=I(g,"childNodes"),R=I(g,"parentNode");if("function"===typeof c){var D=o.createElement("template");D.content&&D.content.ownerDocument&&(o=D.content.ownerDocument)}var ae=ne(h,r),oe=ae?ae.createHTML(""):"",ie=o,ce=ie.implementation,le=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,fe=r.importNode,pe={};try{pe=L(o).documentMode?o.documentMode:{}}catch(wt){}var me={};n.isSupported="function"===typeof R&&ce&&"undefined"!==typeof ce.createHTMLDocument&&9!==pe;var de,ye,he=K,ge=Y,ve=$,be=J,Ne=Z,Ee=Q,Te=X,Oe=null,xe=M({},[].concat(a(j),a(P),a(U),a(z),a(H))),we=null,Se=M({},[].concat(a(G),a(W),a(V),a(q))),Ae=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ke=null,Ce=null,_e=!0,Re=!0,De=!1,Me=!1,Le=!1,Ie=!1,je=!1,Pe=!1,Ue=!1,Fe=!1,ze=!0,Be=!0,He=!1,Ge={},We=null,Ve=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),qe=null,Ke=M({},["audio","video","img","source","image","track"]),Ye=null,$e=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Je="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",Ze="http://www.w3.org/1999/xhtml",Qe=Ze,et=!1,tt=["application/xhtml+xml","text/html"],nt="text/html",rt=null,at=o.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},it=function(t){rt&&rt===t||(t&&"object"===e(t)||(t={}),t=L(t),de=de=-1===tt.indexOf(t.PARSER_MEDIA_TYPE)?nt:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===de?function(e){return e}:x,Oe="ALLOWED_TAGS"in t?M({},t.ALLOWED_TAGS,ye):xe,we="ALLOWED_ATTR"in t?M({},t.ALLOWED_ATTR,ye):Se,Ye="ADD_URI_SAFE_ATTR"in t?M(L($e),t.ADD_URI_SAFE_ATTR,ye):$e,qe="ADD_DATA_URI_TAGS"in t?M(L(Ke),t.ADD_DATA_URI_TAGS,ye):Ke,We="FORBID_CONTENTS"in t?M({},t.FORBID_CONTENTS,ye):Ve,ke="FORBID_TAGS"in t?M({},t.FORBID_TAGS,ye):{},Ce="FORBID_ATTR"in t?M({},t.FORBID_ATTR,ye):{},Ge="USE_PROFILES"in t&&t.USE_PROFILES,_e=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,De=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=t.SAFE_FOR_TEMPLATES||!1,Le=t.WHOLE_DOCUMENT||!1,Pe=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,Fe=t.RETURN_TRUSTED_TYPE||!1,je=t.FORCE_BODY||!1,ze=!1!==t.SANITIZE_DOM,Be=!1!==t.KEEP_CONTENT,He=t.IN_PLACE||!1,Te=t.ALLOWED_URI_REGEXP||Te,Qe=t.NAMESPACE||Ze,t.CUSTOM_ELEMENT_HANDLING&&ot(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ae.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ot(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ae.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ae.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Me&&(Re=!1),Ue&&(Pe=!0),Ge&&(Oe=M({},a(H)),we=[],!0===Ge.html&&(M(Oe,j),M(we,G)),!0===Ge.svg&&(M(Oe,P),M(we,W),M(we,q)),!0===Ge.svgFilters&&(M(Oe,U),M(we,W),M(we,q)),!0===Ge.mathMl&&(M(Oe,z),M(we,V),M(we,q))),t.ADD_TAGS&&(Oe===xe&&(Oe=L(Oe)),M(Oe,t.ADD_TAGS,ye)),t.ADD_ATTR&&(we===Se&&(we=L(we)),M(we,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&M(Ye,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(We===Ve&&(We=L(We)),M(We,t.FORBID_CONTENTS,ye)),Be&&(Oe["#text"]=!0),Le&&M(Oe,["html","head","body"]),Oe.table&&(M(Oe,["tbody"]),delete ke.tbody),y&&y(t),rt=t)},ct=M({},["mi","mo","mn","ms","mtext"]),lt=M({},["foreignobject","desc","title","annotation-xml"]),ut=M({},["title","style","font","a","script"]),st=M({},P);M(st,U),M(st,F);var ft=M({},z);M(ft,B);var pt=function(e){var t=R(e);t&&t.tagName||(t={namespaceURI:Ze,tagName:"template"});var n=x(e.tagName),r=x(t.tagName);return e.namespaceURI===Xe?t.namespaceURI===Ze?"svg"===n:t.namespaceURI===Je?"svg"===n&&("annotation-xml"===r||ct[r]):Boolean(st[n]):e.namespaceURI===Je?t.namespaceURI===Ze?"math"===n:t.namespaceURI===Xe?"math"===n&&lt[r]:Boolean(ft[n]):e.namespaceURI===Ze&&!(t.namespaceURI===Xe&&!lt[r])&&!(t.namespaceURI===Je&&!ct[r])&&!ft[n]&&(ut[n]||!st[n])},mt=function(e){O(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(wt){try{e.outerHTML=oe}catch(wt){e.remove()}}},dt=function(e,t){try{O(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(wt){O(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!we[e])if(Pe||Ue)try{mt(t)}catch(wt){}else try{t.setAttribute(e,"")}catch(wt){}},yt=function(e){var t,n;if(je)e="<remove></remove>"+e;else{var r=w(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=ae?ae.createHTML(e):e;if(Qe===Ze)try{t=(new d).parseFromString(a,de)}catch(wt){}if(!t||!t.documentElement){t=ce.createDocument(Qe,"template",null);try{t.documentElement.innerHTML=et?"":a}catch(wt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(o.createTextNode(n),i.childNodes[0]||null),Qe===Ze?se.call(t,Le?"html":"body")[0]:Le?t.documentElement:i},ht=function(e){return le.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},gt=function(e){return e instanceof m&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof p)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore)},vt=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},bt=function(e,t,r){me[e]&&E(me[e],(function(e){e.call(n,t,r,rt)}))},Nt=function(e){var t;if(bt("beforeSanitizeElements",e,null),gt(e))return mt(e),!0;if(C(/[\u0080-\uFFFF]/,e.nodeName))return mt(e),!0;var r=ye(e.nodeName);if(bt("uponSanitizeElement",e,{tagName:r,allowedTags:Oe}),e.hasChildNodes()&&!vt(e.firstElementChild)&&(!vt(e.content)||!vt(e.content.firstElementChild))&&C(/<[/\w]/g,e.innerHTML)&&C(/<[/\w]/g,e.textContent))return mt(e),!0;if("select"===r&&C(/<template/i,e.innerHTML))return mt(e),!0;if(!Oe[r]||ke[r]){if(!ke[r]&&Tt(r)){if(Ae.tagNameCheck instanceof RegExp&&C(Ae.tagNameCheck,r))return!1;if(Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(r))return!1}if(Be&&!We[r]){var a=R(e)||e.parentNode,o=N(e)||e.childNodes;if(o&&a)for(var i=o.length-1;i>=0;--i)a.insertBefore(v(o[i],!0),b(e))}return mt(e),!0}return e instanceof u&&!pt(e)?(mt(e),!0):"noscript"!==r&&"noembed"!==r||!C(/<\/no(script|embed)/i,e.innerHTML)?(Me&&3===e.nodeType&&(t=e.textContent,t=S(t,he," "),t=S(t,ge," "),e.textContent!==t&&(O(n.removed,{element:e.cloneNode()}),e.textContent=t)),bt("afterSanitizeElements",e,null),!1):(mt(e),!0)},Et=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in o||n in at))return!1;if(Re&&!Ce[t]&&C(ve,t));else if(_e&&C(be,t));else if(!we[t]||Ce[t]){if(!(Tt(e)&&(Ae.tagNameCheck instanceof RegExp&&C(Ae.tagNameCheck,e)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(e))&&(Ae.attributeNameCheck instanceof RegExp&&C(Ae.attributeNameCheck,t)||Ae.attributeNameCheck instanceof Function&&Ae.attributeNameCheck(t))||"is"===t&&Ae.allowCustomizedBuiltInElements&&(Ae.tagNameCheck instanceof RegExp&&C(Ae.tagNameCheck,n)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))))return!1}else if(Ye[t]);else if(C(Te,S(n,Ee,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!qe[e])if(De&&!C(Ne,S(n,Ee,"")));else if(n)return!1;return!0},Tt=function(e){return e.indexOf("-")>0},Ot=function(t){var r,a,o,i;bt("beforeSanitizeAttributes",t,null);var c=t.attributes;if(c){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:we};for(i=c.length;i--;){var u=r=c[i],s=u.name,f=u.namespaceURI;if(a="value"===s?r.value:k(r.value),o=ye(s),l.attrName=o,l.attrValue=a,l.keepAttr=!0,l.forceKeepAttr=void 0,bt("uponSanitizeAttribute",t,l),a=l.attrValue,!l.forceKeepAttr&&(dt(s,t),l.keepAttr))if(C(/\/>/i,a))dt(s,t);else{Me&&(a=S(a,he," "),a=S(a,ge," "));var p=ye(t.nodeName);if(Et(p,o,a)){if(ae&&"object"===e(h)&&"function"===typeof h.getAttributeType)if(f);else switch(h.getAttributeType(p,o)){case"TrustedHTML":a=ae.createHTML(a);break;case"TrustedScriptURL":a=ae.createScriptURL(a)}try{f?t.setAttributeNS(f,s,a):t.setAttribute(s,a),T(n.removed)}catch(wt){}}}}bt("afterSanitizeAttributes",t,null)}},xt=function e(t){var n,r=ht(t);for(bt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)bt("uponSanitizeShadowNode",n,null),Nt(n)||(n.content instanceof i&&e(n.content),Ot(n));bt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(a,o){var c,u,s,f,p;if((et=!a)&&(a="\x3c!--\x3e"),"string"!==typeof a&&!vt(a)){if("function"!==typeof a.toString)throw _("toString is not a function");if("string"!==typeof(a=a.toString()))throw _("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof a)return t.toStaticHTML(a);if(vt(a))return t.toStaticHTML(a.outerHTML)}return a}if(Ie||it(o),n.removed=[],"string"===typeof a&&(He=!1),He){if(a.nodeName){var m=ye(a.nodeName);if(!Oe[m]||ke[m])throw _("root node is forbidden and cannot be sanitized in-place")}}else if(a instanceof l)1===(u=(c=yt("\x3c!----\x3e")).ownerDocument.importNode(a,!0)).nodeType&&"BODY"===u.nodeName||"HTML"===u.nodeName?c=u:c.appendChild(u);else{if(!Pe&&!Me&&!Le&&-1===a.indexOf("<"))return ae&&Fe?ae.createHTML(a):a;if(!(c=yt(a)))return Pe?null:Fe?oe:""}c&&je&&mt(c.firstChild);for(var d=ht(He?a:c);s=d.nextNode();)3===s.nodeType&&s===f||Nt(s)||(s.content instanceof i&&xt(s.content),Ot(s),f=s);if(f=null,He)return a;if(Pe){if(Ue)for(p=ue.call(c.ownerDocument);c.firstChild;)p.appendChild(c.firstChild);else p=c;return we.shadowroot&&(p=fe.call(r,p,!0)),p}var y=Le?c.outerHTML:c.innerHTML;return Le&&Oe["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&C(ee,c.ownerDocument.doctype.name)&&(y="<!DOCTYPE "+c.ownerDocument.doctype.name+">\n"+y),Me&&(y=S(y,he," "),y=S(y,ge," ")),ae&&Fe?ae.createHTML(y):y},n.setConfig=function(e){it(e),Ie=!0},n.clearConfig=function(){rt=null,Ie=!1},n.isValidAttribute=function(e,t,n){rt||it({});var r=ye(e),a=ye(t);return Et(r,a,n)},n.addHook=function(e,t){"function"===typeof t&&(me[e]=me[e]||[],O(me[e],t))},n.removeHook=function(e){if(me[e])return T(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}return re()}()}}]);