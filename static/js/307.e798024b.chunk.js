(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[307],{1061:function(n,t,e){"use strict";var i=e(17),c=e(1164);e(6);t.a=function(n){return Object(i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(i.jsx)(c.a,{})})}},1350:function(n,t,e){"use strict";var i=e(410);function c(){var n=Object(i.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return c=function(){return n},n}var r=e(411).a.div(c());t.a=r},1351:function(n,t,e){"use strict";var i=e(410);function c(){var n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return c=function(){return n},n}var r=e(411).a.div(c());t.a=r},1352:function(n,t,e){"use strict";var i=e(410);function c(){var n=Object(i.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return c=function(){return n},n}var r=e(411).a.div(c());t.a=r},1914:function(n,t,e){"use strict";e.r(t);var i=e(1),c=e.n(i),r=e(3),a=e(17),o=e(2),s=e(206),l=e(7),u=e(1380),h=e.n(u),p=e(6),d=e(39),b=e(1350),j=e(1352),g=e(1351),f=e(1061),x=e(590),m=e(27),v=e(41),O=e(437),y=e(29);t.default=function(){var n=Object(d.d)(),t=Object(v.g)(),e=Object(d.e)(y.a.selectBackgroundImageUrl),i=Object(d.e)(y.a.selectLogoUrl),u=Object(d.e)(x.a.selectLoading),w=Object(d.e)(x.a.selectWarningMessage),k=h.a.parse(t.search).token;Object(p.useEffect)((function(){n(s.a.doAcceptFromAuth(k))}),[n,k]);var z=function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(m.a.doSignout());case 2:Object(l.b)().push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsx)(j.a,{style:{backgroundImage:"url(".concat(e||"/images/invitation.jpg",")")},children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(g.a,{children:i?Object(a.jsx)("img",{src:i,width:"240px",alt:Object(o.c)("app.title")}):Object(a.jsx)("h1",{children:Object(o.c)("app.title")})}),u&&Object(a.jsx)(f.a,{}),Boolean(w)&&Object(a.jsx)("h3",{style:{textAlign:"center"},children:w}),Boolean(w)&&Object(a.jsx)(O.a,{style:{marginTop:"24px"},onClick:function(){n(s.a.doAcceptFromAuth(k,!0))},type:"primary",size:"large",block:!0,htmlType:"button",loading:u,children:Object(o.c)("tenant.invitation.acceptWrongEmail")}),!u&&Object(a.jsx)(O.a,{style:{marginTop:"24px"},htmlType:"button",block:!0,size:"large",onClick:z,children:Object(o.c)("auth.signout")})]})})}}}]);