(self.webpackChunkmega_app_2=self.webpackChunkmega_app_2||[]).push([[1672,5698,1631,9602,6983,882,3510,8665],{44491:(e,t,n)=>{"use strict";var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useActiveMainPage",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ApplicationContainerContext",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useApplicationContainer",{enumerable:!0,get:function(){return i.useApplicationContainer}}),Object.defineProperty(t,"applicationContainerContextShape",{enumerable:!0,get:function(){return i.contextShape}}),Object.defineProperty(t,"ApplicationConceptContext",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useApplicationConcept",{enumerable:!0,get:function(){return f.useApplicationConcept}}),Object.defineProperty(t,"applicationConceptContextShape",{enumerable:!0,get:function(){return f.contextShape}}),t.default=void 0;var u=r(n(53305)),o=r(n(95773)),i=c(n(49146)),f=c(n(92488));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var l=u.default;t.default=l},95773:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(63038)),u=r(n(15901)),o=r(n(37726)),i=r(n(13983)),f=function(){var e=u.default.useContext(i.default),t=u.default.useContext(o.default),n=u.default.useState(),r=(0,a.default)(n,2),f=r[0],p=r[1];return u.default.useEffect((function(){t.navigationKeys.filter((function(t,n){return((null==e?void 0:e.parentNavigationKeys)||[])[n]===t})).length===t.navigationKeys.length?p(e):p(void 0)}),[t.navigationKeys,e,f]),f};t.default=f}}]);