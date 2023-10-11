"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5468],{22407:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),l=t(71945),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.gouvernoratRead)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.gouvernoratEdit)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.gouvernoratCreate)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.gouvernoratImport)})),d={selectPermissionToRead:i,selectPermissionToEdit:c,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.gouvernoratDestroy)})),selectPermissionToImport:s};n.Z=d},89625:function(e,n,t){var r={selectLoading:(0,t(76747).P1)([function(e){return e.region.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=r},61961:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),l=t(71945),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.regionRead)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.regionEdit)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.regionCreate)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.regionImport)})),d={selectPermissionToRead:i,selectPermissionToEdit:c,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.regionDestroy)})),selectPermissionToImport:s};n.Z=d},40846:function(e,n,t){var r=t(70816),a=t.n(r),o=t(10499),l={enumerator:function(e){return function(n){return n?(0,o.ag)("".concat(e,".").concat(n)):null}},enumeratorMultiple:function(e){return function(n){return n?n.map((function(n){return(0,o.ag)("".concat(e,".").concat(n))})).join(", "):null}},generic:function(){return function(e){return e}},stringArray:function(){return function(e){return(e||[]).join(", ")}},json:function(){return function(e){return e?JSON.stringify(e,null,2):null}},decimal:function(e){return function(n){return i(n,e)}},boolean:function(e,n){return function(t){return null==t?null:Boolean(t)?e||(0,o.ag)("common.yes"):n||(0,o.ag)("common.no")}},relationToOne:function(){return function(e){return e&&e.label||null}},relationToMany:function(){return function(e){return(e||[]).map((function(e){return e.label})).join(", ")}},filesOrImages:function(){return function(e){return(e||[]).map((function(e){return e.downloadUrl})).join(" ")}},date:function(){return function(e){return c(e)}},dateRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(c(n)):!n&&t?"< ".concat(c(t)):"".concat(c(n)," - ").concat(c(t)):null}},datetime:function(){return function(e){return u(e)}},datetimeRange:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return n||t?n&&!t?"> ".concat(u(n)):!n&&t?"< ".concat(u(t)):"".concat(u(n)," - ").concat(u(t)):null}},decimalRange:function(e){return function(n){if(!n||!n.length)return null;var t=n[0],r=2===n.length&&n[1];return null==t&&null==r?null:null!=t&&null==r?"> ".concat(i(t,e)):null==t&&null!=r?"< ".concat(i(r,e)):"".concat(i(t,e)," - ").concat(i(r,e))}},range:function(){return function(e){if(!e||!e.length)return null;var n=e[0],t=2===e.length&&e[1];return null!=n&&""!==n||null!=t&&""!==t?null==n||null!=t&&""!==t?null!=n&&""!==n||null==t?"".concat(n," - ").concat(t):"< ".concat(t):"> ".concat(n):null}}};function i(e,n){return e?n?Number(e).toFixed(n):Number(e):null}function c(e){return e?a()(e).format("YYYY-MM-DD"):null}function u(e){return e?a()(e).format("YYYY-MM-DD HH:mm"):null}n.Z=l},47590:function(e,n,t){var r=t(6473),a=t(10499),o=t(70816),l=t.n(o),i={generic:function(e){return r.nK().label(e)},string:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},stringArray:function(e){return r.IX().compact().ensure().of(r.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e).transform((function(e,n){return n?Array.isArray(n)?n:[n]:n}))},boolean:function(e){return r.Xg().nullable(!0).label(e)},relationToOne:function(e){return r.nK().label(e).transform((function(e,n){return n?n.id:null}))},relationToMany:function(e){return r.nK().label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}))},json:function(e){return r.nK().label(e)},integer:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e)},integerRange:function(e){return r.nK().label(e)},enumerator:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0)},email:function(e){return r.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e)},decimal:function(e){return r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)},decimalRange:function(e){return r.IX().ensure().compact().of(r.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e)).label(e)},datetime:function(e){return r.nK().nullable(!0).label(e).transform((function(e,n){return n?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(e){return r.nK().label(e)},date:function(e){return r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()}))},dateRange:function(e){return r.IX().ensure().compact().of(r.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}))).label(e)}};n.Z=i},33792:function(e,n,t){t(47313);var r=t(28303),a=t(45788),o=t(22407),l=t(46417);n.Z=function(e){var n=(0,a.v9)(o.Z.selectPermissionToRead),t=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return t().length?(0,l.jsx)(l.Fragment,{children:t().map((function(e){return t=e,n?(0,l.jsx)("div",{children:(0,l.jsx)(r.rU,{to:"/gouvernorat/".concat(t.id),children:t.nameAR})},t.id):(0,l.jsx)("div",{children:t.nameAR},t.id);var t}))}):null}},27829:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=o},85468:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(47313),a=t(10499),o=t(1413),l=t(29439),i=t(40765),c=t(12196),u=t(68197),s=t(59624),d=t(59491),f=t(43270),m=t(45788),g=t(32818),p=t(44709),v=t(69138),Z=t(6473),h=t(47590),x=t(67357),b=t(13586),y=t(40846),j=t(35432),C=t(56148),R=t(46417),E=Z.Ry().shape({nameFR:h.Z.string((0,a.ag)("entities.region.fields.nameFR")),nameEN:h.Z.string((0,a.ag)("entities.region.fields.nameEN")),nameAR:h.Z.string((0,a.ag)("entities.region.fields.nameAR"))}),w={nameFR:null,nameEN:null,nameAR:null},P={nameFR:{label:(0,a.ag)("entities.region.fields.nameFR"),render:y.Z.generic()},nameEN:{label:(0,a.ag)("entities.region.fields.nameEN"),render:y.Z.generic()},nameAR:{label:(0,a.ag)("entities.region.fields.nameAR"),render:y.Z.generic()}},O=function(e){var n=(0,m.I0)(),t=(0,m.v9)(p.Z.selectRawFilter),Z=(0,r.useState)(!1),h=(0,l.Z)(Z,2),y=h[0],O=h[1],T=(0,r.useState)((function(){return(0,o.Z)((0,o.Z)({},w),t)})),N=(0,l.Z)(T,1)[0],k=(0,f.cI)({resolver:(0,x.X)(E),defaultValues:N,mode:"all"});(0,r.useEffect)((function(){n(g.Z.doFetch(E.cast(N),t))}),[]);var A=function(e){var t=k.getValues();n(g.Z.doFetch(e,t)),O(!1)},S=e.loading;return(0,R.jsx)(v.Z,{children:(0,R.jsx)(j.Z,{activeKey:y?"filter":void 0,expandIconPosition:"right",ghost:!0,onChange:function(e){O(Boolean(e.length))},children:(0,R.jsx)(j.Z.Panel,{header:(0,R.jsx)(b.Z,{renders:P,values:t,expanded:y,onRemove:function(e){return k.setValue(e,w[e]),k.handleSubmit(A)()}}),children:(0,R.jsx)(f.RV,(0,o.Z)((0,o.Z)({},k),{},{children:(0,R.jsxs)("form",{onSubmit:k.handleSubmit(A),children:[(0,R.jsxs)(u.Z,{gutter:24,children:[(0,R.jsx)(s.Z,{xs:24,md:24,lg:12,children:(0,R.jsx)(C.Z,{name:"nameAR",label:(0,a.ag)("entities.region.fields.nameAR"),layout:v.T})}),(0,R.jsx)(s.Z,{xs:24,md:24,lg:12,children:(0,R.jsx)(C.Z,{name:"nameFR",label:(0,a.ag)("entities.region.fields.nameFR"),layout:v.T})}),(0,R.jsx)(s.Z,{xs:24,md:24,lg:12,children:(0,R.jsx)(C.Z,{name:"nameEN",label:(0,a.ag)("entities.region.fields.nameEN"),layout:v.T})})]}),(0,R.jsx)(u.Z,{children:(0,R.jsxs)(s.Z,{className:"filter-buttons",span:24,children:[(0,R.jsx)(d.Z,{loading:S,icon:(0,R.jsx)(i.Z,{rev:void 0}),type:"primary",htmlType:"submit",children:(0,a.ag)("common.search")}),(0,R.jsx)(d.Z,{loading:S,onClick:function(){Object.keys(w).forEach((function(e){k.setValue(e,w[e])})),n(g.Z.doReset()),O(!1)},icon:(0,R.jsx)(c.Z,{rev:void 0}),children:(0,a.ag)("common.reset")})]})})]})}))},"filter")})})},T=t(96995),N=t(4927),k=t(72641),A=t(87083),S=t(89625),I=t(61961),M=t(28303),Y=t(27216),_=t(82509),D=t(33792),U=function(e){var n=(0,m.I0)(),t=(0,m.v9)(p.Z.selectLoading),r=(0,m.v9)(S.Z.selectLoading),o=t||r,l=(0,m.v9)(p.Z.selectRows),i=(0,m.v9)(p.Z.selectPagination),c=(0,m.v9)(p.Z.selectSelectedKeys),u=(0,m.v9)(I.Z.selectPermissionToEdit),s=(0,m.v9)(I.Z.selectPermissionToDestroy),d=[{title:(0,a.ag)("entities.region.fields.nameAR"),sorter:!0,dataIndex:"nameAR"},{title:(0,a.ag)("entities.region.fields.nameFR"),sorter:!0,dataIndex:"nameFR"},{title:(0,a.ag)("entities.region.fields.nameEN"),sorter:!0,dataIndex:"nameEN"},{title:(0,a.ag)("entities.region.fields.gouvernorats"),sorter:!1,dataIndex:"gouvernorats",render:function(e){return(0,R.jsx)(D.Z,{value:e})}},{title:"",dataIndex:"",width:"160px",render:function(e,t){return(0,R.jsxs)("div",{className:"table-actions",children:[(0,R.jsx)(M.rU,{to:"/region/".concat(t.id),children:(0,R.jsx)(T.Z,{title:(0,a.ag)("common.view"),children:(0,R.jsx)("i",{className:"fa-regular fa-eye table-actions-icon"})})}),u&&(0,R.jsx)(M.rU,{to:"/region/".concat(t.id,"/edit"),children:(0,R.jsx)(T.Z,{title:(0,a.ag)("common.edit"),children:(0,R.jsx)("i",{className:"fa-regular fa-pen-to-square table-actions-icon"})})}),s&&(0,R.jsx)(N.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){return e=t.id,void n(A.Z.doDestroy(e));var e},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no"),children:(0,R.jsx)(_.Z,{children:(0,R.jsx)(T.Z,{title:(0,a.ag)("common.destroy"),children:(0,R.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}];return(0,R.jsx)(Y.Z,{children:(0,R.jsx)(k.Z,{rowKey:"id",loading:o,columns:d,dataSource:l,pagination:i,onChange:function(e,t,r){n(g.Z.doChangePaginationAndSort(e,r))},rowSelection:{selectedRowKeys:c,onChange:function(e){n(g.Z.doChangeSelected(e))}},scroll:{x:!0}})})},B=t(10419),F=t(23516),K=t(17551),L=function(e){var n=(0,m.I0)(),t=(0,m.v9)(p.Z.selectSelectedKeys),r=(0,m.v9)(p.Z.selectLoading),o=(0,m.v9)(S.Z.selectLoading),l=((0,m.v9)(p.Z.selectExportLoading),(0,m.v9)(p.Z.selectHasRows),(0,m.v9)(F.Z.selectPermissionToRead)),i=(0,m.v9)(I.Z.selectPermissionToDestroy),c=(0,m.v9)(I.Z.selectPermissionToCreate);(0,m.v9)(I.Z.selectPermissionToImport);return(0,R.jsxs)(B.Z,{children:[c&&(0,R.jsx)(M.rU,{to:"/region/new",children:(0,R.jsx)(T.Z,{title:(0,a.ag)("common.new"),children:(0,R.jsx)(d.Z,{type:"primary",children:(0,R.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!i)return null;var e=!t.length||r,l=(0,R.jsx)(d.Z,{disabled:e,loading:o,type:"primary",children:(0,R.jsx)("i",{className:"fa-regular fa-trash-can"})}),c=(0,R.jsx)(N.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){n(A.Z.doDestroyAll(t))},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no"),children:l});return e?(0,R.jsx)(T.Z,{title:(0,a.ag)("common.mustSelectARow"),children:l}):c}(),l&&(0,R.jsx)(M.rU,{to:"/audit-logs?entityNames=region",children:(0,R.jsx)(T.Z,{title:(0,a.ag)("auditLog.menu"),children:(0,R.jsx)(d.Z,{icon:(0,R.jsx)(K.Z,{rev:void 0})})})}),void 0]})},V=t(27829),q=t(53852),z=t(75352),H=function(e){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(q.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("entities.region.menu")]]}),(0,R.jsxs)(V.Z,{children:[(0,R.jsxs)(u.Z,{children:[(0,R.jsx)(s.Z,{span:16,children:(0,R.jsx)(z.Z,{children:(0,a.ag)("entities.region.list.title")})}),(0,R.jsx)(s.Z,{span:8,style:{textAlign:"end"},children:(0,R.jsx)(L,{})})]}),(0,R.jsx)(O,{}),(0,R.jsx)(U,{})]})]})}},53852:function(e,n,t){var r=t(28709),a=(t(47313),t(28303)),o=t(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(r.Z,{children:e.items.map((function(e){return(0,o.jsx)(r.Z.Item,{children:n(e)?(0,o.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},13586:function(e,n,t){t.d(n,{Z:function(){return l}});t(47313);var r=t(10499),a=t(66204),o=t(46417);function l(e){var n=e.values,t=e.renders,l=e.onClick,i=e.onRemove,c=Object.keys(n||{}).map((function(e){return t[e]?{key:e,label:t[e].label,value:t[e].render(n[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,o.jsx)("div",{onClick:l,className:"filter-preview",children:!c.length||e.expanded?(0,r.ag)("common.filters"):(0,o.jsxs)(o.Fragment,{children:[(0,r.ag)("common.filters"),":",(0,o.jsx)("span",{className:"filter-preview-values",children:c.map((function(e){return(0,o.jsx)(a.Z,{closable:Boolean(i),onClose:i?function(){return i(e.key)}:void 0,children:"".concat(e.label,": ").concat(e.value)},e.label)}))})]})})}},49384:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(15671),a=t(43144),o=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!r&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},56148:function(e,n,t){var r=t(1413),a=t(59420),o=t(46937),l=t(43270),i=t(47313),c=t(49384),u=t(46417),s=function(e){var n=e.label,t=e.name,s=e.hint,d=e.layout,f=e.size,m=e.type,g=e.placeholder,p=e.autoFocus,v=e.autoComplete,Z=e.prefix,h=e.externalErrorMessage,x=e.required,b=e.addonAfter,y=e.maxLength,j=(0,l.Gc)(),C=j.setValue,R=j.watch,E=j.register,w=j.errors,P=j.formState,O=P.touched,T=P.isSubmitted;(0,i.useEffect)((function(){E({name:t})}),[E,t]);var N=c.Z.errorMessage(t,w,O,T,h);return(0,u.jsx)(a.Z.Item,(0,r.Z)((0,r.Z)({},d),{},{label:n,required:x,validateStatus:N?"error":"success",help:N||s,children:(0,u.jsx)(o.Z,{maxLength:y,id:t,name:t,type:m,value:R(t),onChange:function(n){C(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:f||void 0,placeholder:g||void 0,autoFocus:p||!1,autoComplete:v||void 0,prefix:Z||void 0,addonAfter:b||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},n.Z=s},82509:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.button(r||(r=(0,a.Z)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));n.Z=o},69138:function(e,n,t){t.d(n,{T:function(){return l}});var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n\n  .filter-preview {\n    color: var(--secondary-color) !important;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .filter-buttons {\n    text-align: right;\n\n    .ant-btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"]))),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18}}};n.Z=o},75352:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=o},27216:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  .ant-table th {\n    background: var(--primary-color);\n\n    color: white;\n  }\n  .ant-table tr:nth-child(even) {\n    background: #d9d9d9;\n  }\n  .ant-table td {\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n    text-overflow: ellipsis;\n    \n    \n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));n.Z=o},10419:function(e,n,t){var r,a=t(30168),o=t(44781).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=o},40765:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=t(73448),i=function(e,n){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};i.displayName="SearchOutlined";var c=a.forwardRef(i)},12196:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},l=t(73448),i=function(e,n){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:o}))};i.displayName="UndoOutlined";var c=a.forwardRef(i)},28709:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(87462),a=t(4942),o=t(93433),l=t(47313),i=t(46123),c=t.n(i),u=t(14903),s=t(67669),d=t.n(s),f=t(37142),m=t(91964),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},p=function(e){var n,t,a=e.prefixCls,o=e.separator,i=void 0===o?"/":o,c=e.children,u=e.overlay,s=e.dropdownProps,p=g(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,l.useContext(m.E_).getPrefixCls)("breadcrumb",a);return n="href"in p?l.createElement("a",(0,r.Z)({className:"".concat(v,"-link")},p),c):l.createElement("span",(0,r.Z)({className:"".concat(v,"-link")},p),c),t=n,n=u?l.createElement(f.Z,(0,r.Z)({overlay:u,placement:"bottomCenter"},s),l.createElement("span",{className:"".concat(v,"-overlay-link")},t,l.createElement(d(),null))):t,c?l.createElement("span",null,n,i&&""!==i&&l.createElement("span",{className:"".concat(v,"-separator")},i)):null};p.__ANT_BREADCRUMB_ITEM=!0;var v=p,Z=function(e){var n=e.children,t=(0,l.useContext(m.E_).getPrefixCls)("breadcrumb");return l.createElement("span",{className:"".concat(t,"-separator")},n||"/")};Z.__ANT_BREADCRUMB_SEPARATOR=!0;var h=Z,x=t(9368),b=t(39178),y=t(48138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function C(e,n,t,r){var a=t.indexOf(e)===t.length-1,o=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?l.createElement("span",null,o):l.createElement("a",{href:"#/".concat(r.join("/"))},o)}var R=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},E=function(e){var n,t=e.prefixCls,i=e.separator,s=void 0===i?"/":i,d=e.style,f=e.className,g=e.routes,p=e.children,Z=e.itemRender,h=void 0===Z?C:Z,E=e.params,w=void 0===E?{}:E,P=j(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),O=l.useContext(m.E_),T=O.getPrefixCls,N=O.direction,k=T("breadcrumb",t);if(g&&g.length>0){var A=[];n=g.map((function(e){var n,t=R(e.path,w);return t&&A.push(t),e.children&&e.children.length&&(n=l.createElement(x.Z,null,e.children.map((function(e){return l.createElement(x.Z.Item,{key:e.path||e.breadcrumbName},h(e,w,g,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=(0,o.Z)(e),a=R(n,t);return a&&r.push(a),r}(A,e.path,w)))})))),l.createElement(v,{overlay:n,separator:s,key:t||e.breadcrumbName},h(e,w,g,A))}))}else p&&(n=(0,u.Z)(p).map((function(e,n){return e?((0,b.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,y.Tm)(e,{separator:s,key:n})):e})));var S=c()(k,(0,a.Z)({},"".concat(k,"-rtl"),"rtl"===N),f);return l.createElement("div",(0,r.Z)({className:S,style:d},P),n)};E.Item=v,E.Separator=h;var w=E},59624:function(e,n,t){var r=t(26297);n.Z=r.Z},68197:function(e,n,t){var r=t(84268);n.Z=r.Z},66204:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(4942),a=t(87462),o=t(29439),l=t(47313),i=t(46123),c=t.n(i),u=t(62710),s=t(73571),d=t.n(s),f=t(91964),m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},g=function(e){var n,t=e.prefixCls,o=e.className,i=e.checked,u=e.onChange,s=e.onClick,d=m(e,["prefixCls","className","checked","onChange","onClick"]),g=(0,l.useContext(f.E_).getPrefixCls)("tag",t),p=c()(g,(n={},(0,r.Z)(n,"".concat(g,"-checkable"),!0),(0,r.Z)(n,"".concat(g,"-checkable-checked"),i),n),o);return l.createElement("span",(0,a.Z)({},d,{className:p,onClick:function(e){u&&u(!i),s&&s(e)}}))},p=t(20238),v=t(46479),Z=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},h=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(p.E.join("|"),")$")),b=function(e,n){var t,i=e.prefixCls,s=e.className,m=e.style,g=e.children,p=e.icon,b=e.color,y=e.onClose,j=e.closeIcon,C=e.closable,R=void 0!==C&&C,E=Z(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=l.useContext(f.E_),P=w.getPrefixCls,O=w.direction,T=l.useState(!0),N=(0,o.Z)(T,2),k=N[0],A=N[1];l.useEffect((function(){"visible"in E&&A(E.visible)}),[E.visible]);var S=function(){return!!b&&(h.test(b)||x.test(b))},I=(0,a.Z)({backgroundColor:b&&!S()?b:void 0},m),M=S(),Y=P("tag",i),_=c()(Y,(t={},(0,r.Z)(t,"".concat(Y,"-").concat(b),M),(0,r.Z)(t,"".concat(Y,"-has-color"),b&&!M),(0,r.Z)(t,"".concat(Y,"-hidden"),!k),(0,r.Z)(t,"".concat(Y,"-rtl"),"rtl"===O),t),s),D=function(e){e.stopPropagation(),y&&y(e),e.defaultPrevented||"visible"in E||A(!1)},U="onClick"in E||g&&"a"===g.type,B=(0,u.default)(E,["visible"]),F=p||null,K=F?l.createElement(l.Fragment,null,F,l.createElement("span",null,g)):g,L=l.createElement("span",(0,a.Z)({},B,{ref:n,className:_,style:I}),K,R?j?l.createElement("span",{className:"".concat(Y,"-close-icon"),onClick:D},j):l.createElement(d(),{className:"".concat(Y,"-close-icon"),onClick:D}):null);return U?l.createElement(v.Z,null,L):L},y=l.forwardRef(b);y.displayName="Tag",y.CheckableTag=g;var j=y}}]);