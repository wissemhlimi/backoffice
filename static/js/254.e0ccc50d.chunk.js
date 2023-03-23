(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[254],{1056:function(e,n,t){"use strict";var c=t(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var r=t(421).a.h1(a());n.a=r},1062:function(e,n,t){"use strict";var c=t(420);function a(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var r=t(421).a.div(a());n.a=r},1065:function(e,n,t){"use strict";var c=t(420);function a(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=t(421).a.div(a());n.a=r},1070:function(e,n,t){"use strict";var c=t(420);function a(){var e=Object(c.a)(["\n  .ant-table th {\n    background: var(--primary-color);\n\n    color: white;\n  }\n  .ant-table tr:nth-child(even) {\n    background: #d9d9d9;\n  }\n  .ant-table td {\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n    text-overflow: ellipsis;\n    \n    \n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"]);return a=function(){return e},e}var r=t(421).a.div(a());n.a=r},1093:function(e,n,t){"use strict";var c=t(21),a=t.n(c),r=t(42),o=t.n(r),i=t(6),l=t(22),s=t.n(l),u=t(572),d=t.n(u),b=t(203),f=t(450),m=t(447),p=t(571),j=t(449),v=t(434),O=t(307),x=t(540),h=t(43),g=void 0,y=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},C=i.forwardRef((function(e,n){var t=i.useState(e.visible),c=o()(t,2),r=c[0],l=c[1];i.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),i.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var u=function(n,t){"visible"in e||l(n),e.onVisibleChange&&e.onVisibleChange(n,t)},d=function(n){u(!1,n),e.onConfirm&&e.onConfirm.call(g,n)},C=function(n){u(!1,n),e.onCancel&&e.onCancel.call(g,n)},k=i.useContext(O.b).getPrefixCls,w=e.prefixCls,E=e.placement,P=e.children,T=e.overlayClassName,N=y(e,["prefixCls","placement","children","overlayClassName"]),S=k("popover",w),I=k("popconfirm",w),q=s()(I,T),V=i.createElement(j.a,{componentName:"Popconfirm",defaultLocale:v.a.Popconfirm},(function(n){return function(n,t){var c=e.okButtonProps,r=e.cancelButtonProps,o=e.title,l=e.cancelText,s=e.okText,u=e.okType,b=e.icon;return i.createElement("div",{className:"".concat(n,"-inner-content")},i.createElement("div",{className:"".concat(n,"-message")},b,i.createElement("div",{className:"".concat(n,"-message-title")},Object(x.a)(o))),i.createElement("div",{className:"".concat(n,"-buttons")},i.createElement(m.a,a()({onClick:C,size:"small"},r),l||t.cancelText),i.createElement(m.a,a()({onClick:d},Object(p.a)(u),{size:"small"},c),s||t.okText)))}(S,n)}));return i.createElement(f.a,a()({},N,{prefixCls:S,placement:E,onVisibleChange:function(n){e.disabled||u(n)},visible:r,overlay:V,overlayClassName:q,ref:n}),Object(h.a)(P,{onKeyDown:function(e){var n,t;i.isValidElement(P)&&(null===(t=null===P||void 0===P?void 0:(n=P.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===b.a.ESC&&r&&u(!1,e)}(e)}}))}));C.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:i.createElement(d.a,null),disabled:!1},n.a=C},1099:function(e,n,t){"use strict";var c=t(23),a=t.n(c),r=t(21),o=t.n(r),i=t(42),l=t.n(i),s=t(6),u=t(22),d=t.n(u),b=t(202),f=t(569),m=t.n(f),p=t(307),j=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},v=function(e){var n,t=e.prefixCls,c=e.className,r=e.checked,i=e.onChange,l=e.onClick,u=j(e,["prefixCls","className","checked","onChange","onClick"]),b=(0,s.useContext(p.b).getPrefixCls)("tag",t),f=d()(b,(n={},a()(n,"".concat(b,"-checkable"),!0),a()(n,"".concat(b,"-checkable-checked"),r),n),c);return s.createElement("span",o()({},u,{className:f,onClick:function(e){i&&i(!r),l&&l(e)}}))},O=t(581),x=t(579),h=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},g=new RegExp("^(".concat(O.a.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(O.b.join("|"),")$")),C=function(e,n){var t,c=e.prefixCls,r=e.className,i=e.style,u=e.children,f=e.icon,j=e.color,v=e.onClose,O=e.closeIcon,C=e.closable,k=void 0!==C&&C,w=h(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=s.useContext(p.b),P=E.getPrefixCls,T=E.direction,N=s.useState(!0),S=l()(N,2),I=S[0],q=S[1];s.useEffect((function(){"visible"in w&&q(w.visible)}),[w.visible]);var V=function(){return!!j&&(g.test(j)||y.test(j))},D=o()({backgroundColor:j&&!V()?j:void 0},i),R=V(),B=P("tag",c),L=d()(B,(t={},a()(t,"".concat(B,"-").concat(j),R),a()(t,"".concat(B,"-has-color"),j&&!R),a()(t,"".concat(B,"-hidden"),!I),a()(t,"".concat(B,"-rtl"),"rtl"===T),t),r),z=function(e){e.stopPropagation(),v&&v(e),e.defaultPrevented||"visible"in w||q(!1)},F="onClick"in w||u&&"a"===u.type,U=Object(b.default)(w,["visible"]),K=f||null,Y=K?s.createElement(s.Fragment,null,K,s.createElement("span",null,u)):u,A=s.createElement("span",o()({},U,{ref:n,className:L,style:D}),Y,k?O?s.createElement("span",{className:"".concat(B,"-close-icon"),onClick:z},O):s.createElement(m.a,{className:"".concat(B,"-close-icon"),onClick:z}):null);return F?s.createElement(x.a,null,A):A},k=s.forwardRef(C);k.displayName="Tag",k.CheckableTag=v;n.a=k},1100:function(e,n,t){"use strict";var c=t(420);function a(){var e=Object(c.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"]);return a=function(){return e},e}var r=t(421).a.button(a());n.a=r},1198:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t(42),a=t.n(c),r=t(6);function o(){var e=r.useReducer((function(e){return e+1}),0);return a()(e,2)[1]}},1201:function(e,n,t){"use strict";var c=t(13),a=t(6),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=t(47),i=function(e,n){return a.createElement(o.a,Object(c.a)(Object(c.a)({},e),{},{ref:n,icon:r}))};i.displayName="PlusOutlined";n.a=a.forwardRef(i)},1548:function(e,n,t){var c=t(601);e.exports=function(e,n){return c(e,n)}},1956:function(e,n,t){"use strict";t.r(n);var c=t(17),a=t(6),r=t(2),o=t(1062),i=t(1056),l=t(39),s=t(230),u=function(){var e=Object(l.d)();return Object(a.useEffect)((function(){e(s.a.doFetch())}),[]),null},d=t(1099),b=t(1093),f=t(447),m=t(450),p=t(1950),j=t(201),v=t(27),O=t(475),x=t(4),h={selectLoading:Object(x.a)([function(e){return e.tenant.destroy}],(function(e){return Boolean(e.loading)}))},g=t(210),y=t(602),C=t(430),k=t(29),w=t(50),E=t(142),P={selectPermissionToEdit:Object(x.a)([k.a.selectCurrentUser],(function(e){return function(n){return new w.a(n,e).match(E.a.values.tenantEdit)}})),selectPermissionToDestroy:Object(x.a)([k.a.selectCurrentUser],(function(e){return function(n){return new w.a(n,e).match(E.a.values.tenantDestroy)}})),selectInvitationToken:Object(x.a)([k.a.selectCurrentUser],(function(e){return function(n){if(!e||!e.tenants)return!1;var t=e.tenants.find((function(e){return e.tenant.id===n.id&&"invited"===e.status}));return t?t.invitationToken:null}}))},T=t(1100),N=t(1070),S=t(459),I=t(51),q=t(38),V=function(e){var n=Object(l.d)(),t=Object(l.e)(C.a.selectLoading),a=Object(l.e)(h.selectLoading),o=Object(l.e)(y.a.selectLoading),i=t||a||o,u=Object(l.e)(C.a.selectRows),x=Object(l.e)(C.a.selectPagination),w=Object(l.e)(P.selectInvitationToken),E=Object(l.e)(P.selectPermissionToEdit),V=Object(l.e)(P.selectPermissionToDestroy),D=Object(l.e)(k.a.selectCurrentTenant),R=[{title:Object(r.c)("tenant.fields.name"),sorter:!0,dataIndex:"name",render:function(e,n){return Object(c.jsxs)(c.Fragment,{children:[n.name,Boolean(w(n))&&Object(c.jsx)(d.a,{color:"gold",style:{marginLeft:"8px"},children:Object(r.c)("tenant.invitation.invited")})]})}},q.a.isEnabled&&{title:Object(r.c)("tenant.fields.url"),sorter:!0,dataIndex:"url",render:function(e,n){return"".concat(n.url,".").concat(I.a.frontendUrl.host)}},I.a.isPlanEnabled&&{title:Object(r.c)("tenant.fields.plan"),sorter:!0,dataIndex:"plan",render:function(e,n){return Object(c.jsx)(d.a,{color:e===S.a.values.free?void 0:"gold",children:Object(r.c)("plan.".concat(e,".label"))})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return w(t)?Object(c.jsxs)("div",{className:"table-actions",children:[Object(c.jsx)(b.a,{title:Object(r.c)("common.areYouSure"),onConfirm:function(){return e=w(t),void n(g.a.doAccept(e));var e},okText:Object(r.c)("common.yes"),cancelText:Object(r.c)("common.no"),children:Object(c.jsx)(f.a,{type:"primary",children:Object(r.c)("tenant.invitation.accept")})}),Object(c.jsx)(b.a,{title:Object(r.c)("common.areYouSure"),onConfirm:function(){return e=w(t),void n(g.a.doDecline(e));var e},okText:Object(r.c)("common.yes"),cancelText:Object(r.c)("common.no"),children:Object(c.jsx)(f.a,{type:"primary",danger:!0,children:Object(r.c)("tenant.invitation.decline")})})]}):Object(c.jsxs)("div",{className:"table-actions",children:[D.id!==t.id&&Object(c.jsx)(f.a,{type:"primary",onClick:function(){return e=t,void n(v.a.doSelectTenant(e));var e},children:Object(r.c)("tenant.select")}),E(t)&&Object(c.jsx)(j.a,{to:"/tenant/".concat(t.id,"/edit"),children:Object(r.c)("common.edit")}),V(t)&&Object(c.jsx)(b.a,{title:Object(r.c)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(O.a.doDestroy(e));var e},okText:Object(r.c)("common.yes"),cancelText:Object(r.c)("common.no"),children:Object(c.jsx)(T.a,{children:Object(c.jsx)(m.a,{title:Object(r.c)("common.destroy"),children:Object(c.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}].filter(Boolean);return Object(c.jsx)(N.a,{children:Object(c.jsx)(p.a,{rowKey:"id",loading:i,columns:R,dataSource:u,pagination:x,onChange:function(e,t,c){n(s.a.doChangePaginationAndSort(e,c))},scroll:{x:!0}})})},D=t(1201),R=t(1065),B=function(e){return Object(c.jsx)(R.a,{children:Object(c.jsx)(j.a,{to:"/tenant/new",children:Object(c.jsx)(f.a,{type:"primary",icon:Object(c.jsx)(D.a,{}),children:Object(r.c)("common.new")})})})};n.default=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{style:{marginTop:0},children:[Object(c.jsx)(i.a,{children:Object(r.c)("tenant.list.title")}),Object(c.jsx)(B,{}),Object(c.jsx)(u,{}),Object(c.jsx)(V,{})]})})}}}]);