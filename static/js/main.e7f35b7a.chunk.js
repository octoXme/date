(this.webpackJsonpdate=this.webpackJsonpdate||[]).push([[0],{48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),i=a.n(r),c=(a(48),a(82)),o=a(41),s=a(12),l=a(31),u=a(76),d=a(77),j=Object(o.a)({palette:{type:"light",primary:l.a,secondary:u.a,text:{primary:"#59595c",secondary:Object(s.b)("#6d6e70",.8)},info:{light:d.a[300],main:d.a[500],dark:d.a[800],contrastText:"#fff"},error:{light:u.a[300],main:u.a[500],dark:u.a[700],contrastText:"#fff"}}}),b=a(8),h=a(20),f=a(10),p=a(88),O=a(80),x=a(81),m=a(83),g=a(84),v=a(78),D=a(2),y=a(87),C=a(86),T=a(85),k=a(79),N=a(4),E=a(3),M=Object(v.a)((function(e){return{root:{padding:e.spacing(2),backgroundColor:e.palette.grey[100],borderRadius:e.shape.borderRadius,display:"flex","&.info":{color:e.palette.info.dark,backgroundColor:Object(s.b)(e.palette.info.light,.2)},"&.alert":{color:e.palette.error.dark,backgroundColor:Object(s.b)(e.palette.error.light,.2)}},icon:{color:"inherit",width:32,display:"flex"},content:{lineHeight:1.5,display:"flex",flexDirection:"column"}}})),S=function(e){return Object(E.jsx)(k.a,Object(b.a)(Object(b.a)({},e),{},{children:Object(E.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"})}))},V=function(e){var t=e.variant,a=e.children,n=M();return Object(E.jsxs)("div",{className:Object(N.a)(n.root,t),children:[Object(E.jsx)("div",{className:n.icon,children:Object(E.jsx)(S,{})}),Object(E.jsx)("div",{className:n.content,children:a})]})},w=function(e){var t=e.error,a=e.helperText;return Object(E.jsx)(g.a,{in:void 0!==a&&null!==a,children:Object(E.jsx)("div",{children:Object(E.jsx)(V,{variant:t?"alert":"info",children:a})})})},R=Object(v.a)((function(e){return{inputRoot:{borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[100],minWidth:120,transition:e.transitions.create("all",{easing:e.transitions.easing.easeOut}),"&:before, &:after":{display:"none"}},inputError:{backgroundColor:"#fff5f5",boxShadow:"0 0 0 2px #ff6b81"},helperText:{marginTop:e.spacing(1)}}})),B=function(e){var t=e.name,a=e.label,n=e.error,r=e.helperText,i=Object(D.a)(e,["name","label","error","helperText"]),c=R();return Object(E.jsxs)(y.a,{variant:"filled",children:[Object(E.jsx)(C.a,{htmlFor:t,children:a}),Object(E.jsx)(T.a,Object(b.a)({disableUnderline:!0,error:n,classes:{root:c.inputRoot,error:c.inputError},autoComplete:"no"},i)),r&&Object(E.jsx)("div",{className:c.helperText,children:Object(E.jsx)(w,{error:n,helperText:r})})]})},Y=a(40),F=a.n(Y),I=function(e){var t=e.inputRef,a=Object(D.a)(e,["inputRef"]);return Object(E.jsx)(F.a,Object(b.a)(Object(b.a)({},a),{},{ref:function(e){t(e?e.inputElement:null)},mask:"99 99 9999"}))},H=function(e){var t=e;return"number"!==typeof t&&(t=Number(t)),t%100===0?t%400===0:t%4===0},A="DD MM YYYY".length,W=function(e){if(!function(e){return e&&e.length===A}(e))return!1;var t,a,n=e.split(" ").map(Number);return function(e,t,a){var n=0;switch(t){case 2:n=H(e)?29:28;break;case 1:case 3:case 5:case 7:case 8:case 10:case 12:n=31;break;default:n=30}return a>0&&a<=n}(n[2],n[1],n[0])&&((a=n[1])>0&&a<=12)&&((t=n[2])>=1900&&t<=2010)},J=function(e,t){return!(!W(e)||!W(t))&&Number(e.split(" ").reverse().join(""))<=Number(t.split(" ").reverse().join(""))},L=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(e,t,a){var n=L[e-1]+t;return a&&n>59&&(n+=1),n},G=function(e){var t=e;return"number"!==typeof t&&(t=Number(t)),Math.trunc(t/4)-Math.trunc(t/100)+Math.trunc(t/400)},U=function(e,t){return G(t)-G(e-1)},Z=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e,r=t;if(!a&&(!W(n)||!W(r)))return"Invalid output, please check your inputs";J(n,r)||(n=t,r=e);var i=n.split(" ").map(Number),c=r.split(" ").map(Number),o=i[2],s=c[2],l=i[1],u=c[1],d=i[0],j=c[0],b=0,h=H(o),f=H(s),p=P(l,d,h),O=P(u,j,f);if(o===s)b=O-p;else if(b=(h?366:365)-p+O,s-o>1){var x=s-(o+1),m=U(o+1,s-1),g=365*(x-m),v=366*m;b+=g+v}return"".concat(n,", ").concat(r,", ").concat(b)},q=Object(v.a)((function(e){var t;return{root:{display:"flex",justifyContent:"center"},content:{maxWidth:1200,width:"100%",margin:e.spacing(2,4)},dates:(t={margin:e.spacing(2,0),display:"flex",flexDirection:"column"},Object(f.a)(t,e.breakpoints.up("sm"),{flexDirection:"row"}),Object(f.a)(t,"& > *",{flex:"1 1 auto"}),Object(f.a)(t,"& > *:not(:last-child)",Object(f.a)({marginBottom:e.spacing(1)},e.breakpoints.up("sm"),{marginRight:e.spacing(2),marginBottom:0})),t),buttons:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{maxWidth:256,width:"100%","&:not(last-child)":{marginBottom:e.spacing(1)}}},results:{padding:e.spacing(2,3)}}})),z=function(){var e=q(),t={startDate:"",endDate:"",isStartDateValid:!1,isEndDateValid:!1,isStartDateTouched:!1,isEndDateTouched:!1,results:null},a=Object(n.useState)(t),r=Object(h.a)(a,2),i=r[0],c=r[1],o=i.startDate,s=i.endDate,l=i.isStartDateValid,u=i.isEndDateValid,d=i.isStartDateTouched,j=i.isEndDateTouched,f=i.results,v=d&&!l,D=j&&!u;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(p.a,{position:"static",children:Object(E.jsx)(O.a,{children:Object(E.jsx)(x.a,{variant:"h6",color:"inherit",children:"Date Difference"})})}),Object(E.jsx)("main",{className:e.root,children:Object(E.jsxs)("div",{className:e.content,children:[Object(E.jsxs)(V,{variant:"info",children:[Object(E.jsx)(x.a,{children:"Calculate the difference between two dates"}),Object(E.jsx)(x.a,{variant:"caption",children:"Validate date format: DD MM YYYY"}),Object(E.jsx)(x.a,{variant:"caption",children:"Validate date range: 1900 to 2010"})]}),Object(E.jsxs)("form",{children:[Object(E.jsxs)("div",{className:e.dates,children:[Object(E.jsx)(B,{label:"Date 1",inputComponent:I,value:o,onChange:function(e){return c(Object(b.a)(Object(b.a)({},i),{},{startDate:e.target.value,isStartDateTouched:!1}))},onBlur:function(e){var t=e.target.value;t&&c(Object(b.a)(Object(b.a)({},i),{},{isStartDateValid:W(t),isStartDateTouched:!0}))},error:v,helperText:v?"Invalid date format":null}),Object(E.jsx)(B,{label:"Date 2",inputComponent:I,value:s,onChange:function(e){return c(Object(b.a)(Object(b.a)({},i),{},{endDate:e.target.value,isEndDateTouched:!1}))},onBlur:function(e){var t=e.target.value;t&&c(Object(b.a)(Object(b.a)({},i),{},{isEndDateValid:W(t),isEndDateTouched:!0}))},error:D,helperText:D?"Invalid date format":null})]}),Object(E.jsxs)("div",{className:e.buttons,children:[Object(E.jsx)(m.a,{color:"secondary",variant:"contained",onClick:function(){l&&l&&c(Object(b.a)(Object(b.a)({},i),{},{results:Z(o,s,!0)}))},children:"Go"}),Object(E.jsx)(m.a,{onClick:function(){return c(t)},children:"Reset"})]})]}),null!==f&&Object(E.jsx)(g.a,{in:null!==f,children:Object(E.jsxs)("div",{className:e.results,children:[Object(E.jsx)(x.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",children:"Output"}),Object(E.jsx)(x.a,{variant:"h6",children:f})]})})]})})]})};a(55);var K=function(){return Object(E.jsx)(c.a,{theme:j,children:Object(E.jsx)(z,{})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};i.a.render(Object(E.jsx)(K,{}),document.getElementById("root")),Q()}},[[56,1,2]]]);
//# sourceMappingURL=main.e7f35b7a.chunk.js.map