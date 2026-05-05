var MJ=Object.create;var{getPrototypeOf:WJ,defineProperty:A6,getOwnPropertyNames:mJ}=Object;var GJ=Object.prototype.hasOwnProperty;function XJ(e){return this[e]}var YJ,JJ,tr=(e,v,b)=>{var n=e!=null&&typeof e==="object";if(n){var w=v?YJ??=new WeakMap:JJ??=new WeakMap,P=w.get(e);if(P)return P}b=e!=null?MJ(WJ(e)):{};let O=v||!e||!e.__esModule?A6(b,"default",{value:e,enumerable:!0}):b;for(let H of mJ(e))if(!GJ.call(O,H))A6(O,H,{get:XJ.bind(e,H),enumerable:!0});if(n)w.set(e,O);return O};var W1=(e,v)=>()=>(v||e((v={exports:{}}).exports,v),v.exports);var QJ=(e)=>e;function zJ(e,v){this[e]=QJ.bind(null,v)}var UJ=(e,v)=>{for(var b in v)A6(e,b,{get:v[b],enumerable:!0,configurable:!0,set:zJ.bind(v,b)})};var vg=W1((KJ,gt)=>{(function(){function e(M,I){Object.defineProperty(n.prototype,M,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function v(M){if(M===null||typeof M!=="object")return null;return M=$o&&M[$o]||M["@@iterator"],typeof M==="function"?M:null}function b(M,I){M=(M=M.constructor)&&(M.displayName||M.name)||"ReactClass";var gr=M+"."+I;br[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,M),br[gr]=!0)}function n(M,I,gr){this.props=M,this.context=I,this.refs=re,this.updater=gr||_o}function w(){}function P(M,I,gr){this.props=M,this.context=I,this.refs=re,this.updater=gr||_o}function O(){}function H(M){return""+M}function W(M){try{H(M);var I=!1}catch(Rr){I=!0}if(I){I=console;var gr=I.error,nr=typeof Symbol==="function"&&Symbol.toStringTag&&M[Symbol.toStringTag]||M.constructor.name||"Object";return gr.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",nr),H(M)}}function G(M){if(M==null)return null;if(typeof M==="function")return M.$$typeof===ri?null:M.displayName||M.name||null;if(typeof M==="string")return M;switch(M){case Gr:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case Zr:return"Suspense";case ir:return"SuspenseList";case Mg:return"Activity"}if(typeof M==="object")switch(typeof M.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),M.$$typeof){case Qr:return"Portal";case Or:return M.displayName||"Context";case or:return(M._context.displayName||"Context")+".Consumer";case qr:var I=M.render;return M=M.displayName,M||(M=I.displayName||I.name||"",M=M!==""?"ForwardRef("+M+")":"ForwardRef"),M;case Cr:return I=M.displayName||null,I!==null?I:G(M.type)||"Memo";case jr:I=M._payload,M=M._init;try{return G(M(I))}catch(gr){}}return null}function m(M){if(M===Gr)return"<>";if(typeof M==="object"&&M!==null&&M.$$typeof===jr)return"<...>";try{var I=G(M);return I?"<"+I+">":"<...>"}catch(gr){return"<...>"}}function q(){var M=Sr.A;return M===null?null:M.getOwner()}function X(){return Error("react-stack-top-frame")}function L(M){if(x1.call(M,"key")){var I=Object.getOwnPropertyDescriptor(M,"key").get;if(I&&I.isReactWarning)return!1}return M.key!==void 0}function S(M,I){function gr(){Tn||(Tn=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}gr.isReactWarning=!0,Object.defineProperty(M,"key",{get:gr,configurable:!0})}function T(){var M=G(this.type);return $0[M]||($0[M]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),M=this.props.ref,M!==void 0?M:null}function _(M,I,gr,nr,Rr,Fr){var xr=gr.ref;return M={$$typeof:vr,type:M,key:I,props:gr,_owner:nr},(xr!==void 0?xr:null)!==null?Object.defineProperty(M,"ref",{enumerable:!1,get:T}):Object.defineProperty(M,"ref",{enumerable:!1,value:null}),M._store={},Object.defineProperty(M._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(M,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(M,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Rr}),Object.defineProperty(M,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(M.props),Object.freeze(M)),M}function rr(M,I){return I=_(M.type,I,M.props,M._owner,M._debugStack,M._debugTask),M._store&&(I._store.validated=M._store.validated),I}function wr(M){lr(M)?M._store&&(M._store.validated=1):typeof M==="object"&&M!==null&&M.$$typeof===jr&&(M._payload.status==="fulfilled"?lr(M._payload.value)&&M._payload.value._store&&(M._payload.value._store.validated=1):M._store&&(M._store.validated=1))}function lr(M){return typeof M==="object"&&M!==null&&M.$$typeof===vr}function a(M){var I={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(gr){return I[gr]})}function p(M,I){return typeof M==="object"&&M!==null&&M.key!=null?(W(M.key),a(""+M.key)):I.toString(36)}function er(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status==="string"?M.then(O,O):(M.status="pending",M.then(function(I){M.status==="pending"&&(M.status="fulfilled",M.value=I)},function(I){M.status==="pending"&&(M.status="rejected",M.reason=I)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function N(M,I,gr,nr,Rr){var Fr=typeof M;if(Fr==="undefined"||Fr==="boolean")M=null;var xr=!1;if(M===null)xr=!0;else switch(Fr){case"bigint":case"string":case"number":xr=!0;break;case"object":switch(M.$$typeof){case vr:case Qr:xr=!0;break;case jr:return xr=M._init,N(xr(M._payload),I,gr,nr,Rr)}}if(xr){xr=M,Rr=Rr(xr);var eg=nr===""?"."+p(xr,0):nr;return tg(Rr)?(gr="",eg!=null&&(gr=eg.replace(B1,"$&/")+"/"),N(Rr,I,gr,"",function(Yo){return Yo})):Rr!=null&&(lr(Rr)&&(Rr.key!=null&&(xr&&xr.key===Rr.key||W(Rr.key)),gr=rr(Rr,gr+(Rr.key==null||xr&&xr.key===Rr.key?"":(""+Rr.key).replace(B1,"$&/")+"/")+eg),nr!==""&&xr!=null&&lr(xr)&&xr.key==null&&xr._store&&!xr._store.validated&&(gr._store.validated=2),Rr=gr),I.push(Rr)),1}if(xr=0,eg=nr===""?".":nr+":",tg(M))for(var Yr=0;Yr<M.length;Yr++)nr=M[Yr],Fr=eg+p(nr,Yr),xr+=N(nr,I,gr,Fr,Rr);else if(Yr=v(M),typeof Yr==="function")for(Yr===M.entries&&(N1||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N1=!0),M=Yr.call(M),Yr=0;!(nr=M.next()).done;)nr=nr.value,Fr=eg+p(nr,Yr++),xr+=N(nr,I,gr,Fr,Rr);else if(Fr==="object"){if(typeof M.then==="function")return N(er(M),I,gr,nr,Rr);throw I=String(M),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return xr}function y(M,I,gr){if(M==null)return M;var nr=[],Rr=0;return N(M,nr,"","",function(Fr){return I.call(gr,Fr,Rr++)}),nr}function f(M){if(M._status===-1){var I=M._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=M._result;var gr=I();if(gr.then(function(Rr){if(M._status===0||M._status===-1){M._status=1,M._result=Rr;var Fr=M._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Rr)}},function(Rr){if(M._status===0||M._status===-1){M._status=2,M._result=Rr;var Fr=M._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Rr)}}),I=M._ioInfo,I!=null){I.value=gr;var nr=gr.displayName;typeof nr==="string"&&(I.name=nr)}M._status===-1&&(M._status=0,M._result=gr)}if(M._status===1)return I=M._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw M._result}function Z(){var M=Sr.H;return M===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),M}function Mr(){Sr.asyncTransitions--}function Ar(M){if(I0===null)try{var I=("require"+Math.random()).slice(0,7);I0=(gt&&gt[I]).call(gt,"timers").setImmediate}catch(gr){I0=function(nr){Sn===!1&&(Sn=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Rr=new MessageChannel;Rr.port1.onmessage=nr,Rr.port2.postMessage(void 0)}}return I0(M)}function mr(M){return 1<M.length&&typeof AggregateError==="function"?AggregateError(M):M[0]}function Br(M,I){I!==F0-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F0=I}function k(M,I,gr){var nr=Sr.actQueue;if(nr!==null)if(nr.length!==0)try{s(nr),Ar(function(){return k(M,I,gr)});return}catch(Rr){Sr.thrownErrors.push(Rr)}else Sr.actQueue=null;0<Sr.thrownErrors.length?(nr=mr(Sr.thrownErrors),Sr.thrownErrors.length=0,gr(nr)):I(M)}function s(M){if(!N0){N0=!0;var I=0;try{for(;I<M.length;I++){var gr=M[I];do{Sr.didUsePromise=!1;var nr=gr(!1);if(nr!==null){if(Sr.didUsePromise){M[I]=gr,M.splice(0,I);return}gr=nr}else break}while(1)}M.length=0}catch(Rr){M.splice(0,I+1),Sr.thrownErrors.push(Rr)}finally{N0=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vr=Symbol.for("react.transitional.element"),Qr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),or=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),qr=Symbol.for("react.forward_ref"),Zr=Symbol.for("react.suspense"),ir=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Mg=Symbol.for("react.activity"),$o=Symbol.iterator,br={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(M){b(M,"forceUpdate")},enqueueReplaceState:function(M){b(M,"replaceState")},enqueueSetState:function(M){b(M,"setState")}},Xo=Object.assign,re={};Object.freeze(re),n.prototype.isReactComponent={},n.prototype.setState=function(M,I){if(typeof M!=="object"&&typeof M!=="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,I,"setState")},n.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};var ag={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Kv in ag)ag.hasOwnProperty(Kv)&&e(Kv,ag[Kv]);w.prototype=n.prototype,ag=P.prototype=new w,ag.constructor=P,Xo(ag,n.prototype),ag.isPureReactComponent=!0;var tg=Array.isArray,ri=Symbol.for("react.client.reference"),Sr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},x1=Object.prototype.hasOwnProperty,Wg=console.createTask?console.createTask:function(){return null};ag={react_stack_bottom_frame:function(M){return M()}};var Tn,hl,$0={},L0=ag.react_stack_bottom_frame.bind(ag,X)(),Bt=Wg(m(X)),N1=!1,B1=/\/+/g,Uv=typeof reportError==="function"?reportError:function(M){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",M);return}console.error(M)},Sn=!1,I0=null,F0=0,x0=!1,N0=!1,gi=typeof queueMicrotask==="function"?function(M){queueMicrotask(function(){return queueMicrotask(M)})}:Ar;ag=Object.freeze({__proto__:null,c:function(M){return Z().useMemoCache(M)}});var Kv={map:y,forEach:function(M,I,gr){y(M,function(){I.apply(this,arguments)},gr)},count:function(M){var I=0;return y(M,function(){I++}),I},toArray:function(M){return y(M,function(I){return I})||[]},only:function(M){if(!lr(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};KJ.Activity=Mg,KJ.Children=Kv,KJ.Component=n,KJ.Fragment=Gr,KJ.Profiler=F,KJ.PureComponent=P,KJ.StrictMode=V,KJ.Suspense=Zr,KJ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sr,KJ.__COMPILER_RUNTIME=ag,KJ.act=function(M){var I=Sr.actQueue,gr=F0;F0++;var nr=Sr.actQueue=I!==null?I:[],Rr=!1;try{var Fr=M()}catch(Yr){Sr.thrownErrors.push(Yr)}if(0<Sr.thrownErrors.length)throw Br(I,gr),M=mr(Sr.thrownErrors),Sr.thrownErrors.length=0,M;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var xr=Fr;return gi(function(){Rr||x0||(x0=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Yr,Yo){Rr=!0,xr.then(function(ge){if(Br(I,gr),gr===0){try{s(nr),Ar(function(){return k(ge,Yr,Yo)})}catch(oi){Sr.thrownErrors.push(oi)}if(0<Sr.thrownErrors.length){var $v=mr(Sr.thrownErrors);Sr.thrownErrors.length=0,Yo($v)}}else Yr(ge)},function(ge){Br(I,gr),0<Sr.thrownErrors.length?(ge=mr(Sr.thrownErrors),Sr.thrownErrors.length=0,Yo(ge)):Yo(ge)})}}}var eg=Fr;if(Br(I,gr),gr===0&&(s(nr),nr.length!==0&&gi(function(){Rr||x0||(x0=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sr.actQueue=null),0<Sr.thrownErrors.length)throw M=mr(Sr.thrownErrors),Sr.thrownErrors.length=0,M;return{then:function(Yr,Yo){Rr=!0,gr===0?(Sr.actQueue=nr,Ar(function(){return k(eg,Yr,Yo)})):Yr(eg)}}},KJ.cache=function(M){return function(){return M.apply(null,arguments)}},KJ.cacheSignal=function(){return null},KJ.captureOwnerStack=function(){var M=Sr.getCurrentStack;return M===null?null:M()},KJ.cloneElement=function(M,I,gr){if(M===null||M===void 0)throw Error("The argument must be a React element, but you passed "+M+".");var nr=Xo({},M.props),Rr=M.key,Fr=M._owner;if(I!=null){var xr;r:{if(x1.call(I,"ref")&&(xr=Object.getOwnPropertyDescriptor(I,"ref").get)&&xr.isReactWarning){xr=!1;break r}xr=I.ref!==void 0}xr&&(Fr=q()),L(I)&&(W(I.key),Rr=""+I.key);for(eg in I)!x1.call(I,eg)||eg==="key"||eg==="__self"||eg==="__source"||eg==="ref"&&I.ref===void 0||(nr[eg]=I[eg])}var eg=arguments.length-2;if(eg===1)nr.children=gr;else if(1<eg){xr=Array(eg);for(var Yr=0;Yr<eg;Yr++)xr[Yr]=arguments[Yr+2];nr.children=xr}nr=_(M.type,Rr,nr,Fr,M._debugStack,M._debugTask);for(Rr=2;Rr<arguments.length;Rr++)wr(arguments[Rr]);return nr},KJ.createContext=function(M){return M={$$typeof:Or,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:or,_context:M},M._currentRenderer=null,M._currentRenderer2=null,M},KJ.createElement=function(M,I,gr){for(var nr=2;nr<arguments.length;nr++)wr(arguments[nr]);nr={};var Rr=null;if(I!=null)for(Yr in hl||!("__self"in I)||"key"in I||(hl=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(W(I.key),Rr=""+I.key),I)x1.call(I,Yr)&&Yr!=="key"&&Yr!=="__self"&&Yr!=="__source"&&(nr[Yr]=I[Yr]);var Fr=arguments.length-2;if(Fr===1)nr.children=gr;else if(1<Fr){for(var xr=Array(Fr),eg=0;eg<Fr;eg++)xr[eg]=arguments[eg+2];Object.freeze&&Object.freeze(xr),nr.children=xr}if(M&&M.defaultProps)for(Yr in Fr=M.defaultProps,Fr)nr[Yr]===void 0&&(nr[Yr]=Fr[Yr]);Rr&&S(nr,typeof M==="function"?M.displayName||M.name||"Unknown":M);var Yr=1e4>Sr.recentlyCreatedOwnerStacks++;return _(M,Rr,nr,q(),Yr?Error("react-stack-top-frame"):L0,Yr?Wg(m(M)):Bt)},KJ.createRef=function(){var M={current:null};return Object.seal(M),M},KJ.forwardRef=function(M){M!=null&&M.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof M!=="function"?console.error("forwardRef requires a render function but was given %s.",M===null?"null":typeof M):M.length!==0&&M.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",M.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),M!=null&&M.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:qr,render:M},gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(nr){gr=nr,M.name||M.displayName||(Object.defineProperty(M,"name",{value:nr}),M.displayName=nr)}}),I},KJ.isValidElement=lr,KJ.lazy=function(M){M={_status:-1,_result:M};var I={$$typeof:jr,_payload:M,_init:f},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return M._ioInfo=gr,I._debugInfo=[{awaited:gr}],I},KJ.memo=function(M,I){M==null&&console.error("memo: The first argument must be a component. Instead received: %s",M===null?"null":typeof M),I={$$typeof:Cr,type:M,compare:I===void 0?null:I};var gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(nr){gr=nr,M.name||M.displayName||(Object.defineProperty(M,"name",{value:nr}),M.displayName=nr)}}),I},KJ.startTransition=function(M){var I=Sr.T,gr={};gr._updatedFibers=new Set,Sr.T=gr;try{var nr=M(),Rr=Sr.S;Rr!==null&&Rr(gr,nr),typeof nr==="object"&&nr!==null&&typeof nr.then==="function"&&(Sr.asyncTransitions++,nr.then(Mr,Mr),nr.then(O,Uv))}catch(Fr){Uv(Fr)}finally{I===null&&gr._updatedFibers&&(M=gr._updatedFibers.size,gr._updatedFibers.clear(),10<M&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&gr.types!==null&&(I.types!==null&&I.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=gr.types),Sr.T=I}},KJ.unstable_useCacheRefresh=function(){return Z().useCacheRefresh()},KJ.use=function(M){return Z().use(M)},KJ.useActionState=function(M,I,gr){return Z().useActionState(M,I,gr)},KJ.useCallback=function(M,I){return Z().useCallback(M,I)},KJ.useContext=function(M){var I=Z();return M.$$typeof===or&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(M)},KJ.useDebugValue=function(M,I){return Z().useDebugValue(M,I)},KJ.useDeferredValue=function(M,I){return Z().useDeferredValue(M,I)},KJ.useEffect=function(M,I){return M==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Z().useEffect(M,I)},KJ.useEffectEvent=function(M){return Z().useEffectEvent(M)},KJ.useId=function(){return Z().useId()},KJ.useImperativeHandle=function(M,I,gr){return Z().useImperativeHandle(M,I,gr)},KJ.useInsertionEffect=function(M,I){return M==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Z().useInsertionEffect(M,I)},KJ.useLayoutEffect=function(M,I){return M==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Z().useLayoutEffect(M,I)},KJ.useMemo=function(M,I){return Z().useMemo(M,I)},KJ.useOptimistic=function(M,I){return Z().useOptimistic(M,I)},KJ.useReducer=function(M,I,gr){return Z().useReducer(M,I,gr)},KJ.useRef=function(M){return Z().useRef(M)},KJ.useState=function(M){return Z().useState(M)},KJ.useSyncExternalStore=function(M,I,gr){return Z().useSyncExternalStore(M,I,gr)},KJ.useTransition=function(){return Z().useTransition()},KJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var tM=W1(($J)=>{(function(){function e(){if(a=!1,y){var k=$J.unstable_now();Mr=k;var s=!0;try{r:{wr=!1,lr&&(lr=!1,er(f),f=-1),rr=!0;var vr=_;try{g:{P(k);for(T=b(X);T!==null&&!(T.expirationTime>k&&H());){var Qr=T.callback;if(typeof Qr==="function"){T.callback=null,_=T.priorityLevel;var Gr=Qr(T.expirationTime<=k);if(k=$J.unstable_now(),typeof Gr==="function"){T.callback=Gr,P(k),s=!0;break g}T===b(X)&&n(X),P(k)}else n(X);T=b(X)}if(T!==null)s=!0;else{var V=b(L);V!==null&&W(O,V.startTime-k),s=!1}}break r}finally{T=null,_=vr,rr=!1}s=void 0}}finally{s?Ar():y=!1}}}function v(k,s){var vr=k.length;k.push(s);r:for(;0<vr;){var Qr=vr-1>>>1,Gr=k[Qr];if(0<w(Gr,s))k[Qr]=s,k[vr]=Gr,vr=Qr;else break r}}function b(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var s=k[0],vr=k.pop();if(vr!==s){k[0]=vr;r:for(var Qr=0,Gr=k.length,V=Gr>>>1;Qr<V;){var F=2*(Qr+1)-1,or=k[F],Or=F+1,qr=k[Or];if(0>w(or,vr))Or<Gr&&0>w(qr,or)?(k[Qr]=qr,k[Or]=vr,Qr=Or):(k[Qr]=or,k[F]=vr,Qr=F);else if(Or<Gr&&0>w(qr,vr))k[Qr]=qr,k[Or]=vr,Qr=Or;else break r}}return s}function w(k,s){var vr=k.sortIndex-s.sortIndex;return vr!==0?vr:k.id-s.id}function P(k){for(var s=b(L);s!==null;){if(s.callback===null)n(L);else if(s.startTime<=k)n(L),s.sortIndex=s.expirationTime,v(X,s);else break;s=b(L)}}function O(k){if(lr=!1,P(k),!wr)if(b(X)!==null)wr=!0,y||(y=!0,Ar());else{var s=b(L);s!==null&&W(O,s.startTime-k)}}function H(){return a?!0:$J.unstable_now()-Mr<Z?!1:!0}function W(k,s){f=p(function(){k($J.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),$J.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var G=performance;$J.unstable_now=function(){return G.now()}}else{var m=Date,q=m.now();$J.unstable_now=function(){return m.now()-q}}var X=[],L=[],S=1,T=null,_=3,rr=!1,wr=!1,lr=!1,a=!1,p=typeof setTimeout==="function"?setTimeout:null,er=typeof clearTimeout==="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null,y=!1,f=-1,Z=5,Mr=-1;if(typeof N==="function")var Ar=function(){N(e)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,Br=mr.port2;mr.port1.onmessage=e,Ar=function(){Br.postMessage(null)}}else Ar=function(){p(e,0)};$J.unstable_IdlePriority=5,$J.unstable_ImmediatePriority=1,$J.unstable_LowPriority=4,$J.unstable_NormalPriority=3,$J.unstable_Profiling=null,$J.unstable_UserBlockingPriority=2,$J.unstable_cancelCallback=function(k){k.callback=null},$J.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<k?Math.floor(1000/k):5},$J.unstable_getCurrentPriorityLevel=function(){return _},$J.unstable_next=function(k){switch(_){case 1:case 2:case 3:var s=3;break;default:s=_}var vr=_;_=s;try{return k()}finally{_=vr}},$J.unstable_requestPaint=function(){a=!0},$J.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var vr=_;_=k;try{return s()}finally{_=vr}},$J.unstable_scheduleCallback=function(k,s,vr){var Qr=$J.unstable_now();switch(typeof vr==="object"&&vr!==null?(vr=vr.delay,vr=typeof vr==="number"&&0<vr?Qr+vr:Qr):vr=Qr,k){case 1:var Gr=-1;break;case 2:Gr=250;break;case 5:Gr=1073741823;break;case 4:Gr=1e4;break;default:Gr=5000}return Gr=vr+Gr,k={id:S++,callback:s,priorityLevel:k,startTime:vr,expirationTime:Gr,sortIndex:-1},vr>Qr?(k.sortIndex=vr,v(L,k),b(X)===null&&k===b(L)&&(lr?(er(f),f=-1):lr=!0,W(O,vr-Qr))):(k.sortIndex=Gr,v(X,k),wr||rr||(wr=!0,y||(y=!0,Ar()))),k},$J.unstable_shouldYield=H,$J.unstable_wrapCallback=function(k){var s=_;return function(){var vr=_;_=s;try{return k.apply(this,arguments)}finally{_=vr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var PM=W1((LJ)=>{var q6=tr(vg());(function(){function e(){}function v(m){return""+m}function b(m,q,X){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{v(L);var S=!1}catch(T){S=!0}return S&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),v(L)),{$$typeof:W,key:L==null?null:""+L,children:m,containerInfo:q,implementation:X}}function n(m,q){if(m==="font")return"";if(typeof q==="string")return q==="use-credentials"?q:""}function w(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":'something with type "'+typeof m+'"'}function P(m){return m===null?"`null`":m===void 0?"`undefined`":m===""?"an empty string":typeof m==="string"?JSON.stringify(m):typeof m==="number"?"`"+m+"`":'something with type "'+typeof m+'"'}function O(){var m=G.H;return m===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),m}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var H={d:{f:e,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},W=Symbol.for("react.portal"),G=q6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),LJ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,LJ.createPortal=function(m,q){var X=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error("Target container is not a DOM element.");return b(m,q,null,X)},LJ.flushSync=function(m){var q=G.T,X=H.p;try{if(G.T=null,H.p=2,m)return m()}finally{G.T=q,H.p=X,H.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},LJ.preconnect=function(m,q){typeof m==="string"&&m?q!=null&&typeof q!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(q)):q!=null&&typeof q.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",w(q.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",w(m)),typeof m==="string"&&(q?(q=q.crossOrigin,q=typeof q==="string"?q==="use-credentials"?q:"":void 0):q=null,H.d.C(m,q))},LJ.prefetchDNS=function(m){if(typeof m!=="string"||!m)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",w(m));else if(1<arguments.length){var q=arguments[1];typeof q==="object"&&q.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q))}typeof m==="string"&&H.d.D(m)},LJ.preinit=function(m,q){if(typeof m==="string"&&m?q==null||typeof q!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(q)):q.as!=="style"&&q.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(q.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",w(m)),typeof m==="string"&&q&&typeof q.as==="string"){var X=q.as,L=n(X,q.crossOrigin),S=typeof q.integrity==="string"?q.integrity:void 0,T=typeof q.fetchPriority==="string"?q.fetchPriority:void 0;X==="style"?H.d.S(m,typeof q.precedence==="string"?q.precedence:void 0,{crossOrigin:L,integrity:S,fetchPriority:T}):X==="script"&&H.d.X(m,{crossOrigin:L,integrity:S,fetchPriority:T,nonce:typeof q.nonce==="string"?q.nonce:void 0})}},LJ.preinitModule=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+w(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+w(q)+".":q&&("as"in q)&&q.as!=="script"&&(X+=" The `as` option encountered was "+P(q.as)+"."),X)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",X);else switch(X=q&&typeof q.as==="string"?q.as:"script",X){case"script":break;default:X=P(X),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',X,m)}if(typeof m==="string")if(typeof q==="object"&&q!==null){if(q.as==null||q.as==="script")X=n(q.as,q.crossOrigin),H.d.M(m,{crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0})}else q==null&&H.d.M(m)},LJ.preload=function(m,q){var X="";if(typeof m==="string"&&m||(X+=" The `href` argument encountered was "+w(m)+"."),q==null||typeof q!=="object"?X+=" The `options` argument encountered was "+w(q)+".":typeof q.as==="string"&&q.as||(X+=" The `as` option encountered was "+w(q.as)+"."),X&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',X),typeof m==="string"&&typeof q==="object"&&q!==null&&typeof q.as==="string"){X=q.as;var L=n(X,q.crossOrigin);H.d.L(m,X,{crossOrigin:L,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0,type:typeof q.type==="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority==="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy==="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet==="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes==="string"?q.imageSizes:void 0,media:typeof q.media==="string"?q.media:void 0})}},LJ.preloadModule=function(m,q){var X="";typeof m==="string"&&m||(X+=" The `href` argument encountered was "+w(m)+"."),q!==void 0&&typeof q!=="object"?X+=" The `options` argument encountered was "+w(q)+".":q&&("as"in q)&&typeof q.as!=="string"&&(X+=" The `as` option encountered was "+w(q.as)+"."),X&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',X),typeof m==="string"&&(q?(X=n(q.as,q.crossOrigin),H.d.m(m,{as:typeof q.as==="string"&&q.as!=="script"?q.as:void 0,crossOrigin:X,integrity:typeof q.integrity==="string"?q.integrity:void 0})):H.d.m(m))},LJ.requestFormReset=function(m){H.d.r(m)},LJ.unstable_batchedUpdates=function(m,q){return m(q)},LJ.useFormState=function(m,q,X){return O().useFormState(m,q,X)},LJ.useFormStatus=function(){return O().useHostTransitionStatus()},LJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Ch=W1((VI,OM)=>{OM.exports=PM()});var HM=W1((IJ)=>{var lg=tr(tM()),Th=tr(vg()),R6=tr(Ch());(function(){function e(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function v(r,g,o,l){if(o>=g.length)return l;var h=g[o],i=eo(r)?r.slice():cr({},r);return i[h]=v(r[h],g,o+1,l),i}function b(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(g[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return n(r,g,o,0)}}function n(r,g,o,l){var h=g[l],i=eo(r)?r.slice():cr({},r);return l+1===g.length?(i[o[l]]=i[h],eo(i)?i.splice(h,1):delete i[h]):i[h]=n(r[h],g,o,l+1),i}function w(r,g,o){var l=g[o],h=eo(r)?r.slice():cr({},r);if(o+1===g.length)return eo(h)?h.splice(l,1):delete h[l],h;return h[l]=w(r[l],g,o+1),h}function P(){return!1}function O(){return null}function H(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function W(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function G(){}function m(){}function q(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function X(r,g,o,l){return new bG(r,g,o,l)}function L(r,g){r.context===jv&&(B2(r.current,2,g,r,null,null),f1())}function S(r,g){if(Ue!==null){var o=g.staleFamilies;g=g.updatedFamilies,Ui(),R8(r.current,g,o),f1()}}function T(r){Ue=r}function _(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function wr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function lr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,l=g;;){var h=o.return;if(h===null)break;var i=h.alternate;if(i===null){if(l=h.return,l!==null){o=l;continue}break}if(h.child===i.child){for(i=h.child;i;){if(i===o)return a(h),r;if(i===l)return a(h),g;i=i.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=h,l=i;else{for(var u=!1,t=h.child;t;){if(t===o){u=!0,o=h,l=i;break}if(t===l){u=!0,l=h,o=i;break}t=t.sibling}if(!u){for(t=i.child;t;){if(t===o){u=!0,o=i,l=h;break}if(t===l){u=!0,l=i,o=h;break}t=t.sibling}if(!u)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function er(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=er(r),g!==null)return g;r=r.sibling}return null}function N(r){if(r===null||typeof r!=="object")return null;return r=JA&&r[JA]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===KX?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case oh:return"Fragment";case D2:return"Profiler";case fu:return"StrictMode";case _2:return"Suspense";case y2:return"SuspenseList";case E2:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case gh:return"Portal";case Yl:return r.displayName||"Context";case V2:return(r._context.displayName||"Context")+".Consumer";case Ci:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ju:return g=r.displayName||null,g!==null?g:y(r.type)||"Memo";case ue:g=r._payload,r=r._init;try{return y(r(g))}catch(o){}}return null}function f(r){return typeof r.tag==="number"?Z(r):typeof r.name==="string"?r.name:null}function Z(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(g);case 8:return g===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return Z(r.return)}return null}function Mr(r){return{current:r}}function Ar(r,g){0>sl?console.error("Unexpected pop."):(g!==a2[sl]&&console.error("Unexpected Fiber popped."),r.current=c2[sl],c2[sl]=null,a2[sl]=null,sl--)}function mr(r,g,o){sl++,c2[sl]=r.current,a2[sl]=o,r.current=g}function Br(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){mr(_v,g,r),mr(Ti,r,r),mr(Vv,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?fH(g):Pv:Pv;break;default:if(o=g.tagName,g=g.namespaceURI)g=fH(g),g=jH(g,o);else switch(o){case"svg":g=Bh;break;case"math":g=aw;break;default:g=Pv}}o=o.toLowerCase(),o=VP(null,o),o={context:g,ancestorInfo:o},Ar(Vv,r),mr(Vv,o,r)}function s(r){Ar(Vv,r),Ar(Ti,r),Ar(_v,r)}function vr(){return Br(Vv.current)}function Qr(r){r.memoizedState!==null&&mr(pu,r,r);var g=Br(Vv.current),o=r.type,l=jH(g.context,o);o=VP(g.ancestorInfo,o),l={context:l,ancestorInfo:o},g!==l&&(mr(Ti,r,r),mr(Vv,l,r))}function Gr(r){Ti.current===r&&(Ar(Vv,r),Ar(Ti,r)),pu.current===r&&(Ar(pu,r),$b._currentValue=M1)}function V(){}function F(){if(Si===0){QA=console.log,zA=console.info,UA=console.warn,KA=console.error,$A=console.group,LA=console.groupCollapsed,IA=console.groupEnd;var r={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Si++}function or(){if(Si--,Si===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:QA}),info:cr({},r,{value:zA}),warn:cr({},r,{value:UA}),error:cr({},r,{value:KA}),group:cr({},r,{value:$A}),groupCollapsed:cr({},r,{value:LA}),groupEnd:cr({},r,{value:IA})})}0>Si&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Or(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function qr(r){if(f2===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);f2=g&&g[1]||"",FA=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+f2+r+FA}function Zr(r,g){if(!r||j2)return"";var o=p2.get(r);if(o!==void 0)return o;j2=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=C.H,C.H=null,F();try{var h={DetermineComponentFrameRoot:function(){try{if(g){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(hr){var x=hr}Reflect.construct(r,[],J)}else{try{J.call()}catch(hr){x=hr}r.call(J.prototype)}}else{try{throw Error()}catch(hr){x=hr}(J=r())&&typeof J.catch==="function"&&J.catch(function(){})}}catch(hr){if(hr&&x&&typeof hr.stack==="string")return[hr.stack,x.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=h.DetermineComponentFrameRoot(),t=u[0],A=u[1];if(t&&A){var R=t.split(`
`),K=A.split(`
`);for(u=i=0;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(i===R.length||u===K.length)for(i=R.length-1,u=K.length-1;1<=i&&0<=u&&R[i]!==K[u];)u--;for(;1<=i&&0<=u;i--,u--)if(R[i]!==K[u]){if(i!==1||u!==1)do if(i--,u--,0>u||R[i]!==K[u]){var $=`
`+R[i].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&p2.set(r,$),$}while(1<=i&&0<=u);break}}}finally{j2=!1,C.H=l,or(),Error.prepareStackTrace=o}return R=(R=r?r.displayName||r.name:"")?qr(R):"",typeof r==="function"&&p2.set(r,R),R}function ir(r,g){switch(r.tag){case 26:case 27:case 5:return qr(r.type);case 16:return qr("Lazy");case 13:return r.child!==g&&g!==null?qr("Suspense Fallback"):qr("Suspense");case 19:return qr("SuspenseList");case 0:case 15:return Zr(r.type,!1);case 11:return Zr(r.type.render,!1);case 1:return Zr(r.type,!0);case 31:return qr("Activity");default:return""}}function Cr(r){try{var g="",o=null;do{g+=ir(r,o);var l=r._debugInfo;if(l)for(var h=l.length-1;0<=h;h--){var i=l[h];if(typeof i.name==="string"){var u=g;r:{var{name:t,env:A,debugLocation:R}=i;if(R!=null){var K=Or(R),$=K.lastIndexOf(`
`),J=$===-1?K:K.slice($+1);if(J.indexOf(t)!==-1){var x=`
`+J;break r}}x=qr(t+(A?" ["+A+"]":""))}g=u+x}}o=r,r=r.return}while(r);return g}catch(hr){return`
Error generating stack: `+hr.message+`
`+hr.stack}}function jr(r){return(r=r?r.displayName||r.name:"")?qr(r):""}function Mg(){if(we===null)return null;var r=we._debugOwner;return r!=null?f(r):null}function $o(){if(we===null)return"";var r=we;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=qr(r.type);break;case 13:g+=qr("Suspense");break;case 19:g+=qr("SuspenseList");break;case 31:g+=qr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=jr(r.type));break;case 11:r._debugOwner||g!==""||(g+=jr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var h=Or(l);h!==""&&(g+=`
`+h)}}else if(r.debugStack!=null){var i=r.debugStack;(r=r.owner)&&i&&(g+=`
`+Or(i))}else break;var u=g}catch(t){u=`
Error generating stack: `+t.message+`
`+t.stack}return u}function br(r,g,o,l,h,i,u){var t=we;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,l,h,i,u)):g(o,l,h,i,u)}finally{_o(t)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){C.getCurrentStack=r===null?null:$o,Jl=!1,we=r}function Xo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function re(r){try{return ag(r),!1}catch(g){return!0}}function ag(r){return""+r}function tg(r,g){if(re(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,Xo(r)),ag(r)}function ri(r,g){if(re(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,Xo(r)),ag(r)}function Sr(r){if(re(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Xo(r)),ag(r)}function x1(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{lh=g.inject(r),Qo=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Wg(r){if(typeof BX==="function"&&ZX(r),Qo&&typeof Qo.setStrictMode==="function")try{Qo.setStrictMode(lh,r)}catch(g){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",g))}}function Tn(r){return r>>>=0,r===0?32:31-(CX(r)/TX|0)|0}function hl(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function $0(r,g,o){var l=r.pendingLanes;if(l===0)return 0;var h=0,i=r.suspendedLanes,u=r.pingedLanes;r=r.warmLanes;var t=l&134217727;return t!==0?(l=t&~i,l!==0?h=hl(l):(u&=t,u!==0?h=hl(u):o||(o=t&~r,o!==0&&(h=hl(o))))):(t=l&~i,t!==0?h=hl(t):u!==0?h=hl(u):o||(o=l&~r,o!==0&&(h=hl(o)))),h===0?0:g!==0&&g!==h&&(g&i)===0&&(i=h&-h,o=g&-g,i>=o||i===32&&(o&4194048)!==0)?g:h}function L0(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Bt(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function N1(){var r=rw;return rw<<=1,(rw&62914560)===0&&(rw=4194304),r}function B1(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function Uv(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Sn(r,g,o,l,h,i){var u=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:t,expirationTimes:A,hiddenUpdates:R}=r;for(o=u&~o;0<o;){var K=31-Io(o),$=1<<K;t[K]=0,A[K]=-1;var J=R[K];if(J!==null)for(R[K]=null,K=0;K<J.length;K++){var x=J[K];x!==null&&(x.lane&=-536870913)}o&=~$}l!==0&&I0(r,l,0),i!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=i&~(u&~g))}function I0(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-Io(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function F0(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var l=31-Io(o),h=1<<l;h&g|r[l]&g&&(r[l]|=g),o&=~h}}function x0(r,g){var o=g&-g;return o=(o&42)!==0?1:N0(o),(o&(r.suspendedLanes|g))!==0?0:o}function N0(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function gi(r,g,o){if(zl)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-Io(o),h=1<<l;r[l].add(g),o&=~h}}function Kv(r,g){if(zl)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<g;){var h=31-Io(g);r=1<<h,h=o[h],0<h.size&&(h.forEach(function(i){var u=i.alternate;u!==null&&l.has(u)||l.add(i)}),h.clear()),g&=~r}}function M(r){return r&=-r,te!==0&&te<r?_e!==0&&_e<r?(r&134217727)!==0?Ul:gw:_e:te}function I(){var r=bg.p;if(r!==0)return r;return r=window.event,r===void 0?Ul:RA(r.type)}function gr(r,g){var o=bg.p;try{return bg.p=r,g()}finally{bg.p=o}}function nr(r){delete r[qo],delete r[Fo],delete r[o4],delete r[SX],delete r[kX]}function Rr(r){var g=r[qo];if(g)return g;for(var o=r.parentNode;o;){if(g=o[Ev]||o[qo]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=lA(r);r!==null;){if(o=r[qo])return o;r=lA(r)}return g}r=o,o=r.parentNode}return null}function Fr(r){if(r=r[qo]||r[Ev]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function xr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function eg(r){var g=r[xA];return g||(g=r[xA]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Yr(r){r[ki]=!0}function Yo(r,g){ge(r,g),ge(r+"Capture",g)}function ge(r,g){p0[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p0[r]=g;var o=r.toLowerCase();e4[o]=r,r==="onDoubleClick"&&(e4.ondblclick=r);for(r=0;r<g.length;r++)NA.add(g[r])}function $v(r,g){DX[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function oi(r){if(Ve.call(ZA,r))return!0;if(Ve.call(BA,r))return!1;if(VX.test(r))return ZA[r]=!0;return BA[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function UP(r,g,o){if(oi(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return tg(o,g),r===""+o?o:r}}function kn(r,g,o){if(oi(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}tg(o,g),r.setAttribute(g,""+o)}}function Dn(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}tg(o,g),r.setAttribute(g,""+o)}}function _l(r,g,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}tg(l,o),r.setAttributeNS(g,o,""+l)}}function Xe(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Sr(r),r;default:return""}}function KP(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function T3(r,g,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:h,set:i}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return h.call(this)},set:function(u){Sr(u),o=""+u,i.call(this,u)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(u){Sr(u),o=""+u},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function Zt(r){if(!r._valueTracker){var g=KP(r)?"checked":"value";r._valueTracker=T3(r,g,""+r[g])}}function $P(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),l="";return r&&(l=KP(r)?r.checked?"true":"false":r.value),r=l,r!==o?(g.setValue(r),!0):!1}function Vn(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Ye(r){return r.replace(_X,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function LP(r,g){g.checked===void 0||g.defaultChecked===void 0||TA||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Mg()||"A component",g.type),TA=!0),g.value===void 0||g.defaultValue===void 0||CA||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Mg()||"A component",g.type),CA=!0)}function Ct(r,g,o,l,h,i,u,t){if(r.name="",u!=null&&typeof u!=="function"&&typeof u!=="symbol"&&typeof u!=="boolean"?(tg(u,"type"),r.type=u):r.removeAttribute("type"),g!=null)if(u==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+Xe(g)}else r.value!==""+Xe(g)&&(r.value=""+Xe(g));else u!=="submit"&&u!=="reset"||r.removeAttribute("value");g!=null?Tt(r,u,Xe(g)):o!=null?Tt(r,u,Xe(o)):l!=null&&r.removeAttribute("value"),h==null&&i!=null&&(r.defaultChecked=!!i),h!=null&&(r.checked=h&&typeof h!=="function"&&typeof h!=="symbol"),t!=null&&typeof t!=="function"&&typeof t!=="symbol"&&typeof t!=="boolean"?(tg(t,"name"),r.name=""+Xe(t)):r.removeAttribute("name")}function IP(r,g,o,l,h,i,u,t){if(i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"&&(tg(i,"type"),r.type=i),g!=null||o!=null){if(!(i!=="submit"&&i!=="reset"||g!==void 0&&g!==null)){Zt(r);return}o=o!=null?""+Xe(o):"",g=g!=null?""+Xe(g):o,t||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:h,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=t?r.checked:!!l,r.defaultChecked=!!l,u!=null&&typeof u!=="function"&&typeof u!=="symbol"&&typeof u!=="boolean"&&(tg(u,"name"),r.name=u),Zt(r)}function Tt(r,g,o){g==="number"&&Vn(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function FP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?Th.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||kA||(kA=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||DA||(DA=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||SA||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),SA=!0)}function xP(){var r=Mg();return r?`

Check the render method of \``+r+"`.":""}function Z1(r,g,o,l){if(r=r.options,g){g={};for(var h=0;h<o.length;h++)g["$"+o[h]]=!0;for(o=0;o<r.length;o++)h=g.hasOwnProperty("$"+r[o].value),r[o].selected!==h&&(r[o].selected=h),h&&l&&(r[o].defaultSelected=!0)}else{o=""+Xe(o),g=null;for(h=0;h<r.length;h++){if(r[h].value===o){r[h].selected=!0,l&&(r[h].defaultSelected=!0);return}g!==null||r[h].disabled||(g=r[h])}g!==null&&(g.selected=!0)}}function NP(r,g){for(r=0;r<_A.length;r++){var o=_A[r];if(g[o]!=null){var l=eo(g[o]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,xP()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,xP())}}g.value===void 0||g.defaultValue===void 0||VA||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),VA=!0)}function BP(r,g){g.value===void 0||g.defaultValue===void 0||yA||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Mg()||"A component"),yA=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function ZP(r,g,o){if(g!=null&&(g=""+Xe(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+Xe(o):""}function CP(r,g,o,l){if(g==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(eo(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),g=o}o=Xe(g),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),Zt(r)}function TP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?TP(r.children[0],g):r}function oe(r){return"  "+"  ".repeat(r)}function C1(r){return"+ "+"  ".repeat(r)}function B0(r){return"- "+"  ".repeat(r)}function SP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function ei(r,g){return EA.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function _n(r,g,o){var l=120-2*o;if(g===null)return C1(o)+ei(r,l)+`
`;if(typeof g==="string"){for(var h=0;h<g.length&&h<r.length&&g.charCodeAt(h)===r.charCodeAt(h);h++);return h>l-8&&10<h&&(r="..."+r.slice(h-8),g="..."+g.slice(h-8)),C1(o)+ei(r,l)+`
`+B0(o)+ei(g,l)+`
`}return oe(o)+ei(r,l)+`
`}function St(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function li(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(eo(r))return"[...]";if(r.$$typeof===Xl)return(g=y(r.type))?"<"+g+">":"<...>";var o=St(r);if(o==="Object"){o="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var h=JSON.stringify(l);if(h!=='"'+l+'"'&&(l=h),g-=l.length-2,h=li(r[l],15>g?g:15),g-=h.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+h}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function T1(r,g){return typeof r!=="string"||EA.test(r)?"{"+li(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function kt(r,g,o){var l=120-o.length-r.length,h=[],i;for(i in g)if(g.hasOwnProperty(i)&&i!=="children"){var u=T1(g[i],120-o.length-i.length-1);l-=i.length+u.length+2,h.push(i+"="+u)}return h.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+h.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+h.join(`
`+o+"  ")+`
`+o+`>
`}function S3(r,g,o){var l="",h=cr({},g),i;for(i in r)if(r.hasOwnProperty(i)){delete h[i];var u=120-2*o-i.length-2,t=li(r[i],u);g.hasOwnProperty(i)?(u=li(g[i],u),l+=C1(o)+i+": "+t+`
`,l+=B0(o)+i+": "+u+`
`):l+=C1(o)+i+": "+t+`
`}for(var A in h)h.hasOwnProperty(A)&&(r=li(h[A],120-2*o-A.length-2),l+=B0(o)+A+": "+r+`
`);return l}function k3(r,g,o,l){var h="",i=new Map;for(R in o)o.hasOwnProperty(R)&&i.set(R.toLowerCase(),R);if(i.size===1&&i.has("children"))h+=kt(r,g,oe(l));else{for(var u in g)if(g.hasOwnProperty(u)&&u!=="children"){var t=120-2*(l+1)-u.length-1,A=i.get(u.toLowerCase());if(A!==void 0){i.delete(u.toLowerCase());var R=g[u];A=o[A];var K=T1(R,t);t=T1(A,t),typeof R==="object"&&R!==null&&typeof A==="object"&&A!==null&&St(R)==="Object"&&St(A)==="Object"&&(2<Object.keys(R).length||2<Object.keys(A).length||-1<K.indexOf("...")||-1<t.indexOf("..."))?h+=oe(l+1)+u+`={{
`+S3(R,A,l+2)+oe(l+1)+`}}
`:(h+=C1(l+1)+u+"="+K+`
`,h+=B0(l+1)+u+"="+t+`
`)}else h+=oe(l+1)+u+"="+T1(g[u],t)+`
`}i.forEach(function($){if($!=="children"){var J=120-2*(l+1)-$.length-1;h+=B0(l+1)+$+"="+T1(o[$],J)+`
`}}),h=h===""?oe(l)+"<"+r+`>
`:oe(l)+"<"+r+`
`+h+oe(l)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(i="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")i=""+g;h+=_n(i,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")h=r==null?h+_n(""+g,null,l+1):h+_n(""+g,void 0,l+1);return h}function kP(r,g){var o=SP(r);if(o===null){o="";for(r=r.child;r;)o+=kP(r,g),r=r.sibling;return o}return oe(g)+"<"+o+`>
`}function Dt(r,g){var o=TP(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return oe(g)+`...
`+Dt(o,g+1);o="";var l=r.fiber._debugInfo;if(l)for(var h=0;h<l.length;h++){var i=l[h].name;typeof i==="string"&&(o+=oe(g)+"<"+i+`>
`,g++)}if(l="",h=r.fiber.pendingProps,r.fiber.tag===6)l=_n(h,r.serverProps,g),g++;else if(i=SP(r.fiber),i!==null)if(r.serverProps===void 0){l=g;var u=120-2*l-i.length-2,t="";for(R in h)if(h.hasOwnProperty(R)&&R!=="children"){var A=T1(h[R],15);if(u-=R.length+A.length+2,0>u){t+=" ...";break}t+=" "+R+"="+A}l=oe(l)+"<"+i+t+`>
`,g++}else r.serverProps===null?(l=kt(i,h,C1(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=k3(i,h,r.serverProps,g),g++);var R="";h=r.fiber.child;for(i=0;h&&i<r.children.length;)u=r.children[i],u.fiber===h?(R+=Dt(u,g),i++):R+=kP(h,g),h=h.sibling;h&&0<r.children.length&&(R+=oe(g)+`...
`),h=r.serverTail,r.serverProps===null&&g--;for(r=0;r<h.length;r++)i=h[r],R=typeof i==="string"?R+(B0(g)+ei(i,120-2*g)+`
`):R+kt(i.type,i.props,B0(g));return o+l+R}function Vt(r){try{return`

`+Dt(r,0)}catch(g){return""}}function DP(r,g,o){for(var l=g,h=null,i=0;l;)l===r&&(i=0),h={fiber:l,children:h!==null?[h]:[],serverProps:l===g?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:i},i++,l=l.return;return h!==null?Vt(h).replaceAll(/^[+-]/gm,">"):""}function VP(r,g){var o=cr({},r||aA),l={tag:g};if(cA.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),EX.indexOf(g)!==-1&&(o.pTagInButtonScope=null),yX.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,g==="form"&&(o.formTag=l),g==="a"&&(o.aTagInScope=l),g==="button"&&(o.buttonTagInScope=l),g==="nobr"&&(o.nobrTagInScope=l),g==="p"&&(o.pTagInButtonScope=l),g==="li"&&(o.listItemTagAutoclosing=l),g==="dd"||g==="dt")o.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function _P(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return cX.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function D3(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function yP(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function _t(r,g){g=g||aA;var o=g.current;if(g=(o=_P(r,o&&o.tag,g.implicitRootScope)?null:o)?null:D3(r,g),g=o||g,!g)return!0;var l=g.tag;if(g=String(!!o)+"|"+r+"|"+l,ow[g])return!1;ow[g]=!0;var h=(g=we)?yP(g.return,l):null,i=g!==null&&h!==null?DP(h,g,null):"",u="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,u,l,o,i)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,u,l,i),g&&(r=g.return,h===null||r===null||h===r&&r._debugOwner===g._debugOwner||br(h,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,u)})),!1}function yn(r,g,o){if(o||_P("#text",g,!1))return!0;if(o="#text|"+g,ow[o])return!1;ow[o]=!0;var l=(o=we)?yP(o,g):null;return o=o!==null&&l!==null?DP(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function vi(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function V3(r){return r.replace(jX,function(g,o){return o.toUpperCase()})}function EP(r,g,o){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?vh.hasOwnProperty(g)&&vh[g]||(vh[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,V3(g.replace(fX,"ms-")))):aX.test(g)?vh.hasOwnProperty(g)&&vh[g]||(vh[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!pA.test(o)||v4.hasOwnProperty(o)&&v4[o]||(v4[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(pA,""))),typeof o==="number"&&(isNaN(o)?dA||(dA=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||sA||(sA=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,o):typeof o!=="number"||o===0||rq.has(g)?g==="float"?r.cssFloat=o:(ri(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function cP(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var l={};if(o){for(var h in o)if(o.hasOwnProperty(h)&&!g.hasOwnProperty(h))for(var i=l4[h]||[h],u=0;u<i.length;u++)l[i[u]]=h}for(var t in g)if(g.hasOwnProperty(t)&&(!o||o[t]!==g[t]))for(h=l4[t]||[t],i=0;i<h.length;i++)l[h[i]]=t;t={};for(var A in g)for(h=l4[A]||[A],i=0;i<h.length;i++)t[h[i]]=A;A={};for(var R in l)if(h=l[R],(i=t[R])&&h!==i&&(u=h+","+i,!A[u])){A[u]=!0,u=console;var K=g[h];u.error.call(u,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",K==null||typeof K==="boolean"||K===""?"Removing":"Updating",h,i)}}for(var $ in o)!o.hasOwnProperty($)||g!=null&&g.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var J in g)R=g[J],g.hasOwnProperty(J)&&o[J]!==R&&EP(r,J,R)}else for(l in g)g.hasOwnProperty(l)&&EP(r,l,g[l])}function hi(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function aP(r){return pX.get(r)||r}function _3(r,g){if(Ve.call(ih,g)&&ih[g])return!0;if(sX.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=gq.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),ih[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),ih[g]=!0}if(dX.test(g)){if(r=g.toLowerCase(),r=gq.hasOwnProperty(r)?r:null,r==null)return ih[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),ih[g]=!0)}return!0}function y3(r,g){var o=[],l;for(l in g)_3(r,l)||o.push(l);g=o.map(function(h){return"`"+h+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function E3(r,g,o,l){if(Ve.call(xo,g)&&xo[g])return!0;var h=g.toLowerCase();if(h==="onfocusin"||h==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),xo[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(h)?r[h]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),xo[g]=!0;if(eq.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),xo[g]=!0}else if(eq.test(g))return rY.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),xo[g]=!0;if(gY.test(g)||oY.test(g))return!0;if(h==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),xo[g]=!0;if(h==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),xo[g]=!0;if(h==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),xo[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),xo[g]=!0;if(lw.hasOwnProperty(h)){if(h=lw[h],h!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,h),xo[g]=!0}else if(g!==h)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,h),xo[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(h=g.toLowerCase().slice(0,5),h==="data-"||h==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),xo[g]=!0}case"function":case"symbol":return xo[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),xo[g]=!0}}return!0}function c3(r,g,o){var l=[],h;for(h in g)E3(r,h,g[h],o)||l.push(h);g=l.map(function(i){return"`"+i+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function ii(r){return eY.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function yl(){}function yt(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function fP(r){var g=Fr(r);if(g&&(r=g.stateNode)){var o=r[Fo]||null;r:switch(r=g.stateNode,g.type){case"input":if(Ct(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;tg(g,"name"),o=o.querySelectorAll('input[name="'+Ye(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var l=o[g];if(l!==r&&l.form===r.form){var h=l[Fo]||null;if(!h)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Ct(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(g=0;g<o.length;g++)l=o[g],l.form===r.form&&$P(l)}break r;case"textarea":ZP(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&Z1(r,!!o.multiple,g,!1)}}}function jP(r,g,o){if(h4)return r(g,o);h4=!0;try{var l=r(g);return l}finally{if(h4=!1,bh!==null||nh!==null){if(f1(),bh&&(g=bh,r=nh,nh=bh=null,fP(g),r))for(g=0;g<r.length;g++)fP(r[g])}}}function bi(r,g){var o=r.stateNode;if(o===null)return null;var l=o[Fo]||null;if(l===null)return null;o=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function pP(){if(vw)return vw;var r,g=b4,o=g.length,l,h="value"in cv?cv.value:cv.textContent,i=h.length;for(r=0;r<o&&g[r]===h[r];r++);var u=o-r;for(l=1;l<=u&&g[o-l]===h[i-l];l++);return vw=h.slice(r,1<l?1-l:void 0)}function En(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function cn(){return!0}function dP(){return!1}function yo(r){function g(o,l,h,i,u){this._reactName=o,this._targetInst=h,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var t in r)r.hasOwnProperty(t)&&(o=r[t],this[t]=o?o(i):i[t]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cn:dP,this.isPropagationStopped=dP,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),g}function a3(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=AY[r])?!!g[r]:!1}function Et(){return a3}function sP(r,g){switch(r){case"keyup":return UY.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==iq;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r8(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function f3(r,g){switch(r){case"compositionend":return r8(g);case"keypress":if(g.which!==nq)return null;return wq=!0,uq;case"textInput":return r=g.data,r===uq&&wq?null:r;default:return null}}function j3(r,g){if(uh)return r==="compositionend"||!t4&&sP(r,g)?(r=pP(),vw=b4=cv=null,uh=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return bq&&g.locale!=="ko"?null:g.data;default:return null}}function g8(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!$Y[r.type]:g==="textarea"?!0:!1}function p3(r){if(!Kl)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function o8(r,g,o,l){bh?nh?nh.push(l):nh=[l]:bh=l,g=Tu(g,"onChange"),0<g.length&&(o=new hw("onChange","change",null,o,l),r.push({event:o,listeners:g}))}function d3(r){CH(r,0)}function an(r){var g=xr(r);if($P(g))return r}function e8(r,g){if(r==="change")return g}function l8(){ci&&(ci.detachEvent("onpropertychange",v8),ai=ci=null)}function v8(r){if(r.propertyName==="value"&&an(ai)){var g=[];o8(g,ai,r,yt(r)),jP(d3,g)}}function s3(r,g,o){r==="focusin"?(l8(),ci=g,ai=o,ci.attachEvent("onpropertychange",v8)):r==="focusout"&&l8()}function rG(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return an(ai)}function gG(r,g){if(r==="click")return an(g)}function oG(r,g){if(r==="input"||r==="change")return an(g)}function eG(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function ni(r,g){if(No(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),l=Object.keys(g);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var h=o[l];if(!Ve.call(g,h)||!No(r[h],g[h]))return!1}return!0}function h8(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function i8(r,g){var o=h8(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=g&&l>=g)return{node:o,offset:g-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=h8(o)}}function b8(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?b8(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function n8(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=Vn(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=g.contentWindow;else break;g=Vn(r.document)}return g}function ct(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function u8(r,g,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;O4||wh==null||wh!==Vn(l)||(l=wh,("selectionStart"in l)&&ct(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fi&&ni(fi,l)||(fi=l,l=Tu(P4,"onSelect"),0<l.length&&(g=new hw("onSelect","select",null,g,o),r.push({event:g,listeners:l}),g.target=wh)))}function Z0(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function C0(r){if(H4[r])return H4[r];if(!th[r])return r;var g=th[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in Pq)return H4[r]=g[o];return r}function Se(r,g){Rq.set(r,g),Yo(g,[r])}function lG(r){for(var g=bw,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(eo(l)&&l.length===2&&typeof l[0]==="string"){if(g!==bw&&g!==W4)return R4;g=W4}else return R4;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==bw&&g!==M4)return R4;g=M4}}return g}function at(r,g,o,l){for(var h in r)Ve.call(r,h)&&h[0]!=="_"&&il(h,r[h],g,o,l)}function il(r,g,o,l,h){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Xl){var i=y(g.type)||"…",u=g.key;g=g.props;var t=Object.keys(g),A=t.length;if(u==null&&A===0){g="<"+i+" />";break}if(3>l||A===1&&t[0]==="children"&&u==null){g="<"+i+" … />";break}o.push([h+"  ".repeat(l)+r,"<"+i]),u!==null&&il("key",u,o,l+1,h),r=!1;for(var R in g)R==="children"?g.children!=null&&(!eo(g.children)||0<g.children.length)&&(r=!0):Ve.call(g,R)&&R[0]!=="_"&&il(R,g[R],o,l+1,h);o.push(["",r?">…</"+i+">":"/>"]);return}if(i=Object.prototype.toString.call(g),i=i.slice(8,i.length-1),i==="Array"){if(R=lG(g),R===M4||R===bw){g=JSON.stringify(g);break}else if(R===W4){o.push([h+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)i=g[r],il(i[0],i[1],o,l+1,h);return}}if(i==="Promise"){if(g.status==="fulfilled"){if(i=o.length,il(r,g.value,o,l,h),o.length>i){o=o[i],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(i=o.length,il(r,g.reason,o,l,h),o.length>i)){o=o[i],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}i==="Object"&&(R=Object.getPrototypeOf(g))&&typeof R.constructor==="function"&&(i=R.constructor.name),o.push([h+"  ".repeat(l)+r,i==="Object"?3>l?"":"…":i]),3>l&&at(g,o,l+1,h);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===ZY?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([h+"  ".repeat(l)+r,g])}function w8(r,g,o,l){var h=!0;for(u in r)u in g||(o.push([nw+"  ".repeat(l)+u,"…"]),h=!1);for(var i in g)if(i in r){var u=r[i],t=g[i];if(u!==t){if(l===0&&i==="children")h="  ".repeat(l)+i,o.push([nw+h,"…"],[uw+h,"…"]);else{if(!(3<=l)){if(typeof u==="object"&&typeof t==="object"&&u!==null&&t!==null&&u.$$typeof===t.$$typeof)if(t.$$typeof===Xl){if(u.type===t.type&&u.key===t.key){u=y(t.type)||"…",h="  ".repeat(l)+i,u="<"+u+" … />",o.push([nw+h,u],[uw+h,u]),h=!1;continue}}else{var A=Object.prototype.toString.call(u),R=Object.prototype.toString.call(t);if(A===R&&(R==="[object Object]"||R==="[object Array]")){A=[mq+"  ".repeat(l)+i,R==="[object Array]"?"Array":""],o.push(A),R=o.length,w8(u,t,o,l+1)?R===o.length&&(A[1]="Referentially unequal but deeply equal objects. Consider memoization."):h=!1;continue}}else if(typeof u==="function"&&typeof t==="function"&&u.name===t.name&&u.length===t.length&&(A=Function.prototype.toString.call(u),R=Function.prototype.toString.call(t),A===R)){u=t.name===""?"() => {}":t.name+"() {}",o.push([mq+"  ".repeat(l)+i,u+" Referentially unequal function closure. Consider memoization."]);continue}}il(i,u,o,l,nw),il(i,t,o,l,uw)}h=!1}}else o.push([uw+"  ".repeat(l)+i,"…"]),h=!1;return h}function ee(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function bl(r,g,o,l){Jg&&(fv.start=g,fv.end=o,rv.color="warning",rv.tooltipText=l,rv.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,fv)):performance.measure(l,fv))}function fn(r,g,o){bl(r,g,o,"Reconnect")}function jn(r,g,o,l,h){var i=Z(r);if(i!==null&&Jg){var{alternate:u,actualDuration:t}=r;if(u===null||u.child!==r.child)for(var A=r.child;A!==null;A=A.sibling)t-=A.actualDuration;l=0.5>t?l?"tertiary-light":"primary-light":10>t?l?"tertiary":"primary":100>t?l?"tertiary-dark":"primary-dark":"error";var R=r.memoizedProps;t=r._debugTask,R!==null&&u!==null&&u.memoizedProps!==R?(A=[CY],R=w8(u.memoizedProps,R,A,0),1<A.length&&(R&&!av&&(u.lanes&h)===0&&100<r.actualDuration?(av=!0,A[0]=TY,rv.color="warning",rv.tooltipText=Gq):(rv.color=l,rv.tooltipText=i),rv.properties=A,fv.start=g,fv.end=o,t!=null?t.run(performance.measure.bind(performance,"​"+i,fv)):performance.measure("​"+i,fv))):t!=null?t.run(console.timeStamp.bind(console,i,g,o,Qe,void 0,l)):console.timeStamp(i,g,o,Qe,void 0,l)}}function ft(r,g,o,l){if(Jg){var h=Z(r);if(h!==null){for(var i=null,u=[],t=0;t<l.length;t++){var A=l[t];i==null&&A.source!==null&&(i=A.source._debugTask),A=A.value,u.push(["Error",typeof A==="object"&&A!==null&&typeof A.message==="string"?String(A.message):String(A)])}r.key!==null&&il("key",r.key,u,0,""),r.memoizedProps!==null&&at(r.memoizedProps,u,0,""),i==null&&(i=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:Qe,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:u}}},i?i.run(performance.measure.bind(performance,"​"+h,r)):performance.measure("​"+h,r)}}}function nl(r,g,o,l,h){if(h!==null){if(Jg){var i=Z(r);if(i!==null){l=[];for(var u=0;u<h.length;u++){var t=h[u].value;l.push(["Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r.key!==null&&il("key",r.key,l,0,""),r.memoizedProps!==null&&at(r.memoizedProps,l,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:Qe,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+i,g)):performance.measure("​"+i,g)}}}else i=Z(r),i!==null&&Jg&&(h=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,i,g,o,Qe,void 0,h)):console.timeStamp(i,g,o,Qe,void 0,h))}function vG(r,g,o,l){if(Jg&&!(g<=r)){var h=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,g,fr,ar,h)):console.timeStamp(o,r,g,fr,ar,h)}}function t8(r,g,o,l){!Jg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,ar,o)):console.timeStamp("Prewarm",r,g,fr,ar,o))}function P8(r,g,o,l){!Jg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,ar,o)):console.timeStamp("Suspended",r,g,fr,ar,o))}function hG(r,g,o,l,h,i){if(Jg&&!(g<=r)){o=[];for(var u=0;u<l.length;u++){var t=l[u].value;o.push(["Recoverable Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:ar,tooltipText:h?"Hydration Failed":"Recovered after Error",properties:o}}},i?i.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function jt(r,g,o,l){!Jg||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,ar,"error")):console.timeStamp("Errored",r,g,fr,ar,"error"))}function iG(r,g,o,l){!Jg||g<=r||(l?l.run(console.timeStamp.bind(console,o,r,g,fr,ar,"secondary-light")):console.timeStamp(o,r,g,fr,ar,"secondary-light"))}function O8(r,g,o,l,h){if(Jg&&!(g<=r)){for(var i=[],u=0;u<o.length;u++){var t=o[u].value;i.push(["Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:ar,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:i}}},h?h.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function ui(r,g,o){!Jg||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,fr,ar,"secondary-dark")):console.timeStamp("Animating",r,g,fr,ar,"secondary-dark"))}function pn(){for(var r=Ph,g=m4=Ph=0;g<r;){var o=ze[g];ze[g++]=null;var l=ze[g];ze[g++]=null;var h=ze[g];ze[g++]=null;var i=ze[g];if(ze[g++]=null,l!==null&&h!==null){var u=l.pending;u===null?h.next=h:(h.next=u.next,u.next=h),l.pending=h}i!==0&&H8(o,h,i)}}function dn(r,g,o,l){ze[Ph++]=r,ze[Ph++]=g,ze[Ph++]=o,ze[Ph++]=l,m4|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function pt(r,g,o,l){return dn(r,g,o,l),sn(r)}function Jo(r,g){return dn(r,null,null,g),sn(r)}function H8(r,g,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var h=!1,i=r.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),i.tag===22&&(r=i.stateNode,r===null||r._visibility&ji||(h=!0)),r=i,i=i.return;return r.tag===3?(i=r.stateNode,h&&g!==null&&(h=31-Io(o),r=i.hiddenUpdates,l=r[h],l===null?r[h]=[g]:l.push(g),g.lane=o|536870912),i):null}function sn(r){if(Xb>rJ)throw P1=Xb=0,Yb=r6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");P1>gJ&&(P1=0,Yb=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&LH(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&LH(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function T0(r){if(Ue===null)return r;var g=Ue(r);return g===void 0?r:g.current}function dt(r){if(Ue===null)return r;var g=Ue(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=T0(r.render),r.render!==g)?(g={$$typeof:Ci,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function A8(r,g){if(Ue===null)return!1;var o=r.elementType;g=g.type;var l=!1,h=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:h===ue&&(l=!0);break;case 11:h===Ci?l=!0:h===ue&&(l=!0);break;case 14:case 15:h===ju?l=!0:h===ue&&(l=!0);break;default:return!1}return l&&(r=Ue(o),r!==void 0&&r===Ue(g))?!0:!1}function q8(r){Ue!==null&&typeof WeakSet==="function"&&(Oh===null&&(Oh=new WeakSet),Oh.add(r))}function R8(r,g,o){do{var l=r,h=l.alternate,i=l.child,u=l.sibling,t=l.tag;l=l.type;var A=null;switch(t){case 0:case 15:case 1:A=l;break;case 11:A=l.render}if(Ue===null)throw Error("Expected resolveFamily to be set during hot reload.");var R=!1;if(l=!1,A!==null&&(A=Ue(A),A!==void 0&&(o.has(A)?l=!0:g.has(A)&&(t===1?l=!0:R=!0))),Oh!==null&&(Oh.has(r)||h!==null&&Oh.has(h))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||R)h=Jo(r,2),h!==null&&Ng(h,r,2);if(i===null||l||R8(i,g,o),u===null)break;r=u}while(1)}function bG(r,g,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Xq||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function st(r){return r=r.prototype,!(!r||!r.isReactComponent)}function El(r,g){var o=r.alternate;switch(o===null?(o=X(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=T0(r.type);break;case 1:o.type=T0(r.type);break;case 11:o.type=dt(r.type)}return o}function M8(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function r5(r,g,o,l,h,i){var u=0,t=r;if(typeof r==="function")st(r)&&(u=1),t=T0(t);else if(typeof r==="string")u=vr(),u=qX(r,o,u)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E2:return g=X(31,o,g,h),g.elementType=E2,g.lanes=i,g;case oh:return S0(o.children,h,i,g);case fu:u=8,h|=zo,h|=ye;break;case D2:return r=o,l=h,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=X(12,r,g,l|kr),g.elementType=D2,g.lanes=i,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case _2:return g=X(13,o,g,h),g.elementType=_2,g.lanes=i,g;case y2:return g=X(19,o,g,h),g.elementType=y2,g.lanes=i,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Yl:u=10;break r;case V2:u=9;break r;case Ci:u=11,t=dt(t);break r;case ju:u=14;break r;case ue:u=16,t=null;break r}if(t="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)t+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":eo(r)?o="array":r!==void 0&&r.$$typeof===Xl?(o="<"+(y(r.type)||"Unknown")+" />",t=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(u=l?f(l):null)&&(t+=`

Check the render method of \``+u+"`."),u=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+t)),t=null}return g=X(u,o,g,h),g.elementType=r,g.type=t,g.lanes=i,g._debugOwner=l,g}function ru(r,g,o){return g=r5(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function S0(r,g,o,l){return r=X(7,r,l,g),r.lanes=o,r}function g5(r,g,o){return r=X(6,r,null,g),r.lanes=o,r}function W8(r){var g=X(18,null,null,Ur);return g.stateNode=r,g}function o5(r,g,o){return g=X(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function le(r,g){if(typeof r==="object"&&r!==null){var o=G4.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:Cr(g)},G4.set(r,g),g}return{value:r,source:g,stack:Cr(g)}}function cl(r,g){Lv(),Hh[Ah++]=pi,Hh[Ah++]=ww,ww=r,pi=g}function m8(r,g,o){Lv(),Ke[$e++]=ov,Ke[$e++]=ev,Ke[$e++]=s0,s0=r;var l=ov;r=ev;var h=32-Io(l)-1;l&=~(1<<h),o+=1;var i=32-Io(g)+h;if(30<i){var u=h-h%5;i=(l&(1<<u)-1).toString(32),l>>=u,h-=u,ov=1<<32-Io(g)+h|o<<h|l,ev=i+r}else ov=1<<i|o<<h|l,ev=r}function e5(r){Lv(),r.return!==null&&(cl(r,1),m8(r,1,0))}function l5(r){for(;r===ww;)ww=Hh[--Ah],Hh[Ah]=null,pi=Hh[--Ah],Hh[Ah]=null;for(;r===s0;)s0=Ke[--$e],Ke[$e]=null,ev=Ke[--$e],Ke[$e]=null,ov=Ke[--$e],Ke[$e]=null}function G8(){return Lv(),s0!==null?{id:ov,overflow:ev}:null}function X8(r,g){Lv(),Ke[$e++]=ov,Ke[$e++]=ev,Ke[$e++]=s0,ov=g.id,ev=g.overflow,s0=r}function Lv(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k0(r,g){if(r.return===null){if(Pe===null)Pe={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(Pe.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Pe.distanceFromLeaf>g&&(Pe.distanceFromLeaf=g)}return Pe}var o=k0(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function Y8(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function gu(r,g){$l||(r=k0(r,0),r.serverProps=null,g!==null&&(g=oA(g),r.serverTail.push(g)))}function Iv(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=Pe;throw l!==null&&(Pe=null,o=Vt(l)),wi(le(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),X4}function J8(r){var{stateNode:g,type:o,memoizedProps:l}=r;switch(g[qo]=r,g[Fo]=l,Y2(o,l),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<Jb.length;o++)dr(Jb[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":$v("input",l),dr("invalid",g),LP(g,l),IP(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":FP(g,l);break;case"select":$v("select",l),dr("invalid",g),NP(g,l);break;case"textarea":$v("textarea",l),dr("invalid",g),BP(g,l),CP(g,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||l.suppressHydrationWarning===!0||DH(g.textContent,o)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=yl),g=!0):g=!1,g||Iv(r,!0)}function Q8(r){for(Ro=r.return;Ro;)switch(Ro.tag){case 5:case 31:case 13:Le=!1;return;case 27:case 3:Le=!0;return;default:Ro=Ro.return}}function S1(r){if(r!==Ro)return!1;if(!pr)return Q8(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||K2(r.type,r.memoizedProps);o=!o}if(o&&Qg){for(o=Qg;o;){var l=k0(r,0),h=oA(o);l.serverTail.push(h),o=h.type==="Suspense"?F2(o):ne(o.nextSibling)}Iv(r)}if(Q8(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qg=F2(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qg=F2(r)}else g===27?(g=Qg,Dv(r.type)?(r=t6,t6=null,Qg=r):Qg=g):Qg=Ro?ne(r.stateNode.nextSibling):null;return!0}function D0(){Qg=Ro=null,$l=pr=!1}function v5(){var r=pv;return r!==null&&(To===null?To=r:To.push.apply(To,r),pv=null),r}function wi(r){pv===null?pv=[r]:pv.push(r)}function h5(){var r=Pe;if(r!==null){Pe=null;for(var g=Vt(r);0<r.children.length;)r=r.children[0];br(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function ou(){qh=tw=null,Rh=!1}function Fv(r,g,o){mr(Y4,g._currentValue,r),g._currentValue=o,mr(J4,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==Jq&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=Jq}function al(r,g){r._currentValue=Y4.current;var o=J4.current;Ar(J4,g),r._currentRenderer=o,Ar(Y4,g)}function i5(r,g,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function b5(r,g,o,l){var h=r.child;h!==null&&(h.return=r);for(;h!==null;){var i=h.dependencies;if(i!==null){var u=h.child;i=i.firstContext;r:for(;i!==null;){var t=i;i=h;for(var A=0;A<g.length;A++)if(t.context===g[A]){i.lanes|=o,t=i.alternate,t!==null&&(t.lanes|=o),i5(i.return,o,r),l||(u=null);break r}i=t.next}}else if(h.tag===18){if(u=h.return,u===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");u.lanes|=o,i=u.alternate,i!==null&&(i.lanes|=o),i5(u,o,r),u=null}else u=h.child;if(u!==null)u.return=h;else for(u=h;u!==null;){if(u===r){u=null;break}if(h=u.sibling,h!==null){h.return=u.return,u=h;break}u=u.return}h=u}}function k1(r,g,o,l){r=null;for(var h=g,i=!1;h!==null;){if(!i){if((h.flags&524288)!==0)i=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var u=h.alternate;if(u===null)throw Error("Should have a current fiber. This is a bug in React.");if(u=u.memoizedProps,u!==null){var t=h.type;No(h.pendingProps.value,u.value)||(r!==null?r.push(t):r=[t])}}else if(h===pu.current){if(u=h.alternate,u===null)throw Error("Should have a current fiber. This is a bug in React.");u.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push($b):r=[$b])}h=h.return}r!==null&&b5(g,r,o,l),g.flags|=262144}function eu(r){for(r=r.firstContext;r!==null;){if(!No(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V0(r){tw=r,qh=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Kg(r){return Rh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),z8(tw,r)}function lu(r,g){return tw===null&&V0(r),z8(r,g)}function z8(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},qh===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");qh=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else qh=qh.next=g;return o}function n5(){return{controller:new DY,data:new Map,refCount:0}}function _0(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function ti(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&VY(_Y,function(){r.controller.abort()})}function ul(r,g,o){if((r&127)!==0)0>Ll&&(Ll=jg(),si=Pw(g),Q4=g,o!=null&&(z4=Z(o)),(og&(vo|Ae))!==uo&&(Bg=!0,r0=di),r=Fi(),g=Ii(),r!==Mh||g!==rb?Mh=-1.1:g!==null&&(r0=di),g1=r,rb=g);else if((r&4194048)!==0&&0>Ie&&(Ie=jg(),gb=Pw(g),Qq=g,o!=null&&(zq=Z(o)),0>hv)){if(r=Fi(),g=Ii(),r!==o0||g!==o1)o0=-1.1;g0=r,o1=g}}function nG(r){if(0>Ll){Ll=jg(),si=r._debugTask!=null?r._debugTask:null,(og&(vo|Ae))!==uo&&(r0=di);var g=Fi(),o=Ii();g!==Mh||o!==rb?Mh=-1.1:o!==null&&(r0=di),g1=g,rb=o}if(0>Ie&&(Ie=jg(),gb=r._debugTask!=null?r._debugTask:null,0>hv)){if(r=Fi(),g=Ii(),r!==o0||g!==o1)o0=-1.1;g0=r,o1=g}}function fl(){var r=r1;return r1=0,r}function vu(r){var g=r1;return r1=r,g}function Pi(r){var g=r1;return r1+=r,g}function hu(){zr=Jr=-1.1}function ve(){var r=Jr;return Jr=-1.1,r}function he(r){0<=r&&(Jr=r)}function wl(){var r=Ig;return Ig=-0,r}function tl(r){0<=r&&(Ig=r)}function Pl(){var r=$g;return $g=null,r}function Ol(){var r=Bg;return Bg=!1,r}function u5(r){Bo=jg(),0>r.actualStartTime&&(r.actualStartTime=Bo)}function w5(r){if(0<=Bo){var g=jg()-Bo;r.actualDuration+=g,r.selfBaseDuration=g,Bo=-1}}function U8(r){if(0<=Bo){var g=jg()-Bo;r.actualDuration+=g,Bo=-1}}function Hl(){if(0<=Bo){var r=jg(),g=r-Bo;Bo=-1,r1+=g,Ig+=g,zr=r}}function K8(r){$g===null&&($g=[]),$g.push(r),vv===null&&(vv=[]),vv.push(r)}function Al(){Bo=jg(),0>Jr&&(Jr=Bo)}function Oi(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function uG(r,g){if(eb===null){var o=eb=[];K4=0,e1=W2(),Wh={status:"pending",value:void 0,then:function(l){o.push(l)}}}return K4++,g.then($8,$8),g}function $8(){if(--K4===0&&(-1<Ie||(hv=-1.1),eb!==null)){Wh!==null&&(Wh.status="fulfilled");var r=eb;eb=null,e1=0,Wh=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function wG(r,g){var o=[],l={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var h=0;h<o.length;h++)(0,o[h])(g)},function(h){l.status="rejected",l.reason=h;for(h=0;h<o.length;h++)(0,o[h])(void 0)}),l}function t5(){var r=l1.current;return r!==null?r:Rg.pooledCache}function iu(r,g){g===null?mr(l1,l1.current,r):mr(l1,g.pool,r)}function L8(){var r=t5();return r===null?null:{parent:fg._currentValue,pool:r}}function I8(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function F8(r){return r=r.status,r==="fulfilled"||r==="rejected"}function x8(r,g,o){C.actQueue!==null&&(C.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(yl,yl),g=o),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var h={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:h}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){h.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,B8(r),r;default:if(typeof g.status==="string")g.then(yl,yl);else{if(r=Rg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(i){if(g.status==="pending"){var u=g;u.status="fulfilled",u.value=i}},function(i){if(g.status==="pending"){var u=g;u.status="rejected",u.reason=i}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,B8(r),r}throw h1=g,ub=!0,mh}}function xv(r){try{return aY(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw h1=g,ub=!0,mh;throw g}}function N8(){if(h1===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=h1;return h1=null,ub=!1,r}function B8(r){if(r===mh||r===mw)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Oo(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function P5(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function bu(r,g,o){for(var l=Object.keys(r.props),h=0;h<l.length;h++){var i=l[h];if(i!=="children"&&i!=="key"){g===null&&(g=ru(r,o.mode,0),g._debugInfo=Dr,g.return=o),br(g,function(u){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u)},i);break}}}function nu(r){var g=wb;return wb+=1,Gh===null&&(Gh=I8()),x8(Gh,r,g)}function Hi(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function Z8(r,g){if(g.$$typeof===zX)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function uu(r,g){var o=P5();o!==null?o.run(Z8.bind(null,r,g)):Z8(r,g)}function C8(r,g){var o=Z(r)||"Component";cq[o]||(cq[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function wu(r,g){var o=P5();o!==null?o.run(C8.bind(null,r,g)):C8(r,g)}function T8(r,g){var o=Z(r)||"Component";aq[o]||(aq[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function tu(r,g){var o=P5();o!==null?o.run(T8.bind(null,r,g)):T8(r,g)}function S8(r){function g(Y,Q){if(r){var U=Y.deletions;U===null?(Y.deletions=[Q],Y.flags|=16):U.push(Q)}}function o(Y,Q){if(!r)return null;for(;Q!==null;)g(Y,Q),Q=Q.sibling;return null}function l(Y){for(var Q=new Map;Y!==null;)Y.key!==null?Q.set(Y.key,Y):Q.set(Y.index,Y),Y=Y.sibling;return Q}function h(Y,Q){return Y=El(Y,Q),Y.index=0,Y.sibling=null,Y}function i(Y,Q,U){if(Y.index=U,!r)return Y.flags|=1048576,Q;if(U=Y.alternate,U!==null)return U=U.index,U<Q?(Y.flags|=67108866,Q):U;return Y.flags|=67108866,Q}function u(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function t(Y,Q,U,D){if(Q===null||Q.tag!==6)return Q=g5(U,Y.mode,D),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=h(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function A(Y,Q,U,D){var ur=U.type;if(ur===oh)return Q=K(Y,Q,U.props.children,D,U.key),bu(U,Q,Y),Q;if(Q!==null&&(Q.elementType===ur||A8(Q,U)||typeof ur==="object"&&ur!==null&&ur.$$typeof===ue&&xv(ur)===Q.type))return Q=h(Q,U.props),Hi(Q,U),Q.return=Y,Q._debugOwner=U._owner,Q._debugInfo=Dr,Q;return Q=ru(U,Y.mode,D),Hi(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function R(Y,Q,U,D){if(Q===null||Q.tag!==4||Q.stateNode.containerInfo!==U.containerInfo||Q.stateNode.implementation!==U.implementation)return Q=o5(U,Y.mode,D),Q.return=Y,Q._debugInfo=Dr,Q;return Q=h(Q,U.children||[]),Q.return=Y,Q._debugInfo=Dr,Q}function K(Y,Q,U,D,ur){if(Q===null||Q.tag!==7)return Q=S0(U,Y.mode,D,ur),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;return Q=h(Q,U),Q.return=Y,Q._debugInfo=Dr,Q}function $(Y,Q,U){if(typeof Q==="string"&&Q!==""||typeof Q==="number"||typeof Q==="bigint")return Q=g5(""+Q,Y.mode,U),Q.return=Y,Q._debugOwner=Y,Q._debugTask=Y._debugTask,Q._debugInfo=Dr,Q;if(typeof Q==="object"&&Q!==null){switch(Q.$$typeof){case Xl:return U=ru(Q,Y.mode,U),Hi(U,Q),U.return=Y,Y=Oo(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;case gh:return Q=o5(Q,Y.mode,U),Q.return=Y,Q._debugInfo=Dr,Q;case ue:var D=Oo(Q._debugInfo);return Q=xv(Q),Y=$(Y,Q,U),Dr=D,Y}if(eo(Q)||N(Q))return U=S0(Q,Y.mode,U,null),U.return=Y,U._debugOwner=Y,U._debugTask=Y._debugTask,Y=Oo(Q._debugInfo),U._debugInfo=Dr,Dr=Y,U;if(typeof Q.then==="function")return D=Oo(Q._debugInfo),Y=$(Y,nu(Q),U),Dr=D,Y;if(Q.$$typeof===Yl)return $(Y,lu(Y,Q),U);uu(Y,Q)}return typeof Q==="function"&&wu(Y,Q),typeof Q==="symbol"&&tu(Y,Q),null}function J(Y,Q,U,D){var ur=Q!==null?Q.key:null;if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ur!==null?null:t(Y,Q,""+U,D);if(typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:return U.key===ur?(ur=Oo(U._debugInfo),Y=A(Y,Q,U,D),Dr=ur,Y):null;case gh:return U.key===ur?R(Y,Q,U,D):null;case ue:return ur=Oo(U._debugInfo),U=xv(U),Y=J(Y,Q,U,D),Dr=ur,Y}if(eo(U)||N(U)){if(ur!==null)return null;return ur=Oo(U._debugInfo),Y=K(Y,Q,U,D,null),Dr=ur,Y}if(typeof U.then==="function")return ur=Oo(U._debugInfo),Y=J(Y,Q,nu(U),D),Dr=ur,Y;if(U.$$typeof===Yl)return J(Y,Q,lu(Y,U),D);uu(Y,U)}return typeof U==="function"&&wu(Y,U),typeof U==="symbol"&&tu(Y,U),null}function x(Y,Q,U,D,ur){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return Y=Y.get(U)||null,t(Q,Y,""+D,ur);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Xl:return U=Y.get(D.key===null?U:D.key)||null,Y=Oo(D._debugInfo),Q=A(Q,U,D,ur),Dr=Y,Q;case gh:return Y=Y.get(D.key===null?U:D.key)||null,R(Q,Y,D,ur);case ue:var $r=Oo(D._debugInfo);return D=xv(D),Q=x(Y,Q,U,D,ur),Dr=$r,Q}if(eo(D)||N(D))return U=Y.get(U)||null,Y=Oo(D._debugInfo),Q=K(Q,U,D,ur,null),Dr=Y,Q;if(typeof D.then==="function")return $r=Oo(D._debugInfo),Q=x(Y,Q,U,nu(D),ur),Dr=$r,Q;if(D.$$typeof===Yl)return x(Y,Q,U,lu(Q,D),ur);uu(Q,D)}return typeof D==="function"&&wu(Q,D),typeof D==="symbol"&&tu(Q,D),null}function hr(Y,Q,U,D){if(typeof U!=="object"||U===null)return D;switch(U.$$typeof){case Xl:case gh:m(Y,Q,U);var ur=U.key;if(typeof ur!=="string")break;if(D===null){D=new Set,D.add(ur);break}if(!D.has(ur)){D.add(ur);break}br(Q,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ur)});break;case ue:U=xv(U),hr(Y,Q,U,D)}return D}function Pr(Y,Q,U,D){for(var ur=null,$r=null,Xr=null,Wr=Q,Tr=Q=0,zg=null;Wr!==null&&Tr<U.length;Tr++){Wr.index>Tr?(zg=Wr,Wr=null):zg=Wr.sibling;var _g=J(Y,Wr,U[Tr],D);if(_g===null){Wr===null&&(Wr=zg);break}ur=hr(Y,_g,U[Tr],ur),r&&Wr&&_g.alternate===null&&g(Y,Wr),Q=i(_g,Q,Tr),Xr===null?$r=_g:Xr.sibling=_g,Xr=_g,Wr=zg}if(Tr===U.length)return o(Y,Wr),pr&&cl(Y,Tr),$r;if(Wr===null){for(;Tr<U.length;Tr++)Wr=$(Y,U[Tr],D),Wr!==null&&(ur=hr(Y,Wr,U[Tr],ur),Q=i(Wr,Q,Tr),Xr===null?$r=Wr:Xr.sibling=Wr,Xr=Wr);return pr&&cl(Y,Tr),$r}for(Wr=l(Wr);Tr<U.length;Tr++)zg=x(Wr,Y,Tr,U[Tr],D),zg!==null&&(ur=hr(Y,zg,U[Tr],ur),r&&zg.alternate!==null&&Wr.delete(zg.key===null?Tr:zg.key),Q=i(zg,Q,Tr),Xr===null?$r=zg:Xr.sibling=zg,Xr=zg);return r&&Wr.forEach(function(Hv){return g(Y,Hv)}),pr&&cl(Y,Tr),$r}function Gg(Y,Q,U,D){if(U==null)throw Error("An iterable object provided no iterator.");for(var ur=null,$r=null,Xr=Q,Wr=Q=0,Tr=null,zg=null,_g=U.next();Xr!==null&&!_g.done;Wr++,_g=U.next()){Xr.index>Wr?(Tr=Xr,Xr=null):Tr=Xr.sibling;var Hv=J(Y,Xr,_g.value,D);if(Hv===null){Xr===null&&(Xr=Tr);break}zg=hr(Y,Hv,_g.value,zg),r&&Xr&&Hv.alternate===null&&g(Y,Xr),Q=i(Hv,Q,Wr),$r===null?ur=Hv:$r.sibling=Hv,$r=Hv,Xr=Tr}if(_g.done)return o(Y,Xr),pr&&cl(Y,Wr),ur;if(Xr===null){for(;!_g.done;Wr++,_g=U.next())Xr=$(Y,_g.value,D),Xr!==null&&(zg=hr(Y,Xr,_g.value,zg),Q=i(Xr,Q,Wr),$r===null?ur=Xr:$r.sibling=Xr,$r=Xr);return pr&&cl(Y,Wr),ur}for(Xr=l(Xr);!_g.done;Wr++,_g=U.next())Tr=x(Xr,Y,Wr,_g.value,D),Tr!==null&&(zg=hr(Y,Tr,_g.value,zg),r&&Tr.alternate!==null&&Xr.delete(Tr.key===null?Wr:Tr.key),Q=i(Tr,Q,Wr),$r===null?ur=Tr:$r.sibling=Tr,$r=Tr);return r&&Xr.forEach(function(RJ){return g(Y,RJ)}),pr&&cl(Y,Wr),ur}function sr(Y,Q,U,D){if(typeof U==="object"&&U!==null&&U.type===oh&&U.key===null&&(bu(U,null,Y),U=U.props.children),typeof U==="object"&&U!==null){switch(U.$$typeof){case Xl:var ur=Oo(U._debugInfo);r:{for(var $r=U.key;Q!==null;){if(Q.key===$r){if($r=U.type,$r===oh){if(Q.tag===7){o(Y,Q.sibling),D=h(Q,U.props.children),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,bu(U,D,Y),Y=D;break r}}else if(Q.elementType===$r||A8(Q,U)||typeof $r==="object"&&$r!==null&&$r.$$typeof===ue&&xv($r)===Q.type){o(Y,Q.sibling),D=h(Q,U.props),Hi(D,U),D.return=Y,D._debugOwner=U._owner,D._debugInfo=Dr,Y=D;break r}o(Y,Q);break}else g(Y,Q);Q=Q.sibling}U.type===oh?(D=S0(U.props.children,Y.mode,D,U.key),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,bu(U,D,Y),Y=D):(D=ru(U,Y.mode,D),Hi(D,U),D.return=Y,D._debugInfo=Dr,Y=D)}return Y=u(Y),Dr=ur,Y;case gh:r:{ur=U;for(U=ur.key;Q!==null;){if(Q.key===U)if(Q.tag===4&&Q.stateNode.containerInfo===ur.containerInfo&&Q.stateNode.implementation===ur.implementation){o(Y,Q.sibling),D=h(Q,ur.children||[]),D.return=Y,Y=D;break r}else{o(Y,Q);break}else g(Y,Q);Q=Q.sibling}D=o5(ur,Y.mode,D),D.return=Y,Y=D}return u(Y);case ue:return ur=Oo(U._debugInfo),U=xv(U),Y=sr(Y,Q,U,D),Dr=ur,Y}if(eo(U))return ur=Oo(U._debugInfo),Y=Pr(Y,Q,U,D),Dr=ur,Y;if(N(U)){if(ur=Oo(U._debugInfo),$r=N(U),typeof $r!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Xr=$r.call(U);if(Xr===U){if(Y.tag!==0||Object.prototype.toString.call(Y.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Xr)!=="[object Generator]")yq||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),yq=!0}else U.entries!==$r||F4||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),F4=!0);return Y=Gg(Y,Q,Xr,D),Dr=ur,Y}if(typeof U.then==="function")return ur=Oo(U._debugInfo),Y=sr(Y,Q,nu(U),D),Dr=ur,Y;if(U.$$typeof===Yl)return sr(Y,Q,lu(Y,U),D);uu(Y,U)}if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ur=""+U,Q!==null&&Q.tag===6?(o(Y,Q.sibling),D=h(Q,ur),D.return=Y,Y=D):(o(Y,Q),D=g5(ur,Y.mode,D),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=Dr,Y=D),u(Y);return typeof U==="function"&&wu(Y,U),typeof U==="symbol"&&tu(Y,U),o(Y,Q)}return function(Y,Q,U,D){var ur=Dr;Dr=null;try{wb=0;var $r=sr(Y,Q,U,D);return Gh=null,$r}catch(zg){if(zg===mh||zg===mw)throw zg;var Xr=X(29,zg,null,Y.mode);Xr.lanes=D,Xr.return=Y;var Wr=Xr._debugInfo=Dr;if(Xr._debugOwner=Y._debugOwner,Xr._debugTask=Y._debugTask,Wr!=null){for(var Tr=Wr.length-1;0<=Tr;Tr--)if(typeof Wr[Tr].stack==="string"){Xr._debugOwner=Wr[Tr],Xr._debugTask=Wr[Tr].debugTask;break}}return Xr}finally{Dr=ur}}}function k8(r,g){var o=eo(r);return r=!o&&typeof N(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function O5(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function H5(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Nv(r){return{lane:r,tag:jq,payload:null,callback:null,next:null}}function Bv(r,g,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,N4===l&&!sq){var h=Z(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,h),sq=!0}if((og&vo)!==uo)return h=l.pending,h===null?g.next=g:(g.next=h.next,h.next=g),l.pending=g,g=sn(r),H8(r,null,o),g;return dn(r,l,g,o),sn(r)}function Ai(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,F0(r,o)}}function Pu(r,g){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var h=null,i=null;if(o=o.firstBaseUpdate,o!==null){do{var u={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};i===null?h=i=u:i=i.next=u,o=o.next}while(o!==null);i===null?h=i=g:i=i.next=g}else h=i=g;o={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function qi(){if(B4){var r=Wh;if(r!==null)throw r}}function Ri(r,g,o,l){B4=!1;var h=r.updateQueue;e0=!1,N4=h.shared;var{firstBaseUpdate:i,lastBaseUpdate:u}=h,t=h.shared.pending;if(t!==null){h.shared.pending=null;var A=t,R=A.next;A.next=null,u===null?i=R:u.next=R,u=A;var K=r.alternate;K!==null&&(K=K.updateQueue,t=K.lastBaseUpdate,t!==u&&(t===null?K.firstBaseUpdate=R:t.next=R,K.lastBaseUpdate=A))}if(i!==null){var $=h.baseState;u=0,K=R=A=null,t=i;do{var J=t.lane&-536870913,x=J!==t.lane;if(x?(Vr&J)===J:(l&J)===J){J!==0&&J===e1&&(B4=!0),K!==null&&(K=K.next={lane:0,tag:t.tag,payload:t.payload,callback:null,next:null});r:{J=r;var hr=t,Pr=g,Gg=o;switch(hr.tag){case pq:if(hr=hr.payload,typeof hr==="function"){Rh=!0;var sr=hr.call(Gg,$,Pr);if(J.mode&zo){Wg(!0);try{hr.call(Gg,$,Pr)}finally{Wg(!1)}}Rh=!1,$=sr;break r}$=hr;break r;case x4:J.flags=J.flags&-65537|128;case jq:if(sr=hr.payload,typeof sr==="function"){if(Rh=!0,hr=sr.call(Gg,$,Pr),J.mode&zo){Wg(!0);try{sr.call(Gg,$,Pr)}finally{Wg(!1)}}Rh=!1}else hr=sr;if(hr===null||hr===void 0)break r;$=cr({},$,hr);break r;case dq:e0=!0}}J=t.callback,J!==null&&(r.flags|=64,x&&(r.flags|=8192),x=h.callbacks,x===null?h.callbacks=[J]:x.push(J))}else x={lane:J,tag:t.tag,payload:t.payload,callback:t.callback,next:null},K===null?(R=K=x,A=$):K=K.next=x,u|=J;if(t=t.next,t===null)if(t=h.shared.pending,t===null)break;else x=t,t=x.next,x.next=null,h.lastBaseUpdate=x,h.shared.pending=null}while(1);K===null&&(A=$),h.baseState=A,h.firstBaseUpdate=R,h.lastBaseUpdate=K,i===null&&(h.shared.lanes=0),h0|=u,r.lanes=u,r.memoizedState=$}N4=null}function D8(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function tG(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)D8(o[r],g)}function V8(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)D8(o[r],g)}function _8(r,g){var o=xl;mr(Xw,o,r),mr(Xh,g,r),xl=o|g.baseLanes}function A5(r){mr(Xw,xl,r),mr(Xh,Xh.current,r)}function q5(r){xl=Xw.current,Ar(Xh,r),Ar(Xw,r)}function Zv(r){var g=r.alternate;mr(Vg,Vg.current&Yh,r),mr(Oe,r,r),Fe===null&&(g===null||Xh.current!==null?Fe=r:g.memoizedState!==null&&(Fe=r))}function R5(r){mr(Vg,Vg.current,r),mr(Oe,r,r),Fe===null&&(Fe=r)}function y8(r){r.tag===22?(mr(Vg,Vg.current,r),mr(Oe,r,r),Fe===null&&(Fe=r)):Cv(r)}function Cv(r){mr(Vg,Vg.current,r),mr(Oe,Oe.current,r)}function ie(r){Ar(Oe,r),Fe===r&&(Fe=null),Ar(Vg,r)}function Ou(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||L2(o)||I2(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function Er(){var r=B;Ne===null?Ne=[r]:Ne.push(r)}function d(){var r=B;if(Ne!==null&&(uv++,Ne[uv]!==r)){var g=Z(Kr);if(!rR.has(g)&&(rR.add(g),Ne!==null)){for(var o="",l=0;l<=uv;l++){var h=Ne[l],i=l===uv?r:h;for(h=l+1+". "+h;30>h.length;)h+=" ";h+=i+`
`,o+=h}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function D1(r){r===void 0||r===null||eo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function Hu(){var r=Z(Kr);oR.has(r)||(oR.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Tg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function M5(r,g){if(Ob)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!No(r[o],g[o]))return!1;return!0}function W5(r,g,o,l,h,i){if(bv=i,Kr=g,Ne=r!==null?r._debugHookTypes:null,uv=-1,Ob=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")i=Z(Kr),Z4.has(i)||(Z4.add(i),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",i===null?"An unknown Component":"<"+i+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,C.H=r!==null&&r.memoizedState!==null?T4:Ne!==null?eR:C4,b1=i=(g.mode&zo)!==Ur;var u=$4(o,l,h);if(b1=!1,Qh&&(u=m5(g,o,l,h)),i){Wg(!0);try{u=m5(g,o,l,h)}finally{Wg(!1)}}return E8(r,g),u}function E8(r,g){g._debugHookTypes=Ne,g.dependencies===null?nv!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:nv}):g.dependencies._debugThenableState=nv,C.H=Hb;var o=qg!==null&&qg.next!==null;if(bv=0,Ne=B=pg=qg=Kr=null,uv=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Jw=!1,Pb=0,nv=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||dg||(r=r.dependencies,r!==null&&eu(r)&&(dg=!0)),ub?(ub=!1,r=!0):r=!1,r&&(g=Z(g)||"Unknown",gR.has(g)||Z4.has(g)||(gR.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function m5(r,g,o,l){Kr=r;var h=0;do{if(Qh&&(nv=null),Pb=0,Qh=!1,h>=jY)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(h+=1,Ob=!1,pg=qg=null,r.updateQueue!=null){var i=r.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}uv=-1,C.H=lR,i=$4(g,o,l)}while(Qh);return i}function PG(){var r=C.H,g=r.useState()[0];return g=typeof g.then==="function"?Mi(g):g,r=r.useState()[0],(qg!==null?qg.memoizedState:null)!==r&&(Kr.flags|=1024),g}function G5(){var r=Qw!==0;return Qw=0,r}function X5(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&ye)!==Ur?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Y5(r){if(Jw){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}Jw=!1}bv=0,Ne=pg=qg=Kr=null,uv=-1,B=null,Qh=!1,Pb=Qw=0,nv=null}function Lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pg===null?Kr.memoizedState=pg=r:pg=pg.next=r,pg}function ug(){if(qg===null){var r=Kr.alternate;r=r!==null?r.memoizedState:null}else r=qg.next;var g=pg===null?Kr.memoizedState:pg.next;if(g!==null)pg=g,qg=r;else{if(r===null){if(Kr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}qg=r,r={memoizedState:qg.memoizedState,baseState:qg.baseState,baseQueue:qg.baseQueue,queue:qg.queue,next:null},pg===null?Kr.memoizedState=pg=r:pg=pg.next=r}return pg}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(r){var g=Pb;return Pb+=1,nv===null&&(nv=I8()),r=x8(nv,r,g),g=Kr,(pg===null?g.memoizedState:pg.next)===null&&(g=g.alternate,C.H=g!==null&&g.memoizedState!==null?T4:C4),r}function Tv(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Mi(r);if(r.$$typeof===Yl)return Kg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function y0(r){var g=null,o=Kr.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var l=Kr.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(h){return h.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=Au(),Kr.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||Ob)for(o=g.data[g.index]=Array(r),l=0;l<r;l++)o[l]=UX;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function ke(r,g){return typeof g==="function"?g(r):g}function J5(r,g,o){var l=Lo();if(o!==void 0){var h=o(g);if(b1){Wg(!0);try{o(g)}finally{Wg(!1)}}}else h=g;return l.memoizedState=l.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},l.queue=r,r=r.dispatch=RG.bind(null,Kr,r),[l.memoizedState,r]}function V1(r){var g=ug();return Q5(g,qg,r)}function Q5(r,g,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var h=r.baseQueue,i=l.pending;if(i!==null){if(h!==null){var u=h.next;h.next=i.next,i.next=u}g.baseQueue!==h&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=h=i,l.pending=null}if(i=r.baseState,h===null)r.memoizedState=i;else{g=h.next;var t=u=null,A=null,R=g,K=!1;do{var $=R.lane&-536870913;if($!==R.lane?(Vr&$)===$:(bv&$)===$){var J=R.revertLane;if(J===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),$===e1&&(K=!0);else if((bv&J)===J){R=R.next,J===e1&&(K=!0);continue}else $={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},A===null?(t=A=$,u=i):A=A.next=$,Kr.lanes|=J,h0|=J;$=R.action,b1&&o(i,$),i=R.hasEagerState?R.eagerState:o(i,$)}else J={lane:$,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},A===null?(t=A=J,u=i):A=A.next=J,Kr.lanes|=$,h0|=$;R=R.next}while(R!==null&&R!==g);if(A===null?u=i:A.next=t,!No(i,r.memoizedState)&&(dg=!0,K&&(o=Wh,o!==null)))throw o;r.memoizedState=i,r.baseState=u,r.baseQueue=A,l.lastRenderedState=i}return h===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Wi(r){var g=ug(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:h}=o,i=g.memoizedState;if(h!==null){o.pending=null;var u=h=h.next;do i=r(i,u.action),u=u.next;while(u!==h);No(i,g.memoizedState)||(dg=!0),g.memoizedState=i,g.baseQueue===null&&(g.baseState=i),o.lastRenderedState=i}return[i,l]}function z5(r,g,o){var l=Kr,h=Lo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var i=o();Jh||i===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Jh=!0)}else{if(i=g(),Jh||(o=g(),No(i,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)),Rg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||c8(l,g,i)}return h.memoizedState=i,o={value:i,getSnapshot:g},h.queue=o,Wu(f8.bind(null,l,o,r),[r]),l.flags|=2048,y1(xe|Co,{destroy:void 0},a8.bind(null,l,o,i,g),null),i}function qu(r,g,o){var l=Kr,h=ug(),i=pr;if(i){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!Jh){var u=g();No(o,u)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)}if(u=!No((qg||h).memoizedState,o))h.memoizedState=o,dg=!0;h=h.queue;var t=f8.bind(null,l,h,r);if(Eo(2048,Co,t,[r]),h.getSnapshot!==g||u||pg!==null&&pg.memoizedState.tag&xe){if(l.flags|=2048,y1(xe|Co,{destroy:void 0},a8.bind(null,l,h,o,g),null),Rg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");i||(bv&127)!==0||c8(l,g,o)}return o}function c8(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=Kr.updateQueue,g===null?(g=Au(),Kr.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function a8(r,g,o,l){g.value=o,g.getSnapshot=l,j8(g)&&p8(r)}function f8(r,g,o){return o(function(){j8(g)&&(ul(2,"updateSyncExternalStore()",r),p8(r))})}function j8(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!No(r,o)}catch(l){return!0}}function p8(r){var g=Jo(r,2);g!==null&&Ng(g,r,2)}function U5(r){var g=Lo();if(typeof r==="function"){var o=r;if(r=o(),b1){Wg(!0);try{o()}finally{Wg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:r},g}function K5(r){r=U5(r);var g=r.queue,o=AO.bind(null,Kr,g);return g.dispatch=o,[r.memoizedState,o]}function $5(r){var g=Lo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=_5.bind(null,Kr,!0,o),o.dispatch=g,[r,g]}function d8(r,g){var o=ug();return s8(o,qg,r,g)}function s8(r,g,o,l){return r.baseState=o,Q5(r,qg,typeof l==="function"?l:ke)}function rO(r,g){var o=ug();if(qg!==null)return s8(o,qg,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OG(r,g,o,l,h){if(Qu(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var i={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};C.T!==null?o(!0):i.isTransition=!1,l(i),o=g.pending,o===null?(i.next=g.pending=i,gO(g,i)):(i.next=o.next,g.pending=o.next=i)}}function gO(r,g){var{action:o,payload:l}=g,h=r.state;if(g.isTransition){var i=C.T,u={};u._updatedFibers=new Set,C.T=u;try{var t=o(h,l),A=C.S;A!==null&&A(u,t),oO(r,g,t)}catch(R){L5(r,g,R)}finally{i!==null&&u.types!==null&&(i.types!==null&&i.types!==u.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),i.types=u.types),C.T=i,i===null&&u._updatedFibers&&(r=u._updatedFibers.size,u._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{u=o(h,l),oO(r,g,u)}catch(R){L5(r,g,R)}}function oO(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(C.asyncTransitions++,o.then(Ju,Ju),o.then(function(l){eO(r,g,l)},function(l){return L5(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):eO(r,g,o)}function eO(r,g,o){g.status="fulfilled",g.value=o,lO(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,gO(r,o)))}function L5(r,g,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=o,lO(g),g=g.next;while(g!==l)}r.action=null}function lO(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function vO(r,g){return g}function _1(r,g){if(pr){var o=Rg.formState;if(o!==null){r:{var l=Kr;if(pr){if(Qg){g:{var h=Qg;for(var i=Le;h.nodeType!==8;){if(!i){h=null;break g}if(h=ne(h.nextSibling),h===null){h=null;break g}}i=h.data,h=i===b6||i===VR?h:null}if(h){Qg=ne(h.nextSibling),l=h.data===b6;break r}}Iv(l)}l=!1}l&&(g=o[0])}}return o=Lo(),o.memoizedState=o.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vO,lastRenderedState:g},o.queue=l,o=AO.bind(null,Kr,l),l.dispatch=o,l=U5(!1),i=_5.bind(null,Kr,!1,l.queue),l=Lo(),h={state:g,dispatch:null,action:r,pending:null},l.queue=h,o=OG.bind(null,Kr,h,i,o),h.dispatch=o,l.memoizedState=r,[g,o,!1]}function Ru(r){var g=ug();return hO(g,qg,r)}function hO(r,g,o){if(g=Q5(r,g,vO)[0],r=V1(ke)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Mi(g)}catch(u){if(u===mh)throw mw;throw u}else l=g;g=ug();var h=g.queue,i=h.dispatch;return o!==g.memoizedState&&(Kr.flags|=2048,y1(xe|Co,{destroy:void 0},HG.bind(null,h,o),null)),[l,i,r]}function HG(r,g){r.action=g}function Mu(r){var g=ug(),o=qg;if(o!==null)return hO(g,o,r);ug(),g=g.memoizedState,o=ug();var l=o.queue.dispatch;return o.memoizedState=r,[g,l,!1]}function y1(r,g,o,l){return r={tag:r,create:o,deps:l,inst:g,next:null},g=Kr.updateQueue,g===null&&(g=Au(),Kr.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,g.lastEffect=r),r}function I5(r){var g=Lo();return r={current:r},g.memoizedState=r}function E0(r,g,o,l){var h=Lo();Kr.flags|=r,h.memoizedState=y1(xe|g,{destroy:void 0},o,l===void 0?null:l)}function Eo(r,g,o,l){var h=ug();l=l===void 0?null:l;var i=h.memoizedState.inst;qg!==null&&l!==null&&M5(l,qg.memoizedState.deps)?h.memoizedState=y1(g,i,o,l):(Kr.flags|=r,h.memoizedState=y1(xe|g,i,o,l))}function Wu(r,g){(Kr.mode&ye)!==Ur?E0(276826112,Co,r,g):E0(8390656,Co,r,g)}function AG(r){Kr.flags|=4;var g=Kr.updateQueue;if(g===null)g=Au(),Kr.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function F5(r){var g=Lo(),o={impl:r};return g.memoizedState=o,function(){if((og&vo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function mu(r){var g=ug().memoizedState;return AG({ref:g,nextImpl:r}),function(){if((og&vo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function x5(r,g){var o=4194308;return(Kr.mode&ye)!==Ur&&(o|=134217728),E0(o,He,r,g)}function iO(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function N5(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;(Kr.mode&ye)!==Ur&&(l|=134217728),E0(l,He,iO.bind(null,g,r),o)}function Gu(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,Eo(4,He,iO.bind(null,g,r),o)}function B5(r,g){return Lo().memoizedState=[r,g===void 0?null:g],r}function Xu(r,g){var o=ug();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&M5(g,l[1]))return l[0];return o.memoizedState=[r,g],r}function Z5(r,g){var o=Lo();g=g===void 0?null:g;var l=r();if(b1){Wg(!0);try{r()}finally{Wg(!1)}}return o.memoizedState=[l,g],l}function Yu(r,g){var o=ug();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&M5(g,l[1]))return l[0];if(l=r(),b1){Wg(!0);try{r()}finally{Wg(!1)}}return o.memoizedState=[l,g],l}function C5(r,g){var o=Lo();return T5(o,r,g)}function bO(r,g){var o=ug();return uO(o,qg.memoizedState,r,g)}function nO(r,g){var o=ug();return qg===null?T5(o,r,g):uO(o,qg.memoizedState,r,g)}function T5(r,g,o){if(o===void 0||(bv&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=wH(),Kr.lanes|=r,h0|=r,o}function uO(r,g,o,l){if(No(o,g))return o;if(Xh.current!==null)return r=T5(r,o,l),No(r,g)||(dg=!0),r;if((bv&42)===0||(bv&1073741824)!==0&&(Vr&261930)===0)return dg=!0,r.memoizedState=o;return r=wH(),Kr.lanes|=r,h0|=r,g}function Ju(){C.asyncTransitions--}function wO(r,g,o,l,h){var i=bg.p;bg.p=i!==0&&i<_e?i:_e;var u=C.T,t={};t._updatedFibers=new Set,C.T=t,_5(r,!1,g,o);try{var A=h(),R=C.S;if(R!==null&&R(t,A),A!==null&&typeof A==="object"&&typeof A.then==="function"){C.asyncTransitions++,A.then(Ju,Ju);var K=wG(A,l);mi(r,g,K,be(r))}else mi(r,g,l,be(r))}catch($){mi(r,g,{then:function(){},status:"rejected",reason:$},be(r))}finally{bg.p=i,u!==null&&t.types!==null&&(u.types!==null&&u.types!==t.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),u.types=t.types),C.T=u,u===null&&t._updatedFibers&&(r=t._updatedFibers.size,t._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function S5(r,g,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var h=tO(r).queue;nG(r),wO(r,h,g,M1,o===null?G:function(){return PO(r),o(l)})}function tO(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:M1,baseState:M1,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:M1},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function PO(r){C.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=tO(r);g.next===null&&(g=r.alternate.memoizedState),mi(r,g.next.queue,{},be(r))}function k5(){var r=U5(!1);return r=wO.bind(null,Kr,r.queue,!0,!1),Lo().memoizedState=r,[!1,r]}function OO(){var r=V1(ke)[0],g=ug().memoizedState;return[typeof r==="boolean"?r:Mi(r),g]}function HO(){var r=Wi(ke)[0],g=ug().memoizedState;return[typeof r==="boolean"?r:Mi(r),g]}function c0(){return Kg($b)}function D5(){var r=Lo(),g=Rg.identifierPrefix;if(pr){var o=ev,l=ov;o=(l&~(1<<32-Io(l)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Qw++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=fY++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function V5(){return Lo().memoizedState=qG.bind(null,Kr)}function qG(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=be(o),h=Nv(l),i=Bv(o,h,l);i!==null&&(ul(l,"refresh()",r),Ng(i,o,l),Ai(i,o,l)),r=n5(),g!==null&&g!==void 0&&i!==null&&console.error("The seed argument is not enabled outside experimental channels."),h.payload={cache:r};return}o=o.return}}function RG(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=be(r);var h={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Qu(r)?qO(g,h):(h=pt(r,g,h,l),h!==null&&(ul(l,"dispatch()",r),Ng(h,r,l),RO(h,g,l)))}function AO(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=be(r),mi(r,g,o,l)&&ul(l,"setState()",r)}function mi(r,g,o,l){var h={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qu(r))qO(g,h);else{var i=r.alternate;if(r.lanes===0&&(i===null||i.lanes===0)&&(i=g.lastRenderedReducer,i!==null)){var u=C.H;C.H=ce;try{var t=g.lastRenderedState,A=i(t,o);if(h.hasEagerState=!0,h.eagerState=A,No(A,t))return dn(r,g,h,0),Rg===null&&pn(),!1}catch(R){}finally{C.H=u}}if(o=pt(r,g,h,l),o!==null)return Ng(o,r,l),RO(o,g,l),!0}return!1}function _5(r,g,o,l){if(C.T===null&&e1===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:W2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qu(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=pt(r,o,l,2),g!==null&&(ul(2,"setOptimistic()",r),Ng(g,r,2))}function Qu(r){var g=r.alternate;return r===Kr||g!==null&&g===Kr}function qO(r,g){Qh=Jw=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function RO(r,g,o){if((o&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,F0(r,o)}}function y5(r){if(r!==null&&typeof r!=="function"){var g=String(r);HR.has(g)||(HR.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E5(r,g,o,l){var h=r.memoizedState,i=o(l,h);if(r.mode&zo){Wg(!0);try{i=o(l,h)}finally{Wg(!1)}}i===void 0&&(g=y(g)||"Component",wR.has(g)||(wR.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),h=i===null||i===void 0?h:cr({},h,i),r.memoizedState=h,r.lanes===0&&(r.updateQueue.baseState=h)}function MO(r,g,o,l,h,i,u){var t=r.stateNode;if(typeof t.shouldComponentUpdate==="function"){if(o=t.shouldComponentUpdate(l,i,u),r.mode&zo){Wg(!0);try{o=t.shouldComponentUpdate(l,i,u)}finally{Wg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!ni(o,l)||!ni(h,i):!0}function WO(r,g,o,l){var h=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,l),g.state!==h&&(r=Z(r)||"Component",hR.has(r)||(hR.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),S4.enqueueReplaceState(g,g.state,null))}function a0(r,g){var o=g;if("ref"in g){o={};for(var l in g)l!=="ref"&&(o[l]=g[l])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var h in r)o[h]===void 0&&(o[h]=r[h])}return o}function mO(r){q4(r),console.warn(`%s

%s
`,zh?"An error occurred in the <"+zh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function GO(r){var g=zh?"The above error occurred in the <"+zh+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((k4||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,pR+" "+r[0],dR,pw+l+pw,sR):r.splice(0,0,pR,dR,pw+l+pw,sR),r.unshift(console),l=AJ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,o)}function XO(r){q4(r)}function zu(r,g){try{zh=g.source?Z(g.source):null,k4=null;var o=g.value;if(C.actQueue!==null)C.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:g.stack})}}catch(h){setTimeout(function(){throw h})}}function YO(r,g,o){try{zh=o.source?Z(o.source):null,k4=Z(g);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function c5(r,g,o){return o=Nv(o),o.tag=x4,o.payload={element:null},o.callback=function(){br(g.source,zu,r,g)},o}function a5(r){return r=Nv(r),r.tag=x4,r}function f5(r,g,o,l){var h=o.type.getDerivedStateFromError;if(typeof h==="function"){var i=l.value;r.payload=function(){return h(i)},r.callback=function(){q8(o),br(l.source,YO,g,o,l)}}var u=o.stateNode;u!==null&&typeof u.componentDidCatch==="function"&&(r.callback=function(){q8(o),br(l.source,YO,g,o,l),typeof h!=="function"&&(b0===null?b0=new Set([this]):b0.add(this)),yY(this,l),typeof h==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",Z(o)||"Unknown")})}function MG(r,g,o,l,h){if(o.flags|=32768,zl&&Ki(r,h),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=o.alternate,g!==null&&k1(g,o,h,!0),pr&&($l=!0),o=Oe.current,o!==null){switch(o.tag){case 31:case 13:return Fe===null?Bu():o.alternate===null&&Fg===tv&&(Fg=Kw),o.flags&=-257,o.flags|=65536,o.lanes=h,l===Gw?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([l]):g.add(l),A2(r,l,h)),!1;case 22:return o.flags|=65536,l===Gw?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([l]):o.add(l)),A2(r,l,h)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return A2(r,l,h),Bu(),!1}if(pr)return $l=!0,g=Oe.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=h,l!==X4&&wi(le(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==X4&&wi(le(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,l=le(l,o),h=c5(r.stateNode,l,h),Pu(r,h),Fg!==l0&&(Fg=n1)),!1;var i=le(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(mb===null?mb=[i]:mb.push(i),Fg!==l0&&(Fg=n1),g===null)return!0;l=le(l,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=h&-h,o.lanes|=r,r=c5(o.stateNode,l,r),Pu(o,r),!1;case 1:if(g=o.type,i=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||i!==null&&typeof i.componentDidCatch==="function"&&(b0===null||!b0.has(i))))return o.flags|=65536,h&=-h,o.lanes|=h,h=a5(h),f5(h,r,o,l),Pu(o,h),!1}o=o.return}while(o!==null);return!1}function Ho(r,g,o,l){g.child=r===null?fq(g,null,o,l):i1(g,r.child,o,l)}function JO(r,g,o,l,h){o=o.render;var i=g.ref;if("ref"in l){var u={};for(var t in l)t!=="ref"&&(u[t]=l[t])}else u=l;if(V0(g),l=W5(r,g,o,u,i,h),t=G5(),r!==null&&!dg)return X5(r,g,h),jl(r,g,h);return pr&&t&&e5(g),g.flags|=1,Ho(r,g,l,h),g.child}function QO(r,g,o,l,h){if(r===null){var i=o.type;if(typeof i==="function"&&!st(i)&&i.defaultProps===void 0&&o.compare===null)return o=T0(i),g.tag=15,g.type=o,p5(g,i),zO(r,g,o,l,h);return r=r5(o.type,null,l,g,g.mode,h),r.ref=g.ref,r.return=g,g.child=r}if(i=r.child,!e2(r,h)){var u=i.memoizedProps;if(o=o.compare,o=o!==null?o:ni,o(u,l)&&r.ref===g.ref)return jl(r,g,h)}return g.flags|=1,r=El(i,l),r.ref=g.ref,r.return=g,g.child=r}function zO(r,g,o,l,h){if(r!==null){var i=r.memoizedProps;if(ni(i,l)&&r.ref===g.ref&&g.type===r.type)if(dg=!1,g.pendingProps=l=i,e2(r,h))(r.flags&131072)!==0&&(dg=!0);else return g.lanes=r.lanes,jl(r,g,h)}return j5(r,g,o,l,h)}function UO(r,g,o,l){var h=l.children,i=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:ji,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(i=i!==null?i.baseLanes|o:o,r!==null){l=g.child=r.child;for(h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~i}else l=0,g.child=null;return KO(r,g,i,o,l)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&iu(g,i!==null?i.cachePool:null),i!==null?_8(g,i):A5(g),y8(g);else return l=g.lanes=536870912,KO(r,g,i!==null?i.baseLanes|o:o,o,l)}else i!==null?(iu(g,i.cachePool),_8(g,i),Cv(g),g.memoizedState=null):(r!==null&&iu(g,null),A5(g),Cv(g));return Ho(r,g,h,o),g.child}function Gi(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:ji,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function KO(r,g,o,l,h){var i=t5();return i=i===null?null:{parent:fg._currentValue,pool:i},g.memoizedState={baseLanes:o,cachePool:i},r!==null&&iu(g,null),A5(g),y8(g),r!==null&&k1(r,g,l,!0),g.childLanes=h,null}function Uu(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=$u({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function $O(r,g,o){return i1(g,r.child,null,o),r=Uu(g,g.pendingProps),r.flags|=2,ie(g),g.memoizedState=null,r}function WG(r,g,o){var l=g.pendingProps,h=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=Uu(g,l),g.lanes=536870912,Gi(null,r);if(R5(g),(r=Qg)?(o=gA(r,Le),o=o!==null&&o.data===H1?o:null,o!==null&&(l={dehydrated:o,treeContext:G8(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=W8(o),l.return=g,g.child=l,Ro=g,Qg=null)):o=null,o===null)throw gu(g,r),Iv(g);return g.lanes=536870912,null}return Uu(g,l)}var i=r.memoizedState;if(i!==null){var u=i.dehydrated;if(R5(g),h)if(g.flags&256)g.flags&=-257,g=$O(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(Y8(),(o&536870912)!==0&&Nu(g),dg||k1(r,g,o,!1),h=(o&r.childLanes)!==0,dg||h){if(l=Rg,l!==null&&(u=x0(l,o),u!==0&&u!==i.retryLane))throw i.retryLane=u,Jo(r,u),Ng(l,r,u),D4;Bu(),g=$O(r,g,o)}else r=i.treeContext,Qg=ne(u.nextSibling),Ro=g,pr=!0,pv=null,$l=!1,Pe=null,Le=!1,r!==null&&X8(g,r),g=Uu(g,l),g.flags|=4096;return g}return i=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&Nu(g),r=El(i,l),r.ref=g.ref,g.child=r,r.return=g,r}function Ku(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function j5(r,g,o,l,h){if(o.prototype&&typeof o.prototype.render==="function"){var i=y(o)||"Unknown";AR[i]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",i,i),AR[i]=!0)}if(g.mode&zo&&Ee.recordLegacyContextWarning(g,null),r===null&&(p5(g,g.type),o.contextTypes&&(i=y(o)||"Unknown",RR[i]||(RR[i]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",i)))),V0(g),o=W5(r,g,o,l,void 0,h),l=G5(),r!==null&&!dg)return X5(r,g,h),jl(r,g,h);return pr&&l&&e5(g),g.flags|=1,Ho(r,g,o,h),g.child}function LO(r,g,o,l,h,i){if(V0(g),uv=-1,Ob=r!==null&&r.type!==g.type,g.updateQueue=null,o=m5(g,l,o,h),E8(r,g),l=G5(),r!==null&&!dg)return X5(r,g,i),jl(r,g,i);return pr&&l&&e5(g),g.flags|=1,Ho(r,g,o,i),g.child}function IO(r,g,o,l,h){switch(O(g)){case!1:var i=g.stateNode,u=new g.type(g.memoizedProps,i.context).state;i.updater.enqueueSetState(i,u,null);break;case!0:g.flags|=128,g.flags|=65536,i=Error("Simulated error coming from DevTools");var t=h&-h;if(g.lanes|=t,u=Rg,u===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");t=a5(t),f5(t,u,g,le(i,g)),Pu(g,t)}if(V0(g),g.stateNode===null){if(u=jv,i=o.contextType,"contextType"in o&&i!==null&&(i===void 0||i.$$typeof!==Yl)&&!OR.has(o)&&(OR.add(o),t=i===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof i!=="object"?" However, it is set to a "+typeof i+".":i.$$typeof===V2?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(i).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(o)||"Component",t)),typeof i==="object"&&i!==null&&(u=Kg(i)),i=new o(l,u),g.mode&zo){Wg(!0);try{i=new o(l,u)}finally{Wg(!1)}}if(u=g.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=S4,g.stateNode=i,i._reactInternals=g,i._reactInternalInstance=vR,typeof o.getDerivedStateFromProps==="function"&&u===null&&(u=y(o)||"Component",iR.has(u)||(iR.add(u),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",u,i.state===null?"null":"undefined",u))),typeof o.getDerivedStateFromProps==="function"||typeof i.getSnapshotBeforeUpdate==="function"){var A=t=u=null;if(typeof i.componentWillMount==="function"&&i.componentWillMount.__suppressDeprecationWarning!==!0?u="componentWillMount":typeof i.UNSAFE_componentWillMount==="function"&&(u="UNSAFE_componentWillMount"),typeof i.componentWillReceiveProps==="function"&&i.componentWillReceiveProps.__suppressDeprecationWarning!==!0?t="componentWillReceiveProps":typeof i.UNSAFE_componentWillReceiveProps==="function"&&(t="UNSAFE_componentWillReceiveProps"),typeof i.componentWillUpdate==="function"&&i.componentWillUpdate.__suppressDeprecationWarning!==!0?A="componentWillUpdate":typeof i.UNSAFE_componentWillUpdate==="function"&&(A="UNSAFE_componentWillUpdate"),u!==null||t!==null||A!==null){i=y(o)||"Component";var R=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";nR.has(i)||(nR.add(i),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,i,R,u!==null?`
  `+u:"",t!==null?`
  `+t:"",A!==null?`
  `+A:""))}}i=g.stateNode,u=y(o)||"Component",i.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",u):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",u)),!i.getInitialState||i.getInitialState.isReactClassApproved||i.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",u),i.getDefaultProps&&!i.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",u),i.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",u),o.childContextTypes&&!PR.has(o)&&(PR.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",u)),o.contextTypes&&!tR.has(o)&&(tR.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",u)),typeof i.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",u),o.prototype&&o.prototype.isPureReactComponent&&typeof i.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(o)||"A pure component"),typeof i.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",u),typeof i.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",u),typeof i.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",u),typeof i.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",u),t=i.props!==l,i.props!==void 0&&t&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",u),i.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",u,u),typeof i.getSnapshotBeforeUpdate!=="function"||typeof i.componentDidUpdate==="function"||bR.has(o)||(bR.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(o))),typeof i.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",u),typeof i.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",u),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",u),(t=i.state)&&(typeof t!=="object"||eo(t))&&console.error("%s.state: must be set to an object or null",u),typeof i.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",u),i=g.stateNode,i.props=l,i.state=g.memoizedState,i.refs={},O5(g),u=o.contextType,i.context=typeof u==="object"&&u!==null?Kg(u):jv,i.state===l&&(u=y(o)||"Component",uR.has(u)||(uR.add(u),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",u))),g.mode&zo&&Ee.recordLegacyContextWarning(g,i),Ee.recordUnsafeLifecycleWarnings(g,i),i.state=g.memoizedState,u=o.getDerivedStateFromProps,typeof u==="function"&&(E5(g,o,u,l),i.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof i.getSnapshotBeforeUpdate==="function"||typeof i.UNSAFE_componentWillMount!=="function"&&typeof i.componentWillMount!=="function"||(u=i.state,typeof i.componentWillMount==="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",Z(g)||"Component"),S4.enqueueReplaceState(i,i.state,null)),Ri(g,l,i,h),qi(),i.state=g.memoizedState),typeof i.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&ye)!==Ur&&(g.flags|=134217728),i=!0}else if(r===null){i=g.stateNode;var K=g.memoizedProps;t=a0(o,K),i.props=t;var $=i.context;A=o.contextType,u=jv,typeof A==="object"&&A!==null&&(u=Kg(A)),R=o.getDerivedStateFromProps,A=typeof R==="function"||typeof i.getSnapshotBeforeUpdate==="function",K=g.pendingProps!==K,A||typeof i.UNSAFE_componentWillReceiveProps!=="function"&&typeof i.componentWillReceiveProps!=="function"||(K||$!==u)&&WO(g,i,l,u),e0=!1;var J=g.memoizedState;i.state=J,Ri(g,l,i,h),qi(),$=g.memoizedState,K||J!==$||e0?(typeof R==="function"&&(E5(g,o,R,l),$=g.memoizedState),(t=e0||MO(g,o,t,l,J,$,u))?(A||typeof i.UNSAFE_componentWillMount!=="function"&&typeof i.componentWillMount!=="function"||(typeof i.componentWillMount==="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&ye)!==Ur&&(g.flags|=134217728)):(typeof i.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&ye)!==Ur&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=$),i.props=l,i.state=$,i.context=u,i=t):(typeof i.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&ye)!==Ur&&(g.flags|=134217728),i=!1)}else{i=g.stateNode,H5(r,g),u=g.memoizedProps,A=a0(o,u),i.props=A,R=g.pendingProps,J=i.context,$=o.contextType,t=jv,typeof $==="object"&&$!==null&&(t=Kg($)),K=o.getDerivedStateFromProps,($=typeof K==="function"||typeof i.getSnapshotBeforeUpdate==="function")||typeof i.UNSAFE_componentWillReceiveProps!=="function"&&typeof i.componentWillReceiveProps!=="function"||(u!==R||J!==t)&&WO(g,i,l,t),e0=!1,J=g.memoizedState,i.state=J,Ri(g,l,i,h),qi();var x=g.memoizedState;u!==R||J!==x||e0||r!==null&&r.dependencies!==null&&eu(r.dependencies)?(typeof K==="function"&&(E5(g,o,K,l),x=g.memoizedState),(A=e0||MO(g,o,A,l,J,x,t)||r!==null&&r.dependencies!==null&&eu(r.dependencies))?($||typeof i.UNSAFE_componentWillUpdate!=="function"&&typeof i.componentWillUpdate!=="function"||(typeof i.componentWillUpdate==="function"&&i.componentWillUpdate(l,x,t),typeof i.UNSAFE_componentWillUpdate==="function"&&i.UNSAFE_componentWillUpdate(l,x,t)),typeof i.componentDidUpdate==="function"&&(g.flags|=4),typeof i.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof i.componentDidUpdate!=="function"||u===r.memoizedProps&&J===r.memoizedState||(g.flags|=4),typeof i.getSnapshotBeforeUpdate!=="function"||u===r.memoizedProps&&J===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=x),i.props=l,i.state=x,i.context=t,i=A):(typeof i.componentDidUpdate!=="function"||u===r.memoizedProps&&J===r.memoizedState||(g.flags|=4),typeof i.getSnapshotBeforeUpdate!=="function"||u===r.memoizedProps&&J===r.memoizedState||(g.flags|=1024),i=!1)}if(t=i,Ku(r,g),u=(g.flags&128)!==0,t||u){if(t=g.stateNode,_o(g),u&&typeof o.getDerivedStateFromError!=="function")o=null,Bo=-1;else if(o=Nq(t),g.mode&zo){Wg(!0);try{Nq(t)}finally{Wg(!1)}}g.flags|=1,r!==null&&u?(g.child=i1(g,r.child,null,h),g.child=i1(g,null,o,h)):Ho(r,g,o,h),g.memoizedState=t.state,r=g.child}else r=jl(r,g,h);return h=g.stateNode,i&&h.props!==l&&(Uh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",Z(g)||"a component"),Uh=!0),r}function FO(r,g,o,l){return D0(),g.flags|=256,Ho(r,g,o,l),g.child}function p5(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=y(g)||"Unknown",MR[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),MR[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=y(g)||"Unknown",qR[g]||(console.error("%s: Function components do not support contextType.",g),qR[g]=!0))}function d5(r){return{baseLanes:r,cachePool:L8()}}function s5(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function xO(r,g,o){var l,h=g.pendingProps;P(g)&&(g.flags|=128);var i=!1,u=(g.flags&128)!==0;if((l=u)||(l=r!==null&&r.memoizedState===null?!1:(Vg.current&tb)!==0),l&&(i=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(i?Zv(g):Cv(g),(r=Qg)?(o=gA(r,Le),o=o!==null&&o.data!==H1?o:null,o!==null&&(l={dehydrated:o,treeContext:G8(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=W8(o),l.return=g,g.child=l,Ro=g,Qg=null)):o=null,o===null)throw gu(g,r),Iv(g);return I2(o)?g.lanes=32:g.lanes=536870912,null}var t=h.children;if(h=h.fallback,i){Cv(g);var A=g.mode;return t=$u({mode:"hidden",children:t},A),h=S0(h,A,o,null),t.return=g,h.return=g,t.sibling=h,g.child=t,h=g.child,h.memoizedState=d5(o),h.childLanes=s5(r,l,o),g.memoizedState=V4,Gi(null,h)}return Zv(g),r2(g,t)}var R=r.memoizedState;if(R!==null){var K=R.dehydrated;if(K!==null){if(u)g.flags&256?(Zv(g),g.flags&=-257,g=g2(r,g,o)):g.memoizedState!==null?(Cv(g),g.child=r.child,g.flags|=128,g=null):(Cv(g),t=h.fallback,A=g.mode,h=$u({mode:"visible",children:h.children},A),t=S0(t,A,o,null),t.flags|=2,h.return=g,t.return=g,h.sibling=t,g.child=h,i1(g,r.child,null,o),h=g.child,h.memoizedState=d5(o),h.childLanes=s5(r,l,o),g.memoizedState=V4,g=Gi(null,h));else if(Zv(g),Y8(),(o&536870912)!==0&&Nu(g),I2(K)){if(l=K.nextSibling&&K.nextSibling.dataset,l){t=l.dgst;var $=l.msg;A=l.stck;var J=l.cstck}i=$,l=t,h=A,K=J,t=i,A=K,t=t?Error(t):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),t.stack=h||"",t.digest=l,l=A===void 0?null:A,h={value:t,source:null,stack:l},typeof l==="string"&&G4.set(t,h),wi(h),g=g2(r,g,o)}else if(dg||k1(r,g,o,!1),l=(o&r.childLanes)!==0,dg||l){if(l=Rg,l!==null&&(h=x0(l,o),h!==0&&h!==R.retryLane))throw R.retryLane=h,Jo(r,h),Ng(l,r,h),D4;L2(K)||Bu(),g=g2(r,g,o)}else L2(K)?(g.flags|=192,g.child=r.child,g=null):(r=R.treeContext,Qg=ne(K.nextSibling),Ro=g,pr=!0,pv=null,$l=!1,Pe=null,Le=!1,r!==null&&X8(g,r),g=r2(g,h.children),g.flags|=4096);return g}}if(i)return Cv(g),t=h.fallback,A=g.mode,J=r.child,K=J.sibling,h=El(J,{mode:"hidden",children:h.children}),h.subtreeFlags=J.subtreeFlags&65011712,K!==null?t=El(K,t):(t=S0(t,A,o,null),t.flags|=2),t.return=g,h.return=g,h.sibling=t,g.child=h,Gi(null,h),h=g.child,t=r.child.memoizedState,t===null?t=d5(o):(A=t.cachePool,A!==null?(J=fg._currentValue,A=A.parent!==J?{parent:J,pool:J}:A):A=L8(),t={baseLanes:t.baseLanes|o,cachePool:A}),h.memoizedState=t,h.childLanes=s5(r,l,o),g.memoizedState=V4,Gi(r.child,h);return R!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&Nu(g),Zv(g),o=r.child,r=o.sibling,o=El(o,{mode:"visible",children:h.children}),o.return=g,o.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=o,g.memoizedState=null,o}function r2(r,g){return g=$u({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function $u(r,g){return r=X(22,r,null,g),r.lanes=0,r}function g2(r,g,o){return i1(g,r.child,null,o),r=r2(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function NO(r,g,o){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),i5(r.return,g,o)}function o2(r,g,o,l,h,i){var u=r.memoizedState;u===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:h,treeForkCount:i}:(u.isBackwards=g,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=o,u.tailMode=h,u.treeForkCount=i)}function BO(r,g,o){var l=g.pendingProps,h=l.revealOrder,i=l.tail,u=l.children,t=Vg.current;if((l=(t&tb)!==0)?(t=t&Yh|tb,g.flags|=128):t&=Yh,mr(Vg,t,g),t=h==null?"null":h,h!=="forwards"&&h!=="unstable_legacy-backwards"&&h!=="together"&&h!=="independent"&&!WR[t])if(WR[t]=!0,h==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(h==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof h==="string")switch(h.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',h,h.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',h,h.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h);if(t=i==null?"null":i,!Uw[t])if(i==null){if(h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")Uw[t]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else i!=="visible"&&i!=="collapsed"&&i!=="hidden"?(Uw[t]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',i)):h!=="forwards"&&h!=="backwards"&&h!=="unstable_legacy-backwards"&&(Uw[t]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',i));r:if((h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")&&u!==void 0&&u!==null&&u!==!1)if(eo(u)){for(t=0;t<u.length;t++)if(!k8(u[t],t))break r}else if(t=N(u),typeof t==="function"){if(t=t.call(u))for(var A=t.next(),R=0;!A.done;A=t.next()){if(!k8(A.value,R))break r;R++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',h);if(Ho(r,g,u,o),pr?(Lv(),u=pi):u=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&NO(r,o,g);else if(r.tag===19)NO(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(h){case"forwards":o=g.child;for(h=null;o!==null;)r=o.alternate,r!==null&&Ou(r)===null&&(h=o),o=o.sibling;o=h,o===null?(h=g.child,g.child=null):(h=o.sibling,o.sibling=null),o2(g,!1,h,o,i,u);break;case"backwards":case"unstable_legacy-backwards":o=null,h=g.child;for(g.child=null;h!==null;){if(r=h.alternate,r!==null&&Ou(r)===null){g.child=h;break}r=h.sibling,h.sibling=o,o=h,h=r}o2(g,!0,o,null,i,u);break;case"together":o2(g,!1,null,null,void 0,u);break;default:g.memoizedState=null}return g.child}function jl(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Bo=-1,h0|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(k1(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=El(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=El(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function e2(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&eu(r)?!0:!1}function mG(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),Fv(g,fg,r.memoizedState.cache),D0();break;case 27:case 5:Qr(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:Fv(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,R5(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return Zv(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return xO(r,g,o);return Zv(g),r=jl(r,g,o),r!==null?r.sibling:null}Zv(g);break;case 19:var h=(r.flags&128)!==0;if(l=(o&g.childLanes)!==0,l||(k1(r,g,o,!1),l=(o&g.childLanes)!==0),h){if(l)return BO(r,g,o);g.flags|=128}if(h=g.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mr(Vg,Vg.current,g),l)break;else return null;case 22:return g.lanes=0,UO(r,g,o,g.pendingProps);case 24:Fv(g,fg,r.memoizedState.cache)}return jl(r,g,o)}function l2(r,g,o){if(g._debugNeedsRemount&&r!==null){o=r5(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===l.child)l.child=o;else{var h=l.child;if(h===null)throw Error("Expected parent to have a child.");for(;h.sibling!==g;)if(h=h.sibling,h===null)throw Error("Expected to find the previous sibling.");h.sibling=o}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)dg=!0;else{if(!e2(r,o)&&(g.flags&128)===0)return dg=!1,mG(r,g,o);dg=(r.flags&131072)!==0?!0:!1}else{if(dg=!1,l=pr)Lv(),l=(g.flags&1048576)!==0;l&&(l=g.index,Lv(),m8(g,pi,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=xv(g.elementType),g.type=r,typeof r==="function")st(r)?(l=a0(r,l),g.tag=1,g.type=r=T0(r),g=IO(null,g,r,l,o)):(g.tag=0,p5(g,r),g.type=r=T0(r),g=j5(null,g,r,l,o));else{if(r!==void 0&&r!==null){if(h=r.$$typeof,h===Ci){g.tag=11,g.type=r=dt(r),g=JO(null,g,r,l,o);break r}else if(h===ju){g.tag=14,g=QO(null,g,r,l,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===ue&&(g=" Did you wrap a component in React.lazy() more than once?"),o=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return j5(r,g,g.type,g.pendingProps,o);case 1:return l=g.type,h=a0(l,g.pendingProps),IO(r,g,l,h,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var i=g.memoizedState;h=i.element,H5(r,g),Ri(g,l,null,o);var u=g.memoizedState;if(l=u.cache,Fv(g,fg,l),l!==i.cache&&b5(g,[fg],o,!0),qi(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},g.updateQueue.baseState=i,g.memoizedState=i,g.flags&256){g=FO(r,g,l,o);break r}else if(l!==h){h=le(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),wi(h),g=FO(r,g,l,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Qg=ne(r.firstChild),Ro=g,pr=!0,pv=null,$l=!1,Pe=null,Le=!0,o=fq(g,null,l,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(D0(),l===h){g=jl(r,g,o);break r}Ho(r,g,l,o)}g=g.child}return g;case 26:return Ku(r,g),r===null?(o=iA(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,l=Br(_v.current),l=Su(l).createElement(o),l[qo]=g,l[Fo]=r,Ao(l,o,r),Yr(l),g.stateNode=l):g.memoizedState=iA(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return Qr(g),r===null&&pr&&(l=Br(_v.current),h=vr(),l=g.stateNode=vA(g.type,g.pendingProps,l,h,!1),$l||(h=cH(l,g.type,g.pendingProps,h),h!==null&&(k0(g,0).serverProps=h)),Ro=g,Le=!0,h=Qg,Dv(g.type)?(t6=h,Qg=ne(l.firstChild)):Qg=h),Ho(r,g,g.pendingProps.children,o),Ku(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(i=vr(),l=_t(g.type,i.ancestorInfo),h=Qg,(u=!h)||(u=nX(h,g.type,g.pendingProps,Le),u!==null?(g.stateNode=u,$l||(i=cH(u,g.type,g.pendingProps,i),i!==null&&(k0(g,0).serverProps=i)),Ro=g,Qg=ne(u.firstChild),Le=!1,i=!0):i=!1,u=!i),u&&(l&&gu(g,h),Iv(g))),Qr(g),h=g.type,i=g.pendingProps,u=r!==null?r.memoizedProps:null,l=i.children,K2(h,i)?l=null:u!==null&&K2(h,u)&&(g.flags|=32),g.memoizedState!==null&&(h=W5(r,g,PG,null,null,o),$b._currentValue=h),Ku(r,g),Ho(r,g,l,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=vr(),l=r.ancestorInfo.current,o=l!=null?yn(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Qg,(l=!r)||(l=uX(r,g.pendingProps,Le),l!==null?(g.stateNode=l,Ro=g,Qg=null,l=!0):l=!1,l=!l),l&&(o&&gu(g,r),Iv(g))),null;case 13:return xO(r,g,o);case 4:return k(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=i1(g,null,l,o):Ho(r,g,l,o),g.child;case 11:return JO(r,g,g.type,g.pendingProps,o);case 7:return Ho(r,g,g.pendingProps,o),g.child;case 8:return Ho(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,Ho(r,g,g.pendingProps.children,o),g.child;case 10:return l=g.type,h=g.pendingProps,i=h.value,"value"in h||mR||(mR=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fv(g,l,i),Ho(r,g,h.children,o),g.child;case 9:return h=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V0(g),h=Kg(h),l=$4(l,h,void 0),g.flags|=1,Ho(r,g,l,o),g.child;case 14:return QO(r,g,g.type,g.pendingProps,o);case 15:return zO(r,g,g.type,g.pendingProps,o);case 19:return BO(r,g,o);case 31:return WG(r,g,o);case 22:return UO(r,g,o,g.pendingProps);case 24:return V0(g),l=Kg(fg),r===null?(h=t5(),h===null&&(h=Rg,i=n5(),h.pooledCache=i,_0(i),i!==null&&(h.pooledCacheLanes|=o),h=i),g.memoizedState={parent:l,cache:h},O5(g),Fv(g,fg,h)):((r.lanes&o)!==0&&(H5(r,g),Ri(g,null,null,o),qi()),h=r.memoizedState,i=g.memoizedState,h.parent!==l?(h={parent:l,cache:l},g.memoizedState=h,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=h),Fv(g,fg,l)):(l=i.cache,Fv(g,fg,l),l!==h.cache&&b5(g,[fg],o,!0))),Ho(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function pl(r){r.flags|=4}function v2(r,g,o,l,h){if(g=(r.mode&kY)!==Ur)g=!1;if(g){if(r.flags|=16777216,(h&335544128)===h)if(r.stateNode.complete)r.flags|=8192;else if(HH())r.flags|=8192;else throw h1=Gw,I4}else r.flags&=-16777217}function ZO(r,g){if(g.type!=="stylesheet"||(g.state.loading&Be)!==R1)r.flags&=-16777217;else if(r.flags|=16777216,!tA(g))if(HH())r.flags|=8192;else throw h1=Gw,I4}function Lu(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?N1():536870912,r.lanes|=g,t1|=g)}function Xi(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function mg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(g)if((r.mode&kr)!==Ur){for(var{selfBaseDuration:h,child:i}=r;i!==null;)o|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,h+=i.treeBaseDuration,i=i.sibling;r.treeBaseDuration=h}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=r,h=h.sibling;else if((r.mode&kr)!==Ur){h=r.actualDuration,i=r.selfBaseDuration;for(var u=r.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,h+=u.actualDuration,i+=u.treeBaseDuration,u=u.sibling;r.actualDuration=h,r.treeBaseDuration=i}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=l,r.childLanes=o,g}function GG(r,g,o){var l=g.pendingProps;switch(l5(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mg(g),null;case 1:return mg(g),null;case 3:if(o=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),al(fg,g),s(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)S1(g)?(h5(),pl(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,v5());return mg(g),null;case 26:var{type:h,memoizedState:i}=g;return r===null?(pl(g),i!==null?(mg(g),ZO(g,i)):(mg(g),v2(g,h,null,l,o))):i?i!==r.memoizedState?(pl(g),mg(g),ZO(g,i)):(mg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&pl(g),mg(g),v2(g,h,r,l,o)),null;case 27:if(Gr(g),o=Br(_v.current),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&pl(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mg(g),null}r=vr(),S1(g)?J8(g,r):(r=vA(h,l,o,r,!0),g.stateNode=r,pl(g))}return mg(g),null;case 5:if(Gr(g),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&pl(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return mg(g),null}var u=vr();if(S1(g))J8(g,u);else{switch(i=Br(_v.current),_t(h,u.ancestorInfo),u=u.context,i=Su(i),u){case Bh:i=i.createElementNS(hh,h);break;case aw:i=i.createElementNS(ew,h);break;default:switch(h){case"svg":i=i.createElementNS(hh,h);break;case"math":i=i.createElementNS(ew,h);break;case"script":i=i.createElement("div"),i.innerHTML="<script></script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is==="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is==="string"?i.createElement(h,{is:l.is}):i.createElement(h),h.indexOf("-")===-1&&(h!==h.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",h),Object.prototype.toString.call(i)!=="[object HTMLUnknownElement]"||Ve.call(yR,h)||(yR[h]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",h)))}}i[qo]=g,i[Fo]=l;r:for(u=g.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===g)break r;for(;u.sibling===null;){if(u.return===null||u.return===g)break r;u=u.return}u.sibling.return=u.return,u=u.sibling}g.stateNode=i;r:switch(Ao(i,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&pl(g)}}return mg(g),v2(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&pl(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Br(_v.current),o=vr(),S1(g)){if(r=g.stateNode,o=g.memoizedProps,h=!$l,l=null,i=Ro,i!==null)switch(i.tag){case 3:h&&(h=eA(r,o,l),h!==null&&(k0(g,0).serverProps=h));break;case 27:case 5:l=i.memoizedProps,h&&(h=eA(r,o,l),h!==null&&(k0(g,0).serverProps=h))}r[qo]=g,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||DH(r.nodeValue,o)?!0:!1,r||Iv(g,!0)}else h=o.ancestorInfo.current,h!=null&&yn(l,h.tag,o.ancestorInfo.implicitRootScope),r=Su(r).createTextNode(l),r[qo]=g,g.stateNode=r}return mg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(l=S1(g),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[qo]=g,mg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else h5(),D0(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,mg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=v5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return ie(g),g;return ie(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return mg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=l,i=S1(g),h!==null&&h.dehydrated!==null){if(r===null){if(!i)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(i=g.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");i[qo]=g,mg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration))}else h5(),D0(),(g.flags&128)===0&&(h=g.memoizedState=null),g.flags|=4,mg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration));h=!1}else h=v5(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h){if(g.flags&256)return ie(g),g;return ie(g),null}}if(ie(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Ur&&Oi(g),g;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=g.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==h&&(l.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),Lu(g,g.updateQueue),mg(g),(g.mode&kr)!==Ur&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(g),r===null&&G2(g.stateNode.containerInfo),mg(g),null;case 10:return al(g.type,g),mg(g),null;case 19:if(Ar(Vg,g),l=g.memoizedState,l===null)return mg(g),null;if(h=(g.flags&128)!==0,i=l.rendering,i===null)if(h)Xi(l,!1);else{if(Fg!==tv||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(i=Ou(r),i!==null){g.flags|=128,Xi(l,!1),r=i.updateQueue,g.updateQueue=r,Lu(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)M8(o,r),o=o.sibling;return mr(Vg,Vg.current&Yh|tb,g),pr&&cl(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&io()>Nw&&(g.flags|=128,h=!0,Xi(l,!1),g.lanes=4194304)}else{if(!h)if(r=Ou(i),r!==null){if(g.flags|=128,h=!0,r=r.updateQueue,g.updateQueue=r,Lu(g,r),Xi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!pr)return mg(g),null}else 2*io()-l.renderingStartTime>Nw&&o!==536870912&&(g.flags|=128,h=!0,Xi(l,!1),g.lanes=4194304);l.isBackwards?(i.sibling=g.child,g.child=i):(r=l.last,r!==null?r.sibling=i:g.child=i,l.last=i)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=io(),r.sibling=null,o=Vg.current,o=h?o&Yh|tb:o&Yh,mr(Vg,o,g),pr&&cl(g,l.treeForkCount),r;return mg(g),null;case 22:case 23:return ie(g),q5(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(o&536870912)!==0&&(g.flags&128)===0&&(mg(g),g.subtreeFlags&6&&(g.flags|=8192)):mg(g),o=g.updateQueue,o!==null&&Lu(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==o&&(g.flags|=2048),r!==null&&Ar(l1,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),al(fg,g),mg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function XG(r,g){switch(l5(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Oi(g),g):null;case 3:return al(fg,g),s(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Gr(g),null;case 31:if(g.memoizedState!==null){if(ie(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Oi(g),g):null;case 13:if(ie(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Oi(g),g):null;case 19:return Ar(Vg,g),null;case 4:return s(g),null;case 10:return al(g.type,g),null;case 22:case 23:return ie(g),q5(g),r!==null&&Ar(l1,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Oi(g),g):null;case 24:return al(fg,g),null;case 25:return null;default:return null}}function CO(r,g){switch(l5(g),g.tag){case 3:al(fg,g),s(g);break;case 26:case 27:case 5:Gr(g);break;case 4:s(g);break;case 31:g.memoizedState!==null&&ie(g);break;case 13:ie(g);break;case 19:Ar(Vg,g);break;case 10:al(g.type,g);break;case 22:case 23:ie(g),q5(g),r!==null&&Ar(l1,g);break;case 24:al(fg,g)}}function ql(r){return(r.mode&kr)!==Ur}function TO(r,g){ql(r)?(Al(),Yi(g,r),Hl()):Yi(g,r)}function h2(r,g,o){ql(r)?(Al(),E1(o,r,g),Hl()):E1(o,r,g)}function Yi(r,g){try{var o=g.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var h=l.next;o=h;do{if((o.tag&r)===r&&(l=void 0,(r&Zo)!==Yw&&(Fh=!0),l=br(g,EY,o),(r&Zo)!==Yw&&(Fh=!1),l!==void 0&&typeof l!=="function")){var i=void 0;i=(o.tag&He)!==0?"useLayoutEffect":(o.tag&Zo)!==0?"useInsertionEffect":"useEffect";var u=void 0;u=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+i+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+i+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,br(g,function(t,A){console.error("%s must not return anything besides a function, which is used for clean-up.%s",t,A)},i,u)}o=o.next}while(o!==h)}}catch(t){ig(g,g.return,t)}}function E1(r,g,o){try{var l=g.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var i=h.next;l=i;do{if((l.tag&r)===r){var u=l.inst,t=u.destroy;t!==void 0&&(u.destroy=void 0,(r&Zo)!==Yw&&(Fh=!0),h=g,br(h,cY,h,o,t),(r&Zo)!==Yw&&(Fh=!1))}l=l.next}while(l!==i)}}catch(A){ig(g,g.return,A)}}function SO(r,g){ql(r)?(Al(),Yi(g,r),Hl()):Yi(g,r)}function i2(r,g,o){ql(r)?(Al(),E1(o,r,g),Hl()):E1(o,r,g)}function kO(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Uh||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Z(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Z(r)||"instance"));try{br(r,V8,g,o)}catch(l){ig(r,r.return,l)}}}function YG(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function JG(r,g){var{memoizedProps:o,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Uh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Z(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Z(r)||"instance"));try{var h=a0(r.type,o),i=br(r,YG,g,h,l);o=GR,i!==void 0||o.has(r.type)||(o.add(r.type),br(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",Z(r))})),g.__reactInternalSnapshotBeforeUpdate=i}catch(u){ig(r,r.return,u)}}function DO(r,g,o){o.props=a0(r.type,r.memoizedProps),o.state=r.memoizedState,ql(r)?(Al(),br(r,kq,r,g,o),Hl()):br(r,kq,r,g,o)}function QG(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(ql(r))try{Al(),r.refCleanup=g(o)}finally{Hl()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",Z(r)),g.current=o}}function Ji(r,g){try{br(r,QG,r)}catch(o){ig(r,g,o)}}function Rl(r,g){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(ql(r))try{Al(),br(r,l)}finally{Hl(r)}else br(r,l)}catch(h){ig(r,g,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(ql(r))try{Al(),br(r,o,null)}finally{Hl(r)}else br(r,o,null)}catch(h){ig(r,g,h)}else o.current=null}function VO(r,g,o,l){var h=r.memoizedProps,i=h.id,u=h.onCommit;h=h.onRender,g=g===null?"mount":"update",Rw&&(g="nested-update"),typeof h==="function"&&h(i,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof u==="function"&&u(i,g,l,o)}function zG(r,g,o,l){var h=r.memoizedProps;r=h.id,h=h.onPostCommit,g=g===null?"mount":"update",Rw&&(g="nested-update"),typeof h==="function"&&h(r,g,l,o)}function _O(r){var{type:g,memoizedProps:o,stateNode:l}=r;try{br(r,pG,l,g,o,r)}catch(h){ig(r,r.return,h)}}function b2(r,g,o){try{br(r,sG,r.stateNode,r.type,o,g,r)}catch(l){ig(r,r.return,l)}}function yO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Dv(r.type)||r.tag===4}function n2(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||yO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Dv(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function u2(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(dH(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(dH(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=yl));else if(l!==4&&(l===27&&Dv(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(u2(r,g,o),r=r.sibling;r!==null;)u2(r,g,o),r=r.sibling}function Iu(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(l!==4&&(l===27&&Dv(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Iu(r,g,o),r=r.sibling;r!==null;)Iu(r,g,o),r=r.sibling}function UG(r){for(var g,o=r.return;o!==null;){if(yO(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=n2(r),Iu(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(pH(o),g.flags&=-33),g=n2(r),Iu(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=n2(r),u2(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function EO(r){var{stateNode:g,memoizedProps:o}=r;try{br(r,HX,r.type,o,g,r)}catch(l){ig(r,r.return,l)}}function cO(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function KG(r,g){if(r=r.containerInfo,n6=dw,r=n8(r),ct(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:h,focusNode:i}=l;l=l.focusOffset;try{o.nodeType,i.nodeType}catch(hr){o=null;break r}var u=0,t=-1,A=-1,R=0,K=0,$=r,J=null;g:for(;;){for(var x;;){if($!==o||h!==0&&$.nodeType!==3||(t=u+h),$!==i||l!==0&&$.nodeType!==3||(A=u+l),$.nodeType===3&&(u+=$.nodeValue.length),(x=$.firstChild)===null)break;J=$,$=x}for(;;){if($===r)break g;if(J===o&&++R===h&&(t=u),J===i&&++K===l&&(A=u),(x=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=x}o=t===-1||A===-1?null:{start:t,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;u6={focusedElem:r,selectionRange:o},dw=!1;for(no=g;no!==null;)if(g=no,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,no=r;else for(;no!==null;){switch(r=g=no,o=r.alternate,h=r.flags,r.tag){case 0:if((h&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)h=r[o],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:(h&1024)!==0&&o!==null&&JG(r,o);break;case 3:if((h&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)$2(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$2(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((h&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,no=r;break}no=g.return}}function aO(r,g,o){var l=ve(),h=wl(),i=Pl(),u=Ol(),t=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(r,o),t&4&&TO(o,He|xe);break;case 1:if(Ml(r,o),t&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||Uh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Z(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Z(o)||"instance")),ql(o)?(Al(),br(o,L4,o,r),Hl()):br(o,L4,o,r);else{var A=a0(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||Uh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Z(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Z(o)||"instance")),ql(o)?(Al(),br(o,Cq,o,r,A,g,r.__reactInternalSnapshotBeforeUpdate),Hl()):br(o,Cq,o,r,A,g,r.__reactInternalSnapshotBeforeUpdate)}t&64&&kO(o),t&512&&Ji(o,o.return);break;case 3:if(g=fl(),Ml(r,o),t&64&&(t=o.updateQueue,t!==null)){if(A=null,o.child!==null)switch(o.child.tag){case 27:case 5:A=o.child.stateNode;break;case 1:A=o.child.stateNode}try{br(o,V8,t,A)}catch(K){ig(o,o.return,K)}}r.effectDuration+=vu(g);break;case 27:g===null&&t&4&&EO(o);case 26:case 5:if(Ml(r,o),g===null){if(t&4)_O(o);else if(t&64){r=o.type,g=o.memoizedProps,A=o.stateNode;try{br(o,dG,A,r,g,o)}catch(K){ig(o,o.return,K)}}}t&512&&Ji(o,o.return);break;case 12:if(t&4){t=fl(),Ml(r,o),r=o.stateNode,r.effectDuration+=Pi(t);try{br(o,VO,o,g,dv,r.effectDuration)}catch(K){ig(o,o.return,K)}}else Ml(r,o);break;case 31:Ml(r,o),t&4&&pO(r,o);break;case 13:Ml(r,o),t&4&&dO(r,o),t&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(t=CG.bind(null,o),wX(r,t))));break;case 22:if(t=o.memoizedState!==null||wv,!t){g=g!==null&&g.memoizedState!==null||sg,A=wv;var R=sg;wv=t,(sg=g)&&!R?(Wl(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&fn(o,Jr,zr)):Ml(r,o),wv=A,sg=R}break;case 30:break;default:Ml(r,o)}(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bg||0.05<Ig)&&nl(o,Jr,zr,Ig,$g),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<zr-Jr&&(cO(o.return.alternate,o.return)||bl(o,Jr,zr,"Mount"))),he(l),tl(h),$g=i,Bg=u}function fO(r){var g=r.alternate;g!==null&&(r.alternate=null,fO(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&nr(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dl(r,g,o){for(o=o.child;o!==null;)jO(r,g,o),o=o.sibling}function jO(r,g,o){if(Qo&&typeof Qo.onCommitFiberUnmount==="function")try{Qo.onCommitFiberUnmount(lh,o)}catch(R){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",R))}var l=ve(),h=wl(),i=Pl(),u=Ol();switch(o.tag){case 26:sg||Rl(o,g),dl(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:sg||Rl(o,g);var t=ro,A=fo;Dv(o.type)&&(ro=o.stateNode,fo=!1),dl(r,g,o),br(o,xi,o.stateNode),ro=t,fo=A;break;case 5:sg||Rl(o,g);case 6:if(t=ro,A=fo,ro=null,dl(r,g,o),ro=t,fo=A,ro!==null)if(fo)try{br(o,oX,ro,o.stateNode)}catch(R){ig(o,g,R)}else try{br(o,gX,ro,o.stateNode)}catch(R){ig(o,g,R)}break;case 18:ro!==null&&(fo?(r=ro,sH(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),rh(r)):sH(ro,o.stateNode));break;case 4:t=ro,A=fo,ro=o.stateNode.containerInfo,fo=!0,dl(r,g,o),ro=t,fo=A;break;case 0:case 11:case 14:case 15:E1(Zo,o,g),sg||h2(o,g,He),dl(r,g,o);break;case 1:sg||(Rl(o,g),t=o.stateNode,typeof t.componentWillUnmount==="function"&&DO(o,g,t)),dl(r,g,o);break;case 21:dl(r,g,o);break;case 22:sg=(t=sg)||o.memoizedState!==null,dl(r,g,o),sg=t;break;default:dl(r,g,o)}(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(o,Jr,zr,Ig,$g),he(l),tl(h),$g=i,Bg=u}function pO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{br(g,PX,r)}catch(o){ig(g,g.return,o)}}}function dO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{br(g,OX,r)}catch(o){ig(g,g.return,o)}}function $G(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new XR),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new XR),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Fu(r,g){var o=$G(r);g.forEach(function(l){if(!o.has(l)){if(o.add(l),zl)if(Kh!==null&&$h!==null)Ki($h,Kh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var h=TG.bind(null,r,l);l.then(h,h)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var l=0;l<o.length;l++){var h=r,i=g,u=o[l],t=ve(),A=i;r:for(;A!==null;){switch(A.tag){case 27:if(Dv(A.type)){ro=A.stateNode,fo=!1;break r}break;case 5:ro=A.stateNode,fo=!1;break r;case 3:case 4:ro=A.stateNode.containerInfo,fo=!0;break r}A=A.return}if(ro===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");jO(h,i,u),ro=null,fo=!1,(u.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&bl(u,Jr,zr,"Unmount"),he(t),h=u,i=h.alternate,i!==null&&(i.return=null),h.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)sO(g,r),g=g.sibling}function sO(r,g){var o=ve(),l=wl(),h=Pl(),i=Ol(),u=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),ao(r),t&4&&(E1(Zo|xe,r,r.return),Yi(Zo|xe,r),h2(r,r.return,He|xe));break;case 1:if(co(g,r),ao(r),t&512&&(sg||u===null||Rl(u,u.return)),t&64&&wv&&(t=r.updateQueue,t!==null&&(u=t.callbacks,u!==null))){var A=t.shared.hiddenCallbacks;t.shared.hiddenCallbacks=A===null?u:A.concat(u)}break;case 26:if(A=ae,co(g,r),ao(r),t&512&&(sg||u===null||Rl(u,u.return)),t&4){var R=u!==null?u.memoizedState:null;if(t=r.memoizedState,u===null)if(t===null)if(r.stateNode===null){r:{t=r.type,u=r.memoizedProps,A=A.ownerDocument||A;g:switch(t){case"title":if(R=A.getElementsByTagName("title")[0],!R||R[ki]||R[qo]||R.namespaceURI===hh||R.hasAttribute("itemprop"))R=A.createElement(t),A.head.insertBefore(R,A.querySelector("head > title"));Ao(R,t,u),R[qo]=r,Yr(R),t=R;break r;case"link":var K=uA("link","href",A).get(t+(u.href||""));if(K){for(var $=0;$<K.length;$++)if(R=K[$],R.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&R.getAttribute("rel")===(u.rel==null?null:u.rel)&&R.getAttribute("title")===(u.title==null?null:u.title)&&R.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){K.splice($,1);break g}}R=A.createElement(t),Ao(R,t,u),A.head.appendChild(R);break;case"meta":if(K=uA("meta","content",A).get(t+(u.content||""))){for($=0;$<K.length;$++)if(R=K[$],tg(u.content,"content"),R.getAttribute("content")===(u.content==null?null:""+u.content)&&R.getAttribute("name")===(u.name==null?null:u.name)&&R.getAttribute("property")===(u.property==null?null:u.property)&&R.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&R.getAttribute("charset")===(u.charSet==null?null:u.charSet)){K.splice($,1);break g}}R=A.createElement(t),Ao(R,t,u),A.head.appendChild(R);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+t+'". This is a bug in React.')}R[qo]=r,Yr(R),t=R}r.stateNode=t}else wA(A,r.type,r.stateNode);else r.stateNode=nA(A,t,r.memoizedProps);else R!==t?(R===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):R.count--,t===null?wA(A,r.type,r.stateNode):nA(A,t,r.memoizedProps)):t===null&&r.stateNode!==null&&b2(r,r.memoizedProps,u.memoizedProps)}break;case 27:co(g,r),ao(r),t&512&&(sg||u===null||Rl(u,u.return)),u!==null&&t&4&&b2(r,r.memoizedProps,u.memoizedProps);break;case 5:if(co(g,r),ao(r),t&512&&(sg||u===null||Rl(u,u.return)),r.flags&32){A=r.stateNode;try{br(r,pH,A)}catch(Pr){ig(r,r.return,Pr)}}t&4&&r.stateNode!=null&&(A=r.memoizedProps,b2(r,A,u!==null?u.memoizedProps:A)),t&1024&&(_4=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),ao(r),t&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");t=r.memoizedProps,u=u!==null?u.memoizedProps:t,A=r.stateNode;try{br(r,rX,A,u,t)}catch(Pr){ig(r,r.return,Pr)}}break;case 3:if(A=fl(),fw=null,R=ae,ae=ku(g.containerInfo),co(g,r),ae=R,ao(r),t&4&&u!==null&&u.memoizedState.isDehydrated)try{br(r,tX,g.containerInfo)}catch(Pr){ig(r,r.return,Pr)}_4&&(_4=!1,rH(r)),g.effectDuration+=vu(A);break;case 4:t=ae,ae=ku(r.stateNode.containerInfo),co(g,r),ao(r),ae=t;break;case 12:t=fl(),co(g,r),ao(r),r.stateNode.effectDuration+=Pi(t);break;case 31:co(g,r),ao(r),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Fu(r,t)));break;case 13:co(g,r),ao(r),r.child.flags&8192&&r.memoizedState!==null!==(u!==null&&u.memoizedState!==null)&&(xw=io()),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Fu(r,t)));break;case 22:A=r.memoizedState!==null;var J=u!==null&&u.memoizedState!==null,x=wv,hr=sg;if(wv=x||A,sg=hr||J,co(g,r),sg=hr,wv=x,J&&!A&&!x&&!hr&&(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&fn(r,Jr,zr),ao(r),t&8192)r:for(g=r.stateNode,g._visibility=A?g._visibility&~ji:g._visibility|ji,!A||u===null||J||wv||sg||(f0(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&bl(r,Jr,zr,"Disconnect")),u=null,g=r;;){if(g.tag===5||g.tag===26){if(u===null){J=u=g;try{R=J.stateNode,A?br(J,lX,R):br(J,iX,J.stateNode,J.memoizedProps)}catch(Pr){ig(J,J.return,Pr)}}}else if(g.tag===6){if(u===null){J=g;try{K=J.stateNode,A?br(J,vX,K):br(J,bX,K,J.memoizedProps)}catch(Pr){ig(J,J.return,Pr)}}}else if(g.tag===18){if(u===null){J=g;try{$=J.stateNode,A?br(J,eX,$):br(J,hX,J.stateNode)}catch(Pr){ig(J,J.return,Pr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;u===g&&(u=null),g=g.return}u===g&&(u=null),g.sibling.return=g.return,g=g.sibling}t&4&&(t=r.updateQueue,t!==null&&(u=t.retryQueue,u!==null&&(t.retryQueue=null,Fu(r,u))));break;case 19:co(g,r),ao(r),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Fu(r,t)));break;case 30:break;case 21:break;default:co(g,r),ao(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&((Bg||0.05<Ig)&&nl(r,Jr,zr,Ig,$g),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<zr-Jr&&(cO(r.return.alternate,r.return)||bl(r,Jr,zr,"Mount"))),he(o),tl(l),$g=h,Bg=i}function ao(r){var g=r.flags;if(g&2){try{br(r,UG,r)}catch(o){ig(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function rH(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;rH(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Ml(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)aO(r,g.alternate,g),g=g.sibling}function gH(r){var g=ve(),o=wl(),l=Pl(),h=Ol();switch(r.tag){case 0:case 11:case 14:case 15:h2(r,r.return,He),f0(r);break;case 1:Rl(r,r.return);var i=r.stateNode;typeof i.componentWillUnmount==="function"&&DO(r,r.return,i),f0(r);break;case 27:br(r,xi,r.stateNode);case 26:case 5:Rl(r,r.return),f0(r);break;case 22:r.memoizedState===null&&f0(r);break;case 30:f0(r);break;default:f0(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(r,Jr,zr,Ig,$g),he(g),tl(o),$g=l,Bg=h}function f0(r){for(r=r.child;r!==null;)gH(r),r=r.sibling}function oH(r,g,o,l){var h=ve(),i=wl(),u=Pl(),t=Ol(),A=o.flags;switch(o.tag){case 0:case 11:case 15:Wl(r,o,l),TO(o,He);break;case 1:if(Wl(r,o,l),g=o.stateNode,typeof g.componentDidMount==="function"&&br(o,L4,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{br(o,tG,g,r)}catch(R){ig(o,o.return,R)}}l&&A&64&&kO(o),Ji(o,o.return);break;case 27:EO(o);case 26:case 5:Wl(r,o,l),l&&g===null&&A&4&&_O(o),Ji(o,o.return);break;case 12:if(l&&A&4){A=fl(),Wl(r,o,l),l=o.stateNode,l.effectDuration+=Pi(A);try{br(o,VO,o,g,dv,l.effectDuration)}catch(R){ig(o,o.return,R)}}else Wl(r,o,l);break;case 31:Wl(r,o,l),l&&A&4&&pO(r,o);break;case 13:Wl(r,o,l),l&&A&4&&dO(r,o);break;case 22:o.memoizedState===null&&Wl(r,o,l),Ji(o,o.return);break;case 30:break;default:Wl(r,o,l)}(o.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(o,Jr,zr,Ig,$g),he(h),tl(i),$g=u,Bg=t}function Wl(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)oH(r,g.alternate,g,o),g=g.sibling}function w2(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_0(r),o!=null&&ti(o))}function t2(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_0(g),r!=null&&ti(r))}function De(r,g,o,l,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var i=g.sibling;eH(r,g,o,l,i!==null?i.actualStartTime:h),g=i}}function eH(r,g,o,l,h){var i=ve(),u=wl(),t=Pl(),A=Ol(),R=av,K=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&jn(g,g.actualStartTime,h,lo,o),De(r,g,o,l,h),K&2048&&SO(g,Co|xe);break;case 1:(g.mode&kr)!==Ur&&0<g.actualStartTime&&((g.flags&128)!==0?ft(g,g.actualStartTime,h,[]):(g.flags&1)!==0&&jn(g,g.actualStartTime,h,lo,o)),De(r,g,o,l,h);break;case 3:var $=fl(),J=lo;lo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,De(r,g,o,l,h),lo=J,K&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==o&&(_0(l),o!=null&&ti(o))),r.passiveEffectDuration+=vu($);break;case 12:if(K&2048){K=fl(),De(r,g,o,l,h),r=g.stateNode,r.passiveEffectDuration+=Pi(K);try{br(g,zG,g,g.alternate,dv,r.passiveEffectDuration)}catch(x){ig(g,g.return,x)}}else De(r,g,o,l,h);break;case 31:K=lo,$=g.alternate!==null?g.alternate.memoizedState:null,J=g.memoizedState,$!==null&&J===null?(J=g.deletions,J!==null&&0<J.length&&J[0].tag===18?(lo=!1,$=$.hydrationErrors,$!==null&&ft(g,g.actualStartTime,h,$)):lo=!0):lo=!1,De(r,g,o,l,h),lo=K;break;case 13:K=lo,$=g.alternate!==null?g.alternate.memoizedState:null,J=g.memoizedState,$===null||$.dehydrated===null||J!==null&&J.dehydrated!==null?lo=!1:(J=g.deletions,J!==null&&0<J.length&&J[0].tag===18?(lo=!1,$=$.hydrationErrors,$!==null&&ft(g,g.actualStartTime,h,$)):lo=!0),De(r,g,o,l,h),lo=K;break;case 23:break;case 22:J=g.stateNode,$=g.alternate,g.memoizedState!==null?J._visibility&gv?De(r,g,o,l,h):Qi(r,g,o,l,h):J._visibility&gv?De(r,g,o,l,h):(J._visibility|=gv,c1(r,g,o,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),h),(g.mode&kr)===Ur||lo||(r=g.actualStartTime,0<=r&&0.05<h-r&&fn(g,r,h),0<=Jr&&0<=zr&&0.05<zr-Jr&&fn(g,Jr,zr))),K&2048&&w2($,g);break;case 24:De(r,g,o,l,h),K&2048&&t2(g.alternate,g);break;default:De(r,g,o,l,h)}if((g.mode&kr)!==Ur){if(r=!lo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<h-o&&bl(g,o,h,"Mount");0<=Jr&&0<=zr&&((Bg||0.05<Ig)&&nl(g,Jr,zr,Ig,$g),r&&0.05<zr-Jr&&bl(g,Jr,zr,"Mount"))}he(i),tl(u),$g=t,Bg=A,av=R}function c1(r,g,o,l,h,i){h=h&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var u=g.sibling;lH(r,g,o,l,h,u!==null?u.actualStartTime:i),g=u}}function lH(r,g,o,l,h,i){var u=ve(),t=wl(),A=Pl(),R=Ol(),K=av;h&&(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&jn(g,g.actualStartTime,i,lo,o);var $=g.flags;switch(g.tag){case 0:case 11:case 15:c1(r,g,o,l,h,i),SO(g,Co);break;case 23:break;case 22:var J=g.stateNode;g.memoizedState!==null?J._visibility&gv?c1(r,g,o,l,h,i):Qi(r,g,o,l,i):(J._visibility|=gv,c1(r,g,o,l,h,i)),h&&$&2048&&w2(g.alternate,g);break;case 24:c1(r,g,o,l,h,i),h&&$&2048&&t2(g.alternate,g);break;default:c1(r,g,o,l,h,i)}(g.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(g,Jr,zr,Ig,$g),he(u),tl(t),$g=A,Bg=R,av=K}function Qi(r,g,o,l,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var i=g.child;i!==null;){g=i.sibling;var u=r,t=o,A=l,R=g!==null?g.actualStartTime:h,K=av;(i.mode&kr)!==Ur&&0<i.actualStartTime&&(i.flags&1)!==0&&jn(i,i.actualStartTime,R,lo,t);var $=i.flags;switch(i.tag){case 22:Qi(u,i,t,A,R),$&2048&&w2(i.alternate,i);break;case 24:Qi(u,i,t,A,R),$&2048&&t2(i.alternate,i);break;default:Qi(u,i,t,A,R)}av=K,i=g}}function a1(r,g,o){if(r.subtreeFlags&Ab)for(r=r.child;r!==null;)vH(r,g,o),r=r.sibling}function vH(r,g,o){switch(r.tag){case 26:a1(r,g,o),r.flags&Ab&&r.memoizedState!==null&&RX(o,ae,r.memoizedState,r.memoizedProps);break;case 5:a1(r,g,o);break;case 3:case 4:var l=ae;ae=ku(r.stateNode.containerInfo),a1(r,g,o),ae=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Ab,Ab=16777216,a1(r,g,o),Ab=l):a1(r,g,o));break;default:a1(r,g,o)}}function hH(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function zi(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],h=ve();no=l,nH(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&bl(l,Jr,zr,"Unmount"),he(h)}hH(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)iH(r),r=r.sibling}function iH(r){var g=ve(),o=wl(),l=Pl(),h=Ol();switch(r.tag){case 0:case 11:case 15:zi(r),r.flags&2048&&i2(r,r.return,Co|xe);break;case 3:var i=fl();zi(r),r.stateNode.passiveEffectDuration+=vu(i);break;case 12:i=fl(),zi(r),r.stateNode.passiveEffectDuration+=Pi(i);break;case 22:i=r.stateNode,r.memoizedState!==null&&i._visibility&gv&&(r.return===null||r.return.tag!==13)?(i._visibility&=~gv,xu(r),(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&bl(r,Jr,zr,"Disconnect")):zi(r);break;default:zi(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(r,Jr,zr,Ig,$g),he(g),tl(o),Bg=h,$g=l}function xu(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],h=ve();no=l,nH(l,r),(l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&0.05<zr-Jr&&bl(l,Jr,zr,"Unmount"),he(h)}hH(r)}for(r=r.child;r!==null;)bH(r),r=r.sibling}function bH(r){var g=ve(),o=wl(),l=Pl(),h=Ol();switch(r.tag){case 0:case 11:case 15:i2(r,r.return,Co),xu(r);break;case 22:var i=r.stateNode;i._visibility&gv&&(i._visibility&=~gv,xu(r));break;default:xu(r)}(r.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(r,Jr,zr,Ig,$g),he(g),tl(o),Bg=h,$g=l}function nH(r,g){for(;no!==null;){var o=no,l=o,h=g,i=ve(),u=wl(),t=Pl(),A=Ol();switch(l.tag){case 0:case 11:case 15:i2(l,h,Co);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool,h!=null&&_0(h));break;case 24:ti(l.memoizedState.cache)}if((l.mode&kr)!==Ur&&0<=Jr&&0<=zr&&(Bg||0.05<Ig)&&nl(l,Jr,zr,Ig,$g),he(i),tl(u),Bg=A,$g=t,l=o.child,l!==null)l.return=o,no=l;else r:for(o=r;no!==null;){if(l=no,i=l.sibling,u=l.return,fO(l),l===o){no=null;break r}if(i!==null){i.return=u,no=i;break r}no=u}}}function LG(){dY.forEach(function(r){return r()})}function uH(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||C.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function be(r){if((og&vo)!==uo&&Vr!==0)return Vr&-Vr;var g=C.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),W2()):I()}function wH(){if(po===0)if((Vr&536870912)===0||pr){var r=su;su<<=1,(su&3932160)===0&&(su=262144),po=r}else po=536870912;return r=Oe.current,r!==null&&(r.flags|=32),po}function Ng(r,g,o){if(Fh&&console.error("useInsertionEffect must not schedule updates."),g6&&(Cw=!0),r===Rg&&(wg===u1||wg===w1)||r.cancelPendingCommit!==null)j1(r,0),Sv(r,Vr,po,!1);if(Uv(r,o),(og&vo)!==uo&&r===Rg){if(Jl)switch(g.tag){case 0:case 11:case 15:r=yr&&Z(yr)||"Unknown",CR.has(r)||(CR.add(r),g=Z(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:ZR||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),ZR=!0)}}else zl&&gi(r,g,o),kG(g),r===Rg&&((og&vo)===uo&&(i0|=o),Fg===l0&&Sv(r,Vr,po,!1)),ml(r)}function tH(r,g,o){if((og&(vo|Ae))!==uo)throw Error("Should not already be working.");if(Vr!==0&&yr!==null){var l=yr,h=io();switch($q){case Mb:case u1:var i=ob;Jg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",i,h,Qe,void 0,"primary-light")):console.timeStamp("Suspended",i,h,Qe,void 0,"primary-light"));break;case w1:i=ob,Jg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",i,h,Qe,void 0,"primary-light")):console.timeStamp("Action",i,h,Qe,void 0,"primary-light"));break;default:Jg&&(l=h-ob,3>l||console.timeStamp("Blocked",ob,h,Qe,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}i=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||L0(r,g))?FG(r,g):O2(r,g,!0);var u=o;do{if(i===tv){Lh&&!o&&Sv(r,g,0,!1),g=wg,ob=jg(),$q=g;break}else{if(l=io(),h=r.current.alternate,u&&!IG(h)){ee(g),h=bo,i=l,!Jg||i<=h||(Sg?Sg.run(console.timeStamp.bind(console,"Teared Render",h,i,fr,ar,"error")):console.timeStamp("Teared Render",h,i,fr,ar,"error")),j0(g,l),i=O2(r,g,!1),u=!1;continue}if(i===n1){if(u=g,r.errorRecoveryDisabledLanes&u)var t=0;else t=r.pendingLanes&-536870913,t=t!==0?t:t&536870912?536870912:0;if(t!==0){ee(g),jt(bo,l,g,Sg),j0(g,l),g=t;r:{l=r,i=u,u=mb;var A=l.current.memoizedState.isDehydrated;if(A&&(j1(l,t).flags|=256),t=O2(l,t,!1),t!==n1){if(c4&&!A){l.errorRecoveryDisabledLanes|=i,i0|=i,i=l0;break r}l=To,To=u,l!==null&&(To===null?To=l:To.push.apply(To,l))}i=t}if(u=!1,i!==n1)continue;else l=io()}}if(i===Rb){ee(g),jt(bo,l,g,Sg),j0(g,l),j1(r,0),Sv(r,g,0,!0);break}r:{switch(o=r,i){case tv:case Rb:throw Error("Root did not complete. This is a bug in React.");case l0:if((g&4194048)!==g)break;case $w:ee(g),t8(bo,l,g,Sg),j0(g,l),h=g,(h&127)!==0?Hw=l:(h&4194048)!==0&&(Aw=l),Sv(o,g,po,!v0);break r;case n1:To=null;break;case Kw:case YR:break;default:throw Error("Unknown root exit status.")}if(C.actQueue!==null)H2(o,h,g,To,Gb,Fw,po,i0,t1,i,null,null,bo,l);else{if((g&62914560)===g&&(u=xw+zR-io(),10<u)){if(Sv(o,g,po,!v0),$0(o,0,!0)!==0)break r;fe=g,o.timeoutHandle=ER(PH.bind(null,o,h,To,Gb,Fw,g,po,i0,t1,v0,i,"Throttled",bo,l),u);break r}PH(o,h,To,Gb,Fw,g,po,i0,t1,v0,i,null,bo,l)}}}break}while(1);ml(r)}function PH(r,g,o,l,h,i,u,t,A,R,K,$,J,x){r.timeoutHandle=q1;var hr=g.subtreeFlags,Pr=null;if(hr&8192||(hr&16785408)===16785408){if(Pr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yl},vH(g,i,Pr),hr=(i&62914560)===i?xw-io():(i&4194048)===i?QR-io():0,hr=MX(Pr,hr),hr!==null){fe=i,r.cancelPendingCommit=hr(H2.bind(null,r,g,i,o,l,h,u,t,A,K,Pr,Pr.waitingForViewTransition?"Waiting for the previous Animation":0<Pr.count?0<Pr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Pr.imgCount===1?"Suspended on an Image":0<Pr.imgCount?"Suspended on Images":null,J,x)),Sv(r,i,u,!R);return}}H2(r,g,i,o,l,h,u,t,A,K,Pr,$,J,x)}function IG(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var h=o[l],i=h.getSnapshot;h=h.value;try{if(!No(i(),h))return!1}catch(u){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function Sv(r,g,o,l){g&=~a4,g&=~i0,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var h=g;0<h;){var i=31-Io(h),u=1<<i;l[i]=-1,h&=~u}o!==0&&I0(r,o,g)}function f1(){return(og&(vo|Ae))===uo?($i(0,!1),!1):!0}function P2(){if(yr!==null){if(wg===jo)var r=yr.return;else r=yr,ou(),Y5(r),Gh=null,wb=0,r=yr;for(;r!==null;)CO(r.alternate,r),r=r.return;yr=null}}function j0(r,g){(r&127)!==0&&(sv=g),(r&4194048)!==0&&(Il=g),(r&62914560)!==0&&(Uq=g),(r&2080374784)!==0&&(Kq=g)}function j1(r,g){Jg&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",ar,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",ar,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",ar,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",ar,"primary-light"));var o=bo;if(bo=jg(),Vr!==0&&0<o){if(ee(Vr),Fg===Kw||Fg===l0)t8(o,bo,g,Sg);else{var l=bo,h=Sg;if(Jg&&!(l<=o)){var i=(g&738197653)===g?"tertiary-dark":"primary-dark",u=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";h?h.run(console.timeStamp.bind(console,u,o,l,fr,ar,i)):console.timeStamp(u,o,l,fr,ar,i)}}j0(Vr,bo)}if(o=Sg,Sg=null,(g&127)!==0){Sg=si,h=0<=Ll&&Ll<sv?sv:Ll,l=0<=g1&&g1<sv?sv:g1,i=0<=l?l:0<=h?h:bo,0<=Hw?(ee(2),P8(Hw,i,g,o)):(qw&127)!==0&&(ee(2),ui(sv,i,iv)),o=h;var t=l,A=rb,R=0<Mh,K=r0===di,$=r0===Ow;if(h=bo,l=si,i=Q4,u=z4,Jg){if(fr="Blocking",0<o?o>h&&(o=h):o=h,0<t?t>o&&(t=o):t=o,A!==null&&o>t){var J=R?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,R?"Consecutive":"Event: "+A,t,o,fr,ar,J)):console.timeStamp(R?"Consecutive":"Event: "+A,t,o,fr,ar,J)}h>o&&(t=K?"error":(g&738197653)===g?"tertiary-light":"primary-light",K=$?"Promise Resolved":K?"Cascading Update":5<h-o?"Update Blocked":"Update",$=[],u!=null&&$.push(["Component name",u]),i!=null&&$.push(["Method name",i]),o={start:o,end:h,detail:{devtools:{properties:$,track:fr,trackGroup:ar,color:t}}},l?l.run(performance.measure.bind(performance,K,o)):performance.measure(K,o))}Ll=-1.1,r0=0,z4=Q4=null,Hw=-1.1,Mh=g1,g1=-1.1,sv=jg()}if((g&4194048)!==0&&(Sg=gb,h=0<=hv&&hv<Il?Il:hv,o=0<=Ie&&Ie<Il?Il:Ie,l=0<=g0&&g0<Il?Il:g0,i=0<=l?l:0<=o?o:bo,0<=Aw?(ee(256),P8(Aw,i,g,Sg)):(qw&4194048)!==0&&(ee(256),ui(Il,i,iv)),$=l,t=o1,A=0<o0,R=U4===Ow,i=bo,l=gb,u=Qq,K=zq,Jg&&(fr="Transition",0<o?o>i&&(o=i):o=i,0<h?h>o&&(h=o):h=o,0<$?$>h&&($=h):$=h,h>$&&t!==null&&(J=A?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,A?"Consecutive":"Event: "+t,$,h,fr,ar,J)):console.timeStamp(A?"Consecutive":"Event: "+t,$,h,fr,ar,J)),o>h&&(l?l.run(console.timeStamp.bind(console,"Action",h,o,fr,ar,"primary-dark")):console.timeStamp("Action",h,o,fr,ar,"primary-dark")),i>o&&(h=R?"Promise Resolved":5<i-o?"Update Blocked":"Update",$=[],K!=null&&$.push(["Component name",K]),u!=null&&$.push(["Method name",u]),o={start:o,end:i,detail:{devtools:{properties:$,track:fr,trackGroup:ar,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,h,o)):performance.measure(h,o))),Ie=hv=-1.1,U4=0,Aw=-1.1,o0=g0,g0=-1.1,Il=jg()),(g&62914560)!==0&&(qw&62914560)!==0&&(ee(4194304),ui(Uq,bo,iv)),(g&2080374784)!==0&&(qw&2080374784)!==0&&(ee(268435456),ui(Kq,bo,iv)),o=r.timeoutHandle,o!==q1&&(r.timeoutHandle=q1,wJ(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fe=0,P2(),Rg=r,yr=o=El(r.current,null),Vr=g,wg=jo,qe=null,v0=!1,Lh=L0(r,g),c4=!1,Fg=tv,t1=po=a4=i0=h0=0,To=mb=null,Fw=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)h=31-Io(l),i=1<<h,g|=r[h],l&=~i;return xl=g,pn(),r=Wq(),1000<r-Mq&&(C.recentlyCreatedOwnerStacks=0,Mq=r),Ee.discardPendingWarnings(),o}function OH(r,g){Kr=null,C.H=Hb,C.getCurrentStack=null,Jl=!1,we=null,g===mh||g===mw?(g=N8(),wg=Mb):g===I4?(g=N8(),wg=JR):wg=g===D4?E4:g!==null&&typeof g==="object"&&typeof g.then==="function"?Wb:Lw,qe=g;var o=yr;o===null?(Fg=Rb,zu(r,le(g,r.current))):o.mode&kr&&w5(o)}function HH(){var r=Oe.current;return r===null?!0:(Vr&4194048)===Vr?Fe===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fe:!1}function AH(){var r=C.H;return C.H=Hb,r===null?Hb:r}function qH(){var r=C.A;return C.A=pY,r}function Nu(r){Sg===null&&(Sg=r._debugTask==null?null:r._debugTask)}function Bu(){Fg=l0,v0||(Vr&4194048)!==Vr&&Oe.current!==null||(Lh=!0),(h0&134217727)===0&&(i0&134217727)===0||Rg===null||Sv(Rg,Vr,po,!1)}function O2(r,g,o){var l=og;og|=vo;var h=AH(),i=qH();if(Rg!==r||Vr!==g){if(zl){var u=r.memoizedUpdaters;0<u.size&&(Ki(r,Vr),u.clear()),Kv(r,g)}Gb=null,j1(r,g)}g=!1,u=Fg;r:do try{if(wg!==jo&&yr!==null){var t=yr,A=qe;switch(wg){case E4:P2(),u=$w;break r;case Mb:case u1:case w1:case Wb:Oe.current===null&&(g=!0);var R=wg;if(wg=jo,qe=null,p1(r,t,A,R),o&&Lh){u=tv;break r}break;default:R=wg,wg=jo,qe=null,p1(r,t,A,R)}}RH(),u=Fg;break}catch(K){OH(r,K)}while(1);return g&&r.shellSuspendCounter++,ou(),og=l,C.H=h,C.A=i,yr===null&&(Rg=null,Vr=0,pn()),u}function RH(){for(;yr!==null;)MH(yr)}function FG(r,g){var o=og;og|=vo;var l=AH(),h=qH();if(Rg!==r||Vr!==g){if(zl){var i=r.memoizedUpdaters;0<i.size&&(Ki(r,Vr),i.clear()),Kv(r,g)}Gb=null,Nw=io()+UR,j1(r,g)}else Lh=L0(r,g);r:do try{if(wg!==jo&&yr!==null)g:switch(g=yr,i=qe,wg){case Lw:wg=jo,qe=null,p1(r,g,i,Lw);break;case u1:case w1:if(F8(i)){wg=jo,qe=null,WH(g);break}g=function(){wg!==u1&&wg!==w1||Rg!==r||(wg=Iw),ml(r)},i.then(g,g);break r;case Mb:wg=Iw;break r;case JR:wg=y4;break r;case Iw:F8(i)?(wg=jo,qe=null,WH(g)):(wg=jo,qe=null,p1(r,g,i,Iw));break;case y4:var u=null;switch(yr.tag){case 26:u=yr.memoizedState;case 5:case 27:var t=yr;if(u?tA(u):t.stateNode.complete){wg=jo,qe=null;var A=t.sibling;if(A!==null)yr=A;else{var R=t.return;R!==null?(yr=R,Zu(R)):yr=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}wg=jo,qe=null,p1(r,g,i,y4);break;case Wb:wg=jo,qe=null,p1(r,g,i,Wb);break;case E4:P2(),Fg=$w;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}C.actQueue!==null?RH():xG();break}catch(K){OH(r,K)}while(1);if(ou(),C.H=l,C.A=h,og=o,yr!==null)return tv;return Rg=null,Vr=0,pn(),Fg}function xG(){for(;yr!==null&&!IX();)MH(yr)}function MH(r){var g=r.alternate;(r.mode&kr)!==Ur?(u5(r),g=br(r,l2,g,r,xl),w5(r)):g=br(r,l2,g,r,xl),r.memoizedProps=r.pendingProps,g===null?Zu(r):yr=g}function WH(r){var g=br(r,NG,r);r.memoizedProps=r.pendingProps,g===null?Zu(r):yr=g}function NG(r){var g=r.alternate,o=(r.mode&kr)!==Ur;switch(o&&u5(r),r.tag){case 15:case 0:g=LO(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=LO(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Y5(r);default:CO(g,r),r=yr=M8(r,xl),g=l2(g,r,xl)}return o&&w5(r),g}function p1(r,g,o,l){ou(),Y5(g),Gh=null,wb=0;var h=g.return;try{if(MG(r,h,g,o,Vr)){Fg=Rb,zu(r,le(o,r.current)),yr=null;return}}catch(i){if(h!==null)throw yr=h,i;Fg=Rb,zu(r,le(o,r.current)),yr=null;return}if(g.flags&32768){if(pr||l===Lw)r=!0;else if(Lh||(Vr&536870912)!==0)r=!1;else if(v0=r=!0,l===u1||l===w1||l===Mb||l===Wb)l=Oe.current,l!==null&&l.tag===13&&(l.flags|=16384);mH(g,r)}else Zu(g)}function Zu(r){var g=r;do{if((g.flags&32768)!==0){mH(g,v0);return}var o=g.alternate;if(r=g.return,u5(g),o=br(g,GG,o,g,xl),(g.mode&kr)!==Ur&&U8(g),o!==null){yr=o;return}if(g=g.sibling,g!==null){yr=g;return}yr=g=r}while(g!==null);Fg===tv&&(Fg=YR)}function mH(r,g){do{var o=XG(r.alternate,r);if(o!==null){o.flags&=32767,yr=o;return}if((r.mode&kr)!==Ur){U8(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){yr=r;return}yr=r=o}while(r!==null);Fg=$w,yr=null}function H2(r,g,o,l,h,i,u,t,A,R,K,$,J,x){r.cancelPendingCommit=null;do Ui();while(go!==n0);if(Ee.flushLegacyContextWarning(),Ee.flushPendingUnsafeLifecycleWarnings(),(og&(vo|Ae))!==uo)throw Error("Should not already be working.");if(ee(o),R===n1?jt(J,x,o,Sg):l!==null?hG(J,x,o,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Sg):vG(J,x,o,Sg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(i=g.lanes|g.childLanes,i|=m4,Sn(r,o,i,u,t,A),r===Rg&&(yr=Rg=null,Vr=0),Ih=g,u0=r,fe=o,p4=i,s4=h,xR=l,d4=x,NR=$,je=Bw,BR=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,SG(eh,function(){return Ub=window.event,je===Bw&&(je=j4),QH(),null})):(r.callbackNode=null,r.callbackPriority=0),vv=null,dv=jg(),$!==null&&iG(x,dv,$,Sg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,h=bg.p,bg.p=te,u=og,og|=Ae;try{KG(r,g,o)}finally{og=u,bg.p=h,C.T=l}}go=$R,GH(),XH(),YH()}}function GH(){if(go===$R){go=n0;var r=u0,g=Ih,o=fe,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var h=bg.p;bg.p=te;var i=og;og|=Ae;try{Kh=o,$h=r,hu(),sO(g,r),$h=Kh=null,o=u6;var u=n8(r.containerInfo),t=o.focusedElem,A=o.selectionRange;if(u!==t&&t&&t.ownerDocument&&b8(t.ownerDocument.documentElement,t)){if(A!==null&&ct(t)){var{start:R,end:K}=A;if(K===void 0&&(K=R),"selectionStart"in t)t.selectionStart=R,t.selectionEnd=Math.min(K,t.value.length);else{var $=t.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var x=J.getSelection(),hr=t.textContent.length,Pr=Math.min(A.start,hr),Gg=A.end===void 0?Pr:Math.min(A.end,hr);!x.extend&&Pr>Gg&&(u=Gg,Gg=Pr,Pr=u);var sr=i8(t,Pr),Y=i8(t,Gg);if(sr&&Y&&(x.rangeCount!==1||x.anchorNode!==sr.node||x.anchorOffset!==sr.offset||x.focusNode!==Y.node||x.focusOffset!==Y.offset)){var Q=$.createRange();Q.setStart(sr.node,sr.offset),x.removeAllRanges(),Pr>Gg?(x.addRange(Q),x.extend(Y.node,Y.offset)):(Q.setEnd(Y.node,Y.offset),x.addRange(Q))}}}}$=[];for(x=t;x=x.parentNode;)x.nodeType===1&&$.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof t.focus==="function"&&t.focus();for(t=0;t<$.length;t++){var U=$[t];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}dw=!!n6,u6=n6=null}finally{og=i,bg.p=h,C.T=l}}r.current=g,go=LR}}function XH(){if(go===LR){go=n0;var r=BR;if(r!==null){dv=jg();var g=lv,o=dv;!Jg||o<=g||(iv?iv.run(console.timeStamp.bind(console,r,g,o,fr,ar,"secondary-light")):console.timeStamp(r,g,o,fr,ar,"secondary-light"))}r=u0,g=Ih,o=fe;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var h=bg.p;bg.p=te;var i=og;og|=Ae;try{Kh=o,$h=r,hu(),aO(r,g.alternate,g),$h=Kh=null}finally{og=i,bg.p=h,C.T=l}}r=d4,g=NR,lv=jg(),r=g===null?r:dv,g=lv,o=je===f4,l=Sg,vv!==null?O8(r,g,vv,!1,l):!Jg||g<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,fr,ar,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,fr,ar,o?"error":"secondary-dark")),go=IR}}function YH(){if(go===FR||go===IR){if(go===FR){var r=lv;lv=jg();var g=lv,o=je===f4;!Jg||g<=r||(iv?iv.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,fr,ar,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,fr,ar,o?" error":"secondary-light")),je!==f4&&(je=KR)}go=n0,FX(),r=u0;var l=Ih;g=fe,o=xR;var h=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;h?go=Zw:(go=n0,Ih=u0=null,JH(r,r.pendingLanes),P1=0,Yb=null);var i=r.pendingLanes;if(i===0&&(b0=null),h||$H(r),i=M(g),l=l.stateNode,Qo&&typeof Qo.onCommitFiberRoot==="function")try{var u=(l.current.flags&128)===128;switch(i){case te:var t=s2;break;case _e:t=r4;break;case Ul:t=eh;break;case gw:t=g4;break;default:t=eh}Qo.onCommitFiberRoot(lh,l,t,u)}catch($){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",$))}if(zl&&r.memoizedUpdaters.clear(),LG(),o!==null){u=C.T,t=bg.p,bg.p=te,C.T=null;try{var A=r.onRecoverableError;for(l=0;l<o.length;l++){var R=o[l],K=BG(R.stack);br(R.source,A,R.value,K)}}finally{C.T=u,bg.p=t}}(fe&3)!==0&&Ui(),ml(r),i=r.pendingLanes,(g&261930)!==0&&(i&42)!==0?(Mw=!0,r===r6?Xb++:(Xb=0,r6=r)):Xb=0,h||j0(g,lv),$i(0,!1)}}function BG(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function JH(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,ti(g)))}function Ui(){return GH(),XH(),YH(),QH()}function QH(){if(go!==Zw)return!1;var r=u0,g=p4;p4=0;var o=M(fe),l=Ul===0||Ul>o?Ul:o;o=C.T;var h=bg.p;try{bg.p=l,C.T=null;var i=s4;s4=null,l=u0;var u=fe;if(go=n0,Ih=u0=null,fe=0,(og&(vo|Ae))!==uo)throw Error("Cannot flush passive effects while already rendering.");ee(u),g6=!0,Cw=!1;var t=0;if(vv=null,t=io(),je===KR)ui(lv,t,iv);else{var A=lv,R=t,K=je===j4;!Jg||R<=A||(Sg?Sg.run(console.timeStamp.bind(console,K?"Waiting for Paint":"Waiting",A,R,fr,ar,"secondary-light")):console.timeStamp(K?"Waiting for Paint":"Waiting",A,R,fr,ar,"secondary-light"))}A=og,og|=Ae;var $=l.current;hu(),iH($);var J=l.current;$=d4,hu(),eH(l,J,u,i,$),$H(l),og=A;var x=io();if(J=t,$=Sg,vv!==null?O8(J,x,vv,!0,$):!Jg||x<=J||($?$.run(console.timeStamp.bind(console,"Remaining Effects",J,x,fr,ar,"secondary-dark")):console.timeStamp("Remaining Effects",J,x,fr,ar,"secondary-dark")),j0(u,x),$i(0,!1),Cw?l===Yb?P1++:(P1=0,Yb=l):P1=0,Cw=g6=!1,Qo&&typeof Qo.onPostCommitFiberRoot==="function")try{Qo.onPostCommitFiberRoot(lh,l)}catch(Pr){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",Pr))}var hr=l.current.stateNode;return hr.effectDuration=0,hr.passiveEffectDuration=0,!0}finally{bg.p=h,C.T=o,JH(r,g)}}function zH(r,g,o){g=le(o,g),K8(g),g=c5(r.stateNode,g,2),r=Bv(r,g,2),r!==null&&(Uv(r,2),ml(r))}function ig(r,g,o){if(Fh=!1,r.tag===3)zH(r,r,o);else{for(;g!==null;){if(g.tag===3){zH(g,r,o);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(b0===null||!b0.has(l))){r=le(o,r),K8(r),o=a5(2),l=Bv(g,o,2),l!==null&&(f5(o,l,g,r),Uv(l,2),ml(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function A2(r,g,o){var l=r.pingCache;if(l===null){l=r.pingCache=new sY;var h=new Set;l.set(g,h)}else h=l.get(g),h===void 0&&(h=new Set,l.set(g,h));h.has(o)||(c4=!0,h.add(o),l=ZG.bind(null,r,g,o),zl&&Ki(r,o),g.then(l,l))}function ZG(r,g,o){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Ll&&(sv=Ll=jg(),si=Pw("Promise Resolved"),r0=Ow):(o&4194048)!==0&&0>Ie&&(Il=Ie=jg(),gb=Pw("Promise Resolved"),U4=Ow),uH()&&C.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Rg===r&&(Vr&o)===o&&(Fg===l0||Fg===Kw&&(Vr&62914560)===Vr&&io()-xw<zR?(og&vo)===uo&&j1(r,0):a4|=o,t1===Vr&&(t1=0)),ml(r)}function UH(r,g){g===0&&(g=N1()),r=Jo(r,g),r!==null&&(Uv(r,g),ml(r))}function CG(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),UH(r,o)}function TG(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:h}=r;h!==null&&(o=h.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),UH(r,o)}function q2(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,h=g,i=h.type===fu;i=o||i,h.tag!==22?h.flags&67108864?i&&br(h,KH,l,h):q2(l,h,i):h.memoizedState===null&&(i&&h.flags&8192?br(h,KH,l,h):h.subtreeFlags&67108864&&br(h,q2,l,h,i)),g=g.sibling}}function KH(r,g){Wg(!0);try{gH(g),bH(g),oH(r,g.alternate,g,!1),lH(r,g,0,null,!1,0)}finally{Wg(!1)}}function $H(r){var g=!0;r.current.mode&(zo|ye)||(g=!1),q2(r,r.current,g)}function LH(r){if((og&vo)===uo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=Z(r)||"ReactComponent",Tw!==null){if(Tw.has(g))return;Tw.add(g)}else Tw=new Set([g]);br(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Ki(r,g){zl&&r.memoizedUpdaters.forEach(function(o){gi(r,o,g)})}function SG(r,g){var o=C.actQueue;return o!==null?(o.push(g),oJ):d2(r,g)}function kG(r){uH()&&C.actQueue===null&&br(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,Z(r))})}function ml(r){r!==xh&&r.next===null&&(xh===null?Sw=xh=r:xh=xh.next=r),kw=!0,C.actQueue!==null?e6||(e6=!0,NH()):o6||(o6=!0,NH())}function $i(r,g){if(!l6&&kw){l6=!0;do{var o=!1;for(var l=Sw;l!==null;){if(!g)if(r!==0){var h=l.pendingLanes;if(h===0)var i=0;else{var{suspendedLanes:u,pingedLanes:t}=l;i=(1<<31-Io(42|r)+1)-1,i&=h&~(u&~t),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(o=!0,xH(l,i))}else i=Vr,i=$0(l,l===Rg?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==q1),(i&3)===0||L0(l,i)||(o=!0,xH(l,i));l=l.next}}while(o);l6=!1}}function DG(){Ub=window.event,R2()}function R2(){kw=e6=o6=!1;var r=0;w0!==0&&fG()&&(r=w0);for(var g=io(),o=null,l=Sw;l!==null;){var h=l.next,i=IH(l,g);if(i===0)l.next=null,o===null?Sw=h:o.next=h,h===null&&(xh=o);else if(o=l,r!==0||(i&3)!==0)kw=!0;l=h}go!==n0&&go!==Zw||$i(r,!1),w0!==0&&(w0=0)}function IH(r,g){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:h}=r,i=r.pendingLanes&-62914561;0<i;){var u=31-Io(i),t=1<<u,A=h[u];if(A===-1){if((t&o)===0||(t&l)!==0)h[u]=Bt(t,g)}else A<=g&&(r.expiredLanes|=t);i&=~t}if(g=Rg,o=Vr,o=$0(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==q1),l=r.callbackNode,o===0||r===g&&(wg===u1||wg===w1)||r.cancelPendingCommit!==null)return l!==null&&M2(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||L0(r,o)){if(g=o&-o,g!==r.callbackPriority||C.actQueue!==null&&l!==v6)M2(l);else return g;switch(M(o)){case te:case _e:o=r4;break;case Ul:o=eh;break;case gw:o=g4;break;default:o=eh}return l=FH.bind(null,r),C.actQueue!==null?(C.actQueue.push(l),o=v6):o=d2(o,l),r.callbackPriority=g,r.callbackNode=o,g}return l!==null&&M2(l),r.callbackPriority=2,r.callbackNode=null,2}function FH(r,g){if(Mw=Rw=!1,Ub=window.event,go!==n0&&go!==Zw)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(je===Bw&&(je=j4),Ui()&&r.callbackNode!==o)return null;var l=Vr;if(l=$0(r,r===Rg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==q1),l===0)return null;return tH(r,l,g),IH(r,io()),r.callbackNode!=null&&r.callbackNode===o?FH.bind(null,r):null}function xH(r,g){if(Ui())return null;Rw=Mw,Mw=!1,tH(r,g,!0)}function M2(r){r!==v6&&r!==null&&LX(r)}function NH(){C.actQueue!==null&&C.actQueue.push(function(){return R2(),null}),tJ(function(){(og&(vo|Ae))!==uo?d2(s2,DG):R2()})}function W2(){if(w0===0){var r=e1;r===0&&(r=du,du<<=1,(du&261888)===0&&(du=256)),w0=r}return w0}function BH(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return tg(r,"action"),ii(""+r)}function ZH(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function VG(r,g,o,l,h){if(g==="submit"&&o&&o.stateNode===h){var i=BH((h[Fo]||null).action),u=l.submitter;u&&(g=(g=u[Fo]||null)?BH(g.formAction):u.getAttribute("formAction"),g!==null&&(i=g,u=null));var t=new hw("action","action",null,l,h);r.push({event:t,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(w0!==0){var A=u?ZH(h,u):new FormData(h),R={pending:!0,data:A,method:h.method,action:i};Object.freeze(R),S5(o,R,null,A)}}else typeof i==="function"&&(t.preventDefault(),A=u?ZH(h,u):new FormData(h),R={pending:!0,data:A,method:h.method,action:i},Object.freeze(R),S5(o,R,i,A))},currentTarget:h}]})}}function Cu(r,g,o){r.currentTarget=o;try{g(r)}catch(l){q4(l)}r.currentTarget=null}function CH(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var h=void 0,i=l.event;if(l=l.listeners,g)for(var u=l.length-1;0<=u;u--){var t=l[u],A=t.instance,R=t.currentTarget;if(t=t.listener,A!==h&&i.isPropagationStopped())break r;A!==null?br(A,Cu,i,t,R):Cu(i,t,R),h=A}else for(u=0;u<l.length;u++){if(t=l[u],A=t.instance,R=t.currentTarget,t=t.listener,A!==h&&i.isPropagationStopped())break r;A!==null?br(A,Cu,i,t,R):Cu(i,t,R),h=A}}}}function dr(r,g){h6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[o4];o===void 0&&(o=g[o4]=new Set);var l=r+"__bubble";o.has(l)||(TH(g,r,2,!1),o.add(l))}function m2(r,g,o){h6.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),TH(o,r,l,g)}function G2(r){if(!r[Dw]){r[Dw]=!0,NA.forEach(function(o){o!=="selectionchange"&&(h6.has(o)||m2(o,!1,r),m2(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[Dw]||(g[Dw]=!0,m2("selectionchange",!1,g))}}function TH(r,g,o,l){switch(RA(g)){case te:var h=XX;break;case _e:h=YX;break;default:h=C2}o=h.bind(null,g,o,r),h=void 0,!i4||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(h=!0),l?h!==void 0?r.addEventListener(g,o,{capture:!0,passive:h}):r.addEventListener(g,o,!0):h!==void 0?r.addEventListener(g,o,{passive:h}):r.addEventListener(g,o,!1)}function X2(r,g,o,l,h){var i=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var t=l.stateNode.containerInfo;if(t===h)break;if(u===4)for(u=l.return;u!==null;){var A=u.tag;if((A===3||A===4)&&u.stateNode.containerInfo===h)return;u=u.return}for(;t!==null;){if(u=Rr(t),u===null)return;if(A=u.tag,A===5||A===6||A===26||A===27){l=i=u;continue r}t=t.parentNode}}l=l.return}jP(function(){var R=i,K=yt(o),$=[];r:{var J=Rq.get(r);if(J!==void 0){var x=hw,hr=r;switch(r){case"keypress":if(En(o)===0)break r;case"keydown":case"keyup":x=RY;break;case"focusin":hr="focus",x=w4;break;case"focusout":hr="blur",x=w4;break;case"beforeblur":case"afterblur":x=w4;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hY;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=mY;break;case Oq:case Hq:case Aq:x=nY;break;case qq:x=XY;break;case"scroll":case"scrollend":x=lY;break;case"wheel":x=JY;break;case"copy":case"cut":case"paste":x=wY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hq;break;case"toggle":case"beforetoggle":x=zY}var Pr=(g&4)!==0,Gg=!Pr&&(r==="scroll"||r==="scrollend"),sr=Pr?J!==null?J+"Capture":null:J;Pr=[];for(var Y=R,Q;Y!==null;){var U=Y;if(Q=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||Q===null||sr===null||(U=bi(Y,sr),U!=null&&Pr.push(Li(Y,U,Q))),Gg)break;Y=Y.return}0<Pr.length&&(J=new x(J,hr,null,o,K),$.push({event:J,listeners:Pr}))}}if((g&7)===0){r:{if(J=r==="mouseover"||r==="pointerover",x=r==="mouseout"||r==="pointerout",J&&o!==Di&&(hr=o.relatedTarget||o.fromElement)&&(Rr(hr)||hr[Ev]))break r;if(x||J){if(J=K.window===K?K:(J=K.ownerDocument)?J.defaultView||J.parentWindow:window,x){if(hr=o.relatedTarget||o.toElement,x=R,hr=hr?Rr(hr):null,hr!==null&&(Gg=rr(hr),Pr=hr.tag,hr!==Gg||Pr!==5&&Pr!==27&&Pr!==6))hr=null}else x=null,hr=R;if(x!==hr){if(Pr=lq,U="onMouseLeave",sr="onMouseEnter",Y="mouse",r==="pointerout"||r==="pointerover")Pr=hq,U="onPointerLeave",sr="onPointerEnter",Y="pointer";if(Gg=x==null?J:xr(x),Q=hr==null?J:xr(hr),J=new Pr(U,Y+"leave",x,o,K),J.target=Gg,J.relatedTarget=Q,U=null,Rr(K)===R&&(Pr=new Pr(sr,Y+"enter",hr,o,K),Pr.target=Q,Pr.relatedTarget=Gg,U=Pr),Gg=U,x&&hr)g:{Pr=_G,sr=x,Y=hr,Q=0;for(U=sr;U;U=Pr(U))Q++;U=0;for(var D=Y;D;D=Pr(D))U++;for(;0<Q-U;)sr=Pr(sr),Q--;for(;0<U-Q;)Y=Pr(Y),U--;for(;Q--;){if(sr===Y||Y!==null&&sr===Y.alternate){Pr=sr;break g}sr=Pr(sr),Y=Pr(Y)}Pr=null}else Pr=null;x!==null&&SH($,J,x,Pr,!1),hr!==null&&Gg!==null&&SH($,Gg,hr,Pr,!0)}}}r:{if(J=R?xr(R):window,x=J.nodeName&&J.nodeName.toLowerCase(),x==="select"||x==="input"&&J.type==="file")var ur=e8;else if(g8(J))if(tq)ur=oG;else{ur=rG;var $r=s3}else x=J.nodeName,!x||x.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?R&&hi(R.elementType)&&(ur=e8):ur=gG;if(ur&&(ur=ur(r,R))){o8($,ur,o,K);break r}$r&&$r(r,J,R),r==="focusout"&&R&&J.type==="number"&&R.memoizedProps.value!=null&&Tt(J,"number",J.value)}switch($r=R?xr(R):window,r){case"focusin":if(g8($r)||$r.contentEditable==="true")wh=$r,P4=R,fi=null;break;case"focusout":fi=P4=wh=null;break;case"mousedown":O4=!0;break;case"contextmenu":case"mouseup":case"dragend":O4=!1,u8($,o,K);break;case"selectionchange":if(LY)break;case"keydown":case"keyup":u8($,o,K)}var Xr;if(t4)r:{switch(r){case"compositionstart":var Wr="onCompositionStart";break r;case"compositionend":Wr="onCompositionEnd";break r;case"compositionupdate":Wr="onCompositionUpdate";break r}Wr=void 0}else uh?sP(r,o)&&(Wr="onCompositionEnd"):r==="keydown"&&o.keyCode===iq&&(Wr="onCompositionStart");if(Wr&&(bq&&o.locale!=="ko"&&(uh||Wr!=="onCompositionStart"?Wr==="onCompositionEnd"&&uh&&(Xr=pP()):(cv=K,b4=("value"in cv)?cv.value:cv.textContent,uh=!0)),$r=Tu(R,Wr),0<$r.length&&(Wr=new vq(Wr,r,null,o,K),$.push({event:Wr,listeners:$r}),Xr?Wr.data=Xr:(Xr=r8(o),Xr!==null&&(Wr.data=Xr)))),Xr=KY?f3(r,o):j3(r,o))Wr=Tu(R,"onBeforeInput"),0<Wr.length&&($r=new PY("onBeforeInput","beforeinput",null,o,K),$.push({event:$r,listeners:Wr}),$r.data=Xr);VG($,r,R,o,K)}CH($,g)})}function Li(r,g,o){return{instance:r,listener:g,currentTarget:o}}function Tu(r,g){for(var o=g+"Capture",l=[];r!==null;){var h=r,i=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||i===null||(h=bi(r,o),h!=null&&l.unshift(Li(r,h,i)),h=bi(r,g),h!=null&&l.push(Li(r,h,i))),r.tag===3)return l;r=r.return}return[]}function _G(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function SH(r,g,o,l,h){for(var i=g._reactName,u=[];o!==null&&o!==l;){var t=o,A=t.alternate,R=t.stateNode;if(t=t.tag,A!==null&&A===l)break;t!==5&&t!==26&&t!==27||R===null||(A=R,h?(R=bi(o,i),R!=null&&u.unshift(Li(o,R,A))):h||(R=bi(o,i),R!=null&&u.push(Li(o,R,A)))),o=o.return}u.length!==0&&r.push({event:g,listeners:u})}function Y2(r,g){y3(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||oq||(oq=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:p0,possibleRegistrationNames:e4};hi(r)||typeof g.is==="string"||c3(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,l){g!==o&&(o=kv(o),kv(g)!==o&&(l[r]=g))}function yG(r,g,o){g.forEach(function(l){o[VH(l)]=l==="style"?Q2(r):r.getAttribute(l)})}function Gl(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function kH(r,g){return r=r.namespaceURI===ew||r.namespaceURI===hh?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function kv(r){return re(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Xo(r)),ag(r)),(typeof r==="string"?r:""+r).replace(eJ,`
`).replace(lJ,"")}function DH(r,g){return g=kv(g),kv(r)===g?!0:!1}function Ag(r,g,o,l,h,i){switch(o){case"children":if(typeof l==="string")yn(l,g,!1),g==="body"||g==="textarea"&&l===""||vi(r,l);else if(typeof l==="number"||typeof l==="bigint")yn(""+l,g,!1),g!=="body"&&vi(r,""+l);break;case"className":Dn(r,"class",l);break;case"tabIndex":Dn(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(r,o,l);break;case"style":cP(r,l,i);break;case"data":if(g!=="object"){Dn(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}tg(l,o),l=ii(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(h.encType==null&&h.method==null||yw||(yw=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),h.target==null||_w||(_w=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||h.type==="submit"||h.type==="image"||Vw?g!=="button"||h.type==null||h.type==="submit"||Vw?typeof l==="function"&&(h.name==null||kR||(kR=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),h.formEncType==null&&h.formMethod==null||yw||(yw=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),h.formTarget==null||_w||(_w=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Vw=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Vw=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i==="function"&&(o==="formAction"?(g!=="input"&&Ag(r,g,"name",h.name,h,null),Ag(r,g,"formEncType",h.formEncType,h,null),Ag(r,g,"formMethod",h.formMethod,h,null),Ag(r,g,"formTarget",h.formTarget,h,null)):(Ag(r,g,"encType",h.encType,h,null),Ag(r,g,"method",h.method,h,null),Ag(r,g,"target",h.target,h,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}tg(l,o),l=ii(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(o,l),r.onclick=yl);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}tg(l,o),o=ii(""+l),r.setAttributeNS(O1,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(tg(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||Ew[o]||(Ew[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(tg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(tg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(tg(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),kn(r,"popover",l);break;case"xlinkActuate":_l(r,O1,"xlink:actuate",l);break;case"xlinkArcrole":_l(r,O1,"xlink:arcrole",l);break;case"xlinkRole":_l(r,O1,"xlink:role",l);break;case"xlinkShow":_l(r,O1,"xlink:show",l);break;case"xlinkTitle":_l(r,O1,"xlink:title",l);break;case"xlinkType":_l(r,O1,"xlink:type",l);break;case"xmlBase":_l(r,i6,"xml:base",l);break;case"xmlLang":_l(r,i6,"xml:lang",l);break;case"xmlSpace":_l(r,i6,"xml:space",l);break;case"is":i!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),kn(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":DR||l==null||typeof l!=="object"||(DR=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=aP(o),kn(r,o,l)):p0.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&Gl(o,l)}}function J2(r,g,o,l,h,i){switch(o){case"style":cP(r,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?vi(r,l):(typeof l==="number"||typeof l==="bigint")&&vi(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Gl(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Gl(o,l),r.onclick=yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p0.hasOwnProperty(o))l!=null&&typeof l!=="function"&&Gl(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),g=o.slice(2,h?o.length-7:void 0),i=r[Fo]||null,i=i!=null?i[o]:null,typeof i==="function"&&r.removeEventListener(g,i,h),typeof l==="function")){typeof i!=="function"&&i!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,l,h);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):kn(r,o,l)}}}function Ao(r,g,o){switch(Y2(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,h=!1,i;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ag(r,g,i,u,o,null)}}h&&Ag(r,g,"srcSet",o.srcSet,o,null),l&&Ag(r,g,"src",o.src,o,null);return;case"input":$v("input",o),dr("invalid",r);var t=i=u=h=null,A=null,R=null;for(l in o)if(o.hasOwnProperty(l)){var K=o[l];if(K!=null)switch(l){case"name":h=K;break;case"type":u=K;break;case"checked":A=K;break;case"defaultChecked":R=K;break;case"value":i=K;break;case"defaultValue":t=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ag(r,g,l,K,o,null)}}LP(r,o),IP(r,i,t,A,R,u,h,!1);return;case"select":$v("select",o),dr("invalid",r),l=u=i=null;for(h in o)if(o.hasOwnProperty(h)&&(t=o[h],t!=null))switch(h){case"value":i=t;break;case"defaultValue":u=t;break;case"multiple":l=t;default:Ag(r,g,h,t,o,null)}NP(r,o),g=i,o=u,r.multiple=!!l,g!=null?Z1(r,!!l,g,!1):o!=null&&Z1(r,!!l,o,!0);return;case"textarea":$v("textarea",o),dr("invalid",r),i=h=l=null;for(u in o)if(o.hasOwnProperty(u)&&(t=o[u],t!=null))switch(u){case"value":l=t;break;case"defaultValue":h=t;break;case"children":i=t;break;case"dangerouslySetInnerHTML":if(t!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ag(r,g,u,t,o,null)}BP(r,o),CP(r,l,h,i);return;case"option":FP(r,o);for(A in o)if(o.hasOwnProperty(A)&&(l=o[A],l!=null))switch(A){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Ag(r,g,A,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<Jb.length;l++)dr(Jb[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in o)if(o.hasOwnProperty(R)&&(l=o[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ag(r,g,R,l,o,null)}return;default:if(hi(g)){for(K in o)o.hasOwnProperty(K)&&(l=o[K],l!==void 0&&J2(r,g,K,l,o,void 0));return}}for(t in o)o.hasOwnProperty(t)&&(l=o[t],l!=null&&Ag(r,g,t,l,o,null))}function EG(r,g,o,l){switch(Y2(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,i=null,u=null,t=null,A=null,R=null,K=null;for(x in o){var $=o[x];if(o.hasOwnProperty(x)&&$!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":A=$;default:l.hasOwnProperty(x)||Ag(r,g,x,null,l,$)}}for(var J in l){var x=l[J];if($=o[J],l.hasOwnProperty(J)&&(x!=null||$!=null))switch(J){case"type":i=x;break;case"name":h=x;break;case"checked":R=x;break;case"defaultChecked":K=x;break;case"value":u=x;break;case"defaultValue":t=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==$&&Ag(r,g,J,x,l,$)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||SR||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),SR=!0),!g||l||TR||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),TR=!0),Ct(r,u,t,A,R,K,i,h);return;case"select":x=u=t=J=null;for(i in o)if(A=o[i],o.hasOwnProperty(i)&&A!=null)switch(i){case"value":break;case"multiple":x=A;default:l.hasOwnProperty(i)||Ag(r,g,i,null,l,A)}for(h in l)if(i=l[h],A=o[h],l.hasOwnProperty(h)&&(i!=null||A!=null))switch(h){case"value":J=i;break;case"defaultValue":t=i;break;case"multiple":u=i;default:i!==A&&Ag(r,g,h,i,l,A)}l=t,g=u,o=x,J!=null?Z1(r,!!g,J,!1):!!o!==!!g&&(l!=null?Z1(r,!!g,l,!0):Z1(r,!!g,g?[]:"",!1));return;case"textarea":x=J=null;for(t in o)if(h=o[t],o.hasOwnProperty(t)&&h!=null&&!l.hasOwnProperty(t))switch(t){case"value":break;case"children":break;default:Ag(r,g,t,null,l,h)}for(u in l)if(h=l[u],i=o[u],l.hasOwnProperty(u)&&(h!=null||i!=null))switch(u){case"value":J=h;break;case"defaultValue":x=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:h!==i&&Ag(r,g,u,h,l,i)}ZP(r,J,x);return;case"option":for(var hr in o)if(J=o[hr],o.hasOwnProperty(hr)&&J!=null&&!l.hasOwnProperty(hr))switch(hr){case"selected":r.selected=!1;break;default:Ag(r,g,hr,null,l,J)}for(A in l)if(J=l[A],x=o[A],l.hasOwnProperty(A)&&J!==x&&(J!=null||x!=null))switch(A){case"selected":r.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:Ag(r,g,A,J,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pr in o)J=o[Pr],o.hasOwnProperty(Pr)&&J!=null&&!l.hasOwnProperty(Pr)&&Ag(r,g,Pr,null,l,J);for(R in l)if(J=l[R],x=o[R],l.hasOwnProperty(R)&&J!==x&&(J!=null||x!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ag(r,g,R,J,l,x)}return;default:if(hi(g)){for(var Gg in o)J=o[Gg],o.hasOwnProperty(Gg)&&J!==void 0&&!l.hasOwnProperty(Gg)&&J2(r,g,Gg,void 0,l,J);for(K in l)J=l[K],x=o[K],!l.hasOwnProperty(K)||J===x||J===void 0&&x===void 0||J2(r,g,K,J,l,x);return}}for(var sr in o)J=o[sr],o.hasOwnProperty(sr)&&J!=null&&!l.hasOwnProperty(sr)&&Ag(r,g,sr,null,l,J);for($ in l)J=l[$],x=o[$],!l.hasOwnProperty($)||J===x||J==null&&x==null||Ag(r,g,$,J,l,x)}function VH(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function Q2(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];g[l]=r.getPropertyValue(l)}return g}function _H(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,h=l="",i;for(i in g)if(g.hasOwnProperty(i)){var u=g[i];u!=null&&typeof u!=="boolean"&&u!==""&&(i.indexOf("--")===0?(ri(u,i),l+=h+i+":"+(""+u).trim()):typeof u!=="number"||u===0||rq.has(i)?(ri(u,i),l+=h+i.replace(fA,"-$1").toLowerCase().replace(jA,"-ms-")+":"+(""+u).trim()):l+=h+i.replace(fA,"-$1").toLowerCase().replace(jA,"-ms-")+":"+u+"px",h=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=kv(l),kv(g)!==l&&(o.style=Q2(r)))}}function Je(r,g,o,l,h,i){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(tg(l,g),r===""+l)return}ho(g,r,l,i)}function yH(r,g,o,l,h,i){if(h.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}ho(g,r,l,i)}function z2(r,g,o,l,h,i){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(tg(l,o),r===""+l)return}ho(g,r,l,i)}function EH(r,g,o,l,h,i){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(tg(l,g),r===""+l))return}ho(g,r,l,i)}function U2(r,g,o,l,h,i){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(tg(l,g),o=ii(""+l),r===o)return}ho(g,r,l,i)}function cH(r,g,o,l){for(var h={},i=new Set,u=r.attributes,t=0;t<u.length;t++)switch(u[t].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:i.add(u[t].name)}if(hi(g)){for(var A in o)if(o.hasOwnProperty(A)){var R=o[A];if(R!=null){if(p0.hasOwnProperty(A))typeof R!=="function"&&Gl(A,R);else if(o.suppressHydrationWarning!==!0)switch(A){case"children":typeof R!=="string"&&typeof R!=="number"||ho("children",r.textContent,R,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":u=r.innerHTML,R=R?R.__html:void 0,R!=null&&(R=kH(r,R),ho(A,u,R,h));continue;case"style":i.delete(A),_H(r,R,h);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":i.delete(A.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",A);continue;case"className":i.delete("class"),u=UP(r,"class",R),ho("className",u,R,h);continue;default:l.context===Pv&&g!=="svg"&&g!=="math"?i.delete(A.toLowerCase()):i.delete(A),u=UP(r,A,R),ho(A,u,R,h)}}}}else for(R in o)if(o.hasOwnProperty(R)&&(A=o[R],A!=null)){if(p0.hasOwnProperty(R))typeof A!=="function"&&Gl(R,A);else if(o.suppressHydrationWarning!==!0)switch(R){case"children":typeof A!=="string"&&typeof A!=="number"||ho("children",r.textContent,A,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":u=r.innerHTML,A=A?A.__html:void 0,A!=null&&(A=kH(r,A),u!==A&&(h[R]={__html:u}));continue;case"className":Je(r,R,"class",A,i,h);continue;case"tabIndex":Je(r,R,"tabindex",A,i,h);continue;case"style":i.delete(R),_H(r,A,h);continue;case"multiple":i.delete(R),ho(R,r.multiple,A,h);continue;case"muted":i.delete(R),ho(R,r.muted,A,h);continue;case"autoFocus":i.delete("autofocus"),ho(R,r.autofocus,A,h);continue;case"data":if(g!=="object"){i.delete(R),u=r.getAttribute("data"),ho(R,u,A,h);continue}case"src":case"href":if(!(A!==""||g==="a"&&R==="href"||g==="object"&&R==="data")){R==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R);continue}U2(r,R,R,A,i,h);continue;case"action":case"formAction":if(u=r.getAttribute(R),typeof A==="function"){i.delete(R.toLowerCase()),R==="formAction"?(i.delete("name"),i.delete("formenctype"),i.delete("formmethod"),i.delete("formtarget")):(i.delete("enctype"),i.delete("method"),i.delete("target"));continue}else if(u===vJ){i.delete(R.toLowerCase()),ho(R,"function",A,h);continue}U2(r,R,R.toLowerCase(),A,i,h);continue;case"xlinkHref":U2(r,R,"xlink:href",A,i,h);continue;case"contentEditable":z2(r,R,"contenteditable",A,i,h);continue;case"spellCheck":z2(r,R,"spellcheck",A,i,h);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":z2(r,R,R,A,i,h);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":yH(r,R,R.toLowerCase(),A,i,h);continue;case"capture":case"download":r:{t=r;var K=u=R,$=h;if(i.delete(K),t=t.getAttribute(K),t===null)switch(typeof A){case"undefined":case"function":case"symbol":break r;default:if(A===!1)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":break;case"boolean":if(A===!0&&t==="")break r;break;default:if(tg(A,u),t===""+A)break r}ho(u,t,A,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(t=r,K=u=R,$=h,i.delete(K),t=t.getAttribute(K),t===null)switch(typeof A){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(A)||1>A)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(A)||1>A)&&(tg(A,u),t===""+A))break r}ho(u,t,A,$)}continue;case"rowSpan":EH(r,R,"rowspan",A,i,h);continue;case"start":EH(r,R,R,A,i,h);continue;case"xHeight":Je(r,R,"x-height",A,i,h);continue;case"xlinkActuate":Je(r,R,"xlink:actuate",A,i,h);continue;case"xlinkArcrole":Je(r,R,"xlink:arcrole",A,i,h);continue;case"xlinkRole":Je(r,R,"xlink:role",A,i,h);continue;case"xlinkShow":Je(r,R,"xlink:show",A,i,h);continue;case"xlinkTitle":Je(r,R,"xlink:title",A,i,h);continue;case"xlinkType":Je(r,R,"xlink:type",A,i,h);continue;case"xmlBase":Je(r,R,"xml:base",A,i,h);continue;case"xmlLang":Je(r,R,"xml:lang",A,i,h);continue;case"xmlSpace":Je(r,R,"xml:space",A,i,h);continue;case"inert":A!==""||Ew[R]||(Ew[R]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",R)),yH(r,R,R,A,i,h);continue;default:if(!(2<R.length)||R[0]!=="o"&&R[0]!=="O"||R[1]!=="n"&&R[1]!=="N"){t=aP(R),u=!1,l.context===Pv&&g!=="svg"&&g!=="math"?i.delete(t.toLowerCase()):(K=R.toLowerCase(),K=lw.hasOwnProperty(K)?lw[K]||null:null,K!==null&&K!==R&&(u=!0,i.delete(K)),i.delete(t));r:if(K=r,$=t,t=A,oi($))if(K.hasAttribute($))K=K.getAttribute($),tg(t,$),t=K===""+t?t:K;else{switch(typeof t){case"function":case"symbol":break r;case"boolean":if(K=$.toLowerCase().slice(0,5),K!=="data-"&&K!=="aria-")break r}t=t===void 0?void 0:null}else t=void 0;u||ho(R,t,A,h)}}}return 0<i.size&&o.suppressHydrationWarning!==!0&&yG(r,i,h),Object.keys(h).length===0?null:h}function cG(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function aH(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aG(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var h=o[l],i=h.transferSize,u=h.initiatorType,t=h.duration;if(i&&t&&aH(u)){u=0,t=h.responseEnd;for(l+=1;l<o.length;l++){var A=o[l],R=A.startTime;if(R>t)break;var{transferSize:K,initiatorType:$}=A;K&&aH($)&&(A=A.responseEnd,u+=K*(A<t?1:(t-R)/(A-R)))}if(--l,g+=8*(i+u)/(h.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Su(r){return r.nodeType===9?r:r.ownerDocument}function fH(r){switch(r){case hh:return Bh;case ew:return aw;default:return Pv}}function jH(r,g){if(r===Pv)switch(g){case"svg":return Bh;case"math":return aw;default:return Pv}return r===Bh&&g==="foreignObject"?Pv:r}function K2(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function fG(){var r=window.event;if(r&&r.type==="popstate"){if(r===w6)return!1;return w6=r,!0}return w6=null,!1}function Ii(){var r=window.event;return r&&r!==Ub?r.type:null}function Fi(){var r=window.event;return r&&r!==Ub?r.timeStamp:-1.1}function jG(r){setTimeout(function(){throw r})}function pG(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function dG(){}function sG(r,g,o,l){EG(r,g,o,l),r[Fo]=l}function pH(r){vi(r,"")}function rX(r,g,o){r.nodeValue=o}function dH(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Fo]||null;if(g!==null){var o=Fr(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,br(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,br(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Dv(r){return r==="head"}function gX(r,g){r.removeChild(g)}function oX(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function sH(r,g){var o=g,l=0;do{var h=o.nextSibling;if(r.removeChild(o),h&&h.nodeType===8)if(o=h.data,o===zb||o===cw){if(l===0){r.removeChild(h),rh(g);return}l--}else if(o===Qb||o===t0||o===A1||o===Nh||o===H1)l++;else if(o===iJ)xi(r.ownerDocument.documentElement);else if(o===nJ){o=r.ownerDocument.head,xi(o);for(var i=o.firstChild;i;){var{nextSibling:u,nodeName:t}=i;i[ki]||t==="SCRIPT"||t==="STYLE"||t==="LINK"&&i.rel.toLowerCase()==="stylesheet"||o.removeChild(i),i=u}}else o===bJ&&xi(r.ownerDocument.body);o=h}while(o);rh(g)}function rA(r,g){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===zb)if(r===0)break;else r--;else o!==Qb&&o!==t0&&o!==A1&&o!==Nh||r++;o=l}while(o)}function eX(r){rA(r,!0)}function lX(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function vX(r){r.nodeValue=""}function hX(r){rA(r,!1)}function iX(r,g){g=g[uJ],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function bX(r,g){r.nodeValue=g}function $2(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":$2(o),nr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function nX(r,g,o,l){for(;r.nodeType===1;){var h=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){tg(h.name,"name");var i=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===i)return r}else return r;else if(!r[ki])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(i=r.getAttribute("rel"),i==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(i!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(i=r.getAttribute("src"),(i!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&i&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=ne(r.nextSibling),r===null)break}return null}function uX(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=ne(r.nextSibling),r===null)return null}return r}function gA(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=ne(r.nextSibling),r===null)return null}return r}function L2(r){return r.data===t0||r.data===A1}function I2(r){return r.data===Nh||r.data===t0&&r.ownerDocument.readyState!==_R}function wX(r,g){var o=r.ownerDocument;if(r.data===A1)r._reactRetry=g;else if(r.data!==t0||o.readyState!==_R)g();else{var l=function(){g(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function ne(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Qb||g===Nh||g===t0||g===A1||g===H1||g===b6||g===VR)break;if(g===zb||g===cw)return null}}return r}function oA(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},l=r.attributes,h=0;h<l.length;h++){var i=l[h];o[VH(i.name)]=i.name.toLowerCase()==="style"?Q2(r):i.value}return{type:g,props:o}}return r.nodeType===8?r.data===H1?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function eA(r,g,o){return o===null||o[hJ]!==!0?(r.nodeValue===g?r=null:(g=kv(g),r=kv(r.nodeValue)===g?null:r.nodeValue),r):null}function F2(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===zb||o===cw){if(g===0)return ne(r.nextSibling);g--}else o!==Qb&&o!==Nh&&o!==t0&&o!==A1&&o!==H1||g++}r=r.nextSibling}return null}function lA(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===Qb||o===Nh||o===t0||o===A1||o===H1){if(g===0)return r;g--}else o!==zb&&o!==cw||g++}r=r.previousSibling}return null}function tX(r){rh(r)}function PX(r){rh(r)}function OX(r){rh(r)}function vA(r,g,o,l,h){switch(h&&_t(r,l.ancestorInfo),g=Su(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function HX(r,g,o,l){if(!o[Ev]&&Fr(o)){var h=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",h,h,h)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(h=o.attributes;h.length;)o.removeAttributeNode(h[0]);Ao(o,r,g),o[qo]=l,o[Fo]=g}function xi(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);nr(r)}function ku(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function hA(r,g,o){var l=Zh;if(l&&typeof g==="string"&&g){var h=Ye(g);h='link[rel="'+r+'"][href="'+h+'"]',typeof o==="string"&&(h+='[crossorigin="'+o+'"]'),jR.has(h)||(jR.add(h),r={rel:r,crossOrigin:o,href:g},l.querySelector(h)===null&&(g=l.createElement("link"),Ao(g,"link",r),Yr(g),l.head.appendChild(g)))}}function iA(r,g,o,l){var h=(h=_v.current)?ku(h):null;if(!h)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=d1(o.href),g=eg(h).hoistableStyles,l=g.get(o),l||(l={type:"style",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=d1(o.href);var i=eg(h).hoistableStyles,u=i.get(r);if(!u&&(h=h.ownerDocument||h,u={type:"stylesheet",instance:null,count:0,state:{loading:R1,preload:null}},i.set(r,u),(i=h.querySelector(Ni(r)))&&!i._p&&(u.instance=i,u.state.loading=Kb|Be),!Ze.has(r))){var t={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};Ze.set(r,t),i||AX(h,r,t,u.state)}if(g&&l===null)throw o=`

  - `+Du(g)+`
  + `+Du(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return u}if(g&&l!==null)throw o=`

  - `+Du(g)+`
  + `+Du(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=s1(o),g=eg(h).hoistableScripts,l=g.get(o),l||(l={type:"script",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function Du(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Ve.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Ve.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Ve.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function d1(r){return'href="'+Ye(r)+'"'}function Ni(r){return'link[rel="stylesheet"]['+r+"]"}function bA(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function AX(r,g,o,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=Kb:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=Kb}),g.addEventListener("error",function(){return l.loading|=aR}),Ao(g,"link",o),Yr(g),r.head.appendChild(g))}function s1(r){return'[src="'+Ye(r)+'"]'}function Bi(r){return"script[async]"+r}function nA(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+Ye(o.href)+'"]');if(l)return g.instance=l,Yr(l),l;var h=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),Yr(l),Ao(l,"style",h),Vu(l,o.precedence,r),g.instance=l;case"stylesheet":h=d1(o.href);var i=r.querySelector(Ni(h));if(i)return g.state.loading|=Be,g.instance=i,Yr(i),i;l=bA(o),(h=Ze.get(h))&&x2(l,h),i=(r.ownerDocument||r).createElement("link"),Yr(i);var u=i;return u._p=new Promise(function(t,A){u.onload=t,u.onerror=A}),Ao(i,"link",l),g.state.loading|=Be,Vu(i,o.precedence,r),g.instance=i;case"script":if(i=s1(o.src),h=r.querySelector(Bi(i)))return g.instance=h,Yr(h),h;if(l=o,h=Ze.get(i))l=cr({},o),N2(l,h);return r=r.ownerDocument||r,h=r.createElement("script"),Yr(h),Ao(h,"link",l),r.head.appendChild(h),g.instance=h;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Be)===R1&&(l=g.instance,g.state.loading|=Be,Vu(l,o.precedence,r));return g.instance}function Vu(r,g,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,i=h,u=0;u<l.length;u++){var t=l[u];if(t.dataset.precedence===g)i=t;else if(i!==h)break}i?i.parentNode.insertBefore(r,i.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function x2(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function N2(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function uA(r,g,o){if(fw===null){var l=new Map,h=fw=new Map;h.set(o,l)}else h=fw,l=h.get(o),l||(l=new Map,h.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(h=0;h<o.length;h++){var i=o[h];if(!(i[ki]||i[qo]||r==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!==hh){var u=i.getAttribute(g)||"";u=r+u;var t=l.get(u);t?t.push(i):l.set(u,[i])}}return l}function wA(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function qX(r,g,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===Bh||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:h,disabled:i}=g;o=[],g.onLoad&&o.push("`onLoad`"),h&&o.push("`onError`"),i!=null&&o.push("`disabled`"),h=cG(o,"and"),h+=o.length===1?" prop":" props",i=o.length===1?"an "+h:"the "+h,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,i,h)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function tA(r){return r.type==="stylesheet"&&(r.state.loading&fR)===R1?!1:!0}function RX(r,g,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&Be)===R1){if(o.instance===null){var h=d1(l.href),i=g.querySelector(Ni(h));if(i){g=i._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=_u.bind(r),g.then(r,r)),o.state.loading|=Be,o.instance=i,Yr(i);return}i=g.ownerDocument||g,l=bA(l),(h=Ze.get(h))&&x2(l,h),i=i.createElement("link"),Yr(i);var u=i;u._p=new Promise(function(t,A){u.onload=t,u.onerror=A}),Ao(i,"link",l),o.instance=i}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&fR)===R1&&(r.count++,o=_u.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function MX(r,g){return r.stylesheets&&r.count===0&&yu(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&yu(r,r.stylesheets),r.unsuspend){var i=r.unsuspend;r.unsuspend=null,i()}},PJ+g);0<r.imgBytes&&P6===0&&(P6=125*aG()*HJ);var h=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&yu(r,r.stylesheets),r.unsuspend)){var i=r.unsuspend;r.unsuspend=null,i()}},(r.imgBytes>P6?50:OJ)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yu(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function yu(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,jw=new Map,g.forEach(WX,r),jw=null,_u.call(r))}function WX(r,g){if(!(g.state.loading&Be)){var o=jw.get(r);if(o)var l=o.get(O6);else{o=new Map,jw.set(r,o);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<h.length;i++){var u=h[i];if(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")o.set(u.dataset.precedence,u),l=u}l&&o.set(O6,l)}h=g.instance,u=h.getAttribute("data-precedence"),i=o.get(u)||l,i===l&&o.set(O6,h),o.set(u,h),this.count++,l=_u.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),i?i.parentNode.insertBefore(h,i.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),g.state.loading|=Be}}function mX(r,g,o,l,h,i,u,t,A){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=q1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=B1(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=B1(0),this.hiddenUpdates=B1(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function PA(r,g,o,l,h,i,u,t,A,R,K,$){return r=new mX(r,g,o,u,A,R,K,$,t),g=SY,i===!0&&(g|=zo|ye),g|=kr,i=X(3,null,null,g),r.current=i,i.stateNode=r,g=n5(),_0(g),r.pooledCache=g,_0(g),i.memoizedState={element:l,isDehydrated:o,cache:g},O5(i),r}function OA(r){if(!r)return jv;return r=jv,r}function B2(r,g,o,l,h,i){if(Qo&&typeof Qo.onScheduleFiberRoot==="function")try{Qo.onScheduleFiberRoot(lh,l,o)}catch(u){Ql||(Ql=!0,console.error("React instrumentation encountered an error: %o",u))}h=OA(h),l.context===null?l.context=h:l.pendingContext=h,Jl&&we!==null&&!rM&&(rM=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,Z(we)||"Unknown")),l=Nv(g),l.payload={element:o},i=i===void 0?null:i,i!==null&&(typeof i!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",i),l.callback=i),o=Bv(r,l,g),o!==null&&(ul(g,"root.render()",null),Ng(o,r,g),Ai(o,r,g))}function HA(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function Z2(r,g){HA(r,g),(r=r.alternate)&&HA(r,g)}function AA(r){if(r.tag===13||r.tag===31){var g=Jo(r,67108864);g!==null&&Ng(g,r,67108864),Z2(r,67108864)}}function qA(r){if(r.tag===13||r.tag===31){var g=be(r);g=N0(g);var o=Jo(r,g);o!==null&&Ng(o,r,g),Z2(r,g)}}function GX(){return we}function XX(r,g,o,l){var h=C.T;C.T=null;var i=bg.p;try{bg.p=te,C2(r,g,o,l)}finally{bg.p=i,C.T=h}}function YX(r,g,o,l){var h=C.T;C.T=null;var i=bg.p;try{bg.p=_e,C2(r,g,o,l)}finally{bg.p=i,C.T=h}}function C2(r,g,o,l){if(dw){var h=T2(l);if(h===null)X2(r,g,l,sw,o),MA(r,l);else if(JX(h,r,g,o,l))l.stopPropagation();else if(MA(r,l),g&4&&-1<qJ.indexOf(r)){for(;h!==null;){var i=Fr(h);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=hl(i.pendingLanes);if(u!==0){var t=i;t.pendingLanes|=2;for(t.entangledLanes|=2;u;){var A=1<<31-Io(u);t.entanglements[1]|=A,u&=~A}ml(i),(og&(vo|Ae))===uo&&(Nw=io()+UR,$i(0,!1))}}break;case 31:case 13:t=Jo(i,2),t!==null&&Ng(t,i,2),f1(),Z2(i,2)}if(i=T2(l),i===null&&X2(r,g,l,sw,o),i===h)break;h=i}h!==null&&l.stopPropagation()}else X2(r,g,l,null,o)}}function T2(r){return r=yt(r),S2(r)}function S2(r){if(sw=null,r=Rr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=wr(g),r!==null)return r;r=null}else if(o===31){if(r=lr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return sw=r,null}function RA(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return te;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _e;case"message":switch(xX()){case s2:return te;case r4:return _e;case eh:case NX:return Ul;case g4:return gw;default:return Ul}default:return Ul}}function MA(r,g){switch(r){case"focusin":case"focusout":P0=null;break;case"dragenter":case"dragleave":O0=null;break;case"mouseover":case"mouseout":H0=null;break;case"pointerover":case"pointerout":Lb.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ib.delete(g.pointerId)}}function Zi(r,g,o,l,h,i){if(r===null||r.nativeEvent!==i)return r={blockedOn:g,domEventName:o,eventSystemFlags:l,nativeEvent:i,targetContainers:[h]},g!==null&&(g=Fr(g),g!==null&&AA(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,h!==null&&g.indexOf(h)===-1&&g.push(h),r}function JX(r,g,o,l,h){switch(g){case"focusin":return P0=Zi(P0,r,g,o,l,h),!0;case"dragenter":return O0=Zi(O0,r,g,o,l,h),!0;case"mouseover":return H0=Zi(H0,r,g,o,l,h),!0;case"pointerover":var i=h.pointerId;return Lb.set(i,Zi(Lb.get(i)||null,r,g,o,l,h)),!0;case"gotpointercapture":return i=h.pointerId,Ib.set(i,Zi(Ib.get(i)||null,r,g,o,l,h)),!0}return!1}function WA(r){var g=Rr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=wr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){qA(o)});return}}else if(g===31){if(g=lr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){qA(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Eu(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=T2(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),h=l;Di!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Di=h,o.target.dispatchEvent(l),Di===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Di=null}else return g=Fr(o),g!==null&&AA(g),r.blockedOn=o,!1;g.shift()}return!0}function mA(r,g,o){Eu(r)&&o.delete(g)}function QX(){H6=!1,P0!==null&&Eu(P0)&&(P0=null),O0!==null&&Eu(O0)&&(O0=null),H0!==null&&Eu(H0)&&(H0=null),Lb.forEach(mA),Ib.forEach(mA)}function cu(r,g){r.blockedOn===g&&(r.blockedOn=null,H6||(H6=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,QX)))}function GA(r){rt!==r&&(rt=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){rt===r&&(rt=null);for(var g=0;g<r.length;g+=3){var o=r[g],l=r[g+1],h=r[g+2];if(typeof l!=="function")if(S2(l||o)===null)continue;else break;var i=Fr(o);i!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:h,method:o.method,action:l},Object.freeze(o),S5(i,o,l,h))}}))}function rh(r){function g(A){return cu(A,r)}P0!==null&&cu(P0,r),O0!==null&&cu(O0,r),H0!==null&&cu(H0,r),Lb.forEach(g),Ib.forEach(g);for(var o=0;o<A0.length;o++){var l=A0[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<A0.length&&(o=A0[0],o.blockedOn===null);)WA(o),o.blockedOn===null&&A0.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var h=o[l],i=o[l+1],u=h[Fo]||null;if(typeof i==="function")u||GA(o);else if(u){var t=null;if(i&&i.hasAttribute("formAction")){if(h=i,u=i[Fo]||null)t=u.formAction;else if(S2(h)!==null)continue}else t=u.action;typeof t==="function"?o[l+1]=t:(o.splice(l,3),l-=3),GA(o)}}}function XA(){function r(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return h=u})},focusReset:"manual",scroll:"manual"})}function g(){h!==null&&(h(),h=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,h=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),h!==null&&(h(),h=null)}}}function k2(r){this._internalRoot=r}function au(r){this._internalRoot=r}function YA(r){r[Ev]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,zX=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),gh=Symbol.for("react.portal"),oh=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),D2=Symbol.for("react.profiler"),V2=Symbol.for("react.consumer"),Yl=Symbol.for("react.context"),Ci=Symbol.for("react.forward_ref"),_2=Symbol.for("react.suspense"),y2=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),E2=Symbol.for("react.activity"),UX=Symbol.for("react.memo_cache_sentinel"),JA=Symbol.iterator,KX=Symbol.for("react.client.reference"),eo=Array.isArray,C=Th.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bg=R6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$X=Object.freeze({pending:!1,data:null,method:null,action:null}),c2=[],a2=[],sl=-1,Vv=Mr(null),Ti=Mr(null),_v=Mr(null),pu=Mr(null),Si=0,QA,zA,UA,KA,$A,LA,IA;V.__reactDisabledLog=!0;var f2,FA,j2=!1,p2=new(typeof WeakMap==="function"?WeakMap:Map),we=null,Jl=!1,Ve=Object.prototype.hasOwnProperty,d2=lg.unstable_scheduleCallback,LX=lg.unstable_cancelCallback,IX=lg.unstable_shouldYield,FX=lg.unstable_requestPaint,io=lg.unstable_now,xX=lg.unstable_getCurrentPriorityLevel,s2=lg.unstable_ImmediatePriority,r4=lg.unstable_UserBlockingPriority,eh=lg.unstable_NormalPriority,NX=lg.unstable_LowPriority,g4=lg.unstable_IdlePriority,BX=lg.log,ZX=lg.unstable_setDisableYieldValue,lh=null,Qo=null,Ql=!1,zl=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Io=Math.clz32?Math.clz32:Tn,CX=Math.log,TX=Math.LN2,du=256,su=262144,rw=4194304,te=2,_e=8,Ul=32,gw=268435456,yv=Math.random().toString(36).slice(2),qo="__reactFiber$"+yv,Fo="__reactProps$"+yv,Ev="__reactContainer$"+yv,o4="__reactEvents$"+yv,SX="__reactListeners$"+yv,kX="__reactHandles$"+yv,xA="__reactResources$"+yv,ki="__reactMarker$"+yv,NA=new Set,p0={},e4={},DX={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},VX=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),BA={},ZA={},_X=/[\n"\\]/g,CA=!1,TA=!1,SA=!1,kA=!1,DA=!1,VA=!1,_A=["value","defaultValue"],yA=!1,EA=/["'&<>\n\t]|^\s|\s$/,yX="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),cA="applet caption html table td th marquee object template foreignObject desc title".split(" "),EX=cA.concat(["button"]),cX="dd dt li option optgroup p rp rt".split(" "),aA={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},ow={},l4={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},fA=/([A-Z])/g,jA=/^ms-/,aX=/^(?:webkit|moz|o)[A-Z]/,fX=/^-ms-/,jX=/-(.)/g,pA=/;\s*$/,vh={},v4={},dA=!1,sA=!1,rq=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),ew="http://www.w3.org/1998/Math/MathML",hh="http://www.w3.org/2000/svg",pX=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lw={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gq={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},ih={},dX=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sX=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oq=!1,xo={},eq=/^on./,rY=/^on[^A-Z]/,gY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eY=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Di=null,bh=null,nh=null,h4=!1,Kl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),i4=!1;if(Kl)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){i4=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch(r){i4=!1}var cv=null,b4=null,vw=null,d0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hw=yo(d0),_i=cr({},d0,{view:0,detail:0}),lY=yo(_i),n4,u4,yi,iw=cr({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Et,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==yi&&(yi&&r.type==="mousemove"?(n4=r.screenX-yi.screenX,u4=r.screenY-yi.screenY):u4=n4=0,yi=r),n4},movementY:function(r){return"movementY"in r?r.movementY:u4}}),lq=yo(iw),vY=cr({},iw,{dataTransfer:0}),hY=yo(vY),iY=cr({},_i,{relatedTarget:0}),w4=yo(iY),bY=cr({},d0,{animationName:0,elapsedTime:0,pseudoElement:0}),nY=yo(bY),uY=cr({},d0,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),wY=yo(uY),tY=cr({},d0,{data:0}),vq=yo(tY),PY=vq,OY={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HY={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AY={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},qY=cr({},_i,{key:function(r){if(r.key){var g=OY[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=En(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?HY[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Et,charCode:function(r){return r.type==="keypress"?En(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?En(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),RY=yo(qY),MY=cr({},iw,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hq=yo(MY),WY=cr({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Et}),mY=yo(WY),GY=cr({},d0,{propertyName:0,elapsedTime:0,pseudoElement:0}),XY=yo(GY),YY=cr({},iw,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),JY=yo(YY),QY=cr({},d0,{newState:0,oldState:0}),zY=yo(QY),UY=[9,13,27,32],iq=229,t4=Kl&&"CompositionEvent"in window,Ei=null;Kl&&"documentMode"in document&&(Ei=document.documentMode);var KY=Kl&&"TextEvent"in window&&!Ei,bq=Kl&&(!t4||Ei&&8<Ei&&11>=Ei),nq=32,uq=String.fromCharCode(nq),wq=!1,uh=!1,$Y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},ci=null,ai=null,tq=!1;Kl&&(tq=p3("input")&&(!document.documentMode||9<document.documentMode));var No=typeof Object.is==="function"?Object.is:eG,LY=Kl&&"documentMode"in document&&11>=document.documentMode,wh=null,P4=null,fi=null,O4=!1,th={animationend:Z0("Animation","AnimationEnd"),animationiteration:Z0("Animation","AnimationIteration"),animationstart:Z0("Animation","AnimationStart"),transitionrun:Z0("Transition","TransitionRun"),transitionstart:Z0("Transition","TransitionStart"),transitioncancel:Z0("Transition","TransitionCancel"),transitionend:Z0("Transition","TransitionEnd")},H4={},Pq={};Kl&&(Pq=document.createElement("div").style,("AnimationEvent"in window)||(delete th.animationend.animation,delete th.animationiteration.animation,delete th.animationstart.animation),("TransitionEvent"in window)||delete th.transitionend.transition);var Oq=C0("animationend"),Hq=C0("animationiteration"),Aq=C0("animationstart"),IY=C0("transitionrun"),FY=C0("transitionstart"),xY=C0("transitioncancel"),qq=C0("transitionend"),Rq=new Map,A4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");A4.push("scrollEnd");var Mq=0;if(typeof performance==="object"&&typeof performance.now==="function")var NY=performance,Wq=function(){return NY.now()};else{var BY=Date;Wq=function(){return BY.now()}}var q4=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},ZY="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bw=0,R4=1,M4=2,W4=3,nw="– ",uw="+ ",mq="  ",Jg=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",Qe="Components ⚛",ar="Scheduler ⚛",fr="Blocking",av=!1,rv={color:"primary",properties:null,tooltipText:"",track:Qe},fv={start:-0,end:-0,detail:{devtools:rv}},CY=["Changed Props",""],Gq="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",TY=["Changed Props",Gq],ji=1,gv=2,ze=[],Ph=0,m4=0,jv={};Object.freeze(jv);var Ue=null,Oh=null,Ur=0,SY=1,kr=2,zo=8,ye=16,kY=32,Xq=!1;try{var Yq=Object.preventExtensions({})}catch(r){Xq=!0}var G4=new WeakMap,Hh=[],Ah=0,ww=null,pi=0,Ke=[],$e=0,s0=null,ov=1,ev="",Ro=null,Qg=null,pr=!1,$l=!1,Pe=null,pv=null,Le=!1,X4=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Y4=Mr(null),J4=Mr(null),Jq={},tw=null,qh=null,Rh=!1,DY=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},VY=lg.unstable_scheduleCallback,_Y=lg.unstable_NormalPriority,fg={$$typeof:Yl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},jg=lg.unstable_now,Pw=console.createTask?console.createTask:function(){return null},di=1,Ow=2,bo=-0,dv=-0,lv=-0,vv=null,Bo=-1.1,r1=-0,Ig=-0,Jr=-1.1,zr=-1.1,$g=null,Bg=!1,sv=-0,Ll=-1.1,si=null,r0=0,Q4=null,z4=null,g1=-1.1,rb=null,Mh=-1.1,Hw=-1.1,Il=-0,hv=-1.1,Ie=-1.1,U4=0,gb=null,Qq=null,zq=null,g0=-1.1,o1=null,o0=-1.1,Aw=-1.1,Uq=-0,Kq=-0,qw=0,iv=null,$q=0,ob=-1.1,Rw=!1,Mw=!1,eb=null,K4=0,e1=0,Wh=null,Lq=C.S;C.S=function(r,g){if(QR=io(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>hv&&0>Ie){hv=jg();var o=Fi(),l=Ii();if(o!==o0||l!==o1)o0=-1.1;g0=o,o1=l}uG(r,g)}Lq!==null&&Lq(r,g)};var l1=Mr(null),Ee={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},lb=[],vb=[],hb=[],ib=[],bb=[],nb=[],v1=new Set;Ee.recordUnsafeLifecycleWarnings=function(r,g){v1.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&lb.push(r),r.mode&zo&&typeof g.UNSAFE_componentWillMount==="function"&&vb.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&hb.push(r),r.mode&zo&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&ib.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&bb.push(r),r.mode&zo&&typeof g.UNSAFE_componentWillUpdate==="function"&&nb.push(r))},Ee.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<lb.length&&(lb.forEach(function(t){r.add(Z(t)||"Component"),v1.add(t.type)}),lb=[]);var g=new Set;0<vb.length&&(vb.forEach(function(t){g.add(Z(t)||"Component"),v1.add(t.type)}),vb=[]);var o=new Set;0<hb.length&&(hb.forEach(function(t){o.add(Z(t)||"Component"),v1.add(t.type)}),hb=[]);var l=new Set;0<ib.length&&(ib.forEach(function(t){l.add(Z(t)||"Component"),v1.add(t.type)}),ib=[]);var h=new Set;0<bb.length&&(bb.forEach(function(t){h.add(Z(t)||"Component"),v1.add(t.type)}),bb=[]);var i=new Set;if(0<nb.length&&(nb.forEach(function(t){i.add(Z(t)||"Component"),v1.add(t.type)}),nb=[]),0<g.size){var u=q(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,u)}0<l.size&&(u=q(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,u)),0<i.size&&(u=q(i),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,u)),0<r.size&&(u=q(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u)),0<o.size&&(u=q(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u)),0<h.size&&(u=q(h),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u))};var Ww=new Map,Iq=new Set;Ee.recordLegacyContextWarning=function(r,g){var o=null;for(var l=r;l!==null;)l.mode&zo&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!Iq.has(r.type)&&(l=Ww.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],Ww.set(o,l)),l.push(r))},Ee.flushLegacyContextWarning=function(){Ww.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(h){o.add(Z(h)||"Component"),Iq.add(h.type)});var l=q(o);br(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},Ee.discardPendingWarnings=function(){lb=[],vb=[],hb=[],ib=[],bb=[],nb=[],Ww=new Map};var Fq={react_stack_bottom_frame:function(r,g,o){var l=Jl;Jl=!0;try{return r(g,o)}finally{Jl=l}}},$4=Fq.react_stack_bottom_frame.bind(Fq),xq={react_stack_bottom_frame:function(r){var g=Jl;Jl=!0;try{return r.render()}finally{Jl=g}}},Nq=xq.react_stack_bottom_frame.bind(xq),Bq={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){ig(r,r.return,o)}}},L4=Bq.react_stack_bottom_frame.bind(Bq),Zq={react_stack_bottom_frame:function(r,g,o,l,h){try{g.componentDidUpdate(o,l,h)}catch(i){ig(r,r.return,i)}}},Cq=Zq.react_stack_bottom_frame.bind(Zq),Tq={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},yY=Tq.react_stack_bottom_frame.bind(Tq),Sq={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(l){ig(r,g,l)}}},kq=Sq.react_stack_bottom_frame.bind(Sq),Dq={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},EY=Dq.react_stack_bottom_frame.bind(Dq),Vq={react_stack_bottom_frame:function(r,g,o){try{o()}catch(l){ig(r,g,l)}}},cY=Vq.react_stack_bottom_frame.bind(Vq),_q={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},aY=_q.react_stack_bottom_frame.bind(_q),mh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),I4=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),mw=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Gw={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},h1=null,ub=!1,Gh=null,wb=0,Dr=null,F4,yq=F4=!1,Eq={},cq={},aq={};m=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=Z(r),h=l||"null";if(!Eq[h]){Eq[h]=!0,o=o._owner,r=r._debugOwner;var i="";r&&typeof r.tag==="number"&&(h=Z(r))&&(i=`

Check the render method of \``+h+"`."),i||l&&(i=`

Check the top-level render call using <`+l+">.");var u="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=Z(o):typeof o.name==="string"&&(l=o.name),l&&(u=" It was passed a child from "+l+".")),br(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',i,u)})}}};var i1=S8(!0),fq=S8(!1),jq=0,pq=1,dq=2,x4=3,e0=!1,sq=!1,N4=null,B4=!1,Xh=Mr(null),Xw=Mr(0),Oe=Mr(null),Fe=null,Yh=1,tb=2,Vg=Mr(0),Yw=0,xe=1,Zo=2,He=4,Co=8,Jh,rR=new Set,gR=new Set,Z4=new Set,oR=new Set,bv=0,Kr=null,qg=null,pg=null,Jw=!1,Qh=!1,b1=!1,Qw=0,Pb=0,nv=null,fY=0,jY=25,B=null,Ne=null,uv=-1,Ob=!1,Hb={readContext:Kg,use:Tv,useCallback:Tg,useContext:Tg,useEffect:Tg,useImperativeHandle:Tg,useLayoutEffect:Tg,useInsertionEffect:Tg,useMemo:Tg,useReducer:Tg,useRef:Tg,useState:Tg,useDebugValue:Tg,useDeferredValue:Tg,useTransition:Tg,useSyncExternalStore:Tg,useId:Tg,useHostTransitionStatus:Tg,useFormState:Tg,useActionState:Tg,useOptimistic:Tg,useMemoCache:Tg,useCacheRefresh:Tg};Hb.useEffectEvent=Tg;var C4=null,eR=null,T4=null,lR=null,Fl=null,ce=null,zw=null;C4={readContext:function(r){return Kg(r)},use:Tv,useCallback:function(r,g){return B="useCallback",Er(),D1(g),B5(r,g)},useContext:function(r){return B="useContext",Er(),Kg(r)},useEffect:function(r,g){return B="useEffect",Er(),D1(g),Wu(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",Er(),D1(o),N5(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",Er(),D1(g),E0(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",Er(),D1(g),x5(r,g)},useMemo:function(r,g){B="useMemo",Er(),D1(g);var o=C.H;C.H=Fl;try{return Z5(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",Er();var l=C.H;C.H=Fl;try{return J5(r,g,o)}finally{C.H=l}},useRef:function(r){return B="useRef",Er(),I5(r)},useState:function(r){B="useState",Er();var g=C.H;C.H=Fl;try{return K5(r)}finally{C.H=g}},useDebugValue:function(){B="useDebugValue",Er()},useDeferredValue:function(r,g){return B="useDeferredValue",Er(),C5(r,g)},useTransition:function(){return B="useTransition",Er(),k5()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",Er(),z5(r,g,o)},useId:function(){return B="useId",Er(),D5()},useFormState:function(r,g){return B="useFormState",Er(),Hu(),_1(r,g)},useActionState:function(r,g){return B="useActionState",Er(),_1(r,g)},useOptimistic:function(r){return B="useOptimistic",Er(),$5(r)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",Er(),V5()},useEffectEvent:function(r){return B="useEffectEvent",Er(),F5(r)}},eR={readContext:function(r){return Kg(r)},use:Tv,useCallback:function(r,g){return B="useCallback",d(),B5(r,g)},useContext:function(r){return B="useContext",d(),Kg(r)},useEffect:function(r,g){return B="useEffect",d(),Wu(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),N5(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",d(),E0(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),x5(r,g)},useMemo:function(r,g){B="useMemo",d();var o=C.H;C.H=Fl;try{return Z5(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=C.H;C.H=Fl;try{return J5(r,g,o)}finally{C.H=l}},useRef:function(r){return B="useRef",d(),I5(r)},useState:function(r){B="useState",d();var g=C.H;C.H=Fl;try{return K5(r)}finally{C.H=g}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),C5(r,g)},useTransition:function(){return B="useTransition",d(),k5()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),z5(r,g,o)},useId:function(){return B="useId",d(),D5()},useActionState:function(r,g){return B="useActionState",d(),_1(r,g)},useFormState:function(r,g){return B="useFormState",d(),Hu(),_1(r,g)},useOptimistic:function(r){return B="useOptimistic",d(),$5(r)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),V5()},useEffectEvent:function(r){return B="useEffectEvent",d(),F5(r)}},T4={readContext:function(r){return Kg(r)},use:Tv,useCallback:function(r,g){return B="useCallback",d(),Xu(r,g)},useContext:function(r){return B="useContext",d(),Kg(r)},useEffect:function(r,g){B="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",d(),Eo(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),Eo(4,He,r,g)},useMemo:function(r,g){B="useMemo",d();var o=C.H;C.H=ce;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=C.H;C.H=ce;try{return V1(r,g,o)}finally{C.H=l}},useRef:function(){return B="useRef",d(),ug().memoizedState},useState:function(){B="useState",d();var r=C.H;C.H=ce;try{return V1(ke)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),bO(r,g)},useTransition:function(){return B="useTransition",d(),OO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),qu(r,g,o)},useId:function(){return B="useId",d(),ug().memoizedState},useFormState:function(r){return B="useFormState",d(),Hu(),Ru(r)},useActionState:function(r){return B="useActionState",d(),Ru(r)},useOptimistic:function(r,g){return B="useOptimistic",d(),d8(r,g)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),mu(r)}},lR={readContext:function(r){return Kg(r)},use:Tv,useCallback:function(r,g){return B="useCallback",d(),Xu(r,g)},useContext:function(r){return B="useContext",d(),Kg(r)},useEffect:function(r,g){B="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",d(),Eo(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),Eo(4,He,r,g)},useMemo:function(r,g){B="useMemo",d();var o=C.H;C.H=zw;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=C.H;C.H=zw;try{return Wi(r,g,o)}finally{C.H=l}},useRef:function(){return B="useRef",d(),ug().memoizedState},useState:function(){B="useState",d();var r=C.H;C.H=zw;try{return Wi(ke)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),nO(r,g)},useTransition:function(){return B="useTransition",d(),HO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),qu(r,g,o)},useId:function(){return B="useId",d(),ug().memoizedState},useFormState:function(r){return B="useFormState",d(),Hu(),Mu(r)},useActionState:function(r){return B="useActionState",d(),Mu(r)},useOptimistic:function(r,g){return B="useOptimistic",d(),rO(r,g)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return B="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),mu(r)}},Fl={readContext:function(r){return W(),Kg(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return B="useCallback",H(),Er(),B5(r,g)},useContext:function(r){return B="useContext",H(),Er(),Kg(r)},useEffect:function(r,g){return B="useEffect",H(),Er(),Wu(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",H(),Er(),N5(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",H(),Er(),E0(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",H(),Er(),x5(r,g)},useMemo:function(r,g){B="useMemo",H(),Er();var o=C.H;C.H=Fl;try{return Z5(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",H(),Er();var l=C.H;C.H=Fl;try{return J5(r,g,o)}finally{C.H=l}},useRef:function(r){return B="useRef",H(),Er(),I5(r)},useState:function(r){B="useState",H(),Er();var g=C.H;C.H=Fl;try{return K5(r)}finally{C.H=g}},useDebugValue:function(){B="useDebugValue",H(),Er()},useDeferredValue:function(r,g){return B="useDeferredValue",H(),Er(),C5(r,g)},useTransition:function(){return B="useTransition",H(),Er(),k5()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",H(),Er(),z5(r,g,o)},useId:function(){return B="useId",H(),Er(),D5()},useFormState:function(r,g){return B="useFormState",H(),Er(),_1(r,g)},useActionState:function(r,g){return B="useActionState",H(),Er(),_1(r,g)},useOptimistic:function(r){return B="useOptimistic",H(),Er(),$5(r)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return B="useCacheRefresh",Er(),V5()},useEffectEvent:function(r){return B="useEffectEvent",H(),Er(),F5(r)}},ce={readContext:function(r){return W(),Kg(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return B="useCallback",H(),d(),Xu(r,g)},useContext:function(r){return B="useContext",H(),d(),Kg(r)},useEffect:function(r,g){B="useEffect",H(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",H(),d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",H(),d(),Eo(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",H(),d(),Eo(4,He,r,g)},useMemo:function(r,g){B="useMemo",H(),d();var o=C.H;C.H=ce;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",H(),d();var l=C.H;C.H=ce;try{return V1(r,g,o)}finally{C.H=l}},useRef:function(){return B="useRef",H(),d(),ug().memoizedState},useState:function(){B="useState",H(),d();var r=C.H;C.H=ce;try{return V1(ke)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",H(),d()},useDeferredValue:function(r,g){return B="useDeferredValue",H(),d(),bO(r,g)},useTransition:function(){return B="useTransition",H(),d(),OO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",H(),d(),qu(r,g,o)},useId:function(){return B="useId",H(),d(),ug().memoizedState},useFormState:function(r){return B="useFormState",H(),d(),Ru(r)},useActionState:function(r){return B="useActionState",H(),d(),Ru(r)},useOptimistic:function(r,g){return B="useOptimistic",H(),d(),d8(r,g)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return B="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",H(),d(),mu(r)}},zw={readContext:function(r){return W(),Kg(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return B="useCallback",H(),d(),Xu(r,g)},useContext:function(r){return B="useContext",H(),d(),Kg(r)},useEffect:function(r,g){B="useEffect",H(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",H(),d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",H(),d(),Eo(4,Zo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",H(),d(),Eo(4,He,r,g)},useMemo:function(r,g){B="useMemo",H(),d();var o=C.H;C.H=ce;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){B="useReducer",H(),d();var l=C.H;C.H=ce;try{return Wi(r,g,o)}finally{C.H=l}},useRef:function(){return B="useRef",H(),d(),ug().memoizedState},useState:function(){B="useState",H(),d();var r=C.H;C.H=ce;try{return Wi(ke)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",H(),d()},useDeferredValue:function(r,g){return B="useDeferredValue",H(),d(),nO(r,g)},useTransition:function(){return B="useTransition",H(),d(),HO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",H(),d(),qu(r,g,o)},useId:function(){return B="useId",H(),d(),ug().memoizedState},useFormState:function(r){return B="useFormState",H(),d(),Mu(r)},useActionState:function(r){return B="useActionState",H(),d(),Mu(r)},useOptimistic:function(r,g){return B="useOptimistic",H(),d(),rO(r,g)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return B="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",H(),d(),mu(r)}};var vR={},hR=new Set,iR=new Set,bR=new Set,nR=new Set,uR=new Set,wR=new Set,tR=new Set,PR=new Set,OR=new Set,HR=new Set;Object.freeze(vR);var S4={enqueueSetState:function(r,g,o){r=r._reactInternals;var l=be(r),h=Nv(l);h.payload=g,o!==void 0&&o!==null&&(y5(o),h.callback=o),g=Bv(r,h,l),g!==null&&(ul(l,"this.setState()",r),Ng(g,r,l),Ai(g,r,l))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var l=be(r),h=Nv(l);h.tag=pq,h.payload=g,o!==void 0&&o!==null&&(y5(o),h.callback=o),g=Bv(r,h,l),g!==null&&(ul(l,"this.replaceState()",r),Ng(g,r,l),Ai(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=be(r),l=Nv(o);l.tag=dq,g!==void 0&&g!==null&&(y5(g),l.callback=g),g=Bv(r,l,o),g!==null&&(ul(o,"this.forceUpdate()",r),Ng(g,r,o),Ai(g,r,o))}},zh=null,k4=null,D4=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),dg=!1,AR={},qR={},RR={},MR={},Uh=!1,WR={},Uw={},V4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},mR=!1,GR=null;GR=new Set;var wv=!1,sg=!1,_4=!1,XR=typeof WeakSet==="function"?WeakSet:Set,no=null,Kh=null,$h=null,ro=null,fo=!1,ae=null,lo=!1,Ab=8192,pY={getCacheForType:function(r){var g=Kg(fg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Kg(fg).controller.signal},getOwner:function(){return we}};if(typeof Symbol==="function"&&Symbol.for){var qb=Symbol.for;qb("selector.component"),qb("selector.has_pseudo_class"),qb("selector.role"),qb("selector.test_id"),qb("selector.text")}var dY=[],sY=typeof WeakMap==="function"?WeakMap:Map,uo=0,vo=2,Ae=4,tv=0,Rb=1,n1=2,Kw=3,l0=4,$w=6,YR=5,og=uo,Rg=null,yr=null,Vr=0,jo=0,Lw=1,u1=2,Mb=3,JR=4,y4=5,Wb=6,Iw=7,E4=8,w1=9,wg=jo,qe=null,v0=!1,Lh=!1,c4=!1,xl=0,Fg=tv,h0=0,i0=0,a4=0,po=0,t1=0,mb=null,To=null,Fw=!1,xw=0,QR=0,zR=300,Nw=1/0,UR=500,Gb=null,Sg=null,b0=null,Bw=0,f4=1,j4=2,KR=3,n0=0,$R=1,LR=2,IR=3,FR=4,Zw=5,go=0,u0=null,Ih=null,fe=0,p4=0,d4=-0,s4=null,xR=null,NR=null,je=Bw,BR=null,rJ=50,Xb=0,r6=null,g6=!1,Cw=!1,gJ=50,P1=0,Yb=null,Fh=!1,Tw=null,ZR=!1,CR=new Set,oJ={},Sw=null,xh=null,o6=!1,e6=!1,kw=!1,l6=!1,w0=0,v6={};(function(){for(var r=0;r<A4.length;r++){var g=A4[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),Se(o,"on"+g)}Se(Oq,"onAnimationEnd"),Se(Hq,"onAnimationIteration"),Se(Aq,"onAnimationStart"),Se("dblclick","onDoubleClick"),Se("focusin","onFocus"),Se("focusout","onBlur"),Se(IY,"onTransitionRun"),Se(FY,"onTransitionStart"),Se(xY,"onTransitionCancel"),Se(qq,"onTransitionEnd")})(),ge("onMouseEnter",["mouseout","mouseover"]),ge("onMouseLeave",["mouseout","mouseover"]),ge("onPointerEnter",["pointerout","pointerover"]),ge("onPointerLeave",["pointerout","pointerover"]),Yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jb)),Dw="_reactListening"+Math.random().toString(36).slice(2),TR=!1,SR=!1,Vw=!1,kR=!1,_w=!1,yw=!1,DR=!1,Ew={},eJ=/\r\n?/g,lJ=/\u0000|\uFFFD/g,O1="http://www.w3.org/1999/xlink",i6="http://www.w3.org/XML/1998/namespace",vJ="javascript:throw new Error('React form unexpectedly submitted.')",hJ="suppressHydrationWarning",H1="&",cw="/&",Qb="$",zb="/$",t0="$?",A1="$~",Nh="$!",iJ="html",bJ="body",nJ="head",b6="F!",VR="F",_R="loading",uJ="style",Pv=0,Bh=1,aw=2,n6=null,u6=null,yR={dialog:!0,webview:!0},w6=null,Ub=void 0,ER=typeof setTimeout==="function"?setTimeout:void 0,wJ=typeof clearTimeout==="function"?clearTimeout:void 0,q1=-1,cR=typeof Promise==="function"?Promise:void 0,tJ=typeof queueMicrotask==="function"?queueMicrotask:typeof cR<"u"?function(r){return cR.resolve(null).then(r).catch(jG)}:ER,t6=null,R1=0,Kb=1,aR=2,fR=3,Be=4,Ze=new Map,jR=new Set,Ov=bg.d;bg.d={f:function(){var r=Ov.f(),g=f1();return r||g},r:function(r){var g=Fr(r);g!==null&&g.tag===5&&g.type==="form"?PO(g):Ov.r(r)},D:function(r){Ov.D(r),hA("dns-prefetch",r,null)},C:function(r,g){Ov.C(r,g),hA("preconnect",r,g)},L:function(r,g,o){Ov.L(r,g,o);var l=Zh;if(l&&r&&g){var h='link[rel="preload"][as="'+Ye(g)+'"]';g==="image"?o&&o.imageSrcSet?(h+='[imagesrcset="'+Ye(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(h+='[imagesizes="'+Ye(o.imageSizes)+'"]')):h+='[href="'+Ye(r)+'"]':h+='[href="'+Ye(r)+'"]';var i=h;switch(g){case"style":i=d1(r);break;case"script":i=s1(r)}Ze.has(i)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),Ze.set(i,r),l.querySelector(h)!==null||g==="style"&&l.querySelector(Ni(i))||g==="script"&&l.querySelector(Bi(i))||(g=l.createElement("link"),Ao(g,"link",r),Yr(g),l.head.appendChild(g)))}},m:function(r,g){Ov.m(r,g);var o=Zh;if(o&&r){var l=g&&typeof g.as==="string"?g.as:"script",h='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(r)+'"]',i=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=s1(r)}if(!Ze.has(i)&&(r=cr({rel:"modulepreload",href:r},g),Ze.set(i,r),o.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Bi(i)))return}l=o.createElement("link"),Ao(l,"link",r),Yr(l),o.head.appendChild(l)}}},X:function(r,g){Ov.X(r,g);var o=Zh;if(o&&r){var l=eg(o).hoistableScripts,h=s1(r),i=l.get(h);i||(i=o.querySelector(Bi(h)),i||(r=cr({src:r,async:!0},g),(g=Ze.get(h))&&N2(r,g),i=o.createElement("script"),Yr(i),Ao(i,"link",r),o.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(h,i))}},S:function(r,g,o){Ov.S(r,g,o);var l=Zh;if(l&&r){var h=eg(l).hoistableStyles,i=d1(r);g=g||"default";var u=h.get(i);if(!u){var t={loading:R1,preload:null};if(u=l.querySelector(Ni(i)))t.loading=Kb|Be;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=Ze.get(i))&&x2(r,o);var A=u=l.createElement("link");Yr(A),Ao(A,"link",r),A._p=new Promise(function(R,K){A.onload=R,A.onerror=K}),A.addEventListener("load",function(){t.loading|=Kb}),A.addEventListener("error",function(){t.loading|=aR}),t.loading|=Be,Vu(u,g,l)}u={type:"stylesheet",instance:u,count:1,state:t},h.set(i,u)}}},M:function(r,g){Ov.M(r,g);var o=Zh;if(o&&r){var l=eg(o).hoistableScripts,h=s1(r),i=l.get(h);i||(i=o.querySelector(Bi(h)),i||(r=cr({src:r,async:!0,type:"module"},g),(g=Ze.get(h))&&N2(r,g),i=o.createElement("script"),Yr(i),Ao(i,"link",r),o.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(h,i))}}};var Zh=typeof document>"u"?null:document,fw=null,PJ=60000,OJ=800,HJ=500,P6=0,O6=null,jw=null,M1=$X,$b={$$typeof:Yl,Provider:null,Consumer:null,_currentValue:M1,_currentValue2:M1,_threadCount:0},pR="%c%s%c",dR="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",sR="",pw=" ",AJ=Function.prototype.bind,rM=!1,gM=null,oM=null,eM=null,lM=null,vM=null,hM=null,iM=null,bM=null,nM=null,uM=null;gM=function(r,g,o,l){g=e(r,g),g!==null&&(o=v(g.memoizedState,o,0,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Jo(r,2),o!==null&&Ng(o,r,2))},oM=function(r,g,o){g=e(r,g),g!==null&&(o=w(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Jo(r,2),o!==null&&Ng(o,r,2))},eM=function(r,g,o,l){g=e(r,g),g!==null&&(o=b(g.memoizedState,o,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Jo(r,2),o!==null&&Ng(o,r,2))},lM=function(r,g,o){r.pendingProps=v(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Jo(r,2),g!==null&&Ng(g,r,2)},vM=function(r,g){r.pendingProps=w(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Jo(r,2),g!==null&&Ng(g,r,2)},hM=function(r,g,o){r.pendingProps=b(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Jo(r,2),g!==null&&Ng(g,r,2)},iM=function(r){var g=Jo(r,2);g!==null&&Ng(g,r,2)},bM=function(r){var g=N1(),o=Jo(r,g);o!==null&&Ng(o,r,g)},nM=function(r){O=r},uM=function(r){P=r};var dw=!0,sw=null,H6=!1,P0=null,O0=null,H0=null,Lb=new Map,Ib=new Map,A0=[],qJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),rt=null;if(au.prototype.render=k2.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):_(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=g.current,h=be(l);B2(l,h,o,g,null,null)},au.prototype.unmount=k2.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(vo|Ae))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),B2(r.current,2,null,r,null,null),f1(),g[Ev]=null}},au.prototype.unstable_scheduleHydration=function(r){if(r){var g=I();r={blockedOn:null,target:r,priority:g};for(var o=0;o<A0.length&&g!==0&&g<A0[o].priority;o++);A0.splice(o,0,r),o===0&&WA(r)}},function(){var r=Th.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),bg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(g),r=r!==null?er(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.5"};return r.overrideHookState=gM,r.overrideHookStateDeletePath=oM,r.overrideHookStateRenamePath=eM,r.overrideProps=lM,r.overridePropsDeletePath=vM,r.overridePropsRenamePath=hM,r.scheduleUpdate=iM,r.scheduleRetry=bM,r.setErrorHandler=nM,r.setSuspenseHandler=uM,r.scheduleRefresh=S,r.scheduleRoot=L,r.setRefreshHandler=T,r.getCurrentFiber=GX,x1(r)}()&&Kl&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var wM=window.location.protocol;/^(https?|file):$/.test(wM)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(wM==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}IJ.createRoot=function(r,g){if(!_(r))throw Error("Target container is not a DOM element.");YA(r);var o=!1,l="",h=mO,i=GO,u=XO;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Xl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(h=g.onUncaughtError),g.onCaughtError!==void 0&&(i=g.onCaughtError),g.onRecoverableError!==void 0&&(u=g.onRecoverableError)),g=PA(r,1,!1,null,null,o,l,null,h,i,u,XA),r[Ev]=g.current,G2(r),new k2(g)},IJ.hydrateRoot=function(r,g,o){if(!_(r))throw Error("Target container is not a DOM element.");YA(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,h="",i=mO,u=GO,t=XO,A=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(i=o.onUncaughtError),o.onCaughtError!==void 0&&(u=o.onCaughtError),o.onRecoverableError!==void 0&&(t=o.onRecoverableError),o.formState!==void 0&&(A=o.formState)),g=PA(r,1,!0,g,o!=null?o:null,l,h,A,i,u,t,XA),g.context=OA(null),o=g.current,l=be(o),l=N0(l),h=Nv(l),h.callback=null,Bv(o,h,l),ul(l,"hydrateRoot()",null),o=l,g.current.lanes=o,Uv(g,o),ml(g),r[Ev]=g.current,G2(r),new au(g)},IJ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var qM=W1((pI,AM)=>{AM.exports=HM()});var rg=W1((EQ)=>{var z1=tr(vg());(function(){function e(V){if(V==null)return null;if(typeof V==="function")return V.$$typeof===Z?null:V.displayName||V.name||null;if(typeof V==="string")return V;switch(V){case T:return"Fragment";case rr:return"Profiler";case _:return"StrictMode";case p:return"Suspense";case er:return"SuspenseList";case f:return"Activity"}if(typeof V==="object")switch(typeof V.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),V.$$typeof){case S:return"Portal";case lr:return V.displayName||"Context";case wr:return(V._context.displayName||"Context")+".Consumer";case a:var F=V.render;return V=V.displayName,V||(V=F.displayName||F.name||"",V=V!==""?"ForwardRef("+V+")":"ForwardRef"),V;case N:return F=V.displayName||null,F!==null?F:e(V.type)||"Memo";case y:F=V._payload,V=V._init;try{return e(V(F))}catch(or){}}return null}function v(V){return""+V}function b(V){try{v(V);var F=!1}catch(qr){F=!0}if(F){F=console;var or=F.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&V[Symbol.toStringTag]||V.constructor.name||"Object";return or.call(F,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),v(V)}}function n(V){if(V===T)return"<>";if(typeof V==="object"&&V!==null&&V.$$typeof===y)return"<...>";try{var F=e(V);return F?"<"+F+">":"<...>"}catch(or){return"<...>"}}function w(){var V=Mr.A;return V===null?null:V.getOwner()}function P(){return Error("react-stack-top-frame")}function O(V){if(Ar.call(V,"key")){var F=Object.getOwnPropertyDescriptor(V,"key").get;if(F&&F.isReactWarning)return!1}return V.key!==void 0}function H(V,F){function or(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",F))}or.isReactWarning=!0,Object.defineProperty(V,"key",{get:or,configurable:!0})}function W(){var V=e(this.type);return s[V]||(s[V]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),V=this.props.ref,V!==void 0?V:null}function G(V,F,or,Or,qr,Zr){var ir=or.ref;return V={$$typeof:L,type:V,key:F,props:or,_owner:Or},(ir!==void 0?ir:null)!==null?Object.defineProperty(V,"ref",{enumerable:!1,get:W}):Object.defineProperty(V,"ref",{enumerable:!1,value:null}),V._store={},Object.defineProperty(V._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(V,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(V,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:qr}),Object.defineProperty(V,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Zr}),Object.freeze&&(Object.freeze(V.props),Object.freeze(V)),V}function m(V,F,or,Or,qr,Zr){var ir=F.children;if(ir!==void 0)if(Or)if(mr(ir)){for(Or=0;Or<ir.length;Or++)q(ir[Or]);Object.freeze&&Object.freeze(ir)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else q(ir);if(Ar.call(F,"key")){ir=e(V);var Cr=Object.keys(F).filter(function(Mg){return Mg!=="key"});Or=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Gr[ir+Or]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Or,ir,Cr,ir),Gr[ir+Or]=!0)}if(ir=null,or!==void 0&&(b(or),ir=""+or),O(F)&&(b(F.key),ir=""+F.key),"key"in F){or={};for(var jr in F)jr!=="key"&&(or[jr]=F[jr])}else or=F;return ir&&H(or,typeof V==="function"?V.displayName||V.name||"Unknown":V),G(V,ir,or,w(),qr,Zr)}function q(V){X(V)?V._store&&(V._store.validated=1):typeof V==="object"&&V!==null&&V.$$typeof===y&&(V._payload.status==="fulfilled"?X(V._payload.value)&&V._payload.value._store&&(V._payload.value._store.validated=1):V._store&&(V._store.validated=1))}function X(V){return typeof V==="object"&&V!==null&&V.$$typeof===L}var L=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),wr=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),er=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),Z=Symbol.for("react.client.reference"),Mr=z1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ar=Object.prototype.hasOwnProperty,mr=Array.isArray,Br=console.createTask?console.createTask:function(){return null};z1={react_stack_bottom_frame:function(V){return V()}};var k,s={},vr=z1.react_stack_bottom_frame.bind(z1,P)(),Qr=Br(n(P)),Gr={};EQ.Fragment=T,EQ.jsxDEV=function(V,F,or,Or){var qr=1e4>Mr.recentlyCreatedOwnerStacks++;return m(V,F,or,Or,qr?Error("react-stack-top-frame"):vr,qr?Br(n(V)):Qr)}})()});var QP=tr(vg(),1),zP=tr(qM(),1);var RM=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var MM=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var WM=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var mM=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var GM=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var XM=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var YM=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var JM=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var QM=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var zM=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var UM=RM+MM+WM+mM+GM+XM+YM+JM+QM+zM;var Yg=tr(vg(),1);var lt=tr(vg(),1);var ot=(...e)=>e.filter((v,b,n)=>{return Boolean(v)&&v.trim()!==""&&n.indexOf(v)===b}).join(" ").trim();var KM=(e)=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var $M=(e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,b,n)=>n?n.toUpperCase():b.toLowerCase());var M6=(e)=>{let v=$M(e);return v.charAt(0).toUpperCase()+v.slice(1)};var Fb=tr(vg(),1);var et={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var LM=(e)=>{for(let v in e)if(v.startsWith("aria-")||v==="role"||v==="title")return!0;return!1};var Sh=tr(vg(),1),VJ=Sh.createContext({});var IM=()=>Sh.useContext(VJ);var FM=Fb.forwardRef(({color:e,size:v,strokeWidth:b,absoluteStrokeWidth:n,className:w="",children:P,iconNode:O,...H},W)=>{let{size:G=24,strokeWidth:m=2,absoluteStrokeWidth:q=!1,color:X="currentColor",className:L=""}=IM()??{},S=n??q?Number(b??m)*24/Number(v??G):b??m;return Fb.createElement("svg",{ref:W,...et,width:v??G??et.width,height:v??G??et.height,stroke:e??X,strokeWidth:S,className:ot("lucide",L,w),...!P&&!LM(H)&&{"aria-hidden":"true"},...H},[...O.map(([T,_])=>Fb.createElement(T,_)),...Array.isArray(P)?P:[P]])});var c=(e,v)=>{let b=lt.forwardRef(({className:n,...w},P)=>lt.createElement(FM,{ref:P,iconNode:v,className:ot(`lucide-${KM(M6(e))}`,`lucide-${e}`,n),...w}));return b.displayName=M6(e),b};var _J=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Nl=c("braces",_J);var yJ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],q0=c("chart-column",yJ);var EJ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Mo=c("code-xml",EJ);var cJ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Bl=c("file-code-corner",cJ);var aJ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],R0=c("layers",aJ);var fJ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zl=c("loader-circle",fJ);var jJ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ce=c("triangle-alert",jJ);var pJ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],M0=c("user-round",pJ);var dJ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],xb=c("activity",dJ);var sJ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Nb=c("arrow-down-to-line",sJ);var rQ=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Bb=c("arrow-up-to-line",rQ);var gQ=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Zb=c("blocks",gQ);var oQ=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],G1=c("book-marked",oQ);var eQ=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cb=c("book-open",eQ);var lQ=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Tb=c("calendar",lQ);var vQ=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sb=c("check",vQ);var hQ=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wo=c("chevron-down",hQ);var iQ=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kb=c("chevron-left",iQ);var bQ=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Av=c("chevron-right",bQ);var nQ=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Re=c("chevron-up",nQ);var uQ=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],Db=c("chevrons-up-down",uQ);var wQ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Vb=c("clock",wQ);var tQ=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pe=c("copy",tQ);var PQ=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],de=c("database",PQ);var OQ=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],X1=c("download",OQ);var HQ=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_b=c("eye",HQ);var AQ=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Y1=c("folder-open",AQ);var qQ=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],yb=c("hash",qQ);var RQ=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Eb=c("link-2",RQ);var MQ=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],cb=c("list-ordered",MQ);var WQ=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ab=c("list",WQ);var mQ=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],fb=c("lock",mQ);var GQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],kh=c("message-square-plus",GQ);var XQ=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],jb=c("message-square",XQ);var YQ=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],pb=c("package",YQ);var JQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],se=c("pencil",JQ);var QQ=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],J1=c("play",QQ);var zQ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],db=c("plus",zQ);var UQ=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sb=c("radio",UQ);var KQ=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qv=c("refresh-cw",KQ);var $Q=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rn=c("save",$Q);var LQ=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],W0=c("search",LQ);var IQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dh=c("shield-alert",IQ);var FQ=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],gn=c("shield",FQ);var xQ=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],on=c("syringe",xQ);var NQ=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Cl=c("terminal",NQ);var BQ=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],en=c("toggle-left",BQ);var ZQ=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],ln=c("toggle-right",ZQ);var CQ=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Q1=c("timer",CQ);var TQ=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Uo=c("trash-2",TQ);var SQ=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],vn=c("type",SQ);var kQ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],hn=c("upload",kQ);var DQ=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Vh=c("user-plus",DQ);var VQ=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bn=c("wrench",VQ);var _Q=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=c("x",_Q);var yQ=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Rv=c("zap",yQ);var vt={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Ft=tr(vg(),1);var Qn=tr(vg(),1);var Ug=tr(rg(),1),cQ={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},xM=({script:e,selected:v,dot:b,duration:n,onSelect:w,onEdit:P,sendToBackend:O})=>{let H=(S)=>{S.stopPropagation(),O({type:"update_script",id:e.id,patch:{enabled:!e.enabled}})},W=(S)=>{S.stopPropagation(),O({type:"duplicate_script",id:e.id})},G=(S)=>{if(S.stopPropagation(),!window.confirm(`Delete "${e.name}"?`))return;O({type:"delete_script",id:e.id})},m=(S)=>{S.stopPropagation(),P()},q=b==="running",X=(S)=>{if(S.stopPropagation(),q||!e.enabled)return;O({type:"run_script",id:e.id})},L=e.bindings?.length??0;return Ug.jsxDEV("div",{className:`ls-item${v?" ls-selected":""}${!e.enabled&&e.type!=="library"?" ls-disabled":""}`,onClick:w,children:[Ug.jsxDEV("span",{className:cQ[b],title:b},void 0,!1,void 0,this),Ug.jsxDEV("div",{className:"ls-item-body",children:[Ug.jsxDEV("div",{className:"ls-item-name",title:e.name,children:e.name},void 0,!1,void 0,this),Ug.jsxDEV("div",{className:"ls-item-meta",children:[e.type!=="library"&&Ug.jsxDEV("span",{children:e.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),n!==void 0&&b!=="running"&&Ug.jsxDEV("span",{style:{color:b==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[n,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),e.type!=="library"&&L>0&&Ug.jsxDEV("div",{className:"ls-item-bindings",children:e.bindings.map((S,T)=>Ug.jsxDEV("span",{className:"ls-binding-badge",children:[S.type==="character"?Ug.jsxDEV(M0,{size:9},void 0,!1,void 0,this):Ug.jsxDEV(jb,{size:9},void 0,!1,void 0,this),Ug.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.displayName},void 0,!1,void 0,this)]},T,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ug.jsxDEV("div",{className:"ls-item-actions",children:[Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:"Edit script",children:Ug.jsxDEV(se,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),e.type!=="library"&&Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:X,disabled:!e.enabled||q,title:!e.enabled?"Enable to run":q?"Running…":"Run script",children:q?Ug.jsxDEV(Zl,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Ug.jsxDEV(J1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),e.type!=="library"&&Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:H,title:e.enabled?"Disable":"Enable",children:e.enabled?Ug.jsxDEV(ln,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Ug.jsxDEV(en,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:"Duplicate",children:Ug.jsxDEV(pe,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ug.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:G,title:"Delete",children:Ug.jsxDEV(Uo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Zg=Uint8Array,Me=Uint16Array,$6=Int32Array,it=new Zg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bt=new Zg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Y6=new Zg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SM=function(e,v){var b=new Me(31);for(var n=0;n<31;++n)b[n]=v+=1<<e[n-1];var w=new $6(b[30]);for(var n=1;n<30;++n)for(var P=b[n];P<b[n+1];++P)w[P]=P-b[n]<<5|n;return{b,r:w}},kM=SM(it,2),DM=kM.b,J6=kM.r;DM[28]=258,J6[258]=28;var VM=SM(bt,0),aQ=VM.b,NM=VM.r,Q6=new Me(32768);for(gg=0;gg<32768;++gg)Tl=(gg&43690)>>1|(gg&21845)<<1,Tl=(Tl&52428)>>2|(Tl&13107)<<2,Tl=(Tl&61680)>>4|(Tl&3855)<<4,Q6[gg]=((Tl&65280)>>8|(Tl&255)<<8)>>1;var Tl,gg,kl=function(e,v,b){var n=e.length,w=0,P=new Me(v);for(;w<n;++w)if(e[w])++P[e[w]-1];var O=new Me(v);for(w=1;w<v;++w)O[w]=O[w-1]+P[w-1]<<1;var H;if(b){H=new Me(1<<v);var W=15-v;for(w=0;w<n;++w)if(e[w]){var G=w<<4|e[w],m=v-e[w],q=O[e[w]-1]++<<m;for(var X=q|(1<<m)-1;q<=X;++q)H[Q6[q]>>W]=G}}else{H=new Me(n);for(w=0;w<n;++w)if(e[w])H[w]=Q6[O[e[w]-1]++]>>15-e[w]}return H},m0=new Zg(288);for(gg=0;gg<144;++gg)m0[gg]=8;var gg;for(gg=144;gg<256;++gg)m0[gg]=9;var gg;for(gg=256;gg<280;++gg)m0[gg]=7;var gg;for(gg=280;gg<288;++gg)m0[gg]=8;var gg,wn=new Zg(32);for(gg=0;gg<32;++gg)wn[gg]=5;var gg,fQ=kl(m0,9,0),jQ=kl(m0,9,1),pQ=kl(wn,5,0),dQ=kl(wn,5,1),W6=function(e){var v=e[0];for(var b=1;b<e.length;++b)if(e[b]>v)v=e[b];return v},rl=function(e,v,b){var n=v/8|0;return(e[n]|e[n+1]<<8)>>(v&7)&b},m6=function(e,v){var b=v/8|0;return(e[b]|e[b+1]<<8|e[b+2]<<16)>>(v&7)},L6=function(e){return(e+7)/8|0},tn=function(e,v,b){if(v==null||v<0)v=0;if(b==null||b>e.length)b=e.length;return new Zg(e.subarray(v,b))};var sQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(e,v,b){var n=Error(v||sQ[e]);if(n.code=e,Error.captureStackTrace)Error.captureStackTrace(n,ko);if(!b)throw n;return n},rz=function(e,v,b,n){var w=e.length,P=n?n.length:0;if(!w||v.f&&!v.l)return b||new Zg(0);var O=!b,H=O||v.i!=2,W=v.i;if(O)b=new Zg(w*3);var G=function(br){var _o=b.length;if(br>_o){var Xo=new Zg(Math.max(_o*2,br));Xo.set(b),b=Xo}},m=v.f||0,q=v.p||0,X=v.b||0,L=v.l,S=v.d,T=v.m,_=v.n,rr=w*8;do{if(!L){m=rl(e,q,1);var wr=rl(e,q+1,3);if(q+=3,!wr){var lr=L6(q)+4,a=e[lr-4]|e[lr-3]<<8,p=lr+a;if(p>w){if(W)ko(0);break}if(H)G(X+a);b.set(e.subarray(lr,p),X),v.b=X+=a,v.p=q=p*8,v.f=m;continue}else if(wr==1)L=jQ,S=dQ,T=9,_=5;else if(wr==2){var er=rl(e,q,31)+257,N=rl(e,q+10,15)+4,y=er+rl(e,q+5,31)+1;q+=14;var f=new Zg(y),Z=new Zg(19);for(var Mr=0;Mr<N;++Mr)Z[Y6[Mr]]=rl(e,q+Mr*3,7);q+=N*3;var Ar=W6(Z),mr=(1<<Ar)-1,Br=kl(Z,Ar,1);for(var Mr=0;Mr<y;){var k=Br[rl(e,q,mr)];q+=k&15;var lr=k>>4;if(lr<16)f[Mr++]=lr;else{var s=0,vr=0;if(lr==16)vr=3+rl(e,q,3),q+=2,s=f[Mr-1];else if(lr==17)vr=3+rl(e,q,7),q+=3;else if(lr==18)vr=11+rl(e,q,127),q+=7;while(vr--)f[Mr++]=s}}var Qr=f.subarray(0,er),Gr=f.subarray(er);T=W6(Qr),_=W6(Gr),L=kl(Qr,T,1),S=kl(Gr,_,1)}else ko(1);if(q>rr){if(W)ko(0);break}}if(H)G(X+131072);var V=(1<<T)-1,F=(1<<_)-1,or=q;for(;;or=q){var s=L[m6(e,q)&V],Or=s>>4;if(q+=s&15,q>rr){if(W)ko(0);break}if(!s)ko(2);if(Or<256)b[X++]=Or;else if(Or==256){or=q,L=null;break}else{var qr=Or-254;if(Or>264){var Mr=Or-257,Zr=it[Mr];qr=rl(e,q,(1<<Zr)-1)+DM[Mr],q+=Zr}var ir=S[m6(e,q)&F],Cr=ir>>4;if(!ir)ko(3);q+=ir&15;var Gr=aQ[Cr];if(Cr>3){var Zr=bt[Cr];Gr+=m6(e,q)&(1<<Zr)-1,q+=Zr}if(q>rr){if(W)ko(0);break}if(H)G(X+131072);var jr=X+qr;if(X<Gr){var Mg=P-Gr,$o=Math.min(Gr,jr);if(Mg+X<0)ko(3);for(;X<$o;++X)b[X]=n[Mg+X]}for(;X<jr;++X)b[X]=b[X-Gr]}}if(v.l=L,v.p=or,v.b=X,v.f=m,L)m=1,v.m=T,v.d=S,v.n=_}while(!m);return X!=b.length&&O?tn(b,0,X):b.subarray(0,X)},Mv=function(e,v,b){b<<=v&7;var n=v/8|0;e[n]|=b,e[n+1]|=b>>8},nn=function(e,v,b){b<<=v&7;var n=v/8|0;e[n]|=b,e[n+1]|=b>>8,e[n+2]|=b>>16},G6=function(e,v){var b=[];for(var n=0;n<e.length;++n)if(e[n])b.push({s:n,f:e[n]});var w=b.length,P=b.slice();if(!w)return{t:yM,l:0};if(w==1){var O=new Zg(b[0].s+1);return O[b[0].s]=1,{t:O,l:1}}b.sort(function(p,er){return p.f-er.f}),b.push({s:-1,f:25001});var H=b[0],W=b[1],G=0,m=1,q=2;b[0]={s:-1,f:H.f+W.f,l:H,r:W};while(m!=w-1)H=b[b[G].f<b[q].f?G++:q++],W=b[G!=m&&b[G].f<b[q].f?G++:q++],b[m++]={s:-1,f:H.f+W.f,l:H,r:W};var X=P[0].s;for(var n=1;n<w;++n)if(P[n].s>X)X=P[n].s;var L=new Me(X+1),S=z6(b[m-1],L,0);if(S>v){var n=0,T=0,_=S-v,rr=1<<_;P.sort(function(er,N){return L[N.s]-L[er.s]||er.f-N.f});for(;n<w;++n){var wr=P[n].s;if(L[wr]>v)T+=rr-(1<<S-L[wr]),L[wr]=v;else break}T>>=_;while(T>0){var lr=P[n].s;if(L[lr]<v)T-=1<<v-L[lr]++-1;else++n}for(;n>=0&&T;--n){var a=P[n].s;if(L[a]==v)--L[a],++T}S=v}return{t:new Zg(L),l:S}},z6=function(e,v,b){return e.s==-1?Math.max(z6(e.l,v,b+1),z6(e.r,v,b+1)):v[e.s]=b},BM=function(e){var v=e.length;while(v&&!e[--v]);var b=new Me(++v),n=0,w=e[0],P=1,O=function(W){b[n++]=W};for(var H=1;H<=v;++H)if(e[H]==w&&H!=v)++P;else{if(!w&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(w),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(w);P=1,w=e[H]}return{c:b.subarray(0,n),n:v}},un=function(e,v){var b=0;for(var n=0;n<v.length;++n)b+=e[n]*v[n];return b},_M=function(e,v,b){var n=b.length,w=L6(v+2);e[w]=n&255,e[w+1]=n>>8,e[w+2]=e[w]^255,e[w+3]=e[w+1]^255;for(var P=0;P<n;++P)e[w+P+4]=b[P];return(w+4+n)*8},ZM=function(e,v,b,n,w,P,O,H,W,G,m){Mv(v,m++,b),++w[256];var q=G6(w,15),X=q.t,L=q.l,S=G6(P,15),T=S.t,_=S.l,rr=BM(X),wr=rr.c,lr=rr.n,a=BM(T),p=a.c,er=a.n,N=new Me(19);for(var y=0;y<wr.length;++y)++N[wr[y]&31];for(var y=0;y<p.length;++y)++N[p[y]&31];var f=G6(N,7),Z=f.t,Mr=f.l,Ar=19;for(;Ar>4&&!Z[Y6[Ar-1]];--Ar);var mr=G+5<<3,Br=un(w,m0)+un(P,wn)+O,k=un(w,X)+un(P,T)+O+14+3*Ar+un(N,Z)+2*N[16]+3*N[17]+7*N[18];if(W>=0&&mr<=Br&&mr<=k)return _M(v,m,e.subarray(W,W+G));var s,vr,Qr,Gr;if(Mv(v,m,1+(k<Br)),m+=2,k<Br){s=kl(X,L,0),vr=X,Qr=kl(T,_,0),Gr=T;var V=kl(Z,Mr,0);Mv(v,m,lr-257),Mv(v,m+5,er-1),Mv(v,m+10,Ar-4),m+=14;for(var y=0;y<Ar;++y)Mv(v,m+3*y,Z[Y6[y]]);m+=3*Ar;var F=[wr,p];for(var or=0;or<2;++or){var Or=F[or];for(var y=0;y<Or.length;++y){var qr=Or[y]&31;if(Mv(v,m,V[qr]),m+=Z[qr],qr>15)Mv(v,m,Or[y]>>5&127),m+=Or[y]>>12}}}else s=fQ,vr=m0,Qr=pQ,Gr=wn;for(var y=0;y<H;++y){var Zr=n[y];if(Zr>255){var qr=Zr>>18&31;if(nn(v,m,s[qr+257]),m+=vr[qr+257],qr>7)Mv(v,m,Zr>>23&31),m+=it[qr];var ir=Zr&31;if(nn(v,m,Qr[ir]),m+=Gr[ir],ir>3)nn(v,m,Zr>>5&8191),m+=bt[ir]}else nn(v,m,s[Zr]),m+=vr[Zr]}return nn(v,m,s[256]),m+vr[256]},gz=new $6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),yM=new Zg(0),oz=function(e,v,b,n,w,P){var O=P.z||e.length,H=new Zg(n+O+5*(1+Math.ceil(O/7000))+w),W=H.subarray(n,H.length-w),G=P.l,m=(P.r||0)&7;if(v){if(m)W[0]=P.r>>3;var q=gz[v-1],X=q>>13,L=q&8191,S=(1<<b)-1,T=P.p||new Me(32768),_=P.h||new Me(S+1),rr=Math.ceil(b/3),wr=2*rr,lr=function(re){return(e[re]^e[re+1]<<rr^e[re+2]<<wr)&S},a=new $6(25000),p=new Me(288),er=new Me(32),N=0,y=0,f=P.i||0,Z=0,Mr=P.w||0,Ar=0;for(;f+2<O;++f){var mr=lr(f),Br=f&32767,k=_[mr];if(T[Br]=k,_[mr]=Br,Mr<=f){var s=O-f;if((N>7000||Z>24576)&&(s>423||!G)){m=ZM(e,W,0,a,p,er,y,Z,Ar,f-Ar,m),Z=N=y=0,Ar=f;for(var vr=0;vr<286;++vr)p[vr]=0;for(var vr=0;vr<30;++vr)er[vr]=0}var Qr=2,Gr=0,V=L,F=Br-k&32767;if(s>2&&mr==lr(f-F)){var or=Math.min(X,s)-1,Or=Math.min(32767,f),qr=Math.min(258,s);while(F<=Or&&--V&&Br!=k){if(e[f+Qr]==e[f+Qr-F]){var Zr=0;for(;Zr<qr&&e[f+Zr]==e[f+Zr-F];++Zr);if(Zr>Qr){if(Qr=Zr,Gr=F,Zr>or)break;var ir=Math.min(F,Zr-2),Cr=0;for(var vr=0;vr<ir;++vr){var jr=f-F+vr&32767,Mg=T[jr],$o=jr-Mg&32767;if($o>Cr)Cr=$o,k=jr}}}Br=k,k=T[Br],F+=Br-k&32767}}if(Gr){a[Z++]=268435456|J6[Qr]<<18|NM[Gr];var br=J6[Qr]&31,_o=NM[Gr]&31;y+=it[br]+bt[_o],++p[257+br],++er[_o],Mr=f+Qr,++N}else a[Z++]=e[f],++p[e[f]]}}for(f=Math.max(f,Mr);f<O;++f)a[Z++]=e[f],++p[e[f]];if(m=ZM(e,W,G,a,p,er,y,Z,Ar,f-Ar,m),!G)P.r=m&7|W[m/8|0]<<3,m-=7,P.h=_,P.p=T,P.i=f,P.w=Mr}else{for(var f=P.w||0;f<O+G;f+=65535){var Xo=f+65535;if(Xo>=O)W[m/8|0]=G,Xo=O;m=_M(W,m+1,e.subarray(f,Xo))}P.i=O}return tn(H,0,n+L6(m)+w)},ez=function(){var e=new Int32Array(256);for(var v=0;v<256;++v){var b=v,n=9;while(--n)b=(b&1&&-306674912)^b>>>1;e[v]=b}return e}(),lz=function(){var e=-1;return{p:function(v){var b=e;for(var n=0;n<v.length;++n)b=ez[b&255^v[n]]^b>>>8;e=b},d:function(){return~e}}};var vz=function(e,v,b,n,w){if(!w){if(w={l:1},v.dictionary){var P=v.dictionary.subarray(-32768),O=new Zg(P.length+e.length);O.set(P),O.set(e,P.length),e=O,w.w=P.length}}return oz(e,v.level==null?6:v.level,v.mem==null?w.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+v.mem,b,n,w)},EM=function(e,v){var b={};for(var n in e)b[n]=e[n];for(var n in v)b[n]=v[n];return b};var Sl=function(e,v){return e[v]|e[v+1]<<8},gl=function(e,v){return(e[v]|e[v+1]<<8|e[v+2]<<16|e[v+3]<<24)>>>0},X6=function(e,v){return gl(e,v)+gl(e,v+4)*4294967296},mo=function(e,v,b){for(;b;++v)e[v]=b,b>>>=8};function hz(e,v){return vz(e,v||{},0,0)}function iz(e,v){return rz(e,{i:2},v&&v.out,v&&v.dictionary)}var cM=function(e,v,b,n){for(var w in e){var P=e[w],O=v+w,H=n;if(Array.isArray(P))H=EM(n,P[1]),P=P[0];if(P instanceof Zg)b[O]=[P,H];else b[O+="/"]=[new Zg(0),H],cM(P,O,b,n)}},CM=typeof TextEncoder<"u"&&new TextEncoder,U6=typeof TextDecoder<"u"&&new TextDecoder,bz=0;try{U6.decode(yM,{stream:!0}),bz=1}catch(e){}var nz=function(e){for(var v="",b=0;;){var n=e[b++],w=(n>127)+(n>223)+(n>239);if(b+w>e.length)return{s:v,r:tn(e,b-1)};if(!w)v+=String.fromCharCode(n);else if(w==3)n=((n&15)<<18|(e[b++]&63)<<12|(e[b++]&63)<<6|e[b++]&63)-65536,v+=String.fromCharCode(55296|n>>10,56320|n&1023);else if(w&1)v+=String.fromCharCode((n&31)<<6|e[b++]&63);else v+=String.fromCharCode((n&15)<<12|(e[b++]&63)<<6|e[b++]&63)}};function ht(e,v){if(v){var b=new Zg(e.length);for(var n=0;n<e.length;++n)b[n]=e.charCodeAt(n);return b}if(CM)return CM.encode(e);var w=e.length,P=new Zg(e.length+(e.length>>1)),O=0,H=function(m){P[O++]=m};for(var n=0;n<w;++n){if(O+5>P.length){var W=new Zg(O+8+(w-n<<1));W.set(P),P=W}var G=e.charCodeAt(n);if(G<128||v)H(G);else if(G<2048)H(192|G>>6),H(128|G&63);else if(G>55295&&G<57344)G=65536+(G&1047552)|e.charCodeAt(++n)&1023,H(240|G>>18),H(128|G>>12&63),H(128|G>>6&63),H(128|G&63);else H(224|G>>12),H(128|G>>6&63),H(128|G&63)}return tn(P,0,O)}function I6(e,v){if(v){var b="";for(var n=0;n<e.length;n+=16384)b+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return b}else if(U6)return U6.decode(e);else{var w=nz(e),P=w.s,b=w.r;if(b.length)ko(8);return P}}var uz=function(e,v){return v+30+Sl(e,v+26)+Sl(e,v+28)},wz=function(e,v,b){var n=Sl(e,v+28),w=I6(e.subarray(v+46,v+46+n),!(Sl(e,v+8)&2048)),P=v+46+n,O=gl(e,v+20),H=b&&O==4294967295?tz(e,P):[O,gl(e,v+24),gl(e,v+42)],W=H[0],G=H[1],m=H[2];return[Sl(e,v+10),W,G,w,P+Sl(e,v+30)+Sl(e,v+32),m]},tz=function(e,v){for(;Sl(e,v)!=1;v+=4+Sl(e,v+2));return[X6(e,v+12),X6(e,v+4),X6(e,v+20)]},K6=function(e){var v=0;if(e)for(var b in e){var n=e[b].length;if(n>65535)ko(9);v+=n+4}return v},TM=function(e,v,b,n,w,P,O,H){var W=n.length,G=b.extra,m=H&&H.length,q=K6(G);if(mo(e,v,O!=null?33639248:67324752),v+=4,O!=null)e[v++]=20,e[v++]=b.os;e[v]=20,v+=2,e[v++]=b.flag<<1|(P<0&&8),e[v++]=w&&8,e[v++]=b.compression&255,e[v++]=b.compression>>8;var X=new Date(b.mtime==null?Date.now():b.mtime),L=X.getFullYear()-1980;if(L<0||L>119)ko(10);if(mo(e,v,L<<25|X.getMonth()+1<<21|X.getDate()<<16|X.getHours()<<11|X.getMinutes()<<5|X.getSeconds()>>1),v+=4,P!=-1)mo(e,v,b.crc),mo(e,v+4,P<0?-P-2:P),mo(e,v+8,b.size);if(mo(e,v+12,W),mo(e,v+14,q),v+=16,O!=null)mo(e,v,m),mo(e,v+6,b.attrs),mo(e,v+10,O),v+=14;if(e.set(n,v),v+=W,q)for(var S in G){var T=G[S],_=T.length;mo(e,v,+S),mo(e,v+2,_),e.set(T,v+4),v+=4+_}if(m)e.set(H,v),v+=m;return v},Pz=function(e,v,b,n,w){mo(e,v,101010256),mo(e,v+8,b),mo(e,v+10,b),mo(e,v+12,n),mo(e,v+16,w)};function aM(e,v){if(!v)v={};var b={},n=[];cM(e,"",b,v);var w=0,P=0;for(var O in b){var H=b[O],W=H[0],G=H[1],m=G.level==0?0:8,q=ht(O),X=q.length,L=G.comment,S=L&&ht(L),T=S&&S.length,_=K6(G.extra);if(X>65535)ko(11);var rr=m?hz(W,G):W,wr=rr.length,lr=lz();lr.p(W),n.push(EM(G,{size:W.length,crc:lr.d(),c:rr,f:q,m:S,u:X!=O.length||S&&L.length!=T,o:w,compression:m})),w+=30+X+_+wr,P+=76+2*(X+_)+(T||0)+wr}var a=new Zg(P+22),p=w,er=P-w;for(var N=0;N<n.length;++N){var q=n[N];TM(a,q.o,q,q.f,q.u,q.c.length);var y=30+q.f.length+K6(q.extra);a.set(q.c,q.o+y),TM(a,w,q,q.f,q.u,q.c.length,q.o,q.m),w+=16+y+(q.m?q.m.length:0)}return Pz(a,w,n.length,er,p),a}function fM(e,v){var b={},n=e.length-22;for(;gl(e,n)!=101010256;--n)if(!n||e.length-n>65558)ko(13);var w=Sl(e,n+8);if(!w)return{};var P=gl(e,n+16),O=P==4294967295||w==65535;if(O){var H=gl(e,n-12);if(O=gl(e,H)==101075792,O)w=gl(e,H+32),P=gl(e,H+48)}var W=v&&v.filter;for(var G=0;G<w;++G){var m=wz(e,P,O),q=m[0],X=m[1],L=m[2],S=m[3],T=m[4],_=m[5],rr=uz(e,_);if(P=T,!W||W({name:S,size:X,originalSize:L,compression:q}))if(!q)b[S]=tn(e,rr,rr+X);else if(q==8)b[S]=iz(e.subarray(rr,rr+X),{out:new Zg(L)});else ko(14,"unknown compression type "+q)}return b}function F6(e){let v=e.map((n)=>({name:n.name,code:n.code,type:n.type,triggers:n.triggers,bindings:n.bindings,folder:n.folder,metadata:n.metadata})),b={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:v};return aM({"pack.json":ht(JSON.stringify(b,null,2))})}function jM(e,v){let b=F6(e),n=new Blob([b.buffer],{type:"application/zip"}),w=URL.createObjectURL(n),P=document.createElement("a");P.href=w,P.download=`${v}.lumiscript.zip`,P.click(),URL.revokeObjectURL(w)}var pM;function E(e,v,b){function n(H,W){if(!H._zod)Object.defineProperty(H,"_zod",{value:{def:W,constr:O,traits:new Set},enumerable:!1});if(H._zod.traits.has(e))return;H._zod.traits.add(e),v(H,W);let G=O.prototype,m=Object.keys(G);for(let q=0;q<m.length;q++){let X=m[q];if(!(X in H))H[X]=G[X].bind(H)}}let w=b?.Parent??Object;class P extends w{}Object.defineProperty(P,"name",{value:e});function O(H){var W;let G=b?.Parent?new P:this;n(G,H),(W=G._zod).deferred??(W.deferred=[]);for(let m of G._zod.deferred)m();return G}return Object.defineProperty(O,"init",{value:n}),Object.defineProperty(O,Symbol.hasInstance,{value:(H)=>{if(b?.Parent&&H instanceof b.Parent)return!0;return H?._zod?.traits?.has(e)}}),Object.defineProperty(O,"name",{value:e}),O}var W_g=Symbol("zod_brand");class Wv extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Pn extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`);this.name="ZodEncodeError"}}(pM=globalThis).__zod_globalConfig??(pM.__zod_globalConfig={});var _h=globalThis.__zod_globalConfig;function mv(e){if(e)Object.assign(_h,e);return _h}var Og={};UJ(Og,{unwrapMessage:()=>On,uint8ArrayToHex:()=>Sz,uint8ArrayToBase64url:()=>Cz,uint8ArrayToBase64:()=>iW,stringifyPrimitive:()=>oW,slugify:()=>N6,shallowClone:()=>rW,safeExtend:()=>Lz,required:()=>xz,randomString:()=>Yz,propertyKeyTypes:()=>Z6,promiseAllObject:()=>Xz,primitiveTypes:()=>gW,prefixIssues:()=>Mn,pick:()=>Uz,partial:()=>Fz,parsedType:()=>Nz,optionalKeys:()=>C6,omit:()=>Kz,objectClone:()=>Wz,numKeys:()=>Jz,nullish:()=>qn,normalizeParams:()=>_r,mergeDefs:()=>Gv,merge:()=>Iz,jsonStringifyReplacer:()=>Eh,joinValues:()=>Mz,issue:()=>ch,isPlainObject:()=>U1,isObject:()=>yh,hexToUint8Array:()=>Tz,getSizableOrigin:()=>vW,getParsedType:()=>Qz,getLengthableOrigin:()=>Wn,getEnumValues:()=>Hn,getElementAtPath:()=>Gz,floatSafeRemainder:()=>sM,finalizeIssue:()=>Dl,extend:()=>$z,explicitlyAborted:()=>T6,escapeRegex:()=>Xv,esc:()=>nt,defineLazy:()=>Pg,createTransparentProxy:()=>zz,cloneDef:()=>mz,clone:()=>ol,cleanRegex:()=>Rn,cleanEnum:()=>Bz,captureStackTrace:()=>ut,cached:()=>An,base64urlToUint8Array:()=>Zz,base64ToUint8Array:()=>hW,assignProp:()=>G0,assertNotEqual:()=>Hz,assertNever:()=>qz,assertIs:()=>Az,assertEqual:()=>Oz,assert:()=>Rz,allowsEval:()=>B6,aborted:()=>X0,NUMBER_FORMAT_RANGES:()=>eW,Class:()=>bW,BIGINT_FORMAT_RANGES:()=>lW});function Oz(e){return e}function Hz(e){return e}function Az(e){}function qz(e){throw Error("Unexpected value in exhaustive check")}function Rz(e){}function Hn(e){let v=Object.values(e).filter((n)=>typeof n==="number");return Object.entries(e).filter(([n,w])=>v.indexOf(+n)===-1).map(([n,w])=>w)}function Mz(e,v="|"){return e.map((b)=>oW(b)).join(v)}function Eh(e,v){if(typeof v==="bigint")return v.toString();return v}function An(e){return{get value(){{let b=e();return Object.defineProperty(this,"value",{value:b}),b}throw Error("cached value already set")}}}function qn(e){return e===null||e===void 0}function Rn(e){let v=e.startsWith("^")?1:0,b=e.endsWith("$")?e.length-1:e.length;return e.slice(v,b)}function sM(e,v){let b=e/v,n=Math.round(b),w=Number.EPSILON*Math.max(Math.abs(b),1);if(Math.abs(b-n)<w)return 0;return b-n}var dM=Symbol("evaluating");function Pg(e,v,b){let n=void 0;Object.defineProperty(e,v,{get(){if(n===dM)return;if(n===void 0)n=dM,n=b();return n},set(w){Object.defineProperty(e,v,{value:w})},configurable:!0})}function Wz(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function G0(e,v,b){Object.defineProperty(e,v,{value:b,writable:!0,enumerable:!0,configurable:!0})}function Gv(...e){let v={};for(let b of e){let n=Object.getOwnPropertyDescriptors(b);Object.assign(v,n)}return Object.defineProperties({},v)}function mz(e){return Gv(e._zod.def)}function Gz(e,v){if(!v)return e;return v.reduce((b,n)=>b?.[n],e)}function Xz(e){let v=Object.keys(e),b=v.map((n)=>e[n]);return Promise.all(b).then((n)=>{let w={};for(let P=0;P<v.length;P++)w[v[P]]=n[P];return w})}function Yz(e=10){let b="";for(let n=0;n<e;n++)b+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return b}function nt(e){return JSON.stringify(e)}function N6(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var ut="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function yh(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}var B6=An(()=>{if(_h.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});function U1(e){if(yh(e)===!1)return!1;let v=e.constructor;if(v===void 0)return!0;if(typeof v!=="function")return!0;let b=v.prototype;if(yh(b)===!1)return!1;if(Object.prototype.hasOwnProperty.call(b,"isPrototypeOf")===!1)return!1;return!0}function rW(e){if(U1(e))return{...e};if(Array.isArray(e))return[...e];if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);return e}function Jz(e){let v=0;for(let b in e)if(Object.prototype.hasOwnProperty.call(e,b))v++;return v}var Qz=(e)=>{let v=typeof e;switch(v){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(e))return"array";if(e===null)return"null";if(e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function")return"promise";if(typeof Map<"u"&&e instanceof Map)return"map";if(typeof Set<"u"&&e instanceof Set)return"set";if(typeof Date<"u"&&e instanceof Date)return"date";if(typeof File<"u"&&e instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${v}`)}},Z6=new Set(["string","number","symbol"]),gW=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Xv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ol(e,v,b){let n=new e._zod.constr(v??e._zod.def);if(!v||b?.parent)n._zod.parent=e;return n}function _r(e){let v=e;if(!v)return{};if(typeof v==="string")return{error:()=>v};if(v?.message!==void 0){if(v?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");v.error=v.message}if(delete v.message,typeof v.error==="string")return{...v,error:()=>v.error};return v}function zz(e){let v;return new Proxy({},{get(b,n,w){return v??(v=e()),Reflect.get(v,n,w)},set(b,n,w,P){return v??(v=e()),Reflect.set(v,n,w,P)},has(b,n){return v??(v=e()),Reflect.has(v,n)},deleteProperty(b,n){return v??(v=e()),Reflect.deleteProperty(v,n)},ownKeys(b){return v??(v=e()),Reflect.ownKeys(v)},getOwnPropertyDescriptor(b,n){return v??(v=e()),Reflect.getOwnPropertyDescriptor(v,n)},defineProperty(b,n,w){return v??(v=e()),Reflect.defineProperty(v,n,w)}})}function oW(e){if(typeof e==="bigint")return e.toString()+"n";if(typeof e==="string")return`"${e}"`;return`${e}`}function C6(e){return Object.keys(e).filter((v)=>{return e[v]._zod.optin==="optional"&&e[v]._zod.optout==="optional"})}var eW={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},lW={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Uz(e,v){let b=e._zod.def,n=b.checks;if(n&&n.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Gv(e._zod.def,{get shape(){let O={};for(let H in v){if(!(H in b.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;O[H]=b.shape[H]}return G0(this,"shape",O),O},checks:[]});return ol(e,P)}function Kz(e,v){let b=e._zod.def,n=b.checks;if(n&&n.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Gv(e._zod.def,{get shape(){let O={...e._zod.def.shape};for(let H in v){if(!(H in b.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;delete O[H]}return G0(this,"shape",O),O},checks:[]});return ol(e,P)}function $z(e,v){if(!U1(v))throw Error("Invalid input to extend: expected a plain object");let b=e._zod.def.checks;if(b&&b.length>0){let P=e._zod.def.shape;for(let O in v)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let w=Gv(e._zod.def,{get shape(){let P={...e._zod.def.shape,...v};return G0(this,"shape",P),P}});return ol(e,w)}function Lz(e,v){if(!U1(v))throw Error("Invalid input to safeExtend: expected a plain object");let b=Gv(e._zod.def,{get shape(){let n={...e._zod.def.shape,...v};return G0(this,"shape",n),n}});return ol(e,b)}function Iz(e,v){if(e._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let b=Gv(e._zod.def,{get shape(){let n={...e._zod.def.shape,...v._zod.def.shape};return G0(this,"shape",n),n},get catchall(){return v._zod.def.catchall},checks:v._zod.def.checks??[]});return ol(e,b)}function Fz(e,v,b){let w=v._zod.def.checks;if(w&&w.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Gv(v._zod.def,{get shape(){let H=v._zod.def.shape,W={...H};if(b)for(let G in b){if(!(G in H))throw Error(`Unrecognized key: "${G}"`);if(!b[G])continue;W[G]=e?new e({type:"optional",innerType:H[G]}):H[G]}else for(let G in H)W[G]=e?new e({type:"optional",innerType:H[G]}):H[G];return G0(this,"shape",W),W},checks:[]});return ol(v,O)}function xz(e,v,b){let n=Gv(v._zod.def,{get shape(){let w=v._zod.def.shape,P={...w};if(b)for(let O in b){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!b[O])continue;P[O]=new e({type:"nonoptional",innerType:w[O]})}else for(let O in w)P[O]=new e({type:"nonoptional",innerType:w[O]});return G0(this,"shape",P),P}});return ol(v,n)}function X0(e,v=0){if(e.aborted===!0)return!0;for(let b=v;b<e.issues.length;b++)if(e.issues[b]?.continue!==!0)return!0;return!1}function T6(e,v=0){if(e.aborted===!0)return!0;for(let b=v;b<e.issues.length;b++)if(e.issues[b]?.continue===!1)return!0;return!1}function Mn(e,v){return v.map((b)=>{var n;return(n=b).path??(n.path=[]),b.path.unshift(e),b})}function On(e){return typeof e==="string"?e:e?.message}function Dl(e,v,b){let n=e.message?e.message:On(e.inst?._zod.def?.error?.(e))??On(v?.error?.(e))??On(b.customError?.(e))??On(b.localeError?.(e))??"Invalid input",{inst:w,continue:P,input:O,...H}=e;if(H.path??(H.path=[]),H.message=n,v?.reportInput)H.input=O;return H}function vW(e){if(e instanceof Set)return"set";if(e instanceof Map)return"map";if(e instanceof File)return"file";return"unknown"}function Wn(e){if(Array.isArray(e))return"array";if(typeof e==="string")return"string";return"unknown"}function Nz(e){let v=typeof e;switch(v){case"number":return Number.isNaN(e)?"nan":"number";case"object":{if(e===null)return"null";if(Array.isArray(e))return"array";let b=e;if(b&&Object.getPrototypeOf(b)!==Object.prototype&&"constructor"in b&&b.constructor)return b.constructor.name}}return v}function ch(...e){let[v,b,n]=e;if(typeof v==="string")return{message:v,code:"custom",input:b,inst:n};return{...v}}function Bz(e){return Object.entries(e).filter(([v,b])=>{return Number.isNaN(Number.parseInt(v,10))}).map((v)=>v[1])}function hW(e){let v=atob(e),b=new Uint8Array(v.length);for(let n=0;n<v.length;n++)b[n]=v.charCodeAt(n);return b}function iW(e){let v="";for(let b=0;b<e.length;b++)v+=String.fromCharCode(e[b]);return btoa(v)}function Zz(e){let v=e.replace(/-/g,"+").replace(/_/g,"/"),b="=".repeat((4-v.length%4)%4);return hW(v+b)}function Cz(e){return iW(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Tz(e){let v=e.replace(/^0x/,"");if(v.length%2!==0)throw Error("Invalid hex string length");let b=new Uint8Array(v.length/2);for(let n=0;n<v.length;n+=2)b[n/2]=Number.parseInt(v.slice(n,n+2),16);return b}function Sz(e){return Array.from(e).map((v)=>v.toString(16).padStart(2,"0")).join("")}class bW{constructor(...e){}}var nW=(e,v)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:v,enumerable:!1}),e.message=JSON.stringify(v,Eh,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},wt=E("$ZodError",nW),S6=E("$ZodError",nW,{Parent:Error});function uW(e,v=(b)=>b.message){let b={},n=[];for(let w of e.issues)if(w.path.length>0)b[w.path[0]]=b[w.path[0]]||[],b[w.path[0]].push(v(w));else n.push(v(w));return{formErrors:n,fieldErrors:b}}function wW(e,v=(b)=>b.message){let b={_errors:[]},n=(w,P=[])=>{for(let O of w.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((H)=>n({issues:H},[...P,...O.path]));else if(O.code==="invalid_key")n({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")n({issues:O.issues},[...P,...O.path]);else{let H=[...P,...O.path];if(H.length===0)b._errors.push(v(O));else{let W=b,G=0;while(G<H.length){let m=H[G];if(G!==H.length-1)W[m]=W[m]||{_errors:[]};else W[m]=W[m]||{_errors:[]},W[m]._errors.push(v(O));W=W[m],G++}}}};return n(e),b}var tt=(e)=>(v,b,n,w)=>{let P=n?{...n,async:!1}:{async:!1},O=v._zod.run({value:b,issues:[]},P);if(O instanceof Promise)throw new Wv;if(O.issues.length){let H=new(w?.Err??e)(O.issues.map((W)=>Dl(W,P,mv())));throw ut(H,w?.callee),H}return O.value};var Pt=(e)=>async(v,b,n,w)=>{let P=n?{...n,async:!0}:{async:!0},O=v._zod.run({value:b,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let H=new(w?.Err??e)(O.issues.map((W)=>Dl(W,P,mv())));throw ut(H,w?.callee),H}return O.value};var mn=(e)=>(v,b,n)=>{let w=n?{...n,async:!1}:{async:!1},P=v._zod.run({value:b,issues:[]},w);if(P instanceof Promise)throw new Wv;return P.issues.length?{success:!1,error:new(e??wt)(P.issues.map((O)=>Dl(O,w,mv())))}:{success:!0,data:P.value}},tW=mn(S6),Gn=(e)=>async(v,b,n)=>{let w=n?{...n,async:!0}:{async:!0},P=v._zod.run({value:b,issues:[]},w);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new e(P.issues.map((O)=>Dl(O,w,mv())))}:{success:!0,data:P.value}},PW=Gn(S6),OW=(e)=>(v,b,n)=>{let w=n?{...n,direction:"backward"}:{direction:"backward"};return tt(e)(v,b,w)};var HW=(e)=>(v,b,n)=>{return tt(e)(v,b,n)};var AW=(e)=>async(v,b,n)=>{let w=n?{...n,direction:"backward"}:{direction:"backward"};return Pt(e)(v,b,w)};var qW=(e)=>async(v,b,n)=>{return Pt(e)(v,b,n)};var RW=(e)=>(v,b,n)=>{let w=n?{...n,direction:"backward"}:{direction:"backward"};return mn(e)(v,b,w)};var MW=(e)=>(v,b,n)=>{return mn(e)(v,b,n)};var WW=(e)=>async(v,b,n)=>{let w=n?{...n,direction:"backward"}:{direction:"backward"};return Gn(e)(v,b,w)};var mW=(e)=>async(v,b,n)=>{return Gn(e)(v,b,n)};var GW=/^[cC][0-9a-z]{6,}$/,XW=/^[0-9a-z]+$/,YW=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,JW=/^[0-9a-vA-V]{20}$/,QW=/^[A-Za-z0-9]{27}$/,zW=/^[a-zA-Z0-9_-]{21}$/,UW=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var KW=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,k6=(e)=>{if(!e)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var $W=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var Dz="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function LW(){return new RegExp(Dz,"u")}var IW=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,FW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var xW=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,NW=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,BW=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,D6=/^[A-Za-z0-9_-]*$/;var ZW=/^https?$/,CW=/^\+[1-9]\d{6,14}$/,TW="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",SW=new RegExp(`^${TW}$`);function kW(e){return typeof e.precision==="number"?e.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":e.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function DW(e){return new RegExp(`^${kW(e)}$`)}function VW(e){let v=kW({precision:e.precision}),b=["Z"];if(e.local)b.push("");if(e.offset)b.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let n=`${v}(?:${b.join("|")})`;return new RegExp(`^${TW}T(?:${n})$`)}var _W=(e)=>{let v=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${v}$`)};var yW=/^[^A-Z]*$/,EW=/^[^a-z]*$/;var We=E("$ZodCheck",(e,v)=>{var b;e._zod??(e._zod={}),e._zod.def=v,(b=e._zod).onattach??(b.onattach=[])});var cW=E("$ZodCheckMaxLength",(e,v)=>{var b;We.init(e,v),(b=e._zod.def).when??(b.when=(n)=>{let w=n.value;return!qn(w)&&w.length!==void 0}),e._zod.onattach.push((n)=>{let w=n._zod.bag.maximum??Number.POSITIVE_INFINITY;if(v.maximum<w)n._zod.bag.maximum=v.maximum}),e._zod.check=(n)=>{let w=n.value;if(w.length<=v.maximum)return;let O=Wn(w);n.issues.push({origin:O,code:"too_big",maximum:v.maximum,inclusive:!0,input:w,inst:e,continue:!v.abort})}}),aW=E("$ZodCheckMinLength",(e,v)=>{var b;We.init(e,v),(b=e._zod.def).when??(b.when=(n)=>{let w=n.value;return!qn(w)&&w.length!==void 0}),e._zod.onattach.push((n)=>{let w=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(v.minimum>w)n._zod.bag.minimum=v.minimum}),e._zod.check=(n)=>{let w=n.value;if(w.length>=v.minimum)return;let O=Wn(w);n.issues.push({origin:O,code:"too_small",minimum:v.minimum,inclusive:!0,input:w,inst:e,continue:!v.abort})}}),fW=E("$ZodCheckLengthEquals",(e,v)=>{var b;We.init(e,v),(b=e._zod.def).when??(b.when=(n)=>{let w=n.value;return!qn(w)&&w.length!==void 0}),e._zod.onattach.push((n)=>{let w=n._zod.bag;w.minimum=v.length,w.maximum=v.length,w.length=v.length}),e._zod.check=(n)=>{let w=n.value,P=w.length;if(P===v.length)return;let O=Wn(w),H=P>v.length;n.issues.push({origin:O,...H?{code:"too_big",maximum:v.length}:{code:"too_small",minimum:v.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!v.abort})}}),Xn=E("$ZodCheckStringFormat",(e,v)=>{var b,n;if(We.init(e,v),e._zod.onattach.push((w)=>{let P=w._zod.bag;if(P.format=v.format,v.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(v.pattern)}),v.pattern)(b=e._zod).check??(b.check=(w)=>{if(v.pattern.lastIndex=0,v.pattern.test(w.value))return;w.issues.push({origin:"string",code:"invalid_format",format:v.format,input:w.value,...v.pattern?{pattern:v.pattern.toString()}:{},inst:e,continue:!v.abort})});else(n=e._zod).check??(n.check=()=>{})}),jW=E("$ZodCheckRegex",(e,v)=>{Xn.init(e,v),e._zod.check=(b)=>{if(v.pattern.lastIndex=0,v.pattern.test(b.value))return;b.issues.push({origin:"string",code:"invalid_format",format:"regex",input:b.value,pattern:v.pattern.toString(),inst:e,continue:!v.abort})}}),pW=E("$ZodCheckLowerCase",(e,v)=>{v.pattern??(v.pattern=yW),Xn.init(e,v)}),dW=E("$ZodCheckUpperCase",(e,v)=>{v.pattern??(v.pattern=EW),Xn.init(e,v)}),sW=E("$ZodCheckIncludes",(e,v)=>{We.init(e,v);let b=Xv(v.includes),n=new RegExp(typeof v.position==="number"?`^.{${v.position}}${b}`:b);v.pattern=n,e._zod.onattach.push((w)=>{let P=w._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(n)}),e._zod.check=(w)=>{if(w.value.includes(v.includes,v.position))return;w.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:v.includes,input:w.value,inst:e,continue:!v.abort})}}),r9=E("$ZodCheckStartsWith",(e,v)=>{We.init(e,v);let b=new RegExp(`^${Xv(v.prefix)}.*`);v.pattern??(v.pattern=b),e._zod.onattach.push((n)=>{let w=n._zod.bag;w.patterns??(w.patterns=new Set),w.patterns.add(b)}),e._zod.check=(n)=>{if(n.value.startsWith(v.prefix))return;n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:v.prefix,input:n.value,inst:e,continue:!v.abort})}}),g9=E("$ZodCheckEndsWith",(e,v)=>{We.init(e,v);let b=new RegExp(`.*${Xv(v.suffix)}$`);v.pattern??(v.pattern=b),e._zod.onattach.push((n)=>{let w=n._zod.bag;w.patterns??(w.patterns=new Set),w.patterns.add(b)}),e._zod.check=(n)=>{if(n.value.endsWith(v.suffix))return;n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:v.suffix,input:n.value,inst:e,continue:!v.abort})}});var o9=E("$ZodCheckOverwrite",(e,v)=>{We.init(e,v),e._zod.check=(b)=>{b.value=v.tx(b.value)}});class V6{constructor(e=[]){if(this.content=[],this.indent=0,this)this.args=e}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e==="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let b=e.split(`
`).filter((P)=>P),n=Math.min(...b.map((P)=>P.length-P.trimStart().length)),w=b.map((P)=>P.slice(n)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of w)this.content.push(P)}compile(){let e=Function,v=this?.args,n=[...(this?.content??[""]).map((w)=>`  ${w}`)];return new e(...v,n.join(`
`))}}var l9={major:4,minor:4,patch:3};var yg=E("$ZodType",(e,v)=>{var b;e??(e={}),e._zod.def=v,e._zod.bag=e._zod.bag||{},e._zod.version=l9;let n=[...e._zod.def.checks??[]];if(e._zod.traits.has("$ZodCheck"))n.unshift(e);for(let w of n)for(let P of w._zod.onattach)P(e);if(n.length===0)(b=e._zod).deferred??(b.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let w=(O,H,W)=>{let G=X0(O),m;for(let q of H){if(q._zod.def.when){if(T6(O))continue;if(!q._zod.def.when(O))continue}else if(G)continue;let X=O.issues.length,L=q._zod.check(O);if(L instanceof Promise&&W?.async===!1)throw new Wv;if(m||L instanceof Promise)m=(m??Promise.resolve()).then(async()=>{if(await L,O.issues.length===X)return;if(!G)G=X0(O,X)});else{if(O.issues.length===X)continue;if(!G)G=X0(O,X)}}if(m)return m.then(()=>{return O});return O},P=(O,H,W)=>{if(X0(O))return O.aborted=!0,O;let G=w(H,n,W);if(G instanceof Promise){if(W.async===!1)throw new Wv;return G.then((m)=>e._zod.parse(m,W))}return e._zod.parse(G,W)};e._zod.run=(O,H)=>{if(H.skipChecks)return e._zod.parse(O,H);if(H.direction==="backward"){let G=e._zod.parse({value:O.value,issues:[]},{...H,skipChecks:!0});if(G instanceof Promise)return G.then((m)=>{return P(m,O,H)});return P(G,O,H)}let W=e._zod.parse(O,H);if(W instanceof Promise){if(H.async===!1)throw new Wv;return W.then((G)=>w(G,n,H))}return w(W,n,H)}}Pg(e,"~standard",()=>({validate:(w)=>{try{let P=tW(e,w);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return PW(e,w).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),qt=E("$ZodString",(e,v)=>{yg.init(e,v),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??_W(e._zod.bag),e._zod.parse=(b,n)=>{if(v.coerce)try{b.value=String(b.value)}catch(w){}if(typeof b.value==="string")return b;return b.issues.push({expected:"string",code:"invalid_type",input:b.value,inst:e}),b}}),Lg=E("$ZodStringFormat",(e,v)=>{Xn.init(e,v),qt.init(e,v)}),P9=E("$ZodGUID",(e,v)=>{v.pattern??(v.pattern=KW),Lg.init(e,v)}),O9=E("$ZodUUID",(e,v)=>{if(v.version){let n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[v.version];if(n===void 0)throw Error(`Invalid UUID version: "${v.version}"`);v.pattern??(v.pattern=k6(n))}else v.pattern??(v.pattern=k6());Lg.init(e,v)}),H9=E("$ZodEmail",(e,v)=>{v.pattern??(v.pattern=$W),Lg.init(e,v)}),A9=E("$ZodURL",(e,v)=>{Lg.init(e,v),e._zod.check=(b)=>{try{let n=b.value.trim();if(!v.normalize&&v.protocol?.source===ZW.source){if(!/^https?:\/\//i.test(n)){b.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:b.value,inst:e,continue:!v.abort});return}}let w=new URL(n);if(v.hostname){if(v.hostname.lastIndex=0,!v.hostname.test(w.hostname))b.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:v.hostname.source,input:b.value,inst:e,continue:!v.abort})}if(v.protocol){if(v.protocol.lastIndex=0,!v.protocol.test(w.protocol.endsWith(":")?w.protocol.slice(0,-1):w.protocol))b.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:v.protocol.source,input:b.value,inst:e,continue:!v.abort})}if(v.normalize)b.value=w.href;else b.value=n;return}catch(n){b.issues.push({code:"invalid_format",format:"url",input:b.value,inst:e,continue:!v.abort})}}}),q9=E("$ZodEmoji",(e,v)=>{v.pattern??(v.pattern=LW()),Lg.init(e,v)}),R9=E("$ZodNanoID",(e,v)=>{v.pattern??(v.pattern=zW),Lg.init(e,v)}),M9=E("$ZodCUID",(e,v)=>{v.pattern??(v.pattern=GW),Lg.init(e,v)}),W9=E("$ZodCUID2",(e,v)=>{v.pattern??(v.pattern=XW),Lg.init(e,v)}),m9=E("$ZodULID",(e,v)=>{v.pattern??(v.pattern=YW),Lg.init(e,v)}),G9=E("$ZodXID",(e,v)=>{v.pattern??(v.pattern=JW),Lg.init(e,v)}),X9=E("$ZodKSUID",(e,v)=>{v.pattern??(v.pattern=QW),Lg.init(e,v)}),Y9=E("$ZodISODateTime",(e,v)=>{v.pattern??(v.pattern=VW(v)),Lg.init(e,v)}),J9=E("$ZodISODate",(e,v)=>{v.pattern??(v.pattern=SW),Lg.init(e,v)}),Q9=E("$ZodISOTime",(e,v)=>{v.pattern??(v.pattern=DW(v)),Lg.init(e,v)}),z9=E("$ZodISODuration",(e,v)=>{v.pattern??(v.pattern=UW),Lg.init(e,v)}),U9=E("$ZodIPv4",(e,v)=>{v.pattern??(v.pattern=IW),Lg.init(e,v),e._zod.bag.format="ipv4"}),K9=E("$ZodIPv6",(e,v)=>{v.pattern??(v.pattern=FW),Lg.init(e,v),e._zod.bag.format="ipv6",e._zod.check=(b)=>{try{new URL(`http://[${b.value}]`)}catch{b.issues.push({code:"invalid_format",format:"ipv6",input:b.value,inst:e,continue:!v.abort})}}});var $9=E("$ZodCIDRv4",(e,v)=>{v.pattern??(v.pattern=xW),Lg.init(e,v)}),L9=E("$ZodCIDRv6",(e,v)=>{v.pattern??(v.pattern=NW),Lg.init(e,v),e._zod.check=(b)=>{let n=b.value.split("/");try{if(n.length!==2)throw Error();let[w,P]=n;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${w}]`)}catch{b.issues.push({code:"invalid_format",format:"cidrv6",input:b.value,inst:e,continue:!v.abort})}}});function I9(e){if(e==="")return!0;if(/\s/.test(e))return!1;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}var F9=E("$ZodBase64",(e,v)=>{v.pattern??(v.pattern=BW),Lg.init(e,v),e._zod.bag.contentEncoding="base64",e._zod.check=(b)=>{if(I9(b.value))return;b.issues.push({code:"invalid_format",format:"base64",input:b.value,inst:e,continue:!v.abort})}});function Vz(e){if(!D6.test(e))return!1;let v=e.replace(/[-_]/g,(n)=>n==="-"?"+":"/"),b=v.padEnd(Math.ceil(v.length/4)*4,"=");return I9(b)}var x9=E("$ZodBase64URL",(e,v)=>{v.pattern??(v.pattern=D6),Lg.init(e,v),e._zod.bag.contentEncoding="base64url",e._zod.check=(b)=>{if(Vz(b.value))return;b.issues.push({code:"invalid_format",format:"base64url",input:b.value,inst:e,continue:!v.abort})}}),N9=E("$ZodE164",(e,v)=>{v.pattern??(v.pattern=CW),Lg.init(e,v)});function _z(e,v=null){try{let b=e.split(".");if(b.length!==3)return!1;let[n]=b;if(!n)return!1;let w=JSON.parse(atob(n));if("typ"in w&&w?.typ!=="JWT")return!1;if(!w.alg)return!1;if(v&&(!("alg"in w)||w.alg!==v))return!1;return!0}catch{return!1}}var B9=E("$ZodJWT",(e,v)=>{Lg.init(e,v),e._zod.check=(b)=>{if(_z(b.value,v.alg))return;b.issues.push({code:"invalid_format",format:"jwt",input:b.value,inst:e,continue:!v.abort})}});var Z9=E("$ZodUnknown",(e,v)=>{yg.init(e,v),e._zod.parse=(b)=>b}),C9=E("$ZodNever",(e,v)=>{yg.init(e,v),e._zod.parse=(b,n)=>{return b.issues.push({expected:"never",code:"invalid_type",input:b.value,inst:e}),b}});function v9(e,v,b){if(e.issues.length)v.issues.push(...Mn(b,e.issues));v.value[b]=e.value}var T9=E("$ZodArray",(e,v)=>{yg.init(e,v),e._zod.parse=(b,n)=>{let w=b.value;if(!Array.isArray(w))return b.issues.push({expected:"array",code:"invalid_type",input:w,inst:e}),b;b.value=Array(w.length);let P=[];for(let O=0;O<w.length;O++){let H=w[O],W=v.element._zod.run({value:H,issues:[]},n);if(W instanceof Promise)P.push(W.then((G)=>v9(G,b,O)));else v9(W,b,O)}if(P.length)return Promise.all(P).then(()=>b);return b}});function At(e,v,b,n,w,P){let O=b in n;if(e.issues.length){if(w&&P&&!O)return;v.issues.push(...Mn(b,e.issues))}if(!O&&!w){if(!e.issues.length)v.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[b]});return}if(e.value===void 0){if(O)v.value[b]=void 0}else v.value[b]=e.value}function S9(e){let v=Object.keys(e.shape);for(let n of v)if(!e.shape?.[n]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let b=C6(e.shape);return{...e,keys:v,keySet:new Set(v),numKeys:v.length,optionalKeys:new Set(b)}}function k9(e,v,b,n,w,P){let O=[],H=w.keySet,W=w.catchall._zod,G=W.def.type,m=W.optin==="optional",q=W.optout==="optional";for(let X in v){if(X==="__proto__")continue;if(H.has(X))continue;if(G==="never"){O.push(X);continue}let L=W.run({value:v[X],issues:[]},n);if(L instanceof Promise)e.push(L.then((S)=>At(S,b,X,v,m,q)));else At(L,b,X,v,m,q)}if(O.length)b.issues.push({code:"unrecognized_keys",keys:O,input:v,inst:P});if(!e.length)return b;return Promise.all(e).then(()=>{return b})}var yz=E("$ZodObject",(e,v)=>{if(yg.init(e,v),!Object.getOwnPropertyDescriptor(v,"shape")?.get){let H=v.shape;Object.defineProperty(v,"shape",{get:()=>{let W={...H};return Object.defineProperty(v,"shape",{value:W}),W}})}let n=An(()=>S9(v));Pg(e._zod,"propValues",()=>{let H=v.shape,W={};for(let G in H){let m=H[G]._zod;if(m.values){W[G]??(W[G]=new Set);for(let q of m.values)W[G].add(q)}}return W});let w=yh,P=v.catchall,O;e._zod.parse=(H,W)=>{O??(O=n.value);let G=H.value;if(!w(G))return H.issues.push({expected:"object",code:"invalid_type",input:G,inst:e}),H;H.value={};let m=[],q=O.shape;for(let X of O.keys){let L=q[X],S=L._zod.optin==="optional",T=L._zod.optout==="optional",_=L._zod.run({value:G[X],issues:[]},W);if(_ instanceof Promise)m.push(_.then((rr)=>At(rr,H,X,G,S,T)));else At(_,H,X,G,S,T)}if(!P)return m.length?Promise.all(m).then(()=>H):H;return k9(m,G,H,W,n.value,e)}}),D9=E("$ZodObjectJIT",(e,v)=>{yz.init(e,v);let b=e._zod.parse,n=An(()=>S9(v)),w=(X)=>{let L=new V6(["shape","payload","ctx"]),S=n.value,T=(lr)=>{let a=nt(lr);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};L.write("const input = payload.value;");let _=Object.create(null),rr=0;for(let lr of S.keys)_[lr]=`key_${rr++}`;L.write("const newResult = {};");for(let lr of S.keys){let a=_[lr],p=nt(lr),er=X[lr],N=er?._zod?.optin==="optional",y=er?._zod?.optout==="optional";if(L.write(`const ${a} = ${T(lr)};`),N&&y)L.write(`
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
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let wr=L.compile();return(lr,a)=>wr(X,lr,a)},P,O=yh,H=!_h.jitless,G=H&&B6.value,m=v.catchall,q;e._zod.parse=(X,L)=>{q??(q=n.value);let S=X.value;if(!O(S))return X.issues.push({expected:"object",code:"invalid_type",input:S,inst:e}),X;if(H&&G&&L?.async===!1&&L.jitless!==!0){if(!P)P=w(v.shape);if(X=P(X,L),!m)return X;return k9([],S,X,L,q,e)}return b(X,L)}});function h9(e,v,b,n){for(let P of e)if(P.issues.length===0)return v.value=P.value,v;let w=e.filter((P)=>!X0(P));if(w.length===1)return v.value=w[0].value,w[0];return v.issues.push({code:"invalid_union",input:v.value,inst:b,errors:e.map((P)=>P.issues.map((O)=>Dl(O,n,mv())))}),v}var V9=E("$ZodUnion",(e,v)=>{yg.init(e,v),Pg(e._zod,"optin",()=>v.options.some((n)=>n._zod.optin==="optional")?"optional":void 0),Pg(e._zod,"optout",()=>v.options.some((n)=>n._zod.optout==="optional")?"optional":void 0),Pg(e._zod,"values",()=>{if(v.options.every((n)=>n._zod.values))return new Set(v.options.flatMap((n)=>Array.from(n._zod.values)));return}),Pg(e._zod,"pattern",()=>{if(v.options.every((n)=>n._zod.pattern)){let n=v.options.map((w)=>w._zod.pattern);return new RegExp(`^(${n.map((w)=>Rn(w.source)).join("|")})$`)}return});let b=v.options.length===1?v.options[0]._zod.run:null;e._zod.parse=(n,w)=>{if(b)return b(n,w);let P=!1,O=[];for(let H of v.options){let W=H._zod.run({value:n.value,issues:[]},w);if(W instanceof Promise)O.push(W),P=!0;else{if(W.issues.length===0)return W;O.push(W)}}if(!P)return h9(O,n,e,w);return Promise.all(O).then((H)=>{return h9(H,n,e,w)})}});var _9=E("$ZodIntersection",(e,v)=>{yg.init(e,v),e._zod.parse=(b,n)=>{let w=b.value,P=v.left._zod.run({value:w,issues:[]},n),O=v.right._zod.run({value:w,issues:[]},n);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([W,G])=>{return i9(b,W,G)});return i9(b,P,O)}});function _6(e,v){if(e===v)return{valid:!0,data:e};if(e instanceof Date&&v instanceof Date&&+e===+v)return{valid:!0,data:e};if(U1(e)&&U1(v)){let b=Object.keys(v),n=Object.keys(e).filter((P)=>b.indexOf(P)!==-1),w={...e,...v};for(let P of n){let O=_6(e[P],v[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};w[P]=O.data}return{valid:!0,data:w}}if(Array.isArray(e)&&Array.isArray(v)){if(e.length!==v.length)return{valid:!1,mergeErrorPath:[]};let b=[];for(let n=0;n<e.length;n++){let w=e[n],P=v[n],O=_6(w,P);if(!O.valid)return{valid:!1,mergeErrorPath:[n,...O.mergeErrorPath]};b.push(O.data)}return{valid:!0,data:b}}return{valid:!1,mergeErrorPath:[]}}function i9(e,v,b){let n=new Map,w;for(let H of v.issues)if(H.code==="unrecognized_keys"){w??(w=H);for(let W of H.keys){if(!n.has(W))n.set(W,{});n.get(W).l=!0}}else e.issues.push(H);for(let H of b.issues)if(H.code==="unrecognized_keys")for(let W of H.keys){if(!n.has(W))n.set(W,{});n.get(W).r=!0}else e.issues.push(H);let P=[...n].filter(([,H])=>H.l&&H.r).map(([H])=>H);if(P.length&&w)e.issues.push({...w,keys:P});if(X0(e))return e;let O=_6(v.value,b.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return e.value=O.data,e}var y9=E("$ZodEnum",(e,v)=>{yg.init(e,v);let b=Hn(v.entries),n=new Set(b);e._zod.values=n,e._zod.pattern=new RegExp(`^(${b.filter((w)=>Z6.has(typeof w)).map((w)=>typeof w==="string"?Xv(w):w.toString()).join("|")})$`),e._zod.parse=(w,P)=>{let O=w.value;if(n.has(O))return w;return w.issues.push({code:"invalid_value",values:b,input:O,inst:e}),w}}),E9=E("$ZodLiteral",(e,v)=>{if(yg.init(e,v),v.values.length===0)throw Error("Cannot create literal schema with no valid values");let b=new Set(v.values);e._zod.values=b,e._zod.pattern=new RegExp(`^(${v.values.map((n)=>typeof n==="string"?Xv(n):n?Xv(n.toString()):String(n)).join("|")})$`),e._zod.parse=(n,w)=>{let P=n.value;if(b.has(P))return n;return n.issues.push({code:"invalid_value",values:v.values,input:P,inst:e}),n}});var c9=E("$ZodTransform",(e,v)=>{yg.init(e,v),e._zod.optin="optional",e._zod.parse=(b,n)=>{if(n.direction==="backward")throw new Pn(e.constructor.name);let w=v.transform(b.value,b);if(n.async)return(w instanceof Promise?w:Promise.resolve(w)).then((O)=>{return b.value=O,b.fallback=!0,b});if(w instanceof Promise)throw new Wv;return b.value=w,b.fallback=!0,b}});function b9(e,v){if(v===void 0&&(e.issues.length||e.fallback))return{issues:[],value:void 0};return e}var y6=E("$ZodOptional",(e,v)=>{yg.init(e,v),e._zod.optin="optional",e._zod.optout="optional",Pg(e._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,void 0]):void 0}),Pg(e._zod,"pattern",()=>{let b=v.innerType._zod.pattern;return b?new RegExp(`^(${Rn(b.source)})?$`):void 0}),e._zod.parse=(b,n)=>{if(v.innerType._zod.optin==="optional"){let w=b.value,P=v.innerType._zod.run(b,n);if(P instanceof Promise)return P.then((O)=>b9(O,w));return b9(P,w)}if(b.value===void 0)return b;return v.innerType._zod.run(b,n)}}),a9=E("$ZodExactOptional",(e,v)=>{y6.init(e,v),Pg(e._zod,"values",()=>v.innerType._zod.values),Pg(e._zod,"pattern",()=>v.innerType._zod.pattern),e._zod.parse=(b,n)=>{return v.innerType._zod.run(b,n)}}),f9=E("$ZodNullable",(e,v)=>{yg.init(e,v),Pg(e._zod,"optin",()=>v.innerType._zod.optin),Pg(e._zod,"optout",()=>v.innerType._zod.optout),Pg(e._zod,"pattern",()=>{let b=v.innerType._zod.pattern;return b?new RegExp(`^(${Rn(b.source)}|null)$`):void 0}),Pg(e._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,null]):void 0}),e._zod.parse=(b,n)=>{if(b.value===null)return b;return v.innerType._zod.run(b,n)}}),j9=E("$ZodDefault",(e,v)=>{yg.init(e,v),e._zod.optin="optional",Pg(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(b,n)=>{if(n.direction==="backward")return v.innerType._zod.run(b,n);if(b.value===void 0)return b.value=v.defaultValue,b;let w=v.innerType._zod.run(b,n);if(w instanceof Promise)return w.then((P)=>n9(P,v));return n9(w,v)}});function n9(e,v){if(e.value===void 0)e.value=v.defaultValue;return e}var p9=E("$ZodPrefault",(e,v)=>{yg.init(e,v),e._zod.optin="optional",Pg(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(b,n)=>{if(n.direction==="backward")return v.innerType._zod.run(b,n);if(b.value===void 0)b.value=v.defaultValue;return v.innerType._zod.run(b,n)}}),d9=E("$ZodNonOptional",(e,v)=>{yg.init(e,v),Pg(e._zod,"values",()=>{let b=v.innerType._zod.values;return b?new Set([...b].filter((n)=>n!==void 0)):void 0}),e._zod.parse=(b,n)=>{let w=v.innerType._zod.run(b,n);if(w instanceof Promise)return w.then((P)=>u9(P,e));return u9(w,e)}});function u9(e,v){if(!e.issues.length&&e.value===void 0)e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:v});return e}var s9=E("$ZodCatch",(e,v)=>{yg.init(e,v),e._zod.optin="optional",Pg(e._zod,"optout",()=>v.innerType._zod.optout),Pg(e._zod,"values",()=>v.innerType._zod.values),e._zod.parse=(b,n)=>{if(n.direction==="backward")return v.innerType._zod.run(b,n);let w=v.innerType._zod.run(b,n);if(w instanceof Promise)return w.then((P)=>{if(b.value=P.value,P.issues.length)b.value=v.catchValue({...b,error:{issues:P.issues.map((O)=>Dl(O,n,mv()))},input:b.value}),b.issues=[],b.fallback=!0;return b});if(b.value=w.value,w.issues.length)b.value=v.catchValue({...b,error:{issues:w.issues.map((P)=>Dl(P,n,mv()))},input:b.value}),b.issues=[],b.fallback=!0;return b}});var r7=E("$ZodPipe",(e,v)=>{yg.init(e,v),Pg(e._zod,"values",()=>v.in._zod.values),Pg(e._zod,"optin",()=>v.in._zod.optin),Pg(e._zod,"optout",()=>v.out._zod.optout),Pg(e._zod,"propValues",()=>v.in._zod.propValues),e._zod.parse=(b,n)=>{if(n.direction==="backward"){let P=v.out._zod.run(b,n);if(P instanceof Promise)return P.then((O)=>Ht(O,v.in,n));return Ht(P,v.in,n)}let w=v.in._zod.run(b,n);if(w instanceof Promise)return w.then((P)=>Ht(P,v.out,n));return Ht(w,v.out,n)}});function Ht(e,v,b){if(e.issues.length)return e.aborted=!0,e;return v._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},b)}var g7=E("$ZodReadonly",(e,v)=>{yg.init(e,v),Pg(e._zod,"propValues",()=>v.innerType._zod.propValues),Pg(e._zod,"values",()=>v.innerType._zod.values),Pg(e._zod,"optin",()=>v.innerType?._zod?.optin),Pg(e._zod,"optout",()=>v.innerType?._zod?.optout),e._zod.parse=(b,n)=>{if(n.direction==="backward")return v.innerType._zod.run(b,n);let w=v.innerType._zod.run(b,n);if(w instanceof Promise)return w.then(w9);return w9(w)}});function w9(e){return e.value=Object.freeze(e.value),e}var o7=E("$ZodCustom",(e,v)=>{We.init(e,v),yg.init(e,v),e._zod.parse=(b,n)=>{return b},e._zod.check=(b)=>{let n=b.value,w=v.fn(n);if(w instanceof Promise)return w.then((P)=>t9(P,b,n,e));t9(w,b,n,e);return}});function t9(e,v,b,n){if(!e){let w={code:"custom",input:b,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};if(n._zod.def.params)w.params=n._zod.def.params;v.issues.push(ch(w))}}var e7,D_g=Symbol("ZodOutput"),V_g=Symbol("ZodInput");class l7{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...v){let b=v[0];if(this._map.set(e,b),b&&typeof b==="object"&&"id"in b)this._idmap.set(b.id,e);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let v=this._map.get(e);if(v&&typeof v==="object"&&"id"in v)this._idmap.delete(v.id);return this._map.delete(e),this}get(e){let v=e._zod.parent;if(v){let b={...this.get(v)??{}};delete b.id;let n={...b,...this._map.get(e)};return Object.keys(n).length?n:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Ez(){return new l7}(e7=globalThis).__zod_globalRegistry??(e7.__zod_globalRegistry=Ez());var K1=globalThis.__zod_globalRegistry;function v7(e,v){return new e({type:"string",..._r(v)})}function h7(e,v){return new e({type:"string",format:"email",check:"string_format",abort:!1,..._r(v)})}function E6(e,v){return new e({type:"string",format:"guid",check:"string_format",abort:!1,..._r(v)})}function i7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(v)})}function b7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(v)})}function n7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(v)})}function u7(e,v){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(v)})}function w7(e,v){return new e({type:"string",format:"url",check:"string_format",abort:!1,..._r(v)})}function t7(e,v){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(v)})}function P7(e,v){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(v)})}function O7(e,v){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(v)})}function H7(e,v){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(v)})}function A7(e,v){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(v)})}function q7(e,v){return new e({type:"string",format:"xid",check:"string_format",abort:!1,..._r(v)})}function R7(e,v){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(v)})}function M7(e,v){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(v)})}function W7(e,v){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(v)})}function m7(e,v){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(v)})}function G7(e,v){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(v)})}function X7(e,v){return new e({type:"string",format:"base64",check:"string_format",abort:!1,..._r(v)})}function Y7(e,v){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(v)})}function J7(e,v){return new e({type:"string",format:"e164",check:"string_format",abort:!1,..._r(v)})}function Q7(e,v){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(v)})}function z7(e,v){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(v)})}function U7(e,v){return new e({type:"string",format:"date",check:"string_format",..._r(v)})}function K7(e,v){return new e({type:"string",format:"time",check:"string_format",precision:null,..._r(v)})}function $7(e,v){return new e({type:"string",format:"duration",check:"string_format",..._r(v)})}function L7(e){return new e({type:"unknown"})}function I7(e,v){return new e({type:"never",..._r(v)})}function Rt(e,v){return new cW({check:"max_length",..._r(v),maximum:e})}function ah(e,v){return new aW({check:"min_length",..._r(v),minimum:e})}function Mt(e,v){return new fW({check:"length_equals",..._r(v),length:e})}function c6(e,v){return new jW({check:"string_format",format:"regex",..._r(v),pattern:e})}function a6(e){return new pW({check:"string_format",format:"lowercase",..._r(e)})}function f6(e){return new dW({check:"string_format",format:"uppercase",..._r(e)})}function j6(e,v){return new sW({check:"string_format",format:"includes",..._r(v),includes:e})}function p6(e,v){return new r9({check:"string_format",format:"starts_with",..._r(v),prefix:e})}function d6(e,v){return new g9({check:"string_format",format:"ends_with",..._r(v),suffix:e})}function Y0(e){return new o9({check:"overwrite",tx:e})}function s6(e){return Y0((v)=>v.normalize(e))}function rP(){return Y0((e)=>e.trim())}function gP(){return Y0((e)=>e.toLowerCase())}function oP(){return Y0((e)=>e.toUpperCase())}function eP(){return Y0((e)=>N6(e))}function F7(e,v,b){return new e({type:"array",element:v,..._r(b)})}function x7(e,v,b){return new e({type:"custom",check:"custom",fn:v,..._r(b)})}function N7(e,v){let b=cz((n)=>{return n.addIssue=(w)=>{if(typeof w==="string")n.issues.push(ch(w,n.value,b._zod.def));else{let P=w;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=n.value),P.inst??(P.inst=b),P.continue??(P.continue=!b._zod.def.abort),n.issues.push(ch(P))}},e(n.value,n)},v);return b}function cz(e,v){let b=new We({check:"custom",..._r(v)});return b._zod.check=e,b}function lP(e){let v=e?.target??"draft-2020-12";if(v==="draft-4")v="draft-04";if(v==="draft-7")v="draft-07";return{processors:e.processors??{},metadataRegistry:e?.metadata??K1,target:v,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function wo(e,v,b={path:[],schemaPath:[]}){var n;let w=e._zod.def,P=v.seen.get(e);if(P){if(P.count++,b.schemaPath.includes(e))P.cycle=b.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:b.path};v.seen.set(e,O);let H=e._zod.toJSONSchema?.();if(H)O.schema=H;else{let m={...b,schemaPath:[...b.schemaPath,e],path:b.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(v,O.schema,m);else{let X=O.schema,L=v.processors[w.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${w.type}`);L(e,v,X,m)}let q=e._zod.parent;if(q){if(!O.ref)O.ref=q;wo(q,v,m),v.seen.get(q).isParent=!0}}let W=v.metadataRegistry.get(e);if(W)Object.assign(O.schema,W);if(v.io==="input"&&Do(e))delete O.schema.examples,delete O.schema.default;if(v.io==="input"&&"_prefault"in O.schema)(n=O.schema).default??(n.default=O.schema._prefault);return delete O.schema._prefault,v.seen.get(e).schema}function vP(e,v){let b=e.seen.get(v);if(!b)throw Error("Unprocessed schema. This is a bug in Zod.");let n=new Map;for(let O of e.seen.entries()){let H=e.metadataRegistry.get(O[0])?.id;if(H){let W=n.get(H);if(W&&W!==O[0])throw Error(`Duplicate schema id "${H}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(H,O[0])}}let w=(O)=>{let H=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){let q=e.external.registry.get(O[0])?.id,X=e.external.uri??((S)=>S);if(q)return{ref:X(q)};let L=O[1].defId??O[1].schema.id??`schema${e.counter++}`;return O[1].defId=L,{defId:L,ref:`${X("__shared")}#/${H}/${L}`}}if(O[1]===b)return{ref:"#"};let G=`${"#"}/${H}/`,m=O[1].schema.id??`__schema${e.counter++}`;return{defId:m,ref:G+m}},P=(O)=>{if(O[1].schema.$ref)return;let H=O[1],{ref:W,defId:G}=w(O);if(H.def={...H.schema},G)H.defId=G;let m=H.schema;for(let q in m)delete m[q];m.$ref=W};if(e.cycles==="throw")for(let O of e.seen.entries()){let H=O[1];if(H.cycle)throw Error(`Cycle detected: #/${H.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of e.seen.entries()){let H=O[1];if(v===O[0]){P(O);continue}if(e.external){let G=e.external.registry.get(O[0])?.id;if(v!==O[0]&&G){P(O);continue}}if(e.metadataRegistry.get(O[0])?.id){P(O);continue}if(H.cycle){P(O);continue}if(H.count>1){if(e.reused==="ref"){P(O);continue}}}}function hP(e,v){let b=e.seen.get(v);if(!b)throw Error("Unprocessed schema. This is a bug in Zod.");let n=(H)=>{let W=e.seen.get(H);if(W.ref===null)return;let G=W.def??W.schema,m={...G},q=W.ref;if(W.ref=null,q){n(q);let L=e.seen.get(q),S=L.schema;if(S.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"))G.allOf=G.allOf??[],G.allOf.push(S);else Object.assign(G,S);if(Object.assign(G,m),H._zod.parent===q)for(let _ in G){if(_==="$ref"||_==="allOf")continue;if(!(_ in m))delete G[_]}if(S.$ref&&L.def)for(let _ in G){if(_==="$ref"||_==="allOf")continue;if(_ in L.def&&JSON.stringify(G[_])===JSON.stringify(L.def[_]))delete G[_]}}let X=H._zod.parent;if(X&&X!==q){n(X);let L=e.seen.get(X);if(L?.schema.$ref){if(G.$ref=L.schema.$ref,L.def)for(let S in G){if(S==="$ref"||S==="allOf")continue;if(S in L.def&&JSON.stringify(G[S])===JSON.stringify(L.def[S]))delete G[S]}}}e.override({zodSchema:H,jsonSchema:G,path:W.path??[]})};for(let H of[...e.seen.entries()].reverse())n(H[0]);let w={};if(e.target==="draft-2020-12")w.$schema="https://json-schema.org/draft/2020-12/schema";else if(e.target==="draft-07")w.$schema="http://json-schema.org/draft-07/schema#";else if(e.target==="draft-04")w.$schema="http://json-schema.org/draft-04/schema#";else if(e.target==="openapi-3.0");if(e.external?.uri){let H=e.external.registry.get(v)?.id;if(!H)throw Error("Schema is missing an `id` property");w.$id=e.external.uri(H)}Object.assign(w,b.def??b.schema);let P=e.metadataRegistry.get(v)?.id;if(P!==void 0&&w.id===P)delete w.id;let O=e.external?.defs??{};for(let H of e.seen.entries()){let W=H[1];if(W.def&&W.defId){if(W.def.id===W.defId)delete W.def.id;O[W.defId]=W.def}}if(e.external);else if(Object.keys(O).length>0)if(e.target==="draft-2020-12")w.$defs=O;else w.definitions=O;try{let H=JSON.parse(JSON.stringify(w));return Object.defineProperty(H,"~standard",{value:{...v["~standard"],jsonSchema:{input:Yn(v,"input",e.processors),output:Yn(v,"output",e.processors)}},enumerable:!1,writable:!1}),H}catch(H){throw Error("Error converting schema to JSON.")}}function Do(e,v){let b=v??{seen:new Set};if(b.seen.has(e))return!1;b.seen.add(e);let n=e._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return Do(n.element,b);if(n.type==="set")return Do(n.valueType,b);if(n.type==="lazy")return Do(n.getter(),b);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return Do(n.innerType,b);if(n.type==="intersection")return Do(n.left,b)||Do(n.right,b);if(n.type==="record"||n.type==="map")return Do(n.keyType,b)||Do(n.valueType,b);if(n.type==="pipe"){if(e._zod.traits.has("$ZodCodec"))return!0;return Do(n.in,b)||Do(n.out,b)}if(n.type==="object"){for(let w in n.shape)if(Do(n.shape[w],b))return!0;return!1}if(n.type==="union"){for(let w of n.options)if(Do(w,b))return!0;return!1}if(n.type==="tuple"){for(let w of n.items)if(Do(w,b))return!0;if(n.rest&&Do(n.rest,b))return!0;return!1}return!1}var B7=(e,v={})=>(b)=>{let n=lP({...b,processors:v});return wo(e,n),vP(n,e),hP(n,e)},Yn=(e,v,b={})=>(n)=>{let{libraryOptions:w,target:P}=n??{},O=lP({...w??{},target:P,io:v,processors:b});return wo(e,O),vP(O,e),hP(O,e)};var az={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Z7=(e,v,b,n)=>{let w=b;w.type="string";let{minimum:P,maximum:O,format:H,patterns:W,contentEncoding:G}=e._zod.bag;if(typeof P==="number")w.minLength=P;if(typeof O==="number")w.maxLength=O;if(H){if(w.format=az[H]??H,w.format==="")delete w.format;if(H==="time")delete w.format}if(G)w.contentEncoding=G;if(W&&W.size>0){let m=[...W];if(m.length===1)w.pattern=m[0].source;else if(m.length>1)w.allOf=[...m.map((q)=>({...v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"?{type:"string"}:{},pattern:q.source}))]}};var C7=(e,v,b,n)=>{b.not={}};var T7=(e,v,b,n)=>{};var S7=(e,v,b,n)=>{let w=e._zod.def,P=Hn(w.entries);if(P.every((O)=>typeof O==="number"))b.type="number";if(P.every((O)=>typeof O==="string"))b.type="string";b.enum=P},k7=(e,v,b,n)=>{let w=e._zod.def,P=[];for(let O of w.values)if(O===void 0){if(v.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(v.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(b.type=O===null?"null":typeof O,v.target==="draft-04"||v.target==="openapi-3.0")b.enum=[O];else b.const=O}else{if(P.every((O)=>typeof O==="number"))b.type="number";if(P.every((O)=>typeof O==="string"))b.type="string";if(P.every((O)=>typeof O==="boolean"))b.type="boolean";if(P.every((O)=>O===null))b.type="null";b.enum=P}};var D7=(e,v,b,n)=>{if(v.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var V7=(e,v,b,n)=>{if(v.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var _7=(e,v,b,n)=>{let w=b,P=e._zod.def,{minimum:O,maximum:H}=e._zod.bag;if(typeof O==="number")w.minItems=O;if(typeof H==="number")w.maxItems=H;w.type="array",w.items=wo(P.element,v,{...n,path:[...n.path,"items"]})},y7=(e,v,b,n)=>{let w=b,P=e._zod.def;w.type="object",w.properties={};let O=P.shape;for(let G in O)w.properties[G]=wo(O[G],v,{...n,path:[...n.path,"properties",G]});let H=new Set(Object.keys(O)),W=new Set([...H].filter((G)=>{let m=P.shape[G]._zod;if(v.io==="input")return m.optin===void 0;else return m.optout===void 0}));if(W.size>0)w.required=Array.from(W);if(P.catchall?._zod.def.type==="never")w.additionalProperties=!1;else if(!P.catchall){if(v.io==="output")w.additionalProperties=!1}else if(P.catchall)w.additionalProperties=wo(P.catchall,v,{...n,path:[...n.path,"additionalProperties"]})},E7=(e,v,b,n)=>{let w=e._zod.def,P=w.inclusive===!1,O=w.options.map((H,W)=>wo(H,v,{...n,path:[...n.path,P?"oneOf":"anyOf",W]}));if(P)b.oneOf=O;else b.anyOf=O},c7=(e,v,b,n)=>{let w=e._zod.def,P=wo(w.left,v,{...n,path:[...n.path,"allOf",0]}),O=wo(w.right,v,{...n,path:[...n.path,"allOf",1]}),H=(G)=>("allOf"in G)&&Object.keys(G).length===1,W=[...H(P)?P.allOf:[P],...H(O)?O.allOf:[O]];b.allOf=W};var a7=(e,v,b,n)=>{let w=e._zod.def,P=wo(w.innerType,v,n),O=v.seen.get(e);if(v.target==="openapi-3.0")O.ref=w.innerType,b.nullable=!0;else b.anyOf=[P,{type:"null"}]},f7=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);P.ref=w.innerType},j7=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);P.ref=w.innerType,b.default=JSON.parse(JSON.stringify(w.defaultValue))},p7=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);if(P.ref=w.innerType,v.io==="input")b._prefault=JSON.parse(JSON.stringify(w.defaultValue))},d7=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);P.ref=w.innerType;let O;try{O=w.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}b.default=O},s7=(e,v,b,n)=>{let w=e._zod.def,P=w.in._zod.traits.has("$ZodTransform"),O=v.io==="input"?P?w.out:w.in:w.out;wo(O,v,n);let H=v.seen.get(e);H.ref=O},rm=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);P.ref=w.innerType,b.readOnly=!0};var iP=(e,v,b,n)=>{let w=e._zod.def;wo(w.innerType,v,n);let P=v.seen.get(e);P.ref=w.innerType};var hU=E("ZodISODateTime",(e,v)=>{Y9.init(e,v),xg.init(e,v)});function gm(e){return z7(hU,e)}var iU=E("ZodISODate",(e,v)=>{J9.init(e,v),xg.init(e,v)});function om(e){return U7(iU,e)}var bU=E("ZodISOTime",(e,v)=>{Q9.init(e,v),xg.init(e,v)});function em(e){return K7(bU,e)}var nU=E("ZodISODuration",(e,v)=>{z9.init(e,v),xg.init(e,v)});function lm(e){return $7(nU,e)}var tU=(e,v)=>{wt.init(e,v),e.name="ZodError",Object.defineProperties(e,{format:{value:(b)=>wW(e,b)},flatten:{value:(b)=>uW(e,b)},addIssue:{value:(b)=>{e.issues.push(b),e.message=JSON.stringify(e.issues,Eh,2)}},addIssues:{value:(b)=>{e.issues.push(...b),e.message=JSON.stringify(e.issues,Eh,2)}},isEmpty:{get(){return e.issues.length===0}}})};var me=E("ZodError",tU,{Parent:Error});var vm=tt(me),hm=Pt(me),im=mn(me),bm=Gn(me),nm=OW(me),um=HW(me),wm=AW(me),tm=qW(me),Pm=RW(me),Om=MW(me),Hm=WW(me),Am=mW(me);var qm=new WeakMap;function Gt(e,v,b){let n=Object.getPrototypeOf(e),w=qm.get(n);if(!w)w=new Set,qm.set(n,w);if(w.has(v))return;w.add(v);for(let P in b){let O=b[P];Object.defineProperty(n,P,{configurable:!0,enumerable:!1,get(){let H=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H}),H},set(H){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H})}})}}var oo=E("ZodType",(e,v)=>{return yg.init(e,v),Object.assign(e["~standard"],{jsonSchema:{input:Yn(e,"input"),output:Yn(e,"output")}}),e.toJSONSchema=B7(e,{}),e.def=v,e.type=v.type,Object.defineProperty(e,"_def",{value:v}),e.parse=(b,n)=>vm(e,b,n,{callee:e.parse}),e.safeParse=(b,n)=>im(e,b,n),e.parseAsync=async(b,n)=>hm(e,b,n,{callee:e.parseAsync}),e.safeParseAsync=async(b,n)=>bm(e,b,n),e.spa=e.safeParseAsync,e.encode=(b,n)=>nm(e,b,n),e.decode=(b,n)=>um(e,b,n),e.encodeAsync=async(b,n)=>wm(e,b,n),e.decodeAsync=async(b,n)=>tm(e,b,n),e.safeEncode=(b,n)=>Pm(e,b,n),e.safeDecode=(b,n)=>Om(e,b,n),e.safeEncodeAsync=async(b,n)=>Hm(e,b,n),e.safeDecodeAsync=async(b,n)=>Am(e,b,n),Gt(e,"ZodType",{check(...b){let n=this.def;return this.clone(Og.mergeDefs(n,{checks:[...n.checks??[],...b.map((w)=>typeof w==="function"?{_zod:{check:w,def:{check:"custom"},onattach:[]}}:w)]}),{parent:!0})},with(...b){return this.check(...b)},clone(b,n){return ol(this,b,n)},brand(){return this},register(b,n){return b.add(this,n),this},refine(b,n){return this.check(lK(b,n))},superRefine(b,n){return this.check(vK(b,n))},overwrite(b){return this.check(Y0(b))},optional(){return Wm(this)},exactOptional(){return yU(this)},nullable(){return mm(this)},nullish(){return Wm(mm(this))},nonoptional(b){return pU(this,b)},array(){return Yv(this)},or(b){return CU([this,b])},and(b){return SU(this,b)},transform(b){return Gm(this,VU(b))},default(b){return aU(this,b)},prefault(b){return jU(this,b)},catch(b){return sU(this,b)},pipe(b){return Gm(this,b)},readonly(){return oK(this)},describe(b){let n=this.clone();return K1.add(n,{description:b}),n},meta(...b){if(b.length===0)return K1.get(this);let n=this.clone();return K1.add(n,b[0]),n},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(b){return b(this)}}),Object.defineProperty(e,"description",{get(){return K1.get(e)?.description},configurable:!0}),e}),Xm=E("_ZodString",(e,v)=>{qt.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(n,w,P)=>Z7(e,n,w,P);let b=e._zod.bag;e.format=b.format??null,e.minLength=b.minimum??null,e.maxLength=b.maximum??null,Gt(e,"_ZodString",{regex(...n){return this.check(c6(...n))},includes(...n){return this.check(j6(...n))},startsWith(...n){return this.check(p6(...n))},endsWith(...n){return this.check(d6(...n))},min(...n){return this.check(ah(...n))},max(...n){return this.check(Rt(...n))},length(...n){return this.check(Mt(...n))},nonempty(...n){return this.check(ah(1,...n))},lowercase(n){return this.check(a6(n))},uppercase(n){return this.check(f6(n))},trim(){return this.check(rP())},normalize(...n){return this.check(s6(...n))},toLowerCase(){return this.check(gP())},toUpperCase(){return this.check(oP())},slugify(){return this.check(eP())}})}),OU=E("ZodString",(e,v)=>{qt.init(e,v),Xm.init(e,v),e.email=(b)=>e.check(h7(HU,b)),e.url=(b)=>e.check(w7(AU,b)),e.jwt=(b)=>e.check(Q7(LU,b)),e.emoji=(b)=>e.check(t7(qU,b)),e.guid=(b)=>e.check(E6(Rm,b)),e.uuid=(b)=>e.check(i7(mt,b)),e.uuidv4=(b)=>e.check(b7(mt,b)),e.uuidv6=(b)=>e.check(n7(mt,b)),e.uuidv7=(b)=>e.check(u7(mt,b)),e.nanoid=(b)=>e.check(P7(RU,b)),e.guid=(b)=>e.check(E6(Rm,b)),e.cuid=(b)=>e.check(O7(MU,b)),e.cuid2=(b)=>e.check(H7(WU,b)),e.ulid=(b)=>e.check(A7(mU,b)),e.base64=(b)=>e.check(X7(UU,b)),e.base64url=(b)=>e.check(Y7(KU,b)),e.xid=(b)=>e.check(q7(GU,b)),e.ksuid=(b)=>e.check(R7(XU,b)),e.ipv4=(b)=>e.check(M7(YU,b)),e.ipv6=(b)=>e.check(W7(JU,b)),e.cidrv4=(b)=>e.check(m7(QU,b)),e.cidrv6=(b)=>e.check(G7(zU,b)),e.e164=(b)=>e.check(J7($U,b)),e.datetime=(b)=>e.check(gm(b)),e.date=(b)=>e.check(om(b)),e.time=(b)=>e.check(em(b)),e.duration=(b)=>e.check(lm(b))});function Eg(e){return v7(OU,e)}var xg=E("ZodStringFormat",(e,v)=>{Lg.init(e,v),Xm.init(e,v)}),HU=E("ZodEmail",(e,v)=>{H9.init(e,v),xg.init(e,v)});var Rm=E("ZodGUID",(e,v)=>{P9.init(e,v),xg.init(e,v)});var mt=E("ZodUUID",(e,v)=>{O9.init(e,v),xg.init(e,v)});var AU=E("ZodURL",(e,v)=>{A9.init(e,v),xg.init(e,v)});var qU=E("ZodEmoji",(e,v)=>{q9.init(e,v),xg.init(e,v)});var RU=E("ZodNanoID",(e,v)=>{R9.init(e,v),xg.init(e,v)});var MU=E("ZodCUID",(e,v)=>{M9.init(e,v),xg.init(e,v)});var WU=E("ZodCUID2",(e,v)=>{W9.init(e,v),xg.init(e,v)});var mU=E("ZodULID",(e,v)=>{m9.init(e,v),xg.init(e,v)});var GU=E("ZodXID",(e,v)=>{G9.init(e,v),xg.init(e,v)});var XU=E("ZodKSUID",(e,v)=>{X9.init(e,v),xg.init(e,v)});var YU=E("ZodIPv4",(e,v)=>{U9.init(e,v),xg.init(e,v)});var JU=E("ZodIPv6",(e,v)=>{K9.init(e,v),xg.init(e,v)});var QU=E("ZodCIDRv4",(e,v)=>{$9.init(e,v),xg.init(e,v)});var zU=E("ZodCIDRv6",(e,v)=>{L9.init(e,v),xg.init(e,v)});var UU=E("ZodBase64",(e,v)=>{F9.init(e,v),xg.init(e,v)});var KU=E("ZodBase64URL",(e,v)=>{x9.init(e,v),xg.init(e,v)});var $U=E("ZodE164",(e,v)=>{N9.init(e,v),xg.init(e,v)});var LU=E("ZodJWT",(e,v)=>{B9.init(e,v),xg.init(e,v)});var IU=E("ZodUnknown",(e,v)=>{Z9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>T7(e,b,n,w)});function Mm(){return L7(IU)}var FU=E("ZodNever",(e,v)=>{C9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>C7(e,b,n,w)});function xU(e){return I7(FU,e)}var NU=E("ZodArray",(e,v)=>{T9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>_7(e,b,n,w),e.element=v.element,Gt(e,"ZodArray",{min(b,n){return this.check(ah(b,n))},nonempty(b){return this.check(ah(1,b))},max(b,n){return this.check(Rt(b,n))},length(b,n){return this.check(Mt(b,n))},unwrap(){return this.element}})});function Yv(e,v){return F7(NU,e,v)}var BU=E("ZodObject",(e,v)=>{D9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>y7(e,b,n,w),Og.defineLazy(e,"shape",()=>{return v.shape}),Gt(e,"ZodObject",{keyof(){return Jn(Object.keys(this._zod.def.shape))},catchall(b){return this.clone({...this._zod.def,catchall:b})},passthrough(){return this.clone({...this._zod.def,catchall:Mm()})},loose(){return this.clone({...this._zod.def,catchall:Mm()})},strict(){return this.clone({...this._zod.def,catchall:xU()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(b){return Og.extend(this,b)},safeExtend(b){return Og.safeExtend(this,b)},merge(b){return Og.merge(this,b)},pick(b){return Og.pick(this,b)},omit(b){return Og.omit(this,b)},partial(...b){return Og.partial(Ym,this,b[0])},required(...b){return Og.required(Jm,this,b[0])}})});function $1(e,v){let b={type:"object",shape:e??{},...Og.normalizeParams(v)};return new BU(b)}var ZU=E("ZodUnion",(e,v)=>{V9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>E7(e,b,n,w),e.options=v.options});function CU(e,v){return new ZU({type:"union",options:e,...Og.normalizeParams(v)})}var TU=E("ZodIntersection",(e,v)=>{_9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>c7(e,b,n,w)});function SU(e,v){return new TU({type:"intersection",left:e,right:v})}var bP=E("ZodEnum",(e,v)=>{y9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(n,w,P)=>S7(e,n,w,P),e.enum=v.entries,e.options=Object.values(v.entries);let b=new Set(Object.keys(v.entries));e.extract=(n,w)=>{let P={};for(let O of n)if(b.has(O))P[O]=v.entries[O];else throw Error(`Key ${O} not found in enum`);return new bP({...v,checks:[],...Og.normalizeParams(w),entries:P})},e.exclude=(n,w)=>{let P={...v.entries};for(let O of n)if(b.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new bP({...v,checks:[],...Og.normalizeParams(w),entries:P})}});function Jn(e,v){let b=Array.isArray(e)?Object.fromEntries(e.map((n)=>[n,n])):e;return new bP({type:"enum",entries:b,...Og.normalizeParams(v)})}var kU=E("ZodLiteral",(e,v)=>{E9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>k7(e,b,n,w),e.values=new Set(v.values),Object.defineProperty(e,"value",{get(){if(v.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return v.values[0]}})});function nP(e,v){return new kU({type:"literal",values:Array.isArray(e)?e:[e],...Og.normalizeParams(v)})}var DU=E("ZodTransform",(e,v)=>{c9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>V7(e,b,n,w),e._zod.parse=(b,n)=>{if(n.direction==="backward")throw new Pn(e.constructor.name);b.addIssue=(P)=>{if(typeof P==="string")b.issues.push(Og.issue(P,b.value,v));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=b.value),O.inst??(O.inst=e),b.issues.push(Og.issue(O))}};let w=v.transform(b.value,b);if(w instanceof Promise)return w.then((P)=>{return b.value=P,b.fallback=!0,b});return b.value=w,b.fallback=!0,b}});function VU(e){return new DU({type:"transform",transform:e})}var Ym=E("ZodOptional",(e,v)=>{y6.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>iP(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function Wm(e){return new Ym({type:"optional",innerType:e})}var _U=E("ZodExactOptional",(e,v)=>{a9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>iP(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function yU(e){return new _U({type:"optional",innerType:e})}var EU=E("ZodNullable",(e,v)=>{f9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>a7(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function mm(e){return new EU({type:"nullable",innerType:e})}var cU=E("ZodDefault",(e,v)=>{j9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>j7(e,b,n,w),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function aU(e,v){return new cU({type:"default",innerType:e,get defaultValue(){return typeof v==="function"?v():Og.shallowClone(v)}})}var fU=E("ZodPrefault",(e,v)=>{p9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>p7(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function jU(e,v){return new fU({type:"prefault",innerType:e,get defaultValue(){return typeof v==="function"?v():Og.shallowClone(v)}})}var Jm=E("ZodNonOptional",(e,v)=>{d9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>f7(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function pU(e,v){return new Jm({type:"nonoptional",innerType:e,...Og.normalizeParams(v)})}var dU=E("ZodCatch",(e,v)=>{s9.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>d7(e,b,n,w),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function sU(e,v){return new dU({type:"catch",innerType:e,catchValue:typeof v==="function"?v:()=>v})}var rK=E("ZodPipe",(e,v)=>{r7.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>s7(e,b,n,w),e.in=v.in,e.out=v.out});function Gm(e,v){return new rK({type:"pipe",in:e,out:v})}var gK=E("ZodReadonly",(e,v)=>{g7.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>rm(e,b,n,w),e.unwrap=()=>e._zod.def.innerType});function oK(e){return new gK({type:"readonly",innerType:e})}var eK=E("ZodCustom",(e,v)=>{o7.init(e,v),oo.init(e,v),e._zod.processJSONSchema=(b,n,w)=>D7(e,b,n,w)});function lK(e,v={}){return x7(eK,e,v)}function vK(e,v){return N7(e,v)}var Qm=$1({type:Jn(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),zm=$1({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:Yv(Eg()).optional()}),hK=$1({name:Eg().min(1).max(200),code:Eg(),type:Jn(["trigger","library"]),triggers:Yv(Eg()).optional(),bindings:Yv(Qm).optional(),folder:Eg().optional(),metadata:zm.optional()}),Um=$1({format:nP("lumiscript-pack-v1"),exportedAt:Eg(),scripts:Yv(hK).min(1).max(100)}),iK=$1({name:Eg().min(1).max(200),file:Eg().min(1),type:Jn(["trigger","library"]),triggers:Yv(Eg()).optional(),bindings:Yv(Qm).optional(),folder:Eg().optional(),metadata:zm.optional()}),EEg=$1({format:nP("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:Yv(iK).min(1).max(100)});var Km=1048576;async function $m(e){let v=new Uint8Array(await e.arrayBuffer()),b;try{b=fM(v)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let n=b["pack.json"];if(!n)throw Error("Invalid script pack: missing pack.json");if(n.byteLength>Km)throw Error(`Pack exceeds the ${Km/1024/1024} MB decompressed size limit`);let w=I6(n),P;try{P=JSON.parse(w)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return Um.parse(P).scripts}var hg=tr(rg(),1);function bK(e){let b="";for(let n=0;n<e.length;n+=32768)b+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(b)}function nK(e){let v=new Map;for(let w of e){let P=w.folder??"";if(!v.has(P))v.set(P,[]);v.get(P).push(w)}let b=new Map;if(v.has(""))b.set("",v.get(""));let n=[...v.keys()].filter((w)=>w!=="").sort();for(let w of n)b.set(w,v.get(w));return b}var Xt=({scripts:e,selectedId:v,execInfo:b,onSelect:n,onEdit:w,sendToBackend:P})=>{let[O,H]=Qn.useState("trigger"),[W,G]=Qn.useState(new Set),m=Qn.useRef(null),q=e.filter((a)=>a.type===O),X=nK(q),L=X.size>1||X.size===1&&!X.has(""),S=(a)=>{G((p)=>{let er=new Set(p);if(er.has(a))er.delete(a);else er.add(a);return er})},T=()=>{let a=O==="library"?"Library name:":"Script name:",p=window.prompt(a);if(!p?.trim())return;P({type:"create_script",name:p.trim(),scriptType:O})},_=(a)=>{if(q.length===0)return;if(a.shiftKey){let er=F6(q);P({type:"save_pack_to_disk",bytesB64:bK(er),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;jM(q,p.trim())},rr=()=>{m.current?.click()},wr=async(a)=>{let p=a.target.files?.[0];if(!p)return;a.target.value="";try{let er=await $m(p),N=(Z)=>Z==="library"?"[L]":"[T]",y=er.map((Z)=>`  ${N(Z.type)} ${Z.name}`).join(`
`);if(!window.confirm(`Import ${er.length} script${er.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:er})}catch(er){window.alert(`Import failed: ${er instanceof Error?er.message:String(er)}`)}},lr=(a)=>{let p=b[a.id];return hg.jsxDEV(xM,{script:a,selected:a.id===v,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>n(a.id),onEdit:()=>w(a.id),sendToBackend:P},a.id,!1,void 0,this)};return hg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[hg.jsxDEV("div",{className:"ls-list-header",children:[hg.jsxDEV("div",{className:"ls-list-type-tabs",children:[hg.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>H("trigger"),title:"Scripts",children:hg.jsxDEV(Mo,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>H("library"),title:"Libraries",children:hg.jsxDEV(G1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-actions",children:[hg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:hg.jsxDEV(hn,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:q.length===0,children:hg.jsxDEV(X1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:T,title:"New script",children:hg.jsxDEV(db,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("input",{ref:m,type:"file",accept:".zip",style:{display:"none"},onChange:wr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-body",children:q.length===0?hg.jsxDEV("div",{className:"ls-list-empty",children:[hg.jsxDEV(Bl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),hg.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),hg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...X.entries()].map(([a,p])=>{let er=W.has(a);return a===""?hg.jsxDEV("div",{children:p.map(lr)},"__unfiled",!1,void 0,this):hg.jsxDEV("div",{className:"ls-folder-group",children:[hg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>S(a),children:[er?hg.jsxDEV(Av,{size:11},void 0,!1,void 0,this):hg.jsxDEV(Wo,{size:11},void 0,!1,void 0,this),hg.jsxDEV(Y1,{size:11},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(N)=>{N.stopPropagation();let y=window.prompt("Rename folder:",a);if(y===null||y.trim()===""||y.trim()===a)return;for(let f of p)P({type:"update_script",id:f.id,patch:{folder:y.trim()}})},children:hg.jsxDEV(se,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!er&&p.map(lr)]},`folder-${a}`,!0,void 0,this)}):q.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ln=tr(vg(),1),H3=tr(Ch(),1);var Cg=tr(vg(),1);function Lm(e,v){(v==null||v>e.length)&&(v=e.length);for(var b=0,n=Array(v);b<v;b++)n[b]=e[b];return n}function uK(e){if(Array.isArray(e))return e}function wK(e,v,b){return(v=AK(v))in e?Object.defineProperty(e,v,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[v]=b,e}function tK(e,v){var b=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(b!=null){var n,w,P,O,H=[],W=!0,G=!1;try{if(P=(b=b.call(e)).next,v===0);else for(;!(W=(n=P.call(b)).done)&&(H.push(n.value),H.length!==v);W=!0);}catch(m){G=!0,w=m}finally{try{if(!W&&b.return!=null&&(O=b.return(),Object(O)!==O))return}finally{if(G)throw w}}return H}}function PK(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Im(e,v){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);v&&(n=n.filter(function(w){return Object.getOwnPropertyDescriptor(e,w).enumerable})),b.push.apply(b,n)}return b}function uP(e){for(var v=1;v<arguments.length;v++){var b=arguments[v]!=null?arguments[v]:{};v%2?Im(Object(b),!0).forEach(function(n){wK(e,n,b[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):Im(Object(b)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(b,n))})}return e}function Fm(e,v){if(e==null)return{};var b,n,w=OK(e,v);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(e);for(n=0;n<P.length;n++)b=P[n],v.indexOf(b)===-1&&{}.propertyIsEnumerable.call(e,b)&&(w[b]=e[b])}return w}function OK(e,v){if(e==null)return{};var b={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(v.indexOf(n)!==-1)continue;b[n]=e[n]}return b}function xm(e,v){return uK(e)||tK(e,v)||qK(e,v)||PK()}function HK(e,v){if(typeof e!="object"||!e)return e;var b=e[Symbol.toPrimitive];if(b!==void 0){var n=b.call(e,v);if(typeof n!="object")return n;throw TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(e)}function AK(e){var v=HK(e,"string");return typeof v=="symbol"?v:v+""}function qK(e,v){if(e){if(typeof e=="string")return Lm(e,v);var b={}.toString.call(e).slice(8,-1);return b==="Object"&&e.constructor&&(b=e.constructor.name),b==="Map"||b==="Set"?Array.from(e):b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?Lm(e,v):void 0}}function RK(e,v,b){if(v in e)Object.defineProperty(e,v,{value:b,enumerable:!0,configurable:!0,writable:!0});else e[v]=b;return e}function Nm(e,v){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(v)n=n.filter(function(w){return Object.getOwnPropertyDescriptor(e,w).enumerable});b.push.apply(b,n)}return b}function Bm(e){for(var v=1;v<arguments.length;v++){var b=arguments[v]!=null?arguments[v]:{};if(v%2)Nm(Object(b),!0).forEach(function(n){RK(e,n,b[n])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(b));else Nm(Object(b)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(b,n))})}return e}function MK(){for(var e=arguments.length,v=Array(e),b=0;b<e;b++)v[b]=arguments[b];return function(n){return v.reduceRight(function(w,P){return P(w)},n)}}function zn(e){return function v(){var b=this;for(var n=arguments.length,w=Array(n),P=0;P<n;P++)w[P]=arguments[P];return w.length>=e.length?e.apply(this,w):function(){for(var O=arguments.length,H=Array(O),W=0;W<O;W++)H[W]=arguments[W];return v.apply(b,[].concat(w,H))}}}function Jt(e){return{}.toString.call(e).includes("Object")}function WK(e){return!Object.keys(e).length}function Un(e){return typeof e==="function"}function mK(e,v){return Object.prototype.hasOwnProperty.call(e,v)}function GK(e,v){if(!Jt(v))J0("changeType");if(Object.keys(v).some(function(b){return!mK(e,b)}))J0("changeField");return v}function XK(e){if(!Un(e))J0("selectorType")}function YK(e){if(!(Un(e)||Jt(e)))J0("handlerType");if(Jt(e)&&Object.values(e).some(function(v){return!Un(v)}))J0("handlersType")}function JK(e){if(!e)J0("initialIsRequired");if(!Jt(e))J0("initialType");if(WK(e))J0("initialContent")}function QK(e,v){throw Error(e[v]||e.default)}var zK={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},J0=zn(QK)(zK),Yt={changes:GK,selector:XK,handler:YK,initial:JK};function UK(e){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Yt.initial(e),Yt.handler(v);var b={current:e},n=zn(LK)(b,v),w=zn($K)(b),P=zn(Yt.changes)(e),O=zn(KK)(b);function H(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return Yt.selector(G),G(b.current)}function W(G){MK(n,w,P,O)(G)}return[H,W]}function KK(e,v){return Un(v)?v(e.current):v}function $K(e,v){return e.current=Bm(Bm({},e.current),v),v}function LK(e,v,b){return Un(v)?v(e.current):Object.keys(b).forEach(function(n){var w;return(w=v[n])===null||w===void 0?void 0:w.call(v,e.current[n])}),b}var IK={create:UK},Zm=IK;var Cm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Tm(e){return function v(){var b=this;for(var n=arguments.length,w=Array(n),P=0;P<n;P++)w[P]=arguments[P];return w.length>=e.length?e.apply(this,w):function(){for(var O=arguments.length,H=Array(O),W=0;W<O;W++)H[W]=arguments[W];return v.apply(b,[].concat(w,H))}}}function Sm(e){return{}.toString.call(e).includes("Object")}function FK(e){if(!e)km("configIsRequired");if(!Sm(e))km("configType");if(e.urls)return xK(),{paths:{vs:e.urls.monacoBase}};return e}function xK(){console.warn(Dm.deprecation)}function NK(e,v){throw Error(e[v]||e.default)}var Dm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},km=Tm(NK)(Dm),Vm={config:FK};var _m=function(){for(var v=arguments.length,b=Array(v),n=0;n<v;n++)b[n]=arguments[n];return function(w){return b.reduceRight(function(P,O){return O(P)},w)}};function wP(e,v){return Object.keys(v).forEach(function(b){if(v[b]instanceof Object){if(e[b])Object.assign(v[b],wP(e[b],v[b]))}}),uP(uP({},e),v)}var BK={type:"cancelation",msg:"operation is manually canceled"};function Qt(e){var v=!1,b=new Promise(function(n,w){e.then(function(P){return v?w(BK):n(P)}),e.catch(w)});return b.cancel=function(){return v=!0},b}var ZK=["monaco"],CK=Zm.create({config:Cm,isInitialized:!1,resolve:null,reject:null,monaco:null}),ym=xm(CK,2),Kn=ym[0],zt=ym[1];function TK(e){var v=Vm.config(e),b=v.monaco,n=Fm(v,ZK);zt(function(w){return{config:wP(w.config,n),monaco:b}})}function SK(){var e=Kn(function(v){var{monaco:b,isInitialized:n,resolve:w}=v;return{monaco:b,isInitialized:n,resolve:w}});if(!e.isInitialized){if(zt({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Qt(tP);if(window.monaco&&window.monaco.editor)return Em(window.monaco),e.resolve(window.monaco),Qt(tP);_m(kK,VK)(_K)}return Qt(tP)}function kK(e){return document.body.appendChild(e)}function DK(e){var v=document.createElement("script");return e&&(v.src=e),v}function VK(e){var v=Kn(function(n){var{config:w,reject:P}=n;return{config:w,reject:P}}),b=DK("".concat(v.config.paths.vs,"/loader.js"));return b.onload=function(){return e()},b.onerror=v.reject,b}function _K(){var e=Kn(function(b){var{config:n,resolve:w,reject:P}=b;return{config:n,resolve:w,reject:P}}),v=window.require;v.config(e.config),v(["vs/editor/editor.main"],function(b){var n=b.m||b;Em(n),e.resolve(n)},function(b){e.reject(b)})}function Em(e){if(!Kn().monaco)zt({monaco:e})}function yK(){return Kn(function(e){var v=e.monaco;return v})}var tP=new Promise(function(e,v){return zt({resolve:e,reject:v})}),L1={config:TK,init:SK,__getMonacoInstance:yK};var cm=tr(vg(),1),to=tr(vg(),1);var am=tr(vg(),1),Kt=tr(vg(),1),fm=tr(vg(),1),pm=tr(vg(),1),$t=tr(vg(),1),h$=tr(vg(),1);var r3=tr(vg(),1),kg=tr(vg(),1);var Lt=tr(vg(),1),EK={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},PP=EK,cK={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},aK=cK;function fK({children:e}){return fm.default.createElement("div",{style:aK.container},e)}var jK=fK,pK=jK;function dK({width:e,height:v,isEditorReady:b,loading:n,_ref:w,className:P,wrapperProps:O}){return Kt.default.createElement("section",{style:{...PP.wrapper,width:e,height:v},...O},!b&&Kt.default.createElement(pK,null,n),Kt.default.createElement("div",{ref:w,style:{...PP.fullWidth,...!b&&PP.hide},className:P}))}var sK=dK,jm=am.memo(sK);function r$(e){pm.useEffect(e,[])}var dm=r$;function g$(e,v,b=!0){let n=$t.useRef(!0);$t.useEffect(n.current||!b?()=>{n.current=!1}:e,v)}var Ge=g$;function $n(){}function fh(e,v,b,n){return o$(e,n)||e$(e,v,b,n)}function o$(e,v){return e.editor.getModel(sm(e,v))}function e$(e,v,b,n){return e.editor.createModel(v,b,n?sm(e,n):void 0)}function sm(e,v){return e.Uri.parse(v)}function l$({original:e,modified:v,language:b,originalLanguage:n,modifiedLanguage:w,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:H=!1,keepCurrentModifiedModel:W=!1,theme:G="light",loading:m="Loading...",options:q={},height:X="100%",width:L="100%",className:S,wrapperProps:T={},beforeMount:_=$n,onMount:rr=$n}){let[wr,lr]=to.useState(!1),[a,p]=to.useState(!0),er=to.useRef(null),N=to.useRef(null),y=to.useRef(null),f=to.useRef(rr),Z=to.useRef(_),Mr=to.useRef(!1);dm(()=>{let k=L1.init();return k.then((s)=>(N.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>er.current?Br():k.cancel()}),Ge(()=>{if(er.current&&N.current){let k=er.current.getOriginalEditor(),s=fh(N.current,e||"",n||b||"text",P||"");s!==k.getModel()&&k.setModel(s)}},[P],wr),Ge(()=>{if(er.current&&N.current){let k=er.current.getModifiedEditor(),s=fh(N.current,v||"",w||b||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],wr),Ge(()=>{let k=er.current.getModifiedEditor();k.getOption(N.current.editor.EditorOption.readOnly)?k.setValue(v||""):v!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:v||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[v],wr),Ge(()=>{er.current?.getModel()?.original.setValue(e||"")},[e],wr),Ge(()=>{let{original:k,modified:s}=er.current.getModel();N.current.editor.setModelLanguage(k,n||b||"text"),N.current.editor.setModelLanguage(s,w||b||"text")},[b,n,w],wr),Ge(()=>{N.current?.editor.setTheme(G)},[G],wr),Ge(()=>{er.current?.updateOptions(q)},[q],wr);let Ar=to.useCallback(()=>{if(!N.current)return;Z.current(N.current);let k=fh(N.current,e||"",n||b||"text",P||""),s=fh(N.current,v||"",w||b||"text",O||"");er.current?.setModel({original:k,modified:s})},[b,v,w,e,n,P,O]),mr=to.useCallback(()=>{!Mr.current&&y.current&&(er.current=N.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...q}),Ar(),N.current?.editor.setTheme(G),lr(!0),Mr.current=!0)},[q,G,Ar]);to.useEffect(()=>{wr&&f.current(er.current,N.current)},[wr]),to.useEffect(()=>{!a&&!wr&&mr()},[a,wr,mr]);function Br(){let k=er.current?.getModel();H||k?.original?.dispose(),W||k?.modified?.dispose(),er.current?.dispose()}return to.default.createElement(jm,{width:L,height:X,isEditorReady:wr,loading:m,_ref:y,className:S,wrapperProps:T})}var v$=l$,zcg=cm.memo(v$);function i$(e){let v=Lt.useRef();return Lt.useEffect(()=>{v.current=e},[e]),v.current}var b$=i$,Ut=new Map;function n$({defaultValue:e,defaultLanguage:v,defaultPath:b,value:n,language:w,path:P,theme:O="light",line:H,loading:W="Loading...",options:G={},overrideServices:m={},saveViewState:q=!0,keepCurrentModel:X=!1,width:L="100%",height:S="100%",className:T,wrapperProps:_={},beforeMount:rr=$n,onMount:wr=$n,onChange:lr,onValidate:a=$n}){let[p,er]=kg.useState(!1),[N,y]=kg.useState(!0),f=kg.useRef(null),Z=kg.useRef(null),Mr=kg.useRef(null),Ar=kg.useRef(wr),mr=kg.useRef(rr),Br=kg.useRef(),k=kg.useRef(n),s=b$(P),vr=kg.useRef(!1),Qr=kg.useRef(!1);dm(()=>{let F=L1.init();return F.then((or)=>(f.current=or)&&y(!1)).catch((or)=>or?.type!=="cancelation"&&console.error("Monaco initialization: error:",or)),()=>Z.current?V():F.cancel()}),Ge(()=>{let F=fh(f.current,e||n||"",v||w||"",P||b||"");F!==Z.current?.getModel()&&(q&&Ut.set(s,Z.current?.saveViewState()),Z.current?.setModel(F),q&&Z.current?.restoreViewState(Ut.get(P)))},[P],p),Ge(()=>{Z.current?.updateOptions(G)},[G],p),Ge(()=>{!Z.current||n===void 0||(Z.current.getOption(f.current.editor.EditorOption.readOnly)?Z.current.setValue(n):n!==Z.current.getValue()&&(Qr.current=!0,Z.current.executeEdits("",[{range:Z.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),Z.current.pushUndoStop(),Qr.current=!1))},[n],p),Ge(()=>{let F=Z.current?.getModel();F&&w&&f.current?.editor.setModelLanguage(F,w)},[w],p),Ge(()=>{H!==void 0&&Z.current?.revealLine(H)},[H],p),Ge(()=>{f.current?.editor.setTheme(O)},[O],p);let Gr=kg.useCallback(()=>{if(!(!Mr.current||!f.current)&&!vr.current){mr.current(f.current);let F=P||b,or=fh(f.current,n||e||"",v||w||"",F||"");Z.current=f.current?.editor.create(Mr.current,{model:or,automaticLayout:!0,...G},m),q&&Z.current.restoreViewState(Ut.get(F)),f.current.editor.setTheme(O),H!==void 0&&Z.current.revealLine(H),er(!0),vr.current=!0}},[e,v,b,n,w,P,G,m,q,O,H]);kg.useEffect(()=>{p&&Ar.current(Z.current,f.current)},[p]),kg.useEffect(()=>{!N&&!p&&Gr()},[N,p,Gr]),k.current=n,kg.useEffect(()=>{p&&lr&&(Br.current?.dispose(),Br.current=Z.current?.onDidChangeModelContent((F)=>{Qr.current||lr(Z.current.getValue(),F)}))},[p,lr]),kg.useEffect(()=>{if(p){let F=f.current.editor.onDidChangeMarkers((or)=>{let Or=Z.current.getModel()?.uri;if(Or&&or.find((qr)=>qr.path===Or.path)){let qr=f.current.editor.getModelMarkers({resource:Or});a?.(qr)}});return()=>{F?.dispose()}}return()=>{}},[p,a]);function V(){Br.current?.dispose(),X?q&&Ut.set(P,Z.current.saveViewState()):Z.current.getModel()?.dispose(),Z.current.dispose()}return kg.default.createElement(jm,{width:L,height:S,isEditorReady:p,loading:W,_ref:Mr,className:T,wrapperProps:_})}var u$=n$,w$=r3.memo(u$),g3=w$;var jh=tr(vg(),1);var Po=tr(rg(),1),t$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},o3=({entries:e,isRunning:v,onClear:b})=>{let[n,w]=jh.useState(!1),P=jh.useRef(null);jh.useEffect(()=>{if(!n&&P.current)P.current.scrollTop=P.current.scrollHeight},[e,n]);let O=()=>{let H=e.filter((W)=>W.type!=="separator").map((W)=>`[${W.timestamp}] ${W.type.toUpperCase()}: ${W.message}`).join(`
`);navigator.clipboard.writeText(H).catch(()=>{})};return Po.jsxDEV("div",{className:`ls-console${n?" ls-collapsed":""}`,children:[Po.jsxDEV("div",{className:"ls-console-header",onClick:()=>w((H)=>!H),children:[Po.jsxDEV(Cl,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-console-title",children:["Console",v?" — running…":e.length>0?` (${e.length})`:""]},void 0,!0,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),O()},title:"Copy output",disabled:e.length===0,children:Po.jsxDEV(pe,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),b()},title:"Clear console",disabled:e.length===0,children:Po.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),n?Po.jsxDEV(Wo,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Po.jsxDEV(Re,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!n&&Po.jsxDEV("div",{className:"ls-console-output",ref:P,children:e.length===0?Po.jsxDEV("div",{className:"ls-console-empty",children:v?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):e.map((H,W)=>H.type==="separator"?Po.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},W,!1,void 0,this):Po.jsxDEV("div",{className:`ls-entry ${t$[H.type]??"ls-log"}`,children:[Po.jsxDEV("span",{className:"ls-entry-time",children:H.timestamp},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-type",children:H.type.toUpperCase()},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-msg",children:H.message},void 0,!1,void 0,this)]},W,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=tr(rg(),1),e3=({bindings:e,activeContext:v,onAdd:b,onRemove:n})=>{let w=()=>{let{characterId:O,characterName:H}=v;if(!O)return;if(e.some((W)=>W.type==="character"&&W.characterId===O))return;b({type:"character",characterId:O,displayName:H??O})},P=()=>{let{chatId:O,characterName:H}=v;if(!O)return;if(e.some((G)=>G.type==="chat"&&G.chatId===O))return;let W=H?`${H} — ${O.slice(0,8)}`:O.slice(0,8);b({type:"chat",chatId:O,displayName:W})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(Eb,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),e.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):e.map((O,H)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?Vo.jsxDEV(Vh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(kh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>n(H),title:"Remove binding",children:Vo.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:w,disabled:!v.characterId,title:v.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(Vh,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!v.chatId,title:v.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(kh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var l3=tr(vg(),1);var so=tr(rg(),1),v3=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"},{name:"REGEX_SCRIPT_CHANGED",description:"A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+."},{name:"REGEX_SCRIPT_DELETED",description:"A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+."}]}],Ccg=v3.flatMap((e)=>e.events.map((v)=>v.name)),h3=({scriptId:e,triggers:v,sendToBackend:b})=>{let[n,w]=l3.useState(!0),P=new Set(v),O=(H)=>{let W=P.has(H)?v.filter((G)=>G!==H):[...v,H];b({type:"update_script",id:e,patch:{triggers:W}})};return so.jsxDEV("div",{className:`ls-triggers${n?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>w((H)=>!H),children:[so.jsxDEV(Rv,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:n?so.jsxDEV(Wo,{size:12},void 0,!1,void 0,this):so.jsxDEV(Re,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!n&&so.jsxDEV("div",{className:"ls-triggers-body",children:v3.map((H)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:H.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:H.events.map((W)=>so.jsxDEV("button",{className:`ls-trigger-chip${P.has(W.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(W.name),title:W.description,children:W.name},W.name,!1,void 0,this))},void 0,!1,void 0,this)]},H.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var i3=`
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
`;var w3=tr(vg(),1);function b3(e){return e.split("`").map((b,n)=>{if(n%2===1)return b;return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function P$(e){return e.split("`").map((n,w)=>{if(w%2===1)return n;return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Q0(e,v){let b=`| ${e.join(" | ")} |`,n=`| ${e.map(()=>"---").join(" | ")} |`,w=v.map((P)=>`| ${P.map(P$).join(" | ")} |`);return[b,n,...w].join(`
`)}function O$(e){return e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field}function H$(e){if(e==="silent")return"*silent*";if(e==="boolean")return'`"true" / "false"`';return"`string`"}function A$(e){return e.aliases==="—"?"—":`\`${e.aliases}\``}function q$(e){let v=e.perms.length===0&&!e.note?"*none*":e.perms.map((b)=>`\`${b}\``).join(", ");return e.note?`${v}${e.perms.length?" ":""}${e.note}`:v}function R$(){return`## Lumiverse Events

${Q0(["Event","Group","Payload shape"],OP.map((v)=>[`\`${v.name}\``,v.group,`\`${v.payload}\``]))}`}function M$(){return`## Permission Matrix

${HP.map((v)=>{let b=Q0(["Method","Required permissions"],v.rows.map((n)=>[`\`${n.method}\``,q$(n)]));return`### ${v.group}

${b}`}).join(`

`)}`}function W$(){let e=Q0(["Event","Payload fields","Emitted by"],AP.map((b)=>[`\`${b.name}\``,`\`${b.payload}\``,b.emittedBy])),v="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${e}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function m$(){let e=qP.map((b)=>{let n=Q0(["Macro","Aliases","Returns","Description"],b.rows.map((P)=>[`\`${P.macro}\``,A$(P),H$(P.returns),P.desc])),w=[`### ${b.label}`];if(b.description)w.push(`*${b.description}*`);return w.push(n),w.join(`

`)}),v='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${e.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function G$(){return`## Key Types

${RP.map((e)=>n3(e)).join(`

`)}`}function n3(e,v="###"){let b=b3(e.name),n=e.note?`*${b3(e.note)}*

`:"",w=Q0(["Field","Type","Description"],e.fields.map((P)=>[`\`${O$(P)}\``,`\`${P.type}\``,P.desc]));return`${v} ${b}

${n}${w}`}function X$(){return`## API Functions

${MP.map((v)=>{let b=Q0(["Method","Arguments","Description"],v.rows.map((n)=>[`\`${n.name}\``,n.args,n.desc]));return`### ${v.group}

${b}`}).join(`

`)}`}function Y$(){let v=Q0(["Method","Arguments","Description"],WP.map((w)=>[`\`${w.name}\``,w.args,w.desc])),b=Q0(["Method","Arguments","Description"],mP.map((w)=>[`\`${w.name}\``,w.args,w.desc])),n=GP.map((w)=>n3(w,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",v,"","### ls:council-prompt","",b,"","### Built-in types","",n].join(`
`)}function J$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function Q$(){let v=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,b=[R$(),M$(),W$(),m$(),G$(),X$(),Y$(),J$()];return`${v}

---

${b.join(`

---

`)}
`}function u3(){let e=Q$(),b=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,n=new Blob([e],{type:"text/markdown;charset=utf-8"}),w=URL.createObjectURL(n),P=document.createElement("a");P.href=w,P.download=b,P.click(),URL.revokeObjectURL(w)}var z=tr(rg(),1),z0=({icon:e,title:v,defaultOpen:b=!1,children:n})=>{let[w,P]=w3.useState(b);return z.jsxDEV("div",{className:"ls-ref-section",children:[z.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[z.jsxDEV("span",{className:"ls-ref-section-title",children:[e,v]},void 0,!0,void 0,this),w?z.jsxDEV(Wo,{size:12},void 0,!1,void 0,this):z.jsxDEV(Av,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w&&z.jsxDEV("div",{className:"ls-ref-section-body",children:n},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Hg=({children:e})=>z.jsxDEV("code",{className:"ls-ref-code",children:e},void 0,!1,void 0,this),z$=({children:e})=>z.jsxDEV("span",{className:"ls-ref-perm",children:e},void 0,!1,void 0,this),U$=()=>z.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),K$=()=>z.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),ph=({label:e,cols:v})=>z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:v,className:"ls-ref-group-header",children:e},void 0,!1,void 0,this)},void 0,!1,void 0,this),OP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Settings",name:"REGEX_SCRIPT_CHANGED",payload:"{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission"},{group:"Settings",name:"REGEX_SCRIPT_DELETED",payload:"{ id }  // v0.27.0+ — requires regex_scripts permission"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],$$=()=>{let e="";return z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:OP.map((v)=>{let b=v.group!==e?v.group:"";return e=v.group,z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:b},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},HP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.* (CRUD + getCapturedActive)",perms:["world_books"]},{method:"api.worldInfo.registerInterceptor / listInterceptors",perms:["generation"]},{method:"api.personas.*",perms:["personas"]},{method:"api.regexScripts.*",perms:["regex_scripts"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],L$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:HP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.group,cols:2},`hdr-${e.group}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:[v.perms.length===0&&!v.note?z.jsxDEV(U$,{},void 0,!1,void 0,this):null,v.perms.map((b)=>z.jsxDEV(z$,{children:b},b,!1,void 0,this)),v.note?z.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:v.perms.length?4:0},children:v.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},v.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),AP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],I$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:AP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],F$=({type:e})=>{if(e==="silent")return z.jsxDEV(K$,{},void 0,!1,void 0,this);if(e==="boolean")return z.jsxDEV(Hg,{children:'"true" / "false"'},void 0,!1,void 0,this);return z.jsxDEV(Hg,{children:"string"},void 0,!1,void 0,this)},x$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:qP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.description?z.jsxDEV(z.Fragment,{children:[e.label," — ",z.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:e.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):e.label,cols:4},`hdr-${e.label}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:v.aliases==="—"?z.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):z.jsxDEV(Hg,{children:v.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:z.jsxDEV(F$,{type:v.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"WorldInfoInterceptorEntry",note:"Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"comment",type:"string",optional:!1,desc:"Author-facing comment / label for the entry."},{field:"disabled",type:"boolean",optional:!1,desc:"Stored disabled flag (or accumulated disable from earlier handlers in the chain)."},{field:"constant",type:"boolean",optional:!1,desc:"Always-active flag."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:"Per-extension namespace metadata stored on the entry."},{field:"key",type:"readonly string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"readonly string[]",optional:!1,desc:"Secondary trigger keywords."},{field:"position",type:"number",optional:!1,desc:"Injection position."},{field:"depth",type:"number",optional:!1,desc:"Injection depth."},{field:"priority",type:"number",optional:!1,desc:"Activation priority."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100)."},{field:"useProbability",type:"boolean",optional:!1,desc:"Whether probability gating applies."},{field:"content",type:"string",optional:!1,desc:"Entry text content (reflects mutations from earlier handlers in the chain)."}]},{name:"WorldInfoInterceptorMessage",note:"One chat message exposed to a registerInterceptor handler.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message role."},{field:"content",type:"string",optional:!1,desc:"Message content."}]},{name:"WorldInfoInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"characterId",type:"string",optional:!1,desc:"Active character id."},{field:"userId?",type:"string",optional:!0,desc:"Owning user id. Pass to operator-scoped Spindle calls."},{field:"entries",type:"readonly WorldInfoInterceptorEntry[]",optional:!1,desc:"Candidate entries with prior handlers' mutations applied."},{field:"messages",type:"readonly WorldInfoInterceptorMessage[]",optional:!1,desc:"Chat-history snapshot."},{field:"chatTurn",type:"number",optional:!1,desc:"Turn number for this chat."},{field:"chatMetadata",type:"Record<string, unknown>",optional:!1,desc:"Chat-level metadata snapshot. Read-only."}]},{name:"WorldInfoInterceptorResult",note:"Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.",fields:[{field:"disabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-disable. Wins against any later enabled / forced vote."},{field:"enabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled."},{field:"forced?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced."},{field:"mutated?",type:"readonly { id: string; content: string }[]",optional:!0,desc:"Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id."}]},{name:"WorldInfoInterceptorOptions",note:"Passed to api.worldInfo.registerInterceptor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers' decisions applied to the entry list."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call."}]},{name:"RegisteredWorldInfoInterceptorInfo",note:"Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.",fields:[{field:"scriptId",type:"string",optional:!1,desc:"Owning script id."},{field:"scriptName",type:"string",optional:!1,desc:"Owning script display name."},{field:"id",type:"string",optional:!1,desc:"Resolved entry id (auto-generated or user-provided)."},{field:"priority",type:"number",optional:!1,desc:"Effective priority value."},{field:"timeoutMs",type:"number",optional:!1,desc:"Effective per-invocation timeout (ms)."}]},{name:"RegexScriptInfo",note:"Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique row id."},{field:"name",type:"string",optional:!1,desc:"Display name shown in the regex panel."},{field:"scriptId",type:"string",optional:!1,desc:"Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern compiled with the JavaScript regex engine."},{field:"replaceString",type:"string",optional:!1,desc:"Replacement template. Supports $1 / $& / $<name> capture references."},{field:"flags",type:"string",optional:!1,desc:'Any subset of "gimsu".'},{field:"placement",type:"RegexPlacement[]",optional:!1,desc:"Which message roles the rule applies to."},{field:"scope",type:"RegexScope",optional:!1,desc:"Scope tier: 'global' | 'character' | 'chat'."},{field:"scopeId",type:"string | null",optional:!1,desc:"Required when scope is non-global; null otherwise."},{field:"target",type:"RegexTarget",optional:!1,desc:"When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)."},{field:"minDepth",type:"number | null",optional:!1,desc:"Lower bound on chat-history depth (0 = latest), or null for unbounded."},{field:"maxDepth",type:"number | null",optional:!1,desc:"Upper bound on chat-history depth, or null for unbounded."},{field:"trimStrings",type:"string[]",optional:!1,desc:"Additional substrings stripped from output after the regex pass."},{field:"runOnEdit",type:"boolean",optional:!1,desc:"Re-run the rule when a message is edited."},{field:"substituteMacros",type:"RegexMacroMode",optional:!1,desc:"How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'."},{field:"disabled",type:"boolean",optional:!1,desc:"When true, the rule is registered but not active."},{field:"sortOrder",type:"number",optional:!1,desc:"Lower values run earlier within the same scope tier."},{field:"description",type:"string",optional:!1,desc:"Free-form note."},{field:"folder",type:"string",optional:!1,desc:"Folder label shown in the regex panel."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata namespaced to the creating extension."},{field:"createdAt",type:"number",optional:!1,desc:"Unix epoch seconds."},{field:"updatedAt",type:"number",optional:!1,desc:"Unix epoch seconds."}]},{name:"RegexScriptListOptions",note:"Filter options for api.regexScripts.list().",fields:[{field:"scope?",type:"'global' | 'character' | 'chat'",optional:!0,desc:"Filter to a single scope. Omit to include all scopes."},{field:"scopeId?",type:"string",optional:!0,desc:"Required when scope is 'character' or 'chat'. Ignored otherwise."},{field:"target?",type:"'prompt' | 'response' | 'display'",optional:!0,desc:"Filter by execution target."},{field:"limit?",type:"number",optional:!0,desc:"Page size. Default 50, max 200."},{field:"offset?",type:"number",optional:!0,desc:"Pagination offset."}]},{name:"RegexScriptActiveOptions",note:"Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.",fields:[{field:"target",type:"'prompt' | 'response' | 'display'",optional:!1,desc:"Required. The execution target to resolve for."},{field:"characterId?",type:"string",optional:!0,desc:"Include character-scoped rules attached to this character."},{field:"chatId?",type:"string",optional:!0,desc:"Include chat-scoped rules attached to this chat."}]},{name:"RegexScriptCreateInput",note:"Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.",fields:[{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern (JavaScript regex)."},{field:"replaceString?",type:"string",optional:!0,desc:"Replacement template. Default empty string."},{field:"flags?",type:"string",optional:!0,desc:'Any subset of "gimsu". Default "gi".'},{field:"placement?",type:"RegexPlacement[]",optional:!0,desc:'Default ["ai_output"].'},{field:"scope?",type:"RegexScope",optional:!0,desc:"Default 'global'."},{field:"scopeId?",type:"string | null",optional:!0,desc:"Required when scope is non-global."},{field:"target?",type:"RegexTarget",optional:!0,desc:"Default 'response'."},{field:"minDepth?",type:"number | null",optional:!0,desc:"Lower depth bound."},{field:"maxDepth?",type:"number | null",optional:!0,desc:"Upper depth bound."},{field:"trimStrings?",type:"string[]",optional:!0,desc:"Additional substrings stripped from output."},{field:"runOnEdit?",type:"boolean",optional:!0,desc:"Re-run on edit."},{field:"substituteMacros?",type:"RegexMacroMode",optional:!0,desc:"How CBS / {{...}} macros inside the rule resolve. Default 'none'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Create as disabled."},{field:"sortOrder?",type:"number",optional:!0,desc:"Default 0."},{field:"description?",type:"string",optional:!0,desc:"Free-form note."},{field:"folder?",type:"string",optional:!0,desc:"Folder label."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."},{field:"scriptId?",type:"string",optional:!0,desc:"Stable identifier. Normalized to lowercase + underscores by the host."}]},{name:"RegexScriptUpdateInput",note:"Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.",fields:[{field:"(all RegexScriptCreateInput fields, all optional)",type:"—",optional:!0,desc:"Only the fields you provide are updated; omitted fields are left unchanged."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],N$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:RP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[e.name,e.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:e.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${e.name}`,!1,void 0,this),e.fields.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+."},{name:"listInterceptors",args:"—",desc:"Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.regexScripts",rows:[{name:"list",args:"options?",desc:"List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }."},{name:"get",args:"scriptId",desc:"Get a single regex script by id. Returns null if not found."},{name:"findByName",args:"name, scope?",desc:"Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case."},{name:"getActive",args:"options",desc:"Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId."},{name:"create",args:"input",desc:"Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)."},{name:"update",args:"scriptId, input",desc:"Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found."},{name:"delete",args:"scriptId",desc:"Delete a regex script. Returns true if the row was deleted."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],B$=()=>z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:MP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV(ph,{label:e.group,cols:3},`hdr-${e.group}`,!1,void 0,this),e.rows.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.group}-${v.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],mP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],Z$=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],GP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],C$=()=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",z.jsxDEV(Hg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",z.jsxDEV(Hg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",z.jsxDEV(Hg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",z.jsxDEV(Hg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",z.jsxDEV(Hg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",z.jsxDEV(Hg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:[z.jsxDEV(ph,{label:"ls:components",cols:3},void 0,!1,void 0,this),WP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)),z.jsxDEV(ph,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),mP.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)),z.jsxDEV(ph,{label:"ls:icons",cols:3},void 0,!1,void 0,this),Z$.map((e)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[z.jsxDEV("thead",{children:z.jsxDEV("tr",{children:[z.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),z.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("tbody",{children:GP.map((e)=>z.jsxDEV(z.Fragment,{children:[z.jsxDEV("tr",{children:z.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[e.name,e.note&&z.jsxDEV("div",{className:"ls-ref-type-note",children:e.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${e.name}`,!1,void 0,this),e.fields.map((v)=>z.jsxDEV("tr",{children:[z.jsxDEV("td",{children:z.jsxDEV(Hg,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV("td",{children:z.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${e.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),t3=()=>z.jsxDEV("div",{className:"ls-ref",children:[z.jsxDEV("div",{className:"ls-ref-toolbar",children:z.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>u3(),title:"Download the current reference as a Markdown file",children:[z.jsxDEV(X1,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Rv,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:z.jsxDEV($$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(fb,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:z.jsxDEV(L$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(sb,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[z.jsxDEV(I$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",z.jsxDEV(Hg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(yb,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[z.jsxDEV(x$,{},void 0,!1,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",z.jsxDEV(Hg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",z.jsxDEV(Hg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:z.jsxDEV(N$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(ab,{size:11},void 0,!1,void 0,this),title:"API Functions",children:z.jsxDEV(B$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(Zb,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:z.jsxDEV(C$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),z.jsxDEV(z0,{icon:z.jsxDEV(pb,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[z.jsxDEV("p",{className:"ls-ref-muted",children:[z.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Hg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",z.jsxDEV(Hg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",z.jsxDEV(Hg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",z.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),z.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[z.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",z.jsxDEV(Hg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",z.jsxDEV(Hg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",z.jsxDEV(Hg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",z.jsxDEV(Hg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Lr=tr(rg(),1),P3=!1,O3=({script:e,allScripts:v,activeContext:b,isRunning:n,consoleEntries:w,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:H,sendToBackend:W})=>{let[G,m]=Cg.useState(e.code),[q,X]=Cg.useState(!1),[L,S]=Cg.useState(!1),[T,_]=Cg.useState(e.name),[rr,wr]=Cg.useState("code"),[lr,a]=Cg.useState(!1),[p,er]=Cg.useState(!1),N=Cg.useRef(null),y=Cg.useRef(null),f=Cg.useRef(null),Z=Cg.useRef(e.id),Mr=Cg.useRef(W);Cg.useEffect(()=>{Z.current=e.id},[e.id]),Cg.useEffect(()=>{Mr.current=W},[W]),Cg.useEffect(()=>{m(e.code),X(!1),_(e.name),er(!1)},[e.id,e.code,e.name]),Cg.useEffect(()=>{return()=>{if(N.current)clearTimeout(N.current),N.current=null;let F=f.current;if(F!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${Z.current}, len=${F.length})`);try{Mr.current({type:"update_script",id:Z.current,patch:{code:F}})}catch(or){console.error("[LumiScript] ScriptEditor unmount-flush failed:",or)}f.current=null}}},[]),Cg.useEffect(()=>{W({type:"get_active_context"})},[e.id,W]),Cg.useEffect(()=>{let F=setInterval(()=>{W({type:"get_active_context"})},2000);return()=>clearInterval(F)},[W]);let Ar=Cg.useCallback((F)=>{console.log(`[LumiScript] saveCode: script=${e.id}, len=${F.length}, head="${F.slice(0,40).replace(/\n/g,"\\n")}"`),W({type:"update_script",id:e.id,patch:{code:F}}),f.current=null,X(!1)},[e.id,W]),mr=(F)=>{if(F===void 0)return;if(m(F),X(F!==e.code),f.current=F,N.current)clearTimeout(N.current);N.current=setTimeout(()=>Ar(F),O)},Br=(F,or)=>{if(y.current=F,!P3){P3=!0;let Or=or.languages.typescript.javascriptDefaults;Or.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Or.setCompilerOptions({target:or.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Or.addExtraLib(i3,"ts:lumiverse/lumiscript-api.d.ts")}F.addCommand(or.KeyMod.CtrlCmd|or.KeyCode.KeyS,()=>{if(N.current)clearTimeout(N.current);Ar(F.getValue())}),F.getModel()?.setEOL(or.editor.EndOfLineSequence.LF)},k=()=>{if(n)return;if(N.current)clearTimeout(N.current),N.current=null;if(q)Ar(y.current?.getValue()??G);W({type:"run_script",id:e.id})},s=()=>{let F=T.trim();if(F&&F!==e.name)W({type:"update_script",id:e.id,patch:{name:F}});S(!1)},vr=(F)=>{let or=e.bindings??[];W({type:"update_script",id:e.id,patch:{bindings:[...or,F]}})},Qr=(F)=>{W({type:"update_script",id:e.id,patch:{bindings:(e.bindings??[]).filter((or,Or)=>Or!==F)}})},Gr=()=>{if(e.allowDangerous)W({type:"update_script",id:e.id,patch:{allowDangerous:!1}});else if(p)er(!1),W({type:"update_script",id:e.id,patch:{allowDangerous:!0}});else er(!0)},V=(F)=>new Date(F).toLocaleString();return Lr.jsxDEV("div",{className:"ls-editor-root",children:[Lr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?Lr.jsxDEV("input",{className:"ls-editor-name-input",value:T,autoFocus:!0,onChange:(F)=>_(F.target.value),onBlur:s,onKeyDown:(F)=>{if(F.key==="Enter")s();if(F.key==="Escape")_(e.name),S(!1)}},void 0,!1,void 0,this):Lr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>S(!0),title:"Click to rename",style:{cursor:"text"},children:e.name},void 0,!1,void 0,this),q&&Lr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>wr("code"),title:"Code editor",children:[Lr.jsxDEV(Mo,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>wr("docs"),title:"API reference",children:[Lr.jsxDEV(Cb,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),e.type!=="library"&&Lr.jsxDEV("button",{className:`ls-btn${n?"":" ls-accent"}`,onClick:k,disabled:n,children:[n?Lr.jsxDEV(Zl,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Lr.jsxDEV(J1,{size:15},void 0,!1,void 0,this),n?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Lr.jsxDEV("div",{className:"ls-editor-monaco",children:Lr.jsxDEV(g3,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:G,onChange:mr,onMount:Br,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},e.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Lr.jsxDEV("div",{className:"ls-editor-docs",children:Lr.jsxDEV(t3,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Lr.jsxDEV(o3,{entries:w,isRunning:n,onClear:H},void 0,!1,void 0,this),e.type==="trigger"&&Lr.jsxDEV(h3,{scriptId:e.id,triggers:e.triggers??[],sendToBackend:W},void 0,!1,void 0,this),e.type==="trigger"&&Lr.jsxDEV(e3,{bindings:e.bindings??[],activeContext:b,onAdd:vr,onRemove:Qr},void 0,!1,void 0,this),p&&Lr.jsxDEV("div",{className:"ls-danger-confirm",children:[Lr.jsxDEV(Dh,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:Gr,children:"Enable"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>er(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-meta-footer",children:[Lr.jsxDEV("span",{className:"ls-meta-item",children:Lr.jsxDEV("button",{className:"ls-danger-btn",onClick:Gr,title:"Toggle dangerous mode",children:[e.allowDangerous?Lr.jsxDEV(Dh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Lr.jsxDEV(gn,{size:11},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:e.allowDangerous?"ls-dangerous":"",children:e.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Lr.jsxDEV(Y1,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("select",{className:"ls-folder-select",value:e.folder??"",onChange:(F)=>{let or=F.target.value;if(or==="__new__"){let Or=window.prompt("New folder name:");if(Or?.trim())W({type:"update_script",id:e.id,patch:{folder:Or.trim()}})}else W({type:"update_script",id:e.id,patch:{folder:or}})},children:[Lr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(v.map((F)=>F.folder).filter((F)=>!!F))].sort().map((F)=>Lr.jsxDEV("option",{value:F,children:F},F,!1,void 0,this)),Lr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(Vb,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Updated ",V(e.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(Tb,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Created ",V(e.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:e.id,onClick:()=>{navigator.clipboard.writeText(e.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?Lr.jsxDEV(Sb,{size:10},void 0,!1,void 0,this):Lr.jsxDEV(pe,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["ID ",e.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Ko=tr(rg(),1),A3=({scripts:e,initialScriptId:v,activeContext:b,execInfo:n,activeRunScriptId:w,isRunning:P,consoleHistory:O,editorFontSize:H,autosaveDebounceMs:W,onClearConsole:G,onClose:m,sendToBackend:q})=>{let[X,L]=Ln.useState(v),S=e.find((lr)=>lr.id===X)??null;Ln.useEffect(()=>{L(v)},[v]),Ln.useEffect(()=>{let lr=(a)=>{if(a.key==="Escape")m()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[m]);let T=S?O[S.id]??[]:[],_=P&&S?.id===w;return H3.createPortal(Ko.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)m()},children:Ko.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[Ko.jsxDEV("div",{className:"ls-modal-header",children:[Ko.jsxDEV("span",{className:"ls-modal-title",children:[Ko.jsxDEV(Cl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),Ko.jsxDEV("button",{className:"ls-modal-close",onClick:m,title:"Close (Esc)",children:Ko.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ko.jsxDEV("div",{className:"ls-modal-body",children:[Ko.jsxDEV("div",{className:"ls-modal-sidebar",children:Ko.jsxDEV(Xt,{scripts:e,selectedId:X,execInfo:n,onSelect:L,onEdit:L,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ko.jsxDEV("div",{className:"ls-modal-main",children:S?Ko.jsxDEV(O3,{script:S,allScripts:e,activeContext:b,isRunning:_,consoleEntries:T,editorFontSize:H,autosaveDebounceMs:W,onClearConsole:()=>{if(S)G(S.id)},sendToBackend:q},void 0,!1,void 0,this):Ko.jsxDEV("div",{className:"ls-placeholder",children:[Ko.jsxDEV(Cl,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),Ko.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var It=tr(rg(),1),q3=({scripts:e,activeContext:v,execInfo:b,activeRunScriptId:n,isRunning:w,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:W,onScriptOpened:G,sendToBackend:m})=>{let[q,X]=Ft.useState(null);return Ft.useEffect(()=>{if(q&&G)G(q)},[q,G]),It.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[It.jsxDEV(Xt,{scripts:e,selectedId:q,execInfo:b,onSelect:()=>{},onEdit:X,sendToBackend:m},void 0,!1,void 0,this),q!==null&&It.jsxDEV(A3,{scripts:e,initialScriptId:q,activeContext:v,execInfo:b,activeRunScriptId:n,isRunning:w,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:W,onClose:()=>X(null),sendToBackend:m},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var R3=tr(vg(),1);var cg=tr(rg(),1),T$=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function S$(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e==="string")return e.length>80?e.slice(0,77)+"…":e;try{let v=JSON.stringify(e);return v.length>80?v.slice(0,77)+"…":v}catch{return String(e)}}var M3=({variables:e,sendToBackend:v})=>{let[b,n]=R3.useState(new Set(["local","global","chat","character"])),w=(O)=>{n((H)=>{let W=new Set(H);if(W.has(O))W.delete(O);else W.add(O);return W})},P=e?Object.values(e).reduce((O,H)=>O+Object.keys(H).length,0):0;return cg.jsxDEV("div",{className:"ls-status-section",children:[cg.jsxDEV("div",{className:"ls-inject-header",children:[cg.jsxDEV(de,{size:10},void 0,!1,void 0,this),"Variables",P>0&&cg.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),cg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>v({type:"get_variables"}),children:cg.jsxDEV(qv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),cg.jsxDEV("div",{className:"ls-status-section-body",children:!e?cg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?cg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):T$.map(({key:O,label:H,hint:W})=>{let G=e[O],m=Object.keys(G),q=b.has(O);if(m.length===0)return null;return cg.jsxDEV("div",{className:"ls-vars-scope",children:[cg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>w(O),children:[q?cg.jsxDEV(Wo,{size:10},void 0,!1,void 0,this):cg.jsxDEV(Re,{size:10},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-name",children:H},void 0,!1,void 0,this),W&&cg.jsxDEV("span",{className:"ls-vars-scope-hint",children:W},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-count",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q&&cg.jsxDEV("div",{className:"ls-vars-scope-body",children:m.sort().map((X)=>cg.jsxDEV("div",{className:"ls-vars-entry",children:[cg.jsxDEV("span",{className:"ls-vars-key",children:X},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-value",title:String(G[X]),children:S$(G[X])},void 0,!1,void 0,this)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var U0=tr(vg(),1);function xt(e){if(!Number.isFinite(e)||e<=0)return"0 B";let v=["B","KB","MB","GB"],b=Math.min(v.length-1,Math.floor(Math.log(e)/Math.log(1024))),n=e/Math.pow(1024,b);return`${b===0?n.toFixed(0):n.toFixed(1)} ${v[b]}`}function In(e){let v;if(typeof e==="number")v=e;else{if(!e)return"—";v=new Date(e).getTime()}if(!Number.isFinite(v)||v<=0)return"—";let b=Date.now()-v;if(b<60000)return"just now";if(b<3600000)return`${Math.floor(b/60000)}m ago`;if(b<86400000)return`${Math.floor(b/3600000)}h ago`;if(b<2592000000)return`${Math.floor(b/86400000)}d ago`;return new Date(v).toISOString().slice(0,10)}var XP={script:"script",character:"char",chat:"chat"},W3={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Nt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(b,n,w,P,O,H,W)=>{if(n)return`<span class="ls-json-key">${n}</span>${w}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(H)return`<span class="ls-json-null">${H}</span>`;if(W)return`<span class="ls-json-number">${W}</span>`;return b})}async function YP(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}var Ir=tr(rg(),1),dh=["script","character","chat"],k$=10485760,D$=41943040,V$=52428800;function _$(e){if(e>=D$)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(e>=k$)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function y$(e){if(e.scope==="character"){if(e.characterName)return`character: ${e.characterName} (${e.characterId})
${e.path}`;if(e.characterId)return`character: ${e.characterId} (not currently loaded)
${e.path}`}if(e.scope==="chat"){if(e.chatName)return`chat: ${e.chatName} (${e.chatId})
${e.path}`;if(e.chatId)return`chat: ${e.chatId} (not currently loaded)
${e.path}`}return e.path}function E$(e,v,b,n){switch(b){case"name":return e.name.localeCompare(v.name,void 0,{sensitivity:"base"});case"scope":return e.scope.localeCompare(v.scope);case"owner":{let w=n.get(e.scriptId)??e.scriptId,P=n.get(v.scriptId)??v.scriptId;return w.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return e.sizeBytes-v.sizeBytes;case"updated":return new Date(e.modifiedAt).getTime()-new Date(v.modifiedAt).getTime()}}var m3=({collections:e,scripts:v,sendToBackend:b,onInspect:n,onDrop:w})=>{let[P,O]=U0.useState(""),[H,W]=U0.useState(()=>new Set(dh)),[G,m]=U0.useState(null),[q,X]=U0.useState("asc"),L=U0.useMemo(()=>{let N=new Map;for(let y of v)N.set(y.id,y.name);return N},[v]),S=U0.useMemo(()=>{if(!e)return null;let N=e;if(H.size<dh.length)N=N.filter((f)=>H.has(f.scope));let y=P.trim().toLowerCase();if(y)N=N.filter((f)=>f.name.toLowerCase().includes(y));if(G){let f=q==="asc"?1:-1;N=N.slice().sort((Z,Mr)=>E$(Z,Mr,G,L)*f)}return N},[e,H,P,G,q,L]),T=()=>b({type:"list_collections"}),_=(N)=>{W((y)=>{let f=new Set(y);if(f.has(N))f.delete(N);else f.add(N);if(f.size===0)return new Set(dh);return f})},rr=(N)=>{if(G!==N){m(N),X("asc");return}if(q==="asc"){X("desc");return}m(null)},wr=()=>{O(""),W(new Set(dh))},lr=e?.length??0,a=S?.length??0,p=P.trim().length>0||H.size<dh.length,er=(N)=>{if(G!==N)return Ir.jsxDEV(Db,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return q==="asc"?Ir.jsxDEV(Re,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Ir.jsxDEV(Wo,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Ir.jsxDEV("div",{className:"ls-status-section",children:[Ir.jsxDEV("div",{className:"ls-inject-header",children:[Ir.jsxDEV(de,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Ir.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:T,children:Ir.jsxDEV(qv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-status-section-body",children:e===null?Ir.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):e.length===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Ir.jsxDEV(Ir.Fragment,{children:[Ir.jsxDEV("div",{className:"ls-collections-filter",children:[Ir.jsxDEV("div",{className:"ls-collections-filter-search",children:[Ir.jsxDEV(W0,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(N)=>O(N.target.value)},void 0,!1,void 0,this),P&&Ir.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Ir.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-collections-filter-chips",children:dh.map((N)=>{let y=H.has(N);return Ir.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":N,"aria-pressed":y,title:y?`Hide ${N}-scoped`:`Show ${N}-scoped`,onClick:()=>_(N),children:XP[N]},N,!1,void 0,this)})},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${a}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:[Ir.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Ir.jsxDEV("button",{onClick:wr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Ir.jsxDEV("div",{className:"ls-collections-list",children:[Ir.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",er("name")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",er("scope")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",er("owner")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",er("size")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",er("updated")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S.map((N)=>{let y=L.get(N.scriptId)??`(${N.scriptId.slice(0,8)}…)`,f=!L.has(N.scriptId),Z=f?`scriptId: ${N.scriptId} (not currently loaded)`:`${y} (${N.scriptId})`;return Ir.jsxDEV("div",{className:"ls-collections-row",children:[Ir.jsxDEV("span",{className:"ls-collections-name",title:N.name,children:N.name},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-scope","data-scope":N.scope,title:y$(N),children:XP[N.scope]},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:Z,children:y},void 0,!1,void 0,this),(()=>{let Mr=_$(N.sizeBytes),Ar=(N.sizeBytes/V$*100).toFixed(N.sizeBytes<1048576?2:1),mr=`${N.sizeBytes.toLocaleString()} bytes (${Ar}% of 50 MB cap)`;return Ir.jsxDEV("span",{className:"ls-collections-size","data-budget":Mr.tier,title:mr,style:Mr.tier==="normal"?void 0:{color:Mr.color,fontWeight:600},children:xt(N.sizeBytes)},void 0,!1,void 0,this)})(),Ir.jsxDEV("span",{className:"ls-collections-updated",title:N.modifiedAt,children:In(N.modifiedAt)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-actions",children:[Ir.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>n(N.path),children:Ir.jsxDEV(_b,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>w(N),children:Ir.jsxDEV(Uo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},N.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Dg=tr(vg(),1),Y3=tr(Ch(),1);var el=tr(vg(),1),G3=tr(Ch(),1);var Xg=tr(rg(),1);function c$(e){let{id:v,createdAt:b,updatedAt:n,...w}=e;try{return JSON.stringify(w,null,2)}catch{return"{}"}}var X3=({path:e,record:v,onClose:b,sendToBackend:n})=>{let[w,P]=el.useState(()=>c$(v)),[O,H]=el.useState(null),W=el.useRef(null),G=el.useRef(null),m=el.useRef(null);el.useEffect(()=>{let T=(_)=>{if(_.key==="Escape")b()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[b]),el.useEffect(()=>{let T=(_)=>{if(_.key!=="Tab")return;let rr=W.current;if(!rr)return;let wr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(wr.length===0)return;let lr=wr[0],a=wr[wr.length-1],p=document.activeElement,er=p!==null&&rr.contains(p);if(_.shiftKey){if(!er||p===lr)_.preventDefault(),a.focus()}else if(!er||p===a)_.preventDefault(),lr.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[]),el.useEffect(()=>{let T=setTimeout(()=>G.current?.focus(),0);return()=>clearTimeout(T)},[]);let q=()=>{let T;try{T=JSON.parse(w)}catch(_){let rr=_ instanceof Error?_.message:String(_);H(`JSON parse error: ${rr}`);return}if(T===null||typeof T!=="object"||Array.isArray(T)){H("Record must be a JSON object — not an array, null, or primitive.");return}H(null),n({type:"update_record",path:e,recordId:String(v.id),patch:T}),b()},X=(T)=>{if((T.metaKey||T.ctrlKey)&&T.key==="Enter")T.preventDefault(),q()},L=String(v.id),S=Xg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)b()},children:Xg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:W,onClick:(T)=>T.stopPropagation(),children:[Xg.jsxDEV("div",{className:"ls-modal-header",children:[Xg.jsxDEV("span",{className:"ls-modal-title",children:[Xg.jsxDEV(se,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Xg.jsxDEV("button",{className:"ls-modal-close",onClick:b,title:"Cancel (Esc)",children:Xg.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-edit-body",children:[Xg.jsxDEV("div",{className:"ls-edit-meta",children:[Xg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Xg.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Xg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Xg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Xg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Xg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Xg.jsxDEV("pre",{ref:m,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Nt(w)+`
`}},void 0,!1,void 0,this),Xg.jsxDEV("textarea",{ref:G,className:"ls-edit-textarea",value:w,onChange:(T)=>{if(P(T.target.value),O)H(null)},onKeyDown:X,onScroll:(T)=>{let _=m.current;if(!_)return;_.scrollTop=T.currentTarget.scrollTop,_.scrollLeft=T.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Xg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Xg.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),Xg.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-drop-actions",children:[Xg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:b,children:"Cancel"},void 0,!1,void 0,this),Xg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:q,title:"Save (Ctrl/Cmd+Enter)",children:[Xg.jsxDEV(rn,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return G3.createPortal(S,document.body)};var j=tr(rg(),1),I1=50,a$=150,f$=1200,j$=4000,J3=({path:e,summary:v,records:b,total:n,error:w,stats:P,refreshToken:O,onClose:H,sendToBackend:W})=>{let[G,m]=Dg.useState(""),[q,X]=Dg.useState(""),[L,S]=Dg.useState(0),[T,_]=Dg.useState("shallow"),[rr,wr]=Dg.useState(0),[lr,a]=Dg.useState(()=>new Set),[p,er]=Dg.useState(null),[N,y]=Dg.useState(null),[f,Z]=Dg.useState("records");Dg.useEffect(()=>{let F=setTimeout(()=>X(G),a$);return()=>clearTimeout(F)},[G]),Dg.useEffect(()=>{S(0)},[q,T]),Dg.useEffect(()=>{let F=q.trim();if(T==="jsonquery")W({type:"inspect_collection",path:e,jsonqueryFilter:F||void 0,limit:I1,offset:L*I1});else W({type:"inspect_collection",path:e,textFilter:F||void 0,deepFilter:T==="deep"||void 0,limit:I1,offset:L*I1})},[e,q,T,L,O,rr,W]),Dg.useEffect(()=>{let F=(or)=>{if(or.key==="Escape")H()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[H]);let Mr=Math.max(1,Math.ceil(n/I1)),Ar=n===0?0:L*I1+1,mr=Math.min(n,(L+1)*I1),Br=Dg.useMemo(()=>{let F=e.match(/\/([^/]+)\.json$/);return F?F[1]:e},[e]),k=Dg.useMemo(()=>{if(!v)return null;if(v.scope==="character"&&v.characterName)return`character: ${v.characterName}`;if(v.scope==="chat"&&v.chatName)return`chat: ${v.chatName}`;return null},[v]),s=(F)=>{a((or)=>{let Or=new Set(or);return Or.add(F),Or}),setTimeout(()=>{a((or)=>{if(!or.has(F))return or;let Or=new Set(or);return Or.delete(F),Or})},f$)},vr=async(F)=>{if(await YP(String(F.id)))s(`${F.id}:id`)},Qr=async(F)=>{if(await YP(JSON.stringify(F,null,2)))s(`${F.id}:json`)};Dg.useEffect(()=>{if(N===null)return;let F=setTimeout(()=>y(null),j$);return()=>clearTimeout(F)},[N]);let Gr=(F)=>{let or=String(F.id);if(N===or)W({type:"delete_record",path:e,recordId:or}),y(null);else y(or)};Dg.useEffect(()=>{y(null),er(null)},[L,q,T,e]),Dg.useEffect(()=>{Z("records")},[e]),Dg.useEffect(()=>{if(f!=="stats")return;W({type:"analyze_collection",path:e})},[f,e,O,rr,W]);let V=j.jsxDEV("div",{className:"ls-modal-overlay",onClick:(F)=>{if(F.target===F.currentTarget)H()},children:j.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(F)=>F.stopPropagation(),children:[j.jsxDEV("div",{className:"ls-modal-header",children:[j.jsxDEV("span",{className:"ls-modal-title",children:[j.jsxDEV(de,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-name",children:Br},void 0,!1,void 0,this),k&&j.jsxDEV("span",{className:"ls-inspect-title-path",title:e,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-title-path",title:e,children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:()=>wr((F)=>F+1),title:"Refresh records",style:{marginRight:4},children:j.jsxDEV(qv,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-modal-close",onClick:H,title:"Close (Esc)",children:j.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>Z("records"),children:[j.jsxDEV(cb,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),j.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>Z("stats"),children:[j.jsxDEV(q0,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{className:"ls-inspect-toolbar",children:[j.jsxDEV("div",{className:"ls-inspect-search",children:[j.jsxDEV(W0,{size:12},void 0,!1,void 0,this),j.jsxDEV("input",{type:T==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:T==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":T==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:G,onChange:(F)=>m(F.target.value),autoFocus:!0,spellCheck:T!=="jsonquery",autoCorrect:T==="jsonquery"?"off":"on",autoCapitalize:T==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),j.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>_("shallow"),children:j.jsxDEV(W0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>_("deep"),children:j.jsxDEV(R0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>_("jsonquery"),children:j.jsxDEV(Mo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-pager",children:[j.jsxDEV("span",{className:"ls-inspect-pager-status",children:n===0?"No matching records":j.jsxDEV(j.Fragment,{children:["Showing ",j.jsxDEV("strong",{children:Ar},void 0,!1,void 0,this),"–",j.jsxDEV("strong",{children:mr},void 0,!1,void 0,this)," of ",j.jsxDEV("strong",{children:n},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.max(0,F-1)),disabled:L===0,title:"Previous page",children:j.jsxDEV(kb,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.min(Mr-1,F+1)),disabled:L>=Mr-1,title:"Next page",children:j.jsxDEV(Av,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w&&j.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[j.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),j.jsxDEV("span",{children:w},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-body",children:b===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):b.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:n===0&&q?j.jsxDEV(j.Fragment,{children:[j.jsxDEV("div",{children:["No records match “",q,"”"]},void 0,!0,void 0,this),j.jsxDEV("button",{onClick:()=>m(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):n===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):j.jsxDEV("div",{className:"ls-inspect-records",children:b.map((F)=>{let or=String(F.id),Or=lr.has(`${F.id}:id`),qr=lr.has(`${F.id}:json`);return j.jsxDEV("div",{className:"ls-inspect-record",children:[j.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${or}`,children:[j.jsxDEV("code",{children:[or.slice(0,12),"…"]},void 0,!0,void 0,this),j.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",j.jsxDEV("time",{title:new Date(F.createdAt).toISOString(),children:In(F.createdAt)},void 0,!1,void 0,this),F.updatedAt!==F.createdAt&&j.jsxDEV(j.Fragment,{children:[" · ","updated ",j.jsxDEV("time",{title:new Date(F.updatedAt).toISOString(),children:In(F.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:Or?"Copied!":"Copy ID",onClick:()=>vr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Or?"var(--lumiverse-accent)":"inherit",opacity:Or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(pe,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:qr?"Copied!":"Copy full JSON",onClick:()=>Qr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:qr?"var(--lumiverse-accent)":"inherit",opacity:qr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(Nl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>er(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[j.jsxDEV(se,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),j.jsxDEV("button",{className:"ls-inspect-record-action"+(N===or?" ls-inspect-record-action-confirm":""),title:N===or?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Gr(F),style:{background:N===or?"rgba(246, 130, 130, 0.18)":"transparent",border:N===or?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:N===or?"3px 6px":4,marginLeft:2,cursor:"pointer",color:N===or?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:N===or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:N===or?600:400,borderRadius:3},children:[j.jsxDEV(Uo,{size:11},void 0,!1,void 0,this),N===or?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Nt(p$(F))}},void 0,!1,void 0,this)]},or,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&j.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?j.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?j.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):j.jsxDEV(rL,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return j.jsxDEV(j.Fragment,{children:[Y3.createPortal(V,document.body),p&&j.jsxDEV(X3,{path:e,record:p,onClose:()=>er(null),sendToBackend:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function p$(e){let{id:v,createdAt:b,updatedAt:n,...w}=e;try{return JSON.stringify(w,null,2)}catch{return String(e)}}var d$={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function s$(e){if(typeof e==="string")return`"${e.length>32?e.slice(0,30)+"…":e}"`;if(e===null)return"null";return String(e)}function JP(e){if(!Number.isFinite(e))return"—";return Number.isInteger(e)?String(e):e.toFixed(2)}var rL=({stats:e})=>{return j.jsxDEV("div",{className:"ls-inspect-stats",children:[j.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",j.jsxDEV("strong",{children:e.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",e.totalRecords===1?"record":"records"," ·"," ",j.jsxDEV("strong",{children:e.fields.length},void 0,!1,void 0,this)," ",e.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-grid",children:e.fields.map((v)=>j.jsxDEV(gL,{field:v,totalRecords:e.totalRecords},v.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},gL=({field:e,totalRecords:v})=>{let b=v===0?0:Math.round(e.presence/v*100),n=Object.entries(e.types);return n.sort((w,P)=>P[1]-w[1]),j.jsxDEV("div",{className:"ls-inspect-stats-card",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[j.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:e.name,children:e.name},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${e.presence} of ${v} records`,children:[b,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:n.map(([w,P])=>j.jsxDEV("span",{className:d$[w],children:[w," · ",P]},w,!0,void 0,this))},void 0,!1,void 0,this),e.numericRange&&j.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[j.jsxDEV("span",{children:["min ",j.jsxDEV("strong",{children:JP(e.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["max ",j.jsxDEV("strong",{children:JP(e.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),j.jsxDEV("span",{children:["mean ",j.jsxDEV("strong",{children:JP(e.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),e.topValues.length>0&&j.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[j.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",e.topValues.length," of ",e.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),j.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:e.topValues.map((w,P)=>j.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(w.value),children:[j.jsxDEV("code",{children:s$(w.value)},void 0,!1,void 0,this),j.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",w.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Fn=tr(vg(),1),Q3=tr(Ch(),1);var ng=tr(rg(),1);function oL(e){if(e.scope==="character"&&e.characterName&&e.characterId)return{label:"Character",name:e.characterName,id:e.characterId};if(e.scope==="chat"&&e.chatName&&e.chatId)return{label:"Chat",name:e.chatName,id:e.chatId};return null}var z3=({target:e,recordCount:v,onConfirm:b,onCancel:n})=>{let w=Fn.useRef(null);Fn.useEffect(()=>{let O=(H)=>{if(H.key==="Escape")n()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[n]),Fn.useEffect(()=>{let O=(H)=>{if(H.key!=="Tab")return;let W=w.current;if(!W)return;let G=Array.from(W.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(G.length===0)return;let m=G[0],q=G[G.length-1],X=document.activeElement,L=X!==null&&W.contains(X);if(H.shiftKey){if(!L||X===m)H.preventDefault(),q.focus()}else if(!L||X===q)H.preventDefault(),m.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=ng.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)n()},children:ng.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:w,onClick:(O)=>O.stopPropagation(),children:[ng.jsxDEV("div",{className:"ls-modal-header",children:[ng.jsxDEV("span",{className:"ls-modal-title",children:[ng.jsxDEV(Uo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ng.jsxDEV("button",{className:"ls-modal-close",onClick:n,title:"Cancel (Esc)",children:ng.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ng.jsxDEV("div",{className:"ls-drop-body",children:[ng.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ng.jsxDEV("div",{className:"ls-drop-target",children:[ng.jsxDEV("div",{className:"ls-drop-target-name",children:e.name},void 0,!1,void 0,this),ng.jsxDEV("div",{className:"ls-drop-target-meta",children:[ng.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":e.scope,children:W3[e.scope]},void 0,!1,void 0,this),ng.jsxDEV("span",{className:"ls-drop-target-size",children:xt(e.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=oL(e);if(!O)return null;return ng.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",ng.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ng.jsxDEV("div",{className:"ls-drop-target-path",title:e.path,children:e.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v===null?ng.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):v>=0?ng.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:v===0?"Collection is currently empty.":ng.jsxDEV(ng.Fragment,{children:["Will delete ",ng.jsxDEV("strong",{children:v.toLocaleString()},void 0,!1,void 0,this)," ",v===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ng.jsxDEV("div",{className:"ls-drop-warning",children:[ng.jsxDEV(Ce,{size:12},void 0,!1,void 0,this),ng.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ng.jsxDEV("div",{className:"ls-drop-actions",children:[ng.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:n,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ng.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:b,children:[ng.jsxDEV(Uo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Q3.createPortal(P,document.body)};var Jv=tr(rg(),1),U3=({variables:e,collections:v,scripts:b,sendToBackend:n,inspectPath:w,inspectRecords:P,inspectTotal:O,inspectError:H,inspectStats:W,inspectRefreshToken:G,onInspect:m,dropTarget:q,dropTargetCount:X,onDrop:L,onDropConfirm:S})=>{return Jv.jsxDEV(Jv.Fragment,{children:[Jv.jsxDEV("div",{className:"ls-storage-list",children:[Jv.jsxDEV(M3,{variables:e,sendToBackend:n},void 0,!1,void 0,this),Jv.jsxDEV(m3,{collections:v,scripts:b,sendToBackend:n,onInspect:m,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w!==null&&Jv.jsxDEV(J3,{path:w,summary:v?.find((T)=>T.path===w),records:P,total:O,error:H,stats:W,refreshToken:G,onClose:()=>m(null),sendToBackend:n},void 0,!1,void 0,this),q!==null&&Jv.jsxDEV(z3,{target:q,recordCount:X,onConfirm:S,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Hr=tr(rg(),1),K3=({onBackendMessage:e,sendToBackend:v})=>{let[b,n]=Yg.useState("manage"),[w,P]=Yg.useState([]),[O,H]=Yg.useState(vt),[W,G]=Yg.useState({characterId:null,characterName:null,chatId:null}),[m,q]=Yg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[X,L]=Yg.useState([]),[S,T]=Yg.useState([]),[_,rr]=Yg.useState(null),[wr,lr]=Yg.useState(null),[a,p]=Yg.useState(null),[er,N]=Yg.useState(null),[y,f]=Yg.useState(0),[Z,Mr]=Yg.useState(null),[Ar,mr]=Yg.useState(0),[Br,k]=Yg.useState(null),[s,vr]=Yg.useState(null),[Qr,Gr]=Yg.useState(null),[V,F]=Yg.useState({});Yg.useEffect(()=>{let qr=e((Zr)=>{let ir=Zr;switch(ir.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${ir.scripts.length} script(s)`),P(ir.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${ir.script.id}, codeLen=${ir.script.code?.length??-1}`),P((Cr)=>Cr.map((jr)=>jr.id===ir.script.id?ir.script:jr));break}case"settings_updated":H(ir.settings);break;case"active_context":G({characterId:ir.characterId,characterName:ir.characterName,chatId:ir.chatId}),v({type:"get_variables"});break;case"variables_updated":rr(ir.variables);break;case"collections_list":lr(ir.collections);break;case"collection_records":N((Cr)=>{return ir.records}),f(ir.total),Mr(ir.error??null);break;case"collection_stats":k((Cr)=>{return ir.stats});break;case"collection_count":Gr((Cr)=>{return ir.count});break;case"collections_updated":v({type:"list_collections"}),mr((Cr)=>Cr+1);break;case"injections_updated":L(ir.injections);break;case"tools_updated":T(ir.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};q((jr)=>{let Mg=jr.consoleHistory[ir.scriptId]??[],$o=Mg.length>0?[...Mg,Cr]:Mg;return{...jr,activeScriptId:ir.scriptId,runId:ir.runId,isRunning:!0,consoleHistory:{...jr.consoleHistory,[ir.scriptId]:$o},scriptExecInfo:{...jr.scriptExecInfo,[ir.scriptId]:{...jr.scriptExecInfo[ir.scriptId],dot:"running"}}}}),F((jr)=>({...jr,[ir.scriptId]:(jr[ir.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;q((jr)=>{let Mg=jr.consoleHistory[ir.scriptId]??[];if(Mg.length>=Cr)return jr;let br=Mg.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:ir.entry;return{...jr,consoleHistory:{...jr.consoleHistory,[ir.scriptId]:[...Mg,br]}}});break}case"execution_ended":q((Cr)=>{let jr=Cr.consoleHistory[ir.scriptId]??[],Mg=Cr.scriptExecInfo[ir.scriptId],$o=!ir.success&&ir.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:ir.error}]:[],br=!ir.success?!0:Mg?.stickyError??!1,_o=!ir.success||br?"error":"success",Xo=ir.duration??0,ag=ir.success&&Xo===0&&(Mg?.duration??0)>0?Mg.duration:ir.duration;return{...Cr,isRunning:!1,consoleHistory:$o.length?{...Cr.consoleHistory,[ir.scriptId]:[...jr,...$o]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[ir.scriptId]:{dot:_o,duration:ag,error:ir.error??Mg?.error,stickyError:br}}}});break;case"error":console.warn("[LumiScript]",ir.message);break}});return v({type:"get_scripts"}),v({type:"get_settings"}),v({type:"get_active_context"}),v({type:"get_injections"}),v({type:"get_tools"}),qr},[e,v]),Yg.useEffect(()=>{if(b==="storage")v({type:"list_collections"})},[b,v]),Yg.useEffect(()=>{if(Gr(null),s)v({type:"count_collection",path:s.path})},[s,v]);let or=Yg.useCallback((qr)=>{q((Zr)=>({...Zr,consoleHistory:{...Zr.consoleHistory,[qr]:[]}}))},[]),Or=Yg.useCallback((qr)=>{q((Zr)=>{let ir=Zr.scriptExecInfo[qr];if(!ir?.stickyError)return Zr;return{...Zr,scriptExecInfo:{...Zr.scriptExecInfo,[qr]:{...ir,dot:"idle",stickyError:!1}}}})},[]);return Hr.jsxDEV("div",{className:"ls-panel",children:[Hr.jsxDEV("div",{className:"ls-tabs",children:[Hr.jsxDEV("button",{className:`ls-tab-pill${b==="manage"?" ls-active":""}`,onClick:()=>n("manage"),children:[Hr.jsxDEV(Mo,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${b==="status"?" ls-active":""}`,onClick:()=>n("status"),children:[Hr.jsxDEV(xb,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${b==="storage"?" ls-active":""}`,onClick:()=>n("storage"),children:[Hr.jsxDEV(de,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[b==="manage"&&Hr.jsxDEV(q3,{scripts:w,activeContext:W,execInfo:m.scriptExecInfo,activeRunScriptId:m.activeScriptId,isRunning:m.isRunning,consoleHistory:m.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:or,onScriptOpened:Or,sendToBackend:v},void 0,!1,void 0,this),b==="status"&&Hr.jsxDEV(lL,{scripts:w,execInfo:m.scriptExecInfo,invocationCounts:V,injections:X,tools:S,sendToBackend:v},void 0,!1,void 0,this),b==="storage"&&Hr.jsxDEV(U3,{variables:_,collections:wr,scripts:w,sendToBackend:v,inspectPath:a,inspectRecords:er,inspectTotal:y,inspectError:Z,inspectStats:Br,inspectRefreshToken:Ar,onInspect:(qr)=>{p(qr),N(null),f(0),k(null)},dropTarget:s,dropTargetCount:Qr,onDrop:vr,onDropConfirm:()=>{if(!s)return;let qr=s.path;if(a===qr)p(null),N(null),f(0),k(null);v({type:"drop_collection",path:qr}),vr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},eL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},lL=({scripts:e,execInfo:v,invocationCounts:b,injections:n,tools:w,sendToBackend:P})=>{let O=e.filter((q)=>q.type==="trigger"&&q.enabled),H=Object.fromEntries(e.map((q)=>[q.id,q.name])),[W,G]=Yg.useState(new Set),m=(q)=>{G((X)=>{let L=new Set(X);if(L.has(q))L.delete(q);else L.add(q);return L})};return Hr.jsxDEV("div",{className:"ls-status-list",children:[Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(Mo,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((q)=>{let X=v[q.id],L=X?.dot??"idle",S={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],T=q.triggers??[],_=b[q.id];return Hr.jsxDEV("div",{className:"ls-status-row",children:[Hr.jsxDEV("div",{className:"ls-status-row-main",children:[Hr.jsxDEV("span",{className:S,title:eL[L]},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-name",children:q.name},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-right",children:[_!==void 0&&_>0&&Hr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${_} time${_!==1?"s":""} this session`,children:["×",_]},void 0,!0,void 0,this),X?.duration!==void 0&&L!=="running"&&Hr.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[X.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),T.length>0?Hr.jsxDEV("div",{className:"ls-status-events",children:T.map((rr)=>Hr.jsxDEV("span",{className:"ls-event-badge",children:[Hr.jsxDEV(Rv,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Hr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&X?.error&&Hr.jsxDEV("div",{className:"ls-status-error-row",children:Hr.jsxDEV("span",{className:"ls-status-error-text",children:X.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(bn,{size:10},void 0,!1,void 0,this),"Active Tools",w.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:w.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:w.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):w.map((q)=>Hr.jsxDEV("div",{className:"ls-tool-row",children:[Hr.jsxDEV("div",{className:"ls-tool-name",title:q.description,children:q.name},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-tool-meta",children:[q.council_eligible&&Hr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:q.scriptName},void 0,!1,void 0,this),Hr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${q.name}`,title:`Unregister "${q.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:q.name}),children:Hr.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(on,{size:10},void 0,!1,void 0,this),"Active Injections",n.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:n.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:n.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):n.map((q)=>{let X=W.has(q.id);return Hr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>m(q.id),children:[Hr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${q.mode}`,title:q.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:q.mode==="intercept"?Hr.jsxDEV(Nb,{size:11},void 0,!1,void 0,this):Hr.jsxDEV(Bb,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-body",children:[Hr.jsxDEV("div",{className:"ls-inject-header-row",children:[Hr.jsxDEV("span",{className:"ls-inject-id",title:q.id,children:q.id},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-meta",children:[Hr.jsxDEV("span",{className:"ls-inject-role",children:q.role},void 0,!1,void 0,this),q.mode==="intercept"&&q.depth>0&&Hr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${q.depth} message${q.depth!==1?"s":""}`,children:["d:",q.depth]},void 0,!0,void 0,this),q.ephemeral&&Hr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Hr.jsxDEV(Q1,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:H[q.scriptId]??q.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-chevron",children:X?Hr.jsxDEV(Re,{size:10},void 0,!1,void 0,this):Hr.jsxDEV(Wo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Hr.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:q.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var xn=tr(vg(),1);var Nr=tr(rg(),1),$3=({onBackendMessage:e,sendToBackend:v})=>{let[b,n]=xn.useState(vt),[w,P]=xn.useState([]);xn.useEffect(()=>{let G=e((m)=>{let q=m;if(q.type==="scripts_updated")P(q.scripts);if(q.type==="settings_updated")n(q.settings)});return v({type:"get_settings"}),v({type:"get_scripts"}),G},[e,v]);let O=w.filter((G)=>G.type==="trigger").length,H=w.filter((G)=>G.type==="library").length,W=(G)=>{v({type:"update_settings",patch:{enabled:G}})};return Nr.jsxDEV("div",{className:"ls-settings",children:[Nr.jsxDEV("div",{className:"ls-settings-header",children:Nr.jsxDEV("span",{className:"ls-settings-title",children:[Nr.jsxDEV(Cl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-toggle-row",children:[Nr.jsxDEV("label",{className:"ls-toggle",children:[Nr.jsxDEV("input",{type:"checkbox",checked:b.enabled,onChange:(G)=>W(G.target.checked)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-counts",children:[Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(Mo,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-count-card",children:[Nr.jsxDEV(G1,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-num",children:H},void 0,!1,void 0,this),Nr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Q1,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(b.scriptTimeoutMs/1000),onChange:(G)=>{let m=Math.max(5,Math.min(300,Number(G.target.value)||60));v({type:"update_settings",patch:{scriptTimeoutMs:m*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:b.consoleHistoryLimit,onChange:(G)=>{let m=Math.max(50,Math.min(2000,Number(G.target.value)||500));v({type:"update_settings",patch:{consoleHistoryLimit:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(vn,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:b.editorFontSize,onChange:(G)=>{let m=Math.max(10,Math.min(24,Number(G.target.value)||12));v({type:"update_settings",patch:{editorFontSize:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-field",children:[Nr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:b.autosaveDebounceMs,onChange:(G)=>{let m=Math.max(300,Math.min(5000,Number(G.target.value)||1200));v({type:"update_settings",patch:{autosaveDebounceMs:m}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-section",children:[Nr.jsxDEV("div",{className:"ls-settings-section-label",children:[Nr.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:b.defaultTriggerTemplate,onChange:(G)=>v({type:"update_settings",patch:{defaultTriggerTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-settings-template-field",children:[Nr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Nr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:b.defaultLibraryTemplate,onChange:(G)=>v({type:"update_settings",patch:{defaultLibraryTemplate:G.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function vL(e){let v=e?.type;return typeof v==="string"&&v.startsWith("dom_")}var Go=new Map;function sh(e,v){Go.set(e,v)}function Te(e){let v=Go.get(e);for(let[b,n]of Qv)if(n.elementId===e){if(v)v.removeEventListener(n.event,n.handler);Qv.delete(b)}Go.delete(e)}var Zn=new Map,Nn=new Map,F1=new Map,Bn=new Map,Qv=new Map;function L3(e,v){return`${e}:${v}`}function hL(e){let v=e.target,b={type:e.type};if(v){if(v.id)b.targetId=v.id;if("value"in v)b.targetValue=v.value;if("checked"in v)b.targetChecked=v.checked;if(v.dataset&&Object.keys(v.dataset).length>0){let n={};for(let[w,P]of Object.entries(v.dataset))if(P!==void 0)n[w]=P;b.dataset=n}}if(e instanceof MouseEvent)b.clientX=e.clientX,b.clientY=e.clientY;else if(typeof TouchEvent<"u"&&e instanceof TouchEvent){let n=e.touches[0]??e.changedTouches[0];if(n)b.clientX=n.clientX,b.clientY=n.clientY}if(e instanceof CustomEvent&&e.detail!==void 0)try{JSON.stringify(e.detail),b.detail=e.detail}catch{}return b}function iL(e,v){return`@scope ([data-ls-script="${v}"]) {
${e}
}`}function bL(e,v=5000){let b=document.querySelector(e);if(b)return Promise.resolve(b);return new Promise((n,w)=>{let P=!1,O=new MutationObserver(()=>{let H=document.querySelector(e);if(H&&!P)P=!0,O.disconnect(),n(H)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),w(Error(`waitForElement: timeout for "${e}"`))},v)})}function nL(e){return e.querySelector('[class*="_bubble_"]')}var ll=new Map,uL=50;function wL(e,v,b){if(ll.size>=uL){let n=ll.keys().next().value;if(n)ll.get(n)?.cancel(),ll.delete(n)}ll.set(e,{scriptId:v,cancel:b})}function tL(e){for(let[v,b]of ll)if(b.scriptId===e)b.cancel(),ll.delete(v)}function F3(e,v,b){let n=v((w)=>{if(!vL(w))return;let P=w;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:H,target:W,html:G,position:m,stableId:q,parentElementId:X}=P;if(Go.has(H)){console.warn(`[LumiScript] dom_inject: elementId "${H}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${H}">${G}</div>`,S=null;if(X){let T=Go.get(X);if(!T){console.warn(`[LumiScript] dom_inject: parentElementId "${X}" not in elementMap — drop`);break}let _=T.querySelector(W);if(!_){console.warn(`[LumiScript] dom_inject: selector "${W}" not found within parent "${X}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,_.insertAdjacentElement(m,rr),S=rr}else S=e.dom.inject(W,L,m);if(S){if(Go.set(H,S),Zn.set(H,O),q)Nn.set(L3(O,q),H)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:H,messageId:W,html:G,position:m,stableId:q}=P,X=(rr)=>{let wr=rr.querySelector("[data-part]"),lr=wr?.getAttribute("data-part")??"character",a=wr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=m==="header"?` data-ls-tint="${lr}"`:"",er=` data-ls-mode="${a}"`,N=`<div data-ls-script="${O}" data-ls-el="${H}"${p}${er}>${G}</div>`,y,f;if(m==="header")y=rr,f="afterbegin";else if(m==="footer"&&a==="minimal")y=rr,f="beforeend";else y=nL(rr)??rr,f="beforeend";let Z=e.dom.inject(y,N,f);if(Go.set(H,Z),Zn.set(H,O),q)Nn.set(L3(O,q),H)},L=`[data-message-id="${W}"]`,S=document.querySelector(L);if(S){X(S);break}let T=!1;wL(H,O,()=>{T=!0}),bL(L).then((rr)=>{if(ll.delete(H),T)return;X(rr)}).catch(()=>{ll.delete(H)});break}case"dom_update":{let O=Go.get(P.elementId);if(!O)break;let H=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;H.innerHTML=P.html;break}case"dom_remove":{I3(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:H,css:W}=P,G=iL(W,O),m=e.dom.addStyle(G);F1.set(H,m),Bn.set(H,O);break}case"dom_remove_style":{let O=F1.get(P.styleId);if(O)O(),F1.delete(P.styleId),Bn.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:H,event:W,preventDefault:G}=P,m=Go.get(O);if(!m)break;let q=(X)=>{if(G)X.preventDefault();let L=hL(X);b({type:"dom_event",elementId:O,listenerId:H,event:W,data:L})};m.addEventListener(W,q),Qv.set(H,{elementId:O,event:W,handler:q});break}case"dom_unlisten":{let O=Qv.get(P.listenerId);if(!O)break;let H=Go.get(O.elementId);if(H)H.removeEventListener(O.event,O.handler);Qv.delete(P.listenerId);break}case"dom_cleanup_script":{let{scriptId:O}=P;tL(O);for(let[H,W]of Zn)if(W===O)I3(H);for(let[H,W]of Bn)if(W===O){let G=F1.get(H);if(G)G();F1.delete(H),Bn.delete(H)}for(let[H]of Nn)if(H.startsWith(O+":"))Nn.delete(H);break}case"dom_make_draggable":{let{elementId:O,handleSelector:H}=P,W=Go.get(O);if(!W)break;let G=!1,m=!1;W.addEventListener("pointerdown",(q)=>{if(q.button!==0)return;if(H&&!q.target.closest(H))return;let X=W.firstElementChild?.firstElementChild??W.firstElementChild??W,L=X.getBoundingClientRect();X.style.transform="none",X.style.top=`${L.top}px`,X.style.left=`${L.left}px`,X.style.bottom="auto",X.style.right="auto",G=!0,m=!1;let S=q.clientX-L.left,T=q.clientY-L.top;X.style.cursor="grabbing";let _=(wr)=>{if(!G)return;m=!0,X.style.top=`${wr.clientY-T}px`,X.style.left=`${wr.clientX-S}px`},rr=()=>{if(!G)return;G=!1,X.style.cursor="",document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",_),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),q.preventDefault()}),W.addEventListener("click",(q)=>{if(m)q.stopImmediatePropagation(),q.preventDefault(),m=!1},!0);break}}});return()=>{n();for(let[,w]of ll)w.cancel();ll.clear();for(let[,w]of Qv){let P=Go.get(w.elementId);if(P)P.removeEventListener(w.event,w.handler)}Qv.clear();for(let[,w]of Go)try{w.remove()}catch{}Go.clear(),Zn.clear(),Nn.clear();for(let[,w]of F1)try{w()}catch{}F1.clear(),Bn.clear()}}function I3(e){for(let[b,n]of Qv)if(n.elementId===e){let w=Go.get(e);if(w)w.removeEventListener(n.event,n.handler);Qv.delete(b)}let v=Go.get(e);if(v)try{v.remove()}catch{}Go.delete(e),Zn.delete(e)}function PL(e){let v=e?.type;return v==="ls_modal_open"||v==="ls_modal_set_title"||v==="ls_modal_dismiss"}var K0=new Map;function x3(e,v,b){let n=v((w)=>{if(!PL(w))return;let P=w;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:H,rootElementId:W,options:G}=P;if(K0.has(H))break;let m;try{m=e.ui.showModal({title:G.title,width:G.width,maxHeight:G.maxHeight,persistent:G.persistent})}catch(X){console.warn("[LumiScript] ctx.ui.showModal failed:",X),b({type:"ls_modal_dismissed",modalId:H});break}sh(W,m.root),m.root.setAttribute("data-ls-script",O),m.root.setAttribute("data-ls-modal",H);let q={modalId:H,rootElementId:W,handle:m,echoed:!1};K0.set(H,q),m.onDismiss(()=>{if(q.echoed)return;q.echoed=!0,Te(W),K0.delete(H),b({type:"ls_modal_dismissed",modalId:H})}),b({type:"ls_modal_opened",modalId:H});break}case"ls_modal_set_title":{let O=K0.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=K0.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Te(O.rootElementId),K0.delete(P.modalId),b({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{n();for(let w of K0.values()){try{w.handle.dismiss()}catch{}Te(w.rootElementId)}K0.clear()}}function OL(e){return e?.type==="ls_context_menu_show"}function N3(e,v,b){let n=v(async(w)=>{if(!OL(w))return;let P=w,O=null;try{O=(await e.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(H){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",H)}b({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{n()}}function HL(e){let v=e?.type;return v==="ls_input_bar_action_register"||v==="ls_input_bar_action_set_label"||v==="ls_input_bar_action_set_subtitle"||v==="ls_input_bar_action_set_enabled"||v==="ls_input_bar_action_destroy"}var Vl=new Map;function AL(e,v){return`${e}:${v}`}function B3(e,v,b){let n=v((w)=>{if(!HL(w))return;let P=w,O=AL(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let H=Vl.get(O);if(H){try{H.destroy()}catch{}Vl.delete(O)}let W;try{W=e.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(G){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",G);break}Vl.set(O,W),W.onClick(()=>{b({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),b({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let H=Vl.get(O);if(!H)break;try{H.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let H=Vl.get(O);if(!H)break;if(typeof H.setSubtitle!=="function")break;try{H.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let H=Vl.get(O);if(!H)break;try{H.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let H=Vl.get(O);if(!H)break;try{H.destroy()}catch{}Vl.delete(O);break}}});return()=>{n();for(let w of Vl.values())try{w.destroy()}catch{}Vl.clear()}}function qL(e){let v=e?.type;return v==="ls_float_widget_create"||v==="ls_float_widget_move"||v==="ls_float_widget_set_visible"||v==="ls_float_widget_destroy"}var zv=new Map;function Z3(e,v,b){let n=v((w)=>{if(!qL(w))return;let P=w;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:H,rootElementId:W,options:G}=P,m=zv.get(H);if(m){try{m.handle.destroy()}catch{}Te(m.rootElementId),zv.delete(H)}let q;try{q=e.ui.createFloatWidget({width:G.width,height:G.height,initialPosition:G.initialPosition,snapToEdge:G.snapToEdge,tooltip:G.tooltip,chromeless:G.chromeless})}catch(X){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",X);break}sh(W,q.root),q.root.setAttribute("data-ls-script",O),q.root.setAttribute("data-ls-widget",H),zv.set(H,{widgetId:H,rootElementId:W,handle:q}),q.onDragEnd((X)=>{b({type:"ls_float_widget_drag_end",widgetId:H,x:X.x,y:X.y})}),b({type:"ls_float_widget_created",widgetId:H});break}case"ls_float_widget_move":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=zv.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Te(O.rootElementId),zv.delete(P.widgetId);break}}});return()=>{n();for(let w of zv.values()){try{w.handle.destroy()}catch{}Te(w.rootElementId)}zv.clear()}}function RL(e){let v=e?.type;return v==="ls_drawer_tab_register"||v==="ls_drawer_tab_set_title"||v==="ls_drawer_tab_set_short_name"||v==="ls_drawer_tab_set_badge"||v==="ls_drawer_tab_activate"||v==="ls_drawer_tab_destroy"}var vl=new Map;function ML(e,v){return`${e}:${v}`}function C3(e,v,b){let n=v((w)=>{if(!RL(w))return;let P=w,O=ML(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let H=vl.get(O);if(H){try{H.handle.destroy()}catch{}Te(H.rootElementId),vl.delete(O)}let W;try{W=e.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(G){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",G);break}sh(P.rootElementId,W.root),W.root.setAttribute("data-ls-script",P.scriptId),W.root.setAttribute("data-ls-tab",P.tabId),vl.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:W}),W.onActivate(()=>{b({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),b({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let H=vl.get(O);if(!H)break;try{H.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let H=vl.get(O);if(!H)break;try{H.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let H=vl.get(O);if(!H)break;try{H.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let H=vl.get(O);if(!H)break;try{H.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let H=vl.get(O);if(!H)break;try{H.handle.destroy()}catch{}Te(H.rootElementId),vl.delete(O);break}}});return()=>{n();for(let w of vl.values()){try{w.handle.destroy()}catch{}Te(w.rootElementId)}vl.clear()}}var Cn=tr(rg(),1);function hfg(e){let v=[],b=e.dom.addStyle(UM);v.push(b);let n=[],w=e.onBackendMessage((rr)=>{for(let wr of n)wr(rr)});v.push(w);let P=(rr)=>{return n.push(rr),()=>{let wr=n.indexOf(rr);if(wr!==-1)n.splice(wr,1)}},O=(rr)=>{e.sendToBackend(rr)},H=F3(e,P,O);v.push(H);let W=x3(e,P,O);v.push(W);let G=N3(e,P,O);v.push(G);let m=B3(e,P,O);v.push(m);let q=Z3(e,P,O);v.push(q);let X=C3(e,P,O);v.push(X),O({type:"frontend_ready"});let L=e.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),S=zP.createRoot(L.root);S.render(Cn.jsxDEV(QP.StrictMode,{children:Cn.jsxDEV(K3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>{try{S.unmount()}catch{}try{L.destroy()}catch{}});let T=e.ui.mount("settings_extensions"),_=zP.createRoot(T);return _.render(Cn.jsxDEV(QP.StrictMode,{children:Cn.jsxDEV($3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>_.unmount()),()=>{for(let rr of v)try{rr()}catch{}e.dom.cleanup()}}export{hfg as setup};
