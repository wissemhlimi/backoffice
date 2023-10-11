"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6772],{26772:function(n,e,t){t.r(e);t(47313);var r=t(10499),o=t(97974),i=t(12807),a=t(29478),s=t(27829),c=t(53852),l=t(59527),d=t(75352),u=t(46417);e.default=function(n){var e=(0,l.Z)(a.Z,o.Z,i.Z,(0,r.ag)("entities.acteurAction.importer.hint"));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{items:[[(0,r.ag)("dashboard.menu"),"/"],[(0,r.ag)("entities.acteurAction.menu"),"/acteur-action"],[(0,r.ag)("entities.acteurAction.importer.title")]]}),(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(d.Z,{children:(0,r.ag)("entities.acteurAction.importer.title")}),(0,u.jsx)(e,{})]})]})}},27829:function(n,e,t){var r,o=t(30168),i=t(44781).ZP.div(r||(r=(0,o.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));e.Z=i},53852:function(n,e,t){var r=t(28709),o=(t(47313),t(28303)),i=t(46417);e.Z=function(n){var e=function(n){return n.length>1};return(0,i.jsx)(r.Z,{children:n.items.map((function(n){return(0,i.jsx)(r.Z.Item,{children:e(n)?(0,i.jsx)(o.rU,{to:n[1],children:n[0]}):n[0]},n[0])}))})}},59527:function(n,e,t){t.d(e,{Z:function(){return D}});t(47313);var r,o,i=t(45788),a=t(1413),s=t(66736),c=t(59420),l=t(91107),d=t(10499),u=t(49106),p=t(68160),m=t(46417),g=t(93433),x=t(72641),f=t(27216),h=t(66204),v=t(46135),Z=t(30168),j=t(44781),w=j.ZP.span(r||(r=(0,Z.Z)(["\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  color: var(--error-color);\n"]))),b=function(n){var e=n.value,t=n.errorMessage;return e===v.Z.PENDING?(0,m.jsx)(h.Z,{style:{cursor:"default"},children:(0,d.ag)("importer.pending")}):e===v.Z.IMPORTED?(0,m.jsx)(h.Z,{color:"green",style:{cursor:"default"},children:(0,d.ag)("importer.imported")}):e===v.Z.ERROR?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{color:"red",children:(0,d.ag)("importer.error")}),(0,m.jsx)(w,{children:t})]}):null},y=t(9916),C=t(67791),k=j.ZP.div(o||(o=(0,Z.Z)(["\n  margin-top: -16px;\n  margin-bottom: 24px;\n"]))),I=function(n){return function(e){var t=(0,i.v9)(n.selectCompleted),r=(0,i.v9)(n.selectImporting),o=(0,i.v9)(n.selectNonPendingRowsCount),a=(0,i.v9)(n.selectRowsCount),s=(0,i.v9)(n.selectPercent),c=(0,i.v9)(n.selectErrorRowsCount);return r||t?(0,m.jsx)(k,{children:function(){if(t&&c===a)return(0,m.jsx)(y.Z,{message:(0,d.ag)("importer.completed.allErrors"),type:"error",showIcon:!0});var n=Boolean(c);return t&&n?(0,m.jsx)(y.Z,{message:(0,d.ag)("importer.completed.someErrors"),type:"warning",showIcon:!0}):t&&!c?(0,m.jsx)(y.Z,{message:(0,d.ag)("importer.completed.success"),type:"success",showIcon:!0}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C.Z,{percent:s,showInfo:!1,status:"active"}),(0,m.jsxs)("p",{children:[(0,d.ag)("importer.importedMessage",o,a)," ",(0,d.ag)("importer.noNavigateAwayMessage")]})]})}()}):null}},P=t(59491),R=t(96995),_=t(4927),T=t(24924),E=t(49959),F=t(92350),M=t(97501),S=t(96207),N=t(47515),A=t(10419),D=function(n,e,t,r){var o=function(n,e,t,r){return function(t){var o=(0,i.I0)(),a=(0,i.v9)(n.selectHasRows),s=(0,i.v9)(n.selectImporting),c=(0,i.v9)(n.selectCompleted),l=function(){o(e.doReset())},u=!a,p=a&&!s&&!c,g=a&&!s&&!c,x=Boolean(c),f=a&&s;return(0,m.jsxs)(A.Z,{children:[u&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(P.Z,{onClick:function(){o(e.doDownloadTemplate())},icon:(0,m.jsx)(T.Z,{rev:void 0}),children:(0,d.ag)("importer.form.downloadTemplate")}),r&&(0,m.jsx)(R.Z,{title:r,children:(0,m.jsx)(E.Z,{style:{fontSize:"18px"},rev:void 0})})]}),p&&(0,m.jsx)(P.Z,{onClick:function(){o(e.doImport())},icon:(0,m.jsx)(F.Z,{rev:void 0}),type:"primary",children:(0,d.ag)("common.import")}),f&&(0,m.jsx)(P.Z,{onClick:function(){o(e.doPause())},icon:(0,m.jsx)(M.Z,{rev:void 0}),children:(0,d.ag)("common.pause")}),x&&(0,m.jsx)(_.Z,{title:(0,d.ag)("common.areYouSure"),onConfirm:l,okText:(0,d.ag)("common.yes"),cancelText:(0,d.ag)("common.no"),children:(0,m.jsx)(P.Z,{icon:(0,m.jsx)(S.Z,{rev:void 0}),children:(0,d.ag)("common.new")})}),g&&(0,m.jsx)(_.Z,{title:(0,d.ag)("importer.list.discardConfirm"),onConfirm:l,okText:(0,d.ag)("common.yes"),cancelText:(0,d.ag)("common.no"),children:(0,m.jsx)(P.Z,{icon:(0,m.jsx)(N.Z,{rev:void 0}),children:(0,d.ag)("common.discard")})})]})}}(n,e,0,r),h=I(n),v=function(n,e,t){return function(e){var r=(0,i.v9)(n.selectRows),o=(0,i.v9)(n.selectPendingRowsCount),a=(0,i.v9)(n.selectErrorRowsCount),s=(0,i.v9)(n.selectImportedRowsCount),c=[{title:(0,d.ag)("importer.line"),dataIndex:"_line",key:"_line",width:100,sorter:function(n,e){return n._line-e._line}}].concat((0,g.Z)(t.map((function(n){return{title:n.label,dataIndex:n.name,key:n.name,sorter:function(e,t){return(String(e[n.name])||"").localeCompare(String(t[n.name])||"")},render:function(e){return(0,m.jsx)("pre",{style:{fontFamily:"inherit"},children:n.render?n.render(e):null!=e?String(e):null})}}}))),[{title:(0,d.ag)("importer.status"),dataIndex:"_status",key:"_status",width:"200px",sorter:function(n,e){return(n._status||"").localeCompare(e._status||"")},render:function(n,e){return(0,m.jsx)(b,{value:n,errorMessage:e._errorMessage})}}]);return(0,m.jsx)(f.Z,{children:(0,m.jsx)(x.Z,{rowKey:"_line",columns:c,dataSource:r,scroll:{x:!0},pagination:{showTotal:function(){return(0,d.ag)("importer.total",s,o,a)}}})})}}(n,0,t),Z=function(n,e){return function(t){var r=(0,i.I0)(),o=(0,i.v9)(n.selectErrorMessage);return(0,m.jsx)(p.ZP,{style:{paddingLeft:0},children:(0,m.jsx)(c.Z.Item,(0,a.Z)((0,a.Z)({help:o,validateStatus:o?"error":"success"},p.I4),{},{children:(0,m.jsxs)(l.default,{showUploadList:!1,accept:"".concat(u.eP,", ").concat(u.nH),customRequest:function(n){var t=n.file;r(e.doReadFile(t))},name:"file",children:[(0,m.jsx)("p",{className:"ant-upload-drag-icon",children:(0,m.jsx)(s.Z,{rev:void 0})}),(0,m.jsx)("p",{className:"ant-upload-text",children:(0,d.ag)("importer.form.hint")})]})}))})}}(n,e);return function(e){var t=(0,i.v9)(n.selectHasRows);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{}),(0,m.jsx)(h,{}),t?(0,m.jsx)(v,{}):(0,m.jsx)(Z,{})]})}}},68160:function(n,e,t){t.d(e,{I4:function(){return a},YT:function(){return s}});var r,o=t(30168),i=t(44781).ZP.div(r||(r=(0,o.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),a={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},s={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};e.ZP=i},75352:function(n,e,t){var r,o=t(30168),i=t(44781).ZP.h1(r||(r=(0,o.Z)(["\n  margin-bottom: 36px;\n"])));e.Z=i},27216:function(n,e,t){var r,o=t(30168),i=t(44781).ZP.div(r||(r=(0,o.Z)(["\n  .ant-table th {\n    background: var(--primary-color);\n\n    color: white;\n  }\n  .ant-table tr:nth-child(even) {\n    background: #d9d9d9;\n  }\n  .ant-table td {\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n    text-overflow: ellipsis;\n    \n    \n  }\n\n  .ant-table .table-actions {\n    text-align: right;\n  }\n\n  .ant-table .table-actions a,\n  .ant-table .table-actions button {\n    margin-left: 8px;\n  }\n"])));e.Z=i},10419:function(n,e,t){var r,o=t(30168),i=t(44781).ZP.div(r||(r=(0,o.Z)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));e.Z=i}}]);