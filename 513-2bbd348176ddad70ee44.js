(self.webpackChunkmega_app_2=self.webpackChunkmega_app_2||[]).push([[513,5697,4406],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},27983:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.contextShape=t.default=void 0;var n=r(15901),a=o(r(45697)),u=(0,n.createContext)(),f=a.default.shape({formatMessage:a.default.func});t.contextShape=f;var l=u;t.default=l},29805:(e,t,r)=>{"use strict";var o=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(15901)),a=o(r(45697)),u=r(60767),f=o(r(27983)),l={children:a.default.node,intl:a.default.shape({locale:a.default.string,messages:a.default.shape({}),defaultLocale:a.default.string,formatMessage:a.default.func,formatNumber:a.default.func,formatPlural:a.default.func,formatDate:a.default.func,formatTime:a.default.func,formateRelativeTime:a.default.func})},p=(0,u.injectIntl)((function(e){var t=e.children,r=e.intl;return n.default.createElement(f.default.Provider,{value:r},t)}));p.propTypes=l;var s=p;t.default=s},513:(e,t,r)=>{"use strict";var o=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationIntlContext",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"contextShape",{enumerable:!0,get:function(){return a.contextShape}}),Object.defineProperty(t,"ApplicationIntlProvider",{enumerable:!0,get:function(){return u.default}});var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(27983)),u=o(r(29805));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}},92703:(e,t,r)=>{"use strict";var o=r(50414);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,u){if(u!==o){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);