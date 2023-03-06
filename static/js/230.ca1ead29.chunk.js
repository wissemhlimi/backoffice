(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[230],{1056:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var c=n(421).a.h1(r());t.a=c},1062:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1063:function(e,t,n){"use strict";var a=n(17),r=n(1101),c=(n(6),n(201));t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(r.a,{children:e.items.map((function(e){return Object(a.jsx)(r.a.Item,{children:t(e)?Object(a.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1065:function(e,t,n){"use strict";var a=n(420);function r(){var e=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r());t.a=c},1077:function(e,t,n){"use strict";var a=n(17),r=n(1178);n(6);t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},1093:function(e,t,n){"use strict";var a=n(21),r=n.n(a),c=n(42),i=n.n(c),o=n(6),s=n(22),l=n.n(s),u=n(572),d=n.n(u),f=n(203),b=n(450),p=n(447),j=n(571),m=n(449),h=n(434),O=n(307),v=n(540),g=n(43),x=void 0,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=o.forwardRef((function(e,t){var n=o.useState(e.visible),a=i()(n,2),c=a[0],s=a[1];o.useEffect((function(){"visible"in e&&s(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&s(e.defaultVisible)}),[e.defaultVisible]);var u=function(t,n){"visible"in e||s(t),e.onVisibleChange&&e.onVisibleChange(t,n)},d=function(t){u(!1,t),e.onConfirm&&e.onConfirm.call(x,t)},C=function(t){u(!1,t),e.onCancel&&e.onCancel.call(x,t)},w=o.useContext(O.b).getPrefixCls,E=e.prefixCls,T=e.placement,k=e.children,P=e.overlayClassName,S=y(e,["prefixCls","placement","children","overlayClassName"]),I=w("popover",E),B=w("popconfirm",E),R=l()(B,P),U=o.createElement(m.a,{componentName:"Popconfirm",defaultLocale:h.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,i=e.title,s=e.cancelText,l=e.okText,u=e.okType,f=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},f,o.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(i))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(p.a,r()({onClick:C,size:"small"},c),s||n.cancelText),o.createElement(p.a,r()({onClick:d},Object(j.a)(u),{size:"small"},a),l||n.okText)))}(I,t)}));return o.createElement(b.a,r()({},S,{prefixCls:I,placement:T,onVisibleChange:function(t){e.disabled||u(t)},visible:c,overlay:U,overlayClassName:R,ref:t}),Object(g.a)(k,{onKeyDown:function(e){var t,n;o.isValidElement(k)&&(null===(n=null===k||void 0===k?void 0:(t=k.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===f.a.ESC&&c&&u(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(d.a,null),disabled:!1},t.a=C},1175:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(420);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var c=n(421).a.div(r()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1176:function(e,t,n){"use strict";var a=n(1548);t.a=a.a},1177:function(e,t,n){"use strict";var a=n(1478);t.a=a.a},1191:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(1365))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},1197:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(433),r=n(1),c=n.n(r),i=n(3),o=n(14),s=n(15),l=n(1223),u=n.n(l),d=n(2),f=n(9),b=n(1337),p=n(8),j=n(595),m=n.n(j),h=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=O(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,r){var i,o,s,l=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t.file,n),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),t.onError(e.t0),r(e.t0),e.abrupt("return");case 9:i=O(t.file.name),o=Object(b.a)(),s="".concat(o,".").concat(i),this.fetchFileCredentials(s,n).then((function(e){var n=e.uploadCredentials,r=e.downloadUrl,c=e.privateUrl;return l.uploadToServer(t.file,n).then((function(){t.onSuccess(),a({id:o,name:t.file.name,sizeInBytes:t.file.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:c,downloadUrl:r,new:!0})}))})).catch((function(e){t.onError(e),r(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.a.get(),e.next=3,f.a.get("/tenant/".concat(a,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,s,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n.url,i=new FormData,n.fields)for(o=0,s=Object.entries(n.fields||{});o<s.length;o++)l=Object(a.a)(s[o],2),u=l[0],d=l[1],i.append(u,d);return i.append("file",t),e.abrupt("return",m.a.post(r,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function O(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},1220:function(e,t,n){"use strict";var a=n(56),r=n(433),c=n(17),i=n(6),o=n(447),s=n(1336),l=n(1338),u=n(1201),d=n(1197),f=n(5),b=n(2);t.a=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),p=n[0],j=n[1],m=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},h=function(){return m().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,type:e.type,size:e.size}}))},O=function(e){console.error(e),j(!1),f.a.showMessage(e)},v=e.max,g=e.readonly,x=Object(c.jsxs)(o.a,{children:[p?Object(c.jsx)(l.a,{}):Object(c.jsx)(u.a,{}),Object(b.c)("fileUploader.upload")]});return Object(c.jsx)(s.a,{accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.join(", ")}(),fileList:h(),disabled:g,customRequest:function(t){d.a.uploadFromRequest(t,{storage:e.storage,formats:e.formats},(function(t){!function(t){j(!1),e.onChange([].concat(Object(a.a)(m()),[t]))}(t)}),(function(e){O(e)}))},onChange:function(t){var n;t&&t.file&&t.file.status&&("removed"===t.file.status?(n=t.file.uid,e.onChange(m().filter((function(e){return e.id!==n})))):j(!0))},beforeUpload:function(t){try{return d.a.validate(t,{storage:e.storage,formats:e.formats}),!0}catch(n){return O(n),!1}},children:g||v&&h().length>=v?null:x})}},1222:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(50),i=n(142),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.articleCahierRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.articleCahierEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.articleCahierCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.articleCahierImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.articleCahierDestroy)})),selectPermissionToImport:u};t.a=d},1238:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.articleCahier.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1289:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(13),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),c="aria-",i="data-";function o(e,t){return 0===e.indexOf(t)}function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:Object(a.a)({},n);var s={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||o(n,c))||t.data&&o(n,i)||t.attr&&r.includes(n))&&(s[n]=e[n])})),s}},1365:function(e,t,n){"use strict";var a=n(119),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(117)),i=a(n(6)),o=r(n(1366)),s=r(n(143)),l=function(e,t){return i.createElement(s.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:o.default}))};l.displayName="CheckOutlined";var u=i.forwardRef(l);t.default=u},1366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},1389:function(e,t,n){"use strict";var a=n(420),r=n(17),c=(n(6),n(1220));function i(){var e=Object(a.a)(["\n  .anticon-close {\n    display: none;\n  }\n"]);return i=function(){return e},e}var o=n(421).a.span(i());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(r.jsx)(o,{children:Object(r.jsx)(c.a,{readonly:!0,value:t()})}):null}},1412:function(e,t,n){"use strict";var a=n(17),r=n(1555),c=(n(6),n(2)),i=n(420);function o(){var e=Object(i.a)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]);return o=function(){return e},e}var s=n(421).a.div(o());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(a.jsx)(s,{children:Object(a.jsx)(r.a,{autoplay:!0,vertical:!0,effect:"fade",children:t().map((function(e){return Object(a.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):Object(a.jsx)("p",{children:Object(c.c)("imagesViewer.noImage")})}},1996:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(1176),c=n(1177),i=n(6),o=n(39),s=n(41),l=n(2),u=n(536),d=n(4),f=function(e){return e.articleCahier.view},b=Object(d.a)([f],(function(e){return e.record})),p={selectLoading:Object(d.a)([f],(function(e){return Boolean(e.loading)})),selectRecord:b,selectRaw:f},j=n(0),m=n(1077),h=n(1175),O=n(1952),v=n(1412),g=n(1389),x=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(m.a,{}):Object(a.jsxs)(h.a,{children:[Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.isFeature"),children:t.isFeature?Object(l.c)("common.yes"):Object(l.c)("common.no")})),Boolean(t.titleAR)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.titleAR"),children:t.titleAR})),Boolean(t.titleFR)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.titleFR"),children:t.titleFR})),Boolean(t.titleEN)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.titleEN"),children:t.titleEN})),Boolean(t.descriptionAR)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.descriptionAR"),children:t.descriptionAR})),Boolean(t.descriptionFR)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.descriptionFR"),children:t.descriptionFR})),Boolean(t.descriptionEN)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.descriptionEN"),children:t.descriptionEN})),Boolean(t.type)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.type"),children:Object(l.c)("entities.articleCahier.enumerators.type.".concat(t.type))})),Boolean(t.supports)&&Boolean(t.supports.length)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.supports"),children:Object(a.jsx)(g.a,{value:t.supports})})),Boolean(t.photos)&&Boolean(t.photos.length)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.photos"),children:Object(a.jsx)(v.a,{value:t.photos})})),Boolean(t.statut)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.statut"),children:Object(l.c)("entities.articleCahier.enumerators.statut.".concat(t.statut))})),Boolean(t.date)&&Object(a.jsx)(O.a.Item,Object(j.a)(Object(j.a)({},h.b),{},{label:Object(l.c)("entities.articleCahier.fields.date"),children:t.date}))]})},y=n(1047),C=n(450),w=n(447),E=n(1093),T=n(201),k=n(228),P=n(1222),S=n(351),I=n(1238),B=n(1065),R=function(e){var t=Object(o.d)(),n=Object(s.h)(),r=Object(o.e)(k.a.selectPermissionToRead),c=Object(o.e)(P.a.selectPermissionToEdit),i=Object(o.e)(P.a.selectPermissionToDestroy),u=Object(o.e)(I.a.selectLoading),d=n.params.id;return Object(a.jsxs)(B.a,{children:[c&&Object(a.jsx)(T.a,{to:"/article-cahier/".concat(d,"/edit"),children:Object(a.jsx)(C.a,{title:Object(l.c)("common.edit"),children:Object(a.jsx)(w.a,{type:"primary",children:Object(a.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),i&&Object(a.jsx)(E.a,{title:Object(l.c)("common.areYouSure"),onConfirm:function(){t(S.a.doDestroy(d))},okText:Object(l.c)("common.yes"),cancelText:Object(l.c)("common.no"),children:Object(a.jsx)(C.a,{title:Object(l.c)("common.destroy"),children:Object(a.jsx)(w.a,{type:"primary",disabled:u,children:Object(a.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),r&&Object(a.jsx)(T.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(a.jsx)(C.a,{title:Object(l.c)("auditLog.menu"),children:Object(a.jsx)(w.a,{icon:Object(a.jsx)(y.a,{})})})})]})},U=n(1062),D=n(1063),M=n(1056);t.default=function(e){var t=Object(o.d)(),n=Object(s.h)(),d=Object(o.e)(p.selectLoading),f=Object(o.e)(p.selectRecord);return Object(i.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D.a,{items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("entities.articleCahier.menu"),"/article-cahier"],[Object(l.c)("entities.articleCahier.view.title")]]}),Object(a.jsxs)(U.a,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.a,{span:16,children:Object(a.jsx)(M.a,{children:Object(l.c)("entities.articleCahier.view.title")})}),Object(a.jsx)(c.a,{span:8,style:{textAlign:"end"},children:Object(a.jsx)(R,{match:n})})]}),Object(a.jsx)(x,{loading:d,record:f})]})]})}}}]);