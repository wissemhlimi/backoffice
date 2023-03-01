(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[248],{1056:function(e,a,n){"use strict";var t=n(420);function i(){var e=Object(t.a)(["\n  margin-bottom: 36px;\n"]);return i=function(){return e},e}var r=n(421).a.h1(i());a.a=r},1057:function(e,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return u}));var t=n(420);function i(){var e=Object(t.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  // input {\n  //  font-variant: tabular-nums;\n  //   list-style: none;\n  //   font-feature-settings: 'tnum';\n  //   position: relative;\n  //   display: inline-block;\n  //   width: 100%;\n  //   min-width: 0;\n  //   padding: 4px 11px;\n  //   color: rgba(0, 0, 0, 0.65);\n  //   font-size: 14px;\n  //   line-height: 1.5715;\n  //   background-color: #fff;\n  //   background-image: none;\n  //   border: 1px solid #d9d9d9;\n  //   border-radius: 4px;\n  //   transition: all 0.3s;\n  // }\n"]);return i=function(){return e},e}var r=n(421).a.div(i()),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},u={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};a.a=r},1059:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n(14),i=n(15),r=function(){function e(){Object(t.a)(this,e)}return Object(i.a)(e,null,[{key:"errorMessage",value:function(e,a,n,t){var i,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(r)return r;if(!t&&!n[e])return null;var o=a[e];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},1060:function(e,a,n){"use strict";var t=n(56),i=n(48),r=n(2),o=n(30),u=n.n(o),l={generic:function(e){return i.c().label(e)},string:function(e,a){a=a||{};var n=i.h().transform((function(e,a){return""===a?null:e})).nullable(!0).trim().label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),a.matches&&(n=n.matches(a.matches)),n},boolean:function(e,a){return i.b().default(!1).label(e)},relationToOne:function(e,a){a=a||{};var n=i.c().nullable(!0).label(e).transform((function(e,a){return a?a.id:null}));return a.required&&(n=n.required()),n},stringArray:function(e,a){a=a||{};var n=i.a().compact().ensure().of(i.h().transform((function(e,a){return""===a?null:e})).trim()).label(e);return a.required&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},relationToMany:function(e,a){a=a||{};var n=i.a().nullable(!0).label(e).transform((function(e,a){return a&&a.length?a.map((function(e){return e.id})):[]}));return a.required&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},integer:function(e,a){a=a||{};var n=i.d().transform((function(e,a){return""===a?null:e})).integer().nullable(!0).label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),n},images:function(e,a){a=a||{};var n=i.a().nullable(!0).label(e);return(a.required||a.min)&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},files:function(e,a){a=a||{};var n=i.a().compact().ensure().nullable(!0).label(e);return(a.required||a.min)&&(n=n.required()),a.min||0===a.min?n=n.min(a.min):a.required&&(n=n.min(1)),a.max&&(n=n.max(a.max)),n},enumerator:function(e,a){a=a||{};var n=i.h().transform((function(e,a){return""===a?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(a.options||[])));return a.required&&(n=n.required(Object(r.c)("validation.string.selected"))),n},email:function(e,a){a=a||{};var n=i.h().transform((function(e,a){return""===a?null:e})).nullable(!0).trim().label(e).email();return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),a.matches&&(n=n.matches(a.matches)),n},decimal:function(e,a){a=a||{};var n=i.d().transform((function(e,a){return""===a?null:e})).nullable(!0).label(e);return a.required&&(n=n.required()),(a.min||0===a.min)&&(n=n.min(a.min)),a.max&&(n=n.max(a.max)),n},datetime:function(e,a){a=a||{};var n=i.c().nullable(!0).label(e).transform((function(e,a){return e?u()(a,"YYYY-MM-DD HH:mm").toISOString():null}));return a.required&&(n=n.required()),n},date:function(e,a){a=a||{};var n=i.c().nullable(!0).label(e).test("is-date",Object(r.c)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return a.required&&(n=n.required()),n}};a.a=l},1061:function(e,a,n){"use strict";var t=n(420);function i(){var e=Object(t.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return i=function(){return e},e}var r=n(421).a.div(i());a.a=r},1063:function(e,a,n){"use strict";var t=n(17),i=n(1101),r=(n(6),n(201));a.a=function(e){var a=function(e){return e.length>1};return Object(t.jsx)(i.a,{children:e.items.map((function(e){return Object(t.jsx)(i.a.Item,{children:a(e)?Object(t.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},1077:function(e,a,n){"use strict";var t=n(17),i=n(1178);n(6);a.a=function(e){return Object(t.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(t.jsx)(i.a,{})})}},1106:function(e,a,n){"use strict";var t=n(0),i=n(17),r=n(1952),o=n(1611),u=n(6),l=n(1059),c=n(1054),s=function(e){var a=e.label,n=e.name,s=e.hint,d=e.layout,m=e.size,b=e.placeholder,f=e.options,j=e.mode,h=e.autoFocus,p=e.required,g=e.externalErrorMessage,O=e.optionFilterProp,v=Object(c.d)(),x=v.register,_=v.errors,S=v.formState,y=S.touched,C=S.isSubmitted,q=v.setValue,M=v.watch,k=l.a.errorMessage(n,_,y,C,g),w=M(n);return Object(u.useEffect)((function(){x({name:n})}),[x,n]),Object(i.jsx)(r.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:a,validateStatus:k?"error":"success",required:p,help:k||s,children:Object(i.jsx)(o.a,{id:n,onChange:function(a){q(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},onBlur:function(a){e.onBlur&&e.onBlur(a)},value:w,size:m||void 0,placeholder:b||void 0,autoFocus:h||!1,mode:j||void 0,optionFilterProp:O||"children",allowClear:!0,style:{width:"100%"},children:f.map((function(e){return Object(i.jsx)(o.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},a.a=s},1193:function(e,a,n){"use strict";var t=n(0),i=n(17),r=n(1952),o=n(1340),u=n(6),l=n(1059),c=n(1054),s=function(e){var a=e.label,n=e.name,s=e.hint,d=e.layout,m=e.size,b=e.externalErrorMessage,f=Object(c.d)(),j=f.register,h=f.errors,p=f.formState,g=p.touched,O=p.isSubmitted,v=f.setValue,x=f.watch;Object(u.useEffect)((function(){j({name:n})}),[j,n]);var _=l.a.errorMessage(n,h,g,O,b),S=_||s;return Object(i.jsx)(r.a.Item,Object(t.a)(Object(t.a)({},d),{},{label:a,validateStatus:_?"error":"success",help:S,children:Object(i.jsx)(o.a,{onChange:function(a){v(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},checked:x(n)||!1,size:m||void 0})}))};s.defaultProps={layout:null},a.a=s},1440:function(e,a,n){"use strict";var t=n(599),i={status:["active","invited","empty-permissions"],roles:Object.keys(t.a.values),occupation:["Etudiant","Universitaire","Journalist","Societe_Civile","ONG_International","Secteur_Public","Organisme_Recherche","Mouvement_Social","Mouvement_Artistique","Entreprenariat_Social","Secteur_Prive","Activiste_Independant","Avocat","Parti_Politique","Autre"],regionTunisie:["tunis","ariana","beja","ben_arouss","bizerte","gabes","gafsa","jendouba","kairouan","kasserine","kebili","kef","mahdia","manouba","medenine","monastir","nabeul","sfax","sidi_bouzid","siliana","sousse","tataouine","tozeur","zaghouan"],pays:["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The_Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cabo_Verde","Cambodia","Cameroon","Canada","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Congo,_Democratic_Republic_of_the","Congo,_Republic_of_the","Costa_Rica","C\xf4te_d\u2019Ivoire","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor_(Timor-Leste)","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","The_Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea,_North","Korea,_South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar_(Burma)","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","Sudan,_South","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]};a.a=i},1481:function(e,a,n){"use strict";var t=n(4),i=function(e){return e.user.form},r=Object(t.a)([i],(function(e){return e.user})),o={selectInitLoading:Object(t.a)([i],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(t.a)([i],(function(e){return Boolean(e.saveLoading)})),selectUser:r,selectRaw:i};a.a=o},2090:function(e,a,n){"use strict";n.r(a);var t=n(433),i=n(17),r=n(6),o=n(39),u=n(41),l=n(2),c=n(7),s=n(231),d=n(1481),m=n(1061),b=n(1063),f=n(1077),j=n(0),h=n(1103),p=n(1155),g=n(1192),O=n(1176),v=n(1177),x=n(1952),_=n(450),S=n(447),y=n(1054),C=n(1060),q=n(1440),M=n(1106),k=n(1057),w=n(48),B=n(1062),A=n(1056),I=n(1193),L=w.e().shape({roles:C.a.stringArray(Object(l.c)("user.fields.roles")),deactivate:C.a.boolean(Object(l.c)("user.fields.deactivate"))}),z=function(e){var a=Object(o.d)(),n=Object(o.e)(d.a.selectSaveLoading),u=Object(r.useState)((function(){return e.user||{}})),c=Object(t.a)(u,1)[0],m=Object(y.c)({resolver:Object(B.yupResolver)(L),mode:"all",defaultValues:c}),b=function(n){var t=Object(j.a)({id:e.user.id,status:m.getValues().deactivate?"inactive":0==m.getValues().roles.length?"empty-permissions":"active"},n);delete t.email,a(s.a.doUpdate(t))};return Object(i.jsx)(k.a,{children:Object(i.jsx)(y.a,Object(j.a)(Object(j.a)({},m),{},{children:Object(i.jsxs)("form",{onSubmit:m.handleSubmit(b),children:[Object(i.jsxs)(O.a,{gutter:24,children:[Object(i.jsx)(v.a,{span:16,children:Object(i.jsx)(A.a,{children:Object(l.c)("user.edit.title")})}),Object(i.jsx)(v.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(i.jsxs)(x.a.Item,Object(j.a)(Object(j.a)({className:"form-buttons"},k.c),{},{children:[Object(i.jsx)(_.a,{title:Object(l.c)("common.save"),children:Object(i.jsx)(S.a,{loading:n,type:"primary",onClick:m.handleSubmit(b),icon:Object(i.jsx)(h.a,{})})}),Object(i.jsx)(_.a,{title:Object(l.c)("common.reset"),children:Object(i.jsx)(S.a,{disabled:n,onClick:function(){Object.keys(c).forEach((function(e){m.setValue(e,c[e])}))},icon:Object(i.jsx)(p.a,{})})}),e.onCancel&&Object(i.jsx)(_.a,{title:Object(l.c)("common.cancel"),children:Object(i.jsx)(S.a,{disabled:n,onClick:function(){return e.onCancel()},icon:Object(i.jsx)(g.a,{})})})]}))})]}),Object(i.jsx)(O.a,{gutter:24,children:Object(i.jsx)(v.a,{span:24,children:Object(i.jsxs)("fieldset",{children:[Object(i.jsxs)("legend",{children:["\xa0 \xa0",Object(l.c)("common.informations")]}),Object(i.jsx)(x.a.Item,Object(j.a)(Object(j.a)({},k.b),{},{label:Object(l.c)("user.fields.email"),children:Object(i.jsx)("strong",{children:e.user.email})})),Object(i.jsx)(M.a,{name:"roles",label:Object(l.c)("user.fields.roles"),options:q.a.roles.map((function(e){return{value:e,label:Object(l.c)("roles.".concat(e,".label"))}})),mode:"multiple",layout:k.b}),Object(i.jsx)(I.a,{name:"deactivate",label:Object(l.c)("user.fields.deactivate"),layout:k.b})]})})})]})}))})};a.default=function(e){var a=Object(o.d)(),n=Object(r.useState)(!1),j=Object(t.a)(n,2),h=j[0],p=j[1],g=Object(o.e)(d.a.selectInitLoading),O=Object(o.e)(d.a.selectSaveLoading),v=Object(o.e)(d.a.selectUser),x=Object(u.h)();return Object(r.useEffect)((function(){a(s.a.doInit(x.params.id)),p(!0)}),[a,x.params.id]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b.a,{header:!0,items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("user.menu"),"/user"],[Object(l.c)("user.edit.title")]]}),Object(i.jsxs)(m.a,{children:[g&&Object(i.jsx)(f.a,{}),h&&!g&&Object(i.jsx)(z,{user:v,saveLoading:O,onCancel:function(){return Object(c.b)().push("/user")}})]})]})}}}]);