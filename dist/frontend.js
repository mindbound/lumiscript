var WQ=Object.create;var{getPrototypeOf:RQ,defineProperty:t8,getOwnPropertyNames:GQ}=Object;var XQ=Object.prototype.hasOwnProperty;function YQ(l){return this[l]}var JQ,QQ,Pr=(l,e,w)=>{var u=l!=null&&typeof l==="object";if(u){var n=e?JQ??=new WeakMap:QQ??=new WeakMap,H=n.get(l);if(H)return H}w=l!=null?WQ(RQ(l)):{};let O=e||!l||!l.__esModule?t8(w,"default",{value:l,enumerable:!0}):w;for(let q of GQ(l))if(!XQ.call(O,q))t8(O,q,{get:YQ.bind(l,q),enumerable:!0});if(u)n.set(l,O);return O};var Re=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports);var zQ=(l)=>l;function KQ(l,e){this[l]=zQ.bind(null,e)}var UQ=(l,e)=>{for(var w in e)t8(l,w,{get:e[w],enumerable:!0,configurable:!0,set:KQ.bind(e,w)})};var eg=Re(($Q,r2)=>{(function(){function l(W,I){Object.defineProperty(u.prototype,W,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function e(W){if(W===null||typeof W!=="object")return null;return W=mo&&W[mo]||W["@@iterator"],typeof W==="function"?W:null}function w(W,I){W=(W=W.constructor)&&(W.displayName||W.name)||"ReactClass";var gr=W+"."+I;wr[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,W),wr[gr]=!0)}function u(W,I,gr){this.props=W,this.context=I,this.refs=rl,this.updater=gr||_o}function n(){}function H(W,I,gr){this.props=W,this.context=I,this.refs=rl,this.updater=gr||_o}function O(){}function q(W){return""+W}function R(W){try{q(W);var I=!1}catch(Mr){I=!0}if(I){I=console;var gr=I.error,ur=typeof Symbol==="function"&&Symbol.toStringTag&&W[Symbol.toStringTag]||W.constructor.name||"Object";return gr.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ur),q(W)}}function X(W){if(W==null)return null;if(typeof W==="function")return W.$$typeof===rb?null:W.displayName||W.name||null;if(typeof W==="string")return W;switch(W){case Xr:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case xr:return"Suspense";case br:return"SuspenseList";case Wg:return"Activity"}if(typeof W==="object")switch(typeof W.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),W.$$typeof){case zr:return"Portal";case Or:return W.displayName||"Context";case or:return(W._context.displayName||"Context")+".Consumer";case Ar:var I=W.render;return W=W.displayName,W||(W=I.displayName||I.name||"",W=W!==""?"ForwardRef("+W+")":"ForwardRef"),W;case Cr:return I=W.displayName||null,I!==null?I:X(W.type)||"Memo";case fr:I=W._payload,W=W._init;try{return X(W(I))}catch(gr){}}return null}function G(W){if(W===Xr)return"<>";if(typeof W==="object"&&W!==null&&W.$$typeof===fr)return"<...>";try{var I=X(W);return I?"<"+I+">":"<...>"}catch(gr){return"<...>"}}function A(){var W=Sr.A;return W===null?null:W.getOwner()}function Y(){return Error("react-stack-top-frame")}function L(W){if(Ne.call(W,"key")){var I=Object.getOwnPropertyDescriptor(W,"key").get;if(I&&I.isReactWarning)return!1}return W.key!==void 0}function S(W,I){function gr(){Cw||(Cw=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}gr.isReactWarning=!0,Object.defineProperty(W,"key",{get:gr,configurable:!0})}function T(){var W=X(this.type);return m1[W]||(m1[W]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),W=this.props.ref,W!==void 0?W:null}function _(W,I,gr,ur,Mr,Fr){var Nr=gr.ref;return W={$$typeof:er,type:W,key:I,props:gr,_owner:ur},(Nr!==void 0?Nr:null)!==null?Object.defineProperty(W,"ref",{enumerable:!1,get:T}):Object.defineProperty(W,"ref",{enumerable:!1,value:null}),W._store={},Object.defineProperty(W._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(W,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(W,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Mr}),Object.defineProperty(W,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(W.props),Object.freeze(W)),W}function rr(W,I){return I=_(W.type,I,W.props,W._owner,W._debugStack,W._debugTask),W._store&&(I._store.validated=W._store.validated),I}function nr(W){vr(W)?W._store&&(W._store.validated=1):typeof W==="object"&&W!==null&&W.$$typeof===fr&&(W._payload.status==="fulfilled"?vr(W._payload.value)&&W._payload.value._store&&(W._payload.value._store.validated=1):W._store&&(W._store.validated=1))}function vr(W){return typeof W==="object"&&W!==null&&W.$$typeof===er}function a(W){var I={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(gr){return I[gr]})}function p(W,I){return typeof W==="object"&&W!==null&&W.key!=null?(R(W.key),a(""+W.key)):I.toString(36)}function lr(W){switch(W.status){case"fulfilled":return W.value;case"rejected":throw W.reason;default:switch(typeof W.status==="string"?W.then(O,O):(W.status="pending",W.then(function(I){W.status==="pending"&&(W.status="fulfilled",W.value=I)},function(I){W.status==="pending"&&(W.status="rejected",W.reason=I)})),W.status){case"fulfilled":return W.value;case"rejected":throw W.reason}}throw W}function B(W,I,gr,ur,Mr){var Fr=typeof W;if(Fr==="undefined"||Fr==="boolean")W=null;var Nr=!1;if(W===null)Nr=!0;else switch(Fr){case"bigint":case"string":case"number":Nr=!0;break;case"object":switch(W.$$typeof){case er:case zr:Nr=!0;break;case fr:return Nr=W._init,B(Nr(W._payload),I,gr,ur,Mr)}}if(Nr){Nr=W,Mr=Mr(Nr);var lg=ur===""?"."+p(Nr,0):ur;return Hg(Mr)?(gr="",lg!=null&&(gr=lg.replace(Ze,"$&/")+"/"),B(Mr,I,gr,"",function(Jo){return Jo})):Mr!=null&&(vr(Mr)&&(Mr.key!=null&&(Nr&&Nr.key===Mr.key||R(Mr.key)),gr=rr(Mr,gr+(Mr.key==null||Nr&&Nr.key===Mr.key?"":(""+Mr.key).replace(Ze,"$&/")+"/")+lg),ur!==""&&Nr!=null&&vr(Nr)&&Nr.key==null&&Nr._store&&!Nr._store.validated&&(gr._store.validated=2),Mr=gr),I.push(Mr)),1}if(Nr=0,lg=ur===""?".":ur+":",Hg(W))for(var Jr=0;Jr<W.length;Jr++)ur=W[Jr],Fr=lg+p(ur,Jr),Nr+=B(ur,I,gr,Fr,Mr);else if(Jr=e(W),typeof Jr==="function")for(Jr===W.entries&&(Be||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Be=!0),W=Jr.call(W),Jr=0;!(ur=W.next()).done;)ur=ur.value,Fr=lg+p(ur,Jr++),Nr+=B(ur,I,gr,Fr,Mr);else if(Fr==="object"){if(typeof W.then==="function")return B(lr(W),I,gr,ur,Mr);throw I=String(W),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Nr}function y(W,I,gr){if(W==null)return W;var ur=[],Mr=0;return B(W,ur,"","",function(Fr){return I.call(gr,Fr,Mr++)}),ur}function j(W){if(W._status===-1){var I=W._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=W._result;var gr=I();if(gr.then(function(Mr){if(W._status===0||W._status===-1){W._status=1,W._result=Mr;var Fr=W._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Mr)}},function(Mr){if(W._status===0||W._status===-1){W._status=2,W._result=Mr;var Fr=W._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Mr)}}),I=W._ioInfo,I!=null){I.value=gr;var ur=gr.displayName;typeof ur==="string"&&(I.name=ur)}W._status===-1&&(W._status=0,W._result=gr)}if(W._status===1)return I=W._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw W._result}function x(){var W=Sr.H;return W===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),W}function Wr(){Sr.asyncTransitions--}function tr(W){if(I1===null)try{var I=("require"+Math.random()).slice(0,7);I1=(r2&&r2[I]).call(r2,"timers").setImmediate}catch(gr){I1=function(ur){Tw===!1&&(Tw=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Mr=new MessageChannel;Mr.port1.onmessage=ur,Mr.port2.postMessage(void 0)}}return I1(W)}function Gr(W){return 1<W.length&&typeof AggregateError==="function"?AggregateError(W):W[0]}function Zr(W,I){I!==F1-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F1=I}function k(W,I,gr){var ur=Sr.actQueue;if(ur!==null)if(ur.length!==0)try{s(ur),tr(function(){return k(W,I,gr)});return}catch(Mr){Sr.thrownErrors.push(Mr)}else Sr.actQueue=null;0<Sr.thrownErrors.length?(ur=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,gr(ur)):I(W)}function s(W){if(!B1){B1=!0;var I=0;try{for(;I<W.length;I++){var gr=W[I];do{Sr.didUsePromise=!1;var ur=gr(!1);if(ur!==null){if(Sr.didUsePromise){W[I]=gr,W.splice(0,I);return}gr=ur}else break}while(1)}W.length=0}catch(Mr){W.splice(0,I+1),Sr.thrownErrors.push(Mr)}finally{B1=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var er=Symbol.for("react.transitional.element"),zr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),or=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),Ar=Symbol.for("react.forward_ref"),xr=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Wg=Symbol.for("react.activity"),mo=Symbol.iterator,wr={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(W){w(W,"forceUpdate")},enqueueReplaceState:function(W){w(W,"replaceState")},enqueueSetState:function(W){w(W,"setState")}},Yo=Object.assign,rl={};Object.freeze(rl),u.prototype.isReactComponent={},u.prototype.setState=function(W,I){if(typeof W!=="object"&&typeof W!=="function"&&W!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,I,"setState")},u.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};var ag={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for($0 in ag)ag.hasOwnProperty($0)&&l($0,ag[$0]);n.prototype=u.prototype,ag=H.prototype=new n,ag.constructor=H,Yo(ag,u.prototype),ag.isPureReactComponent=!0;var Hg=Array.isArray,rb=Symbol.for("react.client.reference"),Sr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Ne=Object.prototype.hasOwnProperty,Rg=console.createTask?console.createTask:function(){return null};ag={react_stack_bottom_frame:function(W){return W()}};var Cw,hv,m1={},L1=ag.react_stack_bottom_frame.bind(ag,Y)(),B2=Rg(G(Y)),Be=!1,Ze=/\/+/g,U0=typeof reportError==="function"?reportError:function(W){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof W==="object"&&W!==null&&typeof W.message==="string"?String(W.message):String(W),error:W});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",W);return}console.error(W)},Tw=!1,I1=null,F1=0,N1=!1,B1=!1,gb=typeof queueMicrotask==="function"?function(W){queueMicrotask(function(){return queueMicrotask(W)})}:tr;ag=Object.freeze({__proto__:null,c:function(W){return x().useMemoCache(W)}});var $0={map:y,forEach:function(W,I,gr){y(W,function(){I.apply(this,arguments)},gr)},count:function(W){var I=0;return y(W,function(){I++}),I},toArray:function(W){return y(W,function(I){return I})||[]},only:function(W){if(!vr(W))throw Error("React.Children.only expected to receive a single React element child.");return W}};$Q.Activity=Wg,$Q.Children=$0,$Q.Component=u,$Q.Fragment=Xr,$Q.Profiler=F,$Q.PureComponent=H,$Q.StrictMode=V,$Q.Suspense=xr,$Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sr,$Q.__COMPILER_RUNTIME=ag,$Q.act=function(W){var I=Sr.actQueue,gr=F1;F1++;var ur=Sr.actQueue=I!==null?I:[],Mr=!1;try{var Fr=W()}catch(Jr){Sr.thrownErrors.push(Jr)}if(0<Sr.thrownErrors.length)throw Zr(I,gr),W=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,W;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var Nr=Fr;return gb(function(){Mr||N1||(N1=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Jr,Jo){Mr=!0,Nr.then(function(gl){if(Zr(I,gr),gr===0){try{s(ur),tr(function(){return k(gl,Jr,Jo)})}catch(ob){Sr.thrownErrors.push(ob)}if(0<Sr.thrownErrors.length){var m0=Gr(Sr.thrownErrors);Sr.thrownErrors.length=0,Jo(m0)}}else Jr(gl)},function(gl){Zr(I,gr),0<Sr.thrownErrors.length?(gl=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,Jo(gl)):Jo(gl)})}}}var lg=Fr;if(Zr(I,gr),gr===0&&(s(ur),ur.length!==0&&gb(function(){Mr||N1||(N1=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sr.actQueue=null),0<Sr.thrownErrors.length)throw W=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,W;return{then:function(Jr,Jo){Mr=!0,gr===0?(Sr.actQueue=ur,tr(function(){return k(lg,Jr,Jo)})):Jr(lg)}}},$Q.cache=function(W){return function(){return W.apply(null,arguments)}},$Q.cacheSignal=function(){return null},$Q.captureOwnerStack=function(){var W=Sr.getCurrentStack;return W===null?null:W()},$Q.cloneElement=function(W,I,gr){if(W===null||W===void 0)throw Error("The argument must be a React element, but you passed "+W+".");var ur=Yo({},W.props),Mr=W.key,Fr=W._owner;if(I!=null){var Nr;r:{if(Ne.call(I,"ref")&&(Nr=Object.getOwnPropertyDescriptor(I,"ref").get)&&Nr.isReactWarning){Nr=!1;break r}Nr=I.ref!==void 0}Nr&&(Fr=A()),L(I)&&(R(I.key),Mr=""+I.key);for(lg in I)!Ne.call(I,lg)||lg==="key"||lg==="__self"||lg==="__source"||lg==="ref"&&I.ref===void 0||(ur[lg]=I[lg])}var lg=arguments.length-2;if(lg===1)ur.children=gr;else if(1<lg){Nr=Array(lg);for(var Jr=0;Jr<lg;Jr++)Nr[Jr]=arguments[Jr+2];ur.children=Nr}ur=_(W.type,Mr,ur,Fr,W._debugStack,W._debugTask);for(Mr=2;Mr<arguments.length;Mr++)nr(arguments[Mr]);return ur},$Q.createContext=function(W){return W={$$typeof:Or,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null},W.Provider=W,W.Consumer={$$typeof:or,_context:W},W._currentRenderer=null,W._currentRenderer2=null,W},$Q.createElement=function(W,I,gr){for(var ur=2;ur<arguments.length;ur++)nr(arguments[ur]);ur={};var Mr=null;if(I!=null)for(Jr in hv||!("__self"in I)||"key"in I||(hv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(R(I.key),Mr=""+I.key),I)Ne.call(I,Jr)&&Jr!=="key"&&Jr!=="__self"&&Jr!=="__source"&&(ur[Jr]=I[Jr]);var Fr=arguments.length-2;if(Fr===1)ur.children=gr;else if(1<Fr){for(var Nr=Array(Fr),lg=0;lg<Fr;lg++)Nr[lg]=arguments[lg+2];Object.freeze&&Object.freeze(Nr),ur.children=Nr}if(W&&W.defaultProps)for(Jr in Fr=W.defaultProps,Fr)ur[Jr]===void 0&&(ur[Jr]=Fr[Jr]);Mr&&S(ur,typeof W==="function"?W.displayName||W.name||"Unknown":W);var Jr=1e4>Sr.recentlyCreatedOwnerStacks++;return _(W,Mr,ur,A(),Jr?Error("react-stack-top-frame"):L1,Jr?Rg(G(W)):B2)},$Q.createRef=function(){var W={current:null};return Object.seal(W),W},$Q.forwardRef=function(W){W!=null&&W.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof W!=="function"?console.error("forwardRef requires a render function but was given %s.",W===null?"null":typeof W):W.length!==0&&W.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",W.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),W!=null&&W.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:Ar,render:W},gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,W.name||W.displayName||(Object.defineProperty(W,"name",{value:ur}),W.displayName=ur)}}),I},$Q.isValidElement=vr,$Q.lazy=function(W){W={_status:-1,_result:W};var I={$$typeof:fr,_payload:W,_init:j},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return W._ioInfo=gr,I._debugInfo=[{awaited:gr}],I},$Q.memo=function(W,I){W==null&&console.error("memo: The first argument must be a component. Instead received: %s",W===null?"null":typeof W),I={$$typeof:Cr,type:W,compare:I===void 0?null:I};var gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,W.name||W.displayName||(Object.defineProperty(W,"name",{value:ur}),W.displayName=ur)}}),I},$Q.startTransition=function(W){var I=Sr.T,gr={};gr._updatedFibers=new Set,Sr.T=gr;try{var ur=W(),Mr=Sr.S;Mr!==null&&Mr(gr,ur),typeof ur==="object"&&ur!==null&&typeof ur.then==="function"&&(Sr.asyncTransitions++,ur.then(Wr,Wr),ur.then(O,U0))}catch(Fr){U0(Fr)}finally{I===null&&gr._updatedFibers&&(W=gr._updatedFibers.size,gr._updatedFibers.clear(),10<W&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&gr.types!==null&&(I.types!==null&&I.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=gr.types),Sr.T=I}},$Q.unstable_useCacheRefresh=function(){return x().useCacheRefresh()},$Q.use=function(W){return x().use(W)},$Q.useActionState=function(W,I,gr){return x().useActionState(W,I,gr)},$Q.useCallback=function(W,I){return x().useCallback(W,I)},$Q.useContext=function(W){var I=x();return W.$$typeof===or&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(W)},$Q.useDebugValue=function(W,I){return x().useDebugValue(W,I)},$Q.useDeferredValue=function(W,I){return x().useDeferredValue(W,I)},$Q.useEffect=function(W,I){return W==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useEffect(W,I)},$Q.useEffectEvent=function(W){return x().useEffectEvent(W)},$Q.useId=function(){return x().useId()},$Q.useImperativeHandle=function(W,I,gr){return x().useImperativeHandle(W,I,gr)},$Q.useInsertionEffect=function(W,I){return W==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useInsertionEffect(W,I)},$Q.useLayoutEffect=function(W,I){return W==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useLayoutEffect(W,I)},$Q.useMemo=function(W,I){return x().useMemo(W,I)},$Q.useOptimistic=function(W,I){return x().useOptimistic(W,I)},$Q.useReducer=function(W,I,gr){return x().useReducer(W,I,gr)},$Q.useRef=function(W){return x().useRef(W)},$Q.useState=function(W){return x().useState(W)},$Q.useSyncExternalStore=function(W,I,gr){return x().useSyncExternalStore(W,I,gr)},$Q.useTransition=function(){return x().useTransition()},$Q.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var PW=Re((mQ)=>{(function(){function l(){if(a=!1,y){var k=mQ.unstable_now();Wr=k;var s=!0;try{r:{nr=!1,vr&&(vr=!1,lr(j),j=-1),rr=!0;var er=_;try{g:{H(k);for(T=w(Y);T!==null&&!(T.expirationTime>k&&q());){var zr=T.callback;if(typeof zr==="function"){T.callback=null,_=T.priorityLevel;var Xr=zr(T.expirationTime<=k);if(k=mQ.unstable_now(),typeof Xr==="function"){T.callback=Xr,H(k),s=!0;break g}T===w(Y)&&u(Y),H(k)}else u(Y);T=w(Y)}if(T!==null)s=!0;else{var V=w(L);V!==null&&R(O,V.startTime-k),s=!1}}break r}finally{T=null,_=er,rr=!1}s=void 0}}finally{s?tr():y=!1}}}function e(k,s){var er=k.length;k.push(s);r:for(;0<er;){var zr=er-1>>>1,Xr=k[zr];if(0<n(Xr,s))k[zr]=s,k[er]=Xr,er=zr;else break r}}function w(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var s=k[0],er=k.pop();if(er!==s){k[0]=er;r:for(var zr=0,Xr=k.length,V=Xr>>>1;zr<V;){var F=2*(zr+1)-1,or=k[F],Or=F+1,Ar=k[Or];if(0>n(or,er))Or<Xr&&0>n(Ar,or)?(k[zr]=Ar,k[Or]=er,zr=Or):(k[zr]=or,k[F]=er,zr=F);else if(Or<Xr&&0>n(Ar,er))k[zr]=Ar,k[Or]=er,zr=Or;else break r}}return s}function n(k,s){var er=k.sortIndex-s.sortIndex;return er!==0?er:k.id-s.id}function H(k){for(var s=w(L);s!==null;){if(s.callback===null)u(L);else if(s.startTime<=k)u(L),s.sortIndex=s.expirationTime,e(Y,s);else break;s=w(L)}}function O(k){if(vr=!1,H(k),!nr)if(w(Y)!==null)nr=!0,y||(y=!0,tr());else{var s=w(L);s!==null&&R(O,s.startTime-k)}}function q(){return a?!0:mQ.unstable_now()-Wr<x?!1:!0}function R(k,s){j=p(function(){k(mQ.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),mQ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var X=performance;mQ.unstable_now=function(){return X.now()}}else{var G=Date,A=G.now();mQ.unstable_now=function(){return G.now()-A}}var Y=[],L=[],S=1,T=null,_=3,rr=!1,nr=!1,vr=!1,a=!1,p=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null,y=!1,j=-1,x=5,Wr=-1;if(typeof B==="function")var tr=function(){B(l)};else if(typeof MessageChannel<"u"){var Gr=new MessageChannel,Zr=Gr.port2;Gr.port1.onmessage=l,tr=function(){Zr.postMessage(null)}}else tr=function(){p(l,0)};mQ.unstable_IdlePriority=5,mQ.unstable_ImmediatePriority=1,mQ.unstable_LowPriority=4,mQ.unstable_NormalPriority=3,mQ.unstable_Profiling=null,mQ.unstable_UserBlockingPriority=2,mQ.unstable_cancelCallback=function(k){k.callback=null},mQ.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<k?Math.floor(1000/k):5},mQ.unstable_getCurrentPriorityLevel=function(){return _},mQ.unstable_next=function(k){switch(_){case 1:case 2:case 3:var s=3;break;default:s=_}var er=_;_=s;try{return k()}finally{_=er}},mQ.unstable_requestPaint=function(){a=!0},mQ.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var er=_;_=k;try{return s()}finally{_=er}},mQ.unstable_scheduleCallback=function(k,s,er){var zr=mQ.unstable_now();switch(typeof er==="object"&&er!==null?(er=er.delay,er=typeof er==="number"&&0<er?zr+er:zr):er=zr,k){case 1:var Xr=-1;break;case 2:Xr=250;break;case 5:Xr=1073741823;break;case 4:Xr=1e4;break;default:Xr=5000}return Xr=er+Xr,k={id:S++,callback:s,priorityLevel:k,startTime:er,expirationTime:Xr,sortIndex:-1},er>zr?(k.sortIndex=er,e(L,k),w(Y)===null&&k===w(L)&&(vr?(lr(j),j=-1):vr=!0,R(O,er-zr))):(k.sortIndex=Xr,e(Y,k),nr||rr||(nr=!0,y||(y=!0,tr()))),k},mQ.unstable_shouldYield=q,mQ.unstable_wrapCallback=function(k){var s=_;return function(){var er=_;_=s;try{return k.apply(this,arguments)}finally{_=er}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var HW=Re((LQ)=>{var A8=Pr(eg());(function(){function l(){}function e(G){return""+G}function w(G,A,Y){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{e(L);var S=!1}catch(T){S=!0}return S&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),e(L)),{$$typeof:R,key:L==null?null:""+L,children:G,containerInfo:A,implementation:Y}}function u(G,A){if(G==="font")return"";if(typeof A==="string")return A==="use-credentials"?A:""}function n(G){return G===null?"`null`":G===void 0?"`undefined`":G===""?"an empty string":'something with type "'+typeof G+'"'}function H(G){return G===null?"`null`":G===void 0?"`undefined`":G===""?"an empty string":typeof G==="string"?JSON.stringify(G):typeof G==="number"?"`"+G+"`":'something with type "'+typeof G+'"'}function O(){var G=X.H;return G===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),G}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var q={d:{f:l,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},R=Symbol.for("react.portal"),X=A8.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),LQ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,LQ.createPortal=function(G,A){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error("Target container is not a DOM element.");return w(G,A,null,Y)},LQ.flushSync=function(G){var A=X.T,Y=q.p;try{if(X.T=null,q.p=2,G)return G()}finally{X.T=A,q.p=Y,q.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},LQ.preconnect=function(G,A){typeof G==="string"&&G?A!=null&&typeof A!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",H(A)):A!=null&&typeof A.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",n(A.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G)),typeof G==="string"&&(A?(A=A.crossOrigin,A=typeof A==="string"?A==="use-credentials"?A:"":void 0):A=null,q.d.C(G,A))},LQ.prefetchDNS=function(G){if(typeof G!=="string"||!G)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G));else if(1<arguments.length){var A=arguments[1];typeof A==="object"&&A.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",H(A)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",H(A))}typeof G==="string"&&q.d.D(G)},LQ.preinit=function(G,A){if(typeof G==="string"&&G?A==null||typeof A!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",H(A)):A.as!=="style"&&A.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',H(A.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G)),typeof G==="string"&&A&&typeof A.as==="string"){var Y=A.as,L=u(Y,A.crossOrigin),S=typeof A.integrity==="string"?A.integrity:void 0,T=typeof A.fetchPriority==="string"?A.fetchPriority:void 0;Y==="style"?q.d.S(G,typeof A.precedence==="string"?A.precedence:void 0,{crossOrigin:L,integrity:S,fetchPriority:T}):Y==="script"&&q.d.X(G,{crossOrigin:L,integrity:S,fetchPriority:T,nonce:typeof A.nonce==="string"?A.nonce:void 0})}},LQ.preinitModule=function(G,A){var Y="";if(typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A!==void 0&&typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":A&&("as"in A)&&A.as!=="script"&&(Y+=" The `as` option encountered was "+H(A.as)+"."),Y)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",Y);else switch(Y=A&&typeof A.as==="string"?A.as:"script",Y){case"script":break;default:Y=H(Y),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',Y,G)}if(typeof G==="string")if(typeof A==="object"&&A!==null){if(A.as==null||A.as==="script")Y=u(A.as,A.crossOrigin),q.d.M(G,{crossOrigin:Y,integrity:typeof A.integrity==="string"?A.integrity:void 0,nonce:typeof A.nonce==="string"?A.nonce:void 0})}else A==null&&q.d.M(G)},LQ.preload=function(G,A){var Y="";if(typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A==null||typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":typeof A.as==="string"&&A.as||(Y+=" The `as` option encountered was "+n(A.as)+"."),Y&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',Y),typeof G==="string"&&typeof A==="object"&&A!==null&&typeof A.as==="string"){Y=A.as;var L=u(Y,A.crossOrigin);q.d.L(G,Y,{crossOrigin:L,integrity:typeof A.integrity==="string"?A.integrity:void 0,nonce:typeof A.nonce==="string"?A.nonce:void 0,type:typeof A.type==="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority==="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy==="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet==="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes==="string"?A.imageSizes:void 0,media:typeof A.media==="string"?A.media:void 0})}},LQ.preloadModule=function(G,A){var Y="";typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A!==void 0&&typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":A&&("as"in A)&&typeof A.as!=="string"&&(Y+=" The `as` option encountered was "+n(A.as)+"."),Y&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',Y),typeof G==="string"&&(A?(Y=u(A.as,A.crossOrigin),q.d.m(G,{as:typeof A.as==="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Y,integrity:typeof A.integrity==="string"?A.integrity:void 0})):q.d.m(G))},LQ.requestFormReset=function(G){q.d.r(G)},LQ.unstable_batchedUpdates=function(G,A){return G(A)},LQ.useFormState=function(G,A,Y){return O().useFormState(G,A,Y)},LQ.useFormStatus=function(){return O().useHostTransitionStatus()},LQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Ch=Re((VI,OW)=>{OW.exports=HW()});var qW=Re((IQ)=>{var vg=Pr(PW()),Th=Pr(eg()),M8=Pr(Ch());(function(){function l(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function e(r,g,o,v){if(o>=g.length)return v;var h=g[o],b=lo(r)?r.slice():cr({},r);return b[h]=e(r[h],g,o+1,v),b}function w(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var v=0;v<o.length-1;v++)if(g[v]!==o[v]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return u(r,g,o,0)}}function u(r,g,o,v){var h=g[v],b=lo(r)?r.slice():cr({},r);return v+1===g.length?(b[o[v]]=b[h],lo(b)?b.splice(h,1):delete b[h]):b[h]=u(r[h],g,o,v+1),b}function n(r,g,o){var v=g[o],h=lo(r)?r.slice():cr({},r);if(o+1===g.length)return lo(h)?h.splice(v,1):delete h[v],h;return h[v]=n(r[v],g,o+1),h}function H(){return!1}function O(){return null}function q(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function R(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function X(){}function G(){}function A(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function Y(r,g,o,v){return new wX(r,g,o,v)}function L(r,g){r.context===f0&&(Z4(r.current,2,g,r,null,null),je())}function S(r,g){if(Ul!==null){var o=g.staleFamilies;g=g.updatedFamilies,Ub(),MH(r.current,g,o),je()}}function T(r){Ul=r}function _(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function nr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function vr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,v=g;;){var h=o.return;if(h===null)break;var b=h.alternate;if(b===null){if(v=h.return,v!==null){o=v;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===o)return a(h),r;if(b===v)return a(h),g;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==v.return)o=h,v=b;else{for(var i=!1,P=h.child;P;){if(P===o){i=!0,o=h,v=b;break}if(P===v){i=!0,v=h,o=b;break}P=P.sibling}if(!i){for(P=b.child;P;){if(P===o){i=!0,o=b,v=h;break}if(P===v){i=!0,v=b,o=h;break}P=P.sibling}if(!i)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==v)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function lr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=lr(r),g!==null)return g;r=r.sibling}return null}function B(r){if(r===null||typeof r!=="object")return null;return r=Qt&&r[Qt]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===$Y?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case oh:return"Fragment";case D4:return"Profiler";case au:return"StrictMode";case _4:return"Suspense";case y4:return"SuspenseList";case E4:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case gh:return"Portal";case Jv:return r.displayName||"Context";case V4:return(r._context.displayName||"Context")+".Consumer";case Cb:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ju:return g=r.displayName||null,g!==null?g:y(r.type)||"Memo";case il:g=r._payload,r=r._init;try{return y(r(g))}catch(o){}}return null}function j(r){return typeof r.tag==="number"?x(r):typeof r.name==="string"?r.name:null}function x(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(g);case 8:return g===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return x(r.return)}return null}function Wr(r){return{current:r}}function tr(r,g){0>sv?console.error("Unexpected pop."):(g!==a4[sv]&&console.error("Unexpected Fiber popped."),r.current=c4[sv],c4[sv]=null,a4[sv]=null,sv--)}function Gr(r,g,o){sv++,c4[sv]=r.current,a4[sv]=o,r.current=g}function Zr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){Gr(_0,g,r),Gr(Tb,r,r),Gr(V0,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?jq(g):H0:H0;break;default:if(o=g.tagName,g=g.namespaceURI)g=jq(g),g=fq(g,o);else switch(o){case"svg":g=Zh;break;case"math":g=ci;break;default:g=H0}}o=o.toLowerCase(),o=VP(null,o),o={context:g,ancestorInfo:o},tr(V0,r),Gr(V0,o,r)}function s(r){tr(V0,r),tr(Tb,r),tr(_0,r)}function er(){return Zr(V0.current)}function zr(r){r.memoizedState!==null&&Gr(fu,r,r);var g=Zr(V0.current),o=r.type,v=fq(g.context,o);o=VP(g.ancestorInfo,o),v={context:v,ancestorInfo:o},g!==v&&(Gr(Tb,r,r),Gr(V0,v,r))}function Xr(r){Tb.current===r&&(tr(V0,r),tr(Tb,r)),fu.current===r&&(tr(fu,r),m5._currentValue=We)}function V(){}function F(){if(Sb===0){zt=console.log,Kt=console.info,Ut=console.warn,$t=console.error,mt=console.group,Lt=console.groupCollapsed,It=console.groupEnd;var r={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Sb++}function or(){if(Sb--,Sb===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:zt}),info:cr({},r,{value:Kt}),warn:cr({},r,{value:Ut}),error:cr({},r,{value:$t}),group:cr({},r,{value:mt}),groupCollapsed:cr({},r,{value:Lt}),groupEnd:cr({},r,{value:It})})}0>Sb&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Or(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Ar(r){if(j4===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);j4=g&&g[1]||"",Ft=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j4+r+Ft}function xr(r,g){if(!r||f4)return"";var o=p4.get(r);if(o!==void 0)return o;f4=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var v=null;v=C.H,C.H=null,F();try{var h={DetermineComponentFrameRoot:function(){try{if(g){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(hr){var N=hr}Reflect.construct(r,[],Q)}else{try{Q.call()}catch(hr){N=hr}r.call(Q.prototype)}}else{try{throw Error()}catch(hr){N=hr}(Q=r())&&typeof Q.catch==="function"&&Q.catch(function(){})}}catch(hr){if(hr&&N&&typeof hr.stack==="string")return[hr.stack,N.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=h.DetermineComponentFrameRoot(),P=i[0],t=i[1];if(P&&t){var M=P.split(`
`),$=t.split(`
`);for(i=b=0;b<M.length&&!M[b].includes("DetermineComponentFrameRoot");)b++;for(;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;if(b===M.length||i===$.length)for(b=M.length-1,i=$.length-1;1<=b&&0<=i&&M[b]!==$[i];)i--;for(;1<=b&&0<=i;b--,i--)if(M[b]!==$[i]){if(b!==1||i!==1)do if(b--,i--,0>i||M[b]!==$[i]){var m=`
`+M[b].replace(" at new "," at ");return r.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",r.displayName)),typeof r==="function"&&p4.set(r,m),m}while(1<=b&&0<=i);break}}}finally{f4=!1,C.H=v,or(),Error.prepareStackTrace=o}return M=(M=r?r.displayName||r.name:"")?Ar(M):"",typeof r==="function"&&p4.set(r,M),M}function br(r,g){switch(r.tag){case 26:case 27:case 5:return Ar(r.type);case 16:return Ar("Lazy");case 13:return r.child!==g&&g!==null?Ar("Suspense Fallback"):Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return xr(r.type,!1);case 11:return xr(r.type.render,!1);case 1:return xr(r.type,!0);case 31:return Ar("Activity");default:return""}}function Cr(r){try{var g="",o=null;do{g+=br(r,o);var v=r._debugInfo;if(v)for(var h=v.length-1;0<=h;h--){var b=v[h];if(typeof b.name==="string"){var i=g;r:{var{name:P,env:t,debugLocation:M}=b;if(M!=null){var $=Or(M),m=$.lastIndexOf(`
`),Q=m===-1?$:$.slice(m+1);if(Q.indexOf(P)!==-1){var N=`
`+Q;break r}}N=Ar(P+(t?" ["+t+"]":""))}g=i+N}}o=r,r=r.return}while(r);return g}catch(hr){return`
Error generating stack: `+hr.message+`
`+hr.stack}}function fr(r){return(r=r?r.displayName||r.name:"")?Ar(r):""}function Wg(){if(nl===null)return null;var r=nl._debugOwner;return r!=null?j(r):null}function mo(){if(nl===null)return"";var r=nl;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Ar(r.type);break;case 13:g+=Ar("Suspense");break;case 19:g+=Ar("SuspenseList");break;case 31:g+=Ar("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=fr(r.type));break;case 11:r._debugOwner||g!==""||(g+=fr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var v=o._debugStack;if(r&&v){var h=Or(v);h!==""&&(g+=`
`+h)}}else if(r.debugStack!=null){var b=r.debugStack;(r=r.owner)&&b&&(g+=`
`+Or(b))}else break;var i=g}catch(P){i=`
Error generating stack: `+P.message+`
`+P.stack}return i}function wr(r,g,o,v,h,b,i){var P=nl;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,v,h,b,i)):g(o,v,h,b,i)}finally{_o(P)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){C.getCurrentStack=r===null?null:mo,Qv=!1,nl=r}function Yo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rl(r){try{return ag(r),!1}catch(g){return!0}}function ag(r){return""+r}function Hg(r,g){if(rl(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),ag(r)}function rb(r,g){if(rl(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),ag(r)}function Sr(r){if(rl(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yo(r)),ag(r)}function Ne(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{vh=g.inject(r),zo=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Rg(r){if(typeof ZY==="function"&&xY(r),zo&&typeof zo.setStrictMode==="function")try{zo.setStrictMode(vh,r)}catch(g){zv||(zv=!0,console.error("React instrumentation encountered an error: %o",g))}}function Cw(r){return r>>>=0,r===0?32:31-(CY(r)/TY|0)|0}function hv(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function m1(r,g,o){var v=r.pendingLanes;if(v===0)return 0;var h=0,b=r.suspendedLanes,i=r.pingedLanes;r=r.warmLanes;var P=v&134217727;return P!==0?(v=P&~b,v!==0?h=hv(v):(i&=P,i!==0?h=hv(i):o||(o=P&~r,o!==0&&(h=hv(o))))):(P=v&~b,P!==0?h=hv(P):i!==0?h=hv(i):o||(o=v&~r,o!==0&&(h=hv(o)))),h===0?0:g!==0&&g!==h&&(g&b)===0&&(b=h&-h,o=g&-g,b>=o||b===32&&(o&4194048)!==0)?g:h}function L1(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function B2(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Be(){var r=su;return su<<=1,(su&62914560)===0&&(su=4194304),r}function Ze(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function U0(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Tw(r,g,o,v,h,b){var i=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:P,expirationTimes:t,hiddenUpdates:M}=r;for(o=i&~o;0<o;){var $=31-Io(o),m=1<<$;P[$]=0,t[$]=-1;var Q=M[$];if(Q!==null)for(M[$]=null,$=0;$<Q.length;$++){var N=Q[$];N!==null&&(N.lane&=-536870913)}o&=~m}v!==0&&I1(r,v,0),b!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=b&~(i&~g))}function I1(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var v=31-Io(g);r.entangledLanes|=g,r.entanglements[v]=r.entanglements[v]|1073741824|o&261930}function F1(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var v=31-Io(o),h=1<<v;h&g|r[v]&g&&(r[v]|=g),o&=~h}}function N1(r,g){var o=g&-g;return o=(o&42)!==0?1:B1(o),(o&(r.suspendedLanes|g))!==0?0:o}function B1(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function gb(r,g,o){if(Kv)for(r=r.pendingUpdatersLaneMap;0<o;){var v=31-Io(o),h=1<<v;r[v].add(g),o&=~h}}function $0(r,g){if(Kv)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:v}=r;0<g;){var h=31-Io(g);r=1<<h,h=o[h],0<h.size&&(h.forEach(function(b){var i=b.alternate;i!==null&&v.has(i)||v.add(b)}),h.clear()),g&=~r}}function W(r){return r&=-r,Pl!==0&&Pl<r?_l!==0&&_l<r?(r&134217727)!==0?Uv:ri:_l:Pl}function I(){var r=wg.p;if(r!==0)return r;return r=window.event,r===void 0?Uv:Mt(r.type)}function gr(r,g){var o=wg.p;try{return wg.p=r,g()}finally{wg.p=o}}function ur(r){delete r[Ao],delete r[Fo],delete r[o6],delete r[SY],delete r[kY]}function Mr(r){var g=r[Ao];if(g)return g;for(var o=r.parentNode;o;){if(g=o[E0]||o[Ao]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=vt(r);r!==null;){if(o=r[Ao])return o;r=vt(r)}return g}r=o,o=r.parentNode}return null}function Fr(r){if(r=r[Ao]||r[E0]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Nr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function lg(r){var g=r[Nt];return g||(g=r[Nt]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Jr(r){r[kb]=!0}function Jo(r,g){gl(r,g),gl(r+"Capture",g)}function gl(r,g){p1[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p1[r]=g;var o=r.toLowerCase();l6[o]=r,r==="onDoubleClick"&&(l6.ondblclick=r);for(r=0;r<g.length;r++)Bt.add(g[r])}function m0(r,g){DY[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function ob(r){if(Vl.call(xt,r))return!0;if(Vl.call(Zt,r))return!1;if(VY.test(r))return xt[r]=!0;return Zt[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function UP(r,g,o){if(ob(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return Hg(o,g),r===""+o?o:r}}function Sw(r,g,o){if(ob(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var v=g.toLowerCase().slice(0,5);if(v!=="data-"&&v!=="aria-"){r.removeAttribute(g);return}}Hg(o,g),r.setAttribute(g,""+o)}}function kw(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}Hg(o,g),r.setAttribute(g,""+o)}}function _v(r,g,o,v){if(v===null)r.removeAttribute(o);else{switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Hg(v,o),r.setAttributeNS(g,o,""+v)}}function Yl(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Sr(r),r;default:return""}}function $P(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function TG(r,g,o){var v=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof v<"u"&&typeof v.get==="function"&&typeof v.set==="function"){var{get:h,set:b}=v;return Object.defineProperty(r,g,{configurable:!0,get:function(){return h.call(this)},set:function(i){Sr(i),o=""+i,b.call(this,i)}}),Object.defineProperty(r,g,{enumerable:v.enumerable}),{getValue:function(){return o},setValue:function(i){Sr(i),o=""+i},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function Z2(r){if(!r._valueTracker){var g=$P(r)?"checked":"value";r._valueTracker=TG(r,g,""+r[g])}}function mP(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),v="";return r&&(v=$P(r)?r.checked?"true":"false":r.value),r=v,r!==o?(g.setValue(r),!0):!1}function Dw(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Jl(r){return r.replace(_Y,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function LP(r,g){g.checked===void 0||g.defaultChecked===void 0||Tt||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component",g.type),Tt=!0),g.value===void 0||g.defaultValue===void 0||Ct||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component",g.type),Ct=!0)}function x2(r,g,o,v,h,b,i,P){if(r.name="",i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"?(Hg(i,"type"),r.type=i):r.removeAttribute("type"),g!=null)if(i==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+Yl(g)}else r.value!==""+Yl(g)&&(r.value=""+Yl(g));else i!=="submit"&&i!=="reset"||r.removeAttribute("value");g!=null?C2(r,i,Yl(g)):o!=null?C2(r,i,Yl(o)):v!=null&&r.removeAttribute("value"),h==null&&b!=null&&(r.defaultChecked=!!b),h!=null&&(r.checked=h&&typeof h!=="function"&&typeof h!=="symbol"),P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(Hg(P,"name"),r.name=""+Yl(P)):r.removeAttribute("name")}function IP(r,g,o,v,h,b,i,P){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Hg(b,"type"),r.type=b),g!=null||o!=null){if(!(b!=="submit"&&b!=="reset"||g!==void 0&&g!==null)){Z2(r);return}o=o!=null?""+Yl(o):"",g=g!=null?""+Yl(g):o,P||g===r.value||(r.value=g),r.defaultValue=g}v=v!=null?v:h,v=typeof v!=="function"&&typeof v!=="symbol"&&!!v,r.checked=P?r.checked:!!v,r.defaultChecked=!!v,i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"&&(Hg(i,"name"),r.name=i),Z2(r)}function C2(r,g,o){g==="number"&&Dw(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function FP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?Th.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||kt||(kt=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||Dt||(Dt=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||St||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),St=!0)}function NP(){var r=Wg();return r?`

Check the render method of \``+r+"`.":""}function xe(r,g,o,v){if(r=r.options,g){g={};for(var h=0;h<o.length;h++)g["$"+o[h]]=!0;for(o=0;o<r.length;o++)h=g.hasOwnProperty("$"+r[o].value),r[o].selected!==h&&(r[o].selected=h),h&&v&&(r[o].defaultSelected=!0)}else{o=""+Yl(o),g=null;for(h=0;h<r.length;h++){if(r[h].value===o){r[h].selected=!0,v&&(r[h].defaultSelected=!0);return}g!==null||r[h].disabled||(g=r[h])}g!==null&&(g.selected=!0)}}function BP(r,g){for(r=0;r<_t.length;r++){var o=_t[r];if(g[o]!=null){var v=lo(g[o]);g.multiple&&!v?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,NP()):!g.multiple&&v&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,NP())}}g.value===void 0||g.defaultValue===void 0||Vt||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),Vt=!0)}function ZP(r,g){g.value===void 0||g.defaultValue===void 0||yt||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component"),yt=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function xP(r,g,o){if(g!=null&&(g=""+Yl(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+Yl(o):""}function CP(r,g,o,v){if(g==null){if(v!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(lo(v)){if(1<v.length)throw Error("<textarea> can only have at most one child.");v=v[0]}o=v}o==null&&(o=""),g=o}o=Yl(g),r.defaultValue=o,v=r.textContent,v===o&&v!==""&&v!==null&&(r.value=v),Z2(r)}function TP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?TP(r.children[0],g):r}function ol(r){return"  "+"  ".repeat(r)}function Ce(r){return"+ "+"  ".repeat(r)}function Z1(r){return"- "+"  ".repeat(r)}function SP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function lb(r,g){return Et.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function Vw(r,g,o){var v=120-2*o;if(g===null)return Ce(o)+lb(r,v)+`
`;if(typeof g==="string"){for(var h=0;h<g.length&&h<r.length&&g.charCodeAt(h)===r.charCodeAt(h);h++);return h>v-8&&10<h&&(r="..."+r.slice(h-8),g="..."+g.slice(h-8)),Ce(o)+lb(r,v)+`
`+Z1(o)+lb(g,v)+`
`}return ol(o)+lb(r,v)+`
`}function T2(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function vb(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(lo(r))return"[...]";if(r.$$typeof===Yv)return(g=y(r.type))?"<"+g+">":"<...>";var o=T2(r);if(o==="Object"){o="",g-=2;for(var v in r)if(r.hasOwnProperty(v)){var h=JSON.stringify(v);if(h!=='"'+v+'"'&&(v=h),g-=v.length-2,h=vb(r[v],15>g?g:15),g-=h.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+v+":"+h}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function Te(r,g){return typeof r!=="string"||Et.test(r)?"{"+vb(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function S2(r,g,o){var v=120-o.length-r.length,h=[],b;for(b in g)if(g.hasOwnProperty(b)&&b!=="children"){var i=Te(g[b],120-o.length-b.length-1);v-=b.length+i.length+2,h.push(b+"="+i)}return h.length===0?o+"<"+r+`>
`:0<v?o+"<"+r+" "+h.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+h.join(`
`+o+"  ")+`
`+o+`>
`}function SG(r,g,o){var v="",h=cr({},g),b;for(b in r)if(r.hasOwnProperty(b)){delete h[b];var i=120-2*o-b.length-2,P=vb(r[b],i);g.hasOwnProperty(b)?(i=vb(g[b],i),v+=Ce(o)+b+": "+P+`
`,v+=Z1(o)+b+": "+i+`
`):v+=Ce(o)+b+": "+P+`
`}for(var t in h)h.hasOwnProperty(t)&&(r=vb(h[t],120-2*o-t.length-2),v+=Z1(o)+t+": "+r+`
`);return v}function kG(r,g,o,v){var h="",b=new Map;for(M in o)o.hasOwnProperty(M)&&b.set(M.toLowerCase(),M);if(b.size===1&&b.has("children"))h+=S2(r,g,ol(v));else{for(var i in g)if(g.hasOwnProperty(i)&&i!=="children"){var P=120-2*(v+1)-i.length-1,t=b.get(i.toLowerCase());if(t!==void 0){b.delete(i.toLowerCase());var M=g[i];t=o[t];var $=Te(M,P);P=Te(t,P),typeof M==="object"&&M!==null&&typeof t==="object"&&t!==null&&T2(M)==="Object"&&T2(t)==="Object"&&(2<Object.keys(M).length||2<Object.keys(t).length||-1<$.indexOf("...")||-1<P.indexOf("..."))?h+=ol(v+1)+i+`={{
`+SG(M,t,v+2)+ol(v+1)+`}}
`:(h+=Ce(v+1)+i+"="+$+`
`,h+=Z1(v+1)+i+"="+P+`
`)}else h+=ol(v+1)+i+"="+Te(g[i],P)+`
`}b.forEach(function(m){if(m!=="children"){var Q=120-2*(v+1)-m.length-1;h+=Z1(v+1)+m+"="+Te(o[m],Q)+`
`}}),h=h===""?ol(v)+"<"+r+`>
`:ol(v)+"<"+r+`
`+h+ol(v)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(b="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=""+g;h+=Vw(b,""+r,v+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")h=r==null?h+Vw(""+g,null,v+1):h+Vw(""+g,void 0,v+1);return h}function kP(r,g){var o=SP(r);if(o===null){o="";for(r=r.child;r;)o+=kP(r,g),r=r.sibling;return o}return ol(g)+"<"+o+`>
`}function k2(r,g){var o=TP(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return ol(g)+`...
`+k2(o,g+1);o="";var v=r.fiber._debugInfo;if(v)for(var h=0;h<v.length;h++){var b=v[h].name;typeof b==="string"&&(o+=ol(g)+"<"+b+`>
`,g++)}if(v="",h=r.fiber.pendingProps,r.fiber.tag===6)v=Vw(h,r.serverProps,g),g++;else if(b=SP(r.fiber),b!==null)if(r.serverProps===void 0){v=g;var i=120-2*v-b.length-2,P="";for(M in h)if(h.hasOwnProperty(M)&&M!=="children"){var t=Te(h[M],15);if(i-=M.length+t.length+2,0>i){P+=" ...";break}P+=" "+M+"="+t}v=ol(v)+"<"+b+P+`>
`,g++}else r.serverProps===null?(v=S2(b,h,Ce(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(v=kG(b,h,r.serverProps,g),g++);var M="";h=r.fiber.child;for(b=0;h&&b<r.children.length;)i=r.children[b],i.fiber===h?(M+=k2(i,g),b++):M+=kP(h,g),h=h.sibling;h&&0<r.children.length&&(M+=ol(g)+`...
`),h=r.serverTail,r.serverProps===null&&g--;for(r=0;r<h.length;r++)b=h[r],M=typeof b==="string"?M+(Z1(g)+lb(b,120-2*g)+`
`):M+S2(b.type,b.props,Z1(g));return o+v+M}function D2(r){try{return`

`+k2(r,0)}catch(g){return""}}function DP(r,g,o){for(var v=g,h=null,b=0;v;)v===r&&(b=0),h={fiber:v,children:h!==null?[h]:[],serverProps:v===g?o:v===r?null:void 0,serverTail:[],distanceFromLeaf:b},b++,v=v.return;return h!==null?D2(h).replaceAll(/^[+-]/gm,">"):""}function VP(r,g){var o=cr({},r||at),v={tag:g};if(ct.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),EY.indexOf(g)!==-1&&(o.pTagInButtonScope=null),yY.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=v,g==="form"&&(o.formTag=v),g==="a"&&(o.aTagInScope=v),g==="button"&&(o.buttonTagInScope=v),g==="nobr"&&(o.nobrTagInScope=v),g==="p"&&(o.pTagInButtonScope=v),g==="li"&&(o.listItemTagAutoclosing=v),g==="dd"||g==="dt")o.dlItemTagAutoclosing=v;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=v),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function _P(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return cY.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function DG(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function yP(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function V2(r,g){g=g||at;var o=g.current;if(g=(o=_P(r,o&&o.tag,g.implicitRootScope)?null:o)?null:DG(r,g),g=o||g,!g)return!0;var v=g.tag;if(g=String(!!o)+"|"+r+"|"+v,gi[g])return!1;gi[g]=!0;var h=(g=nl)?yP(g.return,v):null,b=g!==null&&h!==null?DP(h,g,null):"",i="<"+r+">";return o?(o="",v==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,i,v,o,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,i,v,b),g&&(r=g.return,h===null||r===null||h===r&&r._debugOwner===g._debugOwner||wr(h,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,v,i)})),!1}function _w(r,g,o){if(o||_P("#text",g,!1))return!0;if(o="#text|"+g,gi[o])return!1;gi[o]=!0;var v=(o=nl)?yP(o,g):null;return o=o!==null&&v!==null?DP(v,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function eb(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function VG(r){return r.replace(fY,function(g,o){return o.toUpperCase()})}function EP(r,g,o){var v=g.indexOf("--")===0;v||(-1<g.indexOf("-")?eh.hasOwnProperty(g)&&eh[g]||(eh[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,VG(g.replace(jY,"ms-")))):aY.test(g)?eh.hasOwnProperty(g)&&eh[g]||(eh[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!pt.test(o)||e6.hasOwnProperty(o)&&e6[o]||(e6[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(pt,""))),typeof o==="number"&&(isNaN(o)?dt||(dt=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||st||(st=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?v?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":v?r.setProperty(g,o):typeof o!=="number"||o===0||rA.has(g)?g==="float"?r.cssFloat=o:(rb(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function cP(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var v={};if(o){for(var h in o)if(o.hasOwnProperty(h)&&!g.hasOwnProperty(h))for(var b=v6[h]||[h],i=0;i<b.length;i++)v[b[i]]=h}for(var P in g)if(g.hasOwnProperty(P)&&(!o||o[P]!==g[P]))for(h=v6[P]||[P],b=0;b<h.length;b++)v[h[b]]=P;P={};for(var t in g)for(h=v6[t]||[t],b=0;b<h.length;b++)P[h[b]]=t;t={};for(var M in v)if(h=v[M],(b=P[M])&&h!==b&&(i=h+","+b,!t[i])){t[i]=!0,i=console;var $=g[h];i.error.call(i,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",$==null||typeof $==="boolean"||$===""?"Removing":"Updating",h,b)}}for(var m in o)!o.hasOwnProperty(m)||g!=null&&g.hasOwnProperty(m)||(m.indexOf("--")===0?r.setProperty(m,""):m==="float"?r.cssFloat="":r[m]="");for(var Q in g)M=g[Q],g.hasOwnProperty(Q)&&o[Q]!==M&&EP(r,Q,M)}else for(v in g)g.hasOwnProperty(v)&&EP(r,v,g[v])}function hb(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function aP(r){return pY.get(r)||r}function _G(r,g){if(Vl.call(bh,g)&&bh[g])return!0;if(sY.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=gA.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),bh[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),bh[g]=!0}if(dY.test(g)){if(r=g.toLowerCase(),r=gA.hasOwnProperty(r)?r:null,r==null)return bh[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),bh[g]=!0)}return!0}function yG(r,g){var o=[],v;for(v in g)_G(r,v)||o.push(v);g=o.map(function(h){return"`"+h+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function EG(r,g,o,v){if(Vl.call(No,g)&&No[g])return!0;var h=g.toLowerCase();if(h==="onfocusin"||h==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),No[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(v!=null){if(r=v.possibleRegistrationNames,v.registrationNameDependencies.hasOwnProperty(g))return!0;if(v=r.hasOwnProperty(h)?r[h]:null,v!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,v),No[g]=!0;if(lA.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),No[g]=!0}else if(lA.test(g))return rJ.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),No[g]=!0;if(gJ.test(g)||oJ.test(g))return!0;if(h==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),No[g]=!0;if(h==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),No[g]=!0;if(h==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),No[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),No[g]=!0;if(li.hasOwnProperty(h)){if(h=li[h],h!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,h),No[g]=!0}else if(g!==h)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,h),No[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(h=g.toLowerCase().slice(0,5),h==="data-"||h==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),No[g]=!0}case"function":case"symbol":return No[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),No[g]=!0}}return!0}function cG(r,g,o){var v=[],h;for(h in g)EG(r,h,g[h],o)||v.push(h);g=v.map(function(b){return"`"+b+"`"}).join(", "),v.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<v.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function bb(r){return lJ.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function yv(){}function _2(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function jP(r){var g=Fr(r);if(g&&(r=g.stateNode)){var o=r[Fo]||null;r:switch(r=g.stateNode,g.type){case"input":if(x2(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;Hg(g,"name"),o=o.querySelectorAll('input[name="'+Jl(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var v=o[g];if(v!==r&&v.form===r.form){var h=v[Fo]||null;if(!h)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");x2(v,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(g=0;g<o.length;g++)v=o[g],v.form===r.form&&mP(v)}break r;case"textarea":xP(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&xe(r,!!o.multiple,g,!1)}}}function fP(r,g,o){if(h6)return r(g,o);h6=!0;try{var v=r(g);return v}finally{if(h6=!1,wh!==null||uh!==null){if(je(),wh&&(g=wh,r=uh,uh=wh=null,jP(g),r))for(g=0;g<r.length;g++)jP(r[g])}}}function wb(r,g){var o=r.stateNode;if(o===null)return null;var v=o[Fo]||null;if(v===null)return null;o=v[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(v=!v.disabled)||(r=r.type,v=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!v;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function pP(){if(vi)return vi;var r,g=w6,o=g.length,v,h="value"in c0?c0.value:c0.textContent,b=h.length;for(r=0;r<o&&g[r]===h[r];r++);var i=o-r;for(v=1;v<=i&&g[o-v]===h[b-v];v++);return vi=h.slice(r,1<v?1-v:void 0)}function yw(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function Ew(){return!0}function dP(){return!1}function yo(r){function g(o,v,h,b,i){this._reactName=o,this._targetInst=h,this.type=v,this.nativeEvent=b,this.target=i,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(o=r[P],this[P]=o?o(b):b[P]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Ew:dP,this.isPropagationStopped=dP,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ew)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ew)},persist:function(){},isPersistent:Ew}),g}function aG(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=tJ[r])?!!g[r]:!1}function y2(){return aG}function sP(r,g){switch(r){case"keyup":return UJ.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==bA;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rH(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function jG(r,g){switch(r){case"compositionend":return rH(g);case"keypress":if(g.which!==uA)return null;return nA=!0,iA;case"textInput":return r=g.data,r===iA&&nA?null:r;default:return null}}function fG(r,g){if(ih)return r==="compositionend"||!P6&&sP(r,g)?(r=pP(),vi=w6=c0=null,ih=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return wA&&g.locale!=="ko"?null:g.data;default:return null}}function gH(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!mJ[r.type]:g==="textarea"?!0:!1}function pG(r){if(!$v)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function oH(r,g,o,v){wh?uh?uh.push(v):uh=[v]:wh=v,g=Cu(g,"onChange"),0<g.length&&(o=new ei("onChange","change",null,o,v),r.push({event:o,listeners:g}))}function dG(r){Cq(r,0)}function cw(r){var g=Nr(r);if(mP(g))return r}function lH(r,g){if(r==="change")return g}function vH(){cb&&(cb.detachEvent("onpropertychange",eH),ab=cb=null)}function eH(r){if(r.propertyName==="value"&&cw(ab)){var g=[];oH(g,ab,r,_2(r)),fP(dG,g)}}function sG(r,g,o){r==="focusin"?(vH(),cb=g,ab=o,cb.attachEvent("onpropertychange",eH)):r==="focusout"&&vH()}function rX(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return cw(ab)}function gX(r,g){if(r==="click")return cw(g)}function oX(r,g){if(r==="input"||r==="change")return cw(g)}function lX(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function ub(r,g){if(Bo(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),v=Object.keys(g);if(o.length!==v.length)return!1;for(v=0;v<o.length;v++){var h=o[v];if(!Vl.call(g,h)||!Bo(r[h],g[h]))return!1}return!0}function hH(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function bH(r,g){var o=hH(r);r=0;for(var v;o;){if(o.nodeType===3){if(v=r+o.textContent.length,r<=g&&v>=g)return{node:o,offset:g-r};r=v}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=hH(o)}}function wH(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?wH(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function uH(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=Dw(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(v){o=!1}if(o)r=g.contentWindow;else break;g=Dw(r.document)}return g}function E2(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function iH(r,g,o){var v=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;O6||nh==null||nh!==Dw(v)||(v=nh,("selectionStart"in v)&&E2(v)?v={start:v.selectionStart,end:v.selectionEnd}:(v=(v.ownerDocument&&v.ownerDocument.defaultView||window).getSelection(),v={anchorNode:v.anchorNode,anchorOffset:v.anchorOffset,focusNode:v.focusNode,focusOffset:v.focusOffset}),jb&&ub(jb,v)||(jb=v,v=Cu(H6,"onSelect"),0<v.length&&(g=new ei("onSelect","select",null,g,o),r.push({event:g,listeners:v}),g.target=nh)))}function x1(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function C1(r){if(q6[r])return q6[r];if(!Ph[r])return r;var g=Ph[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in HA)return q6[r]=g[o];return r}function Sl(r,g){MA.set(r,g),Jo(g,[r])}function vX(r){for(var g=bi,o=0;o<r.length;o++){var v=r[o];if(typeof v==="object"&&v!==null)if(lo(v)&&v.length===2&&typeof v[0]==="string"){if(g!==bi&&g!==R6)return M6;g=R6}else return M6;else{if(typeof v==="function"||typeof v==="string"&&50<v.length||g!==bi&&g!==W6)return M6;g=W6}}return g}function c2(r,g,o,v){for(var h in r)Vl.call(r,h)&&h[0]!=="_"&&bv(h,r[h],g,o,v)}function bv(r,g,o,v,h){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Yv){var b=y(g.type)||"…",i=g.key;g=g.props;var P=Object.keys(g),t=P.length;if(i==null&&t===0){g="<"+b+" />";break}if(3>v||t===1&&P[0]==="children"&&i==null){g="<"+b+" … />";break}o.push([h+"  ".repeat(v)+r,"<"+b]),i!==null&&bv("key",i,o,v+1,h),r=!1;for(var M in g)M==="children"?g.children!=null&&(!lo(g.children)||0<g.children.length)&&(r=!0):Vl.call(g,M)&&M[0]!=="_"&&bv(M,g[M],o,v+1,h);o.push(["",r?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(g),b=b.slice(8,b.length-1),b==="Array"){if(M=vX(g),M===W6||M===bi){g=JSON.stringify(g);break}else if(M===R6){o.push([h+"  ".repeat(v)+r,""]);for(r=0;r<g.length;r++)b=g[r],bv(b[0],b[1],o,v+1,h);return}}if(b==="Promise"){if(g.status==="fulfilled"){if(b=o.length,bv(r,g.value,o,v,h),o.length>b){o=o[b],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(b=o.length,bv(r,g.reason,o,v,h),o.length>b)){o=o[b],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(v)+r,"Promise"]);return}b==="Object"&&(M=Object.getPrototypeOf(g))&&typeof M.constructor==="function"&&(b=M.constructor.name),o.push([h+"  ".repeat(v)+r,b==="Object"?3>v?"":"…":b]),3>v&&c2(g,o,v+1,h);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===xJ?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([h+"  ".repeat(v)+r,g])}function nH(r,g,o,v){var h=!0;for(i in r)i in g||(o.push([wi+"  ".repeat(v)+i,"…"]),h=!1);for(var b in g)if(b in r){var i=r[b],P=g[b];if(i!==P){if(v===0&&b==="children")h="  ".repeat(v)+b,o.push([wi+h,"…"],[ui+h,"…"]);else{if(!(3<=v)){if(typeof i==="object"&&typeof P==="object"&&i!==null&&P!==null&&i.$$typeof===P.$$typeof)if(P.$$typeof===Yv){if(i.type===P.type&&i.key===P.key){i=y(P.type)||"…",h="  ".repeat(v)+b,i="<"+i+" … />",o.push([wi+h,i],[ui+h,i]),h=!1;continue}}else{var t=Object.prototype.toString.call(i),M=Object.prototype.toString.call(P);if(t===M&&(M==="[object Object]"||M==="[object Array]")){t=[GA+"  ".repeat(v)+b,M==="[object Array]"?"Array":""],o.push(t),M=o.length,nH(i,P,o,v+1)?M===o.length&&(t[1]="Referentially unequal but deeply equal objects. Consider memoization."):h=!1;continue}}else if(typeof i==="function"&&typeof P==="function"&&i.name===P.name&&i.length===P.length&&(t=Function.prototype.toString.call(i),M=Function.prototype.toString.call(P),t===M)){i=P.name===""?"() => {}":P.name+"() {}",o.push([GA+"  ".repeat(v)+b,i+" Referentially unequal function closure. Consider memoization."]);continue}}bv(b,i,o,v,wi),bv(b,P,o,v,ui)}h=!1}}else o.push([ui+"  ".repeat(v)+b,"…"]),h=!1;return h}function ll(r){jr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function wv(r,g,o,v){Qg&&(j0.start=g,j0.end=o,r0.color="warning",r0.tooltipText=v,r0.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,v,j0)):performance.measure(v,j0))}function aw(r,g,o){wv(r,g,o,"Reconnect")}function jw(r,g,o,v,h){var b=x(r);if(b!==null&&Qg){var{alternate:i,actualDuration:P}=r;if(i===null||i.child!==r.child)for(var t=r.child;t!==null;t=t.sibling)P-=t.actualDuration;v=0.5>P?v?"tertiary-light":"primary-light":10>P?v?"tertiary":"primary":100>P?v?"tertiary-dark":"primary-dark":"error";var M=r.memoizedProps;P=r._debugTask,M!==null&&i!==null&&i.memoizedProps!==M?(t=[CJ],M=nH(i.memoizedProps,M,t,0),1<t.length&&(M&&!a0&&(i.lanes&h)===0&&100<r.actualDuration?(a0=!0,t[0]=TJ,r0.color="warning",r0.tooltipText=XA):(r0.color=v,r0.tooltipText=b),r0.properties=t,j0.start=g,j0.end=o,P!=null?P.run(performance.measure.bind(performance,"​"+b,j0)):performance.measure("​"+b,j0))):P!=null?P.run(console.timeStamp.bind(console,b,g,o,zl,void 0,v)):console.timeStamp(b,g,o,zl,void 0,v)}}function a2(r,g,o,v){if(Qg){var h=x(r);if(h!==null){for(var b=null,i=[],P=0;P<v.length;P++){var t=v[P];b==null&&t.source!==null&&(b=t.source._debugTask),t=t.value,i.push(["Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r.key!==null&&bv("key",r.key,i,0,""),r.memoizedProps!==null&&c2(r.memoizedProps,i,0,""),b==null&&(b=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:zl,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:i}}},b?b.run(performance.measure.bind(performance,"​"+h,r)):performance.measure("​"+h,r)}}}function uv(r,g,o,v,h){if(h!==null){if(Qg){var b=x(r);if(b!==null){v=[];for(var i=0;i<h.length;i++){var P=h[i].value;v.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r.key!==null&&bv("key",r.key,v,0,""),r.memoizedProps!==null&&c2(r.memoizedProps,v,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:zl,tooltipText:"A lifecycle or effect errored",properties:v}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+b,g)):performance.measure("​"+b,g)}}}else b=x(r),b!==null&&Qg&&(h=1>v?"secondary-light":100>v?"secondary":500>v?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,b,g,o,zl,void 0,h)):console.timeStamp(b,g,o,zl,void 0,h))}function eX(r,g,o,v){if(Qg&&!(g<=r)){var h=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",v?v.run(console.timeStamp.bind(console,o,r,g,jr,ar,h)):console.timeStamp(o,r,g,jr,ar,h)}}function PH(r,g,o,v){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",v?v.run(console.timeStamp.bind(console,"Prewarm",r,g,jr,ar,o)):console.timeStamp("Prewarm",r,g,jr,ar,o))}function HH(r,g,o,v){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",v?v.run(console.timeStamp.bind(console,"Suspended",r,g,jr,ar,o)):console.timeStamp("Suspended",r,g,jr,ar,o))}function hX(r,g,o,v,h,b){if(Qg&&!(g<=r)){o=[];for(var i=0;i<v.length;i++){var P=v[i].value;o.push(["Recoverable Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:jr,trackGroup:ar,tooltipText:h?"Hydration Failed":"Recovered after Error",properties:o}}},b?b.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function j2(r,g,o,v){!Qg||g<=r||(v?v.run(console.timeStamp.bind(console,"Errored",r,g,jr,ar,"error")):console.timeStamp("Errored",r,g,jr,ar,"error"))}function bX(r,g,o,v){!Qg||g<=r||(v?v.run(console.timeStamp.bind(console,o,r,g,jr,ar,"secondary-light")):console.timeStamp(o,r,g,jr,ar,"secondary-light"))}function OH(r,g,o,v,h){if(Qg&&!(g<=r)){for(var b=[],i=0;i<o.length;i++){var P=o[i].value;b.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"error",track:jr,trackGroup:ar,tooltipText:v?"Remaining Effects Errored":"Commit Errored",properties:b}}},h?h.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function ib(r,g,o){!Qg||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,jr,ar,"secondary-dark")):console.timeStamp("Animating",r,g,jr,ar,"secondary-dark"))}function fw(){for(var r=Hh,g=G6=Hh=0;g<r;){var o=Kl[g];Kl[g++]=null;var v=Kl[g];Kl[g++]=null;var h=Kl[g];Kl[g++]=null;var b=Kl[g];if(Kl[g++]=null,v!==null&&h!==null){var i=v.pending;i===null?h.next=h:(h.next=i.next,i.next=h),v.pending=h}b!==0&&qH(o,h,b)}}function pw(r,g,o,v){Kl[Hh++]=r,Kl[Hh++]=g,Kl[Hh++]=o,Kl[Hh++]=v,G6|=v,r.lanes|=v,r=r.alternate,r!==null&&(r.lanes|=v)}function f2(r,g,o,v){return pw(r,g,o,v),dw(r)}function Qo(r,g){return pw(r,null,null,g),dw(r)}function qH(r,g,o){r.lanes|=o;var v=r.alternate;v!==null&&(v.lanes|=o);for(var h=!1,b=r.return;b!==null;)b.childLanes|=o,v=b.alternate,v!==null&&(v.childLanes|=o),b.tag===22&&(r=b.stateNode,r===null||r._visibility&fb||(h=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,h&&g!==null&&(h=31-Io(o),r=b.hiddenUpdates,v=r[h],v===null?r[h]=[g]:v.push(g),g.lane=o|536870912),b):null}function dw(r){if(Y5>rQ)throw He=Y5=0,J5=r8=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");He>gQ&&(He=0,J5=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&Lq(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&Lq(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function T1(r){if(Ul===null)return r;var g=Ul(r);return g===void 0?r:g.current}function p2(r){if(Ul===null)return r;var g=Ul(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=T1(r.render),r.render!==g)?(g={$$typeof:Cb,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function tH(r,g){if(Ul===null)return!1;var o=r.elementType;g=g.type;var v=!1,h=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(v=!0);break;case 0:typeof g==="function"?v=!0:h===il&&(v=!0);break;case 11:h===Cb?v=!0:h===il&&(v=!0);break;case 14:case 15:h===ju?v=!0:h===il&&(v=!0);break;default:return!1}return v&&(r=Ul(o),r!==void 0&&r===Ul(g))?!0:!1}function AH(r){Ul!==null&&typeof WeakSet==="function"&&(Oh===null&&(Oh=new WeakSet),Oh.add(r))}function MH(r,g,o){do{var v=r,h=v.alternate,b=v.child,i=v.sibling,P=v.tag;v=v.type;var t=null;switch(P){case 0:case 15:case 1:t=v;break;case 11:t=v.render}if(Ul===null)throw Error("Expected resolveFamily to be set during hot reload.");var M=!1;if(v=!1,t!==null&&(t=Ul(t),t!==void 0&&(o.has(t)?v=!0:g.has(t)&&(P===1?v=!0:M=!0))),Oh!==null&&(Oh.has(r)||h!==null&&Oh.has(h))&&(v=!0),v&&(r._debugNeedsRemount=!0),v||M)h=Qo(r,2),h!==null&&Bg(h,r,2);if(b===null||v||MH(b,g,o),i===null)break;r=i}while(1)}function wX(r,g,o,v){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,YA||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function d2(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ev(r,g){var o=r.alternate;switch(o===null?(o=Y(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=T1(r.type);break;case 1:o.type=T1(r.type);break;case 11:o.type=p2(r.type)}return o}function WH(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function s2(r,g,o,v,h,b){var i=0,P=r;if(typeof r==="function")d2(r)&&(i=1),P=T1(P);else if(typeof r==="string")i=er(),i=AY(r,o,i)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E4:return g=Y(31,o,g,h),g.elementType=E4,g.lanes=b,g;case oh:return S1(o.children,h,b,g);case au:i=8,h|=Ko,h|=yl;break;case D4:return r=o,v=h,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=Y(12,r,g,v|kr),g.elementType=D4,g.lanes=b,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case _4:return g=Y(13,o,g,h),g.elementType=_4,g.lanes=b,g;case y4:return g=Y(19,o,g,h),g.elementType=y4,g.lanes=b,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Jv:i=10;break r;case V4:i=9;break r;case Cb:i=11,P=p2(P);break r;case ju:i=14;break r;case il:i=16,P=null;break r}if(P="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)P+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":lo(r)?o="array":r!==void 0&&r.$$typeof===Yv?(o="<"+(y(r.type)||"Unknown")+" />",P=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(i=v?j(v):null)&&(P+=`

Check the render method of \``+i+"`."),i=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+P)),P=null}return g=Y(i,o,g,h),g.elementType=r,g.type=P,g.lanes=b,g._debugOwner=v,g}function sw(r,g,o){return g=s2(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function S1(r,g,o,v){return r=Y(7,r,v,g),r.lanes=o,r}function rn(r,g,o){return r=Y(6,r,null,g),r.lanes=o,r}function RH(r){var g=Y(18,null,null,Ur);return g.stateNode=r,g}function gn(r,g,o){return g=Y(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function vl(r,g){if(typeof r==="object"&&r!==null){var o=X6.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:Cr(g)},X6.set(r,g),g}return{value:r,source:g,stack:Cr(g)}}function cv(r,g){L0(),qh[th++]=pb,qh[th++]=ii,ii=r,pb=g}function GH(r,g,o){L0(),$l[ml++]=o0,$l[ml++]=l0,$l[ml++]=s1,s1=r;var v=o0;r=l0;var h=32-Io(v)-1;v&=~(1<<h),o+=1;var b=32-Io(g)+h;if(30<b){var i=h-h%5;b=(v&(1<<i)-1).toString(32),v>>=i,h-=i,o0=1<<32-Io(g)+h|o<<h|v,l0=b+r}else o0=1<<b|o<<h|v,l0=r}function on(r){L0(),r.return!==null&&(cv(r,1),GH(r,1,0))}function ln(r){for(;r===ii;)ii=qh[--th],qh[th]=null,pb=qh[--th],qh[th]=null;for(;r===s1;)s1=$l[--ml],$l[ml]=null,l0=$l[--ml],$l[ml]=null,o0=$l[--ml],$l[ml]=null}function XH(){return L0(),s1!==null?{id:o0,overflow:l0}:null}function YH(r,g){L0(),$l[ml++]=o0,$l[ml++]=l0,$l[ml++]=s1,o0=g.id,l0=g.overflow,s1=r}function L0(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k1(r,g){if(r.return===null){if(Hl===null)Hl={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(Hl.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Hl.distanceFromLeaf>g&&(Hl.distanceFromLeaf=g)}return Hl}var o=k1(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function JH(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function ru(r,g){mv||(r=k1(r,0),r.serverProps=null,g!==null&&(g=ot(g),r.serverTail.push(g)))}function I0(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",v=Hl;throw v!==null&&(Hl=null,o=D2(v)),nb(vl(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),Y6}function QH(r){var{stateNode:g,type:o,memoizedProps:v}=r;switch(g[Ao]=r,g[Fo]=v,J4(o,v),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<Q5.length;o++)dr(Q5[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":m0("input",v),dr("invalid",g),LP(g,v),IP(g,v.value,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name,!0);break;case"option":FP(g,v);break;case"select":m0("select",v),dr("invalid",g),BP(g,v);break;case"textarea":m0("textarea",v),dr("invalid",g),ZP(g,v),CP(g,v.value,v.defaultValue,v.children)}o=v.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||v.suppressHydrationWarning===!0||Dq(g.textContent,o)?(v.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),v.onScroll!=null&&dr("scroll",g),v.onScrollEnd!=null&&dr("scrollend",g),v.onClick!=null&&(g.onclick=yv),g=!0):g=!1,g||I0(r,!0)}function zH(r){for(Mo=r.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Ll=!1;return;case 27:case 3:Ll=!0;return;default:Mo=Mo.return}}function Se(r){if(r!==Mo)return!1;if(!pr)return zH(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||$4(r.type,r.memoizedProps);o=!o}if(o&&zg){for(o=zg;o;){var v=k1(r,0),h=ot(o);v.serverTail.push(h),o=h.type==="Suspense"?F4(o):ul(o.nextSibling)}I0(r)}if(zH(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=F4(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=F4(r)}else g===27?(g=zg,D0(r.type)?(r=P8,P8=null,zg=r):zg=g):zg=Mo?ul(r.stateNode.nextSibling):null;return!0}function D1(){zg=Mo=null,mv=pr=!1}function vn(){var r=p0;return r!==null&&(To===null?To=r:To.push.apply(To,r),p0=null),r}function nb(r){p0===null?p0=[r]:p0.push(r)}function en(){var r=Hl;if(r!==null){Hl=null;for(var g=D2(r);0<r.children.length;)r=r.children[0];wr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function gu(){Ah=ni=null,Mh=!1}function F0(r,g,o){Gr(J6,g._currentValue,r),g._currentValue=o,Gr(Q6,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==QA&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=QA}function av(r,g){r._currentValue=J6.current;var o=Q6.current;tr(Q6,g),r._currentRenderer=o,tr(J6,g)}function hn(r,g,o){for(;r!==null;){var v=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,v!==null&&(v.childLanes|=g)):v!==null&&(v.childLanes&g)!==g&&(v.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function bn(r,g,o,v){var h=r.child;h!==null&&(h.return=r);for(;h!==null;){var b=h.dependencies;if(b!==null){var i=h.child;b=b.firstContext;r:for(;b!==null;){var P=b;b=h;for(var t=0;t<g.length;t++)if(P.context===g[t]){b.lanes|=o,P=b.alternate,P!==null&&(P.lanes|=o),hn(b.return,o,r),v||(i=null);break r}b=P.next}}else if(h.tag===18){if(i=h.return,i===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");i.lanes|=o,b=i.alternate,b!==null&&(b.lanes|=o),hn(i,o,r),i=null}else i=h.child;if(i!==null)i.return=h;else for(i=h;i!==null;){if(i===r){i=null;break}if(h=i.sibling,h!==null){h.return=i.return,i=h;break}i=i.return}h=i}}function ke(r,g,o,v){r=null;for(var h=g,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var i=h.alternate;if(i===null)throw Error("Should have a current fiber. This is a bug in React.");if(i=i.memoizedProps,i!==null){var P=h.type;Bo(h.pendingProps.value,i.value)||(r!==null?r.push(P):r=[P])}}else if(h===fu.current){if(i=h.alternate,i===null)throw Error("Should have a current fiber. This is a bug in React.");i.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push(m5):r=[m5])}h=h.return}r!==null&&bn(g,r,o,v),g.flags|=262144}function ou(r){for(r=r.firstContext;r!==null;){if(!Bo(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V1(r){ni=r,Ah=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function $g(r){return Mh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),KH(ni,r)}function lu(r,g){return ni===null&&V1(r),KH(r,g)}function KH(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},Ah===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Ah=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else Ah=Ah.next=g;return o}function wn(){return{controller:new DJ,data:new Map,refCount:0}}function _1(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Pb(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&VJ(_J,function(){r.controller.abort()})}function iv(r,g,o){if((r&127)!==0)0>Lv&&(Lv=fg(),sb=Pi(g),z6=g,o!=null&&(K6=x(o)),(og&(eo|tl))!==io&&(Zg=!0,r1=db),r=Fb(),g=Ib(),r!==Wh||g!==r5?Wh=-1.1:g!==null&&(r1=db),ge=r,r5=g);else if((r&4194048)!==0&&0>Il&&(Il=fg(),g5=Pi(g),zA=g,o!=null&&(KA=x(o)),0>h0)){if(r=Fb(),g=Ib(),r!==o1||g!==oe)o1=-1.1;g1=r,oe=g}}function uX(r){if(0>Lv){Lv=fg(),sb=r._debugTask!=null?r._debugTask:null,(og&(eo|tl))!==io&&(r1=db);var g=Fb(),o=Ib();g!==Wh||o!==r5?Wh=-1.1:o!==null&&(r1=db),ge=g,r5=o}if(0>Il&&(Il=fg(),g5=r._debugTask!=null?r._debugTask:null,0>h0)){if(r=Fb(),g=Ib(),r!==o1||g!==oe)o1=-1.1;g1=r,oe=g}}function jv(){var r=re;return re=0,r}function vu(r){var g=re;return re=r,g}function Hb(r){var g=re;return re+=r,g}function eu(){Kr=Qr=-1.1}function el(){var r=Qr;return Qr=-1.1,r}function hl(r){0<=r&&(Qr=r)}function nv(){var r=Ig;return Ig=-0,r}function Pv(r){0<=r&&(Ig=r)}function Hv(){var r=mg;return mg=null,r}function Ov(){var r=Zg;return Zg=!1,r}function un(r){Zo=fg(),0>r.actualStartTime&&(r.actualStartTime=Zo)}function nn(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,r.selfBaseDuration=g,Zo=-1}}function UH(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,Zo=-1}}function qv(){if(0<=Zo){var r=fg(),g=r-Zo;Zo=-1,re+=g,Ig+=g,Kr=r}}function $H(r){mg===null&&(mg=[]),mg.push(r),e0===null&&(e0=[]),e0.push(r)}function tv(){Zo=fg(),0>Qr&&(Qr=Zo)}function Ob(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function iX(r,g){if(l5===null){var o=l5=[];$6=0,le=R4(),Rh={status:"pending",value:void 0,then:function(v){o.push(v)}}}return $6++,g.then(mH,mH),g}function mH(){if(--$6===0&&(-1<Il||(h0=-1.1),l5!==null)){Rh!==null&&(Rh.status="fulfilled");var r=l5;l5=null,le=0,Rh=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function nX(r,g){var o=[],v={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return r.then(function(){v.status="fulfilled",v.value=g;for(var h=0;h<o.length;h++)(0,o[h])(g)},function(h){v.status="rejected",v.reason=h;for(h=0;h<o.length;h++)(0,o[h])(void 0)}),v}function Pn(){var r=ve.current;return r!==null?r:Mg.pooledCache}function hu(r,g){g===null?Gr(ve,ve.current,r):Gr(ve,g.pool,r)}function LH(){var r=Pn();return r===null?null:{parent:jg._currentValue,pool:r}}function IH(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function FH(r){return r=r.status,r==="fulfilled"||r==="rejected"}function NH(r,g,o){C.actQueue!==null&&(C.didUsePromise=!0);var v=r.thenables;if(o=v[o],o===void 0?v.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(yv,yv),g=o),g._debugInfo===void 0){r=performance.now(),v=g.displayName;var h={name:typeof v==="string"?v:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:h}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){h.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZH(r),r;default:if(typeof g.status==="string")g.then(yv,yv);else{if(r=Mg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(b){if(g.status==="pending"){var i=g;i.status="fulfilled",i.value=b}},function(b){if(g.status==="pending"){var i=g;i.status="rejected",i.reason=b}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZH(r),r}throw he=g,i5=!0,Gh}}function N0(r){try{return aJ(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw he=g,i5=!0,Gh;throw g}}function BH(){if(he===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=he;return he=null,i5=!1,r}function ZH(r){if(r===Gh||r===Ri)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Oo(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function Hn(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function bu(r,g,o){for(var v=Object.keys(r.props),h=0;h<v.length;h++){var b=v[h];if(b!=="children"&&b!=="key"){g===null&&(g=sw(r,o.mode,0),g._debugInfo=Dr,g.return=o),wr(g,function(i){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i)},b);break}}}function wu(r){var g=n5;return n5+=1,Xh===null&&(Xh=IH()),NH(Xh,r,g)}function qb(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function xH(r,g){if(g.$$typeof===KY)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function uu(r,g){var o=Hn();o!==null?o.run(xH.bind(null,r,g)):xH(r,g)}function CH(r,g){var o=x(r)||"Component";cA[o]||(cA[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function iu(r,g){var o=Hn();o!==null?o.run(CH.bind(null,r,g)):CH(r,g)}function TH(r,g){var o=x(r)||"Component";aA[o]||(aA[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function nu(r,g){var o=Hn();o!==null?o.run(TH.bind(null,r,g)):TH(r,g)}function SH(r){function g(J,z){if(r){var U=J.deletions;U===null?(J.deletions=[z],J.flags|=16):U.push(z)}}function o(J,z){if(!r)return null;for(;z!==null;)g(J,z),z=z.sibling;return null}function v(J){for(var z=new Map;J!==null;)J.key!==null?z.set(J.key,J):z.set(J.index,J),J=J.sibling;return z}function h(J,z){return J=Ev(J,z),J.index=0,J.sibling=null,J}function b(J,z,U){if(J.index=U,!r)return J.flags|=1048576,z;if(U=J.alternate,U!==null)return U=U.index,U<z?(J.flags|=67108866,z):U;return J.flags|=67108866,z}function i(J){return r&&J.alternate===null&&(J.flags|=67108866),J}function P(J,z,U,D){if(z===null||z.tag!==6)return z=rn(U,J.mode,D),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,U),z.return=J,z._debugInfo=Dr,z}function t(J,z,U,D){var ir=U.type;if(ir===oh)return z=$(J,z,U.props.children,D,U.key),bu(U,z,J),z;if(z!==null&&(z.elementType===ir||tH(z,U)||typeof ir==="object"&&ir!==null&&ir.$$typeof===il&&N0(ir)===z.type))return z=h(z,U.props),qb(z,U),z.return=J,z._debugOwner=U._owner,z._debugInfo=Dr,z;return z=sw(U,J.mode,D),qb(z,U),z.return=J,z._debugInfo=Dr,z}function M(J,z,U,D){if(z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation)return z=gn(U,J.mode,D),z.return=J,z._debugInfo=Dr,z;return z=h(z,U.children||[]),z.return=J,z._debugInfo=Dr,z}function $(J,z,U,D,ir){if(z===null||z.tag!==7)return z=S1(U,J.mode,D,ir),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,U),z.return=J,z._debugInfo=Dr,z}function m(J,z,U){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return z=rn(""+z,J.mode,U),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;if(typeof z==="object"&&z!==null){switch(z.$$typeof){case Yv:return U=sw(z,J.mode,U),qb(U,z),U.return=J,J=Oo(z._debugInfo),U._debugInfo=Dr,Dr=J,U;case gh:return z=gn(z,J.mode,U),z.return=J,z._debugInfo=Dr,z;case il:var D=Oo(z._debugInfo);return z=N0(z),J=m(J,z,U),Dr=D,J}if(lo(z)||B(z))return U=S1(z,J.mode,U,null),U.return=J,U._debugOwner=J,U._debugTask=J._debugTask,J=Oo(z._debugInfo),U._debugInfo=Dr,Dr=J,U;if(typeof z.then==="function")return D=Oo(z._debugInfo),J=m(J,wu(z),U),Dr=D,J;if(z.$$typeof===Jv)return m(J,lu(J,z),U);uu(J,z)}return typeof z==="function"&&iu(J,z),typeof z==="symbol"&&nu(J,z),null}function Q(J,z,U,D){var ir=z!==null?z.key:null;if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ir!==null?null:P(J,z,""+U,D);if(typeof U==="object"&&U!==null){switch(U.$$typeof){case Yv:return U.key===ir?(ir=Oo(U._debugInfo),J=t(J,z,U,D),Dr=ir,J):null;case gh:return U.key===ir?M(J,z,U,D):null;case il:return ir=Oo(U._debugInfo),U=N0(U),J=Q(J,z,U,D),Dr=ir,J}if(lo(U)||B(U)){if(ir!==null)return null;return ir=Oo(U._debugInfo),J=$(J,z,U,D,null),Dr=ir,J}if(typeof U.then==="function")return ir=Oo(U._debugInfo),J=Q(J,z,wu(U),D),Dr=ir,J;if(U.$$typeof===Jv)return Q(J,z,lu(J,U),D);uu(J,U)}return typeof U==="function"&&iu(J,U),typeof U==="symbol"&&nu(J,U),null}function N(J,z,U,D,ir){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return J=J.get(U)||null,P(z,J,""+D,ir);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Yv:return U=J.get(D.key===null?U:D.key)||null,J=Oo(D._debugInfo),z=t(z,U,D,ir),Dr=J,z;case gh:return J=J.get(D.key===null?U:D.key)||null,M(z,J,D,ir);case il:var mr=Oo(D._debugInfo);return D=N0(D),z=N(J,z,U,D,ir),Dr=mr,z}if(lo(D)||B(D))return U=J.get(U)||null,J=Oo(D._debugInfo),z=$(z,U,D,ir,null),Dr=J,z;if(typeof D.then==="function")return mr=Oo(D._debugInfo),z=N(J,z,U,wu(D),ir),Dr=mr,z;if(D.$$typeof===Jv)return N(J,z,U,lu(z,D),ir);uu(z,D)}return typeof D==="function"&&iu(z,D),typeof D==="symbol"&&nu(z,D),null}function hr(J,z,U,D){if(typeof U!=="object"||U===null)return D;switch(U.$$typeof){case Yv:case gh:G(J,z,U);var ir=U.key;if(typeof ir!=="string")break;if(D===null){D=new Set,D.add(ir);break}if(!D.has(ir)){D.add(ir);break}wr(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ir)});break;case il:U=N0(U),hr(J,z,U,D)}return D}function Hr(J,z,U,D){for(var ir=null,mr=null,Yr=null,Rr=z,Tr=z=0,Kg=null;Rr!==null&&Tr<U.length;Tr++){Rr.index>Tr?(Kg=Rr,Rr=null):Kg=Rr.sibling;var _g=Q(J,Rr,U[Tr],D);if(_g===null){Rr===null&&(Rr=Kg);break}ir=hr(J,_g,U[Tr],ir),r&&Rr&&_g.alternate===null&&g(J,Rr),z=b(_g,z,Tr),Yr===null?mr=_g:Yr.sibling=_g,Yr=_g,Rr=Kg}if(Tr===U.length)return o(J,Rr),pr&&cv(J,Tr),mr;if(Rr===null){for(;Tr<U.length;Tr++)Rr=m(J,U[Tr],D),Rr!==null&&(ir=hr(J,Rr,U[Tr],ir),z=b(Rr,z,Tr),Yr===null?mr=Rr:Yr.sibling=Rr,Yr=Rr);return pr&&cv(J,Tr),mr}for(Rr=v(Rr);Tr<U.length;Tr++)Kg=N(Rr,J,Tr,U[Tr],D),Kg!==null&&(ir=hr(J,Kg,U[Tr],ir),r&&Kg.alternate!==null&&Rr.delete(Kg.key===null?Tr:Kg.key),z=b(Kg,z,Tr),Yr===null?mr=Kg:Yr.sibling=Kg,Yr=Kg);return r&&Rr.forEach(function(q0){return g(J,q0)}),pr&&cv(J,Tr),mr}function Xg(J,z,U,D){if(U==null)throw Error("An iterable object provided no iterator.");for(var ir=null,mr=null,Yr=z,Rr=z=0,Tr=null,Kg=null,_g=U.next();Yr!==null&&!_g.done;Rr++,_g=U.next()){Yr.index>Rr?(Tr=Yr,Yr=null):Tr=Yr.sibling;var q0=Q(J,Yr,_g.value,D);if(q0===null){Yr===null&&(Yr=Tr);break}Kg=hr(J,q0,_g.value,Kg),r&&Yr&&q0.alternate===null&&g(J,Yr),z=b(q0,z,Rr),mr===null?ir=q0:mr.sibling=q0,mr=q0,Yr=Tr}if(_g.done)return o(J,Yr),pr&&cv(J,Rr),ir;if(Yr===null){for(;!_g.done;Rr++,_g=U.next())Yr=m(J,_g.value,D),Yr!==null&&(Kg=hr(J,Yr,_g.value,Kg),z=b(Yr,z,Rr),mr===null?ir=Yr:mr.sibling=Yr,mr=Yr);return pr&&cv(J,Rr),ir}for(Yr=v(Yr);!_g.done;Rr++,_g=U.next())Tr=N(Yr,J,Rr,_g.value,D),Tr!==null&&(Kg=hr(J,Tr,_g.value,Kg),r&&Tr.alternate!==null&&Yr.delete(Tr.key===null?Rr:Tr.key),z=b(Tr,z,Rr),mr===null?ir=Tr:mr.sibling=Tr,mr=Tr);return r&&Yr.forEach(function(MQ){return g(J,MQ)}),pr&&cv(J,Rr),ir}function sr(J,z,U,D){if(typeof U==="object"&&U!==null&&U.type===oh&&U.key===null&&(bu(U,null,J),U=U.props.children),typeof U==="object"&&U!==null){switch(U.$$typeof){case Yv:var ir=Oo(U._debugInfo);r:{for(var mr=U.key;z!==null;){if(z.key===mr){if(mr=U.type,mr===oh){if(z.tag===7){o(J,z.sibling),D=h(z,U.props.children),D.return=J,D._debugOwner=U._owner,D._debugInfo=Dr,bu(U,D,J),J=D;break r}}else if(z.elementType===mr||tH(z,U)||typeof mr==="object"&&mr!==null&&mr.$$typeof===il&&N0(mr)===z.type){o(J,z.sibling),D=h(z,U.props),qb(D,U),D.return=J,D._debugOwner=U._owner,D._debugInfo=Dr,J=D;break r}o(J,z);break}else g(J,z);z=z.sibling}U.type===oh?(D=S1(U.props.children,J.mode,D,U.key),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,bu(U,D,J),J=D):(D=sw(U,J.mode,D),qb(D,U),D.return=J,D._debugInfo=Dr,J=D)}return J=i(J),Dr=ir,J;case gh:r:{ir=U;for(U=ir.key;z!==null;){if(z.key===U)if(z.tag===4&&z.stateNode.containerInfo===ir.containerInfo&&z.stateNode.implementation===ir.implementation){o(J,z.sibling),D=h(z,ir.children||[]),D.return=J,J=D;break r}else{o(J,z);break}else g(J,z);z=z.sibling}D=gn(ir,J.mode,D),D.return=J,J=D}return i(J);case il:return ir=Oo(U._debugInfo),U=N0(U),J=sr(J,z,U,D),Dr=ir,J}if(lo(U))return ir=Oo(U._debugInfo),J=Hr(J,z,U,D),Dr=ir,J;if(B(U)){if(ir=Oo(U._debugInfo),mr=B(U),typeof mr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Yr=mr.call(U);if(Yr===U){if(J.tag!==0||Object.prototype.toString.call(J.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Yr)!=="[object Generator]")yA||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),yA=!0}else U.entries!==mr||F6||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),F6=!0);return J=Xg(J,z,Yr,D),Dr=ir,J}if(typeof U.then==="function")return ir=Oo(U._debugInfo),J=sr(J,z,wu(U),D),Dr=ir,J;if(U.$$typeof===Jv)return sr(J,z,lu(J,U),D);uu(J,U)}if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ir=""+U,z!==null&&z.tag===6?(o(J,z.sibling),D=h(z,ir),D.return=J,J=D):(o(J,z),D=rn(ir,J.mode,D),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,J=D),i(J);return typeof U==="function"&&iu(J,U),typeof U==="symbol"&&nu(J,U),o(J,z)}return function(J,z,U,D){var ir=Dr;Dr=null;try{n5=0;var mr=sr(J,z,U,D);return Xh=null,mr}catch(Kg){if(Kg===Gh||Kg===Ri)throw Kg;var Yr=Y(29,Kg,null,J.mode);Yr.lanes=D,Yr.return=J;var Rr=Yr._debugInfo=Dr;if(Yr._debugOwner=J._debugOwner,Yr._debugTask=J._debugTask,Rr!=null){for(var Tr=Rr.length-1;0<=Tr;Tr--)if(typeof Rr[Tr].stack==="string"){Yr._debugOwner=Rr[Tr],Yr._debugTask=Rr[Tr].debugTask;break}}return Yr}finally{Dr=ir}}}function kH(r,g){var o=lo(r);return r=!o&&typeof B(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function On(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qn(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function B0(r){return{lane:r,tag:fA,payload:null,callback:null,next:null}}function Z0(r,g,o){var v=r.updateQueue;if(v===null)return null;if(v=v.shared,B6===v&&!sA){var h=x(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,h),sA=!0}if((og&eo)!==io)return h=v.pending,h===null?g.next=g:(g.next=h.next,h.next=g),v.pending=g,g=dw(r),qH(r,null,o),g;return pw(r,v,g,o),dw(r)}function tb(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var v=g.lanes;v&=r.pendingLanes,o|=v,g.lanes=o,F1(r,o)}}function Pu(r,g){var{updateQueue:o,alternate:v}=r;if(v!==null&&(v=v.updateQueue,o===v)){var h=null,b=null;if(o=o.firstBaseUpdate,o!==null){do{var i={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};b===null?h=b=i:b=b.next=i,o=o.next}while(o!==null);b===null?h=b=g:b=b.next=g}else h=b=g;o={baseState:v.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:v.shared,callbacks:v.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Ab(){if(Z6){var r=Rh;if(r!==null)throw r}}function Mb(r,g,o,v){Z6=!1;var h=r.updateQueue;l1=!1,B6=h.shared;var{firstBaseUpdate:b,lastBaseUpdate:i}=h,P=h.shared.pending;if(P!==null){h.shared.pending=null;var t=P,M=t.next;t.next=null,i===null?b=M:i.next=M,i=t;var $=r.alternate;$!==null&&($=$.updateQueue,P=$.lastBaseUpdate,P!==i&&(P===null?$.firstBaseUpdate=M:P.next=M,$.lastBaseUpdate=t))}if(b!==null){var m=h.baseState;i=0,$=M=t=null,P=b;do{var Q=P.lane&-536870913,N=Q!==P.lane;if(N?(Vr&Q)===Q:(v&Q)===Q){Q!==0&&Q===le&&(Z6=!0),$!==null&&($=$.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});r:{Q=r;var hr=P,Hr=g,Xg=o;switch(hr.tag){case pA:if(hr=hr.payload,typeof hr==="function"){Mh=!0;var sr=hr.call(Xg,m,Hr);if(Q.mode&Ko){Rg(!0);try{hr.call(Xg,m,Hr)}finally{Rg(!1)}}Mh=!1,m=sr;break r}m=hr;break r;case N6:Q.flags=Q.flags&-65537|128;case fA:if(sr=hr.payload,typeof sr==="function"){if(Mh=!0,hr=sr.call(Xg,m,Hr),Q.mode&Ko){Rg(!0);try{sr.call(Xg,m,Hr)}finally{Rg(!1)}}Mh=!1}else hr=sr;if(hr===null||hr===void 0)break r;m=cr({},m,hr);break r;case dA:l1=!0}}Q=P.callback,Q!==null&&(r.flags|=64,N&&(r.flags|=8192),N=h.callbacks,N===null?h.callbacks=[Q]:N.push(Q))}else N={lane:Q,tag:P.tag,payload:P.payload,callback:P.callback,next:null},$===null?(M=$=N,t=m):$=$.next=N,i|=Q;if(P=P.next,P===null)if(P=h.shared.pending,P===null)break;else N=P,P=N.next,N.next=null,h.lastBaseUpdate=N,h.shared.pending=null}while(1);$===null&&(t=m),h.baseState=t,h.firstBaseUpdate=M,h.lastBaseUpdate=$,b===null&&(h.shared.lanes=0),h1|=i,r.lanes=i,r.memoizedState=m}B6=null}function DH(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function PX(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)DH(o[r],g)}function VH(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)DH(o[r],g)}function _H(r,g){var o=Nv;Gr(Xi,o,r),Gr(Yh,g,r),Nv=o|g.baseLanes}function tn(r){Gr(Xi,Nv,r),Gr(Yh,Yh.current,r)}function An(r){Nv=Xi.current,tr(Yh,r),tr(Xi,r)}function x0(r){var g=r.alternate;Gr(Vg,Vg.current&Jh,r),Gr(Ol,r,r),Fl===null&&(g===null||Yh.current!==null?Fl=r:g.memoizedState!==null&&(Fl=r))}function Mn(r){Gr(Vg,Vg.current,r),Gr(Ol,r,r),Fl===null&&(Fl=r)}function yH(r){r.tag===22?(Gr(Vg,Vg.current,r),Gr(Ol,r,r),Fl===null&&(Fl=r)):C0(r)}function C0(r){Gr(Vg,Vg.current,r),Gr(Ol,Ol.current,r)}function bl(r){tr(Ol,r),Fl===r&&(Fl=null),tr(Vg,r)}function Hu(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||L4(o)||I4(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function Er(){var r=Z;Bl===null?Bl=[r]:Bl.push(r)}function d(){var r=Z;if(Bl!==null&&(i0++,Bl[i0]!==r)){var g=x($r);if(!rM.has(g)&&(rM.add(g),Bl!==null)){for(var o="",v=0;v<=i0;v++){var h=Bl[v],b=v===i0?r:h;for(h=v+1+". "+h;30>h.length;)h+=" ";h+=b+`
`,o+=h}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function De(r){r===void 0||r===null||lo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Z,typeof r)}function Ou(){var r=x($r);oM.has(r)||(oM.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Tg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function Wn(r,g){if(O5)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Z),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,Z,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!Bo(r[o],g[o]))return!1;return!0}function Rn(r,g,o,v,h,b){if(w0=b,$r=g,Bl=r!==null?r._debugHookTypes:null,i0=-1,O5=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")b=x($r),x6.has(b)||(x6.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,C.H=r!==null&&r.memoizedState!==null?T6:Bl!==null?lM:C6,we=b=(g.mode&Ko)!==Ur;var i=m6(o,v,h);if(we=!1,zh&&(i=Gn(g,o,v,h)),b){Rg(!0);try{i=Gn(g,o,v,h)}finally{Rg(!1)}}return EH(r,g),i}function EH(r,g){g._debugHookTypes=Bl,g.dependencies===null?u0!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:u0}):g.dependencies._debugThenableState=u0,C.H=q5;var o=Ag!==null&&Ag.next!==null;if(w0=0,Bl=Z=pg=Ag=$r=null,i0=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Ji=!1,H5=0,u0=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||dg||(r=r.dependencies,r!==null&&ou(r)&&(dg=!0)),i5?(i5=!1,r=!0):r=!1,r&&(g=x(g)||"Unknown",gM.has(g)||x6.has(g)||(gM.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function Gn(r,g,o,v){$r=r;var h=0;do{if(zh&&(u0=null),H5=0,zh=!1,h>=fJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(h+=1,O5=!1,pg=Ag=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}i0=-1,C.H=vM,b=m6(g,o,v)}while(zh);return b}function HX(){var r=C.H,g=r.useState()[0];return g=typeof g.then==="function"?Wb(g):g,r=r.useState()[0],(Ag!==null?Ag.memoizedState:null)!==r&&($r.flags|=1024),g}function Xn(){var r=Qi!==0;return Qi=0,r}function Yn(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&yl)!==Ur?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Jn(r){if(Ji){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}Ji=!1}w0=0,Bl=pg=Ag=$r=null,i0=-1,Z=null,zh=!1,H5=Qi=0,u0=null}function Lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pg===null?$r.memoizedState=pg=r:pg=pg.next=r,pg}function ig(){if(Ag===null){var r=$r.alternate;r=r!==null?r.memoizedState:null}else r=Ag.next;var g=pg===null?$r.memoizedState:pg.next;if(g!==null)pg=g,Ag=r;else{if(r===null){if($r.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Ag=r,r={memoizedState:Ag.memoizedState,baseState:Ag.baseState,baseQueue:Ag.baseQueue,queue:Ag.queue,next:null},pg===null?$r.memoizedState=pg=r:pg=pg.next=r}return pg}function qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wb(r){var g=H5;return H5+=1,u0===null&&(u0=IH()),r=NH(u0,r,g),g=$r,(pg===null?g.memoizedState:pg.next)===null&&(g=g.alternate,C.H=g!==null&&g.memoizedState!==null?T6:C6),r}function T0(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Wb(r);if(r.$$typeof===Jv)return $g(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function y1(r){var g=null,o=$r.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var v=$r.alternate;v!==null&&(v=v.updateQueue,v!==null&&(v=v.memoCache,v!=null&&(g={data:v.data.map(function(h){return h.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=qu(),$r.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||O5)for(o=g.data[g.index]=Array(r),v=0;v<r;v++)o[v]=UY;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function kl(r,g){return typeof g==="function"?g(r):g}function Qn(r,g,o){var v=Lo();if(o!==void 0){var h=o(g);if(we){Rg(!0);try{o(g)}finally{Rg(!1)}}}else h=g;return v.memoizedState=v.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},v.queue=r,r=r.dispatch=MX.bind(null,$r,r),[v.memoizedState,r]}function Ve(r){var g=ig();return zn(g,Ag,r)}function zn(r,g,o){var v=r.queue;if(v===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");v.lastRenderedReducer=o;var h=r.baseQueue,b=v.pending;if(b!==null){if(h!==null){var i=h.next;h.next=b.next,b.next=i}g.baseQueue!==h&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=h=b,v.pending=null}if(b=r.baseState,h===null)r.memoizedState=b;else{g=h.next;var P=i=null,t=null,M=g,$=!1;do{var m=M.lane&-536870913;if(m!==M.lane?(Vr&m)===m:(w0&m)===m){var Q=M.revertLane;if(Q===0)t!==null&&(t=t.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),m===le&&($=!0);else if((w0&Q)===Q){M=M.next,Q===le&&($=!0);continue}else m={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},t===null?(P=t=m,i=b):t=t.next=m,$r.lanes|=Q,h1|=Q;m=M.action,we&&o(b,m),b=M.hasEagerState?M.eagerState:o(b,m)}else Q={lane:m,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},t===null?(P=t=Q,i=b):t=t.next=Q,$r.lanes|=m,h1|=m;M=M.next}while(M!==null&&M!==g);if(t===null?i=b:t.next=P,!Bo(b,r.memoizedState)&&(dg=!0,$&&(o=Rh,o!==null)))throw o;r.memoizedState=b,r.baseState=i,r.baseQueue=t,v.lastRenderedState=b}return h===null&&(v.lanes=0),[r.memoizedState,v.dispatch]}function Rb(r){var g=ig(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:v,pending:h}=o,b=g.memoizedState;if(h!==null){o.pending=null;var i=h=h.next;do b=r(b,i.action),i=i.next;while(i!==h);Bo(b,g.memoizedState)||(dg=!0),g.memoizedState=b,g.baseQueue===null&&(g.baseState=b),o.lastRenderedState=b}return[b,v]}function Kn(r,g,o){var v=$r,h=Lo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=o();Qh||b===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Qh=!0)}else{if(b=g(),Qh||(o=g(),Bo(b,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qh=!0)),Mg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||cH(v,g,b)}return h.memoizedState=b,o={value:b,getSnapshot:g},h.queue=o,Wu(jH.bind(null,v,o,r),[r]),v.flags|=2048,ye(Nl|Co,{destroy:void 0},aH.bind(null,v,o,b,g),null),b}function tu(r,g,o){var v=$r,h=ig(),b=pr;if(b){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!Qh){var i=g();Bo(o,i)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qh=!0)}if(i=!Bo((Ag||h).memoizedState,o))h.memoizedState=o,dg=!0;h=h.queue;var P=jH.bind(null,v,h,r);if(Eo(2048,Co,P,[r]),h.getSnapshot!==g||i||pg!==null&&pg.memoizedState.tag&Nl){if(v.flags|=2048,ye(Nl|Co,{destroy:void 0},aH.bind(null,v,h,o,g),null),Mg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(w0&127)!==0||cH(v,g,o)}return o}function cH(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=$r.updateQueue,g===null?(g=qu(),$r.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function aH(r,g,o,v){g.value=o,g.getSnapshot=v,fH(g)&&pH(r)}function jH(r,g,o){return o(function(){fH(g)&&(iv(2,"updateSyncExternalStore()",r),pH(r))})}function fH(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!Bo(r,o)}catch(v){return!0}}function pH(r){var g=Qo(r,2);g!==null&&Bg(g,r,2)}function Un(r){var g=Lo();if(typeof r==="function"){var o=r;if(r=o(),we){Rg(!0);try{o()}finally{Rg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:r},g}function $n(r){r=Un(r);var g=r.queue,o=tO.bind(null,$r,g);return g.dispatch=o,[r.memoizedState,o]}function mn(r){var g=Lo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=_n.bind(null,$r,!0,o),o.dispatch=g,[r,g]}function dH(r,g){var o=ig();return sH(o,Ag,r,g)}function sH(r,g,o,v){return r.baseState=o,zn(r,Ag,typeof v==="function"?v:kl)}function rO(r,g){var o=ig();if(Ag!==null)return sH(o,Ag,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OX(r,g,o,v,h){if(Qu(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var b={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){b.listeners.push(i)}};C.T!==null?o(!0):b.isTransition=!1,v(b),o=g.pending,o===null?(b.next=g.pending=b,gO(g,b)):(b.next=o.next,g.pending=o.next=b)}}function gO(r,g){var{action:o,payload:v}=g,h=r.state;if(g.isTransition){var b=C.T,i={};i._updatedFibers=new Set,C.T=i;try{var P=o(h,v),t=C.S;t!==null&&t(i,P),oO(r,g,P)}catch(M){Ln(r,g,M)}finally{b!==null&&i.types!==null&&(b.types!==null&&b.types!==i.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=i.types),C.T=b,b===null&&i._updatedFibers&&(r=i._updatedFibers.size,i._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{i=o(h,v),oO(r,g,i)}catch(M){Ln(r,g,M)}}function oO(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(C.asyncTransitions++,o.then(Ju,Ju),o.then(function(v){lO(r,g,v)},function(v){return Ln(r,g,v)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):lO(r,g,o)}function lO(r,g,o){g.status="fulfilled",g.value=o,vO(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,gO(r,o)))}function Ln(r,g,o){var v=r.pending;if(r.pending=null,v!==null){v=v.next;do g.status="rejected",g.reason=o,vO(g),g=g.next;while(g!==v)}r.action=null}function vO(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function eO(r,g){return g}function _e(r,g){if(pr){var o=Mg.formState;if(o!==null){r:{var v=$r;if(pr){if(zg){g:{var h=zg;for(var b=Ll;h.nodeType!==8;){if(!b){h=null;break g}if(h=ul(h.nextSibling),h===null){h=null;break g}}b=h.data,h=b===w8||b===VM?h:null}if(h){zg=ul(h.nextSibling),v=h.data===w8;break r}}I0(v)}v=!1}v&&(g=o[0])}}return o=Lo(),o.memoizedState=o.baseState=g,v={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eO,lastRenderedState:g},o.queue=v,o=tO.bind(null,$r,v),v.dispatch=o,v=Un(!1),b=_n.bind(null,$r,!1,v.queue),v=Lo(),h={state:g,dispatch:null,action:r,pending:null},v.queue=h,o=OX.bind(null,$r,h,b,o),h.dispatch=o,v.memoizedState=r,[g,o,!1]}function Au(r){var g=ig();return hO(g,Ag,r)}function hO(r,g,o){if(g=zn(r,g,eO)[0],r=Ve(kl)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var v=Wb(g)}catch(i){if(i===Gh)throw Ri;throw i}else v=g;g=ig();var h=g.queue,b=h.dispatch;return o!==g.memoizedState&&($r.flags|=2048,ye(Nl|Co,{destroy:void 0},qX.bind(null,h,o),null)),[v,b,r]}function qX(r,g){r.action=g}function Mu(r){var g=ig(),o=Ag;if(o!==null)return hO(g,o,r);ig(),g=g.memoizedState,o=ig();var v=o.queue.dispatch;return o.memoizedState=r,[g,v,!1]}function ye(r,g,o,v){return r={tag:r,create:o,deps:v,inst:g,next:null},g=$r.updateQueue,g===null&&(g=qu(),$r.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(v=o.next,o.next=r,r.next=v,g.lastEffect=r),r}function In(r){var g=Lo();return r={current:r},g.memoizedState=r}function E1(r,g,o,v){var h=Lo();$r.flags|=r,h.memoizedState=ye(Nl|g,{destroy:void 0},o,v===void 0?null:v)}function Eo(r,g,o,v){var h=ig();v=v===void 0?null:v;var b=h.memoizedState.inst;Ag!==null&&v!==null&&Wn(v,Ag.memoizedState.deps)?h.memoizedState=ye(g,b,o,v):($r.flags|=r,h.memoizedState=ye(Nl|g,b,o,v))}function Wu(r,g){($r.mode&yl)!==Ur?E1(276826112,Co,r,g):E1(8390656,Co,r,g)}function tX(r){$r.flags|=4;var g=$r.updateQueue;if(g===null)g=qu(),$r.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function Fn(r){var g=Lo(),o={impl:r};return g.memoizedState=o,function(){if((og&eo)!==io)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function Ru(r){var g=ig().memoizedState;return tX({ref:g,nextImpl:r}),function(){if((og&eo)!==io)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function Nn(r,g){var o=4194308;return($r.mode&yl)!==Ur&&(o|=134217728),E1(o,ql,r,g)}function bO(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function Bn(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var v=4194308;($r.mode&yl)!==Ur&&(v|=134217728),E1(v,ql,bO.bind(null,g,r),o)}function Gu(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,Eo(4,ql,bO.bind(null,g,r),o)}function Zn(r,g){return Lo().memoizedState=[r,g===void 0?null:g],r}function Xu(r,g){var o=ig();g=g===void 0?null:g;var v=o.memoizedState;if(g!==null&&Wn(g,v[1]))return v[0];return o.memoizedState=[r,g],r}function xn(r,g){var o=Lo();g=g===void 0?null:g;var v=r();if(we){Rg(!0);try{r()}finally{Rg(!1)}}return o.memoizedState=[v,g],v}function Yu(r,g){var o=ig();g=g===void 0?null:g;var v=o.memoizedState;if(g!==null&&Wn(g,v[1]))return v[0];if(v=r(),we){Rg(!0);try{r()}finally{Rg(!1)}}return o.memoizedState=[v,g],v}function Cn(r,g){var o=Lo();return Tn(o,r,g)}function wO(r,g){var o=ig();return iO(o,Ag.memoizedState,r,g)}function uO(r,g){var o=ig();return Ag===null?Tn(o,r,g):iO(o,Ag.memoizedState,r,g)}function Tn(r,g,o){if(o===void 0||(w0&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=nq(),$r.lanes|=r,h1|=r,o}function iO(r,g,o,v){if(Bo(o,g))return o;if(Yh.current!==null)return r=Tn(r,o,v),Bo(r,g)||(dg=!0),r;if((w0&42)===0||(w0&1073741824)!==0&&(Vr&261930)===0)return dg=!0,r.memoizedState=o;return r=nq(),$r.lanes|=r,h1|=r,g}function Ju(){C.asyncTransitions--}function nO(r,g,o,v,h){var b=wg.p;wg.p=b!==0&&b<_l?b:_l;var i=C.T,P={};P._updatedFibers=new Set,C.T=P,_n(r,!1,g,o);try{var t=h(),M=C.S;if(M!==null&&M(P,t),t!==null&&typeof t==="object"&&typeof t.then==="function"){C.asyncTransitions++,t.then(Ju,Ju);var $=nX(t,v);Gb(r,g,$,wl(r))}else Gb(r,g,v,wl(r))}catch(m){Gb(r,g,{then:function(){},status:"rejected",reason:m},wl(r))}finally{wg.p=b,i!==null&&P.types!==null&&(i.types!==null&&i.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),i.types=P.types),C.T=i,i===null&&P._updatedFibers&&(r=P._updatedFibers.size,P._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function Sn(r,g,o,v){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var h=PO(r).queue;uX(r),nO(r,h,g,We,o===null?X:function(){return HO(r),o(v)})}function PO(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:We,baseState:We,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:We},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function HO(r){C.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=PO(r);g.next===null&&(g=r.alternate.memoizedState),Gb(r,g.next.queue,{},wl(r))}function kn(){var r=Un(!1);return r=nO.bind(null,$r,r.queue,!0,!1),Lo().memoizedState=r,[!1,r]}function OO(){var r=Ve(kl)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function qO(){var r=Rb(kl)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function c1(){return $g(m5)}function Dn(){var r=Lo(),g=Mg.identifierPrefix;if(pr){var o=l0,v=o0;o=(v&~(1<<32-Io(v)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Qi++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=jJ++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function Vn(){return Lo().memoizedState=AX.bind(null,$r)}function AX(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var v=wl(o),h=B0(v),b=Z0(o,h,v);b!==null&&(iv(v,"refresh()",r),Bg(b,o,v),tb(b,o,v)),r=wn(),g!==null&&g!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),h.payload={cache:r};return}o=o.return}}function MX(r,g,o){var v=arguments;typeof v[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),v=wl(r);var h={lane:v,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Qu(r)?AO(g,h):(h=f2(r,g,h,v),h!==null&&(iv(v,"dispatch()",r),Bg(h,r,v),MO(h,g,v)))}function tO(r,g,o){var v=arguments;typeof v[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),v=wl(r),Gb(r,g,o,v)&&iv(v,"setState()",r)}function Gb(r,g,o,v){var h={lane:v,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qu(r))AO(g,h);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=g.lastRenderedReducer,b!==null)){var i=C.H;C.H=cl;try{var P=g.lastRenderedState,t=b(P,o);if(h.hasEagerState=!0,h.eagerState=t,Bo(t,P))return pw(r,g,h,0),Mg===null&&fw(),!1}catch(M){}finally{C.H=i}}if(o=f2(r,g,h,v),o!==null)return Bg(o,r,v),MO(o,g,v),!0}return!1}function _n(r,g,o,v){if(C.T===null&&le===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),v={lane:2,revertLane:R4(),gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null},Qu(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=f2(r,o,v,2),g!==null&&(iv(2,"setOptimistic()",r),Bg(g,r,2))}function Qu(r){var g=r.alternate;return r===$r||g!==null&&g===$r}function AO(r,g){zh=Ji=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function MO(r,g,o){if((o&4194048)!==0){var v=g.lanes;v&=r.pendingLanes,o|=v,g.lanes=o,F1(r,o)}}function yn(r){if(r!==null&&typeof r!=="function"){var g=String(r);qM.has(g)||(qM.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function En(r,g,o,v){var h=r.memoizedState,b=o(v,h);if(r.mode&Ko){Rg(!0);try{b=o(v,h)}finally{Rg(!1)}}b===void 0&&(g=y(g)||"Component",nM.has(g)||(nM.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),h=b===null||b===void 0?h:cr({},h,b),r.memoizedState=h,r.lanes===0&&(r.updateQueue.baseState=h)}function WO(r,g,o,v,h,b,i){var P=r.stateNode;if(typeof P.shouldComponentUpdate==="function"){if(o=P.shouldComponentUpdate(v,b,i),r.mode&Ko){Rg(!0);try{o=P.shouldComponentUpdate(v,b,i)}finally{Rg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!ub(o,v)||!ub(h,b):!0}function RO(r,g,o,v){var h=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,v),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,v),g.state!==h&&(r=x(r)||"Component",hM.has(r)||(hM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),S6.enqueueReplaceState(g,g.state,null))}function a1(r,g){var o=g;if("ref"in g){o={};for(var v in g)v!=="ref"&&(o[v]=g[v])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var h in r)o[h]===void 0&&(o[h]=r[h])}return o}function GO(r){A6(r),console.warn(`%s

%s
`,Kh?"An error occurred in the <"+Kh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function XO(r){var g=Kh?"The above error occurred in the <"+Kh+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((k6||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var v=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,pM+" "+r[0],dM,fi+v+fi,sM):r.splice(0,0,pM,dM,fi+v+fi,sM),r.unshift(console),v=tQ.apply(console.error,r),v()}else console.error(`%o

%s

%s
`,r,g,o)}function YO(r){A6(r)}function zu(r,g){try{Kh=g.source?x(g.source):null,k6=null;var o=g.value;if(C.actQueue!==null)C.thrownErrors.push(o);else{var v=r.onUncaughtError;v(o,{componentStack:g.stack})}}catch(h){setTimeout(function(){throw h})}}function JO(r,g,o){try{Kh=o.source?x(o.source):null,k6=x(g);var v=r.onCaughtError;v(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function cn(r,g,o){return o=B0(o),o.tag=N6,o.payload={element:null},o.callback=function(){wr(g.source,zu,r,g)},o}function an(r){return r=B0(r),r.tag=N6,r}function jn(r,g,o,v){var h=o.type.getDerivedStateFromError;if(typeof h==="function"){var b=v.value;r.payload=function(){return h(b)},r.callback=function(){AH(o),wr(v.source,JO,g,o,v)}}var i=o.stateNode;i!==null&&typeof i.componentDidCatch==="function"&&(r.callback=function(){AH(o),wr(v.source,JO,g,o,v),typeof h!=="function"&&(w1===null?w1=new Set([this]):w1.add(this)),yJ(this,v),typeof h==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",x(o)||"Unknown")})}function WX(r,g,o,v,h){if(o.flags|=32768,Kv&&$b(r,h),v!==null&&typeof v==="object"&&typeof v.then==="function"){if(g=o.alternate,g!==null&&ke(g,o,h,!0),pr&&(mv=!0),o=Ol.current,o!==null){switch(o.tag){case 31:case 13:return Fl===null?Bu():o.alternate===null&&Fg===P0&&(Fg=Ui),o.flags&=-257,o.flags|=65536,o.lanes=h,v===Gi?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([v]):g.add(v),t4(r,v,h)),!1;case 22:return o.flags|=65536,v===Gi?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([v])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([v]):o.add(v)),t4(r,v,h)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return t4(r,v,h),Bu(),!1}if(pr)return mv=!0,g=Ol.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=h,v!==Y6&&nb(vl(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:v}),o))):(v!==Y6&&nb(vl(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:v}),o)),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,v=vl(v,o),h=cn(r.stateNode,v,h),Pu(r,h),Fg!==v1&&(Fg=ue)),!1;var b=vl(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:v}),o);if(G5===null?G5=[b]:G5.push(b),Fg!==v1&&(Fg=ue),g===null)return!0;v=vl(v,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=h&-h,o.lanes|=r,r=cn(o.stateNode,v,r),Pu(o,r),!1;case 1:if(g=o.type,b=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(w1===null||!w1.has(b))))return o.flags|=65536,h&=-h,o.lanes|=h,h=an(h),jn(h,r,o,v),Pu(o,h),!1}o=o.return}while(o!==null);return!1}function qo(r,g,o,v){g.child=r===null?jA(g,null,o,v):be(g,r.child,o,v)}function QO(r,g,o,v,h){o=o.render;var b=g.ref;if("ref"in v){var i={};for(var P in v)P!=="ref"&&(i[P]=v[P])}else i=v;if(V1(g),v=Rn(r,g,o,i,b,h),P=Xn(),r!==null&&!dg)return Yn(r,g,h),fv(r,g,h);return pr&&P&&on(g),g.flags|=1,qo(r,g,v,h),g.child}function zO(r,g,o,v,h){if(r===null){var b=o.type;if(typeof b==="function"&&!d2(b)&&b.defaultProps===void 0&&o.compare===null)return o=T1(b),g.tag=15,g.type=o,pn(g,b),KO(r,g,o,v,h);return r=s2(o.type,null,v,g,g.mode,h),r.ref=g.ref,r.return=g,g.child=r}if(b=r.child,!l4(r,h)){var i=b.memoizedProps;if(o=o.compare,o=o!==null?o:ub,o(i,v)&&r.ref===g.ref)return fv(r,g,h)}return g.flags|=1,r=Ev(b,v),r.ref=g.ref,r.return=g,g.child=r}function KO(r,g,o,v,h){if(r!==null){var b=r.memoizedProps;if(ub(b,v)&&r.ref===g.ref&&g.type===r.type)if(dg=!1,g.pendingProps=v=b,l4(r,h))(r.flags&131072)!==0&&(dg=!0);else return g.lanes=r.lanes,fv(r,g,h)}return fn(r,g,o,v,h)}function UO(r,g,o,v){var h=v.children,b=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),v.mode==="hidden"){if((g.flags&128)!==0){if(b=b!==null?b.baseLanes|o:o,r!==null){v=g.child=r.child;for(h=0;v!==null;)h=h|v.lanes|v.childLanes,v=v.sibling;v=h&~b}else v=0,g.child=null;return $O(r,g,b,o,v)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&hu(g,b!==null?b.cachePool:null),b!==null?_H(g,b):tn(g),yH(g);else return v=g.lanes=536870912,$O(r,g,b!==null?b.baseLanes|o:o,o,v)}else b!==null?(hu(g,b.cachePool),_H(g,b),C0(g),g.memoizedState=null):(r!==null&&hu(g,null),tn(g),C0(g));return qo(r,g,h,o),g.child}function Xb(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function $O(r,g,o,v,h){var b=Pn();return b=b===null?null:{parent:jg._currentValue,pool:b},g.memoizedState={baseLanes:o,cachePool:b},r!==null&&hu(g,null),tn(g),yH(g),r!==null&&ke(r,g,v,!0),g.childLanes=h,null}function Ku(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=$u({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function mO(r,g,o){return be(g,r.child,null,o),r=Ku(g,g.pendingProps),r.flags|=2,bl(g),g.memoizedState=null,r}function RX(r,g,o){var v=g.pendingProps,h=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(v.mode==="hidden")return r=Ku(g,v),g.lanes=536870912,Xb(null,r);if(Mn(g),(r=zg)?(o=gt(r,Ll),o=o!==null&&o.data===qe?o:null,o!==null&&(v={dehydrated:o,treeContext:XH(),retryLane:536870912,hydrationErrors:null},g.memoizedState=v,v=RH(o),v.return=g,g.child=v,Mo=g,zg=null)):o=null,o===null)throw ru(g,r),I0(g);return g.lanes=536870912,null}return Ku(g,v)}var b=r.memoizedState;if(b!==null){var i=b.dehydrated;if(Mn(g),h)if(g.flags&256)g.flags&=-257,g=mO(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(JH(),(o&536870912)!==0&&Nu(g),dg||ke(r,g,o,!1),h=(o&r.childLanes)!==0,dg||h){if(v=Mg,v!==null&&(i=N1(v,o),i!==0&&i!==b.retryLane))throw b.retryLane=i,Qo(r,i),Bg(v,r,i),D6;Bu(),g=mO(r,g,o)}else r=b.treeContext,zg=ul(i.nextSibling),Mo=g,pr=!0,p0=null,mv=!1,Hl=null,Ll=!1,r!==null&&YH(g,r),g=Ku(g,v),g.flags|=4096;return g}return b=r.child,v={mode:v.mode,children:v.children},(o&536870912)!==0&&(o&r.lanes)!==0&&Nu(g),r=Ev(b,v),r.ref=g.ref,g.child=r,r.return=g,r}function Uu(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function fn(r,g,o,v,h){if(o.prototype&&typeof o.prototype.render==="function"){var b=y(o)||"Unknown";tM[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),tM[b]=!0)}if(g.mode&Ko&&El.recordLegacyContextWarning(g,null),r===null&&(pn(g,g.type),o.contextTypes&&(b=y(o)||"Unknown",MM[b]||(MM[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),V1(g),o=Rn(r,g,o,v,void 0,h),v=Xn(),r!==null&&!dg)return Yn(r,g,h),fv(r,g,h);return pr&&v&&on(g),g.flags|=1,qo(r,g,o,h),g.child}function LO(r,g,o,v,h,b){if(V1(g),i0=-1,O5=r!==null&&r.type!==g.type,g.updateQueue=null,o=Gn(g,v,o,h),EH(r,g),v=Xn(),r!==null&&!dg)return Yn(r,g,b),fv(r,g,b);return pr&&v&&on(g),g.flags|=1,qo(r,g,o,b),g.child}function IO(r,g,o,v,h){switch(O(g)){case!1:var b=g.stateNode,i=new g.type(g.memoizedProps,b.context).state;b.updater.enqueueSetState(b,i,null);break;case!0:g.flags|=128,g.flags|=65536,b=Error("Simulated error coming from DevTools");var P=h&-h;if(g.lanes|=P,i=Mg,i===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");P=an(P),jn(P,i,g,vl(b,g)),Pu(g,P)}if(V1(g),g.stateNode===null){if(i=f0,b=o.contextType,"contextType"in o&&b!==null&&(b===void 0||b.$$typeof!==Jv)&&!OM.has(o)&&(OM.add(o),P=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===V4?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(o)||"Component",P)),typeof b==="object"&&b!==null&&(i=$g(b)),b=new o(v,i),g.mode&Ko){Rg(!0);try{b=new o(v,i)}finally{Rg(!1)}}if(i=g.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=S6,g.stateNode=b,b._reactInternals=g,b._reactInternalInstance=eM,typeof o.getDerivedStateFromProps==="function"&&i===null&&(i=y(o)||"Component",bM.has(i)||(bM.add(i),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",i,b.state===null?"null":"undefined",i))),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var t=P=i=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?i="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(i="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?P="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(P="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?t="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(t="UNSAFE_componentWillUpdate"),i!==null||P!==null||t!==null){b=y(o)||"Component";var M=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";uM.has(b)||(uM.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,M,i!==null?`
  `+i:"",P!==null?`
  `+P:"",t!==null?`
  `+t:""))}}b=g.stateNode,i=y(o)||"Component",b.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",i):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",i)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",i),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",i),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",i),o.childContextTypes&&!HM.has(o)&&(HM.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",i)),o.contextTypes&&!PM.has(o)&&(PM.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",i)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",i),o.prototype&&o.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(o)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",i),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",i),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",i),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",i),P=b.props!==v,b.props!==void 0&&P&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",i),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",i,i),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||wM.has(o)||(wM.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(o))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",i),(P=b.state)&&(typeof P!=="object"||lo(P))&&console.error("%s.state: must be set to an object or null",i),typeof b.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",i),b=g.stateNode,b.props=v,b.state=g.memoizedState,b.refs={},On(g),i=o.contextType,b.context=typeof i==="object"&&i!==null?$g(i):f0,b.state===v&&(i=y(o)||"Component",iM.has(i)||(iM.add(i),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",i))),g.mode&Ko&&El.recordLegacyContextWarning(g,b),El.recordUnsafeLifecycleWarnings(g,b),b.state=g.memoizedState,i=o.getDerivedStateFromProps,typeof i==="function"&&(En(g,o,i,v),b.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(i=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),i!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",x(g)||"Component"),S6.enqueueReplaceState(b,b.state,null)),Mb(g,v,b,h),Ab(),b.state=g.memoizedState),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Ur&&(g.flags|=134217728),b=!0}else if(r===null){b=g.stateNode;var $=g.memoizedProps;P=a1(o,$),b.props=P;var m=b.context;t=o.contextType,i=f0,typeof t==="object"&&t!==null&&(i=$g(t)),M=o.getDerivedStateFromProps,t=typeof M==="function"||typeof b.getSnapshotBeforeUpdate==="function",$=g.pendingProps!==$,t||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||($||m!==i)&&RO(g,b,v,i),l1=!1;var Q=g.memoizedState;b.state=Q,Mb(g,v,b,h),Ab(),m=g.memoizedState,$||Q!==m||l1?(typeof M==="function"&&(En(g,o,M,v),m=g.memoizedState),(P=l1||WO(g,o,P,v,Q,m,i))?(t||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Ur&&(g.flags|=134217728)):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Ur&&(g.flags|=134217728),g.memoizedProps=v,g.memoizedState=m),b.props=v,b.state=m,b.context=i,b=P):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Ur&&(g.flags|=134217728),b=!1)}else{b=g.stateNode,qn(r,g),i=g.memoizedProps,t=a1(o,i),b.props=t,M=g.pendingProps,Q=b.context,m=o.contextType,P=f0,typeof m==="object"&&m!==null&&(P=$g(m)),$=o.getDerivedStateFromProps,(m=typeof $==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(i!==M||Q!==P)&&RO(g,b,v,P),l1=!1,Q=g.memoizedState,b.state=Q,Mb(g,v,b,h),Ab();var N=g.memoizedState;i!==M||Q!==N||l1||r!==null&&r.dependencies!==null&&ou(r.dependencies)?(typeof $==="function"&&(En(g,o,$,v),N=g.memoizedState),(t=l1||WO(g,o,t,v,Q,N,P)||r!==null&&r.dependencies!==null&&ou(r.dependencies))?(m||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(v,N,P),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(v,N,P)),typeof b.componentDidUpdate==="function"&&(g.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof b.componentDidUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),g.memoizedProps=v,g.memoizedState=N),b.props=v,b.state=N,b.context=P,b=t):(typeof b.componentDidUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),b=!1)}if(P=b,Uu(r,g),i=(g.flags&128)!==0,P||i){if(P=g.stateNode,_o(g),i&&typeof o.getDerivedStateFromError!=="function")o=null,Zo=-1;else if(o=BA(P),g.mode&Ko){Rg(!0);try{BA(P)}finally{Rg(!1)}}g.flags|=1,r!==null&&i?(g.child=be(g,r.child,null,h),g.child=be(g,null,o,h)):qo(r,g,o,h),g.memoizedState=P.state,r=g.child}else r=fv(r,g,h);return h=g.stateNode,b&&h.props!==v&&(Uh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",x(g)||"a component"),Uh=!0),r}function FO(r,g,o,v){return D1(),g.flags|=256,qo(r,g,o,v),g.child}function pn(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=y(g)||"Unknown",WM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),WM[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=y(g)||"Unknown",AM[g]||(console.error("%s: Function components do not support contextType.",g),AM[g]=!0))}function dn(r){return{baseLanes:r,cachePool:LH()}}function sn(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function NO(r,g,o){var v,h=g.pendingProps;H(g)&&(g.flags|=128);var b=!1,i=(g.flags&128)!==0;if((v=i)||(v=r!==null&&r.memoizedState===null?!1:(Vg.current&P5)!==0),v&&(b=!0,g.flags&=-129),v=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(b?x0(g):C0(g),(r=zg)?(o=gt(r,Ll),o=o!==null&&o.data!==qe?o:null,o!==null&&(v={dehydrated:o,treeContext:XH(),retryLane:536870912,hydrationErrors:null},g.memoizedState=v,v=RH(o),v.return=g,g.child=v,Mo=g,zg=null)):o=null,o===null)throw ru(g,r),I0(g);return I4(o)?g.lanes=32:g.lanes=536870912,null}var P=h.children;if(h=h.fallback,b){C0(g);var t=g.mode;return P=$u({mode:"hidden",children:P},t),h=S1(h,t,o,null),P.return=g,h.return=g,P.sibling=h,g.child=P,h=g.child,h.memoizedState=dn(o),h.childLanes=sn(r,v,o),g.memoizedState=V6,Xb(null,h)}return x0(g),r4(g,P)}var M=r.memoizedState;if(M!==null){var $=M.dehydrated;if($!==null){if(i)g.flags&256?(x0(g),g.flags&=-257,g=g4(r,g,o)):g.memoizedState!==null?(C0(g),g.child=r.child,g.flags|=128,g=null):(C0(g),P=h.fallback,t=g.mode,h=$u({mode:"visible",children:h.children},t),P=S1(P,t,o,null),P.flags|=2,h.return=g,P.return=g,h.sibling=P,g.child=h,be(g,r.child,null,o),h=g.child,h.memoizedState=dn(o),h.childLanes=sn(r,v,o),g.memoizedState=V6,g=Xb(null,h));else if(x0(g),JH(),(o&536870912)!==0&&Nu(g),I4($)){if(v=$.nextSibling&&$.nextSibling.dataset,v){P=v.dgst;var m=v.msg;t=v.stck;var Q=v.cstck}b=m,v=P,h=t,$=Q,P=b,t=$,P=P?Error(P):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),P.stack=h||"",P.digest=v,v=t===void 0?null:t,h={value:P,source:null,stack:v},typeof v==="string"&&X6.set(P,h),nb(h),g=g4(r,g,o)}else if(dg||ke(r,g,o,!1),v=(o&r.childLanes)!==0,dg||v){if(v=Mg,v!==null&&(h=N1(v,o),h!==0&&h!==M.retryLane))throw M.retryLane=h,Qo(r,h),Bg(v,r,h),D6;L4($)||Bu(),g=g4(r,g,o)}else L4($)?(g.flags|=192,g.child=r.child,g=null):(r=M.treeContext,zg=ul($.nextSibling),Mo=g,pr=!0,p0=null,mv=!1,Hl=null,Ll=!1,r!==null&&YH(g,r),g=r4(g,h.children),g.flags|=4096);return g}}if(b)return C0(g),P=h.fallback,t=g.mode,Q=r.child,$=Q.sibling,h=Ev(Q,{mode:"hidden",children:h.children}),h.subtreeFlags=Q.subtreeFlags&65011712,$!==null?P=Ev($,P):(P=S1(P,t,o,null),P.flags|=2),P.return=g,h.return=g,h.sibling=P,g.child=h,Xb(null,h),h=g.child,P=r.child.memoizedState,P===null?P=dn(o):(t=P.cachePool,t!==null?(Q=jg._currentValue,t=t.parent!==Q?{parent:Q,pool:Q}:t):t=LH(),P={baseLanes:P.baseLanes|o,cachePool:t}),h.memoizedState=P,h.childLanes=sn(r,v,o),g.memoizedState=V6,Xb(r.child,h);return M!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&Nu(g),x0(g),o=r.child,r=o.sibling,o=Ev(o,{mode:"visible",children:h.children}),o.return=g,o.sibling=null,r!==null&&(v=g.deletions,v===null?(g.deletions=[r],g.flags|=16):v.push(r)),g.child=o,g.memoizedState=null,o}function r4(r,g){return g=$u({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function $u(r,g){return r=Y(22,r,null,g),r.lanes=0,r}function g4(r,g,o){return be(g,r.child,null,o),r=r4(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function BO(r,g,o){r.lanes|=g;var v=r.alternate;v!==null&&(v.lanes|=g),hn(r.return,g,o)}function o4(r,g,o,v,h,b){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:v,tail:o,tailMode:h,treeForkCount:b}:(i.isBackwards=g,i.rendering=null,i.renderingStartTime=0,i.last=v,i.tail=o,i.tailMode=h,i.treeForkCount=b)}function ZO(r,g,o){var v=g.pendingProps,h=v.revealOrder,b=v.tail,i=v.children,P=Vg.current;if((v=(P&P5)!==0)?(P=P&Jh|P5,g.flags|=128):P&=Jh,Gr(Vg,P,g),P=h==null?"null":h,h!=="forwards"&&h!=="unstable_legacy-backwards"&&h!=="together"&&h!=="independent"&&!RM[P])if(RM[P]=!0,h==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(h==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof h==="string")switch(h.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',h,h.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',h,h.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h);if(P=b==null?"null":b,!Ki[P])if(b==null){if(h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")Ki[P]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(Ki[P]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):h!=="forwards"&&h!=="backwards"&&h!=="unstable_legacy-backwards"&&(Ki[P]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));r:if((h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")&&i!==void 0&&i!==null&&i!==!1)if(lo(i)){for(P=0;P<i.length;P++)if(!kH(i[P],P))break r}else if(P=B(i),typeof P==="function"){if(P=P.call(i))for(var t=P.next(),M=0;!t.done;t=P.next()){if(!kH(t.value,M))break r;M++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',h);if(qo(r,g,i,o),pr?(L0(),i=pb):i=0,!v&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&BO(r,o,g);else if(r.tag===19)BO(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(h){case"forwards":o=g.child;for(h=null;o!==null;)r=o.alternate,r!==null&&Hu(r)===null&&(h=o),o=o.sibling;o=h,o===null?(h=g.child,g.child=null):(h=o.sibling,o.sibling=null),o4(g,!1,h,o,b,i);break;case"backwards":case"unstable_legacy-backwards":o=null,h=g.child;for(g.child=null;h!==null;){if(r=h.alternate,r!==null&&Hu(r)===null){g.child=h;break}r=h.sibling,h.sibling=o,o=h,h=r}o4(g,!0,o,null,b,i);break;case"together":o4(g,!1,null,null,void 0,i);break;default:g.memoizedState=null}return g.child}function fv(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Zo=-1,h1|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(ke(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=Ev(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=Ev(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function l4(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&ou(r)?!0:!1}function GX(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),F0(g,jg,r.memoizedState.cache),D1();break;case 27:case 5:zr(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:F0(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var v=g.stateNode;v.effectDuration=-0,v.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,Mn(g),null;break;case 13:if(v=g.memoizedState,v!==null){if(v.dehydrated!==null)return x0(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return NO(r,g,o);return x0(g),r=fv(r,g,o),r!==null?r.sibling:null}x0(g);break;case 19:var h=(r.flags&128)!==0;if(v=(o&g.childLanes)!==0,v||(ke(r,g,o,!1),v=(o&g.childLanes)!==0),h){if(v)return ZO(r,g,o);g.flags|=128}if(h=g.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gr(Vg,Vg.current,g),v)break;else return null;case 22:return g.lanes=0,UO(r,g,o,g.pendingProps);case 24:F0(g,jg,r.memoizedState.cache)}return fv(r,g,o)}function v4(r,g,o){if(g._debugNeedsRemount&&r!==null){o=s2(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var v=g.return;if(v===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===v.child)v.child=o;else{var h=v.child;if(h===null)throw Error("Expected parent to have a child.");for(;h.sibling!==g;)if(h=h.sibling,h===null)throw Error("Expected to find the previous sibling.");h.sibling=o}return g=v.deletions,g===null?(v.deletions=[r],v.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)dg=!0;else{if(!l4(r,o)&&(g.flags&128)===0)return dg=!1,GX(r,g,o);dg=(r.flags&131072)!==0?!0:!1}else{if(dg=!1,v=pr)L0(),v=(g.flags&1048576)!==0;v&&(v=g.index,L0(),GH(g,pb,v))}switch(g.lanes=0,g.tag){case 16:r:if(v=g.pendingProps,r=N0(g.elementType),g.type=r,typeof r==="function")d2(r)?(v=a1(r,v),g.tag=1,g.type=r=T1(r),g=IO(null,g,r,v,o)):(g.tag=0,pn(g,r),g.type=r=T1(r),g=fn(null,g,r,v,o));else{if(r!==void 0&&r!==null){if(h=r.$$typeof,h===Cb){g.tag=11,g.type=r=p2(r),g=QO(null,g,r,v,o);break r}else if(h===ju){g.tag=14,g=zO(null,g,r,v,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===il&&(g=" Did you wrap a component in React.lazy() more than once?"),o=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return fn(r,g,g.type,g.pendingProps,o);case 1:return v=g.type,h=a1(v,g.pendingProps),IO(r,g,v,h,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");v=g.pendingProps;var b=g.memoizedState;h=b.element,qn(r,g),Mb(g,v,null,o);var i=g.memoizedState;if(v=i.cache,F0(g,jg,v),v!==b.cache&&bn(g,[jg],o,!0),Ab(),v=i.element,b.isDehydrated)if(b={element:v,isDehydrated:!1,cache:i.cache},g.updateQueue.baseState=b,g.memoizedState=b,g.flags&256){g=FO(r,g,v,o);break r}else if(v!==h){h=vl(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),nb(h),g=FO(r,g,v,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}zg=ul(r.firstChild),Mo=g,pr=!0,p0=null,mv=!1,Hl=null,Ll=!0,o=jA(g,null,v,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(D1(),v===h){g=fv(r,g,o);break r}qo(r,g,v,o)}g=g.child}return g;case 26:return Uu(r,g),r===null?(o=bt(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,v=Zr(_0.current),v=Tu(v).createElement(o),v[Ao]=g,v[Fo]=r,to(v,o,r),Jr(v),g.stateNode=v):g.memoizedState=bt(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return zr(g),r===null&&pr&&(v=Zr(_0.current),h=er(),v=g.stateNode=et(g.type,g.pendingProps,v,h,!1),mv||(h=cq(v,g.type,g.pendingProps,h),h!==null&&(k1(g,0).serverProps=h)),Mo=g,Ll=!0,h=zg,D0(g.type)?(P8=h,zg=ul(v.firstChild)):zg=h),qo(r,g,g.pendingProps.children,o),Uu(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(b=er(),v=V2(g.type,b.ancestorInfo),h=zg,(i=!h)||(i=uY(h,g.type,g.pendingProps,Ll),i!==null?(g.stateNode=i,mv||(b=cq(i,g.type,g.pendingProps,b),b!==null&&(k1(g,0).serverProps=b)),Mo=g,zg=ul(i.firstChild),Ll=!1,b=!0):b=!1,i=!b),i&&(v&&ru(g,h),I0(g))),zr(g),h=g.type,b=g.pendingProps,i=r!==null?r.memoizedProps:null,v=b.children,$4(h,b)?v=null:i!==null&&$4(h,i)&&(g.flags|=32),g.memoizedState!==null&&(h=Rn(r,g,HX,null,null,o),m5._currentValue=h),Uu(r,g),qo(r,g,v,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=er(),v=r.ancestorInfo.current,o=v!=null?_w(o,v.tag,r.ancestorInfo.implicitRootScope):!0,r=zg,(v=!r)||(v=iY(r,g.pendingProps,Ll),v!==null?(g.stateNode=v,Mo=g,zg=null,v=!0):v=!1,v=!v),v&&(o&&ru(g,r),I0(g))),null;case 13:return NO(r,g,o);case 4:return k(g,g.stateNode.containerInfo),v=g.pendingProps,r===null?g.child=be(g,null,v,o):qo(r,g,v,o),g.child;case 11:return QO(r,g,g.type,g.pendingProps,o);case 7:return qo(r,g,g.pendingProps,o),g.child;case 8:return qo(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,v=g.stateNode,v.effectDuration=-0,v.passiveEffectDuration=-0,qo(r,g,g.pendingProps.children,o),g.child;case 10:return v=g.type,h=g.pendingProps,b=h.value,"value"in h||GM||(GM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),F0(g,v,b),qo(r,g,h.children,o),g.child;case 9:return h=g.type._context,v=g.pendingProps.children,typeof v!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V1(g),h=$g(h),v=m6(v,h,void 0),g.flags|=1,qo(r,g,v,o),g.child;case 14:return zO(r,g,g.type,g.pendingProps,o);case 15:return KO(r,g,g.type,g.pendingProps,o);case 19:return ZO(r,g,o);case 31:return RX(r,g,o);case 22:return UO(r,g,o,g.pendingProps);case 24:return V1(g),v=$g(jg),r===null?(h=Pn(),h===null&&(h=Mg,b=wn(),h.pooledCache=b,_1(b),b!==null&&(h.pooledCacheLanes|=o),h=b),g.memoizedState={parent:v,cache:h},On(g),F0(g,jg,h)):((r.lanes&o)!==0&&(qn(r,g),Mb(g,null,null,o),Ab()),h=r.memoizedState,b=g.memoizedState,h.parent!==v?(h={parent:v,cache:v},g.memoizedState=h,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=h),F0(g,jg,v)):(v=b.cache,F0(g,jg,v),v!==h.cache&&bn(g,[jg],o,!0))),qo(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function pv(r){r.flags|=4}function e4(r,g,o,v,h){if(g=(r.mode&kJ)!==Ur)g=!1;if(g){if(r.flags|=16777216,(h&335544128)===h)if(r.stateNode.complete)r.flags|=8192;else if(qq())r.flags|=8192;else throw he=Gi,I6}else r.flags&=-16777217}function xO(r,g){if(g.type!=="stylesheet"||(g.state.loading&Zl)!==Me)r.flags&=-16777217;else if(r.flags|=16777216,!Pt(g))if(qq())r.flags|=8192;else throw he=Gi,I6}function mu(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?Be():536870912,r.lanes|=g,Pe|=g)}function Yb(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var v=null;o!==null;)o.alternate!==null&&(v=o),o=o.sibling;v===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:v.sibling=null}}function Gg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,v=0;if(g)if((r.mode&kr)!==Ur){for(var{selfBaseDuration:h,child:b}=r;b!==null;)o|=b.lanes|b.childLanes,v|=b.subtreeFlags&65011712,v|=b.flags&65011712,h+=b.treeBaseDuration,b=b.sibling;r.treeBaseDuration=h}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,v|=h.subtreeFlags&65011712,v|=h.flags&65011712,h.return=r,h=h.sibling;else if((r.mode&kr)!==Ur){h=r.actualDuration,b=r.selfBaseDuration;for(var i=r.child;i!==null;)o|=i.lanes|i.childLanes,v|=i.subtreeFlags,v|=i.flags,h+=i.actualDuration,b+=i.treeBaseDuration,i=i.sibling;r.actualDuration=h,r.treeBaseDuration=b}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,v|=h.subtreeFlags,v|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=v,r.childLanes=o,g}function XX(r,g,o){var v=g.pendingProps;switch(ln(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gg(g),null;case 1:return Gg(g),null;case 3:if(o=g.stateNode,v=null,r!==null&&(v=r.memoizedState.cache),g.memoizedState.cache!==v&&(g.flags|=2048),av(jg,g),s(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)Se(g)?(en(),pv(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,vn());return Gg(g),null;case 26:var{type:h,memoizedState:b}=g;return r===null?(pv(g),b!==null?(Gg(g),xO(g,b)):(Gg(g),e4(g,h,null,v,o))):b?b!==r.memoizedState?(pv(g),Gg(g),xO(g,b)):(Gg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==v&&pv(g),Gg(g),e4(g,h,r,v,o)),null;case 27:if(Xr(g),o=Zr(_0.current),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==v&&pv(g);else{if(!v){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Gg(g),null}r=er(),Se(g)?QH(g,r):(r=et(h,v,o,r,!0),g.stateNode=r,pv(g))}return Gg(g),null;case 5:if(Xr(g),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==v&&pv(g);else{if(!v){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Gg(g),null}var i=er();if(Se(g))QH(g,i);else{switch(b=Zr(_0.current),V2(h,i.ancestorInfo),i=i.context,b=Tu(b),i){case Zh:b=b.createElementNS(hh,h);break;case ci:b=b.createElementNS(oi,h);break;default:switch(h){case"svg":b=b.createElementNS(hh,h);break;case"math":b=b.createElementNS(oi,h);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof v.is==="string"?b.createElement("select",{is:v.is}):b.createElement("select"),v.multiple?b.multiple=!0:v.size&&(b.size=v.size);break;default:b=typeof v.is==="string"?b.createElement(h,{is:v.is}):b.createElement(h),h.indexOf("-")===-1&&(h!==h.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",h),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||Vl.call(yM,h)||(yM[h]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",h)))}}b[Ao]=g,b[Fo]=v;r:for(i=g.child;i!==null;){if(i.tag===5||i.tag===6)b.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===g)break r;for(;i.sibling===null;){if(i.return===null||i.return===g)break r;i=i.return}i.sibling.return=i.return,i=i.sibling}g.stateNode=b;r:switch(to(b,h,v),h){case"button":case"input":case"select":case"textarea":v=!!v.autoFocus;break r;case"img":v=!0;break r;default:v=!1}v&&pv(g)}}return Gg(g),e4(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==v&&pv(g);else{if(typeof v!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Zr(_0.current),o=er(),Se(g)){if(r=g.stateNode,o=g.memoizedProps,h=!mv,v=null,b=Mo,b!==null)switch(b.tag){case 3:h&&(h=lt(r,o,v),h!==null&&(k1(g,0).serverProps=h));break;case 27:case 5:v=b.memoizedProps,h&&(h=lt(r,o,v),h!==null&&(k1(g,0).serverProps=h))}r[Ao]=g,r=r.nodeValue===o||v!==null&&v.suppressHydrationWarning===!0||Dq(r.nodeValue,o)?!0:!1,r||I0(g,!0)}else h=o.ancestorInfo.current,h!=null&&_w(v,h.tag,o.ancestorInfo.implicitRootScope),r=Tu(r).createTextNode(v),r[Ao]=g,g.stateNode=r}return Gg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(v=Se(g),o!==null){if(r===null){if(!v)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Ao]=g,Gg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else en(),D1(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,Gg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=vn(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return bl(g),g;return bl(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Gg(g),null;case 13:if(v=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=v,b=Se(g),h!==null&&h.dehydrated!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=g.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[Ao]=g,Gg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration))}else en(),D1(),(g.flags&128)===0&&(h=g.memoizedState=null),g.flags|=4,Gg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration));h=!1}else h=vn(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h){if(g.flags&256)return bl(g),g;return bl(g),null}}if(bl(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Ur&&Ob(g),g;return o=v!==null,r=r!==null&&r.memoizedState!==null,o&&(v=g.child,h=null,v.alternate!==null&&v.alternate.memoizedState!==null&&v.alternate.memoizedState.cachePool!==null&&(h=v.alternate.memoizedState.cachePool.pool),b=null,v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(b=v.memoizedState.cachePool.pool),b!==h&&(v.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),mu(g,g.updateQueue),Gg(g),(g.mode&kr)!==Ur&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(g),r===null&&X4(g.stateNode.containerInfo),Gg(g),null;case 10:return av(g.type,g),Gg(g),null;case 19:if(tr(Vg,g),v=g.memoizedState,v===null)return Gg(g),null;if(h=(g.flags&128)!==0,b=v.rendering,b===null)if(h)Yb(v,!1);else{if(Fg!==P0||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(b=Hu(r),b!==null){g.flags|=128,Yb(v,!1),r=b.updateQueue,g.updateQueue=r,mu(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)WH(o,r),o=o.sibling;return Gr(Vg,Vg.current&Jh|P5,g),pr&&cv(g,v.treeForkCount),g.child}r=r.sibling}v.tail!==null&&bo()>Ni&&(g.flags|=128,h=!0,Yb(v,!1),g.lanes=4194304)}else{if(!h)if(r=Hu(b),r!==null){if(g.flags|=128,h=!0,r=r.updateQueue,g.updateQueue=r,mu(g,r),Yb(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!pr)return Gg(g),null}else 2*bo()-v.renderingStartTime>Ni&&o!==536870912&&(g.flags|=128,h=!0,Yb(v,!1),g.lanes=4194304);v.isBackwards?(b.sibling=g.child,g.child=b):(r=v.last,r!==null?r.sibling=b:g.child=b,v.last=b)}if(v.tail!==null)return r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=bo(),r.sibling=null,o=Vg.current,o=h?o&Jh|P5:o&Jh,Gr(Vg,o,g),pr&&cv(g,v.treeForkCount),r;return Gg(g),null;case 22:case 23:return bl(g),An(g),v=g.memoizedState!==null,r!==null?r.memoizedState!==null!==v&&(g.flags|=8192):v&&(g.flags|=8192),v?(o&536870912)!==0&&(g.flags&128)===0&&(Gg(g),g.subtreeFlags&6&&(g.flags|=8192)):Gg(g),o=g.updateQueue,o!==null&&mu(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),v=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(v=g.memoizedState.cachePool.pool),v!==o&&(g.flags|=2048),r!==null&&tr(ve,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),av(jg,g),Gg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function YX(r,g){switch(ln(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Ob(g),g):null;case 3:return av(jg,g),s(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Xr(g),null;case 31:if(g.memoizedState!==null){if(bl(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Ob(g),g):null;case 13:if(bl(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Ob(g),g):null;case 19:return tr(Vg,g),null;case 4:return s(g),null;case 10:return av(g.type,g),null;case 22:case 23:return bl(g),An(g),r!==null&&tr(ve,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Ob(g),g):null;case 24:return av(jg,g),null;case 25:return null;default:return null}}function CO(r,g){switch(ln(g),g.tag){case 3:av(jg,g),s(g);break;case 26:case 27:case 5:Xr(g);break;case 4:s(g);break;case 31:g.memoizedState!==null&&bl(g);break;case 13:bl(g);break;case 19:tr(Vg,g);break;case 10:av(g.type,g);break;case 22:case 23:bl(g),An(g),r!==null&&tr(ve,g);break;case 24:av(jg,g)}}function Av(r){return(r.mode&kr)!==Ur}function TO(r,g){Av(r)?(tv(),Jb(g,r),qv()):Jb(g,r)}function h4(r,g,o){Av(r)?(tv(),Ee(o,r,g),qv()):Ee(o,r,g)}function Jb(r,g){try{var o=g.updateQueue,v=o!==null?o.lastEffect:null;if(v!==null){var h=v.next;o=h;do{if((o.tag&r)===r&&(v=void 0,(r&xo)!==Yi&&(Fh=!0),v=wr(g,EJ,o),(r&xo)!==Yi&&(Fh=!1),v!==void 0&&typeof v!=="function")){var b=void 0;b=(o.tag&ql)!==0?"useLayoutEffect":(o.tag&xo)!==0?"useInsertionEffect":"useEffect";var i=void 0;i=v===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof v.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+v,wr(g,function(P,t){console.error("%s must not return anything besides a function, which is used for clean-up.%s",P,t)},b,i)}o=o.next}while(o!==h)}}catch(P){bg(g,g.return,P)}}function Ee(r,g,o){try{var v=g.updateQueue,h=v!==null?v.lastEffect:null;if(h!==null){var b=h.next;v=b;do{if((v.tag&r)===r){var i=v.inst,P=i.destroy;P!==void 0&&(i.destroy=void 0,(r&xo)!==Yi&&(Fh=!0),h=g,wr(h,cJ,h,o,P),(r&xo)!==Yi&&(Fh=!1))}v=v.next}while(v!==b)}}catch(t){bg(g,g.return,t)}}function SO(r,g){Av(r)?(tv(),Jb(g,r),qv()):Jb(g,r)}function b4(r,g,o){Av(r)?(tv(),Ee(o,r,g),qv()):Ee(o,r,g)}function kO(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Uh||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{wr(r,VH,g,o)}catch(v){bg(r,r.return,v)}}}function JX(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function QX(r,g){var{memoizedProps:o,memoizedState:v}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Uh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{var h=a1(r.type,o),b=wr(r,JX,g,h,v);o=XM,b!==void 0||o.has(r.type)||(o.add(r.type),wr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",x(r))})),g.__reactInternalSnapshotBeforeUpdate=b}catch(i){bg(r,r.return,i)}}function DO(r,g,o){o.props=a1(r.type,r.memoizedProps),o.state=r.memoizedState,Av(r)?(tv(),wr(r,kA,r,g,o),qv()):wr(r,kA,r,g,o)}function zX(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(Av(r))try{tv(),r.refCleanup=g(o)}finally{qv()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",x(r)),g.current=o}}function Qb(r,g){try{wr(r,zX,r)}catch(o){bg(r,g,o)}}function Mv(r,g){var{ref:o,refCleanup:v}=r;if(o!==null)if(typeof v==="function")try{if(Av(r))try{tv(),wr(r,v)}finally{qv(r)}else wr(r,v)}catch(h){bg(r,g,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(Av(r))try{tv(),wr(r,o,null)}finally{qv(r)}else wr(r,o,null)}catch(h){bg(r,g,h)}else o.current=null}function VO(r,g,o,v){var h=r.memoizedProps,b=h.id,i=h.onCommit;h=h.onRender,g=g===null?"mount":"update",Ai&&(g="nested-update"),typeof h==="function"&&h(b,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof i==="function"&&i(b,g,v,o)}function KX(r,g,o,v){var h=r.memoizedProps;r=h.id,h=h.onPostCommit,g=g===null?"mount":"update",Ai&&(g="nested-update"),typeof h==="function"&&h(r,g,v,o)}function _O(r){var{type:g,memoizedProps:o,stateNode:v}=r;try{wr(r,pX,v,g,o,r)}catch(h){bg(r,r.return,h)}}function w4(r,g,o){try{wr(r,sX,r.stateNode,r.type,o,g,r)}catch(v){bg(r,r.return,v)}}function yO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&D0(r.type)||r.tag===4}function u4(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||yO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&D0(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function i4(r,g,o){var v=r.tag;if(v===5||v===6)r=r.stateNode,g?(dq(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(dq(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=yv));else if(v!==4&&(v===27&&D0(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(i4(r,g,o),r=r.sibling;r!==null;)i4(r,g,o),r=r.sibling}function Lu(r,g,o){var v=r.tag;if(v===5||v===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(v!==4&&(v===27&&D0(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Lu(r,g,o),r=r.sibling;r!==null;)Lu(r,g,o),r=r.sibling}function UX(r){for(var g,o=r.return;o!==null;){if(yO(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=u4(r),Lu(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(pq(o),g.flags&=-33),g=u4(r),Lu(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=u4(r),i4(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function EO(r){var{stateNode:g,memoizedProps:o}=r;try{wr(r,qY,r.type,o,g,r)}catch(v){bg(r,r.return,v)}}function cO(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function $X(r,g){if(r=r.containerInfo,u8=pi,r=uH(r),E2(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var v=o.getSelection&&o.getSelection();if(v&&v.rangeCount!==0){o=v.anchorNode;var{anchorOffset:h,focusNode:b}=v;v=v.focusOffset;try{o.nodeType,b.nodeType}catch(hr){o=null;break r}var i=0,P=-1,t=-1,M=0,$=0,m=r,Q=null;g:for(;;){for(var N;;){if(m!==o||h!==0&&m.nodeType!==3||(P=i+h),m!==b||v!==0&&m.nodeType!==3||(t=i+v),m.nodeType===3&&(i+=m.nodeValue.length),(N=m.firstChild)===null)break;Q=m,m=N}for(;;){if(m===r)break g;if(Q===o&&++M===h&&(P=i),Q===b&&++$===v&&(t=i),(N=m.nextSibling)!==null)break;m=Q,Q=m.parentNode}m=N}o=P===-1||t===-1?null:{start:P,end:t}}else o=null}o=o||{start:0,end:0}}else o=null;i8={focusedElem:r,selectionRange:o},pi=!1;for(uo=g;uo!==null;)if(g=uo,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,uo=r;else for(;uo!==null;){switch(r=g=uo,o=r.alternate,h=r.flags,r.tag){case 0:if((h&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)h=r[o],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:(h&1024)!==0&&o!==null&&QX(r,o);break;case 3:if((h&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)m4(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":m4(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((h&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,uo=r;break}uo=g.return}}function aO(r,g,o){var v=el(),h=nv(),b=Hv(),i=Ov(),P=o.flags;switch(o.tag){case 0:case 11:case 15:Wv(r,o),P&4&&TO(o,ql|Nl);break;case 1:if(Wv(r,o),P&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||Uh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Av(o)?(tv(),wr(o,L6,o,r),qv()):wr(o,L6,o,r);else{var t=a1(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||Uh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Av(o)?(tv(),wr(o,CA,o,r,t,g,r.__reactInternalSnapshotBeforeUpdate),qv()):wr(o,CA,o,r,t,g,r.__reactInternalSnapshotBeforeUpdate)}P&64&&kO(o),P&512&&Qb(o,o.return);break;case 3:if(g=jv(),Wv(r,o),P&64&&(P=o.updateQueue,P!==null)){if(t=null,o.child!==null)switch(o.child.tag){case 27:case 5:t=o.child.stateNode;break;case 1:t=o.child.stateNode}try{wr(o,VH,P,t)}catch($){bg(o,o.return,$)}}r.effectDuration+=vu(g);break;case 27:g===null&&P&4&&EO(o);case 26:case 5:if(Wv(r,o),g===null){if(P&4)_O(o);else if(P&64){r=o.type,g=o.memoizedProps,t=o.stateNode;try{wr(o,dX,t,r,g,o)}catch($){bg(o,o.return,$)}}}P&512&&Qb(o,o.return);break;case 12:if(P&4){P=jv(),Wv(r,o),r=o.stateNode,r.effectDuration+=Hb(P);try{wr(o,VO,o,g,d0,r.effectDuration)}catch($){bg(o,o.return,$)}}else Wv(r,o);break;case 31:Wv(r,o),P&4&&pO(r,o);break;case 13:Wv(r,o),P&4&&dO(r,o),P&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(P=CX.bind(null,o),nY(r,P))));break;case 22:if(P=o.memoizedState!==null||n0,!P){g=g!==null&&g.memoizedState!==null||sg,t=n0;var M=sg;n0=P,(sg=g)&&!M?(Rv(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&aw(o,Qr,Kr)):Wv(r,o),n0=t,sg=M}break;case 30:break;default:Wv(r,o)}(o.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&((Zg||0.05<Ig)&&uv(o,Qr,Kr,Ig,mg),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Kr-Qr&&(cO(o.return.alternate,o.return)||wv(o,Qr,Kr,"Mount"))),hl(v),Pv(h),mg=b,Zg=i}function jO(r){var g=r.alternate;g!==null&&(r.alternate=null,jO(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&ur(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dv(r,g,o){for(o=o.child;o!==null;)fO(r,g,o),o=o.sibling}function fO(r,g,o){if(zo&&typeof zo.onCommitFiberUnmount==="function")try{zo.onCommitFiberUnmount(vh,o)}catch(M){zv||(zv=!0,console.error("React instrumentation encountered an error: %o",M))}var v=el(),h=nv(),b=Hv(),i=Ov();switch(o.tag){case 26:sg||Mv(o,g),dv(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:sg||Mv(o,g);var P=ro,t=jo;D0(o.type)&&(ro=o.stateNode,jo=!1),dv(r,g,o),wr(o,Nb,o.stateNode),ro=P,jo=t;break;case 5:sg||Mv(o,g);case 6:if(P=ro,t=jo,ro=null,dv(r,g,o),ro=P,jo=t,ro!==null)if(jo)try{wr(o,oY,ro,o.stateNode)}catch(M){bg(o,g,M)}else try{wr(o,gY,ro,o.stateNode)}catch(M){bg(o,g,M)}break;case 18:ro!==null&&(jo?(r=ro,sq(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),rh(r)):sq(ro,o.stateNode));break;case 4:P=ro,t=jo,ro=o.stateNode.containerInfo,jo=!0,dv(r,g,o),ro=P,jo=t;break;case 0:case 11:case 14:case 15:Ee(xo,o,g),sg||h4(o,g,ql),dv(r,g,o);break;case 1:sg||(Mv(o,g),P=o.stateNode,typeof P.componentWillUnmount==="function"&&DO(o,g,P)),dv(r,g,o);break;case 21:dv(r,g,o);break;case 22:sg=(P=sg)||o.memoizedState!==null,dv(r,g,o),sg=P;break;default:dv(r,g,o)}(o.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(o,Qr,Kr,Ig,mg),hl(v),Pv(h),mg=b,Zg=i}function pO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{wr(g,HY,r)}catch(o){bg(g,g.return,o)}}}function dO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{wr(g,OY,r)}catch(o){bg(g,g.return,o)}}function mX(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new YM),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new YM),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Iu(r,g){var o=mX(r);g.forEach(function(v){if(!o.has(v)){if(o.add(v),Kv)if($h!==null&&mh!==null)$b(mh,$h);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var h=TX.bind(null,r,v);v.then(h,h)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var v=0;v<o.length;v++){var h=r,b=g,i=o[v],P=el(),t=b;r:for(;t!==null;){switch(t.tag){case 27:if(D0(t.type)){ro=t.stateNode,jo=!1;break r}break;case 5:ro=t.stateNode,jo=!1;break r;case 3:case 4:ro=t.stateNode.containerInfo,jo=!0;break r}t=t.return}if(ro===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");fO(h,b,i),ro=null,jo=!1,(i.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&wv(i,Qr,Kr,"Unmount"),hl(P),h=i,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)sO(g,r),g=g.sibling}function sO(r,g){var o=el(),v=nv(),h=Hv(),b=Ov(),i=r.alternate,P=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),ao(r),P&4&&(Ee(xo|Nl,r,r.return),Jb(xo|Nl,r),h4(r,r.return,ql|Nl));break;case 1:if(co(g,r),ao(r),P&512&&(sg||i===null||Mv(i,i.return)),P&64&&n0&&(P=r.updateQueue,P!==null&&(i=P.callbacks,i!==null))){var t=P.shared.hiddenCallbacks;P.shared.hiddenCallbacks=t===null?i:t.concat(i)}break;case 26:if(t=al,co(g,r),ao(r),P&512&&(sg||i===null||Mv(i,i.return)),P&4){var M=i!==null?i.memoizedState:null;if(P=r.memoizedState,i===null)if(P===null)if(r.stateNode===null){r:{P=r.type,i=r.memoizedProps,t=t.ownerDocument||t;g:switch(P){case"title":if(M=t.getElementsByTagName("title")[0],!M||M[kb]||M[Ao]||M.namespaceURI===hh||M.hasAttribute("itemprop"))M=t.createElement(P),t.head.insertBefore(M,t.querySelector("head > title"));to(M,P,i),M[Ao]=r,Jr(M),P=M;break r;case"link":var $=it("link","href",t).get(P+(i.href||""));if($){for(var m=0;m<$.length;m++)if(M=$[m],M.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&M.getAttribute("rel")===(i.rel==null?null:i.rel)&&M.getAttribute("title")===(i.title==null?null:i.title)&&M.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){$.splice(m,1);break g}}M=t.createElement(P),to(M,P,i),t.head.appendChild(M);break;case"meta":if($=it("meta","content",t).get(P+(i.content||""))){for(m=0;m<$.length;m++)if(M=$[m],Hg(i.content,"content"),M.getAttribute("content")===(i.content==null?null:""+i.content)&&M.getAttribute("name")===(i.name==null?null:i.name)&&M.getAttribute("property")===(i.property==null?null:i.property)&&M.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&M.getAttribute("charset")===(i.charSet==null?null:i.charSet)){$.splice(m,1);break g}}M=t.createElement(P),to(M,P,i),t.head.appendChild(M);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+P+'". This is a bug in React.')}M[Ao]=r,Jr(M),P=M}r.stateNode=P}else nt(t,r.type,r.stateNode);else r.stateNode=ut(t,P,r.memoizedProps);else M!==P?(M===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):M.count--,P===null?nt(t,r.type,r.stateNode):ut(t,P,r.memoizedProps)):P===null&&r.stateNode!==null&&w4(r,r.memoizedProps,i.memoizedProps)}break;case 27:co(g,r),ao(r),P&512&&(sg||i===null||Mv(i,i.return)),i!==null&&P&4&&w4(r,r.memoizedProps,i.memoizedProps);break;case 5:if(co(g,r),ao(r),P&512&&(sg||i===null||Mv(i,i.return)),r.flags&32){t=r.stateNode;try{wr(r,pq,t)}catch(Hr){bg(r,r.return,Hr)}}P&4&&r.stateNode!=null&&(t=r.memoizedProps,w4(r,t,i!==null?i.memoizedProps:t)),P&1024&&(_6=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),ao(r),P&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");P=r.memoizedProps,i=i!==null?i.memoizedProps:P,t=r.stateNode;try{wr(r,rY,t,i,P)}catch(Hr){bg(r,r.return,Hr)}}break;case 3:if(t=jv(),ai=null,M=al,al=Su(g.containerInfo),co(g,r),al=M,ao(r),P&4&&i!==null&&i.memoizedState.isDehydrated)try{wr(r,PY,g.containerInfo)}catch(Hr){bg(r,r.return,Hr)}_6&&(_6=!1,rq(r)),g.effectDuration+=vu(t);break;case 4:P=al,al=Su(r.stateNode.containerInfo),co(g,r),ao(r),al=P;break;case 12:P=jv(),co(g,r),ao(r),r.stateNode.effectDuration+=Hb(P);break;case 31:co(g,r),ao(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 13:co(g,r),ao(r),r.child.flags&8192&&r.memoizedState!==null!==(i!==null&&i.memoizedState!==null)&&(Fi=bo()),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 22:t=r.memoizedState!==null;var Q=i!==null&&i.memoizedState!==null,N=n0,hr=sg;if(n0=N||t,sg=hr||Q,co(g,r),sg=hr,n0=N,Q&&!t&&!N&&!hr&&(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&aw(r,Qr,Kr),ao(r),P&8192)r:for(g=r.stateNode,g._visibility=t?g._visibility&~fb:g._visibility|fb,!t||i===null||Q||n0||sg||(j1(r),(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&wv(r,Qr,Kr,"Disconnect")),i=null,g=r;;){if(g.tag===5||g.tag===26){if(i===null){Q=i=g;try{M=Q.stateNode,t?wr(Q,vY,M):wr(Q,bY,Q.stateNode,Q.memoizedProps)}catch(Hr){bg(Q,Q.return,Hr)}}}else if(g.tag===6){if(i===null){Q=g;try{$=Q.stateNode,t?wr(Q,eY,$):wr(Q,wY,$,Q.memoizedProps)}catch(Hr){bg(Q,Q.return,Hr)}}}else if(g.tag===18){if(i===null){Q=g;try{m=Q.stateNode,t?wr(Q,lY,m):wr(Q,hY,Q.stateNode)}catch(Hr){bg(Q,Q.return,Hr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;i===g&&(i=null),g=g.return}i===g&&(i=null),g.sibling.return=g.return,g=g.sibling}P&4&&(P=r.updateQueue,P!==null&&(i=P.retryQueue,i!==null&&(P.retryQueue=null,Iu(r,i))));break;case 19:co(g,r),ao(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 30:break;case 21:break;default:co(g,r),ao(r)}(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&((Zg||0.05<Ig)&&uv(r,Qr,Kr,Ig,mg),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Kr-Qr&&(cO(r.return.alternate,r.return)||wv(r,Qr,Kr,"Mount"))),hl(o),Pv(v),mg=h,Zg=b}function ao(r){var g=r.flags;if(g&2){try{wr(r,UX,r)}catch(o){bg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function rq(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;rq(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Wv(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)aO(r,g.alternate,g),g=g.sibling}function gq(r){var g=el(),o=nv(),v=Hv(),h=Ov();switch(r.tag){case 0:case 11:case 14:case 15:h4(r,r.return,ql),j1(r);break;case 1:Mv(r,r.return);var b=r.stateNode;typeof b.componentWillUnmount==="function"&&DO(r,r.return,b),j1(r);break;case 27:wr(r,Nb,r.stateNode);case 26:case 5:Mv(r,r.return),j1(r);break;case 22:r.memoizedState===null&&j1(r);break;case 30:j1(r);break;default:j1(r)}(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(r,Qr,Kr,Ig,mg),hl(g),Pv(o),mg=v,Zg=h}function j1(r){for(r=r.child;r!==null;)gq(r),r=r.sibling}function oq(r,g,o,v){var h=el(),b=nv(),i=Hv(),P=Ov(),t=o.flags;switch(o.tag){case 0:case 11:case 15:Rv(r,o,v),TO(o,ql);break;case 1:if(Rv(r,o,v),g=o.stateNode,typeof g.componentDidMount==="function"&&wr(o,L6,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{wr(o,PX,g,r)}catch(M){bg(o,o.return,M)}}v&&t&64&&kO(o),Qb(o,o.return);break;case 27:EO(o);case 26:case 5:Rv(r,o,v),v&&g===null&&t&4&&_O(o),Qb(o,o.return);break;case 12:if(v&&t&4){t=jv(),Rv(r,o,v),v=o.stateNode,v.effectDuration+=Hb(t);try{wr(o,VO,o,g,d0,v.effectDuration)}catch(M){bg(o,o.return,M)}}else Rv(r,o,v);break;case 31:Rv(r,o,v),v&&t&4&&pO(r,o);break;case 13:Rv(r,o,v),v&&t&4&&dO(r,o);break;case 22:o.memoizedState===null&&Rv(r,o,v),Qb(o,o.return);break;case 30:break;default:Rv(r,o,v)}(o.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(o,Qr,Kr,Ig,mg),hl(h),Pv(b),mg=i,Zg=P}function Rv(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)oq(r,g.alternate,g,o),g=g.sibling}function n4(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_1(r),o!=null&&Pb(o))}function P4(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_1(g),r!=null&&Pb(r))}function Dl(r,g,o,v,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var b=g.sibling;lq(r,g,o,v,b!==null?b.actualStartTime:h),g=b}}function lq(r,g,o,v,h){var b=el(),i=nv(),P=Hv(),t=Ov(),M=a0,$=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&jw(g,g.actualStartTime,h,vo,o),Dl(r,g,o,v,h),$&2048&&SO(g,Co|Nl);break;case 1:(g.mode&kr)!==Ur&&0<g.actualStartTime&&((g.flags&128)!==0?a2(g,g.actualStartTime,h,[]):(g.flags&1)!==0&&jw(g,g.actualStartTime,h,vo,o)),Dl(r,g,o,v,h);break;case 3:var m=jv(),Q=vo;vo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dl(r,g,o,v,h),vo=Q,$&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),v=g.memoizedState.cache,v!==o&&(_1(v),o!=null&&Pb(o))),r.passiveEffectDuration+=vu(m);break;case 12:if($&2048){$=jv(),Dl(r,g,o,v,h),r=g.stateNode,r.passiveEffectDuration+=Hb($);try{wr(g,KX,g,g.alternate,d0,r.passiveEffectDuration)}catch(N){bg(g,g.return,N)}}else Dl(r,g,o,v,h);break;case 31:$=vo,m=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,m!==null&&Q===null?(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(vo=!1,m=m.hydrationErrors,m!==null&&a2(g,g.actualStartTime,h,m)):vo=!0):vo=!1,Dl(r,g,o,v,h),vo=$;break;case 13:$=vo,m=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,m===null||m.dehydrated===null||Q!==null&&Q.dehydrated!==null?vo=!1:(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(vo=!1,m=m.hydrationErrors,m!==null&&a2(g,g.actualStartTime,h,m)):vo=!0),Dl(r,g,o,v,h),vo=$;break;case 23:break;case 22:Q=g.stateNode,m=g.alternate,g.memoizedState!==null?Q._visibility&g0?Dl(r,g,o,v,h):zb(r,g,o,v,h):Q._visibility&g0?Dl(r,g,o,v,h):(Q._visibility|=g0,ce(r,g,o,v,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),h),(g.mode&kr)===Ur||vo||(r=g.actualStartTime,0<=r&&0.05<h-r&&aw(g,r,h),0<=Qr&&0<=Kr&&0.05<Kr-Qr&&aw(g,Qr,Kr))),$&2048&&n4(m,g);break;case 24:Dl(r,g,o,v,h),$&2048&&P4(g.alternate,g);break;default:Dl(r,g,o,v,h)}if((g.mode&kr)!==Ur){if(r=!vo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<h-o&&wv(g,o,h,"Mount");0<=Qr&&0<=Kr&&((Zg||0.05<Ig)&&uv(g,Qr,Kr,Ig,mg),r&&0.05<Kr-Qr&&wv(g,Qr,Kr,"Mount"))}hl(b),Pv(i),mg=P,Zg=t,a0=M}function ce(r,g,o,v,h,b){h=h&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var i=g.sibling;vq(r,g,o,v,h,i!==null?i.actualStartTime:b),g=i}}function vq(r,g,o,v,h,b){var i=el(),P=nv(),t=Hv(),M=Ov(),$=a0;h&&(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&jw(g,g.actualStartTime,b,vo,o);var m=g.flags;switch(g.tag){case 0:case 11:case 15:ce(r,g,o,v,h,b),SO(g,Co);break;case 23:break;case 22:var Q=g.stateNode;g.memoizedState!==null?Q._visibility&g0?ce(r,g,o,v,h,b):zb(r,g,o,v,b):(Q._visibility|=g0,ce(r,g,o,v,h,b)),h&&m&2048&&n4(g.alternate,g);break;case 24:ce(r,g,o,v,h,b),h&&m&2048&&P4(g.alternate,g);break;default:ce(r,g,o,v,h,b)}(g.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(g,Qr,Kr,Ig,mg),hl(i),Pv(P),mg=t,Zg=M,a0=$}function zb(r,g,o,v,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var b=g.child;b!==null;){g=b.sibling;var i=r,P=o,t=v,M=g!==null?g.actualStartTime:h,$=a0;(b.mode&kr)!==Ur&&0<b.actualStartTime&&(b.flags&1)!==0&&jw(b,b.actualStartTime,M,vo,P);var m=b.flags;switch(b.tag){case 22:zb(i,b,P,t,M),m&2048&&n4(b.alternate,b);break;case 24:zb(i,b,P,t,M),m&2048&&P4(b.alternate,b);break;default:zb(i,b,P,t,M)}a0=$,b=g}}function ae(r,g,o){if(r.subtreeFlags&t5)for(r=r.child;r!==null;)eq(r,g,o),r=r.sibling}function eq(r,g,o){switch(r.tag){case 26:ae(r,g,o),r.flags&t5&&r.memoizedState!==null&&MY(o,al,r.memoizedState,r.memoizedProps);break;case 5:ae(r,g,o);break;case 3:case 4:var v=al;al=Su(r.stateNode.containerInfo),ae(r,g,o),al=v;break;case 22:r.memoizedState===null&&(v=r.alternate,v!==null&&v.memoizedState!==null?(v=t5,t5=16777216,ae(r,g,o),t5=v):ae(r,g,o));break;default:ae(r,g,o)}}function hq(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function Kb(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var v=g[o],h=el();uo=v,uq(v,r),(v.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&wv(v,Qr,Kr,"Unmount"),hl(h)}hq(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bq(r),r=r.sibling}function bq(r){var g=el(),o=nv(),v=Hv(),h=Ov();switch(r.tag){case 0:case 11:case 15:Kb(r),r.flags&2048&&b4(r,r.return,Co|Nl);break;case 3:var b=jv();Kb(r),r.stateNode.passiveEffectDuration+=vu(b);break;case 12:b=jv(),Kb(r),r.stateNode.passiveEffectDuration+=Hb(b);break;case 22:b=r.stateNode,r.memoizedState!==null&&b._visibility&g0&&(r.return===null||r.return.tag!==13)?(b._visibility&=~g0,Fu(r),(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&wv(r,Qr,Kr,"Disconnect")):Kb(r);break;default:Kb(r)}(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(r,Qr,Kr,Ig,mg),hl(g),Pv(o),Zg=h,mg=v}function Fu(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var v=g[o],h=el();uo=v,uq(v,r),(v.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&0.05<Kr-Qr&&wv(v,Qr,Kr,"Unmount"),hl(h)}hq(r)}for(r=r.child;r!==null;)wq(r),r=r.sibling}function wq(r){var g=el(),o=nv(),v=Hv(),h=Ov();switch(r.tag){case 0:case 11:case 15:b4(r,r.return,Co),Fu(r);break;case 22:var b=r.stateNode;b._visibility&g0&&(b._visibility&=~g0,Fu(r));break;default:Fu(r)}(r.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(r,Qr,Kr,Ig,mg),hl(g),Pv(o),Zg=h,mg=v}function uq(r,g){for(;uo!==null;){var o=uo,v=o,h=g,b=el(),i=nv(),P=Hv(),t=Ov();switch(v.tag){case 0:case 11:case 15:b4(v,h,Co);break;case 23:case 22:v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(h=v.memoizedState.cachePool.pool,h!=null&&_1(h));break;case 24:Pb(v.memoizedState.cache)}if((v.mode&kr)!==Ur&&0<=Qr&&0<=Kr&&(Zg||0.05<Ig)&&uv(v,Qr,Kr,Ig,mg),hl(b),Pv(i),Zg=t,mg=P,v=o.child,v!==null)v.return=o,uo=v;else r:for(o=r;uo!==null;){if(v=uo,b=v.sibling,i=v.return,jO(v),v===o){uo=null;break r}if(b!==null){b.return=i,uo=b;break r}uo=i}}}function LX(){dJ.forEach(function(r){return r()})}function iq(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||C.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function wl(r){if((og&eo)!==io&&Vr!==0)return Vr&-Vr;var g=C.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),R4()):I()}function nq(){if(po===0)if((Vr&536870912)===0||pr){var r=du;du<<=1,(du&3932160)===0&&(du=262144),po=r}else po=536870912;return r=Ol.current,r!==null&&(r.flags|=32),po}function Bg(r,g,o){if(Fh&&console.error("useInsertionEffect must not schedule updates."),g8&&(xi=!0),r===Mg&&(ng===ie||ng===ne)||r.cancelPendingCommit!==null)fe(r,0),S0(r,Vr,po,!1);if(U0(r,o),(og&eo)!==io&&r===Mg){if(Qv)switch(g.tag){case 0:case 11:case 15:r=yr&&x(yr)||"Unknown",CM.has(r)||(CM.add(r),g=x(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:xM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),xM=!0)}}else Kv&&gb(r,g,o),kX(g),r===Mg&&((og&eo)===io&&(b1|=o),Fg===v1&&S0(r,Vr,po,!1)),Gv(r)}function Pq(r,g,o){if((og&(eo|tl))!==io)throw Error("Should not already be working.");if(Vr!==0&&yr!==null){var v=yr,h=bo();switch(mA){case W5:case ie:var b=o5;Qg&&((v=v._debugTask)?v.run(console.timeStamp.bind(console,"Suspended",b,h,zl,void 0,"primary-light")):console.timeStamp("Suspended",b,h,zl,void 0,"primary-light"));break;case ne:b=o5,Qg&&((v=v._debugTask)?v.run(console.timeStamp.bind(console,"Action",b,h,zl,void 0,"primary-light")):console.timeStamp("Action",b,h,zl,void 0,"primary-light"));break;default:Qg&&(v=h-o5,3>v||console.timeStamp("Blocked",o5,h,zl,void 0,5>v?"primary-light":10>v?"primary":100>v?"primary-dark":"error"))}}b=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||L1(r,g))?FX(r,g):O4(r,g,!0);var i=o;do{if(b===P0){Lh&&!o&&S0(r,g,0,!1),g=ng,o5=fg(),mA=g;break}else{if(v=bo(),h=r.current.alternate,i&&!IX(h)){ll(g),h=wo,b=v,!Qg||b<=h||(Sg?Sg.run(console.timeStamp.bind(console,"Teared Render",h,b,jr,ar,"error")):console.timeStamp("Teared Render",h,b,jr,ar,"error")),f1(g,v),b=O4(r,g,!1),i=!1;continue}if(b===ue){if(i=g,r.errorRecoveryDisabledLanes&i)var P=0;else P=r.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){ll(g),j2(wo,v,g,Sg),f1(g,v),g=P;r:{v=r,b=i,i=G5;var t=v.current.memoizedState.isDehydrated;if(t&&(fe(v,P).flags|=256),P=O4(v,P,!1),P!==ue){if(c6&&!t){v.errorRecoveryDisabledLanes|=b,b1|=b,b=v1;break r}v=To,To=i,v!==null&&(To===null?To=v:To.push.apply(To,v))}b=P}if(i=!1,b!==ue)continue;else v=bo()}}if(b===M5){ll(g),j2(wo,v,g,Sg),f1(g,v),fe(r,0),S0(r,g,0,!0);break}r:{switch(o=r,b){case P0:case M5:throw Error("Root did not complete. This is a bug in React.");case v1:if((g&4194048)!==g)break;case $i:ll(g),PH(wo,v,g,Sg),f1(g,v),h=g,(h&127)!==0?Oi=v:(h&4194048)!==0&&(qi=v),S0(o,g,po,!e1);break r;case ue:To=null;break;case Ui:case JM:break;default:throw Error("Unknown root exit status.")}if(C.actQueue!==null)q4(o,h,g,To,X5,Ii,po,b1,Pe,b,null,null,wo,v);else{if((g&62914560)===g&&(i=Fi+KM-bo(),10<i)){if(S0(o,g,po,!e1),m1(o,0,!0)!==0)break r;jl=g,o.timeoutHandle=EM(Hq.bind(null,o,h,To,X5,Ii,g,po,b1,Pe,e1,b,"Throttled",wo,v),i);break r}Hq(o,h,To,X5,Ii,g,po,b1,Pe,e1,b,null,wo,v)}}}break}while(1);Gv(r)}function Hq(r,g,o,v,h,b,i,P,t,M,$,m,Q,N){r.timeoutHandle=Ae;var hr=g.subtreeFlags,Hr=null;if(hr&8192||(hr&16785408)===16785408){if(Hr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yv},eq(g,b,Hr),hr=(b&62914560)===b?Fi-bo():(b&4194048)===b?zM-bo():0,hr=WY(Hr,hr),hr!==null){jl=b,r.cancelPendingCommit=hr(q4.bind(null,r,g,b,o,v,h,i,P,t,$,Hr,Hr.waitingForViewTransition?"Waiting for the previous Animation":0<Hr.count?0<Hr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Hr.imgCount===1?"Suspended on an Image":0<Hr.imgCount?"Suspended on Images":null,Q,N)),S0(r,b,i,!M);return}}q4(r,g,b,o,v,h,i,P,t,$,Hr,m,Q,N)}function IX(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var v=0;v<o.length;v++){var h=o[v],b=h.getSnapshot;h=h.value;try{if(!Bo(b(),h))return!1}catch(i){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function S0(r,g,o,v){g&=~a6,g&=~b1,r.suspendedLanes|=g,r.pingedLanes&=~g,v&&(r.warmLanes|=g),v=r.expirationTimes;for(var h=g;0<h;){var b=31-Io(h),i=1<<b;v[b]=-1,h&=~i}o!==0&&I1(r,o,g)}function je(){return(og&(eo|tl))===io?(mb(0,!1),!1):!0}function H4(){if(yr!==null){if(ng===fo)var r=yr.return;else r=yr,gu(),Jn(r),Xh=null,n5=0,r=yr;for(;r!==null;)CO(r.alternate,r),r=r.return;yr=null}}function f1(r,g){(r&127)!==0&&(s0=g),(r&4194048)!==0&&(Iv=g),(r&62914560)!==0&&(UA=g),(r&2080374784)!==0&&($A=g)}function fe(r,g){Qg&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",ar,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",ar,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",ar,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",ar,"primary-light"));var o=wo;if(wo=fg(),Vr!==0&&0<o){if(ll(Vr),Fg===Ui||Fg===v1)PH(o,wo,g,Sg);else{var v=wo,h=Sg;if(Qg&&!(v<=o)){var b=(g&738197653)===g?"tertiary-dark":"primary-dark",i=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";h?h.run(console.timeStamp.bind(console,i,o,v,jr,ar,b)):console.timeStamp(i,o,v,jr,ar,b)}}f1(Vr,wo)}if(o=Sg,Sg=null,(g&127)!==0){Sg=sb,h=0<=Lv&&Lv<s0?s0:Lv,v=0<=ge&&ge<s0?s0:ge,b=0<=v?v:0<=h?h:wo,0<=Oi?(ll(2),HH(Oi,b,g,o)):(ti&127)!==0&&(ll(2),ib(s0,b,b0)),o=h;var P=v,t=r5,M=0<Wh,$=r1===db,m=r1===Hi;if(h=wo,v=sb,b=z6,i=K6,Qg){if(jr="Blocking",0<o?o>h&&(o=h):o=h,0<P?P>o&&(P=o):P=o,t!==null&&o>P){var Q=M?"secondary-light":"warning";v?v.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+t,P,o,jr,ar,Q)):console.timeStamp(M?"Consecutive":"Event: "+t,P,o,jr,ar,Q)}h>o&&(P=$?"error":(g&738197653)===g?"tertiary-light":"primary-light",$=m?"Promise Resolved":$?"Cascading Update":5<h-o?"Update Blocked":"Update",m=[],i!=null&&m.push(["Component name",i]),b!=null&&m.push(["Method name",b]),o={start:o,end:h,detail:{devtools:{properties:m,track:jr,trackGroup:ar,color:P}}},v?v.run(performance.measure.bind(performance,$,o)):performance.measure($,o))}Lv=-1.1,r1=0,K6=z6=null,Oi=-1.1,Wh=ge,ge=-1.1,s0=fg()}if((g&4194048)!==0&&(Sg=g5,h=0<=h0&&h0<Iv?Iv:h0,o=0<=Il&&Il<Iv?Iv:Il,v=0<=g1&&g1<Iv?Iv:g1,b=0<=v?v:0<=o?o:wo,0<=qi?(ll(256),HH(qi,b,g,Sg)):(ti&4194048)!==0&&(ll(256),ib(Iv,b,b0)),m=v,P=oe,t=0<o1,M=U6===Hi,b=wo,v=g5,i=zA,$=KA,Qg&&(jr="Transition",0<o?o>b&&(o=b):o=b,0<h?h>o&&(h=o):h=o,0<m?m>h&&(m=h):m=h,h>m&&P!==null&&(Q=t?"secondary-light":"warning",v?v.run(console.timeStamp.bind(console,t?"Consecutive":"Event: "+P,m,h,jr,ar,Q)):console.timeStamp(t?"Consecutive":"Event: "+P,m,h,jr,ar,Q)),o>h&&(v?v.run(console.timeStamp.bind(console,"Action",h,o,jr,ar,"primary-dark")):console.timeStamp("Action",h,o,jr,ar,"primary-dark")),b>o&&(h=M?"Promise Resolved":5<b-o?"Update Blocked":"Update",m=[],$!=null&&m.push(["Component name",$]),i!=null&&m.push(["Method name",i]),o={start:o,end:b,detail:{devtools:{properties:m,track:jr,trackGroup:ar,color:"primary-light"}}},v?v.run(performance.measure.bind(performance,h,o)):performance.measure(h,o))),Il=h0=-1.1,U6=0,qi=-1.1,o1=g1,g1=-1.1,Iv=fg()),(g&62914560)!==0&&(ti&62914560)!==0&&(ll(4194304),ib(UA,wo,b0)),(g&2080374784)!==0&&(ti&2080374784)!==0&&(ll(268435456),ib($A,wo,b0)),o=r.timeoutHandle,o!==Ae&&(r.timeoutHandle=Ae,nQ(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),jl=0,H4(),Mg=r,yr=o=Ev(r.current,null),Vr=g,ng=fo,Al=null,e1=!1,Lh=L1(r,g),c6=!1,Fg=P0,Pe=po=a6=b1=h1=0,To=G5=null,Ii=!1,(g&8)!==0&&(g|=g&32),v=r.entangledLanes,v!==0)for(r=r.entanglements,v&=g;0<v;)h=31-Io(v),b=1<<h,g|=r[h],v&=~b;return Nv=g,fw(),r=RA(),1000<r-WA&&(C.recentlyCreatedOwnerStacks=0,WA=r),El.discardPendingWarnings(),o}function Oq(r,g){$r=null,C.H=q5,C.getCurrentStack=null,Qv=!1,nl=null,g===Gh||g===Ri?(g=BH(),ng=W5):g===I6?(g=BH(),ng=QM):ng=g===D6?E6:g!==null&&typeof g==="object"&&typeof g.then==="function"?R5:mi,Al=g;var o=yr;o===null?(Fg=M5,zu(r,vl(g,r.current))):o.mode&kr&&nn(o)}function qq(){var r=Ol.current;return r===null?!0:(Vr&4194048)===Vr?Fl===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fl:!1}function tq(){var r=C.H;return C.H=q5,r===null?q5:r}function Aq(){var r=C.A;return C.A=pJ,r}function Nu(r){Sg===null&&(Sg=r._debugTask==null?null:r._debugTask)}function Bu(){Fg=v1,e1||(Vr&4194048)!==Vr&&Ol.current!==null||(Lh=!0),(h1&134217727)===0&&(b1&134217727)===0||Mg===null||S0(Mg,Vr,po,!1)}function O4(r,g,o){var v=og;og|=eo;var h=tq(),b=Aq();if(Mg!==r||Vr!==g){if(Kv){var i=r.memoizedUpdaters;0<i.size&&($b(r,Vr),i.clear()),$0(r,g)}X5=null,fe(r,g)}g=!1,i=Fg;r:do try{if(ng!==fo&&yr!==null){var P=yr,t=Al;switch(ng){case E6:H4(),i=$i;break r;case W5:case ie:case ne:case R5:Ol.current===null&&(g=!0);var M=ng;if(ng=fo,Al=null,pe(r,P,t,M),o&&Lh){i=P0;break r}break;default:M=ng,ng=fo,Al=null,pe(r,P,t,M)}}Mq(),i=Fg;break}catch($){Oq(r,$)}while(1);return g&&r.shellSuspendCounter++,gu(),og=v,C.H=h,C.A=b,yr===null&&(Mg=null,Vr=0,fw()),i}function Mq(){for(;yr!==null;)Wq(yr)}function FX(r,g){var o=og;og|=eo;var v=tq(),h=Aq();if(Mg!==r||Vr!==g){if(Kv){var b=r.memoizedUpdaters;0<b.size&&($b(r,Vr),b.clear()),$0(r,g)}X5=null,Ni=bo()+UM,fe(r,g)}else Lh=L1(r,g);r:do try{if(ng!==fo&&yr!==null)g:switch(g=yr,b=Al,ng){case mi:ng=fo,Al=null,pe(r,g,b,mi);break;case ie:case ne:if(FH(b)){ng=fo,Al=null,Rq(g);break}g=function(){ng!==ie&&ng!==ne||Mg!==r||(ng=Li),Gv(r)},b.then(g,g);break r;case W5:ng=Li;break r;case QM:ng=y6;break r;case Li:FH(b)?(ng=fo,Al=null,Rq(g)):(ng=fo,Al=null,pe(r,g,b,Li));break;case y6:var i=null;switch(yr.tag){case 26:i=yr.memoizedState;case 5:case 27:var P=yr;if(i?Pt(i):P.stateNode.complete){ng=fo,Al=null;var t=P.sibling;if(t!==null)yr=t;else{var M=P.return;M!==null?(yr=M,Zu(M)):yr=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}ng=fo,Al=null,pe(r,g,b,y6);break;case R5:ng=fo,Al=null,pe(r,g,b,R5);break;case E6:H4(),Fg=$i;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}C.actQueue!==null?Mq():NX();break}catch($){Oq(r,$)}while(1);if(gu(),C.H=v,C.A=h,og=o,yr!==null)return P0;return Mg=null,Vr=0,fw(),Fg}function NX(){for(;yr!==null&&!IY();)Wq(yr)}function Wq(r){var g=r.alternate;(r.mode&kr)!==Ur?(un(r),g=wr(r,v4,g,r,Nv),nn(r)):g=wr(r,v4,g,r,Nv),r.memoizedProps=r.pendingProps,g===null?Zu(r):yr=g}function Rq(r){var g=wr(r,BX,r);r.memoizedProps=r.pendingProps,g===null?Zu(r):yr=g}function BX(r){var g=r.alternate,o=(r.mode&kr)!==Ur;switch(o&&un(r),r.tag){case 15:case 0:g=LO(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=LO(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Jn(r);default:CO(g,r),r=yr=WH(r,Nv),g=v4(g,r,Nv)}return o&&nn(r),g}function pe(r,g,o,v){gu(),Jn(g),Xh=null,n5=0;var h=g.return;try{if(WX(r,h,g,o,Vr)){Fg=M5,zu(r,vl(o,r.current)),yr=null;return}}catch(b){if(h!==null)throw yr=h,b;Fg=M5,zu(r,vl(o,r.current)),yr=null;return}if(g.flags&32768){if(pr||v===mi)r=!0;else if(Lh||(Vr&536870912)!==0)r=!1;else if(e1=r=!0,v===ie||v===ne||v===W5||v===R5)v=Ol.current,v!==null&&v.tag===13&&(v.flags|=16384);Gq(g,r)}else Zu(g)}function Zu(r){var g=r;do{if((g.flags&32768)!==0){Gq(g,e1);return}var o=g.alternate;if(r=g.return,un(g),o=wr(g,XX,o,g,Nv),(g.mode&kr)!==Ur&&UH(g),o!==null){yr=o;return}if(g=g.sibling,g!==null){yr=g;return}yr=g=r}while(g!==null);Fg===P0&&(Fg=JM)}function Gq(r,g){do{var o=YX(r.alternate,r);if(o!==null){o.flags&=32767,yr=o;return}if((r.mode&kr)!==Ur){UH(r),o=r.actualDuration;for(var v=r.child;v!==null;)o+=v.actualDuration,v=v.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){yr=r;return}yr=r=o}while(r!==null);Fg=$i,yr=null}function q4(r,g,o,v,h,b,i,P,t,M,$,m,Q,N){r.cancelPendingCommit=null;do Ub();while(go!==u1);if(El.flushLegacyContextWarning(),El.flushPendingUnsafeLifecycleWarnings(),(og&(eo|tl))!==io)throw Error("Should not already be working.");if(ll(o),M===ue?j2(Q,N,o,Sg):v!==null?hX(Q,N,o,v,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Sg):eX(Q,N,o,Sg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=g.lanes|g.childLanes,b|=G6,Tw(r,o,b,i,P,t),r===Mg&&(yr=Mg=null,Vr=0),Ih=g,i1=r,jl=o,p6=b,s6=h,NM=v,d6=N,BM=m,fl=Bi,ZM=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,SX(lh,function(){return U5=window.event,fl===Bi&&(fl=f6),zq(),null})):(r.callbackNode=null,r.callbackPriority=0),e0=null,d0=fg(),m!==null&&bX(N,d0,m,Sg),v=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||v){v=C.T,C.T=null,h=wg.p,wg.p=Pl,i=og,og|=tl;try{$X(r,g,o)}finally{og=i,wg.p=h,C.T=v}}go=mM,Xq(),Yq(),Jq()}}function Xq(){if(go===mM){go=u1;var r=i1,g=Ih,o=jl,v=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||v){v=C.T,C.T=null;var h=wg.p;wg.p=Pl;var b=og;og|=tl;try{$h=o,mh=r,eu(),sO(g,r),mh=$h=null,o=i8;var i=uH(r.containerInfo),P=o.focusedElem,t=o.selectionRange;if(i!==P&&P&&P.ownerDocument&&wH(P.ownerDocument.documentElement,P)){if(t!==null&&E2(P)){var{start:M,end:$}=t;if($===void 0&&($=M),"selectionStart"in P)P.selectionStart=M,P.selectionEnd=Math.min($,P.value.length);else{var m=P.ownerDocument||document,Q=m&&m.defaultView||window;if(Q.getSelection){var N=Q.getSelection(),hr=P.textContent.length,Hr=Math.min(t.start,hr),Xg=t.end===void 0?Hr:Math.min(t.end,hr);!N.extend&&Hr>Xg&&(i=Xg,Xg=Hr,Hr=i);var sr=bH(P,Hr),J=bH(P,Xg);if(sr&&J&&(N.rangeCount!==1||N.anchorNode!==sr.node||N.anchorOffset!==sr.offset||N.focusNode!==J.node||N.focusOffset!==J.offset)){var z=m.createRange();z.setStart(sr.node,sr.offset),N.removeAllRanges(),Hr>Xg?(N.addRange(z),N.extend(J.node,J.offset)):(z.setEnd(J.node,J.offset),N.addRange(z))}}}}m=[];for(N=P;N=N.parentNode;)N.nodeType===1&&m.push({element:N,left:N.scrollLeft,top:N.scrollTop});typeof P.focus==="function"&&P.focus();for(P=0;P<m.length;P++){var U=m[P];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}pi=!!u8,i8=u8=null}finally{og=b,wg.p=h,C.T=v}}r.current=g,go=LM}}function Yq(){if(go===LM){go=u1;var r=ZM;if(r!==null){d0=fg();var g=v0,o=d0;!Qg||o<=g||(b0?b0.run(console.timeStamp.bind(console,r,g,o,jr,ar,"secondary-light")):console.timeStamp(r,g,o,jr,ar,"secondary-light"))}r=i1,g=Ih,o=jl;var v=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||v){v=C.T,C.T=null;var h=wg.p;wg.p=Pl;var b=og;og|=tl;try{$h=o,mh=r,eu(),aO(r,g.alternate,g),mh=$h=null}finally{og=b,wg.p=h,C.T=v}}r=d6,g=BM,v0=fg(),r=g===null?r:d0,g=v0,o=fl===j6,v=Sg,e0!==null?OH(r,g,e0,!1,v):!Qg||g<=r||(v?v.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,jr,ar,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,jr,ar,o?"error":"secondary-dark")),go=IM}}function Jq(){if(go===FM||go===IM){if(go===FM){var r=v0;v0=fg();var g=v0,o=fl===j6;!Qg||g<=r||(b0?b0.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,jr,ar,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,jr,ar,o?" error":"secondary-light")),fl!==j6&&(fl=$M)}go=u1,FY(),r=i1;var v=Ih;g=jl,o=NM;var h=v.actualDuration!==0||(v.subtreeFlags&10256)!==0||(v.flags&10256)!==0;h?go=Zi:(go=u1,Ih=i1=null,Qq(r,r.pendingLanes),He=0,J5=null);var b=r.pendingLanes;if(b===0&&(w1=null),h||mq(r),b=W(g),v=v.stateNode,zo&&typeof zo.onCommitFiberRoot==="function")try{var i=(v.current.flags&128)===128;switch(b){case Pl:var P=s4;break;case _l:P=r6;break;case Uv:P=lh;break;case ri:P=g6;break;default:P=lh}zo.onCommitFiberRoot(vh,v,P,i)}catch(m){zv||(zv=!0,console.error("React instrumentation encountered an error: %o",m))}if(Kv&&r.memoizedUpdaters.clear(),LX(),o!==null){i=C.T,P=wg.p,wg.p=Pl,C.T=null;try{var t=r.onRecoverableError;for(v=0;v<o.length;v++){var M=o[v],$=ZX(M.stack);wr(M.source,t,M.value,$)}}finally{C.T=i,wg.p=P}}(jl&3)!==0&&Ub(),Gv(r),b=r.pendingLanes,(g&261930)!==0&&(b&42)!==0?(Mi=!0,r===r8?Y5++:(Y5=0,r8=r)):Y5=0,h||f1(g,v0),mb(0,!1)}}function ZX(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function Qq(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,Pb(g)))}function Ub(){return Xq(),Yq(),Jq(),zq()}function zq(){if(go!==Zi)return!1;var r=i1,g=p6;p6=0;var o=W(jl),v=Uv===0||Uv>o?Uv:o;o=C.T;var h=wg.p;try{wg.p=v,C.T=null;var b=s6;s6=null,v=i1;var i=jl;if(go=u1,Ih=i1=null,jl=0,(og&(eo|tl))!==io)throw Error("Cannot flush passive effects while already rendering.");ll(i),g8=!0,xi=!1;var P=0;if(e0=null,P=bo(),fl===$M)ib(v0,P,b0);else{var t=v0,M=P,$=fl===f6;!Qg||M<=t||(Sg?Sg.run(console.timeStamp.bind(console,$?"Waiting for Paint":"Waiting",t,M,jr,ar,"secondary-light")):console.timeStamp($?"Waiting for Paint":"Waiting",t,M,jr,ar,"secondary-light"))}t=og,og|=tl;var m=v.current;eu(),bq(m);var Q=v.current;m=d6,eu(),lq(v,Q,i,b,m),mq(v),og=t;var N=bo();if(Q=P,m=Sg,e0!==null?OH(Q,N,e0,!0,m):!Qg||N<=Q||(m?m.run(console.timeStamp.bind(console,"Remaining Effects",Q,N,jr,ar,"secondary-dark")):console.timeStamp("Remaining Effects",Q,N,jr,ar,"secondary-dark")),f1(i,N),mb(0,!1),xi?v===J5?He++:(He=0,J5=v):He=0,xi=g8=!1,zo&&typeof zo.onPostCommitFiberRoot==="function")try{zo.onPostCommitFiberRoot(vh,v)}catch(Hr){zv||(zv=!0,console.error("React instrumentation encountered an error: %o",Hr))}var hr=v.current.stateNode;return hr.effectDuration=0,hr.passiveEffectDuration=0,!0}finally{wg.p=h,C.T=o,Qq(r,g)}}function Kq(r,g,o){g=vl(o,g),$H(g),g=cn(r.stateNode,g,2),r=Z0(r,g,2),r!==null&&(U0(r,2),Gv(r))}function bg(r,g,o){if(Fh=!1,r.tag===3)Kq(r,r,o);else{for(;g!==null;){if(g.tag===3){Kq(g,r,o);return}if(g.tag===1){var v=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof v.componentDidCatch==="function"&&(w1===null||!w1.has(v))){r=vl(o,r),$H(r),o=an(2),v=Z0(g,o,2),v!==null&&(jn(o,v,g,r),U0(v,2),Gv(v));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function t4(r,g,o){var v=r.pingCache;if(v===null){v=r.pingCache=new sJ;var h=new Set;v.set(g,h)}else h=v.get(g),h===void 0&&(h=new Set,v.set(g,h));h.has(o)||(c6=!0,h.add(o),v=xX.bind(null,r,g,o),Kv&&$b(r,o),g.then(v,v))}function xX(r,g,o){var v=r.pingCache;v!==null&&v.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Lv&&(s0=Lv=fg(),sb=Pi("Promise Resolved"),r1=Hi):(o&4194048)!==0&&0>Il&&(Iv=Il=fg(),g5=Pi("Promise Resolved"),U6=Hi),iq()&&C.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Mg===r&&(Vr&o)===o&&(Fg===v1||Fg===Ui&&(Vr&62914560)===Vr&&bo()-Fi<KM?(og&eo)===io&&fe(r,0):a6|=o,Pe===Vr&&(Pe=0)),Gv(r)}function Uq(r,g){g===0&&(g=Be()),r=Qo(r,g),r!==null&&(U0(r,g),Gv(r))}function CX(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),Uq(r,o)}function TX(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:v,memoizedState:h}=r;h!==null&&(o=h.retryLane);break;case 19:v=r.stateNode;break;case 22:v=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}v!==null&&v.delete(g),Uq(r,o)}function A4(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var v=r,h=g,b=h.type===au;b=o||b,h.tag!==22?h.flags&67108864?b&&wr(h,$q,v,h):A4(v,h,b):h.memoizedState===null&&(b&&h.flags&8192?wr(h,$q,v,h):h.subtreeFlags&67108864&&wr(h,A4,v,h,b)),g=g.sibling}}function $q(r,g){Rg(!0);try{gq(g),wq(g),oq(r,g.alternate,g,!1),vq(r,g,0,null,!1,0)}finally{Rg(!1)}}function mq(r){var g=!0;r.current.mode&(Ko|yl)||(g=!1),A4(r,r.current,g)}function Lq(r){if((og&eo)===io){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=x(r)||"ReactComponent",Ci!==null){if(Ci.has(g))return;Ci.add(g)}else Ci=new Set([g]);wr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function $b(r,g){Kv&&r.memoizedUpdaters.forEach(function(o){gb(r,o,g)})}function SX(r,g){var o=C.actQueue;return o!==null?(o.push(g),oQ):d4(r,g)}function kX(r){iq()&&C.actQueue===null&&wr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,x(r))})}function Gv(r){r!==Nh&&r.next===null&&(Nh===null?Ti=Nh=r:Nh=Nh.next=r),Si=!0,C.actQueue!==null?l8||(l8=!0,Bq()):o8||(o8=!0,Bq())}function mb(r,g){if(!v8&&Si){v8=!0;do{var o=!1;for(var v=Ti;v!==null;){if(!g)if(r!==0){var h=v.pendingLanes;if(h===0)var b=0;else{var{suspendedLanes:i,pingedLanes:P}=v;b=(1<<31-Io(42|r)+1)-1,b&=h&~(i&~P),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(o=!0,Nq(v,b))}else b=Vr,b=m1(v,v===Mg?b:0,v.cancelPendingCommit!==null||v.timeoutHandle!==Ae),(b&3)===0||L1(v,b)||(o=!0,Nq(v,b));v=v.next}}while(o);v8=!1}}function DX(){U5=window.event,M4()}function M4(){Si=l8=o8=!1;var r=0;n1!==0&&jX()&&(r=n1);for(var g=bo(),o=null,v=Ti;v!==null;){var h=v.next,b=Iq(v,g);if(b===0)v.next=null,o===null?Ti=h:o.next=h,h===null&&(Nh=o);else if(o=v,r!==0||(b&3)!==0)Si=!0;v=h}go!==u1&&go!==Zi||mb(r,!1),n1!==0&&(n1=0)}function Iq(r,g){for(var{suspendedLanes:o,pingedLanes:v,expirationTimes:h}=r,b=r.pendingLanes&-62914561;0<b;){var i=31-Io(b),P=1<<i,t=h[i];if(t===-1){if((P&o)===0||(P&v)!==0)h[i]=B2(P,g)}else t<=g&&(r.expiredLanes|=P);b&=~P}if(g=Mg,o=Vr,o=m1(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Ae),v=r.callbackNode,o===0||r===g&&(ng===ie||ng===ne)||r.cancelPendingCommit!==null)return v!==null&&W4(v),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||L1(r,o)){if(g=o&-o,g!==r.callbackPriority||C.actQueue!==null&&v!==e8)W4(v);else return g;switch(W(o)){case Pl:case _l:o=r6;break;case Uv:o=lh;break;case ri:o=g6;break;default:o=lh}return v=Fq.bind(null,r),C.actQueue!==null?(C.actQueue.push(v),o=e8):o=d4(o,v),r.callbackPriority=g,r.callbackNode=o,g}return v!==null&&W4(v),r.callbackPriority=2,r.callbackNode=null,2}function Fq(r,g){if(Mi=Ai=!1,U5=window.event,go!==u1&&go!==Zi)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(fl===Bi&&(fl=f6),Ub()&&r.callbackNode!==o)return null;var v=Vr;if(v=m1(r,r===Mg?v:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Ae),v===0)return null;return Pq(r,v,g),Iq(r,bo()),r.callbackNode!=null&&r.callbackNode===o?Fq.bind(null,r):null}function Nq(r,g){if(Ub())return null;Ai=Mi,Mi=!1,Pq(r,g,!0)}function W4(r){r!==e8&&r!==null&&LY(r)}function Bq(){C.actQueue!==null&&C.actQueue.push(function(){return M4(),null}),PQ(function(){(og&(eo|tl))!==io?d4(s4,DX):M4()})}function R4(){if(n1===0){var r=le;r===0&&(r=pu,pu<<=1,(pu&261888)===0&&(pu=256)),n1=r}return n1}function Zq(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Hg(r,"action"),bb(""+r)}function xq(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function VX(r,g,o,v,h){if(g==="submit"&&o&&o.stateNode===h){var b=Zq((h[Fo]||null).action),i=v.submitter;i&&(g=(g=i[Fo]||null)?Zq(g.formAction):i.getAttribute("formAction"),g!==null&&(b=g,i=null));var P=new ei("action","action",null,v,h);r.push({event:P,listeners:[{instance:null,listener:function(){if(v.defaultPrevented){if(n1!==0){var t=i?xq(h,i):new FormData(h),M={pending:!0,data:t,method:h.method,action:b};Object.freeze(M),Sn(o,M,null,t)}}else typeof b==="function"&&(P.preventDefault(),t=i?xq(h,i):new FormData(h),M={pending:!0,data:t,method:h.method,action:b},Object.freeze(M),Sn(o,M,b,t))},currentTarget:h}]})}}function xu(r,g,o){r.currentTarget=o;try{g(r)}catch(v){A6(v)}r.currentTarget=null}function Cq(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var v=r[o];r:{var h=void 0,b=v.event;if(v=v.listeners,g)for(var i=v.length-1;0<=i;i--){var P=v[i],t=P.instance,M=P.currentTarget;if(P=P.listener,t!==h&&b.isPropagationStopped())break r;t!==null?wr(t,xu,b,P,M):xu(b,P,M),h=t}else for(i=0;i<v.length;i++){if(P=v[i],t=P.instance,M=P.currentTarget,P=P.listener,t!==h&&b.isPropagationStopped())break r;t!==null?wr(t,xu,b,P,M):xu(b,P,M),h=t}}}}function dr(r,g){h8.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[o6];o===void 0&&(o=g[o6]=new Set);var v=r+"__bubble";o.has(v)||(Tq(g,r,2,!1),o.add(v))}function G4(r,g,o){h8.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var v=0;g&&(v|=4),Tq(o,r,v,g)}function X4(r){if(!r[ki]){r[ki]=!0,Bt.forEach(function(o){o!=="selectionchange"&&(h8.has(o)||G4(o,!1,r),G4(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[ki]||(g[ki]=!0,G4("selectionchange",!1,g))}}function Tq(r,g,o,v){switch(Mt(g)){case Pl:var h=YY;break;case _l:h=JY;break;default:h=C4}o=h.bind(null,g,o,r),h=void 0,!b6||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(h=!0),v?h!==void 0?r.addEventListener(g,o,{capture:!0,passive:h}):r.addEventListener(g,o,!0):h!==void 0?r.addEventListener(g,o,{passive:h}):r.addEventListener(g,o,!1)}function Y4(r,g,o,v,h){var b=v;if((g&1)===0&&(g&2)===0&&v!==null)r:for(;;){if(v===null)return;var i=v.tag;if(i===3||i===4){var P=v.stateNode.containerInfo;if(P===h)break;if(i===4)for(i=v.return;i!==null;){var t=i.tag;if((t===3||t===4)&&i.stateNode.containerInfo===h)return;i=i.return}for(;P!==null;){if(i=Mr(P),i===null)return;if(t=i.tag,t===5||t===6||t===26||t===27){v=b=i;continue r}P=P.parentNode}}v=v.return}fP(function(){var M=b,$=_2(o),m=[];r:{var Q=MA.get(r);if(Q!==void 0){var N=ei,hr=r;switch(r){case"keypress":if(yw(o)===0)break r;case"keydown":case"keyup":N=MJ;break;case"focusin":hr="focus",N=n6;break;case"focusout":hr="blur",N=n6;break;case"beforeblur":case"afterblur":N=n6;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vA;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=hJ;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=GJ;break;case OA:case qA:case tA:N=uJ;break;case AA:N=YJ;break;case"scroll":case"scrollend":N=vJ;break;case"wheel":N=QJ;break;case"copy":case"cut":case"paste":N=nJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hA;break;case"toggle":case"beforetoggle":N=KJ}var Hr=(g&4)!==0,Xg=!Hr&&(r==="scroll"||r==="scrollend"),sr=Hr?Q!==null?Q+"Capture":null:Q;Hr=[];for(var J=M,z;J!==null;){var U=J;if(z=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||z===null||sr===null||(U=wb(J,sr),U!=null&&Hr.push(Lb(J,U,z))),Xg)break;J=J.return}0<Hr.length&&(Q=new N(Q,hr,null,o,$),m.push({event:Q,listeners:Hr}))}}if((g&7)===0){r:{if(Q=r==="mouseover"||r==="pointerover",N=r==="mouseout"||r==="pointerout",Q&&o!==Db&&(hr=o.relatedTarget||o.fromElement)&&(Mr(hr)||hr[E0]))break r;if(N||Q){if(Q=$.window===$?$:(Q=$.ownerDocument)?Q.defaultView||Q.parentWindow:window,N){if(hr=o.relatedTarget||o.toElement,N=M,hr=hr?Mr(hr):null,hr!==null&&(Xg=rr(hr),Hr=hr.tag,hr!==Xg||Hr!==5&&Hr!==27&&Hr!==6))hr=null}else N=null,hr=M;if(N!==hr){if(Hr=vA,U="onMouseLeave",sr="onMouseEnter",J="mouse",r==="pointerout"||r==="pointerover")Hr=hA,U="onPointerLeave",sr="onPointerEnter",J="pointer";if(Xg=N==null?Q:Nr(N),z=hr==null?Q:Nr(hr),Q=new Hr(U,J+"leave",N,o,$),Q.target=Xg,Q.relatedTarget=z,U=null,Mr($)===M&&(Hr=new Hr(sr,J+"enter",hr,o,$),Hr.target=z,Hr.relatedTarget=Xg,U=Hr),Xg=U,N&&hr)g:{Hr=_X,sr=N,J=hr,z=0;for(U=sr;U;U=Hr(U))z++;U=0;for(var D=J;D;D=Hr(D))U++;for(;0<z-U;)sr=Hr(sr),z--;for(;0<U-z;)J=Hr(J),U--;for(;z--;){if(sr===J||J!==null&&sr===J.alternate){Hr=sr;break g}sr=Hr(sr),J=Hr(J)}Hr=null}else Hr=null;N!==null&&Sq(m,Q,N,Hr,!1),hr!==null&&Xg!==null&&Sq(m,Xg,hr,Hr,!0)}}}r:{if(Q=M?Nr(M):window,N=Q.nodeName&&Q.nodeName.toLowerCase(),N==="select"||N==="input"&&Q.type==="file")var ir=lH;else if(gH(Q))if(PA)ir=oX;else{ir=rX;var mr=sG}else N=Q.nodeName,!N||N.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?M&&hb(M.elementType)&&(ir=lH):ir=gX;if(ir&&(ir=ir(r,M))){oH(m,ir,o,$);break r}mr&&mr(r,Q,M),r==="focusout"&&M&&Q.type==="number"&&M.memoizedProps.value!=null&&C2(Q,"number",Q.value)}switch(mr=M?Nr(M):window,r){case"focusin":if(gH(mr)||mr.contentEditable==="true")nh=mr,H6=M,jb=null;break;case"focusout":jb=H6=nh=null;break;case"mousedown":O6=!0;break;case"contextmenu":case"mouseup":case"dragend":O6=!1,iH(m,o,$);break;case"selectionchange":if(LJ)break;case"keydown":case"keyup":iH(m,o,$)}var Yr;if(P6)r:{switch(r){case"compositionstart":var Rr="onCompositionStart";break r;case"compositionend":Rr="onCompositionEnd";break r;case"compositionupdate":Rr="onCompositionUpdate";break r}Rr=void 0}else ih?sP(r,o)&&(Rr="onCompositionEnd"):r==="keydown"&&o.keyCode===bA&&(Rr="onCompositionStart");if(Rr&&(wA&&o.locale!=="ko"&&(ih||Rr!=="onCompositionStart"?Rr==="onCompositionEnd"&&ih&&(Yr=pP()):(c0=$,w6=("value"in c0)?c0.value:c0.textContent,ih=!0)),mr=Cu(M,Rr),0<mr.length&&(Rr=new eA(Rr,r,null,o,$),m.push({event:Rr,listeners:mr}),Yr?Rr.data=Yr:(Yr=rH(o),Yr!==null&&(Rr.data=Yr)))),Yr=$J?jG(r,o):fG(r,o))Rr=Cu(M,"onBeforeInput"),0<Rr.length&&(mr=new HJ("onBeforeInput","beforeinput",null,o,$),m.push({event:mr,listeners:Rr}),mr.data=Yr);VX(m,r,M,o,$)}Cq(m,g)})}function Lb(r,g,o){return{instance:r,listener:g,currentTarget:o}}function Cu(r,g){for(var o=g+"Capture",v=[];r!==null;){var h=r,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=wb(r,o),h!=null&&v.unshift(Lb(r,h,b)),h=wb(r,g),h!=null&&v.push(Lb(r,h,b))),r.tag===3)return v;r=r.return}return[]}function _X(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function Sq(r,g,o,v,h){for(var b=g._reactName,i=[];o!==null&&o!==v;){var P=o,t=P.alternate,M=P.stateNode;if(P=P.tag,t!==null&&t===v)break;P!==5&&P!==26&&P!==27||M===null||(t=M,h?(M=wb(o,b),M!=null&&i.unshift(Lb(o,M,t))):h||(M=wb(o,b),M!=null&&i.push(Lb(o,M,t)))),o=o.return}i.length!==0&&r.push({event:g,listeners:i})}function J4(r,g){yG(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||oA||(oA=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:p1,possibleRegistrationNames:l6};hb(r)||typeof g.is==="string"||cG(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,v){g!==o&&(o=k0(o),k0(g)!==o&&(v[r]=g))}function yX(r,g,o){g.forEach(function(v){o[Vq(v)]=v==="style"?z4(r):r.getAttribute(v)})}function Xv(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function kq(r,g){return r=r.namespaceURI===oi||r.namespaceURI===hh?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function k0(r){return rl(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yo(r)),ag(r)),(typeof r==="string"?r:""+r).replace(lQ,`
`).replace(vQ,"")}function Dq(r,g){return g=k0(g),k0(r)===g?!0:!1}function tg(r,g,o,v,h,b){switch(o){case"children":if(typeof v==="string")_w(v,g,!1),g==="body"||g==="textarea"&&v===""||eb(r,v);else if(typeof v==="number"||typeof v==="bigint")_w(""+v,g,!1),g!=="body"&&eb(r,""+v);break;case"className":kw(r,"class",v);break;case"tabIndex":kw(r,"tabindex",v);break;case"dir":case"role":case"viewBox":case"width":case"height":kw(r,o,v);break;case"style":cP(r,v,b);break;case"data":if(g!=="object"){kw(r,"data",v);break}case"src":case"href":if(v===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(v==null||typeof v==="function"||typeof v==="symbol"||typeof v==="boolean"){r.removeAttribute(o);break}Hg(v,o),v=bb(""+v),r.setAttribute(o,v);break;case"action":case"formAction":if(v!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof v==="function"&&(h.encType==null&&h.method==null||_i||(_i=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),h.target==null||Vi||(Vi=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||h.type==="submit"||h.type==="image"||Di?g!=="button"||h.type==null||h.type==="submit"||Di?typeof v==="function"&&(h.name==null||kM||(kM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),h.formEncType==null&&h.formMethod==null||_i||(_i=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),h.formTarget==null||Vi||(Vi=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Di=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Di=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof v==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(o==="formAction"?(g!=="input"&&tg(r,g,"name",h.name,h,null),tg(r,g,"formEncType",h.formEncType,h,null),tg(r,g,"formMethod",h.formMethod,h,null),tg(r,g,"formTarget",h.formTarget,h,null)):(tg(r,g,"encType",h.encType,h,null),tg(r,g,"method",h.method,h,null),tg(r,g,"target",h.target,h,null)));if(v==null||typeof v==="symbol"||typeof v==="boolean"){r.removeAttribute(o);break}Hg(v,o),v=bb(""+v),r.setAttribute(o,v);break;case"onClick":v!=null&&(typeof v!=="function"&&Xv(o,v),r.onclick=yv);break;case"onScroll":v!=null&&(typeof v!=="function"&&Xv(o,v),dr("scroll",r));break;case"onScrollEnd":v!=null&&(typeof v!=="function"&&Xv(o,v),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(v!=null){if(typeof v!=="object"||!("__html"in v))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=v.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=v&&typeof v!=="function"&&typeof v!=="symbol";break;case"muted":r.muted=v&&typeof v!=="function"&&typeof v!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(v==null||typeof v==="function"||typeof v==="boolean"||typeof v==="symbol"){r.removeAttribute("xlink:href");break}Hg(v,o),o=bb(""+v),r.setAttributeNS(Oe,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":v!=null&&typeof v!=="function"&&typeof v!=="symbol"?(Hg(v,o),r.setAttribute(o,""+v)):r.removeAttribute(o);break;case"inert":v!==""||yi[o]||(yi[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":v&&typeof v!=="function"&&typeof v!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":v===!0?r.setAttribute(o,""):v!==!1&&v!=null&&typeof v!=="function"&&typeof v!=="symbol"?(Hg(v,o),r.setAttribute(o,v)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":v!=null&&typeof v!=="function"&&typeof v!=="symbol"&&!isNaN(v)&&1<=v?(Hg(v,o),r.setAttribute(o,v)):r.removeAttribute(o);break;case"rowSpan":case"start":v==null||typeof v==="function"||typeof v==="symbol"||isNaN(v)?r.removeAttribute(o):(Hg(v,o),r.setAttribute(o,v));break;case"popover":dr("beforetoggle",r),dr("toggle",r),Sw(r,"popover",v);break;case"xlinkActuate":_v(r,Oe,"xlink:actuate",v);break;case"xlinkArcrole":_v(r,Oe,"xlink:arcrole",v);break;case"xlinkRole":_v(r,Oe,"xlink:role",v);break;case"xlinkShow":_v(r,Oe,"xlink:show",v);break;case"xlinkTitle":_v(r,Oe,"xlink:title",v);break;case"xlinkType":_v(r,Oe,"xlink:type",v);break;case"xmlBase":_v(r,b8,"xml:base",v);break;case"xmlLang":_v(r,b8,"xml:lang",v);break;case"xmlSpace":_v(r,b8,"xml:space",v);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Sw(r,"is",v);break;case"innerText":case"textContent":break;case"popoverTarget":DM||v==null||typeof v!=="object"||(DM=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",v));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=aP(o),Sw(r,o,v)):p1.hasOwnProperty(o)&&v!=null&&typeof v!=="function"&&Xv(o,v)}}function Q4(r,g,o,v,h,b){switch(o){case"style":cP(r,v,b);break;case"dangerouslySetInnerHTML":if(v!=null){if(typeof v!=="object"||!("__html"in v))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=v.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof v==="string"?eb(r,v):(typeof v==="number"||typeof v==="bigint")&&eb(r,""+v);break;case"onScroll":v!=null&&(typeof v!=="function"&&Xv(o,v),dr("scroll",r));break;case"onScrollEnd":v!=null&&(typeof v!=="function"&&Xv(o,v),dr("scrollend",r));break;case"onClick":v!=null&&(typeof v!=="function"&&Xv(o,v),r.onclick=yv);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p1.hasOwnProperty(o))v!=null&&typeof v!=="function"&&Xv(o,v);else r:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),g=o.slice(2,h?o.length-7:void 0),b=r[Fo]||null,b=b!=null?b[o]:null,typeof b==="function"&&r.removeEventListener(g,b,h),typeof v==="function")){typeof b!=="function"&&b!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,v,h);break r}o in r?r[o]=v:v===!0?r.setAttribute(o,""):Sw(r,o,v)}}}function to(r,g,o){switch(J4(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var v=!1,h=!1,b;for(b in o)if(o.hasOwnProperty(b)){var i=o[b];if(i!=null)switch(b){case"src":v=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:tg(r,g,b,i,o,null)}}h&&tg(r,g,"srcSet",o.srcSet,o,null),v&&tg(r,g,"src",o.src,o,null);return;case"input":m0("input",o),dr("invalid",r);var P=b=i=h=null,t=null,M=null;for(v in o)if(o.hasOwnProperty(v)){var $=o[v];if($!=null)switch(v){case"name":h=$;break;case"type":i=$;break;case"checked":t=$;break;case"defaultChecked":M=$;break;case"value":b=$;break;case"defaultValue":P=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:tg(r,g,v,$,o,null)}}LP(r,o),IP(r,b,P,t,M,i,h,!1);return;case"select":m0("select",o),dr("invalid",r),v=i=b=null;for(h in o)if(o.hasOwnProperty(h)&&(P=o[h],P!=null))switch(h){case"value":b=P;break;case"defaultValue":i=P;break;case"multiple":v=P;default:tg(r,g,h,P,o,null)}BP(r,o),g=b,o=i,r.multiple=!!v,g!=null?xe(r,!!v,g,!1):o!=null&&xe(r,!!v,o,!0);return;case"textarea":m0("textarea",o),dr("invalid",r),b=h=v=null;for(i in o)if(o.hasOwnProperty(i)&&(P=o[i],P!=null))switch(i){case"value":v=P;break;case"defaultValue":h=P;break;case"children":b=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:tg(r,g,i,P,o,null)}ZP(r,o),CP(r,v,h,b);return;case"option":FP(r,o);for(t in o)if(o.hasOwnProperty(t)&&(v=o[t],v!=null))switch(t){case"selected":r.selected=v&&typeof v!=="function"&&typeof v!=="symbol";break;default:tg(r,g,t,v,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(v=0;v<Q5.length;v++)dr(Q5[v],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in o)if(o.hasOwnProperty(M)&&(v=o[M],v!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:tg(r,g,M,v,o,null)}return;default:if(hb(g)){for($ in o)o.hasOwnProperty($)&&(v=o[$],v!==void 0&&Q4(r,g,$,v,o,void 0));return}}for(P in o)o.hasOwnProperty(P)&&(v=o[P],v!=null&&tg(r,g,P,v,o,null))}function EX(r,g,o,v){switch(J4(g,v),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,i=null,P=null,t=null,M=null,$=null;for(N in o){var m=o[N];if(o.hasOwnProperty(N)&&m!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":t=m;default:v.hasOwnProperty(N)||tg(r,g,N,null,v,m)}}for(var Q in v){var N=v[Q];if(m=o[Q],v.hasOwnProperty(Q)&&(N!=null||m!=null))switch(Q){case"type":b=N;break;case"name":h=N;break;case"checked":M=N;break;case"defaultChecked":$=N;break;case"value":i=N;break;case"defaultValue":P=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:N!==m&&tg(r,g,Q,N,v,m)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,v=v.type==="checkbox"||v.type==="radio"?v.checked!=null:v.value!=null,g||!v||SM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),SM=!0),!g||v||TM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),TM=!0),x2(r,i,P,t,M,$,b,h);return;case"select":N=i=P=Q=null;for(b in o)if(t=o[b],o.hasOwnProperty(b)&&t!=null)switch(b){case"value":break;case"multiple":N=t;default:v.hasOwnProperty(b)||tg(r,g,b,null,v,t)}for(h in v)if(b=v[h],t=o[h],v.hasOwnProperty(h)&&(b!=null||t!=null))switch(h){case"value":Q=b;break;case"defaultValue":P=b;break;case"multiple":i=b;default:b!==t&&tg(r,g,h,b,v,t)}v=P,g=i,o=N,Q!=null?xe(r,!!g,Q,!1):!!o!==!!g&&(v!=null?xe(r,!!g,v,!0):xe(r,!!g,g?[]:"",!1));return;case"textarea":N=Q=null;for(P in o)if(h=o[P],o.hasOwnProperty(P)&&h!=null&&!v.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:tg(r,g,P,null,v,h)}for(i in v)if(h=v[i],b=o[i],v.hasOwnProperty(i)&&(h!=null||b!=null))switch(i){case"value":Q=h;break;case"defaultValue":N=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:h!==b&&tg(r,g,i,h,v,b)}xP(r,Q,N);return;case"option":for(var hr in o)if(Q=o[hr],o.hasOwnProperty(hr)&&Q!=null&&!v.hasOwnProperty(hr))switch(hr){case"selected":r.selected=!1;break;default:tg(r,g,hr,null,v,Q)}for(t in v)if(Q=v[t],N=o[t],v.hasOwnProperty(t)&&Q!==N&&(Q!=null||N!=null))switch(t){case"selected":r.selected=Q&&typeof Q!=="function"&&typeof Q!=="symbol";break;default:tg(r,g,t,Q,v,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Hr in o)Q=o[Hr],o.hasOwnProperty(Hr)&&Q!=null&&!v.hasOwnProperty(Hr)&&tg(r,g,Hr,null,v,Q);for(M in v)if(Q=v[M],N=o[M],v.hasOwnProperty(M)&&Q!==N&&(Q!=null||N!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:tg(r,g,M,Q,v,N)}return;default:if(hb(g)){for(var Xg in o)Q=o[Xg],o.hasOwnProperty(Xg)&&Q!==void 0&&!v.hasOwnProperty(Xg)&&Q4(r,g,Xg,void 0,v,Q);for($ in v)Q=v[$],N=o[$],!v.hasOwnProperty($)||Q===N||Q===void 0&&N===void 0||Q4(r,g,$,Q,v,N);return}}for(var sr in o)Q=o[sr],o.hasOwnProperty(sr)&&Q!=null&&!v.hasOwnProperty(sr)&&tg(r,g,sr,null,v,Q);for(m in v)Q=v[m],N=o[m],!v.hasOwnProperty(m)||Q===N||Q==null&&N==null||tg(r,g,m,Q,v,N)}function Vq(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function z4(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var v=r[o];g[v]=r.getPropertyValue(v)}return g}function _q(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var v,h=v="",b;for(b in g)if(g.hasOwnProperty(b)){var i=g[b];i!=null&&typeof i!=="boolean"&&i!==""&&(b.indexOf("--")===0?(rb(i,b),v+=h+b+":"+(""+i).trim()):typeof i!=="number"||i===0||rA.has(b)?(rb(i,b),v+=h+b.replace(jt,"-$1").toLowerCase().replace(ft,"-ms-")+":"+(""+i).trim()):v+=h+b.replace(jt,"-$1").toLowerCase().replace(ft,"-ms-")+":"+i+"px",h=";")}v=v||null,g=r.getAttribute("style"),g!==v&&(v=k0(v),k0(g)!==v&&(o.style=z4(r)))}}function Ql(r,g,o,v,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":return}else if(v!=null)switch(typeof v){case"function":case"symbol":case"boolean":break;default:if(Hg(v,g),r===""+v)return}ho(g,r,v,b)}function yq(r,g,o,v,h,b){if(h.delete(o),r=r.getAttribute(o),r===null){switch(typeof v){case"function":case"symbol":return}if(!v)return}else switch(typeof v){case"function":case"symbol":break;default:if(v)return}ho(g,r,v,b)}function K4(r,g,o,v,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof v){case"undefined":case"function":case"symbol":return}else if(v!=null)switch(typeof v){case"function":case"symbol":break;default:if(Hg(v,o),r===""+v)return}ho(g,r,v,b)}function Eq(r,g,o,v,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(v))return}else if(v!=null)switch(typeof v){case"function":case"symbol":case"boolean":break;default:if(!isNaN(v)&&(Hg(v,g),r===""+v))return}ho(g,r,v,b)}function U4(r,g,o,v,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":return}else if(v!=null)switch(typeof v){case"function":case"symbol":case"boolean":break;default:if(Hg(v,g),o=bb(""+v),r===o)return}ho(g,r,v,b)}function cq(r,g,o,v){for(var h={},b=new Set,i=r.attributes,P=0;P<i.length;P++)switch(i[P].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(i[P].name)}if(hb(g)){for(var t in o)if(o.hasOwnProperty(t)){var M=o[t];if(M!=null){if(p1.hasOwnProperty(t))typeof M!=="function"&&Xv(t,M);else if(o.suppressHydrationWarning!==!0)switch(t){case"children":typeof M!=="string"&&typeof M!=="number"||ho("children",r.textContent,M,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=kq(r,M),ho(t,i,M,h));continue;case"style":b.delete(t),_q(r,M,h);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(t.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",t);continue;case"className":b.delete("class"),i=UP(r,"class",M),ho("className",i,M,h);continue;default:v.context===H0&&g!=="svg"&&g!=="math"?b.delete(t.toLowerCase()):b.delete(t),i=UP(r,t,M),ho(t,i,M,h)}}}}else for(M in o)if(o.hasOwnProperty(M)&&(t=o[M],t!=null)){if(p1.hasOwnProperty(M))typeof t!=="function"&&Xv(M,t);else if(o.suppressHydrationWarning!==!0)switch(M){case"children":typeof t!=="string"&&typeof t!=="number"||ho("children",r.textContent,t,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,t=t?t.__html:void 0,t!=null&&(t=kq(r,t),i!==t&&(h[M]={__html:i}));continue;case"className":Ql(r,M,"class",t,b,h);continue;case"tabIndex":Ql(r,M,"tabindex",t,b,h);continue;case"style":b.delete(M),_q(r,t,h);continue;case"multiple":b.delete(M),ho(M,r.multiple,t,h);continue;case"muted":b.delete(M),ho(M,r.muted,t,h);continue;case"autoFocus":b.delete("autofocus"),ho(M,r.autofocus,t,h);continue;case"data":if(g!=="object"){b.delete(M),i=r.getAttribute("data"),ho(M,i,t,h);continue}case"src":case"href":if(!(t!==""||g==="a"&&M==="href"||g==="object"&&M==="data")){M==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M);continue}U4(r,M,M,t,b,h);continue;case"action":case"formAction":if(i=r.getAttribute(M),typeof t==="function"){b.delete(M.toLowerCase()),M==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(i===eQ){b.delete(M.toLowerCase()),ho(M,"function",t,h);continue}U4(r,M,M.toLowerCase(),t,b,h);continue;case"xlinkHref":U4(r,M,"xlink:href",t,b,h);continue;case"contentEditable":K4(r,M,"contenteditable",t,b,h);continue;case"spellCheck":K4(r,M,"spellcheck",t,b,h);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":K4(r,M,M,t,b,h);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":yq(r,M,M.toLowerCase(),t,b,h);continue;case"capture":case"download":r:{P=r;var $=i=M,m=h;if(b.delete($),P=P.getAttribute($),P===null)switch(typeof t){case"undefined":case"function":case"symbol":break r;default:if(t===!1)break r}else if(t!=null)switch(typeof t){case"function":case"symbol":break;case"boolean":if(t===!0&&P==="")break r;break;default:if(Hg(t,i),P===""+t)break r}ho(i,P,t,m)}continue;case"cols":case"rows":case"size":case"span":r:{if(P=r,$=i=M,m=h,b.delete($),P=P.getAttribute($),P===null)switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(t)||1>t)break r}else if(t!=null)switch(typeof t){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(t)||1>t)&&(Hg(t,i),P===""+t))break r}ho(i,P,t,m)}continue;case"rowSpan":Eq(r,M,"rowspan",t,b,h);continue;case"start":Eq(r,M,M,t,b,h);continue;case"xHeight":Ql(r,M,"x-height",t,b,h);continue;case"xlinkActuate":Ql(r,M,"xlink:actuate",t,b,h);continue;case"xlinkArcrole":Ql(r,M,"xlink:arcrole",t,b,h);continue;case"xlinkRole":Ql(r,M,"xlink:role",t,b,h);continue;case"xlinkShow":Ql(r,M,"xlink:show",t,b,h);continue;case"xlinkTitle":Ql(r,M,"xlink:title",t,b,h);continue;case"xlinkType":Ql(r,M,"xlink:type",t,b,h);continue;case"xmlBase":Ql(r,M,"xml:base",t,b,h);continue;case"xmlLang":Ql(r,M,"xml:lang",t,b,h);continue;case"xmlSpace":Ql(r,M,"xml:space",t,b,h);continue;case"inert":t!==""||yi[M]||(yi[M]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",M)),yq(r,M,M,t,b,h);continue;default:if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){P=aP(M),i=!1,v.context===H0&&g!=="svg"&&g!=="math"?b.delete(P.toLowerCase()):($=M.toLowerCase(),$=li.hasOwnProperty($)?li[$]||null:null,$!==null&&$!==M&&(i=!0,b.delete($)),b.delete(P));r:if($=r,m=P,P=t,ob(m))if($.hasAttribute(m))$=$.getAttribute(m),Hg(P,m),P=$===""+P?P:$;else{switch(typeof P){case"function":case"symbol":break r;case"boolean":if($=m.toLowerCase().slice(0,5),$!=="data-"&&$!=="aria-")break r}P=P===void 0?void 0:null}else P=void 0;i||ho(M,P,t,h)}}}return 0<b.size&&o.suppressHydrationWarning!==!0&&yX(r,b,h),Object.keys(h).length===0?null:h}function cX(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function aq(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aX(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),v=0;v<o.length;v++){var h=o[v],b=h.transferSize,i=h.initiatorType,P=h.duration;if(b&&P&&aq(i)){i=0,P=h.responseEnd;for(v+=1;v<o.length;v++){var t=o[v],M=t.startTime;if(M>P)break;var{transferSize:$,initiatorType:m}=t;$&&aq(m)&&(t=t.responseEnd,i+=$*(t<P?1:(P-M)/(t-M)))}if(--v,g+=8*(b+i)/(h.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Tu(r){return r.nodeType===9?r:r.ownerDocument}function jq(r){switch(r){case hh:return Zh;case oi:return ci;default:return H0}}function fq(r,g){if(r===H0)switch(g){case"svg":return Zh;case"math":return ci;default:return H0}return r===Zh&&g==="foreignObject"?H0:r}function $4(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function jX(){var r=window.event;if(r&&r.type==="popstate"){if(r===n8)return!1;return n8=r,!0}return n8=null,!1}function Ib(){var r=window.event;return r&&r!==U5?r.type:null}function Fb(){var r=window.event;return r&&r!==U5?r.timeStamp:-1.1}function fX(r){setTimeout(function(){throw r})}function pX(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function dX(){}function sX(r,g,o,v){EX(r,g,o,v),r[Fo]=v}function pq(r){eb(r,"")}function rY(r,g,o){r.nodeValue=o}function dq(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Fo]||null;if(g!==null){var o=Fr(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function D0(r){return r==="head"}function gY(r,g){r.removeChild(g)}function oY(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function sq(r,g){var o=g,v=0;do{var h=o.nextSibling;if(r.removeChild(o),h&&h.nodeType===8)if(o=h.data,o===K5||o===Ei){if(v===0){r.removeChild(h),rh(g);return}v--}else if(o===z5||o===P1||o===te||o===Bh||o===qe)v++;else if(o===bQ)Nb(r.ownerDocument.documentElement);else if(o===uQ){o=r.ownerDocument.head,Nb(o);for(var b=o.firstChild;b;){var{nextSibling:i,nodeName:P}=b;b[kb]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=i}}else o===wQ&&Nb(r.ownerDocument.body);o=h}while(o);rh(g)}function rt(r,g){var o=r;r=0;do{var v=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),v&&v.nodeType===8)if(o=v.data,o===K5)if(r===0)break;else r--;else o!==z5&&o!==P1&&o!==te&&o!==Bh||r++;o=v}while(o)}function lY(r){rt(r,!0)}function vY(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function eY(r){r.nodeValue=""}function hY(r){rt(r,!1)}function bY(r,g){g=g[iQ],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function wY(r,g){r.nodeValue=g}function m4(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":m4(o),ur(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function uY(r,g,o,v){for(;r.nodeType===1;){var h=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!v&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!v)if(g==="input"&&r.type==="hidden"){Hg(h.name,"name");var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;else if(!r[kb])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(b!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=ul(r.nextSibling),r===null)break}return null}function iY(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=ul(r.nextSibling),r===null)return null}return r}function gt(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=ul(r.nextSibling),r===null)return null}return r}function L4(r){return r.data===P1||r.data===te}function I4(r){return r.data===Bh||r.data===P1&&r.ownerDocument.readyState!==_M}function nY(r,g){var o=r.ownerDocument;if(r.data===te)r._reactRetry=g;else if(r.data!==P1||o.readyState!==_M)g();else{var v=function(){g(),o.removeEventListener("DOMContentLoaded",v)};o.addEventListener("DOMContentLoaded",v),r._reactRetry=v}}function ul(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===z5||g===Bh||g===P1||g===te||g===qe||g===w8||g===VM)break;if(g===K5||g===Ei)return null}}return r}function ot(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},v=r.attributes,h=0;h<v.length;h++){var b=v[h];o[Vq(b.name)]=b.name.toLowerCase()==="style"?z4(r):b.value}return{type:g,props:o}}return r.nodeType===8?r.data===qe?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function lt(r,g,o){return o===null||o[hQ]!==!0?(r.nodeValue===g?r=null:(g=k0(g),r=k0(r.nodeValue)===g?null:r.nodeValue),r):null}function F4(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===K5||o===Ei){if(g===0)return ul(r.nextSibling);g--}else o!==z5&&o!==Bh&&o!==P1&&o!==te&&o!==qe||g++}r=r.nextSibling}return null}function vt(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===z5||o===Bh||o===P1||o===te||o===qe){if(g===0)return r;g--}else o!==K5&&o!==Ei||g++}r=r.previousSibling}return null}function PY(r){rh(r)}function HY(r){rh(r)}function OY(r){rh(r)}function et(r,g,o,v,h){switch(h&&V2(r,v.ancestorInfo),g=Tu(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function qY(r,g,o,v){if(!o[E0]&&Fr(o)){var h=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",h,h,h)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(h=o.attributes;h.length;)o.removeAttributeNode(h[0]);to(o,r,g),o[Ao]=v,o[Fo]=g}function Nb(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);ur(r)}function Su(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function ht(r,g,o){var v=xh;if(v&&typeof g==="string"&&g){var h=Jl(g);h='link[rel="'+r+'"][href="'+h+'"]',typeof o==="string"&&(h+='[crossorigin="'+o+'"]'),fM.has(h)||(fM.add(h),r={rel:r,crossOrigin:o,href:g},v.querySelector(h)===null&&(g=v.createElement("link"),to(g,"link",r),Jr(g),v.head.appendChild(g)))}}function bt(r,g,o,v){var h=(h=_0.current)?Su(h):null;if(!h)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=de(o.href),g=lg(h).hoistableStyles,v=g.get(o),v||(v={type:"style",instance:null,count:0,state:null},g.set(o,v)),v):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=de(o.href);var b=lg(h).hoistableStyles,i=b.get(r);if(!i&&(h=h.ownerDocument||h,i={type:"stylesheet",instance:null,count:0,state:{loading:Me,preload:null}},b.set(r,i),(b=h.querySelector(Bb(r)))&&!b._p&&(i.instance=b,i.state.loading=$5|Zl),!xl.has(r))){var P={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};xl.set(r,P),b||tY(h,r,P,i.state)}if(g&&v===null)throw o=`

  - `+ku(g)+`
  + `+ku(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return i}if(g&&v!==null)throw o=`

  - `+ku(g)+`
  + `+ku(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=se(o),g=lg(h).hoistableScripts,v=g.get(o),v||(v={type:"script",instance:null,count:0,state:null},g.set(o,v)),v):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function ku(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Vl.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Vl.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Vl.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function de(r){return'href="'+Jl(r)+'"'}function Bb(r){return'link[rel="stylesheet"]['+r+"]"}function wt(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function tY(r,g,o,v){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?v.loading=$5:(g=r.createElement("link"),v.preload=g,g.addEventListener("load",function(){return v.loading|=$5}),g.addEventListener("error",function(){return v.loading|=aM}),to(g,"link",o),Jr(g),r.head.appendChild(g))}function se(r){return'[src="'+Jl(r)+'"]'}function Zb(r){return"script[async]"+r}function ut(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var v=r.querySelector('style[data-href~="'+Jl(o.href)+'"]');if(v)return g.instance=v,Jr(v),v;var h=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return v=(r.ownerDocument||r).createElement("style"),Jr(v),to(v,"style",h),Du(v,o.precedence,r),g.instance=v;case"stylesheet":h=de(o.href);var b=r.querySelector(Bb(h));if(b)return g.state.loading|=Zl,g.instance=b,Jr(b),b;v=wt(o),(h=xl.get(h))&&N4(v,h),b=(r.ownerDocument||r).createElement("link"),Jr(b);var i=b;return i._p=new Promise(function(P,t){i.onload=P,i.onerror=t}),to(b,"link",v),g.state.loading|=Zl,Du(b,o.precedence,r),g.instance=b;case"script":if(b=se(o.src),h=r.querySelector(Zb(b)))return g.instance=h,Jr(h),h;if(v=o,h=xl.get(b))v=cr({},o),B4(v,h);return r=r.ownerDocument||r,h=r.createElement("script"),Jr(h),to(h,"link",v),r.head.appendChild(h),g.instance=h;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Zl)===Me&&(v=g.instance,g.state.loading|=Zl,Du(v,o.precedence,r));return g.instance}function Du(r,g,o){for(var v=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=v.length?v[v.length-1]:null,b=h,i=0;i<v.length;i++){var P=v[i];if(P.dataset.precedence===g)b=P;else if(b!==h)break}b?b.parentNode.insertBefore(r,b.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function N4(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function B4(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function it(r,g,o){if(ai===null){var v=new Map,h=ai=new Map;h.set(o,v)}else h=ai,v=h.get(o),v||(v=new Map,h.set(o,v));if(v.has(r))return v;v.set(r,null),o=o.getElementsByTagName(r);for(h=0;h<o.length;h++){var b=o[h];if(!(b[kb]||b[Ao]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==hh){var i=b.getAttribute(g)||"";i=r+i;var P=v.get(i);P?P.push(b):v.set(i,[b])}}return v}function nt(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function AY(r,g,o){var v=!o.ancestorInfo.containerTagInScope;if(o.context===Zh||g.itemProp!=null)return!v||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){v&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:h,disabled:b}=g;o=[],g.onLoad&&o.push("`onLoad`"),h&&o.push("`onError`"),b!=null&&o.push("`disabled`"),h=cX(o,"and"),h+=o.length===1?" prop":" props",b=o.length===1?"an "+h:"the "+h,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,b,h)}v&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&v&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){v&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":v&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function Pt(r){return r.type==="stylesheet"&&(r.state.loading&jM)===Me?!1:!0}function MY(r,g,o,v){if(o.type==="stylesheet"&&(typeof v.media!=="string"||matchMedia(v.media).matches!==!1)&&(o.state.loading&Zl)===Me){if(o.instance===null){var h=de(v.href),b=g.querySelector(Bb(h));if(b){g=b._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=Vu.bind(r),g.then(r,r)),o.state.loading|=Zl,o.instance=b,Jr(b);return}b=g.ownerDocument||g,v=wt(v),(h=xl.get(h))&&N4(v,h),b=b.createElement("link"),Jr(b);var i=b;i._p=new Promise(function(P,t){i.onload=P,i.onerror=t}),to(b,"link",v),o.instance=b}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&jM)===Me&&(r.count++,o=Vu.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function WY(r,g){return r.stylesheets&&r.count===0&&_u(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var v=setTimeout(function(){if(r.stylesheets&&_u(r,r.stylesheets),r.unsuspend){var b=r.unsuspend;r.unsuspend=null,b()}},HQ+g);0<r.imgBytes&&H8===0&&(H8=125*aX()*qQ);var h=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&_u(r,r.stylesheets),r.unsuspend)){var b=r.unsuspend;r.unsuspend=null,b()}},(r.imgBytes>H8?50:OQ)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(v),clearTimeout(h)}}:null}function Vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function _u(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,ji=new Map,g.forEach(RY,r),ji=null,Vu.call(r))}function RY(r,g){if(!(g.state.loading&Zl)){var o=ji.get(r);if(o)var v=o.get(O8);else{o=new Map,ji.set(r,o);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var i=h[b];if(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")o.set(i.dataset.precedence,i),v=i}v&&o.set(O8,v)}h=g.instance,i=h.getAttribute("data-precedence"),b=o.get(i)||v,b===v&&o.set(O8,h),o.set(i,h),this.count++,v=Vu.bind(this),h.addEventListener("load",v),h.addEventListener("error",v),b?b.parentNode.insertBefore(h,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),g.state.loading|=Zl}}function GY(r,g,o,v,h,b,i,P,t){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Ae,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=v,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=t,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function Ht(r,g,o,v,h,b,i,P,t,M,$,m){return r=new GY(r,g,o,i,t,M,$,m,P),g=SJ,b===!0&&(g|=Ko|yl),g|=kr,b=Y(3,null,null,g),r.current=b,b.stateNode=r,g=wn(),_1(g),r.pooledCache=g,_1(g),b.memoizedState={element:v,isDehydrated:o,cache:g},On(b),r}function Ot(r){if(!r)return f0;return r=f0,r}function Z4(r,g,o,v,h,b){if(zo&&typeof zo.onScheduleFiberRoot==="function")try{zo.onScheduleFiberRoot(vh,v,o)}catch(i){zv||(zv=!0,console.error("React instrumentation encountered an error: %o",i))}h=Ot(h),v.context===null?v.context=h:v.pendingContext=h,Qv&&nl!==null&&!rW&&(rW=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,x(nl)||"Unknown")),v=B0(g),v.payload={element:o},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),v.callback=b),o=Z0(r,v,g),o!==null&&(iv(g,"root.render()",null),Bg(o,r,g),tb(o,r,g))}function qt(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function x4(r,g){qt(r,g),(r=r.alternate)&&qt(r,g)}function tt(r){if(r.tag===13||r.tag===31){var g=Qo(r,67108864);g!==null&&Bg(g,r,67108864),x4(r,67108864)}}function At(r){if(r.tag===13||r.tag===31){var g=wl(r);g=B1(g);var o=Qo(r,g);o!==null&&Bg(o,r,g),x4(r,g)}}function XY(){return nl}function YY(r,g,o,v){var h=C.T;C.T=null;var b=wg.p;try{wg.p=Pl,C4(r,g,o,v)}finally{wg.p=b,C.T=h}}function JY(r,g,o,v){var h=C.T;C.T=null;var b=wg.p;try{wg.p=_l,C4(r,g,o,v)}finally{wg.p=b,C.T=h}}function C4(r,g,o,v){if(pi){var h=T4(v);if(h===null)Y4(r,g,v,di,o),Wt(r,v);else if(QY(h,r,g,o,v))v.stopPropagation();else if(Wt(r,v),g&4&&-1<AQ.indexOf(r)){for(;h!==null;){var b=Fr(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var i=hv(b.pendingLanes);if(i!==0){var P=b;P.pendingLanes|=2;for(P.entangledLanes|=2;i;){var t=1<<31-Io(i);P.entanglements[1]|=t,i&=~t}Gv(b),(og&(eo|tl))===io&&(Ni=bo()+UM,mb(0,!1))}}break;case 31:case 13:P=Qo(b,2),P!==null&&Bg(P,b,2),je(),x4(b,2)}if(b=T4(v),b===null&&Y4(r,g,v,di,o),b===h)break;h=b}h!==null&&v.stopPropagation()}else Y4(r,g,v,null,o)}}function T4(r){return r=_2(r),S4(r)}function S4(r){if(di=null,r=Mr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=nr(g),r!==null)return r;r=null}else if(o===31){if(r=vr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return di=r,null}function Mt(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Pl;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _l;case"message":switch(NY()){case s4:return Pl;case r6:return _l;case lh:case BY:return Uv;case g6:return ri;default:return Uv}default:return Uv}}function Wt(r,g){switch(r){case"focusin":case"focusout":H1=null;break;case"dragenter":case"dragleave":O1=null;break;case"mouseover":case"mouseout":q1=null;break;case"pointerover":case"pointerout":L5.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":I5.delete(g.pointerId)}}function xb(r,g,o,v,h,b){if(r===null||r.nativeEvent!==b)return r={blockedOn:g,domEventName:o,eventSystemFlags:v,nativeEvent:b,targetContainers:[h]},g!==null&&(g=Fr(g),g!==null&&tt(g)),r;return r.eventSystemFlags|=v,g=r.targetContainers,h!==null&&g.indexOf(h)===-1&&g.push(h),r}function QY(r,g,o,v,h){switch(g){case"focusin":return H1=xb(H1,r,g,o,v,h),!0;case"dragenter":return O1=xb(O1,r,g,o,v,h),!0;case"mouseover":return q1=xb(q1,r,g,o,v,h),!0;case"pointerover":var b=h.pointerId;return L5.set(b,xb(L5.get(b)||null,r,g,o,v,h)),!0;case"gotpointercapture":return b=h.pointerId,I5.set(b,xb(I5.get(b)||null,r,g,o,v,h)),!0}return!1}function Rt(r){var g=Mr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=nr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){At(o)});return}}else if(g===31){if(g=vr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){At(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yu(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=T4(r.nativeEvent);if(o===null){o=r.nativeEvent;var v=new o.constructor(o.type,o),h=v;Db!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Db=h,o.target.dispatchEvent(v),Db===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Db=null}else return g=Fr(o),g!==null&&tt(g),r.blockedOn=o,!1;g.shift()}return!0}function Gt(r,g,o){yu(r)&&o.delete(g)}function zY(){q8=!1,H1!==null&&yu(H1)&&(H1=null),O1!==null&&yu(O1)&&(O1=null),q1!==null&&yu(q1)&&(q1=null),L5.forEach(Gt),I5.forEach(Gt)}function Eu(r,g){r.blockedOn===g&&(r.blockedOn=null,q8||(q8=!0,vg.unstable_scheduleCallback(vg.unstable_NormalPriority,zY)))}function Xt(r){si!==r&&(si=r,vg.unstable_scheduleCallback(vg.unstable_NormalPriority,function(){si===r&&(si=null);for(var g=0;g<r.length;g+=3){var o=r[g],v=r[g+1],h=r[g+2];if(typeof v!=="function")if(S4(v||o)===null)continue;else break;var b=Fr(o);b!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:h,method:o.method,action:v},Object.freeze(o),Sn(b,o,v,h))}}))}function rh(r){function g(t){return Eu(t,r)}H1!==null&&Eu(H1,r),O1!==null&&Eu(O1,r),q1!==null&&Eu(q1,r),L5.forEach(g),I5.forEach(g);for(var o=0;o<t1.length;o++){var v=t1[o];v.blockedOn===r&&(v.blockedOn=null)}for(;0<t1.length&&(o=t1[0],o.blockedOn===null);)Rt(o),o.blockedOn===null&&t1.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(v=0;v<o.length;v+=3){var h=o[v],b=o[v+1],i=h[Fo]||null;if(typeof b==="function")i||Xt(o);else if(i){var P=null;if(b&&b.hasAttribute("formAction")){if(h=b,i=b[Fo]||null)P=i.formAction;else if(S4(h)!==null)continue}else P=i.action;typeof P==="function"?o[v+1]=P:(o.splice(v,3),v-=3),Xt(o)}}}function Yt(){function r(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(i){return h=i})},focusReset:"manual",scroll:"manual"})}function g(){h!==null&&(h(),h=null),v||setTimeout(o,20)}function o(){if(!v&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var v=!1,h=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){v=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),h!==null&&(h(),h=null)}}}function k4(r){this._internalRoot=r}function cu(r){this._internalRoot=r}function Jt(r){r[E0]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,KY=Symbol.for("react.element"),Yv=Symbol.for("react.transitional.element"),gh=Symbol.for("react.portal"),oh=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),D4=Symbol.for("react.profiler"),V4=Symbol.for("react.consumer"),Jv=Symbol.for("react.context"),Cb=Symbol.for("react.forward_ref"),_4=Symbol.for("react.suspense"),y4=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),il=Symbol.for("react.lazy"),E4=Symbol.for("react.activity"),UY=Symbol.for("react.memo_cache_sentinel"),Qt=Symbol.iterator,$Y=Symbol.for("react.client.reference"),lo=Array.isArray,C=Th.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wg=M8.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mY=Object.freeze({pending:!1,data:null,method:null,action:null}),c4=[],a4=[],sv=-1,V0=Wr(null),Tb=Wr(null),_0=Wr(null),fu=Wr(null),Sb=0,zt,Kt,Ut,$t,mt,Lt,It;V.__reactDisabledLog=!0;var j4,Ft,f4=!1,p4=new(typeof WeakMap==="function"?WeakMap:Map),nl=null,Qv=!1,Vl=Object.prototype.hasOwnProperty,d4=vg.unstable_scheduleCallback,LY=vg.unstable_cancelCallback,IY=vg.unstable_shouldYield,FY=vg.unstable_requestPaint,bo=vg.unstable_now,NY=vg.unstable_getCurrentPriorityLevel,s4=vg.unstable_ImmediatePriority,r6=vg.unstable_UserBlockingPriority,lh=vg.unstable_NormalPriority,BY=vg.unstable_LowPriority,g6=vg.unstable_IdlePriority,ZY=vg.log,xY=vg.unstable_setDisableYieldValue,vh=null,zo=null,zv=!1,Kv=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Io=Math.clz32?Math.clz32:Cw,CY=Math.log,TY=Math.LN2,pu=256,du=262144,su=4194304,Pl=2,_l=8,Uv=32,ri=268435456,y0=Math.random().toString(36).slice(2),Ao="__reactFiber$"+y0,Fo="__reactProps$"+y0,E0="__reactContainer$"+y0,o6="__reactEvents$"+y0,SY="__reactListeners$"+y0,kY="__reactHandles$"+y0,Nt="__reactResources$"+y0,kb="__reactMarker$"+y0,Bt=new Set,p1={},l6={},DY={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},VY=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zt={},xt={},_Y=/[\n"\\]/g,Ct=!1,Tt=!1,St=!1,kt=!1,Dt=!1,Vt=!1,_t=["value","defaultValue"],yt=!1,Et=/["'&<>\n\t]|^\s|\s$/,yY="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),ct="applet caption html table td th marquee object template foreignObject desc title".split(" "),EY=ct.concat(["button"]),cY="dd dt li option optgroup p rp rt".split(" "),at={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},gi={},v6={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},jt=/([A-Z])/g,ft=/^ms-/,aY=/^(?:webkit|moz|o)[A-Z]/,jY=/^-ms-/,fY=/-(.)/g,pt=/;\s*$/,eh={},e6={},dt=!1,st=!1,rA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),oi="http://www.w3.org/1998/Math/MathML",hh="http://www.w3.org/2000/svg",pY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),li={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gA={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},bh={},dY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oA=!1,No={},lA=/^on./,rJ=/^on[^A-Z]/,gJ=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oJ=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lJ=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Db=null,wh=null,uh=null,h6=!1,$v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b6=!1;if($v)try{var Vb={};Object.defineProperty(Vb,"passive",{get:function(){b6=!0}}),window.addEventListener("test",Vb,Vb),window.removeEventListener("test",Vb,Vb)}catch(r){b6=!1}var c0=null,w6=null,vi=null,d1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=yo(d1),_b=cr({},d1,{view:0,detail:0}),vJ=yo(_b),u6,i6,yb,hi=cr({},_b,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:y2,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==yb&&(yb&&r.type==="mousemove"?(u6=r.screenX-yb.screenX,i6=r.screenY-yb.screenY):i6=u6=0,yb=r),u6},movementY:function(r){return"movementY"in r?r.movementY:i6}}),vA=yo(hi),eJ=cr({},hi,{dataTransfer:0}),hJ=yo(eJ),bJ=cr({},_b,{relatedTarget:0}),n6=yo(bJ),wJ=cr({},d1,{animationName:0,elapsedTime:0,pseudoElement:0}),uJ=yo(wJ),iJ=cr({},d1,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nJ=yo(iJ),PJ=cr({},d1,{data:0}),eA=yo(PJ),HJ=eA,OJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qJ={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tJ={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},AJ=cr({},_b,{key:function(r){if(r.key){var g=OJ[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=yw(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qJ[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:y2,charCode:function(r){return r.type==="keypress"?yw(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?yw(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),MJ=yo(AJ),WJ=cr({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hA=yo(WJ),RJ=cr({},_b,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:y2}),GJ=yo(RJ),XJ=cr({},d1,{propertyName:0,elapsedTime:0,pseudoElement:0}),YJ=yo(XJ),JJ=cr({},hi,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),QJ=yo(JJ),zJ=cr({},d1,{newState:0,oldState:0}),KJ=yo(zJ),UJ=[9,13,27,32],bA=229,P6=$v&&"CompositionEvent"in window,Eb=null;$v&&"documentMode"in document&&(Eb=document.documentMode);var $J=$v&&"TextEvent"in window&&!Eb,wA=$v&&(!P6||Eb&&8<Eb&&11>=Eb),uA=32,iA=String.fromCharCode(uA),nA=!1,ih=!1,mJ={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},cb=null,ab=null,PA=!1;$v&&(PA=pG("input")&&(!document.documentMode||9<document.documentMode));var Bo=typeof Object.is==="function"?Object.is:lX,LJ=$v&&"documentMode"in document&&11>=document.documentMode,nh=null,H6=null,jb=null,O6=!1,Ph={animationend:x1("Animation","AnimationEnd"),animationiteration:x1("Animation","AnimationIteration"),animationstart:x1("Animation","AnimationStart"),transitionrun:x1("Transition","TransitionRun"),transitionstart:x1("Transition","TransitionStart"),transitioncancel:x1("Transition","TransitionCancel"),transitionend:x1("Transition","TransitionEnd")},q6={},HA={};$v&&(HA=document.createElement("div").style,("AnimationEvent"in window)||(delete Ph.animationend.animation,delete Ph.animationiteration.animation,delete Ph.animationstart.animation),("TransitionEvent"in window)||delete Ph.transitionend.transition);var OA=C1("animationend"),qA=C1("animationiteration"),tA=C1("animationstart"),IJ=C1("transitionrun"),FJ=C1("transitionstart"),NJ=C1("transitioncancel"),AA=C1("transitionend"),MA=new Map,t6="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");t6.push("scrollEnd");var WA=0;if(typeof performance==="object"&&typeof performance.now==="function")var BJ=performance,RA=function(){return BJ.now()};else{var ZJ=Date;RA=function(){return ZJ.now()}}var A6=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},xJ="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bi=0,M6=1,W6=2,R6=3,wi="– ",ui="+ ",GA="  ",Qg=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",zl="Components ⚛",ar="Scheduler ⚛",jr="Blocking",a0=!1,r0={color:"primary",properties:null,tooltipText:"",track:zl},j0={start:-0,end:-0,detail:{devtools:r0}},CJ=["Changed Props",""],XA="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",TJ=["Changed Props",XA],fb=1,g0=2,Kl=[],Hh=0,G6=0,f0={};Object.freeze(f0);var Ul=null,Oh=null,Ur=0,SJ=1,kr=2,Ko=8,yl=16,kJ=32,YA=!1;try{var JA=Object.preventExtensions({})}catch(r){YA=!0}var X6=new WeakMap,qh=[],th=0,ii=null,pb=0,$l=[],ml=0,s1=null,o0=1,l0="",Mo=null,zg=null,pr=!1,mv=!1,Hl=null,p0=null,Ll=!1,Y6=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),J6=Wr(null),Q6=Wr(null),QA={},ni=null,Ah=null,Mh=!1,DJ=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,v){r.push(v)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},VJ=vg.unstable_scheduleCallback,_J=vg.unstable_NormalPriority,jg={$$typeof:Jv,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=vg.unstable_now,Pi=console.createTask?console.createTask:function(){return null},db=1,Hi=2,wo=-0,d0=-0,v0=-0,e0=null,Zo=-1.1,re=-0,Ig=-0,Qr=-1.1,Kr=-1.1,mg=null,Zg=!1,s0=-0,Lv=-1.1,sb=null,r1=0,z6=null,K6=null,ge=-1.1,r5=null,Wh=-1.1,Oi=-1.1,Iv=-0,h0=-1.1,Il=-1.1,U6=0,g5=null,zA=null,KA=null,g1=-1.1,oe=null,o1=-1.1,qi=-1.1,UA=-0,$A=-0,ti=0,b0=null,mA=0,o5=-1.1,Ai=!1,Mi=!1,l5=null,$6=0,le=0,Rh=null,LA=C.S;C.S=function(r,g){if(zM=bo(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>h0&&0>Il){h0=fg();var o=Fb(),v=Ib();if(o!==o1||v!==oe)o1=-1.1;g1=o,oe=v}iX(r,g)}LA!==null&&LA(r,g)};var ve=Wr(null),El={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},v5=[],e5=[],h5=[],b5=[],w5=[],u5=[],ee=new Set;El.recordUnsafeLifecycleWarnings=function(r,g){ee.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&v5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillMount==="function"&&e5.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&h5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&b5.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&w5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillUpdate==="function"&&u5.push(r))},El.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<v5.length&&(v5.forEach(function(P){r.add(x(P)||"Component"),ee.add(P.type)}),v5=[]);var g=new Set;0<e5.length&&(e5.forEach(function(P){g.add(x(P)||"Component"),ee.add(P.type)}),e5=[]);var o=new Set;0<h5.length&&(h5.forEach(function(P){o.add(x(P)||"Component"),ee.add(P.type)}),h5=[]);var v=new Set;0<b5.length&&(b5.forEach(function(P){v.add(x(P)||"Component"),ee.add(P.type)}),b5=[]);var h=new Set;0<w5.length&&(w5.forEach(function(P){h.add(x(P)||"Component"),ee.add(P.type)}),w5=[]);var b=new Set;if(0<u5.length&&(u5.forEach(function(P){b.add(x(P)||"Component"),ee.add(P.type)}),u5=[]),0<g.size){var i=A(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,i)}0<v.size&&(i=A(v),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,i)),0<b.size&&(i=A(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,i)),0<r.size&&(i=A(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<o.size&&(i=A(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<h.size&&(i=A(h),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i))};var Wi=new Map,IA=new Set;El.recordLegacyContextWarning=function(r,g){var o=null;for(var v=r;v!==null;)v.mode&Ko&&(o=v),v=v.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!IA.has(r.type)&&(v=Wi.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(v===void 0&&(v=[],Wi.set(o,v)),v.push(r))},El.flushLegacyContextWarning=function(){Wi.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(h){o.add(x(h)||"Component"),IA.add(h.type)});var v=A(o);wr(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,v)})}})},El.discardPendingWarnings=function(){v5=[],e5=[],h5=[],b5=[],w5=[],u5=[],Wi=new Map};var FA={react_stack_bottom_frame:function(r,g,o){var v=Qv;Qv=!0;try{return r(g,o)}finally{Qv=v}}},m6=FA.react_stack_bottom_frame.bind(FA),NA={react_stack_bottom_frame:function(r){var g=Qv;Qv=!0;try{return r.render()}finally{Qv=g}}},BA=NA.react_stack_bottom_frame.bind(NA),ZA={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){bg(r,r.return,o)}}},L6=ZA.react_stack_bottom_frame.bind(ZA),xA={react_stack_bottom_frame:function(r,g,o,v,h){try{g.componentDidUpdate(o,v,h)}catch(b){bg(r,r.return,b)}}},CA=xA.react_stack_bottom_frame.bind(xA),TA={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},yJ=TA.react_stack_bottom_frame.bind(TA),SA={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(v){bg(r,g,v)}}},kA=SA.react_stack_bottom_frame.bind(SA),DA={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},EJ=DA.react_stack_bottom_frame.bind(DA),VA={react_stack_bottom_frame:function(r,g,o){try{o()}catch(v){bg(r,g,v)}}},cJ=VA.react_stack_bottom_frame.bind(VA),_A={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},aJ=_A.react_stack_bottom_frame.bind(_A),Gh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),I6=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Ri=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Gi={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},he=null,i5=!1,Xh=null,n5=0,Dr=null,F6,yA=F6=!1,EA={},cA={},aA={};G=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var v=x(r),h=v||"null";if(!EA[h]){EA[h]=!0,o=o._owner,r=r._debugOwner;var b="";r&&typeof r.tag==="number"&&(h=x(r))&&(b=`

Check the render method of \``+h+"`."),b||v&&(b=`

Check the top-level render call using <`+v+">.");var i="";o!=null&&r!==o&&(v=null,typeof o.tag==="number"?v=x(o):typeof o.name==="string"&&(v=o.name),v&&(i=" It was passed a child from "+v+".")),wr(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,i)})}}};var be=SH(!0),jA=SH(!1),fA=0,pA=1,dA=2,N6=3,l1=!1,sA=!1,B6=null,Z6=!1,Yh=Wr(null),Xi=Wr(0),Ol=Wr(null),Fl=null,Jh=1,P5=2,Vg=Wr(0),Yi=0,Nl=1,xo=2,ql=4,Co=8,Qh,rM=new Set,gM=new Set,x6=new Set,oM=new Set,w0=0,$r=null,Ag=null,pg=null,Ji=!1,zh=!1,we=!1,Qi=0,H5=0,u0=null,jJ=0,fJ=25,Z=null,Bl=null,i0=-1,O5=!1,q5={readContext:$g,use:T0,useCallback:Tg,useContext:Tg,useEffect:Tg,useImperativeHandle:Tg,useLayoutEffect:Tg,useInsertionEffect:Tg,useMemo:Tg,useReducer:Tg,useRef:Tg,useState:Tg,useDebugValue:Tg,useDeferredValue:Tg,useTransition:Tg,useSyncExternalStore:Tg,useId:Tg,useHostTransitionStatus:Tg,useFormState:Tg,useActionState:Tg,useOptimistic:Tg,useMemoCache:Tg,useCacheRefresh:Tg};q5.useEffectEvent=Tg;var C6=null,lM=null,T6=null,vM=null,Fv=null,cl=null,zi=null;C6={readContext:function(r){return $g(r)},use:T0,useCallback:function(r,g){return Z="useCallback",Er(),De(g),Zn(r,g)},useContext:function(r){return Z="useContext",Er(),$g(r)},useEffect:function(r,g){return Z="useEffect",Er(),De(g),Wu(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",Er(),De(o),Bn(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",Er(),De(g),E1(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",Er(),De(g),Nn(r,g)},useMemo:function(r,g){Z="useMemo",Er(),De(g);var o=C.H;C.H=Fv;try{return xn(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",Er();var v=C.H;C.H=Fv;try{return Qn(r,g,o)}finally{C.H=v}},useRef:function(r){return Z="useRef",Er(),In(r)},useState:function(r){Z="useState",Er();var g=C.H;C.H=Fv;try{return $n(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",Er()},useDeferredValue:function(r,g){return Z="useDeferredValue",Er(),Cn(r,g)},useTransition:function(){return Z="useTransition",Er(),kn()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",Er(),Kn(r,g,o)},useId:function(){return Z="useId",Er(),Dn()},useFormState:function(r,g){return Z="useFormState",Er(),Ou(),_e(r,g)},useActionState:function(r,g){return Z="useActionState",Er(),_e(r,g)},useOptimistic:function(r){return Z="useOptimistic",Er(),mn(r)},useHostTransitionStatus:c1,useMemoCache:y1,useCacheRefresh:function(){return Z="useCacheRefresh",Er(),Vn()},useEffectEvent:function(r){return Z="useEffectEvent",Er(),Fn(r)}},lM={readContext:function(r){return $g(r)},use:T0,useCallback:function(r,g){return Z="useCallback",d(),Zn(r,g)},useContext:function(r){return Z="useContext",d(),$g(r)},useEffect:function(r,g){return Z="useEffect",d(),Wu(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Bn(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",d(),E1(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),Nn(r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=Fv;try{return xn(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var v=C.H;C.H=Fv;try{return Qn(r,g,o)}finally{C.H=v}},useRef:function(r){return Z="useRef",d(),In(r)},useState:function(r){Z="useState",d();var g=C.H;C.H=Fv;try{return $n(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),Cn(r,g)},useTransition:function(){return Z="useTransition",d(),kn()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),Kn(r,g,o)},useId:function(){return Z="useId",d(),Dn()},useActionState:function(r,g){return Z="useActionState",d(),_e(r,g)},useFormState:function(r,g){return Z="useFormState",d(),Ou(),_e(r,g)},useOptimistic:function(r){return Z="useOptimistic",d(),mn(r)},useHostTransitionStatus:c1,useMemoCache:y1,useCacheRefresh:function(){return Z="useCacheRefresh",d(),Vn()},useEffectEvent:function(r){return Z="useEffectEvent",d(),Fn(r)}},T6={readContext:function(r){return $g(r)},use:T0,useCallback:function(r,g){return Z="useCallback",d(),Xu(r,g)},useContext:function(r){return Z="useContext",d(),$g(r)},useEffect:function(r,g){Z="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),Eo(4,ql,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=cl;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var v=C.H;C.H=cl;try{return Ve(r,g,o)}finally{C.H=v}},useRef:function(){return Z="useRef",d(),ig().memoizedState},useState:function(){Z="useState",d();var r=C.H;C.H=cl;try{return Ve(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),wO(r,g)},useTransition:function(){return Z="useTransition",d(),OO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),tu(r,g,o)},useId:function(){return Z="useId",d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",d(),Ou(),Au(r)},useActionState:function(r){return Z="useActionState",d(),Au(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),dH(r,g)},useHostTransitionStatus:c1,useMemoCache:y1,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Ru(r)}},vM={readContext:function(r){return $g(r)},use:T0,useCallback:function(r,g){return Z="useCallback",d(),Xu(r,g)},useContext:function(r){return Z="useContext",d(),$g(r)},useEffect:function(r,g){Z="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),Eo(4,ql,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=zi;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var v=C.H;C.H=zi;try{return Rb(r,g,o)}finally{C.H=v}},useRef:function(){return Z="useRef",d(),ig().memoizedState},useState:function(){Z="useState",d();var r=C.H;C.H=zi;try{return Rb(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),uO(r,g)},useTransition:function(){return Z="useTransition",d(),qO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),tu(r,g,o)},useId:function(){return Z="useId",d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",d(),Ou(),Mu(r)},useActionState:function(r){return Z="useActionState",d(),Mu(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),rO(r,g)},useHostTransitionStatus:c1,useMemoCache:y1,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Ru(r)}},Fv={readContext:function(r){return R(),$g(r)},use:function(r){return q(),T0(r)},useCallback:function(r,g){return Z="useCallback",q(),Er(),Zn(r,g)},useContext:function(r){return Z="useContext",q(),Er(),$g(r)},useEffect:function(r,g){return Z="useEffect",q(),Er(),Wu(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",q(),Er(),Bn(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",q(),Er(),E1(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",q(),Er(),Nn(r,g)},useMemo:function(r,g){Z="useMemo",q(),Er();var o=C.H;C.H=Fv;try{return xn(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",q(),Er();var v=C.H;C.H=Fv;try{return Qn(r,g,o)}finally{C.H=v}},useRef:function(r){return Z="useRef",q(),Er(),In(r)},useState:function(r){Z="useState",q(),Er();var g=C.H;C.H=Fv;try{return $n(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",q(),Er()},useDeferredValue:function(r,g){return Z="useDeferredValue",q(),Er(),Cn(r,g)},useTransition:function(){return Z="useTransition",q(),Er(),kn()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",q(),Er(),Kn(r,g,o)},useId:function(){return Z="useId",q(),Er(),Dn()},useFormState:function(r,g){return Z="useFormState",q(),Er(),_e(r,g)},useActionState:function(r,g){return Z="useActionState",q(),Er(),_e(r,g)},useOptimistic:function(r){return Z="useOptimistic",q(),Er(),mn(r)},useMemoCache:function(r){return q(),y1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return Z="useCacheRefresh",Er(),Vn()},useEffectEvent:function(r){return Z="useEffectEvent",q(),Er(),Fn(r)}},cl={readContext:function(r){return R(),$g(r)},use:function(r){return q(),T0(r)},useCallback:function(r,g){return Z="useCallback",q(),d(),Xu(r,g)},useContext:function(r){return Z="useContext",q(),d(),$g(r)},useEffect:function(r,g){Z="useEffect",q(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",q(),d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",q(),d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",q(),d(),Eo(4,ql,r,g)},useMemo:function(r,g){Z="useMemo",q(),d();var o=C.H;C.H=cl;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",q(),d();var v=C.H;C.H=cl;try{return Ve(r,g,o)}finally{C.H=v}},useRef:function(){return Z="useRef",q(),d(),ig().memoizedState},useState:function(){Z="useState",q(),d();var r=C.H;C.H=cl;try{return Ve(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",q(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",q(),d(),wO(r,g)},useTransition:function(){return Z="useTransition",q(),d(),OO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",q(),d(),tu(r,g,o)},useId:function(){return Z="useId",q(),d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",q(),d(),Au(r)},useActionState:function(r){return Z="useActionState",q(),d(),Au(r)},useOptimistic:function(r,g){return Z="useOptimistic",q(),d(),dH(r,g)},useMemoCache:function(r){return q(),y1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",q(),d(),Ru(r)}},zi={readContext:function(r){return R(),$g(r)},use:function(r){return q(),T0(r)},useCallback:function(r,g){return Z="useCallback",q(),d(),Xu(r,g)},useContext:function(r){return Z="useContext",q(),d(),$g(r)},useEffect:function(r,g){Z="useEffect",q(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",q(),d(),Gu(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",q(),d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",q(),d(),Eo(4,ql,r,g)},useMemo:function(r,g){Z="useMemo",q(),d();var o=C.H;C.H=cl;try{return Yu(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",q(),d();var v=C.H;C.H=cl;try{return Rb(r,g,o)}finally{C.H=v}},useRef:function(){return Z="useRef",q(),d(),ig().memoizedState},useState:function(){Z="useState",q(),d();var r=C.H;C.H=cl;try{return Rb(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",q(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",q(),d(),uO(r,g)},useTransition:function(){return Z="useTransition",q(),d(),qO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",q(),d(),tu(r,g,o)},useId:function(){return Z="useId",q(),d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",q(),d(),Mu(r)},useActionState:function(r){return Z="useActionState",q(),d(),Mu(r)},useOptimistic:function(r,g){return Z="useOptimistic",q(),d(),rO(r,g)},useMemoCache:function(r){return q(),y1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",q(),d(),Ru(r)}};var eM={},hM=new Set,bM=new Set,wM=new Set,uM=new Set,iM=new Set,nM=new Set,PM=new Set,HM=new Set,OM=new Set,qM=new Set;Object.freeze(eM);var S6={enqueueSetState:function(r,g,o){r=r._reactInternals;var v=wl(r),h=B0(v);h.payload=g,o!==void 0&&o!==null&&(yn(o),h.callback=o),g=Z0(r,h,v),g!==null&&(iv(v,"this.setState()",r),Bg(g,r,v),tb(g,r,v))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var v=wl(r),h=B0(v);h.tag=pA,h.payload=g,o!==void 0&&o!==null&&(yn(o),h.callback=o),g=Z0(r,h,v),g!==null&&(iv(v,"this.replaceState()",r),Bg(g,r,v),tb(g,r,v))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=wl(r),v=B0(o);v.tag=dA,g!==void 0&&g!==null&&(yn(g),v.callback=g),g=Z0(r,v,o),g!==null&&(iv(o,"this.forceUpdate()",r),Bg(g,r,o),tb(g,r,o))}},Kh=null,k6=null,D6=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),dg=!1,tM={},AM={},MM={},WM={},Uh=!1,RM={},Ki={},V6={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},GM=!1,XM=null;XM=new Set;var n0=!1,sg=!1,_6=!1,YM=typeof WeakSet==="function"?WeakSet:Set,uo=null,$h=null,mh=null,ro=null,jo=!1,al=null,vo=!1,t5=8192,pJ={getCacheForType:function(r){var g=$g(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return $g(jg).controller.signal},getOwner:function(){return nl}};if(typeof Symbol==="function"&&Symbol.for){var A5=Symbol.for;A5("selector.component"),A5("selector.has_pseudo_class"),A5("selector.role"),A5("selector.test_id"),A5("selector.text")}var dJ=[],sJ=typeof WeakMap==="function"?WeakMap:Map,io=0,eo=2,tl=4,P0=0,M5=1,ue=2,Ui=3,v1=4,$i=6,JM=5,og=io,Mg=null,yr=null,Vr=0,fo=0,mi=1,ie=2,W5=3,QM=4,y6=5,R5=6,Li=7,E6=8,ne=9,ng=fo,Al=null,e1=!1,Lh=!1,c6=!1,Nv=0,Fg=P0,h1=0,b1=0,a6=0,po=0,Pe=0,G5=null,To=null,Ii=!1,Fi=0,zM=0,KM=300,Ni=1/0,UM=500,X5=null,Sg=null,w1=null,Bi=0,j6=1,f6=2,$M=3,u1=0,mM=1,LM=2,IM=3,FM=4,Zi=5,go=0,i1=null,Ih=null,jl=0,p6=0,d6=-0,s6=null,NM=null,BM=null,fl=Bi,ZM=null,rQ=50,Y5=0,r8=null,g8=!1,xi=!1,gQ=50,He=0,J5=null,Fh=!1,Ci=null,xM=!1,CM=new Set,oQ={},Ti=null,Nh=null,o8=!1,l8=!1,Si=!1,v8=!1,n1=0,e8={};(function(){for(var r=0;r<t6.length;r++){var g=t6[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),Sl(o,"on"+g)}Sl(OA,"onAnimationEnd"),Sl(qA,"onAnimationIteration"),Sl(tA,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(IJ,"onTransitionRun"),Sl(FJ,"onTransitionStart"),Sl(NJ,"onTransitionCancel"),Sl(AA,"onTransitionEnd")})(),gl("onMouseEnter",["mouseout","mouseover"]),gl("onMouseLeave",["mouseout","mouseover"]),gl("onPointerEnter",["pointerout","pointerover"]),gl("onPointerLeave",["pointerout","pointerover"]),Jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Q5="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Q5)),ki="_reactListening"+Math.random().toString(36).slice(2),TM=!1,SM=!1,Di=!1,kM=!1,Vi=!1,_i=!1,DM=!1,yi={},lQ=/\r\n?/g,vQ=/\u0000|\uFFFD/g,Oe="http://www.w3.org/1999/xlink",b8="http://www.w3.org/XML/1998/namespace",eQ="javascript:throw new Error('React form unexpectedly submitted.')",hQ="suppressHydrationWarning",qe="&",Ei="/&",z5="$",K5="/$",P1="$?",te="$~",Bh="$!",bQ="html",wQ="body",uQ="head",w8="F!",VM="F",_M="loading",iQ="style",H0=0,Zh=1,ci=2,u8=null,i8=null,yM={dialog:!0,webview:!0},n8=null,U5=void 0,EM=typeof setTimeout==="function"?setTimeout:void 0,nQ=typeof clearTimeout==="function"?clearTimeout:void 0,Ae=-1,cM=typeof Promise==="function"?Promise:void 0,PQ=typeof queueMicrotask==="function"?queueMicrotask:typeof cM<"u"?function(r){return cM.resolve(null).then(r).catch(fX)}:EM,P8=null,Me=0,$5=1,aM=2,jM=3,Zl=4,xl=new Map,fM=new Set,O0=wg.d;wg.d={f:function(){var r=O0.f(),g=je();return r||g},r:function(r){var g=Fr(r);g!==null&&g.tag===5&&g.type==="form"?HO(g):O0.r(r)},D:function(r){O0.D(r),ht("dns-prefetch",r,null)},C:function(r,g){O0.C(r,g),ht("preconnect",r,g)},L:function(r,g,o){O0.L(r,g,o);var v=xh;if(v&&r&&g){var h='link[rel="preload"][as="'+Jl(g)+'"]';g==="image"?o&&o.imageSrcSet?(h+='[imagesrcset="'+Jl(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(h+='[imagesizes="'+Jl(o.imageSizes)+'"]')):h+='[href="'+Jl(r)+'"]':h+='[href="'+Jl(r)+'"]';var b=h;switch(g){case"style":b=de(r);break;case"script":b=se(r)}xl.has(b)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),xl.set(b,r),v.querySelector(h)!==null||g==="style"&&v.querySelector(Bb(b))||g==="script"&&v.querySelector(Zb(b))||(g=v.createElement("link"),to(g,"link",r),Jr(g),v.head.appendChild(g)))}},m:function(r,g){O0.m(r,g);var o=xh;if(o&&r){var v=g&&typeof g.as==="string"?g.as:"script",h='link[rel="modulepreload"][as="'+Jl(v)+'"][href="'+Jl(r)+'"]',b=h;switch(v){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=se(r)}if(!xl.has(b)&&(r=cr({rel:"modulepreload",href:r},g),xl.set(b,r),o.querySelector(h)===null)){switch(v){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zb(b)))return}v=o.createElement("link"),to(v,"link",r),Jr(v),o.head.appendChild(v)}}},X:function(r,g){O0.X(r,g);var o=xh;if(o&&r){var v=lg(o).hoistableScripts,h=se(r),b=v.get(h);b||(b=o.querySelector(Zb(h)),b||(r=cr({src:r,async:!0},g),(g=xl.get(h))&&B4(r,g),b=o.createElement("script"),Jr(b),to(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},v.set(h,b))}},S:function(r,g,o){O0.S(r,g,o);var v=xh;if(v&&r){var h=lg(v).hoistableStyles,b=de(r);g=g||"default";var i=h.get(b);if(!i){var P={loading:Me,preload:null};if(i=v.querySelector(Bb(b)))P.loading=$5|Zl;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=xl.get(b))&&N4(r,o);var t=i=v.createElement("link");Jr(t),to(t,"link",r),t._p=new Promise(function(M,$){t.onload=M,t.onerror=$}),t.addEventListener("load",function(){P.loading|=$5}),t.addEventListener("error",function(){P.loading|=aM}),P.loading|=Zl,Du(i,g,v)}i={type:"stylesheet",instance:i,count:1,state:P},h.set(b,i)}}},M:function(r,g){O0.M(r,g);var o=xh;if(o&&r){var v=lg(o).hoistableScripts,h=se(r),b=v.get(h);b||(b=o.querySelector(Zb(h)),b||(r=cr({src:r,async:!0,type:"module"},g),(g=xl.get(h))&&B4(r,g),b=o.createElement("script"),Jr(b),to(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},v.set(h,b))}}};var xh=typeof document>"u"?null:document,ai=null,HQ=60000,OQ=800,qQ=500,H8=0,O8=null,ji=null,We=mY,m5={$$typeof:Jv,Provider:null,Consumer:null,_currentValue:We,_currentValue2:We,_threadCount:0},pM="%c%s%c",dM="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",sM="",fi=" ",tQ=Function.prototype.bind,rW=!1,gW=null,oW=null,lW=null,vW=null,eW=null,hW=null,bW=null,wW=null,uW=null,iW=null;gW=function(r,g,o,v){g=l(r,g),g!==null&&(o=e(g.memoizedState,o,0,v),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},oW=function(r,g,o){g=l(r,g),g!==null&&(o=n(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},lW=function(r,g,o,v){g=l(r,g),g!==null&&(o=w(g.memoizedState,o,v),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},vW=function(r,g,o){r.pendingProps=e(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},eW=function(r,g){r.pendingProps=n(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},hW=function(r,g,o){r.pendingProps=w(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},bW=function(r){var g=Qo(r,2);g!==null&&Bg(g,r,2)},wW=function(r){var g=Be(),o=Qo(r,g);o!==null&&Bg(o,r,g)},uW=function(r){O=r},iW=function(r){H=r};var pi=!0,di=null,q8=!1,H1=null,O1=null,q1=null,L5=new Map,I5=new Map,t1=[],AQ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),si=null;if(cu.prototype.render=k4.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):_(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var v=g.current,h=wl(v);Z4(v,h,o,g,null,null)},cu.prototype.unmount=k4.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(eo|tl))!==io&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Z4(r.current,2,null,r,null,null),je(),g[E0]=null}},cu.prototype.unstable_scheduleHydration=function(r){if(r){var g=I();r={blockedOn:null,target:r,priority:g};for(var o=0;o<t1.length&&g!==0&&g<t1[o].priority;o++);t1.splice(o,0,r),o===0&&Rt(r)}},function(){var r=Th.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),wg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(g),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.5"};return r.overrideHookState=gW,r.overrideHookStateDeletePath=oW,r.overrideHookStateRenamePath=lW,r.overrideProps=vW,r.overridePropsDeletePath=eW,r.overridePropsRenamePath=hW,r.scheduleUpdate=bW,r.scheduleRetry=wW,r.setErrorHandler=uW,r.setSuspenseHandler=iW,r.scheduleRefresh=S,r.scheduleRoot=L,r.setRefreshHandler=T,r.getCurrentFiber=XY,Ne(r)}()&&$v&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var nW=window.location.protocol;/^(https?|file):$/.test(nW)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(nW==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}IQ.createRoot=function(r,g){if(!_(r))throw Error("Target container is not a DOM element.");Jt(r);var o=!1,v="",h=GO,b=XO,i=YO;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Yv&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(v=g.identifierPrefix),g.onUncaughtError!==void 0&&(h=g.onUncaughtError),g.onCaughtError!==void 0&&(b=g.onCaughtError),g.onRecoverableError!==void 0&&(i=g.onRecoverableError)),g=Ht(r,1,!1,null,null,o,v,null,h,b,i,Yt),r[E0]=g.current,X4(r),new k4(g)},IQ.hydrateRoot=function(r,g,o){if(!_(r))throw Error("Target container is not a DOM element.");Jt(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var v=!1,h="",b=GO,i=XO,P=YO,t=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(v=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(b=o.onUncaughtError),o.onCaughtError!==void 0&&(i=o.onCaughtError),o.onRecoverableError!==void 0&&(P=o.onRecoverableError),o.formState!==void 0&&(t=o.formState)),g=Ht(r,1,!0,g,o!=null?o:null,v,h,t,b,i,P,Yt),g.context=Ot(null),o=g.current,v=wl(o),v=B1(v),h=B0(v),h.callback=null,Z0(o,h,v),iv(v,"hydrateRoot()",null),o=v,g.current.lanes=o,U0(g,o),Gv(g),r[E0]=g.current,X4(r),new cu(g)},IQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var AW=Re((pI,tW)=>{tW.exports=qW()});var rg=Re((Ez)=>{var Ke=Pr(eg());(function(){function l(V){if(V==null)return null;if(typeof V==="function")return V.$$typeof===x?null:V.displayName||V.name||null;if(typeof V==="string")return V;switch(V){case T:return"Fragment";case rr:return"Profiler";case _:return"StrictMode";case p:return"Suspense";case lr:return"SuspenseList";case j:return"Activity"}if(typeof V==="object")switch(typeof V.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),V.$$typeof){case S:return"Portal";case vr:return V.displayName||"Context";case nr:return(V._context.displayName||"Context")+".Consumer";case a:var F=V.render;return V=V.displayName,V||(V=F.displayName||F.name||"",V=V!==""?"ForwardRef("+V+")":"ForwardRef"),V;case B:return F=V.displayName||null,F!==null?F:l(V.type)||"Memo";case y:F=V._payload,V=V._init;try{return l(V(F))}catch(or){}}return null}function e(V){return""+V}function w(V){try{e(V);var F=!1}catch(Ar){F=!0}if(F){F=console;var or=F.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&V[Symbol.toStringTag]||V.constructor.name||"Object";return or.call(F,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),e(V)}}function u(V){if(V===T)return"<>";if(typeof V==="object"&&V!==null&&V.$$typeof===y)return"<...>";try{var F=l(V);return F?"<"+F+">":"<...>"}catch(or){return"<...>"}}function n(){var V=Wr.A;return V===null?null:V.getOwner()}function H(){return Error("react-stack-top-frame")}function O(V){if(tr.call(V,"key")){var F=Object.getOwnPropertyDescriptor(V,"key").get;if(F&&F.isReactWarning)return!1}return V.key!==void 0}function q(V,F){function or(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",F))}or.isReactWarning=!0,Object.defineProperty(V,"key",{get:or,configurable:!0})}function R(){var V=l(this.type);return s[V]||(s[V]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),V=this.props.ref,V!==void 0?V:null}function X(V,F,or,Or,Ar,xr){var br=or.ref;return V={$$typeof:L,type:V,key:F,props:or,_owner:Or},(br!==void 0?br:null)!==null?Object.defineProperty(V,"ref",{enumerable:!1,get:R}):Object.defineProperty(V,"ref",{enumerable:!1,value:null}),V._store={},Object.defineProperty(V._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(V,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(V,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Ar}),Object.defineProperty(V,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:xr}),Object.freeze&&(Object.freeze(V.props),Object.freeze(V)),V}function G(V,F,or,Or,Ar,xr){var br=F.children;if(br!==void 0)if(Or)if(Gr(br)){for(Or=0;Or<br.length;Or++)A(br[Or]);Object.freeze&&Object.freeze(br)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else A(br);if(tr.call(F,"key")){br=l(V);var Cr=Object.keys(F).filter(function(Wg){return Wg!=="key"});Or=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Xr[br+Or]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Or,br,Cr,br),Xr[br+Or]=!0)}if(br=null,or!==void 0&&(w(or),br=""+or),O(F)&&(w(F.key),br=""+F.key),"key"in F){or={};for(var fr in F)fr!=="key"&&(or[fr]=F[fr])}else or=F;return br&&q(or,typeof V==="function"?V.displayName||V.name||"Unknown":V),X(V,br,or,n(),Ar,xr)}function A(V){Y(V)?V._store&&(V._store.validated=1):typeof V==="object"&&V!==null&&V.$$typeof===y&&(V._payload.status==="fulfilled"?Y(V._payload.value)&&V._payload.value._store&&(V._payload.value._store.validated=1):V._store&&(V._store.validated=1))}function Y(V){return typeof V==="object"&&V!==null&&V.$$typeof===L}var L=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),nr=Symbol.for("react.consumer"),vr=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),x=Symbol.for("react.client.reference"),Wr=Ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tr=Object.prototype.hasOwnProperty,Gr=Array.isArray,Zr=console.createTask?console.createTask:function(){return null};Ke={react_stack_bottom_frame:function(V){return V()}};var k,s={},er=Ke.react_stack_bottom_frame.bind(Ke,H)(),zr=Zr(u(H)),Xr={};Ez.Fragment=T,Ez.jsxDEV=function(V,F,or,Or){var Ar=1e4>Wr.recentlyCreatedOwnerStacks++;return G(V,F,or,Or,Ar?Error("react-stack-top-frame"):er,Ar?Zr(u(V)):zr)}})()});var zP=Pr(eg(),1),KP=Pr(AW(),1);var MW=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var WW=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var RW=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var GW=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var XW=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var YW=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var JW=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var QW=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var zW=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var KW=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var UW=MW+WW+RW+GW+XW+YW+JW+QW+zW+KW;var Jg=Pr(eg(),1);var l2=Pr(eg(),1);var g2=(...l)=>l.filter((e,w,u)=>{return Boolean(e)&&e.trim()!==""&&u.indexOf(e)===w}).join(" ").trim();var $W=(l)=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var mW=(l)=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,w,u)=>u?u.toUpperCase():w.toLowerCase());var W8=(l)=>{let e=mW(l);return e.charAt(0).toUpperCase()+e.slice(1)};var F5=Pr(eg(),1);var o2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var LW=(l)=>{for(let e in l)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Sh=Pr(eg(),1),VQ=Sh.createContext({});var IW=()=>Sh.useContext(VQ);var FW=F5.forwardRef(({color:l,size:e,strokeWidth:w,absoluteStrokeWidth:u,className:n="",children:H,iconNode:O,...q},R)=>{let{size:X=24,strokeWidth:G=2,absoluteStrokeWidth:A=!1,color:Y="currentColor",className:L=""}=IW()??{},S=u??A?Number(w??G)*24/Number(e??X):w??G;return F5.createElement("svg",{ref:R,...o2,width:e??X??o2.width,height:e??X??o2.height,stroke:l??Y,strokeWidth:S,className:g2("lucide",L,n),...!H&&!LW(q)&&{"aria-hidden":"true"},...q},[...O.map(([T,_])=>F5.createElement(T,_)),...Array.isArray(H)?H:[H]])});var c=(l,e)=>{let w=l2.forwardRef(({className:u,...n},H)=>l2.createElement(FW,{ref:H,iconNode:e,className:g2(`lucide-${$W(W8(l))}`,`lucide-${l}`,u),...n}));return w.displayName=W8(l),w};var _Q=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Bv=c("braces",_Q);var yQ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],A1=c("chart-column",yQ);var EQ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wo=c("code-xml",EQ);var cQ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Zv=c("file-code-corner",cQ);var aQ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],M1=c("layers",aQ);var jQ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xv=c("loader-circle",jQ);var fQ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cl=c("triangle-alert",fQ);var pQ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],W1=c("user-round",pQ);var dQ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],N5=c("activity",dQ);var sQ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],B5=c("arrow-down-to-line",sQ);var rz=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Z5=c("arrow-up-to-line",rz);var gz=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],x5=c("blocks",gz);var oz=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Xe=c("book-marked",oz);var lz=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],C5=c("book-open",lz);var vz=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],T5=c("calendar",vz);var ez=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],S5=c("check",ez);var hz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ro=c("chevron-down",hz);var bz=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],k5=c("chevron-left",bz);var wz=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],t0=c("chevron-right",wz);var uz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ml=c("chevron-up",uz);var iz=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],D5=c("chevrons-up-down",iz);var nz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],V5=c("clock",nz);var Pz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pl=c("copy",Pz);var Hz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dl=c("database",Hz);var Oz=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ye=c("download",Oz);var qz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_5=c("eye",qz);var tz=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Je=c("folder-open",tz);var Az=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],y5=c("hash",Az);var Mz=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],E5=c("link-2",Mz);var Wz=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],c5=c("list-ordered",Wz);var Rz=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],a5=c("list",Rz);var Gz=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],j5=c("lock",Gz);var Xz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],kh=c("message-square-plus",Xz);var Yz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],f5=c("message-square",Yz);var Jz=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],p5=c("package",Jz);var Qz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sl=c("pencil",Qz);var zz=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Qe=c("play",zz);var Kz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],d5=c("plus",Kz);var Uz=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],s5=c("radio",Uz);var $z=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],A0=c("refresh-cw",$z);var mz=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rw=c("save",mz);var Lz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],R1=c("search",Lz);var Iz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dh=c("shield-alert",Iz);var Fz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],gw=c("shield",Fz);var Nz=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],ow=c("syringe",Nz);var Bz=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Cv=c("terminal",Bz);var Zz=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],lw=c("toggle-left",Zz);var xz=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],vw=c("toggle-right",xz);var Cz=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],ze=c("timer",Cz);var Tz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Uo=c("trash-2",Tz);var Sz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],ew=c("type",Sz);var kz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],hw=c("upload",kz);var Dz=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Vh=c("user-plus",Dz);var Vz=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bw=c("wrench",Vz);var _z=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=c("x",_z);var yz=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],M0=c("zap",yz);var v2={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var I2=Pr(eg(),1);var Qw=Pr(eg(),1);var Ug=Pr(rg(),1),cz={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},NW=({script:l,selected:e,dot:w,duration:u,onSelect:n,onEdit:H,sendToBackend:O})=>{let q=(S)=>{S.stopPropagation(),O({type:"update_script",id:l.id,patch:{enabled:!l.enabled}})},R=(S)=>{S.stopPropagation(),O({type:"duplicate_script",id:l.id})},X=(S)=>{if(S.stopPropagation(),!window.confirm(`Delete "${l.name}"?`))return;O({type:"delete_script",id:l.id})},G=(S)=>{S.stopPropagation(),H()},A=w==="running",Y=(S)=>{if(S.stopPropagation(),A||!l.enabled)return;O({type:"run_script",id:l.id})},L=l.bindings?.length??0;return Ug.jsxDEV("div",{className:`ls-item${e?" ls-selected":""}${!l.enabled&&l.type!=="library"?" ls-disabled":""}`,onClick:n,children:[Ug.jsxDEV("span",{className:cz[w],title:w},void 0,!1,void 0,this),Ug.jsxDEV("div",{className:"ls-item-body",children:[Ug.jsxDEV("div",{className:"ls-item-name",title:l.name,children:l.name},void 0,!1,void 0,this),Ug.jsxDEV("div",{className:"ls-item-meta",children:[l.type!=="library"&&Ug.jsxDEV("span",{children:l.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),u!==void 0&&w!=="running"&&Ug.jsxDEV("span",{style:{color:w==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[u,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),l.type!=="library"&&L>0&&Ug.jsxDEV("div",{className:"ls-item-bindings",children:l.bindings.map((S,T)=>Ug.jsxDEV("span",{className:"ls-binding-badge",children:[S.type==="character"?Ug.jsxDEV(W1,{size:9},void 0,!1,void 0,this):Ug.jsxDEV(f5,{size:9},void 0,!1,void 0,this),Ug.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.displayName},void 0,!1,void 0,this)]},T,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ug.jsxDEV("div",{className:"ls-item-actions",children:[Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:G,title:"Edit script",children:Ug.jsxDEV(sl,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),l.type!=="library"&&Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:Y,disabled:!l.enabled||A,title:!l.enabled?"Enable to run":A?"Running…":"Run script",children:A?Ug.jsxDEV(xv,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Ug.jsxDEV(Qe,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),l.type!=="library"&&Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:q,title:l.enabled?"Disable":"Enable",children:l.enabled?Ug.jsxDEV(vw,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Ug.jsxDEV(lw,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ug.jsxDEV("button",{className:"ls-icon-btn",onClick:R,title:"Duplicate",children:Ug.jsxDEV(pl,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ug.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:X,title:"Delete",children:Ug.jsxDEV(Uo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var xg=Uint8Array,Wl=Uint16Array,m8=Int32Array,h2=new xg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),b2=new xg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),J8=new xg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SW=function(l,e){var w=new Wl(31);for(var u=0;u<31;++u)w[u]=e+=1<<l[u-1];var n=new m8(w[30]);for(var u=1;u<30;++u)for(var H=w[u];H<w[u+1];++H)n[H]=H-w[u]<<5|u;return{b:w,r:n}},kW=SW(h2,2),DW=kW.b,Q8=kW.r;DW[28]=258,Q8[258]=28;var VW=SW(b2,0),az=VW.b,BW=VW.r,z8=new Wl(32768);for(gg=0;gg<32768;++gg)Tv=(gg&43690)>>1|(gg&21845)<<1,Tv=(Tv&52428)>>2|(Tv&13107)<<2,Tv=(Tv&61680)>>4|(Tv&3855)<<4,z8[gg]=((Tv&65280)>>8|(Tv&255)<<8)>>1;var Tv,gg,kv=function(l,e,w){var u=l.length,n=0,H=new Wl(e);for(;n<u;++n)if(l[n])++H[l[n]-1];var O=new Wl(e);for(n=1;n<e;++n)O[n]=O[n-1]+H[n-1]<<1;var q;if(w){q=new Wl(1<<e);var R=15-e;for(n=0;n<u;++n)if(l[n]){var X=n<<4|l[n],G=e-l[n],A=O[l[n]-1]++<<G;for(var Y=A|(1<<G)-1;A<=Y;++A)q[z8[A]>>R]=X}}else{q=new Wl(u);for(n=0;n<u;++n)if(l[n])q[n]=z8[O[l[n]-1]++]>>15-l[n]}return q},G1=new xg(288);for(gg=0;gg<144;++gg)G1[gg]=8;var gg;for(gg=144;gg<256;++gg)G1[gg]=9;var gg;for(gg=256;gg<280;++gg)G1[gg]=7;var gg;for(gg=280;gg<288;++gg)G1[gg]=8;var gg,iw=new xg(32);for(gg=0;gg<32;++gg)iw[gg]=5;var gg,jz=kv(G1,9,0),fz=kv(G1,9,1),pz=kv(iw,5,0),dz=kv(iw,5,1),R8=function(l){var e=l[0];for(var w=1;w<l.length;++w)if(l[w]>e)e=l[w];return e},rv=function(l,e,w){var u=e/8|0;return(l[u]|l[u+1]<<8)>>(e&7)&w},G8=function(l,e){var w=e/8|0;return(l[w]|l[w+1]<<8|l[w+2]<<16)>>(e&7)},L8=function(l){return(l+7)/8|0},nw=function(l,e,w){if(e==null||e<0)e=0;if(w==null||w>l.length)w=l.length;return new xg(l.subarray(e,w))};var sz=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(l,e,w){var u=Error(e||sz[l]);if(u.code=l,Error.captureStackTrace)Error.captureStackTrace(u,ko);if(!w)throw u;return u},rK=function(l,e,w,u){var n=l.length,H=u?u.length:0;if(!n||e.f&&!e.l)return w||new xg(0);var O=!w,q=O||e.i!=2,R=e.i;if(O)w=new xg(n*3);var X=function(wr){var _o=w.length;if(wr>_o){var Yo=new xg(Math.max(_o*2,wr));Yo.set(w),w=Yo}},G=e.f||0,A=e.p||0,Y=e.b||0,L=e.l,S=e.d,T=e.m,_=e.n,rr=n*8;do{if(!L){G=rv(l,A,1);var nr=rv(l,A+1,3);if(A+=3,!nr){var vr=L8(A)+4,a=l[vr-4]|l[vr-3]<<8,p=vr+a;if(p>n){if(R)ko(0);break}if(q)X(Y+a);w.set(l.subarray(vr,p),Y),e.b=Y+=a,e.p=A=p*8,e.f=G;continue}else if(nr==1)L=fz,S=dz,T=9,_=5;else if(nr==2){var lr=rv(l,A,31)+257,B=rv(l,A+10,15)+4,y=lr+rv(l,A+5,31)+1;A+=14;var j=new xg(y),x=new xg(19);for(var Wr=0;Wr<B;++Wr)x[J8[Wr]]=rv(l,A+Wr*3,7);A+=B*3;var tr=R8(x),Gr=(1<<tr)-1,Zr=kv(x,tr,1);for(var Wr=0;Wr<y;){var k=Zr[rv(l,A,Gr)];A+=k&15;var vr=k>>4;if(vr<16)j[Wr++]=vr;else{var s=0,er=0;if(vr==16)er=3+rv(l,A,3),A+=2,s=j[Wr-1];else if(vr==17)er=3+rv(l,A,7),A+=3;else if(vr==18)er=11+rv(l,A,127),A+=7;while(er--)j[Wr++]=s}}var zr=j.subarray(0,lr),Xr=j.subarray(lr);T=R8(zr),_=R8(Xr),L=kv(zr,T,1),S=kv(Xr,_,1)}else ko(1);if(A>rr){if(R)ko(0);break}}if(q)X(Y+131072);var V=(1<<T)-1,F=(1<<_)-1,or=A;for(;;or=A){var s=L[G8(l,A)&V],Or=s>>4;if(A+=s&15,A>rr){if(R)ko(0);break}if(!s)ko(2);if(Or<256)w[Y++]=Or;else if(Or==256){or=A,L=null;break}else{var Ar=Or-254;if(Or>264){var Wr=Or-257,xr=h2[Wr];Ar=rv(l,A,(1<<xr)-1)+DW[Wr],A+=xr}var br=S[G8(l,A)&F],Cr=br>>4;if(!br)ko(3);A+=br&15;var Xr=az[Cr];if(Cr>3){var xr=b2[Cr];Xr+=G8(l,A)&(1<<xr)-1,A+=xr}if(A>rr){if(R)ko(0);break}if(q)X(Y+131072);var fr=Y+Ar;if(Y<Xr){var Wg=H-Xr,mo=Math.min(Xr,fr);if(Wg+Y<0)ko(3);for(;Y<mo;++Y)w[Y]=u[Wg+Y]}for(;Y<fr;++Y)w[Y]=w[Y-Xr]}}if(e.l=L,e.p=or,e.b=Y,e.f=G,L)G=1,e.m=T,e.d=S,e.n=_}while(!G);return Y!=w.length&&O?nw(w,0,Y):w.subarray(0,Y)},W0=function(l,e,w){w<<=e&7;var u=e/8|0;l[u]|=w,l[u+1]|=w>>8},ww=function(l,e,w){w<<=e&7;var u=e/8|0;l[u]|=w,l[u+1]|=w>>8,l[u+2]|=w>>16},X8=function(l,e){var w=[];for(var u=0;u<l.length;++u)if(l[u])w.push({s:u,f:l[u]});var n=w.length,H=w.slice();if(!n)return{t:yW,l:0};if(n==1){var O=new xg(w[0].s+1);return O[w[0].s]=1,{t:O,l:1}}w.sort(function(p,lr){return p.f-lr.f}),w.push({s:-1,f:25001});var q=w[0],R=w[1],X=0,G=1,A=2;w[0]={s:-1,f:q.f+R.f,l:q,r:R};while(G!=n-1)q=w[w[X].f<w[A].f?X++:A++],R=w[X!=G&&w[X].f<w[A].f?X++:A++],w[G++]={s:-1,f:q.f+R.f,l:q,r:R};var Y=H[0].s;for(var u=1;u<n;++u)if(H[u].s>Y)Y=H[u].s;var L=new Wl(Y+1),S=K8(w[G-1],L,0);if(S>e){var u=0,T=0,_=S-e,rr=1<<_;H.sort(function(lr,B){return L[B.s]-L[lr.s]||lr.f-B.f});for(;u<n;++u){var nr=H[u].s;if(L[nr]>e)T+=rr-(1<<S-L[nr]),L[nr]=e;else break}T>>=_;while(T>0){var vr=H[u].s;if(L[vr]<e)T-=1<<e-L[vr]++-1;else++u}for(;u>=0&&T;--u){var a=H[u].s;if(L[a]==e)--L[a],++T}S=e}return{t:new xg(L),l:S}},K8=function(l,e,w){return l.s==-1?Math.max(K8(l.l,e,w+1),K8(l.r,e,w+1)):e[l.s]=w},ZW=function(l){var e=l.length;while(e&&!l[--e]);var w=new Wl(++e),u=0,n=l[0],H=1,O=function(R){w[u++]=R};for(var q=1;q<=e;++q)if(l[q]==n&&q!=e)++H;else{if(!n&&H>2){for(;H>138;H-=138)O(32754);if(H>2)O(H>10?H-11<<5|28690:H-3<<5|12305),H=0}else if(H>3){O(n),--H;for(;H>6;H-=6)O(8304);if(H>2)O(H-3<<5|8208),H=0}while(H--)O(n);H=1,n=l[q]}return{c:w.subarray(0,u),n:e}},uw=function(l,e){var w=0;for(var u=0;u<e.length;++u)w+=l[u]*e[u];return w},_W=function(l,e,w){var u=w.length,n=L8(e+2);l[n]=u&255,l[n+1]=u>>8,l[n+2]=l[n]^255,l[n+3]=l[n+1]^255;for(var H=0;H<u;++H)l[n+H+4]=w[H];return(n+4+u)*8},xW=function(l,e,w,u,n,H,O,q,R,X,G){W0(e,G++,w),++n[256];var A=X8(n,15),Y=A.t,L=A.l,S=X8(H,15),T=S.t,_=S.l,rr=ZW(Y),nr=rr.c,vr=rr.n,a=ZW(T),p=a.c,lr=a.n,B=new Wl(19);for(var y=0;y<nr.length;++y)++B[nr[y]&31];for(var y=0;y<p.length;++y)++B[p[y]&31];var j=X8(B,7),x=j.t,Wr=j.l,tr=19;for(;tr>4&&!x[J8[tr-1]];--tr);var Gr=X+5<<3,Zr=uw(n,G1)+uw(H,iw)+O,k=uw(n,Y)+uw(H,T)+O+14+3*tr+uw(B,x)+2*B[16]+3*B[17]+7*B[18];if(R>=0&&Gr<=Zr&&Gr<=k)return _W(e,G,l.subarray(R,R+X));var s,er,zr,Xr;if(W0(e,G,1+(k<Zr)),G+=2,k<Zr){s=kv(Y,L,0),er=Y,zr=kv(T,_,0),Xr=T;var V=kv(x,Wr,0);W0(e,G,vr-257),W0(e,G+5,lr-1),W0(e,G+10,tr-4),G+=14;for(var y=0;y<tr;++y)W0(e,G+3*y,x[J8[y]]);G+=3*tr;var F=[nr,p];for(var or=0;or<2;++or){var Or=F[or];for(var y=0;y<Or.length;++y){var Ar=Or[y]&31;if(W0(e,G,V[Ar]),G+=x[Ar],Ar>15)W0(e,G,Or[y]>>5&127),G+=Or[y]>>12}}}else s=jz,er=G1,zr=pz,Xr=iw;for(var y=0;y<q;++y){var xr=u[y];if(xr>255){var Ar=xr>>18&31;if(ww(e,G,s[Ar+257]),G+=er[Ar+257],Ar>7)W0(e,G,xr>>23&31),G+=h2[Ar];var br=xr&31;if(ww(e,G,zr[br]),G+=Xr[br],br>3)ww(e,G,xr>>5&8191),G+=b2[br]}else ww(e,G,s[xr]),G+=er[xr]}return ww(e,G,s[256]),G+er[256]},gK=new m8([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),yW=new xg(0),oK=function(l,e,w,u,n,H){var O=H.z||l.length,q=new xg(u+O+5*(1+Math.ceil(O/7000))+n),R=q.subarray(u,q.length-n),X=H.l,G=(H.r||0)&7;if(e){if(G)R[0]=H.r>>3;var A=gK[e-1],Y=A>>13,L=A&8191,S=(1<<w)-1,T=H.p||new Wl(32768),_=H.h||new Wl(S+1),rr=Math.ceil(w/3),nr=2*rr,vr=function(rl){return(l[rl]^l[rl+1]<<rr^l[rl+2]<<nr)&S},a=new m8(25000),p=new Wl(288),lr=new Wl(32),B=0,y=0,j=H.i||0,x=0,Wr=H.w||0,tr=0;for(;j+2<O;++j){var Gr=vr(j),Zr=j&32767,k=_[Gr];if(T[Zr]=k,_[Gr]=Zr,Wr<=j){var s=O-j;if((B>7000||x>24576)&&(s>423||!X)){G=xW(l,R,0,a,p,lr,y,x,tr,j-tr,G),x=B=y=0,tr=j;for(var er=0;er<286;++er)p[er]=0;for(var er=0;er<30;++er)lr[er]=0}var zr=2,Xr=0,V=L,F=Zr-k&32767;if(s>2&&Gr==vr(j-F)){var or=Math.min(Y,s)-1,Or=Math.min(32767,j),Ar=Math.min(258,s);while(F<=Or&&--V&&Zr!=k){if(l[j+zr]==l[j+zr-F]){var xr=0;for(;xr<Ar&&l[j+xr]==l[j+xr-F];++xr);if(xr>zr){if(zr=xr,Xr=F,xr>or)break;var br=Math.min(F,xr-2),Cr=0;for(var er=0;er<br;++er){var fr=j-F+er&32767,Wg=T[fr],mo=fr-Wg&32767;if(mo>Cr)Cr=mo,k=fr}}}Zr=k,k=T[Zr],F+=Zr-k&32767}}if(Xr){a[x++]=268435456|Q8[zr]<<18|BW[Xr];var wr=Q8[zr]&31,_o=BW[Xr]&31;y+=h2[wr]+b2[_o],++p[257+wr],++lr[_o],Wr=j+zr,++B}else a[x++]=l[j],++p[l[j]]}}for(j=Math.max(j,Wr);j<O;++j)a[x++]=l[j],++p[l[j]];if(G=xW(l,R,X,a,p,lr,y,x,tr,j-tr,G),!X)H.r=G&7|R[G/8|0]<<3,G-=7,H.h=_,H.p=T,H.i=j,H.w=Wr}else{for(var j=H.w||0;j<O+X;j+=65535){var Yo=j+65535;if(Yo>=O)R[G/8|0]=X,Yo=O;G=_W(R,G+1,l.subarray(j,Yo))}H.i=O}return nw(q,0,u+L8(G)+n)},lK=function(){var l=new Int32Array(256);for(var e=0;e<256;++e){var w=e,u=9;while(--u)w=(w&1&&-306674912)^w>>>1;l[e]=w}return l}(),vK=function(){var l=-1;return{p:function(e){var w=l;for(var u=0;u<e.length;++u)w=lK[w&255^e[u]]^w>>>8;l=w},d:function(){return~l}}};var eK=function(l,e,w,u,n){if(!n){if(n={l:1},e.dictionary){var H=e.dictionary.subarray(-32768),O=new xg(H.length+l.length);O.set(H),O.set(l,H.length),l=O,n.w=H.length}}return oK(l,e.level==null?6:e.level,e.mem==null?n.l?Math.ceil(Math.max(8,Math.min(13,Math.log(l.length)))*1.5):20:12+e.mem,w,u,n)},EW=function(l,e){var w={};for(var u in l)w[u]=l[u];for(var u in e)w[u]=e[u];return w};var Sv=function(l,e){return l[e]|l[e+1]<<8},gv=function(l,e){return(l[e]|l[e+1]<<8|l[e+2]<<16|l[e+3]<<24)>>>0},Y8=function(l,e){return gv(l,e)+gv(l,e+4)*4294967296},Go=function(l,e,w){for(;w;++e)l[e]=w,w>>>=8};function hK(l,e){return eK(l,e||{},0,0)}function bK(l,e){return rK(l,{i:2},e&&e.out,e&&e.dictionary)}var cW=function(l,e,w,u){for(var n in l){var H=l[n],O=e+n,q=u;if(Array.isArray(H))q=EW(u,H[1]),H=H[0];if(H instanceof xg)w[O]=[H,q];else w[O+="/"]=[new xg(0),q],cW(H,O,w,u)}},CW=typeof TextEncoder<"u"&&new TextEncoder,U8=typeof TextDecoder<"u"&&new TextDecoder,wK=0;try{U8.decode(yW,{stream:!0}),wK=1}catch(l){}var uK=function(l){for(var e="",w=0;;){var u=l[w++],n=(u>127)+(u>223)+(u>239);if(w+n>l.length)return{s:e,r:nw(l,w-1)};if(!n)e+=String.fromCharCode(u);else if(n==3)u=((u&15)<<18|(l[w++]&63)<<12|(l[w++]&63)<<6|l[w++]&63)-65536,e+=String.fromCharCode(55296|u>>10,56320|u&1023);else if(n&1)e+=String.fromCharCode((u&31)<<6|l[w++]&63);else e+=String.fromCharCode((u&15)<<12|(l[w++]&63)<<6|l[w++]&63)}};function e2(l,e){if(e){var w=new xg(l.length);for(var u=0;u<l.length;++u)w[u]=l.charCodeAt(u);return w}if(CW)return CW.encode(l);var n=l.length,H=new xg(l.length+(l.length>>1)),O=0,q=function(G){H[O++]=G};for(var u=0;u<n;++u){if(O+5>H.length){var R=new xg(O+8+(n-u<<1));R.set(H),H=R}var X=l.charCodeAt(u);if(X<128||e)q(X);else if(X<2048)q(192|X>>6),q(128|X&63);else if(X>55295&&X<57344)X=65536+(X&1047552)|l.charCodeAt(++u)&1023,q(240|X>>18),q(128|X>>12&63),q(128|X>>6&63),q(128|X&63);else q(224|X>>12),q(128|X>>6&63),q(128|X&63)}return nw(H,0,O)}function I8(l,e){if(e){var w="";for(var u=0;u<l.length;u+=16384)w+=String.fromCharCode.apply(null,l.subarray(u,u+16384));return w}else if(U8)return U8.decode(l);else{var n=uK(l),H=n.s,w=n.r;if(w.length)ko(8);return H}}var iK=function(l,e){return e+30+Sv(l,e+26)+Sv(l,e+28)},nK=function(l,e,w){var u=Sv(l,e+28),n=I8(l.subarray(e+46,e+46+u),!(Sv(l,e+8)&2048)),H=e+46+u,O=gv(l,e+20),q=w&&O==4294967295?PK(l,H):[O,gv(l,e+24),gv(l,e+42)],R=q[0],X=q[1],G=q[2];return[Sv(l,e+10),R,X,n,H+Sv(l,e+30)+Sv(l,e+32),G]},PK=function(l,e){for(;Sv(l,e)!=1;e+=4+Sv(l,e+2));return[Y8(l,e+12),Y8(l,e+4),Y8(l,e+20)]},$8=function(l){var e=0;if(l)for(var w in l){var u=l[w].length;if(u>65535)ko(9);e+=u+4}return e},TW=function(l,e,w,u,n,H,O,q){var R=u.length,X=w.extra,G=q&&q.length,A=$8(X);if(Go(l,e,O!=null?33639248:67324752),e+=4,O!=null)l[e++]=20,l[e++]=w.os;l[e]=20,e+=2,l[e++]=w.flag<<1|(H<0&&8),l[e++]=n&&8,l[e++]=w.compression&255,l[e++]=w.compression>>8;var Y=new Date(w.mtime==null?Date.now():w.mtime),L=Y.getFullYear()-1980;if(L<0||L>119)ko(10);if(Go(l,e,L<<25|Y.getMonth()+1<<21|Y.getDate()<<16|Y.getHours()<<11|Y.getMinutes()<<5|Y.getSeconds()>>1),e+=4,H!=-1)Go(l,e,w.crc),Go(l,e+4,H<0?-H-2:H),Go(l,e+8,w.size);if(Go(l,e+12,R),Go(l,e+14,A),e+=16,O!=null)Go(l,e,G),Go(l,e+6,w.attrs),Go(l,e+10,O),e+=14;if(l.set(u,e),e+=R,A)for(var S in X){var T=X[S],_=T.length;Go(l,e,+S),Go(l,e+2,_),l.set(T,e+4),e+=4+_}if(G)l.set(q,e),e+=G;return e},HK=function(l,e,w,u,n){Go(l,e,101010256),Go(l,e+8,w),Go(l,e+10,w),Go(l,e+12,u),Go(l,e+16,n)};function aW(l,e){if(!e)e={};var w={},u=[];cW(l,"",w,e);var n=0,H=0;for(var O in w){var q=w[O],R=q[0],X=q[1],G=X.level==0?0:8,A=e2(O),Y=A.length,L=X.comment,S=L&&e2(L),T=S&&S.length,_=$8(X.extra);if(Y>65535)ko(11);var rr=G?hK(R,X):R,nr=rr.length,vr=vK();vr.p(R),u.push(EW(X,{size:R.length,crc:vr.d(),c:rr,f:A,m:S,u:Y!=O.length||S&&L.length!=T,o:n,compression:G})),n+=30+Y+_+nr,H+=76+2*(Y+_)+(T||0)+nr}var a=new xg(H+22),p=n,lr=H-n;for(var B=0;B<u.length;++B){var A=u[B];TW(a,A.o,A,A.f,A.u,A.c.length);var y=30+A.f.length+$8(A.extra);a.set(A.c,A.o+y),TW(a,n,A,A.f,A.u,A.c.length,A.o,A.m),n+=16+y+(A.m?A.m.length:0)}return HK(a,n,u.length,lr,p),a}function jW(l,e){var w={},u=l.length-22;for(;gv(l,u)!=101010256;--u)if(!u||l.length-u>65558)ko(13);var n=Sv(l,u+8);if(!n)return{};var H=gv(l,u+16),O=H==4294967295||n==65535;if(O){var q=gv(l,u-12);if(O=gv(l,q)==101075792,O)n=gv(l,q+32),H=gv(l,q+48)}var R=e&&e.filter;for(var X=0;X<n;++X){var G=nK(l,H,O),A=G[0],Y=G[1],L=G[2],S=G[3],T=G[4],_=G[5],rr=iK(l,_);if(H=T,!R||R({name:S,size:Y,originalSize:L,compression:A}))if(!A)w[S]=nw(l,rr,rr+Y);else if(A==8)w[S]=bK(l.subarray(rr,rr+Y),{out:new xg(L)});else ko(14,"unknown compression type "+A)}return w}function F8(l){let e=l.map((u)=>({name:u.name,code:u.code,type:u.type,triggers:u.triggers,bindings:u.bindings,folder:u.folder,metadata:u.metadata})),w={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:e};return aW({"pack.json":e2(JSON.stringify(w,null,2))})}function fW(l,e){let w=F8(l),u=new Blob([w.buffer],{type:"application/zip"}),n=URL.createObjectURL(u),H=document.createElement("a");H.href=n,H.download=`${e}.lumiscript.zip`,H.click(),URL.revokeObjectURL(n)}var pW;function E(l,e,w){function u(q,R){if(!q._zod)Object.defineProperty(q,"_zod",{value:{def:R,constr:O,traits:new Set},enumerable:!1});if(q._zod.traits.has(l))return;q._zod.traits.add(l),e(q,R);let X=O.prototype,G=Object.keys(X);for(let A=0;A<G.length;A++){let Y=G[A];if(!(Y in q))q[Y]=X[Y].bind(q)}}let n=w?.Parent??Object;class H extends n{}Object.defineProperty(H,"name",{value:l});function O(q){var R;let X=w?.Parent?new H:this;u(X,q),(R=X._zod).deferred??(R.deferred=[]);for(let G of X._zod.deferred)G();return X}return Object.defineProperty(O,"init",{value:u}),Object.defineProperty(O,Symbol.hasInstance,{value:(q)=>{if(w?.Parent&&q instanceof w.Parent)return!0;return q?._zod?.traits?.has(l)}}),Object.defineProperty(O,"name",{value:l}),O}var R_g=Symbol("zod_brand");class R0 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Pw extends Error{constructor(l){super(`Encountered unidirectional transform during encode: ${l}`);this.name="ZodEncodeError"}}(pW=globalThis).__zod_globalConfig??(pW.__zod_globalConfig={});var _h=globalThis.__zod_globalConfig;function G0(l){if(l)Object.assign(_h,l);return _h}var Og={};UQ(Og,{unwrapMessage:()=>Hw,uint8ArrayToHex:()=>SK,uint8ArrayToBase64url:()=>CK,uint8ArrayToBase64:()=>b9,stringifyPrimitive:()=>o9,slugify:()=>B8,shallowClone:()=>r9,safeExtend:()=>LK,required:()=>NK,randomString:()=>JK,propertyKeyTypes:()=>x8,promiseAllObject:()=>YK,primitiveTypes:()=>g9,prefixIssues:()=>Mw,pick:()=>UK,partial:()=>FK,parsedType:()=>BK,optionalKeys:()=>C8,omit:()=>$K,objectClone:()=>RK,numKeys:()=>QK,nullish:()=>tw,normalizeParams:()=>_r,mergeDefs:()=>X0,merge:()=>IK,jsonStringifyReplacer:()=>Eh,joinValues:()=>WK,issue:()=>ch,isPlainObject:()=>Ue,isObject:()=>yh,hexToUint8Array:()=>TK,getSizableOrigin:()=>e9,getParsedType:()=>zK,getLengthableOrigin:()=>Ww,getEnumValues:()=>Ow,getElementAtPath:()=>XK,floatSafeRemainder:()=>sW,finalizeIssue:()=>Dv,extend:()=>mK,explicitlyAborted:()=>T8,escapeRegex:()=>Y0,esc:()=>w2,defineLazy:()=>Pg,createTransparentProxy:()=>KK,cloneDef:()=>GK,clone:()=>ov,cleanRegex:()=>Aw,cleanEnum:()=>ZK,captureStackTrace:()=>u2,cached:()=>qw,base64urlToUint8Array:()=>xK,base64ToUint8Array:()=>h9,assignProp:()=>X1,assertNotEqual:()=>qK,assertNever:()=>AK,assertIs:()=>tK,assertEqual:()=>OK,assert:()=>MK,allowsEval:()=>Z8,aborted:()=>Y1,NUMBER_FORMAT_RANGES:()=>l9,Class:()=>w9,BIGINT_FORMAT_RANGES:()=>v9});function OK(l){return l}function qK(l){return l}function tK(l){}function AK(l){throw Error("Unexpected value in exhaustive check")}function MK(l){}function Ow(l){let e=Object.values(l).filter((u)=>typeof u==="number");return Object.entries(l).filter(([u,n])=>e.indexOf(+u)===-1).map(([u,n])=>n)}function WK(l,e="|"){return l.map((w)=>o9(w)).join(e)}function Eh(l,e){if(typeof e==="bigint")return e.toString();return e}function qw(l){return{get value(){{let w=l();return Object.defineProperty(this,"value",{value:w}),w}throw Error("cached value already set")}}}function tw(l){return l===null||l===void 0}function Aw(l){let e=l.startsWith("^")?1:0,w=l.endsWith("$")?l.length-1:l.length;return l.slice(e,w)}function sW(l,e){let w=l/e,u=Math.round(w),n=Number.EPSILON*Math.max(Math.abs(w),1);if(Math.abs(w-u)<n)return 0;return w-u}var dW=Symbol("evaluating");function Pg(l,e,w){let u=void 0;Object.defineProperty(l,e,{get(){if(u===dW)return;if(u===void 0)u=dW,u=w();return u},set(n){Object.defineProperty(l,e,{value:n})},configurable:!0})}function RK(l){return Object.create(Object.getPrototypeOf(l),Object.getOwnPropertyDescriptors(l))}function X1(l,e,w){Object.defineProperty(l,e,{value:w,writable:!0,enumerable:!0,configurable:!0})}function X0(...l){let e={};for(let w of l){let u=Object.getOwnPropertyDescriptors(w);Object.assign(e,u)}return Object.defineProperties({},e)}function GK(l){return X0(l._zod.def)}function XK(l,e){if(!e)return l;return e.reduce((w,u)=>w?.[u],l)}function YK(l){let e=Object.keys(l),w=e.map((u)=>l[u]);return Promise.all(w).then((u)=>{let n={};for(let H=0;H<e.length;H++)n[e[H]]=u[H];return n})}function JK(l=10){let w="";for(let u=0;u<l;u++)w+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return w}function w2(l){return JSON.stringify(l)}function B8(l){return l.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var u2="captureStackTrace"in Error?Error.captureStackTrace:(...l)=>{};function yh(l){return typeof l==="object"&&l!==null&&!Array.isArray(l)}var Z8=qw(()=>{if(_h.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(l){return!1}});function Ue(l){if(yh(l)===!1)return!1;let e=l.constructor;if(e===void 0)return!0;if(typeof e!=="function")return!0;let w=e.prototype;if(yh(w)===!1)return!1;if(Object.prototype.hasOwnProperty.call(w,"isPrototypeOf")===!1)return!1;return!0}function r9(l){if(Ue(l))return{...l};if(Array.isArray(l))return[...l];if(l instanceof Map)return new Map(l);if(l instanceof Set)return new Set(l);return l}function QK(l){let e=0;for(let w in l)if(Object.prototype.hasOwnProperty.call(l,w))e++;return e}var zK=(l)=>{let e=typeof l;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(l)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(l))return"array";if(l===null)return"null";if(l.then&&typeof l.then==="function"&&l.catch&&typeof l.catch==="function")return"promise";if(typeof Map<"u"&&l instanceof Map)return"map";if(typeof Set<"u"&&l instanceof Set)return"set";if(typeof Date<"u"&&l instanceof Date)return"date";if(typeof File<"u"&&l instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${e}`)}},x8=new Set(["string","number","symbol"]),g9=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Y0(l){return l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ov(l,e,w){let u=new l._zod.constr(e??l._zod.def);if(!e||w?.parent)u._zod.parent=l;return u}function _r(l){let e=l;if(!e)return{};if(typeof e==="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");e.error=e.message}if(delete e.message,typeof e.error==="string")return{...e,error:()=>e.error};return e}function KK(l){let e;return new Proxy({},{get(w,u,n){return e??(e=l()),Reflect.get(e,u,n)},set(w,u,n,H){return e??(e=l()),Reflect.set(e,u,n,H)},has(w,u){return e??(e=l()),Reflect.has(e,u)},deleteProperty(w,u){return e??(e=l()),Reflect.deleteProperty(e,u)},ownKeys(w){return e??(e=l()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(w,u){return e??(e=l()),Reflect.getOwnPropertyDescriptor(e,u)},defineProperty(w,u,n){return e??(e=l()),Reflect.defineProperty(e,u,n)}})}function o9(l){if(typeof l==="bigint")return l.toString()+"n";if(typeof l==="string")return`"${l}"`;return`${l}`}function C8(l){return Object.keys(l).filter((e)=>{return l[e]._zod.optin==="optional"&&l[e]._zod.optout==="optional"})}var l9={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},v9={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function UK(l,e){let w=l._zod.def,u=w.checks;if(u&&u.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let H=X0(l._zod.def,{get shape(){let O={};for(let q in e){if(!(q in w.shape))throw Error(`Unrecognized key: "${q}"`);if(!e[q])continue;O[q]=w.shape[q]}return X1(this,"shape",O),O},checks:[]});return ov(l,H)}function $K(l,e){let w=l._zod.def,u=w.checks;if(u&&u.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let H=X0(l._zod.def,{get shape(){let O={...l._zod.def.shape};for(let q in e){if(!(q in w.shape))throw Error(`Unrecognized key: "${q}"`);if(!e[q])continue;delete O[q]}return X1(this,"shape",O),O},checks:[]});return ov(l,H)}function mK(l,e){if(!Ue(e))throw Error("Invalid input to extend: expected a plain object");let w=l._zod.def.checks;if(w&&w.length>0){let H=l._zod.def.shape;for(let O in e)if(Object.getOwnPropertyDescriptor(H,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let n=X0(l._zod.def,{get shape(){let H={...l._zod.def.shape,...e};return X1(this,"shape",H),H}});return ov(l,n)}function LK(l,e){if(!Ue(e))throw Error("Invalid input to safeExtend: expected a plain object");let w=X0(l._zod.def,{get shape(){let u={...l._zod.def.shape,...e};return X1(this,"shape",u),u}});return ov(l,w)}function IK(l,e){if(l._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let w=X0(l._zod.def,{get shape(){let u={...l._zod.def.shape,...e._zod.def.shape};return X1(this,"shape",u),u},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ov(l,w)}function FK(l,e,w){let n=e._zod.def.checks;if(n&&n.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=X0(e._zod.def,{get shape(){let q=e._zod.def.shape,R={...q};if(w)for(let X in w){if(!(X in q))throw Error(`Unrecognized key: "${X}"`);if(!w[X])continue;R[X]=l?new l({type:"optional",innerType:q[X]}):q[X]}else for(let X in q)R[X]=l?new l({type:"optional",innerType:q[X]}):q[X];return X1(this,"shape",R),R},checks:[]});return ov(e,O)}function NK(l,e,w){let u=X0(e._zod.def,{get shape(){let n=e._zod.def.shape,H={...n};if(w)for(let O in w){if(!(O in H))throw Error(`Unrecognized key: "${O}"`);if(!w[O])continue;H[O]=new l({type:"nonoptional",innerType:n[O]})}else for(let O in n)H[O]=new l({type:"nonoptional",innerType:n[O]});return X1(this,"shape",H),H}});return ov(e,u)}function Y1(l,e=0){if(l.aborted===!0)return!0;for(let w=e;w<l.issues.length;w++)if(l.issues[w]?.continue!==!0)return!0;return!1}function T8(l,e=0){if(l.aborted===!0)return!0;for(let w=e;w<l.issues.length;w++)if(l.issues[w]?.continue===!1)return!0;return!1}function Mw(l,e){return e.map((w)=>{var u;return(u=w).path??(u.path=[]),w.path.unshift(l),w})}function Hw(l){return typeof l==="string"?l:l?.message}function Dv(l,e,w){let u=l.message?l.message:Hw(l.inst?._zod.def?.error?.(l))??Hw(e?.error?.(l))??Hw(w.customError?.(l))??Hw(w.localeError?.(l))??"Invalid input",{inst:n,continue:H,input:O,...q}=l;if(q.path??(q.path=[]),q.message=u,e?.reportInput)q.input=O;return q}function e9(l){if(l instanceof Set)return"set";if(l instanceof Map)return"map";if(l instanceof File)return"file";return"unknown"}function Ww(l){if(Array.isArray(l))return"array";if(typeof l==="string")return"string";return"unknown"}function BK(l){let e=typeof l;switch(e){case"number":return Number.isNaN(l)?"nan":"number";case"object":{if(l===null)return"null";if(Array.isArray(l))return"array";let w=l;if(w&&Object.getPrototypeOf(w)!==Object.prototype&&"constructor"in w&&w.constructor)return w.constructor.name}}return e}function ch(...l){let[e,w,u]=l;if(typeof e==="string")return{message:e,code:"custom",input:w,inst:u};return{...e}}function ZK(l){return Object.entries(l).filter(([e,w])=>{return Number.isNaN(Number.parseInt(e,10))}).map((e)=>e[1])}function h9(l){let e=atob(l),w=new Uint8Array(e.length);for(let u=0;u<e.length;u++)w[u]=e.charCodeAt(u);return w}function b9(l){let e="";for(let w=0;w<l.length;w++)e+=String.fromCharCode(l[w]);return btoa(e)}function xK(l){let e=l.replace(/-/g,"+").replace(/_/g,"/"),w="=".repeat((4-e.length%4)%4);return h9(e+w)}function CK(l){return b9(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function TK(l){let e=l.replace(/^0x/,"");if(e.length%2!==0)throw Error("Invalid hex string length");let w=new Uint8Array(e.length/2);for(let u=0;u<e.length;u+=2)w[u/2]=Number.parseInt(e.slice(u,u+2),16);return w}function SK(l){return Array.from(l).map((e)=>e.toString(16).padStart(2,"0")).join("")}class w9{constructor(...l){}}var u9=(l,e)=>{l.name="$ZodError",Object.defineProperty(l,"_zod",{value:l._zod,enumerable:!1}),Object.defineProperty(l,"issues",{value:e,enumerable:!1}),l.message=JSON.stringify(e,Eh,2),Object.defineProperty(l,"toString",{value:()=>l.message,enumerable:!1})},i2=E("$ZodError",u9),S8=E("$ZodError",u9,{Parent:Error});function i9(l,e=(w)=>w.message){let w={},u=[];for(let n of l.issues)if(n.path.length>0)w[n.path[0]]=w[n.path[0]]||[],w[n.path[0]].push(e(n));else u.push(e(n));return{formErrors:u,fieldErrors:w}}function n9(l,e=(w)=>w.message){let w={_errors:[]},u=(n,H=[])=>{for(let O of n.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((q)=>u({issues:q},[...H,...O.path]));else if(O.code==="invalid_key")u({issues:O.issues},[...H,...O.path]);else if(O.code==="invalid_element")u({issues:O.issues},[...H,...O.path]);else{let q=[...H,...O.path];if(q.length===0)w._errors.push(e(O));else{let R=w,X=0;while(X<q.length){let G=q[X];if(X!==q.length-1)R[G]=R[G]||{_errors:[]};else R[G]=R[G]||{_errors:[]},R[G]._errors.push(e(O));R=R[G],X++}}}};return u(l),w}var n2=(l)=>(e,w,u,n)=>{let H=u?{...u,async:!1}:{async:!1},O=e._zod.run({value:w,issues:[]},H);if(O instanceof Promise)throw new R0;if(O.issues.length){let q=new(n?.Err??l)(O.issues.map((R)=>Dv(R,H,G0())));throw u2(q,n?.callee),q}return O.value};var P2=(l)=>async(e,w,u,n)=>{let H=u?{...u,async:!0}:{async:!0},O=e._zod.run({value:w,issues:[]},H);if(O instanceof Promise)O=await O;if(O.issues.length){let q=new(n?.Err??l)(O.issues.map((R)=>Dv(R,H,G0())));throw u2(q,n?.callee),q}return O.value};var Rw=(l)=>(e,w,u)=>{let n=u?{...u,async:!1}:{async:!1},H=e._zod.run({value:w,issues:[]},n);if(H instanceof Promise)throw new R0;return H.issues.length?{success:!1,error:new(l??i2)(H.issues.map((O)=>Dv(O,n,G0())))}:{success:!0,data:H.value}},P9=Rw(S8),Gw=(l)=>async(e,w,u)=>{let n=u?{...u,async:!0}:{async:!0},H=e._zod.run({value:w,issues:[]},n);if(H instanceof Promise)H=await H;return H.issues.length?{success:!1,error:new l(H.issues.map((O)=>Dv(O,n,G0())))}:{success:!0,data:H.value}},H9=Gw(S8),O9=(l)=>(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return n2(l)(e,w,n)};var q9=(l)=>(e,w,u)=>{return n2(l)(e,w,u)};var t9=(l)=>async(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return P2(l)(e,w,n)};var A9=(l)=>async(e,w,u)=>{return P2(l)(e,w,u)};var M9=(l)=>(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return Rw(l)(e,w,n)};var W9=(l)=>(e,w,u)=>{return Rw(l)(e,w,u)};var R9=(l)=>async(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return Gw(l)(e,w,n)};var G9=(l)=>async(e,w,u)=>{return Gw(l)(e,w,u)};var X9=/^[cC][0-9a-z]{6,}$/,Y9=/^[0-9a-z]+$/,J9=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Q9=/^[0-9a-vA-V]{20}$/,z9=/^[A-Za-z0-9]{27}$/,K9=/^[a-zA-Z0-9_-]{21}$/,U9=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var $9=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,k8=(l)=>{if(!l)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${l}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var m9=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var DK="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function L9(){return new RegExp(DK,"u")}var I9=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,F9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var N9=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,B9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Z9=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,D8=/^[A-Za-z0-9_-]*$/;var x9=/^https?$/,C9=/^\+[1-9]\d{6,14}$/,T9="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",S9=new RegExp(`^${T9}$`);function k9(l){return typeof l.precision==="number"?l.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":l.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${l.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function D9(l){return new RegExp(`^${k9(l)}$`)}function V9(l){let e=k9({precision:l.precision}),w=["Z"];if(l.local)w.push("");if(l.offset)w.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let u=`${e}(?:${w.join("|")})`;return new RegExp(`^${T9}T(?:${u})$`)}var _9=(l)=>{let e=l?`[\\s\\S]{${l?.minimum??0},${l?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var y9=/^[^A-Z]*$/,E9=/^[^a-z]*$/;var Rl=E("$ZodCheck",(l,e)=>{var w;l._zod??(l._zod={}),l._zod.def=e,(w=l._zod).onattach??(w.onattach=[])});var c9=E("$ZodCheckMaxLength",(l,e)=>{var w;Rl.init(l,e),(w=l._zod.def).when??(w.when=(u)=>{let n=u.value;return!tw(n)&&n.length!==void 0}),l._zod.onattach.push((u)=>{let n=u._zod.bag.maximum??Number.POSITIVE_INFINITY;if(e.maximum<n)u._zod.bag.maximum=e.maximum}),l._zod.check=(u)=>{let n=u.value;if(n.length<=e.maximum)return;let O=Ww(n);u.issues.push({origin:O,code:"too_big",maximum:e.maximum,inclusive:!0,input:n,inst:l,continue:!e.abort})}}),a9=E("$ZodCheckMinLength",(l,e)=>{var w;Rl.init(l,e),(w=l._zod.def).when??(w.when=(u)=>{let n=u.value;return!tw(n)&&n.length!==void 0}),l._zod.onattach.push((u)=>{let n=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(e.minimum>n)u._zod.bag.minimum=e.minimum}),l._zod.check=(u)=>{let n=u.value;if(n.length>=e.minimum)return;let O=Ww(n);u.issues.push({origin:O,code:"too_small",minimum:e.minimum,inclusive:!0,input:n,inst:l,continue:!e.abort})}}),j9=E("$ZodCheckLengthEquals",(l,e)=>{var w;Rl.init(l,e),(w=l._zod.def).when??(w.when=(u)=>{let n=u.value;return!tw(n)&&n.length!==void 0}),l._zod.onattach.push((u)=>{let n=u._zod.bag;n.minimum=e.length,n.maximum=e.length,n.length=e.length}),l._zod.check=(u)=>{let n=u.value,H=n.length;if(H===e.length)return;let O=Ww(n),q=H>e.length;u.issues.push({origin:O,...q?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:u.value,inst:l,continue:!e.abort})}}),Xw=E("$ZodCheckStringFormat",(l,e)=>{var w,u;if(Rl.init(l,e),l._zod.onattach.push((n)=>{let H=n._zod.bag;if(H.format=e.format,e.pattern)H.patterns??(H.patterns=new Set),H.patterns.add(e.pattern)}),e.pattern)(w=l._zod).check??(w.check=(n)=>{if(e.pattern.lastIndex=0,e.pattern.test(n.value))return;n.issues.push({origin:"string",code:"invalid_format",format:e.format,input:n.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:l,continue:!e.abort})});else(u=l._zod).check??(u.check=()=>{})}),f9=E("$ZodCheckRegex",(l,e)=>{Xw.init(l,e),l._zod.check=(w)=>{if(e.pattern.lastIndex=0,e.pattern.test(w.value))return;w.issues.push({origin:"string",code:"invalid_format",format:"regex",input:w.value,pattern:e.pattern.toString(),inst:l,continue:!e.abort})}}),p9=E("$ZodCheckLowerCase",(l,e)=>{e.pattern??(e.pattern=y9),Xw.init(l,e)}),d9=E("$ZodCheckUpperCase",(l,e)=>{e.pattern??(e.pattern=E9),Xw.init(l,e)}),s9=E("$ZodCheckIncludes",(l,e)=>{Rl.init(l,e);let w=Y0(e.includes),u=new RegExp(typeof e.position==="number"?`^.{${e.position}}${w}`:w);e.pattern=u,l._zod.onattach.push((n)=>{let H=n._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(u)}),l._zod.check=(n)=>{if(n.value.includes(e.includes,e.position))return;n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:n.value,inst:l,continue:!e.abort})}}),r7=E("$ZodCheckStartsWith",(l,e)=>{Rl.init(l,e);let w=new RegExp(`^${Y0(e.prefix)}.*`);e.pattern??(e.pattern=w),l._zod.onattach.push((u)=>{let n=u._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),l._zod.check=(u)=>{if(u.value.startsWith(e.prefix))return;u.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:u.value,inst:l,continue:!e.abort})}}),g7=E("$ZodCheckEndsWith",(l,e)=>{Rl.init(l,e);let w=new RegExp(`.*${Y0(e.suffix)}$`);e.pattern??(e.pattern=w),l._zod.onattach.push((u)=>{let n=u._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),l._zod.check=(u)=>{if(u.value.endsWith(e.suffix))return;u.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:u.value,inst:l,continue:!e.abort})}});var o7=E("$ZodCheckOverwrite",(l,e)=>{Rl.init(l,e),l._zod.check=(w)=>{w.value=e.tx(w.value)}});class V8{constructor(l=[]){if(this.content=[],this.indent=0,this)this.args=l}indented(l){this.indent+=1,l(this),this.indent-=1}write(l){if(typeof l==="function"){l(this,{execution:"sync"}),l(this,{execution:"async"});return}let w=l.split(`
`).filter((H)=>H),u=Math.min(...w.map((H)=>H.length-H.trimStart().length)),n=w.map((H)=>H.slice(u)).map((H)=>" ".repeat(this.indent*2)+H);for(let H of n)this.content.push(H)}compile(){let l=Function,e=this?.args,u=[...(this?.content??[""]).map((n)=>`  ${n}`)];return new l(...e,u.join(`
`))}}var v7={major:4,minor:4,patch:2};var yg=E("$ZodType",(l,e)=>{var w;l??(l={}),l._zod.def=e,l._zod.bag=l._zod.bag||{},l._zod.version=v7;let u=[...l._zod.def.checks??[]];if(l._zod.traits.has("$ZodCheck"))u.unshift(l);for(let n of u)for(let H of n._zod.onattach)H(l);if(u.length===0)(w=l._zod).deferred??(w.deferred=[]),l._zod.deferred?.push(()=>{l._zod.run=l._zod.parse});else{let n=(O,q,R)=>{let X=Y1(O),G;for(let A of q){if(A._zod.def.when){if(T8(O))continue;if(!A._zod.def.when(O))continue}else if(X)continue;let Y=O.issues.length,L=A._zod.check(O);if(L instanceof Promise&&R?.async===!1)throw new R0;if(G||L instanceof Promise)G=(G??Promise.resolve()).then(async()=>{if(await L,O.issues.length===Y)return;if(!X)X=Y1(O,Y)});else{if(O.issues.length===Y)continue;if(!X)X=Y1(O,Y)}}if(G)return G.then(()=>{return O});return O},H=(O,q,R)=>{if(Y1(O))return O.aborted=!0,O;let X=n(q,u,R);if(X instanceof Promise){if(R.async===!1)throw new R0;return X.then((G)=>l._zod.parse(G,R))}return l._zod.parse(X,R)};l._zod.run=(O,q)=>{if(q.skipChecks)return l._zod.parse(O,q);if(q.direction==="backward"){let X=l._zod.parse({value:O.value,issues:[]},{...q,skipChecks:!0});if(X instanceof Promise)return X.then((G)=>{return H(G,O,q)});return H(X,O,q)}let R=l._zod.parse(O,q);if(R instanceof Promise){if(q.async===!1)throw new R0;return R.then((X)=>n(X,u,q))}return n(R,u,q)}}Pg(l,"~standard",()=>({validate:(n)=>{try{let H=P9(l,n);return H.success?{value:H.data}:{issues:H.error?.issues}}catch(H){return H9(l,n).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),t2=E("$ZodString",(l,e)=>{yg.init(l,e),l._zod.pattern=[...l?._zod.bag?.patterns??[]].pop()??_9(l._zod.bag),l._zod.parse=(w,u)=>{if(e.coerce)try{w.value=String(w.value)}catch(n){}if(typeof w.value==="string")return w;return w.issues.push({expected:"string",code:"invalid_type",input:w.value,inst:l}),w}}),Lg=E("$ZodStringFormat",(l,e)=>{Xw.init(l,e),t2.init(l,e)}),H7=E("$ZodGUID",(l,e)=>{e.pattern??(e.pattern=$9),Lg.init(l,e)}),O7=E("$ZodUUID",(l,e)=>{if(e.version){let u={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(u===void 0)throw Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=k8(u))}else e.pattern??(e.pattern=k8());Lg.init(l,e)}),q7=E("$ZodEmail",(l,e)=>{e.pattern??(e.pattern=m9),Lg.init(l,e)}),t7=E("$ZodURL",(l,e)=>{Lg.init(l,e),l._zod.check=(w)=>{try{let u=w.value.trim();if(!e.normalize&&e.protocol?.source===x9.source){if(!/^https?:\/\//i.test(u)){w.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:w.value,inst:l,continue:!e.abort});return}}let n=new URL(u);if(e.hostname){if(e.hostname.lastIndex=0,!e.hostname.test(n.hostname))w.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:w.value,inst:l,continue:!e.abort})}if(e.protocol){if(e.protocol.lastIndex=0,!e.protocol.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol))w.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:w.value,inst:l,continue:!e.abort})}if(e.normalize)w.value=n.href;else w.value=u;return}catch(u){w.issues.push({code:"invalid_format",format:"url",input:w.value,inst:l,continue:!e.abort})}}}),A7=E("$ZodEmoji",(l,e)=>{e.pattern??(e.pattern=L9()),Lg.init(l,e)}),M7=E("$ZodNanoID",(l,e)=>{e.pattern??(e.pattern=K9),Lg.init(l,e)}),W7=E("$ZodCUID",(l,e)=>{e.pattern??(e.pattern=X9),Lg.init(l,e)}),R7=E("$ZodCUID2",(l,e)=>{e.pattern??(e.pattern=Y9),Lg.init(l,e)}),G7=E("$ZodULID",(l,e)=>{e.pattern??(e.pattern=J9),Lg.init(l,e)}),X7=E("$ZodXID",(l,e)=>{e.pattern??(e.pattern=Q9),Lg.init(l,e)}),Y7=E("$ZodKSUID",(l,e)=>{e.pattern??(e.pattern=z9),Lg.init(l,e)}),J7=E("$ZodISODateTime",(l,e)=>{e.pattern??(e.pattern=V9(e)),Lg.init(l,e)}),Q7=E("$ZodISODate",(l,e)=>{e.pattern??(e.pattern=S9),Lg.init(l,e)}),z7=E("$ZodISOTime",(l,e)=>{e.pattern??(e.pattern=D9(e)),Lg.init(l,e)}),K7=E("$ZodISODuration",(l,e)=>{e.pattern??(e.pattern=U9),Lg.init(l,e)}),U7=E("$ZodIPv4",(l,e)=>{e.pattern??(e.pattern=I9),Lg.init(l,e),l._zod.bag.format="ipv4"}),$7=E("$ZodIPv6",(l,e)=>{e.pattern??(e.pattern=F9),Lg.init(l,e),l._zod.bag.format="ipv6",l._zod.check=(w)=>{try{new URL(`http://[${w.value}]`)}catch{w.issues.push({code:"invalid_format",format:"ipv6",input:w.value,inst:l,continue:!e.abort})}}});var m7=E("$ZodCIDRv4",(l,e)=>{e.pattern??(e.pattern=N9),Lg.init(l,e)}),L7=E("$ZodCIDRv6",(l,e)=>{e.pattern??(e.pattern=B9),Lg.init(l,e),l._zod.check=(w)=>{let u=w.value.split("/");try{if(u.length!==2)throw Error();let[n,H]=u;if(!H)throw Error();let O=Number(H);if(`${O}`!==H)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${n}]`)}catch{w.issues.push({code:"invalid_format",format:"cidrv6",input:w.value,inst:l,continue:!e.abort})}}});function I7(l){if(l==="")return!0;if(/\s/.test(l))return!1;if(l.length%4!==0)return!1;try{return atob(l),!0}catch{return!1}}var F7=E("$ZodBase64",(l,e)=>{e.pattern??(e.pattern=Z9),Lg.init(l,e),l._zod.bag.contentEncoding="base64",l._zod.check=(w)=>{if(I7(w.value))return;w.issues.push({code:"invalid_format",format:"base64",input:w.value,inst:l,continue:!e.abort})}});function VK(l){if(!D8.test(l))return!1;let e=l.replace(/[-_]/g,(u)=>u==="-"?"+":"/"),w=e.padEnd(Math.ceil(e.length/4)*4,"=");return I7(w)}var N7=E("$ZodBase64URL",(l,e)=>{e.pattern??(e.pattern=D8),Lg.init(l,e),l._zod.bag.contentEncoding="base64url",l._zod.check=(w)=>{if(VK(w.value))return;w.issues.push({code:"invalid_format",format:"base64url",input:w.value,inst:l,continue:!e.abort})}}),B7=E("$ZodE164",(l,e)=>{e.pattern??(e.pattern=C9),Lg.init(l,e)});function _K(l,e=null){try{let w=l.split(".");if(w.length!==3)return!1;let[u]=w;if(!u)return!1;let n=JSON.parse(atob(u));if("typ"in n&&n?.typ!=="JWT")return!1;if(!n.alg)return!1;if(e&&(!("alg"in n)||n.alg!==e))return!1;return!0}catch{return!1}}var Z7=E("$ZodJWT",(l,e)=>{Lg.init(l,e),l._zod.check=(w)=>{if(_K(w.value,e.alg))return;w.issues.push({code:"invalid_format",format:"jwt",input:w.value,inst:l,continue:!e.abort})}});var x7=E("$ZodUnknown",(l,e)=>{yg.init(l,e),l._zod.parse=(w)=>w}),C7=E("$ZodNever",(l,e)=>{yg.init(l,e),l._zod.parse=(w,u)=>{return w.issues.push({expected:"never",code:"invalid_type",input:w.value,inst:l}),w}});function e7(l,e,w){if(l.issues.length)e.issues.push(...Mw(w,l.issues));e.value[w]=l.value}var T7=E("$ZodArray",(l,e)=>{yg.init(l,e),l._zod.parse=(w,u)=>{let n=w.value;if(!Array.isArray(n))return w.issues.push({expected:"array",code:"invalid_type",input:n,inst:l}),w;w.value=Array(n.length);let H=[];for(let O=0;O<n.length;O++){let q=n[O],R=e.element._zod.run({value:q,issues:[]},u);if(R instanceof Promise)H.push(R.then((X)=>e7(X,w,O)));else e7(R,w,O)}if(H.length)return Promise.all(H).then(()=>w);return w}});function q2(l,e,w,u,n,H){let O=w in u;if(l.issues.length){if(n&&H&&!O)return;e.issues.push(...Mw(w,l.issues))}if(!O&&!n){if(!l.issues.length)e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[w]});return}if(l.value===void 0){if(O)e.value[w]=void 0}else e.value[w]=l.value}function S7(l){let e=Object.keys(l.shape);for(let u of e)if(!l.shape?.[u]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${u}": expected a Zod schema`);let w=C8(l.shape);return{...l,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(w)}}function k7(l,e,w,u,n,H){let O=[],q=n.keySet,R=n.catchall._zod,X=R.def.type,G=R.optin==="optional",A=R.optout==="optional";for(let Y in e){if(Y==="__proto__")continue;if(q.has(Y))continue;if(X==="never"){O.push(Y);continue}let L=R.run({value:e[Y],issues:[]},u);if(L instanceof Promise)l.push(L.then((S)=>q2(S,w,Y,e,G,A)));else q2(L,w,Y,e,G,A)}if(O.length)w.issues.push({code:"unrecognized_keys",keys:O,input:e,inst:H});if(!l.length)return w;return Promise.all(l).then(()=>{return w})}var yK=E("$ZodObject",(l,e)=>{if(yg.init(l,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){let q=e.shape;Object.defineProperty(e,"shape",{get:()=>{let R={...q};return Object.defineProperty(e,"shape",{value:R}),R}})}let u=qw(()=>S7(e));Pg(l._zod,"propValues",()=>{let q=e.shape,R={};for(let X in q){let G=q[X]._zod;if(G.values){R[X]??(R[X]=new Set);for(let A of G.values)R[X].add(A)}}return R});let n=yh,H=e.catchall,O;l._zod.parse=(q,R)=>{O??(O=u.value);let X=q.value;if(!n(X))return q.issues.push({expected:"object",code:"invalid_type",input:X,inst:l}),q;q.value={};let G=[],A=O.shape;for(let Y of O.keys){let L=A[Y],S=L._zod.optin==="optional",T=L._zod.optout==="optional",_=L._zod.run({value:X[Y],issues:[]},R);if(_ instanceof Promise)G.push(_.then((rr)=>q2(rr,q,Y,X,S,T)));else q2(_,q,Y,X,S,T)}if(!H)return G.length?Promise.all(G).then(()=>q):q;return k7(G,X,q,R,u.value,l)}}),D7=E("$ZodObjectJIT",(l,e)=>{yK.init(l,e);let w=l._zod.parse,u=qw(()=>S7(e)),n=(Y)=>{let L=new V8(["shape","payload","ctx"]),S=u.value,T=(vr)=>{let a=w2(vr);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};L.write("const input = payload.value;");let _=Object.create(null),rr=0;for(let vr of S.keys)_[vr]=`key_${rr++}`;L.write("const newResult = {};");for(let vr of S.keys){let a=_[vr],p=w2(vr),lr=Y[vr],B=lr?._zod?.optin==="optional",y=lr?._zod?.optout==="optional";if(L.write(`const ${a} = ${T(vr)};`),B&&y)L.write(`
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
        
      `);else if(!B)L.write(`
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
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let nr=L.compile();return(vr,a)=>nr(Y,vr,a)},H,O=yh,q=!_h.jitless,X=q&&Z8.value,G=e.catchall,A;l._zod.parse=(Y,L)=>{A??(A=u.value);let S=Y.value;if(!O(S))return Y.issues.push({expected:"object",code:"invalid_type",input:S,inst:l}),Y;if(q&&X&&L?.async===!1&&L.jitless!==!0){if(!H)H=n(e.shape);if(Y=H(Y,L),!G)return Y;return k7([],S,Y,L,A,l)}return w(Y,L)}});function h7(l,e,w,u){for(let H of l)if(H.issues.length===0)return e.value=H.value,e;let n=l.filter((H)=>!Y1(H));if(n.length===1)return e.value=n[0].value,n[0];return e.issues.push({code:"invalid_union",input:e.value,inst:w,errors:l.map((H)=>H.issues.map((O)=>Dv(O,u,G0())))}),e}var V7=E("$ZodUnion",(l,e)=>{yg.init(l,e),Pg(l._zod,"optin",()=>e.options.some((u)=>u._zod.optin==="optional")?"optional":void 0),Pg(l._zod,"optout",()=>e.options.some((u)=>u._zod.optout==="optional")?"optional":void 0),Pg(l._zod,"values",()=>{if(e.options.every((u)=>u._zod.values))return new Set(e.options.flatMap((u)=>Array.from(u._zod.values)));return}),Pg(l._zod,"pattern",()=>{if(e.options.every((u)=>u._zod.pattern)){let u=e.options.map((n)=>n._zod.pattern);return new RegExp(`^(${u.map((n)=>Aw(n.source)).join("|")})$`)}return});let w=e.options.length===1?e.options[0]._zod.run:null;l._zod.parse=(u,n)=>{if(w)return w(u,n);let H=!1,O=[];for(let q of e.options){let R=q._zod.run({value:u.value,issues:[]},n);if(R instanceof Promise)O.push(R),H=!0;else{if(R.issues.length===0)return R;O.push(R)}}if(!H)return h7(O,u,l,n);return Promise.all(O).then((q)=>{return h7(q,u,l,n)})}});var _7=E("$ZodIntersection",(l,e)=>{yg.init(l,e),l._zod.parse=(w,u)=>{let n=w.value,H=e.left._zod.run({value:n,issues:[]},u),O=e.right._zod.run({value:n,issues:[]},u);if(H instanceof Promise||O instanceof Promise)return Promise.all([H,O]).then(([R,X])=>{return b7(w,R,X)});return b7(w,H,O)}});function _8(l,e){if(l===e)return{valid:!0,data:l};if(l instanceof Date&&e instanceof Date&&+l===+e)return{valid:!0,data:l};if(Ue(l)&&Ue(e)){let w=Object.keys(e),u=Object.keys(l).filter((H)=>w.indexOf(H)!==-1),n={...l,...e};for(let H of u){let O=_8(l[H],e[H]);if(!O.valid)return{valid:!1,mergeErrorPath:[H,...O.mergeErrorPath]};n[H]=O.data}return{valid:!0,data:n}}if(Array.isArray(l)&&Array.isArray(e)){if(l.length!==e.length)return{valid:!1,mergeErrorPath:[]};let w=[];for(let u=0;u<l.length;u++){let n=l[u],H=e[u],O=_8(n,H);if(!O.valid)return{valid:!1,mergeErrorPath:[u,...O.mergeErrorPath]};w.push(O.data)}return{valid:!0,data:w}}return{valid:!1,mergeErrorPath:[]}}function b7(l,e,w){let u=new Map,n;for(let q of e.issues)if(q.code==="unrecognized_keys"){n??(n=q);for(let R of q.keys){if(!u.has(R))u.set(R,{});u.get(R).l=!0}}else l.issues.push(q);for(let q of w.issues)if(q.code==="unrecognized_keys")for(let R of q.keys){if(!u.has(R))u.set(R,{});u.get(R).r=!0}else l.issues.push(q);let H=[...u].filter(([,q])=>q.l&&q.r).map(([q])=>q);if(H.length&&n)l.issues.push({...n,keys:H});if(Y1(l))return l;let O=_8(e.value,w.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return l.value=O.data,l}var y7=E("$ZodEnum",(l,e)=>{yg.init(l,e);let w=Ow(e.entries),u=new Set(w);l._zod.values=u,l._zod.pattern=new RegExp(`^(${w.filter((n)=>x8.has(typeof n)).map((n)=>typeof n==="string"?Y0(n):n.toString()).join("|")})$`),l._zod.parse=(n,H)=>{let O=n.value;if(u.has(O))return n;return n.issues.push({code:"invalid_value",values:w,input:O,inst:l}),n}}),E7=E("$ZodLiteral",(l,e)=>{if(yg.init(l,e),e.values.length===0)throw Error("Cannot create literal schema with no valid values");let w=new Set(e.values);l._zod.values=w,l._zod.pattern=new RegExp(`^(${e.values.map((u)=>typeof u==="string"?Y0(u):u?Y0(u.toString()):String(u)).join("|")})$`),l._zod.parse=(u,n)=>{let H=u.value;if(w.has(H))return u;return u.issues.push({code:"invalid_value",values:e.values,input:H,inst:l}),u}});var c7=E("$ZodTransform",(l,e)=>{yg.init(l,e),l._zod.parse=(w,u)=>{if(u.direction==="backward")throw new Pw(l.constructor.name);let n=e.transform(w.value,w);if(u.async)return(n instanceof Promise?n:Promise.resolve(n)).then((O)=>{return w.value=O,w});if(n instanceof Promise)throw new R0;return w.value=n,w}});function w7(l,e){if(l.issues.length&&e===void 0)return{issues:[],value:void 0};return l}var y8=E("$ZodOptional",(l,e)=>{yg.init(l,e),l._zod.optin="optional",l._zod.optout="optional",Pg(l._zod,"values",()=>{return e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0}),Pg(l._zod,"pattern",()=>{let w=e.innerType._zod.pattern;return w?new RegExp(`^(${Aw(w.source)})?$`):void 0}),l._zod.parse=(w,u)=>{if(e.innerType._zod.optin==="optional"){let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>w7(H,w.value));return w7(n,w.value)}if(w.value===void 0)return w;return e.innerType._zod.run(w,u)}}),a7=E("$ZodExactOptional",(l,e)=>{y8.init(l,e),Pg(l._zod,"values",()=>e.innerType._zod.values),Pg(l._zod,"pattern",()=>e.innerType._zod.pattern),l._zod.parse=(w,u)=>{return e.innerType._zod.run(w,u)}}),j7=E("$ZodNullable",(l,e)=>{yg.init(l,e),Pg(l._zod,"optin",()=>e.innerType._zod.optin),Pg(l._zod,"optout",()=>e.innerType._zod.optout),Pg(l._zod,"pattern",()=>{let w=e.innerType._zod.pattern;return w?new RegExp(`^(${Aw(w.source)}|null)$`):void 0}),Pg(l._zod,"values",()=>{return e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0}),l._zod.parse=(w,u)=>{if(w.value===null)return w;return e.innerType._zod.run(w,u)}}),f7=E("$ZodDefault",(l,e)=>{yg.init(l,e),l._zod.optin="optional",Pg(l._zod,"values",()=>e.innerType._zod.values),l._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);if(w.value===void 0)return w.value=e.defaultValue,w;let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>u7(H,e));return u7(n,e)}});function u7(l,e){if(l.value===void 0)l.value=e.defaultValue;return l}var p7=E("$ZodPrefault",(l,e)=>{yg.init(l,e),l._zod.optin="optional",Pg(l._zod,"values",()=>e.innerType._zod.values),l._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);if(w.value===void 0)w.value=e.defaultValue;return e.innerType._zod.run(w,u)}}),d7=E("$ZodNonOptional",(l,e)=>{yg.init(l,e),Pg(l._zod,"values",()=>{let w=e.innerType._zod.values;return w?new Set([...w].filter((u)=>u!==void 0)):void 0}),l._zod.parse=(w,u)=>{let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>i7(H,l));return i7(n,l)}});function i7(l,e){if(!l.issues.length&&l.value===void 0)l.issues.push({code:"invalid_type",expected:"nonoptional",input:l.value,inst:e});return l}var s7=E("$ZodCatch",(l,e)=>{yg.init(l,e),Pg(l._zod,"optin",()=>e.innerType._zod.optin),Pg(l._zod,"optout",()=>e.innerType._zod.optout),Pg(l._zod,"values",()=>e.innerType._zod.values),l._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>{if(w.value=H.value,H.issues.length)w.value=e.catchValue({...w,error:{issues:H.issues.map((O)=>Dv(O,u,G0()))},input:w.value}),w.issues=[];return w});if(w.value=n.value,n.issues.length)w.value=e.catchValue({...w,error:{issues:n.issues.map((H)=>Dv(H,u,G0()))},input:w.value}),w.issues=[];return w}});var rR=E("$ZodPipe",(l,e)=>{yg.init(l,e),Pg(l._zod,"values",()=>e.in._zod.values),Pg(l._zod,"optin",()=>e.in._zod.optin),Pg(l._zod,"optout",()=>e.out._zod.optout),Pg(l._zod,"propValues",()=>e.in._zod.propValues),l._zod.parse=(w,u)=>{if(u.direction==="backward"){let H=e.out._zod.run(w,u);if(H instanceof Promise)return H.then((O)=>O2(O,e.in,u));return O2(H,e.in,u)}let n=e.in._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>O2(H,e.out,u));return O2(n,e.out,u)}});function O2(l,e,w){if(l.issues.length)return l.aborted=!0,l;return e._zod.run({value:l.value,issues:l.issues},w)}var gR=E("$ZodReadonly",(l,e)=>{yg.init(l,e),Pg(l._zod,"propValues",()=>e.innerType._zod.propValues),Pg(l._zod,"values",()=>e.innerType._zod.values),Pg(l._zod,"optin",()=>e.innerType?._zod?.optin),Pg(l._zod,"optout",()=>e.innerType?._zod?.optout),l._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then(n7);return n7(n)}});function n7(l){return l.value=Object.freeze(l.value),l}var oR=E("$ZodCustom",(l,e)=>{Rl.init(l,e),yg.init(l,e),l._zod.parse=(w,u)=>{return w},l._zod.check=(w)=>{let u=w.value,n=e.fn(u);if(n instanceof Promise)return n.then((H)=>P7(H,w,u,l));P7(n,w,u,l);return}});function P7(l,e,w,u){if(!l){let n={code:"custom",input:w,inst:u,path:[...u._zod.def.path??[]],continue:!u._zod.def.abort};if(u._zod.def.params)n.params=u._zod.def.params;e.issues.push(ch(n))}}var lR,D_g=Symbol("ZodOutput"),V_g=Symbol("ZodInput");class vR{constructor(){this._map=new WeakMap,this._idmap=new Map}add(l,...e){let w=e[0];if(this._map.set(l,w),w&&typeof w==="object"&&"id"in w)this._idmap.set(w.id,l);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(l){let e=this._map.get(l);if(e&&typeof e==="object"&&"id"in e)this._idmap.delete(e.id);return this._map.delete(l),this}get(l){let e=l._zod.parent;if(e){let w={...this.get(e)??{}};delete w.id;let u={...w,...this._map.get(l)};return Object.keys(u).length?u:void 0}return this._map.get(l)}has(l){return this._map.has(l)}}function EK(){return new vR}(lR=globalThis).__zod_globalRegistry??(lR.__zod_globalRegistry=EK());var $e=globalThis.__zod_globalRegistry;function eR(l,e){return new l({type:"string",..._r(e)})}function hR(l,e){return new l({type:"string",format:"email",check:"string_format",abort:!1,..._r(e)})}function E8(l,e){return new l({type:"string",format:"guid",check:"string_format",abort:!1,..._r(e)})}function bR(l,e){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(e)})}function wR(l,e){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(e)})}function uR(l,e){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(e)})}function iR(l,e){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(e)})}function nR(l,e){return new l({type:"string",format:"url",check:"string_format",abort:!1,..._r(e)})}function PR(l,e){return new l({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(e)})}function HR(l,e){return new l({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(e)})}function OR(l,e){return new l({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(e)})}function qR(l,e){return new l({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(e)})}function tR(l,e){return new l({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(e)})}function AR(l,e){return new l({type:"string",format:"xid",check:"string_format",abort:!1,..._r(e)})}function MR(l,e){return new l({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(e)})}function WR(l,e){return new l({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(e)})}function RR(l,e){return new l({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(e)})}function GR(l,e){return new l({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(e)})}function XR(l,e){return new l({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(e)})}function YR(l,e){return new l({type:"string",format:"base64",check:"string_format",abort:!1,..._r(e)})}function JR(l,e){return new l({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(e)})}function QR(l,e){return new l({type:"string",format:"e164",check:"string_format",abort:!1,..._r(e)})}function zR(l,e){return new l({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(e)})}function KR(l,e){return new l({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(e)})}function UR(l,e){return new l({type:"string",format:"date",check:"string_format",..._r(e)})}function $R(l,e){return new l({type:"string",format:"time",check:"string_format",precision:null,..._r(e)})}function mR(l,e){return new l({type:"string",format:"duration",check:"string_format",..._r(e)})}function LR(l){return new l({type:"unknown"})}function IR(l,e){return new l({type:"never",..._r(e)})}function A2(l,e){return new c9({check:"max_length",..._r(e),maximum:l})}function ah(l,e){return new a9({check:"min_length",..._r(e),minimum:l})}function M2(l,e){return new j9({check:"length_equals",..._r(e),length:l})}function c8(l,e){return new f9({check:"string_format",format:"regex",..._r(e),pattern:l})}function a8(l){return new p9({check:"string_format",format:"lowercase",..._r(l)})}function j8(l){return new d9({check:"string_format",format:"uppercase",..._r(l)})}function f8(l,e){return new s9({check:"string_format",format:"includes",..._r(e),includes:l})}function p8(l,e){return new r7({check:"string_format",format:"starts_with",..._r(e),prefix:l})}function d8(l,e){return new g7({check:"string_format",format:"ends_with",..._r(e),suffix:l})}function J1(l){return new o7({check:"overwrite",tx:l})}function s8(l){return J1((e)=>e.normalize(l))}function rP(){return J1((l)=>l.trim())}function gP(){return J1((l)=>l.toLowerCase())}function oP(){return J1((l)=>l.toUpperCase())}function lP(){return J1((l)=>B8(l))}function FR(l,e,w){return new l({type:"array",element:e,..._r(w)})}function NR(l,e,w){return new l({type:"custom",check:"custom",fn:e,..._r(w)})}function BR(l,e){let w=cK((u)=>{return u.addIssue=(n)=>{if(typeof n==="string")u.issues.push(ch(n,u.value,w._zod.def));else{let H=n;if(H.fatal)H.continue=!1;H.code??(H.code="custom"),H.input??(H.input=u.value),H.inst??(H.inst=w),H.continue??(H.continue=!w._zod.def.abort),u.issues.push(ch(H))}},l(u.value,u)},e);return w}function cK(l,e){let w=new Rl({check:"custom",..._r(e)});return w._zod.check=l,w}function vP(l){let e=l?.target??"draft-2020-12";if(e==="draft-4")e="draft-04";if(e==="draft-7")e="draft-07";return{processors:l.processors??{},metadataRegistry:l?.metadata??$e,target:e,unrepresentable:l?.unrepresentable??"throw",override:l?.override??(()=>{}),io:l?.io??"output",counter:0,seen:new Map,cycles:l?.cycles??"ref",reused:l?.reused??"inline",external:l?.external??void 0}}function no(l,e,w={path:[],schemaPath:[]}){var u;let n=l._zod.def,H=e.seen.get(l);if(H){if(H.count++,w.schemaPath.includes(l))H.cycle=w.path;return H.schema}let O={schema:{},count:1,cycle:void 0,path:w.path};e.seen.set(l,O);let q=l._zod.toJSONSchema?.();if(q)O.schema=q;else{let G={...w,schemaPath:[...w.schemaPath,l],path:w.path};if(l._zod.processJSONSchema)l._zod.processJSONSchema(e,O.schema,G);else{let Y=O.schema,L=e.processors[n.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);L(l,e,Y,G)}let A=l._zod.parent;if(A){if(!O.ref)O.ref=A;no(A,e,G),e.seen.get(A).isParent=!0}}let R=e.metadataRegistry.get(l);if(R)Object.assign(O.schema,R);if(e.io==="input"&&Do(l))delete O.schema.examples,delete O.schema.default;if(e.io==="input"&&"_prefault"in O.schema)(u=O.schema).default??(u.default=O.schema._prefault);return delete O.schema._prefault,e.seen.get(l).schema}function eP(l,e){let w=l.seen.get(e);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let u=new Map;for(let O of l.seen.entries()){let q=l.metadataRegistry.get(O[0])?.id;if(q){let R=u.get(q);if(R&&R!==O[0])throw Error(`Duplicate schema id "${q}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);u.set(q,O[0])}}let n=(O)=>{let q=l.target==="draft-2020-12"?"$defs":"definitions";if(l.external){let A=l.external.registry.get(O[0])?.id,Y=l.external.uri??((S)=>S);if(A)return{ref:Y(A)};let L=O[1].defId??O[1].schema.id??`schema${l.counter++}`;return O[1].defId=L,{defId:L,ref:`${Y("__shared")}#/${q}/${L}`}}if(O[1]===w)return{ref:"#"};let X=`${"#"}/${q}/`,G=O[1].schema.id??`__schema${l.counter++}`;return{defId:G,ref:X+G}},H=(O)=>{if(O[1].schema.$ref)return;let q=O[1],{ref:R,defId:X}=n(O);if(q.def={...q.schema},X)q.defId=X;let G=q.schema;for(let A in G)delete G[A];G.$ref=R};if(l.cycles==="throw")for(let O of l.seen.entries()){let q=O[1];if(q.cycle)throw Error(`Cycle detected: #/${q.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of l.seen.entries()){let q=O[1];if(e===O[0]){H(O);continue}if(l.external){let X=l.external.registry.get(O[0])?.id;if(e!==O[0]&&X){H(O);continue}}if(l.metadataRegistry.get(O[0])?.id){H(O);continue}if(q.cycle){H(O);continue}if(q.count>1){if(l.reused==="ref"){H(O);continue}}}}function hP(l,e){let w=l.seen.get(e);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let u=(q)=>{let R=l.seen.get(q);if(R.ref===null)return;let X=R.def??R.schema,G={...X},A=R.ref;if(R.ref=null,A){u(A);let L=l.seen.get(A),S=L.schema;if(S.$ref&&(l.target==="draft-07"||l.target==="draft-04"||l.target==="openapi-3.0"))X.allOf=X.allOf??[],X.allOf.push(S);else Object.assign(X,S);if(Object.assign(X,G),q._zod.parent===A)for(let _ in X){if(_==="$ref"||_==="allOf")continue;if(!(_ in G))delete X[_]}if(S.$ref&&L.def)for(let _ in X){if(_==="$ref"||_==="allOf")continue;if(_ in L.def&&JSON.stringify(X[_])===JSON.stringify(L.def[_]))delete X[_]}}let Y=q._zod.parent;if(Y&&Y!==A){u(Y);let L=l.seen.get(Y);if(L?.schema.$ref){if(X.$ref=L.schema.$ref,L.def)for(let S in X){if(S==="$ref"||S==="allOf")continue;if(S in L.def&&JSON.stringify(X[S])===JSON.stringify(L.def[S]))delete X[S]}}}l.override({zodSchema:q,jsonSchema:X,path:R.path??[]})};for(let q of[...l.seen.entries()].reverse())u(q[0]);let n={};if(l.target==="draft-2020-12")n.$schema="https://json-schema.org/draft/2020-12/schema";else if(l.target==="draft-07")n.$schema="http://json-schema.org/draft-07/schema#";else if(l.target==="draft-04")n.$schema="http://json-schema.org/draft-04/schema#";else if(l.target==="openapi-3.0");if(l.external?.uri){let q=l.external.registry.get(e)?.id;if(!q)throw Error("Schema is missing an `id` property");n.$id=l.external.uri(q)}Object.assign(n,w.def??w.schema);let H=l.metadataRegistry.get(e)?.id;if(H!==void 0&&n.id===H)delete n.id;let O=l.external?.defs??{};for(let q of l.seen.entries()){let R=q[1];if(R.def&&R.defId){if(R.def.id===R.defId)delete R.def.id;O[R.defId]=R.def}}if(l.external);else if(Object.keys(O).length>0)if(l.target==="draft-2020-12")n.$defs=O;else n.definitions=O;try{let q=JSON.parse(JSON.stringify(n));return Object.defineProperty(q,"~standard",{value:{...e["~standard"],jsonSchema:{input:Yw(e,"input",l.processors),output:Yw(e,"output",l.processors)}},enumerable:!1,writable:!1}),q}catch(q){throw Error("Error converting schema to JSON.")}}function Do(l,e){let w=e??{seen:new Set};if(w.seen.has(l))return!1;w.seen.add(l);let u=l._zod.def;if(u.type==="transform")return!0;if(u.type==="array")return Do(u.element,w);if(u.type==="set")return Do(u.valueType,w);if(u.type==="lazy")return Do(u.getter(),w);if(u.type==="promise"||u.type==="optional"||u.type==="nonoptional"||u.type==="nullable"||u.type==="readonly"||u.type==="default"||u.type==="prefault")return Do(u.innerType,w);if(u.type==="intersection")return Do(u.left,w)||Do(u.right,w);if(u.type==="record"||u.type==="map")return Do(u.keyType,w)||Do(u.valueType,w);if(u.type==="pipe"){if(l._zod.traits.has("$ZodCodec"))return!0;return Do(u.in,w)||Do(u.out,w)}if(u.type==="object"){for(let n in u.shape)if(Do(u.shape[n],w))return!0;return!1}if(u.type==="union"){for(let n of u.options)if(Do(n,w))return!0;return!1}if(u.type==="tuple"){for(let n of u.items)if(Do(n,w))return!0;if(u.rest&&Do(u.rest,w))return!0;return!1}return!1}var ZR=(l,e={})=>(w)=>{let u=vP({...w,processors:e});return no(l,u),eP(u,l),hP(u,l)},Yw=(l,e,w={})=>(u)=>{let{libraryOptions:n,target:H}=u??{},O=vP({...n??{},target:H,io:e,processors:w});return no(l,O),eP(O,l),hP(O,l)};var aK={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},xR=(l,e,w,u)=>{let n=w;n.type="string";let{minimum:H,maximum:O,format:q,patterns:R,contentEncoding:X}=l._zod.bag;if(typeof H==="number")n.minLength=H;if(typeof O==="number")n.maxLength=O;if(q){if(n.format=aK[q]??q,n.format==="")delete n.format;if(q==="time")delete n.format}if(X)n.contentEncoding=X;if(R&&R.size>0){let G=[...R];if(G.length===1)n.pattern=G[0].source;else if(G.length>1)n.allOf=[...G.map((A)=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:A.source}))]}};var CR=(l,e,w,u)=>{w.not={}};var TR=(l,e,w,u)=>{};var SR=(l,e,w,u)=>{let n=l._zod.def,H=Ow(n.entries);if(H.every((O)=>typeof O==="number"))w.type="number";if(H.every((O)=>typeof O==="string"))w.type="string";w.enum=H},kR=(l,e,w,u)=>{let n=l._zod.def,H=[];for(let O of n.values)if(O===void 0){if(e.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(e.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else H.push(Number(O));else H.push(O);if(H.length===0);else if(H.length===1){let O=H[0];if(w.type=O===null?"null":typeof O,e.target==="draft-04"||e.target==="openapi-3.0")w.enum=[O];else w.const=O}else{if(H.every((O)=>typeof O==="number"))w.type="number";if(H.every((O)=>typeof O==="string"))w.type="string";if(H.every((O)=>typeof O==="boolean"))w.type="boolean";if(H.every((O)=>O===null))w.type="null";w.enum=H}};var DR=(l,e,w,u)=>{if(e.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var VR=(l,e,w,u)=>{if(e.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var _R=(l,e,w,u)=>{let n=w,H=l._zod.def,{minimum:O,maximum:q}=l._zod.bag;if(typeof O==="number")n.minItems=O;if(typeof q==="number")n.maxItems=q;n.type="array",n.items=no(H.element,e,{...u,path:[...u.path,"items"]})},yR=(l,e,w,u)=>{let n=w,H=l._zod.def;n.type="object",n.properties={};let O=H.shape;for(let X in O)n.properties[X]=no(O[X],e,{...u,path:[...u.path,"properties",X]});let q=new Set(Object.keys(O)),R=new Set([...q].filter((X)=>{let G=H.shape[X]._zod;if(e.io==="input")return G.optin===void 0;else return G.optout===void 0}));if(R.size>0)n.required=Array.from(R);if(H.catchall?._zod.def.type==="never")n.additionalProperties=!1;else if(!H.catchall){if(e.io==="output")n.additionalProperties=!1}else if(H.catchall)n.additionalProperties=no(H.catchall,e,{...u,path:[...u.path,"additionalProperties"]})},ER=(l,e,w,u)=>{let n=l._zod.def,H=n.inclusive===!1,O=n.options.map((q,R)=>no(q,e,{...u,path:[...u.path,H?"oneOf":"anyOf",R]}));if(H)w.oneOf=O;else w.anyOf=O},cR=(l,e,w,u)=>{let n=l._zod.def,H=no(n.left,e,{...u,path:[...u.path,"allOf",0]}),O=no(n.right,e,{...u,path:[...u.path,"allOf",1]}),q=(X)=>("allOf"in X)&&Object.keys(X).length===1,R=[...q(H)?H.allOf:[H],...q(O)?O.allOf:[O]];w.allOf=R};var aR=(l,e,w,u)=>{let n=l._zod.def,H=no(n.innerType,e,u),O=e.seen.get(l);if(e.target==="openapi-3.0")O.ref=n.innerType,w.nullable=!0;else w.anyOf=[H,{type:"null"}]},jR=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);H.ref=n.innerType},fR=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);H.ref=n.innerType,w.default=JSON.parse(JSON.stringify(n.defaultValue))},pR=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);if(H.ref=n.innerType,e.io==="input")w._prefault=JSON.parse(JSON.stringify(n.defaultValue))},dR=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);H.ref=n.innerType;let O;try{O=n.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}w.default=O},sR=(l,e,w,u)=>{let n=l._zod.def,H=n.in._zod.traits.has("$ZodTransform"),O=e.io==="input"?H?n.out:n.in:n.out;no(O,e,u);let q=e.seen.get(l);q.ref=O},r3=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);H.ref=n.innerType,w.readOnly=!0};var bP=(l,e,w,u)=>{let n=l._zod.def;no(n.innerType,e,u);let H=e.seen.get(l);H.ref=n.innerType};var hU=E("ZodISODateTime",(l,e)=>{J7.init(l,e),Ng.init(l,e)});function g3(l){return KR(hU,l)}var bU=E("ZodISODate",(l,e)=>{Q7.init(l,e),Ng.init(l,e)});function o3(l){return UR(bU,l)}var wU=E("ZodISOTime",(l,e)=>{z7.init(l,e),Ng.init(l,e)});function l3(l){return $R(wU,l)}var uU=E("ZodISODuration",(l,e)=>{K7.init(l,e),Ng.init(l,e)});function v3(l){return mR(uU,l)}var PU=(l,e)=>{i2.init(l,e),l.name="ZodError",Object.defineProperties(l,{format:{value:(w)=>n9(l,w)},flatten:{value:(w)=>i9(l,w)},addIssue:{value:(w)=>{l.issues.push(w),l.message=JSON.stringify(l.issues,Eh,2)}},addIssues:{value:(w)=>{l.issues.push(...w),l.message=JSON.stringify(l.issues,Eh,2)}},isEmpty:{get(){return l.issues.length===0}}})};var Gl=E("ZodError",PU,{Parent:Error});var e3=n2(Gl),h3=P2(Gl),b3=Rw(Gl),w3=Gw(Gl),u3=O9(Gl),i3=q9(Gl),n3=t9(Gl),P3=A9(Gl),H3=M9(Gl),O3=W9(Gl),q3=R9(Gl),t3=G9(Gl);var A3=new WeakMap;function G2(l,e,w){let u=Object.getPrototypeOf(l),n=A3.get(u);if(!n)n=new Set,A3.set(u,n);if(n.has(e))return;n.add(e);for(let H in w){let O=w[H];Object.defineProperty(u,H,{configurable:!0,enumerable:!1,get(){let q=O.bind(this);return Object.defineProperty(this,H,{configurable:!0,writable:!0,enumerable:!0,value:q}),q},set(q){Object.defineProperty(this,H,{configurable:!0,writable:!0,enumerable:!0,value:q})}})}}var oo=E("ZodType",(l,e)=>{return yg.init(l,e),Object.assign(l["~standard"],{jsonSchema:{input:Yw(l,"input"),output:Yw(l,"output")}}),l.toJSONSchema=ZR(l,{}),l.def=e,l.type=e.type,Object.defineProperty(l,"_def",{value:e}),l.parse=(w,u)=>e3(l,w,u,{callee:l.parse}),l.safeParse=(w,u)=>b3(l,w,u),l.parseAsync=async(w,u)=>h3(l,w,u,{callee:l.parseAsync}),l.safeParseAsync=async(w,u)=>w3(l,w,u),l.spa=l.safeParseAsync,l.encode=(w,u)=>u3(l,w,u),l.decode=(w,u)=>i3(l,w,u),l.encodeAsync=async(w,u)=>n3(l,w,u),l.decodeAsync=async(w,u)=>P3(l,w,u),l.safeEncode=(w,u)=>H3(l,w,u),l.safeDecode=(w,u)=>O3(l,w,u),l.safeEncodeAsync=async(w,u)=>q3(l,w,u),l.safeDecodeAsync=async(w,u)=>t3(l,w,u),G2(l,"ZodType",{check(...w){let u=this.def;return this.clone(Og.mergeDefs(u,{checks:[...u.checks??[],...w.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...w){return this.check(...w)},clone(w,u){return ov(this,w,u)},brand(){return this},register(w,u){return w.add(this,u),this},refine(w,u){return this.check(v$(w,u))},superRefine(w,u){return this.check(e$(w,u))},overwrite(w){return this.check(J1(w))},optional(){return R3(this)},exactOptional(){return yU(this)},nullable(){return G3(this)},nullish(){return R3(G3(this))},nonoptional(w){return pU(this,w)},array(){return J0(this)},or(w){return CU([this,w])},and(w){return SU(this,w)},transform(w){return X3(this,VU(w))},default(w){return aU(this,w)},prefault(w){return fU(this,w)},catch(w){return sU(this,w)},pipe(w){return X3(this,w)},readonly(){return o$(this)},describe(w){let u=this.clone();return $e.add(u,{description:w}),u},meta(...w){if(w.length===0)return $e.get(this);let u=this.clone();return $e.add(u,w[0]),u},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(w){return w(this)}}),Object.defineProperty(l,"description",{get(){return $e.get(l)?.description},configurable:!0}),l}),Y3=E("_ZodString",(l,e)=>{t2.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(u,n,H)=>xR(l,u,n,H);let w=l._zod.bag;l.format=w.format??null,l.minLength=w.minimum??null,l.maxLength=w.maximum??null,G2(l,"_ZodString",{regex(...u){return this.check(c8(...u))},includes(...u){return this.check(f8(...u))},startsWith(...u){return this.check(p8(...u))},endsWith(...u){return this.check(d8(...u))},min(...u){return this.check(ah(...u))},max(...u){return this.check(A2(...u))},length(...u){return this.check(M2(...u))},nonempty(...u){return this.check(ah(1,...u))},lowercase(u){return this.check(a8(u))},uppercase(u){return this.check(j8(u))},trim(){return this.check(rP())},normalize(...u){return this.check(s8(...u))},toLowerCase(){return this.check(gP())},toUpperCase(){return this.check(oP())},slugify(){return this.check(lP())}})}),OU=E("ZodString",(l,e)=>{t2.init(l,e),Y3.init(l,e),l.email=(w)=>l.check(hR(qU,w)),l.url=(w)=>l.check(nR(tU,w)),l.jwt=(w)=>l.check(zR(LU,w)),l.emoji=(w)=>l.check(PR(AU,w)),l.guid=(w)=>l.check(E8(M3,w)),l.uuid=(w)=>l.check(bR(R2,w)),l.uuidv4=(w)=>l.check(wR(R2,w)),l.uuidv6=(w)=>l.check(uR(R2,w)),l.uuidv7=(w)=>l.check(iR(R2,w)),l.nanoid=(w)=>l.check(HR(MU,w)),l.guid=(w)=>l.check(E8(M3,w)),l.cuid=(w)=>l.check(OR(WU,w)),l.cuid2=(w)=>l.check(qR(RU,w)),l.ulid=(w)=>l.check(tR(GU,w)),l.base64=(w)=>l.check(YR(UU,w)),l.base64url=(w)=>l.check(JR($U,w)),l.xid=(w)=>l.check(AR(XU,w)),l.ksuid=(w)=>l.check(MR(YU,w)),l.ipv4=(w)=>l.check(WR(JU,w)),l.ipv6=(w)=>l.check(RR(QU,w)),l.cidrv4=(w)=>l.check(GR(zU,w)),l.cidrv6=(w)=>l.check(XR(KU,w)),l.e164=(w)=>l.check(QR(mU,w)),l.datetime=(w)=>l.check(g3(w)),l.date=(w)=>l.check(o3(w)),l.time=(w)=>l.check(l3(w)),l.duration=(w)=>l.check(v3(w))});function Eg(l){return eR(OU,l)}var Ng=E("ZodStringFormat",(l,e)=>{Lg.init(l,e),Y3.init(l,e)}),qU=E("ZodEmail",(l,e)=>{q7.init(l,e),Ng.init(l,e)});var M3=E("ZodGUID",(l,e)=>{H7.init(l,e),Ng.init(l,e)});var R2=E("ZodUUID",(l,e)=>{O7.init(l,e),Ng.init(l,e)});var tU=E("ZodURL",(l,e)=>{t7.init(l,e),Ng.init(l,e)});var AU=E("ZodEmoji",(l,e)=>{A7.init(l,e),Ng.init(l,e)});var MU=E("ZodNanoID",(l,e)=>{M7.init(l,e),Ng.init(l,e)});var WU=E("ZodCUID",(l,e)=>{W7.init(l,e),Ng.init(l,e)});var RU=E("ZodCUID2",(l,e)=>{R7.init(l,e),Ng.init(l,e)});var GU=E("ZodULID",(l,e)=>{G7.init(l,e),Ng.init(l,e)});var XU=E("ZodXID",(l,e)=>{X7.init(l,e),Ng.init(l,e)});var YU=E("ZodKSUID",(l,e)=>{Y7.init(l,e),Ng.init(l,e)});var JU=E("ZodIPv4",(l,e)=>{U7.init(l,e),Ng.init(l,e)});var QU=E("ZodIPv6",(l,e)=>{$7.init(l,e),Ng.init(l,e)});var zU=E("ZodCIDRv4",(l,e)=>{m7.init(l,e),Ng.init(l,e)});var KU=E("ZodCIDRv6",(l,e)=>{L7.init(l,e),Ng.init(l,e)});var UU=E("ZodBase64",(l,e)=>{F7.init(l,e),Ng.init(l,e)});var $U=E("ZodBase64URL",(l,e)=>{N7.init(l,e),Ng.init(l,e)});var mU=E("ZodE164",(l,e)=>{B7.init(l,e),Ng.init(l,e)});var LU=E("ZodJWT",(l,e)=>{Z7.init(l,e),Ng.init(l,e)});var IU=E("ZodUnknown",(l,e)=>{x7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>TR(l,w,u,n)});function W3(){return LR(IU)}var FU=E("ZodNever",(l,e)=>{C7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>CR(l,w,u,n)});function NU(l){return IR(FU,l)}var BU=E("ZodArray",(l,e)=>{T7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>_R(l,w,u,n),l.element=e.element,G2(l,"ZodArray",{min(w,u){return this.check(ah(w,u))},nonempty(w){return this.check(ah(1,w))},max(w,u){return this.check(A2(w,u))},length(w,u){return this.check(M2(w,u))},unwrap(){return this.element}})});function J0(l,e){return FR(BU,l,e)}var ZU=E("ZodObject",(l,e)=>{D7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>yR(l,w,u,n),Og.defineLazy(l,"shape",()=>{return e.shape}),G2(l,"ZodObject",{keyof(){return Jw(Object.keys(this._zod.def.shape))},catchall(w){return this.clone({...this._zod.def,catchall:w})},passthrough(){return this.clone({...this._zod.def,catchall:W3()})},loose(){return this.clone({...this._zod.def,catchall:W3()})},strict(){return this.clone({...this._zod.def,catchall:NU()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(w){return Og.extend(this,w)},safeExtend(w){return Og.safeExtend(this,w)},merge(w){return Og.merge(this,w)},pick(w){return Og.pick(this,w)},omit(w){return Og.omit(this,w)},partial(...w){return Og.partial(J3,this,w[0])},required(...w){return Og.required(Q3,this,w[0])}})});function me(l,e){let w={type:"object",shape:l??{},...Og.normalizeParams(e)};return new ZU(w)}var xU=E("ZodUnion",(l,e)=>{V7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>ER(l,w,u,n),l.options=e.options});function CU(l,e){return new xU({type:"union",options:l,...Og.normalizeParams(e)})}var TU=E("ZodIntersection",(l,e)=>{_7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>cR(l,w,u,n)});function SU(l,e){return new TU({type:"intersection",left:l,right:e})}var wP=E("ZodEnum",(l,e)=>{y7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(u,n,H)=>SR(l,u,n,H),l.enum=e.entries,l.options=Object.values(e.entries);let w=new Set(Object.keys(e.entries));l.extract=(u,n)=>{let H={};for(let O of u)if(w.has(O))H[O]=e.entries[O];else throw Error(`Key ${O} not found in enum`);return new wP({...e,checks:[],...Og.normalizeParams(n),entries:H})},l.exclude=(u,n)=>{let H={...e.entries};for(let O of u)if(w.has(O))delete H[O];else throw Error(`Key ${O} not found in enum`);return new wP({...e,checks:[],...Og.normalizeParams(n),entries:H})}});function Jw(l,e){let w=Array.isArray(l)?Object.fromEntries(l.map((u)=>[u,u])):l;return new wP({type:"enum",entries:w,...Og.normalizeParams(e)})}var kU=E("ZodLiteral",(l,e)=>{E7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>kR(l,w,u,n),l.values=new Set(e.values),Object.defineProperty(l,"value",{get(){if(e.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function uP(l,e){return new kU({type:"literal",values:Array.isArray(l)?l:[l],...Og.normalizeParams(e)})}var DU=E("ZodTransform",(l,e)=>{c7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>VR(l,w,u,n),l._zod.parse=(w,u)=>{if(u.direction==="backward")throw new Pw(l.constructor.name);w.addIssue=(H)=>{if(typeof H==="string")w.issues.push(Og.issue(H,w.value,e));else{let O=H;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=w.value),O.inst??(O.inst=l),w.issues.push(Og.issue(O))}};let n=e.transform(w.value,w);if(n instanceof Promise)return n.then((H)=>{return w.value=H,w});return w.value=n,w}});function VU(l){return new DU({type:"transform",transform:l})}var J3=E("ZodOptional",(l,e)=>{y8.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>bP(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function R3(l){return new J3({type:"optional",innerType:l})}var _U=E("ZodExactOptional",(l,e)=>{a7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>bP(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function yU(l){return new _U({type:"optional",innerType:l})}var EU=E("ZodNullable",(l,e)=>{j7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>aR(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function G3(l){return new EU({type:"nullable",innerType:l})}var cU=E("ZodDefault",(l,e)=>{f7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>fR(l,w,u,n),l.unwrap=()=>l._zod.def.innerType,l.removeDefault=l.unwrap});function aU(l,e){return new cU({type:"default",innerType:l,get defaultValue(){return typeof e==="function"?e():Og.shallowClone(e)}})}var jU=E("ZodPrefault",(l,e)=>{p7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>pR(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function fU(l,e){return new jU({type:"prefault",innerType:l,get defaultValue(){return typeof e==="function"?e():Og.shallowClone(e)}})}var Q3=E("ZodNonOptional",(l,e)=>{d7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>jR(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function pU(l,e){return new Q3({type:"nonoptional",innerType:l,...Og.normalizeParams(e)})}var dU=E("ZodCatch",(l,e)=>{s7.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>dR(l,w,u,n),l.unwrap=()=>l._zod.def.innerType,l.removeCatch=l.unwrap});function sU(l,e){return new dU({type:"catch",innerType:l,catchValue:typeof e==="function"?e:()=>e})}var r$=E("ZodPipe",(l,e)=>{rR.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>sR(l,w,u,n),l.in=e.in,l.out=e.out});function X3(l,e){return new r$({type:"pipe",in:l,out:e})}var g$=E("ZodReadonly",(l,e)=>{gR.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>r3(l,w,u,n),l.unwrap=()=>l._zod.def.innerType});function o$(l){return new g$({type:"readonly",innerType:l})}var l$=E("ZodCustom",(l,e)=>{oR.init(l,e),oo.init(l,e),l._zod.processJSONSchema=(w,u,n)=>DR(l,w,u,n)});function v$(l,e={}){return NR(l$,l,e)}function e$(l,e){return BR(l,e)}var z3=me({type:Jw(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),K3=me({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:J0(Eg()).optional()}),h$=me({name:Eg().min(1).max(200),code:Eg(),type:Jw(["trigger","library"]),triggers:J0(Eg()).optional(),bindings:J0(z3).optional(),folder:Eg().optional(),metadata:K3.optional()}),U3=me({format:uP("lumiscript-pack-v1"),exportedAt:Eg(),scripts:J0(h$).min(1).max(100)}),b$=me({name:Eg().min(1).max(200),file:Eg().min(1),type:Jw(["trigger","library"]),triggers:J0(Eg()).optional(),bindings:J0(z3).optional(),folder:Eg().optional(),metadata:K3.optional()}),EEg=me({format:uP("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:J0(b$).min(1).max(100)});var $3=1048576;async function m3(l){let e=new Uint8Array(await l.arrayBuffer()),w;try{w=jW(e)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let u=w["pack.json"];if(!u)throw Error("Invalid script pack: missing pack.json");if(u.byteLength>$3)throw Error(`Pack exceeds the ${$3/1024/1024} MB decompressed size limit`);let n=I8(u),H;try{H=JSON.parse(n)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return U3.parse(H).scripts}var hg=Pr(rg(),1);function w$(l){let w="";for(let u=0;u<l.length;u+=32768)w+=String.fromCharCode(...l.subarray(u,u+32768));return btoa(w)}function u$(l){let e=new Map;for(let n of l){let H=n.folder??"";if(!e.has(H))e.set(H,[]);e.get(H).push(n)}let w=new Map;if(e.has(""))w.set("",e.get(""));let u=[...e.keys()].filter((n)=>n!=="").sort();for(let n of u)w.set(n,e.get(n));return w}var X2=({scripts:l,selectedId:e,execInfo:w,onSelect:u,onEdit:n,sendToBackend:H})=>{let[O,q]=Qw.useState("trigger"),[R,X]=Qw.useState(new Set),G=Qw.useRef(null),A=l.filter((a)=>a.type===O),Y=u$(A),L=Y.size>1||Y.size===1&&!Y.has(""),S=(a)=>{X((p)=>{let lr=new Set(p);if(lr.has(a))lr.delete(a);else lr.add(a);return lr})},T=()=>{let a=O==="library"?"Library name:":"Script name:",p=window.prompt(a);if(!p?.trim())return;H({type:"create_script",name:p.trim(),scriptType:O})},_=(a)=>{if(A.length===0)return;if(a.shiftKey){let lr=F8(A);H({type:"save_pack_to_disk",bytesB64:w$(lr),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;fW(A,p.trim())},rr=()=>{G.current?.click()},nr=async(a)=>{let p=a.target.files?.[0];if(!p)return;a.target.value="";try{let lr=await m3(p),B=(x)=>x==="library"?"[L]":"[T]",y=lr.map((x)=>`  ${B(x.type)} ${x.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;H({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},vr=(a)=>{let p=w[a.id];return hg.jsxDEV(NW,{script:a,selected:a.id===e,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>u(a.id),onEdit:()=>n(a.id),sendToBackend:H},a.id,!1,void 0,this)};return hg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[hg.jsxDEV("div",{className:"ls-list-header",children:[hg.jsxDEV("div",{className:"ls-list-type-tabs",children:[hg.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>q("trigger"),title:"Scripts",children:hg.jsxDEV(Wo,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>q("library"),title:"Libraries",children:hg.jsxDEV(Xe,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-actions",children:[hg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:hg.jsxDEV(hw,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:A.length===0,children:hg.jsxDEV(Ye,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:T,title:"New script",children:hg.jsxDEV(d5,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("input",{ref:G,type:"file",accept:".zip",style:{display:"none"},onChange:nr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-body",children:A.length===0?hg.jsxDEV("div",{className:"ls-list-empty",children:[hg.jsxDEV(Zv,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),hg.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),hg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...Y.entries()].map(([a,p])=>{let lr=R.has(a);return a===""?hg.jsxDEV("div",{children:p.map(vr)},"__unfiled",!1,void 0,this):hg.jsxDEV("div",{className:"ls-folder-group",children:[hg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>S(a),children:[lr?hg.jsxDEV(t0,{size:11},void 0,!1,void 0,this):hg.jsxDEV(Ro,{size:11},void 0,!1,void 0,this),hg.jsxDEV(Je,{size:11},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(B)=>{B.stopPropagation();let y=window.prompt("Rename folder:",a);if(y===null||y.trim()===""||y.trim()===a)return;for(let j of p)H({type:"update_script",id:j.id,patch:{folder:y.trim()}})},children:hg.jsxDEV(sl,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&p.map(vr)]},`folder-${a}`,!0,void 0,this)}):A.map(vr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var mw=Pr(eg(),1),qG=Pr(Ch(),1);var Cg=Pr(eg(),1);function L3(l,e){(e==null||e>l.length)&&(e=l.length);for(var w=0,u=Array(e);w<e;w++)u[w]=l[w];return u}function i$(l){if(Array.isArray(l))return l}function n$(l,e,w){return(e=t$(e))in l?Object.defineProperty(l,e,{value:w,enumerable:!0,configurable:!0,writable:!0}):l[e]=w,l}function P$(l,e){var w=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(w!=null){var u,n,H,O,q=[],R=!0,X=!1;try{if(H=(w=w.call(l)).next,e===0);else for(;!(R=(u=H.call(w)).done)&&(q.push(u.value),q.length!==e);R=!0);}catch(G){X=!0,n=G}finally{try{if(!R&&w.return!=null&&(O=w.return(),Object(O)!==O))return}finally{if(X)throw n}}return q}}function H$(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I3(l,e){var w=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);e&&(u=u.filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable})),w.push.apply(w,u)}return w}function iP(l){for(var e=1;e<arguments.length;e++){var w=arguments[e]!=null?arguments[e]:{};e%2?I3(Object(w),!0).forEach(function(u){n$(l,u,w[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(w)):I3(Object(w)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(w,u))})}return l}function F3(l,e){if(l==null)return{};var w,u,n=O$(l,e);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(l);for(u=0;u<H.length;u++)w=H[u],e.indexOf(w)===-1&&{}.propertyIsEnumerable.call(l,w)&&(n[w]=l[w])}return n}function O$(l,e){if(l==null)return{};var w={};for(var u in l)if({}.hasOwnProperty.call(l,u)){if(e.indexOf(u)!==-1)continue;w[u]=l[u]}return w}function N3(l,e){return i$(l)||P$(l,e)||A$(l,e)||H$()}function q$(l,e){if(typeof l!="object"||!l)return l;var w=l[Symbol.toPrimitive];if(w!==void 0){var u=w.call(l,e);if(typeof u!="object")return u;throw TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(l)}function t$(l){var e=q$(l,"string");return typeof e=="symbol"?e:e+""}function A$(l,e){if(l){if(typeof l=="string")return L3(l,e);var w={}.toString.call(l).slice(8,-1);return w==="Object"&&l.constructor&&(w=l.constructor.name),w==="Map"||w==="Set"?Array.from(l):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?L3(l,e):void 0}}function M$(l,e,w){if(e in l)Object.defineProperty(l,e,{value:w,enumerable:!0,configurable:!0,writable:!0});else l[e]=w;return l}function B3(l,e){var w=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);if(e)u=u.filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable});w.push.apply(w,u)}return w}function Z3(l){for(var e=1;e<arguments.length;e++){var w=arguments[e]!=null?arguments[e]:{};if(e%2)B3(Object(w),!0).forEach(function(u){M$(l,u,w[u])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(l,Object.getOwnPropertyDescriptors(w));else B3(Object(w)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(w,u))})}return l}function W$(){for(var l=arguments.length,e=Array(l),w=0;w<l;w++)e[w]=arguments[w];return function(u){return e.reduceRight(function(n,H){return H(n)},u)}}function zw(l){return function e(){var w=this;for(var u=arguments.length,n=Array(u),H=0;H<u;H++)n[H]=arguments[H];return n.length>=l.length?l.apply(this,n):function(){for(var O=arguments.length,q=Array(O),R=0;R<O;R++)q[R]=arguments[R];return e.apply(w,[].concat(n,q))}}}function J2(l){return{}.toString.call(l).includes("Object")}function R$(l){return!Object.keys(l).length}function Kw(l){return typeof l==="function"}function G$(l,e){return Object.prototype.hasOwnProperty.call(l,e)}function X$(l,e){if(!J2(e))Q1("changeType");if(Object.keys(e).some(function(w){return!G$(l,w)}))Q1("changeField");return e}function Y$(l){if(!Kw(l))Q1("selectorType")}function J$(l){if(!(Kw(l)||J2(l)))Q1("handlerType");if(J2(l)&&Object.values(l).some(function(e){return!Kw(e)}))Q1("handlersType")}function Q$(l){if(!l)Q1("initialIsRequired");if(!J2(l))Q1("initialType");if(R$(l))Q1("initialContent")}function z$(l,e){throw Error(l[e]||l.default)}var K$={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Q1=zw(z$)(K$),Y2={changes:X$,selector:Y$,handler:J$,initial:Q$};function U$(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Y2.initial(l),Y2.handler(e);var w={current:l},u=zw(L$)(w,e),n=zw(m$)(w),H=zw(Y2.changes)(l),O=zw($$)(w);function q(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(G){return G};return Y2.selector(X),X(w.current)}function R(X){W$(u,n,H,O)(X)}return[q,R]}function $$(l,e){return Kw(e)?e(l.current):e}function m$(l,e){return l.current=Z3(Z3({},l.current),e),e}function L$(l,e,w){return Kw(e)?e(l.current):Object.keys(w).forEach(function(u){var n;return(n=e[u])===null||n===void 0?void 0:n.call(e,l.current[u])}),w}var I$={create:U$},x3=I$;var C3={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function T3(l){return function e(){var w=this;for(var u=arguments.length,n=Array(u),H=0;H<u;H++)n[H]=arguments[H];return n.length>=l.length?l.apply(this,n):function(){for(var O=arguments.length,q=Array(O),R=0;R<O;R++)q[R]=arguments[R];return e.apply(w,[].concat(n,q))}}}function S3(l){return{}.toString.call(l).includes("Object")}function F$(l){if(!l)k3("configIsRequired");if(!S3(l))k3("configType");if(l.urls)return N$(),{paths:{vs:l.urls.monacoBase}};return l}function N$(){console.warn(D3.deprecation)}function B$(l,e){throw Error(l[e]||l.default)}var D3={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},k3=T3(B$)(D3),V3={config:F$};var _3=function(){for(var e=arguments.length,w=Array(e),u=0;u<e;u++)w[u]=arguments[u];return function(n){return w.reduceRight(function(H,O){return O(H)},n)}};function nP(l,e){return Object.keys(e).forEach(function(w){if(e[w]instanceof Object){if(l[w])Object.assign(e[w],nP(l[w],e[w]))}}),iP(iP({},l),e)}var Z$={type:"cancelation",msg:"operation is manually canceled"};function Q2(l){var e=!1,w=new Promise(function(u,n){l.then(function(H){return e?n(Z$):u(H)}),l.catch(n)});return w.cancel=function(){return e=!0},w}var x$=["monaco"],C$=x3.create({config:C3,isInitialized:!1,resolve:null,reject:null,monaco:null}),y3=N3(C$,2),Uw=y3[0],z2=y3[1];function T$(l){var e=V3.config(l),w=e.monaco,u=F3(e,x$);z2(function(n){return{config:nP(n.config,u),monaco:w}})}function S$(){var l=Uw(function(e){var{monaco:w,isInitialized:u,resolve:n}=e;return{monaco:w,isInitialized:u,resolve:n}});if(!l.isInitialized){if(z2({isInitialized:!0}),l.monaco)return l.resolve(l.monaco),Q2(PP);if(window.monaco&&window.monaco.editor)return E3(window.monaco),l.resolve(window.monaco),Q2(PP);_3(k$,V$)(_$)}return Q2(PP)}function k$(l){return document.body.appendChild(l)}function D$(l){var e=document.createElement("script");return l&&(e.src=l),e}function V$(l){var e=Uw(function(u){var{config:n,reject:H}=u;return{config:n,reject:H}}),w=D$("".concat(e.config.paths.vs,"/loader.js"));return w.onload=function(){return l()},w.onerror=e.reject,w}function _$(){var l=Uw(function(w){var{config:u,resolve:n,reject:H}=w;return{config:u,resolve:n,reject:H}}),e=window.require;e.config(l.config),e(["vs/editor/editor.main"],function(w){var u=w.m||w;E3(u),l.resolve(u)},function(w){l.reject(w)})}function E3(l){if(!Uw().monaco)z2({monaco:l})}function y$(){return Uw(function(l){var e=l.monaco;return e})}var PP=new Promise(function(l,e){return z2({resolve:l,reject:e})}),Le={config:T$,init:S$,__getMonacoInstance:y$};var c3=Pr(eg(),1),Po=Pr(eg(),1);var a3=Pr(eg(),1),U2=Pr(eg(),1),j3=Pr(eg(),1),p3=Pr(eg(),1),$2=Pr(eg(),1),hm=Pr(eg(),1);var rG=Pr(eg(),1),kg=Pr(eg(),1);var m2=Pr(eg(),1),E$={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},HP=E$,c$={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},a$=c$;function j$({children:l}){return j3.default.createElement("div",{style:a$.container},l)}var f$=j$,p$=f$;function d$({width:l,height:e,isEditorReady:w,loading:u,_ref:n,className:H,wrapperProps:O}){return U2.default.createElement("section",{style:{...HP.wrapper,width:l,height:e},...O},!w&&U2.default.createElement(p$,null,u),U2.default.createElement("div",{ref:n,style:{...HP.fullWidth,...!w&&HP.hide},className:H}))}var s$=d$,f3=a3.memo(s$);function rm(l){p3.useEffect(l,[])}var d3=rm;function gm(l,e,w=!0){let u=$2.useRef(!0);$2.useEffect(u.current||!w?()=>{u.current=!1}:l,e)}var Xl=gm;function $w(){}function jh(l,e,w,u){return om(l,u)||lm(l,e,w,u)}function om(l,e){return l.editor.getModel(s3(l,e))}function lm(l,e,w,u){return l.editor.createModel(e,w,u?s3(l,u):void 0)}function s3(l,e){return l.Uri.parse(e)}function vm({original:l,modified:e,language:w,originalLanguage:u,modifiedLanguage:n,originalModelPath:H,modifiedModelPath:O,keepCurrentOriginalModel:q=!1,keepCurrentModifiedModel:R=!1,theme:X="light",loading:G="Loading...",options:A={},height:Y="100%",width:L="100%",className:S,wrapperProps:T={},beforeMount:_=$w,onMount:rr=$w}){let[nr,vr]=Po.useState(!1),[a,p]=Po.useState(!0),lr=Po.useRef(null),B=Po.useRef(null),y=Po.useRef(null),j=Po.useRef(rr),x=Po.useRef(_),Wr=Po.useRef(!1);d3(()=>{let k=Le.init();return k.then((s)=>(B.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>lr.current?Zr():k.cancel()}),Xl(()=>{if(lr.current&&B.current){let k=lr.current.getOriginalEditor(),s=jh(B.current,l||"",u||w||"text",H||"");s!==k.getModel()&&k.setModel(s)}},[H],nr),Xl(()=>{if(lr.current&&B.current){let k=lr.current.getModifiedEditor(),s=jh(B.current,e||"",n||w||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],nr),Xl(()=>{let k=lr.current.getModifiedEditor();k.getOption(B.current.editor.EditorOption.readOnly)?k.setValue(e||""):e!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[e],nr),Xl(()=>{lr.current?.getModel()?.original.setValue(l||"")},[l],nr),Xl(()=>{let{original:k,modified:s}=lr.current.getModel();B.current.editor.setModelLanguage(k,u||w||"text"),B.current.editor.setModelLanguage(s,n||w||"text")},[w,u,n],nr),Xl(()=>{B.current?.editor.setTheme(X)},[X],nr),Xl(()=>{lr.current?.updateOptions(A)},[A],nr);let tr=Po.useCallback(()=>{if(!B.current)return;x.current(B.current);let k=jh(B.current,l||"",u||w||"text",H||""),s=jh(B.current,e||"",n||w||"text",O||"");lr.current?.setModel({original:k,modified:s})},[w,e,n,l,u,H,O]),Gr=Po.useCallback(()=>{!Wr.current&&y.current&&(lr.current=B.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...A}),tr(),B.current?.editor.setTheme(X),vr(!0),Wr.current=!0)},[A,X,tr]);Po.useEffect(()=>{nr&&j.current(lr.current,B.current)},[nr]),Po.useEffect(()=>{!a&&!nr&&Gr()},[a,nr,Gr]);function Zr(){let k=lr.current?.getModel();q||k?.original?.dispose(),R||k?.modified?.dispose(),lr.current?.dispose()}return Po.default.createElement(f3,{width:L,height:Y,isEditorReady:nr,loading:G,_ref:y,className:S,wrapperProps:T})}var em=vm,Kcg=c3.memo(em);function bm(l){let e=m2.useRef();return m2.useEffect(()=>{e.current=l},[l]),e.current}var wm=bm,K2=new Map;function um({defaultValue:l,defaultLanguage:e,defaultPath:w,value:u,language:n,path:H,theme:O="light",line:q,loading:R="Loading...",options:X={},overrideServices:G={},saveViewState:A=!0,keepCurrentModel:Y=!1,width:L="100%",height:S="100%",className:T,wrapperProps:_={},beforeMount:rr=$w,onMount:nr=$w,onChange:vr,onValidate:a=$w}){let[p,lr]=kg.useState(!1),[B,y]=kg.useState(!0),j=kg.useRef(null),x=kg.useRef(null),Wr=kg.useRef(null),tr=kg.useRef(nr),Gr=kg.useRef(rr),Zr=kg.useRef(),k=kg.useRef(u),s=wm(H),er=kg.useRef(!1),zr=kg.useRef(!1);d3(()=>{let F=Le.init();return F.then((or)=>(j.current=or)&&y(!1)).catch((or)=>or?.type!=="cancelation"&&console.error("Monaco initialization: error:",or)),()=>x.current?V():F.cancel()}),Xl(()=>{let F=jh(j.current,l||u||"",e||n||"",H||w||"");F!==x.current?.getModel()&&(A&&K2.set(s,x.current?.saveViewState()),x.current?.setModel(F),A&&x.current?.restoreViewState(K2.get(H)))},[H],p),Xl(()=>{x.current?.updateOptions(X)},[X],p),Xl(()=>{!x.current||u===void 0||(x.current.getOption(j.current.editor.EditorOption.readOnly)?x.current.setValue(u):u!==x.current.getValue()&&(zr.current=!0,x.current.executeEdits("",[{range:x.current.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),x.current.pushUndoStop(),zr.current=!1))},[u],p),Xl(()=>{let F=x.current?.getModel();F&&n&&j.current?.editor.setModelLanguage(F,n)},[n],p),Xl(()=>{q!==void 0&&x.current?.revealLine(q)},[q],p),Xl(()=>{j.current?.editor.setTheme(O)},[O],p);let Xr=kg.useCallback(()=>{if(!(!Wr.current||!j.current)&&!er.current){Gr.current(j.current);let F=H||w,or=jh(j.current,u||l||"",e||n||"",F||"");x.current=j.current?.editor.create(Wr.current,{model:or,automaticLayout:!0,...X},G),A&&x.current.restoreViewState(K2.get(F)),j.current.editor.setTheme(O),q!==void 0&&x.current.revealLine(q),lr(!0),er.current=!0}},[l,e,w,u,n,H,X,G,A,O,q]);kg.useEffect(()=>{p&&tr.current(x.current,j.current)},[p]),kg.useEffect(()=>{!B&&!p&&Xr()},[B,p,Xr]),k.current=u,kg.useEffect(()=>{p&&vr&&(Zr.current?.dispose(),Zr.current=x.current?.onDidChangeModelContent((F)=>{zr.current||vr(x.current.getValue(),F)}))},[p,vr]),kg.useEffect(()=>{if(p){let F=j.current.editor.onDidChangeMarkers((or)=>{let Or=x.current.getModel()?.uri;if(Or&&or.find((Ar)=>Ar.path===Or.path)){let Ar=j.current.editor.getModelMarkers({resource:Or});a?.(Ar)}});return()=>{F?.dispose()}}return()=>{}},[p,a]);function V(){Zr.current?.dispose(),Y?A&&K2.set(H,x.current.saveViewState()):x.current.getModel()?.dispose(),x.current.dispose()}return kg.default.createElement(f3,{width:L,height:S,isEditorReady:p,loading:R,_ref:Wr,className:T,wrapperProps:_})}var im=um,nm=rG.memo(im),gG=nm;var fh=Pr(eg(),1);var Ho=Pr(rg(),1),Pm={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},oG=({entries:l,isRunning:e,onClear:w})=>{let[u,n]=fh.useState(!1),H=fh.useRef(null);fh.useEffect(()=>{if(!u&&H.current)H.current.scrollTop=H.current.scrollHeight},[l,u]);let O=()=>{let q=l.filter((R)=>R.type!=="separator").map((R)=>`[${R.timestamp}] ${R.type.toUpperCase()}: ${R.message}`).join(`
`);navigator.clipboard.writeText(q).catch(()=>{})};return Ho.jsxDEV("div",{className:`ls-console${u?" ls-collapsed":""}`,children:[Ho.jsxDEV("div",{className:"ls-console-header",onClick:()=>n((q)=>!q),children:[Ho.jsxDEV(Cv,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Ho.jsxDEV("span",{className:"ls-console-title",children:["Console",e?" — running…":l.length>0?` (${l.length})`:""]},void 0,!0,void 0,this),Ho.jsxDEV("button",{className:"ls-icon-btn",onClick:(q)=>{q.stopPropagation(),O()},title:"Copy output",disabled:l.length===0,children:Ho.jsxDEV(pl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ho.jsxDEV("button",{className:"ls-icon-btn",onClick:(q)=>{q.stopPropagation(),w()},title:"Clear console",disabled:l.length===0,children:Ho.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),u?Ho.jsxDEV(Ro,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Ho.jsxDEV(Ml,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&Ho.jsxDEV("div",{className:"ls-console-output",ref:H,children:l.length===0?Ho.jsxDEV("div",{className:"ls-console-empty",children:e?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):l.map((q,R)=>q.type==="separator"?Ho.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},R,!1,void 0,this):Ho.jsxDEV("div",{className:`ls-entry ${Pm[q.type]??"ls-log"}`,children:[Ho.jsxDEV("span",{className:"ls-entry-time",children:q.timestamp},void 0,!1,void 0,this),Ho.jsxDEV("span",{className:"ls-entry-type",children:q.type.toUpperCase()},void 0,!1,void 0,this),Ho.jsxDEV("span",{className:"ls-entry-msg",children:q.message},void 0,!1,void 0,this)]},R,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=Pr(rg(),1),lG=({bindings:l,activeContext:e,onAdd:w,onRemove:u})=>{let n=()=>{let{characterId:O,characterName:q}=e;if(!O)return;if(l.some((R)=>R.type==="character"&&R.characterId===O))return;w({type:"character",characterId:O,displayName:q??O})},H=()=>{let{chatId:O,characterName:q}=e;if(!O)return;if(l.some((X)=>X.type==="chat"&&X.chatId===O))return;let R=q?`${q} — ${O.slice(0,8)}`:O.slice(0,8);w({type:"chat",chatId:O,displayName:R})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(E5,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),l.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):l.map((O,q)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?Vo.jsxDEV(Vh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(kh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>u(q),title:"Remove binding",children:Vo.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:n,disabled:!e.characterId,title:e.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(Vh,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:H,disabled:!e.chatId,title:e.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(kh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var vG=Pr(eg(),1);var so=Pr(rg(),1),eG=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Ccg=eG.flatMap((l)=>l.events.map((e)=>e.name)),hG=({scriptId:l,triggers:e,sendToBackend:w})=>{let[u,n]=vG.useState(!0),H=new Set(e),O=(q)=>{let R=H.has(q)?e.filter((X)=>X!==q):[...e,q];w({type:"update_script",id:l,patch:{triggers:R}})};return so.jsxDEV("div",{className:`ls-triggers${u?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>n((q)=>!q),children:[so.jsxDEV(M0,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),H.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:H.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:u?so.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):so.jsxDEV(Ml,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&so.jsxDEV("div",{className:"ls-triggers-body",children:eG.map((q)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:q.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:q.events.map((R)=>so.jsxDEV("button",{className:`ls-trigger-chip${H.has(R.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(R.name),title:R.description,children:R.name},R.name,!1,void 0,this))},void 0,!1,void 0,this)]},q.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var bG=`
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
  | 'swipe_update';

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
   * swipe_update, and auto-greetings). Return a patch \`{ content?, extra? }\`
   * to transform the stored row, or \`void\` to pass through. Requires
   * \`chat_mutation\` permission.
   *
   * **Critical perf**: handler runs synchronously inside the message-write
   * path. Each invocation has a 2-second soft timeout (configurable). DO NOT
   * call \`api.llm.*\` or \`api.utils.http.*\` from a handler — pre-compute
   * via a trigger handler, store in \`api.db.*\`, read here.
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
   * @example
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
`;var nG=Pr(eg(),1);function wG(l){return l.split("`").map((w,u)=>{if(u%2===1)return w;return w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function Hm(l){return l.split("`").map((u,n)=>{if(n%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function z1(l,e){let w=`| ${l.join(" | ")} |`,u=`| ${l.map(()=>"---").join(" | ")} |`,n=e.map((H)=>`| ${H.map(Hm).join(" | ")} |`);return[w,u,...n].join(`
`)}function Om(l){return l.optional&&!l.field.endsWith("?")?`${l.field}?`:l.field}function qm(l){if(l==="silent")return"*silent*";if(l==="boolean")return'`"true" / "false"`';return"`string`"}function tm(l){return l.aliases==="—"?"—":`\`${l.aliases}\``}function Am(l){let e=l.perms.length===0&&!l.note?"*none*":l.perms.map((w)=>`\`${w}\``).join(", ");return l.note?`${e}${l.perms.length?" ":""}${l.note}`:e}function Mm(){return`## Lumiverse Events

${z1(["Event","Group","Payload shape"],OP.map((e)=>[`\`${e.name}\``,e.group,`\`${e.payload}\``]))}`}function Wm(){return`## Permission Matrix

${qP.map((e)=>{let w=z1(["Method","Required permissions"],e.rows.map((u)=>[`\`${u.method}\``,Am(u)]));return`### ${e.group}

${w}`}).join(`

`)}`}function Rm(){let l=z1(["Event","Payload fields","Emitted by"],tP.map((w)=>[`\`${w.name}\``,`\`${w.payload}\``,w.emittedBy])),e="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${l}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function Gm(){let l=AP.map((w)=>{let u=z1(["Macro","Aliases","Returns","Description"],w.rows.map((H)=>[`\`${H.macro}\``,tm(H),qm(H.returns),H.desc])),n=[`### ${w.label}`];if(w.description)n.push(`*${w.description}*`);return n.push(u),n.join(`

`)}),e='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${l.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function Xm(){return`## Key Types

${MP.map((l)=>uG(l)).join(`

`)}`}function uG(l,e="###"){let w=wG(l.name),u=l.note?`*${wG(l.note)}*

`:"",n=z1(["Field","Type","Description"],l.fields.map((H)=>[`\`${Om(H)}\``,`\`${H.type}\``,H.desc]));return`${e} ${w}

${u}${n}`}function Ym(){return`## API Functions

${WP.map((e)=>{let w=z1(["Method","Arguments","Description"],e.rows.map((u)=>[`\`${u.name}\``,u.args,u.desc]));return`### ${e.group}

${w}`}).join(`

`)}`}function Jm(){let e=z1(["Method","Arguments","Description"],RP.map((n)=>[`\`${n.name}\``,n.args,n.desc])),w=z1(["Method","Arguments","Description"],GP.map((n)=>[`\`${n.name}\``,n.args,n.desc])),u=XP.map((n)=>uG(n,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",e,"","### ls:council-prompt","",w,"","### Built-in types","",u].join(`
`)}function Qm(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function zm(){let e=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,w=[Mm(),Wm(),Rm(),Gm(),Xm(),Ym(),Jm(),Qm()];return`${e}

---

${w.join(`

---

`)}
`}function iG(){let l=zm(),w=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,u=new Blob([l],{type:"text/markdown;charset=utf-8"}),n=URL.createObjectURL(u),H=document.createElement("a");H.href=n,H.download=w,H.click(),URL.revokeObjectURL(n)}var K=Pr(rg(),1),K1=({icon:l,title:e,defaultOpen:w=!1,children:u})=>{let[n,H]=nG.useState(w);return K.jsxDEV("div",{className:"ls-ref-section",children:[K.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>H((O)=>!O),children:[K.jsxDEV("span",{className:"ls-ref-section-title",children:[l,e]},void 0,!0,void 0,this),n?K.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):K.jsxDEV(t0,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n&&K.jsxDEV("div",{className:"ls-ref-section-body",children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qg=({children:l})=>K.jsxDEV("code",{className:"ls-ref-code",children:l},void 0,!1,void 0,this),Km=({children:l})=>K.jsxDEV("span",{className:"ls-ref-perm",children:l},void 0,!1,void 0,this),Um=()=>K.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),$m=()=>K.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),ph=({label:l,cols:e})=>K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:e,className:"ls-ref-group-header",children:l},void 0,!1,void 0,this)},void 0,!1,void 0,this),OP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],mm=()=>{let l="";return K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:OP.map((e)=>{let w=e.group!==l?e.group:"";return l=e.group,K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],Lm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:qP.map((l)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ph,{label:l.group,cols:2},`hdr-${l.group}`,!1,void 0,this),l.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:[e.perms.length===0&&!e.note?K.jsxDEV(Um,{},void 0,!1,void 0,this):null,e.perms.map((w)=>K.jsxDEV(Km,{children:w},w,!1,void 0,this)),e.note?K.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:e.perms.length?4:0},children:e.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},e.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),tP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],Im=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:tP.map((l)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),AP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],Fm=({type:l})=>{if(l==="silent")return K.jsxDEV($m,{},void 0,!1,void 0,this);if(l==="boolean")return K.jsxDEV(qg,{children:'"true" / "false"'},void 0,!1,void 0,this);return K.jsxDEV(qg,{children:"string"},void 0,!1,void 0,this)},Nm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:AP.map((l)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ph,{label:l.description?K.jsxDEV(K.Fragment,{children:[l.label," — ",K.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:l.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):l.label,cols:4},`hdr-${l.label}`,!1,void 0,this),l.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:e.aliases==="—"?K.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):K.jsxDEV(qg,{children:e.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:K.jsxDEV(Fm,{type:e.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],Bm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:MP.map((l)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[l.name,l.note&&K.jsxDEV("div",{className:"ls-ref-type-note",children:l.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${l.name}`,!1,void 0,this),l.fields.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.name}-${e.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],Zm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:WP.map((l)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ph,{label:l.group,cols:3},`hdr-${l.group}`,!1,void 0,this),l.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.group}-${e.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],GP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],xm=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],XP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],Cm=()=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",K.jsxDEV(qg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",K.jsxDEV(qg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",K.jsxDEV(qg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",K.jsxDEV(qg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",K.jsxDEV(qg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",K.jsxDEV(qg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:[K.jsxDEV(ph,{label:"ls:components",cols:3},void 0,!1,void 0,this),RP.map((l)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this)),K.jsxDEV(ph,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),GP.map((l)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this)),K.jsxDEV(ph,{label:"ls:icons",cols:3},void 0,!1,void 0,this),xm.map((l)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:XP.map((l)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[l.name,l.note&&K.jsxDEV("div",{className:"ls-ref-type-note",children:l.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${l.name}`,!1,void 0,this),l.fields.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.name}-${e.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),PG=()=>K.jsxDEV("div",{className:"ls-ref",children:[K.jsxDEV("div",{className:"ls-ref-toolbar",children:K.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>iG(),title:"Download the current reference as a Markdown file",children:[K.jsxDEV(Ye,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(M0,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:K.jsxDEV(mm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(j5,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:K.jsxDEV(Lm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(s5,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[K.jsxDEV(Im,{},void 0,!1,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",K.jsxDEV(qg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(y5,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[K.jsxDEV(Nm,{},void 0,!1,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",K.jsxDEV(qg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",K.jsxDEV(qg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(Bv,{size:11},void 0,!1,void 0,this),title:"Key Types",children:K.jsxDEV(Bm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(a5,{size:11},void 0,!1,void 0,this),title:"API Functions",children:K.jsxDEV(Zm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(x5,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:K.jsxDEV(Cm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(p5,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[K.jsxDEV("p",{className:"ls-ref-muted",children:[K.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",K.jsxDEV(qg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",K.jsxDEV(qg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",K.jsxDEV(qg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",K.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[K.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",K.jsxDEV(qg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",K.jsxDEV(qg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",K.jsxDEV(qg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",K.jsxDEV(qg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Lr=Pr(rg(),1),HG=!1,OG=({script:l,allScripts:e,activeContext:w,isRunning:u,consoleEntries:n,editorFontSize:H,autosaveDebounceMs:O,onClearConsole:q,sendToBackend:R})=>{let[X,G]=Cg.useState(l.code),[A,Y]=Cg.useState(!1),[L,S]=Cg.useState(!1),[T,_]=Cg.useState(l.name),[rr,nr]=Cg.useState("code"),[vr,a]=Cg.useState(!1),[p,lr]=Cg.useState(!1),B=Cg.useRef(null),y=Cg.useRef(null),j=Cg.useRef(null),x=Cg.useRef(l.id),Wr=Cg.useRef(R);Cg.useEffect(()=>{x.current=l.id},[l.id]),Cg.useEffect(()=>{Wr.current=R},[R]),Cg.useEffect(()=>{G(l.code),Y(!1),_(l.name),lr(!1)},[l.id,l.code,l.name]),Cg.useEffect(()=>{return()=>{if(B.current)clearTimeout(B.current),B.current=null;let F=j.current;if(F!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${x.current}, len=${F.length})`);try{Wr.current({type:"update_script",id:x.current,patch:{code:F}})}catch(or){console.error("[LumiScript] ScriptEditor unmount-flush failed:",or)}j.current=null}}},[]),Cg.useEffect(()=>{R({type:"get_active_context"})},[l.id,R]),Cg.useEffect(()=>{let F=setInterval(()=>{R({type:"get_active_context"})},2000);return()=>clearInterval(F)},[R]);let tr=Cg.useCallback((F)=>{console.log(`[LumiScript] saveCode: script=${l.id}, len=${F.length}, head="${F.slice(0,40).replace(/\n/g,"\\n")}"`),R({type:"update_script",id:l.id,patch:{code:F}}),j.current=null,Y(!1)},[l.id,R]),Gr=(F)=>{if(F===void 0)return;if(G(F),Y(F!==l.code),j.current=F,B.current)clearTimeout(B.current);B.current=setTimeout(()=>tr(F),O)},Zr=(F,or)=>{if(y.current=F,!HG){HG=!0;let Or=or.languages.typescript.javascriptDefaults;Or.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Or.setCompilerOptions({target:or.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Or.addExtraLib(bG,"ts:lumiverse/lumiscript-api.d.ts")}F.addCommand(or.KeyMod.CtrlCmd|or.KeyCode.KeyS,()=>{if(B.current)clearTimeout(B.current);tr(F.getValue())}),F.getModel()?.setEOL(or.editor.EndOfLineSequence.LF)},k=()=>{if(u)return;if(B.current)clearTimeout(B.current),B.current=null;if(A)tr(y.current?.getValue()??X);R({type:"run_script",id:l.id})},s=()=>{let F=T.trim();if(F&&F!==l.name)R({type:"update_script",id:l.id,patch:{name:F}});S(!1)},er=(F)=>{let or=l.bindings??[];R({type:"update_script",id:l.id,patch:{bindings:[...or,F]}})},zr=(F)=>{R({type:"update_script",id:l.id,patch:{bindings:(l.bindings??[]).filter((or,Or)=>Or!==F)}})},Xr=()=>{if(l.allowDangerous)R({type:"update_script",id:l.id,patch:{allowDangerous:!1}});else if(p)lr(!1),R({type:"update_script",id:l.id,patch:{allowDangerous:!0}});else lr(!0)},V=(F)=>new Date(F).toLocaleString();return Lr.jsxDEV("div",{className:"ls-editor-root",children:[Lr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?Lr.jsxDEV("input",{className:"ls-editor-name-input",value:T,autoFocus:!0,onChange:(F)=>_(F.target.value),onBlur:s,onKeyDown:(F)=>{if(F.key==="Enter")s();if(F.key==="Escape")_(l.name),S(!1)}},void 0,!1,void 0,this):Lr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>S(!0),title:"Click to rename",style:{cursor:"text"},children:l.name},void 0,!1,void 0,this),A&&Lr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>nr("code"),title:"Code editor",children:[Lr.jsxDEV(Wo,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>nr("docs"),title:"API reference",children:[Lr.jsxDEV(C5,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),l.type!=="library"&&Lr.jsxDEV("button",{className:`ls-btn${u?"":" ls-accent"}`,onClick:k,disabled:u,children:[u?Lr.jsxDEV(xv,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Lr.jsxDEV(Qe,{size:15},void 0,!1,void 0,this),u?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Lr.jsxDEV("div",{className:"ls-editor-monaco",children:Lr.jsxDEV(gG,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:X,onChange:Gr,onMount:Zr,options:{minimap:{enabled:!1},fontSize:H,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},l.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Lr.jsxDEV("div",{className:"ls-editor-docs",children:Lr.jsxDEV(PG,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Lr.jsxDEV(oG,{entries:n,isRunning:u,onClear:q},void 0,!1,void 0,this),l.type==="trigger"&&Lr.jsxDEV(hG,{scriptId:l.id,triggers:l.triggers??[],sendToBackend:R},void 0,!1,void 0,this),l.type==="trigger"&&Lr.jsxDEV(lG,{bindings:l.bindings??[],activeContext:w,onAdd:er,onRemove:zr},void 0,!1,void 0,this),p&&Lr.jsxDEV("div",{className:"ls-danger-confirm",children:[Lr.jsxDEV(Dh,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:Xr,children:"Enable"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-meta-footer",children:[Lr.jsxDEV("span",{className:"ls-meta-item",children:Lr.jsxDEV("button",{className:"ls-danger-btn",onClick:Xr,title:"Toggle dangerous mode",children:[l.allowDangerous?Lr.jsxDEV(Dh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Lr.jsxDEV(gw,{size:11},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:l.allowDangerous?"ls-dangerous":"",children:l.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Lr.jsxDEV(Je,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("select",{className:"ls-folder-select",value:l.folder??"",onChange:(F)=>{let or=F.target.value;if(or==="__new__"){let Or=window.prompt("New folder name:");if(Or?.trim())R({type:"update_script",id:l.id,patch:{folder:Or.trim()}})}else R({type:"update_script",id:l.id,patch:{folder:or}})},children:[Lr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(e.map((F)=>F.folder).filter((F)=>!!F))].sort().map((F)=>Lr.jsxDEV("option",{value:F,children:F},F,!1,void 0,this)),Lr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(V5,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Updated ",V(l.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(T5,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Created ",V(l.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:l.id,onClick:()=>{navigator.clipboard.writeText(l.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[vr?Lr.jsxDEV(S5,{size:10},void 0,!1,void 0,this):Lr.jsxDEV(pl,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["ID ",l.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $o=Pr(rg(),1),tG=({scripts:l,initialScriptId:e,activeContext:w,execInfo:u,activeRunScriptId:n,isRunning:H,consoleHistory:O,editorFontSize:q,autosaveDebounceMs:R,onClearConsole:X,onClose:G,sendToBackend:A})=>{let[Y,L]=mw.useState(e),S=l.find((vr)=>vr.id===Y)??null;mw.useEffect(()=>{L(e)},[e]),mw.useEffect(()=>{let vr=(a)=>{if(a.key==="Escape")G()};return document.addEventListener("keydown",vr),()=>document.removeEventListener("keydown",vr)},[G]);let T=S?O[S.id]??[]:[],_=H&&S?.id===n;return qG.createPortal($o.jsxDEV("div",{className:"ls-modal-overlay",onClick:(vr)=>{if(vr.target===vr.currentTarget)G()},children:$o.jsxDEV("div",{className:"ls-modal-card",onClick:(vr)=>vr.stopPropagation(),children:[$o.jsxDEV("div",{className:"ls-modal-header",children:[$o.jsxDEV("span",{className:"ls-modal-title",children:[$o.jsxDEV(Cv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),$o.jsxDEV("button",{className:"ls-modal-close",onClick:G,title:"Close (Esc)",children:$o.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$o.jsxDEV("div",{className:"ls-modal-body",children:[$o.jsxDEV("div",{className:"ls-modal-sidebar",children:$o.jsxDEV(X2,{scripts:l,selectedId:Y,execInfo:u,onSelect:L,onEdit:L,sendToBackend:A},void 0,!1,void 0,this)},void 0,!1,void 0,this),$o.jsxDEV("div",{className:"ls-modal-main",children:S?$o.jsxDEV(OG,{script:S,allScripts:l,activeContext:w,isRunning:_,consoleEntries:T,editorFontSize:q,autosaveDebounceMs:R,onClearConsole:()=>{if(S)X(S.id)},sendToBackend:A},void 0,!1,void 0,this):$o.jsxDEV("div",{className:"ls-placeholder",children:[$o.jsxDEV(Cv,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),$o.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var L2=Pr(rg(),1),AG=({scripts:l,activeContext:e,execInfo:w,activeRunScriptId:u,isRunning:n,consoleHistory:H,editorFontSize:O,autosaveDebounceMs:q,onClearConsole:R,onScriptOpened:X,sendToBackend:G})=>{let[A,Y]=I2.useState(null);return I2.useEffect(()=>{if(A&&X)X(A)},[A,X]),L2.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[L2.jsxDEV(X2,{scripts:l,selectedId:A,execInfo:w,onSelect:()=>{},onEdit:Y,sendToBackend:G},void 0,!1,void 0,this),A!==null&&L2.jsxDEV(tG,{scripts:l,initialScriptId:A,activeContext:e,execInfo:w,activeRunScriptId:u,isRunning:n,consoleHistory:H,editorFontSize:O,autosaveDebounceMs:q,onClearConsole:R,onClose:()=>Y(null),sendToBackend:G},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var MG=Pr(eg(),1);var cg=Pr(rg(),1),Tm=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function Sm(l){if(l===void 0)return"undefined";if(l===null)return"null";if(typeof l==="string")return l.length>80?l.slice(0,77)+"…":l;try{let e=JSON.stringify(l);return e.length>80?e.slice(0,77)+"…":e}catch{return String(l)}}var WG=({variables:l,sendToBackend:e})=>{let[w,u]=MG.useState(new Set(["local","global","chat","character"])),n=(O)=>{u((q)=>{let R=new Set(q);if(R.has(O))R.delete(O);else R.add(O);return R})},H=l?Object.values(l).reduce((O,q)=>O+Object.keys(q).length,0):0;return cg.jsxDEV("div",{className:"ls-status-section",children:[cg.jsxDEV("div",{className:"ls-inject-header",children:[cg.jsxDEV(dl,{size:10},void 0,!1,void 0,this),"Variables",H>0&&cg.jsxDEV("span",{className:"ls-inject-count",children:H},void 0,!1,void 0,this),cg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>e({type:"get_variables"}),children:cg.jsxDEV(A0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),cg.jsxDEV("div",{className:"ls-status-section-body",children:!l?cg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):H===0?cg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):Tm.map(({key:O,label:q,hint:R})=>{let X=l[O],G=Object.keys(X),A=w.has(O);if(G.length===0)return null;return cg.jsxDEV("div",{className:"ls-vars-scope",children:[cg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>n(O),children:[A?cg.jsxDEV(Ro,{size:10},void 0,!1,void 0,this):cg.jsxDEV(Ml,{size:10},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-name",children:q},void 0,!1,void 0,this),R&&cg.jsxDEV("span",{className:"ls-vars-scope-hint",children:R},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-count",children:G.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&cg.jsxDEV("div",{className:"ls-vars-scope-body",children:G.sort().map((Y)=>cg.jsxDEV("div",{className:"ls-vars-entry",children:[cg.jsxDEV("span",{className:"ls-vars-key",children:Y},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-value",title:String(X[Y]),children:Sm(X[Y])},void 0,!1,void 0,this)]},Y,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var U1=Pr(eg(),1);function F2(l){if(!Number.isFinite(l)||l<=0)return"0 B";let e=["B","KB","MB","GB"],w=Math.min(e.length-1,Math.floor(Math.log(l)/Math.log(1024))),u=l/Math.pow(1024,w);return`${w===0?u.toFixed(0):u.toFixed(1)} ${e[w]}`}function Lw(l){let e;if(typeof l==="number")e=l;else{if(!l)return"—";e=new Date(l).getTime()}if(!Number.isFinite(e)||e<=0)return"—";let w=Date.now()-e;if(w<60000)return"just now";if(w<3600000)return`${Math.floor(w/60000)}m ago`;if(w<86400000)return`${Math.floor(w/3600000)}h ago`;if(w<2592000000)return`${Math.floor(w/86400000)}d ago`;return new Date(e).toISOString().slice(0,10)}var YP={script:"script",character:"char",chat:"chat"},RG={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function N2(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(w,u,n,H,O,q,R)=>{if(u)return`<span class="ls-json-key">${u}</span>${n}`;if(H)return`<span class="ls-json-string">${H}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(q)return`<span class="ls-json-null">${q}</span>`;if(R)return`<span class="ls-json-number">${R}</span>`;return w})}async function JP(l){try{return await navigator.clipboard.writeText(l),!0}catch{return!1}}var Ir=Pr(rg(),1),dh=["script","character","chat"],km=10485760,Dm=41943040,Vm=52428800;function _m(l){if(l>=Dm)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(l>=km)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function ym(l){if(l.scope==="character"){if(l.characterName)return`character: ${l.characterName} (${l.characterId})
${l.path}`;if(l.characterId)return`character: ${l.characterId} (not currently loaded)
${l.path}`}if(l.scope==="chat"){if(l.chatName)return`chat: ${l.chatName} (${l.chatId})
${l.path}`;if(l.chatId)return`chat: ${l.chatId} (not currently loaded)
${l.path}`}return l.path}function Em(l,e,w,u){switch(w){case"name":return l.name.localeCompare(e.name,void 0,{sensitivity:"base"});case"scope":return l.scope.localeCompare(e.scope);case"owner":{let n=u.get(l.scriptId)??l.scriptId,H=u.get(e.scriptId)??e.scriptId;return n.localeCompare(H,void 0,{sensitivity:"base"})}case"size":return l.sizeBytes-e.sizeBytes;case"updated":return new Date(l.modifiedAt).getTime()-new Date(e.modifiedAt).getTime()}}var GG=({collections:l,scripts:e,sendToBackend:w,onInspect:u,onDrop:n})=>{let[H,O]=U1.useState(""),[q,R]=U1.useState(()=>new Set(dh)),[X,G]=U1.useState(null),[A,Y]=U1.useState("asc"),L=U1.useMemo(()=>{let B=new Map;for(let y of e)B.set(y.id,y.name);return B},[e]),S=U1.useMemo(()=>{if(!l)return null;let B=l;if(q.size<dh.length)B=B.filter((j)=>q.has(j.scope));let y=H.trim().toLowerCase();if(y)B=B.filter((j)=>j.name.toLowerCase().includes(y));if(X){let j=A==="asc"?1:-1;B=B.slice().sort((x,Wr)=>Em(x,Wr,X,L)*j)}return B},[l,q,H,X,A,L]),T=()=>w({type:"list_collections"}),_=(B)=>{R((y)=>{let j=new Set(y);if(j.has(B))j.delete(B);else j.add(B);if(j.size===0)return new Set(dh);return j})},rr=(B)=>{if(X!==B){G(B),Y("asc");return}if(A==="asc"){Y("desc");return}G(null)},nr=()=>{O(""),R(new Set(dh))},vr=l?.length??0,a=S?.length??0,p=H.trim().length>0||q.size<dh.length,lr=(B)=>{if(X!==B)return Ir.jsxDEV(D5,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return A==="asc"?Ir.jsxDEV(Ml,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Ir.jsxDEV(Ro,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Ir.jsxDEV("div",{className:"ls-status-section",children:[Ir.jsxDEV("div",{className:"ls-inject-header",children:[Ir.jsxDEV(dl,{size:10},void 0,!1,void 0,this),"Collections",vr>0&&Ir.jsxDEV("span",{className:"ls-inject-count",children:vr},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:T,children:Ir.jsxDEV(A0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-status-section-body",children:l===null?Ir.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):l.length===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Ir.jsxDEV(Ir.Fragment,{children:[Ir.jsxDEV("div",{className:"ls-collections-filter",children:[Ir.jsxDEV("div",{className:"ls-collections-filter-search",children:[Ir.jsxDEV(R1,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:H,onChange:(B)=>O(B.target.value)},void 0,!1,void 0,this),H&&Ir.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Ir.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-collections-filter-chips",children:dh.map((B)=>{let y=q.has(B);return Ir.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":B,"aria-pressed":y,title:y?`Hide ${B}-scoped`:`Show ${B}-scoped`,onClick:()=>_(B),children:YP[B]},B,!1,void 0,this)})},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${a}/${vr}`:vr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:[Ir.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Ir.jsxDEV("button",{onClick:nr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Ir.jsxDEV("div",{className:"ls-collections-list",children:[Ir.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S.map((B)=>{let y=L.get(B.scriptId)??`(${B.scriptId.slice(0,8)}…)`,j=!L.has(B.scriptId),x=j?`scriptId: ${B.scriptId} (not currently loaded)`:`${y} (${B.scriptId})`;return Ir.jsxDEV("div",{className:"ls-collections-row",children:[Ir.jsxDEV("span",{className:"ls-collections-name",title:B.name,children:B.name},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-scope","data-scope":B.scope,title:ym(B),children:YP[B.scope]},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:`ls-collections-owner${j?" ls-collections-owner-unknown":""}`,title:x,children:y},void 0,!1,void 0,this),(()=>{let Wr=_m(B.sizeBytes),tr=(B.sizeBytes/Vm*100).toFixed(B.sizeBytes<1048576?2:1),Gr=`${B.sizeBytes.toLocaleString()} bytes (${tr}% of 50 MB cap)`;return Ir.jsxDEV("span",{className:"ls-collections-size","data-budget":Wr.tier,title:Gr,style:Wr.tier==="normal"?void 0:{color:Wr.color,fontWeight:600},children:F2(B.sizeBytes)},void 0,!1,void 0,this)})(),Ir.jsxDEV("span",{className:"ls-collections-updated",title:B.modifiedAt,children:Lw(B.modifiedAt)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-actions",children:[Ir.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>u(B.path),children:Ir.jsxDEV(_5,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>n(B),children:Ir.jsxDEV(Uo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},B.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Dg=Pr(eg(),1),JG=Pr(Ch(),1);var lv=Pr(eg(),1),XG=Pr(Ch(),1);var Yg=Pr(rg(),1);function cm(l){let{id:e,createdAt:w,updatedAt:u,...n}=l;try{return JSON.stringify(n,null,2)}catch{return"{}"}}var YG=({path:l,record:e,onClose:w,sendToBackend:u})=>{let[n,H]=lv.useState(()=>cm(e)),[O,q]=lv.useState(null),R=lv.useRef(null),X=lv.useRef(null),G=lv.useRef(null);lv.useEffect(()=>{let T=(_)=>{if(_.key==="Escape")w()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[w]),lv.useEffect(()=>{let T=(_)=>{if(_.key!=="Tab")return;let rr=R.current;if(!rr)return;let nr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(nr.length===0)return;let vr=nr[0],a=nr[nr.length-1],p=document.activeElement,lr=p!==null&&rr.contains(p);if(_.shiftKey){if(!lr||p===vr)_.preventDefault(),a.focus()}else if(!lr||p===a)_.preventDefault(),vr.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[]),lv.useEffect(()=>{let T=setTimeout(()=>X.current?.focus(),0);return()=>clearTimeout(T)},[]);let A=()=>{let T;try{T=JSON.parse(n)}catch(_){let rr=_ instanceof Error?_.message:String(_);q(`JSON parse error: ${rr}`);return}if(T===null||typeof T!=="object"||Array.isArray(T)){q("Record must be a JSON object — not an array, null, or primitive.");return}q(null),u({type:"update_record",path:l,recordId:String(e.id),patch:T}),w()},Y=(T)=>{if((T.metaKey||T.ctrlKey)&&T.key==="Enter")T.preventDefault(),A()},L=String(e.id),S=Yg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)w()},children:Yg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:R,onClick:(T)=>T.stopPropagation(),children:[Yg.jsxDEV("div",{className:"ls-modal-header",children:[Yg.jsxDEV("span",{className:"ls-modal-title",children:[Yg.jsxDEV(sl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Yg.jsxDEV("button",{className:"ls-modal-close",onClick:w,title:"Cancel (Esc)",children:Yg.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-body",children:[Yg.jsxDEV("div",{className:"ls-edit-meta",children:[Yg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Yg.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Yg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Yg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Yg.jsxDEV("pre",{ref:G,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:N2(n)+`
`}},void 0,!1,void 0,this),Yg.jsxDEV("textarea",{ref:X,className:"ls-edit-textarea",value:n,onChange:(T)=>{if(H(T.target.value),O)q(null)},onKeyDown:Y,onScroll:(T)=>{let _=G.current;if(!_)return;_.scrollTop=T.currentTarget.scrollTop,_.scrollLeft=T.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Yg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Yg.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),Yg.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-drop-actions",children:[Yg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:w,children:"Cancel"},void 0,!1,void 0,this),Yg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:A,title:"Save (Ctrl/Cmd+Enter)",children:[Yg.jsxDEV(rw,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return XG.createPortal(S,document.body)};var f=Pr(rg(),1),Ie=50,am=150,jm=1200,fm=4000,QG=({path:l,summary:e,records:w,total:u,error:n,stats:H,refreshToken:O,onClose:q,sendToBackend:R})=>{let[X,G]=Dg.useState(""),[A,Y]=Dg.useState(""),[L,S]=Dg.useState(0),[T,_]=Dg.useState("shallow"),[rr,nr]=Dg.useState(0),[vr,a]=Dg.useState(()=>new Set),[p,lr]=Dg.useState(null),[B,y]=Dg.useState(null),[j,x]=Dg.useState("records");Dg.useEffect(()=>{let F=setTimeout(()=>Y(X),am);return()=>clearTimeout(F)},[X]),Dg.useEffect(()=>{S(0)},[A,T]),Dg.useEffect(()=>{let F=A.trim();if(T==="jsonquery")R({type:"inspect_collection",path:l,jsonqueryFilter:F||void 0,limit:Ie,offset:L*Ie});else R({type:"inspect_collection",path:l,textFilter:F||void 0,deepFilter:T==="deep"||void 0,limit:Ie,offset:L*Ie})},[l,A,T,L,O,rr,R]),Dg.useEffect(()=>{let F=(or)=>{if(or.key==="Escape")q()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[q]);let Wr=Math.max(1,Math.ceil(u/Ie)),tr=u===0?0:L*Ie+1,Gr=Math.min(u,(L+1)*Ie),Zr=Dg.useMemo(()=>{let F=l.match(/\/([^/]+)\.json$/);return F?F[1]:l},[l]),k=Dg.useMemo(()=>{if(!e)return null;if(e.scope==="character"&&e.characterName)return`character: ${e.characterName}`;if(e.scope==="chat"&&e.chatName)return`chat: ${e.chatName}`;return null},[e]),s=(F)=>{a((or)=>{let Or=new Set(or);return Or.add(F),Or}),setTimeout(()=>{a((or)=>{if(!or.has(F))return or;let Or=new Set(or);return Or.delete(F),Or})},jm)},er=async(F)=>{if(await JP(String(F.id)))s(`${F.id}:id`)},zr=async(F)=>{if(await JP(JSON.stringify(F,null,2)))s(`${F.id}:json`)};Dg.useEffect(()=>{if(B===null)return;let F=setTimeout(()=>y(null),fm);return()=>clearTimeout(F)},[B]);let Xr=(F)=>{let or=String(F.id);if(B===or)R({type:"delete_record",path:l,recordId:or}),y(null);else y(or)};Dg.useEffect(()=>{y(null),lr(null)},[L,A,T,l]),Dg.useEffect(()=>{x("records")},[l]),Dg.useEffect(()=>{if(j!=="stats")return;R({type:"analyze_collection",path:l})},[j,l,O,rr,R]);let V=f.jsxDEV("div",{className:"ls-modal-overlay",onClick:(F)=>{if(F.target===F.currentTarget)q()},children:f.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(F)=>F.stopPropagation(),children:[f.jsxDEV("div",{className:"ls-modal-header",children:[f.jsxDEV("span",{className:"ls-modal-title",children:[f.jsxDEV(dl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-name",children:Zr},void 0,!1,void 0,this),k&&f.jsxDEV("span",{className:"ls-inspect-title-path",title:l,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-path",title:l,children:l},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:()=>nr((F)=>F+1),title:"Refresh records",style:{marginRight:4},children:f.jsxDEV(A0,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:q,title:"Close (Esc)",children:f.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":j==="records",onClick:()=>x("records"),children:[f.jsxDEV(c5,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":j==="stats",onClick:()=>x("stats"),children:[f.jsxDEV(A1,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j==="records"&&f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{className:"ls-inspect-toolbar",children:[f.jsxDEV("div",{className:"ls-inspect-search",children:[f.jsxDEV(R1,{size:12},void 0,!1,void 0,this),f.jsxDEV("input",{type:T==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:T==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":T==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:X,onChange:(F)=>G(F.target.value),autoFocus:!0,spellCheck:T!=="jsonquery",autoCorrect:T==="jsonquery"?"off":"on",autoCapitalize:T==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),f.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>_("shallow"),children:f.jsxDEV(R1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>_("deep"),children:f.jsxDEV(M1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>_("jsonquery"),children:f.jsxDEV(Wo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-pager",children:[f.jsxDEV("span",{className:"ls-inspect-pager-status",children:u===0?"No matching records":f.jsxDEV(f.Fragment,{children:["Showing ",f.jsxDEV("strong",{children:tr},void 0,!1,void 0,this),"–",f.jsxDEV("strong",{children:Gr},void 0,!1,void 0,this)," of ",f.jsxDEV("strong",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.max(0,F-1)),disabled:L===0,title:"Previous page",children:f.jsxDEV(k5,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.min(Wr-1,F+1)),disabled:L>=Wr-1,title:"Next page",children:f.jsxDEV(t0,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n&&f.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[f.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),f.jsxDEV("span",{children:n},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-body",children:w===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):w.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:u===0&&A?f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{children:["No records match “",A,"”"]},void 0,!0,void 0,this),f.jsxDEV("button",{onClick:()=>G(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):u===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):f.jsxDEV("div",{className:"ls-inspect-records",children:w.map((F)=>{let or=String(F.id),Or=vr.has(`${F.id}:id`),Ar=vr.has(`${F.id}:json`);return f.jsxDEV("div",{className:"ls-inspect-record",children:[f.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${or}`,children:[f.jsxDEV("code",{children:[or.slice(0,12),"…"]},void 0,!0,void 0,this),f.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",f.jsxDEV("time",{title:new Date(F.createdAt).toISOString(),children:Lw(F.createdAt)},void 0,!1,void 0,this),F.updatedAt!==F.createdAt&&f.jsxDEV(f.Fragment,{children:[" · ","updated ",f.jsxDEV("time",{title:new Date(F.updatedAt).toISOString(),children:Lw(F.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Or?"Copied!":"Copy ID",onClick:()=>er(F),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Or?"var(--lumiverse-accent)":"inherit",opacity:Or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(pl,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Ar?"Copied!":"Copy full JSON",onClick:()=>zr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Ar?"var(--lumiverse-accent)":"inherit",opacity:Ar?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(Bv,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(sl,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action"+(B===or?" ls-inspect-record-action-confirm":""),title:B===or?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Xr(F),style:{background:B===or?"rgba(246, 130, 130, 0.18)":"transparent",border:B===or?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:B===or?"3px 6px":4,marginLeft:2,cursor:"pointer",color:B===or?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:B===or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:B===or?600:400,borderRadius:3},children:[f.jsxDEV(Uo,{size:11},void 0,!1,void 0,this),B===or?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:N2(pm(F))}},void 0,!1,void 0,this)]},or,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j==="stats"&&f.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:H===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):H.fields.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:H.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):f.jsxDEV(rL,{stats:H},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return f.jsxDEV(f.Fragment,{children:[JG.createPortal(V,document.body),p&&f.jsxDEV(YG,{path:l,record:p,onClose:()=>lr(null),sendToBackend:R},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function pm(l){let{id:e,createdAt:w,updatedAt:u,...n}=l;try{return JSON.stringify(n,null,2)}catch{return String(l)}}var dm={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function sm(l){if(typeof l==="string")return`"${l.length>32?l.slice(0,30)+"…":l}"`;if(l===null)return"null";return String(l)}function QP(l){if(!Number.isFinite(l))return"—";return Number.isInteger(l)?String(l):l.toFixed(2)}var rL=({stats:l})=>{return f.jsxDEV("div",{className:"ls-inspect-stats",children:[f.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",f.jsxDEV("strong",{children:l.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",l.totalRecords===1?"record":"records"," ·"," ",f.jsxDEV("strong",{children:l.fields.length},void 0,!1,void 0,this)," ",l.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-grid",children:l.fields.map((e)=>f.jsxDEV(gL,{field:e,totalRecords:l.totalRecords},e.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},gL=({field:l,totalRecords:e})=>{let w=e===0?0:Math.round(l.presence/e*100),u=Object.entries(l.types);return u.sort((n,H)=>H[1]-n[1]),f.jsxDEV("div",{className:"ls-inspect-stats-card",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[f.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:l.name,children:l.name},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${l.presence} of ${e} records`,children:[w,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:u.map(([n,H])=>f.jsxDEV("span",{className:dm[n],children:[n," · ",H]},n,!0,void 0,this))},void 0,!1,void 0,this),l.numericRange&&f.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[f.jsxDEV("span",{children:["min ",f.jsxDEV("strong",{children:QP(l.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["max ",f.jsxDEV("strong",{children:QP(l.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["mean ",f.jsxDEV("strong",{children:QP(l.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),l.topValues.length>0&&f.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",l.topValues.length," of ",l.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:l.topValues.map((n,H)=>f.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(n.value),children:[f.jsxDEV("code",{children:sm(n.value)},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",n.count]},void 0,!0,void 0,this)]},H,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Iw=Pr(eg(),1),zG=Pr(Ch(),1);var ug=Pr(rg(),1);function oL(l){if(l.scope==="character"&&l.characterName&&l.characterId)return{label:"Character",name:l.characterName,id:l.characterId};if(l.scope==="chat"&&l.chatName&&l.chatId)return{label:"Chat",name:l.chatName,id:l.chatId};return null}var KG=({target:l,recordCount:e,onConfirm:w,onCancel:u})=>{let n=Iw.useRef(null);Iw.useEffect(()=>{let O=(q)=>{if(q.key==="Escape")u()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[u]),Iw.useEffect(()=>{let O=(q)=>{if(q.key!=="Tab")return;let R=n.current;if(!R)return;let X=Array.from(R.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(X.length===0)return;let G=X[0],A=X[X.length-1],Y=document.activeElement,L=Y!==null&&R.contains(Y);if(q.shiftKey){if(!L||Y===G)q.preventDefault(),A.focus()}else if(!L||Y===A)q.preventDefault(),G.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let H=ug.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)u()},children:ug.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:n,onClick:(O)=>O.stopPropagation(),children:[ug.jsxDEV("div",{className:"ls-modal-header",children:[ug.jsxDEV("span",{className:"ls-modal-title",children:[ug.jsxDEV(Uo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ug.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:ug.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-body",children:[ug.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target",children:[ug.jsxDEV("div",{className:"ls-drop-target-name",children:l.name},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target-meta",children:[ug.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":l.scope,children:RG[l.scope]},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-drop-target-size",children:F2(l.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=oL(l);if(!O)return null;return ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",ug.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ug.jsxDEV("div",{className:"ls-drop-target-path",title:l.path,children:l.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e===null?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):e>=0?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:e===0?"Collection is currently empty.":ug.jsxDEV(ug.Fragment,{children:["Will delete ",ug.jsxDEV("strong",{children:e.toLocaleString()},void 0,!1,void 0,this)," ",e===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ug.jsxDEV("div",{className:"ls-drop-warning",children:[ug.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),ug.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-actions",children:[ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:w,children:[ug.jsxDEV(Uo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return zG.createPortal(H,document.body)};var Q0=Pr(rg(),1),UG=({variables:l,collections:e,scripts:w,sendToBackend:u,inspectPath:n,inspectRecords:H,inspectTotal:O,inspectError:q,inspectStats:R,inspectRefreshToken:X,onInspect:G,dropTarget:A,dropTargetCount:Y,onDrop:L,onDropConfirm:S})=>{return Q0.jsxDEV(Q0.Fragment,{children:[Q0.jsxDEV("div",{className:"ls-storage-list",children:[Q0.jsxDEV(WG,{variables:l,sendToBackend:u},void 0,!1,void 0,this),Q0.jsxDEV(GG,{collections:e,scripts:w,sendToBackend:u,onInspect:G,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n!==null&&Q0.jsxDEV(QG,{path:n,summary:e?.find((T)=>T.path===n),records:H,total:O,error:q,stats:R,refreshToken:X,onClose:()=>G(null),sendToBackend:u},void 0,!1,void 0,this),A!==null&&Q0.jsxDEV(KG,{target:A,recordCount:Y,onConfirm:S,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var qr=Pr(rg(),1),$G=({onBackendMessage:l,sendToBackend:e})=>{let[w,u]=Jg.useState("manage"),[n,H]=Jg.useState([]),[O,q]=Jg.useState(v2),[R,X]=Jg.useState({characterId:null,characterName:null,chatId:null}),[G,A]=Jg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[Y,L]=Jg.useState([]),[S,T]=Jg.useState([]),[_,rr]=Jg.useState(null),[nr,vr]=Jg.useState(null),[a,p]=Jg.useState(null),[lr,B]=Jg.useState(null),[y,j]=Jg.useState(0),[x,Wr]=Jg.useState(null),[tr,Gr]=Jg.useState(0),[Zr,k]=Jg.useState(null),[s,er]=Jg.useState(null),[zr,Xr]=Jg.useState(null),[V,F]=Jg.useState({});Jg.useEffect(()=>{let Ar=l((xr)=>{let br=xr;switch(br.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${br.scripts.length} script(s)`),H(br.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${br.script.id}, codeLen=${br.script.code?.length??-1}`),H((Cr)=>Cr.map((fr)=>fr.id===br.script.id?br.script:fr));break}case"settings_updated":q(br.settings);break;case"active_context":X({characterId:br.characterId,characterName:br.characterName,chatId:br.chatId}),e({type:"get_variables"});break;case"variables_updated":rr(br.variables);break;case"collections_list":vr(br.collections);break;case"collection_records":B((Cr)=>{return br.records}),j(br.total),Wr(br.error??null);break;case"collection_stats":k((Cr)=>{return br.stats});break;case"collection_count":Xr((Cr)=>{return br.count});break;case"collections_updated":e({type:"list_collections"}),Gr((Cr)=>Cr+1);break;case"injections_updated":L(br.injections);break;case"tools_updated":T(br.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};A((fr)=>{let Wg=fr.consoleHistory[br.scriptId]??[],mo=Wg.length>0?[...Wg,Cr]:Wg;return{...fr,activeScriptId:br.scriptId,runId:br.runId,isRunning:!0,consoleHistory:{...fr.consoleHistory,[br.scriptId]:mo},scriptExecInfo:{...fr.scriptExecInfo,[br.scriptId]:{...fr.scriptExecInfo[br.scriptId],dot:"running"}}}}),F((fr)=>({...fr,[br.scriptId]:(fr[br.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;A((fr)=>{let Wg=fr.consoleHistory[br.scriptId]??[];if(Wg.length>=Cr)return fr;let wr=Wg.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:br.entry;return{...fr,consoleHistory:{...fr.consoleHistory,[br.scriptId]:[...Wg,wr]}}});break}case"execution_ended":A((Cr)=>{let fr=Cr.consoleHistory[br.scriptId]??[],Wg=Cr.scriptExecInfo[br.scriptId],mo=!br.success&&br.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:br.error}]:[],wr=!br.success?!0:Wg?.stickyError??!1,_o=!br.success||wr?"error":"success",Yo=br.duration??0,ag=br.success&&Yo===0&&(Wg?.duration??0)>0?Wg.duration:br.duration;return{...Cr,isRunning:!1,consoleHistory:mo.length?{...Cr.consoleHistory,[br.scriptId]:[...fr,...mo]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[br.scriptId]:{dot:_o,duration:ag,error:br.error??Wg?.error,stickyError:wr}}}});break;case"error":console.warn("[LumiScript]",br.message);break}});return e({type:"get_scripts"}),e({type:"get_settings"}),e({type:"get_active_context"}),e({type:"get_injections"}),e({type:"get_tools"}),Ar},[l,e]),Jg.useEffect(()=>{if(w==="storage")e({type:"list_collections"})},[w,e]),Jg.useEffect(()=>{if(Xr(null),s)e({type:"count_collection",path:s.path})},[s,e]);let or=Jg.useCallback((Ar)=>{A((xr)=>({...xr,consoleHistory:{...xr.consoleHistory,[Ar]:[]}}))},[]),Or=Jg.useCallback((Ar)=>{A((xr)=>{let br=xr.scriptExecInfo[Ar];if(!br?.stickyError)return xr;return{...xr,scriptExecInfo:{...xr.scriptExecInfo,[Ar]:{...br,dot:"idle",stickyError:!1}}}})},[]);return qr.jsxDEV("div",{className:"ls-panel",children:[qr.jsxDEV("div",{className:"ls-tabs",children:[qr.jsxDEV("button",{className:`ls-tab-pill${w==="manage"?" ls-active":""}`,onClick:()=>u("manage"),children:[qr.jsxDEV(Wo,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${w==="status"?" ls-active":""}`,onClick:()=>u("status"),children:[qr.jsxDEV(N5,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${w==="storage"?" ls-active":""}`,onClick:()=>u("storage"),children:[qr.jsxDEV(dl,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[w==="manage"&&qr.jsxDEV(AG,{scripts:n,activeContext:R,execInfo:G.scriptExecInfo,activeRunScriptId:G.activeScriptId,isRunning:G.isRunning,consoleHistory:G.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:or,onScriptOpened:Or,sendToBackend:e},void 0,!1,void 0,this),w==="status"&&qr.jsxDEV(vL,{scripts:n,execInfo:G.scriptExecInfo,invocationCounts:V,injections:Y,tools:S,sendToBackend:e},void 0,!1,void 0,this),w==="storage"&&qr.jsxDEV(UG,{variables:_,collections:nr,scripts:n,sendToBackend:e,inspectPath:a,inspectRecords:lr,inspectTotal:y,inspectError:x,inspectStats:Zr,inspectRefreshToken:tr,onInspect:(Ar)=>{p(Ar),B(null),j(0),k(null)},dropTarget:s,dropTargetCount:zr,onDrop:er,onDropConfirm:()=>{if(!s)return;let Ar=s.path;if(a===Ar)p(null),B(null),j(0),k(null);e({type:"drop_collection",path:Ar}),er(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},lL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},vL=({scripts:l,execInfo:e,invocationCounts:w,injections:u,tools:n,sendToBackend:H})=>{let O=l.filter((A)=>A.type==="trigger"&&A.enabled),q=Object.fromEntries(l.map((A)=>[A.id,A.name])),[R,X]=Jg.useState(new Set),G=(A)=>{X((Y)=>{let L=new Set(Y);if(L.has(A))L.delete(A);else L.add(A);return L})};return qr.jsxDEV("div",{className:"ls-status-list",children:[qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(Wo,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((A)=>{let Y=e[A.id],L=Y?.dot??"idle",S={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],T=A.triggers??[],_=w[A.id];return qr.jsxDEV("div",{className:"ls-status-row",children:[qr.jsxDEV("div",{className:"ls-status-row-main",children:[qr.jsxDEV("span",{className:S,title:lL[L]},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-status-name",children:A.name},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-status-right",children:[_!==void 0&&_>0&&qr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${_} time${_!==1?"s":""} this session`,children:["×",_]},void 0,!0,void 0,this),Y?.duration!==void 0&&L!=="running"&&qr.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[Y.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),T.length>0?qr.jsxDEV("div",{className:"ls-status-events",children:T.map((rr)=>qr.jsxDEV("span",{className:"ls-event-badge",children:[qr.jsxDEV(M0,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):qr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&Y?.error&&qr.jsxDEV("div",{className:"ls-status-error-row",children:qr.jsxDEV("span",{className:"ls-status-error-text",children:Y.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},A.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(bw,{size:10},void 0,!1,void 0,this),"Active Tools",n.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:n.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:n.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):n.map((A)=>qr.jsxDEV("div",{className:"ls-tool-row",children:[qr.jsxDEV("div",{className:"ls-tool-name",title:A.description,children:A.name},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-tool-meta",children:[A.council_eligible&&qr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-inject-script",title:A.scriptId,children:A.scriptName},void 0,!1,void 0,this),qr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${A.name}`,title:`Unregister "${A.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>H({type:"unregister_tool",name:A.name}),children:qr.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},A.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(ow,{size:10},void 0,!1,void 0,this),"Active Injections",u.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):u.map((A)=>{let Y=R.has(A.id);return qr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>G(A.id),children:[qr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${A.mode}`,title:A.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:A.mode==="intercept"?qr.jsxDEV(B5,{size:11},void 0,!1,void 0,this):qr.jsxDEV(Z5,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-inject-body",children:[qr.jsxDEV("div",{className:"ls-inject-header-row",children:[qr.jsxDEV("span",{className:"ls-inject-id",title:A.id,children:A.id},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-inject-meta",children:[qr.jsxDEV("span",{className:"ls-inject-role",children:A.role},void 0,!1,void 0,this),A.mode==="intercept"&&A.depth>0&&qr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${A.depth} message${A.depth!==1?"s":""}`,children:["d:",A.depth]},void 0,!0,void 0,this),A.ephemeral&&qr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:qr.jsxDEV(ze,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-inject-script",title:A.scriptId,children:q[A.scriptId]??A.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("span",{className:"ls-inject-chevron",children:Y?qr.jsxDEV(Ml,{size:10},void 0,!1,void 0,this):qr.jsxDEV(Ro,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&qr.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:A.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},A.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Fw=Pr(eg(),1);var Br=Pr(rg(),1),mG=({onBackendMessage:l,sendToBackend:e})=>{let[w,u]=Fw.useState(v2),[n,H]=Fw.useState([]);Fw.useEffect(()=>{let X=l((G)=>{let A=G;if(A.type==="scripts_updated")H(A.scripts);if(A.type==="settings_updated")u(A.settings)});return e({type:"get_settings"}),e({type:"get_scripts"}),X},[l,e]);let O=n.filter((X)=>X.type==="trigger").length,q=n.filter((X)=>X.type==="library").length,R=(X)=>{e({type:"update_settings",patch:{enabled:X}})};return Br.jsxDEV("div",{className:"ls-settings",children:[Br.jsxDEV("div",{className:"ls-settings-header",children:Br.jsxDEV("span",{className:"ls-settings-title",children:[Br.jsxDEV(Cv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-toggle-row",children:[Br.jsxDEV("label",{className:"ls-toggle",children:[Br.jsxDEV("input",{type:"checkbox",checked:w.enabled,onChange:(X)=>R(X.target.checked)},void 0,!1,void 0,this),Br.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-counts",children:[Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(Wo,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(Xe,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:q},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(ze,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(w.scriptTimeoutMs/1000),onChange:(X)=>{let G=Math.max(5,Math.min(300,Number(X.target.value)||60));e({type:"update_settings",patch:{scriptTimeoutMs:G*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:w.consoleHistoryLimit,onChange:(X)=>{let G=Math.max(50,Math.min(2000,Number(X.target.value)||500));e({type:"update_settings",patch:{consoleHistoryLimit:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(ew,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:w.editorFontSize,onChange:(X)=>{let G=Math.max(10,Math.min(24,Number(X.target.value)||12));e({type:"update_settings",patch:{editorFontSize:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:w.autosaveDebounceMs,onChange:(X)=>{let G=Math.max(300,Math.min(5000,Number(X.target.value)||1200));e({type:"update_settings",patch:{autosaveDebounceMs:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(Zv,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:w.defaultTriggerTemplate,onChange:(X)=>e({type:"update_settings",patch:{defaultTriggerTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:w.defaultLibraryTemplate,onChange:(X)=>e({type:"update_settings",patch:{defaultLibraryTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function eL(l){let e=l?.type;return typeof e==="string"&&e.startsWith("dom_")}var Xo=new Map;function sh(l,e){Xo.set(l,e)}function Tl(l){let e=Xo.get(l);for(let[w,u]of z0)if(u.elementId===l){if(e)e.removeEventListener(u.event,u.handler);z0.delete(w)}Xo.delete(l)}var Zw=new Map,Nw=new Map,Fe=new Map,Bw=new Map,z0=new Map;function LG(l,e){return`${l}:${e}`}function hL(l){let e=l.target,w={type:l.type};if(e){if(e.id)w.targetId=e.id;if("value"in e)w.targetValue=e.value;if("checked"in e)w.targetChecked=e.checked;if(e.dataset&&Object.keys(e.dataset).length>0){let u={};for(let[n,H]of Object.entries(e.dataset))if(H!==void 0)u[n]=H;w.dataset=u}}if(l instanceof MouseEvent)w.clientX=l.clientX,w.clientY=l.clientY;else if(typeof TouchEvent<"u"&&l instanceof TouchEvent){let u=l.touches[0]??l.changedTouches[0];if(u)w.clientX=u.clientX,w.clientY=u.clientY}if(l instanceof CustomEvent&&l.detail!==void 0)try{JSON.stringify(l.detail),w.detail=l.detail}catch{}return w}function bL(l,e){return`@scope ([data-ls-script="${e}"]) {
${l}
}`}function wL(l,e=5000){let w=document.querySelector(l);if(w)return Promise.resolve(w);return new Promise((u,n)=>{let H=!1,O=new MutationObserver(()=>{let q=document.querySelector(l);if(q&&!H)H=!0,O.disconnect(),u(q)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!H)H=!0,O.disconnect(),n(Error(`waitForElement: timeout for "${l}"`))},e)})}function uL(l){return l.querySelector('[class*="_bubble_"]')}var vv=new Map,iL=50;function nL(l,e,w){if(vv.size>=iL){let u=vv.keys().next().value;if(u)vv.get(u)?.cancel(),vv.delete(u)}vv.set(l,{scriptId:e,cancel:w})}function PL(l){for(let[e,w]of vv)if(w.scriptId===l)w.cancel(),vv.delete(e)}function FG(l,e,w){let u=e((n)=>{if(!eL(n))return;let H=n;switch(H.type){case"dom_inject":{let{scriptId:O,elementId:q,target:R,html:X,position:G,stableId:A,parentElementId:Y}=H;if(Xo.has(q)){console.warn(`[LumiScript] dom_inject: elementId "${q}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${q}">${X}</div>`,S=null;if(Y){let T=Xo.get(Y);if(!T){console.warn(`[LumiScript] dom_inject: parentElementId "${Y}" not in elementMap — drop`);break}let _=T.querySelector(R);if(!_){console.warn(`[LumiScript] dom_inject: selector "${R}" not found within parent "${Y}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,_.insertAdjacentElement(G,rr),S=rr}else S=l.dom.inject(R,L,G);if(S){if(Xo.set(q,S),Zw.set(q,O),A)Nw.set(LG(O,A),q)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:q,messageId:R,html:X,position:G,stableId:A}=H,Y=(rr)=>{let nr=rr.querySelector("[data-part]"),vr=nr?.getAttribute("data-part")??"character",a=nr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=G==="header"?` data-ls-tint="${vr}"`:"",lr=` data-ls-mode="${a}"`,B=`<div data-ls-script="${O}" data-ls-el="${q}"${p}${lr}>${X}</div>`,y,j;if(G==="header")y=rr,j="afterbegin";else if(G==="footer"&&a==="minimal")y=rr,j="beforeend";else y=uL(rr)??rr,j="beforeend";let x=l.dom.inject(y,B,j);if(Xo.set(q,x),Zw.set(q,O),A)Nw.set(LG(O,A),q)},L=`[data-message-id="${R}"]`,S=document.querySelector(L);if(S){Y(S);break}let T=!1;nL(q,O,()=>{T=!0}),wL(L).then((rr)=>{if(vv.delete(q),T)return;Y(rr)}).catch(()=>{vv.delete(q)});break}case"dom_update":{let O=Xo.get(H.elementId);if(!O)break;let q=O.querySelector(`[data-ls-el="${H.elementId}"]`)??O;q.innerHTML=H.html;break}case"dom_remove":{IG(H.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:q,css:R}=H,X=bL(R,O),G=l.dom.addStyle(X);Fe.set(q,G),Bw.set(q,O);break}case"dom_remove_style":{let O=Fe.get(H.styleId);if(O)O(),Fe.delete(H.styleId),Bw.delete(H.styleId);break}case"dom_listen":{let{elementId:O,listenerId:q,event:R,preventDefault:X}=H,G=Xo.get(O);if(!G)break;let A=(Y)=>{if(X)Y.preventDefault();let L=hL(Y);w({type:"dom_event",elementId:O,listenerId:q,event:R,data:L})};G.addEventListener(R,A),z0.set(q,{elementId:O,event:R,handler:A});break}case"dom_unlisten":{let O=z0.get(H.listenerId);if(!O)break;let q=Xo.get(O.elementId);if(q)q.removeEventListener(O.event,O.handler);z0.delete(H.listenerId);break}case"dom_cleanup_script":{let{scriptId:O}=H;PL(O);for(let[q,R]of Zw)if(R===O)IG(q);for(let[q,R]of Bw)if(R===O){let X=Fe.get(q);if(X)X();Fe.delete(q),Bw.delete(q)}for(let[q]of Nw)if(q.startsWith(O+":"))Nw.delete(q);break}case"dom_make_draggable":{let{elementId:O,handleSelector:q}=H,R=Xo.get(O);if(!R)break;let X=!1,G=!1;R.addEventListener("pointerdown",(A)=>{if(A.button!==0)return;if(q&&!A.target.closest(q))return;let Y=R.firstElementChild?.firstElementChild??R.firstElementChild??R,L=Y.getBoundingClientRect();Y.style.transform="none",Y.style.top=`${L.top}px`,Y.style.left=`${L.left}px`,Y.style.bottom="auto",Y.style.right="auto",X=!0,G=!1;let S=A.clientX-L.left,T=A.clientY-L.top;Y.style.cursor="grabbing";let _=(nr)=>{if(!X)return;G=!0,Y.style.top=`${nr.clientY-T}px`,Y.style.left=`${nr.clientX-S}px`},rr=()=>{if(!X)return;X=!1,Y.style.cursor="",document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",_),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),A.preventDefault()}),R.addEventListener("click",(A)=>{if(G)A.stopImmediatePropagation(),A.preventDefault(),G=!1},!0);break}}});return()=>{u();for(let[,n]of vv)n.cancel();vv.clear();for(let[,n]of z0){let H=Xo.get(n.elementId);if(H)H.removeEventListener(n.event,n.handler)}z0.clear();for(let[,n]of Xo)try{n.remove()}catch{}Xo.clear(),Zw.clear(),Nw.clear();for(let[,n]of Fe)try{n()}catch{}Fe.clear(),Bw.clear()}}function IG(l){for(let[w,u]of z0)if(u.elementId===l){let n=Xo.get(l);if(n)n.removeEventListener(u.event,u.handler);z0.delete(w)}let e=Xo.get(l);if(e)try{e.remove()}catch{}Xo.delete(l),Zw.delete(l)}function HL(l){let e=l?.type;return e==="ls_modal_open"||e==="ls_modal_set_title"||e==="ls_modal_dismiss"}var $1=new Map;function NG(l,e,w){let u=e((n)=>{if(!HL(n))return;let H=n;switch(H.type){case"ls_modal_open":{let{scriptId:O,modalId:q,rootElementId:R,options:X}=H;if($1.has(q))break;let G;try{G=l.ui.showModal({title:X.title,width:X.width,maxHeight:X.maxHeight,persistent:X.persistent})}catch(Y){console.warn("[LumiScript] ctx.ui.showModal failed:",Y),w({type:"ls_modal_dismissed",modalId:q});break}sh(R,G.root),G.root.setAttribute("data-ls-script",O),G.root.setAttribute("data-ls-modal",q);let A={modalId:q,rootElementId:R,handle:G,echoed:!1};$1.set(q,A),G.onDismiss(()=>{if(A.echoed)return;A.echoed=!0,Tl(R),$1.delete(q),w({type:"ls_modal_dismissed",modalId:q})}),w({type:"ls_modal_opened",modalId:q});break}case"ls_modal_set_title":{let O=$1.get(H.modalId);if(!O)break;try{O.handle.setTitle(H.title)}catch{}break}case"ls_modal_dismiss":{let O=$1.get(H.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Tl(O.rootElementId),$1.delete(H.modalId),w({type:"ls_modal_dismissed",modalId:H.modalId})}break}}});return()=>{u();for(let n of $1.values()){try{n.handle.dismiss()}catch{}Tl(n.rootElementId)}$1.clear()}}function OL(l){return l?.type==="ls_context_menu_show"}function BG(l,e,w){let u=e(async(n)=>{if(!OL(n))return;let H=n,O=null;try{O=(await l.ui.showContextMenu({position:H.options.position,items:H.options.items})).selectedKey}catch(q){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",q)}w({type:"ls_context_menu_result",requestId:H.requestId,selectedKey:O})});return()=>{u()}}function qL(l){let e=l?.type;return e==="ls_input_bar_action_register"||e==="ls_input_bar_action_set_label"||e==="ls_input_bar_action_set_subtitle"||e==="ls_input_bar_action_set_enabled"||e==="ls_input_bar_action_destroy"}var Vv=new Map;function tL(l,e){return`${l}:${e}`}function ZG(l,e,w){let u=e((n)=>{if(!qL(n))return;let H=n,O=tL(H.scriptId,H.actionId);switch(H.type){case"ls_input_bar_action_register":{let q=Vv.get(O);if(q){try{q.destroy()}catch{}Vv.delete(O)}let R;try{R=l.ui.registerInputBarAction({id:H.actionId,label:H.options.label,subtitle:H.options.subtitle,iconSvg:H.options.iconSvg,iconUrl:H.options.iconUrl,enabled:H.options.enabled})}catch(X){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",X);break}Vv.set(O,R),R.onClick(()=>{w({type:"ls_input_bar_action_click",scriptId:H.scriptId,actionId:H.actionId})}),w({type:"ls_input_bar_action_registered",scriptId:H.scriptId,actionId:H.actionId});break}case"ls_input_bar_action_set_label":{let q=Vv.get(O);if(!q)break;try{q.setLabel(H.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let q=Vv.get(O);if(!q)break;if(typeof q.setSubtitle!=="function")break;try{q.setSubtitle(H.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let q=Vv.get(O);if(!q)break;try{q.setEnabled(H.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let q=Vv.get(O);if(!q)break;try{q.destroy()}catch{}Vv.delete(O);break}}});return()=>{u();for(let n of Vv.values())try{n.destroy()}catch{}Vv.clear()}}function AL(l){let e=l?.type;return e==="ls_float_widget_create"||e==="ls_float_widget_move"||e==="ls_float_widget_set_visible"||e==="ls_float_widget_destroy"}var K0=new Map;function xG(l,e,w){let u=e((n)=>{if(!AL(n))return;let H=n;switch(H.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:q,rootElementId:R,options:X}=H,G=K0.get(q);if(G){try{G.handle.destroy()}catch{}Tl(G.rootElementId),K0.delete(q)}let A;try{A=l.ui.createFloatWidget({width:X.width,height:X.height,initialPosition:X.initialPosition,snapToEdge:X.snapToEdge,tooltip:X.tooltip,chromeless:X.chromeless})}catch(Y){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",Y);break}sh(R,A.root),A.root.setAttribute("data-ls-script",O),A.root.setAttribute("data-ls-widget",q),K0.set(q,{widgetId:q,rootElementId:R,handle:A}),A.onDragEnd((Y)=>{w({type:"ls_float_widget_drag_end",widgetId:q,x:Y.x,y:Y.y})}),w({type:"ls_float_widget_created",widgetId:q});break}case"ls_float_widget_move":{let O=K0.get(H.widgetId);if(!O)break;try{O.handle.moveTo(H.x,H.y)}catch{}break}case"ls_float_widget_set_visible":{let O=K0.get(H.widgetId);if(!O)break;try{O.handle.setVisible(H.visible)}catch{}break}case"ls_float_widget_destroy":{let O=K0.get(H.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Tl(O.rootElementId),K0.delete(H.widgetId);break}}});return()=>{u();for(let n of K0.values()){try{n.handle.destroy()}catch{}Tl(n.rootElementId)}K0.clear()}}function ML(l){let e=l?.type;return e==="ls_drawer_tab_register"||e==="ls_drawer_tab_set_title"||e==="ls_drawer_tab_set_short_name"||e==="ls_drawer_tab_set_badge"||e==="ls_drawer_tab_activate"||e==="ls_drawer_tab_destroy"}var ev=new Map;function WL(l,e){return`${l}:${e}`}function CG(l,e,w){let u=e((n)=>{if(!ML(n))return;let H=n,O=WL(H.scriptId,H.tabId);switch(H.type){case"ls_drawer_tab_register":{let q=ev.get(O);if(q){try{q.handle.destroy()}catch{}Tl(q.rootElementId),ev.delete(O)}let R;try{R=l.ui.registerDrawerTab({id:H.options.id,title:H.options.title,shortName:H.options.shortName,description:H.options.description,keywords:H.options.keywords,headerTitle:H.options.headerTitle,iconSvg:H.options.iconSvg,iconUrl:H.options.iconUrl})}catch(X){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",X);break}sh(H.rootElementId,R.root),R.root.setAttribute("data-ls-script",H.scriptId),R.root.setAttribute("data-ls-tab",H.tabId),ev.set(O,{scriptId:H.scriptId,tabId:H.tabId,rootElementId:H.rootElementId,handle:R}),R.onActivate(()=>{w({type:"ls_drawer_tab_activated",scriptId:H.scriptId,tabId:H.tabId})}),w({type:"ls_drawer_tab_registered",scriptId:H.scriptId,tabId:H.tabId});break}case"ls_drawer_tab_set_title":{let q=ev.get(O);if(!q)break;try{q.handle.setTitle(H.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let q=ev.get(O);if(!q)break;try{q.handle.setShortName(H.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let q=ev.get(O);if(!q)break;try{q.handle.setBadge(H.badge)}catch{}break}case"ls_drawer_tab_activate":{let q=ev.get(O);if(!q)break;try{q.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let q=ev.get(O);if(!q)break;try{q.handle.destroy()}catch{}Tl(q.rootElementId),ev.delete(O);break}}});return()=>{u();for(let n of ev.values()){try{n.handle.destroy()}catch{}Tl(n.rootElementId)}ev.clear()}}var xw=Pr(rg(),1);function hjg(l){let e=[],w=l.dom.addStyle(UW);e.push(w);let u=[],n=l.onBackendMessage((rr)=>{for(let nr of u)nr(rr)});e.push(n);let H=(rr)=>{return u.push(rr),()=>{let nr=u.indexOf(rr);if(nr!==-1)u.splice(nr,1)}},O=(rr)=>{l.sendToBackend(rr)},q=FG(l,H,O);e.push(q);let R=NG(l,H,O);e.push(R);let X=BG(l,H,O);e.push(X);let G=ZG(l,H,O);e.push(G);let A=xG(l,H,O);e.push(A);let Y=CG(l,H,O);e.push(Y),O({type:"frontend_ready"});let L=l.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),S=KP.createRoot(L.root);S.render(xw.jsxDEV(zP.StrictMode,{children:xw.jsxDEV($G,{onBackendMessage:H,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),e.push(()=>{try{S.unmount()}catch{}try{L.destroy()}catch{}});let T=l.ui.mount("settings_extensions"),_=KP.createRoot(T);return _.render(xw.jsxDEV(zP.StrictMode,{children:xw.jsxDEV(mG,{onBackendMessage:H,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),e.push(()=>_.unmount()),()=>{for(let rr of e)try{rr()}catch{}l.dom.cleanup()}}export{hjg as setup};
