var YJ=Object.create;var{getPrototypeOf:JJ,defineProperty:M6,getOwnPropertyNames:zJ}=Object;var QJ=Object.prototype.hasOwnProperty;function KJ(g){return this[g]}var UJ,$J,Pr=(g,i,v)=>{var h=g!=null&&typeof g==="object";if(h){var u=i?UJ??=new WeakMap:$J??=new WeakMap,P=u.get(g);if(P)return P}v=g!=null?YJ(JJ(g)):{};let O=i||!g||!g.__esModule?M6(v,"default",{value:g,enumerable:!0}):v;for(let A of zJ(g))if(!QJ.call(O,A))M6(O,A,{get:KJ.bind(g,A),enumerable:!0});if(h)u.set(g,O);return O};var mt=(g,i)=>()=>(i||g((i={exports:{}}).exports,i),i.exports);var LJ=(g)=>g;function IJ(g,i){this[g]=LJ.bind(null,i)}var FJ=(g,i)=>{for(var v in i)M6(g,v,{get:i[v],enumerable:!0,configurable:!0,set:IJ.bind(i,v)})};var ie=mt((xJ,gw)=>{(function(){function g(R,I){Object.defineProperty(h.prototype,R,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function i(R){if(R===null||typeof R!=="object")return null;return R=no&&R[no]||R["@@iterator"],typeof R==="function"?R:null}function v(R,I){R=(R=R.constructor)&&(R.displayName||R.name)||"ReactClass";var or=R+"."+I;hr[or]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,R),hr[or]=!0)}function h(R,I,or){this.props=R,this.context=I,this.refs=rg,this.updater=or||co}function u(){}function P(R,I,or){this.props=R,this.context=I,this.refs=rg,this.updater=or||co}function O(){}function A(R){return""+R}function W(R){try{A(R);var I=!1}catch(Rr){I=!0}if(I){I=console;var or=I.error,br=typeof Symbol==="function"&&Symbol.toStringTag&&R[Symbol.toStringTag]||R.constructor.name||"Object";return or.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",br),A(R)}}function G(R){if(R==null)return null;if(typeof R==="function")return R.$$typeof===o0?null:R.displayName||R.name||null;if(typeof R==="string")return R;switch(R){case Xr:return"Fragment";case T:return"Profiler";case a:return"StrictMode";case Yr:return"Suspense";case gr:return"SuspenseList";case we:return"Activity"}if(typeof R==="object")switch(typeof R.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),R.$$typeof){case Kr:return"Portal";case Mr:return R.displayName||"Context";case vr:return(R._context.displayName||"Context")+".Consumer";case V:var I=R.render;return R=R.displayName,R||(R=I.displayName||I.name||"",R=R!==""?"ForwardRef("+R+")":"ForwardRef"),R;case Lr:return I=R.displayName||null,I!==null?I:G(R.type)||"Memo";case yr:I=R._payload,R=R._init;try{return G(R(I))}catch(or){}}return null}function m(R){if(R===Xr)return"<>";if(typeof R==="object"&&R!==null&&R.$$typeof===yr)return"<...>";try{var I=G(R);return I?"<"+I+">":"<...>"}catch(or){return"<...>"}}function H(){var R=Tr.A;return R===null?null:R.getOwner()}function X(){return Error("react-stack-top-frame")}function L(R){if(Nt.call(R,"key")){var I=Object.getOwnPropertyDescriptor(R,"key").get;if(I&&I.isReactWarning)return!1}return R.key!==void 0}function S(R,I){function or(){k1||(k1=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}or.isReactWarning=!0,Object.defineProperty(R,"key",{get:or,configurable:!0})}function C(){var R=G(this.type);return Ln[R]||(Ln[R]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),R=this.props.ref,R!==void 0?R:null}function c(R,I,or,br,Rr,Nr){var Br=or.ref;return R={$$typeof:nr,type:R,key:I,props:or,_owner:br},(Br!==void 0?Br:null)!==null?Object.defineProperty(R,"ref",{enumerable:!1,get:C}):Object.defineProperty(R,"ref",{enumerable:!1,value:null}),R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(R,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(R,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Rr}),Object.defineProperty(R,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Nr}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R}function rr(R,I){return I=c(R.type,I,R.props,R._owner,R._debugStack,R._debugTask),R._store&&(I._store.validated=R._store.validated),I}function wr(R){ir(R)?R._store&&(R._store.validated=1):typeof R==="object"&&R!==null&&R.$$typeof===yr&&(R._payload.status==="fulfilled"?ir(R._payload.value)&&R._payload.value._store&&(R._payload.value._store.validated=1):R._store&&(R._store.validated=1))}function ir(R){return typeof R==="object"&&R!==null&&R.$$typeof===nr}function p(R){var I={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(or){return I[or]})}function d(R,I){return typeof R==="object"&&R!==null&&R.key!=null?(W(R.key),p(""+R.key)):I.toString(36)}function lr(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status==="string"?R.then(O,O):(R.status="pending",R.then(function(I){R.status==="pending"&&(R.status="fulfilled",R.value=I)},function(I){R.status==="pending"&&(R.status="rejected",R.reason=I)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function N(R,I,or,br,Rr){var Nr=typeof R;if(Nr==="undefined"||Nr==="boolean")R=null;var Br=!1;if(R===null)Br=!0;else switch(Nr){case"bigint":case"string":case"number":Br=!0;break;case"object":switch(R.$$typeof){case nr:case Kr:Br=!0;break;case yr:return Br=R._init,N(Br(R._payload),I,or,br,Rr)}}if(Br){Br=R,Rr=Rr(Br);var ge=br===""?"."+d(Br,0):br;return Pe(Rr)?(or="",ge!=null&&(or=ge.replace(Ct,"$&/")+"/"),N(Rr,I,or,"",function(Jo){return Jo})):Rr!=null&&(ir(Rr)&&(Rr.key!=null&&(Br&&Br.key===Rr.key||W(Rr.key)),or=rr(Rr,or+(Rr.key==null||Br&&Br.key===Rr.key?"":(""+Rr.key).replace(Ct,"$&/")+"/")+ge),br!==""&&Br!=null&&ir(Br)&&Br.key==null&&Br._store&&!Br._store.validated&&(or._store.validated=2),Rr=or),I.push(Rr)),1}if(Br=0,ge=br===""?".":br+":",Pe(R))for(var zr=0;zr<R.length;zr++)br=R[zr],Nr=ge+d(br,zr),Br+=N(br,I,or,Nr,Rr);else if(zr=i(R),typeof zr==="function")for(zr===R.entries&&(Bt||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Bt=!0),R=zr.call(R),zr=0;!(br=R.next()).done;)br=br.value,Nr=ge+d(br,zr++),Br+=N(br,I,or,Nr,Rr);else if(Nr==="object"){if(typeof R.then==="function")return N(lr(R),I,or,br,Rr);throw I=String(R),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Br}function y(R,I,or){if(R==null)return R;var br=[],Rr=0;return N(R,br,"","",function(Nr){return I.call(or,Nr,Rr++)}),br}function f(R){if(R._status===-1){var I=R._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=R._result;var or=I();if(or.then(function(Rr){if(R._status===0||R._status===-1){R._status=1,R._result=Rr;var Nr=R._ioInfo;Nr!=null&&(Nr.end=performance.now()),or.status===void 0&&(or.status="fulfilled",or.value=Rr)}},function(Rr){if(R._status===0||R._status===-1){R._status=2,R._result=Rr;var Nr=R._ioInfo;Nr!=null&&(Nr.end=performance.now()),or.status===void 0&&(or.status="rejected",or.reason=Rr)}}),I=R._ioInfo,I!=null){I.value=or;var br=or.displayName;typeof br==="string"&&(I.name=br)}R._status===-1&&(R._status=0,R._result=or)}if(R._status===1)return I=R._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw R._result}function x(){var R=Tr.H;return R===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),R}function Wr(){Tr.asyncTransitions--}function Hr(R){if(Fn===null)try{var I=("require"+Math.random()).slice(0,7);Fn=(gw&&gw[I]).call(gw,"timers").setImmediate}catch(or){Fn=function(br){D1===!1&&(D1=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Rr=new MessageChannel;Rr.port1.onmessage=br,Rr.port2.postMessage(void 0)}}return Fn(R)}function mr(R){return 1<R.length&&typeof AggregateError==="function"?AggregateError(R):R[0]}function Zr(R,I){I!==xn-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),xn=I}function k(R,I,or){var br=Tr.actQueue;if(br!==null)if(br.length!==0)try{er(br),Hr(function(){return k(R,I,or)});return}catch(Rr){Tr.thrownErrors.push(Rr)}else Tr.actQueue=null;0<Tr.thrownErrors.length?(br=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,or(br)):I(R)}function er(R){if(!Bn){Bn=!0;var I=0;try{for(;I<R.length;I++){var or=R[I];do{Tr.didUsePromise=!1;var br=or(!1);if(br!==null){if(Tr.didUsePromise){R[I]=or,R.splice(0,I);return}or=br}else break}while(1)}R.length=0}catch(Rr){R.splice(0,I+1),Tr.thrownErrors.push(Rr)}finally{Bn=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var nr=Symbol.for("react.transitional.element"),Kr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),vr=Symbol.for("react.consumer"),Mr=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Yr=Symbol.for("react.suspense"),gr=Symbol.for("react.suspense_list"),Lr=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),no=Symbol.iterator,hr={},co={isMounted:function(){return!1},enqueueForceUpdate:function(R){v(R,"forceUpdate")},enqueueReplaceState:function(R){v(R,"replaceState")},enqueueSetState:function(R){v(R,"setState")}},Yo=Object.assign,rg={};Object.freeze(rg),h.prototype.isReactComponent={},h.prototype.setState=function(R,I){if(typeof R!=="object"&&typeof R!=="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,I,"setState")},h.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};var Ee={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Ui in Ee)Ee.hasOwnProperty(Ui)&&g(Ui,Ee[Ui]);u.prototype=h.prototype,Ee=P.prototype=new u,Ee.constructor=P,Yo(Ee,h.prototype),Ee.isPureReactComponent=!0;var Pe=Array.isArray,o0=Symbol.for("react.client.reference"),Tr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Nt=Object.prototype.hasOwnProperty,We=console.createTask?console.createTask:function(){return null};Ee={react_stack_bottom_frame:function(R){return R()}};var k1,nl,Ln={},In=Ee.react_stack_bottom_frame.bind(Ee,X)(),Zw=We(m(X)),Bt=!1,Ct=/\/+/g,Ki=typeof reportError==="function"?reportError:function(R){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R==="object"&&R!==null&&typeof R.message==="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",R);return}console.error(R)},D1=!1,Fn=null,xn=0,Nn=!1,Bn=!1,g0=typeof queueMicrotask==="function"?function(R){queueMicrotask(function(){return queueMicrotask(R)})}:Hr;Ee=Object.freeze({__proto__:null,c:function(R){return x().useMemoCache(R)}});var Ui={map:y,forEach:function(R,I,or){y(R,function(){I.apply(this,arguments)},or)},count:function(R){var I=0;return y(R,function(){I++}),I},toArray:function(R){return y(R,function(I){return I})||[]},only:function(R){if(!ir(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};xJ.Activity=we,xJ.Children=Ui,xJ.Component=h,xJ.Fragment=Xr,xJ.Profiler=T,xJ.PureComponent=P,xJ.StrictMode=a,xJ.Suspense=Yr,xJ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tr,xJ.__COMPILER_RUNTIME=Ee,xJ.act=function(R){var I=Tr.actQueue,or=xn;xn++;var br=Tr.actQueue=I!==null?I:[],Rr=!1;try{var Nr=R()}catch(zr){Tr.thrownErrors.push(zr)}if(0<Tr.thrownErrors.length)throw Zr(I,or),R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;if(Nr!==null&&typeof Nr==="object"&&typeof Nr.then==="function"){var Br=Nr;return g0(function(){Rr||Nn||(Nn=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(zr,Jo){Rr=!0,Br.then(function(eg){if(Zr(I,or),or===0){try{er(br),Hr(function(){return k(eg,zr,Jo)})}catch(l0){Tr.thrownErrors.push(l0)}if(0<Tr.thrownErrors.length){var $i=mr(Tr.thrownErrors);Tr.thrownErrors.length=0,Jo($i)}}else zr(eg)},function(eg){Zr(I,or),0<Tr.thrownErrors.length?(eg=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,Jo(eg)):Jo(eg)})}}}var ge=Nr;if(Zr(I,or),or===0&&(er(br),br.length!==0&&g0(function(){Rr||Nn||(Nn=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Tr.actQueue=null),0<Tr.thrownErrors.length)throw R=mr(Tr.thrownErrors),Tr.thrownErrors.length=0,R;return{then:function(zr,Jo){Rr=!0,or===0?(Tr.actQueue=br,Hr(function(){return k(ge,zr,Jo)})):zr(ge)}}},xJ.cache=function(R){return function(){return R.apply(null,arguments)}},xJ.cacheSignal=function(){return null},xJ.captureOwnerStack=function(){var R=Tr.getCurrentStack;return R===null?null:R()},xJ.cloneElement=function(R,I,or){if(R===null||R===void 0)throw Error("The argument must be a React element, but you passed "+R+".");var br=Yo({},R.props),Rr=R.key,Nr=R._owner;if(I!=null){var Br;r:{if(Nt.call(I,"ref")&&(Br=Object.getOwnPropertyDescriptor(I,"ref").get)&&Br.isReactWarning){Br=!1;break r}Br=I.ref!==void 0}Br&&(Nr=H()),L(I)&&(W(I.key),Rr=""+I.key);for(ge in I)!Nt.call(I,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&I.ref===void 0||(br[ge]=I[ge])}var ge=arguments.length-2;if(ge===1)br.children=or;else if(1<ge){Br=Array(ge);for(var zr=0;zr<ge;zr++)Br[zr]=arguments[zr+2];br.children=Br}br=c(R.type,Rr,br,Nr,R._debugStack,R._debugTask);for(Rr=2;Rr<arguments.length;Rr++)wr(arguments[Rr]);return br},xJ.createContext=function(R){return R={$$typeof:Mr,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:vr,_context:R},R._currentRenderer=null,R._currentRenderer2=null,R},xJ.createElement=function(R,I,or){for(var br=2;br<arguments.length;br++)wr(arguments[br]);br={};var Rr=null;if(I!=null)for(zr in nl||!("__self"in I)||"key"in I||(nl=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(W(I.key),Rr=""+I.key),I)Nt.call(I,zr)&&zr!=="key"&&zr!=="__self"&&zr!=="__source"&&(br[zr]=I[zr]);var Nr=arguments.length-2;if(Nr===1)br.children=or;else if(1<Nr){for(var Br=Array(Nr),ge=0;ge<Nr;ge++)Br[ge]=arguments[ge+2];Object.freeze&&Object.freeze(Br),br.children=Br}if(R&&R.defaultProps)for(zr in Nr=R.defaultProps,Nr)br[zr]===void 0&&(br[zr]=Nr[zr]);Rr&&S(br,typeof R==="function"?R.displayName||R.name||"Unknown":R);var zr=1e4>Tr.recentlyCreatedOwnerStacks++;return c(R,Rr,br,H(),zr?Error("react-stack-top-frame"):In,zr?We(m(R)):Zw)},xJ.createRef=function(){var R={current:null};return Object.seal(R),R},xJ.forwardRef=function(R){R!=null&&R.$$typeof===Lr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof R!=="function"?console.error("forwardRef requires a render function but was given %s.",R===null?"null":typeof R):R.length!==0&&R.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",R.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),R!=null&&R.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:V,render:R},or;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(br){or=br,R.name||R.displayName||(Object.defineProperty(R,"name",{value:br}),R.displayName=br)}}),I},xJ.isValidElement=ir,xJ.lazy=function(R){R={_status:-1,_result:R};var I={$$typeof:yr,_payload:R,_init:f},or={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return R._ioInfo=or,I._debugInfo=[{awaited:or}],I},xJ.memo=function(R,I){R==null&&console.error("memo: The first argument must be a component. Instead received: %s",R===null?"null":typeof R),I={$$typeof:Lr,type:R,compare:I===void 0?null:I};var or;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return or},set:function(br){or=br,R.name||R.displayName||(Object.defineProperty(R,"name",{value:br}),R.displayName=br)}}),I},xJ.startTransition=function(R){var I=Tr.T,or={};or._updatedFibers=new Set,Tr.T=or;try{var br=R(),Rr=Tr.S;Rr!==null&&Rr(or,br),typeof br==="object"&&br!==null&&typeof br.then==="function"&&(Tr.asyncTransitions++,br.then(Wr,Wr),br.then(O,Ki))}catch(Nr){Ki(Nr)}finally{I===null&&or._updatedFibers&&(R=or._updatedFibers.size,or._updatedFibers.clear(),10<R&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&or.types!==null&&(I.types!==null&&I.types!==or.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=or.types),Tr.T=I}},xJ.unstable_useCacheRefresh=function(){return x().useCacheRefresh()},xJ.use=function(R){return x().use(R)},xJ.useActionState=function(R,I,or){return x().useActionState(R,I,or)},xJ.useCallback=function(R,I){return x().useCallback(R,I)},xJ.useContext=function(R){var I=x();return R.$$typeof===vr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(R)},xJ.useDebugValue=function(R,I){return x().useDebugValue(R,I)},xJ.useDeferredValue=function(R,I){return x().useDeferredValue(R,I)},xJ.useEffect=function(R,I){return R==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useEffect(R,I)},xJ.useEffectEvent=function(R){return x().useEffectEvent(R)},xJ.useId=function(){return x().useId()},xJ.useImperativeHandle=function(R,I,or){return x().useImperativeHandle(R,I,or)},xJ.useInsertionEffect=function(R,I){return R==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useInsertionEffect(R,I)},xJ.useLayoutEffect=function(R,I){return R==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useLayoutEffect(R,I)},xJ.useMemo=function(R,I){return x().useMemo(R,I)},xJ.useOptimistic=function(R,I){return x().useOptimistic(R,I)},xJ.useReducer=function(R,I,or){return x().useReducer(R,I,or)},xJ.useRef=function(R){return x().useRef(R)},xJ.useState=function(R){return x().useState(R)},xJ.useSyncExternalStore=function(R,I,or){return x().useSyncExternalStore(R,I,or)},xJ.useTransition=function(){return x().useTransition()},xJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OR=mt((NJ)=>{(function(){function g(){if(p=!1,y){var k=NJ.unstable_now();Wr=k;var er=!0;try{r:{wr=!1,ir&&(ir=!1,lr(f),f=-1),rr=!0;var nr=c;try{e:{P(k);for(C=v(X);C!==null&&!(C.expirationTime>k&&A());){var Kr=C.callback;if(typeof Kr==="function"){C.callback=null,c=C.priorityLevel;var Xr=Kr(C.expirationTime<=k);if(k=NJ.unstable_now(),typeof Xr==="function"){C.callback=Xr,P(k),er=!0;break e}C===v(X)&&h(X),P(k)}else h(X);C=v(X)}if(C!==null)er=!0;else{var a=v(L);a!==null&&W(O,a.startTime-k),er=!1}}break r}finally{C=null,c=nr,rr=!1}er=void 0}}finally{er?Hr():y=!1}}}function i(k,er){var nr=k.length;k.push(er);r:for(;0<nr;){var Kr=nr-1>>>1,Xr=k[Kr];if(0<u(Xr,er))k[Kr]=er,k[nr]=Xr,nr=Kr;else break r}}function v(k){return k.length===0?null:k[0]}function h(k){if(k.length===0)return null;var er=k[0],nr=k.pop();if(nr!==er){k[0]=nr;r:for(var Kr=0,Xr=k.length,a=Xr>>>1;Kr<a;){var T=2*(Kr+1)-1,vr=k[T],Mr=T+1,V=k[Mr];if(0>u(vr,nr))Mr<Xr&&0>u(V,vr)?(k[Kr]=V,k[Mr]=nr,Kr=Mr):(k[Kr]=vr,k[T]=nr,Kr=T);else if(Mr<Xr&&0>u(V,nr))k[Kr]=V,k[Mr]=nr,Kr=Mr;else break r}}return er}function u(k,er){var nr=k.sortIndex-er.sortIndex;return nr!==0?nr:k.id-er.id}function P(k){for(var er=v(L);er!==null;){if(er.callback===null)h(L);else if(er.startTime<=k)h(L),er.sortIndex=er.expirationTime,i(X,er);else break;er=v(L)}}function O(k){if(ir=!1,P(k),!wr)if(v(X)!==null)wr=!0,y||(y=!0,Hr());else{var er=v(L);er!==null&&W(O,er.startTime-k)}}function A(){return p?!0:NJ.unstable_now()-Wr<x?!1:!0}function W(k,er){f=d(function(){k(NJ.unstable_now())},er)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),NJ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var G=performance;NJ.unstable_now=function(){return G.now()}}else{var m=Date,H=m.now();NJ.unstable_now=function(){return m.now()-H}}var X=[],L=[],S=1,C=null,c=3,rr=!1,wr=!1,ir=!1,p=!1,d=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null,y=!1,f=-1,x=5,Wr=-1;if(typeof N==="function")var Hr=function(){N(g)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,Zr=mr.port2;mr.port1.onmessage=g,Hr=function(){Zr.postMessage(null)}}else Hr=function(){d(g,0)};NJ.unstable_IdlePriority=5,NJ.unstable_ImmediatePriority=1,NJ.unstable_LowPriority=4,NJ.unstable_NormalPriority=3,NJ.unstable_Profiling=null,NJ.unstable_UserBlockingPriority=2,NJ.unstable_cancelCallback=function(k){k.callback=null},NJ.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<k?Math.floor(1000/k):5},NJ.unstable_getCurrentPriorityLevel=function(){return c},NJ.unstable_next=function(k){switch(c){case 1:case 2:case 3:var er=3;break;default:er=c}var nr=c;c=er;try{return k()}finally{c=nr}},NJ.unstable_requestPaint=function(){p=!0},NJ.unstable_runWithPriority=function(k,er){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var nr=c;c=k;try{return er()}finally{c=nr}},NJ.unstable_scheduleCallback=function(k,er,nr){var Kr=NJ.unstable_now();switch(typeof nr==="object"&&nr!==null?(nr=nr.delay,nr=typeof nr==="number"&&0<nr?Kr+nr:Kr):nr=Kr,k){case 1:var Xr=-1;break;case 2:Xr=250;break;case 5:Xr=1073741823;break;case 4:Xr=1e4;break;default:Xr=5000}return Xr=nr+Xr,k={id:S++,callback:er,priorityLevel:k,startTime:nr,expirationTime:Xr,sortIndex:-1},nr>Kr?(k.sortIndex=nr,i(L,k),v(X)===null&&k===v(L)&&(ir?(lr(f),f=-1):ir=!0,W(O,nr-Kr))):(k.sortIndex=Xr,i(X,k),wr||rr||(wr=!0,y||(y=!0,Hr()))),k},NJ.unstable_shouldYield=A,NJ.unstable_wrapCallback=function(k){var er=c;return function(){var nr=c;c=er;try{return k.apply(this,arguments)}finally{c=nr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var AR=mt((BJ)=>{var R6=Pr(ie());(function(){function g(){}function i(m){return""+m}function v(m,H,X){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{i(L);var S=!1}catch(C){S=!0}return S&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),i(L)),{$$typeof:W,key:L==null?null:""+L,children:m,containerInfo:H,implementation:X}}function h(m,H){if(m==="font")return"";if(typeof H==="string")return H==="use-credentials"?H:""}function u(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":'something with type "'+typeof m+'"'}function P(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":typeof m==="string"?JSON.stringify(m):typeof m==="number"?"`"+m+"`":'something with type "'+typeof m+'"'}function O(){var m=G.H;return m===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),m}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var A={d:{f:g,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},W=Symbol.for("react.portal"),G=R6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),BJ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,BJ.createPortal=function(m,H){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!H||H.nodeType!==1&&H.nodeType!==9&&H.nodeType!==11)throw Error("Target container is not a DOM element.");return v(m,H,null,X)},BJ.flushSync=function(m){var H=G.T,X=A.p;try{if(G.T=null,A.p=2,m)return m()}finally{G.T=H,A.p=X,A.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},BJ.preconnect=function(m,H){typeof m==="string"&&m?H!=null&&typeof H!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(H)):H!=null&&typeof H.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",u(H.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&(H?(H=H.crossOrigin,H=typeof H==="string"?H==="use-credentials"?H:"":void 0):H=null,A.d.C(m,H))},BJ.prefetchDNS=function(m){if(typeof m!=="string"||!m)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m));else if(1<arguments.length){var H=arguments[1];typeof H==="object"&&H.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(H)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(H))}typeof m==="string"&&A.d.D(m)},BJ.preinit=function(m,H){if(typeof m==="string"&&m?H==null||typeof H!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(H)):H.as!=="style"&&H.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(H.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(m)),typeof m==="string"&&H&&typeof H.as==="string"){var X=H.as,L=h(X,H.crossOrigin),S=typeof H.integrity==="string"?H.integrity:void 0,C=typeof H.fetchPriority==="string"?H.fetchPriority:void 0;X==="style"?A.d.S(m,typeof H.precedence==="string"?H.precedence:void 0,{crossOrigin:L,integrity:S,fetchPriority:C}):X==="script"&&A.d.X(m,{crossOrigin:L,integrity:S,fetchPriority:C,nonce:typeof H.nonce==="string"?H.nonce:void 0})}},BJ.preinitModule=function(m,H){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),H!==void 0&&typeof H!=="object"?X+=" The `options` argument encountered was "+u(H)+".":H&&("as"in H)&&H.as!=="script"&&(X+=" The `as` option encountered was "+P(H.as)+"."),X)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",X);else switch(X=H&&typeof H.as==="string"?H.as:"script",X){case"script":break;default:X=P(X),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',X,m)}if(typeof m==="string")if(typeof H==="object"&&H!==null){if(H.as==null||H.as==="script")X=h(H.as,H.crossOrigin),A.d.M(m,{crossOrigin:X,integrity:typeof H.integrity==="string"?H.integrity:void 0,nonce:typeof H.nonce==="string"?H.nonce:void 0})}else H==null&&A.d.M(m)},BJ.preload=function(m,H){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),H==null||typeof H!=="object"?X+=" The `options` argument encountered was "+u(H)+".":typeof H.as==="string"&&H.as||(X+=" The `as` option encountered was "+u(H.as)+"."),X&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',X),typeof m==="string"&&typeof H==="object"&&H!==null&&typeof H.as==="string"){X=H.as;var L=h(X,H.crossOrigin);A.d.L(m,X,{crossOrigin:L,integrity:typeof H.integrity==="string"?H.integrity:void 0,nonce:typeof H.nonce==="string"?H.nonce:void 0,type:typeof H.type==="string"?H.type:void 0,fetchPriority:typeof H.fetchPriority==="string"?H.fetchPriority:void 0,referrerPolicy:typeof H.referrerPolicy==="string"?H.referrerPolicy:void 0,imageSrcSet:typeof H.imageSrcSet==="string"?H.imageSrcSet:void 0,imageSizes:typeof H.imageSizes==="string"?H.imageSizes:void 0,media:typeof H.media==="string"?H.media:void 0})}},BJ.preloadModule=function(m,H){var X="";typeof m==="string"&&m||(X+=" The `href` argument encountered was "+u(m)+"."),H!==void 0&&typeof H!=="object"?X+=" The `options` argument encountered was "+u(H)+".":H&&("as"in H)&&typeof H.as!=="string"&&(X+=" The `as` option encountered was "+u(H.as)+"."),X&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',X),typeof m==="string"&&(H?(X=h(H.as,H.crossOrigin),A.d.m(m,{as:typeof H.as==="string"&&H.as!=="script"?H.as:void 0,crossOrigin:X,integrity:typeof H.integrity==="string"?H.integrity:void 0})):A.d.m(m))},BJ.requestFormReset=function(m){A.d.r(m)},BJ.unstable_batchedUpdates=function(m,H){return m(H)},BJ.useFormState=function(m,H,X){return O().useFormState(m,H,X)},BJ.useFormStatus=function(){return O().useHostTransitionStatus()},BJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Sv=mt((pI,qR)=>{qR.exports=AR()});var HR=mt((CJ)=>{var le=Pr(OR()),Tv=Pr(ie()),W6=Pr(Sv());(function(){function g(r,e){for(r=r.memoizedState;r!==null&&0<e;)r=r.next,e--;return r}function i(r,e,o,l){if(o>=e.length)return l;var n=e[o],t=go(r)?r.slice():Er({},r);return t[n]=i(r[n],e,o+1,l),t}function v(r,e,o){if(e.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(e[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return h(r,e,o,0)}}function h(r,e,o,l){var n=e[l],t=go(r)?r.slice():Er({},r);return l+1===e.length?(t[o[l]]=t[n],go(t)?t.splice(n,1):delete t[n]):t[n]=h(r[n],e,o,l+1),t}function u(r,e,o){var l=e[o],n=go(r)?r.slice():Er({},r);if(o+1===e.length)return go(n)?n.splice(l,1):delete n[l],n;return n[l]=u(r[l],e,o+1),n}function P(){return!1}function O(){return null}function A(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function W(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function G(){}function m(){}function H(r){var e=[];return r.forEach(function(o){e.push(o)}),e.sort().join(", ")}function X(r,e,o,l){return new PG(r,e,o,l)}function L(r,e){r.context===pi&&(Z2(r.current,2,e,r,null,null),pt())}function S(r,e){if(Kg!==null){var o=e.staleFamilies;e=e.updatedFamilies,$0(),W8(r.current,e,o),pt()}}function C(r){Kg=r}function c(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var e=r,o=r;if(r.alternate)for(;e.return;)e=e.return;else{r=e;do e=r,(e.flags&4098)!==0&&(o=e.return),r=e.return;while(r)}return e.tag===3?o:null}function wr(r){if(r.tag===13){var e=r.memoizedState;if(e===null&&(r=r.alternate,r!==null&&(e=r.memoizedState)),e!==null)return e.dehydrated}return null}function ir(r){if(r.tag===31){var e=r.memoizedState;if(e===null&&(r=r.alternate,r!==null&&(e=r.memoizedState)),e!==null)return e.dehydrated}return null}function p(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function d(r){var e=r.alternate;if(!e){if(e=rr(r),e===null)throw Error("Unable to find node on an unmounted component.");return e!==r?null:r}for(var o=r,l=e;;){var n=o.return;if(n===null)break;var t=n.alternate;if(t===null){if(l=n.return,l!==null){o=l;continue}break}if(n.child===t.child){for(t=n.child;t;){if(t===o)return p(n),r;if(t===l)return p(n),e;t=t.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=n,l=t;else{for(var b=!1,w=n.child;w;){if(w===o){b=!0,o=n,l=t;break}if(w===l){b=!0,l=n,o=t;break}w=w.sibling}if(!b){for(w=t.child;w;){if(w===o){b=!0,o=t,l=n;break}if(w===l){b=!0,l=t,o=n;break}w=w.sibling}if(!b)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:e}function lr(r){var e=r.tag;if(e===5||e===26||e===27||e===6)return r;for(r=r.child;r!==null;){if(e=lr(r),e!==null)return e;r=r.sibling}return null}function N(r){if(r===null||typeof r!=="object")return null;return r=Qq&&r[Qq]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===xX?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case gv:return"Fragment";case c2:return"Profiler";case jb:return"StrictMode";case V2:return"Suspense";case _2:return"SuspenseList";case E2:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case ov:return"Portal";case Yl:return r.displayName||"Context";case y2:return(r._context.displayName||"Context")+".Consumer";case T0:var e=r.render;return r=r.displayName,r||(r=e.displayName||e.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case db:return e=r.displayName||null,e!==null?e:y(r.type)||"Memo";case bg:e=r._payload,r=r._init;try{return y(r(e))}catch(o){}}return null}function f(r){return typeof r.tag==="number"?x(r):typeof r.name==="string"?r.name:null}function x(r){var e=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(e._context.displayName||"Context")+".Consumer";case 10:return e.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=e.render,r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(e);case 8:return e===jb?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof e==="function")return e.displayName||e.name||null;if(typeof e==="string")return e;break;case 29:if(e=r._debugInfo,e!=null){for(var o=e.length-1;0<=o;o--)if(typeof e[o].name==="string")return e[o].name}if(r.return!==null)return x(r.return)}return null}function Wr(r){return{current:r}}function Hr(r,e){0>sl?console.error("Unexpected pop."):(e!==p2[sl]&&console.error("Unexpected Fiber popped."),r.current=f2[sl],f2[sl]=null,p2[sl]=null,sl--)}function mr(r,e,o){sl++,f2[sl]=r.current,p2[sl]=o,r.current=e}function Zr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,e){mr(ci,e,r),mr(k0,r,r),mr(ai,null,r);var o=e.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",e=(e=e.documentElement)?(e=e.namespaceURI)?jA(e):Pi:Pi;break;default:if(o=e.tagName,e=e.namespaceURI)e=jA(e),e=dA(e,o);else switch(o){case"svg":e=Cv;break;case"math":e=pu;break;default:e=Pi}}o=o.toLowerCase(),o=yP(null,o),o={context:e,ancestorInfo:o},Hr(ai,r),mr(ai,o,r)}function er(r){Hr(ai,r),Hr(k0,r),Hr(ci,r)}function nr(){return Zr(ai.current)}function Kr(r){r.memoizedState!==null&&mr(sb,r,r);var e=Zr(ai.current),o=r.type,l=dA(e.context,o);o=yP(e.ancestorInfo,o),l={context:l,ancestorInfo:o},e!==l&&(mr(k0,r,r),mr(ai,l,r))}function Xr(r){k0.current===r&&(Hr(ai,r),Hr(k0,r)),sb.current===r&&(Hr(sb,r),Ih._currentValue=Wt)}function a(){}function T(){if(D0===0){Kq=console.log,Uq=console.info,$q=console.warn,Lq=console.error,Iq=console.group,Fq=console.groupCollapsed,xq=console.groupEnd;var r={configurable:!0,enumerable:!0,value:a,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}D0++}function vr(){if(D0--,D0===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Er({},r,{value:Kq}),info:Er({},r,{value:Uq}),warn:Er({},r,{value:$q}),error:Er({},r,{value:Lq}),group:Er({},r,{value:Iq}),groupCollapsed:Er({},r,{value:Fq}),groupEnd:Er({},r,{value:xq})})}0>D0&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Mr(r){var e=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=e,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),e=r.indexOf(`
`),e!==-1&&(r=r.slice(e+1)),e=r.indexOf("react_stack_bottom_frame"),e!==-1&&(e=r.lastIndexOf(`
`,e)),e!==-1)r=r.slice(0,e);else return"";return r}function V(r){if(j2===void 0)try{throw Error()}catch(o){var e=o.stack.trim().match(/\n( *(at )?)/);j2=e&&e[1]||"",Nq=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j2+r+Nq}function Yr(r,e){if(!r||d2)return"";var o=s2.get(r);if(o!==void 0)return o;d2=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=Z.H,Z.H=null,T();try{var n={DetermineComponentFrameRoot:function(){try{if(e){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(tr){var F=tr}Reflect.construct(r,[],J)}else{try{J.call()}catch(tr){F=tr}r.call(J.prototype)}}else{try{throw Error()}catch(tr){F=tr}(J=r())&&typeof J.catch==="function"&&J.catch(function(){})}}catch(tr){if(tr&&F&&typeof tr.stack==="string")return[tr.stack,F.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=n.DetermineComponentFrameRoot(),w=b[0],q=b[1];if(w&&q){var M=w.split(`
`),U=q.split(`
`);for(b=t=0;t<M.length&&!M[t].includes("DetermineComponentFrameRoot");)t++;for(;b<U.length&&!U[b].includes("DetermineComponentFrameRoot");)b++;if(t===M.length||b===U.length)for(t=M.length-1,b=U.length-1;1<=t&&0<=b&&M[t]!==U[b];)b--;for(;1<=t&&0<=b;t--,b--)if(M[t]!==U[b]){if(t!==1||b!==1)do if(t--,b--,0>b||M[t]!==U[b]){var $=`
`+M[t].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&s2.set(r,$),$}while(1<=t&&0<=b);break}}}finally{d2=!1,Z.H=l,vr(),Error.prepareStackTrace=o}return M=(M=r?r.displayName||r.name:"")?V(M):"",typeof r==="function"&&s2.set(r,M),M}function gr(r,e){switch(r.tag){case 26:case 27:case 5:return V(r.type);case 16:return V("Lazy");case 13:return r.child!==e&&e!==null?V("Suspense Fallback"):V("Suspense");case 19:return V("SuspenseList");case 0:case 15:return Yr(r.type,!1);case 11:return Yr(r.type.render,!1);case 1:return Yr(r.type,!0);case 31:return V("Activity");default:return""}}function Lr(r){try{var e="",o=null;do{e+=gr(r,o);var l=r._debugInfo;if(l)for(var n=l.length-1;0<=n;n--){var t=l[n];if(typeof t.name==="string"){var b=e;r:{var{name:w,env:q,debugLocation:M}=t;if(M!=null){var U=Mr(M),$=U.lastIndexOf(`
`),J=$===-1?U:U.slice($+1);if(J.indexOf(w)!==-1){var F=`
`+J;break r}}F=V(w+(q?" ["+q+"]":""))}e=b+F}}o=r,r=r.return}while(r);return e}catch(tr){return`
Error generating stack: `+tr.message+`
`+tr.stack}}function yr(r){return(r=r?r.displayName||r.name:"")?V(r):""}function we(){if(ug===null)return null;var r=ug._debugOwner;return r!=null?f(r):null}function no(){if(ug===null)return"";var r=ug;try{var e="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:e+=V(r.type);break;case 13:e+=V("Suspense");break;case 19:e+=V("SuspenseList");break;case 31:e+=V("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||e!==""||(e+=yr(r.type));break;case 11:r._debugOwner||e!==""||(e+=yr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var n=Mr(l);n!==""&&(e+=`
`+n)}}else if(r.debugStack!=null){var t=r.debugStack;(r=r.owner)&&t&&(e+=`
`+Mr(t))}else break;var b=e}catch(w){b=`
Error generating stack: `+w.message+`
`+w.stack}return b}function hr(r,e,o,l,n,t,b){var w=ug;co(r);try{return r!==null&&r._debugTask?r._debugTask.run(e.bind(null,o,l,n,t,b)):e(o,l,n,t,b)}finally{co(w)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function co(r){Z.getCurrentStack=r===null?null:no,Jl=!1,ug=r}function Yo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rg(r){try{return Ee(r),!1}catch(e){return!0}}function Ee(r){return""+r}function Pe(r,e){if(rg(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",e,Yo(r)),Ee(r)}function o0(r,e){if(rg(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",e,Yo(r)),Ee(r)}function Tr(r){if(rg(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yo(r)),Ee(r)}function Nt(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled)return!0;if(!e.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{iv=e.inject(r),Qo=e}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return e.checkDCE?!0:!1}function We(r){if(typeof kX==="function"&&DX(r),Qo&&typeof Qo.setStrictMode==="function")try{Qo.setStrictMode(iv,r)}catch(e){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",e))}}function k1(r){return r>>>=0,r===0?32:31-(aX(r)/cX|0)|0}function nl(r){var e=r&42;if(e!==0)return e;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Ln(r,e,o){var l=r.pendingLanes;if(l===0)return 0;var n=0,t=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var w=l&134217727;return w!==0?(l=w&~t,l!==0?n=nl(l):(b&=w,b!==0?n=nl(b):o||(o=w&~r,o!==0&&(n=nl(o))))):(w=l&~t,w!==0?n=nl(w):b!==0?n=nl(b):o||(o=l&~r,o!==0&&(n=nl(o)))),n===0?0:e!==0&&e!==n&&(e&t)===0&&(t=n&-n,o=e&-e,t>=o||t===32&&(o&4194048)!==0)?e:n}function In(r,e){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&e)===0}function Zw(r,e){switch(r){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Bt(){var r=ou;return ou<<=1,(ou&62914560)===0&&(ou=4194304),r}function Ct(r){for(var e=[],o=0;31>o;o++)e.push(r);return e}function Ki(r,e){r.pendingLanes|=e,e!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function D1(r,e,o,l,n,t){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:w,expirationTimes:q,hiddenUpdates:M}=r;for(o=b&~o;0<o;){var U=31-Io(o),$=1<<U;w[U]=0,q[U]=-1;var J=M[U];if(J!==null)for(M[U]=null,U=0;U<J.length;U++){var F=J[U];F!==null&&(F.lane&=-536870913)}o&=~$}l!==0&&Fn(r,l,0),t!==0&&n===0&&r.tag!==0&&(r.suspendedLanes|=t&~(b&~e))}function Fn(r,e,o){r.pendingLanes|=e,r.suspendedLanes&=~e;var l=31-Io(e);r.entangledLanes|=e,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function xn(r,e){var o=r.entangledLanes|=e;for(r=r.entanglements;o;){var l=31-Io(o),n=1<<l;n&e|r[l]&e&&(r[l]|=e),o&=~n}}function Nn(r,e){var o=e&-e;return o=(o&42)!==0?1:Bn(o),(o&(r.suspendedLanes|e))!==0?0:o}function Bn(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function g0(r,e,o){if(Ql)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-Io(o),n=1<<l;r[l].add(e),o&=~n}}function Ui(r,e){if(Ql)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<e;){var n=31-Io(e);r=1<<n,n=o[n],0<n.size&&(n.forEach(function(t){var b=t.alternate;b!==null&&l.has(b)||l.add(t)}),n.clear()),e&=~r}}function R(r){return r&=-r,wg!==0&&wg<r?cg!==0&&cg<r?(r&134217727)!==0?Kl:gu:cg:wg}function I(){var r=ve.p;if(r!==0)return r;return r=window.event,r===void 0?Kl:Wq(r.type)}function or(r,e){var o=ve.p;try{return ve.p=r,e()}finally{ve.p=o}}function br(r){delete r[Mo],delete r[Fo],delete r[l4],delete r[yX],delete r[VX]}function Rr(r){var e=r[Mo];if(e)return e;for(var o=r.parentNode;o;){if(e=o[Vi]||o[Mo]){if(o=e.alternate,e.child!==null||o!==null&&o.child!==null)for(r=nq(r);r!==null;){if(o=r[Mo])return o;r=nq(r)}return e}r=o,o=r.parentNode}return null}function Nr(r){if(r=r[Mo]||r[Vi]){var e=r.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return r}return null}function Br(r){var e=r.tag;if(e===5||e===26||e===27||e===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function ge(r){var e=r[Bq];return e||(e=r[Bq]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function zr(r){r[a0]=!0}function Jo(r,e){eg(r,e),eg(r+"Capture",e)}function eg(r,e){dn[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),dn[r]=e;var o=r.toLowerCase();i4[o]=r,r==="onDoubleClick"&&(i4.ondblclick=r);for(r=0;r<e.length;r++)Cq.add(e[r])}function $i(r,e){_X[e.type]||e.onChange||e.onInput||e.readOnly||e.disabled||e.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),e.onChange||e.readOnly||e.disabled||e.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function l0(r){if(ag.call(Sq,r))return!0;if(ag.call(Zq,r))return!1;if(EX.test(r))return Sq[r]=!0;return Zq[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $P(r,e,o){if(l0(e)){if(!r.hasAttribute(e)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(e),r===""&&o===!0)return!0;return Pe(o,e),r===""+o?o:r}}function a1(r,e,o){if(l0(e))if(o===null)r.removeAttribute(e);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(e);return}}Pe(o,e),r.setAttribute(e,""+o)}}function c1(r,e,o){if(o===null)r.removeAttribute(e);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(e);return}Pe(o,e),r.setAttribute(e,""+o)}}function cl(r,e,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Pe(l,o),r.setAttributeNS(e,o,""+l)}}function Xg(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Tr(r),r;default:return""}}function LP(r){var e=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c3(r,e,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,e);if(!r.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:n,set:t}=l;return Object.defineProperty(r,e,{configurable:!0,get:function(){return n.call(this)},set:function(b){Tr(b),o=""+b,t.call(this,b)}}),Object.defineProperty(r,e,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(b){Tr(b),o=""+b},stopTracking:function(){r._valueTracker=null,delete r[e]}}}}function Sw(r){if(!r._valueTracker){var e=LP(r)?"checked":"value";r._valueTracker=c3(r,e,""+r[e])}}function IP(r){if(!r)return!1;var e=r._valueTracker;if(!e)return!0;var o=e.getValue(),l="";return r&&(l=LP(r)?r.checked?"true":"false":r.value),r=l,r!==o?(e.setValue(r),!0):!1}function y1(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(e){return r.body}}function Yg(r){return r.replace(fX,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function FP(r,e){e.checked===void 0||e.defaultChecked===void 0||kq||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",we()||"A component",e.type),kq=!0),e.value===void 0||e.defaultValue===void 0||Tq||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",we()||"A component",e.type),Tq=!0)}function Tw(r,e,o,l,n,t,b,w){if(r.name="",b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"?(Pe(b,"type"),r.type=b):r.removeAttribute("type"),e!=null)if(b==="number"){if(e===0&&r.value===""||r.value!=e)r.value=""+Xg(e)}else r.value!==""+Xg(e)&&(r.value=""+Xg(e));else b!=="submit"&&b!=="reset"||r.removeAttribute("value");e!=null?kw(r,b,Xg(e)):o!=null?kw(r,b,Xg(o)):l!=null&&r.removeAttribute("value"),n==null&&t!=null&&(r.defaultChecked=!!t),n!=null&&(r.checked=n&&typeof n!=="function"&&typeof n!=="symbol"),w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"?(Pe(w,"name"),r.name=""+Xg(w)):r.removeAttribute("name")}function xP(r,e,o,l,n,t,b,w){if(t!=null&&typeof t!=="function"&&typeof t!=="symbol"&&typeof t!=="boolean"&&(Pe(t,"type"),r.type=t),e!=null||o!=null){if(!(t!=="submit"&&t!=="reset"||e!==void 0&&e!==null)){Sw(r);return}o=o!=null?""+Xg(o):"",e=e!=null?""+Xg(e):o,w||e===r.value||(r.value=e),r.defaultValue=e}l=l!=null?l:n,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=w?r.checked:!!l,r.defaultChecked=!!l,b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Pe(b,"name"),r.name=b),Sw(r)}function kw(r,e,o){e==="number"&&y1(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function NP(r,e){e.value==null&&(typeof e.children==="object"&&e.children!==null?Tv.Children.forEach(e.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||aq||(aq=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):e.dangerouslySetInnerHTML==null||cq||(cq=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),e.selected==null||Dq||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Dq=!0)}function BP(){var r=we();return r?`

Check the render method of \``+r+"`.":""}function Zt(r,e,o,l){if(r=r.options,e){e={};for(var n=0;n<o.length;n++)e["$"+o[n]]=!0;for(o=0;o<r.length;o++)n=e.hasOwnProperty("$"+r[o].value),r[o].selected!==n&&(r[o].selected=n),n&&l&&(r[o].defaultSelected=!0)}else{o=""+Xg(o),e=null;for(n=0;n<r.length;n++){if(r[n].value===o){r[n].selected=!0,l&&(r[n].defaultSelected=!0);return}e!==null||r[n].disabled||(e=r[n])}e!==null&&(e.selected=!0)}}function CP(r,e){for(r=0;r<Vq.length;r++){var o=Vq[r];if(e[o]!=null){var l=go(e[o]);e.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,BP()):!e.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,BP())}}e.value===void 0||e.defaultValue===void 0||yq||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),yq=!0)}function ZP(r,e){e.value===void 0||e.defaultValue===void 0||_q||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",we()||"A component"),_q=!0),e.children!=null&&e.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function SP(r,e,o){if(e!=null&&(e=""+Xg(e),e!==r.value&&(r.value=e),o==null)){r.defaultValue!==e&&(r.defaultValue=e);return}r.defaultValue=o!=null?""+Xg(o):""}function TP(r,e,o,l){if(e==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(go(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),e=o}o=Xg(e),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),Sw(r)}function kP(r,e){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-e?kP(r.children[0],e):r}function og(r){return"  "+"  ".repeat(r)}function St(r){return"+ "+"  ".repeat(r)}function Cn(r){return"- "+"  ".repeat(r)}function DP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function i0(r,e){return Eq.test(r)?(r=JSON.stringify(r),r.length>e-2?8>e?'{"..."}':"{"+r.slice(0,e-7)+'..."}':"{"+r+"}"):r.length>e?5>e?'{"..."}':r.slice(0,e-3)+"...":r}function V1(r,e,o){var l=120-2*o;if(e===null)return St(o)+i0(r,l)+`
`;if(typeof e==="string"){for(var n=0;n<e.length&&n<r.length&&e.charCodeAt(n)===r.charCodeAt(n);n++);return n>l-8&&10<n&&(r="..."+r.slice(n-8),e="..."+e.slice(n-8)),St(o)+i0(r,l)+`
`+Cn(o)+i0(e,l)+`
`}return og(o)+i0(r,l)+`
`}function Dw(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(e,o){return o})}function n0(r,e){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>e?5>e?'"..."':r.slice(0,e-4)+'..."':r;case"object":if(r===null)return"null";if(go(r))return"[...]";if(r.$$typeof===Xl)return(e=y(r.type))?"<"+e+">":"<...>";var o=Dw(r);if(o==="Object"){o="",e-=2;for(var l in r)if(r.hasOwnProperty(l)){var n=JSON.stringify(l);if(n!=='"'+l+'"'&&(l=n),e-=l.length-2,n=n0(r[l],15>e?e:15),e-=n.length,0>e){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+n}return"{"+o+"}"}return o;case"function":return(e=r.displayName||r.name)?"function "+e:"function";default:return String(r)}}function Tt(r,e){return typeof r!=="string"||Eq.test(r)?"{"+n0(r,e-2)+"}":r.length>e-2?5>e?'"..."':'"'+r.slice(0,e-5)+'..."':'"'+r+'"'}function aw(r,e,o){var l=120-o.length-r.length,n=[],t;for(t in e)if(e.hasOwnProperty(t)&&t!=="children"){var b=Tt(e[t],120-o.length-t.length-1);l-=t.length+b.length+2,n.push(t+"="+b)}return n.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+n.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+n.join(`
`+o+"  ")+`
`+o+`>
`}function y3(r,e,o){var l="",n=Er({},e),t;for(t in r)if(r.hasOwnProperty(t)){delete n[t];var b=120-2*o-t.length-2,w=n0(r[t],b);e.hasOwnProperty(t)?(b=n0(e[t],b),l+=St(o)+t+": "+w+`
`,l+=Cn(o)+t+": "+b+`
`):l+=St(o)+t+": "+w+`
`}for(var q in n)n.hasOwnProperty(q)&&(r=n0(n[q],120-2*o-q.length-2),l+=Cn(o)+q+": "+r+`
`);return l}function V3(r,e,o,l){var n="",t=new Map;for(M in o)o.hasOwnProperty(M)&&t.set(M.toLowerCase(),M);if(t.size===1&&t.has("children"))n+=aw(r,e,og(l));else{for(var b in e)if(e.hasOwnProperty(b)&&b!=="children"){var w=120-2*(l+1)-b.length-1,q=t.get(b.toLowerCase());if(q!==void 0){t.delete(b.toLowerCase());var M=e[b];q=o[q];var U=Tt(M,w);w=Tt(q,w),typeof M==="object"&&M!==null&&typeof q==="object"&&q!==null&&Dw(M)==="Object"&&Dw(q)==="Object"&&(2<Object.keys(M).length||2<Object.keys(q).length||-1<U.indexOf("...")||-1<w.indexOf("..."))?n+=og(l+1)+b+`={{
`+y3(M,q,l+2)+og(l+1)+`}}
`:(n+=St(l+1)+b+"="+U+`
`,n+=Cn(l+1)+b+"="+w+`
`)}else n+=og(l+1)+b+"="+Tt(e[b],w)+`
`}t.forEach(function($){if($!=="children"){var J=120-2*(l+1)-$.length-1;n+=Cn(l+1)+$+"="+Tt(o[$],J)+`
`}}),n=n===""?og(l)+"<"+r+`>
`:og(l)+"<"+r+`
`+n+og(l)+`>
`}if(r=o.children,e=e.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(t="",typeof e==="string"||typeof e==="number"||typeof e==="bigint")t=""+e;n+=V1(t,""+r,l+1)}else if(typeof e==="string"||typeof e==="number"||typeof e==="bigint")n=r==null?n+V1(""+e,null,l+1):n+V1(""+e,void 0,l+1);return n}function aP(r,e){var o=DP(r);if(o===null){o="";for(r=r.child;r;)o+=aP(r,e),r=r.sibling;return o}return og(e)+"<"+o+`>
`}function cw(r,e){var o=kP(r,e);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return og(e)+`...
`+cw(o,e+1);o="";var l=r.fiber._debugInfo;if(l)for(var n=0;n<l.length;n++){var t=l[n].name;typeof t==="string"&&(o+=og(e)+"<"+t+`>
`,e++)}if(l="",n=r.fiber.pendingProps,r.fiber.tag===6)l=V1(n,r.serverProps,e),e++;else if(t=DP(r.fiber),t!==null)if(r.serverProps===void 0){l=e;var b=120-2*l-t.length-2,w="";for(M in n)if(n.hasOwnProperty(M)&&M!=="children"){var q=Tt(n[M],15);if(b-=M.length+q.length+2,0>b){w+=" ...";break}w+=" "+M+"="+q}l=og(l)+"<"+t+w+`>
`,e++}else r.serverProps===null?(l=aw(t,n,St(e)),e++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=V3(t,n,r.serverProps,e),e++);var M="";n=r.fiber.child;for(t=0;n&&t<r.children.length;)b=r.children[t],b.fiber===n?(M+=cw(b,e),t++):M+=aP(n,e),n=n.sibling;n&&0<r.children.length&&(M+=og(e)+`...
`),n=r.serverTail,r.serverProps===null&&e--;for(r=0;r<n.length;r++)t=n[r],M=typeof t==="string"?M+(Cn(e)+i0(t,120-2*e)+`
`):M+aw(t.type,t.props,Cn(e));return o+l+M}function yw(r){try{return`

`+cw(r,0)}catch(e){return""}}function cP(r,e,o){for(var l=e,n=null,t=0;l;)l===r&&(t=0),n={fiber:l,children:n!==null?[n]:[],serverProps:l===e?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:t},t++,l=l.return;return n!==null?yw(n).replaceAll(/^[+-]/gm,">"):""}function yP(r,e){var o=Er({},r||pq),l={tag:e};if(fq.indexOf(e)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),jX.indexOf(e)!==-1&&(o.pTagInButtonScope=null),pX.indexOf(e)!==-1&&e!=="address"&&e!=="div"&&e!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,e==="form"&&(o.formTag=l),e==="a"&&(o.aTagInScope=l),e==="button"&&(o.buttonTagInScope=l),e==="nobr"&&(o.nobrTagInScope=l),e==="p"&&(o.pTagInButtonScope=l),e==="li"&&(o.listItemTagAutoclosing=l),e==="dd"||e==="dt")o.dlItemTagAutoclosing=l;return e==="#document"||e==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||e!=="#document"&&e!=="html"&&e!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function VP(r,e,o){switch(e){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return e!=="h1"&&e!=="h2"&&e!=="h3"&&e!=="h4"&&e!=="h5"&&e!=="h6";case"rp":case"rt":return dX.indexOf(e)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return e==null;case"head":return o||e===null;case"html":return o&&e==="#document"||e===null;case"body":return o&&(e==="#document"||e==="html")||e===null}return!0}function _3(r,e){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return e.pTagInButtonScope;case"form":return e.formTag||e.pTagInButtonScope;case"li":return e.listItemTagAutoclosing;case"dd":case"dt":return e.dlItemTagAutoclosing;case"button":return e.buttonTagInScope;case"a":return e.aTagInScope;case"nobr":return e.nobrTagInScope}return null}function _P(r,e){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===e)return r}r=r.return}return null}function Vw(r,e){e=e||pq;var o=e.current;if(e=(o=VP(r,o&&o.tag,e.implicitRootScope)?null:o)?null:_3(r,e),e=o||e,!e)return!0;var l=e.tag;if(e=String(!!o)+"|"+r+"|"+l,lu[e])return!1;lu[e]=!0;var n=(e=ug)?_P(e.return,l):null,t=e!==null&&n!==null?cP(n,e,null):"",b="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,b,l,o,t)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,b,l,t),e&&(r=e.return,n===null||r===null||n===r&&r._debugOwner===e._debugOwner||hr(n,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,b)})),!1}function _1(r,e,o){if(o||VP("#text",e,!1))return!0;if(o="#text|"+e,lu[o])return!1;lu[o]=!0;var l=(o=ug)?_P(o,e):null;return o=o!==null&&l!==null?cP(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,e,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,e,o),!1}function t0(r,e){if(e){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=e;return}}r.textContent=e}function E3(r){return r.replace(eY,function(e,o){return o.toUpperCase()})}function EP(r,e,o){var l=e.indexOf("--")===0;l||(-1<e.indexOf("-")?nv.hasOwnProperty(e)&&nv[e]||(nv[e]=!0,console.error("Unsupported style property %s. Did you mean %s?",e,E3(e.replace(rY,"ms-")))):sX.test(e)?nv.hasOwnProperty(e)&&nv[e]||(nv[e]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1))):!sq.test(o)||t4.hasOwnProperty(o)&&t4[o]||(t4[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,o.replace(sq,""))),typeof o==="number"&&(isNaN(o)?rH||(rH=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",e)):isFinite(o)||eH||(eH=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",e)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(e,""):e==="float"?r.cssFloat="":r[e]="":l?r.setProperty(e,o):typeof o!=="number"||o===0||oH.has(e)?e==="float"?r.cssFloat=o:(o0(o,e),r[e]=(""+o).trim()):r[e]=o+"px"}function fP(r,e,o){if(e!=null&&typeof e!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(e&&Object.freeze(e),r=r.style,o!=null){if(e){var l={};if(o){for(var n in o)if(o.hasOwnProperty(n)&&!e.hasOwnProperty(n))for(var t=n4[n]||[n],b=0;b<t.length;b++)l[t[b]]=n}for(var w in e)if(e.hasOwnProperty(w)&&(!o||o[w]!==e[w]))for(n=n4[w]||[w],t=0;t<n.length;t++)l[n[t]]=w;w={};for(var q in e)for(n=n4[q]||[q],t=0;t<n.length;t++)w[n[t]]=q;q={};for(var M in l)if(n=l[M],(t=w[M])&&n!==t&&(b=n+","+t,!q[b])){q[b]=!0,b=console;var U=e[n];b.error.call(b,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",U==null||typeof U==="boolean"||U===""?"Removing":"Updating",n,t)}}for(var $ in o)!o.hasOwnProperty($)||e!=null&&e.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var J in e)M=e[J],e.hasOwnProperty(J)&&o[J]!==M&&EP(r,J,M)}else for(l in e)e.hasOwnProperty(l)&&EP(r,l,e[l])}function v0(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function pP(r){return oY.get(r)||r}function f3(r,e){if(ag.call(vv,e)&&vv[e])return!0;if(lY.test(e)){if(r="aria-"+e.slice(4).toLowerCase(),r=gH.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",e),vv[e]=!0;if(e!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",e,r),vv[e]=!0}if(gY.test(e)){if(r=e.toLowerCase(),r=gH.hasOwnProperty(r)?r:null,r==null)return vv[e]=!0,!1;e!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",e,r),vv[e]=!0)}return!0}function p3(r,e){var o=[],l;for(l in e)f3(r,l)||o.push(l);e=o.map(function(n){return"`"+n+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",e,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",e,r)}function j3(r,e,o,l){if(ag.call(xo,e)&&xo[e])return!0;var n=e.toLowerCase();if(n==="onfocusin"||n==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),xo[e]=!0;if(typeof o==="function"&&(r==="form"&&e==="action"||r==="input"&&e==="formAction"||r==="button"&&e==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(e))return!0;if(l=r.hasOwnProperty(n)?r[n]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",e,l),xo[e]=!0;if(iH.test(e))return console.error("Unknown event handler property `%s`. It will be ignored.",e),xo[e]=!0}else if(iH.test(e))return iY.test(e)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",e),xo[e]=!0;if(nY.test(e)||tY.test(e))return!0;if(n==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),xo[e]=!0;if(n==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),xo[e]=!0;if(n==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),xo[e]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",e),xo[e]=!0;if(nu.hasOwnProperty(n)){if(n=nu[n],n!==e)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",e,n),xo[e]=!0}else if(e!==n)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",e,n),xo[e]=!0;switch(e){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(e){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(n=e.toLowerCase().slice(0,5),n==="data-"||n==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,e,e,o,e):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,e,e,o,e,e,e),xo[e]=!0}case"function":case"symbol":return xo[e]=!0,!1;case"string":if(o==="false"||o==="true"){switch(e){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,e,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',e,o),xo[e]=!0}}return!0}function d3(r,e,o){var l=[],n;for(n in e)j3(r,n,e[n],o)||l.push(n);e=l.map(function(t){return"`"+t+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",e,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",e,r)}function h0(r){return vY.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function yl(){}function _w(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function jP(r){var e=Nr(r);if(e&&(r=e.stateNode)){var o=r[Fo]||null;r:switch(r=e.stateNode,e.type){case"input":if(Tw(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),e=o.name,o.type==="radio"&&e!=null){for(o=r;o.parentNode;)o=o.parentNode;Pe(e,"name"),o=o.querySelectorAll('input[name="'+Yg(""+e)+'"][type="radio"]');for(e=0;e<o.length;e++){var l=o[e];if(l!==r&&l.form===r.form){var n=l[Fo]||null;if(!n)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Tw(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<o.length;e++)l=o[e],l.form===r.form&&IP(l)}break r;case"textarea":SP(r,o.value,o.defaultValue);break r;case"select":e=o.value,e!=null&&Zt(r,!!o.multiple,e,!1)}}}function dP(r,e,o){if(v4)return r(e,o);v4=!0;try{var l=r(e);return l}finally{if(v4=!1,hv!==null||bv!==null){if(pt(),hv&&(e=hv,r=bv,bv=hv=null,jP(e),r))for(e=0;e<r.length;e++)jP(r[e])}}}function b0(r,e){var o=r.stateNode;if(o===null)return null;var l=o[Fo]||null;if(l===null)return null;o=l[e];r:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+e+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function sP(){if(tu)return tu;var r,e=b4,o=e.length,l,n="value"in _i?_i.value:_i.textContent,t=n.length;for(r=0;r<o&&e[r]===n[r];r++);var b=o-r;for(l=1;l<=b&&e[o-l]===n[t-l];l++);return tu=n.slice(r,1<l?1-l:void 0)}function E1(r){var e=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&e===13&&(r=13)):r=e,r===10&&(r=13),32<=r||r===13?r:0}function f1(){return!0}function r8(){return!1}function yo(r){function e(o,l,n,t,b){this._reactName=o,this._targetInst=n,this.type=l,this.nativeEvent=t,this.target=b,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(t):t[w]);return this.isDefaultPrevented=(t.defaultPrevented!=null?t.defaultPrevented:t.returnValue===!1)?f1:r8,this.isPropagationStopped=r8,this}return Er(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=f1)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=f1)},persist:function(){},isPersistent:f1}),e}function s3(r){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(r):(r=mY[r])?!!e[r]:!1}function Ew(){return s3}function e8(r,e){switch(r){case"keyup":return FY.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==hH;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o8(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function rG(r,e){switch(r){case"compositionend":return o8(e);case"keypress":if(e.which!==uH)return null;return PH=!0,wH;case"textInput":return r=e.data,r===wH&&PH?null:r;default:return null}}function eG(r,e){if(uv)return r==="compositionend"||!O4&&e8(r,e)?(r=sP(),tu=b4=_i=null,uv=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bH&&e.locale!=="ko"?null:e.data;default:return null}}function g8(r){var e=r&&r.nodeName&&r.nodeName.toLowerCase();return e==="input"?!!NY[r.type]:e==="textarea"?!0:!1}function oG(r){if(!Ul)return!1;r="on"+r;var e=r in document;return e||(e=document.createElement("div"),e.setAttribute(r,"return;"),e=typeof e[r]==="function"),e}function l8(r,e,o,l){hv?bv?bv.push(l):bv=[l]:hv=l,e=kb(e,"onChange"),0<e.length&&(o=new vu("onChange","change",null,o,l),r.push({event:o,listeners:e}))}function gG(r){TA(r,0)}function p1(r){var e=Br(r);if(IP(e))return r}function i8(r,e){if(r==="change")return e}function n8(){f0&&(f0.detachEvent("onpropertychange",t8),p0=f0=null)}function t8(r){if(r.propertyName==="value"&&p1(p0)){var e=[];l8(e,p0,r,_w(r)),dP(gG,e)}}function lG(r,e,o){r==="focusin"?(n8(),f0=e,p0=o,f0.attachEvent("onpropertychange",t8)):r==="focusout"&&n8()}function iG(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return p1(p0)}function nG(r,e){if(r==="click")return p1(e)}function tG(r,e){if(r==="input"||r==="change")return p1(e)}function vG(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}function u0(r,e){if(No(r,e))return!0;if(typeof r!=="object"||r===null||typeof e!=="object"||e===null)return!1;var o=Object.keys(r),l=Object.keys(e);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var n=o[l];if(!ag.call(e,n)||!No(r[n],e[n]))return!1}return!0}function v8(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function h8(r,e){var o=v8(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=e&&l>=e)return{node:o,offset:e-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=v8(o)}}function b8(r,e){return r&&e?r===e?!0:r&&r.nodeType===3?!1:e&&e.nodeType===3?b8(r,e.parentNode):("contains"in r)?r.contains(e):r.compareDocumentPosition?!!(r.compareDocumentPosition(e)&16):!1:!1}function u8(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var e=y1(r.document);e instanceof r.HTMLIFrameElement;){try{var o=typeof e.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=e.contentWindow;else break;e=y1(r.document)}return e}function fw(r){var e=r&&r.nodeName&&r.nodeName.toLowerCase();return e&&(e==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||e==="textarea"||r.contentEditable==="true")}function w8(r,e,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;q4||wv==null||wv!==y1(l)||(l=wv,("selectionStart"in l)&&fw(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),j0&&u0(j0,l)||(j0=l,l=kb(A4,"onSelect"),0<l.length&&(e=new vu("onSelect","select",null,e,o),r.push({event:e,listeners:l}),e.target=wv)))}function Zn(r,e){var o={};return o[r.toLowerCase()]=e.toLowerCase(),o["Webkit"+r]="webkit"+e,o["Moz"+r]="moz"+e,o}function Sn(r){if(H4[r])return H4[r];if(!Pv[r])return r;var e=Pv[r],o;for(o in e)if(e.hasOwnProperty(o)&&o in AH)return H4[r]=e[o];return r}function Tg(r,e){WH.set(r,e),Jo(e,[r])}function hG(r){for(var e=bu,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(go(l)&&l.length===2&&typeof l[0]==="string"){if(e!==bu&&e!==G4)return W4;e=G4}else return W4;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||e!==bu&&e!==m4)return W4;e=m4}}return e}function pw(r,e,o,l){for(var n in r)ag.call(r,n)&&n[0]!=="_"&&tl(n,r[n],e,o,l)}function tl(r,e,o,l,n){switch(typeof e){case"object":if(e===null){e="null";break}else{if(e.$$typeof===Xl){var t=y(e.type)||"…",b=e.key;e=e.props;var w=Object.keys(e),q=w.length;if(b==null&&q===0){e="<"+t+" />";break}if(3>l||q===1&&w[0]==="children"&&b==null){e="<"+t+" … />";break}o.push([n+"  ".repeat(l)+r,"<"+t]),b!==null&&tl("key",b,o,l+1,n),r=!1;for(var M in e)M==="children"?e.children!=null&&(!go(e.children)||0<e.children.length)&&(r=!0):ag.call(e,M)&&M[0]!=="_"&&tl(M,e[M],o,l+1,n);o.push(["",r?">…</"+t+">":"/>"]);return}if(t=Object.prototype.toString.call(e),t=t.slice(8,t.length-1),t==="Array"){if(M=hG(e),M===m4||M===bu){e=JSON.stringify(e);break}else if(M===G4){o.push([n+"  ".repeat(l)+r,""]);for(r=0;r<e.length;r++)t=e[r],tl(t[0],t[1],o,l+1,n);return}}if(t==="Promise"){if(e.status==="fulfilled"){if(t=o.length,tl(r,e.value,o,l,n),o.length>t){o=o[t],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(e.status==="rejected"&&(t=o.length,tl(r,e.reason,o,l,n),o.length>t)){o=o[t],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}t==="Object"&&(M=Object.getPrototypeOf(e))&&typeof M.constructor==="function"&&(t=M.constructor.name),o.push([n+"  ".repeat(l)+r,t==="Object"?3>l?"":"…":t]),3>l&&pw(e,o,l+1,n);return}case"function":e=e.name===""?"() => {}":e.name+"() {}";break;case"string":e=e===DY?"…":JSON.stringify(e);break;case"undefined":e="undefined";break;case"boolean":e=e?"true":"false";break;default:e=String(e)}o.push([n+"  ".repeat(l)+r,e])}function P8(r,e,o,l){var n=!0;for(b in r)b in e||(o.push([uu+"  ".repeat(l)+b,"…"]),n=!1);for(var t in e)if(t in r){var b=r[t],w=e[t];if(b!==w){if(l===0&&t==="children")n="  ".repeat(l)+t,o.push([uu+n,"…"],[wu+n,"…"]);else{if(!(3<=l)){if(typeof b==="object"&&typeof w==="object"&&b!==null&&w!==null&&b.$$typeof===w.$$typeof)if(w.$$typeof===Xl){if(b.type===w.type&&b.key===w.key){b=y(w.type)||"…",n="  ".repeat(l)+t,b="<"+b+" … />",o.push([uu+n,b],[wu+n,b]),n=!1;continue}}else{var q=Object.prototype.toString.call(b),M=Object.prototype.toString.call(w);if(q===M&&(M==="[object Object]"||M==="[object Array]")){q=[XH+"  ".repeat(l)+t,M==="[object Array]"?"Array":""],o.push(q),M=o.length,P8(b,w,o,l+1)?M===o.length&&(q[1]="Referentially unequal but deeply equal objects. Consider memoization."):n=!1;continue}}else if(typeof b==="function"&&typeof w==="function"&&b.name===w.name&&b.length===w.length&&(q=Function.prototype.toString.call(b),M=Function.prototype.toString.call(w),q===M)){b=w.name===""?"() => {}":w.name+"() {}",o.push([XH+"  ".repeat(l)+t,b+" Referentially unequal function closure. Consider memoization."]);continue}}tl(t,b,o,l,uu),tl(t,w,o,l,wu)}n=!1}}else o.push([wu+"  ".repeat(l)+t,"…"]),n=!1;return n}function gg(r){pr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function vl(r,e,o,l){Je&&(fi.start=e,fi.end=o,ri.color="warning",ri.tooltipText=l,ri.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,fi)):performance.measure(l,fi))}function j1(r,e,o){vl(r,e,o,"Reconnect")}function d1(r,e,o,l,n){var t=x(r);if(t!==null&&Je){var{alternate:b,actualDuration:w}=r;if(b===null||b.child!==r.child)for(var q=r.child;q!==null;q=q.sibling)w-=q.actualDuration;l=0.5>w?l?"tertiary-light":"primary-light":10>w?l?"tertiary":"primary":100>w?l?"tertiary-dark":"primary-dark":"error";var M=r.memoizedProps;w=r._debugTask,M!==null&&b!==null&&b.memoizedProps!==M?(q=[aY],M=P8(b.memoizedProps,M,q,0),1<q.length&&(M&&!Ei&&(b.lanes&n)===0&&100<r.actualDuration?(Ei=!0,q[0]=cY,ri.color="warning",ri.tooltipText=YH):(ri.color=l,ri.tooltipText=t),ri.properties=q,fi.start=e,fi.end=o,w!=null?w.run(performance.measure.bind(performance,"​"+t,fi)):performance.measure("​"+t,fi))):w!=null?w.run(console.timeStamp.bind(console,t,e,o,zg,void 0,l)):console.timeStamp(t,e,o,zg,void 0,l)}}function jw(r,e,o,l){if(Je){var n=x(r);if(n!==null){for(var t=null,b=[],w=0;w<l.length;w++){var q=l[w];t==null&&q.source!==null&&(t=q.source._debugTask),q=q.value,b.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r.key!==null&&tl("key",r.key,b,0,""),r.memoizedProps!==null&&pw(r.memoizedProps,b,0,""),t==null&&(t=r._debugTask),r={start:e,end:o,detail:{devtools:{color:"error",track:zg,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:b}}},t?t.run(performance.measure.bind(performance,"​"+n,r)):performance.measure("​"+n,r)}}}function hl(r,e,o,l,n){if(n!==null){if(Je){var t=x(r);if(t!==null){l=[];for(var b=0;b<n.length;b++){var w=n[b].value;l.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r.key!==null&&tl("key",r.key,l,0,""),r.memoizedProps!==null&&pw(r.memoizedProps,l,0,""),e={start:e,end:o,detail:{devtools:{color:"error",track:zg,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+t,e)):performance.measure("​"+t,e)}}}else t=x(r),t!==null&&Je&&(n=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,t,e,o,zg,void 0,n)):console.timeStamp(t,e,o,zg,void 0,n))}function bG(r,e,o,l){if(Je&&!(e<=r)){var n=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,e,pr,fr,n)):console.timeStamp(o,r,e,pr,fr,n)}}function O8(r,e,o,l){!Je||e<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,e,pr,fr,o)):console.timeStamp("Prewarm",r,e,pr,fr,o))}function A8(r,e,o,l){!Je||e<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,e,pr,fr,o)):console.timeStamp("Suspended",r,e,pr,fr,o))}function uG(r,e,o,l,n,t){if(Je&&!(e<=r)){o=[];for(var b=0;b<l.length;b++){var w=l[b].value;o.push(["Recoverable Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:e,detail:{devtools:{color:"primary-dark",track:pr,trackGroup:fr,tooltipText:n?"Hydration Failed":"Recovered after Error",properties:o}}},t?t.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function dw(r,e,o,l){!Je||e<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,e,pr,fr,"error")):console.timeStamp("Errored",r,e,pr,fr,"error"))}function wG(r,e,o,l){!Je||e<=r||(l?l.run(console.timeStamp.bind(console,o,r,e,pr,fr,"secondary-light")):console.timeStamp(o,r,e,pr,fr,"secondary-light"))}function q8(r,e,o,l,n){if(Je&&!(e<=r)){for(var t=[],b=0;b<o.length;b++){var w=o[b].value;t.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:e,detail:{devtools:{color:"error",track:pr,trackGroup:fr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:t}}},n?n.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function w0(r,e,o){!Je||e<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,e,pr,fr,"secondary-dark")):console.timeStamp("Animating",r,e,pr,fr,"secondary-dark"))}function s1(){for(var r=Ov,e=X4=Ov=0;e<r;){var o=Qg[e];Qg[e++]=null;var l=Qg[e];Qg[e++]=null;var n=Qg[e];Qg[e++]=null;var t=Qg[e];if(Qg[e++]=null,l!==null&&n!==null){var b=l.pending;b===null?n.next=n:(n.next=b.next,b.next=n),l.pending=n}t!==0&&H8(o,n,t)}}function rb(r,e,o,l){Qg[Ov++]=r,Qg[Ov++]=e,Qg[Ov++]=o,Qg[Ov++]=l,X4|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function sw(r,e,o,l){return rb(r,e,o,l),eb(r)}function zo(r,e){return rb(r,null,null,e),eb(r)}function H8(r,e,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var n=!1,t=r.return;t!==null;)t.childLanes|=o,l=t.alternate,l!==null&&(l.childLanes|=o),t.tag===22&&(r=t.stateNode,r===null||r._visibility&d0||(n=!0)),r=t,t=t.return;return r.tag===3?(t=r.stateNode,n&&e!==null&&(n=31-Io(o),r=t.hiddenUpdates,l=r[n],l===null?r[n]=[e]:l.push(e),e.lane=o|536870912),t):null}function eb(r){if(Jh>iJ)throw Ot=Jh=0,zh=o6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ot>nJ&&(Ot=0,zh=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&FA(r);for(var e=r,o=e.return;o!==null;)e.alternate===null&&(e.flags&4098)!==0&&FA(r),e=o,o=e.return;return e.tag===3?e.stateNode:null}function Tn(r){if(Kg===null)return r;var e=Kg(r);return e===void 0?r:e.current}function r5(r){if(Kg===null)return r;var e=Kg(r);return e===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(e=Tn(r.render),r.render!==e)?(e={$$typeof:T0,render:e},r.displayName!==void 0&&(e.displayName=r.displayName),e):r:e.current}function M8(r,e){if(Kg===null)return!1;var o=r.elementType;e=e.type;var l=!1,n=typeof e==="object"&&e!==null?e.$$typeof:null;switch(r.tag){case 1:typeof e==="function"&&(l=!0);break;case 0:typeof e==="function"?l=!0:n===bg&&(l=!0);break;case 11:n===T0?l=!0:n===bg&&(l=!0);break;case 14:case 15:n===db?l=!0:n===bg&&(l=!0);break;default:return!1}return l&&(r=Kg(o),r!==void 0&&r===Kg(e))?!0:!1}function R8(r){Kg!==null&&typeof WeakSet==="function"&&(Av===null&&(Av=new WeakSet),Av.add(r))}function W8(r,e,o){do{var l=r,n=l.alternate,t=l.child,b=l.sibling,w=l.tag;l=l.type;var q=null;switch(w){case 0:case 15:case 1:q=l;break;case 11:q=l.render}if(Kg===null)throw Error("Expected resolveFamily to be set during hot reload.");var M=!1;if(l=!1,q!==null&&(q=Kg(q),q!==void 0&&(o.has(q)?l=!0:e.has(q)&&(w===1?l=!0:M=!0))),Av!==null&&(Av.has(r)||n!==null&&Av.has(n))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||M)n=zo(r,2),n!==null&&Be(n,r,2);if(t===null||l||W8(t,e,o),b===null)break;r=b}while(1)}function PG(r,e,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,JH||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function e5(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Vl(r,e){var o=r.alternate;switch(o===null?(o=X(r.tag,e,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=e,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,e=r.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext,_debugThenableState:e._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=Tn(r.type);break;case 1:o.type=Tn(r.type);break;case 11:o.type=r5(r.type)}return o}function m8(r,e){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext,_debugThenableState:e._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function o5(r,e,o,l,n,t){var b=0,w=r;if(typeof r==="function")e5(r)&&(b=1),w=Tn(w);else if(typeof r==="string")b=nr(),b=GX(r,o,b)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E2:return e=X(31,o,e,n),e.elementType=E2,e.lanes=t,e;case gv:return kn(o.children,n,t,e);case jb:b=8,n|=Ko,n|=yg;break;case c2:return r=o,l=n,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),e=X(12,r,e,l|kr),e.elementType=c2,e.lanes=t,e.stateNode={effectDuration:0,passiveEffectDuration:0},e;case V2:return e=X(13,o,e,n),e.elementType=V2,e.lanes=t,e;case _2:return e=X(19,o,e,n),e.elementType=_2,e.lanes=t,e;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Yl:b=10;break r;case y2:b=9;break r;case T0:b=11,w=r5(w);break r;case db:b=14;break r;case bg:b=16,w=null;break r}if(w="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":go(r)?o="array":r!==void 0&&r.$$typeof===Xl?(o="<"+(y(r.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(b=l?f(l):null)&&(w+=`

Check the render method of \``+b+"`."),b=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+w)),w=null}return e=X(b,o,e,n),e.elementType=r,e.type=w,e.lanes=t,e._debugOwner=l,e}function ob(r,e,o){return e=o5(r.type,r.key,r.props,r._owner,e,o),e._debugOwner=r._owner,e._debugStack=r._debugStack,e._debugTask=r._debugTask,e}function kn(r,e,o,l){return r=X(7,r,l,e),r.lanes=o,r}function g5(r,e,o){return r=X(6,r,null,e),r.lanes=o,r}function G8(r){var e=X(18,null,null,$r);return e.stateNode=r,e}function l5(r,e,o){return e=X(4,r.children!==null?r.children:[],r.key,e),e.lanes=o,e.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},e}function lg(r,e){if(typeof r==="object"&&r!==null){var o=Y4.get(r);if(o!==void 0)return o;return e={value:r,source:e,stack:Lr(e)},Y4.set(r,e),e}return{value:r,source:e,stack:Lr(e)}}function _l(r,e){Li(),qv[Hv++]=s0,qv[Hv++]=Pu,Pu=r,s0=e}function X8(r,e,o){Li(),Ug[$g++]=oi,Ug[$g++]=gi,Ug[$g++]=rt,rt=r;var l=oi;r=gi;var n=32-Io(l)-1;l&=~(1<<n),o+=1;var t=32-Io(e)+n;if(30<t){var b=n-n%5;t=(l&(1<<b)-1).toString(32),l>>=b,n-=b,oi=1<<32-Io(e)+n|o<<n|l,gi=t+r}else oi=1<<t|o<<n|l,gi=r}function i5(r){Li(),r.return!==null&&(_l(r,1),X8(r,1,0))}function n5(r){for(;r===Pu;)Pu=qv[--Hv],qv[Hv]=null,s0=qv[--Hv],qv[Hv]=null;for(;r===rt;)rt=Ug[--$g],Ug[$g]=null,gi=Ug[--$g],Ug[$g]=null,oi=Ug[--$g],Ug[$g]=null}function Y8(){return Li(),rt!==null?{id:oi,overflow:gi}:null}function J8(r,e){Li(),Ug[$g++]=oi,Ug[$g++]=gi,Ug[$g++]=rt,oi=e.id,gi=e.overflow,rt=r}function Li(){jr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Dn(r,e){if(r.return===null){if(Pg===null)Pg={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:e};else{if(Pg.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Pg.distanceFromLeaf>e&&(Pg.distanceFromLeaf=e)}return Pg}var o=Dn(r.return,e+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>e&&(o.distanceFromLeaf=e),o;return e={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:e},o.push(e),e}function z8(){jr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function gb(r,e){$l||(r=Dn(r,0),r.serverProps=null,e!==null&&(e=lq(e),r.serverTail.push(e)))}function Ii(r){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=Pg;throw l!==null&&(Pg=null,o=yw(l)),P0(lg(Error("Hydration failed because the server rendered "+(e?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),J4}function Q8(r){var{stateNode:e,type:o,memoizedProps:l}=r;switch(e[Mo]=r,e[Fo]=l,z2(o,l),o){case"dialog":dr("cancel",e),dr("close",e);break;case"iframe":case"object":case"embed":dr("load",e);break;case"video":case"audio":for(o=0;o<Qh.length;o++)dr(Qh[o],e);break;case"source":dr("error",e);break;case"img":case"image":case"link":dr("error",e),dr("load",e);break;case"details":dr("toggle",e);break;case"input":$i("input",l),dr("invalid",e),FP(e,l),xP(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":NP(e,l);break;case"select":$i("select",l),dr("invalid",e),CP(e,l);break;case"textarea":$i("textarea",l),dr("invalid",e),ZP(e,l),TP(e,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||e.textContent===""+o||l.suppressHydrationWarning===!0||cA(e.textContent,o)?(l.popover!=null&&(dr("beforetoggle",e),dr("toggle",e)),l.onScroll!=null&&dr("scroll",e),l.onScrollEnd!=null&&dr("scrollend",e),l.onClick!=null&&(e.onclick=yl),e=!0):e=!1,e||Ii(r,!0)}function K8(r){for(Ro=r.return;Ro;)switch(Ro.tag){case 5:case 31:case 13:Lg=!1;return;case 27:case 3:Lg=!0;return;default:Ro=Ro.return}}function kt(r){if(r!==Ro)return!1;if(!jr)return K8(r),jr=!0,!1;var e=r.tag,o;if(o=e!==3&&e!==27){if(o=e===5)o=r.type,o=!(o!=="form"&&o!=="button")||L2(r.type,r.memoizedProps);o=!o}if(o&&ze){for(o=ze;o;){var l=Dn(r,0),n=lq(o);l.serverTail.push(n),o=n.type==="Suspense"?N2(o):hg(o.nextSibling)}Ii(r)}if(K8(r),e===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");ze=N2(r)}else if(e===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");ze=N2(r)}else e===27?(e=ze,Di(r.type)?(r=O6,O6=null,ze=r):ze=e):ze=Ro?hg(r.stateNode.nextSibling):null;return!0}function an(){ze=Ro=null,$l=jr=!1}function t5(){var r=ji;return r!==null&&(So===null?So=r:So.push.apply(So,r),ji=null),r}function P0(r){ji===null?ji=[r]:ji.push(r)}function v5(){var r=Pg;if(r!==null){Pg=null;for(var e=yw(r);0<r.children.length;)r=r.children[0];hr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",e)})}}function lb(){Mv=Ou=null,Rv=!1}function Fi(r,e,o){mr(z4,e._currentValue,r),e._currentValue=o,mr(Q4,e._currentRenderer,r),e._currentRenderer!==void 0&&e._currentRenderer!==null&&e._currentRenderer!==QH&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),e._currentRenderer=QH}function El(r,e){r._currentValue=z4.current;var o=Q4.current;Hr(Q4,e),r._currentRenderer=o,Hr(z4,e)}function h5(r,e,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&e)!==e?(r.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function b5(r,e,o,l){var n=r.child;n!==null&&(n.return=r);for(;n!==null;){var t=n.dependencies;if(t!==null){var b=n.child;t=t.firstContext;r:for(;t!==null;){var w=t;t=n;for(var q=0;q<e.length;q++)if(w.context===e[q]){t.lanes|=o,w=t.alternate,w!==null&&(w.lanes|=o),h5(t.return,o,r),l||(b=null);break r}t=w.next}}else if(n.tag===18){if(b=n.return,b===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");b.lanes|=o,t=b.alternate,t!==null&&(t.lanes|=o),h5(b,o,r),b=null}else b=n.child;if(b!==null)b.return=n;else for(b=n;b!==null;){if(b===r){b=null;break}if(n=b.sibling,n!==null){n.return=b.return,b=n;break}b=b.return}n=b}}function Dt(r,e,o,l){r=null;for(var n=e,t=!1;n!==null;){if(!t){if((n.flags&524288)!==0)t=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var b=n.alternate;if(b===null)throw Error("Should have a current fiber. This is a bug in React.");if(b=b.memoizedProps,b!==null){var w=n.type;No(n.pendingProps.value,b.value)||(r!==null?r.push(w):r=[w])}}else if(n===sb.current){if(b=n.alternate,b===null)throw Error("Should have a current fiber. This is a bug in React.");b.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(r!==null?r.push(Ih):r=[Ih])}n=n.return}r!==null&&b5(e,r,o,l),e.flags|=262144}function ib(r){for(r=r.firstContext;r!==null;){if(!No(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function cn(r){Ou=r,Mv=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function $e(r){return Rv&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),U8(Ou,r)}function nb(r,e){return Ou===null&&cn(r),U8(r,e)}function U8(r,e){var o=e._currentValue;if(e={context:e,memoizedValue:o,next:null},Mv===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Mv=e,r.dependencies={lanes:0,firstContext:e,_debugThenableState:null},r.flags|=524288}else Mv=Mv.next=e;return o}function u5(){return{controller:new _Y,data:new Map,refCount:0}}function yn(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function O0(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&EY(fY,function(){r.controller.abort()})}function bl(r,e,o){if((r&127)!==0)0>Ll&&(Ll=pe(),eh=Au(e),K4=e,o!=null&&(U4=x(o)),(oe&(io|qg))!==uo&&(Ce=!0,rn=rh),r=N0(),e=x0(),r!==Wv||e!==oh?Wv=-1.1:e!==null&&(rn=rh),ot=r,oh=e);else if((r&4194048)!==0&&0>Ig&&(Ig=pe(),gh=Au(e),KH=e,o!=null&&(UH=x(o)),0>ni)){if(r=N0(),e=x0(),r!==on||e!==gt)on=-1.1;en=r,gt=e}}function OG(r){if(0>Ll){Ll=pe(),eh=r._debugTask!=null?r._debugTask:null,(oe&(io|qg))!==uo&&(rn=rh);var e=N0(),o=x0();e!==Wv||o!==oh?Wv=-1.1:o!==null&&(rn=rh),ot=e,oh=o}if(0>Ig&&(Ig=pe(),gh=r._debugTask!=null?r._debugTask:null,0>ni)){if(r=N0(),e=x0(),r!==on||e!==gt)on=-1.1;en=r,gt=e}}function fl(){var r=et;return et=0,r}function tb(r){var e=et;return et=r,e}function A0(r){var e=et;return et+=r,e}function vb(){Ur=Qr=-1.1}function ig(){var r=Qr;return Qr=-1.1,r}function ng(r){0<=r&&(Qr=r)}function ul(){var r=Fe;return Fe=-0,r}function wl(r){0<=r&&(Fe=r)}function Pl(){var r=Le;return Le=null,r}function Ol(){var r=Ce;return Ce=!1,r}function w5(r){Bo=pe(),0>r.actualStartTime&&(r.actualStartTime=Bo)}function P5(r){if(0<=Bo){var e=pe()-Bo;r.actualDuration+=e,r.selfBaseDuration=e,Bo=-1}}function $8(r){if(0<=Bo){var e=pe()-Bo;r.actualDuration+=e,Bo=-1}}function Al(){if(0<=Bo){var r=pe(),e=r-Bo;Bo=-1,et+=e,Fe+=e,Ur=r}}function L8(r){Le===null&&(Le=[]),Le.push(r),ii===null&&(ii=[]),ii.push(r)}function ql(){Bo=pe(),0>Qr&&(Qr=Bo)}function q0(r){for(var e=r.child;e;)r.actualDuration+=e.actualDuration,e=e.sibling}function AG(r,e){if(ih===null){var o=ih=[];L4=0,lt=G2(),mv={status:"pending",value:void 0,then:function(l){o.push(l)}}}return L4++,e.then(I8,I8),e}function I8(){if(--L4===0&&(-1<Ig||(ni=-1.1),ih!==null)){mv!==null&&(mv.status="fulfilled");var r=ih;ih=null,lt=0,mv=null;for(var e=0;e<r.length;e++)(0,r[e])()}}function qG(r,e){var o=[],l={status:"pending",value:null,reason:null,then:function(n){o.push(n)}};return r.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<o.length;n++)(0,o[n])(e)},function(n){l.status="rejected",l.reason=n;for(n=0;n<o.length;n++)(0,o[n])(void 0)}),l}function O5(){var r=it.current;return r!==null?r:Re.pooledCache}function hb(r,e){e===null?mr(it,it.current,r):mr(it,e.pool,r)}function F8(){var r=O5();return r===null?null:{parent:fe._currentValue,pool:r}}function x8(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function N8(r){return r=r.status,r==="fulfilled"||r==="rejected"}function B8(r,e,o){Z.actQueue!==null&&(Z.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(e):o!==e&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),e.then(yl,yl),e=o),e._debugInfo===void 0){r=performance.now(),l=e.displayName;var n={name:typeof l==="string"?l:"Promise",start:r,end:r,value:e};e._debugInfo=[{awaited:n}],e.status!=="fulfilled"&&e.status!=="rejected"&&(r=function(){n.end=performance.now()},e.then(r,r))}switch(e.status){case"fulfilled":return e.value;case"rejected":throw r=e.reason,Z8(r),r;default:if(typeof e.status==="string")e.then(yl,yl);else{if(r=Re,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=e,r.status="pending",r.then(function(t){if(e.status==="pending"){var b=e;b.status="fulfilled",b.value=t}},function(t){if(e.status==="pending"){var b=e;b.status="rejected",b.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw r=e.reason,Z8(r),r}throw tt=e,wh=!0,Gv}}function xi(r){try{return sY(r)}catch(e){if(e!==null&&typeof e==="object"&&typeof e.then==="function")throw tt=e,wh=!0,Gv;throw e}}function C8(){if(tt===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=tt;return tt=null,wh=!1,r}function Z8(r){if(r===Gv||r===Xu)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Ao(r){var e=Dr;return r!=null&&(Dr=e===null?r:e.concat(r)),e}function A5(){var r=Dr;if(r!=null){for(var e=r.length-1;0<=e;e--)if(r[e].name!=null){var o=r[e].debugTask;if(o!=null)return o}}return null}function bb(r,e,o){for(var l=Object.keys(r.props),n=0;n<l.length;n++){var t=l[n];if(t!=="children"&&t!=="key"){e===null&&(e=ob(r,o.mode,0),e._debugInfo=Dr,e.return=o),hr(e,function(b){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",b)},t);break}}}function ub(r){var e=Ph;return Ph+=1,Xv===null&&(Xv=x8()),B8(Xv,r,e)}function H0(r,e){e=e.props.ref,r.ref=e!==void 0?e:null}function S8(r,e){if(e.$$typeof===IX)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function wb(r,e){var o=A5();o!==null?o.run(S8.bind(null,r,e)):S8(r,e)}function T8(r,e){var o=x(r)||"Component";fH[o]||(fH[o]=!0,e=e.displayName||e.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,e,e,e):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,e,e,o,e,o))}function Pb(r,e){var o=A5();o!==null?o.run(T8.bind(null,r,e)):T8(r,e)}function k8(r,e){var o=x(r)||"Component";pH[o]||(pH[o]=!0,e=String(e),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,e):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,e,o))}function Ob(r,e){var o=A5();o!==null?o.run(k8.bind(null,r,e)):k8(r,e)}function D8(r){function e(Y,z){if(r){var K=Y.deletions;K===null?(Y.deletions=[z],Y.flags|=16):K.push(z)}}function o(Y,z){if(!r)return null;for(;z!==null;)e(Y,z),z=z.sibling;return null}function l(Y){for(var z=new Map;Y!==null;)Y.key!==null?z.set(Y.key,Y):z.set(Y.index,Y),Y=Y.sibling;return z}function n(Y,z){return Y=Vl(Y,z),Y.index=0,Y.sibling=null,Y}function t(Y,z,K){if(Y.index=K,!r)return Y.flags|=1048576,z;if(K=Y.alternate,K!==null)return K=K.index,K<z?(Y.flags|=67108866,z):K;return Y.flags|=67108866,z}function b(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,z,K,D){if(z===null||z.tag!==6)return z=g5(K,Y.mode,D),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=Dr,z;return z=n(z,K),z.return=Y,z._debugInfo=Dr,z}function q(Y,z,K,D){var ur=K.type;if(ur===gv)return z=U(Y,z,K.props.children,D,K.key),bb(K,z,Y),z;if(z!==null&&(z.elementType===ur||M8(z,K)||typeof ur==="object"&&ur!==null&&ur.$$typeof===bg&&xi(ur)===z.type))return z=n(z,K.props),H0(z,K),z.return=Y,z._debugOwner=K._owner,z._debugInfo=Dr,z;return z=ob(K,Y.mode,D),H0(z,K),z.return=Y,z._debugInfo=Dr,z}function M(Y,z,K,D){if(z===null||z.tag!==4||z.stateNode.containerInfo!==K.containerInfo||z.stateNode.implementation!==K.implementation)return z=l5(K,Y.mode,D),z.return=Y,z._debugInfo=Dr,z;return z=n(z,K.children||[]),z.return=Y,z._debugInfo=Dr,z}function U(Y,z,K,D,ur){if(z===null||z.tag!==7)return z=kn(K,Y.mode,D,ur),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=Dr,z;return z=n(z,K),z.return=Y,z._debugInfo=Dr,z}function $(Y,z,K){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return z=g5(""+z,Y.mode,K),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=Dr,z;if(typeof z==="object"&&z!==null){switch(z.$$typeof){case Xl:return K=ob(z,Y.mode,K),H0(K,z),K.return=Y,Y=Ao(z._debugInfo),K._debugInfo=Dr,Dr=Y,K;case ov:return z=l5(z,Y.mode,K),z.return=Y,z._debugInfo=Dr,z;case bg:var D=Ao(z._debugInfo);return z=xi(z),Y=$(Y,z,K),Dr=D,Y}if(go(z)||N(z))return K=kn(z,Y.mode,K,null),K.return=Y,K._debugOwner=Y,K._debugTask=Y._debugTask,Y=Ao(z._debugInfo),K._debugInfo=Dr,Dr=Y,K;if(typeof z.then==="function")return D=Ao(z._debugInfo),Y=$(Y,ub(z),K),Dr=D,Y;if(z.$$typeof===Yl)return $(Y,nb(Y,z),K);wb(Y,z)}return typeof z==="function"&&Pb(Y,z),typeof z==="symbol"&&Ob(Y,z),null}function J(Y,z,K,D){var ur=z!==null?z.key:null;if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur!==null?null:w(Y,z,""+K,D);if(typeof K==="object"&&K!==null){switch(K.$$typeof){case Xl:return K.key===ur?(ur=Ao(K._debugInfo),Y=q(Y,z,K,D),Dr=ur,Y):null;case ov:return K.key===ur?M(Y,z,K,D):null;case bg:return ur=Ao(K._debugInfo),K=xi(K),Y=J(Y,z,K,D),Dr=ur,Y}if(go(K)||N(K)){if(ur!==null)return null;return ur=Ao(K._debugInfo),Y=U(Y,z,K,D,null),Dr=ur,Y}if(typeof K.then==="function")return ur=Ao(K._debugInfo),Y=J(Y,z,ub(K),D),Dr=ur,Y;if(K.$$typeof===Yl)return J(Y,z,nb(Y,K),D);wb(Y,K)}return typeof K==="function"&&Pb(Y,K),typeof K==="symbol"&&Ob(Y,K),null}function F(Y,z,K,D,ur){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return Y=Y.get(K)||null,w(z,Y,""+D,ur);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Xl:return K=Y.get(D.key===null?K:D.key)||null,Y=Ao(D._debugInfo),z=q(z,K,D,ur),Dr=Y,z;case ov:return Y=Y.get(D.key===null?K:D.key)||null,M(z,Y,D,ur);case bg:var Fr=Ao(D._debugInfo);return D=xi(D),z=F(Y,z,K,D,ur),Dr=Fr,z}if(go(D)||N(D))return K=Y.get(K)||null,Y=Ao(D._debugInfo),z=U(z,K,D,ur,null),Dr=Y,z;if(typeof D.then==="function")return Fr=Ao(D._debugInfo),z=F(Y,z,K,ub(D),ur),Dr=Fr,z;if(D.$$typeof===Yl)return F(Y,z,K,nb(z,D),ur);wb(z,D)}return typeof D==="function"&&Pb(z,D),typeof D==="symbol"&&Ob(z,D),null}function tr(Y,z,K,D){if(typeof K!=="object"||K===null)return D;switch(K.$$typeof){case Xl:case ov:m(Y,z,K);var ur=K.key;if(typeof ur!=="string")break;if(D===null){D=new Set,D.add(ur);break}if(!D.has(ur)){D.add(ur);break}hr(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ur)});break;case bg:K=xi(K),tr(Y,z,K,D)}return D}function Or(Y,z,K,D){for(var ur=null,Fr=null,Jr=null,Gr=z,Sr=z=0,Qe=null;Gr!==null&&Sr<K.length;Sr++){Gr.index>Sr?(Qe=Gr,Gr=null):Qe=Gr.sibling;var ce=J(Y,Gr,K[Sr],D);if(ce===null){Gr===null&&(Gr=Qe);break}ur=tr(Y,ce,K[Sr],ur),r&&Gr&&ce.alternate===null&&e(Y,Gr),z=t(ce,z,Sr),Jr===null?Fr=ce:Jr.sibling=ce,Jr=ce,Gr=Qe}if(Sr===K.length)return o(Y,Gr),jr&&_l(Y,Sr),Fr;if(Gr===null){for(;Sr<K.length;Sr++)Gr=$(Y,K[Sr],D),Gr!==null&&(ur=tr(Y,Gr,K[Sr],ur),z=t(Gr,z,Sr),Jr===null?Fr=Gr:Jr.sibling=Gr,Jr=Gr);return jr&&_l(Y,Sr),Fr}for(Gr=l(Gr);Sr<K.length;Sr++)Qe=F(Gr,Y,Sr,K[Sr],D),Qe!==null&&(ur=tr(Y,Qe,K[Sr],ur),r&&Qe.alternate!==null&&Gr.delete(Qe.key===null?Sr:Qe.key),z=t(Qe,z,Sr),Jr===null?Fr=Qe:Jr.sibling=Qe,Jr=Qe);return r&&Gr.forEach(function(Ai){return e(Y,Ai)}),jr&&_l(Y,Sr),Fr}function Ge(Y,z,K,D){if(K==null)throw Error("An iterable object provided no iterator.");for(var ur=null,Fr=null,Jr=z,Gr=z=0,Sr=null,Qe=null,ce=K.next();Jr!==null&&!ce.done;Gr++,ce=K.next()){Jr.index>Gr?(Sr=Jr,Jr=null):Sr=Jr.sibling;var Ai=J(Y,Jr,ce.value,D);if(Ai===null){Jr===null&&(Jr=Sr);break}Qe=tr(Y,Ai,ce.value,Qe),r&&Jr&&Ai.alternate===null&&e(Y,Jr),z=t(Ai,z,Gr),Fr===null?ur=Ai:Fr.sibling=Ai,Fr=Ai,Jr=Sr}if(ce.done)return o(Y,Jr),jr&&_l(Y,Gr),ur;if(Jr===null){for(;!ce.done;Gr++,ce=K.next())Jr=$(Y,ce.value,D),Jr!==null&&(Qe=tr(Y,Jr,ce.value,Qe),z=t(Jr,z,Gr),Fr===null?ur=Jr:Fr.sibling=Jr,Fr=Jr);return jr&&_l(Y,Gr),ur}for(Jr=l(Jr);!ce.done;Gr++,ce=K.next())Sr=F(Jr,Y,Gr,ce.value,D),Sr!==null&&(Qe=tr(Y,Sr,ce.value,Qe),r&&Sr.alternate!==null&&Jr.delete(Sr.key===null?Gr:Sr.key),z=t(Sr,z,Gr),Fr===null?ur=Sr:Fr.sibling=Sr,Fr=Sr);return r&&Jr.forEach(function(XJ){return e(Y,XJ)}),jr&&_l(Y,Gr),ur}function sr(Y,z,K,D){if(typeof K==="object"&&K!==null&&K.type===gv&&K.key===null&&(bb(K,null,Y),K=K.props.children),typeof K==="object"&&K!==null){switch(K.$$typeof){case Xl:var ur=Ao(K._debugInfo);r:{for(var Fr=K.key;z!==null;){if(z.key===Fr){if(Fr=K.type,Fr===gv){if(z.tag===7){o(Y,z.sibling),D=n(z,K.props.children),D.return=Y,D._debugOwner=K._owner,D._debugInfo=Dr,bb(K,D,Y),Y=D;break r}}else if(z.elementType===Fr||M8(z,K)||typeof Fr==="object"&&Fr!==null&&Fr.$$typeof===bg&&xi(Fr)===z.type){o(Y,z.sibling),D=n(z,K.props),H0(D,K),D.return=Y,D._debugOwner=K._owner,D._debugInfo=Dr,Y=D;break r}o(Y,z);break}else e(Y,z);z=z.sibling}K.type===gv?(D=kn(K.props.children,Y.mode,D,K.key),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,bb(K,D,Y),Y=D):(D=ob(K,Y.mode,D),H0(D,K),D.return=Y,D._debugInfo=Dr,Y=D)}return Y=b(Y),Dr=ur,Y;case ov:r:{ur=K;for(K=ur.key;z!==null;){if(z.key===K)if(z.tag===4&&z.stateNode.containerInfo===ur.containerInfo&&z.stateNode.implementation===ur.implementation){o(Y,z.sibling),D=n(z,ur.children||[]),D.return=Y,Y=D;break r}else{o(Y,z);break}else e(Y,z);z=z.sibling}D=l5(ur,Y.mode,D),D.return=Y,Y=D}return b(Y);case bg:return ur=Ao(K._debugInfo),K=xi(K),Y=sr(Y,z,K,D),Dr=ur,Y}if(go(K))return ur=Ao(K._debugInfo),Y=Or(Y,z,K,D),Dr=ur,Y;if(N(K)){if(ur=Ao(K._debugInfo),Fr=N(K),typeof Fr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Jr=Fr.call(K);if(Jr===K){if(Y.tag!==0||Object.prototype.toString.call(Y.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Jr)!=="[object Generator]")_H||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),_H=!0}else K.entries!==Fr||N4||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N4=!0);return Y=Ge(Y,z,Jr,D),Dr=ur,Y}if(typeof K.then==="function")return ur=Ao(K._debugInfo),Y=sr(Y,z,ub(K),D),Dr=ur,Y;if(K.$$typeof===Yl)return sr(Y,z,nb(Y,K),D);wb(Y,K)}if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur=""+K,z!==null&&z.tag===6?(o(Y,z.sibling),D=n(z,ur),D.return=Y,Y=D):(o(Y,z),D=g5(ur,Y.mode,D),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,Y=D),b(Y);return typeof K==="function"&&Pb(Y,K),typeof K==="symbol"&&Ob(Y,K),o(Y,z)}return function(Y,z,K,D){var ur=Dr;Dr=null;try{Ph=0;var Fr=sr(Y,z,K,D);return Xv=null,Fr}catch(Qe){if(Qe===Gv||Qe===Xu)throw Qe;var Jr=X(29,Qe,null,Y.mode);Jr.lanes=D,Jr.return=Y;var Gr=Jr._debugInfo=Dr;if(Jr._debugOwner=Y._debugOwner,Jr._debugTask=Y._debugTask,Gr!=null){for(var Sr=Gr.length-1;0<=Sr;Sr--)if(typeof Gr[Sr].stack==="string"){Jr._debugOwner=Gr[Sr],Jr._debugTask=Gr[Sr].debugTask;break}}return Jr}finally{Dr=ur}}}function a8(r,e){var o=go(r);return r=!o&&typeof N(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,e,o),!1):!0}function q5(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function H5(r,e){r=r.updateQueue,e.updateQueue===r&&(e.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ni(r){return{lane:r,tag:dH,payload:null,callback:null,next:null}}function Bi(r,e,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,C4===l&&!eM){var n=x(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,n),eM=!0}if((oe&io)!==uo)return n=l.pending,n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=eb(r),H8(r,null,o),e;return rb(r,l,e,o),eb(r)}function M0(r,e,o){if(e=e.updateQueue,e!==null&&(e=e.shared,(o&4194048)!==0)){var l=e.lanes;l&=r.pendingLanes,o|=l,e.lanes=o,xn(r,o)}}function Ab(r,e){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var n=null,t=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};t===null?n=t=b:t=t.next=b,o=o.next}while(o!==null);t===null?n=t=e:t=t.next=e}else n=t=e;o={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:t,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=e:r.next=e,o.lastBaseUpdate=e}function R0(){if(Z4){var r=mv;if(r!==null)throw r}}function W0(r,e,o,l){Z4=!1;var n=r.updateQueue;gn=!1,C4=n.shared;var{firstBaseUpdate:t,lastBaseUpdate:b}=n,w=n.shared.pending;if(w!==null){n.shared.pending=null;var q=w,M=q.next;q.next=null,b===null?t=M:b.next=M,b=q;var U=r.alternate;U!==null&&(U=U.updateQueue,w=U.lastBaseUpdate,w!==b&&(w===null?U.firstBaseUpdate=M:w.next=M,U.lastBaseUpdate=q))}if(t!==null){var $=n.baseState;b=0,U=M=q=null,w=t;do{var J=w.lane&-536870913,F=J!==w.lane;if(F?(ar&J)===J:(l&J)===J){J!==0&&J===lt&&(Z4=!0),U!==null&&(U=U.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});r:{J=r;var tr=w,Or=e,Ge=o;switch(tr.tag){case sH:if(tr=tr.payload,typeof tr==="function"){Rv=!0;var sr=tr.call(Ge,$,Or);if(J.mode&Ko){We(!0);try{tr.call(Ge,$,Or)}finally{We(!1)}}Rv=!1,$=sr;break r}$=tr;break r;case B4:J.flags=J.flags&-65537|128;case dH:if(sr=tr.payload,typeof sr==="function"){if(Rv=!0,tr=sr.call(Ge,$,Or),J.mode&Ko){We(!0);try{sr.call(Ge,$,Or)}finally{We(!1)}}Rv=!1}else tr=sr;if(tr===null||tr===void 0)break r;$=Er({},$,tr);break r;case rM:gn=!0}}J=w.callback,J!==null&&(r.flags|=64,F&&(r.flags|=8192),F=n.callbacks,F===null?n.callbacks=[J]:F.push(J))}else F={lane:J,tag:w.tag,payload:w.payload,callback:w.callback,next:null},U===null?(M=U=F,q=$):U=U.next=F,b|=J;if(w=w.next,w===null)if(w=n.shared.pending,w===null)break;else F=w,w=F.next,F.next=null,n.lastBaseUpdate=F,n.shared.pending=null}while(1);U===null&&(q=$),n.baseState=q,n.firstBaseUpdate=M,n.lastBaseUpdate=U,t===null&&(n.shared.lanes=0),tn|=b,r.lanes=b,r.memoizedState=$}C4=null}function c8(r,e){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(e)}function HG(r,e){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)c8(o[r],e)}function y8(r,e){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)c8(o[r],e)}function V8(r,e){var o=xl;mr(Ju,o,r),mr(Yv,e,r),xl=o|e.baseLanes}function M5(r){mr(Ju,xl,r),mr(Yv,Yv.current,r)}function R5(r){xl=Ju.current,Hr(Yv,r),Hr(Ju,r)}function Ci(r){var e=r.alternate;mr(ae,ae.current&Jv,r),mr(Og,r,r),Fg===null&&(e===null||Yv.current!==null?Fg=r:e.memoizedState!==null&&(Fg=r))}function W5(r){mr(ae,ae.current,r),mr(Og,r,r),Fg===null&&(Fg=r)}function _8(r){r.tag===22?(mr(ae,ae.current,r),mr(Og,r,r),Fg===null&&(Fg=r)):Zi(r)}function Zi(r){mr(ae,ae.current,r),mr(Og,Og.current,r)}function tg(r){Hr(Og,r),Fg===r&&(Fg=null),Hr(ae,r)}function qb(r){for(var e=r;e!==null;){if(e.tag===13){var o=e.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||F2(o)||x2(o)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function _r(){var r=B;Ng===null?Ng=[r]:Ng.push(r)}function s(){var r=B;if(Ng!==null&&(bi++,Ng[bi]!==r)){var e=x(Ir);if(!oM.has(e)&&(oM.add(e),Ng!==null)){for(var o="",l=0;l<=bi;l++){var n=Ng[l],t=l===bi?r:n;for(n=l+1+". "+n;30>n.length;)n+=" ";n+=t+`
`,o+=n}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,e,o)}}}function at(r){r===void 0||r===null||go(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function Hb(){var r=x(Ir);lM.has(r)||(lM.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Se(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function m5(r,e){if(qh)return!1;if(e===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==e.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+e.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<e.length&&o<r.length;o++)if(!No(r[o],e[o]))return!1;return!0}function G5(r,e,o,l,n,t){if(vi=t,Ir=e,Ng=r!==null?r._debugHookTypes:null,bi=-1,qh=r!==null&&r.type!==e.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")t=x(Ir),S4.has(t)||(S4.add(t),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",t===null?"An unknown Component":"<"+t+">"));e.memoizedState=null,e.updateQueue=null,e.lanes=0,Z.H=r!==null&&r.memoizedState!==null?k4:Ng!==null?iM:T4,ht=t=(e.mode&Ko)!==$r;var b=I4(o,l,n);if(ht=!1,Qv&&(b=X5(e,o,l,n)),t){We(!0);try{b=X5(e,o,l,n)}finally{We(!1)}}return E8(r,e),b}function E8(r,e){e._debugHookTypes=Ng,e.dependencies===null?hi!==null&&(e.dependencies={lanes:0,firstContext:null,_debugThenableState:hi}):e.dependencies._debugThenableState=hi,Z.H=Hh;var o=Me!==null&&Me.next!==null;if(vi=0,Ng=B=je=Me=Ir=null,bi=-1,r!==null&&(r.flags&65011712)!==(e.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Qu=!1,Ah=0,hi=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||de||(r=r.dependencies,r!==null&&ib(r)&&(de=!0)),wh?(wh=!1,r=!0):r=!1,r&&(e=x(e)||"Unknown",gM.has(e)||S4.has(e)||(gM.add(e),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X5(r,e,o,l){Ir=r;var n=0;do{if(Qv&&(hi=null),Ah=0,Qv=!1,n>=eJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(n+=1,qh=!1,je=Me=null,r.updateQueue!=null){var t=r.updateQueue;t.lastEffect=null,t.events=null,t.stores=null,t.memoCache!=null&&(t.memoCache.index=0)}bi=-1,Z.H=nM,t=I4(e,o,l)}while(Qv);return t}function MG(){var r=Z.H,e=r.useState()[0];return e=typeof e.then==="function"?m0(e):e,r=r.useState()[0],(Me!==null?Me.memoizedState:null)!==r&&(Ir.flags|=1024),e}function Y5(){var r=Ku!==0;return Ku=0,r}function J5(r,e,o){e.updateQueue=r.updateQueue,e.flags=(e.mode&yg)!==$r?e.flags&-402655237:e.flags&-2053,r.lanes&=~o}function z5(r){if(Qu){for(r=r.memoizedState;r!==null;){var e=r.queue;e!==null&&(e.pending=null),r=r.next}Qu=!1}vi=0,Ng=je=Me=Ir=null,bi=-1,B=null,Qv=!1,Ah=Ku=0,hi=null}function Lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ir.memoizedState=je=r:je=je.next=r,je}function be(){if(Me===null){var r=Ir.alternate;r=r!==null?r.memoizedState:null}else r=Me.next;var e=je===null?Ir.memoizedState:je.next;if(e!==null)je=e,Me=r;else{if(r===null){if(Ir.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Me=r,r={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},je===null?Ir.memoizedState=je=r:je=je.next=r}return je}function Mb(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function m0(r){var e=Ah;return Ah+=1,hi===null&&(hi=x8()),r=B8(hi,r,e),e=Ir,(je===null?e.memoizedState:je.next)===null&&(e=e.alternate,Z.H=e!==null&&e.memoizedState!==null?k4:T4),r}function Si(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return m0(r);if(r.$$typeof===Yl)return $e(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function Vn(r){var e=null,o=Ir.updateQueue;if(o!==null&&(e=o.memoCache),e==null){var l=Ir.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),o===null&&(o=Mb(),Ir.updateQueue=o),o.memoCache=e,o=e.data[e.index],o===void 0||qh)for(o=e.data[e.index]=Array(r),l=0;l<r;l++)o[l]=FX;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return e.index++,o}function kg(r,e){return typeof e==="function"?e(r):e}function Q5(r,e,o){var l=Lo();if(o!==void 0){var n=o(e);if(ht){We(!0);try{o(e)}finally{We(!1)}}}else n=e;return l.memoizedState=l.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},l.queue=r,r=r.dispatch=XG.bind(null,Ir,r),[l.memoizedState,r]}function ct(r){var e=be();return K5(e,Me,r)}function K5(r,e,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var n=r.baseQueue,t=l.pending;if(t!==null){if(n!==null){var b=n.next;n.next=t.next,t.next=b}e.baseQueue!==n&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),e.baseQueue=n=t,l.pending=null}if(t=r.baseState,n===null)r.memoizedState=t;else{e=n.next;var w=b=null,q=null,M=e,U=!1;do{var $=M.lane&-536870913;if($!==M.lane?(ar&$)===$:(vi&$)===$){var J=M.revertLane;if(J===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),$===lt&&(U=!0);else if((vi&J)===J){M=M.next,J===lt&&(U=!0);continue}else $={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},q===null?(w=q=$,b=t):q=q.next=$,Ir.lanes|=J,tn|=J;$=M.action,ht&&o(t,$),t=M.hasEagerState?M.eagerState:o(t,$)}else J={lane:$,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},q===null?(w=q=J,b=t):q=q.next=J,Ir.lanes|=$,tn|=$;M=M.next}while(M!==null&&M!==e);if(q===null?b=t:q.next=w,!No(t,r.memoizedState)&&(de=!0,U&&(o=mv,o!==null)))throw o;r.memoizedState=t,r.baseState=b,r.baseQueue=q,l.lastRenderedState=t}return n===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function G0(r){var e=be(),o=e.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:n}=o,t=e.memoizedState;if(n!==null){o.pending=null;var b=n=n.next;do t=r(t,b.action),b=b.next;while(b!==n);No(t,e.memoizedState)||(de=!0),e.memoizedState=t,e.baseQueue===null&&(e.baseState=t),o.lastRenderedState=t}return[t,l]}function U5(r,e,o){var l=Ir,n=Lo();if(jr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var t=o();zv||t===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),zv=!0)}else{if(t=e(),zv||(o=e(),No(t,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),zv=!0)),Re===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(ar&127)!==0||f8(l,e,t)}return n.memoizedState=t,o={value:t,getSnapshot:e},n.queue=o,Gb(j8.bind(null,l,o,r),[r]),l.flags|=2048,Vt(xg|Zo,{destroy:void 0},p8.bind(null,l,o,t,e),null),t}function Rb(r,e,o){var l=Ir,n=be(),t=jr;if(t){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=e(),!zv){var b=e();No(o,b)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),zv=!0)}if(b=!No((Me||n).memoizedState,o))n.memoizedState=o,de=!0;n=n.queue;var w=j8.bind(null,l,n,r);if(Vo(2048,Zo,w,[r]),n.getSnapshot!==e||b||je!==null&&je.memoizedState.tag&xg){if(l.flags|=2048,Vt(xg|Zo,{destroy:void 0},p8.bind(null,l,n,o,e),null),Re===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");t||(vi&127)!==0||f8(l,e,o)}return o}function f8(r,e,o){r.flags|=16384,r={getSnapshot:e,value:o},e=Ir.updateQueue,e===null?(e=Mb(),Ir.updateQueue=e,e.stores=[r]):(o=e.stores,o===null?e.stores=[r]:o.push(r))}function p8(r,e,o,l){e.value=o,e.getSnapshot=l,d8(e)&&s8(r)}function j8(r,e,o){return o(function(){d8(e)&&(bl(2,"updateSyncExternalStore()",r),s8(r))})}function d8(r){var e=r.getSnapshot;r=r.value;try{var o=e();return!No(r,o)}catch(l){return!0}}function s8(r){var e=zo(r,2);e!==null&&Be(e,r,2)}function $5(r){var e=Lo();if(typeof r==="function"){var o=r;if(r=o(),ht){We(!0);try{o()}finally{We(!1)}}}return e.memoizedState=e.baseState=r,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:r},e}function L5(r){r=$5(r);var e=r.queue,o=MO.bind(null,Ir,e);return e.dispatch=o,[r.memoizedState,o]}function I5(r){var e=Lo();e.memoizedState=e.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=o,e=V5.bind(null,Ir,!0,o),o.dispatch=e,[r,e]}function rO(r,e){var o=be();return eO(o,Me,r,e)}function eO(r,e,o,l){return r.baseState=o,K5(r,Me,typeof l==="function"?l:kg)}function oO(r,e){var o=be();if(Me!==null)return eO(o,Me,r,e);return o.baseState=r,[r,o.queue.dispatch]}function RG(r,e,o,l,n){if(Kb(r))throw Error("Cannot update form state while rendering.");if(r=e.action,r!==null){var t={payload:n,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){t.listeners.push(b)}};Z.T!==null?o(!0):t.isTransition=!1,l(t),o=e.pending,o===null?(t.next=e.pending=t,gO(e,t)):(t.next=o.next,e.pending=o.next=t)}}function gO(r,e){var{action:o,payload:l}=e,n=r.state;if(e.isTransition){var t=Z.T,b={};b._updatedFibers=new Set,Z.T=b;try{var w=o(n,l),q=Z.S;q!==null&&q(b,w),lO(r,e,w)}catch(M){F5(r,e,M)}finally{t!==null&&b.types!==null&&(t.types!==null&&t.types!==b.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),t.types=b.types),Z.T=t,t===null&&b._updatedFibers&&(r=b._updatedFibers.size,b._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{b=o(n,l),lO(r,e,b)}catch(M){F5(r,e,M)}}function lO(r,e,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(Z.asyncTransitions++,o.then(Qb,Qb),o.then(function(l){iO(r,e,l)},function(l){return F5(r,e,l)}),e.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):iO(r,e,o)}function iO(r,e,o){e.status="fulfilled",e.value=o,nO(e),r.state=o,e=r.pending,e!==null&&(o=e.next,o===e?r.pending=null:(o=o.next,e.next=o,gO(r,o)))}function F5(r,e,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=o,nO(e),e=e.next;while(e!==l)}r.action=null}function nO(r){r=r.listeners;for(var e=0;e<r.length;e++)(0,r[e])()}function tO(r,e){return e}function yt(r,e){if(jr){var o=Re.formState;if(o!==null){r:{var l=Ir;if(jr){if(ze){e:{var n=ze;for(var t=Lg;n.nodeType!==8;){if(!t){n=null;break e}if(n=hg(n.nextSibling),n===null){n=null;break e}}t=n.data,n=t===b6||t===yM?n:null}if(n){ze=hg(n.nextSibling),l=n.data===b6;break r}}Ii(l)}l=!1}l&&(e=o[0])}}return o=Lo(),o.memoizedState=o.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tO,lastRenderedState:e},o.queue=l,o=MO.bind(null,Ir,l),l.dispatch=o,l=$5(!1),t=V5.bind(null,Ir,!1,l.queue),l=Lo(),n={state:e,dispatch:null,action:r,pending:null},l.queue=n,o=RG.bind(null,Ir,n,t,o),n.dispatch=o,l.memoizedState=r,[e,o,!1]}function Wb(r){var e=be();return vO(e,Me,r)}function vO(r,e,o){if(e=K5(r,e,tO)[0],r=ct(kg)[0],typeof e==="object"&&e!==null&&typeof e.then==="function")try{var l=m0(e)}catch(b){if(b===Gv)throw Xu;throw b}else l=e;e=be();var n=e.queue,t=n.dispatch;return o!==e.memoizedState&&(Ir.flags|=2048,Vt(xg|Zo,{destroy:void 0},WG.bind(null,n,o),null)),[l,t,r]}function WG(r,e){r.action=e}function mb(r){var e=be(),o=Me;if(o!==null)return vO(e,o,r);be(),e=e.memoizedState,o=be();var l=o.queue.dispatch;return o.memoizedState=r,[e,l,!1]}function Vt(r,e,o,l){return r={tag:r,create:o,deps:l,inst:e,next:null},e=Ir.updateQueue,e===null&&(e=Mb(),Ir.updateQueue=e),o=e.lastEffect,o===null?e.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,e.lastEffect=r),r}function x5(r){var e=Lo();return r={current:r},e.memoizedState=r}function _n(r,e,o,l){var n=Lo();Ir.flags|=r,n.memoizedState=Vt(xg|e,{destroy:void 0},o,l===void 0?null:l)}function Vo(r,e,o,l){var n=be();l=l===void 0?null:l;var t=n.memoizedState.inst;Me!==null&&l!==null&&m5(l,Me.memoizedState.deps)?n.memoizedState=Vt(e,t,o,l):(Ir.flags|=r,n.memoizedState=Vt(xg|e,t,o,l))}function Gb(r,e){(Ir.mode&yg)!==$r?_n(276826112,Zo,r,e):_n(8390656,Zo,r,e)}function mG(r){Ir.flags|=4;var e=Ir.updateQueue;if(e===null)e=Mb(),Ir.updateQueue=e,e.events=[r];else{var o=e.events;o===null?e.events=[r]:o.push(r)}}function N5(r){var e=Lo(),o={impl:r};return e.memoizedState=o,function(){if((oe&io)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function Xb(r){var e=be().memoizedState;return mG({ref:e,nextImpl:r}),function(){if((oe&io)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return e.impl.apply(void 0,arguments)}}function B5(r,e){var o=4194308;return(Ir.mode&yg)!==$r&&(o|=134217728),_n(o,Ag,r,e)}function hO(r,e){if(typeof e==="function"){r=r();var o=e(r);return function(){typeof o==="function"?o():e(null)}}if(e!==null&&e!==void 0)return e.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(e).join(", ")+"}"),r=r(),e.current=r,function(){e.current=null}}function C5(r,e,o){typeof e!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",e!==null?typeof e:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;(Ir.mode&yg)!==$r&&(l|=134217728),_n(l,Ag,hO.bind(null,e,r),o)}function Yb(r,e,o){typeof e!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",e!==null?typeof e:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,Vo(4,Ag,hO.bind(null,e,r),o)}function Z5(r,e){return Lo().memoizedState=[r,e===void 0?null:e],r}function Jb(r,e){var o=be();e=e===void 0?null:e;var l=o.memoizedState;if(e!==null&&m5(e,l[1]))return l[0];return o.memoizedState=[r,e],r}function S5(r,e){var o=Lo();e=e===void 0?null:e;var l=r();if(ht){We(!0);try{r()}finally{We(!1)}}return o.memoizedState=[l,e],l}function zb(r,e){var o=be();e=e===void 0?null:e;var l=o.memoizedState;if(e!==null&&m5(e,l[1]))return l[0];if(l=r(),ht){We(!0);try{r()}finally{We(!1)}}return o.memoizedState=[l,e],l}function T5(r,e){var o=Lo();return k5(o,r,e)}function bO(r,e){var o=be();return wO(o,Me.memoizedState,r,e)}function uO(r,e){var o=be();return Me===null?k5(o,r,e):wO(o,Me.memoizedState,r,e)}function k5(r,e,o){if(o===void 0||(vi&1073741824)!==0&&(ar&261930)===0)return r.memoizedState=e;return r.memoizedState=o,r=PA(),Ir.lanes|=r,tn|=r,o}function wO(r,e,o,l){if(No(o,e))return o;if(Yv.current!==null)return r=k5(r,o,l),No(r,e)||(de=!0),r;if((vi&42)===0||(vi&1073741824)!==0&&(ar&261930)===0)return de=!0,r.memoizedState=o;return r=PA(),Ir.lanes|=r,tn|=r,e}function Qb(){Z.asyncTransitions--}function PO(r,e,o,l,n){var t=ve.p;ve.p=t!==0&&t<cg?t:cg;var b=Z.T,w={};w._updatedFibers=new Set,Z.T=w,V5(r,!1,e,o);try{var q=n(),M=Z.S;if(M!==null&&M(w,q),q!==null&&typeof q==="object"&&typeof q.then==="function"){Z.asyncTransitions++,q.then(Qb,Qb);var U=qG(q,l);X0(r,e,U,vg(r))}else X0(r,e,l,vg(r))}catch($){X0(r,e,{then:function(){},status:"rejected",reason:$},vg(r))}finally{ve.p=t,b!==null&&w.types!==null&&(b.types!==null&&b.types!==w.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=w.types),Z.T=b,b===null&&w._updatedFibers&&(r=w._updatedFibers.size,w._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function D5(r,e,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var n=OO(r).queue;OG(r),PO(r,n,e,Wt,o===null?G:function(){return AO(r),o(l)})}function OO(r){var e=r.memoizedState;if(e!==null)return e;e={memoizedState:Wt,baseState:Wt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:Wt},next:null};var o={};return e.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:o},next:null},r.memoizedState=e,r=r.alternate,r!==null&&(r.memoizedState=e),e}function AO(r){Z.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var e=OO(r);e.next===null&&(e=r.alternate.memoizedState),X0(r,e.next.queue,{},vg(r))}function a5(){var r=$5(!1);return r=PO.bind(null,Ir,r.queue,!0,!1),Lo().memoizedState=r,[!1,r]}function qO(){var r=ct(kg)[0],e=be().memoizedState;return[typeof r==="boolean"?r:m0(r),e]}function HO(){var r=G0(kg)[0],e=be().memoizedState;return[typeof r==="boolean"?r:m0(r),e]}function En(){return $e(Ih)}function c5(){var r=Lo(),e=Re.identifierPrefix;if(jr){var o=gi,l=oi;o=(l&~(1<<32-Io(l)-1)).toString(32)+o,e="_"+e+"R_"+o,o=Ku++,0<o&&(e+="H"+o.toString(32)),e+="_"}else o=rJ++,e="_"+e+"r_"+o.toString(32)+"_";return r.memoizedState=e}function y5(){return Lo().memoizedState=GG.bind(null,Ir)}function GG(r,e){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=vg(o),n=Ni(l),t=Bi(o,n,l);t!==null&&(bl(l,"refresh()",r),Be(t,o,l),M0(t,o,l)),r=u5(),e!==null&&e!==void 0&&t!==null&&console.error("The seed argument is not enabled outside experimental channels."),n.payload={cache:r};return}o=o.return}}function XG(r,e,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=vg(r);var n={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Kb(r)?RO(e,n):(n=sw(r,e,n,l),n!==null&&(bl(l,"dispatch()",r),Be(n,r,l),WO(n,e,l)))}function MO(r,e,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=vg(r),X0(r,e,o,l)&&bl(l,"setState()",r)}function X0(r,e,o,l){var n={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kb(r))RO(e,n);else{var t=r.alternate;if(r.lanes===0&&(t===null||t.lanes===0)&&(t=e.lastRenderedReducer,t!==null)){var b=Z.H;Z.H=_g;try{var w=e.lastRenderedState,q=t(w,o);if(n.hasEagerState=!0,n.eagerState=q,No(q,w))return rb(r,e,n,0),Re===null&&s1(),!1}catch(M){}finally{Z.H=b}}if(o=sw(r,e,n,l),o!==null)return Be(o,r,l),WO(o,e,l),!0}return!1}function V5(r,e,o,l){if(Z.T===null&&lt===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:G2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Kb(r)){if(e)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else e=sw(r,o,l,2),e!==null&&(bl(2,"setOptimistic()",r),Be(e,r,2))}function Kb(r){var e=r.alternate;return r===Ir||e!==null&&e===Ir}function RO(r,e){Qv=Qu=!0;var o=r.pending;o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e}function WO(r,e,o){if((o&4194048)!==0){var l=e.lanes;l&=r.pendingLanes,o|=l,e.lanes=o,xn(r,o)}}function _5(r){if(r!==null&&typeof r!=="function"){var e=String(r);HM.has(e)||(HM.add(e),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E5(r,e,o,l){var n=r.memoizedState,t=o(l,n);if(r.mode&Ko){We(!0);try{t=o(l,n)}finally{We(!1)}}t===void 0&&(e=y(e)||"Component",PM.has(e)||(PM.add(e),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",e))),n=t===null||t===void 0?n:Er({},n,t),r.memoizedState=n,r.lanes===0&&(r.updateQueue.baseState=n)}function mO(r,e,o,l,n,t,b){var w=r.stateNode;if(typeof w.shouldComponentUpdate==="function"){if(o=w.shouldComponentUpdate(l,t,b),r.mode&Ko){We(!0);try{o=w.shouldComponentUpdate(l,t,b)}finally{We(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(e)||"Component"),o}return e.prototype&&e.prototype.isPureReactComponent?!u0(o,l)||!u0(n,t):!0}function GO(r,e,o,l){var n=e.state;typeof e.componentWillReceiveProps==="function"&&e.componentWillReceiveProps(o,l),typeof e.UNSAFE_componentWillReceiveProps==="function"&&e.UNSAFE_componentWillReceiveProps(o,l),e.state!==n&&(r=x(r)||"Component",vM.has(r)||(vM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),D4.enqueueReplaceState(e,e.state,null))}function fn(r,e){var o=e;if("ref"in e){o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}if(r=r.defaultProps){o===e&&(o=Er({},o));for(var n in r)o[n]===void 0&&(o[n]=r[n])}return o}function XO(r){R4(r),console.warn(`%s

%s
`,Kv?"An error occurred in the <"+Kv+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function YO(r){var e=Kv?"The above error occurred in the <"+Kv+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((a4||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,e,o].slice(0),typeof r[0]==="string"?r.splice(0,1,sM+" "+r[0],rR,su+l+su,eR):r.splice(0,0,sM,rR,su+l+su,eR),r.unshift(console),l=mJ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,e,o)}function JO(r){R4(r)}function Ub(r,e){try{Kv=e.source?x(e.source):null,a4=null;var o=e.value;if(Z.actQueue!==null)Z.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:e.stack})}}catch(n){setTimeout(function(){throw n})}}function zO(r,e,o){try{Kv=o.source?x(o.source):null,a4=x(e);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function f5(r,e,o){return o=Ni(o),o.tag=B4,o.payload={element:null},o.callback=function(){hr(e.source,Ub,r,e)},o}function p5(r){return r=Ni(r),r.tag=B4,r}function j5(r,e,o,l){var n=o.type.getDerivedStateFromError;if(typeof n==="function"){var t=l.value;r.payload=function(){return n(t)},r.callback=function(){R8(o),hr(l.source,zO,e,o,l)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch==="function"&&(r.callback=function(){R8(o),hr(l.source,zO,e,o,l),typeof n!=="function"&&(hn===null?hn=new Set([this]):hn.add(this)),pY(this,l),typeof n==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",x(o)||"Unknown")})}function YG(r,e,o,l,n){if(o.flags|=32768,Ql&&L0(r,n),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(e=o.alternate,e!==null&&Dt(e,o,n,!0),jr&&($l=!0),o=Og.current,o!==null){switch(o.tag){case 31:case 13:return Fg===null?Zb():o.alternate===null&&xe===wi&&(xe=Lu),o.flags&=-257,o.flags|=65536,o.lanes=n,l===Yu?o.flags|=16384:(e=o.updateQueue,e===null?o.updateQueue=new Set([l]):e.add(l),M2(r,l,n)),!1;case 22:return o.flags|=65536,l===Yu?o.flags|=16384:(e=o.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=e):(o=e.retryQueue,o===null?e.retryQueue=new Set([l]):o.add(l)),M2(r,l,n)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return M2(r,l,n),Zb(),!1}if(jr)return $l=!0,e=Og.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==J4&&P0(lg(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==J4&&P0(lg(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,n&=-n,r.lanes|=n,l=lg(l,o),n=f5(r.stateNode,l,n),Ab(r,n),xe!==ln&&(xe=bt)),!1;var t=lg(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(Xh===null?Xh=[t]:Xh.push(t),xe!==ln&&(xe=bt),e===null)return!0;l=lg(l,o),o=e;do{switch(o.tag){case 3:return o.flags|=65536,r=n&-n,o.lanes|=r,r=f5(o.stateNode,l,r),Ab(o,r),!1;case 1:if(e=o.type,t=o.stateNode,(o.flags&128)===0&&(typeof e.getDerivedStateFromError==="function"||t!==null&&typeof t.componentDidCatch==="function"&&(hn===null||!hn.has(t))))return o.flags|=65536,n&=-n,o.lanes|=n,n=p5(n),j5(n,r,o,l),Ab(o,n),!1}o=o.return}while(o!==null);return!1}function qo(r,e,o,l){e.child=r===null?jH(e,null,o,l):vt(e,r.child,o,l)}function QO(r,e,o,l,n){o=o.render;var t=e.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;if(cn(e),l=G5(r,e,o,b,t,n),w=Y5(),r!==null&&!de)return J5(r,e,n),pl(r,e,n);return jr&&w&&i5(e),e.flags|=1,qo(r,e,l,n),e.child}function KO(r,e,o,l,n){if(r===null){var t=o.type;if(typeof t==="function"&&!e5(t)&&t.defaultProps===void 0&&o.compare===null)return o=Tn(t),e.tag=15,e.type=o,s5(e,t),UO(r,e,o,l,n);return r=o5(o.type,null,l,e,e.mode,n),r.ref=e.ref,r.return=e,e.child=r}if(t=r.child,!i2(r,n)){var b=t.memoizedProps;if(o=o.compare,o=o!==null?o:u0,o(b,l)&&r.ref===e.ref)return pl(r,e,n)}return e.flags|=1,r=Vl(t,l),r.ref=e.ref,r.return=e,e.child=r}function UO(r,e,o,l,n){if(r!==null){var t=r.memoizedProps;if(u0(t,l)&&r.ref===e.ref&&e.type===r.type)if(de=!1,e.pendingProps=l=t,i2(r,n))(r.flags&131072)!==0&&(de=!0);else return e.lanes=r.lanes,pl(r,e,n)}return d5(r,e,o,l,n)}function $O(r,e,o,l){var n=l.children,t=r!==null?r.memoizedState:null;if(r===null&&e.stateNode===null&&(e.stateNode={_visibility:d0,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(t=t!==null?t.baseLanes|o:o,r!==null){l=e.child=r.child;for(n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~t}else l=0,e.child=null;return LO(r,e,t,o,l)}if((o&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},r!==null&&hb(e,t!==null?t.cachePool:null),t!==null?V8(e,t):M5(e),_8(e);else return l=e.lanes=536870912,LO(r,e,t!==null?t.baseLanes|o:o,o,l)}else t!==null?(hb(e,t.cachePool),V8(e,t),Zi(e),e.memoizedState=null):(r!==null&&hb(e,null),M5(e),Zi(e));return qo(r,e,n,o),e.child}function Y0(r,e){return r!==null&&r.tag===22||e.stateNode!==null||(e.stateNode={_visibility:d0,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function LO(r,e,o,l,n){var t=O5();return t=t===null?null:{parent:fe._currentValue,pool:t},e.memoizedState={baseLanes:o,cachePool:t},r!==null&&hb(e,null),M5(e),_8(e),r!==null&&Dt(r,e,l,!0),e.childLanes=n,null}function $b(r,e){var o=e.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),e=Ib({mode:e.mode,children:e.children},r.mode),e.ref=r.ref,r.child=e,e.return=r,e}function IO(r,e,o){return vt(e,r.child,null,o),r=$b(e,e.pendingProps),r.flags|=2,tg(e),e.memoizedState=null,r}function JG(r,e,o){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,r===null){if(jr){if(l.mode==="hidden")return r=$b(e,l),e.lanes=536870912,Y0(null,r);if(W5(e),(r=ze)?(o=gq(r,Lg),o=o!==null&&o.data===qt?o:null,o!==null&&(l={dehydrated:o,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},e.memoizedState=l,l=G8(o),l.return=e,e.child=l,Ro=e,ze=null)):o=null,o===null)throw gb(e,r),Ii(e);return e.lanes=536870912,null}return $b(e,l)}var t=r.memoizedState;if(t!==null){var b=t.dehydrated;if(W5(e),n)if(e.flags&256)e.flags&=-257,e=IO(r,e,o);else if(e.memoizedState!==null)e.child=r.child,e.flags|=128,e=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(z8(),(o&536870912)!==0&&Cb(e),de||Dt(r,e,o,!1),n=(o&r.childLanes)!==0,de||n){if(l=Re,l!==null&&(b=Nn(l,o),b!==0&&b!==t.retryLane))throw t.retryLane=b,zo(r,b),Be(l,r,b),c4;Zb(),e=IO(r,e,o)}else r=t.treeContext,ze=hg(b.nextSibling),Ro=e,jr=!0,ji=null,$l=!1,Pg=null,Lg=!1,r!==null&&J8(e,r),e=$b(e,l),e.flags|=4096;return e}return t=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&Cb(e),r=Vl(t,l),r.ref=e.ref,e.child=r,r.return=e,r}function Lb(r,e){var o=e.ref;if(o===null)r!==null&&r.ref!==null&&(e.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)e.flags|=4194816}}function d5(r,e,o,l,n){if(o.prototype&&typeof o.prototype.render==="function"){var t=y(o)||"Unknown";MM[t]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",t,t),MM[t]=!0)}if(e.mode&Ko&&Vg.recordLegacyContextWarning(e,null),r===null&&(s5(e,e.type),o.contextTypes&&(t=y(o)||"Unknown",WM[t]||(WM[t]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",t)))),cn(e),o=G5(r,e,o,l,void 0,n),l=Y5(),r!==null&&!de)return J5(r,e,n),pl(r,e,n);return jr&&l&&i5(e),e.flags|=1,qo(r,e,o,n),e.child}function FO(r,e,o,l,n,t){if(cn(e),bi=-1,qh=r!==null&&r.type!==e.type,e.updateQueue=null,o=X5(e,l,o,n),E8(r,e),l=Y5(),r!==null&&!de)return J5(r,e,t),pl(r,e,t);return jr&&l&&i5(e),e.flags|=1,qo(r,e,o,t),e.child}function xO(r,e,o,l,n){switch(O(e)){case!1:var t=e.stateNode,b=new e.type(e.memoizedProps,t.context).state;t.updater.enqueueSetState(t,b,null);break;case!0:e.flags|=128,e.flags|=65536,t=Error("Simulated error coming from DevTools");var w=n&-n;if(e.lanes|=w,b=Re,b===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w=p5(w),j5(w,b,e,lg(t,e)),Ab(e,w)}if(cn(e),e.stateNode===null){if(b=pi,t=o.contextType,"contextType"in o&&t!==null&&(t===void 0||t.$$typeof!==Yl)&&!qM.has(o)&&(qM.add(o),w=t===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof t!=="object"?" However, it is set to a "+typeof t+".":t.$$typeof===y2?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(t).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(o)||"Component",w)),typeof t==="object"&&t!==null&&(b=$e(t)),t=new o(l,b),e.mode&Ko){We(!0);try{t=new o(l,b)}finally{We(!1)}}if(b=e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=D4,e.stateNode=t,t._reactInternals=e,t._reactInternalInstance=tM,typeof o.getDerivedStateFromProps==="function"&&b===null&&(b=y(o)||"Component",hM.has(b)||(hM.add(b),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",b,t.state===null?"null":"undefined",b))),typeof o.getDerivedStateFromProps==="function"||typeof t.getSnapshotBeforeUpdate==="function"){var q=w=b=null;if(typeof t.componentWillMount==="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0?b="componentWillMount":typeof t.UNSAFE_componentWillMount==="function"&&(b="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps==="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0?w="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps==="function"&&(w="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate==="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0?q="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate==="function"&&(q="UNSAFE_componentWillUpdate"),b!==null||w!==null||q!==null){t=y(o)||"Component";var M=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";uM.has(t)||(uM.add(t),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,t,M,b!==null?`
  `+b:"",w!==null?`
  `+w:"",q!==null?`
  `+q:""))}}t=e.stateNode,b=y(o)||"Component",t.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",b):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",b)),!t.getInitialState||t.getInitialState.isReactClassApproved||t.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",b),t.getDefaultProps&&!t.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",b),t.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",b),o.childContextTypes&&!AM.has(o)&&(AM.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",b)),o.contextTypes&&!OM.has(o)&&(OM.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",b)),typeof t.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",b),o.prototype&&o.prototype.isPureReactComponent&&typeof t.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(o)||"A pure component"),typeof t.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",b),typeof t.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",b),typeof t.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",b),typeof t.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",b),w=t.props!==l,t.props!==void 0&&w&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",b),t.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",b,b),typeof t.getSnapshotBeforeUpdate!=="function"||typeof t.componentDidUpdate==="function"||bM.has(o)||(bM.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(o))),typeof t.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof t.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",b),(w=t.state)&&(typeof w!=="object"||go(w))&&console.error("%s.state: must be set to an object or null",b),typeof t.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",b),t=e.stateNode,t.props=l,t.state=e.memoizedState,t.refs={},q5(e),b=o.contextType,t.context=typeof b==="object"&&b!==null?$e(b):pi,t.state===l&&(b=y(o)||"Component",wM.has(b)||(wM.add(b),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",b))),e.mode&Ko&&Vg.recordLegacyContextWarning(e,t),Vg.recordUnsafeLifecycleWarnings(e,t),t.state=e.memoizedState,b=o.getDerivedStateFromProps,typeof b==="function"&&(E5(e,o,b,l),t.state=e.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof t.getSnapshotBeforeUpdate==="function"||typeof t.UNSAFE_componentWillMount!=="function"&&typeof t.componentWillMount!=="function"||(b=t.state,typeof t.componentWillMount==="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount==="function"&&t.UNSAFE_componentWillMount(),b!==t.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",x(e)||"Component"),D4.enqueueReplaceState(t,t.state,null)),W0(e,l,t,n),R0(),t.state=e.memoizedState),typeof t.componentDidMount==="function"&&(e.flags|=4194308),(e.mode&yg)!==$r&&(e.flags|=134217728),t=!0}else if(r===null){t=e.stateNode;var U=e.memoizedProps;w=fn(o,U),t.props=w;var $=t.context;q=o.contextType,b=pi,typeof q==="object"&&q!==null&&(b=$e(q)),M=o.getDerivedStateFromProps,q=typeof M==="function"||typeof t.getSnapshotBeforeUpdate==="function",U=e.pendingProps!==U,q||typeof t.UNSAFE_componentWillReceiveProps!=="function"&&typeof t.componentWillReceiveProps!=="function"||(U||$!==b)&&GO(e,t,l,b),gn=!1;var J=e.memoizedState;t.state=J,W0(e,l,t,n),R0(),$=e.memoizedState,U||J!==$||gn?(typeof M==="function"&&(E5(e,o,M,l),$=e.memoizedState),(w=gn||mO(e,o,w,l,J,$,b))?(q||typeof t.UNSAFE_componentWillMount!=="function"&&typeof t.componentWillMount!=="function"||(typeof t.componentWillMount==="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount==="function"&&t.UNSAFE_componentWillMount()),typeof t.componentDidMount==="function"&&(e.flags|=4194308),(e.mode&yg)!==$r&&(e.flags|=134217728)):(typeof t.componentDidMount==="function"&&(e.flags|=4194308),(e.mode&yg)!==$r&&(e.flags|=134217728),e.memoizedProps=l,e.memoizedState=$),t.props=l,t.state=$,t.context=b,t=w):(typeof t.componentDidMount==="function"&&(e.flags|=4194308),(e.mode&yg)!==$r&&(e.flags|=134217728),t=!1)}else{t=e.stateNode,H5(r,e),b=e.memoizedProps,q=fn(o,b),t.props=q,M=e.pendingProps,J=t.context,$=o.contextType,w=pi,typeof $==="object"&&$!==null&&(w=$e($)),U=o.getDerivedStateFromProps,($=typeof U==="function"||typeof t.getSnapshotBeforeUpdate==="function")||typeof t.UNSAFE_componentWillReceiveProps!=="function"&&typeof t.componentWillReceiveProps!=="function"||(b!==M||J!==w)&&GO(e,t,l,w),gn=!1,J=e.memoizedState,t.state=J,W0(e,l,t,n),R0();var F=e.memoizedState;b!==M||J!==F||gn||r!==null&&r.dependencies!==null&&ib(r.dependencies)?(typeof U==="function"&&(E5(e,o,U,l),F=e.memoizedState),(q=gn||mO(e,o,q,l,J,F,w)||r!==null&&r.dependencies!==null&&ib(r.dependencies))?($||typeof t.UNSAFE_componentWillUpdate!=="function"&&typeof t.componentWillUpdate!=="function"||(typeof t.componentWillUpdate==="function"&&t.componentWillUpdate(l,F,w),typeof t.UNSAFE_componentWillUpdate==="function"&&t.UNSAFE_componentWillUpdate(l,F,w)),typeof t.componentDidUpdate==="function"&&(e.flags|=4),typeof t.getSnapshotBeforeUpdate==="function"&&(e.flags|=1024)):(typeof t.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(e.flags|=4),typeof t.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=F),t.props=l,t.state=F,t.context=w,t=q):(typeof t.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(e.flags|=4),typeof t.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(e.flags|=1024),t=!1)}if(w=t,Lb(r,e),b=(e.flags&128)!==0,w||b){if(w=e.stateNode,co(e),b&&typeof o.getDerivedStateFromError!=="function")o=null,Bo=-1;else if(o=CH(w),e.mode&Ko){We(!0);try{CH(w)}finally{We(!1)}}e.flags|=1,r!==null&&b?(e.child=vt(e,r.child,null,n),e.child=vt(e,null,o,n)):qo(r,e,o,n),e.memoizedState=w.state,r=e.child}else r=pl(r,e,n);return n=e.stateNode,t&&n.props!==l&&(Uv||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",x(e)||"a component"),Uv=!0),r}function NO(r,e,o,l){return an(),e.flags|=256,qo(r,e,o,l),e.child}function s5(r,e){e&&e.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,e.displayName||e.name||"Component"),typeof e.getDerivedStateFromProps==="function"&&(r=y(e)||"Unknown",mM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),mM[r]=!0)),typeof e.contextType==="object"&&e.contextType!==null&&(e=y(e)||"Unknown",RM[e]||(console.error("%s: Function components do not support contextType.",e),RM[e]=!0))}function r2(r){return{baseLanes:r,cachePool:F8()}}function e2(r,e,o){return r=r!==null?r.childLanes&~o:0,e&&(r|=jo),r}function BO(r,e,o){var l,n=e.pendingProps;P(e)&&(e.flags|=128);var t=!1,b=(e.flags&128)!==0;if((l=b)||(l=r!==null&&r.memoizedState===null?!1:(ae.current&Oh)!==0),l&&(t=!0,e.flags&=-129),l=(e.flags&32)!==0,e.flags&=-33,r===null){if(jr){if(t?Ci(e):Zi(e),(r=ze)?(o=gq(r,Lg),o=o!==null&&o.data!==qt?o:null,o!==null&&(l={dehydrated:o,treeContext:Y8(),retryLane:536870912,hydrationErrors:null},e.memoizedState=l,l=G8(o),l.return=e,e.child=l,Ro=e,ze=null)):o=null,o===null)throw gb(e,r),Ii(e);return x2(o)?e.lanes=32:e.lanes=536870912,null}var w=n.children;if(n=n.fallback,t){Zi(e);var q=e.mode;return w=Ib({mode:"hidden",children:w},q),n=kn(n,q,o,null),w.return=e,n.return=e,w.sibling=n,e.child=w,n=e.child,n.memoizedState=r2(o),n.childLanes=e2(r,l,o),e.memoizedState=y4,Y0(null,n)}return Ci(e),o2(e,w)}var M=r.memoizedState;if(M!==null){var U=M.dehydrated;if(U!==null){if(b)e.flags&256?(Ci(e),e.flags&=-257,e=g2(r,e,o)):e.memoizedState!==null?(Zi(e),e.child=r.child,e.flags|=128,e=null):(Zi(e),w=n.fallback,q=e.mode,n=Ib({mode:"visible",children:n.children},q),w=kn(w,q,o,null),w.flags|=2,n.return=e,w.return=e,n.sibling=w,e.child=n,vt(e,r.child,null,o),n=e.child,n.memoizedState=r2(o),n.childLanes=e2(r,l,o),e.memoizedState=y4,e=Y0(null,n));else if(Ci(e),z8(),(o&536870912)!==0&&Cb(e),x2(U)){if(l=U.nextSibling&&U.nextSibling.dataset,l){w=l.dgst;var $=l.msg;q=l.stck;var J=l.cstck}t=$,l=w,n=q,U=J,w=t,q=U,w=w?Error(w):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),w.stack=n||"",w.digest=l,l=q===void 0?null:q,n={value:w,source:null,stack:l},typeof l==="string"&&Y4.set(w,n),P0(n),e=g2(r,e,o)}else if(de||Dt(r,e,o,!1),l=(o&r.childLanes)!==0,de||l){if(l=Re,l!==null&&(n=Nn(l,o),n!==0&&n!==M.retryLane))throw M.retryLane=n,zo(r,n),Be(l,r,n),c4;F2(U)||Zb(),e=g2(r,e,o)}else F2(U)?(e.flags|=192,e.child=r.child,e=null):(r=M.treeContext,ze=hg(U.nextSibling),Ro=e,jr=!0,ji=null,$l=!1,Pg=null,Lg=!1,r!==null&&J8(e,r),e=o2(e,n.children),e.flags|=4096);return e}}if(t)return Zi(e),w=n.fallback,q=e.mode,J=r.child,U=J.sibling,n=Vl(J,{mode:"hidden",children:n.children}),n.subtreeFlags=J.subtreeFlags&65011712,U!==null?w=Vl(U,w):(w=kn(w,q,o,null),w.flags|=2),w.return=e,n.return=e,n.sibling=w,e.child=n,Y0(null,n),n=e.child,w=r.child.memoizedState,w===null?w=r2(o):(q=w.cachePool,q!==null?(J=fe._currentValue,q=q.parent!==J?{parent:J,pool:J}:q):q=F8(),w={baseLanes:w.baseLanes|o,cachePool:q}),n.memoizedState=w,n.childLanes=e2(r,l,o),e.memoizedState=y4,Y0(r.child,n);return M!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&Cb(e),Ci(e),o=r.child,r=o.sibling,o=Vl(o,{mode:"visible",children:n.children}),o.return=e,o.sibling=null,r!==null&&(l=e.deletions,l===null?(e.deletions=[r],e.flags|=16):l.push(r)),e.child=o,e.memoizedState=null,o}function o2(r,e){return e=Ib({mode:"visible",children:e},r.mode),e.return=r,r.child=e}function Ib(r,e){return r=X(22,r,null,e),r.lanes=0,r}function g2(r,e,o){return vt(e,r.child,null,o),r=o2(e,e.pendingProps.children),r.flags|=2,e.memoizedState=null,r}function CO(r,e,o){r.lanes|=e;var l=r.alternate;l!==null&&(l.lanes|=e),h5(r.return,e,o)}function l2(r,e,o,l,n,t){var b=r.memoizedState;b===null?r.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:n,treeForkCount:t}:(b.isBackwards=e,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=o,b.tailMode=n,b.treeForkCount=t)}function ZO(r,e,o){var l=e.pendingProps,n=l.revealOrder,t=l.tail,b=l.children,w=ae.current;if((l=(w&Oh)!==0)?(w=w&Jv|Oh,e.flags|=128):w&=Jv,mr(ae,w,e),w=n==null?"null":n,n!=="forwards"&&n!=="unstable_legacy-backwards"&&n!=="together"&&n!=="independent"&&!GM[w])if(GM[w]=!0,n==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(n==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof n==="string")switch(n.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',n,n.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',n,n.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',n)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',n);if(w=t==null?"null":t,!$u[w])if(t==null){if(n==="forwards"||n==="backwards"||n==="unstable_legacy-backwards")$u[w]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else t!=="visible"&&t!=="collapsed"&&t!=="hidden"?($u[w]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',t)):n!=="forwards"&&n!=="backwards"&&n!=="unstable_legacy-backwards"&&($u[w]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',t));r:if((n==="forwards"||n==="backwards"||n==="unstable_legacy-backwards")&&b!==void 0&&b!==null&&b!==!1)if(go(b)){for(w=0;w<b.length;w++)if(!a8(b[w],w))break r}else if(w=N(b),typeof w==="function"){if(w=w.call(b))for(var q=w.next(),M=0;!q.done;q=w.next()){if(!a8(q.value,M))break r;M++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',n);if(qo(r,e,b,o),jr?(Li(),b=s0):b=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=e.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&CO(r,o,e);else if(r.tag===19)CO(r,o,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break r;for(;r.sibling===null;){if(r.return===null||r.return===e)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(n){case"forwards":o=e.child;for(n=null;o!==null;)r=o.alternate,r!==null&&qb(r)===null&&(n=o),o=o.sibling;o=n,o===null?(n=e.child,e.child=null):(n=o.sibling,o.sibling=null),l2(e,!1,n,o,t,b);break;case"backwards":case"unstable_legacy-backwards":o=null,n=e.child;for(e.child=null;n!==null;){if(r=n.alternate,r!==null&&qb(r)===null){e.child=n;break}r=n.sibling,n.sibling=o,o=n,n=r}l2(e,!0,o,null,t,b);break;case"together":l2(e,!1,null,null,void 0,b);break;default:e.memoizedState=null}return e.child}function pl(r,e,o){if(r!==null&&(e.dependencies=r.dependencies),Bo=-1,tn|=e.lanes,(o&e.childLanes)===0)if(r!==null){if(Dt(r,e,o,!1),(o&e.childLanes)===0)return null}else return null;if(r!==null&&e.child!==r.child)throw Error("Resuming work not yet implemented.");if(e.child!==null){r=e.child,o=Vl(r,r.pendingProps),e.child=o;for(o.return=e;r.sibling!==null;)r=r.sibling,o=o.sibling=Vl(r,r.pendingProps),o.return=e;o.sibling=null}return e.child}function i2(r,e){if((r.lanes&e)!==0)return!0;return r=r.dependencies,r!==null&&ib(r)?!0:!1}function zG(r,e,o){switch(e.tag){case 3:k(e,e.stateNode.containerInfo),Fi(e,fe,r.memoizedState.cache),an();break;case 27:case 5:Kr(e);break;case 4:k(e,e.stateNode.containerInfo);break;case 10:Fi(e,e.type,e.memoizedProps.value);break;case 12:(o&e.childLanes)!==0&&(e.flags|=4),e.flags|=2048;var l=e.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(e.memoizedState!==null)return e.flags|=128,W5(e),null;break;case 13:if(l=e.memoizedState,l!==null){if(l.dehydrated!==null)return Ci(e),e.flags|=128,null;if((o&e.child.childLanes)!==0)return BO(r,e,o);return Ci(e),r=pl(r,e,o),r!==null?r.sibling:null}Ci(e);break;case 19:var n=(r.flags&128)!==0;if(l=(o&e.childLanes)!==0,l||(Dt(r,e,o,!1),l=(o&e.childLanes)!==0),n){if(l)return ZO(r,e,o);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),mr(ae,ae.current,e),l)break;else return null;case 22:return e.lanes=0,$O(r,e,o,e.pendingProps);case 24:Fi(e,fe,r.memoizedState.cache)}return pl(r,e,o)}function n2(r,e,o){if(e._debugNeedsRemount&&r!==null){o=o5(e.type,e.key,e.pendingProps,e._debugOwner||null,e.mode,e.lanes),o._debugStack=e._debugStack,o._debugTask=e._debugTask;var l=e.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,e.alternate=null,o.index=e.index,o.sibling=e.sibling,o.return=e.return,o.ref=e.ref,o._debugInfo=e._debugInfo,e===l.child)l.child=o;else{var n=l.child;if(n===null)throw Error("Expected parent to have a child.");for(;n.sibling!==e;)if(n=n.sibling,n===null)throw Error("Expected to find the previous sibling.");n.sibling=o}return e=l.deletions,e===null?(l.deletions=[r],l.flags|=16):e.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==e.pendingProps||e.type!==r.type)de=!0;else{if(!i2(r,o)&&(e.flags&128)===0)return de=!1,zG(r,e,o);de=(r.flags&131072)!==0?!0:!1}else{if(de=!1,l=jr)Li(),l=(e.flags&1048576)!==0;l&&(l=e.index,Li(),X8(e,s0,l))}switch(e.lanes=0,e.tag){case 16:r:if(l=e.pendingProps,r=xi(e.elementType),e.type=r,typeof r==="function")e5(r)?(l=fn(r,l),e.tag=1,e.type=r=Tn(r),e=xO(null,e,r,l,o)):(e.tag=0,s5(e,r),e.type=r=Tn(r),e=d5(null,e,r,l,o));else{if(r!==void 0&&r!==null){if(n=r.$$typeof,n===T0){e.tag=11,e.type=r=r5(r),e=QO(null,e,r,l,o);break r}else if(n===db){e.tag=14,e=KO(null,e,r,l,o);break r}}throw e="",r!==null&&typeof r==="object"&&r.$$typeof===bg&&(e=" Did you wrap a component in React.lazy() more than once?"),o=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+e)}return e;case 0:return d5(r,e,e.type,e.pendingProps,o);case 1:return l=e.type,n=fn(l,e.pendingProps),xO(r,e,l,n,o);case 3:r:{if(k(e,e.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=e.pendingProps;var t=e.memoizedState;n=t.element,H5(r,e),W0(e,l,null,o);var b=e.memoizedState;if(l=b.cache,Fi(e,fe,l),l!==t.cache&&b5(e,[fe],o,!0),R0(),l=b.element,t.isDehydrated)if(t={element:l,isDehydrated:!1,cache:b.cache},e.updateQueue.baseState=t,e.memoizedState=t,e.flags&256){e=NO(r,e,l,o);break r}else if(l!==n){n=lg(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),e),P0(n),e=NO(r,e,l,o);break r}else{switch(r=e.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}ze=hg(r.firstChild),Ro=e,jr=!0,ji=null,$l=!1,Pg=null,Lg=!0,o=jH(e,null,l,o);for(e.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(an(),l===n){e=pl(r,e,o);break r}qo(r,e,l,o)}e=e.child}return e;case 26:return Lb(r,e),r===null?(o=hq(e.type,null,e.pendingProps,null))?e.memoizedState=o:jr||(o=e.type,r=e.pendingProps,l=Zr(ci.current),l=Db(l).createElement(o),l[Mo]=e,l[Fo]=r,Ho(l,o,r),zr(l),e.stateNode=l):e.memoizedState=hq(e.type,r.memoizedProps,e.pendingProps,r.memoizedState),null;case 27:return Kr(e),r===null&&jr&&(l=Zr(ci.current),n=nr(),l=e.stateNode=tq(e.type,e.pendingProps,l,n,!1),$l||(n=fA(l,e.type,e.pendingProps,n),n!==null&&(Dn(e,0).serverProps=n)),Ro=e,Lg=!0,n=ze,Di(e.type)?(O6=n,ze=hg(l.firstChild)):ze=n),qo(r,e,e.pendingProps.children,o),Lb(r,e),r===null&&(e.flags|=4194304),e.child;case 5:return r===null&&jr&&(t=nr(),l=Vw(e.type,t.ancestorInfo),n=ze,(b=!n)||(b=OX(n,e.type,e.pendingProps,Lg),b!==null?(e.stateNode=b,$l||(t=fA(b,e.type,e.pendingProps,t),t!==null&&(Dn(e,0).serverProps=t)),Ro=e,ze=hg(b.firstChild),Lg=!1,t=!0):t=!1,b=!t),b&&(l&&gb(e,n),Ii(e))),Kr(e),n=e.type,t=e.pendingProps,b=r!==null?r.memoizedProps:null,l=t.children,L2(n,t)?l=null:b!==null&&L2(n,b)&&(e.flags|=32),e.memoizedState!==null&&(n=G5(r,e,MG,null,null,o),Ih._currentValue=n),Lb(r,e),qo(r,e,l,o),e.child;case 6:return r===null&&jr&&(o=e.pendingProps,r=nr(),l=r.ancestorInfo.current,o=l!=null?_1(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=ze,(l=!r)||(l=AX(r,e.pendingProps,Lg),l!==null?(e.stateNode=l,Ro=e,ze=null,l=!0):l=!1,l=!l),l&&(o&&gb(e,r),Ii(e))),null;case 13:return BO(r,e,o);case 4:return k(e,e.stateNode.containerInfo),l=e.pendingProps,r===null?e.child=vt(e,null,l,o):qo(r,e,l,o),e.child;case 11:return QO(r,e,e.type,e.pendingProps,o);case 7:return qo(r,e,e.pendingProps,o),e.child;case 8:return qo(r,e,e.pendingProps.children,o),e.child;case 12:return e.flags|=4,e.flags|=2048,l=e.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,qo(r,e,e.pendingProps.children,o),e.child;case 10:return l=e.type,n=e.pendingProps,t=n.value,"value"in n||XM||(XM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fi(e,l,t),qo(r,e,n.children,o),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),cn(e),n=$e(n),l=I4(l,n,void 0),e.flags|=1,qo(r,e,l,o),e.child;case 14:return KO(r,e,e.type,e.pendingProps,o);case 15:return UO(r,e,e.type,e.pendingProps,o);case 19:return ZO(r,e,o);case 31:return JG(r,e,o);case 22:return $O(r,e,o,e.pendingProps);case 24:return cn(e),l=$e(fe),r===null?(n=O5(),n===null&&(n=Re,t=u5(),n.pooledCache=t,yn(t),t!==null&&(n.pooledCacheLanes|=o),n=t),e.memoizedState={parent:l,cache:n},q5(e),Fi(e,fe,n)):((r.lanes&o)!==0&&(H5(r,e),W0(e,null,null,o),R0()),n=r.memoizedState,t=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Fi(e,fe,l)):(l=t.cache,Fi(e,fe,l),l!==n.cache&&b5(e,[fe],o,!0))),qo(r,e,e.pendingProps.children,o),e.child;case 29:throw e.pendingProps}throw Error("Unknown unit of work tag ("+e.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function jl(r){r.flags|=4}function t2(r,e,o,l,n){if(e=(r.mode&VY)!==$r)e=!1;if(e){if(r.flags|=16777216,(n&335544128)===n)if(r.stateNode.complete)r.flags|=8192;else if(HA())r.flags|=8192;else throw tt=Yu,x4}else r.flags&=-16777217}function SO(r,e){if(e.type!=="stylesheet"||(e.state.loading&Bg)!==Rt)r.flags&=-16777217;else if(r.flags|=16777216,!Oq(e))if(HA())r.flags|=8192;else throw tt=Yu,x4}function Fb(r,e){e!==null&&(r.flags|=4),r.flags&16384&&(e=r.tag!==22?Bt():536870912,r.lanes|=e,Pt|=e)}function J0(r,e){if(!jr)switch(r.tailMode){case"hidden":e=r.tail;for(var o=null;e!==null;)e.alternate!==null&&(o=e),e=e.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?e||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function me(r){var e=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(e)if((r.mode&kr)!==$r){for(var{selfBaseDuration:n,child:t}=r;t!==null;)o|=t.lanes|t.childLanes,l|=t.subtreeFlags&65011712,l|=t.flags&65011712,n+=t.treeBaseDuration,t=t.sibling;r.treeBaseDuration=n}else for(n=r.child;n!==null;)o|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=r,n=n.sibling;else if((r.mode&kr)!==$r){n=r.actualDuration,t=r.selfBaseDuration;for(var b=r.child;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags,l|=b.flags,n+=b.actualDuration,t+=b.treeBaseDuration,b=b.sibling;r.actualDuration=n,r.treeBaseDuration=t}else for(n=r.child;n!==null;)o|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=r,n=n.sibling;return r.subtreeFlags|=l,r.childLanes=o,e}function QG(r,e,o){var l=e.pendingProps;switch(n5(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(e),null;case 1:return me(e),null;case 3:if(o=e.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),El(fe,e),er(e),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)kt(e)?(v5(),jl(e)):r===null||r.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,t5());return me(e),null;case 26:var{type:n,memoizedState:t}=e;return r===null?(jl(e),t!==null?(me(e),SO(e,t)):(me(e),t2(e,n,null,l,o))):t?t!==r.memoizedState?(jl(e),me(e),SO(e,t)):(me(e),e.flags&=-16777217):(r=r.memoizedProps,r!==l&&jl(e),me(e),t2(e,n,r,l,o)),null;case 27:if(Xr(e),o=Zr(ci.current),n=e.type,r!==null&&e.stateNode!=null)r.memoizedProps!==l&&jl(e);else{if(!l){if(e.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return me(e),null}r=nr(),kt(e)?Q8(e,r):(r=tq(n,l,o,r,!0),e.stateNode=r,jl(e))}return me(e),null;case 5:if(Xr(e),n=e.type,r!==null&&e.stateNode!=null)r.memoizedProps!==l&&jl(e);else{if(!l){if(e.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return me(e),null}var b=nr();if(kt(e))Q8(e,b);else{switch(t=Zr(ci.current),Vw(n,b.ancestorInfo),b=b.context,t=Db(t),b){case Cv:t=t.createElementNS(tv,n);break;case pu:t=t.createElementNS(iu,n);break;default:switch(n){case"svg":t=t.createElementNS(tv,n);break;case"math":t=t.createElementNS(iu,n);break;case"script":t=t.createElement("div"),t.innerHTML="<script></script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is==="string"?t.createElement("select",{is:l.is}):t.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is==="string"?t.createElement(n,{is:l.is}):t.createElement(n),n.indexOf("-")===-1&&(n!==n.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",n),Object.prototype.toString.call(t)!=="[object HTMLUnknownElement]"||ag.call(_M,n)||(_M[n]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",n)))}}t[Mo]=e,t[Fo]=l;r:for(b=e.child;b!==null;){if(b.tag===5||b.tag===6)t.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break r;for(;b.sibling===null;){if(b.return===null||b.return===e)break r;b=b.return}b.sibling.return=b.return,b=b.sibling}e.stateNode=t;r:switch(Ho(t,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&jl(e)}}return me(e),t2(e,e.type,r===null?null:r.memoizedProps,e.pendingProps,o),null;case 6:if(r&&e.stateNode!=null)r.memoizedProps!==l&&jl(e);else{if(typeof l!=="string"&&e.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Zr(ci.current),o=nr(),kt(e)){if(r=e.stateNode,o=e.memoizedProps,n=!$l,l=null,t=Ro,t!==null)switch(t.tag){case 3:n&&(n=iq(r,o,l),n!==null&&(Dn(e,0).serverProps=n));break;case 27:case 5:l=t.memoizedProps,n&&(n=iq(r,o,l),n!==null&&(Dn(e,0).serverProps=n))}r[Mo]=e,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||cA(r.nodeValue,o)?!0:!1,r||Ii(e,!0)}else n=o.ancestorInfo.current,n!=null&&_1(l,n.tag,o.ancestorInfo.implicitRootScope),r=Db(r).createTextNode(l),r[Mo]=e,e.stateNode=r}return me(e),null;case 31:if(o=e.memoizedState,r===null||r.memoizedState!==null){if(l=kt(e),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Mo]=e,me(e),(e.mode&kr)!==$r&&o!==null&&(r=e.child,r!==null&&(e.treeBaseDuration-=r.treeBaseDuration))}else v5(),an(),(e.flags&128)===0&&(o=e.memoizedState=null),e.flags|=4,me(e),(e.mode&kr)!==$r&&o!==null&&(r=e.child,r!==null&&(e.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=t5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(e.flags&256)return tg(e),e;return tg(e),null}if((e.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return me(e),null;case 13:if(l=e.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(n=l,t=kt(e),n!==null&&n.dehydrated!==null){if(r===null){if(!t)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");t[Mo]=e,me(e),(e.mode&kr)!==$r&&n!==null&&(n=e.child,n!==null&&(e.treeBaseDuration-=n.treeBaseDuration))}else v5(),an(),(e.flags&128)===0&&(n=e.memoizedState=null),e.flags|=4,me(e),(e.mode&kr)!==$r&&n!==null&&(n=e.child,n!==null&&(e.treeBaseDuration-=n.treeBaseDuration));n=!1}else n=t5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=n),n=!0;if(!n){if(e.flags&256)return tg(e),e;return tg(e),null}}if(tg(e),(e.flags&128)!==0)return e.lanes=o,(e.mode&kr)!==$r&&q0(e),e;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==n&&(l.flags|=2048)),o!==r&&o&&(e.child.flags|=8192),Fb(e,e.updateQueue),me(e),(e.mode&kr)!==$r&&o&&(r=e.child,r!==null&&(e.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return er(e),r===null&&Y2(e.stateNode.containerInfo),me(e),null;case 10:return El(e.type,e),me(e),null;case 19:if(Hr(ae,e),l=e.memoizedState,l===null)return me(e),null;if(n=(e.flags&128)!==0,t=l.rendering,t===null)if(n)J0(l,!1);else{if(xe!==wi||r!==null&&(r.flags&128)!==0)for(r=e.child;r!==null;){if(t=qb(r),t!==null){e.flags|=128,J0(l,!1),r=t.updateQueue,e.updateQueue=r,Fb(e,r),e.subtreeFlags=0,r=o;for(o=e.child;o!==null;)m8(o,r),o=o.sibling;return mr(ae,ae.current&Jv|Oh,e),jr&&_l(e,l.treeForkCount),e.child}r=r.sibling}l.tail!==null&&vo()>Cu&&(e.flags|=128,n=!0,J0(l,!1),e.lanes=4194304)}else{if(!n)if(r=qb(t),r!==null){if(e.flags|=128,n=!0,r=r.updateQueue,e.updateQueue=r,Fb(e,r),J0(l,!0),l.tail===null&&l.tailMode==="hidden"&&!t.alternate&&!jr)return me(e),null}else 2*vo()-l.renderingStartTime>Cu&&o!==536870912&&(e.flags|=128,n=!0,J0(l,!1),e.lanes=4194304);l.isBackwards?(t.sibling=e.child,e.child=t):(r=l.last,r!==null?r.sibling=t:e.child=t,l.last=t)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=vo(),r.sibling=null,o=ae.current,o=n?o&Jv|Oh:o&Jv,mr(ae,o,e),jr&&_l(e,l.treeForkCount),r;return me(e),null;case 22:case 23:return tg(e),R5(e),l=e.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(o&536870912)!==0&&(e.flags&128)===0&&(me(e),e.subtreeFlags&6&&(e.flags|=8192)):me(e),o=e.updateQueue,o!==null&&Fb(e,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==o&&(e.flags|=2048),r!==null&&Hr(it,e),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),El(fe,e),me(e),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+e.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function KG(r,e){switch(n5(e),e.tag){case 1:return r=e.flags,r&65536?(e.flags=r&-65537|128,(e.mode&kr)!==$r&&q0(e),e):null;case 3:return El(fe,e),er(e),r=e.flags,(r&65536)!==0&&(r&128)===0?(e.flags=r&-65537|128,e):null;case 26:case 27:case 5:return Xr(e),null;case 31:if(e.memoizedState!==null){if(tg(e),e.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");an()}return r=e.flags,r&65536?(e.flags=r&-65537|128,(e.mode&kr)!==$r&&q0(e),e):null;case 13:if(tg(e),r=e.memoizedState,r!==null&&r.dehydrated!==null){if(e.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");an()}return r=e.flags,r&65536?(e.flags=r&-65537|128,(e.mode&kr)!==$r&&q0(e),e):null;case 19:return Hr(ae,e),null;case 4:return er(e),null;case 10:return El(e.type,e),null;case 22:case 23:return tg(e),R5(e),r!==null&&Hr(it,e),r=e.flags,r&65536?(e.flags=r&-65537|128,(e.mode&kr)!==$r&&q0(e),e):null;case 24:return El(fe,e),null;case 25:return null;default:return null}}function TO(r,e){switch(n5(e),e.tag){case 3:El(fe,e),er(e);break;case 26:case 27:case 5:Xr(e);break;case 4:er(e);break;case 31:e.memoizedState!==null&&tg(e);break;case 13:tg(e);break;case 19:Hr(ae,e);break;case 10:El(e.type,e);break;case 22:case 23:tg(e),R5(e),r!==null&&Hr(it,e);break;case 24:El(fe,e)}}function Hl(r){return(r.mode&kr)!==$r}function kO(r,e){Hl(r)?(ql(),z0(e,r),Al()):z0(e,r)}function v2(r,e,o){Hl(r)?(ql(),_t(o,r,e),Al()):_t(o,r,e)}function z0(r,e){try{var o=e.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var n=l.next;o=n;do{if((o.tag&r)===r&&(l=void 0,(r&Co)!==zu&&(xv=!0),l=hr(e,jY,o),(r&Co)!==zu&&(xv=!1),l!==void 0&&typeof l!=="function")){var t=void 0;t=(o.tag&Ag)!==0?"useLayoutEffect":(o.tag&Co)!==0?"useInsertionEffect":"useEffect";var b=void 0;b=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+t+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+t+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,hr(e,function(w,q){console.error("%s must not return anything besides a function, which is used for clean-up.%s",w,q)},t,b)}o=o.next}while(o!==n)}}catch(w){te(e,e.return,w)}}function _t(r,e,o){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var t=n.next;l=t;do{if((l.tag&r)===r){var b=l.inst,w=b.destroy;w!==void 0&&(b.destroy=void 0,(r&Co)!==zu&&(xv=!0),n=e,hr(n,dY,n,o,w),(r&Co)!==zu&&(xv=!1))}l=l.next}while(l!==t)}}catch(q){te(e,e.return,q)}}function DO(r,e){Hl(r)?(ql(),z0(e,r),Al()):z0(e,r)}function h2(r,e,o){Hl(r)?(ql(),_t(o,r,e),Al()):_t(o,r,e)}function aO(r){var e=r.updateQueue;if(e!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Uv||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{hr(r,y8,e,o)}catch(l){te(r,r.return,l)}}}function UG(r,e,o){return r.getSnapshotBeforeUpdate(e,o)}function $G(r,e){var{memoizedProps:o,memoizedState:l}=e;e=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Uv||(e.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),e.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{var n=fn(r.type,o),t=hr(r,UG,e,n,l);o=YM,t!==void 0||o.has(r.type)||(o.add(r.type),hr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",x(r))})),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){te(r,r.return,b)}}function cO(r,e,o){o.props=fn(r.type,r.memoizedProps),o.state=r.memoizedState,Hl(r)?(ql(),hr(r,aH,r,e,o),Al()):hr(r,aH,r,e,o)}function LG(r){var e=r.ref;if(e!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof e==="function")if(Hl(r))try{ql(),r.refCleanup=e(o)}finally{Al()}else r.refCleanup=e(o);else typeof e==="string"?console.error("String refs are no longer supported."):e.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",x(r)),e.current=o}}function Q0(r,e){try{hr(r,LG,r)}catch(o){te(r,e,o)}}function Ml(r,e){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(Hl(r))try{ql(),hr(r,l)}finally{Al(r)}else hr(r,l)}catch(n){te(r,e,n)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(Hl(r))try{ql(),hr(r,o,null)}finally{Al(r)}else hr(r,o,null)}catch(n){te(r,e,n)}else o.current=null}function yO(r,e,o,l){var n=r.memoizedProps,t=n.id,b=n.onCommit;n=n.onRender,e=e===null?"mount":"update",Wu&&(e="nested-update"),typeof n==="function"&&n(t,e,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof b==="function"&&b(t,e,l,o)}function IG(r,e,o,l){var n=r.memoizedProps;r=n.id,n=n.onPostCommit,e=e===null?"mount":"update",Wu&&(e="nested-update"),typeof n==="function"&&n(r,e,l,o)}function VO(r){var{type:e,memoizedProps:o,stateNode:l}=r;try{hr(r,oX,l,e,o,r)}catch(n){te(r,r.return,n)}}function b2(r,e,o){try{hr(r,lX,r.stateNode,r.type,o,e,r)}catch(l){te(r,r.return,l)}}function _O(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Di(r.type)||r.tag===4}function u2(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||_O(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Di(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function w2(r,e,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,e?(rq(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,e)):(rq(o),e=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,e.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||e.onclick!==null||(e.onclick=yl));else if(l!==4&&(l===27&&Di(r.type)&&(o=r.stateNode,e=null),r=r.child,r!==null))for(w2(r,e,o),r=r.sibling;r!==null;)w2(r,e,o),r=r.sibling}function xb(r,e,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,e?o.insertBefore(r,e):o.appendChild(r);else if(l!==4&&(l===27&&Di(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(xb(r,e,o),r=r.sibling;r!==null;)xb(r,e,o),r=r.sibling}function FG(r){for(var e,o=r.return;o!==null;){if(_O(o)){e=o;break}o=o.return}if(e==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(e.tag){case 27:e=e.stateNode,o=u2(r),xb(r,o,e);break;case 5:o=e.stateNode,e.flags&32&&(sA(o),e.flags&=-33),e=u2(r),xb(r,e,o);break;case 3:case 4:e=e.stateNode.containerInfo,o=u2(r),w2(r,o,e);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function EO(r){var{stateNode:e,memoizedProps:o}=r;try{hr(r,WX,r.type,o,e,r)}catch(l){te(r,r.return,l)}}function fO(r,e){return e.tag===31?(e=e.memoizedState,r.memoizedState!==null&&e===null):e.tag===13?(r=r.memoizedState,e=e.memoizedState,r!==null&&r.dehydrated!==null&&(e===null||e.dehydrated===null)):e.tag===3?r.memoizedState.isDehydrated&&(e.flags&256)===0:!1}function xG(r,e){if(r=r.containerInfo,u6=rw,r=u8(r),fw(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:n,focusNode:t}=l;l=l.focusOffset;try{o.nodeType,t.nodeType}catch(tr){o=null;break r}var b=0,w=-1,q=-1,M=0,U=0,$=r,J=null;e:for(;;){for(var F;;){if($!==o||n!==0&&$.nodeType!==3||(w=b+n),$!==t||l!==0&&$.nodeType!==3||(q=b+l),$.nodeType===3&&(b+=$.nodeValue.length),(F=$.firstChild)===null)break;J=$,$=F}for(;;){if($===r)break e;if(J===o&&++M===n&&(w=b),J===t&&++U===l&&(q=b),(F=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=F}o=w===-1||q===-1?null:{start:w,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;w6={focusedElem:r,selectionRange:o},rw=!1;for(bo=e;bo!==null;)if(e=bo,r=e.child,(e.subtreeFlags&1028)!==0&&r!==null)r.return=e,bo=r;else for(;bo!==null;){switch(r=e=bo,o=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)n=r[o],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:(n&1024)!==0&&o!==null&&$G(r,o);break;case 3:if((n&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)I2(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":I2(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=e.sibling,r!==null){r.return=e.return,bo=r;break}bo=e.return}}function pO(r,e,o){var l=ig(),n=ul(),t=Pl(),b=Ol(),w=o.flags;switch(o.tag){case 0:case 11:case 15:Rl(r,o),w&4&&kO(o,Ag|xg);break;case 1:if(Rl(r,o),w&4)if(r=o.stateNode,e===null)o.type.defaultProps||"ref"in o.memoizedProps||Uv||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Hl(o)?(ql(),hr(o,F4,o,r),Al()):hr(o,F4,o,r);else{var q=fn(o.type,e.memoizedProps);e=e.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||Uv||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Hl(o)?(ql(),hr(o,TH,o,r,q,e,r.__reactInternalSnapshotBeforeUpdate),Al()):hr(o,TH,o,r,q,e,r.__reactInternalSnapshotBeforeUpdate)}w&64&&aO(o),w&512&&Q0(o,o.return);break;case 3:if(e=fl(),Rl(r,o),w&64&&(w=o.updateQueue,w!==null)){if(q=null,o.child!==null)switch(o.child.tag){case 27:case 5:q=o.child.stateNode;break;case 1:q=o.child.stateNode}try{hr(o,y8,w,q)}catch(U){te(o,o.return,U)}}r.effectDuration+=tb(e);break;case 27:e===null&&w&4&&EO(o);case 26:case 5:if(Rl(r,o),e===null){if(w&4)VO(o);else if(w&64){r=o.type,e=o.memoizedProps,q=o.stateNode;try{hr(o,gX,q,r,e,o)}catch(U){te(o,o.return,U)}}}w&512&&Q0(o,o.return);break;case 12:if(w&4){w=fl(),Rl(r,o),r=o.stateNode,r.effectDuration+=A0(w);try{hr(o,yO,o,e,di,r.effectDuration)}catch(U){te(o,o.return,U)}}else Rl(r,o);break;case 31:Rl(r,o),w&4&&sO(r,o);break;case 13:Rl(r,o),w&4&&rA(r,o),w&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(w=aG.bind(null,o),qX(r,w))));break;case 22:if(w=o.memoizedState!==null||ui,!w){e=e!==null&&e.memoizedState!==null||se,q=ui;var M=se;ui=w,(se=e)&&!M?(Wl(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&j1(o,Qr,Ur)):Rl(r,o),ui=q,se=M}break;case 30:break;default:Rl(r,o)}(o.mode&kr)!==$r&&0<=Qr&&0<=Ur&&((Ce||0.05<Fe)&&hl(o,Qr,Ur,Fe,Le),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Ur-Qr&&(fO(o.return.alternate,o.return)||vl(o,Qr,Ur,"Mount"))),ng(l),wl(n),Le=t,Ce=b}function jO(r){var e=r.alternate;e!==null&&(r.alternate=null,jO(e)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(e=r.stateNode,e!==null&&br(e)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dl(r,e,o){for(o=o.child;o!==null;)dO(r,e,o),o=o.sibling}function dO(r,e,o){if(Qo&&typeof Qo.onCommitFiberUnmount==="function")try{Qo.onCommitFiberUnmount(iv,o)}catch(M){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",M))}var l=ig(),n=ul(),t=Pl(),b=Ol();switch(o.tag){case 26:se||Ml(o,e),dl(r,e,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:se||Ml(o,e);var w=ro,q=fo;Di(o.type)&&(ro=o.stateNode,fo=!1),dl(r,e,o),hr(o,B0,o.stateNode),ro=w,fo=q;break;case 5:se||Ml(o,e);case 6:if(w=ro,q=fo,ro=null,dl(r,e,o),ro=w,fo=q,ro!==null)if(fo)try{hr(o,tX,ro,o.stateNode)}catch(M){te(o,e,M)}else try{hr(o,nX,ro,o.stateNode)}catch(M){te(o,e,M)}break;case 18:ro!==null&&(fo?(r=ro,eq(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),ev(r)):eq(ro,o.stateNode));break;case 4:w=ro,q=fo,ro=o.stateNode.containerInfo,fo=!0,dl(r,e,o),ro=w,fo=q;break;case 0:case 11:case 14:case 15:_t(Co,o,e),se||v2(o,e,Ag),dl(r,e,o);break;case 1:se||(Ml(o,e),w=o.stateNode,typeof w.componentWillUnmount==="function"&&cO(o,e,w)),dl(r,e,o);break;case 21:dl(r,e,o);break;case 22:se=(w=se)||o.memoizedState!==null,dl(r,e,o),se=w;break;default:dl(r,e,o)}(o.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(o,Qr,Ur,Fe,Le),ng(l),wl(n),Le=t,Ce=b}function sO(r,e){if(e.memoizedState===null&&(r=e.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{hr(e,MX,r)}catch(o){te(e,e.return,o)}}}function rA(r,e){if(e.memoizedState===null&&(r=e.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{hr(e,RX,r)}catch(o){te(e,e.return,o)}}function NG(r){switch(r.tag){case 31:case 13:case 19:var e=r.stateNode;return e===null&&(e=r.stateNode=new JM),e;case 22:return r=r.stateNode,e=r._retryCache,e===null&&(e=r._retryCache=new JM),e;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Nb(r,e){var o=NG(r);e.forEach(function(l){if(!o.has(l)){if(o.add(l),Ql)if($v!==null&&Lv!==null)L0(Lv,$v);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var n=cG.bind(null,r,l);l.then(n,n)}})}function _o(r,e){var o=e.deletions;if(o!==null)for(var l=0;l<o.length;l++){var n=r,t=e,b=o[l],w=ig(),q=t;r:for(;q!==null;){switch(q.tag){case 27:if(Di(q.type)){ro=q.stateNode,fo=!1;break r}break;case 5:ro=q.stateNode,fo=!1;break r;case 3:case 4:ro=q.stateNode.containerInfo,fo=!0;break r}q=q.return}if(ro===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");dO(n,t,b),ro=null,fo=!1,(b.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&vl(b,Qr,Ur,"Unmount"),ng(w),n=b,t=n.alternate,t!==null&&(t.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)eA(e,r),e=e.sibling}function eA(r,e){var o=ig(),l=ul(),n=Pl(),t=Ol(),b=r.alternate,w=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:_o(e,r),Eo(r),w&4&&(_t(Co|xg,r,r.return),z0(Co|xg,r),v2(r,r.return,Ag|xg));break;case 1:if(_o(e,r),Eo(r),w&512&&(se||b===null||Ml(b,b.return)),w&64&&ui&&(w=r.updateQueue,w!==null&&(b=w.callbacks,b!==null))){var q=w.shared.hiddenCallbacks;w.shared.hiddenCallbacks=q===null?b:q.concat(b)}break;case 26:if(q=Eg,_o(e,r),Eo(r),w&512&&(se||b===null||Ml(b,b.return)),w&4){var M=b!==null?b.memoizedState:null;if(w=r.memoizedState,b===null)if(w===null)if(r.stateNode===null){r:{w=r.type,b=r.memoizedProps,q=q.ownerDocument||q;e:switch(w){case"title":if(M=q.getElementsByTagName("title")[0],!M||M[a0]||M[Mo]||M.namespaceURI===tv||M.hasAttribute("itemprop"))M=q.createElement(w),q.head.insertBefore(M,q.querySelector("head > title"));Ho(M,w,b),M[Mo]=r,zr(M),w=M;break r;case"link":var U=wq("link","href",q).get(w+(b.href||""));if(U){for(var $=0;$<U.length;$++)if(M=U[$],M.getAttribute("href")===(b.href==null||b.href===""?null:b.href)&&M.getAttribute("rel")===(b.rel==null?null:b.rel)&&M.getAttribute("title")===(b.title==null?null:b.title)&&M.getAttribute("crossorigin")===(b.crossOrigin==null?null:b.crossOrigin)){U.splice($,1);break e}}M=q.createElement(w),Ho(M,w,b),q.head.appendChild(M);break;case"meta":if(U=wq("meta","content",q).get(w+(b.content||""))){for($=0;$<U.length;$++)if(M=U[$],Pe(b.content,"content"),M.getAttribute("content")===(b.content==null?null:""+b.content)&&M.getAttribute("name")===(b.name==null?null:b.name)&&M.getAttribute("property")===(b.property==null?null:b.property)&&M.getAttribute("http-equiv")===(b.httpEquiv==null?null:b.httpEquiv)&&M.getAttribute("charset")===(b.charSet==null?null:b.charSet)){U.splice($,1);break e}}M=q.createElement(w),Ho(M,w,b),q.head.appendChild(M);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+w+'". This is a bug in React.')}M[Mo]=r,zr(M),w=M}r.stateNode=w}else Pq(q,r.type,r.stateNode);else r.stateNode=uq(q,w,r.memoizedProps);else M!==w?(M===null?b.stateNode!==null&&(b=b.stateNode,b.parentNode.removeChild(b)):M.count--,w===null?Pq(q,r.type,r.stateNode):uq(q,w,r.memoizedProps)):w===null&&r.stateNode!==null&&b2(r,r.memoizedProps,b.memoizedProps)}break;case 27:_o(e,r),Eo(r),w&512&&(se||b===null||Ml(b,b.return)),b!==null&&w&4&&b2(r,r.memoizedProps,b.memoizedProps);break;case 5:if(_o(e,r),Eo(r),w&512&&(se||b===null||Ml(b,b.return)),r.flags&32){q=r.stateNode;try{hr(r,sA,q)}catch(Or){te(r,r.return,Or)}}w&4&&r.stateNode!=null&&(q=r.memoizedProps,b2(r,q,b!==null?b.memoizedProps:q)),w&1024&&(V4=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(_o(e,r),Eo(r),w&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");w=r.memoizedProps,b=b!==null?b.memoizedProps:w,q=r.stateNode;try{hr(r,iX,q,b,w)}catch(Or){te(r,r.return,Or)}}break;case 3:if(q=fl(),ju=null,M=Eg,Eg=ab(e.containerInfo),_o(e,r),Eg=M,Eo(r),w&4&&b!==null&&b.memoizedState.isDehydrated)try{hr(r,HX,e.containerInfo)}catch(Or){te(r,r.return,Or)}V4&&(V4=!1,oA(r)),e.effectDuration+=tb(q);break;case 4:w=Eg,Eg=ab(r.stateNode.containerInfo),_o(e,r),Eo(r),Eg=w;break;case 12:w=fl(),_o(e,r),Eo(r),r.stateNode.effectDuration+=A0(w);break;case 31:_o(e,r),Eo(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 13:_o(e,r),Eo(r),r.child.flags&8192&&r.memoizedState!==null!==(b!==null&&b.memoizedState!==null)&&(Bu=vo()),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 22:q=r.memoizedState!==null;var J=b!==null&&b.memoizedState!==null,F=ui,tr=se;if(ui=F||q,se=tr||J,_o(e,r),se=tr,ui=F,J&&!q&&!F&&!tr&&(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&j1(r,Qr,Ur),Eo(r),w&8192)r:for(e=r.stateNode,e._visibility=q?e._visibility&~d0:e._visibility|d0,!q||b===null||J||ui||se||(pn(r),(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&vl(r,Qr,Ur,"Disconnect")),b=null,e=r;;){if(e.tag===5||e.tag===26){if(b===null){J=b=e;try{M=J.stateNode,q?hr(J,hX,M):hr(J,wX,J.stateNode,J.memoizedProps)}catch(Or){te(J,J.return,Or)}}}else if(e.tag===6){if(b===null){J=e;try{U=J.stateNode,q?hr(J,bX,U):hr(J,PX,U,J.memoizedProps)}catch(Or){te(J,J.return,Or)}}}else if(e.tag===18){if(b===null){J=e;try{$=J.stateNode,q?hr(J,vX,$):hr(J,uX,J.stateNode)}catch(Or){te(J,J.return,Or)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===r)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break r;for(;e.sibling===null;){if(e.return===null||e.return===r)break r;b===e&&(b=null),e=e.return}b===e&&(b=null),e.sibling.return=e.return,e=e.sibling}w&4&&(w=r.updateQueue,w!==null&&(b=w.retryQueue,b!==null&&(w.retryQueue=null,Nb(r,b))));break;case 19:_o(e,r),Eo(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Nb(r,w)));break;case 30:break;case 21:break;default:_o(e,r),Eo(r)}(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&((Ce||0.05<Fe)&&hl(r,Qr,Ur,Fe,Le),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Ur-Qr&&(fO(r.return.alternate,r.return)||vl(r,Qr,Ur,"Mount"))),ng(o),wl(l),Le=n,Ce=t}function Eo(r){var e=r.flags;if(e&2){try{hr(r,FG,r)}catch(o){te(r,r.return,o)}r.flags&=-3}e&4096&&(r.flags&=-4097)}function oA(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var e=r;oA(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),r=r.sibling}}function Rl(r,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)pO(r,e.alternate,e),e=e.sibling}function gA(r){var e=ig(),o=ul(),l=Pl(),n=Ol();switch(r.tag){case 0:case 11:case 14:case 15:v2(r,r.return,Ag),pn(r);break;case 1:Ml(r,r.return);var t=r.stateNode;typeof t.componentWillUnmount==="function"&&cO(r,r.return,t),pn(r);break;case 27:hr(r,B0,r.stateNode);case 26:case 5:Ml(r,r.return),pn(r);break;case 22:r.memoizedState===null&&pn(r);break;case 30:pn(r);break;default:pn(r)}(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(r,Qr,Ur,Fe,Le),ng(e),wl(o),Le=l,Ce=n}function pn(r){for(r=r.child;r!==null;)gA(r),r=r.sibling}function lA(r,e,o,l){var n=ig(),t=ul(),b=Pl(),w=Ol(),q=o.flags;switch(o.tag){case 0:case 11:case 15:Wl(r,o,l),kO(o,Ag);break;case 1:if(Wl(r,o,l),e=o.stateNode,typeof e.componentDidMount==="function"&&hr(o,F4,o,e),e=o.updateQueue,e!==null){r=o.stateNode;try{hr(o,HG,e,r)}catch(M){te(o,o.return,M)}}l&&q&64&&aO(o),Q0(o,o.return);break;case 27:EO(o);case 26:case 5:Wl(r,o,l),l&&e===null&&q&4&&VO(o),Q0(o,o.return);break;case 12:if(l&&q&4){q=fl(),Wl(r,o,l),l=o.stateNode,l.effectDuration+=A0(q);try{hr(o,yO,o,e,di,l.effectDuration)}catch(M){te(o,o.return,M)}}else Wl(r,o,l);break;case 31:Wl(r,o,l),l&&q&4&&sO(r,o);break;case 13:Wl(r,o,l),l&&q&4&&rA(r,o);break;case 22:o.memoizedState===null&&Wl(r,o,l),Q0(o,o.return);break;case 30:break;default:Wl(r,o,l)}(o.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(o,Qr,Ur,Fe,Le),ng(n),wl(t),Le=b,Ce=w}function Wl(r,e,o){o=o&&(e.subtreeFlags&8772)!==0;for(e=e.child;e!==null;)lA(r,e.alternate,e,o),e=e.sibling}function P2(r,e){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==o&&(r!=null&&yn(r),o!=null&&O0(o))}function O2(r,e){r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(yn(e),r!=null&&O0(r))}function Dg(r,e,o,l,n){if(e.subtreeFlags&10256||e.actualDuration!==0&&(e.alternate===null||e.alternate.child!==e.child))for(e=e.child;e!==null;){var t=e.sibling;iA(r,e,o,l,t!==null?t.actualStartTime:n),e=t}}function iA(r,e,o,l,n){var t=ig(),b=ul(),w=Pl(),q=Ol(),M=Ei,U=e.flags;switch(e.tag){case 0:case 11:case 15:(e.mode&kr)!==$r&&0<e.actualStartTime&&(e.flags&1)!==0&&d1(e,e.actualStartTime,n,lo,o),Dg(r,e,o,l,n),U&2048&&DO(e,Zo|xg);break;case 1:(e.mode&kr)!==$r&&0<e.actualStartTime&&((e.flags&128)!==0?jw(e,e.actualStartTime,n,[]):(e.flags&1)!==0&&d1(e,e.actualStartTime,n,lo,o)),Dg(r,e,o,l,n);break;case 3:var $=fl(),J=lo;lo=e.alternate!==null&&e.alternate.memoizedState.isDehydrated&&(e.flags&256)===0,Dg(r,e,o,l,n),lo=J,U&2048&&(o=null,e.alternate!==null&&(o=e.alternate.memoizedState.cache),l=e.memoizedState.cache,l!==o&&(yn(l),o!=null&&O0(o))),r.passiveEffectDuration+=tb($);break;case 12:if(U&2048){U=fl(),Dg(r,e,o,l,n),r=e.stateNode,r.passiveEffectDuration+=A0(U);try{hr(e,IG,e,e.alternate,di,r.passiveEffectDuration)}catch(F){te(e,e.return,F)}}else Dg(r,e,o,l,n);break;case 31:U=lo,$=e.alternate!==null?e.alternate.memoizedState:null,J=e.memoizedState,$!==null&&J===null?(J=e.deletions,J!==null&&0<J.length&&J[0].tag===18?(lo=!1,$=$.hydrationErrors,$!==null&&jw(e,e.actualStartTime,n,$)):lo=!0):lo=!1,Dg(r,e,o,l,n),lo=U;break;case 13:U=lo,$=e.alternate!==null?e.alternate.memoizedState:null,J=e.memoizedState,$===null||$.dehydrated===null||J!==null&&J.dehydrated!==null?lo=!1:(J=e.deletions,J!==null&&0<J.length&&J[0].tag===18?(lo=!1,$=$.hydrationErrors,$!==null&&jw(e,e.actualStartTime,n,$)):lo=!0),Dg(r,e,o,l,n),lo=U;break;case 23:break;case 22:J=e.stateNode,$=e.alternate,e.memoizedState!==null?J._visibility&ei?Dg(r,e,o,l,n):K0(r,e,o,l,n):J._visibility&ei?Dg(r,e,o,l,n):(J._visibility|=ei,Et(r,e,o,l,(e.subtreeFlags&10256)!==0||e.actualDuration!==0&&(e.alternate===null||e.alternate.child!==e.child),n),(e.mode&kr)===$r||lo||(r=e.actualStartTime,0<=r&&0.05<n-r&&j1(e,r,n),0<=Qr&&0<=Ur&&0.05<Ur-Qr&&j1(e,Qr,Ur))),U&2048&&P2($,e);break;case 24:Dg(r,e,o,l,n),U&2048&&O2(e.alternate,e);break;default:Dg(r,e,o,l,n)}if((e.mode&kr)!==$r){if(r=!lo&&e.alternate===null&&e.return!==null&&e.return.alternate!==null)o=e.actualStartTime,0<=o&&0.05<n-o&&vl(e,o,n,"Mount");0<=Qr&&0<=Ur&&((Ce||0.05<Fe)&&hl(e,Qr,Ur,Fe,Le),r&&0.05<Ur-Qr&&vl(e,Qr,Ur,"Mount"))}ng(t),wl(b),Le=w,Ce=q,Ei=M}function Et(r,e,o,l,n,t){n=n&&((e.subtreeFlags&10256)!==0||e.actualDuration!==0&&(e.alternate===null||e.alternate.child!==e.child));for(e=e.child;e!==null;){var b=e.sibling;nA(r,e,o,l,n,b!==null?b.actualStartTime:t),e=b}}function nA(r,e,o,l,n,t){var b=ig(),w=ul(),q=Pl(),M=Ol(),U=Ei;n&&(e.mode&kr)!==$r&&0<e.actualStartTime&&(e.flags&1)!==0&&d1(e,e.actualStartTime,t,lo,o);var $=e.flags;switch(e.tag){case 0:case 11:case 15:Et(r,e,o,l,n,t),DO(e,Zo);break;case 23:break;case 22:var J=e.stateNode;e.memoizedState!==null?J._visibility&ei?Et(r,e,o,l,n,t):K0(r,e,o,l,t):(J._visibility|=ei,Et(r,e,o,l,n,t)),n&&$&2048&&P2(e.alternate,e);break;case 24:Et(r,e,o,l,n,t),n&&$&2048&&O2(e.alternate,e);break;default:Et(r,e,o,l,n,t)}(e.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(e,Qr,Ur,Fe,Le),ng(b),wl(w),Le=q,Ce=M,Ei=U}function K0(r,e,o,l,n){if(e.subtreeFlags&10256||e.actualDuration!==0&&(e.alternate===null||e.alternate.child!==e.child))for(var t=e.child;t!==null;){e=t.sibling;var b=r,w=o,q=l,M=e!==null?e.actualStartTime:n,U=Ei;(t.mode&kr)!==$r&&0<t.actualStartTime&&(t.flags&1)!==0&&d1(t,t.actualStartTime,M,lo,w);var $=t.flags;switch(t.tag){case 22:K0(b,t,w,q,M),$&2048&&P2(t.alternate,t);break;case 24:K0(b,t,w,q,M),$&2048&&O2(t.alternate,t);break;default:K0(b,t,w,q,M)}Ei=U,t=e}}function ft(r,e,o){if(r.subtreeFlags&Mh)for(r=r.child;r!==null;)tA(r,e,o),r=r.sibling}function tA(r,e,o){switch(r.tag){case 26:ft(r,e,o),r.flags&Mh&&r.memoizedState!==null&&XX(o,Eg,r.memoizedState,r.memoizedProps);break;case 5:ft(r,e,o);break;case 3:case 4:var l=Eg;Eg=ab(r.stateNode.containerInfo),ft(r,e,o),Eg=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Mh,Mh=16777216,ft(r,e,o),Mh=l):ft(r,e,o));break;default:ft(r,e,o)}}function vA(r){var e=r.alternate;if(e!==null&&(r=e.child,r!==null)){e.child=null;do e=r.sibling,r.sibling=null,r=e;while(r!==null)}}function U0(r){var e=r.deletions;if((r.flags&16)!==0){if(e!==null)for(var o=0;o<e.length;o++){var l=e[o],n=ig();bo=l,uA(l,r),(l.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&vl(l,Qr,Ur,"Unmount"),ng(n)}vA(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)hA(r),r=r.sibling}function hA(r){var e=ig(),o=ul(),l=Pl(),n=Ol();switch(r.tag){case 0:case 11:case 15:U0(r),r.flags&2048&&h2(r,r.return,Zo|xg);break;case 3:var t=fl();U0(r),r.stateNode.passiveEffectDuration+=tb(t);break;case 12:t=fl(),U0(r),r.stateNode.passiveEffectDuration+=A0(t);break;case 22:t=r.stateNode,r.memoizedState!==null&&t._visibility&ei&&(r.return===null||r.return.tag!==13)?(t._visibility&=~ei,Bb(r),(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&vl(r,Qr,Ur,"Disconnect")):U0(r);break;default:U0(r)}(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(r,Qr,Ur,Fe,Le),ng(e),wl(o),Ce=n,Le=l}function Bb(r){var e=r.deletions;if((r.flags&16)!==0){if(e!==null)for(var o=0;o<e.length;o++){var l=e[o],n=ig();bo=l,uA(l,r),(l.mode&kr)!==$r&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&vl(l,Qr,Ur,"Unmount"),ng(n)}vA(r)}for(r=r.child;r!==null;)bA(r),r=r.sibling}function bA(r){var e=ig(),o=ul(),l=Pl(),n=Ol();switch(r.tag){case 0:case 11:case 15:h2(r,r.return,Zo),Bb(r);break;case 22:var t=r.stateNode;t._visibility&ei&&(t._visibility&=~ei,Bb(r));break;default:Bb(r)}(r.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(r,Qr,Ur,Fe,Le),ng(e),wl(o),Ce=n,Le=l}function uA(r,e){for(;bo!==null;){var o=bo,l=o,n=e,t=ig(),b=ul(),w=Pl(),q=Ol();switch(l.tag){case 0:case 11:case 15:h2(l,n,Zo);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool,n!=null&&yn(n));break;case 24:O0(l.memoizedState.cache)}if((l.mode&kr)!==$r&&0<=Qr&&0<=Ur&&(Ce||0.05<Fe)&&hl(l,Qr,Ur,Fe,Le),ng(t),wl(b),Ce=q,Le=w,l=o.child,l!==null)l.return=o,bo=l;else r:for(o=r;bo!==null;){if(l=bo,t=l.sibling,b=l.return,jO(l),l===o){bo=null;break r}if(t!==null){t.return=b,bo=t;break r}bo=b}}}function BG(){gJ.forEach(function(r){return r()})}function wA(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||Z.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function vg(r){if((oe&io)!==uo&&ar!==0)return ar&-ar;var e=Z.T;return e!==null?(e._updatedFibers||(e._updatedFibers=new Set),e._updatedFibers.add(r),G2()):I()}function PA(){if(jo===0)if((ar&536870912)===0||jr){var r=eu;eu<<=1,(eu&3932160)===0&&(eu=262144),jo=r}else jo=536870912;return r=Og.current,r!==null&&(r.flags|=32),jo}function Be(r,e,o){if(xv&&console.error("useInsertionEffect must not schedule updates."),g6&&(Tu=!0),r===Re&&(ue===ut||ue===wt)||r.cancelPendingCommit!==null)jt(r,0),Ti(r,ar,jo,!1);if(Ki(r,o),(oe&io)!==uo&&r===Re){if(Jl)switch(e.tag){case 0:case 11:case 15:r=Vr&&x(Vr)||"Unknown",TM.has(r)||(TM.add(r),e=x(e)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",e,r,r));break;case 1:SM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),SM=!0)}}else Ql&&g0(r,e,o),VG(e),r===Re&&((oe&io)===uo&&(vn|=o),xe===ln&&Ti(r,ar,jo,!1)),ml(r)}function OA(r,e,o){if((oe&(io|qg))!==uo)throw Error("Should not already be working.");if(ar!==0&&Vr!==null){var l=Vr,n=vo();switch(IH){case mh:case ut:var t=lh;Je&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",t,n,zg,void 0,"primary-light")):console.timeStamp("Suspended",t,n,zg,void 0,"primary-light"));break;case wt:t=lh,Je&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",t,n,zg,void 0,"primary-light")):console.timeStamp("Action",t,n,zg,void 0,"primary-light"));break;default:Je&&(l=n-lh,3>l||console.timeStamp("Blocked",lh,n,zg,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}t=(o=!o&&(e&127)===0&&(e&r.expiredLanes)===0||In(r,e))?ZG(r,e):q2(r,e,!0);var b=o;do{if(t===wi){Iv&&!o&&Ti(r,e,0,!1),e=ue,lh=pe(),IH=e;break}else{if(l=vo(),n=r.current.alternate,b&&!CG(n)){gg(e),n=ho,t=l,!Je||t<=n||(Te?Te.run(console.timeStamp.bind(console,"Teared Render",n,t,pr,fr,"error")):console.timeStamp("Teared Render",n,t,pr,fr,"error")),jn(e,l),t=q2(r,e,!1),b=!1;continue}if(t===bt){if(b=e,r.errorRecoveryDisabledLanes&b)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){gg(e),dw(ho,l,e,Te),jn(e,l),e=w;r:{l=r,t=b,b=Xh;var q=l.current.memoizedState.isDehydrated;if(q&&(jt(l,w).flags|=256),w=q2(l,w,!1),w!==bt){if(f4&&!q){l.errorRecoveryDisabledLanes|=t,vn|=t,t=ln;break r}l=So,So=b,l!==null&&(So===null?So=l:So.push.apply(So,l))}t=w}if(b=!1,t!==bt)continue;else l=vo()}}if(t===Wh){gg(e),dw(ho,l,e,Te),jn(e,l),jt(r,0),Ti(r,e,0,!0);break}r:{switch(o=r,t){case wi:case Wh:throw Error("Root did not complete. This is a bug in React.");case ln:if((e&4194048)!==e)break;case Iu:gg(e),O8(ho,l,e,Te),jn(e,l),n=e,(n&127)!==0?Hu=l:(n&4194048)!==0&&(Mu=l),Ti(o,e,jo,!nn);break r;case bt:So=null;break;case Lu:case zM:break;default:throw Error("Unknown root exit status.")}if(Z.actQueue!==null)H2(o,n,e,So,Yh,Nu,jo,vn,Pt,t,null,null,ho,l);else{if((e&62914560)===e&&(b=Bu+UM-vo(),10<b)){if(Ti(o,e,jo,!nn),Ln(o,0,!0)!==0)break r;fg=e,o.timeoutHandle=EM(AA.bind(null,o,n,So,Yh,Nu,e,jo,vn,Pt,nn,t,"Throttled",ho,l),b);break r}AA(o,n,So,Yh,Nu,e,jo,vn,Pt,nn,t,null,ho,l)}}}break}while(1);ml(r)}function AA(r,e,o,l,n,t,b,w,q,M,U,$,J,F){r.timeoutHandle=Mt;var tr=e.subtreeFlags,Or=null;if(tr&8192||(tr&16785408)===16785408){if(Or={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yl},tA(e,t,Or),tr=(t&62914560)===t?Bu-vo():(t&4194048)===t?KM-vo():0,tr=YX(Or,tr),tr!==null){fg=t,r.cancelPendingCommit=tr(H2.bind(null,r,e,t,o,l,n,b,w,q,U,Or,Or.waitingForViewTransition?"Waiting for the previous Animation":0<Or.count?0<Or.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Or.imgCount===1?"Suspended on an Image":0<Or.imgCount?"Suspended on Images":null,J,F)),Ti(r,t,b,!M);return}}H2(r,e,t,o,l,n,b,w,q,U,Or,$,J,F)}function CG(r){for(var e=r;;){var o=e.tag;if((o===0||o===11||o===15)&&e.flags&16384&&(o=e.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var n=o[l],t=n.getSnapshot;n=n.value;try{if(!No(t(),n))return!1}catch(b){return!1}}if(o=e.child,e.subtreeFlags&16384&&o!==null)o.return=e,e=o;else{if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(r,e,o,l){e&=~p4,e&=~vn,r.suspendedLanes|=e,r.pingedLanes&=~e,l&&(r.warmLanes|=e),l=r.expirationTimes;for(var n=e;0<n;){var t=31-Io(n),b=1<<t;l[t]=-1,n&=~b}o!==0&&Fn(r,o,e)}function pt(){return(oe&(io|qg))===uo?(I0(0,!1),!1):!0}function A2(){if(Vr!==null){if(ue===po)var r=Vr.return;else r=Vr,lb(),z5(r),Xv=null,Ph=0,r=Vr;for(;r!==null;)TO(r.alternate,r),r=r.return;Vr=null}}function jn(r,e){(r&127)!==0&&(si=e),(r&4194048)!==0&&(Il=e),(r&62914560)!==0&&($H=e),(r&2080374784)!==0&&(LH=e)}function jt(r,e){Je&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",fr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",fr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",fr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",fr,"primary-light"));var o=ho;if(ho=pe(),ar!==0&&0<o){if(gg(ar),xe===Lu||xe===ln)O8(o,ho,e,Te);else{var l=ho,n=Te;if(Je&&!(l<=o)){var t=(e&738197653)===e?"tertiary-dark":"primary-dark",b=(e&536870912)===e?"Prewarm":(e&201326741)===e?"Interrupted Hydration":"Interrupted Render";n?n.run(console.timeStamp.bind(console,b,o,l,pr,fr,t)):console.timeStamp(b,o,l,pr,fr,t)}}jn(ar,ho)}if(o=Te,Te=null,(e&127)!==0){Te=eh,n=0<=Ll&&Ll<si?si:Ll,l=0<=ot&&ot<si?si:ot,t=0<=l?l:0<=n?n:ho,0<=Hu?(gg(2),A8(Hu,t,e,o)):(Ru&127)!==0&&(gg(2),w0(si,t,ti)),o=n;var w=l,q=oh,M=0<Wv,U=rn===rh,$=rn===qu;if(n=ho,l=eh,t=K4,b=U4,Je){if(pr="Blocking",0<o?o>n&&(o=n):o=n,0<w?w>o&&(w=o):w=o,q!==null&&o>w){var J=M?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+q,w,o,pr,fr,J)):console.timeStamp(M?"Consecutive":"Event: "+q,w,o,pr,fr,J)}n>o&&(w=U?"error":(e&738197653)===e?"tertiary-light":"primary-light",U=$?"Promise Resolved":U?"Cascading Update":5<n-o?"Update Blocked":"Update",$=[],b!=null&&$.push(["Component name",b]),t!=null&&$.push(["Method name",t]),o={start:o,end:n,detail:{devtools:{properties:$,track:pr,trackGroup:fr,color:w}}},l?l.run(performance.measure.bind(performance,U,o)):performance.measure(U,o))}Ll=-1.1,rn=0,U4=K4=null,Hu=-1.1,Wv=ot,ot=-1.1,si=pe()}if((e&4194048)!==0&&(Te=gh,n=0<=ni&&ni<Il?Il:ni,o=0<=Ig&&Ig<Il?Il:Ig,l=0<=en&&en<Il?Il:en,t=0<=l?l:0<=o?o:ho,0<=Mu?(gg(256),A8(Mu,t,e,Te)):(Ru&4194048)!==0&&(gg(256),w0(Il,t,ti)),$=l,w=gt,q=0<on,M=$4===qu,t=ho,l=gh,b=KH,U=UH,Je&&(pr="Transition",0<o?o>t&&(o=t):o=t,0<n?n>o&&(n=o):n=o,0<$?$>n&&($=n):$=n,n>$&&w!==null&&(J=q?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,q?"Consecutive":"Event: "+w,$,n,pr,fr,J)):console.timeStamp(q?"Consecutive":"Event: "+w,$,n,pr,fr,J)),o>n&&(l?l.run(console.timeStamp.bind(console,"Action",n,o,pr,fr,"primary-dark")):console.timeStamp("Action",n,o,pr,fr,"primary-dark")),t>o&&(n=M?"Promise Resolved":5<t-o?"Update Blocked":"Update",$=[],U!=null&&$.push(["Component name",U]),b!=null&&$.push(["Method name",b]),o={start:o,end:t,detail:{devtools:{properties:$,track:pr,trackGroup:fr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,n,o)):performance.measure(n,o))),Ig=ni=-1.1,$4=0,Mu=-1.1,on=en,en=-1.1,Il=pe()),(e&62914560)!==0&&(Ru&62914560)!==0&&(gg(4194304),w0($H,ho,ti)),(e&2080374784)!==0&&(Ru&2080374784)!==0&&(gg(268435456),w0(LH,ho,ti)),o=r.timeoutHandle,o!==Mt&&(r.timeoutHandle=Mt,qJ(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fg=0,A2(),Re=r,Vr=o=Vl(r.current,null),ar=e,ue=po,Hg=null,nn=!1,Iv=In(r,e),f4=!1,xe=wi,Pt=jo=p4=vn=tn=0,So=Xh=null,Nu=!1,(e&8)!==0&&(e|=e&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=e;0<l;)n=31-Io(l),t=1<<n,e|=r[n],l&=~t;return xl=e,s1(),r=GH(),1000<r-mH&&(Z.recentlyCreatedOwnerStacks=0,mH=r),Vg.discardPendingWarnings(),o}function qA(r,e){Ir=null,Z.H=Hh,Z.getCurrentStack=null,Jl=!1,ug=null,e===Gv||e===Xu?(e=C8(),ue=mh):e===x4?(e=C8(),ue=QM):ue=e===c4?E4:e!==null&&typeof e==="object"&&typeof e.then==="function"?Gh:Fu,Hg=e;var o=Vr;o===null?(xe=Wh,Ub(r,lg(e,r.current))):o.mode&kr&&P5(o)}function HA(){var r=Og.current;return r===null?!0:(ar&4194048)===ar?Fg===null?!0:!1:(ar&62914560)===ar||(ar&536870912)!==0?r===Fg:!1}function MA(){var r=Z.H;return Z.H=Hh,r===null?Hh:r}function RA(){var r=Z.A;return Z.A=oJ,r}function Cb(r){Te===null&&(Te=r._debugTask==null?null:r._debugTask)}function Zb(){xe=ln,nn||(ar&4194048)!==ar&&Og.current!==null||(Iv=!0),(tn&134217727)===0&&(vn&134217727)===0||Re===null||Ti(Re,ar,jo,!1)}function q2(r,e,o){var l=oe;oe|=io;var n=MA(),t=RA();if(Re!==r||ar!==e){if(Ql){var b=r.memoizedUpdaters;0<b.size&&(L0(r,ar),b.clear()),Ui(r,e)}Yh=null,jt(r,e)}e=!1,b=xe;r:do try{if(ue!==po&&Vr!==null){var w=Vr,q=Hg;switch(ue){case E4:A2(),b=Iu;break r;case mh:case ut:case wt:case Gh:Og.current===null&&(e=!0);var M=ue;if(ue=po,Hg=null,dt(r,w,q,M),o&&Iv){b=wi;break r}break;default:M=ue,ue=po,Hg=null,dt(r,w,q,M)}}WA(),b=xe;break}catch(U){qA(r,U)}while(1);return e&&r.shellSuspendCounter++,lb(),oe=l,Z.H=n,Z.A=t,Vr===null&&(Re=null,ar=0,s1()),b}function WA(){for(;Vr!==null;)mA(Vr)}function ZG(r,e){var o=oe;oe|=io;var l=MA(),n=RA();if(Re!==r||ar!==e){if(Ql){var t=r.memoizedUpdaters;0<t.size&&(L0(r,ar),t.clear()),Ui(r,e)}Yh=null,Cu=vo()+$M,jt(r,e)}else Iv=In(r,e);r:do try{if(ue!==po&&Vr!==null)e:switch(e=Vr,t=Hg,ue){case Fu:ue=po,Hg=null,dt(r,e,t,Fu);break;case ut:case wt:if(N8(t)){ue=po,Hg=null,GA(e);break}e=function(){ue!==ut&&ue!==wt||Re!==r||(ue=xu),ml(r)},t.then(e,e);break r;case mh:ue=xu;break r;case QM:ue=_4;break r;case xu:N8(t)?(ue=po,Hg=null,GA(e)):(ue=po,Hg=null,dt(r,e,t,xu));break;case _4:var b=null;switch(Vr.tag){case 26:b=Vr.memoizedState;case 5:case 27:var w=Vr;if(b?Oq(b):w.stateNode.complete){ue=po,Hg=null;var q=w.sibling;if(q!==null)Vr=q;else{var M=w.return;M!==null?(Vr=M,Sb(M)):Vr=null}break e}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}ue=po,Hg=null,dt(r,e,t,_4);break;case Gh:ue=po,Hg=null,dt(r,e,t,Gh);break;case E4:A2(),xe=Iu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}Z.actQueue!==null?WA():SG();break}catch(U){qA(r,U)}while(1);if(lb(),Z.H=l,Z.A=n,oe=o,Vr!==null)return wi;return Re=null,ar=0,s1(),xe}function SG(){for(;Vr!==null&&!CX();)mA(Vr)}function mA(r){var e=r.alternate;(r.mode&kr)!==$r?(w5(r),e=hr(r,n2,e,r,xl),P5(r)):e=hr(r,n2,e,r,xl),r.memoizedProps=r.pendingProps,e===null?Sb(r):Vr=e}function GA(r){var e=hr(r,TG,r);r.memoizedProps=r.pendingProps,e===null?Sb(r):Vr=e}function TG(r){var e=r.alternate,o=(r.mode&kr)!==$r;switch(o&&w5(r),r.tag){case 15:case 0:e=FO(e,r,r.pendingProps,r.type,void 0,ar);break;case 11:e=FO(e,r,r.pendingProps,r.type.render,r.ref,ar);break;case 5:z5(r);default:TO(e,r),r=Vr=m8(r,xl),e=n2(e,r,xl)}return o&&P5(r),e}function dt(r,e,o,l){lb(),z5(e),Xv=null,Ph=0;var n=e.return;try{if(YG(r,n,e,o,ar)){xe=Wh,Ub(r,lg(o,r.current)),Vr=null;return}}catch(t){if(n!==null)throw Vr=n,t;xe=Wh,Ub(r,lg(o,r.current)),Vr=null;return}if(e.flags&32768){if(jr||l===Fu)r=!0;else if(Iv||(ar&536870912)!==0)r=!1;else if(nn=r=!0,l===ut||l===wt||l===mh||l===Gh)l=Og.current,l!==null&&l.tag===13&&(l.flags|=16384);XA(e,r)}else Sb(e)}function Sb(r){var e=r;do{if((e.flags&32768)!==0){XA(e,nn);return}var o=e.alternate;if(r=e.return,w5(e),o=hr(e,QG,o,e,xl),(e.mode&kr)!==$r&&$8(e),o!==null){Vr=o;return}if(e=e.sibling,e!==null){Vr=e;return}Vr=e=r}while(e!==null);xe===wi&&(xe=zM)}function XA(r,e){do{var o=KG(r.alternate,r);if(o!==null){o.flags&=32767,Vr=o;return}if((r.mode&kr)!==$r){$8(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!e&&(r=r.sibling,r!==null)){Vr=r;return}Vr=r=o}while(r!==null);xe=Iu,Vr=null}function H2(r,e,o,l,n,t,b,w,q,M,U,$,J,F){r.cancelPendingCommit=null;do $0();while(eo!==bn);if(Vg.flushLegacyContextWarning(),Vg.flushPendingUnsafeLifecycleWarnings(),(oe&(io|qg))!==uo)throw Error("Should not already be working.");if(gg(o),M===bt?dw(J,F,o,Te):l!==null?uG(J,F,o,l,e!==null&&e.alternate!==null&&e.alternate.memoizedState.isDehydrated&&(e.flags&256)!==0,Te):bG(J,F,o,Te),e!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),e===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(t=e.lanes|e.childLanes,t|=X4,D1(r,o,t,b,w,q),r===Re&&(Vr=Re=null,ar=0),Fv=e,un=r,fg=o,s4=t,e6=n,BM=l,r6=F,CM=$,pg=Zu,ZM=null,e.actualDuration!==0||(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,yG(lv,function(){return $h=window.event,pg===Zu&&(pg=d4),KA(),null})):(r.callbackNode=null,r.callbackPriority=0),ii=null,di=pe(),$!==null&&wG(F,di,$,Te),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,n=ve.p,ve.p=wg,b=oe,oe|=qg;try{xG(r,e,o)}finally{oe=b,ve.p=n,Z.T=l}}eo=IM,YA(),JA(),zA()}}function YA(){if(eo===IM){eo=bn;var r=un,e=Fv,o=fg,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null;var n=ve.p;ve.p=wg;var t=oe;oe|=qg;try{$v=o,Lv=r,vb(),eA(e,r),Lv=$v=null,o=w6;var b=u8(r.containerInfo),w=o.focusedElem,q=o.selectionRange;if(b!==w&&w&&w.ownerDocument&&b8(w.ownerDocument.documentElement,w)){if(q!==null&&fw(w)){var{start:M,end:U}=q;if(U===void 0&&(U=M),"selectionStart"in w)w.selectionStart=M,w.selectionEnd=Math.min(U,w.value.length);else{var $=w.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var F=J.getSelection(),tr=w.textContent.length,Or=Math.min(q.start,tr),Ge=q.end===void 0?Or:Math.min(q.end,tr);!F.extend&&Or>Ge&&(b=Ge,Ge=Or,Or=b);var sr=h8(w,Or),Y=h8(w,Ge);if(sr&&Y&&(F.rangeCount!==1||F.anchorNode!==sr.node||F.anchorOffset!==sr.offset||F.focusNode!==Y.node||F.focusOffset!==Y.offset)){var z=$.createRange();z.setStart(sr.node,sr.offset),F.removeAllRanges(),Or>Ge?(F.addRange(z),F.extend(Y.node,Y.offset)):(z.setEnd(Y.node,Y.offset),F.addRange(z))}}}}$=[];for(F=w;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});typeof w.focus==="function"&&w.focus();for(w=0;w<$.length;w++){var K=$[w];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}rw=!!u6,w6=u6=null}finally{oe=t,ve.p=n,Z.T=l}}r.current=e,eo=FM}}function JA(){if(eo===FM){eo=bn;var r=ZM;if(r!==null){di=pe();var e=li,o=di;!Je||o<=e||(ti?ti.run(console.timeStamp.bind(console,r,e,o,pr,fr,"secondary-light")):console.timeStamp(r,e,o,pr,fr,"secondary-light"))}r=un,e=Fv,o=fg;var l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=Z.T,Z.T=null;var n=ve.p;ve.p=wg;var t=oe;oe|=qg;try{$v=o,Lv=r,vb(),pO(r,e.alternate,e),Lv=$v=null}finally{oe=t,ve.p=n,Z.T=l}}r=r6,e=CM,li=pe(),r=e===null?r:di,e=li,o=pg===j4,l=Te,ii!==null?q8(r,e,ii,!1,l):!Je||e<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,e,pr,fr,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,e,pr,fr,o?"error":"secondary-dark")),eo=xM}}function zA(){if(eo===NM||eo===xM){if(eo===NM){var r=li;li=pe();var e=li,o=pg===j4;!Je||e<=r||(ti?ti.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,e,pr,fr,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,e,pr,fr,o?" error":"secondary-light")),pg!==j4&&(pg=LM)}eo=bn,ZX(),r=un;var l=Fv;e=fg,o=BM;var n=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;n?eo=Su:(eo=bn,Fv=un=null,QA(r,r.pendingLanes),Ot=0,zh=null);var t=r.pendingLanes;if(t===0&&(hn=null),n||IA(r),t=R(e),l=l.stateNode,Qo&&typeof Qo.onCommitFiberRoot==="function")try{var b=(l.current.flags&128)===128;switch(t){case wg:var w=e4;break;case cg:w=o4;break;case Kl:w=lv;break;case gu:w=g4;break;default:w=lv}Qo.onCommitFiberRoot(iv,l,w,b)}catch($){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",$))}if(Ql&&r.memoizedUpdaters.clear(),BG(),o!==null){b=Z.T,w=ve.p,ve.p=wg,Z.T=null;try{var q=r.onRecoverableError;for(l=0;l<o.length;l++){var M=o[l],U=kG(M.stack);hr(M.source,q,M.value,U)}}finally{Z.T=b,ve.p=w}}(fg&3)!==0&&$0(),ml(r),t=r.pendingLanes,(e&261930)!==0&&(t&42)!==0?(mu=!0,r===o6?Jh++:(Jh=0,o6=r)):Jh=0,n||jn(e,li),I0(0,!1)}}function kG(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function QA(r,e){(r.pooledCacheLanes&=e)===0&&(e=r.pooledCache,e!=null&&(r.pooledCache=null,O0(e)))}function $0(){return YA(),JA(),zA(),KA()}function KA(){if(eo!==Su)return!1;var r=un,e=s4;s4=0;var o=R(fg),l=Kl===0||Kl>o?Kl:o;o=Z.T;var n=ve.p;try{ve.p=l,Z.T=null;var t=e6;e6=null,l=un;var b=fg;if(eo=bn,Fv=un=null,fg=0,(oe&(io|qg))!==uo)throw Error("Cannot flush passive effects while already rendering.");gg(b),g6=!0,Tu=!1;var w=0;if(ii=null,w=vo(),pg===LM)w0(li,w,ti);else{var q=li,M=w,U=pg===d4;!Je||M<=q||(Te?Te.run(console.timeStamp.bind(console,U?"Waiting for Paint":"Waiting",q,M,pr,fr,"secondary-light")):console.timeStamp(U?"Waiting for Paint":"Waiting",q,M,pr,fr,"secondary-light"))}q=oe,oe|=qg;var $=l.current;vb(),hA($);var J=l.current;$=r6,vb(),iA(l,J,b,t,$),IA(l),oe=q;var F=vo();if(J=w,$=Te,ii!==null?q8(J,F,ii,!0,$):!Je||F<=J||($?$.run(console.timeStamp.bind(console,"Remaining Effects",J,F,pr,fr,"secondary-dark")):console.timeStamp("Remaining Effects",J,F,pr,fr,"secondary-dark")),jn(b,F),I0(0,!1),Tu?l===zh?Ot++:(Ot=0,zh=l):Ot=0,Tu=g6=!1,Qo&&typeof Qo.onPostCommitFiberRoot==="function")try{Qo.onPostCommitFiberRoot(iv,l)}catch(Or){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",Or))}var tr=l.current.stateNode;return tr.effectDuration=0,tr.passiveEffectDuration=0,!0}finally{ve.p=n,Z.T=o,QA(r,e)}}function UA(r,e,o){e=lg(o,e),L8(e),e=f5(r.stateNode,e,2),r=Bi(r,e,2),r!==null&&(Ki(r,2),ml(r))}function te(r,e,o){if(xv=!1,r.tag===3)UA(r,r,o);else{for(;e!==null;){if(e.tag===3){UA(e,r,o);return}if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(hn===null||!hn.has(l))){r=lg(o,r),L8(r),o=p5(2),l=Bi(e,o,2),l!==null&&(j5(o,l,e,r),Ki(l,2),ml(l));return}}e=e.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function M2(r,e,o){var l=r.pingCache;if(l===null){l=r.pingCache=new lJ;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(o)||(f4=!0,n.add(o),l=DG.bind(null,r,e,o),Ql&&L0(r,o),e.then(l,l))}function DG(r,e,o){var l=r.pingCache;l!==null&&l.delete(e),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Ll&&(si=Ll=pe(),eh=Au("Promise Resolved"),rn=qu):(o&4194048)!==0&&0>Ig&&(Il=Ig=pe(),gh=Au("Promise Resolved"),$4=qu),wA()&&Z.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Re===r&&(ar&o)===o&&(xe===ln||xe===Lu&&(ar&62914560)===ar&&vo()-Bu<UM?(oe&io)===uo&&jt(r,0):p4|=o,Pt===ar&&(Pt=0)),ml(r)}function $A(r,e){e===0&&(e=Bt()),r=zo(r,e),r!==null&&(Ki(r,e),ml(r))}function aG(r){var e=r.memoizedState,o=0;e!==null&&(o=e.retryLane),$A(r,o)}function cG(r,e){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:n}=r;n!==null&&(o=n.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(e),$A(r,o)}function R2(r,e,o){if((e.subtreeFlags&67117056)!==0)for(e=e.child;e!==null;){var l=r,n=e,t=n.type===jb;t=o||t,n.tag!==22?n.flags&67108864?t&&hr(n,LA,l,n):R2(l,n,t):n.memoizedState===null&&(t&&n.flags&8192?hr(n,LA,l,n):n.subtreeFlags&67108864&&hr(n,R2,l,n,t)),e=e.sibling}}function LA(r,e){We(!0);try{gA(e),bA(e),lA(r,e.alternate,e,!1),nA(r,e,0,null,!1,0)}finally{We(!1)}}function IA(r){var e=!0;r.current.mode&(Ko|yg)||(e=!1),R2(r,r.current,e)}function FA(r){if((oe&io)===uo){var e=r.tag;if(e===3||e===1||e===0||e===11||e===14||e===15){if(e=x(r)||"ReactComponent",ku!==null){if(ku.has(e))return;ku.add(e)}else ku=new Set([e]);hr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function L0(r,e){Ql&&r.memoizedUpdaters.forEach(function(o){g0(r,o,e)})}function yG(r,e){var o=Z.actQueue;return o!==null?(o.push(e),tJ):r4(r,e)}function VG(r){wA()&&Z.actQueue===null&&hr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,x(r))})}function ml(r){r!==Nv&&r.next===null&&(Nv===null?Du=Nv=r:Nv=Nv.next=r),au=!0,Z.actQueue!==null?i6||(i6=!0,CA()):l6||(l6=!0,CA())}function I0(r,e){if(!n6&&au){n6=!0;do{var o=!1;for(var l=Du;l!==null;){if(!e)if(r!==0){var n=l.pendingLanes;if(n===0)var t=0;else{var{suspendedLanes:b,pingedLanes:w}=l;t=(1<<31-Io(42|r)+1)-1,t&=n&~(b&~w),t=t&201326741?t&201326741|1:t?t|2:0}t!==0&&(o=!0,BA(l,t))}else t=ar,t=Ln(l,l===Re?t:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Mt),(t&3)===0||In(l,t)||(o=!0,BA(l,t));l=l.next}}while(o);n6=!1}}function _G(){$h=window.event,W2()}function W2(){au=i6=l6=!1;var r=0;wn!==0&&rX()&&(r=wn);for(var e=vo(),o=null,l=Du;l!==null;){var n=l.next,t=xA(l,e);if(t===0)l.next=null,o===null?Du=n:o.next=n,n===null&&(Nv=o);else if(o=l,r!==0||(t&3)!==0)au=!0;l=n}eo!==bn&&eo!==Su||I0(r,!1),wn!==0&&(wn=0)}function xA(r,e){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:n}=r,t=r.pendingLanes&-62914561;0<t;){var b=31-Io(t),w=1<<b,q=n[b];if(q===-1){if((w&o)===0||(w&l)!==0)n[b]=Zw(w,e)}else q<=e&&(r.expiredLanes|=w);t&=~w}if(e=Re,o=ar,o=Ln(r,r===e?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Mt),l=r.callbackNode,o===0||r===e&&(ue===ut||ue===wt)||r.cancelPendingCommit!==null)return l!==null&&m2(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||In(r,o)){if(e=o&-o,e!==r.callbackPriority||Z.actQueue!==null&&l!==t6)m2(l);else return e;switch(R(o)){case wg:case cg:o=o4;break;case Kl:o=lv;break;case gu:o=g4;break;default:o=lv}return l=NA.bind(null,r),Z.actQueue!==null?(Z.actQueue.push(l),o=t6):o=r4(o,l),r.callbackPriority=e,r.callbackNode=o,e}return l!==null&&m2(l),r.callbackPriority=2,r.callbackNode=null,2}function NA(r,e){if(mu=Wu=!1,$h=window.event,eo!==bn&&eo!==Su)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(pg===Zu&&(pg=d4),$0()&&r.callbackNode!==o)return null;var l=ar;if(l=Ln(r,r===Re?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Mt),l===0)return null;return OA(r,l,e),xA(r,vo()),r.callbackNode!=null&&r.callbackNode===o?NA.bind(null,r):null}function BA(r,e){if($0())return null;Wu=mu,mu=!1,OA(r,e,!0)}function m2(r){r!==t6&&r!==null&&BX(r)}function CA(){Z.actQueue!==null&&Z.actQueue.push(function(){return W2(),null}),HJ(function(){(oe&(io|qg))!==uo?r4(e4,_G):W2()})}function G2(){if(wn===0){var r=lt;r===0&&(r=ru,ru<<=1,(ru&261888)===0&&(ru=256)),wn=r}return wn}function ZA(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Pe(r,"action"),h0(""+r)}function SA(r,e){var o=e.ownerDocument.createElement("input");return o.name=e.name,o.value=e.value,r.id&&o.setAttribute("form",r.id),e.parentNode.insertBefore(o,e),r=new FormData(r),o.parentNode.removeChild(o),r}function EG(r,e,o,l,n){if(e==="submit"&&o&&o.stateNode===n){var t=ZA((n[Fo]||null).action),b=l.submitter;b&&(e=(e=b[Fo]||null)?ZA(e.formAction):b.getAttribute("formAction"),e!==null&&(t=e,b=null));var w=new vu("action","action",null,l,n);r.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wn!==0){var q=b?SA(n,b):new FormData(n),M={pending:!0,data:q,method:n.method,action:t};Object.freeze(M),D5(o,M,null,q)}}else typeof t==="function"&&(w.preventDefault(),q=b?SA(n,b):new FormData(n),M={pending:!0,data:q,method:n.method,action:t},Object.freeze(M),D5(o,M,t,q))},currentTarget:n}]})}}function Tb(r,e,o){r.currentTarget=o;try{e(r)}catch(l){R4(l)}r.currentTarget=null}function TA(r,e){e=(e&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var n=void 0,t=l.event;if(l=l.listeners,e)for(var b=l.length-1;0<=b;b--){var w=l[b],q=w.instance,M=w.currentTarget;if(w=w.listener,q!==n&&t.isPropagationStopped())break r;q!==null?hr(q,Tb,t,w,M):Tb(t,w,M),n=q}else for(b=0;b<l.length;b++){if(w=l[b],q=w.instance,M=w.currentTarget,w=w.listener,q!==n&&t.isPropagationStopped())break r;q!==null?hr(q,Tb,t,w,M):Tb(t,w,M),n=q}}}}function dr(r,e){v6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=e[l4];o===void 0&&(o=e[l4]=new Set);var l=r+"__bubble";o.has(l)||(kA(e,r,2,!1),o.add(l))}function X2(r,e,o){v6.has(r)&&!e&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;e&&(l|=4),kA(o,r,l,e)}function Y2(r){if(!r[cu]){r[cu]=!0,Cq.forEach(function(o){o!=="selectionchange"&&(v6.has(o)||X2(o,!1,r),X2(o,!0,r))});var e=r.nodeType===9?r:r.ownerDocument;e===null||e[cu]||(e[cu]=!0,X2("selectionchange",!1,e))}}function kA(r,e,o,l){switch(Wq(e)){case wg:var n=KX;break;case cg:n=UX;break;default:n=T2}o=n.bind(null,e,o,r),n=void 0,!h4||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?r.addEventListener(e,o,{capture:!0,passive:n}):r.addEventListener(e,o,!0):n!==void 0?r.addEventListener(e,o,{passive:n}):r.addEventListener(e,o,!1)}function J2(r,e,o,l,n){var t=l;if((e&1)===0&&(e&2)===0&&l!==null)r:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===n)break;if(b===4)for(b=l.return;b!==null;){var q=b.tag;if((q===3||q===4)&&b.stateNode.containerInfo===n)return;b=b.return}for(;w!==null;){if(b=Rr(w),b===null)return;if(q=b.tag,q===5||q===6||q===26||q===27){l=t=b;continue r}w=w.parentNode}}l=l.return}dP(function(){var M=t,U=_w(o),$=[];r:{var J=WH.get(r);if(J!==void 0){var F=vu,tr=r;switch(r){case"keypress":if(E1(o)===0)break r;case"keydown":case"keyup":F=XY;break;case"focusin":tr="focus",F=P4;break;case"focusout":tr="blur",F=P4;break;case"beforeblur":case"afterblur":F=P4;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=nH;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=uY;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=zY;break;case qH:case HH:case MH:F=OY;break;case RH:F=KY;break;case"scroll":case"scrollend":F=hY;break;case"wheel":F=$Y;break;case"copy":case"cut":case"paste":F=qY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=vH;break;case"toggle":case"beforetoggle":F=IY}var Or=(e&4)!==0,Ge=!Or&&(r==="scroll"||r==="scrollend"),sr=Or?J!==null?J+"Capture":null:J;Or=[];for(var Y=M,z;Y!==null;){var K=Y;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||sr===null||(K=b0(Y,sr),K!=null&&Or.push(F0(Y,K,z))),Ge)break;Y=Y.return}0<Or.length&&(J=new F(J,tr,null,o,U),$.push({event:J,listeners:Or}))}}if((e&7)===0){r:{if(J=r==="mouseover"||r==="pointerover",F=r==="mouseout"||r==="pointerout",J&&o!==c0&&(tr=o.relatedTarget||o.fromElement)&&(Rr(tr)||tr[Vi]))break r;if(F||J){if(J=U.window===U?U:(J=U.ownerDocument)?J.defaultView||J.parentWindow:window,F){if(tr=o.relatedTarget||o.toElement,F=M,tr=tr?Rr(tr):null,tr!==null&&(Ge=rr(tr),Or=tr.tag,tr!==Ge||Or!==5&&Or!==27&&Or!==6))tr=null}else F=null,tr=M;if(F!==tr){if(Or=nH,K="onMouseLeave",sr="onMouseEnter",Y="mouse",r==="pointerout"||r==="pointerover")Or=vH,K="onPointerLeave",sr="onPointerEnter",Y="pointer";if(Ge=F==null?J:Br(F),z=tr==null?J:Br(tr),J=new Or(K,Y+"leave",F,o,U),J.target=Ge,J.relatedTarget=z,K=null,Rr(U)===M&&(Or=new Or(sr,Y+"enter",tr,o,U),Or.target=z,Or.relatedTarget=Ge,K=Or),Ge=K,F&&tr)e:{Or=fG,sr=F,Y=tr,z=0;for(K=sr;K;K=Or(K))z++;K=0;for(var D=Y;D;D=Or(D))K++;for(;0<z-K;)sr=Or(sr),z--;for(;0<K-z;)Y=Or(Y),K--;for(;z--;){if(sr===Y||Y!==null&&sr===Y.alternate){Or=sr;break e}sr=Or(sr),Y=Or(Y)}Or=null}else Or=null;F!==null&&DA($,J,F,Or,!1),tr!==null&&Ge!==null&&DA($,Ge,tr,Or,!0)}}}r:{if(J=M?Br(M):window,F=J.nodeName&&J.nodeName.toLowerCase(),F==="select"||F==="input"&&J.type==="file")var ur=i8;else if(g8(J))if(OH)ur=tG;else{ur=iG;var Fr=lG}else F=J.nodeName,!F||F.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?M&&v0(M.elementType)&&(ur=i8):ur=nG;if(ur&&(ur=ur(r,M))){l8($,ur,o,U);break r}Fr&&Fr(r,J,M),r==="focusout"&&M&&J.type==="number"&&M.memoizedProps.value!=null&&kw(J,"number",J.value)}switch(Fr=M?Br(M):window,r){case"focusin":if(g8(Fr)||Fr.contentEditable==="true")wv=Fr,A4=M,j0=null;break;case"focusout":j0=A4=wv=null;break;case"mousedown":q4=!0;break;case"contextmenu":case"mouseup":case"dragend":q4=!1,w8($,o,U);break;case"selectionchange":if(BY)break;case"keydown":case"keyup":w8($,o,U)}var Jr;if(O4)r:{switch(r){case"compositionstart":var Gr="onCompositionStart";break r;case"compositionend":Gr="onCompositionEnd";break r;case"compositionupdate":Gr="onCompositionUpdate";break r}Gr=void 0}else uv?e8(r,o)&&(Gr="onCompositionEnd"):r==="keydown"&&o.keyCode===hH&&(Gr="onCompositionStart");if(Gr&&(bH&&o.locale!=="ko"&&(uv||Gr!=="onCompositionStart"?Gr==="onCompositionEnd"&&uv&&(Jr=sP()):(_i=U,b4=("value"in _i)?_i.value:_i.textContent,uv=!0)),Fr=kb(M,Gr),0<Fr.length&&(Gr=new tH(Gr,r,null,o,U),$.push({event:Gr,listeners:Fr}),Jr?Gr.data=Jr:(Jr=o8(o),Jr!==null&&(Gr.data=Jr)))),Jr=xY?rG(r,o):eG(r,o))Gr=kb(M,"onBeforeInput"),0<Gr.length&&(Fr=new MY("onBeforeInput","beforeinput",null,o,U),$.push({event:Fr,listeners:Gr}),Fr.data=Jr);EG($,r,M,o,U)}TA($,e)})}function F0(r,e,o){return{instance:r,listener:e,currentTarget:o}}function kb(r,e){for(var o=e+"Capture",l=[];r!==null;){var n=r,t=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||t===null||(n=b0(r,o),n!=null&&l.unshift(F0(r,n,t)),n=b0(r,e),n!=null&&l.push(F0(r,n,t))),r.tag===3)return l;r=r.return}return[]}function fG(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function DA(r,e,o,l,n){for(var t=e._reactName,b=[];o!==null&&o!==l;){var w=o,q=w.alternate,M=w.stateNode;if(w=w.tag,q!==null&&q===l)break;w!==5&&w!==26&&w!==27||M===null||(q=M,n?(M=b0(o,t),M!=null&&b.unshift(F0(o,M,q))):n||(M=b0(o,t),M!=null&&b.push(F0(o,M,q)))),o=o.return}b.length!==0&&r.push({event:e,listeners:b})}function z2(r,e){p3(r,e),r!=="input"&&r!=="textarea"&&r!=="select"||e==null||e.value!==null||lH||(lH=!0,r==="select"&&e.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:dn,possibleRegistrationNames:i4};v0(r)||typeof e.is==="string"||d3(r,e,o),e.contentEditable&&!e.suppressContentEditableWarning&&e.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function to(r,e,o,l){e!==o&&(o=ki(o),ki(e)!==o&&(l[r]=e))}function pG(r,e,o){e.forEach(function(l){o[yA(l)]=l==="style"?K2(r):r.getAttribute(l)})}function Gl(r,e){e===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof e)}function aA(r,e){return r=r.namespaceURI===iu||r.namespaceURI===tv?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=e,r.innerHTML}function ki(r){return rg(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yo(r)),Ee(r)),(typeof r==="string"?r:""+r).replace(vJ,`
`).replace(hJ,"")}function cA(r,e){return e=ki(e),ki(r)===e?!0:!1}function He(r,e,o,l,n,t){switch(o){case"children":if(typeof l==="string")_1(l,e,!1),e==="body"||e==="textarea"&&l===""||t0(r,l);else if(typeof l==="number"||typeof l==="bigint")_1(""+l,e,!1),e!=="body"&&t0(r,""+l);break;case"className":c1(r,"class",l);break;case"tabIndex":c1(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":c1(r,o,l);break;case"style":fP(r,l,t);break;case"data":if(e!=="object"){c1(r,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Pe(l,o),l=h0(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(e==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(n.encType==null&&n.method==null||_u||(_u=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),n.target==null||Vu||(Vu=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):e==="input"||e==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):e!=="input"||n.type==="submit"||n.type==="image"||yu?e!=="button"||n.type==null||n.type==="submit"||yu?typeof l==="function"&&(n.name==null||aM||(aM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),n.formEncType==null&&n.formMethod==null||_u||(_u=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),n.formTarget==null||Vu||(Vu=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(yu=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(yu=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof t==="function"&&(o==="formAction"?(e!=="input"&&He(r,e,"name",n.name,n,null),He(r,e,"formEncType",n.formEncType,n,null),He(r,e,"formMethod",n.formMethod,n,null),He(r,e,"formTarget",n.formTarget,n,null)):(He(r,e,"encType",n.encType,n,null),He(r,e,"method",n.method,n,null),He(r,e,"target",n.target,n,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Pe(l,o),l=h0(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(o,l),r.onclick=yl);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(n.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Pe(l,o),o=h0(""+l),r.setAttributeNS(At,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Pe(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||Eu[o]||(Eu[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Pe(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Pe(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(Pe(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),a1(r,"popover",l);break;case"xlinkActuate":cl(r,At,"xlink:actuate",l);break;case"xlinkArcrole":cl(r,At,"xlink:arcrole",l);break;case"xlinkRole":cl(r,At,"xlink:role",l);break;case"xlinkShow":cl(r,At,"xlink:show",l);break;case"xlinkTitle":cl(r,At,"xlink:title",l);break;case"xlinkType":cl(r,At,"xlink:type",l);break;case"xmlBase":cl(r,h6,"xml:base",l);break;case"xmlLang":cl(r,h6,"xml:lang",l);break;case"xmlSpace":cl(r,h6,"xml:space",l);break;case"is":t!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),a1(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":cM||l==null||typeof l!=="object"||(cM=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=pP(o),a1(r,o,l)):dn.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&Gl(o,l)}}function Q2(r,e,o,l,n,t){switch(o){case"style":fP(r,l,t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(n.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?t0(r,l):(typeof l==="number"||typeof l==="bigint")&&t0(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(o,l),r.onclick=yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(dn.hasOwnProperty(o))l!=null&&typeof l!=="function"&&Gl(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(n=o.endsWith("Capture"),e=o.slice(2,n?o.length-7:void 0),t=r[Fo]||null,t=t!=null?t[o]:null,typeof t==="function"&&r.removeEventListener(e,t,n),typeof l==="function")){typeof t!=="function"&&t!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(e,l,n);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):a1(r,o,l)}}}function Ho(r,e,o){switch(z2(e,o),e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,n=!1,t;for(t in o)if(o.hasOwnProperty(t)){var b=o[t];if(b!=null)switch(t){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:He(r,e,t,b,o,null)}}n&&He(r,e,"srcSet",o.srcSet,o,null),l&&He(r,e,"src",o.src,o,null);return;case"input":$i("input",o),dr("invalid",r);var w=t=b=n=null,q=null,M=null;for(l in o)if(o.hasOwnProperty(l)){var U=o[l];if(U!=null)switch(l){case"name":n=U;break;case"type":b=U;break;case"checked":q=U;break;case"defaultChecked":M=U;break;case"value":t=U;break;case"defaultValue":w=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:He(r,e,l,U,o,null)}}FP(r,o),xP(r,t,w,q,M,b,n,!1);return;case"select":$i("select",o),dr("invalid",r),l=b=t=null;for(n in o)if(o.hasOwnProperty(n)&&(w=o[n],w!=null))switch(n){case"value":t=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:He(r,e,n,w,o,null)}CP(r,o),e=t,o=b,r.multiple=!!l,e!=null?Zt(r,!!l,e,!1):o!=null&&Zt(r,!!l,o,!0);return;case"textarea":$i("textarea",o),dr("invalid",r),t=n=l=null;for(b in o)if(o.hasOwnProperty(b)&&(w=o[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":n=w;break;case"children":t=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:He(r,e,b,w,o,null)}ZP(r,o),TP(r,l,n,t);return;case"option":NP(r,o);for(q in o)if(o.hasOwnProperty(q)&&(l=o[q],l!=null))switch(q){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:He(r,e,q,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<Qh.length;l++)dr(Qh[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in o)if(o.hasOwnProperty(M)&&(l=o[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:He(r,e,M,l,o,null)}return;default:if(v0(e)){for(U in o)o.hasOwnProperty(U)&&(l=o[U],l!==void 0&&Q2(r,e,U,l,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(l=o[w],l!=null&&He(r,e,w,l,o,null))}function jG(r,e,o,l){switch(z2(e,l),e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,t=null,b=null,w=null,q=null,M=null,U=null;for(F in o){var $=o[F];if(o.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":q=$;default:l.hasOwnProperty(F)||He(r,e,F,null,l,$)}}for(var J in l){var F=l[J];if($=o[J],l.hasOwnProperty(J)&&(F!=null||$!=null))switch(J){case"type":t=F;break;case"name":n=F;break;case"checked":M=F;break;case"defaultChecked":U=F;break;case"value":b=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:F!==$&&He(r,e,J,F,l,$)}}e=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,e||!l||DM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),DM=!0),!e||l||kM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),kM=!0),Tw(r,b,w,q,M,U,t,n);return;case"select":F=b=w=J=null;for(t in o)if(q=o[t],o.hasOwnProperty(t)&&q!=null)switch(t){case"value":break;case"multiple":F=q;default:l.hasOwnProperty(t)||He(r,e,t,null,l,q)}for(n in l)if(t=l[n],q=o[n],l.hasOwnProperty(n)&&(t!=null||q!=null))switch(n){case"value":J=t;break;case"defaultValue":w=t;break;case"multiple":b=t;default:t!==q&&He(r,e,n,t,l,q)}l=w,e=b,o=F,J!=null?Zt(r,!!e,J,!1):!!o!==!!e&&(l!=null?Zt(r,!!e,l,!0):Zt(r,!!e,e?[]:"",!1));return;case"textarea":F=J=null;for(w in o)if(n=o[w],o.hasOwnProperty(w)&&n!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:He(r,e,w,null,l,n)}for(b in l)if(n=l[b],t=o[b],l.hasOwnProperty(b)&&(n!=null||t!=null))switch(b){case"value":J=n;break;case"defaultValue":F=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:n!==t&&He(r,e,b,n,l,t)}SP(r,J,F);return;case"option":for(var tr in o)if(J=o[tr],o.hasOwnProperty(tr)&&J!=null&&!l.hasOwnProperty(tr))switch(tr){case"selected":r.selected=!1;break;default:He(r,e,tr,null,l,J)}for(q in l)if(J=l[q],F=o[q],l.hasOwnProperty(q)&&J!==F&&(J!=null||F!=null))switch(q){case"selected":r.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:He(r,e,q,J,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Or in o)J=o[Or],o.hasOwnProperty(Or)&&J!=null&&!l.hasOwnProperty(Or)&&He(r,e,Or,null,l,J);for(M in l)if(J=l[M],F=o[M],l.hasOwnProperty(M)&&J!==F&&(J!=null||F!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:He(r,e,M,J,l,F)}return;default:if(v0(e)){for(var Ge in o)J=o[Ge],o.hasOwnProperty(Ge)&&J!==void 0&&!l.hasOwnProperty(Ge)&&Q2(r,e,Ge,void 0,l,J);for(U in l)J=l[U],F=o[U],!l.hasOwnProperty(U)||J===F||J===void 0&&F===void 0||Q2(r,e,U,J,l,F);return}}for(var sr in o)J=o[sr],o.hasOwnProperty(sr)&&J!=null&&!l.hasOwnProperty(sr)&&He(r,e,sr,null,l,J);for($ in l)J=l[$],F=o[$],!l.hasOwnProperty($)||J===F||J==null&&F==null||He(r,e,$,J,l,F)}function yA(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function K2(r){var e={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];e[l]=r.getPropertyValue(l)}return e}function VA(r,e,o){if(e!=null&&typeof e!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,n=l="",t;for(t in e)if(e.hasOwnProperty(t)){var b=e[t];b!=null&&typeof b!=="boolean"&&b!==""&&(t.indexOf("--")===0?(o0(b,t),l+=n+t+":"+(""+b).trim()):typeof b!=="number"||b===0||oH.has(t)?(o0(b,t),l+=n+t.replace(jq,"-$1").toLowerCase().replace(dq,"-ms-")+":"+(""+b).trim()):l+=n+t.replace(jq,"-$1").toLowerCase().replace(dq,"-ms-")+":"+b+"px",n=";")}l=l||null,e=r.getAttribute("style"),e!==l&&(l=ki(l),ki(e)!==l&&(o.style=K2(r)))}}function Jg(r,e,o,l,n,t){if(n.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Pe(l,e),r===""+l)return}to(e,r,l,t)}function _A(r,e,o,l,n,t){if(n.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}to(e,r,l,t)}function U2(r,e,o,l,n,t){if(n.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Pe(l,o),r===""+l)return}to(e,r,l,t)}function EA(r,e,o,l,n,t){if(n.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Pe(l,e),r===""+l))return}to(e,r,l,t)}function $2(r,e,o,l,n,t){if(n.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Pe(l,e),o=h0(""+l),r===o)return}to(e,r,l,t)}function fA(r,e,o,l){for(var n={},t=new Set,b=r.attributes,w=0;w<b.length;w++)switch(b[w].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:t.add(b[w].name)}if(v0(e)){for(var q in o)if(o.hasOwnProperty(q)){var M=o[q];if(M!=null){if(dn.hasOwnProperty(q))typeof M!=="function"&&Gl(q,M);else if(o.suppressHydrationWarning!==!0)switch(q){case"children":typeof M!=="string"&&typeof M!=="number"||to("children",r.textContent,M,n);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=aA(r,M),to(q,b,M,n));continue;case"style":t.delete(q),VA(r,M,n);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":t.delete(q.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",q);continue;case"className":t.delete("class"),b=$P(r,"class",M),to("className",b,M,n);continue;default:l.context===Pi&&e!=="svg"&&e!=="math"?t.delete(q.toLowerCase()):t.delete(q),b=$P(r,q,M),to(q,b,M,n)}}}}else for(M in o)if(o.hasOwnProperty(M)&&(q=o[M],q!=null)){if(dn.hasOwnProperty(M))typeof q!=="function"&&Gl(M,q);else if(o.suppressHydrationWarning!==!0)switch(M){case"children":typeof q!=="string"&&typeof q!=="number"||to("children",r.textContent,q,n);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,q=q?q.__html:void 0,q!=null&&(q=aA(r,q),b!==q&&(n[M]={__html:b}));continue;case"className":Jg(r,M,"class",q,t,n);continue;case"tabIndex":Jg(r,M,"tabindex",q,t,n);continue;case"style":t.delete(M),VA(r,q,n);continue;case"multiple":t.delete(M),to(M,r.multiple,q,n);continue;case"muted":t.delete(M),to(M,r.muted,q,n);continue;case"autoFocus":t.delete("autofocus"),to(M,r.autofocus,q,n);continue;case"data":if(e!=="object"){t.delete(M),b=r.getAttribute("data"),to(M,b,q,n);continue}case"src":case"href":if(!(q!==""||e==="a"&&M==="href"||e==="object"&&M==="data")){M==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M);continue}$2(r,M,M,q,t,n);continue;case"action":case"formAction":if(b=r.getAttribute(M),typeof q==="function"){t.delete(M.toLowerCase()),M==="formAction"?(t.delete("name"),t.delete("formenctype"),t.delete("formmethod"),t.delete("formtarget")):(t.delete("enctype"),t.delete("method"),t.delete("target"));continue}else if(b===bJ){t.delete(M.toLowerCase()),to(M,"function",q,n);continue}$2(r,M,M.toLowerCase(),q,t,n);continue;case"xlinkHref":$2(r,M,"xlink:href",q,t,n);continue;case"contentEditable":U2(r,M,"contenteditable",q,t,n);continue;case"spellCheck":U2(r,M,"spellcheck",q,t,n);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":U2(r,M,M,q,t,n);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":_A(r,M,M.toLowerCase(),q,t,n);continue;case"capture":case"download":r:{w=r;var U=b=M,$=n;if(t.delete(U),w=w.getAttribute(U),w===null)switch(typeof q){case"undefined":case"function":case"symbol":break r;default:if(q===!1)break r}else if(q!=null)switch(typeof q){case"function":case"symbol":break;case"boolean":if(q===!0&&w==="")break r;break;default:if(Pe(q,b),w===""+q)break r}to(b,w,q,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(w=r,U=b=M,$=n,t.delete(U),w=w.getAttribute(U),w===null)switch(typeof q){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(q)||1>q)break r}else if(q!=null)switch(typeof q){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(q)||1>q)&&(Pe(q,b),w===""+q))break r}to(b,w,q,$)}continue;case"rowSpan":EA(r,M,"rowspan",q,t,n);continue;case"start":EA(r,M,M,q,t,n);continue;case"xHeight":Jg(r,M,"x-height",q,t,n);continue;case"xlinkActuate":Jg(r,M,"xlink:actuate",q,t,n);continue;case"xlinkArcrole":Jg(r,M,"xlink:arcrole",q,t,n);continue;case"xlinkRole":Jg(r,M,"xlink:role",q,t,n);continue;case"xlinkShow":Jg(r,M,"xlink:show",q,t,n);continue;case"xlinkTitle":Jg(r,M,"xlink:title",q,t,n);continue;case"xlinkType":Jg(r,M,"xlink:type",q,t,n);continue;case"xmlBase":Jg(r,M,"xml:base",q,t,n);continue;case"xmlLang":Jg(r,M,"xml:lang",q,t,n);continue;case"xmlSpace":Jg(r,M,"xml:space",q,t,n);continue;case"inert":q!==""||Eu[M]||(Eu[M]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",M)),_A(r,M,M,q,t,n);continue;default:if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){w=pP(M),b=!1,l.context===Pi&&e!=="svg"&&e!=="math"?t.delete(w.toLowerCase()):(U=M.toLowerCase(),U=nu.hasOwnProperty(U)?nu[U]||null:null,U!==null&&U!==M&&(b=!0,t.delete(U)),t.delete(w));r:if(U=r,$=w,w=q,l0($))if(U.hasAttribute($))U=U.getAttribute($),Pe(w,$),w=U===""+w?w:U;else{switch(typeof w){case"function":case"symbol":break r;case"boolean":if(U=$.toLowerCase().slice(0,5),U!=="data-"&&U!=="aria-")break r}w=w===void 0?void 0:null}else w=void 0;b||to(M,w,q,n)}}}return 0<t.size&&o.suppressHydrationWarning!==!0&&pG(r,t,n),Object.keys(n).length===0?null:n}function dG(r,e){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+e+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+e+" "+r[r.length-1]}}function pA(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sG(){if(typeof performance.getEntriesByType==="function"){for(var r=0,e=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var n=o[l],t=n.transferSize,b=n.initiatorType,w=n.duration;if(t&&w&&pA(b)){b=0,w=n.responseEnd;for(l+=1;l<o.length;l++){var q=o[l],M=q.startTime;if(M>w)break;var{transferSize:U,initiatorType:$}=q;U&&pA($)&&(q=q.responseEnd,b+=U*(q<w?1:(w-M)/(q-M)))}if(--l,e+=8*(t+b)/(n.duration/1000),r++,10<r)break}}if(0<r)return e/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Db(r){return r.nodeType===9?r:r.ownerDocument}function jA(r){switch(r){case tv:return Cv;case iu:return pu;default:return Pi}}function dA(r,e){if(r===Pi)switch(e){case"svg":return Cv;case"math":return pu;default:return Pi}return r===Cv&&e==="foreignObject"?Pi:r}function L2(r,e){return r==="textarea"||r==="noscript"||typeof e.children==="string"||typeof e.children==="number"||typeof e.children==="bigint"||typeof e.dangerouslySetInnerHTML==="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}function rX(){var r=window.event;if(r&&r.type==="popstate"){if(r===P6)return!1;return P6=r,!0}return P6=null,!1}function x0(){var r=window.event;return r&&r!==$h?r.type:null}function N0(){var r=window.event;return r&&r!==$h?r.timeStamp:-1.1}function eX(r){setTimeout(function(){throw r})}function oX(r,e,o){switch(e){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function gX(){}function lX(r,e,o,l){jG(r,e,o,l),r[Fo]=l}function sA(r){t0(r,"")}function iX(r,e,o){r.nodeValue=o}function rq(r){if(!r.__reactWarnedAboutChildrenConflict){var e=r[Fo]||null;if(e!==null){var o=Nr(r);o!==null&&(typeof e.children==="string"||typeof e.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,hr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):e.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,hr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Di(r){return r==="head"}function nX(r,e){r.removeChild(e)}function tX(r,e){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(e)}function eq(r,e){var o=e,l=0;do{var n=o.nextSibling;if(r.removeChild(o),n&&n.nodeType===8)if(o=n.data,o===Uh||o===fu){if(l===0){r.removeChild(n),ev(e);return}l--}else if(o===Kh||o===Pn||o===Ht||o===Bv||o===qt)l++;else if(o===wJ)B0(r.ownerDocument.documentElement);else if(o===OJ){o=r.ownerDocument.head,B0(o);for(var t=o.firstChild;t;){var{nextSibling:b,nodeName:w}=t;t[a0]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&t.rel.toLowerCase()==="stylesheet"||o.removeChild(t),t=b}}else o===PJ&&B0(r.ownerDocument.body);o=n}while(o);ev(e)}function oq(r,e){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?e?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(e?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===Uh)if(r===0)break;else r--;else o!==Kh&&o!==Pn&&o!==Ht&&o!==Bv||r++;o=l}while(o)}function vX(r){oq(r,!0)}function hX(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function bX(r){r.nodeValue=""}function uX(r){oq(r,!1)}function wX(r,e){e=e[AJ],e=e!==void 0&&e!==null&&e.hasOwnProperty("display")?e.display:null,r.style.display=e==null||typeof e==="boolean"?"":(""+e).trim()}function PX(r,e){r.nodeValue=e}function I2(r){var e=r.firstChild;e&&e.nodeType===10&&(e=e.nextSibling);for(;e;){var o=e;switch(e=e.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":I2(o),br(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function OX(r,e,o,l){for(;r.nodeType===1;){var n=o;if(r.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(e==="input"&&r.type==="hidden"){Pe(n.name,"name");var t=n.name==null?null:""+n.name;if(n.type==="hidden"&&r.getAttribute("name")===t)return r}else return r;else if(!r[a0])switch(e){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(t=r.getAttribute("rel"),t==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(t!==n.rel||r.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||r.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||r.getAttribute("title")!==(n.title==null?null:n.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(t=r.getAttribute("src"),(t!==(n.src==null?null:n.src)||r.getAttribute("type")!==(n.type==null?null:n.type)||r.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&t&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=hg(r.nextSibling),r===null)break}return null}function AX(r,e,o){if(e==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=hg(r.nextSibling),r===null)return null}return r}function gq(r,e){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!e)return null;if(r=hg(r.nextSibling),r===null)return null}return r}function F2(r){return r.data===Pn||r.data===Ht}function x2(r){return r.data===Bv||r.data===Pn&&r.ownerDocument.readyState!==VM}function qX(r,e){var o=r.ownerDocument;if(r.data===Ht)r._reactRetry=e;else if(r.data!==Pn||o.readyState!==VM)e();else{var l=function(){e(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function hg(r){for(;r!=null;r=r.nextSibling){var e=r.nodeType;if(e===1||e===3)break;if(e===8){if(e=r.data,e===Kh||e===Bv||e===Pn||e===Ht||e===qt||e===b6||e===yM)break;if(e===Uh||e===fu)return null}}return r}function lq(r){if(r.nodeType===1){for(var e=r.nodeName.toLowerCase(),o={},l=r.attributes,n=0;n<l.length;n++){var t=l[n];o[yA(t.name)]=t.name.toLowerCase()==="style"?K2(r):t.value}return{type:e,props:o}}return r.nodeType===8?r.data===qt?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function iq(r,e,o){return o===null||o[uJ]!==!0?(r.nodeValue===e?r=null:(e=ki(e),r=ki(r.nodeValue)===e?null:r.nodeValue),r):null}function N2(r){r=r.nextSibling;for(var e=0;r;){if(r.nodeType===8){var o=r.data;if(o===Uh||o===fu){if(e===0)return hg(r.nextSibling);e--}else o!==Kh&&o!==Bv&&o!==Pn&&o!==Ht&&o!==qt||e++}r=r.nextSibling}return null}function nq(r){r=r.previousSibling;for(var e=0;r;){if(r.nodeType===8){var o=r.data;if(o===Kh||o===Bv||o===Pn||o===Ht||o===qt){if(e===0)return r;e--}else o!==Uh&&o!==fu||e++}r=r.previousSibling}return null}function HX(r){ev(r)}function MX(r){ev(r)}function RX(r){ev(r)}function tq(r,e,o,l,n){switch(n&&Vw(r,l.ancestorInfo),e=Db(o),r){case"html":if(r=e.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=e.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=e.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function WX(r,e,o,l){if(!o[Vi]&&Nr(o)){var n=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",n,n,n)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(n=o.attributes;n.length;)o.removeAttributeNode(n[0]);Ho(o,r,e),o[Mo]=l,o[Fo]=e}function B0(r){for(var e=r.attributes;e.length;)r.removeAttributeNode(e[0]);br(r)}function ab(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function vq(r,e,o){var l=Zv;if(l&&typeof e==="string"&&e){var n=Yg(e);n='link[rel="'+r+'"][href="'+n+'"]',typeof o==="string"&&(n+='[crossorigin="'+o+'"]'),dM.has(n)||(dM.add(n),r={rel:r,crossOrigin:o,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Ho(e,"link",r),zr(e),l.head.appendChild(e)))}}function hq(r,e,o,l){var n=(n=ci.current)?ab(n):null;if(!n)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=st(o.href),e=ge(n).hoistableStyles,l=e.get(o),l||(l={type:"style",instance:null,count:0,state:null},e.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=st(o.href);var t=ge(n).hoistableStyles,b=t.get(r);if(!b&&(n=n.ownerDocument||n,b={type:"stylesheet",instance:null,count:0,state:{loading:Rt,preload:null}},t.set(r,b),(t=n.querySelector(C0(r)))&&!t._p&&(b.instance=t,b.state.loading=Lh|Bg),!Cg.has(r))){var w={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};Cg.set(r,w),t||mX(n,r,w,b.state)}if(e&&l===null)throw o=`

  - `+cb(e)+`
  + `+cb(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return b}if(e&&l!==null)throw o=`

  - `+cb(e)+`
  + `+cb(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return e=o.async,o=o.src,typeof o==="string"&&e&&typeof e!=="function"&&typeof e!=="symbol"?(o=rv(o),e=ge(n).hoistableScripts,l=e.get(o),l||(l={type:"script",instance:null,count:0,state:null},e.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function cb(r){var e=0,o="<link";return typeof r.rel==="string"?(e++,o+=' rel="'+r.rel+'"'):ag.call(r,"rel")&&(e++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(e++,o+=' href="'+r.href+'"'):ag.call(r,"href")&&(e++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(e++,o+=' precedence="'+r.precedence+'"'):ag.call(r,"precedence")&&(e++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>e&&(o+=" ..."),o+" />"}function st(r){return'href="'+Yg(r)+'"'}function C0(r){return'link[rel="stylesheet"]['+r+"]"}function bq(r){return Er({},r,{"data-precedence":r.precedence,precedence:null})}function mX(r,e,o,l){r.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=Lh:(e=r.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=Lh}),e.addEventListener("error",function(){return l.loading|=pM}),Ho(e,"link",o),zr(e),r.head.appendChild(e))}function rv(r){return'[src="'+Yg(r)+'"]'}function Z0(r){return"script[async]"+r}function uq(r,e,o){if(e.count++,e.instance===null)switch(e.type){case"style":var l=r.querySelector('style[data-href~="'+Yg(o.href)+'"]');if(l)return e.instance=l,zr(l),l;var n=Er({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),zr(l),Ho(l,"style",n),yb(l,o.precedence,r),e.instance=l;case"stylesheet":n=st(o.href);var t=r.querySelector(C0(n));if(t)return e.state.loading|=Bg,e.instance=t,zr(t),t;l=bq(o),(n=Cg.get(n))&&B2(l,n),t=(r.ownerDocument||r).createElement("link"),zr(t);var b=t;return b._p=new Promise(function(w,q){b.onload=w,b.onerror=q}),Ho(t,"link",l),e.state.loading|=Bg,yb(t,o.precedence,r),e.instance=t;case"script":if(t=rv(o.src),n=r.querySelector(Z0(t)))return e.instance=n,zr(n),n;if(l=o,n=Cg.get(t))l=Er({},o),C2(l,n);return r=r.ownerDocument||r,n=r.createElement("script"),zr(n),Ho(n,"link",l),r.head.appendChild(n),e.instance=n;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+e.type+'". this is a bug in React.')}else e.type==="stylesheet"&&(e.state.loading&Bg)===Rt&&(l=e.instance,e.state.loading|=Bg,yb(l,o.precedence,r));return e.instance}function yb(r,e,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,t=n,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===e)t=w;else if(t!==n)break}t?t.parentNode.insertBefore(r,t.nextSibling):(e=o.nodeType===9?o.head:o,e.insertBefore(r,e.firstChild))}function B2(r,e){r.crossOrigin==null&&(r.crossOrigin=e.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=e.referrerPolicy),r.title==null&&(r.title=e.title)}function C2(r,e){r.crossOrigin==null&&(r.crossOrigin=e.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=e.referrerPolicy),r.integrity==null&&(r.integrity=e.integrity)}function wq(r,e,o){if(ju===null){var l=new Map,n=ju=new Map;n.set(o,l)}else n=ju,l=n.get(o),l||(l=new Map,n.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(n=0;n<o.length;n++){var t=o[n];if(!(t[a0]||t[Mo]||r==="link"&&t.getAttribute("rel")==="stylesheet")&&t.namespaceURI!==tv){var b=t.getAttribute(e)||"";b=r+b;var w=l.get(b);w?w.push(t):l.set(b,[t])}}return l}function Pq(r,e,o){r=r.ownerDocument||r,r.head.insertBefore(o,e==="title"?r.querySelector("head > title"):null)}function GX(r,e,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===Cv||e.itemProp!=null)return!l||e.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof e.precedence!=="string"||typeof e.href!=="string"||e.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof e.rel!=="string"||typeof e.href!=="string"||e.href===""||e.onLoad||e.onError){if(e.rel==="stylesheet"&&typeof e.precedence==="string"){r=e.href;var{onError:n,disabled:t}=e;o=[],e.onLoad&&o.push("`onLoad`"),n&&o.push("`onError`"),t!=null&&o.push("`disabled`"),n=dG(o,"and"),n+=o.length===1?" prop":" props",t=o.length===1?"an "+n:"the "+n,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,t,n)}l&&(typeof e.rel!=="string"||typeof e.href!=="string"||e.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(e.onError||e.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(e.rel){case"stylesheet":return r=e.precedence,e=e.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&e==null;default:return!0}case"script":if(r=e.async&&typeof e.async!=="function"&&typeof e.async!=="symbol",!r||e.onLoad||e.onError||!e.src||typeof e.src!=="string"){l&&(r?e.onLoad||e.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function Oq(r){return r.type==="stylesheet"&&(r.state.loading&jM)===Rt?!1:!0}function XX(r,e,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&Bg)===Rt){if(o.instance===null){var n=st(l.href),t=e.querySelector(C0(n));if(t){e=t._p,e!==null&&typeof e==="object"&&typeof e.then==="function"&&(r.count++,r=Vb.bind(r),e.then(r,r)),o.state.loading|=Bg,o.instance=t,zr(t);return}t=e.ownerDocument||e,l=bq(l),(n=Cg.get(n))&&B2(l,n),t=t.createElement("link"),zr(t);var b=t;b._p=new Promise(function(w,q){b.onload=w,b.onerror=q}),Ho(t,"link",l),o.instance=t}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,e),(e=o.state.preload)&&(o.state.loading&jM)===Rt&&(r.count++,o=Vb.bind(r),e.addEventListener("load",o),e.addEventListener("error",o))}}function YX(r,e){return r.stylesheets&&r.count===0&&_b(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&_b(r,r.stylesheets),r.unsuspend){var t=r.unsuspend;r.unsuspend=null,t()}},MJ+e);0<r.imgBytes&&A6===0&&(A6=125*sG()*WJ);var n=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&_b(r,r.stylesheets),r.unsuspend)){var t=r.unsuspend;r.unsuspend=null,t()}},(r.imgBytes>A6?50:RJ)+e);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Vb(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_b(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function _b(r,e){r.stylesheets=null,r.unsuspend!==null&&(r.count++,du=new Map,e.forEach(JX,r),du=null,Vb.call(r))}function JX(r,e){if(!(e.state.loading&Bg)){var o=du.get(r);if(o)var l=o.get(q6);else{o=new Map,du.set(r,o);for(var n=r.querySelectorAll("link[data-precedence],style[data-precedence]"),t=0;t<n.length;t++){var b=n[t];if(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")o.set(b.dataset.precedence,b),l=b}l&&o.set(q6,l)}n=e.instance,b=n.getAttribute("data-precedence"),t=o.get(b)||l,t===l&&o.set(q6,n),o.set(b,n),this.count++,l=Vb.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),t?t.parentNode.insertBefore(n,t.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(n,r.firstChild)),e.state.loading|=Bg}}function zX(r,e,o,l,n,t,b,w,q){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Mt,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=t,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(e=0;31>e;e++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function Aq(r,e,o,l,n,t,b,w,q,M,U,$){return r=new zX(r,e,o,b,q,M,U,$,w),e=yY,t===!0&&(e|=Ko|yg),e|=kr,t=X(3,null,null,e),r.current=t,t.stateNode=r,e=u5(),yn(e),r.pooledCache=e,yn(e),t.memoizedState={element:l,isDehydrated:o,cache:e},q5(t),r}function qq(r){if(!r)return pi;return r=pi,r}function Z2(r,e,o,l,n,t){if(Qo&&typeof Qo.onScheduleFiberRoot==="function")try{Qo.onScheduleFiberRoot(iv,l,o)}catch(b){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",b))}n=qq(n),l.context===null?l.context=n:l.pendingContext=n,Jl&&ug!==null&&!oR&&(oR=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,x(ug)||"Unknown")),l=Ni(e),l.payload={element:o},t=t===void 0?null:t,t!==null&&(typeof t!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",t),l.callback=t),o=Bi(r,l,e),o!==null&&(bl(e,"root.render()",null),Be(o,r,e),M0(o,r,e))}function Hq(r,e){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<e?o:e}}function S2(r,e){Hq(r,e),(r=r.alternate)&&Hq(r,e)}function Mq(r){if(r.tag===13||r.tag===31){var e=zo(r,67108864);e!==null&&Be(e,r,67108864),S2(r,67108864)}}function Rq(r){if(r.tag===13||r.tag===31){var e=vg(r);e=Bn(e);var o=zo(r,e);o!==null&&Be(o,r,e),S2(r,e)}}function QX(){return ug}function KX(r,e,o,l){var n=Z.T;Z.T=null;var t=ve.p;try{ve.p=wg,T2(r,e,o,l)}finally{ve.p=t,Z.T=n}}function UX(r,e,o,l){var n=Z.T;Z.T=null;var t=ve.p;try{ve.p=cg,T2(r,e,o,l)}finally{ve.p=t,Z.T=n}}function T2(r,e,o,l){if(rw){var n=k2(l);if(n===null)J2(r,e,l,ew,o),mq(r,l);else if($X(n,r,e,o,l))l.stopPropagation();else if(mq(r,l),e&4&&-1<GJ.indexOf(r)){for(;n!==null;){var t=Nr(n);if(t!==null)switch(t.tag){case 3:if(t=t.stateNode,t.current.memoizedState.isDehydrated){var b=nl(t.pendingLanes);if(b!==0){var w=t;w.pendingLanes|=2;for(w.entangledLanes|=2;b;){var q=1<<31-Io(b);w.entanglements[1]|=q,b&=~q}ml(t),(oe&(io|qg))===uo&&(Cu=vo()+$M,I0(0,!1))}}break;case 31:case 13:w=zo(t,2),w!==null&&Be(w,t,2),pt(),S2(t,2)}if(t=k2(l),t===null&&J2(r,e,l,ew,o),t===n)break;n=t}n!==null&&l.stopPropagation()}else J2(r,e,l,null,o)}}function k2(r){return r=_w(r),D2(r)}function D2(r){if(ew=null,r=Rr(r),r!==null){var e=rr(r);if(e===null)r=null;else{var o=e.tag;if(o===13){if(r=wr(e),r!==null)return r;r=null}else if(o===31){if(r=ir(e),r!==null)return r;r=null}else if(o===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;r=null}else e!==r&&(r=null)}}return ew=r,null}function Wq(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return wg;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return cg;case"message":switch(SX()){case e4:return wg;case o4:return cg;case lv:case TX:return Kl;case g4:return gu;default:return Kl}default:return Kl}}function mq(r,e){switch(r){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Fh.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xh.delete(e.pointerId)}}function S0(r,e,o,l,n,t){if(r===null||r.nativeEvent!==t)return r={blockedOn:e,domEventName:o,eventSystemFlags:l,nativeEvent:t,targetContainers:[n]},e!==null&&(e=Nr(e),e!==null&&Mq(e)),r;return r.eventSystemFlags|=l,e=r.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),r}function $X(r,e,o,l,n){switch(e){case"focusin":return On=S0(On,r,e,o,l,n),!0;case"dragenter":return An=S0(An,r,e,o,l,n),!0;case"mouseover":return qn=S0(qn,r,e,o,l,n),!0;case"pointerover":var t=n.pointerId;return Fh.set(t,S0(Fh.get(t)||null,r,e,o,l,n)),!0;case"gotpointercapture":return t=n.pointerId,xh.set(t,S0(xh.get(t)||null,r,e,o,l,n)),!0}return!1}function Gq(r){var e=Rr(r.target);if(e!==null){var o=rr(e);if(o!==null){if(e=o.tag,e===13){if(e=wr(o),e!==null){r.blockedOn=e,or(r.priority,function(){Rq(o)});return}}else if(e===31){if(e=ir(o),e!==null){r.blockedOn=e,or(r.priority,function(){Rq(o)});return}}else if(e===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Eb(r){if(r.blockedOn!==null)return!1;for(var e=r.targetContainers;0<e.length;){var o=k2(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),n=l;c0!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),c0=n,o.target.dispatchEvent(l),c0===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),c0=null}else return e=Nr(o),e!==null&&Mq(e),r.blockedOn=o,!1;e.shift()}return!0}function Xq(r,e,o){Eb(r)&&o.delete(e)}function LX(){H6=!1,On!==null&&Eb(On)&&(On=null),An!==null&&Eb(An)&&(An=null),qn!==null&&Eb(qn)&&(qn=null),Fh.forEach(Xq),xh.forEach(Xq)}function fb(r,e){r.blockedOn===e&&(r.blockedOn=null,H6||(H6=!0,le.unstable_scheduleCallback(le.unstable_NormalPriority,LX)))}function Yq(r){ow!==r&&(ow=r,le.unstable_scheduleCallback(le.unstable_NormalPriority,function(){ow===r&&(ow=null);for(var e=0;e<r.length;e+=3){var o=r[e],l=r[e+1],n=r[e+2];if(typeof l!=="function")if(D2(l||o)===null)continue;else break;var t=Nr(o);t!==null&&(r.splice(e,3),e-=3,o={pending:!0,data:n,method:o.method,action:l},Object.freeze(o),D5(t,o,l,n))}}))}function ev(r){function e(q){return fb(q,r)}On!==null&&fb(On,r),An!==null&&fb(An,r),qn!==null&&fb(qn,r),Fh.forEach(e),xh.forEach(e);for(var o=0;o<Hn.length;o++){var l=Hn[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Hn.length&&(o=Hn[0],o.blockedOn===null);)Gq(o),o.blockedOn===null&&Hn.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var n=o[l],t=o[l+1],b=n[Fo]||null;if(typeof t==="function")b||Yq(o);else if(b){var w=null;if(t&&t.hasAttribute("formAction")){if(n=t,b=t[Fo]||null)w=b.formAction;else if(D2(n)!==null)continue}else w=b.action;typeof w==="function"?o[l+1]=w:(o.splice(l,3),l-=3),Yq(o)}}}function Jq(){function r(t){t.canIntercept&&t.info==="react-transition"&&t.intercept({handler:function(){return new Promise(function(b){return n=b})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var t=navigation.currentEntry;t&&t.url!=null&&navigation.navigate(t.url,{state:t.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,n=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function a2(r){this._internalRoot=r}function pb(r){this._internalRoot=r}function zq(r){r[Vi]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var Er=Object.assign,IX=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),ov=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),jb=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),y2=Symbol.for("react.consumer"),Yl=Symbol.for("react.context"),T0=Symbol.for("react.forward_ref"),V2=Symbol.for("react.suspense"),_2=Symbol.for("react.suspense_list"),db=Symbol.for("react.memo"),bg=Symbol.for("react.lazy"),E2=Symbol.for("react.activity"),FX=Symbol.for("react.memo_cache_sentinel"),Qq=Symbol.iterator,xX=Symbol.for("react.client.reference"),go=Array.isArray,Z=Tv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=W6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,NX=Object.freeze({pending:!1,data:null,method:null,action:null}),f2=[],p2=[],sl=-1,ai=Wr(null),k0=Wr(null),ci=Wr(null),sb=Wr(null),D0=0,Kq,Uq,$q,Lq,Iq,Fq,xq;a.__reactDisabledLog=!0;var j2,Nq,d2=!1,s2=new(typeof WeakMap==="function"?WeakMap:Map),ug=null,Jl=!1,ag=Object.prototype.hasOwnProperty,r4=le.unstable_scheduleCallback,BX=le.unstable_cancelCallback,CX=le.unstable_shouldYield,ZX=le.unstable_requestPaint,vo=le.unstable_now,SX=le.unstable_getCurrentPriorityLevel,e4=le.unstable_ImmediatePriority,o4=le.unstable_UserBlockingPriority,lv=le.unstable_NormalPriority,TX=le.unstable_LowPriority,g4=le.unstable_IdlePriority,kX=le.log,DX=le.unstable_setDisableYieldValue,iv=null,Qo=null,zl=!1,Ql=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Io=Math.clz32?Math.clz32:k1,aX=Math.log,cX=Math.LN2,ru=256,eu=262144,ou=4194304,wg=2,cg=8,Kl=32,gu=268435456,yi=Math.random().toString(36).slice(2),Mo="__reactFiber$"+yi,Fo="__reactProps$"+yi,Vi="__reactContainer$"+yi,l4="__reactEvents$"+yi,yX="__reactListeners$"+yi,VX="__reactHandles$"+yi,Bq="__reactResources$"+yi,a0="__reactMarker$"+yi,Cq=new Set,dn={},i4={},_X={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},EX=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zq={},Sq={},fX=/[\n"\\]/g,Tq=!1,kq=!1,Dq=!1,aq=!1,cq=!1,yq=!1,Vq=["value","defaultValue"],_q=!1,Eq=/["'&<>\n\t]|^\s|\s$/,pX="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),fq="applet caption html table td th marquee object template foreignObject desc title".split(" "),jX=fq.concat(["button"]),dX="dd dt li option optgroup p rp rt".split(" "),pq={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},lu={},n4={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},jq=/([A-Z])/g,dq=/^ms-/,sX=/^(?:webkit|moz|o)[A-Z]/,rY=/^-ms-/,eY=/-(.)/g,sq=/;\s*$/,nv={},t4={},rH=!1,eH=!1,oH=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),iu="http://www.w3.org/1998/Math/MathML",tv="http://www.w3.org/2000/svg",oY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gH={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},vv={},gY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lH=!1,xo={},iH=/^on./,iY=/^on[^A-Z]/,nY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vY=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,c0=null,hv=null,bv=null,v4=!1,Ul=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h4=!1;if(Ul)try{var y0={};Object.defineProperty(y0,"passive",{get:function(){h4=!0}}),window.addEventListener("test",y0,y0),window.removeEventListener("test",y0,y0)}catch(r){h4=!1}var _i=null,b4=null,tu=null,sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=yo(sn),V0=Er({},sn,{view:0,detail:0}),hY=yo(V0),u4,w4,_0,hu=Er({},V0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ew,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==_0&&(_0&&r.type==="mousemove"?(u4=r.screenX-_0.screenX,w4=r.screenY-_0.screenY):w4=u4=0,_0=r),u4},movementY:function(r){return"movementY"in r?r.movementY:w4}}),nH=yo(hu),bY=Er({},hu,{dataTransfer:0}),uY=yo(bY),wY=Er({},V0,{relatedTarget:0}),P4=yo(wY),PY=Er({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),OY=yo(PY),AY=Er({},sn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),qY=yo(AY),HY=Er({},sn,{data:0}),tH=yo(HY),MY=tH,RY={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WY={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mY={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},GY=Er({},V0,{key:function(r){if(r.key){var e=RY[r.key]||r.key;if(e!=="Unidentified")return e}return r.type==="keypress"?(r=E1(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?WY[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ew,charCode:function(r){return r.type==="keypress"?E1(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?E1(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),XY=yo(GY),YY=Er({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vH=yo(YY),JY=Er({},V0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ew}),zY=yo(JY),QY=Er({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),KY=yo(QY),UY=Er({},hu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),$Y=yo(UY),LY=Er({},sn,{newState:0,oldState:0}),IY=yo(LY),FY=[9,13,27,32],hH=229,O4=Ul&&"CompositionEvent"in window,E0=null;Ul&&"documentMode"in document&&(E0=document.documentMode);var xY=Ul&&"TextEvent"in window&&!E0,bH=Ul&&(!O4||E0&&8<E0&&11>=E0),uH=32,wH=String.fromCharCode(uH),PH=!1,uv=!1,NY={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},f0=null,p0=null,OH=!1;Ul&&(OH=oG("input")&&(!document.documentMode||9<document.documentMode));var No=typeof Object.is==="function"?Object.is:vG,BY=Ul&&"documentMode"in document&&11>=document.documentMode,wv=null,A4=null,j0=null,q4=!1,Pv={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},H4={},AH={};Ul&&(AH=document.createElement("div").style,("AnimationEvent"in window)||(delete Pv.animationend.animation,delete Pv.animationiteration.animation,delete Pv.animationstart.animation),("TransitionEvent"in window)||delete Pv.transitionend.transition);var qH=Sn("animationend"),HH=Sn("animationiteration"),MH=Sn("animationstart"),CY=Sn("transitionrun"),ZY=Sn("transitionstart"),SY=Sn("transitioncancel"),RH=Sn("transitionend"),WH=new Map,M4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");M4.push("scrollEnd");var mH=0;if(typeof performance==="object"&&typeof performance.now==="function")var TY=performance,GH=function(){return TY.now()};else{var kY=Date;GH=function(){return kY.now()}}var R4=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},DY="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bu=0,W4=1,m4=2,G4=3,uu="– ",wu="+ ",XH="  ",Je=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",zg="Components ⚛",fr="Scheduler ⚛",pr="Blocking",Ei=!1,ri={color:"primary",properties:null,tooltipText:"",track:zg},fi={start:-0,end:-0,detail:{devtools:ri}},aY=["Changed Props",""],YH="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",cY=["Changed Props",YH],d0=1,ei=2,Qg=[],Ov=0,X4=0,pi={};Object.freeze(pi);var Kg=null,Av=null,$r=0,yY=1,kr=2,Ko=8,yg=16,VY=32,JH=!1;try{var zH=Object.preventExtensions({})}catch(r){JH=!0}var Y4=new WeakMap,qv=[],Hv=0,Pu=null,s0=0,Ug=[],$g=0,rt=null,oi=1,gi="",Ro=null,ze=null,jr=!1,$l=!1,Pg=null,ji=null,Lg=!1,J4=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),z4=Wr(null),Q4=Wr(null),QH={},Ou=null,Mv=null,Rv=!1,_Y=typeof AbortController<"u"?AbortController:function(){var r=[],e=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){e.aborted=!0,r.forEach(function(o){return o()})}},EY=le.unstable_scheduleCallback,fY=le.unstable_NormalPriority,fe={$$typeof:Yl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},pe=le.unstable_now,Au=console.createTask?console.createTask:function(){return null},rh=1,qu=2,ho=-0,di=-0,li=-0,ii=null,Bo=-1.1,et=-0,Fe=-0,Qr=-1.1,Ur=-1.1,Le=null,Ce=!1,si=-0,Ll=-1.1,eh=null,rn=0,K4=null,U4=null,ot=-1.1,oh=null,Wv=-1.1,Hu=-1.1,Il=-0,ni=-1.1,Ig=-1.1,$4=0,gh=null,KH=null,UH=null,en=-1.1,gt=null,on=-1.1,Mu=-1.1,$H=-0,LH=-0,Ru=0,ti=null,IH=0,lh=-1.1,Wu=!1,mu=!1,ih=null,L4=0,lt=0,mv=null,FH=Z.S;Z.S=function(r,e){if(KM=vo(),typeof e==="object"&&e!==null&&typeof e.then==="function"){if(0>ni&&0>Ig){ni=pe();var o=N0(),l=x0();if(o!==on||l!==gt)on=-1.1;en=o,gt=l}AG(r,e)}FH!==null&&FH(r,e)};var it=Wr(null),Vg={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},nh=[],th=[],vh=[],hh=[],bh=[],uh=[],nt=new Set;Vg.recordUnsafeLifecycleWarnings=function(r,e){nt.has(r.type)||(typeof e.componentWillMount==="function"&&e.componentWillMount.__suppressDeprecationWarning!==!0&&nh.push(r),r.mode&Ko&&typeof e.UNSAFE_componentWillMount==="function"&&th.push(r),typeof e.componentWillReceiveProps==="function"&&e.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&vh.push(r),r.mode&Ko&&typeof e.UNSAFE_componentWillReceiveProps==="function"&&hh.push(r),typeof e.componentWillUpdate==="function"&&e.componentWillUpdate.__suppressDeprecationWarning!==!0&&bh.push(r),r.mode&Ko&&typeof e.UNSAFE_componentWillUpdate==="function"&&uh.push(r))},Vg.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<nh.length&&(nh.forEach(function(w){r.add(x(w)||"Component"),nt.add(w.type)}),nh=[]);var e=new Set;0<th.length&&(th.forEach(function(w){e.add(x(w)||"Component"),nt.add(w.type)}),th=[]);var o=new Set;0<vh.length&&(vh.forEach(function(w){o.add(x(w)||"Component"),nt.add(w.type)}),vh=[]);var l=new Set;0<hh.length&&(hh.forEach(function(w){l.add(x(w)||"Component"),nt.add(w.type)}),hh=[]);var n=new Set;0<bh.length&&(bh.forEach(function(w){n.add(x(w)||"Component"),nt.add(w.type)}),bh=[]);var t=new Set;if(0<uh.length&&(uh.forEach(function(w){t.add(x(w)||"Component"),nt.add(w.type)}),uh=[]),0<e.size){var b=H(e);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,b)}0<l.size&&(b=H(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,b)),0<t.size&&(b=H(t),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,b)),0<r.size&&(b=H(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<o.size&&(b=H(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<n.size&&(b=H(n),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b))};var Gu=new Map,xH=new Set;Vg.recordLegacyContextWarning=function(r,e){var o=null;for(var l=r;l!==null;)l.mode&Ko&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!xH.has(r.type)&&(l=Gu.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||e!==null&&typeof e.getChildContext==="function")&&(l===void 0&&(l=[],Gu.set(o,l)),l.push(r))},Vg.flushLegacyContextWarning=function(){Gu.forEach(function(r){if(r.length!==0){var e=r[0],o=new Set;r.forEach(function(n){o.add(x(n)||"Component"),xH.add(n.type)});var l=H(o);hr(e,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},Vg.discardPendingWarnings=function(){nh=[],th=[],vh=[],hh=[],bh=[],uh=[],Gu=new Map};var NH={react_stack_bottom_frame:function(r,e,o){var l=Jl;Jl=!0;try{return r(e,o)}finally{Jl=l}}},I4=NH.react_stack_bottom_frame.bind(NH),BH={react_stack_bottom_frame:function(r){var e=Jl;Jl=!0;try{return r.render()}finally{Jl=e}}},CH=BH.react_stack_bottom_frame.bind(BH),ZH={react_stack_bottom_frame:function(r,e){try{e.componentDidMount()}catch(o){te(r,r.return,o)}}},F4=ZH.react_stack_bottom_frame.bind(ZH),SH={react_stack_bottom_frame:function(r,e,o,l,n){try{e.componentDidUpdate(o,l,n)}catch(t){te(r,r.return,t)}}},TH=SH.react_stack_bottom_frame.bind(SH),kH={react_stack_bottom_frame:function(r,e){var o=e.stack;r.componentDidCatch(e.value,{componentStack:o!==null?o:""})}},pY=kH.react_stack_bottom_frame.bind(kH),DH={react_stack_bottom_frame:function(r,e,o){try{o.componentWillUnmount()}catch(l){te(r,e,l)}}},aH=DH.react_stack_bottom_frame.bind(DH),cH={react_stack_bottom_frame:function(r){var e=r.create;return r=r.inst,e=e(),r.destroy=e}},jY=cH.react_stack_bottom_frame.bind(cH),yH={react_stack_bottom_frame:function(r,e,o){try{o()}catch(l){te(r,e,l)}}},dY=yH.react_stack_bottom_frame.bind(yH),VH={react_stack_bottom_frame:function(r){var e=r._init;return e(r._payload)}},sY=VH.react_stack_bottom_frame.bind(VH),Gv=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),x4=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Yu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},tt=null,wh=!1,Xv=null,Ph=0,Dr=null,N4,_H=N4=!1,EH={},fH={},pH={};m=function(r,e,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=x(r),n=l||"null";if(!EH[n]){EH[n]=!0,o=o._owner,r=r._debugOwner;var t="";r&&typeof r.tag==="number"&&(n=x(r))&&(t=`

Check the render method of \``+n+"`."),t||l&&(t=`

Check the top-level render call using <`+l+">.");var b="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=x(o):typeof o.name==="string"&&(l=o.name),l&&(b=" It was passed a child from "+l+".")),hr(e,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,b)})}}};var vt=D8(!0),jH=D8(!1),dH=0,sH=1,rM=2,B4=3,gn=!1,eM=!1,C4=null,Z4=!1,Yv=Wr(null),Ju=Wr(0),Og=Wr(null),Fg=null,Jv=1,Oh=2,ae=Wr(0),zu=0,xg=1,Co=2,Ag=4,Zo=8,zv,oM=new Set,gM=new Set,S4=new Set,lM=new Set,vi=0,Ir=null,Me=null,je=null,Qu=!1,Qv=!1,ht=!1,Ku=0,Ah=0,hi=null,rJ=0,eJ=25,B=null,Ng=null,bi=-1,qh=!1,Hh={readContext:$e,use:Si,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};Hh.useEffectEvent=Se;var T4=null,iM=null,k4=null,nM=null,Fl=null,_g=null,Uu=null;T4={readContext:function(r){return $e(r)},use:Si,useCallback:function(r,e){return B="useCallback",_r(),at(e),Z5(r,e)},useContext:function(r){return B="useContext",_r(),$e(r)},useEffect:function(r,e){return B="useEffect",_r(),at(e),Gb(r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",_r(),at(o),C5(r,e,o)},useInsertionEffect:function(r,e){B="useInsertionEffect",_r(),at(e),_n(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",_r(),at(e),B5(r,e)},useMemo:function(r,e){B="useMemo",_r(),at(e);var o=Z.H;Z.H=Fl;try{return S5(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",_r();var l=Z.H;Z.H=Fl;try{return Q5(r,e,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",_r(),x5(r)},useState:function(r){B="useState",_r();var e=Z.H;Z.H=Fl;try{return L5(r)}finally{Z.H=e}},useDebugValue:function(){B="useDebugValue",_r()},useDeferredValue:function(r,e){return B="useDeferredValue",_r(),T5(r,e)},useTransition:function(){return B="useTransition",_r(),a5()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",_r(),U5(r,e,o)},useId:function(){return B="useId",_r(),c5()},useFormState:function(r,e){return B="useFormState",_r(),Hb(),yt(r,e)},useActionState:function(r,e){return B="useActionState",_r(),yt(r,e)},useOptimistic:function(r){return B="useOptimistic",_r(),I5(r)},useHostTransitionStatus:En,useMemoCache:Vn,useCacheRefresh:function(){return B="useCacheRefresh",_r(),y5()},useEffectEvent:function(r){return B="useEffectEvent",_r(),N5(r)}},iM={readContext:function(r){return $e(r)},use:Si,useCallback:function(r,e){return B="useCallback",s(),Z5(r,e)},useContext:function(r){return B="useContext",s(),$e(r)},useEffect:function(r,e){return B="useEffect",s(),Gb(r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",s(),C5(r,e,o)},useInsertionEffect:function(r,e){B="useInsertionEffect",s(),_n(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",s(),B5(r,e)},useMemo:function(r,e){B="useMemo",s();var o=Z.H;Z.H=Fl;try{return S5(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",s();var l=Z.H;Z.H=Fl;try{return Q5(r,e,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",s(),x5(r)},useState:function(r){B="useState",s();var e=Z.H;Z.H=Fl;try{return L5(r)}finally{Z.H=e}},useDebugValue:function(){B="useDebugValue",s()},useDeferredValue:function(r,e){return B="useDeferredValue",s(),T5(r,e)},useTransition:function(){return B="useTransition",s(),a5()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",s(),U5(r,e,o)},useId:function(){return B="useId",s(),c5()},useActionState:function(r,e){return B="useActionState",s(),yt(r,e)},useFormState:function(r,e){return B="useFormState",s(),Hb(),yt(r,e)},useOptimistic:function(r){return B="useOptimistic",s(),I5(r)},useHostTransitionStatus:En,useMemoCache:Vn,useCacheRefresh:function(){return B="useCacheRefresh",s(),y5()},useEffectEvent:function(r){return B="useEffectEvent",s(),N5(r)}},k4={readContext:function(r){return $e(r)},use:Si,useCallback:function(r,e){return B="useCallback",s(),Jb(r,e)},useContext:function(r){return B="useContext",s(),$e(r)},useEffect:function(r,e){B="useEffect",s(),Vo(2048,Zo,r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",s(),Yb(r,e,o)},useInsertionEffect:function(r,e){return B="useInsertionEffect",s(),Vo(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",s(),Vo(4,Ag,r,e)},useMemo:function(r,e){B="useMemo",s();var o=Z.H;Z.H=_g;try{return zb(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",s();var l=Z.H;Z.H=_g;try{return ct(r,e,o)}finally{Z.H=l}},useRef:function(){return B="useRef",s(),be().memoizedState},useState:function(){B="useState",s();var r=Z.H;Z.H=_g;try{return ct(kg)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",s()},useDeferredValue:function(r,e){return B="useDeferredValue",s(),bO(r,e)},useTransition:function(){return B="useTransition",s(),qO()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",s(),Rb(r,e,o)},useId:function(){return B="useId",s(),be().memoizedState},useFormState:function(r){return B="useFormState",s(),Hb(),Wb(r)},useActionState:function(r){return B="useActionState",s(),Wb(r)},useOptimistic:function(r,e){return B="useOptimistic",s(),rO(r,e)},useHostTransitionStatus:En,useMemoCache:Vn,useCacheRefresh:function(){return B="useCacheRefresh",s(),be().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",s(),Xb(r)}},nM={readContext:function(r){return $e(r)},use:Si,useCallback:function(r,e){return B="useCallback",s(),Jb(r,e)},useContext:function(r){return B="useContext",s(),$e(r)},useEffect:function(r,e){B="useEffect",s(),Vo(2048,Zo,r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",s(),Yb(r,e,o)},useInsertionEffect:function(r,e){return B="useInsertionEffect",s(),Vo(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",s(),Vo(4,Ag,r,e)},useMemo:function(r,e){B="useMemo",s();var o=Z.H;Z.H=Uu;try{return zb(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",s();var l=Z.H;Z.H=Uu;try{return G0(r,e,o)}finally{Z.H=l}},useRef:function(){return B="useRef",s(),be().memoizedState},useState:function(){B="useState",s();var r=Z.H;Z.H=Uu;try{return G0(kg)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",s()},useDeferredValue:function(r,e){return B="useDeferredValue",s(),uO(r,e)},useTransition:function(){return B="useTransition",s(),HO()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",s(),Rb(r,e,o)},useId:function(){return B="useId",s(),be().memoizedState},useFormState:function(r){return B="useFormState",s(),Hb(),mb(r)},useActionState:function(r){return B="useActionState",s(),mb(r)},useOptimistic:function(r,e){return B="useOptimistic",s(),oO(r,e)},useHostTransitionStatus:En,useMemoCache:Vn,useCacheRefresh:function(){return B="useCacheRefresh",s(),be().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",s(),Xb(r)}},Fl={readContext:function(r){return W(),$e(r)},use:function(r){return A(),Si(r)},useCallback:function(r,e){return B="useCallback",A(),_r(),Z5(r,e)},useContext:function(r){return B="useContext",A(),_r(),$e(r)},useEffect:function(r,e){return B="useEffect",A(),_r(),Gb(r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",A(),_r(),C5(r,e,o)},useInsertionEffect:function(r,e){B="useInsertionEffect",A(),_r(),_n(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",A(),_r(),B5(r,e)},useMemo:function(r,e){B="useMemo",A(),_r();var o=Z.H;Z.H=Fl;try{return S5(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",A(),_r();var l=Z.H;Z.H=Fl;try{return Q5(r,e,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",A(),_r(),x5(r)},useState:function(r){B="useState",A(),_r();var e=Z.H;Z.H=Fl;try{return L5(r)}finally{Z.H=e}},useDebugValue:function(){B="useDebugValue",A(),_r()},useDeferredValue:function(r,e){return B="useDeferredValue",A(),_r(),T5(r,e)},useTransition:function(){return B="useTransition",A(),_r(),a5()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",A(),_r(),U5(r,e,o)},useId:function(){return B="useId",A(),_r(),c5()},useFormState:function(r,e){return B="useFormState",A(),_r(),yt(r,e)},useActionState:function(r,e){return B="useActionState",A(),_r(),yt(r,e)},useOptimistic:function(r){return B="useOptimistic",A(),_r(),I5(r)},useMemoCache:function(r){return A(),Vn(r)},useHostTransitionStatus:En,useCacheRefresh:function(){return B="useCacheRefresh",_r(),y5()},useEffectEvent:function(r){return B="useEffectEvent",A(),_r(),N5(r)}},_g={readContext:function(r){return W(),$e(r)},use:function(r){return A(),Si(r)},useCallback:function(r,e){return B="useCallback",A(),s(),Jb(r,e)},useContext:function(r){return B="useContext",A(),s(),$e(r)},useEffect:function(r,e){B="useEffect",A(),s(),Vo(2048,Zo,r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",A(),s(),Yb(r,e,o)},useInsertionEffect:function(r,e){return B="useInsertionEffect",A(),s(),Vo(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",A(),s(),Vo(4,Ag,r,e)},useMemo:function(r,e){B="useMemo",A(),s();var o=Z.H;Z.H=_g;try{return zb(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",A(),s();var l=Z.H;Z.H=_g;try{return ct(r,e,o)}finally{Z.H=l}},useRef:function(){return B="useRef",A(),s(),be().memoizedState},useState:function(){B="useState",A(),s();var r=Z.H;Z.H=_g;try{return ct(kg)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",A(),s()},useDeferredValue:function(r,e){return B="useDeferredValue",A(),s(),bO(r,e)},useTransition:function(){return B="useTransition",A(),s(),qO()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",A(),s(),Rb(r,e,o)},useId:function(){return B="useId",A(),s(),be().memoizedState},useFormState:function(r){return B="useFormState",A(),s(),Wb(r)},useActionState:function(r){return B="useActionState",A(),s(),Wb(r)},useOptimistic:function(r,e){return B="useOptimistic",A(),s(),rO(r,e)},useMemoCache:function(r){return A(),Vn(r)},useHostTransitionStatus:En,useCacheRefresh:function(){return B="useCacheRefresh",s(),be().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",A(),s(),Xb(r)}},Uu={readContext:function(r){return W(),$e(r)},use:function(r){return A(),Si(r)},useCallback:function(r,e){return B="useCallback",A(),s(),Jb(r,e)},useContext:function(r){return B="useContext",A(),s(),$e(r)},useEffect:function(r,e){B="useEffect",A(),s(),Vo(2048,Zo,r,e)},useImperativeHandle:function(r,e,o){return B="useImperativeHandle",A(),s(),Yb(r,e,o)},useInsertionEffect:function(r,e){return B="useInsertionEffect",A(),s(),Vo(4,Co,r,e)},useLayoutEffect:function(r,e){return B="useLayoutEffect",A(),s(),Vo(4,Ag,r,e)},useMemo:function(r,e){B="useMemo",A(),s();var o=Z.H;Z.H=_g;try{return zb(r,e)}finally{Z.H=o}},useReducer:function(r,e,o){B="useReducer",A(),s();var l=Z.H;Z.H=_g;try{return G0(r,e,o)}finally{Z.H=l}},useRef:function(){return B="useRef",A(),s(),be().memoizedState},useState:function(){B="useState",A(),s();var r=Z.H;Z.H=_g;try{return G0(kg)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",A(),s()},useDeferredValue:function(r,e){return B="useDeferredValue",A(),s(),uO(r,e)},useTransition:function(){return B="useTransition",A(),s(),HO()},useSyncExternalStore:function(r,e,o){return B="useSyncExternalStore",A(),s(),Rb(r,e,o)},useId:function(){return B="useId",A(),s(),be().memoizedState},useFormState:function(r){return B="useFormState",A(),s(),mb(r)},useActionState:function(r){return B="useActionState",A(),s(),mb(r)},useOptimistic:function(r,e){return B="useOptimistic",A(),s(),oO(r,e)},useMemoCache:function(r){return A(),Vn(r)},useHostTransitionStatus:En,useCacheRefresh:function(){return B="useCacheRefresh",s(),be().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",A(),s(),Xb(r)}};var tM={},vM=new Set,hM=new Set,bM=new Set,uM=new Set,wM=new Set,PM=new Set,OM=new Set,AM=new Set,qM=new Set,HM=new Set;Object.freeze(tM);var D4={enqueueSetState:function(r,e,o){r=r._reactInternals;var l=vg(r),n=Ni(l);n.payload=e,o!==void 0&&o!==null&&(_5(o),n.callback=o),e=Bi(r,n,l),e!==null&&(bl(l,"this.setState()",r),Be(e,r,l),M0(e,r,l))},enqueueReplaceState:function(r,e,o){r=r._reactInternals;var l=vg(r),n=Ni(l);n.tag=sH,n.payload=e,o!==void 0&&o!==null&&(_5(o),n.callback=o),e=Bi(r,n,l),e!==null&&(bl(l,"this.replaceState()",r),Be(e,r,l),M0(e,r,l))},enqueueForceUpdate:function(r,e){r=r._reactInternals;var o=vg(r),l=Ni(o);l.tag=rM,e!==void 0&&e!==null&&(_5(e),l.callback=e),e=Bi(r,l,o),e!==null&&(bl(o,"this.forceUpdate()",r),Be(e,r,o),M0(e,r,o))}},Kv=null,a4=null,c4=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),de=!1,MM={},RM={},WM={},mM={},Uv=!1,GM={},$u={},y4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},XM=!1,YM=null;YM=new Set;var ui=!1,se=!1,V4=!1,JM=typeof WeakSet==="function"?WeakSet:Set,bo=null,$v=null,Lv=null,ro=null,fo=!1,Eg=null,lo=!1,Mh=8192,oJ={getCacheForType:function(r){var e=$e(fe),o=e.data.get(r);return o===void 0&&(o=r(),e.data.set(r,o)),o},cacheSignal:function(){return $e(fe).controller.signal},getOwner:function(){return ug}};if(typeof Symbol==="function"&&Symbol.for){var Rh=Symbol.for;Rh("selector.component"),Rh("selector.has_pseudo_class"),Rh("selector.role"),Rh("selector.test_id"),Rh("selector.text")}var gJ=[],lJ=typeof WeakMap==="function"?WeakMap:Map,uo=0,io=2,qg=4,wi=0,Wh=1,bt=2,Lu=3,ln=4,Iu=6,zM=5,oe=uo,Re=null,Vr=null,ar=0,po=0,Fu=1,ut=2,mh=3,QM=4,_4=5,Gh=6,xu=7,E4=8,wt=9,ue=po,Hg=null,nn=!1,Iv=!1,f4=!1,xl=0,xe=wi,tn=0,vn=0,p4=0,jo=0,Pt=0,Xh=null,So=null,Nu=!1,Bu=0,KM=0,UM=300,Cu=1/0,$M=500,Yh=null,Te=null,hn=null,Zu=0,j4=1,d4=2,LM=3,bn=0,IM=1,FM=2,xM=3,NM=4,Su=5,eo=0,un=null,Fv=null,fg=0,s4=0,r6=-0,e6=null,BM=null,CM=null,pg=Zu,ZM=null,iJ=50,Jh=0,o6=null,g6=!1,Tu=!1,nJ=50,Ot=0,zh=null,xv=!1,ku=null,SM=!1,TM=new Set,tJ={},Du=null,Nv=null,l6=!1,i6=!1,au=!1,n6=!1,wn=0,t6={};(function(){for(var r=0;r<M4.length;r++){var e=M4[r],o=e.toLowerCase();e=e[0].toUpperCase()+e.slice(1),Tg(o,"on"+e)}Tg(qH,"onAnimationEnd"),Tg(HH,"onAnimationIteration"),Tg(MH,"onAnimationStart"),Tg("dblclick","onDoubleClick"),Tg("focusin","onFocus"),Tg("focusout","onBlur"),Tg(CY,"onTransitionRun"),Tg(ZY,"onTransitionStart"),Tg(SY,"onTransitionCancel"),Tg(RH,"onTransitionEnd")})(),eg("onMouseEnter",["mouseout","mouseover"]),eg("onMouseLeave",["mouseout","mouseover"]),eg("onPointerEnter",["pointerout","pointerover"]),eg("onPointerLeave",["pointerout","pointerover"]),Jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qh)),cu="_reactListening"+Math.random().toString(36).slice(2),kM=!1,DM=!1,yu=!1,aM=!1,Vu=!1,_u=!1,cM=!1,Eu={},vJ=/\r\n?/g,hJ=/\u0000|\uFFFD/g,At="http://www.w3.org/1999/xlink",h6="http://www.w3.org/XML/1998/namespace",bJ="javascript:throw new Error('React form unexpectedly submitted.')",uJ="suppressHydrationWarning",qt="&",fu="/&",Kh="$",Uh="/$",Pn="$?",Ht="$~",Bv="$!",wJ="html",PJ="body",OJ="head",b6="F!",yM="F",VM="loading",AJ="style",Pi=0,Cv=1,pu=2,u6=null,w6=null,_M={dialog:!0,webview:!0},P6=null,$h=void 0,EM=typeof setTimeout==="function"?setTimeout:void 0,qJ=typeof clearTimeout==="function"?clearTimeout:void 0,Mt=-1,fM=typeof Promise==="function"?Promise:void 0,HJ=typeof queueMicrotask==="function"?queueMicrotask:typeof fM<"u"?function(r){return fM.resolve(null).then(r).catch(eX)}:EM,O6=null,Rt=0,Lh=1,pM=2,jM=3,Bg=4,Cg=new Map,dM=new Set,Oi=ve.d;ve.d={f:function(){var r=Oi.f(),e=pt();return r||e},r:function(r){var e=Nr(r);e!==null&&e.tag===5&&e.type==="form"?AO(e):Oi.r(r)},D:function(r){Oi.D(r),vq("dns-prefetch",r,null)},C:function(r,e){Oi.C(r,e),vq("preconnect",r,e)},L:function(r,e,o){Oi.L(r,e,o);var l=Zv;if(l&&r&&e){var n='link[rel="preload"][as="'+Yg(e)+'"]';e==="image"?o&&o.imageSrcSet?(n+='[imagesrcset="'+Yg(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(n+='[imagesizes="'+Yg(o.imageSizes)+'"]')):n+='[href="'+Yg(r)+'"]':n+='[href="'+Yg(r)+'"]';var t=n;switch(e){case"style":t=st(r);break;case"script":t=rv(r)}Cg.has(t)||(r=Er({rel:"preload",href:e==="image"&&o&&o.imageSrcSet?void 0:r,as:e},o),Cg.set(t,r),l.querySelector(n)!==null||e==="style"&&l.querySelector(C0(t))||e==="script"&&l.querySelector(Z0(t))||(e=l.createElement("link"),Ho(e,"link",r),zr(e),l.head.appendChild(e)))}},m:function(r,e){Oi.m(r,e);var o=Zv;if(o&&r){var l=e&&typeof e.as==="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Yg(l)+'"][href="'+Yg(r)+'"]',t=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":t=rv(r)}if(!Cg.has(t)&&(r=Er({rel:"modulepreload",href:r},e),Cg.set(t,r),o.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Z0(t)))return}l=o.createElement("link"),Ho(l,"link",r),zr(l),o.head.appendChild(l)}}},X:function(r,e){Oi.X(r,e);var o=Zv;if(o&&r){var l=ge(o).hoistableScripts,n=rv(r),t=l.get(n);t||(t=o.querySelector(Z0(n)),t||(r=Er({src:r,async:!0},e),(e=Cg.get(n))&&C2(r,e),t=o.createElement("script"),zr(t),Ho(t,"link",r),o.head.appendChild(t)),t={type:"script",instance:t,count:1,state:null},l.set(n,t))}},S:function(r,e,o){Oi.S(r,e,o);var l=Zv;if(l&&r){var n=ge(l).hoistableStyles,t=st(r);e=e||"default";var b=n.get(t);if(!b){var w={loading:Rt,preload:null};if(b=l.querySelector(C0(t)))w.loading=Lh|Bg;else{r=Er({rel:"stylesheet",href:r,"data-precedence":e},o),(o=Cg.get(t))&&B2(r,o);var q=b=l.createElement("link");zr(q),Ho(q,"link",r),q._p=new Promise(function(M,U){q.onload=M,q.onerror=U}),q.addEventListener("load",function(){w.loading|=Lh}),q.addEventListener("error",function(){w.loading|=pM}),w.loading|=Bg,yb(b,e,l)}b={type:"stylesheet",instance:b,count:1,state:w},n.set(t,b)}}},M:function(r,e){Oi.M(r,e);var o=Zv;if(o&&r){var l=ge(o).hoistableScripts,n=rv(r),t=l.get(n);t||(t=o.querySelector(Z0(n)),t||(r=Er({src:r,async:!0,type:"module"},e),(e=Cg.get(n))&&C2(r,e),t=o.createElement("script"),zr(t),Ho(t,"link",r),o.head.appendChild(t)),t={type:"script",instance:t,count:1,state:null},l.set(n,t))}}};var Zv=typeof document>"u"?null:document,ju=null,MJ=60000,RJ=800,WJ=500,A6=0,q6=null,du=null,Wt=NX,Ih={$$typeof:Yl,Provider:null,Consumer:null,_currentValue:Wt,_currentValue2:Wt,_threadCount:0},sM="%c%s%c",rR="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",eR="",su=" ",mJ=Function.prototype.bind,oR=!1,gR=null,lR=null,iR=null,nR=null,tR=null,vR=null,hR=null,bR=null,uR=null,wR=null;gR=function(r,e,o,l){e=g(r,e),e!==null&&(o=i(e.memoizedState,o,0,l),e.memoizedState=o,e.baseState=o,r.memoizedProps=Er({},r.memoizedProps),o=zo(r,2),o!==null&&Be(o,r,2))},lR=function(r,e,o){e=g(r,e),e!==null&&(o=u(e.memoizedState,o,0),e.memoizedState=o,e.baseState=o,r.memoizedProps=Er({},r.memoizedProps),o=zo(r,2),o!==null&&Be(o,r,2))},iR=function(r,e,o,l){e=g(r,e),e!==null&&(o=v(e.memoizedState,o,l),e.memoizedState=o,e.baseState=o,r.memoizedProps=Er({},r.memoizedProps),o=zo(r,2),o!==null&&Be(o,r,2))},nR=function(r,e,o){r.pendingProps=i(r.memoizedProps,e,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),e=zo(r,2),e!==null&&Be(e,r,2)},tR=function(r,e){r.pendingProps=u(r.memoizedProps,e,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),e=zo(r,2),e!==null&&Be(e,r,2)},vR=function(r,e,o){r.pendingProps=v(r.memoizedProps,e,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),e=zo(r,2),e!==null&&Be(e,r,2)},hR=function(r){var e=zo(r,2);e!==null&&Be(e,r,2)},bR=function(r){var e=Bt(),o=zo(r,e);o!==null&&Be(o,r,e)},uR=function(r){O=r},wR=function(r){P=r};var rw=!0,ew=null,H6=!1,On=null,An=null,qn=null,Fh=new Map,xh=new Map,Hn=[],GJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),ow=null;if(pb.prototype.render=a2.prototype.render=function(r){var e=this._internalRoot;if(e===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):c(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=e.current,n=vg(l);Z2(l,n,o,e,null,null)},pb.prototype.unmount=a2.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var e=r.containerInfo;(oe&(io|qg))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Z2(r.current,2,null,r,null,null),pt(),e[Vi]=null}},pb.prototype.unstable_scheduleHydration=function(r){if(r){var e=I();r={blockedOn:null,target:r,priority:e};for(var o=0;o<Hn.length&&e!==0&&e<Hn[o].priority;o++);Hn.splice(o,0,r),o===0&&Gq(r)}},function(){var r=Tv.version;if(r!=="19.2.6")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.6
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),ve.findDOMNode=function(r){var e=r._reactInternals;if(e===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=d(e),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.6"};return r.overrideHookState=gR,r.overrideHookStateDeletePath=lR,r.overrideHookStateRenamePath=iR,r.overrideProps=nR,r.overridePropsDeletePath=tR,r.overridePropsRenamePath=vR,r.scheduleUpdate=hR,r.scheduleRetry=bR,r.setErrorHandler=uR,r.setSuspenseHandler=wR,r.scheduleRefresh=S,r.scheduleRoot=L,r.setRefreshHandler=C,r.getCurrentFiber=QX,Nt(r)}()&&Ul&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var PR=window.location.protocol;/^(https?|file):$/.test(PR)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(PR==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}CJ.createRoot=function(r,e){if(!c(r))throw Error("Target container is not a DOM element.");zq(r);var o=!1,l="",n=XO,t=YO,b=JO;return e!==null&&e!==void 0&&(e.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof e==="object"&&e!==null&&e.$$typeof===Xl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(t=e.onCaughtError),e.onRecoverableError!==void 0&&(b=e.onRecoverableError)),e=Aq(r,1,!1,null,null,o,l,null,n,t,b,Jq),r[Vi]=e.current,Y2(r),new a2(e)},CJ.hydrateRoot=function(r,e,o){if(!c(r))throw Error("Target container is not a DOM element.");zq(r),e===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,n="",t=XO,b=YO,w=JO,q=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(n=o.identifierPrefix),o.onUncaughtError!==void 0&&(t=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),e=Aq(r,1,!0,e,o!=null?o:null,l,n,q,t,b,w,Jq),e.context=qq(null),o=e.current,l=vg(o),l=Bn(l),n=Ni(l),n.callback=null,Bi(o,n,l),bl(l,"hydrateRoot()",null),o=l,e.current.lanes=o,Ki(e,o),ml(e),r[Vi]=e.current,Y2(r),new pb(e)},CJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var RR=mt((lF,MR)=>{MR.exports=HR()});var re=mt((jz)=>{var Kt=Pr(ie());(function(){function g(a){if(a==null)return null;if(typeof a==="function")return a.$$typeof===x?null:a.displayName||a.name||null;if(typeof a==="string")return a;switch(a){case C:return"Fragment";case rr:return"Profiler";case c:return"StrictMode";case d:return"Suspense";case lr:return"SuspenseList";case f:return"Activity"}if(typeof a==="object")switch(typeof a.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case S:return"Portal";case ir:return a.displayName||"Context";case wr:return(a._context.displayName||"Context")+".Consumer";case p:var T=a.render;return a=a.displayName,a||(a=T.displayName||T.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case N:return T=a.displayName||null,T!==null?T:g(a.type)||"Memo";case y:T=a._payload,a=a._init;try{return g(a(T))}catch(vr){}}return null}function i(a){return""+a}function v(a){try{i(a);var T=!1}catch(V){T=!0}if(T){T=console;var vr=T.error,Mr=typeof Symbol==="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return vr.call(T,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Mr),i(a)}}function h(a){if(a===C)return"<>";if(typeof a==="object"&&a!==null&&a.$$typeof===y)return"<...>";try{var T=g(a);return T?"<"+T+">":"<...>"}catch(vr){return"<...>"}}function u(){var a=Wr.A;return a===null?null:a.getOwner()}function P(){return Error("react-stack-top-frame")}function O(a){if(Hr.call(a,"key")){var T=Object.getOwnPropertyDescriptor(a,"key").get;if(T&&T.isReactWarning)return!1}return a.key!==void 0}function A(a,T){function vr(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",T))}vr.isReactWarning=!0,Object.defineProperty(a,"key",{get:vr,configurable:!0})}function W(){var a=g(this.type);return er[a]||(er[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function G(a,T,vr,Mr,V,Yr){var gr=vr.ref;return a={$$typeof:L,type:a,key:T,props:vr,_owner:Mr},(gr!==void 0?gr:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:W}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:V}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Yr}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function m(a,T,vr,Mr,V,Yr){var gr=T.children;if(gr!==void 0)if(Mr)if(mr(gr)){for(Mr=0;Mr<gr.length;Mr++)H(gr[Mr]);Object.freeze&&Object.freeze(gr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else H(gr);if(Hr.call(T,"key")){gr=g(a);var Lr=Object.keys(T).filter(function(we){return we!=="key"});Mr=0<Lr.length?"{key: someKey, "+Lr.join(": ..., ")+": ...}":"{key: someKey}",Xr[gr+Mr]||(Lr=0<Lr.length?"{"+Lr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Mr,gr,Lr,gr),Xr[gr+Mr]=!0)}if(gr=null,vr!==void 0&&(v(vr),gr=""+vr),O(T)&&(v(T.key),gr=""+T.key),"key"in T){vr={};for(var yr in T)yr!=="key"&&(vr[yr]=T[yr])}else vr=T;return gr&&A(vr,typeof a==="function"?a.displayName||a.name||"Unknown":a),G(a,gr,vr,u(),V,Yr)}function H(a){X(a)?a._store&&(a._store.validated=1):typeof a==="object"&&a!==null&&a.$$typeof===y&&(a._payload.status==="fulfilled"?X(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function X(a){return typeof a==="object"&&a!==null&&a.$$typeof===L}var L=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),wr=Symbol.for("react.consumer"),ir=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),x=Symbol.for("react.client.reference"),Wr=Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hr=Object.prototype.hasOwnProperty,mr=Array.isArray,Zr=console.createTask?console.createTask:function(){return null};Kt={react_stack_bottom_frame:function(a){return a()}};var k,er={},nr=Kt.react_stack_bottom_frame.bind(Kt,P)(),Kr=Zr(h(P)),Xr={};jz.Fragment=C,jz.jsxDEV=function(a,T,vr,Mr){var V=1e4>Wr.recentlyCreatedOwnerStacks++;return m(a,T,vr,Mr,V?Error("react-stack-top-frame"):nr,V?Zr(h(a)):Kr)}})()});var KP=Pr(ie(),1),UP=Pr(RR(),1);var WR=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
.ls-editor-monaco { flex: 1; min-height: 0; position: relative; }\r
.ls-editor-docs   { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }\r
\r
/* v0.27.5 — Monaco init-failure overlay. Renders inside .ls-editor-monaco\r
   (which now has position:relative as its anchor) over the editor canvas\r
   when the init-success probe detects mount timeout or non-responsiveness.\r
   Hard-coded rgba on the backdrop so the overlay reads correctly even if\r
   the host theme tokens haven't fully resolved (same defensive pattern as\r
   the portal-modal CSS-token gotcha for accent fallbacks elsewhere). */\r
.ls-editor-failed-overlay {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 10;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;\r
  justify-content: center;\r
  padding: 24px 32px;\r
  background: rgba(10, 10, 14, 0.92);\r
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));\r
  font-size: 12px;\r
  line-height: 1.5;\r
  overflow: auto;\r
}\r
.ls-editor-failed-title {\r
  margin: 0 0 8px;\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.95));\r
}\r
.ls-editor-failed-desc {\r
  margin: 0 0 12px;\r
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.7));\r
}\r
.ls-editor-failed-steps-label {\r
  margin: 0 0 4px;\r
  font-weight: 600;\r
}\r
.ls-editor-failed-steps {\r
  margin: 0 0 16px;\r
  padding-left: 20px;\r
}\r
.ls-editor-failed-steps li { margin-bottom: 6px; }\r
.ls-editor-failed-steps code {\r
  background: rgba(255, 255, 255, 0.08);\r
  border-radius: 3px;\r
  padding: 1px 5px;\r
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;\r
  font-size: 11px;\r
}\r
.ls-editor-failed-dismiss {\r
  align-self: flex-start;\r
  padding: 6px 14px;\r
  font-size: 12px;\r
  border: 1px solid var(--lumiverse-border, rgba(255, 255, 255, 0.12));\r
  border-radius: var(--lumiverse-radius, 6px);\r
  background: var(--lumiverse-accent, rgb(147, 112, 219));\r
  color: var(--lumiverse-accent-fg, #ffffff);\r
  cursor: pointer;\r
  transition: filter var(--lumiverse-transition-fast, 120ms);\r
}\r
.ls-editor-failed-dismiss:hover {\r
  filter: brightness(1.1);\r
}\r
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
`;var zR=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var QR=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var KR=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var UR=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var $R=WR+mR+GR+XR+YR+JR+zR+QR+KR+UR;var Ye=Pr(ie(),1);var nw=Pr(ie(),1);var lw=(...g)=>g.filter((i,v,h)=>{return Boolean(i)&&i.trim()!==""&&h.indexOf(i)===v}).join(" ").trim();var LR=(g)=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var IR=(g)=>g.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,v,h)=>h?h.toUpperCase():v.toLowerCase());var m6=(g)=>{let i=IR(g);return i.charAt(0).toUpperCase()+i.slice(1)};var Nh=Pr(ie(),1);var iw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var FR=(g)=>{for(let i in g)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};var kv=Pr(ie(),1),EJ=kv.createContext({});var xR=()=>kv.useContext(EJ);var NR=Nh.forwardRef(({color:g,size:i,strokeWidth:v,absoluteStrokeWidth:h,className:u="",children:P,iconNode:O,...A},W)=>{let{size:G=24,strokeWidth:m=2,absoluteStrokeWidth:H=!1,color:X="currentColor",className:L=""}=xR()??{},S=h??H?Number(v??m)*24/Number(i??G):v??m;return Nh.createElement("svg",{ref:W,...iw,width:i??G??iw.width,height:i??G??iw.height,stroke:g??X,strokeWidth:S,className:lw("lucide",L,u),...!P&&!FR(A)&&{"aria-hidden":"true"},...A},[...O.map(([C,c])=>Nh.createElement(C,c)),...Array.isArray(P)?P:[P]])});var E=(g,i)=>{let v=nw.forwardRef(({className:h,...u},P)=>nw.createElement(NR,{ref:P,iconNode:i,className:lw(`lucide-${LR(m6(g))}`,`lucide-${g}`,h),...u}));return v.displayName=m6(g),v};var fJ=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Nl=E("braces",fJ);var pJ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Mn=E("chart-column",pJ);var jJ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wo=E("code-xml",jJ);var dJ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Bl=E("file-code-corner",dJ);var sJ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Rn=E("layers",sJ);var rz=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cl=E("loader-circle",rz);var ez=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Zg=E("triangle-alert",ez);var oz=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Wn=E("user-round",oz);var gz=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Bh=E("activity",gz);var lz=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Ch=E("arrow-down-to-line",lz);var iz=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zh=E("arrow-up-to-line",iz);var nz=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Sh=E("blocks",nz);var tz=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Xt=E("book-marked",tz);var vz=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Th=E("book-open",vz);var hz=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],kh=E("calendar",hz);var bz=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dh=E("check",bz);var uz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],mo=E("chevron-down",uz);var wz=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ah=E("chevron-left",wz);var Pz=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qi=E("chevron-right",Pz);var Oz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mg=E("chevron-up",Oz);var Az=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],ch=E("chevrons-up-down",Az);var qz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],yh=E("clock",qz);var Hz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jg=E("copy",Hz);var Mz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dg=E("database",Mz);var Rz=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Yt=E("download",Rz);var Wz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vh=E("eye",Wz);var mz=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Jt=E("folder-open",mz);var Gz=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],_h=E("hash",Gz);var Xz=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Eh=E("link-2",Xz);var Yz=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],fh=E("list-ordered",Yz);var Jz=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ph=E("list",Jz);var zz=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jh=E("lock",zz);var Qz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],Dv=E("message-square-plus",Qz);var Kz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],dh=E("message-square",Kz);var Uz=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],sh=E("package",Uz);var $z=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sg=E("pencil",$z);var Lz=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],zt=E("play",Lz);var Iz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],r1=E("plus",Iz);var Fz=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],e1=E("radio",Fz);var xz=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Hi=E("refresh-cw",xz);var Nz=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],o1=E("save",Nz);var Bz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],mn=E("search",Bz);var Cz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],av=E("shield-alert",Cz);var Zz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g1=E("shield",Zz);var Sz=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],l1=E("syringe",Sz);var Tz=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Zl=E("terminal",Tz);var kz=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],i1=E("toggle-left",kz);var Dz=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],n1=E("toggle-right",Dz);var az=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Qt=E("timer",az);var cz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Uo=E("trash-2",cz);var yz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],t1=E("type",yz);var Vz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],v1=E("upload",Vz);var _z=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],cv=E("user-plus",_z);var Ez=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],h1=E("wrench",Ez);var fz=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],To=E("x",fz);var pz=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mi=E("zap",pz);var tw={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Nw=Pr(ie(),1);var Q1=Pr(ie(),1);var Ke=Pr(re(),1),dz={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},BR=({script:g,selected:i,dot:v,duration:h,onSelect:u,onEdit:P,sendToBackend:O})=>{let A=(S)=>{S.stopPropagation(),O({type:"update_script",id:g.id,patch:{enabled:!g.enabled}})},W=(S)=>{S.stopPropagation(),O({type:"duplicate_script",id:g.id})},G=(S)=>{if(S.stopPropagation(),!window.confirm(`Delete "${g.name}"?`))return;O({type:"delete_script",id:g.id})},m=(S)=>{S.stopPropagation(),P()},H=v==="running",X=(S)=>{if(S.stopPropagation(),H||!g.enabled)return;O({type:"run_script",id:g.id})},L=g.bindings?.length??0;return Ke.jsxDEV("div",{className:`ls-item${i?" ls-selected":""}${!g.enabled&&g.type!=="library"?" ls-disabled":""}`,onClick:u,children:[Ke.jsxDEV("span",{className:dz[v],title:v},void 0,!1,void 0,this),Ke.jsxDEV("div",{className:"ls-item-body",children:[Ke.jsxDEV("div",{className:"ls-item-name",title:g.name,children:g.name},void 0,!1,void 0,this),Ke.jsxDEV("div",{className:"ls-item-meta",children:[g.type!=="library"&&Ke.jsxDEV("span",{children:g.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),h!==void 0&&v!=="running"&&Ke.jsxDEV("span",{style:{color:v==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[h,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.type!=="library"&&L>0&&Ke.jsxDEV("div",{className:"ls-item-bindings",children:g.bindings.map((S,C)=>Ke.jsxDEV("span",{className:"ls-binding-badge",children:[S.type==="character"?Ke.jsxDEV(Wn,{size:9},void 0,!1,void 0,this):Ke.jsxDEV(dh,{size:9},void 0,!1,void 0,this),Ke.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.displayName},void 0,!1,void 0,this)]},C,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ke.jsxDEV("div",{className:"ls-item-actions",children:[Ke.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:"Edit script",children:Ke.jsxDEV(sg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Ke.jsxDEV("button",{className:"ls-icon-btn",onClick:X,disabled:!g.enabled||H,title:!g.enabled?"Enable to run":H?"Running…":"Run script",children:H?Ke.jsxDEV(Cl,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Ke.jsxDEV(zt,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Ke.jsxDEV("button",{className:"ls-icon-btn",onClick:A,title:g.enabled?"Disable":"Enable",children:g.enabled?Ke.jsxDEV(n1,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Ke.jsxDEV(i1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ke.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:"Duplicate",children:Ke.jsxDEV(jg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ke.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:G,title:"Delete",children:Ke.jsxDEV(Uo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Ze=Uint8Array,Rg=Uint16Array,I6=Int32Array,hw=new Ze([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bw=new Ze([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),z6=new Ze([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DR=function(g,i){var v=new Rg(31);for(var h=0;h<31;++h)v[h]=i+=1<<g[h-1];var u=new I6(v[30]);for(var h=1;h<30;++h)for(var P=v[h];P<v[h+1];++P)u[P]=P-v[h]<<5|h;return{b:v,r:u}},aR=DR(hw,2),cR=aR.b,Q6=aR.r;cR[28]=258,Q6[258]=28;var yR=DR(bw,0),sz=yR.b,CR=yR.r,K6=new Rg(32768);for(ee=0;ee<32768;++ee)Sl=(ee&43690)>>1|(ee&21845)<<1,Sl=(Sl&52428)>>2|(Sl&13107)<<2,Sl=(Sl&61680)>>4|(Sl&3855)<<4,K6[ee]=((Sl&65280)>>8|(Sl&255)<<8)>>1;var Sl,ee,kl=function(g,i,v){var h=g.length,u=0,P=new Rg(i);for(;u<h;++u)if(g[u])++P[g[u]-1];var O=new Rg(i);for(u=1;u<i;++u)O[u]=O[u-1]+P[u-1]<<1;var A;if(v){A=new Rg(1<<i);var W=15-i;for(u=0;u<h;++u)if(g[u]){var G=u<<4|g[u],m=i-g[u],H=O[g[u]-1]++<<m;for(var X=H|(1<<m)-1;H<=X;++H)A[K6[H]>>W]=G}}else{A=new Rg(h);for(u=0;u<h;++u)if(g[u])A[u]=K6[O[g[u]-1]++]>>15-g[u]}return A},Gn=new Ze(288);for(ee=0;ee<144;++ee)Gn[ee]=8;var ee;for(ee=144;ee<256;++ee)Gn[ee]=9;var ee;for(ee=256;ee<280;++ee)Gn[ee]=7;var ee;for(ee=280;ee<288;++ee)Gn[ee]=8;var ee,w1=new Ze(32);for(ee=0;ee<32;++ee)w1[ee]=5;var ee,rQ=kl(Gn,9,0),eQ=kl(Gn,9,1),oQ=kl(w1,5,0),gQ=kl(w1,5,1),G6=function(g){var i=g[0];for(var v=1;v<g.length;++v)if(g[v]>i)i=g[v];return i},rl=function(g,i,v){var h=i/8|0;return(g[h]|g[h+1]<<8)>>(i&7)&v},X6=function(g,i){var v=i/8|0;return(g[v]|g[v+1]<<8|g[v+2]<<16)>>(i&7)},F6=function(g){return(g+7)/8|0},P1=function(g,i,v){if(i==null||i<0)i=0;if(v==null||v>g.length)v=g.length;return new Ze(g.subarray(i,v))};var lQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(g,i,v){var h=Error(i||lQ[g]);if(h.code=g,Error.captureStackTrace)Error.captureStackTrace(h,ko);if(!v)throw h;return h},iQ=function(g,i,v,h){var u=g.length,P=h?h.length:0;if(!u||i.f&&!i.l)return v||new Ze(0);var O=!v,A=O||i.i!=2,W=i.i;if(O)v=new Ze(u*3);var G=function(hr){var co=v.length;if(hr>co){var Yo=new Ze(Math.max(co*2,hr));Yo.set(v),v=Yo}},m=i.f||0,H=i.p||0,X=i.b||0,L=i.l,S=i.d,C=i.m,c=i.n,rr=u*8;do{if(!L){m=rl(g,H,1);var wr=rl(g,H+1,3);if(H+=3,!wr){var ir=F6(H)+4,p=g[ir-4]|g[ir-3]<<8,d=ir+p;if(d>u){if(W)ko(0);break}if(A)G(X+p);v.set(g.subarray(ir,d),X),i.b=X+=p,i.p=H=d*8,i.f=m;continue}else if(wr==1)L=eQ,S=gQ,C=9,c=5;else if(wr==2){var lr=rl(g,H,31)+257,N=rl(g,H+10,15)+4,y=lr+rl(g,H+5,31)+1;H+=14;var f=new Ze(y),x=new Ze(19);for(var Wr=0;Wr<N;++Wr)x[z6[Wr]]=rl(g,H+Wr*3,7);H+=N*3;var Hr=G6(x),mr=(1<<Hr)-1,Zr=kl(x,Hr,1);for(var Wr=0;Wr<y;){var k=Zr[rl(g,H,mr)];H+=k&15;var ir=k>>4;if(ir<16)f[Wr++]=ir;else{var er=0,nr=0;if(ir==16)nr=3+rl(g,H,3),H+=2,er=f[Wr-1];else if(ir==17)nr=3+rl(g,H,7),H+=3;else if(ir==18)nr=11+rl(g,H,127),H+=7;while(nr--)f[Wr++]=er}}var Kr=f.subarray(0,lr),Xr=f.subarray(lr);C=G6(Kr),c=G6(Xr),L=kl(Kr,C,1),S=kl(Xr,c,1)}else ko(1);if(H>rr){if(W)ko(0);break}}if(A)G(X+131072);var a=(1<<C)-1,T=(1<<c)-1,vr=H;for(;;vr=H){var er=L[X6(g,H)&a],Mr=er>>4;if(H+=er&15,H>rr){if(W)ko(0);break}if(!er)ko(2);if(Mr<256)v[X++]=Mr;else if(Mr==256){vr=H,L=null;break}else{var V=Mr-254;if(Mr>264){var Wr=Mr-257,Yr=hw[Wr];V=rl(g,H,(1<<Yr)-1)+cR[Wr],H+=Yr}var gr=S[X6(g,H)&T],Lr=gr>>4;if(!gr)ko(3);H+=gr&15;var Xr=sz[Lr];if(Lr>3){var Yr=bw[Lr];Xr+=X6(g,H)&(1<<Yr)-1,H+=Yr}if(H>rr){if(W)ko(0);break}if(A)G(X+131072);var yr=X+V;if(X<Xr){var we=P-Xr,no=Math.min(Xr,yr);if(we+X<0)ko(3);for(;X<no;++X)v[X]=h[we+X]}for(;X<yr;++X)v[X]=v[X-Xr]}}if(i.l=L,i.p=vr,i.b=X,i.f=m,L)m=1,i.m=C,i.d=S,i.n=c}while(!m);return X!=v.length&&O?P1(v,0,X):v.subarray(0,X)},Ri=function(g,i,v){v<<=i&7;var h=i/8|0;g[h]|=v,g[h+1]|=v>>8},b1=function(g,i,v){v<<=i&7;var h=i/8|0;g[h]|=v,g[h+1]|=v>>8,g[h+2]|=v>>16},Y6=function(g,i){var v=[];for(var h=0;h<g.length;++h)if(g[h])v.push({s:h,f:g[h]});var u=v.length,P=v.slice();if(!u)return{t:_R,l:0};if(u==1){var O=new Ze(v[0].s+1);return O[v[0].s]=1,{t:O,l:1}}v.sort(function(d,lr){return d.f-lr.f}),v.push({s:-1,f:25001});var A=v[0],W=v[1],G=0,m=1,H=2;v[0]={s:-1,f:A.f+W.f,l:A,r:W};while(m!=u-1)A=v[v[G].f<v[H].f?G++:H++],W=v[G!=m&&v[G].f<v[H].f?G++:H++],v[m++]={s:-1,f:A.f+W.f,l:A,r:W};var X=P[0].s;for(var h=1;h<u;++h)if(P[h].s>X)X=P[h].s;var L=new Rg(X+1),S=U6(v[m-1],L,0);if(S>i){var h=0,C=0,c=S-i,rr=1<<c;P.sort(function(lr,N){return L[N.s]-L[lr.s]||lr.f-N.f});for(;h<u;++h){var wr=P[h].s;if(L[wr]>i)C+=rr-(1<<S-L[wr]),L[wr]=i;else break}C>>=c;while(C>0){var ir=P[h].s;if(L[ir]<i)C-=1<<i-L[ir]++-1;else++h}for(;h>=0&&C;--h){var p=P[h].s;if(L[p]==i)--L[p],++C}S=i}return{t:new Ze(L),l:S}},U6=function(g,i,v){return g.s==-1?Math.max(U6(g.l,i,v+1),U6(g.r,i,v+1)):i[g.s]=v},ZR=function(g){var i=g.length;while(i&&!g[--i]);var v=new Rg(++i),h=0,u=g[0],P=1,O=function(W){v[h++]=W};for(var A=1;A<=i;++A)if(g[A]==u&&A!=i)++P;else{if(!u&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(u),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(u);P=1,u=g[A]}return{c:v.subarray(0,h),n:i}},u1=function(g,i){var v=0;for(var h=0;h<i.length;++h)v+=g[h]*i[h];return v},VR=function(g,i,v){var h=v.length,u=F6(i+2);g[u]=h&255,g[u+1]=h>>8,g[u+2]=g[u]^255,g[u+3]=g[u+1]^255;for(var P=0;P<h;++P)g[u+P+4]=v[P];return(u+4+h)*8},SR=function(g,i,v,h,u,P,O,A,W,G,m){Ri(i,m++,v),++u[256];var H=Y6(u,15),X=H.t,L=H.l,S=Y6(P,15),C=S.t,c=S.l,rr=ZR(X),wr=rr.c,ir=rr.n,p=ZR(C),d=p.c,lr=p.n,N=new Rg(19);for(var y=0;y<wr.length;++y)++N[wr[y]&31];for(var y=0;y<d.length;++y)++N[d[y]&31];var f=Y6(N,7),x=f.t,Wr=f.l,Hr=19;for(;Hr>4&&!x[z6[Hr-1]];--Hr);var mr=G+5<<3,Zr=u1(u,Gn)+u1(P,w1)+O,k=u1(u,X)+u1(P,C)+O+14+3*Hr+u1(N,x)+2*N[16]+3*N[17]+7*N[18];if(W>=0&&mr<=Zr&&mr<=k)return VR(i,m,g.subarray(W,W+G));var er,nr,Kr,Xr;if(Ri(i,m,1+(k<Zr)),m+=2,k<Zr){er=kl(X,L,0),nr=X,Kr=kl(C,c,0),Xr=C;var a=kl(x,Wr,0);Ri(i,m,ir-257),Ri(i,m+5,lr-1),Ri(i,m+10,Hr-4),m+=14;for(var y=0;y<Hr;++y)Ri(i,m+3*y,x[z6[y]]);m+=3*Hr;var T=[wr,d];for(var vr=0;vr<2;++vr){var Mr=T[vr];for(var y=0;y<Mr.length;++y){var V=Mr[y]&31;if(Ri(i,m,a[V]),m+=x[V],V>15)Ri(i,m,Mr[y]>>5&127),m+=Mr[y]>>12}}}else er=rQ,nr=Gn,Kr=oQ,Xr=w1;for(var y=0;y<A;++y){var Yr=h[y];if(Yr>255){var V=Yr>>18&31;if(b1(i,m,er[V+257]),m+=nr[V+257],V>7)Ri(i,m,Yr>>23&31),m+=hw[V];var gr=Yr&31;if(b1(i,m,Kr[gr]),m+=Xr[gr],gr>3)b1(i,m,Yr>>5&8191),m+=bw[gr]}else b1(i,m,er[Yr]),m+=nr[Yr]}return b1(i,m,er[256]),m+nr[256]},nQ=new I6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),_R=new Ze(0),tQ=function(g,i,v,h,u,P){var O=P.z||g.length,A=new Ze(h+O+5*(1+Math.ceil(O/7000))+u),W=A.subarray(h,A.length-u),G=P.l,m=(P.r||0)&7;if(i){if(m)W[0]=P.r>>3;var H=nQ[i-1],X=H>>13,L=H&8191,S=(1<<v)-1,C=P.p||new Rg(32768),c=P.h||new Rg(S+1),rr=Math.ceil(v/3),wr=2*rr,ir=function(rg){return(g[rg]^g[rg+1]<<rr^g[rg+2]<<wr)&S},p=new I6(25000),d=new Rg(288),lr=new Rg(32),N=0,y=0,f=P.i||0,x=0,Wr=P.w||0,Hr=0;for(;f+2<O;++f){var mr=ir(f),Zr=f&32767,k=c[mr];if(C[Zr]=k,c[mr]=Zr,Wr<=f){var er=O-f;if((N>7000||x>24576)&&(er>423||!G)){m=SR(g,W,0,p,d,lr,y,x,Hr,f-Hr,m),x=N=y=0,Hr=f;for(var nr=0;nr<286;++nr)d[nr]=0;for(var nr=0;nr<30;++nr)lr[nr]=0}var Kr=2,Xr=0,a=L,T=Zr-k&32767;if(er>2&&mr==ir(f-T)){var vr=Math.min(X,er)-1,Mr=Math.min(32767,f),V=Math.min(258,er);while(T<=Mr&&--a&&Zr!=k){if(g[f+Kr]==g[f+Kr-T]){var Yr=0;for(;Yr<V&&g[f+Yr]==g[f+Yr-T];++Yr);if(Yr>Kr){if(Kr=Yr,Xr=T,Yr>vr)break;var gr=Math.min(T,Yr-2),Lr=0;for(var nr=0;nr<gr;++nr){var yr=f-T+nr&32767,we=C[yr],no=yr-we&32767;if(no>Lr)Lr=no,k=yr}}}Zr=k,k=C[Zr],T+=Zr-k&32767}}if(Xr){p[x++]=268435456|Q6[Kr]<<18|CR[Xr];var hr=Q6[Kr]&31,co=CR[Xr]&31;y+=hw[hr]+bw[co],++d[257+hr],++lr[co],Wr=f+Kr,++N}else p[x++]=g[f],++d[g[f]]}}for(f=Math.max(f,Wr);f<O;++f)p[x++]=g[f],++d[g[f]];if(m=SR(g,W,G,p,d,lr,y,x,Hr,f-Hr,m),!G)P.r=m&7|W[m/8|0]<<3,m-=7,P.h=c,P.p=C,P.i=f,P.w=Wr}else{for(var f=P.w||0;f<O+G;f+=65535){var Yo=f+65535;if(Yo>=O)W[m/8|0]=G,Yo=O;m=VR(W,m+1,g.subarray(f,Yo))}P.i=O}return P1(A,0,h+F6(m)+u)},vQ=function(){var g=new Int32Array(256);for(var i=0;i<256;++i){var v=i,h=9;while(--h)v=(v&1&&-306674912)^v>>>1;g[i]=v}return g}(),hQ=function(){var g=-1;return{p:function(i){var v=g;for(var h=0;h<i.length;++h)v=vQ[v&255^i[h]]^v>>>8;g=v},d:function(){return~g}}};var bQ=function(g,i,v,h,u){if(!u){if(u={l:1},i.dictionary){var P=i.dictionary.subarray(-32768),O=new Ze(P.length+g.length);O.set(P),O.set(g,P.length),g=O,u.w=P.length}}return tQ(g,i.level==null?6:i.level,i.mem==null?u.l?Math.ceil(Math.max(8,Math.min(13,Math.log(g.length)))*1.5):20:12+i.mem,v,h,u)},ER=function(g,i){var v={};for(var h in g)v[h]=g[h];for(var h in i)v[h]=i[h];return v};var Tl=function(g,i){return g[i]|g[i+1]<<8},el=function(g,i){return(g[i]|g[i+1]<<8|g[i+2]<<16|g[i+3]<<24)>>>0},J6=function(g,i){return el(g,i)+el(g,i+4)*4294967296},Go=function(g,i,v){for(;v;++i)g[i]=v,v>>>=8};function uQ(g,i){return bQ(g,i||{},0,0)}function wQ(g,i){return iQ(g,{i:2},i&&i.out,i&&i.dictionary)}var fR=function(g,i,v,h){for(var u in g){var P=g[u],O=i+u,A=h;if(Array.isArray(P))A=ER(h,P[1]),P=P[0];if(P instanceof Ze)v[O]=[P,A];else v[O+="/"]=[new Ze(0),A],fR(P,O,v,h)}},TR=typeof TextEncoder<"u"&&new TextEncoder,$6=typeof TextDecoder<"u"&&new TextDecoder,PQ=0;try{$6.decode(_R,{stream:!0}),PQ=1}catch(g){}var OQ=function(g){for(var i="",v=0;;){var h=g[v++],u=(h>127)+(h>223)+(h>239);if(v+u>g.length)return{s:i,r:P1(g,v-1)};if(!u)i+=String.fromCharCode(h);else if(u==3)h=((h&15)<<18|(g[v++]&63)<<12|(g[v++]&63)<<6|g[v++]&63)-65536,i+=String.fromCharCode(55296|h>>10,56320|h&1023);else if(u&1)i+=String.fromCharCode((h&31)<<6|g[v++]&63);else i+=String.fromCharCode((h&15)<<12|(g[v++]&63)<<6|g[v++]&63)}};function vw(g,i){if(i){var v=new Ze(g.length);for(var h=0;h<g.length;++h)v[h]=g.charCodeAt(h);return v}if(TR)return TR.encode(g);var u=g.length,P=new Ze(g.length+(g.length>>1)),O=0,A=function(m){P[O++]=m};for(var h=0;h<u;++h){if(O+5>P.length){var W=new Ze(O+8+(u-h<<1));W.set(P),P=W}var G=g.charCodeAt(h);if(G<128||i)A(G);else if(G<2048)A(192|G>>6),A(128|G&63);else if(G>55295&&G<57344)G=65536+(G&1047552)|g.charCodeAt(++h)&1023,A(240|G>>18),A(128|G>>12&63),A(128|G>>6&63),A(128|G&63);else A(224|G>>12),A(128|G>>6&63),A(128|G&63)}return P1(P,0,O)}function x6(g,i){if(i){var v="";for(var h=0;h<g.length;h+=16384)v+=String.fromCharCode.apply(null,g.subarray(h,h+16384));return v}else if($6)return $6.decode(g);else{var u=OQ(g),P=u.s,v=u.r;if(v.length)ko(8);return P}}var AQ=function(g,i){return i+30+Tl(g,i+26)+Tl(g,i+28)},qQ=function(g,i,v){var h=Tl(g,i+28),u=x6(g.subarray(i+46,i+46+h),!(Tl(g,i+8)&2048)),P=i+46+h,O=el(g,i+20),A=v&&O==4294967295?HQ(g,P):[O,el(g,i+24),el(g,i+42)],W=A[0],G=A[1],m=A[2];return[Tl(g,i+10),W,G,u,P+Tl(g,i+30)+Tl(g,i+32),m]},HQ=function(g,i){for(;Tl(g,i)!=1;i+=4+Tl(g,i+2));return[J6(g,i+12),J6(g,i+4),J6(g,i+20)]},L6=function(g){var i=0;if(g)for(var v in g){var h=g[v].length;if(h>65535)ko(9);i+=h+4}return i},kR=function(g,i,v,h,u,P,O,A){var W=h.length,G=v.extra,m=A&&A.length,H=L6(G);if(Go(g,i,O!=null?33639248:67324752),i+=4,O!=null)g[i++]=20,g[i++]=v.os;g[i]=20,i+=2,g[i++]=v.flag<<1|(P<0&&8),g[i++]=u&&8,g[i++]=v.compression&255,g[i++]=v.compression>>8;var X=new Date(v.mtime==null?Date.now():v.mtime),L=X.getFullYear()-1980;if(L<0||L>119)ko(10);if(Go(g,i,L<<25|X.getMonth()+1<<21|X.getDate()<<16|X.getHours()<<11|X.getMinutes()<<5|X.getSeconds()>>1),i+=4,P!=-1)Go(g,i,v.crc),Go(g,i+4,P<0?-P-2:P),Go(g,i+8,v.size);if(Go(g,i+12,W),Go(g,i+14,H),i+=16,O!=null)Go(g,i,m),Go(g,i+6,v.attrs),Go(g,i+10,O),i+=14;if(g.set(h,i),i+=W,H)for(var S in G){var C=G[S],c=C.length;Go(g,i,+S),Go(g,i+2,c),g.set(C,i+4),i+=4+c}if(m)g.set(A,i),i+=m;return i},MQ=function(g,i,v,h,u){Go(g,i,101010256),Go(g,i+8,v),Go(g,i+10,v),Go(g,i+12,h),Go(g,i+16,u)};function pR(g,i){if(!i)i={};var v={},h=[];fR(g,"",v,i);var u=0,P=0;for(var O in v){var A=v[O],W=A[0],G=A[1],m=G.level==0?0:8,H=vw(O),X=H.length,L=G.comment,S=L&&vw(L),C=S&&S.length,c=L6(G.extra);if(X>65535)ko(11);var rr=m?uQ(W,G):W,wr=rr.length,ir=hQ();ir.p(W),h.push(ER(G,{size:W.length,crc:ir.d(),c:rr,f:H,m:S,u:X!=O.length||S&&L.length!=C,o:u,compression:m})),u+=30+X+c+wr,P+=76+2*(X+c)+(C||0)+wr}var p=new Ze(P+22),d=u,lr=P-u;for(var N=0;N<h.length;++N){var H=h[N];kR(p,H.o,H,H.f,H.u,H.c.length);var y=30+H.f.length+L6(H.extra);p.set(H.c,H.o+y),kR(p,u,H,H.f,H.u,H.c.length,H.o,H.m),u+=16+y+(H.m?H.m.length:0)}return MQ(p,u,h.length,lr,d),p}function jR(g,i){var v={},h=g.length-22;for(;el(g,h)!=101010256;--h)if(!h||g.length-h>65558)ko(13);var u=Tl(g,h+8);if(!u)return{};var P=el(g,h+16),O=P==4294967295||u==65535;if(O){var A=el(g,h-12);if(O=el(g,A)==101075792,O)u=el(g,A+32),P=el(g,A+48)}var W=i&&i.filter;for(var G=0;G<u;++G){var m=qQ(g,P,O),H=m[0],X=m[1],L=m[2],S=m[3],C=m[4],c=m[5],rr=AQ(g,c);if(P=C,!W||W({name:S,size:X,originalSize:L,compression:H}))if(!H)v[S]=P1(g,rr,rr+X);else if(H==8)v[S]=wQ(g.subarray(rr,rr+X),{out:new Ze(L)});else ko(14,"unknown compression type "+H)}return v}function N6(g){let i=g.map((h)=>({name:h.name,code:h.code,type:h.type,triggers:h.triggers,bindings:h.bindings,folder:h.folder,metadata:h.metadata})),v={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:i};return pR({"pack.json":vw(JSON.stringify(v,null,2))})}function dR(g,i){let v=N6(g),h=new Blob([v.buffer],{type:"application/zip"}),u=URL.createObjectURL(h),P=document.createElement("a");P.href=u,P.download=`${i}.lumiscript.zip`,P.click(),URL.revokeObjectURL(u)}var sR;function _(g,i,v){function h(A,W){if(!A._zod)Object.defineProperty(A,"_zod",{value:{def:W,constr:O,traits:new Set},enumerable:!1});if(A._zod.traits.has(g))return;A._zod.traits.add(g),i(A,W);let G=O.prototype,m=Object.keys(G);for(let H=0;H<m.length;H++){let X=m[H];if(!(X in A))A[X]=G[X].bind(A)}}let u=v?.Parent??Object;class P extends u{}Object.defineProperty(P,"name",{value:g});function O(A){var W;let G=v?.Parent?new P:this;h(G,A),(W=G._zod).deferred??(W.deferred=[]);for(let m of G._zod.deferred)m();return G}return Object.defineProperty(O,"init",{value:h}),Object.defineProperty(O,Symbol.hasInstance,{value:(A)=>{if(v?.Parent&&A instanceof v.Parent)return!0;return A?._zod?.traits?.has(g)}}),Object.defineProperty(O,"name",{value:g}),O}var Qce=Symbol("zod_brand");class Wi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class O1 extends Error{constructor(g){super(`Encountered unidirectional transform during encode: ${g}`);this.name="ZodEncodeError"}}(sR=globalThis).__zod_globalConfig??(sR.__zod_globalConfig={});var yv=globalThis.__zod_globalConfig;function mi(g){if(g)Object.assign(yv,g);return yv}var Ae={};FJ(Ae,{unwrapMessage:()=>A1,uint8ArrayToHex:()=>yQ,uint8ArrayToBase64url:()=>aQ,uint8ArrayToBase64:()=>hW,stringifyPrimitive:()=>lW,slugify:()=>C6,shallowClone:()=>oW,safeExtend:()=>BQ,required:()=>SQ,randomString:()=>UQ,propertyKeyTypes:()=>S6,promiseAllObject:()=>KQ,primitiveTypes:()=>gW,prefixIssues:()=>W1,pick:()=>FQ,partial:()=>ZQ,parsedType:()=>TQ,optionalKeys:()=>T6,omit:()=>xQ,objectClone:()=>JQ,numKeys:()=>$Q,nullish:()=>M1,normalizeParams:()=>cr,mergeDefs:()=>Gi,merge:()=>CQ,jsonStringifyReplacer:()=>_v,joinValues:()=>YQ,issue:()=>Ev,isPlainObject:()=>Ut,isObject:()=>Vv,hexToUint8Array:()=>cQ,getSizableOrigin:()=>tW,getParsedType:()=>LQ,getLengthableOrigin:()=>m1,getEnumValues:()=>q1,getElementAtPath:()=>QQ,floatSafeRemainder:()=>eW,finalizeIssue:()=>Dl,extend:()=>NQ,explicitlyAborted:()=>k6,escapeRegex:()=>Xi,esc:()=>uw,defineLazy:()=>Oe,createTransparentProxy:()=>IQ,cloneDef:()=>zQ,clone:()=>ol,cleanRegex:()=>R1,cleanEnum:()=>kQ,captureStackTrace:()=>ww,cached:()=>H1,base64urlToUint8Array:()=>DQ,base64ToUint8Array:()=>vW,assignProp:()=>Xn,assertNotEqual:()=>WQ,assertNever:()=>GQ,assertIs:()=>mQ,assertEqual:()=>RQ,assert:()=>XQ,allowsEval:()=>Z6,aborted:()=>Yn,NUMBER_FORMAT_RANGES:()=>iW,Class:()=>bW,BIGINT_FORMAT_RANGES:()=>nW});function RQ(g){return g}function WQ(g){return g}function mQ(g){}function GQ(g){throw Error("Unexpected value in exhaustive check")}function XQ(g){}function q1(g){let i=Object.values(g).filter((h)=>typeof h==="number");return Object.entries(g).filter(([h,u])=>i.indexOf(+h)===-1).map(([h,u])=>u)}function YQ(g,i="|"){return g.map((v)=>lW(v)).join(i)}function _v(g,i){if(typeof i==="bigint")return i.toString();return i}function H1(g){return{get value(){{let v=g();return Object.defineProperty(this,"value",{value:v}),v}throw Error("cached value already set")}}}function M1(g){return g===null||g===void 0}function R1(g){let i=g.startsWith("^")?1:0,v=g.endsWith("$")?g.length-1:g.length;return g.slice(i,v)}function eW(g,i){let v=g/i,h=Math.round(v),u=Number.EPSILON*Math.max(Math.abs(v),1);if(Math.abs(v-h)<u)return 0;return v-h}var rW=Symbol("evaluating");function Oe(g,i,v){let h=void 0;Object.defineProperty(g,i,{get(){if(h===rW)return;if(h===void 0)h=rW,h=v();return h},set(u){Object.defineProperty(g,i,{value:u})},configurable:!0})}function JQ(g){return Object.create(Object.getPrototypeOf(g),Object.getOwnPropertyDescriptors(g))}function Xn(g,i,v){Object.defineProperty(g,i,{value:v,writable:!0,enumerable:!0,configurable:!0})}function Gi(...g){let i={};for(let v of g){let h=Object.getOwnPropertyDescriptors(v);Object.assign(i,h)}return Object.defineProperties({},i)}function zQ(g){return Gi(g._zod.def)}function QQ(g,i){if(!i)return g;return i.reduce((v,h)=>v?.[h],g)}function KQ(g){let i=Object.keys(g),v=i.map((h)=>g[h]);return Promise.all(v).then((h)=>{let u={};for(let P=0;P<i.length;P++)u[i[P]]=h[P];return u})}function UQ(g=10){let v="";for(let h=0;h<g;h++)v+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return v}function uw(g){return JSON.stringify(g)}function C6(g){return g.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var ww="captureStackTrace"in Error?Error.captureStackTrace:(...g)=>{};function Vv(g){return typeof g==="object"&&g!==null&&!Array.isArray(g)}var Z6=H1(()=>{if(yv.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(g){return!1}});function Ut(g){if(Vv(g)===!1)return!1;let i=g.constructor;if(i===void 0)return!0;if(typeof i!=="function")return!0;let v=i.prototype;if(Vv(v)===!1)return!1;if(Object.prototype.hasOwnProperty.call(v,"isPrototypeOf")===!1)return!1;return!0}function oW(g){if(Ut(g))return{...g};if(Array.isArray(g))return[...g];if(g instanceof Map)return new Map(g);if(g instanceof Set)return new Set(g);return g}function $Q(g){let i=0;for(let v in g)if(Object.prototype.hasOwnProperty.call(g,v))i++;return i}var LQ=(g)=>{let i=typeof g;switch(i){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(g)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(g))return"array";if(g===null)return"null";if(g.then&&typeof g.then==="function"&&g.catch&&typeof g.catch==="function")return"promise";if(typeof Map<"u"&&g instanceof Map)return"map";if(typeof Set<"u"&&g instanceof Set)return"set";if(typeof Date<"u"&&g instanceof Date)return"date";if(typeof File<"u"&&g instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${i}`)}},S6=new Set(["string","number","symbol"]),gW=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Xi(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ol(g,i,v){let h=new g._zod.constr(i??g._zod.def);if(!i||v?.parent)h._zod.parent=g;return h}function cr(g){let i=g;if(!i)return{};if(typeof i==="string")return{error:()=>i};if(i?.message!==void 0){if(i?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");i.error=i.message}if(delete i.message,typeof i.error==="string")return{...i,error:()=>i.error};return i}function IQ(g){let i;return new Proxy({},{get(v,h,u){return i??(i=g()),Reflect.get(i,h,u)},set(v,h,u,P){return i??(i=g()),Reflect.set(i,h,u,P)},has(v,h){return i??(i=g()),Reflect.has(i,h)},deleteProperty(v,h){return i??(i=g()),Reflect.deleteProperty(i,h)},ownKeys(v){return i??(i=g()),Reflect.ownKeys(i)},getOwnPropertyDescriptor(v,h){return i??(i=g()),Reflect.getOwnPropertyDescriptor(i,h)},defineProperty(v,h,u){return i??(i=g()),Reflect.defineProperty(i,h,u)}})}function lW(g){if(typeof g==="bigint")return g.toString()+"n";if(typeof g==="string")return`"${g}"`;return`${g}`}function T6(g){return Object.keys(g).filter((i)=>{return g[i]._zod.optin==="optional"&&g[i]._zod.optout==="optional"})}var iW={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},nW={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function FQ(g,i){let v=g._zod.def,h=v.checks;if(h&&h.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Gi(g._zod.def,{get shape(){let O={};for(let A in i){if(!(A in v.shape))throw Error(`Unrecognized key: "${A}"`);if(!i[A])continue;O[A]=v.shape[A]}return Xn(this,"shape",O),O},checks:[]});return ol(g,P)}function xQ(g,i){let v=g._zod.def,h=v.checks;if(h&&h.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Gi(g._zod.def,{get shape(){let O={...g._zod.def.shape};for(let A in i){if(!(A in v.shape))throw Error(`Unrecognized key: "${A}"`);if(!i[A])continue;delete O[A]}return Xn(this,"shape",O),O},checks:[]});return ol(g,P)}function NQ(g,i){if(!Ut(i))throw Error("Invalid input to extend: expected a plain object");let v=g._zod.def.checks;if(v&&v.length>0){let P=g._zod.def.shape;for(let O in i)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let u=Gi(g._zod.def,{get shape(){let P={...g._zod.def.shape,...i};return Xn(this,"shape",P),P}});return ol(g,u)}function BQ(g,i){if(!Ut(i))throw Error("Invalid input to safeExtend: expected a plain object");let v=Gi(g._zod.def,{get shape(){let h={...g._zod.def.shape,...i};return Xn(this,"shape",h),h}});return ol(g,v)}function CQ(g,i){if(g._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let v=Gi(g._zod.def,{get shape(){let h={...g._zod.def.shape,...i._zod.def.shape};return Xn(this,"shape",h),h},get catchall(){return i._zod.def.catchall},checks:i._zod.def.checks??[]});return ol(g,v)}function ZQ(g,i,v){let u=i._zod.def.checks;if(u&&u.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Gi(i._zod.def,{get shape(){let A=i._zod.def.shape,W={...A};if(v)for(let G in v){if(!(G in A))throw Error(`Unrecognized key: "${G}"`);if(!v[G])continue;W[G]=g?new g({type:"optional",innerType:A[G]}):A[G]}else for(let G in A)W[G]=g?new g({type:"optional",innerType:A[G]}):A[G];return Xn(this,"shape",W),W},checks:[]});return ol(i,O)}function SQ(g,i,v){let h=Gi(i._zod.def,{get shape(){let u=i._zod.def.shape,P={...u};if(v)for(let O in v){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!v[O])continue;P[O]=new g({type:"nonoptional",innerType:u[O]})}else for(let O in u)P[O]=new g({type:"nonoptional",innerType:u[O]});return Xn(this,"shape",P),P}});return ol(i,h)}function Yn(g,i=0){if(g.aborted===!0)return!0;for(let v=i;v<g.issues.length;v++)if(g.issues[v]?.continue!==!0)return!0;return!1}function k6(g,i=0){if(g.aborted===!0)return!0;for(let v=i;v<g.issues.length;v++)if(g.issues[v]?.continue===!1)return!0;return!1}function W1(g,i){return i.map((v)=>{var h;return(h=v).path??(h.path=[]),v.path.unshift(g),v})}function A1(g){return typeof g==="string"?g:g?.message}function Dl(g,i,v){let h=g.message?g.message:A1(g.inst?._zod.def?.error?.(g))??A1(i?.error?.(g))??A1(v.customError?.(g))??A1(v.localeError?.(g))??"Invalid input",{inst:u,continue:P,input:O,...A}=g;if(A.path??(A.path=[]),A.message=h,i?.reportInput)A.input=O;return A}function tW(g){if(g instanceof Set)return"set";if(g instanceof Map)return"map";if(g instanceof File)return"file";return"unknown"}function m1(g){if(Array.isArray(g))return"array";if(typeof g==="string")return"string";return"unknown"}function TQ(g){let i=typeof g;switch(i){case"number":return Number.isNaN(g)?"nan":"number";case"object":{if(g===null)return"null";if(Array.isArray(g))return"array";let v=g;if(v&&Object.getPrototypeOf(v)!==Object.prototype&&"constructor"in v&&v.constructor)return v.constructor.name}}return i}function Ev(...g){let[i,v,h]=g;if(typeof i==="string")return{message:i,code:"custom",input:v,inst:h};return{...i}}function kQ(g){return Object.entries(g).filter(([i,v])=>{return Number.isNaN(Number.parseInt(i,10))}).map((i)=>i[1])}function vW(g){let i=atob(g),v=new Uint8Array(i.length);for(let h=0;h<i.length;h++)v[h]=i.charCodeAt(h);return v}function hW(g){let i="";for(let v=0;v<g.length;v++)i+=String.fromCharCode(g[v]);return btoa(i)}function DQ(g){let i=g.replace(/-/g,"+").replace(/_/g,"/"),v="=".repeat((4-i.length%4)%4);return vW(i+v)}function aQ(g){return hW(g).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function cQ(g){let i=g.replace(/^0x/,"");if(i.length%2!==0)throw Error("Invalid hex string length");let v=new Uint8Array(i.length/2);for(let h=0;h<i.length;h+=2)v[h/2]=Number.parseInt(i.slice(h,h+2),16);return v}function yQ(g){return Array.from(g).map((i)=>i.toString(16).padStart(2,"0")).join("")}class bW{constructor(...g){}}var uW=(g,i)=>{g.name="$ZodError",Object.defineProperty(g,"_zod",{value:g._zod,enumerable:!1}),Object.defineProperty(g,"issues",{value:i,enumerable:!1}),g.message=JSON.stringify(i,_v,2),Object.defineProperty(g,"toString",{value:()=>g.message,enumerable:!1})},Pw=_("$ZodError",uW),D6=_("$ZodError",uW,{Parent:Error});function wW(g,i=(v)=>v.message){let v={},h=[];for(let u of g.issues)if(u.path.length>0)v[u.path[0]]=v[u.path[0]]||[],v[u.path[0]].push(i(u));else h.push(i(u));return{formErrors:h,fieldErrors:v}}function PW(g,i=(v)=>v.message){let v={_errors:[]},h=(u,P=[])=>{for(let O of u.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((A)=>h({issues:A},[...P,...O.path]));else if(O.code==="invalid_key")h({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")h({issues:O.issues},[...P,...O.path]);else{let A=[...P,...O.path];if(A.length===0)v._errors.push(i(O));else{let W=v,G=0;while(G<A.length){let m=A[G];if(G!==A.length-1)W[m]=W[m]||{_errors:[]};else W[m]=W[m]||{_errors:[]},W[m]._errors.push(i(O));W=W[m],G++}}}};return h(g),v}var Ow=(g)=>(i,v,h,u)=>{let P=h?{...h,async:!1}:{async:!1},O=i._zod.run({value:v,issues:[]},P);if(O instanceof Promise)throw new Wi;if(O.issues.length){let A=new(u?.Err??g)(O.issues.map((W)=>Dl(W,P,mi())));throw ww(A,u?.callee),A}return O.value};var Aw=(g)=>async(i,v,h,u)=>{let P=h?{...h,async:!0}:{async:!0},O=i._zod.run({value:v,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let A=new(u?.Err??g)(O.issues.map((W)=>Dl(W,P,mi())));throw ww(A,u?.callee),A}return O.value};var G1=(g)=>(i,v,h)=>{let u=h?{...h,async:!1}:{async:!1},P=i._zod.run({value:v,issues:[]},u);if(P instanceof Promise)throw new Wi;return P.issues.length?{success:!1,error:new(g??Pw)(P.issues.map((O)=>Dl(O,u,mi())))}:{success:!0,data:P.value}},OW=G1(D6),X1=(g)=>async(i,v,h)=>{let u=h?{...h,async:!0}:{async:!0},P=i._zod.run({value:v,issues:[]},u);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new g(P.issues.map((O)=>Dl(O,u,mi())))}:{success:!0,data:P.value}},AW=X1(D6),qW=(g)=>(i,v,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return Ow(g)(i,v,u)};var HW=(g)=>(i,v,h)=>{return Ow(g)(i,v,h)};var MW=(g)=>async(i,v,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return Aw(g)(i,v,u)};var RW=(g)=>async(i,v,h)=>{return Aw(g)(i,v,h)};var WW=(g)=>(i,v,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return G1(g)(i,v,u)};var mW=(g)=>(i,v,h)=>{return G1(g)(i,v,h)};var GW=(g)=>async(i,v,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return X1(g)(i,v,u)};var XW=(g)=>async(i,v,h)=>{return X1(g)(i,v,h)};var YW=/^[cC][0-9a-z]{6,}$/,JW=/^[0-9a-z]+$/,zW=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,QW=/^[0-9a-vA-V]{20}$/,KW=/^[A-Za-z0-9]{27}$/,UW=/^[a-zA-Z0-9_-]{21}$/,$W=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var LW=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,a6=(g)=>{if(!g)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${g}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var IW=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var _Q="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function FW(){return new RegExp(_Q,"u")}var xW=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,NW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var BW=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,CW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ZW=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,c6=/^[A-Za-z0-9_-]*$/;var SW=/^https?$/,TW=/^\+[1-9]\d{6,14}$/,kW="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",DW=new RegExp(`^${kW}$`);function aW(g){return typeof g.precision==="number"?g.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":g.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${g.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function cW(g){return new RegExp(`^${aW(g)}$`)}function yW(g){let i=aW({precision:g.precision}),v=["Z"];if(g.local)v.push("");if(g.offset)v.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let h=`${i}(?:${v.join("|")})`;return new RegExp(`^${kW}T(?:${h})$`)}var VW=(g)=>{let i=g?`[\\s\\S]{${g?.minimum??0},${g?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${i}$`)};var _W=/^[^A-Z]*$/,EW=/^[^a-z]*$/;var Wg=_("$ZodCheck",(g,i)=>{var v;g._zod??(g._zod={}),g._zod.def=i,(v=g._zod).onattach??(v.onattach=[])});var fW=_("$ZodCheckMaxLength",(g,i)=>{var v;Wg.init(g,i),(v=g._zod.def).when??(v.when=(h)=>{let u=h.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag.maximum??Number.POSITIVE_INFINITY;if(i.maximum<u)h._zod.bag.maximum=i.maximum}),g._zod.check=(h)=>{let u=h.value;if(u.length<=i.maximum)return;let O=m1(u);h.issues.push({origin:O,code:"too_big",maximum:i.maximum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),pW=_("$ZodCheckMinLength",(g,i)=>{var v;Wg.init(g,i),(v=g._zod.def).when??(v.when=(h)=>{let u=h.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(i.minimum>u)h._zod.bag.minimum=i.minimum}),g._zod.check=(h)=>{let u=h.value;if(u.length>=i.minimum)return;let O=m1(u);h.issues.push({origin:O,code:"too_small",minimum:i.minimum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),jW=_("$ZodCheckLengthEquals",(g,i)=>{var v;Wg.init(g,i),(v=g._zod.def).when??(v.when=(h)=>{let u=h.value;return!M1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.minimum=i.length,u.maximum=i.length,u.length=i.length}),g._zod.check=(h)=>{let u=h.value,P=u.length;if(P===i.length)return;let O=m1(u),A=P>i.length;h.issues.push({origin:O,...A?{code:"too_big",maximum:i.length}:{code:"too_small",minimum:i.length},inclusive:!0,exact:!0,input:h.value,inst:g,continue:!i.abort})}}),Y1=_("$ZodCheckStringFormat",(g,i)=>{var v,h;if(Wg.init(g,i),g._zod.onattach.push((u)=>{let P=u._zod.bag;if(P.format=i.format,i.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(i.pattern)}),i.pattern)(v=g._zod).check??(v.check=(u)=>{if(i.pattern.lastIndex=0,i.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:i.format,input:u.value,...i.pattern?{pattern:i.pattern.toString()}:{},inst:g,continue:!i.abort})});else(h=g._zod).check??(h.check=()=>{})}),dW=_("$ZodCheckRegex",(g,i)=>{Y1.init(g,i),g._zod.check=(v)=>{if(i.pattern.lastIndex=0,i.pattern.test(v.value))return;v.issues.push({origin:"string",code:"invalid_format",format:"regex",input:v.value,pattern:i.pattern.toString(),inst:g,continue:!i.abort})}}),sW=_("$ZodCheckLowerCase",(g,i)=>{i.pattern??(i.pattern=_W),Y1.init(g,i)}),r9=_("$ZodCheckUpperCase",(g,i)=>{i.pattern??(i.pattern=EW),Y1.init(g,i)}),e9=_("$ZodCheckIncludes",(g,i)=>{Wg.init(g,i);let v=Xi(i.includes),h=new RegExp(typeof i.position==="number"?`^.{${i.position}}${v}`:v);i.pattern=h,g._zod.onattach.push((u)=>{let P=u._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(h)}),g._zod.check=(u)=>{if(u.value.includes(i.includes,i.position))return;u.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:i.includes,input:u.value,inst:g,continue:!i.abort})}}),o9=_("$ZodCheckStartsWith",(g,i)=>{Wg.init(g,i);let v=new RegExp(`^${Xi(i.prefix)}.*`);i.pattern??(i.pattern=v),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(v)}),g._zod.check=(h)=>{if(h.value.startsWith(i.prefix))return;h.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:i.prefix,input:h.value,inst:g,continue:!i.abort})}}),g9=_("$ZodCheckEndsWith",(g,i)=>{Wg.init(g,i);let v=new RegExp(`.*${Xi(i.suffix)}$`);i.pattern??(i.pattern=v),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(v)}),g._zod.check=(h)=>{if(h.value.endsWith(i.suffix))return;h.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:i.suffix,input:h.value,inst:g,continue:!i.abort})}});var l9=_("$ZodCheckOverwrite",(g,i)=>{Wg.init(g,i),g._zod.check=(v)=>{v.value=i.tx(v.value)}});class y6{constructor(g=[]){if(this.content=[],this.indent=0,this)this.args=g}indented(g){this.indent+=1,g(this),this.indent-=1}write(g){if(typeof g==="function"){g(this,{execution:"sync"}),g(this,{execution:"async"});return}let v=g.split(`
`).filter((P)=>P),h=Math.min(...v.map((P)=>P.length-P.trimStart().length)),u=v.map((P)=>P.slice(h)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of u)this.content.push(P)}compile(){let g=Function,i=this?.args,h=[...(this?.content??[""]).map((u)=>`  ${u}`)];return new g(...i,h.join(`
`))}}var n9={major:4,minor:4,patch:3};var ye=_("$ZodType",(g,i)=>{var v;g??(g={}),g._zod.def=i,g._zod.bag=g._zod.bag||{},g._zod.version=n9;let h=[...g._zod.def.checks??[]];if(g._zod.traits.has("$ZodCheck"))h.unshift(g);for(let u of h)for(let P of u._zod.onattach)P(g);if(h.length===0)(v=g._zod).deferred??(v.deferred=[]),g._zod.deferred?.push(()=>{g._zod.run=g._zod.parse});else{let u=(O,A,W)=>{let G=Yn(O),m;for(let H of A){if(H._zod.def.when){if(k6(O))continue;if(!H._zod.def.when(O))continue}else if(G)continue;let X=O.issues.length,L=H._zod.check(O);if(L instanceof Promise&&W?.async===!1)throw new Wi;if(m||L instanceof Promise)m=(m??Promise.resolve()).then(async()=>{if(await L,O.issues.length===X)return;if(!G)G=Yn(O,X)});else{if(O.issues.length===X)continue;if(!G)G=Yn(O,X)}}if(m)return m.then(()=>{return O});return O},P=(O,A,W)=>{if(Yn(O))return O.aborted=!0,O;let G=u(A,h,W);if(G instanceof Promise){if(W.async===!1)throw new Wi;return G.then((m)=>g._zod.parse(m,W))}return g._zod.parse(G,W)};g._zod.run=(O,A)=>{if(A.skipChecks)return g._zod.parse(O,A);if(A.direction==="backward"){let G=g._zod.parse({value:O.value,issues:[]},{...A,skipChecks:!0});if(G instanceof Promise)return G.then((m)=>{return P(m,O,A)});return P(G,O,A)}let W=g._zod.parse(O,A);if(W instanceof Promise){if(A.async===!1)throw new Wi;return W.then((G)=>u(G,h,A))}return u(W,h,A)}}Oe(g,"~standard",()=>({validate:(u)=>{try{let P=OW(g,u);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return AW(g,u).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),Rw=_("$ZodString",(g,i)=>{ye.init(g,i),g._zod.pattern=[...g?._zod.bag?.patterns??[]].pop()??VW(g._zod.bag),g._zod.parse=(v,h)=>{if(i.coerce)try{v.value=String(v.value)}catch(u){}if(typeof v.value==="string")return v;return v.issues.push({expected:"string",code:"invalid_type",input:v.value,inst:g}),v}}),Ie=_("$ZodStringFormat",(g,i)=>{Y1.init(g,i),Rw.init(g,i)}),A9=_("$ZodGUID",(g,i)=>{i.pattern??(i.pattern=LW),Ie.init(g,i)}),q9=_("$ZodUUID",(g,i)=>{if(i.version){let h={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[i.version];if(h===void 0)throw Error(`Invalid UUID version: "${i.version}"`);i.pattern??(i.pattern=a6(h))}else i.pattern??(i.pattern=a6());Ie.init(g,i)}),H9=_("$ZodEmail",(g,i)=>{i.pattern??(i.pattern=IW),Ie.init(g,i)}),M9=_("$ZodURL",(g,i)=>{Ie.init(g,i),g._zod.check=(v)=>{try{let h=v.value.trim();if(!i.normalize&&i.protocol?.source===SW.source){if(!/^https?:\/\//i.test(h)){v.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:v.value,inst:g,continue:!i.abort});return}}let u=new URL(h);if(i.hostname){if(i.hostname.lastIndex=0,!i.hostname.test(u.hostname))v.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:i.hostname.source,input:v.value,inst:g,continue:!i.abort})}if(i.protocol){if(i.protocol.lastIndex=0,!i.protocol.test(u.protocol.endsWith(":")?u.protocol.slice(0,-1):u.protocol))v.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:i.protocol.source,input:v.value,inst:g,continue:!i.abort})}if(i.normalize)v.value=u.href;else v.value=h;return}catch(h){v.issues.push({code:"invalid_format",format:"url",input:v.value,inst:g,continue:!i.abort})}}}),R9=_("$ZodEmoji",(g,i)=>{i.pattern??(i.pattern=FW()),Ie.init(g,i)}),W9=_("$ZodNanoID",(g,i)=>{i.pattern??(i.pattern=UW),Ie.init(g,i)}),m9=_("$ZodCUID",(g,i)=>{i.pattern??(i.pattern=YW),Ie.init(g,i)}),G9=_("$ZodCUID2",(g,i)=>{i.pattern??(i.pattern=JW),Ie.init(g,i)}),X9=_("$ZodULID",(g,i)=>{i.pattern??(i.pattern=zW),Ie.init(g,i)}),Y9=_("$ZodXID",(g,i)=>{i.pattern??(i.pattern=QW),Ie.init(g,i)}),J9=_("$ZodKSUID",(g,i)=>{i.pattern??(i.pattern=KW),Ie.init(g,i)}),z9=_("$ZodISODateTime",(g,i)=>{i.pattern??(i.pattern=yW(i)),Ie.init(g,i)}),Q9=_("$ZodISODate",(g,i)=>{i.pattern??(i.pattern=DW),Ie.init(g,i)}),K9=_("$ZodISOTime",(g,i)=>{i.pattern??(i.pattern=cW(i)),Ie.init(g,i)}),U9=_("$ZodISODuration",(g,i)=>{i.pattern??(i.pattern=$W),Ie.init(g,i)}),$9=_("$ZodIPv4",(g,i)=>{i.pattern??(i.pattern=xW),Ie.init(g,i),g._zod.bag.format="ipv4"}),L9=_("$ZodIPv6",(g,i)=>{i.pattern??(i.pattern=NW),Ie.init(g,i),g._zod.bag.format="ipv6",g._zod.check=(v)=>{try{new URL(`http://[${v.value}]`)}catch{v.issues.push({code:"invalid_format",format:"ipv6",input:v.value,inst:g,continue:!i.abort})}}});var I9=_("$ZodCIDRv4",(g,i)=>{i.pattern??(i.pattern=BW),Ie.init(g,i)}),F9=_("$ZodCIDRv6",(g,i)=>{i.pattern??(i.pattern=CW),Ie.init(g,i),g._zod.check=(v)=>{let h=v.value.split("/");try{if(h.length!==2)throw Error();let[u,P]=h;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${u}]`)}catch{v.issues.push({code:"invalid_format",format:"cidrv6",input:v.value,inst:g,continue:!i.abort})}}});function x9(g){if(g==="")return!0;if(/\s/.test(g))return!1;if(g.length%4!==0)return!1;try{return atob(g),!0}catch{return!1}}var N9=_("$ZodBase64",(g,i)=>{i.pattern??(i.pattern=ZW),Ie.init(g,i),g._zod.bag.contentEncoding="base64",g._zod.check=(v)=>{if(x9(v.value))return;v.issues.push({code:"invalid_format",format:"base64",input:v.value,inst:g,continue:!i.abort})}});function EQ(g){if(!c6.test(g))return!1;let i=g.replace(/[-_]/g,(h)=>h==="-"?"+":"/"),v=i.padEnd(Math.ceil(i.length/4)*4,"=");return x9(v)}var B9=_("$ZodBase64URL",(g,i)=>{i.pattern??(i.pattern=c6),Ie.init(g,i),g._zod.bag.contentEncoding="base64url",g._zod.check=(v)=>{if(EQ(v.value))return;v.issues.push({code:"invalid_format",format:"base64url",input:v.value,inst:g,continue:!i.abort})}}),C9=_("$ZodE164",(g,i)=>{i.pattern??(i.pattern=TW),Ie.init(g,i)});function fQ(g,i=null){try{let v=g.split(".");if(v.length!==3)return!1;let[h]=v;if(!h)return!1;let u=JSON.parse(atob(h));if("typ"in u&&u?.typ!=="JWT")return!1;if(!u.alg)return!1;if(i&&(!("alg"in u)||u.alg!==i))return!1;return!0}catch{return!1}}var Z9=_("$ZodJWT",(g,i)=>{Ie.init(g,i),g._zod.check=(v)=>{if(fQ(v.value,i.alg))return;v.issues.push({code:"invalid_format",format:"jwt",input:v.value,inst:g,continue:!i.abort})}});var S9=_("$ZodUnknown",(g,i)=>{ye.init(g,i),g._zod.parse=(v)=>v}),T9=_("$ZodNever",(g,i)=>{ye.init(g,i),g._zod.parse=(v,h)=>{return v.issues.push({expected:"never",code:"invalid_type",input:v.value,inst:g}),v}});function t9(g,i,v){if(g.issues.length)i.issues.push(...W1(v,g.issues));i.value[v]=g.value}var k9=_("$ZodArray",(g,i)=>{ye.init(g,i),g._zod.parse=(v,h)=>{let u=v.value;if(!Array.isArray(u))return v.issues.push({expected:"array",code:"invalid_type",input:u,inst:g}),v;v.value=Array(u.length);let P=[];for(let O=0;O<u.length;O++){let A=u[O],W=i.element._zod.run({value:A,issues:[]},h);if(W instanceof Promise)P.push(W.then((G)=>t9(G,v,O)));else t9(W,v,O)}if(P.length)return Promise.all(P).then(()=>v);return v}});function Mw(g,i,v,h,u,P){let O=v in h;if(g.issues.length){if(u&&P&&!O)return;i.issues.push(...W1(v,g.issues))}if(!O&&!u){if(!g.issues.length)i.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[v]});return}if(g.value===void 0){if(O)i.value[v]=void 0}else i.value[v]=g.value}function D9(g){let i=Object.keys(g.shape);for(let h of i)if(!g.shape?.[h]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${h}": expected a Zod schema`);let v=T6(g.shape);return{...g,keys:i,keySet:new Set(i),numKeys:i.length,optionalKeys:new Set(v)}}function a9(g,i,v,h,u,P){let O=[],A=u.keySet,W=u.catchall._zod,G=W.def.type,m=W.optin==="optional",H=W.optout==="optional";for(let X in i){if(X==="__proto__")continue;if(A.has(X))continue;if(G==="never"){O.push(X);continue}let L=W.run({value:i[X],issues:[]},h);if(L instanceof Promise)g.push(L.then((S)=>Mw(S,v,X,i,m,H)));else Mw(L,v,X,i,m,H)}if(O.length)v.issues.push({code:"unrecognized_keys",keys:O,input:i,inst:P});if(!g.length)return v;return Promise.all(g).then(()=>{return v})}var pQ=_("$ZodObject",(g,i)=>{if(ye.init(g,i),!Object.getOwnPropertyDescriptor(i,"shape")?.get){let A=i.shape;Object.defineProperty(i,"shape",{get:()=>{let W={...A};return Object.defineProperty(i,"shape",{value:W}),W}})}let h=H1(()=>D9(i));Oe(g._zod,"propValues",()=>{let A=i.shape,W={};for(let G in A){let m=A[G]._zod;if(m.values){W[G]??(W[G]=new Set);for(let H of m.values)W[G].add(H)}}return W});let u=Vv,P=i.catchall,O;g._zod.parse=(A,W)=>{O??(O=h.value);let G=A.value;if(!u(G))return A.issues.push({expected:"object",code:"invalid_type",input:G,inst:g}),A;A.value={};let m=[],H=O.shape;for(let X of O.keys){let L=H[X],S=L._zod.optin==="optional",C=L._zod.optout==="optional",c=L._zod.run({value:G[X],issues:[]},W);if(c instanceof Promise)m.push(c.then((rr)=>Mw(rr,A,X,G,S,C)));else Mw(c,A,X,G,S,C)}if(!P)return m.length?Promise.all(m).then(()=>A):A;return a9(m,G,A,W,h.value,g)}}),c9=_("$ZodObjectJIT",(g,i)=>{pQ.init(g,i);let v=g._zod.parse,h=H1(()=>D9(i)),u=(X)=>{let L=new y6(["shape","payload","ctx"]),S=h.value,C=(ir)=>{let p=uw(ir);return`shape[${p}]._zod.run({ value: input[${p}], issues: [] }, ctx)`};L.write("const input = payload.value;");let c=Object.create(null),rr=0;for(let ir of S.keys)c[ir]=`key_${rr++}`;L.write("const newResult = {};");for(let ir of S.keys){let p=c[ir],d=uw(ir),lr=X[ir],N=lr?._zod?.optin==="optional",y=lr?._zod?.optout==="optional";if(L.write(`const ${p} = ${C(ir)};`),N&&y)L.write(`
        if (${p}.issues.length) {
          if (${d} in input) {
            payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${d}, ...iss.path] : [${d}]
            })));
          }
        }
        
        if (${p}.value === undefined) {
          if (${d} in input) {
            newResult[${d}] = undefined;
          }
        } else {
          newResult[${d}] = ${p}.value;
        }
        
      `);else if(!N)L.write(`
        const ${p}_present = ${d} in input;
        if (${p}.issues.length) {
          payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${d}, ...iss.path] : [${d}]
          })));
        }
        if (!${p}_present && !${p}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${d}]
          });
        }

        if (${p}_present) {
          if (${p}.value === undefined) {
            newResult[${d}] = undefined;
          } else {
            newResult[${d}] = ${p}.value;
          }
        }

      `);else L.write(`
        if (${p}.issues.length) {
          payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${d}, ...iss.path] : [${d}]
          })));
        }
        
        if (${p}.value === undefined) {
          if (${d} in input) {
            newResult[${d}] = undefined;
          }
        } else {
          newResult[${d}] = ${p}.value;
        }
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let wr=L.compile();return(ir,p)=>wr(X,ir,p)},P,O=Vv,A=!yv.jitless,G=A&&Z6.value,m=i.catchall,H;g._zod.parse=(X,L)=>{H??(H=h.value);let S=X.value;if(!O(S))return X.issues.push({expected:"object",code:"invalid_type",input:S,inst:g}),X;if(A&&G&&L?.async===!1&&L.jitless!==!0){if(!P)P=u(i.shape);if(X=P(X,L),!m)return X;return a9([],S,X,L,H,g)}return v(X,L)}});function v9(g,i,v,h){for(let P of g)if(P.issues.length===0)return i.value=P.value,i;let u=g.filter((P)=>!Yn(P));if(u.length===1)return i.value=u[0].value,u[0];return i.issues.push({code:"invalid_union",input:i.value,inst:v,errors:g.map((P)=>P.issues.map((O)=>Dl(O,h,mi())))}),i}var y9=_("$ZodUnion",(g,i)=>{ye.init(g,i),Oe(g._zod,"optin",()=>i.options.some((h)=>h._zod.optin==="optional")?"optional":void 0),Oe(g._zod,"optout",()=>i.options.some((h)=>h._zod.optout==="optional")?"optional":void 0),Oe(g._zod,"values",()=>{if(i.options.every((h)=>h._zod.values))return new Set(i.options.flatMap((h)=>Array.from(h._zod.values)));return}),Oe(g._zod,"pattern",()=>{if(i.options.every((h)=>h._zod.pattern)){let h=i.options.map((u)=>u._zod.pattern);return new RegExp(`^(${h.map((u)=>R1(u.source)).join("|")})$`)}return});let v=i.options.length===1?i.options[0]._zod.run:null;g._zod.parse=(h,u)=>{if(v)return v(h,u);let P=!1,O=[];for(let A of i.options){let W=A._zod.run({value:h.value,issues:[]},u);if(W instanceof Promise)O.push(W),P=!0;else{if(W.issues.length===0)return W;O.push(W)}}if(!P)return v9(O,h,g,u);return Promise.all(O).then((A)=>{return v9(A,h,g,u)})}});var V9=_("$ZodIntersection",(g,i)=>{ye.init(g,i),g._zod.parse=(v,h)=>{let u=v.value,P=i.left._zod.run({value:u,issues:[]},h),O=i.right._zod.run({value:u,issues:[]},h);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([W,G])=>{return h9(v,W,G)});return h9(v,P,O)}});function V6(g,i){if(g===i)return{valid:!0,data:g};if(g instanceof Date&&i instanceof Date&&+g===+i)return{valid:!0,data:g};if(Ut(g)&&Ut(i)){let v=Object.keys(i),h=Object.keys(g).filter((P)=>v.indexOf(P)!==-1),u={...g,...i};for(let P of h){let O=V6(g[P],i[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};u[P]=O.data}return{valid:!0,data:u}}if(Array.isArray(g)&&Array.isArray(i)){if(g.length!==i.length)return{valid:!1,mergeErrorPath:[]};let v=[];for(let h=0;h<g.length;h++){let u=g[h],P=i[h],O=V6(u,P);if(!O.valid)return{valid:!1,mergeErrorPath:[h,...O.mergeErrorPath]};v.push(O.data)}return{valid:!0,data:v}}return{valid:!1,mergeErrorPath:[]}}function h9(g,i,v){let h=new Map,u;for(let A of i.issues)if(A.code==="unrecognized_keys"){u??(u=A);for(let W of A.keys){if(!h.has(W))h.set(W,{});h.get(W).l=!0}}else g.issues.push(A);for(let A of v.issues)if(A.code==="unrecognized_keys")for(let W of A.keys){if(!h.has(W))h.set(W,{});h.get(W).r=!0}else g.issues.push(A);let P=[...h].filter(([,A])=>A.l&&A.r).map(([A])=>A);if(P.length&&u)g.issues.push({...u,keys:P});if(Yn(g))return g;let O=V6(i.value,v.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return g.value=O.data,g}var _9=_("$ZodEnum",(g,i)=>{ye.init(g,i);let v=q1(i.entries),h=new Set(v);g._zod.values=h,g._zod.pattern=new RegExp(`^(${v.filter((u)=>S6.has(typeof u)).map((u)=>typeof u==="string"?Xi(u):u.toString()).join("|")})$`),g._zod.parse=(u,P)=>{let O=u.value;if(h.has(O))return u;return u.issues.push({code:"invalid_value",values:v,input:O,inst:g}),u}}),E9=_("$ZodLiteral",(g,i)=>{if(ye.init(g,i),i.values.length===0)throw Error("Cannot create literal schema with no valid values");let v=new Set(i.values);g._zod.values=v,g._zod.pattern=new RegExp(`^(${i.values.map((h)=>typeof h==="string"?Xi(h):h?Xi(h.toString()):String(h)).join("|")})$`),g._zod.parse=(h,u)=>{let P=h.value;if(v.has(P))return h;return h.issues.push({code:"invalid_value",values:i.values,input:P,inst:g}),h}});var f9=_("$ZodTransform",(g,i)=>{ye.init(g,i),g._zod.optin="optional",g._zod.parse=(v,h)=>{if(h.direction==="backward")throw new O1(g.constructor.name);let u=i.transform(v.value,v);if(h.async)return(u instanceof Promise?u:Promise.resolve(u)).then((O)=>{return v.value=O,v.fallback=!0,v});if(u instanceof Promise)throw new Wi;return v.value=u,v.fallback=!0,v}});function b9(g,i){if(i===void 0&&(g.issues.length||g.fallback))return{issues:[],value:void 0};return g}var _6=_("$ZodOptional",(g,i)=>{ye.init(g,i),g._zod.optin="optional",g._zod.optout="optional",Oe(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,void 0]):void 0}),Oe(g._zod,"pattern",()=>{let v=i.innerType._zod.pattern;return v?new RegExp(`^(${R1(v.source)})?$`):void 0}),g._zod.parse=(v,h)=>{if(i.innerType._zod.optin==="optional"){let u=v.value,P=i.innerType._zod.run(v,h);if(P instanceof Promise)return P.then((O)=>b9(O,u));return b9(P,u)}if(v.value===void 0)return v;return i.innerType._zod.run(v,h)}}),p9=_("$ZodExactOptional",(g,i)=>{_6.init(g,i),Oe(g._zod,"values",()=>i.innerType._zod.values),Oe(g._zod,"pattern",()=>i.innerType._zod.pattern),g._zod.parse=(v,h)=>{return i.innerType._zod.run(v,h)}}),j9=_("$ZodNullable",(g,i)=>{ye.init(g,i),Oe(g._zod,"optin",()=>i.innerType._zod.optin),Oe(g._zod,"optout",()=>i.innerType._zod.optout),Oe(g._zod,"pattern",()=>{let v=i.innerType._zod.pattern;return v?new RegExp(`^(${R1(v.source)}|null)$`):void 0}),Oe(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,null]):void 0}),g._zod.parse=(v,h)=>{if(v.value===null)return v;return i.innerType._zod.run(v,h)}}),d9=_("$ZodDefault",(g,i)=>{ye.init(g,i),g._zod.optin="optional",Oe(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(v,h)=>{if(h.direction==="backward")return i.innerType._zod.run(v,h);if(v.value===void 0)return v.value=i.defaultValue,v;let u=i.innerType._zod.run(v,h);if(u instanceof Promise)return u.then((P)=>u9(P,i));return u9(u,i)}});function u9(g,i){if(g.value===void 0)g.value=i.defaultValue;return g}var s9=_("$ZodPrefault",(g,i)=>{ye.init(g,i),g._zod.optin="optional",Oe(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(v,h)=>{if(h.direction==="backward")return i.innerType._zod.run(v,h);if(v.value===void 0)v.value=i.defaultValue;return i.innerType._zod.run(v,h)}}),rm=_("$ZodNonOptional",(g,i)=>{ye.init(g,i),Oe(g._zod,"values",()=>{let v=i.innerType._zod.values;return v?new Set([...v].filter((h)=>h!==void 0)):void 0}),g._zod.parse=(v,h)=>{let u=i.innerType._zod.run(v,h);if(u instanceof Promise)return u.then((P)=>w9(P,g));return w9(u,g)}});function w9(g,i){if(!g.issues.length&&g.value===void 0)g.issues.push({code:"invalid_type",expected:"nonoptional",input:g.value,inst:i});return g}var em=_("$ZodCatch",(g,i)=>{ye.init(g,i),g._zod.optin="optional",Oe(g._zod,"optout",()=>i.innerType._zod.optout),Oe(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(v,h)=>{if(h.direction==="backward")return i.innerType._zod.run(v,h);let u=i.innerType._zod.run(v,h);if(u instanceof Promise)return u.then((P)=>{if(v.value=P.value,P.issues.length)v.value=i.catchValue({...v,error:{issues:P.issues.map((O)=>Dl(O,h,mi()))},input:v.value}),v.issues=[],v.fallback=!0;return v});if(v.value=u.value,u.issues.length)v.value=i.catchValue({...v,error:{issues:u.issues.map((P)=>Dl(P,h,mi()))},input:v.value}),v.issues=[],v.fallback=!0;return v}});var om=_("$ZodPipe",(g,i)=>{ye.init(g,i),Oe(g._zod,"values",()=>i.in._zod.values),Oe(g._zod,"optin",()=>i.in._zod.optin),Oe(g._zod,"optout",()=>i.out._zod.optout),Oe(g._zod,"propValues",()=>i.in._zod.propValues),g._zod.parse=(v,h)=>{if(h.direction==="backward"){let P=i.out._zod.run(v,h);if(P instanceof Promise)return P.then((O)=>Hw(O,i.in,h));return Hw(P,i.in,h)}let u=i.in._zod.run(v,h);if(u instanceof Promise)return u.then((P)=>Hw(P,i.out,h));return Hw(u,i.out,h)}});function Hw(g,i,v){if(g.issues.length)return g.aborted=!0,g;return i._zod.run({value:g.value,issues:g.issues,fallback:g.fallback},v)}var gm=_("$ZodReadonly",(g,i)=>{ye.init(g,i),Oe(g._zod,"propValues",()=>i.innerType._zod.propValues),Oe(g._zod,"values",()=>i.innerType._zod.values),Oe(g._zod,"optin",()=>i.innerType?._zod?.optin),Oe(g._zod,"optout",()=>i.innerType?._zod?.optout),g._zod.parse=(v,h)=>{if(h.direction==="backward")return i.innerType._zod.run(v,h);let u=i.innerType._zod.run(v,h);if(u instanceof Promise)return u.then(P9);return P9(u)}});function P9(g){return g.value=Object.freeze(g.value),g}var lm=_("$ZodCustom",(g,i)=>{Wg.init(g,i),ye.init(g,i),g._zod.parse=(v,h)=>{return v},g._zod.check=(v)=>{let h=v.value,u=i.fn(h);if(u instanceof Promise)return u.then((P)=>O9(P,v,h,g));O9(u,v,h,g);return}});function O9(g,i,v,h){if(!g){let u={code:"custom",input:v,inst:h,path:[...h._zod.def.path??[]],continue:!h._zod.def.abort};if(h._zod.def.params)u.params=h._zod.def.params;i.issues.push(Ev(u))}}var im,fce=Symbol("ZodOutput"),pce=Symbol("ZodInput");class nm{constructor(){this._map=new WeakMap,this._idmap=new Map}add(g,...i){let v=i[0];if(this._map.set(g,v),v&&typeof v==="object"&&"id"in v)this._idmap.set(v.id,g);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(g){let i=this._map.get(g);if(i&&typeof i==="object"&&"id"in i)this._idmap.delete(i.id);return this._map.delete(g),this}get(g){let i=g._zod.parent;if(i){let v={...this.get(i)??{}};delete v.id;let h={...v,...this._map.get(g)};return Object.keys(h).length?h:void 0}return this._map.get(g)}has(g){return this._map.has(g)}}function jQ(){return new nm}(im=globalThis).__zod_globalRegistry??(im.__zod_globalRegistry=jQ());var $t=globalThis.__zod_globalRegistry;function tm(g,i){return new g({type:"string",...cr(i)})}function vm(g,i){return new g({type:"string",format:"email",check:"string_format",abort:!1,...cr(i)})}function E6(g,i){return new g({type:"string",format:"guid",check:"string_format",abort:!1,...cr(i)})}function hm(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,...cr(i)})}function bm(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...cr(i)})}function um(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...cr(i)})}function wm(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...cr(i)})}function Pm(g,i){return new g({type:"string",format:"url",check:"string_format",abort:!1,...cr(i)})}function Om(g,i){return new g({type:"string",format:"emoji",check:"string_format",abort:!1,...cr(i)})}function Am(g,i){return new g({type:"string",format:"nanoid",check:"string_format",abort:!1,...cr(i)})}function qm(g,i){return new g({type:"string",format:"cuid",check:"string_format",abort:!1,...cr(i)})}function Hm(g,i){return new g({type:"string",format:"cuid2",check:"string_format",abort:!1,...cr(i)})}function Mm(g,i){return new g({type:"string",format:"ulid",check:"string_format",abort:!1,...cr(i)})}function Rm(g,i){return new g({type:"string",format:"xid",check:"string_format",abort:!1,...cr(i)})}function Wm(g,i){return new g({type:"string",format:"ksuid",check:"string_format",abort:!1,...cr(i)})}function mm(g,i){return new g({type:"string",format:"ipv4",check:"string_format",abort:!1,...cr(i)})}function Gm(g,i){return new g({type:"string",format:"ipv6",check:"string_format",abort:!1,...cr(i)})}function Xm(g,i){return new g({type:"string",format:"cidrv4",check:"string_format",abort:!1,...cr(i)})}function Ym(g,i){return new g({type:"string",format:"cidrv6",check:"string_format",abort:!1,...cr(i)})}function Jm(g,i){return new g({type:"string",format:"base64",check:"string_format",abort:!1,...cr(i)})}function zm(g,i){return new g({type:"string",format:"base64url",check:"string_format",abort:!1,...cr(i)})}function Qm(g,i){return new g({type:"string",format:"e164",check:"string_format",abort:!1,...cr(i)})}function Km(g,i){return new g({type:"string",format:"jwt",check:"string_format",abort:!1,...cr(i)})}function Um(g,i){return new g({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...cr(i)})}function $m(g,i){return new g({type:"string",format:"date",check:"string_format",...cr(i)})}function Lm(g,i){return new g({type:"string",format:"time",check:"string_format",precision:null,...cr(i)})}function Im(g,i){return new g({type:"string",format:"duration",check:"string_format",...cr(i)})}function Fm(g){return new g({type:"unknown"})}function xm(g,i){return new g({type:"never",...cr(i)})}function Ww(g,i){return new fW({check:"max_length",...cr(i),maximum:g})}function fv(g,i){return new pW({check:"min_length",...cr(i),minimum:g})}function mw(g,i){return new jW({check:"length_equals",...cr(i),length:g})}function f6(g,i){return new dW({check:"string_format",format:"regex",...cr(i),pattern:g})}function p6(g){return new sW({check:"string_format",format:"lowercase",...cr(g)})}function j6(g){return new r9({check:"string_format",format:"uppercase",...cr(g)})}function d6(g,i){return new e9({check:"string_format",format:"includes",...cr(i),includes:g})}function s6(g,i){return new o9({check:"string_format",format:"starts_with",...cr(i),prefix:g})}function rP(g,i){return new g9({check:"string_format",format:"ends_with",...cr(i),suffix:g})}function Jn(g){return new l9({check:"overwrite",tx:g})}function eP(g){return Jn((i)=>i.normalize(g))}function oP(){return Jn((g)=>g.trim())}function gP(){return Jn((g)=>g.toLowerCase())}function lP(){return Jn((g)=>g.toUpperCase())}function iP(){return Jn((g)=>C6(g))}function Nm(g,i,v){return new g({type:"array",element:i,...cr(v)})}function Bm(g,i,v){return new g({type:"custom",check:"custom",fn:i,...cr(v)})}function Cm(g,i){let v=dQ((h)=>{return h.addIssue=(u)=>{if(typeof u==="string")h.issues.push(Ev(u,h.value,v._zod.def));else{let P=u;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=h.value),P.inst??(P.inst=v),P.continue??(P.continue=!v._zod.def.abort),h.issues.push(Ev(P))}},g(h.value,h)},i);return v}function dQ(g,i){let v=new Wg({check:"custom",...cr(i)});return v._zod.check=g,v}function nP(g){let i=g?.target??"draft-2020-12";if(i==="draft-4")i="draft-04";if(i==="draft-7")i="draft-07";return{processors:g.processors??{},metadataRegistry:g?.metadata??$t,target:i,unrepresentable:g?.unrepresentable??"throw",override:g?.override??(()=>{}),io:g?.io??"output",counter:0,seen:new Map,cycles:g?.cycles??"ref",reused:g?.reused??"inline",external:g?.external??void 0}}function wo(g,i,v={path:[],schemaPath:[]}){var h;let u=g._zod.def,P=i.seen.get(g);if(P){if(P.count++,v.schemaPath.includes(g))P.cycle=v.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:v.path};i.seen.set(g,O);let A=g._zod.toJSONSchema?.();if(A)O.schema=A;else{let m={...v,schemaPath:[...v.schemaPath,g],path:v.path};if(g._zod.processJSONSchema)g._zod.processJSONSchema(i,O.schema,m);else{let X=O.schema,L=i.processors[u.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${u.type}`);L(g,i,X,m)}let H=g._zod.parent;if(H){if(!O.ref)O.ref=H;wo(H,i,m),i.seen.get(H).isParent=!0}}let W=i.metadataRegistry.get(g);if(W)Object.assign(O.schema,W);if(i.io==="input"&&Do(g))delete O.schema.examples,delete O.schema.default;if(i.io==="input"&&"_prefault"in O.schema)(h=O.schema).default??(h.default=O.schema._prefault);return delete O.schema._prefault,i.seen.get(g).schema}function tP(g,i){let v=g.seen.get(i);if(!v)throw Error("Unprocessed schema. This is a bug in Zod.");let h=new Map;for(let O of g.seen.entries()){let A=g.metadataRegistry.get(O[0])?.id;if(A){let W=h.get(A);if(W&&W!==O[0])throw Error(`Duplicate schema id "${A}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);h.set(A,O[0])}}let u=(O)=>{let A=g.target==="draft-2020-12"?"$defs":"definitions";if(g.external){let H=g.external.registry.get(O[0])?.id,X=g.external.uri??((S)=>S);if(H)return{ref:X(H)};let L=O[1].defId??O[1].schema.id??`schema${g.counter++}`;return O[1].defId=L,{defId:L,ref:`${X("__shared")}#/${A}/${L}`}}if(O[1]===v)return{ref:"#"};let G=`${"#"}/${A}/`,m=O[1].schema.id??`__schema${g.counter++}`;return{defId:m,ref:G+m}},P=(O)=>{if(O[1].schema.$ref)return;let A=O[1],{ref:W,defId:G}=u(O);if(A.def={...A.schema},G)A.defId=G;let m=A.schema;for(let H in m)delete m[H];m.$ref=W};if(g.cycles==="throw")for(let O of g.seen.entries()){let A=O[1];if(A.cycle)throw Error(`Cycle detected: #/${A.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of g.seen.entries()){let A=O[1];if(i===O[0]){P(O);continue}if(g.external){let G=g.external.registry.get(O[0])?.id;if(i!==O[0]&&G){P(O);continue}}if(g.metadataRegistry.get(O[0])?.id){P(O);continue}if(A.cycle){P(O);continue}if(A.count>1){if(g.reused==="ref"){P(O);continue}}}}function vP(g,i){let v=g.seen.get(i);if(!v)throw Error("Unprocessed schema. This is a bug in Zod.");let h=(A)=>{let W=g.seen.get(A);if(W.ref===null)return;let G=W.def??W.schema,m={...G},H=W.ref;if(W.ref=null,H){h(H);let L=g.seen.get(H),S=L.schema;if(S.$ref&&(g.target==="draft-07"||g.target==="draft-04"||g.target==="openapi-3.0"))G.allOf=G.allOf??[],G.allOf.push(S);else Object.assign(G,S);if(Object.assign(G,m),A._zod.parent===H)for(let c in G){if(c==="$ref"||c==="allOf")continue;if(!(c in m))delete G[c]}if(S.$ref&&L.def)for(let c in G){if(c==="$ref"||c==="allOf")continue;if(c in L.def&&JSON.stringify(G[c])===JSON.stringify(L.def[c]))delete G[c]}}let X=A._zod.parent;if(X&&X!==H){h(X);let L=g.seen.get(X);if(L?.schema.$ref){if(G.$ref=L.schema.$ref,L.def)for(let S in G){if(S==="$ref"||S==="allOf")continue;if(S in L.def&&JSON.stringify(G[S])===JSON.stringify(L.def[S]))delete G[S]}}}g.override({zodSchema:A,jsonSchema:G,path:W.path??[]})};for(let A of[...g.seen.entries()].reverse())h(A[0]);let u={};if(g.target==="draft-2020-12")u.$schema="https://json-schema.org/draft/2020-12/schema";else if(g.target==="draft-07")u.$schema="http://json-schema.org/draft-07/schema#";else if(g.target==="draft-04")u.$schema="http://json-schema.org/draft-04/schema#";else if(g.target==="openapi-3.0");if(g.external?.uri){let A=g.external.registry.get(i)?.id;if(!A)throw Error("Schema is missing an `id` property");u.$id=g.external.uri(A)}Object.assign(u,v.def??v.schema);let P=g.metadataRegistry.get(i)?.id;if(P!==void 0&&u.id===P)delete u.id;let O=g.external?.defs??{};for(let A of g.seen.entries()){let W=A[1];if(W.def&&W.defId){if(W.def.id===W.defId)delete W.def.id;O[W.defId]=W.def}}if(g.external);else if(Object.keys(O).length>0)if(g.target==="draft-2020-12")u.$defs=O;else u.definitions=O;try{let A=JSON.parse(JSON.stringify(u));return Object.defineProperty(A,"~standard",{value:{...i["~standard"],jsonSchema:{input:J1(i,"input",g.processors),output:J1(i,"output",g.processors)}},enumerable:!1,writable:!1}),A}catch(A){throw Error("Error converting schema to JSON.")}}function Do(g,i){let v=i??{seen:new Set};if(v.seen.has(g))return!1;v.seen.add(g);let h=g._zod.def;if(h.type==="transform")return!0;if(h.type==="array")return Do(h.element,v);if(h.type==="set")return Do(h.valueType,v);if(h.type==="lazy")return Do(h.getter(),v);if(h.type==="promise"||h.type==="optional"||h.type==="nonoptional"||h.type==="nullable"||h.type==="readonly"||h.type==="default"||h.type==="prefault")return Do(h.innerType,v);if(h.type==="intersection")return Do(h.left,v)||Do(h.right,v);if(h.type==="record"||h.type==="map")return Do(h.keyType,v)||Do(h.valueType,v);if(h.type==="pipe"){if(g._zod.traits.has("$ZodCodec"))return!0;return Do(h.in,v)||Do(h.out,v)}if(h.type==="object"){for(let u in h.shape)if(Do(h.shape[u],v))return!0;return!1}if(h.type==="union"){for(let u of h.options)if(Do(u,v))return!0;return!1}if(h.type==="tuple"){for(let u of h.items)if(Do(u,v))return!0;if(h.rest&&Do(h.rest,v))return!0;return!1}return!1}var Zm=(g,i={})=>(v)=>{let h=nP({...v,processors:i});return wo(g,h),tP(h,g),vP(h,g)},J1=(g,i,v={})=>(h)=>{let{libraryOptions:u,target:P}=h??{},O=nP({...u??{},target:P,io:i,processors:v});return wo(g,O),tP(O,g),vP(O,g)};var sQ={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Sm=(g,i,v,h)=>{let u=v;u.type="string";let{minimum:P,maximum:O,format:A,patterns:W,contentEncoding:G}=g._zod.bag;if(typeof P==="number")u.minLength=P;if(typeof O==="number")u.maxLength=O;if(A){if(u.format=sQ[A]??A,u.format==="")delete u.format;if(A==="time")delete u.format}if(G)u.contentEncoding=G;if(W&&W.size>0){let m=[...W];if(m.length===1)u.pattern=m[0].source;else if(m.length>1)u.allOf=[...m.map((H)=>({...i.target==="draft-07"||i.target==="draft-04"||i.target==="openapi-3.0"?{type:"string"}:{},pattern:H.source}))]}};var Tm=(g,i,v,h)=>{v.not={}};var km=(g,i,v,h)=>{};var Dm=(g,i,v,h)=>{let u=g._zod.def,P=q1(u.entries);if(P.every((O)=>typeof O==="number"))v.type="number";if(P.every((O)=>typeof O==="string"))v.type="string";v.enum=P},am=(g,i,v,h)=>{let u=g._zod.def,P=[];for(let O of u.values)if(O===void 0){if(i.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(i.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(v.type=O===null?"null":typeof O,i.target==="draft-04"||i.target==="openapi-3.0")v.enum=[O];else v.const=O}else{if(P.every((O)=>typeof O==="number"))v.type="number";if(P.every((O)=>typeof O==="string"))v.type="string";if(P.every((O)=>typeof O==="boolean"))v.type="boolean";if(P.every((O)=>O===null))v.type="null";v.enum=P}};var cm=(g,i,v,h)=>{if(i.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var ym=(g,i,v,h)=>{if(i.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var Vm=(g,i,v,h)=>{let u=v,P=g._zod.def,{minimum:O,maximum:A}=g._zod.bag;if(typeof O==="number")u.minItems=O;if(typeof A==="number")u.maxItems=A;u.type="array",u.items=wo(P.element,i,{...h,path:[...h.path,"items"]})},_m=(g,i,v,h)=>{let u=v,P=g._zod.def;u.type="object",u.properties={};let O=P.shape;for(let G in O)u.properties[G]=wo(O[G],i,{...h,path:[...h.path,"properties",G]});let A=new Set(Object.keys(O)),W=new Set([...A].filter((G)=>{let m=P.shape[G]._zod;if(i.io==="input")return m.optin===void 0;else return m.optout===void 0}));if(W.size>0)u.required=Array.from(W);if(P.catchall?._zod.def.type==="never")u.additionalProperties=!1;else if(!P.catchall){if(i.io==="output")u.additionalProperties=!1}else if(P.catchall)u.additionalProperties=wo(P.catchall,i,{...h,path:[...h.path,"additionalProperties"]})},Em=(g,i,v,h)=>{let u=g._zod.def,P=u.inclusive===!1,O=u.options.map((A,W)=>wo(A,i,{...h,path:[...h.path,P?"oneOf":"anyOf",W]}));if(P)v.oneOf=O;else v.anyOf=O},fm=(g,i,v,h)=>{let u=g._zod.def,P=wo(u.left,i,{...h,path:[...h.path,"allOf",0]}),O=wo(u.right,i,{...h,path:[...h.path,"allOf",1]}),A=(G)=>("allOf"in G)&&Object.keys(G).length===1,W=[...A(P)?P.allOf:[P],...A(O)?O.allOf:[O]];v.allOf=W};var pm=(g,i,v,h)=>{let u=g._zod.def,P=wo(u.innerType,i,h),O=i.seen.get(g);if(i.target==="openapi-3.0")O.ref=u.innerType,v.nullable=!0;else v.anyOf=[P,{type:"null"}]},jm=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType},dm=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType,v.default=JSON.parse(JSON.stringify(u.defaultValue))},sm=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);if(P.ref=u.innerType,i.io==="input")v._prefault=JSON.parse(JSON.stringify(u.defaultValue))},r7=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType;let O;try{O=u.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}v.default=O},e7=(g,i,v,h)=>{let u=g._zod.def,P=u.in._zod.traits.has("$ZodTransform"),O=i.io==="input"?P?u.out:u.in:u.out;wo(O,i,h);let A=i.seen.get(g);A.ref=O},o7=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType,v.readOnly=!0};var hP=(g,i,v,h)=>{let u=g._zod.def;wo(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType};var uK=_("ZodISODateTime",(g,i)=>{z9.init(g,i),Ne.init(g,i)});function g7(g){return Um(uK,g)}var wK=_("ZodISODate",(g,i)=>{Q9.init(g,i),Ne.init(g,i)});function l7(g){return $m(wK,g)}var PK=_("ZodISOTime",(g,i)=>{K9.init(g,i),Ne.init(g,i)});function i7(g){return Lm(PK,g)}var OK=_("ZodISODuration",(g,i)=>{U9.init(g,i),Ne.init(g,i)});function n7(g){return Im(OK,g)}var HK=(g,i)=>{Pw.init(g,i),g.name="ZodError",Object.defineProperties(g,{format:{value:(v)=>PW(g,v)},flatten:{value:(v)=>wW(g,v)},addIssue:{value:(v)=>{g.issues.push(v),g.message=JSON.stringify(g.issues,_v,2)}},addIssues:{value:(v)=>{g.issues.push(...v),g.message=JSON.stringify(g.issues,_v,2)}},isEmpty:{get(){return g.issues.length===0}}})};var mg=_("ZodError",HK,{Parent:Error});var t7=Ow(mg),v7=Aw(mg),h7=G1(mg),b7=X1(mg),u7=qW(mg),w7=HW(mg),P7=MW(mg),O7=RW(mg),A7=WW(mg),q7=mW(mg),H7=GW(mg),M7=XW(mg);var R7=new WeakMap;function Yw(g,i,v){let h=Object.getPrototypeOf(g),u=R7.get(h);if(!u)u=new Set,R7.set(h,u);if(u.has(i))return;u.add(i);for(let P in v){let O=v[P];Object.defineProperty(h,P,{configurable:!0,enumerable:!1,get(){let A=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:A}),A},set(A){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:A})}})}}var oo=_("ZodType",(g,i)=>{return ye.init(g,i),Object.assign(g["~standard"],{jsonSchema:{input:J1(g,"input"),output:J1(g,"output")}}),g.toJSONSchema=Zm(g,{}),g.def=i,g.type=i.type,Object.defineProperty(g,"_def",{value:i}),g.parse=(v,h)=>t7(g,v,h,{callee:g.parse}),g.safeParse=(v,h)=>h7(g,v,h),g.parseAsync=async(v,h)=>v7(g,v,h,{callee:g.parseAsync}),g.safeParseAsync=async(v,h)=>b7(g,v,h),g.spa=g.safeParseAsync,g.encode=(v,h)=>u7(g,v,h),g.decode=(v,h)=>w7(g,v,h),g.encodeAsync=async(v,h)=>P7(g,v,h),g.decodeAsync=async(v,h)=>O7(g,v,h),g.safeEncode=(v,h)=>A7(g,v,h),g.safeDecode=(v,h)=>q7(g,v,h),g.safeEncodeAsync=async(v,h)=>H7(g,v,h),g.safeDecodeAsync=async(v,h)=>M7(g,v,h),Yw(g,"ZodType",{check(...v){let h=this.def;return this.clone(Ae.mergeDefs(h,{checks:[...h.checks??[],...v.map((u)=>typeof u==="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),{parent:!0})},with(...v){return this.check(...v)},clone(v,h){return ol(this,v,h)},brand(){return this},register(v,h){return v.add(this,h),this},refine(v,h){return this.check(hU(v,h))},superRefine(v,h){return this.check(bU(v,h))},overwrite(v){return this.check(Jn(v))},optional(){return G7(this)},exactOptional(){return pK(this)},nullable(){return X7(this)},nullish(){return G7(X7(this))},nonoptional(v){return oU(this,v)},array(){return Yi(this)},or(v){return aK([this,v])},and(v){return yK(this,v)},transform(v){return Y7(this,EK(v))},default(v){return sK(this,v)},prefault(v){return eU(this,v)},catch(v){return lU(this,v)},pipe(v){return Y7(this,v)},readonly(){return tU(this)},describe(v){let h=this.clone();return $t.add(h,{description:v}),h},meta(...v){if(v.length===0)return $t.get(this);let h=this.clone();return $t.add(h,v[0]),h},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(v){return v(this)}}),Object.defineProperty(g,"description",{get(){return $t.get(g)?.description},configurable:!0}),g}),J7=_("_ZodString",(g,i)=>{Rw.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(h,u,P)=>Sm(g,h,u,P);let v=g._zod.bag;g.format=v.format??null,g.minLength=v.minimum??null,g.maxLength=v.maximum??null,Yw(g,"_ZodString",{regex(...h){return this.check(f6(...h))},includes(...h){return this.check(d6(...h))},startsWith(...h){return this.check(s6(...h))},endsWith(...h){return this.check(rP(...h))},min(...h){return this.check(fv(...h))},max(...h){return this.check(Ww(...h))},length(...h){return this.check(mw(...h))},nonempty(...h){return this.check(fv(1,...h))},lowercase(h){return this.check(p6(h))},uppercase(h){return this.check(j6(h))},trim(){return this.check(oP())},normalize(...h){return this.check(eP(...h))},toLowerCase(){return this.check(gP())},toUpperCase(){return this.check(lP())},slugify(){return this.check(iP())}})}),RK=_("ZodString",(g,i)=>{Rw.init(g,i),J7.init(g,i),g.email=(v)=>g.check(vm(WK,v)),g.url=(v)=>g.check(Pm(mK,v)),g.jwt=(v)=>g.check(Km(BK,v)),g.emoji=(v)=>g.check(Om(GK,v)),g.guid=(v)=>g.check(E6(W7,v)),g.uuid=(v)=>g.check(hm(Xw,v)),g.uuidv4=(v)=>g.check(bm(Xw,v)),g.uuidv6=(v)=>g.check(um(Xw,v)),g.uuidv7=(v)=>g.check(wm(Xw,v)),g.nanoid=(v)=>g.check(Am(XK,v)),g.guid=(v)=>g.check(E6(W7,v)),g.cuid=(v)=>g.check(qm(YK,v)),g.cuid2=(v)=>g.check(Hm(JK,v)),g.ulid=(v)=>g.check(Mm(zK,v)),g.base64=(v)=>g.check(Jm(FK,v)),g.base64url=(v)=>g.check(zm(xK,v)),g.xid=(v)=>g.check(Rm(QK,v)),g.ksuid=(v)=>g.check(Wm(KK,v)),g.ipv4=(v)=>g.check(mm(UK,v)),g.ipv6=(v)=>g.check(Gm($K,v)),g.cidrv4=(v)=>g.check(Xm(LK,v)),g.cidrv6=(v)=>g.check(Ym(IK,v)),g.e164=(v)=>g.check(Qm(NK,v)),g.datetime=(v)=>g.check(g7(v)),g.date=(v)=>g.check(l7(v)),g.time=(v)=>g.check(i7(v)),g.duration=(v)=>g.check(n7(v))});function Ve(g){return tm(RK,g)}var Ne=_("ZodStringFormat",(g,i)=>{Ie.init(g,i),J7.init(g,i)}),WK=_("ZodEmail",(g,i)=>{H9.init(g,i),Ne.init(g,i)});var W7=_("ZodGUID",(g,i)=>{A9.init(g,i),Ne.init(g,i)});var Xw=_("ZodUUID",(g,i)=>{q9.init(g,i),Ne.init(g,i)});var mK=_("ZodURL",(g,i)=>{M9.init(g,i),Ne.init(g,i)});var GK=_("ZodEmoji",(g,i)=>{R9.init(g,i),Ne.init(g,i)});var XK=_("ZodNanoID",(g,i)=>{W9.init(g,i),Ne.init(g,i)});var YK=_("ZodCUID",(g,i)=>{m9.init(g,i),Ne.init(g,i)});var JK=_("ZodCUID2",(g,i)=>{G9.init(g,i),Ne.init(g,i)});var zK=_("ZodULID",(g,i)=>{X9.init(g,i),Ne.init(g,i)});var QK=_("ZodXID",(g,i)=>{Y9.init(g,i),Ne.init(g,i)});var KK=_("ZodKSUID",(g,i)=>{J9.init(g,i),Ne.init(g,i)});var UK=_("ZodIPv4",(g,i)=>{$9.init(g,i),Ne.init(g,i)});var $K=_("ZodIPv6",(g,i)=>{L9.init(g,i),Ne.init(g,i)});var LK=_("ZodCIDRv4",(g,i)=>{I9.init(g,i),Ne.init(g,i)});var IK=_("ZodCIDRv6",(g,i)=>{F9.init(g,i),Ne.init(g,i)});var FK=_("ZodBase64",(g,i)=>{N9.init(g,i),Ne.init(g,i)});var xK=_("ZodBase64URL",(g,i)=>{B9.init(g,i),Ne.init(g,i)});var NK=_("ZodE164",(g,i)=>{C9.init(g,i),Ne.init(g,i)});var BK=_("ZodJWT",(g,i)=>{Z9.init(g,i),Ne.init(g,i)});var CK=_("ZodUnknown",(g,i)=>{S9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>km(g,v,h,u)});function m7(){return Fm(CK)}var ZK=_("ZodNever",(g,i)=>{T9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>Tm(g,v,h,u)});function SK(g){return xm(ZK,g)}var TK=_("ZodArray",(g,i)=>{k9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>Vm(g,v,h,u),g.element=i.element,Yw(g,"ZodArray",{min(v,h){return this.check(fv(v,h))},nonempty(v){return this.check(fv(1,v))},max(v,h){return this.check(Ww(v,h))},length(v,h){return this.check(mw(v,h))},unwrap(){return this.element}})});function Yi(g,i){return Nm(TK,g,i)}var kK=_("ZodObject",(g,i)=>{c9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>_m(g,v,h,u),Ae.defineLazy(g,"shape",()=>{return i.shape}),Yw(g,"ZodObject",{keyof(){return z1(Object.keys(this._zod.def.shape))},catchall(v){return this.clone({...this._zod.def,catchall:v})},passthrough(){return this.clone({...this._zod.def,catchall:m7()})},loose(){return this.clone({...this._zod.def,catchall:m7()})},strict(){return this.clone({...this._zod.def,catchall:SK()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(v){return Ae.extend(this,v)},safeExtend(v){return Ae.safeExtend(this,v)},merge(v){return Ae.merge(this,v)},pick(v){return Ae.pick(this,v)},omit(v){return Ae.omit(this,v)},partial(...v){return Ae.partial(z7,this,v[0])},required(...v){return Ae.required(Q7,this,v[0])}})});function Lt(g,i){let v={type:"object",shape:g??{},...Ae.normalizeParams(i)};return new kK(v)}var DK=_("ZodUnion",(g,i)=>{y9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>Em(g,v,h,u),g.options=i.options});function aK(g,i){return new DK({type:"union",options:g,...Ae.normalizeParams(i)})}var cK=_("ZodIntersection",(g,i)=>{V9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>fm(g,v,h,u)});function yK(g,i){return new cK({type:"intersection",left:g,right:i})}var bP=_("ZodEnum",(g,i)=>{_9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(h,u,P)=>Dm(g,h,u,P),g.enum=i.entries,g.options=Object.values(i.entries);let v=new Set(Object.keys(i.entries));g.extract=(h,u)=>{let P={};for(let O of h)if(v.has(O))P[O]=i.entries[O];else throw Error(`Key ${O} not found in enum`);return new bP({...i,checks:[],...Ae.normalizeParams(u),entries:P})},g.exclude=(h,u)=>{let P={...i.entries};for(let O of h)if(v.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new bP({...i,checks:[],...Ae.normalizeParams(u),entries:P})}});function z1(g,i){let v=Array.isArray(g)?Object.fromEntries(g.map((h)=>[h,h])):g;return new bP({type:"enum",entries:v,...Ae.normalizeParams(i)})}var VK=_("ZodLiteral",(g,i)=>{E9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>am(g,v,h,u),g.values=new Set(i.values),Object.defineProperty(g,"value",{get(){if(i.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return i.values[0]}})});function uP(g,i){return new VK({type:"literal",values:Array.isArray(g)?g:[g],...Ae.normalizeParams(i)})}var _K=_("ZodTransform",(g,i)=>{f9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>ym(g,v,h,u),g._zod.parse=(v,h)=>{if(h.direction==="backward")throw new O1(g.constructor.name);v.addIssue=(P)=>{if(typeof P==="string")v.issues.push(Ae.issue(P,v.value,i));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=v.value),O.inst??(O.inst=g),v.issues.push(Ae.issue(O))}};let u=i.transform(v.value,v);if(u instanceof Promise)return u.then((P)=>{return v.value=P,v.fallback=!0,v});return v.value=u,v.fallback=!0,v}});function EK(g){return new _K({type:"transform",transform:g})}var z7=_("ZodOptional",(g,i)=>{_6.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>hP(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function G7(g){return new z7({type:"optional",innerType:g})}var fK=_("ZodExactOptional",(g,i)=>{p9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>hP(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function pK(g){return new fK({type:"optional",innerType:g})}var jK=_("ZodNullable",(g,i)=>{j9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>pm(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function X7(g){return new jK({type:"nullable",innerType:g})}var dK=_("ZodDefault",(g,i)=>{d9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>dm(g,v,h,u),g.unwrap=()=>g._zod.def.innerType,g.removeDefault=g.unwrap});function sK(g,i){return new dK({type:"default",innerType:g,get defaultValue(){return typeof i==="function"?i():Ae.shallowClone(i)}})}var rU=_("ZodPrefault",(g,i)=>{s9.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>sm(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function eU(g,i){return new rU({type:"prefault",innerType:g,get defaultValue(){return typeof i==="function"?i():Ae.shallowClone(i)}})}var Q7=_("ZodNonOptional",(g,i)=>{rm.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>jm(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function oU(g,i){return new Q7({type:"nonoptional",innerType:g,...Ae.normalizeParams(i)})}var gU=_("ZodCatch",(g,i)=>{em.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>r7(g,v,h,u),g.unwrap=()=>g._zod.def.innerType,g.removeCatch=g.unwrap});function lU(g,i){return new gU({type:"catch",innerType:g,catchValue:typeof i==="function"?i:()=>i})}var iU=_("ZodPipe",(g,i)=>{om.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>e7(g,v,h,u),g.in=i.in,g.out=i.out});function Y7(g,i){return new iU({type:"pipe",in:g,out:i})}var nU=_("ZodReadonly",(g,i)=>{gm.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>o7(g,v,h,u),g.unwrap=()=>g._zod.def.innerType});function tU(g){return new nU({type:"readonly",innerType:g})}var vU=_("ZodCustom",(g,i)=>{lm.init(g,i),oo.init(g,i),g._zod.processJSONSchema=(v,h,u)=>cm(g,v,h,u)});function hU(g,i={}){return Bm(vU,g,i)}function bU(g,i){return Cm(g,i)}var K7=Lt({type:z1(["character","chat"]),characterId:Ve().optional(),chatId:Ve().optional(),displayName:Ve().default("")}),U7=Lt({description:Ve().optional(),author:Ve().optional(),version:Ve().optional(),tags:Yi(Ve()).optional()}),uU=Lt({name:Ve().min(1).max(200),code:Ve(),type:z1(["trigger","library"]),triggers:Yi(Ve()).optional(),bindings:Yi(K7).optional(),folder:Ve().optional(),metadata:U7.optional()}),$7=Lt({format:uP("lumiscript-pack-v1"),exportedAt:Ve(),scripts:Yi(uU).min(1).max(100)}),wU=Lt({name:Ve().min(1).max(200),file:Ve().min(1),type:z1(["trigger","library"]),triggers:Yi(Ve()).optional(),bindings:Yi(K7).optional(),folder:Ve().optional(),metadata:U7.optional()}),sVe=Lt({format:uP("lumiscript-manifest-v1"),sourcePack:Ve().optional(),sourceFormat:Ve().optional(),exportedAt:Ve().optional(),convertedAt:Ve().optional(),scripts:Yi(wU).min(1).max(100)});var L7=1048576;async function I7(g){let i=new Uint8Array(await g.arrayBuffer()),v;try{v=jR(i)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let h=v["pack.json"];if(!h)throw Error("Invalid script pack: missing pack.json");if(h.byteLength>L7)throw Error(`Pack exceeds the ${L7/1024/1024} MB decompressed size limit`);let u=x6(h),P;try{P=JSON.parse(u)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return $7.parse(P).scripts}var ne=Pr(re(),1);function PU(g){let v="";for(let h=0;h<g.length;h+=32768)v+=String.fromCharCode(...g.subarray(h,h+32768));return btoa(v)}function OU(g){let i=new Map;for(let u of g){let P=u.folder??"";if(!i.has(P))i.set(P,[]);i.get(P).push(u)}let v=new Map;if(i.has(""))v.set("",i.get(""));let h=[...i.keys()].filter((u)=>u!=="").sort();for(let u of h)v.set(u,i.get(u));return v}var Jw=({scripts:g,selectedId:i,execInfo:v,onSelect:h,onEdit:u,sendToBackend:P})=>{let[O,A]=Q1.useState("trigger"),[W,G]=Q1.useState(new Set),m=Q1.useRef(null),H=g.filter((p)=>p.type===O),X=OU(H),L=X.size>1||X.size===1&&!X.has(""),S=(p)=>{G((d)=>{let lr=new Set(d);if(lr.has(p))lr.delete(p);else lr.add(p);return lr})},C=()=>{let p=O==="library"?"Library name:":"Script name:",d=window.prompt(p);if(!d?.trim())return;P({type:"create_script",name:d.trim(),scriptType:O})},c=(p)=>{if(H.length===0)return;if(p.shiftKey){let lr=N6(H);P({type:"save_pack_to_disk",bytesB64:PU(lr),scriptType:O});return}let d=window.prompt("Pack name:","my-scripts");if(!d?.trim())return;dR(H,d.trim())},rr=()=>{m.current?.click()},wr=async(p)=>{let d=p.target.files?.[0];if(!d)return;p.target.value="";try{let lr=await I7(d),N=(x)=>x==="library"?"[L]":"[T]",y=lr.map((x)=>`  ${N(x.type)} ${x.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},ir=(p)=>{let d=v[p.id];return ne.jsxDEV(BR,{script:p,selected:p.id===i,dot:d?.dot??"idle",duration:d?.duration,onSelect:()=>h(p.id),onEdit:()=>u(p.id),sendToBackend:P},p.id,!1,void 0,this)};return ne.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[ne.jsxDEV("div",{className:"ls-list-header",children:[ne.jsxDEV("div",{className:"ls-list-type-tabs",children:[ne.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>A("trigger"),title:"Scripts",children:ne.jsxDEV(Wo,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),ne.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>A("library"),title:"Libraries",children:ne.jsxDEV(Xt,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ne.jsxDEV("div",{className:"ls-list-actions",children:[ne.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:ne.jsxDEV(v1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),ne.jsxDEV("button",{className:"ls-icon-btn",onClick:c,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:H.length===0,children:ne.jsxDEV(Yt,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),ne.jsxDEV("button",{className:"ls-icon-btn",onClick:C,title:"New script",children:ne.jsxDEV(r1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ne.jsxDEV("input",{ref:m,type:"file",accept:".zip",style:{display:"none"},onChange:wr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ne.jsxDEV("div",{className:"ls-list-body",children:H.length===0?ne.jsxDEV("div",{className:"ls-list-empty",children:[ne.jsxDEV(Bl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),ne.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),ne.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...X.entries()].map(([p,d])=>{let lr=W.has(p);return p===""?ne.jsxDEV("div",{children:d.map(ir)},"__unfiled",!1,void 0,this):ne.jsxDEV("div",{className:"ls-folder-group",children:[ne.jsxDEV("button",{className:"ls-folder-header",onClick:()=>S(p),children:[lr?ne.jsxDEV(qi,{size:11},void 0,!1,void 0,this):ne.jsxDEV(mo,{size:11},void 0,!1,void 0,this),ne.jsxDEV(Jt,{size:11},void 0,!1,void 0,this),ne.jsxDEV("span",{className:"ls-folder-name",children:p},void 0,!1,void 0,this),ne.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(N)=>{N.stopPropagation();let y=window.prompt("Rename folder:",p);if(y===null||y.trim()===""||y.trim()===p)return;for(let f of d)P({type:"update_script",id:f.id,patch:{folder:y.trim()}})},children:ne.jsxDEV(sg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),ne.jsxDEV("span",{className:"ls-folder-count",children:d.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&d.map(ir)]},`folder-${p}`,!0,void 0,this)}):H.map(ir)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var I1=Pr(ie(),1),H3=Pr(Sv(),1);var Ue=Pr(ie(),1);function F7(g,i){(i==null||i>g.length)&&(i=g.length);for(var v=0,h=Array(i);v<i;v++)h[v]=g[v];return h}function AU(g){if(Array.isArray(g))return g}function qU(g,i,v){return(i=mU(i))in g?Object.defineProperty(g,i,{value:v,enumerable:!0,configurable:!0,writable:!0}):g[i]=v,g}function HU(g,i){var v=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(v!=null){var h,u,P,O,A=[],W=!0,G=!1;try{if(P=(v=v.call(g)).next,i===0);else for(;!(W=(h=P.call(v)).done)&&(A.push(h.value),A.length!==i);W=!0);}catch(m){G=!0,u=m}finally{try{if(!W&&v.return!=null&&(O=v.return(),Object(O)!==O))return}finally{if(G)throw u}}return A}}function MU(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x7(g,i){var v=Object.keys(g);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(g);i&&(h=h.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable})),v.push.apply(v,h)}return v}function wP(g){for(var i=1;i<arguments.length;i++){var v=arguments[i]!=null?arguments[i]:{};i%2?x7(Object(v),!0).forEach(function(h){qU(g,h,v[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(v)):x7(Object(v)).forEach(function(h){Object.defineProperty(g,h,Object.getOwnPropertyDescriptor(v,h))})}return g}function N7(g,i){if(g==null)return{};var v,h,u=RU(g,i);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(g);for(h=0;h<P.length;h++)v=P[h],i.indexOf(v)===-1&&{}.propertyIsEnumerable.call(g,v)&&(u[v]=g[v])}return u}function RU(g,i){if(g==null)return{};var v={};for(var h in g)if({}.hasOwnProperty.call(g,h)){if(i.indexOf(h)!==-1)continue;v[h]=g[h]}return v}function B7(g,i){return AU(g)||HU(g,i)||GU(g,i)||MU()}function WU(g,i){if(typeof g!="object"||!g)return g;var v=g[Symbol.toPrimitive];if(v!==void 0){var h=v.call(g,i);if(typeof h!="object")return h;throw TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(g)}function mU(g){var i=WU(g,"string");return typeof i=="symbol"?i:i+""}function GU(g,i){if(g){if(typeof g=="string")return F7(g,i);var v={}.toString.call(g).slice(8,-1);return v==="Object"&&g.constructor&&(v=g.constructor.name),v==="Map"||v==="Set"?Array.from(g):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?F7(g,i):void 0}}function XU(g,i,v){if(i in g)Object.defineProperty(g,i,{value:v,enumerable:!0,configurable:!0,writable:!0});else g[i]=v;return g}function C7(g,i){var v=Object.keys(g);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(g);if(i)h=h.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable});v.push.apply(v,h)}return v}function Z7(g){for(var i=1;i<arguments.length;i++){var v=arguments[i]!=null?arguments[i]:{};if(i%2)C7(Object(v),!0).forEach(function(h){XU(g,h,v[h])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(g,Object.getOwnPropertyDescriptors(v));else C7(Object(v)).forEach(function(h){Object.defineProperty(g,h,Object.getOwnPropertyDescriptor(v,h))})}return g}function YU(){for(var g=arguments.length,i=Array(g),v=0;v<g;v++)i[v]=arguments[v];return function(h){return i.reduceRight(function(u,P){return P(u)},h)}}function K1(g){return function i(){var v=this;for(var h=arguments.length,u=Array(h),P=0;P<h;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,A=Array(O),W=0;W<O;W++)A[W]=arguments[W];return i.apply(v,[].concat(u,A))}}}function Qw(g){return{}.toString.call(g).includes("Object")}function JU(g){return!Object.keys(g).length}function U1(g){return typeof g==="function"}function zU(g,i){return Object.prototype.hasOwnProperty.call(g,i)}function QU(g,i){if(!Qw(i))zn("changeType");if(Object.keys(i).some(function(v){return!zU(g,v)}))zn("changeField");return i}function KU(g){if(!U1(g))zn("selectorType")}function UU(g){if(!(U1(g)||Qw(g)))zn("handlerType");if(Qw(g)&&Object.values(g).some(function(i){return!U1(i)}))zn("handlersType")}function $U(g){if(!g)zn("initialIsRequired");if(!Qw(g))zn("initialType");if(JU(g))zn("initialContent")}function LU(g,i){throw Error(g[i]||g.default)}var IU={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},zn=K1(LU)(IU),zw={changes:QU,selector:KU,handler:UU,initial:$U};function FU(g){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};zw.initial(g),zw.handler(i);var v={current:g},h=K1(BU)(v,i),u=K1(NU)(v),P=K1(zw.changes)(g),O=K1(xU)(v);function A(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return zw.selector(G),G(v.current)}function W(G){YU(h,u,P,O)(G)}return[A,W]}function xU(g,i){return U1(i)?i(g.current):i}function NU(g,i){return g.current=Z7(Z7({},g.current),i),i}function BU(g,i,v){return U1(i)?i(g.current):Object.keys(v).forEach(function(h){var u;return(u=i[h])===null||u===void 0?void 0:u.call(i,g.current[h])}),v}var CU={create:FU},S7=CU;var T7={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function k7(g){return function i(){var v=this;for(var h=arguments.length,u=Array(h),P=0;P<h;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,A=Array(O),W=0;W<O;W++)A[W]=arguments[W];return i.apply(v,[].concat(u,A))}}}function D7(g){return{}.toString.call(g).includes("Object")}function ZU(g){if(!g)a7("configIsRequired");if(!D7(g))a7("configType");if(g.urls)return SU(),{paths:{vs:g.urls.monacoBase}};return g}function SU(){console.warn(c7.deprecation)}function TU(g,i){throw Error(g[i]||g.default)}var c7={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},a7=k7(TU)(c7),y7={config:ZU};var V7=function(){for(var i=arguments.length,v=Array(i),h=0;h<i;h++)v[h]=arguments[h];return function(u){return v.reduceRight(function(P,O){return O(P)},u)}};function PP(g,i){return Object.keys(i).forEach(function(v){if(i[v]instanceof Object){if(g[v])Object.assign(i[v],PP(g[v],i[v]))}}),wP(wP({},g),i)}var kU={type:"cancelation",msg:"operation is manually canceled"};function Kw(g){var i=!1,v=new Promise(function(h,u){g.then(function(P){return i?u(kU):h(P)}),g.catch(u)});return v.cancel=function(){return i=!0},v}var DU=["monaco"],aU=S7.create({config:T7,isInitialized:!1,resolve:null,reject:null,monaco:null}),_7=B7(aU,2),$1=_7[0],Uw=_7[1];function cU(g){var i=y7.config(g),v=i.monaco,h=N7(i,DU);Uw(function(u){return{config:PP(u.config,h),monaco:v}})}function yU(){var g=$1(function(i){var{monaco:v,isInitialized:h,resolve:u}=i;return{monaco:v,isInitialized:h,resolve:u}});if(!g.isInitialized){if(Uw({isInitialized:!0}),g.monaco)return g.resolve(g.monaco),Kw(OP);if(window.monaco&&window.monaco.editor)return E7(window.monaco),g.resolve(window.monaco),Kw(OP);V7(VU,EU)(fU)}return Kw(OP)}function VU(g){return document.body.appendChild(g)}function _U(g){var i=document.createElement("script");return g&&(i.src=g),i}function EU(g){var i=$1(function(h){var{config:u,reject:P}=h;return{config:u,reject:P}}),v=_U("".concat(i.config.paths.vs,"/loader.js"));return v.onload=function(){return g()},v.onerror=i.reject,v}function fU(){var g=$1(function(v){var{config:h,resolve:u,reject:P}=v;return{config:h,resolve:u,reject:P}}),i=window.require;i.config(g.config),i(["vs/editor/editor.main"],function(v){var h=v.m||v;E7(h),g.resolve(h)},function(v){g.reject(v)})}function E7(g){if(!$1().monaco)Uw({monaco:g})}function pU(){return $1(function(g){var i=g.monaco;return i})}var OP=new Promise(function(g,i){return Uw({resolve:g,reject:i})}),It={config:cU,init:yU,__getMonacoInstance:pU};var f7=Pr(ie(),1),Po=Pr(ie(),1);var p7=Pr(ie(),1),Lw=Pr(ie(),1),j7=Pr(ie(),1),s7=Pr(ie(),1),Iw=Pr(ie(),1),u$=Pr(ie(),1);var o3=Pr(ie(),1),ke=Pr(ie(),1);var Fw=Pr(ie(),1),jU={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},AP=jU,dU={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},sU=dU;function r$({children:g}){return j7.default.createElement("div",{style:sU.container},g)}var e$=r$,o$=e$;function g$({width:g,height:i,isEditorReady:v,loading:h,_ref:u,className:P,wrapperProps:O}){return Lw.default.createElement("section",{style:{...AP.wrapper,width:g,height:i},...O},!v&&Lw.default.createElement(o$,null,h),Lw.default.createElement("div",{ref:u,style:{...AP.fullWidth,...!v&&AP.hide},className:P}))}var l$=g$,d7=p7.memo(l$);function i$(g){s7.useEffect(g,[])}var r3=i$;function n$(g,i,v=!0){let h=Iw.useRef(!0);Iw.useEffect(h.current||!v?()=>{h.current=!1}:g,i)}var Gg=n$;function L1(){}function pv(g,i,v,h){return t$(g,h)||v$(g,i,v,h)}function t$(g,i){return g.editor.getModel(e3(g,i))}function v$(g,i,v,h){return g.editor.createModel(i,v,h?e3(g,h):void 0)}function e3(g,i){return g.Uri.parse(i)}function h$({original:g,modified:i,language:v,originalLanguage:h,modifiedLanguage:u,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:A=!1,keepCurrentModifiedModel:W=!1,theme:G="light",loading:m="Loading...",options:H={},height:X="100%",width:L="100%",className:S,wrapperProps:C={},beforeMount:c=L1,onMount:rr=L1}){let[wr,ir]=Po.useState(!1),[p,d]=Po.useState(!0),lr=Po.useRef(null),N=Po.useRef(null),y=Po.useRef(null),f=Po.useRef(rr),x=Po.useRef(c),Wr=Po.useRef(!1);r3(()=>{let k=It.init();return k.then((er)=>(N.current=er)&&d(!1)).catch((er)=>er?.type!=="cancelation"&&console.error("Monaco initialization: error:",er)),()=>lr.current?Zr():k.cancel()}),Gg(()=>{if(lr.current&&N.current){let k=lr.current.getOriginalEditor(),er=pv(N.current,g||"",h||v||"text",P||"");er!==k.getModel()&&k.setModel(er)}},[P],wr),Gg(()=>{if(lr.current&&N.current){let k=lr.current.getModifiedEditor(),er=pv(N.current,i||"",u||v||"text",O||"");er!==k.getModel()&&k.setModel(er)}},[O],wr),Gg(()=>{let k=lr.current.getModifiedEditor();k.getOption(N.current.editor.EditorOption.readOnly)?k.setValue(i||""):i!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:i||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[i],wr),Gg(()=>{lr.current?.getModel()?.original.setValue(g||"")},[g],wr),Gg(()=>{let{original:k,modified:er}=lr.current.getModel();N.current.editor.setModelLanguage(k,h||v||"text"),N.current.editor.setModelLanguage(er,u||v||"text")},[v,h,u],wr),Gg(()=>{N.current?.editor.setTheme(G)},[G],wr),Gg(()=>{lr.current?.updateOptions(H)},[H],wr);let Hr=Po.useCallback(()=>{if(!N.current)return;x.current(N.current);let k=pv(N.current,g||"",h||v||"text",P||""),er=pv(N.current,i||"",u||v||"text",O||"");lr.current?.setModel({original:k,modified:er})},[v,i,u,g,h,P,O]),mr=Po.useCallback(()=>{!Wr.current&&y.current&&(lr.current=N.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...H}),Hr(),N.current?.editor.setTheme(G),ir(!0),Wr.current=!0)},[H,G,Hr]);Po.useEffect(()=>{wr&&f.current(lr.current,N.current)},[wr]),Po.useEffect(()=>{!p&&!wr&&mr()},[p,wr,mr]);function Zr(){let k=lr.current?.getModel();A||k?.original?.dispose(),W||k?.modified?.dispose(),lr.current?.dispose()}return Po.default.createElement(d7,{width:L,height:X,isEditorReady:wr,loading:m,_ref:y,className:S,wrapperProps:C})}var b$=h$,x_e=f7.memo(b$);function w$(g){let i=Fw.useRef();return Fw.useEffect(()=>{i.current=g},[g]),i.current}var P$=w$,$w=new Map;function O$({defaultValue:g,defaultLanguage:i,defaultPath:v,value:h,language:u,path:P,theme:O="light",line:A,loading:W="Loading...",options:G={},overrideServices:m={},saveViewState:H=!0,keepCurrentModel:X=!1,width:L="100%",height:S="100%",className:C,wrapperProps:c={},beforeMount:rr=L1,onMount:wr=L1,onChange:ir,onValidate:p=L1}){let[d,lr]=ke.useState(!1),[N,y]=ke.useState(!0),f=ke.useRef(null),x=ke.useRef(null),Wr=ke.useRef(null),Hr=ke.useRef(wr),mr=ke.useRef(rr),Zr=ke.useRef(),k=ke.useRef(h),er=P$(P),nr=ke.useRef(!1),Kr=ke.useRef(!1);r3(()=>{let T=It.init();return T.then((vr)=>(f.current=vr)&&y(!1)).catch((vr)=>vr?.type!=="cancelation"&&console.error("Monaco initialization: error:",vr)),()=>x.current?a():T.cancel()}),Gg(()=>{let T=pv(f.current,g||h||"",i||u||"",P||v||"");T!==x.current?.getModel()&&(H&&$w.set(er,x.current?.saveViewState()),x.current?.setModel(T),H&&x.current?.restoreViewState($w.get(P)))},[P],d),Gg(()=>{x.current?.updateOptions(G)},[G],d),Gg(()=>{!x.current||h===void 0||(x.current.getOption(f.current.editor.EditorOption.readOnly)?x.current.setValue(h):h!==x.current.getValue()&&(Kr.current=!0,x.current.executeEdits("",[{range:x.current.getModel().getFullModelRange(),text:h,forceMoveMarkers:!0}]),x.current.pushUndoStop(),Kr.current=!1))},[h],d),Gg(()=>{let T=x.current?.getModel();T&&u&&f.current?.editor.setModelLanguage(T,u)},[u],d),Gg(()=>{A!==void 0&&x.current?.revealLine(A)},[A],d),Gg(()=>{f.current?.editor.setTheme(O)},[O],d);let Xr=ke.useCallback(()=>{if(!(!Wr.current||!f.current)&&!nr.current){mr.current(f.current);let T=P||v,vr=pv(f.current,h||g||"",i||u||"",T||"");x.current=f.current?.editor.create(Wr.current,{model:vr,automaticLayout:!0,...G},m),H&&x.current.restoreViewState($w.get(T)),f.current.editor.setTheme(O),A!==void 0&&x.current.revealLine(A),lr(!0),nr.current=!0}},[g,i,v,h,u,P,G,m,H,O,A]);ke.useEffect(()=>{d&&Hr.current(x.current,f.current)},[d]),ke.useEffect(()=>{!N&&!d&&Xr()},[N,d,Xr]),k.current=h,ke.useEffect(()=>{d&&ir&&(Zr.current?.dispose(),Zr.current=x.current?.onDidChangeModelContent((T)=>{Kr.current||ir(x.current.getValue(),T)}))},[d,ir]),ke.useEffect(()=>{if(d){let T=f.current.editor.onDidChangeMarkers((vr)=>{let Mr=x.current.getModel()?.uri;if(Mr&&vr.find((V)=>V.path===Mr.path)){let V=f.current.editor.getModelMarkers({resource:Mr});p?.(V)}});return()=>{T?.dispose()}}return()=>{}},[d,p]);function a(){Zr.current?.dispose(),X?H&&$w.set(P,x.current.saveViewState()):x.current.getModel()?.dispose(),x.current.dispose()}return ke.default.createElement(d7,{width:L,height:S,isEditorReady:d,loading:W,_ref:Wr,className:C,wrapperProps:c})}var A$=O$,q$=o3.memo(A$),g3=q$;var jv=Pr(ie(),1);var Oo=Pr(re(),1),H$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},l3=({entries:g,isRunning:i,onClear:v})=>{let[h,u]=jv.useState(!1),P=jv.useRef(null);jv.useEffect(()=>{if(!h&&P.current)P.current.scrollTop=P.current.scrollHeight},[g,h]);let O=()=>{let A=g.filter((W)=>W.type!=="separator").map((W)=>`[${W.timestamp}] ${W.type.toUpperCase()}: ${W.message}`).join(`
`);navigator.clipboard.writeText(A).catch(()=>{})};return Oo.jsxDEV("div",{className:`ls-console${h?" ls-collapsed":""}`,children:[Oo.jsxDEV("div",{className:"ls-console-header",onClick:()=>u((A)=>!A),children:[Oo.jsxDEV(Zl,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Oo.jsxDEV("span",{className:"ls-console-title",children:["Console",i?" — running…":g.length>0?` (${g.length})`:""]},void 0,!0,void 0,this),Oo.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),O()},title:"Copy output",disabled:g.length===0,children:Oo.jsxDEV(jg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Oo.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),v()},title:"Clear console",disabled:g.length===0,children:Oo.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),h?Oo.jsxDEV(mo,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Oo.jsxDEV(Mg,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h&&Oo.jsxDEV("div",{className:"ls-console-output",ref:P,children:g.length===0?Oo.jsxDEV("div",{className:"ls-console-empty",children:i?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):g.map((A,W)=>A.type==="separator"?Oo.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},W,!1,void 0,this):Oo.jsxDEV("div",{className:`ls-entry ${H$[A.type]??"ls-log"}`,children:[Oo.jsxDEV("span",{className:"ls-entry-time",children:A.timestamp},void 0,!1,void 0,this),Oo.jsxDEV("span",{className:"ls-entry-type",children:A.type.toUpperCase()},void 0,!1,void 0,this),Oo.jsxDEV("span",{className:"ls-entry-msg",children:A.message},void 0,!1,void 0,this)]},W,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var ao=Pr(re(),1),i3=({bindings:g,activeContext:i,onAdd:v,onRemove:h})=>{let u=()=>{let{characterId:O,characterName:A}=i;if(!O)return;if(g.some((W)=>W.type==="character"&&W.characterId===O))return;v({type:"character",characterId:O,displayName:A??O})},P=()=>{let{chatId:O,characterName:A}=i;if(!O)return;if(g.some((G)=>G.type==="chat"&&G.chatId===O))return;let W=A?`${A} — ${O.slice(0,8)}`:O.slice(0,8);v({type:"chat",chatId:O,displayName:W})};return ao.jsxDEV("div",{className:"ls-bindings",children:ao.jsxDEV("div",{className:"ls-bindings-row",children:[ao.jsxDEV(Eh,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),g.length===0?ao.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):g.map((O,A)=>ao.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?ao.jsxDEV(cv,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):ao.jsxDEV(Dv,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),ao.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),ao.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>h(A),title:"Remove binding",children:ao.jsxDEV(To,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},A,!0,void 0,this)),ao.jsxDEV("button",{className:"ls-bindings-add",onClick:u,disabled:!i.characterId,title:i.characterId?"Bind to current character":"Open a chat first",children:[ao.jsxDEV(cv,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),ao.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!i.chatId,title:i.chatId?"Bind to current chat":"Open a chat first",children:[ao.jsxDEV(Dv,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var n3=Pr(ie(),1);var so=Pr(re(),1),t3=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"},{name:"REGEX_SCRIPT_CHANGED",description:"A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+."},{name:"REGEX_SCRIPT_DELETED",description:"A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+."}]}],y_e=t3.flatMap((g)=>g.events.map((i)=>i.name)),v3=({scriptId:g,triggers:i,sendToBackend:v})=>{let[h,u]=n3.useState(!0),P=new Set(i),O=(A)=>{let W=P.has(A)?i.filter((G)=>G!==A):[...i,A];v({type:"update_script",id:g,patch:{triggers:W}})};return so.jsxDEV("div",{className:`ls-triggers${h?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>u((A)=>!A),children:[so.jsxDEV(Mi,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:h?so.jsxDEV(mo,{size:12},void 0,!1,void 0,this):so.jsxDEV(Mg,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h&&so.jsxDEV("div",{className:"ls-triggers-body",children:t3.map((A)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:A.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:A.events.map((W)=>so.jsxDEV("button",{className:`ls-trigger-chip${P.has(W.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(W.name),title:W.description,children:W.name},W.name,!1,void 0,this))},void 0,!1,void 0,this)]},A.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var h3=`
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
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
  /** Call event.stopPropagation() after dispatching. Default: false. */
  stopPropagation?: boolean;
}

/** Options for DOMHandle.on(event, handler, options?). */
interface DOMListenOptions {
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
}

/**
 * Predicate-based preventDefault — fires only when event data matches
 * specific filters. Use when you want browser defaults suppressed on a
 * specific key / button / modifier combo while letting others through.
 *
 * All filters are AND'd. Empty {} is "always match" (equivalent to true).
 *
 * Examples:
 *   { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } }  // plain Enter only
 *   { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } }  // Ctrl+S
 *   { onButtons: [2] }                                            // right-click only
 *
 * Available since LumiScript v0.27.5.
 */
interface ConditionalPreventDefault {
  /** KeyboardEvent.key value(s) — OR-matched. Non-keyboard events skipped when set. */
  onKeys?: string[];
  /** KeyboardEvent.code value(s) — layout-independent. Non-keyboard events skipped when set. */
  onCodes?: string[];
  /** MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. */
  onButtons?: number[];
  /** Modifier constraint. ALL require must be held; NONE of exclude may be. */
  whenModifiers?: {
    require?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
    exclude?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
  };
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
  on(event: string, handler: (data: DOMEventData) => void, options?: DOMListenOptions): () => void;
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
`;var P3=Pr(ie(),1);function b3(g){return g.split("`").map((v,h)=>{if(h%2===1)return v;return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function M$(g){return g.split("`").map((h,u)=>{if(u%2===1)return h;return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Qn(g,i){let v=`| ${g.join(" | ")} |`,h=`| ${g.map(()=>"---").join(" | ")} |`,u=i.map((P)=>`| ${P.map(M$).join(" | ")} |`);return[v,h,...u].join(`
`)}function R$(g){return g.optional&&!g.field.endsWith("?")?`${g.field}?`:g.field}function W$(g){if(g==="silent")return"*silent*";if(g==="boolean")return'`"true" / "false"`';return"`string`"}function m$(g){return g.aliases==="—"?"—":`\`${g.aliases}\``}function G$(g){let i=g.perms.length===0&&!g.note?"*none*":g.perms.map((v)=>`\`${v}\``).join(", ");return g.note?`${i}${g.perms.length?" ":""}${g.note}`:i}function X$(){return`## Lumiverse Events

${Qn(["Event","Group","Payload shape"],qP.map((i)=>[`\`${i.name}\``,i.group,`\`${i.payload}\``]))}`}function Y$(){return`## Permission Matrix

${HP.map((i)=>{let v=Qn(["Method","Required permissions"],i.rows.map((h)=>[`\`${h.method}\``,G$(h)]));return`### ${i.group}

${v}`}).join(`

`)}`}function J$(){let g=Qn(["Event","Payload fields","Emitted by"],MP.map((v)=>[`\`${v.name}\``,`\`${v.payload}\``,v.emittedBy])),i="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${g}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function z$(){let g=RP.map((v)=>{let h=Qn(["Macro","Aliases","Returns","Description"],v.rows.map((P)=>[`\`${P.macro}\``,m$(P),W$(P.returns),P.desc])),u=[`### ${v.label}`];if(v.description)u.push(`*${v.description}*`);return u.push(h),u.join(`

`)}),i='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${g.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function Q$(){return`## Key Types

${WP.map((g)=>u3(g)).join(`

`)}`}function u3(g,i="###"){let v=b3(g.name),h=g.note?`*${b3(g.note)}*

`:"",u=Qn(["Field","Type","Description"],g.fields.map((P)=>[`\`${R$(P)}\``,`\`${P.type}\``,P.desc]));return`${i} ${v}

${h}${u}`}function K$(){return`## API Functions

${mP.map((i)=>{let v=Qn(["Method","Arguments","Description"],i.rows.map((h)=>[`\`${h.name}\``,h.args,h.desc]));return`### ${i.group}

${v}`}).join(`

`)}`}function U$(){let i=Qn(["Method","Arguments","Description"],GP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),v=Qn(["Method","Arguments","Description"],XP.map((u)=>[`\`${u.name}\``,u.args,u.desc])),h=YP.map((u)=>u3(u,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",i,"","### ls:council-prompt","",v,"","### Built-in types","",h].join(`
`)}function $$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function L$(){let i=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,v=[X$(),Y$(),J$(),z$(),Q$(),K$(),U$(),$$()];return`${i}

---

${v.join(`

---

`)}
`}function w3(){let g=L$(),v=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,h=new Blob([g],{type:"text/markdown;charset=utf-8"}),u=URL.createObjectURL(h),P=document.createElement("a");P.href=u,P.download=v,P.click(),URL.revokeObjectURL(u)}var Q=Pr(re(),1),Kn=({icon:g,title:i,defaultOpen:v=!1,children:h})=>{let[u,P]=P3.useState(v);return Q.jsxDEV("div",{className:"ls-ref-section",children:[Q.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[Q.jsxDEV("span",{className:"ls-ref-section-title",children:[g,i]},void 0,!0,void 0,this),u?Q.jsxDEV(mo,{size:12},void 0,!1,void 0,this):Q.jsxDEV(qi,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u&&Q.jsxDEV("div",{className:"ls-ref-section-body",children:h},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qe=({children:g})=>Q.jsxDEV("code",{className:"ls-ref-code",children:g},void 0,!1,void 0,this),I$=({children:g})=>Q.jsxDEV("span",{className:"ls-ref-perm",children:g},void 0,!1,void 0,this),F$=()=>Q.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),x$=()=>Q.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),dv=({label:g,cols:i})=>Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:i,className:"ls-ref-group-header",children:g},void 0,!1,void 0,this)},void 0,!1,void 0,this),qP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Settings",name:"REGEX_SCRIPT_CHANGED",payload:"{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission"},{group:"Settings",name:"REGEX_SCRIPT_DELETED",payload:"{ id }  // v0.27.0+ — requires regex_scripts permission"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],N$=()=>{let g="";return Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:qP.map((i)=>{let v=i.group!==g?i.group:"";return g=i.group,Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:v},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},HP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.* (CRUD + getCapturedActive)",perms:["world_books"]},{method:"api.worldInfo.registerInterceptor / listInterceptors",perms:["generation"]},{method:"api.personas.*",perms:["personas"]},{method:"api.regexScripts.*",perms:["regex_scripts"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],B$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:HP.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(dv,{label:g.group,cols:2},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:[i.perms.length===0&&!i.note?Q.jsxDEV(F$,{},void 0,!1,void 0,this):null,i.perms.map((v)=>Q.jsxDEV(I$,{children:v},v,!1,void 0,this)),i.note?Q.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:i.perms.length?4:0},children:i.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},i.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],C$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:MP.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],Z$=({type:g})=>{if(g==="silent")return Q.jsxDEV(x$,{},void 0,!1,void 0,this);if(g==="boolean")return Q.jsxDEV(qe,{children:'"true" / "false"'},void 0,!1,void 0,this);return Q.jsxDEV(qe,{children:"string"},void 0,!1,void 0,this)},S$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:RP.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(dv,{label:g.description?Q.jsxDEV(Q.Fragment,{children:[g.label," — ",Q.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:g.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):g.label,cols:4},`hdr-${g.label}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:i.aliases==="—"?Q.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):Q.jsxDEV(qe,{children:i.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:Q.jsxDEV(Z$,{type:i.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."},{field:"triggerGeneration?",type:"boolean",optional:!0,desc:"When true, the host triggers a normal LLM continuation after the message is appended (full preset / persona / world info / regex / character card / streaming pipeline — same as the user pressing Enter on an empty input bar). Use for click-to-respond UIs where the script wants the LLM to immediately reply to its appended message. Requires Lumiverse host >= 0.9.x with triggerGeneration support (lumiverse-spindle-types >= 0.4.66); silently ignored on older hosts. v0.27.4+."},{field:"generation?",type:"ChatGenerationOptions",optional:!0,desc:"Per-call overrides for the triggered generation (connection / persona / preset / parameters / target character / council retention). Only consulted when triggerGeneration is true; silently ignored otherwise. Each field is optional and falls through to the active chat's defaults when omitted. v0.27.4+."}]},{name:"ChatGenerationOptions",note:"Per-call generation overrides for api.chat.sendMessage(content, { triggerGeneration: true, generation: ... }). Mirrors the host's ChatAppendGenerationOptionsDTO 1:1 in camelCase. Each field is optional; omitted fields fall through to the active chat's resolved defaults (same as a manual UI generation). Use this when a tool script needs to deviate from the user's normal chat configuration for a single triggered generation. v0.27.4+.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Override which connection profile to use. Falls back to the user's default connection."},{field:"personaId?",type:"string",optional:!0,desc:"Override which persona to use. Falls back to the user's active persona setting."},{field:"personaAddonStates?",type:"Record<string, boolean>",optional:!0,desc:"Per-addon enable/disable map for the chosen persona. Keys are addon ids; values are booleans. Omitted addons inherit chat-level state."},{field:"presetId?",type:"string",optional:!0,desc:"Override which preset to use. Falls back to the active preset setting (activeLoomPresetId), then to the connection's attached preset."},{field:"forcePresetId?",type:"boolean",optional:!0,desc:`When true, forces the supplied presetId over a connection-bound preset. Currently only consulted by the host's impersonation oneliner pipeline; triggerGeneration runs as generation_type "normal" where this field is a silent no-op. Exposed for fidelity with the host DTO.`},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Per-call parameter overrides (temperature, max_tokens, top_p, etc.) layered on the resolved preset's parameters. Provider-specific keys accepted; forwarded verbatim."},{field:"targetCharacterId?",type:"string",optional:!0,desc:"For group chats only: which character should respond. Falls back to the chat's character_id."},{field:"retainCouncil?",type:"boolean",optional:!0,desc:"When true, retains council-tool results from the previous generation rather than re-running them. Useful for cheap regenerate-style flows where the council context hasn't changed. Default false."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMDelegateOptions",note:"Options for api.ui.dom.delegate(selector, event, handler, options?). v0.27.1+.",fields:[{field:"root?",type:"'chat' | 'document'",optional:!0,desc:"Where to attach the actual host-side capture listener. 'chat' (default): restricts matching to chat content; matches descendants of [data-message-id]. 'document': matches anywhere in the page (including Lumiverse's own UI surfaces). Both gate on app_manipulation."},{field:"messageId?",type:"string",optional:!0,desc:'Limit matching to a specific message id. Has no effect when root is "document".'},{field:"preventDefault?",type:"boolean | ConditionalPreventDefault",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() before dispatching on every selector match. v0.27.5+: can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations (e.g. plain Enter on textarea while letting Shift+Enter through). Default: false."},{field:"stopPropagation?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.stopPropagation() after dispatching, preventing host-side and other delegation listeners from also reacting. Default: false."}]},{name:"DOMDelegatedEventData",note:"Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context. v0.27.1+.",fields:[{field:"matched",type:"{ tagName, classList, dataset, attributes, textContent, id?, value?, checked?, selectedIndex?, selectedText?, label? }",optional:!1,desc:'Snapshot of the element matched by event.target.closest(selector). May be an ancestor of the literal event.target. Form-input fields (value/checked/selectedIndex/selectedText/label) populated only for matching element types. label is the trimmed text of the first associated <label> (input / textarea / select only — explicit "for=" or implicit wrapping).'},{field:"modifiers",type:"{ ctrl, shift, alt, meta, button? }",optional:!1,desc:"Modifier-key state at event time. button is populated for click events (0=left, 1=middle, 2=right)."},{field:"message?",type:"{ id, role, swipeId }",optional:!0,desc:`Populated when the matched element is inside an assistant or user message. role: 'user' for [data-part="user"], 'assistant' otherwise. swipeId is the active swipe at dispatch time, resolved backend-side via the host's chat history. Falls through with 0 if the chat closed between event fire and dispatch or the message left the history.`},{field:"(plus DOMEventData fields)",type:"see DOMEventData",optional:!1,desc:"Inherits type, targetId, targetValue, targetChecked, dataset, detail, clientX, clientY from DOMEventData (see above)."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."},{field:"key?",type:"string",optional:!0,desc:"KeyboardEvent.key — the value of the key pressed, modifier-aware ('Enter', 'Escape', 'a', 'A', 'ArrowUp', 'Shift'). Populated only for keydown / keyup / keypress events. Use this to distinguish e.g. Enter-to-submit on a text input."},{field:"code?",type:"string",optional:!0,desc:"KeyboardEvent.code — physical key on the keyboard, layout-independent ('Enter', 'KeyA' regardless of shift, 'ArrowUp', 'ShiftLeft'). Populated only for keydown / keyup / keypress events. Use this for physical-position bindings (e.g. WASD)."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean | ConditionalPreventDefault",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. v0.27.5+: can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations. Default: false."}]},{name:"ConditionalPreventDefault",note:"Predicate-based preventDefault rule for DOMDelegateOptions / DOMListenOptions (v0.27.5+). Fires event.preventDefault() only when the event matches all provided filters (AND semantics). Each filter is optional; empty {} = always match (equivalent to `preventDefault: true`). Filters are evaluated synchronously frontend-side at fire time. Common shapes: { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } } (plain Enter, not Shift+Enter); { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } } (Ctrl+S override); { onButtons: [2] } (right-click only).",fields:[{field:"onKeys?",type:"string[]",optional:!0,desc:"KeyboardEvent.key value(s) — OR-matched within the array. Non-keyboard events skipped (preventDefault does NOT fire) when this is set."},{field:"onCodes?",type:"string[]",optional:!0,desc:"KeyboardEvent.code value(s) — physical key, layout-independent. Same keyboard-only semantics as onKeys. Use for physical-position bindings (e.g. WASD)."},{field:"onButtons?",type:"number[]",optional:!0,desc:"MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. Non-mouse events skipped when set."},{field:"whenModifiers?",type:"{ require?, exclude? }",optional:!0,desc:"Modifier-key constraint. ALL of require must be held; NONE of exclude may be held. Values: shift / ctrl / alt / meta. Applies to KeyboardEvent and MouseEvent."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"WorldInfoInterceptorEntry",note:"Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"comment",type:"string",optional:!1,desc:"Author-facing comment / label for the entry."},{field:"disabled",type:"boolean",optional:!1,desc:"Stored disabled flag (or accumulated disable from earlier handlers in the chain)."},{field:"constant",type:"boolean",optional:!1,desc:"Always-active flag."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:"Per-extension namespace metadata stored on the entry."},{field:"key",type:"readonly string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"readonly string[]",optional:!1,desc:"Secondary trigger keywords."},{field:"position",type:"number",optional:!1,desc:"Injection position."},{field:"depth",type:"number",optional:!1,desc:"Injection depth."},{field:"priority",type:"number",optional:!1,desc:"Activation priority."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100)."},{field:"useProbability",type:"boolean",optional:!1,desc:"Whether probability gating applies."},{field:"content",type:"string",optional:!1,desc:"Entry text content (reflects mutations from earlier handlers in the chain)."}]},{name:"WorldInfoInterceptorMessage",note:"One chat message exposed to a registerInterceptor handler.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message role."},{field:"content",type:"string",optional:!1,desc:"Message content."}]},{name:"WorldInfoInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"characterId",type:"string",optional:!1,desc:"Active character id."},{field:"userId?",type:"string",optional:!0,desc:"Owning user id. Pass to operator-scoped Spindle calls."},{field:"entries",type:"readonly WorldInfoInterceptorEntry[]",optional:!1,desc:"Candidate entries with prior handlers' mutations applied."},{field:"messages",type:"readonly WorldInfoInterceptorMessage[]",optional:!1,desc:"Chat-history snapshot."},{field:"chatTurn",type:"number",optional:!1,desc:"Turn number for this chat."},{field:"chatMetadata",type:"Record<string, unknown>",optional:!1,desc:"Chat-level metadata snapshot. Read-only."}]},{name:"WorldInfoInterceptorResult",note:"Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.",fields:[{field:"disabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-disable. Wins against any later enabled / forced vote."},{field:"enabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled."},{field:"forced?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced."},{field:"mutated?",type:"readonly { id: string; content: string }[]",optional:!0,desc:"Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id."}]},{name:"WorldInfoInterceptorOptions",note:"Passed to api.worldInfo.registerInterceptor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers' decisions applied to the entry list."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call."}]},{name:"RegisteredWorldInfoInterceptorInfo",note:"Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.",fields:[{field:"scriptId",type:"string",optional:!1,desc:"Owning script id."},{field:"scriptName",type:"string",optional:!1,desc:"Owning script display name."},{field:"id",type:"string",optional:!1,desc:"Resolved entry id (auto-generated or user-provided)."},{field:"priority",type:"number",optional:!1,desc:"Effective priority value."},{field:"timeoutMs",type:"number",optional:!1,desc:"Effective per-invocation timeout (ms)."}]},{name:"RegexScriptInfo",note:"Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique row id."},{field:"name",type:"string",optional:!1,desc:"Display name shown in the regex panel."},{field:"scriptId",type:"string",optional:!1,desc:"Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern compiled with the JavaScript regex engine."},{field:"replaceString",type:"string",optional:!1,desc:"Replacement template. Supports $1 / $& / $<name> capture references."},{field:"flags",type:"string",optional:!1,desc:'Any subset of "gimsu".'},{field:"placement",type:"RegexPlacement[]",optional:!1,desc:"Which message roles the rule applies to."},{field:"scope",type:"RegexScope",optional:!1,desc:"Scope tier: 'global' | 'character' | 'chat'."},{field:"scopeId",type:"string | null",optional:!1,desc:"Required when scope is non-global; null otherwise."},{field:"target",type:"RegexTarget",optional:!1,desc:"When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)."},{field:"minDepth",type:"number | null",optional:!1,desc:"Lower bound on chat-history depth (0 = latest), or null for unbounded."},{field:"maxDepth",type:"number | null",optional:!1,desc:"Upper bound on chat-history depth, or null for unbounded."},{field:"trimStrings",type:"string[]",optional:!1,desc:"Additional substrings stripped from output after the regex pass."},{field:"runOnEdit",type:"boolean",optional:!1,desc:"Re-run the rule when a message is edited."},{field:"substituteMacros",type:"RegexMacroMode",optional:!1,desc:"How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'."},{field:"disabled",type:"boolean",optional:!1,desc:"When true, the rule is registered but not active."},{field:"sortOrder",type:"number",optional:!1,desc:"Lower values run earlier within the same scope tier."},{field:"description",type:"string",optional:!1,desc:"Free-form note."},{field:"folder",type:"string",optional:!1,desc:"Folder label shown in the regex panel."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata namespaced to the creating extension."},{field:"createdAt",type:"number",optional:!1,desc:"Unix epoch seconds."},{field:"updatedAt",type:"number",optional:!1,desc:"Unix epoch seconds."}]},{name:"RegexScriptListOptions",note:"Filter options for api.regexScripts.list().",fields:[{field:"scope?",type:"'global' | 'character' | 'chat'",optional:!0,desc:"Filter to a single scope. Omit to include all scopes."},{field:"scopeId?",type:"string",optional:!0,desc:"Required when scope is 'character' or 'chat'. Ignored otherwise."},{field:"target?",type:"'prompt' | 'response' | 'display'",optional:!0,desc:"Filter by execution target."},{field:"limit?",type:"number",optional:!0,desc:"Page size. Default 50, max 200."},{field:"offset?",type:"number",optional:!0,desc:"Pagination offset."}]},{name:"RegexScriptActiveOptions",note:"Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.",fields:[{field:"target",type:"'prompt' | 'response' | 'display'",optional:!1,desc:"Required. The execution target to resolve for."},{field:"characterId?",type:"string",optional:!0,desc:"Include character-scoped rules attached to this character."},{field:"chatId?",type:"string",optional:!0,desc:"Include chat-scoped rules attached to this chat."}]},{name:"RegexScriptCreateInput",note:"Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.",fields:[{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern (JavaScript regex)."},{field:"replaceString?",type:"string",optional:!0,desc:"Replacement template. Default empty string."},{field:"flags?",type:"string",optional:!0,desc:'Any subset of "gimsu". Default "gi".'},{field:"placement?",type:"RegexPlacement[]",optional:!0,desc:'Default ["ai_output"].'},{field:"scope?",type:"RegexScope",optional:!0,desc:"Default 'global'."},{field:"scopeId?",type:"string | null",optional:!0,desc:"Required when scope is non-global."},{field:"target?",type:"RegexTarget",optional:!0,desc:"Default 'response'."},{field:"minDepth?",type:"number | null",optional:!0,desc:"Lower depth bound."},{field:"maxDepth?",type:"number | null",optional:!0,desc:"Upper depth bound."},{field:"trimStrings?",type:"string[]",optional:!0,desc:"Additional substrings stripped from output."},{field:"runOnEdit?",type:"boolean",optional:!0,desc:"Re-run on edit."},{field:"substituteMacros?",type:"RegexMacroMode",optional:!0,desc:"How CBS / {{...}} macros inside the rule resolve. Default 'none'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Create as disabled."},{field:"sortOrder?",type:"number",optional:!0,desc:"Default 0."},{field:"description?",type:"string",optional:!0,desc:"Free-form note."},{field:"folder?",type:"string",optional:!0,desc:"Folder label."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."},{field:"scriptId?",type:"string",optional:!0,desc:"Stable identifier. Normalized to lowercase + underscores by the host."}]},{name:"RegexScriptUpdateInput",note:"Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.",fields:[{field:"(all RegexScriptCreateInput fields, all optional)",type:"—",optional:!0,desc:"Only the fields you provide are updated; omitted fields are left unchanged."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],T$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:WP.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&Q.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"delegate",args:"selector, event, handler, options?",desc:`Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn't inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. v0.27.1+. Requires app_manipulation.`},{name:"cleanup",args:"—",desc:"Remove all DOM injections, styles, and delegations created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+."},{name:"listInterceptors",args:"—",desc:"Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.regexScripts",rows:[{name:"list",args:"options?",desc:"List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }."},{name:"get",args:"scriptId",desc:"Get a single regex script by id. Returns null if not found."},{name:"findByName",args:"name, scope?",desc:"Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case."},{name:"getActive",args:"options",desc:"Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId."},{name:"create",args:"input",desc:"Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)."},{name:"update",args:"scriptId, input",desc:"Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found."},{name:"delete",args:"scriptId",desc:"Delete a regex script. Returns true if the row was deleted."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],k$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:mP.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(dv,{label:g.group,cols:3},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.group}-${i.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],XP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],D$=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],YP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],a$=()=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",Q.jsxDEV(qe,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",Q.jsxDEV(qe,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",Q.jsxDEV(qe,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",Q.jsxDEV(qe,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",Q.jsxDEV(qe,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",Q.jsxDEV(qe,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:[Q.jsxDEV(dv,{label:"ls:components",cols:3},void 0,!1,void 0,this),GP.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),Q.jsxDEV(dv,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),XP.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),Q.jsxDEV(dv,{label:"ls:icons",cols:3},void 0,!1,void 0,this),D$.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:YP.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&Q.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qe,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),O3=()=>Q.jsxDEV("div",{className:"ls-ref",children:[Q.jsxDEV("div",{className:"ls-ref-toolbar",children:Q.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>w3(),title:"Download the current reference as a Markdown file",children:[Q.jsxDEV(Yt,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(Mi,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:Q.jsxDEV(N$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(jh,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:Q.jsxDEV(B$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(e1,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[Q.jsxDEV(C$,{},void 0,!1,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",Q.jsxDEV(qe,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(_h,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[Q.jsxDEV(S$,{},void 0,!1,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",Q.jsxDEV(qe,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",Q.jsxDEV(qe,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:Q.jsxDEV(T$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(ph,{size:11},void 0,!1,void 0,this),title:"API Functions",children:Q.jsxDEV(k$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(Sh,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:Q.jsxDEV(a$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(Kn,{icon:Q.jsxDEV(sh,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[Q.jsxDEV("p",{className:"ls-ref-muted",children:[Q.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",Q.jsxDEV(qe,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",Q.jsxDEV(qe,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",Q.jsxDEV(qe,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",Q.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[Q.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",Q.jsxDEV(qe,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",Q.jsxDEV(qe,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",Q.jsxDEV(qe,{children:"enabled: false"},void 0,!1,void 0,this)," and ",Q.jsxDEV(qe,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var qr=Pr(re(),1),A3=!1,q3=({script:g,allScripts:i,activeContext:v,isRunning:h,consoleEntries:u,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:A,sendToBackend:W})=>{let[G,m]=Ue.useState(g.code),[H,X]=Ue.useState(!1),[L,S]=Ue.useState(!1),[C,c]=Ue.useState(g.name),[rr,wr]=Ue.useState("code"),[ir,p]=Ue.useState(!1),[d,lr]=Ue.useState(!1),[N,y]=Ue.useState("pending"),f=Ue.useRef(null),x=Ue.useRef(null),Wr=Ue.useRef(null),Hr=Ue.useRef(null),mr=Ue.useRef(g.id),Zr=Ue.useRef(W);Ue.useEffect(()=>{mr.current=g.id},[g.id]),Ue.useEffect(()=>{Zr.current=W},[W]),Ue.useEffect(()=>{m(g.code),X(!1),c(g.name),lr(!1),y("pending")},[g.id,g.code,g.name]),Ue.useEffect(()=>{if(rr!=="code")return;if(N!=="pending")return;return f.current=setTimeout(()=>{y((V)=>V==="pending"?"mount-timeout":V)},15000),()=>{if(f.current)clearTimeout(f.current),f.current=null}},[rr,N]),Ue.useEffect(()=>{return()=>{if(x.current)clearTimeout(x.current),x.current=null;let V=Hr.current;if(V!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${mr.current}, len=${V.length})`);try{Zr.current({type:"update_script",id:mr.current,patch:{code:V}})}catch(Yr){console.error("[LumiScript] ScriptEditor unmount-flush failed:",Yr)}Hr.current=null}}},[]),Ue.useEffect(()=>{W({type:"get_active_context"})},[g.id,W]),Ue.useEffect(()=>{let V=setInterval(()=>{W({type:"get_active_context"})},2000);return()=>clearInterval(V)},[W]);let k=Ue.useCallback((V)=>{console.log(`[LumiScript] saveCode: script=${g.id}, len=${V.length}, head="${V.slice(0,40).replace(/\n/g,"\\n")}"`),W({type:"update_script",id:g.id,patch:{code:V}}),Hr.current=null,X(!1)},[g.id,W]),er=(V)=>{if(V===void 0)return;if(m(V),X(V!==g.code),Hr.current=V,x.current)clearTimeout(x.current);x.current=setTimeout(()=>k(V),O)},nr=(V,Yr)=>{if(Wr.current=V,f.current)clearTimeout(f.current),f.current=null;if(y("ok"),!A3){A3=!0;let Lr=Yr.languages.typescript.javascriptDefaults;Lr.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Lr.setCompilerOptions({target:Yr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Lr.addExtraLib(h3,"ts:lumiverse/lumiscript-api.d.ts")}V.addCommand(Yr.KeyMod.CtrlCmd|Yr.KeyCode.KeyS,()=>{if(x.current)clearTimeout(x.current);k(V.getValue())}),V.getModel()?.setEOL(Yr.editor.EndOfLineSequence.LF);let gr=V.getDomNode();if(gr){let Lr=()=>{let yr=!1,we=V.onDidFocusEditorWidget(()=>{yr=!0});setTimeout(()=>{if(we.dispose(),!yr)y((no)=>no==="ok"?"unresponsive":no)},1000)};gr.addEventListener("mousedown",Lr,{once:!0,capture:!0})}},Kr=()=>{if(h)return;if(x.current)clearTimeout(x.current),x.current=null;if(H)k(Wr.current?.getValue()??G);W({type:"run_script",id:g.id})},Xr=()=>{let V=C.trim();if(V&&V!==g.name)W({type:"update_script",id:g.id,patch:{name:V}});S(!1)},a=(V)=>{let Yr=g.bindings??[];W({type:"update_script",id:g.id,patch:{bindings:[...Yr,V]}})},T=(V)=>{W({type:"update_script",id:g.id,patch:{bindings:(g.bindings??[]).filter((Yr,gr)=>gr!==V)}})},vr=()=>{if(g.allowDangerous)W({type:"update_script",id:g.id,patch:{allowDangerous:!1}});else if(d)lr(!1),W({type:"update_script",id:g.id,patch:{allowDangerous:!0}});else lr(!0)},Mr=(V)=>new Date(V).toLocaleString();return qr.jsxDEV("div",{className:"ls-editor-root",children:[qr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?qr.jsxDEV("input",{className:"ls-editor-name-input",value:C,autoFocus:!0,onChange:(V)=>c(V.target.value),onBlur:Xr,onKeyDown:(V)=>{if(V.key==="Enter")Xr();if(V.key==="Escape")c(g.name),S(!1)}},void 0,!1,void 0,this):qr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>S(!0),title:"Click to rename",style:{cursor:"text"},children:g.name},void 0,!1,void 0,this),H&&qr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>wr("code"),title:"Code editor",children:[qr.jsxDEV(Wo,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>wr("docs"),title:"API reference",children:[qr.jsxDEV(Th,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),g.type!=="library"&&qr.jsxDEV("button",{className:`ls-btn${h?"":" ls-accent"}`,onClick:Kr,disabled:h,children:[h?qr.jsxDEV(Cl,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):qr.jsxDEV(zt,{size:15},void 0,!1,void 0,this),h?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&qr.jsxDEV("div",{className:"ls-editor-monaco",children:[qr.jsxDEV(g3,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:G,onChange:er,onMount:nr,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},g.id,!1,void 0,this),(N==="mount-timeout"||N==="unresponsive")&&qr.jsxDEV("div",{className:"ls-editor-failed-overlay",children:[qr.jsxDEV("h3",{className:"ls-editor-failed-title",children:N==="mount-timeout"?"The script editor failed to load.":"The editor isn't accepting input."},void 0,!1,void 0,this),qr.jsxDEV("p",{className:"ls-editor-failed-desc",children:N==="mount-timeout"?"Monaco did not finish initialising within 15 seconds. This usually means the Monaco CDN is blocked (corporate firewall, browser extension, restrictive network), or the browser environment is preventing the bundle from running.":"You clicked into the editor but it did not receive focus within 1 second. This usually means a browser-specific Monaco init failure — most commonly seen on Firefox with corrupted Windows font cache or aggressive security software."},void 0,!1,void 0,this),qr.jsxDEV("p",{className:"ls-editor-failed-steps-label",children:"Try these steps:"},void 0,!1,void 0,this),qr.jsxDEV("ul",{className:"ls-editor-failed-steps",children:[qr.jsxDEV("li",{children:"Reload the page (Ctrl+R / Cmd+R)."},void 0,!1,void 0,this),qr.jsxDEV("li",{children:"Try a different browser — Chrome and Edge are generally most reliable."},void 0,!1,void 0,this),N==="unresponsive"&&qr.jsxDEV(qr.Fragment,{children:[qr.jsxDEV("li",{children:["On Firefox + Windows: clear the Windows Font Cache. Open ",qr.jsxDEV("code",{children:"services.msc"},void 0,!1,void 0,this),", stop ",qr.jsxDEV("em",{children:"Windows Font Cache Service"},void 0,!1,void 0,this),", delete ",qr.jsxDEV("code",{children:"C:\\Windows\\System32\\FNTCACHE.DAT"},void 0,!1,void 0,this),", start the service again, then reload the page."]},void 0,!0,void 0,this),qr.jsxDEV("li",{children:["Try a fresh Firefox profile via ",qr.jsxDEV("code",{children:"about:profiles"},void 0,!1,void 0,this)," to rule out profile-level configuration interference."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N==="mount-timeout"&&qr.jsxDEV("li",{children:["Open the browser console and look for network errors or CSP violations against ",qr.jsxDEV("code",{children:"cdn.jsdelivr.net"},void 0,!1,void 0,this),"."]},void 0,!0,void 0,this),qr.jsxDEV("li",{children:"If none of the above resolves it, please report on Discord with browser + OS details and any console output."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:"ls-editor-failed-dismiss",onClick:()=>y("ok"),children:"Dismiss"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="docs"&&qr.jsxDEV("div",{className:"ls-editor-docs",children:qr.jsxDEV(O3,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&qr.jsxDEV(l3,{entries:u,isRunning:h,onClear:A},void 0,!1,void 0,this),g.type==="trigger"&&qr.jsxDEV(v3,{scriptId:g.id,triggers:g.triggers??[],sendToBackend:W},void 0,!1,void 0,this),g.type==="trigger"&&qr.jsxDEV(i3,{bindings:g.bindings??[],activeContext:v,onAdd:a,onRemove:T},void 0,!1,void 0,this),d&&qr.jsxDEV("div",{className:"ls-danger-confirm",children:[qr.jsxDEV(av,{size:10},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),qr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:vr,children:"Enable"},void 0,!1,void 0,this),qr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-meta-footer",children:[qr.jsxDEV("span",{className:"ls-meta-item",children:qr.jsxDEV("button",{className:"ls-danger-btn",onClick:vr,title:"Toggle dangerous mode",children:[g.allowDangerous?qr.jsxDEV(av,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):qr.jsxDEV(g1,{size:11},void 0,!1,void 0,this),qr.jsxDEV("span",{className:g.allowDangerous?"ls-dangerous":"",children:g.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[qr.jsxDEV(Jt,{size:10},void 0,!1,void 0,this),qr.jsxDEV("select",{className:"ls-folder-select",value:g.folder??"",onChange:(V)=>{let Yr=V.target.value;if(Yr==="__new__"){let gr=window.prompt("New folder name:");if(gr?.trim())W({type:"update_script",id:g.id,patch:{folder:gr.trim()}})}else W({type:"update_script",id:g.id,patch:{folder:Yr}})},children:[qr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(i.map((V)=>V.folder).filter((V)=>!!V))].sort().map((V)=>qr.jsxDEV("option",{value:V,children:V},V,!1,void 0,this)),qr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("span",{className:"ls-meta-item",children:[qr.jsxDEV(yh,{size:10},void 0,!1,void 0,this),qr.jsxDEV("span",{children:["Updated ",Mr(g.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("span",{className:"ls-meta-item",children:[qr.jsxDEV(kh,{size:10},void 0,!1,void 0,this),qr.jsxDEV("span",{children:["Created ",Mr(g.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:g.id,onClick:()=>{navigator.clipboard.writeText(g.id).catch(()=>{}),p(!0),setTimeout(()=>p(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[ir?qr.jsxDEV(Dh,{size:10},void 0,!1,void 0,this):qr.jsxDEV(jg,{size:10},void 0,!1,void 0,this),qr.jsxDEV("span",{children:["ID ",g.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $o=Pr(re(),1),M3=({scripts:g,initialScriptId:i,activeContext:v,execInfo:h,activeRunScriptId:u,isRunning:P,consoleHistory:O,editorFontSize:A,autosaveDebounceMs:W,onClearConsole:G,onClose:m,sendToBackend:H})=>{let[X,L]=I1.useState(i),S=g.find((ir)=>ir.id===X)??null;I1.useEffect(()=>{L(i)},[i]),I1.useEffect(()=>{let ir=(p)=>{if(p.key==="Escape")m()};return document.addEventListener("keydown",ir),()=>document.removeEventListener("keydown",ir)},[m]);let C=S?O[S.id]??[]:[],c=P&&S?.id===u;return H3.createPortal($o.jsxDEV("div",{className:"ls-modal-overlay",onClick:(ir)=>{if(ir.target===ir.currentTarget)m()},children:$o.jsxDEV("div",{className:"ls-modal-card",onClick:(ir)=>ir.stopPropagation(),children:[$o.jsxDEV("div",{className:"ls-modal-header",children:[$o.jsxDEV("span",{className:"ls-modal-title",children:[$o.jsxDEV(Zl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),$o.jsxDEV("button",{className:"ls-modal-close",onClick:m,title:"Close (Esc)",children:$o.jsxDEV(To,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$o.jsxDEV("div",{className:"ls-modal-body",children:[$o.jsxDEV("div",{className:"ls-modal-sidebar",children:$o.jsxDEV(Jw,{scripts:g,selectedId:X,execInfo:h,onSelect:L,onEdit:L,sendToBackend:H},void 0,!1,void 0,this)},void 0,!1,void 0,this),$o.jsxDEV("div",{className:"ls-modal-main",children:S?$o.jsxDEV(q3,{script:S,allScripts:g,activeContext:v,isRunning:c,consoleEntries:C,editorFontSize:A,autosaveDebounceMs:W,onClearConsole:()=>{if(S)G(S.id)},sendToBackend:H},void 0,!1,void 0,this):$o.jsxDEV("div",{className:"ls-placeholder",children:[$o.jsxDEV(Zl,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),$o.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var xw=Pr(re(),1),R3=({scripts:g,activeContext:i,execInfo:v,activeRunScriptId:h,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:A,onClearConsole:W,onScriptOpened:G,sendToBackend:m})=>{let[H,X]=Nw.useState(null);return Nw.useEffect(()=>{if(H&&G)G(H)},[H,G]),xw.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[xw.jsxDEV(Jw,{scripts:g,selectedId:H,execInfo:v,onSelect:()=>{},onEdit:X,sendToBackend:m},void 0,!1,void 0,this),H!==null&&xw.jsxDEV(M3,{scripts:g,initialScriptId:H,activeContext:i,execInfo:v,activeRunScriptId:h,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:A,onClearConsole:W,onClose:()=>X(null),sendToBackend:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var W3=Pr(ie(),1);var _e=Pr(re(),1),c$=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function y$(g){if(g===void 0)return"undefined";if(g===null)return"null";if(typeof g==="string")return g.length>80?g.slice(0,77)+"…":g;try{let i=JSON.stringify(g);return i.length>80?i.slice(0,77)+"…":i}catch{return String(g)}}var m3=({variables:g,sendToBackend:i})=>{let[v,h]=W3.useState(new Set(["local","global","chat","character"])),u=(O)=>{h((A)=>{let W=new Set(A);if(W.has(O))W.delete(O);else W.add(O);return W})},P=g?Object.values(g).reduce((O,A)=>O+Object.keys(A).length,0):0;return _e.jsxDEV("div",{className:"ls-status-section",children:[_e.jsxDEV("div",{className:"ls-inject-header",children:[_e.jsxDEV(dg,{size:10},void 0,!1,void 0,this),"Variables",P>0&&_e.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),_e.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>i({type:"get_variables"}),children:_e.jsxDEV(Hi,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),_e.jsxDEV("div",{className:"ls-status-section-body",children:!g?_e.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?_e.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):c$.map(({key:O,label:A,hint:W})=>{let G=g[O],m=Object.keys(G),H=v.has(O);if(m.length===0)return null;return _e.jsxDEV("div",{className:"ls-vars-scope",children:[_e.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>u(O),children:[H?_e.jsxDEV(mo,{size:10},void 0,!1,void 0,this):_e.jsxDEV(Mg,{size:10},void 0,!1,void 0,this),_e.jsxDEV("span",{className:"ls-vars-scope-name",children:A},void 0,!1,void 0,this),W&&_e.jsxDEV("span",{className:"ls-vars-scope-hint",children:W},void 0,!1,void 0,this),_e.jsxDEV("span",{className:"ls-vars-scope-count",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H&&_e.jsxDEV("div",{className:"ls-vars-scope-body",children:m.sort().map((X)=>_e.jsxDEV("div",{className:"ls-vars-entry",children:[_e.jsxDEV("span",{className:"ls-vars-key",children:X},void 0,!1,void 0,this),_e.jsxDEV("span",{className:"ls-vars-value",title:String(G[X]),children:y$(G[X])},void 0,!1,void 0,this)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Un=Pr(ie(),1);function Bw(g){if(!Number.isFinite(g)||g<=0)return"0 B";let i=["B","KB","MB","GB"],v=Math.min(i.length-1,Math.floor(Math.log(g)/Math.log(1024))),h=g/Math.pow(1024,v);return`${v===0?h.toFixed(0):h.toFixed(1)} ${i[v]}`}function F1(g){let i;if(typeof g==="number")i=g;else{if(!g)return"—";i=new Date(g).getTime()}if(!Number.isFinite(i)||i<=0)return"—";let v=Date.now()-i;if(v<60000)return"just now";if(v<3600000)return`${Math.floor(v/60000)}m ago`;if(v<86400000)return`${Math.floor(v/3600000)}h ago`;if(v<2592000000)return`${Math.floor(v/86400000)}d ago`;return new Date(i).toISOString().slice(0,10)}var JP={script:"script",character:"char",chat:"chat"},G3={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Cw(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(v,h,u,P,O,A,W)=>{if(h)return`<span class="ls-json-key">${h}</span>${u}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(A)return`<span class="ls-json-null">${A}</span>`;if(W)return`<span class="ls-json-number">${W}</span>`;return v})}async function zP(g){try{return await navigator.clipboard.writeText(g),!0}catch{return!1}}var xr=Pr(re(),1),sv=["script","character","chat"],V$=10485760,_$=41943040,E$=52428800;function f$(g){if(g>=_$)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(g>=V$)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function p$(g){if(g.scope==="character"){if(g.characterName)return`character: ${g.characterName} (${g.characterId})
${g.path}`;if(g.characterId)return`character: ${g.characterId} (not currently loaded)
${g.path}`}if(g.scope==="chat"){if(g.chatName)return`chat: ${g.chatName} (${g.chatId})
${g.path}`;if(g.chatId)return`chat: ${g.chatId} (not currently loaded)
${g.path}`}return g.path}function j$(g,i,v,h){switch(v){case"name":return g.name.localeCompare(i.name,void 0,{sensitivity:"base"});case"scope":return g.scope.localeCompare(i.scope);case"owner":{let u=h.get(g.scriptId)??g.scriptId,P=h.get(i.scriptId)??i.scriptId;return u.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return g.sizeBytes-i.sizeBytes;case"updated":return new Date(g.modifiedAt).getTime()-new Date(i.modifiedAt).getTime()}}var X3=({collections:g,scripts:i,sendToBackend:v,onInspect:h,onDrop:u})=>{let[P,O]=Un.useState(""),[A,W]=Un.useState(()=>new Set(sv)),[G,m]=Un.useState(null),[H,X]=Un.useState("asc"),L=Un.useMemo(()=>{let N=new Map;for(let y of i)N.set(y.id,y.name);return N},[i]),S=Un.useMemo(()=>{if(!g)return null;let N=g;if(A.size<sv.length)N=N.filter((f)=>A.has(f.scope));let y=P.trim().toLowerCase();if(y)N=N.filter((f)=>f.name.toLowerCase().includes(y));if(G){let f=H==="asc"?1:-1;N=N.slice().sort((x,Wr)=>j$(x,Wr,G,L)*f)}return N},[g,A,P,G,H,L]),C=()=>v({type:"list_collections"}),c=(N)=>{W((y)=>{let f=new Set(y);if(f.has(N))f.delete(N);else f.add(N);if(f.size===0)return new Set(sv);return f})},rr=(N)=>{if(G!==N){m(N),X("asc");return}if(H==="asc"){X("desc");return}m(null)},wr=()=>{O(""),W(new Set(sv))},ir=g?.length??0,p=S?.length??0,d=P.trim().length>0||A.size<sv.length,lr=(N)=>{if(G!==N)return xr.jsxDEV(ch,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return H==="asc"?xr.jsxDEV(Mg,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):xr.jsxDEV(mo,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return xr.jsxDEV("div",{className:"ls-status-section",children:[xr.jsxDEV("div",{className:"ls-inject-header",children:[xr.jsxDEV(dg,{size:10},void 0,!1,void 0,this),"Collections",ir>0&&xr.jsxDEV("span",{className:"ls-inject-count",children:ir},void 0,!1,void 0,this),xr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:C,children:xr.jsxDEV(Hi,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-status-section-body",children:g===null?xr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):g.length===0?xr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):xr.jsxDEV(xr.Fragment,{children:[xr.jsxDEV("div",{className:"ls-collections-filter",children:[xr.jsxDEV("div",{className:"ls-collections-filter-search",children:[xr.jsxDEV(mn,{size:10},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(N)=>O(N.target.value)},void 0,!1,void 0,this),P&&xr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:xr.jsxDEV(To,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-collections-filter-chips",children:sv.map((N)=>{let y=A.has(N);return xr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":N,"aria-pressed":y,title:y?`Hide ${N}-scoped`:`Show ${N}-scoped`,onClick:()=>c(N),children:JP[N]},N,!1,void 0,this)})},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-filter-count",children:d?`${p}/${ir}`:ir},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p===0?xr.jsxDEV("div",{className:"ls-section-empty",children:[xr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),xr.jsxDEV("button",{onClick:wr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):xr.jsxDEV("div",{className:"ls-collections-list",children:[xr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),xr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S.map((N)=>{let y=L.get(N.scriptId)??`(${N.scriptId.slice(0,8)}…)`,f=!L.has(N.scriptId),x=f?`scriptId: ${N.scriptId} (not currently loaded)`:`${y} (${N.scriptId})`;return xr.jsxDEV("div",{className:"ls-collections-row",children:[xr.jsxDEV("span",{className:"ls-collections-name",title:N.name,children:N.name},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-scope","data-scope":N.scope,title:p$(N),children:JP[N.scope]},void 0,!1,void 0,this),xr.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:x,children:y},void 0,!1,void 0,this),(()=>{let Wr=f$(N.sizeBytes),Hr=(N.sizeBytes/E$*100).toFixed(N.sizeBytes<1048576?2:1),mr=`${N.sizeBytes.toLocaleString()} bytes (${Hr}% of 50 MB cap)`;return xr.jsxDEV("span",{className:"ls-collections-size","data-budget":Wr.tier,title:mr,style:Wr.tier==="normal"?void 0:{color:Wr.color,fontWeight:600},children:Bw(N.sizeBytes)},void 0,!1,void 0,this)})(),xr.jsxDEV("span",{className:"ls-collections-updated",title:N.modifiedAt,children:F1(N.modifiedAt)},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-actions",children:[xr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>h(N.path),children:xr.jsxDEV(Vh,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),xr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>u(N),children:xr.jsxDEV(Uo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},N.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var De=Pr(ie(),1),z3=Pr(Sv(),1);var gl=Pr(ie(),1),Y3=Pr(Sv(),1);var Xe=Pr(re(),1);function d$(g){let{id:i,createdAt:v,updatedAt:h,...u}=g;try{return JSON.stringify(u,null,2)}catch{return"{}"}}var J3=({path:g,record:i,onClose:v,sendToBackend:h})=>{let[u,P]=gl.useState(()=>d$(i)),[O,A]=gl.useState(null),W=gl.useRef(null),G=gl.useRef(null),m=gl.useRef(null);gl.useEffect(()=>{let C=(c)=>{if(c.key==="Escape")v()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[v]),gl.useEffect(()=>{let C=(c)=>{if(c.key!=="Tab")return;let rr=W.current;if(!rr)return;let wr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(wr.length===0)return;let ir=wr[0],p=wr[wr.length-1],d=document.activeElement,lr=d!==null&&rr.contains(d);if(c.shiftKey){if(!lr||d===ir)c.preventDefault(),p.focus()}else if(!lr||d===p)c.preventDefault(),ir.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[]),gl.useEffect(()=>{let C=setTimeout(()=>G.current?.focus(),0);return()=>clearTimeout(C)},[]);let H=()=>{let C;try{C=JSON.parse(u)}catch(c){let rr=c instanceof Error?c.message:String(c);A(`JSON parse error: ${rr}`);return}if(C===null||typeof C!=="object"||Array.isArray(C)){A("Record must be a JSON object — not an array, null, or primitive.");return}A(null),h({type:"update_record",path:g,recordId:String(i.id),patch:C}),v()},X=(C)=>{if((C.metaKey||C.ctrlKey)&&C.key==="Enter")C.preventDefault(),H()},L=String(i.id),S=Xe.jsxDEV("div",{className:"ls-modal-overlay",onClick:(C)=>{if(C.target===C.currentTarget)v()},children:Xe.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:W,onClick:(C)=>C.stopPropagation(),children:[Xe.jsxDEV("div",{className:"ls-modal-header",children:[Xe.jsxDEV("span",{className:"ls-modal-title",children:[Xe.jsxDEV(sg,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Xe.jsxDEV("button",{className:"ls-modal-close",onClick:v,title:"Cancel (Esc)",children:Xe.jsxDEV(To,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xe.jsxDEV("div",{className:"ls-edit-body",children:[Xe.jsxDEV("div",{className:"ls-edit-meta",children:[Xe.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Xe.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xe.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Xe.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Xe.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Xe.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Xe.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Xe.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Xe.jsxDEV("pre",{ref:m,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Cw(u)+`
`}},void 0,!1,void 0,this),Xe.jsxDEV("textarea",{ref:G,className:"ls-edit-textarea",value:u,onChange:(C)=>{if(P(C.target.value),O)A(null)},onKeyDown:X,onScroll:(C)=>{let c=m.current;if(!c)return;c.scrollTop=C.currentTarget.scrollTop,c.scrollLeft=C.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Xe.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Xe.jsxDEV(Zg,{size:12},void 0,!1,void 0,this),Xe.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xe.jsxDEV("div",{className:"ls-drop-actions",children:[Xe.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:v,children:"Cancel"},void 0,!1,void 0,this),Xe.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:H,title:"Save (Ctrl/Cmd+Enter)",children:[Xe.jsxDEV(o1,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Y3.createPortal(S,document.body)};var j=Pr(re(),1),Ft=50,s$=150,rL=1200,eL=4000,Q3=({path:g,summary:i,records:v,total:h,error:u,stats:P,refreshToken:O,onClose:A,sendToBackend:W})=>{let[G,m]=De.useState(""),[H,X]=De.useState(""),[L,S]=De.useState(0),[C,c]=De.useState("shallow"),[rr,wr]=De.useState(0),[ir,p]=De.useState(()=>new Set),[d,lr]=De.useState(null),[N,y]=De.useState(null),[f,x]=De.useState("records");De.useEffect(()=>{let T=setTimeout(()=>X(G),s$);return()=>clearTimeout(T)},[G]),De.useEffect(()=>{S(0)},[H,C]),De.useEffect(()=>{let T=H.trim();if(C==="jsonquery")W({type:"inspect_collection",path:g,jsonqueryFilter:T||void 0,limit:Ft,offset:L*Ft});else W({type:"inspect_collection",path:g,textFilter:T||void 0,deepFilter:C==="deep"||void 0,limit:Ft,offset:L*Ft})},[g,H,C,L,O,rr,W]),De.useEffect(()=>{let T=(vr)=>{if(vr.key==="Escape")A()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[A]);let Wr=Math.max(1,Math.ceil(h/Ft)),Hr=h===0?0:L*Ft+1,mr=Math.min(h,(L+1)*Ft),Zr=De.useMemo(()=>{let T=g.match(/\/([^/]+)\.json$/);return T?T[1]:g},[g]),k=De.useMemo(()=>{if(!i)return null;if(i.scope==="character"&&i.characterName)return`character: ${i.characterName}`;if(i.scope==="chat"&&i.chatName)return`chat: ${i.chatName}`;return null},[i]),er=(T)=>{p((vr)=>{let Mr=new Set(vr);return Mr.add(T),Mr}),setTimeout(()=>{p((vr)=>{if(!vr.has(T))return vr;let Mr=new Set(vr);return Mr.delete(T),Mr})},rL)},nr=async(T)=>{if(await zP(String(T.id)))er(`${T.id}:id`)},Kr=async(T)=>{if(await zP(JSON.stringify(T,null,2)))er(`${T.id}:json`)};De.useEffect(()=>{if(N===null)return;let T=setTimeout(()=>y(null),eL);return()=>clearTimeout(T)},[N]);let Xr=(T)=>{let vr=String(T.id);if(N===vr)W({type:"delete_record",path:g,recordId:vr}),y(null);else y(vr)};De.useEffect(()=>{y(null),lr(null)},[L,H,C,g]),De.useEffect(()=>{x("records")},[g]),De.useEffect(()=>{if(f!=="stats")return;W({type:"analyze_collection",path:g})},[f,g,O,rr,W]);let a=j.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)A()},children:j.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(T)=>T.stopPropagation(),children:[j.jsxDEV("div",{className:"ls-modal-header",children:[j.jsxDEV("span",{className:"ls-modal-title",children:[j.jsxDEV(dg,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-name",children:Zr},void 0,!1,void 0,this),k&&j.jsxDEV("span",{className:"ls-inspect-title-path",title:g,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-path",title:g,children:g},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:()=>wr((T)=>T+1),title:"Refresh records",style:{marginRight:4},children:j.jsxDEV(Hi,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:A,title:"Close (Esc)",children:j.jsxDEV(To,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>x("records"),children:[j.jsxDEV(fh,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>x("stats"),children:[j.jsxDEV(Mn,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{className:"ls-inspect-toolbar",children:[j.jsxDEV("div",{className:"ls-inspect-search",children:[j.jsxDEV(mn,{size:12},void 0,!1,void 0,this),j.jsxDEV("input",{type:C==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:C==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":C==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:G,onChange:(T)=>m(T.target.value),autoFocus:!0,spellCheck:C!=="jsonquery",autoCorrect:C==="jsonquery"?"off":"on",autoCapitalize:C==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),j.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>c("shallow"),children:j.jsxDEV(mn,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>c("deep"),children:j.jsxDEV(Rn,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>c("jsonquery"),children:j.jsxDEV(Wo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-pager",children:[j.jsxDEV("span",{className:"ls-inspect-pager-status",children:h===0?"No matching records":j.jsxDEV(j.Fragment,{children:["Showing ",j.jsxDEV("strong",{children:Hr},void 0,!1,void 0,this),"–",j.jsxDEV("strong",{children:mr},void 0,!1,void 0,this)," of ",j.jsxDEV("strong",{children:h},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((T)=>Math.max(0,T-1)),disabled:L===0,title:"Previous page",children:j.jsxDEV(ah,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((T)=>Math.min(Wr-1,T+1)),disabled:L>=Wr-1,title:"Next page",children:j.jsxDEV(qi,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),u&&j.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[j.jsxDEV(Zg,{size:12},void 0,!1,void 0,this),j.jsxDEV("span",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-body",children:v===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):v.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:h===0&&H?j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{children:["No records match “",H,"”"]},void 0,!0,void 0,this),j.jsxDEV("button",{onClick:()=>m(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):h===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):j.jsxDEV("div",{className:"ls-inspect-records",children:v.map((T)=>{let vr=String(T.id),Mr=ir.has(`${T.id}:id`),V=ir.has(`${T.id}:json`);return j.jsxDEV("div",{className:"ls-inspect-record",children:[j.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${vr}`,children:[j.jsxDEV("code",{children:[vr.slice(0,12),"…"]},void 0,!0,void 0,this),j.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",j.jsxDEV("time",{title:new Date(T.createdAt).toISOString(),children:F1(T.createdAt)},void 0,!1,void 0,this),T.updatedAt!==T.createdAt&&j.jsxDEV(j.Fragment,{children:[" · ","updated ",j.jsxDEV("time",{title:new Date(T.updatedAt).toISOString(),children:F1(T.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:Mr?"Copied!":"Copy ID",onClick:()=>nr(T),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Mr?"var(--lumiverse-accent)":"inherit",opacity:Mr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(jg,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:V?"Copied!":"Copy full JSON",onClick:()=>Kr(T),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:V?"var(--lumiverse-accent)":"inherit",opacity:V?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(T),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(sg,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action"+(N===vr?" ls-inspect-record-action-confirm":""),title:N===vr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Xr(T),style:{background:N===vr?"rgba(246, 130, 130, 0.18)":"transparent",border:N===vr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:N===vr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:N===vr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:N===vr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:N===vr?600:400,borderRadius:3},children:[j.jsxDEV(Uo,{size:11},void 0,!1,void 0,this),N===vr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Cw(oL(T))}},void 0,!1,void 0,this)]},vr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&j.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):j.jsxDEV(iL,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return j.jsxDEV(j.Fragment,{children:[z3.createPortal(a,document.body),d&&j.jsxDEV(J3,{path:g,record:d,onClose:()=>lr(null),sendToBackend:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function oL(g){let{id:i,createdAt:v,updatedAt:h,...u}=g;try{return JSON.stringify(u,null,2)}catch{return String(g)}}var gL={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function lL(g){if(typeof g==="string")return`"${g.length>32?g.slice(0,30)+"…":g}"`;if(g===null)return"null";return String(g)}function QP(g){if(!Number.isFinite(g))return"—";return Number.isInteger(g)?String(g):g.toFixed(2)}var iL=({stats:g})=>{return j.jsxDEV("div",{className:"ls-inspect-stats",children:[j.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",j.jsxDEV("strong",{children:g.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",g.totalRecords===1?"record":"records"," ·"," ",j.jsxDEV("strong",{children:g.fields.length},void 0,!1,void 0,this)," ",g.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-grid",children:g.fields.map((i)=>j.jsxDEV(nL,{field:i,totalRecords:g.totalRecords},i.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},nL=({field:g,totalRecords:i})=>{let v=i===0?0:Math.round(g.presence/i*100),h=Object.entries(g.types);return h.sort((u,P)=>P[1]-u[1]),j.jsxDEV("div",{className:"ls-inspect-stats-card",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[j.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:g.name,children:g.name},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${g.presence} of ${i} records`,children:[v,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:h.map(([u,P])=>j.jsxDEV("span",{className:gL[u],children:[u," · ",P]},u,!0,void 0,this))},void 0,!1,void 0,this),g.numericRange&&j.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[j.jsxDEV("span",{children:["min ",j.jsxDEV("strong",{children:QP(g.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["max ",j.jsxDEV("strong",{children:QP(g.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["mean ",j.jsxDEV("strong",{children:QP(g.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.topValues.length>0&&j.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",g.topValues.length," of ",g.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:g.topValues.map((u,P)=>j.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(u.value),children:[j.jsxDEV("code",{children:lL(u.value)},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",u.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var x1=Pr(ie(),1),K3=Pr(Sv(),1);var he=Pr(re(),1);function tL(g){if(g.scope==="character"&&g.characterName&&g.characterId)return{label:"Character",name:g.characterName,id:g.characterId};if(g.scope==="chat"&&g.chatName&&g.chatId)return{label:"Chat",name:g.chatName,id:g.chatId};return null}var U3=({target:g,recordCount:i,onConfirm:v,onCancel:h})=>{let u=x1.useRef(null);x1.useEffect(()=>{let O=(A)=>{if(A.key==="Escape")h()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[h]),x1.useEffect(()=>{let O=(A)=>{if(A.key!=="Tab")return;let W=u.current;if(!W)return;let G=Array.from(W.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(G.length===0)return;let m=G[0],H=G[G.length-1],X=document.activeElement,L=X!==null&&W.contains(X);if(A.shiftKey){if(!L||X===m)A.preventDefault(),H.focus()}else if(!L||X===H)A.preventDefault(),m.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=he.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)h()},children:he.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:u,onClick:(O)=>O.stopPropagation(),children:[he.jsxDEV("div",{className:"ls-modal-header",children:[he.jsxDEV("span",{className:"ls-modal-title",children:[he.jsxDEV(Uo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),he.jsxDEV("button",{className:"ls-modal-close",onClick:h,title:"Cancel (Esc)",children:he.jsxDEV(To,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),he.jsxDEV("div",{className:"ls-drop-body",children:[he.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),he.jsxDEV("div",{className:"ls-drop-target",children:[he.jsxDEV("div",{className:"ls-drop-target-name",children:g.name},void 0,!1,void 0,this),he.jsxDEV("div",{className:"ls-drop-target-meta",children:[he.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":g.scope,children:G3[g.scope]},void 0,!1,void 0,this),he.jsxDEV("span",{className:"ls-drop-target-size",children:Bw(g.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=tL(g);if(!O)return null;return he.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",he.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),he.jsxDEV("div",{className:"ls-drop-target-path",title:g.path,children:g.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),i===null?he.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):i>=0?he.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:i===0?"Collection is currently empty.":he.jsxDEV(he.Fragment,{children:["Will delete ",he.jsxDEV("strong",{children:i.toLocaleString()},void 0,!1,void 0,this)," ",i===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,he.jsxDEV("div",{className:"ls-drop-warning",children:[he.jsxDEV(Zg,{size:12},void 0,!1,void 0,this),he.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),he.jsxDEV("div",{className:"ls-drop-actions",children:[he.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:h,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),he.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:v,children:[he.jsxDEV(Uo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return K3.createPortal(P,document.body)};var Ji=Pr(re(),1),$3=({variables:g,collections:i,scripts:v,sendToBackend:h,inspectPath:u,inspectRecords:P,inspectTotal:O,inspectError:A,inspectStats:W,inspectRefreshToken:G,onInspect:m,dropTarget:H,dropTargetCount:X,onDrop:L,onDropConfirm:S})=>{return Ji.jsxDEV(Ji.Fragment,{children:[Ji.jsxDEV("div",{className:"ls-storage-list",children:[Ji.jsxDEV(m3,{variables:g,sendToBackend:h},void 0,!1,void 0,this),Ji.jsxDEV(X3,{collections:i,scripts:v,sendToBackend:h,onInspect:m,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u!==null&&Ji.jsxDEV(Q3,{path:u,summary:i?.find((C)=>C.path===u),records:P,total:O,error:A,stats:W,refreshToken:G,onClose:()=>m(null),sendToBackend:h},void 0,!1,void 0,this),H!==null&&Ji.jsxDEV(U3,{target:H,recordCount:X,onConfirm:S,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ar=Pr(re(),1),L3=({onBackendMessage:g,sendToBackend:i})=>{let[v,h]=Ye.useState("manage"),[u,P]=Ye.useState([]),[O,A]=Ye.useState(tw),[W,G]=Ye.useState({characterId:null,characterName:null,chatId:null}),[m,H]=Ye.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[X,L]=Ye.useState([]),[S,C]=Ye.useState([]),[c,rr]=Ye.useState(null),[wr,ir]=Ye.useState(null),[p,d]=Ye.useState(null),[lr,N]=Ye.useState(null),[y,f]=Ye.useState(0),[x,Wr]=Ye.useState(null),[Hr,mr]=Ye.useState(0),[Zr,k]=Ye.useState(null),[er,nr]=Ye.useState(null),[Kr,Xr]=Ye.useState(null),[a,T]=Ye.useState({});Ye.useEffect(()=>{let V=g((Yr)=>{let gr=Yr;switch(gr.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${gr.scripts.length} script(s)`),P(gr.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${gr.script.id}, codeLen=${gr.script.code?.length??-1}`),P((Lr)=>Lr.map((yr)=>yr.id===gr.script.id?gr.script:yr));break}case"settings_updated":A(gr.settings);break;case"active_context":G({characterId:gr.characterId,characterName:gr.characterName,chatId:gr.chatId}),i({type:"get_variables"});break;case"variables_updated":rr(gr.variables);break;case"collections_list":ir(gr.collections);break;case"collection_records":N((Lr)=>{return gr.records}),f(gr.total),Wr(gr.error??null);break;case"collection_stats":k((Lr)=>{return gr.stats});break;case"collection_count":Xr((Lr)=>{return gr.count});break;case"collections_updated":i({type:"list_collections"}),mr((Lr)=>Lr+1);break;case"injections_updated":L(gr.injections);break;case"tools_updated":C(gr.tools);break;case"execution_started":{let Lr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};H((yr)=>{let we=yr.consoleHistory[gr.scriptId]??[],no=we.length>0?[...we,Lr]:we;return{...yr,activeScriptId:gr.scriptId,runId:gr.runId,isRunning:!0,consoleHistory:{...yr.consoleHistory,[gr.scriptId]:no},scriptExecInfo:{...yr.scriptExecInfo,[gr.scriptId]:{...yr.scriptExecInfo[gr.scriptId],dot:"running"}}}}),T((yr)=>({...yr,[gr.scriptId]:(yr[gr.scriptId]??0)+1}));break}case"console_entry":{let Lr=O.consoleHistoryLimit;H((yr)=>{let we=yr.consoleHistory[gr.scriptId]??[];if(we.length>=Lr)return yr;let hr=we.length===Lr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Lr} entries. Clear the console to resume capture.]`}:gr.entry;return{...yr,consoleHistory:{...yr.consoleHistory,[gr.scriptId]:[...we,hr]}}});break}case"execution_ended":H((Lr)=>{let yr=Lr.consoleHistory[gr.scriptId]??[],we=Lr.scriptExecInfo[gr.scriptId],no=!gr.success&&gr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:gr.error}]:[],hr=!gr.success?!0:we?.stickyError??!1,co=!gr.success||hr?"error":"success",Yo=gr.duration??0,Ee=gr.success&&Yo===0&&(we?.duration??0)>0?we.duration:gr.duration;return{...Lr,isRunning:!1,consoleHistory:no.length?{...Lr.consoleHistory,[gr.scriptId]:[...yr,...no]}:Lr.consoleHistory,scriptExecInfo:{...Lr.scriptExecInfo,[gr.scriptId]:{dot:co,duration:Ee,error:gr.error??we?.error,stickyError:hr}}}});break;case"error":console.warn("[LumiScript]",gr.message);break}});return i({type:"get_scripts"}),i({type:"get_settings"}),i({type:"get_active_context"}),i({type:"get_injections"}),i({type:"get_tools"}),V},[g,i]),Ye.useEffect(()=>{if(v==="storage")i({type:"list_collections"})},[v,i]),Ye.useEffect(()=>{if(Xr(null),er)i({type:"count_collection",path:er.path})},[er,i]);let vr=Ye.useCallback((V)=>{H((Yr)=>({...Yr,consoleHistory:{...Yr.consoleHistory,[V]:[]}}))},[]),Mr=Ye.useCallback((V)=>{H((Yr)=>{let gr=Yr.scriptExecInfo[V];if(!gr?.stickyError)return Yr;return{...Yr,scriptExecInfo:{...Yr.scriptExecInfo,[V]:{...gr,dot:"idle",stickyError:!1}}}})},[]);return Ar.jsxDEV("div",{className:"ls-panel",children:[Ar.jsxDEV("div",{className:"ls-tabs",children:[Ar.jsxDEV("button",{className:`ls-tab-pill${v==="manage"?" ls-active":""}`,onClick:()=>h("manage"),children:[Ar.jsxDEV(Wo,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${v==="status"?" ls-active":""}`,onClick:()=>h("status"),children:[Ar.jsxDEV(Bh,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${v==="storage"?" ls-active":""}`,onClick:()=>h("storage"),children:[Ar.jsxDEV(dg,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[v==="manage"&&Ar.jsxDEV(R3,{scripts:u,activeContext:W,execInfo:m.scriptExecInfo,activeRunScriptId:m.activeScriptId,isRunning:m.isRunning,consoleHistory:m.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:vr,onScriptOpened:Mr,sendToBackend:i},void 0,!1,void 0,this),v==="status"&&Ar.jsxDEV(hL,{scripts:u,execInfo:m.scriptExecInfo,invocationCounts:a,injections:X,tools:S,sendToBackend:i},void 0,!1,void 0,this),v==="storage"&&Ar.jsxDEV($3,{variables:c,collections:wr,scripts:u,sendToBackend:i,inspectPath:p,inspectRecords:lr,inspectTotal:y,inspectError:x,inspectStats:Zr,inspectRefreshToken:Hr,onInspect:(V)=>{d(V),N(null),f(0),k(null)},dropTarget:er,dropTargetCount:Kr,onDrop:nr,onDropConfirm:()=>{if(!er)return;let V=er.path;if(p===V)d(null),N(null),f(0),k(null);i({type:"drop_collection",path:V}),nr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},vL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},hL=({scripts:g,execInfo:i,invocationCounts:v,injections:h,tools:u,sendToBackend:P})=>{let O=g.filter((H)=>H.type==="trigger"&&H.enabled),A=Object.fromEntries(g.map((H)=>[H.id,H.name])),[W,G]=Ye.useState(new Set),m=(H)=>{G((X)=>{let L=new Set(X);if(L.has(H))L.delete(H);else L.add(H);return L})};return Ar.jsxDEV("div",{className:"ls-status-list",children:[Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(Wo,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((H)=>{let X=i[H.id],L=X?.dot??"idle",S={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],C=H.triggers??[],c=v[H.id];return Ar.jsxDEV("div",{className:"ls-status-row",children:[Ar.jsxDEV("div",{className:"ls-status-row-main",children:[Ar.jsxDEV("span",{className:S,title:vL[L]},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-name",children:H.name},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-right",children:[c!==void 0&&c>0&&Ar.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${c} time${c!==1?"s":""} this session`,children:["×",c]},void 0,!0,void 0,this),X?.duration!==void 0&&L!=="running"&&Ar.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[X.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),C.length>0?Ar.jsxDEV("div",{className:"ls-status-events",children:C.map((rr)=>Ar.jsxDEV("span",{className:"ls-event-badge",children:[Ar.jsxDEV(Mi,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Ar.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&X?.error&&Ar.jsxDEV("div",{className:"ls-status-error-row",children:Ar.jsxDEV("span",{className:"ls-status-error-text",children:X.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(h1,{size:10},void 0,!1,void 0,this),"Active Tools",u.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):u.map((H)=>Ar.jsxDEV("div",{className:"ls-tool-row",children:[Ar.jsxDEV("div",{className:"ls-tool-name",title:H.description,children:H.name},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-tool-meta",children:[H.council_eligible&&Ar.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:H.scriptId,children:H.scriptName},void 0,!1,void 0,this),Ar.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${H.name}`,title:`Unregister "${H.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:H.name}),children:Ar.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},H.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(l1,{size:10},void 0,!1,void 0,this),"Active Injections",h.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:h.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:h.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):h.map((H)=>{let X=W.has(H.id);return Ar.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>m(H.id),children:[Ar.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${H.mode}`,title:H.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:H.mode==="intercept"?Ar.jsxDEV(Ch,{size:11},void 0,!1,void 0,this):Ar.jsxDEV(Zh,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-body",children:[Ar.jsxDEV("div",{className:"ls-inject-header-row",children:[Ar.jsxDEV("span",{className:"ls-inject-id",title:H.id,children:H.id},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-meta",children:[Ar.jsxDEV("span",{className:"ls-inject-role",children:H.role},void 0,!1,void 0,this),H.mode==="intercept"&&H.depth>0&&Ar.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${H.depth} message${H.depth!==1?"s":""}`,children:["d:",H.depth]},void 0,!0,void 0,this),H.ephemeral&&Ar.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Ar.jsxDEV(Qt,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:H.scriptId,children:A[H.scriptId]??H.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-chevron",children:X?Ar.jsxDEV(Mg,{size:10},void 0,!1,void 0,this):Ar.jsxDEV(mo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Ar.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:H.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},H.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var N1=Pr(ie(),1);var Cr=Pr(re(),1),I3=({onBackendMessage:g,sendToBackend:i})=>{let[v,h]=N1.useState(tw),[u,P]=N1.useState([]);N1.useEffect(()=>{let G=g((m)=>{let H=m;if(H.type==="scripts_updated")P(H.scripts);if(H.type==="settings_updated")h(H.settings)});return i({type:"get_settings"}),i({type:"get_scripts"}),G},[g,i]);let O=u.filter((G)=>G.type==="trigger").length,A=u.filter((G)=>G.type==="library").length,W=(G)=>{i({type:"update_settings",patch:{enabled:G}})};return Cr.jsxDEV("div",{className:"ls-settings",children:[Cr.jsxDEV("div",{className:"ls-settings-header",children:Cr.jsxDEV("span",{className:"ls-settings-title",children:[Cr.jsxDEV(Zl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-toggle-row",children:[Cr.jsxDEV("label",{className:"ls-toggle",children:[Cr.jsxDEV("input",{type:"checkbox",checked:v.enabled,onChange:(G)=>W(G.target.checked)},void 0,!1,void 0,this),Cr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-counts",children:[Cr.jsxDEV("div",{className:"ls-count-card",children:[Cr.jsxDEV(Wo,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-count-card",children:[Cr.jsxDEV(Xt,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-num",children:A},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV(Qt,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(v.scriptTimeoutMs/1000),onChange:(G)=>{let m=Math.max(5,Math.min(300,Number(G.target.value)||60));i({type:"update_settings",patch:{scriptTimeoutMs:m*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:v.consoleHistoryLimit,onChange:(G)=>{let m=Math.max(50,Math.min(2000,Number(G.target.value)||500));i({type:"update_settings",patch:{consoleHistoryLimit:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV(t1,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:v.editorFontSize,onChange:(G)=>{let m=Math.max(10,Math.min(24,Number(G.target.value)||12));i({type:"update_settings",patch:{editorFontSize:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:v.autosaveDebounceMs,onChange:(G)=>{let m=Math.max(300,Math.min(5000,Number(G.target.value)||1200));i({type:"update_settings",patch:{autosaveDebounceMs:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-template-field",children:[Cr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Cr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:v.defaultTriggerTemplate,onChange:(G)=>i({type:"update_settings",patch:{defaultTriggerTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-template-field",children:[Cr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Cr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:v.defaultLibraryTemplate,onChange:(G)=>i({type:"update_settings",patch:{defaultLibraryTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function bL(g){let i=g?.type;return typeof i==="string"&&i.startsWith("dom_")}var Xo=new Map;function e0(g,i){Xo.set(g,i)}function Sg(g){let i=Xo.get(g);for(let[v,h]of zi)if(h.elementId===g){if(i)i.removeEventListener(h.event,h.handler);zi.delete(v)}Xo.delete(g)}var Z1=new Map,B1=new Map,xt=new Map,C1=new Map,zi=new Map,S1=new Map,r0=new Map;function N3(g,i){return`${g}::${i}`}function F3(g,i){return`${g}:${i}`}function B3(g){let i=g.target,v={type:g.type};if(i){if(i.id)v.targetId=i.id;if("value"in i)v.targetValue=i.value;if("checked"in i)v.targetChecked=i.checked;if(i.dataset&&Object.keys(i.dataset).length>0){let h={};for(let[u,P]of Object.entries(i.dataset))if(P!==void 0)h[u]=P;v.dataset=h}}if(g instanceof MouseEvent)v.clientX=g.clientX,v.clientY=g.clientY;else if(typeof TouchEvent<"u"&&g instanceof TouchEvent){let h=g.touches[0]??g.changedTouches[0];if(h)v.clientX=h.clientX,v.clientY=h.clientY}if(g instanceof CustomEvent&&g.detail!==void 0)try{JSON.stringify(g.detail),v.detail=g.detail}catch{}if(g instanceof KeyboardEvent)v.key=g.key,v.code=g.code;return v}function uL(g,i){let v=B3(g),h={};for(let[X,L]of Object.entries(i.dataset))if(L!==void 0)h[X]=L;let u={};for(let X of Array.from(i.attributes)){if(X.name.startsWith("on"))continue;if(X.name.startsWith("data-"))continue;u[X.name]=X.value}let P={tagName:i.tagName,classList:Array.from(i.classList),dataset:h,attributes:u,textContent:(i.textContent??"").trim()};if(i.id)P.id=i.id;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){if(P.value=i.value,i instanceof HTMLInputElement&&(i.type==="checkbox"||i.type==="radio"))P.checked=i.checked}else if(i instanceof HTMLSelectElement)P.value=i.value,P.selectedIndex=i.selectedIndex,P.selectedText=i.options[i.selectedIndex]?.text;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement){let L=i.labels?.[0]?.textContent?.trim();if(L)P.label=L}let O=g,A=g,W={ctrl:g instanceof MouseEvent||g instanceof KeyboardEvent?O.ctrlKey||A.ctrlKey:!1,shift:g instanceof MouseEvent||g instanceof KeyboardEvent?O.shiftKey||A.shiftKey:!1,alt:g instanceof MouseEvent||g instanceof KeyboardEvent?O.altKey||A.altKey:!1,meta:g instanceof MouseEvent||g instanceof KeyboardEvent?O.metaKey||A.metaKey:!1};if(g instanceof MouseEvent)W.button=g.button;let G,m=i.closest("[data-message-id]");if(m){let X=m.getAttribute("data-message-id")??"";if(X){let C=((m.querySelector("[data-part]")??m).getAttribute?.("data-part")??"character")==="user"?"user":"assistant";G={id:X,role:C,swipeId:0}}}let H={...v,matched:P,modifiers:W};if(G)H.message=G;return H}function C3(g,i){if(g===void 0||g===!1)return!1;if(g===!0)return!0;let v=i,h=i;if(g.onKeys!==void 0){if(v.key===void 0||!g.onKeys.includes(v.key))return!1}if(g.onCodes!==void 0){if(v.code===void 0||!g.onCodes.includes(v.code))return!1}if(g.onButtons!==void 0){if(h.button===void 0||!g.onButtons.includes(h.button))return!1}if(g.whenModifiers!==void 0){let u={ctrl:v.ctrlKey??!1,shift:v.shiftKey??!1,alt:v.altKey??!1,meta:v.metaKey??!1},{require:P,exclude:O}=g.whenModifiers;if(P){for(let A of P)if(!u[A])return!1}if(O){for(let A of O)if(u[A])return!1}}return!0}function wL(g,i,v){let h=N3(g,i),u=r0.get(h);if(u){u.count++;return}let P=(O)=>{let A=O.target;if(!A)return;for(let W of S1.values()){if(W.root!==g||W.event!==i)continue;if(g==="chat"){let H=A.closest("[data-message-id]");if(!H)continue;if(W.messageId&&H.getAttribute("data-message-id")!==W.messageId)continue}let G=A.closest(W.selector);if(!G)continue;if(C3(W.preventDefault,O))O.preventDefault();if(W.stopPropagation)O.stopPropagation();let m=uL(O,G);v({type:"dom_delegate_event",delegationId:W.delegationId,data:m})}};document.body.addEventListener(i,P,!0),r0.set(h,{handler:P,count:1})}function PL(g,i){let v=N3(g,i),h=r0.get(v);if(!h)return;if(h.count--,h.count>0)return;document.body.removeEventListener(i,h.handler,!0),r0.delete(v)}function OL(g,i){return`@scope ([data-ls-script="${i}"]) {
${g}
}`}function AL(g,i=5000){let v=document.querySelector(g);if(v)return Promise.resolve(v);return new Promise((h,u)=>{let P=!1,O=new MutationObserver(()=>{let A=document.querySelector(g);if(A&&!P)P=!0,O.disconnect(),h(A)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),u(Error(`waitForElement: timeout for "${g}"`))},i)})}function qL(g){return g.querySelector('[class*="_bubble_"]')}var ll=new Map,HL=50;function ML(g,i,v){if(ll.size>=HL){let h=ll.keys().next().value;if(h)ll.get(h)?.cancel(),ll.delete(h)}ll.set(g,{scriptId:i,cancel:v})}function RL(g){for(let[i,v]of ll)if(v.scriptId===g)v.cancel(),ll.delete(i)}function Z3(g,i,v){let h=i((u)=>{if(!bL(u))return;let P=u;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:A,target:W,html:G,position:m,stableId:H,parentElementId:X}=P;if(Xo.has(A)){console.warn(`[LumiScript] dom_inject: elementId "${A}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${A}">${G}</div>`,S=null;if(X){let C=Xo.get(X);if(!C){console.warn(`[LumiScript] dom_inject: parentElementId "${X}" not in elementMap — drop`);break}let c=C.querySelector(W);if(!c){console.warn(`[LumiScript] dom_inject: selector "${W}" not found within parent "${X}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,c.insertAdjacentElement(m,rr),S=rr}else S=g.dom.inject(W,L,m);if(S){if(Xo.set(A,S),Z1.set(A,O),H)B1.set(F3(O,H),A)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:A,messageId:W,html:G,position:m,stableId:H}=P,X=(rr)=>{let wr=rr.querySelector("[data-part]"),ir=wr?.getAttribute("data-part")??"character",p=wr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",d=m==="header"?` data-ls-tint="${ir}"`:"",lr=` data-ls-mode="${p}"`,N=`<div data-ls-script="${O}" data-ls-el="${A}"${d}${lr}>${G}</div>`,y,f;if(m==="header")y=rr,f="afterbegin";else if(m==="footer"&&p==="minimal")y=rr,f="beforeend";else y=qL(rr)??rr,f="beforeend";let x=g.dom.inject(y,N,f);if(Xo.set(A,x),Z1.set(A,O),H)B1.set(F3(O,H),A)},L=`[data-message-id="${W}"]`,S=document.querySelector(L);if(S){X(S);break}let C=!1;ML(A,O,()=>{C=!0}),AL(L).then((rr)=>{if(ll.delete(A),C)return;X(rr)}).catch(()=>{ll.delete(A)});break}case"dom_update":{let O=Xo.get(P.elementId);if(!O)break;let A=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;A.innerHTML=P.html;break}case"dom_remove":{x3(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:A,css:W}=P,G=OL(W,O),m=g.dom.addStyle(G);xt.set(A,m),C1.set(A,O);break}case"dom_remove_style":{let O=xt.get(P.styleId);if(O)O(),xt.delete(P.styleId),C1.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:A,event:W,preventDefault:G}=P,m=Xo.get(O);if(!m)break;let H=(X)=>{if(C3(G,X))X.preventDefault();let L=B3(X);v({type:"dom_event",elementId:O,listenerId:A,event:W,data:L})};m.addEventListener(W,H),zi.set(A,{elementId:O,event:W,handler:H});break}case"dom_unlisten":{let O=zi.get(P.listenerId);if(!O)break;let A=Xo.get(O.elementId);if(A)A.removeEventListener(O.event,O.handler);zi.delete(P.listenerId);break}case"dom_delegate_register":{let{delegationId:O,scriptId:A,selector:W,event:G,root:m,messageId:H,preventDefault:X,stopPropagation:L}=P;S1.set(O,{delegationId:O,scriptId:A,selector:W,event:G,root:m,messageId:H,preventDefault:X,stopPropagation:L}),wL(m,G,v);break}case"dom_delegate_unregister":{let{delegationId:O,event:A}=P,W=S1.get(O);if(!W)break;S1.delete(O),PL(W.root,A);break}case"dom_cleanup_script":{let{scriptId:O}=P;RL(O);for(let[A,W]of Z1)if(W===O)x3(A);for(let[A,W]of C1)if(W===O){let G=xt.get(A);if(G)G();xt.delete(A),C1.delete(A)}for(let[A]of B1)if(A.startsWith(O+":"))B1.delete(A);break}case"dom_make_draggable":{let{elementId:O,handleSelector:A}=P,W=Xo.get(O);if(!W)break;let G=!1,m=!1;W.addEventListener("pointerdown",(H)=>{if(H.button!==0)return;if(A&&!H.target.closest(A))return;let X=W.firstElementChild?.firstElementChild??W.firstElementChild??W,L=X.getBoundingClientRect();X.style.transform="none",X.style.top=`${L.top}px`,X.style.left=`${L.left}px`,X.style.bottom="auto",X.style.right="auto",G=!0,m=!1;let S=H.clientX-L.left,C=H.clientY-L.top;X.style.cursor="grabbing";let c=(wr)=>{if(!G)return;m=!0,X.style.top=`${wr.clientY-C}px`,X.style.left=`${wr.clientX-S}px`},rr=()=>{if(!G)return;G=!1,X.style.cursor="",document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),H.preventDefault()}),W.addEventListener("click",(H)=>{if(m)H.stopImmediatePropagation(),H.preventDefault(),m=!1},!0);break}}});return()=>{h();for(let[,u]of ll)u.cancel();ll.clear();for(let[,u]of zi){let P=Xo.get(u.elementId);if(P)P.removeEventListener(u.event,u.handler)}zi.clear();for(let[u,P]of r0){let O=u.split("::")[1]??"";if(O)document.body.removeEventListener(O,P.handler,!0)}r0.clear(),S1.clear();for(let[,u]of Xo)try{u.remove()}catch{}Xo.clear(),Z1.clear(),B1.clear();for(let[,u]of xt)try{u()}catch{}xt.clear(),C1.clear()}}function x3(g){for(let[v,h]of zi)if(h.elementId===g){let u=Xo.get(g);if(u)u.removeEventListener(h.event,h.handler);zi.delete(v)}let i=Xo.get(g);if(i)try{i.remove()}catch{}Xo.delete(g),Z1.delete(g)}function WL(g){let i=g?.type;return i==="ls_modal_open"||i==="ls_modal_set_title"||i==="ls_modal_dismiss"}var $n=new Map;function S3(g,i,v){let h=i((u)=>{if(!WL(u))return;let P=u;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:A,rootElementId:W,options:G}=P;if($n.has(A))break;let m;try{m=g.ui.showModal({title:G.title,width:G.width,maxHeight:G.maxHeight,persistent:G.persistent})}catch(X){console.warn("[LumiScript] ctx.ui.showModal failed:",X),v({type:"ls_modal_dismissed",modalId:A});break}e0(W,m.root),m.root.setAttribute("data-ls-script",O),m.root.setAttribute("data-ls-modal",A);let H={modalId:A,rootElementId:W,handle:m,echoed:!1};$n.set(A,H),m.onDismiss(()=>{if(H.echoed)return;H.echoed=!0,Sg(W),$n.delete(A),v({type:"ls_modal_dismissed",modalId:A})}),v({type:"ls_modal_opened",modalId:A});break}case"ls_modal_set_title":{let O=$n.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=$n.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Sg(O.rootElementId),$n.delete(P.modalId),v({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{h();for(let u of $n.values()){try{u.handle.dismiss()}catch{}Sg(u.rootElementId)}$n.clear()}}function mL(g){return g?.type==="ls_context_menu_show"}function T3(g,i,v){let h=i(async(u)=>{if(!mL(u))return;let P=u,O=null;try{O=(await g.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(A){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",A)}v({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{h()}}function GL(g){let i=g?.type;return i==="ls_input_bar_action_register"||i==="ls_input_bar_action_set_label"||i==="ls_input_bar_action_set_subtitle"||i==="ls_input_bar_action_set_enabled"||i==="ls_input_bar_action_destroy"}var al=new Map;function XL(g,i){return`${g}:${i}`}function k3(g,i,v){let h=i((u)=>{if(!GL(u))return;let P=u,O=XL(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let A=al.get(O);if(A){try{A.destroy()}catch{}al.delete(O)}let W;try{W=g.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(G){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",G);break}al.set(O,W),W.onClick(()=>{v({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),v({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let A=al.get(O);if(!A)break;try{A.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let A=al.get(O);if(!A)break;if(typeof A.setSubtitle!=="function")break;try{A.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let A=al.get(O);if(!A)break;try{A.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let A=al.get(O);if(!A)break;try{A.destroy()}catch{}al.delete(O);break}}});return()=>{h();for(let u of al.values())try{u.destroy()}catch{}al.clear()}}function YL(g){let i=g?.type;return i==="ls_float_widget_create"||i==="ls_float_widget_move"||i==="ls_float_widget_set_visible"||i==="ls_float_widget_destroy"}var Qi=new Map;function D3(g,i,v){let h=i((u)=>{if(!YL(u))return;let P=u;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:A,rootElementId:W,options:G}=P,m=Qi.get(A);if(m){try{m.handle.destroy()}catch{}Sg(m.rootElementId),Qi.delete(A)}let H;try{H=g.ui.createFloatWidget({width:G.width,height:G.height,initialPosition:G.initialPosition,snapToEdge:G.snapToEdge,tooltip:G.tooltip,chromeless:G.chromeless})}catch(X){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",X);break}e0(W,H.root),H.root.setAttribute("data-ls-script",O),H.root.setAttribute("data-ls-widget",A),Qi.set(A,{widgetId:A,rootElementId:W,handle:H}),H.onDragEnd((X)=>{v({type:"ls_float_widget_drag_end",widgetId:A,x:X.x,y:X.y})}),v({type:"ls_float_widget_created",widgetId:A});break}case"ls_float_widget_move":{let O=Qi.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=Qi.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=Qi.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Sg(O.rootElementId),Qi.delete(P.widgetId);break}}});return()=>{h();for(let u of Qi.values()){try{u.handle.destroy()}catch{}Sg(u.rootElementId)}Qi.clear()}}function JL(g){let i=g?.type;return i==="ls_drawer_tab_register"||i==="ls_drawer_tab_set_title"||i==="ls_drawer_tab_set_short_name"||i==="ls_drawer_tab_set_badge"||i==="ls_drawer_tab_activate"||i==="ls_drawer_tab_destroy"}var il=new Map;function zL(g,i){return`${g}:${i}`}function a3(g,i,v){let h=i((u)=>{if(!JL(u))return;let P=u,O=zL(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let A=il.get(O);if(A){try{A.handle.destroy()}catch{}Sg(A.rootElementId),il.delete(O)}let W;try{W=g.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(G){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",G);break}e0(P.rootElementId,W.root),W.root.setAttribute("data-ls-script",P.scriptId),W.root.setAttribute("data-ls-tab",P.tabId),il.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:W}),W.onActivate(()=>{v({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),v({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let A=il.get(O);if(!A)break;try{A.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let A=il.get(O);if(!A)break;try{A.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let A=il.get(O);if(!A)break;try{A.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let A=il.get(O);if(!A)break;try{A.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let A=il.get(O);if(!A)break;try{A.handle.destroy()}catch{}Sg(A.rootElementId),il.delete(O);break}}});return()=>{h();for(let u of il.values()){try{u.handle.destroy()}catch{}Sg(u.rootElementId)}il.clear()}}var T1=Pr(re(),1);function Pfe(g){let i=[],v=g.dom.addStyle($R);i.push(v);let h=[],u=g.onBackendMessage((rr)=>{for(let wr of h)wr(rr)});i.push(u);let P=(rr)=>{return h.push(rr),()=>{let wr=h.indexOf(rr);if(wr!==-1)h.splice(wr,1)}},O=(rr)=>{g.sendToBackend(rr)},A=Z3(g,P,O);i.push(A);let W=S3(g,P,O);i.push(W);let G=T3(g,P,O);i.push(G);let m=k3(g,P,O);i.push(m);let H=D3(g,P,O);i.push(H);let X=a3(g,P,O);i.push(X),O({type:"frontend_ready"});let L=g.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),S=UP.createRoot(L.root);S.render(T1.jsxDEV(KP.StrictMode,{children:T1.jsxDEV(L3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>{try{S.unmount()}catch{}try{L.destroy()}catch{}});let C=g.ui.mount("settings_extensions"),c=UP.createRoot(C);return c.render(T1.jsxDEV(KP.StrictMode,{children:T1.jsxDEV(I3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>c.unmount()),()=>{for(let rr of i)try{rr()}catch{}g.dom.cleanup()}}export{Pfe as setup};
