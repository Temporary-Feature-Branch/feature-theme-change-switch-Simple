/*! For license information please see 412.280d6025.chunk.js.LICENSE.txt */
(self.webpackChunksimple=self.webpackChunksimple||[]).push([[412],{9412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var o=r(5043),n=r(7115),i=r.n(n),a=(r(6473),r(9837)),s=r(5173),c=r.n(s);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d.apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.createElement("div",d({},t,{ref:this.handleRecaptchaRef}))},n}(o.Component);p.displayName="ReCAPTCHA",p.propTypes={sitekey:c().string.isRequired,onChange:c().func,grecaptcha:c().object,theme:c().oneOf(["dark","light"]),type:c().oneOf(["image","audio"]),tabindex:c().number,onExpired:c().func,onErrored:c().func,size:c().oneOf(["compact","normal","invisible"]),stoken:c().string,hl:c().string,badge:c().oneOf(["bottomright","bottomleft","inline"])},p.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var u=r(219),f=r.n(u);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)}var h={},y=0;var b="onloadcallback";const g=(v=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+b+"&render=explicit"},x=(x={callbackName:b,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function i(e,r){var o;return(o=t.call(this,e,r)||this).state={},o.__scriptURL="",o}n=t,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+y++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[x.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),o=x,n=o.globalName,i=o.callbackName,a=o.scriptId;if(n&&"undefined"!==typeof window[n]&&(h[t]={loaded:!0,observers:{}}),h[t]){var s=h[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var l in d.src=t,d.async=!0,x.attributes)d.setAttribute(l,x.attributes[l]);a&&(d.id=a);var p=function(e){if(h[t]){var r=h[t].observers;for(var o in r)e(r[o])&&delete r[o]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=h[t];e&&(e.loaded=!0,p((function(t){return!i&&(t(e),!0)})))},d.onerror=function(){var e=h[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===x.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var o=h[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===x.removeOnUnmount&&delete h[e])},a.render=function(){var t=x.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=n,(0,o.createElement)(e,i)},i}(o.Component),n=(0,o.forwardRef)((function(e,t){return(0,o.createElement)(r,m({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:c().func},f()(n,e)})(p);var v,x;const w=g;var C=r(579);const S={in:{opacity:1,x:0},out:{opacity:0,x:"-100vw"},upIn:{opacity:1,y:0},upOut:{opacity:0,y:"-100vh"},downOut:{opacity:0,y:"100vh"},comeLeftOut:{opacity:0,x:"100vw"},zoomInit:{scale:0},zoomFinal:{scale:1}},_={transition:"linear",duration:4};const O=function(e){const t={light:{textColor:"text-black",inputBgColor:"",inputBorderColor:"",bgColor:"bg-white",boxColor:"bg-gray-300",borderColor:"border-gray-500"},sw:{textColor:"text-black",inputBgColor:"bg-black",inputBorderColor:"bg-gray-900",bgColor:"bg-black",boxColor:"bg-yellow-300",borderColor:"border-yellow-200"},dark:{textColor:"text-indigo-500",inputBgColor:"bg-gray-800",inputBorderColor:"",bgColor:"bg-gray-900",boxColor:"bg-gray-700",borderColor:"border-gray-800"}},r=()=>{e.setVerified(!1),document.getElementById("open").classList.add("hidden"),document.getElementById("dis").classList.remove("hidden")},n=t=>{let r=!0,o=!0;var n;t.preventDefault(),e.verified?(""!==document.getElementById("in-email").value&&(n=document.getElementById("in-email").value,String(n).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))||(document.getElementById("in-email").classList.add("border-red-500"),r=!1),""===document.getElementById("in-msg").value&&(document.getElementById("in-msg").classList.add("border-red-500"),o=!1)):(r=!1,o=!1),r&&document.getElementById("in-email").classList.remove("border-red-500"),o&&document.getElementById("in-msg").classList.remove("border-red-500"),r&&o&&document.getElementById("form").submit()};return(0,o.useEffect)((()=>{i().init()}),[]),(0,C.jsx)("div",{children:(0,C.jsxs)("div",{className:"transition-all ease-linear duration-500 h-fit min-h-screen min-w-full w-fit ".concat(t[e.theme].bgColor," flex justify-center items-center"),children:[(0,C.jsxs)("div",{className:"z-10 absolute h-screen w-screen !opacity-60 blur-2xl overflow-hidden",children:[(0,C.jsx)("div",{className:"absolute top-1/2 md:top-1/4 left-[10%] md:left-1/4 h-1/3 md:h-auto md:w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000"}),(0,C.jsx)("div",{className:"absolute top-1/2 md:top-1/4 left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something"}),(0,C.jsx)(a.P.div,{transition:_,initial:"upOut",animate:"upIn",exit:"upOut",variants:S,className:"absolute top-1/3 md:top-[20%] left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000"})]}),(0,C.jsx)(a.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"z-20 phone_landscape:my-2 flex justify-center backdrop-blur-2xl rounded-lg",children:(0,C.jsxs)("div",{className:"transition-all ease-linear duration-500 flex flex-col sm:flex-row items-center border ".concat(t[e.theme].borderColor," ").concat(t[e.theme].boxColor," bg-opacity-80 rounded-lg"),children:[(0,C.jsx)("div",{"data-blobity-offset-y":"10",style:{fontFamily:"Caveat"},className:"text-center phone_landscape:mx-1 font-extrabold mt-6 pr-3 md:pr-0 m-2 ".concat(t[e.theme].textColor," text-5xl w-full md:ml-6 md:mr-20"),children:"\ud83d\udcd1Contact Me"}),(0,C.jsxs)("form",{id:"form",onSubmit:n,action:"https://formcarry.com/s/rJM8b8RJ5Ob",method:"POST",acceptCharset:"UTF-8",className:"flex flex-col phone_landscape:my-0 phone_landscape:mx-2 text-white my-4 md:mr-6 m-2 justify-center w-[90%]",children:[(0,C.jsx)("input",{id:"in-name","data-blobity-radius":"8",name:"firstName",spellCheck:"false",className:"transition-all ease-linear duration-500 w-full m-2 self-center p-2 rounded-md ".concat(t[e.theme].inputBgColor),placeholder:"Name",type:"text"}),(0,C.jsx)("input",{id:"in-email","data-blobity-radius":"8",name:"email",className:"transition-all ease-linear duration-500 w-full m-2 self-center p-2 rounded-md ".concat(t[e.theme].inputBgColor),placeholder:"Email*",type:"email"}),(0,C.jsx)("input",{id:"in-msg","data-blobity-radius":"8",name:"anotherInput",spellCheck:"false",autoComplete:"off",className:"transition-all ease-linear duration-500 resize-none w-full m-2 self-center p-2 rounded-md ".concat(t[e.theme].inputBgColor),placeholder:"Message*",type:"text"}),(0,C.jsx)("span",{className:"flex w-full pr-4 phone_landscape:pr-0 md:pr-0",required:!0,children:(0,C.jsx)(w,{onErrored:r,onExpired:r,onChange:()=>{e.setVerified(!0),document.getElementById("open").classList.remove("hidden"),document.getElementById("dis").classList.add("hidden")},className:"w-fit self-center",sitekey:"6LfixFEeAAAAAKRpAJgxd9pXYGf5cKrdP576hFyy",theme:"light"===e.theme?"light":"dark"})}),(0,C.jsx)("button",{id:"open","data-blobity-radius":"8",className:"hidden cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-900 bg-indigo-700 rounded-md",type:"submit",children:"Submit"}),(0,C.jsx)("button",{onClick:n,disabled:!0,id:"dis","data-blobity-radius":"8",className:"cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-500 bg-indigo-400 rounded-md",type:"button",children:"Submit"}),(0,C.jsx)("input",{type:"hidden",name:"_gotcha"})]})]})})]})})}},219:(e,t,r)=>{"use strict";var o=r(3763),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return o.isMemo(e)?a:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var d=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!==typeof r){if(m){var n=f(r);n&&n!==m&&e(t,n,o)}var a=l(r);p&&(a=a.concat(p(r)));for(var s=c(t),h=c(r),y=0;y<a.length;++y){var b=a[y];if(!i[b]&&(!o||!o[b])&&(!h||!h[b])&&(!s||!s[b])){var g=u(r,b);try{d(t,b,g)}catch(v){}}}}return t}},4983:(e,t)=>{"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case d:case u:case y:case h:case c:return e;default:return t}}case n:return t}}}function C(e){return w(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=d,t.ContextProvider=c,t.Element=o,t.ForwardRef=u,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return C(e)||w(e)===l},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===d},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===s||e===a||e===f||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===d||e.$$typeof===u||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b)},t.typeOf=w},3763:(e,t,r)=>{"use strict";e.exports=r(4983)},1497:(e,t,r)=>{"use strict";var o=r(3218);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=412.280d6025.chunk.js.map