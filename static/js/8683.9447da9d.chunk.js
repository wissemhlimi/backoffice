(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8683],{74535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(29439),r=n(47313),a=n(45788),o=n(63830),c=n(10499),u=n(88660),s=n(76747),l=function(e){return e.gouvernorat.form},d=(0,s.P1)([l],(function(e){return e.record})),p={selectInitLoading:(0,s.P1)([l],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,s.P1)([l],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:l},f=n(37670),v=n(58902),m=n(27829),g=n(53852),y=n(61567),h=n(46417),b=function(e){var t=(0,r.useState)(!1),n=(0,i.Z)(t,2),s=n[0],l=n[1],d=(0,a.I0)(),b=(0,o.$B)(),x=(0,a.v9)(p.selectInitLoading),w=(0,a.v9)(p.selectSaveLoading),N=(0,a.v9)(p.selectRecord),Z=Boolean(b.params.id),E=Z?(0,c.ag)("entities.gouvernorat.edit.title"):(0,c.ag)("entities.gouvernorat.new.title");(0,r.useEffect)((function(){d(u.Z.doInit(b.params.id)),l(!0)}),[d,b.params.id]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{items:[[(0,c.ag)("dashboard.menu"),"/"],[(0,c.ag)("entities.gouvernorat.menu"),"/gouvernorat"],[E]]}),(0,h.jsxs)(m.Z,{children:[x&&(0,h.jsx)(y.Z,{}),s&&!x&&(0,h.jsx)(v.Z,{title:E,saveLoading:w,record:N,isEditing:Z,onSubmit:function(e,t){d(Z?u.Z.doUpdate(e,t):u.Z.doCreate(t))},onCancel:function(){return(0,f.s1)().push("/gouvernorat")}})]})]})}},61567:function(e,t,n){"use strict";var i=n(72652),r=(n(47313),n(46417));t.Z=function(e){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)(i.Z,{})})}},92207:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},67669:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(i=n(58957))&&i.__esModule?i:{default:i};t.default=r,e.exports=r},58957:function(e,t,n){"use strict";var i=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(i,o,c):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(47313)),c=i(n(92207)),u=i(n(17830));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var l=function(e,t){return o.createElement(u.default,(0,a.default)((0,a.default)({},e),{},{ref:t,icon:c.default}))};l.displayName="DownOutlined";var d=o.forwardRef(l);t.default=d},72652:function(e,t,n){"use strict";var i=n(87462),r=n(4942),a=n(15671),o=n(43144),c=n(60136),u=n(27277),s=n(47313),l=n(46123),d=n.n(l),p=n(62710),f=n(12279),v=n.n(f),m=n(91964),g=n(56927),y=n(48138),h=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n},b=((0,g.b)("small","default","large"),null);var x=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var o;(0,a.Z)(this,n),(o=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||o.props).delay;t&&(o.cancelExistingSpin(),o.updateSpinning=v()(o.originalUpdateSpinning,t))},o.updateSpinning=function(){var e=o.props.spinning;o.state.spinning!==e&&o.setState({spinning:e})},o.renderSpin=function(e){var t,n=e.getPrefixCls,a=e.direction,c=o.props,u=c.prefixCls,l=c.className,f=c.size,v=c.tip,m=c.wrapperClassName,g=c.style,x=h(c,["prefixCls","className","size","tip","wrapperClassName","style"]),w=o.state.spinning,N=n("spin",u),Z=d()(N,(t={},(0,r.Z)(t,"".concat(N,"-sm"),"small"===f),(0,r.Z)(t,"".concat(N,"-lg"),"large"===f),(0,r.Z)(t,"".concat(N,"-spinning"),w),(0,r.Z)(t,"".concat(N,"-show-text"),!!v),(0,r.Z)(t,"".concat(N,"-rtl"),"rtl"===a),t),l),E=(0,p.default)(x,["spinning","delay","indicator"]),S=s.createElement("div",(0,i.Z)({},E,{style:g,className:Z}),function(e,t){var n=t.indicator,i="".concat(e,"-dot");return null===n?null:(0,y.l$)(n)?(0,y.Tm)(n,{className:d()(n.props.className,i)}):(0,y.l$)(b)?(0,y.Tm)(b,{className:d()(b.props.className,i)}):s.createElement("span",{className:d()(i,"".concat(e,"-dot-spin"))},s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}))}(N,o.props),v?s.createElement("div",{className:"".concat(N,"-text")},v):null);if(o.isNestedPattern()){var j=d()("".concat(N,"-container"),(0,r.Z)({},"".concat(N,"-blur"),w));return s.createElement("div",(0,i.Z)({},E,{className:d()("".concat(N,"-nested-loading"),m)}),w&&s.createElement("div",{key:"loading"},S),s.createElement("div",{className:j,key:"container"},o.props.children))}return S};var c=e.spinning,u=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return o.state={spinning:c&&!u},o.originalUpdateSpinning=o.updateSpinning,o.debouncifyUpdateSpinning(e),o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return s.createElement(m.C,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){b=e}}]),n}(s.Component);x.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.Z=x},12279:function(e,t,n){var i=n(91845),r=n(46170),a=n(57923),o=Math.max,c=Math.min;e.exports=function(e,t,n){var u,s,l,d,p,f,v=0,m=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=u,i=s;return u=s=void 0,v=t,d=e.apply(i,n)}function b(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-v>=l}function x(){var e=r();if(b(e))return w(e);p=setTimeout(x,function(e){var n=t-(e-f);return g?c(n,l-(e-v)):n}(e))}function w(e){return p=void 0,y&&u?h(e):(u=s=void 0,d)}function N(){var e=r(),n=b(e);if(u=arguments,s=this,f=e,n){if(void 0===p)return function(e){return v=e,p=setTimeout(x,t),m?h(e):d}(f);if(g)return clearTimeout(p),p=setTimeout(x,t),h(f)}return void 0===p&&(p=setTimeout(x,t)),d}return t=a(t)||0,i(n)&&(m=!!n.leading,l=(g="maxWait"in n)?o(a(n.maxWait)||0,t):l,y="trailing"in n?!!n.trailing:y),N.cancel=function(){void 0!==p&&clearTimeout(p),v=0,u=f=s=p=void 0},N.flush=function(){return void 0===p?d:w(r())},N}},46170:function(e,t,n){var i=n(7289);e.exports=function(){return i.Date.now()}},42386:function(e,t,n){"use strict";var i;function r(e){if("undefined"===typeof document)return 0;if(e||void 0===i){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var a=t.offsetWidth;n.style.overflow="scroll";var o=t.offsetWidth;a===o&&(o=n.clientWidth),document.body.removeChild(n),i=a-o}return i}n.d(t,{Z:function(){return r}})}}]);