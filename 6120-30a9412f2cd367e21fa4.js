(self.webpackChunkmega_app_2=self.webpackChunkmega_app_2||[]).push([[6120,1631,9602,6983,882],{42928:(e,t,n)=>{"use strict";n.r(t);var r=n(15901),o=n.n(r),a=n(10805),i=n.n(a),c=n(62804);n(57957),n(98034);const l=JSON.parse('{"organizer":{"id":"organizer","title":"Organizer","version":"0.0.0","route":"organizer","requiresPatientContext":false,"pages":[{"navigationKey":"my-day","label":"My Day","page":"MyDay"},{"navigationKey":"patient-search","label":"Patient Search","page":"PatientSearch"}]},"chart":{"id":"chart","title":"Chart","version":"0.0.1","route":"chart","requiresPatientContext":true,"pages":[{"navigationKey":"chart-review","label":"Chart Review","page":"ChartReview"},{"navigationKey":"handoff","label":"Handoff","page":"Handoff"},{"navigationKey":"active-orders","label":"Active Orders","page":"ActiveOrders"},{"navigationKey":"inactive-orders","label":"Inactive Orders","page":"InactiveOrders"},{"navigationKey":"note-templates","label":"Note Templates","page":"NoteTemplates"},{"navigationKey":"in-progress-notes","label":"In Progress Notes","page":"InProgressNotes"}]}}');var u=o().createContext();const s=function(e){var t=e.children,n=(0,c.useLocation)();console.log("location in context",n);var r=n.pathname.slice(1),a=l[r]||l.organizer,i=o().useMemo((function(){return{current:a,applications:l}}),[a]);return o().createElement(u.Provider,{value:i},t)};var d=n(25033),f=n.n(d),m=n(39914),p=n.n(m),y=n(27385),g=n(50826),v=n(61654),h=n(55281),b=n(57841),E=n(69293),O=n.n(E),w=n(24395),j=n.n(w),S=n(23913),P=n.n(S),k=n(44507),C=n.n(k),I=n(47166),A=n.n(I),L=o().createContext();const x=function(e){var t=e.children,n=(0,c.useLocation)().search.slice(1),r=o().useMemo((function(){return{data:n}}),[n]);return o().createElement(L.Provider,{value:r},t)};var N=n(45697),R=n.n(N),M=n(93670),D=n(34171),T={onRequestClose:R().func.isRequired},K=function(e){var t=e.onRequestClose,n=o().useContext(u),r=(0,c.useHistory)(),a="".concat(window.location.pathname,"#/");return o().createElement(O(),{title:"Application Switcher",onRequestClose:t},o().createElement(M.ZP,{dividerStyle:"bottom-only",paddingStyle:"standard"},Object.values(n.applications).filter((function(e){return n.current.id!==e.id})).map((function(e){return o().createElement(M.ck,{key:e.id},o().createElement(D.ZP,{href:"".concat(a).concat(e.route),style:{padding:".5rem"},onClick:function(n){return n.preventDefault(),t(),r.push("/".concat(e.route)),!1}},e.title),o().createElement(D.ZP,{href:"".concat(a).concat(e.route),variant:"external",target:"_blank",style:{padding:".5rem"}}))}))))};K.propTypes=T;const q=K;var U=n(55142);const _=JSON.parse('{"MyDay":{"url":"https://mjhenkes.github.io/organizer-container/remoteEntry.js","scope":"organizer","module":"./PatientList"},"PatientSearch":{"url":"https://mjhenkes.github.io/organizer-container/remoteEntry.js","scope":"organizer","module":"./PatientSearch"},"ChartReview":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./ChartReview"},"Handoff":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./Handoff"},"ActiveOrders":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./ActiveOrders"},"InactiveOrders":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./InactiveOrders"},"NoteTemplates":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./NoteTemplates"},"InProgressNotes":{"url":"https://mjhenkes.github.io/chart-container/remoteEntry.js","scope":"chart","module":"./InProgressNotes"}}');function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function Y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){F(a,r,o,i,c,"next",e)}function c(e){F(a,r,o,i,c,"throw",e)}i(void 0)}))}}var J={},V={},G=function(e){return new Promise((function(t,n){if(e){var r=document.createElement("script");r.src=e,r.type="text/javascript",r.async=!0,r.onload=function(){console.log("Dynamic Script Loaded: ".concat(e)),r.parentNode.removeChild(r),t()},r.onerror=function(e){n(e)},document.head.appendChild(r)}else n(new Error("No url Provided."))}))},Q=function(e){var t=e.url,r=e.scope,o=e.module;return Y(regeneratorRuntime.mark((function e(){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return e.next=4,n.I("default");case 4:return a=window[r],e.next=7,a.init(n.S.default);case 7:return e.next=9,window[r].get(o);case 9:return i=e.sent,c=i(),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})))},W=Object.entries(_).reduce((function(e,t){var n=B(t,2),r=n[0],a=n[1];return e[r]=o().lazy(Q(a)),e}),{});const X=function(e){return J[e]?V[e]:W[e]},ee=function(){return Object.keys(_).reduce((function(e,t){return J[t]?e[t]=Z({},J[t]):e[t]=Z({},_[t]),e}),{})},te=function(e,t){J[e]=t,V[e]=o().lazy(Q(t))},ne=function(e){return delete J[e],_[e]};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le={onRequestClose:R().func.isRequired},ue=function(e){var t=e.onRequestClose;console.log("modal");var n=ie(o().useState(ee()),2),r=n[0],a=n[1];return o().createElement(O(),{title:"Module Override",onRequestClose:t},o().createElement(M.ZP,{dividerStyle:"bottom-only",paddingStyle:"standard"},Object.entries(r).map((function(e){var t=ie(e,2),n=t[0],i=t[1];return o().createElement(M.ck,{key:n},o().createElement("label",{style:{display:"inline-block"}},n),o().createElement(U.Z,{name:"default input",value:i.url,onChange:function(e){console.log(e.target.value),r[n].url=e.target.value,console.log(r),a(oe({},r))},ariaLabel:"Default"}),o().createElement(h.default,{text:"Save",onClick:function(){return te(n,r[n])}}),o().createElement(h.default,{text:"Revert",onClick:function(){r[n]=ne(n),console.log(r),a(oe({},r))}}))}))))};ue.propTypes=le;const se=ue;var de=n(26235);function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const pe=function(){var e=o().useContext(u),t=fe(o().useState(e.current.pages[0].navigationKey),2),n=t[0],r=t[1];return o().useEffect((function(){function e(e){r(e.detail)}return window.addEventListener("terra-application-demo.nav-c.navigate",e),function(){window.removeEventListener("terra-application-demo.nav-c.navigate",e)}})),o().createElement(o().Suspense,{fallback:"Loading layout"},o().createElement(de.SecondaryNavigationLayout,{id:"nav-c-layout",label:e.current.title,activeNavigationKey:n,onSelectNavigationItem:function(e){r(e)},renderNavigationFallback:function(){return o().createElement("div",null,"404")}},e.current.pages.map((function(e){var t=X(e.page);return o().createElement(de.NavigationItem,{key:e.navigationKey,navigationKey:e.navigationKey,label:e.label,renderPage:function(){return o().createElement(t,{label:e.label,key:e.navigationKey,pageKey:e.navigationKey})}})}))))};function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var he=A().bind({rounded:"DemoApplicationNavigationLayout-module__rounded___1kAh7"});const be=function(){var e=o().useContext(L),t=o().useContext(u);console.log(t);var n=ge(o().useState(!1),2),r=n[0],a=n[1],i=ge(o().useState(!1),2),c=i[0],l=i[1];return e.data?document.title="".concat(t.current.title,": ").concat(e.data):document.title=t.current.title,o().createElement(o().Fragment,null,o().createElement(P(),{conceptDescription:"Concept ".concat(e.data),layoutBanner:e.data?o().createElement("div",{style:{padding:".4rem",backgroundColor:"#014979"}},o().createElement(b.Z,{className:he("rounded"),age:"25 Years",dateOfBirth:"May 9, 1993",gender:"Male",personName:"Patient ".concat(e.data)})):void 0,modalBanner:e.data?o().createElement(b.Z,{age:"25 Years",dateOfBirth:"May 9, 1993",gender:"Male",personName:"Patient ".concat(e.data)}):void 0},o().createElement(C(),null,o().createElement(j(),ye({id:"demo-application",extensionItems:[{key:"moduleOverride",icon:o().createElement(g.Z,null),text:"Module Override"},{key:"appSwitch",icon:o().createElement(v.Z,null),text:"Application Switcher"}],onSelectExtensionItem:function(e){"moduleOverride"===e&&l(!0),"appSwitch"===e&&a(!0)},utilityItems:[{key:"custom-utility-item",text:"Custom Utility Item"}],onSelectUtilityItem:function(e){"custom-utility-item"===e&&console.log("Custom Utility Item selected")},onSelectHelp:function(){},renderNavigationFallback:function(){return o().createElement("div",null,"404")}},t.current.requiresPatientContext&&!e.data?{children:o().createElement("div",null," Choose a patient ")}:{renderLayout:function(){return o().createElement(pe,null)}})))),r&&o().createElement(q,{onRequestClose:function(){a(!1)}}),c&&o().createElement(se,{onRequestClose:function(){l(!1)}}))};var Ee=n(14337),Oe=n.n(Ee),we=n(2344),je=n.n(we),Se=n(4001),Pe=n(58743);function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ie={username:"demouser",firstName:"Demo",lastName:"User"},Ae={padding:"0 1.5rem"},Le=function(e){var t,n=e.children,r=o().useContext(Pe.ApplicationIntlContext),a=o().useRef(),i=ke(o().useState({isLoggedIn:!0,isLoggedOut:!1,isLocked:!1}),2),c=i[0],l=i[1],u=o().useMemo((function(){return{logout:function(){a.current.resolvePrompts().then((function(){l({isLoggedIn:!1,isLoggedOut:!0,isLocked:!1})}))},lock:function(){a.current.resolvePrompts().then((function(){l({isLoggedIn:!1,isLoggedOut:!1,isLocked:!0})}))}}}),[r]);return c.isLoggedOut&&(t=o().createElement(Oe(),null,o().createElement("main",{style:Ae},o().createElement("h1",null,"Logged Out"),o().createElement("p",null,"You have been logged out."),o().createElement("br",null),o().createElement(h.default,{text:"Reload",onClick:function(){window.location.reload()}})))),c.isLocked&&(t=o().createElement(je().Provider,{value:Ie},o().createElement(Oe(),{onSelectLogout:function(){l({isLoggedIn:!1,isLocked:!1,isLoggedOut:!0})}},o().createElement("main",{style:Ae},o().createElement("h1",null,"Session Locked"),o().createElement("br",null),o().createElement(h.default,{text:"Unlock Session",onClick:function(){l({isLoggedIn:!0,isLocked:!1,isLoggedOut:!1})}}),o().createElement(h.default,{text:"Log Out",onClick:u.logout}))))),c.isLoggedIn&&(t=o().createElement(je().Provider,{value:Ie},n)),o().createElement(Se.UnsavedChangesPromptCheckpoint,{ref:function(e){a.current=e}},t||o().createElement(Oe(),{id:"demo-app-login-page"},o().createElement("main",{style:Ae},o().createElement("h1",null,"Not Logged In"),o().createElement("br",null),o().createElement(h.default,{text:"Log In",onClick:function(){l({isLoggedIn:!0,isLocked:!1,isLoggedOut:!1})}}))))};Le.propTypes={};const xe=Le;window.TEST_APP_TIMEOUT=3e3,document.body.setAttribute("tabindex",-1),document.addEventListener("terra-application-demo.dismiss-transient-content",(function(){(0,y.dismissTransientPresentations)()}));const Ne=function(){return o().createElement(xe,null,o().createElement(x,null,o().createElement(s,null,o().createElement(be,null))))};const Re=function(){var e=(0,c.useLocation)(),t=o().useContext(u);return console.log("location:",e),o().createElement(f(),null,o().createElement(p(),{applicationName:t.current.title,applicationVersion:t.current.version,key:t.current.id},o().createElement(Ne,null)))};i().render(o().createElement(c.HashRouter,null,o().createElement(s,null,o().createElement(Re,null))),document.getElementById("root"))}}]);