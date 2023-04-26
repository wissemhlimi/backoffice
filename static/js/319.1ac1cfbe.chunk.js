(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[319],{1062:function(e,t,i){"use strict";var c=i(420);function r(){var e=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var n=i(421).a.div(r());t.a=n},1077:function(e,t,i){"use strict";var c=i(17),r=i(1178);i(6);t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(r.a,{})})}},1357:function(e,t,i){"use strict";var c=i(4),r=i(29),n=i(50),a=i(142),s=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new n.a(e,t).match(a.a.values.mouvementRead)})),o=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new n.a(e,t).match(a.a.values.mouvementEdit)})),l=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new n.a(e,t).match(a.a.values.mouvementCreate)})),j=Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new n.a(e,t).match(a.a.values.mouvementImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new n.a(e,t).match(a.a.values.mouvementDestroy)})),selectPermissionToImport:j};t.a=d},1875:function(e,t,i){"use strict";i.r(t);var c=i(433),r=i(17),n=i(1248),a=i(1871),s=i(6),o=i(39),l=i(2),j=i(46),d=i(1357),u=i(1062),b=i(1077);t.default=function(e){var t=n.a.TabPane,i=function(e){},m=(Object(o.e)(d.a.selectPermissionToRead),Object(s.useState)(!1)),h=Object(c.a)(m,2),O=h[0],p=h[1],w=Object(s.useState)(!0),f=Object(c.a)(w,2),g=f[0],x=f[1];return Object(s.useEffect)((function(){j.a.fetchMe().then((function(e){(e.tenants[0].roles.includes("admin_OST")||e.tenants[0].roles.includes("createur_OST"))&&p(!0),x(!1)}))}),[]),Object(r.jsx)(r.Fragment,{children:g?Object(r.jsx)(b.a,{}):Object(r.jsx)(r.Fragment,{children:O?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(n.a,{defaultActiveKey:"1",onChange:i,children:[Object(r.jsx)(t,{tab:Object(l.c)("Actions-Suicides"),children:Object(r.jsx)("iframe",{title:"Actions&Suicides",width:"100%",height:"600",allowFullScreen:!0,src:"https://app.powerbi.com/view?r=eyJrIjoiYTI3YzMzY2MtNDljZi00NjA3LTkyMDgtMmZhZGI4ZjEzMzIyIiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9"})},"1"),Object(r.jsx)(t,{tab:Object(l.c)("Action-Violences"),children:Object(r.jsx)("iframe",{title:"Action&violences",width:"100%",height:"600",allowFullScreen:!0,src:"https://app.powerbi.com/view?r=eyJrIjoiNjlhNWQzMDUtNjJiZi00ZWFlLTlkYmEtMGEyODMyNDkwYzc3IiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9"})},"2"),Object(r.jsx)(t,{tab:Object(l.c)("Violence-Gouvernorats"),children:Object(r.jsx)("iframe",{title:"Violence&Gouvernorats",width:"100%",height:"600",allowFullScreen:!0,src:"https://app.powerbi.com/view?r=eyJrIjoiMzI1MTFjMWYtYmViYS00OTgwLTk3MTMtM2VlNDQxNWU5ZDg4IiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9"})},"3"),Object(r.jsx)(t,{tab:Object(l.c)("Suicide-Gouvernorats"),children:Object(r.jsx)("iframe",{title:"Suicide&Gouvernorats",width:"100%",height:"600",allowFullScreen:!0,src:"https://app.powerbi.com/view?r=eyJrIjoiMDdiYzI0YmEtZDM4Ni00NmMyLWEwNDYtN2QyZWRlYTkzZmM0IiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9"})},"4"),Object(r.jsx)(t,{tab:Object(l.c)("Action-Mouvement"),children:Object(r.jsx)("iframe",{title:"Action&Mouvement",width:"100%",height:"600",allowFullScreen:!0,src:"https://app.powerbi.com/view?r=eyJrIjoiMGZmZTg4NGYtZTFhNS00MDM3LTg0MjEtY2NmZmNhOWU2YTg2IiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9"})},"5")]})}):Object(r.jsxs)(n.a,{defaultActiveKey:"2",onChange:i,children:[Object(r.jsx)(t,{tab:"Google Analytics Behaviors Overview",children:Object(r.jsx)(u.a,{children:Object(r.jsx)(a.a,{bodyStyle:{padding:4},children:Object(r.jsx)("iframe",{width:"100%",height:"700",src:"https://datastudio.google.com/embed/reporting/aaaef539-cac0-441f-b2bf-ece0ddf7de83/page/4VDGB",frameBorder:"0",style:{border:0},allowFullScreen:!0})})})},"2"),Object(r.jsx)(t,{tab:"Google Analytics Acquisition Overview",children:Object(r.jsx)(u.a,{children:Object(r.jsx)(a.a,{bodyStyle:{padding:4},children:Object(r.jsx)("iframe",{width:"100%",height:"700",src:"https://datastudio.google.com/embed/reporting/06c64a08-5fca-472e-b12d-d2ba105a917a/page/nXDGB",frameBorder:"0",style:{border:0},allowFullScreen:!0})})})},"3"),Object(r.jsx)(t,{tab:"Google Analytics Audience Overview",children:Object(r.jsx)(u.a,{children:Object(r.jsx)(a.a,{bodyStyle:{padding:4},children:Object(r.jsx)("iframe",{width:"100%",height:"700",src:"https://datastudio.google.com/embed/reporting/d108be90-2150-47e3-9883-3dc053dfa24e/page/tWDGB",frameBorder:"0",style:{border:0},allowFullScreen:!0})})})},"4")]})})})}}}]);