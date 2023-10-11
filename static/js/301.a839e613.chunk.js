"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[301],{69559:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.cibleRevendication.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},40846:function(e,n,t){var r=t(70816),a=t.n(r),l=t(10499),i={enumerator:function(e){return function(n){return n?(0,l.ag)("".concat(e,".").concat(n)):null}},enumeratorMultiple:function(e){return function(n){return n?n.map((function(n){return(0,l.ag)("".concat(e,".").concat(n))})).join(", "):null}},generic:function(){return function(e){return e}},stringArray:function(){return function(e){return(e||[]).join(", ")}},json:function(){return function(e){return e?JSON.stringify(e,null,2):null}},decimal:function(e){return function(n){return o(n,e)}},boolean:function(e,n){return function(t){return null==t?null:Boolean(t)?e||(0,l.ag)("common.yes"):n||(0,l.ag)("common.no")}},relationToOne:function(){return function(e){return e&&e.label||null}},relationToMany:function(){return function(e){return(e||[]).map((function(e){return e.label})).join(", ")}},filesOrImages:function(){return function(e){return(e||[]).map((function(e){return e.downloadUrl})).join(" ")}},date:function(){return function(e){return c(e)}},dateRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(c(n)):!n&&t?"< ".concat(c(t)):"".concat(c(n)," - ").concat(c(t)):null}},datetime:function(){return function(e){return s(e)}},datetimeRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(s(n)):!n&&t?"< ".concat(s(t)):"".concat(s(n)," - ").concat(s(t)):null}},decimalRange:function(e){return function(n){if(!n||!n.length)return null;var t=n[0],r=2===n.length&&n[1];return null==t&&null==r?null:null!=t&&null==r?"> ".concat(o(t,e)):null==t&&null!=r?"< ".concat(o(r,e)):"".concat(o(t,e)," - ").concat(o(r,e))}},range:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return null!=n&&""!==n||null!=t&&""!==t?null==n||null!=t&&""!==t?null!=n&&""!==n||null==t?"".concat(n," - ").concat(t):"< ".concat(t):"> ".concat(n):null}}};function o(e,n){return e?n?Number(e).toFixed(n):Number(e):null}function c(e){return e?a()(e).format("YYYY-MM-DD"):null}function s(e){return e?a()(e).format("YYYY-MM-DD HH:mm"):null}n.Z=i},47590:function(e,n,t){var r=t(6473),a=t(10499),l=t(70816),i=t.n(l),o={generic:function(e){return r.nK().label(e)},string:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},stringArray:function(e){return r.IX().compact().ensure().of(r.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e).transform((function(e,n){return n?Array.isArray(n)?n:[n]:n}))},boolean:function(e){return r.Xg().nullable(!0).label(e)},relationToOne:function(e){return r.nK().label(e).transform((function(e,n){return n?n.id:null}))},relationToMany:function(e){return r.nK().label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}))},json:function(e){return r.nK().label(e)},integer:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e)},integerRange:function(e){return r.nK().label(e)},enumerator:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0)},email:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},decimal:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)},decimalRange:function(e){return r.IX().ensure().compact().of(r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)).label(e)},datetime:function(e){return r.nK().nullable(!0).label(e).transform((function(e,n){return n?i()(n,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(e){return r.nK().label(e)},date:function(e){return r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()}))},dateRange:function(e){return r.IX().ensure().compact().of(r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?i()(e).format("YYYY-MM-DD"):null}))).label(e)}};n.Z=o},91920:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(68197),a=t(59624),l=t(47313),i=t(10499),o=t(1413),c=t(29439),s=t(40765),u=t(12196),d=t(59491),f=t(43270),m=t(45788),b=t(39179),v=t(52915),g=t(69138),p=t(6473),x=t(47590),h=t(67357),Z=t(13586),y=t(40846),R=t(35432),j=t(56148),E=t(33957),C=t(46417),N=p.Ry().shape({nameFR:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.nameFR")),nameEN:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.nameEN")),nameAR:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.nameAR")),abbrevFR:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.abbrevFR")),abbrevEN:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.abbrevEN")),abbrevAR:x.Z.string((0,i.ag)("entities.cibleRevendication.fields.abbrevAR")),parent:x.Z.relationToOne((0,i.ag)("entities.cibleRevendication.fields.parent"))}),O={nameFR:null,nameEN:null,nameAR:null,abbrevFR:null,abbrevEN:null,abbrevAR:null,parent:null},w={nameFR:{label:(0,i.ag)("entities.cibleRevendication.fields.nameFR"),render:y.Z.generic()},nameEN:{label:(0,i.ag)("entities.cibleRevendication.fields.nameEN"),render:y.Z.generic()},nameAR:{label:(0,i.ag)("entities.cibleRevendication.fields.nameAR"),render:y.Z.generic()},abbrevFR:{label:(0,i.ag)("entities.cibleRevendication.fields.abbrevFR"),render:y.Z.generic()},abbrevEN:{label:(0,i.ag)("entities.cibleRevendication.fields.abbrevEN"),render:y.Z.generic()},abbrevAR:{label:(0,i.ag)("entities.cibleRevendication.fields.abbrevAR"),render:y.Z.generic()},parent:{label:(0,i.ag)("entities.cibleRevendication.fields.parent"),render:y.Z.relationToOne()}},A=function(e){var n=(0,m.I0)(),t=(0,m.v9)(v.Z.selectRawFilter),p=(0,l.useState)(!1),x=(0,c.Z)(p,2),y=x[0],A=x[1],P=(0,l.useState)((function(){return(0,o.Z)((0,o.Z)({},O),t)})),k=(0,c.Z)(P,1)[0],T=(0,f.cI)({resolver:(0,h.X)(N),defaultValues:k,mode:"all"});(0,l.useEffect)((function(){n(b.Z.doFetch(N.cast(k),t))}),[]);var S=function(e){var t=T.getValues();n(b.Z.doFetch(e,t)),A(!1)},I=e.loading;return(0,C.jsx)(g.Z,{children:(0,C.jsx)(R.Z,{activeKey:y?"filter":void 0,expandIconPosition:"right",ghost:!0,onChange:function(e){A(Boolean(e.length))},children:(0,C.jsx)(R.Z.Panel,{header:(0,C.jsx)(Z.Z,{renders:w,values:t,expanded:y,onRemove:function(e){return T.setValue(e,O[e]),T.handleSubmit(S)()}}),children:(0,C.jsx)(f.RV,(0,o.Z)((0,o.Z)({},T),{},{children:(0,C.jsxs)("form",{onSubmit:T.handleSubmit(S),children:[(0,C.jsxs)(r.Z,{gutter:24,children:[(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"nameAR",label:(0,i.ag)("entities.cibleRevendication.fields.nameAR"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"nameFR",label:(0,i.ag)("entities.cibleRevendication.fields.nameFR"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"nameEN",label:(0,i.ag)("entities.cibleRevendication.fields.nameEN"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"abbrevAR",label:(0,i.ag)("entities.cibleRevendication.fields.abbrevAR"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"abbrevFR",label:(0,i.ag)("entities.cibleRevendication.fields.abbrevFR"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(j.Z,{name:"abbrevEN",label:(0,i.ag)("entities.cibleRevendication.fields.abbrevEN"),layout:g.T})}),(0,C.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,C.jsx)(E.Z,{name:"parent",label:(0,i.ag)("entities.cibleRevendication.fields.parent"),layout:g.T})})]}),(0,C.jsx)(r.Z,{children:(0,C.jsxs)(a.Z,{className:"filter-buttons",span:24,children:[(0,C.jsx)(d.Z,{loading:I,icon:(0,C.jsx)(s.Z,{rev:void 0}),type:"primary",htmlType:"submit",children:(0,i.ag)("common.search")}),(0,C.jsx)(d.Z,{loading:I,onClick:function(){Object.keys(O).forEach((function(e){T.setValue(e,O[e])})),n(b.Z.doReset()),A(!1)},icon:(0,C.jsx)(u.Z,{rev:void 0}),children:(0,i.ag)("common.reset")})]})})]})}))},"filter")})})},P=t(96995),k=t(4927),T=t(72641),S=t(23577),I=t(69559),Y=t(47849),_=t(28303),F=t(27216),M=t(82509),D=function(e){var n=(0,m.v9)(Y.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,C.jsx)(C.Fragment,{children:t().map((function(e){return t=e,n?(0,C.jsx)("div",{children:(0,C.jsx)(_.rU,{to:"/cible-revendication/".concat(t.id),children:t.nameAR})},t.id):(0,C.jsx)("div",{children:t.nameAR},t.id);var t}))}):null},B=function(e){var n=(0,m.I0)(),t=(0,m.v9)(v.Z.selectLoading),r=(0,m.v9)(I.Z.selectLoading),a=t||r,l=(0,m.v9)(v.Z.selectRows),o=(0,m.v9)(v.Z.selectPagination),c=(0,m.v9)(v.Z.selectSelectedKeys),s=(0,m.v9)(Y.Z.selectPermissionToEdit),u=(0,m.v9)(Y.Z.selectPermissionToDestroy),d=[{title:(0,i.ag)("entities.cibleRevendication.fields.nameAR"),sorter:!0,dataIndex:"nameAR"},{title:(0,i.ag)("entities.cibleRevendication.fields.nameFR"),sorter:!0,dataIndex:"nameFR"},{title:(0,i.ag)("entities.cibleRevendication.fields.nameEN"),sorter:!0,dataIndex:"nameEN"},{title:(0,i.ag)("entities.cibleRevendication.fields.abbrevAR"),sorter:!0,dataIndex:"abbrevAR"},{title:(0,i.ag)("entities.cibleRevendication.fields.abbrevFR"),sorter:!0,dataIndex:"abbrevFR"},{title:(0,i.ag)("entities.cibleRevendication.fields.abbrevEN"),sorter:!0,dataIndex:"abbrevEN"},{title:(0,i.ag)("entities.cibleRevendication.fields.parent"),sorter:!1,dataIndex:"parent",render:function(e){return(0,C.jsx)(D,{value:e})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return(0,C.jsxs)("div",{className:"table-actions",children:[(0,C.jsx)(_.rU,{to:"/cible-revendication/".concat(t.id),children:(0,C.jsx)(P.Z,{title:(0,i.ag)("common.view"),children:(0,C.jsx)("i",{className:"fa-regular fa-eye table-actions-icon"})})}),s&&(0,C.jsx)(_.rU,{to:"/cible-revendication/".concat(t.id,"/edit"),children:(0,C.jsx)(P.Z,{title:(0,i.ag)("common.edit"),children:(0,C.jsx)("i",{className:"fa-regular fa-pen-to-square table-actions-icon"})})}),u&&(0,C.jsx)(k.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(S.Z.doDestroy(e));var e},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:(0,C.jsx)(M.Z,{children:(0,C.jsx)(P.Z,{title:(0,i.ag)("common.destroy"),children:(0,C.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}];return(0,C.jsx)(F.Z,{children:(0,C.jsx)(T.Z,{rowKey:"id",loading:a,columns:d,dataSource:l,pagination:o,onChange:function(e,t,r){n(b.Z.doChangePaginationAndSort(e,r))},rowSelection:{selectedRowKeys:c,onChange:function(e){n(b.Z.doChangeSelected(e))}},scroll:{x:!0}})})},K=t(10419),U=t(23516),L=t(17551),V=function(e){var n=(0,m.I0)(),t=(0,m.v9)(v.Z.selectSelectedKeys),r=(0,m.v9)(v.Z.selectLoading),a=(0,m.v9)(I.Z.selectLoading),l=((0,m.v9)(v.Z.selectExportLoading),(0,m.v9)(v.Z.selectHasRows),(0,m.v9)(U.Z.selectPermissionToRead)),o=(0,m.v9)(Y.Z.selectPermissionToDestroy),c=(0,m.v9)(Y.Z.selectPermissionToCreate);(0,m.v9)(Y.Z.selectPermissionToImport);return(0,C.jsxs)(K.Z,{children:[c&&(0,C.jsx)(_.rU,{to:"/cible-revendication/new",children:(0,C.jsx)(P.Z,{title:(0,i.ag)("common.new"),children:(0,C.jsx)(d.Z,{type:"primary",children:(0,C.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!o)return null;var e=!t.length||r,l=(0,C.jsx)(d.Z,{disabled:e,loading:a,type:"primary",children:(0,C.jsx)("i",{className:"fa-regular fa-trash-can"})}),c=(0,C.jsx)(k.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){n(S.Z.doDestroyAll(t))},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:l});return e?(0,C.jsx)(P.Z,{title:(0,i.ag)("common.mustSelectARow"),children:l}):c}(),l&&(0,C.jsx)(_.rU,{to:"/audit-logs?entityNames=cibleRevendication",children:(0,C.jsx)(P.Z,{title:(0,i.ag)("auditLog.menu"),children:(0,C.jsx)(d.Z,{icon:(0,C.jsx)(L.Z,{rev:void 0})})})}),void 0]})},H=t(27829),X=t(53852),q=t(75352),z=function(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(X.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.cibleRevendication.menu")]]}),(0,C.jsxs)(H.Z,{children:[(0,C.jsxs)(r.Z,{children:[(0,C.jsx)(a.Z,{span:16,children:(0,C.jsx)(q.Z,{children:(0,i.ag)("entities.cibleRevendication.list.title")})}),(0,C.jsx)(a.Z,{span:8,style:{textAlign:"end"},children:(0,C.jsx)(V,{})})]}),(0,C.jsx)(A,{}),(0,C.jsx)(B,{})]})]})}},13586:function(e,n,t){t.d(n,{Z:function(){return i}});t(47313);var r=t(10499),a=t(66204),l=t(46417);function i(e){var n=e.values,t=e.renders,i=e.onClick,o=e.onRemove,c=Object.keys(n||{}).map((function(e){return t[e]?{key:e,label:t[e].label,value:t[e].render(n[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,l.jsx)("div",{onClick:i,className:"filter-preview",children:!c.length||e.expanded?(0,r.ag)("common.filters"):(0,l.jsxs)(l.Fragment,{children:[(0,r.ag)("common.filters"),":",(0,l.jsx)("span",{className:"filter-preview-values",children:c.map((function(e){return(0,l.jsx)(a.Z,{closable:Boolean(o),onClose:o?function(){return o(e.key)}:void 0,children:"".concat(e.label,": ").concat(e.value)},e.label)}))})]})})}},82509:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.button(r||(r=(0,a.Z)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.Z=l},69138:function(e,n,t){t.d(n,{T:function(){return i}});var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n\n  .filter-preview {\n    color: var(--secondary-color) !important;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .filter-buttons {\n    text-align: right;\n\n    .ant-btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"]))),i={labelCol:{xs:{span:24},sm:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18}}};n.Z=l},27216:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  .ant-table th {\n    background: var(--primary-color);\n\n    color: white;\n  }\n  .ant-table tr:nth-child(even) {\n    background: #d9d9d9;\n  }\n  .ant-table td {\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n    text-overflow: ellipsis;\n    \n    \n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));n.Z=l},10419:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=l},40765:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i=t(73448),o=function(e,n){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:l}))};o.displayName="SearchOutlined";var c=a.forwardRef(o)},28709:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(87462),a=t(4942),l=t(93433),i=t(47313),o=t(46123),c=t.n(o),s=t(14903),u=t(67669),d=t.n(u),f=t(37142),m=t(91964),b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},v=function(e){var n,t,a=e.prefixCls,l=e.separator,o=void 0===l?"/":l,c=e.children,s=e.overlay,u=e.dropdownProps,v=b(e,["prefixCls","separator","children","overlay","dropdownProps"]),g=(0,i.useContext(m.E_).getPrefixCls)("breadcrumb",a);return n="href"in v?i.createElement("a",(0,r.Z)({className:"".concat(g,"-link")},v),c):i.createElement("span",(0,r.Z)({className:"".concat(g,"-link")},v),c),t=n,n=s?i.createElement(f.Z,(0,r.Z)({overlay:s,placement:"bottomCenter"},u),i.createElement("span",{className:"".concat(g,"-overlay-link")},t,i.createElement(d(),null))):t,c?i.createElement("span",null,n,o&&""!==o&&i.createElement("span",{className:"".concat(g,"-separator")},o)):null};v.__ANT_BREADCRUMB_ITEM=!0;var g=v,p=function(e){var n=e.children,t=(0,i.useContext(m.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(t,"-separator")},n||"/")};p.__ANT_BREADCRUMB_SEPARATOR=!0;var x=p,h=t(9368),Z=t(39178),y=t(48138),R=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function j(e,n,t,r){var a=t.indexOf(e)===t.length-1,l=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?i.createElement("span",null,l):i.createElement("a",{href:"#/".concat(r.join("/"))},l)}var E=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},C=function(e){var n,t=e.prefixCls,o=e.separator,u=void 0===o?"/":o,d=e.style,f=e.className,b=e.routes,v=e.children,p=e.itemRender,x=void 0===p?j:p,C=e.params,N=void 0===C?{}:C,O=R(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),w=i.useContext(m.E_),A=w.getPrefixCls,P=w.direction,k=A("breadcrumb",t);if(b&&b.length>0){var T=[];n=b.map((function(e){var n,t=E(e.path,N);return t&&T.push(t),e.children&&e.children.length&&(n=i.createElement(h.Z,null,e.children.map((function(e){return i.createElement(h.Z.Item,{key:e.path||e.breadcrumbName},x(e,N,b,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,l.Z)(e),a=E(n,t);return a&&r.push(a),r}(T,e.path,N)))})))),i.createElement(g,{overlay:n,separator:u,key:t||e.breadcrumbName},x(e,N,b,T))}))}else v&&(n=(0,s.Z)(v).map((function(e,n){return e?((0,Z.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,y.Tm)(e,{separator:u,key:n})):e})));var S=c()(k,(0,a.Z)({},"".concat(k,"-rtl"),"rtl"===P),f);return i.createElement("div",(0,r.Z)({className:S,style:d},O),n)};C.Item=g,C.Separator=x;var N=C},66204:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(4942),a=t(87462),l=t(29439),i=t(47313),o=t(46123),c=t.n(o),s=t(62710),u=t(73571),d=t.n(u),f=t(91964),m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},b=function(e){var n,t=e.prefixCls,l=e.className,o=e.checked,s=e.onChange,u=e.onClick,d=m(e,["prefixCls","className","checked","onChange","onClick"]),b=(0,i.useContext(f.E_).getPrefixCls)("tag",t),v=c()(b,(n={},(0,r.Z)(n,"".concat(b,"-checkable"),!0),(0,r.Z)(n,"".concat(b,"-checkable-checked"),o),n),l);return i.createElement("span",(0,a.Z)({},d,{className:v,onClick:function(e){s&&s(!o),u&&u(e)}}))},v=t(20238),g=t(46479),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x=new RegExp("^(".concat(v.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(v.E.join("|"),")$")),Z=function(e,n){var t,o=e.prefixCls,u=e.className,m=e.style,b=e.children,v=e.icon,Z=e.color,y=e.onClose,R=e.closeIcon,j=e.closable,E=void 0!==j&&j,C=p(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),N=i.useContext(f.E_),O=N.getPrefixCls,w=N.direction,A=i.useState(!0),P=(0,l.Z)(A,2),k=P[0],T=P[1];i.useEffect((function(){"visible"in C&&T(C.visible)}),[C.visible]);var S=function(){return!!Z&&(x.test(Z)||h.test(Z))},I=(0,a.Z)({backgroundColor:Z&&!S()?Z:void 0},m),Y=S(),_=O("tag",o),F=c()(_,(t={},(0,r.Z)(t,"".concat(_,"-").concat(Z),Y),(0,r.Z)(t,"".concat(_,"-has-color"),Z&&!Y),(0,r.Z)(t,"".concat(_,"-hidden"),!k),(0,r.Z)(t,"".concat(_,"-rtl"),"rtl"===w),t),u),M=function(e){e.stopPropagation(),y&&y(e),e.defaultPrevented||"visible"in C||T(!1)},D="onClick"in C||b&&"a"===b.type,B=(0,s.default)(C,["visible"]),K=v||null,U=K?i.createElement(i.Fragment,null,K,i.createElement("span",null,b)):b,L=i.createElement("span",(0,a.Z)({},B,{ref:n,className:F,style:I}),U,E?R?i.createElement("span",{className:"".concat(_,"-close-icon"),onClick:M},R):i.createElement(d(),{className:"".concat(_,"-close-icon"),onClick:M}):null);return D?i.createElement(g.Z,null,L):L},y=i.forwardRef(Z);y.displayName="Tag",y.CheckableTag=b;var R=y}}]);