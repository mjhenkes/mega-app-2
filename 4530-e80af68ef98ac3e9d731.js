(self.webpackChunkmega_app_2=self.webpackChunkmega_app_2||[]).push([[4530],{54530:(e,t,n)=>{"use strict";n.r(t);var r=n(15901),o=n.n(r),a=n(10805),i=n.n(a),l=n(62804);n(57957),n(98034);function u(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){u(a,r,o,i,l,"next",e)}function l(e){u(a,r,o,i,l,"throw",e)}i(void 0)}))}}var s=function(e){return new Promise((function(t,n){if(e){var r=document.createElement("script");r.src=e,r.type="text/javascript",r.async=!0,r.onload=function(){r.parentNode.removeChild(r),t()},r.onerror=function(e){n(e)},document.head.appendChild(r)}else n(new Error("No url Provided."))}))};const f=function(e){var t=e.url,r=e.scope,o=e.module;return c(regeneratorRuntime.mark((function e(){var a,i,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t);case 3:e.next=10;break;case 5:throw e.prev=5,e.t0=e.catch(0),(a=Error()).message="boom",a;case 10:return e.next=12,n.I("default");case 12:return i=window[r],e.next=15,i.init(n.S.default);case 15:return e.next=17,window[r].get(o);case 17:return l=e.sent,u=l(),e.abrupt("return",u);case 20:case"end":return e.stop()}}),e,null,[[0,5]])})))};var d=o().createContext();const m=function(e){var t=e.modules,n=e.children;return o().createElement(d.Provider,{value:t},n)};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=o().createContext(),E=window.localStorage;const O=function(e){var t=e.children,n=(0,l.useLocation)().pathname.slice(1),a=v(o().useState({isLoading:!0,hasError:!1}),2),i=a[0],u=a[1],c=v(o().useState({applications:{},modules:{}}),2),s=c[0],d=c[1],p=v(o().useState(),2),y=p[0],h=p[1];(0,r.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("config/AppConfig.json",{signal:t,headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){d(e),u({isLoading:!1,hasError:!1})})).catch((function(){u({isLoading:!1,hasError:!0})})),function(){e.abort()}}),[]),(0,r.useEffect)((function(){h(JSON.parse(E.getItem("OverrideConfig")))}),[]);var O=i.isLoading,w=i.hasError,S=y||s,C=S.applications,A=S.modules;console.log("conf",s);var L=C[n],k={};L&&(k=Object.keys(null==L?void 0:L.modules).reduce((function(e,t){return e[t]=L.modules[t].map((function(e){return g(g({},e),{},{component:o().lazy(f(A[t][e.moduleKey]))})})),e}),{})),console.log("loadedModules",k);var x=o().useMemo((function(){return{current:L,applications:C,conf:S,setOverrideConfig:function(e){E.setItem("OverrideConfig",JSON.stringify(e)),h(e)},resetOverrideConfig:function(){E.removeItem("OverrideConfig"),h()}}}),[L,C,S]);return O?o().createElement("div",null,"loading"):w?o().createElement("div",null,"error"):o().createElement(b.Provider,{value:x},o().createElement(m,{modules:k},t))};var w=n(25033),S=n.n(w),C=n(39914),A=n.n(C),L=n(27385),k=(n(50826),n(38602)),x=n(61654),I=n(55281),j=n(57841),P=n(69293),N=n.n(P),R=n(24395),M=n.n(R),T=n(23913),U=n.n(T),_=n(44507),q=n.n(_),K=n(61768),D=n.n(K),Z=n(47166),B=n.n(Z),$=o().createContext();const z=function(e){var t=e.children,n=(0,l.useLocation)().search.slice(1),r=o().useMemo((function(){return{data:n}}),[n]);return o().createElement($.Provider,{value:r},t)};var F=n(45697),J=n.n(F),H=n(93670),Y=n(34171),V={onRequestClose:J().func.isRequired},G=function(e){var t=e.onRequestClose,n=o().useContext(b),r=(0,l.useHistory)(),a="".concat(window.location.pathname,"#/");return o().createElement(N(),{title:"Application Switcher",onRequestClose:t},o().createElement(H.ZP,{dividerStyle:"bottom-only",paddingStyle:"standard"},Object.values(n.applications).filter((function(e){return n.current.id!==e.id})).map((function(e){return o().createElement(H.ck,{key:e.id},o().createElement(Y.ZP,{href:"".concat(a).concat(e.route),style:{padding:".5rem"},onClick:function(n){return n.preventDefault(),t(),r.push("/".concat(e.route)),!1}},e.title),o().createElement(Y.ZP,{href:"".concat(a).concat(e.route),variant:"external",target:"_blank",style:{padding:".5rem"}}))}))))};G.propTypes=V;const Q=G;var W=n(61877),X=n(60377);function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne={onRequestClose:J().func.isRequired},re=function(e){var t=e.onRequestClose,n=o().useContext(b);console.log("modal");var r=ee(o().useState(JSON.stringify(n.conf,null,2)),2),a=r[0],i=r[1];return console.log(a),o().createElement(N(),{title:"Module Override",size:"huge",footer:o().createElement(X.default,{end:o().createElement(o().Fragment,null,o().createElement(I.default,{text:"Save",onClick:function(){n.setOverrideConfig(JSON.parse(a)),t()}}),o().createElement(I.default,{text:"Reset",onClick:function(){n.resetOverrideConfig(),t()}}))}),onRequestClose:t},o().createElement(W.ZP,{isAutoResizable:!0,defaultValue:a,id:"resizable",onChange:function(e){console.log(e.target.value),i(e.target.value)}}))};re.propTypes=ne;const oe=re;var ae=n(26235);function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ue=function(){var e=o().useContext(b),t=o().useContext(d),n=ie(o().useState(t.pages[0].navigationKey),2),r=n[0],a=n[1];return o().useEffect((function(){function e(e){a(e.detail)}return window.addEventListener("terra-application-demo.nav-c.navigate",e),function(){window.removeEventListener("terra-application-demo.nav-c.navigate",e)}})),o().createElement(o().Suspense,{fallback:"Loading layout"},o().createElement(ae.SecondaryNavigationLayout,{id:"nav-c-layout",label:e.current.title,activeNavigationKey:r,onSelectNavigationItem:function(e){a(e)},renderNavigationFallback:function(){return o().createElement("div",null,"404")}},t.pages.map((function(e){var t=e.component;return o().createElement(ae.NavigationItem,{key:e.navigationKey,navigationKey:e.navigationKey,label:e.label,renderPage:function(){return o().createElement(t,{label:e.label,key:e.navigationKey,pageKey:e.navigationKey})}})}))))};function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var de=B().bind({rounded:"DemoApplicationNavigationLayout-module__rounded___1kAh7"});const me=function(){var e=o().useContext($),t=o().useContext(b);console.log(t);var n=se(o().useState(!1),2),r=n[0],a=n[1],i=se(o().useState(!1),2),l=i[0],u=i[1];return e.data?document.title="".concat(t.current.title,": ").concat(e.data):document.title=t.current.title,o().createElement(o().Fragment,null,o().createElement(U(),{conceptDescription:"Concept ".concat(e.data),layoutBanner:e.data?o().createElement("div",{style:{padding:".4rem",backgroundColor:"#014979"}},o().createElement(j.Z,{className:de("rounded"),age:"25 Years",dateOfBirth:"May 9, 1993",gender:"Male",personName:"Patient ".concat(e.data)})):void 0,modalBanner:e.data?o().createElement(j.Z,{age:"25 Years",dateOfBirth:"May 9, 1993",gender:"Male",personName:"Patient ".concat(e.data)}):void 0},o().createElement(q(),null,o().createElement(M(),ce({id:"demo-application",extensionItems:[{key:"moduleOverride",icon:o().createElement(k.Z,null),text:"Module Override"},{key:"appSwitch",icon:o().createElement(x.Z,null),text:"Application Switcher"}],onSelectExtensionItem:function(e){"moduleOverride"===e&&u(!0),"appSwitch"===e&&a(!0)},utilityItems:[{key:"custom-utility-item",text:"Custom Utility Item"}],onSelectUtilityItem:function(e){"custom-utility-item"===e&&console.log("Custom Utility Item selected")},onSelectHelp:function(){},renderNavigationFallback:function(){return o().createElement("div",null,"404")}},t.current.requiresPatientContext&&!e.data?{children:o().createElement("div",null," Choose a patient ")}:{renderLayout:function(){return o().createElement(D(),null,o().createElement(ue,null))}})))),r&&o().createElement(Q,{onRequestClose:function(){a(!1)}}),l&&o().createElement(oe,{onRequestClose:function(){u(!1)}}))};var pe=n(14337),ge=n.n(pe),ye=n(2344),ve=n.n(ye),he=n(4001),be=n(58743);function Ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var we={username:"demouser",firstName:"Demo",lastName:"User"},Se={padding:"0 1.5rem"},Ce=function(e){var t,n=e.children,r=o().useContext(be.ApplicationIntlContext),a=o().useRef(),i=Ee(o().useState({isLoggedIn:!0,isLoggedOut:!1,isLocked:!1}),2),l=i[0],u=i[1],c=o().useMemo((function(){return{logout:function(){a.current.resolvePrompts().then((function(){u({isLoggedIn:!1,isLoggedOut:!0,isLocked:!1})}))},lock:function(){a.current.resolvePrompts().then((function(){u({isLoggedIn:!1,isLoggedOut:!1,isLocked:!0})}))}}}),[r]);return l.isLoggedOut&&(t=o().createElement(ge(),null,o().createElement("main",{style:Se},o().createElement("h1",null,"Logged Out"),o().createElement("p",null,"You have been logged out."),o().createElement("br",null),o().createElement(I.default,{text:"Reload",onClick:function(){window.location.reload()}})))),l.isLocked&&(t=o().createElement(ve().Provider,{value:we},o().createElement(ge(),{onSelectLogout:function(){u({isLoggedIn:!1,isLocked:!1,isLoggedOut:!0})}},o().createElement("main",{style:Se},o().createElement("h1",null,"Session Locked"),o().createElement("br",null),o().createElement(I.default,{text:"Unlock Session",onClick:function(){u({isLoggedIn:!0,isLocked:!1,isLoggedOut:!1})}}),o().createElement(I.default,{text:"Log Out",onClick:c.logout}))))),l.isLoggedIn&&(t=o().createElement(ve().Provider,{value:we},n)),o().createElement(he.UnsavedChangesPromptCheckpoint,{ref:function(e){a.current=e}},t||o().createElement(ge(),{id:"demo-app-login-page"},o().createElement("main",{style:Se},o().createElement("h1",null,"Not Logged In"),o().createElement("br",null),o().createElement(I.default,{text:"Log In",onClick:function(){u({isLoggedIn:!0,isLocked:!1,isLoggedOut:!1})}}))))};Ce.propTypes={};const Ae=Ce;window.TEST_APP_TIMEOUT=3e3,document.body.setAttribute("tabindex",-1),document.addEventListener("terra-application-demo.dismiss-transient-content",(function(){(0,L.dismissTransientPresentations)()}));const Le=function(){return o().createElement(Ae,null,o().createElement(z,null,o().createElement(O,null,o().createElement(me,null))))};const ke=function(){var e=(0,l.useLocation)(),t=o().useContext(b);return console.log("location:",e),o().createElement(S(),null,o().createElement(A(),{applicationName:t.current.title,applicationVersion:t.current.version,key:t.current.id},o().createElement(Le,null)))};i().render(o().createElement(l.HashRouter,null,o().createElement(O,null,o().createElement(ke,null))),document.getElementById("root"))}}]);