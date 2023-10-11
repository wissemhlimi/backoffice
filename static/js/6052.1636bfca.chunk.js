"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6052],{68760:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.delegation.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},40846:function(e,n,t){var r=t(70816),a=t.n(r),l=t(10499),i={enumerator:function(e){return function(n){return n?(0,l.ag)("".concat(e,".").concat(n)):null}},enumeratorMultiple:function(e){return function(n){return n?n.map((function(n){return(0,l.ag)("".concat(e,".").concat(n))})).join(", "):null}},generic:function(){return function(e){return e}},stringArray:function(){return function(e){return(e||[]).join(", ")}},json:function(){return function(e){return e?JSON.stringify(e,null,2):null}},decimal:function(e){return function(n){return o(n,e)}},boolean:function(e,n){return function(t){return null==t?null:Boolean(t)?e||(0,l.ag)("common.yes"):n||(0,l.ag)("common.no")}},relationToOne:function(){return function(e){return e&&e.label||null}},relationToMany:function(){return function(e){return(e||[]).map((function(e){return e.label})).join(", ")}},filesOrImages:function(){return function(e){return(e||[]).map((function(e){return e.downloadUrl})).join(" ")}},date:function(){return function(e){return c(e)}},dateRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(c(n)):!n&&t?"< ".concat(c(t)):"".concat(c(n)," - ").concat(c(t)):null}},datetime:function(){return function(e){return s(e)}},datetimeRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(s(n)):!n&&t?"< ".concat(s(t)):"".concat(s(n)," - ").concat(s(t)):null}},decimalRange:function(e){return function(n){if(!n||!n.length)return null;var t=n[0],r=2===n.length&&n[1];return null==t&&null==r?null:null!=t&&null==r?"> ".concat(o(t,e)):null==t&&null!=r?"< ".concat(o(r,e)):"".concat(o(t,e)," - ").concat(o(r,e))}},range:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return null!=n&&""!==n||null!=t&&""!==t?null==n||null!=t&&""!==t?null!=n&&""!==n||null==t?"".concat(n," - ").concat(t):"< ".concat(t):"> ".concat(n):null}}};function o(e,n){return e?n?Number(e).toFixed(n):Number(e):null}function c(e){return e?a()(e).format("YYYY-MM-DD"):null}function s(e){return e?a()(e).format("YYYY-MM-DD HH:mm"):null}n.Z=i},47590:function(e,n,t){var r=t(6473),a=t(10499),l=t(70816),i=t.n(l),o={generic:function(e){return r.nK().label(e)},string:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},stringArray:function(e){return r.IX().compact().ensure().of(r.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e).transform((function(e,n){return n?Array.isArray(n)?n:[n]:n}))},boolean:function(e){return r.Xg().nullable(!0).label(e)},relationToOne:function(e){return r.nK().label(e).transform((function(e,n){return n?n.id:null}))},relationToMany:function(e){return r.nK().label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}))},json:function(e){return r.nK().label(e)},integer:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e)},integerRange:function(e){return r.nK().label(e)},enumerator:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0)},email:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},decimal:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)},decimalRange:function(e){return r.IX().ensure().compact().of(r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)).label(e)},datetime:function(e){return r.nK().nullable(!0).label(e).transform((function(e,n){return n?i()(n,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(e){return r.nK().label(e)},date:function(e){return r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()}))},dateRange:function(e){return r.IX().ensure().compact().of(r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?i()(e).format("YYYY-MM-DD"):null}))).label(e)}};n.Z=o},66052:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r=t(68197),a=t(59624),l=t(47313),i=t(10499),o=t(1413),c=t(29439),s=t(40765),u=t(12196),d=t(59491),g=t(43270),f=t(45788),m=t(94703),x=t(67977),b=t(69138),h=t(6473),v=t(47590),Z=t(67357),p=t(13586),j=t(40846),y=t(35432),R=t(56148),C=t(53912),w=t(88962),E=t(46417),N=h.Ry().shape({nameFR:v.Z.string((0,i.ag)("entities.delegation.fields.nameFR")),nameEN:v.Z.string((0,i.ag)("entities.delegation.fields.nameEN")),nameAR:v.Z.string((0,i.ag)("entities.delegation.fields.nameAR")),gouvernorat:v.Z.relationToOne((0,i.ag)("entities.delegation.fields.gouvernorat")),nbreEcolesRange:v.Z.integerRange((0,i.ag)("entities.delegation.fields.nbreEcolesRange")),nbreCollegesRange:v.Z.integerRange((0,i.ag)("entities.delegation.fields.nbreCollegesRange")),nbreLyceesRange:v.Z.integerRange((0,i.ag)("entities.delegation.fields.nbreLyceesRange"))}),k={nameFR:null,nameEN:null,nameAR:null,gouvernorat:null,nbreEcolesRange:[],nbreCollegesRange:[],nbreLyceesRange:[]},A={nameFR:{label:(0,i.ag)("entities.delegation.fields.nameFR"),render:j.Z.generic()},nameEN:{label:(0,i.ag)("entities.delegation.fields.nameEN"),render:j.Z.generic()},nameAR:{label:(0,i.ag)("entities.delegation.fields.nameAR"),render:j.Z.generic()},gouvernorat:{label:(0,i.ag)("entities.delegation.fields.gouvernorat"),render:j.Z.relationToOne()},nbreEcolesRange:{label:(0,i.ag)("entities.delegation.fields.nbreEcolesRange"),render:j.Z.range()},nbreCollegesRange:{label:(0,i.ag)("entities.delegation.fields.nbreCollegesRange"),render:j.Z.range()},nbreLyceesRange:{label:(0,i.ag)("entities.delegation.fields.nbreLyceesRange"),render:j.Z.range()}},S=function(e){var n=(0,f.I0)(),t=(0,f.v9)(x.Z.selectRawFilter),h=(0,l.useState)(!1),v=(0,c.Z)(h,2),j=v[0],S=v[1],T=(0,l.useState)((function(){return(0,o.Z)((0,o.Z)({},k),t)})),O=(0,c.Z)(T,1)[0],P=(0,g.cI)({resolver:(0,Z.X)(N),defaultValues:O,mode:"all"});(0,l.useEffect)((function(){n(m.Z.doFetch(N.cast(O),t))}),[]);var Y=function(e){var t=P.getValues();n(m.Z.doFetch(e,t)),S(!1)},I=e.loading;return(0,E.jsx)(b.Z,{children:(0,E.jsx)(y.Z,{activeKey:j?"filter":void 0,expandIconPosition:"right",ghost:!0,onChange:function(e){S(Boolean(e.length))},children:(0,E.jsx)(y.Z.Panel,{header:(0,E.jsx)(p.Z,{renders:A,values:t,expanded:j,onRemove:function(e){return P.setValue(e,k[e]),P.handleSubmit(Y)()}}),children:(0,E.jsx)(g.RV,(0,o.Z)((0,o.Z)({},P),{},{children:(0,E.jsxs)("form",{onSubmit:P.handleSubmit(Y),children:[(0,E.jsxs)(r.Z,{gutter:24,children:[(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(R.Z,{name:"nameAR",label:(0,i.ag)("entities.delegation.fields.nameAR"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(R.Z,{name:"nameFR",label:(0,i.ag)("entities.delegation.fields.nameFR"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(R.Z,{name:"nameEN",label:(0,i.ag)("entities.delegation.fields.nameEN"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(w.Z,{name:"gouvernorat",label:(0,i.ag)("entities.delegation.fields.gouvernorat"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(C.Z,{name:"nbreEcolesRange",label:(0,i.ag)("entities.delegation.fields.nbreEcolesRange"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(C.Z,{name:"nbreCollegesRange",label:(0,i.ag)("entities.delegation.fields.nbreCollegesRange"),layout:b.T})}),(0,E.jsx)(a.Z,{xs:24,md:24,lg:12,children:(0,E.jsx)(C.Z,{name:"nbreLyceesRange",label:(0,i.ag)("entities.delegation.fields.nbreLyceesRange"),layout:b.T})})]}),(0,E.jsx)(r.Z,{children:(0,E.jsxs)(a.Z,{className:"filter-buttons",span:24,children:[(0,E.jsx)(d.Z,{loading:I,icon:(0,E.jsx)(s.Z,{rev:void 0}),type:"primary",htmlType:"submit",children:(0,i.ag)("common.search")}),(0,E.jsx)(d.Z,{loading:I,onClick:function(){Object.keys(k).forEach((function(e){P.setValue(e,k[e])})),n(m.Z.doReset()),S(!1)},icon:(0,E.jsx)(u.Z,{rev:void 0}),children:(0,i.ag)("common.reset")})]})})]})}))},"filter")})})},T=t(96995),O=t(4927),P=t(72641),Y=t(93295),I=t(68760),F=t(12009),M=t(28303),D=t(27216),L=t(82509),K=t(33792),B=t(512),V=function(e){var n=(0,f.v9)(B.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,E.jsx)(E.Fragment,{children:t().map((function(e){return t=e,n?(0,E.jsx)("div",{children:(0,E.jsx)(M.rU,{to:"/imada/".concat(t.id),children:t.nameAR})},t.id):(0,E.jsx)("div",{children:t.nameAR},t.id);var t}))}):null},_=function(e){var n=(0,f.I0)(),t=(0,f.v9)(x.Z.selectLoading),r=(0,f.v9)(I.Z.selectLoading),a=t||r,l=(0,f.v9)(x.Z.selectRows),o=(0,f.v9)(x.Z.selectPagination),c=(0,f.v9)(x.Z.selectSelectedKeys),s=(0,f.v9)(F.Z.selectPermissionToEdit),u=(0,f.v9)(F.Z.selectPermissionToDestroy),d=[{title:(0,i.ag)("entities.delegation.fields.nameAR"),sorter:!0,dataIndex:"nameAR"},{title:(0,i.ag)("entities.delegation.fields.nameFR"),sorter:!0,dataIndex:"nameFR"},{title:(0,i.ag)("entities.delegation.fields.nameEN"),sorter:!0,dataIndex:"nameEN"},{title:(0,i.ag)("entities.delegation.fields.gouvernorat"),sorter:!1,dataIndex:"gouvernorat",render:function(e){return(0,E.jsx)(K.Z,{value:e})}},{title:(0,i.ag)("entities.delegation.fields.imadas"),sorter:!1,dataIndex:"imadas",render:function(e){return(0,E.jsx)(V,{value:e})}},{title:(0,i.ag)("entities.delegation.fields.nbreEcoles"),sorter:!0,dataIndex:"nbreEcoles",align:"right"},{title:(0,i.ag)("entities.delegation.fields.nbreColleges"),sorter:!0,dataIndex:"nbreColleges",align:"right"},{title:(0,i.ag)("entities.delegation.fields.nbreLycees"),sorter:!0,dataIndex:"nbreLycees",align:"right"},{title:"",dataIndex:"",width:"160px",render:function(e,t){return(0,E.jsxs)("div",{className:"table-actions",children:[(0,E.jsx)(M.rU,{to:"/delegation/".concat(t.id),children:(0,E.jsx)(T.Z,{title:(0,i.ag)("common.view"),children:(0,E.jsx)("i",{className:"fa-regular fa-eye table-actions-icon"})})}),s&&(0,E.jsx)(M.rU,{to:"/delegation/".concat(t.id,"/edit"),children:(0,E.jsx)(T.Z,{title:(0,i.ag)("common.edit"),children:(0,E.jsx)("i",{className:"fa-regular fa-pen-to-square table-actions-icon"})})}),u&&(0,E.jsx)(O.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(Y.Z.doDestroy(e));var e},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:(0,E.jsx)(L.Z,{children:(0,E.jsx)(T.Z,{title:(0,i.ag)("common.destroy"),children:(0,E.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}];return(0,E.jsx)(D.Z,{children:(0,E.jsx)(P.Z,{rowKey:"id",loading:a,columns:d,dataSource:l,pagination:o,onChange:function(e,t,r){n(m.Z.doChangePaginationAndSort(e,r))},rowSelection:{selectedRowKeys:c,onChange:function(e){n(m.Z.doChangeSelected(e))}},scroll:{x:!0}})})},U=t(10419),q=t(23516),z=t(17551),H=function(e){var n=(0,f.I0)(),t=(0,f.v9)(x.Z.selectSelectedKeys),r=(0,f.v9)(x.Z.selectLoading),a=(0,f.v9)(I.Z.selectLoading),l=((0,f.v9)(x.Z.selectExportLoading),(0,f.v9)(x.Z.selectHasRows),(0,f.v9)(q.Z.selectPermissionToRead)),o=(0,f.v9)(F.Z.selectPermissionToDestroy),c=(0,f.v9)(F.Z.selectPermissionToCreate);(0,f.v9)(F.Z.selectPermissionToImport);return(0,E.jsxs)(U.Z,{children:[c&&(0,E.jsx)(M.rU,{to:"/delegation/new",children:(0,E.jsx)(T.Z,{title:(0,i.ag)("common.new"),children:(0,E.jsx)(d.Z,{type:"primary",children:(0,E.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!o)return null;var e=!t.length||r,l=(0,E.jsx)(d.Z,{disabled:e,loading:a,type:"primary",children:(0,E.jsx)("i",{className:"fa-regular fa-trash-can"})}),c=(0,E.jsx)(O.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){n(Y.Z.doDestroyAll(t))},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no"),children:l});return e?(0,E.jsx)(T.Z,{title:(0,i.ag)("common.mustSelectARow"),children:l}):c}(),l&&(0,E.jsx)(M.rU,{to:"/audit-logs?entityNames=delegation",children:(0,E.jsx)(T.Z,{title:(0,i.ag)("auditLog.menu"),children:(0,E.jsx)(d.Z,{icon:(0,E.jsx)(z.Z,{rev:void 0})})})}),void 0]})},X=t(27829),$=t(53852),G=t(75352),J=function(e){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)($.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.delegation.menu")]]}),(0,E.jsxs)(X.Z,{children:[(0,E.jsxs)(r.Z,{children:[(0,E.jsx)(a.Z,{span:16,children:(0,E.jsx)(G.Z,{children:(0,i.ag)("entities.delegation.list.title")})}),(0,E.jsx)(a.Z,{span:8,style:{textAlign:"end"},children:(0,E.jsx)(H,{})})]}),(0,E.jsx)(S,{}),(0,E.jsx)(_,{})]})]})}},33792:function(e,n,t){t(47313);var r=t(28303),a=t(45788),l=t(22407),i=t(46417);n.Z=function(e){var n=(0,a.v9)(l.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,i.jsx)(i.Fragment,{children:t().map((function(e){return t=e,n?(0,i.jsx)("div",{children:(0,i.jsx)(r.rU,{to:"/gouvernorat/".concat(t.id),children:t.nameAR})},t.id):(0,i.jsx)("div",{children:t.nameAR},t.id);var t}))}):null}},13586:function(e,n,t){t.d(n,{Z:function(){return i}});t(47313);var r=t(10499),a=t(66204),l=t(46417);function i(e){var n=e.values,t=e.renders,i=e.onClick,o=e.onRemove,c=Object.keys(n||{}).map((function(e){return t[e]?{key:e,label:t[e].label,value:t[e].render(n[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,l.jsx)("div",{onClick:i,className:"filter-preview",children:!c.length||e.expanded?(0,r.ag)("common.filters"):(0,l.jsxs)(l.Fragment,{children:[(0,r.ag)("common.filters"),":",(0,l.jsx)("span",{className:"filter-preview-values",children:c.map((function(e){return(0,l.jsx)(a.Z,{closable:Boolean(o),onClose:o?function(){return o(e.key)}:void 0,children:"".concat(e.label,": ").concat(e.value)},e.label)}))})]})})}},53912:function(e,n,t){var r=t(1413),a=t(59420),l=t(62513),i=t(43270),o=t(47313),c=t(49384),s=t(46417),u=function(e){var n=e.name,t=e.label,u=e.hint,d=e.layout,g=e.size,f=e.placeholder,m=e.autoFocus,x=e.autoComplete,b=e.prefix,h=e.externalErrorMessage,v=e.required,Z=(0,i.Gc)(),p=Z.register,j=Z.errors,y=Z.formState,R=y.touched,C=y.isSubmitted,w=Z.setValue,E=Z.watch,N=c.Z.errorMessage(n,j,R,C,h),k=E(n);(0,o.useEffect)((function(){p({name:n})}),[p,n]);var A=function(){return k?Array.isArray(!k)?null:k.length?k[0]:null:null},S=function(){return k?Array.isArray(!k)||k.length<2?null:k[1]:null};return(0,s.jsx)(a.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:t,validateStatus:N?"error":"success",required:v,help:N||u,children:(0,s.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",alignItems:"baseline"},children:[(0,s.jsx)(l.Z,{style:{width:"100%"},id:"".concat(n,"Start"),onChange:function(t){return function(t){w(n,[t,S()],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([t,S()])}(t)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:A(),size:g||void 0,placeholder:f||void 0,autoFocus:m||!1,autoComplete:x||void 0,prefix:b||void 0}),(0,s.jsx)("div",{style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),(0,s.jsx)(l.Z,{style:{width:"100%"},id:"".concat(n,"End"),onChange:function(t){return function(t){w(n,[A(),t],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([t,A()])}(t)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:S(),size:g||void 0,placeholder:f||void 0,autoFocus:m||!1,autoComplete:x||void 0,prefix:b||void 0})]})}))};u.defaultProps={layout:null,required:!1},n.Z=u},82509:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.button(r||(r=(0,a.Z)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.Z=l},69138:function(e,n,t){t.d(n,{T:function(){return i}});var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n\n  .filter-preview {\n    color: var(--secondary-color) !important;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .filter-buttons {\n    text-align: right;\n\n    .ant-btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"]))),i={labelCol:{xs:{span:24},sm:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18}}};n.Z=l},27216:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  .ant-table th {\n    background: var(--primary-color);\n\n    color: white;\n  }\n  .ant-table tr:nth-child(even) {\n    background: #d9d9d9;\n  }\n  .ant-table td {\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n    text-overflow: ellipsis;\n    \n    \n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));n.Z=l},10419:function(e,n,t){var r,a=t(30168),l=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=l},40765:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i=t(73448),o=function(e,n){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:l}))};o.displayName="SearchOutlined";var c=a.forwardRef(o)},66204:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4942),a=t(87462),l=t(29439),i=t(47313),o=t(46123),c=t.n(o),s=t(62710),u=t(73571),d=t.n(u),g=t(91964),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},m=function(e){var n,t=e.prefixCls,l=e.className,o=e.checked,s=e.onChange,u=e.onClick,d=f(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,i.useContext(g.E_).getPrefixCls)("tag",t),x=c()(m,(n={},(0,r.Z)(n,"".concat(m,"-checkable"),!0),(0,r.Z)(n,"".concat(m,"-checkable-checked"),o),n),l);return i.createElement("span",(0,a.Z)({},d,{className:x,onClick:function(e){s&&s(!o),u&&u(e)}}))},x=t(20238),b=t(46479),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},v=new RegExp("^(".concat(x.Y.join("|"),")(-inverse)?$")),Z=new RegExp("^(".concat(x.E.join("|"),")$")),p=function(e,n){var t,o=e.prefixCls,u=e.className,f=e.style,m=e.children,x=e.icon,p=e.color,j=e.onClose,y=e.closeIcon,R=e.closable,C=void 0!==R&&R,w=h(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=i.useContext(g.E_),N=E.getPrefixCls,k=E.direction,A=i.useState(!0),S=(0,l.Z)(A,2),T=S[0],O=S[1];i.useEffect((function(){"visible"in w&&O(w.visible)}),[w.visible]);var P=function(){return!!p&&(v.test(p)||Z.test(p))},Y=(0,a.Z)({backgroundColor:p&&!P()?p:void 0},f),I=P(),F=N("tag",o),M=c()(F,(t={},(0,r.Z)(t,"".concat(F,"-").concat(p),I),(0,r.Z)(t,"".concat(F,"-has-color"),p&&!I),(0,r.Z)(t,"".concat(F,"-hidden"),!T),(0,r.Z)(t,"".concat(F,"-rtl"),"rtl"===k),t),u),D=function(e){e.stopPropagation(),j&&j(e),e.defaultPrevented||"visible"in w||O(!1)},L="onClick"in w||m&&"a"===m.type,K=(0,s.default)(w,["visible"]),B=x||null,V=B?i.createElement(i.Fragment,null,B,i.createElement("span",null,m)):m,_=i.createElement("span",(0,a.Z)({},K,{ref:n,className:M,style:Y}),V,C?y?i.createElement("span",{className:"".concat(F,"-close-icon"),onClick:D},y):i.createElement(d(),{className:"".concat(F,"-close-icon"),onClick:D}):null);return L?i.createElement(b.Z,null,_):_},j=i.forwardRef(p);j.displayName="Tag",j.CheckableTag=m;var y=j}}]);