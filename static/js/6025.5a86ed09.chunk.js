"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6025],{57318:function(e,n,i){var a={selectLoading:(0,i(76747).P1)([function(e){return e.migration.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=a},26025:function(e,n,i){i.r(n),i.d(n,{default:function(){return te}});var a=i(47313),t=i(10499),r=i(1413),s=i(29439),l=i(40765),o=i(12196),g=i(68197),d=i(59624),c=i(59491),u=i(43270),m=i(45788),f=i(5615),Z=i(46656),x=i(69138),j=i(6473),h=i(47590),b=i(67357),v=i(13586),R=i(40846),y=i(35432),p=i(56148),M=i(53912),T=i(5544),C=i(89409),E=i(25803),w=i(89146),D=i(91859),S=i(46417),F=j.Ry().shape({dateRange:h.Z.dateRange((0,t.ag)("entities.migration.fields.dateRange")),gouvernorats:h.Z.relationToOne((0,t.ag)("entities.migration.fields.gouvernorats")),nbreMigrationsRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrationsRange")),delegation:h.Z.string((0,t.ag)("entities.migration.fields.delegation")),lieuDepart:h.Z.string((0,t.ag)("entities.migration.fields.lieuDepart")),nbreMigrantsTunisiensRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrantsTunisiensRange")),nbreMigrantsEtrangersRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrantsEtrangersRange")),nbreMigrantsMalesRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrantsMalesRange")),nbreMigrantsFemellesRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrantsFemellesRange")),nbreMigrantsEnfantsRange:h.Z.integerRange((0,t.ag)("entities.migration.fields.nbreMigrantsEnfantsRange")),passage:h.Z.enumerator((0,t.ag)("entities.migration.fields.passage")),moyen:h.Z.string((0,t.ag)("entities.migration.fields.moyen")),objConfisque:h.Z.string((0,t.ag)("entities.migration.fields.objConfisque")),lien:h.Z.relationToOne((0,t.ag)("entities.migration.fields.lien"))}),I={dateRange:[],gouvernorats:null,nbreMigrationsRange:[],delegation:null,lieuDepart:null,nbreMigrantsTunisiensRange:[],nbreMigrantsEtrangersRange:[],nbreMigrantsMalesRange:[],nbreMigrantsFemellesRange:[],nbreMigrantsEnfantsRange:[],passage:null,moyen:null,objConfisque:null,lien:null},P={dateRange:{label:(0,t.ag)("entities.migration.fields.dateRange"),render:R.Z.dateRange()},gouvernorats:{label:(0,t.ag)("entities.migration.fields.gouvernorats"),render:R.Z.relationToOne()},nbreMigrationsRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrationsRange"),render:R.Z.range()},delegation:{label:(0,t.ag)("entities.migration.fields.delegation"),render:R.Z.generic()},lieuDepart:{label:(0,t.ag)("entities.migration.fields.lieuDepart"),render:R.Z.generic()},nbreMigrantsTunisiensRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrantsTunisiensRange"),render:R.Z.range()},nbreMigrantsEtrangersRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrantsEtrangersRange"),render:R.Z.range()},nbreMigrantsMalesRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrantsMalesRange"),render:R.Z.range()},nbreMigrantsFemellesRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrantsFemellesRange"),render:R.Z.range()},nbreMigrantsEnfantsRange:{label:(0,t.ag)("entities.migration.fields.nbreMigrantsEnfantsRange"),render:R.Z.range()},passage:{label:(0,t.ag)("entities.migration.fields.passage"),render:R.Z.enumerator("entities.migration.enumerators.passage")},moyen:{label:(0,t.ag)("entities.migration.fields.moyen"),render:R.Z.generic()},objConfisque:{label:(0,t.ag)("entities.migration.fields.objConfisque"),render:R.Z.generic()},lien:{label:(0,t.ag)("entities.migration.fields.lien"),render:R.Z.relationToOne()}},q=function(e){var n=(0,m.I0)(),i=(0,m.v9)(Z.Z.selectRawFilter),j=(0,a.useState)(!1),h=(0,s.Z)(j,2),R=h[0],q=h[1],k=(0,a.useState)((function(){return(0,r.Z)((0,r.Z)({},I),i)})),N=(0,s.Z)(k,1)[0],A=(0,u.cI)({resolver:(0,b.X)(F),defaultValues:N,mode:"all"});(0,a.useEffect)((function(){n(f.Z.doFetch(F.cast(N),i))}),[]);var L=function(e){var i=A.getValues();n(f.Z.doFetch(e,i)),q(!1)},V=e.loading;return(0,S.jsx)(x.Z,{children:(0,S.jsx)(y.Z,{activeKey:R?"filter":void 0,expandIconPosition:"right",ghost:!0,onChange:function(e){q(Boolean(e.length))},children:(0,S.jsx)(y.Z.Panel,{header:(0,S.jsx)(v.Z,{renders:P,values:i,expanded:R,onRemove:function(e){return A.setValue(e,I[e]),A.handleSubmit(L)()}}),children:(0,S.jsx)(u.RV,(0,r.Z)((0,r.Z)({},A),{},{children:(0,S.jsxs)("form",{onSubmit:A.handleSubmit(L),children:[(0,S.jsxs)(g.Z,{gutter:24,children:[(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(E.Z,{name:"dateRange",label:(0,t.ag)("entities.migration.fields.dateRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(D.Z,{name:"gouvernorats",label:(0,t.ag)("entities.migration.fields.gouvernorats"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrationsRange",label:(0,t.ag)("entities.migration.fields.nbreMigrationsRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(p.Z,{name:"delegation",label:(0,t.ag)("entities.migration.fields.delegation"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(p.Z,{name:"lieuDepart",label:(0,t.ag)("entities.migration.fields.lieuDepart"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrantsTunisiensRange",label:(0,t.ag)("entities.migration.fields.nbreMigrantsTunisiensRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrantsEtrangersRange",label:(0,t.ag)("entities.migration.fields.nbreMigrantsEtrangersRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrantsMalesRange",label:(0,t.ag)("entities.migration.fields.nbreMigrantsMalesRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrantsFemellesRange",label:(0,t.ag)("entities.migration.fields.nbreMigrantsFemellesRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(M.Z,{name:"nbreMigrantsEnfantsRange",label:(0,t.ag)("entities.migration.fields.nbreMigrantsEnfantsRange"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(T.Z,{name:"passage",label:(0,t.ag)("entities.migration.fields.passage"),options:C.Z.passage.map((function(e){return{value:e,label:(0,t.ag)("entities.migration.enumerators.passage.".concat(e))}})),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(p.Z,{name:"moyen",label:(0,t.ag)("entities.migration.fields.moyen"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(p.Z,{name:"objConfisque",label:(0,t.ag)("entities.migration.fields.objConfisque"),layout:x.T})}),(0,S.jsx)(d.Z,{xs:24,md:24,lg:12,children:(0,S.jsx)(w.Z,{name:"lien",label:(0,t.ag)("entities.migration.fields.lien"),layout:x.T})})]}),(0,S.jsx)(g.Z,{children:(0,S.jsxs)(d.Z,{className:"filter-buttons",span:24,children:[(0,S.jsx)(c.Z,{loading:V,icon:(0,S.jsx)(l.Z,{rev:void 0}),type:"primary",htmlType:"submit",children:(0,t.ag)("common.search")}),(0,S.jsx)(c.Z,{loading:V,onClick:function(){Object.keys(I).forEach((function(e){A.setValue(e,I[e])})),n(f.Z.doReset()),q(!1)},icon:(0,S.jsx)(o.Z,{rev:void 0}),children:(0,t.ag)("common.reset")})]})})]})}))},"filter")})})},k=i(96995),N=i(4927),A=i(72641),L=i(74469),V=i(57318),U=i(69175),Y=i(28303),B=i(27216),H=i(82509),K=i(33738),O=i(12271),_=function(e){var n=(0,m.v9)(O.Z.selectPermissionToRead),i=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return i().length?(0,S.jsx)(S.Fragment,{children:i().map((function(e){return i=e,n?(0,S.jsx)("div",{children:(0,S.jsx)(Y.rU,{to:"/source/".concat(i.id),children:i.mediaTitle})},i.id):(0,S.jsx)("div",{children:i.mediaTitle},i.id);var i}))}):null},G=i(72512),X=function(e){var n=(0,m.v9)(G.Z.selectPermissionToRead),i=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return i().length?(0,S.jsx)(S.Fragment,{children:i().map((function(e){return i=e,n?(0,S.jsx)("div",{children:(0,S.jsx)(Y.rU,{to:"/noyade/".concat(i.id),children:i.lieuNoyade})},i.id):(0,S.jsx)("div",{children:i.lieuNoyade},i.id);var i}))}):null},z=function(e){var n=(0,m.I0)(),i=(0,m.v9)(Z.Z.selectLoading),a=(0,m.v9)(V.Z.selectLoading),r=i||a,s=(0,m.v9)(Z.Z.selectRows),l=(0,m.v9)(Z.Z.selectPagination),o=(0,m.v9)(Z.Z.selectSelectedKeys),g=(0,m.v9)(U.Z.selectPermissionToEdit),d=(0,m.v9)(U.Z.selectPermissionToDestroy),c=[{title:(0,t.ag)("entities.migration.fields.date"),sorter:!0,dataIndex:"date"},{title:(0,t.ag)("entities.migration.fields.gouvernorats"),sorter:!1,dataIndex:"gouvernorats",render:function(e){return(0,S.jsx)(K.Z,{value:e})}},{title:(0,t.ag)("entities.migration.fields.lieuDepart"),sorter:!0,dataIndex:"lieuDepart"},{title:(0,t.ag)("entities.migration.fields.passage"),sorter:!0,dataIndex:"passage",render:function(e){return e?(0,t.ag)("entities.migration.enumerators.passage.".concat(e)):null}},{title:(0,t.ag)("entities.migration.fields.moyen"),sorter:!0,dataIndex:"moyen"},{title:(0,t.ag)("entities.migration.fields.objConfisque"),sorter:!0,dataIndex:"objConfisque"},{title:(0,t.ag)("entities.migration.fields.lien"),sorter:!1,dataIndex:"lien",render:function(e){return(0,S.jsx)(_,{value:e})}},{title:(0,t.ag)("entities.migration.fields.noyades"),sorter:!1,dataIndex:"noyades",render:function(e){return(0,S.jsx)(X,{value:e})}},{title:"",dataIndex:"",width:"160px",render:function(e,i){return(0,S.jsxs)("div",{className:"table-actions",children:[(0,S.jsx)(Y.rU,{to:"/migration/".concat(i.id),children:(0,S.jsx)(k.Z,{title:(0,t.ag)("common.view"),children:(0,S.jsx)("i",{className:"fa-regular fa-eye table-actions-icon"})})}),g&&(0,S.jsx)(Y.rU,{to:"/migration/".concat(i.id,"/edit"),children:(0,S.jsx)(k.Z,{title:(0,t.ag)("common.edit"),children:(0,S.jsx)("i",{className:"fa-regular fa-pen-to-square table-actions-icon"})})}),d&&(0,S.jsx)(N.Z,{title:(0,t.ag)("common.areYouSure"),onConfirm:function(){return e=i.id,void n(L.Z.doDestroy(e));var e},okText:(0,t.ag)("common.yes"),cancelText:(0,t.ag)("common.no"),children:(0,S.jsx)(H.Z,{children:(0,S.jsx)(k.Z,{title:(0,t.ag)("common.destroy"),children:(0,S.jsx)("i",{className:"fa-regular fa-trash-can table-actions-icon-destroy"})})})})]})}}];return(0,S.jsx)(B.Z,{children:(0,S.jsx)(A.Z,{rowKey:"id",loading:r,columns:c,dataSource:s,pagination:l,onChange:function(e,i,a){n(f.Z.doChangePaginationAndSort(e,a))},rowSelection:{selectedRowKeys:o,onChange:function(e){n(f.Z.doChangeSelected(e))}},scroll:{x:!0}})})},J=i(10419),Q=i(23516),W=i(24924),$=i(17551),ee=function(e){var n=(0,m.I0)(),i=(0,m.v9)(Z.Z.selectSelectedKeys),a=(0,m.v9)(Z.Z.selectLoading),r=(0,m.v9)(V.Z.selectLoading),s=(0,m.v9)(Z.Z.selectExportLoading),l=(0,m.v9)(Z.Z.selectHasRows),o=(0,m.v9)(Q.Z.selectPermissionToRead),g=(0,m.v9)(U.Z.selectPermissionToDestroy),d=(0,m.v9)(U.Z.selectPermissionToCreate),u=function(){n(f.Z.doExport())};return(0,S.jsxs)(J.Z,{children:[d&&(0,S.jsx)(Y.rU,{to:"/migration/new",children:(0,S.jsx)(k.Z,{title:(0,t.ag)("common.new"),children:(0,S.jsx)(c.Z,{type:"primary",children:(0,S.jsx)("i",{className:"fa-regular fa-square-plus"})})})}),function(){if(!g)return null;var e=!i.length||a,s=(0,S.jsx)(c.Z,{disabled:e,loading:r,type:"primary",children:(0,S.jsx)("i",{className:"fa-regular fa-trash-can"})}),l=(0,S.jsx)(N.Z,{title:(0,t.ag)("common.areYouSure"),onConfirm:function(){n(L.Z.doDestroyAll(i))},okText:(0,t.ag)("common.yes"),cancelText:(0,t.ag)("common.no"),children:s});return e?(0,S.jsx)(k.Z,{title:(0,t.ag)("common.mustSelectARow"),children:s}):l}(),o&&(0,S.jsx)(Y.rU,{to:"/audit-logs?entityNames=migration",children:(0,S.jsx)(k.Z,{title:(0,t.ag)("auditLog.menu"),children:(0,S.jsx)(c.Z,{icon:(0,S.jsx)($.Z,{rev:void 0})})})}),function(){var e=!l||a,n=(0,S.jsx)(c.Z,{disabled:e,icon:(0,S.jsx)(W.Z,{rev:void 0}),onClick:u,loading:s,children:(0,t.ag)("common.export")});return e?(0,S.jsx)(k.Z,{title:(0,t.ag)("common.noDataToExport"),children:n}):n}()]})},ne=i(27829),ie=i(53852),ae=i(75352),te=function(e){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ie.Z,{items:[[(0,t.ag)("dashboard.menu"),"/"],[(0,t.ag)("entities.migration.menu")]]}),(0,S.jsxs)(ne.Z,{children:[(0,S.jsxs)(g.Z,{children:[(0,S.jsx)(d.Z,{span:16,children:(0,S.jsx)(ae.Z,{children:(0,t.ag)("entities.migration.list.title")})}),(0,S.jsx)(d.Z,{span:8,style:{textAlign:"end"},children:(0,S.jsx)(ee,{})})]}),(0,S.jsx)(q,{}),(0,S.jsx)(z,{})]})]})}},25803:function(e,n,i){var a=i(1413),t=i(59420),r=i(27083),s=i(47313),l=i(49384),o=i(43270),g=i(46417),d=function(e){var n=e.label,i=e.name,d=e.hint,c=e.layout,u=e.autoFocus,m=e.showTime,f=e.required,Z=e.externalErrorMessage,x=(0,o.Gc)(),j=x.register,h=x.errors,b=x.formState,v=b.touched,R=b.isSubmitted,y=x.setValue,p=x.watch;(0,s.useEffect)((function(){j({name:i})}),[j,i]);var M=l.Z.errorMessage(i,h,v,R,Z);return(0,g.jsx)(t.Z.Item,(0,a.Z)((0,a.Z)({},c),{},{label:n,validateStatus:M?"error":"success",help:M||d,required:f,children:(0,g.jsx)(r.Z.RangePicker,{name:i,onChange:function(n){y(i,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:p(i),autoFocus:u||!1,style:{width:"100%"},showTime:m?{format:"HH:mm"}:void 0,format:m?"YYYY-MM-DD HH:mm":void 0})}))};d.defaultProps={layout:null,showTime:!1},n.Z=d}}]);