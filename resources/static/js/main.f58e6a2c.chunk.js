(window["webpackJsonpsub-form-widget"]=window["webpackJsonpsub-form-widget"]||[]).push([[0],{187:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Sub successfully saved","dataDeleted":"Sub successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"sub":{"deleteDialog":{"title":"Delete sub","description":"Are you sure?"},"notFound":"Sub not found","deleted":"Sub deleted","id":"ID","level":"entities.sub.level","length":"entities.sub.length","status":"entities.sub.status","project_id":"entities.sub.project_id","start_date":"entities.sub.start_date","customer_id":"entities.sub.customer_id"}}}')},217:function(e,t,n){e.exports=n(365)},365:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(28),i=n(31),o=n(23),s=n(29),c=n(200),l=n(50),u=n(0),d=n.n(u),b=n(9),p=n.n(b),f=n(180),h=n.n(f),m=n(410),v=n(414),g=n(407),O=n(199),y=n(16),E=d.a.createContext(null),k=n(45),j=n(127),w=n(49),C={en:n(187)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),x=j.a.t,P=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.sub.".concat(n))})}}};k.setLocale(t)}(x)},_=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},T={tableAdd:"sub.table.add",tableSelect:"sub.table.select"},F={create:"sub.form.create",update:"sub.form.update",errorCreate:"sub.form.errorCreate",errorUpdate:"sub.form.errorUpdate"},N=n(13),U=n.n(N),A=n(26),R=n(20),M=n(2),z=n.n(M),L=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),n(201));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);function I(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(c)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(L.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(s.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(E.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var H=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},B=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},J=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/subs","/").concat(n),r=q({},B(),{method:"GET"}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/subs"),r=q({},B(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/subs"),r=q({},B(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/subs","/").concat(n),r=q({},B(),{method:"DELETE"}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=n(4),Z=n(413),$=n(398),ee=n(395),te=n(5),ne=n(399),ae=n(189),re=n.n(ae),ie=n(190),oe=n.n(ie),se=n(188),ce=n.n(se),le=n(191),ue=n.n(le),de={success:ce.a,error:re.a,info:oe.a},be={success:3e3,error:null,info:5e3},pe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,s=!!i,c=r||e.INFO,l=de[c],u=be[c],b=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(X.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(Z.a,{open:s,onClose:o,autoHideDuration:u},d.a.createElement($.a,{className:Object(X.a)(a[c],n),message:b,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};pe.SUCCESS="success",pe.ERROR="error",pe.defaultProps={message:null,className:"",status:pe.INFO="info",onClose:function(){}};var fe=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(pe),he=(z.a.shape({id:z.a.number,level:z.a.string,length:z.a.string,status:z.a.string,project_id:z.a.number,start_date:z.a.string,customer_id:z.a.number}),z.a.shape({level:z.a.string,length:z.a.string,status:z.a.string,project_id:z.a.oneOfType([z.a.string,z.a.number]),start_date:z.a.oneOfType([z.a.string,z.a.instanceOf(Date)]),customer_id:z.a.oneOfType([z.a.string,z.a.number])}),z.a.shape({level:z.a.oneOfType([z.a.bool,z.a.shape()]),length:z.a.oneOfType([z.a.bool,z.a.shape()]),status:z.a.oneOfType([z.a.bool,z.a.shape()]),project_id:z.a.oneOfType([z.a.bool,z.a.shape()]),start_date:z.a.oneOfType([z.a.bool,z.a.shape()]),customer_id:z.a.oneOfType([z.a.bool,z.a.shape()])}),z.a.shape({level:z.a.oneOfType([z.a.string,z.a.shape()]),length:z.a.oneOfType([z.a.string,z.a.shape()]),status:z.a.oneOfType([z.a.string,z.a.shape()]),project_id:z.a.oneOfType([z.a.string,z.a.shape()]),start_date:z.a.oneOfType([z.a.string,z.a.shape()]),customer_id:z.a.oneOfType([z.a.string,z.a.shape()])}),n(197)),me=n(202),ve=n(404),ge=n(405),Oe=n(408),ye=n(19),Ee=n(409),ke=n(198),je={en:n(71).a},we=n(412),Ce=n(403),Se=n(401),De=n(402),xe=n(400),Pe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(R.a)(n)),n.discard=n.discard.bind(Object(R.a)(n)),n.confirm=n.confirm.bind(Object(R.a)(n)),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,s=t.Renderer;return d.a.createElement("div",null,d.a.createElement(s,{onClick:this.handleOpen}),d.a.createElement(we.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(xe.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Se.a,null,d.a.createElement(De.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Ce.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Pe.CONFIRM="CONFIRM",Pe.DISCARD="DISCARD";var _e=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(R.a)(n)),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Pe.CONFIRM:n(a)}}},{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.values,r=t.touched,i=t.errors,o=t.handleChange,s=t.handleBlur,c=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,b=t.isSubmitting,p=t.setFieldValue,f=t.t,h=t.i18n,m=function(e){return i[e]&&r[e]?i[e]:""};return d.a.createElement(ye.a,{utils:ke.a,locale:je[h.language]},d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:n.root,"data-testid":"sub-form"},d.a.createElement(ge.a,{container:!0,spacing:2},d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"sub-level",error:i.level&&r.level,helperText:m("level"),className:n.textField,onChange:o,onBlur:s,value:a.level,name:"level",label:f("entities.sub.level")})),d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"sub-length",error:i.length&&r.length,helperText:m("length"),className:n.textField,onChange:o,onBlur:s,value:a.length,name:"length",label:f("entities.sub.length")})),d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"sub-status",error:i.status&&r.status,helperText:m("status"),className:n.textField,onChange:o,onBlur:s,value:a.status,name:"status",label:f("entities.sub.status")})),d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"sub-project_id",error:i.project_id&&r.project_id,helperText:m("project_id"),className:n.textField,type:"number",onChange:o,onBlur:s,value:a.project_id,name:"project_id",label:f("entities.sub.project_id")})),d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"sub-start_date",error:i.start_date&&r.start_date,helperText:m("start_date"),className:n.textField,onChange:(e="start_date",function(t){p(e,t)}),value:a.start_date,labelFunc:function(e){return e?new Date(e).toLocaleDateString(h.language):""},name:"start_date",label:f("entities.sub.start_date")})),d.a.createElement(ge.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"sub-customer_id",error:i.customer_id&&r.customer_id,helperText:m("customer_id"),className:n.textField,type:"number",onChange:o,onBlur:s,value:a.customer_id,name:"customer_id",label:f("entities.sub.customer_id")})),l&&d.a.createElement(Pe,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:f("entities.sub.deleteDialog.title"),description:f("entities.sub.deleteDialog.description"),confirmLabel:f("common.yes"),discardLabel:f("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:b},f("common.delete"))}}),d.a.createElement(ve.a,{onClick:u,disabled:b,"data-testid":"cancel-btn"},f("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:b,"data-testid":"submit-btn"},f("common.save")))))}}]),t}(u.PureComponent);_e.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Te={level:"",length:"",status:"",project_id:"",start_date:null,customer_id:""},Fe={mapPropsToValues:function(e){return e.sub||Te},enableReinitialize:!0,validationSchema:k.object().shape({level:k.string(),length:k.string(),status:k.string(),project_id:k.number(),start_date:k.date().nullable(),customer_id:k.number()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"SubForm"},Ne=Object(me.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(he.a)(Fe))(_e),Ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(R.a)(n)),n.handleDelete=n.handleDelete.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(A.a)(U.a.mark((function e(){var t,n,a,r,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,V(r,a);case 6:i=e.sent,this.setState((function(){return{sub:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,i,o,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:s=e.sent,r(s),this.setState({sub:s,notificationMessage:a("common.dataSaved"),notificationStatus:fe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,i,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Q(o,t.id);case 6:r(t),this.setState({sub:null,notificationMessage:a("common.dataDeleted"),notificationStatus:fe.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:fe.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,s=i.notificationStatus,c=i.sub;return e="undefined"===typeof c?r("entities.sub.notFound"):null===c?r("entities.sub.deleted"):d.a.createElement(Ne,{sub:c,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(H,{keycloak:n},e),d.a.createElement(fe,{status:s,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ue.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Ae=I(Object(w.b)()(Ue)),Re=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,i,o,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,G(o,t);case 6:s=e.sent,r(s),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:fe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:fe.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(H,{keycloak:t},d.a.createElement(Ne,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(fe,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Re.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Me=I(Object(w.b)()(Re));function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(){return window&&window.entando&&window.entando.keycloak&&Le({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},He={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},We=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).keycloak=Ie(),n.onCreate=_(F.create),n.onCancelEditing=_(F.cancelEditing),n.onDelete=_(F.delete),n.onUpdate=_(F.update),n.onErrorCreate=_(F.errorCreate),n.onErrorUpdate=_(F.errorUpdate),n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(He).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===He.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(y.b)(Le({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Le({},Ie(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Le({},Ie(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),h()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=T.tableAdd,a=T.cancelEditing,r=T.create,i=T.edit,o=T.delete,s=T.tableSelect,c=T.update,l=He.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case c:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case s:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(He.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(T),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(He.serviceUrl)||"";if("true"===this.getAttribute(He.hidden))p.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(He.locale);P(t);var n=this.getAttribute(He.id),a=n?d.a.createElement(Ae,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Me,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);p.a.render(d.a.createElement(E.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(g.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(He)}}]),t}(Object(c.a)(HTMLElement));customElements.define("sub-form",We)}},[[217,1,2]]]);
//# sourceMappingURL=main.f58e6a2c.chunk.js.map