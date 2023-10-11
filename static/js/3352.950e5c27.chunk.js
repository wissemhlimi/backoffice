"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3352],{24901:function(n,e,t){var r={selectLoading:(0,t(76747).P1)([function(n){return n.glossaire.destroy}],(function(n){return Boolean(n.loading)}))};e.Z=r},40846:function(n,e,t){var r=t(70816),i=t.n(r),l=t(10499),a={enumerator:function(n){return function(e){return e?(0,l.ag)("".concat(n,".").concat(e)):null}},enumeratorMultiple:function(n){return function(e){return e?e.map((function(e){return(0,l.ag)("".concat(n,".").concat(e))})).join(", "):null}},generic:function(){return function(n){return n}},stringArray:function(){return function(n){return(n||[]).join(", ")}},json:function(){return function(n){return n?JSON.stringify(n,null,2):null}},decimal:function(n){return function(e){return o(e,n)}},boolean:function(n,e){return function(t){return null==t?null:Boolean(t)?n||(0,l.ag)("common.yes"):e||(0,l.ag)("common.no")}},relationToOne:function(){return function(n){return n&&n.label||null}},relationToMany:function(){return function(n){return(n||[]).map((function(n){return n.label})).join(", ")}},filesOrImages:function(){return function(n){return(n||[]).map((function(n){return n.downloadUrl})).join(" ")}},date:function(){return function(n){return s(n)}},dateRange:function(){return function(n){if(!n||!n.length)return null;var e=n[0],t=2===n.length&&n[1];return e||t?e&&!t?"> ".concat(s(e)):!e&&t?"< ".concat(s(t)):"".concat(s(e)," - ").concat(s(t)):null}},datetime:function(){return function(n){return u(n)}},datetimeRange:function(){return function(n){if(!n||!n.length)return null;var e=n[0],t=2===n.length&&n[1];return e||t?e&&!t?"> ".concat(u(e)):!e&&t?"< ".concat(u(t)):"".concat(u(e)," - ").concat(u(t)):null}},decimalRange:function(n){return function(e){if(!e||!e.length)return null;var t=e[0],r=2===e.length&&e[1];return null==t&&null==r?null:null!=t&&null==r?"> ".concat(o(t,n)):null==t&&null!=r?"< ".concat(o(r,n)):"".concat(o(t,n)," - ").concat(o(r,n))}},range:function(){return function(n){if(!n||!n.length)return null;var e=n[0],t=2===n.length&&n[1];return null!=e&&""!==e||null!=t&&""!==t?null==e||null!=t&&""!==t?null!=e&&""!==e||null==t?"".concat(e," - ").concat(t):"< ".concat(t):"> ".concat(e):null}}};function o(n,e){return n?e?Number(n).toFixed(e):Number(n):null}function s(n){return n?i()(n).format("YYYY-MM-DD"):null}function u(n){return n?i()(n).format("YYYY-MM-DD HH:mm"):null}e.Z=a},47590:function(n,e,t){var r=t(6473),i=t(10499),l=t(70816),a=t.n(l),o={generic:function(n){return r.nK().label(n)},string:function(n){return r.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n)},stringArray:function(n){return r.IX().compact().ensure().of(r.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n).transform((function(n,e){return e?Array.isArray(e)?e:[e]:e}))},boolean:function(n){return r.Xg().nullable(!0).label(n)},relationToOne:function(n){return r.nK().label(n).transform((function(n,e){return e?e.id:null}))},relationToMany:function(n){return r.nK().label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}))},json:function(n){return r.nK().label(n)},integer:function(n){return r.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n)},integerRange:function(n){return r.nK().label(n)},enumerator:function(n){return r.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0)},email:function(n){return r.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n)},decimal:function(n){return r.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n)},decimalRange:function(n){return r.IX().ensure().compact().of(r.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n)).label(n)},datetime:function(n){return r.nK().nullable(!0).label(n).transform((function(n,e){return e?a()(e,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(n){return r.nK().label(n)},date:function(n){return r.nK().nullable(!0).label(n).test("is-date",(0,i.ag)("validation.mixed.default"),(function(n){return!n||a()(n,"YYYY-MM-DD").isValid()}))},dateRange:function(n){return r.IX().ensure().compact().of(r.nK().nullable(!0).label(n).test("is-date",(0,i.ag)("validation.mixed.default"),(function(n){return!n||a()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?a()(n).format("YYYY-MM-DD"):null}))).label(n)}};e.Z=o},85140:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(68197),i=t(59624),l=t(47313),a=t(10499),o=t(1413),s=t(29439),u=t(40765),c=t(12196),d=t(59491),f=t(43270),g=t(45788),m=t(20663),x=t(64327),v=t(69138),h=t(6473),Z=t(47590),b=t(67357),j=t(13586),p=t(40846),R=t(35432),y=t(56148),A=t(95091),T=t(45684),N=t(46417),Y=h.Ry().shape({thematique:Z.Z.relationToOne((0,a.ag)("entities.glossaire.fields.thematique")),categorie:Z.Z.relationToOne((0,a.ag)("entities.glossaire.fields.categorie")),abreviationFR:Z.Z.string((0,a.ag)("entities.glossaire.fields.abreviationFR")),abreviationAR:Z.Z.string((0,a.ag)("entities.glossaire.fields.abreviationAR")),abreviationEN:Z.Z.string((0,a.ag)("entities.glossaire.fields.abreviationEN"))}),F={thematique:null,categorie:null,abreviationFR:null,abreviationAR:null,abreviationEN:null},w={thematique:{label:(0,a.ag)("entities.glossaire.fields.thematique"),render:p.Z.relationToOne()},categorie:{label:(0,a.ag)("entities.glossaire.fields.categorie"),render:p.Z.relationToOne()},abreviationFR:{label:(0,a.ag)("entities.glossaire.fields.abreviationFR"),render:p.Z.generic()},abreviationAR:{label:(0,a.ag)("entities.glossaire.fields.abreviationAR"),render:p.Z.generic()},abreviationEN:{label:(0,a.ag)("entities.glossaire.fields.abreviationEN"),render:p.Z.generic()}},S=function(n){var e=(0,g.I0)(),t=(0,g.v9)(x.Z.selectRawFilter),h=(0,l.useState)(!1),Z=(0,s.Z)(h,2),p=Z[0],S=Z[1],E=(0,l.useState)((function(){return(0,o.Z)((0,o.Z)({},F),t)})),I=(0,s.Z)(E,1)[0],C=(0,f.cI)({resolver:(0,b.X)(Y),defaultValues:I,mode:"all"});(0,l.useEffect)((function(){e(m.Z.doFetch(Y.cast(I),t))}),[]);var D=function(n){var t=C.getValues();e(m.Z.doFetch(n,t)),S(!1)},M=n.loading;return(0,N.jsx)(v.Z,{children:(0,N.jsx)(R.Z,{activeKey:p?"filter":void 0,expandIconPosition:"right",ghost:!0,onChange:function(n){S(Boolean(n.length))},children:(0,N.jsx)(R.Z.Panel,{header:(0,N.jsx)(j.Z,{renders:w,values:t,expanded:p,onRemove:function(n){return C.setValue(n,F[n]),C.handleSubmit(D)()}}),children:(0,N.jsx)(f.RV,(0,o.Z)((0,o.Z)({},C),{},{children:(0,N.jsxs)("form",{onSubmit:C.handleSubmit(D),children:[(0,N.jsxs)(r.Z,{gutter:24,children:[(0,N.jsx)(i.Z,{xs:24,md:24,lg:12,children:(0,N.jsx)(A.Z,{name:"thematique",label:(0,a.ag)("entities.glossaire.fields.thematique"),layout:v.T})}),(0,N.jsx)(i.Z,{xs:24,md:24,lg:12,children:(0,N.jsx)(T.Z,{name:"categorie",label:(0,a.ag)("entities.glossaire.fields.categorie"),layout:v.T})}),(0,N.jsx)(i.Z,{xs:24,md:24,lg:12,children:(0,N.jsx)(y.Z,{name:"abreviationFR",label:(0,a.ag)("entities.glossaire.fields.abreviationFR"),layout:v.T})}),(0,N.jsx)(i.Z,{xs:24,md:24,lg:12,children:(0,N.jsx)(y.Z,{name:"abreviationAR",label:(0,a.ag)("entities.glossaire.fields.abreviationAR"),layout:v.T})}),(0,N.jsx)(i.Z,{xs:24,md:24,lg:12,children:(0,N.jsx)(y.Z,{name:"abreviationEN",label:(0,a.ag)("entities.glossaire.fields.abreviationEN"),layout:v.T})})]}),(0,N.jsx)(r.Z,{children:(0,N.jsxs)(i.Z,{className:"filter-buttons",span:24,children:[(0,N.jsx)(d.Z,{loading:M,icon:(0,N.jsx)(u.Z,{rev:void 0}),type:"primary",htmlType:"submit",children:(0,a.ag)("common.search")}),(0,N.jsx)(d.Z,{loading:M,onClick:function(){Object.keys(F).forEach((function(n){C.setValue(n,F[n])})),e(m.Z.doReset()),S(!1)},icon:(0,N.jsx)(c.Z,{rev:void 0}),children:(0,a.ag)("common.reset")})]})})]})}))},"filter")})})},E=t(96995),I=t(4927),C=t(72641),D=t(77329),M=t(24901),K=t(62982),P=t(28303),k=t(27216),q=t(82509),O=t(86596),L=t(42835),U=function(n){var e=(0,g.v9)(L.Z.selectPermissionToRead),t=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return t().length?(0,N.jsx)(N.Fragment,{children:t().map((function(n){return t=n,e?(0,N.jsx)("div",{children:(0,N.jsx)(P.rU,{to:"/category-glossaire/".concat(t.id),children:t.titleFR?t.titleFR:t.titleAR?t.titleAR:t.titleEN})},t.id):(0,N.jsxs)("div",{children:[" ",t.titleFR?t.titleFR:t.titleAR?t.titleAR:t.titleEN]},t.id);var t}))}):null},V=function(n){var e=(0,g.I0)(),t=(0,g.v9)(x.Z.selectLoading),r=(0,g.v9)(M.Z.selectLoading),i=t||r,l=(0,g.v9)(x.Z.selectRows),o=(0,g.v9)(x.Z.selectPagination),s=(0,g.v9)(x.Z.selectSelectedKeys),u=(0,g.v9)(K.Z.selectPermissionToEdit),c=(0,g.v9)(K.Z.selectPermissionToDestroy),d=[{title:(0,a.ag)("entities.glossaire.fields.thematique"),sorter:!1,dataIndex:"thematique",render:function(n){return(0,N.jsx)(O.Z,{value:n})}},{title:(0,a.ag)("entities.glossaire.fields.categorie"),sorter:!1,dataIndex:"categorie",render:function(n){return(0,N.jsx)(U,{value:n})}},{title:(0,a.ag)("entities.glossaire.fields.nomFR"),sorter:!0,dataIndex:"nomFR"},{title:(0,a.ag)("entities.glossaire.fields.nomAR"),sorter:!0,dataIndex:"nomAR"},{title:(0,a.ag)("entities.glossaire.fields.nomEN"),sorter:!0,dataIndex:"nomEN"},{title:"",dataIndex:"",width:"160px",render:function(n,t){return(0,N.jsxs)("div",{className:"table-actions",children:[(0,N.jsx)(P.rU,{to:"/glossaire/".concat(t.id),children:(0,N.jsx)(E.Z,{title:(0,a.ag)("common.view"),children:(0,N.jsx)("i",{className:"fa-regular fa-eye table-actions-icon"})})}),u&&(0,N.jsx)(P.rU,{to:"/glossaire/".concat(t.id,"/edit"),children:(0,N.jsx)(E.Z,{title:(0,a.ag)("common.edit"),children:(0,N.jsx)("i",{className:"fa-regular fa-pen-to-square table-actions-icon"})})}),c&&(0,N.jsx)(I.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){return n=t.id,void e(D.Z.doDestroy(n));var n},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no"),children:(0,N.jsx)(q.Z,{children:(0,N.jsx)(E.Z,{title:(0,a.ag)("common.destroy"),children:(0,N.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}];return(0,N.jsx)(k.Z,{children:(0,N.jsx)(C.Z,{rowKey:"id",loading:i,columns:d,dataSource:l,pagination:o,onChange:function(n,t,r){e(m.Z.doChangePaginationAndSort(n,r))},rowSelection:{selectedRowKeys:s,onChange:function(n){e(m.Z.doChangeSelected(n))}},scroll:{x:!0}})})},_=t(10419),H=t(23516),X=t(17551),B=t(7413),J=function(n){var e=(0,g.I0)(),t=(0,g.v9)(x.Z.selectSelectedKeys),r=(0,g.v9)(x.Z.selectLoading),i=(0,g.v9)(M.Z.selectLoading),l=((0,g.v9)(x.Z.selectExportLoading),(0,g.v9)(x.Z.selectHasRows),(0,g.v9)(H.Z.selectPermissionToRead)),o=(0,g.v9)(K.Z.selectPermissionToDestroy),s=(0,g.v9)(K.Z.selectPermissionToCreate);(0,g.v9)(K.Z.selectPermissionToImport);return(0,N.jsxs)(_.Z,{children:[s&&(0,N.jsx)(P.rU,{to:"/glossaire/new",children:(0,N.jsx)(E.Z,{title:(0,a.ag)("common.new"),children:(0,N.jsx)(d.Z,{type:"primary",children:(0,N.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!o)return null;var n=!t.length||r,l=(0,N.jsx)(d.Z,{disabled:n,loading:i,type:"primary",children:(0,N.jsx)("i",{className:"fa-regular fa-trash-can"})}),s=(0,N.jsx)(I.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){e(D.Z.doDestroyAll(t))},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no"),children:l});return n?(0,N.jsx)(E.Z,{title:(0,a.ag)("common.mustSelectARow"),children:l}):(0,N.jsx)(E.Z,{title:(0,a.ag)("common.destroy"),children:s})}(),l&&(0,N.jsx)(P.rU,{to:"/audit-logs?entityNames=glossaire",children:(0,N.jsx)(E.Z,{title:(0,a.ag)("auditLog.menu"),children:(0,N.jsx)(d.Z,{icon:(0,N.jsx)(X.Z,{rev:void 0})})})}),void 0,(0,N.jsx)(B.Z,{placeholder:(0,a.ag)("common.search"),onSearch:function(n){console.log(n),e(m.Z.doSearch(n))},style:{width:"auto"}})]})},z=t(27829),G=t(53852),Q=t(75352),W=function(n){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(G.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("entities.glossaire.menu")]]}),(0,N.jsxs)(z.Z,{children:[(0,N.jsxs)(r.Z,{children:[(0,N.jsx)(i.Z,{span:16,children:(0,N.jsx)(Q.Z,{children:(0,a.ag)("entities.glossaire.list.title")})}),(0,N.jsx)(i.Z,{span:8,style:{textAlign:"end"},children:(0,N.jsx)(J,{})})]}),(0,N.jsx)(S,{}),(0,N.jsx)(V,{})]})]})}},13586:function(n,e,t){t.d(e,{Z:function(){return a}});t(47313);var r=t(10499),i=t(66204),l=t(46417);function a(n){var e=n.values,t=n.renders,a=n.onClick,o=n.onRemove,s=Object.keys(e||{}).map((function(n){return t[n]?{key:n,label:t[n].label,value:t[n].render(e[n])}:{value:null}})).filter((function(n){return n.value||0===n.value||!1===n.value}));return(0,l.jsx)("div",{onClick:a,className:"filter-preview",children:!s.length||n.expanded?(0,r.ag)("common.filters"):(0,l.jsxs)(l.Fragment,{children:[(0,r.ag)("common.filters"),":",(0,l.jsx)("span",{className:"filter-preview-values",children:s.map((function(n){return(0,l.jsx)(i.Z,{closable:Boolean(o),onClose:o?function(){return o(n.key)}:void 0,children:"".concat(n.label,": ").concat(n.value)},n.label)}))})]})})}},69138:function(n,e,t){t.d(e,{T:function(){return a}});var r,i=t(30168),l=t(44781).ZP.div(r||(r=(0,i.Z)(["\n  margin-bottom: 16px;\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n\n  .filter-preview {\n    color: var(--secondary-color) !important;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .filter-buttons {\n    text-align: right;\n\n    .ant-btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"]))),a={labelCol:{xs:{span:24},sm:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18}}};e.Z=l},86596:function(n,e,t){t(47313);var r=t(28303),i=t(45788),l=t(61666),a=t(46417);e.Z=function(n){var e=(0,i.v9)(l.Z.selectPermissionToRead),t=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return t().length?(0,a.jsx)(a.Fragment,{children:t().map((function(n){return t=n,e?(0,a.jsx)("div",{children:(0,a.jsx)(r.rU,{to:"/thematique/".concat(t.id),children:t.titleFR?t.titleFR:t.titleAR?t.titleAR:t.titleEN})},t.id):(0,a.jsxs)("div",{children:[" ",t.titleFR?t.titleFR:t.titleAR?t.titleAR:t.titleEN]},t.id);var t}))}):null}}}]);