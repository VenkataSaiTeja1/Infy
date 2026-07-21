(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ya={exports:{}},ti={},Za={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),fc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),Do=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ns={};function ot(e,n,t){this.props=e,this.context=n,this.refs=ns,this.updater=t||Ja}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=ot.prototype;function Ul(e,n,t){this.props=e,this.context=n,this.refs=ns,this.updater=t||Ja}var Bl=Ul.prototype=new ts;Bl.constructor=Ul;es(Bl,ot.prototype);Bl.isPureReactComponent=!0;var Fo=Array.isArray,rs=Object.prototype.hasOwnProperty,Vl={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)rs.call(n,r)&&!is.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gt,type:e,key:l,ref:o,props:i,_owner:Vl.current}}function _c(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function jc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ro=/\/+/g;function ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):n.toString(36)}function wr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gt:case fc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ki(o,0):r,Fo(i)?(t="",e!=null&&(t=e.replace(Ro,"$&/")+"/"),wr(i,n,t,"",function(c){return c})):i!=null&&($l(i)&&(i=_c(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ro,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Fo(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ki(l,a);o+=wr(l,n,t,s,i)}else if(s=Sc(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ki(l,a++),o+=wr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,n,t){if(e==null)return e;var r=[],i=0;return wr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Nc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},bc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Vl};function os(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=ot;T.Fragment=pc;T.Profiler=hc;T.PureComponent=Ul;T.StrictMode=mc;T.Suspense=xc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;T.act=os;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Vl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)rs.call(n,s)&&!is.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Gt,type:e.type,key:i,ref:l,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};T.createElement=ls;T.createFactory=function(e){var n=ls.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:yc,render:e}};T.isValidElement=$l;T.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:Nc}};T.memo=function(e,n){return{$$typeof:wc,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=kr.transition;kr.transition={};try{e()}finally{kr.transition=n}};T.unstable_act=os;T.useCallback=function(e,n){return ue.current.useCallback(e,n)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,n){return ue.current.useEffect(e,n)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return ue.current.useMemo(e,n)};T.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";Za.exports=T;var W=Za.exports;const Lc=dc(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=W,Cc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Oc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function as(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Tc.call(n,r)&&!Ic.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Cc,type:e,key:l,ref:o,props:i,_owner:Oc.current}}ti.Fragment=Mc;ti.jsx=as;ti.jsxs=as;Ya.exports=ti;var f=Ya.exports,Ki={},ss={exports:{}},we={},us={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,C){var M=b.length;b.push(C);e:for(;0<M;){var V=M-1>>>1,X=b[V];if(0<i(X,C))b[V]=C,b[M]=X,M=V;else break e}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var C=b[0],M=b.pop();if(M!==C){b[0]=M;e:for(var V=0,X=b.length,er=X>>>1;V<er;){var yn=2*(V+1)-1,wi=b[yn],xn=yn+1,nr=b[xn];if(0>i(wi,M))xn<X&&0>i(nr,wi)?(b[V]=nr,b[xn]=M,V=xn):(b[V]=wi,b[yn]=M,V=yn);else if(xn<X&&0>i(nr,M))b[V]=nr,b[xn]=M,V=xn;else break e}}return C}function i(b,C){var M=b.sortIndex-C.sortIndex;return M!==0?M:b.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,h=null,m=3,w=!1,k=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var C=t(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=b)r(c),C.sortIndex=C.expirationTime,n(s,C);else break;C=t(c)}}function v(b){if(S=!1,p(b),!k)if(t(s)!==null)k=!0,yi(_);else{var C=t(c);C!==null&&xi(v,C.startTime-b)}}function _(b,C){k=!1,S&&(S=!1,d(L),L=-1),w=!0;var M=m;try{for(p(C),h=t(s);h!==null&&(!(h.expirationTime>C)||b&&!Ee());){var V=h.callback;if(typeof V=="function"){h.callback=null,m=h.priorityLevel;var X=V(h.expirationTime<=C);C=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(s)&&r(s),p(C)}else r(s);h=t(s)}if(h!==null)var er=!0;else{var yn=t(c);yn!==null&&xi(v,yn.startTime-C),er=!1}return er}finally{h=null,m=M,w=!1}}var y=!1,N=null,L=-1,z=5,E=-1;function Ee(){return!(e.unstable_now()-E<z)}function ut(){if(N!==null){var b=e.unstable_now();E=b;var C=!0;try{C=N(!0,b)}finally{C?ct():(y=!1,N=null)}}else y=!1}var ct;if(typeof u=="function")ct=function(){u(ut)};else if(typeof MessageChannel<"u"){var Ao=new MessageChannel,cc=Ao.port2;Ao.port1.onmessage=ut,ct=function(){cc.postMessage(null)}}else ct=function(){P(ut,0)};function yi(b){N=b,y||(y=!0,ct())}function xi(b,C){L=P(function(){b(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,yi(_))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var M=m;m=C;try{return b()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,C){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var M=m;m=b;try{return C()}finally{m=M}},e.unstable_scheduleCallback=function(b,C,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,b){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,b={id:g++,callback:C,priorityLevel:b,startTime:M,expirationTime:X,sortIndex:-1},M>V?(b.sortIndex=M,n(c,b),t(s)===null&&b===t(c)&&(S?(d(L),L=-1):S=!0,xi(v,M-V))):(b.sortIndex=X,n(s,b),k||w||(k=!0,yi(_))),b},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(b){var C=m;return function(){var M=m;m=C;try{return b.apply(this,arguments)}finally{m=M}}}})(cs);us.exports=cs;var Pc=us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=W,xe=Pc;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ds=new Set,Ot={};function On(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Ot[e]=n,e=0;e<n.length;e++)ds.add(n[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Uo={};function Ac(e){return Gi.call(Uo,e)?!0:Gi.call(Ho,e)?!1:qc.test(e)?Uo[e]=!0:(Ho[e]=!0,!1)}function Dc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,n,t,r){if(n===null||typeof n>"u"||Dc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wl,Ql);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wl,Ql);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wl,Ql);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fc(n,t,i,r)&&(t=null),r||i===null?Ac(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),zn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),fs=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function dt(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Si;function xt(e){if(Si===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Si=n&&n[1]||""}return`
`+Si+e}var _i=!1;function ji(e,n){if(!e||_i)return"";_i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{_i=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xt(e):""}function Rc(e){switch(e.tag){case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return xt("Suspense");case 19:return xt("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case zn:return"Portal";case Xi:return"Profiler";case Gl:return"StrictMode";case Yi:return"Suspense";case Zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case fs:return(e._context.displayName||"Context")+".Provider";case Xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return n=e.displayName||null,n!==null?n:Ji(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return Ji(e(n))}catch{}}return null}function Hc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(n);case 8:return n===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uc(e){var n=hs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ir(e){e._valueTracker||(e._valueTracker=Uc(e))}function gs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function vs(e,n){n=n.checked,n!=null&&Kl(e,"checked",n,!1)}function nl(e,n){vs(e,n);var t=pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?tl(e,n.type,t):n.hasOwnProperty("defaultValue")&&tl(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $o(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function tl(e,n,t){(n!=="number"||Or(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(wt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function ys(e,n){var t=pn(n.value),r=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){Bc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_t[n]=_t[e]})});function ks(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_t.hasOwnProperty(e)&&_t[e]?(""+n).trim():n+"px"}function Ss(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ks(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Vc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,n){if(n){if(Vc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,Kn=null,Gn=null;function Ko(e){if(e=Zt(e)){if(typeof sl!="function")throw Error(x(280));var n=e.stateNode;n&&(n=ai(n),sl(e.stateNode,e.type,n))}}function _s(e){Kn?Gn?Gn.push(e):Gn=[e]:Kn=e}function js(){if(Kn){var e=Kn,n=Gn;if(Gn=Kn=null,Ko(e),n)for(e=0;e<n.length;e++)Ko(n[e])}}function Ns(e,n){return e(n)}function bs(){}var Ni=!1;function Ls(e,n,t){if(Ni)return e(n,t);Ni=!0;try{return Ns(e,n,t)}finally{Ni=!1,(Kn!==null||Gn!==null)&&(bs(),js())}}function Pt(e,n){var t=e.stateNode;if(t===null)return null;var r=ai(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var ul=!1;if(We)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){ul=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{ul=!1}function $c(e,n,t,r,i,l,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(g){this.onError(g)}}var jt=!1,Ir=null,Pr=!1,cl=null,Wc={onError:function(e){jt=!0,Ir=e}};function Qc(e,n,t,r,i,l,o,a,s){jt=!1,Ir=null,$c.apply(Wc,arguments)}function Kc(e,n,t,r,i,l,o,a,s){if(Qc.apply(this,arguments),jt){if(jt){var c=Ir;jt=!1,Ir=null}else throw Error(x(198));Pr||(Pr=!0,cl=c)}}function In(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Es(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Go(e){if(In(e)!==e)throw Error(x(188))}function Gc(e){var n=e.alternate;if(!n){if(n=In(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Go(i),e;if(l===r)return Go(i),n;l=l.sibling}throw Error(x(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function Cs(e){return e=Gc(e),e!==null?Ms(e):null}function Ms(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ms(e);if(n!==null)return n;e=e.sibling}return null}var Ts=xe.unstable_scheduleCallback,Xo=xe.unstable_cancelCallback,Xc=xe.unstable_shouldYield,Yc=xe.unstable_requestPaint,$=xe.unstable_now,Zc=xe.unstable_getCurrentPriorityLevel,Jl=xe.unstable_ImmediatePriority,Os=xe.unstable_UserBlockingPriority,zr=xe.unstable_NormalPriority,Jc=xe.unstable_LowPriority,Is=xe.unstable_IdlePriority,ri=null,Fe=null;function ed(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:rd,nd=Math.log,td=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(nd(e)/td|0)|0}var or=64,ar=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=kt(a):(l&=o,l!==0&&(r=kt(l)))}else o=t&~i,o!==0?r=kt(o):l!==0&&(r=kt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ie(n),i=1<<t,r|=e[t],n&=~i;return r}function id(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ie(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=id(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=t}function od(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ie(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function eo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ie(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var I=0;function zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qs,no,As,Ds,Fs,fl=!1,sr=[],ln=null,on=null,an=null,zt=new Map,qt=new Map,en=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(n.pointerId)}}function pt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Zt(n),n!==null&&no(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function sd(e,n,t,r,i){switch(n){case"focusin":return ln=pt(ln,e,n,t,r,i),!0;case"dragenter":return on=pt(on,e,n,t,r,i),!0;case"mouseover":return an=pt(an,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return zt.set(l,pt(zt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,qt.set(l,pt(qt.get(l)||null,e,n,t,r,i)),!0}return!1}function Rs(e){var n=Sn(e.target);if(n!==null){var t=In(n);if(t!==null){if(n=t.tag,n===13){if(n=Es(t),n!==null){e.blockedOn=n,Fs(e.priority,function(){As(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);al=r,t.target.dispatchEvent(r),al=null}else return n=Zt(t),n!==null&&no(n),e.blockedOn=t,!1;n.shift()}return!0}function Zo(e,n,t){Sr(e)&&t.delete(n)}function ud(){fl=!1,ln!==null&&Sr(ln)&&(ln=null),on!==null&&Sr(on)&&(on=null),an!==null&&Sr(an)&&(an=null),zt.forEach(Zo),qt.forEach(Zo)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,fl||(fl=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ud)))}function At(e){function n(i){return mt(i,e)}if(0<sr.length){mt(sr[0],e);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&mt(ln,e),on!==null&&mt(on,e),an!==null&&mt(an,e),zt.forEach(n),qt.forEach(n),t=0;t<en.length;t++)r=en[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)Rs(t),t.blockedOn===null&&en.shift()}var Xn=Xe.ReactCurrentBatchConfig,Ar=!0;function cd(e,n,t,r){var i=I,l=Xn.transition;Xn.transition=null;try{I=1,to(e,n,t,r)}finally{I=i,Xn.transition=l}}function dd(e,n,t,r){var i=I,l=Xn.transition;Xn.transition=null;try{I=4,to(e,n,t,r)}finally{I=i,Xn.transition=l}}function to(e,n,t,r){if(Ar){var i=pl(e,n,t,r);if(i===null)qi(e,n,r,Dr,t),Yo(e,r);else if(sd(i,e,n,t,r))r.stopPropagation();else if(Yo(e,r),n&4&&-1<ad.indexOf(e)){for(;i!==null;){var l=Zt(i);if(l!==null&&qs(l),l=pl(e,n,t,r),l===null&&qi(e,n,r,Dr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else qi(e,n,r,null,t)}}var Dr=null;function pl(e,n,t,r){if(Dr=null,e=Zl(r),e=Sn(e),e!==null)if(n=In(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Es(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Dr=e,null}function Hs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Jl:return 1;case Os:return 4;case zr:case Jc:return 16;case Is:return 536870912;default:return 16}default:return 16}}var tn=null,ro=null,_r=null;function Us(){if(_r)return _r;var e,n=ro,t=n.length,r,i="value"in tn?tn.value:tn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return _r=i.slice(e,1<r?1-r:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Jo(){return!1}function ke(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Jo,this.isPropagationStopped=Jo,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var at={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=ke(at),Yt=U({},at,{view:0,detail:0}),fd=ke(Yt),Li,Ei,ht,ii=U({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(Li=e.screenX-ht.screenX,Ei=e.screenY-ht.screenY):Ei=Li=0,ht=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),ea=ke(ii),pd=U({},ii,{dataTransfer:0}),md=ke(pd),hd=U({},Yt,{relatedTarget:0}),Ci=ke(hd),gd=U({},at,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=ke(gd),yd=U({},at,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=ke(yd),wd=U({},at,{data:0}),na=ke(wd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_d[e])?!!n[e]:!1}function lo(){return jd}var Nd=U({},Yt,{key:function(e){if(e.key){var n=kd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=ke(Nd),Ld=U({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=ke(Ld),Ed=U({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Cd=ke(Ed),Md=U({},at,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=ke(Md),Od=U({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=ke(Od),Pd=[9,13,27,32],oo=We&&"CompositionEvent"in window,Nt=null;We&&"documentMode"in document&&(Nt=document.documentMode);var zd=We&&"TextEvent"in window&&!Nt,Bs=We&&(!oo||Nt&&8<Nt&&11>=Nt),ra=" ",ia=!1;function Vs(e,n){switch(e){case"keyup":return Pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function qd(e,n){switch(e){case"compositionend":return $s(n);case"keypress":return n.which!==32?null:(ia=!0,ra);case"textInput":return e=n.data,e===ra&&ia?null:e;default:return null}}function Ad(e,n){if(An)return e==="compositionend"||!oo&&Vs(e,n)?(e=Us(),_r=ro=tn=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bs&&n.locale!=="ko"?null:n.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dd[e.type]:n==="textarea"}function Ws(e,n,t,r){_s(r),n=Fr(n,"onChange"),0<n.length&&(t=new io("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var bt=null,Dt=null;function Fd(e){ru(e,0)}function li(e){var n=Rn(e);if(gs(n))return e}function Rd(e,n){if(e==="change")return n}var Qs=!1;if(We){var Mi;if(We){var Ti="oninput"in document;if(!Ti){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Ti=typeof oa.oninput=="function"}Mi=Ti}else Mi=!1;Qs=Mi&&(!document.documentMode||9<document.documentMode)}function aa(){bt&&(bt.detachEvent("onpropertychange",Ks),Dt=bt=null)}function Ks(e){if(e.propertyName==="value"&&li(Dt)){var n=[];Ws(n,Dt,e,Zl(e)),Ls(Fd,n)}}function Hd(e,n,t){e==="focusin"?(aa(),bt=n,Dt=t,bt.attachEvent("onpropertychange",Ks)):e==="focusout"&&aa()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Dt)}function Bd(e,n){if(e==="click")return li(n)}function Vd(e,n){if(e==="input"||e==="change")return li(n)}function $d(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ze=typeof Object.is=="function"?Object.is:$d;function Ft(e,n){if(ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Gi.call(n,i)||!ze(e[i],n[i]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,n){var t=sa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sa(t)}}function Gs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xs(){for(var e=window,n=Or();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Or(e.document)}return n}function ao(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wd(e){var n=Xs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gs(t.ownerDocument.documentElement,t)){if(r!==null&&ao(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ua(t,l);var o=ua(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=We&&"documentMode"in document&&11>=document.documentMode,Dn=null,ml=null,Lt=null,hl=!1;function ca(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hl||Dn==null||Dn!==Or(r)||(r=Dn,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lt&&Ft(Lt,r)||(Lt=r,r=Fr(ml,"onSelect"),0<r.length&&(n=new io("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Fn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Oi={},Ys={};We&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function oi(e){if(Oi[e])return Oi[e];if(!Fn[e])return e;var n=Fn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ys)return Oi[e]=n[t];return e}var Zs=oi("animationend"),Js=oi("animationiteration"),eu=oi("animationstart"),nu=oi("transitionend"),tu=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,n){tu.set(e,n),On(n,[e])}for(var Ii=0;Ii<da.length;Ii++){var Pi=da[Ii],Kd=Pi.toLowerCase(),Gd=Pi[0].toUpperCase()+Pi.slice(1);hn(Kd,"on"+Gd)}hn(Zs,"onAnimationEnd");hn(Js,"onAnimationIteration");hn(eu,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(nu,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function fa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Kc(r,n,void 0,e),e.currentTarget=null}function ru(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;fa(i,a,c),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;fa(i,a,c),l=s}}}if(Pr)throw e=cl,Pr=!1,cl=null,e}function A(e,n){var t=n[wl];t===void 0&&(t=n[wl]=new Set);var r=e+"__bubble";t.has(r)||(iu(n,e,2,!1),t.add(r))}function zi(e,n,t){var r=0;n&&(r|=4),iu(t,e,r,n)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Rt(e){if(!e[dr]){e[dr]=!0,ds.forEach(function(t){t!=="selectionchange"&&(Xd.has(t)||zi(t,!1,e),zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dr]||(n[dr]=!0,zi("selectionchange",!1,n))}}function iu(e,n,t,r){switch(Hs(n)){case 1:var i=cd;break;case 4:i=dd;break;default:i=to}t=i.bind(null,n,t,e),i=void 0,!ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function qi(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Ls(function(){var c=l,g=Zl(t),h=[];e:{var m=tu.get(e);if(m!==void 0){var w=io,k=e;switch(e){case"keypress":if(jr(t)===0)break e;case"keydown":case"keyup":w=bd;break;case"focusin":k="focus",w=Ci;break;case"focusout":k="blur",w=Ci;break;case"beforeblur":case"afterblur":w=Ci;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Cd;break;case Zs:case Js:case eu:w=vd;break;case nu:w=Td;break;case"scroll":w=fd;break;case"wheel":w=Id;break;case"copy":case"cut":case"paste":w=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ta}var S=(n&4)!==0,P=!S&&e==="scroll",d=S?m!==null?m+"Capture":null:m;S=[];for(var u=c,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Pt(u,d),v!=null&&S.push(Ht(u,v,p)))),P)break;u=u.return}0<S.length&&(m=new w(m,k,null,t,g),h.push({event:m,listeners:S}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&t!==al&&(k=t.relatedTarget||t.fromElement)&&(Sn(k)||k[Qe]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=c,k=k?Sn(k):null,k!==null&&(P=In(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(S=ea,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(S=ta,v="onPointerLeave",d="onPointerEnter",u="pointer"),P=w==null?m:Rn(w),p=k==null?m:Rn(k),m=new S(v,u+"leave",w,t,g),m.target=P,m.relatedTarget=p,v=null,Sn(g)===c&&(S=new S(d,u+"enter",k,t,g),S.target=p,S.relatedTarget=P,v=S),P=v,w&&k)n:{for(S=w,d=k,u=0,p=S;p;p=Pn(p))u++;for(p=0,v=d;v;v=Pn(v))p++;for(;0<u-p;)S=Pn(S),u--;for(;0<p-u;)d=Pn(d),p--;for(;u--;){if(S===d||d!==null&&S===d.alternate)break n;S=Pn(S),d=Pn(d)}S=null}else S=null;w!==null&&pa(h,m,w,S,!1),k!==null&&P!==null&&pa(h,P,k,S,!0)}}e:{if(m=c?Rn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var _=Rd;else if(la(m))if(Qs)_=Vd;else{_=Ud;var y=Hd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Bd);if(_&&(_=_(e,c))){Ws(h,_,t,g);break e}y&&y(e,m,c),e==="focusout"&&(y=m._wrapperState)&&y.controlled&&m.type==="number"&&tl(m,"number",m.value)}switch(y=c?Rn(c):window,e){case"focusin":(la(y)||y.contentEditable==="true")&&(Dn=y,ml=c,Lt=null);break;case"focusout":Lt=ml=Dn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,ca(h,t,g);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":ca(h,t,g)}var N;if(oo)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else An?Vs(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Bs&&t.locale!=="ko"&&(An||L!=="onCompositionStart"?L==="onCompositionEnd"&&An&&(N=Us()):(tn=g,ro="value"in tn?tn.value:tn.textContent,An=!0)),y=Fr(c,L),0<y.length&&(L=new na(L,e,null,t,g),h.push({event:L,listeners:y}),N?L.data=N:(N=$s(t),N!==null&&(L.data=N)))),(N=zd?qd(e,t):Ad(e,t))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(g=new na("onBeforeInput","beforeinput",null,t,g),h.push({event:g,listeners:c}),g.data=N))}ru(h,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Pt(e,t),l!=null&&r.unshift(Ht(e,l,i)),l=Pt(e,n),l!=null&&r.push(Ht(e,l,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pa(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Pt(t,l),s!=null&&o.unshift(Ht(t,s,a))):i||(s=Pt(t,l),s!=null&&o.push(Ht(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Yd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function ma(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Zd,"")}function fr(e,n,t){if(n=ma(n),ma(e)!==n&&t)throw Error(x(425))}function Rr(){}var gl=null,vl=null;function yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(nf)}:xl;function nf(e){setTimeout(function(){throw e})}function Ai(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),At(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);At(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),De="__reactFiber$"+st,Ut="__reactProps$"+st,Qe="__reactContainer$"+st,wl="__reactEvents$"+st,tf="__reactListeners$"+st,rf="__reactHandles$"+st;function Sn(e){var n=e[De];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[De]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ga(e);e!==null;){if(t=e[De])return t;e=ga(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[De]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ai(e){return e[Ut]||null}var kl=[],Hn=-1;function gn(e){return{current:e}}function D(e){0>Hn||(e.current=kl[Hn],kl[Hn]=null,Hn--)}function q(e,n){Hn++,kl[Hn]=e.current,e.current=n}var mn={},oe=gn(mn),pe=gn(!1),Ln=mn;function et(e,n){var t=e.type.contextTypes;if(!t)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Hr(){D(pe),D(oe)}function va(e,n,t){if(oe.current!==mn)throw Error(x(168));q(oe,n),q(pe,t)}function lu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(x(108,Hc(e)||"Unknown",i));return U({},t,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Ln=oe.current,q(oe,e),q(pe,pe.current),!0}function ya(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=lu(e,n,Ln),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(oe),q(oe,e)):D(pe),q(pe,t)}var Ue=null,si=!1,Di=!1;function ou(e){Ue===null?Ue=[e]:Ue.push(e)}function lf(e){si=!0,ou(e)}function vn(){if(!Di&&Ue!==null){Di=!0;var e=0,n=I;try{var t=Ue;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ue=null,si=!1}catch(i){throw Ue!==null&&(Ue=Ue.slice(e+1)),Ts(Jl,vn),i}finally{I=n,Di=!1}}return null}var Un=[],Bn=0,Br=null,Vr=0,Se=[],_e=0,En=null,Be=1,Ve="";function wn(e,n){Un[Bn++]=Vr,Un[Bn++]=Br,Br=e,Vr=n}function au(e,n,t){Se[_e++]=Be,Se[_e++]=Ve,Se[_e++]=En,En=e;var r=Be;e=Ve;var i=32-Ie(r)-1;r&=~(1<<i),t+=1;var l=32-Ie(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Be=1<<32-Ie(n)+i|t<<i|r,Ve=l+e}else Be=1<<l|t<<i|r,Ve=e}function so(e){e.return!==null&&(wn(e,1),au(e,1,0))}function uo(e){for(;e===Br;)Br=Un[--Bn],Un[Bn]=null,Vr=Un[--Bn],Un[Bn]=null;for(;e===En;)En=Se[--_e],Se[_e]=null,Ve=Se[--_e],Se[_e]=null,Be=Se[--_e],Se[_e]=null}var ye=null,ve=null,F=!1,Oe=null;function su(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=En!==null?{id:Be,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(F){var n=ve;if(n){var t=n;if(!xa(e,n)){if(Sl(e))throw Error(x(418));n=sn(t.nextSibling);var r=ye;n&&xa(e,n)?su(r,t):(e.flags=e.flags&-4097|2,F=!1,ye=e)}}else{if(Sl(e))throw Error(x(418));e.flags=e.flags&-4097|2,F=!1,ye=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!F)return wa(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yl(e.type,e.memoizedProps)),n&&(n=ve)){if(Sl(e))throw uu(),Error(x(418));for(;n;)su(e,n),n=sn(n.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?sn(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=ve;e;)e=sn(e.nextSibling)}function nt(){ve=ye=null,F=!1}function co(e){Oe===null?Oe=[e]:Oe.push(e)}var of=Xe.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function mr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ka(e){var n=e._init;return n(e._payload)}function cu(e){function n(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=fn(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,p,v){return u===null||u.tag!==6?(u=$i(p,d.mode,v),u.return=d,u):(u=i(u,p),u.return=d,u)}function s(d,u,p,v){var _=p.type;return _===qn?g(d,u,p.props.children,v,p.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ze&&ka(_)===u.type)?(v=i(u,p.props),v.ref=gt(d,u,p),v.return=d,v):(v=Tr(p.type,p.key,p.props,null,d.mode,v),v.ref=gt(d,u,p),v.return=d,v)}function c(d,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Wi(p,d.mode,v),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function g(d,u,p,v,_){return u===null||u.tag!==7?(u=bn(p,d.mode,v,_),u.return=d,u):(u=i(u,p),u.return=d,u)}function h(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$i(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return p=Tr(u.type,u.key,u.props,null,d.mode,p),p.ref=gt(d,null,u),p.return=d,p;case zn:return u=Wi(u,d.mode,p),u.return=d,u;case Ze:var v=u._init;return h(d,v(u._payload),p)}if(wt(u)||dt(u))return u=bn(u,d.mode,p,null),u.return=d,u;mr(d,u)}return null}function m(d,u,p,v){var _=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(d,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===_?s(d,u,p,v):null;case zn:return p.key===_?c(d,u,p,v):null;case Ze:return _=p._init,m(d,u,_(p._payload),v)}if(wt(p)||dt(p))return _!==null?null:g(d,u,p,v,null);mr(d,p)}return null}function w(d,u,p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(u,d,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?p:v.key)||null,s(u,d,v,_);case zn:return d=d.get(v.key===null?p:v.key)||null,c(u,d,v,_);case Ze:var y=v._init;return w(d,u,p,y(v._payload),_)}if(wt(v)||dt(v))return d=d.get(p)||null,g(u,d,v,_,null);mr(u,v)}return null}function k(d,u,p,v){for(var _=null,y=null,N=u,L=u=0,z=null;N!==null&&L<p.length;L++){N.index>L?(z=N,N=null):z=N.sibling;var E=m(d,N,p[L],v);if(E===null){N===null&&(N=z);break}e&&N&&E.alternate===null&&n(d,N),u=l(E,u,L),y===null?_=E:y.sibling=E,y=E,N=z}if(L===p.length)return t(d,N),F&&wn(d,L),_;if(N===null){for(;L<p.length;L++)N=h(d,p[L],v),N!==null&&(u=l(N,u,L),y===null?_=N:y.sibling=N,y=N);return F&&wn(d,L),_}for(N=r(d,N);L<p.length;L++)z=w(N,d,L,p[L],v),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?L:z.key),u=l(z,u,L),y===null?_=z:y.sibling=z,y=z);return e&&N.forEach(function(Ee){return n(d,Ee)}),F&&wn(d,L),_}function S(d,u,p,v){var _=dt(p);if(typeof _!="function")throw Error(x(150));if(p=_.call(p),p==null)throw Error(x(151));for(var y=_=null,N=u,L=u=0,z=null,E=p.next();N!==null&&!E.done;L++,E=p.next()){N.index>L?(z=N,N=null):z=N.sibling;var Ee=m(d,N,E.value,v);if(Ee===null){N===null&&(N=z);break}e&&N&&Ee.alternate===null&&n(d,N),u=l(Ee,u,L),y===null?_=Ee:y.sibling=Ee,y=Ee,N=z}if(E.done)return t(d,N),F&&wn(d,L),_;if(N===null){for(;!E.done;L++,E=p.next())E=h(d,E.value,v),E!==null&&(u=l(E,u,L),y===null?_=E:y.sibling=E,y=E);return F&&wn(d,L),_}for(N=r(d,N);!E.done;L++,E=p.next())E=w(N,d,L,E.value,v),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?L:E.key),u=l(E,u,L),y===null?_=E:y.sibling=E,y=E);return e&&N.forEach(function(ut){return n(d,ut)}),F&&wn(d,L),_}function P(d,u,p,v){if(typeof p=="object"&&p!==null&&p.type===qn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var _=p.key,y=u;y!==null;){if(y.key===_){if(_=p.type,_===qn){if(y.tag===7){t(d,y.sibling),u=i(y,p.props.children),u.return=d,d=u;break e}}else if(y.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ze&&ka(_)===y.type){t(d,y.sibling),u=i(y,p.props),u.ref=gt(d,y,p),u.return=d,d=u;break e}t(d,y);break}else n(d,y);y=y.sibling}p.type===qn?(u=bn(p.props.children,d.mode,v,p.key),u.return=d,d=u):(v=Tr(p.type,p.key,p.props,null,d.mode,v),v.ref=gt(d,u,p),v.return=d,d=v)}return o(d);case zn:e:{for(y=p.key;u!==null;){if(u.key===y)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){t(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Wi(p,d.mode,v),u.return=d,d=u}return o(d);case Ze:return y=p._init,P(d,u,y(p._payload),v)}if(wt(p))return k(d,u,p,v);if(dt(p))return S(d,u,p,v);mr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(t(d,u.sibling),u=i(u,p),u.return=d,d=u):(t(d,u),u=$i(p,d.mode,v),u.return=d,d=u),o(d)):t(d,u)}return P}var tt=cu(!0),du=cu(!1),$r=gn(null),Wr=null,Vn=null,fo=null;function po(){fo=Vn=Wr=null}function mo(e){var n=$r.current;D($r),e._currentValue=n}function jl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Wr=e,fo=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(fo!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Wr===null)throw Error(x(308));Vn=e,Wr.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var _n=null;function ho(e){_n===null?_n=[e]:_n.push(e)}function fu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ho(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ke(e,t)}return i=r.interleaved,i===null?(n.next=n,ho(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ke(e,t)}function Nr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,eo(e,t)}}function Sa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,r){var i=e.updateQueue;Je=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(l!==null){var h=i.baseState;o=0,g=c=s=null,a=l;do{var m=a.lane,w=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,S=a;switch(m=n,w=t,S.tag){case 1:if(k=S.payload,typeof k=="function"){h=k.call(w,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,m=typeof k=="function"?k.call(w,h,m):k,m==null)break e;h=U({},h,m);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=w,s=h):g=g.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=h}}function _a(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Jt={},Re=gn(Jt),Bt=gn(Jt),Vt=gn(Jt);function jn(e){if(e===Jt)throw Error(x(174));return e}function vo(e,n){switch(q(Vt,n),q(Bt,e),q(Re,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:il(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=il(n,e)}D(Re),q(Re,n)}function rt(){D(Re),D(Bt),D(Vt)}function mu(e){jn(Vt.current);var n=jn(Re.current),t=il(n,e.type);n!==t&&(q(Bt,e),q(Re,t))}function yo(e){Bt.current===e&&(D(Re),D(Bt))}var R=gn(0);function Kr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function xo(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var br=Xe.ReactCurrentDispatcher,Ri=Xe.ReactCurrentBatchConfig,Cn=0,H=null,K=null,Y=null,Gr=!1,Et=!1,$t=0,af=0;function re(){throw Error(x(321))}function wo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ze(e[t],n[t]))return!1;return!0}function ko(e,n,t,r,i,l){if(Cn=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,br.current=e===null||e.memoizedState===null?df:ff,e=t(r,i),Et){l=0;do{if(Et=!1,$t=0,25<=l)throw Error(x(301));l+=1,Y=K=null,n.updateQueue=null,br.current=pf,e=t(r,i)}while(Et)}if(br.current=Xr,n=K!==null&&K.next!==null,Cn=0,Y=K=H=null,Gr=!1,n)throw Error(x(300));return e}function So(){var e=$t!==0;return $t=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?H.memoizedState=Y=e:Y=Y.next=e,Y}function Le(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Y===null?H.memoizedState:Y.next;if(n!==null)Y=n,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Y===null?H.memoizedState=Y=e:Y=Y.next=e}return Y}function Wt(e,n){return typeof n=="function"?n(e):n}function Hi(e){var n=Le(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=K,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,c=l;do{var g=c.lane;if((Cn&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,H.lanes|=g,Mn|=g}c=c.next}while(c!==null&&c!==l);s===null?o=r:s.next=a,ze(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Mn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ui(e){var n=Le(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ze(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function hu(){}function gu(e,n){var t=H,r=Le(),i=n(),l=!ze(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,_o(xu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Qt(9,yu.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(x(349));Cn&30||vu(t,n,i)}return i}function vu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function yu(e,n,t,r){n.value=t,n.getSnapshot=r,wu(n)&&ku(e)}function xu(e,n,t){return t(function(){wu(n)&&ku(e)})}function wu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ze(e,t)}catch{return!0}}function ku(e){var n=Ke(e,1);n!==null&&Pe(n,e,1,-1)}function ja(e){var n=Ae();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},n.queue=e,e=e.dispatch=cf.bind(null,H,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Su(){return Le().memoizedState}function Lr(e,n,t,r){var i=Ae();H.flags|=e,i.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ui(e,n,t,r){var i=Le();r=r===void 0?null:r;var l=void 0;if(K!==null){var o=K.memoizedState;if(l=o.destroy,r!==null&&wo(r,o.deps)){i.memoizedState=Qt(n,t,l,r);return}}H.flags|=e,i.memoizedState=Qt(1|n,t,l,r)}function Na(e,n){return Lr(8390656,8,e,n)}function _o(e,n){return ui(2048,8,e,n)}function _u(e,n){return ui(4,2,e,n)}function ju(e,n){return ui(4,4,e,n)}function Nu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bu(e,n,t){return t=t!=null?t.concat([e]):null,ui(4,4,Nu.bind(null,n,e),t)}function jo(){}function Lu(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Eu(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&wo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cu(e,n,t){return Cn&21?(ze(t,n)||(t=Ps(),H.lanes|=t,Mn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function sf(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=Ri.transition;Ri.transition={};try{e(!1),n()}finally{I=t,Ri.transition=r}}function Mu(){return Le().memoizedState}function uf(e,n,t){var r=dn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Tu(e))Ou(n,t);else if(t=fu(e,n,t,r),t!==null){var i=se();Pe(t,e,r,i),Iu(t,n,r)}}function cf(e,n,t){var r=dn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Ou(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,ze(a,o)){var s=n.interleaved;s===null?(i.next=i,ho(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=fu(e,n,i,r),t!==null&&(i=se(),Pe(t,e,r,i),Iu(t,n,r))}}function Tu(e){var n=e.alternate;return e===H||n!==null&&n===H}function Ou(e,n){Et=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Iu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,eo(e,t)}}var Xr={readContext:be,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},df={readContext:be,useCallback:function(e,n){return Ae().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:Na,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Lr(4194308,4,Nu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Lr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Lr(4,2,e,n)},useMemo:function(e,n){var t=Ae();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ae();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=uf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ae();return e={current:e},n.memoizedState=e},useState:ja,useDebugValue:jo,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ja(!1),n=e[0];return e=sf.bind(null,e[1]),Ae().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ae();if(F){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),Z===null)throw Error(x(349));Cn&30||vu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Na(xu.bind(null,r,l,e),[e]),r.flags|=2048,Qt(9,yu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ae(),n=Z.identifierPrefix;if(F){var t=Ve,r=Be;t=(r&~(1<<32-Ie(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$t++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=af++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ff={readContext:be,useCallback:Lu,useContext:be,useEffect:_o,useImperativeHandle:bu,useInsertionEffect:_u,useLayoutEffect:ju,useMemo:Eu,useReducer:Hi,useRef:Su,useState:function(){return Hi(Wt)},useDebugValue:jo,useDeferredValue:function(e){var n=Le();return Cu(n,K.memoizedState,e)},useTransition:function(){var e=Hi(Wt)[0],n=Le().memoizedState;return[e,n]},useMutableSource:hu,useSyncExternalStore:gu,useId:Mu,unstable_isNewReconciler:!1},pf={readContext:be,useCallback:Lu,useContext:be,useEffect:_o,useImperativeHandle:bu,useInsertionEffect:_u,useLayoutEffect:ju,useMemo:Eu,useReducer:Ui,useRef:Su,useState:function(){return Ui(Wt)},useDebugValue:jo,useDeferredValue:function(e){var n=Le();return K===null?n.memoizedState=e:Cu(n,K.memoizedState,e)},useTransition:function(){var e=Ui(Wt)[0],n=Le().memoizedState;return[e,n]},useMutableSource:hu,useSyncExternalStore:gu,useId:Mu,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Nl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ci={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),i=dn(e),l=$e(r,i);l.payload=n,t!=null&&(l.callback=t),n=un(e,l,i),n!==null&&(Pe(n,e,i,r),Nr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),i=dn(e),l=$e(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=un(e,l,i),n!==null&&(Pe(n,e,i,r),Nr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=dn(e),i=$e(t,r);i.tag=2,n!=null&&(i.callback=n),n=un(e,i,r),n!==null&&(Pe(n,e,r,t),Nr(n,e,r))}};function ba(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(i,l):!0}function Pu(e,n,t){var r=!1,i=mn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=me(n)?Ln:oe.current,r=n.contextTypes,l=(r=r!=null)?et(e,i):mn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function La(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ci.enqueueReplaceState(n,n.state,null)}function bl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},go(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=me(n)?Ln:oe.current,i.context=et(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Nl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ci.enqueueReplaceState(i,i.state,null),Qr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,n){try{var t="",r=n;do t+=Rc(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Bi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ll(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var mf=typeof WeakMap=="function"?WeakMap:Map;function zu(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Zr||(Zr=!0,Al=r),Ll(e,n)},t}function qu(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ll(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ll(e,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ea(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new mf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Ef.bind(null,e,n,t),n.then(e,e))}function Ca(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ma(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var hf=Xe.ReactCurrentOwner,fe=!1;function ae(e,n,t,r){n.child=e===null?du(n,null,t,r):tt(n,e.child,t,r)}function Ta(e,n,t,r,i){t=t.render;var l=n.ref;return Yn(n,i),r=ko(e,n,t,r,l,i),t=So(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(F&&t&&so(n),n.flags|=1,ae(e,n,r,i),n.child)}function Oa(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Oo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Au(e,n,l,r,i)):(e=Tr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(o,r)&&e.ref===n.ref)return Ge(e,n,i)}return n.flags|=1,e=fn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Au(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Ft(l,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Ge(e,n,i)}return El(e,n,t,r,i)}function Du(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Wn,ge),ge|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Wn,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,q(Wn,ge),ge|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,q(Wn,ge),ge|=r;return ae(e,n,i,t),n.child}function Fu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function El(e,n,t,r,i){var l=me(t)?Ln:oe.current;return l=et(n,l),Yn(n,i),t=ko(e,n,t,r,l,i),r=So(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(F&&r&&so(n),n.flags|=1,ae(e,n,t,i),n.child)}function Ia(e,n,t,r,i){if(me(t)){var l=!0;Ur(n)}else l=!1;if(Yn(n,i),n.stateNode===null)Er(e,n),Pu(n,t,r),bl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=be(c):(c=me(t)?Ln:oe.current,c=et(n,c));var g=t.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&La(n,o,r,c),Je=!1;var m=n.memoizedState;o.state=m,Qr(n,r,o,i),s=n.memoizedState,a!==r||m!==s||pe.current||Je?(typeof g=="function"&&(Nl(n,t,g,r),s=n.memoizedState),(a=Je||ba(n,t,a,r,m,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,pu(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Me(n.type,a),o.props=c,h=n.pendingProps,m=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=be(s):(s=me(t)?Ln:oe.current,s=et(n,s));var w=t.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==s)&&La(n,o,r,s),Je=!1,m=n.memoizedState,o.state=m,Qr(n,r,o,i);var k=n.memoizedState;a!==h||m!==k||pe.current||Je?(typeof w=="function"&&(Nl(n,t,w,r),k=n.memoizedState),(c=Je||ba(n,t,c,r,m,k,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Cl(e,n,t,r,l,i)}function Cl(e,n,t,r,i,l){Fu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ya(n,t,!1),Ge(e,n,l);r=n.stateNode,hf.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=tt(n,e.child,null,l),n.child=tt(n,null,a,l)):ae(e,n,a,l),n.memoizedState=r.state,i&&ya(n,t,!0),n.child}function Ru(e){var n=e.stateNode;n.pendingContext?va(e,n.pendingContext,n.pendingContext!==n.context):n.context&&va(e,n.context,!1),vo(e,n.containerInfo)}function Pa(e,n,t,r,i){return nt(),co(i),n.flags|=256,ae(e,n,t,r),n.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,n,t){var r=n.pendingProps,i=R.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(R,i&1),e===null)return _l(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=pi(o,r,0,null),e=bn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Tl(t),n.memoizedState=Ml,e):No(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gf(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=fn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=fn(a,l):(l=bn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Tl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=fn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function No(e,n){return n=pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&co(r),tt(n,e.child,null,t),e=No(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gf(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Bi(Error(x(422))),hr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=pi({mode:"visible",children:r.children},i,0,null),l=bn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&tt(n,e.child,null,o),n.child.memoizedState=Tl(o),n.memoizedState=Ml,l);if(!(n.mode&1))return hr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(x(419)),r=Bi(l,r,void 0),hr(e,n,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ke(e,i),Pe(r,e,i,-1))}return To(),r=Bi(Error(x(421))),hr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ve=sn(i.nextSibling),ye=n,F=!0,Oe=null,e!==null&&(Se[_e++]=Be,Se[_e++]=Ve,Se[_e++]=En,Be=e.id,Ve=e.overflow,En=n),n=No(n,r.children),n.flags|=4096,n)}function za(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),jl(e.return,n,t)}function Vi(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Uu(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,n,r.children,t),r=R.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&za(e,t,n);else if(e.tag===19)za(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(R,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Kr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Vi(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Kr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Vi(n,!0,t,null,l);break;case"together":Vi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Er(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function vf(e,n,t){switch(n.tag){case 3:Ru(n),nt();break;case 5:mu(n);break;case 1:me(n.type)&&Ur(n);break;case 4:vo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;q($r,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(R,R.current&1),n.flags|=128,null):t&n.child.childLanes?Hu(e,n,t):(q(R,R.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);q(R,R.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Uu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(R,R.current),r)break;return null;case 22:case 23:return n.lanes=0,Du(e,n,t)}return Ge(e,n,t)}var Bu,Ol,Vu,$u;Bu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ol=function(){};Vu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jn(Re.current);var l=null;switch(t){case"input":i=el(e,i),r=el(e,r),l=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":i=rl(e,i),r=rl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rr)}ll(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ot.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ot.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&A("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};$u=function(e,n,t,r){t!==r&&(n.flags|=4)};function vt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function yf(e,n,t){var r=n.pendingProps;switch(uo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return me(n.type)&&Hr(),ie(n),null;case 3:return r=n.stateNode,rt(),D(pe),D(oe),xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(Rl(Oe),Oe=null))),Ol(e,n),ie(n),null;case 5:yo(n);var i=jn(Vt.current);if(t=n.type,e!==null&&n.stateNode!=null)Vu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return ie(n),null}if(e=jn(Re.current),pr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[De]=n,r[Ut]=l,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<St.length;i++)A(St[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Vo(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":Wo(r,l),A("invalid",r)}ll(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),i=["children",""+a]):Ot.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&A("scroll",r)}switch(t){case"input":ir(r),$o(r,l,!0);break;case"textarea":ir(r),Qo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Rr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[De]=n,e[Ut]=r,Bu(e,n,!1,!1),n.stateNode=e;e:{switch(o=ol(t,r),t){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<St.length;i++)A(St[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":Vo(e,r),i=el(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),A("invalid",e);break;case"textarea":Wo(e,r),i=rl(e,r),A("invalid",e);break;default:i=r}ll(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Ss(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ws(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&It(e,s):typeof s=="number"&&It(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ot.hasOwnProperty(l)?s!=null&&l==="onScroll"&&A("scroll",e):s!=null&&Kl(e,l,s,o))}switch(t){case"input":ir(e),$o(e,r,!1);break;case"textarea":ir(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)$u(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=jn(Vt.current),jn(Re.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[De]=n,(l=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[De]=n,n.stateNode=r}return ie(n),null;case 13:if(D(R),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ve!==null&&n.mode&1&&!(n.flags&128))uu(),nt(),n.flags|=98560,l=!1;else if(l=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[De]=n}else nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Oe!==null&&(Rl(Oe),Oe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||R.current&1?G===0&&(G=3):To())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return rt(),Ol(e,n),e===null&&Rt(n.stateNode.containerInfo),ie(n),null;case 10:return mo(n.type._context),ie(n),null;case 17:return me(n.type)&&Hr(),ie(n),null;case 19:if(D(R),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)vt(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Kr(e),o!==null){for(n.flags|=128,vt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(R,R.current&1|2),n.child}e=e.sibling}l.tail!==null&&$()>lt&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!F)return ie(n),null}else 2*$()-l.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=$(),n.sibling=null,t=R.current,q(R,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Mo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ge&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function xf(e,n){switch(uo(n),n.tag){case 1:return me(n.type)&&Hr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),D(pe),D(oe),xo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return yo(n),null;case 13:if(D(R),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(R),null;case 4:return rt(),null;case 10:return mo(n.type._context),null;case 22:case 23:return Mo(),null;case 24:return null;default:return null}}var gr=!1,le=!1,wf=typeof WeakSet=="function"?WeakSet:Set,j=null;function $n(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(e,n,r)}else t.current=null}function Il(e,n,t){try{t()}catch(r){B(e,n,r)}}var qa=!1;function kf(e,n){if(gl=Ar,e=Xs(),ao(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,g=0,h=e,m=null;n:for(;;){for(var w;h!==t||i!==0&&h.nodeType!==3||(a=o+i),h!==l||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break n;if(m===t&&++c===i&&(a=o),m===l&&++g===r&&(s=o),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(vl={focusedElem:e,selectionRange:t},Ar=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,P=k.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?S:Me(n.type,S),P);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){B(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return k=qa,qa=!1,k}function Ct(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Il(n,t,l)}i=i.next}while(i!==r)}}function di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Pl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wu(e){var n=e.alternate;n!==null&&(e.alternate=null,Wu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[De],delete n[Ut],delete n[wl],delete n[tf],delete n[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Rr));else if(r!==4&&(e=e.child,e!==null))for(zl(e,n,t),e=e.sibling;e!==null;)zl(e,n,t),e=e.sibling}function ql(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,n,t),e=e.sibling;e!==null;)ql(e,n,t),e=e.sibling}var ee=null,Te=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Ku(e,n,t),t=t.sibling}function Ku(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ri,t)}catch{}switch(t.tag){case 5:le||$n(t,n);case 6:var r=ee,i=Te;ee=null,Ye(e,n,t),ee=r,Te=i,ee!==null&&(Te?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Te?(e=ee,t=t.stateNode,e.nodeType===8?Ai(e.parentNode,t):e.nodeType===1&&Ai(e,t),At(e)):Ai(ee,t.stateNode));break;case 4:r=ee,i=Te,ee=t.stateNode.containerInfo,Te=!0,Ye(e,n,t),ee=r,Te=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Il(t,n,o),i=i.next}while(i!==r)}Ye(e,n,t);break;case 1:if(!le&&($n(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){B(t,n,a)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Ye(e,n,t),le=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Da(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new wf),n.forEach(function(r){var i=Mf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Te=!1;break e;case 3:ee=a.stateNode.containerInfo,Te=!0;break e;case 4:ee=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(ee===null)throw Error(x(160));Ku(l,o,i),ee=null,Te=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){B(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gu(n,e),n=n.sibling}function Gu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),qe(e),r&4){try{Ct(3,e,e.return),di(3,e)}catch(S){B(e,e.return,S)}try{Ct(5,e,e.return)}catch(S){B(e,e.return,S)}}break;case 1:Ce(n,e),qe(e),r&512&&t!==null&&$n(t,t.return);break;case 5:if(Ce(n,e),qe(e),r&512&&t!==null&&$n(t,t.return),e.flags&32){var i=e.stateNode;try{It(i,"")}catch(S){B(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&vs(i,l),ol(a,o);var c=ol(a,l);for(o=0;o<s.length;o+=2){var g=s[o],h=s[o+1];g==="style"?Ss(i,h):g==="dangerouslySetInnerHTML"?ws(i,h):g==="children"?It(i,h):Kl(i,g,h,c)}switch(a){case"input":nl(i,l);break;case"textarea":ys(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Qn(i,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qn(i,!!l.multiple,l.defaultValue,!0):Qn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ut]=l}catch(S){B(e,e.return,S)}}break;case 6:if(Ce(n,e),qe(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){B(e,e.return,S)}}break;case 3:if(Ce(n,e),qe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{At(n.containerInfo)}catch(S){B(e,e.return,S)}break;case 4:Ce(n,e),qe(e);break;case 13:Ce(n,e),qe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Eo=$())),r&4&&Da(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||g,Ce(n,e),le=c):Ce(n,e),qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(m=j,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ct(4,m,m.return);break;case 1:$n(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(S){B(r,t,S)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){Ra(h);continue}}w!==null?(w.return=m,j=w):Ra(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ks("display",o))}catch(S){B(e,e.return,S)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){B(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ce(n,e),qe(e),r&4&&Da(e);break;case 21:break;default:Ce(n,e),qe(e)}}function qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qu(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(It(i,""),r.flags&=-33);var l=Aa(e);ql(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Aa(e);zl(e,a,o);break;default:throw Error(x(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sf(e,n,t){j=e,Xu(e)}function Xu(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gr;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||le;a=gr;var c=le;if(gr=o,(le=s)&&!c)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Ha(i):s!==null?(s.return=o,j=s):Ha(i);for(;l!==null;)j=l,Xu(l),l=l.sibling;j=i,gr=a,le=c}Fa(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):Fa(e)}}function Fa(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&_a(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_a(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&At(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||n.flags&512&&Pl(n)}catch(m){B(n,n.return,m)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Ra(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Ha(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{di(4,n)}catch(s){B(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){B(n,i,s)}}var l=n.return;try{Pl(n)}catch(s){B(n,l,s)}break;case 5:var o=n.return;try{Pl(n)}catch(s){B(n,o,s)}}}catch(s){B(n,n.return,s)}if(n===e){j=null;break}var a=n.sibling;if(a!==null){a.return=n.return,j=a;break}j=n.return}}var _f=Math.ceil,Yr=Xe.ReactCurrentDispatcher,bo=Xe.ReactCurrentOwner,Ne=Xe.ReactCurrentBatchConfig,O=0,Z=null,Q=null,ne=0,ge=0,Wn=gn(0),G=0,Kt=null,Mn=0,fi=0,Lo=0,Mt=null,de=null,Eo=0,lt=1/0,He=null,Zr=!1,Al=null,cn=null,vr=!1,rn=null,Jr=0,Tt=0,Dl=null,Cr=-1,Mr=0;function se(){return O&6?$():Cr!==-1?Cr:Cr=$()}function dn(e){return e.mode&1?O&2&&ne!==0?ne&-ne:of.transition!==null?(Mr===0&&(Mr=Ps()),Mr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Hs(e.type)),e):1}function Pe(e,n,t,r){if(50<Tt)throw Tt=0,Dl=null,Error(x(185));Xt(e,t,r),(!(O&2)||e!==Z)&&(e===Z&&(!(O&2)&&(fi|=t),G===4&&nn(e,ne)),he(e,r),t===1&&O===0&&!(n.mode&1)&&(lt=$()+500,si&&vn()))}function he(e,n){var t=e.callbackNode;ld(e,n);var r=qr(e,e===Z?ne:0);if(r===0)t!==null&&Xo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xo(t),n===1)e.tag===0?lf(Ua.bind(null,e)):ou(Ua.bind(null,e)),ef(function(){!(O&6)&&vn()}),t=null;else{switch(zs(r)){case 1:t=Jl;break;case 4:t=Os;break;case 16:t=zr;break;case 536870912:t=Is;break;default:t=zr}t=ic(t,Yu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yu(e,n){if(Cr=-1,Mr=0,O&6)throw Error(x(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=qr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ei(e,r);else{n=r;var i=O;O|=2;var l=Ju();(Z!==e||ne!==n)&&(He=null,lt=$()+500,Nn(e,n));do try{bf();break}catch(a){Zu(e,a)}while(!0);po(),Yr.current=l,O=i,Q!==null?n=0:(Z=null,ne=0,n=G)}if(n!==0){if(n===2&&(i=dl(e),i!==0&&(r=i,n=Fl(e,i))),n===1)throw t=Kt,Nn(e,0),nn(e,r),he(e,$()),t;if(n===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jf(i)&&(n=ei(e,r),n===2&&(l=dl(e),l!==0&&(r=l,n=Fl(e,l))),n===1))throw t=Kt,Nn(e,0),nn(e,r),he(e,$()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:kn(e,de,He);break;case 3:if(nn(e,r),(r&130023424)===r&&(n=Eo+500-$(),10<n)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(kn.bind(null,e,de,He),n);break}kn(e,de,He);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ie(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=xl(kn.bind(null,e,de,He),r);break}kn(e,de,He);break;case 5:kn(e,de,He);break;default:throw Error(x(329))}}}return he(e,$()),e.callbackNode===t?Yu.bind(null,e):null}function Fl(e,n){var t=Mt;return e.current.memoizedState.isDehydrated&&(Nn(e,n).flags|=256),e=ei(e,n),e!==2&&(n=de,de=t,n!==null&&Rl(n)),e}function Rl(e){de===null?de=e:de.push.apply(de,e)}function jf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!ze(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Lo,n&=~fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ie(n),r=1<<t;e[t]=-1,n&=~r}}function Ua(e){if(O&6)throw Error(x(327));Zn();var n=qr(e,0);if(!(n&1))return he(e,$()),null;var t=ei(e,n);if(e.tag!==0&&t===2){var r=dl(e);r!==0&&(n=r,t=Fl(e,r))}if(t===1)throw t=Kt,Nn(e,0),nn(e,n),he(e,$()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,de,He),he(e,$()),null}function Co(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(lt=$()+500,si&&vn())}}function Tn(e){rn!==null&&rn.tag===0&&!(O&6)&&Zn();var n=O;O|=1;var t=Ne.transition,r=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=r,Ne.transition=t,O=n,!(O&6)&&vn()}}function Mo(){ge=Wn.current,D(Wn)}function Nn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:rt(),D(pe),D(oe),xo();break;case 5:yo(r);break;case 4:rt();break;case 13:D(R);break;case 19:D(R);break;case 10:mo(r.type._context);break;case 22:case 23:Mo()}t=t.return}if(Z=e,Q=e=fn(e.current,null),ne=ge=n,G=0,Kt=null,Lo=fi=Mn=0,de=Mt=null,_n!==null){for(n=0;n<_n.length;n++)if(t=_n[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}_n=null}return e}function Zu(e,n){do{var t=Q;try{if(po(),br.current=Xr,Gr){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gr=!1}if(Cn=0,Y=K=H=null,Et=!1,$t=0,bo.current=null,t===null||t.return===null){G=1,Kt=n,Q=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Ca(o);if(w!==null){w.flags&=-257,Ma(w,o,a,l,n),w.mode&1&&Ea(l,c,n),n=w,s=c;var k=n.updateQueue;if(k===null){var S=new Set;S.add(s),n.updateQueue=S}else k.add(s);break e}else{if(!(n&1)){Ea(l,c,n),To();break e}s=Error(x(426))}}else if(F&&a.mode&1){var P=Ca(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ma(P,o,a,l,n),co(it(s,a));break e}}l=s=it(s,a),G!==4&&(G=2),Mt===null?Mt=[l]:Mt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=zu(l,s,n);Sa(l,d);break e;case 1:a=s;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(cn===null||!cn.has(p)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=qu(l,a,n);Sa(l,v);break e}}l=l.return}while(l!==null)}nc(t)}catch(_){n=_,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Ju(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function To(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Mn&268435455)&&!(fi&268435455)||nn(Z,ne)}function ei(e,n){var t=O;O|=2;var r=Ju();(Z!==e||ne!==n)&&(He=null,Nn(e,n));do try{Nf();break}catch(i){Zu(e,i)}while(!0);if(po(),O=t,Yr.current=r,Q!==null)throw Error(x(261));return Z=null,ne=0,G}function Nf(){for(;Q!==null;)ec(Q)}function bf(){for(;Q!==null&&!Xc();)ec(Q)}function ec(e){var n=rc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?nc(e):Q=n,bo.current=null}function nc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=xf(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(t=yf(t,n,ge),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);G===0&&(G=5)}function kn(e,n,t){var r=I,i=Ne.transition;try{Ne.transition=null,I=1,Lf(e,n,t,r)}finally{Ne.transition=i,I=r}return null}function Lf(e,n,t,r){do Zn();while(rn!==null);if(O&6)throw Error(x(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(od(e,l),e===Z&&(Q=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,ic(zr,function(){return Zn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var o=I;I=1;var a=O;O|=4,bo.current=null,kf(e,t),Gu(t,e),Wd(vl),Ar=!!gl,vl=gl=null,e.current=t,Sf(t),Yc(),O=a,I=o,Ne.transition=l}else e.current=t;if(vr&&(vr=!1,rn=e,Jr=i),l=e.pendingLanes,l===0&&(cn=null),ed(t.stateNode),he(e,$()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zr)throw Zr=!1,e=Al,Al=null,e;return Jr&1&&e.tag!==0&&Zn(),l=e.pendingLanes,l&1?e===Dl?Tt++:(Tt=0,Dl=e):Tt=0,vn(),null}function Zn(){if(rn!==null){var e=zs(Jr),n=Ne.transition,t=I;try{if(Ne.transition=null,I=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Jr=0,O&6)throw Error(x(331));var i=O;for(O|=4,j=e.current;j!==null;){var l=j,o=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:Ct(8,g,l)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var m=g.sibling,w=g.return;if(Wu(g),g===c){j=null;break}if(m!==null){m.return=w,j=m;break}j=w}}}var k=l.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}j=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,j=o;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ct(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,j=d;break e}j=l.return}}var u=e.current;for(j=u;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=u;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:di(9,a)}}catch(_){B(a,a.return,_)}if(a===o){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(O=i,vn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ri,e)}catch{}r=!0}return r}finally{I=t,Ne.transition=n}}return!1}function Ba(e,n,t){n=it(t,n),n=zu(e,n,1),e=un(e,n,1),n=se(),e!==null&&(Xt(e,1,n),he(e,n))}function B(e,n,t){if(e.tag===3)Ba(e,e,t);else for(;n!==null;){if(n.tag===3){Ba(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=it(t,e),e=qu(n,e,1),n=un(n,e,1),e=se(),n!==null&&(Xt(n,1,e),he(n,e));break}}n=n.return}}function Ef(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(G===4||G===3&&(ne&130023424)===ne&&500>$()-Eo?Nn(e,0):Lo|=t),he(e,n)}function tc(e,n){n===0&&(e.mode&1?(n=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):n=1);var t=se();e=Ke(e,n),e!==null&&(Xt(e,n,t),he(e,t))}function Cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),tc(e,t)}function Mf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),tc(e,t)}var rc;rc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,vf(e,n,t);fe=!!(e.flags&131072)}else fe=!1,F&&n.flags&1048576&&au(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Er(e,n),e=n.pendingProps;var i=et(n,oe.current);Yn(n,t),i=ko(null,n,r,e,i,t);var l=So();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(l=!0,Ur(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,go(n),i.updater=ci,n.stateNode=i,i._reactInternals=n,bl(n,r,e,t),n=Cl(null,n,r,!0,l,t)):(n.tag=0,F&&l&&so(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Er(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Of(r),e=Me(r,e),i){case 0:n=El(null,n,r,e,t);break e;case 1:n=Ia(null,n,r,e,t);break e;case 11:n=Ta(null,n,r,e,t);break e;case 14:n=Oa(null,n,r,Me(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),El(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Ia(e,n,r,i,t);case 3:e:{if(Ru(n),e===null)throw Error(x(387));r=n.pendingProps,l=n.memoizedState,i=l.element,pu(e,n),Qr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=it(Error(x(423)),n),n=Pa(e,n,r,t,i);break e}else if(r!==i){i=it(Error(x(424)),n),n=Pa(e,n,r,t,i);break e}else for(ve=sn(n.stateNode.containerInfo.firstChild),ye=n,F=!0,Oe=null,t=du(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===i){n=Ge(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return mu(n),e===null&&_l(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(n.flags|=32),Fu(e,n),ae(e,n,o,t),n.child;case 6:return e===null&&_l(n),null;case 13:return Hu(e,n,t);case 4:return vo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Ta(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,q($r,r._currentValue),r._currentValue=o,l!==null)if(ze(l.value,o)){if(l.children===i.children&&!pe.current){n=Ge(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=$e(-1,t&-t),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),jl(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(x(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),jl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Yn(n,t),i=be(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=Me(r,n.pendingProps),i=Me(r.type,i),Oa(e,n,r,i,t);case 15:return Au(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Er(e,n),n.tag=1,me(r)?(e=!0,Ur(n)):e=!1,Yn(n,t),Pu(n,r,i),bl(n,r,i,t),Cl(null,n,r,!0,e,t);case 19:return Uu(e,n,t);case 22:return Du(e,n,t)}throw Error(x(156,n.tag))};function ic(e,n){return Ts(e,n)}function Tf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new Tf(e,n,t,r)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Of(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Yl)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Tr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return bn(t.children,i,l,n);case Gl:o=8,i|=8;break;case Xi:return e=je(12,t,n,i|2),e.elementType=Xi,e.lanes=l,e;case Yi:return e=je(13,t,n,i),e.elementType=Yi,e.lanes=l,e;case Zi:return e=je(19,t,n,i),e.elementType=Zi,e.lanes=l,e;case ms:return pi(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fs:o=10;break e;case ps:o=9;break e;case Xl:o=11;break e;case Yl:o=14;break e;case Ze:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=je(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function bn(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function pi(e,n,t,r){return e=je(22,e,r,n),e.elementType=ms,e.lanes=t,e.stateNode={isHidden:!1},e}function $i(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function Wi(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function If(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Io(e,n,t,r,i,l,o,a,s){return e=new If(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=je(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(l),e}function Pf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function lc(e){if(!e)return mn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(me(t))return lu(e,t,n)}return n}function oc(e,n,t,r,i,l,o,a,s){return e=Io(t,r,!0,e,i,l,o,a,s),e.context=lc(null),t=e.current,r=se(),i=dn(t),l=$e(r,i),l.callback=n??null,un(t,l,i),e.current.lanes=i,Xt(e,i,r),he(e,r),e}function mi(e,n,t,r){var i=n.current,l=se(),o=dn(i);return t=lc(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(i,n,o),e!==null&&(Pe(e,i,o,l),Nr(e,i,o)),o}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Po(e,n){Va(e,n),(e=e.alternate)&&Va(e,n)}function zf(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}hi.prototype.render=zo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));mi(e,n,null,null)};hi.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){mi(null,e,null,null)}),n[Qe]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&Rs(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $a(){}function qf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=ni(o);l.call(c)}}var o=oc(n,r,e,0,null,!1,!1,"",$a);return e._reactRootContainer=o,e[Qe]=o.current,Rt(e.nodeType===8?e.parentNode:e),Tn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ni(s);a.call(c)}}var s=Io(e,0,!1,null,null,!1,!1,"",$a);return e._reactRootContainer=s,e[Qe]=s.current,Rt(e.nodeType===8?e.parentNode:e),Tn(function(){mi(n,s,t,r)}),s}function vi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=ni(o);a.call(s)}}mi(n,o,e,i)}else o=qf(t,n,e,i,r);return ni(o)}qs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(eo(n,t|1),he(n,$()),!(O&6)&&(lt=$()+500,vn()))}break;case 13:Tn(function(){var r=Ke(e,1);if(r!==null){var i=se();Pe(r,e,1,i)}}),Po(e,1)}};no=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=se();Pe(n,e,134217728,t)}Po(e,134217728)}};As=function(e){if(e.tag===13){var n=dn(e),t=Ke(e,n);if(t!==null){var r=se();Pe(t,e,n,r)}Po(e,n)}};Ds=function(){return I};Fs=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};sl=function(e,n,t){switch(n){case"input":if(nl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(x(90));gs(r),nl(r,i)}}}break;case"textarea":ys(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};Ns=Co;bs=Tn;var Af={usingClientEntryPoint:!1,Events:[Zt,Rn,ai,_s,js,Co]},yt={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ri=yr.inject(Df),Fe=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(n))throw Error(x(200));return Pf(e,n,null,t)};we.createRoot=function(e,n){if(!qo(e))throw Error(x(299));var t=!1,r="",i=ac;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Io(e,1,!1,null,null,t,!1,r,i),e[Qe]=n.current,Rt(e.nodeType===8?e.parentNode:e),new zo(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Cs(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tn(e)};we.hydrate=function(e,n,t){if(!gi(n))throw Error(x(200));return vi(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!qo(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=ac;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=oc(n,null,e,1,t??null,i,!1,l,o),e[Qe]=n.current,Rt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new hi(n)};we.render=function(e,n,t){if(!gi(n))throw Error(x(200));return vi(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!gi(e))throw Error(x(40));return e._reactRootContainer?(Tn(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Co;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!gi(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return vi(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),ss.exports=we;var Ff=ss.exports,Wa=Ff;Ki.createRoot=Wa.createRoot,Ki.hydrateRoot=Wa.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,n)=>{const t=W.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:a="",children:s,...c},g)=>W.createElement("svg",{ref:g,...Rf,width:i,height:i,stroke:r,strokeWidth:o?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Hf(e)}`,a].join(" "),...c},[...n.map(([h,m])=>W.createElement(h,m)),...Array.isArray(s)?s:[s]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=J("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=J("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=J("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=J("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=J("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=J("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=J("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=J("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=J("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),ep={E:{label:"Easy",pill:"bg-emerald-950 text-emerald-400 border border-emerald-800"},M:{label:"Medium",pill:"bg-amber-950 text-amber-400 border border-amber-800"},H:{label:"Hard",pill:"bg-rose-950 text-rose-400 border border-rose-800"}},xr=[{id:1,name:"Arrays",solved:!0,problems:[{diff:"E",title:"Rearrange Array Elements by Sign",url:"https://leetcode.com/problems/rearrange-array-elements-by-sign/",problem:"Array of size n (n even) with equal positive and negative numbers. Rearrange so positives and negatives alternate, starting with positive, preserving relative order within each sign.",approach:"Use a result array of size n. Fill even indices (0,2,4...) with positives in order, odd indices (1,3,5...) with negatives in order. Single pass, O(n) extra space.",java:`public int[] rearrangeArray(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    int posIdx = 0, negIdx = 1;
    for (int num : nums) {
        if (num >= 0) {
            result[posIdx] = num;
            posIdx += 2;
        } else {
            result[negIdx] = num;
            negIdx += 2;
        }
    }
    return result;
}`,python:`def rearrange_array(nums):
    n = len(nums)
    result = [0] * n
    pos_idx, neg_idx = 0, 1
    for num in nums:
        if num >= 0:
            result[pos_idx] = num
            pos_idx += 2
        else:
            result[neg_idx] = num
            neg_idx += 2
    return result`,complexity:"Time O(n), Space O(n) — required to preserve order.",edge:"All positives/negatives violates the equal-count precondition; array of size 0 or 2; confirm whether 0 counts as positive."},{diff:"M",title:"Maximum Product Subarray",url:"https://leetcode.com/problems/maximum-product-subarray/",problem:"Find the contiguous subarray with the largest product.",approach:"Track running max AND running min ending at each index, since a negative number can flip min into max. Candidates each step: num, maxSoFar*num, minSoFar*num.",java:`public int maxProduct(int[] nums) {
    int maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];
    for (int i = 1; i < nums.length; i++) {
        int num = nums[i];
        if (num < 0) {
            int temp = maxSoFar;
            maxSoFar = minSoFar;
            minSoFar = temp;
        }
        maxSoFar = Math.max(num, maxSoFar * num);
        minSoFar = Math.min(num, minSoFar * num);
        result = Math.max(result, maxSoFar);
    }
    return result;
}`,python:`def max_product(nums):
    max_so_far = min_so_far = result = nums[0]
    for num in nums[1:]:
        if num < 0:
            max_so_far, min_so_far = min_so_far, max_so_far
        max_so_far = max(num, max_so_far * num)
        min_so_far = min(num, min_so_far * num)
        result = max(result, max_so_far)
    return result`,complexity:"Time O(n), Space O(1).",edge:"Array contains 0 (resets candidates); single element; all-negative with odd count."},{diff:"M",title:"Rotate Matrix In-Place by 90°",url:"https://leetcode.com/problems/rotate-image/",problem:"N×N matrix, rotate 90° clockwise using O(1) extra space.",approach:"Transpose the matrix (swap [i][j] with [j][i]), then reverse each row.",java:`public void rotate(int[][] matrix) {
    int n = matrix.length;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    for (int[] row : matrix) {
        for (int l = 0, r = n - 1; l < r; l++, r--) {
            int temp = row[l];
            row[l] = row[r];
            row[r] = temp;
        }
    }
}`,python:`def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`,complexity:"Time O(n^2), Space O(1).",edge:"1x1 matrix; non-square input is out of scope for this approach; CCW rotation needs reverse-then-transpose instead."},{diff:"M",title:"Merge Overlapping Intervals",url:"https://leetcode.com/problems/merge-intervals/",problem:"Given [start, end] pairs, merge all overlaps.",approach:"Sort by start time. Iterate, merging into the last interval in the result if current.start <= last.end.",java:`public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> result = new ArrayList<>();
    for (int[] interval : intervals) {
        if (result.isEmpty() || result.get(result.size() - 1)[1] < interval[0]) {
            result.add(interval);
        } else {
            result.get(result.size() - 1)[1] =
                Math.max(result.get(result.size() - 1)[1], interval[1]);
        }
    }
    return result.toArray(new int[result.size()][]);
}`,python:`def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    result = []
    for start, end in intervals:
        if not result or result[-1][1] < start:
            result.append([start, end])
        else:
            result[-1][1] = max(result[-1][1], end)
    return result`,complexity:"Time O(n log n), Space O(n).",edge:"Empty input; single interval; intervals that touch exactly ([1,4],[4,5]); fully nested intervals."},{diff:"H",title:"Trapping Rain Water",url:"https://leetcode.com/problems/trapping-rain-water/",problem:"Given elevation heights, compute total trapped water.",approach:"Two-pointer, O(1) space. Water at i = min(maxLeft, maxRight) - height[i]. Always move the side with the smaller max.",java:`public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`,python:`def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = water = 0
    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1
    return water`,complexity:"Time O(n), Space O(1).",edge:"Array length < 3 (0 water); all same height; strictly increasing/decreasing."},{diff:"H",title:"Median of Two Sorted Arrays",url:"https://leetcode.com/problems/median-of-two-sorted-arrays/",problem:"Two sorted arrays sizes m, n. Find median in O(log(min(m,n))).",approach:"Binary search on the smaller array for a partition point where all left elements <= all right elements across both arrays.",java:`public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    int m = nums1.length, n = nums2.length;
    int low = 0, high = m;
    while (low <= high) {
        int cut1 = (low + high) / 2;
        int cut2 = (m + n + 1) / 2 - cut1;
        int left1 = (cut1 == 0) ? Integer.MIN_VALUE : nums1[cut1 - 1];
        int left2 = (cut2 == 0) ? Integer.MIN_VALUE : nums2[cut2 - 1];
        int right1 = (cut1 == m) ? Integer.MAX_VALUE : nums1[cut1];
        int right2 = (cut2 == n) ? Integer.MAX_VALUE : nums2[cut2];
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 == 0)
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2.0;
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    throw new IllegalArgumentException("Input arrays are not sorted");
}`,python:`def find_median_sorted_arrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    while low <= high:
        cut1 = (low + high) // 2
        cut2 = (m + n + 1) // 2 - cut1
        left1 = float('-inf') if cut1 == 0 else nums1[cut1 - 1]
        left2 = float('-inf') if cut2 == 0 else nums2[cut2 - 1]
        right1 = float('inf') if cut1 == m else nums1[cut1]
        right2 = float('inf') if cut2 == n else nums2[cut2]
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2
            return max(left1, left2)
        elif left1 > right2:
            high = cut1 - 1
        else:
            low = cut1 + 1
    raise ValueError("Input arrays are not sorted")`,complexity:"Time O(log(min(m,n))), Space O(1).",edge:"One array empty; very different sizes (always search the smaller); odd vs even total length changes the formula."},{diff:"H",title:"Next Permutation",url:"https://leetcode.com/problems/next-permutation/",problem:"Rearrange to the lexicographically next greater permutation, in-place. If none exists, return the lowest.",approach:"From the right, find pivot i where nums[i] < nums[i+1]. Find rightmost j > i with nums[j] > nums[i], swap, then reverse the suffix after i.",java:`public void nextPermutation(int[] nums) {
    int n = nums.length, i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        int j = n - 1;
        while (nums[j] <= nums[i]) j--;
        int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
    }
    int l = i + 1, r = n - 1;
    while (l < r) {
        int temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
        l++; r--;
    }
}`,python:`def next_permutation(nums):
    n = len(nums)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i + 1:] = reversed(nums[i + 1:])`,complexity:"Time O(n), Space O(1).",edge:"Already fully descending (wraps to ascending); size 1 array; all duplicate elements."}]},{id:2,name:"Strings",solved:!0,problems:[{diff:"E",title:"Group Anagrams",url:"https://leetcode.com/problems/group-anagrams/",problem:"Group a list of strings so each group is a set of anagrams.",approach:"Use the sorted string (or a 26-count signature) as a hashmap key.",java:`public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}`,python:`def group_anagrams(strs):
    groups = {}
    for s in strs:
        key = ''.join(sorted(s))
        groups.setdefault(key, []).append(s)
    return list(groups.values())`,complexity:"Time O(n * k log k), Space O(n * k).",edge:"Empty strings; non-lowercase/unicode characters; single-element input."},{diff:"E",title:"Longest Common Prefix",url:"https://leetcode.com/problems/longest-common-prefix/",problem:"Find the longest common prefix across an array of strings.",approach:"Take the first string as candidate; trim it until it prefixes every string.",java:`public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}`,python:`def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix`,complexity:"Time O(S) total chars, Space O(1) extra.",edge:"Empty array; single string; no common prefix at all."},{diff:"M",title:"Longest Palindromic Substring",url:"https://leetcode.com/problems/longest-palindromic-substring/",problem:"Find the longest palindromic substring.",approach:"Expand around center for both odd-length and even-length palindromes at every index.",java:`public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expand(s, i, i);
        int len2 = expand(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start + 1) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}
private int expand(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--; right++;
    }
    return right - left - 1;
}`,python:`def longest_palindrome(s):
    if not s:
        return ""
    start, end = 0, 0

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    for i in range(len(s)):
        length = max(expand(i, i), expand(i, i + 1))
        if length > end - start + 1:
            start = i - (length - 1) // 2
            end = i + length // 2
    return s[start:end + 1]`,complexity:"Time O(n^2), Space O(1). Manacher's gives O(n) as a follow-up.",edge:"Empty string; single character; all identical characters; no palindrome > 1 char."},{diff:"M",title:"String Compression (In-Place)",url:"https://leetcode.com/problems/string-compression/",problem:'"aaabbc" -> "a3b2c1", modify array in place, O(1) space.',approach:"Two pointers: read scans runs, write writes char + count back into same array.",java:`public int compress(char[] chars) {
    int write = 0, read = 0;
    while (read < chars.length) {
        char currentChar = chars[read];
        int count = 0;
        while (read < chars.length && chars[read] == currentChar) {
            read++; count++;
        }
        chars[write++] = currentChar;
        if (count > 1) {
            for (char c : Integer.toString(count).toCharArray()) {
                chars[write++] = c;
            }
        }
    }
    return write;
}`,python:`def compress(chars):
    write = read = 0
    n = len(chars)
    while read < n:
        current_char = chars[read]
        count = 0
        while read < n and chars[read] == current_char:
            read += 1
            count += 1
        chars[write] = current_char
        write += 1
        if count > 1:
            for digit in str(count):
                chars[write] = digit
                write += 1
    return write`,complexity:"Time O(n), Space O(1) extra.",edge:"Single char; all same char; no repeats at all; counts >= 10 need multi-digit writes."},{diff:"M",title:"Minimum Window Substring",url:"https://leetcode.com/problems/minimum-window-substring/",problem:"Smallest substring of S containing all characters of T (with multiplicity).",approach:"Sliding window + frequency map of T. Expand right until valid, contract left while still valid, track minimum.",java:`public String minWindow(String s, String t) {
    if (s.isEmpty() || t.isEmpty()) return "";
    Map<Character, Integer> need = new HashMap<>();
    for (char c : t.toCharArray()) need.merge(c, 1, Integer::sum);
    int required = need.size(), formed = 0;
    Map<Character, Integer> windowCounts = new HashMap<>();
    int left = 0, minLen = Integer.MAX_VALUE, minStart = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        windowCounts.merge(c, 1, Integer::sum);
        if (need.containsKey(c) && windowCounts.get(c).intValue() == need.get(c).intValue()) formed++;
        while (left <= right && formed == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; minStart = left; }
            char lc = s.charAt(left);
            windowCounts.put(lc, windowCounts.get(lc) - 1);
            if (need.containsKey(lc) && windowCounts.get(lc) < need.get(lc)) formed--;
            left++;
        }
    }
    return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
}`,python:`from collections import Counter

def min_window(s, t):
    if not s or not t:
        return ""
    need = Counter(t)
    required = len(need)
    window_counts = {}
    formed = 0
    left = 0
    min_len, min_start = float('inf'), 0
    for right, char in enumerate(s):
        window_counts[char] = window_counts.get(char, 0) + 1
        if char in need and window_counts[char] == need[char]:
            formed += 1
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len, min_start = right - left + 1, left
            lc = s[left]
            window_counts[lc] -= 1
            if lc in need and window_counts[lc] < need[lc]:
                formed -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_start:min_start + min_len]`,complexity:"Time O(|S| + |T|), Space O(|S| + |T|).",edge:"T longer than S; T has repeated chars (must match multiplicity); no valid window exists."},{diff:"H",title:"Regular Expression Matching (. and *)",url:"https://leetcode.com/problems/regular-expression-matching/",problem:"Implement regex matching supporting '.' and '*'.",approach:"DP table dp[i][j]. For '*' consider zero occurrences (skip pair) and one more occurrence (if char matches).",java:`public boolean isMatch(String s, String p) {
    int m = s.length(), n = p.length();
    boolean[][] dp = new boolean[m + 1][n + 1];
    dp[0][0] = true;
    for (int j = 1; j <= n; j++) if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            char sc = s.charAt(i - 1), pc = p.charAt(j - 1);
            if (pc == '.' || pc == sc) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pc == '*') {
                dp[i][j] = dp[i][j - 2];
                char prevP = p.charAt(j - 2);
                if (prevP == '.' || prevP == sc) dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
        }
    }
    return dp[m][n];
}`,python:`def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            sc, pc = s[i - 1], p[j - 1]
            if pc == '.' or pc == sc:
                dp[i][j] = dp[i - 1][j - 1]
            elif pc == '*':
                dp[i][j] = dp[i][j - 2]
                prev_p = p[j - 2]
                if prev_p == '.' or prev_p == sc:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    return dp[m][n]`,complexity:"Time O(m*n), Space O(m*n), reducible to O(n).",edge:"Pattern like a* matching empty string; consecutive * patterns; empty pattern vs non-empty string."},{diff:"H",title:"Word Break II",url:"https://leetcode.com/problems/word-break-ii/",problem:"Return ALL ways to segment a string into dictionary words.",approach:"Backtracking with memoization on start index — try every valid dictionary prefix, recurse on remainder, combine.",java:`public List<String> wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    Map<Integer, List<String>> memo = new HashMap<>();
    return backtrack(s, 0, dict, memo);
}
private List<String> backtrack(String s, int start, Set<String> dict, Map<Integer, List<String>> memo) {
    if (memo.containsKey(start)) return memo.get(start);
    List<String> result = new ArrayList<>();
    if (start == s.length()) { result.add(""); return result; }
    for (int end = start + 1; end <= s.length(); end++) {
        String word = s.substring(start, end);
        if (dict.contains(word)) {
            for (String sub : backtrack(s, end, dict, memo)) {
                result.add(word + (sub.isEmpty() ? "" : " " + sub));
            }
        }
    }
    memo.put(start, result);
    return result;
}`,python:`def word_break(s, word_dict):
    dict_set = set(word_dict)
    memo = {}

    def backtrack(start):
        if start in memo:
            return memo[start]
        if start == len(s):
            return [""]
        result = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in dict_set:
                for sub in backtrack(end):
                    result.append(word + ("" if not sub else " " + sub))
        memo[start] = result
        return result

    return backtrack(0)`,complexity:"Time O(n^2) distinct states plus output-sensitive combination; Space O(n^2).",edge:"No valid segmentation (empty list); whole string is one word; exponential-output adversarial cases need a reachability pre-check."}]},{id:3,name:"Sliding Window",solved:!0,problems:[{diff:"E",title:"Maximum Average Subarray I (Max Sum Subarray)",url:"https://leetcode.com/problems/maximum-average-subarray-i/",problem:"Fixed-size window, find max sum or average.",approach:"Sum first window, then slide: subtract outgoing element, add incoming element.",java:`public int maxSumSubarray(int[] nums, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += nums[i];
    int maxSum = windowSum;
    for (int i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}`,python:`def max_sum_subarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum`,complexity:"Time O(n), Space O(1).",edge:"k > array length (invalid); k == array length; negative numbers present."},{diff:"M",title:"Longest Substring Without Repeating Characters",url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",problem:"Find length of the longest substring with all unique characters.",approach:"Sliding window + hashmap of last-seen index. On a repeat inside the window, jump left past the previous occurrence.",java:`public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> lastSeen = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) left = lastSeen.get(c) + 1;
        lastSeen.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,python:`def length_of_longest_substring(s):
    last_seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,complexity:"Time O(n), Space O(min(n, charset)).",edge:"Empty string; all unique; all identical characters; the >= left check is essential."},{diff:"M",title:"Longest Substring with At Most K Distinct Characters",url:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",problem:"Sliding window with a frequency map; shrink from left while distinct count > k.",approach:"Expand right always; while freq map size > k, shrink from left.",java:`public int lengthOfLongestSubstringKDistinct(String s, int k) {
    if (k == 0) return 0;
    Map<Character, Integer> freq = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        freq.merge(s.charAt(right), 1, Integer::sum);
        while (freq.size() > k) {
            char lc = s.charAt(left);
            freq.put(lc, freq.get(lc) - 1);
            if (freq.get(lc) == 0) freq.remove(lc);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,python:`def length_of_longest_substring_k_distinct(s, k):
    if k == 0:
        return 0
    freq = {}
    left = max_len = 0
    for right, char in enumerate(s):
        freq[char] = freq.get(char, 0) + 1
        while len(freq) > k:
            lc = s[left]
            freq[lc] -= 1
            if freq[lc] == 0:
                del freq[lc]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,complexity:"Time O(n), Space O(k).",edge:"k = 0; k >= distinct chars in s; empty string."},{diff:"M",title:"Fruit Into Baskets",url:"https://leetcode.com/problems/fruit-into-baskets/",problem:"Same template as K-distinct with k=2 hardcoded — recognize the disguise.",approach:"Reuse the exact K-distinct sliding window template with k=2.",java:`public int totalFruit(int[] fruits) {
    Map<Integer, Integer> freq = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < fruits.length; right++) {
        freq.merge(fruits[right], 1, Integer::sum);
        while (freq.size() > 2) {
            int lf = fruits[left];
            freq.put(lf, freq.get(lf) - 1);
            if (freq.get(lf) == 0) freq.remove(lf);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,python:`def total_fruit(fruits):
    freq = {}
    left = max_len = 0
    for right, fruit in enumerate(fruits):
        freq[fruit] = freq.get(fruit, 0) + 1
        while len(freq) > 2:
            lf = fruits[left]
            freq[lf] -= 1
            if freq[lf] == 0:
                del freq[lf]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,complexity:"Time O(n), Space O(1) (at most 3 keys).",edge:"Fewer than 2 distinct fruit types total; empty array."},{diff:"H",title:"Sliding Window Maximum",url:"https://leetcode.com/problems/sliding-window-maximum/",problem:"Max in every window of size K, return array of maxes.",approach:"Monotonic decreasing deque of indices. Front is always current window max. Pop back while smaller than new element; pop front if out of window.",java:`public int[] maxSlidingWindow(int[] nums, int k) {
    Deque<Integer> deque = new ArrayDeque<>();
    int[] result = new int[nums.length - k + 1];
    for (int i = 0; i < nums.length; i++) {
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) deque.pollFirst();
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) deque.pollLast();
        deque.offerLast(i);
        if (i >= k - 1) result[i - k + 1] = nums[deque.peekFirst()];
    }
    return result;
}`,python:`from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,complexity:"Time O(n) amortized, Space O(k).",edge:"k = 1; k = array length; duplicate values; empty array."},{diff:"H",title:"Subarrays with K Different Integers",url:"https://leetcode.com/problems/subarrays-with-k-different-integers/",problem:"Count subarrays with exactly K distinct integers.",approach:"exactly(K) = atMost(K) - atMost(K-1), each implemented as a shrinking window.",java:`public int subarraysWithKDistinct(int[] nums, int k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}
private int atMostKDistinct(int[] nums, int k) {
    if (k < 0) return 0;
    Map<Integer, Integer> freq = new HashMap<>();
    int left = 0, count = 0;
    for (int right = 0; right < nums.length; right++) {
        freq.merge(nums[right], 1, Integer::sum);
        while (freq.size() > k) {
            int ln = nums[left];
            freq.put(ln, freq.get(ln) - 1);
            if (freq.get(ln) == 0) freq.remove(ln);
            left++;
        }
        count += right - left + 1;
    }
    return count;
}`,python:`def subarrays_with_k_distinct(nums, k):
    def at_most_k_distinct(k):
        if k < 0:
            return 0
        freq = {}
        left = count = 0
        for right, num in enumerate(nums):
            freq[num] = freq.get(num, 0) + 1
            while len(freq) > k:
                ln = nums[left]
                freq[ln] -= 1
                if freq[ln] == 0:
                    del freq[ln]
                left += 1
            count += right - left + 1
        return count

    return at_most_k_distinct(k) - at_most_k_distinct(k - 1)`,complexity:"Time O(n), Space O(k).",edge:"k = 0; k > distinct elements in array; the atMost trick is the key insight, don't track 'exactly K' directly."}]},{id:4,name:"Binary Search",solved:!0,problems:[{diff:"E",title:"Search in Rotated Sorted Array",url:"https://leetcode.com/problems/search-in-rotated-sorted-array/",problem:"Array sorted ascending then rotated at an unknown pivot. Search target in O(log n).",approach:"Standard binary search; at each step determine which half is sorted, check if target lies in that half's range.",java:`public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,python:`def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,complexity:"Time O(log n), Space O(1).",edge:"Not rotated at all; single element; target absent; duplicates break the log-n guarantee."},{diff:"E",title:"Find First and Last Position of Element in Sorted Array",url:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",problem:"Return [first, last] index of target, or [-1,-1].",approach:"Two binary searches, one biased to leftmost occurrence, one to rightmost.",java:`public int[] searchRange(int[] nums, int target) {
    return new int[]{findBound(nums, target, true), findBound(nums, target, false)};
}
private int findBound(int[] nums, int target, boolean findFirst) {
    int left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;
            if (findFirst) right = mid - 1; else left = mid + 1;
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}`,python:`def search_range(nums, target):
    def find_bound(find_first):
        left, right, result = 0, len(nums) - 1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                if find_first:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result

    return [find_bound(True), find_bound(False)]`,complexity:"Time O(log n), Space O(1).",edge:"Target not present; empty array; target appears once; whole array is the target."},{diff:"M",title:"Search a 2D Matrix II",url:"https://leetcode.com/problems/search-a-2d-matrix-ii/",problem:"Each row sorted L-R, each column sorted top-bottom. Search for target.",approach:"Start top-right. If current > target move left; if current < target move down.",java:`public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    int row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,python:`def search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] > target:
            col -= 1
        else:
            row += 1
    return False`,complexity:"Time O(m + n), Space O(1).",edge:"Empty matrix/rows; target outside value range; 1x1 matrix."},{diff:"M",title:"Find Peak Element",url:"https://leetcode.com/problems/find-peak-element/",problem:"Array not necessarily sorted; find any index that is a local peak, in O(log n).",approach:"Binary search comparing nums[mid] to nums[mid+1] to decide which half must contain a peak.",java:`public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
}`,python:`def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    return left`,complexity:"Time O(log n), Space O(1).",edge:"Single element; strictly increasing/decreasing; multiple peaks (any valid one is fine)."},{diff:"M",title:"Koko Eating Bananas",url:"https://leetcode.com/problems/koko-eating-bananas/",problem:"Find minimum integer eating speed k so all piles finish within H hours.",approach:"Binary search over the ANSWER SPACE (1..max pile), not the array. Check feasibility in O(n) per candidate speed.",java:`public int minEatingSpeed(int[] piles, int h) {
    int left = 1, right = Arrays.stream(piles).max().getAsInt();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canFinish(piles, mid, h)) right = mid;
        else left = mid + 1;
    }
    return left;
}
private boolean canFinish(int[] piles, int speed, int h) {
    long hours = 0;
    for (int pile : piles) hours += (pile + speed - 1) / speed;
    return hours <= h;
}`,python:`import math

def min_eating_speed(piles, h):
    left, right = 1, max(piles)
    while left < right:
        mid = (left + right) // 2
        hours = sum(math.ceil(pile / mid) for pile in piles)
        if hours <= h:
            right = mid
        else:
            left = mid + 1
    return left`,complexity:"Time O(n log(max pile)), Space O(1).",edge:"H equal to number of piles forces max speed; large values need 64-bit accumulation in Java."},{diff:"H",title:"Median of Two Sorted Arrays",url:"https://leetcode.com/problems/median-of-two-sorted-arrays/",problem:"Same problem as Arrays 1.6 — revisit as a partition-based binary search on which array contributes more elements to the left half.",approach:"See Arrays topic for the full annotated solution; the search space here is a partition count, not array values.",java:'// See Arrays topic -> "Median of Two Sorted Arrays" for the full solution.',python:'# See Arrays topic -> "Median of Two Sorted Arrays" for the full solution.',complexity:"Time O(log(min(m,n))), Space O(1).",edge:"Cross-reference only — solved fully under Arrays."},{diff:"H",title:"Split Array Largest Sum",url:"https://leetcode.com/problems/split-array-largest-sum/",problem:"Split array into m contiguous subarrays to minimize the largest subarray sum.",approach:"Binary search on answer (candidate max sum, range max(nums)..sum(nums)). Greedily count subarrays needed; feasible if count <= m.",java:`public int splitArray(int[] nums, int m) {
    int left = Arrays.stream(nums).max().getAsInt();
    int right = Arrays.stream(nums).sum();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canSplit(nums, mid, m)) right = mid;
        else left = mid + 1;
    }
    return left;
}
private boolean canSplit(int[] nums, int maxSum, int m) {
    int count = 1, currentSum = 0;
    for (int num : nums) {
        if (currentSum + num > maxSum) { count++; currentSum = num; }
        else currentSum += num;
    }
    return count <= m;
}`,python:`def split_array(nums, m):
    left, right = max(nums), sum(nums)

    def can_split(max_sum):
        count, current_sum = 1, 0
        for num in nums:
            if current_sum + num > max_sum:
                count += 1
                current_sum = num
            else:
                current_sum += num
        return count <= m

    while left < right:
        mid = (left + right) // 2
        if can_split(mid):
            right = mid
        else:
            left = mid + 1
    return left`,complexity:"Time O(n log(sum - max)), Space O(1).",edge:"m = 1 (whole-array sum); m >= array length (max single element); one dominant element."}]},{id:5,name:"Hashing",solved:!0,problems:[{diff:"E",title:"Two Sum",url:"https://leetcode.com/problems/two-sum/",problem:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",approach:"Use a Hash Map to store complement values (target - current element) mapped to their indices for O(1) lookups.",java:`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[0];
}`,python:`def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,complexity:"Time O(n), Space O(n).",edge:"Negative numbers; exact pair adding to target; duplicate values."},{diff:"E",title:"Subarray Sum Equals K",url:"https://leetcode.com/problems/subarray-sum-equals-k/",problem:"Find the total number of contiguous subarrays whose sum equals to k.",approach:"Maintain running prefix sum and store frequency of each sum in a hashmap. Count matches where (currSum - k) exists.",java:`public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);
    int sum = 0, count = 0;
    for (int num : nums) {
        sum += num;
        if (map.containsKey(sum - k)) {
            count += map.get(sum - k);
        }
        map.put(sum, map.getOrDefault(sum, 0) + 1);
    }
    return count;
}`,python:`def subarray_sum(nums, k):
    counts = {0: 1}
    curr_sum = count = 0
    for num in nums:
        curr_sum += num
        if (curr_sum - k) in counts:
            count += counts[curr_sum - k]
        counts[curr_sum] = counts.get(curr_sum, 0) + 1
    return count`,complexity:"Time O(n), Space O(n).",edge:"Negative numbers in array; k = 0; entire array sums to k."},{diff:"M",title:"Longest Consecutive Sequence",url:"https://leetcode.com/problems/longest-consecutive-sequence/",problem:"Find length of the longest consecutive elements sequence in unsorted array in O(n) time.",approach:"Put elements into a HashSet. Only expand sequences starting at num if (num - 1) is NOT present in the set.",java:`public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);
    int maxLen = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int curr = num, len = 1;
            while (set.contains(curr + 1)) { curr++; len++; }
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
}`,python:`def longest_consecutive(nums):
    num_set = set(nums)
    max_len = 0
    for num in num_set:
        if num - 1 not in num_set:
            curr = num
            curr_len = 1
            while curr + 1 in num_set:
                curr += 1
                curr_len += 1
            max_len = max(max_len, curr_len)
    return max_len`,complexity:"Time O(n), Space O(n).",edge:"Empty array; duplicate numbers; negative values."},{diff:"M",title:"Insert Delete GetRandom O(1)",url:"https://leetcode.com/problems/insert-delete-getrandom-o1/",problem:"Design data structure supporting insert, remove, and getRandom in O(1) average time.",approach:"Combine dynamic array with a HashMap (val -> array index). Swap target element with last element for O(1) removal.",java:`class RandomizedSet {
    List<Integer> list = new ArrayList<>();
    Map<Integer, Integer> map = new HashMap<>();
    Random rand = new Random();

    public boolean insert(int val) {
        if (map.containsKey(val)) return false;
        map.put(val, list.size());
        list.add(val);
        return true;
    }
    public boolean remove(int val) {
        if (!map.containsKey(val)) return false;
        int idx = map.get(val);
        int last = list.get(list.size() - 1);
        list.set(idx, last);
        map.put(last, idx);
        list.remove(list.size() - 1);
        map.remove(val);
        return true;
    }
    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }
}`,python:`import random

class RandomizedSet:
    def __init__(self):
        self.nums = []
        self.val_map = {}

    def insert(self, val: int) -> bool:
        if val in self.val_map: return False
        self.val_map[val] = len(self.nums)
        self.nums.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.val_map: return False
        idx = self.val_map[val]
        last = self.nums[-1]
        self.nums[idx] = last
        self.val_map[last] = idx
        self.nums.pop()
        del self.val_map[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.nums)`,complexity:"Time O(1) average, Space O(n).",edge:"Removing element that is already at the end of the array."},{diff:"M",title:"Isomorphic Strings",url:"https://leetcode.com/problems/isomorphic-strings/",problem:"Check if characters in s can be replaced 1-to-1 to get t.",approach:"Store the last seen 1-based index for characters in both strings using fixed 256 size arrays.",java:`public boolean isIsomorphic(String s, String t) {
    int[] m1 = new int[256], m2 = new int[256];
    for (int i = 0; i < s.length(); i++) {
        if (m1[s.charAt(i)] != m2[t.charAt(i)]) return false;
        m1[s.charAt(i)] = i + 1;
        m2[t.charAt(i)] = i + 1;
    }
    return true;
}`,python:`def is_isomorphic(s: str, t: str) -> bool:
    m1, m2 = {}, {}
    for c1, c2 in zip(s, t):
        if m1.get(c1) != m2.get(c2):
            return False
        m1[c1] = m2[c2] = c1 + "-" + c2
    return True`,complexity:"Time O(n), Space O(1).",edge:"Multiple characters trying to map to the same target character."},{diff:"H",title:"LFU Cache",url:"https://leetcode.com/problems/lfu-cache/",problem:"Design LFU (Least Frequently Used) Cache with get & put in O(1).",approach:"Map key to node, and map frequency to a Doubly Linked List of nodes. Track minFreq.",java:`class LFUCache {
    class Node {
        int key, val, freq = 1;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    class DLList {
        Node head = new Node(0, 0), tail = new Node(0, 0);
        int size = 0;
        DLList() { head.next = tail; tail.prev = head; }
        void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; size++; }
        void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; size--; }
        Node popTail() { if (size == 0) return null; Node n = tail.prev; remove(n); return n; }
    }
    int cap, minFreq = 0;
    Map<Integer, Node> keyMap = new HashMap<>();
    Map<Integer, DLList> freqMap = new HashMap<>();

    public LFUCache(int capacity) { cap = capacity; }
    public int get(int key) {
        Node n = keyMap.get(key);
        if (n == null) return -1;
        update(n);
        return n.val;
    }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (keyMap.containsKey(key)) {
            Node n = keyMap.get(key);
            n.val = value;
            update(n);
        } else {
            if (keyMap.size() >= cap) {
                Node evicted = freqMap.get(minFreq).popTail();
                keyMap.remove(evicted.key);
            }
            Node n = new Node(key, value);
            keyMap.put(key, n);
            freqMap.computeIfAbsent(1, k -> new DLList()).add(n);
            minFreq = 1;
        }
    }
    private void update(Node n) {
        DLList oldList = freqMap.get(n.freq);
        oldList.remove(n);
        if (n.freq == minFreq && oldList.size == 0) minFreq++;
        n.freq++;
        freqMap.computeIfAbsent(n.freq, k -> new DLList()).add(n);
    }
}`,python:`from collections import defaultdict

class Node:
    def __init__(self, k, v):
        self.key, self.val, self.freq = k, v, 1
        self.prev = self.next = None

class DLList:
    def __init__(self):
        self.head, self.tail = Node(0, 0), Node(0, 0)
        self.head.next = self.tail; self.tail.prev = self.head
        self.size = 0
    def add(self, n):
        n.next = self.head.next; n.prev = self.head
        self.head.next.prev = n; self.head.next = n; self.size += 1
    def remove(self, n):
        n.prev.next = n.next; n.next.prev = n.prev; self.size -= 1
    def pop_tail(self):
        if self.size == 0: return None
        n = self.tail.prev; self.remove(n); return n

class LFUCache:
    def __init__(self, capacity: int):
        self.cap, self.min_freq = capacity, 0
        self.key_map, self.freq_map = {}, defaultdict(DLList)

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        node = self.key_map[key]
        self._update(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            node = self.key_map[key]
            node.val = value
            self._update(node)
        else:
            if len(self.key_map) >= self.cap:
                evicted = self.freq_map[self.min_freq].pop_tail()
                del self.key_map[evicted.key]
            node = Node(key, value)
            self.key_map[key] = node
            self.freq_map[1].add(node)
            self.min_freq = 1

    def _update(self, node):
        flist = self.freq_map[node.freq]
        flist.remove(node)
        if node.freq == self.min_freq and flist.size == 0: self.min_freq += 1
        node.freq += 1
        self.freq_map[node.freq].add(node)`,complexity:"Time O(1), Space O(capacity).",edge:"Capacity 0; tie-breaker for identical frequencies (evicts least recently used)."}]},{id:6,name:"Stack & Queue",solved:!0,problems:[{diff:"E",title:"Valid Parentheses",url:"https://leetcode.com/problems/valid-parentheses/",problem:"Determine if string of brackets '()[]{}' is valid and matched in order.",approach:"Use a Stack. Push expected closing brackets for open brackets; pop and compare for closing brackets.",java:`public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,python:`def is_valid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top: return False
        else:
            stack.append(char)
    return not stack`,complexity:"Time O(n), Space O(n).",edge:"Odd length string; starting with closing bracket; remaining unclosed brackets."},{diff:"E",title:"Implement Queue using Stacks",url:"https://leetcode.com/problems/implement-queue-using-stacks/",problem:"Implement FIFO queue using two stacks (inStack and outStack).",approach:"Push to inStack. For pop/peek, transfer elements to outStack if outStack is empty.",java:`class MyQueue {
    Deque<Integer> in = new ArrayDeque<>(), out = new ArrayDeque<>();
    public void push(int x) { in.push(x); }
    public int pop() { peek(); return out.pop(); }
    public int peek() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) out.push(in.pop());
        }
        return out.peek();
    }
    public boolean empty() { return in.isEmpty() && out.isEmpty(); }
}`,python:`class MyQueue:
    def __init__(self):
        self.in_stk, self.out_stk = [], []
    def push(self, x: int) -> None:
        self.in_stk.append(x)
    def pop(self) -> int:
        self.peek()
        return self.out_stk.pop()
    def peek(self) -> int:
        if not self.out_stk:
            while self.in_stk:
                self.out_stk.append(self.in_stk.pop())
        return self.out_stk[-1]
    def empty(self) -> bool:
        return not self.in_stk and not self.out_stk`,complexity:"Time O(1) amortized, Space O(n).",edge:"Popping or peeking when queue is empty."},{diff:"M",title:"Next Greater Element II",url:"https://leetcode.com/problems/next-greater-element-ii/",problem:"Find next greater element in a circular array.",approach:"Monotonic stack holding indices, iterating through array twice (index i % n).",java:`public int[] nextGreaterElements(int[] nums) {
    int n = nums.length;
    int[] res = new int[n];
    Arrays.fill(res, -1);
    Deque<Integer> stack = new ArrayDeque<>();
    for (int i = 0; i < 2 * n; i++) {
        while (!stack.isEmpty() && nums[stack.peek()] < nums[i % n]) {
            res[stack.pop()] = nums[i % n];
        }
        if (i < n) stack.push(i);
    }
    return res;
}`,python:`def next_greater_elements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []
    for i in range(2 * n):
        while stack and nums[stack[-1]] < nums[i % n]:
            res[stack.pop()] = nums[i % n]
        if i < n: stack.append(i)
    return res`,complexity:"Time O(n), Space O(n).",edge:"Strictly decreasing array; all elements equal."},{diff:"M",title:"Min Stack",url:"https://leetcode.com/problems/min-stack/",problem:"Design stack that supports push, pop, top, and retrieving min in O(1).",approach:"Maintain a primary stack and a minStack that records running minimums.",java:`class MinStack {
    Deque<Integer> stack = new ArrayDeque<>(), minStack = new ArrayDeque<>();
    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);
    }
    public void pop() {
        if (stack.pop().equals(minStack.peek())) minStack.pop();
    }
    public int top() { return stack.peek(); }
    public int getMin() { return minStack.peek(); }
}`,python:`class MinStack:
    def __init__(self):
        self.stack, self.min_stack = [], []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        if self.stack.pop() == self.min_stack[-1]:
            self.min_stack.pop()
    def top(self) -> int: return self.stack[-1]
    def getMin(self) -> int: return self.min_stack[-1]`,complexity:"Time O(1), Space O(n).",edge:"Duplicate minimum values pushed consecutively."},{diff:"M",title:"Evaluate Reverse Polish Notation",url:"https://leetcode.com/problems/evaluate-reverse-polish-notation/",problem:"Evaluate arithmetic expression in Reverse Polish Notation (postfix).",approach:"Use a Stack. Push numbers; pop two operands for operators and push result.",java:`public int evalRPN(String[] tokens) {
    Deque<Integer> stack = new ArrayDeque<>();
    for (String t : tokens) {
        if (t.equals("+")) stack.push(stack.pop() + stack.pop());
        else if (t.equals("-")) { int b = stack.pop(); stack.push(stack.pop() - b); }
        else if (t.equals("*")) stack.push(stack.pop() * stack.pop());
        else if (t.equals("/")) { int b = stack.pop(); stack.push(stack.pop() / b); }
        else stack.push(Integer.parseInt(t));
    }
    return stack.pop();
}`,python:`def eval_rpn(tokens):
    stack = []
    for t in tokens:
        if t in "+-*/":
            b = stack.pop()
            a = stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            elif t == '/': stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]`,complexity:"Time O(n), Space O(n).",edge:"Integer division truncates toward zero; negative numbers."},{diff:"H",title:"Largest Rectangle in Histogram",url:"https://leetcode.com/problems/largest-rectangle-in-histogram/",problem:"Find area of largest rectangle in histogram bar heights.",approach:"Monotonic increasing stack holding bar indices. Compute area when height decreases.",java:`public int largestRectangleArea(int[] heights) {
    int n = heights.length, maxArea = 0;
    Deque<Integer> stack = new ArrayDeque<>();
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        while (!stack.isEmpty() && heights[stack.peek()] > h) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}`,python:`def largest_rectangle_area(heights):
    stack = []
    max_area = 0
    heights.append(0)
    for i, h in enumerate(heights):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    heights.pop()
    return max_area`,complexity:"Time O(n), Space O(n).",edge:"All heights equal; strictly increasing or decreasing heights."},{diff:"H",title:"Sliding Window Maximum",url:"https://leetcode.com/problems/sliding-window-maximum/",problem:"Find max element in each sliding window of size k.",approach:"Monotonic Deque storing indices in decreasing order of values.",java:`public int[] maxSlidingWindow(int[] nums, int k) {
    int n = nums.length;
    int[] res = new int[n - k + 1];
    Deque<Integer> dq = new ArrayDeque<>();
    for (int i = 0; i < n; i++) {
        if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();
        while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();
        dq.offerLast(i);
        if (i >= k - 1) res[i - k + 1] = nums[dq.peekFirst()];
    }
    return res;
}`,python:`from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    res = []
    for i, num in enumerate(nums):
        if dq and dq[0] < i - k + 1: dq.popleft()
        while dq and nums[dq[-1]] < num: dq.pop()
        dq.append(i)
        if i >= k - 1: res.append(nums[dq[0]])
    return res`,complexity:"Time O(n), Space O(k).",edge:"k = 1; k = nums.length."}]},{id:7,name:"Linked List",solved:!0,problems:[{diff:"E",title:"Reverse Linked List",url:"https://leetcode.com/problems/reverse-linked-list/",problem:"Reverse a singly linked list.",approach:"Iterative three-pointer approach (prev, curr, nextTemp).",java:`public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,python:`def reverse_list(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,complexity:"Time O(n), Space O(1).",edge:"Null head; single node list."},{diff:"E",title:"Linked List Cycle II",url:"https://leetcode.com/problems/linked-list-cycle-ii/",problem:"Find the node where the cycle begins in a linked list.",approach:"Floyd's Cycle Finding algorithm (Slow & Fast pointers). Reset slow to head upon intersection.",java:`public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            ListNode entry = head;
            while (entry != slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    return null;
}`,python:`def detect_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow == fast:
            entry = head
            while entry != slow:
                entry, slow = entry.next, slow.next
            return entry
    return None`,complexity:"Time O(n), Space O(1).",edge:"No cycle; cycle at node 0 (head)."},{diff:"M",title:"Merge k Sorted Lists",url:"https://leetcode.com/problems/merge-k-sorted-lists/",problem:"Merge k sorted linked lists into one sorted list.",approach:"Min-Heap / PriorityQueue storing head of each list.",java:`public ListNode mergeKLists(ListNode[] lists) {
    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
    for (ListNode node : lists) if (node != null) pq.add(node);
    ListNode dummy = new ListNode(0), curr = dummy;
    while (!pq.isEmpty()) {
        ListNode top = pq.poll();
        curr.next = top;
        curr = curr.next;
        if (top.next != null) pq.add(top.next);
    }
    return dummy.next;
}`,python:`import heapq

def merge_k_lists(lists):
    heap = []
    for i, l in enumerate(lists):
        if l: heapq.heappush(heap, (l.val, i, l))
    dummy = curr = ListNode(0)
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next`,complexity:"Time O(N log k), Space O(k).",edge:"Empty array of lists; lists containing nulls."},{diff:"M",title:"Add Two Numbers",url:"https://leetcode.com/problems/add-two-numbers/",problem:"Add two non-empty linked lists representing non-negative integers in reverse order.",approach:"Iterate through lists digit by digit, maintaining carry.",java:`public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0), curr = dummy;
    int carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        int sum = carry;
        if (l1 != null) { sum += l1.val; l1 = l1.next; }
        if (l2 != null) { sum += l2.val; l2 = l2.next; }
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    return dummy.next;
}`,python:`def add_two_numbers(l1, l2):
    dummy = curr = ListNode(0)
    carry = 0
    while l1 or l2 or carry:
        val = carry
        if l1: val += l1.val; l1 = l1.next
        if l2: val += l2.val; l2 = l2.next
        carry = val // 10
        curr.next = ListNode(val % 10)
        curr = curr.next
    return dummy.next`,complexity:"Time O(max(N,M)), Space O(max(N,M)).",edge:"Final carry producing an additional node."},{diff:"M",title:"Flatten a Multilevel Doubly Linked List",url:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",problem:"Flatten a multilevel doubly linked list so nodes form a single-level doubly linked list.",approach:"Use a Stack to store next pointers when child pointers are encountered.",java:`public Node flatten(Node head) {
    if (head == null) return head;
    Node curr = head;
    while (curr != null) {
        if (curr.child != null) {
            Node next = curr.next;
            Node child = curr.child;
            curr.next = child; child.prev = curr; curr.child = null;
            Node tail = child;
            while (tail.next != null) tail = tail.next;
            tail.next = next;
            if (next != null) next.prev = tail;
        }
        curr = curr.next;
    }
    return head;
}`,python:`def flatten(head):
    if not head: return head
    curr = head
    while curr:
        if curr.child:
            nxt = curr.next
            child = curr.child
            curr.next = child; child.prev = curr; curr.child = None
            tail = child
            while tail.next: tail = tail.next
            tail.next = nxt
            if nxt: nxt.prev = tail
        curr = curr.next
    return head`,complexity:"Time O(n), Space O(1).",edge:"Deeply nested children; child at the end of list."},{diff:"H",title:"LRU Cache",url:"https://leetcode.com/problems/lru-cache/",problem:"Design LRU (Least Recently Used) Cache with get and put in O(1).",approach:"HashMap (key -> Node) + Doubly Linked List for ordering access.",java:`class LRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    int cap;
    Map<Integer, Node> map = new HashMap<>();
    Node head = new Node(0, 0), tail = new Node(0, 0);
    public LRUCache(int capacity) {
        cap = capacity; head.next = tail; tail.prev = head;
    }
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node n = map.get(key); remove(n); insert(n);
        return n.val;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        if (map.size() == cap) { map.remove(tail.prev.key); remove(tail.prev); }
        Node n = new Node(key, value); insert(n); map.put(key, n);
    }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void insert(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
}`,python:`class Node:
    def __init__(self, k, v): self.key, self.val = k, v; self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity; self.map = {}
        self.head, self.tail = Node(0, 0), Node(0, 0)
        self.head.next = self.tail; self.tail.prev = self.head
    def get(self, key: int) -> int:
        if key not in self.map: return -1
        n = self.map[key]; self._remove(n); self._insert(n)
        return n.val
    def put(self, key: int, value: int) -> None:
        if key in self.map: self._remove(self.map[key])
        if len(self.map) == self.cap:
            del self.map[self.tail.prev.key]; self._remove(self.tail.prev)
        n = Node(key, value); self._insert(n); self.map[key] = n
    def _remove(self, n): n.prev.next = n.next; n.next.prev = n.prev
    def _insert(self, n): n.next = self.head.next; n.prev = self.head; self.head.next.prev = n; self.head.next = n`,complexity:"Time O(1), Space O(capacity).",edge:"Updating existing key; capacity 1."},{diff:"H",title:"Reverse Nodes in k-Group",url:"https://leetcode.com/problems/reverse-nodes-in-k-group/",problem:"Reverse nodes of a linked list k at a time.",approach:"Check if k nodes exist. If so, reverse the k sublist and recurse for the remainder.",java:`public ListNode reverseKGroup(ListNode head, int k) {
    ListNode curr = head;
    int count = 0;
    while (curr != null && count != k) { curr = curr.next; count++; }
    if (count == k) {
        curr = reverseKGroup(curr, k);
        while (count-- > 0) {
            ListNode tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }
        head = curr;
    }
    return head;
}`,python:`def reverse_k_group(head, k):
    curr = head
    count = 0
    while curr and count != k:
        curr = curr.next
        count += 1
    if count == k:
        curr = reverse_k_group(curr, k)
        while count > 0:
            tmp = head.next
            head.next = curr
            curr = head
            head = tmp
            count -= 1
        head = curr
    return head`,complexity:"Time O(n), Space O(n / k) call stack.",edge:"Length of list not multiple of k (leaves last part intact)."}]},{id:8,name:"Trees",solved:!0,problems:[{diff:"E",title:"Binary Tree Level Order Traversal",url:"https://leetcode.com/problems/binary-tree-level-order-traversal/",problem:"Return level order traversal of binary tree nodes' values.",approach:"BFS using a Queue. Process queue level by level.",java:`public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    if (root == null) return res;
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    while (!q.isEmpty()) {
        int size = q.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = q.poll();
            level.add(node.val);
            if (node.left != null) q.add(node.left);
            if (node.right != null) q.add(node.right);
        }
        res.add(level);
    }
    return res;
}`,python:`from collections import deque

def level_order(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`,complexity:"Time O(n), Space O(n).",edge:"Empty tree (null root)."},{diff:"E",title:"Balanced Binary Tree",url:"https://leetcode.com/problems/balanced-binary-tree/",problem:"Check if height of left & right subtrees of every node differs by <= 1.",approach:"Bottom-up DFS returning height if balanced or -1 if unbalanced.",java:`public boolean isBalanced(TreeNode root) {
    return checkHeight(root) != -1;
}
private int checkHeight(TreeNode node) {
    if (node == null) return 0;
    int l = checkHeight(node.left);
    if (l == -1) return -1;
    int r = checkHeight(node.right);
    if (r == -1) return -1;
    if (Math.abs(l - r) > 1) return -1;
    return Math.max(l, r) + 1;
}`,python:`def is_balanced(root) -> bool:
    def check(node):
        if not node: return 0
        l = check(node.left)
        if l == -1: return -1
        r = check(node.right)
        if r == -1: return -1
        if abs(l - r) > 1: return -1
        return max(l, r) + 1
    return check(root) != -1`,complexity:"Time O(n), Space O(h).",edge:"Single node tree; skewed tree."},{diff:"M",title:"Lowest Common Ancestor of a Binary Tree",url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",problem:"Find LCA of two given nodes p and q in binary tree.",approach:"Recursive DFS: return root if root == p || root == q. If both left & right return non-null, root is LCA.",java:`public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`,python:`def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q: return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right: return root
    return left or right`,complexity:"Time O(n), Space O(h).",edge:"p is ancestor of q."},{diff:"M",title:"Diameter of Binary Tree",url:"https://leetcode.com/problems/diameter-of-binary-tree/",problem:"Find length of longest path between any two nodes in a tree.",approach:"DFS tracking global max of (leftHeight + rightHeight).",java:`int maxDiam = 0;
public int diameterOfBinaryTree(TreeNode root) {
    getHeight(root);
    return maxDiam;
}
private int getHeight(TreeNode node) {
    if (node == null) return 0;
    int l = getHeight(node.left);
    int r = getHeight(node.right);
    maxDiam = Math.max(maxDiam, l + r);
    return Math.max(l, r) + 1;
}`,python:`def diameter_of_binary_tree(root) -> int:
    max_d = 0
    def height(node):
        nonlocal max_d
        if not node: return 0
        l, r = height(node.left), height(node.right)
        max_d = max(max_d, l + r)
        return max(l, r) + 1
    height(root)
    return max_d`,complexity:"Time O(n), Space O(h).",edge:"Path does not pass through root."},{diff:"M",title:"Serialize and Deserialize Binary Tree",url:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",problem:"Design an algorithm to serialize and deserialize a binary tree.",approach:"Preorder traversal with null markers (e.g. 'null,').",java:`public class Codec {
    public String serialize(TreeNode root) {
        if (root == null) return "N";
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }
    public TreeNode deserialize(String data) {
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return build(q);
    }
    private TreeNode build(Queue<String> q) {
        String s = q.poll();
        if (s.equals("N")) return null;
        TreeNode node = new TreeNode(Integer.parseInt(s));
        node.left = build(q);
        node.right = build(q);
        return node;
    }
}`,python:`class Codec:
    def serialize(self, root):
        if not root: return "N"
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"

    def deserialize(self, data):
        vals = iter(data.split(','))
        def build():
            val = next(vals)
            if val == 'N': return None
            node = TreeNode(int(val))
            node.left = build()
            node.right = build()
            return node
        return build()`,complexity:"Time O(n), Space O(n).",edge:"Negative values in tree; single node."},{diff:"M",title:"Construct Binary Tree from Preorder and Inorder Traversal",url:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",problem:"Reconstruct binary tree given preorder & inorder arrays.",approach:"Preorder gives root. Find root index in inorder array using HashMap to divide left & right subtrees.",java:`Map<Integer, Integer> map = new HashMap<>();
int preIdx = 0;
public TreeNode buildTree(int[] preorder, int[] inorder) {
    for (int i = 0; i < inorder.length; i++) map.put(inorder[i], i);
    return helper(preorder, 0, inorder.length - 1);
}
private TreeNode helper(int[] preorder, int left, int right) {
    if (left > right) return null;
    int val = preorder[preIdx++];
    TreeNode root = new TreeNode(val);
    int inIdx = map.get(val);
    root.left = helper(preorder, left, inIdx - 1);
    root.right = helper(preorder, inIdx + 1, right);
    return root;
}`,python:`def build_tree(preorder, inorder):
    in_map = {val: i for i, val in enumerate(inorder)}
    pre_idx = 0
    def helper(left, right):
        nonlocal pre_idx
        if left > right: return None
        val = preorder[pre_idx]
        pre_idx += 1
        root = TreeNode(val)
        idx = in_map[val]
        root.left = helper(left, idx - 1)
        root.right = helper(idx + 1, right)
        return root
    return helper(0, len(inorder) - 1)`,complexity:"Time O(n), Space O(n).",edge:"Single element tree."},{diff:"H",title:"Binary Tree Maximum Path Sum",url:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",problem:"Find maximum path sum where path goes from any node to any node.",approach:"DFS calculating max gain from subtrees (ignore negative gains with Math.max(0, gain)).",java:`int maxSum = Integer.MIN_VALUE;
public int maxPathSum(TreeNode root) {
    maxGain(root);
    return maxSum;
}
private int maxGain(TreeNode node) {
    if (node == null) return 0;
    int left = Math.max(0, maxGain(node.left));
    int right = Math.max(0, maxGain(node.right));
    maxSum = Math.max(maxSum, node.val + left + right);
    return node.val + Math.max(left, right);
}`,python:`def max_path_sum(root) -> int:
    max_sum = float('-inf')
    def gain(node):
        nonlocal max_sum
        if not node: return 0
        l = max(0, gain(node.left))
        r = max(0, gain(node.right))
        max_sum = max(max_sum, node.val + l + r)
        return node.val + max(l, r)
    gain(root)
    return max_sum`,complexity:"Time O(n), Space O(h).",edge:"All negative node values in tree."},{diff:"H",title:"Vertical Order Traversal of a Binary Tree",url:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",problem:"Return vertical order traversal of a binary tree.",approach:"BFS/DFS tracking (col, row, val). Sort by col, then row, then val.",java:`class Tuple {
    TreeNode node; int row, col;
    Tuple(TreeNode n, int r, int c) { node = n; row = r; col = c; }
}
public List<List<Integer>> verticalTraversal(TreeNode root) {
    TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> map = new TreeMap<>();
    Queue<Tuple> q = new LinkedList<>();
    q.add(new Tuple(root, 0, 0));
    while (!q.isEmpty()) {
        Tuple t = q.poll();
        map.computeIfAbsent(t.col, k -> new TreeMap<>())
           .computeIfAbsent(t.row, k -> new PriorityQueue<>())
           .add(t.node.val);
        if (t.node.left != null) q.add(new Tuple(t.node.left, t.row + 1, t.col - 1));
        if (t.node.right != null) q.add(new Tuple(t.node.right, t.row + 1, t.col + 1));
    }
    List<List<Integer>> res = new ArrayList<>();
    for (TreeMap<Integer, PriorityQueue<Integer>> cols : map.values()) {
        List<Integer> colList = new ArrayList<>();
        for (PriorityQueue<Integer> pq : cols.values()) {
            while (!pq.isEmpty()) colList.add(pq.poll());
        }
        res.add(colList);
    }
    return res;
}`,python:`from collections import defaultConfig, deque

def vertical_traversal(root):
    nodes = []
    q = deque([(root, 0, 0)])
    while q:
        node, row, col = q.popleft()
        if node:
            nodes.append((col, row, node.val))
            q.append((node.left, row + 1, col - 1))
            q.append((node.right, row + 1, col + 1))
    nodes.sort()
    res = {}
    for col, row, val in nodes:
        res.setdefault(col, []).append(val)
    return list(res.values())`,complexity:"Time O(n log n), Space O(n).",edge:"Multiple nodes at identical (col, row)."}]},{id:9,name:"Graphs",solved:!0,problems:[{diff:"E",title:"Number of Connected Components in an Undirected Graph",url:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",problem:"Find number of connected components in n nodes with undirected edges.",approach:"Union-Find (Disjoint Set Union) with path compression.",java:`public int countComponents(int n, int[][] edges) {
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) parent[i] = i;
    int comp = n;
    for (int[] e : edges) {
        int r1 = find(parent, e[0]), r2 = find(parent, e[1]);
        if (r1 != r2) { parent[r1] = r2; comp--; }
    }
    return comp;
}
private int find(int[] p, int i) {
    if (p[i] == i) return i;
    return p[i] = find(p, p[i]);
}`,python:`def count_components(n, edges):
    parent = list(range(n))
    def find(i):
        if parent[i] == i: return i
        parent[i] = find(parent[i])
        return parent[i]
    comp = n
    for u, v in edges:
        r1, r2 = find(u), find(v)
        if r1 != r2:
            parent[r1] = r2
            comp -= 1
    return comp`,complexity:"Time O(E * α(V)), Space O(V).",edge:"Graph with 0 edges (n components)."},{diff:"M",title:"Course Schedule",url:"https://leetcode.com/problems/course-schedule/",problem:"Determine if you can finish all courses given prerequisite dependencies.",approach:"Topological Sort via Kahn's Algorithm (In-degree array + BFS Queue).",java:`public boolean canFinish(int numCourses, int[][] prerequisites) {
    int[] inDegree = new int[numCourses];
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
    for (int[] p : prerequisites) {
        adj.get(p[1]).add(p[0]);
        inDegree[p[0]]++;
    }
    Queue<Integer> q = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.add(i);
    int count = 0;
    while (!q.isEmpty()) {
        int curr = q.poll();
        count++;
        for (int next : adj.get(curr)) {
            if (--inDegree[next] == 0) q.add(next);
        }
    }
    return count == numCourses;
}`,python:`from collections import deque, defaultdict

def can_finish(num_courses, prerequisites):
    in_degree = [0] * num_courses
    adj = defaultdict(list)
    for dest, src in prerequisites:
        adj[src].append(dest)
        in_degree[dest] += 1
    q = deque([i for i in range(num_courses) if in_degree[i] == 0])
    visited = 0
    while q:
        curr = q.popleft()
        visited += 1
        for nxt in adj[curr]:
            in_degree[nxt] -= 1
            if in_degree[nxt] == 0: q.append(nxt)
    return visited == num_courses`,complexity:"Time O(V + E), Space O(V + E).",edge:"Cyclic dependencies present (e.g. 0->1 and 1->0)."},{diff:"M",title:"Number of Islands",url:"https://leetcode.com/problems/number-of-islands/",problem:"Count number of islands surrounded by water in a 2D binary grid.",approach:"DFS/BFS grid traversal. Sink visited land nodes from '1' to '0'.",java:`public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int count = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}
private void dfs(char[][] grid, int r, int c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == '0') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c); dfs(grid, r - 1, c);
    dfs(grid, r, c + 1); dfs(grid, r, c - 1);
}`,python:`def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0': return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,complexity:"Time O(R * C), Space O(R * C).",edge:"Grid containing only water '0'."},{diff:"M",title:"Network Delay Time (Dijkstra)",url:"https://leetcode.com/problems/network-delay-time/",problem:"Find minimum time for signal to reach all n nodes from node k.",approach:"Dijkstra's Algorithm using a Min-Heap (dist, node).",java:`public int networkDelayTime(int[][] times, int n, int k) {
    Map<Integer, List<int[]>> adj = new HashMap<>();
    for (int[] t : times) {
        adj.computeIfAbsent(t[0], x -> new ArrayList<>()).add(new int[]{t[1], t[2]});
    }
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    pq.add(new int[]{0, k});
    Map<Integer, Integer> dist = new HashMap<>();
    while (!pq.isEmpty()) {
        int[] top = pq.poll();
        int d = top[0], node = top[1];
        if (dist.containsKey(node)) continue;
        dist.put(node, d);
        if (adj.containsKey(node)) {
            for (int[] next : adj.get(node)) {
                if (!dist.containsKey(next[0])) pq.add(new int[]{d + next[1], next[0]});
            }
        }
    }
    if (dist.size() != n) return -1;
    int maxTime = 0;
    for (int v : dist.values()) maxTime = Math.max(maxTime, v);
    return maxTime;
}`,python:`import heapq, collections

def network_delay_time(times, n, k):
    adj = collections.defaultdict(list)
    for u, v, w in times: adj[u].append((v, w))
    pq = [(0, k)]
    dist = {}
    while pq:
        d, node = heapq.heappop(pq)
        if node not in dist:
            dist[node] = d
            for nxt, w in adj[node]:
                if nxt not in dist: heapq.heappush(pq, (d + w, nxt))
    return max(dist.values()) if len(dist) == n else -1`,complexity:"Time O(E log V), Space O(V + E).",edge:"Disconnected graph nodes."},{diff:"M",title:"Clone Graph",url:"https://leetcode.com/problems/clone-graph/",problem:"Return a deep copy of a connected undirected graph.",approach:"HashMap mapping original Node -> cloned Node + DFS traversal.",java:`Map<Node, Node> map = new HashMap<>();
public Node cloneGraph(Node node) {
    if (node == null) return null;
    if (map.containsKey(node)) return map.get(node);
    Node clone = new Node(node.val, new ArrayList<>());
    map.put(node, clone);
    for (Node neighbor : node.neighbors) {
        clone.neighbors.add(cloneGraph(neighbor));
    }
    return clone;
}`,python:`def clone_graph(node):
    old_to_new = {}
    def dfs(n):
        if not n: return None
        if n in old_to_new: return old_to_new[n]
        copy = Node(n.val)
        old_to_new[n] = copy
        for nei in n.neighbors:
            copy.neighbors.append(dfs(nei))
        return copy
    return dfs(node)`,complexity:"Time O(V + E), Space O(V).",edge:"Single node with no neighbors."},{diff:"H",title:"Word Ladder",url:"https://leetcode.com/problems/word-ladder/",problem:"Find length of shortest transformation sequence from beginWord to endWord.",approach:"BFS level-by-level state search. Replace each character 'a'-'z'.",java:`public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    Set<String> set = new HashSet<>(wordList);
    if (!set.contains(endWord)) return 0;
    Queue<String> q = new LinkedList<>();
    q.add(beginWord);
    int level = 1;
    while (!q.isEmpty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            char[] word = q.poll().toCharArray();
            for (int j = 0; j < word.length; j++) {
                char orig = word[j];
                for (char c = 'a'; c <= 'z'; c++) {
                    word[j] = c;
                    String check = new String(word);
                    if (check.equals(endWord)) return level + 1;
                    if (set.contains(check)) {
                        q.add(check);
                        set.remove(check);
                    }
                }
                word[j] = orig;
            }
        }
        level++;
    }
    return 0;
}`,python:`from collections import deque

def ladder_length(begin_word, end_word, word_list):
    words = set(word_list)
    if end_word not in words: return 0
    q = deque([(begin_word, 1)])
    while q:
        word, step = q.popleft()
        if word == end_word: return step
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nxt = word[:i] + c + word[i+1:]
                if nxt in words:
                    words.remove(nxt)
                    q.append((nxt, step + 1))
    return 0`,complexity:"Time O(N * L * 26), Space O(N).",edge:"endWord not in wordList."},{diff:"H",title:"Alien Dictionary",url:"https://leetcode.com/problems/alien-dictionary/",problem:"Derive character ordering from sorted words list in alien language.",approach:"Build directed graph by comparing adjacent words, then perform Topological Sort.",java:`public String alienOrder(String[] words) {
    Map<Character, Set<Character>> adj = new HashMap<>();
    Map<Character, Integer> inDegree = new HashMap<>();
    for (String w : words) for (char c : w.toCharArray()) { adj.put(c, new HashSet<>()); inDegree.put(c, 0); }
    for (int i = 0; i < words.length - 1; i++) {
        String w1 = words[i], w2 = words[i + 1];
        if (w1.length() > w2.length() && w1.startsWith(w2)) return "";
        for (int j = 0; j < Math.min(w1.length(), w2.length()); j++) {
            if (w1.charAt(j) != w2.charAt(j)) {
                if (!adj.get(w1.charAt(j)).contains(w2.charAt(j))) {
                    adj.get(w1.charAt(j)).add(w2.charAt(j));
                    inDegree.put(w2.charAt(j), inDegree.get(w2.charAt(j)) + 1);
                }
                break;
            }
        }
    }
    Queue<Character> q = new LinkedList<>();
    for (char c : inDegree.keySet()) if (inDegree.get(c) == 0) q.add(c);
    StringBuilder sb = new StringBuilder();
    while (!q.isEmpty()) {
        char c = q.poll();
        sb.append(c);
        for (char next : adj.get(c)) {
            inDegree.put(next, inDegree.get(next) - 1);
            if (inDegree.get(next) == 0) q.add(next);
        }
    }
    return sb.length() == inDegree.size() ? sb.toString() : "";
}`,python:`from collections import defaultdict, deque

def alien_order(words):
    adj = {c: set() for w in words for c in w}
    in_degree = {c: 0 for c in words for c in words}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i+1]
        if len(w1) > len(w2) and w1.startswith(w2): return ""
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                if c2 not in adj[c1]:
                    adj[c1].add(c2)
                    in_degree[c2] += 1
                break
    q = deque([c for c in in_degree if in_degree[c] == 0])
    res = []
    while q:
        c = q.popleft()
        res.append(c)
        for nxt in adj[c]:
            in_degree[nxt] -= 1
            if in_degree[nxt] == 0: q.append(nxt)
    return "".join(res) if len(res) == len(in_degree) else ""`,complexity:"Time O(C) total characters, Space O(U) unique letters.",edge:"Invalid prefix order (e.g. 'abc' before 'ab'); cycle in ordering."},{diff:"H",title:"Cheapest Flights Within K Stops",url:"https://leetcode.com/problems/cheapest-flights-within-k-stops/",problem:"Find cheapest price from src to dst with at most k stops.",approach:"Bellman-Ford algorithm executed for k + 1 iterations.",java:`public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;
    for (int i = 0; i <= k; i++) {
        int[] temp = Arrays.copyOf(dist, n);
        for (int[] f : flights) {
            int u = f[0], v = f[1], w = f[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < temp[v]) {
                temp[v] = dist[u] + w;
            }
        }
        dist = temp;
    }
    return dist[dst] == Integer.MAX_VALUE ? -1 : dist[dst];
}`,python:`def find_cheapest_price(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):
        tmp = list(dist)
        for u, v, w in flights:
            if dist[u] != float('inf') and dist[u] + w < tmp[v]:
                tmp[v] = dist[u] + w
        dist = tmp
    return dist[dst] if dist[dst] != float('inf') else -1`,complexity:"Time O(K * E), Space O(V).",edge:"Destination unreachable within k stops."}]},{id:10,name:"Dynamic Programming",solved:!0,problems:[{diff:"E",title:"Climbing Stairs / House Robber",url:"https://leetcode.com/problems/house-robber/",problem:"Determine max money you can rob without robbing adjacent houses.",approach:"DP with 2 variables: rob1 (max up to i-2) and rob2 (max up to i-1).",java:`public int rob(int[] nums) {
    int rob1 = 0, rob2 = 0;
    for (int n : nums) {
        int temp = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}`,python:`def rob(nums):
    rob1 = rob2 = 0
    for n in nums:
        rob1, rob2 = rob2, max(n + rob1, rob2)
    return rob2`,complexity:"Time O(n), Space O(1).",edge:"Empty array; single house."},{diff:"E",title:"Coin Change",url:"https://leetcode.com/problems/coin-change/",problem:"Fewest coins needed to make up given amount.",approach:"Bottom-up 1D DP table where dp[i] = min coins for amount i.",java:`public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,python:`def coin_change(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] <= amount else -1`,complexity:"Time O(amount * n), Space O(amount).",edge:"amount = 0; impossible to make change."},{diff:"M",title:"Longest Increasing Subsequence",url:"https://leetcode.com/problems/longest-increasing-subsequence/",problem:"Find length of longest strictly increasing subsequence.",approach:"Patience Sorting / Binary Search on tail values in O(n log n).",java:`public int lengthOfLIS(int[] nums) {
    int[] tails = new int[nums.length];
    int size = 0;
    for (int x : nums) {
        int i = 0, j = size;
        while (i < j) {
            int mid = (i + j) / 2;
            if (tails[mid] < x) i = mid + 1;
            else j = mid;
        }
        tails[i] = x;
        if (i == size) size++;
    }
    return size;
}`,python:`import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails): tails.append(x)
        else: tails[idx] = x
    return len(tails)`,complexity:"Time O(n log n), Space O(n).",edge:"Strictly decreasing array."},{diff:"M",title:"Partition Equal Subset Sum",url:"https://leetcode.com/problems/partition-equal-subset-sum/",problem:"Check if array can be partitioned into two subsets with equal sum.",approach:"0/1 Knapsack DP using boolean array for target sum = totalSum / 2.",java:`public boolean canPartition(int[] nums) {
    int sum = 0; for (int n : nums) sum += n;
    if (sum % 2 != 0) return false;
    int target = sum / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;
    for (int n : nums) {
        for (int i = target; i >= n; i--) {
            dp[i] = dp[i] || dp[i - n];
        }
    }
    return dp[target];
}`,python:`def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0: return False
    target = total // 2
    dp = {0}
    for n in nums:
        dp |= {x + n for x in dp if x + n <= target}
    return target in dp`,complexity:"Time O(N * Sum), Space O(Sum).",edge:"Odd total sum."},{diff:"M",title:"Edit Distance",url:"https://leetcode.com/problems/edit-distance/",problem:"Find min operations (insert, delete, replace) to convert word1 to word2.",approach:"2D DP grid: dp[i][j] = min edits to convert word1[0..i] to word2[0..j].",java:`public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
        }
    }
    return dp[m][n];
}`,python:`def min_distance(word1: str, word2: str) -> int:
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]
            else: dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,complexity:"Time O(M * N), Space O(M * N).",edge:"Empty string."},{diff:"M",title:"Unique Paths II",url:"https://leetcode.com/problems/unique-paths-ii/",problem:"Find unique paths from top-left to bottom-right in grid with obstacles.",approach:"2D DP table. Set dp[r][c] = 0 if obstacle, else dp[r-1][c] + dp[r][c-1].",java:`public int uniquePathsWithObstacles(int[][] obstacleGrid) {
    int width = obstacleGrid[0].length;
    int[] dp = new int[width];
    dp[0] = 1;
    for (int[] row : obstacleGrid) {
        for (int j = 0; j < width; j++) {
            if (row[j] == 1) dp[j] = 0;
            else if (j > 0) dp[j] += dp[j - 1];
        }
    }
    return dp[width - 1];
}`,python:`def unique_paths_with_obstacles(obstacle_grid):
    w = len(obstacle_grid[0])
    dp = [0] * w
    dp[0] = 1
    for row in obstacle_grid:
        for j in range(w):
            if row[j] == 1: dp[j] = 0
            elif j > 0: dp[j] += dp[j - 1]
    return dp[-1]`,complexity:"Time O(R * C), Space O(C).",edge:"Obstacle at start or end."},{diff:"H",title:"Matrix Chain Multiplication",url:"https://leetcode.com/problems/minimum-score-triangulation-of-polygon/",problem:"Find minimum cost to multiply a chain of matrices.",approach:"Interval DP over chain length subproblems.",java:`public int matrixMultiplication(int[] arr) {
    int n = arr.length;
    int[][] dp = new int[n][n];
    for (int len = 2; len < n; len++) {
        for (int i = 1; i < n - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = Integer.MAX_VALUE;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    return dp[1][n - 1];
}`,python:`def matrix_multiplication(arr):
    n = len(arr)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k+1][j] + arr[i-1] * arr[k] * arr[j]
                dp[i][j] = min(dp[i][j], cost)
    return dp[1][n-1]`,complexity:"Time O(n^3), Space O(n^2).",edge:"Minimum chain length of 3."},{diff:"H",title:"Palindrome Partitioning II",url:"https://leetcode.com/problems/palindrome-partitioning-ii/",problem:"Minimum cuts needed for a palindrome partitioning of string s.",approach:"Expand around center to find palindromes, updating 1D min-cut array.",java:`public int minCut(String s) {
    int n = s.length();
    int[] cuts = new int[n];
    for (int i = 0; i < n; i++) cuts[i] = i;
    for (int i = 0; i < n; i++) {
        expand(s, i, i, cuts);
        expand(s, i, i + 1, cuts);
    }
    return cuts[n - 1];
}
private void expand(String s, int l, int r, int[] cuts) {
    while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
        int newCut = (l == 0) ? 0 : cuts[l - 1] + 1;
        cuts[r] = Math.min(cuts[r], newCut);
        l--; r++;
    }
}`,python:`def min_cut(s: str) -> int:
    n = len(s)
    cuts = list(range(n))
    def expand(l, r):
        while l >= 0 and r < n and s[l] == s[r]:
            new_cut = 0 if l == 0 else cuts[l - 1] + 1
            cuts[r] = min(cuts[r], new_cut)
            l -= 1; r += 1
    for i in range(n):
        expand(i, i)
        expand(i, i + 1)
    return cuts[-1]`,complexity:"Time O(n^2), Space O(n).",edge:"Entire string is already a palindrome (0 cuts)."},{diff:"H",title:"Burst Balloons",url:"https://leetcode.com/problems/burst-balloons/",problem:"Find maximum coins collected by bursting balloons strategically.",approach:"Interval DP: consider which balloon is burst LAST in interval [i, j].",java:`public int maxCoins(int[] nums) {
    int[] val = new int[nums.length + 2];
    val[0] = val[val.length - 1] = 1;
    for (int i = 0; i < nums.length; i++) val[i + 1] = nums[i];
    int n = val.length;
    int[][] dp = new int[n][n];
    for (int len = 2; len < n; len++) {
        for (int left = 0; left < n - len; left++) {
            int right = left + len;
            for (int i = left + 1; i < right; i++) {
                dp[left][right] = Math.max(dp[left][right],
                    val[left] * val[i] * val[right] + dp[left][i] + dp[i][right]);
            }
        }
    }
    return dp[0][n - 1];
}`,python:`def max_coins(nums):
    val = [1] + nums + [1]
    n = len(val)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for left in range(n - length):
            right = left + length
            for i in range(left + 1, right):
                dp[left][right] = max(dp[left][right],
                    val[left] * val[i] * val[right] + dp[left][i] + dp[i][right])
    return dp[0][n-1]`,complexity:"Time O(n^3), Space O(n^2).",edge:"Single balloon."},{diff:"H",title:"Wildcard Matching",url:"https://leetcode.com/problems/wildcard-matching/",problem:"Implement wildcard pattern matching with '?' and '*'.",approach:"Greedy 2-pointer approach tracking last star index and matched position.",java:`public boolean isMatch(String s, String p) {
    int sIdx = 0, pIdx = 0, match = 0, starIdx = -1;
    while (sIdx < s.length()) {
        if (pIdx < p.length() && (p.charAt(pIdx) == '?' || p.charAt(pIdx) == s.charAt(sIdx))) {
            sIdx++; pIdx++;
        } else if (pIdx < p.length() && p.charAt(pIdx) == '*') {
            starIdx = pIdx; match = sIdx; pIdx++;
        } else if (starIdx != -1) {
            pIdx = starIdx + 1; match++; sIdx = match;
        } else return false;
    }
    while (pIdx < p.length() && p.charAt(pIdx) == '*') pIdx++;
    return pIdx == p.length();
}`,python:`def is_match(s: str, p: str) -> bool:
    s_idx = p_idx = match = 0
    star_idx = -1
    while s_idx < len(s):
        if p_idx < len(p) and (p[p_idx] in ('?', s[s_idx])):
            s_idx += 1; p_idx += 1
        elif p_idx < len(p) and p[p_idx] == '*':
            star_idx = p_idx; match = s_idx; p_idx += 1
        elif star_idx != -1:
            p_idx = star_idx + 1; match += 1; s_idx = match
        else: return False
    return all(c == '*' for c in p[p_idx:])`,complexity:"Time O(S * P) worst case, O(S) average, Space O(1).",edge:"Pattern composed entirely of '*'."}]},{id:11,name:"Greedy",solved:!0,problems:[{diff:"E",title:"Non-overlapping Intervals",url:"https://leetcode.com/problems/non-overlapping-intervals/",problem:"Find minimum intervals to remove to make remaining intervals non-overlapping.",approach:"Greedy sort by end time. Keep track of previous end time.",java:`public int eraseOverlapIntervals(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
    int removals = 0, prevEnd = intervals[0][1];
    for (int i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) removals++;
        else prevEnd = intervals[i][1];
    }
    return removals;
}`,python:`def erase_overlap_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    removals = 0
    prev_end = intervals[0][1]
    for start, end in intervals[1:]:
        if start < prev_end: removals += 1
        else: prev_end = end
    return removals`,complexity:"Time O(n log n), Space O(1).",edge:"Intervals touching at endpoint (e.g. [1,2] and [2,3] do not overlap)."},{diff:"E",title:"Jump Game II",url:"https://leetcode.com/problems/jump-game-ii/",problem:"Find minimum jumps required to reach the last index.",approach:"Greedy BFS: track current jump boundary and max reachable index within boundary.",java:`public int jump(int[] nums) {
    int jumps = 0, currEnd = 0, maxReach = 0;
    for (int i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (i == currEnd) {
            jumps++;
            currEnd = maxReach;
        }
    }
    return jumps;
}`,python:`def jump(nums):
    jumps = curr_end = max_reach = 0
    for i in range(len(nums) - 1):
        max_reach = max(max_reach, i + nums[i])
        if i == curr_end:
            jumps += 1
            curr_end = max_reach
    return jumps`,complexity:"Time O(n), Space O(1).",edge:"Single element array (0 jumps required)."},{diff:"M",title:"Gas Station",url:"https://leetcode.com/problems/gas-station/",problem:"Find starting gas station index to travel circuit clockwise once.",approach:"If total gas < total cost, return -1. Otherwise, reset start index whenever tank drops below 0.",java:`public int canCompleteCircuit(int[] gas, int[] cost) {
    int total = 0, tank = 0, start = 0;
    for (int i = 0; i < gas.length; i++) {
        int diff = gas[i] - cost[i];
        total += diff; tank += diff;
        if (tank < 0) { start = i + 1; tank = 0; }
    }
    return total >= 0 ? start : -1;
}`,python:`def can_complete_circuit(gas, cost):
    if sum(gas) < sum(cost): return -1
    tank = start = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    return start`,complexity:"Time O(n), Space O(1).",edge:"Circuit starting at last index."},{diff:"M",title:"Task Scheduler",url:"https://leetcode.com/problems/task-scheduler/",problem:"Find minimum CPU intervals needed to complete tasks given cooldown n.",approach:"Math/Greedy formula based on max frequency task count.",java:`public int leastInterval(char[] tasks, int n) {
    int[] freq = new int[26];
    for (char c : tasks) freq[c - 'A']++;
    Arrays.sort(freq);
    int maxFreq = freq[25];
    int idleSlots = (maxFreq - 1) * n;
    for (int i = 24; i >= 0 && freq[i] > 0; i--) {
        idleSlots -= Math.min(maxFreq - 1, freq[i]);
    }
    return tasks.length + Math.max(0, idleSlots);
}`,python:`from collections import Counter

def least_interval(tasks, n):
    counts = Counter(tasks)
    max_freq = max(counts.values())
    max_count = sum(1 for v in counts.values() if v == max_freq)
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`,complexity:"Time O(N), Space O(1).",edge:"n = 0 (no cooldown required)."},{diff:"M",title:"Minimum Number of Arrows to Burst Balloons",url:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",problem:"Find minimum arrows needed to burst all balloons.",approach:"Greedy sort by end coordinate; shoot arrow at balloon's end coordinate.",java:`public int findMinArrowShots(int[][] points) {
    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
    int arrows = 1, arrowPos = points[0][1];
    for (int i = 1; i < points.length; i++) {
        if (points[i][0] > arrowPos) {
            arrows++;
            arrowPos = points[i][1];
        }
    }
    return arrows;
}`,python:`def find_min_arrow_shots(points):
    points.sort(key=lambda x: x[1])
    arrows = 1
    pos = points[0][1]
    for start, end in points[1:]:
        if start > pos:
            arrows += 1
            pos = end
    return arrows`,complexity:"Time O(n log n), Space O(1).",edge:"Integer overflow on sorting coordinates (use Integer.compare)."},{diff:"H",title:"Course Schedule III",url:"https://leetcode.com/problems/course-schedule-iii/",problem:"Find maximum courses you can take given duration & deadline.",approach:"Greedy sort by deadline + Max-Heap for replacing long duration courses.",java:`public int scheduleCourse(int[][] courses) {
    Arrays.sort(courses, (a, b) -> a[1] - b[1]);
    PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
    int time = 0;
    for (int[] c : courses) {
        if (time + c[0] <= c[1]) {
            time += c[0];
            pq.add(c[0]);
        } else if (!pq.isEmpty() && pq.peek() > c[0]) {
            time += c[0] - pq.poll();
            pq.add(c[0]);
        }
    }
    return pq.size();
}`,python:`import heapq

def schedule_course(courses):
    courses.sort(key=lambda x: x[1])
    heap = []
    time = 0
    for dur, end in courses:
        if time + dur <= end:
            time += dur
            heapq.heappush(heap, -dur)
        elif heap and -heap[0] > dur:
            time += dur + heapq.heappop(heap)
            heapq.heappush(heap, -dur)
    return len(heap)`,complexity:"Time O(n log n), Space O(n).",edge:"Duration exceeds deadline."},{diff:"H",title:"Candy",url:"https://leetcode.com/problems/candy/",problem:"Distribute minimum candies to children satisfying rating constraints.",approach:"Two passes: left-to-right pass then right-to-left pass.",java:`public int candy(int[] ratings) {
    int n = ratings.length;
    int[] candies = new int[n];
    Arrays.fill(candies, 1);
    for (int i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
    }
    for (int i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    int sum = 0; for (int c : candies) sum += c;
    return sum;
}`,python:`def candy(ratings):
    n = len(ratings)
    candies = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]: candies[i] = candies[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]: candies[i] = max(candies[i], candies[i + 1] + 1)
    return sum(candies)`,complexity:"Time O(n), Space O(n).",edge:"Equal ratings."}]},{id:12,name:"Backtracking",solved:!0,problems:[{diff:"E",title:"Permutations / Subsets",url:"https://leetcode.com/problems/subsets/",problem:"Return all possible subsets (the power set) of unique elements.",approach:"Backtracking DFS: decide whether to include element at current index.",java:`public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    backtrack(res, new ArrayList<>(), nums, 0);
    return res;
}
private void backtrack(List<List<Integer>> res, List<Integer> curr, int[] nums, int start) {
    res.add(new ArrayList<>(curr));
    for (int i = start; i < nums.length; i++) {
        curr.add(nums[i]);
        backtrack(res, curr, nums, i + 1);
        curr.remove(curr.size() - 1);
    }
}`,python:`def subsets(nums):
    res = []
    def backtrack(start, curr):
        res.append(list(curr))
        for i in range(start, len(nums)):
            curr.append(nums[i])
            backtrack(i + 1, curr)
            curr.pop()
    backtrack(0, [])
    return res`,complexity:"Time O(2^n), Space O(n).",edge:"Empty set."},{diff:"M",title:"Combination Sum",url:"https://leetcode.com/problems/combination-sum/",problem:"Find unique combinations summing to target (elements reusable).",approach:"Backtracking passing start index to allow element reuse.",java:`public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> res = new ArrayList<>();
    backtrack(res, new ArrayList<>(), candidates, target, 0);
    return res;
}
private void backtrack(List<List<Integer>> res, List<Integer> curr, int[] candidates, int remain, int start) {
    if (remain < 0) return;
    if (remain == 0) { res.add(new ArrayList<>(curr)); return; }
    for (int i = start; i < candidates.length; i++) {
        curr.add(candidates[i]);
        backtrack(res, curr, candidates, remain - candidates[i], i);
        curr.remove(curr.size() - 1);
    }
}`,python:`def combination_sum(candidates, target):
    res = []
    def backtrack(remain, curr, start):
        if remain == 0: res.append(list(curr)); return
        if remain < 0: return
        for i in range(start, len(candidates)):
            curr.append(candidates[i])
            backtrack(remain - candidates[i], curr, i)
            curr.pop()
    backtrack(target, [], 0)
    return res`,complexity:"Time O(2^target), Space O(target).",edge:"Target smaller than smallest candidate."},{diff:"M",title:"N-Queens",url:"https://leetcode.com/problems/n-queens/",problem:"Place N queens on N x N board such that no two queens attack each other.",approach:"Backtrack row by row tracking occupied columns and diagonals.",java:`public List<List<String>> solveNQueens(int n) {
    List<List<String>> res = new ArrayList<>();
    char[][] board = new char[n][n];
    for (char[] row : board) Arrays.fill(row, '.');
    backtrack(res, board, 0, new boolean[n], new boolean[2 * n], new boolean[2 * n]);
    return res;
}
private void backtrack(List<List<String>> res, char[][] b, int r, boolean[] cols, boolean[] d1, boolean[] d2) {
    int n = b.length;
    if (r == n) {
        List<String> list = new ArrayList<>();
        for (char[] row : b) list.add(new String(row));
        res.add(list);
        return;
    }
    for (int c = 0; c < n; c++) {
        if (!cols[c] && !d1[r + c] && !d2[r - c + n]) {
            b[r][c] = 'Q'; cols[c] = d1[r + c] = d2[r - c + n] = true;
            backtrack(res, b, r + 1, cols, d1, d2);
            b[r][c] = '.'; cols[c] = d1[r + c] = d2[r - c + n] = false;
        }
    }
}`,python:`def solve_n_queens(n):
    res = []
    cols, d1, d2 = set(), set(), set()
    board = [["."] * n for _ in range(n)]
    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c not in cols and (r + c) not in d1 and (r - c) not in d2:
                cols.add(c); d1.add(r + c); d2.add(r - c)
                board[r][c] = "Q"
                backtrack(r + 1)
                cols.remove(c); d1.remove(r + c); d2.remove(r - c)
                board[r][c] = "."
    backtrack(0)
    return res`,complexity:"Time O(N!), Space O(N^2).",edge:"N = 1."},{diff:"M",title:"Sudoku Solver",url:"https://leetcode.com/problems/sudoku-solver/",problem:"Solve a Sudoku puzzle by filling empty cells '.'.",approach:"Backtracking attempting digits '1'-'9' for empty cells.",java:`public void solveSudoku(char[][] board) {
    solve(board);
}
private boolean solve(char[][] board) {
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (board[r][c] == '.') {
                for (char ch = '1'; ch <= '9'; ch++) {
                    if (isValid(board, r, c, ch)) {
                        board[r][c] = ch;
                        if (solve(board)) return true;
                        board[r][c] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
private boolean isValid(char[][] b, int r, int c, char ch) {
    for (int i = 0; i < 9; i++) {
        if (b[r][i] == ch || b[i][c] == ch || b[3 * (r / 3) + i / 3][3 * (c / 3) + i % 3] == ch) return false;
    }
    return true;
}`,python:`def solve_sudoku(board):
    def is_valid(r, c, ch):
        for i in range(9):
            if board[r][i] == ch or board[i][c] == ch or board[3*(r//3) + i//3][3*(c//3) + i%3] == ch:
                return False
        return True
    def solve():
        for r in range(9):
            for c in range(9):
                if board[r][c] == '.':
                    for ch in '123456789':
                        if is_valid(r, c, ch):
                            board[r][c] = ch
                            if solve(): return True
                            board[r][c] = '.'
                    return False
        return True
    solve()`,complexity:"Time O(9^(N^2)), Space O(1).",edge:"Invalid puzzle state."},{diff:"M",title:"Word Search",url:"https://leetcode.com/problems/word-search/",problem:"Check if word exists in 2D board of characters.",approach:"Grid DFS with backtracking (temporarily overwrite visited cell).",java:`public boolean exist(char[][] board, String word) {
    for (int r = 0; r < board.length; r++) {
        for (int c = 0; c < board[0].length; c++) {
            if (dfs(board, word, r, c, 0)) return true;
        }
    }
    return false;
}
private boolean dfs(char[][] board, String word, int r, int c, int i) {
    if (i == word.length()) return true;
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] != word.charAt(i)) return false;
    char temp = board[r][c];
    board[r][c] = '#';
    boolean found = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) ||
                    dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);
    board[r][c] = temp;
    return found;
}`,python:`def exist(board, word):
    rows, cols = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word): return True
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]: return False
        temp = board[r][c]
        board[r][c] = '#'
        res = dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or dfs(r, c+1, i+1) or dfs(r, c-1, i+1)
        board[r][c] = temp
        return res
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0): return True
    return False`,complexity:"Time O(R * C * 4^L), Space O(L).",edge:"Word length exceeds board total cell count."},{diff:"H",title:"Palindrome Partitioning",url:"https://leetcode.com/problems/palindrome-partitioning/",problem:"Partition string s such that every substring is a palindrome.",approach:"Backtrack through indices, checking palindrome property before recursing.",java:`public List<List<String>> partition(String s) {
    List<List<String>> res = new ArrayList<>();
    backtrack(res, new ArrayList<>(), s, 0);
    return res;
}
private void backtrack(List<List<String>> res, List<Integer> curr, String s, int start) {
    if (start == s.length()) { res.add(new ArrayList<>(curr)); return; }
    for (int i = start; i < s.length(); i++) {
        if (isPal(s, start, i)) {
            curr.add(s.substring(start, i + 1));
            backtrack(res, curr, s, i + 1);
            curr.remove(curr.size() - 1);
        }
    }
}
private boolean isPal(String s, int l, int r) {
    while (l < r) if (s.charAt(l++) != s.charAt(r--)) return false;
    return true;
}`,python:`def partition(s):
    res = []
    def backtrack(start, curr):
        if start == len(s): res.append(list(curr)); return
        for end in range(start + 1, len(s) + 1):
            sub = s[start:end]
            if sub == sub[::-1]:
                curr.append(sub)
                backtrack(end, curr)
                curr.pop()
    backtrack(0, [])
    return res`,complexity:"Time O(N * 2^N), Space O(N).",edge:"Single character string."},{diff:"H",title:"Restore IP Addresses",url:"https://leetcode.com/problems/restore-ip-addresses/",problem:"Form all valid IP addresses from digit string s.",approach:"Backtracking forming 4 segments (each between 0 and 255 with no leading zeros).",java:`public List<String> restoreIpAddresses(String s) {
    List<String> res = new ArrayList<>();
    backtrack(res, new ArrayList<>(), s, 0);
    return res;
}
private void backtrack(List<String> res, List<String> curr, String s, int start) {
    if (curr.size() == 4) {
        if (start == s.length()) res.add(String.join(".", curr));
        return;
    }
    for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
        String part = s.substring(start, start + len);
        if ((part.startsWith("0") && len > 1) || Integer.parseInt(part) > 255) continue;
        curr.add(part);
        backtrack(res, curr, s, start + len);
        curr.remove(curr.size() - 1);
    }
}`,python:`def restore_ip_addresses(s):
    res = []
    def backtrack(start, curr):
        if len(curr) == 4:
            if start == len(s): res.append(".".join(curr))
            return
        for length in range(1, 4):
            if start + length <= len(s):
                part = s[start:start+length]
                if (part.startswith('0') and len(part) > 1) or int(part) > 255: continue
                curr.append(part)
                backtrack(start + length, curr)
                curr.pop()
    backtrack(0, [])
    return res`,complexity:"Time O(3^4) = O(1), Space O(1).",edge:"String length < 4 or > 12."}]},{id:13,name:"Advanced Data Structures",solved:!0,problems:[{diff:"M",title:"Word Search II (Trie)",url:"https://leetcode.com/problems/word-search-ii/",problem:"Find all words from dictionary present on 2D board.",approach:"Build Trie from word list + Grid DFS traversal matching Trie nodes.",java:`class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String word = null;
}
public List<String> findWords(char[][] board, String[] words) {
    TrieNode root = new TrieNode();
    for (String w : words) {
        TrieNode curr = root;
        for (char c : w.toCharArray()) {
            if (curr.children[c - 'a'] == null) curr.children[c - 'a'] = new TrieNode();
            curr = curr.children[c - 'a'];
        }
        curr.word = w;
    }
    List<String> res = new ArrayList<>();
    for (int r = 0; r < board.length; r++) {
        for (int c = 0; c < board[0].length; c++) {
            dfs(board, r, c, root, res);
        }
    }
    return res;
}
private void dfs(char[][] b, int r, int c, TrieNode node, List<String> res) {
    if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] == '#') return;
    char ch = b[r][c];
    if (node.children[ch - 'a'] == null) return;
    node = node.children[ch - 'a'];
    if (node.word != null) { res.add(node.word); node.word = null; }
    b[r][c] = '#';
    dfs(b, r+1, c, node, res); dfs(b, r-1, c, node, res);
    dfs(b, r, c+1, node, res); dfs(b, r, c-1, node, res);
    b[r][c] = ch;
}`,python:`class TrieNode:
    def __init__(self): self.children = {}; self.word = None

def find_words(board, words):
    root = TrieNode()
    for w in words:
        curr = root
        for c in w:
            curr = curr.children.setdefault(c, TrieNode())
        curr.word = w
    rows, cols = len(board), len(board[0])
    res = []
    def dfs(r, c, parent):
        ch = board[r][c]
        curr = parent.children[ch]
        if curr.word:
            res.append(curr.word); curr.word = None
        board[r][c] = '#'
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] in curr.children:
                dfs(nr, nc, curr)
        board[r][c] = ch
    for r in range(rows):
        for c in range(cols):
            if board[r][c] in root.children: dfs(r, c, root)
    return res`,complexity:"Time O(R * C * 4^L), Space O(Sum of Word Lengths).",edge:"Duplicate words in board; prefix shared across dictionary."},{diff:"M",title:"Number of Provinces (Union-Find)",url:"https://leetcode.com/problems/number-of-provinces/",problem:"Find number of connected provinces in adjacency matrix.",approach:"Union-Find with path compression.",java:`public int findCircleNum(int[][] isConnected) {
    int n = isConnected.length;
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) parent[i] = i;
    int count = n;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (isConnected[i][j] == 1) {
                int r1 = find(parent, i), r2 = find(parent, j);
                if (r1 != r2) { parent[r1] = r2; count--; }
            }
        }
    }
    return count;
}
private int find(int[] p, int i) {
    if (p[i] == i) return i;
    return p[i] = find(p, p[i]);
}`,python:`def find_circle_num(is_connected):
    n = len(is_connected)
    parent = list(range(n))
    def find(i):
        if parent[i] == i: return i
        parent[i] = find(parent[i])
        return parent[i]
    count = n
    for i in range(n):
        for j in range(i + 1, n):
            if is_connected[i][j] == 1:
                r1, r2 = find(i), find(j)
                if r1 != r2:
                    parent[r1] = r2
                    count -= 1
    return count`,complexity:"Time O(N^2 * α(N)), Space O(N).",edge:"Entire matrix is 0s (n separate provinces)."},{diff:"M",title:"Range Sum Query - Mutable (Segment Tree / BIT)",url:"https://leetcode.com/problems/range-sum-query-mutable/",problem:"Update single array elements and query range sums in O(log n).",approach:"Binary Indexed Tree (Fenwick Tree) / Segment Tree.",java:`class NumArray {
    int[] tree, nums;
    int n;
    public NumArray(int[] nums) {
        this.nums = nums; n = nums.length;
        tree = new int[n + 1];
        for (int i = 0; i < n; i++) init(i + 1, nums[i]);
    }
    private void init(int i, int val) {
        while (i <= n) { tree[i] += val; i += i & -i; }
    }
    public void update(int index, int val) {
        int diff = val - nums[index];
        nums[index] = val;
        init(index + 1, diff);
    }
    private int prefixSum(int i) {
        int sum = 0;
        while (i > 0) { sum += tree[i]; i -= i & -i; }
        return sum;
    }
    public int sumRange(int left, int right) {
        return prefixSum(right + 1) - prefixSum(left);
    }
}`,python:`class NumArray:
    def __init__(self, nums):
        self.n = len(nums)
        self.nums = list(nums)
        self.tree = [0] * (self.n + 1)
        for i, val in enumerate(nums):
            self._add(i + 1, val)

    def _add(self, i, val):
        while i <= self.n:
            self.tree[i] += val
            i += i & -i

    def update(self, index: int, val: int) -> None:
        diff = val - self.nums[index]
        self.nums[index] = val
        self._add(index + 1, diff)

    def _query(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s

    def sumRange(self, left: int, right: int) -> int:
        return self._query(right + 1) - self._query(left)`,complexity:"Time O(log n) update & sumRange, Space O(n).",edge:"Single element array."},{diff:"H",title:"All O`one Data Structure",url:"https://leetcode.com/problems/all-oone-data-structure/",problem:"Design data structure supporting inc(key), dec(key), getMaxKey(), getMinKey() in O(1).",approach:"Doubly Linked List of Bucket nodes (storing count & set of keys) + HashMap.",java:`class AllOne {
    class Bucket {
        int count; Set<String> keys = new HashSet<>();
        Bucket prev, next;
        Bucket(int c) { count = c; }
    }
    Bucket head = new Bucket(0), tail = new Bucket(0);
    Map<String, Bucket> map = new HashMap<>();
    public AllOne() { head.next = tail; tail.prev = head; }
    public void inc(String key) {
        if (map.containsKey(key)) {
            Bucket b = map.get(key);
            b.keys.remove(key);
            Bucket nxt = b.next;
            if (nxt == tail || nxt.count != b.count + 1) nxt = addAfter(b, new Bucket(b.count + 1));
            nxt.keys.add(key); map.put(key, nxt);
            if (b.keys.isEmpty()) remove(b);
        } else {
            Bucket first = head.next;
            if (first == tail || first.count != 1) first = addAfter(head, new Bucket(1));
            first.keys.add(key); map.put(key, first);
        }
    }
    public void dec(String key) {
        Bucket b = map.get(key);
        b.keys.remove(key);
        if (b.count == 1) map.remove(key);
        else {
            Bucket prv = b.prev;
            if (prv == head || prv.count != b.count - 1) prv = addAfter(b.prev, new Bucket(b.count - 1));
            prv.keys.add(key); map.put(key, prv);
        }
        if (b.keys.isEmpty()) remove(b);
    }
    public String getMaxKey() { return tail.prev == head ? "" : tail.prev.keys.iterator().next(); }
    public String getMinKey() { return head.next == tail ? "" : head.next.keys.iterator().next(); }
    private Bucket addAfter(Bucket p, Bucket n) { n.next = p.next; n.prev = p; p.next.prev = n; p.next = n; return n; }
    private void remove(Bucket b) { b.prev.next = b.next; b.next.prev = b.prev; }
}`,python:`class Bucket:
    def __init__(self, count):
        self.count = count; self.keys = set()
        self.prev = self.next = None

class AllOne:
    def __init__(self):
        self.head, self.tail = Bucket(0), Bucket(0)
        self.head.next = self.tail; self.tail.prev = self.head
        self.map = {}

    def inc(self, key: str) -> None:
        if key in self.map:
            b = self.map[key]; b.keys.remove(key)
            nxt = b.next
            if nxt == self.tail or nxt.count != b.count + 1:
                nxt = self._add_after(b, Bucket(b.count + 1))
            nxt.keys.add(key); self.map[key] = nxt
            if not b.keys: self._remove(b)
        else:
            first = self.head.next
            if first == self.tail or first.count != 1:
                first = self._add_after(self.head, Bucket(1))
            first.keys.add(key); self.map[key] = first

    def dec(self, key: str) -> None:
        b = self.map[key]; b.keys.remove(key)
        if b.count == 1: del self.map[key]
        else:
            prv = b.prev
            if prv == self.head or prv.count != b.count - 1:
                prv = self._add_after(b.prev, Bucket(b.count - 1))
            prv.keys.add(key); self.map[key] = prv
        if not b.keys: self._remove(b)

    def getMaxKey(self) -> str: return "" if self.tail.prev == self.head else next(iter(self.tail.prev.keys))
    def getMinKey(self) -> str: return "" if self.head.next == self.tail else next(iter(self.head.next.keys))
    def _add_after(self, p, n): n.next = p.next; n.prev = p; p.next.prev = n; p.next = n; return n
    def _remove(self, b): b.prev.next = b.next; b.next.prev = b.prev`,complexity:"Time O(1), Space O(N).",edge:"Empty data structure returns empty string."},{diff:"H",title:"Find Median from Data Stream",url:"https://leetcode.com/problems/find-median-from-data-stream/",problem:"Continuously compute median from a stream of numbers.",approach:"Two Heaps: Max-Heap for lower half, Min-Heap for upper half.",java:`class MedianFinder {
    PriorityQueue<Integer> small = new PriorityQueue<>((a, b) -> b - a);
    PriorityQueue<Integer> large = new PriorityQueue<>();

    public void addNum(int num) {
        small.add(num);
        large.add(small.poll());
        if (small.size() < large.size()) {
            small.add(large.poll());
        }
    }
    public double findMedian() {
        return small.size() > large.size() ? small.peek() : (small.peek() + large.peek()) / 2.0;
    }
}`,python:`import heapq

class MedianFinder:
    def __init__(self):
        self.small = [] # Max-heap
        self.large = [] # Min-heap
    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) < len(self.large):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2.0`,complexity:"Time O(log n) addNum, O(1) findMedian, Space O(n).",edge:"Odd vs Even total count of elements."},{diff:"H",title:"The Skyline Problem",url:"https://leetcode.com/problems/the-skyline-problem/",problem:"Compute skyline formed by collective 3D building outlines.",approach:"Sweep-Line Algorithm: Process building x-boundaries with a Max-Heap / TreeMap.",java:`public List<List<Integer>> getSkyline(int[][] buildings) {
    List<int[]> points = new ArrayList<>();
    for (int[] b : buildings) {
        points.add(new int[]{b[0], -b[2]});
        points.add(new int[]{b[1], b[2]});
    }
    points.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    TreeMap<Integer, Integer> heights = new TreeMap<>();
    heights.put(0, 1);
    int prevMax = 0;
    List<List<Integer>> res = new ArrayList<>();
    for (int[] p : points) {
        if (p[1] < 0) heights.put(-p[1], heights.getOrDefault(-p[1], 0) + 1);
        else {
            int cnt = heights.get(p[1]);
            if (cnt == 1) heights.remove(p[1]);
            else heights.put(p[1], cnt - 1);
        }
        int currMax = heights.lastKey();
        if (prevMax != currMax) {
            res.add(Arrays.asList(p[0], currMax));
            prevMax = currMax;
        }
    }
    return res;
}`,python:`import heapq

def get_skyline(buildings):
    events = []
    for L, R, H in buildings:
        events.append((L, -H, R))
        events.append((R, 0, 0))
    events.sort()
    res = [[0, 0]]
    live = [(0, float('inf'))] # (-height, right)
    for x, negH, R in events:
        while live[0][1] <= x:
            heapq.heappop(live)
        if negH < 0:
            heapq.heappush(live, (negH, R))
        if res[-1][1] != -live[0][0]:
            res.append([x, -live[0][0]])
    return res[1:]`,complexity:"Time O(n log n), Space O(n).",edge:"Overlapping building edges; identical height buildings."}]}];function np({label:e,code:n}){return f.jsxs("div",{className:"mb-3",children:[f.jsx("div",{className:"text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider",children:e}),f.jsx("pre",{className:"bg-slate-950 border border-slate-800 rounded-lg p-3 overflow-x-auto text-xs leading-relaxed",children:f.jsx("code",{className:"text-slate-300 font-mono whitespace-pre",children:n})})]})}function tp({p:e}){const[n,t]=W.useState(!1),[r,i]=W.useState("java"),l=ep[e.diff];return f.jsxs("div",{className:"border border-slate-800 rounded-lg bg-slate-900 mb-3 overflow-hidden",children:[f.jsxs("div",{className:"w-full flex items-center justify-between px-4 py-3 hover:bg-slate-800 transition-colors",children:[f.jsxs("button",{onClick:()=>t(!n),className:"flex items-center gap-3 min-w-0 flex-1 text-left",children:[n?f.jsx(Bf,{className:"w-4 h-4 text-slate-500 flex-shrink-0"}):f.jsx(Vf,{className:"w-4 h-4 text-slate-500 flex-shrink-0"}),f.jsx("span",{className:"text-sm text-slate-200 truncate font-medium",children:e.title})]}),f.jsxs("div",{className:"flex items-center gap-3 flex-shrink-0 ml-3",children:[e.url&&f.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-teal-400 p-1 transition-colors",title:"Solve on LeetCode",children:f.jsx(Qi,{className:"w-4 h-4"})}),f.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${l.pill}`,children:l.label})]})]}),n&&f.jsx("div",{className:"px-4 pb-4 pt-1 border-t border-slate-800",children:e.problem?f.jsxs(f.Fragment,{children:[f.jsxs("p",{className:"text-sm text-slate-400 mb-2",children:[f.jsx("span",{className:"text-slate-300 font-medium",children:"Problem: "}),e.problem]}),f.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:[f.jsx("span",{className:"text-slate-300 font-medium",children:"Approach: "}),e.approach]}),f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:()=>i("java"),className:`text-xs px-3 py-1 rounded border ${r==="java"?"bg-teal-950 text-teal-400 border-teal-800":"bg-slate-900 text-slate-500 border-slate-800"}`,children:"Java"}),f.jsx("button",{onClick:()=>i("python"),className:`text-xs px-3 py-1 rounded border ${r==="python"?"bg-teal-950 text-teal-400 border-teal-800":"bg-slate-900 text-slate-500 border-slate-800"}`,children:"Python"})]}),e.url&&f.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-teal-400 hover:underline flex items-center gap-1 font-medium",children:[f.jsx("span",{children:"Solve on LeetCode"}),f.jsx(Qi,{className:"w-3 h-3"})]})]}),f.jsx(np,{label:r,code:r==="java"?e.java:e.python}),f.jsxs("p",{className:"text-sm text-slate-400 mb-1",children:[f.jsx("span",{className:"text-slate-300 font-medium",children:"Complexity: "}),e.complexity]}),f.jsxs("p",{className:"text-sm text-slate-400",children:[f.jsx("span",{className:"text-slate-300 font-medium",children:"Edge cases: "}),e.edge]})]}):f.jsxs("div",{className:"flex items-center justify-between py-2",children:[f.jsx("p",{className:"text-sm text-slate-500 italic",children:"Full solution not loaded in this browser yet — ask for the next part to fill this in."}),e.url&&f.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-teal-400 hover:underline flex items-center gap-1 font-medium",children:[f.jsx("span",{children:"Open on LeetCode"}),f.jsx(Qi,{className:"w-3 h-3"})]})]})})]})}function rp(){const[e,n]=W.useState(1),t=xr.find(i=>i.id===e),r=xr.filter(i=>i.solved).length;return f.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-200 flex flex-col md:flex-row",children:[f.jsxs("aside",{className:"md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-800 p-4",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[f.jsx(Hl,{className:"w-5 h-5 text-teal-400"}),f.jsx("h1",{className:"text-sm font-semibold text-slate-100",children:"HackWithInfy 2026"})]}),f.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Topic-wise practice bank"}),f.jsxs("div",{className:"flex items-center gap-2 mb-4 text-xs text-slate-500",children:[f.jsx(Kf,{className:"w-4 h-4"}),f.jsxs("span",{children:[r,"/",xr.length," topics with full solutions"]})]}),f.jsx("nav",{className:"flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0",children:xr.map(i=>f.jsxs("button",{onClick:()=>n(i.id),className:`flex items-center justify-between gap-2 text-left px-3 py-2 rounded-lg text-sm whitespace-nowrap md:whitespace-normal ${e===i.id?"bg-teal-950 text-teal-300 border border-teal-800":"text-slate-400 hover:bg-slate-900 border border-transparent"}`,children:[f.jsxs("span",{children:[i.id,". ",i.name]}),i.solved&&f.jsx(uc,{className:"w-3 h-3 text-teal-500 flex-shrink-0"})]},i.id))})]}),f.jsxs("main",{className:"flex-1 p-4 md:p-6 max-w-3xl",children:[f.jsxs("div",{className:"flex items-baseline justify-between mb-1",children:[f.jsxs("h2",{className:"text-lg font-semibold text-slate-100",children:[t.id,". ",t.name]}),f.jsxs("span",{className:"text-xs text-slate-500",children:[t.problems.length," problems"]})]}),f.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Ordered Easy to Hard — mirrors the real 3-question round difficulty curve."}),t.problems.map((i,l)=>f.jsx(tp,{p:i},l))]})]})}const Xa="VLITAdmin",ip="VLITAdmin@123",lp=[{id:"STU202601",name:"Rahul Sharma",password:"Password@123",registeredAt:"2026-07-20 10:15 AM"},{id:"STU202602",name:"Priya Patel",password:"Student@2026",registeredAt:"2026-07-21 09:30 AM"},{id:"STU202603",name:"Ananya Roy",password:"LearnCode#99",registeredAt:"2026-07-21 11:45 AM"}];function op(){const[e,n]=W.useState(()=>{try{const y=localStorage.getItem("vlit_infy_students");if(y)return JSON.parse(y)}catch(y){console.error(y)}return lp}),[t,r]=W.useState(()=>{try{const y=localStorage.getItem("vlit_infy_current_user");if(y)return JSON.parse(y)}catch(y){console.error(y)}return null}),[i,l]=W.useState(""),[o,a]=W.useState(""),[s,c]=W.useState(!1),[g,h]=W.useState(""),[m,w]=W.useState(""),[k,S]=W.useState("dashboard"),[P,d]=W.useState("");W.useEffect(()=>{try{localStorage.setItem("vlit_infy_students",JSON.stringify(e))}catch(y){console.error("Failed to save students to local storage",y)}},[e]),W.useEffect(()=>{try{t?localStorage.setItem("vlit_infy_current_user",JSON.stringify(t)):localStorage.removeItem("vlit_infy_current_user")}catch(y){console.error("Failed to save session",y)}},[t]);const u=y=>{y.preventDefault(),h(""),w("");const N=i.trim(),L=o.trim();if(!N||!L){h("Please enter both User ID / Username and Password.");return}if(N===Xa&&L===ip){r({role:"admin",username:Xa,name:"System Administrator"}),S("dashboard"),w("Admin authenticated successfully!");return}const z=e.find(E=>E.id.toLowerCase()===N.toLowerCase()&&E.password===L);if(z){const E={role:"student",username:z.id,name:z.name||z.id};r(E),w("Student authenticated successfully!");return}h("Invalid User ID or Password. Please try again.")},p=()=>{r(null),l(""),a(""),h(""),w("")},v=y=>{window.confirm(`Are you sure you want to delete student account '${y}'?`)&&n(N=>N.filter(L=>L.id!==y))};if(!t)return f.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 md:p-8 selection:bg-teal-500 selection:text-slate-950",children:[f.jsxs("header",{className:"max-w-6xl mx-auto w-full flex items-center justify-between py-4 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"bg-gradient-to-tr from-teal-500 to-cyan-500 p-2.5 rounded-xl text-slate-950 shadow-lg shadow-teal-500/20",children:f.jsx(Hl,{className:"w-6 h-6 font-bold"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"font-bold text-lg tracking-tight bg-gradient-to-r from-teal-200 via-cyan-200 to-slate-200 bg-clip-text text-transparent",children:"HackWithInfy 2026"}),f.jsx("p",{className:"text-xs text-slate-400",children:"VLIT Practice & Assessment Portal"})]})]}),f.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-950/80 text-teal-400 border border-teal-800",children:[f.jsx(uc,{className:"w-3.5 h-3.5"})," Single Access Panel"]})]}),f.jsx("main",{className:"flex-1 flex items-center justify-center py-10",children:f.jsxs("div",{className:"w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"}),f.jsxs("div",{className:"text-center mb-6",children:[f.jsx("h2",{className:"text-2xl font-bold text-slate-100 mb-1",children:"Welcome Back"}),f.jsxs("p",{className:"text-sm text-slate-400",children:["Log in as ",f.jsx("span",{className:"text-teal-400 font-semibold",children:"Admin"})," or"," ",f.jsx("span",{className:"text-cyan-400 font-semibold",children:"Student"})," from the same panel"]})]}),g&&f.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-start gap-2",children:[f.jsx(Zf,{className:"w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"}),f.jsx("span",{children:g})]}),m&&f.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-start gap-2",children:[f.jsx(Uf,{className:"w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"}),f.jsx("span",{children:m})]}),f.jsxs("form",{onSubmit:u,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"User ID / Username"}),f.jsxs("div",{className:"relative",children:[f.jsx(Ka,{className:"w-4 h-4 absolute left-3 top-3 text-slate-500"}),f.jsx("input",{type:"text",required:!0,placeholder:"VLITAdmin or Student ID",value:i,onChange:y=>l(y.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1.5",children:"Password"}),f.jsxs("div",{className:"relative",children:[f.jsx(Qf,{className:"w-4 h-4 absolute left-3 top-3 text-slate-500"}),f.jsx("input",{type:s?"text":"password",required:!0,placeholder:"Enter password",value:o,onChange:y=>a(y.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-9 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"}),f.jsx("button",{type:"button",onClick:()=>c(!s),className:"absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition",children:s?f.jsx($f,{className:"w-4 h-4"}):f.jsx(Wf,{className:"w-4 h-4"})})]})]}),f.jsxs("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 mt-2",children:[f.jsx(Gf,{className:"w-4 h-4"})," Login to Portal"]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-slate-800/80 text-center text-xs text-slate-500",children:f.jsxs("p",{children:["Admin Default: ",f.jsx("code",{className:"text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800",children:"VLITAdmin"})," / ",f.jsx("code",{className:"text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800",children:"VLITAdmin@123"})]})})]})}),f.jsx("footer",{className:"max-w-6xl mx-auto w-full text-center text-xs text-slate-600 py-4",children:"VLIT HackWithInfy 2026 Practice Portal • Cache Disabled for Security"})]});const _=e.filter(y=>y.id.toLowerCase().includes(P.toLowerCase())||y.name&&y.name.toLowerCase().includes(P.toLowerCase()));return f.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-200 flex flex-col",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md px-4 md:px-6 py-3 flex items-center justify-between shadow-lg",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"bg-gradient-to-tr from-teal-500 to-cyan-500 p-2 rounded-lg text-slate-950 shadow-md shadow-teal-500/20",children:f.jsx(Hl,{className:"w-5 h-5 font-bold"})}),f.jsx("div",{children:f.jsxs("h1",{className:"font-bold text-sm text-slate-100 flex items-center gap-2",children:["HackWithInfy 2026",f.jsx("span",{className:"text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300",children:t.role==="admin"?"Admin Console":"Student Browser"})]})})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[t.role==="admin"&&f.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs",children:[f.jsxs("button",{onClick:()=>S("dashboard"),className:`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition ${k==="dashboard"?"bg-teal-950 text-teal-300 border border-teal-800":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(Ga,{className:"w-3.5 h-3.5"})," Student Logins (",e.length,")"]}),f.jsxs("button",{onClick:()=>S("practice"),className:`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition ${k==="practice"?"bg-teal-950 text-teal-300 border border-teal-800":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(Qa,{className:"w-3.5 h-3.5"})," Practice Bank"]})]}),f.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs",children:[f.jsx(Ka,{className:"w-3.5 h-3.5 text-teal-400"}),f.jsx("span",{className:"text-slate-300 font-medium",children:t.name||t.username}),f.jsx("span",{className:"text-[10px] text-teal-400 font-semibold uppercase px-1.5 py-0.2 rounded bg-teal-950 border border-teal-900",children:t.role})]}),f.jsxs("button",{onClick:p,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-semibold transition shadow-md shadow-rose-950/30",children:[f.jsx(Xf,{className:"w-3.5 h-3.5"})," Logout"]})]})]}),t.role==="admin"&&k==="dashboard"?f.jsxs("main",{className:"flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full",children:[f.jsxs("div",{className:"mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"text-xl font-bold text-slate-100 flex items-center gap-2",children:[f.jsx(Ga,{className:"w-5 h-5 text-teal-400"})," Registered Students Directory"]}),f.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Admin view to see all registered student User IDs and Passwords."})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("div",{className:"relative",children:[f.jsx(Yf,{className:"w-4 h-4 absolute left-3 top-2.5 text-slate-500"}),f.jsx("input",{type:"text",placeholder:"Search students...",value:P,onChange:y=>d(y.target.value),className:"bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500 transition"})]}),f.jsxs("button",{onClick:()=>S("practice"),className:"px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-teal-600/20",children:[f.jsx(Qa,{className:"w-3.5 h-3.5"})," Go to Practice Bank"]})]})]}),f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:[f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[f.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold",children:f.jsxs("tr",{children:[f.jsx("th",{className:"p-3.5",children:"#"}),f.jsx("th",{className:"p-3.5",children:"Student Name"}),f.jsx("th",{className:"p-3.5",children:"User ID / Username"}),f.jsx("th",{className:"p-3.5",children:"Password"}),f.jsx("th",{className:"p-3.5",children:"Registered On"}),f.jsx("th",{className:"p-3.5 text-right",children:"Actions"})]})}),f.jsx("tbody",{className:"divide-y divide-slate-800/80",children:_.length>0?_.map((y,N)=>f.jsxs("tr",{className:"hover:bg-slate-800/40 transition",children:[f.jsx("td",{className:"p-3.5 font-medium text-slate-500",children:N+1}),f.jsx("td",{className:"p-3.5 font-semibold text-slate-200",children:y.name||"N/A"}),f.jsx("td",{className:"p-3.5 font-mono text-teal-400 bg-teal-950/30 rounded px-2 py-1 inline-block my-2 border border-teal-900/50",children:y.id}),f.jsx("td",{className:"p-3.5 font-mono text-cyan-300",children:y.password}),f.jsx("td",{className:"p-3.5 text-slate-400",children:y.registeredAt||"Initial Seed"}),f.jsx("td",{className:"p-3.5 text-right",children:f.jsx("button",{onClick:()=>v(y.id),className:"p-1.5 text-rose-400 hover:bg-rose-950 border border-transparent hover:border-rose-900 rounded-lg transition",title:"Delete Student",children:f.jsx(Jf,{className:"w-4 h-4"})})})]},y.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:6,className:"p-8 text-center text-slate-500 italic",children:"No registered students found matching search."})})})]})}),f.jsxs("div",{className:"bg-slate-950 p-3 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between",children:[f.jsxs("span",{children:["Showing ",_.length," of ",e.length," students"]}),f.jsx("span",{children:"Storage: Document LocalStorage persistent state"})]})]})]}):f.jsx(rp,{})]})}Ki.createRoot(document.getElementById("root")).render(f.jsx(Lc.StrictMode,{children:f.jsx(op,{})}));
