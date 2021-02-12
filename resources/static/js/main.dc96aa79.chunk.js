(window["webpackJsonpcustomer-form-widget"]=window["webpackJsonpcustomer-form-widget"]||[]).push([[0],{172:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Customer successfully saved","dataDeleted":"Customer successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"customer":{"deleteDialog":{"title":"Delete customer","description":"Are you sure?"},"notFound":"Customer not found","deleted":"Customer deleted","id":"ID","name":"entities.customer.name","partner_id":"entities.customer.partner_id","products":"entities.customer.products"}}}')},196:function(e,t,n){e.exports=n(344)},344:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),i=n(27),o=n(20),c=n(26),s=n(184),u=n(41),l=n(0),d=n.n(l),p=n(8),f=n.n(p),m=n(165),h=n.n(m),b=n(393),v=n(397),O=n(391),y=n(183),g=n(14),k=d.a.createContext(null),E=n(50),j=n(113),w=n(40),C={en:n(172)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(u.a)({},t,Object(u.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.customer.".concat(n))})}}};E.setLocale(t)}(P)},U=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},N={tableAdd:"customer.table.add",tableSelect:"customer.table.select"},F={create:"customer.form.create",update:"customer.form.update",errorCreate:"customer.form.errorCreate",errorUpdate:"customer.form.errorUpdate"},T=n(11),A=n.n(T),R=n(23),M=n(18),z=n(3),L=n.n(z),_=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(185));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function I(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(_.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(l.Component);return t.defaultProps={forwardedRef:function(){}},Object(l.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var H=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},B=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},J=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V="api/customers",G=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(V,"/").concat(n),r=q({},B(),{method:"GET"}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(V),r=q({},B(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(V),r=q({},B(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(V,"/").concat(n),r=q({},B(),{method:"DELETE"}),e.abrupt("return",J(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(4),$=n(396),ee=n(383),te=n(379),ne=n(5),ae=n(384),re=n(174),ie=n.n(re),oe=n(175),ce=n.n(oe),se=n(173),ue=n.n(se),le=n(176),de=n.n(le),pe={success:ue.a,error:ie.a,info:ce.a},fe={success:3e3,error:null,info:5e3},me=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,u=pe[s],l=fe[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(u,{className:Object(Z.a)(a.icon,a.iconStatus)}),i);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:l},d.a.createElement(ee.a,{className:Object(Z.a)(a[s],n),message:p,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};me.SUCCESS="success",me.ERROR="error",me.defaultProps={message:null,className:"",status:me.INFO="info",onClose:function(){}};var he=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(me),be=(L.a.shape({id:L.a.number,name:L.a.string,partner_id:L.a.number,products:L.a.string}),L.a.shape({name:L.a.string,partner_id:L.a.oneOfType([L.a.string,L.a.number]),products:L.a.string}),L.a.shape({name:L.a.oneOfType([L.a.bool,L.a.shape()]),partner_id:L.a.oneOfType([L.a.bool,L.a.shape()]),products:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({name:L.a.oneOfType([L.a.string,L.a.shape()]),partner_id:L.a.oneOfType([L.a.string,L.a.shape()]),products:L.a.oneOfType([L.a.string,L.a.shape()])}),n(182)),ve=n(186),Oe=n(389),ye=n(390),ge=n(392),ke=n(395),Ee=n(388),je=n(386),we=n(387),Ce=n(385),Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Ce.a,{id:"confirmation-dialog-title"},a),d.a.createElement(je.a,null,d.a.createElement(we.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Ee.a,null,d.a.createElement(Oe.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(Oe.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(l.PureComponent);Se.CONFIRM="CONFIRM",Se.DISCARD="DISCARD";var De=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Se.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,u=e.onCancelEditing,l=e.isSubmitting,p=e.t,f=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"customer-form"},d.a.createElement(ye.a,{container:!0,spacing:2},d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"customer-name",error:r.name&&a.name,helperText:f("name"),className:t.textField,onChange:i,onBlur:o,value:n.name,name:"name",label:p("entities.customer.name")})),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"customer-partner_id",error:r.partner_id&&a.partner_id,helperText:f("partner_id"),className:t.textField,type:"number",onChange:i,onBlur:o,value:n.partner_id,name:"partner_id",label:p("entities.customer.partner_id")})),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"customer-products",error:r.products&&a.products,helperText:f("products"),className:t.textField,onChange:i,onBlur:o,value:n.products,name:"products",label:p("entities.customer.products")})),s&&d.a.createElement(Se,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:p("entities.customer.deleteDialog.title"),description:p("entities.customer.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(Oe.a,{onClick:t,disabled:l},p("common.delete"))}}),d.a.createElement(Oe.a,{onClick:u,disabled:l,"data-testid":"cancel-btn"},p("common.cancel")),d.a.createElement(Oe.a,{type:"submit",color:"primary",disabled:l,"data-testid":"submit-btn"},p("common.save"))))}}]),t}(l.PureComponent);De.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Pe={name:"",partner_id:"",products:""},xe={mapPropsToValues:function(e){return e.customer||Pe},enableReinitialize:!0,validationSchema:E.object().shape({name:E.string(),partner_id:E.number(),products:E.string()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"CustomerForm"},Ue=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(be.a)(xe))(De),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n,a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(r,a);case 6:i=e.sent,this.setState((function(){return{customer:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({customer:c,notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:r(t),this.setState({customer:null,notificationMessage:a("common.dataDeleted"),notificationStatus:he.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:he.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.customer;return e="undefined"===typeof s?r("entities.customer.notFound"):null===s?r("entities.customer.deleted"):d.a.createElement(Ue,{customer:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(H,{keycloak:n},e),d.a.createElement(he,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(l.PureComponent);Ne.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Fe=I(Object(w.b)()(Ne)),Te=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:he.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(W,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(H,{keycloak:t},d.a.createElement(Ue,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(he,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(l.PureComponent);Te.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ae=I(Object(w.b)()(Te));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=function(){return window&&window.entando&&window.entando.keycloak&&Me({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Le={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},_e=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=ze(),n.onCreate=U(F.create),n.onCancelEditing=U(F.cancelEditing),n.onDelete=U(F.delete),n.onUpdate=U(F.update),n.onErrorCreate=U(F.errorCreate),n.onErrorUpdate=U(F.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Le).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Le.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Me({},Object(b.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Me({},ze(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Me({},ze(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),h()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=N.tableAdd,a=N.cancelEditing,r=N.create,i=N.edit,o=N.delete,c=N.tableSelect,s=N.update,u=Le.id;switch(t.type){case n:e.setAttribute(u,"");break;case i:e.hidden=!1,e.setAttribute(u,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(u,"");break;case c:e.setAttribute(u,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Le.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(N),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Le.serviceUrl)||"";if("true"===this.getAttribute(Le.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Le.locale);x(t);var n=this.getAttribute(Le.id),a=n?d.a.createElement(Fe,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ae,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Le)}}]),t}(Object(s.a)(HTMLElement));customElements.define("customer-form",_e)}},[[196,1,2]]]);
//# sourceMappingURL=main.dc96aa79.chunk.js.map