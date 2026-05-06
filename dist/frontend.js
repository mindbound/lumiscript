var XJ=Object.create;var{getPrototypeOf:YJ,defineProperty:M6,getOwnPropertyNames:JJ}=Object;var QJ=Object.prototype.hasOwnProperty;function zJ(e){return this[e]}var UJ,KJ,wr=(e,v,n)=>{var b=e!=null&&typeof e==="object";if(b){var u=v?UJ??=new WeakMap:KJ??=new WeakMap,P=u.get(e);if(P)return P}n=e!=null?XJ(YJ(e)):{};let O=v||!e||!e.__esModule?M6(n,"default",{value:e,enumerable:!0}):n;for(let H of JJ(e))if(!QJ.call(O,H))M6(O,H,{get:zJ.bind(e,H),enumerable:!0});if(b)u.set(e,O);return O};var Wi=(e,v)=>()=>(v||e((v={exports:{}}).exports,v),v.exports);var $J=(e)=>e;function LJ(e,v){this[e]=$J.bind(null,v)}var IJ=(e,v)=>{for(var n in v)M6(e,n,{get:v[n],enumerable:!0,configurable:!0,set:LJ.bind(v,n)})};var vo=Wi((FJ,ew)=>{(function(){function e(R,I){Object.defineProperty(b.prototype,R,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function v(R){if(R===null||typeof R!=="object")return null;return R=Lg&&R[Lg]||R["@@iterator"],typeof R==="function"?R:null}function n(R,I){R=(R=R.constructor)&&(R.displayName||R.name)||"ReactClass";var or=R+"."+I;nr[or]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,R),nr[or]=!0)}function b(R,I,or){this.props=R,this.context=I,this.refs=re,this.updater=or||yg}function u(){}function P(R,I,or){this.props=R,this.context=I,this.refs=re,this.updater=or||yg}function O(){}function H(R){return""+R}function W(R){try{H(R);var I=!1}catch(Mr){I=!0}if(I){I=console;var or=I.error,br=typeof Symbol==="function"&&Symbol.toStringTag&&R[Symbol.toStringTag]||R.constructor.name||"Object";return or.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",br),H(R)}}function G(R){if(R==null)return null;if(typeof R==="function")return R.$$typeof===o1?null:R.displayName||R.name||null;if(typeof R==="string")return R;switch(R){case Gr:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case Zr:return"Suspense";case hr:return"SuspenseList";case Ro:return"Activity"}if(typeof R==="object")switch(typeof R.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),R.$$typeof){case Qr:return"Portal";case Or:return R.displayName||"Context";case gr:return(R._context.displayName||"Context")+".Consumer";case qr:var I=R.render;return R=R.displayName,R||(R=I.displayName||I.name||"",R=R!==""?"ForwardRef("+R+")":"ForwardRef"),R;case Cr:return I=R.displayName||null,I!==null?I:G(R.type)||"Memo";case jr:I=R._payload,R=R._init;try{return G(R(I))}catch(or){}}return null}function m(R){if(R===Gr)return"<>";if(typeof R==="object"&&R!==null&&R.$$typeof===jr)return"<...>";try{var I=G(R);return I?"<"+I+">":"<...>"}catch(or){return"<...>"}}function q(){var R=Tr.A;return R===null?null:R.getOwner()}function X(){return Error("react-stack-top-frame")}function L(R){if(xi.call(R,"key")){var I=Object.getOwnPropertyDescriptor(R,"key").get;if(I&&I.isReactWarning)return!1}return R.key!==void 0}function T(R,I){function or(){kb||(kb=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}or.isReactWarning=!0,Object.defineProperty(R,"key",{get:or,configurable:!0})}function Z(){var R=G(this.type);return $0[R]||($0[R]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),R=this.props.ref,R!==void 0?R:null}function _(R,I,or,br,Mr,Fr){var xr=or.ref;return R={$$typeof:vr,type:R,key:I,props:or,_owner:br},(xr!==void 0?xr:null)!==null?Object.defineProperty(R,"ref",{enumerable:!1,get:Z}):Object.defineProperty(R,"ref",{enumerable:!1,value:null}),R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(R,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(R,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Mr}),Object.defineProperty(R,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R}function rr(R,I){return I=_(R.type,I,R.props,R._owner,R._debugStack,R._debugTask),R._store&&(I._store.validated=R._store.validated),I}function ur(R){lr(R)?R._store&&(R._store.validated=1):typeof R==="object"&&R!==null&&R.$$typeof===jr&&(R._payload.status==="fulfilled"?lr(R._payload.value)&&R._payload.value._store&&(R._payload.value._store.validated=1):R._store&&(R._store.validated=1))}function lr(R){return typeof R==="object"&&R!==null&&R.$$typeof===vr}function a(R){var I={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(or){return I[or]})}function p(R,I){return typeof R==="object"&&R!==null&&R.key!=null?(W(R.key),a(""+R.key)):I.toString(36)}function er(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status==="string"?R.then(O,O):(R.status="pending",R.then(function(I){R.status==="pending"&&(R.status="fulfilled",R.value=I)},function(I){R.status==="pending"&&(R.status="rejected",R.reason=I)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function N(R,I,or,br,Mr){var Fr=typeof R;if(Fr==="undefined"||Fr==="boolean")R=null;var xr=!1;if(R===null)xr=!0;else switch(Fr){case"bigint":case"string":case"number":xr=!0;break;case"object":switch(R.$$typeof){case vr:case Qr:xr=!0;break;case jr:return xr=R._init,N(xr(R._payload),I,or,br,Mr)}}if(xr){xr=R,Mr=Mr(xr);var eo=br===""?"."+p(xr,0):br;return wo(Mr)?(or="",eo!=null&&(or=eo.replace(Bi,"$&/")+"/"),N(Mr,I,or,"",function(Jg){return Jg})):Mr!=null&&(lr(Mr)&&(Mr.key!=null&&(xr&&xr.key===Mr.key||W(Mr.key)),or=rr(Mr,or+(Mr.key==null||xr&&xr.key===Mr.key?"":(""+Mr.key).replace(Bi,"$&/")+"/")+eo),br!==""&&xr!=null&&lr(xr)&&xr.key==null&&xr._store&&!xr._store.validated&&(or._store.validated=2),Mr=or),I.push(Mr)),1}if(xr=0,eo=br===""?".":br+":",wo(R))for(var Yr=0;Yr<R.length;Yr++)br=R[Yr],Fr=eo+p(br,Yr),xr+=N(br,I,or,Fr,Mr);else if(Yr=v(R),typeof Yr==="function")for(Yr===R.entries&&(Ni||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ni=!0),R=Yr.call(R),Yr=0;!(br=R.next()).done;)br=br.value,Fr=eo+p(br,Yr++),xr+=N(br,I,or,Fr,Mr);else if(Fr==="object"){if(typeof R.then==="function")return N(er(R),I,or,br,Mr);throw I=String(R),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return xr}function y(R,I,or){if(R==null)return R;var br=[],Mr=0;return N(R,br,"","",function(Fr){return I.call(or,Fr,Mr++)}),br}function f(R){if(R._status===-1){var I=R._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=R._result;var or=I();if(or.then(function(Mr){if(R._status===0||R._status===-1){R._status=1,R._result=Mr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),or.status===void 0&&(or.status="fulfilled",or.value=Mr)}},function(Mr){if(R._status===0||R._status===-1){R._status=2,R._result=Mr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),or.status===void 0&&(or.status="rejected",or.reason=Mr)}}),I=R._ioInfo,I!=null){I.value=or;var br=or.displayName;typeof br==="string"&&(I.name=br)}R._status===-1&&(R._status=0,R._result=or)}if(R._status===1)return I=R._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw R._result}function C(){var R=Tr.H;return R===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),R}function Rr(){Tr.asyncTransitions--}function Ar(R){if(I0===null)try{var I=("require"+Math.random()).slice(0,7);I0=(ew&&ew[I]).call(ew,"timers").setImmediate}catch(or){I0=function(br){Db===!1&&(Db=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Mr=new MessageChannel;Mr.port1.onmessage=br,Mr.port2.postMessage(void 0)}}return I0(R)}function mr(R){return 1<R.length&&typeof AggregateError==="function"?AggregateError(R):R[0]}function Br(R,I){I!==F0-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F0=I}function k(R,I,or){var br=Tr.actQueue;if(br!==null)if(br.length!==0)try{s(br),Ar(function(){return k(R,I,or)});return}catch(Mr){Tr.thrownErrors.push(Mr)}else Tr.actQueue=null;0<Tr.thrownErrors.length?(br=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,or(br)):I(R)}function s(R){if(!N0){N0=!0;var I=0;try{for(;I<R.length;I++){var or=R[I];do{Tr.didUsePromise=!1;var br=or(!1);if(br!==null){if(Tr.didUsePromise){R[I]=or,R.splice(0,I);return}or=br}else break}while(1)}R.length=0}catch(Mr){R.splice(0,I+1),Tr.thrownErrors.push(Mr)}finally{N0=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vr=Symbol.for("react.transitional.element"),Qr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),gr=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),qr=Symbol.for("react.forward_ref"),Zr=Symbol.for("react.suspense"),hr=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Ro=Symbol.for("react.activity"),Lg=Symbol.iterator,nr={},yg={isMounted:function(){return!1},enqueueForceUpdate:function(R){n(R,"forceUpdate")},enqueueReplaceState:function(R){n(R,"replaceState")},enqueueSetState:function(R){n(R,"setState")}},Yg=Object.assign,re={};Object.freeze(re),b.prototype.isReactComponent={},b.prototype.setState=function(R,I){if(typeof R!=="object"&&typeof R!=="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,I,"setState")},b.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};var ao={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Kv in ao)ao.hasOwnProperty(Kv)&&e(Kv,ao[Kv]);u.prototype=b.prototype,ao=P.prototype=new u,ao.constructor=P,Yg(ao,b.prototype),ao.isPureReactComponent=!0;var wo=Array.isArray,o1=Symbol.for("react.client.reference"),Tr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},xi=Object.prototype.hasOwnProperty,Wo=console.createTask?console.createTask:function(){return null};ao={react_stack_bottom_frame:function(R){return R()}};var kb,il,$0={},L0=ao.react_stack_bottom_frame.bind(ao,X)(),Cw=Wo(m(X)),Ni=!1,Bi=/\/+/g,Uv=typeof reportError==="function"?reportError:function(R){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R==="object"&&R!==null&&typeof R.message==="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",R);return}console.error(R)},Db=!1,I0=null,F0=0,x0=!1,N0=!1,g1=typeof queueMicrotask==="function"?function(R){queueMicrotask(function(){return queueMicrotask(R)})}:Ar;ao=Object.freeze({__proto__:null,c:function(R){return C().useMemoCache(R)}});var Kv={map:y,forEach:function(R,I,or){y(R,function(){I.apply(this,arguments)},or)},count:function(R){var I=0;return y(R,function(){I++}),I},toArray:function(R){return y(R,function(I){return I})||[]},only:function(R){if(!lr(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};FJ.Activity=Ro,FJ.Children=Kv,FJ.Component=b,FJ.Fragment=Gr,FJ.Profiler=F,FJ.PureComponent=P,FJ.StrictMode=V,FJ.Suspense=Zr,FJ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tr,FJ.__COMPILER_RUNTIME=ao,FJ.act=function(R){var I=Tr.actQueue,or=F0;F0++;var br=Tr.actQueue=I!==null?I:[],Mr=!1;try{var Fr=R()}catch(Yr){Tr.thrownErrors.push(Yr)}if(0<Tr.thrownErrors.length)throw Br(I,or),R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var xr=Fr;return g1(function(){Mr||x0||(x0=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Yr,Jg){Mr=!0,xr.then(function(oe){if(Br(I,or),or===0){try{s(br),Ar(function(){return k(oe,Yr,Jg)})}catch(e1){Tr.thrownErrors.push(e1)}if(0<Tr.thrownErrors.length){var $v=mr(Tr.thrownErrors);Tr.thrownErrors.length=0,Jg($v)}}else Yr(oe)},function(oe){Br(I,or),0<Tr.thrownErrors.length?(oe=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,Jg(oe)):Jg(oe)})}}}var eo=Fr;if(Br(I,or),or===0&&(s(br),br.length!==0&&g1(function(){Mr||x0||(x0=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Tr.actQueue=null),0<Tr.thrownErrors.length)throw R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;return{then:function(Yr,Jg){Mr=!0,or===0?(Tr.actQueue=br,Ar(function(){return k(eo,Yr,Jg)})):Yr(eo)}}},FJ.cache=function(R){return function(){return R.apply(null,arguments)}},FJ.cacheSignal=function(){return null},FJ.captureOwnerStack=function(){var R=Tr.getCurrentStack;return R===null?null:R()},FJ.cloneElement=function(R,I,or){if(R===null||R===void 0)throw Error("The argument must be a React element, but you passed "+R+".");var br=Yg({},R.props),Mr=R.key,Fr=R._owner;if(I!=null){var xr;r:{if(xi.call(I,"ref")&&(xr=Object.getOwnPropertyDescriptor(I,"ref").get)&&xr.isReactWarning){xr=!1;break r}xr=I.ref!==void 0}xr&&(Fr=q()),L(I)&&(W(I.key),Mr=""+I.key);for(eo in I)!xi.call(I,eo)||eo==="key"||eo==="__self"||eo==="__source"||eo==="ref"&&I.ref===void 0||(br[eo]=I[eo])}var eo=arguments.length-2;if(eo===1)br.children=or;else if(1<eo){xr=Array(eo);for(var Yr=0;Yr<eo;Yr++)xr[Yr]=arguments[Yr+2];br.children=xr}br=_(R.type,Mr,br,Fr,R._debugStack,R._debugTask);for(Mr=2;Mr<arguments.length;Mr++)ur(arguments[Mr]);return br},FJ.createContext=function(R){return R={$$typeof:Or,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:gr,_context:R},R._currentRenderer=null,R._currentRenderer2=null,R},FJ.createElement=function(R,I,or){for(var br=2;br<arguments.length;br++)ur(arguments[br]);br={};var Mr=null;if(I!=null)for(Yr in il||!("__self"in I)||"key"in I||(il=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(W(I.key),Mr=""+I.key),I)xi.call(I,Yr)&&Yr!=="key"&&Yr!=="__self"&&Yr!=="__source"&&(br[Yr]=I[Yr]);var Fr=arguments.length-2;if(Fr===1)br.children=or;else if(1<Fr){for(var xr=Array(Fr),eo=0;eo<Fr;eo++)xr[eo]=arguments[eo+2];Object.freeze&&Object.freeze(xr),br.children=xr}if(R&&R.defaultProps)for(Yr in Fr=R.defaultProps,Fr)br[Yr]===void 0&&(br[Yr]=Fr[Yr]);Mr&&T(br,typeof R==="function"?R.displayName||R.name||"Unknown":R);var Yr=1e4>Tr.recentlyCreatedOwnerStacks++;return _(R,Mr,br,q(),Yr?Error("react-stack-top-frame"):L0,Yr?Wo(m(R)):Cw)},FJ.createRef=function(){var R={current:null};return Object.seal(R),R},FJ.forwardRef=function(R){R!=null&&R.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof R!=="function"?console.error("forwardRef requires a render function but was given %s.",R===null?"null":typeof R):R.length!==0&&R.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",R.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),R!=null&&R.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:qr,render:R},or;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(br){or=br,R.name||R.displayName||(Object.defineProperty(R,"name",{value:br}),R.displayName=br)}}),I},FJ.isValidElement=lr,FJ.lazy=function(R){R={_status:-1,_result:R};var I={$$typeof:jr,_payload:R,_init:f},or={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return R._ioInfo=or,I._debugInfo=[{awaited:or}],I},FJ.memo=function(R,I){R==null&&console.error("memo: The first argument must be a component. Instead received: %s",R===null?"null":typeof R),I={$$typeof:Cr,type:R,compare:I===void 0?null:I};var or;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(br){or=br,R.name||R.displayName||(Object.defineProperty(R,"name",{value:br}),R.displayName=br)}}),I},FJ.startTransition=function(R){var I=Tr.T,or={};or._updatedFibers=new Set,Tr.T=or;try{var br=R(),Mr=Tr.S;Mr!==null&&Mr(or,br),typeof br==="object"&&br!==null&&typeof br.then==="function"&&(Tr.asyncTransitions++,br.then(Rr,Rr),br.then(O,Uv))}catch(Fr){Uv(Fr)}finally{I===null&&or._updatedFibers&&(R=or._updatedFibers.size,or._updatedFibers.clear(),10<R&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&or.types!==null&&(I.types!==null&&I.types!==or.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=or.types),Tr.T=I}},FJ.unstable_useCacheRefresh=function(){return C().useCacheRefresh()},FJ.use=function(R){return C().use(R)},FJ.useActionState=function(R,I,or){return C().useActionState(R,I,or)},FJ.useCallback=function(R,I){return C().useCallback(R,I)},FJ.useContext=function(R){var I=C();return R.$$typeof===gr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(R)},FJ.useDebugValue=function(R,I){return C().useDebugValue(R,I)},FJ.useDeferredValue=function(R,I){return C().useDeferredValue(R,I)},FJ.useEffect=function(R,I){return R==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useEffect(R,I)},FJ.useEffectEvent=function(R){return C().useEffectEvent(R)},FJ.useId=function(){return C().useId()},FJ.useImperativeHandle=function(R,I,or){return C().useImperativeHandle(R,I,or)},FJ.useInsertionEffect=function(R,I){return R==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useInsertionEffect(R,I)},FJ.useLayoutEffect=function(R,I){return R==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useLayoutEffect(R,I)},FJ.useMemo=function(R,I){return C().useMemo(R,I)},FJ.useOptimistic=function(R,I){return C().useOptimistic(R,I)},FJ.useReducer=function(R,I,or){return C().useReducer(R,I,or)},FJ.useRef=function(R){return C().useRef(R)},FJ.useState=function(R){return C().useState(R)},FJ.useSyncExternalStore=function(R,I,or){return C().useSyncExternalStore(R,I,or)},FJ.useTransition=function(){return C().useTransition()},FJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OR=Wi((xJ)=>{(function(){function e(){if(a=!1,y){var k=xJ.unstable_now();Rr=k;var s=!0;try{r:{ur=!1,lr&&(lr=!1,er(f),f=-1),rr=!0;var vr=_;try{o:{P(k);for(Z=n(X);Z!==null&&!(Z.expirationTime>k&&H());){var Qr=Z.callback;if(typeof Qr==="function"){Z.callback=null,_=Z.priorityLevel;var Gr=Qr(Z.expirationTime<=k);if(k=xJ.unstable_now(),typeof Gr==="function"){Z.callback=Gr,P(k),s=!0;break o}Z===n(X)&&b(X),P(k)}else b(X);Z=n(X)}if(Z!==null)s=!0;else{var V=n(L);V!==null&&W(O,V.startTime-k),s=!1}}break r}finally{Z=null,_=vr,rr=!1}s=void 0}}finally{s?Ar():y=!1}}}function v(k,s){var vr=k.length;k.push(s);r:for(;0<vr;){var Qr=vr-1>>>1,Gr=k[Qr];if(0<u(Gr,s))k[Qr]=s,k[vr]=Gr,vr=Qr;else break r}}function n(k){return k.length===0?null:k[0]}function b(k){if(k.length===0)return null;var s=k[0],vr=k.pop();if(vr!==s){k[0]=vr;r:for(var Qr=0,Gr=k.length,V=Gr>>>1;Qr<V;){var F=2*(Qr+1)-1,gr=k[F],Or=F+1,qr=k[Or];if(0>u(gr,vr))Or<Gr&&0>u(qr,gr)?(k[Qr]=qr,k[Or]=vr,Qr=Or):(k[Qr]=gr,k[F]=vr,Qr=F);else if(Or<Gr&&0>u(qr,vr))k[Qr]=qr,k[Or]=vr,Qr=Or;else break r}}return s}function u(k,s){var vr=k.sortIndex-s.sortIndex;return vr!==0?vr:k.id-s.id}function P(k){for(var s=n(L);s!==null;){if(s.callback===null)b(L);else if(s.startTime<=k)b(L),s.sortIndex=s.expirationTime,v(X,s);else break;s=n(L)}}function O(k){if(lr=!1,P(k),!ur)if(n(X)!==null)ur=!0,y||(y=!0,Ar());else{var s=n(L);s!==null&&W(O,s.startTime-k)}}function H(){return a?!0:xJ.unstable_now()-Rr<C?!1:!0}function W(k,s){f=p(function(){k(xJ.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),xJ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var G=performance;xJ.unstable_now=function(){return G.now()}}else{var m=Date,q=m.now();xJ.unstable_now=function(){return m.now()-q}}var X=[],L=[],T=1,Z=null,_=3,rr=!1,ur=!1,lr=!1,a=!1,p=typeof setTimeout==="function"?setTimeout:null,er=typeof clearTimeout==="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null,y=!1,f=-1,C=5,Rr=-1;if(typeof N==="function")var Ar=function(){N(e)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,Br=mr.port2;mr.port1.onmessage=e,Ar=function(){Br.postMessage(null)}}else Ar=function(){p(e,0)};xJ.unstable_IdlePriority=5,xJ.unstable_ImmediatePriority=1,xJ.unstable_LowPriority=4,xJ.unstable_NormalPriority=3,xJ.unstable_Profiling=null,xJ.unstable_UserBlockingPriority=2,xJ.unstable_cancelCallback=function(k){k.callback=null},xJ.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1000/k):5},xJ.unstable_getCurrentPriorityLevel=function(){return _},xJ.unstable_next=function(k){switch(_){case 1:case 2:case 3:var s=3;break;default:s=_}var vr=_;_=s;try{return k()}finally{_=vr}},xJ.unstable_requestPaint=function(){a=!0},xJ.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var vr=_;_=k;try{return s()}finally{_=vr}},xJ.unstable_scheduleCallback=function(k,s,vr){var Qr=xJ.unstable_now();switch(typeof vr==="object"&&vr!==null?(vr=vr.delay,vr=typeof vr==="number"&&0<vr?Qr+vr:Qr):vr=Qr,k){case 1:var Gr=-1;break;case 2:Gr=250;break;case 5:Gr=1073741823;break;case 4:Gr=1e4;break;default:Gr=5000}return Gr=vr+Gr,k={id:T++,callback:s,priorityLevel:k,startTime:vr,expirationTime:Gr,sortIndex:-1},vr>Qr?(k.sortIndex=vr,v(L,k),n(X)===null&&k===n(L)&&(lr?(er(f),f=-1):lr=!0,W(O,vr-Qr))):(k.sortIndex=Gr,v(X,k),ur||rr||(ur=!0,y||(y=!0,Ar()))),k},xJ.unstable_shouldYield=H,xJ.unstable_wrapCallback=function(k){var s=_;return function(){var vr=_;_=s;try{return k.apply(this,arguments)}finally{_=vr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var HR=Wi((NJ)=>{var R6=wr(vo());(function(){function e(){}function v(m){return""+m}function n(m,q,X){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{v(L);var T=!1}catch(Z){T=!0}return T&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),v(L)),{$$typeof:W,key:L==null?null:""+L,children:m,containerInfo:q,implementation:X}}function b(m,q){if(m==="font")return"";if(typeof q==="string")return q==="use-credentials"?q:""}function u(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":'something with type "'+typeof m+'"'}function P(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":typeof m==="string"?JSON.stringify(m):typeof m==="number"?"`"+m+"`":'something with type "'+typeof m+'"'}function O(){var m=G.H;return m===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),m}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var H={d:{f:e,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},W=Symbol.for("react.portal"),G=R6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),NJ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,NJ.createPortal=function(m,q){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error("Target container is not a DOM element.");return n(m,q,null,X)},NJ.flushSync=function(m){var q=G.T,X=H.p;try{if(G.T=null,H.p=2,m)return m()}finally{G.T=q,H.p=X,H.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},NJ.preconnect=function(m,q){typeof m==="string"&&m?q!=null&&typeof q!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(q)):q!=null&&typeof q.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",u(q.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&(q?(q=q.crossOrigin,q=typeof q==="string"?q==="use-credentials"?q:"":void 0):q=null,H.d.C(m,q))},NJ.prefetchDNS=function(m){if(typeof m!=="string"||!m)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m));else if(1<arguments.length){var q=arguments[1];typeof q==="object"&&q.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q))}typeof m==="string"&&H.d.D(m)},NJ.preinit=function(m,q){if(typeof m==="string"&&m?q==null||typeof q!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(q)):q.as!=="style"&&q.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(q.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&q&&typeof q.as==="string"){var X=q.as,L=b(X,q.crossOrigin),T=typeof q.integrity==="string"?q.integrity:void 0,Z=typeof q.fetchPriority==="string"?q.fetchPriority:void 0;X==="style"?H.d.S(m,typeof q.precedence==="string"?q.precedence:void 0,{crossOrigin:L,integrity:T,fetchPriority:Z}):X==="script"&&H.d.X(m,{crossOrigin:L,integrity:T,fetchPriority:Z,nonce:typeof q.nonce==="string"?q.nonce:void 0})}},NJ.preinitModule=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&q.as!=="script"&&(X+=" The `as` option encountered was "+P(q.as)+"."),X)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",X);else switch(X=q&&typeof q.as==="string"?q.as:"script",X){case"script":break;default:X=P(X),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',X,m)}if(typeof m==="string")if(typeof q==="object"&&q!==null){if(q.as==null||q.as==="script")X=b(q.as,q.crossOrigin),H.d.M(m,{crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0})}else q==null&&H.d.M(m)},NJ.preload=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q==null||typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":typeof q.as==="string"&&q.as||(X+=" The `as` option encountered was "+u(q.as)+"."),X&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',X),typeof m==="string"&&typeof q==="object"&&q!==null&&typeof q.as==="string"){X=q.as;var L=b(X,q.crossOrigin);H.d.L(m,X,{crossOrigin:L,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0,type:typeof q.type==="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority==="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy==="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet==="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes==="string"?q.imageSizes:void 0,media:typeof q.media==="string"?q.media:void 0})}},NJ.preloadModule=function(m,q){var X="";typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&typeof q.as!=="string"&&(X+=" The `as` option encountered was "+u(q.as)+"."),X&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',X),typeof m==="string"&&(q?(X=b(q.as,q.crossOrigin),H.d.m(m,{as:typeof q.as==="string"&&q.as!=="script"?q.as:void 0,crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0})):H.d.m(m))},NJ.requestFormReset=function(m){H.d.r(m)},NJ.unstable_batchedUpdates=function(m,q){return m(q)},NJ.useFormState=function(m,q,X){return O().useFormState(m,q,X)},NJ.useFormStatus=function(){return O().useHostTransitionStatus()},NJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Ch=Wi((fI,AR)=>{AR.exports=HR()});var qR=Wi((BJ)=>{var lo=wr(OR()),Sh=wr(vo()),W6=wr(Ch());(function(){function e(r,o){for(r=r.memoizedState;r!==null&&0<o;)r=r.next,o--;return r}function v(r,o,g,l){if(g>=o.length)return l;var i=o[g],h=lg(r)?r.slice():Er({},r);return h[i]=v(r[i],o,g+1,l),h}function n(r,o,g){if(o.length!==g.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<g.length-1;l++)if(o[l]!==g[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return b(r,o,g,0)}}function b(r,o,g,l){var i=o[l],h=lg(r)?r.slice():Er({},r);return l+1===o.length?(h[g[l]]=h[i],lg(h)?h.splice(i,1):delete h[i]):h[i]=b(r[i],o,g,l+1),h}function u(r,o,g){var l=o[g],i=lg(r)?r.slice():Er({},r);if(g+1===o.length)return lg(i)?i.splice(l,1):delete i[l],i;return i[l]=u(r[l],o,g+1),i}function P(){return!1}function O(){return null}function H(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function W(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function G(){}function m(){}function q(r){var o=[];return r.forEach(function(g){o.push(g)}),o.sort().join(", ")}function X(r,o,g,l){return new wG(r,o,g,l)}function L(r,o){r.context===jv&&(C2(r.current,2,o,r,null,null),fi())}function T(r,o){if(Ue!==null){var g=o.staleFamilies;o=o.updatedFamilies,K1(),W8(r.current,o,g),fi()}}function Z(r){Ue=r}function _(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var o=r,g=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(g=o.return),r=o.return;while(r)}return o.tag===3?g:null}function ur(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function lr(r){if(r.tag===31){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var o=r.alternate;if(!o){if(o=rr(r),o===null)throw Error("Unable to find node on an unmounted component.");return o!==r?null:r}for(var g=r,l=o;;){var i=g.return;if(i===null)break;var h=i.alternate;if(h===null){if(l=i.return,l!==null){g=l;continue}break}if(i.child===h.child){for(h=i.child;h;){if(h===g)return a(i),r;if(h===l)return a(i),o;h=h.sibling}throw Error("Unable to find node on an unmounted component.")}if(g.return!==l.return)g=i,l=h;else{for(var t=!1,w=i.child;w;){if(w===g){t=!0,g=i,l=h;break}if(w===l){t=!0,l=i,g=h;break}w=w.sibling}if(!t){for(w=h.child;w;){if(w===g){t=!0,g=h,l=i;break}if(w===l){t=!0,l=h,g=i;break}w=w.sibling}if(!t)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(g.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(g.tag!==3)throw Error("Unable to find node on an unmounted component.");return g.stateNode.current===g?r:o}function er(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r;for(r=r.child;r!==null;){if(o=er(r),o!==null)return o;r=r.sibling}return null}function N(r){if(r===null||typeof r!=="object")return null;return r=zA&&r[zA]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===FX?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case gh:return"Fragment";case _2:return"Profiler";case pt:return"StrictMode";case c2:return"Suspense";case E2:return"SuspenseList";case a2:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case oh:return"Portal";case Yl:return r.displayName||"Context";case y2:return(r._context.displayName||"Context")+".Consumer";case S1:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return o=r.displayName||null,o!==null?o:y(r.type)||"Memo";case te:o=r._payload,r=r._init;try{return y(r(o))}catch(g){}}return null}function f(r){return typeof r.tag==="number"?C(r):typeof r.name==="string"?r.name:null}function C(r){var o=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(o._context.displayName||"Context")+".Consumer";case 10:return o.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(o);case 8:return o===pt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof o==="function")return o.displayName||o.name||null;if(typeof o==="string")return o;break;case 29:if(o=r._debugInfo,o!=null){for(var g=o.length-1;0<=g;g--)if(typeof o[g].name==="string")return o[g].name}if(r.return!==null)return C(r.return)}return null}function Rr(r){return{current:r}}function Ar(r,o){0>sl?console.error("Unexpected pop."):(o!==j2[sl]&&console.error("Unexpected Fiber popped."),r.current=f2[sl],f2[sl]=null,j2[sl]=null,sl--)}function mr(r,o,g){sl++,f2[sl]=r.current,j2[sl]=g,r.current=o}function Br(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,o){mr(_v,o,r),mr(T1,r,r),mr(Vv,null,r);var g=o.nodeType;switch(g){case 9:case 11:g=g===9?"#document":"#fragment",o=(o=o.documentElement)?(o=o.namespaceURI)?pH(o):Pv:Pv;break;default:if(g=o.tagName,o=o.namespaceURI)o=pH(o),o=dH(o,g);else switch(g){case"svg":o=Bh;break;case"math":o=ju;break;default:o=Pv}}g=g.toLowerCase(),g=yP(null,g),g={context:o,ancestorInfo:g},Ar(Vv,r),mr(Vv,g,r)}function s(r){Ar(Vv,r),Ar(T1,r),Ar(_v,r)}function vr(){return Br(Vv.current)}function Qr(r){r.memoizedState!==null&&mr(st,r,r);var o=Br(Vv.current),g=r.type,l=dH(o.context,g);g=yP(o.ancestorInfo,g),l={context:l,ancestorInfo:g},o!==l&&(mr(T1,r,r),mr(Vv,l,r))}function Gr(r){T1.current===r&&(Ar(Vv,r),Ar(T1,r)),st.current===r&&(Ar(st,r),In._currentValue=Ri)}function V(){}function F(){if(k1===0){UA=console.log,KA=console.info,$A=console.warn,LA=console.error,IA=console.group,FA=console.groupCollapsed,xA=console.groupEnd;var r={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}k1++}function gr(){if(k1--,k1===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Er({},r,{value:UA}),info:Er({},r,{value:KA}),warn:Er({},r,{value:$A}),error:Er({},r,{value:LA}),group:Er({},r,{value:IA}),groupCollapsed:Er({},r,{value:FA}),groupEnd:Er({},r,{value:xA})})}0>k1&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Or(r){var o=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=o,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),o=r.indexOf(`
`),o!==-1&&(r=r.slice(o+1)),o=r.indexOf("react_stack_bottom_frame"),o!==-1&&(o=r.lastIndexOf(`
`,o)),o!==-1)r=r.slice(0,o);else return"";return r}function qr(r){if(p2===void 0)try{throw Error()}catch(g){var o=g.stack.trim().match(/\n( *(at )?)/);p2=o&&o[1]||"",NA=-1<g.stack.indexOf(`
    at`)?" (<anonymous>)":-1<g.stack.indexOf("@")?"@unknown:0:0":""}return`
`+p2+r+NA}function Zr(r,o){if(!r||d2)return"";var g=s2.get(r);if(g!==void 0)return g;d2=!0,g=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=S.H,S.H=null,F();try{var i={DetermineComponentFrameRoot:function(){try{if(o){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(ir){var x=ir}Reflect.construct(r,[],J)}else{try{J.call()}catch(ir){x=ir}r.call(J.prototype)}}else{try{throw Error()}catch(ir){x=ir}(J=r())&&typeof J.catch==="function"&&J.catch(function(){})}}catch(ir){if(ir&&x&&typeof ir.stack==="string")return[ir.stack,x.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var t=i.DetermineComponentFrameRoot(),w=t[0],A=t[1];if(w&&A){var M=w.split(`
`),K=A.split(`
`);for(t=h=0;h<M.length&&!M[h].includes("DetermineComponentFrameRoot");)h++;for(;t<K.length&&!K[t].includes("DetermineComponentFrameRoot");)t++;if(h===M.length||t===K.length)for(h=M.length-1,t=K.length-1;1<=h&&0<=t&&M[h]!==K[t];)t--;for(;1<=h&&0<=t;h--,t--)if(M[h]!==K[t]){if(h!==1||t!==1)do if(h--,t--,0>t||M[h]!==K[t]){var $=`
`+M[h].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&s2.set(r,$),$}while(1<=h&&0<=t);break}}}finally{d2=!1,S.H=l,gr(),Error.prepareStackTrace=g}return M=(M=r?r.displayName||r.name:"")?qr(M):"",typeof r==="function"&&s2.set(r,M),M}function hr(r,o){switch(r.tag){case 26:case 27:case 5:return qr(r.type);case 16:return qr("Lazy");case 13:return r.child!==o&&o!==null?qr("Suspense Fallback"):qr("Suspense");case 19:return qr("SuspenseList");case 0:case 15:return Zr(r.type,!1);case 11:return Zr(r.type.render,!1);case 1:return Zr(r.type,!0);case 31:return qr("Activity");default:return""}}function Cr(r){try{var o="",g=null;do{o+=hr(r,g);var l=r._debugInfo;if(l)for(var i=l.length-1;0<=i;i--){var h=l[i];if(typeof h.name==="string"){var t=o;r:{var{name:w,env:A,debugLocation:M}=h;if(M!=null){var K=Or(M),$=K.lastIndexOf(`
`),J=$===-1?K:K.slice($+1);if(J.indexOf(w)!==-1){var x=`
`+J;break r}}x=qr(w+(A?" ["+A+"]":""))}o=t+x}}g=r,r=r.return}while(r);return o}catch(ir){return`
Error generating stack: `+ir.message+`
`+ir.stack}}function jr(r){return(r=r?r.displayName||r.name:"")?qr(r):""}function Ro(){if(ue===null)return null;var r=ue._debugOwner;return r!=null?f(r):null}function Lg(){if(ue===null)return"";var r=ue;try{var o="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:o+=qr(r.type);break;case 13:o+=qr("Suspense");break;case 19:o+=qr("SuspenseList");break;case 31:o+=qr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||o!==""||(o+=jr(r.type));break;case 11:r._debugOwner||o!==""||(o+=jr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var g=r;r=g._debugOwner;var l=g._debugStack;if(r&&l){var i=Or(l);i!==""&&(o+=`
`+i)}}else if(r.debugStack!=null){var h=r.debugStack;(r=r.owner)&&h&&(o+=`
`+Or(h))}else break;var t=o}catch(w){t=`
Error generating stack: `+w.message+`
`+w.stack}return t}function nr(r,o,g,l,i,h,t){var w=ue;yg(r);try{return r!==null&&r._debugTask?r._debugTask.run(o.bind(null,g,l,i,h,t)):o(g,l,i,h,t)}finally{yg(w)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function yg(r){S.getCurrentStack=r===null?null:Lg,Jl=!1,ue=r}function Yg(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function re(r){try{return ao(r),!1}catch(o){return!0}}function ao(r){return""+r}function wo(r,o){if(re(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",o,Yg(r)),ao(r)}function o1(r,o){if(re(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",o,Yg(r)),ao(r)}function Tr(r){if(re(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yg(r)),ao(r)}function xi(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(o.isDisabled)return!0;if(!o.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{lh=o.inject(r),zg=o}catch(g){console.error("React instrumentation encountered an error: %o.",g)}return o.checkDCE?!0:!1}function Wo(r){if(typeof TX==="function"&&kX(r),zg&&typeof zg.setStrictMode==="function")try{zg.setStrictMode(lh,r)}catch(o){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",o))}}function kb(r){return r>>>=0,r===0?32:31-(DX(r)/VX|0)|0}function il(r){var o=r&42;if(o!==0)return o;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function $0(r,o,g){var l=r.pendingLanes;if(l===0)return 0;var i=0,h=r.suspendedLanes,t=r.pingedLanes;r=r.warmLanes;var w=l&134217727;return w!==0?(l=w&~h,l!==0?i=il(l):(t&=w,t!==0?i=il(t):g||(g=w&~r,g!==0&&(i=il(g))))):(w=l&~h,w!==0?i=il(w):t!==0?i=il(t):g||(g=l&~r,g!==0&&(i=il(g)))),i===0?0:o!==0&&o!==i&&(o&h)===0&&(h=i&-i,g=o&-o,h>=g||h===32&&(g&4194048)!==0)?o:i}function L0(r,o){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&o)===0}function Cw(r,o){switch(r){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Ni(){var r=gu;return gu<<=1,(gu&62914560)===0&&(gu=4194304),r}function Bi(r){for(var o=[],g=0;31>g;g++)o.push(r);return o}function Uv(r,o){r.pendingLanes|=o,o!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Db(r,o,g,l,i,h){var t=r.pendingLanes;r.pendingLanes=g,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=g,r.entangledLanes&=g,r.errorRecoveryDisabledLanes&=g,r.shellSuspendCounter=0;var{entanglements:w,expirationTimes:A,hiddenUpdates:M}=r;for(g=t&~g;0<g;){var K=31-Fg(g),$=1<<K;w[K]=0,A[K]=-1;var J=M[K];if(J!==null)for(M[K]=null,K=0;K<J.length;K++){var x=J[K];x!==null&&(x.lane&=-536870913)}g&=~$}l!==0&&I0(r,l,0),h!==0&&i===0&&r.tag!==0&&(r.suspendedLanes|=h&~(t&~o))}function I0(r,o,g){r.pendingLanes|=o,r.suspendedLanes&=~o;var l=31-Fg(o);r.entangledLanes|=o,r.entanglements[l]=r.entanglements[l]|1073741824|g&261930}function F0(r,o){var g=r.entangledLanes|=o;for(r=r.entanglements;g;){var l=31-Fg(g),i=1<<l;i&o|r[l]&o&&(r[l]|=o),g&=~i}}function x0(r,o){var g=o&-o;return g=(g&42)!==0?1:N0(g),(g&(r.suspendedLanes|o))!==0?0:g}function N0(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function g1(r,o,g){if(zl)for(r=r.pendingUpdatersLaneMap;0<g;){var l=31-Fg(g),i=1<<l;r[l].add(o),g&=~i}}function Kv(r,o){if(zl)for(var{pendingUpdatersLaneMap:g,memoizedUpdaters:l}=r;0<o;){var i=31-Fg(o);r=1<<i,i=g[i],0<i.size&&(i.forEach(function(h){var t=h.alternate;t!==null&&l.has(t)||l.add(h)}),i.clear()),o&=~r}}function R(r){return r&=-r,we!==0&&we<r?_e!==0&&_e<r?(r&134217727)!==0?Ul:eu:_e:we}function I(){var r=no.p;if(r!==0)return r;return r=window.event,r===void 0?Ul:WA(r.type)}function or(r,o){var g=no.p;try{return no.p=r,o()}finally{no.p=g}}function br(r){delete r[Mg],delete r[xg],delete r[l4],delete r[_X],delete r[yX]}function Mr(r){var o=r[Mg];if(o)return o;for(var g=r.parentNode;g;){if(o=g[cv]||g[Mg]){if(g=o.alternate,o.child!==null||g!==null&&g.child!==null)for(r=iA(r);r!==null;){if(g=r[Mg])return g;r=iA(r)}return o}r=g,g=r.parentNode}return null}function Fr(r){if(r=r[Mg]||r[cv]){var o=r.tag;if(o===5||o===6||o===13||o===31||o===26||o===27||o===3)return r}return null}function xr(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function eo(r){var o=r[BA];return o||(o=r[BA]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function Yr(r){r[D1]=!0}function Jg(r,o){oe(r,o),oe(r+"Capture",o)}function oe(r,o){p0[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p0[r]=o;var g=r.toLowerCase();v4[g]=r,r==="onDoubleClick"&&(v4.ondblclick=r);for(r=0;r<o.length;r++)ZA.add(o[r])}function $v(r,o){cX[o.type]||o.onChange||o.onInput||o.readOnly||o.disabled||o.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),o.onChange||o.readOnly||o.disabled||o.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function e1(r){if(Ve.call(SA,r))return!0;if(Ve.call(CA,r))return!1;if(EX.test(r))return SA[r]=!0;return CA[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $P(r,o,g){if(e1(o)){if(!r.hasAttribute(o)){switch(typeof g){case"symbol":case"object":return g;case"function":return g;case"boolean":if(g===!1)return g}return g===void 0?void 0:null}if(r=r.getAttribute(o),r===""&&g===!0)return!0;return wo(g,o),r===""+g?g:r}}function Vb(r,o,g){if(e1(o))if(g===null)r.removeAttribute(o);else{switch(typeof g){case"undefined":case"function":case"symbol":r.removeAttribute(o);return;case"boolean":var l=o.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(o);return}}wo(g,o),r.setAttribute(o,""+g)}}function _b(r,o,g){if(g===null)r.removeAttribute(o);else{switch(typeof g){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}wo(g,o),r.setAttribute(o,""+g)}}function _l(r,o,g,l){if(l===null)r.removeAttribute(g);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}wo(l,g),r.setAttributeNS(o,g,""+l)}}function Xe(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Tr(r),r;default:return""}}function LP(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Vm(r,o,g){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o);if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:i,set:h}=l;return Object.defineProperty(r,o,{configurable:!0,get:function(){return i.call(this)},set:function(t){Tr(t),g=""+t,h.call(this,t)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return g},setValue:function(t){Tr(t),g=""+t},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Sw(r){if(!r._valueTracker){var o=LP(r)?"checked":"value";r._valueTracker=Vm(r,o,""+r[o])}}function IP(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var g=o.getValue(),l="";return r&&(l=LP(r)?r.checked?"true":"false":r.value),r=l,r!==g?(o.setValue(r),!0):!1}function yb(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(o){return r.body}}function Ye(r){return r.replace(aX,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function FP(r,o){o.checked===void 0||o.defaultChecked===void 0||kA||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component",o.type),kA=!0),o.value===void 0||o.defaultValue===void 0||TA||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component",o.type),TA=!0)}function Tw(r,o,g,l,i,h,t,w){if(r.name="",t!=null&&typeof t!=="function"&&typeof t!=="symbol"&&typeof t!=="boolean"?(wo(t,"type"),r.type=t):r.removeAttribute("type"),o!=null)if(t==="number"){if(o===0&&r.value===""||r.value!=o)r.value=""+Xe(o)}else r.value!==""+Xe(o)&&(r.value=""+Xe(o));else t!=="submit"&&t!=="reset"||r.removeAttribute("value");o!=null?kw(r,t,Xe(o)):g!=null?kw(r,t,Xe(g)):l!=null&&r.removeAttribute("value"),i==null&&h!=null&&(r.defaultChecked=!!h),i!=null&&(r.checked=i&&typeof i!=="function"&&typeof i!=="symbol"),w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"?(wo(w,"name"),r.name=""+Xe(w)):r.removeAttribute("name")}function xP(r,o,g,l,i,h,t,w){if(h!=null&&typeof h!=="function"&&typeof h!=="symbol"&&typeof h!=="boolean"&&(wo(h,"type"),r.type=h),o!=null||g!=null){if(!(h!=="submit"&&h!=="reset"||o!==void 0&&o!==null)){Sw(r);return}g=g!=null?""+Xe(g):"",o=o!=null?""+Xe(o):g,w||o===r.value||(r.value=o),r.defaultValue=o}l=l!=null?l:i,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=w?r.checked:!!l,r.defaultChecked=!!l,t!=null&&typeof t!=="function"&&typeof t!=="symbol"&&typeof t!=="boolean"&&(wo(t,"name"),r.name=t),Sw(r)}function kw(r,o,g){o==="number"&&yb(r.ownerDocument)===r||r.defaultValue===""+g||(r.defaultValue=""+g)}function NP(r,o){o.value==null&&(typeof o.children==="object"&&o.children!==null?Sh.Children.forEach(o.children,function(g){g==null||typeof g==="string"||typeof g==="number"||typeof g==="bigint"||VA||(VA=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):o.dangerouslySetInnerHTML==null||_A||(_A=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),o.selected==null||DA||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),DA=!0)}function BP(){var r=Ro();return r?`

Check the render method of \``+r+"`.":""}function Zi(r,o,g,l){if(r=r.options,o){o={};for(var i=0;i<g.length;i++)o["$"+g[i]]=!0;for(g=0;g<r.length;g++)i=o.hasOwnProperty("$"+r[g].value),r[g].selected!==i&&(r[g].selected=i),i&&l&&(r[g].defaultSelected=!0)}else{g=""+Xe(g),o=null;for(i=0;i<r.length;i++){if(r[i].value===g){r[i].selected=!0,l&&(r[i].defaultSelected=!0);return}o!==null||r[i].disabled||(o=r[i])}o!==null&&(o.selected=!0)}}function ZP(r,o){for(r=0;r<cA.length;r++){var g=cA[r];if(o[g]!=null){var l=lg(o[g]);o.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",g,BP()):!o.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",g,BP())}}o.value===void 0||o.defaultValue===void 0||yA||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),yA=!0)}function CP(r,o){o.value===void 0||o.defaultValue===void 0||EA||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component"),EA=!0),o.children!=null&&o.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function SP(r,o,g){if(o!=null&&(o=""+Xe(o),o!==r.value&&(r.value=o),g==null)){r.defaultValue!==o&&(r.defaultValue=o);return}r.defaultValue=g!=null?""+Xe(g):""}function TP(r,o,g,l){if(o==null){if(l!=null){if(g!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(lg(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}g=l}g==null&&(g=""),o=g}g=Xe(o),r.defaultValue=g,l=r.textContent,l===g&&l!==""&&l!==null&&(r.value=l),Sw(r)}function kP(r,o){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-o?kP(r.children[0],o):r}function ge(r){return"  "+"  ".repeat(r)}function Ci(r){return"+ "+"  ".repeat(r)}function B0(r){return"- "+"  ".repeat(r)}function DP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function l1(r,o){return aA.test(r)?(r=JSON.stringify(r),r.length>o-2?8>o?'{"..."}':"{"+r.slice(0,o-7)+'..."}':"{"+r+"}"):r.length>o?5>o?'{"..."}':r.slice(0,o-3)+"...":r}function cb(r,o,g){var l=120-2*g;if(o===null)return Ci(g)+l1(r,l)+`
`;if(typeof o==="string"){for(var i=0;i<o.length&&i<r.length&&o.charCodeAt(i)===r.charCodeAt(i);i++);return i>l-8&&10<i&&(r="..."+r.slice(i-8),o="..."+o.slice(i-8)),Ci(g)+l1(r,l)+`
`+B0(g)+l1(o,l)+`
`}return ge(g)+l1(r,l)+`
`}function Dw(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(o,g){return g})}function v1(r,o){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>o?5>o?'"..."':r.slice(0,o-4)+'..."':r;case"object":if(r===null)return"null";if(lg(r))return"[...]";if(r.$$typeof===Xl)return(o=y(r.type))?"<"+o+">":"<...>";var g=Dw(r);if(g==="Object"){g="",o-=2;for(var l in r)if(r.hasOwnProperty(l)){var i=JSON.stringify(l);if(i!=='"'+l+'"'&&(l=i),o-=l.length-2,i=v1(r[l],15>o?o:15),o-=i.length,0>o){g+=g===""?"...":", ...";break}g+=(g===""?"":",")+l+":"+i}return"{"+g+"}"}return g;case"function":return(o=r.displayName||r.name)?"function "+o:"function";default:return String(r)}}function Si(r,o){return typeof r!=="string"||aA.test(r)?"{"+v1(r,o-2)+"}":r.length>o-2?5>o?'"..."':'"'+r.slice(0,o-5)+'..."':'"'+r+'"'}function Vw(r,o,g){var l=120-g.length-r.length,i=[],h;for(h in o)if(o.hasOwnProperty(h)&&h!=="children"){var t=Si(o[h],120-g.length-h.length-1);l-=h.length+t.length+2,i.push(h+"="+t)}return i.length===0?g+"<"+r+`>
`:0<l?g+"<"+r+" "+i.join(" ")+`>
`:g+"<"+r+`
`+g+"  "+i.join(`
`+g+"  ")+`
`+g+`>
`}function _m(r,o,g){var l="",i=Er({},o),h;for(h in r)if(r.hasOwnProperty(h)){delete i[h];var t=120-2*g-h.length-2,w=v1(r[h],t);o.hasOwnProperty(h)?(t=v1(o[h],t),l+=Ci(g)+h+": "+w+`
`,l+=B0(g)+h+": "+t+`
`):l+=Ci(g)+h+": "+w+`
`}for(var A in i)i.hasOwnProperty(A)&&(r=v1(i[A],120-2*g-A.length-2),l+=B0(g)+A+": "+r+`
`);return l}function ym(r,o,g,l){var i="",h=new Map;for(M in g)g.hasOwnProperty(M)&&h.set(M.toLowerCase(),M);if(h.size===1&&h.has("children"))i+=Vw(r,o,ge(l));else{for(var t in o)if(o.hasOwnProperty(t)&&t!=="children"){var w=120-2*(l+1)-t.length-1,A=h.get(t.toLowerCase());if(A!==void 0){h.delete(t.toLowerCase());var M=o[t];A=g[A];var K=Si(M,w);w=Si(A,w),typeof M==="object"&&M!==null&&typeof A==="object"&&A!==null&&Dw(M)==="Object"&&Dw(A)==="Object"&&(2<Object.keys(M).length||2<Object.keys(A).length||-1<K.indexOf("...")||-1<w.indexOf("..."))?i+=ge(l+1)+t+`={{
`+_m(M,A,l+2)+ge(l+1)+`}}
`:(i+=Ci(l+1)+t+"="+K+`
`,i+=B0(l+1)+t+"="+w+`
`)}else i+=ge(l+1)+t+"="+Si(o[t],w)+`
`}h.forEach(function($){if($!=="children"){var J=120-2*(l+1)-$.length-1;i+=B0(l+1)+$+"="+Si(g[$],J)+`
`}}),i=i===""?ge(l)+"<"+r+`>
`:ge(l)+"<"+r+`
`+i+ge(l)+`>
`}if(r=g.children,o=o.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(h="",typeof o==="string"||typeof o==="number"||typeof o==="bigint")h=""+o;i+=cb(h,""+r,l+1)}else if(typeof o==="string"||typeof o==="number"||typeof o==="bigint")i=r==null?i+cb(""+o,null,l+1):i+cb(""+o,void 0,l+1);return i}function VP(r,o){var g=DP(r);if(g===null){g="";for(r=r.child;r;)g+=VP(r,o),r=r.sibling;return g}return ge(o)+"<"+g+`>
`}function _w(r,o){var g=kP(r,o);if(g!==r&&(r.children.length!==1||r.children[0]!==g))return ge(o)+`...
`+_w(g,o+1);g="";var l=r.fiber._debugInfo;if(l)for(var i=0;i<l.length;i++){var h=l[i].name;typeof h==="string"&&(g+=ge(o)+"<"+h+`>
`,o++)}if(l="",i=r.fiber.pendingProps,r.fiber.tag===6)l=cb(i,r.serverProps,o),o++;else if(h=DP(r.fiber),h!==null)if(r.serverProps===void 0){l=o;var t=120-2*l-h.length-2,w="";for(M in i)if(i.hasOwnProperty(M)&&M!=="children"){var A=Si(i[M],15);if(t-=M.length+A.length+2,0>t){w+=" ...";break}w+=" "+M+"="+A}l=ge(l)+"<"+h+w+`>
`,o++}else r.serverProps===null?(l=Vw(h,i,Ci(o)),o++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=ym(h,i,r.serverProps,o),o++);var M="";i=r.fiber.child;for(h=0;i&&h<r.children.length;)t=r.children[h],t.fiber===i?(M+=_w(t,o),h++):M+=VP(i,o),i=i.sibling;i&&0<r.children.length&&(M+=ge(o)+`...
`),i=r.serverTail,r.serverProps===null&&o--;for(r=0;r<i.length;r++)h=i[r],M=typeof h==="string"?M+(B0(o)+l1(h,120-2*o)+`
`):M+Vw(h.type,h.props,B0(o));return g+l+M}function yw(r){try{return`

`+_w(r,0)}catch(o){return""}}function _P(r,o,g){for(var l=o,i=null,h=0;l;)l===r&&(h=0),i={fiber:l,children:i!==null?[i]:[],serverProps:l===o?g:l===r?null:void 0,serverTail:[],distanceFromLeaf:h},h++,l=l.return;return i!==null?yw(i).replaceAll(/^[+-]/gm,">"):""}function yP(r,o){var g=Er({},r||jA),l={tag:o};if(fA.indexOf(o)!==-1&&(g.aTagInScope=null,g.buttonTagInScope=null,g.nobrTagInScope=null),jX.indexOf(o)!==-1&&(g.pTagInButtonScope=null),fX.indexOf(o)!==-1&&o!=="address"&&o!=="div"&&o!=="p"&&(g.listItemTagAutoclosing=null,g.dlItemTagAutoclosing=null),g.current=l,o==="form"&&(g.formTag=l),o==="a"&&(g.aTagInScope=l),o==="button"&&(g.buttonTagInScope=l),o==="nobr"&&(g.nobrTagInScope=l),o==="p"&&(g.pTagInButtonScope=l),o==="li"&&(g.listItemTagAutoclosing=l),o==="dd"||o==="dt")g.dlItemTagAutoclosing=l;return o==="#document"||o==="html"?g.containerTagInScope=null:g.containerTagInScope||(g.containerTagInScope=l),r!==null||o!=="#document"&&o!=="html"&&o!=="body"?g.implicitRootScope===!0&&(g.implicitRootScope=!1):g.implicitRootScope=!0,g}function cP(r,o,g){switch(o){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(g)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!g)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o!=="h1"&&o!=="h2"&&o!=="h3"&&o!=="h4"&&o!=="h5"&&o!=="h6";case"rp":case"rt":return pX.indexOf(o)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return o==null;case"head":return g||o===null;case"html":return g&&o==="#document"||o===null;case"body":return g&&(o==="#document"||o==="html")||o===null}return!0}function cm(r,o){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o.pTagInButtonScope;case"form":return o.formTag||o.pTagInButtonScope;case"li":return o.listItemTagAutoclosing;case"dd":case"dt":return o.dlItemTagAutoclosing;case"button":return o.buttonTagInScope;case"a":return o.aTagInScope;case"nobr":return o.nobrTagInScope}return null}function EP(r,o){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===o)return r}r=r.return}return null}function cw(r,o){o=o||jA;var g=o.current;if(o=(g=cP(r,g&&g.tag,o.implicitRootScope)?null:g)?null:cm(r,o),o=g||o,!o)return!0;var l=o.tag;if(o=String(!!g)+"|"+r+"|"+l,lu[o])return!1;lu[o]=!0;var i=(o=ue)?EP(o.return,l):null,h=o!==null&&i!==null?_P(i,o,null):"",t="<"+r+">";return g?(g="",l==="table"&&r==="tr"&&(g+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,t,l,g,h)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,t,l,h),o&&(r=o.return,i===null||r===null||i===r&&r._debugOwner===o._debugOwner||nr(i,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,t)})),!1}function Eb(r,o,g){if(g||cP("#text",o,!1))return!0;if(g="#text|"+o,lu[g])return!1;lu[g]=!0;var l=(g=ue)?EP(g,o):null;return g=g!==null&&l!==null?_P(l,g,g.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,o,g):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,o,g),!1}function i1(r,o){if(o){var g=r.firstChild;if(g&&g===r.lastChild&&g.nodeType===3){g.nodeValue=o;return}}r.textContent=o}function Em(r){return r.replace(rY,function(o,g){return g.toUpperCase()})}function aP(r,o,g){var l=o.indexOf("--")===0;l||(-1<o.indexOf("-")?vh.hasOwnProperty(o)&&vh[o]||(vh[o]=!0,console.error("Unsupported style property %s. Did you mean %s?",o,Em(o.replace(sX,"ms-")))):dX.test(o)?vh.hasOwnProperty(o)&&vh[o]||(vh[o]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",o,o.charAt(0).toUpperCase()+o.slice(1))):!sA.test(g)||h4.hasOwnProperty(g)&&h4[g]||(h4[g]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,o,g.replace(sA,""))),typeof g==="number"&&(isNaN(g)?rq||(rq=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",o)):isFinite(g)||oq||(oq=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",o)))),g==null||typeof g==="boolean"||g===""?l?r.setProperty(o,""):o==="float"?r.cssFloat="":r[o]="":l?r.setProperty(o,g):typeof g!=="number"||g===0||gq.has(o)?o==="float"?r.cssFloat=g:(o1(g,o),r[o]=(""+g).trim()):r[o]=g+"px"}function fP(r,o,g){if(o!=null&&typeof o!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(o&&Object.freeze(o),r=r.style,g!=null){if(o){var l={};if(g){for(var i in g)if(g.hasOwnProperty(i)&&!o.hasOwnProperty(i))for(var h=i4[i]||[i],t=0;t<h.length;t++)l[h[t]]=i}for(var w in o)if(o.hasOwnProperty(w)&&(!g||g[w]!==o[w]))for(i=i4[w]||[w],h=0;h<i.length;h++)l[i[h]]=w;w={};for(var A in o)for(i=i4[A]||[A],h=0;h<i.length;h++)w[i[h]]=A;A={};for(var M in l)if(i=l[M],(h=w[M])&&i!==h&&(t=i+","+h,!A[t])){A[t]=!0,t=console;var K=o[i];t.error.call(t,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",K==null||typeof K==="boolean"||K===""?"Removing":"Updating",i,h)}}for(var $ in g)!g.hasOwnProperty($)||o!=null&&o.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var J in o)M=o[J],o.hasOwnProperty(J)&&g[J]!==M&&aP(r,J,M)}else for(l in o)o.hasOwnProperty(l)&&aP(r,l,o[l])}function h1(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function jP(r){return oY.get(r)||r}function am(r,o){if(Ve.call(hh,o)&&hh[o])return!0;if(eY.test(o)){if(r="aria-"+o.slice(4).toLowerCase(),r=eq.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",o),hh[o]=!0;if(o!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",o,r),hh[o]=!0}if(gY.test(o)){if(r=o.toLowerCase(),r=eq.hasOwnProperty(r)?r:null,r==null)return hh[o]=!0,!1;o!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",o,r),hh[o]=!0)}return!0}function fm(r,o){var g=[],l;for(l in o)am(r,l)||g.push(l);o=g.map(function(i){return"`"+i+"`"}).join(", "),g.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r):1<g.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r)}function jm(r,o,g,l){if(Ve.call(Ng,o)&&Ng[o])return!0;var i=o.toLowerCase();if(i==="onfocusin"||i==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Ng[o]=!0;if(typeof g==="function"&&(r==="form"&&o==="action"||r==="input"&&o==="formAction"||r==="button"&&o==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(o))return!0;if(l=r.hasOwnProperty(i)?r[i]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",o,l),Ng[o]=!0;if(vq.test(o))return console.error("Unknown event handler property `%s`. It will be ignored.",o),Ng[o]=!0}else if(vq.test(o))return lY.test(o)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",o),Ng[o]=!0;if(vY.test(o)||iY.test(o))return!0;if(i==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Ng[o]=!0;if(i==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Ng[o]=!0;if(i==="is"&&g!==null&&g!==void 0&&typeof g!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof g),Ng[o]=!0;if(typeof g==="number"&&isNaN(g))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",o),Ng[o]=!0;if(iu.hasOwnProperty(i)){if(i=iu[i],i!==o)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",o,i),Ng[o]=!0}else if(o!==i)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",o,i),Ng[o]=!0;switch(o){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof g){case"boolean":switch(o){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(i=o.toLowerCase().slice(0,5),i==="data-"||i==="aria-")return!0;return g?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',g,o,o,g,o):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',g,o,o,g,o,o,o),Ng[o]=!0}case"function":case"symbol":return Ng[o]=!0,!1;case"string":if(g==="false"||g==="true"){switch(o){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",g,o,g==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',o,g),Ng[o]=!0}}return!0}function pm(r,o,g){var l=[],i;for(i in o)jm(r,i,o[i],g)||l.push(i);o=l.map(function(h){return"`"+h+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r)}function n1(r){return hY.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function yl(){}function Ew(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function pP(r){var o=Fr(r);if(o&&(r=o.stateNode)){var g=r[xg]||null;r:switch(r=o.stateNode,o.type){case"input":if(Tw(r,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name),o=g.name,g.type==="radio"&&o!=null){for(g=r;g.parentNode;)g=g.parentNode;wo(o,"name"),g=g.querySelectorAll('input[name="'+Ye(""+o)+'"][type="radio"]');for(o=0;o<g.length;o++){var l=g[o];if(l!==r&&l.form===r.form){var i=l[xg]||null;if(!i)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Tw(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(o=0;o<g.length;o++)l=g[o],l.form===r.form&&IP(l)}break r;case"textarea":SP(r,g.value,g.defaultValue);break r;case"select":o=g.value,o!=null&&Zi(r,!!g.multiple,o,!1)}}}function dP(r,o,g){if(n4)return r(o,g);n4=!0;try{var l=r(o);return l}finally{if(n4=!1,nh!==null||bh!==null){if(fi(),nh&&(o=nh,r=bh,bh=nh=null,pP(o),r))for(o=0;o<r.length;o++)pP(r[o])}}}function b1(r,o){var g=r.stateNode;if(g===null)return null;var l=g[xg]||null;if(l===null)return null;g=l[o];r:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(g&&typeof g!=="function")throw Error("Expected `"+o+"` listener to be a function, instead got a value of `"+typeof g+"` type.");return g}function sP(){if(hu)return hu;var r,o=t4,g=o.length,l,i="value"in Ev?Ev.value:Ev.textContent,h=i.length;for(r=0;r<g&&o[r]===i[r];r++);var t=g-r;for(l=1;l<=t&&o[g-l]===i[h-l];l++);return hu=i.slice(r,1<l?1-l:void 0)}function ab(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function fb(){return!0}function r8(){return!1}function cg(r){function o(g,l,i,h,t){this._reactName=g,this._targetInst=i,this.type=l,this.nativeEvent=h,this.target=t,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(g=r[w],this[w]=g?g(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fb:r8,this.isPropagationStopped=r8,this}return Er(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var g=this.nativeEvent;g&&(g.preventDefault?g.preventDefault():typeof g.returnValue!=="unknown"&&(g.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var g=this.nativeEvent;g&&(g.stopPropagation?g.stopPropagation():typeof g.cancelBubble!=="unknown"&&(g.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){},isPersistent:fb}),o}function dm(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=WY[r])?!!o[r]:!1}function aw(){return dm}function o8(r,o){switch(r){case"keyup":return IY.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==bq;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g8(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function sm(r,o){switch(r){case"compositionend":return g8(o);case"keypress":if(o.which!==uq)return null;return Pq=!0,wq;case"textInput":return r=o.data,r===wq&&Pq?null:r;default:return null}}function rG(r,o){if(th)return r==="compositionend"||!O4&&o8(r,o)?(r=sP(),hu=t4=Ev=null,th=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return tq&&o.locale!=="ko"?null:o.data;default:return null}}function e8(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!xY[r.type]:o==="textarea"?!0:!1}function oG(r){if(!Kl)return!1;r="on"+r;var o=r in document;return o||(o=document.createElement("div"),o.setAttribute(r,"return;"),o=typeof o[r]==="function"),o}function l8(r,o,g,l){nh?bh?bh.push(l):bh=[l]:nh=l,o=kt(o,"onChange"),0<o.length&&(g=new nu("onChange","change",null,g,l),r.push({event:g,listeners:o}))}function gG(r){TH(r,0)}function jb(r){var o=xr(r);if(IP(o))return r}function v8(r,o){if(r==="change")return o}function i8(){a1&&(a1.detachEvent("onpropertychange",h8),f1=a1=null)}function h8(r){if(r.propertyName==="value"&&jb(f1)){var o=[];l8(o,f1,r,Ew(r)),dP(gG,o)}}function eG(r,o,g){r==="focusin"?(i8(),a1=o,f1=g,a1.attachEvent("onpropertychange",h8)):r==="focusout"&&i8()}function lG(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return jb(f1)}function vG(r,o){if(r==="click")return jb(o)}function iG(r,o){if(r==="input"||r==="change")return jb(o)}function hG(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}function t1(r,o){if(Bg(r,o))return!0;if(typeof r!=="object"||r===null||typeof o!=="object"||o===null)return!1;var g=Object.keys(r),l=Object.keys(o);if(g.length!==l.length)return!1;for(l=0;l<g.length;l++){var i=g[l];if(!Ve.call(o,i)||!Bg(r[i],o[i]))return!1}return!0}function n8(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function b8(r,o){var g=n8(r);r=0;for(var l;g;){if(g.nodeType===3){if(l=r+g.textContent.length,r<=o&&l>=o)return{node:g,offset:o-r};r=l}r:{for(;g;){if(g.nextSibling){g=g.nextSibling;break r}g=g.parentNode}g=void 0}g=n8(g)}}function t8(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?t8(r,o.parentNode):("contains"in r)?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function u8(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var o=yb(r.document);o instanceof r.HTMLIFrameElement;){try{var g=typeof o.contentWindow.location.href==="string"}catch(l){g=!1}if(g)r=o.contentWindow;else break;o=yb(r.document)}return o}function fw(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function w8(r,o,g){var l=g.window===g?g.document:g.nodeType===9?g:g.ownerDocument;A4||uh==null||uh!==yb(l)||(l=uh,("selectionStart"in l)&&fw(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),j1&&t1(j1,l)||(j1=l,l=kt(H4,"onSelect"),0<l.length&&(o=new nu("onSelect","select",null,o,g),r.push({event:o,listeners:l}),o.target=uh)))}function Z0(r,o){var g={};return g[r.toLowerCase()]=o.toLowerCase(),g["Webkit"+r]="webkit"+o,g["Moz"+r]="moz"+o,g}function C0(r){if(q4[r])return q4[r];if(!wh[r])return r;var o=wh[r],g;for(g in o)if(o.hasOwnProperty(g)&&g in Hq)return q4[r]=o[g];return r}function Te(r,o){Wq.set(r,o),Jg(o,[r])}function nG(r){for(var o=tu,g=0;g<r.length;g++){var l=r[g];if(typeof l==="object"&&l!==null)if(lg(l)&&l.length===2&&typeof l[0]==="string"){if(o!==tu&&o!==G4)return W4;o=G4}else return W4;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||o!==tu&&o!==m4)return W4;o=m4}}return o}function jw(r,o,g,l){for(var i in r)Ve.call(r,i)&&i[0]!=="_"&&hl(i,r[i],o,g,l)}function hl(r,o,g,l,i){switch(typeof o){case"object":if(o===null){o="null";break}else{if(o.$$typeof===Xl){var h=y(o.type)||"…",t=o.key;o=o.props;var w=Object.keys(o),A=w.length;if(t==null&&A===0){o="<"+h+" />";break}if(3>l||A===1&&w[0]==="children"&&t==null){o="<"+h+" … />";break}g.push([i+"  ".repeat(l)+r,"<"+h]),t!==null&&hl("key",t,g,l+1,i),r=!1;for(var M in o)M==="children"?o.children!=null&&(!lg(o.children)||0<o.children.length)&&(r=!0):Ve.call(o,M)&&M[0]!=="_"&&hl(M,o[M],g,l+1,i);g.push(["",r?">…</"+h+">":"/>"]);return}if(h=Object.prototype.toString.call(o),h=h.slice(8,h.length-1),h==="Array"){if(M=nG(o),M===m4||M===tu){o=JSON.stringify(o);break}else if(M===G4){g.push([i+"  ".repeat(l)+r,""]);for(r=0;r<o.length;r++)h=o[r],hl(h[0],h[1],g,l+1,i);return}}if(h==="Promise"){if(o.status==="fulfilled"){if(h=g.length,hl(r,o.value,g,l,i),g.length>h){g=g[h],g[1]="Promise<"+(g[1]||"Object")+">";return}}else if(o.status==="rejected"&&(h=g.length,hl(r,o.reason,g,l,i),g.length>h)){g=g[h],g[1]="Rejected Promise<"+g[1]+">";return}g.push(["  ".repeat(l)+r,"Promise"]);return}h==="Object"&&(M=Object.getPrototypeOf(o))&&typeof M.constructor==="function"&&(h=M.constructor.name),g.push([i+"  ".repeat(l)+r,h==="Object"?3>l?"":"…":h]),3>l&&jw(o,g,l+1,i);return}case"function":o=o.name===""?"() => {}":o.name+"() {}";break;case"string":o=o===kY?"…":JSON.stringify(o);break;case"undefined":o="undefined";break;case"boolean":o=o?"true":"false";break;default:o=String(o)}g.push([i+"  ".repeat(l)+r,o])}function P8(r,o,g,l){var i=!0;for(t in r)t in o||(g.push([uu+"  ".repeat(l)+t,"…"]),i=!1);for(var h in o)if(h in r){var t=r[h],w=o[h];if(t!==w){if(l===0&&h==="children")i="  ".repeat(l)+h,g.push([uu+i,"…"],[wu+i,"…"]);else{if(!(3<=l)){if(typeof t==="object"&&typeof w==="object"&&t!==null&&w!==null&&t.$$typeof===w.$$typeof)if(w.$$typeof===Xl){if(t.type===w.type&&t.key===w.key){t=y(w.type)||"…",i="  ".repeat(l)+h,t="<"+t+" … />",g.push([uu+i,t],[wu+i,t]),i=!1;continue}}else{var A=Object.prototype.toString.call(t),M=Object.prototype.toString.call(w);if(A===M&&(M==="[object Object]"||M==="[object Array]")){A=[Xq+"  ".repeat(l)+h,M==="[object Array]"?"Array":""],g.push(A),M=g.length,P8(t,w,g,l+1)?M===g.length&&(A[1]="Referentially unequal but deeply equal objects. Consider memoization."):i=!1;continue}}else if(typeof t==="function"&&typeof w==="function"&&t.name===w.name&&t.length===w.length&&(A=Function.prototype.toString.call(t),M=Function.prototype.toString.call(w),A===M)){t=w.name===""?"() => {}":w.name+"() {}",g.push([Xq+"  ".repeat(l)+h,t+" Referentially unequal function closure. Consider memoization."]);continue}}hl(h,t,g,l,uu),hl(h,w,g,l,wu)}i=!1}}else g.push([wu+"  ".repeat(l)+h,"…"]),i=!1;return i}function ee(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function nl(r,o,g,l){Jo&&(fv.start=o,fv.end=g,rv.color="warning",rv.tooltipText=l,rv.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,fv)):performance.measure(l,fv))}function pb(r,o,g){nl(r,o,g,"Reconnect")}function db(r,o,g,l,i){var h=C(r);if(h!==null&&Jo){var{alternate:t,actualDuration:w}=r;if(t===null||t.child!==r.child)for(var A=r.child;A!==null;A=A.sibling)w-=A.actualDuration;l=0.5>w?l?"tertiary-light":"primary-light":10>w?l?"tertiary":"primary":100>w?l?"tertiary-dark":"primary-dark":"error";var M=r.memoizedProps;w=r._debugTask,M!==null&&t!==null&&t.memoizedProps!==M?(A=[DY],M=P8(t.memoizedProps,M,A,0),1<A.length&&(M&&!av&&(t.lanes&i)===0&&100<r.actualDuration?(av=!0,A[0]=VY,rv.color="warning",rv.tooltipText=Yq):(rv.color=l,rv.tooltipText=h),rv.properties=A,fv.start=o,fv.end=g,w!=null?w.run(performance.measure.bind(performance,"​"+h,fv)):performance.measure("​"+h,fv))):w!=null?w.run(console.timeStamp.bind(console,h,o,g,Qe,void 0,l)):console.timeStamp(h,o,g,Qe,void 0,l)}}function pw(r,o,g,l){if(Jo){var i=C(r);if(i!==null){for(var h=null,t=[],w=0;w<l.length;w++){var A=l[w];h==null&&A.source!==null&&(h=A.source._debugTask),A=A.value,t.push(["Error",typeof A==="object"&&A!==null&&typeof A.message==="string"?String(A.message):String(A)])}r.key!==null&&hl("key",r.key,t,0,""),r.memoizedProps!==null&&jw(r.memoizedProps,t,0,""),h==null&&(h=r._debugTask),r={start:o,end:g,detail:{devtools:{color:"error",track:Qe,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:t}}},h?h.run(performance.measure.bind(performance,"​"+i,r)):performance.measure("​"+i,r)}}}function bl(r,o,g,l,i){if(i!==null){if(Jo){var h=C(r);if(h!==null){l=[];for(var t=0;t<i.length;t++){var w=i[t].value;l.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r.key!==null&&hl("key",r.key,l,0,""),r.memoizedProps!==null&&jw(r.memoizedProps,l,0,""),o={start:o,end:g,detail:{devtools:{color:"error",track:Qe,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+h,o)):performance.measure("​"+h,o)}}}else h=C(r),h!==null&&Jo&&(i=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,h,o,g,Qe,void 0,i)):console.timeStamp(h,o,g,Qe,void 0,i))}function bG(r,o,g,l){if(Jo&&!(o<=r)){var i=(g&738197653)===g?"tertiary-dark":"primary-dark";g=(g&536870912)===g?"Prepared":(g&201326741)===g?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,g,r,o,fr,ar,i)):console.timeStamp(g,r,o,fr,ar,i)}}function O8(r,o,g,l){!Jo||o<=r||(g=(g&738197653)===g?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,o,fr,ar,g)):console.timeStamp("Prewarm",r,o,fr,ar,g))}function H8(r,o,g,l){!Jo||o<=r||(g=(g&738197653)===g?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,o,fr,ar,g)):console.timeStamp("Suspended",r,o,fr,ar,g))}function tG(r,o,g,l,i,h){if(Jo&&!(o<=r)){g=[];for(var t=0;t<l.length;t++){var w=l[t].value;g.push(["Recoverable Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:ar,tooltipText:i?"Hydration Failed":"Recovered after Error",properties:g}}},h?h.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function dw(r,o,g,l){!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,o,fr,ar,"error")):console.timeStamp("Errored",r,o,fr,ar,"error"))}function uG(r,o,g,l){!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,g,r,o,fr,ar,"secondary-light")):console.timeStamp(g,r,o,fr,ar,"secondary-light"))}function A8(r,o,g,l,i){if(Jo&&!(o<=r)){for(var h=[],t=0;t<g.length;t++){var w=g[t].value;h.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"error",track:fr,trackGroup:ar,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:h}}},i?i.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function u1(r,o,g){!Jo||o<=r||(g?g.run(console.timeStamp.bind(console,"Animating",r,o,fr,ar,"secondary-dark")):console.timeStamp("Animating",r,o,fr,ar,"secondary-dark"))}function sb(){for(var r=Ph,o=X4=Ph=0;o<r;){var g=ze[o];ze[o++]=null;var l=ze[o];ze[o++]=null;var i=ze[o];ze[o++]=null;var h=ze[o];if(ze[o++]=null,l!==null&&i!==null){var t=l.pending;t===null?i.next=i:(i.next=t.next,t.next=i),l.pending=i}h!==0&&q8(g,i,h)}}function rt(r,o,g,l){ze[Ph++]=r,ze[Ph++]=o,ze[Ph++]=g,ze[Ph++]=l,X4|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function sw(r,o,g,l){return rt(r,o,g,l),ot(r)}function Qg(r,o){return rt(r,null,null,o),ot(r)}function q8(r,o,g){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g);for(var i=!1,h=r.return;h!==null;)h.childLanes|=g,l=h.alternate,l!==null&&(l.childLanes|=g),h.tag===22&&(r=h.stateNode,r===null||r._visibility&p1||(i=!0)),r=h,h=h.return;return r.tag===3?(h=r.stateNode,i&&o!==null&&(i=31-Fg(g),r=h.hiddenUpdates,l=r[i],l===null?r[i]=[o]:l.push(o),o.lane=g|536870912),h):null}function ot(r){if(Jn>lJ)throw Pi=Jn=0,Qn=g6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Pi>vJ&&(Pi=0,Qn=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&FH(r);for(var o=r,g=o.return;g!==null;)o.alternate===null&&(o.flags&4098)!==0&&FH(r),o=g,g=o.return;return o.tag===3?o.stateNode:null}function S0(r){if(Ue===null)return r;var o=Ue(r);return o===void 0?r:o.current}function r5(r){if(Ue===null)return r;var o=Ue(r);return o===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(o=S0(r.render),r.render!==o)?(o={$$typeof:S1,render:o},r.displayName!==void 0&&(o.displayName=r.displayName),o):r:o.current}function M8(r,o){if(Ue===null)return!1;var g=r.elementType;o=o.type;var l=!1,i=typeof o==="object"&&o!==null?o.$$typeof:null;switch(r.tag){case 1:typeof o==="function"&&(l=!0);break;case 0:typeof o==="function"?l=!0:i===te&&(l=!0);break;case 11:i===S1?l=!0:i===te&&(l=!0);break;case 14:case 15:i===dt?l=!0:i===te&&(l=!0);break;default:return!1}return l&&(r=Ue(g),r!==void 0&&r===Ue(o))?!0:!1}function R8(r){Ue!==null&&typeof WeakSet==="function"&&(Oh===null&&(Oh=new WeakSet),Oh.add(r))}function W8(r,o,g){do{var l=r,i=l.alternate,h=l.child,t=l.sibling,w=l.tag;l=l.type;var A=null;switch(w){case 0:case 15:case 1:A=l;break;case 11:A=l.render}if(Ue===null)throw Error("Expected resolveFamily to be set during hot reload.");var M=!1;if(l=!1,A!==null&&(A=Ue(A),A!==void 0&&(g.has(A)?l=!0:o.has(A)&&(w===1?l=!0:M=!0))),Oh!==null&&(Oh.has(r)||i!==null&&Oh.has(i))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||M)i=Qg(r,2),i!==null&&No(i,r,2);if(h===null||l||W8(h,o,g),t===null)break;r=t}while(1)}function wG(r,o,g,l){this.tag=r,this.key=g,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Jq||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function o5(r){return r=r.prototype,!(!r||!r.isReactComponent)}function cl(r,o){var g=r.alternate;switch(g===null?(g=X(r.tag,o,r.key,r.mode),g.elementType=r.elementType,g.type=r.type,g.stateNode=r.stateNode,g._debugOwner=r._debugOwner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g._debugHookTypes=r._debugHookTypes,g.alternate=r,r.alternate=g):(g.pendingProps=o,g.type=r.type,g.flags=0,g.subtreeFlags=0,g.deletions=null,g.actualDuration=-0,g.actualStartTime=-1.1),g.flags=r.flags&65011712,g.childLanes=r.childLanes,g.lanes=r.lanes,g.child=r.child,g.memoizedProps=r.memoizedProps,g.memoizedState=r.memoizedState,g.updateQueue=r.updateQueue,o=r.dependencies,g.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},g.sibling=r.sibling,g.index=r.index,g.ref=r.ref,g.refCleanup=r.refCleanup,g.selfBaseDuration=r.selfBaseDuration,g.treeBaseDuration=r.treeBaseDuration,g._debugInfo=r._debugInfo,g._debugNeedsRemount=r._debugNeedsRemount,g.tag){case 0:case 15:g.type=S0(r.type);break;case 1:g.type=S0(r.type);break;case 11:g.type=r5(r.type)}return g}function m8(r,o){r.flags&=65011714;var g=r.alternate;return g===null?(r.childLanes=0,r.lanes=o,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=g.childLanes,r.lanes=g.lanes,r.child=g.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=g.memoizedProps,r.memoizedState=g.memoizedState,r.updateQueue=g.updateQueue,r.type=g.type,o=g.dependencies,r.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},r.selfBaseDuration=g.selfBaseDuration,r.treeBaseDuration=g.treeBaseDuration),r}function g5(r,o,g,l,i,h){var t=0,w=r;if(typeof r==="function")o5(r)&&(t=1),w=S0(w);else if(typeof r==="string")t=vr(),t=mX(r,g,t)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case a2:return o=X(31,g,o,i),o.elementType=a2,o.lanes=h,o;case gh:return T0(g.children,i,h,o);case pt:t=8,i|=Ug,i|=ye;break;case _2:return r=g,l=i,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),o=X(12,r,o,l|kr),o.elementType=_2,o.lanes=h,o.stateNode={effectDuration:0,passiveEffectDuration:0},o;case c2:return o=X(13,g,o,i),o.elementType=c2,o.lanes=h,o;case E2:return o=X(19,g,o,i),o.elementType=E2,o.lanes=h,o;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Yl:t=10;break r;case y2:t=9;break r;case S1:t=11,w=r5(w);break r;case dt:t=14;break r;case te:t=16,w=null;break r}if(w="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?g="null":lg(r)?g="array":r!==void 0&&r.$$typeof===Xl?(g="<"+(y(r.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):g=typeof r,(t=l?f(l):null)&&(w+=`

Check the render method of \``+t+"`."),t=29,g=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(g+"."+w)),w=null}return o=X(t,g,o,i),o.elementType=r,o.type=w,o.lanes=h,o._debugOwner=l,o}function gt(r,o,g){return o=g5(r.type,r.key,r.props,r._owner,o,g),o._debugOwner=r._owner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o}function T0(r,o,g,l){return r=X(7,r,l,o),r.lanes=g,r}function e5(r,o,g){return r=X(6,r,null,o),r.lanes=g,r}function G8(r){var o=X(18,null,null,Ur);return o.stateNode=r,o}function l5(r,o,g){return o=X(4,r.children!==null?r.children:[],r.key,o),o.lanes=g,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function le(r,o){if(typeof r==="object"&&r!==null){var g=Y4.get(r);if(g!==void 0)return g;return o={value:r,source:o,stack:Cr(o)},Y4.set(r,o),o}return{value:r,source:o,stack:Cr(o)}}function El(r,o){Lv(),Hh[Ah++]=d1,Hh[Ah++]=Pu,Pu=r,d1=o}function X8(r,o,g){Lv(),Ke[$e++]=gv,Ke[$e++]=ev,Ke[$e++]=s0,s0=r;var l=gv;r=ev;var i=32-Fg(l)-1;l&=~(1<<i),g+=1;var h=32-Fg(o)+i;if(30<h){var t=i-i%5;h=(l&(1<<t)-1).toString(32),l>>=t,i-=t,gv=1<<32-Fg(o)+i|g<<i|l,ev=h+r}else gv=1<<h|g<<i|l,ev=r}function v5(r){Lv(),r.return!==null&&(El(r,1),X8(r,1,0))}function i5(r){for(;r===Pu;)Pu=Hh[--Ah],Hh[Ah]=null,d1=Hh[--Ah],Hh[Ah]=null;for(;r===s0;)s0=Ke[--$e],Ke[$e]=null,ev=Ke[--$e],Ke[$e]=null,gv=Ke[--$e],Ke[$e]=null}function Y8(){return Lv(),s0!==null?{id:gv,overflow:ev}:null}function J8(r,o){Lv(),Ke[$e++]=gv,Ke[$e++]=ev,Ke[$e++]=s0,gv=o.id,ev=o.overflow,s0=r}function Lv(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k0(r,o){if(r.return===null){if(Pe===null)Pe={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o};else{if(Pe.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Pe.distanceFromLeaf>o&&(Pe.distanceFromLeaf=o)}return Pe}var g=k0(r.return,o+1).children;if(0<g.length&&g[g.length-1].fiber===r)return g=g[g.length-1],g.distanceFromLeaf>o&&(g.distanceFromLeaf=o),g;return o={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o},g.push(o),o}function Q8(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function et(r,o){$l||(r=k0(r,0),r.serverProps=null,o!==null&&(o=lA(o),r.serverTail.push(o)))}function Iv(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,g="",l=Pe;throw l!==null&&(Pe=null,g=yw(l)),w1(le(Error("Hydration failed because the server rendered "+(o?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+g),r)),J4}function z8(r){var{stateNode:o,type:g,memoizedProps:l}=r;switch(o[Mg]=r,o[xg]=l,Q2(g,l),g){case"dialog":dr("cancel",o),dr("close",o);break;case"iframe":case"object":case"embed":dr("load",o);break;case"video":case"audio":for(g=0;g<zn.length;g++)dr(zn[g],o);break;case"source":dr("error",o);break;case"img":case"image":case"link":dr("error",o),dr("load",o);break;case"details":dr("toggle",o);break;case"input":$v("input",l),dr("invalid",o),FP(o,l),xP(o,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":NP(o,l);break;case"select":$v("select",l),dr("invalid",o),ZP(o,l);break;case"textarea":$v("textarea",l),dr("invalid",o),CP(o,l),TP(o,l.value,l.defaultValue,l.children)}g=l.children,typeof g!=="string"&&typeof g!=="number"&&typeof g!=="bigint"||o.textContent===""+g||l.suppressHydrationWarning===!0||_H(o.textContent,g)?(l.popover!=null&&(dr("beforetoggle",o),dr("toggle",o)),l.onScroll!=null&&dr("scroll",o),l.onScrollEnd!=null&&dr("scrollend",o),l.onClick!=null&&(o.onclick=yl),o=!0):o=!1,o||Iv(r,!0)}function U8(r){for(Rg=r.return;Rg;)switch(Rg.tag){case 5:case 31:case 13:Le=!1;return;case 27:case 3:Le=!0;return;default:Rg=Rg.return}}function Ti(r){if(r!==Rg)return!1;if(!pr)return U8(r),pr=!0,!1;var o=r.tag,g;if(g=o!==3&&o!==27){if(g=o===5)g=r.type,g=!(g!=="form"&&g!=="button")||L2(r.type,r.memoizedProps);g=!g}if(g&&Qo){for(g=Qo;g;){var l=k0(r,0),i=lA(g);l.serverTail.push(i),g=i.type==="Suspense"?N2(g):be(g.nextSibling)}Iv(r)}if(U8(r),o===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=N2(r)}else if(o===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=N2(r)}else o===27?(o=Qo,Dv(r.type)?(r=O6,O6=null,Qo=r):Qo=o):Qo=Rg?be(r.stateNode.nextSibling):null;return!0}function D0(){Qo=Rg=null,$l=pr=!1}function h5(){var r=pv;return r!==null&&(Tg===null?Tg=r:Tg.push.apply(Tg,r),pv=null),r}function w1(r){pv===null?pv=[r]:pv.push(r)}function n5(){var r=Pe;if(r!==null){Pe=null;for(var o=yw(r);0<r.children.length;)r=r.children[0];nr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",o)})}}function lt(){qh=Ou=null,Mh=!1}function Fv(r,o,g){mr(Q4,o._currentValue,r),o._currentValue=g,mr(z4,o._currentRenderer,r),o._currentRenderer!==void 0&&o._currentRenderer!==null&&o._currentRenderer!==zq&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),o._currentRenderer=zq}function al(r,o){r._currentValue=Q4.current;var g=z4.current;Ar(z4,o),r._currentRenderer=g,Ar(Q4,o)}function b5(r,o,g){for(;r!==null;){var l=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),r===g)break;r=r.return}r!==g&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function t5(r,o,g,l){var i=r.child;i!==null&&(i.return=r);for(;i!==null;){var h=i.dependencies;if(h!==null){var t=i.child;h=h.firstContext;r:for(;h!==null;){var w=h;h=i;for(var A=0;A<o.length;A++)if(w.context===o[A]){h.lanes|=g,w=h.alternate,w!==null&&(w.lanes|=g),b5(h.return,g,r),l||(t=null);break r}h=w.next}}else if(i.tag===18){if(t=i.return,t===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");t.lanes|=g,h=t.alternate,h!==null&&(h.lanes|=g),b5(t,g,r),t=null}else t=i.child;if(t!==null)t.return=i;else for(t=i;t!==null;){if(t===r){t=null;break}if(i=t.sibling,i!==null){i.return=t.return,t=i;break}t=t.return}i=t}}function ki(r,o,g,l){r=null;for(var i=o,h=!1;i!==null;){if(!h){if((i.flags&524288)!==0)h=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var t=i.alternate;if(t===null)throw Error("Should have a current fiber. This is a bug in React.");if(t=t.memoizedProps,t!==null){var w=i.type;Bg(i.pendingProps.value,t.value)||(r!==null?r.push(w):r=[w])}}else if(i===st.current){if(t=i.alternate,t===null)throw Error("Should have a current fiber. This is a bug in React.");t.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(r!==null?r.push(In):r=[In])}i=i.return}r!==null&&t5(o,r,g,l),o.flags|=262144}function vt(r){for(r=r.firstContext;r!==null;){if(!Bg(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V0(r){Ou=r,qh=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Ko(r){return Mh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),K8(Ou,r)}function it(r,o){return Ou===null&&V0(r),K8(r,o)}function K8(r,o){var g=o._currentValue;if(o={context:o,memoizedValue:g,next:null},qh===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");qh=o,r.dependencies={lanes:0,firstContext:o,_debugThenableState:null},r.flags|=524288}else qh=qh.next=o;return g}function u5(){return{controller:new cY,data:new Map,refCount:0}}function _0(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function P1(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&EY(aY,function(){r.controller.abort()})}function tl(r,o,g){if((r&127)!==0)0>Ll&&(Ll=jo(),rn=Hu(o),U4=o,g!=null&&(K4=C(g)),(go&(ig|Ae))!==ug&&(Bo=!0,r0=s1),r=x1(),o=F1(),r!==Rh||o!==on?Rh=-1.1:o!==null&&(r0=s1),oi=r,on=o);else if((r&4194048)!==0&&0>Ie&&(Ie=jo(),gn=Hu(o),Uq=o,g!=null&&(Kq=C(g)),0>iv)){if(r=x1(),o=F1(),r!==g0||o!==gi)g0=-1.1;o0=r,gi=o}}function PG(r){if(0>Ll){Ll=jo(),rn=r._debugTask!=null?r._debugTask:null,(go&(ig|Ae))!==ug&&(r0=s1);var o=x1(),g=F1();o!==Rh||g!==on?Rh=-1.1:g!==null&&(r0=s1),oi=o,on=g}if(0>Ie&&(Ie=jo(),gn=r._debugTask!=null?r._debugTask:null,0>iv)){if(r=x1(),o=F1(),r!==g0||o!==gi)g0=-1.1;o0=r,gi=o}}function fl(){var r=ri;return ri=0,r}function ht(r){var o=ri;return ri=r,o}function O1(r){var o=ri;return ri+=r,o}function nt(){zr=Jr=-1.1}function ve(){var r=Jr;return Jr=-1.1,r}function ie(r){0<=r&&(Jr=r)}function ul(){var r=Io;return Io=-0,r}function wl(r){0<=r&&(Io=r)}function Pl(){var r=$o;return $o=null,r}function Ol(){var r=Bo;return Bo=!1,r}function w5(r){Zg=jo(),0>r.actualStartTime&&(r.actualStartTime=Zg)}function P5(r){if(0<=Zg){var o=jo()-Zg;r.actualDuration+=o,r.selfBaseDuration=o,Zg=-1}}function $8(r){if(0<=Zg){var o=jo()-Zg;r.actualDuration+=o,Zg=-1}}function Hl(){if(0<=Zg){var r=jo(),o=r-Zg;Zg=-1,ri+=o,Io+=o,zr=r}}function L8(r){$o===null&&($o=[]),$o.push(r),vv===null&&(vv=[]),vv.push(r)}function Al(){Zg=jo(),0>Jr&&(Jr=Zg)}function H1(r){for(var o=r.child;o;)r.actualDuration+=o.actualDuration,o=o.sibling}function OG(r,o){if(ln===null){var g=ln=[];L4=0,ei=G2(),Wh={status:"pending",value:void 0,then:function(l){g.push(l)}}}return L4++,o.then(I8,I8),o}function I8(){if(--L4===0&&(-1<Ie||(iv=-1.1),ln!==null)){Wh!==null&&(Wh.status="fulfilled");var r=ln;ln=null,ei=0,Wh=null;for(var o=0;o<r.length;o++)(0,r[o])()}}function HG(r,o){var g=[],l={status:"pending",value:null,reason:null,then:function(i){g.push(i)}};return r.then(function(){l.status="fulfilled",l.value=o;for(var i=0;i<g.length;i++)(0,g[i])(o)},function(i){l.status="rejected",l.reason=i;for(i=0;i<g.length;i++)(0,g[i])(void 0)}),l}function O5(){var r=li.current;return r!==null?r:Mo.pooledCache}function bt(r,o){o===null?mr(li,li.current,r):mr(li,o.pool,r)}function F8(){var r=O5();return r===null?null:{parent:fo._currentValue,pool:r}}function x8(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function N8(r){return r=r.status,r==="fulfilled"||r==="rejected"}function B8(r,o,g){S.actQueue!==null&&(S.didUsePromise=!0);var l=r.thenables;if(g=l[g],g===void 0?l.push(o):g!==o&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),o.then(yl,yl),o=g),o._debugInfo===void 0){r=performance.now(),l=o.displayName;var i={name:typeof l==="string"?l:"Promise",start:r,end:r,value:o};o._debugInfo=[{awaited:i}],o.status!=="fulfilled"&&o.status!=="rejected"&&(r=function(){i.end=performance.now()},o.then(r,r))}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,C8(r),r;default:if(typeof o.status==="string")o.then(yl,yl);else{if(r=Mo,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=o,r.status="pending",r.then(function(h){if(o.status==="pending"){var t=o;t.status="fulfilled",t.value=h}},function(h){if(o.status==="pending"){var t=o;t.status="rejected",t.reason=h}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,C8(r),r}throw ii=o,wn=!0,mh}}function xv(r){try{return dY(r)}catch(o){if(o!==null&&typeof o==="object"&&typeof o.then==="function")throw ii=o,wn=!0,mh;throw o}}function Z8(){if(ii===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=ii;return ii=null,wn=!1,r}function C8(r){if(r===mh||r===Xu)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Hg(r){var o=Dr;return r!=null&&(Dr=o===null?r:o.concat(r)),o}function H5(){var r=Dr;if(r!=null){for(var o=r.length-1;0<=o;o--)if(r[o].name!=null){var g=r[o].debugTask;if(g!=null)return g}}return null}function tt(r,o,g){for(var l=Object.keys(r.props),i=0;i<l.length;i++){var h=l[i];if(h!=="children"&&h!=="key"){o===null&&(o=gt(r,g.mode,0),o._debugInfo=Dr,o.return=g),nr(o,function(t){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t)},h);break}}}function ut(r){var o=Pn;return Pn+=1,Gh===null&&(Gh=x8()),B8(Gh,r,o)}function A1(r,o){o=o.props.ref,r.ref=o!==void 0?o:null}function S8(r,o){if(o.$$typeof===LX)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(o),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function wt(r,o){var g=H5();g!==null?g.run(S8.bind(null,r,o)):S8(r,o)}function T8(r,o){var g=C(r)||"Component";fq[g]||(fq[g]=!0,o=o.displayName||o.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,o,o,o):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,o,o,g,o,g))}function Pt(r,o){var g=H5();g!==null?g.run(T8.bind(null,r,o)):T8(r,o)}function k8(r,o){var g=C(r)||"Component";jq[g]||(jq[g]=!0,o=String(o),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,o):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,g,o,g))}function Ot(r,o){var g=H5();g!==null?g.run(k8.bind(null,r,o)):k8(r,o)}function D8(r){function o(Y,Q){if(r){var U=Y.deletions;U===null?(Y.deletions=[Q],Y.flags|=16):U.push(Q)}}function g(Y,Q){if(!r)return null;for(;Q!==null;)o(Y,Q),Q=Q.sibling;return null}function l(Y){for(var Q=new Map;Y!==null;)Y.key!==null?Q.set(Y.key,Y):Q.set(Y.index,Y),Y=Y.sibling;return Q}function i(Y,Q){return Y=cl(Y,Q),Y.index=0,Y.sibling=null,Y}function h(Y,Q,U){if(Y.index=U,!r)return Y.flags|=1048576,Q;if(U=Y.alternate,U!==null)return U=U.index,U<Q?(Y.flags|=67108866,Q):U;return Y.flags|=67108866,Q}function t(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,Q,U,D){if(Q===null||Q.tag!==6)return Q=e5(U,Y.mode,D),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=i(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function A(Y,Q,U,D){var tr=U.type;if(tr===gh)return Q=K(Y,Q,U.props.children,D,U.key),tt(U,Q,Y),Q;if(Q!==null&&(Q.elementType===tr||M8(Q,U)||typeof tr==="object"&&tr!==null&&tr.$$typeof===te&&xv(tr)===Q.type))return Q=i(Q,U.props),A1(Q,U),Q.return=Y,Q._debugOwner=U._owner,Q._debugInfo=Dr,Q;return Q=gt(U,Y.mode,D),A1(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function M(Y,Q,U,D){if(Q===null||Q.tag!==4||Q.stateNode.containerInfo!==U.containerInfo||Q.stateNode.implementation!==U.implementation)return Q=l5(U,Y.mode,D),Q.return=Y,Q._debugInfo=Dr,Q;return Q=i(Q,U.children||[]),Q.return=Y,Q._debugInfo=Dr,Q}function K(Y,Q,U,D,tr){if(Q===null||Q.tag!==7)return Q=T0(U,Y.mode,D,tr),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=i(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function $(Y,Q,U){if(typeof Q==="string"&&Q!==""||typeof Q==="number"||typeof Q==="bigint")return Q=e5(""+Q,Y.mode,U),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;if(typeof Q==="object"&&Q!==null){switch(Q.$$typeof){case Xl:return U=gt(Q,Y.mode,U),A1(U,Q),U.return=Y,Y=Hg(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;case oh:return Q=l5(Q,Y.mode,U),Q.return=Y,Q._debugInfo=Dr,Q;case te:var D=Hg(Q._debugInfo);return Q=xv(Q),Y=$(Y,Q,U),Dr=D,Y}if(lg(Q)||N(Q))return U=T0(Q,Y.mode,U,null),U.return=Y,U._debugOwner=Y,U._debugTask=Y._debugTask,Y=Hg(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;if(typeof Q.then==="function")return D=Hg(Q._debugInfo),Y=$(Y,ut(Q),U),Dr=D,Y;if(Q.$$typeof===Yl)return $(Y,it(Y,Q),U);wt(Y,Q)}return typeof Q==="function"&&Pt(Y,Q),typeof Q==="symbol"&&Ot(Y,Q),null}function J(Y,Q,U,D){var tr=Q!==null?Q.key:null;if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return tr!==null?null:w(Y,Q,""+U,D);if(typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:return U.key===tr?(tr=Hg(U._debugInfo),Y=A(Y,Q,U,D),Dr=tr,Y):null;case oh:return U.key===tr?M(Y,Q,U,D):null;case te:return tr=Hg(U._debugInfo),U=xv(U),Y=J(Y,Q,U,D),Dr=tr,Y}if(lg(U)||N(U)){if(tr!==null)return null;return tr=Hg(U._debugInfo),Y=K(Y,Q,U,D,null),Dr=tr,Y}if(typeof U.then==="function")return tr=Hg(U._debugInfo),Y=J(Y,Q,ut(U),D),Dr=tr,Y;if(U.$$typeof===Yl)return J(Y,Q,it(Y,U),D);wt(Y,U)}return typeof U==="function"&&Pt(Y,U),typeof U==="symbol"&&Ot(Y,U),null}function x(Y,Q,U,D,tr){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return Y=Y.get(U)||null,w(Q,Y,""+D,tr);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Xl:return U=Y.get(D.key===null?U:D.key)||null,Y=Hg(D._debugInfo),Q=A(Q,U,D,tr),Dr=Y,Q;case oh:return Y=Y.get(D.key===null?U:D.key)||null,M(Q,Y,D,tr);case te:var $r=Hg(D._debugInfo);return D=xv(D),Q=x(Y,Q,U,D,tr),Dr=$r,Q}if(lg(D)||N(D))return U=Y.get(U)||null,Y=Hg(D._debugInfo),Q=K(Q,U,D,tr,null),Dr=Y,Q;if(typeof D.then==="function")return $r=Hg(D._debugInfo),Q=x(Y,Q,U,ut(D),tr),Dr=$r,Q;if(D.$$typeof===Yl)return x(Y,Q,U,it(Q,D),tr);wt(Q,D)}return typeof D==="function"&&Pt(Q,D),typeof D==="symbol"&&Ot(Q,D),null}function ir(Y,Q,U,D){if(typeof U!=="object"||U===null)return D;switch(U.$$typeof){case Xl:case oh:m(Y,Q,U);var tr=U.key;if(typeof tr!=="string")break;if(D===null){D=new Set,D.add(tr);break}if(!D.has(tr)){D.add(tr);break}nr(Q,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",tr)});break;case te:U=xv(U),ir(Y,Q,U,D)}return D}function Pr(Y,Q,U,D){for(var tr=null,$r=null,Xr=null,Wr=Q,Sr=Q=0,zo=null;Wr!==null&&Sr<U.length;Sr++){Wr.index>Sr?(zo=Wr,Wr=null):zo=Wr.sibling;var _o=J(Y,Wr,U[Sr],D);if(_o===null){Wr===null&&(Wr=zo);break}tr=ir(Y,_o,U[Sr],tr),r&&Wr&&_o.alternate===null&&o(Y,Wr),Q=h(_o,Q,Sr),Xr===null?$r=_o:Xr.sibling=_o,Xr=_o,Wr=zo}if(Sr===U.length)return g(Y,Wr),pr&&El(Y,Sr),$r;if(Wr===null){for(;Sr<U.length;Sr++)Wr=$(Y,U[Sr],D),Wr!==null&&(tr=ir(Y,Wr,U[Sr],tr),Q=h(Wr,Q,Sr),Xr===null?$r=Wr:Xr.sibling=Wr,Xr=Wr);return pr&&El(Y,Sr),$r}for(Wr=l(Wr);Sr<U.length;Sr++)zo=x(Wr,Y,Sr,U[Sr],D),zo!==null&&(tr=ir(Y,zo,U[Sr],tr),r&&zo.alternate!==null&&Wr.delete(zo.key===null?Sr:zo.key),Q=h(zo,Q,Sr),Xr===null?$r=zo:Xr.sibling=zo,Xr=zo);return r&&Wr.forEach(function(Hv){return o(Y,Hv)}),pr&&El(Y,Sr),$r}function Go(Y,Q,U,D){if(U==null)throw Error("An iterable object provided no iterator.");for(var tr=null,$r=null,Xr=Q,Wr=Q=0,Sr=null,zo=null,_o=U.next();Xr!==null&&!_o.done;Wr++,_o=U.next()){Xr.index>Wr?(Sr=Xr,Xr=null):Sr=Xr.sibling;var Hv=J(Y,Xr,_o.value,D);if(Hv===null){Xr===null&&(Xr=Sr);break}zo=ir(Y,Hv,_o.value,zo),r&&Xr&&Hv.alternate===null&&o(Y,Xr),Q=h(Hv,Q,Wr),$r===null?tr=Hv:$r.sibling=Hv,$r=Hv,Xr=Sr}if(_o.done)return g(Y,Xr),pr&&El(Y,Wr),tr;if(Xr===null){for(;!_o.done;Wr++,_o=U.next())Xr=$(Y,_o.value,D),Xr!==null&&(zo=ir(Y,Xr,_o.value,zo),Q=h(Xr,Q,Wr),$r===null?tr=Xr:$r.sibling=Xr,$r=Xr);return pr&&El(Y,Wr),tr}for(Xr=l(Xr);!_o.done;Wr++,_o=U.next())Sr=x(Xr,Y,Wr,_o.value,D),Sr!==null&&(zo=ir(Y,Sr,_o.value,zo),r&&Sr.alternate!==null&&Xr.delete(Sr.key===null?Wr:Sr.key),Q=h(Sr,Q,Wr),$r===null?tr=Sr:$r.sibling=Sr,$r=Sr);return r&&Xr.forEach(function(GJ){return o(Y,GJ)}),pr&&El(Y,Wr),tr}function sr(Y,Q,U,D){if(typeof U==="object"&&U!==null&&U.type===gh&&U.key===null&&(tt(U,null,Y),U=U.props.children),typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:var tr=Hg(U._debugInfo);r:{for(var $r=U.key;Q!==null;){if(Q.key===$r){if($r=U.type,$r===gh){if(Q.tag===7){g(Y,Q.sibling),D=i(Q,U.props.children),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,tt(U,D,Y),Y=D;break r}}else if(Q.elementType===$r||M8(Q,U)||typeof $r==="object"&&$r!==null&&$r.$$typeof===te&&xv($r)===Q.type){g(Y,Q.sibling),D=i(Q,U.props),A1(D,U),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,Y=D;break r}g(Y,Q);break}else o(Y,Q);Q=Q.sibling}U.type===gh?(D=T0(U.props.children,Y.mode,D,U.key),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,tt(U,D,Y),Y=D):(D=gt(U,Y.mode,D),A1(D,U),D.return=Y,D._debugInfo=Dr,Y=D)}return Y=t(Y),Dr=tr,Y;case oh:r:{tr=U;for(U=tr.key;Q!==null;){if(Q.key===U)if(Q.tag===4&&Q.stateNode.containerInfo===tr.containerInfo&&Q.stateNode.implementation===tr.implementation){g(Y,Q.sibling),D=i(Q,tr.children||[]),D.return=Y,Y=D;break r}else{g(Y,Q);break}else o(Y,Q);Q=Q.sibling}D=l5(tr,Y.mode,D),D.return=Y,Y=D}return t(Y);case te:return tr=Hg(U._debugInfo),U=xv(U),Y=sr(Y,Q,U,D),Dr=tr,Y}if(lg(U))return tr=Hg(U._debugInfo),Y=Pr(Y,Q,U,D),Dr=tr,Y;if(N(U)){if(tr=Hg(U._debugInfo),$r=N(U),typeof $r!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Xr=$r.call(U);if(Xr===U){if(Y.tag!==0||Object.prototype.toString.call(Y.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Xr)!=="[object Generator]")Eq||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),Eq=!0}else U.entries!==$r||N4||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N4=!0);return Y=Go(Y,Q,Xr,D),Dr=tr,Y}if(typeof U.then==="function")return tr=Hg(U._debugInfo),Y=sr(Y,Q,ut(U),D),Dr=tr,Y;if(U.$$typeof===Yl)return sr(Y,Q,it(Y,U),D);wt(Y,U)}if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return tr=""+U,Q!==null&&Q.tag===6?(g(Y,Q.sibling),D=i(Q,tr),D.return=Y,Y=D):(g(Y,Q),D=e5(tr,Y.mode,D),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,Y=D),t(Y);return typeof U==="function"&&Pt(Y,U),typeof U==="symbol"&&Ot(Y,U),g(Y,Q)}return function(Y,Q,U,D){var tr=Dr;Dr=null;try{Pn=0;var $r=sr(Y,Q,U,D);return Gh=null,$r}catch(zo){if(zo===mh||zo===Xu)throw zo;var Xr=X(29,zo,null,Y.mode);Xr.lanes=D,Xr.return=Y;var Wr=Xr._debugInfo=Dr;if(Xr._debugOwner=Y._debugOwner,Xr._debugTask=Y._debugTask,Wr!=null){for(var Sr=Wr.length-1;0<=Sr;Sr--)if(typeof Wr[Sr].stack==="string"){Xr._debugOwner=Wr[Sr],Xr._debugTask=Wr[Sr].debugTask;break}}return Xr}finally{Dr=tr}}}function V8(r,o){var g=lg(r);return r=!g&&typeof N(r)==="function",g||r?(g=g?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",g,o,g),!1):!0}function A5(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function q5(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Nv(r){return{lane:r,tag:dq,payload:null,callback:null,next:null}}function Bv(r,o,g){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,Z4===l&&!oM){var i=C(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,i),oM=!0}if((go&ig)!==ug)return i=l.pending,i===null?o.next=o:(o.next=i.next,i.next=o),l.pending=o,o=ot(r),q8(r,null,g),o;return rt(r,l,o,g),ot(r)}function q1(r,o,g){if(o=o.updateQueue,o!==null&&(o=o.shared,(g&4194048)!==0)){var l=o.lanes;l&=r.pendingLanes,g|=l,o.lanes=g,F0(r,g)}}function Ht(r,o){var{updateQueue:g,alternate:l}=r;if(l!==null&&(l=l.updateQueue,g===l)){var i=null,h=null;if(g=g.firstBaseUpdate,g!==null){do{var t={lane:g.lane,tag:g.tag,payload:g.payload,callback:null,next:null};h===null?i=h=t:h=h.next=t,g=g.next}while(g!==null);h===null?i=h=o:h=h.next=o}else i=h=o;g={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},r.updateQueue=g;return}r=g.lastBaseUpdate,r===null?g.firstBaseUpdate=o:r.next=o,g.lastBaseUpdate=o}function M1(){if(C4){var r=Wh;if(r!==null)throw r}}function R1(r,o,g,l){C4=!1;var i=r.updateQueue;e0=!1,Z4=i.shared;var{firstBaseUpdate:h,lastBaseUpdate:t}=i,w=i.shared.pending;if(w!==null){i.shared.pending=null;var A=w,M=A.next;A.next=null,t===null?h=M:t.next=M,t=A;var K=r.alternate;K!==null&&(K=K.updateQueue,w=K.lastBaseUpdate,w!==t&&(w===null?K.firstBaseUpdate=M:w.next=M,K.lastBaseUpdate=A))}if(h!==null){var $=i.baseState;t=0,K=M=A=null,w=h;do{var J=w.lane&-536870913,x=J!==w.lane;if(x?(Vr&J)===J:(l&J)===J){J!==0&&J===ei&&(C4=!0),K!==null&&(K=K.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});r:{J=r;var ir=w,Pr=o,Go=g;switch(ir.tag){case sq:if(ir=ir.payload,typeof ir==="function"){Mh=!0;var sr=ir.call(Go,$,Pr);if(J.mode&Ug){Wo(!0);try{ir.call(Go,$,Pr)}finally{Wo(!1)}}Mh=!1,$=sr;break r}$=ir;break r;case B4:J.flags=J.flags&-65537|128;case dq:if(sr=ir.payload,typeof sr==="function"){if(Mh=!0,ir=sr.call(Go,$,Pr),J.mode&Ug){Wo(!0);try{sr.call(Go,$,Pr)}finally{Wo(!1)}}Mh=!1}else ir=sr;if(ir===null||ir===void 0)break r;$=Er({},$,ir);break r;case rM:e0=!0}}J=w.callback,J!==null&&(r.flags|=64,x&&(r.flags|=8192),x=i.callbacks,x===null?i.callbacks=[J]:x.push(J))}else x={lane:J,tag:w.tag,payload:w.payload,callback:w.callback,next:null},K===null?(M=K=x,A=$):K=K.next=x,t|=J;if(w=w.next,w===null)if(w=i.shared.pending,w===null)break;else x=w,w=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}while(1);K===null&&(A=$),i.baseState=A,i.firstBaseUpdate=M,i.lastBaseUpdate=K,h===null&&(i.shared.lanes=0),i0|=t,r.lanes=t,r.memoizedState=$}Z4=null}function _8(r,o){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(o)}function AG(r,o){var g=r.shared.hiddenCallbacks;if(g!==null)for(r.shared.hiddenCallbacks=null,r=0;r<g.length;r++)_8(g[r],o)}function y8(r,o){var g=r.callbacks;if(g!==null)for(r.callbacks=null,r=0;r<g.length;r++)_8(g[r],o)}function c8(r,o){var g=xl;mr(Ju,g,r),mr(Xh,o,r),xl=g|o.baseLanes}function M5(r){mr(Ju,xl,r),mr(Xh,Xh.current,r)}function R5(r){xl=Ju.current,Ar(Xh,r),Ar(Ju,r)}function Zv(r){var o=r.alternate;mr(Vo,Vo.current&Yh,r),mr(Oe,r,r),Fe===null&&(o===null||Xh.current!==null?Fe=r:o.memoizedState!==null&&(Fe=r))}function W5(r){mr(Vo,Vo.current,r),mr(Oe,r,r),Fe===null&&(Fe=r)}function E8(r){r.tag===22?(mr(Vo,Vo.current,r),mr(Oe,r,r),Fe===null&&(Fe=r)):Cv(r)}function Cv(r){mr(Vo,Vo.current,r),mr(Oe,Oe.current,r)}function he(r){Ar(Oe,r),Fe===r&&(Fe=null),Ar(Vo,r)}function At(r){for(var o=r;o!==null;){if(o.tag===13){var g=o.memoizedState;if(g!==null&&(g=g.dehydrated,g===null||F2(g)||x2(g)))return o}else if(o.tag===19&&(o.memoizedProps.revealOrder==="forwards"||o.memoizedProps.revealOrder==="backwards"||o.memoizedProps.revealOrder==="unstable_legacy-backwards"||o.memoizedProps.revealOrder==="together")){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function cr(){var r=B;Ne===null?Ne=[r]:Ne.push(r)}function d(){var r=B;if(Ne!==null&&(tv++,Ne[tv]!==r)){var o=C(Kr);if(!gM.has(o)&&(gM.add(o),Ne!==null)){for(var g="",l=0;l<=tv;l++){var i=Ne[l],h=l===tv?r:i;for(i=l+1+". "+i;30>i.length;)i+=" ";i+=h+`
`,g+=i}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,o,g)}}}function Di(r){r===void 0||r===null||lg(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function qt(){var r=C(Kr);lM.has(r)||(lM.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function So(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function m5(r,o){if(An)return!1;if(o===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==o.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+o.join(", ")+"]","["+r.join(", ")+"]");for(var g=0;g<o.length&&g<r.length;g++)if(!Bg(r[g],o[g]))return!1;return!0}function G5(r,o,g,l,i,h){if(nv=h,Kr=o,Ne=r!==null?r._debugHookTypes:null,tv=-1,An=r!==null&&r.type!==o.type,Object.prototype.toString.call(g)==="[object AsyncFunction]"||Object.prototype.toString.call(g)==="[object AsyncGeneratorFunction]")h=C(Kr),S4.has(h)||(S4.add(h),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",h===null?"An unknown Component":"<"+h+">"));o.memoizedState=null,o.updateQueue=null,o.lanes=0,S.H=r!==null&&r.memoizedState!==null?k4:Ne!==null?vM:T4,ni=h=(o.mode&Ug)!==Ur;var t=I4(g,l,i);if(ni=!1,Qh&&(t=X5(o,g,l,i)),h){Wo(!0);try{t=X5(o,g,l,i)}finally{Wo(!1)}}return a8(r,o),t}function a8(r,o){o._debugHookTypes=Ne,o.dependencies===null?bv!==null&&(o.dependencies={lanes:0,firstContext:null,_debugThenableState:bv}):o.dependencies._debugThenableState=bv,S.H=qn;var g=qo!==null&&qo.next!==null;if(nv=0,Ne=B=po=qo=Kr=null,tv=-1,r!==null&&(r.flags&65011712)!==(o.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),zu=!1,Hn=0,bv=null,g)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||so||(r=r.dependencies,r!==null&&vt(r)&&(so=!0)),wn?(wn=!1,r=!0):r=!1,r&&(o=C(o)||"Unknown",eM.has(o)||S4.has(o)||(eM.add(o),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X5(r,o,g,l){Kr=r;var i=0;do{if(Qh&&(bv=null),Hn=0,Qh=!1,i>=rJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(i+=1,An=!1,po=qo=null,r.updateQueue!=null){var h=r.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}tv=-1,S.H=iM,h=I4(o,g,l)}while(Qh);return h}function qG(){var r=S.H,o=r.useState()[0];return o=typeof o.then==="function"?W1(o):o,r=r.useState()[0],(qo!==null?qo.memoizedState:null)!==r&&(Kr.flags|=1024),o}function Y5(){var r=Uu!==0;return Uu=0,r}function J5(r,o,g){o.updateQueue=r.updateQueue,o.flags=(o.mode&ye)!==Ur?o.flags&-402655237:o.flags&-2053,r.lanes&=~g}function Q5(r){if(zu){for(r=r.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zu=!1}nv=0,Ne=po=qo=Kr=null,tv=-1,B=null,Qh=!1,Hn=Uu=0,bv=null}function Ig(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?Kr.memoizedState=po=r:po=po.next=r,po}function to(){if(qo===null){var r=Kr.alternate;r=r!==null?r.memoizedState:null}else r=qo.next;var o=po===null?Kr.memoizedState:po.next;if(o!==null)po=o,qo=r;else{if(r===null){if(Kr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}qo=r,r={memoizedState:qo.memoizedState,baseState:qo.baseState,baseQueue:qo.baseQueue,queue:qo.queue,next:null},po===null?Kr.memoizedState=po=r:po=po.next=r}return po}function Mt(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function W1(r){var o=Hn;return Hn+=1,bv===null&&(bv=x8()),r=B8(bv,r,o),o=Kr,(po===null?o.memoizedState:po.next)===null&&(o=o.alternate,S.H=o!==null&&o.memoizedState!==null?k4:T4),r}function Sv(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return W1(r);if(r.$$typeof===Yl)return Ko(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function y0(r){var o=null,g=Kr.updateQueue;if(g!==null&&(o=g.memoCache),o==null){var l=Kr.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(o={data:l.data.map(function(i){return i.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),g===null&&(g=Mt(),Kr.updateQueue=g),g.memoCache=o,g=o.data[o.index],g===void 0||An)for(g=o.data[o.index]=Array(r),l=0;l<r;l++)g[l]=IX;else g.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",g.length,r);return o.index++,g}function ke(r,o){return typeof o==="function"?o(r):o}function z5(r,o,g){var l=Ig();if(g!==void 0){var i=g(o);if(ni){Wo(!0);try{g(o)}finally{Wo(!1)}}}else i=o;return l.memoizedState=l.baseState=i,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},l.queue=r,r=r.dispatch=GG.bind(null,Kr,r),[l.memoizedState,r]}function Vi(r){var o=to();return U5(o,qo,r)}function U5(r,o,g){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=g;var i=r.baseQueue,h=l.pending;if(h!==null){if(i!==null){var t=i.next;i.next=h.next,h.next=t}o.baseQueue!==i&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),o.baseQueue=i=h,l.pending=null}if(h=r.baseState,i===null)r.memoizedState=h;else{o=i.next;var w=t=null,A=null,M=o,K=!1;do{var $=M.lane&-536870913;if($!==M.lane?(Vr&$)===$:(nv&$)===$){var J=M.revertLane;if(J===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),$===ei&&(K=!0);else if((nv&J)===J){M=M.next,J===ei&&(K=!0);continue}else $={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},A===null?(w=A=$,t=h):A=A.next=$,Kr.lanes|=J,i0|=J;$=M.action,ni&&g(h,$),h=M.hasEagerState?M.eagerState:g(h,$)}else J={lane:$,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},A===null?(w=A=J,t=h):A=A.next=J,Kr.lanes|=$,i0|=$;M=M.next}while(M!==null&&M!==o);if(A===null?t=h:A.next=w,!Bg(h,r.memoizedState)&&(so=!0,K&&(g=Wh,g!==null)))throw g;r.memoizedState=h,r.baseState=t,r.baseQueue=A,l.lastRenderedState=h}return i===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function m1(r){var o=to(),g=o.queue;if(g===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");g.lastRenderedReducer=r;var{dispatch:l,pending:i}=g,h=o.memoizedState;if(i!==null){g.pending=null;var t=i=i.next;do h=r(h,t.action),t=t.next;while(t!==i);Bg(h,o.memoizedState)||(so=!0),o.memoizedState=h,o.baseQueue===null&&(o.baseState=h),g.lastRenderedState=h}return[h,l]}function K5(r,o,g){var l=Kr,i=Ig();if(pr){if(g===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var h=g();Jh||h===g()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Jh=!0)}else{if(h=o(),Jh||(g=o(),Bg(h,g)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)),Mo===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||f8(l,o,h)}return i.memoizedState=h,g={value:h,getSnapshot:o},i.queue=g,Gt(p8.bind(null,l,g,r),[r]),l.flags|=2048,yi(xe|Sg,{destroy:void 0},j8.bind(null,l,g,h,o),null),h}function Rt(r,o,g){var l=Kr,i=to(),h=pr;if(h){if(g===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");g=g()}else if(g=o(),!Jh){var t=o();Bg(g,t)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)}if(t=!Bg((qo||i).memoizedState,g))i.memoizedState=g,so=!0;i=i.queue;var w=p8.bind(null,l,i,r);if(Eg(2048,Sg,w,[r]),i.getSnapshot!==o||t||po!==null&&po.memoizedState.tag&xe){if(l.flags|=2048,yi(xe|Sg,{destroy:void 0},j8.bind(null,l,i,g,o),null),Mo===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");h||(nv&127)!==0||f8(l,o,g)}return g}function f8(r,o,g){r.flags|=16384,r={getSnapshot:o,value:g},o=Kr.updateQueue,o===null?(o=Mt(),Kr.updateQueue=o,o.stores=[r]):(g=o.stores,g===null?o.stores=[r]:g.push(r))}function j8(r,o,g,l){o.value=g,o.getSnapshot=l,d8(o)&&s8(r)}function p8(r,o,g){return g(function(){d8(o)&&(tl(2,"updateSyncExternalStore()",r),s8(r))})}function d8(r){var o=r.getSnapshot;r=r.value;try{var g=o();return!Bg(r,g)}catch(l){return!0}}function s8(r){var o=Qg(r,2);o!==null&&No(o,r,2)}function $5(r){var o=Ig();if(typeof r==="function"){var g=r;if(r=g(),ni){Wo(!0);try{g()}finally{Wo(!1)}}}return o.memoizedState=o.baseState=r,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:r},o}function L5(r){r=$5(r);var o=r.queue,g=MO.bind(null,Kr,o);return o.dispatch=g,[r.memoizedState,g]}function I5(r){var o=Ig();o.memoizedState=o.baseState=r;var g={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=g,o=c5.bind(null,Kr,!0,g),g.dispatch=o,[r,o]}function rO(r,o){var g=to();return oO(g,qo,r,o)}function oO(r,o,g,l){return r.baseState=g,U5(r,qo,typeof l==="function"?l:ke)}function gO(r,o){var g=to();if(qo!==null)return oO(g,qo,r,o);return g.baseState=r,[r,g.queue.dispatch]}function MG(r,o,g,l,i){if(Ut(r))throw Error("Cannot update form state while rendering.");if(r=o.action,r!==null){var h={payload:i,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(t){h.listeners.push(t)}};S.T!==null?g(!0):h.isTransition=!1,l(h),g=o.pending,g===null?(h.next=o.pending=h,eO(o,h)):(h.next=g.next,o.pending=g.next=h)}}function eO(r,o){var{action:g,payload:l}=o,i=r.state;if(o.isTransition){var h=S.T,t={};t._updatedFibers=new Set,S.T=t;try{var w=g(i,l),A=S.S;A!==null&&A(t,w),lO(r,o,w)}catch(M){F5(r,o,M)}finally{h!==null&&t.types!==null&&(h.types!==null&&h.types!==t.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),h.types=t.types),S.T=h,h===null&&t._updatedFibers&&(r=t._updatedFibers.size,t._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{t=g(i,l),lO(r,o,t)}catch(M){F5(r,o,M)}}function lO(r,o,g){g!==null&&typeof g==="object"&&typeof g.then==="function"?(S.asyncTransitions++,g.then(zt,zt),g.then(function(l){vO(r,o,l)},function(l){return F5(r,o,l)}),o.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):vO(r,o,g)}function vO(r,o,g){o.status="fulfilled",o.value=g,iO(o),r.state=g,o=r.pending,o!==null&&(g=o.next,g===o?r.pending=null:(g=g.next,o.next=g,eO(r,g)))}function F5(r,o,g){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do o.status="rejected",o.reason=g,iO(o),o=o.next;while(o!==l)}r.action=null}function iO(r){r=r.listeners;for(var o=0;o<r.length;o++)(0,r[o])()}function hO(r,o){return o}function _i(r,o){if(pr){var g=Mo.formState;if(g!==null){r:{var l=Kr;if(pr){if(Qo){o:{var i=Qo;for(var h=Le;i.nodeType!==8;){if(!h){i=null;break o}if(i=be(i.nextSibling),i===null){i=null;break o}}h=i.data,i=h===t6||h===yM?i:null}if(i){Qo=be(i.nextSibling),l=i.data===t6;break r}}Iv(l)}l=!1}l&&(o=g[0])}}return g=Ig(),g.memoizedState=g.baseState=o,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hO,lastRenderedState:o},g.queue=l,g=MO.bind(null,Kr,l),l.dispatch=g,l=$5(!1),h=c5.bind(null,Kr,!1,l.queue),l=Ig(),i={state:o,dispatch:null,action:r,pending:null},l.queue=i,g=MG.bind(null,Kr,i,h,g),i.dispatch=g,l.memoizedState=r,[o,g,!1]}function Wt(r){var o=to();return nO(o,qo,r)}function nO(r,o,g){if(o=U5(r,o,hO)[0],r=Vi(ke)[0],typeof o==="object"&&o!==null&&typeof o.then==="function")try{var l=W1(o)}catch(t){if(t===mh)throw Xu;throw t}else l=o;o=to();var i=o.queue,h=i.dispatch;return g!==o.memoizedState&&(Kr.flags|=2048,yi(xe|Sg,{destroy:void 0},RG.bind(null,i,g),null)),[l,h,r]}function RG(r,o){r.action=o}function mt(r){var o=to(),g=qo;if(g!==null)return nO(o,g,r);to(),o=o.memoizedState,g=to();var l=g.queue.dispatch;return g.memoizedState=r,[o,l,!1]}function yi(r,o,g,l){return r={tag:r,create:g,deps:l,inst:o,next:null},o=Kr.updateQueue,o===null&&(o=Mt(),Kr.updateQueue=o),g=o.lastEffect,g===null?o.lastEffect=r.next=r:(l=g.next,g.next=r,r.next=l,o.lastEffect=r),r}function x5(r){var o=Ig();return r={current:r},o.memoizedState=r}function c0(r,o,g,l){var i=Ig();Kr.flags|=r,i.memoizedState=yi(xe|o,{destroy:void 0},g,l===void 0?null:l)}function Eg(r,o,g,l){var i=to();l=l===void 0?null:l;var h=i.memoizedState.inst;qo!==null&&l!==null&&m5(l,qo.memoizedState.deps)?i.memoizedState=yi(o,h,g,l):(Kr.flags|=r,i.memoizedState=yi(xe|o,h,g,l))}function Gt(r,o){(Kr.mode&ye)!==Ur?c0(276826112,Sg,r,o):c0(8390656,Sg,r,o)}function WG(r){Kr.flags|=4;var o=Kr.updateQueue;if(o===null)o=Mt(),Kr.updateQueue=o,o.events=[r];else{var g=o.events;g===null?o.events=[r]:g.push(r)}}function N5(r){var o=Ig(),g={impl:r};return o.memoizedState=g,function(){if((go&ig)!==ug)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function Xt(r){var o=to().memoizedState;return WG({ref:o,nextImpl:r}),function(){if((go&ig)!==ug)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function B5(r,o){var g=4194308;return(Kr.mode&ye)!==Ur&&(g|=134217728),c0(g,He,r,o)}function bO(r,o){if(typeof o==="function"){r=r();var g=o(r);return function(){typeof g==="function"?g():o(null)}}if(o!==null&&o!==void 0)return o.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}"),r=r(),o.current=r,function(){o.current=null}}function Z5(r,o,g){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),g=g!==null&&g!==void 0?g.concat([r]):null;var l=4194308;(Kr.mode&ye)!==Ur&&(l|=134217728),c0(l,He,bO.bind(null,o,r),g)}function Yt(r,o,g){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),g=g!==null&&g!==void 0?g.concat([r]):null,Eg(4,He,bO.bind(null,o,r),g)}function C5(r,o){return Ig().memoizedState=[r,o===void 0?null:o],r}function Jt(r,o){var g=to();o=o===void 0?null:o;var l=g.memoizedState;if(o!==null&&m5(o,l[1]))return l[0];return g.memoizedState=[r,o],r}function S5(r,o){var g=Ig();o=o===void 0?null:o;var l=r();if(ni){Wo(!0);try{r()}finally{Wo(!1)}}return g.memoizedState=[l,o],l}function Qt(r,o){var g=to();o=o===void 0?null:o;var l=g.memoizedState;if(o!==null&&m5(o,l[1]))return l[0];if(l=r(),ni){Wo(!0);try{r()}finally{Wo(!1)}}return g.memoizedState=[l,o],l}function T5(r,o){var g=Ig();return k5(g,r,o)}function tO(r,o){var g=to();return wO(g,qo.memoizedState,r,o)}function uO(r,o){var g=to();return qo===null?k5(g,r,o):wO(g,qo.memoizedState,r,o)}function k5(r,o,g){if(g===void 0||(nv&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=o;return r.memoizedState=g,r=PH(),Kr.lanes|=r,i0|=r,g}function wO(r,o,g,l){if(Bg(g,o))return g;if(Xh.current!==null)return r=k5(r,g,l),Bg(r,o)||(so=!0),r;if((nv&42)===0||(nv&1073741824)!==0&&(Vr&261930)===0)return so=!0,r.memoizedState=g;return r=PH(),Kr.lanes|=r,i0|=r,o}function zt(){S.asyncTransitions--}function PO(r,o,g,l,i){var h=no.p;no.p=h!==0&&h<_e?h:_e;var t=S.T,w={};w._updatedFibers=new Set,S.T=w,c5(r,!1,o,g);try{var A=i(),M=S.S;if(M!==null&&M(w,A),A!==null&&typeof A==="object"&&typeof A.then==="function"){S.asyncTransitions++,A.then(zt,zt);var K=HG(A,l);G1(r,o,K,ne(r))}else G1(r,o,l,ne(r))}catch($){G1(r,o,{then:function(){},status:"rejected",reason:$},ne(r))}finally{no.p=h,t!==null&&w.types!==null&&(t.types!==null&&t.types!==w.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),t.types=w.types),S.T=t,t===null&&w._updatedFibers&&(r=w._updatedFibers.size,w._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function D5(r,o,g,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var i=OO(r).queue;PG(r),PO(r,i,o,Ri,g===null?G:function(){return HO(r),g(l)})}function OO(r){var o=r.memoizedState;if(o!==null)return o;o={memoizedState:Ri,baseState:Ri,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:Ri},next:null};var g={};return o.next={memoizedState:g,baseState:g,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:g},next:null},r.memoizedState=o,r=r.alternate,r!==null&&(r.memoizedState=o),o}function HO(r){S.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var o=OO(r);o.next===null&&(o=r.alternate.memoizedState),G1(r,o.next.queue,{},ne(r))}function V5(){var r=$5(!1);return r=PO.bind(null,Kr,r.queue,!0,!1),Ig().memoizedState=r,[!1,r]}function AO(){var r=Vi(ke)[0],o=to().memoizedState;return[typeof r==="boolean"?r:W1(r),o]}function qO(){var r=m1(ke)[0],o=to().memoizedState;return[typeof r==="boolean"?r:W1(r),o]}function E0(){return Ko(In)}function _5(){var r=Ig(),o=Mo.identifierPrefix;if(pr){var g=ev,l=gv;g=(l&~(1<<32-Fg(l)-1)).toString(32)+g,o="_"+o+"R_"+g,g=Uu++,0<g&&(o+="H"+g.toString(32)),o+="_"}else g=sY++,o="_"+o+"r_"+g.toString(32)+"_";return r.memoizedState=o}function y5(){return Ig().memoizedState=mG.bind(null,Kr)}function mG(r,o){for(var g=r.return;g!==null;){switch(g.tag){case 24:case 3:var l=ne(g),i=Nv(l),h=Bv(g,i,l);h!==null&&(tl(l,"refresh()",r),No(h,g,l),q1(h,g,l)),r=u5(),o!==null&&o!==void 0&&h!==null&&console.error("The seed argument is not enabled outside experimental channels."),i.payload={cache:r};return}g=g.return}}function GG(r,o,g){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ne(r);var i={lane:l,revertLane:0,gesture:null,action:g,hasEagerState:!1,eagerState:null,next:null};Ut(r)?RO(o,i):(i=sw(r,o,i,l),i!==null&&(tl(l,"dispatch()",r),No(i,r,l),WO(i,o,l)))}function MO(r,o,g){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ne(r),G1(r,o,g,l)&&tl(l,"setState()",r)}function G1(r,o,g,l){var i={lane:l,revertLane:0,gesture:null,action:g,hasEagerState:!1,eagerState:null,next:null};if(Ut(r))RO(o,i);else{var h=r.alternate;if(r.lanes===0&&(h===null||h.lanes===0)&&(h=o.lastRenderedReducer,h!==null)){var t=S.H;S.H=Ee;try{var w=o.lastRenderedState,A=h(w,g);if(i.hasEagerState=!0,i.eagerState=A,Bg(A,w))return rt(r,o,i,0),Mo===null&&sb(),!1}catch(M){}finally{S.H=t}}if(g=sw(r,o,i,l),g!==null)return No(g,r,l),WO(g,o,l),!0}return!1}function c5(r,o,g,l){if(S.T===null&&ei===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:G2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ut(r)){if(o)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else o=sw(r,g,l,2),o!==null&&(tl(2,"setOptimistic()",r),No(o,r,2))}function Ut(r){var o=r.alternate;return r===Kr||o!==null&&o===Kr}function RO(r,o){Qh=zu=!0;var g=r.pending;g===null?o.next=o:(o.next=g.next,g.next=o),r.pending=o}function WO(r,o,g){if((g&4194048)!==0){var l=o.lanes;l&=r.pendingLanes,g|=l,o.lanes=g,F0(r,g)}}function E5(r){if(r!==null&&typeof r!=="function"){var o=String(r);qM.has(o)||(qM.add(o),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function a5(r,o,g,l){var i=r.memoizedState,h=g(l,i);if(r.mode&Ug){Wo(!0);try{h=g(l,i)}finally{Wo(!1)}}h===void 0&&(o=y(o)||"Component",PM.has(o)||(PM.add(o),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",o))),i=h===null||h===void 0?i:Er({},i,h),r.memoizedState=i,r.lanes===0&&(r.updateQueue.baseState=i)}function mO(r,o,g,l,i,h,t){var w=r.stateNode;if(typeof w.shouldComponentUpdate==="function"){if(g=w.shouldComponentUpdate(l,h,t),r.mode&Ug){Wo(!0);try{g=w.shouldComponentUpdate(l,h,t)}finally{Wo(!1)}}return g===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(o)||"Component"),g}return o.prototype&&o.prototype.isPureReactComponent?!t1(g,l)||!t1(i,h):!0}function GO(r,o,g,l){var i=o.state;typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps(g,l),typeof o.UNSAFE_componentWillReceiveProps==="function"&&o.UNSAFE_componentWillReceiveProps(g,l),o.state!==i&&(r=C(r)||"Component",nM.has(r)||(nM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),D4.enqueueReplaceState(o,o.state,null))}function a0(r,o){var g=o;if("ref"in o){g={};for(var l in o)l!=="ref"&&(g[l]=o[l])}if(r=r.defaultProps){g===o&&(g=Er({},g));for(var i in r)g[i]===void 0&&(g[i]=r[i])}return g}function XO(r){R4(r),console.warn(`%s

%s
`,zh?"An error occurred in the <"+zh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function YO(r){var o=zh?"The above error occurred in the <"+zh+"> component.":"The above error occurred in one of your React components.",g="React will try to recreate this component tree from scratch using the error boundary you provided, "+((V4||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,o,g].slice(0),typeof r[0]==="string"?r.splice(0,1,sM+" "+r[0],rR,su+l+su,oR):r.splice(0,0,sM,rR,su+l+su,oR),r.unshift(console),l=WJ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,o,g)}function JO(r){R4(r)}function Kt(r,o){try{zh=o.source?C(o.source):null,V4=null;var g=o.value;if(S.actQueue!==null)S.thrownErrors.push(g);else{var l=r.onUncaughtError;l(g,{componentStack:o.stack})}}catch(i){setTimeout(function(){throw i})}}function QO(r,o,g){try{zh=g.source?C(g.source):null,V4=C(o);var l=r.onCaughtError;l(g.value,{componentStack:g.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function f5(r,o,g){return g=Nv(g),g.tag=B4,g.payload={element:null},g.callback=function(){nr(o.source,Kt,r,o)},g}function j5(r){return r=Nv(r),r.tag=B4,r}function p5(r,o,g,l){var i=g.type.getDerivedStateFromError;if(typeof i==="function"){var h=l.value;r.payload=function(){return i(h)},r.callback=function(){R8(g),nr(l.source,QO,o,g,l)}}var t=g.stateNode;t!==null&&typeof t.componentDidCatch==="function"&&(r.callback=function(){R8(g),nr(l.source,QO,o,g,l),typeof i!=="function"&&(n0===null?n0=new Set([this]):n0.add(this)),fY(this,l),typeof i==="function"||(g.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",C(g)||"Unknown")})}function XG(r,o,g,l,i){if(g.flags|=32768,zl&&$1(r,i),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(o=g.alternate,o!==null&&ki(o,g,i,!0),pr&&($l=!0),g=Oe.current,g!==null){switch(g.tag){case 31:case 13:return Fe===null?Ct():g.alternate===null&&Fo===wv&&(Fo=Lu),g.flags&=-257,g.flags|=65536,g.lanes=i,l===Yu?g.flags|=16384:(o=g.updateQueue,o===null?g.updateQueue=new Set([l]):o.add(l),M2(r,l,i)),!1;case 22:return g.flags|=65536,l===Yu?g.flags|=16384:(o=g.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([l])},g.updateQueue=o):(g=o.retryQueue,g===null?o.retryQueue=new Set([l]):g.add(l)),M2(r,l,i)),!1}throw Error("Unexpected Suspense handler tag ("+g.tag+"). This is a bug in React.")}return M2(r,l,i),Ct(),!1}if(pr)return $l=!0,o=Oe.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=i,l!==J4&&w1(le(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),g))):(l!==J4&&w1(le(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),g)),r=r.current.alternate,r.flags|=65536,i&=-i,r.lanes|=i,l=le(l,g),i=f5(r.stateNode,l,i),Ht(r,i),Fo!==l0&&(Fo=bi)),!1;var h=le(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),g);if(Xn===null?Xn=[h]:Xn.push(h),Fo!==l0&&(Fo=bi),o===null)return!0;l=le(l,g),g=o;do{switch(g.tag){case 3:return g.flags|=65536,r=i&-i,g.lanes|=r,r=f5(g.stateNode,l,r),Ht(g,r),!1;case 1:if(o=g.type,h=g.stateNode,(g.flags&128)===0&&(typeof o.getDerivedStateFromError==="function"||h!==null&&typeof h.componentDidCatch==="function"&&(n0===null||!n0.has(h))))return g.flags|=65536,i&=-i,g.lanes|=i,i=j5(i),p5(i,r,g,l),Ht(g,i),!1}g=g.return}while(g!==null);return!1}function Ag(r,o,g,l){o.child=r===null?pq(o,null,g,l):hi(o,r.child,g,l)}function zO(r,o,g,l,i){g=g.render;var h=o.ref;if("ref"in l){var t={};for(var w in l)w!=="ref"&&(t[w]=l[w])}else t=l;if(V0(o),l=G5(r,o,g,t,h,i),w=Y5(),r!==null&&!so)return J5(r,o,i),jl(r,o,i);return pr&&w&&v5(o),o.flags|=1,Ag(r,o,l,i),o.child}function UO(r,o,g,l,i){if(r===null){var h=g.type;if(typeof h==="function"&&!o5(h)&&h.defaultProps===void 0&&g.compare===null)return g=S0(h),o.tag=15,o.type=g,s5(o,h),KO(r,o,g,l,i);return r=g5(g.type,null,l,o,o.mode,i),r.ref=o.ref,r.return=o,o.child=r}if(h=r.child,!v2(r,i)){var t=h.memoizedProps;if(g=g.compare,g=g!==null?g:t1,g(t,l)&&r.ref===o.ref)return jl(r,o,i)}return o.flags|=1,r=cl(h,l),r.ref=o.ref,r.return=o,o.child=r}function KO(r,o,g,l,i){if(r!==null){var h=r.memoizedProps;if(t1(h,l)&&r.ref===o.ref&&o.type===r.type)if(so=!1,o.pendingProps=l=h,v2(r,i))(r.flags&131072)!==0&&(so=!0);else return o.lanes=r.lanes,jl(r,o,i)}return d5(r,o,g,l,i)}function $O(r,o,g,l){var i=l.children,h=r!==null?r.memoizedState:null;if(r===null&&o.stateNode===null&&(o.stateNode={_visibility:p1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((o.flags&128)!==0){if(h=h!==null?h.baseLanes|g:g,r!==null){l=o.child=r.child;for(i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~h}else l=0,o.child=null;return LO(r,o,h,g,l)}if((g&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},r!==null&&bt(o,h!==null?h.cachePool:null),h!==null?c8(o,h):M5(o),E8(o);else return l=o.lanes=536870912,LO(r,o,h!==null?h.baseLanes|g:g,g,l)}else h!==null?(bt(o,h.cachePool),c8(o,h),Cv(o),o.memoizedState=null):(r!==null&&bt(o,null),M5(o),Cv(o));return Ag(r,o,i,g),o.child}function X1(r,o){return r!==null&&r.tag===22||o.stateNode!==null||(o.stateNode={_visibility:p1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.sibling}function LO(r,o,g,l,i){var h=O5();return h=h===null?null:{parent:fo._currentValue,pool:h},o.memoizedState={baseLanes:g,cachePool:h},r!==null&&bt(o,null),M5(o),E8(o),r!==null&&ki(r,o,l,!0),o.childLanes=i,null}function $t(r,o){var g=o.hidden;return g!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,g===!0?"hidden":g===!1?"hidden={false}":"hidden={...}",g?'mode="hidden"':'mode="visible"'),o=It({mode:o.mode,children:o.children},r.mode),o.ref=r.ref,r.child=o,o.return=r,o}function IO(r,o,g){return hi(o,r.child,null,g),r=$t(o,o.pendingProps),r.flags|=2,he(o),o.memoizedState=null,r}function YG(r,o,g){var l=o.pendingProps,i=(o.flags&128)!==0;if(o.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=$t(o,l),o.lanes=536870912,X1(null,r);if(W5(o),(r=Qo)?(g=eA(r,Le),g=g!==null&&g.data===Hi?g:null,g!==null&&(l={dehydrated:g,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=G8(g),l.return=o,o.child=l,Rg=o,Qo=null)):g=null,g===null)throw et(o,r),Iv(o);return o.lanes=536870912,null}return $t(o,l)}var h=r.memoizedState;if(h!==null){var t=h.dehydrated;if(W5(o),i)if(o.flags&256)o.flags&=-257,o=IO(r,o,g);else if(o.memoizedState!==null)o.child=r.child,o.flags|=128,o=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(Q8(),(g&536870912)!==0&&Zt(o),so||ki(r,o,g,!1),i=(g&r.childLanes)!==0,so||i){if(l=Mo,l!==null&&(t=x0(l,g),t!==0&&t!==h.retryLane))throw h.retryLane=t,Qg(r,t),No(l,r,t),_4;Ct(),o=IO(r,o,g)}else r=h.treeContext,Qo=be(t.nextSibling),Rg=o,pr=!0,pv=null,$l=!1,Pe=null,Le=!1,r!==null&&J8(o,r),o=$t(o,l),o.flags|=4096;return o}return h=r.child,l={mode:l.mode,children:l.children},(g&536870912)!==0&&(g&r.lanes)!==0&&Zt(o),r=cl(h,l),r.ref=o.ref,o.child=r,r.return=o,r}function Lt(r,o){var g=o.ref;if(g===null)r!==null&&r.ref!==null&&(o.flags|=4194816);else{if(typeof g!=="function"&&typeof g!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==g)o.flags|=4194816}}function d5(r,o,g,l,i){if(g.prototype&&typeof g.prototype.render==="function"){var h=y(g)||"Unknown";MM[h]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",h,h),MM[h]=!0)}if(o.mode&Ug&&ce.recordLegacyContextWarning(o,null),r===null&&(s5(o,o.type),g.contextTypes&&(h=y(g)||"Unknown",WM[h]||(WM[h]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",h)))),V0(o),g=G5(r,o,g,l,void 0,i),l=Y5(),r!==null&&!so)return J5(r,o,i),jl(r,o,i);return pr&&l&&v5(o),o.flags|=1,Ag(r,o,g,i),o.child}function FO(r,o,g,l,i,h){if(V0(o),tv=-1,An=r!==null&&r.type!==o.type,o.updateQueue=null,g=X5(o,l,g,i),a8(r,o),l=Y5(),r!==null&&!so)return J5(r,o,h),jl(r,o,h);return pr&&l&&v5(o),o.flags|=1,Ag(r,o,g,h),o.child}function xO(r,o,g,l,i){switch(O(o)){case!1:var h=o.stateNode,t=new o.type(o.memoizedProps,h.context).state;h.updater.enqueueSetState(h,t,null);break;case!0:o.flags|=128,o.flags|=65536,h=Error("Simulated error coming from DevTools");var w=i&-i;if(o.lanes|=w,t=Mo,t===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w=j5(w),p5(w,t,o,le(h,o)),Ht(o,w)}if(V0(o),o.stateNode===null){if(t=jv,h=g.contextType,"contextType"in g&&h!==null&&(h===void 0||h.$$typeof!==Yl)&&!AM.has(g)&&(AM.add(g),w=h===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof h!=="object"?" However, it is set to a "+typeof h+".":h.$$typeof===y2?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(h).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(g)||"Component",w)),typeof h==="object"&&h!==null&&(t=Ko(h)),h=new g(l,t),o.mode&Ug){Wo(!0);try{h=new g(l,t)}finally{Wo(!1)}}if(t=o.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=D4,o.stateNode=h,h._reactInternals=o,h._reactInternalInstance=hM,typeof g.getDerivedStateFromProps==="function"&&t===null&&(t=y(g)||"Component",bM.has(t)||(bM.add(t),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",t,h.state===null?"null":"undefined",t))),typeof g.getDerivedStateFromProps==="function"||typeof h.getSnapshotBeforeUpdate==="function"){var A=w=t=null;if(typeof h.componentWillMount==="function"&&h.componentWillMount.__suppressDeprecationWarning!==!0?t="componentWillMount":typeof h.UNSAFE_componentWillMount==="function"&&(t="UNSAFE_componentWillMount"),typeof h.componentWillReceiveProps==="function"&&h.componentWillReceiveProps.__suppressDeprecationWarning!==!0?w="componentWillReceiveProps":typeof h.UNSAFE_componentWillReceiveProps==="function"&&(w="UNSAFE_componentWillReceiveProps"),typeof h.componentWillUpdate==="function"&&h.componentWillUpdate.__suppressDeprecationWarning!==!0?A="componentWillUpdate":typeof h.UNSAFE_componentWillUpdate==="function"&&(A="UNSAFE_componentWillUpdate"),t!==null||w!==null||A!==null){h=y(g)||"Component";var M=typeof g.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";uM.has(h)||(uM.add(h),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,h,M,t!==null?`
  `+t:"",w!==null?`
  `+w:"",A!==null?`
  `+A:""))}}h=o.stateNode,t=y(g)||"Component",h.render||(g.prototype&&typeof g.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",t):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",t)),!h.getInitialState||h.getInitialState.isReactClassApproved||h.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",t),h.getDefaultProps&&!h.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",t),h.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",t),g.childContextTypes&&!HM.has(g)&&(HM.add(g),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",t)),g.contextTypes&&!OM.has(g)&&(OM.add(g),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",t)),typeof h.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",t),g.prototype&&g.prototype.isPureReactComponent&&typeof h.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(g)||"A pure component"),typeof h.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",t),typeof h.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",t),typeof h.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",t),typeof h.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",t),w=h.props!==l,h.props!==void 0&&w&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",t),h.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",t,t),typeof h.getSnapshotBeforeUpdate!=="function"||typeof h.componentDidUpdate==="function"||tM.has(g)||(tM.add(g),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(g))),typeof h.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",t),typeof h.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",t),typeof g.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",t),(w=h.state)&&(typeof w!=="object"||lg(w))&&console.error("%s.state: must be set to an object or null",t),typeof h.getChildContext==="function"&&typeof g.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",t),h=o.stateNode,h.props=l,h.state=o.memoizedState,h.refs={},A5(o),t=g.contextType,h.context=typeof t==="object"&&t!==null?Ko(t):jv,h.state===l&&(t=y(g)||"Component",wM.has(t)||(wM.add(t),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",t))),o.mode&Ug&&ce.recordLegacyContextWarning(o,h),ce.recordUnsafeLifecycleWarnings(o,h),h.state=o.memoizedState,t=g.getDerivedStateFromProps,typeof t==="function"&&(a5(o,g,t,l),h.state=o.memoizedState),typeof g.getDerivedStateFromProps==="function"||typeof h.getSnapshotBeforeUpdate==="function"||typeof h.UNSAFE_componentWillMount!=="function"&&typeof h.componentWillMount!=="function"||(t=h.state,typeof h.componentWillMount==="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount==="function"&&h.UNSAFE_componentWillMount(),t!==h.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",C(o)||"Component"),D4.enqueueReplaceState(h,h.state,null)),R1(o,l,h,i),M1(),h.state=o.memoizedState),typeof h.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&ye)!==Ur&&(o.flags|=134217728),h=!0}else if(r===null){h=o.stateNode;var K=o.memoizedProps;w=a0(g,K),h.props=w;var $=h.context;A=g.contextType,t=jv,typeof A==="object"&&A!==null&&(t=Ko(A)),M=g.getDerivedStateFromProps,A=typeof M==="function"||typeof h.getSnapshotBeforeUpdate==="function",K=o.pendingProps!==K,A||typeof h.UNSAFE_componentWillReceiveProps!=="function"&&typeof h.componentWillReceiveProps!=="function"||(K||$!==t)&&GO(o,h,l,t),e0=!1;var J=o.memoizedState;h.state=J,R1(o,l,h,i),M1(),$=o.memoizedState,K||J!==$||e0?(typeof M==="function"&&(a5(o,g,M,l),$=o.memoizedState),(w=e0||mO(o,g,w,l,J,$,t))?(A||typeof h.UNSAFE_componentWillMount!=="function"&&typeof h.componentWillMount!=="function"||(typeof h.componentWillMount==="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount==="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&ye)!==Ur&&(o.flags|=134217728)):(typeof h.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&ye)!==Ur&&(o.flags|=134217728),o.memoizedProps=l,o.memoizedState=$),h.props=l,h.state=$,h.context=t,h=w):(typeof h.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&ye)!==Ur&&(o.flags|=134217728),h=!1)}else{h=o.stateNode,q5(r,o),t=o.memoizedProps,A=a0(g,t),h.props=A,M=o.pendingProps,J=h.context,$=g.contextType,w=jv,typeof $==="object"&&$!==null&&(w=Ko($)),K=g.getDerivedStateFromProps,($=typeof K==="function"||typeof h.getSnapshotBeforeUpdate==="function")||typeof h.UNSAFE_componentWillReceiveProps!=="function"&&typeof h.componentWillReceiveProps!=="function"||(t!==M||J!==w)&&GO(o,h,l,w),e0=!1,J=o.memoizedState,h.state=J,R1(o,l,h,i),M1();var x=o.memoizedState;t!==M||J!==x||e0||r!==null&&r.dependencies!==null&&vt(r.dependencies)?(typeof K==="function"&&(a5(o,g,K,l),x=o.memoizedState),(A=e0||mO(o,g,A,l,J,x,w)||r!==null&&r.dependencies!==null&&vt(r.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!=="function"&&typeof h.componentWillUpdate!=="function"||(typeof h.componentWillUpdate==="function"&&h.componentWillUpdate(l,x,w),typeof h.UNSAFE_componentWillUpdate==="function"&&h.UNSAFE_componentWillUpdate(l,x,w)),typeof h.componentDidUpdate==="function"&&(o.flags|=4),typeof h.getSnapshotBeforeUpdate==="function"&&(o.flags|=1024)):(typeof h.componentDidUpdate!=="function"||t===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof h.getSnapshotBeforeUpdate!=="function"||t===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=x),h.props=l,h.state=x,h.context=w,h=A):(typeof h.componentDidUpdate!=="function"||t===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof h.getSnapshotBeforeUpdate!=="function"||t===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),h=!1)}if(w=h,Lt(r,o),t=(o.flags&128)!==0,w||t){if(w=o.stateNode,yg(o),t&&typeof g.getDerivedStateFromError!=="function")g=null,Zg=-1;else if(g=Zq(w),o.mode&Ug){Wo(!0);try{Zq(w)}finally{Wo(!1)}}o.flags|=1,r!==null&&t?(o.child=hi(o,r.child,null,i),o.child=hi(o,null,g,i)):Ag(r,o,g,i),o.memoizedState=w.state,r=o.child}else r=jl(r,o,i);return i=o.stateNode,h&&i.props!==l&&(Uh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",C(o)||"a component"),Uh=!0),r}function NO(r,o,g,l){return D0(),o.flags|=256,Ag(r,o,g,l),o.child}function s5(r,o){o&&o.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,o.displayName||o.name||"Component"),typeof o.getDerivedStateFromProps==="function"&&(r=y(o)||"Unknown",mM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),mM[r]=!0)),typeof o.contextType==="object"&&o.contextType!==null&&(o=y(o)||"Unknown",RM[o]||(console.error("%s: Function components do not support contextType.",o),RM[o]=!0))}function r2(r){return{baseLanes:r,cachePool:F8()}}function o2(r,o,g){return r=r!==null?r.childLanes&~g:0,o&&(r|=dg),r}function BO(r,o,g){var l,i=o.pendingProps;P(o)&&(o.flags|=128);var h=!1,t=(o.flags&128)!==0;if((l=t)||(l=r!==null&&r.memoizedState===null?!1:(Vo.current&On)!==0),l&&(h=!0,o.flags&=-129),l=(o.flags&32)!==0,o.flags&=-33,r===null){if(pr){if(h?Zv(o):Cv(o),(r=Qo)?(g=eA(r,Le),g=g!==null&&g.data!==Hi?g:null,g!==null&&(l={dehydrated:g,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=G8(g),l.return=o,o.child=l,Rg=o,Qo=null)):g=null,g===null)throw et(o,r),Iv(o);return x2(g)?o.lanes=32:o.lanes=536870912,null}var w=i.children;if(i=i.fallback,h){Cv(o);var A=o.mode;return w=It({mode:"hidden",children:w},A),i=T0(i,A,g,null),w.return=o,i.return=o,w.sibling=i,o.child=w,i=o.child,i.memoizedState=r2(g),i.childLanes=o2(r,l,g),o.memoizedState=y4,X1(null,i)}return Zv(o),g2(o,w)}var M=r.memoizedState;if(M!==null){var K=M.dehydrated;if(K!==null){if(t)o.flags&256?(Zv(o),o.flags&=-257,o=e2(r,o,g)):o.memoizedState!==null?(Cv(o),o.child=r.child,o.flags|=128,o=null):(Cv(o),w=i.fallback,A=o.mode,i=It({mode:"visible",children:i.children},A),w=T0(w,A,g,null),w.flags|=2,i.return=o,w.return=o,i.sibling=w,o.child=i,hi(o,r.child,null,g),i=o.child,i.memoizedState=r2(g),i.childLanes=o2(r,l,g),o.memoizedState=y4,o=X1(null,i));else if(Zv(o),Q8(),(g&536870912)!==0&&Zt(o),x2(K)){if(l=K.nextSibling&&K.nextSibling.dataset,l){w=l.dgst;var $=l.msg;A=l.stck;var J=l.cstck}h=$,l=w,i=A,K=J,w=h,A=K,w=w?Error(w):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),w.stack=i||"",w.digest=l,l=A===void 0?null:A,i={value:w,source:null,stack:l},typeof l==="string"&&Y4.set(w,i),w1(i),o=e2(r,o,g)}else if(so||ki(r,o,g,!1),l=(g&r.childLanes)!==0,so||l){if(l=Mo,l!==null&&(i=x0(l,g),i!==0&&i!==M.retryLane))throw M.retryLane=i,Qg(r,i),No(l,r,i),_4;F2(K)||Ct(),o=e2(r,o,g)}else F2(K)?(o.flags|=192,o.child=r.child,o=null):(r=M.treeContext,Qo=be(K.nextSibling),Rg=o,pr=!0,pv=null,$l=!1,Pe=null,Le=!1,r!==null&&J8(o,r),o=g2(o,i.children),o.flags|=4096);return o}}if(h)return Cv(o),w=i.fallback,A=o.mode,J=r.child,K=J.sibling,i=cl(J,{mode:"hidden",children:i.children}),i.subtreeFlags=J.subtreeFlags&65011712,K!==null?w=cl(K,w):(w=T0(w,A,g,null),w.flags|=2),w.return=o,i.return=o,i.sibling=w,o.child=i,X1(null,i),i=o.child,w=r.child.memoizedState,w===null?w=r2(g):(A=w.cachePool,A!==null?(J=fo._currentValue,A=A.parent!==J?{parent:J,pool:J}:A):A=F8(),w={baseLanes:w.baseLanes|g,cachePool:A}),i.memoizedState=w,i.childLanes=o2(r,l,g),o.memoizedState=y4,X1(r.child,i);return M!==null&&(g&62914560)===g&&(g&r.lanes)!==0&&Zt(o),Zv(o),g=r.child,r=g.sibling,g=cl(g,{mode:"visible",children:i.children}),g.return=o,g.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=g,o.memoizedState=null,g}function g2(r,o){return o=It({mode:"visible",children:o},r.mode),o.return=r,r.child=o}function It(r,o){return r=X(22,r,null,o),r.lanes=0,r}function e2(r,o,g){return hi(o,r.child,null,g),r=g2(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function ZO(r,o,g){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o),b5(r.return,o,g)}function l2(r,o,g,l,i,h){var t=r.memoizedState;t===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:g,tailMode:i,treeForkCount:h}:(t.isBackwards=o,t.rendering=null,t.renderingStartTime=0,t.last=l,t.tail=g,t.tailMode=i,t.treeForkCount=h)}function CO(r,o,g){var l=o.pendingProps,i=l.revealOrder,h=l.tail,t=l.children,w=Vo.current;if((l=(w&On)!==0)?(w=w&Yh|On,o.flags|=128):w&=Yh,mr(Vo,w,o),w=i==null?"null":i,i!=="forwards"&&i!=="unstable_legacy-backwards"&&i!=="together"&&i!=="independent"&&!GM[w])if(GM[w]=!0,i==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(i==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof i==="string")switch(i.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',i,i.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',i,i.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',i)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',i);if(w=h==null?"null":h,!$u[w])if(h==null){if(i==="forwards"||i==="backwards"||i==="unstable_legacy-backwards")$u[w]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else h!=="visible"&&h!=="collapsed"&&h!=="hidden"?($u[w]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',h)):i!=="forwards"&&i!=="backwards"&&i!=="unstable_legacy-backwards"&&($u[w]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',h));r:if((i==="forwards"||i==="backwards"||i==="unstable_legacy-backwards")&&t!==void 0&&t!==null&&t!==!1)if(lg(t)){for(w=0;w<t.length;w++)if(!V8(t[w],w))break r}else if(w=N(t),typeof w==="function"){if(w=w.call(t))for(var A=w.next(),M=0;!A.done;A=w.next()){if(!V8(A.value,M))break r;M++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',i);if(Ag(r,o,t,g),pr?(Lv(),t=d1):t=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ZO(r,g,o);else if(r.tag===19)ZO(r,g,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break r;for(;r.sibling===null;){if(r.return===null||r.return===o)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(i){case"forwards":g=o.child;for(i=null;g!==null;)r=g.alternate,r!==null&&At(r)===null&&(i=g),g=g.sibling;g=i,g===null?(i=o.child,o.child=null):(i=g.sibling,g.sibling=null),l2(o,!1,i,g,h,t);break;case"backwards":case"unstable_legacy-backwards":g=null,i=o.child;for(o.child=null;i!==null;){if(r=i.alternate,r!==null&&At(r)===null){o.child=i;break}r=i.sibling,i.sibling=g,g=i,i=r}l2(o,!0,g,null,h,t);break;case"together":l2(o,!1,null,null,void 0,t);break;default:o.memoizedState=null}return o.child}function jl(r,o,g){if(r!==null&&(o.dependencies=r.dependencies),Zg=-1,i0|=o.lanes,(g&o.childLanes)===0)if(r!==null){if(ki(r,o,g,!1),(g&o.childLanes)===0)return null}else return null;if(r!==null&&o.child!==r.child)throw Error("Resuming work not yet implemented.");if(o.child!==null){r=o.child,g=cl(r,r.pendingProps),o.child=g;for(g.return=o;r.sibling!==null;)r=r.sibling,g=g.sibling=cl(r,r.pendingProps),g.return=o;g.sibling=null}return o.child}function v2(r,o){if((r.lanes&o)!==0)return!0;return r=r.dependencies,r!==null&&vt(r)?!0:!1}function JG(r,o,g){switch(o.tag){case 3:k(o,o.stateNode.containerInfo),Fv(o,fo,r.memoizedState.cache),D0();break;case 27:case 5:Qr(o);break;case 4:k(o,o.stateNode.containerInfo);break;case 10:Fv(o,o.type,o.memoizedProps.value);break;case 12:(g&o.childLanes)!==0&&(o.flags|=4),o.flags|=2048;var l=o.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(o.memoizedState!==null)return o.flags|=128,W5(o),null;break;case 13:if(l=o.memoizedState,l!==null){if(l.dehydrated!==null)return Zv(o),o.flags|=128,null;if((g&o.child.childLanes)!==0)return BO(r,o,g);return Zv(o),r=jl(r,o,g),r!==null?r.sibling:null}Zv(o);break;case 19:var i=(r.flags&128)!==0;if(l=(g&o.childLanes)!==0,l||(ki(r,o,g,!1),l=(g&o.childLanes)!==0),i){if(l)return CO(r,o,g);o.flags|=128}if(i=o.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),mr(Vo,Vo.current,o),l)break;else return null;case 22:return o.lanes=0,$O(r,o,g,o.pendingProps);case 24:Fv(o,fo,r.memoizedState.cache)}return jl(r,o,g)}function i2(r,o,g){if(o._debugNeedsRemount&&r!==null){g=g5(o.type,o.key,o.pendingProps,o._debugOwner||null,o.mode,o.lanes),g._debugStack=o._debugStack,g._debugTask=o._debugTask;var l=o.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,o.alternate=null,g.index=o.index,g.sibling=o.sibling,g.return=o.return,g.ref=o.ref,g._debugInfo=o._debugInfo,o===l.child)l.child=g;else{var i=l.child;if(i===null)throw Error("Expected parent to have a child.");for(;i.sibling!==o;)if(i=i.sibling,i===null)throw Error("Expected to find the previous sibling.");i.sibling=g}return o=l.deletions,o===null?(l.deletions=[r],l.flags|=16):o.push(r),g.flags|=2,g}if(r!==null)if(r.memoizedProps!==o.pendingProps||o.type!==r.type)so=!0;else{if(!v2(r,g)&&(o.flags&128)===0)return so=!1,JG(r,o,g);so=(r.flags&131072)!==0?!0:!1}else{if(so=!1,l=pr)Lv(),l=(o.flags&1048576)!==0;l&&(l=o.index,Lv(),X8(o,d1,l))}switch(o.lanes=0,o.tag){case 16:r:if(l=o.pendingProps,r=xv(o.elementType),o.type=r,typeof r==="function")o5(r)?(l=a0(r,l),o.tag=1,o.type=r=S0(r),o=xO(null,o,r,l,g)):(o.tag=0,s5(o,r),o.type=r=S0(r),o=d5(null,o,r,l,g));else{if(r!==void 0&&r!==null){if(i=r.$$typeof,i===S1){o.tag=11,o.type=r=r5(r),o=zO(null,o,r,l,g);break r}else if(i===dt){o.tag=14,o=UO(null,o,r,l,g);break r}}throw o="",r!==null&&typeof r==="object"&&r.$$typeof===te&&(o=" Did you wrap a component in React.lazy() more than once?"),g=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+g+". Lazy element type must resolve to a class or function."+o)}return o;case 0:return d5(r,o,o.type,o.pendingProps,g);case 1:return l=o.type,i=a0(l,o.pendingProps),xO(r,o,l,i,g);case 3:r:{if(k(o,o.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=o.pendingProps;var h=o.memoizedState;i=h.element,q5(r,o),R1(o,l,null,g);var t=o.memoizedState;if(l=t.cache,Fv(o,fo,l),l!==h.cache&&t5(o,[fo],g,!0),M1(),l=t.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:t.cache},o.updateQueue.baseState=h,o.memoizedState=h,o.flags&256){o=NO(r,o,l,g);break r}else if(l!==i){i=le(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),o),w1(i),o=NO(r,o,l,g);break r}else{switch(r=o.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Qo=be(r.firstChild),Rg=o,pr=!0,pv=null,$l=!1,Pe=null,Le=!0,g=pq(o,null,l,g);for(o.child=g;g;)g.flags=g.flags&-3|4096,g=g.sibling}else{if(D0(),l===i){o=jl(r,o,g);break r}Ag(r,o,l,g)}o=o.child}return o;case 26:return Lt(r,o),r===null?(g=bA(o.type,null,o.pendingProps,null))?o.memoizedState=g:pr||(g=o.type,r=o.pendingProps,l=Br(_v.current),l=Dt(l).createElement(g),l[Mg]=o,l[xg]=r,qg(l,g,r),Yr(l),o.stateNode=l):o.memoizedState=bA(o.type,r.memoizedProps,o.pendingProps,r.memoizedState),null;case 27:return Qr(o),r===null&&pr&&(l=Br(_v.current),i=vr(),l=o.stateNode=hA(o.type,o.pendingProps,l,i,!1),$l||(i=fH(l,o.type,o.pendingProps,i),i!==null&&(k0(o,0).serverProps=i)),Rg=o,Le=!0,i=Qo,Dv(o.type)?(O6=i,Qo=be(l.firstChild)):Qo=i),Ag(r,o,o.pendingProps.children,g),Lt(r,o),r===null&&(o.flags|=4194304),o.child;case 5:return r===null&&pr&&(h=vr(),l=cw(o.type,h.ancestorInfo),i=Qo,(t=!i)||(t=PX(i,o.type,o.pendingProps,Le),t!==null?(o.stateNode=t,$l||(h=fH(t,o.type,o.pendingProps,h),h!==null&&(k0(o,0).serverProps=h)),Rg=o,Qo=be(t.firstChild),Le=!1,h=!0):h=!1,t=!h),t&&(l&&et(o,i),Iv(o))),Qr(o),i=o.type,h=o.pendingProps,t=r!==null?r.memoizedProps:null,l=h.children,L2(i,h)?l=null:t!==null&&L2(i,t)&&(o.flags|=32),o.memoizedState!==null&&(i=G5(r,o,qG,null,null,g),In._currentValue=i),Lt(r,o),Ag(r,o,l,g),o.child;case 6:return r===null&&pr&&(g=o.pendingProps,r=vr(),l=r.ancestorInfo.current,g=l!=null?Eb(g,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Qo,(l=!r)||(l=OX(r,o.pendingProps,Le),l!==null?(o.stateNode=l,Rg=o,Qo=null,l=!0):l=!1,l=!l),l&&(g&&et(o,r),Iv(o))),null;case 13:return BO(r,o,g);case 4:return k(o,o.stateNode.containerInfo),l=o.pendingProps,r===null?o.child=hi(o,null,l,g):Ag(r,o,l,g),o.child;case 11:return zO(r,o,o.type,o.pendingProps,g);case 7:return Ag(r,o,o.pendingProps,g),o.child;case 8:return Ag(r,o,o.pendingProps.children,g),o.child;case 12:return o.flags|=4,o.flags|=2048,l=o.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,Ag(r,o,o.pendingProps.children,g),o.child;case 10:return l=o.type,i=o.pendingProps,h=i.value,"value"in i||XM||(XM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fv(o,l,h),Ag(r,o,i.children,g),o.child;case 9:return i=o.type._context,l=o.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V0(o),i=Ko(i),l=I4(l,i,void 0),o.flags|=1,Ag(r,o,l,g),o.child;case 14:return UO(r,o,o.type,o.pendingProps,g);case 15:return KO(r,o,o.type,o.pendingProps,g);case 19:return CO(r,o,g);case 31:return YG(r,o,g);case 22:return $O(r,o,g,o.pendingProps);case 24:return V0(o),l=Ko(fo),r===null?(i=O5(),i===null&&(i=Mo,h=u5(),i.pooledCache=h,_0(h),h!==null&&(i.pooledCacheLanes|=g),i=h),o.memoizedState={parent:l,cache:i},A5(o),Fv(o,fo,i)):((r.lanes&g)!==0&&(q5(r,o),R1(o,null,null,g),M1()),i=r.memoizedState,h=o.memoizedState,i.parent!==l?(i={parent:l,cache:l},o.memoizedState=i,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=i),Fv(o,fo,l)):(l=h.cache,Fv(o,fo,l),l!==i.cache&&t5(o,[fo],g,!0))),Ag(r,o,o.pendingProps.children,g),o.child;case 29:throw o.pendingProps}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function pl(r){r.flags|=4}function h2(r,o,g,l,i){if(o=(r.mode&yY)!==Ur)o=!1;if(o){if(r.flags|=16777216,(i&335544128)===i)if(r.stateNode.complete)r.flags|=8192;else if(qH())r.flags|=8192;else throw ii=Yu,x4}else r.flags&=-16777217}function SO(r,o){if(o.type!=="stylesheet"||(o.state.loading&Be)!==Mi)r.flags&=-16777217;else if(r.flags|=16777216,!OA(o))if(qH())r.flags|=8192;else throw ii=Yu,x4}function Ft(r,o){o!==null&&(r.flags|=4),r.flags&16384&&(o=r.tag!==22?Ni():536870912,r.lanes|=o,wi|=o)}function Y1(r,o){if(!pr)switch(r.tailMode){case"hidden":o=r.tail;for(var g=null;o!==null;)o.alternate!==null&&(g=o),o=o.sibling;g===null?r.tail=null:g.sibling=null;break;case"collapsed":g=r.tail;for(var l=null;g!==null;)g.alternate!==null&&(l=g),g=g.sibling;l===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function mo(r){var o=r.alternate!==null&&r.alternate.child===r.child,g=0,l=0;if(o)if((r.mode&kr)!==Ur){for(var{selfBaseDuration:i,child:h}=r;h!==null;)g|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,i+=h.treeBaseDuration,h=h.sibling;r.treeBaseDuration=i}else for(i=r.child;i!==null;)g|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=r,i=i.sibling;else if((r.mode&kr)!==Ur){i=r.actualDuration,h=r.selfBaseDuration;for(var t=r.child;t!==null;)g|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,i+=t.actualDuration,h+=t.treeBaseDuration,t=t.sibling;r.actualDuration=i,r.treeBaseDuration=h}else for(i=r.child;i!==null;)g|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=l,r.childLanes=g,o}function QG(r,o,g){var l=o.pendingProps;switch(i5(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mo(o),null;case 1:return mo(o),null;case 3:if(g=o.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),o.memoizedState.cache!==l&&(o.flags|=2048),al(fo,o),s(o),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),r===null||r.child===null)Ti(o)?(n5(),pl(o)):r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,h5());return mo(o),null;case 26:var{type:i,memoizedState:h}=o;return r===null?(pl(o),h!==null?(mo(o),SO(o,h)):(mo(o),h2(o,i,null,l,g))):h?h!==r.memoizedState?(pl(o),mo(o),SO(o,h)):(mo(o),o.flags&=-16777217):(r=r.memoizedProps,r!==l&&pl(o),mo(o),h2(o,i,r,l,g)),null;case 27:if(Gr(o),g=Br(_v.current),i=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mo(o),null}r=vr(),Ti(o)?z8(o,r):(r=hA(i,l,g,r,!0),o.stateNode=r,pl(o))}return mo(o),null;case 5:if(Gr(o),i=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mo(o),null}var t=vr();if(Ti(o))z8(o,t);else{switch(h=Br(_v.current),cw(i,t.ancestorInfo),t=t.context,h=Dt(h),t){case Bh:h=h.createElementNS(ih,i);break;case ju:h=h.createElementNS(vu,i);break;default:switch(i){case"svg":h=h.createElementNS(ih,i);break;case"math":h=h.createElementNS(vu,i);break;case"script":h=h.createElement("div"),h.innerHTML="<script></script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is==="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is==="string"?h.createElement(i,{is:l.is}):h.createElement(i),i.indexOf("-")===-1&&(i!==i.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",i),Object.prototype.toString.call(h)!=="[object HTMLUnknownElement]"||Ve.call(EM,i)||(EM[i]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",i)))}}h[Mg]=o,h[xg]=l;r:for(t=o.child;t!==null;){if(t.tag===5||t.tag===6)h.appendChild(t.stateNode);else if(t.tag!==4&&t.tag!==27&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===o)break r;for(;t.sibling===null;){if(t.return===null||t.return===o)break r;t=t.return}t.sibling.return=t.return,t=t.sibling}o.stateNode=h;r:switch(qg(h,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&pl(o)}}return mo(o),h2(o,o.type,r===null?null:r.memoizedProps,o.pendingProps,g),null;case 6:if(r&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(typeof l!=="string"&&o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Br(_v.current),g=vr(),Ti(o)){if(r=o.stateNode,g=o.memoizedProps,i=!$l,l=null,h=Rg,h!==null)switch(h.tag){case 3:i&&(i=vA(r,g,l),i!==null&&(k0(o,0).serverProps=i));break;case 27:case 5:l=h.memoizedProps,i&&(i=vA(r,g,l),i!==null&&(k0(o,0).serverProps=i))}r[Mg]=o,r=r.nodeValue===g||l!==null&&l.suppressHydrationWarning===!0||_H(r.nodeValue,g)?!0:!1,r||Iv(o,!0)}else i=g.ancestorInfo.current,i!=null&&Eb(l,i.tag,g.ancestorInfo.implicitRootScope),r=Dt(r).createTextNode(l),r[Mg]=o,o.stateNode=r}return mo(o),null;case 31:if(g=o.memoizedState,r===null||r.memoizedState!==null){if(l=Ti(o),g!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=o.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Mg]=o,mo(o),(o.mode&kr)!==Ur&&g!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration))}else n5(),D0(),(o.flags&128)===0&&(g=o.memoizedState=null),o.flags|=4,mo(o),(o.mode&kr)!==Ur&&g!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration));r=!1}else g=h5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=g),r=!0;if(!r){if(o.flags&256)return he(o),o;return he(o),null}if((o.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return mo(o),null;case 13:if(l=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(i=l,h=Ti(o),i!==null&&i.dehydrated!==null){if(r===null){if(!h)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(h=o.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");h[Mg]=o,mo(o),(o.mode&kr)!==Ur&&i!==null&&(i=o.child,i!==null&&(o.treeBaseDuration-=i.treeBaseDuration))}else n5(),D0(),(o.flags&128)===0&&(i=o.memoizedState=null),o.flags|=4,mo(o),(o.mode&kr)!==Ur&&i!==null&&(i=o.child,i!==null&&(o.treeBaseDuration-=i.treeBaseDuration));i=!1}else i=h5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=i),i=!0;if(!i){if(o.flags&256)return he(o),o;return he(o),null}}if(he(o),(o.flags&128)!==0)return o.lanes=g,(o.mode&kr)!==Ur&&H1(o),o;return g=l!==null,r=r!==null&&r.memoizedState!==null,g&&(l=o.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==i&&(l.flags|=2048)),g!==r&&g&&(o.child.flags|=8192),Ft(o,o.updateQueue),mo(o),(o.mode&kr)!==Ur&&g&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(o),r===null&&Y2(o.stateNode.containerInfo),mo(o),null;case 10:return al(o.type,o),mo(o),null;case 19:if(Ar(Vo,o),l=o.memoizedState,l===null)return mo(o),null;if(i=(o.flags&128)!==0,h=l.rendering,h===null)if(i)Y1(l,!1);else{if(Fo!==wv||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(h=At(r),h!==null){o.flags|=128,Y1(l,!1),r=h.updateQueue,o.updateQueue=r,Ft(o,r),o.subtreeFlags=0,r=g;for(g=o.child;g!==null;)m8(g,r),g=g.sibling;return mr(Vo,Vo.current&Yh|On,o),pr&&El(o,l.treeForkCount),o.child}r=r.sibling}l.tail!==null&&ng()>Zu&&(o.flags|=128,i=!0,Y1(l,!1),o.lanes=4194304)}else{if(!i)if(r=At(h),r!==null){if(o.flags|=128,i=!0,r=r.updateQueue,o.updateQueue=r,Ft(o,r),Y1(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!pr)return mo(o),null}else 2*ng()-l.renderingStartTime>Zu&&g!==536870912&&(o.flags|=128,i=!0,Y1(l,!1),o.lanes=4194304);l.isBackwards?(h.sibling=o.child,o.child=h):(r=l.last,r!==null?r.sibling=h:o.child=h,l.last=h)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=ng(),r.sibling=null,g=Vo.current,g=i?g&Yh|On:g&Yh,mr(Vo,g,o),pr&&El(o,l.treeForkCount),r;return mo(o),null;case 22:case 23:return he(o),R5(o),l=o.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(o.flags|=8192):l&&(o.flags|=8192),l?(g&536870912)!==0&&(o.flags&128)===0&&(mo(o),o.subtreeFlags&6&&(o.flags|=8192)):mo(o),g=o.updateQueue,g!==null&&Ft(o,g.retryQueue),g=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(g=r.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==g&&(o.flags|=2048),r!==null&&Ar(li,o),null;case 24:return g=null,r!==null&&(g=r.memoizedState.cache),o.memoizedState.cache!==g&&(o.flags|=2048),al(fo,o),mo(o),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function zG(r,o){switch(i5(o),o.tag){case 1:return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&H1(o),o):null;case 3:return al(fo,o),s(o),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 26:case 27:case 5:return Gr(o),null;case 31:if(o.memoizedState!==null){if(he(o),o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&H1(o),o):null;case 13:if(he(o),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&H1(o),o):null;case 19:return Ar(Vo,o),null;case 4:return s(o),null;case 10:return al(o.type,o),null;case 22:case 23:return he(o),R5(o),r!==null&&Ar(li,o),r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&H1(o),o):null;case 24:return al(fo,o),null;case 25:return null;default:return null}}function TO(r,o){switch(i5(o),o.tag){case 3:al(fo,o),s(o);break;case 26:case 27:case 5:Gr(o);break;case 4:s(o);break;case 31:o.memoizedState!==null&&he(o);break;case 13:he(o);break;case 19:Ar(Vo,o);break;case 10:al(o.type,o);break;case 22:case 23:he(o),R5(o),r!==null&&Ar(li,o);break;case 24:al(fo,o)}}function ql(r){return(r.mode&kr)!==Ur}function kO(r,o){ql(r)?(Al(),J1(o,r),Hl()):J1(o,r)}function n2(r,o,g){ql(r)?(Al(),ci(g,r,o),Hl()):ci(g,r,o)}function J1(r,o){try{var g=o.updateQueue,l=g!==null?g.lastEffect:null;if(l!==null){var i=l.next;g=i;do{if((g.tag&r)===r&&(l=void 0,(r&Cg)!==Qu&&(Fh=!0),l=nr(o,jY,g),(r&Cg)!==Qu&&(Fh=!1),l!==void 0&&typeof l!=="function")){var h=void 0;h=(g.tag&He)!==0?"useLayoutEffect":(g.tag&Cg)!==0?"useInsertionEffect":"useEffect";var t=void 0;t=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+h+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+h+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,nr(o,function(w,A){console.error("%s must not return anything besides a function, which is used for clean-up.%s",w,A)},h,t)}g=g.next}while(g!==i)}}catch(w){ho(o,o.return,w)}}function ci(r,o,g){try{var l=o.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var h=i.next;l=h;do{if((l.tag&r)===r){var t=l.inst,w=t.destroy;w!==void 0&&(t.destroy=void 0,(r&Cg)!==Qu&&(Fh=!0),i=o,nr(i,pY,i,g,w),(r&Cg)!==Qu&&(Fh=!1))}l=l.next}while(l!==h)}}catch(A){ho(o,o.return,A)}}function DO(r,o){ql(r)?(Al(),J1(o,r),Hl()):J1(o,r)}function b2(r,o,g){ql(r)?(Al(),ci(g,r,o),Hl()):ci(g,r,o)}function VO(r){var o=r.updateQueue;if(o!==null){var g=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Uh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{nr(r,y8,o,g)}catch(l){ho(r,r.return,l)}}}function UG(r,o,g){return r.getSnapshotBeforeUpdate(o,g)}function KG(r,o){var{memoizedProps:g,memoizedState:l}=o;o=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Uh||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{var i=a0(r.type,g),h=nr(r,UG,o,i,l);g=YM,h!==void 0||g.has(r.type)||(g.add(r.type),nr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",C(r))})),o.__reactInternalSnapshotBeforeUpdate=h}catch(t){ho(r,r.return,t)}}function _O(r,o,g){g.props=a0(r.type,r.memoizedProps),g.state=r.memoizedState,ql(r)?(Al(),nr(r,Vq,r,o,g),Hl()):nr(r,Vq,r,o,g)}function $G(r){var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var g=r.stateNode;break;case 30:g=r.stateNode;break;default:g=r.stateNode}if(typeof o==="function")if(ql(r))try{Al(),r.refCleanup=o(g)}finally{Hl()}else r.refCleanup=o(g);else typeof o==="string"?console.error("String refs are no longer supported."):o.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",C(r)),o.current=g}}function Q1(r,o){try{nr(r,$G,r)}catch(g){ho(r,o,g)}}function Ml(r,o){var{ref:g,refCleanup:l}=r;if(g!==null)if(typeof l==="function")try{if(ql(r))try{Al(),nr(r,l)}finally{Hl(r)}else nr(r,l)}catch(i){ho(r,o,i)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof g==="function")try{if(ql(r))try{Al(),nr(r,g,null)}finally{Hl(r)}else nr(r,g,null)}catch(i){ho(r,o,i)}else g.current=null}function yO(r,o,g,l){var i=r.memoizedProps,h=i.id,t=i.onCommit;i=i.onRender,o=o===null?"mount":"update",Wu&&(o="nested-update"),typeof i==="function"&&i(h,o,r.actualDuration,r.treeBaseDuration,r.actualStartTime,g),typeof t==="function"&&t(h,o,l,g)}function LG(r,o,g,l){var i=r.memoizedProps;r=i.id,i=i.onPostCommit,o=o===null?"mount":"update",Wu&&(o="nested-update"),typeof i==="function"&&i(r,o,l,g)}function cO(r){var{type:o,memoizedProps:g,stateNode:l}=r;try{nr(r,oX,l,o,g,r)}catch(i){ho(r,r.return,i)}}function t2(r,o,g){try{nr(r,eX,r.stateNode,r.type,g,o,r)}catch(l){ho(r,r.return,l)}}function EO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Dv(r.type)||r.tag===4}function u2(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||EO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Dv(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function w2(r,o,g){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?(rA(g),(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g).insertBefore(r,o)):(rA(g),o=g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g,o.appendChild(r),g=g._reactRootContainer,g!==null&&g!==void 0||o.onclick!==null||(o.onclick=yl));else if(l!==4&&(l===27&&Dv(r.type)&&(g=r.stateNode,o=null),r=r.child,r!==null))for(w2(r,o,g),r=r.sibling;r!==null;)w2(r,o,g),r=r.sibling}function xt(r,o,g){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?g.insertBefore(r,o):g.appendChild(r);else if(l!==4&&(l===27&&Dv(r.type)&&(g=r.stateNode),r=r.child,r!==null))for(xt(r,o,g),r=r.sibling;r!==null;)xt(r,o,g),r=r.sibling}function IG(r){for(var o,g=r.return;g!==null;){if(EO(g)){o=g;break}g=g.return}if(o==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(o.tag){case 27:o=o.stateNode,g=u2(r),xt(r,g,o);break;case 5:g=o.stateNode,o.flags&32&&(sH(g),o.flags&=-33),o=u2(r),xt(r,o,g);break;case 3:case 4:o=o.stateNode.containerInfo,g=u2(r),w2(r,g,o);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function aO(r){var{stateNode:o,memoizedProps:g}=r;try{nr(r,RX,r.type,g,o,r)}catch(l){ho(r,r.return,l)}}function fO(r,o){return o.tag===31?(o=o.memoizedState,r.memoizedState!==null&&o===null):o.tag===13?(r=r.memoizedState,o=o.memoizedState,r!==null&&r.dehydrated!==null&&(o===null||o.dehydrated===null)):o.tag===3?r.memoizedState.isDehydrated&&(o.flags&256)===0:!1}function FG(r,o){if(r=r.containerInfo,u6=rw,r=u8(r),fw(r)){if("selectionStart"in r)var g={start:r.selectionStart,end:r.selectionEnd};else r:{g=(g=r.ownerDocument)&&g.defaultView||window;var l=g.getSelection&&g.getSelection();if(l&&l.rangeCount!==0){g=l.anchorNode;var{anchorOffset:i,focusNode:h}=l;l=l.focusOffset;try{g.nodeType,h.nodeType}catch(ir){g=null;break r}var t=0,w=-1,A=-1,M=0,K=0,$=r,J=null;o:for(;;){for(var x;;){if($!==g||i!==0&&$.nodeType!==3||(w=t+i),$!==h||l!==0&&$.nodeType!==3||(A=t+l),$.nodeType===3&&(t+=$.nodeValue.length),(x=$.firstChild)===null)break;J=$,$=x}for(;;){if($===r)break o;if(J===g&&++M===i&&(w=t),J===h&&++K===l&&(A=t),(x=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=x}g=w===-1||A===-1?null:{start:w,end:A}}else g=null}g=g||{start:0,end:0}}else g=null;w6={focusedElem:r,selectionRange:g},rw=!1;for(tg=o;tg!==null;)if(o=tg,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,tg=r;else for(;tg!==null;){switch(r=o=tg,g=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(g=0;g<r.length;g++)i=r[g],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:(i&1024)!==0&&g!==null&&KG(r,g);break;case 3:if((i&1024)!==0){if(r=r.stateNode.containerInfo,g=r.nodeType,g===9)I2(r);else if(g===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":I2(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=o.sibling,r!==null){r.return=o.return,tg=r;break}tg=o.return}}function jO(r,o,g){var l=ve(),i=ul(),h=Pl(),t=Ol(),w=g.flags;switch(g.tag){case 0:case 11:case 15:Rl(r,g),w&4&&kO(g,He|xe);break;case 1:if(Rl(r,g),w&4)if(r=g.stateNode,o===null)g.type.defaultProps||"ref"in g.memoizedProps||Uh||(r.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(g)||"instance"),r.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(g)||"instance")),ql(g)?(Al(),nr(g,F4,g,r),Hl()):nr(g,F4,g,r);else{var A=a0(g.type,o.memoizedProps);o=o.memoizedState,g.type.defaultProps||"ref"in g.memoizedProps||Uh||(r.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(g)||"instance"),r.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(g)||"instance")),ql(g)?(Al(),nr(g,Tq,g,r,A,o,r.__reactInternalSnapshotBeforeUpdate),Hl()):nr(g,Tq,g,r,A,o,r.__reactInternalSnapshotBeforeUpdate)}w&64&&VO(g),w&512&&Q1(g,g.return);break;case 3:if(o=fl(),Rl(r,g),w&64&&(w=g.updateQueue,w!==null)){if(A=null,g.child!==null)switch(g.child.tag){case 27:case 5:A=g.child.stateNode;break;case 1:A=g.child.stateNode}try{nr(g,y8,w,A)}catch(K){ho(g,g.return,K)}}r.effectDuration+=ht(o);break;case 27:o===null&&w&4&&aO(g);case 26:case 5:if(Rl(r,g),o===null){if(w&4)cO(g);else if(w&64){r=g.type,o=g.memoizedProps,A=g.stateNode;try{nr(g,gX,A,r,o,g)}catch(K){ho(g,g.return,K)}}}w&512&&Q1(g,g.return);break;case 12:if(w&4){w=fl(),Rl(r,g),r=g.stateNode,r.effectDuration+=O1(w);try{nr(g,yO,g,o,dv,r.effectDuration)}catch(K){ho(g,g.return,K)}}else Rl(r,g);break;case 31:Rl(r,g),w&4&&sO(r,g);break;case 13:Rl(r,g),w&4&&rH(r,g),w&64&&(r=g.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(w=DG.bind(null,g),HX(r,w))));break;case 22:if(w=g.memoizedState!==null||uv,!w){o=o!==null&&o.memoizedState!==null||rg,A=uv;var M=rg;uv=w,(rg=o)&&!M?(Wl(r,g,(g.subtreeFlags&8772)!==0),(g.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&pb(g,Jr,zr)):Rl(r,g),uv=A,rg=M}break;case 30:break;default:Rl(r,g)}(g.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bo||0.05<Io)&&bl(g,Jr,zr,Io,$o),g.alternate===null&&g.return!==null&&g.return.alternate!==null&&0.05<zr-Jr&&(fO(g.return.alternate,g.return)||nl(g,Jr,zr,"Mount"))),ie(l),wl(i),$o=h,Bo=t}function pO(r){var o=r.alternate;o!==null&&(r.alternate=null,pO(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&br(o)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dl(r,o,g){for(g=g.child;g!==null;)dO(r,o,g),g=g.sibling}function dO(r,o,g){if(zg&&typeof zg.onCommitFiberUnmount==="function")try{zg.onCommitFiberUnmount(lh,g)}catch(M){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",M))}var l=ve(),i=ul(),h=Pl(),t=Ol();switch(g.tag){case 26:rg||Ml(g,o),dl(r,o,g),g.memoizedState?g.memoizedState.count--:g.stateNode&&(r=g.stateNode,r.parentNode.removeChild(r));break;case 27:rg||Ml(g,o);var w=og,A=jg;Dv(g.type)&&(og=g.stateNode,jg=!1),dl(r,o,g),nr(g,N1,g.stateNode),og=w,jg=A;break;case 5:rg||Ml(g,o);case 6:if(w=og,A=jg,og=null,dl(r,o,g),og=w,jg=A,og!==null)if(jg)try{nr(g,iX,og,g.stateNode)}catch(M){ho(g,o,M)}else try{nr(g,vX,og,g.stateNode)}catch(M){ho(g,o,M)}break;case 18:og!==null&&(jg?(r=og,oA(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,g.stateNode),rh(r)):oA(og,g.stateNode));break;case 4:w=og,A=jg,og=g.stateNode.containerInfo,jg=!0,dl(r,o,g),og=w,jg=A;break;case 0:case 11:case 14:case 15:ci(Cg,g,o),rg||n2(g,o,He),dl(r,o,g);break;case 1:rg||(Ml(g,o),w=g.stateNode,typeof w.componentWillUnmount==="function"&&_O(g,o,w)),dl(r,o,g);break;case 21:dl(r,o,g);break;case 22:rg=(w=rg)||g.memoizedState!==null,dl(r,o,g),rg=w;break;default:dl(r,o,g)}(g.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(g,Jr,zr,Io,$o),ie(l),wl(i),$o=h,Bo=t}function sO(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{nr(o,qX,r)}catch(g){ho(o,o.return,g)}}}function rH(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{nr(o,MX,r)}catch(g){ho(o,o.return,g)}}function xG(r){switch(r.tag){case 31:case 13:case 19:var o=r.stateNode;return o===null&&(o=r.stateNode=new JM),o;case 22:return r=r.stateNode,o=r._retryCache,o===null&&(o=r._retryCache=new JM),o;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Nt(r,o){var g=xG(r);o.forEach(function(l){if(!g.has(l)){if(g.add(l),zl)if(Kh!==null&&$h!==null)$1($h,Kh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var i=VG.bind(null,r,l);l.then(i,i)}})}function ag(r,o){var g=o.deletions;if(g!==null)for(var l=0;l<g.length;l++){var i=r,h=o,t=g[l],w=ve(),A=h;r:for(;A!==null;){switch(A.tag){case 27:if(Dv(A.type)){og=A.stateNode,jg=!1;break r}break;case 5:og=A.stateNode,jg=!1;break r;case 3:case 4:og=A.stateNode.containerInfo,jg=!0;break r}A=A.return}if(og===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");dO(i,h,t),og=null,jg=!1,(t.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&nl(t,Jr,zr,"Unmount"),ie(w),i=t,h=i.alternate,h!==null&&(h.return=null),i.return=null}if(o.subtreeFlags&13886)for(o=o.child;o!==null;)oH(o,r),o=o.sibling}function oH(r,o){var g=ve(),l=ul(),i=Pl(),h=Ol(),t=r.alternate,w=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:ag(o,r),fg(r),w&4&&(ci(Cg|xe,r,r.return),J1(Cg|xe,r),n2(r,r.return,He|xe));break;case 1:if(ag(o,r),fg(r),w&512&&(rg||t===null||Ml(t,t.return)),w&64&&uv&&(w=r.updateQueue,w!==null&&(t=w.callbacks,t!==null))){var A=w.shared.hiddenCallbacks;w.shared.hiddenCallbacks=A===null?t:A.concat(t)}break;case 26:if(A=ae,ag(o,r),fg(r),w&512&&(rg||t===null||Ml(t,t.return)),w&4){var M=t!==null?t.memoizedState:null;if(w=r.memoizedState,t===null)if(w===null)if(r.stateNode===null){r:{w=r.type,t=r.memoizedProps,A=A.ownerDocument||A;o:switch(w){case"title":if(M=A.getElementsByTagName("title")[0],!M||M[D1]||M[Mg]||M.namespaceURI===ih||M.hasAttribute("itemprop"))M=A.createElement(w),A.head.insertBefore(M,A.querySelector("head > title"));qg(M,w,t),M[Mg]=r,Yr(M),w=M;break r;case"link":var K=wA("link","href",A).get(w+(t.href||""));if(K){for(var $=0;$<K.length;$++)if(M=K[$],M.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&M.getAttribute("rel")===(t.rel==null?null:t.rel)&&M.getAttribute("title")===(t.title==null?null:t.title)&&M.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){K.splice($,1);break o}}M=A.createElement(w),qg(M,w,t),A.head.appendChild(M);break;case"meta":if(K=wA("meta","content",A).get(w+(t.content||""))){for($=0;$<K.length;$++)if(M=K[$],wo(t.content,"content"),M.getAttribute("content")===(t.content==null?null:""+t.content)&&M.getAttribute("name")===(t.name==null?null:t.name)&&M.getAttribute("property")===(t.property==null?null:t.property)&&M.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&M.getAttribute("charset")===(t.charSet==null?null:t.charSet)){K.splice($,1);break o}}M=A.createElement(w),qg(M,w,t),A.head.appendChild(M);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+w+'". This is a bug in React.')}M[Mg]=r,Yr(M),w=M}r.stateNode=w}else PA(A,r.type,r.stateNode);else r.stateNode=uA(A,w,r.memoizedProps);else M!==w?(M===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):M.count--,w===null?PA(A,r.type,r.stateNode):uA(A,w,r.memoizedProps)):w===null&&r.stateNode!==null&&t2(r,r.memoizedProps,t.memoizedProps)}break;case 27:ag(o,r),fg(r),w&512&&(rg||t===null||Ml(t,t.return)),t!==null&&w&4&&t2(r,r.memoizedProps,t.memoizedProps);break;case 5:if(ag(o,r),fg(r),w&512&&(rg||t===null||Ml(t,t.return)),r.flags&32){A=r.stateNode;try{nr(r,sH,A)}catch(Pr){ho(r,r.return,Pr)}}w&4&&r.stateNode!=null&&(A=r.memoizedProps,t2(r,A,t!==null?t.memoizedProps:A)),w&1024&&(c4=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(ag(o,r),fg(r),w&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");w=r.memoizedProps,t=t!==null?t.memoizedProps:w,A=r.stateNode;try{nr(r,lX,A,t,w)}catch(Pr){ho(r,r.return,Pr)}}break;case 3:if(A=fl(),pu=null,M=ae,ae=Vt(o.containerInfo),ag(o,r),ae=M,fg(r),w&4&&t!==null&&t.memoizedState.isDehydrated)try{nr(r,AX,o.containerInfo)}catch(Pr){ho(r,r.return,Pr)}c4&&(c4=!1,gH(r)),o.effectDuration+=ht(A);break;case 4:w=ae,ae=Vt(r.stateNode.containerInfo),ag(o,r),fg(r),ae=w;break;case 12:w=fl(),ag(o,r),fg(r),r.stateNode.effectDuration+=O1(w);break;case 31:ag(o,r),fg(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nt(r,w)));break;case 13:ag(o,r),fg(r),r.child.flags&8192&&r.memoizedState!==null!==(t!==null&&t.memoizedState!==null)&&(Bu=ng()),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nt(r,w)));break;case 22:A=r.memoizedState!==null;var J=t!==null&&t.memoizedState!==null,x=uv,ir=rg;if(uv=x||A,rg=ir||J,ag(o,r),rg=ir,uv=x,J&&!A&&!x&&!ir&&(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&pb(r,Jr,zr),fg(r),w&8192)r:for(o=r.stateNode,o._visibility=A?o._visibility&~p1:o._visibility|p1,!A||t===null||J||uv||rg||(f0(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&nl(r,Jr,zr,"Disconnect")),t=null,o=r;;){if(o.tag===5||o.tag===26){if(t===null){J=t=o;try{M=J.stateNode,A?nr(J,nX,M):nr(J,uX,J.stateNode,J.memoizedProps)}catch(Pr){ho(J,J.return,Pr)}}}else if(o.tag===6){if(t===null){J=o;try{K=J.stateNode,A?nr(J,bX,K):nr(J,wX,K,J.memoizedProps)}catch(Pr){ho(J,J.return,Pr)}}}else if(o.tag===18){if(t===null){J=o;try{$=J.stateNode,A?nr(J,hX,$):nr(J,tX,J.stateNode)}catch(Pr){ho(J,J.return,Pr)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===r)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break r;for(;o.sibling===null;){if(o.return===null||o.return===r)break r;t===o&&(t=null),o=o.return}t===o&&(t=null),o.sibling.return=o.return,o=o.sibling}w&4&&(w=r.updateQueue,w!==null&&(t=w.retryQueue,t!==null&&(w.retryQueue=null,Nt(r,t))));break;case 19:ag(o,r),fg(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nt(r,w)));break;case 30:break;case 21:break;default:ag(o,r),fg(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bo||0.05<Io)&&bl(r,Jr,zr,Io,$o),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<zr-Jr&&(fO(r.return.alternate,r.return)||nl(r,Jr,zr,"Mount"))),ie(g),wl(l),$o=i,Bo=h}function fg(r){var o=r.flags;if(o&2){try{nr(r,IG,r)}catch(g){ho(r,r.return,g)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function gH(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var o=r;gH(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),r=r.sibling}}function Rl(r,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)jO(r,o.alternate,o),o=o.sibling}function eH(r){var o=ve(),g=ul(),l=Pl(),i=Ol();switch(r.tag){case 0:case 11:case 14:case 15:n2(r,r.return,He),f0(r);break;case 1:Ml(r,r.return);var h=r.stateNode;typeof h.componentWillUnmount==="function"&&_O(r,r.return,h),f0(r);break;case 27:nr(r,N1,r.stateNode);case 26:case 5:Ml(r,r.return),f0(r);break;case 22:r.memoizedState===null&&f0(r);break;case 30:f0(r);break;default:f0(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(r,Jr,zr,Io,$o),ie(o),wl(g),$o=l,Bo=i}function f0(r){for(r=r.child;r!==null;)eH(r),r=r.sibling}function lH(r,o,g,l){var i=ve(),h=ul(),t=Pl(),w=Ol(),A=g.flags;switch(g.tag){case 0:case 11:case 15:Wl(r,g,l),kO(g,He);break;case 1:if(Wl(r,g,l),o=g.stateNode,typeof o.componentDidMount==="function"&&nr(g,F4,g,o),o=g.updateQueue,o!==null){r=g.stateNode;try{nr(g,AG,o,r)}catch(M){ho(g,g.return,M)}}l&&A&64&&VO(g),Q1(g,g.return);break;case 27:aO(g);case 26:case 5:Wl(r,g,l),l&&o===null&&A&4&&cO(g),Q1(g,g.return);break;case 12:if(l&&A&4){A=fl(),Wl(r,g,l),l=g.stateNode,l.effectDuration+=O1(A);try{nr(g,yO,g,o,dv,l.effectDuration)}catch(M){ho(g,g.return,M)}}else Wl(r,g,l);break;case 31:Wl(r,g,l),l&&A&4&&sO(r,g);break;case 13:Wl(r,g,l),l&&A&4&&rH(r,g);break;case 22:g.memoizedState===null&&Wl(r,g,l),Q1(g,g.return);break;case 30:break;default:Wl(r,g,l)}(g.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(g,Jr,zr,Io,$o),ie(i),wl(h),$o=t,Bo=w}function Wl(r,o,g){g=g&&(o.subtreeFlags&8772)!==0;for(o=o.child;o!==null;)lH(r,o.alternate,o,g),o=o.sibling}function P2(r,o){var g=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(g=r.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==g&&(r!=null&&_0(r),g!=null&&P1(g))}function O2(r,o){r=null,o.alternate!==null&&(r=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==r&&(_0(o),r!=null&&P1(r))}function De(r,o,g,l,i){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(o=o.child;o!==null;){var h=o.sibling;vH(r,o,g,l,h!==null?h.actualStartTime:i),o=h}}function vH(r,o,g,l,i){var h=ve(),t=ul(),w=Pl(),A=Ol(),M=av,K=o.flags;switch(o.tag){case 0:case 11:case 15:(o.mode&kr)!==Ur&&0<o.actualStartTime&&(o.flags&1)!==0&&db(o,o.actualStartTime,i,vg,g),De(r,o,g,l,i),K&2048&&DO(o,Sg|xe);break;case 1:(o.mode&kr)!==Ur&&0<o.actualStartTime&&((o.flags&128)!==0?pw(o,o.actualStartTime,i,[]):(o.flags&1)!==0&&db(o,o.actualStartTime,i,vg,g)),De(r,o,g,l,i);break;case 3:var $=fl(),J=vg;vg=o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)===0,De(r,o,g,l,i),vg=J,K&2048&&(g=null,o.alternate!==null&&(g=o.alternate.memoizedState.cache),l=o.memoizedState.cache,l!==g&&(_0(l),g!=null&&P1(g))),r.passiveEffectDuration+=ht($);break;case 12:if(K&2048){K=fl(),De(r,o,g,l,i),r=o.stateNode,r.passiveEffectDuration+=O1(K);try{nr(o,LG,o,o.alternate,dv,r.passiveEffectDuration)}catch(x){ho(o,o.return,x)}}else De(r,o,g,l,i);break;case 31:K=vg,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$!==null&&J===null?(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(vg=!1,$=$.hydrationErrors,$!==null&&pw(o,o.actualStartTime,i,$)):vg=!0):vg=!1,De(r,o,g,l,i),vg=K;break;case 13:K=vg,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$===null||$.dehydrated===null||J!==null&&J.dehydrated!==null?vg=!1:(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(vg=!1,$=$.hydrationErrors,$!==null&&pw(o,o.actualStartTime,i,$)):vg=!0),De(r,o,g,l,i),vg=K;break;case 23:break;case 22:J=o.stateNode,$=o.alternate,o.memoizedState!==null?J._visibility&ov?De(r,o,g,l,i):z1(r,o,g,l,i):J._visibility&ov?De(r,o,g,l,i):(J._visibility|=ov,Ei(r,o,g,l,(o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child),i),(o.mode&kr)===Ur||vg||(r=o.actualStartTime,0<=r&&0.05<i-r&&pb(o,r,i),0<=Jr&&0<=zr&&0.05<zr-Jr&&pb(o,Jr,zr))),K&2048&&P2($,o);break;case 24:De(r,o,g,l,i),K&2048&&O2(o.alternate,o);break;default:De(r,o,g,l,i)}if((o.mode&kr)!==Ur){if(r=!vg&&o.alternate===null&&o.return!==null&&o.return.alternate!==null)g=o.actualStartTime,0<=g&&0.05<i-g&&nl(o,g,i,"Mount");0<=Jr&&0<=zr&&((Bo||0.05<Io)&&bl(o,Jr,zr,Io,$o),r&&0.05<zr-Jr&&nl(o,Jr,zr,"Mount"))}ie(h),wl(t),$o=w,Bo=A,av=M}function Ei(r,o,g,l,i,h){i=i&&((o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child));for(o=o.child;o!==null;){var t=o.sibling;iH(r,o,g,l,i,t!==null?t.actualStartTime:h),o=t}}function iH(r,o,g,l,i,h){var t=ve(),w=ul(),A=Pl(),M=Ol(),K=av;i&&(o.mode&kr)!==Ur&&0<o.actualStartTime&&(o.flags&1)!==0&&db(o,o.actualStartTime,h,vg,g);var $=o.flags;switch(o.tag){case 0:case 11:case 15:Ei(r,o,g,l,i,h),DO(o,Sg);break;case 23:break;case 22:var J=o.stateNode;o.memoizedState!==null?J._visibility&ov?Ei(r,o,g,l,i,h):z1(r,o,g,l,h):(J._visibility|=ov,Ei(r,o,g,l,i,h)),i&&$&2048&&P2(o.alternate,o);break;case 24:Ei(r,o,g,l,i,h),i&&$&2048&&O2(o.alternate,o);break;default:Ei(r,o,g,l,i,h)}(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(o,Jr,zr,Io,$o),ie(t),wl(w),$o=A,Bo=M,av=K}function z1(r,o,g,l,i){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(var h=o.child;h!==null;){o=h.sibling;var t=r,w=g,A=l,M=o!==null?o.actualStartTime:i,K=av;(h.mode&kr)!==Ur&&0<h.actualStartTime&&(h.flags&1)!==0&&db(h,h.actualStartTime,M,vg,w);var $=h.flags;switch(h.tag){case 22:z1(t,h,w,A,M),$&2048&&P2(h.alternate,h);break;case 24:z1(t,h,w,A,M),$&2048&&O2(h.alternate,h);break;default:z1(t,h,w,A,M)}av=K,h=o}}function ai(r,o,g){if(r.subtreeFlags&Mn)for(r=r.child;r!==null;)hH(r,o,g),r=r.sibling}function hH(r,o,g){switch(r.tag){case 26:ai(r,o,g),r.flags&Mn&&r.memoizedState!==null&&GX(g,ae,r.memoizedState,r.memoizedProps);break;case 5:ai(r,o,g);break;case 3:case 4:var l=ae;ae=Vt(r.stateNode.containerInfo),ai(r,o,g),ae=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Mn,Mn=16777216,ai(r,o,g),Mn=l):ai(r,o,g));break;default:ai(r,o,g)}}function nH(r){var o=r.alternate;if(o!==null&&(r=o.child,r!==null)){o.child=null;do o=r.sibling,r.sibling=null,r=o;while(r!==null)}}function U1(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var g=0;g<o.length;g++){var l=o[g],i=ve();tg=l,uH(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&nl(l,Jr,zr,"Unmount"),ie(i)}nH(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bH(r),r=r.sibling}function bH(r){var o=ve(),g=ul(),l=Pl(),i=Ol();switch(r.tag){case 0:case 11:case 15:U1(r),r.flags&2048&&b2(r,r.return,Sg|xe);break;case 3:var h=fl();U1(r),r.stateNode.passiveEffectDuration+=ht(h);break;case 12:h=fl(),U1(r),r.stateNode.passiveEffectDuration+=O1(h);break;case 22:h=r.stateNode,r.memoizedState!==null&&h._visibility&ov&&(r.return===null||r.return.tag!==13)?(h._visibility&=~ov,Bt(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&nl(r,Jr,zr,"Disconnect")):U1(r);break;default:U1(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(r,Jr,zr,Io,$o),ie(o),wl(g),Bo=i,$o=l}function Bt(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var g=0;g<o.length;g++){var l=o[g],i=ve();tg=l,uH(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&nl(l,Jr,zr,"Unmount"),ie(i)}nH(r)}for(r=r.child;r!==null;)tH(r),r=r.sibling}function tH(r){var o=ve(),g=ul(),l=Pl(),i=Ol();switch(r.tag){case 0:case 11:case 15:b2(r,r.return,Sg),Bt(r);break;case 22:var h=r.stateNode;h._visibility&ov&&(h._visibility&=~ov,Bt(r));break;default:Bt(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(r,Jr,zr,Io,$o),ie(o),wl(g),Bo=i,$o=l}function uH(r,o){for(;tg!==null;){var g=tg,l=g,i=o,h=ve(),t=ul(),w=Pl(),A=Ol();switch(l.tag){case 0:case 11:case 15:b2(l,i,Sg);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool,i!=null&&_0(i));break;case 24:P1(l.memoizedState.cache)}if((l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Io)&&bl(l,Jr,zr,Io,$o),ie(h),wl(t),Bo=A,$o=w,l=g.child,l!==null)l.return=g,tg=l;else r:for(g=r;tg!==null;){if(l=tg,h=l.sibling,t=l.return,pO(l),l===g){tg=null;break r}if(h!==null){h.return=t,tg=h;break r}tg=t}}}function NG(){gJ.forEach(function(r){return r()})}function wH(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||S.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function ne(r){if((go&ig)!==ug&&Vr!==0)return Vr&-Vr;var o=S.T;return o!==null?(o._updatedFibers||(o._updatedFibers=new Set),o._updatedFibers.add(r),G2()):I()}function PH(){if(dg===0)if((Vr&536870912)===0||pr){var r=ou;ou<<=1,(ou&3932160)===0&&(ou=262144),dg=r}else dg=536870912;return r=Oe.current,r!==null&&(r.flags|=32),dg}function No(r,o,g){if(Fh&&console.error("useInsertionEffect must not schedule updates."),e6&&(Tu=!0),r===Mo&&(uo===ti||uo===ui)||r.cancelPendingCommit!==null)ji(r,0),Tv(r,Vr,dg,!1);if(Uv(r,g),(go&ig)!==ug&&r===Mo){if(Jl)switch(o.tag){case 0:case 11:case 15:r=yr&&C(yr)||"Unknown",TM.has(r)||(TM.add(r),o=C(o)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",o,r,r));break;case 1:SM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),SM=!0)}}else zl&&g1(r,o,g),yG(o),r===Mo&&((go&ig)===ug&&(h0|=g),Fo===l0&&Tv(r,Vr,dg,!1)),ml(r)}function OH(r,o,g){if((go&(ig|Ae))!==ug)throw Error("Should not already be working.");if(Vr!==0&&yr!==null){var l=yr,i=ng();switch(Iq){case mn:case ti:var h=en;Jo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",h,i,Qe,void 0,"primary-light")):console.timeStamp("Suspended",h,i,Qe,void 0,"primary-light"));break;case ui:h=en,Jo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",h,i,Qe,void 0,"primary-light")):console.timeStamp("Action",h,i,Qe,void 0,"primary-light"));break;default:Jo&&(l=i-en,3>l||console.timeStamp("Blocked",en,i,Qe,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}h=(g=!g&&(o&127)===0&&(o&r.expiredLanes)===0||L0(r,o))?ZG(r,o):A2(r,o,!0);var t=g;do{if(h===wv){Lh&&!g&&Tv(r,o,0,!1),o=uo,en=jo(),Iq=o;break}else{if(l=ng(),i=r.current.alternate,t&&!BG(i)){ee(o),i=bg,h=l,!Jo||h<=i||(To?To.run(console.timeStamp.bind(console,"Teared Render",i,h,fr,ar,"error")):console.timeStamp("Teared Render",i,h,fr,ar,"error")),j0(o,l),h=A2(r,o,!1),t=!1;continue}if(h===bi){if(t=o,r.errorRecoveryDisabledLanes&t)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){ee(o),dw(bg,l,o,To),j0(o,l),o=w;r:{l=r,h=t,t=Xn;var A=l.current.memoizedState.isDehydrated;if(A&&(ji(l,w).flags|=256),w=A2(l,w,!1),w!==bi){if(f4&&!A){l.errorRecoveryDisabledLanes|=h,h0|=h,h=l0;break r}l=Tg,Tg=t,l!==null&&(Tg===null?Tg=l:Tg.push.apply(Tg,l))}h=w}if(t=!1,h!==bi)continue;else l=ng()}}if(h===Wn){ee(o),dw(bg,l,o,To),j0(o,l),ji(r,0),Tv(r,o,0,!0);break}r:{switch(g=r,h){case wv:case Wn:throw Error("Root did not complete. This is a bug in React.");case l0:if((o&4194048)!==o)break;case Iu:ee(o),O8(bg,l,o,To),j0(o,l),i=o,(i&127)!==0?qu=l:(i&4194048)!==0&&(Mu=l),Tv(g,o,dg,!v0);break r;case bi:Tg=null;break;case Lu:case QM:break;default:throw Error("Unknown root exit status.")}if(S.actQueue!==null)q2(g,i,o,Tg,Yn,Nu,dg,h0,wi,h,null,null,bg,l);else{if((o&62914560)===o&&(t=Bu+KM-ng(),10<t)){if(Tv(g,o,dg,!v0),$0(g,0,!0)!==0)break r;fe=o,g.timeoutHandle=aM(HH.bind(null,g,i,Tg,Yn,Nu,o,dg,h0,wi,v0,h,"Throttled",bg,l),t);break r}HH(g,i,Tg,Yn,Nu,o,dg,h0,wi,v0,h,null,bg,l)}}}break}while(1);ml(r)}function HH(r,o,g,l,i,h,t,w,A,M,K,$,J,x){r.timeoutHandle=qi;var ir=o.subtreeFlags,Pr=null;if(ir&8192||(ir&16785408)===16785408){if(Pr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yl},hH(o,h,Pr),ir=(h&62914560)===h?Bu-ng():(h&4194048)===h?UM-ng():0,ir=XX(Pr,ir),ir!==null){fe=h,r.cancelPendingCommit=ir(q2.bind(null,r,o,h,g,l,i,t,w,A,K,Pr,Pr.waitingForViewTransition?"Waiting for the previous Animation":0<Pr.count?0<Pr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Pr.imgCount===1?"Suspended on an Image":0<Pr.imgCount?"Suspended on Images":null,J,x)),Tv(r,h,t,!M);return}}q2(r,o,h,g,l,i,t,w,A,K,Pr,$,J,x)}function BG(r){for(var o=r;;){var g=o.tag;if((g===0||g===11||g===15)&&o.flags&16384&&(g=o.updateQueue,g!==null&&(g=g.stores,g!==null)))for(var l=0;l<g.length;l++){var i=g[l],h=i.getSnapshot;i=i.value;try{if(!Bg(h(),i))return!1}catch(t){return!1}}if(g=o.child,o.subtreeFlags&16384&&g!==null)g.return=o,o=g;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Tv(r,o,g,l){o&=~j4,o&=~h0,r.suspendedLanes|=o,r.pingedLanes&=~o,l&&(r.warmLanes|=o),l=r.expirationTimes;for(var i=o;0<i;){var h=31-Fg(i),t=1<<h;l[h]=-1,i&=~t}g!==0&&I0(r,g,o)}function fi(){return(go&(ig|Ae))===ug?(L1(0,!1),!1):!0}function H2(){if(yr!==null){if(uo===pg)var r=yr.return;else r=yr,lt(),Q5(r),Gh=null,Pn=0,r=yr;for(;r!==null;)TO(r.alternate,r),r=r.return;yr=null}}function j0(r,o){(r&127)!==0&&(sv=o),(r&4194048)!==0&&(Il=o),(r&62914560)!==0&&($q=o),(r&2080374784)!==0&&(Lq=o)}function ji(r,o){Jo&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",ar,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",ar,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",ar,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",ar,"primary-light"));var g=bg;if(bg=jo(),Vr!==0&&0<g){if(ee(Vr),Fo===Lu||Fo===l0)O8(g,bg,o,To);else{var l=bg,i=To;if(Jo&&!(l<=g)){var h=(o&738197653)===o?"tertiary-dark":"primary-dark",t=(o&536870912)===o?"Prewarm":(o&201326741)===o?"Interrupted Hydration":"Interrupted Render";i?i.run(console.timeStamp.bind(console,t,g,l,fr,ar,h)):console.timeStamp(t,g,l,fr,ar,h)}}j0(Vr,bg)}if(g=To,To=null,(o&127)!==0){To=rn,i=0<=Ll&&Ll<sv?sv:Ll,l=0<=oi&&oi<sv?sv:oi,h=0<=l?l:0<=i?i:bg,0<=qu?(ee(2),H8(qu,h,o,g)):(Ru&127)!==0&&(ee(2),u1(sv,h,hv)),g=i;var w=l,A=on,M=0<Rh,K=r0===s1,$=r0===Au;if(i=bg,l=rn,h=U4,t=K4,Jo){if(fr="Blocking",0<g?g>i&&(g=i):g=i,0<w?w>g&&(w=g):w=g,A!==null&&g>w){var J=M?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+A,w,g,fr,ar,J)):console.timeStamp(M?"Consecutive":"Event: "+A,w,g,fr,ar,J)}i>g&&(w=K?"error":(o&738197653)===o?"tertiary-light":"primary-light",K=$?"Promise Resolved":K?"Cascading Update":5<i-g?"Update Blocked":"Update",$=[],t!=null&&$.push(["Component name",t]),h!=null&&$.push(["Method name",h]),g={start:g,end:i,detail:{devtools:{properties:$,track:fr,trackGroup:ar,color:w}}},l?l.run(performance.measure.bind(performance,K,g)):performance.measure(K,g))}Ll=-1.1,r0=0,K4=U4=null,qu=-1.1,Rh=oi,oi=-1.1,sv=jo()}if((o&4194048)!==0&&(To=gn,i=0<=iv&&iv<Il?Il:iv,g=0<=Ie&&Ie<Il?Il:Ie,l=0<=o0&&o0<Il?Il:o0,h=0<=l?l:0<=g?g:bg,0<=Mu?(ee(256),H8(Mu,h,o,To)):(Ru&4194048)!==0&&(ee(256),u1(Il,h,hv)),$=l,w=gi,A=0<g0,M=$4===Au,h=bg,l=gn,t=Uq,K=Kq,Jo&&(fr="Transition",0<g?g>h&&(g=h):g=h,0<i?i>g&&(i=g):i=g,0<$?$>i&&($=i):$=i,i>$&&w!==null&&(J=A?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,A?"Consecutive":"Event: "+w,$,i,fr,ar,J)):console.timeStamp(A?"Consecutive":"Event: "+w,$,i,fr,ar,J)),g>i&&(l?l.run(console.timeStamp.bind(console,"Action",i,g,fr,ar,"primary-dark")):console.timeStamp("Action",i,g,fr,ar,"primary-dark")),h>g&&(i=M?"Promise Resolved":5<h-g?"Update Blocked":"Update",$=[],K!=null&&$.push(["Component name",K]),t!=null&&$.push(["Method name",t]),g={start:g,end:h,detail:{devtools:{properties:$,track:fr,trackGroup:ar,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,i,g)):performance.measure(i,g))),Ie=iv=-1.1,$4=0,Mu=-1.1,g0=o0,o0=-1.1,Il=jo()),(o&62914560)!==0&&(Ru&62914560)!==0&&(ee(4194304),u1($q,bg,hv)),(o&2080374784)!==0&&(Ru&2080374784)!==0&&(ee(268435456),u1(Lq,bg,hv)),g=r.timeoutHandle,g!==qi&&(r.timeoutHandle=qi,HJ(g)),g=r.cancelPendingCommit,g!==null&&(r.cancelPendingCommit=null,g()),fe=0,H2(),Mo=r,yr=g=cl(r.current,null),Vr=o,uo=pg,qe=null,v0=!1,Lh=L0(r,o),f4=!1,Fo=wv,wi=dg=j4=h0=i0=0,Tg=Xn=null,Nu=!1,(o&8)!==0&&(o|=o&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=o;0<l;)i=31-Fg(l),h=1<<i,o|=r[i],l&=~h;return xl=o,sb(),r=Gq(),1000<r-mq&&(S.recentlyCreatedOwnerStacks=0,mq=r),ce.discardPendingWarnings(),g}function AH(r,o){Kr=null,S.H=qn,S.getCurrentStack=null,Jl=!1,ue=null,o===mh||o===Xu?(o=Z8(),uo=mn):o===x4?(o=Z8(),uo=zM):uo=o===_4?a4:o!==null&&typeof o==="object"&&typeof o.then==="function"?Gn:Fu,qe=o;var g=yr;g===null?(Fo=Wn,Kt(r,le(o,r.current))):g.mode&kr&&P5(g)}function qH(){var r=Oe.current;return r===null?!0:(Vr&4194048)===Vr?Fe===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fe:!1}function MH(){var r=S.H;return S.H=qn,r===null?qn:r}function RH(){var r=S.A;return S.A=oJ,r}function Zt(r){To===null&&(To=r._debugTask==null?null:r._debugTask)}function Ct(){Fo=l0,v0||(Vr&4194048)!==Vr&&Oe.current!==null||(Lh=!0),(i0&134217727)===0&&(h0&134217727)===0||Mo===null||Tv(Mo,Vr,dg,!1)}function A2(r,o,g){var l=go;go|=ig;var i=MH(),h=RH();if(Mo!==r||Vr!==o){if(zl){var t=r.memoizedUpdaters;0<t.size&&($1(r,Vr),t.clear()),Kv(r,o)}Yn=null,ji(r,o)}o=!1,t=Fo;r:do try{if(uo!==pg&&yr!==null){var w=yr,A=qe;switch(uo){case a4:H2(),t=Iu;break r;case mn:case ti:case ui:case Gn:Oe.current===null&&(o=!0);var M=uo;if(uo=pg,qe=null,pi(r,w,A,M),g&&Lh){t=wv;break r}break;default:M=uo,uo=pg,qe=null,pi(r,w,A,M)}}WH(),t=Fo;break}catch(K){AH(r,K)}while(1);return o&&r.shellSuspendCounter++,lt(),go=l,S.H=i,S.A=h,yr===null&&(Mo=null,Vr=0,sb()),t}function WH(){for(;yr!==null;)mH(yr)}function ZG(r,o){var g=go;go|=ig;var l=MH(),i=RH();if(Mo!==r||Vr!==o){if(zl){var h=r.memoizedUpdaters;0<h.size&&($1(r,Vr),h.clear()),Kv(r,o)}Yn=null,Zu=ng()+$M,ji(r,o)}else Lh=L0(r,o);r:do try{if(uo!==pg&&yr!==null)o:switch(o=yr,h=qe,uo){case Fu:uo=pg,qe=null,pi(r,o,h,Fu);break;case ti:case ui:if(N8(h)){uo=pg,qe=null,GH(o);break}o=function(){uo!==ti&&uo!==ui||Mo!==r||(uo=xu),ml(r)},h.then(o,o);break r;case mn:uo=xu;break r;case zM:uo=E4;break r;case xu:N8(h)?(uo=pg,qe=null,GH(o)):(uo=pg,qe=null,pi(r,o,h,xu));break;case E4:var t=null;switch(yr.tag){case 26:t=yr.memoizedState;case 5:case 27:var w=yr;if(t?OA(t):w.stateNode.complete){uo=pg,qe=null;var A=w.sibling;if(A!==null)yr=A;else{var M=w.return;M!==null?(yr=M,St(M)):yr=null}break o}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}uo=pg,qe=null,pi(r,o,h,E4);break;case Gn:uo=pg,qe=null,pi(r,o,h,Gn);break;case a4:H2(),Fo=Iu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}S.actQueue!==null?WH():CG();break}catch(K){AH(r,K)}while(1);if(lt(),S.H=l,S.A=i,go=g,yr!==null)return wv;return Mo=null,Vr=0,sb(),Fo}function CG(){for(;yr!==null&&!BX();)mH(yr)}function mH(r){var o=r.alternate;(r.mode&kr)!==Ur?(w5(r),o=nr(r,i2,o,r,xl),P5(r)):o=nr(r,i2,o,r,xl),r.memoizedProps=r.pendingProps,o===null?St(r):yr=o}function GH(r){var o=nr(r,SG,r);r.memoizedProps=r.pendingProps,o===null?St(r):yr=o}function SG(r){var o=r.alternate,g=(r.mode&kr)!==Ur;switch(g&&w5(r),r.tag){case 15:case 0:o=FO(o,r,r.pendingProps,r.type,void 0,Vr);break;case 11:o=FO(o,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Q5(r);default:TO(o,r),r=yr=m8(r,xl),o=i2(o,r,xl)}return g&&P5(r),o}function pi(r,o,g,l){lt(),Q5(o),Gh=null,Pn=0;var i=o.return;try{if(XG(r,i,o,g,Vr)){Fo=Wn,Kt(r,le(g,r.current)),yr=null;return}}catch(h){if(i!==null)throw yr=i,h;Fo=Wn,Kt(r,le(g,r.current)),yr=null;return}if(o.flags&32768){if(pr||l===Fu)r=!0;else if(Lh||(Vr&536870912)!==0)r=!1;else if(v0=r=!0,l===ti||l===ui||l===mn||l===Gn)l=Oe.current,l!==null&&l.tag===13&&(l.flags|=16384);XH(o,r)}else St(o)}function St(r){var o=r;do{if((o.flags&32768)!==0){XH(o,v0);return}var g=o.alternate;if(r=o.return,w5(o),g=nr(o,QG,g,o,xl),(o.mode&kr)!==Ur&&$8(o),g!==null){yr=g;return}if(o=o.sibling,o!==null){yr=o;return}yr=o=r}while(o!==null);Fo===wv&&(Fo=QM)}function XH(r,o){do{var g=zG(r.alternate,r);if(g!==null){g.flags&=32767,yr=g;return}if((r.mode&kr)!==Ur){$8(r),g=r.actualDuration;for(var l=r.child;l!==null;)g+=l.actualDuration,l=l.sibling;r.actualDuration=g}if(g=r.return,g!==null&&(g.flags|=32768,g.subtreeFlags=0,g.deletions=null),!o&&(r=r.sibling,r!==null)){yr=r;return}yr=r=g}while(r!==null);Fo=Iu,yr=null}function q2(r,o,g,l,i,h,t,w,A,M,K,$,J,x){r.cancelPendingCommit=null;do K1();while(gg!==b0);if(ce.flushLegacyContextWarning(),ce.flushPendingUnsafeLifecycleWarnings(),(go&(ig|Ae))!==ug)throw Error("Should not already be working.");if(ee(g),M===bi?dw(J,x,g,To):l!==null?tG(J,x,g,l,o!==null&&o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)!==0,To):bG(J,x,g,To),o!==null){if(g===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),o===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(h=o.lanes|o.childLanes,h|=X4,Db(r,g,h,t,w,A),r===Mo&&(yr=Mo=null,Vr=0),Ih=o,t0=r,fe=g,s4=h,o6=i,BM=l,r6=x,ZM=$,je=Cu,CM=null,o.actualDuration!==0||(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,_G(eh,function(){return $n=window.event,je===Cu&&(je=d4),UH(),null})):(r.callbackNode=null,r.callbackPriority=0),vv=null,dv=jo(),$!==null&&uG(x,dv,$,To),l=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,i=no.p,no.p=we,t=go,go|=Ae;try{FG(r,o,g)}finally{go=t,no.p=i,S.T=l}}gg=IM,YH(),JH(),QH()}}function YH(){if(gg===IM){gg=b0;var r=t0,o=Ih,g=fe,l=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var i=no.p;no.p=we;var h=go;go|=Ae;try{Kh=g,$h=r,nt(),oH(o,r),$h=Kh=null,g=w6;var t=u8(r.containerInfo),w=g.focusedElem,A=g.selectionRange;if(t!==w&&w&&w.ownerDocument&&t8(w.ownerDocument.documentElement,w)){if(A!==null&&fw(w)){var{start:M,end:K}=A;if(K===void 0&&(K=M),"selectionStart"in w)w.selectionStart=M,w.selectionEnd=Math.min(K,w.value.length);else{var $=w.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var x=J.getSelection(),ir=w.textContent.length,Pr=Math.min(A.start,ir),Go=A.end===void 0?Pr:Math.min(A.end,ir);!x.extend&&Pr>Go&&(t=Go,Go=Pr,Pr=t);var sr=b8(w,Pr),Y=b8(w,Go);if(sr&&Y&&(x.rangeCount!==1||x.anchorNode!==sr.node||x.anchorOffset!==sr.offset||x.focusNode!==Y.node||x.focusOffset!==Y.offset)){var Q=$.createRange();Q.setStart(sr.node,sr.offset),x.removeAllRanges(),Pr>Go?(x.addRange(Q),x.extend(Y.node,Y.offset)):(Q.setEnd(Y.node,Y.offset),x.addRange(Q))}}}}$=[];for(x=w;x=x.parentNode;)x.nodeType===1&&$.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof w.focus==="function"&&w.focus();for(w=0;w<$.length;w++){var U=$[w];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}rw=!!u6,w6=u6=null}finally{go=h,no.p=i,S.T=l}}r.current=o,gg=FM}}function JH(){if(gg===FM){gg=b0;var r=CM;if(r!==null){dv=jo();var o=lv,g=dv;!Jo||g<=o||(hv?hv.run(console.timeStamp.bind(console,r,o,g,fr,ar,"secondary-light")):console.timeStamp(r,o,g,fr,ar,"secondary-light"))}r=t0,o=Ih,g=fe;var l=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var i=no.p;no.p=we;var h=go;go|=Ae;try{Kh=g,$h=r,nt(),jO(r,o.alternate,o),$h=Kh=null}finally{go=h,no.p=i,S.T=l}}r=r6,o=ZM,lv=jo(),r=o===null?r:dv,o=lv,g=je===p4,l=To,vv!==null?A8(r,o,vv,!1,l):!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,g?"Commit Interrupted View Transition":"Commit",r,o,fr,ar,g?"error":"secondary-dark")):console.timeStamp(g?"Commit Interrupted View Transition":"Commit",r,o,fr,ar,g?"error":"secondary-dark")),gg=xM}}function QH(){if(gg===NM||gg===xM){if(gg===NM){var r=lv;lv=jo();var o=lv,g=je===p4;!Jo||o<=r||(hv?hv.run(console.timeStamp.bind(console,g?"Interrupted View Transition":"Starting Animation",r,o,fr,ar,g?"error":"secondary-light")):console.timeStamp(g?"Interrupted View Transition":"Starting Animation",r,o,fr,ar,g?" error":"secondary-light")),je!==p4&&(je=LM)}gg=b0,ZX(),r=t0;var l=Ih;o=fe,g=BM;var i=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;i?gg=Su:(gg=b0,Ih=t0=null,zH(r,r.pendingLanes),Pi=0,Qn=null);var h=r.pendingLanes;if(h===0&&(n0=null),i||IH(r),h=R(o),l=l.stateNode,zg&&typeof zg.onCommitFiberRoot==="function")try{var t=(l.current.flags&128)===128;switch(h){case we:var w=o4;break;case _e:w=g4;break;case Ul:w=eh;break;case eu:w=e4;break;default:w=eh}zg.onCommitFiberRoot(lh,l,w,t)}catch($){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",$))}if(zl&&r.memoizedUpdaters.clear(),NG(),g!==null){t=S.T,w=no.p,no.p=we,S.T=null;try{var A=r.onRecoverableError;for(l=0;l<g.length;l++){var M=g[l],K=TG(M.stack);nr(M.source,A,M.value,K)}}finally{S.T=t,no.p=w}}(fe&3)!==0&&K1(),ml(r),h=r.pendingLanes,(o&261930)!==0&&(h&42)!==0?(mu=!0,r===g6?Jn++:(Jn=0,g6=r)):Jn=0,i||j0(o,lv),L1(0,!1)}}function TG(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function zH(r,o){(r.pooledCacheLanes&=o)===0&&(o=r.pooledCache,o!=null&&(r.pooledCache=null,P1(o)))}function K1(){return YH(),JH(),QH(),UH()}function UH(){if(gg!==Su)return!1;var r=t0,o=s4;s4=0;var g=R(fe),l=Ul===0||Ul>g?Ul:g;g=S.T;var i=no.p;try{no.p=l,S.T=null;var h=o6;o6=null,l=t0;var t=fe;if(gg=b0,Ih=t0=null,fe=0,(go&(ig|Ae))!==ug)throw Error("Cannot flush passive effects while already rendering.");ee(t),e6=!0,Tu=!1;var w=0;if(vv=null,w=ng(),je===LM)u1(lv,w,hv);else{var A=lv,M=w,K=je===d4;!Jo||M<=A||(To?To.run(console.timeStamp.bind(console,K?"Waiting for Paint":"Waiting",A,M,fr,ar,"secondary-light")):console.timeStamp(K?"Waiting for Paint":"Waiting",A,M,fr,ar,"secondary-light"))}A=go,go|=Ae;var $=l.current;nt(),bH($);var J=l.current;$=r6,nt(),vH(l,J,t,h,$),IH(l),go=A;var x=ng();if(J=w,$=To,vv!==null?A8(J,x,vv,!0,$):!Jo||x<=J||($?$.run(console.timeStamp.bind(console,"Remaining Effects",J,x,fr,ar,"secondary-dark")):console.timeStamp("Remaining Effects",J,x,fr,ar,"secondary-dark")),j0(t,x),L1(0,!1),Tu?l===Qn?Pi++:(Pi=0,Qn=l):Pi=0,Tu=e6=!1,zg&&typeof zg.onPostCommitFiberRoot==="function")try{zg.onPostCommitFiberRoot(lh,l)}catch(Pr){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",Pr))}var ir=l.current.stateNode;return ir.effectDuration=0,ir.passiveEffectDuration=0,!0}finally{no.p=i,S.T=g,zH(r,o)}}function KH(r,o,g){o=le(g,o),L8(o),o=f5(r.stateNode,o,2),r=Bv(r,o,2),r!==null&&(Uv(r,2),ml(r))}function ho(r,o,g){if(Fh=!1,r.tag===3)KH(r,r,g);else{for(;o!==null;){if(o.tag===3){KH(o,r,g);return}if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(n0===null||!n0.has(l))){r=le(g,r),L8(r),g=j5(2),l=Bv(o,g,2),l!==null&&(p5(g,l,o,r),Uv(l,2),ml(l));return}}o=o.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,g)}}function M2(r,o,g){var l=r.pingCache;if(l===null){l=r.pingCache=new eJ;var i=new Set;l.set(o,i)}else i=l.get(o),i===void 0&&(i=new Set,l.set(o,i));i.has(g)||(f4=!0,i.add(g),l=kG.bind(null,r,o,g),zl&&$1(r,g),o.then(l,l))}function kG(r,o,g){var l=r.pingCache;l!==null&&l.delete(o),r.pingedLanes|=r.suspendedLanes&g,r.warmLanes&=~g,(g&127)!==0?0>Ll&&(sv=Ll=jo(),rn=Hu("Promise Resolved"),r0=Au):(g&4194048)!==0&&0>Ie&&(Il=Ie=jo(),gn=Hu("Promise Resolved"),$4=Au),wH()&&S.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Mo===r&&(Vr&g)===g&&(Fo===l0||Fo===Lu&&(Vr&62914560)===Vr&&ng()-Bu<KM?(go&ig)===ug&&ji(r,0):j4|=g,wi===Vr&&(wi=0)),ml(r)}function $H(r,o){o===0&&(o=Ni()),r=Qg(r,o),r!==null&&(Uv(r,o),ml(r))}function DG(r){var o=r.memoizedState,g=0;o!==null&&(g=o.retryLane),$H(r,g)}function VG(r,o){var g=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:i}=r;i!==null&&(g=i.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(o),$H(r,g)}function R2(r,o,g){if((o.subtreeFlags&67117056)!==0)for(o=o.child;o!==null;){var l=r,i=o,h=i.type===pt;h=g||h,i.tag!==22?i.flags&67108864?h&&nr(i,LH,l,i):R2(l,i,h):i.memoizedState===null&&(h&&i.flags&8192?nr(i,LH,l,i):i.subtreeFlags&67108864&&nr(i,R2,l,i,h)),o=o.sibling}}function LH(r,o){Wo(!0);try{eH(o),tH(o),lH(r,o.alternate,o,!1),iH(r,o,0,null,!1,0)}finally{Wo(!1)}}function IH(r){var o=!0;r.current.mode&(Ug|ye)||(o=!1),R2(r,r.current,o)}function FH(r){if((go&ig)===ug){var o=r.tag;if(o===3||o===1||o===0||o===11||o===14||o===15){if(o=C(r)||"ReactComponent",ku!==null){if(ku.has(o))return;ku.add(o)}else ku=new Set([o]);nr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function $1(r,o){zl&&r.memoizedUpdaters.forEach(function(g){g1(r,g,o)})}function _G(r,o){var g=S.actQueue;return g!==null?(g.push(o),iJ):r4(r,o)}function yG(r){wH()&&S.actQueue===null&&nr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,C(r))})}function ml(r){r!==xh&&r.next===null&&(xh===null?Du=xh=r:xh=xh.next=r),Vu=!0,S.actQueue!==null?v6||(v6=!0,ZH()):l6||(l6=!0,ZH())}function L1(r,o){if(!i6&&Vu){i6=!0;do{var g=!1;for(var l=Du;l!==null;){if(!o)if(r!==0){var i=l.pendingLanes;if(i===0)var h=0;else{var{suspendedLanes:t,pingedLanes:w}=l;h=(1<<31-Fg(42|r)+1)-1,h&=i&~(t&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(g=!0,BH(l,h))}else h=Vr,h=$0(l,l===Mo?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==qi),(h&3)===0||L0(l,h)||(g=!0,BH(l,h));l=l.next}}while(g);i6=!1}}function cG(){$n=window.event,W2()}function W2(){Vu=v6=l6=!1;var r=0;u0!==0&&sG()&&(r=u0);for(var o=ng(),g=null,l=Du;l!==null;){var i=l.next,h=xH(l,o);if(h===0)l.next=null,g===null?Du=i:g.next=i,i===null&&(xh=g);else if(g=l,r!==0||(h&3)!==0)Vu=!0;l=i}gg!==b0&&gg!==Su||L1(r,!1),u0!==0&&(u0=0)}function xH(r,o){for(var{suspendedLanes:g,pingedLanes:l,expirationTimes:i}=r,h=r.pendingLanes&-62914561;0<h;){var t=31-Fg(h),w=1<<t,A=i[t];if(A===-1){if((w&g)===0||(w&l)!==0)i[t]=Cw(w,o)}else A<=o&&(r.expiredLanes|=w);h&=~w}if(o=Mo,g=Vr,g=$0(r,r===o?g:0,r.cancelPendingCommit!==null||r.timeoutHandle!==qi),l=r.callbackNode,g===0||r===o&&(uo===ti||uo===ui)||r.cancelPendingCommit!==null)return l!==null&&m2(l),r.callbackNode=null,r.callbackPriority=0;if((g&3)===0||L0(r,g)){if(o=g&-g,o!==r.callbackPriority||S.actQueue!==null&&l!==h6)m2(l);else return o;switch(R(g)){case we:case _e:g=g4;break;case Ul:g=eh;break;case eu:g=e4;break;default:g=eh}return l=NH.bind(null,r),S.actQueue!==null?(S.actQueue.push(l),g=h6):g=r4(g,l),r.callbackPriority=o,r.callbackNode=g,o}return l!==null&&m2(l),r.callbackPriority=2,r.callbackNode=null,2}function NH(r,o){if(mu=Wu=!1,$n=window.event,gg!==b0&&gg!==Su)return r.callbackNode=null,r.callbackPriority=0,null;var g=r.callbackNode;if(je===Cu&&(je=d4),K1()&&r.callbackNode!==g)return null;var l=Vr;if(l=$0(r,r===Mo?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==qi),l===0)return null;return OH(r,l,o),xH(r,ng()),r.callbackNode!=null&&r.callbackNode===g?NH.bind(null,r):null}function BH(r,o){if(K1())return null;Wu=mu,mu=!1,OH(r,o,!0)}function m2(r){r!==h6&&r!==null&&NX(r)}function ZH(){S.actQueue!==null&&S.actQueue.push(function(){return W2(),null}),AJ(function(){(go&(ig|Ae))!==ug?r4(o4,cG):W2()})}function G2(){if(u0===0){var r=ei;r===0&&(r=ru,ru<<=1,(ru&261888)===0&&(ru=256)),u0=r}return u0}function CH(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return wo(r,"action"),n1(""+r)}function SH(r,o){var g=o.ownerDocument.createElement("input");return g.name=o.name,g.value=o.value,r.id&&g.setAttribute("form",r.id),o.parentNode.insertBefore(g,o),r=new FormData(r),g.parentNode.removeChild(g),r}function EG(r,o,g,l,i){if(o==="submit"&&g&&g.stateNode===i){var h=CH((i[xg]||null).action),t=l.submitter;t&&(o=(o=t[xg]||null)?CH(o.formAction):t.getAttribute("formAction"),o!==null&&(h=o,t=null));var w=new nu("action","action",null,l,i);r.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(u0!==0){var A=t?SH(i,t):new FormData(i),M={pending:!0,data:A,method:i.method,action:h};Object.freeze(M),D5(g,M,null,A)}}else typeof h==="function"&&(w.preventDefault(),A=t?SH(i,t):new FormData(i),M={pending:!0,data:A,method:i.method,action:h},Object.freeze(M),D5(g,M,h,A))},currentTarget:i}]})}}function Tt(r,o,g){r.currentTarget=g;try{o(r)}catch(l){R4(l)}r.currentTarget=null}function TH(r,o){o=(o&4)!==0;for(var g=0;g<r.length;g++){var l=r[g];r:{var i=void 0,h=l.event;if(l=l.listeners,o)for(var t=l.length-1;0<=t;t--){var w=l[t],A=w.instance,M=w.currentTarget;if(w=w.listener,A!==i&&h.isPropagationStopped())break r;A!==null?nr(A,Tt,h,w,M):Tt(h,w,M),i=A}else for(t=0;t<l.length;t++){if(w=l[t],A=w.instance,M=w.currentTarget,w=w.listener,A!==i&&h.isPropagationStopped())break r;A!==null?nr(A,Tt,h,w,M):Tt(h,w,M),i=A}}}}function dr(r,o){n6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var g=o[l4];g===void 0&&(g=o[l4]=new Set);var l=r+"__bubble";g.has(l)||(kH(o,r,2,!1),g.add(l))}function X2(r,o,g){n6.has(r)&&!o&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;o&&(l|=4),kH(g,r,l,o)}function Y2(r){if(!r[_u]){r[_u]=!0,ZA.forEach(function(g){g!=="selectionchange"&&(n6.has(g)||X2(g,!1,r),X2(g,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[_u]||(o[_u]=!0,X2("selectionchange",!1,o))}}function kH(r,o,g,l){switch(WA(o)){case we:var i=zX;break;case _e:i=UX;break;default:i=T2}g=i.bind(null,o,g,r),i=void 0,!b4||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(i=!0),l?i!==void 0?r.addEventListener(o,g,{capture:!0,passive:i}):r.addEventListener(o,g,!0):i!==void 0?r.addEventListener(o,g,{passive:i}):r.addEventListener(o,g,!1)}function J2(r,o,g,l,i){var h=l;if((o&1)===0&&(o&2)===0&&l!==null)r:for(;;){if(l===null)return;var t=l.tag;if(t===3||t===4){var w=l.stateNode.containerInfo;if(w===i)break;if(t===4)for(t=l.return;t!==null;){var A=t.tag;if((A===3||A===4)&&t.stateNode.containerInfo===i)return;t=t.return}for(;w!==null;){if(t=Mr(w),t===null)return;if(A=t.tag,A===5||A===6||A===26||A===27){l=h=t;continue r}w=w.parentNode}}l=l.return}dP(function(){var M=h,K=Ew(g),$=[];r:{var J=Wq.get(r);if(J!==void 0){var x=nu,ir=r;switch(r){case"keypress":if(ab(g)===0)break r;case"keydown":case"keyup":x=GY;break;case"focusin":ir="focus",x=P4;break;case"focusout":ir="blur",x=P4;break;case"beforeblur":case"afterblur":x=P4;break;case"click":if(g.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=iq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=tY;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=JY;break;case Aq:case qq:case Mq:x=PY;break;case Rq:x=zY;break;case"scroll":case"scrollend":x=nY;break;case"wheel":x=KY;break;case"copy":case"cut":case"paste":x=HY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=nq;break;case"toggle":case"beforetoggle":x=LY}var Pr=(o&4)!==0,Go=!Pr&&(r==="scroll"||r==="scrollend"),sr=Pr?J!==null?J+"Capture":null:J;Pr=[];for(var Y=M,Q;Y!==null;){var U=Y;if(Q=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||Q===null||sr===null||(U=b1(Y,sr),U!=null&&Pr.push(I1(Y,U,Q))),Go)break;Y=Y.return}0<Pr.length&&(J=new x(J,ir,null,g,K),$.push({event:J,listeners:Pr}))}}if((o&7)===0){r:{if(J=r==="mouseover"||r==="pointerover",x=r==="mouseout"||r==="pointerout",J&&g!==V1&&(ir=g.relatedTarget||g.fromElement)&&(Mr(ir)||ir[cv]))break r;if(x||J){if(J=K.window===K?K:(J=K.ownerDocument)?J.defaultView||J.parentWindow:window,x){if(ir=g.relatedTarget||g.toElement,x=M,ir=ir?Mr(ir):null,ir!==null&&(Go=rr(ir),Pr=ir.tag,ir!==Go||Pr!==5&&Pr!==27&&Pr!==6))ir=null}else x=null,ir=M;if(x!==ir){if(Pr=iq,U="onMouseLeave",sr="onMouseEnter",Y="mouse",r==="pointerout"||r==="pointerover")Pr=nq,U="onPointerLeave",sr="onPointerEnter",Y="pointer";if(Go=x==null?J:xr(x),Q=ir==null?J:xr(ir),J=new Pr(U,Y+"leave",x,g,K),J.target=Go,J.relatedTarget=Q,U=null,Mr(K)===M&&(Pr=new Pr(sr,Y+"enter",ir,g,K),Pr.target=Q,Pr.relatedTarget=Go,U=Pr),Go=U,x&&ir)o:{Pr=aG,sr=x,Y=ir,Q=0;for(U=sr;U;U=Pr(U))Q++;U=0;for(var D=Y;D;D=Pr(D))U++;for(;0<Q-U;)sr=Pr(sr),Q--;for(;0<U-Q;)Y=Pr(Y),U--;for(;Q--;){if(sr===Y||Y!==null&&sr===Y.alternate){Pr=sr;break o}sr=Pr(sr),Y=Pr(Y)}Pr=null}else Pr=null;x!==null&&DH($,J,x,Pr,!1),ir!==null&&Go!==null&&DH($,Go,ir,Pr,!0)}}}r:{if(J=M?xr(M):window,x=J.nodeName&&J.nodeName.toLowerCase(),x==="select"||x==="input"&&J.type==="file")var tr=v8;else if(e8(J))if(Oq)tr=iG;else{tr=lG;var $r=eG}else x=J.nodeName,!x||x.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?M&&h1(M.elementType)&&(tr=v8):tr=vG;if(tr&&(tr=tr(r,M))){l8($,tr,g,K);break r}$r&&$r(r,J,M),r==="focusout"&&M&&J.type==="number"&&M.memoizedProps.value!=null&&kw(J,"number",J.value)}switch($r=M?xr(M):window,r){case"focusin":if(e8($r)||$r.contentEditable==="true")uh=$r,H4=M,j1=null;break;case"focusout":j1=H4=uh=null;break;case"mousedown":A4=!0;break;case"contextmenu":case"mouseup":case"dragend":A4=!1,w8($,g,K);break;case"selectionchange":if(NY)break;case"keydown":case"keyup":w8($,g,K)}var Xr;if(O4)r:{switch(r){case"compositionstart":var Wr="onCompositionStart";break r;case"compositionend":Wr="onCompositionEnd";break r;case"compositionupdate":Wr="onCompositionUpdate";break r}Wr=void 0}else th?o8(r,g)&&(Wr="onCompositionEnd"):r==="keydown"&&g.keyCode===bq&&(Wr="onCompositionStart");if(Wr&&(tq&&g.locale!=="ko"&&(th||Wr!=="onCompositionStart"?Wr==="onCompositionEnd"&&th&&(Xr=sP()):(Ev=K,t4=("value"in Ev)?Ev.value:Ev.textContent,th=!0)),$r=kt(M,Wr),0<$r.length&&(Wr=new hq(Wr,r,null,g,K),$.push({event:Wr,listeners:$r}),Xr?Wr.data=Xr:(Xr=g8(g),Xr!==null&&(Wr.data=Xr)))),Xr=FY?sm(r,g):rG(r,g))Wr=kt(M,"onBeforeInput"),0<Wr.length&&($r=new qY("onBeforeInput","beforeinput",null,g,K),$.push({event:$r,listeners:Wr}),$r.data=Xr);EG($,r,M,g,K)}TH($,o)})}function I1(r,o,g){return{instance:r,listener:o,currentTarget:g}}function kt(r,o){for(var g=o+"Capture",l=[];r!==null;){var i=r,h=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||h===null||(i=b1(r,g),i!=null&&l.unshift(I1(r,i,h)),i=b1(r,o),i!=null&&l.push(I1(r,i,h))),r.tag===3)return l;r=r.return}return[]}function aG(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function DH(r,o,g,l,i){for(var h=o._reactName,t=[];g!==null&&g!==l;){var w=g,A=w.alternate,M=w.stateNode;if(w=w.tag,A!==null&&A===l)break;w!==5&&w!==26&&w!==27||M===null||(A=M,i?(M=b1(g,h),M!=null&&t.unshift(I1(g,M,A))):i||(M=b1(g,h),M!=null&&t.push(I1(g,M,A)))),g=g.return}t.length!==0&&r.push({event:o,listeners:t})}function Q2(r,o){fm(r,o),r!=="input"&&r!=="textarea"&&r!=="select"||o==null||o.value!==null||lq||(lq=!0,r==="select"&&o.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var g={registrationNameDependencies:p0,possibleRegistrationNames:v4};h1(r)||typeof o.is==="string"||pm(r,o,g),o.contentEditable&&!o.suppressContentEditableWarning&&o.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function hg(r,o,g,l){o!==g&&(g=kv(g),kv(o)!==g&&(l[r]=o))}function fG(r,o,g){o.forEach(function(l){g[yH(l)]=l==="style"?U2(r):r.getAttribute(l)})}function Gl(r,o){o===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof o)}function VH(r,o){return r=r.namespaceURI===vu||r.namespaceURI===ih?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=o,r.innerHTML}function kv(r){return re(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yg(r)),ao(r)),(typeof r==="string"?r:""+r).replace(hJ,`
`).replace(nJ,"")}function _H(r,o){return o=kv(o),kv(r)===o?!0:!1}function Ao(r,o,g,l,i,h){switch(g){case"children":if(typeof l==="string")Eb(l,o,!1),o==="body"||o==="textarea"&&l===""||i1(r,l);else if(typeof l==="number"||typeof l==="bigint")Eb(""+l,o,!1),o!=="body"&&i1(r,""+l);break;case"className":_b(r,"class",l);break;case"tabIndex":_b(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_b(r,g,l);break;case"style":fP(r,l,h);break;case"data":if(o!=="object"){_b(r,"data",l);break}case"src":case"href":if(l===""&&(o!=="a"||g!=="href")){g==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',g,g):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',g,g),r.removeAttribute(g);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(g);break}wo(l,g),l=n1(""+l),r.setAttribute(g,l);break;case"action":case"formAction":if(l!=null&&(o==="form"?g==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(i.encType==null&&i.method==null||Eu||(Eu=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),i.target==null||cu||(cu=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):o==="input"||o==="button"?g==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):o!=="input"||i.type==="submit"||i.type==="image"||yu?o!=="button"||i.type==null||i.type==="submit"||yu?typeof l==="function"&&(i.name==null||VM||(VM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),i.formEncType==null&&i.formMethod==null||Eu||(Eu=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),i.formTarget==null||cu||(cu=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(yu=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(yu=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):g==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(g,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h==="function"&&(g==="formAction"?(o!=="input"&&Ao(r,o,"name",i.name,i,null),Ao(r,o,"formEncType",i.formEncType,i,null),Ao(r,o,"formMethod",i.formMethod,i,null),Ao(r,o,"formTarget",i.formTarget,i,null)):(Ao(r,o,"encType",i.encType,i,null),Ao(r,o,"method",i.method,i,null),Ao(r,o,"target",i.target,i,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(g);break}wo(l,g),l=n1(""+l),r.setAttribute(g,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(g,l),r.onclick=yl);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(g,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(g,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(g=l.__html,g!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=g}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}wo(l,g),g=n1(""+l),r.setAttributeNS(Oi,"xlink:href",g);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(wo(l,g),r.setAttribute(g,""+l)):r.removeAttribute(g);break;case"inert":l!==""||au[g]||(au[g]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",g));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(g,""):r.removeAttribute(g);break;case"capture":case"download":l===!0?r.setAttribute(g,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(wo(l,g),r.setAttribute(g,l)):r.removeAttribute(g);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(wo(l,g),r.setAttribute(g,l)):r.removeAttribute(g);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(g):(wo(l,g),r.setAttribute(g,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),Vb(r,"popover",l);break;case"xlinkActuate":_l(r,Oi,"xlink:actuate",l);break;case"xlinkArcrole":_l(r,Oi,"xlink:arcrole",l);break;case"xlinkRole":_l(r,Oi,"xlink:role",l);break;case"xlinkShow":_l(r,Oi,"xlink:show",l);break;case"xlinkTitle":_l(r,Oi,"xlink:title",l);break;case"xlinkType":_l(r,Oi,"xlink:type",l);break;case"xmlBase":_l(r,b6,"xml:base",l);break;case"xmlLang":_l(r,b6,"xml:lang",l);break;case"xmlSpace":_l(r,b6,"xml:space",l);break;case"is":h!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Vb(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":_M||l==null||typeof l!=="object"||(_M=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<g.length)||g[0]!=="o"&&g[0]!=="O"||g[1]!=="n"&&g[1]!=="N"?(g=jP(g),Vb(r,g,l)):p0.hasOwnProperty(g)&&l!=null&&typeof l!=="function"&&Gl(g,l)}}function z2(r,o,g,l,i,h){switch(g){case"style":fP(r,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(g=l.__html,g!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=g}}break;case"children":typeof l==="string"?i1(r,l):(typeof l==="number"||typeof l==="bigint")&&i1(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(g,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(g,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(g,l),r.onclick=yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p0.hasOwnProperty(g))l!=null&&typeof l!=="function"&&Gl(g,l);else r:{if(g[0]==="o"&&g[1]==="n"&&(i=g.endsWith("Capture"),o=g.slice(2,i?g.length-7:void 0),h=r[xg]||null,h=h!=null?h[g]:null,typeof h==="function"&&r.removeEventListener(o,h,i),typeof l==="function")){typeof h!=="function"&&h!==null&&(g in r?r[g]=null:r.hasAttribute(g)&&r.removeAttribute(g)),r.addEventListener(o,l,i);break r}g in r?r[g]=l:l===!0?r.setAttribute(g,""):Vb(r,g,l)}}}function qg(r,o,g){switch(Q2(o,g),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,i=!1,h;for(h in g)if(g.hasOwnProperty(h)){var t=g[h];if(t!=null)switch(h){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ao(r,o,h,t,g,null)}}i&&Ao(r,o,"srcSet",g.srcSet,g,null),l&&Ao(r,o,"src",g.src,g,null);return;case"input":$v("input",g),dr("invalid",r);var w=h=t=i=null,A=null,M=null;for(l in g)if(g.hasOwnProperty(l)){var K=g[l];if(K!=null)switch(l){case"name":i=K;break;case"type":t=K;break;case"checked":A=K;break;case"defaultChecked":M=K;break;case"value":h=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ao(r,o,l,K,g,null)}}FP(r,g),xP(r,h,w,A,M,t,i,!1);return;case"select":$v("select",g),dr("invalid",r),l=t=h=null;for(i in g)if(g.hasOwnProperty(i)&&(w=g[i],w!=null))switch(i){case"value":h=w;break;case"defaultValue":t=w;break;case"multiple":l=w;default:Ao(r,o,i,w,g,null)}ZP(r,g),o=h,g=t,r.multiple=!!l,o!=null?Zi(r,!!l,o,!1):g!=null&&Zi(r,!!l,g,!0);return;case"textarea":$v("textarea",g),dr("invalid",r),h=i=l=null;for(t in g)if(g.hasOwnProperty(t)&&(w=g[t],w!=null))switch(t){case"value":l=w;break;case"defaultValue":i=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ao(r,o,t,w,g,null)}CP(r,g),TP(r,l,i,h);return;case"option":NP(r,g);for(A in g)if(g.hasOwnProperty(A)&&(l=g[A],l!=null))switch(A){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Ao(r,o,A,l,g,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<zn.length;l++)dr(zn[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in g)if(g.hasOwnProperty(M)&&(l=g[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ao(r,o,M,l,g,null)}return;default:if(h1(o)){for(K in g)g.hasOwnProperty(K)&&(l=g[K],l!==void 0&&z2(r,o,K,l,g,void 0));return}}for(w in g)g.hasOwnProperty(w)&&(l=g[w],l!=null&&Ao(r,o,w,l,g,null))}function jG(r,o,g,l){switch(Q2(o,l),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,h=null,t=null,w=null,A=null,M=null,K=null;for(x in g){var $=g[x];if(g.hasOwnProperty(x)&&$!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":A=$;default:l.hasOwnProperty(x)||Ao(r,o,x,null,l,$)}}for(var J in l){var x=l[J];if($=g[J],l.hasOwnProperty(J)&&(x!=null||$!=null))switch(J){case"type":h=x;break;case"name":i=x;break;case"checked":M=x;break;case"defaultChecked":K=x;break;case"value":t=x;break;case"defaultValue":w=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==$&&Ao(r,o,J,x,l,$)}}o=g.type==="checkbox"||g.type==="radio"?g.checked!=null:g.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,o||!l||DM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),DM=!0),!o||l||kM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),kM=!0),Tw(r,t,w,A,M,K,h,i);return;case"select":x=t=w=J=null;for(h in g)if(A=g[h],g.hasOwnProperty(h)&&A!=null)switch(h){case"value":break;case"multiple":x=A;default:l.hasOwnProperty(h)||Ao(r,o,h,null,l,A)}for(i in l)if(h=l[i],A=g[i],l.hasOwnProperty(i)&&(h!=null||A!=null))switch(i){case"value":J=h;break;case"defaultValue":w=h;break;case"multiple":t=h;default:h!==A&&Ao(r,o,i,h,l,A)}l=w,o=t,g=x,J!=null?Zi(r,!!o,J,!1):!!g!==!!o&&(l!=null?Zi(r,!!o,l,!0):Zi(r,!!o,o?[]:"",!1));return;case"textarea":x=J=null;for(w in g)if(i=g[w],g.hasOwnProperty(w)&&i!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ao(r,o,w,null,l,i)}for(t in l)if(i=l[t],h=g[t],l.hasOwnProperty(t)&&(i!=null||h!=null))switch(t){case"value":J=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:i!==h&&Ao(r,o,t,i,l,h)}SP(r,J,x);return;case"option":for(var ir in g)if(J=g[ir],g.hasOwnProperty(ir)&&J!=null&&!l.hasOwnProperty(ir))switch(ir){case"selected":r.selected=!1;break;default:Ao(r,o,ir,null,l,J)}for(A in l)if(J=l[A],x=g[A],l.hasOwnProperty(A)&&J!==x&&(J!=null||x!=null))switch(A){case"selected":r.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:Ao(r,o,A,J,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pr in g)J=g[Pr],g.hasOwnProperty(Pr)&&J!=null&&!l.hasOwnProperty(Pr)&&Ao(r,o,Pr,null,l,J);for(M in l)if(J=l[M],x=g[M],l.hasOwnProperty(M)&&J!==x&&(J!=null||x!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ao(r,o,M,J,l,x)}return;default:if(h1(o)){for(var Go in g)J=g[Go],g.hasOwnProperty(Go)&&J!==void 0&&!l.hasOwnProperty(Go)&&z2(r,o,Go,void 0,l,J);for(K in l)J=l[K],x=g[K],!l.hasOwnProperty(K)||J===x||J===void 0&&x===void 0||z2(r,o,K,J,l,x);return}}for(var sr in g)J=g[sr],g.hasOwnProperty(sr)&&J!=null&&!l.hasOwnProperty(sr)&&Ao(r,o,sr,null,l,J);for($ in l)J=l[$],x=g[$],!l.hasOwnProperty($)||J===x||J==null&&x==null||Ao(r,o,$,J,l,x)}function yH(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function U2(r){var o={};r=r.style;for(var g=0;g<r.length;g++){var l=r[g];o[l]=r.getPropertyValue(l)}return o}function cH(r,o,g){if(o!=null&&typeof o!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,i=l="",h;for(h in o)if(o.hasOwnProperty(h)){var t=o[h];t!=null&&typeof t!=="boolean"&&t!==""&&(h.indexOf("--")===0?(o1(t,h),l+=i+h+":"+(""+t).trim()):typeof t!=="number"||t===0||gq.has(h)?(o1(t,h),l+=i+h.replace(pA,"-$1").toLowerCase().replace(dA,"-ms-")+":"+(""+t).trim()):l+=i+h.replace(pA,"-$1").toLowerCase().replace(dA,"-ms-")+":"+t+"px",i=";")}l=l||null,o=r.getAttribute("style"),o!==l&&(l=kv(l),kv(o)!==l&&(g.style=U2(r)))}}function Je(r,o,g,l,i,h){if(i.delete(g),r=r.getAttribute(g),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(wo(l,o),r===""+l)return}hg(o,r,l,h)}function EH(r,o,g,l,i,h){if(i.delete(g),r=r.getAttribute(g),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}hg(o,r,l,h)}function K2(r,o,g,l,i,h){if(i.delete(g),r=r.getAttribute(g),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(wo(l,g),r===""+l)return}hg(o,r,l,h)}function aH(r,o,g,l,i,h){if(i.delete(g),r=r.getAttribute(g),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(wo(l,o),r===""+l))return}hg(o,r,l,h)}function $2(r,o,g,l,i,h){if(i.delete(g),r=r.getAttribute(g),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(wo(l,o),g=n1(""+l),r===g)return}hg(o,r,l,h)}function fH(r,o,g,l){for(var i={},h=new Set,t=r.attributes,w=0;w<t.length;w++)switch(t[w].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:h.add(t[w].name)}if(h1(o)){for(var A in g)if(g.hasOwnProperty(A)){var M=g[A];if(M!=null){if(p0.hasOwnProperty(A))typeof M!=="function"&&Gl(A,M);else if(g.suppressHydrationWarning!==!0)switch(A){case"children":typeof M!=="string"&&typeof M!=="number"||hg("children",r.textContent,M,i);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":t=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=VH(r,M),hg(A,t,M,i));continue;case"style":h.delete(A),cH(r,M,i);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":h.delete(A.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",A);continue;case"className":h.delete("class"),t=$P(r,"class",M),hg("className",t,M,i);continue;default:l.context===Pv&&o!=="svg"&&o!=="math"?h.delete(A.toLowerCase()):h.delete(A),t=$P(r,A,M),hg(A,t,M,i)}}}}else for(M in g)if(g.hasOwnProperty(M)&&(A=g[M],A!=null)){if(p0.hasOwnProperty(M))typeof A!=="function"&&Gl(M,A);else if(g.suppressHydrationWarning!==!0)switch(M){case"children":typeof A!=="string"&&typeof A!=="number"||hg("children",r.textContent,A,i);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":t=r.innerHTML,A=A?A.__html:void 0,A!=null&&(A=VH(r,A),t!==A&&(i[M]={__html:t}));continue;case"className":Je(r,M,"class",A,h,i);continue;case"tabIndex":Je(r,M,"tabindex",A,h,i);continue;case"style":h.delete(M),cH(r,A,i);continue;case"multiple":h.delete(M),hg(M,r.multiple,A,i);continue;case"muted":h.delete(M),hg(M,r.muted,A,i);continue;case"autoFocus":h.delete("autofocus"),hg(M,r.autofocus,A,i);continue;case"data":if(o!=="object"){h.delete(M),t=r.getAttribute("data"),hg(M,t,A,i);continue}case"src":case"href":if(!(A!==""||o==="a"&&M==="href"||o==="object"&&M==="data")){M==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M);continue}$2(r,M,M,A,h,i);continue;case"action":case"formAction":if(t=r.getAttribute(M),typeof A==="function"){h.delete(M.toLowerCase()),M==="formAction"?(h.delete("name"),h.delete("formenctype"),h.delete("formmethod"),h.delete("formtarget")):(h.delete("enctype"),h.delete("method"),h.delete("target"));continue}else if(t===bJ){h.delete(M.toLowerCase()),hg(M,"function",A,i);continue}$2(r,M,M.toLowerCase(),A,h,i);continue;case"xlinkHref":$2(r,M,"xlink:href",A,h,i);continue;case"contentEditable":K2(r,M,"contenteditable",A,h,i);continue;case"spellCheck":K2(r,M,"spellcheck",A,h,i);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":K2(r,M,M,A,h,i);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":EH(r,M,M.toLowerCase(),A,h,i);continue;case"capture":case"download":r:{w=r;var K=t=M,$=i;if(h.delete(K),w=w.getAttribute(K),w===null)switch(typeof A){case"undefined":case"function":case"symbol":break r;default:if(A===!1)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":break;case"boolean":if(A===!0&&w==="")break r;break;default:if(wo(A,t),w===""+A)break r}hg(t,w,A,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(w=r,K=t=M,$=i,h.delete(K),w=w.getAttribute(K),w===null)switch(typeof A){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(A)||1>A)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(A)||1>A)&&(wo(A,t),w===""+A))break r}hg(t,w,A,$)}continue;case"rowSpan":aH(r,M,"rowspan",A,h,i);continue;case"start":aH(r,M,M,A,h,i);continue;case"xHeight":Je(r,M,"x-height",A,h,i);continue;case"xlinkActuate":Je(r,M,"xlink:actuate",A,h,i);continue;case"xlinkArcrole":Je(r,M,"xlink:arcrole",A,h,i);continue;case"xlinkRole":Je(r,M,"xlink:role",A,h,i);continue;case"xlinkShow":Je(r,M,"xlink:show",A,h,i);continue;case"xlinkTitle":Je(r,M,"xlink:title",A,h,i);continue;case"xlinkType":Je(r,M,"xlink:type",A,h,i);continue;case"xmlBase":Je(r,M,"xml:base",A,h,i);continue;case"xmlLang":Je(r,M,"xml:lang",A,h,i);continue;case"xmlSpace":Je(r,M,"xml:space",A,h,i);continue;case"inert":A!==""||au[M]||(au[M]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",M)),EH(r,M,M,A,h,i);continue;default:if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){w=jP(M),t=!1,l.context===Pv&&o!=="svg"&&o!=="math"?h.delete(w.toLowerCase()):(K=M.toLowerCase(),K=iu.hasOwnProperty(K)?iu[K]||null:null,K!==null&&K!==M&&(t=!0,h.delete(K)),h.delete(w));r:if(K=r,$=w,w=A,e1($))if(K.hasAttribute($))K=K.getAttribute($),wo(w,$),w=K===""+w?w:K;else{switch(typeof w){case"function":case"symbol":break r;case"boolean":if(K=$.toLowerCase().slice(0,5),K!=="data-"&&K!=="aria-")break r}w=w===void 0?void 0:null}else w=void 0;t||hg(M,w,A,i)}}}return 0<h.size&&g.suppressHydrationWarning!==!0&&fG(r,h,i),Object.keys(i).length===0?null:i}function pG(r,o){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+o+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+o+" "+r[r.length-1]}}function jH(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dG(){if(typeof performance.getEntriesByType==="function"){for(var r=0,o=0,g=performance.getEntriesByType("resource"),l=0;l<g.length;l++){var i=g[l],h=i.transferSize,t=i.initiatorType,w=i.duration;if(h&&w&&jH(t)){t=0,w=i.responseEnd;for(l+=1;l<g.length;l++){var A=g[l],M=A.startTime;if(M>w)break;var{transferSize:K,initiatorType:$}=A;K&&jH($)&&(A=A.responseEnd,t+=K*(A<w?1:(w-M)/(A-M)))}if(--l,o+=8*(h+t)/(i.duration/1000),r++,10<r)break}}if(0<r)return o/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Dt(r){return r.nodeType===9?r:r.ownerDocument}function pH(r){switch(r){case ih:return Bh;case vu:return ju;default:return Pv}}function dH(r,o){if(r===Pv)switch(o){case"svg":return Bh;case"math":return ju;default:return Pv}return r===Bh&&o==="foreignObject"?Pv:r}function L2(r,o){return r==="textarea"||r==="noscript"||typeof o.children==="string"||typeof o.children==="number"||typeof o.children==="bigint"||typeof o.dangerouslySetInnerHTML==="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}function sG(){var r=window.event;if(r&&r.type==="popstate"){if(r===P6)return!1;return P6=r,!0}return P6=null,!1}function F1(){var r=window.event;return r&&r!==$n?r.type:null}function x1(){var r=window.event;return r&&r!==$n?r.timeStamp:-1.1}function rX(r){setTimeout(function(){throw r})}function oX(r,o,g){switch(o){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src?r.src=g.src:g.srcSet&&(r.srcset=g.srcSet)}}function gX(){}function eX(r,o,g,l){jG(r,o,g,l),r[xg]=l}function sH(r){i1(r,"")}function lX(r,o,g){r.nodeValue=g}function rA(r){if(!r.__reactWarnedAboutChildrenConflict){var o=r[xg]||null;if(o!==null){var g=Fr(r);g!==null&&(typeof o.children==="string"||typeof o.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,nr(g,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):o.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,nr(g,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Dv(r){return r==="head"}function vX(r,o){r.removeChild(o)}function iX(r,o){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(o)}function oA(r,o){var g=o,l=0;do{var i=g.nextSibling;if(r.removeChild(g),i&&i.nodeType===8)if(g=i.data,g===Kn||g===fu){if(l===0){r.removeChild(i),rh(o);return}l--}else if(g===Un||g===w0||g===Ai||g===Nh||g===Hi)l++;else if(g===uJ)N1(r.ownerDocument.documentElement);else if(g===PJ){g=r.ownerDocument.head,N1(g);for(var h=g.firstChild;h;){var{nextSibling:t,nodeName:w}=h;h[D1]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||g.removeChild(h),h=t}}else g===wJ&&N1(r.ownerDocument.body);g=i}while(g);rh(o)}function gA(r,o){var g=r;r=0;do{var l=g.nextSibling;if(g.nodeType===1?o?(g._stashedDisplay=g.style.display,g.style.display="none"):(g.style.display=g._stashedDisplay||"",g.getAttribute("style")===""&&g.removeAttribute("style")):g.nodeType===3&&(o?(g._stashedText=g.nodeValue,g.nodeValue=""):g.nodeValue=g._stashedText||""),l&&l.nodeType===8)if(g=l.data,g===Kn)if(r===0)break;else r--;else g!==Un&&g!==w0&&g!==Ai&&g!==Nh||r++;g=l}while(g)}function hX(r){gA(r,!0)}function nX(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function bX(r){r.nodeValue=""}function tX(r){gA(r,!1)}function uX(r,o){o=o[OJ],o=o!==void 0&&o!==null&&o.hasOwnProperty("display")?o.display:null,r.style.display=o==null||typeof o==="boolean"?"":(""+o).trim()}function wX(r,o){r.nodeValue=o}function I2(r){var o=r.firstChild;o&&o.nodeType===10&&(o=o.nextSibling);for(;o;){var g=o;switch(o=o.nextSibling,g.nodeName){case"HTML":case"HEAD":case"BODY":I2(g),br(g);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(g.rel.toLowerCase()==="stylesheet")continue}r.removeChild(g)}}function PX(r,o,g,l){for(;r.nodeType===1;){var i=g;if(r.nodeName.toLowerCase()!==o.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(o==="input"&&r.type==="hidden"){wo(i.name,"name");var h=i.name==null?null:""+i.name;if(i.type==="hidden"&&r.getAttribute("name")===h)return r}else return r;else if(!r[D1])switch(o){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(h=r.getAttribute("rel"),h==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(h!==i.rel||r.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||r.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||r.getAttribute("title")!==(i.title==null?null:i.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(h=r.getAttribute("src"),(h!==(i.src==null?null:i.src)||r.getAttribute("type")!==(i.type==null?null:i.type)||r.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&h&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=be(r.nextSibling),r===null)break}return null}function OX(r,o,g){if(o==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=be(r.nextSibling),r===null)return null}return r}function eA(r,o){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=be(r.nextSibling),r===null)return null}return r}function F2(r){return r.data===w0||r.data===Ai}function x2(r){return r.data===Nh||r.data===w0&&r.ownerDocument.readyState!==cM}function HX(r,o){var g=r.ownerDocument;if(r.data===Ai)r._reactRetry=o;else if(r.data!==w0||g.readyState!==cM)o();else{var l=function(){o(),g.removeEventListener("DOMContentLoaded",l)};g.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function be(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o===Un||o===Nh||o===w0||o===Ai||o===Hi||o===t6||o===yM)break;if(o===Kn||o===fu)return null}}return r}function lA(r){if(r.nodeType===1){for(var o=r.nodeName.toLowerCase(),g={},l=r.attributes,i=0;i<l.length;i++){var h=l[i];g[yH(h.name)]=h.name.toLowerCase()==="style"?U2(r):h.value}return{type:o,props:g}}return r.nodeType===8?r.data===Hi?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function vA(r,o,g){return g===null||g[tJ]!==!0?(r.nodeValue===o?r=null:(o=kv(o),r=kv(r.nodeValue)===o?null:r.nodeValue),r):null}function N2(r){r=r.nextSibling;for(var o=0;r;){if(r.nodeType===8){var g=r.data;if(g===Kn||g===fu){if(o===0)return be(r.nextSibling);o--}else g!==Un&&g!==Nh&&g!==w0&&g!==Ai&&g!==Hi||o++}r=r.nextSibling}return null}function iA(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var g=r.data;if(g===Un||g===Nh||g===w0||g===Ai||g===Hi){if(o===0)return r;o--}else g!==Kn&&g!==fu||o++}r=r.previousSibling}return null}function AX(r){rh(r)}function qX(r){rh(r)}function MX(r){rh(r)}function hA(r,o,g,l,i){switch(i&&cw(r,l.ancestorInfo),o=Dt(g),r){case"html":if(r=o.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=o.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=o.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function RX(r,o,g,l){if(!g[cv]&&Fr(g)){var i=g.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",i,i,i)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(i=g.attributes;i.length;)g.removeAttributeNode(i[0]);qg(g,r,o),g[Mg]=l,g[xg]=o}function N1(r){for(var o=r.attributes;o.length;)r.removeAttributeNode(o[0]);br(r)}function Vt(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function nA(r,o,g){var l=Zh;if(l&&typeof o==="string"&&o){var i=Ye(o);i='link[rel="'+r+'"][href="'+i+'"]',typeof g==="string"&&(i+='[crossorigin="'+g+'"]'),dM.has(i)||(dM.add(i),r={rel:r,crossOrigin:g,href:o},l.querySelector(i)===null&&(o=l.createElement("link"),qg(o,"link",r),Yr(o),l.head.appendChild(o)))}}function bA(r,o,g,l){var i=(i=_v.current)?Vt(i):null;if(!i)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof g.precedence==="string"&&typeof g.href==="string"?(g=di(g.href),o=eo(i).hoistableStyles,l=o.get(g),l||(l={type:"style",instance:null,count:0,state:null},o.set(g,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(g.rel==="stylesheet"&&typeof g.href==="string"&&typeof g.precedence==="string"){r=di(g.href);var h=eo(i).hoistableStyles,t=h.get(r);if(!t&&(i=i.ownerDocument||i,t={type:"stylesheet",instance:null,count:0,state:{loading:Mi,preload:null}},h.set(r,t),(h=i.querySelector(B1(r)))&&!h._p&&(t.instance=h,t.state.loading=Ln|Be),!Ze.has(r))){var w={rel:"preload",as:"style",href:g.href,crossOrigin:g.crossOrigin,integrity:g.integrity,media:g.media,hrefLang:g.hrefLang,referrerPolicy:g.referrerPolicy};Ze.set(r,w),h||WX(i,r,w,t.state)}if(o&&l===null)throw g=`

  - `+_t(o)+`
  + `+_t(g),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+g);return t}if(o&&l!==null)throw g=`

  - `+_t(o)+`
  + `+_t(g),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+g);return null;case"script":return o=g.async,g=g.src,typeof g==="string"&&o&&typeof o!=="function"&&typeof o!=="symbol"?(g=si(g),o=eo(i).hoistableScripts,l=o.get(g),l||(l={type:"script",instance:null,count:0,state:null},o.set(g,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function _t(r){var o=0,g="<link";return typeof r.rel==="string"?(o++,g+=' rel="'+r.rel+'"'):Ve.call(r,"rel")&&(o++,g+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(o++,g+=' href="'+r.href+'"'):Ve.call(r,"href")&&(o++,g+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(o++,g+=' precedence="'+r.precedence+'"'):Ve.call(r,"precedence")&&(o++,g+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>o&&(g+=" ..."),g+" />"}function di(r){return'href="'+Ye(r)+'"'}function B1(r){return'link[rel="stylesheet"]['+r+"]"}function tA(r){return Er({},r,{"data-precedence":r.precedence,precedence:null})}function WX(r,o,g,l){r.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=Ln:(o=r.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=Ln}),o.addEventListener("error",function(){return l.loading|=jM}),qg(o,"link",g),Yr(o),r.head.appendChild(o))}function si(r){return'[src="'+Ye(r)+'"]'}function Z1(r){return"script[async]"+r}function uA(r,o,g){if(o.count++,o.instance===null)switch(o.type){case"style":var l=r.querySelector('style[data-href~="'+Ye(g.href)+'"]');if(l)return o.instance=l,Yr(l),l;var i=Er({},g,{"data-href":g.href,"data-precedence":g.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),Yr(l),qg(l,"style",i),yt(l,g.precedence,r),o.instance=l;case"stylesheet":i=di(g.href);var h=r.querySelector(B1(i));if(h)return o.state.loading|=Be,o.instance=h,Yr(h),h;l=tA(g),(i=Ze.get(i))&&B2(l,i),h=(r.ownerDocument||r).createElement("link"),Yr(h);var t=h;return t._p=new Promise(function(w,A){t.onload=w,t.onerror=A}),qg(h,"link",l),o.state.loading|=Be,yt(h,g.precedence,r),o.instance=h;case"script":if(h=si(g.src),i=r.querySelector(Z1(h)))return o.instance=i,Yr(i),i;if(l=g,i=Ze.get(h))l=Er({},g),Z2(l,i);return r=r.ownerDocument||r,i=r.createElement("script"),Yr(i),qg(i,"link",l),r.head.appendChild(i),o.instance=i;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+o.type+'". this is a bug in React.')}else o.type==="stylesheet"&&(o.state.loading&Be)===Mi&&(l=o.instance,o.state.loading|=Be,yt(l,g.precedence,r));return o.instance}function yt(r,o,g){for(var l=g.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,h=i,t=0;t<l.length;t++){var w=l[t];if(w.dataset.precedence===o)h=w;else if(h!==i)break}h?h.parentNode.insertBefore(r,h.nextSibling):(o=g.nodeType===9?g.head:g,o.insertBefore(r,o.firstChild))}function B2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.title==null&&(r.title=o.title)}function Z2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.integrity==null&&(r.integrity=o.integrity)}function wA(r,o,g){if(pu===null){var l=new Map,i=pu=new Map;i.set(g,l)}else i=pu,l=i.get(g),l||(l=new Map,i.set(g,l));if(l.has(r))return l;l.set(r,null),g=g.getElementsByTagName(r);for(i=0;i<g.length;i++){var h=g[i];if(!(h[D1]||h[Mg]||r==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!==ih){var t=h.getAttribute(o)||"";t=r+t;var w=l.get(t);w?w.push(h):l.set(t,[h])}}return l}function PA(r,o,g){r=r.ownerDocument||r,r.head.insertBefore(g,o==="title"?r.querySelector("head > title"):null)}function mX(r,o,g){var l=!g.ancestorInfo.containerTagInScope;if(g.context===Bh||o.itemProp!=null)return!l||o.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof o.precedence!=="string"||typeof o.href!=="string"||o.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""||o.onLoad||o.onError){if(o.rel==="stylesheet"&&typeof o.precedence==="string"){r=o.href;var{onError:i,disabled:h}=o;g=[],o.onLoad&&g.push("`onLoad`"),i&&g.push("`onError`"),h!=null&&g.push("`disabled`"),i=pG(g,"and"),i+=g.length===1?" prop":" props",h=g.length===1?"an "+i:"the "+i,g.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,h,i)}l&&(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(o.onError||o.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(o.rel){case"stylesheet":return r=o.precedence,o=o.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&o==null;default:return!0}case"script":if(r=o.async&&typeof o.async!=="function"&&typeof o.async!=="symbol",!r||o.onLoad||o.onError||!o.src||typeof o.src!=="string"){l&&(r?o.onLoad||o.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function OA(r){return r.type==="stylesheet"&&(r.state.loading&pM)===Mi?!1:!0}function GX(r,o,g,l){if(g.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(g.state.loading&Be)===Mi){if(g.instance===null){var i=di(l.href),h=o.querySelector(B1(i));if(h){o=h._p,o!==null&&typeof o==="object"&&typeof o.then==="function"&&(r.count++,r=ct.bind(r),o.then(r,r)),g.state.loading|=Be,g.instance=h,Yr(h);return}h=o.ownerDocument||o,l=tA(l),(i=Ze.get(i))&&B2(l,i),h=h.createElement("link"),Yr(h);var t=h;t._p=new Promise(function(w,A){t.onload=w,t.onerror=A}),qg(h,"link",l),g.instance=h}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(g,o),(o=g.state.preload)&&(g.state.loading&pM)===Mi&&(r.count++,g=ct.bind(r),o.addEventListener("load",g),o.addEventListener("error",g))}}function XX(r,o){return r.stylesheets&&r.count===0&&Et(r,r.stylesheets),0<r.count||0<r.imgCount?function(g){var l=setTimeout(function(){if(r.stylesheets&&Et(r,r.stylesheets),r.unsuspend){var h=r.unsuspend;r.unsuspend=null,h()}},qJ+o);0<r.imgBytes&&H6===0&&(H6=125*dG()*RJ);var i=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&Et(r,r.stylesheets),r.unsuspend)){var h=r.unsuspend;r.unsuspend=null,h()}},(r.imgBytes>H6?50:MJ)+o);return r.unsuspend=g,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function ct(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Et(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function Et(r,o){r.stylesheets=null,r.unsuspend!==null&&(r.count++,du=new Map,o.forEach(YX,r),du=null,ct.call(r))}function YX(r,o){if(!(o.state.loading&Be)){var g=du.get(r);if(g)var l=g.get(A6);else{g=new Map,du.set(r,g);for(var i=r.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<i.length;h++){var t=i[h];if(t.nodeName==="LINK"||t.getAttribute("media")!=="not all")g.set(t.dataset.precedence,t),l=t}l&&g.set(A6,l)}i=o.instance,t=i.getAttribute("data-precedence"),h=g.get(t)||l,h===l&&g.set(A6,i),g.set(t,i),this.count++,l=ct.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),h?h.parentNode.insertBefore(i,h.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(i,r.firstChild)),o.state.loading|=Be}}function JX(r,o,g,l,i,h,t,w,A){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=qi,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.hiddenUpdates=Bi(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=h,this.onRecoverableError=t,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(o=0;31>o;o++)r.push(new Set);this._debugRootType=g?"hydrateRoot()":"createRoot()"}function HA(r,o,g,l,i,h,t,w,A,M,K,$){return r=new JX(r,o,g,t,A,M,K,$,w),o=_Y,h===!0&&(o|=Ug|ye),o|=kr,h=X(3,null,null,o),r.current=h,h.stateNode=r,o=u5(),_0(o),r.pooledCache=o,_0(o),h.memoizedState={element:l,isDehydrated:g,cache:o},A5(h),r}function AA(r){if(!r)return jv;return r=jv,r}function C2(r,o,g,l,i,h){if(zg&&typeof zg.onScheduleFiberRoot==="function")try{zg.onScheduleFiberRoot(lh,l,g)}catch(t){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",t))}i=AA(i),l.context===null?l.context=i:l.pendingContext=i,Jl&&ue!==null&&!gR&&(gR=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,C(ue)||"Unknown")),l=Nv(o),l.payload={element:g},h=h===void 0?null:h,h!==null&&(typeof h!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",h),l.callback=h),g=Bv(r,l,o),g!==null&&(tl(o,"root.render()",null),No(g,r,o),q1(g,r,o))}function qA(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var g=r.retryLane;r.retryLane=g!==0&&g<o?g:o}}function S2(r,o){qA(r,o),(r=r.alternate)&&qA(r,o)}function MA(r){if(r.tag===13||r.tag===31){var o=Qg(r,67108864);o!==null&&No(o,r,67108864),S2(r,67108864)}}function RA(r){if(r.tag===13||r.tag===31){var o=ne(r);o=N0(o);var g=Qg(r,o);g!==null&&No(g,r,o),S2(r,o)}}function QX(){return ue}function zX(r,o,g,l){var i=S.T;S.T=null;var h=no.p;try{no.p=we,T2(r,o,g,l)}finally{no.p=h,S.T=i}}function UX(r,o,g,l){var i=S.T;S.T=null;var h=no.p;try{no.p=_e,T2(r,o,g,l)}finally{no.p=h,S.T=i}}function T2(r,o,g,l){if(rw){var i=k2(l);if(i===null)J2(r,o,l,ow,g),mA(r,l);else if(KX(i,r,o,g,l))l.stopPropagation();else if(mA(r,l),o&4&&-1<mJ.indexOf(r)){for(;i!==null;){var h=Fr(i);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var t=il(h.pendingLanes);if(t!==0){var w=h;w.pendingLanes|=2;for(w.entangledLanes|=2;t;){var A=1<<31-Fg(t);w.entanglements[1]|=A,t&=~A}ml(h),(go&(ig|Ae))===ug&&(Zu=ng()+$M,L1(0,!1))}}break;case 31:case 13:w=Qg(h,2),w!==null&&No(w,h,2),fi(),S2(h,2)}if(h=k2(l),h===null&&J2(r,o,l,ow,g),h===i)break;i=h}i!==null&&l.stopPropagation()}else J2(r,o,l,null,g)}}function k2(r){return r=Ew(r),D2(r)}function D2(r){if(ow=null,r=Mr(r),r!==null){var o=rr(r);if(o===null)r=null;else{var g=o.tag;if(g===13){if(r=ur(o),r!==null)return r;r=null}else if(g===31){if(r=lr(o),r!==null)return r;r=null}else if(g===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null)}}return ow=r,null}function WA(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return we;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _e;case"message":switch(CX()){case o4:return we;case g4:return _e;case eh:case SX:return Ul;case e4:return eu;default:return Ul}default:return Ul}}function mA(r,o){switch(r){case"focusin":case"focusout":P0=null;break;case"dragenter":case"dragleave":O0=null;break;case"mouseover":case"mouseout":H0=null;break;case"pointerover":case"pointerout":Fn.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(o.pointerId)}}function C1(r,o,g,l,i,h){if(r===null||r.nativeEvent!==h)return r={blockedOn:o,domEventName:g,eventSystemFlags:l,nativeEvent:h,targetContainers:[i]},o!==null&&(o=Fr(o),o!==null&&MA(o)),r;return r.eventSystemFlags|=l,o=r.targetContainers,i!==null&&o.indexOf(i)===-1&&o.push(i),r}function KX(r,o,g,l,i){switch(o){case"focusin":return P0=C1(P0,r,o,g,l,i),!0;case"dragenter":return O0=C1(O0,r,o,g,l,i),!0;case"mouseover":return H0=C1(H0,r,o,g,l,i),!0;case"pointerover":var h=i.pointerId;return Fn.set(h,C1(Fn.get(h)||null,r,o,g,l,i)),!0;case"gotpointercapture":return h=i.pointerId,xn.set(h,C1(xn.get(h)||null,r,o,g,l,i)),!0}return!1}function GA(r){var o=Mr(r.target);if(o!==null){var g=rr(o);if(g!==null){if(o=g.tag,o===13){if(o=ur(g),o!==null){r.blockedOn=o,or(r.priority,function(){RA(g)});return}}else if(o===31){if(o=lr(g),o!==null){r.blockedOn=o,or(r.priority,function(){RA(g)});return}}else if(o===3&&g.stateNode.current.memoizedState.isDehydrated){r.blockedOn=g.tag===3?g.stateNode.containerInfo:null;return}}}r.blockedOn=null}function at(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var g=k2(r.nativeEvent);if(g===null){g=r.nativeEvent;var l=new g.constructor(g.type,g),i=l;V1!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),V1=i,g.target.dispatchEvent(l),V1===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),V1=null}else return o=Fr(g),o!==null&&MA(o),r.blockedOn=g,!1;o.shift()}return!0}function XA(r,o,g){at(r)&&g.delete(o)}function $X(){q6=!1,P0!==null&&at(P0)&&(P0=null),O0!==null&&at(O0)&&(O0=null),H0!==null&&at(H0)&&(H0=null),Fn.forEach(XA),xn.forEach(XA)}function ft(r,o){r.blockedOn===o&&(r.blockedOn=null,q6||(q6=!0,lo.unstable_scheduleCallback(lo.unstable_NormalPriority,$X)))}function YA(r){gw!==r&&(gw=r,lo.unstable_scheduleCallback(lo.unstable_NormalPriority,function(){gw===r&&(gw=null);for(var o=0;o<r.length;o+=3){var g=r[o],l=r[o+1],i=r[o+2];if(typeof l!=="function")if(D2(l||g)===null)continue;else break;var h=Fr(g);h!==null&&(r.splice(o,3),o-=3,g={pending:!0,data:i,method:g.method,action:l},Object.freeze(g),D5(h,g,l,i))}}))}function rh(r){function o(A){return ft(A,r)}P0!==null&&ft(P0,r),O0!==null&&ft(O0,r),H0!==null&&ft(H0,r),Fn.forEach(o),xn.forEach(o);for(var g=0;g<A0.length;g++){var l=A0[g];l.blockedOn===r&&(l.blockedOn=null)}for(;0<A0.length&&(g=A0[0],g.blockedOn===null);)GA(g),g.blockedOn===null&&A0.shift();if(g=(r.ownerDocument||r).$$reactFormReplay,g!=null)for(l=0;l<g.length;l+=3){var i=g[l],h=g[l+1],t=i[xg]||null;if(typeof h==="function")t||YA(g);else if(t){var w=null;if(h&&h.hasAttribute("formAction")){if(i=h,t=h[xg]||null)w=t.formAction;else if(D2(i)!==null)continue}else w=t.action;typeof w==="function"?g[l+1]=w:(g.splice(l,3),l-=3),YA(g)}}}function JA(){function r(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(t){return i=t})},focusReset:"manual",scroll:"manual"})}function o(){i!==null&&(i(),i=null),l||setTimeout(g,20)}function g(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,i=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",o),navigation.addEventListener("navigateerror",o),setTimeout(g,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",o),navigation.removeEventListener("navigateerror",o),i!==null&&(i(),i=null)}}}function V2(r){this._internalRoot=r}function jt(r){this._internalRoot=r}function QA(r){r[cv]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var Er=Object.assign,LX=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),oh=Symbol.for("react.portal"),gh=Symbol.for("react.fragment"),pt=Symbol.for("react.strict_mode"),_2=Symbol.for("react.profiler"),y2=Symbol.for("react.consumer"),Yl=Symbol.for("react.context"),S1=Symbol.for("react.forward_ref"),c2=Symbol.for("react.suspense"),E2=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),a2=Symbol.for("react.activity"),IX=Symbol.for("react.memo_cache_sentinel"),zA=Symbol.iterator,FX=Symbol.for("react.client.reference"),lg=Array.isArray,S=Sh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,no=W6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xX=Object.freeze({pending:!1,data:null,method:null,action:null}),f2=[],j2=[],sl=-1,Vv=Rr(null),T1=Rr(null),_v=Rr(null),st=Rr(null),k1=0,UA,KA,$A,LA,IA,FA,xA;V.__reactDisabledLog=!0;var p2,NA,d2=!1,s2=new(typeof WeakMap==="function"?WeakMap:Map),ue=null,Jl=!1,Ve=Object.prototype.hasOwnProperty,r4=lo.unstable_scheduleCallback,NX=lo.unstable_cancelCallback,BX=lo.unstable_shouldYield,ZX=lo.unstable_requestPaint,ng=lo.unstable_now,CX=lo.unstable_getCurrentPriorityLevel,o4=lo.unstable_ImmediatePriority,g4=lo.unstable_UserBlockingPriority,eh=lo.unstable_NormalPriority,SX=lo.unstable_LowPriority,e4=lo.unstable_IdlePriority,TX=lo.log,kX=lo.unstable_setDisableYieldValue,lh=null,zg=null,Ql=!1,zl=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Fg=Math.clz32?Math.clz32:kb,DX=Math.log,VX=Math.LN2,ru=256,ou=262144,gu=4194304,we=2,_e=8,Ul=32,eu=268435456,yv=Math.random().toString(36).slice(2),Mg="__reactFiber$"+yv,xg="__reactProps$"+yv,cv="__reactContainer$"+yv,l4="__reactEvents$"+yv,_X="__reactListeners$"+yv,yX="__reactHandles$"+yv,BA="__reactResources$"+yv,D1="__reactMarker$"+yv,ZA=new Set,p0={},v4={},cX={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},EX=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),CA={},SA={},aX=/[\n"\\]/g,TA=!1,kA=!1,DA=!1,VA=!1,_A=!1,yA=!1,cA=["value","defaultValue"],EA=!1,aA=/["'&<>\n\t]|^\s|\s$/,fX="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),fA="applet caption html table td th marquee object template foreignObject desc title".split(" "),jX=fA.concat(["button"]),pX="dd dt li option optgroup p rp rt".split(" "),jA={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},lu={},i4={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},pA=/([A-Z])/g,dA=/^ms-/,dX=/^(?:webkit|moz|o)[A-Z]/,sX=/^-ms-/,rY=/-(.)/g,sA=/;\s*$/,vh={},h4={},rq=!1,oq=!1,gq=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),vu="http://www.w3.org/1998/Math/MathML",ih="http://www.w3.org/2000/svg",oY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},eq={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},hh={},gY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lq=!1,Ng={},vq=/^on./,lY=/^on[^A-Z]/,vY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hY=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,V1=null,nh=null,bh=null,n4=!1,Kl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b4=!1;if(Kl)try{var _1={};Object.defineProperty(_1,"passive",{get:function(){b4=!0}}),window.addEventListener("test",_1,_1),window.removeEventListener("test",_1,_1)}catch(r){b4=!1}var Ev=null,t4=null,hu=null,d0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=cg(d0),y1=Er({},d0,{view:0,detail:0}),nY=cg(y1),u4,w4,c1,bu=Er({},y1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aw,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==c1&&(c1&&r.type==="mousemove"?(u4=r.screenX-c1.screenX,w4=r.screenY-c1.screenY):w4=u4=0,c1=r),u4},movementY:function(r){return"movementY"in r?r.movementY:w4}}),iq=cg(bu),bY=Er({},bu,{dataTransfer:0}),tY=cg(bY),uY=Er({},y1,{relatedTarget:0}),P4=cg(uY),wY=Er({},d0,{animationName:0,elapsedTime:0,pseudoElement:0}),PY=cg(wY),OY=Er({},d0,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),HY=cg(OY),AY=Er({},d0,{data:0}),hq=cg(AY),qY=hq,MY={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RY={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WY={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},mY=Er({},y1,{key:function(r){if(r.key){var o=MY[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=ab(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?RY[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aw,charCode:function(r){return r.type==="keypress"?ab(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ab(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),GY=cg(mY),XY=Er({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nq=cg(XY),YY=Er({},y1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aw}),JY=cg(YY),QY=Er({},d0,{propertyName:0,elapsedTime:0,pseudoElement:0}),zY=cg(QY),UY=Er({},bu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),KY=cg(UY),$Y=Er({},d0,{newState:0,oldState:0}),LY=cg($Y),IY=[9,13,27,32],bq=229,O4=Kl&&"CompositionEvent"in window,E1=null;Kl&&"documentMode"in document&&(E1=document.documentMode);var FY=Kl&&"TextEvent"in window&&!E1,tq=Kl&&(!O4||E1&&8<E1&&11>=E1),uq=32,wq=String.fromCharCode(uq),Pq=!1,th=!1,xY={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},a1=null,f1=null,Oq=!1;Kl&&(Oq=oG("input")&&(!document.documentMode||9<document.documentMode));var Bg=typeof Object.is==="function"?Object.is:hG,NY=Kl&&"documentMode"in document&&11>=document.documentMode,uh=null,H4=null,j1=null,A4=!1,wh={animationend:Z0("Animation","AnimationEnd"),animationiteration:Z0("Animation","AnimationIteration"),animationstart:Z0("Animation","AnimationStart"),transitionrun:Z0("Transition","TransitionRun"),transitionstart:Z0("Transition","TransitionStart"),transitioncancel:Z0("Transition","TransitionCancel"),transitionend:Z0("Transition","TransitionEnd")},q4={},Hq={};Kl&&(Hq=document.createElement("div").style,("AnimationEvent"in window)||(delete wh.animationend.animation,delete wh.animationiteration.animation,delete wh.animationstart.animation),("TransitionEvent"in window)||delete wh.transitionend.transition);var Aq=C0("animationend"),qq=C0("animationiteration"),Mq=C0("animationstart"),BY=C0("transitionrun"),ZY=C0("transitionstart"),CY=C0("transitioncancel"),Rq=C0("transitionend"),Wq=new Map,M4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");M4.push("scrollEnd");var mq=0;if(typeof performance==="object"&&typeof performance.now==="function")var SY=performance,Gq=function(){return SY.now()};else{var TY=Date;Gq=function(){return TY.now()}}var R4=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(o))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},kY="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",tu=0,W4=1,m4=2,G4=3,uu="– ",wu="+ ",Xq="  ",Jo=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",Qe="Components ⚛",ar="Scheduler ⚛",fr="Blocking",av=!1,rv={color:"primary",properties:null,tooltipText:"",track:Qe},fv={start:-0,end:-0,detail:{devtools:rv}},DY=["Changed Props",""],Yq="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",VY=["Changed Props",Yq],p1=1,ov=2,ze=[],Ph=0,X4=0,jv={};Object.freeze(jv);var Ue=null,Oh=null,Ur=0,_Y=1,kr=2,Ug=8,ye=16,yY=32,Jq=!1;try{var Qq=Object.preventExtensions({})}catch(r){Jq=!0}var Y4=new WeakMap,Hh=[],Ah=0,Pu=null,d1=0,Ke=[],$e=0,s0=null,gv=1,ev="",Rg=null,Qo=null,pr=!1,$l=!1,Pe=null,pv=null,Le=!1,J4=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Q4=Rr(null),z4=Rr(null),zq={},Ou=null,qh=null,Mh=!1,cY=typeof AbortController<"u"?AbortController:function(){var r=[],o=this.signal={aborted:!1,addEventListener:function(g,l){r.push(l)}};this.abort=function(){o.aborted=!0,r.forEach(function(g){return g()})}},EY=lo.unstable_scheduleCallback,aY=lo.unstable_NormalPriority,fo={$$typeof:Yl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},jo=lo.unstable_now,Hu=console.createTask?console.createTask:function(){return null},s1=1,Au=2,bg=-0,dv=-0,lv=-0,vv=null,Zg=-1.1,ri=-0,Io=-0,Jr=-1.1,zr=-1.1,$o=null,Bo=!1,sv=-0,Ll=-1.1,rn=null,r0=0,U4=null,K4=null,oi=-1.1,on=null,Rh=-1.1,qu=-1.1,Il=-0,iv=-1.1,Ie=-1.1,$4=0,gn=null,Uq=null,Kq=null,o0=-1.1,gi=null,g0=-1.1,Mu=-1.1,$q=-0,Lq=-0,Ru=0,hv=null,Iq=0,en=-1.1,Wu=!1,mu=!1,ln=null,L4=0,ei=0,Wh=null,Fq=S.S;S.S=function(r,o){if(UM=ng(),typeof o==="object"&&o!==null&&typeof o.then==="function"){if(0>iv&&0>Ie){iv=jo();var g=x1(),l=F1();if(g!==g0||l!==gi)g0=-1.1;o0=g,gi=l}OG(r,o)}Fq!==null&&Fq(r,o)};var li=Rr(null),ce={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},vn=[],hn=[],nn=[],bn=[],tn=[],un=[],vi=new Set;ce.recordUnsafeLifecycleWarnings=function(r,o){vi.has(r.type)||(typeof o.componentWillMount==="function"&&o.componentWillMount.__suppressDeprecationWarning!==!0&&vn.push(r),r.mode&Ug&&typeof o.UNSAFE_componentWillMount==="function"&&hn.push(r),typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&nn.push(r),r.mode&Ug&&typeof o.UNSAFE_componentWillReceiveProps==="function"&&bn.push(r),typeof o.componentWillUpdate==="function"&&o.componentWillUpdate.__suppressDeprecationWarning!==!0&&tn.push(r),r.mode&Ug&&typeof o.UNSAFE_componentWillUpdate==="function"&&un.push(r))},ce.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<vn.length&&(vn.forEach(function(w){r.add(C(w)||"Component"),vi.add(w.type)}),vn=[]);var o=new Set;0<hn.length&&(hn.forEach(function(w){o.add(C(w)||"Component"),vi.add(w.type)}),hn=[]);var g=new Set;0<nn.length&&(nn.forEach(function(w){g.add(C(w)||"Component"),vi.add(w.type)}),nn=[]);var l=new Set;0<bn.length&&(bn.forEach(function(w){l.add(C(w)||"Component"),vi.add(w.type)}),bn=[]);var i=new Set;0<tn.length&&(tn.forEach(function(w){i.add(C(w)||"Component"),vi.add(w.type)}),tn=[]);var h=new Set;if(0<un.length&&(un.forEach(function(w){h.add(C(w)||"Component"),vi.add(w.type)}),un=[]),0<o.size){var t=q(o);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,t)}0<l.size&&(t=q(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,t)),0<h.size&&(t=q(h),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,t)),0<r.size&&(t=q(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,t)),0<g.size&&(t=q(g),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,t)),0<i.size&&(t=q(i),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,t))};var Gu=new Map,xq=new Set;ce.recordLegacyContextWarning=function(r,o){var g=null;for(var l=r;l!==null;)l.mode&Ug&&(g=l),l=l.return;g===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!xq.has(r.type)&&(l=Gu.get(g),r.type.contextTypes!=null||r.type.childContextTypes!=null||o!==null&&typeof o.getChildContext==="function")&&(l===void 0&&(l=[],Gu.set(g,l)),l.push(r))},ce.flushLegacyContextWarning=function(){Gu.forEach(function(r){if(r.length!==0){var o=r[0],g=new Set;r.forEach(function(i){g.add(C(i)||"Component"),xq.add(i.type)});var l=q(g);nr(o,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},ce.discardPendingWarnings=function(){vn=[],hn=[],nn=[],bn=[],tn=[],un=[],Gu=new Map};var Nq={react_stack_bottom_frame:function(r,o,g){var l=Jl;Jl=!0;try{return r(o,g)}finally{Jl=l}}},I4=Nq.react_stack_bottom_frame.bind(Nq),Bq={react_stack_bottom_frame:function(r){var o=Jl;Jl=!0;try{return r.render()}finally{Jl=o}}},Zq=Bq.react_stack_bottom_frame.bind(Bq),Cq={react_stack_bottom_frame:function(r,o){try{o.componentDidMount()}catch(g){ho(r,r.return,g)}}},F4=Cq.react_stack_bottom_frame.bind(Cq),Sq={react_stack_bottom_frame:function(r,o,g,l,i){try{o.componentDidUpdate(g,l,i)}catch(h){ho(r,r.return,h)}}},Tq=Sq.react_stack_bottom_frame.bind(Sq),kq={react_stack_bottom_frame:function(r,o){var g=o.stack;r.componentDidCatch(o.value,{componentStack:g!==null?g:""})}},fY=kq.react_stack_bottom_frame.bind(kq),Dq={react_stack_bottom_frame:function(r,o,g){try{g.componentWillUnmount()}catch(l){ho(r,o,l)}}},Vq=Dq.react_stack_bottom_frame.bind(Dq),_q={react_stack_bottom_frame:function(r){var o=r.create;return r=r.inst,o=o(),r.destroy=o}},jY=_q.react_stack_bottom_frame.bind(_q),yq={react_stack_bottom_frame:function(r,o,g){try{g()}catch(l){ho(r,o,l)}}},pY=yq.react_stack_bottom_frame.bind(yq),cq={react_stack_bottom_frame:function(r){var o=r._init;return o(r._payload)}},dY=cq.react_stack_bottom_frame.bind(cq),mh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),x4=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Yu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},ii=null,wn=!1,Gh=null,Pn=0,Dr=null,N4,Eq=N4=!1,aq={},fq={},jq={};m=function(r,o,g){if(g!==null&&typeof g==="object"&&g._store&&(!g._store.validated&&g.key==null||g._store.validated===2)){if(typeof g._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");g._store.validated=1;var l=C(r),i=l||"null";if(!aq[i]){aq[i]=!0,g=g._owner,r=r._debugOwner;var h="";r&&typeof r.tag==="number"&&(i=C(r))&&(h=`

Check the render method of \``+i+"`."),h||l&&(h=`

Check the top-level render call using <`+l+">.");var t="";g!=null&&r!==g&&(l=null,typeof g.tag==="number"?l=C(g):typeof g.name==="string"&&(l=g.name),l&&(t=" It was passed a child from "+l+".")),nr(o,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',h,t)})}}};var hi=D8(!0),pq=D8(!1),dq=0,sq=1,rM=2,B4=3,e0=!1,oM=!1,Z4=null,C4=!1,Xh=Rr(null),Ju=Rr(0),Oe=Rr(null),Fe=null,Yh=1,On=2,Vo=Rr(0),Qu=0,xe=1,Cg=2,He=4,Sg=8,Jh,gM=new Set,eM=new Set,S4=new Set,lM=new Set,nv=0,Kr=null,qo=null,po=null,zu=!1,Qh=!1,ni=!1,Uu=0,Hn=0,bv=null,sY=0,rJ=25,B=null,Ne=null,tv=-1,An=!1,qn={readContext:Ko,use:Sv,useCallback:So,useContext:So,useEffect:So,useImperativeHandle:So,useLayoutEffect:So,useInsertionEffect:So,useMemo:So,useReducer:So,useRef:So,useState:So,useDebugValue:So,useDeferredValue:So,useTransition:So,useSyncExternalStore:So,useId:So,useHostTransitionStatus:So,useFormState:So,useActionState:So,useOptimistic:So,useMemoCache:So,useCacheRefresh:So};qn.useEffectEvent=So;var T4=null,vM=null,k4=null,iM=null,Fl=null,Ee=null,Ku=null;T4={readContext:function(r){return Ko(r)},use:Sv,useCallback:function(r,o){return B="useCallback",cr(),Di(o),C5(r,o)},useContext:function(r){return B="useContext",cr(),Ko(r)},useEffect:function(r,o){return B="useEffect",cr(),Di(o),Gt(r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",cr(),Di(g),Z5(r,o,g)},useInsertionEffect:function(r,o){B="useInsertionEffect",cr(),Di(o),c0(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",cr(),Di(o),B5(r,o)},useMemo:function(r,o){B="useMemo",cr(),Di(o);var g=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",cr();var l=S.H;S.H=Fl;try{return z5(r,o,g)}finally{S.H=l}},useRef:function(r){return B="useRef",cr(),x5(r)},useState:function(r){B="useState",cr();var o=S.H;S.H=Fl;try{return L5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",cr()},useDeferredValue:function(r,o){return B="useDeferredValue",cr(),T5(r,o)},useTransition:function(){return B="useTransition",cr(),V5()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",cr(),K5(r,o,g)},useId:function(){return B="useId",cr(),_5()},useFormState:function(r,o){return B="useFormState",cr(),qt(),_i(r,o)},useActionState:function(r,o){return B="useActionState",cr(),_i(r,o)},useOptimistic:function(r){return B="useOptimistic",cr(),I5(r)},useHostTransitionStatus:E0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",cr(),y5()},useEffectEvent:function(r){return B="useEffectEvent",cr(),N5(r)}},vM={readContext:function(r){return Ko(r)},use:Sv,useCallback:function(r,o){return B="useCallback",d(),C5(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){return B="useEffect",d(),Gt(r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",d(),Z5(r,o,g)},useInsertionEffect:function(r,o){B="useInsertionEffect",d(),c0(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),B5(r,o)},useMemo:function(r,o){B="useMemo",d();var g=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",d();var l=S.H;S.H=Fl;try{return z5(r,o,g)}finally{S.H=l}},useRef:function(r){return B="useRef",d(),x5(r)},useState:function(r){B="useState",d();var o=S.H;S.H=Fl;try{return L5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),T5(r,o)},useTransition:function(){return B="useTransition",d(),V5()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",d(),K5(r,o,g)},useId:function(){return B="useId",d(),_5()},useActionState:function(r,o){return B="useActionState",d(),_i(r,o)},useFormState:function(r,o){return B="useFormState",d(),qt(),_i(r,o)},useOptimistic:function(r){return B="useOptimistic",d(),I5(r)},useHostTransitionStatus:E0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),y5()},useEffectEvent:function(r){return B="useEffectEvent",d(),N5(r)}},k4={readContext:function(r){return Ko(r)},use:Sv,useCallback:function(r,o){return B="useCallback",d(),Jt(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){B="useEffect",d(),Eg(2048,Sg,r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",d(),Yt(r,o,g)},useInsertionEffect:function(r,o){return B="useInsertionEffect",d(),Eg(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),Eg(4,He,r,o)},useMemo:function(r,o){B="useMemo",d();var g=S.H;S.H=Ee;try{return Qt(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",d();var l=S.H;S.H=Ee;try{return Vi(r,o,g)}finally{S.H=l}},useRef:function(){return B="useRef",d(),to().memoizedState},useState:function(){B="useState",d();var r=S.H;S.H=Ee;try{return Vi(ke)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),tO(r,o)},useTransition:function(){return B="useTransition",d(),AO()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",d(),Rt(r,o,g)},useId:function(){return B="useId",d(),to().memoizedState},useFormState:function(r){return B="useFormState",d(),qt(),Wt(r)},useActionState:function(r){return B="useActionState",d(),Wt(r)},useOptimistic:function(r,o){return B="useOptimistic",d(),rO(r,o)},useHostTransitionStatus:E0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),to().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Xt(r)}},iM={readContext:function(r){return Ko(r)},use:Sv,useCallback:function(r,o){return B="useCallback",d(),Jt(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){B="useEffect",d(),Eg(2048,Sg,r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",d(),Yt(r,o,g)},useInsertionEffect:function(r,o){return B="useInsertionEffect",d(),Eg(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),Eg(4,He,r,o)},useMemo:function(r,o){B="useMemo",d();var g=S.H;S.H=Ku;try{return Qt(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",d();var l=S.H;S.H=Ku;try{return m1(r,o,g)}finally{S.H=l}},useRef:function(){return B="useRef",d(),to().memoizedState},useState:function(){B="useState",d();var r=S.H;S.H=Ku;try{return m1(ke)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),uO(r,o)},useTransition:function(){return B="useTransition",d(),qO()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",d(),Rt(r,o,g)},useId:function(){return B="useId",d(),to().memoizedState},useFormState:function(r){return B="useFormState",d(),qt(),mt(r)},useActionState:function(r){return B="useActionState",d(),mt(r)},useOptimistic:function(r,o){return B="useOptimistic",d(),gO(r,o)},useHostTransitionStatus:E0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),to().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Xt(r)}},Fl={readContext:function(r){return W(),Ko(r)},use:function(r){return H(),Sv(r)},useCallback:function(r,o){return B="useCallback",H(),cr(),C5(r,o)},useContext:function(r){return B="useContext",H(),cr(),Ko(r)},useEffect:function(r,o){return B="useEffect",H(),cr(),Gt(r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",H(),cr(),Z5(r,o,g)},useInsertionEffect:function(r,o){B="useInsertionEffect",H(),cr(),c0(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",H(),cr(),B5(r,o)},useMemo:function(r,o){B="useMemo",H(),cr();var g=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",H(),cr();var l=S.H;S.H=Fl;try{return z5(r,o,g)}finally{S.H=l}},useRef:function(r){return B="useRef",H(),cr(),x5(r)},useState:function(r){B="useState",H(),cr();var o=S.H;S.H=Fl;try{return L5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",H(),cr()},useDeferredValue:function(r,o){return B="useDeferredValue",H(),cr(),T5(r,o)},useTransition:function(){return B="useTransition",H(),cr(),V5()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",H(),cr(),K5(r,o,g)},useId:function(){return B="useId",H(),cr(),_5()},useFormState:function(r,o){return B="useFormState",H(),cr(),_i(r,o)},useActionState:function(r,o){return B="useActionState",H(),cr(),_i(r,o)},useOptimistic:function(r){return B="useOptimistic",H(),cr(),I5(r)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:E0,useCacheRefresh:function(){return B="useCacheRefresh",cr(),y5()},useEffectEvent:function(r){return B="useEffectEvent",H(),cr(),N5(r)}},Ee={readContext:function(r){return W(),Ko(r)},use:function(r){return H(),Sv(r)},useCallback:function(r,o){return B="useCallback",H(),d(),Jt(r,o)},useContext:function(r){return B="useContext",H(),d(),Ko(r)},useEffect:function(r,o){B="useEffect",H(),d(),Eg(2048,Sg,r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",H(),d(),Yt(r,o,g)},useInsertionEffect:function(r,o){return B="useInsertionEffect",H(),d(),Eg(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",H(),d(),Eg(4,He,r,o)},useMemo:function(r,o){B="useMemo",H(),d();var g=S.H;S.H=Ee;try{return Qt(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",H(),d();var l=S.H;S.H=Ee;try{return Vi(r,o,g)}finally{S.H=l}},useRef:function(){return B="useRef",H(),d(),to().memoizedState},useState:function(){B="useState",H(),d();var r=S.H;S.H=Ee;try{return Vi(ke)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",H(),d()},useDeferredValue:function(r,o){return B="useDeferredValue",H(),d(),tO(r,o)},useTransition:function(){return B="useTransition",H(),d(),AO()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",H(),d(),Rt(r,o,g)},useId:function(){return B="useId",H(),d(),to().memoizedState},useFormState:function(r){return B="useFormState",H(),d(),Wt(r)},useActionState:function(r){return B="useActionState",H(),d(),Wt(r)},useOptimistic:function(r,o){return B="useOptimistic",H(),d(),rO(r,o)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:E0,useCacheRefresh:function(){return B="useCacheRefresh",d(),to().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",H(),d(),Xt(r)}},Ku={readContext:function(r){return W(),Ko(r)},use:function(r){return H(),Sv(r)},useCallback:function(r,o){return B="useCallback",H(),d(),Jt(r,o)},useContext:function(r){return B="useContext",H(),d(),Ko(r)},useEffect:function(r,o){B="useEffect",H(),d(),Eg(2048,Sg,r,o)},useImperativeHandle:function(r,o,g){return B="useImperativeHandle",H(),d(),Yt(r,o,g)},useInsertionEffect:function(r,o){return B="useInsertionEffect",H(),d(),Eg(4,Cg,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",H(),d(),Eg(4,He,r,o)},useMemo:function(r,o){B="useMemo",H(),d();var g=S.H;S.H=Ee;try{return Qt(r,o)}finally{S.H=g}},useReducer:function(r,o,g){B="useReducer",H(),d();var l=S.H;S.H=Ee;try{return m1(r,o,g)}finally{S.H=l}},useRef:function(){return B="useRef",H(),d(),to().memoizedState},useState:function(){B="useState",H(),d();var r=S.H;S.H=Ee;try{return m1(ke)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",H(),d()},useDeferredValue:function(r,o){return B="useDeferredValue",H(),d(),uO(r,o)},useTransition:function(){return B="useTransition",H(),d(),qO()},useSyncExternalStore:function(r,o,g){return B="useSyncExternalStore",H(),d(),Rt(r,o,g)},useId:function(){return B="useId",H(),d(),to().memoizedState},useFormState:function(r){return B="useFormState",H(),d(),mt(r)},useActionState:function(r){return B="useActionState",H(),d(),mt(r)},useOptimistic:function(r,o){return B="useOptimistic",H(),d(),gO(r,o)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:E0,useCacheRefresh:function(){return B="useCacheRefresh",d(),to().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",H(),d(),Xt(r)}};var hM={},nM=new Set,bM=new Set,tM=new Set,uM=new Set,wM=new Set,PM=new Set,OM=new Set,HM=new Set,AM=new Set,qM=new Set;Object.freeze(hM);var D4={enqueueSetState:function(r,o,g){r=r._reactInternals;var l=ne(r),i=Nv(l);i.payload=o,g!==void 0&&g!==null&&(E5(g),i.callback=g),o=Bv(r,i,l),o!==null&&(tl(l,"this.setState()",r),No(o,r,l),q1(o,r,l))},enqueueReplaceState:function(r,o,g){r=r._reactInternals;var l=ne(r),i=Nv(l);i.tag=sq,i.payload=o,g!==void 0&&g!==null&&(E5(g),i.callback=g),o=Bv(r,i,l),o!==null&&(tl(l,"this.replaceState()",r),No(o,r,l),q1(o,r,l))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var g=ne(r),l=Nv(g);l.tag=rM,o!==void 0&&o!==null&&(E5(o),l.callback=o),o=Bv(r,l,g),o!==null&&(tl(g,"this.forceUpdate()",r),No(o,r,g),q1(o,r,g))}},zh=null,V4=null,_4=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),so=!1,MM={},RM={},WM={},mM={},Uh=!1,GM={},$u={},y4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},XM=!1,YM=null;YM=new Set;var uv=!1,rg=!1,c4=!1,JM=typeof WeakSet==="function"?WeakSet:Set,tg=null,Kh=null,$h=null,og=null,jg=!1,ae=null,vg=!1,Mn=8192,oJ={getCacheForType:function(r){var o=Ko(fo),g=o.data.get(r);return g===void 0&&(g=r(),o.data.set(r,g)),g},cacheSignal:function(){return Ko(fo).controller.signal},getOwner:function(){return ue}};if(typeof Symbol==="function"&&Symbol.for){var Rn=Symbol.for;Rn("selector.component"),Rn("selector.has_pseudo_class"),Rn("selector.role"),Rn("selector.test_id"),Rn("selector.text")}var gJ=[],eJ=typeof WeakMap==="function"?WeakMap:Map,ug=0,ig=2,Ae=4,wv=0,Wn=1,bi=2,Lu=3,l0=4,Iu=6,QM=5,go=ug,Mo=null,yr=null,Vr=0,pg=0,Fu=1,ti=2,mn=3,zM=4,E4=5,Gn=6,xu=7,a4=8,ui=9,uo=pg,qe=null,v0=!1,Lh=!1,f4=!1,xl=0,Fo=wv,i0=0,h0=0,j4=0,dg=0,wi=0,Xn=null,Tg=null,Nu=!1,Bu=0,UM=0,KM=300,Zu=1/0,$M=500,Yn=null,To=null,n0=null,Cu=0,p4=1,d4=2,LM=3,b0=0,IM=1,FM=2,xM=3,NM=4,Su=5,gg=0,t0=null,Ih=null,fe=0,s4=0,r6=-0,o6=null,BM=null,ZM=null,je=Cu,CM=null,lJ=50,Jn=0,g6=null,e6=!1,Tu=!1,vJ=50,Pi=0,Qn=null,Fh=!1,ku=null,SM=!1,TM=new Set,iJ={},Du=null,xh=null,l6=!1,v6=!1,Vu=!1,i6=!1,u0=0,h6={};(function(){for(var r=0;r<M4.length;r++){var o=M4[r],g=o.toLowerCase();o=o[0].toUpperCase()+o.slice(1),Te(g,"on"+o)}Te(Aq,"onAnimationEnd"),Te(qq,"onAnimationIteration"),Te(Mq,"onAnimationStart"),Te("dblclick","onDoubleClick"),Te("focusin","onFocus"),Te("focusout","onBlur"),Te(BY,"onTransitionRun"),Te(ZY,"onTransitionStart"),Te(CY,"onTransitionCancel"),Te(Rq,"onTransitionEnd")})(),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Jg("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jg("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jg("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jg("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jg("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jg("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zn)),_u="_reactListening"+Math.random().toString(36).slice(2),kM=!1,DM=!1,yu=!1,VM=!1,cu=!1,Eu=!1,_M=!1,au={},hJ=/\r\n?/g,nJ=/\u0000|\uFFFD/g,Oi="http://www.w3.org/1999/xlink",b6="http://www.w3.org/XML/1998/namespace",bJ="javascript:throw new Error('React form unexpectedly submitted.')",tJ="suppressHydrationWarning",Hi="&",fu="/&",Un="$",Kn="/$",w0="$?",Ai="$~",Nh="$!",uJ="html",wJ="body",PJ="head",t6="F!",yM="F",cM="loading",OJ="style",Pv=0,Bh=1,ju=2,u6=null,w6=null,EM={dialog:!0,webview:!0},P6=null,$n=void 0,aM=typeof setTimeout==="function"?setTimeout:void 0,HJ=typeof clearTimeout==="function"?clearTimeout:void 0,qi=-1,fM=typeof Promise==="function"?Promise:void 0,AJ=typeof queueMicrotask==="function"?queueMicrotask:typeof fM<"u"?function(r){return fM.resolve(null).then(r).catch(rX)}:aM,O6=null,Mi=0,Ln=1,jM=2,pM=3,Be=4,Ze=new Map,dM=new Set,Ov=no.d;no.d={f:function(){var r=Ov.f(),o=fi();return r||o},r:function(r){var o=Fr(r);o!==null&&o.tag===5&&o.type==="form"?HO(o):Ov.r(r)},D:function(r){Ov.D(r),nA("dns-prefetch",r,null)},C:function(r,o){Ov.C(r,o),nA("preconnect",r,o)},L:function(r,o,g){Ov.L(r,o,g);var l=Zh;if(l&&r&&o){var i='link[rel="preload"][as="'+Ye(o)+'"]';o==="image"?g&&g.imageSrcSet?(i+='[imagesrcset="'+Ye(g.imageSrcSet)+'"]',typeof g.imageSizes==="string"&&(i+='[imagesizes="'+Ye(g.imageSizes)+'"]')):i+='[href="'+Ye(r)+'"]':i+='[href="'+Ye(r)+'"]';var h=i;switch(o){case"style":h=di(r);break;case"script":h=si(r)}Ze.has(h)||(r=Er({rel:"preload",href:o==="image"&&g&&g.imageSrcSet?void 0:r,as:o},g),Ze.set(h,r),l.querySelector(i)!==null||o==="style"&&l.querySelector(B1(h))||o==="script"&&l.querySelector(Z1(h))||(o=l.createElement("link"),qg(o,"link",r),Yr(o),l.head.appendChild(o)))}},m:function(r,o){Ov.m(r,o);var g=Zh;if(g&&r){var l=o&&typeof o.as==="string"?o.as:"script",i='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(r)+'"]',h=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=si(r)}if(!Ze.has(h)&&(r=Er({rel:"modulepreload",href:r},o),Ze.set(h,r),g.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(g.querySelector(Z1(h)))return}l=g.createElement("link"),qg(l,"link",r),Yr(l),g.head.appendChild(l)}}},X:function(r,o){Ov.X(r,o);var g=Zh;if(g&&r){var l=eo(g).hoistableScripts,i=si(r),h=l.get(i);h||(h=g.querySelector(Z1(i)),h||(r=Er({src:r,async:!0},o),(o=Ze.get(i))&&Z2(r,o),h=g.createElement("script"),Yr(h),qg(h,"link",r),g.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(i,h))}},S:function(r,o,g){Ov.S(r,o,g);var l=Zh;if(l&&r){var i=eo(l).hoistableStyles,h=di(r);o=o||"default";var t=i.get(h);if(!t){var w={loading:Mi,preload:null};if(t=l.querySelector(B1(h)))w.loading=Ln|Be;else{r=Er({rel:"stylesheet",href:r,"data-precedence":o},g),(g=Ze.get(h))&&B2(r,g);var A=t=l.createElement("link");Yr(A),qg(A,"link",r),A._p=new Promise(function(M,K){A.onload=M,A.onerror=K}),A.addEventListener("load",function(){w.loading|=Ln}),A.addEventListener("error",function(){w.loading|=jM}),w.loading|=Be,yt(t,o,l)}t={type:"stylesheet",instance:t,count:1,state:w},i.set(h,t)}}},M:function(r,o){Ov.M(r,o);var g=Zh;if(g&&r){var l=eo(g).hoistableScripts,i=si(r),h=l.get(i);h||(h=g.querySelector(Z1(i)),h||(r=Er({src:r,async:!0,type:"module"},o),(o=Ze.get(i))&&Z2(r,o),h=g.createElement("script"),Yr(h),qg(h,"link",r),g.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(i,h))}}};var Zh=typeof document>"u"?null:document,pu=null,qJ=60000,MJ=800,RJ=500,H6=0,A6=null,du=null,Ri=xX,In={$$typeof:Yl,Provider:null,Consumer:null,_currentValue:Ri,_currentValue2:Ri,_threadCount:0},sM="%c%s%c",rR="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",oR="",su=" ",WJ=Function.prototype.bind,gR=!1,eR=null,lR=null,vR=null,iR=null,hR=null,nR=null,bR=null,tR=null,uR=null,wR=null;eR=function(r,o,g,l){o=e(r,o),o!==null&&(g=v(o.memoizedState,g,0,l),o.memoizedState=g,o.baseState=g,r.memoizedProps=Er({},r.memoizedProps),g=Qg(r,2),g!==null&&No(g,r,2))},lR=function(r,o,g){o=e(r,o),o!==null&&(g=u(o.memoizedState,g,0),o.memoizedState=g,o.baseState=g,r.memoizedProps=Er({},r.memoizedProps),g=Qg(r,2),g!==null&&No(g,r,2))},vR=function(r,o,g,l){o=e(r,o),o!==null&&(g=n(o.memoizedState,g,l),o.memoizedState=g,o.baseState=g,r.memoizedProps=Er({},r.memoizedProps),g=Qg(r,2),g!==null&&No(g,r,2))},iR=function(r,o,g){r.pendingProps=v(r.memoizedProps,o,0,g),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qg(r,2),o!==null&&No(o,r,2)},hR=function(r,o){r.pendingProps=u(r.memoizedProps,o,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qg(r,2),o!==null&&No(o,r,2)},nR=function(r,o,g){r.pendingProps=n(r.memoizedProps,o,g),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qg(r,2),o!==null&&No(o,r,2)},bR=function(r){var o=Qg(r,2);o!==null&&No(o,r,2)},tR=function(r){var o=Ni(),g=Qg(r,o);g!==null&&No(g,r,o)},uR=function(r){O=r},wR=function(r){P=r};var rw=!0,ow=null,q6=!1,P0=null,O0=null,H0=null,Fn=new Map,xn=new Map,A0=[],mJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),gw=null;if(jt.prototype.render=V2.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error("Cannot update an unmounted root.");var g=arguments;typeof g[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):_(g[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof g[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),g=r;var l=o.current,i=ne(l);C2(l,i,g,o,null,null)},jt.prototype.unmount=V2.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var o=r.containerInfo;(go&(ig|Ae))!==ug&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),C2(r.current,2,null,r,null,null),fi(),o[cv]=null}},jt.prototype.unstable_scheduleHydration=function(r){if(r){var o=I();r={blockedOn:null,target:r,priority:o};for(var g=0;g<A0.length&&o!==0&&o<A0[g].priority;g++);A0.splice(g,0,r),g===0&&GA(r)}},function(){var r=Sh.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),no.findDOMNode=function(r){var o=r._reactInternals;if(o===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(o),r=r!==null?er(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.5"};return r.overrideHookState=eR,r.overrideHookStateDeletePath=lR,r.overrideHookStateRenamePath=vR,r.overrideProps=iR,r.overridePropsDeletePath=hR,r.overridePropsRenamePath=nR,r.scheduleUpdate=bR,r.scheduleRetry=tR,r.setErrorHandler=uR,r.setSuspenseHandler=wR,r.scheduleRefresh=T,r.scheduleRoot=L,r.setRefreshHandler=Z,r.getCurrentFiber=QX,xi(r)}()&&Kl&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var PR=window.location.protocol;/^(https?|file):$/.test(PR)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(PR==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}BJ.createRoot=function(r,o){if(!_(r))throw Error("Target container is not a DOM element.");QA(r);var g=!1,l="",i=XO,h=YO,t=JO;return o!==null&&o!==void 0&&(o.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof o==="object"&&o!==null&&o.$$typeof===Xl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),o.unstable_strictMode===!0&&(g=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(i=o.onUncaughtError),o.onCaughtError!==void 0&&(h=o.onCaughtError),o.onRecoverableError!==void 0&&(t=o.onRecoverableError)),o=HA(r,1,!1,null,null,g,l,null,i,h,t,JA),r[cv]=o.current,Y2(r),new V2(o)},BJ.hydrateRoot=function(r,o,g){if(!_(r))throw Error("Target container is not a DOM element.");QA(r),o===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,i="",h=XO,t=YO,w=JO,A=null;return g!==null&&g!==void 0&&(g.unstable_strictMode===!0&&(l=!0),g.identifierPrefix!==void 0&&(i=g.identifierPrefix),g.onUncaughtError!==void 0&&(h=g.onUncaughtError),g.onCaughtError!==void 0&&(t=g.onCaughtError),g.onRecoverableError!==void 0&&(w=g.onRecoverableError),g.formState!==void 0&&(A=g.formState)),o=HA(r,1,!0,o,g!=null?g:null,l,i,A,h,t,w,JA),o.context=AA(null),g=o.current,l=ne(g),l=N0(l),i=Nv(l),i.callback=null,Bv(g,i,l),tl(l,"hydrateRoot()",null),g=l,o.current.lanes=g,Uv(o,g),ml(o),r[cv]=o.current,Y2(r),new jt(o)},BJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var RR=Wi((eF,MR)=>{MR.exports=qR()});var ro=Wi((jQ)=>{var zi=wr(vo());(function(){function e(V){if(V==null)return null;if(typeof V==="function")return V.$$typeof===C?null:V.displayName||V.name||null;if(typeof V==="string")return V;switch(V){case Z:return"Fragment";case rr:return"Profiler";case _:return"StrictMode";case p:return"Suspense";case er:return"SuspenseList";case f:return"Activity"}if(typeof V==="object")switch(typeof V.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),V.$$typeof){case T:return"Portal";case lr:return V.displayName||"Context";case ur:return(V._context.displayName||"Context")+".Consumer";case a:var F=V.render;return V=V.displayName,V||(V=F.displayName||F.name||"",V=V!==""?"ForwardRef("+V+")":"ForwardRef"),V;case N:return F=V.displayName||null,F!==null?F:e(V.type)||"Memo";case y:F=V._payload,V=V._init;try{return e(V(F))}catch(gr){}}return null}function v(V){return""+V}function n(V){try{v(V);var F=!1}catch(qr){F=!0}if(F){F=console;var gr=F.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&V[Symbol.toStringTag]||V.constructor.name||"Object";return gr.call(F,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),v(V)}}function b(V){if(V===Z)return"<>";if(typeof V==="object"&&V!==null&&V.$$typeof===y)return"<...>";try{var F=e(V);return F?"<"+F+">":"<...>"}catch(gr){return"<...>"}}function u(){var V=Rr.A;return V===null?null:V.getOwner()}function P(){return Error("react-stack-top-frame")}function O(V){if(Ar.call(V,"key")){var F=Object.getOwnPropertyDescriptor(V,"key").get;if(F&&F.isReactWarning)return!1}return V.key!==void 0}function H(V,F){function gr(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",F))}gr.isReactWarning=!0,Object.defineProperty(V,"key",{get:gr,configurable:!0})}function W(){var V=e(this.type);return s[V]||(s[V]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),V=this.props.ref,V!==void 0?V:null}function G(V,F,gr,Or,qr,Zr){var hr=gr.ref;return V={$$typeof:L,type:V,key:F,props:gr,_owner:Or},(hr!==void 0?hr:null)!==null?Object.defineProperty(V,"ref",{enumerable:!1,get:W}):Object.defineProperty(V,"ref",{enumerable:!1,value:null}),V._store={},Object.defineProperty(V._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(V,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(V,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:qr}),Object.defineProperty(V,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Zr}),Object.freeze&&(Object.freeze(V.props),Object.freeze(V)),V}function m(V,F,gr,Or,qr,Zr){var hr=F.children;if(hr!==void 0)if(Or)if(mr(hr)){for(Or=0;Or<hr.length;Or++)q(hr[Or]);Object.freeze&&Object.freeze(hr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else q(hr);if(Ar.call(F,"key")){hr=e(V);var Cr=Object.keys(F).filter(function(Ro){return Ro!=="key"});Or=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Gr[hr+Or]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Or,hr,Cr,hr),Gr[hr+Or]=!0)}if(hr=null,gr!==void 0&&(n(gr),hr=""+gr),O(F)&&(n(F.key),hr=""+F.key),"key"in F){gr={};for(var jr in F)jr!=="key"&&(gr[jr]=F[jr])}else gr=F;return hr&&H(gr,typeof V==="function"?V.displayName||V.name||"Unknown":V),G(V,hr,gr,u(),qr,Zr)}function q(V){X(V)?V._store&&(V._store.validated=1):typeof V==="object"&&V!==null&&V.$$typeof===y&&(V._payload.status==="fulfilled"?X(V._payload.value)&&V._payload.value._store&&(V._payload.value._store.validated=1):V._store&&(V._store.validated=1))}function X(V){return typeof V==="object"&&V!==null&&V.$$typeof===L}var L=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),ur=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),er=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),C=Symbol.for("react.client.reference"),Rr=zi.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ar=Object.prototype.hasOwnProperty,mr=Array.isArray,Br=console.createTask?console.createTask:function(){return null};zi={react_stack_bottom_frame:function(V){return V()}};var k,s={},vr=zi.react_stack_bottom_frame.bind(zi,P)(),Qr=Br(b(P)),Gr={};jQ.Fragment=Z,jQ.jsxDEV=function(V,F,gr,Or){var qr=1e4>Rr.recentlyCreatedOwnerStacks++;return m(V,F,gr,Or,qr?Error("react-stack-top-frame"):vr,qr?Br(b(V)):Qr)}})()});var UP=wr(vo(),1),KP=wr(RR(),1);var WR=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
.ls-panel {\r
  display: flex;\r
  flex-direction: column;\r
  /*\r
   * Pin panel height directly to Lumiverse's viewport variable (declared\r
   * at :root in the core styles). \`height: 100%\` alone fails here because\r
   * the Spindle dock-panel root uses positioning rather than an explicit\r
   * height to define its bounds, so \`100%\` of an auto-sized parent\r
   * resolves to content height — and the panel grows unbounded with its\r
   * contents. That breaks any flex chain below that depends on a bounded\r
   * parent (notably the Status tab's fr-unit grid — the rows degenerate\r
   * to content sizes when the grid container itself has no definite\r
   * height). Binding to \`--app-viewport-height\` (fallback 100dvh) gives\r
   * the panel a real height and lets \`flex: 1\` and \`fr\` units inside\r
   * work correctly.\r
   *\r
   * Assumes the LumiScript dock panel spans the full viewport height\r
   * (dock-top/dock-bottom both 0, which is the current setup). If we\r
   * ever support partial-height docking, switch to\r
   *   calc(var(--app-viewport-height) - var(--spindle-dock-top) - var(--spindle-dock-bottom))\r
   */\r
  height: var(--app-viewport-height, 100dvh);\r
  min-height: 0;\r
  color: var(--lumiverse-text);\r
  font-size: 13px;\r
  font-family: inherit;\r
}\r
\r
/* ── Tab pills ───────────────────────────────────────────────────────────── */\r
.ls-tabs {\r
  display: flex;\r
  gap: 4px;\r
  padding: 8px 10px;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  flex-shrink: 0;\r
}\r
.ls-tab-pill {\r
  padding: 4px 12px;\r
  border-radius: 999px;\r
  border: 1px solid var(--lumiverse-border);\r
  background: transparent;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  font-size: 12px;\r
  font-family: inherit;\r
  transition: background 0.15s, color 0.15s;\r
}\r
.ls-tab-pill:hover {\r
  background: var(--lumiverse-fill-subtle);\r
  color: var(--lumiverse-text);\r
}\r
.ls-tab-pill.ls-active {\r
  background: var(--lumiverse-accent);\r
  color: var(--lumiverse-accent-fg);\r
  border-color: var(--lumiverse-accent);\r
}\r
\r
/* ── Icon button ────────────────────────────────────────────────────────── */\r
.ls-icon-btn {\r
  width: 26px;\r
  height: 26px;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  border: none;\r
  background: transparent;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  transition: background 0.1s, color 0.1s;\r
}\r
.ls-icon-btn:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }\r
.ls-icon-btn.ls-danger:hover { color: #ef4444; }\r
.ls-icon-btn:disabled { opacity: 0.4; cursor: not-allowed; }\r
\r
/* ── Primary button ─────────────────────────────────────────────────────── */\r
.ls-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 5px 10px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  background: var(--lumiverse-fill-subtle);\r
  color: var(--lumiverse-text);\r
  cursor: pointer;\r
  font-size: 12px;\r
  font-family: inherit;\r
  transition: background 0.1s;\r
}\r
.ls-btn:hover { background: var(--lumiverse-fill); }\r
.ls-btn:disabled { opacity: 0.4; cursor: not-allowed; }\r
.ls-btn.ls-accent {\r
  background: var(--lumiverse-accent);\r
  color: var(--lumiverse-accent-fg);\r
  border-color: var(--lumiverse-accent);\r
}\r
.ls-btn.ls-accent:hover { opacity: 0.9; }\r
`;var mR=`/* ── Script list header ─────────────────────────────────────────────────── */\r
.ls-list-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 8px 10px;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  flex-shrink: 0;\r
}\r
.ls-list-type-tabs {\r
  display: flex;\r
  gap: 2px;\r
}\r
.ls-list-actions {\r
  display: flex;\r
  align-items: center;\r
  gap: 2px;\r
}\r
.ls-type-tab {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 3px 7px;\r
  border-radius: 4px;\r
  border: 1px solid transparent;\r
  background: transparent;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  font-size: 12px;\r
  font-family: inherit;\r
}\r
.ls-type-tab:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }\r
.ls-type-tab.ls-active {\r
  background: var(--lumiverse-fill-subtle);\r
  border-color: var(--lumiverse-border);\r
  color: var(--lumiverse-text);\r
}\r
\r
/* ── Script list ────────────────────────────────────────────────────────── */\r
.ls-list-body {\r
  flex: 1;\r
  overflow-y: auto;\r
  min-height: 0;\r
  padding: 4px;\r
}\r
.ls-list-empty {\r
  padding: 32px 16px;\r
  text-align: center;\r
  color: var(--lumiverse-text-muted);\r
}\r
.ls-list-empty svg { margin-bottom: 8px; }\r
.ls-list-empty p { margin: 0; font-size: 12px; }\r
\r
/* ── Script list item ──────────────────────────────────────────────────── */\r
.ls-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid transparent;\r
  cursor: pointer;\r
  margin-bottom: 2px;\r
  transition: background 0.1s;\r
}\r
.ls-item:hover { background: var(--lumiverse-fill-subtle); }\r
.ls-item.ls-selected {\r
  background: var(--lumiverse-fill-subtle);\r
  border-color: var(--lumiverse-accent);\r
}\r
.ls-item.ls-disabled { opacity: 0.55; }\r
.ls-item-dot {\r
  width: 8px;\r
  height: 8px;\r
  border-radius: 50%;\r
  flex-shrink: 0;\r
  background: var(--lumiverse-border);\r
}\r
.ls-item-dot.ls-dot-success { background: #22c55e; }\r
.ls-item-dot.ls-dot-running {\r
  background: #f59e0b;\r
  animation: ls-pulse 1s infinite;\r
}\r
.ls-item-dot.ls-dot-error { background: #ef4444; }\r
@keyframes ls-pulse {\r
  0%, 100% { opacity: 1; }\r
  50% { opacity: 0.35; }\r
}\r
/* Used by the row's inline Run button while a manual run is in flight.\r
   Local rather than a generic \`spin\` name so we don't depend on / collide\r
   with host-app or third-party CSS. */\r
@keyframes ls-spin {\r
  from { transform: rotate(0deg); }\r
  to   { transform: rotate(360deg); }\r
}\r
.ls-item-body { flex: 1; min-width: 0; }\r
.ls-item-name {\r
  font-weight: 500;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  font-size: 13px;\r
}\r
.ls-item-meta {\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  margin-top: 1px;\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
}\r
.ls-item-actions {\r
  display: flex;\r
  gap: 2px;\r
  flex-shrink: 0;\r
  opacity: 0;\r
  transition: opacity 0.1s;\r
}\r
.ls-item:hover .ls-item-actions { opacity: 1; }\r
.ls-item-bindings {\r
  display: flex;\r
  flex-wrap: wrap;\r
  margin-top: 3px;\r
}\r
.ls-item-binding-badges {\r
  display: flex;\r
  gap: 2px;\r
  flex-wrap: wrap;\r
}\r
.ls-binding-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 3px;\r
  padding: 1px 5px;\r
  border-radius: 999px;\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-border);\r
  font-size: 10px;\r
  color: var(--lumiverse-text-muted);\r
  white-space: nowrap;\r
}\r
\r
/* ── Folder groups ─────────────────────────────────────────────────────── */\r
.ls-folder-group {\r
  margin-bottom: 2px;\r
}\r
.ls-folder-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
  width: 100%;\r
  padding: 5px 10px;\r
  background: var(--lumiverse-fill-subtle);\r
  border: none;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  color: var(--lumiverse-text-muted);\r
  font-size: 11px;\r
  cursor: pointer;\r
}\r
.ls-folder-header:hover {\r
  color: var(--lumiverse-text);\r
}\r
.ls-folder-rename {\r
  display: inline-flex;\r
  opacity: 0;\r
  padding: 1px;\r
  border-radius: 3px;\r
  transition: opacity var(--lumiverse-transition-fast, 0.15s);\r
}\r
.ls-folder-rename:hover {\r
  background: var(--lumiverse-fill);\r
}\r
.ls-folder-header:hover .ls-folder-rename {\r
  opacity: 1;\r
}\r
.ls-folder-name {\r
  flex: 1;\r
  text-align: left;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
.ls-folder-count {\r
  font-size: 10px;\r
  color: var(--lumiverse-text-dim);\r
  background: var(--lumiverse-fill);\r
  border-radius: 999px;\r
  padding: 1px 6px;\r
}\r
`;var GR=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
.ls-editor-root {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  min-height: 0;\r
}\r
.ls-editor-topbar {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 10px;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  flex-shrink: 0;\r
}\r
.ls-editor-back {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  font-size: 12px;\r
  background: none;\r
  border: none;\r
  font-family: inherit;\r
  padding: 3px 6px;\r
  border-radius: 4px;\r
  transition: background 0.1s;\r
}\r
.ls-editor-back:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }\r
.ls-editor-name {\r
  flex: 1;\r
  font-weight: 500;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
.ls-editor-name-input {\r
  flex: 1;\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-accent);\r
  border-radius: 4px;\r
  color: var(--lumiverse-text);\r
  font-size: 13px;\r
  font-family: inherit;\r
  padding: 2px 6px;\r
}\r
.ls-editor-unsaved {\r
  display: inline-block;\r
  width: 8px;\r
  height: 8px;\r
  border-radius: 50%;\r
  /* --lumiverse-accent is set dynamically by the theme engine;\r
     fall back to the base primary purple if not yet available */\r
  background: var(--lumiverse-accent, rgba(147, 112, 219, 0.9));\r
  flex-shrink: 0;\r
}\r
.ls-editor-monaco { flex: 1; min-height: 0; }\r
.ls-editor-docs   { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }\r
\r
/* ── Metadata footer ────────────────────────────────────────────────────── */\r
.ls-meta-footer {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 4px 10px;\r
  border-top: 1px solid var(--lumiverse-border);\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  flex-shrink: 0;\r
  flex-wrap: wrap;\r
}\r
.ls-meta-item { display: flex; align-items: center; gap: 4px; }\r
.ls-danger-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
  font-size: 11px;\r
  font-family: inherit;\r
  padding: 0;\r
  color: var(--lumiverse-text-muted);\r
}\r
.ls-danger-btn:hover { color: var(--lumiverse-text); }\r
.ls-dangerous { color: #ef4444; }\r
\r
/* ── Dangerous-mode inline confirmation bar ──────────────────────────────── */\r
.ls-danger-confirm {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 5px 10px;\r
  border-top: 1px solid color-mix(in srgb, #f97316 22%, transparent);\r
  background: color-mix(in srgb, #f97316 8%, transparent);\r
  font-size: 10px;\r
  color: #f97316;\r
  flex-shrink: 0;\r
}\r
.ls-danger-confirm-msg { flex: 1; }\r
.ls-danger-confirm-yes,\r
.ls-danger-confirm-no {\r
  padding: 2px 8px;\r
  border-radius: 3px;\r
  font-size: 10px;\r
  font-family: inherit;\r
  cursor: pointer;\r
  border: 1px solid;\r
  background: transparent;\r
  transition: background var(--lumiverse-transition-fast);\r
  flex-shrink: 0;\r
}\r
.ls-danger-confirm-yes {\r
  border-color: color-mix(in srgb, #f97316 40%, transparent);\r
  color: #f97316;\r
}\r
.ls-danger-confirm-yes:hover { background: color-mix(in srgb, #f97316 15%, transparent); }\r
.ls-danger-confirm-no {\r
  border-color: var(--lumiverse-border);\r
  color: var(--lumiverse-text-muted);\r
}\r
.ls-danger-confirm-no:hover { background: var(--lumiverse-fill-subtle); }\r
\r
/* ── Folder select (inside metadata footer) ────────────────────────────── */\r
.ls-meta-folder {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
}\r
.ls-folder-select {\r
  background: transparent;\r
  border: none;\r
  border-radius: 3px;\r
  color: var(--lumiverse-text-muted);\r
  font-size: 10px;\r
  padding: 0 14px 0 0;\r
  outline: none;\r
  cursor: pointer;\r
  -webkit-appearance: none;\r
  appearance: none;\r
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");\r
  background-repeat: no-repeat;\r
  background-position: right 2px center;\r
}\r
.ls-folder-select:hover {\r
  color: var(--lumiverse-text);\r
}\r
.ls-folder-select option {\r
  background: var(--lumiverse-fill);\r
  color: var(--lumiverse-text);\r
}\r
`;var XR=`/* ── Console ────────────────────────────────────────────────────────────── */\r
.ls-console {\r
  flex-shrink: 0;\r
  border-top: 1px solid var(--lumiverse-border);\r
  display: flex;\r
  flex-direction: column;\r
}\r
/* Fixed height when expanded — ensures a consistent scrollable area from the first entry */\r
.ls-console:not(.ls-collapsed) {\r
  height: 150px;\r
}\r
.ls-console-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 4px 8px;\r
  cursor: pointer;\r
  user-select: none;\r
  flex-shrink: 0;\r
}\r
.ls-console-title {\r
  flex: 1;\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  font-weight: 500;\r
  text-transform: uppercase;\r
  letter-spacing: 0.03em;\r
}\r
.ls-console-output {\r
  flex: 1;\r
  overflow-y: auto;\r
  min-height: 0;\r
  padding: 4px 8px;\r
  font-size: 11px;\r
  font-family: monospace;\r
}\r
.ls-console-empty {\r
  color: var(--lumiverse-text-muted);\r
  font-style: italic;\r
  padding: 4px 0;\r
}\r
.ls-log    { color: var(--lumiverse-text); }\r
.ls-warn   { color: #f59e0b; }\r
.ls-error  { color: #ef4444; }\r
.ls-info   { color: #60a5fa; }\r
.ls-success { color: #22c55e; }\r
.ls-entry {\r
  display: flex;\r
  gap: 6px;\r
  padding: 1px 0;\r
  line-height: 1.5;\r
}\r
.ls-entry-time { color: var(--lumiverse-text-muted); flex-shrink: 0; }\r
.ls-entry-type { flex-shrink: 0; font-weight: 600; }\r
.ls-entry-msg { word-break: break-word; white-space: pre-wrap; }\r
/* Run-separator divider inserted between consecutive runs of the same script */\r
.ls-entry-separator {\r
  border: none;\r
  border-top: 1px dashed var(--lumiverse-border);\r
  margin: 4px 0;\r
  opacity: 0.6;\r
}\r
`;var YR=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
.ls-bindings {\r
  flex-shrink: 0;\r
  border-top: 1px solid var(--lumiverse-border);\r
  padding: 6px 10px;\r
}\r
.ls-bindings-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  flex-wrap: wrap;\r
  font-size: 12px;\r
  color: var(--lumiverse-text-muted);\r
}\r
.ls-bindings-global { font-style: italic; }\r
.ls-binding-chip {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 7px 2px 5px;\r
  border-radius: 999px;\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-border);\r
  font-size: 11px;\r
  color: var(--lumiverse-text);\r
}\r
.ls-chip-remove {\r
  display: inline-flex;\r
  align-items: center;\r
  background: none;\r
  border: none;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  padding: 0;\r
  margin-left: 2px;\r
  line-height: 1;\r
}\r
.ls-chip-remove:hover { color: #ef4444; }\r
.ls-bindings-add {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 3px;\r
  padding: 2px 7px;\r
  border-radius: 999px;\r
  border: 1px dashed var(--lumiverse-border);\r
  background: none;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  font-size: 11px;\r
  font-family: inherit;\r
  transition: border-color 0.1s, color 0.1s;\r
}\r
.ls-bindings-add:hover { border-color: var(--lumiverse-accent); color: var(--lumiverse-text); }\r
.ls-bindings-add:disabled { opacity: 0.38; cursor: not-allowed; border-color: transparent; }\r
`;var JR=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
.ls-triggers {\r
  flex-shrink: 0;\r
  border-top: 1px solid var(--lumiverse-border);\r
  padding: 6px 10px;\r
}\r
.ls-triggers-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  user-select: none;\r
}\r
.ls-triggers-header:hover { color: var(--lumiverse-text); }\r
.ls-triggers-title {\r
  flex: 1;\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  font-weight: 500;\r
  text-transform: uppercase;\r
  letter-spacing: 0.03em;\r
}\r
.ls-triggers-body { margin-top: 6px; display: flex; flex-direction: column; gap: 5px; }\r
.ls-triggers-count {\r
  background: var(--lumiverse-accent);\r
  color: var(--lumiverse-accent-fg);\r
  border-radius: 999px;\r
  padding: 1px 6px;\r
  font-size: 10px;\r
}\r
.ls-trigger-group { display: flex; flex-direction: column; gap: 3px; }\r
.ls-trigger-group-label {\r
  font-size: 10px;\r
  color: var(--lumiverse-text-dim);\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
  font-weight: 500;\r
}\r
.ls-trigger-chips { display: flex; flex-wrap: wrap; gap: 3px; }\r
.ls-trigger-chip {\r
  display: inline-flex;\r
  align-items: center;\r
  padding: 2px 7px;\r
  border-radius: 4px;\r
  border: 1px solid var(--lumiverse-border);\r
  background: transparent;\r
  color: var(--lumiverse-text-muted);\r
  font-size: 10px;\r
  font-family: monospace;\r
  cursor: pointer;\r
  transition: border-color 0.1s, background 0.1s, color 0.1s;\r
}\r
.ls-trigger-chip:hover { border-color: var(--lumiverse-accent); color: var(--lumiverse-text); }\r
.ls-trigger-chip.ls-trigger-chip-active {\r
  background: color-mix(in srgb, var(--lumiverse-accent) 15%, transparent);\r
  border-color: var(--lumiverse-accent);\r
  color: var(--lumiverse-text);\r
}\r
`;var QR=`/* ── Script modal ───────────────────────────────────────────────────────── */
.ls-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--lumiverse-modal-backdrop, rgba(0, 0, 0, 0.6));
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(3px);
}
.ls-modal-card {
  /* --lumiverse-gradient-modal is 98% opaque — correct for a portal modal with no parent backing */
  background: var(--lumiverse-gradient-modal, linear-gradient(135deg, rgba(35, 30, 48, 0.98), rgba(20, 17, 28, 0.98)));
  border: 1px solid var(--lumiverse-border);
  border-radius: calc(var(--lumiverse-radius) + 4px);
  width: 100%;
  max-width: 1100px;
  height: min(90vh, 820px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
}
.ls-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-modal-title {
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.ls-modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  transition: background 0.1s;
}
.ls-modal-close:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }
.ls-modal-body {
  flex: 1;
  min-height: 0;
  display: flex;
}
.ls-modal-sidebar {
  width: 250px;
  flex-shrink: 0;
  border-right: 1px solid var(--lumiverse-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.ls-modal-main {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ─── Inspect modal (Storage tab → Collections → Eye button) ──────────── */

.ls-inspect-card {
  /* Wider + shorter than the script-manager modal; fits a records table
     without wasting horizontal space on a sidebar. */
  width: min(900px, 95vw);
  height: min(720px, 90vh);
}

.ls-inspect-title-name {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  margin: 0 6px;
}

.ls-inspect-title-path {
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.45));
  font-size: 10px;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 420px;
}

/* ── View tabs (Records / Stats) ─────────────────────────────────────────
 *
 * Sits between the modal header and the filter toolbar — small, low-
 * profile horizontal tab strip. Pressed-state tab carries an accent
 * underline; unpressed tabs are muted text only. Designed to be
 * unobtrusive so it doesn't compete with the per-record action chips
 * below.
 */
.ls-inspect-tabs {
  display: flex;
  gap: 0;
  padding: 0 12px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}
.ls-inspect-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px; /* overlap the tabs row's border for clean underline */
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.55));
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: color 120ms, border-color 120ms;
}
.ls-inspect-tab:hover {
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
}
.ls-inspect-tab[aria-selected="true"] {
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.95));
  border-bottom-color: var(--lumiverse-accent, rgb(147, 112, 219));
  font-weight: 600;
}

.ls-inspect-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--lumiverse-border);
  flex-shrink: 0;
}

.ls-inspect-search {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  padding: 4px 8px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--lumiverse-border);
  border-radius: 4px;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.6));
}
.ls-inspect-search:focus-within {
  /* Hard-coded fallback — \`--lumiverse-accent\` doesn't always cascade
   * into portal modals under <body>. See \`.ls-edit-btn-save\`. */
  border-color: var(--lumiverse-accent, rgb(147, 112, 219));
}
.ls-inspect-search-input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  color: var(--lumiverse-text-1);
  font-size: 12px;
  font-family: ui-monospace, Menlo, Consolas, monospace;
}

/* Filter mode selector (v0.23+) — segmented control next to the
   search input. Three buttons (shallow / deep / jsonquery), exactly
   one pressed at a time. Active mode highlighted in the accent color
   with a subtle fill so the user can spot at a glance whether the
   filter is text-string or a typed query. Replaces the v0.23-Phase-3
   \`ls-inspect-deep-toggle\` single-toggle with a tri-state radio. */
.ls-inspect-mode-selector {
  display: inline-flex;
  gap: 1px;
  padding: 1px;
  border-radius: 4px;
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.06));
}
.ls-inspect-mode-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.5));
  border-radius: 3px;
  cursor: pointer;
  transition: background 120ms, color 120ms;
}
.ls-inspect-mode-btn:hover {
  color: var(--lumiverse-text-1, rgba(255, 255, 255, 0.9));
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
}
.ls-inspect-mode-btn[aria-checked="true"] {
  /* Same theme-token caveat as \`.ls-edit-btn-save\` — \`--lumiverse-accent\`
   * is populated by the theme engine on certain ancestor scopes only and
   * doesn't cascade into portal-rendered modals under <body>. Without
   * hard-coded fallbacks the active state collapses visually into the
   * inactive one (color-mix() with an unset var produces an invalid
   * value → transparent). Mirror the \`.ls-drop-btn-confirm\` pattern with
   * concrete RGB fallbacks so the segmented-control selection always
   * reads at a glance regardless of where the theme engine reaches. */
  color: var(--lumiverse-accent, rgb(147, 112, 219));
  background: color-mix(in srgb, var(--lumiverse-accent, rgb(147, 112, 219)) 22%, transparent);
}
.ls-inspect-mode-btn[aria-checked="true"]:hover {
  /* Slightly stronger fill on hover — keeps the selected button visibly
   * "pressed" even when the mouse is over it (default :hover would
   * otherwise apply the unchecked hover styles to the checked one). */
  color: var(--lumiverse-accent, rgb(147, 112, 219));
  background: color-mix(in srgb, var(--lumiverse-accent, rgb(147, 112, 219)) 30%, transparent);
}

/* jsonquery error banner — sits between the toolbar and the records
   body, only when the backend returned an error (parse, runtime, or
   non-array result for a jsonquery expression). Replaced by the
   normal records body as soon as a clean response arrives. */
.ls-inspect-error {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 6px 12px;
  margin: 0 12px 8px 12px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--lumiverse-danger, rgb(246, 130, 130)) 12%, transparent);
  color: var(--lumiverse-danger, rgb(246, 130, 130));
  font-size: 11px;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  line-height: 1.4;
  word-break: break-word;
}
.ls-inspect-error svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.ls-inspect-pager {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
  flex-shrink: 0;
}
.ls-inspect-pager-status strong {
  color: var(--lumiverse-text-1);
  font-weight: 600;
}
.ls-inspect-pager-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--lumiverse-border);
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  border-radius: 3px;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
  cursor: pointer;
  transition: background 120ms;
}
.ls-inspect-pager-btn:not(:disabled):hover {
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.08));
  color: var(--lumiverse-text-1);
}
.ls-inspect-pager-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.ls-inspect-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px;
}

.ls-inspect-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 12px;
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.45));
  font-size: 12px;
  font-style: italic;
}

.ls-inspect-records {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ls-inspect-record {
  /* content-visibility lets the browser skip layout/paint for offscreen
     rows. containIntrinsicSize gives scroll math a reasonable initial
     estimate; \`auto\` tells the browser to remember the last rendered
     size per element. */
  content-visibility: auto;
  contain-intrinsic-size: auto 180px;

  border: 1px solid var(--lumiverse-border);
  border-radius: 4px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.02));
  padding: 6px 10px;
  overflow: hidden;
}

.ls-inspect-record-id {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 1px dashed var(--lumiverse-border);
  font-size: 10px;
}
.ls-inspect-record-id code {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
}
.ls-inspect-record-timestamps {
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.5));
}

.ls-inspect-record-json {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  line-height: 1.45;
  color: var(--lumiverse-text-1);
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

/* JSON syntax highlighting (v0.23+) — applied via a lightweight
   regex-based highlighter in InspectModal.tsx that wraps tokens in
   \`<span class="ls-json-…">\`. Color choices:
     - keys     → accent (Lumiverse purple) — primary visual anchor
     - strings  → green-ish — distinct from numeric / structural
     - numbers  → blue-ish — tabular-nums-feel for record IDs / counts
     - bools    → orange-ish — small, distinct
     - null     → muted italic — recedes visually, the absence-of-value
   The colors loosely echo the scope-chip palette in CollectionsSection
   (script=blue, character=orange, chat=green) for theme consistency,
   though they're applied in a different visual context (JSON pane). */
/* JSON token classes are unscoped intentionally — \`highlightJson\` is
   used by both the Records pane and the EditRecordModal overlay layer,
   and any future surface that renders the same output should pick up
   the palette automatically. */
.ls-json-key    { color: var(--lumiverse-accent, rgb(147, 112, 219)); }
.ls-json-string { color: rgb(174, 229, 168); }
.ls-json-number { color: rgb(120, 180, 255); }
.ls-json-bool   { color: rgb(246, 175, 125); }
.ls-json-null   {
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.4));
  font-style: italic;
}

/* ── Stats view (Inspect modal → Stats tab) ───────────────────────────────
 *
 * Per-field aggregate cards. Grid layout that wraps responsively as the
 * modal is resized. Each card is self-contained — header (name + presence),
 * type chips, optional numeric range, optional top-values chip list.
 */
.ls-inspect-stats-body {
  /* Override the records-mode \`display: flex\` on \`.ls-inspect-body\` —
   * stats panel manages its own layout via the inner grid. */
  display: block;
  overflow: auto;
  padding: 14px 16px;
}
.ls-inspect-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ls-inspect-stats-summary {
  font-size: 12px;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
}
.ls-inspect-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 10px;
}
.ls-inspect-stats-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--lumiverse-border);
  border-radius: 4px;
}
.ls-inspect-stats-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ls-inspect-stats-card-name {
  flex: 1;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  font-weight: 600;
  color: var(--lumiverse-accent, rgb(147, 112, 219));
  word-break: break-all;
}
.ls-inspect-stats-card-presence {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
  flex-shrink: 0;
}
.ls-inspect-stats-card-types {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.ls-stats-type {
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  padding: 1px 6px;
  border-radius: 2px;
  letter-spacing: 0.2px;
}
.ls-stats-type-string  { background: rgba(174, 229, 168, 0.15); color: rgb(174, 229, 168); }
.ls-stats-type-number  { background: rgba(120, 180, 255, 0.15); color: rgb(120, 180, 255); }
.ls-stats-type-bool    { background: rgba(246, 175, 125, 0.18); color: rgb(246, 175, 125); }
.ls-stats-type-null    { background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.55); font-style: italic; }
.ls-stats-type-complex { background: rgba(255, 255, 255, 0.08); color: rgba(255, 255, 255, 0.7); }
.ls-inspect-stats-card-numeric {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
}
.ls-inspect-stats-card-numeric strong {
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.95));
}
.ls-inspect-stats-card-values {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ls-inspect-stats-card-values-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.5));
}
.ls-inspect-stats-card-values-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.ls-inspect-stats-value-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.06));
  border-radius: 3px;
  font-size: 10.5px;
  max-width: 100%;
}
.ls-inspect-stats-value-chip code {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 10.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}
.ls-inspect-stats-value-count {
  font-variant-numeric: tabular-nums;
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.55));
}

/* ─── Drop confirmation dialog (Storage tab → Collections → Trash) ────── */

.ls-drop-card {
  width: min(440px, 92vw);
  height: auto;   /* override the Inspect modal's full-height default */
  max-height: 90vh;
}

.ls-drop-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px 16px;
}

.ls-drop-intro {
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.75));
}

.ls-drop-target {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--lumiverse-border);
  border-radius: 4px;
}
.ls-drop-target-name {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 13px;
  font-weight: 600;
  color: var(--lumiverse-text-1);
  word-break: break-all;
}
.ls-drop-target-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 10px;
}
.ls-drop-target-scope {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 1px 6px;
  border-radius: 2px;
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.08));
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
}
.ls-drop-target-scope[data-scope="script"]    { background: rgba(88, 166, 255, 0.18); color: rgb(120, 180, 255); }
.ls-drop-target-scope[data-scope="character"] { background: rgba(236, 147, 87, 0.18);  color: rgb(246, 175, 125); }
.ls-drop-target-scope[data-scope="chat"]      { background: rgba(142, 209, 134, 0.18); color: rgb(174, 229, 168); }
.ls-drop-target-size {
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.55));
  font-variant-numeric: tabular-nums;
}
.ls-drop-target-path {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 10px;
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.5));
  word-break: break-all;
  line-height: 1.35;
}

.ls-drop-warning {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 11px;
  color: var(--lumiverse-danger, rgb(246, 130, 130));
  background: rgba(246, 130, 130, 0.1);
  border: 1px solid rgba(246, 130, 130, 0.25);
  border-radius: 3px;
}

.ls-drop-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 2px;
}

.ls-drop-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 120ms, border-color 120ms;
}
.ls-drop-btn-cancel {
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--lumiverse-border);
  color: var(--lumiverse-text-1);
}
.ls-drop-btn-cancel:hover {
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.08));
}
.ls-drop-btn-cancel:focus-visible {
  outline: 2px solid var(--lumiverse-accent, rgb(147, 112, 219));
  outline-offset: 1px;
}
.ls-drop-btn-confirm {
  background: var(--lumiverse-danger, rgb(246, 130, 130));
  border: 1px solid transparent;
  color: #1a0606;
  font-weight: 600;
}
.ls-drop-btn-confirm:hover {
  background: rgb(252, 150, 150);
}
.ls-drop-btn-confirm:focus-visible {
  outline: 2px solid var(--lumiverse-danger, rgb(246, 130, 130));
  outline-offset: 2px;
}

/* ── Edit record modal ─────────────────────────────────────────────────────
 *
 * Reuses the drop-card sizing primitive but slightly wider + taller
 * because the textarea needs room. Body shares spacing with the drop
 * dialog so the actions row aligns visually if both modals are stacked
 * (rare, but it can happen during a confirm + edit interleave).
 */
.ls-edit-card {
  /* Pin to a definite height so the inner flex chain has something to
   * resolve \`flex: 1\` against — without this, the body sizes to its
   * content and the textarea's min-height can push the actions row
   * past the card's max-height, where \`.ls-modal-card { overflow: hidden }\`
   * clips the Save button entirely. */
  width: min(640px, 92vw);
  height: min(86vh, 720px);
  max-height: 90vh;
}
.ls-edit-body {
  /* \`flex: 1\` so the body fills the card's vertical space — required for
   * the textarea's \`flex: 1; min-height: 0\` to resolve correctly inside. */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px 16px;
  min-height: 0;
}
.ls-edit-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));
}
.ls-edit-meta-label {
  text-transform: uppercase;
  letter-spacing: 0.4px;
  opacity: 0.7;
}
.ls-edit-meta-value {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  color: var(--lumiverse-text-1);
  word-break: break-all;
}
.ls-edit-hint {
  margin: 0;
  font-size: 11px;
  line-height: 1.45;
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.55));
}
.ls-edit-hint code {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 10.5px;
  padding: 0 3px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.05));
  border-radius: 2px;
}
/* ── Live syntax-highlighted editor (textarea + pre overlay) ─────────────
 *
 * The wrap is a positioning context. The \`<pre>\` and \`<textarea>\` both
 * fill it absolutely with IDENTICAL typography, padding, border, and
 * box model, so glyphs in the textarea sit pixel-on-pixel over the
 * highlighted spans in the \`<pre>\`. Any divergence (font-size, line-
 * height, padding, even box-sizing) breaks alignment as the user
 * scrolls — the cardinal sin of this technique. Keep these rules in
 * lock-step if you ever touch one.
 */
.ls-edit-textarea-wrap {
  flex: 1;
  min-height: 0;
  position: relative;
  border: 1px solid var(--lumiverse-border);
  border-radius: 4px;
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));
  overflow: hidden; /* clip the inner overlay so its rounded corners stay clean */
  transition: border-color 120ms;
}
.ls-edit-textarea-wrap:focus-within {
  border-color: var(--lumiverse-accent, rgb(147, 112, 219));
}

.ls-edit-textarea,
.ls-edit-textarea-highlight {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px 12px;
  border: 0;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: auto;
  tab-size: 2;
  box-sizing: border-box;
}

.ls-edit-textarea-highlight {
  /* The visible highlighted layer. \`pointer-events: none\` lets all
   * mouse / touch input pass through to the textarea below. The
   * textarea controls the actual scroll; an onScroll handler in the
   * component mirrors scrollTop/scrollLeft here in lock-step. */
  pointer-events: none;
  background: transparent;
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
}

.ls-edit-textarea {
  /* The interactive layer. Text is transparent (the \`<pre>\` underneath
   * draws it); only the caret + selection highlight remain visible.
   * \`caret-color\` keeps the caret ink against the rendered tokens. */
  background: transparent;
  color: transparent;
  caret-color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
  resize: none;
  outline: none;
  /* Selection visibility — without an explicit override, the
   * transparent-text trick can leave selection invisible on some
   * browsers. Light tint over the rendered tokens reads cleanly. */
}
.ls-edit-textarea::selection {
  background: rgba(147, 112, 219, 0.35);
}
.ls-edit-error {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 11px;
  font-family: ui-monospace, Menlo, Consolas, monospace;
  color: var(--lumiverse-danger, rgb(246, 130, 130));
  background: rgba(246, 130, 130, 0.1);
  border: 1px solid rgba(246, 130, 130, 0.25);
  border-radius: 3px;
  word-break: break-word;
}
.ls-edit-btn-save {
  /* \`--lumiverse-accent\` and \`--lumiverse-accent-fg\` are set dynamically
   * by the theme engine, but only on certain ancestor scopes — they do
   * NOT cascade into portal-rendered modals under <body>. Without a
   * hard-coded fallback the button background falls through to the
   * universal \`button { background: 0 0 }\` and disappears against the
   * modal backdrop. Mirror \`.ls-drop-btn-confirm\`'s pattern: provide a
   * literal Lumiverse-purple fallback for both background AND text so
   * the button is always visible regardless of theme-engine reach. */
  background: var(--lumiverse-accent, rgb(147, 112, 219));
  border: 1px solid transparent;
  color: var(--lumiverse-accent-fg, #ffffff);
  font-weight: 600;
}
.ls-edit-btn-save:hover {
  background: var(--lumiverse-accent, rgb(167, 132, 239));
  filter: brightness(1.08);
}
.ls-edit-btn-save:focus-visible {
  outline: 2px solid var(--lumiverse-accent, rgb(147, 112, 219));
  outline-offset: 2px;
}

/* The actions row must not shrink — \`flex-shrink: 0\` keeps Save +
 * Cancel pinned at the bottom of the body even when the textarea is
 * fully expanded. Without this, \`display: flex; flex-direction: column\`
 * on the body would let the actions get squashed when the body's
 * intrinsic content height equals or exceeds the available space. */
.ls-edit-body .ls-drop-actions {
  flex-shrink: 0;
}
`;var zR=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
/*\r
 * The Status tab is a four-slot vertical grid: Scripts / Active Tools /\r
 * Variables / Active Injections. Each slot scrolls independently when its\r
 * content exceeds its share of the panel height, so a long script list no\r
 * longer pushes the lower sections off-screen. Fractional-unit shares\r
 * (3:2:2:2) give the scripts section the most space (typically densest)\r
 * while keeping the three smaller sections equal to each other.\r
 *\r
 * Pure fr units (no \`minmax\` floor) — the grid always fills exactly its\r
 * container, with each section's body scrolling when content exceeds its\r
 * share. This guarantees the whole Status tab fits the panel height and\r
 * the sidebar itself never scrolls. Trade-off: at very short panel\r
 * heights individual sections can get cramped, but their headers stay\r
 * pinned and bodies scroll, so nothing is hidden — just tighter.\r
 */\r
.ls-status-list {\r
  flex: 1;\r
  min-height: 0;\r
  padding: 4px;\r
  display: grid;\r
  /*\r
   * \`minmax(0, Xfr)\` is load-bearing here. Grid items have an implicit\r
   * \`min-height: auto\` (= min-content) by default, so a row with\r
   * content taller than its fr share will *expand* the row past its\r
   * proportional allocation to honor that min-content. With all four\r
   * rows potentially doing that, the grid grows past its container and\r
   * the panel starts scrolling. Forcing \`minmax(0, Xfr)\` sets the row\r
   * minimum to 0, overriding min-content; the section's own\r
   * \`overflow: hidden\` then clips content to the fr share, and the\r
   * \`.ls-status-section-body\` scrolls internally. This is what makes\r
   * "each section scrolls independently, sidebar itself doesn't" work.\r
   */\r
  grid-template-rows:\r
    minmax(0, 3fr)\r
    minmax(0, 2fr)\r
    minmax(0, 2fr);\r
  row-gap: 4px;\r
  overflow: hidden;\r
}\r
\r
/*\r
 * Storage tab grid — same machinery as .ls-status-list, different row\r
 * count. Phase 5a has just Variables (single row); Phase 5b adds the\r
 * Collections section below it (switches to 2 rows). The same\r
 * \`minmax(0, Xfr)\` + \`overflow: hidden\` discipline keeps each section's\r
 * scroll internal to its row so the sidebar itself never scrolls.\r
 */\r
.ls-storage-list {\r
  flex: 1;\r
  min-height: 0;\r
  padding: 4px;\r
  display: grid;\r
  grid-template-rows:\r
    minmax(0, 1fr)  /* Variables */\r
    minmax(0, 1fr); /* Collections */\r
  row-gap: 4px;\r
  overflow: hidden;\r
}\r
\r
/* ─── Collections section ─────────────────────────────────────────────── */\r
\r
.ls-collections-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  font-size: 11px;\r
}\r
\r
.ls-collections-row {\r
  display: grid;\r
  grid-template-columns:\r
    minmax(0, 2fr)    /* name — give most space, names are user-meaningful */\r
    52px               /* scope — badge only fits "SCRIPT" / "CHAR" / "CHAT" */\r
    minmax(0, 1fr)    /* owner */\r
    54px               /* size — "999 KB" is longest realistic */\r
    60px               /* updated — "just now" / "59m ago" */\r
    44px;              /* actions — two 20px buttons + gap */\r
  column-gap: 4px;\r
  align-items: center;\r
  padding: 3px 6px;\r
  border-radius: 3px;\r
}\r
\r
.ls-collections-row:not(.ls-collections-header-row):hover {\r
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.04));\r
}\r
\r
.ls-collections-header-row {\r
  position: sticky;\r
  top: 0;\r
  z-index: 1;\r
  font-size: 9px;\r
  font-weight: 600;\r
  text-transform: uppercase;\r
  letter-spacing: 0.5px;\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.5));\r
  background: var(--lumiverse-fill-0, rgba(0, 0, 0, 0.3));\r
}\r
/* Header alignment follows the content column it introduces — Name +\r
   Owner default to left, Scope is centered (matches the badge), Size +\r
   Updated right-align (matches tabular-nums data cells). */\r
.ls-collections-header-row > span:nth-child(2) { text-align: center; }\r
.ls-collections-header-row > span:nth-child(4),\r
.ls-collections-header-row > span:nth-child(5) { text-align: right; }\r
\r
.ls-collections-name {\r
  font-family: ui-monospace, Menlo, Consolas, monospace;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.ls-collections-scope {\r
  font-size: 9px;\r
  font-weight: 600;\r
  text-transform: uppercase;\r
  letter-spacing: 0.4px;\r
  padding: 1px 5px;\r
  border-radius: 2px;\r
  text-align: center;\r
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.06));\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));\r
}\r
.ls-collections-scope[data-scope="script"]    { background: rgba(88, 166, 255, 0.18); color: rgb(120, 180, 255); }\r
.ls-collections-scope[data-scope="character"] { background: rgba(236, 147, 87, 0.18);  color: rgb(246, 175, 125); }\r
.ls-collections-scope[data-scope="chat"]      { background: rgba(142, 209, 134, 0.18); color: rgb(174, 229, 168); }\r
\r
.ls-collections-owner {\r
  font-family: ui-monospace, Menlo, Consolas, monospace;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));\r
}\r
.ls-collections-owner-unknown {\r
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.4));\r
  font-style: italic;\r
}\r
\r
.ls-collections-size,\r
.ls-collections-updated {\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.7));\r
  font-variant-numeric: tabular-nums;\r
  text-align: right;\r
}\r
\r
.ls-collections-actions {\r
  display: flex;\r
  gap: 2px;\r
}\r
\r
.ls-collections-action {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 20px;\r
  height: 20px;\r
  border: none;\r
  background: transparent;\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.6));\r
  border-radius: 3px;\r
  cursor: pointer;\r
  transition: background 120ms, color 120ms;\r
}\r
.ls-collections-action:not(:disabled):hover {\r
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.08));\r
  color: var(--lumiverse-text-1, rgba(255, 255, 255, 0.9));\r
}\r
.ls-collections-action:disabled {\r
  cursor: not-allowed;\r
  opacity: 0.4;\r
}\r
.ls-collections-action-danger:not(:disabled):hover {\r
  color: var(--lumiverse-danger, rgb(246, 130, 130));\r
}\r
\r
/* ─── Collections: filter row above the table (v0.23+) ──────────────── */\r
\r
.ls-collections-filter {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 4px 6px;\r
  margin-bottom: 4px;\r
  border-radius: 3px;\r
  background: var(--lumiverse-fill-0, rgba(0, 0, 0, 0.18));\r
}\r
\r
.ls-collections-filter-search {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  flex: 1;\r
  min-width: 0;\r
  padding: 0 4px;\r
  background: var(--lumiverse-fill);\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: 3px;\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.6));\r
}\r
.ls-collections-filter-input {\r
  flex: 1;\r
  min-width: 0;\r
  border: none;\r
  background: transparent;\r
  color: var(--lumiverse-text);\r
  font-family: inherit;\r
  font-size: 11px;\r
  padding: 3px 0;\r
  outline: none;\r
}\r
.ls-collections-filter-clear {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 16px;\r
  height: 16px;\r
  border: none;\r
  background: transparent;\r
  color: inherit;\r
  border-radius: 2px;\r
  cursor: pointer;\r
  opacity: 0.6;\r
}\r
.ls-collections-filter-clear:hover {\r
  opacity: 1;\r
  background: var(--lumiverse-fill-2, rgba(255, 255, 255, 0.08));\r
}\r
\r
.ls-collections-filter-chips {\r
  display: inline-flex;\r
  gap: 3px;\r
}\r
.ls-collections-filter-chip {\r
  font-size: 9px;\r
  font-weight: 600;\r
  text-transform: uppercase;\r
  letter-spacing: 0.4px;\r
  padding: 2px 6px;\r
  border-radius: 2px;\r
  border: 1px solid transparent;\r
  background: var(--lumiverse-fill-1, rgba(255, 255, 255, 0.06));\r
  color: var(--lumiverse-text-2, rgba(255, 255, 255, 0.5));\r
  cursor: pointer;\r
  user-select: none;\r
  transition: opacity 120ms, background 120ms, color 120ms;\r
}\r
.ls-collections-filter-chip[aria-pressed="false"] {\r
  opacity: 0.45;\r
}\r
.ls-collections-filter-chip[aria-pressed="true"][data-scope="script"]    { background: rgba(88, 166, 255, 0.18);  color: rgb(120, 180, 255); }\r
.ls-collections-filter-chip[aria-pressed="true"][data-scope="character"] { background: rgba(236, 147, 87, 0.18);  color: rgb(246, 175, 125); }\r
.ls-collections-filter-chip[aria-pressed="true"][data-scope="chat"]      { background: rgba(142, 209, 134, 0.18); color: rgb(174, 229, 168); }\r
\r
.ls-collections-filter-count {\r
  font-size: 10px;\r
  color: var(--lumiverse-text-3, rgba(255, 255, 255, 0.45));\r
  font-variant-numeric: tabular-nums;\r
  white-space: nowrap;\r
  padding-left: 2px;\r
}\r
\r
/* ─── Collections: sortable header cells (v0.23+) ────────────────────── */\r
\r
/* Sortable headers — flex layout per cell so the text + sort indicator\r
   align together as one inline group. The cell ITSELF is a grid item\r
   that stretches to fill its column, so we use \`justify-content\` to\r
   echo the original \`text-align\` rules at the flex layer (text-align\r
   is ignored on flex containers because their children are flex\r
   children, not inline content). The nth-child selectors mirror the\r
   data-cell alignment: Scope centered, Size + Updated right-aligned. */\r
.ls-collections-header-row > span.ls-collections-sortable {\r
  cursor: pointer;\r
  user-select: none;\r
  display: flex;\r
  align-items: center;\r
  gap: 2px;\r
  transition: color 120ms;\r
}\r
.ls-collections-header-row > span.ls-collections-sortable:nth-child(2) {\r
  justify-content: center;\r
}\r
.ls-collections-header-row > span.ls-collections-sortable:nth-child(4),\r
.ls-collections-header-row > span.ls-collections-sortable:nth-child(5) {\r
  justify-content: flex-end;\r
}\r
.ls-collections-header-row > span.ls-collections-sortable:hover {\r
  color: var(--lumiverse-text-1, rgba(255, 255, 255, 0.9));\r
}\r
.ls-collections-sort-icon {\r
  opacity: 0.4;\r
  flex-shrink: 0;\r
}\r
.ls-collections-sort-icon-active {\r
  opacity: 1;\r
  color: var(--lumiverse-accent);\r
}\r
\r
/*\r
 * Section wrapper — one per grid row. Clips its body scroll via\r
 * \`overflow: hidden\` so the pinned header never scrolls with the content.\r
 * Retains the subtle border-top from the old \`.ls-inject-section\` as a\r
 * visual separator between slots.\r
 */\r
.ls-status-section {\r
  display: flex;\r
  flex-direction: column;\r
  min-height: 0;\r
  overflow: hidden;\r
  padding: 8px;\r
  border-top: 1px solid var(--lumiverse-border);\r
}\r
/* First section has no top border (row-gap handles separation from the\r
   tab-header above). */\r
.ls-status-section:first-child {\r
  border-top: none;\r
}\r
\r
/*\r
 * Scrollable body — the only element in each section that actually\r
 * scrolls. \`flex: 1 1 auto\` + \`min-height: 0\` is the standard "let me\r
 * shrink to my parent's height and scroll the overflow" flex idiom.\r
 */\r
.ls-status-section-body {\r
  flex: 1 1 auto;\r
  overflow-y: auto;\r
  min-height: 0;\r
}\r
.ls-status-row {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
  padding: 6px 8px;\r
  border-radius: var(--lumiverse-radius);\r
}\r
.ls-status-row:hover { background: var(--lumiverse-fill-subtle); }\r
.ls-status-row-main { display: flex; align-items: center; gap: 8px; }\r
.ls-status-name { flex: 1; font-size: 12px; }\r
.ls-status-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }\r
.ls-status-duration { font-size: 11px; color: var(--lumiverse-text-muted); }\r
.ls-status-error { font-size: 11px; color: #ef4444; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r
.ls-invoke-count { font-size: 10px; color: var(--lumiverse-text-muted); font-variant-numeric: tabular-nums; }\r
.ls-status-events { display: flex; flex-wrap: wrap; gap: 4px; padding-left: 16px; }\r
.ls-event-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 3px;\r
  padding: 1px 5px;\r
  border-radius: 4px;\r
  border: 1px solid var(--lumiverse-border);\r
  font-size: 10px;\r
  color: var(--lumiverse-text-muted);\r
  white-space: nowrap;\r
}\r
.ls-no-handlers { padding-left: 16px; font-size: 10px; color: var(--lumiverse-text-dim); font-style: italic; }\r
.ls-status-error-row {\r
  padding-left: 16px;\r
  margin-top: 1px;\r
}\r
.ls-status-error-text {\r
  flex: 1;\r
  font-size: 10px;\r
  font-family: monospace;\r
  color: #ef4444;\r
  padding: 3px 6px;\r
  background: color-mix(in srgb, #ef4444 8%, transparent);\r
  border: 1px solid color-mix(in srgb, #ef4444 22%, transparent);\r
  border-radius: 3px;\r
  word-break: break-word;\r
  line-height: 1.45;\r
}\r
.ls-placeholder {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  height: 100%;\r
  color: var(--lumiverse-text-muted);\r
  gap: 8px;\r
  padding: 32px;\r
  text-align: center;\r
}\r
.ls-placeholder p { margin: 0; font-size: 12px; }\r
\r
/* ── Section headers + injection/tool/var row styles ─────────────────────── */\r
/* (Section wrapper styling now lives under \`.ls-status-section\` above; the\r
 * header rule below is shared by Scripts / Active Tools / Variables /\r
 * Active Injections for visual consistency.) */\r
.ls-inject-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 10px;\r
  font-weight: 600;\r
  letter-spacing: 0.06em;\r
  text-transform: uppercase;\r
  color: var(--lumiverse-text-muted);\r
  margin-bottom: 6px;\r
  /* Headers must never compress when the section body is content-heavy —\r
     otherwise a full body could squeeze the pinned header below its intended\r
     visible height inside the flex column. */\r
  flex-shrink: 0;\r
}\r
.ls-inject-count {\r
  background: color-mix(in srgb, var(--lumiverse-accent) 20%, transparent);\r
  color: var(--lumiverse-accent);\r
  border-radius: 10px;\r
  padding: 0 5px;\r
  font-size: 10px;\r
  font-weight: 700;\r
}\r
.ls-inject-row {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 6px;\r
  padding: 4px 2px;\r
  border-bottom: 1px solid color-mix(in srgb, var(--lumiverse-border) 40%, transparent);\r
}\r
.ls-inject-row:last-child { border-bottom: none; }\r
.ls-inject-row-clickable {\r
  cursor: pointer;\r
  border-radius: 3px;\r
  transition: background var(--lumiverse-transition-fast);\r
}\r
.ls-inject-row-clickable:hover { background: var(--lumiverse-fill-subtle); }\r
.ls-inject-mode-icon {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 16px;\r
  flex-shrink: 0;\r
  margin-top: 1px;\r
}\r
.ls-inject-intercept { color: #3b82f6; }\r
.ls-inject-context   { color: #a855f7; }\r
.ls-inject-body {\r
  flex: 1;\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
}\r
.ls-inject-id {\r
  font-size: 11px;\r
  font-family: monospace;\r
  color: var(--lumiverse-text);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
.ls-inject-meta {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
  flex-wrap: wrap;\r
}\r
.ls-inject-role {\r
  font-size: 9px;\r
  font-weight: 600;\r
  padding: 1px 4px;\r
  border-radius: 3px;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
  background: color-mix(in srgb, var(--lumiverse-accent) 15%, transparent);\r
  color: var(--lumiverse-accent);\r
}\r
.ls-inject-depth,\r
.ls-inject-ephemeral { font-size: 9px; color: var(--lumiverse-text-muted); }\r
.ls-inject-script {\r
  font-size: 9px;\r
  color: var(--lumiverse-text-dim);\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  margin-left: auto;\r
}\r
.ls-inject-header-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
  width: 100%;\r
}\r
.ls-inject-chevron {\r
  display: flex;\r
  align-items: center;\r
  flex-shrink: 0;\r
  color: var(--lumiverse-text-dim);\r
  margin-left: auto;\r
  padding-left: 4px;\r
}\r
.ls-inject-content {\r
  margin-top: 4px;\r
  padding: 5px 7px;\r
  background: color-mix(in srgb, var(--lumiverse-fill) 80%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--lumiverse-border) 60%, transparent);\r
  border-radius: 3px;\r
  font-family: monospace;\r
  font-size: 10px;\r
  line-height: 1.5;\r
  color: var(--lumiverse-text-muted);\r
  white-space: pre-wrap;\r
  word-break: break-word;\r
  max-height: 80px;\r
  overflow-y: auto;\r
  cursor: text;\r
  user-select: text;\r
}\r
\r
/* ── Empty state for always-visible sections ─────────────────────────────── */\r
.ls-section-empty {\r
  font-size: 10px;\r
  font-style: italic;\r
  color: var(--lumiverse-text-dim);\r
  padding: 3px 2px;\r
}\r
\r
/* ── Active Tools section ────────────────────────────────────────────────── */\r
.ls-tool-row {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  padding: 4px 2px;\r
  border-bottom: 1px solid color-mix(in srgb, var(--lumiverse-border) 40%, transparent);\r
}\r
.ls-tool-row:last-child { border-bottom: none; }\r
.ls-tool-name {\r
  font-size: 11px;\r
  font-family: monospace;\r
  color: var(--lumiverse-text);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
.ls-tool-meta {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
}\r
.ls-tool-badge {\r
  font-size: 9px;\r
  font-weight: 600;\r
  padding: 1px 4px;\r
  border-radius: 3px;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
}\r
.ls-tool-council {\r
  background: color-mix(in srgb, #22c55e 15%, transparent);\r
  color: #22c55e;\r
}\r
/* Per-row removal action. Admin-override: drops a single Spindle tool\r
   registration without disabling the owning script. Hover swaps the icon\r
   colour to the shared danger tone so the destructive intent reads. */\r
.ls-tool-remove {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 16px;\r
  height: 16px;\r
  padding: 0;\r
  margin-left: 2px;\r
  background: none;\r
  border: none;\r
  border-radius: 3px;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  transition: background var(--lumiverse-transition-fast), color var(--lumiverse-transition-fast);\r
}\r
.ls-tool-remove:hover {\r
  background: color-mix(in srgb, var(--lumiverse-danger, #ef4444) 15%, transparent);\r
  color: var(--lumiverse-danger, #ef4444);\r
}\r
.ls-tool-remove:focus-visible {\r
  outline: 1px solid var(--lumiverse-accent);\r
  outline-offset: 1px;\r
}\r
\r
/* ── Variables Inspector ───────────────────────────────────────────────── */\r
.ls-vars-refresh {\r
  margin-left: auto;\r
  background: none;\r
  border: none;\r
  color: var(--lumiverse-text-dim);\r
  cursor: pointer;\r
  padding: 2px;\r
  border-radius: 3px;\r
  display: flex;\r
  align-items: center;\r
}\r
.ls-vars-refresh:hover {\r
  color: var(--lumiverse-accent);\r
  background: var(--lumiverse-fill-subtle);\r
}\r
\r
.ls-vars-scope {\r
  margin-bottom: 1px;\r
}\r
.ls-vars-scope-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
  width: 100%;\r
  padding: 4px 10px;\r
  background: none;\r
  border: none;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  color: var(--lumiverse-text-muted);\r
  font-size: 10px;\r
  cursor: pointer;\r
  text-align: left;\r
}\r
.ls-vars-scope-header:hover {\r
  color: var(--lumiverse-text);\r
}\r
.ls-vars-scope-name {\r
  font-weight: 600;\r
  text-transform: uppercase;\r
  letter-spacing: 0.05em;\r
}\r
.ls-vars-scope-hint {\r
  color: var(--lumiverse-text-dim);\r
  font-size: 9px;\r
}\r
.ls-vars-scope-count {\r
  margin-left: auto;\r
  font-size: 9px;\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: 999px;\r
  padding: 0 5px;\r
  color: var(--lumiverse-text-dim);\r
}\r
\r
.ls-vars-scope-body {\r
  padding: 2px 0;\r
}\r
.ls-vars-entry {\r
  display: flex;\r
  align-items: baseline;\r
  gap: 8px;\r
  padding: 2px 10px 2px 24px;\r
  font-size: 10px;\r
  font-family: monospace;\r
}\r
.ls-vars-entry:hover {\r
  background: var(--lumiverse-fill-subtle);\r
}\r
.ls-vars-key {\r
  color: var(--lumiverse-accent);\r
  flex-shrink: 0;\r
  max-width: 120px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
.ls-vars-value {\r
  color: var(--lumiverse-text-muted);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  flex: 1;\r
  min-width: 0;\r
}\r
`;var UR=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
.ls-settings {\r
  padding: 12px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  background: var(--lumiverse-fill-subtle);\r
  color: var(--lumiverse-text);\r
  font-size: 13px;\r
  font-family: inherit;\r
}\r
.ls-settings-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  margin-bottom: 10px;\r
}\r
.ls-settings-title {\r
  font-weight: 600;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
.ls-toggle-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-bottom: 8px;\r
}\r
.ls-toggle {\r
  position: relative;\r
  display: inline-flex;\r
  width: 32px;\r
  height: 18px;\r
  flex-shrink: 0;\r
}\r
.ls-toggle input { opacity: 0; width: 0; height: 0; }\r
.ls-toggle-slider {\r
  position: absolute;\r
  inset: 0;\r
  border-radius: 999px;\r
  background: var(--lumiverse-border);\r
  cursor: pointer;\r
  transition: background 0.2s;\r
}\r
.ls-toggle-slider::after {\r
  content: '';\r
  position: absolute;\r
  width: 12px;\r
  height: 12px;\r
  left: 3px;\r
  top: 3px;\r
  border-radius: 50%;\r
  background: white;\r
  transition: transform 0.2s;\r
}\r
.ls-toggle input:checked + .ls-toggle-slider { background: var(--lumiverse-accent); }\r
.ls-toggle input:checked + .ls-toggle-slider::after { transform: translateX(14px); }\r
.ls-settings-counts {\r
  display: flex;\r
  gap: 8px;\r
  margin-top: 10px;\r
}\r
.ls-count-card {\r
  flex: 1;\r
  padding: 8px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  text-align: center;\r
}\r
.ls-count-num { font-size: 18px; font-weight: 600; color: var(--lumiverse-accent); }\r
.ls-count-label { font-size: 11px; color: var(--lumiverse-text-muted); }\r
\r
/* ── Settings sub-sections ─────────────────────────────────────────────── */\r
.ls-settings-section {\r
  margin-top: 12px;\r
  padding-top: 10px;\r
  border-top: 1px solid var(--lumiverse-border);\r
}\r
.ls-settings-section-label {\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
  font-size: 11px;\r
  font-weight: 600;\r
  letter-spacing: 0.05em;\r
  text-transform: uppercase;\r
  color: var(--lumiverse-text-muted);\r
  margin-bottom: 8px;\r
}\r
.ls-settings-field {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-bottom: 6px;\r
}\r
.ls-settings-field-label {\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
  flex-shrink: 0;\r
  width: 72px;\r
}\r
.ls-select {\r
  flex: 1;\r
  min-width: 0;\r
  font-size: 11px;\r
  padding: 3px 6px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  background: var(--lumiverse-fill);\r
  color: var(--lumiverse-text);\r
  cursor: pointer;\r
}\r
.ls-select:focus { outline: none; border-color: var(--lumiverse-accent); }\r
.ls-number-input {\r
  width: 54px;\r
  font-size: 11px;\r
  padding: 3px 6px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  background: var(--lumiverse-fill);\r
  color: var(--lumiverse-text);\r
  text-align: right;\r
}\r
.ls-number-input:focus { outline: none; border-color: var(--lumiverse-accent); }\r
\r
/* ── Template textareas (stacked, full-width) ──────────────────────────── */\r
.ls-settings-template-field {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 4px;\r
  margin-bottom: 8px;\r
}\r
.ls-settings-template-field:last-child { margin-bottom: 0; }\r
.ls-settings-template-label {\r
  font-size: 11px;\r
  color: var(--lumiverse-text-muted);\r
}\r
.ls-textarea {\r
  width: 100%;\r
  box-sizing: border-box;\r
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\r
  font-size: 11px;\r
  line-height: 1.4;\r
  padding: 6px 8px;\r
  border-radius: var(--lumiverse-radius);\r
  border: 1px solid var(--lumiverse-border);\r
  background: var(--lumiverse-fill);\r
  color: var(--lumiverse-text);\r
  resize: vertical;\r
  tab-size: 2;\r
}\r
.ls-textarea:focus { outline: none; border-color: var(--lumiverse-accent); }\r
`;var KR=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
.ls-ref {\r
  flex: 1;\r
  min-height: 0;\r
  overflow-y: auto;\r
  padding: 10px;\r
  display: block;\r
}\r
\r
/* ── Toolbar ─────────────────────────────────────────────────────────────── */\r
.ls-ref-toolbar {\r
  display: flex;\r
  justify-content: flex-end;\r
  margin-bottom: 8px;\r
}\r
.ls-ref-export-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 4px 8px;\r
  font-size: 11px;\r
  font-family: inherit;\r
  color: var(--lumiverse-text);\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: var(--lumiverse-radius);\r
  cursor: pointer;\r
  transition: background var(--lumiverse-transition-fast), border-color var(--lumiverse-transition-fast);\r
}\r
.ls-ref-export-btn:hover {\r
  background: color-mix(in srgb, var(--lumiverse-fill-subtle) 80%, var(--lumiverse-accent) 20%);\r
  border-color: var(--lumiverse-accent);\r
}\r
.ls-ref-export-btn:focus-visible {\r
  outline: 1px solid var(--lumiverse-accent);\r
  outline-offset: 1px;\r
}\r
\r
/* ── Section accordion ───────────────────────────────────────────────────── */\r
.ls-ref-section {\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: var(--lumiverse-radius);\r
  overflow: hidden;\r
  margin-bottom: 6px;\r
}\r
.ls-ref-section:last-child { margin-bottom: 0; }\r
.ls-ref-section-header {\r
  width: 100%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 7px 10px;\r
  background: var(--lumiverse-fill-subtle);\r
  border: none;\r
  color: var(--lumiverse-text);\r
  font-size: 12px;\r
  font-weight: 600;\r
  font-family: inherit;\r
  cursor: pointer;\r
  text-align: left;\r
  transition: background 0.12s;\r
}\r
.ls-ref-section-header:hover { background: color-mix(in srgb, var(--lumiverse-fill-subtle) 80%, var(--lumiverse-accent) 20%); }\r
.ls-ref-section-title {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
.ls-ref-section-body {\r
  padding: 8px 10px;\r
  background: var(--lumiverse-fill);\r
  border-top: 1px solid var(--lumiverse-border);\r
}\r
\r
/* ── Reference table ─────────────────────────────────────────────────────── */\r
.ls-ref-table {\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: 11px;\r
}\r
.ls-ref-table th {\r
  text-align: left;\r
  font-weight: 600;\r
  color: var(--lumiverse-text-muted);\r
  padding: 3px 6px 5px 0;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  white-space: nowrap;\r
}\r
.ls-ref-table td {\r
  padding: 4px 6px 4px 0;\r
  color: var(--lumiverse-text);\r
  vertical-align: top;\r
  border-bottom: 1px solid color-mix(in srgb, var(--lumiverse-border) 50%, transparent 50%);\r
  line-height: 1.4;\r
  overflow-wrap: break-word;\r
  word-break: break-word;\r
}\r
.ls-ref-table tr:last-child td { border-bottom: none; }\r
.ls-ref-table td:first-child { white-space: nowrap; }\r
\r
/* ── Inline code ─────────────────────────────────────────────────────────── */\r
.ls-ref-code {\r
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;\r
  font-size: 10.5px;\r
  background: var(--lumiverse-fill-subtle);\r
  color: var(--lumiverse-accent);\r
  padding: 1px 4px;\r
  border-radius: 3px;\r
  white-space: nowrap;\r
}\r
\r
/* ── Permission badge ────────────────────────────────────────────────────── */\r
.ls-ref-perm {\r
  display: inline-block;\r
  font-size: 10px;\r
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;\r
  padding: 1px 5px;\r
  border-radius: 3px;\r
  background: color-mix(in srgb, var(--lumiverse-accent) 15%, transparent 85%);\r
  color: var(--lumiverse-accent);\r
  border: 1px solid color-mix(in srgb, var(--lumiverse-accent) 30%, transparent 70%);\r
  white-space: nowrap;\r
  margin: 1px 2px 1px 0;\r
}\r
.ls-ref-perm.ls-ref-perm-none {\r
  background: transparent;\r
  color: var(--lumiverse-text-dim);\r
  border-color: var(--lumiverse-border);\r
}\r
\r
/* ── Pattern code block ──────────────────────────────────────────────────── */\r
.ls-ref-pattern {\r
  margin-bottom: 10px;\r
}\r
.ls-ref-pattern:last-child { margin-bottom: 0; }\r
.ls-ref-pattern-label {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: var(--lumiverse-text-muted);\r
  margin-bottom: 4px;\r
}\r
.ls-ref-pre {\r
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;\r
  font-size: 10.5px;\r
  line-height: 1.55;\r
  background: var(--lumiverse-fill-subtle);\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: var(--lumiverse-radius);\r
  padding: 8px 10px;\r
  margin: 0;\r
  overflow-x: auto;\r
  color: var(--lumiverse-text);\r
  white-space: pre;\r
}\r
\r
/* ── Group header row (spans all columns, acts as a section divider) ─────── */\r
.ls-ref-group-header {\r
  background: var(--lumiverse-fill-subtle);\r
  color: var(--lumiverse-text-muted);\r
  font-weight: 600;\r
  font-size: 10.5px;\r
  padding: 4px 6px 4px 0;\r
  border-top: 1px solid var(--lumiverse-border);\r
  letter-spacing: 0.03em;\r
  text-transform: none;\r
  white-space: normal;\r
  word-break: break-word;\r
}\r
.ls-ref-table tr:first-child .ls-ref-group-header {\r
  border-top: none;\r
}\r
/* Note line below the type name inside a group header cell */\r
.ls-ref-type-note {\r
  font-weight: 400;\r
  font-size: 10px;\r
  color: var(--lumiverse-text-muted);\r
  margin-top: 2px;\r
  line-height: 1.45;\r
  white-space: normal;\r
  word-break: break-word;\r
}\r
\r
/* ── Muted text helper ───────────────────────────────────────────────────── */\r
.ls-ref-muted {\r
  color: var(--lumiverse-text-muted);\r
  font-size: 10.5px;\r
}\r
`;var $R=WR+mR+GR+XR+YR+JR+QR+zR+UR+KR;var Yo=wr(vo(),1);var iw=wr(vo(),1);var lw=(...e)=>e.filter((v,n,b)=>{return Boolean(v)&&v.trim()!==""&&b.indexOf(v)===n}).join(" ").trim();var LR=(e)=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var IR=(e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,n,b)=>b?b.toUpperCase():n.toLowerCase());var m6=(e)=>{let v=IR(e);return v.charAt(0).toUpperCase()+v.slice(1)};var Nn=wr(vo(),1);var vw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var FR=(e)=>{for(let v in e)if(v.startsWith("aria-")||v==="role"||v==="title")return!0;return!1};var Th=wr(vo(),1),EJ=Th.createContext({});var xR=()=>Th.useContext(EJ);var NR=Nn.forwardRef(({color:e,size:v,strokeWidth:n,absoluteStrokeWidth:b,className:u="",children:P,iconNode:O,...H},W)=>{let{size:G=24,strokeWidth:m=2,absoluteStrokeWidth:q=!1,color:X="currentColor",className:L=""}=xR()??{},T=b??q?Number(n??m)*24/Number(v??G):n??m;return Nn.createElement("svg",{ref:W,...vw,width:v??G??vw.width,height:v??G??vw.height,stroke:e??X,strokeWidth:T,className:lw("lucide",L,u),...!P&&!FR(H)&&{"aria-hidden":"true"},...H},[...O.map(([Z,_])=>Nn.createElement(Z,_)),...Array.isArray(P)?P:[P]])});var E=(e,v)=>{let n=iw.forwardRef(({className:b,...u},P)=>iw.createElement(NR,{ref:P,iconNode:v,className:lw(`lucide-${LR(m6(e))}`,`lucide-${e}`,b),...u}));return n.displayName=m6(e),n};var aJ=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Nl=E("braces",aJ);var fJ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],q0=E("chart-column",fJ);var jJ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wg=E("code-xml",jJ);var pJ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Bl=E("file-code-corner",pJ);var dJ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],M0=E("layers",dJ);var sJ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zl=E("loader-circle",sJ);var rQ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ce=E("triangle-alert",rQ);var oQ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],R0=E("user-round",oQ);var gQ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Bn=E("activity",gQ);var eQ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Zn=E("arrow-down-to-line",eQ);var lQ=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Cn=E("arrow-up-to-line",lQ);var vQ=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Sn=E("blocks",vQ);var iQ=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Gi=E("book-marked",iQ);var hQ=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Tn=E("book-open",hQ);var nQ=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],kn=E("calendar",nQ);var bQ=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dn=E("check",bQ);var tQ=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],mg=E("chevron-down",tQ);var uQ=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vn=E("chevron-left",uQ);var wQ=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Av=E("chevron-right",wQ);var PQ=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Me=E("chevron-up",PQ);var OQ=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],_n=E("chevrons-up-down",OQ);var HQ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],yn=E("clock",HQ);var AQ=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pe=E("copy",AQ);var qQ=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],de=E("database",qQ);var MQ=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Xi=E("download",MQ);var RQ=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],cn=E("eye",RQ);var WQ=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Yi=E("folder-open",WQ);var mQ=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],En=E("hash",mQ);var GQ=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],an=E("link-2",GQ);var XQ=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],fn=E("list-ordered",XQ);var YQ=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],jn=E("list",YQ);var JQ=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],pn=E("lock",JQ);var QQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],kh=E("message-square-plus",QQ);var zQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],dn=E("message-square",zQ);var UQ=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],sn=E("package",UQ);var KQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],se=E("pencil",KQ);var $Q=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ji=E("play",$Q);var LQ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],rb=E("plus",LQ);var IQ=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ob=E("radio",IQ);var FQ=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qv=E("refresh-cw",FQ);var xQ=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],gb=E("save",xQ);var NQ=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],W0=E("search",NQ);var BQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dh=E("shield-alert",BQ);var ZQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],eb=E("shield",ZQ);var CQ=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],lb=E("syringe",CQ);var SQ=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Cl=E("terminal",SQ);var TQ=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],vb=E("toggle-left",TQ);var kQ=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],ib=E("toggle-right",kQ);var DQ=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Qi=E("timer",DQ);var VQ=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kg=E("trash-2",VQ);var _Q=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],hb=E("type",_Q);var yQ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],nb=E("upload",yQ);var cQ=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Vh=E("user-plus",cQ);var EQ=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bb=E("wrench",EQ);var aQ=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kg=E("x",aQ);var fQ=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mv=E("zap",fQ);var hw={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Nw=wr(vo(),1);var zb=wr(vo(),1);var Uo=wr(ro(),1),pQ={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},BR=({script:e,selected:v,dot:n,duration:b,onSelect:u,onEdit:P,sendToBackend:O})=>{let H=(T)=>{T.stopPropagation(),O({type:"update_script",id:e.id,patch:{enabled:!e.enabled}})},W=(T)=>{T.stopPropagation(),O({type:"duplicate_script",id:e.id})},G=(T)=>{if(T.stopPropagation(),!window.confirm(`Delete "${e.name}"?`))return;O({type:"delete_script",id:e.id})},m=(T)=>{T.stopPropagation(),P()},q=n==="running",X=(T)=>{if(T.stopPropagation(),q||!e.enabled)return;O({type:"run_script",id:e.id})},L=e.bindings?.length??0;return Uo.jsxDEV("div",{className:`ls-item${v?" ls-selected":""}${!e.enabled&&e.type!=="library"?" ls-disabled":""}`,onClick:u,children:[Uo.jsxDEV("span",{className:pQ[n],title:n},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-body",children:[Uo.jsxDEV("div",{className:"ls-item-name",title:e.name,children:e.name},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-meta",children:[e.type!=="library"&&Uo.jsxDEV("span",{children:e.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),b!==void 0&&n!=="running"&&Uo.jsxDEV("span",{style:{color:n==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[b,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),e.type!=="library"&&L>0&&Uo.jsxDEV("div",{className:"ls-item-bindings",children:e.bindings.map((T,Z)=>Uo.jsxDEV("span",{className:"ls-binding-badge",children:[T.type==="character"?Uo.jsxDEV(R0,{size:9},void 0,!1,void 0,this):Uo.jsxDEV(dn,{size:9},void 0,!1,void 0,this),Uo.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:T.displayName},void 0,!1,void 0,this)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Uo.jsxDEV("div",{className:"ls-item-actions",children:[Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:"Edit script",children:Uo.jsxDEV(se,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),e.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:X,disabled:!e.enabled||q,title:!e.enabled?"Enable to run":q?"Running…":"Run script",children:q?Uo.jsxDEV(Zl,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Uo.jsxDEV(Ji,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),e.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:H,title:e.enabled?"Disable":"Enable",children:e.enabled?Uo.jsxDEV(ib,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Uo.jsxDEV(vb,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:"Duplicate",children:Uo.jsxDEV(pe,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:G,title:"Delete",children:Uo.jsxDEV(Kg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Zo=Uint8Array,Re=Uint16Array,I6=Int32Array,bw=new Zo([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tw=new Zo([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Q6=new Zo([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DR=function(e,v){var n=new Re(31);for(var b=0;b<31;++b)n[b]=v+=1<<e[b-1];var u=new I6(n[30]);for(var b=1;b<30;++b)for(var P=n[b];P<n[b+1];++P)u[P]=P-n[b]<<5|b;return{b:n,r:u}},VR=DR(bw,2),_R=VR.b,z6=VR.r;_R[28]=258,z6[258]=28;var yR=DR(tw,0),dQ=yR.b,ZR=yR.r,U6=new Re(32768);for(oo=0;oo<32768;++oo)Sl=(oo&43690)>>1|(oo&21845)<<1,Sl=(Sl&52428)>>2|(Sl&13107)<<2,Sl=(Sl&61680)>>4|(Sl&3855)<<4,U6[oo]=((Sl&65280)>>8|(Sl&255)<<8)>>1;var Sl,oo,kl=function(e,v,n){var b=e.length,u=0,P=new Re(v);for(;u<b;++u)if(e[u])++P[e[u]-1];var O=new Re(v);for(u=1;u<v;++u)O[u]=O[u-1]+P[u-1]<<1;var H;if(n){H=new Re(1<<v);var W=15-v;for(u=0;u<b;++u)if(e[u]){var G=u<<4|e[u],m=v-e[u],q=O[e[u]-1]++<<m;for(var X=q|(1<<m)-1;q<=X;++q)H[U6[q]>>W]=G}}else{H=new Re(b);for(u=0;u<b;++u)if(e[u])H[u]=U6[O[e[u]-1]++]>>15-e[u]}return H},m0=new Zo(288);for(oo=0;oo<144;++oo)m0[oo]=8;var oo;for(oo=144;oo<256;++oo)m0[oo]=9;var oo;for(oo=256;oo<280;++oo)m0[oo]=7;var oo;for(oo=280;oo<288;++oo)m0[oo]=8;var oo,wb=new Zo(32);for(oo=0;oo<32;++oo)wb[oo]=5;var oo,sQ=kl(m0,9,0),rz=kl(m0,9,1),oz=kl(wb,5,0),gz=kl(wb,5,1),G6=function(e){var v=e[0];for(var n=1;n<e.length;++n)if(e[n]>v)v=e[n];return v},rl=function(e,v,n){var b=v/8|0;return(e[b]|e[b+1]<<8)>>(v&7)&n},X6=function(e,v){var n=v/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(v&7)},F6=function(e){return(e+7)/8|0},Pb=function(e,v,n){if(v==null||v<0)v=0;if(n==null||n>e.length)n=e.length;return new Zo(e.subarray(v,n))};var ez=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Dg=function(e,v,n){var b=Error(v||ez[e]);if(b.code=e,Error.captureStackTrace)Error.captureStackTrace(b,Dg);if(!n)throw b;return b},lz=function(e,v,n,b){var u=e.length,P=b?b.length:0;if(!u||v.f&&!v.l)return n||new Zo(0);var O=!n,H=O||v.i!=2,W=v.i;if(O)n=new Zo(u*3);var G=function(nr){var yg=n.length;if(nr>yg){var Yg=new Zo(Math.max(yg*2,nr));Yg.set(n),n=Yg}},m=v.f||0,q=v.p||0,X=v.b||0,L=v.l,T=v.d,Z=v.m,_=v.n,rr=u*8;do{if(!L){m=rl(e,q,1);var ur=rl(e,q+1,3);if(q+=3,!ur){var lr=F6(q)+4,a=e[lr-4]|e[lr-3]<<8,p=lr+a;if(p>u){if(W)Dg(0);break}if(H)G(X+a);n.set(e.subarray(lr,p),X),v.b=X+=a,v.p=q=p*8,v.f=m;continue}else if(ur==1)L=rz,T=gz,Z=9,_=5;else if(ur==2){var er=rl(e,q,31)+257,N=rl(e,q+10,15)+4,y=er+rl(e,q+5,31)+1;q+=14;var f=new Zo(y),C=new Zo(19);for(var Rr=0;Rr<N;++Rr)C[Q6[Rr]]=rl(e,q+Rr*3,7);q+=N*3;var Ar=G6(C),mr=(1<<Ar)-1,Br=kl(C,Ar,1);for(var Rr=0;Rr<y;){var k=Br[rl(e,q,mr)];q+=k&15;var lr=k>>4;if(lr<16)f[Rr++]=lr;else{var s=0,vr=0;if(lr==16)vr=3+rl(e,q,3),q+=2,s=f[Rr-1];else if(lr==17)vr=3+rl(e,q,7),q+=3;else if(lr==18)vr=11+rl(e,q,127),q+=7;while(vr--)f[Rr++]=s}}var Qr=f.subarray(0,er),Gr=f.subarray(er);Z=G6(Qr),_=G6(Gr),L=kl(Qr,Z,1),T=kl(Gr,_,1)}else Dg(1);if(q>rr){if(W)Dg(0);break}}if(H)G(X+131072);var V=(1<<Z)-1,F=(1<<_)-1,gr=q;for(;;gr=q){var s=L[X6(e,q)&V],Or=s>>4;if(q+=s&15,q>rr){if(W)Dg(0);break}if(!s)Dg(2);if(Or<256)n[X++]=Or;else if(Or==256){gr=q,L=null;break}else{var qr=Or-254;if(Or>264){var Rr=Or-257,Zr=bw[Rr];qr=rl(e,q,(1<<Zr)-1)+_R[Rr],q+=Zr}var hr=T[X6(e,q)&F],Cr=hr>>4;if(!hr)Dg(3);q+=hr&15;var Gr=dQ[Cr];if(Cr>3){var Zr=tw[Cr];Gr+=X6(e,q)&(1<<Zr)-1,q+=Zr}if(q>rr){if(W)Dg(0);break}if(H)G(X+131072);var jr=X+qr;if(X<Gr){var Ro=P-Gr,Lg=Math.min(Gr,jr);if(Ro+X<0)Dg(3);for(;X<Lg;++X)n[X]=b[Ro+X]}for(;X<jr;++X)n[X]=n[X-Gr]}}if(v.l=L,v.p=gr,v.b=X,v.f=m,L)m=1,v.m=Z,v.d=T,v.n=_}while(!m);return X!=n.length&&O?Pb(n,0,X):n.subarray(0,X)},Rv=function(e,v,n){n<<=v&7;var b=v/8|0;e[b]|=n,e[b+1]|=n>>8},tb=function(e,v,n){n<<=v&7;var b=v/8|0;e[b]|=n,e[b+1]|=n>>8,e[b+2]|=n>>16},Y6=function(e,v){var n=[];for(var b=0;b<e.length;++b)if(e[b])n.push({s:b,f:e[b]});var u=n.length,P=n.slice();if(!u)return{t:ER,l:0};if(u==1){var O=new Zo(n[0].s+1);return O[n[0].s]=1,{t:O,l:1}}n.sort(function(p,er){return p.f-er.f}),n.push({s:-1,f:25001});var H=n[0],W=n[1],G=0,m=1,q=2;n[0]={s:-1,f:H.f+W.f,l:H,r:W};while(m!=u-1)H=n[n[G].f<n[q].f?G++:q++],W=n[G!=m&&n[G].f<n[q].f?G++:q++],n[m++]={s:-1,f:H.f+W.f,l:H,r:W};var X=P[0].s;for(var b=1;b<u;++b)if(P[b].s>X)X=P[b].s;var L=new Re(X+1),T=K6(n[m-1],L,0);if(T>v){var b=0,Z=0,_=T-v,rr=1<<_;P.sort(function(er,N){return L[N.s]-L[er.s]||er.f-N.f});for(;b<u;++b){var ur=P[b].s;if(L[ur]>v)Z+=rr-(1<<T-L[ur]),L[ur]=v;else break}Z>>=_;while(Z>0){var lr=P[b].s;if(L[lr]<v)Z-=1<<v-L[lr]++-1;else++b}for(;b>=0&&Z;--b){var a=P[b].s;if(L[a]==v)--L[a],++Z}T=v}return{t:new Zo(L),l:T}},K6=function(e,v,n){return e.s==-1?Math.max(K6(e.l,v,n+1),K6(e.r,v,n+1)):v[e.s]=n},CR=function(e){var v=e.length;while(v&&!e[--v]);var n=new Re(++v),b=0,u=e[0],P=1,O=function(W){n[b++]=W};for(var H=1;H<=v;++H)if(e[H]==u&&H!=v)++P;else{if(!u&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(u),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(u);P=1,u=e[H]}return{c:n.subarray(0,b),n:v}},ub=function(e,v){var n=0;for(var b=0;b<v.length;++b)n+=e[b]*v[b];return n},cR=function(e,v,n){var b=n.length,u=F6(v+2);e[u]=b&255,e[u+1]=b>>8,e[u+2]=e[u]^255,e[u+3]=e[u+1]^255;for(var P=0;P<b;++P)e[u+P+4]=n[P];return(u+4+b)*8},SR=function(e,v,n,b,u,P,O,H,W,G,m){Rv(v,m++,n),++u[256];var q=Y6(u,15),X=q.t,L=q.l,T=Y6(P,15),Z=T.t,_=T.l,rr=CR(X),ur=rr.c,lr=rr.n,a=CR(Z),p=a.c,er=a.n,N=new Re(19);for(var y=0;y<ur.length;++y)++N[ur[y]&31];for(var y=0;y<p.length;++y)++N[p[y]&31];var f=Y6(N,7),C=f.t,Rr=f.l,Ar=19;for(;Ar>4&&!C[Q6[Ar-1]];--Ar);var mr=G+5<<3,Br=ub(u,m0)+ub(P,wb)+O,k=ub(u,X)+ub(P,Z)+O+14+3*Ar+ub(N,C)+2*N[16]+3*N[17]+7*N[18];if(W>=0&&mr<=Br&&mr<=k)return cR(v,m,e.subarray(W,W+G));var s,vr,Qr,Gr;if(Rv(v,m,1+(k<Br)),m+=2,k<Br){s=kl(X,L,0),vr=X,Qr=kl(Z,_,0),Gr=Z;var V=kl(C,Rr,0);Rv(v,m,lr-257),Rv(v,m+5,er-1),Rv(v,m+10,Ar-4),m+=14;for(var y=0;y<Ar;++y)Rv(v,m+3*y,C[Q6[y]]);m+=3*Ar;var F=[ur,p];for(var gr=0;gr<2;++gr){var Or=F[gr];for(var y=0;y<Or.length;++y){var qr=Or[y]&31;if(Rv(v,m,V[qr]),m+=C[qr],qr>15)Rv(v,m,Or[y]>>5&127),m+=Or[y]>>12}}}else s=sQ,vr=m0,Qr=oz,Gr=wb;for(var y=0;y<H;++y){var Zr=b[y];if(Zr>255){var qr=Zr>>18&31;if(tb(v,m,s[qr+257]),m+=vr[qr+257],qr>7)Rv(v,m,Zr>>23&31),m+=bw[qr];var hr=Zr&31;if(tb(v,m,Qr[hr]),m+=Gr[hr],hr>3)tb(v,m,Zr>>5&8191),m+=tw[hr]}else tb(v,m,s[Zr]),m+=vr[Zr]}return tb(v,m,s[256]),m+vr[256]},vz=new I6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ER=new Zo(0),iz=function(e,v,n,b,u,P){var O=P.z||e.length,H=new Zo(b+O+5*(1+Math.ceil(O/7000))+u),W=H.subarray(b,H.length-u),G=P.l,m=(P.r||0)&7;if(v){if(m)W[0]=P.r>>3;var q=vz[v-1],X=q>>13,L=q&8191,T=(1<<n)-1,Z=P.p||new Re(32768),_=P.h||new Re(T+1),rr=Math.ceil(n/3),ur=2*rr,lr=function(re){return(e[re]^e[re+1]<<rr^e[re+2]<<ur)&T},a=new I6(25000),p=new Re(288),er=new Re(32),N=0,y=0,f=P.i||0,C=0,Rr=P.w||0,Ar=0;for(;f+2<O;++f){var mr=lr(f),Br=f&32767,k=_[mr];if(Z[Br]=k,_[mr]=Br,Rr<=f){var s=O-f;if((N>7000||C>24576)&&(s>423||!G)){m=SR(e,W,0,a,p,er,y,C,Ar,f-Ar,m),C=N=y=0,Ar=f;for(var vr=0;vr<286;++vr)p[vr]=0;for(var vr=0;vr<30;++vr)er[vr]=0}var Qr=2,Gr=0,V=L,F=Br-k&32767;if(s>2&&mr==lr(f-F)){var gr=Math.min(X,s)-1,Or=Math.min(32767,f),qr=Math.min(258,s);while(F<=Or&&--V&&Br!=k){if(e[f+Qr]==e[f+Qr-F]){var Zr=0;for(;Zr<qr&&e[f+Zr]==e[f+Zr-F];++Zr);if(Zr>Qr){if(Qr=Zr,Gr=F,Zr>gr)break;var hr=Math.min(F,Zr-2),Cr=0;for(var vr=0;vr<hr;++vr){var jr=f-F+vr&32767,Ro=Z[jr],Lg=jr-Ro&32767;if(Lg>Cr)Cr=Lg,k=jr}}}Br=k,k=Z[Br],F+=Br-k&32767}}if(Gr){a[C++]=268435456|z6[Qr]<<18|ZR[Gr];var nr=z6[Qr]&31,yg=ZR[Gr]&31;y+=bw[nr]+tw[yg],++p[257+nr],++er[yg],Rr=f+Qr,++N}else a[C++]=e[f],++p[e[f]]}}for(f=Math.max(f,Rr);f<O;++f)a[C++]=e[f],++p[e[f]];if(m=SR(e,W,G,a,p,er,y,C,Ar,f-Ar,m),!G)P.r=m&7|W[m/8|0]<<3,m-=7,P.h=_,P.p=Z,P.i=f,P.w=Rr}else{for(var f=P.w||0;f<O+G;f+=65535){var Yg=f+65535;if(Yg>=O)W[m/8|0]=G,Yg=O;m=cR(W,m+1,e.subarray(f,Yg))}P.i=O}return Pb(H,0,b+F6(m)+u)},hz=function(){var e=new Int32Array(256);for(var v=0;v<256;++v){var n=v,b=9;while(--b)n=(n&1&&-306674912)^n>>>1;e[v]=n}return e}(),nz=function(){var e=-1;return{p:function(v){var n=e;for(var b=0;b<v.length;++b)n=hz[n&255^v[b]]^n>>>8;e=n},d:function(){return~e}}};var bz=function(e,v,n,b,u){if(!u){if(u={l:1},v.dictionary){var P=v.dictionary.subarray(-32768),O=new Zo(P.length+e.length);O.set(P),O.set(e,P.length),e=O,u.w=P.length}}return iz(e,v.level==null?6:v.level,v.mem==null?u.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+v.mem,n,b,u)},aR=function(e,v){var n={};for(var b in e)n[b]=e[b];for(var b in v)n[b]=v[b];return n};var Tl=function(e,v){return e[v]|e[v+1]<<8},ol=function(e,v){return(e[v]|e[v+1]<<8|e[v+2]<<16|e[v+3]<<24)>>>0},J6=function(e,v){return ol(e,v)+ol(e,v+4)*4294967296},Gg=function(e,v,n){for(;n;++v)e[v]=n,n>>>=8};function tz(e,v){return bz(e,v||{},0,0)}function uz(e,v){return lz(e,{i:2},v&&v.out,v&&v.dictionary)}var fR=function(e,v,n,b){for(var u in e){var P=e[u],O=v+u,H=b;if(Array.isArray(P))H=aR(b,P[1]),P=P[0];if(P instanceof Zo)n[O]=[P,H];else n[O+="/"]=[new Zo(0),H],fR(P,O,n,b)}},TR=typeof TextEncoder<"u"&&new TextEncoder,$6=typeof TextDecoder<"u"&&new TextDecoder,wz=0;try{$6.decode(ER,{stream:!0}),wz=1}catch(e){}var Pz=function(e){for(var v="",n=0;;){var b=e[n++],u=(b>127)+(b>223)+(b>239);if(n+u>e.length)return{s:v,r:Pb(e,n-1)};if(!u)v+=String.fromCharCode(b);else if(u==3)b=((b&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,v+=String.fromCharCode(55296|b>>10,56320|b&1023);else if(u&1)v+=String.fromCharCode((b&31)<<6|e[n++]&63);else v+=String.fromCharCode((b&15)<<12|(e[n++]&63)<<6|e[n++]&63)}};function nw(e,v){if(v){var n=new Zo(e.length);for(var b=0;b<e.length;++b)n[b]=e.charCodeAt(b);return n}if(TR)return TR.encode(e);var u=e.length,P=new Zo(e.length+(e.length>>1)),O=0,H=function(m){P[O++]=m};for(var b=0;b<u;++b){if(O+5>P.length){var W=new Zo(O+8+(u-b<<1));W.set(P),P=W}var G=e.charCodeAt(b);if(G<128||v)H(G);else if(G<2048)H(192|G>>6),H(128|G&63);else if(G>55295&&G<57344)G=65536+(G&1047552)|e.charCodeAt(++b)&1023,H(240|G>>18),H(128|G>>12&63),H(128|G>>6&63),H(128|G&63);else H(224|G>>12),H(128|G>>6&63),H(128|G&63)}return Pb(P,0,O)}function x6(e,v){if(v){var n="";for(var b=0;b<e.length;b+=16384)n+=String.fromCharCode.apply(null,e.subarray(b,b+16384));return n}else if($6)return $6.decode(e);else{var u=Pz(e),P=u.s,n=u.r;if(n.length)Dg(8);return P}}var Oz=function(e,v){return v+30+Tl(e,v+26)+Tl(e,v+28)},Hz=function(e,v,n){var b=Tl(e,v+28),u=x6(e.subarray(v+46,v+46+b),!(Tl(e,v+8)&2048)),P=v+46+b,O=ol(e,v+20),H=n&&O==4294967295?Az(e,P):[O,ol(e,v+24),ol(e,v+42)],W=H[0],G=H[1],m=H[2];return[Tl(e,v+10),W,G,u,P+Tl(e,v+30)+Tl(e,v+32),m]},Az=function(e,v){for(;Tl(e,v)!=1;v+=4+Tl(e,v+2));return[J6(e,v+12),J6(e,v+4),J6(e,v+20)]},L6=function(e){var v=0;if(e)for(var n in e){var b=e[n].length;if(b>65535)Dg(9);v+=b+4}return v},kR=function(e,v,n,b,u,P,O,H){var W=b.length,G=n.extra,m=H&&H.length,q=L6(G);if(Gg(e,v,O!=null?33639248:67324752),v+=4,O!=null)e[v++]=20,e[v++]=n.os;e[v]=20,v+=2,e[v++]=n.flag<<1|(P<0&&8),e[v++]=u&&8,e[v++]=n.compression&255,e[v++]=n.compression>>8;var X=new Date(n.mtime==null?Date.now():n.mtime),L=X.getFullYear()-1980;if(L<0||L>119)Dg(10);if(Gg(e,v,L<<25|X.getMonth()+1<<21|X.getDate()<<16|X.getHours()<<11|X.getMinutes()<<5|X.getSeconds()>>1),v+=4,P!=-1)Gg(e,v,n.crc),Gg(e,v+4,P<0?-P-2:P),Gg(e,v+8,n.size);if(Gg(e,v+12,W),Gg(e,v+14,q),v+=16,O!=null)Gg(e,v,m),Gg(e,v+6,n.attrs),Gg(e,v+10,O),v+=14;if(e.set(b,v),v+=W,q)for(var T in G){var Z=G[T],_=Z.length;Gg(e,v,+T),Gg(e,v+2,_),e.set(Z,v+4),v+=4+_}if(m)e.set(H,v),v+=m;return v},qz=function(e,v,n,b,u){Gg(e,v,101010256),Gg(e,v+8,n),Gg(e,v+10,n),Gg(e,v+12,b),Gg(e,v+16,u)};function jR(e,v){if(!v)v={};var n={},b=[];fR(e,"",n,v);var u=0,P=0;for(var O in n){var H=n[O],W=H[0],G=H[1],m=G.level==0?0:8,q=nw(O),X=q.length,L=G.comment,T=L&&nw(L),Z=T&&T.length,_=L6(G.extra);if(X>65535)Dg(11);var rr=m?tz(W,G):W,ur=rr.length,lr=nz();lr.p(W),b.push(aR(G,{size:W.length,crc:lr.d(),c:rr,f:q,m:T,u:X!=O.length||T&&L.length!=Z,o:u,compression:m})),u+=30+X+_+ur,P+=76+2*(X+_)+(Z||0)+ur}var a=new Zo(P+22),p=u,er=P-u;for(var N=0;N<b.length;++N){var q=b[N];kR(a,q.o,q,q.f,q.u,q.c.length);var y=30+q.f.length+L6(q.extra);a.set(q.c,q.o+y),kR(a,u,q,q.f,q.u,q.c.length,q.o,q.m),u+=16+y+(q.m?q.m.length:0)}return qz(a,u,b.length,er,p),a}function pR(e,v){var n={},b=e.length-22;for(;ol(e,b)!=101010256;--b)if(!b||e.length-b>65558)Dg(13);var u=Tl(e,b+8);if(!u)return{};var P=ol(e,b+16),O=P==4294967295||u==65535;if(O){var H=ol(e,b-12);if(O=ol(e,H)==101075792,O)u=ol(e,H+32),P=ol(e,H+48)}var W=v&&v.filter;for(var G=0;G<u;++G){var m=Hz(e,P,O),q=m[0],X=m[1],L=m[2],T=m[3],Z=m[4],_=m[5],rr=Oz(e,_);if(P=Z,!W||W({name:T,size:X,originalSize:L,compression:q}))if(!q)n[T]=Pb(e,rr,rr+X);else if(q==8)n[T]=uz(e.subarray(rr,rr+X),{out:new Zo(L)});else Dg(14,"unknown compression type "+q)}return n}function N6(e){let v=e.map((b)=>({name:b.name,code:b.code,type:b.type,triggers:b.triggers,bindings:b.bindings,folder:b.folder,metadata:b.metadata})),n={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:v};return jR({"pack.json":nw(JSON.stringify(n,null,2))})}function dR(e,v){let n=N6(e),b=new Blob([n.buffer],{type:"application/zip"}),u=URL.createObjectURL(b),P=document.createElement("a");P.href=u,P.download=`${v}.lumiscript.zip`,P.click(),URL.revokeObjectURL(u)}var sR;function c(e,v,n){function b(H,W){if(!H._zod)Object.defineProperty(H,"_zod",{value:{def:W,constr:O,traits:new Set},enumerable:!1});if(H._zod.traits.has(e))return;H._zod.traits.add(e),v(H,W);let G=O.prototype,m=Object.keys(G);for(let q=0;q<m.length;q++){let X=m[q];if(!(X in H))H[X]=G[X].bind(H)}}let u=n?.Parent??Object;class P extends u{}Object.defineProperty(P,"name",{value:e});function O(H){var W;let G=n?.Parent?new P:this;b(G,H),(W=G._zod).deferred??(W.deferred=[]);for(let m of G._zod.deferred)m();return G}return Object.defineProperty(O,"init",{value:b}),Object.defineProperty(O,Symbol.hasInstance,{value:(H)=>{if(n?.Parent&&H instanceof n.Parent)return!0;return H?._zod?.traits?.has(e)}}),Object.defineProperty(O,"name",{value:e}),O}var Q_o=Symbol("zod_brand");class Wv extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Ob extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`);this.name="ZodEncodeError"}}(sR=globalThis).__zod_globalConfig??(sR.__zod_globalConfig={});var _h=globalThis.__zod_globalConfig;function mv(e){if(e)Object.assign(_h,e);return _h}var Oo={};IJ(Oo,{unwrapMessage:()=>Hb,uint8ArrayToHex:()=>_z,uint8ArrayToBase64url:()=>Dz,uint8ArrayToBase64:()=>bW,stringifyPrimitive:()=>lW,slugify:()=>Z6,shallowClone:()=>gW,safeExtend:()=>Nz,required:()=>Cz,randomString:()=>Uz,propertyKeyTypes:()=>S6,promiseAllObject:()=>zz,primitiveTypes:()=>eW,prefixIssues:()=>Wb,pick:()=>Iz,partial:()=>Zz,parsedType:()=>Sz,optionalKeys:()=>T6,omit:()=>Fz,objectClone:()=>Yz,numKeys:()=>Kz,nullish:()=>Mb,normalizeParams:()=>_r,mergeDefs:()=>Gv,merge:()=>Bz,jsonStringifyReplacer:()=>ch,joinValues:()=>Xz,issue:()=>Eh,isPlainObject:()=>Ui,isObject:()=>yh,hexToUint8Array:()=>Vz,getSizableOrigin:()=>hW,getParsedType:()=>$z,getLengthableOrigin:()=>mb,getEnumValues:()=>Ab,getElementAtPath:()=>Qz,floatSafeRemainder:()=>oW,finalizeIssue:()=>Dl,extend:()=>xz,explicitlyAborted:()=>k6,escapeRegex:()=>Xv,esc:()=>uw,defineLazy:()=>Po,createTransparentProxy:()=>Lz,cloneDef:()=>Jz,clone:()=>gl,cleanRegex:()=>Rb,cleanEnum:()=>Tz,captureStackTrace:()=>ww,cached:()=>qb,base64urlToUint8Array:()=>kz,base64ToUint8Array:()=>nW,assignProp:()=>G0,assertNotEqual:()=>Rz,assertNever:()=>mz,assertIs:()=>Wz,assertEqual:()=>Mz,assert:()=>Gz,allowsEval:()=>C6,aborted:()=>X0,NUMBER_FORMAT_RANGES:()=>vW,Class:()=>tW,BIGINT_FORMAT_RANGES:()=>iW});function Mz(e){return e}function Rz(e){return e}function Wz(e){}function mz(e){throw Error("Unexpected value in exhaustive check")}function Gz(e){}function Ab(e){let v=Object.values(e).filter((b)=>typeof b==="number");return Object.entries(e).filter(([b,u])=>v.indexOf(+b)===-1).map(([b,u])=>u)}function Xz(e,v="|"){return e.map((n)=>lW(n)).join(v)}function ch(e,v){if(typeof v==="bigint")return v.toString();return v}function qb(e){return{get value(){{let n=e();return Object.defineProperty(this,"value",{value:n}),n}throw Error("cached value already set")}}}function Mb(e){return e===null||e===void 0}function Rb(e){let v=e.startsWith("^")?1:0,n=e.endsWith("$")?e.length-1:e.length;return e.slice(v,n)}function oW(e,v){let n=e/v,b=Math.round(n),u=Number.EPSILON*Math.max(Math.abs(n),1);if(Math.abs(n-b)<u)return 0;return n-b}var rW=Symbol("evaluating");function Po(e,v,n){let b=void 0;Object.defineProperty(e,v,{get(){if(b===rW)return;if(b===void 0)b=rW,b=n();return b},set(u){Object.defineProperty(e,v,{value:u})},configurable:!0})}function Yz(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function G0(e,v,n){Object.defineProperty(e,v,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Gv(...e){let v={};for(let n of e){let b=Object.getOwnPropertyDescriptors(n);Object.assign(v,b)}return Object.defineProperties({},v)}function Jz(e){return Gv(e._zod.def)}function Qz(e,v){if(!v)return e;return v.reduce((n,b)=>n?.[b],e)}function zz(e){let v=Object.keys(e),n=v.map((b)=>e[b]);return Promise.all(n).then((b)=>{let u={};for(let P=0;P<v.length;P++)u[v[P]]=b[P];return u})}function Uz(e=10){let n="";for(let b=0;b<e;b++)n+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return n}function uw(e){return JSON.stringify(e)}function Z6(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var ww="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function yh(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}var C6=qb(()=>{if(_h.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});function Ui(e){if(yh(e)===!1)return!1;let v=e.constructor;if(v===void 0)return!0;if(typeof v!=="function")return!0;let n=v.prototype;if(yh(n)===!1)return!1;if(Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)return!1;return!0}function gW(e){if(Ui(e))return{...e};if(Array.isArray(e))return[...e];if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);return e}function Kz(e){let v=0;for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n))v++;return v}var $z=(e)=>{let v=typeof e;switch(v){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(e))return"array";if(e===null)return"null";if(e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function")return"promise";if(typeof Map<"u"&&e instanceof Map)return"map";if(typeof Set<"u"&&e instanceof Set)return"set";if(typeof Date<"u"&&e instanceof Date)return"date";if(typeof File<"u"&&e instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${v}`)}},S6=new Set(["string","number","symbol"]),eW=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Xv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gl(e,v,n){let b=new e._zod.constr(v??e._zod.def);if(!v||n?.parent)b._zod.parent=e;return b}function _r(e){let v=e;if(!v)return{};if(typeof v==="string")return{error:()=>v};if(v?.message!==void 0){if(v?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");v.error=v.message}if(delete v.message,typeof v.error==="string")return{...v,error:()=>v.error};return v}function Lz(e){let v;return new Proxy({},{get(n,b,u){return v??(v=e()),Reflect.get(v,b,u)},set(n,b,u,P){return v??(v=e()),Reflect.set(v,b,u,P)},has(n,b){return v??(v=e()),Reflect.has(v,b)},deleteProperty(n,b){return v??(v=e()),Reflect.deleteProperty(v,b)},ownKeys(n){return v??(v=e()),Reflect.ownKeys(v)},getOwnPropertyDescriptor(n,b){return v??(v=e()),Reflect.getOwnPropertyDescriptor(v,b)},defineProperty(n,b,u){return v??(v=e()),Reflect.defineProperty(v,b,u)}})}function lW(e){if(typeof e==="bigint")return e.toString()+"n";if(typeof e==="string")return`"${e}"`;return`${e}`}function T6(e){return Object.keys(e).filter((v)=>{return e[v]._zod.optin==="optional"&&e[v]._zod.optout==="optional"})}var vW={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},iW={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Iz(e,v){let n=e._zod.def,b=n.checks;if(b&&b.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Gv(e._zod.def,{get shape(){let O={};for(let H in v){if(!(H in n.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;O[H]=n.shape[H]}return G0(this,"shape",O),O},checks:[]});return gl(e,P)}function Fz(e,v){let n=e._zod.def,b=n.checks;if(b&&b.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Gv(e._zod.def,{get shape(){let O={...e._zod.def.shape};for(let H in v){if(!(H in n.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;delete O[H]}return G0(this,"shape",O),O},checks:[]});return gl(e,P)}function xz(e,v){if(!Ui(v))throw Error("Invalid input to extend: expected a plain object");let n=e._zod.def.checks;if(n&&n.length>0){let P=e._zod.def.shape;for(let O in v)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let u=Gv(e._zod.def,{get shape(){let P={...e._zod.def.shape,...v};return G0(this,"shape",P),P}});return gl(e,u)}function Nz(e,v){if(!Ui(v))throw Error("Invalid input to safeExtend: expected a plain object");let n=Gv(e._zod.def,{get shape(){let b={...e._zod.def.shape,...v};return G0(this,"shape",b),b}});return gl(e,n)}function Bz(e,v){if(e._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let n=Gv(e._zod.def,{get shape(){let b={...e._zod.def.shape,...v._zod.def.shape};return G0(this,"shape",b),b},get catchall(){return v._zod.def.catchall},checks:v._zod.def.checks??[]});return gl(e,n)}function Zz(e,v,n){let u=v._zod.def.checks;if(u&&u.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Gv(v._zod.def,{get shape(){let H=v._zod.def.shape,W={...H};if(n)for(let G in n){if(!(G in H))throw Error(`Unrecognized key: "${G}"`);if(!n[G])continue;W[G]=e?new e({type:"optional",innerType:H[G]}):H[G]}else for(let G in H)W[G]=e?new e({type:"optional",innerType:H[G]}):H[G];return G0(this,"shape",W),W},checks:[]});return gl(v,O)}function Cz(e,v,n){let b=Gv(v._zod.def,{get shape(){let u=v._zod.def.shape,P={...u};if(n)for(let O in n){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!n[O])continue;P[O]=new e({type:"nonoptional",innerType:u[O]})}else for(let O in u)P[O]=new e({type:"nonoptional",innerType:u[O]});return G0(this,"shape",P),P}});return gl(v,b)}function X0(e,v=0){if(e.aborted===!0)return!0;for(let n=v;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function k6(e,v=0){if(e.aborted===!0)return!0;for(let n=v;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function Wb(e,v){return v.map((n)=>{var b;return(b=n).path??(b.path=[]),n.path.unshift(e),n})}function Hb(e){return typeof e==="string"?e:e?.message}function Dl(e,v,n){let b=e.message?e.message:Hb(e.inst?._zod.def?.error?.(e))??Hb(v?.error?.(e))??Hb(n.customError?.(e))??Hb(n.localeError?.(e))??"Invalid input",{inst:u,continue:P,input:O,...H}=e;if(H.path??(H.path=[]),H.message=b,v?.reportInput)H.input=O;return H}function hW(e){if(e instanceof Set)return"set";if(e instanceof Map)return"map";if(e instanceof File)return"file";return"unknown"}function mb(e){if(Array.isArray(e))return"array";if(typeof e==="string")return"string";return"unknown"}function Sz(e){let v=typeof e;switch(v){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let n=e;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return v}function Eh(...e){let[v,n,b]=e;if(typeof v==="string")return{message:v,code:"custom",input:n,inst:b};return{...v}}function Tz(e){return Object.entries(e).filter(([v,n])=>{return Number.isNaN(Number.parseInt(v,10))}).map((v)=>v[1])}function nW(e){let v=atob(e),n=new Uint8Array(v.length);for(let b=0;b<v.length;b++)n[b]=v.charCodeAt(b);return n}function bW(e){let v="";for(let n=0;n<e.length;n++)v+=String.fromCharCode(e[n]);return btoa(v)}function kz(e){let v=e.replace(/-/g,"+").replace(/_/g,"/"),n="=".repeat((4-v.length%4)%4);return nW(v+n)}function Dz(e){return bW(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Vz(e){let v=e.replace(/^0x/,"");if(v.length%2!==0)throw Error("Invalid hex string length");let n=new Uint8Array(v.length/2);for(let b=0;b<v.length;b+=2)n[b/2]=Number.parseInt(v.slice(b,b+2),16);return n}function _z(e){return Array.from(e).map((v)=>v.toString(16).padStart(2,"0")).join("")}class tW{constructor(...e){}}var uW=(e,v)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:v,enumerable:!1}),e.message=JSON.stringify(v,ch,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},Pw=c("$ZodError",uW),D6=c("$ZodError",uW,{Parent:Error});function wW(e,v=(n)=>n.message){let n={},b=[];for(let u of e.issues)if(u.path.length>0)n[u.path[0]]=n[u.path[0]]||[],n[u.path[0]].push(v(u));else b.push(v(u));return{formErrors:b,fieldErrors:n}}function PW(e,v=(n)=>n.message){let n={_errors:[]},b=(u,P=[])=>{for(let O of u.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((H)=>b({issues:H},[...P,...O.path]));else if(O.code==="invalid_key")b({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")b({issues:O.issues},[...P,...O.path]);else{let H=[...P,...O.path];if(H.length===0)n._errors.push(v(O));else{let W=n,G=0;while(G<H.length){let m=H[G];if(G!==H.length-1)W[m]=W[m]||{_errors:[]};else W[m]=W[m]||{_errors:[]},W[m]._errors.push(v(O));W=W[m],G++}}}};return b(e),n}var Ow=(e)=>(v,n,b,u)=>{let P=b?{...b,async:!1}:{async:!1},O=v._zod.run({value:n,issues:[]},P);if(O instanceof Promise)throw new Wv;if(O.issues.length){let H=new(u?.Err??e)(O.issues.map((W)=>Dl(W,P,mv())));throw ww(H,u?.callee),H}return O.value};var Hw=(e)=>async(v,n,b,u)=>{let P=b?{...b,async:!0}:{async:!0},O=v._zod.run({value:n,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let H=new(u?.Err??e)(O.issues.map((W)=>Dl(W,P,mv())));throw ww(H,u?.callee),H}return O.value};var Gb=(e)=>(v,n,b)=>{let u=b?{...b,async:!1}:{async:!1},P=v._zod.run({value:n,issues:[]},u);if(P instanceof Promise)throw new Wv;return P.issues.length?{success:!1,error:new(e??Pw)(P.issues.map((O)=>Dl(O,u,mv())))}:{success:!0,data:P.value}},OW=Gb(D6),Xb=(e)=>async(v,n,b)=>{let u=b?{...b,async:!0}:{async:!0},P=v._zod.run({value:n,issues:[]},u);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new e(P.issues.map((O)=>Dl(O,u,mv())))}:{success:!0,data:P.value}},HW=Xb(D6),AW=(e)=>(v,n,b)=>{let u=b?{...b,direction:"backward"}:{direction:"backward"};return Ow(e)(v,n,u)};var qW=(e)=>(v,n,b)=>{return Ow(e)(v,n,b)};var MW=(e)=>async(v,n,b)=>{let u=b?{...b,direction:"backward"}:{direction:"backward"};return Hw(e)(v,n,u)};var RW=(e)=>async(v,n,b)=>{return Hw(e)(v,n,b)};var WW=(e)=>(v,n,b)=>{let u=b?{...b,direction:"backward"}:{direction:"backward"};return Gb(e)(v,n,u)};var mW=(e)=>(v,n,b)=>{return Gb(e)(v,n,b)};var GW=(e)=>async(v,n,b)=>{let u=b?{...b,direction:"backward"}:{direction:"backward"};return Xb(e)(v,n,u)};var XW=(e)=>async(v,n,b)=>{return Xb(e)(v,n,b)};var YW=/^[cC][0-9a-z]{6,}$/,JW=/^[0-9a-z]+$/,QW=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,zW=/^[0-9a-vA-V]{20}$/,UW=/^[A-Za-z0-9]{27}$/,KW=/^[a-zA-Z0-9_-]{21}$/,$W=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var LW=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,V6=(e)=>{if(!e)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var IW=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var cz="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function FW(){return new RegExp(cz,"u")}var xW=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,NW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var BW=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,ZW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,CW=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,_6=/^[A-Za-z0-9_-]*$/;var SW=/^https?$/,TW=/^\+[1-9]\d{6,14}$/,kW="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",DW=new RegExp(`^${kW}$`);function VW(e){return typeof e.precision==="number"?e.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":e.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function _W(e){return new RegExp(`^${VW(e)}$`)}function yW(e){let v=VW({precision:e.precision}),n=["Z"];if(e.local)n.push("");if(e.offset)n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let b=`${v}(?:${n.join("|")})`;return new RegExp(`^${kW}T(?:${b})$`)}var cW=(e)=>{let v=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${v}$`)};var EW=/^[^A-Z]*$/,aW=/^[^a-z]*$/;var We=c("$ZodCheck",(e,v)=>{var n;e._zod??(e._zod={}),e._zod.def=v,(n=e._zod).onattach??(n.onattach=[])});var fW=c("$ZodCheckMaxLength",(e,v)=>{var n;We.init(e,v),(n=e._zod.def).when??(n.when=(b)=>{let u=b.value;return!Mb(u)&&u.length!==void 0}),e._zod.onattach.push((b)=>{let u=b._zod.bag.maximum??Number.POSITIVE_INFINITY;if(v.maximum<u)b._zod.bag.maximum=v.maximum}),e._zod.check=(b)=>{let u=b.value;if(u.length<=v.maximum)return;let O=mb(u);b.issues.push({origin:O,code:"too_big",maximum:v.maximum,inclusive:!0,input:u,inst:e,continue:!v.abort})}}),jW=c("$ZodCheckMinLength",(e,v)=>{var n;We.init(e,v),(n=e._zod.def).when??(n.when=(b)=>{let u=b.value;return!Mb(u)&&u.length!==void 0}),e._zod.onattach.push((b)=>{let u=b._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(v.minimum>u)b._zod.bag.minimum=v.minimum}),e._zod.check=(b)=>{let u=b.value;if(u.length>=v.minimum)return;let O=mb(u);b.issues.push({origin:O,code:"too_small",minimum:v.minimum,inclusive:!0,input:u,inst:e,continue:!v.abort})}}),pW=c("$ZodCheckLengthEquals",(e,v)=>{var n;We.init(e,v),(n=e._zod.def).when??(n.when=(b)=>{let u=b.value;return!Mb(u)&&u.length!==void 0}),e._zod.onattach.push((b)=>{let u=b._zod.bag;u.minimum=v.length,u.maximum=v.length,u.length=v.length}),e._zod.check=(b)=>{let u=b.value,P=u.length;if(P===v.length)return;let O=mb(u),H=P>v.length;b.issues.push({origin:O,...H?{code:"too_big",maximum:v.length}:{code:"too_small",minimum:v.length},inclusive:!0,exact:!0,input:b.value,inst:e,continue:!v.abort})}}),Yb=c("$ZodCheckStringFormat",(e,v)=>{var n,b;if(We.init(e,v),e._zod.onattach.push((u)=>{let P=u._zod.bag;if(P.format=v.format,v.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(v.pattern)}),v.pattern)(n=e._zod).check??(n.check=(u)=>{if(v.pattern.lastIndex=0,v.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:v.format,input:u.value,...v.pattern?{pattern:v.pattern.toString()}:{},inst:e,continue:!v.abort})});else(b=e._zod).check??(b.check=()=>{})}),dW=c("$ZodCheckRegex",(e,v)=>{Yb.init(e,v),e._zod.check=(n)=>{if(v.pattern.lastIndex=0,v.pattern.test(n.value))return;n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:v.pattern.toString(),inst:e,continue:!v.abort})}}),sW=c("$ZodCheckLowerCase",(e,v)=>{v.pattern??(v.pattern=EW),Yb.init(e,v)}),r9=c("$ZodCheckUpperCase",(e,v)=>{v.pattern??(v.pattern=aW),Yb.init(e,v)}),o9=c("$ZodCheckIncludes",(e,v)=>{We.init(e,v);let n=Xv(v.includes),b=new RegExp(typeof v.position==="number"?`^.{${v.position}}${n}`:n);v.pattern=b,e._zod.onattach.push((u)=>{let P=u._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(b)}),e._zod.check=(u)=>{if(u.value.includes(v.includes,v.position))return;u.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:v.includes,input:u.value,inst:e,continue:!v.abort})}}),g9=c("$ZodCheckStartsWith",(e,v)=>{We.init(e,v);let n=new RegExp(`^${Xv(v.prefix)}.*`);v.pattern??(v.pattern=n),e._zod.onattach.push((b)=>{let u=b._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(n)}),e._zod.check=(b)=>{if(b.value.startsWith(v.prefix))return;b.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:v.prefix,input:b.value,inst:e,continue:!v.abort})}}),e9=c("$ZodCheckEndsWith",(e,v)=>{We.init(e,v);let n=new RegExp(`.*${Xv(v.suffix)}$`);v.pattern??(v.pattern=n),e._zod.onattach.push((b)=>{let u=b._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(n)}),e._zod.check=(b)=>{if(b.value.endsWith(v.suffix))return;b.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:v.suffix,input:b.value,inst:e,continue:!v.abort})}});var l9=c("$ZodCheckOverwrite",(e,v)=>{We.init(e,v),e._zod.check=(n)=>{n.value=v.tx(n.value)}});class y6{constructor(e=[]){if(this.content=[],this.indent=0,this)this.args=e}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e==="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let n=e.split(`
`).filter((P)=>P),b=Math.min(...n.map((P)=>P.length-P.trimStart().length)),u=n.map((P)=>P.slice(b)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of u)this.content.push(P)}compile(){let e=Function,v=this?.args,b=[...(this?.content??[""]).map((u)=>`  ${u}`)];return new e(...v,b.join(`
`))}}var i9={major:4,minor:4,patch:3};var yo=c("$ZodType",(e,v)=>{var n;e??(e={}),e._zod.def=v,e._zod.bag=e._zod.bag||{},e._zod.version=i9;let b=[...e._zod.def.checks??[]];if(e._zod.traits.has("$ZodCheck"))b.unshift(e);for(let u of b)for(let P of u._zod.onattach)P(e);if(b.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let u=(O,H,W)=>{let G=X0(O),m;for(let q of H){if(q._zod.def.when){if(k6(O))continue;if(!q._zod.def.when(O))continue}else if(G)continue;let X=O.issues.length,L=q._zod.check(O);if(L instanceof Promise&&W?.async===!1)throw new Wv;if(m||L instanceof Promise)m=(m??Promise.resolve()).then(async()=>{if(await L,O.issues.length===X)return;if(!G)G=X0(O,X)});else{if(O.issues.length===X)continue;if(!G)G=X0(O,X)}}if(m)return m.then(()=>{return O});return O},P=(O,H,W)=>{if(X0(O))return O.aborted=!0,O;let G=u(H,b,W);if(G instanceof Promise){if(W.async===!1)throw new Wv;return G.then((m)=>e._zod.parse(m,W))}return e._zod.parse(G,W)};e._zod.run=(O,H)=>{if(H.skipChecks)return e._zod.parse(O,H);if(H.direction==="backward"){let G=e._zod.parse({value:O.value,issues:[]},{...H,skipChecks:!0});if(G instanceof Promise)return G.then((m)=>{return P(m,O,H)});return P(G,O,H)}let W=e._zod.parse(O,H);if(W instanceof Promise){if(H.async===!1)throw new Wv;return W.then((G)=>u(G,b,H))}return u(W,b,H)}}Po(e,"~standard",()=>({validate:(u)=>{try{let P=OW(e,u);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return HW(e,u).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),Rw=c("$ZodString",(e,v)=>{yo.init(e,v),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??cW(e._zod.bag),e._zod.parse=(n,b)=>{if(v.coerce)try{n.value=String(n.value)}catch(u){}if(typeof n.value==="string")return n;return n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:e}),n}}),Lo=c("$ZodStringFormat",(e,v)=>{Yb.init(e,v),Rw.init(e,v)}),H9=c("$ZodGUID",(e,v)=>{v.pattern??(v.pattern=LW),Lo.init(e,v)}),A9=c("$ZodUUID",(e,v)=>{if(v.version){let b={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[v.version];if(b===void 0)throw Error(`Invalid UUID version: "${v.version}"`);v.pattern??(v.pattern=V6(b))}else v.pattern??(v.pattern=V6());Lo.init(e,v)}),q9=c("$ZodEmail",(e,v)=>{v.pattern??(v.pattern=IW),Lo.init(e,v)}),M9=c("$ZodURL",(e,v)=>{Lo.init(e,v),e._zod.check=(n)=>{try{let b=n.value.trim();if(!v.normalize&&v.protocol?.source===SW.source){if(!/^https?:\/\//i.test(b)){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:e,continue:!v.abort});return}}let u=new URL(b);if(v.hostname){if(v.hostname.lastIndex=0,!v.hostname.test(u.hostname))n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:v.hostname.source,input:n.value,inst:e,continue:!v.abort})}if(v.protocol){if(v.protocol.lastIndex=0,!v.protocol.test(u.protocol.endsWith(":")?u.protocol.slice(0,-1):u.protocol))n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:v.protocol.source,input:n.value,inst:e,continue:!v.abort})}if(v.normalize)n.value=u.href;else n.value=b;return}catch(b){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:e,continue:!v.abort})}}}),R9=c("$ZodEmoji",(e,v)=>{v.pattern??(v.pattern=FW()),Lo.init(e,v)}),W9=c("$ZodNanoID",(e,v)=>{v.pattern??(v.pattern=KW),Lo.init(e,v)}),m9=c("$ZodCUID",(e,v)=>{v.pattern??(v.pattern=YW),Lo.init(e,v)}),G9=c("$ZodCUID2",(e,v)=>{v.pattern??(v.pattern=JW),Lo.init(e,v)}),X9=c("$ZodULID",(e,v)=>{v.pattern??(v.pattern=QW),Lo.init(e,v)}),Y9=c("$ZodXID",(e,v)=>{v.pattern??(v.pattern=zW),Lo.init(e,v)}),J9=c("$ZodKSUID",(e,v)=>{v.pattern??(v.pattern=UW),Lo.init(e,v)}),Q9=c("$ZodISODateTime",(e,v)=>{v.pattern??(v.pattern=yW(v)),Lo.init(e,v)}),z9=c("$ZodISODate",(e,v)=>{v.pattern??(v.pattern=DW),Lo.init(e,v)}),U9=c("$ZodISOTime",(e,v)=>{v.pattern??(v.pattern=_W(v)),Lo.init(e,v)}),K9=c("$ZodISODuration",(e,v)=>{v.pattern??(v.pattern=$W),Lo.init(e,v)}),$9=c("$ZodIPv4",(e,v)=>{v.pattern??(v.pattern=xW),Lo.init(e,v),e._zod.bag.format="ipv4"}),L9=c("$ZodIPv6",(e,v)=>{v.pattern??(v.pattern=NW),Lo.init(e,v),e._zod.bag.format="ipv6",e._zod.check=(n)=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:e,continue:!v.abort})}}});var I9=c("$ZodCIDRv4",(e,v)=>{v.pattern??(v.pattern=BW),Lo.init(e,v)}),F9=c("$ZodCIDRv6",(e,v)=>{v.pattern??(v.pattern=ZW),Lo.init(e,v),e._zod.check=(n)=>{let b=n.value.split("/");try{if(b.length!==2)throw Error();let[u,P]=b;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${u}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:e,continue:!v.abort})}}});function x9(e){if(e==="")return!0;if(/\s/.test(e))return!1;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}var N9=c("$ZodBase64",(e,v)=>{v.pattern??(v.pattern=CW),Lo.init(e,v),e._zod.bag.contentEncoding="base64",e._zod.check=(n)=>{if(x9(n.value))return;n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:e,continue:!v.abort})}});function Ez(e){if(!_6.test(e))return!1;let v=e.replace(/[-_]/g,(b)=>b==="-"?"+":"/"),n=v.padEnd(Math.ceil(v.length/4)*4,"=");return x9(n)}var B9=c("$ZodBase64URL",(e,v)=>{v.pattern??(v.pattern=_6),Lo.init(e,v),e._zod.bag.contentEncoding="base64url",e._zod.check=(n)=>{if(Ez(n.value))return;n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:e,continue:!v.abort})}}),Z9=c("$ZodE164",(e,v)=>{v.pattern??(v.pattern=TW),Lo.init(e,v)});function az(e,v=null){try{let n=e.split(".");if(n.length!==3)return!1;let[b]=n;if(!b)return!1;let u=JSON.parse(atob(b));if("typ"in u&&u?.typ!=="JWT")return!1;if(!u.alg)return!1;if(v&&(!("alg"in u)||u.alg!==v))return!1;return!0}catch{return!1}}var C9=c("$ZodJWT",(e,v)=>{Lo.init(e,v),e._zod.check=(n)=>{if(az(n.value,v.alg))return;n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:e,continue:!v.abort})}});var S9=c("$ZodUnknown",(e,v)=>{yo.init(e,v),e._zod.parse=(n)=>n}),T9=c("$ZodNever",(e,v)=>{yo.init(e,v),e._zod.parse=(n,b)=>{return n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:e}),n}});function h9(e,v,n){if(e.issues.length)v.issues.push(...Wb(n,e.issues));v.value[n]=e.value}var k9=c("$ZodArray",(e,v)=>{yo.init(e,v),e._zod.parse=(n,b)=>{let u=n.value;if(!Array.isArray(u))return n.issues.push({expected:"array",code:"invalid_type",input:u,inst:e}),n;n.value=Array(u.length);let P=[];for(let O=0;O<u.length;O++){let H=u[O],W=v.element._zod.run({value:H,issues:[]},b);if(W instanceof Promise)P.push(W.then((G)=>h9(G,n,O)));else h9(W,n,O)}if(P.length)return Promise.all(P).then(()=>n);return n}});function Mw(e,v,n,b,u,P){let O=n in b;if(e.issues.length){if(u&&P&&!O)return;v.issues.push(...Wb(n,e.issues))}if(!O&&!u){if(!e.issues.length)v.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}if(e.value===void 0){if(O)v.value[n]=void 0}else v.value[n]=e.value}function D9(e){let v=Object.keys(e.shape);for(let b of v)if(!e.shape?.[b]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${b}": expected a Zod schema`);let n=T6(e.shape);return{...e,keys:v,keySet:new Set(v),numKeys:v.length,optionalKeys:new Set(n)}}function V9(e,v,n,b,u,P){let O=[],H=u.keySet,W=u.catchall._zod,G=W.def.type,m=W.optin==="optional",q=W.optout==="optional";for(let X in v){if(X==="__proto__")continue;if(H.has(X))continue;if(G==="never"){O.push(X);continue}let L=W.run({value:v[X],issues:[]},b);if(L instanceof Promise)e.push(L.then((T)=>Mw(T,n,X,v,m,q)));else Mw(L,n,X,v,m,q)}if(O.length)n.issues.push({code:"unrecognized_keys",keys:O,input:v,inst:P});if(!e.length)return n;return Promise.all(e).then(()=>{return n})}var fz=c("$ZodObject",(e,v)=>{if(yo.init(e,v),!Object.getOwnPropertyDescriptor(v,"shape")?.get){let H=v.shape;Object.defineProperty(v,"shape",{get:()=>{let W={...H};return Object.defineProperty(v,"shape",{value:W}),W}})}let b=qb(()=>D9(v));Po(e._zod,"propValues",()=>{let H=v.shape,W={};for(let G in H){let m=H[G]._zod;if(m.values){W[G]??(W[G]=new Set);for(let q of m.values)W[G].add(q)}}return W});let u=yh,P=v.catchall,O;e._zod.parse=(H,W)=>{O??(O=b.value);let G=H.value;if(!u(G))return H.issues.push({expected:"object",code:"invalid_type",input:G,inst:e}),H;H.value={};let m=[],q=O.shape;for(let X of O.keys){let L=q[X],T=L._zod.optin==="optional",Z=L._zod.optout==="optional",_=L._zod.run({value:G[X],issues:[]},W);if(_ instanceof Promise)m.push(_.then((rr)=>Mw(rr,H,X,G,T,Z)));else Mw(_,H,X,G,T,Z)}if(!P)return m.length?Promise.all(m).then(()=>H):H;return V9(m,G,H,W,b.value,e)}}),_9=c("$ZodObjectJIT",(e,v)=>{fz.init(e,v);let n=e._zod.parse,b=qb(()=>D9(v)),u=(X)=>{let L=new y6(["shape","payload","ctx"]),T=b.value,Z=(lr)=>{let a=uw(lr);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};L.write("const input = payload.value;");let _=Object.create(null),rr=0;for(let lr of T.keys)_[lr]=`key_${rr++}`;L.write("const newResult = {};");for(let lr of T.keys){let a=_[lr],p=uw(lr),er=X[lr],N=er?._zod?.optin==="optional",y=er?._zod?.optout==="optional";if(L.write(`const ${a} = ${Z(lr)};`),N&&y)L.write(`
        if (${a}.issues.length) {
          if (${p} in input) {
            payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${p}, ...iss.path] : [${p}]
            })));
          }
        }
        
        if (${a}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${a}.value;
        }
        
      `);else if(!N)L.write(`
        const ${a}_present = ${p} in input;
        if (${a}.issues.length) {
          payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        if (!${a}_present && !${a}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${p}]
          });
        }

        if (${a}_present) {
          if (${a}.value === undefined) {
            newResult[${p}] = undefined;
          } else {
            newResult[${p}] = ${a}.value;
          }
        }

      `);else L.write(`
        if (${a}.issues.length) {
          payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        
        if (${a}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${a}.value;
        }
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let ur=L.compile();return(lr,a)=>ur(X,lr,a)},P,O=yh,H=!_h.jitless,G=H&&C6.value,m=v.catchall,q;e._zod.parse=(X,L)=>{q??(q=b.value);let T=X.value;if(!O(T))return X.issues.push({expected:"object",code:"invalid_type",input:T,inst:e}),X;if(H&&G&&L?.async===!1&&L.jitless!==!0){if(!P)P=u(v.shape);if(X=P(X,L),!m)return X;return V9([],T,X,L,q,e)}return n(X,L)}});function n9(e,v,n,b){for(let P of e)if(P.issues.length===0)return v.value=P.value,v;let u=e.filter((P)=>!X0(P));if(u.length===1)return v.value=u[0].value,u[0];return v.issues.push({code:"invalid_union",input:v.value,inst:n,errors:e.map((P)=>P.issues.map((O)=>Dl(O,b,mv())))}),v}var y9=c("$ZodUnion",(e,v)=>{yo.init(e,v),Po(e._zod,"optin",()=>v.options.some((b)=>b._zod.optin==="optional")?"optional":void 0),Po(e._zod,"optout",()=>v.options.some((b)=>b._zod.optout==="optional")?"optional":void 0),Po(e._zod,"values",()=>{if(v.options.every((b)=>b._zod.values))return new Set(v.options.flatMap((b)=>Array.from(b._zod.values)));return}),Po(e._zod,"pattern",()=>{if(v.options.every((b)=>b._zod.pattern)){let b=v.options.map((u)=>u._zod.pattern);return new RegExp(`^(${b.map((u)=>Rb(u.source)).join("|")})$`)}return});let n=v.options.length===1?v.options[0]._zod.run:null;e._zod.parse=(b,u)=>{if(n)return n(b,u);let P=!1,O=[];for(let H of v.options){let W=H._zod.run({value:b.value,issues:[]},u);if(W instanceof Promise)O.push(W),P=!0;else{if(W.issues.length===0)return W;O.push(W)}}if(!P)return n9(O,b,e,u);return Promise.all(O).then((H)=>{return n9(H,b,e,u)})}});var c9=c("$ZodIntersection",(e,v)=>{yo.init(e,v),e._zod.parse=(n,b)=>{let u=n.value,P=v.left._zod.run({value:u,issues:[]},b),O=v.right._zod.run({value:u,issues:[]},b);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([W,G])=>{return b9(n,W,G)});return b9(n,P,O)}});function c6(e,v){if(e===v)return{valid:!0,data:e};if(e instanceof Date&&v instanceof Date&&+e===+v)return{valid:!0,data:e};if(Ui(e)&&Ui(v)){let n=Object.keys(v),b=Object.keys(e).filter((P)=>n.indexOf(P)!==-1),u={...e,...v};for(let P of b){let O=c6(e[P],v[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};u[P]=O.data}return{valid:!0,data:u}}if(Array.isArray(e)&&Array.isArray(v)){if(e.length!==v.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let b=0;b<e.length;b++){let u=e[b],P=v[b],O=c6(u,P);if(!O.valid)return{valid:!1,mergeErrorPath:[b,...O.mergeErrorPath]};n.push(O.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function b9(e,v,n){let b=new Map,u;for(let H of v.issues)if(H.code==="unrecognized_keys"){u??(u=H);for(let W of H.keys){if(!b.has(W))b.set(W,{});b.get(W).l=!0}}else e.issues.push(H);for(let H of n.issues)if(H.code==="unrecognized_keys")for(let W of H.keys){if(!b.has(W))b.set(W,{});b.get(W).r=!0}else e.issues.push(H);let P=[...b].filter(([,H])=>H.l&&H.r).map(([H])=>H);if(P.length&&u)e.issues.push({...u,keys:P});if(X0(e))return e;let O=c6(v.value,n.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return e.value=O.data,e}var E9=c("$ZodEnum",(e,v)=>{yo.init(e,v);let n=Ab(v.entries),b=new Set(n);e._zod.values=b,e._zod.pattern=new RegExp(`^(${n.filter((u)=>S6.has(typeof u)).map((u)=>typeof u==="string"?Xv(u):u.toString()).join("|")})$`),e._zod.parse=(u,P)=>{let O=u.value;if(b.has(O))return u;return u.issues.push({code:"invalid_value",values:n,input:O,inst:e}),u}}),a9=c("$ZodLiteral",(e,v)=>{if(yo.init(e,v),v.values.length===0)throw Error("Cannot create literal schema with no valid values");let n=new Set(v.values);e._zod.values=n,e._zod.pattern=new RegExp(`^(${v.values.map((b)=>typeof b==="string"?Xv(b):b?Xv(b.toString()):String(b)).join("|")})$`),e._zod.parse=(b,u)=>{let P=b.value;if(n.has(P))return b;return b.issues.push({code:"invalid_value",values:v.values,input:P,inst:e}),b}});var f9=c("$ZodTransform",(e,v)=>{yo.init(e,v),e._zod.optin="optional",e._zod.parse=(n,b)=>{if(b.direction==="backward")throw new Ob(e.constructor.name);let u=v.transform(n.value,n);if(b.async)return(u instanceof Promise?u:Promise.resolve(u)).then((O)=>{return n.value=O,n.fallback=!0,n});if(u instanceof Promise)throw new Wv;return n.value=u,n.fallback=!0,n}});function t9(e,v){if(v===void 0&&(e.issues.length||e.fallback))return{issues:[],value:void 0};return e}var E6=c("$ZodOptional",(e,v)=>{yo.init(e,v),e._zod.optin="optional",e._zod.optout="optional",Po(e._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,void 0]):void 0}),Po(e._zod,"pattern",()=>{let n=v.innerType._zod.pattern;return n?new RegExp(`^(${Rb(n.source)})?$`):void 0}),e._zod.parse=(n,b)=>{if(v.innerType._zod.optin==="optional"){let u=n.value,P=v.innerType._zod.run(n,b);if(P instanceof Promise)return P.then((O)=>t9(O,u));return t9(P,u)}if(n.value===void 0)return n;return v.innerType._zod.run(n,b)}}),j9=c("$ZodExactOptional",(e,v)=>{E6.init(e,v),Po(e._zod,"values",()=>v.innerType._zod.values),Po(e._zod,"pattern",()=>v.innerType._zod.pattern),e._zod.parse=(n,b)=>{return v.innerType._zod.run(n,b)}}),p9=c("$ZodNullable",(e,v)=>{yo.init(e,v),Po(e._zod,"optin",()=>v.innerType._zod.optin),Po(e._zod,"optout",()=>v.innerType._zod.optout),Po(e._zod,"pattern",()=>{let n=v.innerType._zod.pattern;return n?new RegExp(`^(${Rb(n.source)}|null)$`):void 0}),Po(e._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,null]):void 0}),e._zod.parse=(n,b)=>{if(n.value===null)return n;return v.innerType._zod.run(n,b)}}),d9=c("$ZodDefault",(e,v)=>{yo.init(e,v),e._zod.optin="optional",Po(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(n,b)=>{if(b.direction==="backward")return v.innerType._zod.run(n,b);if(n.value===void 0)return n.value=v.defaultValue,n;let u=v.innerType._zod.run(n,b);if(u instanceof Promise)return u.then((P)=>u9(P,v));return u9(u,v)}});function u9(e,v){if(e.value===void 0)e.value=v.defaultValue;return e}var s9=c("$ZodPrefault",(e,v)=>{yo.init(e,v),e._zod.optin="optional",Po(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(n,b)=>{if(b.direction==="backward")return v.innerType._zod.run(n,b);if(n.value===void 0)n.value=v.defaultValue;return v.innerType._zod.run(n,b)}}),r7=c("$ZodNonOptional",(e,v)=>{yo.init(e,v),Po(e._zod,"values",()=>{let n=v.innerType._zod.values;return n?new Set([...n].filter((b)=>b!==void 0)):void 0}),e._zod.parse=(n,b)=>{let u=v.innerType._zod.run(n,b);if(u instanceof Promise)return u.then((P)=>w9(P,e));return w9(u,e)}});function w9(e,v){if(!e.issues.length&&e.value===void 0)e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:v});return e}var o7=c("$ZodCatch",(e,v)=>{yo.init(e,v),e._zod.optin="optional",Po(e._zod,"optout",()=>v.innerType._zod.optout),Po(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(n,b)=>{if(b.direction==="backward")return v.innerType._zod.run(n,b);let u=v.innerType._zod.run(n,b);if(u instanceof Promise)return u.then((P)=>{if(n.value=P.value,P.issues.length)n.value=v.catchValue({...n,error:{issues:P.issues.map((O)=>Dl(O,b,mv()))},input:n.value}),n.issues=[],n.fallback=!0;return n});if(n.value=u.value,u.issues.length)n.value=v.catchValue({...n,error:{issues:u.issues.map((P)=>Dl(P,b,mv()))},input:n.value}),n.issues=[],n.fallback=!0;return n}});var g7=c("$ZodPipe",(e,v)=>{yo.init(e,v),Po(e._zod,"values",()=>v.in._zod.values),Po(e._zod,"optin",()=>v.in._zod.optin),Po(e._zod,"optout",()=>v.out._zod.optout),Po(e._zod,"propValues",()=>v.in._zod.propValues),e._zod.parse=(n,b)=>{if(b.direction==="backward"){let P=v.out._zod.run(n,b);if(P instanceof Promise)return P.then((O)=>qw(O,v.in,b));return qw(P,v.in,b)}let u=v.in._zod.run(n,b);if(u instanceof Promise)return u.then((P)=>qw(P,v.out,b));return qw(u,v.out,b)}});function qw(e,v,n){if(e.issues.length)return e.aborted=!0,e;return v._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var e7=c("$ZodReadonly",(e,v)=>{yo.init(e,v),Po(e._zod,"propValues",()=>v.innerType._zod.propValues),Po(e._zod,"values",()=>v.innerType._zod.values),Po(e._zod,"optin",()=>v.innerType?._zod?.optin),Po(e._zod,"optout",()=>v.innerType?._zod?.optout),e._zod.parse=(n,b)=>{if(b.direction==="backward")return v.innerType._zod.run(n,b);let u=v.innerType._zod.run(n,b);if(u instanceof Promise)return u.then(P9);return P9(u)}});function P9(e){return e.value=Object.freeze(e.value),e}var l7=c("$ZodCustom",(e,v)=>{We.init(e,v),yo.init(e,v),e._zod.parse=(n,b)=>{return n},e._zod.check=(n)=>{let b=n.value,u=v.fn(b);if(u instanceof Promise)return u.then((P)=>O9(P,n,b,e));O9(u,n,b,e);return}});function O9(e,v,n,b){if(!e){let u={code:"custom",input:n,inst:b,path:[...b._zod.def.path??[]],continue:!b._zod.def.abort};if(b._zod.def.params)u.params=b._zod.def.params;v.issues.push(Eh(u))}}var v7,a_o=Symbol("ZodOutput"),f_o=Symbol("ZodInput");class i7{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...v){let n=v[0];if(this._map.set(e,n),n&&typeof n==="object"&&"id"in n)this._idmap.set(n.id,e);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let v=this._map.get(e);if(v&&typeof v==="object"&&"id"in v)this._idmap.delete(v.id);return this._map.delete(e),this}get(e){let v=e._zod.parent;if(v){let n={...this.get(v)??{}};delete n.id;let b={...n,...this._map.get(e)};return Object.keys(b).length?b:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function jz(){return new i7}(v7=globalThis).__zod_globalRegistry??(v7.__zod_globalRegistry=jz());var Ki=globalThis.__zod_globalRegistry;function h7(e,v){return new e({type:"string",..._r(v)})}function n7(e,v){return new e({type:"string",format:"email",check:"string_format",abort:!1,..._r(v)})}function a6(e,v){return new e({type:"string",format:"guid",check:"string_format",abort:!1,..._r(v)})}function b7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(v)})}function t7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(v)})}function u7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(v)})}function w7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(v)})}function P7(e,v){return new e({type:"string",format:"url",check:"string_format",abort:!1,..._r(v)})}function O7(e,v){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(v)})}function H7(e,v){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(v)})}function A7(e,v){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(v)})}function q7(e,v){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(v)})}function M7(e,v){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(v)})}function R7(e,v){return new e({type:"string",format:"xid",check:"string_format",abort:!1,..._r(v)})}function W7(e,v){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(v)})}function m7(e,v){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(v)})}function G7(e,v){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(v)})}function X7(e,v){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(v)})}function Y7(e,v){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(v)})}function J7(e,v){return new e({type:"string",format:"base64",check:"string_format",abort:!1,..._r(v)})}function Q7(e,v){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(v)})}function z7(e,v){return new e({type:"string",format:"e164",check:"string_format",abort:!1,..._r(v)})}function U7(e,v){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(v)})}function K7(e,v){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(v)})}function $7(e,v){return new e({type:"string",format:"date",check:"string_format",..._r(v)})}function L7(e,v){return new e({type:"string",format:"time",check:"string_format",precision:null,..._r(v)})}function I7(e,v){return new e({type:"string",format:"duration",check:"string_format",..._r(v)})}function F7(e){return new e({type:"unknown"})}function x7(e,v){return new e({type:"never",..._r(v)})}function Ww(e,v){return new fW({check:"max_length",..._r(v),maximum:e})}function ah(e,v){return new jW({check:"min_length",..._r(v),minimum:e})}function mw(e,v){return new pW({check:"length_equals",..._r(v),length:e})}function f6(e,v){return new dW({check:"string_format",format:"regex",..._r(v),pattern:e})}function j6(e){return new sW({check:"string_format",format:"lowercase",..._r(e)})}function p6(e){return new r9({check:"string_format",format:"uppercase",..._r(e)})}function d6(e,v){return new o9({check:"string_format",format:"includes",..._r(v),includes:e})}function s6(e,v){return new g9({check:"string_format",format:"starts_with",..._r(v),prefix:e})}function rP(e,v){return new e9({check:"string_format",format:"ends_with",..._r(v),suffix:e})}function Y0(e){return new l9({check:"overwrite",tx:e})}function oP(e){return Y0((v)=>v.normalize(e))}function gP(){return Y0((e)=>e.trim())}function eP(){return Y0((e)=>e.toLowerCase())}function lP(){return Y0((e)=>e.toUpperCase())}function vP(){return Y0((e)=>Z6(e))}function N7(e,v,n){return new e({type:"array",element:v,..._r(n)})}function B7(e,v,n){return new e({type:"custom",check:"custom",fn:v,..._r(n)})}function Z7(e,v){let n=pz((b)=>{return b.addIssue=(u)=>{if(typeof u==="string")b.issues.push(Eh(u,b.value,n._zod.def));else{let P=u;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=b.value),P.inst??(P.inst=n),P.continue??(P.continue=!n._zod.def.abort),b.issues.push(Eh(P))}},e(b.value,b)},v);return n}function pz(e,v){let n=new We({check:"custom",..._r(v)});return n._zod.check=e,n}function iP(e){let v=e?.target??"draft-2020-12";if(v==="draft-4")v="draft-04";if(v==="draft-7")v="draft-07";return{processors:e.processors??{},metadataRegistry:e?.metadata??Ki,target:v,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function wg(e,v,n={path:[],schemaPath:[]}){var b;let u=e._zod.def,P=v.seen.get(e);if(P){if(P.count++,n.schemaPath.includes(e))P.cycle=n.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:n.path};v.seen.set(e,O);let H=e._zod.toJSONSchema?.();if(H)O.schema=H;else{let m={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(v,O.schema,m);else{let X=O.schema,L=v.processors[u.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${u.type}`);L(e,v,X,m)}let q=e._zod.parent;if(q){if(!O.ref)O.ref=q;wg(q,v,m),v.seen.get(q).isParent=!0}}let W=v.metadataRegistry.get(e);if(W)Object.assign(O.schema,W);if(v.io==="input"&&Vg(e))delete O.schema.examples,delete O.schema.default;if(v.io==="input"&&"_prefault"in O.schema)(b=O.schema).default??(b.default=O.schema._prefault);return delete O.schema._prefault,v.seen.get(e).schema}function hP(e,v){let n=e.seen.get(v);if(!n)throw Error("Unprocessed schema. This is a bug in Zod.");let b=new Map;for(let O of e.seen.entries()){let H=e.metadataRegistry.get(O[0])?.id;if(H){let W=b.get(H);if(W&&W!==O[0])throw Error(`Duplicate schema id "${H}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);b.set(H,O[0])}}let u=(O)=>{let H=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let q=e.external.registry.get(O[0])?.id,X=e.external.uri??((T)=>T);if(q)return{ref:X(q)};let L=O[1].defId??O[1].schema.id??`schema${e.counter++}`;return O[1].defId=L,{defId:L,ref:`${X("__shared")}#/${H}/${L}`}}if(O[1]===n)return{ref:"#"};let G=`${"#"}/${H}/`,m=O[1].schema.id??`__schema${e.counter++}`;return{defId:m,ref:G+m}},P=(O)=>{if(O[1].schema.$ref)return;let H=O[1],{ref:W,defId:G}=u(O);if(H.def={...H.schema},G)H.defId=G;let m=H.schema;for(let q in m)delete m[q];m.$ref=W};if(e.cycles==="throw")for(let O of e.seen.entries()){let H=O[1];if(H.cycle)throw Error(`Cycle detected: #/${H.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of e.seen.entries()){let H=O[1];if(v===O[0]){P(O);continue}if(e.external){let G=e.external.registry.get(O[0])?.id;if(v!==O[0]&&G){P(O);continue}}if(e.metadataRegistry.get(O[0])?.id){P(O);continue}if(H.cycle){P(O);continue}if(H.count>1){if(e.reused==="ref"){P(O);continue}}}}function nP(e,v){let n=e.seen.get(v);if(!n)throw Error("Unprocessed schema. This is a bug in Zod.");let b=(H)=>{let W=e.seen.get(H);if(W.ref===null)return;let G=W.def??W.schema,m={...G},q=W.ref;if(W.ref=null,q){b(q);let L=e.seen.get(q),T=L.schema;if(T.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"))G.allOf=G.allOf??[],G.allOf.push(T);else Object.assign(G,T);if(Object.assign(G,m),H._zod.parent===q)for(let _ in G){if(_==="$ref"||_==="allOf")continue;if(!(_ in m))delete G[_]}if(T.$ref&&L.def)for(let _ in G){if(_==="$ref"||_==="allOf")continue;if(_ in L.def&&JSON.stringify(G[_])===JSON.stringify(L.def[_]))delete G[_]}}let X=H._zod.parent;if(X&&X!==q){b(X);let L=e.seen.get(X);if(L?.schema.$ref){if(G.$ref=L.schema.$ref,L.def)for(let T in G){if(T==="$ref"||T==="allOf")continue;if(T in L.def&&JSON.stringify(G[T])===JSON.stringify(L.def[T]))delete G[T]}}}e.override({zodSchema:H,jsonSchema:G,path:W.path??[]})};for(let H of[...e.seen.entries()].reverse())b(H[0]);let u={};if(e.target==="draft-2020-12")u.$schema="https://json-schema.org/draft/2020-12/schema";else if(e.target==="draft-07")u.$schema="http://json-schema.org/draft-07/schema#";else if(e.target==="draft-04")u.$schema="http://json-schema.org/draft-04/schema#";else if(e.target==="openapi-3.0");if(e.external?.uri){let H=e.external.registry.get(v)?.id;if(!H)throw Error("Schema is missing an `id` property");u.$id=e.external.uri(H)}Object.assign(u,n.def??n.schema);let P=e.metadataRegistry.get(v)?.id;if(P!==void 0&&u.id===P)delete u.id;let O=e.external?.defs??{};for(let H of e.seen.entries()){let W=H[1];if(W.def&&W.defId){if(W.def.id===W.defId)delete W.def.id;O[W.defId]=W.def}}if(e.external);else if(Object.keys(O).length>0)if(e.target==="draft-2020-12")u.$defs=O;else u.definitions=O;try{let H=JSON.parse(JSON.stringify(u));return Object.defineProperty(H,"~standard",{value:{...v["~standard"],jsonSchema:{input:Jb(v,"input",e.processors),output:Jb(v,"output",e.processors)}},enumerable:!1,writable:!1}),H}catch(H){throw Error("Error converting schema to JSON.")}}function Vg(e,v){let n=v??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let b=e._zod.def;if(b.type==="transform")return!0;if(b.type==="array")return Vg(b.element,n);if(b.type==="set")return Vg(b.valueType,n);if(b.type==="lazy")return Vg(b.getter(),n);if(b.type==="promise"||b.type==="optional"||b.type==="nonoptional"||b.type==="nullable"||b.type==="readonly"||b.type==="default"||b.type==="prefault")return Vg(b.innerType,n);if(b.type==="intersection")return Vg(b.left,n)||Vg(b.right,n);if(b.type==="record"||b.type==="map")return Vg(b.keyType,n)||Vg(b.valueType,n);if(b.type==="pipe"){if(e._zod.traits.has("$ZodCodec"))return!0;return Vg(b.in,n)||Vg(b.out,n)}if(b.type==="object"){for(let u in b.shape)if(Vg(b.shape[u],n))return!0;return!1}if(b.type==="union"){for(let u of b.options)if(Vg(u,n))return!0;return!1}if(b.type==="tuple"){for(let u of b.items)if(Vg(u,n))return!0;if(b.rest&&Vg(b.rest,n))return!0;return!1}return!1}var C7=(e,v={})=>(n)=>{let b=iP({...n,processors:v});return wg(e,b),hP(b,e),nP(b,e)},Jb=(e,v,n={})=>(b)=>{let{libraryOptions:u,target:P}=b??{},O=iP({...u??{},target:P,io:v,processors:n});return wg(e,O),hP(O,e),nP(O,e)};var dz={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},S7=(e,v,n,b)=>{let u=n;u.type="string";let{minimum:P,maximum:O,format:H,patterns:W,contentEncoding:G}=e._zod.bag;if(typeof P==="number")u.minLength=P;if(typeof O==="number")u.maxLength=O;if(H){if(u.format=dz[H]??H,u.format==="")delete u.format;if(H==="time")delete u.format}if(G)u.contentEncoding=G;if(W&&W.size>0){let m=[...W];if(m.length===1)u.pattern=m[0].source;else if(m.length>1)u.allOf=[...m.map((q)=>({...v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"?{type:"string"}:{},pattern:q.source}))]}};var T7=(e,v,n,b)=>{n.not={}};var k7=(e,v,n,b)=>{};var D7=(e,v,n,b)=>{let u=e._zod.def,P=Ab(u.entries);if(P.every((O)=>typeof O==="number"))n.type="number";if(P.every((O)=>typeof O==="string"))n.type="string";n.enum=P},V7=(e,v,n,b)=>{let u=e._zod.def,P=[];for(let O of u.values)if(O===void 0){if(v.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(v.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(n.type=O===null?"null":typeof O,v.target==="draft-04"||v.target==="openapi-3.0")n.enum=[O];else n.const=O}else{if(P.every((O)=>typeof O==="number"))n.type="number";if(P.every((O)=>typeof O==="string"))n.type="string";if(P.every((O)=>typeof O==="boolean"))n.type="boolean";if(P.every((O)=>O===null))n.type="null";n.enum=P}};var _7=(e,v,n,b)=>{if(v.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var y7=(e,v,n,b)=>{if(v.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var c7=(e,v,n,b)=>{let u=n,P=e._zod.def,{minimum:O,maximum:H}=e._zod.bag;if(typeof O==="number")u.minItems=O;if(typeof H==="number")u.maxItems=H;u.type="array",u.items=wg(P.element,v,{...b,path:[...b.path,"items"]})},E7=(e,v,n,b)=>{let u=n,P=e._zod.def;u.type="object",u.properties={};let O=P.shape;for(let G in O)u.properties[G]=wg(O[G],v,{...b,path:[...b.path,"properties",G]});let H=new Set(Object.keys(O)),W=new Set([...H].filter((G)=>{let m=P.shape[G]._zod;if(v.io==="input")return m.optin===void 0;else return m.optout===void 0}));if(W.size>0)u.required=Array.from(W);if(P.catchall?._zod.def.type==="never")u.additionalProperties=!1;else if(!P.catchall){if(v.io==="output")u.additionalProperties=!1}else if(P.catchall)u.additionalProperties=wg(P.catchall,v,{...b,path:[...b.path,"additionalProperties"]})},a7=(e,v,n,b)=>{let u=e._zod.def,P=u.inclusive===!1,O=u.options.map((H,W)=>wg(H,v,{...b,path:[...b.path,P?"oneOf":"anyOf",W]}));if(P)n.oneOf=O;else n.anyOf=O},f7=(e,v,n,b)=>{let u=e._zod.def,P=wg(u.left,v,{...b,path:[...b.path,"allOf",0]}),O=wg(u.right,v,{...b,path:[...b.path,"allOf",1]}),H=(G)=>("allOf"in G)&&Object.keys(G).length===1,W=[...H(P)?P.allOf:[P],...H(O)?O.allOf:[O]];n.allOf=W};var j7=(e,v,n,b)=>{let u=e._zod.def,P=wg(u.innerType,v,b),O=v.seen.get(e);if(v.target==="openapi-3.0")O.ref=u.innerType,n.nullable=!0;else n.anyOf=[P,{type:"null"}]},p7=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);P.ref=u.innerType},d7=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);P.ref=u.innerType,n.default=JSON.parse(JSON.stringify(u.defaultValue))},s7=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);if(P.ref=u.innerType,v.io==="input")n._prefault=JSON.parse(JSON.stringify(u.defaultValue))},r3=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);P.ref=u.innerType;let O;try{O=u.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}n.default=O},o3=(e,v,n,b)=>{let u=e._zod.def,P=u.in._zod.traits.has("$ZodTransform"),O=v.io==="input"?P?u.out:u.in:u.out;wg(O,v,b);let H=v.seen.get(e);H.ref=O},g3=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);P.ref=u.innerType,n.readOnly=!0};var bP=(e,v,n,b)=>{let u=e._zod.def;wg(u.innerType,v,b);let P=v.seen.get(e);P.ref=u.innerType};var tU=c("ZodISODateTime",(e,v)=>{Q9.init(e,v),xo.init(e,v)});function e3(e){return K7(tU,e)}var uU=c("ZodISODate",(e,v)=>{z9.init(e,v),xo.init(e,v)});function l3(e){return $7(uU,e)}var wU=c("ZodISOTime",(e,v)=>{U9.init(e,v),xo.init(e,v)});function v3(e){return L7(wU,e)}var PU=c("ZodISODuration",(e,v)=>{K9.init(e,v),xo.init(e,v)});function i3(e){return I7(PU,e)}var AU=(e,v)=>{Pw.init(e,v),e.name="ZodError",Object.defineProperties(e,{format:{value:(n)=>PW(e,n)},flatten:{value:(n)=>wW(e,n)},addIssue:{value:(n)=>{e.issues.push(n),e.message=JSON.stringify(e.issues,ch,2)}},addIssues:{value:(n)=>{e.issues.push(...n),e.message=JSON.stringify(e.issues,ch,2)}},isEmpty:{get(){return e.issues.length===0}}})};var me=c("ZodError",AU,{Parent:Error});var h3=Ow(me),n3=Hw(me),b3=Gb(me),t3=Xb(me),u3=AW(me),w3=qW(me),P3=MW(me),O3=RW(me),H3=WW(me),A3=mW(me),q3=GW(me),M3=XW(me);var R3=new WeakMap;function Yw(e,v,n){let b=Object.getPrototypeOf(e),u=R3.get(b);if(!u)u=new Set,R3.set(b,u);if(u.has(v))return;u.add(v);for(let P in n){let O=n[P];Object.defineProperty(b,P,{configurable:!0,enumerable:!1,get(){let H=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H}),H},set(H){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H})}})}}var eg=c("ZodType",(e,v)=>{return yo.init(e,v),Object.assign(e["~standard"],{jsonSchema:{input:Jb(e,"input"),output:Jb(e,"output")}}),e.toJSONSchema=C7(e,{}),e.def=v,e.type=v.type,Object.defineProperty(e,"_def",{value:v}),e.parse=(n,b)=>h3(e,n,b,{callee:e.parse}),e.safeParse=(n,b)=>b3(e,n,b),e.parseAsync=async(n,b)=>n3(e,n,b,{callee:e.parseAsync}),e.safeParseAsync=async(n,b)=>t3(e,n,b),e.spa=e.safeParseAsync,e.encode=(n,b)=>u3(e,n,b),e.decode=(n,b)=>w3(e,n,b),e.encodeAsync=async(n,b)=>P3(e,n,b),e.decodeAsync=async(n,b)=>O3(e,n,b),e.safeEncode=(n,b)=>H3(e,n,b),e.safeDecode=(n,b)=>A3(e,n,b),e.safeEncodeAsync=async(n,b)=>q3(e,n,b),e.safeDecodeAsync=async(n,b)=>M3(e,n,b),Yw(e,"ZodType",{check(...n){let b=this.def;return this.clone(Oo.mergeDefs(b,{checks:[...b.checks??[],...n.map((u)=>typeof u==="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),{parent:!0})},with(...n){return this.check(...n)},clone(n,b){return gl(this,n,b)},brand(){return this},register(n,b){return n.add(this,b),this},refine(n,b){return this.check(nK(n,b))},superRefine(n,b){return this.check(bK(n,b))},overwrite(n){return this.check(Y0(n))},optional(){return G3(this)},exactOptional(){return fU(this)},nullable(){return X3(this)},nullish(){return G3(X3(this))},nonoptional(n){return oK(this,n)},array(){return Yv(this)},or(n){return DU([this,n])},and(n){return _U(this,n)},transform(n){return Y3(this,EU(n))},default(n){return dU(this,n)},prefault(n){return rK(this,n)},catch(n){return eK(this,n)},pipe(n){return Y3(this,n)},readonly(){return iK(this)},describe(n){let b=this.clone();return Ki.add(b,{description:n}),b},meta(...n){if(n.length===0)return Ki.get(this);let b=this.clone();return Ki.add(b,n[0]),b},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(n){return n(this)}}),Object.defineProperty(e,"description",{get(){return Ki.get(e)?.description},configurable:!0}),e}),J3=c("_ZodString",(e,v)=>{Rw.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(b,u,P)=>S7(e,b,u,P);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,Yw(e,"_ZodString",{regex(...b){return this.check(f6(...b))},includes(...b){return this.check(d6(...b))},startsWith(...b){return this.check(s6(...b))},endsWith(...b){return this.check(rP(...b))},min(...b){return this.check(ah(...b))},max(...b){return this.check(Ww(...b))},length(...b){return this.check(mw(...b))},nonempty(...b){return this.check(ah(1,...b))},lowercase(b){return this.check(j6(b))},uppercase(b){return this.check(p6(b))},trim(){return this.check(gP())},normalize(...b){return this.check(oP(...b))},toLowerCase(){return this.check(eP())},toUpperCase(){return this.check(lP())},slugify(){return this.check(vP())}})}),MU=c("ZodString",(e,v)=>{Rw.init(e,v),J3.init(e,v),e.email=(n)=>e.check(n7(RU,n)),e.url=(n)=>e.check(P7(WU,n)),e.jwt=(n)=>e.check(U7(NU,n)),e.emoji=(n)=>e.check(O7(mU,n)),e.guid=(n)=>e.check(a6(W3,n)),e.uuid=(n)=>e.check(b7(Xw,n)),e.uuidv4=(n)=>e.check(t7(Xw,n)),e.uuidv6=(n)=>e.check(u7(Xw,n)),e.uuidv7=(n)=>e.check(w7(Xw,n)),e.nanoid=(n)=>e.check(H7(GU,n)),e.guid=(n)=>e.check(a6(W3,n)),e.cuid=(n)=>e.check(A7(XU,n)),e.cuid2=(n)=>e.check(q7(YU,n)),e.ulid=(n)=>e.check(M7(JU,n)),e.base64=(n)=>e.check(J7(IU,n)),e.base64url=(n)=>e.check(Q7(FU,n)),e.xid=(n)=>e.check(R7(QU,n)),e.ksuid=(n)=>e.check(W7(zU,n)),e.ipv4=(n)=>e.check(m7(UU,n)),e.ipv6=(n)=>e.check(G7(KU,n)),e.cidrv4=(n)=>e.check(X7($U,n)),e.cidrv6=(n)=>e.check(Y7(LU,n)),e.e164=(n)=>e.check(z7(xU,n)),e.datetime=(n)=>e.check(e3(n)),e.date=(n)=>e.check(l3(n)),e.time=(n)=>e.check(v3(n)),e.duration=(n)=>e.check(i3(n))});function co(e){return h7(MU,e)}var xo=c("ZodStringFormat",(e,v)=>{Lo.init(e,v),J3.init(e,v)}),RU=c("ZodEmail",(e,v)=>{q9.init(e,v),xo.init(e,v)});var W3=c("ZodGUID",(e,v)=>{H9.init(e,v),xo.init(e,v)});var Xw=c("ZodUUID",(e,v)=>{A9.init(e,v),xo.init(e,v)});var WU=c("ZodURL",(e,v)=>{M9.init(e,v),xo.init(e,v)});var mU=c("ZodEmoji",(e,v)=>{R9.init(e,v),xo.init(e,v)});var GU=c("ZodNanoID",(e,v)=>{W9.init(e,v),xo.init(e,v)});var XU=c("ZodCUID",(e,v)=>{m9.init(e,v),xo.init(e,v)});var YU=c("ZodCUID2",(e,v)=>{G9.init(e,v),xo.init(e,v)});var JU=c("ZodULID",(e,v)=>{X9.init(e,v),xo.init(e,v)});var QU=c("ZodXID",(e,v)=>{Y9.init(e,v),xo.init(e,v)});var zU=c("ZodKSUID",(e,v)=>{J9.init(e,v),xo.init(e,v)});var UU=c("ZodIPv4",(e,v)=>{$9.init(e,v),xo.init(e,v)});var KU=c("ZodIPv6",(e,v)=>{L9.init(e,v),xo.init(e,v)});var $U=c("ZodCIDRv4",(e,v)=>{I9.init(e,v),xo.init(e,v)});var LU=c("ZodCIDRv6",(e,v)=>{F9.init(e,v),xo.init(e,v)});var IU=c("ZodBase64",(e,v)=>{N9.init(e,v),xo.init(e,v)});var FU=c("ZodBase64URL",(e,v)=>{B9.init(e,v),xo.init(e,v)});var xU=c("ZodE164",(e,v)=>{Z9.init(e,v),xo.init(e,v)});var NU=c("ZodJWT",(e,v)=>{C9.init(e,v),xo.init(e,v)});var BU=c("ZodUnknown",(e,v)=>{S9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>k7(e,n,b,u)});function m3(){return F7(BU)}var ZU=c("ZodNever",(e,v)=>{T9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>T7(e,n,b,u)});function CU(e){return x7(ZU,e)}var SU=c("ZodArray",(e,v)=>{k9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>c7(e,n,b,u),e.element=v.element,Yw(e,"ZodArray",{min(n,b){return this.check(ah(n,b))},nonempty(n){return this.check(ah(1,n))},max(n,b){return this.check(Ww(n,b))},length(n,b){return this.check(mw(n,b))},unwrap(){return this.element}})});function Yv(e,v){return N7(SU,e,v)}var TU=c("ZodObject",(e,v)=>{_9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>E7(e,n,b,u),Oo.defineLazy(e,"shape",()=>{return v.shape}),Yw(e,"ZodObject",{keyof(){return Qb(Object.keys(this._zod.def.shape))},catchall(n){return this.clone({...this._zod.def,catchall:n})},passthrough(){return this.clone({...this._zod.def,catchall:m3()})},loose(){return this.clone({...this._zod.def,catchall:m3()})},strict(){return this.clone({...this._zod.def,catchall:CU()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(n){return Oo.extend(this,n)},safeExtend(n){return Oo.safeExtend(this,n)},merge(n){return Oo.merge(this,n)},pick(n){return Oo.pick(this,n)},omit(n){return Oo.omit(this,n)},partial(...n){return Oo.partial(Q3,this,n[0])},required(...n){return Oo.required(z3,this,n[0])}})});function $i(e,v){let n={type:"object",shape:e??{},...Oo.normalizeParams(v)};return new TU(n)}var kU=c("ZodUnion",(e,v)=>{y9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>a7(e,n,b,u),e.options=v.options});function DU(e,v){return new kU({type:"union",options:e,...Oo.normalizeParams(v)})}var VU=c("ZodIntersection",(e,v)=>{c9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>f7(e,n,b,u)});function _U(e,v){return new VU({type:"intersection",left:e,right:v})}var tP=c("ZodEnum",(e,v)=>{E9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(b,u,P)=>D7(e,b,u,P),e.enum=v.entries,e.options=Object.values(v.entries);let n=new Set(Object.keys(v.entries));e.extract=(b,u)=>{let P={};for(let O of b)if(n.has(O))P[O]=v.entries[O];else throw Error(`Key ${O} not found in enum`);return new tP({...v,checks:[],...Oo.normalizeParams(u),entries:P})},e.exclude=(b,u)=>{let P={...v.entries};for(let O of b)if(n.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new tP({...v,checks:[],...Oo.normalizeParams(u),entries:P})}});function Qb(e,v){let n=Array.isArray(e)?Object.fromEntries(e.map((b)=>[b,b])):e;return new tP({type:"enum",entries:n,...Oo.normalizeParams(v)})}var yU=c("ZodLiteral",(e,v)=>{a9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>V7(e,n,b,u),e.values=new Set(v.values),Object.defineProperty(e,"value",{get(){if(v.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return v.values[0]}})});function uP(e,v){return new yU({type:"literal",values:Array.isArray(e)?e:[e],...Oo.normalizeParams(v)})}var cU=c("ZodTransform",(e,v)=>{f9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>y7(e,n,b,u),e._zod.parse=(n,b)=>{if(b.direction==="backward")throw new Ob(e.constructor.name);n.addIssue=(P)=>{if(typeof P==="string")n.issues.push(Oo.issue(P,n.value,v));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=n.value),O.inst??(O.inst=e),n.issues.push(Oo.issue(O))}};let u=v.transform(n.value,n);if(u instanceof Promise)return u.then((P)=>{return n.value=P,n.fallback=!0,n});return n.value=u,n.fallback=!0,n}});function EU(e){return new cU({type:"transform",transform:e})}var Q3=c("ZodOptional",(e,v)=>{E6.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>bP(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function G3(e){return new Q3({type:"optional",innerType:e})}var aU=c("ZodExactOptional",(e,v)=>{j9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>bP(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function fU(e){return new aU({type:"optional",innerType:e})}var jU=c("ZodNullable",(e,v)=>{p9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>j7(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function X3(e){return new jU({type:"nullable",innerType:e})}var pU=c("ZodDefault",(e,v)=>{d9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>d7(e,n,b,u),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function dU(e,v){return new pU({type:"default",innerType:e,get defaultValue(){return typeof v==="function"?v():Oo.shallowClone(v)}})}var sU=c("ZodPrefault",(e,v)=>{s9.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>s7(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function rK(e,v){return new sU({type:"prefault",innerType:e,get defaultValue(){return typeof v==="function"?v():Oo.shallowClone(v)}})}var z3=c("ZodNonOptional",(e,v)=>{r7.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>p7(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function oK(e,v){return new z3({type:"nonoptional",innerType:e,...Oo.normalizeParams(v)})}var gK=c("ZodCatch",(e,v)=>{o7.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>r3(e,n,b,u),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function eK(e,v){return new gK({type:"catch",innerType:e,catchValue:typeof v==="function"?v:()=>v})}var lK=c("ZodPipe",(e,v)=>{g7.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>o3(e,n,b,u),e.in=v.in,e.out=v.out});function Y3(e,v){return new lK({type:"pipe",in:e,out:v})}var vK=c("ZodReadonly",(e,v)=>{e7.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>g3(e,n,b,u),e.unwrap=()=>e._zod.def.innerType});function iK(e){return new vK({type:"readonly",innerType:e})}var hK=c("ZodCustom",(e,v)=>{l7.init(e,v),eg.init(e,v),e._zod.processJSONSchema=(n,b,u)=>_7(e,n,b,u)});function nK(e,v={}){return B7(hK,e,v)}function bK(e,v){return Z7(e,v)}var U3=$i({type:Qb(["character","chat"]),characterId:co().optional(),chatId:co().optional(),displayName:co().default("")}),K3=$i({description:co().optional(),author:co().optional(),version:co().optional(),tags:Yv(co()).optional()}),tK=$i({name:co().min(1).max(200),code:co(),type:Qb(["trigger","library"]),triggers:Yv(co()).optional(),bindings:Yv(U3).optional(),folder:co().optional(),metadata:K3.optional()}),$3=$i({format:uP("lumiscript-pack-v1"),exportedAt:co(),scripts:Yv(tK).min(1).max(100)}),uK=$i({name:co().min(1).max(200),file:co().min(1),type:Qb(["trigger","library"]),triggers:Yv(co()).optional(),bindings:Yv(U3).optional(),folder:co().optional(),metadata:K3.optional()}),dco=$i({format:uP("lumiscript-manifest-v1"),sourcePack:co().optional(),sourceFormat:co().optional(),exportedAt:co().optional(),convertedAt:co().optional(),scripts:Yv(uK).min(1).max(100)});var L3=1048576;async function I3(e){let v=new Uint8Array(await e.arrayBuffer()),n;try{n=pR(v)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let b=n["pack.json"];if(!b)throw Error("Invalid script pack: missing pack.json");if(b.byteLength>L3)throw Error(`Pack exceeds the ${L3/1024/1024} MB decompressed size limit`);let u=x6(b),P;try{P=JSON.parse(u)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return $3.parse(P).scripts}var io=wr(ro(),1);function wK(e){let n="";for(let b=0;b<e.length;b+=32768)n+=String.fromCharCode(...e.subarray(b,b+32768));return btoa(n)}function PK(e){let v=new Map;for(let u of e){let P=u.folder??"";if(!v.has(P))v.set(P,[]);v.get(P).push(u)}let n=new Map;if(v.has(""))n.set("",v.get(""));let b=[...v.keys()].filter((u)=>u!=="").sort();for(let u of b)n.set(u,v.get(u));return n}var Jw=({scripts:e,selectedId:v,execInfo:n,onSelect:b,onEdit:u,sendToBackend:P})=>{let[O,H]=zb.useState("trigger"),[W,G]=zb.useState(new Set),m=zb.useRef(null),q=e.filter((a)=>a.type===O),X=PK(q),L=X.size>1||X.size===1&&!X.has(""),T=(a)=>{G((p)=>{let er=new Set(p);if(er.has(a))er.delete(a);else er.add(a);return er})},Z=()=>{let a=O==="library"?"Library name:":"Script name:",p=window.prompt(a);if(!p?.trim())return;P({type:"create_script",name:p.trim(),scriptType:O})},_=(a)=>{if(q.length===0)return;if(a.shiftKey){let er=N6(q);P({type:"save_pack_to_disk",bytesB64:wK(er),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;dR(q,p.trim())},rr=()=>{m.current?.click()},ur=async(a)=>{let p=a.target.files?.[0];if(!p)return;a.target.value="";try{let er=await I3(p),N=(C)=>C==="library"?"[L]":"[T]",y=er.map((C)=>`  ${N(C.type)} ${C.name}`).join(`
`);if(!window.confirm(`Import ${er.length} script${er.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:er})}catch(er){window.alert(`Import failed: ${er instanceof Error?er.message:String(er)}`)}},lr=(a)=>{let p=n[a.id];return io.jsxDEV(BR,{script:a,selected:a.id===v,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>b(a.id),onEdit:()=>u(a.id),sendToBackend:P},a.id,!1,void 0,this)};return io.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[io.jsxDEV("div",{className:"ls-list-header",children:[io.jsxDEV("div",{className:"ls-list-type-tabs",children:[io.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>H("trigger"),title:"Scripts",children:io.jsxDEV(Wg,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),io.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>H("library"),title:"Libraries",children:io.jsxDEV(Gi,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),io.jsxDEV("div",{className:"ls-list-actions",children:[io.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:io.jsxDEV(nb,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),io.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:q.length===0,children:io.jsxDEV(Xi,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),io.jsxDEV("button",{className:"ls-icon-btn",onClick:Z,title:"New script",children:io.jsxDEV(rb,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),io.jsxDEV("input",{ref:m,type:"file",accept:".zip",style:{display:"none"},onChange:ur},void 0,!1,void 0,this)]},void 0,!0,void 0,this),io.jsxDEV("div",{className:"ls-list-body",children:q.length===0?io.jsxDEV("div",{className:"ls-list-empty",children:[io.jsxDEV(Bl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),io.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),io.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...X.entries()].map(([a,p])=>{let er=W.has(a);return a===""?io.jsxDEV("div",{children:p.map(lr)},"__unfiled",!1,void 0,this):io.jsxDEV("div",{className:"ls-folder-group",children:[io.jsxDEV("button",{className:"ls-folder-header",onClick:()=>T(a),children:[er?io.jsxDEV(Av,{size:11},void 0,!1,void 0,this):io.jsxDEV(mg,{size:11},void 0,!1,void 0,this),io.jsxDEV(Yi,{size:11},void 0,!1,void 0,this),io.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),io.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(N)=>{N.stopPropagation();let y=window.prompt("Rename folder:",a);if(y===null||y.trim()===""||y.trim()===a)return;for(let f of p)P({type:"update_script",id:f.id,patch:{folder:y.trim()}})},children:io.jsxDEV(se,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),io.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!er&&p.map(lr)]},`folder-${a}`,!0,void 0,this)}):q.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ib=wr(vo(),1),qm=wr(Ch(),1);var Co=wr(vo(),1);function F3(e,v){(v==null||v>e.length)&&(v=e.length);for(var n=0,b=Array(v);n<v;n++)b[n]=e[n];return b}function OK(e){if(Array.isArray(e))return e}function HK(e,v,n){return(v=WK(v))in e?Object.defineProperty(e,v,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[v]=n,e}function AK(e,v){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var b,u,P,O,H=[],W=!0,G=!1;try{if(P=(n=n.call(e)).next,v===0);else for(;!(W=(b=P.call(n)).done)&&(H.push(b.value),H.length!==v);W=!0);}catch(m){G=!0,u=m}finally{try{if(!W&&n.return!=null&&(O=n.return(),Object(O)!==O))return}finally{if(G)throw u}}return H}}function qK(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x3(e,v){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);v&&(b=b.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,b)}return n}function wP(e){for(var v=1;v<arguments.length;v++){var n=arguments[v]!=null?arguments[v]:{};v%2?x3(Object(n),!0).forEach(function(b){HK(e,b,n[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x3(Object(n)).forEach(function(b){Object.defineProperty(e,b,Object.getOwnPropertyDescriptor(n,b))})}return e}function N3(e,v){if(e==null)return{};var n,b,u=MK(e,v);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(e);for(b=0;b<P.length;b++)n=P[b],v.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}function MK(e,v){if(e==null)return{};var n={};for(var b in e)if({}.hasOwnProperty.call(e,b)){if(v.indexOf(b)!==-1)continue;n[b]=e[b]}return n}function B3(e,v){return OK(e)||AK(e,v)||mK(e,v)||qK()}function RK(e,v){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var b=n.call(e,v);if(typeof b!="object")return b;throw TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(e)}function WK(e){var v=RK(e,"string");return typeof v=="symbol"?v:v+""}function mK(e,v){if(e){if(typeof e=="string")return F3(e,v);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F3(e,v):void 0}}function GK(e,v,n){if(v in e)Object.defineProperty(e,v,{value:n,enumerable:!0,configurable:!0,writable:!0});else e[v]=n;return e}function Z3(e,v){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);if(v)b=b.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable});n.push.apply(n,b)}return n}function C3(e){for(var v=1;v<arguments.length;v++){var n=arguments[v]!=null?arguments[v]:{};if(v%2)Z3(Object(n),!0).forEach(function(b){GK(e,b,n[b])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(n));else Z3(Object(n)).forEach(function(b){Object.defineProperty(e,b,Object.getOwnPropertyDescriptor(n,b))})}return e}function XK(){for(var e=arguments.length,v=Array(e),n=0;n<e;n++)v[n]=arguments[n];return function(b){return v.reduceRight(function(u,P){return P(u)},b)}}function Ub(e){return function v(){var n=this;for(var b=arguments.length,u=Array(b),P=0;P<b;P++)u[P]=arguments[P];return u.length>=e.length?e.apply(this,u):function(){for(var O=arguments.length,H=Array(O),W=0;W<O;W++)H[W]=arguments[W];return v.apply(n,[].concat(u,H))}}}function zw(e){return{}.toString.call(e).includes("Object")}function YK(e){return!Object.keys(e).length}function Kb(e){return typeof e==="function"}function JK(e,v){return Object.prototype.hasOwnProperty.call(e,v)}function QK(e,v){if(!zw(v))J0("changeType");if(Object.keys(v).some(function(n){return!JK(e,n)}))J0("changeField");return v}function zK(e){if(!Kb(e))J0("selectorType")}function UK(e){if(!(Kb(e)||zw(e)))J0("handlerType");if(zw(e)&&Object.values(e).some(function(v){return!Kb(v)}))J0("handlersType")}function KK(e){if(!e)J0("initialIsRequired");if(!zw(e))J0("initialType");if(YK(e))J0("initialContent")}function $K(e,v){throw Error(e[v]||e.default)}var LK={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},J0=Ub($K)(LK),Qw={changes:QK,selector:zK,handler:UK,initial:KK};function IK(e){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qw.initial(e),Qw.handler(v);var n={current:e},b=Ub(NK)(n,v),u=Ub(xK)(n),P=Ub(Qw.changes)(e),O=Ub(FK)(n);function H(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return Qw.selector(G),G(n.current)}function W(G){XK(b,u,P,O)(G)}return[H,W]}function FK(e,v){return Kb(v)?v(e.current):v}function xK(e,v){return e.current=C3(C3({},e.current),v),v}function NK(e,v,n){return Kb(v)?v(e.current):Object.keys(n).forEach(function(b){var u;return(u=v[b])===null||u===void 0?void 0:u.call(v,e.current[b])}),n}var BK={create:IK},S3=BK;var T3={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function k3(e){return function v(){var n=this;for(var b=arguments.length,u=Array(b),P=0;P<b;P++)u[P]=arguments[P];return u.length>=e.length?e.apply(this,u):function(){for(var O=arguments.length,H=Array(O),W=0;W<O;W++)H[W]=arguments[W];return v.apply(n,[].concat(u,H))}}}function D3(e){return{}.toString.call(e).includes("Object")}function ZK(e){if(!e)V3("configIsRequired");if(!D3(e))V3("configType");if(e.urls)return CK(),{paths:{vs:e.urls.monacoBase}};return e}function CK(){console.warn(_3.deprecation)}function SK(e,v){throw Error(e[v]||e.default)}var _3={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},V3=k3(SK)(_3),y3={config:ZK};var c3=function(){for(var v=arguments.length,n=Array(v),b=0;b<v;b++)n[b]=arguments[b];return function(u){return n.reduceRight(function(P,O){return O(P)},u)}};function PP(e,v){return Object.keys(v).forEach(function(n){if(v[n]instanceof Object){if(e[n])Object.assign(v[n],PP(e[n],v[n]))}}),wP(wP({},e),v)}var TK={type:"cancelation",msg:"operation is manually canceled"};function Uw(e){var v=!1,n=new Promise(function(b,u){e.then(function(P){return v?u(TK):b(P)}),e.catch(u)});return n.cancel=function(){return v=!0},n}var kK=["monaco"],DK=S3.create({config:T3,isInitialized:!1,resolve:null,reject:null,monaco:null}),E3=B3(DK,2),$b=E3[0],Kw=E3[1];function VK(e){var v=y3.config(e),n=v.monaco,b=N3(v,kK);Kw(function(u){return{config:PP(u.config,b),monaco:n}})}function _K(){var e=$b(function(v){var{monaco:n,isInitialized:b,resolve:u}=v;return{monaco:n,isInitialized:b,resolve:u}});if(!e.isInitialized){if(Kw({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Uw(OP);if(window.monaco&&window.monaco.editor)return a3(window.monaco),e.resolve(window.monaco),Uw(OP);c3(yK,EK)(aK)}return Uw(OP)}function yK(e){return document.body.appendChild(e)}function cK(e){var v=document.createElement("script");return e&&(v.src=e),v}function EK(e){var v=$b(function(b){var{config:u,reject:P}=b;return{config:u,reject:P}}),n=cK("".concat(v.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=v.reject,n}function aK(){var e=$b(function(n){var{config:b,resolve:u,reject:P}=n;return{config:b,resolve:u,reject:P}}),v=window.require;v.config(e.config),v(["vs/editor/editor.main"],function(n){var b=n.m||n;a3(b),e.resolve(b)},function(n){e.reject(n)})}function a3(e){if(!$b().monaco)Kw({monaco:e})}function fK(){return $b(function(e){var v=e.monaco;return v})}var OP=new Promise(function(e,v){return Kw({resolve:e,reject:v})}),Li={config:VK,init:_K,__getMonacoInstance:fK};var f3=wr(vo(),1),Pg=wr(vo(),1);var j3=wr(vo(),1),Lw=wr(vo(),1),p3=wr(vo(),1),s3=wr(vo(),1),Iw=wr(vo(),1),t$=wr(vo(),1);var gm=wr(vo(),1),ko=wr(vo(),1);var Fw=wr(vo(),1),jK={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},HP=jK,pK={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},dK=pK;function sK({children:e}){return p3.default.createElement("div",{style:dK.container},e)}var r$=sK,o$=r$;function g$({width:e,height:v,isEditorReady:n,loading:b,_ref:u,className:P,wrapperProps:O}){return Lw.default.createElement("section",{style:{...HP.wrapper,width:e,height:v},...O},!n&&Lw.default.createElement(o$,null,b),Lw.default.createElement("div",{ref:u,style:{...HP.fullWidth,...!n&&HP.hide},className:P}))}var e$=g$,d3=j3.memo(e$);function l$(e){s3.useEffect(e,[])}var rm=l$;function v$(e,v,n=!0){let b=Iw.useRef(!0);Iw.useEffect(b.current||!n?()=>{b.current=!1}:e,v)}var Ge=v$;function Lb(){}function fh(e,v,n,b){return i$(e,b)||h$(e,v,n,b)}function i$(e,v){return e.editor.getModel(om(e,v))}function h$(e,v,n,b){return e.editor.createModel(v,n,b?om(e,b):void 0)}function om(e,v){return e.Uri.parse(v)}function n$({original:e,modified:v,language:n,originalLanguage:b,modifiedLanguage:u,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:H=!1,keepCurrentModifiedModel:W=!1,theme:G="light",loading:m="Loading...",options:q={},height:X="100%",width:L="100%",className:T,wrapperProps:Z={},beforeMount:_=Lb,onMount:rr=Lb}){let[ur,lr]=Pg.useState(!1),[a,p]=Pg.useState(!0),er=Pg.useRef(null),N=Pg.useRef(null),y=Pg.useRef(null),f=Pg.useRef(rr),C=Pg.useRef(_),Rr=Pg.useRef(!1);rm(()=>{let k=Li.init();return k.then((s)=>(N.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>er.current?Br():k.cancel()}),Ge(()=>{if(er.current&&N.current){let k=er.current.getOriginalEditor(),s=fh(N.current,e||"",b||n||"text",P||"");s!==k.getModel()&&k.setModel(s)}},[P],ur),Ge(()=>{if(er.current&&N.current){let k=er.current.getModifiedEditor(),s=fh(N.current,v||"",u||n||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],ur),Ge(()=>{let k=er.current.getModifiedEditor();k.getOption(N.current.editor.EditorOption.readOnly)?k.setValue(v||""):v!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:v||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[v],ur),Ge(()=>{er.current?.getModel()?.original.setValue(e||"")},[e],ur),Ge(()=>{let{original:k,modified:s}=er.current.getModel();N.current.editor.setModelLanguage(k,b||n||"text"),N.current.editor.setModelLanguage(s,u||n||"text")},[n,b,u],ur),Ge(()=>{N.current?.editor.setTheme(G)},[G],ur),Ge(()=>{er.current?.updateOptions(q)},[q],ur);let Ar=Pg.useCallback(()=>{if(!N.current)return;C.current(N.current);let k=fh(N.current,e||"",b||n||"text",P||""),s=fh(N.current,v||"",u||n||"text",O||"");er.current?.setModel({original:k,modified:s})},[n,v,u,e,b,P,O]),mr=Pg.useCallback(()=>{!Rr.current&&y.current&&(er.current=N.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...q}),Ar(),N.current?.editor.setTheme(G),lr(!0),Rr.current=!0)},[q,G,Ar]);Pg.useEffect(()=>{ur&&f.current(er.current,N.current)},[ur]),Pg.useEffect(()=>{!a&&!ur&&mr()},[a,ur,mr]);function Br(){let k=er.current?.getModel();H||k?.original?.dispose(),W||k?.modified?.dispose(),er.current?.dispose()}return Pg.default.createElement(d3,{width:L,height:X,isEditorReady:ur,loading:m,_ref:y,className:T,wrapperProps:Z})}var b$=n$,FEo=f3.memo(b$);function u$(e){let v=Fw.useRef();return Fw.useEffect(()=>{v.current=e},[e]),v.current}var w$=u$,$w=new Map;function P$({defaultValue:e,defaultLanguage:v,defaultPath:n,value:b,language:u,path:P,theme:O="light",line:H,loading:W="Loading...",options:G={},overrideServices:m={},saveViewState:q=!0,keepCurrentModel:X=!1,width:L="100%",height:T="100%",className:Z,wrapperProps:_={},beforeMount:rr=Lb,onMount:ur=Lb,onChange:lr,onValidate:a=Lb}){let[p,er]=ko.useState(!1),[N,y]=ko.useState(!0),f=ko.useRef(null),C=ko.useRef(null),Rr=ko.useRef(null),Ar=ko.useRef(ur),mr=ko.useRef(rr),Br=ko.useRef(),k=ko.useRef(b),s=w$(P),vr=ko.useRef(!1),Qr=ko.useRef(!1);rm(()=>{let F=Li.init();return F.then((gr)=>(f.current=gr)&&y(!1)).catch((gr)=>gr?.type!=="cancelation"&&console.error("Monaco initialization: error:",gr)),()=>C.current?V():F.cancel()}),Ge(()=>{let F=fh(f.current,e||b||"",v||u||"",P||n||"");F!==C.current?.getModel()&&(q&&$w.set(s,C.current?.saveViewState()),C.current?.setModel(F),q&&C.current?.restoreViewState($w.get(P)))},[P],p),Ge(()=>{C.current?.updateOptions(G)},[G],p),Ge(()=>{!C.current||b===void 0||(C.current.getOption(f.current.editor.EditorOption.readOnly)?C.current.setValue(b):b!==C.current.getValue()&&(Qr.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:b,forceMoveMarkers:!0}]),C.current.pushUndoStop(),Qr.current=!1))},[b],p),Ge(()=>{let F=C.current?.getModel();F&&u&&f.current?.editor.setModelLanguage(F,u)},[u],p),Ge(()=>{H!==void 0&&C.current?.revealLine(H)},[H],p),Ge(()=>{f.current?.editor.setTheme(O)},[O],p);let Gr=ko.useCallback(()=>{if(!(!Rr.current||!f.current)&&!vr.current){mr.current(f.current);let F=P||n,gr=fh(f.current,b||e||"",v||u||"",F||"");C.current=f.current?.editor.create(Rr.current,{model:gr,automaticLayout:!0,...G},m),q&&C.current.restoreViewState($w.get(F)),f.current.editor.setTheme(O),H!==void 0&&C.current.revealLine(H),er(!0),vr.current=!0}},[e,v,n,b,u,P,G,m,q,O,H]);ko.useEffect(()=>{p&&Ar.current(C.current,f.current)},[p]),ko.useEffect(()=>{!N&&!p&&Gr()},[N,p,Gr]),k.current=b,ko.useEffect(()=>{p&&lr&&(Br.current?.dispose(),Br.current=C.current?.onDidChangeModelContent((F)=>{Qr.current||lr(C.current.getValue(),F)}))},[p,lr]),ko.useEffect(()=>{if(p){let F=f.current.editor.onDidChangeMarkers((gr)=>{let Or=C.current.getModel()?.uri;if(Or&&gr.find((qr)=>qr.path===Or.path)){let qr=f.current.editor.getModelMarkers({resource:Or});a?.(qr)}});return()=>{F?.dispose()}}return()=>{}},[p,a]);function V(){Br.current?.dispose(),X?q&&$w.set(P,C.current.saveViewState()):C.current.getModel()?.dispose(),C.current.dispose()}return ko.default.createElement(d3,{width:L,height:T,isEditorReady:p,loading:W,_ref:Rr,className:Z,wrapperProps:_})}var O$=P$,H$=gm.memo(O$),em=H$;var jh=wr(vo(),1);var Og=wr(ro(),1),A$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},lm=({entries:e,isRunning:v,onClear:n})=>{let[b,u]=jh.useState(!1),P=jh.useRef(null);jh.useEffect(()=>{if(!b&&P.current)P.current.scrollTop=P.current.scrollHeight},[e,b]);let O=()=>{let H=e.filter((W)=>W.type!=="separator").map((W)=>`[${W.timestamp}] ${W.type.toUpperCase()}: ${W.message}`).join(`
`);navigator.clipboard.writeText(H).catch(()=>{})};return Og.jsxDEV("div",{className:`ls-console${b?" ls-collapsed":""}`,children:[Og.jsxDEV("div",{className:"ls-console-header",onClick:()=>u((H)=>!H),children:[Og.jsxDEV(Cl,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-console-title",children:["Console",v?" — running…":e.length>0?` (${e.length})`:""]},void 0,!0,void 0,this),Og.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),O()},title:"Copy output",disabled:e.length===0,children:Og.jsxDEV(pe,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Og.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),n()},title:"Clear console",disabled:e.length===0,children:Og.jsxDEV(Kg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),b?Og.jsxDEV(mg,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Og.jsxDEV(Me,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&Og.jsxDEV("div",{className:"ls-console-output",ref:P,children:e.length===0?Og.jsxDEV("div",{className:"ls-console-empty",children:v?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):e.map((H,W)=>H.type==="separator"?Og.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},W,!1,void 0,this):Og.jsxDEV("div",{className:`ls-entry ${A$[H.type]??"ls-log"}`,children:[Og.jsxDEV("span",{className:"ls-entry-time",children:H.timestamp},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-entry-type",children:H.type.toUpperCase()},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-entry-msg",children:H.message},void 0,!1,void 0,this)]},W,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var _g=wr(ro(),1),vm=({bindings:e,activeContext:v,onAdd:n,onRemove:b})=>{let u=()=>{let{characterId:O,characterName:H}=v;if(!O)return;if(e.some((W)=>W.type==="character"&&W.characterId===O))return;n({type:"character",characterId:O,displayName:H??O})},P=()=>{let{chatId:O,characterName:H}=v;if(!O)return;if(e.some((G)=>G.type==="chat"&&G.chatId===O))return;let W=H?`${H} — ${O.slice(0,8)}`:O.slice(0,8);n({type:"chat",chatId:O,displayName:W})};return _g.jsxDEV("div",{className:"ls-bindings",children:_g.jsxDEV("div",{className:"ls-bindings-row",children:[_g.jsxDEV(an,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),e.length===0?_g.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):e.map((O,H)=>_g.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?_g.jsxDEV(Vh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):_g.jsxDEV(kh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),_g.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),_g.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>b(H),title:"Remove binding",children:_g.jsxDEV(kg,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H,!0,void 0,this)),_g.jsxDEV("button",{className:"ls-bindings-add",onClick:u,disabled:!v.characterId,title:v.characterId?"Bind to current character":"Open a chat first",children:[_g.jsxDEV(Vh,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),_g.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!v.chatId,title:v.chatId?"Bind to current chat":"Open a chat first",children:[_g.jsxDEV(kh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var im=wr(vo(),1);var sg=wr(ro(),1),hm=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"},{name:"REGEX_SCRIPT_CHANGED",description:"A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+."},{name:"REGEX_SCRIPT_DELETED",description:"A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+."}]}],_Eo=hm.flatMap((e)=>e.events.map((v)=>v.name)),nm=({scriptId:e,triggers:v,sendToBackend:n})=>{let[b,u]=im.useState(!0),P=new Set(v),O=(H)=>{let W=P.has(H)?v.filter((G)=>G!==H):[...v,H];n({type:"update_script",id:e,patch:{triggers:W}})};return sg.jsxDEV("div",{className:`ls-triggers${b?" ls-triggers-collapsed":""}`,children:[sg.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>u((H)=>!H),children:[sg.jsxDEV(Mv,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),sg.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&sg.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),sg.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:b?sg.jsxDEV(mg,{size:12},void 0,!1,void 0,this):sg.jsxDEV(Me,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&sg.jsxDEV("div",{className:"ls-triggers-body",children:hm.map((H)=>sg.jsxDEV("div",{className:"ls-trigger-group",children:[sg.jsxDEV("span",{className:"ls-trigger-group-label",children:H.label},void 0,!1,void 0,this),sg.jsxDEV("div",{className:"ls-trigger-chips",children:H.events.map((W)=>sg.jsxDEV("button",{className:`ls-trigger-chip${P.has(W.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(W.name),title:W.description,children:W.name},W.name,!1,void 0,this))},void 0,!1,void 0,this)]},H.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var bm=`
// ─── Minimal Zod ambient declarations ────────────────────────────────────────

interface ZodType<T = unknown> {
  parse(data: unknown): T;
  optional(): ZodOptional<T>;
  nullable(): ZodNullable<T>;
  describe(description: string): this;
  default(value: T): this;
}
interface ZodOptional<T> extends ZodType<T | undefined> {}
interface ZodNullable<T> extends ZodType<T | null> {}
interface ZodString extends ZodType<string> {
  min(len: number): ZodString;
  max(len: number): ZodString;
  email(): ZodString;
  url(): ZodString;
  regex(pattern: RegExp): ZodString;
  nonempty(): ZodString;
  trim(): ZodString;
}
interface ZodNumber extends ZodType<number> {
  min(val: number): ZodNumber;
  max(val: number): ZodNumber;
  int(): ZodNumber;
  positive(): ZodNumber;
  nonnegative(): ZodNumber;
  negative(): ZodNumber;
}
interface ZodBoolean extends ZodType<boolean> {}
interface ZodLiteral<T> extends ZodType<T> {}
interface ZodEnum<T extends string[]> extends ZodType<T[number]> {}
interface ZodUnknown extends ZodType<unknown> {}
interface ZodAny extends ZodType<any> {}
interface ZodNull extends ZodType<null> {}
interface ZodUndefined extends ZodType<undefined> {}
interface ZodArray<T> extends ZodType<T[]> {
  nonempty(): ZodArray<T>;
  min(n: number): ZodArray<T>;
  max(n: number): ZodArray<T>;
}
interface ZodRecord<T = unknown> extends ZodType<Record<string, T>> {}
type ZodShape = Record<string, ZodType>;
type ZodObjectOutput<T extends ZodShape> = { [K in keyof T]: ReturnType<T[K]['parse']> };
interface ZodObject<T extends ZodShape> extends ZodType<ZodObjectOutput<T>> {
  shape: T;
  extend<U extends ZodShape>(shape: U): ZodObject<T & U>;
  pick<K extends keyof T>(keys: { [Key in K]: true }): ZodObject<Pick<T, K>>;
  omit<K extends keyof T>(keys: { [Key in K]: true }): ZodObject<Omit<T, K>>;
  partial(): ZodObject<{ [K in keyof T]: ZodOptional<ReturnType<T[K]['parse']>> }>;
}
interface ZodUnion<T extends unknown[]> extends ZodType<T[number]> {}

interface ZodModule {
  /** Creates a string schema. */
  string(): ZodString;
  /** Creates a number schema. */
  number(): ZodNumber;
  /** Creates a boolean schema. */
  boolean(): ZodBoolean;
  /** Creates a literal schema matching exactly one value. */
  literal<T extends string | number | boolean | null>(value: T): ZodLiteral<T>;
  /** Creates an enum schema (union of string literals). */
  enum<T extends string[]>(values: T): ZodEnum<T>;
  /** Creates an object schema from a shape map. */
  object<T extends ZodShape>(shape: T): ZodObject<T>;
  /** Creates an array schema wrapping an element schema. */
  array<T>(element: ZodType<T>): ZodArray<T>;
  /** Creates a union of two or more schemas. */
  union<T extends ZodType[]>(options: T): ZodUnion<{ [K in keyof T]: T[K] extends ZodType<infer U> ? U : never }>;
  /** Creates a string-keyed record schema. */
  record<T>(valueType: ZodType<T>): ZodRecord<T>;
  /** Creates an unknown schema (always valid, typed as unknown). */
  unknown(): ZodUnknown;
  /** Creates an any schema (always valid, typed as any). */
  any(): ZodAny;
  /** Creates a null schema. */
  null(): ZodNull;
  /** Creates an undefined schema. */
  undefined(): ZodUndefined;
  /** Wraps a schema as optional (T | undefined). */
  optional<T>(type: ZodType<T>): ZodOptional<T>;
  /** Wraps a schema as nullable (T | null). */
  nullable<T>(type: ZodType<T>): ZodNullable<T>;
}

// ─── Chat API ─────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
  /** Index of the active swipe variant. 0 when the message has no alternates. */
  swipeId: number;
  /** All swipe variants for this message. swipes[swipeId] equals content. */
  swipes: string[];
  /** Per-swipe timestamps (unix epoch seconds), aligned with swipes. */
  swipeDates: number[];
  /** Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. */
  extra: Record<string, unknown>;
}

/** Patch shape accepted by api.chat.editMessage(id, patch). */
interface MessagePatch {
  content?: string;
  metadata?: Record<string, unknown>;
  swipes?: string[];
  swipeId?: number;
  swipeDates?: number[];
  reasoning?: {
    text?: string | null;
    duration?: number | null;
  };
}

interface GetMessagesOptions {
  first?: number;
  last?: number;
}

interface SendMessageOptions {
  role?: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
}

interface InjectOptions {
  /**
   * Which pipeline phase to inject into.
   * - \`'intercept'\`: post-assembly, splice into message array (default)
   * - \`'context'\`: pre-assembly, enrich the assembler context
   */
  mode?: 'intercept' | 'context';
  /** Message role. Default: \`'system'\`. */
  role?: 'system' | 'user' | 'assistant';
  /**
   * For \`mode: 'intercept'\` only — how many messages from the END of the
   * assembled array to insert before. \`0\` = append after all messages (default).
   * \`1\` = before the last message.
   */
  depth?: number;
  /**
   * If \`true\` the injection is automatically removed after the next generation
   * cycle. Default: \`false\`.
   */
  ephemeral?: boolean;
}

interface InjectionInfo {
  id: string;
  content: string;
  mode: 'intercept' | 'context';
  role: string;
  depth: number;
  ephemeral: boolean;
  scriptId: string;
}

// ─── Message content processor (api.chat.registerContentProcessor) ──────────

/**
 * Origin tag identifying which user-initiated message-write path triggered
 * a content-processor invocation. \`'create'\` covers both ordinary
 * \`POST .../messages\` writes and auto-inserted greeting rows.
 */
type MessageContentProcessorOrigin =
  | 'create'
  | 'update'
  | 'swipe_add'
  | 'swipe_update'
  /**
   * Per-message display rendering (Lumiverse host ≥0.9.7). Non-persisting:
   * fires once per visible message paint, returned \`content\` feeds the
   * display-regex pass, returned \`extra\` is ignored (no row to mutate).
   * Use for per-render transforms that depend on transient context.
   */
  | 'render';

/**
 * Context passed to a message content processor before a user-initiated
 * message write reaches SQLite. Handlers can return a patch
 * (\`{ content?, extra? }\`) to transform what gets stored AND what
 * WebSocket subscribers observe on first paint.
 */
interface MessageContentProcessorCtx {
  readonly chatId: string;
  /** Undefined for \`'create'\` origins (the row doesn't exist yet). */
  readonly messageId?: string;
  readonly content: string;
  readonly extra?: Record<string, unknown>;
  readonly origin: MessageContentProcessorOrigin;
  /** Set for \`'swipe_update'\` only — zero-based index of the swipe. */
  readonly swipeIndex?: number;
  readonly userId: string;
}

/**
 * Return value for a message content processor handler. Return \`undefined\`
 * / \`void\` to pass through, or a partial patch:
 *  - \`content\` (if present) replaces the stored content.
 *  - \`extra\` (if present) shallow-merges into the existing \`extra\`.
 *    Ignored on swipe origins (swipes share the parent message's \`extra\`).
 */
interface MessageContentProcessorResult {
  content?: string;
  extra?: Record<string, unknown>;
}

type MessageContentProcessorHandler = (
  ctx: MessageContentProcessorCtx,
) =>
  | MessageContentProcessorResult
  | void
  | Promise<MessageContentProcessorResult | void>;

/** Registration options for \`api.chat.registerContentProcessor\`. */
interface MessageContentProcessorOptions {
  /** Stable identifier. Re-registration with the same id from the same script replaces. */
  id?: string;
  /** Lower runs first within the LumiScript multiplexer pass. Default 100. */
  priority?: number;
  /**
   * Restrict the handler to specific origins. Default: all four origins.
   * Pre-filtered before invocation.
   */
  origin?: MessageContentProcessorOrigin | MessageContentProcessorOrigin[];
  /**
   * Per-invocation soft timeout in milliseconds. Default 2000. The host's
   * outer 10-second budget is shared across all LumiScript handlers, so
   * each handler should stay well under it.
   */
  timeoutMs?: number;
}

/** Handle returned by \`registerContentProcessor\`. \`remove()\` deregisters. */
interface MessageContentProcessorHandle {
  readonly id: string;
  remove(): void;
}

/** Snapshot returned by \`api.chat.listContentProcessors()\`. */
interface RegisteredMessageContentProcessorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** \`null\` when no origin filter was supplied. */
  origins: MessageContentProcessorOrigin[] | null;
  timeoutMs: number;
}

interface ChatAPI {
  /** Get messages in the current chat. Pass \`{ last: N }\` for the N most recent. Requires chat_mutation permission. */
  getMessages(options?: GetMessagesOptions): Promise<ChatMessage[]>;
  /** Append a new message to the current chat. Requires chat_mutation permission. */
  sendMessage(content: string, options?: SendMessageOptions): Promise<{ id: string }>;
  /**
   * Edit a message by ID. Requires chat_mutation permission.
   * Pass a string to replace the active swipe's content, or a MessagePatch
   * to update swipes, swipe navigation, reasoning, or metadata. Patches
   * that touch swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED.
   */
  editMessage(id: string, contentOrPatch: string | MessagePatch): Promise<void>;
  /** Delete a message by ID. Requires chat_mutation permission. */
  deleteMessage(id: string): Promise<void>;
  /** Get the current chat ID. Returns null if no chat is active. */
  getChatId(): string | null;
  /**
   * Get a single metadata value from the current chat.
   * Returns undefined if the key does not exist. Requires chats permission.
   */
  getMetadata(key: string): Promise<unknown>;
  /**
   * Set a single metadata key on the current chat (read-modify-write).
   * Requires chats permission.
   */
  setMetadata(key: string, value: unknown): Promise<void>;
  /**
   * Register a prompt injection. Spliced into the assembled message array
   * at generation time. Requires interceptor permission.
   * @example
   * api.chat.inject('my-context', 'Remember: the user is a wizard.', { mode: 'intercept', depth: 1 });
   */
  inject(id: string, content: string, options?: InjectOptions): void;
  /** Remove a single injection by ID. */
  removeInjection(id: string): void;
  /** List all currently active injections (across all scripts). */
  getInjections(): InjectionInfo[];
  /** Remove all injections created by this script. Requires interceptor permission. */
  clearInjections(): void;
  /** Remove ALL injections across all scripts. Requires interceptor permission + allowDangerous. */
  clearAllInjections(): void;

  /** Mark a single message as hidden or visible. Hidden messages are excluded from vector retrieval but still included in prompt assembly. Requires chat_mutation permission. */
  setMessageHidden(id: string, hidden: boolean): Promise<void>;
  /** Bulk variant — mark multiple messages as hidden or visible. Max 500 IDs per call. Requires chat_mutation permission. */
  setMessagesHidden(ids: string[], hidden: boolean): Promise<void>;
  /** Check whether a message is hidden. Returns false for messages that have never had the flag set. Requires chat_mutation permission. */
  isMessageHidden(id: string): Promise<boolean>;

  /**
   * Register a message content processor — handler fires before a
   * user-initiated message write hits SQLite (create, update, swipe_add,
   * swipe_update, and auto-greetings) AND on per-message display rendering
   * (render, host ≥0.9.7). Return a patch \`{ content?, extra? }\` to
   * transform the stored row, or \`void\` to pass through. Returned \`extra\`
   * is ignored on swipe origins and on \`render\`. Requires \`chat_mutation\`.
   *
   * **Critical perf**: handler runs synchronously inside the message-write
   * (or per-render) path. Each invocation has a 2-second soft timeout
   * (configurable). DO NOT call \`api.llm.*\` or \`api.utils.http.*\` from a
   * handler — pre-compute via a trigger handler, store in \`api.db.*\`, read
   * here. The \`render\` origin is especially perf-sensitive: it fires on
   * every visible message paint, so prefer scoping write-time-only handlers
   * to the four write origins via \`{ origin: ['create', ...] }\`.
   *
   * **Loop safety**: NOT invoked for \`api.chat.*\` mutations — the host
   * intentionally bypasses the processor chain on extension-initiated writes
   * to avoid an extension's own writes triggering its own handler.
   *
   * Returns a handle whose \`remove()\` deregisters the handler.
   *
   * @example
   * const handle = api.chat.registerContentProcessor((ctx) => {
   *   const m = ctx.content.match(/<state>([sS]*?)</state>/);
   *   if (!m) return;
   *   return {
   *     content: ctx.content.replace(m[0], '').trim(),
   *     extra: { tracker: { state: m[1] } },
   *   };
   * }, { origin: 'create' });
   */
  registerContentProcessor(
    handler: MessageContentProcessorHandler,
    options?: MessageContentProcessorOptions,
  ): MessageContentProcessorHandle;

  /** List all currently registered message content processors (across all scripts). Diagnostic surface — un-gated. */
  listContentProcessors(): RegisteredMessageContentProcessorInfo[];
}

// ─── LLM API ─────────────────────────────────────────────────────────────────

interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

type LLMProvider =
  | 'ai21' | 'anthropic' | 'chutes' | 'custom' | 'deepseek' | 'electronhub'
  | 'fireworks' | 'google' | 'groq' | 'mistral' | 'moonshot' | 'nanogpt'
  | 'openai' | 'openrouter' | 'perplexity' | 'pollinations' | 'siliconflow'
  | 'xai' | 'zai';

interface LLMOptions {
  /** Connection profile ID (takes precedence over all other options). */
  connectionId?: string;
  /** Connection profile name (resolved case-insensitively). Ignored when connectionId is set. */
  connectionName?: string;
  /** LLM provider identifier. Ignored when connectionId or connectionName is set. */
  provider?: LLMProvider;
  /** Model identifier. Used together with provider for direct calls. */
  model?: string;
  /** Override temperature (0–2). */
  temperature?: number;
  /** Override max tokens. */
  maxTokens?: number;
  /** When false, forces single tool call per turn (parallel_tool_calls: false). Useful for Mistral and other providers that require serialised multi-step tool use. Only meaningful in generateWithTools(). */
  parallelToolCalls?: boolean;
}

interface ZodLike<T> {
  parse(data: unknown): T;
}

interface DryRunOptions {
  chatId?: string;
  connectionId?: string;
  personaId?: string;
  presetId?: string;
  generationType?: 'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate';
  parameters?: Record<string, unknown>;
}

interface DryRunBlock {
  type: string;
  name: string;
  role?: string;
  content?: string;
  blockId?: string;
  marker?: string;
  messageCount?: number;
  firstMessageIndex?: number;
  preCountedTokens?: number;
  excludeFromTotal?: boolean;
}

interface WorldInfoActivationStats {
  totalCandidates: number;
  activatedBeforeBudget: number;
  activatedAfterBudget: number;
  evictedByBudget: number;
  evictedByMinPriority: number;
  estimatedTokens: number;
  recursionPassesUsed: number;
}

interface DryRunTokenCount {
  totalTokens: number;
  breakdown: Array<{ name: string; type: string; tokens: number; role?: string }>;
  tokenizerId: string | null;
  tokenizerName: string | null;
}

interface DryRunMemoryStats {
  enabled: boolean;
  chunksRetrieved: number;
  chunksAvailable: number;
  chunksPending: number;
  injectionMethod: 'macro' | 'fallback' | 'disabled';
  retrievedChunks: Array<{ score: number; tokenEstimate: number; messageRange: [number, number]; preview: string }>;
  queryPreview: string;
  settingsSource: 'global' | 'per_chat';
}

interface DryRunResult {
  messages: LLMMessage[];
  breakdown: DryRunBlock[];
  parameters: Record<string, unknown>;
  model: string;
  provider: string;
  tokenCount?: DryRunTokenCount;
  worldInfoStats?: WorldInfoActivationStats;
  memoryStats?: DryRunMemoryStats;
}

interface ToolCall {
  name: string;
  args: Record<string, unknown>;
  call_id: string;
}

interface LLMRawResult {
  /** Text content generated by the LLM. Empty when tool_calls is set. */
  content: string;
  /** Function calls requested by the LLM. Present on intermediate agentic steps. */
  tool_calls?: ToolCall[];
}

interface LLMRawResultStructured<T> {
  /** Parsed and validated structured content. Present on the final step (no tool_calls). */
  content?: T;
  /** Function calls requested by the LLM. Present on intermediate agentic steps. */
  tool_calls?: ToolCall[];
}

interface LLMAPI {
  /**
   * Generate a text response from the LLM. Requires generation permission.
   * @example
   * const reply = await api.llm.generate([
   *   { role: 'system', content: 'You are a helpful assistant.' },
   *   { role: 'user',   content: 'Summarise this chat.' },
   * ], { connectionName: 'My GPT-4o' });
   */
  generate(messages: LLMMessage[], options?: LLMOptions): Promise<string>;

  /**
   * Generate and parse a structured JSON response. Requires generation permission.
   * Pass a Zod schema for automatic conversion and validation.
   * @example
   * const result = await api.llm.generateStructured(messages, z.object({
   *   sentiment: z.enum(['positive', 'neutral', 'negative']),
   *   score: z.number(),
   * }));
   * console.log(result.sentiment);
   */
  generateStructured<T = unknown>(
    messages: LLMMessage[],
    schema: ZodLike<T> | Record<string, unknown>,
    options?: LLMOptions
  ): Promise<T>;

  /**
   * Generate with tool schemas — returns text content or function calls.
   * Use in an agentic loop: call repeatedly until \`result.tool_calls\` is empty.
   * Requires generation permission.
   * @example
   * const schemas = api.tools.list().map(t => ({ name: t.name, description: t.description, parameters: t.parameters }));
   * let msgs = [...history];
   * for (let i = 0; i < 8; i++) {
   *   const r = await api.llm.generateWithTools(msgs, schemas, { connectionName: 'tools' });
   *   if (!r.tool_calls?.length) { if (r.content) api.chat.inject('res', r.content); break; }
   *   for (const call of r.tool_calls) {
   *     const result = await api.tools.invoke(call.name, call.args);
   *     msgs = [...msgs, { role: 'assistant', content: \`[Tool: \${call.name}]\` }, { role: 'user', content: result }];
   *   }
   * }
   */
  generateWithTools(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options?: LLMOptions
  ): Promise<LLMRawResult>;

  /**
   * Structured-output variant of generateWithTools. The 4th argument is a Zod schema
   * or JSON Schema. On the final step (no tool_calls), \`content\` is typed as \`T\`.
   */
  generateWithTools<T = unknown>(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options: LLMOptions | undefined,
    schema: ZodLike<T> | Record<string, unknown>
  ): Promise<LLMRawResultStructured<T>>;

  /**
   * Run the full prompt assembly pipeline without calling the LLM.
   * Returns the assembled messages, token counts, world info activation stats, and memory stats.
   * Useful for inspecting what the LLM would receive. Requires generation permission.
   */
  dryRun(options?: DryRunOptions): Promise<DryRunResult>;
}

// ─── Variables API ────────────────────────────────────────────────────────────

interface VariableStore {
  /** Get a variable. Returns defaultValue (or undefined) if the key does not exist. */
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  /** Set a variable. Value is JSON-serialized. */
  set<T = unknown>(key: string, value: T): Promise<void>;
  /** Delete a variable. Returns true if it existed. */
  delete(key: string): Promise<boolean>;
  /** Check if a variable exists. */
  has(key: string): Promise<boolean>;
  /** Delete all variables in this store. */
  clear(): Promise<void>;
}

interface VariablesAPI {
  /** Per-chat variables. Scoped to the current chat ID. Compatible with Lumiverse {{getvar}} macro. */
  local: VariableStore;
  /** Cross-chat variables. Shared across all chats. Compatible with {{getglobalvar}} macro. */
  global: VariableStore;
  /** Per-character variables. Scoped to the current character ID. */
  character: VariableStore;
  /** Chat-metadata persisted variables. Stored in chat.metadata.chat_variables. Accessible via {{@key}} / {{getchatvar}} macros. Persists across generations within the same chat. */
  chat: VariableStore;
}

// ─── JSON API ─────────────────────────────────────────────────────────────────

interface JSONAPI {
  /** Parse a JSON string. Throws on invalid JSON. */
  parse<T = unknown>(text: string): T;
  /** Serialize to JSON. Pass pretty=true for formatted output. */
  stringify(data: unknown, pretty?: boolean): string;
  /** Deep clone a value. */
  clone<T>(data: T): T;
  /** Get a nested value by dot-path (e.g. "user.address.city"). Returns defaultValue if missing. */
  get(data: unknown, path: string, defaultValue?: unknown): unknown;
  /** Set a nested value by dot-path. Returns the mutated object. */
  set(data: unknown, path: string, value: unknown): unknown;
  /** Deep merge objects. Later arguments override earlier ones. */
  merge<T = unknown>(...objects: unknown[]): T;
  /** Check if a string is valid JSON. */
  isValid(text: string): boolean;
  filter<T = unknown>(data: T[], predicate: (item: T) => boolean): T[];
  sort<T = unknown>(data: T[], key: string, direction?: 'asc' | 'desc'): T[];
  uniq<T = unknown>(data: T[]): T[];
  flatten<T = unknown>(data: unknown[]): T[];
  /**
   * Run a jsonquery pipeline against data.
   * Uses the jsonquery text query language (pipe-based, jq-like).
   * @see https://jsonquerylang.org
   * @example
   * // Filter and pick fields
   * const names = api.json.query(users, '.friends | filter(.age >= 18) | sort(.name) | pick(.name)');
   *
   * // Nested access + transformation
   * const totals = api.json.query(orders, '.items | groupBy(.category) | map(sum(.price))');
   */
  query<T = unknown>(data: unknown, queryString: string): T;
}

// ─── Utils API ────────────────────────────────────────────────────────────────

interface HttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
}

interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
}

interface UtilsAPI {
  /** Generate a UUID v4 string. */
  uuid(): string;
  /** Generate a short random ID (8 chars, URL-safe). */
  shortId(): string;
  /** Pause execution for \`ms\` milliseconds. */
  wait(ms: number): Promise<void>;
  random: {
    /** Random integer in [min, max] inclusive. */
    int(min: number, max: number): number;
    /** Random float in [min, max). */
    float(min: number, max: number): number;
    /** Pick a random element from an array. */
    pick<T>(array: T[]): T;
    /** Random true/false. */
    bool(): boolean;
    /** Returns true with probability p (0–1). */
    chance(probability: number): boolean;
    /** Return a shuffled copy of the array (Fisher-Yates). */
    shuffle<T>(array: T[]): T[];
  };
  /** HTTP via cors_proxy. Requires allowDangerous + cors_proxy permission. */
  http: {
    get(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    post(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    put(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    delete(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    request(url: string, options: HttpRequestOptions): Promise<HttpResponse>;
  };
  /**
   * Handlebars template rendering with automatic Lumiverse macro resolution.
   * Each script has its own isolated Handlebars environment.
   *
   * Two-pass rendering: macros resolved first ({{char}}, {{user}}, {{getvar::key}}, etc.),
   * then Handlebars expressions evaluated ({{variable}}, {{#if}}, {{#each}}, helpers).
   */
  template: {
    /**
     * Resolve Lumiverse macros then render the template as Handlebars.
     * chatId and characterId default to the active context when omitted.
     * @example
     * const prompt = await api.utils.template.render(
     *   'Hello {{char}}! Today: {{date}}. Score: {{score}}.',
     *   { score: 42 },
     * );
     */
    render(
      template: string,
      data?: Record<string, unknown>,
      options?: { chatId?: string; characterId?: string }
    ): Promise<string>;
    /**
     * Pre-compile a template for repeated synchronous use. No macro resolution.
     * @example
     * const greet = api.utils.template.compile('Hello, {{name}}!');
     * greet({ name: 'Alice' }) // → 'Hello, Alice!'
     */
    compile(template: string): (data?: Record<string, unknown>) => string;
    /**
     * Register a custom Handlebars helper scoped to this script.
     * @example
     * api.utils.template.registerHelper('upper', (s) => String(s).toUpperCase());
     */
    registerHelper(name: string, fn: (...args: unknown[]) => unknown): void;
  };

  /**
   * Lumiverse macro resolution (\`{{char}}\`, \`{{user}}\`, \`{{getvar::key}}\`,
   * \`{{roll::2d6}}\`, etc.). Thin wrapper over \`spindle.macros.resolve\`.
   *
   * Unlike \`api.utils.template.render\`, this is macro-only — no Handlebars
   * pass — so use this when you want to preview what a template WOULD render
   * to without triggering side-effecting macros (via \`commit: false\`).
   */
  macros: {
    /**
     * Resolve all macros in a template string.
     *
     * \`commit: false\` requests a dry resolve; well-behaved extension macro
     * handlers skip side effects (disk writes, event emissions). Default:
     * \`commit: true\` (matches normal prompt-assembly behaviour).
     *
     * @example
     * const { text, diagnostics } = await api.utils.macros.resolve(
     *   'Current turn: {{@turn}}. {{incvar::turn}}',
     *   { commit: false },
     * );
     */
    resolve(
      template: string,
      options?: MacrosResolveOptions,
    ): Promise<MacrosResolveResult>;
  };

  /**
   * Image-byte utilities, primarily intended to ease \`api.characters.setAvatar\`
   * workflows. No permission required. Cheap byte-level helpers, not a canvas
   * replacement — no format conversion or resize/crop (setAvatar normalises).
   */
  image: {
    /**
     * Detect an image's MIME type from the first few bytes (magic-byte sniff).
     * Returns \`null\` for unrecognised or truncated input. Recognises PNG,
     * JPEG, WebP, GIF (87a + 89a), BMP.
     * @example
     * const mime = api.utils.image.detectMime(bytes) ?? 'image/png';
     * await api.characters.setAvatar(charId, { data: bytes, mimeType: mime });
     */
    detectMime(bytes: Uint8Array): string | null;

    /**
     * Parse a \`data:<mime>;base64,<payload>\` URL into bytes + MIME.
     * Returns \`null\` for malformed input or non-base64 data URIs.
     */
    dataUrlToBytes(url: string): { data: Uint8Array; mimeType: string } | null;

    /**
     * Encode bytes + a MIME type into a \`data:<mime>;base64,<payload>\` URL.
     * Useful for previewing proposed avatars or embedding in generated HTML.
     */
    bytesToDataUrl(bytes: Uint8Array, mimeType: string): string;
  };
}

/** Options for \`api.utils.macros.resolve\`. */
interface MacrosResolveOptions {
  /** Chat ID for context-sensitive macros. Defaults to the active chat. */
  chatId?: string;
  /** Character ID for character macros. Inferred from the active chat if omitted. */
  characterId?: string;
  /**
   * When \`false\`, requests a dry / non-committing resolve — well-behaved
   * extension macro handlers skip side effects. Default: \`true\`.
   */
  commit?: boolean;
}

/** Result returned by \`api.utils.macros.resolve\`. */
interface MacrosResolveResult {
  /** Resolved template text. */
  text: string;
  /** Diagnostics from the macro engine. */
  diagnostics: Array<{ message: string; offset: number; length: number }>;
}

// ─── UI API ───────────────────────────────────────────────────────────────────

type UINotificationType = 'info' | 'success' | 'warning' | 'error';

interface UIAPI {
  /**
   * Show a native Lumiverse toast notification. Fire-and-forget.
   * Rate-limited to 5 per 10 seconds. Extension name auto-prefixed.
   * @example
   * api.ui.toast('Analysis complete.', 'success');
   */
  toast(message: string, type?: UINotificationType, options?: { title?: string; duration?: number }): void;
  /**
   * Show a themed text input dialog using the native Lumiverse prompt.
   * Returns the entered string (trimmed), or null if the user cancels or dismisses.
   * @param options.placeholder  Placeholder text shown inside the empty input
   * @param options.submitLabel  Label for the submit button (default: 'Submit')
   * @param options.cancelLabel  Label for the cancel button (default: 'Cancel')
   * @param options.multiline    Use a multi-line textarea instead of a single-line input
   * @example
   * const name = await api.ui.prompt('Enter character name:', 'Alice');
   * const notes = await api.ui.prompt('Add notes:', '', { multiline: true });
   */
  prompt(
    message: string,
    defaultValue?: string,
    options?: { placeholder?: string; submitLabel?: string; cancelLabel?: string; multiline?: boolean },
  ): Promise<string | null>;
  /**
   * Show a themed yes/no confirmation dialog using the native Lumiverse modal.
   * Returns true if the user clicks Confirm, false if they cancel or dismiss.
   * @param options.variant  Button colour: 'info' | 'warning' | 'danger' | 'success' (default: 'info')
   * @param options.confirmLabel  Label for the confirm button (default: 'Confirm')
   * @param options.cancelLabel   Label for the cancel button (default: 'Cancel')
   * @example
   * if (await api.ui.confirm('Delete all variables?', 'Confirm Clear', { variant: 'danger', confirmLabel: 'Delete' })) {
   *   await api.variables.local.clear();
   * }
   */
  confirm(
    message: string,
    title?: string,
    options?: { variant?: 'info' | 'warning' | 'danger' | 'success'; confirmLabel?: string; cancelLabel?: string },
  ): Promise<boolean>;
  /**
   * Open a structured read-only modal using the native Lumiverse modal system.
   * Returns a ModalHandle — await handle.result for dismissal, or call handle.close() to dismiss programmatically.
   * Items are rendered in order: text, heading, key_value, divider, card.
   * @param options.title  Modal header title (required)
   * @param options.width  Width in pixels (default: 420)
   * @param options.maxHeight  Max height in pixels (default: 520)
   * @param options.persistent  When true, user cannot close the modal — only programmatic dismissal or cleanup
   * @example
   * var handle = api.ui.showModal([
   *   { type: 'heading', content: 'Chat Stats' },
   *   { type: 'key_value', label: 'Messages', value: String(msgs.length) },
   *   { type: 'divider' },
   *   { type: 'card', items: [{ type: 'text', content: summary }] },
   * ], { title: 'Analysis Results' });
   * var result = await handle.result;
   */
  showModal(items: ModalItem[], options: ShowModalOptions): ModalHandle;

  /**
   * Open the native Lumiverse expanded text editor with macro syntax highlighting.
   * Blocks until the user closes the editor.
   * @returns The edited text, or null if the user cancelled.
   * @example
   * var text = await api.ui.editText('Edit System Prompt', currentPrompt);
   * if (text !== null) { // user submitted }
   */
  editText(title?: string, value?: string, options?: { placeholder?: string }): Promise<string | null>;

  /**
   * Open a DOM-owned modal — script has full control of the body via the
   * returned handle's \`root\` (a \`DOMHandle\`). Requires app_manipulation
   * permission. Host limit: 2 modals per extension.
   * @example
   * const modal = api.ui.showAdvancedModal({ title: 'Details', width: 520 });
   * modal.root.update(\`<div class="stats">Loading…</div>\`);
   * modal.onDismiss(reason => console.log('closed:', reason));
   */
  showAdvancedModal(options: AdvancedModalOptions): AdvancedModalHandle;

  /**
   * Show a popover context menu at the given screen coordinates. Resolves with
   * the \`key\` of the selected item, or \`null\` if the user dismissed the menu.
   * @example
   * handle.on('contextmenu', async (data) => {
   *   const key = await api.ui.showContextMenu({
   *     position: { x: 200, y: 300 },
   *     items: [
   *       { key: 'edit', label: 'Edit' },
   *       { key: 'delete', label: 'Delete', danger: true },
   *     ],
   *   });
   *   if (key === 'delete') { ... }
   * });
   */
  showContextMenu(options: ShowContextMenuOptions): Promise<string | null>;

  /**
   * Register an action in the chat input bar's Extras popover. Returns a
   * handle for subsequent setLabel / setSubtitle / setEnabled / onClick /
   * destroy calls. Same-id re-registration silently replaces the existing
   * entry — safe to call from recurring event handlers (e.g.
   * SETTINGS_UPDATED). Host limits: 4 per extension, 12 global.
   * @example
   * const action = api.ui.registerInputBarAction({
   *   id: 'summarize', label: 'Summarize chat',
   *   subtitle: 'Last run: never',
   *   iconSvg: '<svg>...</svg>',
   * });
   * action.onClick(async () => {
   *   const ts = new Date().toLocaleTimeString();
   *   action.setSubtitle(\`Last run: \${ts}\`);
   * });
   */
  registerInputBarAction(options: InputBarActionOptions): InputBarActionHandle;

  /**
   * Create a draggable floating widget over the chat viewport. The body DOM
   * is fully script-owned via \`handle.root\`. Requires ui_panels permission.
   * Host limit: 2 widgets per script, 8 global.
   * @example
   * const w = api.ui.createFloatWidget({ width: 200, height: 80, initialPosition: { x: 100, y: 100 } });
   * w.root.update(\`<div>Hello</div>\`);
   * w.onDragEnd(pos => console.log('dropped at', pos));
   */
  createFloatWidget(options: FloatWidgetOptions): FloatWidgetHandle;

  /**
   * Register a tab in the ViewportDrawer sidebar. The tab body is script-owned
   * via \`handle.root\`. Automatically appears in the command palette (Ctrl+K).
   * LumiScript enforces at most 1 drawer tab per script.
   * @example
   * const tab = api.ui.registerDrawerTab({
   *   id: 'dashboard', title: 'Script Dashboard', shortName: 'Dash',
   *   iconSvg: '<svg>...</svg>',
   * });
   * tab.root.update(\`<div class="dash">…</div>\`);
   * tab.onActivate(() => { ... });
   */
  registerDrawerTab(options: DrawerTabOptions): DrawerTabHandle;

  /**
   * Send an OS-level push notification to the user's devices.
   * Only delivered when the app is not focused. Requires push_notification permission.
   * @returns { sent: number } — how many devices received the notification.
   */
  pushNotification(title: string, body: string, options?: {
    tag?: string; url?: string; icon?: string; rawTitle?: boolean; image?: string;
  }): Promise<{ sent: number }>;

  /** Check if push notifications are available. Requires push_notification permission. */
  getPushStatus(): Promise<{ available: boolean; subscriptionCount: number }>;

  /**
   * DOM injection sub-API. Inject HTML and CSS into the Lumiverse frontend and
   * receive DOM events back. Requires the app_manipulation permission.
   */
  dom: {
    /**
     * Inject sanitized HTML at a CSS selector target.
     * Returns a DOMHandle for updating, removing, or attaching event listeners.
     */
    inject(target: string, html: string, options?: DOMInjectOptions): DOMHandle;

    /**
     * Inject sanitized HTML into a chat message's bubble container.
     * Handles timing automatically (waits up to 5s for the element to appear).
     * Resolves the correct target based on chat layout (Bubble or Minimal).
     *
     * @param messageId UUID of the target message
     * @param html HTML string (sanitized on frontend)
     * @param options Position and stable ID
     */
    injectAtMessage(messageId: string, html: string, options?: DOMMessageInjectOptions): DOMHandle;

    /**
     * Add a style element scoped to this script via CSS at-scope.
     * Returns an object with remove() to remove the style.
     * Use --lumiverse-* CSS variables for theming.
     *
     * When \`opts.id\` is provided, repeated calls with the same id
     * replace the prior stylesheet rather than accumulating — useful
     * for dev iteration loops where you edit the CSS and re-run
     * without manual cleanup.
     */
    addStyle(css: string, opts?: DOMAddStyleOptions): { remove(): void };

    /**
     * Attach an event-delegated listener at a known root, matching descendant
     * elements by CSS selector. Lets scripts react to user interactions with
     * DOM that the script itself didn't inject — most commonly, interactive
     * elements (buttons, inputs, selects, textareas) emitted by the LLM
     * into \`.mes_text\` content.
     *
     * Single host-side capture listener per (root, event) tuple; selector
     * matching happens frontend-side via \`event.target.closest(selector)\`.
     * IPC fires only when a selector matches.
     *
     * Default scope (\`options.root: 'chat'\`) restricts matching to chat
     * content; wider scope (\`options.root: 'document'\`) matches anywhere
     * in the page. Both gate on \`app_manipulation\` — same permission
     * as inject / injectAtMessage / addStyle.
     *
     * @param selector CSS selector matched against \`event.target.closest()\`
     * @param event    Event name ('click', 'change', 'input', 'keydown', ...)
     * @param handler  Called with serialized DOMDelegatedEventData on match
     * @param options  Scope, message scoping, prevention flags
     * @returns        Unsubscribe function
     */
    delegate(
      selector: string,
      event:    string,
      handler:  (data: DOMDelegatedEventData) => void | Promise<void>,
      options?: DOMDelegateOptions,
    ): () => void;

    /** Remove all DOM injections and styles created by this script. */
    cleanup(): void;
  };
}

// ─── DOM Injection API ───────────────────────────────────────────────────────

interface DOMInjectOptions {
  /** Insertion position. Default: 'beforeend'. */
  position?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  /**
   * Stable ID for idempotent injection. Re-using the same ID updates the
   * existing element instead of creating a duplicate.
   */
  id?: string;
}

/** Options for api.ui.dom.injectAtMessage(messageId, html, options?). */
interface DOMMessageInjectOptions {
  /** Semantic position: 'footer' (default, end of bubble) or 'header' (start of bubble). */
  position?: 'header' | 'footer';
  /** Stable ID for idempotent injection. */
  id?: string;
}

/** Options for api.ui.dom.addStyle(css, opts?). */
interface DOMAddStyleOptions {
  /**
   * Optional script-scoped identifier. Repeated \`addStyle\` calls with
   * the same id (within this script) replace the prior stylesheet rather
   * than accumulating. Useful for dev iteration: \`addStyle(css, { id: 'main' })\`
   * on every fire trivially reflects edits without globalThis-flag
   * bookkeeping or extension toggles. Ids are scoped per scriptId.
   */
  id?: string;
}

/** Serialized subset of a DOM event. */
interface DOMEventData {
  type: string;
  targetId?: string;
  targetValue?: string;
  targetChecked?: boolean;
  dataset?: Record<string, string>;
  detail?: unknown;
}

/** Options for api.ui.dom.delegate(selector, event, handler, options?). */
interface DOMDelegateOptions {
  /**
   * Where to attach the actual host-side capture listener. Default: 'chat'.
   * - 'chat': restricts matching to the chat content container.
   * - 'document': matches anywhere in the page (including Lumiverse's
   *   own UI surfaces). Both gate on \`app_manipulation\`.
   */
  root?: 'chat' | 'document';
  /** Narrow matching to the .mes_text content of one specific message. */
  messageId?: string;
  /** Call event.preventDefault() before dispatching. Default: false. */
  preventDefault?: boolean;
  /** Call event.stopPropagation() after dispatching. Default: false. */
  stopPropagation?: boolean;
}

/**
 * Event data delivered to handlers registered via api.ui.dom.delegate().
 * Extends DOMEventData with a serialized snapshot of the element actually
 * matched by the selector — which may be an ancestor of event.target.
 */
interface DOMDelegatedEventData extends DOMEventData {
  matched: {
    tagName:        string;
    id?:            string;
    classList:      string[];
    dataset:        Record<string, string>;
    attributes:     Record<string, string>;
    textContent:    string;
    value?:         string;
    checked?:       boolean;
    selectedIndex?: number;
    selectedText?:  string;
  };
  modifiers: {
    ctrl:    boolean;
    shift:   boolean;
    alt:     boolean;
    meta:    boolean;
    button?: number;
  };
  /**
   * Populated when the matched element is inside an assistant or user
   * message. swipeId is the active swipe at dispatch time, resolved
   * backend-side via the host's chat history. Falls through with 0 if
   * the chat closed before dispatch or the message left the history.
   */
  message?: {
    id:      string;
    role:    'user' | 'assistant';
    swipeId: number;
  };
}

/**
 * Handle to an injected DOM element.
 * All methods are fire-and-forget (send a message to the frontend).
 */
interface DOMHandle {
  readonly id: string;
  /** Replace the element's inner HTML. */
  update(html: string): void;
  /** Remove the element and its listeners. */
  remove(): void;
  /**
   * Attach a DOM event listener. Returns an unsubscribe function.
   * @example
   * const unsub = handle.on('click', (data) => {
   *   console.log('Clicked element:', data.targetId, data.dataset);
   * });
   * // Later: unsub();
   */
  on(event: string, handler: (data: DOMEventData) => void): () => void;
  /**
   * Enable frontend-only drag on this element.
   * @param handleSelector Optional CSS selector for the drag handle.
   *   When provided, only that child initiates drag; the root element moves.
   *   When omitted, the entire element is both handle and move target.
   * @example
   * const panel = api.ui.dom.inject('body', panelHtml, { id: 'my-panel' });
   * panel.makeDraggable('.title-bar');
   */
  makeDraggable(handleSelector?: string): void;
  /**
   * Inject HTML as a descendant of this handle's bound element — selector
   * resolved RELATIVE to this element, not via \`document.querySelector\`.
   * Returns a fresh \`DOMHandle\` for the injected child so you can call
   * \`update(html)\` on it independently without touching sibling DOM.
   *
   * This is the right choice when the parent may be orphaned at inject
   * time — drawer tabs mount lazily on first activation, advanced-modal
   * and float-widget bodies mount when the host shell mounts, and all
   * three are unreachable via global \`document.querySelector\` until
   * then. \`injectChild\` resolves through the backend's element-map ref
   * and works regardless of mount state.
   *
   * For document-scoped (host-wide) injection, keep using
   * \`api.ui.dom.inject(target, html, opts)\` — it bypasses this scoping.
   *
   * **Sanitization note.** Unlike \`api.ui.dom.inject\`, the scoped path
   * does NOT run the host's DOMPurify sanitization pass on \`html\` (the
   * manual insert can't reach into orphaned parents via the host API).
   * If your script passes untrusted HTML — e.g. fetched from an external
   * source — sanitize it yourself BEFORE calling \`injectChild\`.
   * Script-generated markup (template literals with safe interpolation)
   * is fine.
   *
   * @example
   * // Inside a drawer tab — render shell once, then update the grid
   * // in place on every filter change without rebuilding the inputs:
   * tab.root.update(\`
   *   <div class="search"><input data-action="filter" /></div>
   *   <div data-grid></div>
   * \`);
   * function renderGrid() {
   *   tab.root.injectChild('[data-grid]', gridHtml, { id: 'grid' });
   * }
   * tab.onActivate(renderGrid);
   * tab.root.on('input', (d) => { if (d.dataset?.action === 'filter') renderGrid(); });
   */
  injectChild(target: string, html: string, options?: DOMInjectOptions): DOMHandle;
}

type ModalItem =
  | { type: 'text'; content: string; muted?: boolean }
  | { type: 'divider' }
  | { type: 'key_value'; label: string; value: string }
  | { type: 'heading'; content: string }
  | { type: 'card'; items: ModalItem[] };

interface ShowModalOptions {
  title: string;
  width?: number;
  maxHeight?: number;
  persistent?: boolean;
}

interface ModalResult {
  dismissedBy: 'user' | 'extension' | 'cleanup';
}

interface ModalHandle {
  /** UUID identifying this modal instance. Immediately available on the returned handle. */
  readonly openRequestId: string;
  /** Resolves with the dismissal reason when the modal closes. */
  readonly result: Promise<ModalResult>;
  /** Close the modal programmatically. */
  close(): Promise<void>;
}

// ─── Advanced modal (DOM-owned body) ─────────────────────────────────────────

/**
 * Options for \`api.ui.showAdvancedModal()\`.
 *
 * Unlike \`showModal()\`, which renders a structured item list, advanced modals
 * give the script full control over the body via a \`DOMHandle\` returned on
 * \`handle.root\`.
 */
interface AdvancedModalOptions {
  /** Modal header title. Required. */
  title: string;
  /** Width in pixels. Default: 420. Clamped to viewport by the host. */
  width?: number;
  /** Maximum height in pixels. Default: 520. Clamped to viewport by the host. */
  maxHeight?: number;
  /**
   * When \`true\`, clicking the backdrop no longer dismisses the modal — the
   * user must use the close button, or the script must call \`dismiss()\`.
   */
  persistent?: boolean;
}

/**
 * Why an advanced modal was dismissed.
 *
 * - \`'user'\` — user clicked the close button, the backdrop, or pressed Escape.
 * - \`'script'\` — the script called \`handle.dismiss()\`.
 * - \`'teardown'\` — the script was disabled or deleted while the modal was open.
 */
type AdvancedModalDismissReason = 'user' | 'script' | 'teardown';

/**
 * Handle returned by \`api.ui.showAdvancedModal()\`. Scripts own the modal body
 * via \`root\` — a \`DOMHandle\` bound to the modal's content container.
 * Host-enforced limit: 2 modals per extension.
 */
interface AdvancedModalHandle {
  /** UUID identifying this modal instance. Available synchronously. */
  readonly modalId: string;
  /** \`DOMHandle\` bound to the modal's content container. */
  readonly root: DOMHandle;
  /** Has the modal been dismissed? Flips to true on any dismissal path. */
  readonly dismissed: boolean;
  /** Update the modal header title. */
  setTitle(title: string): void;
  /** Close the modal programmatically. Safe to call after dismissal (no-op). */
  dismiss(): void;
  /**
   * Register a handler that fires once when the modal is dismissed. Receives
   * the dismissal reason. Returns an unsubscribe function. If already
   * dismissed, the handler fires on the next microtask.
   */
  onDismiss(handler: (reason: AdvancedModalDismissReason) => void): () => void;
}

// ─── Context menu (request-response) ─────────────────────────────────────────

/** A single entry in \`api.ui.showContextMenu()\`'s items array. */
interface ContextMenuItem {
  /** Stable key returned when this item is selected. Required. */
  key: string;
  /** Display text. Ignored when \`type === 'divider'\`. */
  label: string;
  /** Entry type. Default: 'item'. */
  type?: 'item' | 'divider';
  /** Greyed out and not clickable. Default: false. */
  disabled?: boolean;
  /** Rendered in red / danger style. Default: false. */
  danger?: boolean;
  /** Highlighted to indicate current selection. Default: false. */
  active?: boolean;
}

/** Options for \`api.ui.showContextMenu()\`. */
interface ShowContextMenuOptions {
  /** Screen coordinates to anchor the menu. Typically from a pointer event. */
  position: { x: number; y: number };
  /** Menu entries. */
  items: ContextMenuItem[];
}

// ─── Input bar actions (lifecycle) ───────────────────────────────────────────

/** Options for \`api.ui.registerInputBarAction()\`. */
interface InputBarActionOptions {
  /**
   * Unique identifier within your script. Used by the handle for subsequent
   * calls — pick something stable. Same-id re-registration silently replaces
   * the existing entry and clears old click handlers.
   */
  id: string;
  /** Display label shown in the Extras popover row. */
  label: string;
  /**
   * Optional secondary line rendered beneath the label in the Extras
   * popover row. Useful for short status strings (\`"Last roll: 17"\`),
   * keyboard shortcuts, or one-line descriptions. Omit (or pass
   * \`undefined\` via \`setSubtitle\`) for a single-line row.
   */
  subtitle?: string;
  /**
   * Inline SVG string (sanitized). The host renders it inside a 14x14 slot
   * via CSS — **the SVG must carry width="14" height="14" attrs** or it
   * overflows and misaligns with the label. When using \`ls:icons\`, call
   * \`forInputBar(name)\` (or \`sized(name, 14)\`) instead of the default 24x24
   * \`svg[name]\` to get a correctly-sized string.
   */
  iconSvg?: string;
  /** URL to an icon image. Takes precedence over \`iconSvg\`. */
  iconUrl?: string;
  /** When false, the action is hidden from the popover. Default: true. */
  enabled?: boolean;
}

/**
 * Handle returned by \`api.ui.registerInputBarAction()\`. Actions appear in the
 * Extras popover on the chat input bar. Host-enforced limits: 4 per extension,
 * 12 global.
 */
interface InputBarActionHandle {
  /** The action's identifier — the same \`id\` passed in options. */
  readonly actionId: string;
  /** Update the display label. Safe to call after destroy (no-op). */
  setLabel(label: string): void;
  /**
   * Update (or clear) the secondary line beneath the label. Pass
   * \`undefined\` to remove a previously-set subtitle and collapse the
   * row back to single-line. Safe to call after destroy (no-op).
   */
  setSubtitle(subtitle?: string): void;
  /** Show or hide the action. Disabled actions are hidden, not greyed. */
  setEnabled(enabled: boolean): void;
  /**
   * Register a click handler. Multiple handlers fan out. Returns an
   * unsubscribe function. The Extras popover auto-closes after a click.
   */
  onClick(handler: () => void): () => void;
  /** Remove the action and clear all click handlers. Idempotent. */
  destroy(): void;
}

// ─── Float widgets (lifecycle, DOM-owned) ────────────────────────────────────

/** Options for \`api.ui.createFloatWidget()\`. */
interface FloatWidgetOptions {
  /** Widget width in pixels. */
  width: number;
  /** Widget height in pixels. */
  height: number;
  /** Starting position in viewport coordinates. */
  initialPosition?: { x: number; y: number };
  /** Snap to the nearest screen edge after drag. Default: false. */
  snapToEdge?: boolean;
  /** Hover tooltip text. */
  tooltip?: string;
  /**
   * Strip default container chrome (border, background, shadow, radius).
   * The script fully owns presentation via \`handle.root\` + \`addStyle\`.
   */
  chromeless?: boolean;
}

/**
 * Handle returned by \`api.ui.createFloatWidget()\`. Float widgets are small
 * draggable overlays. The body DOM is fully script-owned via \`handle.root\`.
 * Host-enforced limit: 2 widgets per script, 8 global.
 */
interface FloatWidgetHandle {
  /** UUID identifying this widget instance. */
  readonly widgetId: string;
  /** \`DOMHandle\` bound to the widget's content container. */
  readonly root: DOMHandle;
  /** Move the widget to new viewport coordinates. */
  moveTo(x: number, y: number): void;
  /** Current cached position. May briefly lag host clamps. */
  getPosition(): { x: number; y: number };
  /** Show or hide the widget. */
  setVisible(visible: boolean): void;
  /** Current cached visibility state. */
  isVisible(): boolean;
  /**
   * Register a handler fired after the user completes a drag gesture.
   * Returns an unsubscribe function. Multiple handlers supported.
   */
  onDragEnd(handler: (pos: { x: number; y: number }) => void): () => void;
  /** Remove the widget. Idempotent — subsequent calls are no-ops. */
  destroy(): void;
}

// ─── Drawer tabs (lifecycle, DOM-owned) ──────────────────────────────────────

/** Options for \`api.ui.registerDrawerTab()\`. */
interface DrawerTabOptions {
  /** Unique identifier within your script. Pick something stable. */
  id: string;
  /**
   * Full display title. Shown in the panel header and the command palette
   * listing (Ctrl+K).
   */
  title: string;
  /**
   * Short label rendered beneath the sidebar icon. Keep to ~8 characters;
   * longer values are truncated. Defaults to a truncation of \`title\`.
   */
  shortName?: string;
  /** One-line description shown in the command palette. */
  description?: string;
  /** Extra terms for command-palette fuzzy search. */
  keywords?: string[];
  /** Title shown in the panel header navbar. Defaults to \`title\`. */
  headerTitle?: string;
  /** Inline SVG string for the sidebar icon. Rendered at 20x20. */
  iconSvg?: string;
  /** URL to an icon image. Mutually exclusive with \`iconSvg\`. */
  iconUrl?: string;
}

/**
 * Handle returned by \`api.ui.registerDrawerTab()\`. Drawer tabs live in the
 * ViewportDrawer sidebar and automatically appear in the command palette.
 * LumiScript enforces at most 1 drawer tab per script.
 */
interface DrawerTabHandle {
  /** The tab's identifier — the same \`id\` passed in options. */
  readonly tabId: string;
  /** \`DOMHandle\` bound to the tab's content container. */
  readonly root: DOMHandle;
  /** Update the full title. */
  setTitle(title: string): void;
  /** Update the sidebar icon label. */
  setShortName(shortName: string): void;
  /** Show a badge next to the tab icon. Pass \`null\` to clear. */
  setBadge(text: string | null): void;
  /** Programmatically switch the drawer to this tab. */
  activate(): void;
  /**
   * Register a handler fired when the user switches to this tab. Returns an
   * unsubscribe function.
   */
  onActivate(handler: () => void): () => void;
  /** Remove the tab. Idempotent — subsequent calls are no-ops. */
  destroy(): void;
}

// ─── Files API ────────────────────────────────────────────────────────────────

interface FileStatResult {
  exists: boolean;
  isFile: boolean;
  isDirectory: boolean;
  sizeBytes: number;
  modifiedAt: string;
}

interface TempStatResult {
  sizeBytes: number;
  createdAt: string;
  expiresAt?: string;
}

interface TempWriteOptions {
  /** Time-to-live in milliseconds. Omit for no expiry. */
  ttlMs?: number;
}

/**
 * Flat file API with three storage tiers. All methods require allowDangerous.
 * - user*   — per-user persistent storage
 * - shared* — extension-wide persistent storage
 * - temp*   — TTL-bound quota-managed storage (also requires ephemeral_storage permission)
 */
interface FilesAPI {
  userRead(path: string): Promise<string>;
  userWrite(path: string, data: string): Promise<void>;
  userDelete(path: string): Promise<void>;
  userExists(path: string): Promise<boolean>;
  userList(prefix?: string): Promise<string[]>;
  userMkdir(path: string): Promise<void>;
  sharedRead(path: string): Promise<string>;
  sharedWrite(path: string, data: string): Promise<void>;
  sharedDelete(path: string): Promise<void>;
  sharedExists(path: string): Promise<boolean>;
  sharedList(prefix?: string): Promise<string[]>;
  sharedStat(path: string): Promise<FileStatResult>;
  sharedMkdir(path: string): Promise<void>;
  sharedMove(from: string, to: string): Promise<void>;
  tempRead(path: string): Promise<string>;
  tempWrite(path: string, data: string, options?: TempWriteOptions): Promise<void>;
  tempDelete(path: string): Promise<void>;
  tempList(prefix?: string): Promise<string[]>;
  tempStat(path: string): Promise<TempStatResult>;
  tempClearExpired(): Promise<number>;
}

// ─── Enclave API ──────────────────────────────────────────────────────────────

/**
 * AES-256-GCM encrypted per-user secret storage. All methods require allowDangerous.
 * Keys: alphanumeric + underscore, dash, dot — max 128 chars. Values: printable ASCII, max 64 KB.
 */
interface EnclaveAPI {
  /** Store or overwrite an encrypted secret. */
  put(key: string, value: string): Promise<void>;
  /** Retrieve a decrypted secret, or null if not found. */
  get(key: string): Promise<string | null>;
  /** Delete a secret. Returns true if it existed. */
  delete(key: string): Promise<boolean>;
  /** Check if a secret exists without decrypting it. */
  has(key: string): Promise<boolean>;
  /** List all secret keys for this user and extension. */
  list(): Promise<string[]>;
}

// ─── Characters API ───────────────────────────────────────────────────────────

interface Character {
  id: string; name: string; description: string; personality: string;
  scenario: string; firstMessage: string; mesExample: string; creatorNotes: string;
  systemPrompt: string; postHistoryInstructions: string; tags: string[];
  alternateGreetings: string[]; creator: string; imageId: string | null;
  /** World book IDs attached to this character. */
  worldBookIds: string[];
  /**
   * Free-form extensions blob — namespace your keys (e.g. \`'my-script:state'\`).
   * Complements the \`extra\` bag on chat messages: per-character, not per-message.
   * Reads return the full object. Writes via \`update({ extensions: { ... } })\`
   * shallow-merge into existing — top-level keys you provide overwrite, omitted
   * keys are preserved. Nested objects are replaced wholesale (NOT recursively
   * merged) — read-modify-write inside your script if you need sub-tree merge.
   * Keep values JSON-serializable.
   */
  extensions: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface CharacterCreateInput {
  name: string; description?: string; personality?: string; scenario?: string;
  firstMessage?: string; mesExample?: string; creatorNotes?: string;
  systemPrompt?: string; postHistoryInstructions?: string;
  tags?: string[]; alternateGreetings?: string[]; creator?: string;
  /** Replace the character's world book attachments. Pass [] to detach all. Omit to leave unchanged. */
  worldBookIds?: string[];
  /** Initial extension data. See \`Character.extensions\` for namespacing + JSON conventions. */
  extensions?: Record<string, unknown>;
}
interface CharacterUpdateInput extends Partial<CharacterCreateInput> {}

/** Payload for \`api.characters.setAvatar()\`. */
interface CharacterAvatarUpload {
  /** Raw avatar image bytes. Source via http, files, enclave, etc. */
  data: Uint8Array;
  /** Optional filename — preserves the file extension when stored. */
  filename?: string;
  /** Optional content type. Defaults to \`image/png\` on the host side. */
  mimeType?: string;
}

interface CharactersAPI {
  /** List characters (paginated). Requires characters permission. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Character[]; total: number }>;
  /** Get a character by ID. Returns null if not found. Requires characters permission. */
  get(id: string): Promise<Character | null>;
  /**
   * Find the first character whose name exactly matches the given name (case-sensitive).
   * Scans all pages so no character is missed regardless of library size.
   * Returns null if no character has that name. Character names are not unique
   * in Lumiverse; the first match is returned. Requires characters permission.
   */
  getByName(name: string): Promise<Character | null>;
  /** Create a new character. Requires characters permission. */
  create(input: CharacterCreateInput): Promise<Character>;
  /**
   * Replace a character's avatar image. Accepts raw bytes; the host handles
   * storage and image-ID assignment. Useful for image-gen integrations,
   * external fetches, or bulk avatar application. Pair with
   * \`api.utils.image.detectMime\` for unknown-source bytes.
   * Requires characters permission.
   * @example
   * const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer());
   * const mimeType = api.utils.image.detectMime(bytes) ?? 'image/png';
   * await api.characters.setAvatar(charId, { data: bytes, mimeType });
   */
  setAvatar(id: string, avatar: CharacterAvatarUpload): Promise<Character>;
  /** Update a character. Requires characters permission. */
  update(id: string, input: CharacterUpdateInput): Promise<Character>;
  /** Delete a character by ID. Requires characters permission. */
  delete(id: string): Promise<boolean>;
}

// ─── Chats API ────────────────────────────────────────────────────────────────

interface ChatSession {
  id: string; characterId: string; name: string;
  metadata: Record<string, unknown>; createdAt: number; updatedAt: number;
}
interface ChatSessionUpdateInput { name?: string; metadata?: Record<string, unknown>; }
interface ChatMemoryChunk { content: string; score: number; metadata: Record<string, unknown>; }
interface ChatMemoryResult {
  chunks: ChatMemoryChunk[]; formatted: string; count: number; enabled: boolean;
  queryPreview: string; settingsSource: 'global' | 'per_chat';
  chunksAvailable: number; chunksPending: number;
}

interface ChatsAPI {
  /** List chat sessions. Requires chats permission. */
  list(options?: { characterId?: string; limit?: number; offset?: number }): Promise<{ data: ChatSession[]; total: number }>;
  get(id: string): Promise<ChatSession | null>;
  getActive(): Promise<ChatSession | null>;
  update(id: string, input: ChatSessionUpdateInput): Promise<ChatSession>;
  delete(id: string): Promise<boolean>;
  /**
   * Retrieve long-term memory chunks via vector search (same as {{memories}} macro).
   * Falls back to active chat if chatId is omitted. Requires chats permission.
   */
  getMemories(chatId?: string, options?: { topK?: number }): Promise<ChatMemoryResult>;
}

// ─── World Info API ───────────────────────────────────────────────────────────

interface WorldInfo {
  id: string; name: string; description: string;
  metadata: Record<string, unknown>; createdAt: number; updatedAt: number;
}
interface WorldInfoCreateInput { name: string; description?: string; metadata?: Record<string, unknown>; }
interface WorldInfoUpdateInput { name?: string; description?: string; metadata?: Record<string, unknown>; }
interface WorldInfoEntry {
  id: string; worldBookId: string; uid: string; key: string[]; keysecondary: string[];
  content: string; comment: string; position: number; depth: number; role: string | null;
  orderValue: number; selective: boolean; constant: boolean; disabled: boolean;
  groupName: string; groupOverride: boolean; groupWeight: number; probability: number;
  scanDepth: number | null; caseSensitive: boolean; matchWholeWords: boolean;
  automationId: string | null; useRegex: boolean; preventRecursion: boolean;
  excludeRecursion: boolean; delayUntilRecursion: boolean; priority: number;
  sticky: number; cooldown: number; delay: number; selectiveLogic: number;
  useProbability: boolean; vectorized: boolean; extensions: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface WorldInfoEntryInput {
  key?: string[]; keysecondary?: string[]; content?: string; comment?: string;
  position?: number; depth?: number; role?: string; orderValue?: number;
  selective?: boolean; constant?: boolean; disabled?: boolean; groupName?: string;
  groupOverride?: boolean; groupWeight?: number; probability?: number;
  scanDepth?: number; caseSensitive?: boolean; matchWholeWords?: boolean;
  automationId?: string; useRegex?: boolean; preventRecursion?: boolean;
  excludeRecursion?: boolean; delayUntilRecursion?: boolean; priority?: number;
  sticky?: number; cooldown?: number; delay?: number; selectiveLogic?: number;
  useProbability?: boolean; vectorized?: boolean; extensions?: Record<string, unknown>;
}
type WorldInfoRef = string;
type ActivatedWorldInfoEntry = WorldInfoEntry & { source: 'keyword' | 'vector'; score?: number };

// ─── Regex Scripts API (api.regexScripts.*) ─────────────────────────────────
//
// Full CRUD over the user's regex find/replace scripts. Requires the
// \`regex_scripts\` permission. Mirrors the resolution Lumiverse uses
// internally during prompt assembly + response baking + display rendering.
//
// Targets:
//   - \`'prompt'\`   — runs during prompt assembly, against each message
//     before it goes to the LLM. Does not modify stored content.
//   - \`'response'\` — runs once after the LLM stream ends, against the
//     full assistant message. The result is written back to chat storage.
//   - \`'display'\`  — runs per render in the frontend. Does not modify
//     stored content.

type RegexPlacement = 'user_input' | 'ai_output' | 'world_info' | 'reasoning';
type RegexScope     = 'global' | 'character' | 'chat';
type RegexTarget    = 'prompt' | 'response' | 'display';
type RegexMacroMode = 'none' | 'raw' | 'escaped';

/**
 * Snapshot of a regex script. Returned by \`list()\`, \`get()\`, \`findByName()\`,
 * \`getActive()\`, \`create()\`, and \`update()\`.
 */
interface RegexScriptInfo {
  id: string;
  name: string;
  /** Stable, normalized identifier (lowercase + underscores). */
  scriptId: string;
  findRegex: string;
  replaceString: string;
  /** Any subset of \`gimsu\`. */
  flags: string;
  placement: RegexPlacement[];
  scope: RegexScope;
  scopeId: string | null;
  target: RegexTarget;
  minDepth: number | null;
  maxDepth: number | null;
  trimStrings: string[];
  runOnEdit: boolean;
  substituteMacros: RegexMacroMode;
  disabled: boolean;
  sortOrder: number;
  description: string;
  folder: string;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

interface RegexScriptListOptions {
  scope?: RegexScope;
  scopeId?: string;
  target?: RegexTarget;
  /** Default 50, max 200. */
  limit?: number;
  offset?: number;
}

interface RegexScriptActiveOptions {
  /** Required. The execution target to resolve for. */
  target: RegexTarget;
  characterId?: string;
  chatId?: string;
}

interface RegexScriptCreateInput {
  name: string;
  findRegex: string;
  replaceString?: string;
  flags?: string;
  placement?: RegexPlacement[];
  scope?: RegexScope;
  scopeId?: string | null;
  target?: RegexTarget;
  minDepth?: number | null;
  maxDepth?: number | null;
  trimStrings?: string[];
  runOnEdit?: boolean;
  substituteMacros?: RegexMacroMode;
  disabled?: boolean;
  sortOrder?: number;
  description?: string;
  folder?: string;
  metadata?: Record<string, unknown>;
  scriptId?: string;
}

type RegexScriptUpdateInput = Partial<RegexScriptCreateInput>;

/**
 * \`api.regexScripts.*\` — full CRUD over the user's regex find/replace
 * scripts. Requires the \`regex_scripts\` permission.
 *
 * Lifecycle events: scripts can subscribe to \`REGEX_SCRIPT_CHANGED\` and
 * \`REGEX_SCRIPT_DELETED\` via the \`@triggers\` directive to keep
 * extension-side caches in sync.
 *
 * @example
 * // Mirror Lumiverse's resolution for the current chat + character
 * const active = await api.regexScripts.getActive({
 *   target: 'display',
 *   chatId: data.chatId,
 *   characterId: data.characterId,
 * });
 */
interface RegexScriptsAPI {
  list(options?: RegexScriptListOptions): Promise<{ data: RegexScriptInfo[]; total: number }>;
  get(scriptId: string): Promise<RegexScriptInfo | null>;
  /** Convenience: page through \`list()\` and apply name filter locally. */
  findByName(name: string, scope?: RegexScope): Promise<RegexScriptInfo | null>;
  /** Resolve enabled rules for the given target + character/chat context. */
  getActive(options: RegexScriptActiveOptions): Promise<RegexScriptInfo[]>;
  create(input: RegexScriptCreateInput): Promise<RegexScriptInfo>;
  update(scriptId: string, input: RegexScriptUpdateInput): Promise<RegexScriptInfo>;
  delete(scriptId: string): Promise<boolean>;
}

interface WorldInfoAPI {
  list(options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfo[]; total: number }>;
  get(ref: WorldInfoRef): Promise<WorldInfo | null>;
  create(input: WorldInfoCreateInput): Promise<WorldInfo>;
  update(ref: WorldInfoRef, input: WorldInfoUpdateInput): Promise<WorldInfo>;
  delete(ref: WorldInfoRef): Promise<boolean>;
  entries: {
    list(ref: WorldInfoRef, options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfoEntry[]; total: number }>;
    get(entryId: string): Promise<WorldInfoEntry | null>;
    create(ref: WorldInfoRef, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    update(entryId: string, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    delete(entryId: string): Promise<boolean>;
    /**
     * Find all entries across ALL world books whose automationId starts
     * with the given prefix. Useful for enumerating / cleaning up entries
     * a script owns (e.g. 'lumiscript:<scriptId>:' for managed entries).
     * O(books × entries-per-book) — not recommended for hot paths.
     * Requires world_books permission.
     */
    listByAutomationIdPrefix(prefix: string): Promise<WorldInfoEntry[]>;
  };
  /**
   * Get all world info entries that would activate for the current (or specified) chat.
   * Runs the full Lumiverse activation pipeline. Requires world_books permission.
   */
  getCapturedActive(chatId?: string): Promise<ActivatedWorldInfoEntry[]>;
}

// ─── Personas API ─────────────────────────────────────────────────────────────

interface Persona {
  id: string; name: string; title: string; description: string;
  imageId: string | null; attachedWorldBookId: string | null;
  folder: string; isDefault: boolean; metadata: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface PersonaCreateInput {
  name: string; title?: string; description?: string; folder?: string;
  isDefault?: boolean; attachedWorldBookId?: string; metadata?: Record<string, unknown>;
}
interface PersonaUpdateInput {
  name?: string; title?: string; description?: string; folder?: string;
  isDefault?: boolean; attachedWorldBookId?: string; metadata?: Record<string, unknown>;
}

interface PersonasAPI {
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Persona[]; total: number }>;
  get(personaId: string): Promise<Persona | null>;
  getDefault(): Promise<Persona | null>;
  getActive(): Promise<Persona | null>;
  create(input: PersonaCreateInput): Promise<Persona>;
  update(personaId: string, input: PersonaUpdateInput): Promise<Persona>;
  delete(personaId: string): Promise<boolean>;
  /** Switch the active persona. Pass null to deactivate. Emits SETTINGS_UPDATED. */
  switchActive(personaId: string | null): Promise<void>;
  getWorldBook(personaId: string): Promise<WorldInfo | null>;
}

// ─── Databanks API ────────────────────────────────────────────────────────────

/** Activation scope for a databank. */
type DatabankScope = 'global' | 'character' | 'chat';

/** Lifecycle status of an uploaded document. */
type DatabankDocumentStatus = 'pending' | 'processing' | 'ready' | 'error';

interface DatabankInfo {
  id: string; name: string; description: string;
  scope: DatabankScope; scopeId: string | null;
  enabled: boolean; metadata: Record<string, unknown>;
  /** May be omitted on bulk list responses. */
  documentCount?: number;
  createdAt: number; updatedAt: number;
}

interface DatabankDocumentInfo {
  id: string; databankId: string;
  name: string; slug: string;
  mimeType: string; fileSize: number; contentHash: string;
  totalChunks: number; status: DatabankDocumentStatus;
  errorMessage: string | null; metadata: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}

interface DatabankCreateInput {
  name: string; description?: string;
  scope: DatabankScope;
  /** Required for 'character' and 'chat' scopes; omit for 'global'. */
  scopeId?: string | null;
}

/** Scope cannot be changed after creation. */
interface DatabankUpdateInput {
  name?: string; description?: string; enabled?: boolean;
}

interface DatabankDocumentCreateInput {
  /**
   * Document content. \`string\` values are UTF-8 encoded internally; pass a
   * \`Uint8Array\` directly when the source is already binary.
   *
   * Supported extensions: .txt, .md, .markdown, .csv, .tsv, .json, .xml,
   * .html, .htm, .yaml, .yml, .log, .rst, .rtf. Max size: 10 MB.
   */
  data: string | Uint8Array;
  /** Original filename, including extension. */
  filename: string;
  /** Optional MIME type recorded on the document. */
  mimeType?: string;
  /** Display name override. Defaults to \`filename\` minus the extension. */
  name?: string;
}

interface DatabankDocumentUpdateInput {
  /** New display name (the URL-safe slug is regenerated automatically). */
  name: string;
}

interface DatabankWaitUntilReadyOptions {
  /** Max wait, in ms. Default: 60_000. Throws on timeout. */
  timeoutMs?: number;
  /** Poll interval, in ms. Default: 500. */
  pollIntervalMs?: number;
}

interface DatabanksAPI {
  list(options?: { limit?: number; offset?: number; scope?: DatabankScope; scopeId?: string | null }): Promise<{ data: DatabankInfo[]; total: number }>;
  get(databankId: string): Promise<DatabankInfo | null>;
  /** Find a databank by display name within an optional scope. Returns the first match or null. */
  findByName(name: string, scope?: DatabankScope): Promise<DatabankInfo | null>;
  create(input: DatabankCreateInput): Promise<DatabankInfo>;
  update(databankId: string, input: DatabankUpdateInput): Promise<DatabankInfo>;
  delete(databankId: string): Promise<boolean>;
  documents: {
    list(databankId: string, options?: { limit?: number; offset?: number }): Promise<{ data: DatabankDocumentInfo[]; total: number }>;
    get(documentId: string): Promise<DatabankDocumentInfo | null>;
    /** Find a document by display name inside a databank. Returns the first match or null. */
    findByName(databankId: string, name: string): Promise<DatabankDocumentInfo | null>;
    /** Upload returns immediately with status='pending'. Use waitUntilReady() or poll get(). */
    create(databankId: string, input: DatabankDocumentCreateInput): Promise<DatabankDocumentInfo>;
    update(documentId: string, input: DatabankDocumentUpdateInput): Promise<DatabankDocumentInfo>;
    delete(documentId: string): Promise<boolean>;
    /** Returns null if the document doesn't exist OR has not finished processing. */
    getContent(documentId: string): Promise<{ content: string } | null>;
    /** Resets status to 'pending', drops vectors, queues for full reingestion. */
    reprocess(documentId: string): Promise<{ success: true; status: 'processing' }>;
    /** Polls until status === 'ready'. Throws on error/timeout/deletion. */
    waitUntilReady(documentId: string, options?: DatabankWaitUntilReadyOptions): Promise<DatabankDocumentInfo>;
  };
}

// ─── Council API (read-only, free tier) ──────────────────────────────────────

/** A single Council member assignment (member id + Lumia binding + role/chance). */
interface CouncilMember {
  id: string;
  packId: string;
  packName: string;
  itemId: string;
  itemName: string;
  /** Tool names this member is assigned. */
  tools: string[];
  /** Freeform role description (e.g. \`"Plot Enforcer"\`). */
  role: string;
  /** Probability (0–100) that this member participates each generation. */
  chance: number;
}

/** Settings governing Council tool execution. */
interface CouncilToolsSettings {
  /** @deprecated Tools are active when any member has tools assigned. */
  enabled?: boolean;
  /** \`'sidecar'\` uses a separate LLM; \`'inline'\` sends tools as function definitions to the main LLM. */
  mode: 'sidecar' | 'inline';
  /** Timeout per tool call in ms. */
  timeoutMs: number;
  /** Number of recent chat messages to include in sidecar context. */
  sidecarContextWindow: number;
  includeUserPersona: boolean;
  includeCharacterInfo: boolean;
  includeWorldInfo: boolean;
  /** Whether the user can trigger individual tools on demand. */
  allowUserControl: boolean;
  /** Word limit per tool response (0 = unlimited). */
  maxWordsPerTool: number;
  /** When true, council tools aren't re-executed on regenerations / swipes — last results are reused from chat metadata. */
  retainResultsForRegens?: boolean;
}

/** Top-level Council configuration object persisted per user. */
interface CouncilSettings {
  councilMode: boolean;
  members: CouncilMember[];
  toolsSettings: CouncilToolsSettings;
}

/**
 * Personality snapshot of a Council member (assignment + Lumia source data
 * merged into one record). Returned by \`api.council.getMembers()\` and also
 * delivered as the second arg to \`api.tools.register\` handlers when invoked
 * via the Council execution path.
 */
interface CouncilMemberContext {
  memberId: string;
  itemId: string;
  packId: string;
  packName: string;
  name: string;
  /** Freeform role description. */
  role: string;
  /** Probability (0–100) that this member participates each generation. */
  chance: number;
  /** Relative URL to the avatar (e.g. \`/api/v1/images/{id}\`), or null. */
  avatarUrl: string | null;
  /** Lumia "definition" field — physical/identity description. */
  definition: string;
  /** Lumia "personality" field. */
  personality: string;
  /** Lumia "behavior" field — behavioural patterns. */
  behavior: string;
  /** \`0\` = unspecified, \`1\` = feminine, \`2\` = masculine (per spindle-types 0.4.40). */
  genderIdentity: 0 | 1 | 2;
}

/**
 * A Lumia item available in the user's installed packs. Returned by
 * \`api.council.getAvailableLumiaItems()\`. Superset of what's currently
 * assigned to Council members (assignments live in
 * \`CouncilSettings.members\` / \`CouncilMemberContext[]\`).
 */
interface LumiaItem {
  id: string;
  packId: string;
  name: string;
  /** Relative URL to the avatar image, or null when no avatar is set. */
  avatarUrl: string | null;
  authorName: string;
  /** Physical / identity description. */
  definition: string;
  personality: string;
  /** Behavioural patterns. */
  behavior: string;
  /** \`0\` = unspecified, \`1\` = feminine, \`2\` = masculine. */
  genderIdentity: 0 | 1 | 2;
  /** Pack-author-supplied version string. */
  version: string;
  /** Sort index within the pack (lower renders first). */
  sortOrder: number;
  createdAt: number;
  updatedAt: number;
}

/**
 * \`api.council\` — read-only access to the user's Council configuration.
 * No permission required (free-tier surface). Useful for tailoring scripts
 * to the user's narrative directors. If you need the active Council member
 * inside a tool handler, prefer the \`ctx.councilMember\` arg passed
 * automatically to \`api.tools.register\` handlers — \`api.council\` is for
 * inspecting Council state OUTSIDE a tool execution cycle.
 */
interface CouncilAPI {
  /** Get the user's full Council settings (mode, members, tool settings). */
  getSettings(): Promise<CouncilSettings>;
  /** Get currently-assigned Council members with full Lumia context. */
  getMembers(): Promise<CouncilMemberContext[]>;
  /** Get all Lumia items available to the user across installed packs. */
  getAvailableLumiaItems(): Promise<LumiaItem[]>;
}

// ─── Tools API ────────────────────────────────────────────────────────────────

interface ToolInvocationArgs {
  /** Formatted chat context provided by Lumiverse (character info, world info, recent messages). */
  context?: string;
  /** The user ID of the invoking user. */
  __userId?: string;
  /** Timestamp (ms) by which the handler must return. */
  __deadlineMs?: number;
  [key: string]: unknown;
}

/**
 * Personality snapshot of the Council member that triggered a tool invocation.
 * Populated on \`ToolInvocationContext.councilMember\` only for Council paths.
 */
interface CouncilMemberContext {
  /** Unique Council member id (Council settings row id). */
  memberId: string;
  /** Source Lumia item id this member is backed by. */
  itemId: string;
  /** Pack id the Lumia item lives in. */
  packId: string;
  /** Pack name the Lumia item lives in. */
  packName: string;
  /** Display name of the Lumia item (also used as the member name). */
  name: string;
  /** Freeform role description (e.g. "Plot Enforcer"). */
  role: string;
  /** Probability (0-100) that this member participates in each generation. */
  chance: number;
  /** Relative URL to the member's avatar, or null. */
  avatarUrl: string | null;
  /** Lumia "definition" field — physical/identity description. */
  definition: string;
  /** Lumia "personality" field. */
  personality: string;
  /** Lumia "behavior" field — behavioural patterns. */
  behavior: string;
  /** Gender identity marker (0=unspecified, 1=feminine, 2=masculine). */
  genderIdentity: 0 | 1 | 2;
}

/**
 * Third argument to tool handlers — invocation context delivered by the host.
 * Populated on Lumiverse hosts with spindle-types 0.4.18+; undefined on older.
 */
interface ToolInvocationContext {
  /**
   * Council-member snapshot when the tool was invoked via a Council cycle.
   * Undefined for inline function-calling, \`api.tools.invoke()\`, or older hosts.
   * Pass this to \`buildCouncilMessages\` from \`ls:council-prompt\`.
   */
  councilMember?: CouncilMemberContext;
  /**
   * Structured chat context for Council invocations — same content as
   * \`args.context\` but with role boundaries preserved. Prefer this over the
   * flattened string when available. Requires host commit 993544c8+ / spindle-
   * types 0.4.26+; undefined on older hosts.
   */
  contextMessages?: LLMMessage[];
}

interface ToolDefinition {
  /** Human-readable name shown in the Council tools list. */
  display_name: string;
  /** Description for the LLM — explains what the tool does and when to call it. */
  description: string;
  /** JSON Schema describing input parameters. */
  parameters?: Record<string, unknown>;
  /** When true, the tool appears in Lumiverse's Council tools list. Default: false. */
  council_eligible?: boolean;
}
type ToolHandler = (
  args: ToolInvocationArgs,
  api: LumiScriptAPI,
  ctx?: ToolInvocationContext,
) => string | Promise<string>;
interface RegisteredToolInfo {
  name: string; display_name: string; description: string;
  parameters?: Record<string, unknown>; council_eligible: boolean;
  scriptId: string; scriptName: string;
}

interface ToolsAPI {
  /**
   * Register an LLM tool invocable by Lumiverse Council or inline function-calling.
   * The handler receives (args, api) and must return a string.
   * Requires tools permission.
   * @example
   * api.tools.register('weather', {
   *   display_name: 'Weather Lookup',
   *   description: 'Get current weather for a city.',
   *   parameters: { type: 'object', properties: { city: { type: 'string' } }, required: ['city'] },
   *   council_eligible: true,
   * }, async (args, api) => {
   *   return \`Weather in \${args.city}: sunny, 22°C\`;
   * });
   */
  register(name: string, def: ToolDefinition, handler: ToolHandler): void;
  /** Unregister a tool registered by this script. No-op if not found. */
  unregister(name: string): void;
  /** List all currently registered tools across all scripts. */
  list(): RegisteredToolInfo[];
  /**
   * Invoke a registered tool handler directly (no Lumiverse routing needed).
   * Use inside an agentic loop to execute LLM-requested function calls.
   * @example
   * const result = await api.tools.invoke(call.name, call.args);
   */
  invoke(name: string, args?: Record<string, unknown>): Promise<string>;
}

// ─── Broadcast API ────────────────────────────────────────────────────────────

/**
 * Worker-scoped pub/sub bus for real-time script-to-script communication.
 * No permission required. LumiScript reserves the \`ls:\` prefix for built-in events.
 *
 * Built-in events:
 * - \`ls:tool:registered\`   { name, scriptId }
 * - \`ls:tool:unregistered\` { name, scriptId }
 * - \`ls:tool:invoked\`      { name, args, result, scriptId, callMs }
 */
interface BroadcastAPI {
  /**
   * Emit a named event to all subscribed handlers across all scripts.
   * @example
   * api.broadcast.emit('analysis:done', { summary: 'All clear.' });
   */
  emit(event: string, payload?: unknown): void;
  /**
   * Subscribe to a named event. Returns an unsubscribe function.
   * Subscriptions are auto-cleaned when the owning script is disabled or deleted.
   *
   * **Async-tracking opt-in (LumiScript ≥0.26.4):** RETURN a Promise from
   * the handler to make the sidebar status indicator track the awaited
   * work. Fire-and-forget handlers (\`void (...)()\`) produce no status
   * update; sync handlers don't either.
   *
   * @example  RETURN the async IIFE → status dot blinks amber until settle
   * api.broadcast.on('tracker:request-rerun', (payload) =>
   *   (async () => { await runRerun(payload); })()
   * );
   *
   * @example  classic sync handler
   * const unsub = api.broadcast.on('ls:tool:invoked', (ev) => {
   *   console.log(ev.name, 'took', ev.callMs, 'ms');
   * });
   */
  on(event: string, handler: (payload: unknown) => void): () => void;
}

// ─── RPC pool (cross-extension) ────────────────────────────────────────────────

interface RpcRequestContext {
  endpoint: string;
  requesterExtensionId: string;
}

/**
 * Cross-extension shared RPC pool — wraps Spindle's \`spindle.rpcPool\`.
 * Two-tier namespacing: every endpoint is fully-qualified as
 * \`lumiscript.<scriptSlug>.<channel>\` where scriptSlug auto-derives from
 * the calling script's name, overridable via \`options.as\`. Free tier (no
 * permission). Endpoints auto-unregister on script disable / delete /
 * stale-after-re-run.
 */
interface RpcAPI {
  /** Publish the latest value on a channel. Returns the fully-qualified endpoint. */
  sync<T = unknown>(channel: string, value: T, options?: { as?: string }): Promise<string>;
  /** Register an on-demand handler. Returns the fully-qualified endpoint. */
  handle<T = unknown>(
    channel: string,
    handler: (ctx: RpcRequestContext) => T | Promise<T>,
    options?: { as?: string },
  ): Promise<string>;
  /** Read a value from another extension's published endpoint (\`<extensionId>.<channel>\`). */
  read<T = unknown>(endpoint: string): Promise<T>;
  /** Remove a channel previously published by the calling script. Idempotent. */
  unregister(channel: string, options?: { as?: string }): Promise<void>;
}

// ─── Commands API ──────────────────────────────────────────────────────────────

type CommandScope = 'global' | 'chat' | 'chat-idle' | 'landing' | 'character';

interface CommandDefinition {
  /** Unique identifier for this command. */
  id: string;
  /** Display label shown in the command palette. Max 80 characters. */
  label: string;
  /** Description shown below the label. Max 200 characters. */
  description: string;
  /** Optional search keywords for fuzzy matching. */
  keywords?: string[];
  /** Scope controlling when the command appears. Default: 'global'. */
  scope?: CommandScope;
}

interface CommandContext {
  /** Current route path (e.g. "/chat/abc-123"). */
  route: string;
  /** Active chat ID, if in a chat view. */
  chatId?: string;
  /** Active character ID, if available. */
  characterId?: string;
  /** Whether the active chat is a group chat. */
  isGroupChat?: boolean;
}

interface CommandsAPI {
  /**
   * Register command palette entries. Each call replaces the full set.
   * Max 20 commands per extension.
   * @example
   * api.commands.register([
   *   { id: 'summarize', label: 'Summarize Chat', description: 'Generate a chat summary', scope: 'chat' },
   * ]);
   */
  register(commands: CommandDefinition[]): void;
  /** Remove specific commands by ID, or all if no IDs given. */
  unregister(commandIds?: string[]): void;
  /**
   * Register a handler called when the user selects a command.
   * Returns an unsubscribe function.
   * @example
   * api.commands.onInvoked((id, ctx) => {
   *   if (id === 'summarize') {
   *     // ctx.chatId, ctx.characterId available
   *   }
   * });
   */
  onInvoked(handler: (commandId: string, context: CommandContext) => void | Promise<void>): () => void;
}

// ─── Events API ──────────────────────────────────────────────────────────────

/** Severity level for tracked events. */
type EventLevel = 'debug' | 'info' | 'warn' | 'error';

/** Options for api.events.track(). */
interface EventTrackOptions {
  /** Severity level (default: 'info'). */
  level?: EventLevel;
  /** Associate with a specific chat (defaults to active chat). */
  chatId?: string;
  /** Auto-expire after this many days. */
  retentionDays?: number;
}

/** Filter for api.events.query() and api.events.replay(). */
interface EventQueryFilter {
  /** Filter by event name. */
  eventName?: string;
  /** Filter by chat. */
  chatId?: string;
  /** ISO 8601 — only events after this timestamp. */
  since?: string;
  /** ISO 8601 — only events before this timestamp. */
  until?: string;
  /** Filter by severity level. */
  level?: EventLevel;
  /** Maximum number of results. */
  limit?: number;
}

/** A single tracked event record. */
interface EventRecord {
  id: string;
  /** ISO 8601 timestamp. */
  ts: string;
  eventName: string;
  level: EventLevel;
  chatId?: string;
  payload?: Record<string, unknown>;
}

interface EventsAPI {
  /**
   * Record a named event with optional payload and options.
   * Requires event_tracking permission.
   * @example
   * await api.events.track('user_action', { action: 'clicked_button' });
   * await api.events.track('error_occurred', { msg: 'timeout' }, { level: 'error' });
   */
  track(eventName: string, payload?: Record<string, unknown>, options?: EventTrackOptions): Promise<void>;
  /**
   * Query persisted events (newest-first).
   * Requires event_tracking permission.
   * @example
   * const recent = await api.events.query({ eventName: 'user_action', limit: 10 });
   */
  query(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Replay persisted events in chronological order (oldest-first).
   * Requires event_tracking permission.
   * @example
   * const history = await api.events.replay({ since: '2026-01-01' });
   */
  replay(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Retrieve the latest known state for a set of keys.
   * Useful for resuming stateful scripts after restarts.
   * Requires event_tracking permission.
   * @example
   * const state = await api.events.getLatestState(['counter', 'lastSeen']);
   */
  getLatestState(keys: string[]): Promise<Record<string, unknown>>;
}

// ─── Macros API ──────────────────────────────────────────────────────────────

/** Parameter passed to a pull-mode macro handler at resolution time. */
interface MacroContext {
  /** The bare macro name (no \`{{}}\`, no arguments). */
  name: string;
  /** Argument tokens parsed from the macro invocation. */
  args: string[];
  /** Environment context populated by the macro engine. */
  env?: {
    character?: { id?: string; name?: string; [k: string]: unknown };
    chat?:      { id?: string; [k: string]: unknown };
    names?:     { char?: string; user?: string; [k: string]: unknown };
    variables?: { local?: Record<string, string>; global?: Record<string, string> };
    [k: string]: unknown;
  };
  /** True when resolved inside a scoped block (e.g. \`{{if::…}}…{{/if}}\`). */
  isScoped?: boolean;
  /** Body text for scoped macros. */
  body?: string;
}

type MacroHandler = (ctx: MacroContext) => string | Promise<string>;

interface MacroDefinition {
  /** Human-readable description shown in preset editors and macro browsers. */
  description: string;
  /** Category label. Default: 'extension:lumiscript:user'. */
  category?: string;
  /** Return-type hint for value coercion. Default string. */
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  /** Argument schema shown to preset authors. */
  args?: { name: string; description?: string; required?: boolean }[];
  /**
   * Mark the macro as producing output that isn't a pure function of its
   * args + tracked env reads (time, randomness, IO, mutable external state).
   * The host's display-regex cache will skip storing resolutions that
   * include a volatile macro, preventing stale reads across renders.
   *
   * LumiScript-specific defaults:
   *   - Pull-mode (handler provided)  → \`true\` (safe default; LumiScript
   *     handlers typically read external state via api.* that the host's
   *     fingerprinter can't see)
   *   - Push-mode (no handler)        → \`false\` (push-mode resolution is
   *     pure relative to push events; host invalidates on updateValue)
   *
   * Set explicit \`false\` only when you know the handler is pure-from-args
   * (no api.* reads, no Date / Math.random, no mutable closure state).
   *
   * Available on Lumiverse host ≥0.9.7. Older builds silently ignore.
   */
  volatile?: boolean;
}

/** Returned by api.macros.list(). */
interface RegisteredMacroInfo {
  name: string;
  description: string;
  category: string;
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  args?: { name: string; description?: string; required?: boolean }[];
  /** Push = registered without handler (value set via updateValue). Pull = handler-backed. */
  mode: 'push' | 'pull';
  /** Most recent value pushed via updateValue. Only meaningful in push mode. */
  lastValue?: string;
  scriptId: string;
  scriptName: string;
}

// ─── Macro interceptor (api.macros.registerInterceptor) ─────────────────────

/**
 * Phase tag passed to a macro interceptor. Lets handlers gate their work
 * to specific call sites — e.g. \`phase === 'prompt'\` for prompt-assembly
 * only. Pre-filtered before invocation when the registration specifies
 * \`phase\`.
 */
type MacroInterceptorPhase = 'prompt' | 'display' | 'response' | 'other';

/**
 * Read-only snapshot of the macro evaluation environment passed to a
 * macro interceptor handler. Mutating these values has NO effect on the
 * real environment. Persist state via \`api.variables.*\`, \`api.db.*\`,
 * or \`api.macros.updateValue()\` instead.
 */
interface MacroInterceptorEnv {
  readonly commit: boolean;
  readonly names: Record<string, string>;
  readonly character: Record<string, unknown>;
  readonly chat: Record<string, unknown>;
  readonly system: Record<string, unknown>;
  readonly variables: {
    readonly local: Record<string, string>;
    readonly global: Record<string, string>;
    readonly chat: Record<string, string>;
  };
  /**
   * Per-call macro overrides supplied by the caller. The display-regex
   * pipeline (\`phase === 'display'\`) sets \`chat_index\` to the rendered
   * message's index in the chat. Other callers may set additional fields.
   * Available on Lumiverse host ≥0.9.7; guard with \`?? {}\` for older builds.
   */
  readonly dynamicMacros?: Record<string, string>;
  readonly extra: Record<string, unknown>;
}

/**
 * Context passed to a macro interceptor handler. Receives the current raw
 * template (already transformed by any earlier interceptors in the chain)
 * and returns either a transformed template string or \`void\` to pass through.
 */
interface MacroInterceptorCtx {
  readonly template: string;
  readonly env: MacroInterceptorEnv;
  readonly commit: boolean;
  readonly phase: MacroInterceptorPhase;
  readonly sourceHint?: string;
  /** User ID that initiated the macro resolution (when available). */
  readonly userId?: string;
}

type MacroInterceptorHandler = (
  ctx: MacroInterceptorCtx,
) => string | void | Promise<string | void>;

/** Registration options for \`api.macros.registerInterceptor\`. */
interface MacroInterceptorOptions {
  /** Stable identifier. Re-registration with the same id from the same script replaces. */
  id?: string;
  /** Lower runs first within the LumiScript multiplexer pass. Default 100. */
  priority?: number;
  /**
   * Restrict the handler to specific evaluation phases. Default: all phases.
   * Pre-filtered before invocation.
   */
  phase?: MacroInterceptorPhase | MacroInterceptorPhase[];
  /**
   * Pre-filter on template content. Skip the handler unless the template
   * contains the marker(s).
   *  - \`string\` — simple \`includes\` check.
   *  - \`string[]\` — any-of (skip unless at least one element is present).
   *  - \`RegExp\` — skip unless the regex matches.
   *
   * Most common use: gating on a macro family namespace like \`'{{tracker.'\`
   * so handlers don't write the same \`if (!ctx.template.includes(...)) return\`
   * boilerplate.
   */
  matchTemplate?: string | string[] | RegExp;
  /** Per-invocation soft timeout in ms. Default 2000. */
  timeoutMs?: number;
}

/** Handle returned by \`registerInterceptor\`. \`remove()\` deregisters. */
interface MacroInterceptorHandle {
  readonly id: string;
  remove(): void;
}

/** Snapshot returned by \`api.macros.listInterceptors()\`. */
interface RegisteredMacroInterceptorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** \`null\` when no phase filter was supplied. */
  phases: MacroInterceptorPhase[] | null;
  /**
   * Stringified template-marker filter, or \`null\` when no filter was supplied.
   * RegExps are stringified via \`String(regexp)\`; string-array filters are
   * preserved as arrays.
   */
  matchTemplate: string[] | string | null;
  timeoutMs: number;
}

/**
 * Register Lumiverse macros from scripts. Two modes:
 *  - **Push** (no handler) — set values via \`updateValue(name, value)\`.
 *  - **Pull** (with handler) — computed at resolution time.
 *
 * No permission required. Reserved LS-internal names (\`lumiScriptActive\`,
 * the 7 char-var macros + aliases) can't be overwritten.
 */
interface MacrosAPI {
  /**
   * Register a macro.
   * @example
   * // Push mode:
   * api.macros.register('playerMood', { description: 'Current mood' });
   * api.macros.updateValue('playerMood', 'curious');
   * @example
   * // Pull mode:
   * api.macros.register('randomLine', { description: 'Random flavor' }, (ctx) => {
   *   return pickRandomLine(ctx.args[0]);
   * });
   */
  register(name: string, def: MacroDefinition, handler?: MacroHandler): void;
  /** Push a new value for a push-mode macro. Throws if the macro is pull-mode. */
  updateValue(name: string, value: string): void;
  /** Unregister a macro owned by this script. No-op if not found or not owned. */
  unregister(name: string): void;
  /** List all currently registered macros across all scripts. */
  list(): RegisteredMacroInfo[];

  /**
   * Register a macro interceptor — handler that receives the RAW template
   * before Lumiverse parses it, and returns either a transformed template
   * or \`void\` to pass through. Requires \`macro_interceptor\` permission.
   *
   * Use when per-macro RPC cost dominates iteration-heavy templates like
   * \`{{#each LARGE_LIST}}…{{my_macro}}…{{/each}}\` — one interceptor call
   * resolves all hits in-worker instead of paying N RPCs across the
   * worker boundary. For single non-iterated macros, prefer \`register()\`.
   *
   * **Critical perf**: handler runs on a hot path (every prompt-assembly
   * evaluate pass). Each invocation has a 2-second soft timeout
   * (configurable). DO NOT call \`api.llm.*\` or \`api.utils.http.*\` from
   * a handler — pre-compute via a trigger handler, store in \`api.db.*\`,
   * read here.
   *
   * Returns a handle whose \`remove()\` deregisters the handler.
   *
   * @example
   * const handle = api.macros.registerInterceptor((ctx) => {
   *   const intensity = api.db.collection({ scope: 'chat' })
   *     .get('tracker:state')?.intensity ?? 0;
   *   return ctx.template.replaceAll('{{tracker.intensity}}', String(intensity));
   * }, { matchTemplate: '{{tracker.', priority: 100 });
   */
  registerInterceptor(
    handler: MacroInterceptorHandler,
    options?: MacroInterceptorOptions,
  ): MacroInterceptorHandle;

  /** List all currently registered macro interceptors (across all scripts). Diagnostic surface — un-gated. */
  listInterceptors(): RegisteredMacroInterceptorInfo[];
}

// ─── Tokens API ──────────────────────────────────────────────────────────────

/** Options accepted by every \`api.tokens.*\` method. */
interface TokenCountOptions {
  /** Explicit model name (overrides modelSource). */
  model?: string;
  /** Which LLM profile's tokenizer to use. Default: 'main'. */
  modelSource?: 'main' | 'sidecar';
}

/** Shape returned by every \`api.tokens.*\` method. */
interface TokenCountResult {
  totalTokens: number;
  model: string;
  modelSource: 'main' | 'sidecar';
  tokenizerId: string;
  tokenizerName: string;
  /** \`true\` when no tokenizer matched; count fell back to char/4 heuristic. */
  approximate: boolean;
}

/**
 * Server-side token counting using the provider's actual tokenizer.
 * Free-tier. Falls back to char/4 heuristic with \`approximate: true\`
 * when no tokenizer matches the selected connection.
 */
interface TokensAPI {
  /**
   * Count tokens in an arbitrary string.
   * @example
   * const { totalTokens } = await api.tokens.countText(prompt);
   */
  countText(text: string, options?: TokenCountOptions): Promise<TokenCountResult>;
  /**
   * Count tokens across an array of \`{ role, content }\` messages — accepts
   * the output of \`api.chat.getMessages()\` directly.
   */
  countMessages(messages: LLMMessage[], options?: TokenCountOptions): Promise<TokenCountResult>;
  /** Count tokens for a live stored chat by ID. */
  countChat(chatId: string, options?: TokenCountOptions): Promise<TokenCountResult>;
}

// ─── DB API ──────────────────────────────────────────────────────────────────

/**
 * Record shape produced by \`api.db.*\`. Every inserted record carries
 * auto-generated \`id\` + \`createdAt\` / \`updatedAt\` timestamps. \`id\` and
 * \`createdAt\` are immutable — \`update()\` silently strips them from the
 * patch. \`updatedAt\` bumps to Date.now() on every successful update.
 */
interface DbRecord {
  id: string;
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}

/** Scope of a collection — determines the storage path + lifetime. */
type DbScope = 'script' | 'character' | 'chat';

/**
 * Filter shapes accepted by find / findOne / update / delete / count:
 *
 *   - \`undefined\` → matches all records.
 *   - function \`(r) => boolean\` → caller predicate.
 *   - object (literal) \`Partial<T>\` → deep-equality with dot-notation
 *     path resolution. \`{ 'author.name': 'alice' }\` works on nested fields.
 *   - object (operator envelope) \`{ field: { $op: arg, ... } }\` — all keys
 *     inside the envelope must start with \`$\`. Mixed-key envelopes throw.
 *
 * Supported operators (LumiScript 0.20.0+):
 *   - \`$eq\` / \`$ne\` — structural (in)equality.
 *   - \`$gt\` / \`$gte\` / \`$lt\` / \`$lte\` — numeric comparison (type-mismatch = false, never throws).
 *   - \`$in\` / \`$nin\` — membership / non-membership in an array.
 *   - \`$exists: true | false\` — field presence (null counts as present).
 *   - \`$regex\` — string pattern. Accepts a \`RegExp\` instance OR
 *     \`{ $regex: 'pat', $options?: 'i' }\`. Direct \`RegExp\` value is
 *     also accepted as a shorthand: \`{ name: /alice/i }\`.
 */
type DbFilter<T = DbRecord> =
  | undefined
  | Partial<T>
  | ((record: T) => boolean);

interface CollectionOpts<T extends DbRecord = DbRecord> {
  /** Scope of the collection. Defaults to 'script'. */
  scope?: DbScope;
  /**
   * Optional Zod (or any \`parse(data): T\`) schema applied on every write —
   * insert / insertMany / update. On update the MERGED record is validated,
   * not the raw patch. Reserved fields are preserved even when Zod's
   * default object-schema strips unknown keys. \`find\` / \`findOne\` /
   * \`count\` / \`query\` are NOT validated — schema evolution is drop + re-insert.
   */
  schema?: ZodLike<T>;
}

interface Collection<T extends DbRecord = DbRecord> {
  /**
   * Insert one record. Auto-assigns id / createdAt / updatedAt.
   * @example
   * await rolls.insert({ notation: '1d20+3', total: 18 });
   */
  insert(record: Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>): Promise<T>;
  /**
   * Batch-insert N records with a single file-write. All share the same
   * timestamp (batch-commit semantic). Atomic: if schema/size guard rejects
   * any record, nothing lands. Fires one \`ls:collection:inserted\` event
   * per record in insertion order. (0.20.0+)
   * @example
   * await rolls.insertMany([
   *   { notation: '1d20+3', total: 18 },
   *   { notation: '2d6',    total:  7 },
   * ]);
   */
  insertMany(records: Array<Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>>): Promise<T[]>;
  /**
   * Find all records matching the filter. \`undefined\` matches all.
   * Filter accepts literal partials, function predicates, or operator
   * envelopes — see DbFilter.
   * @example
   * await rolls.find({ margin: { $gt: 0 }, tier: { $in: ['hard', 'very_hard'] } });
   */
  find(filter?: DbFilter<T>): Promise<T[]>;
  /** Find the first record matching the filter. Returns null on no match. */
  findOne(filter: DbFilter<T>): Promise<T | null>;
  /**
   * Update matching records with the given patch. Returns count.
   * id / createdAt / updatedAt cannot be overwritten — stripped silently.
   * updatedAt bumps to Date.now() on every match.
   */
  update(filter: DbFilter<T>, patch: Partial<T>): Promise<number>;
  /** Delete matching records. Returns count. */
  delete(filter: DbFilter<T>): Promise<number>;
  /** Count matching records (or all if filter omitted). */
  count(filter?: DbFilter<T>): Promise<number>;
  /** Remove all records, leaving an empty collection file. */
  clear(): Promise<void>;
  /**
   * Run a jsonquery string against the full collection. Escape hatch for
   * aggregations / sorts / projections beyond the filter model.
   * @example
   * await rolls.query('groupBy(.difficultyTier) | mapValues(size())');
   */
  query<R = unknown>(jsonQuery: string): Promise<R>;
}

/**
 * JSON-file-backed micro-DB namespace. Collections are owner-scoped by
 * scriptId — scripts cannot see or mutate other scripts' collections.
 * No permission required. Size governance: soft-warn at 10 MB, hard-stop
 * at 50 MB per collection.
 */
interface DbAPI {
  /**
   * Open or create a collection. Path resolves at creation and is baked
   * into the handle. Throws if the scope requires context the script
   * lacks (e.g. \`scope: 'chat'\` with no active chat).
   * @example
   * const rolls = await api.db.collection('dice-rolls', {
   *   scope: 'character',
   *   schema: z.object({ notation: z.string(), total: z.number().int() }),
   * });
   */
  collection<T extends DbRecord = DbRecord>(name: string, opts?: CollectionOpts<T>): Promise<Collection<T>>;
  /** List collection names in the given scope (default 'script'). Owner-scoped. */
  list(scope?: DbScope): Promise<string[]>;
  /** Delete a collection entirely. No-op if it doesn't exist. */
  drop(name: string, scope?: DbScope): Promise<void>;
  /**
   * O(1) existence check for a collection file. Does NOT load or parse.
   * Ownership-safe — only sees this script's own collections.
   * (0.20.0+)
   */
  exists(name: string, scope?: DbScope): Promise<boolean>;
}

// ─── Top-level API ────────────────────────────────────────────────────────────

interface LumiScriptAPI {
  chat: ChatAPI;
  llm: LLMAPI;
  variables: VariablesAPI;
  json: JSONAPI;
  utils: UtilsAPI;
  /** User-facing notifications and dialogs. */
  ui: UIAPI;
  /** Character CRUD. Requires characters permission. */
  characters: CharactersAPI;
  /** Chat session management. Requires chats permission. */
  chats: ChatsAPI;
  /** World Info / Lorebook CRUD. Requires world_books permission. */
  worldInfo: WorldInfoAPI;
  /** Databank (vectorised document collection) CRUD + per-document upload, fetch, and reprocess. Requires databanks permission. */
  databanks: DatabanksAPI;
  /** Persona CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
  /** Regex find/replace script CRUD plus context-aware \`getActive\` resolver. Requires regex_scripts permission. */
  regexScripts: RegexScriptsAPI;
  /** Read-only access to the user's Council configuration: settings, members, and the available Lumia-item pool. No permission required. */
  council: CouncilAPI;
  /** File storage across three tiers. Requires allowDangerous. */
  files: FilesAPI;
  /** AES-256-GCM encrypted per-user secret storage. Requires allowDangerous. */
  enclave: EnclaveAPI;
  /** Register LLM tools for Council and inline function-calling. Requires tools permission. */
  tools: ToolsAPI;
  /** Real-time script-to-script pub/sub. No permission required. */
  broadcast: BroadcastAPI;
  /** Cross-extension shared RPC pool. Publish state, register on-demand handlers, or read another extension's endpoints. Free tier — no permission required. */
  rpc: RpcAPI;
  /** Register commands in the Lumiverse command palette (Cmd/Ctrl+K). No permission required. */
  commands: CommandsAPI;
  /** Persistent event tracking (track, query, replay). Requires event_tracking permission. */
  events: EventsAPI;
  /** Register custom Lumiverse macros for use in prompt templates. No permission required. */
  macros: MacrosAPI;
  /** Token counting for prompt-budget planning. No permission required. */
  tokens: TokensAPI;
  /** JSON-file-backed micro-DB. Owner-scoped collections, no permission required. */
  db: DbAPI;
}

interface ScriptNamespace {
  /** This script's stable UUID. Use as owner key for external state. */
  id: string;
  /** This script's current human-readable name (tracks Script Manager). */
  name: string;
  /** This script's type — 'trigger' or 'library'. */
  type: 'trigger' | 'library';
  /**
   * Load a library script by name or ID (lazy, cached per execution).
   * Built-in libraries use the ls: prefix (e.g. 'ls:components').
   * Throws if the library is not found or if a circular dependency is detected.
   * @example
   * const myLib = await script.require('My Helper Library');
   * const result = myLib.processData(input);
   * @example
   * const { messageFooter } = await script.require('ls:components');
   */
  require(nameOrId: string): Promise<unknown>;
  /** Type-safe overload for the built-in components library. */
  require(nameOrId: 'ls:components'): Promise<LSComponentsExports>;
  /** Type-safe overload for the built-in council-prompt library. */
  require(nameOrId: 'ls:council-prompt'): Promise<LSCouncilPromptExports>;
  /** Type-safe overload for the built-in icons library. */
  require(nameOrId: 'ls:icons'): Promise<LSIconsExports>;
}

// ─── Built-in library: ls:icons ─────────────────────────────────────────────

// @BEGIN-ICON-NAMES — generated by scripts/generate-icons.ts; do not edit by hand
type IconName
  = 'activity'
  | 'alertCircle'
  | 'alertTriangle'
  | 'archive'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowUpRight'
  | 'atSign'
  | 'ban'
  | 'bell'
  | 'bellOff'
  | 'book'
  | 'bookMarked'
  | 'bookOpen'
  | 'bookmark'
  | 'boxes'
  | 'braces'
  | 'bug'
  | 'calendar'
  | 'calendarDays'
  | 'camera'
  | 'check'
  | 'checkCheck'
  | 'checkSquare'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'chevronsLeftRight'
  | 'chevronsUpDown'
  | 'circle'
  | 'circleCheck'
  | 'circleHelp'
  | 'circleUserRound'
  | 'clipboard'
  | 'clipboardCopy'
  | 'clipboardList'
  | 'clock'
  | 'code2'
  | 'command'
  | 'compass'
  | 'copy'
  | 'cornerUpLeft'
  | 'cpu'
  | 'crown'
  | 'database'
  | 'dot'
  | 'download'
  | 'downloadCloud'
  | 'ellipsis'
  | 'externalLink'
  | 'eye'
  | 'eyeOff'
  | 'file'
  | 'fileCode2'
  | 'filePlus'
  | 'fileText'
  | 'film'
  | 'filter'
  | 'flag'
  | 'flame'
  | 'folder'
  | 'folderOpen'
  | 'gift'
  | 'gitBranch'
  | 'globe'
  | 'grid2x2'
  | 'hardDrive'
  | 'hash'
  | 'heart'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'key'
  | 'layers'
  | 'link'
  | 'list'
  | 'loaderCircle'
  | 'lock'
  | 'mapPin'
  | 'menu'
  | 'messageCircle'
  | 'messageSquare'
  | 'mic'
  | 'micOff'
  | 'minus'
  | 'minusCircle'
  | 'moreHorizontal'
  | 'moreVertical'
  | 'mousePointer'
  | 'move'
  | 'music'
  | 'network'
  | 'package'
  | 'paperclip'
  | 'pause'
  | 'pencil'
  | 'pin'
  | 'play'
  | 'plus'
  | 'plusCircle'
  | 'printer'
  | 'puzzle'
  | 'refreshCcw'
  | 'refreshCw'
  | 'rotateCw'
  | 'save'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'settings2'
  | 'share2'
  | 'shield'
  | 'shieldAlert'
  | 'shieldCheck'
  | 'shieldX'
  | 'sliders'
  | 'smile'
  | 'sparkles'
  | 'square'
  | 'star'
  | 'table'
  | 'tag'
  | 'terminal'
  | 'thumbsDown'
  | 'thumbsUp'
  | 'timer'
  | 'toggleLeft'
  | 'toggleRight'
  | 'trash'
  | 'trash2'
  | 'unlock'
  | 'upload'
  | 'uploadCloud'
  | 'user'
  | 'userMinus'
  | 'userPlus'
  | 'users'
  | 'video'
  | 'volume2'
  | 'volumeX'
  | 'wrench'
  | 'x'
  | 'xCircle'
  | 'xSquare'
  | 'zap';
// @END-ICON-NAMES

/**
 * Exports of the \`ls:icons\` built-in library — a curated subset of Lucide
 * icons pre-serialized as inline SVG strings, ready to drop into DOM-injected
 * UIs and host-UI \`iconSvg\` options (input-bar actions, drawer tabs, float
 * widgets, advanced modals).
 *
 * All SVGs render at 24x24 by default with \`stroke: currentColor\` and
 * \`fill: none\`, so they inherit text color from their parent element.
 * Override dimensions via \`sized(name, pixels)\` or via CSS — \`viewBox\` is
 * preserved so the icon scales cleanly.
 *
 * For the full ~1944-icon lucide catalog, see https://lucide.dev. This
 * library ships a ~150-icon subset chosen to cover the 80/20 of typical UI
 * needs; a dynamic-lookup escape hatch for the long tail may arrive in a
 * future release.
 *
 * @example
 * const { svg, sized } = await script.require('ls:icons');
 * api.ui.registerInputBarAction({
 *   id: 'save', label: 'Save draft',
 *   iconSvg: svg.save,
 * });
 * // Or in a DOM injection:
 * api.ui.dom.inject('#chat-header', \`<h2>\${svg.sparkles} Ready</h2>\`);
 * // Custom size:
 * const tinyHeart = sized('heart', 14);
 */
interface LSIconsExports {
  /**
   * Map of icon name to inline SVG string. Direct property access is
   * sync and typed — hover on any key for lucide's official icon name.
   */
  svg: Record<IconName, string>;
  /**
   * Return \`svg[name]\` with \`width\`/\`height\` attributes overridden to
   * \`pixels\`. The \`viewBox\` is preserved so the icon scales cleanly.
   * @example
   * const chip = sized('check', 12);  // 12x12 check icon
   */
  sized(name: IconName, pixels: number): string;
  /**
   * Size the icon to match the host's built-in input-bar action rendering
   * (14x14). Equivalent to \`sized(name, 14)\`. Passing the default 24x24
   * \`svg[name]\` to \`api.ui.registerInputBarAction\`'s \`iconSvg\` option
   * causes the SVG's explicit width/height attrs to override the host's
   * 14x14 container, leaving the icon visually misaligned with the label.
   * Use this helper to avoid that.
   * @example
   * api.ui.registerInputBarAction({
   *   id: 'save', label: 'Save draft',
   *   iconSvg: forInputBar('save'),
   * });
   */
  forInputBar(name: IconName): string;
  /**
   * All icon names available in this library. Useful for building a
   * picker UI inside a script.
   * @example
   * for (const name of names()) console.log(name, svg[name]);
   */
  names(): IconName[];
}

// ─── Built-in library: ls:council-prompt ────────────────────────────────────

/** Options for \`buildCouncilSystemPrompt\` from \`ls:council-prompt\`. */
interface CouncilSystemPromptOptions {
  /**
   * Council member snapshot. Unwrap from \`ctx.councilMember\` — this helper is
   * only meaningful when the tool was invoked via a Council execution cycle.
   */
  councilMember: CouncilMemberContext;
  /** Tool display-name + description + optional per-tool prompt directive. */
  tool: {
    display_name: string;
    description: string;
    /** Tool-specific directive appended after the description. */
    prompt?: string;
  };
  /** Per-tool word budget. Pass 0 or omit to skip the brevity note. */
  maxWordsPerTool?: number;
  /** Whether the tool may direct the user-character's actions. Default false. */
  allowUserControl?: boolean;
  /**
   * Additional text appended after \`tool.prompt\`, before the brevity note.
   * Include your own leading \`\\n\\n\` if you want paragraph separation.
   */
  dynamicSuffix?: string;
}

/** Options for \`buildCouncilMessages\` from \`ls:council-prompt\`. */
interface CouncilMessagesOptions extends CouncilSystemPromptOptions {
  /** Tool invocation args. Used as a fallback source of chat context. */
  args: ToolInvocationArgs;
  /**
   * Structured chat context from \`ToolInvocationContext.contextMessages\`.
   * Preferred when available (preserves role boundaries for better voice
   * continuity). Requires Lumiverse host 993544c8+ / spindle-types 0.4.26+.
   */
  contextMessages?: LLMMessage[];
}

/**
 * Exports of the \`ls:council-prompt\` built-in library. Helpers for building
 * Council-voice system prompts and message arrays that mirror Lumiverse's
 * built-in sidecar Council tool prompt construction.
 * @example
 * const { buildCouncilMessages } = await script.require('ls:council-prompt');
 * api.tools.register('analyze_tone', def, async (args, api, ctx) => {
 *   if (!ctx?.councilMember) return await api.llm.generate([{ role: 'user', content: args.context ?? '' }]);
 *   const messages = buildCouncilMessages({
 *     councilMember: ctx.councilMember,
 *     contextMessages: ctx.contextMessages,
 *     args,
 *     tool: { display_name: 'Tone Analyzer', description: 'Analyze emotional tone.' },
 *     maxWordsPerTool: 100,
 *   });
 *   return await api.llm.generate(messages);
 * });
 */
interface LSCouncilPromptExports {
  /** Member identity block — "WHO YOU ARE" + "INSTRUCTION" when personality fields exist. */
  buildCouncilIdentity(councilMember: CouncilMemberContext): string;
  /** Role-note line for the given member, or empty string when role is blank. */
  roleNote(councilMember: CouncilMemberContext): string;
  /** Brevity directive for the given word budget, or empty string when 0. */
  brevityNote(maxWords: number): string;
  /** User-control guidance block. Pass false to get the "do not direct" note. */
  userControlNote(allow: boolean): string;
  /** Full Council-voice system prompt. Composes the blocks above + tool spec. */
  buildCouncilSystemPrompt(options: CouncilSystemPromptOptions): string;
  /**
   * Assemble the full Council-voice message array (system + context + user).
   * Pass directly to \`api.llm.generate()\`.
   */
  buildCouncilMessages(options: CouncilMessagesOptions): LLMMessage[];
  /** Debug pretty-printers. Return framed strings safe to \`console.log\`. */
  debug: {
    formatMember(councilMember: CouncilMemberContext): string;
    formatIdentity(councilMember: CouncilMemberContext): string;
    formatSystemPrompt(options: CouncilSystemPromptOptions): string;
    formatMessages(options: CouncilMessagesOptions): string;
    formatReport(options: CouncilMessagesOptions): string;
  };
}

// ─── Built-in library: ls:components ────────────────────────────────────────

// Options for messageFooter() from ls:components.
interface MessageFooterOptions {
  // Stable ID for idempotent injection.
  id?: string;
  // Additional CSS class on the footer wrapper.
  className?: string;
  // When true, renders a persistent title bar with a click-to-toggle chevron.
  // The body HTML collapses/expands; the title remains visible in both states.
  collapsible?: boolean;
  // HTML shown in the persistent title bar. Accepts the same HTML vocabulary
  // as the body parameter (composable with badgeHtml / keyValueHtml).
  // Only meaningful when collapsible is true; omitted → chevron-only bar.
  title?: string;
  // Initial collapsed state. Only meaningful when collapsible is true.
  // Default: false (expanded).
  defaultCollapsed?: boolean;
}

// Options for messageHeader() from ls:components.
interface MessageHeaderOptions {
  // Stable ID for idempotent injection.
  id?: string;
  // Additional CSS class on the header wrapper.
  className?: string;
  // When true, renders a persistent title bar with a click-to-toggle chevron.
  // The body HTML collapses/expands; the title remains visible in both states.
  collapsible?: boolean;
  // HTML shown in the persistent title bar. Accepts the same HTML vocabulary
  // as the body parameter (composable with badgeHtml / keyValueHtml).
  // Only meaningful when collapsible is true; omitted → chevron-only bar.
  title?: string;
  // Initial collapsed state. Only meaningful when collapsible is true.
  // Default: false (expanded).
  defaultCollapsed?: boolean;
}

// Extended handle returned by messageHeader() / messageFooter() when called
// with collapsible: true. Adds imperative controls and overrides update() so
// it replaces only the body (not the whole wrapper).
interface CollapsibleDOMHandle extends DOMHandle {
  // Current collapsed state (false = body visible).
  isCollapsed(): boolean;
  // Set collapsed state explicitly. Re-renders the inner content.
  setCollapsed(collapsed: boolean): void;
  // Flip the collapsed state.
  toggle(): void;
  // Replace the persistent title. Preserves collapsed state and body.
  setTitle(title: string): void;
  // Replace the body HTML. Preserves collapsed state and title.
  // Overrides DOMHandle.update() — for collapsible handles, update() means
  // "replace body HTML", not "replace the whole wrapper".
  update(bodyHtml: string): void;
}

/** Options for badgeHtml() from ls:components. */
interface BadgeHtmlOptions {
  /** Color variant. Default: 'default'. */
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
  /** Size preset. Default: 'md'. */
  size?: 'sm' | 'md';
  /** Prepend a colored dot indicator. Default: false. */
  dot?: boolean;
  /** Additional CSS class on the badge span. */
  className?: string;
}

/** Options for statBarHtml() from ls:components. */
interface StatBarHtmlOptions {
  /** Max value for display label (bar maps 0-100%). Default: 100. */
  max?: number;
  /** CSS color or gradient for the fill. Default: var(--lumiverse-accent). */
  color?: string;
  /** Show numeric value text. Default: true. */
  showValue?: boolean;
  /** Bar height in pixels. Default: 6. */
  height?: number;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for keyValueHtml() from ls:components. */
interface KeyValueHtmlOptions {
  /** Dim the value text. Default: false. */
  muted?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for progressBar() from ls:components. */
interface ProgressBarOptions {
  /** Initial value (0-100). Default: 0. */
  value?: number;
  /** Text label above the bar. */
  label?: string;
  /** CSS color or gradient for the fill. */
  color?: string;
  /** Show percentage text. Default: true. */
  showPercent?: boolean;
  /** Bar height in pixels. Default: 8. */
  height?: number;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Extended handle returned by progressBar(). */
interface ProgressBarHandle extends DOMHandle {
  /** Update the bar value (0-100) and optionally the label. */
  setValue(value: number, label?: string): void;
}

/** CSS position for floatingButton(). */
interface FloatingButtonPosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

/** Options for floatingButton() from ls:components. */
interface FloatingButtonOptions {
  /** Fixed position on screen. Defaults to bottom-right above chat input. */
  position?: FloatingButtonPosition;
  /** HTML string for an icon (e.g. SVG). Sanitized by DOMPurify. */
  icon?: string;
  /** Visual variant. Default: 'default'. */
  variant?: 'default' | 'accent' | 'ghost';
  /** Size preset. Default: 'md'. */
  size?: 'sm' | 'md';
  /** Enable drag-to-reposition. Drag handled on the frontend for smooth UX. Default: false. */
  draggable?: boolean;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the button. */
  className?: string;
}

/** Exports of the ls:components built-in library. */
interface LSComponentsExports {
  // ── Injection functions (return DOMHandle) ─────────────────────────

  // Styled footer below a message bubble.
  // With collapsible: true → returns CollapsibleDOMHandle
  // (imperative toggle/setCollapsed/setTitle/isCollapsed, body-only update()).
  // @example
  // const f = messageFooter(msg.id, bodyHtml, {
  //   collapsible: true,
  //   title: badgeHtml('AI', { dot: true }) + ' ' + words + ' words',
  //   defaultCollapsed: true,
  // });
  // f.toggle();         // flip collapsed state
  // f.update(newBody);  // replace body, keep title + state
  messageFooter(
    messageId: string,
    html: string,
    options: MessageFooterOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageFooter(messageId: string, html: string, options?: MessageFooterOptions): DOMHandle;

  // Styled header above message content inside the bubble.
  // With collapsible: true → returns CollapsibleDOMHandle
  // (imperative toggle/setCollapsed/setTitle/isCollapsed, body-only update()).
  messageHeader(
    messageId: string,
    html: string,
    options: MessageHeaderOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageHeader(messageId: string, html: string, options?: MessageHeaderOptions): DOMHandle;

  /**
   * Standalone progress bar with live setValue().
   * @example
   * const bar = progressBar('#chat', { label: 'Loading...', id: 'load' });
   * bar.setValue(50, 'Halfway...');
   * bar.setValue(100, 'Done');
   */
  progressBar(target: string, options?: ProgressBarOptions): ProgressBarHandle;

  /**
   * Fixed-position action button. Attach click handlers via handle.on('click', handler).
   * @example
   * const btn = floatingButton('Analyze', { variant: 'accent', id: 'fab' });
   * btn.on('click', () => api.ui.toast('Clicked!'));
   */
  floatingButton(label: string, options?: FloatingButtonOptions): DOMHandle;

  // ── HTML string builders (composable) ──────────────────────────────

  /**
   * Styled badge/pill HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * badgeHtml('Online', { variant: 'success', dot: true })
   */
  badgeHtml(text: string, options?: BadgeHtmlOptions): string;

  /**
   * Labeled stat bar HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * statBarHtml('Health', 75, { color: '#e74c3c', max: 100 })
   */
  statBarHtml(label: string, value: number, options?: StatBarHtmlOptions): string;

  /**
   * Label-value pair HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * keyValueHtml('Location', 'Castle Throne Room')
   */
  keyValueHtml(label: string, value: string, options?: KeyValueHtmlOptions): string;
}

// ─── Globals injected into every script sandbox ───────────────────────────────

/** Full LumiScript API. Use api.chat, api.llm, api.tools, etc. */
declare const api: LumiScriptAPI;

/** Script utilities. Use script.require() to load library scripts and built-in libraries (ls:*). */
declare const script: ScriptNamespace;

/**
 * Zod schema builder. Use z.object(), z.string(), etc. to define schemas
 * for api.llm.generateStructured() and api.llm.generateWithTools() calls.
 * @example
 * const result = await api.llm.generateStructured(messages, z.object({
 *   answer: z.string(),
 *   confidence: z.number().min(0).max(1),
 * }));
 */
declare const z: ZodModule;

/**
 * Event payload injected for trigger scripts.
 * Contains the event-specific data plus \`__event\` (the event name string).
 * @example
 * if (data.__event === 'MESSAGE_SENT') {
 *   console.log('New message:', data.message?.content);
 * }
 */
declare const data: Record<string, unknown>;
`;var Pm=wr(vo(),1);function tm(e){return e.split("`").map((n,b)=>{if(b%2===1)return n;return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function q$(e){return e.split("`").map((b,u)=>{if(u%2===1)return b;return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Q0(e,v){let n=`| ${e.join(" | ")} |`,b=`| ${e.map(()=>"---").join(" | ")} |`,u=v.map((P)=>`| ${P.map(q$).join(" | ")} |`);return[n,b,...u].join(`
`)}function M$(e){return e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field}function R$(e){if(e==="silent")return"*silent*";if(e==="boolean")return'`"true" / "false"`';return"`string`"}function W$(e){return e.aliases==="—"?"—":`\`${e.aliases}\``}function m$(e){let v=e.perms.length===0&&!e.note?"*none*":e.perms.map((n)=>`\`${n}\``).join(", ");return e.note?`${v}${e.perms.length?" ":""}${e.note}`:v}function G$(){return`## Lumiverse Events

${Q0(["Event","Group","Payload shape"],AP.map((v)=>[`\`${v.name}\``,v.group,`\`${v.payload}\``]))}`}function X$(){return`## Permission Matrix

${qP.map((v)=>{let n=Q0(["Method","Required permissions"],v.rows.map((b)=>[`\`${b.method}\``,m$(b)]));return`### ${v.group}

${n}`}).join(`

`)}`}function Y$(){let e=Q0(["Event","Payload fields","Emitted by"],MP.map((n)=>[`\`${n.name}\``,`\`${n.payload}\``,n.emittedBy])),v="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${e}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function J$(){let e=RP.map((n)=>{let b=Q0(["Macro","Aliases","Returns","Description"],n.rows.map((P)=>[`\`${P.macro}\``,W$(P),R$(P.returns),P.desc])),u=[`### ${n.label}`];if(n.description)u.push(`*${n.description}*`);return u.push(b),u.join(`

`)}),v='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${e.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function Q$(){return`## Key Types

${WP.map((e)=>um(e)).join(`

`)}`}function um(e,v="###"){let n=tm(e.name),b=e.note?`*${tm(e.note)}*

`:"",u=Q0(["Field","Type","Description"],e.fields.map((P)=>[`\`${M$(P)}\``,`\`${P.type}\``,P.desc]));return`${v} ${n}

${b}${u}`}function z$(){return`## API Functions

${mP.map((v)=>{let n=Q0(["Method","Arguments","Description"],v.rows.map((b)=>[`\`${b.name}\``,b.args,b.desc]));return`### ${v.group}

${n}`}).join(`

`)}`}function U$(){let v=Q0(["Method","Arguments","Description"],GP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),n=Q0(["Method","Arguments","Description"],XP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),b=YP.map((u)=>um(u,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",v,"","### ls:council-prompt","",n,"","### Built-in types","",b].join(`
`)}function K$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function $$(){let v=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,n=[G$(),X$(),Y$(),J$(),Q$(),z$(),U$(),K$()];return`${v}

---

${n.join(`

---

`)}
`}function wm(){let e=$$(),n=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,b=new Blob([e],{type:"text/markdown;charset=utf-8"}),u=URL.createObjectURL(b),P=document.createElement("a");P.href=u,P.download=n,P.click(),URL.revokeObjectURL(u)}var z=wr(ro(),1),z0=({icon:e,title:v,defaultOpen:n=!1,children:b})=>{let[u,P]=Pm.useState(n);return z.jsxDEV("div",{className:"ls-ref-section",children:[z.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[z.jsxDEV("span",{className:"ls-ref-section-title",children:[e,v]},void 0,!0,void 0,this),u?z.jsxDEV(mg,{size:12},void 0,!1,void 0,this):z.jsxDEV(Av,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u&&z.jsxDEV("div",{className:"ls-ref-section-body",children:b},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Ho=({children:e})=>z.jsxDEV("code",{className:"ls-ref-code",children:e},void 0,!1,void 0,this),L$=({children:e})=>z.jsxDEV("span",{className:"ls-ref-perm",children:e},void 0,!1,void 0,this),I$=()=>z.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),F$=()=>z.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),ph=({label:e,cols:v})=>z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:v,className:"ls-ref-group-header",children:e},void 0,!1,void 0,this)},void 0,!1,void 0,this),AP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Settings",name:"REGEX_SCRIPT_CHANGED",payload:"{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission"},{group:"Settings",name:"REGEX_SCRIPT_DELETED",payload:"{ id }  // v0.27.0+ — requires regex_scripts permission"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],x$=()=>{let e="";return z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:AP.map((v)=>{let n=v.group!==e?v.group:"";return e=v.group,z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:n},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.* (CRUD + getCapturedActive)",perms:["world_books"]},{method:"api.worldInfo.registerInterceptor / listInterceptors",perms:["generation"]},{method:"api.personas.*",perms:["personas"]},{method:"api.regexScripts.*",perms:["regex_scripts"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],N$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:qP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.group,cols:2},`hdr-${e.group}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:[v.perms.length===0&&!v.note?z.jsxDEV(I$,{},void 0,!1,void 0,this):null,v.perms.map((n)=>z.jsxDEV(L$,{children:n},n,!1,void 0,this)),v.note?z.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:v.perms.length?4:0},children:v.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},v.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],B$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:MP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],Z$=({type:e})=>{if(e==="silent")return z.jsxDEV(F$,{},void 0,!1,void 0,this);if(e==="boolean")return z.jsxDEV(Ho,{children:'"true" / "false"'},void 0,!1,void 0,this);return z.jsxDEV(Ho,{children:"string"},void 0,!1,void 0,this)},C$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:RP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.description?z.jsxDEV(z.Fragment,{children:[e.label," — ",z.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:e.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):e.label,cols:4},`hdr-${e.label}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:v.aliases==="—"?z.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):z.jsxDEV(Ho,{children:v.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:z.jsxDEV(Z$,{type:v.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMDelegateOptions",note:"Options for api.ui.dom.delegate(selector, event, handler, options?). v0.27.1+.",fields:[{field:"root?",type:"'chat' | 'document'",optional:!0,desc:"Where to attach the actual host-side capture listener. 'chat' (default): restricts matching to chat content; matches descendants of [data-message-id]. 'document': matches anywhere in the page (including Lumiverse's own UI surfaces). Both gate on app_manipulation."},{field:"messageId?",type:"string",optional:!0,desc:'Limit matching to a specific message id. Has no effect when root is "document".'},{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() before dispatching. Default: false."},{field:"stopPropagation?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.stopPropagation() after dispatching, preventing host-side and other delegation listeners from also reacting. Default: false."}]},{name:"DOMDelegatedEventData",note:"Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context. v0.27.1+.",fields:[{field:"matched",type:"{ tagName, classList, dataset, attributes, textContent, id?, value?, checked?, selectedIndex?, selectedText? }",optional:!1,desc:"Snapshot of the element matched by event.target.closest(selector). May be an ancestor of the literal event.target. Form-input fields (value/checked/selectedIndex/selectedText) populated only for matching element types."},{field:"modifiers",type:"{ ctrl, shift, alt, meta, button? }",optional:!1,desc:"Modifier-key state at event time. button is populated for click events (0=left, 1=middle, 2=right)."},{field:"message?",type:"{ id, role, swipeId }",optional:!0,desc:`Populated when the matched element is inside an assistant or user message. role: 'user' for [data-part="user"], 'assistant' otherwise. swipeId is the active swipe at dispatch time, resolved backend-side via the host's chat history. Falls through with 0 if the chat closed between event fire and dispatch or the message left the history.`},{field:"(plus DOMEventData fields)",type:"see DOMEventData",optional:!1,desc:"Inherits type, targetId, targetValue, targetChecked, dataset, detail, clientX, clientY from DOMEventData (see above)."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"WorldInfoInterceptorEntry",note:"Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"comment",type:"string",optional:!1,desc:"Author-facing comment / label for the entry."},{field:"disabled",type:"boolean",optional:!1,desc:"Stored disabled flag (or accumulated disable from earlier handlers in the chain)."},{field:"constant",type:"boolean",optional:!1,desc:"Always-active flag."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:"Per-extension namespace metadata stored on the entry."},{field:"key",type:"readonly string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"readonly string[]",optional:!1,desc:"Secondary trigger keywords."},{field:"position",type:"number",optional:!1,desc:"Injection position."},{field:"depth",type:"number",optional:!1,desc:"Injection depth."},{field:"priority",type:"number",optional:!1,desc:"Activation priority."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100)."},{field:"useProbability",type:"boolean",optional:!1,desc:"Whether probability gating applies."},{field:"content",type:"string",optional:!1,desc:"Entry text content (reflects mutations from earlier handlers in the chain)."}]},{name:"WorldInfoInterceptorMessage",note:"One chat message exposed to a registerInterceptor handler.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message role."},{field:"content",type:"string",optional:!1,desc:"Message content."}]},{name:"WorldInfoInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"characterId",type:"string",optional:!1,desc:"Active character id."},{field:"userId?",type:"string",optional:!0,desc:"Owning user id. Pass to operator-scoped Spindle calls."},{field:"entries",type:"readonly WorldInfoInterceptorEntry[]",optional:!1,desc:"Candidate entries with prior handlers' mutations applied."},{field:"messages",type:"readonly WorldInfoInterceptorMessage[]",optional:!1,desc:"Chat-history snapshot."},{field:"chatTurn",type:"number",optional:!1,desc:"Turn number for this chat."},{field:"chatMetadata",type:"Record<string, unknown>",optional:!1,desc:"Chat-level metadata snapshot. Read-only."}]},{name:"WorldInfoInterceptorResult",note:"Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.",fields:[{field:"disabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-disable. Wins against any later enabled / forced vote."},{field:"enabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled."},{field:"forced?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced."},{field:"mutated?",type:"readonly { id: string; content: string }[]",optional:!0,desc:"Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id."}]},{name:"WorldInfoInterceptorOptions",note:"Passed to api.worldInfo.registerInterceptor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers' decisions applied to the entry list."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call."}]},{name:"RegisteredWorldInfoInterceptorInfo",note:"Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.",fields:[{field:"scriptId",type:"string",optional:!1,desc:"Owning script id."},{field:"scriptName",type:"string",optional:!1,desc:"Owning script display name."},{field:"id",type:"string",optional:!1,desc:"Resolved entry id (auto-generated or user-provided)."},{field:"priority",type:"number",optional:!1,desc:"Effective priority value."},{field:"timeoutMs",type:"number",optional:!1,desc:"Effective per-invocation timeout (ms)."}]},{name:"RegexScriptInfo",note:"Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique row id."},{field:"name",type:"string",optional:!1,desc:"Display name shown in the regex panel."},{field:"scriptId",type:"string",optional:!1,desc:"Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern compiled with the JavaScript regex engine."},{field:"replaceString",type:"string",optional:!1,desc:"Replacement template. Supports $1 / $& / $<name> capture references."},{field:"flags",type:"string",optional:!1,desc:'Any subset of "gimsu".'},{field:"placement",type:"RegexPlacement[]",optional:!1,desc:"Which message roles the rule applies to."},{field:"scope",type:"RegexScope",optional:!1,desc:"Scope tier: 'global' | 'character' | 'chat'."},{field:"scopeId",type:"string | null",optional:!1,desc:"Required when scope is non-global; null otherwise."},{field:"target",type:"RegexTarget",optional:!1,desc:"When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)."},{field:"minDepth",type:"number | null",optional:!1,desc:"Lower bound on chat-history depth (0 = latest), or null for unbounded."},{field:"maxDepth",type:"number | null",optional:!1,desc:"Upper bound on chat-history depth, or null for unbounded."},{field:"trimStrings",type:"string[]",optional:!1,desc:"Additional substrings stripped from output after the regex pass."},{field:"runOnEdit",type:"boolean",optional:!1,desc:"Re-run the rule when a message is edited."},{field:"substituteMacros",type:"RegexMacroMode",optional:!1,desc:"How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'."},{field:"disabled",type:"boolean",optional:!1,desc:"When true, the rule is registered but not active."},{field:"sortOrder",type:"number",optional:!1,desc:"Lower values run earlier within the same scope tier."},{field:"description",type:"string",optional:!1,desc:"Free-form note."},{field:"folder",type:"string",optional:!1,desc:"Folder label shown in the regex panel."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata namespaced to the creating extension."},{field:"createdAt",type:"number",optional:!1,desc:"Unix epoch seconds."},{field:"updatedAt",type:"number",optional:!1,desc:"Unix epoch seconds."}]},{name:"RegexScriptListOptions",note:"Filter options for api.regexScripts.list().",fields:[{field:"scope?",type:"'global' | 'character' | 'chat'",optional:!0,desc:"Filter to a single scope. Omit to include all scopes."},{field:"scopeId?",type:"string",optional:!0,desc:"Required when scope is 'character' or 'chat'. Ignored otherwise."},{field:"target?",type:"'prompt' | 'response' | 'display'",optional:!0,desc:"Filter by execution target."},{field:"limit?",type:"number",optional:!0,desc:"Page size. Default 50, max 200."},{field:"offset?",type:"number",optional:!0,desc:"Pagination offset."}]},{name:"RegexScriptActiveOptions",note:"Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.",fields:[{field:"target",type:"'prompt' | 'response' | 'display'",optional:!1,desc:"Required. The execution target to resolve for."},{field:"characterId?",type:"string",optional:!0,desc:"Include character-scoped rules attached to this character."},{field:"chatId?",type:"string",optional:!0,desc:"Include chat-scoped rules attached to this chat."}]},{name:"RegexScriptCreateInput",note:"Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.",fields:[{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern (JavaScript regex)."},{field:"replaceString?",type:"string",optional:!0,desc:"Replacement template. Default empty string."},{field:"flags?",type:"string",optional:!0,desc:'Any subset of "gimsu". Default "gi".'},{field:"placement?",type:"RegexPlacement[]",optional:!0,desc:'Default ["ai_output"].'},{field:"scope?",type:"RegexScope",optional:!0,desc:"Default 'global'."},{field:"scopeId?",type:"string | null",optional:!0,desc:"Required when scope is non-global."},{field:"target?",type:"RegexTarget",optional:!0,desc:"Default 'response'."},{field:"minDepth?",type:"number | null",optional:!0,desc:"Lower depth bound."},{field:"maxDepth?",type:"number | null",optional:!0,desc:"Upper depth bound."},{field:"trimStrings?",type:"string[]",optional:!0,desc:"Additional substrings stripped from output."},{field:"runOnEdit?",type:"boolean",optional:!0,desc:"Re-run on edit."},{field:"substituteMacros?",type:"RegexMacroMode",optional:!0,desc:"How CBS / {{...}} macros inside the rule resolve. Default 'none'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Create as disabled."},{field:"sortOrder?",type:"number",optional:!0,desc:"Default 0."},{field:"description?",type:"string",optional:!0,desc:"Free-form note."},{field:"folder?",type:"string",optional:!0,desc:"Folder label."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."},{field:"scriptId?",type:"string",optional:!0,desc:"Stable identifier. Normalized to lowercase + underscores by the host."}]},{name:"RegexScriptUpdateInput",note:"Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.",fields:[{field:"(all RegexScriptCreateInput fields, all optional)",type:"—",optional:!0,desc:"Only the fields you provide are updated; omitted fields are left unchanged."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],S$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:WP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[e.name,e.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:e.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${e.name}`,!1,void 0,this),e.fields.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"delegate",args:"selector, event, handler, options?",desc:`Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn't inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. v0.27.1+. Requires app_manipulation.`},{name:"cleanup",args:"—",desc:"Remove all DOM injections, styles, and delegations created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+."},{name:"listInterceptors",args:"—",desc:"Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.regexScripts",rows:[{name:"list",args:"options?",desc:"List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }."},{name:"get",args:"scriptId",desc:"Get a single regex script by id. Returns null if not found."},{name:"findByName",args:"name, scope?",desc:"Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case."},{name:"getActive",args:"options",desc:"Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId."},{name:"create",args:"input",desc:"Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)."},{name:"update",args:"scriptId, input",desc:"Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found."},{name:"delete",args:"scriptId",desc:"Delete a regex script. Returns true if the row was deleted."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],T$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:mP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.group,cols:3},`hdr-${e.group}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.group}-${v.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],XP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],k$=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],YP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],D$=()=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",z.jsxDEV(Ho,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",z.jsxDEV(Ho,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",z.jsxDEV(Ho,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",z.jsxDEV(Ho,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",z.jsxDEV(Ho,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",z.jsxDEV(Ho,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:[z.jsxDEV(ph,{label:"ls:components",cols:3},void 0,!1,void 0,this),GP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)),z.jsxDEV(ph,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),XP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)),z.jsxDEV(ph,{label:"ls:icons",cols:3},void 0,!1,void 0,this),k$.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:YP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[e.name,e.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:e.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${e.name}`,!1,void 0,this),e.fields.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ho,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Om=()=>z.jsxDEV("div",{className:"ls-ref",children:[z.jsxDEV("div",{className:"ls-ref-toolbar",children:z.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>wm(),title:"Download the current reference as a Markdown file",children:[z.jsxDEV(Xi,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Mv,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:z.jsxDEV(x$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(pn,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:z.jsxDEV(N$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(ob,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[z.jsxDEV(B$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",z.jsxDEV(Ho,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(En,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[z.jsxDEV(C$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",z.jsxDEV(Ho,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",z.jsxDEV(Ho,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:z.jsxDEV(S$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(jn,{size:11},void 0,!1,void 0,this),title:"API Functions",children:z.jsxDEV(T$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Sn,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:z.jsxDEV(D$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(sn,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[z.jsxDEV("p",{className:"ls-ref-muted",children:[z.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Ho,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",z.jsxDEV(Ho,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",z.jsxDEV(Ho,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",z.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[z.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Ho,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",z.jsxDEV(Ho,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",z.jsxDEV(Ho,{children:"enabled: false"},void 0,!1,void 0,this)," and ",z.jsxDEV(Ho,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Lr=wr(ro(),1),Hm=!1,Am=({script:e,allScripts:v,activeContext:n,isRunning:b,consoleEntries:u,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:H,sendToBackend:W})=>{let[G,m]=Co.useState(e.code),[q,X]=Co.useState(!1),[L,T]=Co.useState(!1),[Z,_]=Co.useState(e.name),[rr,ur]=Co.useState("code"),[lr,a]=Co.useState(!1),[p,er]=Co.useState(!1),N=Co.useRef(null),y=Co.useRef(null),f=Co.useRef(null),C=Co.useRef(e.id),Rr=Co.useRef(W);Co.useEffect(()=>{C.current=e.id},[e.id]),Co.useEffect(()=>{Rr.current=W},[W]),Co.useEffect(()=>{m(e.code),X(!1),_(e.name),er(!1)},[e.id,e.code,e.name]),Co.useEffect(()=>{return()=>{if(N.current)clearTimeout(N.current),N.current=null;let F=f.current;if(F!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${C.current}, len=${F.length})`);try{Rr.current({type:"update_script",id:C.current,patch:{code:F}})}catch(gr){console.error("[LumiScript] ScriptEditor unmount-flush failed:",gr)}f.current=null}}},[]),Co.useEffect(()=>{W({type:"get_active_context"})},[e.id,W]),Co.useEffect(()=>{let F=setInterval(()=>{W({type:"get_active_context"})},2000);return()=>clearInterval(F)},[W]);let Ar=Co.useCallback((F)=>{console.log(`[LumiScript] saveCode: script=${e.id}, len=${F.length}, head="${F.slice(0,40).replace(/\n/g,"\\n")}"`),W({type:"update_script",id:e.id,patch:{code:F}}),f.current=null,X(!1)},[e.id,W]),mr=(F)=>{if(F===void 0)return;if(m(F),X(F!==e.code),f.current=F,N.current)clearTimeout(N.current);N.current=setTimeout(()=>Ar(F),O)},Br=(F,gr)=>{if(y.current=F,!Hm){Hm=!0;let Or=gr.languages.typescript.javascriptDefaults;Or.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Or.setCompilerOptions({target:gr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Or.addExtraLib(bm,"ts:lumiverse/lumiscript-api.d.ts")}F.addCommand(gr.KeyMod.CtrlCmd|gr.KeyCode.KeyS,()=>{if(N.current)clearTimeout(N.current);Ar(F.getValue())}),F.getModel()?.setEOL(gr.editor.EndOfLineSequence.LF)},k=()=>{if(b)return;if(N.current)clearTimeout(N.current),N.current=null;if(q)Ar(y.current?.getValue()??G);W({type:"run_script",id:e.id})},s=()=>{let F=Z.trim();if(F&&F!==e.name)W({type:"update_script",id:e.id,patch:{name:F}});T(!1)},vr=(F)=>{let gr=e.bindings??[];W({type:"update_script",id:e.id,patch:{bindings:[...gr,F]}})},Qr=(F)=>{W({type:"update_script",id:e.id,patch:{bindings:(e.bindings??[]).filter((gr,Or)=>Or!==F)}})},Gr=()=>{if(e.allowDangerous)W({type:"update_script",id:e.id,patch:{allowDangerous:!1}});else if(p)er(!1),W({type:"update_script",id:e.id,patch:{allowDangerous:!0}});else er(!0)},V=(F)=>new Date(F).toLocaleString();return Lr.jsxDEV("div",{className:"ls-editor-root",children:[Lr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?Lr.jsxDEV("input",{className:"ls-editor-name-input",value:Z,autoFocus:!0,onChange:(F)=>_(F.target.value),onBlur:s,onKeyDown:(F)=>{if(F.key==="Enter")s();if(F.key==="Escape")_(e.name),T(!1)}},void 0,!1,void 0,this):Lr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>T(!0),title:"Click to rename",style:{cursor:"text"},children:e.name},void 0,!1,void 0,this),q&&Lr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>ur("code"),title:"Code editor",children:[Lr.jsxDEV(Wg,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>ur("docs"),title:"API reference",children:[Lr.jsxDEV(Tn,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),e.type!=="library"&&Lr.jsxDEV("button",{className:`ls-btn${b?"":" ls-accent"}`,onClick:k,disabled:b,children:[b?Lr.jsxDEV(Zl,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Lr.jsxDEV(Ji,{size:15},void 0,!1,void 0,this),b?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Lr.jsxDEV("div",{className:"ls-editor-monaco",children:Lr.jsxDEV(em,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:G,onChange:mr,onMount:Br,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},e.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Lr.jsxDEV("div",{className:"ls-editor-docs",children:Lr.jsxDEV(Om,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Lr.jsxDEV(lm,{entries:u,isRunning:b,onClear:H},void 0,!1,void 0,this),e.type==="trigger"&&Lr.jsxDEV(nm,{scriptId:e.id,triggers:e.triggers??[],sendToBackend:W},void 0,!1,void 0,this),e.type==="trigger"&&Lr.jsxDEV(vm,{bindings:e.bindings??[],activeContext:n,onAdd:vr,onRemove:Qr},void 0,!1,void 0,this),p&&Lr.jsxDEV("div",{className:"ls-danger-confirm",children:[Lr.jsxDEV(Dh,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:Gr,children:"Enable"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>er(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-meta-footer",children:[Lr.jsxDEV("span",{className:"ls-meta-item",children:Lr.jsxDEV("button",{className:"ls-danger-btn",onClick:Gr,title:"Toggle dangerous mode",children:[e.allowDangerous?Lr.jsxDEV(Dh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Lr.jsxDEV(eb,{size:11},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:e.allowDangerous?"ls-dangerous":"",children:e.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Lr.jsxDEV(Yi,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("select",{className:"ls-folder-select",value:e.folder??"",onChange:(F)=>{let gr=F.target.value;if(gr==="__new__"){let Or=window.prompt("New folder name:");if(Or?.trim())W({type:"update_script",id:e.id,patch:{folder:Or.trim()}})}else W({type:"update_script",id:e.id,patch:{folder:gr}})},children:[Lr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(v.map((F)=>F.folder).filter((F)=>!!F))].sort().map((F)=>Lr.jsxDEV("option",{value:F,children:F},F,!1,void 0,this)),Lr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(yn,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Updated ",V(e.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(kn,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Created ",V(e.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:e.id,onClick:()=>{navigator.clipboard.writeText(e.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?Lr.jsxDEV(Dn,{size:10},void 0,!1,void 0,this):Lr.jsxDEV(pe,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["ID ",e.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $g=wr(ro(),1),Mm=({scripts:e,initialScriptId:v,activeContext:n,execInfo:b,activeRunScriptId:u,isRunning:P,consoleHistory:O,editorFontSize:H,autosaveDebounceMs:W,onClearConsole:G,onClose:m,sendToBackend:q})=>{let[X,L]=Ib.useState(v),T=e.find((lr)=>lr.id===X)??null;Ib.useEffect(()=>{L(v)},[v]),Ib.useEffect(()=>{let lr=(a)=>{if(a.key==="Escape")m()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[m]);let Z=T?O[T.id]??[]:[],_=P&&T?.id===u;return qm.createPortal($g.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)m()},children:$g.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[$g.jsxDEV("div",{className:"ls-modal-header",children:[$g.jsxDEV("span",{className:"ls-modal-title",children:[$g.jsxDEV(Cl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),$g.jsxDEV("button",{className:"ls-modal-close",onClick:m,title:"Close (Esc)",children:$g.jsxDEV(kg,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$g.jsxDEV("div",{className:"ls-modal-body",children:[$g.jsxDEV("div",{className:"ls-modal-sidebar",children:$g.jsxDEV(Jw,{scripts:e,selectedId:X,execInfo:b,onSelect:L,onEdit:L,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this),$g.jsxDEV("div",{className:"ls-modal-main",children:T?$g.jsxDEV(Am,{script:T,allScripts:e,activeContext:n,isRunning:_,consoleEntries:Z,editorFontSize:H,autosaveDebounceMs:W,onClearConsole:()=>{if(T)G(T.id)},sendToBackend:q},void 0,!1,void 0,this):$g.jsxDEV("div",{className:"ls-placeholder",children:[$g.jsxDEV(Cl,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),$g.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var xw=wr(ro(),1),Rm=({scripts:e,activeContext:v,execInfo:n,activeRunScriptId:b,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:W,onScriptOpened:G,sendToBackend:m})=>{let[q,X]=Nw.useState(null);return Nw.useEffect(()=>{if(q&&G)G(q)},[q,G]),xw.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[xw.jsxDEV(Jw,{scripts:e,selectedId:q,execInfo:n,onSelect:()=>{},onEdit:X,sendToBackend:m},void 0,!1,void 0,this),q!==null&&xw.jsxDEV(Mm,{scripts:e,initialScriptId:q,activeContext:v,execInfo:n,activeRunScriptId:b,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:W,onClose:()=>X(null),sendToBackend:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Wm=wr(vo(),1);var Eo=wr(ro(),1),V$=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function _$(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e==="string")return e.length>80?e.slice(0,77)+"…":e;try{let v=JSON.stringify(e);return v.length>80?v.slice(0,77)+"…":v}catch{return String(e)}}var mm=({variables:e,sendToBackend:v})=>{let[n,b]=Wm.useState(new Set(["local","global","chat","character"])),u=(O)=>{b((H)=>{let W=new Set(H);if(W.has(O))W.delete(O);else W.add(O);return W})},P=e?Object.values(e).reduce((O,H)=>O+Object.keys(H).length,0):0;return Eo.jsxDEV("div",{className:"ls-status-section",children:[Eo.jsxDEV("div",{className:"ls-inject-header",children:[Eo.jsxDEV(de,{size:10},void 0,!1,void 0,this),"Variables",P>0&&Eo.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),Eo.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>v({type:"get_variables"}),children:Eo.jsxDEV(qv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Eo.jsxDEV("div",{className:"ls-status-section-body",children:!e?Eo.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?Eo.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):V$.map(({key:O,label:H,hint:W})=>{let G=e[O],m=Object.keys(G),q=n.has(O);if(m.length===0)return null;return Eo.jsxDEV("div",{className:"ls-vars-scope",children:[Eo.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>u(O),children:[q?Eo.jsxDEV(mg,{size:10},void 0,!1,void 0,this):Eo.jsxDEV(Me,{size:10},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-scope-name",children:H},void 0,!1,void 0,this),W&&Eo.jsxDEV("span",{className:"ls-vars-scope-hint",children:W},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-scope-count",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q&&Eo.jsxDEV("div",{className:"ls-vars-scope-body",children:m.sort().map((X)=>Eo.jsxDEV("div",{className:"ls-vars-entry",children:[Eo.jsxDEV("span",{className:"ls-vars-key",children:X},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-value",title:String(G[X]),children:_$(G[X])},void 0,!1,void 0,this)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var U0=wr(vo(),1);function Bw(e){if(!Number.isFinite(e)||e<=0)return"0 B";let v=["B","KB","MB","GB"],n=Math.min(v.length-1,Math.floor(Math.log(e)/Math.log(1024))),b=e/Math.pow(1024,n);return`${n===0?b.toFixed(0):b.toFixed(1)} ${v[n]}`}function Fb(e){let v;if(typeof e==="number")v=e;else{if(!e)return"—";v=new Date(e).getTime()}if(!Number.isFinite(v)||v<=0)return"—";let n=Date.now()-v;if(n<60000)return"just now";if(n<3600000)return`${Math.floor(n/60000)}m ago`;if(n<86400000)return`${Math.floor(n/3600000)}h ago`;if(n<2592000000)return`${Math.floor(n/86400000)}d ago`;return new Date(v).toISOString().slice(0,10)}var JP={script:"script",character:"char",chat:"chat"},Gm={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Zw(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(n,b,u,P,O,H,W)=>{if(b)return`<span class="ls-json-key">${b}</span>${u}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(H)return`<span class="ls-json-null">${H}</span>`;if(W)return`<span class="ls-json-number">${W}</span>`;return n})}async function QP(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}var Ir=wr(ro(),1),dh=["script","character","chat"],y$=10485760,c$=41943040,E$=52428800;function a$(e){if(e>=c$)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(e>=y$)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function f$(e){if(e.scope==="character"){if(e.characterName)return`character: ${e.characterName} (${e.characterId})
${e.path}`;if(e.characterId)return`character: ${e.characterId} (not currently loaded)
${e.path}`}if(e.scope==="chat"){if(e.chatName)return`chat: ${e.chatName} (${e.chatId})
${e.path}`;if(e.chatId)return`chat: ${e.chatId} (not currently loaded)
${e.path}`}return e.path}function j$(e,v,n,b){switch(n){case"name":return e.name.localeCompare(v.name,void 0,{sensitivity:"base"});case"scope":return e.scope.localeCompare(v.scope);case"owner":{let u=b.get(e.scriptId)??e.scriptId,P=b.get(v.scriptId)??v.scriptId;return u.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return e.sizeBytes-v.sizeBytes;case"updated":return new Date(e.modifiedAt).getTime()-new Date(v.modifiedAt).getTime()}}var Xm=({collections:e,scripts:v,sendToBackend:n,onInspect:b,onDrop:u})=>{let[P,O]=U0.useState(""),[H,W]=U0.useState(()=>new Set(dh)),[G,m]=U0.useState(null),[q,X]=U0.useState("asc"),L=U0.useMemo(()=>{let N=new Map;for(let y of v)N.set(y.id,y.name);return N},[v]),T=U0.useMemo(()=>{if(!e)return null;let N=e;if(H.size<dh.length)N=N.filter((f)=>H.has(f.scope));let y=P.trim().toLowerCase();if(y)N=N.filter((f)=>f.name.toLowerCase().includes(y));if(G){let f=q==="asc"?1:-1;N=N.slice().sort((C,Rr)=>j$(C,Rr,G,L)*f)}return N},[e,H,P,G,q,L]),Z=()=>n({type:"list_collections"}),_=(N)=>{W((y)=>{let f=new Set(y);if(f.has(N))f.delete(N);else f.add(N);if(f.size===0)return new Set(dh);return f})},rr=(N)=>{if(G!==N){m(N),X("asc");return}if(q==="asc"){X("desc");return}m(null)},ur=()=>{O(""),W(new Set(dh))},lr=e?.length??0,a=T?.length??0,p=P.trim().length>0||H.size<dh.length,er=(N)=>{if(G!==N)return Ir.jsxDEV(_n,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return q==="asc"?Ir.jsxDEV(Me,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Ir.jsxDEV(mg,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Ir.jsxDEV("div",{className:"ls-status-section",children:[Ir.jsxDEV("div",{className:"ls-inject-header",children:[Ir.jsxDEV(de,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Ir.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:Z,children:Ir.jsxDEV(qv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-status-section-body",children:e===null?Ir.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):e.length===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Ir.jsxDEV(Ir.Fragment,{children:[Ir.jsxDEV("div",{className:"ls-collections-filter",children:[Ir.jsxDEV("div",{className:"ls-collections-filter-search",children:[Ir.jsxDEV(W0,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(N)=>O(N.target.value)},void 0,!1,void 0,this),P&&Ir.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Ir.jsxDEV(kg,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-collections-filter-chips",children:dh.map((N)=>{let y=H.has(N);return Ir.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":N,"aria-pressed":y,title:y?`Hide ${N}-scoped`:`Show ${N}-scoped`,onClick:()=>_(N),children:JP[N]},N,!1,void 0,this)})},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${a}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:[Ir.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Ir.jsxDEV("button",{onClick:ur,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Ir.jsxDEV("div",{className:"ls-collections-list",children:[Ir.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",er("name")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",er("scope")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",er("owner")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",er("size")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",er("updated")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T.map((N)=>{let y=L.get(N.scriptId)??`(${N.scriptId.slice(0,8)}…)`,f=!L.has(N.scriptId),C=f?`scriptId: ${N.scriptId} (not currently loaded)`:`${y} (${N.scriptId})`;return Ir.jsxDEV("div",{className:"ls-collections-row",children:[Ir.jsxDEV("span",{className:"ls-collections-name",title:N.name,children:N.name},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-scope","data-scope":N.scope,title:f$(N),children:JP[N.scope]},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:C,children:y},void 0,!1,void 0,this),(()=>{let Rr=a$(N.sizeBytes),Ar=(N.sizeBytes/E$*100).toFixed(N.sizeBytes<1048576?2:1),mr=`${N.sizeBytes.toLocaleString()} bytes (${Ar}% of 50 MB cap)`;return Ir.jsxDEV("span",{className:"ls-collections-size","data-budget":Rr.tier,title:mr,style:Rr.tier==="normal"?void 0:{color:Rr.color,fontWeight:600},children:Bw(N.sizeBytes)},void 0,!1,void 0,this)})(),Ir.jsxDEV("span",{className:"ls-collections-updated",title:N.modifiedAt,children:Fb(N.modifiedAt)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-actions",children:[Ir.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>b(N.path),children:Ir.jsxDEV(cn,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>u(N),children:Ir.jsxDEV(Kg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},N.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Do=wr(vo(),1),Qm=wr(Ch(),1);var el=wr(vo(),1),Ym=wr(Ch(),1);var Xo=wr(ro(),1);function p$(e){let{id:v,createdAt:n,updatedAt:b,...u}=e;try{return JSON.stringify(u,null,2)}catch{return"{}"}}var Jm=({path:e,record:v,onClose:n,sendToBackend:b})=>{let[u,P]=el.useState(()=>p$(v)),[O,H]=el.useState(null),W=el.useRef(null),G=el.useRef(null),m=el.useRef(null);el.useEffect(()=>{let Z=(_)=>{if(_.key==="Escape")n()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[n]),el.useEffect(()=>{let Z=(_)=>{if(_.key!=="Tab")return;let rr=W.current;if(!rr)return;let ur=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(ur.length===0)return;let lr=ur[0],a=ur[ur.length-1],p=document.activeElement,er=p!==null&&rr.contains(p);if(_.shiftKey){if(!er||p===lr)_.preventDefault(),a.focus()}else if(!er||p===a)_.preventDefault(),lr.focus()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[]),el.useEffect(()=>{let Z=setTimeout(()=>G.current?.focus(),0);return()=>clearTimeout(Z)},[]);let q=()=>{let Z;try{Z=JSON.parse(u)}catch(_){let rr=_ instanceof Error?_.message:String(_);H(`JSON parse error: ${rr}`);return}if(Z===null||typeof Z!=="object"||Array.isArray(Z)){H("Record must be a JSON object — not an array, null, or primitive.");return}H(null),b({type:"update_record",path:e,recordId:String(v.id),patch:Z}),n()},X=(Z)=>{if((Z.metaKey||Z.ctrlKey)&&Z.key==="Enter")Z.preventDefault(),q()},L=String(v.id),T=Xo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Z)=>{if(Z.target===Z.currentTarget)n()},children:Xo.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:W,onClick:(Z)=>Z.stopPropagation(),children:[Xo.jsxDEV("div",{className:"ls-modal-header",children:[Xo.jsxDEV("span",{className:"ls-modal-title",children:[Xo.jsxDEV(se,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Xo.jsxDEV("button",{className:"ls-modal-close",onClick:n,title:"Cancel (Esc)",children:Xo.jsxDEV(kg,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-edit-body",children:[Xo.jsxDEV("div",{className:"ls-edit-meta",children:[Xo.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Xo.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Xo.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Xo.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Xo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Xo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Xo.jsxDEV("pre",{ref:m,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Zw(u)+`
`}},void 0,!1,void 0,this),Xo.jsxDEV("textarea",{ref:G,className:"ls-edit-textarea",value:u,onChange:(Z)=>{if(P(Z.target.value),O)H(null)},onKeyDown:X,onScroll:(Z)=>{let _=m.current;if(!_)return;_.scrollTop=Z.currentTarget.scrollTop,_.scrollLeft=Z.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Xo.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Xo.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),Xo.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-drop-actions",children:[Xo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:n,children:"Cancel"},void 0,!1,void 0,this),Xo.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:q,title:"Save (Ctrl/Cmd+Enter)",children:[Xo.jsxDEV(gb,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Ym.createPortal(T,document.body)};var j=wr(ro(),1),Ii=50,d$=150,s$=1200,rL=4000,zm=({path:e,summary:v,records:n,total:b,error:u,stats:P,refreshToken:O,onClose:H,sendToBackend:W})=>{let[G,m]=Do.useState(""),[q,X]=Do.useState(""),[L,T]=Do.useState(0),[Z,_]=Do.useState("shallow"),[rr,ur]=Do.useState(0),[lr,a]=Do.useState(()=>new Set),[p,er]=Do.useState(null),[N,y]=Do.useState(null),[f,C]=Do.useState("records");Do.useEffect(()=>{let F=setTimeout(()=>X(G),d$);return()=>clearTimeout(F)},[G]),Do.useEffect(()=>{T(0)},[q,Z]),Do.useEffect(()=>{let F=q.trim();if(Z==="jsonquery")W({type:"inspect_collection",path:e,jsonqueryFilter:F||void 0,limit:Ii,offset:L*Ii});else W({type:"inspect_collection",path:e,textFilter:F||void 0,deepFilter:Z==="deep"||void 0,limit:Ii,offset:L*Ii})},[e,q,Z,L,O,rr,W]),Do.useEffect(()=>{let F=(gr)=>{if(gr.key==="Escape")H()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[H]);let Rr=Math.max(1,Math.ceil(b/Ii)),Ar=b===0?0:L*Ii+1,mr=Math.min(b,(L+1)*Ii),Br=Do.useMemo(()=>{let F=e.match(/\/([^/]+)\.json$/);return F?F[1]:e},[e]),k=Do.useMemo(()=>{if(!v)return null;if(v.scope==="character"&&v.characterName)return`character: ${v.characterName}`;if(v.scope==="chat"&&v.chatName)return`chat: ${v.chatName}`;return null},[v]),s=(F)=>{a((gr)=>{let Or=new Set(gr);return Or.add(F),Or}),setTimeout(()=>{a((gr)=>{if(!gr.has(F))return gr;let Or=new Set(gr);return Or.delete(F),Or})},s$)},vr=async(F)=>{if(await QP(String(F.id)))s(`${F.id}:id`)},Qr=async(F)=>{if(await QP(JSON.stringify(F,null,2)))s(`${F.id}:json`)};Do.useEffect(()=>{if(N===null)return;let F=setTimeout(()=>y(null),rL);return()=>clearTimeout(F)},[N]);let Gr=(F)=>{let gr=String(F.id);if(N===gr)W({type:"delete_record",path:e,recordId:gr}),y(null);else y(gr)};Do.useEffect(()=>{y(null),er(null)},[L,q,Z,e]),Do.useEffect(()=>{C("records")},[e]),Do.useEffect(()=>{if(f!=="stats")return;W({type:"analyze_collection",path:e})},[f,e,O,rr,W]);let V=j.jsxDEV("div",{className:"ls-modal-overlay",onClick:(F)=>{if(F.target===F.currentTarget)H()},children:j.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(F)=>F.stopPropagation(),children:[j.jsxDEV("div",{className:"ls-modal-header",children:[j.jsxDEV("span",{className:"ls-modal-title",children:[j.jsxDEV(de,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-name",children:Br},void 0,!1,void 0,this),k&&j.jsxDEV("span",{className:"ls-inspect-title-path",title:e,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-path",title:e,children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:()=>ur((F)=>F+1),title:"Refresh records",style:{marginRight:4},children:j.jsxDEV(qv,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:H,title:"Close (Esc)",children:j.jsxDEV(kg,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>C("records"),children:[j.jsxDEV(fn,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>C("stats"),children:[j.jsxDEV(q0,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{className:"ls-inspect-toolbar",children:[j.jsxDEV("div",{className:"ls-inspect-search",children:[j.jsxDEV(W0,{size:12},void 0,!1,void 0,this),j.jsxDEV("input",{type:Z==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:Z==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":Z==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:G,onChange:(F)=>m(F.target.value),autoFocus:!0,spellCheck:Z!=="jsonquery",autoCorrect:Z==="jsonquery"?"off":"on",autoCapitalize:Z==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),j.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>_("shallow"),children:j.jsxDEV(W0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>_("deep"),children:j.jsxDEV(M0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>_("jsonquery"),children:j.jsxDEV(Wg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-pager",children:[j.jsxDEV("span",{className:"ls-inspect-pager-status",children:b===0?"No matching records":j.jsxDEV(j.Fragment,{children:["Showing ",j.jsxDEV("strong",{children:Ar},void 0,!1,void 0,this),"–",j.jsxDEV("strong",{children:mr},void 0,!1,void 0,this)," of ",j.jsxDEV("strong",{children:b},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>T((F)=>Math.max(0,F-1)),disabled:L===0,title:"Previous page",children:j.jsxDEV(Vn,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>T((F)=>Math.min(Rr-1,F+1)),disabled:L>=Rr-1,title:"Next page",children:j.jsxDEV(Av,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),u&&j.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[j.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),j.jsxDEV("span",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-body",children:n===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):n.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:b===0&&q?j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{children:["No records match “",q,"”"]},void 0,!0,void 0,this),j.jsxDEV("button",{onClick:()=>m(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):b===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):j.jsxDEV("div",{className:"ls-inspect-records",children:n.map((F)=>{let gr=String(F.id),Or=lr.has(`${F.id}:id`),qr=lr.has(`${F.id}:json`);return j.jsxDEV("div",{className:"ls-inspect-record",children:[j.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${gr}`,children:[j.jsxDEV("code",{children:[gr.slice(0,12),"…"]},void 0,!0,void 0,this),j.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",j.jsxDEV("time",{title:new Date(F.createdAt).toISOString(),children:Fb(F.createdAt)},void 0,!1,void 0,this),F.updatedAt!==F.createdAt&&j.jsxDEV(j.Fragment,{children:[" · ","updated ",j.jsxDEV("time",{title:new Date(F.updatedAt).toISOString(),children:Fb(F.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:Or?"Copied!":"Copy ID",onClick:()=>vr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Or?"var(--lumiverse-accent)":"inherit",opacity:Or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(pe,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:qr?"Copied!":"Copy full JSON",onClick:()=>Qr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:qr?"var(--lumiverse-accent)":"inherit",opacity:qr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>er(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(se,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action"+(N===gr?" ls-inspect-record-action-confirm":""),title:N===gr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Gr(F),style:{background:N===gr?"rgba(246, 130, 130, 0.18)":"transparent",border:N===gr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:N===gr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:N===gr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:N===gr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:N===gr?600:400,borderRadius:3},children:[j.jsxDEV(Kg,{size:11},void 0,!1,void 0,this),N===gr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Zw(oL(F))}},void 0,!1,void 0,this)]},gr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&j.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):j.jsxDEV(lL,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return j.jsxDEV(j.Fragment,{children:[Qm.createPortal(V,document.body),p&&j.jsxDEV(Jm,{path:e,record:p,onClose:()=>er(null),sendToBackend:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function oL(e){let{id:v,createdAt:n,updatedAt:b,...u}=e;try{return JSON.stringify(u,null,2)}catch{return String(e)}}var gL={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function eL(e){if(typeof e==="string")return`"${e.length>32?e.slice(0,30)+"…":e}"`;if(e===null)return"null";return String(e)}function zP(e){if(!Number.isFinite(e))return"—";return Number.isInteger(e)?String(e):e.toFixed(2)}var lL=({stats:e})=>{return j.jsxDEV("div",{className:"ls-inspect-stats",children:[j.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",j.jsxDEV("strong",{children:e.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",e.totalRecords===1?"record":"records"," ·"," ",j.jsxDEV("strong",{children:e.fields.length},void 0,!1,void 0,this)," ",e.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-grid",children:e.fields.map((v)=>j.jsxDEV(vL,{field:v,totalRecords:e.totalRecords},v.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},vL=({field:e,totalRecords:v})=>{let n=v===0?0:Math.round(e.presence/v*100),b=Object.entries(e.types);return b.sort((u,P)=>P[1]-u[1]),j.jsxDEV("div",{className:"ls-inspect-stats-card",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[j.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:e.name,children:e.name},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${e.presence} of ${v} records`,children:[n,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:b.map(([u,P])=>j.jsxDEV("span",{className:gL[u],children:[u," · ",P]},u,!0,void 0,this))},void 0,!1,void 0,this),e.numericRange&&j.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[j.jsxDEV("span",{children:["min ",j.jsxDEV("strong",{children:zP(e.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["max ",j.jsxDEV("strong",{children:zP(e.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["mean ",j.jsxDEV("strong",{children:zP(e.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),e.topValues.length>0&&j.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",e.topValues.length," of ",e.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:e.topValues.map((u,P)=>j.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(u.value),children:[j.jsxDEV("code",{children:eL(u.value)},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",u.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var xb=wr(vo(),1),Um=wr(Ch(),1);var bo=wr(ro(),1);function iL(e){if(e.scope==="character"&&e.characterName&&e.characterId)return{label:"Character",name:e.characterName,id:e.characterId};if(e.scope==="chat"&&e.chatName&&e.chatId)return{label:"Chat",name:e.chatName,id:e.chatId};return null}var Km=({target:e,recordCount:v,onConfirm:n,onCancel:b})=>{let u=xb.useRef(null);xb.useEffect(()=>{let O=(H)=>{if(H.key==="Escape")b()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[b]),xb.useEffect(()=>{let O=(H)=>{if(H.key!=="Tab")return;let W=u.current;if(!W)return;let G=Array.from(W.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(G.length===0)return;let m=G[0],q=G[G.length-1],X=document.activeElement,L=X!==null&&W.contains(X);if(H.shiftKey){if(!L||X===m)H.preventDefault(),q.focus()}else if(!L||X===q)H.preventDefault(),m.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=bo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)b()},children:bo.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:u,onClick:(O)=>O.stopPropagation(),children:[bo.jsxDEV("div",{className:"ls-modal-header",children:[bo.jsxDEV("span",{className:"ls-modal-title",children:[bo.jsxDEV(Kg,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),bo.jsxDEV("button",{className:"ls-modal-close",onClick:b,title:"Cancel (Esc)",children:bo.jsxDEV(kg,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bo.jsxDEV("div",{className:"ls-drop-body",children:[bo.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),bo.jsxDEV("div",{className:"ls-drop-target",children:[bo.jsxDEV("div",{className:"ls-drop-target-name",children:e.name},void 0,!1,void 0,this),bo.jsxDEV("div",{className:"ls-drop-target-meta",children:[bo.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":e.scope,children:Gm[e.scope]},void 0,!1,void 0,this),bo.jsxDEV("span",{className:"ls-drop-target-size",children:Bw(e.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=iL(e);if(!O)return null;return bo.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",bo.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),bo.jsxDEV("div",{className:"ls-drop-target-path",title:e.path,children:e.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v===null?bo.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):v>=0?bo.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:v===0?"Collection is currently empty.":bo.jsxDEV(bo.Fragment,{children:["Will delete ",bo.jsxDEV("strong",{children:v.toLocaleString()},void 0,!1,void 0,this)," ",v===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,bo.jsxDEV("div",{className:"ls-drop-warning",children:[bo.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),bo.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bo.jsxDEV("div",{className:"ls-drop-actions",children:[bo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:b,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),bo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:n,children:[bo.jsxDEV(Kg,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Um.createPortal(P,document.body)};var Jv=wr(ro(),1),$m=({variables:e,collections:v,scripts:n,sendToBackend:b,inspectPath:u,inspectRecords:P,inspectTotal:O,inspectError:H,inspectStats:W,inspectRefreshToken:G,onInspect:m,dropTarget:q,dropTargetCount:X,onDrop:L,onDropConfirm:T})=>{return Jv.jsxDEV(Jv.Fragment,{children:[Jv.jsxDEV("div",{className:"ls-storage-list",children:[Jv.jsxDEV(mm,{variables:e,sendToBackend:b},void 0,!1,void 0,this),Jv.jsxDEV(Xm,{collections:v,scripts:n,sendToBackend:b,onInspect:m,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u!==null&&Jv.jsxDEV(zm,{path:u,summary:v?.find((Z)=>Z.path===u),records:P,total:O,error:H,stats:W,refreshToken:G,onClose:()=>m(null),sendToBackend:b},void 0,!1,void 0,this),q!==null&&Jv.jsxDEV(Km,{target:q,recordCount:X,onConfirm:T,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Hr=wr(ro(),1),Lm=({onBackendMessage:e,sendToBackend:v})=>{let[n,b]=Yo.useState("manage"),[u,P]=Yo.useState([]),[O,H]=Yo.useState(hw),[W,G]=Yo.useState({characterId:null,characterName:null,chatId:null}),[m,q]=Yo.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[X,L]=Yo.useState([]),[T,Z]=Yo.useState([]),[_,rr]=Yo.useState(null),[ur,lr]=Yo.useState(null),[a,p]=Yo.useState(null),[er,N]=Yo.useState(null),[y,f]=Yo.useState(0),[C,Rr]=Yo.useState(null),[Ar,mr]=Yo.useState(0),[Br,k]=Yo.useState(null),[s,vr]=Yo.useState(null),[Qr,Gr]=Yo.useState(null),[V,F]=Yo.useState({});Yo.useEffect(()=>{let qr=e((Zr)=>{let hr=Zr;switch(hr.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${hr.scripts.length} script(s)`),P(hr.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${hr.script.id}, codeLen=${hr.script.code?.length??-1}`),P((Cr)=>Cr.map((jr)=>jr.id===hr.script.id?hr.script:jr));break}case"settings_updated":H(hr.settings);break;case"active_context":G({characterId:hr.characterId,characterName:hr.characterName,chatId:hr.chatId}),v({type:"get_variables"});break;case"variables_updated":rr(hr.variables);break;case"collections_list":lr(hr.collections);break;case"collection_records":N((Cr)=>{return hr.records}),f(hr.total),Rr(hr.error??null);break;case"collection_stats":k((Cr)=>{return hr.stats});break;case"collection_count":Gr((Cr)=>{return hr.count});break;case"collections_updated":v({type:"list_collections"}),mr((Cr)=>Cr+1);break;case"injections_updated":L(hr.injections);break;case"tools_updated":Z(hr.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};q((jr)=>{let Ro=jr.consoleHistory[hr.scriptId]??[],Lg=Ro.length>0?[...Ro,Cr]:Ro;return{...jr,activeScriptId:hr.scriptId,runId:hr.runId,isRunning:!0,consoleHistory:{...jr.consoleHistory,[hr.scriptId]:Lg},scriptExecInfo:{...jr.scriptExecInfo,[hr.scriptId]:{...jr.scriptExecInfo[hr.scriptId],dot:"running"}}}}),F((jr)=>({...jr,[hr.scriptId]:(jr[hr.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;q((jr)=>{let Ro=jr.consoleHistory[hr.scriptId]??[];if(Ro.length>=Cr)return jr;let nr=Ro.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:hr.entry;return{...jr,consoleHistory:{...jr.consoleHistory,[hr.scriptId]:[...Ro,nr]}}});break}case"execution_ended":q((Cr)=>{let jr=Cr.consoleHistory[hr.scriptId]??[],Ro=Cr.scriptExecInfo[hr.scriptId],Lg=!hr.success&&hr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:hr.error}]:[],nr=!hr.success?!0:Ro?.stickyError??!1,yg=!hr.success||nr?"error":"success",Yg=hr.duration??0,ao=hr.success&&Yg===0&&(Ro?.duration??0)>0?Ro.duration:hr.duration;return{...Cr,isRunning:!1,consoleHistory:Lg.length?{...Cr.consoleHistory,[hr.scriptId]:[...jr,...Lg]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[hr.scriptId]:{dot:yg,duration:ao,error:hr.error??Ro?.error,stickyError:nr}}}});break;case"error":console.warn("[LumiScript]",hr.message);break}});return v({type:"get_scripts"}),v({type:"get_settings"}),v({type:"get_active_context"}),v({type:"get_injections"}),v({type:"get_tools"}),qr},[e,v]),Yo.useEffect(()=>{if(n==="storage")v({type:"list_collections"})},[n,v]),Yo.useEffect(()=>{if(Gr(null),s)v({type:"count_collection",path:s.path})},[s,v]);let gr=Yo.useCallback((qr)=>{q((Zr)=>({...Zr,consoleHistory:{...Zr.consoleHistory,[qr]:[]}}))},[]),Or=Yo.useCallback((qr)=>{q((Zr)=>{let hr=Zr.scriptExecInfo[qr];if(!hr?.stickyError)return Zr;return{...Zr,scriptExecInfo:{...Zr.scriptExecInfo,[qr]:{...hr,dot:"idle",stickyError:!1}}}})},[]);return Hr.jsxDEV("div",{className:"ls-panel",children:[Hr.jsxDEV("div",{className:"ls-tabs",children:[Hr.jsxDEV("button",{className:`ls-tab-pill${n==="manage"?" ls-active":""}`,onClick:()=>b("manage"),children:[Hr.jsxDEV(Wg,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${n==="status"?" ls-active":""}`,onClick:()=>b("status"),children:[Hr.jsxDEV(Bn,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${n==="storage"?" ls-active":""}`,onClick:()=>b("storage"),children:[Hr.jsxDEV(de,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[n==="manage"&&Hr.jsxDEV(Rm,{scripts:u,activeContext:W,execInfo:m.scriptExecInfo,activeRunScriptId:m.activeScriptId,isRunning:m.isRunning,consoleHistory:m.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:gr,onScriptOpened:Or,sendToBackend:v},void 0,!1,void 0,this),n==="status"&&Hr.jsxDEV(nL,{scripts:u,execInfo:m.scriptExecInfo,invocationCounts:V,injections:X,tools:T,sendToBackend:v},void 0,!1,void 0,this),n==="storage"&&Hr.jsxDEV($m,{variables:_,collections:ur,scripts:u,sendToBackend:v,inspectPath:a,inspectRecords:er,inspectTotal:y,inspectError:C,inspectStats:Br,inspectRefreshToken:Ar,onInspect:(qr)=>{p(qr),N(null),f(0),k(null)},dropTarget:s,dropTargetCount:Qr,onDrop:vr,onDropConfirm:()=>{if(!s)return;let qr=s.path;if(a===qr)p(null),N(null),f(0),k(null);v({type:"drop_collection",path:qr}),vr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},hL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},nL=({scripts:e,execInfo:v,invocationCounts:n,injections:b,tools:u,sendToBackend:P})=>{let O=e.filter((q)=>q.type==="trigger"&&q.enabled),H=Object.fromEntries(e.map((q)=>[q.id,q.name])),[W,G]=Yo.useState(new Set),m=(q)=>{G((X)=>{let L=new Set(X);if(L.has(q))L.delete(q);else L.add(q);return L})};return Hr.jsxDEV("div",{className:"ls-status-list",children:[Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(Wg,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((q)=>{let X=v[q.id],L=X?.dot??"idle",T={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],Z=q.triggers??[],_=n[q.id];return Hr.jsxDEV("div",{className:"ls-status-row",children:[Hr.jsxDEV("div",{className:"ls-status-row-main",children:[Hr.jsxDEV("span",{className:T,title:hL[L]},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-name",children:q.name},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-right",children:[_!==void 0&&_>0&&Hr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${_} time${_!==1?"s":""} this session`,children:["×",_]},void 0,!0,void 0,this),X?.duration!==void 0&&L!=="running"&&Hr.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[X.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Z.length>0?Hr.jsxDEV("div",{className:"ls-status-events",children:Z.map((rr)=>Hr.jsxDEV("span",{className:"ls-event-badge",children:[Hr.jsxDEV(Mv,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Hr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&X?.error&&Hr.jsxDEV("div",{className:"ls-status-error-row",children:Hr.jsxDEV("span",{className:"ls-status-error-text",children:X.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(bb,{size:10},void 0,!1,void 0,this),"Active Tools",u.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):u.map((q)=>Hr.jsxDEV("div",{className:"ls-tool-row",children:[Hr.jsxDEV("div",{className:"ls-tool-name",title:q.description,children:q.name},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-tool-meta",children:[q.council_eligible&&Hr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:q.scriptName},void 0,!1,void 0,this),Hr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${q.name}`,title:`Unregister "${q.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:q.name}),children:Hr.jsxDEV(Kg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(lb,{size:10},void 0,!1,void 0,this),"Active Injections",b.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:b.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:b.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):b.map((q)=>{let X=W.has(q.id);return Hr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>m(q.id),children:[Hr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${q.mode}`,title:q.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:q.mode==="intercept"?Hr.jsxDEV(Zn,{size:11},void 0,!1,void 0,this):Hr.jsxDEV(Cn,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-body",children:[Hr.jsxDEV("div",{className:"ls-inject-header-row",children:[Hr.jsxDEV("span",{className:"ls-inject-id",title:q.id,children:q.id},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-meta",children:[Hr.jsxDEV("span",{className:"ls-inject-role",children:q.role},void 0,!1,void 0,this),q.mode==="intercept"&&q.depth>0&&Hr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${q.depth} message${q.depth!==1?"s":""}`,children:["d:",q.depth]},void 0,!0,void 0,this),q.ephemeral&&Hr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Hr.jsxDEV(Qi,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:H[q.scriptId]??q.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-chevron",children:X?Hr.jsxDEV(Me,{size:10},void 0,!1,void 0,this):Hr.jsxDEV(mg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Hr.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:q.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Nb=wr(vo(),1);var Nr=wr(ro(),1),Im=({onBackendMessage:e,sendToBackend:v})=>{let[n,b]=Nb.useState(hw),[u,P]=Nb.useState([]);Nb.useEffect(()=>{let G=e((m)=>{let q=m;if(q.type==="scripts_updated")P(q.scripts);if(q.type==="settings_updated")b(q.settings)});return v({type:"get_settings"}),v({type:"get_scripts"}),G},[e,v]);let O=u.filter((G)=>G.type==="trigger").length,H=u.filter((G)=>G.type==="library").length,W=(G)=>{v({type:"update_settings",patch:{enabled:G}})};return Nr.jsxDEV("div",{className:"ls-settings",children:[Nr.jsxDEV("div",{className:"ls-settings-header",children:Nr.jsxDEV("span",{className:"ls-settings-title",children:[Nr.jsxDEV(Cl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-toggle-row",children:[Nr.jsxDEV("label",{className:"ls-toggle",children:[Nr.jsxDEV("input",{type:"checkbox",checked:n.enabled,onChange:(G)=>W(G.target.checked)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-counts",children:[Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(Wg,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(Gi,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:H},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Qi,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(n.scriptTimeoutMs/1000),onChange:(G)=>{let m=Math.max(5,Math.min(300,Number(G.target.value)||60));v({type:"update_settings",patch:{scriptTimeoutMs:m*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:n.consoleHistoryLimit,onChange:(G)=>{let m=Math.max(50,Math.min(2000,Number(G.target.value)||500));v({type:"update_settings",patch:{consoleHistoryLimit:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(hb,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:n.editorFontSize,onChange:(G)=>{let m=Math.max(10,Math.min(24,Number(G.target.value)||12));v({type:"update_settings",patch:{editorFontSize:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:n.autosaveDebounceMs,onChange:(G)=>{let m=Math.max(300,Math.min(5000,Number(G.target.value)||1200));v({type:"update_settings",patch:{autosaveDebounceMs:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:n.defaultTriggerTemplate,onChange:(G)=>v({type:"update_settings",patch:{defaultTriggerTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:n.defaultLibraryTemplate,onChange:(G)=>v({type:"update_settings",patch:{defaultLibraryTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function bL(e){let v=e?.type;return typeof v==="string"&&v.startsWith("dom_")}var Xg=new Map;function r1(e,v){Xg.set(e,v)}function Se(e){let v=Xg.get(e);for(let[n,b]of Qv)if(b.elementId===e){if(v)v.removeEventListener(b.event,b.handler);Qv.delete(n)}Xg.delete(e)}var Cb=new Map,Bb=new Map,Fi=new Map,Zb=new Map,Qv=new Map,Sb=new Map,sh=new Map;function Nm(e,v){return`${e}::${v}`}function Fm(e,v){return`${e}:${v}`}function Bm(e){let v=e.target,n={type:e.type};if(v){if(v.id)n.targetId=v.id;if("value"in v)n.targetValue=v.value;if("checked"in v)n.targetChecked=v.checked;if(v.dataset&&Object.keys(v.dataset).length>0){let b={};for(let[u,P]of Object.entries(v.dataset))if(P!==void 0)b[u]=P;n.dataset=b}}if(e instanceof MouseEvent)n.clientX=e.clientX,n.clientY=e.clientY;else if(typeof TouchEvent<"u"&&e instanceof TouchEvent){let b=e.touches[0]??e.changedTouches[0];if(b)n.clientX=b.clientX,n.clientY=b.clientY}if(e instanceof CustomEvent&&e.detail!==void 0)try{JSON.stringify(e.detail),n.detail=e.detail}catch{}return n}function tL(e,v){let n=Bm(e),b={};for(let[X,L]of Object.entries(v.dataset))if(L!==void 0)b[X]=L;let u={};for(let X of Array.from(v.attributes)){if(X.name.startsWith("on"))continue;if(X.name.startsWith("data-"))continue;u[X.name]=X.value}let P={tagName:v.tagName,classList:Array.from(v.classList),dataset:b,attributes:u,textContent:(v.textContent??"").trim()};if(v.id)P.id=v.id;if(v instanceof HTMLInputElement||v instanceof HTMLTextAreaElement){if(P.value=v.value,v instanceof HTMLInputElement&&(v.type==="checkbox"||v.type==="radio"))P.checked=v.checked}else if(v instanceof HTMLSelectElement)P.value=v.value,P.selectedIndex=v.selectedIndex,P.selectedText=v.options[v.selectedIndex]?.text;let O=e,H=e,W={ctrl:e instanceof MouseEvent||e instanceof KeyboardEvent?O.ctrlKey||H.ctrlKey:!1,shift:e instanceof MouseEvent||e instanceof KeyboardEvent?O.shiftKey||H.shiftKey:!1,alt:e instanceof MouseEvent||e instanceof KeyboardEvent?O.altKey||H.altKey:!1,meta:e instanceof MouseEvent||e instanceof KeyboardEvent?O.metaKey||H.metaKey:!1};if(e instanceof MouseEvent)W.button=e.button;let G,m=v.closest("[data-message-id]");if(m){let X=m.getAttribute("data-message-id")??"";if(X){let Z=((m.querySelector("[data-part]")??m).getAttribute?.("data-part")??"character")==="user"?"user":"assistant";G={id:X,role:Z,swipeId:0}}}let q={...n,matched:P,modifiers:W};if(G)q.message=G;return q}function uL(e,v,n){let b=Nm(e,v),u=sh.get(b);if(u){u.count++;return}let P=(O)=>{let H=O.target;if(!H)return;for(let W of Sb.values()){if(W.root!==e||W.event!==v)continue;if(e==="chat"){let q=H.closest("[data-message-id]");if(!q)continue;if(W.messageId&&q.getAttribute("data-message-id")!==W.messageId)continue}let G=H.closest(W.selector);if(!G)continue;if(W.preventDefault)O.preventDefault();if(W.stopPropagation)O.stopPropagation();let m=tL(O,G);n({type:"dom_delegate_event",delegationId:W.delegationId,data:m})}};document.body.addEventListener(v,P,!0),sh.set(b,{handler:P,count:1})}function wL(e,v){let n=Nm(e,v),b=sh.get(n);if(!b)return;if(b.count--,b.count>0)return;document.body.removeEventListener(v,b.handler,!0),sh.delete(n)}function PL(e,v){return`@scope ([data-ls-script="${v}"]) {
${e}
}`}function OL(e,v=5000){let n=document.querySelector(e);if(n)return Promise.resolve(n);return new Promise((b,u)=>{let P=!1,O=new MutationObserver(()=>{let H=document.querySelector(e);if(H&&!P)P=!0,O.disconnect(),b(H)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),u(Error(`waitForElement: timeout for "${e}"`))},v)})}function HL(e){return e.querySelector('[class*="_bubble_"]')}var ll=new Map,AL=50;function qL(e,v,n){if(ll.size>=AL){let b=ll.keys().next().value;if(b)ll.get(b)?.cancel(),ll.delete(b)}ll.set(e,{scriptId:v,cancel:n})}function ML(e){for(let[v,n]of ll)if(n.scriptId===e)n.cancel(),ll.delete(v)}function Zm(e,v,n){let b=v((u)=>{if(!bL(u))return;let P=u;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:H,target:W,html:G,position:m,stableId:q,parentElementId:X}=P;if(Xg.has(H)){console.warn(`[LumiScript] dom_inject: elementId "${H}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${H}">${G}</div>`,T=null;if(X){let Z=Xg.get(X);if(!Z){console.warn(`[LumiScript] dom_inject: parentElementId "${X}" not in elementMap — drop`);break}let _=Z.querySelector(W);if(!_){console.warn(`[LumiScript] dom_inject: selector "${W}" not found within parent "${X}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,_.insertAdjacentElement(m,rr),T=rr}else T=e.dom.inject(W,L,m);if(T){if(Xg.set(H,T),Cb.set(H,O),q)Bb.set(Fm(O,q),H)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:H,messageId:W,html:G,position:m,stableId:q}=P,X=(rr)=>{let ur=rr.querySelector("[data-part]"),lr=ur?.getAttribute("data-part")??"character",a=ur?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=m==="header"?` data-ls-tint="${lr}"`:"",er=` data-ls-mode="${a}"`,N=`<div data-ls-script="${O}" data-ls-el="${H}"${p}${er}>${G}</div>`,y,f;if(m==="header")y=rr,f="afterbegin";else if(m==="footer"&&a==="minimal")y=rr,f="beforeend";else y=HL(rr)??rr,f="beforeend";let C=e.dom.inject(y,N,f);if(Xg.set(H,C),Cb.set(H,O),q)Bb.set(Fm(O,q),H)},L=`[data-message-id="${W}"]`,T=document.querySelector(L);if(T){X(T);break}let Z=!1;qL(H,O,()=>{Z=!0}),OL(L).then((rr)=>{if(ll.delete(H),Z)return;X(rr)}).catch(()=>{ll.delete(H)});break}case"dom_update":{let O=Xg.get(P.elementId);if(!O)break;let H=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;H.innerHTML=P.html;break}case"dom_remove":{xm(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:H,css:W}=P,G=PL(W,O),m=e.dom.addStyle(G);Fi.set(H,m),Zb.set(H,O);break}case"dom_remove_style":{let O=Fi.get(P.styleId);if(O)O(),Fi.delete(P.styleId),Zb.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:H,event:W,preventDefault:G}=P,m=Xg.get(O);if(!m)break;let q=(X)=>{if(G)X.preventDefault();let L=Bm(X);n({type:"dom_event",elementId:O,listenerId:H,event:W,data:L})};m.addEventListener(W,q),Qv.set(H,{elementId:O,event:W,handler:q});break}case"dom_unlisten":{let O=Qv.get(P.listenerId);if(!O)break;let H=Xg.get(O.elementId);if(H)H.removeEventListener(O.event,O.handler);Qv.delete(P.listenerId);break}case"dom_delegate_register":{let{delegationId:O,scriptId:H,selector:W,event:G,root:m,messageId:q,preventDefault:X,stopPropagation:L}=P;Sb.set(O,{delegationId:O,scriptId:H,selector:W,event:G,root:m,messageId:q,preventDefault:X,stopPropagation:L}),uL(m,G,n);break}case"dom_delegate_unregister":{let{delegationId:O,event:H}=P,W=Sb.get(O);if(!W)break;Sb.delete(O),wL(W.root,H);break}case"dom_cleanup_script":{let{scriptId:O}=P;ML(O);for(let[H,W]of Cb)if(W===O)xm(H);for(let[H,W]of Zb)if(W===O){let G=Fi.get(H);if(G)G();Fi.delete(H),Zb.delete(H)}for(let[H]of Bb)if(H.startsWith(O+":"))Bb.delete(H);break}case"dom_make_draggable":{let{elementId:O,handleSelector:H}=P,W=Xg.get(O);if(!W)break;let G=!1,m=!1;W.addEventListener("pointerdown",(q)=>{if(q.button!==0)return;if(H&&!q.target.closest(H))return;let X=W.firstElementChild?.firstElementChild??W.firstElementChild??W,L=X.getBoundingClientRect();X.style.transform="none",X.style.top=`${L.top}px`,X.style.left=`${L.left}px`,X.style.bottom="auto",X.style.right="auto",G=!0,m=!1;let T=q.clientX-L.left,Z=q.clientY-L.top;X.style.cursor="grabbing";let _=(ur)=>{if(!G)return;m=!0,X.style.top=`${ur.clientY-Z}px`,X.style.left=`${ur.clientX-T}px`},rr=()=>{if(!G)return;G=!1,X.style.cursor="",document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",_),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),q.preventDefault()}),W.addEventListener("click",(q)=>{if(m)q.stopImmediatePropagation(),q.preventDefault(),m=!1},!0);break}}});return()=>{b();for(let[,u]of ll)u.cancel();ll.clear();for(let[,u]of Qv){let P=Xg.get(u.elementId);if(P)P.removeEventListener(u.event,u.handler)}Qv.clear();for(let[u,P]of sh){let O=u.split("::")[1]??"";if(O)document.body.removeEventListener(O,P.handler,!0)}sh.clear(),Sb.clear();for(let[,u]of Xg)try{u.remove()}catch{}Xg.clear(),Cb.clear(),Bb.clear();for(let[,u]of Fi)try{u()}catch{}Fi.clear(),Zb.clear()}}function xm(e){for(let[n,b]of Qv)if(b.elementId===e){let u=Xg.get(e);if(u)u.removeEventListener(b.event,b.handler);Qv.delete(n)}let v=Xg.get(e);if(v)try{v.remove()}catch{}Xg.delete(e),Cb.delete(e)}function RL(e){let v=e?.type;return v==="ls_modal_open"||v==="ls_modal_set_title"||v==="ls_modal_dismiss"}var K0=new Map;function Cm(e,v,n){let b=v((u)=>{if(!RL(u))return;let P=u;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:H,rootElementId:W,options:G}=P;if(K0.has(H))break;let m;try{m=e.ui.showModal({title:G.title,width:G.width,maxHeight:G.maxHeight,persistent:G.persistent})}catch(X){console.warn("[LumiScript] ctx.ui.showModal failed:",X),n({type:"ls_modal_dismissed",modalId:H});break}r1(W,m.root),m.root.setAttribute("data-ls-script",O),m.root.setAttribute("data-ls-modal",H);let q={modalId:H,rootElementId:W,handle:m,echoed:!1};K0.set(H,q),m.onDismiss(()=>{if(q.echoed)return;q.echoed=!0,Se(W),K0.delete(H),n({type:"ls_modal_dismissed",modalId:H})}),n({type:"ls_modal_opened",modalId:H});break}case"ls_modal_set_title":{let O=K0.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=K0.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Se(O.rootElementId),K0.delete(P.modalId),n({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{b();for(let u of K0.values()){try{u.handle.dismiss()}catch{}Se(u.rootElementId)}K0.clear()}}function WL(e){return e?.type==="ls_context_menu_show"}function Sm(e,v,n){let b=v(async(u)=>{if(!WL(u))return;let P=u,O=null;try{O=(await e.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(H){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",H)}n({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{b()}}function mL(e){let v=e?.type;return v==="ls_input_bar_action_register"||v==="ls_input_bar_action_set_label"||v==="ls_input_bar_action_set_subtitle"||v==="ls_input_bar_action_set_enabled"||v==="ls_input_bar_action_destroy"}var Vl=new Map;function GL(e,v){return`${e}:${v}`}function Tm(e,v,n){let b=v((u)=>{if(!mL(u))return;let P=u,O=GL(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let H=Vl.get(O);if(H){try{H.destroy()}catch{}Vl.delete(O)}let W;try{W=e.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(G){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",G);break}Vl.set(O,W),W.onClick(()=>{n({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),n({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let H=Vl.get(O);if(!H)break;try{H.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let H=Vl.get(O);if(!H)break;if(typeof H.setSubtitle!=="function")break;try{H.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let H=Vl.get(O);if(!H)break;try{H.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let H=Vl.get(O);if(!H)break;try{H.destroy()}catch{}Vl.delete(O);break}}});return()=>{b();for(let u of Vl.values())try{u.destroy()}catch{}Vl.clear()}}function XL(e){let v=e?.type;return v==="ls_float_widget_create"||v==="ls_float_widget_move"||v==="ls_float_widget_set_visible"||v==="ls_float_widget_destroy"}var zv=new Map;function km(e,v,n){let b=v((u)=>{if(!XL(u))return;let P=u;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:H,rootElementId:W,options:G}=P,m=zv.get(H);if(m){try{m.handle.destroy()}catch{}Se(m.rootElementId),zv.delete(H)}let q;try{q=e.ui.createFloatWidget({width:G.width,height:G.height,initialPosition:G.initialPosition,snapToEdge:G.snapToEdge,tooltip:G.tooltip,chromeless:G.chromeless})}catch(X){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",X);break}r1(W,q.root),q.root.setAttribute("data-ls-script",O),q.root.setAttribute("data-ls-widget",H),zv.set(H,{widgetId:H,rootElementId:W,handle:q}),q.onDragEnd((X)=>{n({type:"ls_float_widget_drag_end",widgetId:H,x:X.x,y:X.y})}),n({type:"ls_float_widget_created",widgetId:H});break}case"ls_float_widget_move":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Se(O.rootElementId),zv.delete(P.widgetId);break}}});return()=>{b();for(let u of zv.values()){try{u.handle.destroy()}catch{}Se(u.rootElementId)}zv.clear()}}function YL(e){let v=e?.type;return v==="ls_drawer_tab_register"||v==="ls_drawer_tab_set_title"||v==="ls_drawer_tab_set_short_name"||v==="ls_drawer_tab_set_badge"||v==="ls_drawer_tab_activate"||v==="ls_drawer_tab_destroy"}var vl=new Map;function JL(e,v){return`${e}:${v}`}function Dm(e,v,n){let b=v((u)=>{if(!YL(u))return;let P=u,O=JL(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let H=vl.get(O);if(H){try{H.handle.destroy()}catch{}Se(H.rootElementId),vl.delete(O)}let W;try{W=e.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(G){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",G);break}r1(P.rootElementId,W.root),W.root.setAttribute("data-ls-script",P.scriptId),W.root.setAttribute("data-ls-tab",P.tabId),vl.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:W}),W.onActivate(()=>{n({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),n({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let H=vl.get(O);if(!H)break;try{H.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let H=vl.get(O);if(!H)break;try{H.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let H=vl.get(O);if(!H)break;try{H.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let H=vl.get(O);if(!H)break;try{H.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let H=vl.get(O);if(!H)break;try{H.handle.destroy()}catch{}Se(H.rootElementId),vl.delete(O);break}}});return()=>{b();for(let u of vl.values()){try{u.handle.destroy()}catch{}Se(u.rootElementId)}vl.clear()}}var Tb=wr(ro(),1);function wfo(e){let v=[],n=e.dom.addStyle($R);v.push(n);let b=[],u=e.onBackendMessage((rr)=>{for(let ur of b)ur(rr)});v.push(u);let P=(rr)=>{return b.push(rr),()=>{let ur=b.indexOf(rr);if(ur!==-1)b.splice(ur,1)}},O=(rr)=>{e.sendToBackend(rr)},H=Zm(e,P,O);v.push(H);let W=Cm(e,P,O);v.push(W);let G=Sm(e,P,O);v.push(G);let m=Tm(e,P,O);v.push(m);let q=km(e,P,O);v.push(q);let X=Dm(e,P,O);v.push(X),O({type:"frontend_ready"});let L=e.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),T=KP.createRoot(L.root);T.render(Tb.jsxDEV(UP.StrictMode,{children:Tb.jsxDEV(Lm,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>{try{T.unmount()}catch{}try{L.destroy()}catch{}});let Z=e.ui.mount("settings_extensions"),_=KP.createRoot(Z);return _.render(Tb.jsxDEV(UP.StrictMode,{children:Tb.jsxDEV(Im,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>_.unmount()),()=>{for(let rr of v)try{rr()}catch{}e.dom.cleanup()}}export{wfo as setup};
