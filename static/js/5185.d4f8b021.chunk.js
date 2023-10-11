"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5185],{89994:function(e,n,a){var r=a(93433),i=a(6473),t=a(10499),o=a(70816),l=a.n(o),u={generic:function(e){return i.nK().label(e)},string:function(e,n){n=n||{};var a=i.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},boolean:function(e,n){return i.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var a=i.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(a=a.required()),a},stringArray:function(e,n){n=n||{};var a=i.IX().compact().ensure().of(i.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},relationToMany:function(e,n){n=n||{};var a=i.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},integer:function(e,n){n=n||{};var a=i.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},images:function(e,n){n=n||{};var a=i.IX().nullable(!0).label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},files:function(e,n){n=n||{};var a=i.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},enumerator:function(e,n){n=n||{};var a=i.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,r.Z)(n.options||[])));return n.required&&(a=a.required((0,t.ag)("validation.string.selected"))),a},email:function(e,n){n=n||{};var a=i.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},decimal:function(e,n){n=n||{};var a=i.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},datetime:function(e,n){n=n||{};var a=i.nK().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(a=a.required()),a},date:function(e,n){n=n||{};var a=i.nK().nullable(!0).label(e).test("is-date",(0,t.ag)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(a=a.required()),a}};n.Z=u},47921:function(e,n,a){var r=a(76747),i=function(e){return e.user.form},t=(0,r.P1)([i],(function(e){return e.user})),o={selectInitLoading:(0,r.P1)([i],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,r.P1)([i],(function(e){return Boolean(e.saveLoading)})),selectUser:t,selectRaw:i};n.Z=o},63442:function(e,n,a){var r=a(17366),i={status:["active","invited","empty-permissions"],roles:Object.keys(r.Z.values),occupation:["Etudiant","Universitaire","Journalist","Societe_Civile","ONG_International","Secteur_Public","Organisme_Recherche","Mouvement_Social","Mouvement_Artistique","Entreprenariat_Social","Secteur_Prive","Activiste_Independant","Avocat","Parti_Politique","Chercheur","Autre"],regionTunisie:["tunis","ariana","beja","ben_arouss","bizerte","gabes","gafsa","jendouba","kairouan","kasserine","kebili","kef","mahdia","manouba","medenine","monastir","nabeul","sfax","sidi_bouzid","siliana","sousse","tataouine","tozeur","zaghouan"],pays:["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The_Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cabo_Verde","Cambodia","Cameroon","Canada","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Congo,_Democratic_Republic_of_the","Congo,_Republic_of_the","Costa_Rica","C\xf4te_d\u2019Ivoire","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor_(Timor-Leste)","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","The_Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea,_North","Korea,_South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar_(Burma)","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","Sudan,_South","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]};n.Z=i},27829:function(e,n,a){var r,i=a(30168),t=a(44781).ZP.div(r||(r=(0,i.Z)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.Z=t},53852:function(e,n,a){var r=a(28709),i=(a(47313),a(28303)),t=a(46417);n.Z=function(e){var n=function(e){return e.length>1};return(0,t.jsx)(r.Z,{children:e.items.map((function(e){return(0,t.jsx)(r.Z.Item,{children:n(e)?(0,t.jsx)(i.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},89522:function(e,n,a){a.d(n,{Z:function(){return s}});var r,i=a(11894),t=(a(47313),a(10499)),o=a(30168),l=a(44781).ZP.div(r||(r=(0,o.Z)(["\n  .ant-carousel img {\n    width: 100%;\n    object-fit: cover;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 5px;\n  }\n\n  .ant-carousel .slick-track {\n    height: inherit !important;\n  }\n"]))),u=a(46417),s=function(e){var n=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return n().length?(0,u.jsx)(l,{children:(0,u.jsx)(i.Z,{autoplay:!0,vertical:!0,effect:"fade",children:n().map((function(e){return(0,u.jsx)("img",{src:e.downloadUrl,alt:e.name},e.id)}))})}):(0,u.jsx)("p",{children:(0,t.ag)("imagesViewer.noImage")})}},61567:function(e,n,a){var r=a(72652),i=(a(47313),a(46417));n.Z=function(e){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)(r.Z,{})})}},49384:function(e,n,a){a.d(n,{Z:function(){return t}});var r=a(15671),i=a(43144),t=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,null,[{key:"errorMessage",value:function(e,n,a,r){var i,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t)return t;if(!r&&!a[e])return null;var o=n[e];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},5544:function(e,n,a){var r=a(1413),i=a(59420),t=a(61143),o=a(47313),l=a(49384),u=a(43270),s=a(46417),d=function(e){var n=e.label,a=e.name,d=e.hint,c=e.layout,m=e.size,f=e.placeholder,g=e.options,p=e.mode,h=e.autoFocus,b=e.required,v=e.externalErrorMessage,Z=e.optionFilterProp,x=(0,u.Gc)(),_=x.register,j=x.errors,y=x.formState,S=y.touched,I=y.isSubmitted,C=x.setValue,q=x.watch,M=l.Z.errorMessage(a,j,S,I,v),w=q(a);return(0,o.useEffect)((function(){_({name:a})}),[_,a]),(0,s.jsx)(i.Z.Item,(0,r.Z)((0,r.Z)({},c),{},{label:n,validateStatus:M?"error":"success",required:b,help:M||d,children:(0,s.jsx)(t.Z,{id:a,onChange:function(n){C(a,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:w,size:m||void 0,placeholder:f||void 0,autoFocus:h||!1,mode:p||void 0,optionFilterProp:Z||"children",allowClear:!0,style:{width:"100%"},children:g.map((function(e){return(0,s.jsx)(t.Z.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};d.defaultProps={layout:null,required:!1},n.Z=d},48895:function(e,n,a){var r=a(1413),i=a(59420),t=a(86345),o=a(47313),l=a(49384),u=a(43270),s=a(46417),d=function(e){var n=e.label,a=e.name,d=e.hint,c=e.layout,m=e.size,f=e.externalErrorMessage,g=(0,u.Gc)(),p=g.register,h=g.errors,b=g.formState,v=b.touched,Z=b.isSubmitted,x=g.setValue,_=g.watch;(0,o.useEffect)((function(){p({name:a})}),[p,a]);var j=l.Z.errorMessage(a,h,v,Z,f),y=j||d;return(0,s.jsx)(i.Z.Item,(0,r.Z)((0,r.Z)({},c),{},{label:n,validateStatus:j?"error":"success",help:y,children:(0,s.jsx)(t.Z,{onChange:function(n){x(a,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},checked:_(a)||!1,size:m||void 0})}))};d.defaultProps={layout:null},n.Z=d},68160:function(e,n,a){a.d(n,{I4:function(){return o},YT:function(){return l}});var r,i=a(30168),t=a(44781).ZP.div(r||(r=(0,i.Z)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]))),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},l={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.ZP=t},75352:function(e,n,a){var r,i=a(30168),t=a(44781).ZP.h1(r||(r=(0,i.Z)(["\n  margin-bottom: 36px;\n"])));n.Z=t},25969:function(e,n,a){a.d(n,{D:function(){return o}});var r,i=a(30168),t=a(44781).ZP.div(r||(r=(0,i.Z)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};n.Z=t},35185:function(e,n,a){a.r(n),a.d(n,{default:function(){return z}});var r=a(29439),i=a(47313),t=a(45788),o=a(63830),l=a(10499),u=a(37670),s=a(541),d=a(47921),c=a(27829),m=a(53852),f=a(61567),g=a(1413),p=a(92350),h=a(12196),b=a(11829),v=a(68197),Z=a(59624),x=a(59420),_=a(96995),j=a(59491),y=a(43270),S=a(89994),I=a(63442),C=a(5544),q=a(68160),M=a(6473),w=a(67357),k=a(75352),B=a(48895),P=a(25969),A=a(93488),D=a(89522),N=a(46417),T=M.Ry().shape({roles:S.Z.stringArray((0,l.ag)("user.fields.roles")),deactivate:S.Z.boolean((0,l.ag)("user.fields.deactivate"))}),L=function(e){var n=(0,t.I0)(),a=(0,t.v9)(d.Z.selectSaveLoading),o=(0,i.useState)((function(){return e.user||{}})),u=(0,r.Z)(o,1)[0],c=(0,y.cI)({resolver:(0,w.X)(T),mode:"all",defaultValues:u}),m=function(a){var r=(0,g.Z)({id:e.user.id,status:c.getValues().deactivate?"inactive":0==c.getValues().roles.length?"empty-permissions":"active"},a);delete r.email,n(s.Z.doUpdate(r))};return(0,N.jsx)(q.ZP,{children:(0,N.jsx)(y.RV,(0,g.Z)((0,g.Z)({},c),{},{children:(0,N.jsxs)("form",{onSubmit:c.handleSubmit(m),children:[(0,N.jsxs)(v.Z,{gutter:24,children:[(0,N.jsx)(Z.Z,{span:16,children:(0,N.jsx)(k.Z,{children:(0,l.ag)("user.edit.title")})}),(0,N.jsx)(Z.Z,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:(0,N.jsxs)(x.Z.Item,(0,g.Z)((0,g.Z)({className:"form-buttons"},q.YT),{},{children:[(0,N.jsx)(_.Z,{title:(0,l.ag)("common.save"),children:(0,N.jsx)(j.Z,{loading:a,type:"primary",onClick:c.handleSubmit(m),icon:(0,N.jsx)(p.Z,{rev:void 0})})}),(0,N.jsx)(_.Z,{title:(0,l.ag)("common.reset"),children:(0,N.jsx)(j.Z,{disabled:a,onClick:function(){Object.keys(u).forEach((function(e){c.setValue(e,u[e])}))},icon:(0,N.jsx)(h.Z,{rev:void 0})})}),e.onCancel&&(0,N.jsx)(_.Z,{title:(0,l.ag)("common.cancel"),children:(0,N.jsx)(j.Z,{disabled:a,onClick:function(){return e.onCancel()},icon:(0,N.jsx)(b.Z,{rev:void 0})})})]}))})]}),(0,N.jsx)(v.Z,{gutter:24,children:(0,N.jsx)(Z.Z,{span:24,children:(0,N.jsxs)("fieldset",{children:[(0,N.jsxs)("legend",{children:["\xa0 \xa0",(0,l.ag)("common.informations")]}),e.user.avatars&&Boolean(e.user.avatars.length)&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.avatars"),children:(0,N.jsx)(D.Z,{value:e.user.avatars})})),(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},q.I4),{},{label:(0,l.ag)("user.fields.email"),children:(0,N.jsx)("strong",{children:e.user.email})})),e.user.firstName&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.firstName"),children:e.user.firstName})),e.user.lastName&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.lastName"),children:e.user.lastName})),e.user.phoneNumber&&(0,N.jsxs)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.phoneNumber"),children:["+",e.user.phoneNumber]})),e.user.pays&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.pays"),children:e.user.pays})),e.user.region&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.region"),children:(0,l.ag)("user.enumerators.region."+e.user.region)})),e.user.occupation&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.occupation"),children:(0,l.ag)("user.enumerators.occupation."+e.user.occupation)})),e.user.fonction&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.fonction"),children:(0,l.ag)("user.enumerators.fonction."+e.user.fonction)})),e.user.membership&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.membership"),children:(0,l.ag)("user.enumerators.membership."+e.user.membership)})),e.user.status&&(0,N.jsx)(x.Z.Item,(0,g.Z)((0,g.Z)({},P.D),{},{label:(0,l.ag)("user.fields.status"),children:(0,N.jsx)(A.Z,{value:e.user.status})})),(0,N.jsx)(C.Z,{name:"roles",label:(0,l.ag)("user.fields.roles"),options:I.Z.roles.map((function(e){return{value:e,label:(0,l.ag)("roles.".concat(e,".label"))}})),mode:"multiple",layout:q.I4}),(0,N.jsx)(B.Z,{name:"deactivate",label:(0,l.ag)("user.fields.deactivate"),layout:q.I4})]})})})]})}))})},z=function(e){var n=(0,t.I0)(),a=(0,i.useState)(!1),g=(0,r.Z)(a,2),p=g[0],h=g[1],b=(0,t.v9)(d.Z.selectInitLoading),v=(0,t.v9)(d.Z.selectSaveLoading),Z=(0,t.v9)(d.Z.selectUser),x=(0,o.$B)();return(0,i.useEffect)((function(){n(s.Z.doInit(x.params.id)),h(!0)}),[n,x.params.id]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m.Z,{header:!0,items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("user.menu"),"/user"],[(0,l.ag)("user.edit.title")]]}),(0,N.jsxs)(c.Z,{children:[b&&(0,N.jsx)(f.Z,{}),p&&!b&&(0,N.jsx)(L,{user:Z,saveLoading:v,onCancel:function(){return(0,u.s1)().push("/user")}})]})]})}},93488:function(e,n,a){var r=a(10499),i=(a(47313),a(66204)),t=a(46417);n.Z=function(e){var n=e.value;return n?"active"===n?(0,t.jsx)(i.Z,{color:"green",children:(0,r.ag)("user.status.active")}):"empty-permissions"===n?(0,t.jsx)(i.Z,{color:"red",children:(0,r.ag)("user.status.empty-permissions")}):"inactive"===n?(0,t.jsx)(i.Z,{color:"grey",children:(0,r.ag)("user.disabled")}):(0,t.jsx)(i.Z,{color:"gold",children:(0,r.ag)("user.status.invited")}):null}}}]);