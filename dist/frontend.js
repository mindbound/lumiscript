var XJ=Object.create;var{getPrototypeOf:YJ,defineProperty:M6,getOwnPropertyNames:JJ}=Object;var QJ=Object.prototype.hasOwnProperty;function zJ(g){return this[g]}var UJ,KJ,wr=(g,i,h)=>{var t=g!=null&&typeof g==="object";if(t){var u=i?UJ??=new WeakMap:KJ??=new WeakMap,P=u.get(g);if(P)return P}h=g!=null?XJ(YJ(g)):{};let O=i||!g||!g.__esModule?M6(h,"default",{value:g,enumerable:!0}):h;for(let A of JJ(g))if(!QJ.call(O,A))M6(O,A,{get:zJ.bind(g,A),enumerable:!0});if(t)u.set(g,O);return O};var W0=(g,i)=>()=>(i||g((i={exports:{}}).exports,i),i.exports);var $J=(g)=>g;function IJ(g,i){this[g]=$J.bind(null,i)}var LJ=(g,i)=>{for(var h in i)M6(g,h,{get:i[h],enumerable:!0,configurable:!0,set:IJ.bind(i,h)})};var io=W0((FJ,gw)=>{(function(){function g(R,L){Object.defineProperty(t.prototype,R,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",L[0],L[1])}})}function i(R){if(R===null||typeof R!=="object")return null;return R=Ie&&R[Ie]||R["@@iterator"],typeof R==="function"?R:null}function h(R,L){R=(R=R.constructor)&&(R.displayName||R.name)||"ReactClass";var or=R+"."+L;hr[or]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",L,R),hr[or]=!0)}function t(R,L,or){this.props=R,this.context=L,this.refs=rg,this.updater=or||ye}function u(){}function P(R,L,or){this.props=R,this.context=L,this.refs=rg,this.updater=or||ye}function O(){}function A(R){return""+R}function W(R){try{A(R);var L=!1}catch(Mr){L=!0}if(L){L=console;var or=L.error,tr=typeof Symbol==="function"&&Symbol.toStringTag&&R[Symbol.toStringTag]||R.constructor.name||"Object";return or.call(L,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",tr),A(R)}}function G(R){if(R==null)return null;if(typeof R==="function")return R.$$typeof===eh?null:R.displayName||R.name||null;if(typeof R==="string")return R;switch(R){case Gr:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case Zr:return"Suspense";case nr:return"SuspenseList";case Ro:return"Activity"}if(typeof R==="object")switch(typeof R.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),R.$$typeof){case Qr:return"Portal";case Or:return R.displayName||"Context";case er:return(R._context.displayName||"Context")+".Consumer";case qr:var L=R.render;return R=R.displayName,R||(R=L.displayName||L.name||"",R=R!==""?"ForwardRef("+R+")":"ForwardRef"),R;case Cr:return L=R.displayName||null,L!==null?L:G(R.type)||"Memo";case jr:L=R._payload,R=R._init;try{return G(R(L))}catch(or){}}return null}function m(R){if(R===Gr)return"<>";if(typeof R==="object"&&R!==null&&R.$$typeof===jr)return"<...>";try{var L=G(R);return L?"<"+L+">":"<...>"}catch(or){return"<...>"}}function q(){var R=Tr.A;return R===null?null:R.getOwner()}function X(){return Error("react-stack-top-frame")}function I(R){if(x0.call(R,"key")){var L=Object.getOwnPropertyDescriptor(R,"key").get;if(L&&L.isReactWarning)return!1}return R.key!==void 0}function T(R,L){function or(){k1||(k1=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",L))}or.isReactWarning=!0,Object.defineProperty(R,"key",{get:or,configurable:!0})}function Z(){var R=G(this.type);return $v[R]||($v[R]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),R=this.props.ref,R!==void 0?R:null}function c(R,L,or,tr,Mr,Fr){var xr=or.ref;return R={$$typeof:ir,type:R,key:L,props:or,_owner:tr},(xr!==void 0?xr:null)!==null?Object.defineProperty(R,"ref",{enumerable:!1,get:Z}):Object.defineProperty(R,"ref",{enumerable:!1,value:null}),R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(R,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(R,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Mr}),Object.defineProperty(R,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R}function rr(R,L){return L=c(R.type,L,R.props,R._owner,R._debugStack,R._debugTask),R._store&&(L._store.validated=R._store.validated),L}function ur(R){lr(R)?R._store&&(R._store.validated=1):typeof R==="object"&&R!==null&&R.$$typeof===jr&&(R._payload.status==="fulfilled"?lr(R._payload.value)&&R._payload.value._store&&(R._payload.value._store.validated=1):R._store&&(R._store.validated=1))}function lr(R){return typeof R==="object"&&R!==null&&R.$$typeof===ir}function E(R){var L={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(or){return L[or]})}function p(R,L){return typeof R==="object"&&R!==null&&R.key!=null?(W(R.key),E(""+R.key)):L.toString(36)}function gr(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status==="string"?R.then(O,O):(R.status="pending",R.then(function(L){R.status==="pending"&&(R.status="fulfilled",R.value=L)},function(L){R.status==="pending"&&(R.status="rejected",R.reason=L)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function N(R,L,or,tr,Mr){var Fr=typeof R;if(Fr==="undefined"||Fr==="boolean")R=null;var xr=!1;if(R===null)xr=!0;else switch(Fr){case"bigint":case"string":case"number":xr=!0;break;case"object":switch(R.$$typeof){case ir:case Qr:xr=!0;break;case jr:return xr=R._init,N(xr(R._payload),L,or,tr,Mr)}}if(xr){xr=R,Mr=Mr(xr);var go=tr===""?"."+p(xr,0):tr;return wo(Mr)?(or="",go!=null&&(or=go.replace(B0,"$&/")+"/"),N(Mr,L,or,"",function(Je){return Je})):Mr!=null&&(lr(Mr)&&(Mr.key!=null&&(xr&&xr.key===Mr.key||W(Mr.key)),or=rr(Mr,or+(Mr.key==null||xr&&xr.key===Mr.key?"":(""+Mr.key).replace(B0,"$&/")+"/")+go),tr!==""&&xr!=null&&lr(xr)&&xr.key==null&&xr._store&&!xr._store.validated&&(or._store.validated=2),Mr=or),L.push(Mr)),1}if(xr=0,go=tr===""?".":tr+":",wo(R))for(var Yr=0;Yr<R.length;Yr++)tr=R[Yr],Fr=go+p(tr,Yr),xr+=N(tr,L,or,Fr,Mr);else if(Yr=i(R),typeof Yr==="function")for(Yr===R.entries&&(N0||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N0=!0),R=Yr.call(R),Yr=0;!(tr=R.next()).done;)tr=tr.value,Fr=go+p(tr,Yr++),xr+=N(tr,L,or,Fr,Mr);else if(Fr==="object"){if(typeof R.then==="function")return N(gr(R),L,or,tr,Mr);throw L=String(R),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return xr}function y(R,L,or){if(R==null)return R;var tr=[],Mr=0;return N(R,tr,"","",function(Fr){return L.call(or,Fr,Mr++)}),tr}function f(R){if(R._status===-1){var L=R._ioInfo;L!=null&&(L.start=L.end=performance.now()),L=R._result;var or=L();if(or.then(function(Mr){if(R._status===0||R._status===-1){R._status=1,R._result=Mr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),or.status===void 0&&(or.status="fulfilled",or.value=Mr)}},function(Mr){if(R._status===0||R._status===-1){R._status=2,R._result=Mr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),or.status===void 0&&(or.status="rejected",or.reason=Mr)}}),L=R._ioInfo,L!=null){L.value=or;var tr=or.displayName;typeof tr==="string"&&(L.name=tr)}R._status===-1&&(R._status=0,R._result=or)}if(R._status===1)return L=R._result,L===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,L),"default"in L||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,L),L.default;throw R._result}function C(){var R=Tr.H;return R===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),R}function Rr(){Tr.asyncTransitions--}function Hr(R){if(Lv===null)try{var L=("require"+Math.random()).slice(0,7);Lv=(gw&&gw[L]).call(gw,"timers").setImmediate}catch(or){Lv=function(tr){D1===!1&&(D1=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Mr=new MessageChannel;Mr.port1.onmessage=tr,Mr.port2.postMessage(void 0)}}return Lv(R)}function mr(R){return 1<R.length&&typeof AggregateError==="function"?AggregateError(R):R[0]}function Br(R,L){L!==Fv-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Fv=L}function k(R,L,or){var tr=Tr.actQueue;if(tr!==null)if(tr.length!==0)try{s(tr),Hr(function(){return k(R,L,or)});return}catch(Mr){Tr.thrownErrors.push(Mr)}else Tr.actQueue=null;0<Tr.thrownErrors.length?(tr=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,or(tr)):L(R)}function s(R){if(!Nv){Nv=!0;var L=0;try{for(;L<R.length;L++){var or=R[L];do{Tr.didUsePromise=!1;var tr=or(!1);if(tr!==null){if(Tr.didUsePromise){R[L]=or,R.splice(0,L);return}or=tr}else break}while(1)}R.length=0}catch(Mr){R.splice(0,L+1),Tr.thrownErrors.push(Mr)}finally{Nv=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var ir=Symbol.for("react.transitional.element"),Qr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),er=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),qr=Symbol.for("react.forward_ref"),Zr=Symbol.for("react.suspense"),nr=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Ro=Symbol.for("react.activity"),Ie=Symbol.iterator,hr={},ye={isMounted:function(){return!1},enqueueForceUpdate:function(R){h(R,"forceUpdate")},enqueueReplaceState:function(R){h(R,"replaceState")},enqueueSetState:function(R){h(R,"setState")}},Ye=Object.assign,rg={};Object.freeze(rg),t.prototype.isReactComponent={},t.prototype.setState=function(R,L){if(typeof R!=="object"&&typeof R!=="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,L,"setState")},t.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};var Eo={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Ki in Eo)Eo.hasOwnProperty(Ki)&&g(Ki,Eo[Ki]);u.prototype=t.prototype,Eo=P.prototype=new u,Eo.constructor=P,Ye(Eo,t.prototype),Eo.isPureReactComponent=!0;var wo=Array.isArray,eh=Symbol.for("react.client.reference"),Tr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},x0=Object.prototype.hasOwnProperty,Wo=console.createTask?console.createTask:function(){return null};Eo={react_stack_bottom_frame:function(R){return R()}};var k1,vl,$v={},Iv=Eo.react_stack_bottom_frame.bind(Eo,X)(),Cw=Wo(m(X)),N0=!1,B0=/\/+/g,Ui=typeof reportError==="function"?reportError:function(R){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R==="object"&&R!==null&&typeof R.message==="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(L))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",R);return}console.error(R)},D1=!1,Lv=null,Fv=0,xv=!1,Nv=!1,gh=typeof queueMicrotask==="function"?function(R){queueMicrotask(function(){return queueMicrotask(R)})}:Hr;Eo=Object.freeze({__proto__:null,c:function(R){return C().useMemoCache(R)}});var Ki={map:y,forEach:function(R,L,or){y(R,function(){L.apply(this,arguments)},or)},count:function(R){var L=0;return y(R,function(){L++}),L},toArray:function(R){return y(R,function(L){return L})||[]},only:function(R){if(!lr(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};FJ.Activity=Ro,FJ.Children=Ki,FJ.Component=t,FJ.Fragment=Gr,FJ.Profiler=F,FJ.PureComponent=P,FJ.StrictMode=V,FJ.Suspense=Zr,FJ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tr,FJ.__COMPILER_RUNTIME=Eo,FJ.act=function(R){var L=Tr.actQueue,or=Fv;Fv++;var tr=Tr.actQueue=L!==null?L:[],Mr=!1;try{var Fr=R()}catch(Yr){Tr.thrownErrors.push(Yr)}if(0<Tr.thrownErrors.length)throw Br(L,or),R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var xr=Fr;return gh(function(){Mr||xv||(xv=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Yr,Je){Mr=!0,xr.then(function(og){if(Br(L,or),or===0){try{s(tr),Hr(function(){return k(og,Yr,Je)})}catch(lh){Tr.thrownErrors.push(lh)}if(0<Tr.thrownErrors.length){var $i=mr(Tr.thrownErrors);Tr.thrownErrors.length=0,Je($i)}}else Yr(og)},function(og){Br(L,or),0<Tr.thrownErrors.length?(og=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,Je(og)):Je(og)})}}}var go=Fr;if(Br(L,or),or===0&&(s(tr),tr.length!==0&&gh(function(){Mr||xv||(xv=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Tr.actQueue=null),0<Tr.thrownErrors.length)throw R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;return{then:function(Yr,Je){Mr=!0,or===0?(Tr.actQueue=tr,Hr(function(){return k(go,Yr,Je)})):Yr(go)}}},FJ.cache=function(R){return function(){return R.apply(null,arguments)}},FJ.cacheSignal=function(){return null},FJ.captureOwnerStack=function(){var R=Tr.getCurrentStack;return R===null?null:R()},FJ.cloneElement=function(R,L,or){if(R===null||R===void 0)throw Error("The argument must be a React element, but you passed "+R+".");var tr=Ye({},R.props),Mr=R.key,Fr=R._owner;if(L!=null){var xr;r:{if(x0.call(L,"ref")&&(xr=Object.getOwnPropertyDescriptor(L,"ref").get)&&xr.isReactWarning){xr=!1;break r}xr=L.ref!==void 0}xr&&(Fr=q()),I(L)&&(W(L.key),Mr=""+L.key);for(go in L)!x0.call(L,go)||go==="key"||go==="__self"||go==="__source"||go==="ref"&&L.ref===void 0||(tr[go]=L[go])}var go=arguments.length-2;if(go===1)tr.children=or;else if(1<go){xr=Array(go);for(var Yr=0;Yr<go;Yr++)xr[Yr]=arguments[Yr+2];tr.children=xr}tr=c(R.type,Mr,tr,Fr,R._debugStack,R._debugTask);for(Mr=2;Mr<arguments.length;Mr++)ur(arguments[Mr]);return tr},FJ.createContext=function(R){return R={$$typeof:Or,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:er,_context:R},R._currentRenderer=null,R._currentRenderer2=null,R},FJ.createElement=function(R,L,or){for(var tr=2;tr<arguments.length;tr++)ur(arguments[tr]);tr={};var Mr=null;if(L!=null)for(Yr in vl||!("__self"in L)||"key"in L||(vl=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),I(L)&&(W(L.key),Mr=""+L.key),L)x0.call(L,Yr)&&Yr!=="key"&&Yr!=="__self"&&Yr!=="__source"&&(tr[Yr]=L[Yr]);var Fr=arguments.length-2;if(Fr===1)tr.children=or;else if(1<Fr){for(var xr=Array(Fr),go=0;go<Fr;go++)xr[go]=arguments[go+2];Object.freeze&&Object.freeze(xr),tr.children=xr}if(R&&R.defaultProps)for(Yr in Fr=R.defaultProps,Fr)tr[Yr]===void 0&&(tr[Yr]=Fr[Yr]);Mr&&T(tr,typeof R==="function"?R.displayName||R.name||"Unknown":R);var Yr=1e4>Tr.recentlyCreatedOwnerStacks++;return c(R,Mr,tr,q(),Yr?Error("react-stack-top-frame"):Iv,Yr?Wo(m(R)):Cw)},FJ.createRef=function(){var R={current:null};return Object.seal(R),R},FJ.forwardRef=function(R){R!=null&&R.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof R!=="function"?console.error("forwardRef requires a render function but was given %s.",R===null?"null":typeof R):R.length!==0&&R.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",R.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),R!=null&&R.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var L={$$typeof:qr,render:R},or;return Object.defineProperty(L,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(tr){or=tr,R.name||R.displayName||(Object.defineProperty(R,"name",{value:tr}),R.displayName=tr)}}),L},FJ.isValidElement=lr,FJ.lazy=function(R){R={_status:-1,_result:R};var L={$$typeof:jr,_payload:R,_init:f},or={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return R._ioInfo=or,L._debugInfo=[{awaited:or}],L},FJ.memo=function(R,L){R==null&&console.error("memo: The first argument must be a component. Instead received: %s",R===null?"null":typeof R),L={$$typeof:Cr,type:R,compare:L===void 0?null:L};var or;return Object.defineProperty(L,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(tr){or=tr,R.name||R.displayName||(Object.defineProperty(R,"name",{value:tr}),R.displayName=tr)}}),L},FJ.startTransition=function(R){var L=Tr.T,or={};or._updatedFibers=new Set,Tr.T=or;try{var tr=R(),Mr=Tr.S;Mr!==null&&Mr(or,tr),typeof tr==="object"&&tr!==null&&typeof tr.then==="function"&&(Tr.asyncTransitions++,tr.then(Rr,Rr),tr.then(O,Ui))}catch(Fr){Ui(Fr)}finally{L===null&&or._updatedFibers&&(R=or._updatedFibers.size,or._updatedFibers.clear(),10<R&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),L!==null&&or.types!==null&&(L.types!==null&&L.types!==or.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),L.types=or.types),Tr.T=L}},FJ.unstable_useCacheRefresh=function(){return C().useCacheRefresh()},FJ.use=function(R){return C().use(R)},FJ.useActionState=function(R,L,or){return C().useActionState(R,L,or)},FJ.useCallback=function(R,L){return C().useCallback(R,L)},FJ.useContext=function(R){var L=C();return R.$$typeof===er&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),L.useContext(R)},FJ.useDebugValue=function(R,L){return C().useDebugValue(R,L)},FJ.useDeferredValue=function(R,L){return C().useDeferredValue(R,L)},FJ.useEffect=function(R,L){return R==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useEffect(R,L)},FJ.useEffectEvent=function(R){return C().useEffectEvent(R)},FJ.useId=function(){return C().useId()},FJ.useImperativeHandle=function(R,L,or){return C().useImperativeHandle(R,L,or)},FJ.useInsertionEffect=function(R,L){return R==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useInsertionEffect(R,L)},FJ.useLayoutEffect=function(R,L){return R==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useLayoutEffect(R,L)},FJ.useMemo=function(R,L){return C().useMemo(R,L)},FJ.useOptimistic=function(R,L){return C().useOptimistic(R,L)},FJ.useReducer=function(R,L,or){return C().useReducer(R,L,or)},FJ.useRef=function(R){return C().useRef(R)},FJ.useState=function(R){return C().useState(R)},FJ.useSyncExternalStore=function(R,L,or){return C().useSyncExternalStore(R,L,or)},FJ.useTransition=function(){return C().useTransition()},FJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OR=W0((xJ)=>{(function(){function g(){if(E=!1,y){var k=xJ.unstable_now();Rr=k;var s=!0;try{r:{ur=!1,lr&&(lr=!1,gr(f),f=-1),rr=!0;var ir=c;try{o:{P(k);for(Z=h(X);Z!==null&&!(Z.expirationTime>k&&A());){var Qr=Z.callback;if(typeof Qr==="function"){Z.callback=null,c=Z.priorityLevel;var Gr=Qr(Z.expirationTime<=k);if(k=xJ.unstable_now(),typeof Gr==="function"){Z.callback=Gr,P(k),s=!0;break o}Z===h(X)&&t(X),P(k)}else t(X);Z=h(X)}if(Z!==null)s=!0;else{var V=h(I);V!==null&&W(O,V.startTime-k),s=!1}}break r}finally{Z=null,c=ir,rr=!1}s=void 0}}finally{s?Hr():y=!1}}}function i(k,s){var ir=k.length;k.push(s);r:for(;0<ir;){var Qr=ir-1>>>1,Gr=k[Qr];if(0<u(Gr,s))k[Qr]=s,k[ir]=Gr,ir=Qr;else break r}}function h(k){return k.length===0?null:k[0]}function t(k){if(k.length===0)return null;var s=k[0],ir=k.pop();if(ir!==s){k[0]=ir;r:for(var Qr=0,Gr=k.length,V=Gr>>>1;Qr<V;){var F=2*(Qr+1)-1,er=k[F],Or=F+1,qr=k[Or];if(0>u(er,ir))Or<Gr&&0>u(qr,er)?(k[Qr]=qr,k[Or]=ir,Qr=Or):(k[Qr]=er,k[F]=ir,Qr=F);else if(Or<Gr&&0>u(qr,ir))k[Qr]=qr,k[Or]=ir,Qr=Or;else break r}}return s}function u(k,s){var ir=k.sortIndex-s.sortIndex;return ir!==0?ir:k.id-s.id}function P(k){for(var s=h(I);s!==null;){if(s.callback===null)t(I);else if(s.startTime<=k)t(I),s.sortIndex=s.expirationTime,i(X,s);else break;s=h(I)}}function O(k){if(lr=!1,P(k),!ur)if(h(X)!==null)ur=!0,y||(y=!0,Hr());else{var s=h(I);s!==null&&W(O,s.startTime-k)}}function A(){return E?!0:xJ.unstable_now()-Rr<C?!1:!0}function W(k,s){f=p(function(){k(xJ.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),xJ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var G=performance;xJ.unstable_now=function(){return G.now()}}else{var m=Date,q=m.now();xJ.unstable_now=function(){return m.now()-q}}var X=[],I=[],T=1,Z=null,c=3,rr=!1,ur=!1,lr=!1,E=!1,p=typeof setTimeout==="function"?setTimeout:null,gr=typeof clearTimeout==="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null,y=!1,f=-1,C=5,Rr=-1;if(typeof N==="function")var Hr=function(){N(g)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,Br=mr.port2;mr.port1.onmessage=g,Hr=function(){Br.postMessage(null)}}else Hr=function(){p(g,0)};xJ.unstable_IdlePriority=5,xJ.unstable_ImmediatePriority=1,xJ.unstable_LowPriority=4,xJ.unstable_NormalPriority=3,xJ.unstable_Profiling=null,xJ.unstable_UserBlockingPriority=2,xJ.unstable_cancelCallback=function(k){k.callback=null},xJ.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1000/k):5},xJ.unstable_getCurrentPriorityLevel=function(){return c},xJ.unstable_next=function(k){switch(c){case 1:case 2:case 3:var s=3;break;default:s=c}var ir=c;c=s;try{return k()}finally{c=ir}},xJ.unstable_requestPaint=function(){E=!0},xJ.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ir=c;c=k;try{return s()}finally{c=ir}},xJ.unstable_scheduleCallback=function(k,s,ir){var Qr=xJ.unstable_now();switch(typeof ir==="object"&&ir!==null?(ir=ir.delay,ir=typeof ir==="number"&&0<ir?Qr+ir:Qr):ir=Qr,k){case 1:var Gr=-1;break;case 2:Gr=250;break;case 5:Gr=1073741823;break;case 4:Gr=1e4;break;default:Gr=5000}return Gr=ir+Gr,k={id:T++,callback:s,priorityLevel:k,startTime:ir,expirationTime:Gr,sortIndex:-1},ir>Qr?(k.sortIndex=ir,i(I,k),h(X)===null&&k===h(I)&&(lr?(gr(f),f=-1):lr=!0,W(O,ir-Qr))):(k.sortIndex=Gr,i(X,k),ur||rr||(ur=!0,y||(y=!0,Hr()))),k},xJ.unstable_shouldYield=A,xJ.unstable_wrapCallback=function(k){var s=c;return function(){var ir=c;c=s;try{return k.apply(this,arguments)}finally{c=ir}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var AR=W0((NJ)=>{var R6=wr(io());(function(){function g(){}function i(m){return""+m}function h(m,q,X){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{i(I);var T=!1}catch(Z){T=!0}return T&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&I[Symbol.toStringTag]||I.constructor.name||"Object"),i(I)),{$$typeof:W,key:I==null?null:""+I,children:m,containerInfo:q,implementation:X}}function t(m,q){if(m==="font")return"";if(typeof q==="string")return q==="use-credentials"?q:""}function u(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":'something with type "'+typeof m+'"'}function P(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":typeof m==="string"?JSON.stringify(m):typeof m==="number"?"`"+m+"`":'something with type "'+typeof m+'"'}function O(){var m=G.H;return m===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),m}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var A={d:{f:g,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},W=Symbol.for("react.portal"),G=R6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),NJ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,NJ.createPortal=function(m,q){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error("Target container is not a DOM element.");return h(m,q,null,X)},NJ.flushSync=function(m){var q=G.T,X=A.p;try{if(G.T=null,A.p=2,m)return m()}finally{G.T=q,A.p=X,A.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},NJ.preconnect=function(m,q){typeof m==="string"&&m?q!=null&&typeof q!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(q)):q!=null&&typeof q.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",u(q.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&(q?(q=q.crossOrigin,q=typeof q==="string"?q==="use-credentials"?q:"":void 0):q=null,A.d.C(m,q))},NJ.prefetchDNS=function(m){if(typeof m!=="string"||!m)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m));else if(1<arguments.length){var q=arguments[1];typeof q==="object"&&q.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q))}typeof m==="string"&&A.d.D(m)},NJ.preinit=function(m,q){if(typeof m==="string"&&m?q==null||typeof q!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(q)):q.as!=="style"&&q.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(q.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&q&&typeof q.as==="string"){var X=q.as,I=t(X,q.crossOrigin),T=typeof q.integrity==="string"?q.integrity:void 0,Z=typeof q.fetchPriority==="string"?q.fetchPriority:void 0;X==="style"?A.d.S(m,typeof q.precedence==="string"?q.precedence:void 0,{crossOrigin:I,integrity:T,fetchPriority:Z}):X==="script"&&A.d.X(m,{crossOrigin:I,integrity:T,fetchPriority:Z,nonce:typeof q.nonce==="string"?q.nonce:void 0})}},NJ.preinitModule=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&q.as!=="script"&&(X+=" The `as` option encountered was "+P(q.as)+"."),X)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",X);else switch(X=q&&typeof q.as==="string"?q.as:"script",X){case"script":break;default:X=P(X),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',X,m)}if(typeof m==="string")if(typeof q==="object"&&q!==null){if(q.as==null||q.as==="script")X=t(q.as,q.crossOrigin),A.d.M(m,{crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0})}else q==null&&A.d.M(m)},NJ.preload=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q==null||typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":typeof q.as==="string"&&q.as||(X+=" The `as` option encountered was "+u(q.as)+"."),X&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',X),typeof m==="string"&&typeof q==="object"&&q!==null&&typeof q.as==="string"){X=q.as;var I=t(X,q.crossOrigin);A.d.L(m,X,{crossOrigin:I,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0,type:typeof q.type==="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority==="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy==="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet==="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes==="string"?q.imageSizes:void 0,media:typeof q.media==="string"?q.media:void 0})}},NJ.preloadModule=function(m,q){var X="";typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&typeof q.as!=="string"&&(X+=" The `as` option encountered was "+u(q.as)+"."),X&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',X),typeof m==="string"&&(q?(X=t(q.as,q.crossOrigin),A.d.m(m,{as:typeof q.as==="string"&&q.as!=="script"?q.as:void 0,crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0})):A.d.m(m))},NJ.requestFormReset=function(m){A.d.r(m)},NJ.unstable_batchedUpdates=function(m,q){return m(q)},NJ.useFormState=function(m,q,X){return O().useFormState(m,q,X)},NJ.useFormStatus=function(){return O().useHostTransitionStatus()},NJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Sn=W0((fL,HR)=>{HR.exports=AR()});var qR=W0((BJ)=>{var lo=wr(OR()),Tn=wr(io()),W6=wr(Sn());(function(){function g(r,o){for(r=r.memoizedState;r!==null&&0<o;)r=r.next,o--;return r}function i(r,o,e,l){if(e>=o.length)return l;var v=o[e],n=le(r)?r.slice():ar({},r);return n[v]=i(r[v],o,e+1,l),n}function h(r,o,e){if(o.length!==e.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<e.length-1;l++)if(o[l]!==e[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return t(r,o,e,0)}}function t(r,o,e,l){var v=o[l],n=le(r)?r.slice():ar({},r);return l+1===o.length?(n[e[l]]=n[v],le(n)?n.splice(v,1):delete n[v]):n[v]=t(r[v],o,e,l+1),n}function u(r,o,e){var l=o[e],v=le(r)?r.slice():ar({},r);if(e+1===o.length)return le(v)?v.splice(l,1):delete v[l],v;return v[l]=u(r[l],o,e+1),v}function P(){return!1}function O(){return null}function A(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function W(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function G(){}function m(){}function q(r){var o=[];return r.forEach(function(e){o.push(e)}),o.sort().join(", ")}function X(r,o,e,l){return new wG(r,o,e,l)}function I(r,o){r.context===ji&&(C2(r.current,2,o,r,null,null),f0())}function T(r,o){if(Ug!==null){var e=o.staleFamilies;o=o.updatedFamilies,$h(),W8(r.current,o,e),f0()}}function Z(r){Ug=r}function c(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var o=r,e=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(e=o.return),r=o.return;while(r)}return o.tag===3?e:null}function ur(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function lr(r){if(r.tag===31){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function E(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var o=r.alternate;if(!o){if(o=rr(r),o===null)throw Error("Unable to find node on an unmounted component.");return o!==r?null:r}for(var e=r,l=o;;){var v=e.return;if(v===null)break;var n=v.alternate;if(n===null){if(l=v.return,l!==null){e=l;continue}break}if(v.child===n.child){for(n=v.child;n;){if(n===e)return E(v),r;if(n===l)return E(v),o;n=n.sibling}throw Error("Unable to find node on an unmounted component.")}if(e.return!==l.return)e=v,l=n;else{for(var b=!1,w=v.child;w;){if(w===e){b=!0,e=v,l=n;break}if(w===l){b=!0,l=v,e=n;break}w=w.sibling}if(!b){for(w=n.child;w;){if(w===e){b=!0,e=n,l=v;break}if(w===l){b=!0,l=n,e=v;break}w=w.sibling}if(!b)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(e.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(e.tag!==3)throw Error("Unable to find node on an unmounted component.");return e.stateNode.current===e?r:o}function gr(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r;for(r=r.child;r!==null;){if(o=gr(r),o!==null)return o;r=r.sibling}return null}function N(r){if(r===null||typeof r!=="object")return null;return r=zH&&r[zH]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===FX?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case en:return"Fragment";case c2:return"Profiler";case pb:return"StrictMode";case _2:return"Suspense";case a2:return"SuspenseList";case E2:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case on:return"Portal";case Yl:return r.displayName||"Context";case y2:return(r._context.displayName||"Context")+".Consumer";case Th:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case db:return o=r.displayName||null,o!==null?o:y(r.type)||"Memo";case bg:o=r._payload,r=r._init;try{return y(r(o))}catch(e){}}return null}function f(r){return typeof r.tag==="number"?C(r):typeof r.name==="string"?r.name:null}function C(r){var o=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(o._context.displayName||"Context")+".Consumer";case 10:return o.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(o);case 8:return o===pb?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof o==="function")return o.displayName||o.name||null;if(typeof o==="string")return o;break;case 29:if(o=r._debugInfo,o!=null){for(var e=o.length-1;0<=e;e--)if(typeof o[e].name==="string")return o[e].name}if(r.return!==null)return C(r.return)}return null}function Rr(r){return{current:r}}function Hr(r,o){0>sl?console.error("Unexpected pop."):(o!==j2[sl]&&console.error("Unexpected Fiber popped."),r.current=f2[sl],f2[sl]=null,j2[sl]=null,sl--)}function mr(r,o,e){sl++,f2[sl]=r.current,j2[sl]=e,r.current=o}function Br(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,o){mr(ci,o,r),mr(kh,r,r),mr(Vi,null,r);var e=o.nodeType;switch(e){case 9:case 11:e=e===9?"#document":"#fragment",o=(o=o.documentElement)?(o=o.namespaceURI)?pA(o):Pi:Pi;break;default:if(e=o.tagName,o=o.namespaceURI)o=pA(o),o=dA(o,e);else switch(e){case"svg":o=Zn;break;case"math":o=ju;break;default:o=Pi}}e=e.toLowerCase(),e=yP(null,e),e={context:o,ancestorInfo:e},Hr(Vi,r),mr(Vi,e,r)}function s(r){Hr(Vi,r),Hr(kh,r),Hr(ci,r)}function ir(){return Br(Vi.current)}function Qr(r){r.memoizedState!==null&&mr(sb,r,r);var o=Br(Vi.current),e=r.type,l=dA(o.context,e);e=yP(o.ancestorInfo,e),l={context:l,ancestorInfo:e},o!==l&&(mr(kh,r,r),mr(Vi,l,r))}function Gr(r){kh.current===r&&(Hr(Vi,r),Hr(kh,r)),sb.current===r&&(Hr(sb,r),Lt._currentValue=R0)}function V(){}function F(){if(Dh===0){UH=console.log,KH=console.info,$H=console.warn,IH=console.error,LH=console.group,FH=console.groupCollapsed,xH=console.groupEnd;var r={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Dh++}function er(){if(Dh--,Dh===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ar({},r,{value:UH}),info:ar({},r,{value:KH}),warn:ar({},r,{value:$H}),error:ar({},r,{value:IH}),group:ar({},r,{value:LH}),groupCollapsed:ar({},r,{value:FH}),groupEnd:ar({},r,{value:xH})})}0>Dh&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Or(r){var o=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=o,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),o=r.indexOf(`
`),o!==-1&&(r=r.slice(o+1)),o=r.indexOf("react_stack_bottom_frame"),o!==-1&&(o=r.lastIndexOf(`
`,o)),o!==-1)r=r.slice(0,o);else return"";return r}function qr(r){if(p2===void 0)try{throw Error()}catch(e){var o=e.stack.trim().match(/\n( *(at )?)/);p2=o&&o[1]||"",NH=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+p2+r+NH}function Zr(r,o){if(!r||d2)return"";var e=s2.get(r);if(e!==void 0)return e;d2=!0,e=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=S.H,S.H=null,F();try{var v={DetermineComponentFrameRoot:function(){try{if(o){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(vr){var x=vr}Reflect.construct(r,[],J)}else{try{J.call()}catch(vr){x=vr}r.call(J.prototype)}}else{try{throw Error()}catch(vr){x=vr}(J=r())&&typeof J.catch==="function"&&J.catch(function(){})}}catch(vr){if(vr&&x&&typeof vr.stack==="string")return[vr.stack,x.stack]}return[null,null]}};v.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(v.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(v.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=v.DetermineComponentFrameRoot(),w=b[0],H=b[1];if(w&&H){var M=w.split(`
`),K=H.split(`
`);for(b=n=0;n<M.length&&!M[n].includes("DetermineComponentFrameRoot");)n++;for(;b<K.length&&!K[b].includes("DetermineComponentFrameRoot");)b++;if(n===M.length||b===K.length)for(n=M.length-1,b=K.length-1;1<=n&&0<=b&&M[n]!==K[b];)b--;for(;1<=n&&0<=b;n--,b--)if(M[n]!==K[b]){if(n!==1||b!==1)do if(n--,b--,0>b||M[n]!==K[b]){var $=`
`+M[n].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&s2.set(r,$),$}while(1<=n&&0<=b);break}}}finally{d2=!1,S.H=l,er(),Error.prepareStackTrace=e}return M=(M=r?r.displayName||r.name:"")?qr(M):"",typeof r==="function"&&s2.set(r,M),M}function nr(r,o){switch(r.tag){case 26:case 27:case 5:return qr(r.type);case 16:return qr("Lazy");case 13:return r.child!==o&&o!==null?qr("Suspense Fallback"):qr("Suspense");case 19:return qr("SuspenseList");case 0:case 15:return Zr(r.type,!1);case 11:return Zr(r.type.render,!1);case 1:return Zr(r.type,!0);case 31:return qr("Activity");default:return""}}function Cr(r){try{var o="",e=null;do{o+=nr(r,e);var l=r._debugInfo;if(l)for(var v=l.length-1;0<=v;v--){var n=l[v];if(typeof n.name==="string"){var b=o;r:{var{name:w,env:H,debugLocation:M}=n;if(M!=null){var K=Or(M),$=K.lastIndexOf(`
`),J=$===-1?K:K.slice($+1);if(J.indexOf(w)!==-1){var x=`
`+J;break r}}x=qr(w+(H?" ["+H+"]":""))}o=b+x}}e=r,r=r.return}while(r);return o}catch(vr){return`
Error generating stack: `+vr.message+`
`+vr.stack}}function jr(r){return(r=r?r.displayName||r.name:"")?qr(r):""}function Ro(){if(ug===null)return null;var r=ug._debugOwner;return r!=null?f(r):null}function Ie(){if(ug===null)return"";var r=ug;try{var o="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:o+=qr(r.type);break;case 13:o+=qr("Suspense");break;case 19:o+=qr("SuspenseList");break;case 31:o+=qr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||o!==""||(o+=jr(r.type));break;case 11:r._debugOwner||o!==""||(o+=jr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var e=r;r=e._debugOwner;var l=e._debugStack;if(r&&l){var v=Or(l);v!==""&&(o+=`
`+v)}}else if(r.debugStack!=null){var n=r.debugStack;(r=r.owner)&&n&&(o+=`
`+Or(n))}else break;var b=o}catch(w){b=`
Error generating stack: `+w.message+`
`+w.stack}return b}function hr(r,o,e,l,v,n,b){var w=ug;ye(r);try{return r!==null&&r._debugTask?r._debugTask.run(o.bind(null,e,l,v,n,b)):o(e,l,v,n,b)}finally{ye(w)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function ye(r){S.getCurrentStack=r===null?null:Ie,Jl=!1,ug=r}function Ye(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rg(r){try{return Eo(r),!1}catch(o){return!0}}function Eo(r){return""+r}function wo(r,o){if(rg(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",o,Ye(r)),Eo(r)}function eh(r,o){if(rg(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",o,Ye(r)),Eo(r)}function Tr(r){if(rg(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Ye(r)),Eo(r)}function x0(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(o.isDisabled)return!0;if(!o.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{ln=o.inject(r),ze=o}catch(e){console.error("React instrumentation encountered an error: %o.",e)}return o.checkDCE?!0:!1}function Wo(r){if(typeof TX==="function"&&kX(r),ze&&typeof ze.setStrictMode==="function")try{ze.setStrictMode(ln,r)}catch(o){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",o))}}function k1(r){return r>>>=0,r===0?32:31-(DX(r)/VX|0)|0}function vl(r){var o=r&42;if(o!==0)return o;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function $v(r,o,e){var l=r.pendingLanes;if(l===0)return 0;var v=0,n=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var w=l&134217727;return w!==0?(l=w&~n,l!==0?v=vl(l):(b&=w,b!==0?v=vl(b):e||(e=w&~r,e!==0&&(v=vl(e))))):(w=l&~n,w!==0?v=vl(w):b!==0?v=vl(b):e||(e=l&~r,e!==0&&(v=vl(e)))),v===0?0:o!==0&&o!==v&&(o&n)===0&&(n=v&-v,e=o&-o,n>=e||n===32&&(e&4194048)!==0)?o:v}function Iv(r,o){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&o)===0}function Cw(r,o){switch(r){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function N0(){var r=eu;return eu<<=1,(eu&62914560)===0&&(eu=4194304),r}function B0(r){for(var o=[],e=0;31>e;e++)o.push(r);return o}function Ui(r,o){r.pendingLanes|=o,o!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function D1(r,o,e,l,v,n){var b=r.pendingLanes;r.pendingLanes=e,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=e,r.entangledLanes&=e,r.errorRecoveryDisabledLanes&=e,r.shellSuspendCounter=0;var{entanglements:w,expirationTimes:H,hiddenUpdates:M}=r;for(e=b&~e;0<e;){var K=31-Fe(e),$=1<<K;w[K]=0,H[K]=-1;var J=M[K];if(J!==null)for(M[K]=null,K=0;K<J.length;K++){var x=J[K];x!==null&&(x.lane&=-536870913)}e&=~$}l!==0&&Lv(r,l,0),n!==0&&v===0&&r.tag!==0&&(r.suspendedLanes|=n&~(b&~o))}function Lv(r,o,e){r.pendingLanes|=o,r.suspendedLanes&=~o;var l=31-Fe(o);r.entangledLanes|=o,r.entanglements[l]=r.entanglements[l]|1073741824|e&261930}function Fv(r,o){var e=r.entangledLanes|=o;for(r=r.entanglements;e;){var l=31-Fe(e),v=1<<l;v&o|r[l]&o&&(r[l]|=o),e&=~v}}function xv(r,o){var e=o&-o;return e=(e&42)!==0?1:Nv(e),(e&(r.suspendedLanes|o))!==0?0:e}function Nv(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function gh(r,o,e){if(zl)for(r=r.pendingUpdatersLaneMap;0<e;){var l=31-Fe(e),v=1<<l;r[l].add(o),e&=~v}}function Ki(r,o){if(zl)for(var{pendingUpdatersLaneMap:e,memoizedUpdaters:l}=r;0<o;){var v=31-Fe(o);r=1<<v,v=e[v],0<v.size&&(v.forEach(function(n){var b=n.alternate;b!==null&&l.has(b)||l.add(n)}),v.clear()),o&=~r}}function R(r){return r&=-r,wg!==0&&wg<r?cg!==0&&cg<r?(r&134217727)!==0?Ul:gu:cg:wg}function L(){var r=ho.p;if(r!==0)return r;return r=window.event,r===void 0?Ul:WH(r.type)}function or(r,o){var e=ho.p;try{return ho.p=r,o()}finally{ho.p=e}}function tr(r){delete r[Me],delete r[xe],delete r[l4],delete r[cX],delete r[yX]}function Mr(r){var o=r[Me];if(o)return o;for(var e=r.parentNode;e;){if(o=e[_i]||e[Me]){if(e=o.alternate,o.child!==null||e!==null&&e.child!==null)for(r=vH(r);r!==null;){if(e=r[Me])return e;r=vH(r)}return o}r=e,e=r.parentNode}return null}function Fr(r){if(r=r[Me]||r[_i]){var o=r.tag;if(o===5||o===6||o===13||o===31||o===26||o===27||o===3)return r}return null}function xr(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function go(r){var o=r[BH];return o||(o=r[BH]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function Yr(r){r[Vh]=!0}function Je(r,o){og(r,o),og(r+"Capture",o)}function og(r,o){pv[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),pv[r]=o;var e=r.toLowerCase();i4[e]=r,r==="onDoubleClick"&&(i4.ondblclick=r);for(r=0;r<o.length;r++)ZH.add(o[r])}function $i(r,o){_X[o.type]||o.onChange||o.onInput||o.readOnly||o.disabled||o.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),o.onChange||o.readOnly||o.disabled||o.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function lh(r){if(Vg.call(SH,r))return!0;if(Vg.call(CH,r))return!1;if(aX.test(r))return SH[r]=!0;return CH[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $P(r,o,e){if(lh(o)){if(!r.hasAttribute(o)){switch(typeof e){case"symbol":case"object":return e;case"function":return e;case"boolean":if(e===!1)return e}return e===void 0?void 0:null}if(r=r.getAttribute(o),r===""&&e===!0)return!0;return wo(e,o),r===""+e?e:r}}function V1(r,o,e){if(lh(o))if(e===null)r.removeAttribute(o);else{switch(typeof e){case"undefined":case"function":case"symbol":r.removeAttribute(o);return;case"boolean":var l=o.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(o);return}}wo(e,o),r.setAttribute(o,""+e)}}function c1(r,o,e){if(e===null)r.removeAttribute(o);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}wo(e,o),r.setAttribute(o,""+e)}}function cl(r,o,e,l){if(l===null)r.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(e);return}wo(l,e),r.setAttributeNS(o,e,""+l)}}function Xg(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Tr(r),r;default:return""}}function IP(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function V3(r,o,e){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o);if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:v,set:n}=l;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(b){Tr(b),e=""+b,n.call(this,b)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(b){Tr(b),e=""+b},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Sw(r){if(!r._valueTracker){var o=IP(r)?"checked":"value";r._valueTracker=V3(r,o,""+r[o])}}function LP(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var e=o.getValue(),l="";return r&&(l=IP(r)?r.checked?"true":"false":r.value),r=l,r!==e?(o.setValue(r),!0):!1}function y1(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(o){return r.body}}function Yg(r){return r.replace(EX,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function FP(r,o){o.checked===void 0||o.defaultChecked===void 0||kH||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component",o.type),kH=!0),o.value===void 0||o.defaultValue===void 0||TH||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component",o.type),TH=!0)}function Tw(r,o,e,l,v,n,b,w){if(r.name="",b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"?(wo(b,"type"),r.type=b):r.removeAttribute("type"),o!=null)if(b==="number"){if(o===0&&r.value===""||r.value!=o)r.value=""+Xg(o)}else r.value!==""+Xg(o)&&(r.value=""+Xg(o));else b!=="submit"&&b!=="reset"||r.removeAttribute("value");o!=null?kw(r,b,Xg(o)):e!=null?kw(r,b,Xg(e)):l!=null&&r.removeAttribute("value"),v==null&&n!=null&&(r.defaultChecked=!!n),v!=null&&(r.checked=v&&typeof v!=="function"&&typeof v!=="symbol"),w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"?(wo(w,"name"),r.name=""+Xg(w)):r.removeAttribute("name")}function xP(r,o,e,l,v,n,b,w){if(n!=null&&typeof n!=="function"&&typeof n!=="symbol"&&typeof n!=="boolean"&&(wo(n,"type"),r.type=n),o!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||o!==void 0&&o!==null)){Sw(r);return}e=e!=null?""+Xg(e):"",o=o!=null?""+Xg(o):e,w||o===r.value||(r.value=o),r.defaultValue=o}l=l!=null?l:v,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=w?r.checked:!!l,r.defaultChecked=!!l,b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(wo(b,"name"),r.name=b),Sw(r)}function kw(r,o,e){o==="number"&&y1(r.ownerDocument)===r||r.defaultValue===""+e||(r.defaultValue=""+e)}function NP(r,o){o.value==null&&(typeof o.children==="object"&&o.children!==null?Tn.Children.forEach(o.children,function(e){e==null||typeof e==="string"||typeof e==="number"||typeof e==="bigint"||VH||(VH=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):o.dangerouslySetInnerHTML==null||cH||(cH=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),o.selected==null||DH||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),DH=!0)}function BP(){var r=Ro();return r?`

Check the render method of \``+r+"`.":""}function Z0(r,o,e,l){if(r=r.options,o){o={};for(var v=0;v<e.length;v++)o["$"+e[v]]=!0;for(e=0;e<r.length;e++)v=o.hasOwnProperty("$"+r[e].value),r[e].selected!==v&&(r[e].selected=v),v&&l&&(r[e].defaultSelected=!0)}else{e=""+Xg(e),o=null;for(v=0;v<r.length;v++){if(r[v].value===e){r[v].selected=!0,l&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function ZP(r,o){for(r=0;r<_H.length;r++){var e=_H[r];if(o[e]!=null){var l=le(o[e]);o.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",e,BP()):!o.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",e,BP())}}o.value===void 0||o.defaultValue===void 0||yH||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),yH=!0)}function CP(r,o){o.value===void 0||o.defaultValue===void 0||aH||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Ro()||"A component"),aH=!0),o.children!=null&&o.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function SP(r,o,e){if(o!=null&&(o=""+Xg(o),o!==r.value&&(r.value=o),e==null)){r.defaultValue!==o&&(r.defaultValue=o);return}r.defaultValue=e!=null?""+Xg(e):""}function TP(r,o,e,l){if(o==null){if(l!=null){if(e!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(le(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}e=l}e==null&&(e=""),o=e}e=Xg(o),r.defaultValue=e,l=r.textContent,l===e&&l!==""&&l!==null&&(r.value=l),Sw(r)}function kP(r,o){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-o?kP(r.children[0],o):r}function eg(r){return"  "+"  ".repeat(r)}function C0(r){return"+ "+"  ".repeat(r)}function Bv(r){return"- "+"  ".repeat(r)}function DP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function ih(r,o){return EH.test(r)?(r=JSON.stringify(r),r.length>o-2?8>o?'{"..."}':"{"+r.slice(0,o-7)+'..."}':"{"+r+"}"):r.length>o?5>o?'{"..."}':r.slice(0,o-3)+"...":r}function _1(r,o,e){var l=120-2*e;if(o===null)return C0(e)+ih(r,l)+`
`;if(typeof o==="string"){for(var v=0;v<o.length&&v<r.length&&o.charCodeAt(v)===r.charCodeAt(v);v++);return v>l-8&&10<v&&(r="..."+r.slice(v-8),o="..."+o.slice(v-8)),C0(e)+ih(r,l)+`
`+Bv(e)+ih(o,l)+`
`}return eg(e)+ih(r,l)+`
`}function Dw(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(o,e){return e})}function vh(r,o){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>o?5>o?'"..."':r.slice(0,o-4)+'..."':r;case"object":if(r===null)return"null";if(le(r))return"[...]";if(r.$$typeof===Xl)return(o=y(r.type))?"<"+o+">":"<...>";var e=Dw(r);if(e==="Object"){e="",o-=2;for(var l in r)if(r.hasOwnProperty(l)){var v=JSON.stringify(l);if(v!=='"'+l+'"'&&(l=v),o-=l.length-2,v=vh(r[l],15>o?o:15),o-=v.length,0>o){e+=e===""?"...":", ...";break}e+=(e===""?"":",")+l+":"+v}return"{"+e+"}"}return e;case"function":return(o=r.displayName||r.name)?"function "+o:"function";default:return String(r)}}function S0(r,o){return typeof r!=="string"||EH.test(r)?"{"+vh(r,o-2)+"}":r.length>o-2?5>o?'"..."':'"'+r.slice(0,o-5)+'..."':'"'+r+'"'}function Vw(r,o,e){var l=120-e.length-r.length,v=[],n;for(n in o)if(o.hasOwnProperty(n)&&n!=="children"){var b=S0(o[n],120-e.length-n.length-1);l-=n.length+b.length+2,v.push(n+"="+b)}return v.length===0?e+"<"+r+`>
`:0<l?e+"<"+r+" "+v.join(" ")+`>
`:e+"<"+r+`
`+e+"  "+v.join(`
`+e+"  ")+`
`+e+`>
`}function c3(r,o,e){var l="",v=ar({},o),n;for(n in r)if(r.hasOwnProperty(n)){delete v[n];var b=120-2*e-n.length-2,w=vh(r[n],b);o.hasOwnProperty(n)?(b=vh(o[n],b),l+=C0(e)+n+": "+w+`
`,l+=Bv(e)+n+": "+b+`
`):l+=C0(e)+n+": "+w+`
`}for(var H in v)v.hasOwnProperty(H)&&(r=vh(v[H],120-2*e-H.length-2),l+=Bv(e)+H+": "+r+`
`);return l}function y3(r,o,e,l){var v="",n=new Map;for(M in e)e.hasOwnProperty(M)&&n.set(M.toLowerCase(),M);if(n.size===1&&n.has("children"))v+=Vw(r,o,eg(l));else{for(var b in o)if(o.hasOwnProperty(b)&&b!=="children"){var w=120-2*(l+1)-b.length-1,H=n.get(b.toLowerCase());if(H!==void 0){n.delete(b.toLowerCase());var M=o[b];H=e[H];var K=S0(M,w);w=S0(H,w),typeof M==="object"&&M!==null&&typeof H==="object"&&H!==null&&Dw(M)==="Object"&&Dw(H)==="Object"&&(2<Object.keys(M).length||2<Object.keys(H).length||-1<K.indexOf("...")||-1<w.indexOf("..."))?v+=eg(l+1)+b+`={{
`+c3(M,H,l+2)+eg(l+1)+`}}
`:(v+=C0(l+1)+b+"="+K+`
`,v+=Bv(l+1)+b+"="+w+`
`)}else v+=eg(l+1)+b+"="+S0(o[b],w)+`
`}n.forEach(function($){if($!=="children"){var J=120-2*(l+1)-$.length-1;v+=Bv(l+1)+$+"="+S0(e[$],J)+`
`}}),v=v===""?eg(l)+"<"+r+`>
`:eg(l)+"<"+r+`
`+v+eg(l)+`>
`}if(r=e.children,o=o.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(n="",typeof o==="string"||typeof o==="number"||typeof o==="bigint")n=""+o;v+=_1(n,""+r,l+1)}else if(typeof o==="string"||typeof o==="number"||typeof o==="bigint")v=r==null?v+_1(""+o,null,l+1):v+_1(""+o,void 0,l+1);return v}function VP(r,o){var e=DP(r);if(e===null){e="";for(r=r.child;r;)e+=VP(r,o),r=r.sibling;return e}return eg(o)+"<"+e+`>
`}function cw(r,o){var e=kP(r,o);if(e!==r&&(r.children.length!==1||r.children[0]!==e))return eg(o)+`...
`+cw(e,o+1);e="";var l=r.fiber._debugInfo;if(l)for(var v=0;v<l.length;v++){var n=l[v].name;typeof n==="string"&&(e+=eg(o)+"<"+n+`>
`,o++)}if(l="",v=r.fiber.pendingProps,r.fiber.tag===6)l=_1(v,r.serverProps,o),o++;else if(n=DP(r.fiber),n!==null)if(r.serverProps===void 0){l=o;var b=120-2*l-n.length-2,w="";for(M in v)if(v.hasOwnProperty(M)&&M!=="children"){var H=S0(v[M],15);if(b-=M.length+H.length+2,0>b){w+=" ...";break}w+=" "+M+"="+H}l=eg(l)+"<"+n+w+`>
`,o++}else r.serverProps===null?(l=Vw(n,v,C0(o)),o++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=y3(n,v,r.serverProps,o),o++);var M="";v=r.fiber.child;for(n=0;v&&n<r.children.length;)b=r.children[n],b.fiber===v?(M+=cw(b,o),n++):M+=VP(v,o),v=v.sibling;v&&0<r.children.length&&(M+=eg(o)+`...
`),v=r.serverTail,r.serverProps===null&&o--;for(r=0;r<v.length;r++)n=v[r],M=typeof n==="string"?M+(Bv(o)+ih(n,120-2*o)+`
`):M+Vw(n.type,n.props,Bv(o));return e+l+M}function yw(r){try{return`

`+cw(r,0)}catch(o){return""}}function cP(r,o,e){for(var l=o,v=null,n=0;l;)l===r&&(n=0),v={fiber:l,children:v!==null?[v]:[],serverProps:l===o?e:l===r?null:void 0,serverTail:[],distanceFromLeaf:n},n++,l=l.return;return v!==null?yw(v).replaceAll(/^[+-]/gm,">"):""}function yP(r,o){var e=ar({},r||jH),l={tag:o};if(fH.indexOf(o)!==-1&&(e.aTagInScope=null,e.buttonTagInScope=null,e.nobrTagInScope=null),jX.indexOf(o)!==-1&&(e.pTagInButtonScope=null),fX.indexOf(o)!==-1&&o!=="address"&&o!=="div"&&o!=="p"&&(e.listItemTagAutoclosing=null,e.dlItemTagAutoclosing=null),e.current=l,o==="form"&&(e.formTag=l),o==="a"&&(e.aTagInScope=l),o==="button"&&(e.buttonTagInScope=l),o==="nobr"&&(e.nobrTagInScope=l),o==="p"&&(e.pTagInButtonScope=l),o==="li"&&(e.listItemTagAutoclosing=l),o==="dd"||o==="dt")e.dlItemTagAutoclosing=l;return o==="#document"||o==="html"?e.containerTagInScope=null:e.containerTagInScope||(e.containerTagInScope=l),r!==null||o!=="#document"&&o!=="html"&&o!=="body"?e.implicitRootScope===!0&&(e.implicitRootScope=!1):e.implicitRootScope=!0,e}function _P(r,o,e){switch(o){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(e)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!e)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o!=="h1"&&o!=="h2"&&o!=="h3"&&o!=="h4"&&o!=="h5"&&o!=="h6";case"rp":case"rt":return pX.indexOf(o)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return o==null;case"head":return e||o===null;case"html":return e&&o==="#document"||o===null;case"body":return e&&(o==="#document"||o==="html")||o===null}return!0}function _3(r,o){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o.pTagInButtonScope;case"form":return o.formTag||o.pTagInButtonScope;case"li":return o.listItemTagAutoclosing;case"dd":case"dt":return o.dlItemTagAutoclosing;case"button":return o.buttonTagInScope;case"a":return o.aTagInScope;case"nobr":return o.nobrTagInScope}return null}function aP(r,o){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===o)return r}r=r.return}return null}function _w(r,o){o=o||jH;var e=o.current;if(o=(e=_P(r,e&&e.tag,o.implicitRootScope)?null:e)?null:_3(r,o),o=e||o,!o)return!0;var l=o.tag;if(o=String(!!e)+"|"+r+"|"+l,lu[o])return!1;lu[o]=!0;var v=(o=ug)?aP(o.return,l):null,n=o!==null&&v!==null?cP(v,o,null):"",b="<"+r+">";return e?(e="",l==="table"&&r==="tr"&&(e+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,b,l,e,n)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,b,l,n),o&&(r=o.return,v===null||r===null||v===r&&r._debugOwner===o._debugOwner||hr(v,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,b)})),!1}function a1(r,o,e){if(e||_P("#text",o,!1))return!0;if(e="#text|"+o,lu[e])return!1;lu[e]=!0;var l=(e=ug)?aP(e,o):null;return e=e!==null&&l!==null?cP(l,e,e.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,o,e):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,o,e),!1}function nh(r,o){if(o){var e=r.firstChild;if(e&&e===r.lastChild&&e.nodeType===3){e.nodeValue=o;return}}r.textContent=o}function a3(r){return r.replace(rY,function(o,e){return e.toUpperCase()})}function EP(r,o,e){var l=o.indexOf("--")===0;l||(-1<o.indexOf("-")?vn.hasOwnProperty(o)&&vn[o]||(vn[o]=!0,console.error("Unsupported style property %s. Did you mean %s?",o,a3(o.replace(sX,"ms-")))):dX.test(o)?vn.hasOwnProperty(o)&&vn[o]||(vn[o]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",o,o.charAt(0).toUpperCase()+o.slice(1))):!sH.test(e)||n4.hasOwnProperty(e)&&n4[e]||(n4[e]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,o,e.replace(sH,""))),typeof e==="number"&&(isNaN(e)?rq||(rq=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",o)):isFinite(e)||oq||(oq=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",o)))),e==null||typeof e==="boolean"||e===""?l?r.setProperty(o,""):o==="float"?r.cssFloat="":r[o]="":l?r.setProperty(o,e):typeof e!=="number"||e===0||eq.has(o)?o==="float"?r.cssFloat=e:(eh(e,o),r[o]=(""+e).trim()):r[o]=e+"px"}function fP(r,o,e){if(o!=null&&typeof o!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(o&&Object.freeze(o),r=r.style,e!=null){if(o){var l={};if(e){for(var v in e)if(e.hasOwnProperty(v)&&!o.hasOwnProperty(v))for(var n=v4[v]||[v],b=0;b<n.length;b++)l[n[b]]=v}for(var w in o)if(o.hasOwnProperty(w)&&(!e||e[w]!==o[w]))for(v=v4[w]||[w],n=0;n<v.length;n++)l[v[n]]=w;w={};for(var H in o)for(v=v4[H]||[H],n=0;n<v.length;n++)w[v[n]]=H;H={};for(var M in l)if(v=l[M],(n=w[M])&&v!==n&&(b=v+","+n,!H[b])){H[b]=!0,b=console;var K=o[v];b.error.call(b,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",K==null||typeof K==="boolean"||K===""?"Removing":"Updating",v,n)}}for(var $ in e)!e.hasOwnProperty($)||o!=null&&o.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var J in o)M=o[J],o.hasOwnProperty(J)&&e[J]!==M&&EP(r,J,M)}else for(l in o)o.hasOwnProperty(l)&&EP(r,l,o[l])}function hh(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function jP(r){return oY.get(r)||r}function E3(r,o){if(Vg.call(hn,o)&&hn[o])return!0;if(gY.test(o)){if(r="aria-"+o.slice(4).toLowerCase(),r=gq.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",o),hn[o]=!0;if(o!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",o,r),hn[o]=!0}if(eY.test(o)){if(r=o.toLowerCase(),r=gq.hasOwnProperty(r)?r:null,r==null)return hn[o]=!0,!1;o!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",o,r),hn[o]=!0)}return!0}function f3(r,o){var e=[],l;for(l in o)E3(r,l)||e.push(l);o=e.map(function(v){return"`"+v+"`"}).join(", "),e.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r):1<e.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r)}function j3(r,o,e,l){if(Vg.call(Ne,o)&&Ne[o])return!0;var v=o.toLowerCase();if(v==="onfocusin"||v==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Ne[o]=!0;if(typeof e==="function"&&(r==="form"&&o==="action"||r==="input"&&o==="formAction"||r==="button"&&o==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(o))return!0;if(l=r.hasOwnProperty(v)?r[v]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",o,l),Ne[o]=!0;if(iq.test(o))return console.error("Unknown event handler property `%s`. It will be ignored.",o),Ne[o]=!0}else if(iq.test(o))return lY.test(o)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",o),Ne[o]=!0;if(iY.test(o)||vY.test(o))return!0;if(v==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Ne[o]=!0;if(v==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Ne[o]=!0;if(v==="is"&&e!==null&&e!==void 0&&typeof e!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof e),Ne[o]=!0;if(typeof e==="number"&&isNaN(e))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",o),Ne[o]=!0;if(vu.hasOwnProperty(v)){if(v=vu[v],v!==o)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",o,v),Ne[o]=!0}else if(o!==v)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",o,v),Ne[o]=!0;switch(o){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof e){case"boolean":switch(o){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(v=o.toLowerCase().slice(0,5),v==="data-"||v==="aria-")return!0;return e?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',e,o,o,e,o):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',e,o,o,e,o,o,o),Ne[o]=!0}case"function":case"symbol":return Ne[o]=!0,!1;case"string":if(e==="false"||e==="true"){switch(o){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",e,o,e==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',o,e),Ne[o]=!0}}return!0}function p3(r,o,e){var l=[],v;for(v in o)j3(r,v,o[v],e)||l.push(v);o=l.map(function(n){return"`"+n+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r)}function th(r){return nY.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function yl(){}function aw(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function pP(r){var o=Fr(r);if(o&&(r=o.stateNode)){var e=r[xe]||null;r:switch(r=o.stateNode,o.type){case"input":if(Tw(r,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),o=e.name,e.type==="radio"&&o!=null){for(e=r;e.parentNode;)e=e.parentNode;wo(o,"name"),e=e.querySelectorAll('input[name="'+Yg(""+o)+'"][type="radio"]');for(o=0;o<e.length;o++){var l=e[o];if(l!==r&&l.form===r.form){var v=l[xe]||null;if(!v)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Tw(l,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name)}}for(o=0;o<e.length;o++)l=e[o],l.form===r.form&&LP(l)}break r;case"textarea":SP(r,e.value,e.defaultValue);break r;case"select":o=e.value,o!=null&&Z0(r,!!e.multiple,o,!1)}}}function dP(r,o,e){if(h4)return r(o,e);h4=!0;try{var l=r(o);return l}finally{if(h4=!1,tn!==null||bn!==null){if(f0(),tn&&(o=tn,r=bn,bn=tn=null,pP(o),r))for(o=0;o<r.length;o++)pP(r[o])}}}function bh(r,o){var e=r.stateNode;if(e===null)return null;var l=e[xe]||null;if(l===null)return null;e=l[o];r:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(e&&typeof e!=="function")throw Error("Expected `"+o+"` listener to be a function, instead got a value of `"+typeof e+"` type.");return e}function sP(){if(nu)return nu;var r,o=b4,e=o.length,l,v="value"in ai?ai.value:ai.textContent,n=v.length;for(r=0;r<e&&o[r]===v[r];r++);var b=e-r;for(l=1;l<=b&&o[e-l]===v[n-l];l++);return nu=v.slice(r,1<l?1-l:void 0)}function E1(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function f1(){return!0}function r8(){return!1}function _e(r){function o(e,l,v,n,b){this._reactName=e,this._targetInst=v,this.type=l,this.nativeEvent=n,this.target=b,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(e=r[w],this[w]=e?e(n):n[w]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?f1:r8,this.isPropagationStopped=r8,this}return ar(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=f1)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=f1)},persist:function(){},isPersistent:f1}),o}function d3(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=WY[r])?!!o[r]:!1}function Ew(){return d3}function o8(r,o){switch(r){case"keyup":return LY.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==tq;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e8(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function s3(r,o){switch(r){case"compositionend":return e8(o);case"keypress":if(o.which!==uq)return null;return Pq=!0,wq;case"textInput":return r=o.data,r===wq&&Pq?null:r;default:return null}}function rG(r,o){if(un)return r==="compositionend"||!O4&&o8(r,o)?(r=sP(),nu=b4=ai=null,un=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return bq&&o.locale!=="ko"?null:o.data;default:return null}}function g8(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!xY[r.type]:o==="textarea"?!0:!1}function oG(r){if(!Kl)return!1;r="on"+r;var o=r in document;return o||(o=document.createElement("div"),o.setAttribute(r,"return;"),o=typeof o[r]==="function"),o}function l8(r,o,e,l){tn?bn?bn.push(l):bn=[l]:tn=l,o=kb(o,"onChange"),0<o.length&&(e=new hu("onChange","change",null,e,l),r.push({event:e,listeners:o}))}function eG(r){TA(r,0)}function j1(r){var o=xr(r);if(LP(o))return r}function i8(r,o){if(r==="change")return o}function v8(){fh&&(fh.detachEvent("onpropertychange",n8),jh=fh=null)}function n8(r){if(r.propertyName==="value"&&j1(jh)){var o=[];l8(o,jh,r,aw(r)),dP(eG,o)}}function gG(r,o,e){r==="focusin"?(v8(),fh=o,jh=e,fh.attachEvent("onpropertychange",n8)):r==="focusout"&&v8()}function lG(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return j1(jh)}function iG(r,o){if(r==="click")return j1(o)}function vG(r,o){if(r==="input"||r==="change")return j1(o)}function nG(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}function uh(r,o){if(Be(r,o))return!0;if(typeof r!=="object"||r===null||typeof o!=="object"||o===null)return!1;var e=Object.keys(r),l=Object.keys(o);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var v=e[l];if(!Vg.call(o,v)||!Be(r[v],o[v]))return!1}return!0}function h8(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function t8(r,o){var e=h8(r);r=0;for(var l;e;){if(e.nodeType===3){if(l=r+e.textContent.length,r<=o&&l>=o)return{node:e,offset:o-r};r=l}r:{for(;e;){if(e.nextSibling){e=e.nextSibling;break r}e=e.parentNode}e=void 0}e=h8(e)}}function b8(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?b8(r,o.parentNode):("contains"in r)?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function u8(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var o=y1(r.document);o instanceof r.HTMLIFrameElement;){try{var e=typeof o.contentWindow.location.href==="string"}catch(l){e=!1}if(e)r=o.contentWindow;else break;o=y1(r.document)}return o}function fw(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function w8(r,o,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;H4||wn==null||wn!==y1(l)||(l=wn,("selectionStart"in l)&&fw(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ph&&uh(ph,l)||(ph=l,l=kb(A4,"onSelect"),0<l.length&&(o=new hu("onSelect","select",null,o,e),r.push({event:o,listeners:l}),o.target=wn)))}function Zv(r,o){var e={};return e[r.toLowerCase()]=o.toLowerCase(),e["Webkit"+r]="webkit"+o,e["Moz"+r]="moz"+o,e}function Cv(r){if(q4[r])return q4[r];if(!Pn[r])return r;var o=Pn[r],e;for(e in o)if(o.hasOwnProperty(e)&&e in Aq)return q4[r]=o[e];return r}function Tg(r,o){Wq.set(r,o),Je(o,[r])}function hG(r){for(var o=bu,e=0;e<r.length;e++){var l=r[e];if(typeof l==="object"&&l!==null)if(le(l)&&l.length===2&&typeof l[0]==="string"){if(o!==bu&&o!==G4)return W4;o=G4}else return W4;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||o!==bu&&o!==m4)return W4;o=m4}}return o}function jw(r,o,e,l){for(var v in r)Vg.call(r,v)&&v[0]!=="_"&&nl(v,r[v],o,e,l)}function nl(r,o,e,l,v){switch(typeof o){case"object":if(o===null){o="null";break}else{if(o.$$typeof===Xl){var n=y(o.type)||"…",b=o.key;o=o.props;var w=Object.keys(o),H=w.length;if(b==null&&H===0){o="<"+n+" />";break}if(3>l||H===1&&w[0]==="children"&&b==null){o="<"+n+" … />";break}e.push([v+"  ".repeat(l)+r,"<"+n]),b!==null&&nl("key",b,e,l+1,v),r=!1;for(var M in o)M==="children"?o.children!=null&&(!le(o.children)||0<o.children.length)&&(r=!0):Vg.call(o,M)&&M[0]!=="_"&&nl(M,o[M],e,l+1,v);e.push(["",r?">…</"+n+">":"/>"]);return}if(n=Object.prototype.toString.call(o),n=n.slice(8,n.length-1),n==="Array"){if(M=hG(o),M===m4||M===bu){o=JSON.stringify(o);break}else if(M===G4){e.push([v+"  ".repeat(l)+r,""]);for(r=0;r<o.length;r++)n=o[r],nl(n[0],n[1],e,l+1,v);return}}if(n==="Promise"){if(o.status==="fulfilled"){if(n=e.length,nl(r,o.value,e,l,v),e.length>n){e=e[n],e[1]="Promise<"+(e[1]||"Object")+">";return}}else if(o.status==="rejected"&&(n=e.length,nl(r,o.reason,e,l,v),e.length>n)){e=e[n],e[1]="Rejected Promise<"+e[1]+">";return}e.push(["  ".repeat(l)+r,"Promise"]);return}n==="Object"&&(M=Object.getPrototypeOf(o))&&typeof M.constructor==="function"&&(n=M.constructor.name),e.push([v+"  ".repeat(l)+r,n==="Object"?3>l?"":"…":n]),3>l&&jw(o,e,l+1,v);return}case"function":o=o.name===""?"() => {}":o.name+"() {}";break;case"string":o=o===kY?"…":JSON.stringify(o);break;case"undefined":o="undefined";break;case"boolean":o=o?"true":"false";break;default:o=String(o)}e.push([v+"  ".repeat(l)+r,o])}function P8(r,o,e,l){var v=!0;for(b in r)b in o||(e.push([uu+"  ".repeat(l)+b,"…"]),v=!1);for(var n in o)if(n in r){var b=r[n],w=o[n];if(b!==w){if(l===0&&n==="children")v="  ".repeat(l)+n,e.push([uu+v,"…"],[wu+v,"…"]);else{if(!(3<=l)){if(typeof b==="object"&&typeof w==="object"&&b!==null&&w!==null&&b.$$typeof===w.$$typeof)if(w.$$typeof===Xl){if(b.type===w.type&&b.key===w.key){b=y(w.type)||"…",v="  ".repeat(l)+n,b="<"+b+" … />",e.push([uu+v,b],[wu+v,b]),v=!1;continue}}else{var H=Object.prototype.toString.call(b),M=Object.prototype.toString.call(w);if(H===M&&(M==="[object Object]"||M==="[object Array]")){H=[Xq+"  ".repeat(l)+n,M==="[object Array]"?"Array":""],e.push(H),M=e.length,P8(b,w,e,l+1)?M===e.length&&(H[1]="Referentially unequal but deeply equal objects. Consider memoization."):v=!1;continue}}else if(typeof b==="function"&&typeof w==="function"&&b.name===w.name&&b.length===w.length&&(H=Function.prototype.toString.call(b),M=Function.prototype.toString.call(w),H===M)){b=w.name===""?"() => {}":w.name+"() {}",e.push([Xq+"  ".repeat(l)+n,b+" Referentially unequal function closure. Consider memoization."]);continue}}nl(n,b,e,l,uu),nl(n,w,e,l,wu)}v=!1}}else e.push([wu+"  ".repeat(l)+n,"…"]),v=!1;return v}function gg(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function hl(r,o,e,l){Jo&&(fi.start=o,fi.end=e,ri.color="warning",ri.tooltipText=l,ri.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,fi)):performance.measure(l,fi))}function p1(r,o,e){hl(r,o,e,"Reconnect")}function d1(r,o,e,l,v){var n=C(r);if(n!==null&&Jo){var{alternate:b,actualDuration:w}=r;if(b===null||b.child!==r.child)for(var H=r.child;H!==null;H=H.sibling)w-=H.actualDuration;l=0.5>w?l?"tertiary-light":"primary-light":10>w?l?"tertiary":"primary":100>w?l?"tertiary-dark":"primary-dark":"error";var M=r.memoizedProps;w=r._debugTask,M!==null&&b!==null&&b.memoizedProps!==M?(H=[DY],M=P8(b.memoizedProps,M,H,0),1<H.length&&(M&&!Ei&&(b.lanes&v)===0&&100<r.actualDuration?(Ei=!0,H[0]=VY,ri.color="warning",ri.tooltipText=Yq):(ri.color=l,ri.tooltipText=n),ri.properties=H,fi.start=o,fi.end=e,w!=null?w.run(performance.measure.bind(performance,"​"+n,fi)):performance.measure("​"+n,fi))):w!=null?w.run(console.timeStamp.bind(console,n,o,e,Qg,void 0,l)):console.timeStamp(n,o,e,Qg,void 0,l)}}function pw(r,o,e,l){if(Jo){var v=C(r);if(v!==null){for(var n=null,b=[],w=0;w<l.length;w++){var H=l[w];n==null&&H.source!==null&&(n=H.source._debugTask),H=H.value,b.push(["Error",typeof H==="object"&&H!==null&&typeof H.message==="string"?String(H.message):String(H)])}r.key!==null&&nl("key",r.key,b,0,""),r.memoizedProps!==null&&jw(r.memoizedProps,b,0,""),n==null&&(n=r._debugTask),r={start:o,end:e,detail:{devtools:{color:"error",track:Qg,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:b}}},n?n.run(performance.measure.bind(performance,"​"+v,r)):performance.measure("​"+v,r)}}}function tl(r,o,e,l,v){if(v!==null){if(Jo){var n=C(r);if(n!==null){l=[];for(var b=0;b<v.length;b++){var w=v[b].value;l.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r.key!==null&&nl("key",r.key,l,0,""),r.memoizedProps!==null&&jw(r.memoizedProps,l,0,""),o={start:o,end:e,detail:{devtools:{color:"error",track:Qg,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+n,o)):performance.measure("​"+n,o)}}}else n=C(r),n!==null&&Jo&&(v=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,n,o,e,Qg,void 0,v)):console.timeStamp(n,o,e,Qg,void 0,v))}function tG(r,o,e,l){if(Jo&&!(o<=r)){var v=(e&738197653)===e?"tertiary-dark":"primary-dark";e=(e&536870912)===e?"Prepared":(e&201326741)===e?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,e,r,o,fr,Er,v)):console.timeStamp(e,r,o,fr,Er,v)}}function O8(r,o,e,l){!Jo||o<=r||(e=(e&738197653)===e?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,o,fr,Er,e)):console.timeStamp("Prewarm",r,o,fr,Er,e))}function A8(r,o,e,l){!Jo||o<=r||(e=(e&738197653)===e?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,o,fr,Er,e)):console.timeStamp("Suspended",r,o,fr,Er,e))}function bG(r,o,e,l,v,n){if(Jo&&!(o<=r)){e=[];for(var b=0;b<l.length;b++){var w=l[b].value;e.push(["Recoverable Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:Er,tooltipText:v?"Hydration Failed":"Recovered after Error",properties:e}}},n?n.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function dw(r,o,e,l){!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,o,fr,Er,"error")):console.timeStamp("Errored",r,o,fr,Er,"error"))}function uG(r,o,e,l){!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,e,r,o,fr,Er,"secondary-light")):console.timeStamp(e,r,o,fr,Er,"secondary-light"))}function H8(r,o,e,l,v){if(Jo&&!(o<=r)){for(var n=[],b=0;b<e.length;b++){var w=e[b].value;n.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"error",track:fr,trackGroup:Er,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:n}}},v?v.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function wh(r,o,e){!Jo||o<=r||(e?e.run(console.timeStamp.bind(console,"Animating",r,o,fr,Er,"secondary-dark")):console.timeStamp("Animating",r,o,fr,Er,"secondary-dark"))}function s1(){for(var r=On,o=X4=On=0;o<r;){var e=zg[o];zg[o++]=null;var l=zg[o];zg[o++]=null;var v=zg[o];zg[o++]=null;var n=zg[o];if(zg[o++]=null,l!==null&&v!==null){var b=l.pending;b===null?v.next=v:(v.next=b.next,b.next=v),l.pending=v}n!==0&&q8(e,v,n)}}function rb(r,o,e,l){zg[On++]=r,zg[On++]=o,zg[On++]=e,zg[On++]=l,X4|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function sw(r,o,e,l){return rb(r,o,e,l),ob(r)}function Qe(r,o){return rb(r,null,null,o),ob(r)}function q8(r,o,e){r.lanes|=e;var l=r.alternate;l!==null&&(l.lanes|=e);for(var v=!1,n=r.return;n!==null;)n.childLanes|=e,l=n.alternate,l!==null&&(l.childLanes|=e),n.tag===22&&(r=n.stateNode,r===null||r._visibility&dh||(v=!0)),r=n,n=n.return;return r.tag===3?(n=r.stateNode,v&&o!==null&&(v=31-Fe(e),r=n.hiddenUpdates,l=r[v],l===null?r[v]=[o]:l.push(o),o.lane=e|536870912),n):null}function ob(r){if(Jt>lJ)throw P0=Jt=0,Qt=e6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");P0>iJ&&(P0=0,Qt=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&FA(r);for(var o=r,e=o.return;e!==null;)o.alternate===null&&(o.flags&4098)!==0&&FA(r),o=e,e=o.return;return o.tag===3?o.stateNode:null}function Sv(r){if(Ug===null)return r;var o=Ug(r);return o===void 0?r:o.current}function r5(r){if(Ug===null)return r;var o=Ug(r);return o===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(o=Sv(r.render),r.render!==o)?(o={$$typeof:Th,render:o},r.displayName!==void 0&&(o.displayName=r.displayName),o):r:o.current}function M8(r,o){if(Ug===null)return!1;var e=r.elementType;o=o.type;var l=!1,v=typeof o==="object"&&o!==null?o.$$typeof:null;switch(r.tag){case 1:typeof o==="function"&&(l=!0);break;case 0:typeof o==="function"?l=!0:v===bg&&(l=!0);break;case 11:v===Th?l=!0:v===bg&&(l=!0);break;case 14:case 15:v===db?l=!0:v===bg&&(l=!0);break;default:return!1}return l&&(r=Ug(e),r!==void 0&&r===Ug(o))?!0:!1}function R8(r){Ug!==null&&typeof WeakSet==="function"&&(An===null&&(An=new WeakSet),An.add(r))}function W8(r,o,e){do{var l=r,v=l.alternate,n=l.child,b=l.sibling,w=l.tag;l=l.type;var H=null;switch(w){case 0:case 15:case 1:H=l;break;case 11:H=l.render}if(Ug===null)throw Error("Expected resolveFamily to be set during hot reload.");var M=!1;if(l=!1,H!==null&&(H=Ug(H),H!==void 0&&(e.has(H)?l=!0:o.has(H)&&(w===1?l=!0:M=!0))),An!==null&&(An.has(r)||v!==null&&An.has(v))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||M)v=Qe(r,2),v!==null&&No(v,r,2);if(n===null||l||W8(n,o,e),b===null)break;r=b}while(1)}function wG(r,o,e,l){this.tag=r,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Jq||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function o5(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _l(r,o){var e=r.alternate;switch(e===null?(e=X(r.tag,o,r.key,r.mode),e.elementType=r.elementType,e.type=r.type,e.stateNode=r.stateNode,e._debugOwner=r._debugOwner,e._debugStack=r._debugStack,e._debugTask=r._debugTask,e._debugHookTypes=r._debugHookTypes,e.alternate=r,r.alternate=e):(e.pendingProps=o,e.type=r.type,e.flags=0,e.subtreeFlags=0,e.deletions=null,e.actualDuration=-0,e.actualStartTime=-1.1),e.flags=r.flags&65011712,e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,o=r.dependencies,e.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},e.sibling=r.sibling,e.index=r.index,e.ref=r.ref,e.refCleanup=r.refCleanup,e.selfBaseDuration=r.selfBaseDuration,e.treeBaseDuration=r.treeBaseDuration,e._debugInfo=r._debugInfo,e._debugNeedsRemount=r._debugNeedsRemount,e.tag){case 0:case 15:e.type=Sv(r.type);break;case 1:e.type=Sv(r.type);break;case 11:e.type=r5(r.type)}return e}function m8(r,o){r.flags&=65011714;var e=r.alternate;return e===null?(r.childLanes=0,r.lanes=o,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.type=e.type,o=e.dependencies,r.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},r.selfBaseDuration=e.selfBaseDuration,r.treeBaseDuration=e.treeBaseDuration),r}function e5(r,o,e,l,v,n){var b=0,w=r;if(typeof r==="function")o5(r)&&(b=1),w=Sv(w);else if(typeof r==="string")b=ir(),b=mX(r,e,b)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E2:return o=X(31,e,o,v),o.elementType=E2,o.lanes=n,o;case en:return Tv(e.children,v,n,o);case pb:b=8,v|=Ue,v|=yg;break;case c2:return r=e,l=v,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),o=X(12,r,o,l|kr),o.elementType=c2,o.lanes=n,o.stateNode={effectDuration:0,passiveEffectDuration:0},o;case _2:return o=X(13,e,o,v),o.elementType=_2,o.lanes=n,o;case a2:return o=X(19,e,o,v),o.elementType=a2,o.lanes=n,o;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Yl:b=10;break r;case y2:b=9;break r;case Th:b=11,w=r5(w);break r;case db:b=14;break r;case bg:b=16,w=null;break r}if(w="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?e="null":le(r)?e="array":r!==void 0&&r.$$typeof===Xl?(e="<"+(y(r.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):e=typeof r,(b=l?f(l):null)&&(w+=`

Check the render method of \``+b+"`."),b=29,e=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(e+"."+w)),w=null}return o=X(b,e,o,v),o.elementType=r,o.type=w,o.lanes=n,o._debugOwner=l,o}function eb(r,o,e){return o=e5(r.type,r.key,r.props,r._owner,o,e),o._debugOwner=r._owner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o}function Tv(r,o,e,l){return r=X(7,r,l,o),r.lanes=e,r}function g5(r,o,e){return r=X(6,r,null,o),r.lanes=e,r}function G8(r){var o=X(18,null,null,Ur);return o.stateNode=r,o}function l5(r,o,e){return o=X(4,r.children!==null?r.children:[],r.key,o),o.lanes=e,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function lg(r,o){if(typeof r==="object"&&r!==null){var e=Y4.get(r);if(e!==void 0)return e;return o={value:r,source:o,stack:Cr(o)},Y4.set(r,o),o}return{value:r,source:o,stack:Cr(o)}}function al(r,o){Ii(),Hn[qn++]=sh,Hn[qn++]=Pu,Pu=r,sh=o}function X8(r,o,e){Ii(),Kg[$g++]=ei,Kg[$g++]=gi,Kg[$g++]=sv,sv=r;var l=ei;r=gi;var v=32-Fe(l)-1;l&=~(1<<v),e+=1;var n=32-Fe(o)+v;if(30<n){var b=v-v%5;n=(l&(1<<b)-1).toString(32),l>>=b,v-=b,ei=1<<32-Fe(o)+v|e<<v|l,gi=n+r}else ei=1<<n|e<<v|l,gi=r}function i5(r){Ii(),r.return!==null&&(al(r,1),X8(r,1,0))}function v5(r){for(;r===Pu;)Pu=Hn[--qn],Hn[qn]=null,sh=Hn[--qn],Hn[qn]=null;for(;r===sv;)sv=Kg[--$g],Kg[$g]=null,gi=Kg[--$g],Kg[$g]=null,ei=Kg[--$g],Kg[$g]=null}function Y8(){return Ii(),sv!==null?{id:ei,overflow:gi}:null}function J8(r,o){Ii(),Kg[$g++]=ei,Kg[$g++]=gi,Kg[$g++]=sv,ei=o.id,gi=o.overflow,sv=r}function Ii(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function kv(r,o){if(r.return===null){if(Pg===null)Pg={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o};else{if(Pg.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Pg.distanceFromLeaf>o&&(Pg.distanceFromLeaf=o)}return Pg}var e=kv(r.return,o+1).children;if(0<e.length&&e[e.length-1].fiber===r)return e=e[e.length-1],e.distanceFromLeaf>o&&(e.distanceFromLeaf=o),e;return o={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o},e.push(o),o}function Q8(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function gb(r,o){$l||(r=kv(r,0),r.serverProps=null,o!==null&&(o=lH(o),r.serverTail.push(o)))}function Li(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,e="",l=Pg;throw l!==null&&(Pg=null,e=yw(l)),Ph(lg(Error("Hydration failed because the server rendered "+(o?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+e),r)),J4}function z8(r){var{stateNode:o,type:e,memoizedProps:l}=r;switch(o[Me]=r,o[xe]=l,Q2(e,l),e){case"dialog":dr("cancel",o),dr("close",o);break;case"iframe":case"object":case"embed":dr("load",o);break;case"video":case"audio":for(e=0;e<zt.length;e++)dr(zt[e],o);break;case"source":dr("error",o);break;case"img":case"image":case"link":dr("error",o),dr("load",o);break;case"details":dr("toggle",o);break;case"input":$i("input",l),dr("invalid",o),FP(o,l),xP(o,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":NP(o,l);break;case"select":$i("select",l),dr("invalid",o),ZP(o,l);break;case"textarea":$i("textarea",l),dr("invalid",o),CP(o,l),TP(o,l.value,l.defaultValue,l.children)}e=l.children,typeof e!=="string"&&typeof e!=="number"&&typeof e!=="bigint"||o.textContent===""+e||l.suppressHydrationWarning===!0||cA(o.textContent,e)?(l.popover!=null&&(dr("beforetoggle",o),dr("toggle",o)),l.onScroll!=null&&dr("scroll",o),l.onScrollEnd!=null&&dr("scrollend",o),l.onClick!=null&&(o.onclick=yl),o=!0):o=!1,o||Li(r,!0)}function U8(r){for(Re=r.return;Re;)switch(Re.tag){case 5:case 31:case 13:Ig=!1;return;case 27:case 3:Ig=!0;return;default:Re=Re.return}}function T0(r){if(r!==Re)return!1;if(!pr)return U8(r),pr=!0,!1;var o=r.tag,e;if(e=o!==3&&o!==27){if(e=o===5)e=r.type,e=!(e!=="form"&&e!=="button")||I2(r.type,r.memoizedProps);e=!e}if(e&&Qo){for(e=Qo;e;){var l=kv(r,0),v=lH(e);l.serverTail.push(v),e=v.type==="Suspense"?N2(e):tg(e.nextSibling)}Li(r)}if(U8(r),o===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=N2(r)}else if(o===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=N2(r)}else o===27?(o=Qo,Di(r.type)?(r=O6,O6=null,Qo=r):Qo=o):Qo=Re?tg(r.stateNode.nextSibling):null;return!0}function Dv(){Qo=Re=null,$l=pr=!1}function n5(){var r=pi;return r!==null&&(Te===null?Te=r:Te.push.apply(Te,r),pi=null),r}function Ph(r){pi===null?pi=[r]:pi.push(r)}function h5(){var r=Pg;if(r!==null){Pg=null;for(var o=yw(r);0<r.children.length;)r=r.children[0];hr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",o)})}}function lb(){Mn=Ou=null,Rn=!1}function Fi(r,o,e){mr(Q4,o._currentValue,r),o._currentValue=e,mr(z4,o._currentRenderer,r),o._currentRenderer!==void 0&&o._currentRenderer!==null&&o._currentRenderer!==zq&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),o._currentRenderer=zq}function El(r,o){r._currentValue=Q4.current;var e=z4.current;Hr(z4,o),r._currentRenderer=e,Hr(Q4,o)}function t5(r,o,e){for(;r!==null;){var l=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),r===e)break;r=r.return}r!==e&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function b5(r,o,e,l){var v=r.child;v!==null&&(v.return=r);for(;v!==null;){var n=v.dependencies;if(n!==null){var b=v.child;n=n.firstContext;r:for(;n!==null;){var w=n;n=v;for(var H=0;H<o.length;H++)if(w.context===o[H]){n.lanes|=e,w=n.alternate,w!==null&&(w.lanes|=e),t5(n.return,e,r),l||(b=null);break r}n=w.next}}else if(v.tag===18){if(b=v.return,b===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");b.lanes|=e,n=b.alternate,n!==null&&(n.lanes|=e),t5(b,e,r),b=null}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===r){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}}function k0(r,o,e,l){r=null;for(var v=o,n=!1;v!==null;){if(!n){if((v.flags&524288)!==0)n=!0;else if((v.flags&262144)!==0)break}if(v.tag===10){var b=v.alternate;if(b===null)throw Error("Should have a current fiber. This is a bug in React.");if(b=b.memoizedProps,b!==null){var w=v.type;Be(v.pendingProps.value,b.value)||(r!==null?r.push(w):r=[w])}}else if(v===sb.current){if(b=v.alternate,b===null)throw Error("Should have a current fiber. This is a bug in React.");b.memoizedState.memoizedState!==v.memoizedState.memoizedState&&(r!==null?r.push(Lt):r=[Lt])}v=v.return}r!==null&&b5(o,r,e,l),o.flags|=262144}function ib(r){for(r=r.firstContext;r!==null;){if(!Be(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Vv(r){Ou=r,Mn=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Ko(r){return Rn&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),K8(Ou,r)}function vb(r,o){return Ou===null&&Vv(r),K8(r,o)}function K8(r,o){var e=o._currentValue;if(o={context:o,memoizedValue:e,next:null},Mn===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Mn=o,r.dependencies={lanes:0,firstContext:o,_debugThenableState:null},r.flags|=524288}else Mn=Mn.next=o;return e}function u5(){return{controller:new _Y,data:new Map,refCount:0}}function cv(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Oh(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&aY(EY,function(){r.controller.abort()})}function bl(r,o,e){if((r&127)!==0)0>Il&&(Il=jo(),ot=Au(o),U4=o,e!=null&&(K4=C(e)),(eo&(ve|Hg))!==ue&&(Bo=!0,rv=rt),r=Nh(),o=xh(),r!==Wn||o!==et?Wn=-1.1:o!==null&&(rv=rt),o0=r,et=o);else if((r&4194048)!==0&&0>Lg&&(Lg=jo(),gt=Au(o),Uq=o,e!=null&&(Kq=C(e)),0>vi)){if(r=Nh(),o=xh(),r!==ev||o!==e0)ev=-1.1;ov=r,e0=o}}function PG(r){if(0>Il){Il=jo(),ot=r._debugTask!=null?r._debugTask:null,(eo&(ve|Hg))!==ue&&(rv=rt);var o=Nh(),e=xh();o!==Wn||e!==et?Wn=-1.1:e!==null&&(rv=rt),o0=o,et=e}if(0>Lg&&(Lg=jo(),gt=r._debugTask!=null?r._debugTask:null,0>vi)){if(r=Nh(),o=xh(),r!==ev||o!==e0)ev=-1.1;ov=r,e0=o}}function fl(){var r=r0;return r0=0,r}function nb(r){var o=r0;return r0=r,o}function Ah(r){var o=r0;return r0+=r,o}function hb(){zr=Jr=-1.1}function ig(){var r=Jr;return Jr=-1.1,r}function vg(r){0<=r&&(Jr=r)}function ul(){var r=Lo;return Lo=-0,r}function wl(r){0<=r&&(Lo=r)}function Pl(){var r=$o;return $o=null,r}function Ol(){var r=Bo;return Bo=!1,r}function w5(r){Ze=jo(),0>r.actualStartTime&&(r.actualStartTime=Ze)}function P5(r){if(0<=Ze){var o=jo()-Ze;r.actualDuration+=o,r.selfBaseDuration=o,Ze=-1}}function $8(r){if(0<=Ze){var o=jo()-Ze;r.actualDuration+=o,Ze=-1}}function Al(){if(0<=Ze){var r=jo(),o=r-Ze;Ze=-1,r0+=o,Lo+=o,zr=r}}function I8(r){$o===null&&($o=[]),$o.push(r),ii===null&&(ii=[]),ii.push(r)}function Hl(){Ze=jo(),0>Jr&&(Jr=Ze)}function Hh(r){for(var o=r.child;o;)r.actualDuration+=o.actualDuration,o=o.sibling}function OG(r,o){if(it===null){var e=it=[];I4=0,g0=G2(),mn={status:"pending",value:void 0,then:function(l){e.push(l)}}}return I4++,o.then(L8,L8),o}function L8(){if(--I4===0&&(-1<Lg||(vi=-1.1),it!==null)){mn!==null&&(mn.status="fulfilled");var r=it;it=null,g0=0,mn=null;for(var o=0;o<r.length;o++)(0,r[o])()}}function AG(r,o){var e=[],l={status:"pending",value:null,reason:null,then:function(v){e.push(v)}};return r.then(function(){l.status="fulfilled",l.value=o;for(var v=0;v<e.length;v++)(0,e[v])(o)},function(v){l.status="rejected",l.reason=v;for(v=0;v<e.length;v++)(0,e[v])(void 0)}),l}function O5(){var r=l0.current;return r!==null?r:Mo.pooledCache}function tb(r,o){o===null?mr(l0,l0.current,r):mr(l0,o.pool,r)}function F8(){var r=O5();return r===null?null:{parent:fo._currentValue,pool:r}}function x8(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function N8(r){return r=r.status,r==="fulfilled"||r==="rejected"}function B8(r,o,e){S.actQueue!==null&&(S.didUsePromise=!0);var l=r.thenables;if(e=l[e],e===void 0?l.push(o):e!==o&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),o.then(yl,yl),o=e),o._debugInfo===void 0){r=performance.now(),l=o.displayName;var v={name:typeof l==="string"?l:"Promise",start:r,end:r,value:o};o._debugInfo=[{awaited:v}],o.status!=="fulfilled"&&o.status!=="rejected"&&(r=function(){v.end=performance.now()},o.then(r,r))}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,C8(r),r;default:if(typeof o.status==="string")o.then(yl,yl);else{if(r=Mo,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=o,r.status="pending",r.then(function(n){if(o.status==="pending"){var b=o;b.status="fulfilled",b.value=n}},function(n){if(o.status==="pending"){var b=o;b.status="rejected",b.reason=n}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,C8(r),r}throw v0=o,wt=!0,Gn}}function xi(r){try{return dY(r)}catch(o){if(o!==null&&typeof o==="object"&&typeof o.then==="function")throw v0=o,wt=!0,Gn;throw o}}function Z8(){if(v0===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=v0;return v0=null,wt=!1,r}function C8(r){if(r===Gn||r===Xu)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Ae(r){var o=Dr;return r!=null&&(Dr=o===null?r:o.concat(r)),o}function A5(){var r=Dr;if(r!=null){for(var o=r.length-1;0<=o;o--)if(r[o].name!=null){var e=r[o].debugTask;if(e!=null)return e}}return null}function bb(r,o,e){for(var l=Object.keys(r.props),v=0;v<l.length;v++){var n=l[v];if(n!=="children"&&n!=="key"){o===null&&(o=eb(r,e.mode,0),o._debugInfo=Dr,o.return=e),hr(o,function(b){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",b)},n);break}}}function ub(r){var o=Pt;return Pt+=1,Xn===null&&(Xn=x8()),B8(Xn,r,o)}function qh(r,o){o=o.props.ref,r.ref=o!==void 0?o:null}function S8(r,o){if(o.$$typeof===IX)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(o),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function wb(r,o){var e=A5();e!==null?e.run(S8.bind(null,r,o)):S8(r,o)}function T8(r,o){var e=C(r)||"Component";fq[e]||(fq[e]=!0,o=o.displayName||o.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,o,o,o):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,o,o,e,o,e))}function Pb(r,o){var e=A5();e!==null?e.run(T8.bind(null,r,o)):T8(r,o)}function k8(r,o){var e=C(r)||"Component";jq[e]||(jq[e]=!0,o=String(o),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,o):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,e,o,e))}function Ob(r,o){var e=A5();e!==null?e.run(k8.bind(null,r,o)):k8(r,o)}function D8(r){function o(Y,Q){if(r){var U=Y.deletions;U===null?(Y.deletions=[Q],Y.flags|=16):U.push(Q)}}function e(Y,Q){if(!r)return null;for(;Q!==null;)o(Y,Q),Q=Q.sibling;return null}function l(Y){for(var Q=new Map;Y!==null;)Y.key!==null?Q.set(Y.key,Y):Q.set(Y.index,Y),Y=Y.sibling;return Q}function v(Y,Q){return Y=_l(Y,Q),Y.index=0,Y.sibling=null,Y}function n(Y,Q,U){if(Y.index=U,!r)return Y.flags|=1048576,Q;if(U=Y.alternate,U!==null)return U=U.index,U<Q?(Y.flags|=67108866,Q):U;return Y.flags|=67108866,Q}function b(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,Q,U,D){if(Q===null||Q.tag!==6)return Q=g5(U,Y.mode,D),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=v(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function H(Y,Q,U,D){var br=U.type;if(br===en)return Q=K(Y,Q,U.props.children,D,U.key),bb(U,Q,Y),Q;if(Q!==null&&(Q.elementType===br||M8(Q,U)||typeof br==="object"&&br!==null&&br.$$typeof===bg&&xi(br)===Q.type))return Q=v(Q,U.props),qh(Q,U),Q.return=Y,Q._debugOwner=U._owner,Q._debugInfo=Dr,Q;return Q=eb(U,Y.mode,D),qh(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function M(Y,Q,U,D){if(Q===null||Q.tag!==4||Q.stateNode.containerInfo!==U.containerInfo||Q.stateNode.implementation!==U.implementation)return Q=l5(U,Y.mode,D),Q.return=Y,Q._debugInfo=Dr,Q;return Q=v(Q,U.children||[]),Q.return=Y,Q._debugInfo=Dr,Q}function K(Y,Q,U,D,br){if(Q===null||Q.tag!==7)return Q=Tv(U,Y.mode,D,br),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=v(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function $(Y,Q,U){if(typeof Q==="string"&&Q!==""||typeof Q==="number"||typeof Q==="bigint")return Q=g5(""+Q,Y.mode,U),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;if(typeof Q==="object"&&Q!==null){switch(Q.$$typeof){case Xl:return U=eb(Q,Y.mode,U),qh(U,Q),U.return=Y,Y=Ae(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;case on:return Q=l5(Q,Y.mode,U),Q.return=Y,Q._debugInfo=Dr,Q;case bg:var D=Ae(Q._debugInfo);return Q=xi(Q),Y=$(Y,Q,U),Dr=D,Y}if(le(Q)||N(Q))return U=Tv(Q,Y.mode,U,null),U.return=Y,U._debugOwner=Y,U._debugTask=Y._debugTask,Y=Ae(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;if(typeof Q.then==="function")return D=Ae(Q._debugInfo),Y=$(Y,ub(Q),U),Dr=D,Y;if(Q.$$typeof===Yl)return $(Y,vb(Y,Q),U);wb(Y,Q)}return typeof Q==="function"&&Pb(Y,Q),typeof Q==="symbol"&&Ob(Y,Q),null}function J(Y,Q,U,D){var br=Q!==null?Q.key:null;if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return br!==null?null:w(Y,Q,""+U,D);if(typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:return U.key===br?(br=Ae(U._debugInfo),Y=H(Y,Q,U,D),Dr=br,Y):null;case on:return U.key===br?M(Y,Q,U,D):null;case bg:return br=Ae(U._debugInfo),U=xi(U),Y=J(Y,Q,U,D),Dr=br,Y}if(le(U)||N(U)){if(br!==null)return null;return br=Ae(U._debugInfo),Y=K(Y,Q,U,D,null),Dr=br,Y}if(typeof U.then==="function")return br=Ae(U._debugInfo),Y=J(Y,Q,ub(U),D),Dr=br,Y;if(U.$$typeof===Yl)return J(Y,Q,vb(Y,U),D);wb(Y,U)}return typeof U==="function"&&Pb(Y,U),typeof U==="symbol"&&Ob(Y,U),null}function x(Y,Q,U,D,br){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return Y=Y.get(U)||null,w(Q,Y,""+D,br);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Xl:return U=Y.get(D.key===null?U:D.key)||null,Y=Ae(D._debugInfo),Q=H(Q,U,D,br),Dr=Y,Q;case on:return Y=Y.get(D.key===null?U:D.key)||null,M(Q,Y,D,br);case bg:var $r=Ae(D._debugInfo);return D=xi(D),Q=x(Y,Q,U,D,br),Dr=$r,Q}if(le(D)||N(D))return U=Y.get(U)||null,Y=Ae(D._debugInfo),Q=K(Q,U,D,br,null),Dr=Y,Q;if(typeof D.then==="function")return $r=Ae(D._debugInfo),Q=x(Y,Q,U,ub(D),br),Dr=$r,Q;if(D.$$typeof===Yl)return x(Y,Q,U,vb(Q,D),br);wb(Q,D)}return typeof D==="function"&&Pb(Q,D),typeof D==="symbol"&&Ob(Q,D),null}function vr(Y,Q,U,D){if(typeof U!=="object"||U===null)return D;switch(U.$$typeof){case Xl:case on:m(Y,Q,U);var br=U.key;if(typeof br!=="string")break;if(D===null){D=new Set,D.add(br);break}if(!D.has(br)){D.add(br);break}hr(Q,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",br)});break;case bg:U=xi(U),vr(Y,Q,U,D)}return D}function Pr(Y,Q,U,D){for(var br=null,$r=null,Xr=null,Wr=Q,Sr=Q=0,zo=null;Wr!==null&&Sr<U.length;Sr++){Wr.index>Sr?(zo=Wr,Wr=null):zo=Wr.sibling;var co=J(Y,Wr,U[Sr],D);if(co===null){Wr===null&&(Wr=zo);break}br=vr(Y,co,U[Sr],br),r&&Wr&&co.alternate===null&&o(Y,Wr),Q=n(co,Q,Sr),Xr===null?$r=co:Xr.sibling=co,Xr=co,Wr=zo}if(Sr===U.length)return e(Y,Wr),pr&&al(Y,Sr),$r;if(Wr===null){for(;Sr<U.length;Sr++)Wr=$(Y,U[Sr],D),Wr!==null&&(br=vr(Y,Wr,U[Sr],br),Q=n(Wr,Q,Sr),Xr===null?$r=Wr:Xr.sibling=Wr,Xr=Wr);return pr&&al(Y,Sr),$r}for(Wr=l(Wr);Sr<U.length;Sr++)zo=x(Wr,Y,Sr,U[Sr],D),zo!==null&&(br=vr(Y,zo,U[Sr],br),r&&zo.alternate!==null&&Wr.delete(zo.key===null?Sr:zo.key),Q=n(zo,Q,Sr),Xr===null?$r=zo:Xr.sibling=zo,Xr=zo);return r&&Wr.forEach(function(Ai){return o(Y,Ai)}),pr&&al(Y,Sr),$r}function Go(Y,Q,U,D){if(U==null)throw Error("An iterable object provided no iterator.");for(var br=null,$r=null,Xr=Q,Wr=Q=0,Sr=null,zo=null,co=U.next();Xr!==null&&!co.done;Wr++,co=U.next()){Xr.index>Wr?(Sr=Xr,Xr=null):Sr=Xr.sibling;var Ai=J(Y,Xr,co.value,D);if(Ai===null){Xr===null&&(Xr=Sr);break}zo=vr(Y,Ai,co.value,zo),r&&Xr&&Ai.alternate===null&&o(Y,Xr),Q=n(Ai,Q,Wr),$r===null?br=Ai:$r.sibling=Ai,$r=Ai,Xr=Sr}if(co.done)return e(Y,Xr),pr&&al(Y,Wr),br;if(Xr===null){for(;!co.done;Wr++,co=U.next())Xr=$(Y,co.value,D),Xr!==null&&(zo=vr(Y,Xr,co.value,zo),Q=n(Xr,Q,Wr),$r===null?br=Xr:$r.sibling=Xr,$r=Xr);return pr&&al(Y,Wr),br}for(Xr=l(Xr);!co.done;Wr++,co=U.next())Sr=x(Xr,Y,Wr,co.value,D),Sr!==null&&(zo=vr(Y,Sr,co.value,zo),r&&Sr.alternate!==null&&Xr.delete(Sr.key===null?Wr:Sr.key),Q=n(Sr,Q,Wr),$r===null?br=Sr:$r.sibling=Sr,$r=Sr);return r&&Xr.forEach(function(GJ){return o(Y,GJ)}),pr&&al(Y,Wr),br}function sr(Y,Q,U,D){if(typeof U==="object"&&U!==null&&U.type===en&&U.key===null&&(bb(U,null,Y),U=U.props.children),typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:var br=Ae(U._debugInfo);r:{for(var $r=U.key;Q!==null;){if(Q.key===$r){if($r=U.type,$r===en){if(Q.tag===7){e(Y,Q.sibling),D=v(Q,U.props.children),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,bb(U,D,Y),Y=D;break r}}else if(Q.elementType===$r||M8(Q,U)||typeof $r==="object"&&$r!==null&&$r.$$typeof===bg&&xi($r)===Q.type){e(Y,Q.sibling),D=v(Q,U.props),qh(D,U),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,Y=D;break r}e(Y,Q);break}else o(Y,Q);Q=Q.sibling}U.type===en?(D=Tv(U.props.children,Y.mode,D,U.key),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,bb(U,D,Y),Y=D):(D=eb(U,Y.mode,D),qh(D,U),D.return=Y,D._debugInfo=Dr,Y=D)}return Y=b(Y),Dr=br,Y;case on:r:{br=U;for(U=br.key;Q!==null;){if(Q.key===U)if(Q.tag===4&&Q.stateNode.containerInfo===br.containerInfo&&Q.stateNode.implementation===br.implementation){e(Y,Q.sibling),D=v(Q,br.children||[]),D.return=Y,Y=D;break r}else{e(Y,Q);break}else o(Y,Q);Q=Q.sibling}D=l5(br,Y.mode,D),D.return=Y,Y=D}return b(Y);case bg:return br=Ae(U._debugInfo),U=xi(U),Y=sr(Y,Q,U,D),Dr=br,Y}if(le(U))return br=Ae(U._debugInfo),Y=Pr(Y,Q,U,D),Dr=br,Y;if(N(U)){if(br=Ae(U._debugInfo),$r=N(U),typeof $r!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Xr=$r.call(U);if(Xr===U){if(Y.tag!==0||Object.prototype.toString.call(Y.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Xr)!=="[object Generator]")aq||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),aq=!0}else U.entries!==$r||N4||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N4=!0);return Y=Go(Y,Q,Xr,D),Dr=br,Y}if(typeof U.then==="function")return br=Ae(U._debugInfo),Y=sr(Y,Q,ub(U),D),Dr=br,Y;if(U.$$typeof===Yl)return sr(Y,Q,vb(Y,U),D);wb(Y,U)}if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return br=""+U,Q!==null&&Q.tag===6?(e(Y,Q.sibling),D=v(Q,br),D.return=Y,Y=D):(e(Y,Q),D=g5(br,Y.mode,D),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,Y=D),b(Y);return typeof U==="function"&&Pb(Y,U),typeof U==="symbol"&&Ob(Y,U),e(Y,Q)}return function(Y,Q,U,D){var br=Dr;Dr=null;try{Pt=0;var $r=sr(Y,Q,U,D);return Xn=null,$r}catch(zo){if(zo===Gn||zo===Xu)throw zo;var Xr=X(29,zo,null,Y.mode);Xr.lanes=D,Xr.return=Y;var Wr=Xr._debugInfo=Dr;if(Xr._debugOwner=Y._debugOwner,Xr._debugTask=Y._debugTask,Wr!=null){for(var Sr=Wr.length-1;0<=Sr;Sr--)if(typeof Wr[Sr].stack==="string"){Xr._debugOwner=Wr[Sr],Xr._debugTask=Wr[Sr].debugTask;break}}return Xr}finally{Dr=br}}}function V8(r,o){var e=le(r);return r=!e&&typeof N(r)==="function",e||r?(e=e?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",e,o,e),!1):!0}function H5(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function q5(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ni(r){return{lane:r,tag:dq,payload:null,callback:null,next:null}}function Bi(r,o,e){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,Z4===l&&!oM){var v=C(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,v),oM=!0}if((eo&ve)!==ue)return v=l.pending,v===null?o.next=o:(o.next=v.next,v.next=o),l.pending=o,o=ob(r),q8(r,null,e),o;return rb(r,l,o,e),ob(r)}function Mh(r,o,e){if(o=o.updateQueue,o!==null&&(o=o.shared,(e&4194048)!==0)){var l=o.lanes;l&=r.pendingLanes,e|=l,o.lanes=e,Fv(r,e)}}function Ab(r,o){var{updateQueue:e,alternate:l}=r;if(l!==null&&(l=l.updateQueue,e===l)){var v=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var b={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?v=n=b:n=n.next=b,e=e.next}while(e!==null);n===null?v=n=o:n=n.next=o}else v=n=o;e={baseState:l.baseState,firstBaseUpdate:v,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},r.updateQueue=e;return}r=e.lastBaseUpdate,r===null?e.firstBaseUpdate=o:r.next=o,e.lastBaseUpdate=o}function Rh(){if(C4){var r=mn;if(r!==null)throw r}}function Wh(r,o,e,l){C4=!1;var v=r.updateQueue;gv=!1,Z4=v.shared;var{firstBaseUpdate:n,lastBaseUpdate:b}=v,w=v.shared.pending;if(w!==null){v.shared.pending=null;var H=w,M=H.next;H.next=null,b===null?n=M:b.next=M,b=H;var K=r.alternate;K!==null&&(K=K.updateQueue,w=K.lastBaseUpdate,w!==b&&(w===null?K.firstBaseUpdate=M:w.next=M,K.lastBaseUpdate=H))}if(n!==null){var $=v.baseState;b=0,K=M=H=null,w=n;do{var J=w.lane&-536870913,x=J!==w.lane;if(x?(Vr&J)===J:(l&J)===J){J!==0&&J===g0&&(C4=!0),K!==null&&(K=K.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});r:{J=r;var vr=w,Pr=o,Go=e;switch(vr.tag){case sq:if(vr=vr.payload,typeof vr==="function"){Rn=!0;var sr=vr.call(Go,$,Pr);if(J.mode&Ue){Wo(!0);try{vr.call(Go,$,Pr)}finally{Wo(!1)}}Rn=!1,$=sr;break r}$=vr;break r;case B4:J.flags=J.flags&-65537|128;case dq:if(sr=vr.payload,typeof sr==="function"){if(Rn=!0,vr=sr.call(Go,$,Pr),J.mode&Ue){Wo(!0);try{sr.call(Go,$,Pr)}finally{Wo(!1)}}Rn=!1}else vr=sr;if(vr===null||vr===void 0)break r;$=ar({},$,vr);break r;case rM:gv=!0}}J=w.callback,J!==null&&(r.flags|=64,x&&(r.flags|=8192),x=v.callbacks,x===null?v.callbacks=[J]:x.push(J))}else x={lane:J,tag:w.tag,payload:w.payload,callback:w.callback,next:null},K===null?(M=K=x,H=$):K=K.next=x,b|=J;if(w=w.next,w===null)if(w=v.shared.pending,w===null)break;else x=w,w=x.next,x.next=null,v.lastBaseUpdate=x,v.shared.pending=null}while(1);K===null&&(H=$),v.baseState=H,v.firstBaseUpdate=M,v.lastBaseUpdate=K,n===null&&(v.shared.lanes=0),vv|=b,r.lanes=b,r.memoizedState=$}Z4=null}function c8(r,o){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(o)}function HG(r,o){var e=r.shared.hiddenCallbacks;if(e!==null)for(r.shared.hiddenCallbacks=null,r=0;r<e.length;r++)c8(e[r],o)}function y8(r,o){var e=r.callbacks;if(e!==null)for(r.callbacks=null,r=0;r<e.length;r++)c8(e[r],o)}function _8(r,o){var e=xl;mr(Ju,e,r),mr(Yn,o,r),xl=e|o.baseLanes}function M5(r){mr(Ju,xl,r),mr(Yn,Yn.current,r)}function R5(r){xl=Ju.current,Hr(Yn,r),Hr(Ju,r)}function Zi(r){var o=r.alternate;mr(Vo,Vo.current&Jn,r),mr(Og,r,r),Fg===null&&(o===null||Yn.current!==null?Fg=r:o.memoizedState!==null&&(Fg=r))}function W5(r){mr(Vo,Vo.current,r),mr(Og,r,r),Fg===null&&(Fg=r)}function a8(r){r.tag===22?(mr(Vo,Vo.current,r),mr(Og,r,r),Fg===null&&(Fg=r)):Ci(r)}function Ci(r){mr(Vo,Vo.current,r),mr(Og,Og.current,r)}function ng(r){Hr(Og,r),Fg===r&&(Fg=null),Hr(Vo,r)}function Hb(r){for(var o=r;o!==null;){if(o.tag===13){var e=o.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||F2(e)||x2(e)))return o}else if(o.tag===19&&(o.memoizedProps.revealOrder==="forwards"||o.memoizedProps.revealOrder==="backwards"||o.memoizedProps.revealOrder==="unstable_legacy-backwards"||o.memoizedProps.revealOrder==="together")){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function _r(){var r=B;Ng===null?Ng=[r]:Ng.push(r)}function d(){var r=B;if(Ng!==null&&(bi++,Ng[bi]!==r)){var o=C(Kr);if(!eM.has(o)&&(eM.add(o),Ng!==null)){for(var e="",l=0;l<=bi;l++){var v=Ng[l],n=l===bi?r:v;for(v=l+1+". "+v;30>v.length;)v+=" ";v+=n+`
`,e+=v}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,o,e)}}}function D0(r){r===void 0||r===null||le(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function qb(){var r=C(Kr);lM.has(r)||(lM.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function So(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function m5(r,o){if(Ht)return!1;if(o===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==o.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+o.join(", ")+"]","["+r.join(", ")+"]");for(var e=0;e<o.length&&e<r.length;e++)if(!Be(r[e],o[e]))return!1;return!0}function G5(r,o,e,l,v,n){if(hi=n,Kr=o,Ng=r!==null?r._debugHookTypes:null,bi=-1,Ht=r!==null&&r.type!==o.type,Object.prototype.toString.call(e)==="[object AsyncFunction]"||Object.prototype.toString.call(e)==="[object AsyncGeneratorFunction]")n=C(Kr),S4.has(n)||(S4.add(n),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",n===null?"An unknown Component":"<"+n+">"));o.memoizedState=null,o.updateQueue=null,o.lanes=0,S.H=r!==null&&r.memoizedState!==null?k4:Ng!==null?iM:T4,h0=n=(o.mode&Ue)!==Ur;var b=L4(e,l,v);if(h0=!1,zn&&(b=X5(o,e,l,v)),n){Wo(!0);try{b=X5(o,e,l,v)}finally{Wo(!1)}}return E8(r,o),b}function E8(r,o){o._debugHookTypes=Ng,o.dependencies===null?ti!==null&&(o.dependencies={lanes:0,firstContext:null,_debugThenableState:ti}):o.dependencies._debugThenableState=ti,S.H=qt;var e=qo!==null&&qo.next!==null;if(hi=0,Ng=B=po=qo=Kr=null,bi=-1,r!==null&&(r.flags&65011712)!==(o.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),zu=!1,At=0,ti=null,e)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||so||(r=r.dependencies,r!==null&&ib(r)&&(so=!0)),wt?(wt=!1,r=!0):r=!1,r&&(o=C(o)||"Unknown",gM.has(o)||S4.has(o)||(gM.add(o),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X5(r,o,e,l){Kr=r;var v=0;do{if(zn&&(ti=null),At=0,zn=!1,v>=rJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(v+=1,Ht=!1,po=qo=null,r.updateQueue!=null){var n=r.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}bi=-1,S.H=vM,n=L4(o,e,l)}while(zn);return n}function qG(){var r=S.H,o=r.useState()[0];return o=typeof o.then==="function"?mh(o):o,r=r.useState()[0],(qo!==null?qo.memoizedState:null)!==r&&(Kr.flags|=1024),o}function Y5(){var r=Uu!==0;return Uu=0,r}function J5(r,o,e){o.updateQueue=r.updateQueue,o.flags=(o.mode&yg)!==Ur?o.flags&-402655237:o.flags&-2053,r.lanes&=~e}function Q5(r){if(zu){for(r=r.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zu=!1}hi=0,Ng=po=qo=Kr=null,bi=-1,B=null,zn=!1,At=Uu=0,ti=null}function Le(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?Kr.memoizedState=po=r:po=po.next=r,po}function bo(){if(qo===null){var r=Kr.alternate;r=r!==null?r.memoizedState:null}else r=qo.next;var o=po===null?Kr.memoizedState:po.next;if(o!==null)po=o,qo=r;else{if(r===null){if(Kr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}qo=r,r={memoizedState:qo.memoizedState,baseState:qo.baseState,baseQueue:qo.baseQueue,queue:qo.queue,next:null},po===null?Kr.memoizedState=po=r:po=po.next=r}return po}function Mb(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mh(r){var o=At;return At+=1,ti===null&&(ti=x8()),r=B8(ti,r,o),o=Kr,(po===null?o.memoizedState:po.next)===null&&(o=o.alternate,S.H=o!==null&&o.memoizedState!==null?k4:T4),r}function Si(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return mh(r);if(r.$$typeof===Yl)return Ko(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function yv(r){var o=null,e=Kr.updateQueue;if(e!==null&&(o=e.memoCache),o==null){var l=Kr.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(o={data:l.data.map(function(v){return v.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),e===null&&(e=Mb(),Kr.updateQueue=e),e.memoCache=o,e=o.data[o.index],e===void 0||Ht)for(e=o.data[o.index]=Array(r),l=0;l<r;l++)e[l]=LX;else e.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",e.length,r);return o.index++,e}function kg(r,o){return typeof o==="function"?o(r):o}function z5(r,o,e){var l=Le();if(e!==void 0){var v=e(o);if(h0){Wo(!0);try{e(o)}finally{Wo(!1)}}}else v=o;return l.memoizedState=l.baseState=v,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:v},l.queue=r,r=r.dispatch=GG.bind(null,Kr,r),[l.memoizedState,r]}function V0(r){var o=bo();return U5(o,qo,r)}function U5(r,o,e){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=e;var v=r.baseQueue,n=l.pending;if(n!==null){if(v!==null){var b=v.next;v.next=n.next,n.next=b}o.baseQueue!==v&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),o.baseQueue=v=n,l.pending=null}if(n=r.baseState,v===null)r.memoizedState=n;else{o=v.next;var w=b=null,H=null,M=o,K=!1;do{var $=M.lane&-536870913;if($!==M.lane?(Vr&$)===$:(hi&$)===$){var J=M.revertLane;if(J===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),$===g0&&(K=!0);else if((hi&J)===J){M=M.next,J===g0&&(K=!0);continue}else $={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},H===null?(w=H=$,b=n):H=H.next=$,Kr.lanes|=J,vv|=J;$=M.action,h0&&e(n,$),n=M.hasEagerState?M.eagerState:e(n,$)}else J={lane:$,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},H===null?(w=H=J,b=n):H=H.next=J,Kr.lanes|=$,vv|=$;M=M.next}while(M!==null&&M!==o);if(H===null?b=n:H.next=w,!Be(n,r.memoizedState)&&(so=!0,K&&(e=mn,e!==null)))throw e;r.memoizedState=n,r.baseState=b,r.baseQueue=H,l.lastRenderedState=n}return v===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Gh(r){var o=bo(),e=o.queue;if(e===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");e.lastRenderedReducer=r;var{dispatch:l,pending:v}=e,n=o.memoizedState;if(v!==null){e.pending=null;var b=v=v.next;do n=r(n,b.action),b=b.next;while(b!==v);Be(n,o.memoizedState)||(so=!0),o.memoizedState=n,o.baseQueue===null&&(o.baseState=n),e.lastRenderedState=n}return[n,l]}function K5(r,o,e){var l=Kr,v=Le();if(pr){if(e===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var n=e();Qn||n===e()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Qn=!0)}else{if(n=o(),Qn||(e=o(),Be(n,e)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qn=!0)),Mo===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||f8(l,o,n)}return v.memoizedState=n,e={value:n,getSnapshot:o},v.queue=e,Gb(p8.bind(null,l,e,r),[r]),l.flags|=2048,y0(xg|Se,{destroy:void 0},j8.bind(null,l,e,n,o),null),n}function Rb(r,o,e){var l=Kr,v=bo(),n=pr;if(n){if(e===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");e=e()}else if(e=o(),!Qn){var b=o();Be(e,b)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qn=!0)}if(b=!Be((qo||v).memoizedState,e))v.memoizedState=e,so=!0;v=v.queue;var w=p8.bind(null,l,v,r);if(ae(2048,Se,w,[r]),v.getSnapshot!==o||b||po!==null&&po.memoizedState.tag&xg){if(l.flags|=2048,y0(xg|Se,{destroy:void 0},j8.bind(null,l,v,e,o),null),Mo===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");n||(hi&127)!==0||f8(l,o,e)}return e}function f8(r,o,e){r.flags|=16384,r={getSnapshot:o,value:e},o=Kr.updateQueue,o===null?(o=Mb(),Kr.updateQueue=o,o.stores=[r]):(e=o.stores,e===null?o.stores=[r]:e.push(r))}function j8(r,o,e,l){o.value=e,o.getSnapshot=l,d8(o)&&s8(r)}function p8(r,o,e){return e(function(){d8(o)&&(bl(2,"updateSyncExternalStore()",r),s8(r))})}function d8(r){var o=r.getSnapshot;r=r.value;try{var e=o();return!Be(r,e)}catch(l){return!0}}function s8(r){var o=Qe(r,2);o!==null&&No(o,r,2)}function $5(r){var o=Le();if(typeof r==="function"){var e=r;if(r=e(),h0){Wo(!0);try{e()}finally{Wo(!1)}}}return o.memoizedState=o.baseState=r,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:r},o}function I5(r){r=$5(r);var o=r.queue,e=MO.bind(null,Kr,o);return o.dispatch=e,[r.memoizedState,e]}function L5(r){var o=Le();o.memoizedState=o.baseState=r;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=e,o=_5.bind(null,Kr,!0,e),e.dispatch=o,[r,o]}function rO(r,o){var e=bo();return oO(e,qo,r,o)}function oO(r,o,e,l){return r.baseState=e,U5(r,qo,typeof l==="function"?l:kg)}function eO(r,o){var e=bo();if(qo!==null)return oO(e,qo,r,o);return e.baseState=r,[r,e.queue.dispatch]}function MG(r,o,e,l,v){if(Ub(r))throw Error("Cannot update form state while rendering.");if(r=o.action,r!==null){var n={payload:v,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){n.listeners.push(b)}};S.T!==null?e(!0):n.isTransition=!1,l(n),e=o.pending,e===null?(n.next=o.pending=n,gO(o,n)):(n.next=e.next,o.pending=e.next=n)}}function gO(r,o){var{action:e,payload:l}=o,v=r.state;if(o.isTransition){var n=S.T,b={};b._updatedFibers=new Set,S.T=b;try{var w=e(v,l),H=S.S;H!==null&&H(b,w),lO(r,o,w)}catch(M){F5(r,o,M)}finally{n!==null&&b.types!==null&&(n.types!==null&&n.types!==b.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),n.types=b.types),S.T=n,n===null&&b._updatedFibers&&(r=b._updatedFibers.size,b._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{b=e(v,l),lO(r,o,b)}catch(M){F5(r,o,M)}}function lO(r,o,e){e!==null&&typeof e==="object"&&typeof e.then==="function"?(S.asyncTransitions++,e.then(zb,zb),e.then(function(l){iO(r,o,l)},function(l){return F5(r,o,l)}),o.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):iO(r,o,e)}function iO(r,o,e){o.status="fulfilled",o.value=e,vO(o),r.state=e,o=r.pending,o!==null&&(e=o.next,e===o?r.pending=null:(e=e.next,o.next=e,gO(r,e)))}function F5(r,o,e){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do o.status="rejected",o.reason=e,vO(o),o=o.next;while(o!==l)}r.action=null}function vO(r){r=r.listeners;for(var o=0;o<r.length;o++)(0,r[o])()}function nO(r,o){return o}function c0(r,o){if(pr){var e=Mo.formState;if(e!==null){r:{var l=Kr;if(pr){if(Qo){o:{var v=Qo;for(var n=Ig;v.nodeType!==8;){if(!n){v=null;break o}if(v=tg(v.nextSibling),v===null){v=null;break o}}n=v.data,v=n===b6||n===yM?v:null}if(v){Qo=tg(v.nextSibling),l=v.data===b6;break r}}Li(l)}l=!1}l&&(o=e[0])}}return e=Le(),e.memoizedState=e.baseState=o,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nO,lastRenderedState:o},e.queue=l,e=MO.bind(null,Kr,l),l.dispatch=e,l=$5(!1),n=_5.bind(null,Kr,!1,l.queue),l=Le(),v={state:o,dispatch:null,action:r,pending:null},l.queue=v,e=MG.bind(null,Kr,v,n,e),v.dispatch=e,l.memoizedState=r,[o,e,!1]}function Wb(r){var o=bo();return hO(o,qo,r)}function hO(r,o,e){if(o=U5(r,o,nO)[0],r=V0(kg)[0],typeof o==="object"&&o!==null&&typeof o.then==="function")try{var l=mh(o)}catch(b){if(b===Gn)throw Xu;throw b}else l=o;o=bo();var v=o.queue,n=v.dispatch;return e!==o.memoizedState&&(Kr.flags|=2048,y0(xg|Se,{destroy:void 0},RG.bind(null,v,e),null)),[l,n,r]}function RG(r,o){r.action=o}function mb(r){var o=bo(),e=qo;if(e!==null)return hO(o,e,r);bo(),o=o.memoizedState,e=bo();var l=e.queue.dispatch;return e.memoizedState=r,[o,l,!1]}function y0(r,o,e,l){return r={tag:r,create:e,deps:l,inst:o,next:null},o=Kr.updateQueue,o===null&&(o=Mb(),Kr.updateQueue=o),e=o.lastEffect,e===null?o.lastEffect=r.next=r:(l=e.next,e.next=r,r.next=l,o.lastEffect=r),r}function x5(r){var o=Le();return r={current:r},o.memoizedState=r}function _v(r,o,e,l){var v=Le();Kr.flags|=r,v.memoizedState=y0(xg|o,{destroy:void 0},e,l===void 0?null:l)}function ae(r,o,e,l){var v=bo();l=l===void 0?null:l;var n=v.memoizedState.inst;qo!==null&&l!==null&&m5(l,qo.memoizedState.deps)?v.memoizedState=y0(o,n,e,l):(Kr.flags|=r,v.memoizedState=y0(xg|o,n,e,l))}function Gb(r,o){(Kr.mode&yg)!==Ur?_v(276826112,Se,r,o):_v(8390656,Se,r,o)}function WG(r){Kr.flags|=4;var o=Kr.updateQueue;if(o===null)o=Mb(),Kr.updateQueue=o,o.events=[r];else{var e=o.events;e===null?o.events=[r]:e.push(r)}}function N5(r){var o=Le(),e={impl:r};return o.memoizedState=e,function(){if((eo&ve)!==ue)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return e.impl.apply(void 0,arguments)}}function Xb(r){var o=bo().memoizedState;return WG({ref:o,nextImpl:r}),function(){if((eo&ve)!==ue)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function B5(r,o){var e=4194308;return(Kr.mode&yg)!==Ur&&(e|=134217728),_v(e,Ag,r,o)}function tO(r,o){if(typeof o==="function"){r=r();var e=o(r);return function(){typeof e==="function"?e():o(null)}}if(o!==null&&o!==void 0)return o.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}"),r=r(),o.current=r,function(){o.current=null}}function Z5(r,o,e){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),e=e!==null&&e!==void 0?e.concat([r]):null;var l=4194308;(Kr.mode&yg)!==Ur&&(l|=134217728),_v(l,Ag,tO.bind(null,o,r),e)}function Yb(r,o,e){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),e=e!==null&&e!==void 0?e.concat([r]):null,ae(4,Ag,tO.bind(null,o,r),e)}function C5(r,o){return Le().memoizedState=[r,o===void 0?null:o],r}function Jb(r,o){var e=bo();o=o===void 0?null:o;var l=e.memoizedState;if(o!==null&&m5(o,l[1]))return l[0];return e.memoizedState=[r,o],r}function S5(r,o){var e=Le();o=o===void 0?null:o;var l=r();if(h0){Wo(!0);try{r()}finally{Wo(!1)}}return e.memoizedState=[l,o],l}function Qb(r,o){var e=bo();o=o===void 0?null:o;var l=e.memoizedState;if(o!==null&&m5(o,l[1]))return l[0];if(l=r(),h0){Wo(!0);try{r()}finally{Wo(!1)}}return e.memoizedState=[l,o],l}function T5(r,o){var e=Le();return k5(e,r,o)}function bO(r,o){var e=bo();return wO(e,qo.memoizedState,r,o)}function uO(r,o){var e=bo();return qo===null?k5(e,r,o):wO(e,qo.memoizedState,r,o)}function k5(r,o,e){if(e===void 0||(hi&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=o;return r.memoizedState=e,r=PA(),Kr.lanes|=r,vv|=r,e}function wO(r,o,e,l){if(Be(e,o))return e;if(Yn.current!==null)return r=k5(r,e,l),Be(r,o)||(so=!0),r;if((hi&42)===0||(hi&1073741824)!==0&&(Vr&261930)===0)return so=!0,r.memoizedState=e;return r=PA(),Kr.lanes|=r,vv|=r,o}function zb(){S.asyncTransitions--}function PO(r,o,e,l,v){var n=ho.p;ho.p=n!==0&&n<cg?n:cg;var b=S.T,w={};w._updatedFibers=new Set,S.T=w,_5(r,!1,o,e);try{var H=v(),M=S.S;if(M!==null&&M(w,H),H!==null&&typeof H==="object"&&typeof H.then==="function"){S.asyncTransitions++,H.then(zb,zb);var K=AG(H,l);Xh(r,o,K,hg(r))}else Xh(r,o,l,hg(r))}catch($){Xh(r,o,{then:function(){},status:"rejected",reason:$},hg(r))}finally{ho.p=n,b!==null&&w.types!==null&&(b.types!==null&&b.types!==w.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=w.types),S.T=b,b===null&&w._updatedFibers&&(r=w._updatedFibers.size,w._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function D5(r,o,e,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var v=OO(r).queue;PG(r),PO(r,v,o,R0,e===null?G:function(){return AO(r),e(l)})}function OO(r){var o=r.memoizedState;if(o!==null)return o;o={memoizedState:R0,baseState:R0,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:R0},next:null};var e={};return o.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:e},next:null},r.memoizedState=o,r=r.alternate,r!==null&&(r.memoizedState=o),o}function AO(r){S.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var o=OO(r);o.next===null&&(o=r.alternate.memoizedState),Xh(r,o.next.queue,{},hg(r))}function V5(){var r=$5(!1);return r=PO.bind(null,Kr,r.queue,!0,!1),Le().memoizedState=r,[!1,r]}function HO(){var r=V0(kg)[0],o=bo().memoizedState;return[typeof r==="boolean"?r:mh(r),o]}function qO(){var r=Gh(kg)[0],o=bo().memoizedState;return[typeof r==="boolean"?r:mh(r),o]}function av(){return Ko(Lt)}function c5(){var r=Le(),o=Mo.identifierPrefix;if(pr){var e=gi,l=ei;e=(l&~(1<<32-Fe(l)-1)).toString(32)+e,o="_"+o+"R_"+e,e=Uu++,0<e&&(o+="H"+e.toString(32)),o+="_"}else e=sY++,o="_"+o+"r_"+e.toString(32)+"_";return r.memoizedState=o}function y5(){return Le().memoizedState=mG.bind(null,Kr)}function mG(r,o){for(var e=r.return;e!==null;){switch(e.tag){case 24:case 3:var l=hg(e),v=Ni(l),n=Bi(e,v,l);n!==null&&(bl(l,"refresh()",r),No(n,e,l),Mh(n,e,l)),r=u5(),o!==null&&o!==void 0&&n!==null&&console.error("The seed argument is not enabled outside experimental channels."),v.payload={cache:r};return}e=e.return}}function GG(r,o,e){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=hg(r);var v={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};Ub(r)?RO(o,v):(v=sw(r,o,v,l),v!==null&&(bl(l,"dispatch()",r),No(v,r,l),WO(v,o,l)))}function MO(r,o,e){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=hg(r),Xh(r,o,e,l)&&bl(l,"setState()",r)}function Xh(r,o,e,l){var v={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ub(r))RO(o,v);else{var n=r.alternate;if(r.lanes===0&&(n===null||n.lanes===0)&&(n=o.lastRenderedReducer,n!==null)){var b=S.H;S.H=ag;try{var w=o.lastRenderedState,H=n(w,e);if(v.hasEagerState=!0,v.eagerState=H,Be(H,w))return rb(r,o,v,0),Mo===null&&s1(),!1}catch(M){}finally{S.H=b}}if(e=sw(r,o,v,l),e!==null)return No(e,r,l),WO(e,o,l),!0}return!1}function _5(r,o,e,l){if(S.T===null&&g0===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:G2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ub(r)){if(o)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else o=sw(r,e,l,2),o!==null&&(bl(2,"setOptimistic()",r),No(o,r,2))}function Ub(r){var o=r.alternate;return r===Kr||o!==null&&o===Kr}function RO(r,o){zn=zu=!0;var e=r.pending;e===null?o.next=o:(o.next=e.next,e.next=o),r.pending=o}function WO(r,o,e){if((e&4194048)!==0){var l=o.lanes;l&=r.pendingLanes,e|=l,o.lanes=e,Fv(r,e)}}function a5(r){if(r!==null&&typeof r!=="function"){var o=String(r);qM.has(o)||(qM.add(o),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E5(r,o,e,l){var v=r.memoizedState,n=e(l,v);if(r.mode&Ue){Wo(!0);try{n=e(l,v)}finally{Wo(!1)}}n===void 0&&(o=y(o)||"Component",PM.has(o)||(PM.add(o),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",o))),v=n===null||n===void 0?v:ar({},v,n),r.memoizedState=v,r.lanes===0&&(r.updateQueue.baseState=v)}function mO(r,o,e,l,v,n,b){var w=r.stateNode;if(typeof w.shouldComponentUpdate==="function"){if(e=w.shouldComponentUpdate(l,n,b),r.mode&Ue){Wo(!0);try{e=w.shouldComponentUpdate(l,n,b)}finally{Wo(!1)}}return e===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(o)||"Component"),e}return o.prototype&&o.prototype.isPureReactComponent?!uh(e,l)||!uh(v,n):!0}function GO(r,o,e,l){var v=o.state;typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps(e,l),typeof o.UNSAFE_componentWillReceiveProps==="function"&&o.UNSAFE_componentWillReceiveProps(e,l),o.state!==v&&(r=C(r)||"Component",hM.has(r)||(hM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),D4.enqueueReplaceState(o,o.state,null))}function Ev(r,o){var e=o;if("ref"in o){e={};for(var l in o)l!=="ref"&&(e[l]=o[l])}if(r=r.defaultProps){e===o&&(e=ar({},e));for(var v in r)e[v]===void 0&&(e[v]=r[v])}return e}function XO(r){R4(r),console.warn(`%s

%s
`,Un?"An error occurred in the <"+Un+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function YO(r){var o=Un?"The above error occurred in the <"+Un+"> component.":"The above error occurred in one of your React components.",e="React will try to recreate this component tree from scratch using the error boundary you provided, "+((V4||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,o,e].slice(0),typeof r[0]==="string"?r.splice(0,1,sM+" "+r[0],rR,su+l+su,oR):r.splice(0,0,sM,rR,su+l+su,oR),r.unshift(console),l=WJ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,o,e)}function JO(r){R4(r)}function Kb(r,o){try{Un=o.source?C(o.source):null,V4=null;var e=o.value;if(S.actQueue!==null)S.thrownErrors.push(e);else{var l=r.onUncaughtError;l(e,{componentStack:o.stack})}}catch(v){setTimeout(function(){throw v})}}function QO(r,o,e){try{Un=e.source?C(e.source):null,V4=C(o);var l=r.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(v){setTimeout(function(){throw v})}}function f5(r,o,e){return e=Ni(e),e.tag=B4,e.payload={element:null},e.callback=function(){hr(o.source,Kb,r,o)},e}function j5(r){return r=Ni(r),r.tag=B4,r}function p5(r,o,e,l){var v=e.type.getDerivedStateFromError;if(typeof v==="function"){var n=l.value;r.payload=function(){return v(n)},r.callback=function(){R8(e),hr(l.source,QO,o,e,l)}}var b=e.stateNode;b!==null&&typeof b.componentDidCatch==="function"&&(r.callback=function(){R8(e),hr(l.source,QO,o,e,l),typeof v!=="function"&&(hv===null?hv=new Set([this]):hv.add(this)),fY(this,l),typeof v==="function"||(e.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",C(e)||"Unknown")})}function XG(r,o,e,l,v){if(e.flags|=32768,zl&&Ih(r,v),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(o=e.alternate,o!==null&&k0(o,e,v,!0),pr&&($l=!0),e=Og.current,e!==null){switch(e.tag){case 31:case 13:return Fg===null?Cb():e.alternate===null&&Fo===wi&&(Fo=Iu),e.flags&=-257,e.flags|=65536,e.lanes=v,l===Yu?e.flags|=16384:(o=e.updateQueue,o===null?e.updateQueue=new Set([l]):o.add(l),M2(r,l,v)),!1;case 22:return e.flags|=65536,l===Yu?e.flags|=16384:(o=e.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=o):(e=o.retryQueue,e===null?o.retryQueue=new Set([l]):e.add(l)),M2(r,l,v)),!1}throw Error("Unexpected Suspense handler tag ("+e.tag+"). This is a bug in React.")}return M2(r,l,v),Cb(),!1}if(pr)return $l=!0,o=Og.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=v,l!==J4&&Ph(lg(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),e))):(l!==J4&&Ph(lg(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),e)),r=r.current.alternate,r.flags|=65536,v&=-v,r.lanes|=v,l=lg(l,e),v=f5(r.stateNode,l,v),Ab(r,v),Fo!==lv&&(Fo=t0)),!1;var n=lg(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),e);if(Xt===null?Xt=[n]:Xt.push(n),Fo!==lv&&(Fo=t0),o===null)return!0;l=lg(l,e),e=o;do{switch(e.tag){case 3:return e.flags|=65536,r=v&-v,e.lanes|=r,r=f5(e.stateNode,l,r),Ab(e,r),!1;case 1:if(o=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof o.getDerivedStateFromError==="function"||n!==null&&typeof n.componentDidCatch==="function"&&(hv===null||!hv.has(n))))return e.flags|=65536,v&=-v,e.lanes|=v,v=j5(v),p5(v,r,e,l),Ab(e,v),!1}e=e.return}while(e!==null);return!1}function He(r,o,e,l){o.child=r===null?pq(o,null,e,l):n0(o,r.child,e,l)}function zO(r,o,e,l,v){e=e.render;var n=o.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;if(Vv(o),l=G5(r,o,e,b,n,v),w=Y5(),r!==null&&!so)return J5(r,o,v),jl(r,o,v);return pr&&w&&i5(o),o.flags|=1,He(r,o,l,v),o.child}function UO(r,o,e,l,v){if(r===null){var n=e.type;if(typeof n==="function"&&!o5(n)&&n.defaultProps===void 0&&e.compare===null)return e=Sv(n),o.tag=15,o.type=e,s5(o,n),KO(r,o,e,l,v);return r=e5(e.type,null,l,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r}if(n=r.child,!i2(r,v)){var b=n.memoizedProps;if(e=e.compare,e=e!==null?e:uh,e(b,l)&&r.ref===o.ref)return jl(r,o,v)}return o.flags|=1,r=_l(n,l),r.ref=o.ref,r.return=o,o.child=r}function KO(r,o,e,l,v){if(r!==null){var n=r.memoizedProps;if(uh(n,l)&&r.ref===o.ref&&o.type===r.type)if(so=!1,o.pendingProps=l=n,i2(r,v))(r.flags&131072)!==0&&(so=!0);else return o.lanes=r.lanes,jl(r,o,v)}return d5(r,o,e,l,v)}function $O(r,o,e,l){var v=l.children,n=r!==null?r.memoizedState:null;if(r===null&&o.stateNode===null&&(o.stateNode={_visibility:dh,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((o.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,r!==null){l=o.child=r.child;for(v=0;l!==null;)v=v|l.lanes|l.childLanes,l=l.sibling;l=v&~n}else l=0,o.child=null;return IO(r,o,n,e,l)}if((e&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},r!==null&&tb(o,n!==null?n.cachePool:null),n!==null?_8(o,n):M5(o),a8(o);else return l=o.lanes=536870912,IO(r,o,n!==null?n.baseLanes|e:e,e,l)}else n!==null?(tb(o,n.cachePool),_8(o,n),Ci(o),o.memoizedState=null):(r!==null&&tb(o,null),M5(o),Ci(o));return He(r,o,v,e),o.child}function Yh(r,o){return r!==null&&r.tag===22||o.stateNode!==null||(o.stateNode={_visibility:dh,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.sibling}function IO(r,o,e,l,v){var n=O5();return n=n===null?null:{parent:fo._currentValue,pool:n},o.memoizedState={baseLanes:e,cachePool:n},r!==null&&tb(o,null),M5(o),a8(o),r!==null&&k0(r,o,l,!0),o.childLanes=v,null}function $b(r,o){var e=o.hidden;return e!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,e===!0?"hidden":e===!1?"hidden={false}":"hidden={...}",e?'mode="hidden"':'mode="visible"'),o=Lb({mode:o.mode,children:o.children},r.mode),o.ref=r.ref,r.child=o,o.return=r,o}function LO(r,o,e){return n0(o,r.child,null,e),r=$b(o,o.pendingProps),r.flags|=2,ng(o),o.memoizedState=null,r}function YG(r,o,e){var l=o.pendingProps,v=(o.flags&128)!==0;if(o.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=$b(o,l),o.lanes=536870912,Yh(null,r);if(W5(o),(r=Qo)?(e=gH(r,Ig),e=e!==null&&e.data===A0?e:null,e!==null&&(l={dehydrated:e,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=G8(e),l.return=o,o.child=l,Re=o,Qo=null)):e=null,e===null)throw gb(o,r),Li(o);return o.lanes=536870912,null}return $b(o,l)}var n=r.memoizedState;if(n!==null){var b=n.dehydrated;if(W5(o),v)if(o.flags&256)o.flags&=-257,o=LO(r,o,e);else if(o.memoizedState!==null)o.child=r.child,o.flags|=128,o=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(Q8(),(e&536870912)!==0&&Zb(o),so||k0(r,o,e,!1),v=(e&r.childLanes)!==0,so||v){if(l=Mo,l!==null&&(b=xv(l,e),b!==0&&b!==n.retryLane))throw n.retryLane=b,Qe(r,b),No(l,r,b),c4;Cb(),o=LO(r,o,e)}else r=n.treeContext,Qo=tg(b.nextSibling),Re=o,pr=!0,pi=null,$l=!1,Pg=null,Ig=!1,r!==null&&J8(o,r),o=$b(o,l),o.flags|=4096;return o}return n=r.child,l={mode:l.mode,children:l.children},(e&536870912)!==0&&(e&r.lanes)!==0&&Zb(o),r=_l(n,l),r.ref=o.ref,o.child=r,r.return=o,r}function Ib(r,o){var e=o.ref;if(e===null)r!==null&&r.ref!==null&&(o.flags|=4194816);else{if(typeof e!=="function"&&typeof e!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==e)o.flags|=4194816}}function d5(r,o,e,l,v){if(e.prototype&&typeof e.prototype.render==="function"){var n=y(e)||"Unknown";MM[n]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",n,n),MM[n]=!0)}if(o.mode&Ue&&_g.recordLegacyContextWarning(o,null),r===null&&(s5(o,o.type),e.contextTypes&&(n=y(e)||"Unknown",WM[n]||(WM[n]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",n)))),Vv(o),e=G5(r,o,e,l,void 0,v),l=Y5(),r!==null&&!so)return J5(r,o,v),jl(r,o,v);return pr&&l&&i5(o),o.flags|=1,He(r,o,e,v),o.child}function FO(r,o,e,l,v,n){if(Vv(o),bi=-1,Ht=r!==null&&r.type!==o.type,o.updateQueue=null,e=X5(o,l,e,v),E8(r,o),l=Y5(),r!==null&&!so)return J5(r,o,n),jl(r,o,n);return pr&&l&&i5(o),o.flags|=1,He(r,o,e,n),o.child}function xO(r,o,e,l,v){switch(O(o)){case!1:var n=o.stateNode,b=new o.type(o.memoizedProps,n.context).state;n.updater.enqueueSetState(n,b,null);break;case!0:o.flags|=128,o.flags|=65536,n=Error("Simulated error coming from DevTools");var w=v&-v;if(o.lanes|=w,b=Mo,b===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w=j5(w),p5(w,b,o,lg(n,o)),Ab(o,w)}if(Vv(o),o.stateNode===null){if(b=ji,n=e.contextType,"contextType"in e&&n!==null&&(n===void 0||n.$$typeof!==Yl)&&!HM.has(e)&&(HM.add(e),w=n===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof n!=="object"?" However, it is set to a "+typeof n+".":n.$$typeof===y2?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(n).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(e)||"Component",w)),typeof n==="object"&&n!==null&&(b=Ko(n)),n=new e(l,b),o.mode&Ue){Wo(!0);try{n=new e(l,b)}finally{Wo(!1)}}if(b=o.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=D4,o.stateNode=n,n._reactInternals=o,n._reactInternalInstance=nM,typeof e.getDerivedStateFromProps==="function"&&b===null&&(b=y(e)||"Component",tM.has(b)||(tM.add(b),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",b,n.state===null?"null":"undefined",b))),typeof e.getDerivedStateFromProps==="function"||typeof n.getSnapshotBeforeUpdate==="function"){var H=w=b=null;if(typeof n.componentWillMount==="function"&&n.componentWillMount.__suppressDeprecationWarning!==!0?b="componentWillMount":typeof n.UNSAFE_componentWillMount==="function"&&(b="UNSAFE_componentWillMount"),typeof n.componentWillReceiveProps==="function"&&n.componentWillReceiveProps.__suppressDeprecationWarning!==!0?w="componentWillReceiveProps":typeof n.UNSAFE_componentWillReceiveProps==="function"&&(w="UNSAFE_componentWillReceiveProps"),typeof n.componentWillUpdate==="function"&&n.componentWillUpdate.__suppressDeprecationWarning!==!0?H="componentWillUpdate":typeof n.UNSAFE_componentWillUpdate==="function"&&(H="UNSAFE_componentWillUpdate"),b!==null||w!==null||H!==null){n=y(e)||"Component";var M=typeof e.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";uM.has(n)||(uM.add(n),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,n,M,b!==null?`
  `+b:"",w!==null?`
  `+w:"",H!==null?`
  `+H:""))}}n=o.stateNode,b=y(e)||"Component",n.render||(e.prototype&&typeof e.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",b):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",b)),!n.getInitialState||n.getInitialState.isReactClassApproved||n.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",b),n.getDefaultProps&&!n.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",b),n.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",b),e.childContextTypes&&!AM.has(e)&&(AM.add(e),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",b)),e.contextTypes&&!OM.has(e)&&(OM.add(e),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",b)),typeof n.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",b),e.prototype&&e.prototype.isPureReactComponent&&typeof n.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(e)||"A pure component"),typeof n.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",b),typeof n.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",b),typeof n.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",b),typeof n.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",b),w=n.props!==l,n.props!==void 0&&w&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",b),n.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",b,b),typeof n.getSnapshotBeforeUpdate!=="function"||typeof n.componentDidUpdate==="function"||bM.has(e)||(bM.add(e),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(e))),typeof n.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof n.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof e.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",b),(w=n.state)&&(typeof w!=="object"||le(w))&&console.error("%s.state: must be set to an object or null",b),typeof n.getChildContext==="function"&&typeof e.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",b),n=o.stateNode,n.props=l,n.state=o.memoizedState,n.refs={},H5(o),b=e.contextType,n.context=typeof b==="object"&&b!==null?Ko(b):ji,n.state===l&&(b=y(e)||"Component",wM.has(b)||(wM.add(b),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",b))),o.mode&Ue&&_g.recordLegacyContextWarning(o,n),_g.recordUnsafeLifecycleWarnings(o,n),n.state=o.memoizedState,b=e.getDerivedStateFromProps,typeof b==="function"&&(E5(o,e,b,l),n.state=o.memoizedState),typeof e.getDerivedStateFromProps==="function"||typeof n.getSnapshotBeforeUpdate==="function"||typeof n.UNSAFE_componentWillMount!=="function"&&typeof n.componentWillMount!=="function"||(b=n.state,typeof n.componentWillMount==="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount==="function"&&n.UNSAFE_componentWillMount(),b!==n.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",C(o)||"Component"),D4.enqueueReplaceState(n,n.state,null)),Wh(o,l,n,v),Rh(),n.state=o.memoizedState),typeof n.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&yg)!==Ur&&(o.flags|=134217728),n=!0}else if(r===null){n=o.stateNode;var K=o.memoizedProps;w=Ev(e,K),n.props=w;var $=n.context;H=e.contextType,b=ji,typeof H==="object"&&H!==null&&(b=Ko(H)),M=e.getDerivedStateFromProps,H=typeof M==="function"||typeof n.getSnapshotBeforeUpdate==="function",K=o.pendingProps!==K,H||typeof n.UNSAFE_componentWillReceiveProps!=="function"&&typeof n.componentWillReceiveProps!=="function"||(K||$!==b)&&GO(o,n,l,b),gv=!1;var J=o.memoizedState;n.state=J,Wh(o,l,n,v),Rh(),$=o.memoizedState,K||J!==$||gv?(typeof M==="function"&&(E5(o,e,M,l),$=o.memoizedState),(w=gv||mO(o,e,w,l,J,$,b))?(H||typeof n.UNSAFE_componentWillMount!=="function"&&typeof n.componentWillMount!=="function"||(typeof n.componentWillMount==="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount==="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&yg)!==Ur&&(o.flags|=134217728)):(typeof n.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&yg)!==Ur&&(o.flags|=134217728),o.memoizedProps=l,o.memoizedState=$),n.props=l,n.state=$,n.context=b,n=w):(typeof n.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&yg)!==Ur&&(o.flags|=134217728),n=!1)}else{n=o.stateNode,q5(r,o),b=o.memoizedProps,H=Ev(e,b),n.props=H,M=o.pendingProps,J=n.context,$=e.contextType,w=ji,typeof $==="object"&&$!==null&&(w=Ko($)),K=e.getDerivedStateFromProps,($=typeof K==="function"||typeof n.getSnapshotBeforeUpdate==="function")||typeof n.UNSAFE_componentWillReceiveProps!=="function"&&typeof n.componentWillReceiveProps!=="function"||(b!==M||J!==w)&&GO(o,n,l,w),gv=!1,J=o.memoizedState,n.state=J,Wh(o,l,n,v),Rh();var x=o.memoizedState;b!==M||J!==x||gv||r!==null&&r.dependencies!==null&&ib(r.dependencies)?(typeof K==="function"&&(E5(o,e,K,l),x=o.memoizedState),(H=gv||mO(o,e,H,l,J,x,w)||r!==null&&r.dependencies!==null&&ib(r.dependencies))?($||typeof n.UNSAFE_componentWillUpdate!=="function"&&typeof n.componentWillUpdate!=="function"||(typeof n.componentWillUpdate==="function"&&n.componentWillUpdate(l,x,w),typeof n.UNSAFE_componentWillUpdate==="function"&&n.UNSAFE_componentWillUpdate(l,x,w)),typeof n.componentDidUpdate==="function"&&(o.flags|=4),typeof n.getSnapshotBeforeUpdate==="function"&&(o.flags|=1024)):(typeof n.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof n.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=x),n.props=l,n.state=x,n.context=w,n=H):(typeof n.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof n.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),n=!1)}if(w=n,Ib(r,o),b=(o.flags&128)!==0,w||b){if(w=o.stateNode,ye(o),b&&typeof e.getDerivedStateFromError!=="function")e=null,Ze=-1;else if(e=Zq(w),o.mode&Ue){Wo(!0);try{Zq(w)}finally{Wo(!1)}}o.flags|=1,r!==null&&b?(o.child=n0(o,r.child,null,v),o.child=n0(o,null,e,v)):He(r,o,e,v),o.memoizedState=w.state,r=o.child}else r=jl(r,o,v);return v=o.stateNode,n&&v.props!==l&&(Kn||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",C(o)||"a component"),Kn=!0),r}function NO(r,o,e,l){return Dv(),o.flags|=256,He(r,o,e,l),o.child}function s5(r,o){o&&o.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,o.displayName||o.name||"Component"),typeof o.getDerivedStateFromProps==="function"&&(r=y(o)||"Unknown",mM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),mM[r]=!0)),typeof o.contextType==="object"&&o.contextType!==null&&(o=y(o)||"Unknown",RM[o]||(console.error("%s: Function components do not support contextType.",o),RM[o]=!0))}function r2(r){return{baseLanes:r,cachePool:F8()}}function o2(r,o,e){return r=r!==null?r.childLanes&~e:0,o&&(r|=de),r}function BO(r,o,e){var l,v=o.pendingProps;P(o)&&(o.flags|=128);var n=!1,b=(o.flags&128)!==0;if((l=b)||(l=r!==null&&r.memoizedState===null?!1:(Vo.current&Ot)!==0),l&&(n=!0,o.flags&=-129),l=(o.flags&32)!==0,o.flags&=-33,r===null){if(pr){if(n?Zi(o):Ci(o),(r=Qo)?(e=gH(r,Ig),e=e!==null&&e.data!==A0?e:null,e!==null&&(l={dehydrated:e,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=G8(e),l.return=o,o.child=l,Re=o,Qo=null)):e=null,e===null)throw gb(o,r),Li(o);return x2(e)?o.lanes=32:o.lanes=536870912,null}var w=v.children;if(v=v.fallback,n){Ci(o);var H=o.mode;return w=Lb({mode:"hidden",children:w},H),v=Tv(v,H,e,null),w.return=o,v.return=o,w.sibling=v,o.child=w,v=o.child,v.memoizedState=r2(e),v.childLanes=o2(r,l,e),o.memoizedState=y4,Yh(null,v)}return Zi(o),e2(o,w)}var M=r.memoizedState;if(M!==null){var K=M.dehydrated;if(K!==null){if(b)o.flags&256?(Zi(o),o.flags&=-257,o=g2(r,o,e)):o.memoizedState!==null?(Ci(o),o.child=r.child,o.flags|=128,o=null):(Ci(o),w=v.fallback,H=o.mode,v=Lb({mode:"visible",children:v.children},H),w=Tv(w,H,e,null),w.flags|=2,v.return=o,w.return=o,v.sibling=w,o.child=v,n0(o,r.child,null,e),v=o.child,v.memoizedState=r2(e),v.childLanes=o2(r,l,e),o.memoizedState=y4,o=Yh(null,v));else if(Zi(o),Q8(),(e&536870912)!==0&&Zb(o),x2(K)){if(l=K.nextSibling&&K.nextSibling.dataset,l){w=l.dgst;var $=l.msg;H=l.stck;var J=l.cstck}n=$,l=w,v=H,K=J,w=n,H=K,w=w?Error(w):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),w.stack=v||"",w.digest=l,l=H===void 0?null:H,v={value:w,source:null,stack:l},typeof l==="string"&&Y4.set(w,v),Ph(v),o=g2(r,o,e)}else if(so||k0(r,o,e,!1),l=(e&r.childLanes)!==0,so||l){if(l=Mo,l!==null&&(v=xv(l,e),v!==0&&v!==M.retryLane))throw M.retryLane=v,Qe(r,v),No(l,r,v),c4;F2(K)||Cb(),o=g2(r,o,e)}else F2(K)?(o.flags|=192,o.child=r.child,o=null):(r=M.treeContext,Qo=tg(K.nextSibling),Re=o,pr=!0,pi=null,$l=!1,Pg=null,Ig=!1,r!==null&&J8(o,r),o=e2(o,v.children),o.flags|=4096);return o}}if(n)return Ci(o),w=v.fallback,H=o.mode,J=r.child,K=J.sibling,v=_l(J,{mode:"hidden",children:v.children}),v.subtreeFlags=J.subtreeFlags&65011712,K!==null?w=_l(K,w):(w=Tv(w,H,e,null),w.flags|=2),w.return=o,v.return=o,v.sibling=w,o.child=v,Yh(null,v),v=o.child,w=r.child.memoizedState,w===null?w=r2(e):(H=w.cachePool,H!==null?(J=fo._currentValue,H=H.parent!==J?{parent:J,pool:J}:H):H=F8(),w={baseLanes:w.baseLanes|e,cachePool:H}),v.memoizedState=w,v.childLanes=o2(r,l,e),o.memoizedState=y4,Yh(r.child,v);return M!==null&&(e&62914560)===e&&(e&r.lanes)!==0&&Zb(o),Zi(o),e=r.child,r=e.sibling,e=_l(e,{mode:"visible",children:v.children}),e.return=o,e.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=e,o.memoizedState=null,e}function e2(r,o){return o=Lb({mode:"visible",children:o},r.mode),o.return=r,r.child=o}function Lb(r,o){return r=X(22,r,null,o),r.lanes=0,r}function g2(r,o,e){return n0(o,r.child,null,e),r=e2(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function ZO(r,o,e){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o),t5(r.return,o,e)}function l2(r,o,e,l,v,n){var b=r.memoizedState;b===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:v,treeForkCount:n}:(b.isBackwards=o,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=e,b.tailMode=v,b.treeForkCount=n)}function CO(r,o,e){var l=o.pendingProps,v=l.revealOrder,n=l.tail,b=l.children,w=Vo.current;if((l=(w&Ot)!==0)?(w=w&Jn|Ot,o.flags|=128):w&=Jn,mr(Vo,w,o),w=v==null?"null":v,v!=="forwards"&&v!=="unstable_legacy-backwards"&&v!=="together"&&v!=="independent"&&!GM[w])if(GM[w]=!0,v==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(v==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof v==="string")switch(v.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',v,v.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',v,v.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',v)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',v);if(w=n==null?"null":n,!$u[w])if(n==null){if(v==="forwards"||v==="backwards"||v==="unstable_legacy-backwards")$u[w]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else n!=="visible"&&n!=="collapsed"&&n!=="hidden"?($u[w]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',n)):v!=="forwards"&&v!=="backwards"&&v!=="unstable_legacy-backwards"&&($u[w]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',n));r:if((v==="forwards"||v==="backwards"||v==="unstable_legacy-backwards")&&b!==void 0&&b!==null&&b!==!1)if(le(b)){for(w=0;w<b.length;w++)if(!V8(b[w],w))break r}else if(w=N(b),typeof w==="function"){if(w=w.call(b))for(var H=w.next(),M=0;!H.done;H=w.next()){if(!V8(H.value,M))break r;M++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',v);if(He(r,o,b,e),pr?(Ii(),b=sh):b=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ZO(r,e,o);else if(r.tag===19)ZO(r,e,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break r;for(;r.sibling===null;){if(r.return===null||r.return===o)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(v){case"forwards":e=o.child;for(v=null;e!==null;)r=e.alternate,r!==null&&Hb(r)===null&&(v=e),e=e.sibling;e=v,e===null?(v=o.child,o.child=null):(v=e.sibling,e.sibling=null),l2(o,!1,v,e,n,b);break;case"backwards":case"unstable_legacy-backwards":e=null,v=o.child;for(o.child=null;v!==null;){if(r=v.alternate,r!==null&&Hb(r)===null){o.child=v;break}r=v.sibling,v.sibling=e,e=v,v=r}l2(o,!0,e,null,n,b);break;case"together":l2(o,!1,null,null,void 0,b);break;default:o.memoizedState=null}return o.child}function jl(r,o,e){if(r!==null&&(o.dependencies=r.dependencies),Ze=-1,vv|=o.lanes,(e&o.childLanes)===0)if(r!==null){if(k0(r,o,e,!1),(e&o.childLanes)===0)return null}else return null;if(r!==null&&o.child!==r.child)throw Error("Resuming work not yet implemented.");if(o.child!==null){r=o.child,e=_l(r,r.pendingProps),o.child=e;for(e.return=o;r.sibling!==null;)r=r.sibling,e=e.sibling=_l(r,r.pendingProps),e.return=o;e.sibling=null}return o.child}function i2(r,o){if((r.lanes&o)!==0)return!0;return r=r.dependencies,r!==null&&ib(r)?!0:!1}function JG(r,o,e){switch(o.tag){case 3:k(o,o.stateNode.containerInfo),Fi(o,fo,r.memoizedState.cache),Dv();break;case 27:case 5:Qr(o);break;case 4:k(o,o.stateNode.containerInfo);break;case 10:Fi(o,o.type,o.memoizedProps.value);break;case 12:(e&o.childLanes)!==0&&(o.flags|=4),o.flags|=2048;var l=o.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(o.memoizedState!==null)return o.flags|=128,W5(o),null;break;case 13:if(l=o.memoizedState,l!==null){if(l.dehydrated!==null)return Zi(o),o.flags|=128,null;if((e&o.child.childLanes)!==0)return BO(r,o,e);return Zi(o),r=jl(r,o,e),r!==null?r.sibling:null}Zi(o);break;case 19:var v=(r.flags&128)!==0;if(l=(e&o.childLanes)!==0,l||(k0(r,o,e,!1),l=(e&o.childLanes)!==0),v){if(l)return CO(r,o,e);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),mr(Vo,Vo.current,o),l)break;else return null;case 22:return o.lanes=0,$O(r,o,e,o.pendingProps);case 24:Fi(o,fo,r.memoizedState.cache)}return jl(r,o,e)}function v2(r,o,e){if(o._debugNeedsRemount&&r!==null){e=e5(o.type,o.key,o.pendingProps,o._debugOwner||null,o.mode,o.lanes),e._debugStack=o._debugStack,e._debugTask=o._debugTask;var l=o.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,o.alternate=null,e.index=o.index,e.sibling=o.sibling,e.return=o.return,e.ref=o.ref,e._debugInfo=o._debugInfo,o===l.child)l.child=e;else{var v=l.child;if(v===null)throw Error("Expected parent to have a child.");for(;v.sibling!==o;)if(v=v.sibling,v===null)throw Error("Expected to find the previous sibling.");v.sibling=e}return o=l.deletions,o===null?(l.deletions=[r],l.flags|=16):o.push(r),e.flags|=2,e}if(r!==null)if(r.memoizedProps!==o.pendingProps||o.type!==r.type)so=!0;else{if(!i2(r,e)&&(o.flags&128)===0)return so=!1,JG(r,o,e);so=(r.flags&131072)!==0?!0:!1}else{if(so=!1,l=pr)Ii(),l=(o.flags&1048576)!==0;l&&(l=o.index,Ii(),X8(o,sh,l))}switch(o.lanes=0,o.tag){case 16:r:if(l=o.pendingProps,r=xi(o.elementType),o.type=r,typeof r==="function")o5(r)?(l=Ev(r,l),o.tag=1,o.type=r=Sv(r),o=xO(null,o,r,l,e)):(o.tag=0,s5(o,r),o.type=r=Sv(r),o=d5(null,o,r,l,e));else{if(r!==void 0&&r!==null){if(v=r.$$typeof,v===Th){o.tag=11,o.type=r=r5(r),o=zO(null,o,r,l,e);break r}else if(v===db){o.tag=14,o=UO(null,o,r,l,e);break r}}throw o="",r!==null&&typeof r==="object"&&r.$$typeof===bg&&(o=" Did you wrap a component in React.lazy() more than once?"),e=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+e+". Lazy element type must resolve to a class or function."+o)}return o;case 0:return d5(r,o,o.type,o.pendingProps,e);case 1:return l=o.type,v=Ev(l,o.pendingProps),xO(r,o,l,v,e);case 3:r:{if(k(o,o.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=o.pendingProps;var n=o.memoizedState;v=n.element,q5(r,o),Wh(o,l,null,e);var b=o.memoizedState;if(l=b.cache,Fi(o,fo,l),l!==n.cache&&b5(o,[fo],e,!0),Rh(),l=b.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:b.cache},o.updateQueue.baseState=n,o.memoizedState=n,o.flags&256){o=NO(r,o,l,e);break r}else if(l!==v){v=lg(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),o),Ph(v),o=NO(r,o,l,e);break r}else{switch(r=o.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Qo=tg(r.firstChild),Re=o,pr=!0,pi=null,$l=!1,Pg=null,Ig=!0,e=pq(o,null,l,e);for(o.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Dv(),l===v){o=jl(r,o,e);break r}He(r,o,l,e)}o=o.child}return o;case 26:return Ib(r,o),r===null?(e=tH(o.type,null,o.pendingProps,null))?o.memoizedState=e:pr||(e=o.type,r=o.pendingProps,l=Br(ci.current),l=Db(l).createElement(e),l[Me]=o,l[xe]=r,qe(l,e,r),Yr(l),o.stateNode=l):o.memoizedState=tH(o.type,r.memoizedProps,o.pendingProps,r.memoizedState),null;case 27:return Qr(o),r===null&&pr&&(l=Br(ci.current),v=ir(),l=o.stateNode=nH(o.type,o.pendingProps,l,v,!1),$l||(v=fA(l,o.type,o.pendingProps,v),v!==null&&(kv(o,0).serverProps=v)),Re=o,Ig=!0,v=Qo,Di(o.type)?(O6=v,Qo=tg(l.firstChild)):Qo=v),He(r,o,o.pendingProps.children,e),Ib(r,o),r===null&&(o.flags|=4194304),o.child;case 5:return r===null&&pr&&(n=ir(),l=_w(o.type,n.ancestorInfo),v=Qo,(b=!v)||(b=PX(v,o.type,o.pendingProps,Ig),b!==null?(o.stateNode=b,$l||(n=fA(b,o.type,o.pendingProps,n),n!==null&&(kv(o,0).serverProps=n)),Re=o,Qo=tg(b.firstChild),Ig=!1,n=!0):n=!1,b=!n),b&&(l&&gb(o,v),Li(o))),Qr(o),v=o.type,n=o.pendingProps,b=r!==null?r.memoizedProps:null,l=n.children,I2(v,n)?l=null:b!==null&&I2(v,b)&&(o.flags|=32),o.memoizedState!==null&&(v=G5(r,o,qG,null,null,e),Lt._currentValue=v),Ib(r,o),He(r,o,l,e),o.child;case 6:return r===null&&pr&&(e=o.pendingProps,r=ir(),l=r.ancestorInfo.current,e=l!=null?a1(e,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Qo,(l=!r)||(l=OX(r,o.pendingProps,Ig),l!==null?(o.stateNode=l,Re=o,Qo=null,l=!0):l=!1,l=!l),l&&(e&&gb(o,r),Li(o))),null;case 13:return BO(r,o,e);case 4:return k(o,o.stateNode.containerInfo),l=o.pendingProps,r===null?o.child=n0(o,null,l,e):He(r,o,l,e),o.child;case 11:return zO(r,o,o.type,o.pendingProps,e);case 7:return He(r,o,o.pendingProps,e),o.child;case 8:return He(r,o,o.pendingProps.children,e),o.child;case 12:return o.flags|=4,o.flags|=2048,l=o.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,He(r,o,o.pendingProps.children,e),o.child;case 10:return l=o.type,v=o.pendingProps,n=v.value,"value"in v||XM||(XM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fi(o,l,n),He(r,o,v.children,e),o.child;case 9:return v=o.type._context,l=o.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Vv(o),v=Ko(v),l=L4(l,v,void 0),o.flags|=1,He(r,o,l,e),o.child;case 14:return UO(r,o,o.type,o.pendingProps,e);case 15:return KO(r,o,o.type,o.pendingProps,e);case 19:return CO(r,o,e);case 31:return YG(r,o,e);case 22:return $O(r,o,e,o.pendingProps);case 24:return Vv(o),l=Ko(fo),r===null?(v=O5(),v===null&&(v=Mo,n=u5(),v.pooledCache=n,cv(n),n!==null&&(v.pooledCacheLanes|=e),v=n),o.memoizedState={parent:l,cache:v},H5(o),Fi(o,fo,v)):((r.lanes&e)!==0&&(q5(r,o),Wh(o,null,null,e),Rh()),v=r.memoizedState,n=o.memoizedState,v.parent!==l?(v={parent:l,cache:l},o.memoizedState=v,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=v),Fi(o,fo,l)):(l=n.cache,Fi(o,fo,l),l!==v.cache&&b5(o,[fo],e,!0))),He(r,o,o.pendingProps.children,e),o.child;case 29:throw o.pendingProps}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function pl(r){r.flags|=4}function n2(r,o,e,l,v){if(o=(r.mode&yY)!==Ur)o=!1;if(o){if(r.flags|=16777216,(v&335544128)===v)if(r.stateNode.complete)r.flags|=8192;else if(qA())r.flags|=8192;else throw v0=Yu,x4}else r.flags&=-16777217}function SO(r,o){if(o.type!=="stylesheet"||(o.state.loading&Bg)!==M0)r.flags&=-16777217;else if(r.flags|=16777216,!OH(o))if(qA())r.flags|=8192;else throw v0=Yu,x4}function Fb(r,o){o!==null&&(r.flags|=4),r.flags&16384&&(o=r.tag!==22?N0():536870912,r.lanes|=o,w0|=o)}function Jh(r,o){if(!pr)switch(r.tailMode){case"hidden":o=r.tail;for(var e=null;o!==null;)o.alternate!==null&&(e=o),o=o.sibling;e===null?r.tail=null:e.sibling=null;break;case"collapsed":e=r.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function mo(r){var o=r.alternate!==null&&r.alternate.child===r.child,e=0,l=0;if(o)if((r.mode&kr)!==Ur){for(var{selfBaseDuration:v,child:n}=r;n!==null;)e|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,v+=n.treeBaseDuration,n=n.sibling;r.treeBaseDuration=v}else for(v=r.child;v!==null;)e|=v.lanes|v.childLanes,l|=v.subtreeFlags&65011712,l|=v.flags&65011712,v.return=r,v=v.sibling;else if((r.mode&kr)!==Ur){v=r.actualDuration,n=r.selfBaseDuration;for(var b=r.child;b!==null;)e|=b.lanes|b.childLanes,l|=b.subtreeFlags,l|=b.flags,v+=b.actualDuration,n+=b.treeBaseDuration,b=b.sibling;r.actualDuration=v,r.treeBaseDuration=n}else for(v=r.child;v!==null;)e|=v.lanes|v.childLanes,l|=v.subtreeFlags,l|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=l,r.childLanes=e,o}function QG(r,o,e){var l=o.pendingProps;switch(v5(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mo(o),null;case 1:return mo(o),null;case 3:if(e=o.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),o.memoizedState.cache!==l&&(o.flags|=2048),El(fo,o),s(o),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),r===null||r.child===null)T0(o)?(h5(),pl(o)):r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,n5());return mo(o),null;case 26:var{type:v,memoizedState:n}=o;return r===null?(pl(o),n!==null?(mo(o),SO(o,n)):(mo(o),n2(o,v,null,l,e))):n?n!==r.memoizedState?(pl(o),mo(o),SO(o,n)):(mo(o),o.flags&=-16777217):(r=r.memoizedProps,r!==l&&pl(o),mo(o),n2(o,v,r,l,e)),null;case 27:if(Gr(o),e=Br(ci.current),v=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mo(o),null}r=ir(),T0(o)?z8(o,r):(r=nH(v,l,e,r,!0),o.stateNode=r,pl(o))}return mo(o),null;case 5:if(Gr(o),v=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mo(o),null}var b=ir();if(T0(o))z8(o,b);else{switch(n=Br(ci.current),_w(v,b.ancestorInfo),b=b.context,n=Db(n),b){case Zn:n=n.createElementNS(nn,v);break;case ju:n=n.createElementNS(iu,v);break;default:switch(v){case"svg":n=n.createElementNS(nn,v);break;case"math":n=n.createElementNS(iu,v);break;case"script":n=n.createElement("div"),n.innerHTML="<script></script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is==="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is==="string"?n.createElement(v,{is:l.is}):n.createElement(v),v.indexOf("-")===-1&&(v!==v.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",v),Object.prototype.toString.call(n)!=="[object HTMLUnknownElement]"||Vg.call(aM,v)||(aM[v]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",v)))}}n[Me]=o,n[xe]=l;r:for(b=o.child;b!==null;){if(b.tag===5||b.tag===6)n.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===o)break r;for(;b.sibling===null;){if(b.return===null||b.return===o)break r;b=b.return}b.sibling.return=b.return,b=b.sibling}o.stateNode=n;r:switch(qe(n,v,l),v){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&pl(o)}}return mo(o),n2(o,o.type,r===null?null:r.memoizedProps,o.pendingProps,e),null;case 6:if(r&&o.stateNode!=null)r.memoizedProps!==l&&pl(o);else{if(typeof l!=="string"&&o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Br(ci.current),e=ir(),T0(o)){if(r=o.stateNode,e=o.memoizedProps,v=!$l,l=null,n=Re,n!==null)switch(n.tag){case 3:v&&(v=iH(r,e,l),v!==null&&(kv(o,0).serverProps=v));break;case 27:case 5:l=n.memoizedProps,v&&(v=iH(r,e,l),v!==null&&(kv(o,0).serverProps=v))}r[Me]=o,r=r.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||cA(r.nodeValue,e)?!0:!1,r||Li(o,!0)}else v=e.ancestorInfo.current,v!=null&&a1(l,v.tag,e.ancestorInfo.implicitRootScope),r=Db(r).createTextNode(l),r[Me]=o,o.stateNode=r}return mo(o),null;case 31:if(e=o.memoizedState,r===null||r.memoizedState!==null){if(l=T0(o),e!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=o.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Me]=o,mo(o),(o.mode&kr)!==Ur&&e!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration))}else h5(),Dv(),(o.flags&128)===0&&(e=o.memoizedState=null),o.flags|=4,mo(o),(o.mode&kr)!==Ur&&e!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration));r=!1}else e=n5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=e),r=!0;if(!r){if(o.flags&256)return ng(o),o;return ng(o),null}if((o.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return mo(o),null;case 13:if(l=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(v=l,n=T0(o),v!==null&&v.dehydrated!==null){if(r===null){if(!n)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(n=o.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");n[Me]=o,mo(o),(o.mode&kr)!==Ur&&v!==null&&(v=o.child,v!==null&&(o.treeBaseDuration-=v.treeBaseDuration))}else h5(),Dv(),(o.flags&128)===0&&(v=o.memoizedState=null),o.flags|=4,mo(o),(o.mode&kr)!==Ur&&v!==null&&(v=o.child,v!==null&&(o.treeBaseDuration-=v.treeBaseDuration));v=!1}else v=n5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=v),v=!0;if(!v){if(o.flags&256)return ng(o),o;return ng(o),null}}if(ng(o),(o.flags&128)!==0)return o.lanes=e,(o.mode&kr)!==Ur&&Hh(o),o;return e=l!==null,r=r!==null&&r.memoizedState!==null,e&&(l=o.child,v=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(v=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==v&&(l.flags|=2048)),e!==r&&e&&(o.child.flags|=8192),Fb(o,o.updateQueue),mo(o),(o.mode&kr)!==Ur&&e&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(o),r===null&&Y2(o.stateNode.containerInfo),mo(o),null;case 10:return El(o.type,o),mo(o),null;case 19:if(Hr(Vo,o),l=o.memoizedState,l===null)return mo(o),null;if(v=(o.flags&128)!==0,n=l.rendering,n===null)if(v)Jh(l,!1);else{if(Fo!==wi||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(n=Hb(r),n!==null){o.flags|=128,Jh(l,!1),r=n.updateQueue,o.updateQueue=r,Fb(o,r),o.subtreeFlags=0,r=e;for(e=o.child;e!==null;)m8(e,r),e=e.sibling;return mr(Vo,Vo.current&Jn|Ot,o),pr&&al(o,l.treeForkCount),o.child}r=r.sibling}l.tail!==null&&he()>Zu&&(o.flags|=128,v=!0,Jh(l,!1),o.lanes=4194304)}else{if(!v)if(r=Hb(n),r!==null){if(o.flags|=128,v=!0,r=r.updateQueue,o.updateQueue=r,Fb(o,r),Jh(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!pr)return mo(o),null}else 2*he()-l.renderingStartTime>Zu&&e!==536870912&&(o.flags|=128,v=!0,Jh(l,!1),o.lanes=4194304);l.isBackwards?(n.sibling=o.child,o.child=n):(r=l.last,r!==null?r.sibling=n:o.child=n,l.last=n)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=he(),r.sibling=null,e=Vo.current,e=v?e&Jn|Ot:e&Jn,mr(Vo,e,o),pr&&al(o,l.treeForkCount),r;return mo(o),null;case 22:case 23:return ng(o),R5(o),l=o.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(o.flags|=8192):l&&(o.flags|=8192),l?(e&536870912)!==0&&(o.flags&128)===0&&(mo(o),o.subtreeFlags&6&&(o.flags|=8192)):mo(o),e=o.updateQueue,e!==null&&Fb(o,e.retryQueue),e=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==e&&(o.flags|=2048),r!==null&&Hr(l0,o),null;case 24:return e=null,r!==null&&(e=r.memoizedState.cache),o.memoizedState.cache!==e&&(o.flags|=2048),El(fo,o),mo(o),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function zG(r,o){switch(v5(o),o.tag){case 1:return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&Hh(o),o):null;case 3:return El(fo,o),s(o),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 26:case 27:case 5:return Gr(o),null;case 31:if(o.memoizedState!==null){if(ng(o),o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Dv()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&Hh(o),o):null;case 13:if(ng(o),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Dv()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&Hh(o),o):null;case 19:return Hr(Vo,o),null;case 4:return s(o),null;case 10:return El(o.type,o),null;case 22:case 23:return ng(o),R5(o),r!==null&&Hr(l0,o),r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Ur&&Hh(o),o):null;case 24:return El(fo,o),null;case 25:return null;default:return null}}function TO(r,o){switch(v5(o),o.tag){case 3:El(fo,o),s(o);break;case 26:case 27:case 5:Gr(o);break;case 4:s(o);break;case 31:o.memoizedState!==null&&ng(o);break;case 13:ng(o);break;case 19:Hr(Vo,o);break;case 10:El(o.type,o);break;case 22:case 23:ng(o),R5(o),r!==null&&Hr(l0,o);break;case 24:El(fo,o)}}function ql(r){return(r.mode&kr)!==Ur}function kO(r,o){ql(r)?(Hl(),Qh(o,r),Al()):Qh(o,r)}function h2(r,o,e){ql(r)?(Hl(),_0(e,r,o),Al()):_0(e,r,o)}function Qh(r,o){try{var e=o.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var v=l.next;e=v;do{if((e.tag&r)===r&&(l=void 0,(r&Ce)!==Qu&&(xn=!0),l=hr(o,jY,e),(r&Ce)!==Qu&&(xn=!1),l!==void 0&&typeof l!=="function")){var n=void 0;n=(e.tag&Ag)!==0?"useLayoutEffect":(e.tag&Ce)!==0?"useInsertionEffect":"useEffect";var b=void 0;b=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+n+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+n+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,hr(o,function(w,H){console.error("%s must not return anything besides a function, which is used for clean-up.%s",w,H)},n,b)}e=e.next}while(e!==v)}}catch(w){no(o,o.return,w)}}function _0(r,o,e){try{var l=o.updateQueue,v=l!==null?l.lastEffect:null;if(v!==null){var n=v.next;l=n;do{if((l.tag&r)===r){var b=l.inst,w=b.destroy;w!==void 0&&(b.destroy=void 0,(r&Ce)!==Qu&&(xn=!0),v=o,hr(v,pY,v,e,w),(r&Ce)!==Qu&&(xn=!1))}l=l.next}while(l!==n)}}catch(H){no(o,o.return,H)}}function DO(r,o){ql(r)?(Hl(),Qh(o,r),Al()):Qh(o,r)}function t2(r,o,e){ql(r)?(Hl(),_0(e,r,o),Al()):_0(e,r,o)}function VO(r){var o=r.updateQueue;if(o!==null){var e=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Kn||(e.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),e.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{hr(r,y8,o,e)}catch(l){no(r,r.return,l)}}}function UG(r,o,e){return r.getSnapshotBeforeUpdate(o,e)}function KG(r,o){var{memoizedProps:e,memoizedState:l}=o;o=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Kn||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{var v=Ev(r.type,e),n=hr(r,UG,o,v,l);e=YM,n!==void 0||e.has(r.type)||(e.add(r.type),hr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",C(r))})),o.__reactInternalSnapshotBeforeUpdate=n}catch(b){no(r,r.return,b)}}function cO(r,o,e){e.props=Ev(r.type,r.memoizedProps),e.state=r.memoizedState,ql(r)?(Hl(),hr(r,Vq,r,o,e),Al()):hr(r,Vq,r,o,e)}function $G(r){var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var e=r.stateNode;break;case 30:e=r.stateNode;break;default:e=r.stateNode}if(typeof o==="function")if(ql(r))try{Hl(),r.refCleanup=o(e)}finally{Al()}else r.refCleanup=o(e);else typeof o==="string"?console.error("String refs are no longer supported."):o.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",C(r)),o.current=e}}function zh(r,o){try{hr(r,$G,r)}catch(e){no(r,o,e)}}function Ml(r,o){var{ref:e,refCleanup:l}=r;if(e!==null)if(typeof l==="function")try{if(ql(r))try{Hl(),hr(r,l)}finally{Al(r)}else hr(r,l)}catch(v){no(r,o,v)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof e==="function")try{if(ql(r))try{Hl(),hr(r,e,null)}finally{Al(r)}else hr(r,e,null)}catch(v){no(r,o,v)}else e.current=null}function yO(r,o,e,l){var v=r.memoizedProps,n=v.id,b=v.onCommit;v=v.onRender,o=o===null?"mount":"update",Wu&&(o="nested-update"),typeof v==="function"&&v(n,o,r.actualDuration,r.treeBaseDuration,r.actualStartTime,e),typeof b==="function"&&b(n,o,l,e)}function IG(r,o,e,l){var v=r.memoizedProps;r=v.id,v=v.onPostCommit,o=o===null?"mount":"update",Wu&&(o="nested-update"),typeof v==="function"&&v(r,o,l,e)}function _O(r){var{type:o,memoizedProps:e,stateNode:l}=r;try{hr(r,oX,l,o,e,r)}catch(v){no(r,r.return,v)}}function b2(r,o,e){try{hr(r,gX,r.stateNode,r.type,e,o,r)}catch(l){no(r,r.return,l)}}function aO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Di(r.type)||r.tag===4}function u2(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||aO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Di(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function w2(r,o,e){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?(rH(e),(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(r,o)):(rH(e),o=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.appendChild(r),e=e._reactRootContainer,e!==null&&e!==void 0||o.onclick!==null||(o.onclick=yl));else if(l!==4&&(l===27&&Di(r.type)&&(e=r.stateNode,o=null),r=r.child,r!==null))for(w2(r,o,e),r=r.sibling;r!==null;)w2(r,o,e),r=r.sibling}function xb(r,o,e){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?e.insertBefore(r,o):e.appendChild(r);else if(l!==4&&(l===27&&Di(r.type)&&(e=r.stateNode),r=r.child,r!==null))for(xb(r,o,e),r=r.sibling;r!==null;)xb(r,o,e),r=r.sibling}function LG(r){for(var o,e=r.return;e!==null;){if(aO(e)){o=e;break}e=e.return}if(o==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(o.tag){case 27:o=o.stateNode,e=u2(r),xb(r,e,o);break;case 5:e=o.stateNode,o.flags&32&&(sA(e),o.flags&=-33),o=u2(r),xb(r,o,e);break;case 3:case 4:o=o.stateNode.containerInfo,e=u2(r),w2(r,e,o);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function EO(r){var{stateNode:o,memoizedProps:e}=r;try{hr(r,RX,r.type,e,o,r)}catch(l){no(r,r.return,l)}}function fO(r,o){return o.tag===31?(o=o.memoizedState,r.memoizedState!==null&&o===null):o.tag===13?(r=r.memoizedState,o=o.memoizedState,r!==null&&r.dehydrated!==null&&(o===null||o.dehydrated===null)):o.tag===3?r.memoizedState.isDehydrated&&(o.flags&256)===0:!1}function FG(r,o){if(r=r.containerInfo,u6=rw,r=u8(r),fw(r)){if("selectionStart"in r)var e={start:r.selectionStart,end:r.selectionEnd};else r:{e=(e=r.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var{anchorOffset:v,focusNode:n}=l;l=l.focusOffset;try{e.nodeType,n.nodeType}catch(vr){e=null;break r}var b=0,w=-1,H=-1,M=0,K=0,$=r,J=null;o:for(;;){for(var x;;){if($!==e||v!==0&&$.nodeType!==3||(w=b+v),$!==n||l!==0&&$.nodeType!==3||(H=b+l),$.nodeType===3&&(b+=$.nodeValue.length),(x=$.firstChild)===null)break;J=$,$=x}for(;;){if($===r)break o;if(J===e&&++M===v&&(w=b),J===n&&++K===l&&(H=b),(x=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=x}e=w===-1||H===-1?null:{start:w,end:H}}else e=null}e=e||{start:0,end:0}}else e=null;w6={focusedElem:r,selectionRange:e},rw=!1;for(be=o;be!==null;)if(o=be,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,be=r;else for(;be!==null;){switch(r=o=be,e=r.alternate,v=r.flags,r.tag){case 0:if((v&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(e=0;e<r.length;e++)v=r[e],v.ref.impl=v.nextImpl;break;case 11:case 15:break;case 1:(v&1024)!==0&&e!==null&&KG(r,e);break;case 3:if((v&1024)!==0){if(r=r.stateNode.containerInfo,e=r.nodeType,e===9)L2(r);else if(e===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":L2(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((v&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=o.sibling,r!==null){r.return=o.return,be=r;break}be=o.return}}function jO(r,o,e){var l=ig(),v=ul(),n=Pl(),b=Ol(),w=e.flags;switch(e.tag){case 0:case 11:case 15:Rl(r,e),w&4&&kO(e,Ag|xg);break;case 1:if(Rl(r,e),w&4)if(r=e.stateNode,o===null)e.type.defaultProps||"ref"in e.memoizedProps||Kn||(r.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(e)||"instance"),r.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(e)||"instance")),ql(e)?(Hl(),hr(e,F4,e,r),Al()):hr(e,F4,e,r);else{var H=Ev(e.type,o.memoizedProps);o=o.memoizedState,e.type.defaultProps||"ref"in e.memoizedProps||Kn||(r.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(e)||"instance"),r.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(e)||"instance")),ql(e)?(Hl(),hr(e,Tq,e,r,H,o,r.__reactInternalSnapshotBeforeUpdate),Al()):hr(e,Tq,e,r,H,o,r.__reactInternalSnapshotBeforeUpdate)}w&64&&VO(e),w&512&&zh(e,e.return);break;case 3:if(o=fl(),Rl(r,e),w&64&&(w=e.updateQueue,w!==null)){if(H=null,e.child!==null)switch(e.child.tag){case 27:case 5:H=e.child.stateNode;break;case 1:H=e.child.stateNode}try{hr(e,y8,w,H)}catch(K){no(e,e.return,K)}}r.effectDuration+=nb(o);break;case 27:o===null&&w&4&&EO(e);case 26:case 5:if(Rl(r,e),o===null){if(w&4)_O(e);else if(w&64){r=e.type,o=e.memoizedProps,H=e.stateNode;try{hr(e,eX,H,r,o,e)}catch(K){no(e,e.return,K)}}}w&512&&zh(e,e.return);break;case 12:if(w&4){w=fl(),Rl(r,e),r=e.stateNode,r.effectDuration+=Ah(w);try{hr(e,yO,e,o,di,r.effectDuration)}catch(K){no(e,e.return,K)}}else Rl(r,e);break;case 31:Rl(r,e),w&4&&sO(r,e);break;case 13:Rl(r,e),w&4&&rA(r,e),w&64&&(r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(w=DG.bind(null,e),AX(r,w))));break;case 22:if(w=e.memoizedState!==null||ui,!w){o=o!==null&&o.memoizedState!==null||re,H=ui;var M=re;ui=w,(re=o)&&!M?(Wl(r,e,(e.subtreeFlags&8772)!==0),(e.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&p1(e,Jr,zr)):Rl(r,e),ui=H,re=M}break;case 30:break;default:Rl(r,e)}(e.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bo||0.05<Lo)&&tl(e,Jr,zr,Lo,$o),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&0.05<zr-Jr&&(fO(e.return.alternate,e.return)||hl(e,Jr,zr,"Mount"))),vg(l),wl(v),$o=n,Bo=b}function pO(r){var o=r.alternate;o!==null&&(r.alternate=null,pO(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&tr(o)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dl(r,o,e){for(e=e.child;e!==null;)dO(r,o,e),e=e.sibling}function dO(r,o,e){if(ze&&typeof ze.onCommitFiberUnmount==="function")try{ze.onCommitFiberUnmount(ln,e)}catch(M){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",M))}var l=ig(),v=ul(),n=Pl(),b=Ol();switch(e.tag){case 26:re||Ml(e,o),dl(r,o,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(r=e.stateNode,r.parentNode.removeChild(r));break;case 27:re||Ml(e,o);var w=oe,H=je;Di(e.type)&&(oe=e.stateNode,je=!1),dl(r,o,e),hr(e,Bh,e.stateNode),oe=w,je=H;break;case 5:re||Ml(e,o);case 6:if(w=oe,H=je,oe=null,dl(r,o,e),oe=w,je=H,oe!==null)if(je)try{hr(e,vX,oe,e.stateNode)}catch(M){no(e,o,M)}else try{hr(e,iX,oe,e.stateNode)}catch(M){no(e,o,M)}break;case 18:oe!==null&&(je?(r=oe,oH(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,e.stateNode),rn(r)):oH(oe,e.stateNode));break;case 4:w=oe,H=je,oe=e.stateNode.containerInfo,je=!0,dl(r,o,e),oe=w,je=H;break;case 0:case 11:case 14:case 15:_0(Ce,e,o),re||h2(e,o,Ag),dl(r,o,e);break;case 1:re||(Ml(e,o),w=e.stateNode,typeof w.componentWillUnmount==="function"&&cO(e,o,w)),dl(r,o,e);break;case 21:dl(r,o,e);break;case 22:re=(w=re)||e.memoizedState!==null,dl(r,o,e),re=w;break;default:dl(r,o,e)}(e.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(e,Jr,zr,Lo,$o),vg(l),wl(v),$o=n,Bo=b}function sO(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{hr(o,qX,r)}catch(e){no(o,o.return,e)}}}function rA(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{hr(o,MX,r)}catch(e){no(o,o.return,e)}}function xG(r){switch(r.tag){case 31:case 13:case 19:var o=r.stateNode;return o===null&&(o=r.stateNode=new JM),o;case 22:return r=r.stateNode,o=r._retryCache,o===null&&(o=r._retryCache=new JM),o;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Nb(r,o){var e=xG(r);o.forEach(function(l){if(!e.has(l)){if(e.add(l),zl)if($n!==null&&In!==null)Ih(In,$n);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var v=VG.bind(null,r,l);l.then(v,v)}})}function Ee(r,o){var e=o.deletions;if(e!==null)for(var l=0;l<e.length;l++){var v=r,n=o,b=e[l],w=ig(),H=n;r:for(;H!==null;){switch(H.tag){case 27:if(Di(H.type)){oe=H.stateNode,je=!1;break r}break;case 5:oe=H.stateNode,je=!1;break r;case 3:case 4:oe=H.stateNode.containerInfo,je=!0;break r}H=H.return}if(oe===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");dO(v,n,b),oe=null,je=!1,(b.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&hl(b,Jr,zr,"Unmount"),vg(w),v=b,n=v.alternate,n!==null&&(n.return=null),v.return=null}if(o.subtreeFlags&13886)for(o=o.child;o!==null;)oA(o,r),o=o.sibling}function oA(r,o){var e=ig(),l=ul(),v=Pl(),n=Ol(),b=r.alternate,w=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Ee(o,r),fe(r),w&4&&(_0(Ce|xg,r,r.return),Qh(Ce|xg,r),h2(r,r.return,Ag|xg));break;case 1:if(Ee(o,r),fe(r),w&512&&(re||b===null||Ml(b,b.return)),w&64&&ui&&(w=r.updateQueue,w!==null&&(b=w.callbacks,b!==null))){var H=w.shared.hiddenCallbacks;w.shared.hiddenCallbacks=H===null?b:H.concat(b)}break;case 26:if(H=Eg,Ee(o,r),fe(r),w&512&&(re||b===null||Ml(b,b.return)),w&4){var M=b!==null?b.memoizedState:null;if(w=r.memoizedState,b===null)if(w===null)if(r.stateNode===null){r:{w=r.type,b=r.memoizedProps,H=H.ownerDocument||H;o:switch(w){case"title":if(M=H.getElementsByTagName("title")[0],!M||M[Vh]||M[Me]||M.namespaceURI===nn||M.hasAttribute("itemprop"))M=H.createElement(w),H.head.insertBefore(M,H.querySelector("head > title"));qe(M,w,b),M[Me]=r,Yr(M),w=M;break r;case"link":var K=wH("link","href",H).get(w+(b.href||""));if(K){for(var $=0;$<K.length;$++)if(M=K[$],M.getAttribute("href")===(b.href==null||b.href===""?null:b.href)&&M.getAttribute("rel")===(b.rel==null?null:b.rel)&&M.getAttribute("title")===(b.title==null?null:b.title)&&M.getAttribute("crossorigin")===(b.crossOrigin==null?null:b.crossOrigin)){K.splice($,1);break o}}M=H.createElement(w),qe(M,w,b),H.head.appendChild(M);break;case"meta":if(K=wH("meta","content",H).get(w+(b.content||""))){for($=0;$<K.length;$++)if(M=K[$],wo(b.content,"content"),M.getAttribute("content")===(b.content==null?null:""+b.content)&&M.getAttribute("name")===(b.name==null?null:b.name)&&M.getAttribute("property")===(b.property==null?null:b.property)&&M.getAttribute("http-equiv")===(b.httpEquiv==null?null:b.httpEquiv)&&M.getAttribute("charset")===(b.charSet==null?null:b.charSet)){K.splice($,1);break o}}M=H.createElement(w),qe(M,w,b),H.head.appendChild(M);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+w+'". This is a bug in React.')}M[Me]=r,Yr(M),w=M}r.stateNode=w}else PH(H,r.type,r.stateNode);else r.stateNode=uH(H,w,r.memoizedProps);else M!==w?(M===null?b.stateNode!==null&&(b=b.stateNode,b.parentNode.removeChild(b)):M.count--,w===null?PH(H,r.type,r.stateNode):uH(H,w,r.memoizedProps)):w===null&&r.stateNode!==null&&b2(r,r.memoizedProps,b.memoizedProps)}break;case 27:Ee(o,r),fe(r),w&512&&(re||b===null||Ml(b,b.return)),b!==null&&w&4&&b2(r,r.memoizedProps,b.memoizedProps);break;case 5:if(Ee(o,r),fe(r),w&512&&(re||b===null||Ml(b,b.return)),r.flags&32){H=r.stateNode;try{hr(r,sA,H)}catch(Pr){no(r,r.return,Pr)}}w&4&&r.stateNode!=null&&(H=r.memoizedProps,b2(r,H,b!==null?b.memoizedProps:H)),w&1024&&(_4=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(Ee(o,r),fe(r),w&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");w=r.memoizedProps,b=b!==null?b.memoizedProps:w,H=r.stateNode;try{hr(r,lX,H,b,w)}catch(Pr){no(r,r.return,Pr)}}break;case 3:if(H=fl(),pu=null,M=Eg,Eg=Vb(o.containerInfo),Ee(o,r),Eg=M,fe(r),w&4&&b!==null&&b.memoizedState.isDehydrated)try{hr(r,HX,o.containerInfo)}catch(Pr){no(r,r.return,Pr)}_4&&(_4=!1,eA(r)),o.effectDuration+=nb(H);break;case 4:w=Eg,Eg=Vb(r.stateNode.containerInfo),Ee(o,r),fe(r),Eg=w;break;case 12:w=fl(),Ee(o,r),fe(r),r.stateNode.effectDuration+=Ah(w);break;case 31:Ee(o,r),fe(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 13:Ee(o,r),fe(r),r.child.flags&8192&&r.memoizedState!==null!==(b!==null&&b.memoizedState!==null)&&(Bu=he()),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 22:H=r.memoizedState!==null;var J=b!==null&&b.memoizedState!==null,x=ui,vr=re;if(ui=x||H,re=vr||J,Ee(o,r),re=vr,ui=x,J&&!H&&!x&&!vr&&(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&p1(r,Jr,zr),fe(r),w&8192)r:for(o=r.stateNode,o._visibility=H?o._visibility&~dh:o._visibility|dh,!H||b===null||J||ui||re||(fv(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&hl(r,Jr,zr,"Disconnect")),b=null,o=r;;){if(o.tag===5||o.tag===26){if(b===null){J=b=o;try{M=J.stateNode,H?hr(J,hX,M):hr(J,uX,J.stateNode,J.memoizedProps)}catch(Pr){no(J,J.return,Pr)}}}else if(o.tag===6){if(b===null){J=o;try{K=J.stateNode,H?hr(J,tX,K):hr(J,wX,K,J.memoizedProps)}catch(Pr){no(J,J.return,Pr)}}}else if(o.tag===18){if(b===null){J=o;try{$=J.stateNode,H?hr(J,nX,$):hr(J,bX,J.stateNode)}catch(Pr){no(J,J.return,Pr)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===r)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break r;for(;o.sibling===null;){if(o.return===null||o.return===r)break r;b===o&&(b=null),o=o.return}b===o&&(b=null),o.sibling.return=o.return,o=o.sibling}w&4&&(w=r.updateQueue,w!==null&&(b=w.retryQueue,b!==null&&(w.retryQueue=null,Nb(r,b))));break;case 19:Ee(o,r),fe(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 30:break;case 21:break;default:Ee(o,r),fe(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bo||0.05<Lo)&&tl(r,Jr,zr,Lo,$o),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<zr-Jr&&(fO(r.return.alternate,r.return)||hl(r,Jr,zr,"Mount"))),vg(e),wl(l),$o=v,Bo=n}function fe(r){var o=r.flags;if(o&2){try{hr(r,LG,r)}catch(e){no(r,r.return,e)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function eA(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var o=r;eA(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),r=r.sibling}}function Rl(r,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)jO(r,o.alternate,o),o=o.sibling}function gA(r){var o=ig(),e=ul(),l=Pl(),v=Ol();switch(r.tag){case 0:case 11:case 14:case 15:h2(r,r.return,Ag),fv(r);break;case 1:Ml(r,r.return);var n=r.stateNode;typeof n.componentWillUnmount==="function"&&cO(r,r.return,n),fv(r);break;case 27:hr(r,Bh,r.stateNode);case 26:case 5:Ml(r,r.return),fv(r);break;case 22:r.memoizedState===null&&fv(r);break;case 30:fv(r);break;default:fv(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(r,Jr,zr,Lo,$o),vg(o),wl(e),$o=l,Bo=v}function fv(r){for(r=r.child;r!==null;)gA(r),r=r.sibling}function lA(r,o,e,l){var v=ig(),n=ul(),b=Pl(),w=Ol(),H=e.flags;switch(e.tag){case 0:case 11:case 15:Wl(r,e,l),kO(e,Ag);break;case 1:if(Wl(r,e,l),o=e.stateNode,typeof o.componentDidMount==="function"&&hr(e,F4,e,o),o=e.updateQueue,o!==null){r=e.stateNode;try{hr(e,HG,o,r)}catch(M){no(e,e.return,M)}}l&&H&64&&VO(e),zh(e,e.return);break;case 27:EO(e);case 26:case 5:Wl(r,e,l),l&&o===null&&H&4&&_O(e),zh(e,e.return);break;case 12:if(l&&H&4){H=fl(),Wl(r,e,l),l=e.stateNode,l.effectDuration+=Ah(H);try{hr(e,yO,e,o,di,l.effectDuration)}catch(M){no(e,e.return,M)}}else Wl(r,e,l);break;case 31:Wl(r,e,l),l&&H&4&&sO(r,e);break;case 13:Wl(r,e,l),l&&H&4&&rA(r,e);break;case 22:e.memoizedState===null&&Wl(r,e,l),zh(e,e.return);break;case 30:break;default:Wl(r,e,l)}(e.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(e,Jr,zr,Lo,$o),vg(v),wl(n),$o=b,Bo=w}function Wl(r,o,e){e=e&&(o.subtreeFlags&8772)!==0;for(o=o.child;o!==null;)lA(r,o.alternate,o,e),o=o.sibling}function P2(r,o){var e=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==e&&(r!=null&&cv(r),e!=null&&Oh(e))}function O2(r,o){r=null,o.alternate!==null&&(r=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==r&&(cv(o),r!=null&&Oh(r))}function Dg(r,o,e,l,v){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(o=o.child;o!==null;){var n=o.sibling;iA(r,o,e,l,n!==null?n.actualStartTime:v),o=n}}function iA(r,o,e,l,v){var n=ig(),b=ul(),w=Pl(),H=Ol(),M=Ei,K=o.flags;switch(o.tag){case 0:case 11:case 15:(o.mode&kr)!==Ur&&0<o.actualStartTime&&(o.flags&1)!==0&&d1(o,o.actualStartTime,v,ie,e),Dg(r,o,e,l,v),K&2048&&DO(o,Se|xg);break;case 1:(o.mode&kr)!==Ur&&0<o.actualStartTime&&((o.flags&128)!==0?pw(o,o.actualStartTime,v,[]):(o.flags&1)!==0&&d1(o,o.actualStartTime,v,ie,e)),Dg(r,o,e,l,v);break;case 3:var $=fl(),J=ie;ie=o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)===0,Dg(r,o,e,l,v),ie=J,K&2048&&(e=null,o.alternate!==null&&(e=o.alternate.memoizedState.cache),l=o.memoizedState.cache,l!==e&&(cv(l),e!=null&&Oh(e))),r.passiveEffectDuration+=nb($);break;case 12:if(K&2048){K=fl(),Dg(r,o,e,l,v),r=o.stateNode,r.passiveEffectDuration+=Ah(K);try{hr(o,IG,o,o.alternate,di,r.passiveEffectDuration)}catch(x){no(o,o.return,x)}}else Dg(r,o,e,l,v);break;case 31:K=ie,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$!==null&&J===null?(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(ie=!1,$=$.hydrationErrors,$!==null&&pw(o,o.actualStartTime,v,$)):ie=!0):ie=!1,Dg(r,o,e,l,v),ie=K;break;case 13:K=ie,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$===null||$.dehydrated===null||J!==null&&J.dehydrated!==null?ie=!1:(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(ie=!1,$=$.hydrationErrors,$!==null&&pw(o,o.actualStartTime,v,$)):ie=!0),Dg(r,o,e,l,v),ie=K;break;case 23:break;case 22:J=o.stateNode,$=o.alternate,o.memoizedState!==null?J._visibility&oi?Dg(r,o,e,l,v):Uh(r,o,e,l,v):J._visibility&oi?Dg(r,o,e,l,v):(J._visibility|=oi,a0(r,o,e,l,(o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child),v),(o.mode&kr)===Ur||ie||(r=o.actualStartTime,0<=r&&0.05<v-r&&p1(o,r,v),0<=Jr&&0<=zr&&0.05<zr-Jr&&p1(o,Jr,zr))),K&2048&&P2($,o);break;case 24:Dg(r,o,e,l,v),K&2048&&O2(o.alternate,o);break;default:Dg(r,o,e,l,v)}if((o.mode&kr)!==Ur){if(r=!ie&&o.alternate===null&&o.return!==null&&o.return.alternate!==null)e=o.actualStartTime,0<=e&&0.05<v-e&&hl(o,e,v,"Mount");0<=Jr&&0<=zr&&((Bo||0.05<Lo)&&tl(o,Jr,zr,Lo,$o),r&&0.05<zr-Jr&&hl(o,Jr,zr,"Mount"))}vg(n),wl(b),$o=w,Bo=H,Ei=M}function a0(r,o,e,l,v,n){v=v&&((o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child));for(o=o.child;o!==null;){var b=o.sibling;vA(r,o,e,l,v,b!==null?b.actualStartTime:n),o=b}}function vA(r,o,e,l,v,n){var b=ig(),w=ul(),H=Pl(),M=Ol(),K=Ei;v&&(o.mode&kr)!==Ur&&0<o.actualStartTime&&(o.flags&1)!==0&&d1(o,o.actualStartTime,n,ie,e);var $=o.flags;switch(o.tag){case 0:case 11:case 15:a0(r,o,e,l,v,n),DO(o,Se);break;case 23:break;case 22:var J=o.stateNode;o.memoizedState!==null?J._visibility&oi?a0(r,o,e,l,v,n):Uh(r,o,e,l,n):(J._visibility|=oi,a0(r,o,e,l,v,n)),v&&$&2048&&P2(o.alternate,o);break;case 24:a0(r,o,e,l,v,n),v&&$&2048&&O2(o.alternate,o);break;default:a0(r,o,e,l,v,n)}(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(o,Jr,zr,Lo,$o),vg(b),wl(w),$o=H,Bo=M,Ei=K}function Uh(r,o,e,l,v){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(var n=o.child;n!==null;){o=n.sibling;var b=r,w=e,H=l,M=o!==null?o.actualStartTime:v,K=Ei;(n.mode&kr)!==Ur&&0<n.actualStartTime&&(n.flags&1)!==0&&d1(n,n.actualStartTime,M,ie,w);var $=n.flags;switch(n.tag){case 22:Uh(b,n,w,H,M),$&2048&&P2(n.alternate,n);break;case 24:Uh(b,n,w,H,M),$&2048&&O2(n.alternate,n);break;default:Uh(b,n,w,H,M)}Ei=K,n=o}}function E0(r,o,e){if(r.subtreeFlags&Mt)for(r=r.child;r!==null;)nA(r,o,e),r=r.sibling}function nA(r,o,e){switch(r.tag){case 26:E0(r,o,e),r.flags&Mt&&r.memoizedState!==null&&GX(e,Eg,r.memoizedState,r.memoizedProps);break;case 5:E0(r,o,e);break;case 3:case 4:var l=Eg;Eg=Vb(r.stateNode.containerInfo),E0(r,o,e),Eg=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Mt,Mt=16777216,E0(r,o,e),Mt=l):E0(r,o,e));break;default:E0(r,o,e)}}function hA(r){var o=r.alternate;if(o!==null&&(r=o.child,r!==null)){o.child=null;do o=r.sibling,r.sibling=null,r=o;while(r!==null)}}function Kh(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var e=0;e<o.length;e++){var l=o[e],v=ig();be=l,uA(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&hl(l,Jr,zr,"Unmount"),vg(v)}hA(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)tA(r),r=r.sibling}function tA(r){var o=ig(),e=ul(),l=Pl(),v=Ol();switch(r.tag){case 0:case 11:case 15:Kh(r),r.flags&2048&&t2(r,r.return,Se|xg);break;case 3:var n=fl();Kh(r),r.stateNode.passiveEffectDuration+=nb(n);break;case 12:n=fl(),Kh(r),r.stateNode.passiveEffectDuration+=Ah(n);break;case 22:n=r.stateNode,r.memoizedState!==null&&n._visibility&oi&&(r.return===null||r.return.tag!==13)?(n._visibility&=~oi,Bb(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&hl(r,Jr,zr,"Disconnect")):Kh(r);break;default:Kh(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(r,Jr,zr,Lo,$o),vg(o),wl(e),Bo=v,$o=l}function Bb(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var e=0;e<o.length;e++){var l=o[e],v=ig();be=l,uA(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&hl(l,Jr,zr,"Unmount"),vg(v)}hA(r)}for(r=r.child;r!==null;)bA(r),r=r.sibling}function bA(r){var o=ig(),e=ul(),l=Pl(),v=Ol();switch(r.tag){case 0:case 11:case 15:t2(r,r.return,Se),Bb(r);break;case 22:var n=r.stateNode;n._visibility&oi&&(n._visibility&=~oi,Bb(r));break;default:Bb(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(r,Jr,zr,Lo,$o),vg(o),wl(e),Bo=v,$o=l}function uA(r,o){for(;be!==null;){var e=be,l=e,v=o,n=ig(),b=ul(),w=Pl(),H=Ol();switch(l.tag){case 0:case 11:case 15:t2(l,v,Se);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(v=l.memoizedState.cachePool.pool,v!=null&&cv(v));break;case 24:Oh(l.memoizedState.cache)}if((l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bo||0.05<Lo)&&tl(l,Jr,zr,Lo,$o),vg(n),wl(b),Bo=H,$o=w,l=e.child,l!==null)l.return=e,be=l;else r:for(e=r;be!==null;){if(l=be,n=l.sibling,b=l.return,pO(l),l===e){be=null;break r}if(n!==null){n.return=b,be=n;break r}be=b}}}function NG(){eJ.forEach(function(r){return r()})}function wA(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||S.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function hg(r){if((eo&ve)!==ue&&Vr!==0)return Vr&-Vr;var o=S.T;return o!==null?(o._updatedFibers||(o._updatedFibers=new Set),o._updatedFibers.add(r),G2()):L()}function PA(){if(de===0)if((Vr&536870912)===0||pr){var r=ou;ou<<=1,(ou&3932160)===0&&(ou=262144),de=r}else de=536870912;return r=Og.current,r!==null&&(r.flags|=32),de}function No(r,o,e){if(xn&&console.error("useInsertionEffect must not schedule updates."),g6&&(Tu=!0),r===Mo&&(uo===b0||uo===u0)||r.cancelPendingCommit!==null)j0(r,0),Ti(r,Vr,de,!1);if(Ui(r,e),(eo&ve)!==ue&&r===Mo){if(Jl)switch(o.tag){case 0:case 11:case 15:r=yr&&C(yr)||"Unknown",TM.has(r)||(TM.add(r),o=C(o)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",o,r,r));break;case 1:SM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),SM=!0)}}else zl&&gh(r,o,e),yG(o),r===Mo&&((eo&ve)===ue&&(nv|=e),Fo===lv&&Ti(r,Vr,de,!1)),ml(r)}function OA(r,o,e){if((eo&(ve|Hg))!==ue)throw Error("Should not already be working.");if(Vr!==0&&yr!==null){var l=yr,v=he();switch(Lq){case mt:case b0:var n=lt;Jo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",n,v,Qg,void 0,"primary-light")):console.timeStamp("Suspended",n,v,Qg,void 0,"primary-light"));break;case u0:n=lt,Jo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",n,v,Qg,void 0,"primary-light")):console.timeStamp("Action",n,v,Qg,void 0,"primary-light"));break;default:Jo&&(l=v-lt,3>l||console.timeStamp("Blocked",lt,v,Qg,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}n=(e=!e&&(o&127)===0&&(o&r.expiredLanes)===0||Iv(r,o))?ZG(r,o):H2(r,o,!0);var b=e;do{if(n===wi){Ln&&!e&&Ti(r,o,0,!1),o=uo,lt=jo(),Lq=o;break}else{if(l=he(),v=r.current.alternate,b&&!BG(v)){gg(o),v=te,n=l,!Jo||n<=v||(To?To.run(console.timeStamp.bind(console,"Teared Render",v,n,fr,Er,"error")):console.timeStamp("Teared Render",v,n,fr,Er,"error")),jv(o,l),n=H2(r,o,!1),b=!1;continue}if(n===t0){if(b=o,r.errorRecoveryDisabledLanes&b)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){gg(o),dw(te,l,o,To),jv(o,l),o=w;r:{l=r,n=b,b=Xt;var H=l.current.memoizedState.isDehydrated;if(H&&(j0(l,w).flags|=256),w=H2(l,w,!1),w!==t0){if(f4&&!H){l.errorRecoveryDisabledLanes|=n,nv|=n,n=lv;break r}l=Te,Te=b,l!==null&&(Te===null?Te=l:Te.push.apply(Te,l))}n=w}if(b=!1,n!==t0)continue;else l=he()}}if(n===Wt){gg(o),dw(te,l,o,To),jv(o,l),j0(r,0),Ti(r,o,0,!0);break}r:{switch(e=r,n){case wi:case Wt:throw Error("Root did not complete. This is a bug in React.");case lv:if((o&4194048)!==o)break;case Lu:gg(o),O8(te,l,o,To),jv(o,l),v=o,(v&127)!==0?qu=l:(v&4194048)!==0&&(Mu=l),Ti(e,o,de,!iv);break r;case t0:Te=null;break;case Iu:case QM:break;default:throw Error("Unknown root exit status.")}if(S.actQueue!==null)q2(e,v,o,Te,Yt,Nu,de,nv,w0,n,null,null,te,l);else{if((o&62914560)===o&&(b=Bu+KM-he(),10<b)){if(Ti(e,o,de,!iv),$v(e,0,!0)!==0)break r;fg=o,e.timeoutHandle=EM(AA.bind(null,e,v,Te,Yt,Nu,o,de,nv,w0,iv,n,"Throttled",te,l),b);break r}AA(e,v,Te,Yt,Nu,o,de,nv,w0,iv,n,null,te,l)}}}break}while(1);ml(r)}function AA(r,o,e,l,v,n,b,w,H,M,K,$,J,x){r.timeoutHandle=q0;var vr=o.subtreeFlags,Pr=null;if(vr&8192||(vr&16785408)===16785408){if(Pr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yl},nA(o,n,Pr),vr=(n&62914560)===n?Bu-he():(n&4194048)===n?UM-he():0,vr=XX(Pr,vr),vr!==null){fg=n,r.cancelPendingCommit=vr(q2.bind(null,r,o,n,e,l,v,b,w,H,K,Pr,Pr.waitingForViewTransition?"Waiting for the previous Animation":0<Pr.count?0<Pr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Pr.imgCount===1?"Suspended on an Image":0<Pr.imgCount?"Suspended on Images":null,J,x)),Ti(r,n,b,!M);return}}q2(r,o,n,e,l,v,b,w,H,K,Pr,$,J,x)}function BG(r){for(var o=r;;){var e=o.tag;if((e===0||e===11||e===15)&&o.flags&16384&&(e=o.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var v=e[l],n=v.getSnapshot;v=v.value;try{if(!Be(n(),v))return!1}catch(b){return!1}}if(e=o.child,o.subtreeFlags&16384&&e!==null)e.return=o,o=e;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ti(r,o,e,l){o&=~j4,o&=~nv,r.suspendedLanes|=o,r.pingedLanes&=~o,l&&(r.warmLanes|=o),l=r.expirationTimes;for(var v=o;0<v;){var n=31-Fe(v),b=1<<n;l[n]=-1,v&=~b}e!==0&&Lv(r,e,o)}function f0(){return(eo&(ve|Hg))===ue?(Lh(0,!1),!1):!0}function A2(){if(yr!==null){if(uo===pe)var r=yr.return;else r=yr,lb(),Q5(r),Xn=null,Pt=0,r=yr;for(;r!==null;)TO(r.alternate,r),r=r.return;yr=null}}function jv(r,o){(r&127)!==0&&(si=o),(r&4194048)!==0&&(Ll=o),(r&62914560)!==0&&($q=o),(r&2080374784)!==0&&(Iq=o)}function j0(r,o){Jo&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",Er,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",Er,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",Er,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",Er,"primary-light"));var e=te;if(te=jo(),Vr!==0&&0<e){if(gg(Vr),Fo===Iu||Fo===lv)O8(e,te,o,To);else{var l=te,v=To;if(Jo&&!(l<=e)){var n=(o&738197653)===o?"tertiary-dark":"primary-dark",b=(o&536870912)===o?"Prewarm":(o&201326741)===o?"Interrupted Hydration":"Interrupted Render";v?v.run(console.timeStamp.bind(console,b,e,l,fr,Er,n)):console.timeStamp(b,e,l,fr,Er,n)}}jv(Vr,te)}if(e=To,To=null,(o&127)!==0){To=ot,v=0<=Il&&Il<si?si:Il,l=0<=o0&&o0<si?si:o0,n=0<=l?l:0<=v?v:te,0<=qu?(gg(2),A8(qu,n,o,e)):(Ru&127)!==0&&(gg(2),wh(si,n,ni)),e=v;var w=l,H=et,M=0<Wn,K=rv===rt,$=rv===Hu;if(v=te,l=ot,n=U4,b=K4,Jo){if(fr="Blocking",0<e?e>v&&(e=v):e=v,0<w?w>e&&(w=e):w=e,H!==null&&e>w){var J=M?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+H,w,e,fr,Er,J)):console.timeStamp(M?"Consecutive":"Event: "+H,w,e,fr,Er,J)}v>e&&(w=K?"error":(o&738197653)===o?"tertiary-light":"primary-light",K=$?"Promise Resolved":K?"Cascading Update":5<v-e?"Update Blocked":"Update",$=[],b!=null&&$.push(["Component name",b]),n!=null&&$.push(["Method name",n]),e={start:e,end:v,detail:{devtools:{properties:$,track:fr,trackGroup:Er,color:w}}},l?l.run(performance.measure.bind(performance,K,e)):performance.measure(K,e))}Il=-1.1,rv=0,K4=U4=null,qu=-1.1,Wn=o0,o0=-1.1,si=jo()}if((o&4194048)!==0&&(To=gt,v=0<=vi&&vi<Ll?Ll:vi,e=0<=Lg&&Lg<Ll?Ll:Lg,l=0<=ov&&ov<Ll?Ll:ov,n=0<=l?l:0<=e?e:te,0<=Mu?(gg(256),A8(Mu,n,o,To)):(Ru&4194048)!==0&&(gg(256),wh(Ll,n,ni)),$=l,w=e0,H=0<ev,M=$4===Hu,n=te,l=gt,b=Uq,K=Kq,Jo&&(fr="Transition",0<e?e>n&&(e=n):e=n,0<v?v>e&&(v=e):v=e,0<$?$>v&&($=v):$=v,v>$&&w!==null&&(J=H?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,H?"Consecutive":"Event: "+w,$,v,fr,Er,J)):console.timeStamp(H?"Consecutive":"Event: "+w,$,v,fr,Er,J)),e>v&&(l?l.run(console.timeStamp.bind(console,"Action",v,e,fr,Er,"primary-dark")):console.timeStamp("Action",v,e,fr,Er,"primary-dark")),n>e&&(v=M?"Promise Resolved":5<n-e?"Update Blocked":"Update",$=[],K!=null&&$.push(["Component name",K]),b!=null&&$.push(["Method name",b]),e={start:e,end:n,detail:{devtools:{properties:$,track:fr,trackGroup:Er,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,v,e)):performance.measure(v,e))),Lg=vi=-1.1,$4=0,Mu=-1.1,ev=ov,ov=-1.1,Ll=jo()),(o&62914560)!==0&&(Ru&62914560)!==0&&(gg(4194304),wh($q,te,ni)),(o&2080374784)!==0&&(Ru&2080374784)!==0&&(gg(268435456),wh(Iq,te,ni)),e=r.timeoutHandle,e!==q0&&(r.timeoutHandle=q0,AJ(e)),e=r.cancelPendingCommit,e!==null&&(r.cancelPendingCommit=null,e()),fg=0,A2(),Mo=r,yr=e=_l(r.current,null),Vr=o,uo=pe,qg=null,iv=!1,Ln=Iv(r,o),f4=!1,Fo=wi,w0=de=j4=nv=vv=0,Te=Xt=null,Nu=!1,(o&8)!==0&&(o|=o&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=o;0<l;)v=31-Fe(l),n=1<<v,o|=r[v],l&=~n;return xl=o,s1(),r=Gq(),1000<r-mq&&(S.recentlyCreatedOwnerStacks=0,mq=r),_g.discardPendingWarnings(),e}function HA(r,o){Kr=null,S.H=qt,S.getCurrentStack=null,Jl=!1,ug=null,o===Gn||o===Xu?(o=Z8(),uo=mt):o===x4?(o=Z8(),uo=zM):uo=o===c4?E4:o!==null&&typeof o==="object"&&typeof o.then==="function"?Gt:Fu,qg=o;var e=yr;e===null?(Fo=Wt,Kb(r,lg(o,r.current))):e.mode&kr&&P5(e)}function qA(){var r=Og.current;return r===null?!0:(Vr&4194048)===Vr?Fg===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fg:!1}function MA(){var r=S.H;return S.H=qt,r===null?qt:r}function RA(){var r=S.A;return S.A=oJ,r}function Zb(r){To===null&&(To=r._debugTask==null?null:r._debugTask)}function Cb(){Fo=lv,iv||(Vr&4194048)!==Vr&&Og.current!==null||(Ln=!0),(vv&134217727)===0&&(nv&134217727)===0||Mo===null||Ti(Mo,Vr,de,!1)}function H2(r,o,e){var l=eo;eo|=ve;var v=MA(),n=RA();if(Mo!==r||Vr!==o){if(zl){var b=r.memoizedUpdaters;0<b.size&&(Ih(r,Vr),b.clear()),Ki(r,o)}Yt=null,j0(r,o)}o=!1,b=Fo;r:do try{if(uo!==pe&&yr!==null){var w=yr,H=qg;switch(uo){case E4:A2(),b=Lu;break r;case mt:case b0:case u0:case Gt:Og.current===null&&(o=!0);var M=uo;if(uo=pe,qg=null,p0(r,w,H,M),e&&Ln){b=wi;break r}break;default:M=uo,uo=pe,qg=null,p0(r,w,H,M)}}WA(),b=Fo;break}catch(K){HA(r,K)}while(1);return o&&r.shellSuspendCounter++,lb(),eo=l,S.H=v,S.A=n,yr===null&&(Mo=null,Vr=0,s1()),b}function WA(){for(;yr!==null;)mA(yr)}function ZG(r,o){var e=eo;eo|=ve;var l=MA(),v=RA();if(Mo!==r||Vr!==o){if(zl){var n=r.memoizedUpdaters;0<n.size&&(Ih(r,Vr),n.clear()),Ki(r,o)}Yt=null,Zu=he()+$M,j0(r,o)}else Ln=Iv(r,o);r:do try{if(uo!==pe&&yr!==null)o:switch(o=yr,n=qg,uo){case Fu:uo=pe,qg=null,p0(r,o,n,Fu);break;case b0:case u0:if(N8(n)){uo=pe,qg=null,GA(o);break}o=function(){uo!==b0&&uo!==u0||Mo!==r||(uo=xu),ml(r)},n.then(o,o);break r;case mt:uo=xu;break r;case zM:uo=a4;break r;case xu:N8(n)?(uo=pe,qg=null,GA(o)):(uo=pe,qg=null,p0(r,o,n,xu));break;case a4:var b=null;switch(yr.tag){case 26:b=yr.memoizedState;case 5:case 27:var w=yr;if(b?OH(b):w.stateNode.complete){uo=pe,qg=null;var H=w.sibling;if(H!==null)yr=H;else{var M=w.return;M!==null?(yr=M,Sb(M)):yr=null}break o}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}uo=pe,qg=null,p0(r,o,n,a4);break;case Gt:uo=pe,qg=null,p0(r,o,n,Gt);break;case E4:A2(),Fo=Lu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}S.actQueue!==null?WA():CG();break}catch(K){HA(r,K)}while(1);if(lb(),S.H=l,S.A=v,eo=e,yr!==null)return wi;return Mo=null,Vr=0,s1(),Fo}function CG(){for(;yr!==null&&!BX();)mA(yr)}function mA(r){var o=r.alternate;(r.mode&kr)!==Ur?(w5(r),o=hr(r,v2,o,r,xl),P5(r)):o=hr(r,v2,o,r,xl),r.memoizedProps=r.pendingProps,o===null?Sb(r):yr=o}function GA(r){var o=hr(r,SG,r);r.memoizedProps=r.pendingProps,o===null?Sb(r):yr=o}function SG(r){var o=r.alternate,e=(r.mode&kr)!==Ur;switch(e&&w5(r),r.tag){case 15:case 0:o=FO(o,r,r.pendingProps,r.type,void 0,Vr);break;case 11:o=FO(o,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Q5(r);default:TO(o,r),r=yr=m8(r,xl),o=v2(o,r,xl)}return e&&P5(r),o}function p0(r,o,e,l){lb(),Q5(o),Xn=null,Pt=0;var v=o.return;try{if(XG(r,v,o,e,Vr)){Fo=Wt,Kb(r,lg(e,r.current)),yr=null;return}}catch(n){if(v!==null)throw yr=v,n;Fo=Wt,Kb(r,lg(e,r.current)),yr=null;return}if(o.flags&32768){if(pr||l===Fu)r=!0;else if(Ln||(Vr&536870912)!==0)r=!1;else if(iv=r=!0,l===b0||l===u0||l===mt||l===Gt)l=Og.current,l!==null&&l.tag===13&&(l.flags|=16384);XA(o,r)}else Sb(o)}function Sb(r){var o=r;do{if((o.flags&32768)!==0){XA(o,iv);return}var e=o.alternate;if(r=o.return,w5(o),e=hr(o,QG,e,o,xl),(o.mode&kr)!==Ur&&$8(o),e!==null){yr=e;return}if(o=o.sibling,o!==null){yr=o;return}yr=o=r}while(o!==null);Fo===wi&&(Fo=QM)}function XA(r,o){do{var e=zG(r.alternate,r);if(e!==null){e.flags&=32767,yr=e;return}if((r.mode&kr)!==Ur){$8(r),e=r.actualDuration;for(var l=r.child;l!==null;)e+=l.actualDuration,l=l.sibling;r.actualDuration=e}if(e=r.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!o&&(r=r.sibling,r!==null)){yr=r;return}yr=r=e}while(r!==null);Fo=Lu,yr=null}function q2(r,o,e,l,v,n,b,w,H,M,K,$,J,x){r.cancelPendingCommit=null;do $h();while(ee!==tv);if(_g.flushLegacyContextWarning(),_g.flushPendingUnsafeLifecycleWarnings(),(eo&(ve|Hg))!==ue)throw Error("Should not already be working.");if(gg(e),M===t0?dw(J,x,e,To):l!==null?bG(J,x,e,l,o!==null&&o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)!==0,To):tG(J,x,e,To),o!==null){if(e===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),o===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(n=o.lanes|o.childLanes,n|=X4,D1(r,e,n,b,w,H),r===Mo&&(yr=Mo=null,Vr=0),Fn=o,bv=r,fg=e,s4=n,o6=v,BM=l,r6=x,ZM=$,jg=Cu,CM=null,o.actualDuration!==0||(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,cG(gn,function(){return $t=window.event,jg===Cu&&(jg=d4),UA(),null})):(r.callbackNode=null,r.callbackPriority=0),ii=null,di=jo(),$!==null&&uG(x,di,$,To),l=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,v=ho.p,ho.p=wg,b=eo,eo|=Hg;try{FG(r,o,e)}finally{eo=b,ho.p=v,S.T=l}}ee=LM,YA(),JA(),QA()}}function YA(){if(ee===LM){ee=tv;var r=bv,o=Fn,e=fg,l=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var v=ho.p;ho.p=wg;var n=eo;eo|=Hg;try{$n=e,In=r,hb(),oA(o,r),In=$n=null,e=w6;var b=u8(r.containerInfo),w=e.focusedElem,H=e.selectionRange;if(b!==w&&w&&w.ownerDocument&&b8(w.ownerDocument.documentElement,w)){if(H!==null&&fw(w)){var{start:M,end:K}=H;if(K===void 0&&(K=M),"selectionStart"in w)w.selectionStart=M,w.selectionEnd=Math.min(K,w.value.length);else{var $=w.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var x=J.getSelection(),vr=w.textContent.length,Pr=Math.min(H.start,vr),Go=H.end===void 0?Pr:Math.min(H.end,vr);!x.extend&&Pr>Go&&(b=Go,Go=Pr,Pr=b);var sr=t8(w,Pr),Y=t8(w,Go);if(sr&&Y&&(x.rangeCount!==1||x.anchorNode!==sr.node||x.anchorOffset!==sr.offset||x.focusNode!==Y.node||x.focusOffset!==Y.offset)){var Q=$.createRange();Q.setStart(sr.node,sr.offset),x.removeAllRanges(),Pr>Go?(x.addRange(Q),x.extend(Y.node,Y.offset)):(Q.setEnd(Y.node,Y.offset),x.addRange(Q))}}}}$=[];for(x=w;x=x.parentNode;)x.nodeType===1&&$.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof w.focus==="function"&&w.focus();for(w=0;w<$.length;w++){var U=$[w];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}rw=!!u6,w6=u6=null}finally{eo=n,ho.p=v,S.T=l}}r.current=o,ee=FM}}function JA(){if(ee===FM){ee=tv;var r=CM;if(r!==null){di=jo();var o=li,e=di;!Jo||e<=o||(ni?ni.run(console.timeStamp.bind(console,r,o,e,fr,Er,"secondary-light")):console.timeStamp(r,o,e,fr,Er,"secondary-light"))}r=bv,o=Fn,e=fg;var l=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var v=ho.p;ho.p=wg;var n=eo;eo|=Hg;try{$n=e,In=r,hb(),jO(r,o.alternate,o),In=$n=null}finally{eo=n,ho.p=v,S.T=l}}r=r6,o=ZM,li=jo(),r=o===null?r:di,o=li,e=jg===p4,l=To,ii!==null?H8(r,o,ii,!1,l):!Jo||o<=r||(l?l.run(console.timeStamp.bind(console,e?"Commit Interrupted View Transition":"Commit",r,o,fr,Er,e?"error":"secondary-dark")):console.timeStamp(e?"Commit Interrupted View Transition":"Commit",r,o,fr,Er,e?"error":"secondary-dark")),ee=xM}}function QA(){if(ee===NM||ee===xM){if(ee===NM){var r=li;li=jo();var o=li,e=jg===p4;!Jo||o<=r||(ni?ni.run(console.timeStamp.bind(console,e?"Interrupted View Transition":"Starting Animation",r,o,fr,Er,e?"error":"secondary-light")):console.timeStamp(e?"Interrupted View Transition":"Starting Animation",r,o,fr,Er,e?" error":"secondary-light")),jg!==p4&&(jg=IM)}ee=tv,ZX(),r=bv;var l=Fn;o=fg,e=BM;var v=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;v?ee=Su:(ee=tv,Fn=bv=null,zA(r,r.pendingLanes),P0=0,Qt=null);var n=r.pendingLanes;if(n===0&&(hv=null),v||LA(r),n=R(o),l=l.stateNode,ze&&typeof ze.onCommitFiberRoot==="function")try{var b=(l.current.flags&128)===128;switch(n){case wg:var w=o4;break;case cg:w=e4;break;case Ul:w=gn;break;case gu:w=g4;break;default:w=gn}ze.onCommitFiberRoot(ln,l,w,b)}catch($){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",$))}if(zl&&r.memoizedUpdaters.clear(),NG(),e!==null){b=S.T,w=ho.p,ho.p=wg,S.T=null;try{var H=r.onRecoverableError;for(l=0;l<e.length;l++){var M=e[l],K=TG(M.stack);hr(M.source,H,M.value,K)}}finally{S.T=b,ho.p=w}}(fg&3)!==0&&$h(),ml(r),n=r.pendingLanes,(o&261930)!==0&&(n&42)!==0?(mu=!0,r===e6?Jt++:(Jt=0,e6=r)):Jt=0,v||jv(o,li),Lh(0,!1)}}function TG(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function zA(r,o){(r.pooledCacheLanes&=o)===0&&(o=r.pooledCache,o!=null&&(r.pooledCache=null,Oh(o)))}function $h(){return YA(),JA(),QA(),UA()}function UA(){if(ee!==Su)return!1;var r=bv,o=s4;s4=0;var e=R(fg),l=Ul===0||Ul>e?Ul:e;e=S.T;var v=ho.p;try{ho.p=l,S.T=null;var n=o6;o6=null,l=bv;var b=fg;if(ee=tv,Fn=bv=null,fg=0,(eo&(ve|Hg))!==ue)throw Error("Cannot flush passive effects while already rendering.");gg(b),g6=!0,Tu=!1;var w=0;if(ii=null,w=he(),jg===IM)wh(li,w,ni);else{var H=li,M=w,K=jg===d4;!Jo||M<=H||(To?To.run(console.timeStamp.bind(console,K?"Waiting for Paint":"Waiting",H,M,fr,Er,"secondary-light")):console.timeStamp(K?"Waiting for Paint":"Waiting",H,M,fr,Er,"secondary-light"))}H=eo,eo|=Hg;var $=l.current;hb(),tA($);var J=l.current;$=r6,hb(),iA(l,J,b,n,$),LA(l),eo=H;var x=he();if(J=w,$=To,ii!==null?H8(J,x,ii,!0,$):!Jo||x<=J||($?$.run(console.timeStamp.bind(console,"Remaining Effects",J,x,fr,Er,"secondary-dark")):console.timeStamp("Remaining Effects",J,x,fr,Er,"secondary-dark")),jv(b,x),Lh(0,!1),Tu?l===Qt?P0++:(P0=0,Qt=l):P0=0,Tu=g6=!1,ze&&typeof ze.onPostCommitFiberRoot==="function")try{ze.onPostCommitFiberRoot(ln,l)}catch(Pr){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",Pr))}var vr=l.current.stateNode;return vr.effectDuration=0,vr.passiveEffectDuration=0,!0}finally{ho.p=v,S.T=e,zA(r,o)}}function KA(r,o,e){o=lg(e,o),I8(o),o=f5(r.stateNode,o,2),r=Bi(r,o,2),r!==null&&(Ui(r,2),ml(r))}function no(r,o,e){if(xn=!1,r.tag===3)KA(r,r,e);else{for(;o!==null;){if(o.tag===3){KA(o,r,e);return}if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(hv===null||!hv.has(l))){r=lg(e,r),I8(r),e=j5(2),l=Bi(o,e,2),l!==null&&(p5(e,l,o,r),Ui(l,2),ml(l));return}}o=o.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,e)}}function M2(r,o,e){var l=r.pingCache;if(l===null){l=r.pingCache=new gJ;var v=new Set;l.set(o,v)}else v=l.get(o),v===void 0&&(v=new Set,l.set(o,v));v.has(e)||(f4=!0,v.add(e),l=kG.bind(null,r,o,e),zl&&Ih(r,e),o.then(l,l))}function kG(r,o,e){var l=r.pingCache;l!==null&&l.delete(o),r.pingedLanes|=r.suspendedLanes&e,r.warmLanes&=~e,(e&127)!==0?0>Il&&(si=Il=jo(),ot=Au("Promise Resolved"),rv=Hu):(e&4194048)!==0&&0>Lg&&(Ll=Lg=jo(),gt=Au("Promise Resolved"),$4=Hu),wA()&&S.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Mo===r&&(Vr&e)===e&&(Fo===lv||Fo===Iu&&(Vr&62914560)===Vr&&he()-Bu<KM?(eo&ve)===ue&&j0(r,0):j4|=e,w0===Vr&&(w0=0)),ml(r)}function $A(r,o){o===0&&(o=N0()),r=Qe(r,o),r!==null&&(Ui(r,o),ml(r))}function DG(r){var o=r.memoizedState,e=0;o!==null&&(e=o.retryLane),$A(r,e)}function VG(r,o){var e=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:v}=r;v!==null&&(e=v.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(o),$A(r,e)}function R2(r,o,e){if((o.subtreeFlags&67117056)!==0)for(o=o.child;o!==null;){var l=r,v=o,n=v.type===pb;n=e||n,v.tag!==22?v.flags&67108864?n&&hr(v,IA,l,v):R2(l,v,n):v.memoizedState===null&&(n&&v.flags&8192?hr(v,IA,l,v):v.subtreeFlags&67108864&&hr(v,R2,l,v,n)),o=o.sibling}}function IA(r,o){Wo(!0);try{gA(o),bA(o),lA(r,o.alternate,o,!1),vA(r,o,0,null,!1,0)}finally{Wo(!1)}}function LA(r){var o=!0;r.current.mode&(Ue|yg)||(o=!1),R2(r,r.current,o)}function FA(r){if((eo&ve)===ue){var o=r.tag;if(o===3||o===1||o===0||o===11||o===14||o===15){if(o=C(r)||"ReactComponent",ku!==null){if(ku.has(o))return;ku.add(o)}else ku=new Set([o]);hr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Ih(r,o){zl&&r.memoizedUpdaters.forEach(function(e){gh(r,e,o)})}function cG(r,o){var e=S.actQueue;return e!==null?(e.push(o),vJ):r4(r,o)}function yG(r){wA()&&S.actQueue===null&&hr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,C(r))})}function ml(r){r!==Nn&&r.next===null&&(Nn===null?Du=Nn=r:Nn=Nn.next=r),Vu=!0,S.actQueue!==null?i6||(i6=!0,ZA()):l6||(l6=!0,ZA())}function Lh(r,o){if(!v6&&Vu){v6=!0;do{var e=!1;for(var l=Du;l!==null;){if(!o)if(r!==0){var v=l.pendingLanes;if(v===0)var n=0;else{var{suspendedLanes:b,pingedLanes:w}=l;n=(1<<31-Fe(42|r)+1)-1,n&=v&~(b&~w),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,BA(l,n))}else n=Vr,n=$v(l,l===Mo?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==q0),(n&3)===0||Iv(l,n)||(e=!0,BA(l,n));l=l.next}}while(e);v6=!1}}function _G(){$t=window.event,W2()}function W2(){Vu=i6=l6=!1;var r=0;uv!==0&&sG()&&(r=uv);for(var o=he(),e=null,l=Du;l!==null;){var v=l.next,n=xA(l,o);if(n===0)l.next=null,e===null?Du=v:e.next=v,v===null&&(Nn=e);else if(e=l,r!==0||(n&3)!==0)Vu=!0;l=v}ee!==tv&&ee!==Su||Lh(r,!1),uv!==0&&(uv=0)}function xA(r,o){for(var{suspendedLanes:e,pingedLanes:l,expirationTimes:v}=r,n=r.pendingLanes&-62914561;0<n;){var b=31-Fe(n),w=1<<b,H=v[b];if(H===-1){if((w&e)===0||(w&l)!==0)v[b]=Cw(w,o)}else H<=o&&(r.expiredLanes|=w);n&=~w}if(o=Mo,e=Vr,e=$v(r,r===o?e:0,r.cancelPendingCommit!==null||r.timeoutHandle!==q0),l=r.callbackNode,e===0||r===o&&(uo===b0||uo===u0)||r.cancelPendingCommit!==null)return l!==null&&m2(l),r.callbackNode=null,r.callbackPriority=0;if((e&3)===0||Iv(r,e)){if(o=e&-e,o!==r.callbackPriority||S.actQueue!==null&&l!==n6)m2(l);else return o;switch(R(e)){case wg:case cg:e=e4;break;case Ul:e=gn;break;case gu:e=g4;break;default:e=gn}return l=NA.bind(null,r),S.actQueue!==null?(S.actQueue.push(l),e=n6):e=r4(e,l),r.callbackPriority=o,r.callbackNode=e,o}return l!==null&&m2(l),r.callbackPriority=2,r.callbackNode=null,2}function NA(r,o){if(mu=Wu=!1,$t=window.event,ee!==tv&&ee!==Su)return r.callbackNode=null,r.callbackPriority=0,null;var e=r.callbackNode;if(jg===Cu&&(jg=d4),$h()&&r.callbackNode!==e)return null;var l=Vr;if(l=$v(r,r===Mo?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==q0),l===0)return null;return OA(r,l,o),xA(r,he()),r.callbackNode!=null&&r.callbackNode===e?NA.bind(null,r):null}function BA(r,o){if($h())return null;Wu=mu,mu=!1,OA(r,o,!0)}function m2(r){r!==n6&&r!==null&&NX(r)}function ZA(){S.actQueue!==null&&S.actQueue.push(function(){return W2(),null}),HJ(function(){(eo&(ve|Hg))!==ue?r4(o4,_G):W2()})}function G2(){if(uv===0){var r=g0;r===0&&(r=ru,ru<<=1,(ru&261888)===0&&(ru=256)),uv=r}return uv}function CA(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return wo(r,"action"),th(""+r)}function SA(r,o){var e=o.ownerDocument.createElement("input");return e.name=o.name,e.value=o.value,r.id&&e.setAttribute("form",r.id),o.parentNode.insertBefore(e,o),r=new FormData(r),e.parentNode.removeChild(e),r}function aG(r,o,e,l,v){if(o==="submit"&&e&&e.stateNode===v){var n=CA((v[xe]||null).action),b=l.submitter;b&&(o=(o=b[xe]||null)?CA(o.formAction):b.getAttribute("formAction"),o!==null&&(n=o,b=null));var w=new hu("action","action",null,l,v);r.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(uv!==0){var H=b?SA(v,b):new FormData(v),M={pending:!0,data:H,method:v.method,action:n};Object.freeze(M),D5(e,M,null,H)}}else typeof n==="function"&&(w.preventDefault(),H=b?SA(v,b):new FormData(v),M={pending:!0,data:H,method:v.method,action:n},Object.freeze(M),D5(e,M,n,H))},currentTarget:v}]})}}function Tb(r,o,e){r.currentTarget=e;try{o(r)}catch(l){R4(l)}r.currentTarget=null}function TA(r,o){o=(o&4)!==0;for(var e=0;e<r.length;e++){var l=r[e];r:{var v=void 0,n=l.event;if(l=l.listeners,o)for(var b=l.length-1;0<=b;b--){var w=l[b],H=w.instance,M=w.currentTarget;if(w=w.listener,H!==v&&n.isPropagationStopped())break r;H!==null?hr(H,Tb,n,w,M):Tb(n,w,M),v=H}else for(b=0;b<l.length;b++){if(w=l[b],H=w.instance,M=w.currentTarget,w=w.listener,H!==v&&n.isPropagationStopped())break r;H!==null?hr(H,Tb,n,w,M):Tb(n,w,M),v=H}}}}function dr(r,o){h6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var e=o[l4];e===void 0&&(e=o[l4]=new Set);var l=r+"__bubble";e.has(l)||(kA(o,r,2,!1),e.add(l))}function X2(r,o,e){h6.has(r)&&!o&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;o&&(l|=4),kA(e,r,l,o)}function Y2(r){if(!r[cu]){r[cu]=!0,ZH.forEach(function(e){e!=="selectionchange"&&(h6.has(e)||X2(e,!1,r),X2(e,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[cu]||(o[cu]=!0,X2("selectionchange",!1,o))}}function kA(r,o,e,l){switch(WH(o)){case wg:var v=zX;break;case cg:v=UX;break;default:v=T2}e=v.bind(null,o,e,r),v=void 0,!t4||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),l?v!==void 0?r.addEventListener(o,e,{capture:!0,passive:v}):r.addEventListener(o,e,!0):v!==void 0?r.addEventListener(o,e,{passive:v}):r.addEventListener(o,e,!1)}function J2(r,o,e,l,v){var n=l;if((o&1)===0&&(o&2)===0&&l!==null)r:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===v)break;if(b===4)for(b=l.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===v)return;b=b.return}for(;w!==null;){if(b=Mr(w),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){l=n=b;continue r}w=w.parentNode}}l=l.return}dP(function(){var M=n,K=aw(e),$=[];r:{var J=Wq.get(r);if(J!==void 0){var x=hu,vr=r;switch(r){case"keypress":if(E1(e)===0)break r;case"keydown":case"keyup":x=GY;break;case"focusin":vr="focus",x=P4;break;case"focusout":vr="blur",x=P4;break;case"beforeblur":case"afterblur":x=P4;break;case"click":if(e.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=bY;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=JY;break;case Hq:case qq:case Mq:x=PY;break;case Rq:x=zY;break;case"scroll":case"scrollend":x=hY;break;case"wheel":x=KY;break;case"copy":case"cut":case"paste":x=AY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hq;break;case"toggle":case"beforetoggle":x=IY}var Pr=(o&4)!==0,Go=!Pr&&(r==="scroll"||r==="scrollend"),sr=Pr?J!==null?J+"Capture":null:J;Pr=[];for(var Y=M,Q;Y!==null;){var U=Y;if(Q=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||Q===null||sr===null||(U=bh(Y,sr),U!=null&&Pr.push(Fh(Y,U,Q))),Go)break;Y=Y.return}0<Pr.length&&(J=new x(J,vr,null,e,K),$.push({event:J,listeners:Pr}))}}if((o&7)===0){r:{if(J=r==="mouseover"||r==="pointerover",x=r==="mouseout"||r==="pointerout",J&&e!==ch&&(vr=e.relatedTarget||e.fromElement)&&(Mr(vr)||vr[_i]))break r;if(x||J){if(J=K.window===K?K:(J=K.ownerDocument)?J.defaultView||J.parentWindow:window,x){if(vr=e.relatedTarget||e.toElement,x=M,vr=vr?Mr(vr):null,vr!==null&&(Go=rr(vr),Pr=vr.tag,vr!==Go||Pr!==5&&Pr!==27&&Pr!==6))vr=null}else x=null,vr=M;if(x!==vr){if(Pr=vq,U="onMouseLeave",sr="onMouseEnter",Y="mouse",r==="pointerout"||r==="pointerover")Pr=hq,U="onPointerLeave",sr="onPointerEnter",Y="pointer";if(Go=x==null?J:xr(x),Q=vr==null?J:xr(vr),J=new Pr(U,Y+"leave",x,e,K),J.target=Go,J.relatedTarget=Q,U=null,Mr(K)===M&&(Pr=new Pr(sr,Y+"enter",vr,e,K),Pr.target=Q,Pr.relatedTarget=Go,U=Pr),Go=U,x&&vr)o:{Pr=EG,sr=x,Y=vr,Q=0;for(U=sr;U;U=Pr(U))Q++;U=0;for(var D=Y;D;D=Pr(D))U++;for(;0<Q-U;)sr=Pr(sr),Q--;for(;0<U-Q;)Y=Pr(Y),U--;for(;Q--;){if(sr===Y||Y!==null&&sr===Y.alternate){Pr=sr;break o}sr=Pr(sr),Y=Pr(Y)}Pr=null}else Pr=null;x!==null&&DA($,J,x,Pr,!1),vr!==null&&Go!==null&&DA($,Go,vr,Pr,!0)}}}r:{if(J=M?xr(M):window,x=J.nodeName&&J.nodeName.toLowerCase(),x==="select"||x==="input"&&J.type==="file")var br=i8;else if(g8(J))if(Oq)br=vG;else{br=lG;var $r=gG}else x=J.nodeName,!x||x.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?M&&hh(M.elementType)&&(br=i8):br=iG;if(br&&(br=br(r,M))){l8($,br,e,K);break r}$r&&$r(r,J,M),r==="focusout"&&M&&J.type==="number"&&M.memoizedProps.value!=null&&kw(J,"number",J.value)}switch($r=M?xr(M):window,r){case"focusin":if(g8($r)||$r.contentEditable==="true")wn=$r,A4=M,ph=null;break;case"focusout":ph=A4=wn=null;break;case"mousedown":H4=!0;break;case"contextmenu":case"mouseup":case"dragend":H4=!1,w8($,e,K);break;case"selectionchange":if(NY)break;case"keydown":case"keyup":w8($,e,K)}var Xr;if(O4)r:{switch(r){case"compositionstart":var Wr="onCompositionStart";break r;case"compositionend":Wr="onCompositionEnd";break r;case"compositionupdate":Wr="onCompositionUpdate";break r}Wr=void 0}else un?o8(r,e)&&(Wr="onCompositionEnd"):r==="keydown"&&e.keyCode===tq&&(Wr="onCompositionStart");if(Wr&&(bq&&e.locale!=="ko"&&(un||Wr!=="onCompositionStart"?Wr==="onCompositionEnd"&&un&&(Xr=sP()):(ai=K,b4=("value"in ai)?ai.value:ai.textContent,un=!0)),$r=kb(M,Wr),0<$r.length&&(Wr=new nq(Wr,r,null,e,K),$.push({event:Wr,listeners:$r}),Xr?Wr.data=Xr:(Xr=e8(e),Xr!==null&&(Wr.data=Xr)))),Xr=FY?s3(r,e):rG(r,e))Wr=kb(M,"onBeforeInput"),0<Wr.length&&($r=new qY("onBeforeInput","beforeinput",null,e,K),$.push({event:$r,listeners:Wr}),$r.data=Xr);aG($,r,M,e,K)}TA($,o)})}function Fh(r,o,e){return{instance:r,listener:o,currentTarget:e}}function kb(r,o){for(var e=o+"Capture",l=[];r!==null;){var v=r,n=v.stateNode;if(v=v.tag,v!==5&&v!==26&&v!==27||n===null||(v=bh(r,e),v!=null&&l.unshift(Fh(r,v,n)),v=bh(r,o),v!=null&&l.push(Fh(r,v,n))),r.tag===3)return l;r=r.return}return[]}function EG(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function DA(r,o,e,l,v){for(var n=o._reactName,b=[];e!==null&&e!==l;){var w=e,H=w.alternate,M=w.stateNode;if(w=w.tag,H!==null&&H===l)break;w!==5&&w!==26&&w!==27||M===null||(H=M,v?(M=bh(e,n),M!=null&&b.unshift(Fh(e,M,H))):v||(M=bh(e,n),M!=null&&b.push(Fh(e,M,H)))),e=e.return}b.length!==0&&r.push({event:o,listeners:b})}function Q2(r,o){f3(r,o),r!=="input"&&r!=="textarea"&&r!=="select"||o==null||o.value!==null||lq||(lq=!0,r==="select"&&o.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var e={registrationNameDependencies:pv,possibleRegistrationNames:i4};hh(r)||typeof o.is==="string"||p3(r,o,e),o.contentEditable&&!o.suppressContentEditableWarning&&o.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ne(r,o,e,l){o!==e&&(e=ki(e),ki(o)!==e&&(l[r]=o))}function fG(r,o,e){o.forEach(function(l){e[yA(l)]=l==="style"?U2(r):r.getAttribute(l)})}function Gl(r,o){o===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof o)}function VA(r,o){return r=r.namespaceURI===iu||r.namespaceURI===nn?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=o,r.innerHTML}function ki(r){return rg(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Ye(r)),Eo(r)),(typeof r==="string"?r:""+r).replace(nJ,`
`).replace(hJ,"")}function cA(r,o){return o=ki(o),ki(r)===o?!0:!1}function Ho(r,o,e,l,v,n){switch(e){case"children":if(typeof l==="string")a1(l,o,!1),o==="body"||o==="textarea"&&l===""||nh(r,l);else if(typeof l==="number"||typeof l==="bigint")a1(""+l,o,!1),o!=="body"&&nh(r,""+l);break;case"className":c1(r,"class",l);break;case"tabIndex":c1(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":c1(r,e,l);break;case"style":fP(r,l,n);break;case"data":if(o!=="object"){c1(r,"data",l);break}case"src":case"href":if(l===""&&(o!=="a"||e!=="href")){e==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',e,e):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',e,e),r.removeAttribute(e);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(e);break}wo(l,e),l=th(""+l),r.setAttribute(e,l);break;case"action":case"formAction":if(l!=null&&(o==="form"?e==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(v.encType==null&&v.method==null||au||(au=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),v.target==null||_u||(_u=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):o==="input"||o==="button"?e==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):o!=="input"||v.type==="submit"||v.type==="image"||yu?o!=="button"||v.type==null||v.type==="submit"||yu?typeof l==="function"&&(v.name==null||VM||(VM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),v.formEncType==null&&v.formMethod==null||au||(au=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),v.formTarget==null||_u||(_u=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(yu=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(yu=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):e==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n==="function"&&(e==="formAction"?(o!=="input"&&Ho(r,o,"name",v.name,v,null),Ho(r,o,"formEncType",v.formEncType,v,null),Ho(r,o,"formMethod",v.formMethod,v,null),Ho(r,o,"formTarget",v.formTarget,v,null)):(Ho(r,o,"encType",v.encType,v,null),Ho(r,o,"method",v.method,v,null),Ho(r,o,"target",v.target,v,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(e);break}wo(l,e),l=th(""+l),r.setAttribute(e,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(e,l),r.onclick=yl);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(e,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(e,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(e=l.__html,e!=null){if(v.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=e}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}wo(l,e),e=th(""+l),r.setAttributeNS(O0,"xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(wo(l,e),r.setAttribute(e,""+l)):r.removeAttribute(e);break;case"inert":l!==""||Eu[e]||(Eu[e]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",e));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(e,""):r.removeAttribute(e);break;case"capture":case"download":l===!0?r.setAttribute(e,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(wo(l,e),r.setAttribute(e,l)):r.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(wo(l,e),r.setAttribute(e,l)):r.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(e):(wo(l,e),r.setAttribute(e,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),V1(r,"popover",l);break;case"xlinkActuate":cl(r,O0,"xlink:actuate",l);break;case"xlinkArcrole":cl(r,O0,"xlink:arcrole",l);break;case"xlinkRole":cl(r,O0,"xlink:role",l);break;case"xlinkShow":cl(r,O0,"xlink:show",l);break;case"xlinkTitle":cl(r,O0,"xlink:title",l);break;case"xlinkType":cl(r,O0,"xlink:type",l);break;case"xmlBase":cl(r,t6,"xml:base",l);break;case"xmlLang":cl(r,t6,"xml:lang",l);break;case"xmlSpace":cl(r,t6,"xml:space",l);break;case"is":n!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),V1(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":cM||l==null||typeof l!=="object"||(cM=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N"?(e=jP(e),V1(r,e,l)):pv.hasOwnProperty(e)&&l!=null&&typeof l!=="function"&&Gl(e,l)}}function z2(r,o,e,l,v,n){switch(e){case"style":fP(r,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(e=l.__html,e!=null){if(v.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=e}}break;case"children":typeof l==="string"?nh(r,l):(typeof l==="number"||typeof l==="bigint")&&nh(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(e,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(e,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(e,l),r.onclick=yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(pv.hasOwnProperty(e))l!=null&&typeof l!=="function"&&Gl(e,l);else r:{if(e[0]==="o"&&e[1]==="n"&&(v=e.endsWith("Capture"),o=e.slice(2,v?e.length-7:void 0),n=r[xe]||null,n=n!=null?n[e]:null,typeof n==="function"&&r.removeEventListener(o,n,v),typeof l==="function")){typeof n!=="function"&&n!==null&&(e in r?r[e]=null:r.hasAttribute(e)&&r.removeAttribute(e)),r.addEventListener(o,l,v);break r}e in r?r[e]=l:l===!0?r.setAttribute(e,""):V1(r,e,l)}}}function qe(r,o,e){switch(Q2(o,e),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,v=!1,n;for(n in e)if(e.hasOwnProperty(n)){var b=e[n];if(b!=null)switch(n){case"src":l=!0;break;case"srcSet":v=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ho(r,o,n,b,e,null)}}v&&Ho(r,o,"srcSet",e.srcSet,e,null),l&&Ho(r,o,"src",e.src,e,null);return;case"input":$i("input",e),dr("invalid",r);var w=n=b=v=null,H=null,M=null;for(l in e)if(e.hasOwnProperty(l)){var K=e[l];if(K!=null)switch(l){case"name":v=K;break;case"type":b=K;break;case"checked":H=K;break;case"defaultChecked":M=K;break;case"value":n=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ho(r,o,l,K,e,null)}}FP(r,e),xP(r,n,w,H,M,b,v,!1);return;case"select":$i("select",e),dr("invalid",r),l=b=n=null;for(v in e)if(e.hasOwnProperty(v)&&(w=e[v],w!=null))switch(v){case"value":n=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:Ho(r,o,v,w,e,null)}ZP(r,e),o=n,e=b,r.multiple=!!l,o!=null?Z0(r,!!l,o,!1):e!=null&&Z0(r,!!l,e,!0);return;case"textarea":$i("textarea",e),dr("invalid",r),n=v=l=null;for(b in e)if(e.hasOwnProperty(b)&&(w=e[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":v=w;break;case"children":n=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ho(r,o,b,w,e,null)}CP(r,e),TP(r,l,v,n);return;case"option":NP(r,e);for(H in e)if(e.hasOwnProperty(H)&&(l=e[H],l!=null))switch(H){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Ho(r,o,H,l,e,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<zt.length;l++)dr(zt[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in e)if(e.hasOwnProperty(M)&&(l=e[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ho(r,o,M,l,e,null)}return;default:if(hh(o)){for(K in e)e.hasOwnProperty(K)&&(l=e[K],l!==void 0&&z2(r,o,K,l,e,void 0));return}}for(w in e)e.hasOwnProperty(w)&&(l=e[w],l!=null&&Ho(r,o,w,l,e,null))}function jG(r,o,e,l){switch(Q2(o,l),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var v=null,n=null,b=null,w=null,H=null,M=null,K=null;for(x in e){var $=e[x];if(e.hasOwnProperty(x)&&$!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":H=$;default:l.hasOwnProperty(x)||Ho(r,o,x,null,l,$)}}for(var J in l){var x=l[J];if($=e[J],l.hasOwnProperty(J)&&(x!=null||$!=null))switch(J){case"type":n=x;break;case"name":v=x;break;case"checked":M=x;break;case"defaultChecked":K=x;break;case"value":b=x;break;case"defaultValue":w=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==$&&Ho(r,o,J,x,l,$)}}o=e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,o||!l||DM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),DM=!0),!o||l||kM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),kM=!0),Tw(r,b,w,H,M,K,n,v);return;case"select":x=b=w=J=null;for(n in e)if(H=e[n],e.hasOwnProperty(n)&&H!=null)switch(n){case"value":break;case"multiple":x=H;default:l.hasOwnProperty(n)||Ho(r,o,n,null,l,H)}for(v in l)if(n=l[v],H=e[v],l.hasOwnProperty(v)&&(n!=null||H!=null))switch(v){case"value":J=n;break;case"defaultValue":w=n;break;case"multiple":b=n;default:n!==H&&Ho(r,o,v,n,l,H)}l=w,o=b,e=x,J!=null?Z0(r,!!o,J,!1):!!e!==!!o&&(l!=null?Z0(r,!!o,l,!0):Z0(r,!!o,o?[]:"",!1));return;case"textarea":x=J=null;for(w in e)if(v=e[w],e.hasOwnProperty(w)&&v!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ho(r,o,w,null,l,v)}for(b in l)if(v=l[b],n=e[b],l.hasOwnProperty(b)&&(v!=null||n!=null))switch(b){case"value":J=v;break;case"defaultValue":x=v;break;case"children":break;case"dangerouslySetInnerHTML":if(v!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:v!==n&&Ho(r,o,b,v,l,n)}SP(r,J,x);return;case"option":for(var vr in e)if(J=e[vr],e.hasOwnProperty(vr)&&J!=null&&!l.hasOwnProperty(vr))switch(vr){case"selected":r.selected=!1;break;default:Ho(r,o,vr,null,l,J)}for(H in l)if(J=l[H],x=e[H],l.hasOwnProperty(H)&&J!==x&&(J!=null||x!=null))switch(H){case"selected":r.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:Ho(r,o,H,J,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pr in e)J=e[Pr],e.hasOwnProperty(Pr)&&J!=null&&!l.hasOwnProperty(Pr)&&Ho(r,o,Pr,null,l,J);for(M in l)if(J=l[M],x=e[M],l.hasOwnProperty(M)&&J!==x&&(J!=null||x!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ho(r,o,M,J,l,x)}return;default:if(hh(o)){for(var Go in e)J=e[Go],e.hasOwnProperty(Go)&&J!==void 0&&!l.hasOwnProperty(Go)&&z2(r,o,Go,void 0,l,J);for(K in l)J=l[K],x=e[K],!l.hasOwnProperty(K)||J===x||J===void 0&&x===void 0||z2(r,o,K,J,l,x);return}}for(var sr in e)J=e[sr],e.hasOwnProperty(sr)&&J!=null&&!l.hasOwnProperty(sr)&&Ho(r,o,sr,null,l,J);for($ in l)J=l[$],x=e[$],!l.hasOwnProperty($)||J===x||J==null&&x==null||Ho(r,o,$,J,l,x)}function yA(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function U2(r){var o={};r=r.style;for(var e=0;e<r.length;e++){var l=r[e];o[l]=r.getPropertyValue(l)}return o}function _A(r,o,e){if(o!=null&&typeof o!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,v=l="",n;for(n in o)if(o.hasOwnProperty(n)){var b=o[n];b!=null&&typeof b!=="boolean"&&b!==""&&(n.indexOf("--")===0?(eh(b,n),l+=v+n+":"+(""+b).trim()):typeof b!=="number"||b===0||eq.has(n)?(eh(b,n),l+=v+n.replace(pH,"-$1").toLowerCase().replace(dH,"-ms-")+":"+(""+b).trim()):l+=v+n.replace(pH,"-$1").toLowerCase().replace(dH,"-ms-")+":"+b+"px",v=";")}l=l||null,o=r.getAttribute("style"),o!==l&&(l=ki(l),ki(o)!==l&&(e.style=U2(r)))}}function Jg(r,o,e,l,v,n){if(v.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(wo(l,o),r===""+l)return}ne(o,r,l,n)}function aA(r,o,e,l,v,n){if(v.delete(e),r=r.getAttribute(e),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}ne(o,r,l,n)}function K2(r,o,e,l,v,n){if(v.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(wo(l,e),r===""+l)return}ne(o,r,l,n)}function EA(r,o,e,l,v,n){if(v.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(wo(l,o),r===""+l))return}ne(o,r,l,n)}function $2(r,o,e,l,v,n){if(v.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(wo(l,o),e=th(""+l),r===e)return}ne(o,r,l,n)}function fA(r,o,e,l){for(var v={},n=new Set,b=r.attributes,w=0;w<b.length;w++)switch(b[w].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:n.add(b[w].name)}if(hh(o)){for(var H in e)if(e.hasOwnProperty(H)){var M=e[H];if(M!=null){if(pv.hasOwnProperty(H))typeof M!=="function"&&Gl(H,M);else if(e.suppressHydrationWarning!==!0)switch(H){case"children":typeof M!=="string"&&typeof M!=="number"||ne("children",r.textContent,M,v);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=VA(r,M),ne(H,b,M,v));continue;case"style":n.delete(H),_A(r,M,v);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":n.delete(H.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",H);continue;case"className":n.delete("class"),b=$P(r,"class",M),ne("className",b,M,v);continue;default:l.context===Pi&&o!=="svg"&&o!=="math"?n.delete(H.toLowerCase()):n.delete(H),b=$P(r,H,M),ne(H,b,M,v)}}}}else for(M in e)if(e.hasOwnProperty(M)&&(H=e[M],H!=null)){if(pv.hasOwnProperty(M))typeof H!=="function"&&Gl(M,H);else if(e.suppressHydrationWarning!==!0)switch(M){case"children":typeof H!=="string"&&typeof H!=="number"||ne("children",r.textContent,H,v);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,H=H?H.__html:void 0,H!=null&&(H=VA(r,H),b!==H&&(v[M]={__html:b}));continue;case"className":Jg(r,M,"class",H,n,v);continue;case"tabIndex":Jg(r,M,"tabindex",H,n,v);continue;case"style":n.delete(M),_A(r,H,v);continue;case"multiple":n.delete(M),ne(M,r.multiple,H,v);continue;case"muted":n.delete(M),ne(M,r.muted,H,v);continue;case"autoFocus":n.delete("autofocus"),ne(M,r.autofocus,H,v);continue;case"data":if(o!=="object"){n.delete(M),b=r.getAttribute("data"),ne(M,b,H,v);continue}case"src":case"href":if(!(H!==""||o==="a"&&M==="href"||o==="object"&&M==="data")){M==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M);continue}$2(r,M,M,H,n,v);continue;case"action":case"formAction":if(b=r.getAttribute(M),typeof H==="function"){n.delete(M.toLowerCase()),M==="formAction"?(n.delete("name"),n.delete("formenctype"),n.delete("formmethod"),n.delete("formtarget")):(n.delete("enctype"),n.delete("method"),n.delete("target"));continue}else if(b===tJ){n.delete(M.toLowerCase()),ne(M,"function",H,v);continue}$2(r,M,M.toLowerCase(),H,n,v);continue;case"xlinkHref":$2(r,M,"xlink:href",H,n,v);continue;case"contentEditable":K2(r,M,"contenteditable",H,n,v);continue;case"spellCheck":K2(r,M,"spellcheck",H,n,v);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":K2(r,M,M,H,n,v);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":aA(r,M,M.toLowerCase(),H,n,v);continue;case"capture":case"download":r:{w=r;var K=b=M,$=v;if(n.delete(K),w=w.getAttribute(K),w===null)switch(typeof H){case"undefined":case"function":case"symbol":break r;default:if(H===!1)break r}else if(H!=null)switch(typeof H){case"function":case"symbol":break;case"boolean":if(H===!0&&w==="")break r;break;default:if(wo(H,b),w===""+H)break r}ne(b,w,H,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(w=r,K=b=M,$=v,n.delete(K),w=w.getAttribute(K),w===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(H)||1>H)break r}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(H)||1>H)&&(wo(H,b),w===""+H))break r}ne(b,w,H,$)}continue;case"rowSpan":EA(r,M,"rowspan",H,n,v);continue;case"start":EA(r,M,M,H,n,v);continue;case"xHeight":Jg(r,M,"x-height",H,n,v);continue;case"xlinkActuate":Jg(r,M,"xlink:actuate",H,n,v);continue;case"xlinkArcrole":Jg(r,M,"xlink:arcrole",H,n,v);continue;case"xlinkRole":Jg(r,M,"xlink:role",H,n,v);continue;case"xlinkShow":Jg(r,M,"xlink:show",H,n,v);continue;case"xlinkTitle":Jg(r,M,"xlink:title",H,n,v);continue;case"xlinkType":Jg(r,M,"xlink:type",H,n,v);continue;case"xmlBase":Jg(r,M,"xml:base",H,n,v);continue;case"xmlLang":Jg(r,M,"xml:lang",H,n,v);continue;case"xmlSpace":Jg(r,M,"xml:space",H,n,v);continue;case"inert":H!==""||Eu[M]||(Eu[M]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",M)),aA(r,M,M,H,n,v);continue;default:if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){w=jP(M),b=!1,l.context===Pi&&o!=="svg"&&o!=="math"?n.delete(w.toLowerCase()):(K=M.toLowerCase(),K=vu.hasOwnProperty(K)?vu[K]||null:null,K!==null&&K!==M&&(b=!0,n.delete(K)),n.delete(w));r:if(K=r,$=w,w=H,lh($))if(K.hasAttribute($))K=K.getAttribute($),wo(w,$),w=K===""+w?w:K;else{switch(typeof w){case"function":case"symbol":break r;case"boolean":if(K=$.toLowerCase().slice(0,5),K!=="data-"&&K!=="aria-")break r}w=w===void 0?void 0:null}else w=void 0;b||ne(M,w,H,v)}}}return 0<n.size&&e.suppressHydrationWarning!==!0&&fG(r,n,v),Object.keys(v).length===0?null:v}function pG(r,o){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+o+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+o+" "+r[r.length-1]}}function jA(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dG(){if(typeof performance.getEntriesByType==="function"){for(var r=0,o=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var v=e[l],n=v.transferSize,b=v.initiatorType,w=v.duration;if(n&&w&&jA(b)){b=0,w=v.responseEnd;for(l+=1;l<e.length;l++){var H=e[l],M=H.startTime;if(M>w)break;var{transferSize:K,initiatorType:$}=H;K&&jA($)&&(H=H.responseEnd,b+=K*(H<w?1:(w-M)/(H-M)))}if(--l,o+=8*(n+b)/(v.duration/1000),r++,10<r)break}}if(0<r)return o/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Db(r){return r.nodeType===9?r:r.ownerDocument}function pA(r){switch(r){case nn:return Zn;case iu:return ju;default:return Pi}}function dA(r,o){if(r===Pi)switch(o){case"svg":return Zn;case"math":return ju;default:return Pi}return r===Zn&&o==="foreignObject"?Pi:r}function I2(r,o){return r==="textarea"||r==="noscript"||typeof o.children==="string"||typeof o.children==="number"||typeof o.children==="bigint"||typeof o.dangerouslySetInnerHTML==="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}function sG(){var r=window.event;if(r&&r.type==="popstate"){if(r===P6)return!1;return P6=r,!0}return P6=null,!1}function xh(){var r=window.event;return r&&r!==$t?r.type:null}function Nh(){var r=window.event;return r&&r!==$t?r.timeStamp:-1.1}function rX(r){setTimeout(function(){throw r})}function oX(r,o,e){switch(o){case"button":case"input":case"select":case"textarea":e.autoFocus&&r.focus();break;case"img":e.src?r.src=e.src:e.srcSet&&(r.srcset=e.srcSet)}}function eX(){}function gX(r,o,e,l){jG(r,o,e,l),r[xe]=l}function sA(r){nh(r,"")}function lX(r,o,e){r.nodeValue=e}function rH(r){if(!r.__reactWarnedAboutChildrenConflict){var o=r[xe]||null;if(o!==null){var e=Fr(r);e!==null&&(typeof o.children==="string"||typeof o.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,hr(e,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):o.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,hr(e,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Di(r){return r==="head"}function iX(r,o){r.removeChild(o)}function vX(r,o){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(o)}function oH(r,o){var e=o,l=0;do{var v=e.nextSibling;if(r.removeChild(e),v&&v.nodeType===8)if(e=v.data,e===Kt||e===fu){if(l===0){r.removeChild(v),rn(o);return}l--}else if(e===Ut||e===wv||e===H0||e===Bn||e===A0)l++;else if(e===uJ)Bh(r.ownerDocument.documentElement);else if(e===PJ){e=r.ownerDocument.head,Bh(e);for(var n=e.firstChild;n;){var{nextSibling:b,nodeName:w}=n;n[Vh]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=b}}else e===wJ&&Bh(r.ownerDocument.body);e=v}while(e);rn(o)}function eH(r,o){var e=r;r=0;do{var l=e.nextSibling;if(e.nodeType===1?o?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(o?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e===Kt)if(r===0)break;else r--;else e!==Ut&&e!==wv&&e!==H0&&e!==Bn||r++;e=l}while(e)}function nX(r){eH(r,!0)}function hX(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function tX(r){r.nodeValue=""}function bX(r){eH(r,!1)}function uX(r,o){o=o[OJ],o=o!==void 0&&o!==null&&o.hasOwnProperty("display")?o.display:null,r.style.display=o==null||typeof o==="boolean"?"":(""+o).trim()}function wX(r,o){r.nodeValue=o}function L2(r){var o=r.firstChild;o&&o.nodeType===10&&(o=o.nextSibling);for(;o;){var e=o;switch(o=o.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":L2(e),tr(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}r.removeChild(e)}}function PX(r,o,e,l){for(;r.nodeType===1;){var v=e;if(r.nodeName.toLowerCase()!==o.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(o==="input"&&r.type==="hidden"){wo(v.name,"name");var n=v.name==null?null:""+v.name;if(v.type==="hidden"&&r.getAttribute("name")===n)return r}else return r;else if(!r[Vh])switch(o){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(n=r.getAttribute("rel"),n==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(n!==v.rel||r.getAttribute("href")!==(v.href==null||v.href===""?null:v.href)||r.getAttribute("crossorigin")!==(v.crossOrigin==null?null:v.crossOrigin)||r.getAttribute("title")!==(v.title==null?null:v.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(n=r.getAttribute("src"),(n!==(v.src==null?null:v.src)||r.getAttribute("type")!==(v.type==null?null:v.type)||r.getAttribute("crossorigin")!==(v.crossOrigin==null?null:v.crossOrigin))&&n&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=tg(r.nextSibling),r===null)break}return null}function OX(r,o,e){if(o==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!e)return null;if(r=tg(r.nextSibling),r===null)return null}return r}function gH(r,o){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=tg(r.nextSibling),r===null)return null}return r}function F2(r){return r.data===wv||r.data===H0}function x2(r){return r.data===Bn||r.data===wv&&r.ownerDocument.readyState!==_M}function AX(r,o){var e=r.ownerDocument;if(r.data===H0)r._reactRetry=o;else if(r.data!==wv||e.readyState!==_M)o();else{var l=function(){o(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function tg(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o===Ut||o===Bn||o===wv||o===H0||o===A0||o===b6||o===yM)break;if(o===Kt||o===fu)return null}}return r}function lH(r){if(r.nodeType===1){for(var o=r.nodeName.toLowerCase(),e={},l=r.attributes,v=0;v<l.length;v++){var n=l[v];e[yA(n.name)]=n.name.toLowerCase()==="style"?U2(r):n.value}return{type:o,props:e}}return r.nodeType===8?r.data===A0?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function iH(r,o,e){return e===null||e[bJ]!==!0?(r.nodeValue===o?r=null:(o=ki(o),r=ki(r.nodeValue)===o?null:r.nodeValue),r):null}function N2(r){r=r.nextSibling;for(var o=0;r;){if(r.nodeType===8){var e=r.data;if(e===Kt||e===fu){if(o===0)return tg(r.nextSibling);o--}else e!==Ut&&e!==Bn&&e!==wv&&e!==H0&&e!==A0||o++}r=r.nextSibling}return null}function vH(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var e=r.data;if(e===Ut||e===Bn||e===wv||e===H0||e===A0){if(o===0)return r;o--}else e!==Kt&&e!==fu||o++}r=r.previousSibling}return null}function HX(r){rn(r)}function qX(r){rn(r)}function MX(r){rn(r)}function nH(r,o,e,l,v){switch(v&&_w(r,l.ancestorInfo),o=Db(e),r){case"html":if(r=o.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=o.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=o.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function RX(r,o,e,l){if(!e[_i]&&Fr(e)){var v=e.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",v,v,v)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(v=e.attributes;v.length;)e.removeAttributeNode(v[0]);qe(e,r,o),e[Me]=l,e[xe]=o}function Bh(r){for(var o=r.attributes;o.length;)r.removeAttributeNode(o[0]);tr(r)}function Vb(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function hH(r,o,e){var l=Cn;if(l&&typeof o==="string"&&o){var v=Yg(o);v='link[rel="'+r+'"][href="'+v+'"]',typeof e==="string"&&(v+='[crossorigin="'+e+'"]'),dM.has(v)||(dM.add(v),r={rel:r,crossOrigin:e,href:o},l.querySelector(v)===null&&(o=l.createElement("link"),qe(o,"link",r),Yr(o),l.head.appendChild(o)))}}function tH(r,o,e,l){var v=(v=ci.current)?Vb(v):null;if(!v)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof e.precedence==="string"&&typeof e.href==="string"?(e=d0(e.href),o=go(v).hoistableStyles,l=o.get(e),l||(l={type:"style",instance:null,count:0,state:null},o.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href==="string"&&typeof e.precedence==="string"){r=d0(e.href);var n=go(v).hoistableStyles,b=n.get(r);if(!b&&(v=v.ownerDocument||v,b={type:"stylesheet",instance:null,count:0,state:{loading:M0,preload:null}},n.set(r,b),(n=v.querySelector(Zh(r)))&&!n._p&&(b.instance=n,b.state.loading=It|Bg),!Zg.has(r))){var w={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy};Zg.set(r,w),n||WX(v,r,w,b.state)}if(o&&l===null)throw e=`

  - `+cb(o)+`
  + `+cb(e),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+e);return b}if(o&&l!==null)throw e=`

  - `+cb(o)+`
  + `+cb(e),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+e);return null;case"script":return o=e.async,e=e.src,typeof e==="string"&&o&&typeof o!=="function"&&typeof o!=="symbol"?(e=s0(e),o=go(v).hoistableScripts,l=o.get(e),l||(l={type:"script",instance:null,count:0,state:null},o.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function cb(r){var o=0,e="<link";return typeof r.rel==="string"?(o++,e+=' rel="'+r.rel+'"'):Vg.call(r,"rel")&&(o++,e+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(o++,e+=' href="'+r.href+'"'):Vg.call(r,"href")&&(o++,e+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(o++,e+=' precedence="'+r.precedence+'"'):Vg.call(r,"precedence")&&(o++,e+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>o&&(e+=" ..."),e+" />"}function d0(r){return'href="'+Yg(r)+'"'}function Zh(r){return'link[rel="stylesheet"]['+r+"]"}function bH(r){return ar({},r,{"data-precedence":r.precedence,precedence:null})}function WX(r,o,e,l){r.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=It:(o=r.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=It}),o.addEventListener("error",function(){return l.loading|=jM}),qe(o,"link",e),Yr(o),r.head.appendChild(o))}function s0(r){return'[src="'+Yg(r)+'"]'}function Ch(r){return"script[async]"+r}function uH(r,o,e){if(o.count++,o.instance===null)switch(o.type){case"style":var l=r.querySelector('style[data-href~="'+Yg(e.href)+'"]');if(l)return o.instance=l,Yr(l),l;var v=ar({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),Yr(l),qe(l,"style",v),yb(l,e.precedence,r),o.instance=l;case"stylesheet":v=d0(e.href);var n=r.querySelector(Zh(v));if(n)return o.state.loading|=Bg,o.instance=n,Yr(n),n;l=bH(e),(v=Zg.get(v))&&B2(l,v),n=(r.ownerDocument||r).createElement("link"),Yr(n);var b=n;return b._p=new Promise(function(w,H){b.onload=w,b.onerror=H}),qe(n,"link",l),o.state.loading|=Bg,yb(n,e.precedence,r),o.instance=n;case"script":if(n=s0(e.src),v=r.querySelector(Ch(n)))return o.instance=v,Yr(v),v;if(l=e,v=Zg.get(n))l=ar({},e),Z2(l,v);return r=r.ownerDocument||r,v=r.createElement("script"),Yr(v),qe(v,"link",l),r.head.appendChild(v),o.instance=v;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+o.type+'". this is a bug in React.')}else o.type==="stylesheet"&&(o.state.loading&Bg)===M0&&(l=o.instance,o.state.loading|=Bg,yb(l,e.precedence,r));return o.instance}function yb(r,o,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),v=l.length?l[l.length-1]:null,n=v,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===o)n=w;else if(n!==v)break}n?n.parentNode.insertBefore(r,n.nextSibling):(o=e.nodeType===9?e.head:e,o.insertBefore(r,o.firstChild))}function B2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.title==null&&(r.title=o.title)}function Z2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.integrity==null&&(r.integrity=o.integrity)}function wH(r,o,e){if(pu===null){var l=new Map,v=pu=new Map;v.set(e,l)}else v=pu,l=v.get(e),l||(l=new Map,v.set(e,l));if(l.has(r))return l;l.set(r,null),e=e.getElementsByTagName(r);for(v=0;v<e.length;v++){var n=e[v];if(!(n[Vh]||n[Me]||r==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!==nn){var b=n.getAttribute(o)||"";b=r+b;var w=l.get(b);w?w.push(n):l.set(b,[n])}}return l}function PH(r,o,e){r=r.ownerDocument||r,r.head.insertBefore(e,o==="title"?r.querySelector("head > title"):null)}function mX(r,o,e){var l=!e.ancestorInfo.containerTagInScope;if(e.context===Zn||o.itemProp!=null)return!l||o.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof o.precedence!=="string"||typeof o.href!=="string"||o.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""||o.onLoad||o.onError){if(o.rel==="stylesheet"&&typeof o.precedence==="string"){r=o.href;var{onError:v,disabled:n}=o;e=[],o.onLoad&&e.push("`onLoad`"),v&&e.push("`onError`"),n!=null&&e.push("`disabled`"),v=pG(e,"and"),v+=e.length===1?" prop":" props",n=e.length===1?"an "+v:"the "+v,e.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,n,v)}l&&(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(o.onError||o.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(o.rel){case"stylesheet":return r=o.precedence,o=o.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&o==null;default:return!0}case"script":if(r=o.async&&typeof o.async!=="function"&&typeof o.async!=="symbol",!r||o.onLoad||o.onError||!o.src||typeof o.src!=="string"){l&&(r?o.onLoad||o.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function OH(r){return r.type==="stylesheet"&&(r.state.loading&pM)===M0?!1:!0}function GX(r,o,e,l){if(e.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&Bg)===M0){if(e.instance===null){var v=d0(l.href),n=o.querySelector(Zh(v));if(n){o=n._p,o!==null&&typeof o==="object"&&typeof o.then==="function"&&(r.count++,r=_b.bind(r),o.then(r,r)),e.state.loading|=Bg,e.instance=n,Yr(n);return}n=o.ownerDocument||o,l=bH(l),(v=Zg.get(v))&&B2(l,v),n=n.createElement("link"),Yr(n);var b=n;b._p=new Promise(function(w,H){b.onload=w,b.onerror=H}),qe(n,"link",l),e.instance=n}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,o),(o=e.state.preload)&&(e.state.loading&pM)===M0&&(r.count++,e=_b.bind(r),o.addEventListener("load",e),o.addEventListener("error",e))}}function XX(r,o){return r.stylesheets&&r.count===0&&ab(r,r.stylesheets),0<r.count||0<r.imgCount?function(e){var l=setTimeout(function(){if(r.stylesheets&&ab(r,r.stylesheets),r.unsuspend){var n=r.unsuspend;r.unsuspend=null,n()}},qJ+o);0<r.imgBytes&&A6===0&&(A6=125*dG()*RJ);var v=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&ab(r,r.stylesheets),r.unsuspend)){var n=r.unsuspend;r.unsuspend=null,n()}},(r.imgBytes>A6?50:MJ)+o);return r.unsuspend=e,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(v)}}:null}function _b(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ab(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function ab(r,o){r.stylesheets=null,r.unsuspend!==null&&(r.count++,du=new Map,o.forEach(YX,r),du=null,_b.call(r))}function YX(r,o){if(!(o.state.loading&Bg)){var e=du.get(r);if(e)var l=e.get(H6);else{e=new Map,du.set(r,e);for(var v=r.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<v.length;n++){var b=v[n];if(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")e.set(b.dataset.precedence,b),l=b}l&&e.set(H6,l)}v=o.instance,b=v.getAttribute("data-precedence"),n=e.get(b)||l,n===l&&e.set(H6,v),e.set(b,v),this.count++,l=_b.bind(this),v.addEventListener("load",l),v.addEventListener("error",l),n?n.parentNode.insertBefore(v,n.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(v,r.firstChild)),o.state.loading|=Bg}}function JX(r,o,e,l,v,n,b,w,H){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=q0,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=B0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=B0(0),this.hiddenUpdates=B0(null),this.identifierPrefix=l,this.onUncaughtError=v,this.onCaughtError=n,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(o=0;31>o;o++)r.push(new Set);this._debugRootType=e?"hydrateRoot()":"createRoot()"}function AH(r,o,e,l,v,n,b,w,H,M,K,$){return r=new JX(r,o,e,b,H,M,K,$,w),o=cY,n===!0&&(o|=Ue|yg),o|=kr,n=X(3,null,null,o),r.current=n,n.stateNode=r,o=u5(),cv(o),r.pooledCache=o,cv(o),n.memoizedState={element:l,isDehydrated:e,cache:o},H5(n),r}function HH(r){if(!r)return ji;return r=ji,r}function C2(r,o,e,l,v,n){if(ze&&typeof ze.onScheduleFiberRoot==="function")try{ze.onScheduleFiberRoot(ln,l,e)}catch(b){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",b))}v=HH(v),l.context===null?l.context=v:l.pendingContext=v,Jl&&ug!==null&&!eR&&(eR=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,C(ug)||"Unknown")),l=Ni(o),l.payload={element:e},n=n===void 0?null:n,n!==null&&(typeof n!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",n),l.callback=n),e=Bi(r,l,o),e!==null&&(bl(o,"root.render()",null),No(e,r,o),Mh(e,r,o))}function qH(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var e=r.retryLane;r.retryLane=e!==0&&e<o?e:o}}function S2(r,o){qH(r,o),(r=r.alternate)&&qH(r,o)}function MH(r){if(r.tag===13||r.tag===31){var o=Qe(r,67108864);o!==null&&No(o,r,67108864),S2(r,67108864)}}function RH(r){if(r.tag===13||r.tag===31){var o=hg(r);o=Nv(o);var e=Qe(r,o);e!==null&&No(e,r,o),S2(r,o)}}function QX(){return ug}function zX(r,o,e,l){var v=S.T;S.T=null;var n=ho.p;try{ho.p=wg,T2(r,o,e,l)}finally{ho.p=n,S.T=v}}function UX(r,o,e,l){var v=S.T;S.T=null;var n=ho.p;try{ho.p=cg,T2(r,o,e,l)}finally{ho.p=n,S.T=v}}function T2(r,o,e,l){if(rw){var v=k2(l);if(v===null)J2(r,o,l,ow,e),mH(r,l);else if(KX(v,r,o,e,l))l.stopPropagation();else if(mH(r,l),o&4&&-1<mJ.indexOf(r)){for(;v!==null;){var n=Fr(v);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var b=vl(n.pendingLanes);if(b!==0){var w=n;w.pendingLanes|=2;for(w.entangledLanes|=2;b;){var H=1<<31-Fe(b);w.entanglements[1]|=H,b&=~H}ml(n),(eo&(ve|Hg))===ue&&(Zu=he()+$M,Lh(0,!1))}}break;case 31:case 13:w=Qe(n,2),w!==null&&No(w,n,2),f0(),S2(n,2)}if(n=k2(l),n===null&&J2(r,o,l,ow,e),n===v)break;v=n}v!==null&&l.stopPropagation()}else J2(r,o,l,null,e)}}function k2(r){return r=aw(r),D2(r)}function D2(r){if(ow=null,r=Mr(r),r!==null){var o=rr(r);if(o===null)r=null;else{var e=o.tag;if(e===13){if(r=ur(o),r!==null)return r;r=null}else if(e===31){if(r=lr(o),r!==null)return r;r=null}else if(e===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null)}}return ow=r,null}function WH(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return wg;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return cg;case"message":switch(CX()){case o4:return wg;case e4:return cg;case gn:case SX:return Ul;case g4:return gu;default:return Ul}default:return Ul}}function mH(r,o){switch(r){case"focusin":case"focusout":Pv=null;break;case"dragenter":case"dragleave":Ov=null;break;case"mouseover":case"mouseout":Av=null;break;case"pointerover":case"pointerout":Ft.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":xt.delete(o.pointerId)}}function Sh(r,o,e,l,v,n){if(r===null||r.nativeEvent!==n)return r={blockedOn:o,domEventName:e,eventSystemFlags:l,nativeEvent:n,targetContainers:[v]},o!==null&&(o=Fr(o),o!==null&&MH(o)),r;return r.eventSystemFlags|=l,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r}function KX(r,o,e,l,v){switch(o){case"focusin":return Pv=Sh(Pv,r,o,e,l,v),!0;case"dragenter":return Ov=Sh(Ov,r,o,e,l,v),!0;case"mouseover":return Av=Sh(Av,r,o,e,l,v),!0;case"pointerover":var n=v.pointerId;return Ft.set(n,Sh(Ft.get(n)||null,r,o,e,l,v)),!0;case"gotpointercapture":return n=v.pointerId,xt.set(n,Sh(xt.get(n)||null,r,o,e,l,v)),!0}return!1}function GH(r){var o=Mr(r.target);if(o!==null){var e=rr(o);if(e!==null){if(o=e.tag,o===13){if(o=ur(e),o!==null){r.blockedOn=o,or(r.priority,function(){RH(e)});return}}else if(o===31){if(o=lr(e),o!==null){r.blockedOn=o,or(r.priority,function(){RH(e)});return}}else if(o===3&&e.stateNode.current.memoizedState.isDehydrated){r.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Eb(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var e=k2(r.nativeEvent);if(e===null){e=r.nativeEvent;var l=new e.constructor(e.type,e),v=l;ch!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),ch=v,e.target.dispatchEvent(l),ch===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),ch=null}else return o=Fr(e),o!==null&&MH(o),r.blockedOn=e,!1;o.shift()}return!0}function XH(r,o,e){Eb(r)&&e.delete(o)}function $X(){q6=!1,Pv!==null&&Eb(Pv)&&(Pv=null),Ov!==null&&Eb(Ov)&&(Ov=null),Av!==null&&Eb(Av)&&(Av=null),Ft.forEach(XH),xt.forEach(XH)}function fb(r,o){r.blockedOn===o&&(r.blockedOn=null,q6||(q6=!0,lo.unstable_scheduleCallback(lo.unstable_NormalPriority,$X)))}function YH(r){ew!==r&&(ew=r,lo.unstable_scheduleCallback(lo.unstable_NormalPriority,function(){ew===r&&(ew=null);for(var o=0;o<r.length;o+=3){var e=r[o],l=r[o+1],v=r[o+2];if(typeof l!=="function")if(D2(l||e)===null)continue;else break;var n=Fr(e);n!==null&&(r.splice(o,3),o-=3,e={pending:!0,data:v,method:e.method,action:l},Object.freeze(e),D5(n,e,l,v))}}))}function rn(r){function o(H){return fb(H,r)}Pv!==null&&fb(Pv,r),Ov!==null&&fb(Ov,r),Av!==null&&fb(Av,r),Ft.forEach(o),xt.forEach(o);for(var e=0;e<Hv.length;e++){var l=Hv[e];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Hv.length&&(e=Hv[0],e.blockedOn===null);)GH(e),e.blockedOn===null&&Hv.shift();if(e=(r.ownerDocument||r).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var v=e[l],n=e[l+1],b=v[xe]||null;if(typeof n==="function")b||YH(e);else if(b){var w=null;if(n&&n.hasAttribute("formAction")){if(v=n,b=n[xe]||null)w=b.formAction;else if(D2(v)!==null)continue}else w=b.action;typeof w==="function"?e[l+1]=w:(e.splice(l,3),l-=3),YH(e)}}}function JH(){function r(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(b){return v=b})},focusReset:"manual",scroll:"manual"})}function o(){v!==null&&(v(),v=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,v=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",o),navigation.addEventListener("navigateerror",o),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",o),navigation.removeEventListener("navigateerror",o),v!==null&&(v(),v=null)}}}function V2(r){this._internalRoot=r}function jb(r){this._internalRoot=r}function QH(r){r[_i]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var ar=Object.assign,IX=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),on=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),pb=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),y2=Symbol.for("react.consumer"),Yl=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),_2=Symbol.for("react.suspense"),a2=Symbol.for("react.suspense_list"),db=Symbol.for("react.memo"),bg=Symbol.for("react.lazy"),E2=Symbol.for("react.activity"),LX=Symbol.for("react.memo_cache_sentinel"),zH=Symbol.iterator,FX=Symbol.for("react.client.reference"),le=Array.isArray,S=Tn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ho=W6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xX=Object.freeze({pending:!1,data:null,method:null,action:null}),f2=[],j2=[],sl=-1,Vi=Rr(null),kh=Rr(null),ci=Rr(null),sb=Rr(null),Dh=0,UH,KH,$H,IH,LH,FH,xH;V.__reactDisabledLog=!0;var p2,NH,d2=!1,s2=new(typeof WeakMap==="function"?WeakMap:Map),ug=null,Jl=!1,Vg=Object.prototype.hasOwnProperty,r4=lo.unstable_scheduleCallback,NX=lo.unstable_cancelCallback,BX=lo.unstable_shouldYield,ZX=lo.unstable_requestPaint,he=lo.unstable_now,CX=lo.unstable_getCurrentPriorityLevel,o4=lo.unstable_ImmediatePriority,e4=lo.unstable_UserBlockingPriority,gn=lo.unstable_NormalPriority,SX=lo.unstable_LowPriority,g4=lo.unstable_IdlePriority,TX=lo.log,kX=lo.unstable_setDisableYieldValue,ln=null,ze=null,Ql=!1,zl=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Fe=Math.clz32?Math.clz32:k1,DX=Math.log,VX=Math.LN2,ru=256,ou=262144,eu=4194304,wg=2,cg=8,Ul=32,gu=268435456,yi=Math.random().toString(36).slice(2),Me="__reactFiber$"+yi,xe="__reactProps$"+yi,_i="__reactContainer$"+yi,l4="__reactEvents$"+yi,cX="__reactListeners$"+yi,yX="__reactHandles$"+yi,BH="__reactResources$"+yi,Vh="__reactMarker$"+yi,ZH=new Set,pv={},i4={},_X={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},aX=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),CH={},SH={},EX=/[\n"\\]/g,TH=!1,kH=!1,DH=!1,VH=!1,cH=!1,yH=!1,_H=["value","defaultValue"],aH=!1,EH=/["'&<>\n\t]|^\s|\s$/,fX="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),fH="applet caption html table td th marquee object template foreignObject desc title".split(" "),jX=fH.concat(["button"]),pX="dd dt li option optgroup p rp rt".split(" "),jH={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},lu={},v4={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},pH=/([A-Z])/g,dH=/^ms-/,dX=/^(?:webkit|moz|o)[A-Z]/,sX=/^-ms-/,rY=/-(.)/g,sH=/;\s*$/,vn={},n4={},rq=!1,oq=!1,eq=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),iu="http://www.w3.org/1998/Math/MathML",nn="http://www.w3.org/2000/svg",oY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gq={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},hn={},eY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lq=!1,Ne={},iq=/^on./,lY=/^on[^A-Z]/,iY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nY=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,ch=null,tn=null,bn=null,h4=!1,Kl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),t4=!1;if(Kl)try{var yh={};Object.defineProperty(yh,"passive",{get:function(){t4=!0}}),window.addEventListener("test",yh,yh),window.removeEventListener("test",yh,yh)}catch(r){t4=!1}var ai=null,b4=null,nu=null,dv={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=_e(dv),_h=ar({},dv,{view:0,detail:0}),hY=_e(_h),u4,w4,ah,tu=ar({},_h,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ew,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==ah&&(ah&&r.type==="mousemove"?(u4=r.screenX-ah.screenX,w4=r.screenY-ah.screenY):w4=u4=0,ah=r),u4},movementY:function(r){return"movementY"in r?r.movementY:w4}}),vq=_e(tu),tY=ar({},tu,{dataTransfer:0}),bY=_e(tY),uY=ar({},_h,{relatedTarget:0}),P4=_e(uY),wY=ar({},dv,{animationName:0,elapsedTime:0,pseudoElement:0}),PY=_e(wY),OY=ar({},dv,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),AY=_e(OY),HY=ar({},dv,{data:0}),nq=_e(HY),qY=nq,MY={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RY={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WY={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},mY=ar({},_h,{key:function(r){if(r.key){var o=MY[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=E1(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?RY[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ew,charCode:function(r){return r.type==="keypress"?E1(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?E1(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),GY=_e(mY),XY=ar({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hq=_e(XY),YY=ar({},_h,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ew}),JY=_e(YY),QY=ar({},dv,{propertyName:0,elapsedTime:0,pseudoElement:0}),zY=_e(QY),UY=ar({},tu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),KY=_e(UY),$Y=ar({},dv,{newState:0,oldState:0}),IY=_e($Y),LY=[9,13,27,32],tq=229,O4=Kl&&"CompositionEvent"in window,Eh=null;Kl&&"documentMode"in document&&(Eh=document.documentMode);var FY=Kl&&"TextEvent"in window&&!Eh,bq=Kl&&(!O4||Eh&&8<Eh&&11>=Eh),uq=32,wq=String.fromCharCode(uq),Pq=!1,un=!1,xY={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},fh=null,jh=null,Oq=!1;Kl&&(Oq=oG("input")&&(!document.documentMode||9<document.documentMode));var Be=typeof Object.is==="function"?Object.is:nG,NY=Kl&&"documentMode"in document&&11>=document.documentMode,wn=null,A4=null,ph=null,H4=!1,Pn={animationend:Zv("Animation","AnimationEnd"),animationiteration:Zv("Animation","AnimationIteration"),animationstart:Zv("Animation","AnimationStart"),transitionrun:Zv("Transition","TransitionRun"),transitionstart:Zv("Transition","TransitionStart"),transitioncancel:Zv("Transition","TransitionCancel"),transitionend:Zv("Transition","TransitionEnd")},q4={},Aq={};Kl&&(Aq=document.createElement("div").style,("AnimationEvent"in window)||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),("TransitionEvent"in window)||delete Pn.transitionend.transition);var Hq=Cv("animationend"),qq=Cv("animationiteration"),Mq=Cv("animationstart"),BY=Cv("transitionrun"),ZY=Cv("transitionstart"),CY=Cv("transitioncancel"),Rq=Cv("transitionend"),Wq=new Map,M4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");M4.push("scrollEnd");var mq=0;if(typeof performance==="object"&&typeof performance.now==="function")var SY=performance,Gq=function(){return SY.now()};else{var TY=Date;Gq=function(){return TY.now()}}var R4=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(o))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},kY="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bu=0,W4=1,m4=2,G4=3,uu="– ",wu="+ ",Xq="  ",Jo=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",Qg="Components ⚛",Er="Scheduler ⚛",fr="Blocking",Ei=!1,ri={color:"primary",properties:null,tooltipText:"",track:Qg},fi={start:-0,end:-0,detail:{devtools:ri}},DY=["Changed Props",""],Yq="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",VY=["Changed Props",Yq],dh=1,oi=2,zg=[],On=0,X4=0,ji={};Object.freeze(ji);var Ug=null,An=null,Ur=0,cY=1,kr=2,Ue=8,yg=16,yY=32,Jq=!1;try{var Qq=Object.preventExtensions({})}catch(r){Jq=!0}var Y4=new WeakMap,Hn=[],qn=0,Pu=null,sh=0,Kg=[],$g=0,sv=null,ei=1,gi="",Re=null,Qo=null,pr=!1,$l=!1,Pg=null,pi=null,Ig=!1,J4=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Q4=Rr(null),z4=Rr(null),zq={},Ou=null,Mn=null,Rn=!1,_Y=typeof AbortController<"u"?AbortController:function(){var r=[],o=this.signal={aborted:!1,addEventListener:function(e,l){r.push(l)}};this.abort=function(){o.aborted=!0,r.forEach(function(e){return e()})}},aY=lo.unstable_scheduleCallback,EY=lo.unstable_NormalPriority,fo={$$typeof:Yl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},jo=lo.unstable_now,Au=console.createTask?console.createTask:function(){return null},rt=1,Hu=2,te=-0,di=-0,li=-0,ii=null,Ze=-1.1,r0=-0,Lo=-0,Jr=-1.1,zr=-1.1,$o=null,Bo=!1,si=-0,Il=-1.1,ot=null,rv=0,U4=null,K4=null,o0=-1.1,et=null,Wn=-1.1,qu=-1.1,Ll=-0,vi=-1.1,Lg=-1.1,$4=0,gt=null,Uq=null,Kq=null,ov=-1.1,e0=null,ev=-1.1,Mu=-1.1,$q=-0,Iq=-0,Ru=0,ni=null,Lq=0,lt=-1.1,Wu=!1,mu=!1,it=null,I4=0,g0=0,mn=null,Fq=S.S;S.S=function(r,o){if(UM=he(),typeof o==="object"&&o!==null&&typeof o.then==="function"){if(0>vi&&0>Lg){vi=jo();var e=Nh(),l=xh();if(e!==ev||l!==e0)ev=-1.1;ov=e,e0=l}OG(r,o)}Fq!==null&&Fq(r,o)};var l0=Rr(null),_g={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},vt=[],nt=[],ht=[],tt=[],bt=[],ut=[],i0=new Set;_g.recordUnsafeLifecycleWarnings=function(r,o){i0.has(r.type)||(typeof o.componentWillMount==="function"&&o.componentWillMount.__suppressDeprecationWarning!==!0&&vt.push(r),r.mode&Ue&&typeof o.UNSAFE_componentWillMount==="function"&&nt.push(r),typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&ht.push(r),r.mode&Ue&&typeof o.UNSAFE_componentWillReceiveProps==="function"&&tt.push(r),typeof o.componentWillUpdate==="function"&&o.componentWillUpdate.__suppressDeprecationWarning!==!0&&bt.push(r),r.mode&Ue&&typeof o.UNSAFE_componentWillUpdate==="function"&&ut.push(r))},_g.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<vt.length&&(vt.forEach(function(w){r.add(C(w)||"Component"),i0.add(w.type)}),vt=[]);var o=new Set;0<nt.length&&(nt.forEach(function(w){o.add(C(w)||"Component"),i0.add(w.type)}),nt=[]);var e=new Set;0<ht.length&&(ht.forEach(function(w){e.add(C(w)||"Component"),i0.add(w.type)}),ht=[]);var l=new Set;0<tt.length&&(tt.forEach(function(w){l.add(C(w)||"Component"),i0.add(w.type)}),tt=[]);var v=new Set;0<bt.length&&(bt.forEach(function(w){v.add(C(w)||"Component"),i0.add(w.type)}),bt=[]);var n=new Set;if(0<ut.length&&(ut.forEach(function(w){n.add(C(w)||"Component"),i0.add(w.type)}),ut=[]),0<o.size){var b=q(o);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,b)}0<l.size&&(b=q(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,b)),0<n.size&&(b=q(n),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,b)),0<r.size&&(b=q(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<e.size&&(b=q(e),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<v.size&&(b=q(v),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b))};var Gu=new Map,xq=new Set;_g.recordLegacyContextWarning=function(r,o){var e=null;for(var l=r;l!==null;)l.mode&Ue&&(e=l),l=l.return;e===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!xq.has(r.type)&&(l=Gu.get(e),r.type.contextTypes!=null||r.type.childContextTypes!=null||o!==null&&typeof o.getChildContext==="function")&&(l===void 0&&(l=[],Gu.set(e,l)),l.push(r))},_g.flushLegacyContextWarning=function(){Gu.forEach(function(r){if(r.length!==0){var o=r[0],e=new Set;r.forEach(function(v){e.add(C(v)||"Component"),xq.add(v.type)});var l=q(e);hr(o,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},_g.discardPendingWarnings=function(){vt=[],nt=[],ht=[],tt=[],bt=[],ut=[],Gu=new Map};var Nq={react_stack_bottom_frame:function(r,o,e){var l=Jl;Jl=!0;try{return r(o,e)}finally{Jl=l}}},L4=Nq.react_stack_bottom_frame.bind(Nq),Bq={react_stack_bottom_frame:function(r){var o=Jl;Jl=!0;try{return r.render()}finally{Jl=o}}},Zq=Bq.react_stack_bottom_frame.bind(Bq),Cq={react_stack_bottom_frame:function(r,o){try{o.componentDidMount()}catch(e){no(r,r.return,e)}}},F4=Cq.react_stack_bottom_frame.bind(Cq),Sq={react_stack_bottom_frame:function(r,o,e,l,v){try{o.componentDidUpdate(e,l,v)}catch(n){no(r,r.return,n)}}},Tq=Sq.react_stack_bottom_frame.bind(Sq),kq={react_stack_bottom_frame:function(r,o){var e=o.stack;r.componentDidCatch(o.value,{componentStack:e!==null?e:""})}},fY=kq.react_stack_bottom_frame.bind(kq),Dq={react_stack_bottom_frame:function(r,o,e){try{e.componentWillUnmount()}catch(l){no(r,o,l)}}},Vq=Dq.react_stack_bottom_frame.bind(Dq),cq={react_stack_bottom_frame:function(r){var o=r.create;return r=r.inst,o=o(),r.destroy=o}},jY=cq.react_stack_bottom_frame.bind(cq),yq={react_stack_bottom_frame:function(r,o,e){try{e()}catch(l){no(r,o,l)}}},pY=yq.react_stack_bottom_frame.bind(yq),_q={react_stack_bottom_frame:function(r){var o=r._init;return o(r._payload)}},dY=_q.react_stack_bottom_frame.bind(_q),Gn=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),x4=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Yu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},v0=null,wt=!1,Xn=null,Pt=0,Dr=null,N4,aq=N4=!1,Eq={},fq={},jq={};m=function(r,o,e){if(e!==null&&typeof e==="object"&&e._store&&(!e._store.validated&&e.key==null||e._store.validated===2)){if(typeof e._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=1;var l=C(r),v=l||"null";if(!Eq[v]){Eq[v]=!0,e=e._owner,r=r._debugOwner;var n="";r&&typeof r.tag==="number"&&(v=C(r))&&(n=`

Check the render method of \``+v+"`."),n||l&&(n=`

Check the top-level render call using <`+l+">.");var b="";e!=null&&r!==e&&(l=null,typeof e.tag==="number"?l=C(e):typeof e.name==="string"&&(l=e.name),l&&(b=" It was passed a child from "+l+".")),hr(o,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',n,b)})}}};var n0=D8(!0),pq=D8(!1),dq=0,sq=1,rM=2,B4=3,gv=!1,oM=!1,Z4=null,C4=!1,Yn=Rr(null),Ju=Rr(0),Og=Rr(null),Fg=null,Jn=1,Ot=2,Vo=Rr(0),Qu=0,xg=1,Ce=2,Ag=4,Se=8,Qn,eM=new Set,gM=new Set,S4=new Set,lM=new Set,hi=0,Kr=null,qo=null,po=null,zu=!1,zn=!1,h0=!1,Uu=0,At=0,ti=null,sY=0,rJ=25,B=null,Ng=null,bi=-1,Ht=!1,qt={readContext:Ko,use:Si,useCallback:So,useContext:So,useEffect:So,useImperativeHandle:So,useLayoutEffect:So,useInsertionEffect:So,useMemo:So,useReducer:So,useRef:So,useState:So,useDebugValue:So,useDeferredValue:So,useTransition:So,useSyncExternalStore:So,useId:So,useHostTransitionStatus:So,useFormState:So,useActionState:So,useOptimistic:So,useMemoCache:So,useCacheRefresh:So};qt.useEffectEvent=So;var T4=null,iM=null,k4=null,vM=null,Fl=null,ag=null,Ku=null;T4={readContext:function(r){return Ko(r)},use:Si,useCallback:function(r,o){return B="useCallback",_r(),D0(o),C5(r,o)},useContext:function(r){return B="useContext",_r(),Ko(r)},useEffect:function(r,o){return B="useEffect",_r(),D0(o),Gb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",_r(),D0(e),Z5(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",_r(),D0(o),_v(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",_r(),D0(o),B5(r,o)},useMemo:function(r,o){B="useMemo",_r(),D0(o);var e=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",_r();var l=S.H;S.H=Fl;try{return z5(r,o,e)}finally{S.H=l}},useRef:function(r){return B="useRef",_r(),x5(r)},useState:function(r){B="useState",_r();var o=S.H;S.H=Fl;try{return I5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",_r()},useDeferredValue:function(r,o){return B="useDeferredValue",_r(),T5(r,o)},useTransition:function(){return B="useTransition",_r(),V5()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",_r(),K5(r,o,e)},useId:function(){return B="useId",_r(),c5()},useFormState:function(r,o){return B="useFormState",_r(),qb(),c0(r,o)},useActionState:function(r,o){return B="useActionState",_r(),c0(r,o)},useOptimistic:function(r){return B="useOptimistic",_r(),L5(r)},useHostTransitionStatus:av,useMemoCache:yv,useCacheRefresh:function(){return B="useCacheRefresh",_r(),y5()},useEffectEvent:function(r){return B="useEffectEvent",_r(),N5(r)}},iM={readContext:function(r){return Ko(r)},use:Si,useCallback:function(r,o){return B="useCallback",d(),C5(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){return B="useEffect",d(),Gb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",d(),Z5(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",d(),_v(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),B5(r,o)},useMemo:function(r,o){B="useMemo",d();var e=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",d();var l=S.H;S.H=Fl;try{return z5(r,o,e)}finally{S.H=l}},useRef:function(r){return B="useRef",d(),x5(r)},useState:function(r){B="useState",d();var o=S.H;S.H=Fl;try{return I5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),T5(r,o)},useTransition:function(){return B="useTransition",d(),V5()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",d(),K5(r,o,e)},useId:function(){return B="useId",d(),c5()},useActionState:function(r,o){return B="useActionState",d(),c0(r,o)},useFormState:function(r,o){return B="useFormState",d(),qb(),c0(r,o)},useOptimistic:function(r){return B="useOptimistic",d(),L5(r)},useHostTransitionStatus:av,useMemoCache:yv,useCacheRefresh:function(){return B="useCacheRefresh",d(),y5()},useEffectEvent:function(r){return B="useEffectEvent",d(),N5(r)}},k4={readContext:function(r){return Ko(r)},use:Si,useCallback:function(r,o){return B="useCallback",d(),Jb(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){B="useEffect",d(),ae(2048,Se,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",d(),Yb(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",d(),ae(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),ae(4,Ag,r,o)},useMemo:function(r,o){B="useMemo",d();var e=S.H;S.H=ag;try{return Qb(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",d();var l=S.H;S.H=ag;try{return V0(r,o,e)}finally{S.H=l}},useRef:function(){return B="useRef",d(),bo().memoizedState},useState:function(){B="useState",d();var r=S.H;S.H=ag;try{return V0(kg)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),bO(r,o)},useTransition:function(){return B="useTransition",d(),HO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",d(),Rb(r,o,e)},useId:function(){return B="useId",d(),bo().memoizedState},useFormState:function(r){return B="useFormState",d(),qb(),Wb(r)},useActionState:function(r){return B="useActionState",d(),Wb(r)},useOptimistic:function(r,o){return B="useOptimistic",d(),rO(r,o)},useHostTransitionStatus:av,useMemoCache:yv,useCacheRefresh:function(){return B="useCacheRefresh",d(),bo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Xb(r)}},vM={readContext:function(r){return Ko(r)},use:Si,useCallback:function(r,o){return B="useCallback",d(),Jb(r,o)},useContext:function(r){return B="useContext",d(),Ko(r)},useEffect:function(r,o){B="useEffect",d(),ae(2048,Se,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",d(),Yb(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",d(),ae(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",d(),ae(4,Ag,r,o)},useMemo:function(r,o){B="useMemo",d();var e=S.H;S.H=Ku;try{return Qb(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",d();var l=S.H;S.H=Ku;try{return Gh(r,o,e)}finally{S.H=l}},useRef:function(){return B="useRef",d(),bo().memoizedState},useState:function(){B="useState",d();var r=S.H;S.H=Ku;try{return Gh(kg)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,o){return B="useDeferredValue",d(),uO(r,o)},useTransition:function(){return B="useTransition",d(),qO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",d(),Rb(r,o,e)},useId:function(){return B="useId",d(),bo().memoizedState},useFormState:function(r){return B="useFormState",d(),qb(),mb(r)},useActionState:function(r){return B="useActionState",d(),mb(r)},useOptimistic:function(r,o){return B="useOptimistic",d(),eO(r,o)},useHostTransitionStatus:av,useMemoCache:yv,useCacheRefresh:function(){return B="useCacheRefresh",d(),bo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Xb(r)}},Fl={readContext:function(r){return W(),Ko(r)},use:function(r){return A(),Si(r)},useCallback:function(r,o){return B="useCallback",A(),_r(),C5(r,o)},useContext:function(r){return B="useContext",A(),_r(),Ko(r)},useEffect:function(r,o){return B="useEffect",A(),_r(),Gb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",A(),_r(),Z5(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",A(),_r(),_v(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",A(),_r(),B5(r,o)},useMemo:function(r,o){B="useMemo",A(),_r();var e=S.H;S.H=Fl;try{return S5(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",A(),_r();var l=S.H;S.H=Fl;try{return z5(r,o,e)}finally{S.H=l}},useRef:function(r){return B="useRef",A(),_r(),x5(r)},useState:function(r){B="useState",A(),_r();var o=S.H;S.H=Fl;try{return I5(r)}finally{S.H=o}},useDebugValue:function(){B="useDebugValue",A(),_r()},useDeferredValue:function(r,o){return B="useDeferredValue",A(),_r(),T5(r,o)},useTransition:function(){return B="useTransition",A(),_r(),V5()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",A(),_r(),K5(r,o,e)},useId:function(){return B="useId",A(),_r(),c5()},useFormState:function(r,o){return B="useFormState",A(),_r(),c0(r,o)},useActionState:function(r,o){return B="useActionState",A(),_r(),c0(r,o)},useOptimistic:function(r){return B="useOptimistic",A(),_r(),L5(r)},useMemoCache:function(r){return A(),yv(r)},useHostTransitionStatus:av,useCacheRefresh:function(){return B="useCacheRefresh",_r(),y5()},useEffectEvent:function(r){return B="useEffectEvent",A(),_r(),N5(r)}},ag={readContext:function(r){return W(),Ko(r)},use:function(r){return A(),Si(r)},useCallback:function(r,o){return B="useCallback",A(),d(),Jb(r,o)},useContext:function(r){return B="useContext",A(),d(),Ko(r)},useEffect:function(r,o){B="useEffect",A(),d(),ae(2048,Se,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",A(),d(),Yb(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",A(),d(),ae(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",A(),d(),ae(4,Ag,r,o)},useMemo:function(r,o){B="useMemo",A(),d();var e=S.H;S.H=ag;try{return Qb(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",A(),d();var l=S.H;S.H=ag;try{return V0(r,o,e)}finally{S.H=l}},useRef:function(){return B="useRef",A(),d(),bo().memoizedState},useState:function(){B="useState",A(),d();var r=S.H;S.H=ag;try{return V0(kg)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",A(),d()},useDeferredValue:function(r,o){return B="useDeferredValue",A(),d(),bO(r,o)},useTransition:function(){return B="useTransition",A(),d(),HO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",A(),d(),Rb(r,o,e)},useId:function(){return B="useId",A(),d(),bo().memoizedState},useFormState:function(r){return B="useFormState",A(),d(),Wb(r)},useActionState:function(r){return B="useActionState",A(),d(),Wb(r)},useOptimistic:function(r,o){return B="useOptimistic",A(),d(),rO(r,o)},useMemoCache:function(r){return A(),yv(r)},useHostTransitionStatus:av,useCacheRefresh:function(){return B="useCacheRefresh",d(),bo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",A(),d(),Xb(r)}},Ku={readContext:function(r){return W(),Ko(r)},use:function(r){return A(),Si(r)},useCallback:function(r,o){return B="useCallback",A(),d(),Jb(r,o)},useContext:function(r){return B="useContext",A(),d(),Ko(r)},useEffect:function(r,o){B="useEffect",A(),d(),ae(2048,Se,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",A(),d(),Yb(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",A(),d(),ae(4,Ce,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",A(),d(),ae(4,Ag,r,o)},useMemo:function(r,o){B="useMemo",A(),d();var e=S.H;S.H=ag;try{return Qb(r,o)}finally{S.H=e}},useReducer:function(r,o,e){B="useReducer",A(),d();var l=S.H;S.H=ag;try{return Gh(r,o,e)}finally{S.H=l}},useRef:function(){return B="useRef",A(),d(),bo().memoizedState},useState:function(){B="useState",A(),d();var r=S.H;S.H=ag;try{return Gh(kg)}finally{S.H=r}},useDebugValue:function(){B="useDebugValue",A(),d()},useDeferredValue:function(r,o){return B="useDeferredValue",A(),d(),uO(r,o)},useTransition:function(){return B="useTransition",A(),d(),qO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",A(),d(),Rb(r,o,e)},useId:function(){return B="useId",A(),d(),bo().memoizedState},useFormState:function(r){return B="useFormState",A(),d(),mb(r)},useActionState:function(r){return B="useActionState",A(),d(),mb(r)},useOptimistic:function(r,o){return B="useOptimistic",A(),d(),eO(r,o)},useMemoCache:function(r){return A(),yv(r)},useHostTransitionStatus:av,useCacheRefresh:function(){return B="useCacheRefresh",d(),bo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",A(),d(),Xb(r)}};var nM={},hM=new Set,tM=new Set,bM=new Set,uM=new Set,wM=new Set,PM=new Set,OM=new Set,AM=new Set,HM=new Set,qM=new Set;Object.freeze(nM);var D4={enqueueSetState:function(r,o,e){r=r._reactInternals;var l=hg(r),v=Ni(l);v.payload=o,e!==void 0&&e!==null&&(a5(e),v.callback=e),o=Bi(r,v,l),o!==null&&(bl(l,"this.setState()",r),No(o,r,l),Mh(o,r,l))},enqueueReplaceState:function(r,o,e){r=r._reactInternals;var l=hg(r),v=Ni(l);v.tag=sq,v.payload=o,e!==void 0&&e!==null&&(a5(e),v.callback=e),o=Bi(r,v,l),o!==null&&(bl(l,"this.replaceState()",r),No(o,r,l),Mh(o,r,l))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var e=hg(r),l=Ni(e);l.tag=rM,o!==void 0&&o!==null&&(a5(o),l.callback=o),o=Bi(r,l,e),o!==null&&(bl(e,"this.forceUpdate()",r),No(o,r,e),Mh(o,r,e))}},Un=null,V4=null,c4=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),so=!1,MM={},RM={},WM={},mM={},Kn=!1,GM={},$u={},y4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},XM=!1,YM=null;YM=new Set;var ui=!1,re=!1,_4=!1,JM=typeof WeakSet==="function"?WeakSet:Set,be=null,$n=null,In=null,oe=null,je=!1,Eg=null,ie=!1,Mt=8192,oJ={getCacheForType:function(r){var o=Ko(fo),e=o.data.get(r);return e===void 0&&(e=r(),o.data.set(r,e)),e},cacheSignal:function(){return Ko(fo).controller.signal},getOwner:function(){return ug}};if(typeof Symbol==="function"&&Symbol.for){var Rt=Symbol.for;Rt("selector.component"),Rt("selector.has_pseudo_class"),Rt("selector.role"),Rt("selector.test_id"),Rt("selector.text")}var eJ=[],gJ=typeof WeakMap==="function"?WeakMap:Map,ue=0,ve=2,Hg=4,wi=0,Wt=1,t0=2,Iu=3,lv=4,Lu=6,QM=5,eo=ue,Mo=null,yr=null,Vr=0,pe=0,Fu=1,b0=2,mt=3,zM=4,a4=5,Gt=6,xu=7,E4=8,u0=9,uo=pe,qg=null,iv=!1,Ln=!1,f4=!1,xl=0,Fo=wi,vv=0,nv=0,j4=0,de=0,w0=0,Xt=null,Te=null,Nu=!1,Bu=0,UM=0,KM=300,Zu=1/0,$M=500,Yt=null,To=null,hv=null,Cu=0,p4=1,d4=2,IM=3,tv=0,LM=1,FM=2,xM=3,NM=4,Su=5,ee=0,bv=null,Fn=null,fg=0,s4=0,r6=-0,o6=null,BM=null,ZM=null,jg=Cu,CM=null,lJ=50,Jt=0,e6=null,g6=!1,Tu=!1,iJ=50,P0=0,Qt=null,xn=!1,ku=null,SM=!1,TM=new Set,vJ={},Du=null,Nn=null,l6=!1,i6=!1,Vu=!1,v6=!1,uv=0,n6={};(function(){for(var r=0;r<M4.length;r++){var o=M4[r],e=o.toLowerCase();o=o[0].toUpperCase()+o.slice(1),Tg(e,"on"+o)}Tg(Hq,"onAnimationEnd"),Tg(qq,"onAnimationIteration"),Tg(Mq,"onAnimationStart"),Tg("dblclick","onDoubleClick"),Tg("focusin","onFocus"),Tg("focusout","onBlur"),Tg(BY,"onTransitionRun"),Tg(ZY,"onTransitionStart"),Tg(CY,"onTransitionCancel"),Tg(Rq,"onTransitionEnd")})(),og("onMouseEnter",["mouseout","mouseover"]),og("onMouseLeave",["mouseout","mouseover"]),og("onPointerEnter",["pointerout","pointerover"]),og("onPointerLeave",["pointerout","pointerover"]),Je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Je("onBeforeInput",["compositionend","keypress","textInput","paste"]),Je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zt)),cu="_reactListening"+Math.random().toString(36).slice(2),kM=!1,DM=!1,yu=!1,VM=!1,_u=!1,au=!1,cM=!1,Eu={},nJ=/\r\n?/g,hJ=/\u0000|\uFFFD/g,O0="http://www.w3.org/1999/xlink",t6="http://www.w3.org/XML/1998/namespace",tJ="javascript:throw new Error('React form unexpectedly submitted.')",bJ="suppressHydrationWarning",A0="&",fu="/&",Ut="$",Kt="/$",wv="$?",H0="$~",Bn="$!",uJ="html",wJ="body",PJ="head",b6="F!",yM="F",_M="loading",OJ="style",Pi=0,Zn=1,ju=2,u6=null,w6=null,aM={dialog:!0,webview:!0},P6=null,$t=void 0,EM=typeof setTimeout==="function"?setTimeout:void 0,AJ=typeof clearTimeout==="function"?clearTimeout:void 0,q0=-1,fM=typeof Promise==="function"?Promise:void 0,HJ=typeof queueMicrotask==="function"?queueMicrotask:typeof fM<"u"?function(r){return fM.resolve(null).then(r).catch(rX)}:EM,O6=null,M0=0,It=1,jM=2,pM=3,Bg=4,Zg=new Map,dM=new Set,Oi=ho.d;ho.d={f:function(){var r=Oi.f(),o=f0();return r||o},r:function(r){var o=Fr(r);o!==null&&o.tag===5&&o.type==="form"?AO(o):Oi.r(r)},D:function(r){Oi.D(r),hH("dns-prefetch",r,null)},C:function(r,o){Oi.C(r,o),hH("preconnect",r,o)},L:function(r,o,e){Oi.L(r,o,e);var l=Cn;if(l&&r&&o){var v='link[rel="preload"][as="'+Yg(o)+'"]';o==="image"?e&&e.imageSrcSet?(v+='[imagesrcset="'+Yg(e.imageSrcSet)+'"]',typeof e.imageSizes==="string"&&(v+='[imagesizes="'+Yg(e.imageSizes)+'"]')):v+='[href="'+Yg(r)+'"]':v+='[href="'+Yg(r)+'"]';var n=v;switch(o){case"style":n=d0(r);break;case"script":n=s0(r)}Zg.has(n)||(r=ar({rel:"preload",href:o==="image"&&e&&e.imageSrcSet?void 0:r,as:o},e),Zg.set(n,r),l.querySelector(v)!==null||o==="style"&&l.querySelector(Zh(n))||o==="script"&&l.querySelector(Ch(n))||(o=l.createElement("link"),qe(o,"link",r),Yr(o),l.head.appendChild(o)))}},m:function(r,o){Oi.m(r,o);var e=Cn;if(e&&r){var l=o&&typeof o.as==="string"?o.as:"script",v='link[rel="modulepreload"][as="'+Yg(l)+'"][href="'+Yg(r)+'"]',n=v;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=s0(r)}if(!Zg.has(n)&&(r=ar({rel:"modulepreload",href:r},o),Zg.set(n,r),e.querySelector(v)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ch(n)))return}l=e.createElement("link"),qe(l,"link",r),Yr(l),e.head.appendChild(l)}}},X:function(r,o){Oi.X(r,o);var e=Cn;if(e&&r){var l=go(e).hoistableScripts,v=s0(r),n=l.get(v);n||(n=e.querySelector(Ch(v)),n||(r=ar({src:r,async:!0},o),(o=Zg.get(v))&&Z2(r,o),n=e.createElement("script"),Yr(n),qe(n,"link",r),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(v,n))}},S:function(r,o,e){Oi.S(r,o,e);var l=Cn;if(l&&r){var v=go(l).hoistableStyles,n=d0(r);o=o||"default";var b=v.get(n);if(!b){var w={loading:M0,preload:null};if(b=l.querySelector(Zh(n)))w.loading=It|Bg;else{r=ar({rel:"stylesheet",href:r,"data-precedence":o},e),(e=Zg.get(n))&&B2(r,e);var H=b=l.createElement("link");Yr(H),qe(H,"link",r),H._p=new Promise(function(M,K){H.onload=M,H.onerror=K}),H.addEventListener("load",function(){w.loading|=It}),H.addEventListener("error",function(){w.loading|=jM}),w.loading|=Bg,yb(b,o,l)}b={type:"stylesheet",instance:b,count:1,state:w},v.set(n,b)}}},M:function(r,o){Oi.M(r,o);var e=Cn;if(e&&r){var l=go(e).hoistableScripts,v=s0(r),n=l.get(v);n||(n=e.querySelector(Ch(v)),n||(r=ar({src:r,async:!0,type:"module"},o),(o=Zg.get(v))&&Z2(r,o),n=e.createElement("script"),Yr(n),qe(n,"link",r),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(v,n))}}};var Cn=typeof document>"u"?null:document,pu=null,qJ=60000,MJ=800,RJ=500,A6=0,H6=null,du=null,R0=xX,Lt={$$typeof:Yl,Provider:null,Consumer:null,_currentValue:R0,_currentValue2:R0,_threadCount:0},sM="%c%s%c",rR="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",oR="",su=" ",WJ=Function.prototype.bind,eR=!1,gR=null,lR=null,iR=null,vR=null,nR=null,hR=null,tR=null,bR=null,uR=null,wR=null;gR=function(r,o,e,l){o=g(r,o),o!==null&&(e=i(o.memoizedState,e,0,l),o.memoizedState=e,o.baseState=e,r.memoizedProps=ar({},r.memoizedProps),e=Qe(r,2),e!==null&&No(e,r,2))},lR=function(r,o,e){o=g(r,o),o!==null&&(e=u(o.memoizedState,e,0),o.memoizedState=e,o.baseState=e,r.memoizedProps=ar({},r.memoizedProps),e=Qe(r,2),e!==null&&No(e,r,2))},iR=function(r,o,e,l){o=g(r,o),o!==null&&(e=h(o.memoizedState,e,l),o.memoizedState=e,o.baseState=e,r.memoizedProps=ar({},r.memoizedProps),e=Qe(r,2),e!==null&&No(e,r,2))},vR=function(r,o,e){r.pendingProps=i(r.memoizedProps,o,0,e),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qe(r,2),o!==null&&No(o,r,2)},nR=function(r,o){r.pendingProps=u(r.memoizedProps,o,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qe(r,2),o!==null&&No(o,r,2)},hR=function(r,o,e){r.pendingProps=h(r.memoizedProps,o,e),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Qe(r,2),o!==null&&No(o,r,2)},tR=function(r){var o=Qe(r,2);o!==null&&No(o,r,2)},bR=function(r){var o=N0(),e=Qe(r,o);e!==null&&No(e,r,o)},uR=function(r){O=r},wR=function(r){P=r};var rw=!0,ow=null,q6=!1,Pv=null,Ov=null,Av=null,Ft=new Map,xt=new Map,Hv=[],mJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),ew=null;if(jb.prototype.render=V2.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error("Cannot update an unmounted root.");var e=arguments;typeof e[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):c(e[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof e[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),e=r;var l=o.current,v=hg(l);C2(l,v,e,o,null,null)},jb.prototype.unmount=V2.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var o=r.containerInfo;(eo&(ve|Hg))!==ue&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),C2(r.current,2,null,r,null,null),f0(),o[_i]=null}},jb.prototype.unstable_scheduleHydration=function(r){if(r){var o=L();r={blockedOn:null,target:r,priority:o};for(var e=0;e<Hv.length&&o!==0&&o<Hv[e].priority;e++);Hv.splice(e,0,r),e===0&&GH(r)}},function(){var r=Tn.version;if(r!=="19.2.6")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.6
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),ho.findDOMNode=function(r){var o=r._reactInternals;if(o===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(o),r=r!==null?gr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.6"};return r.overrideHookState=gR,r.overrideHookStateDeletePath=lR,r.overrideHookStateRenamePath=iR,r.overrideProps=vR,r.overridePropsDeletePath=nR,r.overridePropsRenamePath=hR,r.scheduleUpdate=tR,r.scheduleRetry=bR,r.setErrorHandler=uR,r.setSuspenseHandler=wR,r.scheduleRefresh=T,r.scheduleRoot=I,r.setRefreshHandler=Z,r.getCurrentFiber=QX,x0(r)}()&&Kl&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var PR=window.location.protocol;/^(https?|file):$/.test(PR)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(PR==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}BJ.createRoot=function(r,o){if(!c(r))throw Error("Target container is not a DOM element.");QH(r);var e=!1,l="",v=XO,n=YO,b=JO;return o!==null&&o!==void 0&&(o.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof o==="object"&&o!==null&&o.$$typeof===Xl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),o.unstable_strictMode===!0&&(e=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(v=o.onUncaughtError),o.onCaughtError!==void 0&&(n=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),o=AH(r,1,!1,null,null,e,l,null,v,n,b,JH),r[_i]=o.current,Y2(r),new V2(o)},BJ.hydrateRoot=function(r,o,e){if(!c(r))throw Error("Target container is not a DOM element.");QH(r),o===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,v="",n=XO,b=YO,w=JO,H=null;return e!==null&&e!==void 0&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(v=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(b=e.onCaughtError),e.onRecoverableError!==void 0&&(w=e.onRecoverableError),e.formState!==void 0&&(H=e.formState)),o=AH(r,1,!0,o,e!=null?e:null,l,v,H,n,b,w,JH),o.context=HH(null),e=o.current,l=hg(e),l=Nv(l),v=Ni(l),v.callback=null,Bi(e,v,l),bl(l,"hydrateRoot()",null),e=l,o.current.lanes=e,Ui(o,e),ml(o),r[_i]=o.current,Y2(r),new jb(o)},BJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var RR=W0((gF,MR)=>{MR.exports=qR()});var ro=W0((jQ)=>{var z0=wr(io());(function(){function g(V){if(V==null)return null;if(typeof V==="function")return V.$$typeof===C?null:V.displayName||V.name||null;if(typeof V==="string")return V;switch(V){case Z:return"Fragment";case rr:return"Profiler";case c:return"StrictMode";case p:return"Suspense";case gr:return"SuspenseList";case f:return"Activity"}if(typeof V==="object")switch(typeof V.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),V.$$typeof){case T:return"Portal";case lr:return V.displayName||"Context";case ur:return(V._context.displayName||"Context")+".Consumer";case E:var F=V.render;return V=V.displayName,V||(V=F.displayName||F.name||"",V=V!==""?"ForwardRef("+V+")":"ForwardRef"),V;case N:return F=V.displayName||null,F!==null?F:g(V.type)||"Memo";case y:F=V._payload,V=V._init;try{return g(V(F))}catch(er){}}return null}function i(V){return""+V}function h(V){try{i(V);var F=!1}catch(qr){F=!0}if(F){F=console;var er=F.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&V[Symbol.toStringTag]||V.constructor.name||"Object";return er.call(F,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),i(V)}}function t(V){if(V===Z)return"<>";if(typeof V==="object"&&V!==null&&V.$$typeof===y)return"<...>";try{var F=g(V);return F?"<"+F+">":"<...>"}catch(er){return"<...>"}}function u(){var V=Rr.A;return V===null?null:V.getOwner()}function P(){return Error("react-stack-top-frame")}function O(V){if(Hr.call(V,"key")){var F=Object.getOwnPropertyDescriptor(V,"key").get;if(F&&F.isReactWarning)return!1}return V.key!==void 0}function A(V,F){function er(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",F))}er.isReactWarning=!0,Object.defineProperty(V,"key",{get:er,configurable:!0})}function W(){var V=g(this.type);return s[V]||(s[V]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),V=this.props.ref,V!==void 0?V:null}function G(V,F,er,Or,qr,Zr){var nr=er.ref;return V={$$typeof:I,type:V,key:F,props:er,_owner:Or},(nr!==void 0?nr:null)!==null?Object.defineProperty(V,"ref",{enumerable:!1,get:W}):Object.defineProperty(V,"ref",{enumerable:!1,value:null}),V._store={},Object.defineProperty(V._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(V,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(V,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:qr}),Object.defineProperty(V,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Zr}),Object.freeze&&(Object.freeze(V.props),Object.freeze(V)),V}function m(V,F,er,Or,qr,Zr){var nr=F.children;if(nr!==void 0)if(Or)if(mr(nr)){for(Or=0;Or<nr.length;Or++)q(nr[Or]);Object.freeze&&Object.freeze(nr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else q(nr);if(Hr.call(F,"key")){nr=g(V);var Cr=Object.keys(F).filter(function(Ro){return Ro!=="key"});Or=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Gr[nr+Or]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Or,nr,Cr,nr),Gr[nr+Or]=!0)}if(nr=null,er!==void 0&&(h(er),nr=""+er),O(F)&&(h(F.key),nr=""+F.key),"key"in F){er={};for(var jr in F)jr!=="key"&&(er[jr]=F[jr])}else er=F;return nr&&A(er,typeof V==="function"?V.displayName||V.name||"Unknown":V),G(V,nr,er,u(),qr,Zr)}function q(V){X(V)?V._store&&(V._store.validated=1):typeof V==="object"&&V!==null&&V.$$typeof===y&&(V._payload.status==="fulfilled"?X(V._payload.value)&&V._payload.value._store&&(V._payload.value._store.validated=1):V._store&&(V._store.validated=1))}function X(V){return typeof V==="object"&&V!==null&&V.$$typeof===I}var I=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),ur=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),gr=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),C=Symbol.for("react.client.reference"),Rr=z0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hr=Object.prototype.hasOwnProperty,mr=Array.isArray,Br=console.createTask?console.createTask:function(){return null};z0={react_stack_bottom_frame:function(V){return V()}};var k,s={},ir=z0.react_stack_bottom_frame.bind(z0,P)(),Qr=Br(t(P)),Gr={};jQ.Fragment=Z,jQ.jsxDEV=function(V,F,er,Or){var qr=1e4>Rr.recentlyCreatedOwnerStacks++;return m(V,F,er,Or,qr?Error("react-stack-top-frame"):ir,qr?Br(t(V)):Qr)}})()});var UP=wr(io(),1),KP=wr(RR(),1);var WR=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var $R=WR+mR+GR+XR+YR+JR+QR+zR+UR+KR;var Yo=wr(io(),1);var vw=wr(io(),1);var lw=(...g)=>g.filter((i,h,t)=>{return Boolean(i)&&i.trim()!==""&&t.indexOf(i)===h}).join(" ").trim();var IR=(g)=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var LR=(g)=>g.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,h,t)=>t?t.toUpperCase():h.toLowerCase());var m6=(g)=>{let i=LR(g);return i.charAt(0).toUpperCase()+i.slice(1)};var Nt=wr(io(),1);var iw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var FR=(g)=>{for(let i in g)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};var kn=wr(io(),1),aJ=kn.createContext({});var xR=()=>kn.useContext(aJ);var NR=Nt.forwardRef(({color:g,size:i,strokeWidth:h,absoluteStrokeWidth:t,className:u="",children:P,iconNode:O,...A},W)=>{let{size:G=24,strokeWidth:m=2,absoluteStrokeWidth:q=!1,color:X="currentColor",className:I=""}=xR()??{},T=t??q?Number(h??m)*24/Number(i??G):h??m;return Nt.createElement("svg",{ref:W,...iw,width:i??G??iw.width,height:i??G??iw.height,stroke:g??X,strokeWidth:T,className:lw("lucide",I,u),...!P&&!FR(A)&&{"aria-hidden":"true"},...A},[...O.map(([Z,c])=>Nt.createElement(Z,c)),...Array.isArray(P)?P:[P]])});var a=(g,i)=>{let h=vw.forwardRef(({className:t,...u},P)=>vw.createElement(NR,{ref:P,iconNode:i,className:lw(`lucide-${IR(m6(g))}`,`lucide-${g}`,t),...u}));return h.displayName=m6(g),h};var EJ=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Nl=a("braces",EJ);var fJ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],qv=a("chart-column",fJ);var jJ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],We=a("code-xml",jJ);var pJ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Bl=a("file-code-corner",pJ);var dJ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Mv=a("layers",dJ);var sJ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zl=a("loader-circle",sJ);var rQ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cg=a("triangle-alert",rQ);var oQ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Rv=a("user-round",oQ);var eQ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Bt=a("activity",eQ);var gQ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Zt=a("arrow-down-to-line",gQ);var lQ=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Ct=a("arrow-up-to-line",lQ);var iQ=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],St=a("blocks",iQ);var vQ=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],G0=a("book-marked",vQ);var nQ=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Tt=a("book-open",nQ);var hQ=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],kt=a("calendar",hQ);var tQ=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dt=a("check",tQ);var bQ=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],me=a("chevron-down",bQ);var uQ=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vt=a("chevron-left",uQ);var wQ=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hi=a("chevron-right",wQ);var PQ=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mg=a("chevron-up",PQ);var OQ=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],ct=a("chevrons-up-down",OQ);var AQ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],yt=a("clock",AQ);var HQ=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pg=a("copy",HQ);var qQ=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dg=a("database",qQ);var MQ=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],X0=a("download",MQ);var RQ=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_t=a("eye",RQ);var WQ=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Y0=a("folder-open",WQ);var mQ=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],at=a("hash",mQ);var GQ=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Et=a("link-2",GQ);var XQ=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],ft=a("list-ordered",XQ);var YQ=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],jt=a("list",YQ);var JQ=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],pt=a("lock",JQ);var QQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],Dn=a("message-square-plus",QQ);var zQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],dt=a("message-square",zQ);var UQ=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],st=a("package",UQ);var KQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sg=a("pencil",KQ);var $Q=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],J0=a("play",$Q);var IQ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],r1=a("plus",IQ);var LQ=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],o1=a("radio",LQ);var FQ=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qi=a("refresh-cw",FQ);var xQ=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],e1=a("save",xQ);var NQ=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Wv=a("search",NQ);var BQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Vn=a("shield-alert",BQ);var ZQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g1=a("shield",ZQ);var CQ=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],l1=a("syringe",CQ);var SQ=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Cl=a("terminal",SQ);var TQ=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],i1=a("toggle-left",TQ);var kQ=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v1=a("toggle-right",kQ);var DQ=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Q0=a("timer",DQ);var VQ=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ke=a("trash-2",VQ);var cQ=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],n1=a("type",cQ);var yQ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],h1=a("upload",yQ);var _Q=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],cn=a("user-plus",_Q);var aQ=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],t1=a("wrench",aQ);var EQ=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ke=a("x",EQ);var fQ=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mi=a("zap",fQ);var nw={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Nw=wr(io(),1);var z1=wr(io(),1);var Uo=wr(ro(),1),pQ={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},BR=({script:g,selected:i,dot:h,duration:t,onSelect:u,onEdit:P,sendToBackend:O})=>{let A=(T)=>{T.stopPropagation(),O({type:"update_script",id:g.id,patch:{enabled:!g.enabled}})},W=(T)=>{T.stopPropagation(),O({type:"duplicate_script",id:g.id})},G=(T)=>{if(T.stopPropagation(),!window.confirm(`Delete "${g.name}"?`))return;O({type:"delete_script",id:g.id})},m=(T)=>{T.stopPropagation(),P()},q=h==="running",X=(T)=>{if(T.stopPropagation(),q||!g.enabled)return;O({type:"run_script",id:g.id})},I=g.bindings?.length??0;return Uo.jsxDEV("div",{className:`ls-item${i?" ls-selected":""}${!g.enabled&&g.type!=="library"?" ls-disabled":""}`,onClick:u,children:[Uo.jsxDEV("span",{className:pQ[h],title:h},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-body",children:[Uo.jsxDEV("div",{className:"ls-item-name",title:g.name,children:g.name},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-meta",children:[g.type!=="library"&&Uo.jsxDEV("span",{children:g.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),t!==void 0&&h!=="running"&&Uo.jsxDEV("span",{style:{color:h==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[t,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.type!=="library"&&I>0&&Uo.jsxDEV("div",{className:"ls-item-bindings",children:g.bindings.map((T,Z)=>Uo.jsxDEV("span",{className:"ls-binding-badge",children:[T.type==="character"?Uo.jsxDEV(Rv,{size:9},void 0,!1,void 0,this):Uo.jsxDEV(dt,{size:9},void 0,!1,void 0,this),Uo.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:T.displayName},void 0,!1,void 0,this)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Uo.jsxDEV("div",{className:"ls-item-actions",children:[Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:"Edit script",children:Uo.jsxDEV(sg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:X,disabled:!g.enabled||q,title:!g.enabled?"Enable to run":q?"Running…":"Run script",children:q?Uo.jsxDEV(Zl,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Uo.jsxDEV(J0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:A,title:g.enabled?"Disable":"Enable",children:g.enabled?Uo.jsxDEV(v1,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Uo.jsxDEV(i1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:"Duplicate",children:Uo.jsxDEV(pg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:G,title:"Delete",children:Uo.jsxDEV(Ke,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Zo=Uint8Array,Rg=Uint16Array,L6=Int32Array,tw=new Zo([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bw=new Zo([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Q6=new Zo([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DR=function(g,i){var h=new Rg(31);for(var t=0;t<31;++t)h[t]=i+=1<<g[t-1];var u=new L6(h[30]);for(var t=1;t<30;++t)for(var P=h[t];P<h[t+1];++P)u[P]=P-h[t]<<5|t;return{b:h,r:u}},VR=DR(tw,2),cR=VR.b,z6=VR.r;cR[28]=258,z6[258]=28;var yR=DR(bw,0),dQ=yR.b,ZR=yR.r,U6=new Rg(32768);for(oo=0;oo<32768;++oo)Sl=(oo&43690)>>1|(oo&21845)<<1,Sl=(Sl&52428)>>2|(Sl&13107)<<2,Sl=(Sl&61680)>>4|(Sl&3855)<<4,U6[oo]=((Sl&65280)>>8|(Sl&255)<<8)>>1;var Sl,oo,kl=function(g,i,h){var t=g.length,u=0,P=new Rg(i);for(;u<t;++u)if(g[u])++P[g[u]-1];var O=new Rg(i);for(u=1;u<i;++u)O[u]=O[u-1]+P[u-1]<<1;var A;if(h){A=new Rg(1<<i);var W=15-i;for(u=0;u<t;++u)if(g[u]){var G=u<<4|g[u],m=i-g[u],q=O[g[u]-1]++<<m;for(var X=q|(1<<m)-1;q<=X;++q)A[U6[q]>>W]=G}}else{A=new Rg(t);for(u=0;u<t;++u)if(g[u])A[u]=U6[O[g[u]-1]++]>>15-g[u]}return A},mv=new Zo(288);for(oo=0;oo<144;++oo)mv[oo]=8;var oo;for(oo=144;oo<256;++oo)mv[oo]=9;var oo;for(oo=256;oo<280;++oo)mv[oo]=7;var oo;for(oo=280;oo<288;++oo)mv[oo]=8;var oo,w1=new Zo(32);for(oo=0;oo<32;++oo)w1[oo]=5;var oo,sQ=kl(mv,9,0),rz=kl(mv,9,1),oz=kl(w1,5,0),ez=kl(w1,5,1),G6=function(g){var i=g[0];for(var h=1;h<g.length;++h)if(g[h]>i)i=g[h];return i},rl=function(g,i,h){var t=i/8|0;return(g[t]|g[t+1]<<8)>>(i&7)&h},X6=function(g,i){var h=i/8|0;return(g[h]|g[h+1]<<8|g[h+2]<<16)>>(i&7)},F6=function(g){return(g+7)/8|0},P1=function(g,i,h){if(i==null||i<0)i=0;if(h==null||h>g.length)h=g.length;return new Zo(g.subarray(i,h))};var gz=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],De=function(g,i,h){var t=Error(i||gz[g]);if(t.code=g,Error.captureStackTrace)Error.captureStackTrace(t,De);if(!h)throw t;return t},lz=function(g,i,h,t){var u=g.length,P=t?t.length:0;if(!u||i.f&&!i.l)return h||new Zo(0);var O=!h,A=O||i.i!=2,W=i.i;if(O)h=new Zo(u*3);var G=function(hr){var ye=h.length;if(hr>ye){var Ye=new Zo(Math.max(ye*2,hr));Ye.set(h),h=Ye}},m=i.f||0,q=i.p||0,X=i.b||0,I=i.l,T=i.d,Z=i.m,c=i.n,rr=u*8;do{if(!I){m=rl(g,q,1);var ur=rl(g,q+1,3);if(q+=3,!ur){var lr=F6(q)+4,E=g[lr-4]|g[lr-3]<<8,p=lr+E;if(p>u){if(W)De(0);break}if(A)G(X+E);h.set(g.subarray(lr,p),X),i.b=X+=E,i.p=q=p*8,i.f=m;continue}else if(ur==1)I=rz,T=ez,Z=9,c=5;else if(ur==2){var gr=rl(g,q,31)+257,N=rl(g,q+10,15)+4,y=gr+rl(g,q+5,31)+1;q+=14;var f=new Zo(y),C=new Zo(19);for(var Rr=0;Rr<N;++Rr)C[Q6[Rr]]=rl(g,q+Rr*3,7);q+=N*3;var Hr=G6(C),mr=(1<<Hr)-1,Br=kl(C,Hr,1);for(var Rr=0;Rr<y;){var k=Br[rl(g,q,mr)];q+=k&15;var lr=k>>4;if(lr<16)f[Rr++]=lr;else{var s=0,ir=0;if(lr==16)ir=3+rl(g,q,3),q+=2,s=f[Rr-1];else if(lr==17)ir=3+rl(g,q,7),q+=3;else if(lr==18)ir=11+rl(g,q,127),q+=7;while(ir--)f[Rr++]=s}}var Qr=f.subarray(0,gr),Gr=f.subarray(gr);Z=G6(Qr),c=G6(Gr),I=kl(Qr,Z,1),T=kl(Gr,c,1)}else De(1);if(q>rr){if(W)De(0);break}}if(A)G(X+131072);var V=(1<<Z)-1,F=(1<<c)-1,er=q;for(;;er=q){var s=I[X6(g,q)&V],Or=s>>4;if(q+=s&15,q>rr){if(W)De(0);break}if(!s)De(2);if(Or<256)h[X++]=Or;else if(Or==256){er=q,I=null;break}else{var qr=Or-254;if(Or>264){var Rr=Or-257,Zr=tw[Rr];qr=rl(g,q,(1<<Zr)-1)+cR[Rr],q+=Zr}var nr=T[X6(g,q)&F],Cr=nr>>4;if(!nr)De(3);q+=nr&15;var Gr=dQ[Cr];if(Cr>3){var Zr=bw[Cr];Gr+=X6(g,q)&(1<<Zr)-1,q+=Zr}if(q>rr){if(W)De(0);break}if(A)G(X+131072);var jr=X+qr;if(X<Gr){var Ro=P-Gr,Ie=Math.min(Gr,jr);if(Ro+X<0)De(3);for(;X<Ie;++X)h[X]=t[Ro+X]}for(;X<jr;++X)h[X]=h[X-Gr]}}if(i.l=I,i.p=er,i.b=X,i.f=m,I)m=1,i.m=Z,i.d=T,i.n=c}while(!m);return X!=h.length&&O?P1(h,0,X):h.subarray(0,X)},Ri=function(g,i,h){h<<=i&7;var t=i/8|0;g[t]|=h,g[t+1]|=h>>8},b1=function(g,i,h){h<<=i&7;var t=i/8|0;g[t]|=h,g[t+1]|=h>>8,g[t+2]|=h>>16},Y6=function(g,i){var h=[];for(var t=0;t<g.length;++t)if(g[t])h.push({s:t,f:g[t]});var u=h.length,P=h.slice();if(!u)return{t:aR,l:0};if(u==1){var O=new Zo(h[0].s+1);return O[h[0].s]=1,{t:O,l:1}}h.sort(function(p,gr){return p.f-gr.f}),h.push({s:-1,f:25001});var A=h[0],W=h[1],G=0,m=1,q=2;h[0]={s:-1,f:A.f+W.f,l:A,r:W};while(m!=u-1)A=h[h[G].f<h[q].f?G++:q++],W=h[G!=m&&h[G].f<h[q].f?G++:q++],h[m++]={s:-1,f:A.f+W.f,l:A,r:W};var X=P[0].s;for(var t=1;t<u;++t)if(P[t].s>X)X=P[t].s;var I=new Rg(X+1),T=K6(h[m-1],I,0);if(T>i){var t=0,Z=0,c=T-i,rr=1<<c;P.sort(function(gr,N){return I[N.s]-I[gr.s]||gr.f-N.f});for(;t<u;++t){var ur=P[t].s;if(I[ur]>i)Z+=rr-(1<<T-I[ur]),I[ur]=i;else break}Z>>=c;while(Z>0){var lr=P[t].s;if(I[lr]<i)Z-=1<<i-I[lr]++-1;else++t}for(;t>=0&&Z;--t){var E=P[t].s;if(I[E]==i)--I[E],++Z}T=i}return{t:new Zo(I),l:T}},K6=function(g,i,h){return g.s==-1?Math.max(K6(g.l,i,h+1),K6(g.r,i,h+1)):i[g.s]=h},CR=function(g){var i=g.length;while(i&&!g[--i]);var h=new Rg(++i),t=0,u=g[0],P=1,O=function(W){h[t++]=W};for(var A=1;A<=i;++A)if(g[A]==u&&A!=i)++P;else{if(!u&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(u),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(u);P=1,u=g[A]}return{c:h.subarray(0,t),n:i}},u1=function(g,i){var h=0;for(var t=0;t<i.length;++t)h+=g[t]*i[t];return h},_R=function(g,i,h){var t=h.length,u=F6(i+2);g[u]=t&255,g[u+1]=t>>8,g[u+2]=g[u]^255,g[u+3]=g[u+1]^255;for(var P=0;P<t;++P)g[u+P+4]=h[P];return(u+4+t)*8},SR=function(g,i,h,t,u,P,O,A,W,G,m){Ri(i,m++,h),++u[256];var q=Y6(u,15),X=q.t,I=q.l,T=Y6(P,15),Z=T.t,c=T.l,rr=CR(X),ur=rr.c,lr=rr.n,E=CR(Z),p=E.c,gr=E.n,N=new Rg(19);for(var y=0;y<ur.length;++y)++N[ur[y]&31];for(var y=0;y<p.length;++y)++N[p[y]&31];var f=Y6(N,7),C=f.t,Rr=f.l,Hr=19;for(;Hr>4&&!C[Q6[Hr-1]];--Hr);var mr=G+5<<3,Br=u1(u,mv)+u1(P,w1)+O,k=u1(u,X)+u1(P,Z)+O+14+3*Hr+u1(N,C)+2*N[16]+3*N[17]+7*N[18];if(W>=0&&mr<=Br&&mr<=k)return _R(i,m,g.subarray(W,W+G));var s,ir,Qr,Gr;if(Ri(i,m,1+(k<Br)),m+=2,k<Br){s=kl(X,I,0),ir=X,Qr=kl(Z,c,0),Gr=Z;var V=kl(C,Rr,0);Ri(i,m,lr-257),Ri(i,m+5,gr-1),Ri(i,m+10,Hr-4),m+=14;for(var y=0;y<Hr;++y)Ri(i,m+3*y,C[Q6[y]]);m+=3*Hr;var F=[ur,p];for(var er=0;er<2;++er){var Or=F[er];for(var y=0;y<Or.length;++y){var qr=Or[y]&31;if(Ri(i,m,V[qr]),m+=C[qr],qr>15)Ri(i,m,Or[y]>>5&127),m+=Or[y]>>12}}}else s=sQ,ir=mv,Qr=oz,Gr=w1;for(var y=0;y<A;++y){var Zr=t[y];if(Zr>255){var qr=Zr>>18&31;if(b1(i,m,s[qr+257]),m+=ir[qr+257],qr>7)Ri(i,m,Zr>>23&31),m+=tw[qr];var nr=Zr&31;if(b1(i,m,Qr[nr]),m+=Gr[nr],nr>3)b1(i,m,Zr>>5&8191),m+=bw[nr]}else b1(i,m,s[Zr]),m+=ir[Zr]}return b1(i,m,s[256]),m+ir[256]},iz=new L6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),aR=new Zo(0),vz=function(g,i,h,t,u,P){var O=P.z||g.length,A=new Zo(t+O+5*(1+Math.ceil(O/7000))+u),W=A.subarray(t,A.length-u),G=P.l,m=(P.r||0)&7;if(i){if(m)W[0]=P.r>>3;var q=iz[i-1],X=q>>13,I=q&8191,T=(1<<h)-1,Z=P.p||new Rg(32768),c=P.h||new Rg(T+1),rr=Math.ceil(h/3),ur=2*rr,lr=function(rg){return(g[rg]^g[rg+1]<<rr^g[rg+2]<<ur)&T},E=new L6(25000),p=new Rg(288),gr=new Rg(32),N=0,y=0,f=P.i||0,C=0,Rr=P.w||0,Hr=0;for(;f+2<O;++f){var mr=lr(f),Br=f&32767,k=c[mr];if(Z[Br]=k,c[mr]=Br,Rr<=f){var s=O-f;if((N>7000||C>24576)&&(s>423||!G)){m=SR(g,W,0,E,p,gr,y,C,Hr,f-Hr,m),C=N=y=0,Hr=f;for(var ir=0;ir<286;++ir)p[ir]=0;for(var ir=0;ir<30;++ir)gr[ir]=0}var Qr=2,Gr=0,V=I,F=Br-k&32767;if(s>2&&mr==lr(f-F)){var er=Math.min(X,s)-1,Or=Math.min(32767,f),qr=Math.min(258,s);while(F<=Or&&--V&&Br!=k){if(g[f+Qr]==g[f+Qr-F]){var Zr=0;for(;Zr<qr&&g[f+Zr]==g[f+Zr-F];++Zr);if(Zr>Qr){if(Qr=Zr,Gr=F,Zr>er)break;var nr=Math.min(F,Zr-2),Cr=0;for(var ir=0;ir<nr;++ir){var jr=f-F+ir&32767,Ro=Z[jr],Ie=jr-Ro&32767;if(Ie>Cr)Cr=Ie,k=jr}}}Br=k,k=Z[Br],F+=Br-k&32767}}if(Gr){E[C++]=268435456|z6[Qr]<<18|ZR[Gr];var hr=z6[Qr]&31,ye=ZR[Gr]&31;y+=tw[hr]+bw[ye],++p[257+hr],++gr[ye],Rr=f+Qr,++N}else E[C++]=g[f],++p[g[f]]}}for(f=Math.max(f,Rr);f<O;++f)E[C++]=g[f],++p[g[f]];if(m=SR(g,W,G,E,p,gr,y,C,Hr,f-Hr,m),!G)P.r=m&7|W[m/8|0]<<3,m-=7,P.h=c,P.p=Z,P.i=f,P.w=Rr}else{for(var f=P.w||0;f<O+G;f+=65535){var Ye=f+65535;if(Ye>=O)W[m/8|0]=G,Ye=O;m=_R(W,m+1,g.subarray(f,Ye))}P.i=O}return P1(A,0,t+F6(m)+u)},nz=function(){var g=new Int32Array(256);for(var i=0;i<256;++i){var h=i,t=9;while(--t)h=(h&1&&-306674912)^h>>>1;g[i]=h}return g}(),hz=function(){var g=-1;return{p:function(i){var h=g;for(var t=0;t<i.length;++t)h=nz[h&255^i[t]]^h>>>8;g=h},d:function(){return~g}}};var tz=function(g,i,h,t,u){if(!u){if(u={l:1},i.dictionary){var P=i.dictionary.subarray(-32768),O=new Zo(P.length+g.length);O.set(P),O.set(g,P.length),g=O,u.w=P.length}}return vz(g,i.level==null?6:i.level,i.mem==null?u.l?Math.ceil(Math.max(8,Math.min(13,Math.log(g.length)))*1.5):20:12+i.mem,h,t,u)},ER=function(g,i){var h={};for(var t in g)h[t]=g[t];for(var t in i)h[t]=i[t];return h};var Tl=function(g,i){return g[i]|g[i+1]<<8},ol=function(g,i){return(g[i]|g[i+1]<<8|g[i+2]<<16|g[i+3]<<24)>>>0},J6=function(g,i){return ol(g,i)+ol(g,i+4)*4294967296},Ge=function(g,i,h){for(;h;++i)g[i]=h,h>>>=8};function bz(g,i){return tz(g,i||{},0,0)}function uz(g,i){return lz(g,{i:2},i&&i.out,i&&i.dictionary)}var fR=function(g,i,h,t){for(var u in g){var P=g[u],O=i+u,A=t;if(Array.isArray(P))A=ER(t,P[1]),P=P[0];if(P instanceof Zo)h[O]=[P,A];else h[O+="/"]=[new Zo(0),A],fR(P,O,h,t)}},TR=typeof TextEncoder<"u"&&new TextEncoder,$6=typeof TextDecoder<"u"&&new TextDecoder,wz=0;try{$6.decode(aR,{stream:!0}),wz=1}catch(g){}var Pz=function(g){for(var i="",h=0;;){var t=g[h++],u=(t>127)+(t>223)+(t>239);if(h+u>g.length)return{s:i,r:P1(g,h-1)};if(!u)i+=String.fromCharCode(t);else if(u==3)t=((t&15)<<18|(g[h++]&63)<<12|(g[h++]&63)<<6|g[h++]&63)-65536,i+=String.fromCharCode(55296|t>>10,56320|t&1023);else if(u&1)i+=String.fromCharCode((t&31)<<6|g[h++]&63);else i+=String.fromCharCode((t&15)<<12|(g[h++]&63)<<6|g[h++]&63)}};function hw(g,i){if(i){var h=new Zo(g.length);for(var t=0;t<g.length;++t)h[t]=g.charCodeAt(t);return h}if(TR)return TR.encode(g);var u=g.length,P=new Zo(g.length+(g.length>>1)),O=0,A=function(m){P[O++]=m};for(var t=0;t<u;++t){if(O+5>P.length){var W=new Zo(O+8+(u-t<<1));W.set(P),P=W}var G=g.charCodeAt(t);if(G<128||i)A(G);else if(G<2048)A(192|G>>6),A(128|G&63);else if(G>55295&&G<57344)G=65536+(G&1047552)|g.charCodeAt(++t)&1023,A(240|G>>18),A(128|G>>12&63),A(128|G>>6&63),A(128|G&63);else A(224|G>>12),A(128|G>>6&63),A(128|G&63)}return P1(P,0,O)}function x6(g,i){if(i){var h="";for(var t=0;t<g.length;t+=16384)h+=String.fromCharCode.apply(null,g.subarray(t,t+16384));return h}else if($6)return $6.decode(g);else{var u=Pz(g),P=u.s,h=u.r;if(h.length)De(8);return P}}var Oz=function(g,i){return i+30+Tl(g,i+26)+Tl(g,i+28)},Az=function(g,i,h){var t=Tl(g,i+28),u=x6(g.subarray(i+46,i+46+t),!(Tl(g,i+8)&2048)),P=i+46+t,O=ol(g,i+20),A=h&&O==4294967295?Hz(g,P):[O,ol(g,i+24),ol(g,i+42)],W=A[0],G=A[1],m=A[2];return[Tl(g,i+10),W,G,u,P+Tl(g,i+30)+Tl(g,i+32),m]},Hz=function(g,i){for(;Tl(g,i)!=1;i+=4+Tl(g,i+2));return[J6(g,i+12),J6(g,i+4),J6(g,i+20)]},I6=function(g){var i=0;if(g)for(var h in g){var t=g[h].length;if(t>65535)De(9);i+=t+4}return i},kR=function(g,i,h,t,u,P,O,A){var W=t.length,G=h.extra,m=A&&A.length,q=I6(G);if(Ge(g,i,O!=null?33639248:67324752),i+=4,O!=null)g[i++]=20,g[i++]=h.os;g[i]=20,i+=2,g[i++]=h.flag<<1|(P<0&&8),g[i++]=u&&8,g[i++]=h.compression&255,g[i++]=h.compression>>8;var X=new Date(h.mtime==null?Date.now():h.mtime),I=X.getFullYear()-1980;if(I<0||I>119)De(10);if(Ge(g,i,I<<25|X.getMonth()+1<<21|X.getDate()<<16|X.getHours()<<11|X.getMinutes()<<5|X.getSeconds()>>1),i+=4,P!=-1)Ge(g,i,h.crc),Ge(g,i+4,P<0?-P-2:P),Ge(g,i+8,h.size);if(Ge(g,i+12,W),Ge(g,i+14,q),i+=16,O!=null)Ge(g,i,m),Ge(g,i+6,h.attrs),Ge(g,i+10,O),i+=14;if(g.set(t,i),i+=W,q)for(var T in G){var Z=G[T],c=Z.length;Ge(g,i,+T),Ge(g,i+2,c),g.set(Z,i+4),i+=4+c}if(m)g.set(A,i),i+=m;return i},qz=function(g,i,h,t,u){Ge(g,i,101010256),Ge(g,i+8,h),Ge(g,i+10,h),Ge(g,i+12,t),Ge(g,i+16,u)};function jR(g,i){if(!i)i={};var h={},t=[];fR(g,"",h,i);var u=0,P=0;for(var O in h){var A=h[O],W=A[0],G=A[1],m=G.level==0?0:8,q=hw(O),X=q.length,I=G.comment,T=I&&hw(I),Z=T&&T.length,c=I6(G.extra);if(X>65535)De(11);var rr=m?bz(W,G):W,ur=rr.length,lr=hz();lr.p(W),t.push(ER(G,{size:W.length,crc:lr.d(),c:rr,f:q,m:T,u:X!=O.length||T&&I.length!=Z,o:u,compression:m})),u+=30+X+c+ur,P+=76+2*(X+c)+(Z||0)+ur}var E=new Zo(P+22),p=u,gr=P-u;for(var N=0;N<t.length;++N){var q=t[N];kR(E,q.o,q,q.f,q.u,q.c.length);var y=30+q.f.length+I6(q.extra);E.set(q.c,q.o+y),kR(E,u,q,q.f,q.u,q.c.length,q.o,q.m),u+=16+y+(q.m?q.m.length:0)}return qz(E,u,t.length,gr,p),E}function pR(g,i){var h={},t=g.length-22;for(;ol(g,t)!=101010256;--t)if(!t||g.length-t>65558)De(13);var u=Tl(g,t+8);if(!u)return{};var P=ol(g,t+16),O=P==4294967295||u==65535;if(O){var A=ol(g,t-12);if(O=ol(g,A)==101075792,O)u=ol(g,A+32),P=ol(g,A+48)}var W=i&&i.filter;for(var G=0;G<u;++G){var m=Az(g,P,O),q=m[0],X=m[1],I=m[2],T=m[3],Z=m[4],c=m[5],rr=Oz(g,c);if(P=Z,!W||W({name:T,size:X,originalSize:I,compression:q}))if(!q)h[T]=P1(g,rr,rr+X);else if(q==8)h[T]=uz(g.subarray(rr,rr+X),{out:new Zo(I)});else De(14,"unknown compression type "+q)}return h}function N6(g){let i=g.map((t)=>({name:t.name,code:t.code,type:t.type,triggers:t.triggers,bindings:t.bindings,folder:t.folder,metadata:t.metadata})),h={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:i};return jR({"pack.json":hw(JSON.stringify(h,null,2))})}function dR(g,i){let h=N6(g),t=new Blob([h.buffer],{type:"application/zip"}),u=URL.createObjectURL(t),P=document.createElement("a");P.href=u,P.download=`${i}.lumiscript.zip`,P.click(),URL.revokeObjectURL(u)}var sR;function _(g,i,h){function t(A,W){if(!A._zod)Object.defineProperty(A,"_zod",{value:{def:W,constr:O,traits:new Set},enumerable:!1});if(A._zod.traits.has(g))return;A._zod.traits.add(g),i(A,W);let G=O.prototype,m=Object.keys(G);for(let q=0;q<m.length;q++){let X=m[q];if(!(X in A))A[X]=G[X].bind(A)}}let u=h?.Parent??Object;class P extends u{}Object.defineProperty(P,"name",{value:g});function O(A){var W;let G=h?.Parent?new P:this;t(G,A),(W=G._zod).deferred??(W.deferred=[]);for(let m of G._zod.deferred)m();return G}return Object.defineProperty(O,"init",{value:t}),Object.defineProperty(O,Symbol.hasInstance,{value:(A)=>{if(h?.Parent&&A instanceof h.Parent)return!0;return A?._zod?.traits?.has(g)}}),Object.defineProperty(O,"name",{value:g}),O}var Qco=Symbol("zod_brand");class Wi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class O1 extends Error{constructor(g){super(`Encountered unidirectional transform during encode: ${g}`);this.name="ZodEncodeError"}}(sR=globalThis).__zod_globalConfig??(sR.__zod_globalConfig={});var yn=globalThis.__zod_globalConfig;function mi(g){if(g)Object.assign(yn,g);return yn}var Oo={};LJ(Oo,{unwrapMessage:()=>A1,uint8ArrayToHex:()=>cz,uint8ArrayToBase64url:()=>Dz,uint8ArrayToBase64:()=>tW,stringifyPrimitive:()=>lW,slugify:()=>Z6,shallowClone:()=>eW,safeExtend:()=>Nz,required:()=>Cz,randomString:()=>Uz,propertyKeyTypes:()=>S6,promiseAllObject:()=>zz,primitiveTypes:()=>gW,prefixIssues:()=>W1,pick:()=>Lz,partial:()=>Zz,parsedType:()=>Sz,optionalKeys:()=>T6,omit:()=>Fz,objectClone:()=>Yz,numKeys:()=>Kz,nullish:()=>M1,normalizeParams:()=>cr,mergeDefs:()=>Gi,merge:()=>Bz,jsonStringifyReplacer:()=>an,joinValues:()=>Xz,issue:()=>En,isPlainObject:()=>U0,isObject:()=>_n,hexToUint8Array:()=>Vz,getSizableOrigin:()=>nW,getParsedType:()=>$z,getLengthableOrigin:()=>m1,getEnumValues:()=>H1,getElementAtPath:()=>Qz,floatSafeRemainder:()=>oW,finalizeIssue:()=>Dl,extend:()=>xz,explicitlyAborted:()=>k6,escapeRegex:()=>Xi,esc:()=>uw,defineLazy:()=>Po,createTransparentProxy:()=>Iz,cloneDef:()=>Jz,clone:()=>el,cleanRegex:()=>R1,cleanEnum:()=>Tz,captureStackTrace:()=>ww,cached:()=>q1,base64urlToUint8Array:()=>kz,base64ToUint8Array:()=>hW,assignProp:()=>Gv,assertNotEqual:()=>Rz,assertNever:()=>mz,assertIs:()=>Wz,assertEqual:()=>Mz,assert:()=>Gz,allowsEval:()=>C6,aborted:()=>Xv,NUMBER_FORMAT_RANGES:()=>iW,Class:()=>bW,BIGINT_FORMAT_RANGES:()=>vW});function Mz(g){return g}function Rz(g){return g}function Wz(g){}function mz(g){throw Error("Unexpected value in exhaustive check")}function Gz(g){}function H1(g){let i=Object.values(g).filter((t)=>typeof t==="number");return Object.entries(g).filter(([t,u])=>i.indexOf(+t)===-1).map(([t,u])=>u)}function Xz(g,i="|"){return g.map((h)=>lW(h)).join(i)}function an(g,i){if(typeof i==="bigint")return i.toString();return i}function q1(g){return{get value(){{let h=g();return Object.defineProperty(this,"value",{value:h}),h}throw Error("cached value already set")}}}function M1(g){return g===null||g===void 0}function R1(g){let i=g.startsWith("^")?1:0,h=g.endsWith("$")?g.length-1:g.length;return g.slice(i,h)}function oW(g,i){let h=g/i,t=Math.round(h),u=Number.EPSILON*Math.max(Math.abs(h),1);if(Math.abs(h-t)<u)return 0;return h-t}var rW=Symbol("evaluating");function Po(g,i,h){let t=void 0;Object.defineProperty(g,i,{get(){if(t===rW)return;if(t===void 0)t=rW,t=h();return t},set(u){Object.defineProperty(g,i,{value:u})},configurable:!0})}function Yz(g){return Object.create(Object.getPrototypeOf(g),Object.getOwnPropertyDescriptors(g))}function Gv(g,i,h){Object.defineProperty(g,i,{value:h,writable:!0,enumerable:!0,configurable:!0})}function Gi(...g){let i={};for(let h of g){let t=Object.getOwnPropertyDescriptors(h);Object.assign(i,t)}return Object.defineProperties({},i)}function Jz(g){return Gi(g._zod.def)}function Qz(g,i){if(!i)return g;return i.reduce((h,t)=>h?.[t],g)}function zz(g){let i=Object.keys(g),h=i.map((t)=>g[t]);return Promise.all(h).then((t)=>{let u={};for(let P=0;P<i.length;P++)u[i[P]]=t[P];return u})}function Uz(g=10){let h="";for(let t=0;t<g;t++)h+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return h}function uw(g){return JSON.stringify(g)}function Z6(g){return g.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var ww="captureStackTrace"in Error?Error.captureStackTrace:(...g)=>{};function _n(g){return typeof g==="object"&&g!==null&&!Array.isArray(g)}var C6=q1(()=>{if(yn.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(g){return!1}});function U0(g){if(_n(g)===!1)return!1;let i=g.constructor;if(i===void 0)return!0;if(typeof i!=="function")return!0;let h=i.prototype;if(_n(h)===!1)return!1;if(Object.prototype.hasOwnProperty.call(h,"isPrototypeOf")===!1)return!1;return!0}function eW(g){if(U0(g))return{...g};if(Array.isArray(g))return[...g];if(g instanceof Map)return new Map(g);if(g instanceof Set)return new Set(g);return g}function Kz(g){let i=0;for(let h in g)if(Object.prototype.hasOwnProperty.call(g,h))i++;return i}var $z=(g)=>{let i=typeof g;switch(i){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(g)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(g))return"array";if(g===null)return"null";if(g.then&&typeof g.then==="function"&&g.catch&&typeof g.catch==="function")return"promise";if(typeof Map<"u"&&g instanceof Map)return"map";if(typeof Set<"u"&&g instanceof Set)return"set";if(typeof Date<"u"&&g instanceof Date)return"date";if(typeof File<"u"&&g instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${i}`)}},S6=new Set(["string","number","symbol"]),gW=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Xi(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function el(g,i,h){let t=new g._zod.constr(i??g._zod.def);if(!i||h?.parent)t._zod.parent=g;return t}function cr(g){let i=g;if(!i)return{};if(typeof i==="string")return{error:()=>i};if(i?.message!==void 0){if(i?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");i.error=i.message}if(delete i.message,typeof i.error==="string")return{...i,error:()=>i.error};return i}function Iz(g){let i;return new Proxy({},{get(h,t,u){return i??(i=g()),Reflect.get(i,t,u)},set(h,t,u,P){return i??(i=g()),Reflect.set(i,t,u,P)},has(h,t){return i??(i=g()),Reflect.has(i,t)},deleteProperty(h,t){return i??(i=g()),Reflect.deleteProperty(i,t)},ownKeys(h){return i??(i=g()),Reflect.ownKeys(i)},getOwnPropertyDescriptor(h,t){return i??(i=g()),Reflect.getOwnPropertyDescriptor(i,t)},defineProperty(h,t,u){return i??(i=g()),Reflect.defineProperty(i,t,u)}})}function lW(g){if(typeof g==="bigint")return g.toString()+"n";if(typeof g==="string")return`"${g}"`;return`${g}`}function T6(g){return Object.keys(g).filter((i)=>{return g[i]._zod.optin==="optional"&&g[i]._zod.optout==="optional"})}var iW={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},vW={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Lz(g,i){let h=g._zod.def,t=h.checks;if(t&&t.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Gi(g._zod.def,{get shape(){let O={};for(let A in i){if(!(A in h.shape))throw Error(`Unrecognized key: "${A}"`);if(!i[A])continue;O[A]=h.shape[A]}return Gv(this,"shape",O),O},checks:[]});return el(g,P)}function Fz(g,i){let h=g._zod.def,t=h.checks;if(t&&t.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Gi(g._zod.def,{get shape(){let O={...g._zod.def.shape};for(let A in i){if(!(A in h.shape))throw Error(`Unrecognized key: "${A}"`);if(!i[A])continue;delete O[A]}return Gv(this,"shape",O),O},checks:[]});return el(g,P)}function xz(g,i){if(!U0(i))throw Error("Invalid input to extend: expected a plain object");let h=g._zod.def.checks;if(h&&h.length>0){let P=g._zod.def.shape;for(let O in i)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let u=Gi(g._zod.def,{get shape(){let P={...g._zod.def.shape,...i};return Gv(this,"shape",P),P}});return el(g,u)}function Nz(g,i){if(!U0(i))throw Error("Invalid input to safeExtend: expected a plain object");let h=Gi(g._zod.def,{get shape(){let t={...g._zod.def.shape,...i};return Gv(this,"shape",t),t}});return el(g,h)}function Bz(g,i){if(g._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let h=Gi(g._zod.def,{get shape(){let t={...g._zod.def.shape,...i._zod.def.shape};return Gv(this,"shape",t),t},get catchall(){return i._zod.def.catchall},checks:i._zod.def.checks??[]});return el(g,h)}function Zz(g,i,h){let u=i._zod.def.checks;if(u&&u.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Gi(i._zod.def,{get shape(){let A=i._zod.def.shape,W={...A};if(h)for(let G in h){if(!(G in A))throw Error(`Unrecognized key: "${G}"`);if(!h[G])continue;W[G]=g?new g({type:"optional",innerType:A[G]}):A[G]}else for(let G in A)W[G]=g?new g({type:"optional",innerType:A[G]}):A[G];return Gv(this,"shape",W),W},checks:[]});return el(i,O)}function Cz(g,i,h){let t=Gi(i._zod.def,{get shape(){let u=i._zod.def.shape,P={...u};if(h)for(let O in h){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!h[O])continue;P[O]=new g({type:"nonoptional",innerType:u[O]})}else for(let O in u)P[O]=new g({type:"nonoptional",innerType:u[O]});return Gv(this,"shape",P),P}});return el(i,t)}function Xv(g,i=0){if(g.aborted===!0)return!0;for(let h=i;h<g.issues.length;h++)if(g.issues[h]?.continue!==!0)return!0;return!1}function k6(g,i=0){if(g.aborted===!0)return!0;for(let h=i;h<g.issues.length;h++)if(g.issues[h]?.continue===!1)return!0;return!1}function W1(g,i){return i.map((h)=>{var t;return(t=h).path??(t.path=[]),h.path.unshift(g),h})}function A1(g){return typeof g==="string"?g:g?.message}function Dl(g,i,h){let t=g.message?g.message:A1(g.inst?._zod.def?.error?.(g))??A1(i?.error?.(g))??A1(h.customError?.(g))??A1(h.localeError?.(g))??"Invalid input",{inst:u,continue:P,input:O,...A}=g;if(A.path??(A.path=[]),A.message=t,i?.reportInput)A.input=O;return A}function nW(g){if(g instanceof Set)return"set";if(g instanceof Map)return"map";if(g instanceof File)return"file";return"unknown"}function m1(g){if(Array.isArray(g))return"array";if(typeof g==="string")return"string";return"unknown"}function Sz(g){let i=typeof g;switch(i){case"number":return Number.isNaN(g)?"nan":"number";case"object":{if(g===null)return"null";if(Array.isArray(g))return"array";let h=g;if(h&&Object.getPrototypeOf(h)!==Object.prototype&&"constructor"in h&&h.constructor)return h.constructor.name}}return i}function En(...g){let[i,h,t]=g;if(typeof i==="string")return{message:i,code:"custom",input:h,inst:t};return{...i}}function Tz(g){return Object.entries(g).filter(([i,h])=>{return Number.isNaN(Number.parseInt(i,10))}).map((i)=>i[1])}function hW(g){let i=atob(g),h=new Uint8Array(i.length);for(let t=0;t<i.length;t++)h[t]=i.charCodeAt(t);return h}function tW(g){let i="";for(let h=0;h<g.length;h++)i+=String.fromCharCode(g[h]);return btoa(i)}function kz(g){let i=g.replace(/-/g,"+").replace(/_/g,"/"),h="=".repeat((4-i.length%4)%4);return hW(i+h)}function Dz(g){return tW(g).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Vz(g){let i=g.replace(/^0x/,"");if(i.length%2!==0)throw Error("Invalid hex string length");let h=new Uint8Array(i.length/2);for(let t=0;t<i.length;t+=2)h[t/2]=Number.parseInt(i.slice(t,t+2),16);return h}function cz(g){return Array.from(g).map((i)=>i.toString(16).padStart(2,"0")).join("")}class bW{constructor(...g){}}var uW=(g,i)=>{g.name="$ZodError",Object.defineProperty(g,"_zod",{value:g._zod,enumerable:!1}),Object.defineProperty(g,"issues",{value:i,enumerable:!1}),g.message=JSON.stringify(i,an,2),Object.defineProperty(g,"toString",{value:()=>g.message,enumerable:!1})},Pw=_("$ZodError",uW),D6=_("$ZodError",uW,{Parent:Error});function wW(g,i=(h)=>h.message){let h={},t=[];for(let u of g.issues)if(u.path.length>0)h[u.path[0]]=h[u.path[0]]||[],h[u.path[0]].push(i(u));else t.push(i(u));return{formErrors:t,fieldErrors:h}}function PW(g,i=(h)=>h.message){let h={_errors:[]},t=(u,P=[])=>{for(let O of u.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((A)=>t({issues:A},[...P,...O.path]));else if(O.code==="invalid_key")t({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")t({issues:O.issues},[...P,...O.path]);else{let A=[...P,...O.path];if(A.length===0)h._errors.push(i(O));else{let W=h,G=0;while(G<A.length){let m=A[G];if(G!==A.length-1)W[m]=W[m]||{_errors:[]};else W[m]=W[m]||{_errors:[]},W[m]._errors.push(i(O));W=W[m],G++}}}};return t(g),h}var Ow=(g)=>(i,h,t,u)=>{let P=t?{...t,async:!1}:{async:!1},O=i._zod.run({value:h,issues:[]},P);if(O instanceof Promise)throw new Wi;if(O.issues.length){let A=new(u?.Err??g)(O.issues.map((W)=>Dl(W,P,mi())));throw ww(A,u?.callee),A}return O.value};var Aw=(g)=>async(i,h,t,u)=>{let P=t?{...t,async:!0}:{async:!0},O=i._zod.run({value:h,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let A=new(u?.Err??g)(O.issues.map((W)=>Dl(W,P,mi())));throw ww(A,u?.callee),A}return O.value};var G1=(g)=>(i,h,t)=>{let u=t?{...t,async:!1}:{async:!1},P=i._zod.run({value:h,issues:[]},u);if(P instanceof Promise)throw new Wi;return P.issues.length?{success:!1,error:new(g??Pw)(P.issues.map((O)=>Dl(O,u,mi())))}:{success:!0,data:P.value}},OW=G1(D6),X1=(g)=>async(i,h,t)=>{let u=t?{...t,async:!0}:{async:!0},P=i._zod.run({value:h,issues:[]},u);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new g(P.issues.map((O)=>Dl(O,u,mi())))}:{success:!0,data:P.value}},AW=X1(D6),HW=(g)=>(i,h,t)=>{let u=t?{...t,direction:"backward"}:{direction:"backward"};return Ow(g)(i,h,u)};var qW=(g)=>(i,h,t)=>{return Ow(g)(i,h,t)};var MW=(g)=>async(i,h,t)=>{let u=t?{...t,direction:"backward"}:{direction:"backward"};return Aw(g)(i,h,u)};var RW=(g)=>async(i,h,t)=>{return Aw(g)(i,h,t)};var WW=(g)=>(i,h,t)=>{let u=t?{...t,direction:"backward"}:{direction:"backward"};return G1(g)(i,h,u)};var mW=(g)=>(i,h,t)=>{return G1(g)(i,h,t)};var GW=(g)=>async(i,h,t)=>{let u=t?{...t,direction:"backward"}:{direction:"backward"};return X1(g)(i,h,u)};var XW=(g)=>async(i,h,t)=>{return X1(g)(i,h,t)};var YW=/^[cC][0-9a-z]{6,}$/,JW=/^[0-9a-z]+$/,QW=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,zW=/^[0-9a-vA-V]{20}$/,UW=/^[A-Za-z0-9]{27}$/,KW=/^[a-zA-Z0-9_-]{21}$/,$W=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var IW=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,V6=(g)=>{if(!g)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${g}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var LW=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var _z="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function FW(){return new RegExp(_z,"u")}var xW=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,NW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var BW=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,ZW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,CW=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,c6=/^[A-Za-z0-9_-]*$/;var SW=/^https?$/,TW=/^\+[1-9]\d{6,14}$/,kW="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",DW=new RegExp(`^${kW}$`);function VW(g){return typeof g.precision==="number"?g.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":g.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${g.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function cW(g){return new RegExp(`^${VW(g)}$`)}function yW(g){let i=VW({precision:g.precision}),h=["Z"];if(g.local)h.push("");if(g.offset)h.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let t=`${i}(?:${h.join("|")})`;return new RegExp(`^${kW}T(?:${t})$`)}var _W=(g)=>{let i=g?`[\\s\\S]{${g?.minimum??0},${g?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${i}$`)};var aW=/^[^A-Z]*$/,EW=/^[^a-z]*$/;var Wg=_("$ZodCheck",(g,i)=>{var h;g._zod??(g._zod={}),g._zod.def=i,(h=g._zod).onattach??(h.onattach=[])});var fW=_("$ZodCheckMaxLength",(g,i)=>{var h;Wg.init(g,i),(h=g._zod.def).when??(h.when=(t)=>{let u=t.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((t)=>{let u=t._zod.bag.maximum??Number.POSITIVE_INFINITY;if(i.maximum<u)t._zod.bag.maximum=i.maximum}),g._zod.check=(t)=>{let u=t.value;if(u.length<=i.maximum)return;let O=m1(u);t.issues.push({origin:O,code:"too_big",maximum:i.maximum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),jW=_("$ZodCheckMinLength",(g,i)=>{var h;Wg.init(g,i),(h=g._zod.def).when??(h.when=(t)=>{let u=t.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((t)=>{let u=t._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(i.minimum>u)t._zod.bag.minimum=i.minimum}),g._zod.check=(t)=>{let u=t.value;if(u.length>=i.minimum)return;let O=m1(u);t.issues.push({origin:O,code:"too_small",minimum:i.minimum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),pW=_("$ZodCheckLengthEquals",(g,i)=>{var h;Wg.init(g,i),(h=g._zod.def).when??(h.when=(t)=>{let u=t.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((t)=>{let u=t._zod.bag;u.minimum=i.length,u.maximum=i.length,u.length=i.length}),g._zod.check=(t)=>{let u=t.value,P=u.length;if(P===i.length)return;let O=m1(u),A=P>i.length;t.issues.push({origin:O,...A?{code:"too_big",maximum:i.length}:{code:"too_small",minimum:i.length},inclusive:!0,exact:!0,input:t.value,inst:g,continue:!i.abort})}}),Y1=_("$ZodCheckStringFormat",(g,i)=>{var h,t;if(Wg.init(g,i),g._zod.onattach.push((u)=>{let P=u._zod.bag;if(P.format=i.format,i.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(i.pattern)}),i.pattern)(h=g._zod).check??(h.check=(u)=>{if(i.pattern.lastIndex=0,i.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:i.format,input:u.value,...i.pattern?{pattern:i.pattern.toString()}:{},inst:g,continue:!i.abort})});else(t=g._zod).check??(t.check=()=>{})}),dW=_("$ZodCheckRegex",(g,i)=>{Y1.init(g,i),g._zod.check=(h)=>{if(i.pattern.lastIndex=0,i.pattern.test(h.value))return;h.issues.push({origin:"string",code:"invalid_format",format:"regex",input:h.value,pattern:i.pattern.toString(),inst:g,continue:!i.abort})}}),sW=_("$ZodCheckLowerCase",(g,i)=>{i.pattern??(i.pattern=aW),Y1.init(g,i)}),r9=_("$ZodCheckUpperCase",(g,i)=>{i.pattern??(i.pattern=EW),Y1.init(g,i)}),o9=_("$ZodCheckIncludes",(g,i)=>{Wg.init(g,i);let h=Xi(i.includes),t=new RegExp(typeof i.position==="number"?`^.{${i.position}}${h}`:h);i.pattern=t,g._zod.onattach.push((u)=>{let P=u._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(t)}),g._zod.check=(u)=>{if(u.value.includes(i.includes,i.position))return;u.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:i.includes,input:u.value,inst:g,continue:!i.abort})}}),e9=_("$ZodCheckStartsWith",(g,i)=>{Wg.init(g,i);let h=new RegExp(`^${Xi(i.prefix)}.*`);i.pattern??(i.pattern=h),g._zod.onattach.push((t)=>{let u=t._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(h)}),g._zod.check=(t)=>{if(t.value.startsWith(i.prefix))return;t.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:i.prefix,input:t.value,inst:g,continue:!i.abort})}}),g9=_("$ZodCheckEndsWith",(g,i)=>{Wg.init(g,i);let h=new RegExp(`.*${Xi(i.suffix)}$`);i.pattern??(i.pattern=h),g._zod.onattach.push((t)=>{let u=t._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(h)}),g._zod.check=(t)=>{if(t.value.endsWith(i.suffix))return;t.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:i.suffix,input:t.value,inst:g,continue:!i.abort})}});var l9=_("$ZodCheckOverwrite",(g,i)=>{Wg.init(g,i),g._zod.check=(h)=>{h.value=i.tx(h.value)}});class y6{constructor(g=[]){if(this.content=[],this.indent=0,this)this.args=g}indented(g){this.indent+=1,g(this),this.indent-=1}write(g){if(typeof g==="function"){g(this,{execution:"sync"}),g(this,{execution:"async"});return}let h=g.split(`
`).filter((P)=>P),t=Math.min(...h.map((P)=>P.length-P.trimStart().length)),u=h.map((P)=>P.slice(t)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of u)this.content.push(P)}compile(){let g=Function,i=this?.args,t=[...(this?.content??[""]).map((u)=>`  ${u}`)];return new g(...i,t.join(`
`))}}var v9={major:4,minor:4,patch:3};var yo=_("$ZodType",(g,i)=>{var h;g??(g={}),g._zod.def=i,g._zod.bag=g._zod.bag||{},g._zod.version=v9;let t=[...g._zod.def.checks??[]];if(g._zod.traits.has("$ZodCheck"))t.unshift(g);for(let u of t)for(let P of u._zod.onattach)P(g);if(t.length===0)(h=g._zod).deferred??(h.deferred=[]),g._zod.deferred?.push(()=>{g._zod.run=g._zod.parse});else{let u=(O,A,W)=>{let G=Xv(O),m;for(let q of A){if(q._zod.def.when){if(k6(O))continue;if(!q._zod.def.when(O))continue}else if(G)continue;let X=O.issues.length,I=q._zod.check(O);if(I instanceof Promise&&W?.async===!1)throw new Wi;if(m||I instanceof Promise)m=(m??Promise.resolve()).then(async()=>{if(await I,O.issues.length===X)return;if(!G)G=Xv(O,X)});else{if(O.issues.length===X)continue;if(!G)G=Xv(O,X)}}if(m)return m.then(()=>{return O});return O},P=(O,A,W)=>{if(Xv(O))return O.aborted=!0,O;let G=u(A,t,W);if(G instanceof Promise){if(W.async===!1)throw new Wi;return G.then((m)=>g._zod.parse(m,W))}return g._zod.parse(G,W)};g._zod.run=(O,A)=>{if(A.skipChecks)return g._zod.parse(O,A);if(A.direction==="backward"){let G=g._zod.parse({value:O.value,issues:[]},{...A,skipChecks:!0});if(G instanceof Promise)return G.then((m)=>{return P(m,O,A)});return P(G,O,A)}let W=g._zod.parse(O,A);if(W instanceof Promise){if(A.async===!1)throw new Wi;return W.then((G)=>u(G,t,A))}return u(W,t,A)}}Po(g,"~standard",()=>({validate:(u)=>{try{let P=OW(g,u);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return AW(g,u).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),Rw=_("$ZodString",(g,i)=>{yo.init(g,i),g._zod.pattern=[...g?._zod.bag?.patterns??[]].pop()??_W(g._zod.bag),g._zod.parse=(h,t)=>{if(i.coerce)try{h.value=String(h.value)}catch(u){}if(typeof h.value==="string")return h;return h.issues.push({expected:"string",code:"invalid_type",input:h.value,inst:g}),h}}),Io=_("$ZodStringFormat",(g,i)=>{Y1.init(g,i),Rw.init(g,i)}),A9=_("$ZodGUID",(g,i)=>{i.pattern??(i.pattern=IW),Io.init(g,i)}),H9=_("$ZodUUID",(g,i)=>{if(i.version){let t={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[i.version];if(t===void 0)throw Error(`Invalid UUID version: "${i.version}"`);i.pattern??(i.pattern=V6(t))}else i.pattern??(i.pattern=V6());Io.init(g,i)}),q9=_("$ZodEmail",(g,i)=>{i.pattern??(i.pattern=LW),Io.init(g,i)}),M9=_("$ZodURL",(g,i)=>{Io.init(g,i),g._zod.check=(h)=>{try{let t=h.value.trim();if(!i.normalize&&i.protocol?.source===SW.source){if(!/^https?:\/\//i.test(t)){h.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:h.value,inst:g,continue:!i.abort});return}}let u=new URL(t);if(i.hostname){if(i.hostname.lastIndex=0,!i.hostname.test(u.hostname))h.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:i.hostname.source,input:h.value,inst:g,continue:!i.abort})}if(i.protocol){if(i.protocol.lastIndex=0,!i.protocol.test(u.protocol.endsWith(":")?u.protocol.slice(0,-1):u.protocol))h.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:i.protocol.source,input:h.value,inst:g,continue:!i.abort})}if(i.normalize)h.value=u.href;else h.value=t;return}catch(t){h.issues.push({code:"invalid_format",format:"url",input:h.value,inst:g,continue:!i.abort})}}}),R9=_("$ZodEmoji",(g,i)=>{i.pattern??(i.pattern=FW()),Io.init(g,i)}),W9=_("$ZodNanoID",(g,i)=>{i.pattern??(i.pattern=KW),Io.init(g,i)}),m9=_("$ZodCUID",(g,i)=>{i.pattern??(i.pattern=YW),Io.init(g,i)}),G9=_("$ZodCUID2",(g,i)=>{i.pattern??(i.pattern=JW),Io.init(g,i)}),X9=_("$ZodULID",(g,i)=>{i.pattern??(i.pattern=QW),Io.init(g,i)}),Y9=_("$ZodXID",(g,i)=>{i.pattern??(i.pattern=zW),Io.init(g,i)}),J9=_("$ZodKSUID",(g,i)=>{i.pattern??(i.pattern=UW),Io.init(g,i)}),Q9=_("$ZodISODateTime",(g,i)=>{i.pattern??(i.pattern=yW(i)),Io.init(g,i)}),z9=_("$ZodISODate",(g,i)=>{i.pattern??(i.pattern=DW),Io.init(g,i)}),U9=_("$ZodISOTime",(g,i)=>{i.pattern??(i.pattern=cW(i)),Io.init(g,i)}),K9=_("$ZodISODuration",(g,i)=>{i.pattern??(i.pattern=$W),Io.init(g,i)}),$9=_("$ZodIPv4",(g,i)=>{i.pattern??(i.pattern=xW),Io.init(g,i),g._zod.bag.format="ipv4"}),I9=_("$ZodIPv6",(g,i)=>{i.pattern??(i.pattern=NW),Io.init(g,i),g._zod.bag.format="ipv6",g._zod.check=(h)=>{try{new URL(`http://[${h.value}]`)}catch{h.issues.push({code:"invalid_format",format:"ipv6",input:h.value,inst:g,continue:!i.abort})}}});var L9=_("$ZodCIDRv4",(g,i)=>{i.pattern??(i.pattern=BW),Io.init(g,i)}),F9=_("$ZodCIDRv6",(g,i)=>{i.pattern??(i.pattern=ZW),Io.init(g,i),g._zod.check=(h)=>{let t=h.value.split("/");try{if(t.length!==2)throw Error();let[u,P]=t;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${u}]`)}catch{h.issues.push({code:"invalid_format",format:"cidrv6",input:h.value,inst:g,continue:!i.abort})}}});function x9(g){if(g==="")return!0;if(/\s/.test(g))return!1;if(g.length%4!==0)return!1;try{return atob(g),!0}catch{return!1}}var N9=_("$ZodBase64",(g,i)=>{i.pattern??(i.pattern=CW),Io.init(g,i),g._zod.bag.contentEncoding="base64",g._zod.check=(h)=>{if(x9(h.value))return;h.issues.push({code:"invalid_format",format:"base64",input:h.value,inst:g,continue:!i.abort})}});function az(g){if(!c6.test(g))return!1;let i=g.replace(/[-_]/g,(t)=>t==="-"?"+":"/"),h=i.padEnd(Math.ceil(i.length/4)*4,"=");return x9(h)}var B9=_("$ZodBase64URL",(g,i)=>{i.pattern??(i.pattern=c6),Io.init(g,i),g._zod.bag.contentEncoding="base64url",g._zod.check=(h)=>{if(az(h.value))return;h.issues.push({code:"invalid_format",format:"base64url",input:h.value,inst:g,continue:!i.abort})}}),Z9=_("$ZodE164",(g,i)=>{i.pattern??(i.pattern=TW),Io.init(g,i)});function Ez(g,i=null){try{let h=g.split(".");if(h.length!==3)return!1;let[t]=h;if(!t)return!1;let u=JSON.parse(atob(t));if("typ"in u&&u?.typ!=="JWT")return!1;if(!u.alg)return!1;if(i&&(!("alg"in u)||u.alg!==i))return!1;return!0}catch{return!1}}var C9=_("$ZodJWT",(g,i)=>{Io.init(g,i),g._zod.check=(h)=>{if(Ez(h.value,i.alg))return;h.issues.push({code:"invalid_format",format:"jwt",input:h.value,inst:g,continue:!i.abort})}});var S9=_("$ZodUnknown",(g,i)=>{yo.init(g,i),g._zod.parse=(h)=>h}),T9=_("$ZodNever",(g,i)=>{yo.init(g,i),g._zod.parse=(h,t)=>{return h.issues.push({expected:"never",code:"invalid_type",input:h.value,inst:g}),h}});function n9(g,i,h){if(g.issues.length)i.issues.push(...W1(h,g.issues));i.value[h]=g.value}var k9=_("$ZodArray",(g,i)=>{yo.init(g,i),g._zod.parse=(h,t)=>{let u=h.value;if(!Array.isArray(u))return h.issues.push({expected:"array",code:"invalid_type",input:u,inst:g}),h;h.value=Array(u.length);let P=[];for(let O=0;O<u.length;O++){let A=u[O],W=i.element._zod.run({value:A,issues:[]},t);if(W instanceof Promise)P.push(W.then((G)=>n9(G,h,O)));else n9(W,h,O)}if(P.length)return Promise.all(P).then(()=>h);return h}});function Mw(g,i,h,t,u,P){let O=h in t;if(g.issues.length){if(u&&P&&!O)return;i.issues.push(...W1(h,g.issues))}if(!O&&!u){if(!g.issues.length)i.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[h]});return}if(g.value===void 0){if(O)i.value[h]=void 0}else i.value[h]=g.value}function D9(g){let i=Object.keys(g.shape);for(let t of i)if(!g.shape?.[t]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${t}": expected a Zod schema`);let h=T6(g.shape);return{...g,keys:i,keySet:new Set(i),numKeys:i.length,optionalKeys:new Set(h)}}function V9(g,i,h,t,u,P){let O=[],A=u.keySet,W=u.catchall._zod,G=W.def.type,m=W.optin==="optional",q=W.optout==="optional";for(let X in i){if(X==="__proto__")continue;if(A.has(X))continue;if(G==="never"){O.push(X);continue}let I=W.run({value:i[X],issues:[]},t);if(I instanceof Promise)g.push(I.then((T)=>Mw(T,h,X,i,m,q)));else Mw(I,h,X,i,m,q)}if(O.length)h.issues.push({code:"unrecognized_keys",keys:O,input:i,inst:P});if(!g.length)return h;return Promise.all(g).then(()=>{return h})}var fz=_("$ZodObject",(g,i)=>{if(yo.init(g,i),!Object.getOwnPropertyDescriptor(i,"shape")?.get){let A=i.shape;Object.defineProperty(i,"shape",{get:()=>{let W={...A};return Object.defineProperty(i,"shape",{value:W}),W}})}let t=q1(()=>D9(i));Po(g._zod,"propValues",()=>{let A=i.shape,W={};for(let G in A){let m=A[G]._zod;if(m.values){W[G]??(W[G]=new Set);for(let q of m.values)W[G].add(q)}}return W});let u=_n,P=i.catchall,O;g._zod.parse=(A,W)=>{O??(O=t.value);let G=A.value;if(!u(G))return A.issues.push({expected:"object",code:"invalid_type",input:G,inst:g}),A;A.value={};let m=[],q=O.shape;for(let X of O.keys){let I=q[X],T=I._zod.optin==="optional",Z=I._zod.optout==="optional",c=I._zod.run({value:G[X],issues:[]},W);if(c instanceof Promise)m.push(c.then((rr)=>Mw(rr,A,X,G,T,Z)));else Mw(c,A,X,G,T,Z)}if(!P)return m.length?Promise.all(m).then(()=>A):A;return V9(m,G,A,W,t.value,g)}}),c9=_("$ZodObjectJIT",(g,i)=>{fz.init(g,i);let h=g._zod.parse,t=q1(()=>D9(i)),u=(X)=>{let I=new y6(["shape","payload","ctx"]),T=t.value,Z=(lr)=>{let E=uw(lr);return`shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`};I.write("const input = payload.value;");let c=Object.create(null),rr=0;for(let lr of T.keys)c[lr]=`key_${rr++}`;I.write("const newResult = {};");for(let lr of T.keys){let E=c[lr],p=uw(lr),gr=X[lr],N=gr?._zod?.optin==="optional",y=gr?._zod?.optout==="optional";if(I.write(`const ${E} = ${Z(lr)};`),N&&y)I.write(`
        if (${E}.issues.length) {
          if (${p} in input) {
            payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${p}, ...iss.path] : [${p}]
            })));
          }
        }
        
        if (${E}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${E}.value;
        }
        
      `);else if(!N)I.write(`
        const ${E}_present = ${p} in input;
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        if (!${E}_present && !${E}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${p}]
          });
        }

        if (${E}_present) {
          if (${E}.value === undefined) {
            newResult[${p}] = undefined;
          } else {
            newResult[${p}] = ${E}.value;
          }
        }

      `);else I.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        
        if (${E}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${E}.value;
        }
        
      `)}I.write("payload.value = newResult;"),I.write("return payload;");let ur=I.compile();return(lr,E)=>ur(X,lr,E)},P,O=_n,A=!yn.jitless,G=A&&C6.value,m=i.catchall,q;g._zod.parse=(X,I)=>{q??(q=t.value);let T=X.value;if(!O(T))return X.issues.push({expected:"object",code:"invalid_type",input:T,inst:g}),X;if(A&&G&&I?.async===!1&&I.jitless!==!0){if(!P)P=u(i.shape);if(X=P(X,I),!m)return X;return V9([],T,X,I,q,g)}return h(X,I)}});function h9(g,i,h,t){for(let P of g)if(P.issues.length===0)return i.value=P.value,i;let u=g.filter((P)=>!Xv(P));if(u.length===1)return i.value=u[0].value,u[0];return i.issues.push({code:"invalid_union",input:i.value,inst:h,errors:g.map((P)=>P.issues.map((O)=>Dl(O,t,mi())))}),i}var y9=_("$ZodUnion",(g,i)=>{yo.init(g,i),Po(g._zod,"optin",()=>i.options.some((t)=>t._zod.optin==="optional")?"optional":void 0),Po(g._zod,"optout",()=>i.options.some((t)=>t._zod.optout==="optional")?"optional":void 0),Po(g._zod,"values",()=>{if(i.options.every((t)=>t._zod.values))return new Set(i.options.flatMap((t)=>Array.from(t._zod.values)));return}),Po(g._zod,"pattern",()=>{if(i.options.every((t)=>t._zod.pattern)){let t=i.options.map((u)=>u._zod.pattern);return new RegExp(`^(${t.map((u)=>R1(u.source)).join("|")})$`)}return});let h=i.options.length===1?i.options[0]._zod.run:null;g._zod.parse=(t,u)=>{if(h)return h(t,u);let P=!1,O=[];for(let A of i.options){let W=A._zod.run({value:t.value,issues:[]},u);if(W instanceof Promise)O.push(W),P=!0;else{if(W.issues.length===0)return W;O.push(W)}}if(!P)return h9(O,t,g,u);return Promise.all(O).then((A)=>{return h9(A,t,g,u)})}});var _9=_("$ZodIntersection",(g,i)=>{yo.init(g,i),g._zod.parse=(h,t)=>{let u=h.value,P=i.left._zod.run({value:u,issues:[]},t),O=i.right._zod.run({value:u,issues:[]},t);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([W,G])=>{return t9(h,W,G)});return t9(h,P,O)}});function _6(g,i){if(g===i)return{valid:!0,data:g};if(g instanceof Date&&i instanceof Date&&+g===+i)return{valid:!0,data:g};if(U0(g)&&U0(i)){let h=Object.keys(i),t=Object.keys(g).filter((P)=>h.indexOf(P)!==-1),u={...g,...i};for(let P of t){let O=_6(g[P],i[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};u[P]=O.data}return{valid:!0,data:u}}if(Array.isArray(g)&&Array.isArray(i)){if(g.length!==i.length)return{valid:!1,mergeErrorPath:[]};let h=[];for(let t=0;t<g.length;t++){let u=g[t],P=i[t],O=_6(u,P);if(!O.valid)return{valid:!1,mergeErrorPath:[t,...O.mergeErrorPath]};h.push(O.data)}return{valid:!0,data:h}}return{valid:!1,mergeErrorPath:[]}}function t9(g,i,h){let t=new Map,u;for(let A of i.issues)if(A.code==="unrecognized_keys"){u??(u=A);for(let W of A.keys){if(!t.has(W))t.set(W,{});t.get(W).l=!0}}else g.issues.push(A);for(let A of h.issues)if(A.code==="unrecognized_keys")for(let W of A.keys){if(!t.has(W))t.set(W,{});t.get(W).r=!0}else g.issues.push(A);let P=[...t].filter(([,A])=>A.l&&A.r).map(([A])=>A);if(P.length&&u)g.issues.push({...u,keys:P});if(Xv(g))return g;let O=_6(i.value,h.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return g.value=O.data,g}var a9=_("$ZodEnum",(g,i)=>{yo.init(g,i);let h=H1(i.entries),t=new Set(h);g._zod.values=t,g._zod.pattern=new RegExp(`^(${h.filter((u)=>S6.has(typeof u)).map((u)=>typeof u==="string"?Xi(u):u.toString()).join("|")})$`),g._zod.parse=(u,P)=>{let O=u.value;if(t.has(O))return u;return u.issues.push({code:"invalid_value",values:h,input:O,inst:g}),u}}),E9=_("$ZodLiteral",(g,i)=>{if(yo.init(g,i),i.values.length===0)throw Error("Cannot create literal schema with no valid values");let h=new Set(i.values);g._zod.values=h,g._zod.pattern=new RegExp(`^(${i.values.map((t)=>typeof t==="string"?Xi(t):t?Xi(t.toString()):String(t)).join("|")})$`),g._zod.parse=(t,u)=>{let P=t.value;if(h.has(P))return t;return t.issues.push({code:"invalid_value",values:i.values,input:P,inst:g}),t}});var f9=_("$ZodTransform",(g,i)=>{yo.init(g,i),g._zod.optin="optional",g._zod.parse=(h,t)=>{if(t.direction==="backward")throw new O1(g.constructor.name);let u=i.transform(h.value,h);if(t.async)return(u instanceof Promise?u:Promise.resolve(u)).then((O)=>{return h.value=O,h.fallback=!0,h});if(u instanceof Promise)throw new Wi;return h.value=u,h.fallback=!0,h}});function b9(g,i){if(i===void 0&&(g.issues.length||g.fallback))return{issues:[],value:void 0};return g}var a6=_("$ZodOptional",(g,i)=>{yo.init(g,i),g._zod.optin="optional",g._zod.optout="optional",Po(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,void 0]):void 0}),Po(g._zod,"pattern",()=>{let h=i.innerType._zod.pattern;return h?new RegExp(`^(${R1(h.source)})?$`):void 0}),g._zod.parse=(h,t)=>{if(i.innerType._zod.optin==="optional"){let u=h.value,P=i.innerType._zod.run(h,t);if(P instanceof Promise)return P.then((O)=>b9(O,u));return b9(P,u)}if(h.value===void 0)return h;return i.innerType._zod.run(h,t)}}),j9=_("$ZodExactOptional",(g,i)=>{a6.init(g,i),Po(g._zod,"values",()=>i.innerType._zod.values),Po(g._zod,"pattern",()=>i.innerType._zod.pattern),g._zod.parse=(h,t)=>{return i.innerType._zod.run(h,t)}}),p9=_("$ZodNullable",(g,i)=>{yo.init(g,i),Po(g._zod,"optin",()=>i.innerType._zod.optin),Po(g._zod,"optout",()=>i.innerType._zod.optout),Po(g._zod,"pattern",()=>{let h=i.innerType._zod.pattern;return h?new RegExp(`^(${R1(h.source)}|null)$`):void 0}),Po(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,null]):void 0}),g._zod.parse=(h,t)=>{if(h.value===null)return h;return i.innerType._zod.run(h,t)}}),d9=_("$ZodDefault",(g,i)=>{yo.init(g,i),g._zod.optin="optional",Po(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(h,t)=>{if(t.direction==="backward")return i.innerType._zod.run(h,t);if(h.value===void 0)return h.value=i.defaultValue,h;let u=i.innerType._zod.run(h,t);if(u instanceof Promise)return u.then((P)=>u9(P,i));return u9(u,i)}});function u9(g,i){if(g.value===void 0)g.value=i.defaultValue;return g}var s9=_("$ZodPrefault",(g,i)=>{yo.init(g,i),g._zod.optin="optional",Po(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(h,t)=>{if(t.direction==="backward")return i.innerType._zod.run(h,t);if(h.value===void 0)h.value=i.defaultValue;return i.innerType._zod.run(h,t)}}),r7=_("$ZodNonOptional",(g,i)=>{yo.init(g,i),Po(g._zod,"values",()=>{let h=i.innerType._zod.values;return h?new Set([...h].filter((t)=>t!==void 0)):void 0}),g._zod.parse=(h,t)=>{let u=i.innerType._zod.run(h,t);if(u instanceof Promise)return u.then((P)=>w9(P,g));return w9(u,g)}});function w9(g,i){if(!g.issues.length&&g.value===void 0)g.issues.push({code:"invalid_type",expected:"nonoptional",input:g.value,inst:i});return g}var o7=_("$ZodCatch",(g,i)=>{yo.init(g,i),g._zod.optin="optional",Po(g._zod,"optout",()=>i.innerType._zod.optout),Po(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(h,t)=>{if(t.direction==="backward")return i.innerType._zod.run(h,t);let u=i.innerType._zod.run(h,t);if(u instanceof Promise)return u.then((P)=>{if(h.value=P.value,P.issues.length)h.value=i.catchValue({...h,error:{issues:P.issues.map((O)=>Dl(O,t,mi()))},input:h.value}),h.issues=[],h.fallback=!0;return h});if(h.value=u.value,u.issues.length)h.value=i.catchValue({...h,error:{issues:u.issues.map((P)=>Dl(P,t,mi()))},input:h.value}),h.issues=[],h.fallback=!0;return h}});var e7=_("$ZodPipe",(g,i)=>{yo.init(g,i),Po(g._zod,"values",()=>i.in._zod.values),Po(g._zod,"optin",()=>i.in._zod.optin),Po(g._zod,"optout",()=>i.out._zod.optout),Po(g._zod,"propValues",()=>i.in._zod.propValues),g._zod.parse=(h,t)=>{if(t.direction==="backward"){let P=i.out._zod.run(h,t);if(P instanceof Promise)return P.then((O)=>qw(O,i.in,t));return qw(P,i.in,t)}let u=i.in._zod.run(h,t);if(u instanceof Promise)return u.then((P)=>qw(P,i.out,t));return qw(u,i.out,t)}});function qw(g,i,h){if(g.issues.length)return g.aborted=!0,g;return i._zod.run({value:g.value,issues:g.issues,fallback:g.fallback},h)}var g7=_("$ZodReadonly",(g,i)=>{yo.init(g,i),Po(g._zod,"propValues",()=>i.innerType._zod.propValues),Po(g._zod,"values",()=>i.innerType._zod.values),Po(g._zod,"optin",()=>i.innerType?._zod?.optin),Po(g._zod,"optout",()=>i.innerType?._zod?.optout),g._zod.parse=(h,t)=>{if(t.direction==="backward")return i.innerType._zod.run(h,t);let u=i.innerType._zod.run(h,t);if(u instanceof Promise)return u.then(P9);return P9(u)}});function P9(g){return g.value=Object.freeze(g.value),g}var l7=_("$ZodCustom",(g,i)=>{Wg.init(g,i),yo.init(g,i),g._zod.parse=(h,t)=>{return h},g._zod.check=(h)=>{let t=h.value,u=i.fn(t);if(u instanceof Promise)return u.then((P)=>O9(P,h,t,g));O9(u,h,t,g);return}});function O9(g,i,h,t){if(!g){let u={code:"custom",input:h,inst:t,path:[...t._zod.def.path??[]],continue:!t._zod.def.abort};if(t._zod.def.params)u.params=t._zod.def.params;i.issues.push(En(u))}}var i7,Eco=Symbol("ZodOutput"),fco=Symbol("ZodInput");class v7{constructor(){this._map=new WeakMap,this._idmap=new Map}add(g,...i){let h=i[0];if(this._map.set(g,h),h&&typeof h==="object"&&"id"in h)this._idmap.set(h.id,g);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(g){let i=this._map.get(g);if(i&&typeof i==="object"&&"id"in i)this._idmap.delete(i.id);return this._map.delete(g),this}get(g){let i=g._zod.parent;if(i){let h={...this.get(i)??{}};delete h.id;let t={...h,...this._map.get(g)};return Object.keys(t).length?t:void 0}return this._map.get(g)}has(g){return this._map.has(g)}}function jz(){return new v7}(i7=globalThis).__zod_globalRegistry??(i7.__zod_globalRegistry=jz());var K0=globalThis.__zod_globalRegistry;function n7(g,i){return new g({type:"string",...cr(i)})}function h7(g,i){return new g({type:"string",format:"email",check:"string_format",abort:!1,...cr(i)})}function E6(g,i){return new g({type:"string",format:"guid",check:"string_format",abort:!1,...cr(i)})}function t7(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,...cr(i)})}function b7(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...cr(i)})}function u7(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...cr(i)})}function w7(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...cr(i)})}function P7(g,i){return new g({type:"string",format:"url",check:"string_format",abort:!1,...cr(i)})}function O7(g,i){return new g({type:"string",format:"emoji",check:"string_format",abort:!1,...cr(i)})}function A7(g,i){return new g({type:"string",format:"nanoid",check:"string_format",abort:!1,...cr(i)})}function H7(g,i){return new g({type:"string",format:"cuid",check:"string_format",abort:!1,...cr(i)})}function q7(g,i){return new g({type:"string",format:"cuid2",check:"string_format",abort:!1,...cr(i)})}function M7(g,i){return new g({type:"string",format:"ulid",check:"string_format",abort:!1,...cr(i)})}function R7(g,i){return new g({type:"string",format:"xid",check:"string_format",abort:!1,...cr(i)})}function W7(g,i){return new g({type:"string",format:"ksuid",check:"string_format",abort:!1,...cr(i)})}function m7(g,i){return new g({type:"string",format:"ipv4",check:"string_format",abort:!1,...cr(i)})}function G7(g,i){return new g({type:"string",format:"ipv6",check:"string_format",abort:!1,...cr(i)})}function X7(g,i){return new g({type:"string",format:"cidrv4",check:"string_format",abort:!1,...cr(i)})}function Y7(g,i){return new g({type:"string",format:"cidrv6",check:"string_format",abort:!1,...cr(i)})}function J7(g,i){return new g({type:"string",format:"base64",check:"string_format",abort:!1,...cr(i)})}function Q7(g,i){return new g({type:"string",format:"base64url",check:"string_format",abort:!1,...cr(i)})}function z7(g,i){return new g({type:"string",format:"e164",check:"string_format",abort:!1,...cr(i)})}function U7(g,i){return new g({type:"string",format:"jwt",check:"string_format",abort:!1,...cr(i)})}function K7(g,i){return new g({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...cr(i)})}function $7(g,i){return new g({type:"string",format:"date",check:"string_format",...cr(i)})}function I7(g,i){return new g({type:"string",format:"time",check:"string_format",precision:null,...cr(i)})}function L7(g,i){return new g({type:"string",format:"duration",check:"string_format",...cr(i)})}function F7(g){return new g({type:"unknown"})}function x7(g,i){return new g({type:"never",...cr(i)})}function Ww(g,i){return new fW({check:"max_length",...cr(i),maximum:g})}function fn(g,i){return new jW({check:"min_length",...cr(i),minimum:g})}function mw(g,i){return new pW({check:"length_equals",...cr(i),length:g})}function f6(g,i){return new dW({check:"string_format",format:"regex",...cr(i),pattern:g})}function j6(g){return new sW({check:"string_format",format:"lowercase",...cr(g)})}function p6(g){return new r9({check:"string_format",format:"uppercase",...cr(g)})}function d6(g,i){return new o9({check:"string_format",format:"includes",...cr(i),includes:g})}function s6(g,i){return new e9({check:"string_format",format:"starts_with",...cr(i),prefix:g})}function rP(g,i){return new g9({check:"string_format",format:"ends_with",...cr(i),suffix:g})}function Yv(g){return new l9({check:"overwrite",tx:g})}function oP(g){return Yv((i)=>i.normalize(g))}function eP(){return Yv((g)=>g.trim())}function gP(){return Yv((g)=>g.toLowerCase())}function lP(){return Yv((g)=>g.toUpperCase())}function iP(){return Yv((g)=>Z6(g))}function N7(g,i,h){return new g({type:"array",element:i,...cr(h)})}function B7(g,i,h){return new g({type:"custom",check:"custom",fn:i,...cr(h)})}function Z7(g,i){let h=pz((t)=>{return t.addIssue=(u)=>{if(typeof u==="string")t.issues.push(En(u,t.value,h._zod.def));else{let P=u;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=t.value),P.inst??(P.inst=h),P.continue??(P.continue=!h._zod.def.abort),t.issues.push(En(P))}},g(t.value,t)},i);return h}function pz(g,i){let h=new Wg({check:"custom",...cr(i)});return h._zod.check=g,h}function vP(g){let i=g?.target??"draft-2020-12";if(i==="draft-4")i="draft-04";if(i==="draft-7")i="draft-07";return{processors:g.processors??{},metadataRegistry:g?.metadata??K0,target:i,unrepresentable:g?.unrepresentable??"throw",override:g?.override??(()=>{}),io:g?.io??"output",counter:0,seen:new Map,cycles:g?.cycles??"ref",reused:g?.reused??"inline",external:g?.external??void 0}}function we(g,i,h={path:[],schemaPath:[]}){var t;let u=g._zod.def,P=i.seen.get(g);if(P){if(P.count++,h.schemaPath.includes(g))P.cycle=h.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:h.path};i.seen.set(g,O);let A=g._zod.toJSONSchema?.();if(A)O.schema=A;else{let m={...h,schemaPath:[...h.schemaPath,g],path:h.path};if(g._zod.processJSONSchema)g._zod.processJSONSchema(i,O.schema,m);else{let X=O.schema,I=i.processors[u.type];if(!I)throw Error(`[toJSONSchema]: Non-representable type encountered: ${u.type}`);I(g,i,X,m)}let q=g._zod.parent;if(q){if(!O.ref)O.ref=q;we(q,i,m),i.seen.get(q).isParent=!0}}let W=i.metadataRegistry.get(g);if(W)Object.assign(O.schema,W);if(i.io==="input"&&Ve(g))delete O.schema.examples,delete O.schema.default;if(i.io==="input"&&"_prefault"in O.schema)(t=O.schema).default??(t.default=O.schema._prefault);return delete O.schema._prefault,i.seen.get(g).schema}function nP(g,i){let h=g.seen.get(i);if(!h)throw Error("Unprocessed schema. This is a bug in Zod.");let t=new Map;for(let O of g.seen.entries()){let A=g.metadataRegistry.get(O[0])?.id;if(A){let W=t.get(A);if(W&&W!==O[0])throw Error(`Duplicate schema id "${A}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);t.set(A,O[0])}}let u=(O)=>{let A=g.target==="draft-2020-12"?"$defs":"definitions";if(g.external){let q=g.external.registry.get(O[0])?.id,X=g.external.uri??((T)=>T);if(q)return{ref:X(q)};let I=O[1].defId??O[1].schema.id??`schema${g.counter++}`;return O[1].defId=I,{defId:I,ref:`${X("__shared")}#/${A}/${I}`}}if(O[1]===h)return{ref:"#"};let G=`${"#"}/${A}/`,m=O[1].schema.id??`__schema${g.counter++}`;return{defId:m,ref:G+m}},P=(O)=>{if(O[1].schema.$ref)return;let A=O[1],{ref:W,defId:G}=u(O);if(A.def={...A.schema},G)A.defId=G;let m=A.schema;for(let q in m)delete m[q];m.$ref=W};if(g.cycles==="throw")for(let O of g.seen.entries()){let A=O[1];if(A.cycle)throw Error(`Cycle detected: #/${A.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of g.seen.entries()){let A=O[1];if(i===O[0]){P(O);continue}if(g.external){let G=g.external.registry.get(O[0])?.id;if(i!==O[0]&&G){P(O);continue}}if(g.metadataRegistry.get(O[0])?.id){P(O);continue}if(A.cycle){P(O);continue}if(A.count>1){if(g.reused==="ref"){P(O);continue}}}}function hP(g,i){let h=g.seen.get(i);if(!h)throw Error("Unprocessed schema. This is a bug in Zod.");let t=(A)=>{let W=g.seen.get(A);if(W.ref===null)return;let G=W.def??W.schema,m={...G},q=W.ref;if(W.ref=null,q){t(q);let I=g.seen.get(q),T=I.schema;if(T.$ref&&(g.target==="draft-07"||g.target==="draft-04"||g.target==="openapi-3.0"))G.allOf=G.allOf??[],G.allOf.push(T);else Object.assign(G,T);if(Object.assign(G,m),A._zod.parent===q)for(let c in G){if(c==="$ref"||c==="allOf")continue;if(!(c in m))delete G[c]}if(T.$ref&&I.def)for(let c in G){if(c==="$ref"||c==="allOf")continue;if(c in I.def&&JSON.stringify(G[c])===JSON.stringify(I.def[c]))delete G[c]}}let X=A._zod.parent;if(X&&X!==q){t(X);let I=g.seen.get(X);if(I?.schema.$ref){if(G.$ref=I.schema.$ref,I.def)for(let T in G){if(T==="$ref"||T==="allOf")continue;if(T in I.def&&JSON.stringify(G[T])===JSON.stringify(I.def[T]))delete G[T]}}}g.override({zodSchema:A,jsonSchema:G,path:W.path??[]})};for(let A of[...g.seen.entries()].reverse())t(A[0]);let u={};if(g.target==="draft-2020-12")u.$schema="https://json-schema.org/draft/2020-12/schema";else if(g.target==="draft-07")u.$schema="http://json-schema.org/draft-07/schema#";else if(g.target==="draft-04")u.$schema="http://json-schema.org/draft-04/schema#";else if(g.target==="openapi-3.0");if(g.external?.uri){let A=g.external.registry.get(i)?.id;if(!A)throw Error("Schema is missing an `id` property");u.$id=g.external.uri(A)}Object.assign(u,h.def??h.schema);let P=g.metadataRegistry.get(i)?.id;if(P!==void 0&&u.id===P)delete u.id;let O=g.external?.defs??{};for(let A of g.seen.entries()){let W=A[1];if(W.def&&W.defId){if(W.def.id===W.defId)delete W.def.id;O[W.defId]=W.def}}if(g.external);else if(Object.keys(O).length>0)if(g.target==="draft-2020-12")u.$defs=O;else u.definitions=O;try{let A=JSON.parse(JSON.stringify(u));return Object.defineProperty(A,"~standard",{value:{...i["~standard"],jsonSchema:{input:J1(i,"input",g.processors),output:J1(i,"output",g.processors)}},enumerable:!1,writable:!1}),A}catch(A){throw Error("Error converting schema to JSON.")}}function Ve(g,i){let h=i??{seen:new Set};if(h.seen.has(g))return!1;h.seen.add(g);let t=g._zod.def;if(t.type==="transform")return!0;if(t.type==="array")return Ve(t.element,h);if(t.type==="set")return Ve(t.valueType,h);if(t.type==="lazy")return Ve(t.getter(),h);if(t.type==="promise"||t.type==="optional"||t.type==="nonoptional"||t.type==="nullable"||t.type==="readonly"||t.type==="default"||t.type==="prefault")return Ve(t.innerType,h);if(t.type==="intersection")return Ve(t.left,h)||Ve(t.right,h);if(t.type==="record"||t.type==="map")return Ve(t.keyType,h)||Ve(t.valueType,h);if(t.type==="pipe"){if(g._zod.traits.has("$ZodCodec"))return!0;return Ve(t.in,h)||Ve(t.out,h)}if(t.type==="object"){for(let u in t.shape)if(Ve(t.shape[u],h))return!0;return!1}if(t.type==="union"){for(let u of t.options)if(Ve(u,h))return!0;return!1}if(t.type==="tuple"){for(let u of t.items)if(Ve(u,h))return!0;if(t.rest&&Ve(t.rest,h))return!0;return!1}return!1}var C7=(g,i={})=>(h)=>{let t=vP({...h,processors:i});return we(g,t),nP(t,g),hP(t,g)},J1=(g,i,h={})=>(t)=>{let{libraryOptions:u,target:P}=t??{},O=vP({...u??{},target:P,io:i,processors:h});return we(g,O),nP(O,g),hP(O,g)};var dz={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},S7=(g,i,h,t)=>{let u=h;u.type="string";let{minimum:P,maximum:O,format:A,patterns:W,contentEncoding:G}=g._zod.bag;if(typeof P==="number")u.minLength=P;if(typeof O==="number")u.maxLength=O;if(A){if(u.format=dz[A]??A,u.format==="")delete u.format;if(A==="time")delete u.format}if(G)u.contentEncoding=G;if(W&&W.size>0){let m=[...W];if(m.length===1)u.pattern=m[0].source;else if(m.length>1)u.allOf=[...m.map((q)=>({...i.target==="draft-07"||i.target==="draft-04"||i.target==="openapi-3.0"?{type:"string"}:{},pattern:q.source}))]}};var T7=(g,i,h,t)=>{h.not={}};var k7=(g,i,h,t)=>{};var D7=(g,i,h,t)=>{let u=g._zod.def,P=H1(u.entries);if(P.every((O)=>typeof O==="number"))h.type="number";if(P.every((O)=>typeof O==="string"))h.type="string";h.enum=P},V7=(g,i,h,t)=>{let u=g._zod.def,P=[];for(let O of u.values)if(O===void 0){if(i.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(i.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(h.type=O===null?"null":typeof O,i.target==="draft-04"||i.target==="openapi-3.0")h.enum=[O];else h.const=O}else{if(P.every((O)=>typeof O==="number"))h.type="number";if(P.every((O)=>typeof O==="string"))h.type="string";if(P.every((O)=>typeof O==="boolean"))h.type="boolean";if(P.every((O)=>O===null))h.type="null";h.enum=P}};var c7=(g,i,h,t)=>{if(i.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var y7=(g,i,h,t)=>{if(i.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var _7=(g,i,h,t)=>{let u=h,P=g._zod.def,{minimum:O,maximum:A}=g._zod.bag;if(typeof O==="number")u.minItems=O;if(typeof A==="number")u.maxItems=A;u.type="array",u.items=we(P.element,i,{...t,path:[...t.path,"items"]})},a7=(g,i,h,t)=>{let u=h,P=g._zod.def;u.type="object",u.properties={};let O=P.shape;for(let G in O)u.properties[G]=we(O[G],i,{...t,path:[...t.path,"properties",G]});let A=new Set(Object.keys(O)),W=new Set([...A].filter((G)=>{let m=P.shape[G]._zod;if(i.io==="input")return m.optin===void 0;else return m.optout===void 0}));if(W.size>0)u.required=Array.from(W);if(P.catchall?._zod.def.type==="never")u.additionalProperties=!1;else if(!P.catchall){if(i.io==="output")u.additionalProperties=!1}else if(P.catchall)u.additionalProperties=we(P.catchall,i,{...t,path:[...t.path,"additionalProperties"]})},E7=(g,i,h,t)=>{let u=g._zod.def,P=u.inclusive===!1,O=u.options.map((A,W)=>we(A,i,{...t,path:[...t.path,P?"oneOf":"anyOf",W]}));if(P)h.oneOf=O;else h.anyOf=O},f7=(g,i,h,t)=>{let u=g._zod.def,P=we(u.left,i,{...t,path:[...t.path,"allOf",0]}),O=we(u.right,i,{...t,path:[...t.path,"allOf",1]}),A=(G)=>("allOf"in G)&&Object.keys(G).length===1,W=[...A(P)?P.allOf:[P],...A(O)?O.allOf:[O]];h.allOf=W};var j7=(g,i,h,t)=>{let u=g._zod.def,P=we(u.innerType,i,t),O=i.seen.get(g);if(i.target==="openapi-3.0")O.ref=u.innerType,h.nullable=!0;else h.anyOf=[P,{type:"null"}]},p7=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);P.ref=u.innerType},d7=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);P.ref=u.innerType,h.default=JSON.parse(JSON.stringify(u.defaultValue))},s7=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);if(P.ref=u.innerType,i.io==="input")h._prefault=JSON.parse(JSON.stringify(u.defaultValue))},rm=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);P.ref=u.innerType;let O;try{O=u.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}h.default=O},om=(g,i,h,t)=>{let u=g._zod.def,P=u.in._zod.traits.has("$ZodTransform"),O=i.io==="input"?P?u.out:u.in:u.out;we(O,i,t);let A=i.seen.get(g);A.ref=O},em=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);P.ref=u.innerType,h.readOnly=!0};var tP=(g,i,h,t)=>{let u=g._zod.def;we(u.innerType,i,t);let P=i.seen.get(g);P.ref=u.innerType};var bU=_("ZodISODateTime",(g,i)=>{Q9.init(g,i),xo.init(g,i)});function gm(g){return K7(bU,g)}var uU=_("ZodISODate",(g,i)=>{z9.init(g,i),xo.init(g,i)});function lm(g){return $7(uU,g)}var wU=_("ZodISOTime",(g,i)=>{U9.init(g,i),xo.init(g,i)});function im(g){return I7(wU,g)}var PU=_("ZodISODuration",(g,i)=>{K9.init(g,i),xo.init(g,i)});function vm(g){return L7(PU,g)}var HU=(g,i)=>{Pw.init(g,i),g.name="ZodError",Object.defineProperties(g,{format:{value:(h)=>PW(g,h)},flatten:{value:(h)=>wW(g,h)},addIssue:{value:(h)=>{g.issues.push(h),g.message=JSON.stringify(g.issues,an,2)}},addIssues:{value:(h)=>{g.issues.push(...h),g.message=JSON.stringify(g.issues,an,2)}},isEmpty:{get(){return g.issues.length===0}}})};var mg=_("ZodError",HU,{Parent:Error});var nm=Ow(mg),hm=Aw(mg),tm=G1(mg),bm=X1(mg),um=HW(mg),wm=qW(mg),Pm=MW(mg),Om=RW(mg),Am=WW(mg),Hm=mW(mg),qm=GW(mg),Mm=XW(mg);var Rm=new WeakMap;function Yw(g,i,h){let t=Object.getPrototypeOf(g),u=Rm.get(t);if(!u)u=new Set,Rm.set(t,u);if(u.has(i))return;u.add(i);for(let P in h){let O=h[P];Object.defineProperty(t,P,{configurable:!0,enumerable:!1,get(){let A=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:A}),A},set(A){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:A})}})}}var ge=_("ZodType",(g,i)=>{return yo.init(g,i),Object.assign(g["~standard"],{jsonSchema:{input:J1(g,"input"),output:J1(g,"output")}}),g.toJSONSchema=C7(g,{}),g.def=i,g.type=i.type,Object.defineProperty(g,"_def",{value:i}),g.parse=(h,t)=>nm(g,h,t,{callee:g.parse}),g.safeParse=(h,t)=>tm(g,h,t),g.parseAsync=async(h,t)=>hm(g,h,t,{callee:g.parseAsync}),g.safeParseAsync=async(h,t)=>bm(g,h,t),g.spa=g.safeParseAsync,g.encode=(h,t)=>um(g,h,t),g.decode=(h,t)=>wm(g,h,t),g.encodeAsync=async(h,t)=>Pm(g,h,t),g.decodeAsync=async(h,t)=>Om(g,h,t),g.safeEncode=(h,t)=>Am(g,h,t),g.safeDecode=(h,t)=>Hm(g,h,t),g.safeEncodeAsync=async(h,t)=>qm(g,h,t),g.safeDecodeAsync=async(h,t)=>Mm(g,h,t),Yw(g,"ZodType",{check(...h){let t=this.def;return this.clone(Oo.mergeDefs(t,{checks:[...t.checks??[],...h.map((u)=>typeof u==="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),{parent:!0})},with(...h){return this.check(...h)},clone(h,t){return el(this,h,t)},brand(){return this},register(h,t){return h.add(this,t),this},refine(h,t){return this.check(hK(h,t))},superRefine(h,t){return this.check(tK(h,t))},overwrite(h){return this.check(Yv(h))},optional(){return Gm(this)},exactOptional(){return fU(this)},nullable(){return Xm(this)},nullish(){return Gm(Xm(this))},nonoptional(h){return oK(this,h)},array(){return Yi(this)},or(h){return DU([this,h])},and(h){return cU(this,h)},transform(h){return Ym(this,aU(h))},default(h){return dU(this,h)},prefault(h){return rK(this,h)},catch(h){return gK(this,h)},pipe(h){return Ym(this,h)},readonly(){return vK(this)},describe(h){let t=this.clone();return K0.add(t,{description:h}),t},meta(...h){if(h.length===0)return K0.get(this);let t=this.clone();return K0.add(t,h[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(h){return h(this)}}),Object.defineProperty(g,"description",{get(){return K0.get(g)?.description},configurable:!0}),g}),Jm=_("_ZodString",(g,i)=>{Rw.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(t,u,P)=>S7(g,t,u,P);let h=g._zod.bag;g.format=h.format??null,g.minLength=h.minimum??null,g.maxLength=h.maximum??null,Yw(g,"_ZodString",{regex(...t){return this.check(f6(...t))},includes(...t){return this.check(d6(...t))},startsWith(...t){return this.check(s6(...t))},endsWith(...t){return this.check(rP(...t))},min(...t){return this.check(fn(...t))},max(...t){return this.check(Ww(...t))},length(...t){return this.check(mw(...t))},nonempty(...t){return this.check(fn(1,...t))},lowercase(t){return this.check(j6(t))},uppercase(t){return this.check(p6(t))},trim(){return this.check(eP())},normalize(...t){return this.check(oP(...t))},toLowerCase(){return this.check(gP())},toUpperCase(){return this.check(lP())},slugify(){return this.check(iP())}})}),MU=_("ZodString",(g,i)=>{Rw.init(g,i),Jm.init(g,i),g.email=(h)=>g.check(h7(RU,h)),g.url=(h)=>g.check(P7(WU,h)),g.jwt=(h)=>g.check(U7(NU,h)),g.emoji=(h)=>g.check(O7(mU,h)),g.guid=(h)=>g.check(E6(Wm,h)),g.uuid=(h)=>g.check(t7(Xw,h)),g.uuidv4=(h)=>g.check(b7(Xw,h)),g.uuidv6=(h)=>g.check(u7(Xw,h)),g.uuidv7=(h)=>g.check(w7(Xw,h)),g.nanoid=(h)=>g.check(A7(GU,h)),g.guid=(h)=>g.check(E6(Wm,h)),g.cuid=(h)=>g.check(H7(XU,h)),g.cuid2=(h)=>g.check(q7(YU,h)),g.ulid=(h)=>g.check(M7(JU,h)),g.base64=(h)=>g.check(J7(LU,h)),g.base64url=(h)=>g.check(Q7(FU,h)),g.xid=(h)=>g.check(R7(QU,h)),g.ksuid=(h)=>g.check(W7(zU,h)),g.ipv4=(h)=>g.check(m7(UU,h)),g.ipv6=(h)=>g.check(G7(KU,h)),g.cidrv4=(h)=>g.check(X7($U,h)),g.cidrv6=(h)=>g.check(Y7(IU,h)),g.e164=(h)=>g.check(z7(xU,h)),g.datetime=(h)=>g.check(gm(h)),g.date=(h)=>g.check(lm(h)),g.time=(h)=>g.check(im(h)),g.duration=(h)=>g.check(vm(h))});function _o(g){return n7(MU,g)}var xo=_("ZodStringFormat",(g,i)=>{Io.init(g,i),Jm.init(g,i)}),RU=_("ZodEmail",(g,i)=>{q9.init(g,i),xo.init(g,i)});var Wm=_("ZodGUID",(g,i)=>{A9.init(g,i),xo.init(g,i)});var Xw=_("ZodUUID",(g,i)=>{H9.init(g,i),xo.init(g,i)});var WU=_("ZodURL",(g,i)=>{M9.init(g,i),xo.init(g,i)});var mU=_("ZodEmoji",(g,i)=>{R9.init(g,i),xo.init(g,i)});var GU=_("ZodNanoID",(g,i)=>{W9.init(g,i),xo.init(g,i)});var XU=_("ZodCUID",(g,i)=>{m9.init(g,i),xo.init(g,i)});var YU=_("ZodCUID2",(g,i)=>{G9.init(g,i),xo.init(g,i)});var JU=_("ZodULID",(g,i)=>{X9.init(g,i),xo.init(g,i)});var QU=_("ZodXID",(g,i)=>{Y9.init(g,i),xo.init(g,i)});var zU=_("ZodKSUID",(g,i)=>{J9.init(g,i),xo.init(g,i)});var UU=_("ZodIPv4",(g,i)=>{$9.init(g,i),xo.init(g,i)});var KU=_("ZodIPv6",(g,i)=>{I9.init(g,i),xo.init(g,i)});var $U=_("ZodCIDRv4",(g,i)=>{L9.init(g,i),xo.init(g,i)});var IU=_("ZodCIDRv6",(g,i)=>{F9.init(g,i),xo.init(g,i)});var LU=_("ZodBase64",(g,i)=>{N9.init(g,i),xo.init(g,i)});var FU=_("ZodBase64URL",(g,i)=>{B9.init(g,i),xo.init(g,i)});var xU=_("ZodE164",(g,i)=>{Z9.init(g,i),xo.init(g,i)});var NU=_("ZodJWT",(g,i)=>{C9.init(g,i),xo.init(g,i)});var BU=_("ZodUnknown",(g,i)=>{S9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>k7(g,h,t,u)});function mm(){return F7(BU)}var ZU=_("ZodNever",(g,i)=>{T9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>T7(g,h,t,u)});function CU(g){return x7(ZU,g)}var SU=_("ZodArray",(g,i)=>{k9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>_7(g,h,t,u),g.element=i.element,Yw(g,"ZodArray",{min(h,t){return this.check(fn(h,t))},nonempty(h){return this.check(fn(1,h))},max(h,t){return this.check(Ww(h,t))},length(h,t){return this.check(mw(h,t))},unwrap(){return this.element}})});function Yi(g,i){return N7(SU,g,i)}var TU=_("ZodObject",(g,i)=>{c9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>a7(g,h,t,u),Oo.defineLazy(g,"shape",()=>{return i.shape}),Yw(g,"ZodObject",{keyof(){return Q1(Object.keys(this._zod.def.shape))},catchall(h){return this.clone({...this._zod.def,catchall:h})},passthrough(){return this.clone({...this._zod.def,catchall:mm()})},loose(){return this.clone({...this._zod.def,catchall:mm()})},strict(){return this.clone({...this._zod.def,catchall:CU()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(h){return Oo.extend(this,h)},safeExtend(h){return Oo.safeExtend(this,h)},merge(h){return Oo.merge(this,h)},pick(h){return Oo.pick(this,h)},omit(h){return Oo.omit(this,h)},partial(...h){return Oo.partial(Qm,this,h[0])},required(...h){return Oo.required(zm,this,h[0])}})});function $0(g,i){let h={type:"object",shape:g??{},...Oo.normalizeParams(i)};return new TU(h)}var kU=_("ZodUnion",(g,i)=>{y9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>E7(g,h,t,u),g.options=i.options});function DU(g,i){return new kU({type:"union",options:g,...Oo.normalizeParams(i)})}var VU=_("ZodIntersection",(g,i)=>{_9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>f7(g,h,t,u)});function cU(g,i){return new VU({type:"intersection",left:g,right:i})}var bP=_("ZodEnum",(g,i)=>{a9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(t,u,P)=>D7(g,t,u,P),g.enum=i.entries,g.options=Object.values(i.entries);let h=new Set(Object.keys(i.entries));g.extract=(t,u)=>{let P={};for(let O of t)if(h.has(O))P[O]=i.entries[O];else throw Error(`Key ${O} not found in enum`);return new bP({...i,checks:[],...Oo.normalizeParams(u),entries:P})},g.exclude=(t,u)=>{let P={...i.entries};for(let O of t)if(h.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new bP({...i,checks:[],...Oo.normalizeParams(u),entries:P})}});function Q1(g,i){let h=Array.isArray(g)?Object.fromEntries(g.map((t)=>[t,t])):g;return new bP({type:"enum",entries:h,...Oo.normalizeParams(i)})}var yU=_("ZodLiteral",(g,i)=>{E9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>V7(g,h,t,u),g.values=new Set(i.values),Object.defineProperty(g,"value",{get(){if(i.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return i.values[0]}})});function uP(g,i){return new yU({type:"literal",values:Array.isArray(g)?g:[g],...Oo.normalizeParams(i)})}var _U=_("ZodTransform",(g,i)=>{f9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>y7(g,h,t,u),g._zod.parse=(h,t)=>{if(t.direction==="backward")throw new O1(g.constructor.name);h.addIssue=(P)=>{if(typeof P==="string")h.issues.push(Oo.issue(P,h.value,i));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=h.value),O.inst??(O.inst=g),h.issues.push(Oo.issue(O))}};let u=i.transform(h.value,h);if(u instanceof Promise)return u.then((P)=>{return h.value=P,h.fallback=!0,h});return h.value=u,h.fallback=!0,h}});function aU(g){return new _U({type:"transform",transform:g})}var Qm=_("ZodOptional",(g,i)=>{a6.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>tP(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function Gm(g){return new Qm({type:"optional",innerType:g})}var EU=_("ZodExactOptional",(g,i)=>{j9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>tP(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function fU(g){return new EU({type:"optional",innerType:g})}var jU=_("ZodNullable",(g,i)=>{p9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>j7(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function Xm(g){return new jU({type:"nullable",innerType:g})}var pU=_("ZodDefault",(g,i)=>{d9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>d7(g,h,t,u),g.unwrap=()=>g._zod.def.innerType,g.removeDefault=g.unwrap});function dU(g,i){return new pU({type:"default",innerType:g,get defaultValue(){return typeof i==="function"?i():Oo.shallowClone(i)}})}var sU=_("ZodPrefault",(g,i)=>{s9.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>s7(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function rK(g,i){return new sU({type:"prefault",innerType:g,get defaultValue(){return typeof i==="function"?i():Oo.shallowClone(i)}})}var zm=_("ZodNonOptional",(g,i)=>{r7.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>p7(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function oK(g,i){return new zm({type:"nonoptional",innerType:g,...Oo.normalizeParams(i)})}var eK=_("ZodCatch",(g,i)=>{o7.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>rm(g,h,t,u),g.unwrap=()=>g._zod.def.innerType,g.removeCatch=g.unwrap});function gK(g,i){return new eK({type:"catch",innerType:g,catchValue:typeof i==="function"?i:()=>i})}var lK=_("ZodPipe",(g,i)=>{e7.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>om(g,h,t,u),g.in=i.in,g.out=i.out});function Ym(g,i){return new lK({type:"pipe",in:g,out:i})}var iK=_("ZodReadonly",(g,i)=>{g7.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>em(g,h,t,u),g.unwrap=()=>g._zod.def.innerType});function vK(g){return new iK({type:"readonly",innerType:g})}var nK=_("ZodCustom",(g,i)=>{l7.init(g,i),ge.init(g,i),g._zod.processJSONSchema=(h,t,u)=>c7(g,h,t,u)});function hK(g,i={}){return B7(nK,g,i)}function tK(g,i){return Z7(g,i)}var Um=$0({type:Q1(["character","chat"]),characterId:_o().optional(),chatId:_o().optional(),displayName:_o().default("")}),Km=$0({description:_o().optional(),author:_o().optional(),version:_o().optional(),tags:Yi(_o()).optional()}),bK=$0({name:_o().min(1).max(200),code:_o(),type:Q1(["trigger","library"]),triggers:Yi(_o()).optional(),bindings:Yi(Um).optional(),folder:_o().optional(),metadata:Km.optional()}),$m=$0({format:uP("lumiscript-pack-v1"),exportedAt:_o(),scripts:Yi(bK).min(1).max(100)}),uK=$0({name:_o().min(1).max(200),file:_o().min(1),type:Q1(["trigger","library"]),triggers:Yi(_o()).optional(),bindings:Yi(Um).optional(),folder:_o().optional(),metadata:Km.optional()}),d_o=$0({format:uP("lumiscript-manifest-v1"),sourcePack:_o().optional(),sourceFormat:_o().optional(),exportedAt:_o().optional(),convertedAt:_o().optional(),scripts:Yi(uK).min(1).max(100)});var Im=1048576;async function Lm(g){let i=new Uint8Array(await g.arrayBuffer()),h;try{h=pR(i)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let t=h["pack.json"];if(!t)throw Error("Invalid script pack: missing pack.json");if(t.byteLength>Im)throw Error(`Pack exceeds the ${Im/1024/1024} MB decompressed size limit`);let u=x6(t),P;try{P=JSON.parse(u)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return $m.parse(P).scripts}var vo=wr(ro(),1);function wK(g){let h="";for(let t=0;t<g.length;t+=32768)h+=String.fromCharCode(...g.subarray(t,t+32768));return btoa(h)}function PK(g){let i=new Map;for(let u of g){let P=u.folder??"";if(!i.has(P))i.set(P,[]);i.get(P).push(u)}let h=new Map;if(i.has(""))h.set("",i.get(""));let t=[...i.keys()].filter((u)=>u!=="").sort();for(let u of t)h.set(u,i.get(u));return h}var Jw=({scripts:g,selectedId:i,execInfo:h,onSelect:t,onEdit:u,sendToBackend:P})=>{let[O,A]=z1.useState("trigger"),[W,G]=z1.useState(new Set),m=z1.useRef(null),q=g.filter((E)=>E.type===O),X=PK(q),I=X.size>1||X.size===1&&!X.has(""),T=(E)=>{G((p)=>{let gr=new Set(p);if(gr.has(E))gr.delete(E);else gr.add(E);return gr})},Z=()=>{let E=O==="library"?"Library name:":"Script name:",p=window.prompt(E);if(!p?.trim())return;P({type:"create_script",name:p.trim(),scriptType:O})},c=(E)=>{if(q.length===0)return;if(E.shiftKey){let gr=N6(q);P({type:"save_pack_to_disk",bytesB64:wK(gr),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;dR(q,p.trim())},rr=()=>{m.current?.click()},ur=async(E)=>{let p=E.target.files?.[0];if(!p)return;E.target.value="";try{let gr=await Lm(p),N=(C)=>C==="library"?"[L]":"[T]",y=gr.map((C)=>`  ${N(C.type)} ${C.name}`).join(`
`);if(!window.confirm(`Import ${gr.length} script${gr.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:gr})}catch(gr){window.alert(`Import failed: ${gr instanceof Error?gr.message:String(gr)}`)}},lr=(E)=>{let p=h[E.id];return vo.jsxDEV(BR,{script:E,selected:E.id===i,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>t(E.id),onEdit:()=>u(E.id),sendToBackend:P},E.id,!1,void 0,this)};return vo.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[vo.jsxDEV("div",{className:"ls-list-header",children:[vo.jsxDEV("div",{className:"ls-list-type-tabs",children:[vo.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>A("trigger"),title:"Scripts",children:vo.jsxDEV(We,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>A("library"),title:"Libraries",children:vo.jsxDEV(G0,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("div",{className:"ls-list-actions",children:[vo.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:vo.jsxDEV(h1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:"ls-icon-btn",onClick:c,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:q.length===0,children:vo.jsxDEV(X0,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:"ls-icon-btn",onClick:Z,title:"New script",children:vo.jsxDEV(r1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("input",{ref:m,type:"file",accept:".zip",style:{display:"none"},onChange:ur},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("div",{className:"ls-list-body",children:q.length===0?vo.jsxDEV("div",{className:"ls-list-empty",children:[vo.jsxDEV(Bl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),vo.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),vo.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):I?[...X.entries()].map(([E,p])=>{let gr=W.has(E);return E===""?vo.jsxDEV("div",{children:p.map(lr)},"__unfiled",!1,void 0,this):vo.jsxDEV("div",{className:"ls-folder-group",children:[vo.jsxDEV("button",{className:"ls-folder-header",onClick:()=>T(E),children:[gr?vo.jsxDEV(Hi,{size:11},void 0,!1,void 0,this):vo.jsxDEV(me,{size:11},void 0,!1,void 0,this),vo.jsxDEV(Y0,{size:11},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-name",children:E},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(N)=>{N.stopPropagation();let y=window.prompt("Rename folder:",E);if(y===null||y.trim()===""||y.trim()===E)return;for(let f of p)P({type:"update_script",id:f.id,patch:{folder:y.trim()}})},children:vo.jsxDEV(sg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!gr&&p.map(lr)]},`folder-${E}`,!0,void 0,this)}):q.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var L1=wr(io(),1),q3=wr(Sn(),1);var Co=wr(io(),1);function Fm(g,i){(i==null||i>g.length)&&(i=g.length);for(var h=0,t=Array(i);h<i;h++)t[h]=g[h];return t}function OK(g){if(Array.isArray(g))return g}function AK(g,i,h){return(i=WK(i))in g?Object.defineProperty(g,i,{value:h,enumerable:!0,configurable:!0,writable:!0}):g[i]=h,g}function HK(g,i){var h=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(h!=null){var t,u,P,O,A=[],W=!0,G=!1;try{if(P=(h=h.call(g)).next,i===0);else for(;!(W=(t=P.call(h)).done)&&(A.push(t.value),A.length!==i);W=!0);}catch(m){G=!0,u=m}finally{try{if(!W&&h.return!=null&&(O=h.return(),Object(O)!==O))return}finally{if(G)throw u}}return A}}function qK(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xm(g,i){var h=Object.keys(g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(g);i&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable})),h.push.apply(h,t)}return h}function wP(g){for(var i=1;i<arguments.length;i++){var h=arguments[i]!=null?arguments[i]:{};i%2?xm(Object(h),!0).forEach(function(t){AK(g,t,h[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(h)):xm(Object(h)).forEach(function(t){Object.defineProperty(g,t,Object.getOwnPropertyDescriptor(h,t))})}return g}function Nm(g,i){if(g==null)return{};var h,t,u=MK(g,i);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(g);for(t=0;t<P.length;t++)h=P[t],i.indexOf(h)===-1&&{}.propertyIsEnumerable.call(g,h)&&(u[h]=g[h])}return u}function MK(g,i){if(g==null)return{};var h={};for(var t in g)if({}.hasOwnProperty.call(g,t)){if(i.indexOf(t)!==-1)continue;h[t]=g[t]}return h}function Bm(g,i){return OK(g)||HK(g,i)||mK(g,i)||qK()}function RK(g,i){if(typeof g!="object"||!g)return g;var h=g[Symbol.toPrimitive];if(h!==void 0){var t=h.call(g,i);if(typeof t!="object")return t;throw TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(g)}function WK(g){var i=RK(g,"string");return typeof i=="symbol"?i:i+""}function mK(g,i){if(g){if(typeof g=="string")return Fm(g,i);var h={}.toString.call(g).slice(8,-1);return h==="Object"&&g.constructor&&(h=g.constructor.name),h==="Map"||h==="Set"?Array.from(g):h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?Fm(g,i):void 0}}function GK(g,i,h){if(i in g)Object.defineProperty(g,i,{value:h,enumerable:!0,configurable:!0,writable:!0});else g[i]=h;return g}function Zm(g,i){var h=Object.keys(g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(g);if(i)t=t.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable});h.push.apply(h,t)}return h}function Cm(g){for(var i=1;i<arguments.length;i++){var h=arguments[i]!=null?arguments[i]:{};if(i%2)Zm(Object(h),!0).forEach(function(t){GK(g,t,h[t])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(g,Object.getOwnPropertyDescriptors(h));else Zm(Object(h)).forEach(function(t){Object.defineProperty(g,t,Object.getOwnPropertyDescriptor(h,t))})}return g}function XK(){for(var g=arguments.length,i=Array(g),h=0;h<g;h++)i[h]=arguments[h];return function(t){return i.reduceRight(function(u,P){return P(u)},t)}}function U1(g){return function i(){var h=this;for(var t=arguments.length,u=Array(t),P=0;P<t;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,A=Array(O),W=0;W<O;W++)A[W]=arguments[W];return i.apply(h,[].concat(u,A))}}}function zw(g){return{}.toString.call(g).includes("Object")}function YK(g){return!Object.keys(g).length}function K1(g){return typeof g==="function"}function JK(g,i){return Object.prototype.hasOwnProperty.call(g,i)}function QK(g,i){if(!zw(i))Jv("changeType");if(Object.keys(i).some(function(h){return!JK(g,h)}))Jv("changeField");return i}function zK(g){if(!K1(g))Jv("selectorType")}function UK(g){if(!(K1(g)||zw(g)))Jv("handlerType");if(zw(g)&&Object.values(g).some(function(i){return!K1(i)}))Jv("handlersType")}function KK(g){if(!g)Jv("initialIsRequired");if(!zw(g))Jv("initialType");if(YK(g))Jv("initialContent")}function $K(g,i){throw Error(g[i]||g.default)}var IK={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Jv=U1($K)(IK),Qw={changes:QK,selector:zK,handler:UK,initial:KK};function LK(g){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qw.initial(g),Qw.handler(i);var h={current:g},t=U1(NK)(h,i),u=U1(xK)(h),P=U1(Qw.changes)(g),O=U1(FK)(h);function A(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return Qw.selector(G),G(h.current)}function W(G){XK(t,u,P,O)(G)}return[A,W]}function FK(g,i){return K1(i)?i(g.current):i}function xK(g,i){return g.current=Cm(Cm({},g.current),i),i}function NK(g,i,h){return K1(i)?i(g.current):Object.keys(h).forEach(function(t){var u;return(u=i[t])===null||u===void 0?void 0:u.call(i,g.current[t])}),h}var BK={create:LK},Sm=BK;var Tm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function km(g){return function i(){var h=this;for(var t=arguments.length,u=Array(t),P=0;P<t;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,A=Array(O),W=0;W<O;W++)A[W]=arguments[W];return i.apply(h,[].concat(u,A))}}}function Dm(g){return{}.toString.call(g).includes("Object")}function ZK(g){if(!g)Vm("configIsRequired");if(!Dm(g))Vm("configType");if(g.urls)return CK(),{paths:{vs:g.urls.monacoBase}};return g}function CK(){console.warn(cm.deprecation)}function SK(g,i){throw Error(g[i]||g.default)}var cm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Vm=km(SK)(cm),ym={config:ZK};var _m=function(){for(var i=arguments.length,h=Array(i),t=0;t<i;t++)h[t]=arguments[t];return function(u){return h.reduceRight(function(P,O){return O(P)},u)}};function PP(g,i){return Object.keys(i).forEach(function(h){if(i[h]instanceof Object){if(g[h])Object.assign(i[h],PP(g[h],i[h]))}}),wP(wP({},g),i)}var TK={type:"cancelation",msg:"operation is manually canceled"};function Uw(g){var i=!1,h=new Promise(function(t,u){g.then(function(P){return i?u(TK):t(P)}),g.catch(u)});return h.cancel=function(){return i=!0},h}var kK=["monaco"],DK=Sm.create({config:Tm,isInitialized:!1,resolve:null,reject:null,monaco:null}),am=Bm(DK,2),$1=am[0],Kw=am[1];function VK(g){var i=ym.config(g),h=i.monaco,t=Nm(i,kK);Kw(function(u){return{config:PP(u.config,t),monaco:h}})}function cK(){var g=$1(function(i){var{monaco:h,isInitialized:t,resolve:u}=i;return{monaco:h,isInitialized:t,resolve:u}});if(!g.isInitialized){if(Kw({isInitialized:!0}),g.monaco)return g.resolve(g.monaco),Uw(OP);if(window.monaco&&window.monaco.editor)return Em(window.monaco),g.resolve(window.monaco),Uw(OP);_m(yK,aK)(EK)}return Uw(OP)}function yK(g){return document.body.appendChild(g)}function _K(g){var i=document.createElement("script");return g&&(i.src=g),i}function aK(g){var i=$1(function(t){var{config:u,reject:P}=t;return{config:u,reject:P}}),h=_K("".concat(i.config.paths.vs,"/loader.js"));return h.onload=function(){return g()},h.onerror=i.reject,h}function EK(){var g=$1(function(h){var{config:t,resolve:u,reject:P}=h;return{config:t,resolve:u,reject:P}}),i=window.require;i.config(g.config),i(["vs/editor/editor.main"],function(h){var t=h.m||h;Em(t),g.resolve(t)},function(h){g.reject(h)})}function Em(g){if(!$1().monaco)Kw({monaco:g})}function fK(){return $1(function(g){var i=g.monaco;return i})}var OP=new Promise(function(g,i){return Kw({resolve:g,reject:i})}),I0={config:VK,init:cK,__getMonacoInstance:fK};var fm=wr(io(),1),Pe=wr(io(),1);var jm=wr(io(),1),Iw=wr(io(),1),pm=wr(io(),1),sm=wr(io(),1),Lw=wr(io(),1),b$=wr(io(),1);var e3=wr(io(),1),ko=wr(io(),1);var Fw=wr(io(),1),jK={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},AP=jK,pK={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},dK=pK;function sK({children:g}){return pm.default.createElement("div",{style:dK.container},g)}var r$=sK,o$=r$;function e$({width:g,height:i,isEditorReady:h,loading:t,_ref:u,className:P,wrapperProps:O}){return Iw.default.createElement("section",{style:{...AP.wrapper,width:g,height:i},...O},!h&&Iw.default.createElement(o$,null,t),Iw.default.createElement("div",{ref:u,style:{...AP.fullWidth,...!h&&AP.hide},className:P}))}var g$=e$,dm=jm.memo(g$);function l$(g){sm.useEffect(g,[])}var r3=l$;function i$(g,i,h=!0){let t=Lw.useRef(!0);Lw.useEffect(t.current||!h?()=>{t.current=!1}:g,i)}var Gg=i$;function I1(){}function jn(g,i,h,t){return v$(g,t)||n$(g,i,h,t)}function v$(g,i){return g.editor.getModel(o3(g,i))}function n$(g,i,h,t){return g.editor.createModel(i,h,t?o3(g,t):void 0)}function o3(g,i){return g.Uri.parse(i)}function h$({original:g,modified:i,language:h,originalLanguage:t,modifiedLanguage:u,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:A=!1,keepCurrentModifiedModel:W=!1,theme:G="light",loading:m="Loading...",options:q={},height:X="100%",width:I="100%",className:T,wrapperProps:Z={},beforeMount:c=I1,onMount:rr=I1}){let[ur,lr]=Pe.useState(!1),[E,p]=Pe.useState(!0),gr=Pe.useRef(null),N=Pe.useRef(null),y=Pe.useRef(null),f=Pe.useRef(rr),C=Pe.useRef(c),Rr=Pe.useRef(!1);r3(()=>{let k=I0.init();return k.then((s)=>(N.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>gr.current?Br():k.cancel()}),Gg(()=>{if(gr.current&&N.current){let k=gr.current.getOriginalEditor(),s=jn(N.current,g||"",t||h||"text",P||"");s!==k.getModel()&&k.setModel(s)}},[P],ur),Gg(()=>{if(gr.current&&N.current){let k=gr.current.getModifiedEditor(),s=jn(N.current,i||"",u||h||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],ur),Gg(()=>{let k=gr.current.getModifiedEditor();k.getOption(N.current.editor.EditorOption.readOnly)?k.setValue(i||""):i!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:i||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[i],ur),Gg(()=>{gr.current?.getModel()?.original.setValue(g||"")},[g],ur),Gg(()=>{let{original:k,modified:s}=gr.current.getModel();N.current.editor.setModelLanguage(k,t||h||"text"),N.current.editor.setModelLanguage(s,u||h||"text")},[h,t,u],ur),Gg(()=>{N.current?.editor.setTheme(G)},[G],ur),Gg(()=>{gr.current?.updateOptions(q)},[q],ur);let Hr=Pe.useCallback(()=>{if(!N.current)return;C.current(N.current);let k=jn(N.current,g||"",t||h||"text",P||""),s=jn(N.current,i||"",u||h||"text",O||"");gr.current?.setModel({original:k,modified:s})},[h,i,u,g,t,P,O]),mr=Pe.useCallback(()=>{!Rr.current&&y.current&&(gr.current=N.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...q}),Hr(),N.current?.editor.setTheme(G),lr(!0),Rr.current=!0)},[q,G,Hr]);Pe.useEffect(()=>{ur&&f.current(gr.current,N.current)},[ur]),Pe.useEffect(()=>{!E&&!ur&&mr()},[E,ur,mr]);function Br(){let k=gr.current?.getModel();A||k?.original?.dispose(),W||k?.modified?.dispose(),gr.current?.dispose()}return Pe.default.createElement(dm,{width:I,height:X,isEditorReady:ur,loading:m,_ref:y,className:T,wrapperProps:Z})}var t$=h$,Fao=fm.memo(t$);function u$(g){let i=Fw.useRef();return Fw.useEffect(()=>{i.current=g},[g]),i.current}var w$=u$,$w=new Map;function P$({defaultValue:g,defaultLanguage:i,defaultPath:h,value:t,language:u,path:P,theme:O="light",line:A,loading:W="Loading...",options:G={},overrideServices:m={},saveViewState:q=!0,keepCurrentModel:X=!1,width:I="100%",height:T="100%",className:Z,wrapperProps:c={},beforeMount:rr=I1,onMount:ur=I1,onChange:lr,onValidate:E=I1}){let[p,gr]=ko.useState(!1),[N,y]=ko.useState(!0),f=ko.useRef(null),C=ko.useRef(null),Rr=ko.useRef(null),Hr=ko.useRef(ur),mr=ko.useRef(rr),Br=ko.useRef(),k=ko.useRef(t),s=w$(P),ir=ko.useRef(!1),Qr=ko.useRef(!1);r3(()=>{let F=I0.init();return F.then((er)=>(f.current=er)&&y(!1)).catch((er)=>er?.type!=="cancelation"&&console.error("Monaco initialization: error:",er)),()=>C.current?V():F.cancel()}),Gg(()=>{let F=jn(f.current,g||t||"",i||u||"",P||h||"");F!==C.current?.getModel()&&(q&&$w.set(s,C.current?.saveViewState()),C.current?.setModel(F),q&&C.current?.restoreViewState($w.get(P)))},[P],p),Gg(()=>{C.current?.updateOptions(G)},[G],p),Gg(()=>{!C.current||t===void 0||(C.current.getOption(f.current.editor.EditorOption.readOnly)?C.current.setValue(t):t!==C.current.getValue()&&(Qr.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),C.current.pushUndoStop(),Qr.current=!1))},[t],p),Gg(()=>{let F=C.current?.getModel();F&&u&&f.current?.editor.setModelLanguage(F,u)},[u],p),Gg(()=>{A!==void 0&&C.current?.revealLine(A)},[A],p),Gg(()=>{f.current?.editor.setTheme(O)},[O],p);let Gr=ko.useCallback(()=>{if(!(!Rr.current||!f.current)&&!ir.current){mr.current(f.current);let F=P||h,er=jn(f.current,t||g||"",i||u||"",F||"");C.current=f.current?.editor.create(Rr.current,{model:er,automaticLayout:!0,...G},m),q&&C.current.restoreViewState($w.get(F)),f.current.editor.setTheme(O),A!==void 0&&C.current.revealLine(A),gr(!0),ir.current=!0}},[g,i,h,t,u,P,G,m,q,O,A]);ko.useEffect(()=>{p&&Hr.current(C.current,f.current)},[p]),ko.useEffect(()=>{!N&&!p&&Gr()},[N,p,Gr]),k.current=t,ko.useEffect(()=>{p&&lr&&(Br.current?.dispose(),Br.current=C.current?.onDidChangeModelContent((F)=>{Qr.current||lr(C.current.getValue(),F)}))},[p,lr]),ko.useEffect(()=>{if(p){let F=f.current.editor.onDidChangeMarkers((er)=>{let Or=C.current.getModel()?.uri;if(Or&&er.find((qr)=>qr.path===Or.path)){let qr=f.current.editor.getModelMarkers({resource:Or});E?.(qr)}});return()=>{F?.dispose()}}return()=>{}},[p,E]);function V(){Br.current?.dispose(),X?q&&$w.set(P,C.current.saveViewState()):C.current.getModel()?.dispose(),C.current.dispose()}return ko.default.createElement(dm,{width:I,height:T,isEditorReady:p,loading:W,_ref:Rr,className:Z,wrapperProps:c})}var O$=P$,A$=e3.memo(O$),g3=A$;var pn=wr(io(),1);var Oe=wr(ro(),1),H$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},l3=({entries:g,isRunning:i,onClear:h})=>{let[t,u]=pn.useState(!1),P=pn.useRef(null);pn.useEffect(()=>{if(!t&&P.current)P.current.scrollTop=P.current.scrollHeight},[g,t]);let O=()=>{let A=g.filter((W)=>W.type!=="separator").map((W)=>`[${W.timestamp}] ${W.type.toUpperCase()}: ${W.message}`).join(`
`);navigator.clipboard.writeText(A).catch(()=>{})};return Oe.jsxDEV("div",{className:`ls-console${t?" ls-collapsed":""}`,children:[Oe.jsxDEV("div",{className:"ls-console-header",onClick:()=>u((A)=>!A),children:[Oe.jsxDEV(Cl,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Oe.jsxDEV("span",{className:"ls-console-title",children:["Console",i?" — running…":g.length>0?` (${g.length})`:""]},void 0,!0,void 0,this),Oe.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),O()},title:"Copy output",disabled:g.length===0,children:Oe.jsxDEV(pg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Oe.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),h()},title:"Clear console",disabled:g.length===0,children:Oe.jsxDEV(Ke,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),t?Oe.jsxDEV(me,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Oe.jsxDEV(Mg,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!t&&Oe.jsxDEV("div",{className:"ls-console-output",ref:P,children:g.length===0?Oe.jsxDEV("div",{className:"ls-console-empty",children:i?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):g.map((A,W)=>A.type==="separator"?Oe.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},W,!1,void 0,this):Oe.jsxDEV("div",{className:`ls-entry ${H$[A.type]??"ls-log"}`,children:[Oe.jsxDEV("span",{className:"ls-entry-time",children:A.timestamp},void 0,!1,void 0,this),Oe.jsxDEV("span",{className:"ls-entry-type",children:A.type.toUpperCase()},void 0,!1,void 0,this),Oe.jsxDEV("span",{className:"ls-entry-msg",children:A.message},void 0,!1,void 0,this)]},W,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var ce=wr(ro(),1),i3=({bindings:g,activeContext:i,onAdd:h,onRemove:t})=>{let u=()=>{let{characterId:O,characterName:A}=i;if(!O)return;if(g.some((W)=>W.type==="character"&&W.characterId===O))return;h({type:"character",characterId:O,displayName:A??O})},P=()=>{let{chatId:O,characterName:A}=i;if(!O)return;if(g.some((G)=>G.type==="chat"&&G.chatId===O))return;let W=A?`${A} — ${O.slice(0,8)}`:O.slice(0,8);h({type:"chat",chatId:O,displayName:W})};return ce.jsxDEV("div",{className:"ls-bindings",children:ce.jsxDEV("div",{className:"ls-bindings-row",children:[ce.jsxDEV(Et,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),g.length===0?ce.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):g.map((O,A)=>ce.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?ce.jsxDEV(cn,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):ce.jsxDEV(Dn,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),ce.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),ce.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>t(A),title:"Remove binding",children:ce.jsxDEV(ke,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},A,!0,void 0,this)),ce.jsxDEV("button",{className:"ls-bindings-add",onClick:u,disabled:!i.characterId,title:i.characterId?"Bind to current character":"Open a chat first",children:[ce.jsxDEV(cn,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),ce.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!i.chatId,title:i.chatId?"Bind to current chat":"Open a chat first",children:[ce.jsxDEV(Dn,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var v3=wr(io(),1);var se=wr(ro(),1),n3=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"},{name:"REGEX_SCRIPT_CHANGED",description:"A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+."},{name:"REGEX_SCRIPT_DELETED",description:"A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+."}]}],cao=n3.flatMap((g)=>g.events.map((i)=>i.name)),h3=({scriptId:g,triggers:i,sendToBackend:h})=>{let[t,u]=v3.useState(!0),P=new Set(i),O=(A)=>{let W=P.has(A)?i.filter((G)=>G!==A):[...i,A];h({type:"update_script",id:g,patch:{triggers:W}})};return se.jsxDEV("div",{className:`ls-triggers${t?" ls-triggers-collapsed":""}`,children:[se.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>u((A)=>!A),children:[se.jsxDEV(Mi,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),se.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&se.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),se.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:t?se.jsxDEV(me,{size:12},void 0,!1,void 0,this):se.jsxDEV(Mg,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!t&&se.jsxDEV("div",{className:"ls-triggers-body",children:n3.map((A)=>se.jsxDEV("div",{className:"ls-trigger-group",children:[se.jsxDEV("span",{className:"ls-trigger-group-label",children:A.label},void 0,!1,void 0,this),se.jsxDEV("div",{className:"ls-trigger-chips",children:A.events.map((W)=>se.jsxDEV("button",{className:`ls-trigger-chip${P.has(W.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(W.name),title:W.description,children:W.name},W.name,!1,void 0,this))},void 0,!1,void 0,this)]},A.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var t3=`
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
  /**
   * When true, asks the host to trigger a normal LLM continuation after
   * the message is appended. Fires the full chat-orchestration pipeline
   * (preset + persona + world info + regex + character card + streaming).
   * Requires Lumiverse host >= 0.9.x with triggerGeneration support;
   * silently ignored on older hosts.
   */
  triggerGeneration?: boolean;
  /**
   * Per-call overrides for the triggered generation. Only consulted when
   * triggerGeneration: true. Each field is optional; omitted fields fall
   * through to the active chat's resolved defaults.
   */
  generation?: ChatGenerationOptions;
}

/** Per-call generation overrides for sendMessage with triggerGeneration. */
interface ChatGenerationOptions {
  /** Override the connection profile. Falls back to user's default. */
  connectionId?: string;
  /** Override the persona. Falls back to active persona setting. */
  personaId?: string;
  /** Per-addon enable map for the chosen persona. */
  personaAddonStates?: Record<string, boolean>;
  /** Override the preset. Falls back to activeLoomPresetId / connection preset. */
  presetId?: string;
  /** Force the supplied presetId over connection-attached one. Impersonation-only; no-op for triggerGeneration. */
  forcePresetId?: boolean;
  /** Per-call parameter overrides (temperature, max_tokens, etc.) layered on the preset. */
  parameters?: Record<string, unknown>;
  /** For group chats: which character should respond. Falls back to chat character. */
  targetCharacterId?: string;
  /** Retain council-tool results from the previous generation rather than re-running. */
  retainCouncil?: boolean;
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
  /** Viewport X coordinate. Populated for MouseEvent / PointerEvent / TouchEvent (first touch). */
  clientX?: number;
  /** Viewport Y coordinate. Same event families as clientX. */
  clientY?: number;
  /** KeyboardEvent.key — value of the key pressed ('Enter', 'a', 'Shift', 'ArrowUp'). KeyboardEvents only. */
  key?: string;
  /** KeyboardEvent.code — physical key, layout-independent ('Enter', 'KeyA', 'ShiftLeft'). KeyboardEvents only. */
  code?: string;
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
    /** Trimmed text of the first associated <label>. Input / textarea / select only. */
    label?:         string;
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
`;var P3=wr(io(),1);function b3(g){return g.split("`").map((h,t)=>{if(t%2===1)return h;return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function q$(g){return g.split("`").map((t,u)=>{if(u%2===1)return t;return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Qv(g,i){let h=`| ${g.join(" | ")} |`,t=`| ${g.map(()=>"---").join(" | ")} |`,u=i.map((P)=>`| ${P.map(q$).join(" | ")} |`);return[h,t,...u].join(`
`)}function M$(g){return g.optional&&!g.field.endsWith("?")?`${g.field}?`:g.field}function R$(g){if(g==="silent")return"*silent*";if(g==="boolean")return'`"true" / "false"`';return"`string`"}function W$(g){return g.aliases==="—"?"—":`\`${g.aliases}\``}function m$(g){let i=g.perms.length===0&&!g.note?"*none*":g.perms.map((h)=>`\`${h}\``).join(", ");return g.note?`${i}${g.perms.length?" ":""}${g.note}`:i}function G$(){return`## Lumiverse Events

${Qv(["Event","Group","Payload shape"],HP.map((i)=>[`\`${i.name}\``,i.group,`\`${i.payload}\``]))}`}function X$(){return`## Permission Matrix

${qP.map((i)=>{let h=Qv(["Method","Required permissions"],i.rows.map((t)=>[`\`${t.method}\``,m$(t)]));return`### ${i.group}

${h}`}).join(`

`)}`}function Y$(){let g=Qv(["Event","Payload fields","Emitted by"],MP.map((h)=>[`\`${h.name}\``,`\`${h.payload}\``,h.emittedBy])),i="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${g}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function J$(){let g=RP.map((h)=>{let t=Qv(["Macro","Aliases","Returns","Description"],h.rows.map((P)=>[`\`${P.macro}\``,W$(P),R$(P.returns),P.desc])),u=[`### ${h.label}`];if(h.description)u.push(`*${h.description}*`);return u.push(t),u.join(`

`)}),i='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${g.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function Q$(){return`## Key Types

${WP.map((g)=>u3(g)).join(`

`)}`}function u3(g,i="###"){let h=b3(g.name),t=g.note?`*${b3(g.note)}*

`:"",u=Qv(["Field","Type","Description"],g.fields.map((P)=>[`\`${M$(P)}\``,`\`${P.type}\``,P.desc]));return`${i} ${h}

${t}${u}`}function z$(){return`## API Functions

${mP.map((i)=>{let h=Qv(["Method","Arguments","Description"],i.rows.map((t)=>[`\`${t.name}\``,t.args,t.desc]));return`### ${i.group}

${h}`}).join(`

`)}`}function U$(){let i=Qv(["Method","Arguments","Description"],GP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),h=Qv(["Method","Arguments","Description"],XP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),t=YP.map((u)=>u3(u,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",i,"","### ls:council-prompt","",h,"","### Built-in types","",t].join(`
`)}function K$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function $$(){let i=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,h=[G$(),X$(),Y$(),J$(),Q$(),z$(),U$(),K$()];return`${i}

---

${h.join(`

---

`)}
`}function w3(){let g=$$(),h=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,t=new Blob([g],{type:"text/markdown;charset=utf-8"}),u=URL.createObjectURL(t),P=document.createElement("a");P.href=u,P.download=h,P.click(),URL.revokeObjectURL(u)}var z=wr(ro(),1),zv=({icon:g,title:i,defaultOpen:h=!1,children:t})=>{let[u,P]=P3.useState(h);return z.jsxDEV("div",{className:"ls-ref-section",children:[z.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[z.jsxDEV("span",{className:"ls-ref-section-title",children:[g,i]},void 0,!0,void 0,this),u?z.jsxDEV(me,{size:12},void 0,!1,void 0,this):z.jsxDEV(Hi,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u&&z.jsxDEV("div",{className:"ls-ref-section-body",children:t},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Ao=({children:g})=>z.jsxDEV("code",{className:"ls-ref-code",children:g},void 0,!1,void 0,this),I$=({children:g})=>z.jsxDEV("span",{className:"ls-ref-perm",children:g},void 0,!1,void 0,this),L$=()=>z.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),F$=()=>z.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),dn=({label:g,cols:i})=>z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:i,className:"ls-ref-group-header",children:g},void 0,!1,void 0,this)},void 0,!1,void 0,this),HP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Settings",name:"REGEX_SCRIPT_CHANGED",payload:"{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission"},{group:"Settings",name:"REGEX_SCRIPT_DELETED",payload:"{ id }  // v0.27.0+ — requires regex_scripts permission"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],x$=()=>{let g="";return z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:HP.map((i)=>{let h=i.group!==g?i.group:"";return g=i.group,z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:h},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.* (CRUD + getCapturedActive)",perms:["world_books"]},{method:"api.worldInfo.registerInterceptor / listInterceptors",perms:["generation"]},{method:"api.personas.*",perms:["personas"]},{method:"api.regexScripts.*",perms:["regex_scripts"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],N$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:qP.map((g)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(dn,{label:g.group,cols:2},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:[i.perms.length===0&&!i.note?z.jsxDEV(L$,{},void 0,!1,void 0,this):null,i.perms.map((h)=>z.jsxDEV(I$,{children:h},h,!1,void 0,this)),i.note?z.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:i.perms.length?4:0},children:i.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},i.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],B$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:MP.map((g)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],Z$=({type:g})=>{if(g==="silent")return z.jsxDEV(F$,{},void 0,!1,void 0,this);if(g==="boolean")return z.jsxDEV(Ao,{children:'"true" / "false"'},void 0,!1,void 0,this);return z.jsxDEV(Ao,{children:"string"},void 0,!1,void 0,this)},C$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:RP.map((g)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(dn,{label:g.description?z.jsxDEV(z.Fragment,{children:[g.label," — ",z.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:g.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):g.label,cols:4},`hdr-${g.label}`,!1,void 0,this),g.rows.map((i)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:i.aliases==="—"?z.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):z.jsxDEV(Ao,{children:i.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:z.jsxDEV(Z$,{type:i.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."},{field:"triggerGeneration?",type:"boolean",optional:!0,desc:"When true, the host triggers a normal LLM continuation after the message is appended (full preset / persona / world info / regex / character card / streaming pipeline — same as the user pressing Enter on an empty input bar). Use for click-to-respond UIs where the script wants the LLM to immediately reply to its appended message. Requires Lumiverse host >= 0.9.x with triggerGeneration support (lumiverse-spindle-types >= 0.4.66); silently ignored on older hosts. v0.27.4+."},{field:"generation?",type:"ChatGenerationOptions",optional:!0,desc:"Per-call overrides for the triggered generation (connection / persona / preset / parameters / target character / council retention). Only consulted when triggerGeneration is true; silently ignored otherwise. Each field is optional and falls through to the active chat's defaults when omitted. v0.27.4+."}]},{name:"ChatGenerationOptions",note:"Per-call generation overrides for api.chat.sendMessage(content, { triggerGeneration: true, generation: ... }). Mirrors the host's ChatAppendGenerationOptionsDTO 1:1 in camelCase. Each field is optional; omitted fields fall through to the active chat's resolved defaults (same as a manual UI generation). Use this when a tool script needs to deviate from the user's normal chat configuration for a single triggered generation. v0.27.4+.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Override which connection profile to use. Falls back to the user's default connection."},{field:"personaId?",type:"string",optional:!0,desc:"Override which persona to use. Falls back to the user's active persona setting."},{field:"personaAddonStates?",type:"Record<string, boolean>",optional:!0,desc:"Per-addon enable/disable map for the chosen persona. Keys are addon ids; values are booleans. Omitted addons inherit chat-level state."},{field:"presetId?",type:"string",optional:!0,desc:"Override which preset to use. Falls back to the active preset setting (activeLoomPresetId), then to the connection's attached preset."},{field:"forcePresetId?",type:"boolean",optional:!0,desc:`When true, forces the supplied presetId over a connection-bound preset. Currently only consulted by the host's impersonation oneliner pipeline; triggerGeneration runs as generation_type "normal" where this field is a silent no-op. Exposed for fidelity with the host DTO.`},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Per-call parameter overrides (temperature, max_tokens, top_p, etc.) layered on the resolved preset's parameters. Provider-specific keys accepted; forwarded verbatim."},{field:"targetCharacterId?",type:"string",optional:!0,desc:"For group chats only: which character should respond. Falls back to the chat's character_id."},{field:"retainCouncil?",type:"boolean",optional:!0,desc:"When true, retains council-tool results from the previous generation rather than re-running them. Useful for cheap regenerate-style flows where the council context hasn't changed. Default false."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMDelegateOptions",note:"Options for api.ui.dom.delegate(selector, event, handler, options?). v0.27.1+.",fields:[{field:"root?",type:"'chat' | 'document'",optional:!0,desc:"Where to attach the actual host-side capture listener. 'chat' (default): restricts matching to chat content; matches descendants of [data-message-id]. 'document': matches anywhere in the page (including Lumiverse's own UI surfaces). Both gate on app_manipulation."},{field:"messageId?",type:"string",optional:!0,desc:'Limit matching to a specific message id. Has no effect when root is "document".'},{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() before dispatching. Default: false."},{field:"stopPropagation?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.stopPropagation() after dispatching, preventing host-side and other delegation listeners from also reacting. Default: false."}]},{name:"DOMDelegatedEventData",note:"Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context. v0.27.1+.",fields:[{field:"matched",type:"{ tagName, classList, dataset, attributes, textContent, id?, value?, checked?, selectedIndex?, selectedText?, label? }",optional:!1,desc:'Snapshot of the element matched by event.target.closest(selector). May be an ancestor of the literal event.target. Form-input fields (value/checked/selectedIndex/selectedText/label) populated only for matching element types. label is the trimmed text of the first associated <label> (input / textarea / select only — explicit "for=" or implicit wrapping).'},{field:"modifiers",type:"{ ctrl, shift, alt, meta, button? }",optional:!1,desc:"Modifier-key state at event time. button is populated for click events (0=left, 1=middle, 2=right)."},{field:"message?",type:"{ id, role, swipeId }",optional:!0,desc:`Populated when the matched element is inside an assistant or user message. role: 'user' for [data-part="user"], 'assistant' otherwise. swipeId is the active swipe at dispatch time, resolved backend-side via the host's chat history. Falls through with 0 if the chat closed between event fire and dispatch or the message left the history.`},{field:"(plus DOMEventData fields)",type:"see DOMEventData",optional:!1,desc:"Inherits type, targetId, targetValue, targetChecked, dataset, detail, clientX, clientY from DOMEventData (see above)."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."},{field:"key?",type:"string",optional:!0,desc:"KeyboardEvent.key — the value of the key pressed, modifier-aware ('Enter', 'Escape', 'a', 'A', 'ArrowUp', 'Shift'). Populated only for keydown / keyup / keypress events. Use this to distinguish e.g. Enter-to-submit on a text input."},{field:"code?",type:"string",optional:!0,desc:"KeyboardEvent.code — physical key on the keyboard, layout-independent ('Enter', 'KeyA' regardless of shift, 'ArrowUp', 'ShiftLeft'). Populated only for keydown / keyup / keypress events. Use this for physical-position bindings (e.g. WASD)."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"WorldInfoInterceptorEntry",note:"Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"comment",type:"string",optional:!1,desc:"Author-facing comment / label for the entry."},{field:"disabled",type:"boolean",optional:!1,desc:"Stored disabled flag (or accumulated disable from earlier handlers in the chain)."},{field:"constant",type:"boolean",optional:!1,desc:"Always-active flag."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:"Per-extension namespace metadata stored on the entry."},{field:"key",type:"readonly string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"readonly string[]",optional:!1,desc:"Secondary trigger keywords."},{field:"position",type:"number",optional:!1,desc:"Injection position."},{field:"depth",type:"number",optional:!1,desc:"Injection depth."},{field:"priority",type:"number",optional:!1,desc:"Activation priority."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100)."},{field:"useProbability",type:"boolean",optional:!1,desc:"Whether probability gating applies."},{field:"content",type:"string",optional:!1,desc:"Entry text content (reflects mutations from earlier handlers in the chain)."}]},{name:"WorldInfoInterceptorMessage",note:"One chat message exposed to a registerInterceptor handler.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message role."},{field:"content",type:"string",optional:!1,desc:"Message content."}]},{name:"WorldInfoInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"characterId",type:"string",optional:!1,desc:"Active character id."},{field:"userId?",type:"string",optional:!0,desc:"Owning user id. Pass to operator-scoped Spindle calls."},{field:"entries",type:"readonly WorldInfoInterceptorEntry[]",optional:!1,desc:"Candidate entries with prior handlers' mutations applied."},{field:"messages",type:"readonly WorldInfoInterceptorMessage[]",optional:!1,desc:"Chat-history snapshot."},{field:"chatTurn",type:"number",optional:!1,desc:"Turn number for this chat."},{field:"chatMetadata",type:"Record<string, unknown>",optional:!1,desc:"Chat-level metadata snapshot. Read-only."}]},{name:"WorldInfoInterceptorResult",note:"Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.",fields:[{field:"disabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-disable. Wins against any later enabled / forced vote."},{field:"enabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled."},{field:"forced?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced."},{field:"mutated?",type:"readonly { id: string; content: string }[]",optional:!0,desc:"Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id."}]},{name:"WorldInfoInterceptorOptions",note:"Passed to api.worldInfo.registerInterceptor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers' decisions applied to the entry list."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call."}]},{name:"RegisteredWorldInfoInterceptorInfo",note:"Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.",fields:[{field:"scriptId",type:"string",optional:!1,desc:"Owning script id."},{field:"scriptName",type:"string",optional:!1,desc:"Owning script display name."},{field:"id",type:"string",optional:!1,desc:"Resolved entry id (auto-generated or user-provided)."},{field:"priority",type:"number",optional:!1,desc:"Effective priority value."},{field:"timeoutMs",type:"number",optional:!1,desc:"Effective per-invocation timeout (ms)."}]},{name:"RegexScriptInfo",note:"Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique row id."},{field:"name",type:"string",optional:!1,desc:"Display name shown in the regex panel."},{field:"scriptId",type:"string",optional:!1,desc:"Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern compiled with the JavaScript regex engine."},{field:"replaceString",type:"string",optional:!1,desc:"Replacement template. Supports $1 / $& / $<name> capture references."},{field:"flags",type:"string",optional:!1,desc:'Any subset of "gimsu".'},{field:"placement",type:"RegexPlacement[]",optional:!1,desc:"Which message roles the rule applies to."},{field:"scope",type:"RegexScope",optional:!1,desc:"Scope tier: 'global' | 'character' | 'chat'."},{field:"scopeId",type:"string | null",optional:!1,desc:"Required when scope is non-global; null otherwise."},{field:"target",type:"RegexTarget",optional:!1,desc:"When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)."},{field:"minDepth",type:"number | null",optional:!1,desc:"Lower bound on chat-history depth (0 = latest), or null for unbounded."},{field:"maxDepth",type:"number | null",optional:!1,desc:"Upper bound on chat-history depth, or null for unbounded."},{field:"trimStrings",type:"string[]",optional:!1,desc:"Additional substrings stripped from output after the regex pass."},{field:"runOnEdit",type:"boolean",optional:!1,desc:"Re-run the rule when a message is edited."},{field:"substituteMacros",type:"RegexMacroMode",optional:!1,desc:"How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'."},{field:"disabled",type:"boolean",optional:!1,desc:"When true, the rule is registered but not active."},{field:"sortOrder",type:"number",optional:!1,desc:"Lower values run earlier within the same scope tier."},{field:"description",type:"string",optional:!1,desc:"Free-form note."},{field:"folder",type:"string",optional:!1,desc:"Folder label shown in the regex panel."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata namespaced to the creating extension."},{field:"createdAt",type:"number",optional:!1,desc:"Unix epoch seconds."},{field:"updatedAt",type:"number",optional:!1,desc:"Unix epoch seconds."}]},{name:"RegexScriptListOptions",note:"Filter options for api.regexScripts.list().",fields:[{field:"scope?",type:"'global' | 'character' | 'chat'",optional:!0,desc:"Filter to a single scope. Omit to include all scopes."},{field:"scopeId?",type:"string",optional:!0,desc:"Required when scope is 'character' or 'chat'. Ignored otherwise."},{field:"target?",type:"'prompt' | 'response' | 'display'",optional:!0,desc:"Filter by execution target."},{field:"limit?",type:"number",optional:!0,desc:"Page size. Default 50, max 200."},{field:"offset?",type:"number",optional:!0,desc:"Pagination offset."}]},{name:"RegexScriptActiveOptions",note:"Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.",fields:[{field:"target",type:"'prompt' | 'response' | 'display'",optional:!1,desc:"Required. The execution target to resolve for."},{field:"characterId?",type:"string",optional:!0,desc:"Include character-scoped rules attached to this character."},{field:"chatId?",type:"string",optional:!0,desc:"Include chat-scoped rules attached to this chat."}]},{name:"RegexScriptCreateInput",note:"Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.",fields:[{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern (JavaScript regex)."},{field:"replaceString?",type:"string",optional:!0,desc:"Replacement template. Default empty string."},{field:"flags?",type:"string",optional:!0,desc:'Any subset of "gimsu". Default "gi".'},{field:"placement?",type:"RegexPlacement[]",optional:!0,desc:'Default ["ai_output"].'},{field:"scope?",type:"RegexScope",optional:!0,desc:"Default 'global'."},{field:"scopeId?",type:"string | null",optional:!0,desc:"Required when scope is non-global."},{field:"target?",type:"RegexTarget",optional:!0,desc:"Default 'response'."},{field:"minDepth?",type:"number | null",optional:!0,desc:"Lower depth bound."},{field:"maxDepth?",type:"number | null",optional:!0,desc:"Upper depth bound."},{field:"trimStrings?",type:"string[]",optional:!0,desc:"Additional substrings stripped from output."},{field:"runOnEdit?",type:"boolean",optional:!0,desc:"Re-run on edit."},{field:"substituteMacros?",type:"RegexMacroMode",optional:!0,desc:"How CBS / {{...}} macros inside the rule resolve. Default 'none'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Create as disabled."},{field:"sortOrder?",type:"number",optional:!0,desc:"Default 0."},{field:"description?",type:"string",optional:!0,desc:"Free-form note."},{field:"folder?",type:"string",optional:!0,desc:"Folder label."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."},{field:"scriptId?",type:"string",optional:!0,desc:"Stable identifier. Normalized to lowercase + underscores by the host."}]},{name:"RegexScriptUpdateInput",note:"Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.",fields:[{field:"(all RegexScriptCreateInput fields, all optional)",type:"—",optional:!0,desc:"Only the fields you provide are updated; omitted fields are left unchanged."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],S$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:WP.map((g)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"delegate",args:"selector, event, handler, options?",desc:`Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn't inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. v0.27.1+. Requires app_manipulation.`},{name:"cleanup",args:"—",desc:"Remove all DOM injections, styles, and delegations created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+."},{name:"listInterceptors",args:"—",desc:"Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.regexScripts",rows:[{name:"list",args:"options?",desc:"List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }."},{name:"get",args:"scriptId",desc:"Get a single regex script by id. Returns null if not found."},{name:"findByName",args:"name, scope?",desc:"Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case."},{name:"getActive",args:"options",desc:"Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId."},{name:"create",args:"input",desc:"Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)."},{name:"update",args:"scriptId, input",desc:"Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found."},{name:"delete",args:"scriptId",desc:"Delete a regex script. Returns true if the row was deleted."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],T$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:mP.map((g)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(dn,{label:g.group,cols:3},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.group}-${i.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],XP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],k$=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],YP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],D$=()=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",z.jsxDEV(Ao,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",z.jsxDEV(Ao,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",z.jsxDEV(Ao,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",z.jsxDEV(Ao,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",z.jsxDEV(Ao,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",z.jsxDEV(Ao,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:[z.jsxDEV(dn,{label:"ls:components",cols:3},void 0,!1,void 0,this),GP.map((g)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),z.jsxDEV(dn,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),XP.map((g)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),z.jsxDEV(dn,{label:"ls:icons",cols:3},void 0,!1,void 0,this),k$.map((g)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:YP.map((g)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Ao,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),O3=()=>z.jsxDEV("div",{className:"ls-ref",children:[z.jsxDEV("div",{className:"ls-ref-toolbar",children:z.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>w3(),title:"Download the current reference as a Markdown file",children:[z.jsxDEV(X0,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(Mi,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:z.jsxDEV(x$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(pt,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:z.jsxDEV(N$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(o1,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[z.jsxDEV(B$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",z.jsxDEV(Ao,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(at,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[z.jsxDEV(C$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",z.jsxDEV(Ao,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",z.jsxDEV(Ao,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:z.jsxDEV(S$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(jt,{size:11},void 0,!1,void 0,this),title:"API Functions",children:z.jsxDEV(T$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(St,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:z.jsxDEV(D$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(zv,{icon:z.jsxDEV(st,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[z.jsxDEV("p",{className:"ls-ref-muted",children:[z.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Ao,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",z.jsxDEV(Ao,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",z.jsxDEV(Ao,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",z.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[z.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Ao,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",z.jsxDEV(Ao,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",z.jsxDEV(Ao,{children:"enabled: false"},void 0,!1,void 0,this)," and ",z.jsxDEV(Ao,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Ir=wr(ro(),1),A3=!1,H3=({script:g,allScripts:i,activeContext:h,isRunning:t,consoleEntries:u,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:A,sendToBackend:W})=>{let[G,m]=Co.useState(g.code),[q,X]=Co.useState(!1),[I,T]=Co.useState(!1),[Z,c]=Co.useState(g.name),[rr,ur]=Co.useState("code"),[lr,E]=Co.useState(!1),[p,gr]=Co.useState(!1),N=Co.useRef(null),y=Co.useRef(null),f=Co.useRef(null),C=Co.useRef(g.id),Rr=Co.useRef(W);Co.useEffect(()=>{C.current=g.id},[g.id]),Co.useEffect(()=>{Rr.current=W},[W]),Co.useEffect(()=>{m(g.code),X(!1),c(g.name),gr(!1)},[g.id,g.code,g.name]),Co.useEffect(()=>{return()=>{if(N.current)clearTimeout(N.current),N.current=null;let F=f.current;if(F!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${C.current}, len=${F.length})`);try{Rr.current({type:"update_script",id:C.current,patch:{code:F}})}catch(er){console.error("[LumiScript] ScriptEditor unmount-flush failed:",er)}f.current=null}}},[]),Co.useEffect(()=>{W({type:"get_active_context"})},[g.id,W]),Co.useEffect(()=>{let F=setInterval(()=>{W({type:"get_active_context"})},2000);return()=>clearInterval(F)},[W]);let Hr=Co.useCallback((F)=>{console.log(`[LumiScript] saveCode: script=${g.id}, len=${F.length}, head="${F.slice(0,40).replace(/\n/g,"\\n")}"`),W({type:"update_script",id:g.id,patch:{code:F}}),f.current=null,X(!1)},[g.id,W]),mr=(F)=>{if(F===void 0)return;if(m(F),X(F!==g.code),f.current=F,N.current)clearTimeout(N.current);N.current=setTimeout(()=>Hr(F),O)},Br=(F,er)=>{if(y.current=F,!A3){A3=!0;let Or=er.languages.typescript.javascriptDefaults;Or.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Or.setCompilerOptions({target:er.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Or.addExtraLib(t3,"ts:lumiverse/lumiscript-api.d.ts")}F.addCommand(er.KeyMod.CtrlCmd|er.KeyCode.KeyS,()=>{if(N.current)clearTimeout(N.current);Hr(F.getValue())}),F.getModel()?.setEOL(er.editor.EndOfLineSequence.LF)},k=()=>{if(t)return;if(N.current)clearTimeout(N.current),N.current=null;if(q)Hr(y.current?.getValue()??G);W({type:"run_script",id:g.id})},s=()=>{let F=Z.trim();if(F&&F!==g.name)W({type:"update_script",id:g.id,patch:{name:F}});T(!1)},ir=(F)=>{let er=g.bindings??[];W({type:"update_script",id:g.id,patch:{bindings:[...er,F]}})},Qr=(F)=>{W({type:"update_script",id:g.id,patch:{bindings:(g.bindings??[]).filter((er,Or)=>Or!==F)}})},Gr=()=>{if(g.allowDangerous)W({type:"update_script",id:g.id,patch:{allowDangerous:!1}});else if(p)gr(!1),W({type:"update_script",id:g.id,patch:{allowDangerous:!0}});else gr(!0)},V=(F)=>new Date(F).toLocaleString();return Ir.jsxDEV("div",{className:"ls-editor-root",children:[Ir.jsxDEV("div",{className:"ls-editor-topbar",children:[I?Ir.jsxDEV("input",{className:"ls-editor-name-input",value:Z,autoFocus:!0,onChange:(F)=>c(F.target.value),onBlur:s,onKeyDown:(F)=>{if(F.key==="Enter")s();if(F.key==="Escape")c(g.name),T(!1)}},void 0,!1,void 0,this):Ir.jsxDEV("span",{className:"ls-editor-name",onClick:()=>T(!0),title:"Click to rename",style:{cursor:"text"},children:g.name},void 0,!1,void 0,this),q&&Ir.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>ur("code"),title:"Code editor",children:[Ir.jsxDEV(We,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>ur("docs"),title:"API reference",children:[Ir.jsxDEV(Tt,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),g.type!=="library"&&Ir.jsxDEV("button",{className:`ls-btn${t?"":" ls-accent"}`,onClick:k,disabled:t,children:[t?Ir.jsxDEV(Zl,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Ir.jsxDEV(J0,{size:15},void 0,!1,void 0,this),t?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Ir.jsxDEV("div",{className:"ls-editor-monaco",children:Ir.jsxDEV(g3,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:G,onChange:mr,onMount:Br,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},g.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Ir.jsxDEV("div",{className:"ls-editor-docs",children:Ir.jsxDEV(O3,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Ir.jsxDEV(l3,{entries:u,isRunning:t,onClear:A},void 0,!1,void 0,this),g.type==="trigger"&&Ir.jsxDEV(h3,{scriptId:g.id,triggers:g.triggers??[],sendToBackend:W},void 0,!1,void 0,this),g.type==="trigger"&&Ir.jsxDEV(i3,{bindings:g.bindings??[],activeContext:h,onAdd:ir,onRemove:Qr},void 0,!1,void 0,this),p&&Ir.jsxDEV("div",{className:"ls-danger-confirm",children:[Ir.jsxDEV(Vn,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:Gr,children:"Enable"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>gr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-meta-footer",children:[Ir.jsxDEV("span",{className:"ls-meta-item",children:Ir.jsxDEV("button",{className:"ls-danger-btn",onClick:Gr,title:"Toggle dangerous mode",children:[g.allowDangerous?Ir.jsxDEV(Vn,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Ir.jsxDEV(g1,{size:11},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:g.allowDangerous?"ls-dangerous":"",children:g.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Ir.jsxDEV(Y0,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("select",{className:"ls-folder-select",value:g.folder??"",onChange:(F)=>{let er=F.target.value;if(er==="__new__"){let Or=window.prompt("New folder name:");if(Or?.trim())W({type:"update_script",id:g.id,patch:{folder:Or.trim()}})}else W({type:"update_script",id:g.id,patch:{folder:er}})},children:[Ir.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(i.map((F)=>F.folder).filter((F)=>!!F))].sort().map((F)=>Ir.jsxDEV("option",{value:F,children:F},F,!1,void 0,this)),Ir.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(yt,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Updated ",V(g.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(kt,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Created ",V(g.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:g.id,onClick:()=>{navigator.clipboard.writeText(g.id).catch(()=>{}),E(!0),setTimeout(()=>E(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?Ir.jsxDEV(Dt,{size:10},void 0,!1,void 0,this):Ir.jsxDEV(pg,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["ID ",g.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $e=wr(ro(),1),M3=({scripts:g,initialScriptId:i,activeContext:h,execInfo:t,activeRunScriptId:u,isRunning:P,consoleHistory:O,editorFontSize:A,autosaveDebounceMs:W,onClearConsole:G,onClose:m,sendToBackend:q})=>{let[X,I]=L1.useState(i),T=g.find((lr)=>lr.id===X)??null;L1.useEffect(()=>{I(i)},[i]),L1.useEffect(()=>{let lr=(E)=>{if(E.key==="Escape")m()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[m]);let Z=T?O[T.id]??[]:[],c=P&&T?.id===u;return q3.createPortal($e.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)m()},children:$e.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[$e.jsxDEV("div",{className:"ls-modal-header",children:[$e.jsxDEV("span",{className:"ls-modal-title",children:[$e.jsxDEV(Cl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),$e.jsxDEV("button",{className:"ls-modal-close",onClick:m,title:"Close (Esc)",children:$e.jsxDEV(ke,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$e.jsxDEV("div",{className:"ls-modal-body",children:[$e.jsxDEV("div",{className:"ls-modal-sidebar",children:$e.jsxDEV(Jw,{scripts:g,selectedId:X,execInfo:t,onSelect:I,onEdit:I,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this),$e.jsxDEV("div",{className:"ls-modal-main",children:T?$e.jsxDEV(H3,{script:T,allScripts:g,activeContext:h,isRunning:c,consoleEntries:Z,editorFontSize:A,autosaveDebounceMs:W,onClearConsole:()=>{if(T)G(T.id)},sendToBackend:q},void 0,!1,void 0,this):$e.jsxDEV("div",{className:"ls-placeholder",children:[$e.jsxDEV(Cl,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),$e.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var xw=wr(ro(),1),R3=({scripts:g,activeContext:i,execInfo:h,activeRunScriptId:t,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:A,onClearConsole:W,onScriptOpened:G,sendToBackend:m})=>{let[q,X]=Nw.useState(null);return Nw.useEffect(()=>{if(q&&G)G(q)},[q,G]),xw.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[xw.jsxDEV(Jw,{scripts:g,selectedId:q,execInfo:h,onSelect:()=>{},onEdit:X,sendToBackend:m},void 0,!1,void 0,this),q!==null&&xw.jsxDEV(M3,{scripts:g,initialScriptId:q,activeContext:i,execInfo:h,activeRunScriptId:t,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:A,onClearConsole:W,onClose:()=>X(null),sendToBackend:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var W3=wr(io(),1);var ao=wr(ro(),1),V$=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function c$(g){if(g===void 0)return"undefined";if(g===null)return"null";if(typeof g==="string")return g.length>80?g.slice(0,77)+"…":g;try{let i=JSON.stringify(g);return i.length>80?i.slice(0,77)+"…":i}catch{return String(g)}}var m3=({variables:g,sendToBackend:i})=>{let[h,t]=W3.useState(new Set(["local","global","chat","character"])),u=(O)=>{t((A)=>{let W=new Set(A);if(W.has(O))W.delete(O);else W.add(O);return W})},P=g?Object.values(g).reduce((O,A)=>O+Object.keys(A).length,0):0;return ao.jsxDEV("div",{className:"ls-status-section",children:[ao.jsxDEV("div",{className:"ls-inject-header",children:[ao.jsxDEV(dg,{size:10},void 0,!1,void 0,this),"Variables",P>0&&ao.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),ao.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>i({type:"get_variables"}),children:ao.jsxDEV(qi,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ao.jsxDEV("div",{className:"ls-status-section-body",children:!g?ao.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?ao.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):V$.map(({key:O,label:A,hint:W})=>{let G=g[O],m=Object.keys(G),q=h.has(O);if(m.length===0)return null;return ao.jsxDEV("div",{className:"ls-vars-scope",children:[ao.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>u(O),children:[q?ao.jsxDEV(me,{size:10},void 0,!1,void 0,this):ao.jsxDEV(Mg,{size:10},void 0,!1,void 0,this),ao.jsxDEV("span",{className:"ls-vars-scope-name",children:A},void 0,!1,void 0,this),W&&ao.jsxDEV("span",{className:"ls-vars-scope-hint",children:W},void 0,!1,void 0,this),ao.jsxDEV("span",{className:"ls-vars-scope-count",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q&&ao.jsxDEV("div",{className:"ls-vars-scope-body",children:m.sort().map((X)=>ao.jsxDEV("div",{className:"ls-vars-entry",children:[ao.jsxDEV("span",{className:"ls-vars-key",children:X},void 0,!1,void 0,this),ao.jsxDEV("span",{className:"ls-vars-value",title:String(G[X]),children:c$(G[X])},void 0,!1,void 0,this)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Uv=wr(io(),1);function Bw(g){if(!Number.isFinite(g)||g<=0)return"0 B";let i=["B","KB","MB","GB"],h=Math.min(i.length-1,Math.floor(Math.log(g)/Math.log(1024))),t=g/Math.pow(1024,h);return`${h===0?t.toFixed(0):t.toFixed(1)} ${i[h]}`}function F1(g){let i;if(typeof g==="number")i=g;else{if(!g)return"—";i=new Date(g).getTime()}if(!Number.isFinite(i)||i<=0)return"—";let h=Date.now()-i;if(h<60000)return"just now";if(h<3600000)return`${Math.floor(h/60000)}m ago`;if(h<86400000)return`${Math.floor(h/3600000)}h ago`;if(h<2592000000)return`${Math.floor(h/86400000)}d ago`;return new Date(i).toISOString().slice(0,10)}var JP={script:"script",character:"char",chat:"chat"},G3={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Zw(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(h,t,u,P,O,A,W)=>{if(t)return`<span class="ls-json-key">${t}</span>${u}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(A)return`<span class="ls-json-null">${A}</span>`;if(W)return`<span class="ls-json-number">${W}</span>`;return h})}async function QP(g){try{return await navigator.clipboard.writeText(g),!0}catch{return!1}}var Lr=wr(ro(),1),sn=["script","character","chat"],y$=10485760,_$=41943040,a$=52428800;function E$(g){if(g>=_$)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(g>=y$)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function f$(g){if(g.scope==="character"){if(g.characterName)return`character: ${g.characterName} (${g.characterId})
${g.path}`;if(g.characterId)return`character: ${g.characterId} (not currently loaded)
${g.path}`}if(g.scope==="chat"){if(g.chatName)return`chat: ${g.chatName} (${g.chatId})
${g.path}`;if(g.chatId)return`chat: ${g.chatId} (not currently loaded)
${g.path}`}return g.path}function j$(g,i,h,t){switch(h){case"name":return g.name.localeCompare(i.name,void 0,{sensitivity:"base"});case"scope":return g.scope.localeCompare(i.scope);case"owner":{let u=t.get(g.scriptId)??g.scriptId,P=t.get(i.scriptId)??i.scriptId;return u.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return g.sizeBytes-i.sizeBytes;case"updated":return new Date(g.modifiedAt).getTime()-new Date(i.modifiedAt).getTime()}}var X3=({collections:g,scripts:i,sendToBackend:h,onInspect:t,onDrop:u})=>{let[P,O]=Uv.useState(""),[A,W]=Uv.useState(()=>new Set(sn)),[G,m]=Uv.useState(null),[q,X]=Uv.useState("asc"),I=Uv.useMemo(()=>{let N=new Map;for(let y of i)N.set(y.id,y.name);return N},[i]),T=Uv.useMemo(()=>{if(!g)return null;let N=g;if(A.size<sn.length)N=N.filter((f)=>A.has(f.scope));let y=P.trim().toLowerCase();if(y)N=N.filter((f)=>f.name.toLowerCase().includes(y));if(G){let f=q==="asc"?1:-1;N=N.slice().sort((C,Rr)=>j$(C,Rr,G,I)*f)}return N},[g,A,P,G,q,I]),Z=()=>h({type:"list_collections"}),c=(N)=>{W((y)=>{let f=new Set(y);if(f.has(N))f.delete(N);else f.add(N);if(f.size===0)return new Set(sn);return f})},rr=(N)=>{if(G!==N){m(N),X("asc");return}if(q==="asc"){X("desc");return}m(null)},ur=()=>{O(""),W(new Set(sn))},lr=g?.length??0,E=T?.length??0,p=P.trim().length>0||A.size<sn.length,gr=(N)=>{if(G!==N)return Lr.jsxDEV(ct,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return q==="asc"?Lr.jsxDEV(Mg,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Lr.jsxDEV(me,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Lr.jsxDEV("div",{className:"ls-status-section",children:[Lr.jsxDEV("div",{className:"ls-inject-header",children:[Lr.jsxDEV(dg,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Lr.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:Z,children:Lr.jsxDEV(qi,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-status-section-body",children:g===null?Lr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):g.length===0?Lr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Lr.jsxDEV(Lr.Fragment,{children:[Lr.jsxDEV("div",{className:"ls-collections-filter",children:[Lr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Lr.jsxDEV(Wv,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(N)=>O(N.target.value)},void 0,!1,void 0,this),P&&Lr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Lr.jsxDEV(ke,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-collections-filter-chips",children:sn.map((N)=>{let y=A.has(N);return Lr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":N,"aria-pressed":y,title:y?`Hide ${N}-scoped`:`Show ${N}-scoped`,onClick:()=>c(N),children:JP[N]},N,!1,void 0,this)})},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${E}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),E===0?Lr.jsxDEV("div",{className:"ls-section-empty",children:[Lr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Lr.jsxDEV("button",{onClick:ur,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Lr.jsxDEV("div",{className:"ls-collections-list",children:[Lr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Lr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",gr("name")]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",gr("scope")]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",gr("owner")]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",gr("size")]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",gr("updated")]},void 0,!0,void 0,this),Lr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T.map((N)=>{let y=I.get(N.scriptId)??`(${N.scriptId.slice(0,8)}…)`,f=!I.has(N.scriptId),C=f?`scriptId: ${N.scriptId} (not currently loaded)`:`${y} (${N.scriptId})`;return Lr.jsxDEV("div",{className:"ls-collections-row",children:[Lr.jsxDEV("span",{className:"ls-collections-name",title:N.name,children:N.name},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-scope","data-scope":N.scope,title:f$(N),children:JP[N.scope]},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:C,children:y},void 0,!1,void 0,this),(()=>{let Rr=E$(N.sizeBytes),Hr=(N.sizeBytes/a$*100).toFixed(N.sizeBytes<1048576?2:1),mr=`${N.sizeBytes.toLocaleString()} bytes (${Hr}% of 50 MB cap)`;return Lr.jsxDEV("span",{className:"ls-collections-size","data-budget":Rr.tier,title:mr,style:Rr.tier==="normal"?void 0:{color:Rr.color,fontWeight:600},children:Bw(N.sizeBytes)},void 0,!1,void 0,this)})(),Lr.jsxDEV("span",{className:"ls-collections-updated",title:N.modifiedAt,children:F1(N.modifiedAt)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-collections-actions",children:[Lr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>t(N.path),children:Lr.jsxDEV(_t,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>u(N),children:Lr.jsxDEV(Ke,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},N.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Do=wr(io(),1),Q3=wr(Sn(),1);var gl=wr(io(),1),Y3=wr(Sn(),1);var Xo=wr(ro(),1);function p$(g){let{id:i,createdAt:h,updatedAt:t,...u}=g;try{return JSON.stringify(u,null,2)}catch{return"{}"}}var J3=({path:g,record:i,onClose:h,sendToBackend:t})=>{let[u,P]=gl.useState(()=>p$(i)),[O,A]=gl.useState(null),W=gl.useRef(null),G=gl.useRef(null),m=gl.useRef(null);gl.useEffect(()=>{let Z=(c)=>{if(c.key==="Escape")h()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[h]),gl.useEffect(()=>{let Z=(c)=>{if(c.key!=="Tab")return;let rr=W.current;if(!rr)return;let ur=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(ur.length===0)return;let lr=ur[0],E=ur[ur.length-1],p=document.activeElement,gr=p!==null&&rr.contains(p);if(c.shiftKey){if(!gr||p===lr)c.preventDefault(),E.focus()}else if(!gr||p===E)c.preventDefault(),lr.focus()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[]),gl.useEffect(()=>{let Z=setTimeout(()=>G.current?.focus(),0);return()=>clearTimeout(Z)},[]);let q=()=>{let Z;try{Z=JSON.parse(u)}catch(c){let rr=c instanceof Error?c.message:String(c);A(`JSON parse error: ${rr}`);return}if(Z===null||typeof Z!=="object"||Array.isArray(Z)){A("Record must be a JSON object — not an array, null, or primitive.");return}A(null),t({type:"update_record",path:g,recordId:String(i.id),patch:Z}),h()},X=(Z)=>{if((Z.metaKey||Z.ctrlKey)&&Z.key==="Enter")Z.preventDefault(),q()},I=String(i.id),T=Xo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Z)=>{if(Z.target===Z.currentTarget)h()},children:Xo.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:W,onClick:(Z)=>Z.stopPropagation(),children:[Xo.jsxDEV("div",{className:"ls-modal-header",children:[Xo.jsxDEV("span",{className:"ls-modal-title",children:[Xo.jsxDEV(sg,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Xo.jsxDEV("button",{className:"ls-modal-close",onClick:h,title:"Cancel (Esc)",children:Xo.jsxDEV(ke,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-edit-body",children:[Xo.jsxDEV("div",{className:"ls-edit-meta",children:[Xo.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Xo.jsxDEV("code",{className:"ls-edit-meta-value",title:I,children:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Xo.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Xo.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Xo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Xo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Xo.jsxDEV("pre",{ref:m,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Zw(u)+`
`}},void 0,!1,void 0,this),Xo.jsxDEV("textarea",{ref:G,className:"ls-edit-textarea",value:u,onChange:(Z)=>{if(P(Z.target.value),O)A(null)},onKeyDown:X,onScroll:(Z)=>{let c=m.current;if(!c)return;c.scrollTop=Z.currentTarget.scrollTop,c.scrollLeft=Z.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Xo.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Xo.jsxDEV(Cg,{size:12},void 0,!1,void 0,this),Xo.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xo.jsxDEV("div",{className:"ls-drop-actions",children:[Xo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:h,children:"Cancel"},void 0,!1,void 0,this),Xo.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:q,title:"Save (Ctrl/Cmd+Enter)",children:[Xo.jsxDEV(e1,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Y3.createPortal(T,document.body)};var j=wr(ro(),1),L0=50,d$=150,s$=1200,rI=4000,z3=({path:g,summary:i,records:h,total:t,error:u,stats:P,refreshToken:O,onClose:A,sendToBackend:W})=>{let[G,m]=Do.useState(""),[q,X]=Do.useState(""),[I,T]=Do.useState(0),[Z,c]=Do.useState("shallow"),[rr,ur]=Do.useState(0),[lr,E]=Do.useState(()=>new Set),[p,gr]=Do.useState(null),[N,y]=Do.useState(null),[f,C]=Do.useState("records");Do.useEffect(()=>{let F=setTimeout(()=>X(G),d$);return()=>clearTimeout(F)},[G]),Do.useEffect(()=>{T(0)},[q,Z]),Do.useEffect(()=>{let F=q.trim();if(Z==="jsonquery")W({type:"inspect_collection",path:g,jsonqueryFilter:F||void 0,limit:L0,offset:I*L0});else W({type:"inspect_collection",path:g,textFilter:F||void 0,deepFilter:Z==="deep"||void 0,limit:L0,offset:I*L0})},[g,q,Z,I,O,rr,W]),Do.useEffect(()=>{let F=(er)=>{if(er.key==="Escape")A()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[A]);let Rr=Math.max(1,Math.ceil(t/L0)),Hr=t===0?0:I*L0+1,mr=Math.min(t,(I+1)*L0),Br=Do.useMemo(()=>{let F=g.match(/\/([^/]+)\.json$/);return F?F[1]:g},[g]),k=Do.useMemo(()=>{if(!i)return null;if(i.scope==="character"&&i.characterName)return`character: ${i.characterName}`;if(i.scope==="chat"&&i.chatName)return`chat: ${i.chatName}`;return null},[i]),s=(F)=>{E((er)=>{let Or=new Set(er);return Or.add(F),Or}),setTimeout(()=>{E((er)=>{if(!er.has(F))return er;let Or=new Set(er);return Or.delete(F),Or})},s$)},ir=async(F)=>{if(await QP(String(F.id)))s(`${F.id}:id`)},Qr=async(F)=>{if(await QP(JSON.stringify(F,null,2)))s(`${F.id}:json`)};Do.useEffect(()=>{if(N===null)return;let F=setTimeout(()=>y(null),rI);return()=>clearTimeout(F)},[N]);let Gr=(F)=>{let er=String(F.id);if(N===er)W({type:"delete_record",path:g,recordId:er}),y(null);else y(er)};Do.useEffect(()=>{y(null),gr(null)},[I,q,Z,g]),Do.useEffect(()=>{C("records")},[g]),Do.useEffect(()=>{if(f!=="stats")return;W({type:"analyze_collection",path:g})},[f,g,O,rr,W]);let V=j.jsxDEV("div",{className:"ls-modal-overlay",onClick:(F)=>{if(F.target===F.currentTarget)A()},children:j.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(F)=>F.stopPropagation(),children:[j.jsxDEV("div",{className:"ls-modal-header",children:[j.jsxDEV("span",{className:"ls-modal-title",children:[j.jsxDEV(dg,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-name",children:Br},void 0,!1,void 0,this),k&&j.jsxDEV("span",{className:"ls-inspect-title-path",title:g,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-path",title:g,children:g},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:()=>ur((F)=>F+1),title:"Refresh records",style:{marginRight:4},children:j.jsxDEV(qi,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:A,title:"Close (Esc)",children:j.jsxDEV(ke,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>C("records"),children:[j.jsxDEV(ft,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>C("stats"),children:[j.jsxDEV(qv,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{className:"ls-inspect-toolbar",children:[j.jsxDEV("div",{className:"ls-inspect-search",children:[j.jsxDEV(Wv,{size:12},void 0,!1,void 0,this),j.jsxDEV("input",{type:Z==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:Z==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":Z==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:G,onChange:(F)=>m(F.target.value),autoFocus:!0,spellCheck:Z!=="jsonquery",autoCorrect:Z==="jsonquery"?"off":"on",autoCapitalize:Z==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),j.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>c("shallow"),children:j.jsxDEV(Wv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>c("deep"),children:j.jsxDEV(Mv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":Z==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>c("jsonquery"),children:j.jsxDEV(We,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-pager",children:[j.jsxDEV("span",{className:"ls-inspect-pager-status",children:t===0?"No matching records":j.jsxDEV(j.Fragment,{children:["Showing ",j.jsxDEV("strong",{children:Hr},void 0,!1,void 0,this),"–",j.jsxDEV("strong",{children:mr},void 0,!1,void 0,this)," of ",j.jsxDEV("strong",{children:t},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>T((F)=>Math.max(0,F-1)),disabled:I===0,title:"Previous page",children:j.jsxDEV(Vt,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>T((F)=>Math.min(Rr-1,F+1)),disabled:I>=Rr-1,title:"Next page",children:j.jsxDEV(Hi,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),u&&j.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[j.jsxDEV(Cg,{size:12},void 0,!1,void 0,this),j.jsxDEV("span",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-body",children:h===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):h.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:t===0&&q?j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{children:["No records match “",q,"”"]},void 0,!0,void 0,this),j.jsxDEV("button",{onClick:()=>m(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):t===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):j.jsxDEV("div",{className:"ls-inspect-records",children:h.map((F)=>{let er=String(F.id),Or=lr.has(`${F.id}:id`),qr=lr.has(`${F.id}:json`);return j.jsxDEV("div",{className:"ls-inspect-record",children:[j.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${er}`,children:[j.jsxDEV("code",{children:[er.slice(0,12),"…"]},void 0,!0,void 0,this),j.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",j.jsxDEV("time",{title:new Date(F.createdAt).toISOString(),children:F1(F.createdAt)},void 0,!1,void 0,this),F.updatedAt!==F.createdAt&&j.jsxDEV(j.Fragment,{children:[" · ","updated ",j.jsxDEV("time",{title:new Date(F.updatedAt).toISOString(),children:F1(F.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:Or?"Copied!":"Copy ID",onClick:()=>ir(F),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Or?"var(--lumiverse-accent)":"inherit",opacity:Or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(pg,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:qr?"Copied!":"Copy full JSON",onClick:()=>Qr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:qr?"var(--lumiverse-accent)":"inherit",opacity:qr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>gr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(sg,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action"+(N===er?" ls-inspect-record-action-confirm":""),title:N===er?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Gr(F),style:{background:N===er?"rgba(246, 130, 130, 0.18)":"transparent",border:N===er?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:N===er?"3px 6px":4,marginLeft:2,cursor:"pointer",color:N===er?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:N===er?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:N===er?600:400,borderRadius:3},children:[j.jsxDEV(Ke,{size:11},void 0,!1,void 0,this),N===er?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Zw(oI(F))}},void 0,!1,void 0,this)]},er,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&j.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):j.jsxDEV(lI,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return j.jsxDEV(j.Fragment,{children:[Q3.createPortal(V,document.body),p&&j.jsxDEV(J3,{path:g,record:p,onClose:()=>gr(null),sendToBackend:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function oI(g){let{id:i,createdAt:h,updatedAt:t,...u}=g;try{return JSON.stringify(u,null,2)}catch{return String(g)}}var eI={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function gI(g){if(typeof g==="string")return`"${g.length>32?g.slice(0,30)+"…":g}"`;if(g===null)return"null";return String(g)}function zP(g){if(!Number.isFinite(g))return"—";return Number.isInteger(g)?String(g):g.toFixed(2)}var lI=({stats:g})=>{return j.jsxDEV("div",{className:"ls-inspect-stats",children:[j.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",j.jsxDEV("strong",{children:g.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",g.totalRecords===1?"record":"records"," ·"," ",j.jsxDEV("strong",{children:g.fields.length},void 0,!1,void 0,this)," ",g.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-grid",children:g.fields.map((i)=>j.jsxDEV(iI,{field:i,totalRecords:g.totalRecords},i.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},iI=({field:g,totalRecords:i})=>{let h=i===0?0:Math.round(g.presence/i*100),t=Object.entries(g.types);return t.sort((u,P)=>P[1]-u[1]),j.jsxDEV("div",{className:"ls-inspect-stats-card",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[j.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:g.name,children:g.name},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${g.presence} of ${i} records`,children:[h,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:t.map(([u,P])=>j.jsxDEV("span",{className:eI[u],children:[u," · ",P]},u,!0,void 0,this))},void 0,!1,void 0,this),g.numericRange&&j.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[j.jsxDEV("span",{children:["min ",j.jsxDEV("strong",{children:zP(g.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["max ",j.jsxDEV("strong",{children:zP(g.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["mean ",j.jsxDEV("strong",{children:zP(g.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.topValues.length>0&&j.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",g.topValues.length," of ",g.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:g.topValues.map((u,P)=>j.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(u.value),children:[j.jsxDEV("code",{children:gI(u.value)},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",u.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var x1=wr(io(),1),U3=wr(Sn(),1);var to=wr(ro(),1);function vI(g){if(g.scope==="character"&&g.characterName&&g.characterId)return{label:"Character",name:g.characterName,id:g.characterId};if(g.scope==="chat"&&g.chatName&&g.chatId)return{label:"Chat",name:g.chatName,id:g.chatId};return null}var K3=({target:g,recordCount:i,onConfirm:h,onCancel:t})=>{let u=x1.useRef(null);x1.useEffect(()=>{let O=(A)=>{if(A.key==="Escape")t()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[t]),x1.useEffect(()=>{let O=(A)=>{if(A.key!=="Tab")return;let W=u.current;if(!W)return;let G=Array.from(W.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(G.length===0)return;let m=G[0],q=G[G.length-1],X=document.activeElement,I=X!==null&&W.contains(X);if(A.shiftKey){if(!I||X===m)A.preventDefault(),q.focus()}else if(!I||X===q)A.preventDefault(),m.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=to.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)t()},children:to.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:u,onClick:(O)=>O.stopPropagation(),children:[to.jsxDEV("div",{className:"ls-modal-header",children:[to.jsxDEV("span",{className:"ls-modal-title",children:[to.jsxDEV(Ke,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),to.jsxDEV("button",{className:"ls-modal-close",onClick:t,title:"Cancel (Esc)",children:to.jsxDEV(ke,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),to.jsxDEV("div",{className:"ls-drop-body",children:[to.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),to.jsxDEV("div",{className:"ls-drop-target",children:[to.jsxDEV("div",{className:"ls-drop-target-name",children:g.name},void 0,!1,void 0,this),to.jsxDEV("div",{className:"ls-drop-target-meta",children:[to.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":g.scope,children:G3[g.scope]},void 0,!1,void 0,this),to.jsxDEV("span",{className:"ls-drop-target-size",children:Bw(g.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=vI(g);if(!O)return null;return to.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",to.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),to.jsxDEV("div",{className:"ls-drop-target-path",title:g.path,children:g.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),i===null?to.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):i>=0?to.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:i===0?"Collection is currently empty.":to.jsxDEV(to.Fragment,{children:["Will delete ",to.jsxDEV("strong",{children:i.toLocaleString()},void 0,!1,void 0,this)," ",i===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,to.jsxDEV("div",{className:"ls-drop-warning",children:[to.jsxDEV(Cg,{size:12},void 0,!1,void 0,this),to.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),to.jsxDEV("div",{className:"ls-drop-actions",children:[to.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:t,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),to.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:h,children:[to.jsxDEV(Ke,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return U3.createPortal(P,document.body)};var Ji=wr(ro(),1),$3=({variables:g,collections:i,scripts:h,sendToBackend:t,inspectPath:u,inspectRecords:P,inspectTotal:O,inspectError:A,inspectStats:W,inspectRefreshToken:G,onInspect:m,dropTarget:q,dropTargetCount:X,onDrop:I,onDropConfirm:T})=>{return Ji.jsxDEV(Ji.Fragment,{children:[Ji.jsxDEV("div",{className:"ls-storage-list",children:[Ji.jsxDEV(m3,{variables:g,sendToBackend:t},void 0,!1,void 0,this),Ji.jsxDEV(X3,{collections:i,scripts:h,sendToBackend:t,onInspect:m,onDrop:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u!==null&&Ji.jsxDEV(z3,{path:u,summary:i?.find((Z)=>Z.path===u),records:P,total:O,error:A,stats:W,refreshToken:G,onClose:()=>m(null),sendToBackend:t},void 0,!1,void 0,this),q!==null&&Ji.jsxDEV(K3,{target:q,recordCount:X,onConfirm:T,onCancel:()=>I(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ar=wr(ro(),1),I3=({onBackendMessage:g,sendToBackend:i})=>{let[h,t]=Yo.useState("manage"),[u,P]=Yo.useState([]),[O,A]=Yo.useState(nw),[W,G]=Yo.useState({characterId:null,characterName:null,chatId:null}),[m,q]=Yo.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[X,I]=Yo.useState([]),[T,Z]=Yo.useState([]),[c,rr]=Yo.useState(null),[ur,lr]=Yo.useState(null),[E,p]=Yo.useState(null),[gr,N]=Yo.useState(null),[y,f]=Yo.useState(0),[C,Rr]=Yo.useState(null),[Hr,mr]=Yo.useState(0),[Br,k]=Yo.useState(null),[s,ir]=Yo.useState(null),[Qr,Gr]=Yo.useState(null),[V,F]=Yo.useState({});Yo.useEffect(()=>{let qr=g((Zr)=>{let nr=Zr;switch(nr.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${nr.scripts.length} script(s)`),P(nr.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${nr.script.id}, codeLen=${nr.script.code?.length??-1}`),P((Cr)=>Cr.map((jr)=>jr.id===nr.script.id?nr.script:jr));break}case"settings_updated":A(nr.settings);break;case"active_context":G({characterId:nr.characterId,characterName:nr.characterName,chatId:nr.chatId}),i({type:"get_variables"});break;case"variables_updated":rr(nr.variables);break;case"collections_list":lr(nr.collections);break;case"collection_records":N((Cr)=>{return nr.records}),f(nr.total),Rr(nr.error??null);break;case"collection_stats":k((Cr)=>{return nr.stats});break;case"collection_count":Gr((Cr)=>{return nr.count});break;case"collections_updated":i({type:"list_collections"}),mr((Cr)=>Cr+1);break;case"injections_updated":I(nr.injections);break;case"tools_updated":Z(nr.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};q((jr)=>{let Ro=jr.consoleHistory[nr.scriptId]??[],Ie=Ro.length>0?[...Ro,Cr]:Ro;return{...jr,activeScriptId:nr.scriptId,runId:nr.runId,isRunning:!0,consoleHistory:{...jr.consoleHistory,[nr.scriptId]:Ie},scriptExecInfo:{...jr.scriptExecInfo,[nr.scriptId]:{...jr.scriptExecInfo[nr.scriptId],dot:"running"}}}}),F((jr)=>({...jr,[nr.scriptId]:(jr[nr.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;q((jr)=>{let Ro=jr.consoleHistory[nr.scriptId]??[];if(Ro.length>=Cr)return jr;let hr=Ro.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:nr.entry;return{...jr,consoleHistory:{...jr.consoleHistory,[nr.scriptId]:[...Ro,hr]}}});break}case"execution_ended":q((Cr)=>{let jr=Cr.consoleHistory[nr.scriptId]??[],Ro=Cr.scriptExecInfo[nr.scriptId],Ie=!nr.success&&nr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:nr.error}]:[],hr=!nr.success?!0:Ro?.stickyError??!1,ye=!nr.success||hr?"error":"success",Ye=nr.duration??0,Eo=nr.success&&Ye===0&&(Ro?.duration??0)>0?Ro.duration:nr.duration;return{...Cr,isRunning:!1,consoleHistory:Ie.length?{...Cr.consoleHistory,[nr.scriptId]:[...jr,...Ie]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[nr.scriptId]:{dot:ye,duration:Eo,error:nr.error??Ro?.error,stickyError:hr}}}});break;case"error":console.warn("[LumiScript]",nr.message);break}});return i({type:"get_scripts"}),i({type:"get_settings"}),i({type:"get_active_context"}),i({type:"get_injections"}),i({type:"get_tools"}),qr},[g,i]),Yo.useEffect(()=>{if(h==="storage")i({type:"list_collections"})},[h,i]),Yo.useEffect(()=>{if(Gr(null),s)i({type:"count_collection",path:s.path})},[s,i]);let er=Yo.useCallback((qr)=>{q((Zr)=>({...Zr,consoleHistory:{...Zr.consoleHistory,[qr]:[]}}))},[]),Or=Yo.useCallback((qr)=>{q((Zr)=>{let nr=Zr.scriptExecInfo[qr];if(!nr?.stickyError)return Zr;return{...Zr,scriptExecInfo:{...Zr.scriptExecInfo,[qr]:{...nr,dot:"idle",stickyError:!1}}}})},[]);return Ar.jsxDEV("div",{className:"ls-panel",children:[Ar.jsxDEV("div",{className:"ls-tabs",children:[Ar.jsxDEV("button",{className:`ls-tab-pill${h==="manage"?" ls-active":""}`,onClick:()=>t("manage"),children:[Ar.jsxDEV(We,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${h==="status"?" ls-active":""}`,onClick:()=>t("status"),children:[Ar.jsxDEV(Bt,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${h==="storage"?" ls-active":""}`,onClick:()=>t("storage"),children:[Ar.jsxDEV(dg,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[h==="manage"&&Ar.jsxDEV(R3,{scripts:u,activeContext:W,execInfo:m.scriptExecInfo,activeRunScriptId:m.activeScriptId,isRunning:m.isRunning,consoleHistory:m.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:er,onScriptOpened:Or,sendToBackend:i},void 0,!1,void 0,this),h==="status"&&Ar.jsxDEV(hI,{scripts:u,execInfo:m.scriptExecInfo,invocationCounts:V,injections:X,tools:T,sendToBackend:i},void 0,!1,void 0,this),h==="storage"&&Ar.jsxDEV($3,{variables:c,collections:ur,scripts:u,sendToBackend:i,inspectPath:E,inspectRecords:gr,inspectTotal:y,inspectError:C,inspectStats:Br,inspectRefreshToken:Hr,onInspect:(qr)=>{p(qr),N(null),f(0),k(null)},dropTarget:s,dropTargetCount:Qr,onDrop:ir,onDropConfirm:()=>{if(!s)return;let qr=s.path;if(E===qr)p(null),N(null),f(0),k(null);i({type:"drop_collection",path:qr}),ir(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},nI={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},hI=({scripts:g,execInfo:i,invocationCounts:h,injections:t,tools:u,sendToBackend:P})=>{let O=g.filter((q)=>q.type==="trigger"&&q.enabled),A=Object.fromEntries(g.map((q)=>[q.id,q.name])),[W,G]=Yo.useState(new Set),m=(q)=>{G((X)=>{let I=new Set(X);if(I.has(q))I.delete(q);else I.add(q);return I})};return Ar.jsxDEV("div",{className:"ls-status-list",children:[Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(We,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((q)=>{let X=i[q.id],I=X?.dot??"idle",T={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[I],Z=q.triggers??[],c=h[q.id];return Ar.jsxDEV("div",{className:"ls-status-row",children:[Ar.jsxDEV("div",{className:"ls-status-row-main",children:[Ar.jsxDEV("span",{className:T,title:nI[I]},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-name",children:q.name},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-right",children:[c!==void 0&&c>0&&Ar.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${c} time${c!==1?"s":""} this session`,children:["×",c]},void 0,!0,void 0,this),X?.duration!==void 0&&I!=="running"&&Ar.jsxDEV("span",{className:"ls-status-duration",style:{color:I==="error"?"#ef4444":void 0},children:[X.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Z.length>0?Ar.jsxDEV("div",{className:"ls-status-events",children:Z.map((rr)=>Ar.jsxDEV("span",{className:"ls-event-badge",children:[Ar.jsxDEV(Mi,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Ar.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),I==="error"&&X?.error&&Ar.jsxDEV("div",{className:"ls-status-error-row",children:Ar.jsxDEV("span",{className:"ls-status-error-text",children:X.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(t1,{size:10},void 0,!1,void 0,this),"Active Tools",u.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):u.map((q)=>Ar.jsxDEV("div",{className:"ls-tool-row",children:[Ar.jsxDEV("div",{className:"ls-tool-name",title:q.description,children:q.name},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-tool-meta",children:[q.council_eligible&&Ar.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:q.scriptName},void 0,!1,void 0,this),Ar.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${q.name}`,title:`Unregister "${q.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:q.name}),children:Ar.jsxDEV(Ke,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(l1,{size:10},void 0,!1,void 0,this),"Active Injections",t.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:t.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:t.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):t.map((q)=>{let X=W.has(q.id);return Ar.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>m(q.id),children:[Ar.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${q.mode}`,title:q.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:q.mode==="intercept"?Ar.jsxDEV(Zt,{size:11},void 0,!1,void 0,this):Ar.jsxDEV(Ct,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-body",children:[Ar.jsxDEV("div",{className:"ls-inject-header-row",children:[Ar.jsxDEV("span",{className:"ls-inject-id",title:q.id,children:q.id},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-meta",children:[Ar.jsxDEV("span",{className:"ls-inject-role",children:q.role},void 0,!1,void 0,this),q.mode==="intercept"&&q.depth>0&&Ar.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${q.depth} message${q.depth!==1?"s":""}`,children:["d:",q.depth]},void 0,!0,void 0,this),q.ephemeral&&Ar.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Ar.jsxDEV(Q0,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:A[q.scriptId]??q.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-chevron",children:X?Ar.jsxDEV(Mg,{size:10},void 0,!1,void 0,this):Ar.jsxDEV(me,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Ar.jsxDEV("div",{className:"ls-inject-content",onClick:(I)=>I.stopPropagation(),children:q.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var N1=wr(io(),1);var Nr=wr(ro(),1),L3=({onBackendMessage:g,sendToBackend:i})=>{let[h,t]=N1.useState(nw),[u,P]=N1.useState([]);N1.useEffect(()=>{let G=g((m)=>{let q=m;if(q.type==="scripts_updated")P(q.scripts);if(q.type==="settings_updated")t(q.settings)});return i({type:"get_settings"}),i({type:"get_scripts"}),G},[g,i]);let O=u.filter((G)=>G.type==="trigger").length,A=u.filter((G)=>G.type==="library").length,W=(G)=>{i({type:"update_settings",patch:{enabled:G}})};return Nr.jsxDEV("div",{className:"ls-settings",children:[Nr.jsxDEV("div",{className:"ls-settings-header",children:Nr.jsxDEV("span",{className:"ls-settings-title",children:[Nr.jsxDEV(Cl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-toggle-row",children:[Nr.jsxDEV("label",{className:"ls-toggle",children:[Nr.jsxDEV("input",{type:"checkbox",checked:h.enabled,onChange:(G)=>W(G.target.checked)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-counts",children:[Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(We,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(G0,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:A},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Q0,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(h.scriptTimeoutMs/1000),onChange:(G)=>{let m=Math.max(5,Math.min(300,Number(G.target.value)||60));i({type:"update_settings",patch:{scriptTimeoutMs:m*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:h.consoleHistoryLimit,onChange:(G)=>{let m=Math.max(50,Math.min(2000,Number(G.target.value)||500));i({type:"update_settings",patch:{consoleHistoryLimit:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(n1,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:h.editorFontSize,onChange:(G)=>{let m=Math.max(10,Math.min(24,Number(G.target.value)||12));i({type:"update_settings",patch:{editorFontSize:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:h.autosaveDebounceMs,onChange:(G)=>{let m=Math.max(300,Math.min(5000,Number(G.target.value)||1200));i({type:"update_settings",patch:{autosaveDebounceMs:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:h.defaultTriggerTemplate,onChange:(G)=>i({type:"update_settings",patch:{defaultTriggerTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:h.defaultLibraryTemplate,onChange:(G)=>i({type:"update_settings",patch:{defaultLibraryTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function tI(g){let i=g?.type;return typeof i==="string"&&i.startsWith("dom_")}var Xe=new Map;function oh(g,i){Xe.set(g,i)}function Sg(g){let i=Xe.get(g);for(let[h,t]of Qi)if(t.elementId===g){if(i)i.removeEventListener(t.event,t.handler);Qi.delete(h)}Xe.delete(g)}var C1=new Map,B1=new Map,F0=new Map,Z1=new Map,Qi=new Map,S1=new Map,rh=new Map;function N3(g,i){return`${g}::${i}`}function F3(g,i){return`${g}:${i}`}function B3(g){let i=g.target,h={type:g.type};if(i){if(i.id)h.targetId=i.id;if("value"in i)h.targetValue=i.value;if("checked"in i)h.targetChecked=i.checked;if(i.dataset&&Object.keys(i.dataset).length>0){let t={};for(let[u,P]of Object.entries(i.dataset))if(P!==void 0)t[u]=P;h.dataset=t}}if(g instanceof MouseEvent)h.clientX=g.clientX,h.clientY=g.clientY;else if(typeof TouchEvent<"u"&&g instanceof TouchEvent){let t=g.touches[0]??g.changedTouches[0];if(t)h.clientX=t.clientX,h.clientY=t.clientY}if(g instanceof CustomEvent&&g.detail!==void 0)try{JSON.stringify(g.detail),h.detail=g.detail}catch{}if(g instanceof KeyboardEvent)h.key=g.key,h.code=g.code;return h}function bI(g,i){let h=B3(g),t={};for(let[X,I]of Object.entries(i.dataset))if(I!==void 0)t[X]=I;let u={};for(let X of Array.from(i.attributes)){if(X.name.startsWith("on"))continue;if(X.name.startsWith("data-"))continue;u[X.name]=X.value}let P={tagName:i.tagName,classList:Array.from(i.classList),dataset:t,attributes:u,textContent:(i.textContent??"").trim()};if(i.id)P.id=i.id;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){if(P.value=i.value,i instanceof HTMLInputElement&&(i.type==="checkbox"||i.type==="radio"))P.checked=i.checked}else if(i instanceof HTMLSelectElement)P.value=i.value,P.selectedIndex=i.selectedIndex,P.selectedText=i.options[i.selectedIndex]?.text;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement){let I=i.labels?.[0]?.textContent?.trim();if(I)P.label=I}let O=g,A=g,W={ctrl:g instanceof MouseEvent||g instanceof KeyboardEvent?O.ctrlKey||A.ctrlKey:!1,shift:g instanceof MouseEvent||g instanceof KeyboardEvent?O.shiftKey||A.shiftKey:!1,alt:g instanceof MouseEvent||g instanceof KeyboardEvent?O.altKey||A.altKey:!1,meta:g instanceof MouseEvent||g instanceof KeyboardEvent?O.metaKey||A.metaKey:!1};if(g instanceof MouseEvent)W.button=g.button;let G,m=i.closest("[data-message-id]");if(m){let X=m.getAttribute("data-message-id")??"";if(X){let Z=((m.querySelector("[data-part]")??m).getAttribute?.("data-part")??"character")==="user"?"user":"assistant";G={id:X,role:Z,swipeId:0}}}let q={...h,matched:P,modifiers:W};if(G)q.message=G;return q}function uI(g,i,h){let t=N3(g,i),u=rh.get(t);if(u){u.count++;return}let P=(O)=>{let A=O.target;if(!A)return;for(let W of S1.values()){if(W.root!==g||W.event!==i)continue;if(g==="chat"){let q=A.closest("[data-message-id]");if(!q)continue;if(W.messageId&&q.getAttribute("data-message-id")!==W.messageId)continue}let G=A.closest(W.selector);if(!G)continue;if(W.preventDefault)O.preventDefault();if(W.stopPropagation)O.stopPropagation();let m=bI(O,G);h({type:"dom_delegate_event",delegationId:W.delegationId,data:m})}};document.body.addEventListener(i,P,!0),rh.set(t,{handler:P,count:1})}function wI(g,i){let h=N3(g,i),t=rh.get(h);if(!t)return;if(t.count--,t.count>0)return;document.body.removeEventListener(i,t.handler,!0),rh.delete(h)}function PI(g,i){return`@scope ([data-ls-script="${i}"]) {
${g}
}`}function OI(g,i=5000){let h=document.querySelector(g);if(h)return Promise.resolve(h);return new Promise((t,u)=>{let P=!1,O=new MutationObserver(()=>{let A=document.querySelector(g);if(A&&!P)P=!0,O.disconnect(),t(A)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),u(Error(`waitForElement: timeout for "${g}"`))},i)})}function AI(g){return g.querySelector('[class*="_bubble_"]')}var ll=new Map,HI=50;function qI(g,i,h){if(ll.size>=HI){let t=ll.keys().next().value;if(t)ll.get(t)?.cancel(),ll.delete(t)}ll.set(g,{scriptId:i,cancel:h})}function MI(g){for(let[i,h]of ll)if(h.scriptId===g)h.cancel(),ll.delete(i)}function Z3(g,i,h){let t=i((u)=>{if(!tI(u))return;let P=u;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:A,target:W,html:G,position:m,stableId:q,parentElementId:X}=P;if(Xe.has(A)){console.warn(`[LumiScript] dom_inject: elementId "${A}" already in elementMap — skipping duplicate insert`);break}let I=`<div data-ls-script="${O}" data-ls-el="${A}">${G}</div>`,T=null;if(X){let Z=Xe.get(X);if(!Z){console.warn(`[LumiScript] dom_inject: parentElementId "${X}" not in elementMap — drop`);break}let c=Z.querySelector(W);if(!c){console.warn(`[LumiScript] dom_inject: selector "${W}" not found within parent "${X}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=I,c.insertAdjacentElement(m,rr),T=rr}else T=g.dom.inject(W,I,m);if(T){if(Xe.set(A,T),C1.set(A,O),q)B1.set(F3(O,q),A)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:A,messageId:W,html:G,position:m,stableId:q}=P,X=(rr)=>{let ur=rr.querySelector("[data-part]"),lr=ur?.getAttribute("data-part")??"character",E=ur?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=m==="header"?` data-ls-tint="${lr}"`:"",gr=` data-ls-mode="${E}"`,N=`<div data-ls-script="${O}" data-ls-el="${A}"${p}${gr}>${G}</div>`,y,f;if(m==="header")y=rr,f="afterbegin";else if(m==="footer"&&E==="minimal")y=rr,f="beforeend";else y=AI(rr)??rr,f="beforeend";let C=g.dom.inject(y,N,f);if(Xe.set(A,C),C1.set(A,O),q)B1.set(F3(O,q),A)},I=`[data-message-id="${W}"]`,T=document.querySelector(I);if(T){X(T);break}let Z=!1;qI(A,O,()=>{Z=!0}),OI(I).then((rr)=>{if(ll.delete(A),Z)return;X(rr)}).catch(()=>{ll.delete(A)});break}case"dom_update":{let O=Xe.get(P.elementId);if(!O)break;let A=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;A.innerHTML=P.html;break}case"dom_remove":{x3(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:A,css:W}=P,G=PI(W,O),m=g.dom.addStyle(G);F0.set(A,m),Z1.set(A,O);break}case"dom_remove_style":{let O=F0.get(P.styleId);if(O)O(),F0.delete(P.styleId),Z1.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:A,event:W,preventDefault:G}=P,m=Xe.get(O);if(!m)break;let q=(X)=>{if(G)X.preventDefault();let I=B3(X);h({type:"dom_event",elementId:O,listenerId:A,event:W,data:I})};m.addEventListener(W,q),Qi.set(A,{elementId:O,event:W,handler:q});break}case"dom_unlisten":{let O=Qi.get(P.listenerId);if(!O)break;let A=Xe.get(O.elementId);if(A)A.removeEventListener(O.event,O.handler);Qi.delete(P.listenerId);break}case"dom_delegate_register":{let{delegationId:O,scriptId:A,selector:W,event:G,root:m,messageId:q,preventDefault:X,stopPropagation:I}=P;S1.set(O,{delegationId:O,scriptId:A,selector:W,event:G,root:m,messageId:q,preventDefault:X,stopPropagation:I}),uI(m,G,h);break}case"dom_delegate_unregister":{let{delegationId:O,event:A}=P,W=S1.get(O);if(!W)break;S1.delete(O),wI(W.root,A);break}case"dom_cleanup_script":{let{scriptId:O}=P;MI(O);for(let[A,W]of C1)if(W===O)x3(A);for(let[A,W]of Z1)if(W===O){let G=F0.get(A);if(G)G();F0.delete(A),Z1.delete(A)}for(let[A]of B1)if(A.startsWith(O+":"))B1.delete(A);break}case"dom_make_draggable":{let{elementId:O,handleSelector:A}=P,W=Xe.get(O);if(!W)break;let G=!1,m=!1;W.addEventListener("pointerdown",(q)=>{if(q.button!==0)return;if(A&&!q.target.closest(A))return;let X=W.firstElementChild?.firstElementChild??W.firstElementChild??W,I=X.getBoundingClientRect();X.style.transform="none",X.style.top=`${I.top}px`,X.style.left=`${I.left}px`,X.style.bottom="auto",X.style.right="auto",G=!0,m=!1;let T=q.clientX-I.left,Z=q.clientY-I.top;X.style.cursor="grabbing";let c=(ur)=>{if(!G)return;m=!0,X.style.top=`${ur.clientY-Z}px`,X.style.left=`${ur.clientX-T}px`},rr=()=>{if(!G)return;G=!1,X.style.cursor="",document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),q.preventDefault()}),W.addEventListener("click",(q)=>{if(m)q.stopImmediatePropagation(),q.preventDefault(),m=!1},!0);break}}});return()=>{t();for(let[,u]of ll)u.cancel();ll.clear();for(let[,u]of Qi){let P=Xe.get(u.elementId);if(P)P.removeEventListener(u.event,u.handler)}Qi.clear();for(let[u,P]of rh){let O=u.split("::")[1]??"";if(O)document.body.removeEventListener(O,P.handler,!0)}rh.clear(),S1.clear();for(let[,u]of Xe)try{u.remove()}catch{}Xe.clear(),C1.clear(),B1.clear();for(let[,u]of F0)try{u()}catch{}F0.clear(),Z1.clear()}}function x3(g){for(let[h,t]of Qi)if(t.elementId===g){let u=Xe.get(g);if(u)u.removeEventListener(t.event,t.handler);Qi.delete(h)}let i=Xe.get(g);if(i)try{i.remove()}catch{}Xe.delete(g),C1.delete(g)}function RI(g){let i=g?.type;return i==="ls_modal_open"||i==="ls_modal_set_title"||i==="ls_modal_dismiss"}var Kv=new Map;function C3(g,i,h){let t=i((u)=>{if(!RI(u))return;let P=u;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:A,rootElementId:W,options:G}=P;if(Kv.has(A))break;let m;try{m=g.ui.showModal({title:G.title,width:G.width,maxHeight:G.maxHeight,persistent:G.persistent})}catch(X){console.warn("[LumiScript] ctx.ui.showModal failed:",X),h({type:"ls_modal_dismissed",modalId:A});break}oh(W,m.root),m.root.setAttribute("data-ls-script",O),m.root.setAttribute("data-ls-modal",A);let q={modalId:A,rootElementId:W,handle:m,echoed:!1};Kv.set(A,q),m.onDismiss(()=>{if(q.echoed)return;q.echoed=!0,Sg(W),Kv.delete(A),h({type:"ls_modal_dismissed",modalId:A})}),h({type:"ls_modal_opened",modalId:A});break}case"ls_modal_set_title":{let O=Kv.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=Kv.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Sg(O.rootElementId),Kv.delete(P.modalId),h({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{t();for(let u of Kv.values()){try{u.handle.dismiss()}catch{}Sg(u.rootElementId)}Kv.clear()}}function WI(g){return g?.type==="ls_context_menu_show"}function S3(g,i,h){let t=i(async(u)=>{if(!WI(u))return;let P=u,O=null;try{O=(await g.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(A){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",A)}h({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{t()}}function mI(g){let i=g?.type;return i==="ls_input_bar_action_register"||i==="ls_input_bar_action_set_label"||i==="ls_input_bar_action_set_subtitle"||i==="ls_input_bar_action_set_enabled"||i==="ls_input_bar_action_destroy"}var Vl=new Map;function GI(g,i){return`${g}:${i}`}function T3(g,i,h){let t=i((u)=>{if(!mI(u))return;let P=u,O=GI(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let A=Vl.get(O);if(A){try{A.destroy()}catch{}Vl.delete(O)}let W;try{W=g.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(G){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",G);break}Vl.set(O,W),W.onClick(()=>{h({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),h({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let A=Vl.get(O);if(!A)break;try{A.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let A=Vl.get(O);if(!A)break;if(typeof A.setSubtitle!=="function")break;try{A.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let A=Vl.get(O);if(!A)break;try{A.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let A=Vl.get(O);if(!A)break;try{A.destroy()}catch{}Vl.delete(O);break}}});return()=>{t();for(let u of Vl.values())try{u.destroy()}catch{}Vl.clear()}}function XI(g){let i=g?.type;return i==="ls_float_widget_create"||i==="ls_float_widget_move"||i==="ls_float_widget_set_visible"||i==="ls_float_widget_destroy"}var zi=new Map;function k3(g,i,h){let t=i((u)=>{if(!XI(u))return;let P=u;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:A,rootElementId:W,options:G}=P,m=zi.get(A);if(m){try{m.handle.destroy()}catch{}Sg(m.rootElementId),zi.delete(A)}let q;try{q=g.ui.createFloatWidget({width:G.width,height:G.height,initialPosition:G.initialPosition,snapToEdge:G.snapToEdge,tooltip:G.tooltip,chromeless:G.chromeless})}catch(X){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",X);break}oh(W,q.root),q.root.setAttribute("data-ls-script",O),q.root.setAttribute("data-ls-widget",A),zi.set(A,{widgetId:A,rootElementId:W,handle:q}),q.onDragEnd((X)=>{h({type:"ls_float_widget_drag_end",widgetId:A,x:X.x,y:X.y})}),h({type:"ls_float_widget_created",widgetId:A});break}case"ls_float_widget_move":{let O=zi.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=zi.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=zi.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Sg(O.rootElementId),zi.delete(P.widgetId);break}}});return()=>{t();for(let u of zi.values()){try{u.handle.destroy()}catch{}Sg(u.rootElementId)}zi.clear()}}function YI(g){let i=g?.type;return i==="ls_drawer_tab_register"||i==="ls_drawer_tab_set_title"||i==="ls_drawer_tab_set_short_name"||i==="ls_drawer_tab_set_badge"||i==="ls_drawer_tab_activate"||i==="ls_drawer_tab_destroy"}var il=new Map;function JI(g,i){return`${g}:${i}`}function D3(g,i,h){let t=i((u)=>{if(!YI(u))return;let P=u,O=JI(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let A=il.get(O);if(A){try{A.handle.destroy()}catch{}Sg(A.rootElementId),il.delete(O)}let W;try{W=g.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(G){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",G);break}oh(P.rootElementId,W.root),W.root.setAttribute("data-ls-script",P.scriptId),W.root.setAttribute("data-ls-tab",P.tabId),il.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:W}),W.onActivate(()=>{h({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),h({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let A=il.get(O);if(!A)break;try{A.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let A=il.get(O);if(!A)break;try{A.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let A=il.get(O);if(!A)break;try{A.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let A=il.get(O);if(!A)break;try{A.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let A=il.get(O);if(!A)break;try{A.handle.destroy()}catch{}Sg(A.rootElementId),il.delete(O);break}}});return()=>{t();for(let u of il.values()){try{u.handle.destroy()}catch{}Sg(u.rootElementId)}il.clear()}}var T1=wr(ro(),1);function wfo(g){let i=[],h=g.dom.addStyle($R);i.push(h);let t=[],u=g.onBackendMessage((rr)=>{for(let ur of t)ur(rr)});i.push(u);let P=(rr)=>{return t.push(rr),()=>{let ur=t.indexOf(rr);if(ur!==-1)t.splice(ur,1)}},O=(rr)=>{g.sendToBackend(rr)},A=Z3(g,P,O);i.push(A);let W=C3(g,P,O);i.push(W);let G=S3(g,P,O);i.push(G);let m=T3(g,P,O);i.push(m);let q=k3(g,P,O);i.push(q);let X=D3(g,P,O);i.push(X),O({type:"frontend_ready"});let I=g.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),T=KP.createRoot(I.root);T.render(T1.jsxDEV(UP.StrictMode,{children:T1.jsxDEV(I3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>{try{T.unmount()}catch{}try{I.destroy()}catch{}});let Z=g.ui.mount("settings_extensions"),c=KP.createRoot(Z);return c.render(T1.jsxDEV(UP.StrictMode,{children:T1.jsxDEV(L3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>c.unmount()),()=>{for(let rr of i)try{rr()}catch{}g.dom.cleanup()}}export{wfo as setup};
