"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3082],{91438:function(e,n,r){var t=r(76747),a=r(86495),i=r(26319),s=r(71945),o=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.gouvernoratMigrationRead)})),c=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.gouvernoratMigrationEdit)})),l=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.gouvernoratMigrationCreate)})),u=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.gouvernoratMigrationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.gouvernoratMigrationDestroy)})),selectPermissionToImport:u};n.Z=d},69175:function(e,n,r){var t=r(76747),a=r(86495),i=r(26319),s=r(71945),o=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.migrationRead)})),c=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.migrationEdit)})),l=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.migrationCreate)})),u=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.migrationImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.migrationDestroy)})),selectPermissionToImport:u};n.Z=d},15869:function(e,n,r){var t={selectLoading:(0,r(76747).P1)([function(e){return e.noyade.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=t},72512:function(e,n,r){var t=r(76747),a=r(86495),i=r(26319),s=r(71945),o=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.noyadeRead)})),c=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.noyadeEdit)})),l=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.noyadeCreate)})),u=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.noyadeImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.noyadeDestroy)})),selectPermissionToImport:u};n.Z=d},12271:function(e,n,r){var t=r(76747),a=r(86495),i=r(26319),s=r(71945),o=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.sourceRead)})),c=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.sourceEdit)})),l=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.sourceCreate)})),u=(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.sourceImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,t.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(s.Z.values.sourceDestroy)})),selectPermissionToImport:u};n.Z=d},94534:function(e,n,r){r(47313);var t=r(28303),a=r(45788),i=r(91438),s=r(46417);n.Z=function(e){var n=(0,a.v9)(i.Z.selectPermissionToRead),r=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return r().length?(0,s.jsx)(s.Fragment,{children:r().map((function(e){return r=e,n?(0,s.jsx)("div",{children:(0,s.jsx)(t.rU,{to:"/gouvernorat-migration/".concat(r.id),children:r.nameAR})},r.id):(0,s.jsx)("div",{children:r.nameAR},r.id);var r}))}):null}},27829:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=i},98957:function(e,n,r){r(47313);var t=r(28303),a=r(45788),i=r(69175),s=r(46417);n.Z=function(e){var n=(0,a.v9)(i.Z.selectPermissionToRead),r=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return r().length?(0,s.jsx)(s.Fragment,{children:r().map((function(e){return r=e,n?(0,s.jsx)("div",{children:(0,s.jsx)(t.rU,{to:"/migration/".concat(r.id),children:r.date})},r.id):(0,s.jsx)("div",{children:r.date},r.id);var r}))}):null}},83082:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var t=r(47313),a=r(45788),i=r(63830),s=r(10499),o=r(87479),c=r(76747),l=function(e){return e.noyade.view},u=(0,c.P1)([l],(function(e){return e.record})),d={selectLoading:(0,c.P1)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},m=r(1413),Z=r(61567),f=r(25969),p=r(59420),v=r(94534),g=r(60574),h=r(98957),y=r(46417),x=function(e){var n=e.record;return e.loading||!n?(0,y.jsx)(Z.Z,{}):(0,y.jsxs)(f.Z,{children:[Boolean(n.lieuDebut)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.lieuDebut"),children:(0,y.jsx)(v.Z,{value:n.lieuDebut})})),Boolean(n.lieuNoyade)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.lieuNoyade"),children:n.lieuNoyade})),Boolean(n.nbreMigrantsTunisiens)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbreMigrantsTunisiens"),children:n.nbreMigrantsTunisiens})),Boolean(n.nbreMigrantsEtrangers)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbreMigrantsEtrangers"),children:n.nbreMigrantsEtrangers})),Boolean(n.nbreVictimesTunisiens)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbreVictimesTunisiens"),children:n.nbreVictimesTunisiens})),Boolean(n.nbreVictimesEtrangers)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbreVictimesEtrangers"),children:n.nbreVictimesEtrangers})),Boolean(n.nbrePerdusTunisiens)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbrePerdusTunisiens"),children:n.nbrePerdusTunisiens})),Boolean(n.nbrePerdusEtrangers)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.nbrePerdusEtrangers"),children:n.nbrePerdusEtrangers})),Boolean(n.source)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.source"),children:(0,y.jsx)(g.Z,{value:n.source})})),Boolean(n.migrationCause)&&(0,y.jsx)(p.Z.Item,(0,m.Z)((0,m.Z)({},f.D),{},{label:(0,s.ag)("entities.noyade.fields.migrationCause"),children:(0,y.jsx)(h.Z,{value:n.migrationCause})}))]})},b=r(17551),C=r(96995),P=r(59491),T=r(4927),j=r(28303),E=r(23516),w=r(72512),R=r(35679),I=r(15869),U=r(10419),D=function(e){var n=(0,a.I0)(),r=(0,i.$B)(),t=(0,a.v9)(E.Z.selectPermissionToRead),o=(0,a.v9)(w.Z.selectPermissionToEdit),c=(0,a.v9)(w.Z.selectPermissionToDestroy),l=(0,a.v9)(I.Z.selectLoading),u=r.params.id;return(0,y.jsxs)(U.Z,{children:[o&&(0,y.jsx)(j.rU,{to:"/noyade/".concat(u,"/edit"),children:(0,y.jsx)(C.Z,{title:(0,s.ag)("common.edit"),children:(0,y.jsx)(P.Z,{type:"primary",children:(0,y.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),c&&(0,y.jsx)(T.Z,{title:(0,s.ag)("common.areYouSure"),onConfirm:function(){n(R.Z.doDestroy(u))},okText:(0,s.ag)("common.yes"),cancelText:(0,s.ag)("common.no"),children:(0,y.jsx)(C.Z,{title:(0,s.ag)("common.destroy"),children:(0,y.jsx)(P.Z,{type:"primary",disabled:l,children:(0,y.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),t&&(0,y.jsx)(j.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:(0,y.jsx)(C.Z,{title:(0,s.ag)("auditLog.menu"),children:(0,y.jsx)(P.Z,{icon:(0,y.jsx)(b.Z,{rev:void 0})})})})]})},B=r(27829),O=r(53852),A=r(75352),N=r(68197),_=r(59624),M=function(e){var n=(0,a.I0)(),r=(0,i.$B)(),c=(0,a.v9)(d.selectLoading),l=(0,a.v9)(d.selectRecord);return(0,t.useEffect)((function(){n(o.Z.doFind(r.params.id))}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(O.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.noyade.menu"),"/noyade"],[(0,s.ag)("entities.noyade.view.title")]]}),(0,y.jsxs)(B.Z,{children:[(0,y.jsxs)(N.Z,{children:[(0,y.jsx)(_.Z,{span:16,children:(0,y.jsx)(A.Z,{children:(0,s.ag)("entities.noyade.view.title")})}),(0,y.jsx)(_.Z,{span:8,style:{textAlign:"end"},children:(0,y.jsx)(D,{match:r})})]}),(0,y.jsx)(x,{loading:c,record:l})]})]})}},53852:function(e,n,r){var t=r(28709),a=(r(47313),r(28303)),i=r(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,i.jsx)(t.Z,{children:e.items.map((function(e){return(0,i.jsx)(t.Z.Item,{children:n(e)?(0,i.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},61567:function(e,n,r){var t=r(72652),a=(r(47313),r(46417));n.Z=function(e){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(t.Z,{})})}},75352:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.h1(t||(t=(0,a.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=i},10419:function(e,n,r){var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));n.Z=i},25969:function(e,n,r){r.d(n,{D:function(){return s}});var t,a=r(30168),i=r(44781).ZP.div(t||(t=(0,a.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),s={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=i},60574:function(e,n,r){r(47313);var t=r(28303),a=r(45788),i=r(12271),s=r(46417);n.Z=function(e){var n=(0,a.v9)(i.Z.selectPermissionToRead),r=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return r().length?(0,s.jsx)(s.Fragment,{children:r().map((function(e){return r=e,n?(0,s.jsx)("div",{children:(0,s.jsx)(t.rU,{to:"/source/".concat(r.id),children:r.mediaTitle})},r.id):(0,s.jsx)("div",{children:r.mediaTitle},r.id);var r}))}):null}},28709:function(e,n,r){r.d(n,{Z:function(){return E}});var t=r(87462),a=r(4942),i=r(93433),s=r(47313),o=r(46123),c=r.n(o),l=r(14903),u=r(67669),d=r.n(u),m=r(37142),Z=r(91964),f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r},p=function(e){var n,r,a=e.prefixCls,i=e.separator,o=void 0===i?"/":i,c=e.children,l=e.overlay,u=e.dropdownProps,p=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,s.useContext(Z.E_).getPrefixCls)("breadcrumb",a);return n="href"in p?s.createElement("a",(0,t.Z)({className:"".concat(v,"-link")},p),c):s.createElement("span",(0,t.Z)({className:"".concat(v,"-link")},p),c),r=n,n=l?s.createElement(m.Z,(0,t.Z)({overlay:l,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(v,"-overlay-link")},r,s.createElement(d(),null))):r,c?s.createElement("span",null,n,o&&""!==o&&s.createElement("span",{className:"".concat(v,"-separator")},o)):null};p.__ANT_BREADCRUMB_ITEM=!0;var v=p,g=function(e){var n=e.children,r=(0,s.useContext(Z.E_).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(r,"-separator")},n||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var h=g,y=r(9368),x=r(39178),b=r(48138),C=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};function P(e,n,r,t){var a=r.indexOf(e)===r.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var r=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return n[r]||e}))}(e,n);return a?s.createElement("span",null,i):s.createElement("a",{href:"#/".concat(t.join("/"))},i)}var T=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(r){e=e.replace(":".concat(r),n[r])})),e},j=function(e){var n,r=e.prefixCls,o=e.separator,u=void 0===o?"/":o,d=e.style,m=e.className,f=e.routes,p=e.children,g=e.itemRender,h=void 0===g?P:g,j=e.params,E=void 0===j?{}:j,w=C(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),R=s.useContext(Z.E_),I=R.getPrefixCls,U=R.direction,D=I("breadcrumb",r);if(f&&f.length>0){var B=[];n=f.map((function(e){var n,r=T(e.path,E);return r&&B.push(r),e.children&&e.children.length&&(n=s.createElement(y.Z,null,e.children.map((function(e){return s.createElement(y.Z.Item,{key:e.path||e.breadcrumbName},h(e,E,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,t=(0,i.Z)(e),a=T(n,r);return a&&t.push(a),t}(B,e.path,E)))})))),s.createElement(v,{overlay:n,separator:u,key:r||e.breadcrumbName},h(e,E,f,B))}))}else p&&(n=(0,l.Z)(p).map((function(e,n){return e?((0,x.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,b.Tm)(e,{separator:u,key:n})):e})));var O=c()(D,(0,a.Z)({},"".concat(D,"-rtl"),"rtl"===U),m);return s.createElement("div",(0,t.Z)({className:O,style:d},w),n)};j.Item=v,j.Separator=h;var E=j},59624:function(e,n,r){var t=r(26297);n.Z=t.Z},68197:function(e,n,r){var t=r(84268);n.Z=t.Z}}]);