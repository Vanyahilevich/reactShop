"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[138],{5:function(e,n,r){r(2791);var t=r(5931),a=r(9658),o=r(7317),i=r(184);n.Z=function(e){var n=e.classname,r=e.state,s=e.onClose,l=e.title,c=e.subTitle;return(0,i.jsx)(t.Z,{className:n,direction:"down",in:r.error,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsxs)(a.Z,{severity:"error",onClose:s,children:[(0,i.jsx)(o.Z,{children:l}),c]})})}},8828:function(e,n,r){var t=r(1413),a=r(2791),o=r(8550),i=r(184),s=a.memo((function(e){var n=e.label,r=e.name,a=e.formik;return(0,i.jsx)(o.Z,(0,t.Z)((0,t.Z)({},e),{},{label:n,name:r,value:a.values[r],onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched[r]&&!!a.errors[r],helperText:a.touched[r]&&a.errors[r],margin:"normal"}))}));n.Z=s},9138:function(e,n,r){r.r(n),r.d(n,{default:function(){return ie}});var t=r(4165),a=r(5861),o=r(1413),i=r(9439),s=r(2791),l=r(890),c=r(5705),u=r(6151),m=r(3239),d=r(8828),h=r(8007),p=h.Ry({username:h.Z_("Enter your name").min(2,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 2 \u0431\u0443\u043a\u0432").max(50,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 50 \u0431\u0443\u043a\u0432").required("Name is required"),surname:h.Z_("Enter your surname").min(2,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 2 \u0431\u0443\u043a\u0432").max(50,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 50 \u0431\u0443\u043a\u0432").required("Surname is required"),email:h.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:h.Z_().min(2,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(50,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").matches(/[a-zA-Z]/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0431\u0443\u043a\u0432\u0443").matches(/[0-9]/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),confirmPassword:h.Z_().oneOf([h.iH("password"),null],"\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c").required("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),agreement:h.O7().oneOf([!0],"You must agree to the terms").required("You must agree to the terms")}),f=r(8096),Z=r(4989),v=r(4942),x=r(3366),g=r(7462),b=r(3733),j=r(4419),k=r(2065),y=r(7278),S=r(9201),_=r(184),w=(0,S.Z)((0,_.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),C=(0,S.Z)((0,_.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),z=(0,S.Z)((0,_.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),O=r(4036),N=r(1402),P=r(6934),E=r(5878),U=r(1217);function q(e){return(0,U.Z)("MuiCheckbox",e)}var I=(0,E.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],V=(0,P.ZP)(y.Z,{shouldForwardProp:function(e){return(0,P.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.indeterminate&&n.indeterminate,"default"!==r.color&&n["color".concat((0,O.Z)(r.color))]]}})((function(e){var n,r=e.theme,t=e.ownerState;return(0,g.Z)({color:(r.vars||r).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===t.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,k.Fq)("default"===t.color?r.palette.action.active:r.palette[t.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,v.Z)(n,"&.".concat(I.checked,", &.").concat(I.indeterminate),{color:(r.vars||r).palette[t.color].main}),(0,v.Z)(n,"&.".concat(I.disabled),{color:(r.vars||r).palette.action.disabled}),n))})),B=(0,_.jsx)(C,{}),T=(0,_.jsx)(w,{}),F=(0,_.jsx)(z,{}),R=s.forwardRef((function(e,n){var r,t,a=(0,N.Z)({props:e,name:"MuiCheckbox"}),o=a.checkedIcon,i=void 0===o?B:o,l=a.color,c=void 0===l?"primary":l,u=a.icon,m=void 0===u?T:u,d=a.indeterminate,h=void 0!==d&&d,p=a.indeterminateIcon,f=void 0===p?F:p,Z=a.inputProps,v=a.size,k=void 0===v?"medium":v,y=a.className,S=(0,x.Z)(a,M),w=h?f:m,C=h?f:i,z=(0,g.Z)({},a,{color:c,indeterminate:h,size:k}),P=function(e){var n=e.classes,r=e.indeterminate,t=e.color,a=e.size,o={root:["root",r&&"indeterminate","color".concat((0,O.Z)(t)),"size".concat((0,O.Z)(a))]},i=(0,j.Z)(o,q,n);return(0,g.Z)({},n,i)}(z);return(0,_.jsx)(V,(0,g.Z)({type:"checkbox",inputProps:(0,g.Z)({"data-indeterminate":h},Z),icon:s.cloneElement(w,{fontSize:null!=(r=w.props.fontSize)?r:k}),checkedIcon:s.cloneElement(C,{fontSize:null!=(t=C.props.fontSize)?t:k}),ownerState:z,ref:n,className:(0,b.Z)(P.root,y)},S,{classes:P}))})),H=r(7071),W=s.memo((function(e){var n=e.label,r=e.name,t=e.formik;return console.log("checkbox"),(0,_.jsxs)(f.Z,(0,o.Z)((0,o.Z)({error:!!t.errors[r]},e),{},{children:[(0,_.jsx)(Z.Z,{label:n,control:(0,_.jsx)(R,{name:r,value:t.values[r],onChange:t.handleChange,onBlur:t.handleBlur})}),(0,_.jsx)(H.Z,{children:t.touched[r]&&t.errors[r]?"You must agree to the terms":""})]}))})),L="signUpForm_formContainer__m16zs",Y="signUpForm_checkbox__JSidd",A=r(929),G=r(2827),J=r(9733),D=function(e){var n="759255864066-k5undthpvb18m3fb8g6qmr80l65bvl95.apps.googleusercontent.com",r=function(n){console.log(n.profileObj);var r=n.profileObj,t=r.email,a=r.givenName,o=r.familyName,i=r.imageUrl;e.setValuesFormik(t,a,o,i)};return(0,s.useEffect)((function(){G.MN.load("client:auth2",(function(){G.MN.client.init({clientId:n,scope:""})}))})),(0,_.jsx)(A.GoogleLogin,{className:J.Z.btn,clientId:n,buttonText:e.title,onSuccess:r,onFailure:r,cookiePolicy:"single_host_origin"})},K=function(e){var n=e.onSubmit,r=e.state,t=(0,c.TA)({initialValues:{username:"",surname:"",email:"",password:"",confirmPassword:"",imageURL:"",agreement:!1},validateOnBlur:!1,validateOnChange:!1,validationSchema:p,onSubmit:n});return(0,_.jsxs)("form",{className:L,onSubmit:t.handleSubmit,children:[(0,_.jsx)(d.Z,{label:"Username",name:"username",formik:t,fullWidth:!0}),(0,_.jsx)(d.Z,{label:"Surname",name:"surname",formik:t,fullWidth:!0}),(0,_.jsx)(d.Z,{label:"Email",name:"email",formik:t,fullWidth:!0}),(0,_.jsx)(d.Z,{label:"Password",name:"password",formik:t,fullWidth:!0,type:"password"}),(0,_.jsx)(d.Z,{label:"Confirm password",name:"confirmPassword",formik:t,fullWidth:!0,type:"password"}),(0,_.jsx)(W,{label:"I agree to the terms",name:"agreement",formik:t,className:Y}),(0,_.jsx)(u.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:{margin:"20px 0 20px"},type:"submit",disabled:r.loading,endIcon:r.loading?(0,_.jsx)(m.Z,{color:"inherit",size:"18px",style:{margin:"0px 10px"}}):null,children:"Submit"}),(0,_.jsx)(D,{setValuesFormik:function(e,n,r,a){t.initialValues.email=e,t.initialValues.username=n,t.initialValues.surname=r,t.initialValues.imageURL=a,t.validateField()},title:"Sign up with Google"})]})},Q="signUp_pages__4MmYO",X="signUp_title__2KDPP",$="signUp_alert__+5Srx",ee=r(7689),ne=r(5931),re=r(9658),te=r(7317),ae=function(e){var n=e.state,r=e.classname,t=e.title,a=e.subTitle;return(0,_.jsx)(ne.Z,{className:r,direction:"down",in:n.gone,mountOnEnter:!0,unmountOnExit:!0,children:(0,_.jsxs)(re.Z,{severity:"success",children:[(0,_.jsx)(te.Z,{children:t}),a]})})},oe=r(5),ie=function(){var e=(0,s.useState)({error:!1,loading:!1,gone:!1}),n=(0,i.Z)(e,2),r=n[0],c=n[1],u=(0,ee.s0)(),m=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((0,o.Z)((0,o.Z)({},r),{},{loading:!0})),e.next=4,fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:if(i=e.sent,c((0,o.Z)((0,o.Z)({},r),{},{loading:!1})),!i.error){e.next=12;break}return c((0,o.Z)((0,o.Z)({},r),{},{error:i.error})),e.abrupt("return");case 12:c((0,o.Z)((0,o.Z)({},r),{},{gone:!0,error:!1})),setTimeout((function(){u("/signin")}),2e3),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:Q,children:[(0,_.jsx)(oe.Z,{state:r,classname:$,title:"Error",subTitle:"User with this email already exists.",onClose:function(){c((0,o.Z)((0,o.Z)({},r),{},{error:!1}))}}),(0,_.jsx)(ae,{state:r,classname:$,title:"Success",subTitle:"User created successfully."}),(0,_.jsx)(l.Z,{className:X,color:"primary",variant:"h2",children:"SIGN UP"}),(0,_.jsx)(K,{onSubmit:m,state:r})]})}},9733:function(e,n){n.Z={btn:"googleButton_btn__Qg7Ae"}}}]);
//# sourceMappingURL=138.601c0ba7.chunk.js.map